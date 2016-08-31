
Ez Configuration
================

The EzConfig has three parts, and each of these config parts is viewable under
its own tab in the IDE, at the root node of a module, or the refnode of a
module.  

#. JSON
#. Script
#. GUI 

The EzConfig script produces an EzConfig GUI interface, which in turn is 
used to edit the config JSON.  The config JSON is a per-module data
structure which can be used in the module code to configure the module. 

See also 

#. :ref:`module-config`
#. :ref:`non-tech-developers`

JSON
^^^^

.. code-block:: json

    {
      "field_name": "some val"
    }

Script
^^^^^^

The main namespaces here are 

#. js.ConfigApi 
#. js.config

.. code-block:: javascript

    // Label 
    js.ConfigApi.addLabel("Paste static JSON database here:")
    
    // Small text input
    js.ConfigApi.addInput(js.config.field_name, function(val){
      js.config.field_name = val;
    })

    // Large text area
    js.ConfigApi.addText(js.config.db_name, function(val){
      js.config.db_name = val;
    })    

GUI
^^^

.. image:: ../../source/images/gui.png
    :width: 40%


