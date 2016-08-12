Permissions
===========

The concept of permission comes up in a couple different ways.

Permission to include
^^^^^^^^^^^^^^^^^^^^^

When the following resources are included, either directly or indirectly into a
module, the owner of the resource must grant permission before it will
be loaded as part of the module bundle. 

* UFiles
* SFiles
* JSLibs
* Modules

If the same resource has been included multiple ways, but one way has not been
permitted, the item is not loaded.

When you want to use someone else's resource as part of your module the first
step is to request its use by simply including it.  This will generate a
request to the owner who can either permit use or ignore the request.  Requests
are passive, meaning that the owner can review requests at their leasure, but
there is no notification.  Therefore, if you want to use someone else's
resource it's best to coordinate and discuss with them outside the system via
email or some other means of communication.  

.. _`ufile-permission`:

UFile Writing
^^^^^^^^^^^^^

UFiles are set by the owner to have one of these two permission levels for writing

#. No user writing is permitted
#. Users can write their own value

Data which you load into the system, or manage using the special valet
permissions, might be something you don't want to allow users to edit, like
grades for example.  On the other hand, you often want users to be able to set
the value of their data.

UFile Reading
^^^^^^^^^^^^^

UFiles are set by the owner to have one of these three permission levels for
reading

#. Just the user value
#. Collection of all user values with anonymous labels
#. Collection of all user values with identified labels

As long as the request to read is equal or below the max permission level set
by the owner, then the request will be honored. Please note, that if one
resource requests a UFile at level 1, and another at level 2, where the limit
permits level 2, then only level 2 will be loaded as it also contains the
information of a level 1 request.

.. _`ufile-valet`:

UFile valet users 
^^^^^^^^^^^^^^^^^

Sometimes it may be desireable to allow only certain users to load certain
UFile data, especially collections.  In this case, the valet permissions allow the
module developer to set the include as a "valet" request for that UFile.  The
UFile owner then has to grant specific valet users unique read permissions
before the module will load the data appropriatly for those users.



