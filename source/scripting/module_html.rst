.. _`script-module-html`:

Module HTML
===========

Any valid HTML is acceptable, except script tags will not behave as expected 
because the script is not added to the HEAD of the document.  Link tags for
loading css from a CDN works fine.

See also :ref:`loading-js-cdn`

Access to UFiles
^^^^^^^^^^^^^^^^

Properties of a UFile object are accessible in the HTML.  The easiest way to 
utilize this feature is to attach these properties to an object in the UFile 
script and return the object as the UFile value.

.. code-block:: html

    <ufile>foo.user1.val</ufile>


See also:

* :ref:`rendering`

