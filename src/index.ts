import NumberFn from './fn/Number.js';
import StringFn from './fn/String.js';
import DateFn from './fn/Date.js';

// 为了common导出随处可用的js
export const $fn = {
    ...NumberFn,
    ...StringFn,
    ...DateFn
}

// 供import导入使用
export default $fn
