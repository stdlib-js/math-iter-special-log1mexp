// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function i(r,t,e){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,v,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function A(r,t,e){var n=t-r.length;return n<0?r:r=e?r+j(n):j(n)+r}var _=String.fromCharCode,E=isNaN,O=Array.isArray;function x(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,e,n,o,a,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(t=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(o=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function F(r){var t,e,n,i;for(e=[],i=0,n=U.exec(r);n;)(t=r.slice(i,U.lastIndex-n[0].length)).length&&e.push(t),e.push(T(n)),i=U.lastIndex,n=U.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function I(r){return"string"==typeof r}function N(r){var t,e,n;if(!I(r))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=F(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return S.apply(null,e)}var k,V=Object.prototype,P=V.toString,L=V.__defineGetter__,G=V.__defineSetter__,$=V.__lookupGetter__,C=V.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&($.call(r,t)||C.call(r,t)?(n=r.__proto__,r.__proto__=V,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&L&&L.call(r,t,e.get),a&&G&&G.call(r,t,e.set),r};var H=k;function W(r,t,e){H(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var B=/./;function R(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function z(r,t){return null!=r&&Y.call(r,t)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",J=Z()?function(r){var t,e,n;if(null==r)return X.call(r);e=r[D],t=z(r,D);try{r[D]=void 0}catch(t){return X.call(r)}return n=X.call(r),t?r[D]=e:delete r[D],n}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=Z();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function er(r){return R(r)||tr(r)}function nr(){return new Function("return this;")()}W(er,"isPrimitive",R),W(er,"isObject",tr);var ir="object"==typeof self?self:null,or="object"==typeof window?window:null,ar="object"==typeof globalThis?globalThis:null,ur=function(r){if(arguments.length){if(!R(r))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ar)return ar;if(ir)return ir;if(or)return or;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ur.document&&ur.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;W(lr,"REGEXP",sr);var pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function yr(r){return null!==r&&"object"==typeof r}function dr(r){var t,e,n,i;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=sr.exec(n.toString()))return t[1]}return yr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}W(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!pr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(yr));var gr="function"==typeof B||"object"==typeof fr||"function"==typeof cr?function(r){return dr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?dr(r).toLowerCase():t};function vr(r){return"function"===gr(r)}function br(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&vr(r.next)}function hr(r){return"number"==typeof r}var wr=Number,mr=wr.prototype.toString,jr=Z();function Ar(r){return"object"==typeof r&&(r instanceof wr||(jr?function(r){try{return mr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function _r(r){return hr(r)||Ar(r)}W(_r,"isPrimitive",hr),W(_r,"isObject",Ar);var Er,Or="function"==typeof q&&"symbol"==typeof q("foo")&&z(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null,xr=Object,Sr=Object.getPrototypeOf;Er=vr(Object.getPrototypeOf)?Sr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ur=Er,Tr=Object.prototype;function Fr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!pr(r)}(r)&&(t=function(r){return null==r?null:(r=xr(r),Ur(r))}(r),!t||!z(r,"constructor")&&z(t,"constructor")&&vr(t.constructor)&&"[object Function]"===J(t.constructor)&&z(t,"isPrototypeOf")&&vr(t.isPrototypeOf)&&(t===Tr||function(r){var t;for(t in r)if(!z(r,t))return!1;return!0}(r)))}function Ir(r,t){return Fr(t)?(z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(N("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Nr(r,t,e){var n,i,o,a;if(!br(r))throw new TypeError(N("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!vr(t))throw new TypeError(N("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(o=Ir(n,e)))throw o;return W(i={},"next",u),W(i,"return",c),Or&&vr(r[Or])&&W(i,Or,f),i;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:hr(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Nr(r[Or](),t,n)}}function kr(r){return r!=r}var Vr,Pr="function"==typeof Uint32Array,Lr="function"==typeof Uint32Array?Uint32Array:null,Gr="function"==typeof Uint32Array?Uint32Array:void 0;Vr=function(){var r,t,e;if("function"!=typeof Lr)return!1;try{t=new Lr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Pr&&e instanceof Uint32Array||"[object Uint32Array]"===J(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var $r,Cr=Vr,Hr="function"==typeof Float64Array,Wr="function"==typeof Float64Array?Float64Array:null,Br="function"==typeof Float64Array?Float64Array:void 0;$r=function(){var r,t,e;if("function"!=typeof Wr)return!1;try{t=new Wr([1,3.14,-3.14,NaN]),e=t,r=(Hr&&e instanceof Float64Array||"[object Float64Array]"===J(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Br:function(){throw new Error("not implemented")};var Rr,Mr=$r,Zr="function"==typeof Uint8Array,Xr="function"==typeof Uint8Array?Uint8Array:null,Yr="function"==typeof Uint8Array?Uint8Array:void 0;Rr=function(){var r,t,e;if("function"!=typeof Xr)return!1;try{t=new Xr(t=[1,3.14,-3.14,256,257]),e=t,r=(Zr&&e instanceof Uint8Array||"[object Uint8Array]"===J(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var zr,qr=Rr,Dr="function"==typeof Uint16Array,Jr="function"==typeof Uint16Array?Uint16Array:null,Kr="function"==typeof Uint16Array?Uint16Array:void 0;zr=function(){var r,t,e;if("function"!=typeof Jr)return!1;try{t=new Jr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Dr&&e instanceof Uint16Array||"[object Uint16Array]"===J(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Kr:function(){throw new Error("not implemented")};var Qr,rt={uint16:zr,uint8:qr};(Qr=new rt.uint16(1))[0]=4660;var tt=52===new rt.uint8(Qr.buffer)[0],et=!0===tt?1:0,nt=new Mr(1),it=new Cr(nt.buffer);function ot(r){return nt[0]=r,it[et]}var at,ut,ct=!0===tt?1:0,ft=new Mr(1),lt=new Cr(ft.buffer);function st(r,t){return ft[0]=r,lt[ct]=t>>>0,ft[0]}!0===tt?(at=1,ut=0):(at=0,ut=1);var pt={HIGH:at,LOW:ut},yt=new Mr(1),dt=new Cr(yt.buffer),gt=pt.HIGH,vt=pt.LOW;function bt(r,t){return dt[gt]=r,dt[vt]=t,yt[0]}var ht,wt,mt=Number.POSITIVE_INFINITY,jt=wr.NEGATIVE_INFINITY,At=1023,_t=.6931471803691238,Et=1.9082149292705877e-10,Ot=1.4426950408889634,xt=Math.floor,St=Math.ceil;function Ut(r){return r<0?St(r):xt(r)}function Tt(r){return r===mt||r===jt}!0===tt?(ht=1,wt=0):(ht=0,wt=1);var Ft={HIGH:ht,LOW:wt},It=new Mr(1),Nt=new Cr(It.buffer),kt=Ft.HIGH,Vt=Ft.LOW;function Pt(r,t,e,n){return It[0]=r,t[n]=Nt[kt],t[n+e]=Nt[Vt],t}function Lt(r){return Pt(r,[0,0],1,0)}W(Lt,"assign",Pt);var Gt=[0,0];function $t(r){return Math.abs(r)}function Ct(r,t,e,n){return kr(r)||Tt(r)?(t[n]=r,t[n+e]=0,t):0!==r&&$t(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}W((function(r){return Ct(r,[0,0],1,0)}),"assign",Ct);var Ht=[0,0],Wt=[0,0];function Bt(r,t){var e,n,i,o,a,u;return 0===t||0===r||kr(r)||Tt(r)?r:(Ct(r,Ht,1,0),t+=Ht[1],t+=function(r){var t=ot(r);return(t=(2146435072&t)>>>20)-At|0}(r=Ht[0]),t<-1074?(i=0,o=r,Lt.assign(i,Gt,1,0),a=Gt[0],a&=2147483647,u=ot(o),bt(a|=u&=2147483648,Gt[1])):t>1023?r<0?jt:mt:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,Lt.assign(r,Wt,1,0),e=Wt[0],e&=2148532223,n*bt(e|=t+At<<20,Wt[1])))}var Rt=1.4426950408889634,Mt=1/(1<<28);function Zt(r){var t;return kr(r)||r===mt?r:r===jt?0:r>709.782712893384?mt:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Mt?1+r:function(r,t,e){var n,i,o,a;return Bt(1-(t-(n=r-t)*(o=n-(i=n*n)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),e)}(r-.6931471803691238*(t=Ut(r<0?Rt*r-.5:Rt*r+.5)),1.9082149292705877e-10*t,t)}var Xt=.6931471803691238,Yt=1.9082149292705877e-10,zt=.6931471803691238,qt=1.9082149292705877e-10,Dt=1048575;function Jt(r){var t;return kr(r)?NaN:0===r?jt:0<(t=$t(r))&&t<=.6931471805599453?function(r){var t,e,n,i,o,a,u,c,f,l,s,p;return 0===r?jt:kr(r)||r<0?NaN:(o=0,(e=ot(r))<1048576&&(o-=54,e=ot(r*=0x40000000000000)),e>=2146435072?r+r:(o+=(e>>20)-At|0,o+=(c=614244+(e&=Dt)&1048576|0)>>20|0,u=(r=st(r,e|1072693248^c))-1,(Dt&2+e)<3?0===u?0===o?0:o*zt+o*qt:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*zt-(a-o*qt-u)):(c=e-398458|0,f=440401-e|0,i=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=n+i,(c|=f)>0?(t=.5*u*u,0===o?u-(t-l*(t+a)):o*zt-(t-(l*(t+a)+o*qt)-u)):0===o?u-l*(u-a):o*zt-(l*(u-a)-o*qt-u))))}(-function(r){var t,e,n,i,o,a,u,c,f,l,s,p,y;if(r===mt||kr(r))return r;if(r===jt)return-1;if(0===r)return r;if(r<0?(n=!0,c=-r):(n=!1,c=r),c>=38.816242111356935){if(n)return-1;if(c>=709.782712893384)return mt}if(a=0|ot(c),c>.34657359027997264)c<1.0397207708399179?n?(i=r+_t,o=-Et,y=-1):(i=r-_t,o=Et,y=1):(y=n?Ot*r-.5:Ot*r+.5,i=r-(s=y|=0)*_t,o=s*Et),l=i-(r=i-o)-o;else{if(a<1016070144)return r;y=0}return u=1+(f=r*(t=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),p=f*((u-(s=3-u*t))/(6-r*s)),0===y?r-(r*p-f):(e=bt(At+y<<20,0),p=r*(p-l)-l,p-=f,-1===y?.5*(r-p)-.5:1===y?r<-.25?-2*(p-(r+.5)):1+2*(r-p):y<=-2||y>56?(c=1-(p-r),1024===y?c=st(c,i=ot(c)+(y<<20)|0):c*=e,c-1):(s=1,y<20?c=(s=st(s,i=1072693248-(2097152>>y)|0))-(p-r):(c=r-(p+(s=st(s,i=At-y<<20|0))),c+=1),c*=e))}(-t)):function(r){var t,e,n,i,o,a,u,c,f,l;if(r<-1||kr(r))return NaN;if(-1===r)return jt;if(r===mt)return r;if(0===r)return r;if(l=1,(n=r<0?-r:r)<.41421356237309503){if(n<1.862645149230957e-9)return n<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,i=r,e=1)}return 0!==l&&(n<9007199254740992?(o=(l=((e=ot(f=1+r))>>20)-At)>0?1-(f-r):r-(f-1),o/=f):(l=((e=ot(f=r))>>20)-At,o=0),(e&=1048575)<434334?f=st(f,1072693248|e):(l+=1,f=st(f,1071644672|e),e=1048576-e>>2),i=f-1),t=.5*i*i,0===e?0===i?l*Xt+(o+=l*Yt):l*Xt-((c=t*(1-.6666666666666666*i))-(l*Yt+o)-i):(c=(u=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?i-(t-a*(t+c)):l*Xt-(t-(a*(t+c)+(l*Yt+o))-i))}(-Zt(-t))}return function(r){return Nr(r,Jt)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterLog1mexp=t();
//# sourceMappingURL=browser.js.map