import { App } from 'vue'
import { VxeGlobalConfig } from './ui'

import VxeTable from './components/table'
import VxeColumn from './components/column'
import VxeColgroup from './components/colgroup'
import VxeGrid from './components/grid'
import VxeToolbar from './components/toolbar'

export function install (app: App, options?: VxeGlobalConfig): void

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    VxeTable: typeof VxeTable
    VxeColumn: typeof VxeColumn
    VxeColgroup: typeof VxeColgroup
    VxeGrid: typeof VxeGrid
    VxeToolbar: typeof VxeToolbar
  }
}

export * from './ui'

// Component
export * from './components/table'
export * from './components/column'
export * from './components/colgroup'
export * from './components/grid'
export * from './components/toolbar'
