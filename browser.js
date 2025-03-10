// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function i(r,t,e){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((t=r.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,g,"$1."),n=s.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function O(r){var t,e,n,o,a,c,f,l,s,p,y,g,d;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))c+=n;else{if(t=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(o=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,g=n.padRight,d=void 0,(d=y-p.length)<0?p:p=g?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function U(r){var t,e,n,i;for(e=[],i=0,n=S.exec(r);n;)(t=r.slice(i,S.lastIndex-n[0].length)).length&&e.push(t),e.push(x(n)),i=S.lastIndex,n=S.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function T(r){var t,e;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[U(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return O.apply(null,t)}var F,I=Object.prototype,k=I.toString,N=I.__defineGetter__,V=I.__defineSetter__,P=I.__lookupGetter__,L=I.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===k.call(e))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(P.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=I,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(r,t,e.get),a&&V&&V.call(r,t,e.set),r};var G=F;function $(r,t,e){G(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var C=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString,M=Object.prototype.hasOwnProperty;function Z(r,t){return null!=r&&M.call(r,t)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",z=B()?function(r){var t,e,n;if(null==r)return R.call(r);e=r[Y],t=Z(r,Y);try{r[Y]=void 0}catch(t){return R.call(r)}return n=R.call(r),t?r[Y]=e:delete r[Y],n}:function(r){return R.call(r)},q=Boolean,D=Boolean.prototype.toString,J=B();function K(r){return"object"==typeof r&&(r instanceof q||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,er="object"==typeof globalThis?globalThis:null,nr=function(r){if(arguments.length){if(!H(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(er)return er;if(rr)return rr;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),ir=nr.document&&nr.document.childNodes,or=Int8Array;function ar(){return/^\s*function\s*([^(]*)/i}var ur=/^\s*function\s*([^(]*)/i;$(ar,"REGEXP",ur);var cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function fr(r){return null!==r&&"object"==typeof r}function lr(r){var t,e,n,i;if(("Object"===(e=z(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=ur.exec(n.toString()))return t[1]}return fr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}$(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!cr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(fr));var sr="function"==typeof C||"object"==typeof or||"function"==typeof ir?function(r){return lr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?lr(r).toLowerCase():t};function pr(r){return"function"===sr(r)}function yr(r){return"number"==typeof r}var gr=Number,dr=gr.prototype.toString,vr=B();function br(r){return"object"==typeof r&&(r instanceof gr||(vr?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function hr(r){return yr(r)||br(r)}$(hr,"isPrimitive",yr),$(hr,"isObject",br);var wr,mr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null,jr=Object,Ar=Object.getPrototypeOf;wr=pr(Object.getPrototypeOf)?Ar:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=wr,Er=Object.prototype;function Or(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!cr(r)}(r)&&(t=function(r){return null==r?null:(r=jr(r),_r(r))}(r),!t||!Z(r,"constructor")&&Z(t,"constructor")&&pr(t.constructor)&&"[object Function]"===z(t.constructor)&&Z(t,"isPrototypeOf")&&pr(t.isPrototypeOf)&&(t===Er||function(r){var t;for(t in r)if(!Z(r,t))return!1;return!0}(r)))}function Sr(r,t,e){var n,i,o,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!pr(u.next))throw new TypeError(T("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!pr(t))throw new TypeError(T("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(o=function(r,t){return Or(t)?(Z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(T("invalid argument. Options argument must be an object. Value: `%s`.",t))}(n,e),o))throw o;return $(i={},"next",(function(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:yr(e.value)?t(e.value):n.invalid,done:!1}})),$(i,"return",(function(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}})),mr&&pr(r[mr])&&$(i,mr,(function(){return Sr(r[mr](),t,n)})),i}function xr(r){return r!=r}var Ur,Tr="function"==typeof Uint32Array,Fr="function"==typeof Uint32Array?Uint32Array:null,Ir="function"==typeof Uint32Array?Uint32Array:void 0;Ur=function(){var r,t,e;if("function"!=typeof Fr)return!1;try{t=new Fr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Tr&&e instanceof Uint32Array||"[object Uint32Array]"===z(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ir:function(){throw new Error("not implemented")};var kr,Nr=Ur,Vr="function"==typeof Float64Array,Pr="function"==typeof Float64Array?Float64Array:null,Lr="function"==typeof Float64Array?Float64Array:void 0;kr=function(){var r,t,e;if("function"!=typeof Pr)return!1;try{t=new Pr([1,3.14,-3.14,NaN]),e=t,r=(Vr&&e instanceof Float64Array||"[object Float64Array]"===z(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var Gr,$r=kr,Cr="function"==typeof Uint8Array,Hr="function"==typeof Uint8Array?Uint8Array:null,Wr="function"==typeof Uint8Array?Uint8Array:void 0;Gr=function(){var r,t,e;if("function"!=typeof Hr)return!1;try{t=new Hr(t=[1,3.14,-3.14,256,257]),e=t,r=(Cr&&e instanceof Uint8Array||"[object Uint8Array]"===z(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};var Br,Rr=Gr,Mr="function"==typeof Uint16Array,Zr="function"==typeof Uint16Array?Uint16Array:null,Xr="function"==typeof Uint16Array?Uint16Array:void 0;Br=function(){var r,t,e;if("function"!=typeof Zr)return!1;try{t=new Zr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Mr&&e instanceof Uint16Array||"[object Uint16Array]"===z(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};var Yr,zr={uint16:Br,uint8:Rr};(Yr=new zr.uint16(1))[0]=4660;var qr=52===new zr.uint8(Yr.buffer)[0],Dr=!0===qr?1:0,Jr=new $r(1),Kr=new Nr(Jr.buffer);function Qr(r){return Jr[0]=r,Kr[Dr]}var rt,tt,et=!0===qr?1:0,nt=new $r(1),it=new Nr(nt.buffer);function ot(r,t){return nt[0]=r,it[et]=t>>>0,nt[0]}!0===qr?(rt=1,tt=0):(rt=0,tt=1);var at={HIGH:rt,LOW:tt},ut=new $r(1),ct=new Nr(ut.buffer),ft=at.HIGH,lt=at.LOW;function st(r,t){return ct[ft]=r,ct[lt]=t,ut[0]}var pt=Number.POSITIVE_INFINITY,yt=gr.NEGATIVE_INFINITY,gt=1023,dt=.34657359027997264,vt=709.782712893384,bt=.6931471803691238,ht=1.9082149292705877e-10,wt=1.4426950408889634,mt=38.816242111356935,jt=1.0397207708399179,At=Math.floor,_t=Math.ceil;function Et(r){return r<0?_t(r):At(r)}var Ot=1023,St=-1023,xt=-1074;function Ut(r){return r===pt||r===yt}var Tt,Ft,It=2147483648,kt=2147483647;!0===qr?(Tt=1,Ft=0):(Tt=0,Ft=1);var Nt={HIGH:Tt,LOW:Ft},Vt=new $r(1),Pt=new Nr(Vt.buffer),Lt=Nt.HIGH,Gt=Nt.LOW;function $t(r,t,e,n){return Vt[0]=r,t[n]=Pt[Lt],t[n+e]=Pt[Gt],t}function Ct(r){return $t(r,[0,0],1,0)}$(Ct,"assign",$t);var Ht=[0,0],Wt=22250738585072014e-324;function Bt(r){return Math.abs(r)}var Rt=4503599627370496;function Mt(r,t,e,n){return xr(r)||Ut(r)?(t[n]=r,t[n+e]=0,t):0!==r&&Bt(r)<Wt?(t[n]=r*Rt,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}$((function(r){return Mt(r,[0,0],1,0)}),"assign",Mt);var Zt=2146435072,Xt=2220446049250313e-31,Yt=2148532223,zt=[0,0],qt=[0,0];function Dt(r,t){var e,n,i,o,a,u;return 0===t||0===r||xr(r)||Ut(r)?r:(Mt(r,zt,1,0),r=zt[0],t+=zt[1],t+=function(r){var t=Qr(r);return(t=(t&Zt)>>>20)-gt|0}(r),t<xt?(i=0,o=r,Ct.assign(i,Ht,1,0),a=Ht[0],a&=kt,u=Qr(o),st(a|=u&=It,Ht[1])):t>Ot?r<0?yt:pt:(t<=St?(t+=52,n=Xt):n=1,Ct.assign(r,qt,1,0),e=qt[0],e&=Yt,n*st(e|=t+gt<<20,qt[1])))}var Jt=.6931471803691238,Kt=1.9082149292705877e-10,Qt=1.4426950408889634,re=709.782712893384,te=-745.1332191019411,ee=1/(1<<28),ne=-ee;function ie(r){var t;return xr(r)||r===pt?r:r===yt?0:r>re?pt:r<te?0:r>ne&&r<ee?1+r:function(r,t,e){var n,i,o,a;return Dt(1-(t-(n=r-t)*(o=n-(i=n*n)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),e)}(r-(t=Et(r<0?Qt*r-.5:Qt*r+.5))*Jt,t*Kt,t)}var oe=.6931471803691238,ae=1.9082149292705877e-10,ue=.41421356237309503,ce=-.2928932188134525,fe=1.862645149230957e-9,le=5551115123125783e-32,se=9007199254740992,pe=.6666666666666666,ye=.6931471803691238,ge=1.9082149292705877e-10,de=0x40000000000000,ve=.3333333333333333,be=1048575,he=2146435072,we=1048576,me=1072693248,je=.6931471805599453;function Ae(r){var t;return xr(r)?NaN:0===r?yt:0<(t=Bt(r))&&t<=je?function(r){var t,e,n,i,o,a,u,c,f,l,s,p;return 0===r?yt:xr(r)||r<0?NaN:(o=0,(e=Qr(r))<we&&(o-=54,e=Qr(r*=de)),e>=he?r+r:(o+=(e>>20)-gt|0,o+=(c=614244+(e&=be)&1048576|0)>>20|0,u=(r=ot(r,e|c^me))-1,(be&2+e)<3?0===u?0===o?0:o*ye+o*ge:(a=u*u*(.5-ve*u),0===o?u-a:o*ye-(a-o*ge-u)):(c=e-398458|0,f=440401-e|0,i=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=n+i,(c|=f)>0?(t=.5*u*u,0===o?u-(t-l*(t+a)):o*ye-(t-(l*(t+a)+o*ge)-u)):0===o?u-l*(u-a):o*ye-(l*(u-a)-o*ge-u))))}(-function(r){var t,e,n,i,o,a,u,c,f,l,s,p,y;if(r===pt||xr(r))return r;if(r===yt)return-1;if(0===r)return r;if(r<0?(n=!0,c=-r):(n=!1,c=r),c>=mt){if(n)return-1;if(c>=vt)return pt}if(a=0|Qr(c),c>dt)c<jt?n?(i=r+bt,o=-ht,y=-1):(i=r-bt,o=ht,y=1):(y=n?wt*r-.5:wt*r+.5,i=r-(s=y|=0)*bt,o=s*ht),l=i-(r=i-o)-o;else{if(a<1016070144)return r;y=0}return u=1+(f=r*(t=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),p=f*((u-(s=3-u*t))/(6-r*s)),0===y?r-(r*p-f):(e=st(gt+y<<20,0),p=r*(p-l)-l,p-=f,-1===y?.5*(r-p)-.5:1===y?r<-.25?-2*(p-(r+.5)):1+2*(r-p):y<=-2||y>56?(c=1-(p-r),1024===y?c=ot(c,i=Qr(c)+(y<<20)|0):c*=e,c-1):(s=1,y<20?c=(s=ot(s,i=1072693248-(2097152>>y)|0))-(p-r):(c=r-(p+(s=ot(s,i=gt-y<<20|0))),c+=1),c*=e))}(-t)):function(r){var t,e,n,i,o,a,u,c,f,l;if(r<-1||xr(r))return NaN;if(-1===r)return yt;if(r===pt)return r;if(0===r)return r;if(l=1,(n=r<0?-r:r)<ue){if(n<fe)return n<le?r:r-r*r*.5;r>ce&&(l=0,i=r,e=1)}return 0!==l&&(n<se?(o=(l=((e=Qr(f=1+r))>>20)-gt)>0?1-(f-r):r-(f-1),o/=f):(l=((e=Qr(f=r))>>20)-gt,o=0),(e&=1048575)<434334?f=ot(f,1072693248|e):(l+=1,f=ot(f,1071644672|e),e=1048576-e>>2),i=f-1),t=.5*i*i,0===e?0===i?l*oe+(o+=l*ae):l*oe-((c=t*(1-pe*i))-(l*ae+o)-i):(c=(u=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?i-(t-a*(t+c)):l*oe-(t-(a*(t+c)+(l*ae+o))-i))}(-ie(-t))}return function(r){return Sr(r,Ae)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterLog1mexp=t();
//# sourceMappingURL=browser.js.map
