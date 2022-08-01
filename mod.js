// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),v&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(r,t){return null!=r&&d.call(r,t)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(r){var t,n,e;if(null==r)return s.call(r);n=r[m],t=w(r,m);try{r[m]=void 0}catch(t){return s.call(r)}return e=s.call(r),t?r[m]=n:delete r[m],e}:function(r){return s.call(r)},A=Boolean.prototype.toString;var g=b();function _(r){return"object"==typeof r&&(r instanceof Boolean||(g?function(r){try{return A.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function h(r){return v(r)||_(r)}function O(){return new Function("return this;")()}l(h,"isPrimitive",v),l(h,"isObject",_);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof E?E:null;var F=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(U)return U;if(S)return S;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),I=F.document&&F.document.childNodes,P=Int8Array;function T(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(T,"REGEXP",V);var x=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function G(r){return null!==r&&"object"==typeof r}function H(r){var t,n,e,o;if(("Object"===(n=j(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=V.exec(e.toString()))return t[1]}return G(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(G,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!x(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(G));var B="function"==typeof y||"object"==typeof P||"function"==typeof I?function(r){return H(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?H(r).toLowerCase():t};function L(r){return"function"===B(r)}function M(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&L(r.next)}function W(r){return"number"==typeof r}var k=Number,C=k.prototype.toString;var Y=b();function R(r){return"object"==typeof r&&(r instanceof k||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function X(r){return W(r)||R(r)}l(X,"isPrimitive",W),l(X,"isObject",R);var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!x(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),J(r))}(r),!t||!w(r,"constructor")&&w(t,"constructor")&&L(t.constructor)&&"[object Function]"===j(t.constructor)&&w(t,"isPrototypeOf")&&L(t.isPrototypeOf)&&(t===K||function(r){var t;for(t in r)if(!w(r,t))return!1;return!0}(r)))}function Z(r,t){return Q(t)?(w(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}function $(r,t,n){var e,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,n)))throw u;return l(o={},"next",f),l(o,"return",a),q&&L(r[q])&&l(o,q,c),o;function f(){var n;return i?{done:!0}:(n=r.next()).done?(i=!0,n):{value:W(n.value)?t(n.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[q](),t,e)}}function rr(r){return r!=r}var tr="function"==typeof Uint32Array;var nr="function"==typeof Uint32Array?Uint32Array:null;var er,or="function"==typeof Uint32Array?Uint32Array:void 0;er=function(){var r,t,n;if("function"!=typeof nr)return!1;try{t=new nr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(tr&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur=er,ir="function"==typeof Float64Array;var fr="function"==typeof Float64Array?Float64Array:null;var ar,cr="function"==typeof Float64Array?Float64Array:void 0;ar=function(){var r,t,n;if("function"!=typeof fr)return!1;try{t=new fr([1,3.14,-3.14,NaN]),n=t,r=(ir&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var lr=ar,yr="function"==typeof Uint8Array;var vr="function"==typeof Uint8Array?Uint8Array:null;var pr,br="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,t,n;if("function"!=typeof vr)return!1;try{t=new vr(t=[1,3.14,-3.14,256,257]),n=t,r=(yr&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?br:function(){throw new Error("not implemented")};var sr=pr,dr="function"==typeof Uint16Array;var wr="function"==typeof Uint16Array?Uint16Array:null;var mr,jr="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,t,n;if("function"!=typeof wr)return!1;try{t=new wr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(dr&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var Ar,gr={uint16:mr,uint8:sr};(Ar=new gr.uint16(1))[0]=4660;var _r=52===new gr.uint8(Ar.buffer)[0],hr=!0===_r?1:0,Or=new lr(1),Ur=new ur(Or.buffer);function Sr(r){return Or[0]=r,Ur[hr]}var Er=!0===_r?1:0,Nr=new lr(1),Fr=new ur(Nr.buffer);function Ir(r,t){return Nr[0]=r,Fr[Er]=t>>>0,Nr[0]}var Pr=Number.POSITIVE_INFINITY,Tr=k.NEGATIVE_INFINITY;var Vr=.6931471803691238,xr=1.9082149292705877e-10;var Gr=Math.floor,Hr=Math.ceil;function Br(r){return r<0?Hr(r):Gr(r)}var Lr,Mr;function Wr(r){return r===Pr||r===Tr}!0===_r?(Lr=1,Mr=0):(Lr=0,Mr=1);var kr,Cr,Yr={HIGH:Lr,LOW:Mr},Rr=new lr(1),Xr=new ur(Rr.buffer),qr=Yr.HIGH,zr=Yr.LOW;function Dr(r,t){return Rr[0]=t,r[0]=Xr[qr],r[1]=Xr[zr],r}function Jr(r,t){return 1===arguments.length?Dr([0,0],r):Dr(r,t)}!0===_r?(kr=1,Cr=0):(kr=0,Cr=1);var Kr={HIGH:kr,LOW:Cr},Qr=new lr(1),Zr=new ur(Qr.buffer),$r=Kr.HIGH,rt=Kr.LOW;function tt(r,t){return Zr[$r]=r,Zr[rt]=t,Qr[0]}var nt=[0,0];function et(r){return Math.abs(r)}function ot(r,t){return rr(t)||Wr(t)?(r[0]=t,r[1]=0,r):0!==t&&et(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var ut=[0,0],it=[0,0];function ft(r,t){var n,e,o,u,i;return 0===t||0===r||rr(r)||Wr(r)?r:(function(r,t){1===arguments.length?ot([0,0],r):ot(r,t)}(ut,r),t+=ut[1],t+=function(r){var t=Sr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=ut[0]),t<-1074?(o=r,Jr(nt,0),u=nt[0],u&=2147483647,i=Sr(o),tt(u|=i&=2147483648,nt[1])):t>1023?r<0?Tr:Pr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Jr(it,r),n=it[0],n&=2148532223,e*tt(n|=t+1023<<20,it[1])))}function at(r){var t;return rr(r)||r===Pr?r:r===Tr?0:r>709.782712893384?Pr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,o,u,i;return ft(1-(t-(e=r-t)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),n)}(r-.6931471803691238*(t=Br(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}var ct=.6931471803691238,lt=1.9082149292705877e-10;var yt=.6931471803691238,vt=1.9082149292705877e-10;function pt(r){var t;return rr(r)?NaN:0===r?Tr:0<(t=et(r))&&t<=.6931471805599453?function(r){var t,n,e,o,u,i,f,a,c,l,y,v;return 0===r?Tr:rr(r)||r<0?NaN:(u=0,(n=Sr(r))<1048576&&(u-=54,n=Sr(r*=0x40000000000000)),n>=2146435072?r+r:(u+=(n>>20)-1023|0,u+=(a=614244+(n&=1048575)&1048576|0)>>20|0,f=(r=Ir(r,n|1072693248^a))-1,(1048575&2+n)<3?0===f?0===u?0:u*yt+u*vt:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*yt-(i-u*vt-f)):(a=n-398458|0,c=440401-n|0,o=(y=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+o,(a|=c)>0?(t=.5*f*f,0===u?f-(t-l*(t+i)):u*yt-(t-(l*(t+i)+u*vt)-f)):0===u?f-l*(f-i):u*yt-(l*(f-i)-u*vt-f))))}(-function(r){var t,n,e,o,u,i,f,a,c,l,y,v;if(r===Pr||rr(r))return r;if(r===Tr)return-1;if(0===r)return r;if(r<0?(n=!0,f=-r):(n=!1,f=r),f>=38.816242111356935){if(n)return-1;if(f>=709.782712893384)return Pr}if(u=0|Sr(f),f>.34657359027997264)f<1.0397207708399179?n?(e=r+Vr,o=-xr,v=-1):(e=r-Vr,o=xr,v=1):(v=n?1.4426950408889634*r-.5:1.4426950408889634*r+.5,e=r-(l=v|=0)*Vr,o=l*xr),c=e-(r=e-o)-o;else{if(u<1016070144)return r;v=0}return i=1+(a=r*(t=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(a),y=a*((i-(l=3-i*t))/(6-r*l)),0===v?r-(r*y-a):(y=r*(y-c)-c,y-=a,-1===v?.5*(r-y)-.5:1===v?r<-.25?-2*(y-(r+.5)):1+2*(r-y):v<=-2||v>56?(f=Ir(f=1-(y-r),e=Sr(f)+(v<<20)|0))-1:(l=1,v<20?f=(l=Ir(l,e=1072693248-(2097152>>v)|0))-(y-r):(f=r-(y+(l=Ir(l,e=1023-v<<20|0))),f+=1),Ir(f,e=Sr(f)+(v<<20)|0)))}(-t)):function(r){var t,n,e,o,u,i,f,a,c,l;if(r<-1||rr(r))return NaN;if(-1===r)return Tr;if(r===Pr)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,o=r,n=1)}return 0!==l&&(e<9007199254740992?(u=(l=((n=Sr(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),u/=c):(l=((n=Sr(c=r))>>20)-1023,u=0),(n&=1048575)<434334?c=Ir(c,1072693248|n):(l+=1,c=Ir(c,1071644672|n),n=1048576-n>>2),o=c-1),t=.5*o*o,0===n?0===o?l*ct+(u+=l*lt):l*ct-((a=t*(1-.6666666666666666*o))-(l*lt+u)-o):(a=(f=(i=o/(2+o))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===l?o-(t-i*(t+a)):l*ct-(t-(i*(t+a)+(l*lt+u))-o))}(-at(-t))}function bt(r){return $(r,pt)}export{bt as default};
//# sourceMappingURL=mod.js.map
