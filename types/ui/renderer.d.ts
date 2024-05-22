import { VxeComponentStyleType, VxeComponentClassNameType } from '@vxe-ui/core'
import { VxeTableDefines, VxeTableConstructor, VxeTablePrivateMethods, VxeTablePropTypes } from '../components/table'
import { VxeGridConstructor } from '../components/grid'
import { VxeColumnPropTypes } from '../components/column'
import { VxeToolbarPropTypes } from '../components/toolbar'

/* eslint-disable no-use-before-define */

// 表格
declare module '@vxe-ui/core' {
  export interface VxeGlobalRendererOptions {
    // 筛选渲染
    filterClassName?: string | ((params: VxeGlobalRendererHandles.RenderFilterParams<any>) => string | VxeComponentClassNameType)
    showFilterFooter?: boolean
    renderFilter?(renderOpts: VxeGlobalRendererHandles.RenderFilterOptions, params: VxeGlobalRendererHandles.RenderFilterParams<any>): VxeComponentSlotType | VxeComponentSlotType[]
    filterMethod?(params: VxeGlobalRendererHandles.FilterMethodParams<any>): boolean
    filterRemoteMethod?(params: VxeGlobalRendererHandles.FilterRemoteMethod<any>): boolean
    filterResetMethod?(params: VxeGlobalRendererHandles.FilterResetMethodParams<any>): void
    filterRecoverMethod?(params: VxeGlobalRendererHandles.FilterRecoverMethodParams<any>): void
    // 默认行为
    defaultFilterMethod?(params: VxeGlobalRendererHandles.FilterMethodParams<any>): boolean

    // 单元格渲染
    cellClassName?: string | ((params: VxeGlobalRendererHandles.RenderDefaultParams<any>) => string | VxeComponentClassNameType)
    cellStyle?: VxeComponentStyleType | ((params: VxeGlobalRendererHandles.RenderDefaultParams<any>) => VxeComponentStyleType)
    renderHeader?(renderOpts: VxeGlobalRendererHandles.RenderHeaderOptions, params: VxeGlobalRendererHandles.RenderHeaderParams<any>): VxeComponentSlotType | VxeComponentSlotType[]
    renderDefault?(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: VxeGlobalRendererHandles.RenderDefaultParams<any>): VxeComponentSlotType | VxeComponentSlotType[]
    renderFooter?(renderOpts: VxeGlobalRendererHandles.RenderFooterOptions, params: VxeGlobalRendererHandles.RenderFooterParams<any>): VxeComponentSlotType | VxeComponentSlotType[]
    exportMethod?(params: VxeGlobalRendererHandles.ExportMethodParams<any>): string
    footerExportMethod?(params: VxeGlobalRendererHandles.FooterExportMethodParams<any>): string

    // 编辑渲染
    autofocus?: string | ((params: VxeGlobalRendererHandles.RenderEditParams<any> | VxeGlobalRendererHandles.RenderCellParams<any>) => HTMLElement | null)
    autoselect?: boolean
    renderEdit?(renderOpts: VxeGlobalRendererHandles.RenderEditOptions<any>, params: VxeGlobalRendererHandles.RenderEditParams<any>): VxeComponentSlotType | VxeComponentSlotType[]
    renderCell?(renderOpts: VxeGlobalRendererHandles.RenderCellOptions<any>, params: VxeGlobalRendererHandles.RenderCellParams<any>): VxeComponentSlotType | VxeComponentSlotType[]

    // 内容渲染
    renderExpand?(renderOpts: VxeGlobalRendererHandles.RenderExpandOptions, params: VxeGlobalRendererHandles.RenderExpandParams<any>): VxeComponentSlotType | VxeComponentSlotType[]

    // 空内容渲染
    renderTableEmptyView?(renderOpts: VxeGlobalRendererHandles.RenderTableEmptyViewOptions, params: VxeGlobalRendererHandles.RenderEmptyParams): VxeComponentSlotType | VxeComponentSlotType[]

    /**
     * @deprecated 已废弃
     */
    className?: string
    /**
     * 已废弃，请使用 renderTableEmptyView
     * @deprecated
     */
    renderEmpty?(renderOpts: VxeGlobalRendererHandles.RenderTableEmptyViewOptions, params: VxeGlobalRendererHandles.RenderEmptyParams): VxeComponentSlotType | VxeComponentSlotType[]
  }

  export namespace VxeGlobalRendererHandles {
    export interface RenderFilterOptions extends VxeColumnPropTypes.FilterRender {}

    export interface RenderParams {}

    export type RenderFilterParams<D = any> = {
      $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>
      $panel: any
      column: {
        filters: VxeTableDefines.FilterOption[]
      } & VxeTableDefines.ColumnInfo<D>
      columnIndex: number
      $columnIndex: number
      $rowIndex: number
    }

