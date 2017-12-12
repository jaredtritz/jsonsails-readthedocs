.. _`script-module-js`:

Module JS
=========

Any valid javascript is acceptable.  In addition, there's a global 'js' object hoisted into context
which exposes the :doc:`JSonSails API</../api_docs/js_api>`.

.. _`ufile-writing-modulejs`:

Access to UFiles & UValues
^^^^^^^^^^^^^^^^^^^^^^^^^^

UFiles and UValues are managed through a subset of the JSonSails API called the :doc:`UFile API</../api_docs/ufile_api>`

.. code-block:: javascript
    
    // from the Module JS
    js.ufile.<alias>.*

Access to SFiles
^^^^^^^^^^^^^^^^

SFiles and SValues are managed through a subset of the JSonSails API called the :doc:`SFile API</../api_docs/sfile_api>`

.. code-block:: javascript
    
    // from the Module JS
    js.sfile.<alias>.*

Access to JSLibs
^^^^^^^^^^^^^^^^

The following are both valid methods of accessing a JSLib which has been
included into a module.

.. code-block:: javascript

    // available in the module JS tab namespace
    js.jslib.<alias>.*

.. _`script-node-attributes`:

Node attributes
^^^^^^^^^^^^^^^

Node attributes can be handy to communicate between nodes, or use the node ID
to scope a DOM search. Access to node is managed through a subset of the JSonSails API called the :doc:`Node API</../api_docs/node_api>`

.. code-block:: javascript
    
    // from the Module JS
    js.node.*

js.node.dom.querySelector(*) is particularly useful for handling DOM search, and should be used especially when 
a refernce to the module will be taken later.  This search pattern will ensure the search scope is 
limited to the specific reference and not all similiar references on a page.  Here are some examples
of how to use this kind of dom search:

.. code-block:: javascript
    
    // finding by class (recommended)
    var next_button = js.node.dom.querySelector('.next')
    var prev_button = js.node.dom.querySelector('.prev')
    var submit_button = js.node.dom.querySelector('.submit')
    var page_indicator = js.node.dom.querySelector('.page-count')
    // setting 
    js.node.dom.querySelector('h2').textContent = js.config.question
    js.node.dom.querySelector('input').value = js.ufile.answer.value

Finding by ID is not recommended b/c browser implementation is generally not reliable since it sometimes
assumes IDs are unique and uses the old global search method which results in an unscoped result.

Logging
^^^^^^^

The :ref:`Logging API <JsApi+logEvent>` is used to send logging data to the
server, which is stored in a single table called the ELog table, which stores
log event data.  We extended the Google Analytics interface to allow for more
information to be pushed, like the user id, and an extra json field.  The GA
logging has the benefit of providing many useful views of the resource usage,
while the JSonSails log table, when exported for analysis can provide much more
detailed individual user data.

.. note::

    GA integration is not completed but the logging interface will allow
    the same logging calls to send logs to a GA account as well.

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

.. note::
    
    When a module does not require authentication then the IP address will be
    placed in the "who" column"

See also:

* :ref:`module-viewing-permission`

.. _`loading-js-cdn`:

Loading from CDN
^^^^^^^^^^^^^^^^

Script tags in the HTML will not load Javascript from a CDN b/c the module is
rendered after the page has been loaded. Therefore, to load an external Javascript
file you should do it in the JS code, and wait for the script to finish loading
before trying to use it.  This can be abstracted into a JSLib for convenience.


See also:

* :ref:`rendering`


