
Quick Reference
===============

Authenticated User
^^^^^^^^^^^^^^^^^^

.. code-block:: json

    js.username

UFile values format
^^^^^^^^^^^^^^^^^^^

.. code-block:: json
    
    { "ufileY_alias":{"authenticated_id":"some_string"} }

Module JS
^^^^^^^^^

.. code-block:: javascript

    js.ufile.alias.val()            
    js.ufile.alias.val('username')  
    js.ufile.alias.collection       
    js.ufile.alias.get()            
    js.ufile.alias.set('new value') 
    js.ufile.alias.set('new value').then( ()=>{alert('done')} )
    js.sfile['sfile_alias']
    js.jslib['jslib_alias']
    js.logger.logEvent(pageview, elog, json)


EzConfig
^^^^^^^^

.. code-block:: json

    js.config
    js.ConfigApi.addLabel("label")
    js.ConfigApi.addInput(field_name, callback)


