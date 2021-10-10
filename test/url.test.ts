import { urlParse } from '../src'

describe('lib', () => {
    it('urlParse', () => {
        const uri = urlParse('mysql://root:root@localhost:3306/database?timeout=1000')
        expect(uri.protocol).toEqual('mysql')
        expect(uri.username).toEqual('root')
        expect(uri.password).toEqual('root')
        expect(uri.host).toEqual('localhost')
        expect(uri.pathname).toEqual('database')
        expect(uri.query.get('timeout')).toEqual('1000')
    })
})
