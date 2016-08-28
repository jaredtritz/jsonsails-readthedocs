
Quick Reference
===============

.. _`uvalue-format`:

UFile values format
^^^^^^^^^^^^^^^^^^^

.. code-block:: json
    
    { "ufileY_alias":{"authenticated_id":"some_string"} }

Module JS
^^^^^^^^^^^^^^^^^^

.. code-block:: javascript

    js.sfile['sfile_alias']
    js.ufile['ufile_alias']
    js.jslib['jslib_alias']
    js.logger.logEvent(pageview, elog, json)


EzConfig
^^^^^^^^

.. code-block:: json

    js.config
    js.ConfigApi.addLabel("label")
    js.ConfigApi.addInput(field_name, callback)


