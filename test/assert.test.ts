import { ok, not } from '../src'

describe('assert', () => {
    it('works', () => {
        ok(1, '222')
        not(0, '333')
    })
})
