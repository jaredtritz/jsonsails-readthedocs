Vision
======

JSonSails is a Web Application Framework (WAF) which is designed to make
the creation and management of personalized web content easier.

An example of personalized web content is an online treatment plan, which
guides patients through a tailored medical treatment.  In this case content is
determined by personal information about the patient. This information might be
collected within the system, or loaded into the system from an external source.
JSonSails greatly reduces the overhead associated collection and management of
personal data, and it also makes it easier to integrate data into the content
or display logic.

Another example of personalization is strategic content delivery, for example
to satisfy the needs of a collaborative online task such as having students
reviewing one another's homework assignments.  In this case, the design strategy 
might simply be to ensure everyone who submits an assignment reviews an
assignment which is not their own.

.. _WordPress: https://wordpress.com/create/

We've removed the need for traditional server configuration and database
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
and integrate a code editor into the IDE, however the IDE is designed to
support both coding and non-coding tasks.  For example, the IDE supports
reviewing and editing code, as well as creating new resources and content by
borrowing and combining existing resources. It also supports configuring, and
releasing content.  

Online marketplace
^^^^^^^^^^^^^^^^^^

JSonSails integrates permission and payments so that when you build something,
you can sell it! Conversely, when you use something from user data to
configuring a module, perhaps you'll buy it rather than build your own!  Of
course JSonSails supports free transactions, but we've integrated the the
ability to charge others by credit card for use of a resource.  We collected
payments via credit card, and reconcile with the Payee each month by sending
checks in the mail.

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


