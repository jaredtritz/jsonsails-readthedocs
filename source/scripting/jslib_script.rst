.. _`script-jslibs`:

JSLib Script
============

The script is edited on the JSLib setup page, and the return value should be an
object.  The object which will be accessed in the including environment under
the alias which it is given on the including setup page.


.. literalinclude:: ../../../ezbuilder/src/javascript/authoring/renderer/JsLibMgr.es6
    :language: javascript
    :start-after: jslib-script-format -->
    :end-before: <!-- end
    :dedent: 2


