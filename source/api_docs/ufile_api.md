## UFileAPI
Implements UFileApi for module script. Holds the deserialized value of the
Ufile. The ClientBundle has the serialized value.

**Kind**: global class  

* [UFileAPI](#markdown-header-ufileapi)
    * [.value](#markdown-header-ufilevalue)
    * [.raw(username)](#markdown-header-ufilerawusername) ⇒ `*`
    * [.get()](#markdown-header-ufileget-promise) ⇒ `Promise`
    * [.set(val)](#markdown-header-ufilesetval-promise) ⇒ `Promise`
    * [.loadValues()](#markdown-header-ufileloadvalues)
    * [.evaluateScript()](#markdown-header-ufileevaluatescript)
    * [.updateCachedValue(val)](#markdown-header-ufileupdatecachedvalueval-string) ⇒ `string`

### ufile.value
output from ufile script load method.

**Kind**: instance property of <[UFileAPI](#UFileAPI)>
  
**Properties**

| Type |
| --- |
| `*` | 

### ufile.raw(username) ⇒ `*`
**Kind**: instance method of <[UFileAPI](#UFileAPI)>
  

| Param | Type | Description |
| --- | --- | --- |
| username | `string` | optional |

### ufile.get() ⇒ `Promise`
Initiates an async request for the collection values of this ufile, and
returns a Promise. This method is buffered so that calls in quick
succession will be combined into a single request.

**Kind**: instance method of <[UFileAPI](#UFileAPI)>
  
### ufile.set(val) ⇒ `Promise`
Initiates an async request to update the server's value for this ufile.
This method is buffered so that calls in quick
succession will be combined into a single request.

**Kind**: instance method of <[UFileAPI](#UFileAPI)>
  

| Param | Description |
| --- | --- |
| val | the new value |

### ufile.loadValues()
Deserialize and load values. Calls load(myval, collection)

**Kind**: instance method of <[UFileAPI](#UFileAPI)>
  
### ufile.evaluateScript()
Execute the ufile script and override defaults

**Kind**: instance method of <[UFileAPI](#UFileAPI)>
  
### ufile.updateCachedValue(val) ⇒ `string`
update cached value in wrapper and the client bundle

**Kind**: instance method of <[UFileAPI](#UFileAPI)>
  
**Returns**: `string` - - serialized value  

| Param | Description |
| --- | --- |
| val | serialized or deserialized value |

