import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

const patch = init([classModule, propsModule, styleModule, eventListenersModule])

var myVnode1 = h('a', {
  props: {
    href: 'http://www.baidu.com',
    target: '_blank'
  }
}, 'baidu')

const myVnode2 = h('div', '我是一个盒子')

const myVnode3 = h('ul', [
  h('li', '苹果'),
  h('li', '香蕉'),
  h('li', '西瓜'),
  h('li', h('p', '火龙果')),
])

const container = document.getElementById('container')

// 让虚拟节点上树
patch(container, myVnode3)