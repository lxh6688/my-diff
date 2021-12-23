import h from './mySnabbdom/h'
import patch from './mySnabbdom/patch'

const myVnode1 = h('h1', {}, '你好')
const container = document.getElementById('container')

patch(container, myVnode1)