// Add plus area
var params = {
  "initial":js.config.field_name.map((tok)=>{JSON.stringify(tok)}),
  "validate":function(val){return val.hasOwnProperty('answer')},
  "callback":function(val){js.config.field_name = JSON.parse(val)},
  "info":"<h3>Instructions</h3>",
  "limit":2,
}
js.ConfigApi.addPlusArea(params)    
