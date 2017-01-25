.. _`script-sfiles`:

SFile Script
============

The SFile script is an interface to the SFile data, which is executed on the server.

.. code-block:: javascript

    js.username
    module.exports = {
      save: function(state, input)    {// update state on server, returns next state}
      load: function(var next_state)  {// filter before it gets to client, returns client state}
    } 


