Node Tree
==========

Important points:

* determines layout of module
* rendering order of nodes
* parent/child properties
* node isolation

.. _`node-props-table`:

Node Properties
^^^^^^^^^^^^^^^

+------------------------+------+------+------------+----------+--------+
|                        |         Node type                            |
+                        +------+------+------------+----------+--------+
|                        | Root | Leaf | Horizontal | Vertical | Refmod |
+========================+======+======+============+==========+========+
| Title                  |  x   |  x   |     x      |     x    |   x    |
+------------------------+------+------+------------+----------+--------+
| Outer HTML tag         |  x   |  x   |     x      |     x    |        |
+------------------------+------+------+------------+----------+--------+
| Outer HTML tag classes |  x   |  x   |     x      |     x    |   x    |
+------------------------+------+------+------------+----------+--------+
| Column widths          |      |      |     x      |          |        |
+------------------------+------+------+------------+----------+--------+



.. toctree::
    :maxdepth: 1
    :glob:

    root_node
    refnode_closed
    refnode_open
    leaf_node
    vertical_node
    horizontal_node
 
