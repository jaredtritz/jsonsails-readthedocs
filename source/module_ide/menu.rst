
Menu Items
==========

There is no history and no backups, so saving is always saving over the
previous version of the module code and configuration.  Therefore, you should
take care to avoid loss of data by keeping your own copy in version control. To
get a copy of the module you can use the *export* function in the IDE, and
later use the import feature to import that code too.

Export
^^^^^^

Saves a .zip file named after the module. The files within the .zip are plain
text files and can be edited, so you can use your preferred ide.
The folder structure and filenames are significant, so don't change them!

Import
^^^^^^

Replaces the current module with a previously exported module from the .zip file.
This will overwrite everything in the module - nodes, html, css, js - so save
or export before importing.

There is a bug where you cannot import the same file twice in a row. The workaround
is to refresh the page before importing again, or to import a different file first.

Save
^^^^

The "save" link will send a copy of the entire module to the server to
overwrite the previous version.

Save as
^^^^^^^

The "save as" link will send a request to the server to create a replica, or
clone, of the current module.  The clone will utilize the ref-behavior settings
of the included objects to decide whether to link to existing objects or create
new ones.  This is particularly handy for creating a version of an existing
module with a new configuration.

