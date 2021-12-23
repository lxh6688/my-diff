/**
 * 真正创建节点，将vnode创建为DOM，插入到pivot这个元素之前
 * @param {*} vnode 虚拟节点
 * @param {*} pivot 元素
 */
export default function(vnode, pivot){
  let domNode = document.createElement(vnode.sel)
  // 有子节点还是有文本
  if(vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)){
    domNode.innerText = vnode.text
    pivot.parentNode.insertBefore(domNode, pivot)
  }
}