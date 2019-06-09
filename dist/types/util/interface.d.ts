export interface StringFace {
    s(a: any, b?: any): string;
    hasValue(val: any): boolean;
    urlAddParams(url: any, params: any): string;
    utf8to16(str: any): string;
    utf16to8(str: any): string;
    encodeBase64(str: any): string;
    decodeBase64(str: any): string;
}
export interface NumberFace {
    n(a: any, b?: any): number;
    showMoney(a: any): string;
    showThousandMoney(rmb: any): string;
}
export interface DateFace {
    showDate(): string;
    diffToNow(time: any): string;
    getIntervalDate(interval: any): string;
}
//# sourceMappingURL=interface.d.ts.map