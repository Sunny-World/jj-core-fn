!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=(e,...t)=>{let n=class extends e{constructor(...e){super(...e),t.forEach(t=>{"function"==typeof t.prototype.initializer&&t.prototype.initializer.apply(this,e)})}},r=(e,t)=>{Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t)).forEach(n=>{n.match(/^(?:initializer|constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/)||Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})};return t.forEach(e=>{r(n.prototype,e.prototype),r(n,e)}),n},o=e=>e<10?"0"+e:e,a=(e,t)=>{let n=[{}].concat(t||[]);return new(Function.prototype.bind.apply(e,n))};const l=class{constructor(){}showDate(){var e;if(2==arguments.length&&arguments[1]&&"Invalid Date"==new Date(arguments[1])){var t=arguments[1].match(/\d+/g);e=a(Date,t)}else e=2!=arguments.length?new Date:new Date(arguments[1]);var n=e.getFullYear(),r=o(e.getMonth()+1),l=o(e.getDate()),i=o(e.getHours()),c=o(e.getMinutes()),u=o(e.getSeconds());return arguments.length?arguments.length>0?(arguments[0].indexOf("Y")>-1&&(arguments[0]=arguments[0].replace(/Y/g,n)),arguments[0].indexOf("M")>-1&&(arguments[0]=arguments[0].replace(/M/g,r)),arguments[0].indexOf("D")>-1&&(arguments[0]=arguments[0].replace(/D/g,l)),arguments[0].indexOf("h")>-1&&(arguments[0]=arguments[0].replace(/h/g,i)),arguments[0].indexOf("m")>-1&&(arguments[0]=arguments[0].replace(/m/g,c)),arguments[0].indexOf("s")>-1&&(arguments[0]=arguments[0].replace(/s/g,u)),arguments[0]):void 0:n+"-"+r+"-"+l+" "+i+":"+c+":"+u}diffToNow(e){let t=(new Date).getTime();if("Invalid Date"==new Date(e)){var n=e.match(/\d+/g);e=a(Date,n)}else e=new Date(e).getTime();let r=Math.abs(e-t),o=parseInt(r/1e3/3600/24),l=parseInt(o/365);if(l>1)return`${l}年`;if(o>=1)return`${o}天`;let i=parseInt(r/1e3/3600);if(i>=1)return`${i}小时`;let c=parseInt(r/1e3/60),u=parseInt(r/1e3)%60;return c>=1?(Math.floor(c/60),`${c%=60}分`):`${u}秒`}getIntervalDate(e=0){e=Number(e);let t=new Date;return t.setDate(t.getDate()+e),t.getFullYear()+"-"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+(t.getDate()<10?"0"+t.getDate():t.getDate())}};const i=class{n(e,t){return/^[0-9]+.?[0-9]*$/.test(e)?e:t||0}showMoney(e){let t=(e=String(e)).length;return t>2?e.replace(/(\d{2})$/g,".$1"):2==t?"0."+e:1==t?"0.0"+e:void 0}showThousandMoney(e){return parseFloat(e).toFixed(2).replace(/(\d{1,3})(?=(\d{3})+(?:\.))/g,"$1,")}};const c=class{s(e,t){return null===e||void 0===e||""===e?t||"--":e}hasValue(e){return null!==e&&void 0!==e&&""!==e}};var u=class extends(r(l,i,c)){};console.log((new u).showMoney(10)),console.log((new u).showThousandMoney(121100));t.default=new u}]);