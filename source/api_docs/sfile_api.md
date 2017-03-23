## SfileAPI
Implements the Sfile Api for module script.

**Kind**: global class  

* [SfileAPI](#markdown-header-sfileapi)
    * [.val](#markdown-header-sfileval) ⇒ `*`
    * [.post(value)](#markdown-header-sfilepostvalue)
    * [.onUpdate(user_callback)](#markdown-header-sfileonupdateuser_callback)

### sfile.val ⇒ `*`
Accessor property that returns current value

**Kind**: instance property of <[SfileAPI](#SfileAPI)>
  
### sfile.post(value)
Send async request to server to update based on new value.

**Kind**: instance method of <[SfileAPI](#SfileAPI)>
  

| Param |
| --- |
| value | 

### sfile.onUpdate(user_callback)
Register a callback to be called when the server pushes a new value.

**Kind**: instance method of <[SfileAPI](#SfileAPI)>
  

| Param | Type |
| --- | --- |
| user_callback | `function` | 

