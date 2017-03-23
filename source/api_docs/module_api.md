## ModuleApi
Interface to module object. The current module object is accessed from
`js.module`.

**Kind**: global class  

* [ModuleApi](#markdown-header-moduleapi)
    * [.children](#markdown-header-jsmodulechildren)
    * [.config](#markdown-header-jsmoduleconfig)
    * [.root](#markdown-header-jsmoduleroot)
    * [.title](#markdown-header-jsmoduletitle)
    * [.bind_method(method_name, callback)](#markdown-header-jsmodulebind_methodmethod_name-callback)
    * [.ready(callback)](#markdown-header-jsmodulereadycallback)

### js.module.children
External child nodes which have been attached to the reference node
which is representing this module. These may be rendered and attached
anywhere in the module.

**Kind**: instance property of <[ModuleApi](#ModuleApi)>
  
**Properties**

| Type |
| --- |
| `array.<NodeApi>` | 

### js.module.config
The currently rendered module's config object

**Kind**: instance property of <[ModuleApi](#ModuleApi)>
  
**Properties**

| Type |
| --- |
| `object` | 

### js.module.root
Root node object of this module.

**Kind**: instance property of <[ModuleApi](#ModuleApi)>
  
**Properties**

| Type |
| --- |
| `NodeApi` | 

### js.module.title
The title of this module.

**Kind**: instance property of <[ModuleApi](#ModuleApi)>
  
**Properties**

| Type |
| --- |
| `string` | 

### js.module.bind_method(method_name, callback)
Method to bind a function for reference node calls.

**Kind**: instance method of <[ModuleApi](#ModuleApi)>
  

| Param | Type |
| --- | --- |
| method_name | `string` | 
| callback | `function` | 

### js.module.ready(callback)
Bind a function to be executed when the module finishes rendering

**Kind**: instance method of <[ModuleApi](#ModuleApi)>
  

| Param | Type |
| --- | --- |
| callback | `function` | 

