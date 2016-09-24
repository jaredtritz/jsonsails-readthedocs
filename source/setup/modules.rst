
Modules
=======

Module setup involves linking the module to

* ufiles
* sfiles
* jslibs


UFile read request level
^^^^^^^^^^^^^^^^^^^^^^^^

This setting for included ufiles will determine how the ufile data is 
included into the bundle.

See also:

* :ref:`ufile-reading-permission`
* :ref:`including-permission`

.. _`module-ref-behavior`:

UFile and SFile reference behavior
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The reference behavior of a ufile is used when a reference module is made from
the module including the ufile.  Depending on this setting, either, the same
ufile will be linked to the new refmod or a new ufile will be created and
linked. 


