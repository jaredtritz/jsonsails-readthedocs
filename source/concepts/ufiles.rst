
UFiles
======

UFiles are user oriented data stores, where **user** means authentication identity.
Creating a UFile produces a new storage container, which can store a unique
user value in the form of any primitive Javascript data type or JSON data.

Writing to UFiles
"""""""""""""""""

When a UFile value is saved it persists only the value owned by the authentication
identity.  

Reading from UFiles
"""""""""""""""""""

When a stored UFile value is retrieved from the server its requested in one of three ways:

#. Just the user value
#. Collection of all user values with anonymous labels
#. Collection of all user values with identified labels

Consists of
"""""""""""

* Script (Javascript)
* JSLibs (JavaScript libraries)
  
If UFile script exists then its return value is substituted as the UFile value
such that the actual persisted values can derive a return value in the script.
UFile script may utilize JSLibs.

