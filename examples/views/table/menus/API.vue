<template>
  <div>
    <h1>{{ $t('app.aside.nav.menus') }}</h1>
    <p class="tip">将右键菜单注册成全局可复用的</p>
    <vxe-table
      resizable
      highlight-current-row
      highlight-hover-row
      highlight-current-column
      :data="tableData">
      <vxe-column field="name" title="app.api.title.prop" min-width="280" tree-node></vxe-column>
      <vxe-column field="desc" title="app.api.title.desc" min-width="200"></vxe-column>
      <vxe-column field="type" title="app.api.title.type" min-width="140"></vxe-column>
      <vxe-column field="enum" title="app.api.title.enum" min-width="150"></vxe-column>
      <vxe-column field="defVal" title="app.api.title.defVal" min-width="160"></vxe-column>
    </vxe-table>
    <h2>示例</h2>
    <pre>
      <pre-code class="typescript">{{ demoCodes[0] }}</pre-code>
      <pre-code class="html">{{ demoCodes[1] }}</pre-code>
      <pre-code class="typescript">{{ demoCodes[2] }}</pre-code>
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const tableData = ref([
      {
        name: 'add(code, callback)',
        desc: '添加一个',
        type: '',
        enum: '',
        defVal: 'code: string, callback: (params, event) => any',
        list: []
      },
      {
        name: 'mixin(options)',
        desc: '添加多个',
        type: '',
        enum: '',
        defVal: 'options: { [code: string]: (params, event) => any }',
        list: []
      },
      {
        name: 'delete(code)',
        desc: '删除',
        type: '',
        enum: '',
        defVal: 'code: string',
        list: []
      }
    ])
    return {
      tableData,
      demoCodes: []
    }
  }
})
</script>
