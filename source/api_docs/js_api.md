<a name="JsApi"></a>

## JsApi
The API on the global `js` object in the module scripting environment.

**Kind**: global class  

* [JsApi](#JsApi)
    * [.config](#JsApi+config)
    * [.jslib](#JsApi+jslib)
    * [.logger](#JsApi+logger)
    * [.module](#JsApi+module)
    * [.node](#JsApi+node)
    * [.sfile](#JsApi+sfile)
    * [.ufile](#JsApi+ufile)
    * [.username](#JsApi+username)
    * [.rerender()](#JsApi+rerender)

<a name="JsApi+config"></a>

### js.config
The currently rendered module's config object

**Kind**: instance property of <code>[JsApi](#JsApi)</code>  
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

<a name="JsApi+jslib"></a>

### js.jslib
Dictionary of alias to jslib

**Kind**: instance property of <code>[JsApi](#JsApi)</code>  
**Properties**

<table>
  <thead>
    <tr>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>Object.&lt;alias, *&gt;</code></td>
    </tr>  </tbody>
</table>

<a name="JsApi+logger"></a>

### js.logger
Current logger

**Kind**: instance property of <code>[JsApi](#JsApi)</code>  
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

<a name="JsApi+module"></a>

### js.module
Current [module](module_api.md) object.

**Kind**: instance property of <code>[JsApi](#JsApi)</code>  
**Properties**

<table>
  <thead>
    <tr>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>ModuleApi</code></td>
    </tr>  </tbody>
</table>

<a name="JsApi+node"></a>

### js.node
Current [node](node_api.md) object, set for each node begin evaluated.

**Kind**: instance property of <code>[JsApi](#JsApi)</code>  
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

<a name="JsApi+sfile"></a>

### js.sfile
Dictionary of alias to [sfile](sfile_api.md)

**Kind**: instance property of <code>[JsApi](#JsApi)</code>  
**Properties**

<table>
  <thead>
    <tr>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>Object.&lt;alias, SfileApi&gt;</code></td>
    </tr>  </tbody>
</table>

<a name="JsApi+ufile"></a>

### js.ufile
Dictionary of alias to [ufile](ufile_api.md)

**Kind**: instance property of <code>[JsApi](#JsApi)</code>  
**Properties**

<table>
  <thead>
    <tr>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>Object.&lt;alias, UfileApi&gt;</code></td>
    </tr>  </tbody>
</table>

<a name="JsApi+username"></a>

### js.username
The current user's username

**Kind**: instance property of <code>[JsApi](#JsApi)</code>  
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

<a name="JsApi+rerender"></a>

### js.rerender()
Rerender this module and its children

**Kind**: instance method of <code>[JsApi](#JsApi)</code>  
