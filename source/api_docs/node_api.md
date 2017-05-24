<a name="NodeApi"></a>

## NodeApi
Interface to node objects. The current node object is accessed from `js.node`


* [NodeApi](#NodeApi)
    * [.children](#NodeApi+children)
    * [.dom](#NodeApi+dom)
    * [.id](#NodeApi+id)
    * [.parent](#NodeApi+parent)
    * [.title](#NodeApi+title)
    * [.call(method, params)](#NodeApi+call) ⇒ <code>promise</code>
    * [.evaluateLogic()](#NodeApi+evaluateLogic) ⇒ <code>boolean</code>
    * [.onReady(js)](#NodeApi+onReady)
    * [.render()](#NodeApi+render) ⇒ [<code>NodeApi</code>](#NodeApi)
    * [.renderChildren(children)](#NodeApi+renderChildren)

<a name="NodeApi+children"></a>

### js.node.children
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

Array of child nodes once children have been rendered

<a name="NodeApi+dom"></a>

### js.node.dom
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

DOM element of this node's rendered HTML

<a name="NodeApi+id"></a>

### js.node.id
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

ID of this node, also given to id of HTML div tag wrapping this node

<a name="NodeApi+parent"></a>

### js.node.parent
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

parent of this node, null for root node

<a name="NodeApi+title"></a>

### js.node.title
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

Title of this node, set from node property

<a name="NodeApi+call"></a>

### js.node.call(method, params) ⇒ <code>promise</code>
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

Only works on ReferenceNodes. Initiate an async call to the module
behind the refnode. The method being called needs to be bound first on
the receiving module using `js.module.bind()`. Returns a Promise which
will be resolved with the method's return value.

<a name="NodeApi+evaluateLogic"></a>

### js.node.evaluateLogic() ⇒ <code>boolean</code>
Run the logic script on this node.

<a name="NodeApi+onReady"></a>

### js.node.onReady(js)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>js</td><td><code>JsApi</code></td><td><p>The <a href="js_api.html">JsApi</a> interface object</p>
</td>
    </tr>  </tbody>
</table>

Function that will get called when all descendants of this node have been
rendered. Set this to a custom function, but remember that the first
parameter is the [JsApi](js_api.html) interface.

<a name="NodeApi+render"></a>

### js.node.render() ⇒ [<code>NodeApi</code>](#NodeApi)
Method to render DOM of this node

<a name="NodeApi+renderChildren"></a>

### js.node.renderChildren(children)
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

Override this method to customize how children are rendered

