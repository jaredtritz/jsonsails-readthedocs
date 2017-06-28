// addPlusArea example
var initial = []
if(Object.prototype.toString.call(js.config.options) === "[object Array]"){
    initial = js.config.options
}
var dfault = {"name":"Strategy", "desc":"", "questions":[]}
function valid_id(str){
    return /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(str)
}
function validate_obj(obj){
    //console.log('trying', JSON.stringify(obj, null, 2))
    var ret = true
    if(Object.prototype.toString.call(obj) !== "[object Object]"  )  
        ret = false
    if(!obj.hasOwnProperty('name'))
        ret = false
    if(!valid_id(obj.name)){
        alert('Name must also be a valid html id:' + obj.name)
        ret = false
    }
    if(!obj.hasOwnProperty('desc'))
        ret = false
    if(!obj.hasOwnProperty('questions'))
        ret = false        
    return ret
}
function deserialize(str){
    try{
        return JSON.parse(str)
    }catch(e){
        alert("Problem deserializing")
    }    
}
var params = {};
params.validate = function(str){ 
    var obj = deserialize(str)
    return validate_obj(obj)
}
params.initial = initial.map((tok)=>{ 
    if(validate_obj(tok)){
        return JSON.stringify(tok, null, 2)
    }else{
        return JSON.stringify(dfault, null, 2)
    }
})
params.callback = function(vals){
    js.config.options = vals.map((tok)=>{return deserialize(tok)})
}
params.info = "<b>this</b> is how to do it";
params.limit = 10
js.ConfigApi.addPlusArea(params)
