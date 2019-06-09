import {
    DateFace
} from '@/util/interface'
const add0 = (m) => m < 10 ? '0' + m : m + ''
const applyNew = (ctor, args) => {
    let applyArgs = ([{}]).concat(args || []);
    let f = Function.prototype.bind.apply(ctor, applyArgs);
    return new f();
}
export const DateFn:DateFace = {
    /**
     * 获取当前时间
     * @return string
     * @param ("Y-M-D h:m:s") 或 ("Y-M-D h:m:s",时间戳)
     * YMDhms直接替换对应时间单位，格式可自由替换
     * 没有参数直接返回Y-M-D h:m:s(如2018-01-01 12:21:45)
     * 有参数则直接替换
     */
    showDate(): string {
        let now;
        if (arguments.length == 2 && arguments[1] && String(new Date(arguments[1])) === 'Invalid Date') {
            let arr = arguments[1].match(/\d+/g);
            now = applyNew(Date, arr);
        } else if (arguments.length != 2) {
            now = new Date();
        } else {
            now = new Date(arguments[1]);
        }
        // let now = arguments.length == 2 ? new Date(arguments[1]) : new Date();
        let year = now.getFullYear();
        let month = add0(now.getMonth() + 1);
        let date = add0(now.getDate());
        let hour = add0(now.getHours());
        let minute = add0(now.getMinutes());
        let seconds = add0(now.getSeconds());
        if (!arguments.length) {
            return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + seconds;
        } else if (arguments.length > 0) {
            if (arguments[0].indexOf("Y") > -1) {
                arguments[0] = arguments[0].replace(/Y/g, year);
            }
            if (arguments[0].indexOf("M") > -1) {
                arguments[0] = arguments[0].replace(/M/g, month);
            }
            if (arguments[0].indexOf("D") > -1) {
                arguments[0] = arguments[0].replace(/D/g, date);
            }
            if (arguments[0].indexOf("h") > -1) {
                arguments[0] = arguments[0].replace(/h/g, hour);
            }
            if (arguments[0].indexOf("m") > -1) {
                arguments[0] = arguments[0].replace(/m/g, minute);
            }
            if (arguments[0].indexOf("s") > -1) {
                arguments[0] = arguments[0].replace(/s/g, seconds);
            }
            return arguments[0];
        }
    },
    /**
     * 获取距离当前的时差，天/时/分/秒
     * @param {*} time 
     */
    diffToNow(time): string {
        let now = new Date().getTime();
        if (String(new Date(time)) == 'Invalid Date') {
            let arr = time.match(/\d+/g);
            time = applyNew(Date, arr);
        }
        time = new Date(time).getTime()
        let diffTime = Math.abs(time - now);
        let diffDays = parseInt(String(diffTime / 1000 / 3600 / 24))
        // 大于1天
        let diffYears = parseInt(String(diffDays / 365))
        if (diffYears > 1) {
            return `${String(diffYears)}年`
        }
        if (diffDays >= 1) {
            return `${String(diffDays)}天`
        }
        let diffHours = parseInt(String(diffTime / 1000 / 3600))
        // 大于1小时
        if (diffHours >= 1) {
            return `${String(diffHours)}小时`
        }
        let mins = parseInt(String(diffTime / 1000 / 60));
        let sec = parseInt(String(diffTime / 1000)) % 60;
        if (mins >= 1) {
            mins = mins % 60;
            return `${String(mins)}分`;
        } else {
            return `${String(sec)}秒`;
        }
    },
    /**  
     * 获取距离今天的N天的日期  N可正可负 
     * @param {Number} interval default 0  -n 表示前几天  n表示后几天 
     */
    getIntervalDate(interval = 0): string {
        interval = Number(interval)
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + interval);
        let year = currentDate.getFullYear();
        let month = (currentDate.getMonth() + 1) < 10 ? "0" + (currentDate.getMonth() + 1) : (currentDate.getMonth() + 1);
        let day = currentDate.getDate() < 10 ? "0" + currentDate.getDate() : currentDate.getDate();
        return year + "-" + month + "-" + day;
    }
}
export default DateFn;
