import { isString, isFunction } from './is'
import {
    ArrayPromiseCallback,
    BoolCallback,
    BoolPromiseCallback,
    CompareCallback,
    CompareInput,
} from '../types'

export async function asyncMap(arr: Promise<any>[], fn: ArrayPromiseCallback) {
    const ret = []
    const length = arr.length
    for (let i = 0; i < length; i++) {
        ret.push(await fn(await arr[i], i, arr))
    }
    return ret
}

export async function asyncFind(arr: Promise<any>[], fn: BoolPromiseCallback) {
    const length = arr.length
    for (let i = 0; i < length; i++) {
        const item = await arr[i]
        if (await fn(item, i, arr)) {
            return item
        }
    }
    return null
}

export async function asyncFilter(arr: Promise<any>[], fn: BoolPromiseCallback) {
    const tmp = []
    const length = arr.length
    for (let i = 0; i < length; i++) {
        const item = await arr[i]
        if (await fn(item, i, arr)) {
            tmp.push(item)
        }
    }
    return tmp
}

export async function asyncSome(arr: Promise<any>[], fn: BoolPromiseCallback) {
    return (await asyncFind(arr, fn)) ? true : false
}

export async function asyncEvery(arr: Promise<any>[], fn: BoolPromiseCallback) {
    return arr.length === (await asyncFilter(arr, fn)).length
}

/**
 * 从数组中删除一个元素
 * @param arr 
 * @param val 值或回调函数
 * @returns 修改数组本身
 */
export function remove(arr: any[], val: any | BoolCallback): any[] {
    if (!val) {
        return arr
    }
    if (isFunction(val)) {
        let el = arr.find(val)
        return remove(arr, el)
    }
    let index = arr.indexOf(val)
    index < 0 || arr.splice(index, 1)
    return arr
}

/**
 * 从数组中删除一个元素
 * @param arr 
 * @param val 值或回调函数
 * @returns 原始数组保持不变，返回新数组
 */
export function removed(arr: any[], val: any | BoolCallback) {
    const tmp = arr.slice(0)
    return remove(tmp, val)
}

/**
 * 数组去重，使用set特性，只对值数组生效
 * @param arr
 * @description Array.from(new Set(arr))
 */
export function uniqued(arr: any[]) {
    return Array.from(new Set(arr))
}

/**
 * 数组最大值
 * @param {number[] | any[]} arr
 * @param {CompareCallback} fn arr是number[]时fn为空，arr是any[]时fn必须
 */
export function max(arr: number[]): number
export function max(arr: any[], fn: CompareCallback): any
export function max(arr: any, fn?: CompareCallback) {
    if (!fn) {
        return Math.max.apply(Math, arr)
    }
    let tmp = arr.slice(0)
    let top = tmp.shift()
    while (tmp.length > 0) {
        const b = tmp.shift()
        fn(top, b) ? top : (top = b)
    }
    return top
}

/**
 * 数组排序，支持自定义排序，默认排序规则：>
 * @param arr
 * @param rule 自定义排序规则
 */
export function sorted(arr: any[], rule: CompareInput = '>') {
    if (arr.length < 2) {
        return arr
    }

    switch (rule) {
        case '>':
            rule = (a, b) => a > b
            break

        case '>=':
            rule = (a, b) => a >= b
            break

        case '<':
            rule = (a, b) => a < b
            break

        case '<=':
            rule = (a, b) => a <= b
            break

        default:
            break
    }

    if (isString(rule)) {
        rule = (a, b) => a > b
    }

    let ret = []
    let tmp = arr.slice(0)

    while (tmp.length > 0) {
        let val = max(tmp, <CompareCallback>rule)
        remove(tmp, val)
        ret.push(val)
    }
    return ret
}
