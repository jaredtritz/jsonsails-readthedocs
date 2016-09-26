
Quick Reference
===============

All in one spot API syntax reference for various enviornments.

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
    js.set = function(obj){ return obj.prop }

UFile values format
^^^^^^^^^^^^^^^^^^^

.. code-block:: json
    
    { "ufileY_alias":{"authenticated_id":"some_string"} }


