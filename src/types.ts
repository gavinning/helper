export interface PlainObject {
    [key: string]: any
}

export type ArrayCallback = (item: any, index: number, arr: any[]) => any

export type ArrayPromiseCallback = (item: any, index: number, arr: Promise<any>[]) => Promise<any>

export type BoolCallback = (item: any, index: number, arr: any[]) => boolean

export type BoolPromiseCallback = (item: any, index: number, arr: Promise<any>[]) => Promise<boolean>

export type CompareCallback = (a: any, b: any) => boolean

export type ToMapCallback = (key: string, value: any, item: PlainObject) => any

export type CompareInput = '>' | '>=' | '<' | '<=' | CompareCallback
