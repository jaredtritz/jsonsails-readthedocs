<a name="ConfigApi"></a>

```eval_rst
.. _`ConfigApi`:
```

## ConfigApi
Standardized API for generating a module's config GUI


* [ConfigApi](#ConfigApi)
    * [.addText(initial, callback)](#ConfigApi+addText)
    * [.addInput(initial, callback)](#ConfigApi+addInput)
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
    <td>initial</td><td><code>string</code></td><td><p>text to initialize text area</p>
</td>
    </tr><tr>
    <td>callback</td><td><code>function</code></td><td><p>processes the text when config is written</p>
</td>
    </tr>  </tbody>
</table>

Add text area to config GUI

<a name="ConfigApi+addInput"></a>

```eval_rst
.. _`ConfigApi+addInput`:
```

### configApi.addInput(initial, callback)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>initial</td><td><code>string</code></td><td><p>text to initialize text input</p>
</td>
    </tr><tr>
    <td>callback</td><td><code>function</code></td><td><p>processes the text when config is written</p>
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
    <td>callback</td><td><code>function</code></td><td><p>processes the list of text items and write to js.config appropriatly</p>
</td>
    </tr><tr>
    <td>validate</td><td><code>function</code></td><td><p>calls validate with each individual list item</p>
</td>
    </tr><tr>
    <td>info</td><td><code>string</code></td><td><p>descriptive msg displayed when end user presses info button</p>
</td>
    </tr><tr>
    <td>limit</td><td><code>integer</code></td><td><p>maximum number of items which can be added to the list</p>
</td>
    </tr>  </tbody>
</table>

Usage example
```eval_rst
.. literalinclude:: ../comments/ConfigApi.jsx_short-add-plus-area-example.js
    :language: javascript

