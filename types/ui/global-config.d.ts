import { VxeTableProps } from '../components/table'
import { VxeGridProps } from '../components/grid'
import { VxeToolbarProps } from '../components/toolbar'

declare module '@vxe-ui/core' {
  export interface VxeGlobalConfig {
    table?: VxeTableProps
    grid?: VxeGridProps
    toolbar?: VxeToolbarProps

    /**
     * 获取导出的所有文件类型
     * @deprecated
     */
    exportTypes?: string[]
    /**
     * 获取导入的所有文件类型
     * @deprecated
     */
    importTypes?: string[]
    /**
     * @deprecated
     */
    emptyCell?: string
    /**
     * @deprecated
     */
    translate?(key: string, args?: any): string
    /**
     * 还原成老的校验样式
     * @deprecated
     */
    cellVaildMode?: 'obsolete'
    /**
     * 返回老的校验结果
     * @deprecated
     */
    validToReject?: 'obsolete'
  }
}
