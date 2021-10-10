import { http, https } from '../src'

describe('lib', () => {
    it('http', () => {
        expect(http('www.com')).toEqual('http://www.com')
    })
    it('https', () => {
        expect(https('www.com')).toEqual('https://www.com')
    })
})
