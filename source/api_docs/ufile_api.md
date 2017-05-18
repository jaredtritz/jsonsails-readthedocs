<a name="UFileAPI"></a>

## UFileAPI
Implements UFileApi for module script. Holds the deserialized value of the
Ufile. The ClientBundle has the serialized value.

**Kind**: global class  

* [UFileAPI](#UFileAPI)
    * [.collection](#UFileAPI.UFileWrapper+collection)
    * [.value](#UFileAPI+value)
    * [.raw(username)](#UFileAPI+raw) ⇒ <code>\*</code>
    * [.get()](#UFileAPI+get) ⇒ <code>promise</code>
    * [.set(val)](#UFileAPI+set) ⇒ <code>Promise</code>

<a name="UFileAPI.UFileWrapper+collection"></a>

### ufile.collection
```eval_rst
.. _test-jared-ref:
```
Collection of all raw values for users having a value for the UFile.

Values format:
<!-- ufile-collection-format -->

    {
      "fake_id1": {"some-prop":6},
      "authenticated_id": {"some-prop":7},
      "fake_id2": {"some-prop":1}
    }
<!-- end-label -->

**Kind**: instance property of <code>[UFileAPI](#UFileAPI)</code>  
<a name="UFileAPI+value"></a>

### ufile.value
Return value from the UInterface's load method if defined, otherwise
the users raw value for the UFile.

**Kind**: instance property of <code>[UFileAPI](#UFileAPI)</code>  
<a name="UFileAPI+raw"></a>

### ufile.raw(username) ⇒ <code>\*</code>
Returns the current user's value if no username is given, else returns the
given user's value. Raw value is not passed through load().

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
Initiates an async request to refresh the collection of values of this
ufile, and returns a Promise. This method is buffered so that calls in
quick succession will be combined into a single request.

**Kind**: instance method of <code>[UFileAPI](#UFileAPI)</code>  
<a name="UFileAPI+set"></a>

### ufile.set(val) ⇒ <code>Promise</code>
Initiates an async request to update the users value on the server for
this ufile.  This method is buffered so that calls in quick succession
will be combined into a single request.

**Kind**: instance method of <code>[UFileAPI](#UFileAPI)</code>  
**Returns**: <code>Promise</code> - <!-- ufile-set-example -->

    // Module JS example w/ promise
    js.ufile.alias.set('new value').then( ()=>{alert('done')} ) 
    
<!-- end-label -->  
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

