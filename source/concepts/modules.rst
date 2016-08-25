
Modules
=======

Modules have a unique URL associated to them and are viewable in most web
browsers.  

Rendering
"""""""""

To an end user modules appear as an ordinary web page.  Behind the scenes
however, modules are actually rendered in the browser by the JSonSails
rendering engine.  The rendering engine recieves the instructions about how to
render the module from the server, rather than recieving the content itself.
While many modern web applications utilize the power of the browser to create
dynamic content client side, JSonSails takes that to a whole new level.

.. _`module-config`:

Configuring
"""""""""""

JSonSails abstracts the concept of browser rendering so that non-technical
developers can focus on module configuration and composition more easily.  To a
non-technical developer, module content and behavior is configurable using
its EzConfig interface.  Configuration of a module prepares it for a specific
purpose.  For example, an electronic birthday card module may have a
configurable birthday wish message or image, while a configurable survey module
may be configurable questions, or background color. The choice of what is
configurable about a module is left up to the modules technical developer and
owner.

Consists of
"""""""""""

* Nodes (HTML, JavaScript, CSS)
* Refmods (references to other modules)
* UFiles (unique-user data files)
* SFiles (single-syncronous-server data files)
* JSLibs (JavaScript libraries)


