exports.makeAnchor = function(parent='', name='', sign='', ret=''){
  //console.log(parent, name, sign, ret)
  if(sign===null) sign=''
  if(ret===null) ret=''
  if(sign){
    arr = sign.split(',')
    sign = arr.join("-")
  }
  if(ret){
    ret = ret.join('-')
  }
  if(ret !== '' && ret !== '*'){
    ret = '-'+ret
  }
  //console.log(parent, name, sign, ret)
  if (name.indexOf('+') >= 0) {
    name = stripTillPlus(name)
  }
  str = parent+name+sign+ret
  str = str.replace(/[^\w-]/g,'').toLowerCase()
  return str
}

function stripTillPlus(str){
  return str.split('+')[1]
}
