import { nextTick } from 'vue'

import { VxeGlobalHooksHandles, TableCustomMethods, TableCustomPrivateMethods } from '../../../types/all'

const tableCustomMethodKeys: (keyof TableCustomMethods)[] = ['openCustom', 'closeCustom']

const customHook: VxeGlobalHooksHandles.HookOptions = {
  setupTable ($xetable) {
    const { reactData, internalData } = $xetable
    const { computeCustomOpts } = $xetable.getComputeMaps()
    const { refTableHeader, refTableBody, refTableCustom } = $xetable.getRefMaps()

    const $xegrid = $xetable.xegrid

    const calcMaxHeight = () => {
      const { customStore } = reactData
      const tableHeader = refTableHeader.value
      const tableBody = refTableBody.value
      const tableCustom = refTableCustom.value
      const customWrapperElem = tableCustom ? tableCustom.$el as HTMLDivElement : null
      const headElem = tableHeader.$el as HTMLDivElement
      const bodyElem = tableBody.$el as HTMLDivElement
      // 判断面板不能大于表格高度
      let tableHeight = 0
      if (headElem) {
        tableHeight += headElem.clientHeight
      }
      if (bodyElem) {
        tableHeight += bodyElem.clientHeight
      }
      customStore.maxHeight = Math.max(0, customWrapperElem ? Math.min(customWrapperElem.clientHeight, tableHeight - 80) : 0)
    }

    const openCustom = () => {
      const { customStore } = reactData
      customStore.visible = true
      checkCustomStatus()
      calcMaxHeight()
      return nextTick().then(() => calcMaxHeight())
    }

    const closeCustom = () => {
      const { customStore } = reactData
      const customOpts = computeCustomOpts.value
      if (customStore.visible) {
        customStore.visible = false
        if (!customOpts.immediate) {
          $xetable.handleCustom()
        }
      }
      return nextTick()
    }

    const customMethods: TableCustomMethods = {
      openCustom,
      closeCustom
    }

    const checkCustomStatus = () => {
      const { customStore } = reactData
      const { collectColumn } = internalData
      const customOpts = computeCustomOpts.value
      const { checkMethod } = customOpts
      customStore.isAll = collectColumn.every((column) => (checkMethod ? !checkMethod({ column }) : false) || column.visible)
      customStore.isIndeterminate = !customStore.isAll && collectColumn.some((column) => (!checkMethod || checkMethod({ column })) && (column.visible || column.halfVisible))
    }

    const emitCustomEvent = (type: string, evnt: Event) => {
      const comp = $xegrid || $xetable
      comp.dispatchEvent('custom', { type }, evnt)
    }

    const customPrivateMethods: TableCustomPrivateMethods = {
      checkCustomStatus,
      emitCustomEvent,
      triggerCustomEvent (evnt) {
        const { customStore } = $xetable.reactData
        if (customStore.visible) {
          closeCustom()
          emitCustomEvent('close', evnt)
        } else {
          customStore.btnEl = evnt.target as HTMLDivElement
          openCustom()
          emitCustomEvent('open', evnt)
        }
      },
      customOpenEvent (evnt) {
        const { customStore } = reactData
        if (!customStore.visible) {
          customStore.activeBtn = true
          customStore.btnEl = evnt.target as HTMLDivElement
          $xetable.openCustom()
          $xetable.emitCustomEvent('open', evnt)
        }
      },
      customColseEvent (evnt) {
        const { customStore } = reactData
        if (customStore.visible) {
          customStore.activeBtn = false
          $xetable.closeCustom()
          $xetable.emitCustomEvent('close', evnt)
        }
      }
    }

    return { ...customMethods, ...customPrivateMethods }
  },
  setupGrid ($xegrid) {
    return $xegrid.extendTableMethods(tableCustomMethodKeys)
  }
}

export default customHook
