import NumberFn from './fn/Number';
import StringFn from './fn/String'
import DateFn from './fn/Date'

// 为了common导出随处可用的js
export const $fn = {
    ...NumberFn,
    ...StringFn,
    ...DateFn
}

// 供import导入使用
export default $fn
