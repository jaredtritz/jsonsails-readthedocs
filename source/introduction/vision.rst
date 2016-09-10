Vision
======

.. _JSFiddle: https://jsfiddle.net/

*What are the key features of JSonSails and how it works?*

In-browser Development Environment (IDE)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

JSonSails offers a minimalist but complete "in browser" development
environment. The IDE doesn't require any special configuration or setup, and is
meant to eliminate the need for setting up personal development environments.

We take inspiration from other online web coding environments like JSFiddle_,
and integrate a code editor into the IDE, however the IDE is designed to
support both coding and non-coding tasks.  For example, the IDE supports
reviewing and editing code, as well as creating new resources and content by
borrowing and combining existing resources. It also supports configuring, and
releasing content.  

Technical developers
^^^^^^^^^^^^^^^^^^^^

We want to make sure that code is always exposed all the way to lowest level so
that technical developers can always inspect and evaluate the quality,
reusability, and adaptability of a resource. 

.. _`non-tech-developers`:

Non-technical developers
^^^^^^^^^^^^^^^^^^^^^^^^

We also want to ensure resources, such as code and user data are easy to adapt,
share, evolve, and maintain, even for non-technical developers.  Thus, we've
designed our IDE to support configuration and composition of resources as well,
giving equal or higher priority to the creation of new resources through
non-technical combination and configuration of existing resources.

Ownership and permission 
^^^^^^^^^^^^^^^^^^^^^^^^

All resources in JSonSails have an owner who must grant permission to others
who request to borrow the resource for their own use. In JSonSails
"collaborative development" often means leveraging a module or bit of user data
that another developer owns.  Thus, we implement a robust and simple permission
model, based on requesting and granting the privileges to use private
resources.  

Additionally, only the owner of a resource can actually edit that resource, and
the owner can pass ownership of the resource to anyone they choose. 