    export type FilterMethodParams<D = any> = {
      $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>
      value: any
      option: VxeTableDefines.FilterOption
      cellValue: any
      row: any
      column: VxeTableDefines.ColumnInfo<D>
    }

    export interface FilterRemoteMethod<D = any> extends VxeTableDefines.FilterChangeParams<D> {
      $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>
    }

    export interface FilterResetMethodParams<D = any> {
      $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>
      options: VxeTableDefines.FilterOption[]
      column: VxeTableDefines.ColumnInfo<D>
    }

    export interface FilterRecoverMethodParams<D = any> {
      $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>
      option: VxeTableDefines.FilterOption
      column: VxeTableDefines.ColumnInfo<D>
    }

    export interface RenderHeaderOptions extends VxeGlobalRendererHandles.RenderOptions { }

    export interface RenderHeaderParams<D = any> {
      $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>
      column: VxeTableDefines.ColumnInfo<D>
      columnIndex: number
      $columnIndex: number
      $rowIndex: number
    }

    export type RenderDefaultOptions<D = any> = VxeColumnPropTypes.EditRender<D>
    export type RenderDefaultParams<D = any> = RenderEditParams<D>

    export interface RenderFooterOptions extends VxeGlobalRendererHandles.RenderOptions { }

    export interface RenderFooterParams<D = any> {
      $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>
      column: VxeTableDefines.ColumnInfo<D>
      columnIndex: number
      _columnIndex: number
      $columnIndex: number
      $rowIndex: number
      items: any[]
      data: D[][]
    }

    export interface ExportMethodParams<D = any> {
      row: D
      column: VxeTableDefines.ColumnInfo<D>
      options: VxeTablePropTypes.ExportHandleOptions
    }

    export interface FooterExportMethodParams<D = any> {
      items: any[]
      _columnIndex: number
      column: VxeTableDefines.ColumnInfo<D>
      options: VxeTablePropTypes.ExportHandleOptions
    }

    export type RenderEditOptions<D = any> = VxeColumnPropTypes.EditRender<D>

    export interface RenderEditParams<D = any> {
      $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>
      $grid: VxeGridConstructor<D> | null
      column: VxeTableDefines.ColumnInfo<D>
      columnIndex: number
      $columnIndex: number
      rowid: string
      row: D
      rowIndex: number
      $rowIndex: number
      isHidden: boolean
      fixed: VxeColumnPropTypes.Fixed
      type: string
    }

    export type RenderCellOptions<D = any> = VxeColumnPropTypes.EditRender<D>
    export type RenderCellParams<D = any> = {
      $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>
      $grid: VxeGridConstructor<D> | null
      column: VxeTableDefines.ColumnInfo<D>
      columnIndex: number
      $columnIndex: number
      rowid: string
      row: D
      rowIndex: number
      $rowIndex: number
      isHidden: boolean
      fixed: VxeColumnPropTypes.Fixed
      type: string
    }

    export interface RenderExpandOptions extends VxeColumnPropTypes.ContentRender { }
    export type RenderExpandParams<D = any> = RenderEditParams<D>

    export type RenderTableEmptyViewOptions = VxeTablePropTypes.EmptyRender

    export interface RenderEmptyParams<D = any> {
      $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>
    }

    /**
     * 选项参数
     */
    export interface RenderOptionProps {
      value?: string
      label?: string
      disabled?: string
      key?: string
    }

    /**
     * 分组选项参数
     */
    export interface RenderOptionGroupProps {
      options?: string
      label?: string
      key?: string
    }
  }
}

// 工具栏
declare module '@vxe-ui/core' {
  export interface VxeGlobalRendererOptions {
    // 工具栏-按钮渲染
    toolbarButtonClassName?: string | ((params: VxeGlobalRendererHandles.RenderButtonParams<any>) => string | VxeComponentClassNameType)
    renderToolbarButton?(renderOpts: VxeGlobalRendererHandles.RenderButtonOptions, params: VxeGlobalRendererHandles.RenderButtonParams<any>): VxeComponentSlotType | VxeComponentSlotType[]
    toolbarToolClassName?: string | ((params: VxeGlobalRendererHandles.RenderToolParams<any>) => string | VxeComponentClassNameType)
    renderToolbarTool?(renderOpts: VxeGlobalRendererHandles.RenderToolOptions, params: VxeGlobalRendererHandles.RenderToolParams<any>): VxeComponentSlotType | VxeComponentSlotType[]
  }

  export namespace VxeGlobalRendererHandles {

    export interface RenderButtonOptions extends VxeToolbarPropTypes.ButtonRender { }
    export interface RenderButtonParams<D = any> {
      $grid: VxeGridConstructor | null
      $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>
      button: VxeToolbarPropTypes.ButtonConfig
    }

    export interface RenderToolOptions extends VxeToolbarPropTypes.ToolRender { }
    export interface RenderToolParams<D = any> {
      $grid: VxeGridConstructor | null
      $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>
      tool: VxeToolbarPropTypes.ToolConfig
    }
  }
}
