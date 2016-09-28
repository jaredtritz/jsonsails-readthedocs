.. _`refnode-closed`:

Referance Node
==============

Reference nodes, (aka refmods) allow you to import a module and render it
inside another module.  Refmods are rendered inside an iframe to provide
issolation.  To avoid circular dependencies, you cannot include a module as a
refmod if it already contain the root module.


.. note::

    Open refmods are unimplemented, but will accept drag/drop children
    modules which implement the appropriate interface.


See also:

* :ref:`node-properties`
* :ref:`refnode-config-script`
* :ref:`refnode-config-gui`
* :ref:`refnode-config-json`
* :ref:`script-logic`


