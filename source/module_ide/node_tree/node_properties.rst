.. _`node-properties`:

Node Properties
^^^^^^^^^^^^^^^

Each of the nodes has a "Props" tab, and below are the definitions of each
property, and a table indicating which node types have each property.

Title:
  Used as label in node tree and should be descriptive.

Outer HTML tag:
  HTML tag to wrap the entire node at rendering. For example "div" will place
  <div>...</div> around the node.

Outer HTML tag classes:
  CSS classes added to the outer tag at rendering. 

Column widths:
  Determines the columns widths in a horizontal layout.

+------------------------+------+------+------------+----------+--------+
| Property               |         Node type                            |
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


See also:

* :ref:`script-node-attributes` 


