
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

* :ref:`ufile-writing-modulejs`
* :ref:`ufile-writing-permission`

Reading from UFiles
^^^^^^^^^^^^^^^^^^^

UFile values are loaded into the module context under the alias specified.  The value
is then modified, persisted, or refreshed by the module code.

See also 

* :ref:`ufile-writing-modulejs`
* :ref:`ufile-reading-permission`
* :ref:`ufile-valet`

Consists of
^^^^^^^^^^^

* UInterface (Javascript)
 
If the UFile does not have a UInterface script then the raw value of the ufile is returned
when the ufile value is accessed. 

