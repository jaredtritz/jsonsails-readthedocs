<a name="ModuleApi"></a>

## ModuleApi
Interface to module object. The current module object is accessed from
`js.module`.

**Kind**: global class  

* [ModuleApi](#ModuleApi)
    * [.children](#ModuleApi+children)
    * [.root](#ModuleApi+root)
    * [.title](#ModuleApi+title)
    * [.bind_method(method_name, callback)](#ModuleApi+bind_method)
    * [.ready(callback)](#ModuleApi+ready)

<a name="ModuleApi+children"></a>

### js.module.children
External child nodes which have been attached to the reference node
which is representing this module. These may be rendered and attached
anywhere in the module.

**Kind**: instance property of <code>[ModuleApi](#ModuleApi)</code>  
**Properties**

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

<a name="ModuleApi+root"></a>

### js.module.root
Root node object of this module.

**Kind**: instance property of <code>[ModuleApi](#ModuleApi)</code>  
**Properties**

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

<a name="ModuleApi+title"></a>

### js.module.title
The title of this module.

**Kind**: instance property of <code>[ModuleApi](#ModuleApi)</code>  
**Properties**

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

<a name="ModuleApi+bind_method"></a>

### js.module.bind_method(method_name, callback)
Bind a function as a method with the given name on reference nodes
which represent this module. The provided callback function may return a
value, or a Promise.

**Kind**: instance method of <code>[ModuleApi](#ModuleApi)</code>  
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

<a name="ModuleApi+ready"></a>

### js.module.ready(callback)
Bind a function to be executed when the module finishes rendering

**Kind**: instance method of <code>[ModuleApi](#ModuleApi)</code>  
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

