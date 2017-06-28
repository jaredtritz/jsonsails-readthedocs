renderChildren(children){
  var rendered_children = []
  for (let child of children) {
    if(!child.evaluateLogic()) continue;
    rendered_children.push(child.render())
  }
  for (let child of rendered_children) {
    this.dom.appendChild(child.dom)
  }
  return rendered_children
}
