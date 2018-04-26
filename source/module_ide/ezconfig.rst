
Module Config
=============

.. note::

  The URL of the config interface (ICE) for a module is: jsonsails.com/module/<module_id>/config

Module configuration is designed at the root node, and for a reference module
the config GUI is exposed through the refmod node.

.. _`refnode-config-script`:

Config Script
^^^^^^^^^^^^^

The main namespaces here are 

* js.ConfigApi 
* js.config

See also

* :ref:`script-config-api`

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



