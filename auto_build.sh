#!/bin/bash

python extract_doc_strings.py

cd docgen
node generate_docs.js
cd ..

make html
