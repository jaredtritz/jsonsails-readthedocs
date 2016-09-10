
SFiles
======

The "S" stands for any of:

* single
* server
* shared
* synchronous

SFiles are single instance data stores, their script runs on the server, and
they can be used to store shared data or to manage synchronization among users.

Writing to SFiles
"""""""""""""""""

Writing to SFiles is done server side through an interface implemented in the
script.  Thus, the server can make sure the writing is synchronized among users.
The script is written and managed by the owner of the SFile. 

Reading from SFiles
"""""""""""""""""""

SFile values are sent to the client when a module loads, or when a fresh value
is requested.

Consists of
"""""""""""

* Script (Javascript)
* JSLibs (JavaScript libraries)
 

