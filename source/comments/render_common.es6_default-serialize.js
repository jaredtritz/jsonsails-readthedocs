export function defaultSerialize(val){
  if(_.isString(val)){
    return val
  }
  return JSON.stringify(val)
}
