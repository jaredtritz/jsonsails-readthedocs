<a name="ModuleApi"></a>

## ModuleApi
Interface to module object. The current module object is accessed from
`js.module`.

**Kind**: global class  

* [ModuleApi](#ModuleApi)
    * [.children](#ModuleApi+children)
    * [.config](#ModuleApi+config)
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

<a name="ModuleApi+config"></a>

### js.module.config
The currently rendered module's config object

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
    <td><code>object</code></td>
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
Method to bind a function for reference node calls.

**Kind**: instance method of <code>[ModuleApi](#ModuleApi)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>method_name</td><td><code>string</code></td>
    </tr><tr>
    <td>callback</td><td><code>function</code></td>
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

