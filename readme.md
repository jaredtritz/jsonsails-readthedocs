#### Basics

```
# activate node
nvm use v6.9

# run build script
cd src/javascript/docgen
node generate_docs.js
```

#### Reminders

* edit "file_list" array in "extract_doc_strings.py" to ensure parsing of doc strings from source
* edit the "writeDoc(...)" lines in the "generate_docs.js" to ensure extracted doc strings get into doc
* 

