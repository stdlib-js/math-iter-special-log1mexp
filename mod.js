// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function i(r,t,e){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function h(r){var t,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((t=r.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,b,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,g,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function O(r){var t,e,n,o,a,c,f,l,s,p,y,v,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(t=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(o=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,g=void 0,(g=y-p.length)<0?p:p=v?p+m(g):m(g)+p)),c+=n.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function U(r){var t,e,n,i;for(e=[],i=0,n=S.exec(r);n;)(t=r.slice(i,S.lastIndex-n[0].length)).length&&e.push(t),e.push(x(n)),i=S.lastIndex,n=S.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function F(r){var t,e;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[U(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return O.apply(null,t)}var I,T=Object.prototype,k=T.toString,N=T.__defineGetter__,V=T.__defineSetter__,P=T.__lookupGetter__,G=T.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===k.call(e))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(P.call(r,t)||G.call(r,t)?(n=r.__proto__,r.__proto__=T,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(r,t,e.get),a&&V&&V.call(r,t,e.set),r};var L=I;function $(r,t,e){L(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var C=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;function Z(r,t){return null!=r&&M.call(r,t)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var z=B()?function(r){var t,e,n;if(null==r)return R.call(r);e=r[Y],t=Z(r,Y);try{r[Y]=void 0}catch(t){return R.call(r)}return n=R.call(r),t?r[Y]=e:delete r[Y],n}:function(r){return R.call(r)},q=Boolean,D=Boolean.prototype.toString;var J=B();function K(r){return"object"==typeof r&&(r instanceof q||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,er="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},nr="object"==typeof er?er:null,ir="object"==typeof globalThis?globalThis:null;var or=function(r){if(arguments.length){if(!H(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ir)return ir;if(rr)return rr;if(tr)return tr;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=or.document&&or.document.childNodes,ur=Int8Array;function cr(){return/^\s*function\s*([^(]*)/i}var fr=/^\s*function\s*([^(]*)/i;$(cr,"REGEXP",fr);var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function sr(r){return null!==r&&"object"==typeof r}function pr(r){var t,e,n,i;if(("Object"===(e=z(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=fr.exec(n.toString()))return t[1]}return sr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}$(sr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!lr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(sr));var yr="function"==typeof C||"object"==typeof ur||"function"==typeof ar?function(r){return pr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?pr(r).toLowerCase():t};function vr(r){return"function"===yr(r)}function gr(r){return"number"==typeof r}var dr=Number,br=dr.prototype.toString;var wr=B();function hr(r){return"object"==typeof r&&(r instanceof dr||(wr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function mr(r){return gr(r)||hr(r)}$(mr,"isPrimitive",gr),$(mr,"isObject",hr);var jr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var Ar,_r=Object,Er=Object.getPrototypeOf;Ar=vr(Object.getPrototypeOf)?Er:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Or=Ar;var Sr=Object.prototype;function xr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!lr(r)}(r)&&(t=function(r){return null==r?null:(r=_r(r),Or(r))}(r),!t||!Z(r,"constructor")&&Z(t,"constructor")&&vr(t.constructor)&&"[object Function]"===z(t.constructor)&&Z(t,"isPrototypeOf")&&vr(t.isPrototypeOf)&&(t===Sr||function(r){var t;for(t in r)if(!Z(r,t))return!1;return!0}(r)))}function Ur(r,t,e){var n,i,o,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!vr(u.next))throw new TypeError(F("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!vr(t))throw new TypeError(F("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(o=function(r,t){return xr(t)?(Z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",t))}(n,e),o))throw o;return $(i={},"next",(function(){var e;if(a)return{done:!0};if((e=r.next()).done)return a=!0,e;return{value:gr(e.value)?t(e.value):n.invalid,done:!1}})),$(i,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),jr&&vr(r[jr])&&$(i,jr,(function(){return Ur(r[jr](),t,n)})),i}function Fr(r){return r!=r}var Ir="function"==typeof Uint32Array;var Tr="function"==typeof Uint32Array?Uint32Array:null;var kr,Nr="function"==typeof Uint32Array?Uint32Array:void 0;kr=function(){var r,t,e;if("function"!=typeof Tr)return!1;try{t=new Tr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Ir&&e instanceof Uint32Array||"[object Uint32Array]"===z(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Vr=kr,Pr="function"==typeof Float64Array;var Gr="function"==typeof Float64Array?Float64Array:null;var Lr,$r="function"==typeof Float64Array?Float64Array:void 0;Lr=function(){var r,t,e;if("function"!=typeof Gr)return!1;try{t=new Gr([1,3.14,-3.14,NaN]),e=t,r=(Pr&&e instanceof Float64Array||"[object Float64Array]"===z(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Cr=Lr,Hr="function"==typeof Uint8Array;var Wr="function"==typeof Uint8Array?Uint8Array:null;var Br,Rr="function"==typeof Uint8Array?Uint8Array:void 0;Br=function(){var r,t,e;if("function"!=typeof Wr)return!1;try{t=new Wr(t=[1,3.14,-3.14,256,257]),e=t,r=(Hr&&e instanceof Uint8Array||"[object Uint8Array]"===z(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Rr:function(){throw new Error("not implemented")};var Mr=Br,Zr="function"==typeof Uint16Array;var Xr="function"==typeof Uint16Array?Uint16Array:null;var Yr,zr="function"==typeof Uint16Array?Uint16Array:void 0;Yr=function(){var r,t,e;if("function"!=typeof Xr)return!1;try{t=new Xr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Zr&&e instanceof Uint16Array||"[object Uint16Array]"===z(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?zr:function(){throw new Error("not implemented")};var qr,Dr={uint16:Yr,uint8:Mr};(qr=new Dr.uint16(1))[0]=4660;var Jr=52===new Dr.uint8(qr.buffer)[0],Kr=!0===Jr?1:0,Qr=new Cr(1),rt=new Vr(Qr.buffer);function tt(r){return Qr[0]=r,rt[Kr]}var et,nt,it=!0===Jr?1:0,ot=new Cr(1),at=new Vr(ot.buffer);function ut(r,t){return ot[0]=r,at[it]=t>>>0,ot[0]}!0===Jr?(et=1,nt=0):(et=0,nt=1);var ct={HIGH:et,LOW:nt},ft=new Cr(1),lt=new Vr(ft.buffer),st=ct.HIGH,pt=ct.LOW;function yt(r,t){return lt[st]=r,lt[pt]=t,ft[0]}var vt=Number.POSITIVE_INFINITY,gt=dr.NEGATIVE_INFINITY,dt=1023,bt=.34657359027997264;var wt=709.782712893384,ht=.6931471803691238,mt=1.9082149292705877e-10,jt=1.4426950408889634,At=38.816242111356935,_t=1.0397207708399179;var Et=Math.floor,Ot=Math.ceil;function St(r){return r<0?Ot(r):Et(r)}var xt=1023,Ut=-1023,Ft=-1074;function It(r){return r===vt||r===gt}var Tt,kt,Nt=2147483648,Vt=2147483647;!0===Jr?(Tt=1,kt=0):(Tt=0,kt=1);var Pt={HIGH:Tt,LOW:kt},Gt=new Cr(1),Lt=new Vr(Gt.buffer),$t=Pt.HIGH,Ct=Pt.LOW;function Ht(r,t,e,n){return Gt[0]=r,t[n]=Lt[$t],t[n+e]=Lt[Ct],t}function Wt(r){return Ht(r,[0,0],1,0)}$(Wt,"assign",Ht);var Bt=[0,0];var Rt=22250738585072014e-324;function Mt(r){return Math.abs(r)}var Zt=4503599627370496;function Xt(r,t,e,n){return Fr(r)||It(r)?(t[n]=r,t[n+e]=0,t):0!==r&&Mt(r)<Rt?(t[n]=r*Zt,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}$((function(r){return Xt(r,[0,0],1,0)}),"assign",Xt);var Yt=2146435072;var zt=2220446049250313e-31,qt=2148532223,Dt=[0,0],Jt=[0,0];function Kt(r,t){var e,n,i,o,a,u;return 0===t||0===r||Fr(r)||It(r)?r:(Xt(r,Dt,1,0),r=Dt[0],t+=Dt[1],t+=function(r){var t=tt(r);return(t=(t&Yt)>>>20)-dt|0}(r),t<Ft?(i=0,o=r,Wt.assign(i,Bt,1,0),a=Bt[0],a&=Vt,u=tt(o),yt(a|=u&=Nt,Bt[1])):t>xt?r<0?gt:vt:(t<=Ut?(t+=52,n=zt):n=1,Wt.assign(r,Jt,1,0),e=Jt[0],e&=qt,n*yt(e|=t+dt<<20,Jt[1])))}var Qt=.6931471803691238,re=1.9082149292705877e-10,te=1.4426950408889634,ee=709.782712893384,ne=-745.1332191019411,ie=1/(1<<28),oe=-ie;function ae(r){var t;return Fr(r)||r===vt?r:r===gt?0:r>ee?vt:r<ne?0:r>oe&&r<ie?1+r:function(r,t,e){var n,i,o,a;return Kt(1-(t-(n=r-t)*(o=n-(i=n*n)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),e)}(r-(t=St(r<0?te*r-.5:te*r+.5))*Qt,t*re,t)}var ue=.6931471803691238,ce=1.9082149292705877e-10,fe=.41421356237309503,le=-.2928932188134525,se=1.862645149230957e-9,pe=5551115123125783e-32,ye=9007199254740992,ve=.6666666666666666;var ge=.6931471803691238,de=1.9082149292705877e-10,be=0x40000000000000,we=.3333333333333333,he=1048575,me=2146435072,je=1048576,Ae=1072693248;var _e=.6931471805599453;function Ee(r){var t;return Fr(r)?NaN:0===r?gt:0<(t=Mt(r))&&t<=_e?function(r){var t,e,n,i,o,a,u,c,f,l,s,p;return 0===r?gt:Fr(r)||r<0?NaN:(o=0,(e=tt(r))<je&&(o-=54,e=tt(r*=be)),e>=me?r+r:(o+=(e>>20)-dt|0,o+=(c=614244+(e&=he)&1048576|0)>>20|0,u=(r=ut(r,e|c^Ae))-1,(he&2+e)<3?0===u?0===o?0:o*ge+o*de:(a=u*u*(.5-we*u),0===o?u-a:o*ge-(a-o*de-u)):(c=e-398458|0,f=440401-e|0,i=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=n+i,(c|=f)>0?(t=.5*u*u,0===o?u-(t-l*(t+a)):o*ge-(t-(l*(t+a)+o*de)-u)):0===o?u-l*(u-a):o*ge-(l*(u-a)-o*de-u))))}(-function(r){var t,e,n,i,o,a,u,c,f,l,s,p,y;if(r===vt||Fr(r))return r;if(r===gt)return-1;if(0===r)return r;if(r<0?(n=!0,c=-r):(n=!1,c=r),c>=At){if(n)return-1;if(c>=wt)return vt}if(a=0|tt(c),c>bt)c<_t?n?(i=r+ht,o=-mt,y=-1):(i=r-ht,o=mt,y=1):(y=n?jt*r-.5:jt*r+.5,i=r-(s=y|=0)*ht,o=s*mt),l=i-(r=i-o)-o;else{if(a<1016070144)return r;y=0}return u=1+(f=r*(t=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),p=f*((u-(s=3-u*t))/(6-r*s)),0===y?r-(r*p-f):(e=yt(dt+y<<20,0),p=r*(p-l)-l,p-=f,-1===y?.5*(r-p)-.5:1===y?r<-.25?-2*(p-(r+.5)):1+2*(r-p):y<=-2||y>56?(c=1-(p-r),1024===y?c=ut(c,i=tt(c)+(y<<20)|0):c*=e,c-1):(s=1,y<20?c=(s=ut(s,i=1072693248-(2097152>>y)|0))-(p-r):(c=r-(p+(s=ut(s,i=dt-y<<20|0))),c+=1),c*=e))}(-t)):function(r){var t,e,n,i,o,a,u,c,f,l;if(r<-1||Fr(r))return NaN;if(-1===r)return gt;if(r===vt)return r;if(0===r)return r;if(l=1,(n=r<0?-r:r)<fe){if(n<se)return n<pe?r:r-r*r*.5;r>le&&(l=0,i=r,e=1)}return 0!==l&&(n<ye?(o=(l=((e=tt(f=1+r))>>20)-dt)>0?1-(f-r):r-(f-1),o/=f):(l=((e=tt(f=r))>>20)-dt,o=0),(e&=1048575)<434334?f=ut(f,1072693248|e):(l+=1,f=ut(f,1071644672|e),e=1048576-e>>2),i=f-1),t=.5*i*i,0===e?0===i?l*ue+(o+=l*ce):l*ue-((c=t*(1-ve*i))-(l*ce+o)-i):(c=(u=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?i-(t-a*(t+c)):l*ue-(t-(a*(t+c)+(l*ce+o))-i))}(-ae(-t))}function Oe(r){return Ur(r,Ee)}export{Oe as default};
//# sourceMappingURL=mod.js.map
