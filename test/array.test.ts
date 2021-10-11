import {
    asyncMap,
    asyncFind,
    asyncFilter,
    asyncSome,
    asyncEvery,
    max,
    remove,
    removed,
    uniqued,
} from '../dist'

describe('lib', () => {
    it('asyncMap', async() => {
        const a = Promise.resolve(1)
        const b = Promise.resolve(2)
        const c = Promise.resolve(3)
        const arr = [a, b, c]
        const ret = await asyncMap(arr, async item => item + 1)
        expect(ret).toEqual([2,3,4])
    })

    it('asyncFind', async () => {
        const a = Promise.resolve(1)
        const b = Promise.resolve(2)
        const c = Promise.resolve(3)
        const arr = [a, b, c]
        const ret = await asyncFind(arr, async item => item === 2)
        expect(ret).toEqual(2)
    })

    it('asyncFilter', async () => {
        const a = Promise.resolve(1)
        const b = Promise.resolve(2)
        const c = Promise.resolve(3)
        const arr = [a, b, c]
        const ret = await asyncFilter(arr, async item => item >= 2)
        expect(ret).toEqual([2, 3])
    })

    it('asyncSome', async () => {
        const a = Promise.resolve(1)
        const b = Promise.resolve(2)
        const c = Promise.resolve(3)
        const arr = [a, b, c]
        const ret = await asyncSome(arr, async item => item > 2)
        expect(ret).toEqual(true)
    })

    it('asyncEvery', async () => {
        const a = Promise.resolve(1)
        const b = Promise.resolve(2)
        const c = Promise.resolve(3)
        const arr = [a, b, c]
        const ret1 = await asyncEvery(arr, async item => item > 0)
        const ret2 = await asyncEvery(arr, async item => item > 2)
        expect(ret1).toEqual(true)
        expect(ret2).toEqual(false)
    })

    it('max', () => {
        const arr = [1, 2, 3]
        expect(max(arr)).toEqual(3)
    })

    it('max', () => {
        const a = { age: 20 }
        const b = { age: 21 }
        const c = { age: 19 }
        const arr = [a, b, c]
        const ret = max(arr, (a, b) => {
            return a.age > b.age
        })
        expect(ret).toEqual(b)
    })

    it('remove', () => {
        const arr = [1, 2, 3]
        const ret = remove(arr, 2)
        expect(ret).toEqual(arr)
        expect(ret).toEqual([1, 3])
    })

    it('removed', () => {
        const arr = [1, 2, 3]
        const ret = removed(arr, 2)
        expect(ret).toEqual([1, 3])
        expect(arr).toEqual([1, 2, 3])
    })

    it('uniqued', () => {
        const arr = [1, 2, 3, 1]
        const ret = uniqued(arr)
        expect(ret).toEqual([1, 2, 3])
    })

    it('uniqued', () => {
        const arr = ['a', 'b', 'a', 'c']
        const ret = uniqued(arr)
        expect(ret).toEqual(['a', 'b', 'c'])
    })
})
