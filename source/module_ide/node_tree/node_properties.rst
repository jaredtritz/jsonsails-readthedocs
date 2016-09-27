.. _`node-properties`:

Node Properties
^^^^^^^^^^^^^^^

Title:
  Appears in node tree and should be descritive.

Outer HTML tag:
  Tag to wrap the entire node. For example "div" will place <div>...</div> around the node.

Outer HTML tag classes:
  Classes added to the outer tag. 

Column widths:
  Relative width of columns in a horizontal layout.

Each of the nodes has a "Props" tab, and below is a table indicating which
node types have which properties.

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


