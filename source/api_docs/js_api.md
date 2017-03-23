## JsApi
The API on the global `js` object in the module scripting environment.

**Kind**: global class  

* [JsApi](#markdown-header-jsapi)
    * [.config](#markdown-header-jsconfig)
    * [.jslib](#markdown-header-jsjslib)
    * [.logger](#markdown-header-jslogger)
    * [.module](#markdown-header-jsmodule)
    * [.node](#markdown-header-jsnode)
    * [.sfile](#markdown-header-jssfile)
    * [.ufile](#markdown-header-jsufile)
    * [.username](#markdown-header-jsusername)
    * [.rerender()](#markdown-header-jsrerender)

### js.config
The currently rendered module's config object

**Kind**: instance property of <[JsApi](#JsApi)>
  
**Properties**

| Type |
| --- |
| `object` | 

### js.jslib
Dictionary of alias to jslib

**Kind**: instance property of <[JsApi](#JsApi)>
  
**Properties**

| Type |
| --- |
| `Object.<alias, *>` | 

### js.logger
Current logger

**Kind**: instance property of <[JsApi](#JsApi)>
  
**Properties**

| Type |
| --- |
| `object` | 

### js.module
Current [module](module_api.md) object.

**Kind**: instance property of <[JsApi](#JsApi)>
  
**Properties**

| Type |
| --- |
| `ModuleApi` | 

### js.node
Current [node](node_api.md) object, set for each node begin evaluated.

**Kind**: instance property of <[JsApi](#JsApi)>
  
**Properties**

| Type |
| --- |
| `NodeApi` | 

### js.sfile
Dictionary of alias to [sfile](sfile_api.md)

**Kind**: instance property of <[JsApi](#JsApi)>
  
**Properties**

| Type |
| --- |
| `Object.<alias, SfileApi>` | 

### js.ufile
Dictionary of alias to [ufile](ufile_api.md)

**Kind**: instance property of <[JsApi](#JsApi)>
  
**Properties**

| Type |
| --- |
| `Object.<alias, UfileApi>` | 

### js.username
The current user's username

**Kind**: instance property of <[JsApi](#JsApi)>
  
**Properties**

| Type |
| --- |
| `string` | 

### js.rerender()
Rerender this module and its children

**Kind**: instance method of <[JsApi](#JsApi)>
  
