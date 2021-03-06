Vision
======

JSonSails is an application engine designed to make the creation
and management of personalized web content easier.

Pesonalized modules & user data
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

An example of personalized web content is an online medical treatment plan,
which guides patients through a tailored treatment experience.  In this case
content is determined by personal information about the patient. This
information might be collected within the system, or loaded into the system
from an external source.  JSonSails greatly reduces the overhead associated
collection and management of personal data, and it also makes it easier to
integrate data into the content or display logic.

Another example is strategic content delivery, for example to satisfy the needs
of a collaborative online task such as students reviewing one another's
homework assignments.  In this case, the design strategy might simply be to
ensure everyone who submits an assignment reviews an assignment which is not
their own.

.. _WordPress: https://wordpress.com/create/

JSonSails removes the need for traditional server configuration and database
management in creating data driven web applications.  Thus we expect that for a
wide range of web content and applications it will be easier to develop,
deploy, and maintain in this environment. For example, we also envision the use
of JSonSails for delivering general content similar to WordPress_.

In-browser Development Environment (IDE)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. _JSFiddle: https://jsfiddle.net/

JSonSails offers a minimalist but complete "in browser" development
environment. The IDE doesn't require any special configuration or setup, and is
meant to eliminate the need for setting up personal development environments.

We take inspiration from other online web coding environments like JSFiddle_,
and integrate a code editor into the browser, however the IDE is designed to
support both coding and non-coding tasks.  For example, the IDE supports
reviewing and editing code, as well as creating new resources and content by
borrowing and combining existing resources. It also supports configuring, and
releasing content.  

In-browser Configuration Environment (ICE)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To support configuration of modules by non-technical developers we expose a
configuration only interface (ICE) for modules.  ICE hides many of the more
technical IDE options, exposing only the UI needed for configuration and giving
a high priority to the module configuration process. 


Online marketplace
^^^^^^^^^^^^^^^^^^

JSonSails integrates permission and payments so that when you build something,
you can sell it! Conversely, when you use something from user data to
configuring a module, perhaps you'll buy it rather than build your own!  Of
course JSonSails supports free transactions, but we've integrated the the
ability to charge others by credit card for use of a resource.  We collected
payments via credit card, and reconcile with the Payee each month by sending
checks in the mail.


