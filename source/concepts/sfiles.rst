
SFiles
======

SFiles are **single instance** data stores, which can be used to store shared
data for example, or to manage syncronization among users.

Writing to SFiles
"""""""""""""""""

Writing to SFiles is done server side, so that the server can make sure the
writing is syncronized among users.  The script is written and managed by the
owner of the SFile. 

Reading from SFiles
"""""""""""""""""""

SFile values are sent to the client when a module loads, or when a fresh value
is requested.

Consists of
"""""""""""

* Script (Javascript)
* JSLibs (JavaScript libraries)
 

