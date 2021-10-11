# Helper
常用方法库

### Usage
```sh
npm i @4a/helper
yarn add @4a/helper
```
```ts
import { ... } from '@4a/helper'
```

### Assert
```ts
function ok(condition: any, message: string): void;
function not(condition: any, message: string): void;
```

### Array
```ts
function asyncMap(arr: Promise<any>[], fn: ArrayPromiseCallback): Promise<any[]>;
function asyncFind(arr: Promise<any>[], fn: BoolPromiseCallback): Promise<any>;
function asyncFilter(arr: Promise<any>[], fn: BoolPromiseCallback): Promise<any[]>;
function asyncSome(arr: Promise<any>[], fn: BoolPromiseCallback): Promise<boolean>;
function asyncEvery(arr: Promise<any>[], fn: BoolPromiseCallback): Promise<boolean>;
/**
 * 从数组中删除一个元素
 * @param arr
 * @param val 值或回调函数
 * @returns 修改数组本身
 */
function remove(arr: any[], val: any | BoolCallback): any[];
/**
 * 从数组中删除一个元素
 * @param arr
 * @param val 值或回调函数
 * @returns 原始数组保持不变，返回新数组
 */
function removed(arr: any[], val: any | BoolCallback): any[];
/**
 * 数组去重，使用set特性，只对值数组生效
 * @param arr
 * @description Array.from(new Set(arr))
 */
function uniqued(arr: any[]): any[];
/**
 * 数组最大值
 * @param {number[] | any[]} arr
 * @param {CompareCallback} fn arr是number[]时fn为空，arr是any[]时fn必须
 */
function max(arr: number[]): number;
function max(arr: any[], fn: CompareCallback): any;
/**
 * 数组排序，支持自定义排序，默认排序规则：>
 * @param arr
 * @param rule 自定义排序规则
 */
function sorted(arr: any[], rule?: CompareInput): any[];
```

### Date
```ts
const date: {
    /**
     * 日期格式化，日期+时间
     * @param date
     * @returns YYYY-MM-DD HH:mm:ss
     */
    format(date: MomentInput): string;
    /**
     * 日期格式化，仅日期没有时间
     * @param date
     * @returns YYYY-MM-DD
     */
    formatDate(date: MomentInput): string;
    /**
     * 今天的日期
     * @returns YYYY-MM-DD
     */
    today(): string;
    /**
     * 今天的日期
     * @returns Moment(YYYY-MM-DD)
     */
    todayStart(): moment.Moment;
    /**
     * 明天的日期
     * @returns Moment(YYYY-MM-DD).add(1, 'days')
     */
    todayEnd(): moment.Moment;
    /**
     * 日期向后偏移
     * @param date 日期
     * @param days 向后偏移天数，默认=1
     * @returns YYYY-MM-DD
     */
    afterDay(date: MomentInput, days?: number): string;
    isToday(date: MomentInput): boolean;
    /**
     *
     * @param amount 增加数量
     * @param unit 单位，默认 = 'days'
     * @returns YYYY-MM-DD HH:mm:ss
     */
    add(amount: DurationInputArg1, unit?: DurationInputArg2): string;
    /**
     * 连续时间区间
     * @param offset 区间天数
     * @param shift 漂移天数，向前推移的天数
     */
    offsetDays(offset: number, shift?: number): string[];
};
```

### is
```ts
function isArray(obj: any): boolean;
function isPlainObject(obj: any): boolean;
function isString(obj: any): boolean;
function isFunction(obj: any): boolean;
function isEmptyObject(obj: any): boolean;
```

### Lib
```ts
function http(baseURL: string): string;
function https(baseURL: string): string;
function random(min: number, max: number): number;
/**
 * 概率计算，基于Math.random的随机概率
 * @d 分子
 * @m 分母
 */
function ratio(d: number, m: number): boolean;
/**
 * @array
 * 支持数组，数组使用arr.slice(0)
 * @description
 * 深度clone，基于JSON.parse(JSON.stringify(obj))，不能拷贝循环引用的对象
 */
function clone<T>(obj: T): T;
/**
 * Array => Map
 * @param arr   数组
 * @param key   数组子对象的key
 * @param fn    处理key值的回调
 */
function toMap(arr: PlainObject[], key: string, fn?: ToMapCallback): PlainObject;
/**
 * Array => Map
 * @param arr
 * @param keys
 * @returns
 */
function makeMap(arr: PlainObject[], keys: string[]): PlainObject;
/**
 * Map => Array
 * @param map Map数据
 * @param fn  处理数据的回调
 * @example toArray({a:1}, (key, value) => key) ==> ['a']
 * @example toArray({a:1}, (key, value) => value) ==> [1]
 */
function toArray(map: PlainObject, fn: (key: string, value: any) => any): any[];
/**
 * 获取一个Map的key的数组
 * @param map Map对象
 * @param fn  对key的处理回调
 */
function getKeys(map: PlainObject, fn: (key: string) => string): string[];
/**
 * 获取一个Map的value的数组
 * @param map Map对象
 * @param fn  对value的处理回调
 */
function getValues(map: PlainObject, fn: (value: any) => any): any[];

```

### Url
```ts
function urlParse(url: string): {
    protocol: string;
    port: string;
    host: string;
    username: string;
    password: string;
    pathname: string;
    query: import("url").URLSearchParams;
};
```