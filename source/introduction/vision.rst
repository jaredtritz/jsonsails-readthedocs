Vision
======

.. _JSFiddle: https://jsfiddle.net/

*What are the key features of JSonSails and how it works?*

In-browser Development Environment (IDE)
""""""""""""""""""""""""""""""""""""""""

JSonSails offers a minimalist but complete "in browser" development
environment. The IDE doesn't require any special configuration or setup, and is
meant to eliminate the need for setting up personal development environments.

We take inspiration from other online web coding environments like JSFiddle_,
and integrates a code editor into the IDE which is designed to support both
coding and non-coding tasks.  For example, the IDE supports routine maintenance
like reviewing, editing, configuring, and releasing content.  It also supports
creating new resources and content by barrowing and combining existing
resources.


Technical developers
""""""""""""""""""""

We want to make sure that code is always exposed all the way to lowest level so
that technical developers can always inspect and evaluate the quality,
re-usability, and adaptability of a resource. We understand that a quick
modification to the source code is sometimes just what the doctor ordered and
aim to ensure this prescription is never thwarted by hidden source code.

Non-technical developers
""""""""""""""""""""""""

However, we also want to ensure resources, such as code and user data are easy
to adapt, share, evolve, and maintain, even for non-technical developers.
Thus, we've designed our IDE to support configuation and composition of
resources as well, giving this equal priority as technical developemnt of new
resources.

Permission management
"""""""""""""""""""""

All resources in JSonSails have an owner who must the grant permission to
others who request to barrow the resource for their own use. In JSonSails
collaborative development often means leveraging a module or bit of user data
that another developer owns.  Thus, we implement a robust and simple permission
model, based on requesting and granting the privileges to use private
resources.  

Additionally, only the owner of a resource can actually edit that resource, and the owner can
pass ownership of the resource to anyone they choose. 



