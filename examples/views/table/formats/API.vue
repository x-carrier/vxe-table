<template>
  <div>
    <h1>{{ $t('app.aside.nav.formats') }}</h1>
    <p class="tip">将列的格式化函数注册成全局可复用，通过 <table-column-api-link prop="formatter"/> 调用</p>
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
        name: 'add(name, callback)',
        desc: '添加一个',
        version: '',
        type: '',
        enum: '',
        defVal: 'name: string, callback: (params) => string | number',
        list: []
      },
      {
        name: 'mixin(options)',
        desc: '添加多个',
        version: '',
        type: '',
        enum: '',
        defVal: 'options: { [name: string]: (params) => string | number }',
        list: []
      },
      {
        name: 'delete(name)',
        desc: '删除',
        version: '',
        type: '',
        enum: '',
        defVal: 'name',
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
