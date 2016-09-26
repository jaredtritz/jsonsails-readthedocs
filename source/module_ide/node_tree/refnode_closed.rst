Referance Node (closed)
=======================


Important points:

* can't create circular references, i.e. root module is already used in the refnode or its dependencies


Props
^^^^^



Config
^^^^^^

The config is JSON data structure which is accessible in module JS context.

.. code-block:: json

    {
      "field_name": "some val"
    }


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


.. _`refnode-ezconfig`:

EzConfig
^^^^^^^^

This is the configuration GUI, created by the config script, to set 
properties of the config JSON. 

.. image:: ../../../source/images/gui.png
    :width: 40%




Logic
^^^^^




