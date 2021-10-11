import { PlainObject, ToMapCallback } from '../types'

export function http(baseURL: string) {
    return `http://${baseURL}`
}

export function https(baseURL: string) {
    return `https://${baseURL}`
}

export function random(min: number, max: number) {
    const range = max - min
    const random = Math.random()
    return min + Math.round(random * range)
}

/**
 * 概率计算，基于Math.random的随机概率
 * @d 分子
 * @m 分母
 */
export function ratio(d: number, m: number) {
    return random(1, m) <= d
}

/**
 * @array
 * 支持数组，数组使用arr.slice(0)
 * @description
 * 深度clone，基于JSON.parse(JSON.stringify(obj))，不能拷贝循环引用的对象
 */
export function clone<T>(obj: T): T {
    return Array.isArray(obj) ?
        obj.slice(0):
        JSON.parse(JSON.stringify(obj))
}

/**
 * Array => Map
 * @param arr   数组
 * @param key   数组子对象的key
 * @param fn    处理key值的回调
 */
export function toMap(arr: PlainObject[], key: string, fn?: ToMapCallback) {
    const map: PlainObject = {}
    arr.forEach(item => {
        fn
            ? // 存在fn时
              (map[item[key]] = fn(key, item[key], item))
            : // 不存在fn时，返回item自身
              (map[item[key]] = item)
    })
    return map
}

/**
 * Array => Map
 * @param arr 
 * @param keys 
 * @returns 
 */
export function makeMap(arr: PlainObject[], keys: string[]) {
    const map: PlainObject = {}
    keys.map((key, index) => {
        map[key] = arr[index]
    })
    return map
}

/**
 * Map => Array
 * @param map Map数据
 * @param fn  处理数据的回调
 * @example toArray({a:1}, (key, value) => key) ==> ['a']
 * @example toArray({a:1}, (key, value) => value) ==> [1]
 */
export function toArray(map: PlainObject, fn: (key: string, value: any) => any) {
    let key
    const array = []
    for (key in map) {
        array.push(fn(key, map[key]))
    }
    return array
}

/**
 * 获取一个Map的key的数组
 * @param map Map对象
 * @param fn  对key的处理回调
 */
export function getKeys(map: PlainObject, fn: (key: string) => string) {
    return Object.keys(map).map(key => fn(key))
}

/**
 * 获取一个Map的value的数组
 * @param map Map对象
 * @param fn  对value的处理回调
 */
export function getValues(map: PlainObject, fn: (value: any) => any) {
    return Object.values(map).map(value => fn(value))
}
