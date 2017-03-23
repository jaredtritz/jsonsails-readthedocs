## NodeApi
Interface to node objects. The current node object is accessed from `js.node`

**Kind**: global class  

* [NodeApi](#markdown-header-nodeapi)
    * [.children](#markdown-header-jsnodechildren)
    * [.dom](#markdown-header-jsnodedom)
    * [.id](#markdown-header-jsnodeid)
    * [.parent](#markdown-header-jsnodeparent)
    * [.title](#markdown-header-jsnodetitle)
    * [.call(method, params, onSuccess, onError)](#markdown-header-jsnodecallmethod-params-onsuccess-onerror)
    * [.evaluateLogic()](#markdown-header-jsnodeevaluatelogic-boolean) ⇒ `boolean`
    * [.onReady(js)](#markdown-header-jsnodeonreadyjs)
    * [.render()](#markdown-header-jsnoderender-nodeapi) ⇒ `NodeApi`
    * [.renderChildren(children)](#markdown-header-jsnoderenderchildrenchildren)

### js.node.children
Array of child nodes once children have been rendered

**Kind**: instance property of <[NodeApi](#NodeApi)>
  
**Properties**

| Type |
| --- |
| `array.<NodeApi>` | 

### js.node.dom
DOM element of this node's rendered HTML

**Kind**: instance property of <[NodeApi](#NodeApi)>
  
**Properties**

| Type |
| --- |
| `Element` | 

### js.node.id
ID of this node

**Kind**: instance property of <[NodeApi](#NodeApi)>
  
**Properties**

| Type |
| --- |
| `string` | 

### js.node.parent
parent of this node

**Kind**: instance property of <[NodeApi](#NodeApi)>
  
**Properties**

| Type |
| --- |
| `NodeApi` | 

### js.node.title
Title of this node

**Kind**: instance property of <[NodeApi](#NodeApi)>
  
**Properties**

| Type |
| --- |
| `string` | 

### js.node.call(method, params, onSuccess, onError)
Only works on ReferenceNodes. Initiate an async call to the module
behind the refnode. The method being called needs to be bound first on
the receiving module using `js.module.bind()`.

**Kind**: instance method of <[NodeApi](#NodeApi)>
  

| Param | Type | Description |
| --- | --- | --- |
| method | `string` | method name to call on referenced module |
| params | `*` | parameters for the method |
| onSuccess | `function` | success callback |
| onError | `function` | failure callback |

### js.node.evaluateLogic() ⇒ `boolean`
Run the logic script on this node.

**Kind**: instance method of <[NodeApi](#NodeApi)>
  
### js.node.onReady(js)
Function that will get called when all descendants of this node have been
rendered. Set this to a custom function, but remember that the first
parameter is the [jsapi](js_api.md) interface.

**Kind**: instance method of <[NodeApi](#NodeApi)>
  

| Param | Type | Description |
| --- | --- | --- |
| js | `JsApi` | The [jsapi](js_api.md) interface object |

### js.node.render() ⇒ `NodeApi`
Method to render DOM of this node

**Kind**: instance method of <[NodeApi](#NodeApi)>
  
### js.node.renderChildren(children)
Override this method to customize how children are rendered

**Kind**: instance method of <[NodeApi](#NodeApi)>
  

| Param | Type | Description |
| --- | --- | --- |
| children | `NodeApi` | array of child nodes |

