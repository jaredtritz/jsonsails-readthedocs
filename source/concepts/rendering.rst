.. _`rendering`:

Rendering
=========


Code and data are packaged into a client "bundle" and passed the web browser along 
with a rendering engine which also runs in the client browser.
The rendering engine first collects the css from all nodes and added to the
document head in a style tag.  Then the HTML from all the nodes is rendered
into the document breadth first from the root.  After that, the JS is rendered
breadth first as well.


