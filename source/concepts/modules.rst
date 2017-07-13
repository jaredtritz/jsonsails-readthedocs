
Modules
=======

Modules have a unique URL associated to them and are viewable in most web
browsers.  

Rendering
^^^^^^^^^

To an end user modules appear as an ordinary web page, but behind the scenes
modules are actually rendered in the browser by the JSonSails rendering engine.
The rendering engine receives the instructions about how to render the module
from the server, rather than receiving the content itself.  While many modern
web applications utilize this technique to create dynamic content client side,
JSonSails takes the technique to a whole new level.  Mainly, we provide
developers with simple, flexible, and powerful abstraction of client rendering.

.. _`module-config`:

Configuring
^^^^^^^^^^^

JSonSails abstracts the concept of module configuration so that non-technical
developers can focus on configuring and composing modules more easily.  

The EzConfig API provides a consistent set of GUI widgets to capture
configuration information.  The API helps developers gather information into
the configuration data structure, which is then available to the module code
itself.

For example, an electronic birthday card module may have a configurable
birthday wish message or image, while a configurable survey module may have
configurable questions, or background color. The choice of what is configurable
is left up to the modules technical developer and owner.

See also 

* :ref:`module-viewing-permission`

Consists of
^^^^^^^^^^^

* Nodes (HTML, JavaScript, CSS)
* Refmods (references to other modules)
* UFiles (unique-user data files)
* SFiles (single-synchronous-server data files)
* JSLibs (JavaScript libraries)


