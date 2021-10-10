import moment, { MomentInput, DurationInputArg1, DurationInputArg2 } from 'moment'

const enum Format {
    Date = 'YYYY-MM-DD',
    Full = 'YYYY-MM-DD HH:mm:ss',
}

export const date = {
    format(date: MomentInput) {
        return moment(date).format(Format.Full)
    },

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
        return moment(this.today())
    },

    /**
     * 明天的日期
     * @returns Moment(YYYY-MM-DD).add(1, 'days')
     */
    todayEnd() {
        return this.todayStart().add(1, 'days')
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
