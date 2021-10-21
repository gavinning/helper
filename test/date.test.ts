import { date } from '../src'
import moment from 'moment'

describe('lib', () => {

    it('endToday', () => {
        expect(date.endToday()).toEqual(date.todayEnd().diff(moment(), 'second'))
        expect(date.endToday(60 * 60)).toEqual(date.todayEnd().diff(moment(), 'second') - 3600)
    })

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
        expect(date.todayStart().format()).toEqual(moment(date.today()).format())
    })

    it('todayEnd', () => {
        expect(date.todayEnd()).toEqual(moment().endOf('day'))
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
