
Ez Configuration
================

Module configuration is designed at the root node, and for a reference module
the config GUI is exposed through the refmod node.

.. note::

  The config interface will eventually be accessible by its own module specific url,
  but for now is embedded in the main IDE interface for the module.

.. _`refnode-config-script`:

Config Script
^^^^^^^^^^^^^

The main namespaces here are 

* js.ConfigApi 
* js.config

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

    // Add plus area
    var params = {
      "initial":js.config.field_name.map((tok)=>{JSON.stringify(tok)}),
      "validate":function(val){return val.hasOwnProperty('answer')},
      "callback":function(val){js.config.field_name = JSON.parse(val)},
      "info":"<h3>Instructions</h3>",
    }
    js.ConfigApi.addPlusArea(params)    

.. _`refnode-config-gui`:

Config GUI
^^^^^^^^^^

This is the configuration GUI, created by the config script, to set 
properties of the config JSON. 

.. image:: ../../source/images/gui.png
    :width: 40%


.. _`refnode-config-json`:

Config JSON
^^^^^^^^^^^

The config is JSON data structure which is accessible in module JS context.

.. code-block:: json

    {
      "field_name": "some val"
    }



