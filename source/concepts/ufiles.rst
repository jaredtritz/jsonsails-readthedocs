
UFiles
======

UFiles are user oriented data stores, where **user** means authentication identity.
Creating a UFile produces a new storage container, which can store a unique
user value in the form of any primitive Javascript data type or JSON data.  

.. note:: 

  Programmers can think of UFiles as loosely typed user variables

Writing to UFiles
"""""""""""""""""

When a UFile value is saved, provided the user has permission to write it, the
value persists to the value owned by the authentication identity.  See also
:ref:`ufile-permission`

Reading from UFiles
"""""""""""""""""""

When a stored UFile value is retrieved from the server its requested at one of the three read levels.

See also 

* :ref:`ufile-permission`
* :ref:`uvalue-format`
* :ref:`ufile-valet`

Consists of
"""""""""""

* Script (Javascript)
* JSLibs (JavaScript libraries)
  
If UFile script exists then its return value is substituted as the UFile value
such that the actual persisted values can derive a return value in the script.
UFile script may utilize JSLibs.

