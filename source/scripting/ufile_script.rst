.. _`script-ufiles`:

UFile Script
============

The UFile script is kind of an interface to the UFile data, or can be used that
way anyhow.  The script can access the value, and whatever the script returns
replaces the value in the Module JS and Module HTML contexts.

.. code-block:: javascript

    // available in the UFile script namespace
    js.jslib.alias      // jslib included under alias
    module.exports = {
      load: function(myval, collection) {// can return anything}
      save: function(newval)            {// can return anything}
      serialize: function(myval)        {// must return string!}
      deserialize: function(string)     {// can return anything}
    }


