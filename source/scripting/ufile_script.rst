
UFile Script
============

The UFile script is kind of an interface to the UFile data, or can be used that
way anyhow.  The script can access the value, and whatever the script returns
replaces the value in the Module JS and Module HTML contexts.

.. code-block:: javascript

    js.val()            // your own value
    js.val('username')  // other value
    js.collection       // {username: value} (immutable)

