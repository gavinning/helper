import { isArray, isEmptyObject, isFunction, isPlainObject, isString } from '..'

describe('lib', () => {

    it('isArray', () => {
        expect(isArray('www.com')).toEqual(false)
        expect(isArray(['www.com'])).toEqual(true)
    })

    it('isEmptyObject', () => {
        class Base {}
        class Normal { a = 1 }
        expect(isEmptyObject(new Base())).toEqual(true)
        expect(isEmptyObject({})).toEqual(true)
        expect(isEmptyObject(new Normal())).toEqual(false)
        expect(isEmptyObject({ a: 'www.com' })).toEqual(false)
    })

    it('isFunction', () => {
        expect(isFunction('www.com')).toEqual(false)
        expect(isFunction(() => {})).toEqual(true)
    })

    it('isPlainObject', () => {
        class Base {}
        expect(isPlainObject('www.com')).toEqual(false)
        expect(isPlainObject(new Base())).toEqual(false)
        expect(isPlainObject({})).toEqual(true)
    })

    it('isString', () => {
        expect(isString('www.com')).toEqual(true)
        expect(isString(1234)).toEqual(false)
        expect(isString([1234])).toEqual(false)
    })
})
