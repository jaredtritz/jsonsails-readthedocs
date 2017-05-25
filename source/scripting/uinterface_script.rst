.. _`script-uinterfaces`:

UInterface Script
=================

The UInterface script is kind of an interface to the UFile data, or can be used
that way anyhow.  The script can access the ufile values, and whatever the
script returns replaces the user's value in the Module JS and Module HTML
contexts.

.. literalinclude:: ../../../ezbuilder/src/javascript/authoring/renderer/UFileWrapper.es6
    :language: javascript
    :start-after: uinterface-script-format -->
    :end-before: <!-- end
    :dedent: 4

