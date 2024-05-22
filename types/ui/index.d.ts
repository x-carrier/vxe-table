import { App } from 'vue'

export const tableVersion: string

declare module '@vxe-ui/core' {
  export interface VxeUIExport {
    tableVersion: string
  }
}

export * from './global-config'
export * from './global-icon'
export * from './renderer'
export * from './interceptor'
export * from './commands'
export * from './formats'
export * from './menus'
export * from './validators'
export * from './hooks'

export * from '@vxe-ui/core'
export default VxeUI
