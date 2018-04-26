<a name="ConfigApi"></a>

```eval_rst
.. _`ConfigApi`:
```

## ConfigApi
Standardized API for generating a module's config GUI


* [ConfigApi](#ConfigApi)
    * [.addText(initial, callback)](#ConfigApi+addText)
    * [.addLabel(text)](#ConfigApi+addLabel)
    * [.addPlusArea(initial, callback, validate, info, limit)](#ConfigApi+addPlusArea)

<a name="ConfigApi+addText"></a>

```eval_rst
.. _`ConfigApi+addText`:
```

### configApi.addText(initial, callback)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>initial</td><td><code>string</code></td><td><p>text to initialize input</p>
</td>
    </tr><tr>
    <td>callback</td><td><code>function</code></td><td><p>process the text</p>
</td>
    </tr>  </tbody>
</table>

Add text input to config GUI

<a name="ConfigApi+addLabel"></a>

```eval_rst
.. _`ConfigApi+addLabel`:
```

### configApi.addLabel(text)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>text</td><td><code>string</code></td><td><p>Text of the label</p>
</td>
    </tr>  </tbody>
</table>

Add text label to config GUI

<a name="ConfigApi+addPlusArea"></a>

```eval_rst
.. _`ConfigApi+addPlusArea`:
```

### configApi.addPlusArea(initial, callback, validate, info, limit)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>initial</td><td><code>array</code></td><td><p>list of text items</p>
</td>
    </tr><tr>
    <td>callback</td><td><code>function</code></td><td><p>-</p>
</td>
    </tr><tr>
    <td>validate</td><td><code>function</code></td><td><p>...</p>
</td>
    </tr><tr>
    <td>info</td><td><code>string</code></td><td><p>...</p>
</td>
    </tr><tr>
    <td>limit</td><td><code>integer</code></td><td><p>...</p>
</td>
    </tr>  </tbody>
</table>

Add list of text area items to config GUI

