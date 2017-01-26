.. _`script-module-js`:

Module JS
=========

Any valid javascript is acceptable

.. _`uvalue-format`:

UFile values format
^^^^^^^^^^^^^^^^^^^

UFile values (aka UValues) for included UFiles are loaded in a consistent
format no matter how they are requested.  If the UFile is requested as an
identified collection, then the user id keys will be the actual authentication
ids of the users who have values for that UFile.  If the UFile is requested as
an anonymous collection, then all the ids will be fake ids, except the
authenticated user.  If only the authenticated user's own UFile is requested,
the format remains the same but only the authenticated user id is present on
that UFile.

The following is an example where ufileX is requested under aliasX as an identified
collection and ufileY is requested under aliasY as only the user's own value:

.. code-block:: json

    {
      "aliasX": {
          "real_id1": {"some-prop":7},
          "authenticated_id": {"some-prop":7},
          "real_id2": {"some-prop":7}
      },
      "aliasY":{"authenticated_id":"some_string"}
    }


.. _`ufile-writing-modulejs`:

Access to UFiles
^^^^^^^^^^^^^^^^

The following are valid methods of reading/writing UFiles which have been
included into a module.  The callback promise can be used to respond once the
server has saved the value.

.. code-block:: javascript

    // available in the module JS tab namespace
    js.ufile.alias.value              // output from ufile script's load()
    js.ufile.alias.raw()              // your own raw value
    js.ufile.alias.raw('username')    // other user's raw value
    js.ufile.alias.collection         // {username: value} (immutable)
    js.ufile.alias.get()              // fetch collection limited by permissions
    js.ufile.alias.set('new value')   // update value to server
    // set with callback
    js.ufile.alias.set('new value').then( ()=>{alert('done')} )



Access to SFiles
^^^^^^^^^^^^^^^^

The following are valid methods of an SFile which has been
included into a module.

.. code-block:: javascript

    // available in the module JS tab namespace
    
    js.sfile.alias.post(value)          // immediately send the value to the server
    js.sfile.alias.value                // current value from client cache

    // register a function to handle server pushed values
    js.sfile.alias.onUpdate(function(new_val){//callback code})   

Access to JSLibs
^^^^^^^^^^^^^^^^

The following are both valid methods of accessing a JSLib which has been
included into a module.

.. code-block:: javascript

    // available in the module JS tab namespace
    js.jslib.jslib_alias
    js.jslib['jslib_alias']

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
+ id       | integer                  |   automatic        |
+----------+--------------------------+--------------------+
| mwhen    | timestamp with time zone |   automatic        |
+----------+--------------------------+--------------------+
+ url      | text                     |   automatic        |
+----------+--------------------------+--------------------+
| category | text                     |   elog => GA       |
+----------+--------------------------+--------------------+
+ action   | text                     |   elog => GA       |
+----------+--------------------------+--------------------+
| label    | text                     |   elog => GA       |
+----------+--------------------------+--------------------+
+ value    | integer                  |   elog => GA       |
+----------+--------------------------+--------------------+
| json     | text                     |   json             |
+----------+--------------------------+--------------------+
+ who      | character varying(30)    |   automatic        |
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


