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
Accessor property that returns current value from client cache.

**Kind**: instance property of <code>[SfileAPI](#SfileAPI)</code>  
<a name="SfileAPI+post"></a>

### sfile.post(value)
Send async request to server to update SFile value. The server runs the
"save" method of the SInterface script to set the new value.

**Kind**: instance method of <code>[SfileAPI](#SfileAPI)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>value</td><td><p>input to the SInterface save() script</p>
</td>
    </tr>  </tbody>
</table>

<a name="SfileAPI+onUpdate"></a>

### sfile.onUpdate(user_callback)
Register a callback to handle the server push which will be made  whenver
the SFile value is updated and recieved by all listening users.

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

