<template>
  <div class="page-layout-container">
    <div class="page-layout-aside">
      <RouterLink  class="link" v-for="(item, index) in navList" :key="index" :to="item.routerLink">{{ item.name }}</RouterLink>
    </div>
    <div class="page-layout-body">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const navList = ref([
  { name: 'Home', icon: 'vxe-icon-user-fill', routerLink: { path: '/' } },
  { name: 'ToolbarTest', routerLink: { name: 'ToolbarTest' } },
  { name: 'TableTest', routerLink: { name: 'TableTest' } },
  { name: 'GridTest', routerLink: { name: 'GridTest' } }
])
</script>

<style lang="scss" scoped>
.page-layout-container {
  display: flex;
  flex-direction: row;
}
.page-layout-aside {
  flex-shrink: 0;
  width: 200px;
  padding: 16px;
  border-right: 1px solid #d0d7de;
  .link {
    display: block;
  }
}
.page-layout-body {
  flex-grow: 1;
  padding: 16px;
  overflow: auto;
}
</style>
