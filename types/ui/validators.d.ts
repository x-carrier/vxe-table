import { VxeTableDefines } from '../components/table'

/* eslint-disable no-use-before-define */

declare module '@vxe-ui/core' {
  export namespace VxeGlobalValidatorsHandles {
    export interface ValidatorsOptions {
      cellValidatorMethod?: CellValidatorMethod
    }

    export type CellValidatorMethod<D = any> = (params: CellValidatorParams<D>, ...args: any[]) => void | Error | Promise<any>
    export interface CellValidatorParams<D = any> extends VxeTableDefines.RuleValidatorParams<D> {}
  }
}
