
SFiles
======

SFiles are single instance data stores, their script runs on the server, and
they can be used to store shared data or to manage synchronization among users.

The "S" stands for any of:

* single
* server
* shared
* synchronous

Here is a diagram outlining the way SFiles are marshaled in use.

.. image:: ../../source/images/sfile_marshaling.png
    :width: 80%

Writing to SFiles
"""""""""""""""""

Writing to SFiles is done server side via the SInterface.  Thus, the server can
make sure the writing is synchronized among users.  

Reading from SFiles
"""""""""""""""""""

SFile values are sent to the client when a module loads, or when a fresh value
is pushed.

Consists of
"""""""""""

* SInterface
 

