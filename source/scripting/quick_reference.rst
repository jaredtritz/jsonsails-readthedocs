
Quick Reference
===============

All in one spot API syntax reference for various environments.

Module HTML
^^^^^^^^^^^

.. code-block:: html

  <ufile>alias</ufile>
  <ufile>alias.path.to.property</ufile>


Module JS
^^^^^^^^^

.. code-block:: javascript

    js.username
    js.config
    js.ufile.alias.val()
    js.ufile.alias.val('username')
    js.ufile.alias.collection
    js.ufile.alias.get()
    js.ufile.alias.set('new value')
    js.ufile.alias.set('new value').then( ()=>{alert('done')} )
    js.sfile.alias.???
    js.jslib.alias
    js.logger.logEvent(pageview, elog, json)
    js.node.parent
    js.node.children
    js.node.id
    js.node.title
    js.rerender()


Logic
^^^^^

.. code-block:: javascript

    js.ufile.alias.*


Config Script
^^^^^^^^^^^^^

.. code-block:: json

    js.config
    js.ConfigApi.addLabel("label")
    js.ConfigApi.addInput(field_name, callback)
    js.ConfigApi.addText(field_name, callback)


UFile script
^^^^^^^^^^^^

.. code-block:: javascript

    js.username
    js.val()
    js.val('username')
    js.collection
    js.jslib.alias
    module.exports = {
      load: function(var){// can return anything}
      save: function(var){// can return anything}
      serialize: function(var){ // must return string!}
      deserialize: function(string){// can return anything} 
    }


UFile values format
^^^^^^^^^^^^^^^^^^^

.. code-block:: json

    { "ufileY_alias":{"authenticated_id":"some_string"} }


