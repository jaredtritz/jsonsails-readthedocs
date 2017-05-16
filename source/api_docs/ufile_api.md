<a name="UFileAPI"></a>

## UFileAPI
Implements UFileApi for module script. Holds the deserialized value of the
Ufile. The ClientBundle has the serialized value.

**Kind**: global class  

* [UFileAPI](#UFileAPI)
    * [.value](#UFileAPI+value)
    * [.raw(username)](#UFileAPI+raw) ⇒ <code>\*</code>
    * [.get()](#UFileAPI+get) ⇒ <code>promise</code>
    * [.set(val)](#UFileAPI+set) ⇒ <code>Promise</code>
    * [.loadValues()](#UFileAPI+loadValues)
    * [.evaluateScript()](#UFileAPI+evaluateScript)
    * [.updateCachedValue(val)](#UFileAPI+updateCachedValue) ⇒ <code>string</code>

<a name="UFileAPI+value"></a>

### ufile.value
output from ufile script load method.

**Kind**: instance property of <code>[UFileAPI](#UFileAPI)</code>  
**Properties**

<table>
  <thead>
    <tr>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>*</code></td>
    </tr>  </tbody>
</table>

<a name="UFileAPI+raw"></a>

### ufile.raw(username) ⇒ <code>\*</code>
**Kind**: instance method of <code>[UFileAPI](#UFileAPI)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>username</td><td><code>string</code></td><td><p>optional</p>
</td>
    </tr>  </tbody>
</table>

<a name="UFileAPI+get"></a>

### ufile.get() ⇒ <code>promise</code>
Initiates an async request for the collection values of this ufile, and
returns a Promise. This method is buffered so that calls in quick
succession will be combined into a single request.

**Kind**: instance method of <code>[UFileAPI](#UFileAPI)</code>  
<a name="UFileAPI+set"></a>

### ufile.set(val) ⇒ <code>Promise</code>
Initiates an async request to update the server's value for this ufile.
This method is buffered so that calls in quick
succession will be combined into a single request.

**Kind**: instance method of <code>[UFileAPI](#UFileAPI)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>val</td><td><p>the new value</p>
</td>
    </tr>  </tbody>
</table>

<a name="UFileAPI+loadValues"></a>

### ufile.loadValues()
Deserialize and load values. Calls load(myval, collection)

**Kind**: instance method of <code>[UFileAPI](#UFileAPI)</code>  
<a name="UFileAPI+evaluateScript"></a>

### ufile.evaluateScript()
Execute the ufile script and override defaults

**Kind**: instance method of <code>[UFileAPI](#UFileAPI)</code>  
<a name="UFileAPI+updateCachedValue"></a>

### ufile.updateCachedValue(val) ⇒ <code>string</code>
update cached value in wrapper and the client bundle

**Kind**: instance method of <code>[UFileAPI](#UFileAPI)</code>  
**Returns**: <code>string</code> - - serialized value  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>val</td><td><p>serialized or deserialized value</p>
</td>
    </tr>  </tbody>
</table>

