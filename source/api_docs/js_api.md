<a name="JsApi"></a>

## JsApi
The API on the global `js` object in the module scripting environment.

**Kind**: global class  

* [JsApi](#JsApi)
    * [.config](#JsApi+config)
    * [.jslib](#JsApi+jslib)
    * [.module](#JsApi+module)
    * [.node](#JsApi+node)
    * [.sfile](#JsApi+sfile)
    * [.ufile](#JsApi+ufile)
    * [.username](#JsApi+username)
    * [.logEvent(pageview, elog, json)](#JsApi+logEvent)
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

<a name="JsApi+logEvent"></a>

### js.logEvent(pageview, elog, json)
Log an event.

**Kind**: instance method of <code>[JsApi](#JsApi)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>pageview</td><td><code>boolean</code></td><td><p>indicates to call Google analytics w/ elog
                 information</p>
</td>
    </tr><tr>
    <td>elog</td><td><code>object</code></td><td><p>json object of named params for GA &amp; jsonsails
                 logging</p>
</td>
    </tr><tr>
    <td>json</td><td><code>object</code></td><td><p>extra json field GA doesn&#39;t handle but offers
                 more flexibility in jsonsails logging</p>
</td>
    </tr>  </tbody>
</table>

<a name="JsApi+rerender"></a>

### js.rerender()
Rerender this module and its children

**Kind**: instance method of <code>[JsApi](#JsApi)</code>  
