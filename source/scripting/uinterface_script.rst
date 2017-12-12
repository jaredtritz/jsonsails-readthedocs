.. _`script-uinterfaces`:

UInterface Script
=================

The UInterface script is kind of an interface to the UFile data, or can be used
that way anyhow.  The script can access the ufile values, and whatever the
script returns replaces the user's value in the Module JS and Module HTML
contexts.

.. literalinclude:: ../comments/UFileWrapper.es6_uinterface-script-format.js
    :language: javascript

If the serialize and deserialize methods are not over-written above, the
following defaults are used:

.. literalinclude:: ../comments/render_common.es6_default-serialize.js
    :language: javascript

.. literalinclude:: ../comments/render_common.es6_default-deserialize.js
    :language: javascript

