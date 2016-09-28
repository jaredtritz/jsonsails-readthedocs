.. _`refnode-closed`:

Referance Node
==============

Reference nodes, (aka refmods) allow you to import a module and render it
inside another module.  Refmods render the module inside an iframe to provide
issolation.  To avoid circular dependencies, so you cannot include a
module as a refmod if it already contain the root module.


.. note::

    Open refmods are unimplemented, but will accept drag/drop children
    modules designed to implement their interface.


See also:

* :ref:`node-properties`
* :ref:`refnode-config-script`
* :ref:`refnode-config-gui`
* :ref:`refnode-config-json`
* :ref:`script-logic`


