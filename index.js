import {
    aggregation
} from './fn/tool.js'
import {
    TimeClass
} from './fn/Time.js'
import {
    NumberClass
} from './fn/Number.js'
import {
    StringClass
} from './fn/String.js'

class Fn extends aggregation(
    TimeClass,
    NumberClass,
    StringClass
) {
    
}
// console.log(new Fn().showThousandMoney(121100))
export default new Fn()