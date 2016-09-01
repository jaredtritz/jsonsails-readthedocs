
Module JS
=========

Any valid javascript is acceptable  

Access to UFiles
^^^^^^^^^^^^^^^^

The following are both valid methods of accessing a UFile which has been
included into a module.

.. code-block:: javascript

    js.ufile.ufile_alias
    js.ufile['ufile_alias']
    js.ufile['ufile_alias'] = 'val' // assignment

UFile values format
^^^^^^^^^^^^^^^^^^^

UFile values (aka UValues) for included UFiles are loaded in a consistant
format no matter how they are requested.  If the UFile is requested as an
identified collection, then the user id keys will be the actual authentication
ids of the users who have values for that UFile.  If the UFile is reqeusted as
an anonymous collection, then all the ids will be fake ids, except the
authenticated user.  If only the authenticated user's own UFile is requested,
the format remains the same but only the authenticated user id is present on
that UFile.

The following may occur if ufileX_alias is requested as an identified
collection and ufileY_alias is requested as only the users own value.

.. code-block:: json
    
    {
      "ufileX_alias": {
          "real_id1": {"some-prop":7},
          "authenticated_id": {"some-prop":7},
          "real_id2": {"some-prop":7}
      },
      "ufileY_alias":{"authenticated_id":"some_string"}
    }



Access to SFiles
^^^^^^^^^^^^^^^^

The following are both valid methods of accessing a SFile which has been
included into a module.

.. code-block:: javascript

    js.sfile.sfile_alias
    js.sfile['sfile_alias']

Access to JSLibs
^^^^^^^^^^^^^^^^

The following are both valid methods of accessing a JSLib which has been
included into a module.

.. code-block:: javascript

    js.jslib.jslib_alias
    js.jslib['jslib_alias']


.. _`loading-js-cdn`:

Logging
^^^^^^^

There is a seperate table in the database for logging events, and the interface
for pushing data into that table is the same as the Google Analytics interface
except that the JSonSails table allows for more information to be pushed, like
the user id, and an extra json field.

The GA logging has the benefit of providing many useful views of the resource
usage, while the JSonSails log table, when exported for analysis can provide
much more detailed individual user data.

.. code-block:: javascript

    // pageview: boolean (indicates to call Google analytics)
    // elog: json object of named params for GA & jsonsails logging 
    // json: extra json field GA doesn't handle but offers more flexiblity in jsonsails logging
    js.logger.logEvent(pageview, elog, json)



Loading from CDN
^^^^^^^^^^^^^^^^

Script tags in the HTML will not load Javascript from a CDN b/c the module is
rendered after the page has been loaded. Therefore, to load an external Javascript 
file you should do it in the JS code, and wait for the script to finish loading 
before trying to use it.  This can be abstracted into a JSLib for convenience.  





