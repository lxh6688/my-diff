import vnode from './vnode'
import createElement from './createElement'

export default function(oldVnode, newVnode){
  if(oldVnode.sel == '' || oldVnode.sel == undefined) {
    // 传入的第一个参数是DOM节点，此时需要包装为虚拟节点
    oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
  }

  if(oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel){
    console.log('是同一个节点')
  } else {
    console.log('不是同一个节点,暴力插入新的，删除旧的')
    createElement(newVnode, oldVnode.elm)
  }
} 