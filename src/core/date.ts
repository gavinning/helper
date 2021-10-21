import moment, { MomentInput, DurationInputArg1, DurationInputArg2 } from 'moment'

const enum Format {
    Date = 'YYYY-MM-DD',
    Full = 'YYYY-MM-DD HH:mm:ss',
}

export const date = {
    /**
     * 返回从现在到今天截止的时间，单位秒
     * @param offset 向前偏移，单位秒
     * @example 取现在到今天截止的时间：endToday()
     * @example 取现在到今天23点的时间：endToday(1 * 60 * 60)
     */
    endToday(offset: number = 0) {
        return moment().endOf('day').diff(moment(), 'second') - offset
    },

    /**
     * 日期格式化，日期+时间
     * @param date
     * @returns YYYY-MM-DD HH:mm:ss
     */
    format(date: MomentInput) {
        return moment(date).format(Format.Full)
    },

    /**
     * 日期格式化，仅日期没有时间
     * @param date
     * @returns YYYY-MM-DD
     */
    formatDate(date: MomentInput) {
        return moment(date).format(Format.Date)
    },

    /**
     * 今天的日期
     * @returns YYYY-MM-DD
     */
    today() {
        return this.formatDate(moment())
    },

    /**
     * 今天的日期
     * @returns Moment(YYYY-MM-DD)
     */
    todayStart() {
        return moment().startOf('day')
    },

    /**
     * 明天的日期
     * @returns Moment().endOf('day')
     */
    todayEnd() {
        return moment().endOf('day')
    },

    /**
     * 日期向后偏移
     * @param date 日期
     * @param days 向后偏移天数，默认=1
     * @returns YYYY-MM-DD
     */
    afterDay(date: MomentInput, days = 1) {
        return moment(date).add(days, 'days').format(Format.Date)
    },

    isToday(date: MomentInput) {
        return this.formatDate(date) === this.today()
    },

    /**
     *
     * @param amount 增加数量
     * @param unit 单位，默认 = 'days'
     * @returns YYYY-MM-DD HH:mm:ss
     */
    add(amount: DurationInputArg1, unit: DurationInputArg2 = 'days'): string {
        return this.format(moment().add(amount, unit))
    },

    /**
     * 连续时间区间
     * @param offset 区间天数
     * @param shift 漂移天数，向前推移的天数
     */
    offsetDays(offset: number, shift = 0) {
        const tmp = new Array(offset).fill(0)
        return tmp.map((_, index) => {
            return moment()
                .subtract(index + shift, 'days')
                .format(Format.Date)
        })
    },
}
