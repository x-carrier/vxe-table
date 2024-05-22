import { VxeUI } from '../../../packages'

// 自定义全局的格式化处理函数
VxeUI.menus.mixin({
  alertMsg: {
    menuMethod () {
      alert('1')
    }
  },
  test1 () {
    alert('2')
  }
})
