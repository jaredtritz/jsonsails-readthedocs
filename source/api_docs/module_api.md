<a name="ModuleApi"></a>

```eval_rst
.. _`ModuleApi`:
```

## ModuleApi
Interface to module object. The current module object is accessed from
`js.module`.


* [ModuleApi](#ModuleApi)
    * [.children](#ModuleApi+children)
    * [.root](#ModuleApi+root)
    * [.title](#ModuleApi+title)
    * [.bind_method(method_name, callback)](#ModuleApi+bind_method)
    * [.ready(callback)](#ModuleApi+ready)

<a name="ModuleApi+children"></a>

```eval_rst
.. _`ModuleApi+children`:
```

### js.module.children
<table>
  <thead>
    <tr>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>array.&lt;NodeApi&gt;</code></td>
    </tr>  </tbody>
</table>

External child nodes which have been attached to the reference node
which is representing this module. These may be rendered and attached
anywhere in the module.

<a name="ModuleApi+root"></a>

```eval_rst
.. _`ModuleApi+root`:
```

### js.module.root
<table>
  <thead>
    <tr>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>NodeApi</code></td>
    </tr>  </tbody>
</table>

Root node object of this module.

<a name="ModuleApi+title"></a>

```eval_rst
.. _`ModuleApi+title`:
```

### js.module.title
<table>
  <thead>
    <tr>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>string</code></td>
    </tr>  </tbody>
</table>

The title of this module.

<a name="ModuleApi+bind_method"></a>

```eval_rst
.. _`ModuleApi+bind_method`:
```

### js.module.bind_method(method_name, callback)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>method_name</td><td><code>string</code></td><td><p>name to pass to
   <a href="node_api.html#NodeApi+call">NodeApi.call</a></p>
</td>
    </tr><tr>
    <td>callback</td><td><code>function</code></td><td><p>take parameters and return value or Promise.</p>
</td>
    </tr>  </tbody>
</table>

Bind a function as a method with the given name on reference nodes
which represent this module. The provided callback function may return a
value, or a Promise.

<a name="ModuleApi+ready"></a>

```eval_rst
.. _`ModuleApi+ready`:
```

### js.module.ready(callback)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>callback</td><td><code>function</code></td>
    </tr>  </tbody>
</table>

Bind a function to be executed when the module finishes rendering

