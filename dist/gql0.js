"use strict";function _extends(){return(_extends=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var index=function(e){var n=e.url,r=e.headers;return function(e){return{call:function(t){var a=e[0].replace(/\s{2,}/g," ").replace(/\t/g,"").replace(/\n/g," ").trim();return new Promise(function(e,o){fetch(n,{method:"POST",headers:_extends({"Content-Type":"application/json"},r),body:JSON.stringify({query:a,variables:t})}).then(function(e){return e.json()}).then(function(n){var r=n.data,t=n.errors;return t?o(t):e(r)}).catch(function(e){return o(e)})})}}}};module.exports=index;
//# sourceMappingURL=gql0.js.map