import { http, https, random, clone, toMap, toArray, makeMap, getKeys, getValues } from '../dist'

describe('lib', () => {

    it('http', () => {
        expect(http('www.com')).toEqual('http://www.com')
    })

    it('https', () => {
        expect(https('www.com')).toEqual('https://www.com')
    })

    it('random', () => {
        const num = random(10, 100)
        expect(num).toBeGreaterThanOrEqual(10)
        expect(num).toBeLessThanOrEqual(100)
    })

    it('clone', () => {
        const a = { age: 20 }
        const b = { age: 21 }
        const c = { age: 22 }
        const arr = [a, b, c]
        const map = {a, b, c}

        expect(clone(arr)).toStrictEqual(arr)
        expect(clone(map)).toStrictEqual(map)
 
        expect(clone(arr)[0].age).toEqual(arr[0].age)
        expect(clone(map).a.age).toEqual(map.a.age)

        expect(clone(arr) === arr).toEqual(false)
        expect(clone(map) === map).toEqual(false)
    })

    it('toMap', () => {
        const a = { age: 20 }
        const b = { age: 21 }
        const c = { age: 22 }
        const arr = [a, b, c]
        const map = toMap(arr, 'age')
        const target = {
            [20]: a,
            [21]: b,
            [22]: c
        }
        expect(map).toEqual(target)
        expect(map).toStrictEqual(target)
    })

    it('toMap with callback', () => {
        const a = { age: 20 }
        const b = { age: 21 }
        const c = { age: 22 }
        const arr = [a, b, c]
        const ret1 = toMap(arr, 'age')
        const ret2 = toMap(arr, 'age', (key, value, item) => {
            void(key)
            void(value)
            item.city = 'beijing'
            return item
        })
        const target1 = {
            [20]: a,
            [21]: b,
            [22]: c,
        }
        const target2 = {
            [20]: { city: 'beijing', ...a },
            [21]: { city: 'beijing', ...b },
            [22]: { city: 'beijing', ...c },
        }
        expect(ret1).toEqual(target1)
        expect(ret2).toStrictEqual(target2)
    })

    it('toArray', () => {
        const a = { age: 20 }
        const b = { age: 21 }
        const c = { age: 22 }
        const map = { a, b, c }
        const ret1 = toArray(map, (key, _) => key)
        const ret2 = toArray(map, (_, value) => value.age)
        expect(ret1).toEqual(['a', 'b', 'c'])
        expect(ret2).toEqual([20, 21, 22])
    })

    it('makeMap', () => {
        const a = { name: 'a', age: 20 }
        const b = { name: 'b', age: 21 }
        const c = { name: 'c', age: 22 }
        const arr = [a, b, c]
        const map = makeMap(arr, ['tom', 'jack', 'alice'])
        const target = {
            tom: a,
            jack: b,
            alice: c,
        }
        expect(map).toStrictEqual(target)
    })

    it('getKeys', () => {
        const a = { name: 'a', age: 20 }
        const b = { name: 'b', age: 21 }
        const c = { name: 'c', age: 22 }
        const map = { a, b, c }
        const ret1 = getKeys(map, key => key)
        const ret2 = getKeys(map, key => key + 1)
        expect(ret1).toEqual(Object.keys(map))
        expect(ret2).toEqual(Object.keys(map).map(key => key + 1))
    })

    it('getValues', () => {
        const a = { name: 'a', age: 20 }
        const b = { name: 'b', age: 21 }
        const c = { name: 'c', age: 22 }
        const map = { a, b, c }
        const ret1 = getValues(map, value => value)
        const ret2 = getValues(map, value => value.age)
        expect(ret1).toStrictEqual(Object.values(map))
        expect(ret2).toEqual(Object.values(map).map(value => value.age))
    })
})
