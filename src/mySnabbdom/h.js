import vnode from './vnode.js'

/**
 * 编写一个低配版本的 h函数，这个函数必须接受三个参数
 * 相当于它的重载功能较弱
 * 也就是说，调用的时候形态必须是下面的三种之一：
 * 方式1 ： h('div', {}, '文字')
 * 方式2 ： h('div', {}, [])
 * 方式3 ： h('div', {}, h())
 */
export default function(sel, data, c) {
  if(arguments.length != 3)
    throw new Error('对不起，h函数必须传入三个参数，我是低配版的h函数')
  if(typeof c === 'string' || typeof c === 'number'){
    // 方式1
    return vnode(sel, data, undefined, c, undefined)
  } else if(Array.isArray(c)){
    // 方式2
    let children = []
    // 遍历c，收集children
    for(let i = 0; i < c.length; i++) {
      if(!(typeof c[i] == 'object' && c[i].hasOwnProperty('sel'))) {
        throw new Error('传入的数组参数中有项不是h函数')
      }
      // 收集从c[i]
      children.push(c[i])
    }
    return vnode(sel, data, children, undefined, undefined)
  } else if(typeof c ==='object' && c.hasOwnProperty('sel')) {
    // 方式3 传入的c是唯一的children
    let children = [c]
    return vnode(sel, data, children, undefined, undefined)
  } else {
    throw new Error('传入的第三个参数类型不对')
  }
}
