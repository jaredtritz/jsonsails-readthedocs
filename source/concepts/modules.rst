
Modules
=======

Modules have a unique URL associated to them and are viewable in most web
browsers.  

Rendering
^^^^^^^^^

The client browser first loads the JSonSails rendering engine, and then the
module "bundle" which consists of the module's code and data.  The rendering
engine first collects the css from all nodes and added to the document head in
a style tag.  Then the HTML from all the nodes is rendered into the document
breadth first from the root.  After that, the JS is rendered breadth first as
well.

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


