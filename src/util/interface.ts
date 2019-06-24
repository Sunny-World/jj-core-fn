export interface StringFace {
    s(a, b?) : string,
    hasValue(val) : boolean,
    urlAddParams(url, params) : string,
    utf8to16(str) : string,
    utf16to8(str) : string,
    encodeBase64(str) : string,
    decodeBase64(str) : string,
}

export interface NumberFace {
    n(a, b?) :  number,
    showMoney(a) : string,
    showThousandMoney(rmb) : string,
}

export interface DateFace {
    showDate(format?: string, time?:any):string,
    diffToNow(time):string,
    getIntervalDate(interval):string
}