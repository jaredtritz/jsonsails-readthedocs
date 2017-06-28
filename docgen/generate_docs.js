/**
 * Created by eujain on 2/5/17.
 * search ezbuilder/node_modules/dmd/partials/* for handle bar template files to over-ride
 */
"use strict";

var js2md = require('jsdoc-to-markdown')
var fs = require('fs')

var conf = {
  "no-gfm": true,
  configure: './jsdoc.conf.json',
  //files: '../authoring/renderer/UFileWrapper.es6',
  partial: [
    // remove Properties sutheading
    './sphinx/partials/properties-table-html.hbs',
    './sphinx/partials/properties-table.hbs',
    // don't show Kinds
    './sphinx/partials/body.hbs',
    './sphinx/partials/header.hbs',
    './sphinx/partials/summary.hbs'
    // don't make dl table
    //'./bitbucket_wiki/partials/global-index-dl.hbs',
    // don't use code tags for return types
    //'./bitbucket_wiki/partials/linked-type-list.hbs',
    // don't put <a> tags in front of headers
    //'./bitbucket_wiki/partials/header.hbs',
    // make links to headers work on bitbucket
    //'./bitbucket_wiki/partials/sig-link.hbs',
    //'./bitbucket_wiki/partials/sig-name.hbs',
    // remove extra name at first main heading
    //'./bitbucket_wiki/partials/docs.hbs',

    //'./bitbucket_wiki/partials/link.hbs',
    //'./bitbucket_wiki/partials/defaultvalue.hbs'
  ],
  //helper: './bitbucket_wiki/hbs-helpers.js'
}

function writeDoc(src, dest){
  conf.files = src
  var output = js2md.renderSync(conf)
  fs.writeFile(dest, output, ()=> {
    console.log(src, "=>", dest)
  })
}

writeDoc('../../ezbuilder/src/javascript/authoring/renderer/UFileWrapper.es6',
  "../source/api_docs/ufile_api.md")

writeDoc('../../ezbuilder/src/javascript/authoring/renderer/SfileWrapper.es6',
  "../source/api_docs/sfile_api.md")

writeDoc('../../ezbuilder/src/javascript/authoring/jsapi/JsApi.es6',
  "../source/api_docs/js_api.md")

writeDoc('../../ezbuilder/src/javascript/authoring/jsapi/NodeApi.es6',
  "../source/api_docs/node_api.md")

writeDoc('../../ezbuilder/src/javascript/authoring/jsapi/ModuleApi.es6',
  "../source/api_docs/module_api.md")

writeDoc('../../ezbuilder/src/javascript/authoring/renderer/ConfigApi.jsx',
  "../source/api_docs/config_api.md")

