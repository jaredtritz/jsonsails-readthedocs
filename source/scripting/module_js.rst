.. _`script-module-js`:

Module JS
=========

Any valid javascript is acceptable.  In addition, there's a global 'js' object hoisted into context
which exposes the :doc:`JSonSails API</../api_docs/js_api>`.

.. _`ufile-writing-modulejs`:
.. _`uvalue-format`:

Access to UFiles & UValues
^^^^^^^^^^^^^^^^^^^^^^^^^^

UFiles and UValues are managed through a subset of the JSonSails API called the :doc:`UFile API</../api_docs/ufile_api>`

.. code-block:: javascript
    
    // from the Module JS
    js.ufile.<alias>.<api method>

Access to SFiles
^^^^^^^^^^^^^^^^

SFiles and SValues are managed through a subset of the JSonSails API called the :doc:`SFile API</../api_docs/sfile_api>`

.. code-block:: javascript
    
    // from the Module JS
    js.sfile.<alias>.<api method>

Access to JSLibs
^^^^^^^^^^^^^^^^

The following are both valid methods of accessing a JSLib which has been
included into a module.

.. code-block:: javascript

    // available in the module JS tab namespace
    js.jslib.<alias>.<property, method>

.. _`script-node-attributes`:

Node attributes
^^^^^^^^^^^^^^^

Node attributes can be handy to communicate between nodes, or use the node ID
to scope a DOM search.

.. code-block:: javascript

    // available in the module JS tab namespace
    js.node.parent    // returns parent node (except root returns null)
    js.node.children  // returns list of child nodes
    js.node.id        // returns node id, also given to node wrapping html tag
    js.node.title     // node title, set from node property

Re-Rendering
^^^^^^^^^^^^

.. code-block:: javascript

    // available in the module JS tab namespace
    js.rerender     // immediately re-render the current module

Logging
^^^^^^^

There is a separate table in the database called the ELog table, for logging events, and the interface
for pushing data into that table is the same as the Google Analytics interface
except that the JSonSails table allows for more information to be pushed, like
the user id, and an extra json field.

A call the logger might look something like this

.. code-block:: javascript

    // available in the module JS tab namespace
    // pageview: boolean (indicates to call Google analytics w/ elog information)
    // elog: json object of named params for GA & jsonsails logging
    // json: extra json field GA doesn't handle but offers more flexibility in jsonsails logging

    var json = {};
    var question = model.get_question();
    json.choices = model.get_choices();
    json.answer = model.answer;
    var correct = model.resp_correct();
    var elog = {
        'eventCategory': 'nts',
        'eventAction': 'answer',
        'eventLabel': 'correct',
        'eventValue': correct
    };
    var elog = {}
    var json = {}
    js.logger.logEvent(pageview, elog, json)


+----------+--------------------------+--------------------+
|       ELog Table                                         |
+----------+--------------------------+--------------------+
| Column   | Type                     |   Source           |
+==========+==========================+====================+
| id       | integer                  |   automatic        |
+----------+--------------------------+--------------------+
| mwhen    | timestamp with time zone |   automatic        |
+----------+--------------------------+--------------------+
| url      | text                     |   automatic        |
+----------+--------------------------+--------------------+
| category | text                     |   elog => GA       |
+----------+--------------------------+--------------------+
| action   | text                     |   elog => GA       |
+----------+--------------------------+--------------------+
| label    | text                     |   elog => GA       |
+----------+--------------------------+--------------------+
| value    | integer                  |   elog => GA       |
+----------+--------------------------+--------------------+
| json     | text                     |   json             |
+----------+--------------------------+--------------------+
| who      | character varying(30)    |   automatic        |
+----------+--------------------------+--------------------+

The GA logging has the benefit of providing many useful views of the resource
usage, while the JSonSails log table, when exported for analysis can provide
much more detailed individual user data.


.. _`loading-js-cdn`:

Loading from CDN
^^^^^^^^^^^^^^^^

Script tags in the HTML will not load Javascript from a CDN b/c the module is
rendered after the page has been loaded. Therefore, to load an external Javascript
file you should do it in the JS code, and wait for the script to finish loading
before trying to use it.  This can be abstracted into a JSLib for convenience.


See also:

* :ref:`rendering`


