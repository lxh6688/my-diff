import h from './mySnabbdom/h'

var myVnode1 = h('div', {}, '文字')

const myVnode2 = h('ul', {}, [
  h('li', {}, '苹果'),
  h('li', {}, '香蕉'),
  h('li', {}, [
    h('div', {}, [
      h('p', {}, '哈哈'),
      h('p', {}, '嘻嘻'),
    ])
  ]),
  h('li', {}, h('p', {}, '火龙果')),
])

console.log(myVnode1)
console.log(myVnode2)