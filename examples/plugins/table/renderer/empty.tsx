import { VxeUI } from '../../../../packages'

// 创建一个简单的空内容渲染
VxeUI.renderer.add('NotData', {
  // 空内容模板
  renderTableEmptyView () {
    return [
      <span>
        <img src="/vxe-table/static/other/img1.gif"/>
        <p>亲，没有更多数据了！</p>
      </span>
    ]
  }
})
