<a name="SfileAPI"></a>

```eval_rst
.. _`SfileAPI`:
```

## SfileAPI
Implements the Sfile Api for module script.


* [SfileAPI](#SfileAPI)
    * [.val](#SfileAPI+val) ⇒ <code>\*</code>
    * [.post(value)](#SfileAPI+post)
    * [.onUpdate(user_callback)](#SfileAPI+onUpdate)

<a name="SfileAPI+val"></a>

```eval_rst
.. _`SfileAPI+val`:
```

### sfile.val ⇒ <code>\*</code>
Accessor property that returns current value from client cache.

<a name="SfileAPI+post"></a>

```eval_rst
.. _`SfileAPI+post`:
```

### sfile.post(value)
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

Sends async request to server to update SFile value. The server runs the
"save" method of the SInterface script to set the new value and then sends
a push to any listening clients.

<a name="SfileAPI+onUpdate"></a>

```eval_rst
.. _`SfileAPI+onUpdate`:
```

### sfile.onUpdate(user_callback)
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

Register a callback to handle the server push which will be made whenver
the SFile value is updated.

