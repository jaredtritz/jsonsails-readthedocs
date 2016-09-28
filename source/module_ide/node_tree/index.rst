

Node Tree
==========

The node tree is located in the left pain of the IDE.  Each node is rendered 
by itself in an anonymous function so that its code is issolated from other 
nodes.  For internode communication you may choose to use "window" which is 
a shared namespace. 

.. important:: Refnodes are rendered in an iframe and so do not share the window namespace

The HTML of all the nodes is rendered breadth first from the root, then the JS is rendered the 
same way, breadth first as well.  CSS is applied by the browser.

.. toctree::
    :maxdepth: 1
    :glob:

    node_properties
    root_node
    refnode
    leaf_node
    vertical_node
    horizontal_node



