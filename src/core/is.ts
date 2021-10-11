const hasOwn = Object.prototype.hasOwnProperty
const toString = Object.prototype.toString

export function isArray (obj: any) {
    if (typeof Array.isArray === 'function') {
        return Array.isArray(obj)
    }
    return toString.call(obj) === '[object Array]'
}

export function isPlainObject(obj: any) {
    if (!obj || toString.call(obj) !== '[object Object]') {
        return false
    }

    const hasOwnConstructor = hasOwn.call(obj, 'constructor')
    const hasIsPrototypeOf =
        obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')
    // Not own constructor property must be Object
    if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false
    }

    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.
    var key
    for (key in obj) {}

    return typeof key === 'undefined' || hasOwn.call(obj, key)
}

export function isString (obj: any) {
    return typeof obj === 'string'
}

export function isFunction (obj: any) {
    return typeof obj === 'function'
}

export function isEmptyObject (obj: any) {
    let i
    const arr = []
    for (i in obj) {
        i && arr.push(i)
    }
    return arr.length ? false : true
}
