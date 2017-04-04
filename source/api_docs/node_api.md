<a name="NodeApi"></a>

## NodeApi
Interface to node objects. The current node object is accessed from `js.node`

**Kind**: global class  

* [NodeApi](#NodeApi)
    * [.children](#NodeApi+children)
    * [.dom](#NodeApi+dom)
    * [.id](#NodeApi+id)
    * [.parent](#NodeApi+parent)
    * [.title](#NodeApi+title)
    * [.call(method, params)](#NodeApi+call) ⇒ <code>Promise</code>
    * [.evaluateLogic()](#NodeApi+evaluateLogic) ⇒ <code>boolean</code>
    * [.onReady(js)](#NodeApi+onReady)
    * [.render()](#NodeApi+render) ⇒ <code>[NodeApi](#NodeApi)</code>
    * [.renderChildren(children)](#NodeApi+renderChildren)

<a name="NodeApi+children"></a>

### js.node.children
Array of child nodes once children have been rendered

**Kind**: instance property of <code>[NodeApi](#NodeApi)</code>  
**Properties**

<table>
  <thead>
    <tr>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code><a href="#NodeApi">array.&lt;NodeApi&gt;</a></code></td>
    </tr>  </tbody>
</table>

<a name="NodeApi+dom"></a>

### js.node.dom
DOM element of this node's rendered HTML

**Kind**: instance property of <code>[NodeApi](#NodeApi)</code>  
**Properties**

<table>
  <thead>
    <tr>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>Element</code></td>
    </tr>  </tbody>
</table>

<a name="NodeApi+id"></a>

### js.node.id
ID of this node

**Kind**: instance property of <code>[NodeApi](#NodeApi)</code>  
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

<a name="NodeApi+parent"></a>

### js.node.parent
parent of this node

**Kind**: instance property of <code>[NodeApi](#NodeApi)</code>  
**Properties**

<table>
  <thead>
    <tr>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code><a href="#NodeApi">NodeApi</a></code></td>
    </tr>  </tbody>
</table>

<a name="NodeApi+title"></a>

### js.node.title
Title of this node

**Kind**: instance property of <code>[NodeApi](#NodeApi)</code>  
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

<a name="NodeApi+call"></a>

### js.node.call(method, params) ⇒ <code>Promise</code>
Only works on ReferenceNodes. Initiate an async call to the module
behind the refnode. The method being called needs to be bound first on
the receiving module using `js.module.bind()`. Returns a Promise which
will be resolved with the method's return value.

**Kind**: instance method of <code>[NodeApi](#NodeApi)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>method</td><td><code>string</code></td><td><p>method name to call on referenced module</p>
</td>
    </tr><tr>
    <td>params</td><td><code>*</code></td><td><p>parameters for the method</p>
</td>
    </tr>  </tbody>
</table>

<a name="NodeApi+evaluateLogic"></a>

### js.node.evaluateLogic() ⇒ <code>boolean</code>
Run the logic script on this node.

**Kind**: instance method of <code>[NodeApi](#NodeApi)</code>  
<a name="NodeApi+onReady"></a>

### js.node.onReady(js)
Function that will get called when all descendants of this node have been
rendered. Set this to a custom function, but remember that the first
parameter is the [jsapi](js_api.md) interface.

**Kind**: instance method of <code>[NodeApi](#NodeApi)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>js</td><td><code>JsApi</code></td><td><p>The <a href="js_api.md">jsapi</a> interface object</p>
</td>
    </tr>  </tbody>
</table>

<a name="NodeApi+render"></a>

### js.node.render() ⇒ <code>[NodeApi](#NodeApi)</code>
Method to render DOM of this node

**Kind**: instance method of <code>[NodeApi](#NodeApi)</code>  
<a name="NodeApi+renderChildren"></a>

### js.node.renderChildren(children)
Override this method to customize how children are rendered

**Kind**: instance method of <code>[NodeApi](#NodeApi)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>children</td><td><code><a href="#NodeApi">NodeApi</a></code></td><td><p>array of child nodes</p>
</td>
    </tr>  </tbody>
</table>

