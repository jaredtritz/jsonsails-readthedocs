<a name="SfileAPI"></a>

## SfileAPI
Implements the Sfile Api for module script.

**Kind**: global class  

* [SfileAPI](#SfileAPI)
    * [.val](#SfileAPI+val) ⇒ <code>\*</code>
    * [.post(value)](#SfileAPI+post)
    * [.onUpdate(user_callback)](#SfileAPI+onUpdate)

<a name="SfileAPI+val"></a>

### sfile.val ⇒ <code>\*</code>
Accessor property that returns current value

**Kind**: instance property of <code>[SfileAPI](#SfileAPI)</code>  
<a name="SfileAPI+post"></a>

### sfile.post(value)
Send async request to server to update based on new value.

**Kind**: instance method of <code>[SfileAPI](#SfileAPI)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>value</td>
    </tr>  </tbody>
</table>

<a name="SfileAPI+onUpdate"></a>

### sfile.onUpdate(user_callback)
Register a callback to be called when the server pushes a new value.

**Kind**: instance method of <code>[SfileAPI](#SfileAPI)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>user_callback</td><td><code>function</code></td>
    </tr>  </tbody>
</table>

