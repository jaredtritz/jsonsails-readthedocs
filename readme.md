#### Basics

```
# activate node
nvm use v6.9

# run build script
cd src/javascript/docgen
node generate_docs.js
```

#### Reminders

snippets
* edit "file_list" array in "extract_doc_strings.py" to ensure parsing of doc strings from source into doc string files
* comment format: '// COMMENT_NAME: default-serialize'
* s
* add literalinclude to rst file(s) appropriatly to bring whole file in at that location

auto-gen doc
* edit the "writeDoc(...)" lines in the "generate_docs.js" to ensure auto-extracted doc strings get into doc, see these files for examples of JSdoc comment syntax

