.. _`script-ufiles`:

UFile Script
============

The UFile script is kind of an interface to the UFile data, or can be used that
way anyhow.  The script can access the value, and whatever the script returns
replaces the value in the Module JS and Module HTML contexts.

.. code-block:: javascript

    // available in the UFile script namespace
    js.val()            // your own value
    js.val('username')  // other value
    js.collection       // {username: value} (immutable)
    js.jslib.alias      // jslib included under alias

    module.exports = {
      load: function(var){// can return anything}
      save: function(var){// can return anything}
      serialize: function(var){ // must return string!}
      deserialize: function(string){// can return anything} 
    }

    When loading with js.ufile.alias.val() execution order is 1) deserialize, then 2) load

    When you persist using js.ufile.set('val') execution order is 1) save, then 2) serialize

