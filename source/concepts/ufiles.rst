
UFiles
======

UFiles are user oriented data stores, where user means authentication identity.
Creating a UFile produces a new storage container, which can store a unique
value per user in the form of any primitive Javascript data type or JSON data.  

.. note:: 

  Programmers can think of UFiles as loosely typed, infinite session, user
  variables, which are loaded into the scope of the module code.


Here is a diagram outlining the way UFiles are marshaled in use.

.. image:: ../../source/images/ufile_marshaling.png
    :width: 80%


Writing to UFiles
^^^^^^^^^^^^^^^^^

When a UFile value is saved, provided the user has permission to write it, the
value persists to the value owned by the authentication identity.  

See also

* :ref:`ufile-writing-permission`
* :ref:`ufile-writing-modulejs`

Reading from UFiles
^^^^^^^^^^^^^^^^^^^

UFile values are loaded into the module context under the alias specified.  The value
is then modified, persisted, or refreshed by the module code.

See also 

* :ref:`uvalue-format`
* :ref:`ufile-writing-modulejs`
* :ref:`ufile-reading-permission`
* :ref:`ufile-valet`

Consists of
^^^^^^^^^^^

* Script (Javascript)
* JSLibs (JavaScript libraries)
 
If the ufile script does not exist then the raw value of the ufile is returned
when the ufile value is accessed. 

If UFile script does exist then module.exports must define load and save methods,
and optionally it may also define serialize and deserialize methods. These methods
will determine how the value is transformed when the ufile value is loaded and saved.

UFile script may utilize JSLibs.

