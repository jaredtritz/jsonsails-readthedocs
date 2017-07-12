Ownership and permission 
========================

All resources in JSonSails have an owner who grants permission to others to use
the resource for their own purpose. We implement a permission model to manage
requesting and granting privileges for each resource.  Only the owner of a
resource can edit that resource, and the owner can pass ownership of the
resource to anyone they choose.  

.. _`including-permission`:

Permission to include
^^^^^^^^^^^^^^^^^^^^^

When the following resources are included, either directly or indirectly into a
module, the owner of the resource must grant permission before it will
be loaded as part of the module bundle. 

* UFiles
* UInterfaces
* SFiles
* SInterfaces
* JSLibs
* Modules

If the same resource has been included multiple ways, but one way has not been
permitted, the item is not loaded.

When you want to use someone else's resource as part of your module the first
step is to request it by simply including it.  Then one of several things will 
happen then depending on what the price is set to.

price = 0
  Anyone requesting the item will be granted permission for free

price = postive integer
  Permission will be granted to anyone upon payment of the price

price = null
  Owner will have to review the request and can then either permit for free, or set
  a custom price. If a custom price is set the permission is granted upon payment.

Requests are passive, meaning that the owner can review requests
at their leisure, but there is no notification.  Therefore, if you want to use
someone's resource it's best to coordinate with them outside the system via
email or something, asking them to permit your request.  Their user profile
page might be helpful in finding their email address.

Permission requests can be reviewed either from the setup page
of the including object, or on the buying page which aggregates all requests
made by the authenticated user.  Permission approvals can be granted either from
the setup page for the object being included, or from the selling page which
aggregates all requested for objects owned by the authenticated user. 

.. _`ufile-writing-permission`:

UFile (UValue) Writing
^^^^^^^^^^^^^^^^^^^^^^

UFiles permission levels for writing are set by the owner to have one of these
two values:

#. Only the UFile owner can write values 
#. Users can write their own value

Data which you load into the system might be something you want to protect
against users editing their own value, like grades for example.  On the other
hand, you often want users to be able to set their own value.

.. _`ufile-reading-permission`:

UFile (UValue) Reading
^^^^^^^^^^^^^^^^^^^^^^

UFiles permission levels for reading are set by the owner to have one of these
three values:

#. Just the user's own value
#. Collection of all user values with anonymous identifiers
#. Collection of all user values with real identifiers

As long as the read request level is equal or below the max permission level
set by the owner, then the request will be honored. 

UFile values (aka UValues) are loaded in a consistent format no matter how they
are requested.  If the UFile is requested as an identified collection, then the
user id keys will be the actual authentication ids of the users who have values
for that UFile.  If the UFile is requested as an anonymous collection, then all
the ids will be fake ids, except the authenticated user.  If only the
authenticated user's own UFile is requested, the format remains the same but
only the authenticated user id is present on that UFile collection.

.. note:: 

  If one resource requests a UFile at level 1, and another at level 2, where the
  limit permits level 2, then only level 2 will be loaded as it also contains the
  information of a level 1 request.

.. _`ufile-valet`:

UFile valet users 
^^^^^^^^^^^^^^^^^

Valet users can may be granted unique read/write permissions for a UFile.
Sometimes it is desirable to grant only certain users permission to load a
UFile collection or write user values.  In this case, the UFile may include
valet users, and their read/write permissions are set individually.

.. note:: 

  Including valet users may slow performance slightly since it will generate a
  "valet" check whenever that UFile is requested.


