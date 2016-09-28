

Node Tree
==========

The node tree is located in the left side pain of the IDE.
There is always exactly one root node and it cannot be deleted.
Other nodes are added to the root node from the palette to produce the node tree.

There are two main types of nodes which can be added to the tree, "container" nodes, and "content" nodes.
Horizontal nodes and vertical nodes are Container nodes, and are used to control layout of their contents.
Container nodes can contain other nodes.
Leaf nodes and closed-refmods are content nodes, and are rendered to produce content.

Since closed-refmods are really an abstraction on a module, the module itself may be made up of both container
nodes and content nodes, but those are not visible when the module reference is made.   

Important points:

* node independence/isolation
  the code in a node cannot interfere with the code in another node
  unless you do so intentionally, or utilize window

* rendering order of nodes (breadth first)
  html first
  js second
  css applied by browser

* tree determines layout of module
* select a node in the tree to focus on and edit it
* parent/child properties

.. toctree::
    :maxdepth: 1
    :glob:

    node_properties
    root_node
    refnode_closed
    refnode_open
    leaf_node
    vertical_node
    horizontal_node



