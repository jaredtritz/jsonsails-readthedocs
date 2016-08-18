
EzConfig
========

The EzConfig has three parts, and each of these config parts is viewable under
its own tab in the IDE, at the root node of a module, or the refnode of a
module.  

#. JSON
#. Script
#. GUI 

The EzConfig script produces an EzConfig GUI interface, which in turn is 
used to edit the config JSON.  The config JSON is a per-module data
structure which can be used in the module code to configure the module. 

The main namespaces here are 

#. js.ConfigApi 
#. js.config

JSON
^^^^

.. code-block:: json

    {
      "field_name": "some val"
    }

Script
^^^^^^

.. code-block:: javascript
    
    js.ConfigApi.addLabel("Paste static JSON database here:")
    js.ConfigApi.addInput(js.config.field_name, function(val){
      js.config.field_name = val;
    })

GUI
^^^

.. image:: ../../source/images/gui.png
    :width: 40%


