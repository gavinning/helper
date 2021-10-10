import { date } from '..'
import moment from 'moment'

describe('lib', () => {

    it('format', () => {
        const now = Date.now()
        expect(date.format(now)).toEqual(moment(now).format('YYYY-MM-DD HH:mm:ss'))
    })

    it('formatDate', () => {
        const now = Date.now()
        expect(date.formatDate(now)).toEqual(moment(now).format('YYYY-MM-DD'))
    })

    it('today', () => {
        const now = Date.now()
        expect(date.today()).toEqual(moment(now).format('YYYY-MM-DD'))
    })

    it('todayStart', () => {
        expect(date.todayStart()).toEqual(moment(date.today()))
    })

    it('todayEnd', () => {
        expect(date.todayEnd()).toEqual(moment(date.today()).add(1, 'd'))
    })

    it('afterDay', () => {
        const now = Date.now()
        expect(date.afterDay(now)).toEqual(moment(now).add(1, 'd').format('YYYY-MM-DD'))
    })

    it('add', () => {
        expect(date.isToday(date.add(0))).toEqual(true)
        expect(date.isToday(date.add(1))).toEqual(false)
        expect(date.isToday(date.add(-1))).toEqual(false)
    })
    
    it('offsetDays', () => {
        const days = [
            date.formatDate(date.todayStart().subtract(1, 'days')),
            date.formatDate(date.todayStart().subtract(2, 'days')),
            date.formatDate(date.todayStart().subtract(3, 'days')),
            date.formatDate(date.todayStart().subtract(4, 'days')),
            date.formatDate(date.todayStart().subtract(5, 'days')),
        ]
        expect(date.offsetDays(5, 1)).toEqual(days)
    })
})
