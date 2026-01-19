(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Wf={exports:{}},Eo={};var t_;function KS(){if(t_)return Eo;t_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Eo.Fragment=e,Eo.jsx=i,Eo.jsxs=i,Eo}var e_;function QS(){return e_||(e_=1,Wf.exports=KS()),Wf.exports}var Ze=QS(),qf={exports:{}},te={};var n_;function JS(){if(n_)return te;n_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),y=Symbol.iterator;function M(U){return U===null||typeof U!="object"?null:(U=y&&U[y]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,x={};function S(U,tt,St){this.props=U,this.context=tt,this.refs=x,this.updater=St||A}S.prototype.isReactComponent={},S.prototype.setState=function(U,tt){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,tt,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function z(){}z.prototype=S.prototype;function D(U,tt,St){this.props=U,this.context=tt,this.refs=x,this.updater=St||A}var O=D.prototype=new z;O.constructor=D,R(O,S.prototype),O.isPureReactComponent=!0;var J=Array.isArray;function F(){}var L={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function w(U,tt,St){var Y=St.ref;return{$$typeof:o,type:U,key:tt,ref:Y!==void 0?Y:null,props:St}}function b(U,tt){return w(U.type,tt,U.props)}function G(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function lt(U){var tt={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(St){return tt[St]})}var it=/\/+/g;function ht(U,tt){return typeof U=="object"&&U!==null&&U.key!=null?lt(""+U.key):tt.toString(36)}function ct(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(F,F):(U.status="pending",U.then(function(tt){U.status==="pending"&&(U.status="fulfilled",U.value=tt)},function(tt){U.status==="pending"&&(U.status="rejected",U.reason=tt)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function P(U,tt,St,Y,ot){var yt=typeof U;(yt==="undefined"||yt==="boolean")&&(U=null);var Mt=!1;if(U===null)Mt=!0;else switch(yt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(U.$$typeof){case o:case e:Mt=!0;break;case _:return Mt=U._init,P(Mt(U._payload),tt,St,Y,ot)}}if(Mt)return ot=ot(U),Mt=Y===""?"."+ht(U,0):Y,J(ot)?(St="",Mt!=null&&(St=Mt.replace(it,"$&/")+"/"),P(ot,tt,St,"",function(ee){return ee})):ot!=null&&(G(ot)&&(ot=b(ot,St+(ot.key==null||U&&U.key===ot.key?"":(""+ot.key).replace(it,"$&/")+"/")+Mt)),tt.push(ot)),1;Mt=0;var Ft=Y===""?".":Y+":";if(J(U))for(var It=0;It<U.length;It++)Y=U[It],yt=Ft+ht(Y,It),Mt+=P(Y,tt,St,yt,ot);else if(It=M(U),typeof It=="function")for(U=It.call(U),It=0;!(Y=U.next()).done;)Y=Y.value,yt=Ft+ht(Y,It++),Mt+=P(Y,tt,St,yt,ot);else if(yt==="object"){if(typeof U.then=="function")return P(ct(U),tt,St,Y,ot);throw tt=String(U),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function k(U,tt,St){if(U==null)return U;var Y=[],ot=0;return P(U,Y,"","",function(yt){return tt.call(St,yt,ot++)}),Y}function V(U){if(U._status===-1){var tt=U._result;tt=tt(),tt.then(function(St){(U._status===0||U._status===-1)&&(U._status=1,U._result=St)},function(St){(U._status===0||U._status===-1)&&(U._status=2,U._result=St)}),U._status===-1&&(U._status=0,U._result=tt)}if(U._status===1)return U._result.default;throw U._result}var vt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Et={map:k,forEach:function(U,tt,St){k(U,function(){tt.apply(this,arguments)},St)},count:function(U){var tt=0;return k(U,function(){tt++}),tt},toArray:function(U){return k(U,function(tt){return tt})||[]},only:function(U){if(!G(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return te.Activity=v,te.Children=Et,te.Component=S,te.Fragment=i,te.Profiler=l,te.PureComponent=D,te.StrictMode=r,te.Suspense=m,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,te.__COMPILER_RUNTIME={__proto__:null,c:function(U){return L.H.useMemoCache(U)}},te.cache=function(U){return function(){return U.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(U,tt,St){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Y=R({},U.props),ot=U.key;if(tt!=null)for(yt in tt.key!==void 0&&(ot=""+tt.key),tt)!Q.call(tt,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&tt.ref===void 0||(Y[yt]=tt[yt]);var yt=arguments.length-2;if(yt===1)Y.children=St;else if(1<yt){for(var Mt=Array(yt),Ft=0;Ft<yt;Ft++)Mt[Ft]=arguments[Ft+2];Y.children=Mt}return w(U.type,ot,Y)},te.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},te.createElement=function(U,tt,St){var Y,ot={},yt=null;if(tt!=null)for(Y in tt.key!==void 0&&(yt=""+tt.key),tt)Q.call(tt,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(ot[Y]=tt[Y]);var Mt=arguments.length-2;if(Mt===1)ot.children=St;else if(1<Mt){for(var Ft=Array(Mt),It=0;It<Mt;It++)Ft[It]=arguments[It+2];ot.children=Ft}if(U&&U.defaultProps)for(Y in Mt=U.defaultProps,Mt)ot[Y]===void 0&&(ot[Y]=Mt[Y]);return w(U,yt,ot)},te.createRef=function(){return{current:null}},te.forwardRef=function(U){return{$$typeof:d,render:U}},te.isValidElement=G,te.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:V}},te.memo=function(U,tt){return{$$typeof:p,type:U,compare:tt===void 0?null:tt}},te.startTransition=function(U){var tt=L.T,St={};L.T=St;try{var Y=U(),ot=L.S;ot!==null&&ot(St,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(F,vt)}catch(yt){vt(yt)}finally{tt!==null&&St.types!==null&&(tt.types=St.types),L.T=tt}},te.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},te.use=function(U){return L.H.use(U)},te.useActionState=function(U,tt,St){return L.H.useActionState(U,tt,St)},te.useCallback=function(U,tt){return L.H.useCallback(U,tt)},te.useContext=function(U){return L.H.useContext(U)},te.useDebugValue=function(){},te.useDeferredValue=function(U,tt){return L.H.useDeferredValue(U,tt)},te.useEffect=function(U,tt){return L.H.useEffect(U,tt)},te.useEffectEvent=function(U){return L.H.useEffectEvent(U)},te.useId=function(){return L.H.useId()},te.useImperativeHandle=function(U,tt,St){return L.H.useImperativeHandle(U,tt,St)},te.useInsertionEffect=function(U,tt){return L.H.useInsertionEffect(U,tt)},te.useLayoutEffect=function(U,tt){return L.H.useLayoutEffect(U,tt)},te.useMemo=function(U,tt){return L.H.useMemo(U,tt)},te.useOptimistic=function(U,tt){return L.H.useOptimistic(U,tt)},te.useReducer=function(U,tt,St){return L.H.useReducer(U,tt,St)},te.useRef=function(U){return L.H.useRef(U)},te.useState=function(U){return L.H.useState(U)},te.useSyncExternalStore=function(U,tt,St){return L.H.useSyncExternalStore(U,tt,St)},te.useTransition=function(){return L.H.useTransition()},te.version="19.2.3",te}var i_;function od(){return i_||(i_=1,qf.exports=JS()),qf.exports}var Oe=od(),Yf={exports:{}},To={},Zf={exports:{}},jf={};var a_;function $S(){return a_||(a_=1,(function(o){function e(P,k){var V=P.length;P.push(k);t:for(;0<V;){var vt=V-1>>>1,Et=P[vt];if(0<l(Et,k))P[vt]=k,P[V]=Et,V=vt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var k=P[0],V=P.pop();if(V!==k){P[0]=V;t:for(var vt=0,Et=P.length,U=Et>>>1;vt<U;){var tt=2*(vt+1)-1,St=P[tt],Y=tt+1,ot=P[Y];if(0>l(St,V))Y<Et&&0>l(ot,St)?(P[vt]=ot,P[Y]=V,vt=Y):(P[vt]=St,P[tt]=V,vt=tt);else if(Y<Et&&0>l(ot,V))P[vt]=ot,P[Y]=V,vt=Y;else break t}}return k}function l(P,k){var V=P.sortIndex-k.sortIndex;return V!==0?V:P.id-k.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,v=null,y=3,M=!1,A=!1,R=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function O(P){for(var k=i(p);k!==null;){if(k.callback===null)r(p);else if(k.startTime<=P)r(p),k.sortIndex=k.expirationTime,e(m,k);else break;k=i(p)}}function J(P){if(R=!1,O(P),!A)if(i(m)!==null)A=!0,F||(F=!0,lt());else{var k=i(p);k!==null&&ct(J,k.startTime-P)}}var F=!1,L=-1,Q=5,w=-1;function b(){return x?!0:!(o.unstable_now()-w<Q)}function G(){if(x=!1,F){var P=o.unstable_now();w=P;var k=!0;try{t:{A=!1,R&&(R=!1,z(L),L=-1),M=!0;var V=y;try{e:{for(O(P),v=i(m);v!==null&&!(v.expirationTime>P&&b());){var vt=v.callback;if(typeof vt=="function"){v.callback=null,y=v.priorityLevel;var Et=vt(v.expirationTime<=P);if(P=o.unstable_now(),typeof Et=="function"){v.callback=Et,O(P),k=!0;break e}v===i(m)&&r(m),O(P)}else r(m);v=i(m)}if(v!==null)k=!0;else{var U=i(p);U!==null&&ct(J,U.startTime-P),k=!1}}break t}finally{v=null,y=V,M=!1}k=void 0}}finally{k?lt():F=!1}}}var lt;if(typeof D=="function")lt=function(){D(G)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,ht=it.port2;it.port1.onmessage=G,lt=function(){ht.postMessage(null)}}else lt=function(){S(G,0)};function ct(P,k){L=S(function(){P(o.unstable_now())},k)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(P){switch(y){case 1:case 2:case 3:var k=3;break;default:k=y}var V=y;y=k;try{return P()}finally{y=V}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(P,k){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var V=y;y=P;try{return k()}finally{y=V}},o.unstable_scheduleCallback=function(P,k,V){var vt=o.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?vt+V:vt):V=vt,P){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=V+Et,P={id:_++,callback:k,priorityLevel:P,startTime:V,expirationTime:Et,sortIndex:-1},V>vt?(P.sortIndex=V,e(p,P),i(m)===null&&P===i(p)&&(R?(z(L),L=-1):R=!0,ct(J,V-vt))):(P.sortIndex=Et,e(m,P),A||M||(A=!0,F||(F=!0,lt()))),P},o.unstable_shouldYield=b,o.unstable_wrapCallback=function(P){var k=y;return function(){var V=y;y=k;try{return P.apply(this,arguments)}finally{y=V}}}})(jf)),jf}var r_;function tx(){return r_||(r_=1,Zf.exports=$S()),Zf.exports}var Kf={exports:{}},Tn={};var s_;function ex(){if(s_)return Tn;s_=1;var o=od();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Tn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},Tn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Tn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Tn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Tn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Tn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Tn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Tn.requestFormReset=function(m){r.d.r(m)},Tn.unstable_batchedUpdates=function(m,p){return m(p)},Tn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.2.3",Tn}var o_;function nx(){if(o_)return Kf.exports;o_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Kf.exports=ex(),Kf.exports}var l_;function ix(){if(l_)return To;l_=1;var o=tx(),e=od(),i=nx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var g=!1,E=u.child;E;){if(E===a){g=!0,a=u,s=f;break}if(E===s){g=!0,s=u,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,s=u;break}if(E===s){g=!0,s=f,a=u;break}E=E.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),b=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var it=Symbol.for("react.client.reference");function ht(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===it?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case S:return"Profiler";case x:return"StrictMode";case J:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case D:return t.displayName||"Context";case z:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case L:return n=t.displayName||null,n!==null?n:ht(t.type)||"Memo";case Q:n=t._payload,t=t._init;try{return ht(t(n))}catch{}}return null}var ct=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},vt=[],Et=-1;function U(t){return{current:t}}function tt(t){0>Et||(t.current=vt[Et],vt[Et]=null,Et--)}function St(t,n){Et++,vt[Et]=t.current,t.current=n}var Y=U(null),ot=U(null),yt=U(null),Mt=U(null);function Ft(t,n){switch(St(yt,n),St(ot,t),St(Y,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Eg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Eg(n),t=Tg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}tt(Y),St(Y,t)}function It(){tt(Y),tt(ot),tt(yt)}function ee(t){t.memoizedState!==null&&St(Mt,t);var n=Y.current,a=Tg(n,t.type);n!==a&&(St(ot,t),St(Y,a))}function Le(t){ot.current===t&&(tt(Y),tt(ot)),Mt.current===t&&(tt(Mt),So._currentValue=V)}var I,Xe;function ue(t){if(I===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);I=n&&n[1]||"",Xe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+I+t+Xe}var Se=!1;function Vt(t,n){if(!t||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(st){var $=st}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(st){$=st}t.call(pt.prototype)}}else{try{throw Error()}catch(st){$=st}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(st){if(st&&$&&typeof st.stack=="string")return[st.stack,$.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],E=f[1];if(g&&E){var B=g.split(`
`),K=E.split(`
`);for(u=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;u<K.length&&!K[u].includes("DetermineComponentFrameRoot");)u++;if(s===B.length||u===K.length)for(s=B.length-1,u=K.length-1;1<=s&&0<=u&&B[s]!==K[u];)u--;for(;1<=s&&0<=u;s--,u--)if(B[s]!==K[u]){if(s!==1||u!==1)do if(s--,u--,0>u||B[s]!==K[u]){var ut=`
`+B[s].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=s&&0<=u);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ue(a):""}function ke(t,n){switch(t.tag){case 26:case 27:case 5:return ue(t.type);case 16:return ue("Lazy");case 13:return t.child!==n&&n!==null?ue("Suspense Fallback"):ue("Suspense");case 19:return ue("SuspenseList");case 0:case 15:return Vt(t.type,!1);case 11:return Vt(t.type.render,!1);case 1:return Vt(t.type,!0);case 31:return ue("Activity");default:return""}}function Jt(t){try{var n="",a=null;do n+=ke(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var $t=Object.prototype.hasOwnProperty,N=o.unstable_scheduleCallback,T=o.unstable_cancelCallback,rt=o.unstable_shouldYield,_t=o.unstable_requestPaint,mt=o.unstable_now,xt=o.unstable_getCurrentPriorityLevel,qt=o.unstable_ImmediatePriority,Dt=o.unstable_UserBlockingPriority,Lt=o.unstable_NormalPriority,ne=o.unstable_LowPriority,At=o.unstable_IdlePriority,Ot=o.log,he=o.unstable_setDisableYieldValue,jt=null,Ct=null;function Yt(t){if(typeof Ot=="function"&&he(t),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(jt,t)}catch{}}var Zt=Math.clz32?Math.clz32:bt,ze=Math.log,X=Math.LN2;function bt(t){return t>>>=0,t===0?32:31-(ze(t)/X|0)|0}var dt=256,gt=262144,Rt=4194304;function kt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function oe(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?u=kt(s):(g&=E,g!==0?u=kt(g):a||(a=E&~t,a!==0&&(u=kt(a))))):(E=s&~f,E!==0?u=kt(E):g!==0?u=kt(g):a||(a=s&~t,a!==0&&(u=kt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Pe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function sn(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _e(){var t=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),t}function Gn(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Sn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Vo(t,n,a,s,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,B=t.expirationTimes,K=t.hiddenUpdates;for(a=g&~a;0<a;){var ut=31-Zt(a),pt=1<<ut;E[ut]=0,B[ut]=-1;var $=K[ut];if($!==null)for(K[ut]=null,ut=0;ut<$.length;ut++){var st=$[ut];st!==null&&(st.lane&=-536870913)}a&=~pt}s!==0&&vi(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function vi(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Zt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Sr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Zt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function ws(t,n){var a=n&-n;return a=(a&42)!==0?1:xr(a),(a&(t.suspendedLanes|n))!==0?0:a}function xr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ia(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ds(){var t=k.p;return t!==0?t:(t=window.event,t===void 0?32:Yg(t.type))}function Ga(t,n){var a=k.p;try{return k.p=t,n()}finally{k.p=a}}var li=Math.random().toString(36).slice(2),Je="__reactFiber$"+li,xn="__reactProps$"+li,aa="__reactContainer$"+li,Us="__reactEvents$"+li,C="__reactListeners$"+li,W="__reactHandles$"+li,et="__reactResources$"+li,nt="__reactMarker$"+li;function Z(t){delete t[Je],delete t[xn],delete t[Us],delete t[C],delete t[W]}function Tt(t){var n=t[Je];if(n)return n;for(var a=t.parentNode;a;){if(n=a[aa]||a[Je]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Ug(t);t!==null;){if(a=t[Je])return a;t=Ug(t)}return n}t=a,a=t.parentNode}return null}function wt(t){if(t=t[Je]||t[aa]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Pt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Nt(t){var n=t[et];return n||(n=t[et]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function zt(t){t[nt]=!0}var Qt=new Set,Gt={};function le(t,n){be(t,n),be(t+"Capture",n)}function be(t,n){for(Gt[t]=n,t=0;t<n.length;t++)Qt.add(n[t])}var He=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yn={},ve={};function Xt(t){return $t.call(ve,t)?!0:$t.call(yn,t)?!1:He.test(t)?ve[t]=!0:(yn[t]=!0,!1)}function We(t,n,a){if(Xt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function me(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function je(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function on(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mn(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ls(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ge(t){if(!t._valueTracker){var n=Mn(t)?"checked":"value";t._valueTracker=Ls(t,n,""+t[n])}}function ui(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Mn(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function ra(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dn=/[\n"\\]/g;function En(t){return t.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ns(t,n,a,s,u,f,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+on(n)):t.value!==""+on(n)&&(t.value=""+on(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?Fu(t,g,on(n)):a!=null?Fu(t,g,on(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+on(E):t.removeAttribute("name")}function Os(t,n,a,s,u,f,g,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ge(t);return}a=a!=null?""+on(a):"",n=n!=null?""+on(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Ge(t)}function Fu(t,n,a){n==="number"&&ra(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function yr(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+on(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function vd(t,n,a){if(n!=null&&(n=""+on(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+on(a):""}function Sd(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ct(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=on(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Ge(t)}function Mr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var W0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||W0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function yd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&xd(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&xd(t,f,n[f])}function Hu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var q0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Y0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xo(t){return Y0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function bi(){}var Gu=null;function Vu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Er=null,Tr=null;function Md(t){var n=wt(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ns(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+En(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[xn]||null;if(!u)throw Error(r(90));Ns(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&ui(s)}break t;case"textarea":vd(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&yr(t,!!a.multiple,n,!1)}}}var Xu=!1;function Ed(t,n,a){if(Xu)return t(n,a);Xu=!0;try{var s=t(n);return s}finally{if(Xu=!1,(Er!==null||Tr!==null)&&(Dl(),Er&&(n=Er,t=Tr,Tr=Er=null,Md(n),t)))for(n=0;n<t.length;n++)Md(t[n])}}function Ps(t,n){var a=t.stateNode;if(a===null)return null;var s=a[xn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ku=!1;if(Ri)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){ku=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{ku=!1}var sa=null,Wu=null,ko=null;function Td(){if(ko)return ko;var t,n=Wu,a=n.length,s,u="value"in sa?sa.value:sa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===u[f-s];s++);return ko=u.slice(t,1<s?1-s:void 0)}function Wo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function qo(){return!0}function Ad(){return!1}function Un(t){function n(a,s,u,f,g){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qo:Ad,this.isPropagationStopped=Ad,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),n}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=Un(Va),Bs=v({},Va,{view:0,detail:0}),Z0=Un(Bs),qu,Yu,Is,Zo=v({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(qu=t.screenX-Is.screenX,Yu=t.screenY-Is.screenY):Yu=qu=0,Is=t),qu)},movementY:function(t){return"movementY"in t?t.movementY:Yu}}),bd=Un(Zo),j0=v({},Zo,{dataTransfer:0}),K0=Un(j0),Q0=v({},Bs,{relatedTarget:0}),Zu=Un(Q0),J0=v({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),$0=Un(J0),tv=v({},Va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ev=Un(tv),nv=v({},Va,{data:0}),Rd=Un(nv),iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=rv[t])?!!n[t]:!1}function ju(){return sv}var ov=v({},Bs,{key:function(t){if(t.key){var n=iv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?av[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(t){return t.type==="keypress"?Wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lv=Un(ov),uv=v({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=Un(uv),cv=v({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),fv=Un(cv),hv=v({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),dv=Un(hv),pv=v({},Zo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mv=Un(pv),gv=v({},Va,{newState:0,oldState:0}),_v=Un(gv),vv=[9,13,27,32],Ku=Ri&&"CompositionEvent"in window,Fs=null;Ri&&"documentMode"in document&&(Fs=document.documentMode);var Sv=Ri&&"TextEvent"in window&&!Fs,wd=Ri&&(!Ku||Fs&&8<Fs&&11>=Fs),Dd=" ",Ud=!1;function Ld(t,n){switch(t){case"keyup":return vv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ar=!1;function xv(t,n){switch(t){case"compositionend":return Nd(n);case"keypress":return n.which!==32?null:(Ud=!0,Dd);case"textInput":return t=n.data,t===Dd&&Ud?null:t;default:return null}}function yv(t,n){if(Ar)return t==="compositionend"||!Ku&&Ld(t,n)?(t=Td(),ko=Wu=sa=null,Ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wd&&n.locale!=="ko"?null:n.data;default:return null}}var Mv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Mv[t.type]:n==="textarea"}function Pd(t,n,a,s){Er?Tr?Tr.push(s):Tr=[s]:Er=s,n=Bl(n,"onChange"),0<n.length&&(a=new Yo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Hs=null,Gs=null;function Ev(t){_g(t,0)}function jo(t){var n=Pt(t);if(ui(n))return t}function zd(t,n){if(t==="change")return n}var Bd=!1;if(Ri){var Qu;if(Ri){var Ju="oninput"in document;if(!Ju){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),Ju=typeof Id.oninput=="function"}Qu=Ju}else Qu=!1;Bd=Qu&&(!document.documentMode||9<document.documentMode)}function Fd(){Hs&&(Hs.detachEvent("onpropertychange",Hd),Gs=Hs=null)}function Hd(t){if(t.propertyName==="value"&&jo(Gs)){var n=[];Pd(n,Gs,t,Vu(t)),Ed(Ev,n)}}function Tv(t,n,a){t==="focusin"?(Fd(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",Hd)):t==="focusout"&&Fd()}function Av(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jo(Gs)}function bv(t,n){if(t==="click")return jo(n)}function Rv(t,n){if(t==="input"||t==="change")return jo(n)}function Cv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Vn=typeof Object.is=="function"?Object.is:Cv;function Vs(t,n){if(Vn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!$t.call(n,u)||!Vn(t[u],n[u]))return!1}return!0}function Gd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vd(t,n){var a=Gd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Gd(a)}}function Xd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Xd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function kd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ra(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ra(t.document)}return n}function $u(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var wv=Ri&&"documentMode"in document&&11>=document.documentMode,br=null,tc=null,Xs=null,ec=!1;function Wd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ec||br==null||br!==ra(s)||(s=br,"selectionStart"in s&&$u(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Xs&&Vs(Xs,s)||(Xs=s,s=Bl(tc,"onSelect"),0<s.length&&(n=new Yo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=br)))}function Xa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Rr={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},nc={},qd={};Ri&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function ka(t){if(nc[t])return nc[t];if(!Rr[t])return t;var n=Rr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in qd)return nc[t]=n[a];return t}var Yd=ka("animationend"),Zd=ka("animationiteration"),jd=ka("animationstart"),Dv=ka("transitionrun"),Uv=ka("transitionstart"),Lv=ka("transitioncancel"),Kd=ka("transitionend"),Qd=new Map,ic="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ic.push("scrollEnd");function ci(t,n){Qd.set(t,n),le(n,[t])}var Ko=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Qn=[],Cr=0,ac=0;function Qo(){for(var t=Cr,n=ac=Cr=0;n<t;){var a=Qn[n];Qn[n++]=null;var s=Qn[n];Qn[n++]=null;var u=Qn[n];Qn[n++]=null;var f=Qn[n];if(Qn[n++]=null,s!==null&&u!==null){var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}f!==0&&Jd(a,u,f)}}function Jo(t,n,a,s){Qn[Cr++]=t,Qn[Cr++]=n,Qn[Cr++]=a,Qn[Cr++]=s,ac|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function rc(t,n,a,s){return Jo(t,n,a,s),$o(t)}function Wa(t,n){return Jo(t,null,null,n),$o(t)}function Jd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Zt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function $o(t){if(50<fo)throw fo=0,mf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var wr={};function Nv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,n,a,s){return new Nv(t,n,a,s)}function sc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ci(t,n){var a=t.alternate;return a===null?(a=Xn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function $d(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function tl(t,n,a,s,u,f){var g=0;if(s=t,typeof t=="function")sc(t)&&(g=1);else if(typeof t=="string")g=IS(t,a,Y.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Xn(31,a,n,u),t.elementType=w,t.lanes=f,t;case R:return qa(a.children,u,f,n);case x:g=8,u|=24;break;case S:return t=Xn(12,a,n,u|2),t.elementType=S,t.lanes=f,t;case J:return t=Xn(13,a,n,u),t.elementType=J,t.lanes=f,t;case F:return t=Xn(19,a,n,u),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:g=10;break t;case z:g=9;break t;case O:g=11;break t;case L:g=14;break t;case Q:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Xn(g,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function qa(t,n,a,s){return t=Xn(7,t,s,n),t.lanes=a,t}function oc(t,n,a){return t=Xn(6,t,null,n),t.lanes=a,t}function tp(t){var n=Xn(18,null,null,0);return n.stateNode=t,n}function lc(t,n,a){return n=Xn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ep=new WeakMap;function Jn(t,n){if(typeof t=="object"&&t!==null){var a=ep.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Jt(n)},ep.set(t,n),n)}return{value:t,source:n,stack:Jt(n)}}var Dr=[],Ur=0,el=null,ks=0,$n=[],ti=0,oa=null,Si=1,xi="";function wi(t,n){Dr[Ur++]=ks,Dr[Ur++]=el,el=t,ks=n}function np(t,n,a){$n[ti++]=Si,$n[ti++]=xi,$n[ti++]=oa,oa=t;var s=Si;t=xi;var u=32-Zt(s)-1;s&=~(1<<u),a+=1;var f=32-Zt(n)+u;if(30<f){var g=u-u%5;f=(s&(1<<g)-1).toString(32),s>>=g,u-=g,Si=1<<32-Zt(n)+u|a<<u|s,xi=f+t}else Si=1<<f|a<<u|s,xi=t}function uc(t){t.return!==null&&(wi(t,1),np(t,1,0))}function cc(t){for(;t===el;)el=Dr[--Ur],Dr[Ur]=null,ks=Dr[--Ur],Dr[Ur]=null;for(;t===oa;)oa=$n[--ti],$n[ti]=null,xi=$n[--ti],$n[ti]=null,Si=$n[--ti],$n[ti]=null}function ip(t,n){$n[ti++]=Si,$n[ti++]=xi,$n[ti++]=oa,Si=n.id,xi=n.overflow,oa=t}var mn=null,Be=null,ge=!1,la=null,ei=!1,fc=Error(r(519));function ua(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ws(Jn(n,t)),fc}function ap(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Je]=t,n[xn]=s,a){case"dialog":fe("cancel",n),fe("close",n);break;case"iframe":case"object":case"embed":fe("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)fe(po[a],n);break;case"source":fe("error",n);break;case"img":case"image":case"link":fe("error",n),fe("load",n);break;case"details":fe("toggle",n);break;case"input":fe("invalid",n),Os(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":fe("invalid",n);break;case"textarea":fe("invalid",n),Sd(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||yg(n.textContent,a)?(s.popover!=null&&(fe("beforetoggle",n),fe("toggle",n)),s.onScroll!=null&&fe("scroll",n),s.onScrollEnd!=null&&fe("scrollend",n),s.onClick!=null&&(n.onclick=bi),n=!0):n=!1,n||ua(t,!0)}function rp(t){for(mn=t.return;mn;)switch(mn.tag){case 5:case 31:case 13:ei=!1;return;case 27:case 3:ei=!0;return;default:mn=mn.return}}function Lr(t){if(t!==mn)return!1;if(!ge)return rp(t),ge=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Df(t.type,t.memoizedProps)),a=!a),a&&Be&&ua(t),rp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Be=Dg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Be=Dg(t)}else n===27?(n=Be,Ea(t.type)?(t=Pf,Pf=null,Be=t):Be=n):Be=mn?ii(t.stateNode.nextSibling):null;return!0}function Ya(){Be=mn=null,ge=!1}function hc(){var t=la;return t!==null&&(Pn===null?Pn=t:Pn.push.apply(Pn,t),la=null),t}function Ws(t){la===null?la=[t]:la.push(t)}var dc=U(null),Za=null,Di=null;function ca(t,n,a){St(dc,n._currentValue),n._currentValue=a}function Ui(t){t._currentValue=dc.current,tt(dc)}function pc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function mc(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=u;for(var B=0;B<n.length;B++)if(E.context===n[B]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),pc(f.return,a,t),s||(g=null);break t}f=E.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),pc(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Nr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var E=u.type;Vn(u.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(u===Mt.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(So):t=[So])}u=u.return}t!==null&&mc(n,t,a,s),n.flags|=262144}function nl(t){for(t=t.firstContext;t!==null;){if(!Vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ja(t){Za=t,Di=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function gn(t){return sp(Za,t)}function il(t,n){return Za===null&&ja(t),sp(t,n)}function sp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Di===null){if(t===null)throw Error(r(308));Di=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Di=Di.next=n;return a}var Ov=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Pv=o.unstable_scheduleCallback,zv=o.unstable_NormalPriority,$e={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gc(){return{controller:new Ov,data:new Map,refCount:0}}function qs(t){t.refCount--,t.refCount===0&&Pv(zv,function(){t.controller.abort()})}var Ys=null,_c=0,Or=0,Pr=null;function Bv(t,n){if(Ys===null){var a=Ys=[];_c=0,Or=yf(),Pr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return _c++,n.then(op,op),n}function op(){if(--_c===0&&Ys!==null){Pr!==null&&(Pr.status="fulfilled");var t=Ys;Ys=null,Or=0,Pr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Iv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var lp=P.S;P.S=function(t,n){Wm=mt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Bv(t,n),lp!==null&&lp(t,n)};var Ka=U(null);function vc(){var t=Ka.current;return t!==null?t:Ne.pooledCache}function al(t,n){n===null?St(Ka,Ka.current):St(Ka,n.pool)}function up(){var t=vc();return t===null?null:{parent:$e._currentValue,pool:t}}var zr=Error(r(460)),Sc=Error(r(474)),rl=Error(r(542)),sl={then:function(){}};function cp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function fp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(bi,bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,dp(t),t;default:if(typeof n.status=="string")n.then(bi,bi);else{if(t=Ne,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,dp(t),t}throw Ja=n,zr}}function Qa(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ja=a,zr):a}}var Ja=null;function hp(){if(Ja===null)throw Error(r(459));var t=Ja;return Ja=null,t}function dp(t){if(t===zr||t===rl)throw Error(r(483))}var Br=null,Zs=0;function ol(t){var n=Zs;return Zs+=1,Br===null&&(Br=[]),fp(Br,t,n)}function js(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ll(t,n){throw n.$$typeof===y?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function pp(t){function n(q,H){if(t){var j=q.deletions;j===null?(q.deletions=[H],q.flags|=16):j.push(H)}}function a(q,H){if(!t)return null;for(;H!==null;)n(q,H),H=H.sibling;return null}function s(q){for(var H=new Map;q!==null;)q.key!==null?H.set(q.key,q):H.set(q.index,q),q=q.sibling;return H}function u(q,H){return q=Ci(q,H),q.index=0,q.sibling=null,q}function f(q,H,j){return q.index=j,t?(j=q.alternate,j!==null?(j=j.index,j<H?(q.flags|=67108866,H):j):(q.flags|=67108866,H)):(q.flags|=1048576,H)}function g(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function E(q,H,j,ft){return H===null||H.tag!==6?(H=oc(j,q.mode,ft),H.return=q,H):(H=u(H,j),H.return=q,H)}function B(q,H,j,ft){var Wt=j.type;return Wt===R?ut(q,H,j.props.children,ft,j.key):H!==null&&(H.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===Q&&Qa(Wt)===H.type)?(H=u(H,j.props),js(H,j),H.return=q,H):(H=tl(j.type,j.key,j.props,null,q.mode,ft),js(H,j),H.return=q,H)}function K(q,H,j,ft){return H===null||H.tag!==4||H.stateNode.containerInfo!==j.containerInfo||H.stateNode.implementation!==j.implementation?(H=lc(j,q.mode,ft),H.return=q,H):(H=u(H,j.children||[]),H.return=q,H)}function ut(q,H,j,ft,Wt){return H===null||H.tag!==7?(H=qa(j,q.mode,ft,Wt),H.return=q,H):(H=u(H,j),H.return=q,H)}function pt(q,H,j){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=oc(""+H,q.mode,j),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case M:return j=tl(H.type,H.key,H.props,null,q.mode,j),js(j,H),j.return=q,j;case A:return H=lc(H,q.mode,j),H.return=q,H;case Q:return H=Qa(H),pt(q,H,j)}if(ct(H)||lt(H))return H=qa(H,q.mode,j,null),H.return=q,H;if(typeof H.then=="function")return pt(q,ol(H),j);if(H.$$typeof===D)return pt(q,il(q,H),j);ll(q,H)}return null}function $(q,H,j,ft){var Wt=H!==null?H.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return Wt!==null?null:E(q,H,""+j,ft);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return j.key===Wt?B(q,H,j,ft):null;case A:return j.key===Wt?K(q,H,j,ft):null;case Q:return j=Qa(j),$(q,H,j,ft)}if(ct(j)||lt(j))return Wt!==null?null:ut(q,H,j,ft,null);if(typeof j.then=="function")return $(q,H,ol(j),ft);if(j.$$typeof===D)return $(q,H,il(q,j),ft);ll(q,j)}return null}function st(q,H,j,ft,Wt){if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return q=q.get(j)||null,E(H,q,""+ft,Wt);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case M:return q=q.get(ft.key===null?j:ft.key)||null,B(H,q,ft,Wt);case A:return q=q.get(ft.key===null?j:ft.key)||null,K(H,q,ft,Wt);case Q:return ft=Qa(ft),st(q,H,j,ft,Wt)}if(ct(ft)||lt(ft))return q=q.get(j)||null,ut(H,q,ft,Wt,null);if(typeof ft.then=="function")return st(q,H,j,ol(ft),Wt);if(ft.$$typeof===D)return st(q,H,j,il(H,ft),Wt);ll(H,ft)}return null}function Bt(q,H,j,ft){for(var Wt=null,xe=null,Ht=H,ae=H=0,pe=null;Ht!==null&&ae<j.length;ae++){Ht.index>ae?(pe=Ht,Ht=null):pe=Ht.sibling;var ye=$(q,Ht,j[ae],ft);if(ye===null){Ht===null&&(Ht=pe);break}t&&Ht&&ye.alternate===null&&n(q,Ht),H=f(ye,H,ae),xe===null?Wt=ye:xe.sibling=ye,xe=ye,Ht=pe}if(ae===j.length)return a(q,Ht),ge&&wi(q,ae),Wt;if(Ht===null){for(;ae<j.length;ae++)Ht=pt(q,j[ae],ft),Ht!==null&&(H=f(Ht,H,ae),xe===null?Wt=Ht:xe.sibling=Ht,xe=Ht);return ge&&wi(q,ae),Wt}for(Ht=s(Ht);ae<j.length;ae++)pe=st(Ht,q,ae,j[ae],ft),pe!==null&&(t&&pe.alternate!==null&&Ht.delete(pe.key===null?ae:pe.key),H=f(pe,H,ae),xe===null?Wt=pe:xe.sibling=pe,xe=pe);return t&&Ht.forEach(function(Ca){return n(q,Ca)}),ge&&wi(q,ae),Wt}function Kt(q,H,j,ft){if(j==null)throw Error(r(151));for(var Wt=null,xe=null,Ht=H,ae=H=0,pe=null,ye=j.next();Ht!==null&&!ye.done;ae++,ye=j.next()){Ht.index>ae?(pe=Ht,Ht=null):pe=Ht.sibling;var Ca=$(q,Ht,ye.value,ft);if(Ca===null){Ht===null&&(Ht=pe);break}t&&Ht&&Ca.alternate===null&&n(q,Ht),H=f(Ca,H,ae),xe===null?Wt=Ca:xe.sibling=Ca,xe=Ca,Ht=pe}if(ye.done)return a(q,Ht),ge&&wi(q,ae),Wt;if(Ht===null){for(;!ye.done;ae++,ye=j.next())ye=pt(q,ye.value,ft),ye!==null&&(H=f(ye,H,ae),xe===null?Wt=ye:xe.sibling=ye,xe=ye);return ge&&wi(q,ae),Wt}for(Ht=s(Ht);!ye.done;ae++,ye=j.next())ye=st(Ht,q,ae,ye.value,ft),ye!==null&&(t&&ye.alternate!==null&&Ht.delete(ye.key===null?ae:ye.key),H=f(ye,H,ae),xe===null?Wt=ye:xe.sibling=ye,xe=ye);return t&&Ht.forEach(function(jS){return n(q,jS)}),ge&&wi(q,ae),Wt}function Ue(q,H,j,ft){if(typeof j=="object"&&j!==null&&j.type===R&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case M:t:{for(var Wt=j.key;H!==null;){if(H.key===Wt){if(Wt=j.type,Wt===R){if(H.tag===7){a(q,H.sibling),ft=u(H,j.props.children),ft.return=q,q=ft;break t}}else if(H.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===Q&&Qa(Wt)===H.type){a(q,H.sibling),ft=u(H,j.props),js(ft,j),ft.return=q,q=ft;break t}a(q,H);break}else n(q,H);H=H.sibling}j.type===R?(ft=qa(j.props.children,q.mode,ft,j.key),ft.return=q,q=ft):(ft=tl(j.type,j.key,j.props,null,q.mode,ft),js(ft,j),ft.return=q,q=ft)}return g(q);case A:t:{for(Wt=j.key;H!==null;){if(H.key===Wt)if(H.tag===4&&H.stateNode.containerInfo===j.containerInfo&&H.stateNode.implementation===j.implementation){a(q,H.sibling),ft=u(H,j.children||[]),ft.return=q,q=ft;break t}else{a(q,H);break}else n(q,H);H=H.sibling}ft=lc(j,q.mode,ft),ft.return=q,q=ft}return g(q);case Q:return j=Qa(j),Ue(q,H,j,ft)}if(ct(j))return Bt(q,H,j,ft);if(lt(j)){if(Wt=lt(j),typeof Wt!="function")throw Error(r(150));return j=Wt.call(j),Kt(q,H,j,ft)}if(typeof j.then=="function")return Ue(q,H,ol(j),ft);if(j.$$typeof===D)return Ue(q,H,il(q,j),ft);ll(q,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,H!==null&&H.tag===6?(a(q,H.sibling),ft=u(H,j),ft.return=q,q=ft):(a(q,H),ft=oc(j,q.mode,ft),ft.return=q,q=ft),g(q)):a(q,H)}return function(q,H,j,ft){try{Zs=0;var Wt=Ue(q,H,j,ft);return Br=null,Wt}catch(Ht){if(Ht===zr||Ht===rl)throw Ht;var xe=Xn(29,Ht,null,q.mode);return xe.lanes=ft,xe.return=q,xe}}}var $a=pp(!0),mp=pp(!1),fa=!1;function xc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function da(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Me&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=$o(t),Jd(t,null,a),n}return Jo(t,s,n,a),$o(t)}function Ks(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Sr(t,a)}}function Mc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ec=!1;function Qs(){if(Ec){var t=Pr;if(t!==null)throw t}}function Js(t,n,a,s){Ec=!1;var u=t.updateQueue;fa=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var B=E,K=B.next;B.next=null,g===null?f=K:g.next=K,g=B;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==g&&(E===null?ut.firstBaseUpdate=K:E.next=K,ut.lastBaseUpdate=B))}if(f!==null){var pt=u.baseState;g=0,ut=K=B=null,E=f;do{var $=E.lane&-536870913,st=$!==E.lane;if(st?(de&$)===$:(s&$)===$){$!==0&&$===Or&&(Ec=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Bt=t,Kt=E;$=n;var Ue=a;switch(Kt.tag){case 1:if(Bt=Kt.payload,typeof Bt=="function"){pt=Bt.call(Ue,pt,$);break t}pt=Bt;break t;case 3:Bt.flags=Bt.flags&-65537|128;case 0:if(Bt=Kt.payload,$=typeof Bt=="function"?Bt.call(Ue,pt,$):Bt,$==null)break t;pt=v({},pt,$);break t;case 2:fa=!0}}$=E.callback,$!==null&&(t.flags|=64,st&&(t.flags|=8192),st=u.callbacks,st===null?u.callbacks=[$]:st.push($))}else st={lane:$,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?(K=ut=st,B=pt):ut=ut.next=st,g|=$;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;st=E,E=st.next,st.next=null,u.lastBaseUpdate=st,u.shared.pending=null}}while(!0);ut===null&&(B=pt),u.baseState=B,u.firstBaseUpdate=K,u.lastBaseUpdate=ut,f===null&&(u.shared.lanes=0),va|=g,t.lanes=g,t.memoizedState=pt}}function gp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function _p(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)gp(a[t],n)}var Ir=U(null),ul=U(0);function vp(t,n){t=Hi,St(ul,t),St(Ir,n),Hi=t|n.baseLanes}function Tc(){St(ul,Hi),St(Ir,Ir.current)}function Ac(){Hi=ul.current,tt(Ir),tt(ul)}var kn=U(null),ni=null;function pa(t){var n=t.alternate;St(Ke,Ke.current&1),St(kn,t),ni===null&&(n===null||Ir.current!==null||n.memoizedState!==null)&&(ni=t)}function bc(t){St(Ke,Ke.current),St(kn,t),ni===null&&(ni=t)}function Sp(t){t.tag===22?(St(Ke,Ke.current),St(kn,t),ni===null&&(ni=t)):ma()}function ma(){St(Ke,Ke.current),St(kn,kn.current)}function Wn(t){tt(kn),ni===t&&(ni=null),tt(Ke)}var Ke=U(0);function cl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Nf(a)||Of(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Li=0,ie=null,we=null,tn=null,fl=!1,Fr=!1,tr=!1,hl=0,$s=0,Hr=null,Fv=0;function qe(){throw Error(r(321))}function Rc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Vn(t[a],n[a]))return!1;return!0}function Cc(t,n,a,s,u,f){return Li=f,ie=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?nm:Xc,tr=!1,f=a(s,u),tr=!1,Fr&&(f=yp(n,a,s,u)),xp(t),f}function xp(t){P.H=no;var n=we!==null&&we.next!==null;if(Li=0,tn=we=ie=null,fl=!1,$s=0,Hr=null,n)throw Error(r(300));t===null||en||(t=t.dependencies,t!==null&&nl(t)&&(en=!0))}function yp(t,n,a,s){ie=t;var u=0;do{if(Fr&&(Hr=null),$s=0,Fr=!1,25<=u)throw Error(r(301));if(u+=1,tn=we=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=im,f=n(a,s)}while(Fr);return f}function Hv(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?to(n):n,t=t.useState()[0],(we!==null?we.memoizedState:null)!==t&&(ie.flags|=1024),n}function wc(){var t=hl!==0;return hl=0,t}function Dc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Uc(t){if(fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}fl=!1}Li=0,tn=we=ie=null,Fr=!1,$s=hl=0,Hr=null}function Rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?ie.memoizedState=tn=t:tn=tn.next=t,tn}function Qe(){if(we===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=we.next;var n=tn===null?ie.memoizedState:tn.next;if(n!==null)tn=n,we=t;else{if(t===null)throw ie.alternate===null?Error(r(467)):Error(r(310));we=t,t={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},tn===null?ie.memoizedState=tn=t:tn=tn.next=t}return tn}function dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(t){var n=$s;return $s+=1,Hr===null&&(Hr=[]),t=fp(Hr,t,n),n=ie,(tn===null?n.memoizedState:tn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?nm:Xc),t}function pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return to(t);if(t.$$typeof===D)return gn(t)}throw Error(r(438,String(t)))}function Lc(t){var n=null,a=ie.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ie.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=dl(),ie.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=b;return n.index++,a}function Ni(t,n){return typeof n=="function"?n(t):n}function ml(t){var n=Qe();return Nc(n,we,t)}function Nc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var E=g=null,B=null,K=n,ut=!1;do{var pt=K.lane&-536870913;if(pt!==K.lane?(de&pt)===pt:(Li&pt)===pt){var $=K.revertLane;if($===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),pt===Or&&(ut=!0);else if((Li&$)===$){K=K.next,$===Or&&(ut=!0);continue}else pt={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},B===null?(E=B=pt,g=f):B=B.next=pt,ie.lanes|=$,va|=$;pt=K.action,tr&&a(f,pt),f=K.hasEagerState?K.eagerState:a(f,pt)}else $={lane:pt,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},B===null?(E=B=$,g=f):B=B.next=$,ie.lanes|=pt,va|=pt;K=K.next}while(K!==null&&K!==n);if(B===null?g=f:B.next=E,!Vn(f,t.memoizedState)&&(en=!0,ut&&(a=Pr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=B,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Oc(t){var n=Qe(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);Vn(f,n.memoizedState)||(en=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Mp(t,n,a){var s=ie,u=Qe(),f=ge;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Vn((we||u).memoizedState,a);if(g&&(u.memoizedState=a,en=!0),u=u.queue,Bc(Ap.bind(null,s,u,t),[t]),u.getSnapshot!==n||g||tn!==null&&tn.memoizedState.tag&1){if(s.flags|=2048,Gr(9,{destroy:void 0},Tp.bind(null,s,u,a,n),null),Ne===null)throw Error(r(349));f||(Li&127)!==0||Ep(s,n,a)}return a}function Ep(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ie.updateQueue,n===null?(n=dl(),ie.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Tp(t,n,a,s){n.value=a,n.getSnapshot=s,bp(n)&&Rp(t)}function Ap(t,n,a){return a(function(){bp(n)&&Rp(t)})}function bp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Vn(t,a)}catch{return!0}}function Rp(t){var n=Wa(t,2);n!==null&&zn(n,t,2)}function Pc(t){var n=Rn();if(typeof t=="function"){var a=t;if(t=a(),tr){Yt(!0);try{a()}finally{Yt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:t},n}function Cp(t,n,a,s){return t.baseState=a,Nc(t,we,typeof s=="function"?s:Ni)}function Gv(t,n,a,s,u){if(vl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,wp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function wp(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=P.T,g={};P.T=g;try{var E=a(u,s),B=P.S;B!==null&&B(g,E),Dp(t,n,E)}catch(K){zc(t,n,K)}finally{f!==null&&g.types!==null&&(f.types=g.types),P.T=f}}else try{f=a(u,s),Dp(t,n,f)}catch(K){zc(t,n,K)}}function Dp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Up(t,n,s)},function(s){return zc(t,n,s)}):Up(t,n,a)}function Up(t,n,a){n.status="fulfilled",n.value=a,Lp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,wp(t,a)))}function zc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Lp(n),n=n.next;while(n!==s)}t.action=null}function Lp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Np(t,n){return n}function Op(t,n){if(ge){var a=Ne.formState;if(a!==null){t:{var s=ie;if(ge){if(Be){e:{for(var u=Be,f=ei;u.nodeType!==8;){if(!f){u=null;break e}if(u=ii(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Be=ii(u.nextSibling),s=u.data==="F!";break t}}ua(s)}s=!1}s&&(n=a[0])}}return a=Rn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Np,lastRenderedState:n},a.queue=s,a=$p.bind(null,ie,s),s.dispatch=a,s=Pc(!1),f=Vc.bind(null,ie,!1,s.queue),s=Rn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=Gv.bind(null,ie,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Pp(t){var n=Qe();return zp(n,we,t)}function zp(t,n,a){if(n=Nc(t,n,Np)[0],t=ml(Ni)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=to(n)}catch(g){throw g===zr?rl:g}else s=n;n=Qe();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ie.flags|=2048,Gr(9,{destroy:void 0},Vv.bind(null,u,a),null)),[s,f,t]}function Vv(t,n){t.action=n}function Bp(t){var n=Qe(),a=we;if(a!==null)return zp(n,a,t);Qe(),n=n.memoizedState,a=Qe();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Gr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ie.updateQueue,n===null&&(n=dl(),ie.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Ip(){return Qe().memoizedState}function gl(t,n,a,s){var u=Rn();ie.flags|=t,u.memoizedState=Gr(1|n,{destroy:void 0},a,s===void 0?null:s)}function _l(t,n,a,s){var u=Qe();s=s===void 0?null:s;var f=u.memoizedState.inst;we!==null&&s!==null&&Rc(s,we.memoizedState.deps)?u.memoizedState=Gr(n,f,a,s):(ie.flags|=t,u.memoizedState=Gr(1|n,f,a,s))}function Fp(t,n){gl(8390656,8,t,n)}function Bc(t,n){_l(2048,8,t,n)}function Xv(t){ie.flags|=4;var n=ie.updateQueue;if(n===null)n=dl(),ie.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Hp(t){var n=Qe().memoizedState;return Xv({ref:n,nextImpl:t}),function(){if((Me&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Gp(t,n){return _l(4,2,t,n)}function Vp(t,n){return _l(4,4,t,n)}function Xp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function kp(t,n,a){a=a!=null?a.concat([t]):null,_l(4,4,Xp.bind(null,n,t),a)}function Ic(){}function Wp(t,n){var a=Qe();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Rc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function qp(t,n){var a=Qe();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Rc(n,s[1]))return s[0];if(s=t(),tr){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[s,n],s}function Fc(t,n,a){return a===void 0||(Li&1073741824)!==0&&(de&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Ym(),ie.lanes|=t,va|=t,a)}function Yp(t,n,a,s){return Vn(a,n)?a:Ir.current!==null?(t=Fc(t,a,s),Vn(t,n)||(en=!0),t):(Li&42)===0||(Li&1073741824)!==0&&(de&261930)===0?(en=!0,t.memoizedState=a):(t=Ym(),ie.lanes|=t,va|=t,n)}function Zp(t,n,a,s,u){var f=k.p;k.p=f!==0&&8>f?f:8;var g=P.T,E={};P.T=E,Vc(t,!1,n,a);try{var B=u(),K=P.S;if(K!==null&&K(E,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ut=Iv(B,s);eo(t,n,ut,Zn(t))}else eo(t,n,s,Zn(t))}catch(pt){eo(t,n,{then:function(){},status:"rejected",reason:pt},Zn())}finally{k.p=f,g!==null&&E.types!==null&&(g.types=E.types),P.T=g}}function kv(){}function Hc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=jp(t).queue;Zp(t,u,n,V,a===null?kv:function(){return Kp(t),a(s)})}function jp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:V},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Kp(t){var n=jp(t);n.next===null&&(n=t.alternate.memoizedState),eo(t,n.next.queue,{},Zn())}function Gc(){return gn(So)}function Qp(){return Qe().memoizedState}function Jp(){return Qe().memoizedState}function Wv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();t=ha(a);var s=da(n,t,a);s!==null&&(zn(s,n,a),Ks(s,n,a)),n={cache:gc()},t.payload=n;return}n=n.return}}function qv(t,n,a){var s=Zn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vl(t)?tm(n,a):(a=rc(t,n,a,s),a!==null&&(zn(a,t,s),em(a,n,s)))}function $p(t,n,a){var s=Zn();eo(t,n,a,s)}function eo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(t))tm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,E=f(g,a);if(u.hasEagerState=!0,u.eagerState=E,Vn(E,g))return Jo(t,n,u,0),Ne===null&&Qo(),!1}catch{}if(a=rc(t,n,u,s),a!==null)return zn(a,t,s),em(a,n,s),!0}return!1}function Vc(t,n,a,s){if(s={lane:2,revertLane:yf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},vl(t)){if(n)throw Error(r(479))}else n=rc(t,a,s,2),n!==null&&zn(n,t,2)}function vl(t){var n=t.alternate;return t===ie||n!==null&&n===ie}function tm(t,n){Fr=fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function em(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Sr(t,a)}}var no={readContext:gn,use:pl,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe};no.useEffectEvent=qe;var nm={readContext:gn,use:pl,useCallback:function(t,n){return Rn().memoizedState=[t,n===void 0?null:n],t},useContext:gn,useEffect:Fp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,gl(4194308,4,Xp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return gl(4194308,4,t,n)},useInsertionEffect:function(t,n){gl(4,2,t,n)},useMemo:function(t,n){var a=Rn();n=n===void 0?null:n;var s=t();if(tr){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Rn();if(a!==void 0){var u=a(n);if(tr){Yt(!0);try{a(n)}finally{Yt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=qv.bind(null,ie,t),[s.memoizedState,t]},useRef:function(t){var n=Rn();return t={current:t},n.memoizedState=t},useState:function(t){t=Pc(t);var n=t.queue,a=$p.bind(null,ie,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ic,useDeferredValue:function(t,n){var a=Rn();return Fc(a,t,n)},useTransition:function(){var t=Pc(!1);return t=Zp.bind(null,ie,t.queue,!0,!1),Rn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ie,u=Rn();if(ge){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ne===null)throw Error(r(349));(de&127)!==0||Ep(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Fp(Ap.bind(null,s,f,t),[t]),s.flags|=2048,Gr(9,{destroy:void 0},Tp.bind(null,s,f,a,n),null),a},useId:function(){var t=Rn(),n=Ne.identifierPrefix;if(ge){var a=xi,s=Si;a=(s&~(1<<32-Zt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Fv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Gc,useFormState:Op,useActionState:Op,useOptimistic:function(t){var n=Rn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Vc.bind(null,ie,!0,a),a.dispatch=n,[t,n]},useMemoCache:Lc,useCacheRefresh:function(){return Rn().memoizedState=Wv.bind(null,ie)},useEffectEvent:function(t){var n=Rn(),a={impl:t};return n.memoizedState=a,function(){if((Me&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Xc={readContext:gn,use:pl,useCallback:Wp,useContext:gn,useEffect:Bc,useImperativeHandle:kp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:qp,useReducer:ml,useRef:Ip,useState:function(){return ml(Ni)},useDebugValue:Ic,useDeferredValue:function(t,n){var a=Qe();return Yp(a,we.memoizedState,t,n)},useTransition:function(){var t=ml(Ni)[0],n=Qe().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Mp,useId:Qp,useHostTransitionStatus:Gc,useFormState:Pp,useActionState:Pp,useOptimistic:function(t,n){var a=Qe();return Cp(a,we,t,n)},useMemoCache:Lc,useCacheRefresh:Jp};Xc.useEffectEvent=Hp;var im={readContext:gn,use:pl,useCallback:Wp,useContext:gn,useEffect:Bc,useImperativeHandle:kp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:qp,useReducer:Oc,useRef:Ip,useState:function(){return Oc(Ni)},useDebugValue:Ic,useDeferredValue:function(t,n){var a=Qe();return we===null?Fc(a,t,n):Yp(a,we.memoizedState,t,n)},useTransition:function(){var t=Oc(Ni)[0],n=Qe().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Mp,useId:Qp,useHostTransitionStatus:Gc,useFormState:Bp,useActionState:Bp,useOptimistic:function(t,n){var a=Qe();return we!==null?Cp(a,we,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Lc,useCacheRefresh:Jp};im.useEffectEvent=Hp;function kc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Wc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Zn(),u=ha(s);u.payload=n,a!=null&&(u.callback=a),n=da(t,u,s),n!==null&&(zn(n,t,s),Ks(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Zn(),u=ha(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=da(t,u,s),n!==null&&(zn(n,t,s),Ks(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Zn(),s=ha(a);s.tag=2,n!=null&&(s.callback=n),n=da(t,s,a),n!==null&&(zn(n,t,a),Ks(n,t,a))}};function am(t,n,a,s,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(u,f):!0}function rm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Wc.enqueueReplaceState(n,n.state,null)}function er(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function sm(t){Ko(t)}function om(t){console.error(t)}function lm(t){Ko(t)}function Sl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function um(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function qc(t,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Sl(t,n)},a}function cm(t){return t=ha(t),t.tag=3,t}function fm(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){um(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){um(n,a,s),typeof u!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function Yv(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Nr(n,a,u,!0),a=kn.current,a!==null){switch(a.tag){case 31:case 13:return ni===null?Ul():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),vf(t,s,u)),!1;case 22:return a.flags|=65536,s===sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),vf(t,s,u)),!1}throw Error(r(435,a.tag))}return vf(t,s,u),Ul(),!1}if(ge)return n=kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==fc&&(t=Error(r(422),{cause:s}),Ws(Jn(t,a)))):(s!==fc&&(n=Error(r(423),{cause:s}),Ws(Jn(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Jn(s,a),u=qc(t.stateNode,s,u),Mc(t,u),Ye!==4&&(Ye=2)),!1;var f=Error(r(520),{cause:s});if(f=Jn(f,a),co===null?co=[f]:co.push(f),Ye!==4&&(Ye=2),n===null)return!0;s=Jn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=qc(a.stateNode,s,t),Mc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Sa===null||!Sa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=cm(u),fm(u,t,a,s),Mc(a,u),!1}a=a.return}while(a!==null);return!1}var Yc=Error(r(461)),en=!1;function _n(t,n,a,s){n.child=t===null?mp(n,null,a,s):$a(n,t.child,a,s)}function hm(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var E in s)E!=="ref"&&(g[E]=s[E])}else g=s;return ja(n),s=Cc(t,n,a,g,f,u),E=wc(),t!==null&&!en?(Dc(t,n,u),Oi(t,n,u)):(ge&&E&&uc(n),n.flags|=1,_n(t,n,s,u),n.child)}function dm(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!sc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,pm(t,n,f,s,u)):(t=tl(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!ef(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(g,s)&&t.ref===n.ref)return Oi(t,n,u)}return n.flags|=1,t=Ci(f,s),t.ref=n.ref,t.return=n,n.child=t}function pm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Vs(f,s)&&t.ref===n.ref)if(en=!1,n.pendingProps=s=f,ef(t,u))(t.flags&131072)!==0&&(en=!0);else return n.lanes=t.lanes,Oi(t,n,u)}return Zc(t,n,a,s,u)}function mm(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return gm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,f!==null?f.cachePool:null),f!==null?vp(n,f):Tc(),Sp(n);else return s=n.lanes=536870912,gm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(al(n,f.cachePool),vp(n,f),ma(),n.memoizedState=null):(t!==null&&al(n,null),Tc(),ma());return _n(t,n,u,a),n.child}function io(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function gm(t,n,a,s,u){var f=vc();return f=f===null?null:{parent:$e._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&al(n,null),Tc(),Sp(n),t!==null&&Nr(t,n,s,!0),n.childLanes=u,null}function xl(t,n){return n=Ml({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function _m(t,n,a){return $a(n,t.child,null,a),t=xl(n,n.pendingProps),t.flags|=2,Wn(n),n.memoizedState=null,t}function Zv(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ge){if(s.mode==="hidden")return t=xl(n,s),n.lanes=536870912,io(null,t);if(bc(n),(t=Be)?(t=wg(t,ei),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:oa!==null?{id:Si,overflow:xi}:null,retryLane:536870912,hydrationErrors:null},a=tp(t),a.return=n,n.child=a,mn=n,Be=null)):t=null,t===null)throw ua(n);return n.lanes=536870912,null}return xl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(bc(n),u)if(n.flags&256)n.flags&=-257,n=_m(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(en||Nr(t,n,a,!1),u=(a&t.childLanes)!==0,en||u){if(s=Ne,s!==null&&(g=ws(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,Wa(t,g),zn(s,t,g),Yc;Ul(),n=_m(t,n,a)}else t=f.treeContext,Be=ii(g.nextSibling),mn=n,ge=!0,la=null,ei=!1,t!==null&&ip(n,t),n=xl(n,s),n.flags|=4096;return n}return t=Ci(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function yl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Zc(t,n,a,s,u){return ja(n),a=Cc(t,n,a,s,void 0,u),s=wc(),t!==null&&!en?(Dc(t,n,u),Oi(t,n,u)):(ge&&s&&uc(n),n.flags|=1,_n(t,n,a,u),n.child)}function vm(t,n,a,s,u,f){return ja(n),n.updateQueue=null,a=yp(n,s,a,u),xp(t),s=wc(),t!==null&&!en?(Dc(t,n,f),Oi(t,n,f)):(ge&&s&&uc(n),n.flags|=1,_n(t,n,a,f),n.child)}function Sm(t,n,a,s,u){if(ja(n),n.stateNode===null){var f=wr,g=a.contextType;typeof g=="object"&&g!==null&&(f=gn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Wc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},xc(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?gn(g):wr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(kc(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Wc.enqueueReplaceState(f,f.state,null),Js(n,s,f,u),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,B=er(a,E);f.props=B;var K=f.context,ut=a.contextType;g=wr,typeof ut=="object"&&ut!==null&&(g=gn(ut));var pt=a.getDerivedStateFromProps;ut=typeof pt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||K!==g)&&rm(n,f,s,g),fa=!1;var $=n.memoizedState;f.state=$,Js(n,s,f,u),Qs(),K=n.memoizedState,E||$!==K||fa?(typeof pt=="function"&&(kc(n,a,pt,s),K=n.memoizedState),(B=fa||am(n,a,B,s,$,K,g))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=K),f.props=s,f.state=K,f.context=g,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,yc(t,n),g=n.memoizedProps,ut=er(a,g),f.props=ut,pt=n.pendingProps,$=f.context,K=a.contextType,B=wr,typeof K=="object"&&K!==null&&(B=gn(K)),E=a.getDerivedStateFromProps,(K=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==pt||$!==B)&&rm(n,f,s,B),fa=!1,$=n.memoizedState,f.state=$,Js(n,s,f,u),Qs();var st=n.memoizedState;g!==pt||$!==st||fa||t!==null&&t.dependencies!==null&&nl(t.dependencies)?(typeof E=="function"&&(kc(n,a,E,s),st=n.memoizedState),(ut=fa||am(n,a,ut,s,$,st,B)||t!==null&&t.dependencies!==null&&nl(t.dependencies))?(K||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,st,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,st,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=st),f.props=s,f.state=st,f.context=B,s=ut):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,yl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=$a(n,t.child,null,u),n.child=$a(n,null,a,u)):_n(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Oi(t,n,u),t}function xm(t,n,a,s){return Ya(),n.flags|=256,_n(t,n,a,s),n.child}var jc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kc(t){return{baseLanes:t,cachePool:up()}}function Qc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Yn),t}function ym(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(Ke.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(ge){if(u?pa(n):ma(),(t=Be)?(t=wg(t,ei),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:oa!==null?{id:Si,overflow:xi}:null,retryLane:536870912,hydrationErrors:null},a=tp(t),a.return=n,n.child=a,mn=n,Be=null)):t=null,t===null)throw ua(n);return Of(t)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,u?(ma(),u=n.mode,E=Ml({mode:"hidden",children:E},u),s=qa(s,u,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=Kc(a),s.childLanes=Qc(t,g,a),n.memoizedState=jc,io(null,s)):(pa(n),Jc(n,E))}var B=t.memoizedState;if(B!==null&&(E=B.dehydrated,E!==null)){if(f)n.flags&256?(pa(n),n.flags&=-257,n=$c(t,n,a)):n.memoizedState!==null?(ma(),n.child=t.child,n.flags|=128,n=null):(ma(),E=s.fallback,u=n.mode,s=Ml({mode:"visible",children:s.children},u),E=qa(E,u,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,$a(n,t.child,null,a),s=n.child,s.memoizedState=Kc(a),s.childLanes=Qc(t,g,a),n.memoizedState=jc,n=io(null,s));else if(pa(n),Of(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var K=g.dgst;g=K,s=Error(r(419)),s.stack="",s.digest=g,Ws({value:s,source:null,stack:null}),n=$c(t,n,a)}else if(en||Nr(t,n,a,!1),g=(a&t.childLanes)!==0,en||g){if(g=Ne,g!==null&&(s=ws(g,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,Wa(t,s),zn(g,t,s),Yc;Nf(E)||Ul(),n=$c(t,n,a)}else Nf(E)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Be=ii(E.nextSibling),mn=n,ge=!0,la=null,ei=!1,t!==null&&ip(n,t),n=Jc(n,s.children),n.flags|=4096);return n}return u?(ma(),E=s.fallback,u=n.mode,B=t.child,K=B.sibling,s=Ci(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,K!==null?E=Ci(K,E):(E=qa(E,u,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,io(null,s),s=n.child,E=t.child.memoizedState,E===null?E=Kc(a):(u=E.cachePool,u!==null?(B=$e._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=up(),E={baseLanes:E.baseLanes|a,cachePool:u}),s.memoizedState=E,s.childLanes=Qc(t,g,a),n.memoizedState=jc,io(t.child,s)):(pa(n),a=t.child,t=a.sibling,a=Ci(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Jc(t,n){return n=Ml({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ml(t,n){return t=Xn(22,t,null,n),t.lanes=0,t}function $c(t,n,a){return $a(n,t.child,null,a),t=Jc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Mm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),pc(t.return,n,a)}function tf(t,n,a,s,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function Em(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var g=Ke.current,E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,St(Ke,g),_n(t,n,s,a),s=ge?ks:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mm(t,a,n);else if(t.tag===19)Mm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&cl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),tf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&cl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}tf(n,!0,a,null,f,s);break;case"together":tf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Oi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),va|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Nr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ci(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ci(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ef(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&nl(t)))}function jv(t,n,a){switch(n.tag){case 3:Ft(n,n.stateNode.containerInfo),ca(n,$e,t.memoizedState.cache),Ya();break;case 27:case 5:ee(n);break;case 4:Ft(n,n.stateNode.containerInfo);break;case 10:ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,bc(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ym(t,n,a):(pa(n),t=Oi(t,n,a),t!==null?t.sibling:null);pa(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Nr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Em(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(Ke,Ke.current),s)break;return null;case 22:return n.lanes=0,mm(t,n,a,n.pendingProps);case 24:ca(n,$e,t.memoizedState.cache)}return Oi(t,n,a)}function Tm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)en=!0;else{if(!ef(t,a)&&(n.flags&128)===0)return en=!1,jv(t,n,a);en=(t.flags&131072)!==0}else en=!1,ge&&(n.flags&1048576)!==0&&np(n,ks,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Qa(n.elementType),n.type=t,typeof t=="function")sc(t)?(s=er(t,s),n.tag=1,n=Sm(null,n,t,s,a)):(n.tag=0,n=Zc(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===O){n.tag=11,n=hm(null,n,t,s,a);break t}else if(u===L){n.tag=14,n=dm(null,n,t,s,a);break t}}throw n=ht(t)||t,Error(r(306,n,""))}}return n;case 0:return Zc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=er(s,n.pendingProps),Sm(t,n,s,u,a);case 3:t:{if(Ft(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,yc(t,n),Js(n,s,null,a);var g=n.memoizedState;if(s=g.cache,ca(n,$e,s),s!==f.cache&&mc(n,[$e],a,!0),Qs(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=xm(t,n,s,a);break t}else if(s!==u){u=Jn(Error(r(424)),n),Ws(u),n=xm(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Be=ii(t.firstChild),mn=n,ge=!0,la=null,ei=!0,a=mp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ya(),s===u){n=Oi(t,n,a);break t}_n(t,n,s,a)}n=n.child}return n;case 26:return yl(t,n),t===null?(a=Pg(n.type,null,n.pendingProps,null))?n.memoizedState=a:ge||(a=n.type,t=n.pendingProps,s=Il(yt.current).createElement(a),s[Je]=n,s[xn]=t,vn(s,a,t),zt(s),n.stateNode=s):n.memoizedState=Pg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ee(n),t===null&&ge&&(s=n.stateNode=Lg(n.type,n.pendingProps,yt.current),mn=n,ei=!0,u=Be,Ea(n.type)?(Pf=u,Be=ii(s.firstChild)):Be=u),_n(t,n,n.pendingProps.children,a),yl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ge&&((u=s=Be)&&(s=AS(s,n.type,n.pendingProps,ei),s!==null?(n.stateNode=s,mn=n,Be=ii(s.firstChild),ei=!1,u=!0):u=!1),u||ua(n)),ee(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Df(u,f)?s=null:g!==null&&Df(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Cc(t,n,Hv,null,null,a),So._currentValue=u),yl(t,n),_n(t,n,s,a),n.child;case 6:return t===null&&ge&&((t=a=Be)&&(a=bS(a,n.pendingProps,ei),a!==null?(n.stateNode=a,mn=n,Be=null,t=!0):t=!1),t||ua(n)),null;case 13:return ym(t,n,a);case 4:return Ft(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=$a(n,null,s,a):_n(t,n,s,a),n.child;case 11:return hm(t,n,n.type,n.pendingProps,a);case 7:return _n(t,n,n.pendingProps,a),n.child;case 8:return _n(t,n,n.pendingProps.children,a),n.child;case 12:return _n(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ca(n,n.type,s.value),_n(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,ja(n),u=gn(u),s=s(u),n.flags|=1,_n(t,n,s,a),n.child;case 14:return dm(t,n,n.type,n.pendingProps,a);case 15:return pm(t,n,n.type,n.pendingProps,a);case 19:return Em(t,n,a);case 31:return Zv(t,n,a);case 22:return mm(t,n,a,n.pendingProps);case 24:return ja(n),s=gn($e),t===null?(u=vc(),u===null&&(u=Ne,f=gc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},xc(n),ca(n,$e,u)):((t.lanes&a)!==0&&(yc(t,n),Js(n,null,null,a),Qs()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ca(n,$e,s)):(s=f.cache,ca(n,$e,s),s!==u.cache&&mc(n,[$e],a,!0))),_n(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Pi(t){t.flags|=4}function nf(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Qm())t.flags|=8192;else throw Ja=sl,Sc}else t.flags&=-16777217}function Am(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Hg(n))if(Qm())t.flags|=8192;else throw Ja=sl,Sc}function El(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?_e():536870912,t.lanes|=n,Wr|=n)}function ao(t,n){if(!ge)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ie(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Kv(t,n,a){var s=n.pendingProps;switch(cc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(n),null;case 1:return Ie(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ui($e),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Lr(n)?Pi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hc())),Ie(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Pi(n),f!==null?(Ie(n),Am(n,f)):(Ie(n),nf(n,u,null,s,a))):f?f!==t.memoizedState?(Pi(n),Ie(n),Am(n,f)):(Ie(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Pi(n),Ie(n),nf(n,u,t,s,a)),null;case 27:if(Le(n),a=yt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Pi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ie(n),null}t=Y.current,Lr(n)?ap(n):(t=Lg(u,s,a),n.stateNode=t,Pi(n))}return Ie(n),null;case 5:if(Le(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Pi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ie(n),null}if(f=Y.current,Lr(n))ap(n);else{var g=Il(yt.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(u,{is:s.is}):g.createElement(u)}}f[Je]=n,f[xn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(vn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Pi(n)}}return Ie(n),nf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Pi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=yt.current,Lr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=mn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[Je]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||yg(t.nodeValue,a)),t||ua(n,!0)}else t=Il(t).createTextNode(s),t[Je]=n,n.stateNode=t}return Ie(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Lr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Je]=n}else Ya(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ie(n),t=!1}else a=hc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Wn(n),n):(Wn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ie(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Lr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Je]=n}else Ya(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ie(n),u=!1}else u=hc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Wn(n),n):(Wn(n),null)}return Wn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),El(n,n.updateQueue),Ie(n),null);case 4:return It(),t===null&&Af(n.stateNode.containerInfo),Ie(n),null;case 10:return Ui(n.type),Ie(n),null;case 19:if(tt(Ke),s=n.memoizedState,s===null)return Ie(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)ao(s,!1);else{if(Ye!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=cl(t),f!==null){for(n.flags|=128,ao(s,!1),t=f.updateQueue,n.updateQueue=t,El(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)$d(a,t),a=a.sibling;return St(Ke,Ke.current&1|2),ge&&wi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&mt()>Cl&&(n.flags|=128,u=!0,ao(s,!1),n.lanes=4194304)}else{if(!u)if(t=cl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,El(n,t),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!ge)return Ie(n),null}else 2*mt()-s.renderingStartTime>Cl&&a!==536870912&&(n.flags|=128,u=!0,ao(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=mt(),t.sibling=null,a=Ke.current,St(Ke,u?a&1|2:a&1),ge&&wi(n,s.treeForkCount),t):(Ie(n),null);case 22:case 23:return Wn(n),Ac(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ie(n),n.subtreeFlags&6&&(n.flags|=8192)):Ie(n),a=n.updateQueue,a!==null&&El(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&tt(Ka),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ui($e),Ie(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Qv(t,n){switch(cc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ui($e),It(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 31:if(n.memoizedState!==null){if(Wn(n),n.alternate===null)throw Error(r(340));Ya()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Wn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ya()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return tt(Ke),null;case 4:return It(),null;case 10:return Ui(n.type),null;case 22:case 23:return Wn(n),Ac(),t!==null&&tt(Ka),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ui($e),null;case 25:return null;default:return null}}function bm(t,n){switch(cc(n),n.tag){case 3:Ui($e),It();break;case 26:case 27:case 5:Le(n);break;case 4:It();break;case 31:n.memoizedState!==null&&Wn(n);break;case 13:Wn(n);break;case 19:tt(Ke);break;case 10:Ui(n.type);break;case 22:case 23:Wn(n),Ac(),t!==null&&tt(Ka);break;case 24:Ui($e)}}function ro(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==u)}}catch(E){Ce(n,n.return,E)}}function ga(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var g=s.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,u=n;var B=a,K=E;try{K()}catch(ut){Ce(u,B,ut)}}}s=s.next}while(s!==f)}}catch(ut){Ce(n,n.return,ut)}}function Rm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{_p(n,a)}catch(s){Ce(t,t.return,s)}}}function Cm(t,n,a){a.props=er(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ce(t,n,s)}}function so(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Ce(t,n,u)}}function yi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ce(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ce(t,n,u)}else a.current=null}function wm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ce(t,t.return,u)}}function af(t,n,a){try{var s=t.stateNode;SS(s,t.type,a,n),s[xn]=n}catch(u){Ce(t,t.return,u)}}function Dm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ea(t.type)||t.tag===4}function rf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Dm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ea(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=bi));else if(s!==4&&(s===27&&Ea(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(sf(t,n,a),t=t.sibling;t!==null;)sf(t,n,a),t=t.sibling}function Tl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ea(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Tl(t,n,a),t=t.sibling;t!==null;)Tl(t,n,a),t=t.sibling}function Um(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);vn(n,s,a),n[Je]=t,n[xn]=a}catch(f){Ce(t,t.return,f)}}var zi=!1,nn=!1,of=!1,Lm=typeof WeakSet=="function"?WeakSet:Set,fn=null;function Jv(t,n){if(t=t.containerInfo,Cf=Wl,t=kd(t),$u(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,E=-1,B=-1,K=0,ut=0,pt=t,$=null;e:for(;;){for(var st;pt!==a||u!==0&&pt.nodeType!==3||(E=g+u),pt!==f||s!==0&&pt.nodeType!==3||(B=g+s),pt.nodeType===3&&(g+=pt.nodeValue.length),(st=pt.firstChild)!==null;)$=pt,pt=st;for(;;){if(pt===t)break e;if($===a&&++K===u&&(E=g),$===f&&++ut===s&&(B=g),(st=pt.nextSibling)!==null)break;pt=$,$=pt.parentNode}pt=st}a=E===-1||B===-1?null:{start:E,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(wf={focusedElem:t,selectionRange:a},Wl=!1,fn=n;fn!==null;)if(n=fn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,fn=t;else for(;fn!==null;){switch(n=fn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Bt=er(a.type,u);t=s.getSnapshotBeforeUpdate(Bt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Kt){Ce(a,a.return,Kt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Lf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Lf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,fn=t;break}fn=n.return}}function Nm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ii(t,a),s&4&&ro(5,a);break;case 1:if(Ii(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Ce(a,a.return,g)}else{var u=er(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ce(a,a.return,g)}}s&64&&Rm(a),s&512&&so(a,a.return);break;case 3:if(Ii(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{_p(t,n)}catch(g){Ce(a,a.return,g)}}break;case 27:n===null&&s&4&&Um(a);case 26:case 5:Ii(t,a),n===null&&s&4&&wm(a),s&512&&so(a,a.return);break;case 12:Ii(t,a);break;case 31:Ii(t,a),s&4&&zm(t,a);break;case 13:Ii(t,a),s&4&&Bm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=oS.bind(null,a),RS(t,a))));break;case 22:if(s=a.memoizedState!==null||zi,!s){n=n!==null&&n.memoizedState!==null||nn,u=zi;var f=nn;zi=s,(nn=n)&&!f?Fi(t,a,(a.subtreeFlags&8772)!==0):Ii(t,a),zi=u,nn=f}break;case 30:break;default:Ii(t,a)}}function Om(t){var n=t.alternate;n!==null&&(t.alternate=null,Om(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Z(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ve=null,Ln=!1;function Bi(t,n,a){for(a=a.child;a!==null;)Pm(t,n,a),a=a.sibling}function Pm(t,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(jt,a)}catch{}switch(a.tag){case 26:nn||yi(a,n),Bi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nn||yi(a,n);var s=Ve,u=Ln;Ea(a.type)&&(Ve=a.stateNode,Ln=!1),Bi(t,n,a),go(a.stateNode),Ve=s,Ln=u;break;case 5:nn||yi(a,n);case 6:if(s=Ve,u=Ln,Ve=null,Bi(t,n,a),Ve=s,Ln=u,Ve!==null)if(Ln)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(a.stateNode)}catch(f){Ce(a,n,f)}else try{Ve.removeChild(a.stateNode)}catch(f){Ce(a,n,f)}break;case 18:Ve!==null&&(Ln?(t=Ve,Rg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),$r(t)):Rg(Ve,a.stateNode));break;case 4:s=Ve,u=Ln,Ve=a.stateNode.containerInfo,Ln=!0,Bi(t,n,a),Ve=s,Ln=u;break;case 0:case 11:case 14:case 15:ga(2,a,n),nn||ga(4,a,n),Bi(t,n,a);break;case 1:nn||(yi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Cm(a,n,s)),Bi(t,n,a);break;case 21:Bi(t,n,a);break;case 22:nn=(s=nn)||a.memoizedState!==null,Bi(t,n,a),nn=s;break;default:Bi(t,n,a)}}function zm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{$r(t)}catch(a){Ce(n,n.return,a)}}}function Bm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{$r(t)}catch(a){Ce(n,n.return,a)}}function $v(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Lm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Lm),n;default:throw Error(r(435,t.tag))}}function Al(t,n){var a=$v(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=lS.bind(null,t,s);s.then(u,u)}})}function Nn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,g=n,E=g;t:for(;E!==null;){switch(E.tag){case 27:if(Ea(E.type)){Ve=E.stateNode,Ln=!1;break t}break;case 5:Ve=E.stateNode,Ln=!1;break t;case 3:case 4:Ve=E.stateNode.containerInfo,Ln=!0;break t}E=E.return}if(Ve===null)throw Error(r(160));Pm(f,g,u),Ve=null,Ln=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Im(n,t),n=n.sibling}var fi=null;function Im(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Nn(n,t),On(t),s&4&&(ga(3,t,t.return),ro(3,t),ga(5,t,t.return));break;case 1:Nn(n,t),On(t),s&512&&(nn||a===null||yi(a,a.return)),s&64&&zi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=fi;if(Nn(n,t),On(t),s&512&&(nn||a===null||yi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[nt]||f[Je]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),vn(f,s,a),f[Je]=t,zt(f),s=f;break t;case"link":var g=Ig("link","href",u).get(s+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(f=g[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break e}}f=u.createElement(s),vn(f,s,a),u.head.appendChild(f);break;case"meta":if(g=Ig("meta","content",u).get(s+(a.content||""))){for(E=0;E<g.length;E++)if(f=g[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break e}}f=u.createElement(s),vn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[Je]=t,zt(f),s=f}t.stateNode=s}else Fg(u,t.type,t.stateNode);else t.stateNode=Bg(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Fg(u,t.type,t.stateNode):Bg(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&af(t,t.memoizedProps,a.memoizedProps)}break;case 27:Nn(n,t),On(t),s&512&&(nn||a===null||yi(a,a.return)),a!==null&&s&4&&af(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Nn(n,t),On(t),s&512&&(nn||a===null||yi(a,a.return)),t.flags&32){u=t.stateNode;try{Mr(u,"")}catch(Bt){Ce(t,t.return,Bt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,af(t,u,a!==null?a.memoizedProps:u)),s&1024&&(of=!0);break;case 6:if(Nn(n,t),On(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Bt){Ce(t,t.return,Bt)}}break;case 3:if(Gl=null,u=fi,fi=Fl(n.containerInfo),Nn(n,t),fi=u,On(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{$r(n.containerInfo)}catch(Bt){Ce(t,t.return,Bt)}of&&(of=!1,Fm(t));break;case 4:s=fi,fi=Fl(t.stateNode.containerInfo),Nn(n,t),On(t),fi=s;break;case 12:Nn(n,t),On(t);break;case 31:Nn(n,t),On(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Al(t,s)));break;case 13:Nn(n,t),On(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rl=mt()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Al(t,s)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,K=zi,ut=nn;if(zi=K||u,nn=ut||B,Nn(n,t),nn=ut,zi=K,On(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||zi||nn||nr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=B.stateNode;var pt=B.memoizedProps.style,$=pt!=null&&pt.hasOwnProperty("display")?pt.display:null;E.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Bt){Ce(B,B.return,Bt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Bt){Ce(B,B.return,Bt)}}}else if(n.tag===18){if(a===null){B=n;try{var st=B.stateNode;u?Cg(st,!0):Cg(B.stateNode,!1)}catch(Bt){Ce(B,B.return,Bt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Al(t,a))));break;case 19:Nn(n,t),On(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Al(t,s)));break;case 30:break;case 21:break;default:Nn(n,t),On(t)}}function On(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Dm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=rf(t);Tl(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(Mr(g,""),a.flags&=-33);var E=rf(t);Tl(t,E,g);break;case 3:case 4:var B=a.stateNode.containerInfo,K=rf(t);sf(t,K,B);break;default:throw Error(r(161))}}catch(ut){Ce(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Fm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Fm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ii(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Nm(t,n.alternate,n),n=n.sibling}function nr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ga(4,n,n.return),nr(n);break;case 1:yi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Cm(n,n.return,a),nr(n);break;case 27:go(n.stateNode);case 26:case 5:yi(n,n.return),nr(n);break;case 22:n.memoizedState===null&&nr(n);break;case 30:nr(n);break;default:nr(n)}t=t.sibling}}function Fi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Fi(u,f,a),ro(4,f);break;case 1:if(Fi(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(K){Ce(s,s.return,K)}if(s=f,u=s.updateQueue,u!==null){var E=s.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)gp(B[u],E)}catch(K){Ce(s,s.return,K)}}a&&g&64&&Rm(f),so(f,f.return);break;case 27:Um(f);case 26:case 5:Fi(u,f,a),a&&s===null&&g&4&&wm(f),so(f,f.return);break;case 12:Fi(u,f,a);break;case 31:Fi(u,f,a),a&&g&4&&zm(u,f);break;case 13:Fi(u,f,a),a&&g&4&&Bm(u,f);break;case 22:f.memoizedState===null&&Fi(u,f,a),so(f,f.return);break;case 30:break;default:Fi(u,f,a)}n=n.sibling}}function lf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&qs(a))}function uf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t))}function hi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Hm(t,n,a,s),n=n.sibling}function Hm(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:hi(t,n,a,s),u&2048&&ro(9,n);break;case 1:hi(t,n,a,s);break;case 3:hi(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t)));break;case 12:if(u&2048){hi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,E=f.onPostCommit;typeof E=="function"&&E(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Ce(n,n.return,B)}}else hi(t,n,a,s);break;case 31:hi(t,n,a,s);break;case 13:hi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?hi(t,n,a,s):oo(t,n):f._visibility&2?hi(t,n,a,s):(f._visibility|=2,Vr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&lf(g,n);break;case 24:hi(t,n,a,s),u&2048&&uf(n.alternate,n);break;default:hi(t,n,a,s)}}function Vr(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,E=a,B=s,K=g.flags;switch(g.tag){case 0:case 11:case 15:Vr(f,g,E,B,u),ro(8,g);break;case 23:break;case 22:var ut=g.stateNode;g.memoizedState!==null?ut._visibility&2?Vr(f,g,E,B,u):oo(f,g):(ut._visibility|=2,Vr(f,g,E,B,u)),u&&K&2048&&lf(g.alternate,g);break;case 24:Vr(f,g,E,B,u),u&&K&2048&&uf(g.alternate,g);break;default:Vr(f,g,E,B,u)}n=n.sibling}}function oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:oo(a,s),u&2048&&lf(s.alternate,s);break;case 24:oo(a,s),u&2048&&uf(s.alternate,s);break;default:oo(a,s)}n=n.sibling}}var lo=8192;function Xr(t,n,a){if(t.subtreeFlags&lo)for(t=t.child;t!==null;)Gm(t,n,a),t=t.sibling}function Gm(t,n,a){switch(t.tag){case 26:Xr(t,n,a),t.flags&lo&&t.memoizedState!==null&&FS(a,fi,t.memoizedState,t.memoizedProps);break;case 5:Xr(t,n,a);break;case 3:case 4:var s=fi;fi=Fl(t.stateNode.containerInfo),Xr(t,n,a),fi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=lo,lo=16777216,Xr(t,n,a),lo=s):Xr(t,n,a));break;default:Xr(t,n,a)}}function Vm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];fn=s,km(s,t)}Vm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Xm(t),t=t.sibling}function Xm(t){switch(t.tag){case 0:case 11:case 15:uo(t),t.flags&2048&&ga(9,t,t.return);break;case 3:uo(t);break;case 12:uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,bl(t)):uo(t);break;default:uo(t)}}function bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];fn=s,km(s,t)}Vm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ga(8,n,n.return),bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,bl(n));break;default:bl(n)}t=t.sibling}}function km(t,n){for(;fn!==null;){var a=fn;switch(a.tag){case 0:case 11:case 15:ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,fn=s;else t:for(a=t;fn!==null;){s=fn;var u=s.sibling,f=s.return;if(Om(s),s===a){fn=null;break t}if(u!==null){u.return=f,fn=u;break t}fn=f}}}var tS={getCacheForType:function(t){var n=gn($e),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return gn($e).controller.signal}},eS=typeof WeakMap=="function"?WeakMap:Map,Me=0,Ne=null,ce=null,de=0,Re=0,qn=null,_a=!1,kr=!1,cf=!1,Hi=0,Ye=0,va=0,ir=0,ff=0,Yn=0,Wr=0,co=null,Pn=null,hf=!1,Rl=0,Wm=0,Cl=1/0,wl=null,Sa=null,ln=0,xa=null,qr=null,Gi=0,df=0,pf=null,qm=null,fo=0,mf=null;function Zn(){return(Me&2)!==0&&de!==0?de&-de:P.T!==null?yf():Ds()}function Ym(){if(Yn===0)if((de&536870912)===0||ge){var t=gt;gt<<=1,(gt&3932160)===0&&(gt=262144),Yn=t}else Yn=536870912;return t=kn.current,t!==null&&(t.flags|=32),Yn}function zn(t,n,a){(t===Ne&&(Re===2||Re===9)||t.cancelPendingCommit!==null)&&(Yr(t,0),ya(t,de,Yn,!1)),Sn(t,a),((Me&2)===0||t!==Ne)&&(t===Ne&&((Me&2)===0&&(ir|=a),Ye===4&&ya(t,de,Yn,!1)),Mi(t))}function Zm(t,n,a){if((Me&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Pe(t,n),u=s?aS(t,n):_f(t,n,!0),f=s;do{if(u===0){kr&&!s&&ya(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!nS(a)){u=_f(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;u=co;var B=E.current.memoizedState.isDehydrated;if(B&&(Yr(E,g).flags|=256),g=_f(E,g,!1),g!==2){if(cf&&!B){E.errorRecoveryDisabledLanes|=f,ir|=f,u=4;break t}f=Pn,Pn=u,f!==null&&(Pn===null?Pn=f:Pn.push.apply(Pn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){Yr(t,0),ya(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ya(s,n,Yn,!_a);break t;case 2:Pn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Rl+300-mt(),10<u)){if(ya(s,n,Yn,!_a),oe(s,0,!0)!==0)break t;Gi=n,s.timeoutHandle=Ag(jm.bind(null,s,a,Pn,wl,hf,n,Yn,ir,Wr,_a,f,"Throttled",-0,0),u);break t}jm(s,a,Pn,wl,hf,n,Yn,ir,Wr,_a,f,null,-0,0)}}break}while(!0);Mi(t)}function jm(t,n,a,s,u,f,g,E,B,K,ut,pt,$,st){if(t.timeoutHandle=-1,pt=n.subtreeFlags,pt&8192||(pt&16785408)===16785408){pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bi},Gm(n,f,pt);var Bt=(f&62914560)===f?Rl-mt():(f&4194048)===f?Wm-mt():0;if(Bt=HS(pt,Bt),Bt!==null){Gi=f,t.cancelPendingCommit=Bt(ig.bind(null,t,n,f,a,s,u,g,E,B,ut,pt,null,$,st)),ya(t,f,g,!K);return}}ig(t,n,f,a,s,u,g,E,B)}function nS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Vn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ya(t,n,a,s){n&=~ff,n&=~ir,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Zt(u),g=1<<f;s[f]=-1,u&=~g}a!==0&&vi(t,a,n)}function Dl(){return(Me&6)===0?(ho(0),!1):!0}function gf(){if(ce!==null){if(Re===0)var t=ce.return;else t=ce,Di=Za=null,Uc(t),Br=null,Zs=0,t=ce;for(;t!==null;)bm(t.alternate,t),t=t.return;ce=null}}function Yr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,MS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Gi=0,gf(),Ne=t,ce=a=Ci(t.current,null),de=n,Re=0,qn=null,_a=!1,kr=Pe(t,n),cf=!1,Wr=Yn=ff=ir=va=Ye=0,Pn=co=null,hf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Zt(s),f=1<<u;n|=t[u],s&=~f}return Hi=n,Qo(),a}function Km(t,n){ie=null,P.H=no,n===zr||n===rl?(n=hp(),Re=3):n===Sc?(n=hp(),Re=4):Re=n===Yc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,ce===null&&(Ye=1,Sl(t,Jn(n,t.current)))}function Qm(){var t=kn.current;return t===null?!0:(de&4194048)===de?ni===null:(de&62914560)===de||(de&536870912)!==0?t===ni:!1}function Jm(){var t=P.H;return P.H=no,t===null?no:t}function $m(){var t=P.A;return P.A=tS,t}function Ul(){Ye=4,_a||(de&4194048)!==de&&kn.current!==null||(kr=!0),(va&134217727)===0&&(ir&134217727)===0||Ne===null||ya(Ne,de,Yn,!1)}function _f(t,n,a){var s=Me;Me|=2;var u=Jm(),f=$m();(Ne!==t||de!==n)&&(wl=null,Yr(t,n)),n=!1;var g=Ye;t:do try{if(Re!==0&&ce!==null){var E=ce,B=qn;switch(Re){case 8:gf(),g=6;break t;case 3:case 2:case 9:case 6:kn.current===null&&(n=!0);var K=Re;if(Re=0,qn=null,Zr(t,E,B,K),a&&kr){g=0;break t}break;default:K=Re,Re=0,qn=null,Zr(t,E,B,K)}}iS(),g=Ye;break}catch(ut){Km(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Di=Za=null,Me=s,P.H=u,P.A=f,ce===null&&(Ne=null,de=0,Qo()),g}function iS(){for(;ce!==null;)tg(ce)}function aS(t,n){var a=Me;Me|=2;var s=Jm(),u=$m();Ne!==t||de!==n?(wl=null,Cl=mt()+500,Yr(t,n)):kr=Pe(t,n);t:do try{if(Re!==0&&ce!==null){n=ce;var f=qn;e:switch(Re){case 1:Re=0,qn=null,Zr(t,n,f,1);break;case 2:case 9:if(cp(f)){Re=0,qn=null,eg(n);break}n=function(){Re!==2&&Re!==9||Ne!==t||(Re=7),Mi(t)},f.then(n,n);break t;case 3:Re=7;break t;case 4:Re=5;break t;case 7:cp(f)?(Re=0,qn=null,eg(n)):(Re=0,qn=null,Zr(t,n,f,7));break;case 5:var g=null;switch(ce.tag){case 26:g=ce.memoizedState;case 5:case 27:var E=ce;if(g?Hg(g):E.stateNode.complete){Re=0,qn=null;var B=E.sibling;if(B!==null)ce=B;else{var K=E.return;K!==null?(ce=K,Ll(K)):ce=null}break e}}Re=0,qn=null,Zr(t,n,f,5);break;case 6:Re=0,qn=null,Zr(t,n,f,6);break;case 8:gf(),Ye=6;break t;default:throw Error(r(462))}}rS();break}catch(ut){Km(t,ut)}while(!0);return Di=Za=null,P.H=s,P.A=u,Me=a,ce!==null?0:(Ne=null,de=0,Qo(),Ye)}function rS(){for(;ce!==null&&!rt();)tg(ce)}function tg(t){var n=Tm(t.alternate,t,Hi);t.memoizedProps=t.pendingProps,n===null?Ll(t):ce=n}function eg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=vm(a,n,n.pendingProps,n.type,void 0,de);break;case 11:n=vm(a,n,n.pendingProps,n.type.render,n.ref,de);break;case 5:Uc(n);default:bm(a,n),n=ce=$d(n,Hi),n=Tm(a,n,Hi)}t.memoizedProps=t.pendingProps,n===null?Ll(t):ce=n}function Zr(t,n,a,s){Di=Za=null,Uc(n),Br=null,Zs=0;var u=n.return;try{if(Yv(t,u,n,a,de)){Ye=1,Sl(t,Jn(a,t.current)),ce=null;return}}catch(f){if(u!==null)throw ce=u,f;Ye=1,Sl(t,Jn(a,t.current)),ce=null;return}n.flags&32768?(ge||s===1?t=!0:kr||(de&536870912)!==0?t=!1:(_a=t=!0,(s===2||s===9||s===3||s===6)&&(s=kn.current,s!==null&&s.tag===13&&(s.flags|=16384))),ng(n,t)):Ll(n)}function Ll(t){var n=t;do{if((n.flags&32768)!==0){ng(n,_a);return}t=n.return;var a=Kv(n.alternate,n,Hi);if(a!==null){ce=a;return}if(n=n.sibling,n!==null){ce=n;return}ce=n=t}while(n!==null);Ye===0&&(Ye=5)}function ng(t,n){do{var a=Qv(t.alternate,t);if(a!==null){a.flags&=32767,ce=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ce=t;return}ce=t=a}while(t!==null);Ye=6,ce=null}function ig(t,n,a,s,u,f,g,E,B){t.cancelPendingCommit=null;do Nl();while(ln!==0);if((Me&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=ac,Vo(t,a,f,g,E,B),t===Ne&&(ce=Ne=null,de=0),qr=n,xa=t,Gi=a,df=f,pf=u,qm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,uS(Lt,function(){return lg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,u=k.p,k.p=2,g=Me,Me|=4;try{Jv(t,n,a)}finally{Me=g,k.p=u,P.T=s}}ln=1,ag(),rg(),sg()}}function ag(){if(ln===1){ln=0;var t=xa,n=qr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=k.p;k.p=2;var u=Me;Me|=4;try{Im(n,t);var f=wf,g=kd(t.containerInfo),E=f.focusedElem,B=f.selectionRange;if(g!==E&&E&&E.ownerDocument&&Xd(E.ownerDocument.documentElement,E)){if(B!==null&&$u(E)){var K=B.start,ut=B.end;if(ut===void 0&&(ut=K),"selectionStart"in E)E.selectionStart=K,E.selectionEnd=Math.min(ut,E.value.length);else{var pt=E.ownerDocument||document,$=pt&&pt.defaultView||window;if($.getSelection){var st=$.getSelection(),Bt=E.textContent.length,Kt=Math.min(B.start,Bt),Ue=B.end===void 0?Kt:Math.min(B.end,Bt);!st.extend&&Kt>Ue&&(g=Ue,Ue=Kt,Kt=g);var q=Vd(E,Kt),H=Vd(E,Ue);if(q&&H&&(st.rangeCount!==1||st.anchorNode!==q.node||st.anchorOffset!==q.offset||st.focusNode!==H.node||st.focusOffset!==H.offset)){var j=pt.createRange();j.setStart(q.node,q.offset),st.removeAllRanges(),Kt>Ue?(st.addRange(j),st.extend(H.node,H.offset)):(j.setEnd(H.node,H.offset),st.addRange(j))}}}}for(pt=[],st=E;st=st.parentNode;)st.nodeType===1&&pt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<pt.length;E++){var ft=pt[E];ft.element.scrollLeft=ft.left,ft.element.scrollTop=ft.top}}Wl=!!Cf,wf=Cf=null}finally{Me=u,k.p=s,P.T=a}}t.current=n,ln=2}}function rg(){if(ln===2){ln=0;var t=xa,n=qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=k.p;k.p=2;var u=Me;Me|=4;try{Nm(t,n.alternate,n)}finally{Me=u,k.p=s,P.T=a}}ln=3}}function sg(){if(ln===4||ln===3){ln=0,_t();var t=xa,n=qr,a=Gi,s=qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?ln=5:(ln=0,qr=xa=null,og(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Sa=null),ia(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(jt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,u=k.p,k.p=2,P.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var E=s[g];f(E.value,{componentStack:E.stack})}}finally{P.T=n,k.p=u}}(Gi&3)!==0&&Nl(),Mi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===mf?fo++:(fo=0,mf=t):fo=0,ho(0)}}function og(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,qs(n)))}function Nl(){return ag(),rg(),sg(),lg()}function lg(){if(ln!==5)return!1;var t=xa,n=df;df=0;var a=ia(Gi),s=P.T,u=k.p;try{k.p=32>a?32:a,P.T=null,a=pf,pf=null;var f=xa,g=Gi;if(ln=0,qr=xa=null,Gi=0,(Me&6)!==0)throw Error(r(331));var E=Me;if(Me|=4,Xm(f.current),Hm(f,f.current,g,a),Me=E,ho(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(jt,f)}catch{}return!0}finally{k.p=u,P.T=s,og(t,n)}}function ug(t,n,a){n=Jn(a,n),n=qc(t.stateNode,n,2),t=da(t,n,2),t!==null&&(Sn(t,2),Mi(t))}function Ce(t,n,a){if(t.tag===3)ug(t,t,a);else for(;n!==null;){if(n.tag===3){ug(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Sa===null||!Sa.has(s))){t=Jn(a,t),a=cm(2),s=da(n,a,2),s!==null&&(fm(a,s,n,t),Sn(s,2),Mi(s));break}}n=n.return}}function vf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new eS;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(cf=!0,u.add(a),t=sS.bind(null,t,n,a),n.then(t,t))}function sS(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ne===t&&(de&a)===a&&(Ye===4||Ye===3&&(de&62914560)===de&&300>mt()-Rl?(Me&2)===0&&Yr(t,0):ff|=a,Wr===de&&(Wr=0)),Mi(t)}function cg(t,n){n===0&&(n=_e()),t=Wa(t,n),t!==null&&(Sn(t,n),Mi(t))}function oS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),cg(t,a)}function lS(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),cg(t,a)}function uS(t,n){return N(t,n)}var Ol=null,jr=null,Sf=!1,Pl=!1,xf=!1,Ma=0;function Mi(t){t!==jr&&t.next===null&&(jr===null?Ol=jr=t:jr=jr.next=t),Pl=!0,Sf||(Sf=!0,fS())}function ho(t,n){if(!xf&&Pl){xf=!0;do for(var a=!1,s=Ol;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var g=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Zt(42|t)+1)-1,f&=u&~(g&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,pg(s,f))}else f=de,f=oe(s,s===Ne?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Pe(s,f)||(a=!0,pg(s,f));s=s.next}while(a);xf=!1}}function cS(){fg()}function fg(){Pl=Sf=!1;var t=0;Ma!==0&&yS()&&(t=Ma);for(var n=mt(),a=null,s=Ol;s!==null;){var u=s.next,f=hg(s,n);f===0?(s.next=null,a===null?Ol=u:a.next=u,u===null&&(jr=a)):(a=s,(t!==0||(f&3)!==0)&&(Pl=!0)),s=u}ln!==0&&ln!==5||ho(t),Ma!==0&&(Ma=0)}function hg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Zt(f),E=1<<g,B=u[g];B===-1?((E&a)===0||(E&s)!==0)&&(u[g]=sn(E,n)):B<=n&&(t.expiredLanes|=E),f&=~E}if(n=Ne,a=de,a=oe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Re===2||Re===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&T(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Pe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&T(s),ia(a)){case 2:case 8:a=Dt;break;case 32:a=Lt;break;case 268435456:a=At;break;default:a=Lt}return s=dg.bind(null,t),a=N(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&T(s),t.callbackPriority=2,t.callbackNode=null,2}function dg(t,n){if(ln!==0&&ln!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Nl()&&t.callbackNode!==a)return null;var s=de;return s=oe(t,t===Ne?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Zm(t,s,n),hg(t,mt()),t.callbackNode!=null&&t.callbackNode===a?dg.bind(null,t):null)}function pg(t,n){if(Nl())return null;Zm(t,n,!0)}function fS(){ES(function(){(Me&6)!==0?N(qt,cS):fg()})}function yf(){if(Ma===0){var t=Or;t===0&&(t=dt,dt<<=1,(dt&261888)===0&&(dt=256)),Ma=t}return Ma}function mg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Xo(""+t)}function gg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function hS(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=mg((u[xn]||null).action),g=s.submitter;g&&(n=(n=g[xn]||null)?mg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var E=new Yo("action","action",null,s,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ma!==0){var B=g?gg(u,g):new FormData(u);Hc(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(E.preventDefault(),B=g?gg(u,g):new FormData(u),Hc(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Mf=0;Mf<ic.length;Mf++){var Ef=ic[Mf],dS=Ef.toLowerCase(),pS=Ef[0].toUpperCase()+Ef.slice(1);ci(dS,"on"+pS)}ci(Yd,"onAnimationEnd"),ci(Zd,"onAnimationIteration"),ci(jd,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(Dv,"onTransitionRun"),ci(Uv,"onTransitionStart"),ci(Lv,"onTransitionCancel"),ci(Kd,"onTransitionEnd"),be("onMouseEnter",["mouseout","mouseover"]),be("onMouseLeave",["mouseout","mouseover"]),be("onPointerEnter",["pointerout","pointerover"]),be("onPointerLeave",["pointerout","pointerover"]),le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),le("onBeforeInput",["compositionend","keypress","textInput","paste"]),le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function _g(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var E=s[g],B=E.instance,K=E.currentTarget;if(E=E.listener,B!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=K;try{f(u)}catch(ut){Ko(ut)}u.currentTarget=null,f=B}else for(g=0;g<s.length;g++){if(E=s[g],B=E.instance,K=E.currentTarget,E=E.listener,B!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=K;try{f(u)}catch(ut){Ko(ut)}u.currentTarget=null,f=B}}}}function fe(t,n){var a=n[Us];a===void 0&&(a=n[Us]=new Set);var s=t+"__bubble";a.has(s)||(vg(n,t,2,!1),a.add(s))}function Tf(t,n,a){var s=0;n&&(s|=4),vg(a,t,s,n)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Af(t){if(!t[zl]){t[zl]=!0,Qt.forEach(function(a){a!=="selectionchange"&&(mS.has(a)||Tf(a,!1,t),Tf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[zl]||(n[zl]=!0,Tf("selectionchange",!1,n))}}function vg(t,n,a,s){switch(Yg(n)){case 2:var u=XS;break;case 8:u=kS;break;default:u=Hf}a=u.bind(null,n,a,t),u=void 0,!ku||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function bf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var E=s.stateNode.containerInfo;if(E===u)break;if(g===4)for(g=s.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;E!==null;){if(g=Tt(E),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){s=f=g;continue t}E=E.parentNode}}s=s.return}Ed(function(){var K=f,ut=Vu(a),pt=[];t:{var $=Qd.get(t);if($!==void 0){var st=Yo,Bt=t;switch(t){case"keypress":if(Wo(a)===0)break t;case"keydown":case"keyup":st=lv;break;case"focusin":Bt="focus",st=Zu;break;case"focusout":Bt="blur",st=Zu;break;case"beforeblur":case"afterblur":st=Zu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=K0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=fv;break;case Yd:case Zd:case jd:st=$0;break;case Kd:st=dv;break;case"scroll":case"scrollend":st=Z0;break;case"wheel":st=mv;break;case"copy":case"cut":case"paste":st=ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Cd;break;case"toggle":case"beforetoggle":st=_v}var Kt=(n&4)!==0,Ue=!Kt&&(t==="scroll"||t==="scrollend"),q=Kt?$!==null?$+"Capture":null:$;Kt=[];for(var H=K,j;H!==null;){var ft=H;if(j=ft.stateNode,ft=ft.tag,ft!==5&&ft!==26&&ft!==27||j===null||q===null||(ft=Ps(H,q),ft!=null&&Kt.push(mo(H,ft,j))),Ue)break;H=H.return}0<Kt.length&&($=new st($,Bt,null,a,ut),pt.push({event:$,listeners:Kt}))}}if((n&7)===0){t:{if($=t==="mouseover"||t==="pointerover",st=t==="mouseout"||t==="pointerout",$&&a!==Gu&&(Bt=a.relatedTarget||a.fromElement)&&(Tt(Bt)||Bt[aa]))break t;if((st||$)&&($=ut.window===ut?ut:($=ut.ownerDocument)?$.defaultView||$.parentWindow:window,st?(Bt=a.relatedTarget||a.toElement,st=K,Bt=Bt?Tt(Bt):null,Bt!==null&&(Ue=c(Bt),Kt=Bt.tag,Bt!==Ue||Kt!==5&&Kt!==27&&Kt!==6)&&(Bt=null)):(st=null,Bt=K),st!==Bt)){if(Kt=bd,ft="onMouseLeave",q="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=Cd,ft="onPointerLeave",q="onPointerEnter",H="pointer"),Ue=st==null?$:Pt(st),j=Bt==null?$:Pt(Bt),$=new Kt(ft,H+"leave",st,a,ut),$.target=Ue,$.relatedTarget=j,ft=null,Tt(ut)===K&&(Kt=new Kt(q,H+"enter",Bt,a,ut),Kt.target=j,Kt.relatedTarget=Ue,ft=Kt),Ue=ft,st&&Bt)e:{for(Kt=gS,q=st,H=Bt,j=0,ft=q;ft;ft=Kt(ft))j++;ft=0;for(var Wt=H;Wt;Wt=Kt(Wt))ft++;for(;0<j-ft;)q=Kt(q),j--;for(;0<ft-j;)H=Kt(H),ft--;for(;j--;){if(q===H||H!==null&&q===H.alternate){Kt=q;break e}q=Kt(q),H=Kt(H)}Kt=null}else Kt=null;st!==null&&Sg(pt,$,st,Kt,!1),Bt!==null&&Ue!==null&&Sg(pt,Ue,Bt,Kt,!0)}}t:{if($=K?Pt(K):window,st=$.nodeName&&$.nodeName.toLowerCase(),st==="select"||st==="input"&&$.type==="file")var xe=zd;else if(Od($))if(Bd)xe=Rv;else{xe=Av;var Ht=Tv}else st=$.nodeName,!st||st.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?K&&Hu(K.elementType)&&(xe=zd):xe=bv;if(xe&&(xe=xe(t,K))){Pd(pt,xe,a,ut);break t}Ht&&Ht(t,$,K),t==="focusout"&&K&&$.type==="number"&&K.memoizedProps.value!=null&&Fu($,"number",$.value)}switch(Ht=K?Pt(K):window,t){case"focusin":(Od(Ht)||Ht.contentEditable==="true")&&(br=Ht,tc=K,Xs=null);break;case"focusout":Xs=tc=br=null;break;case"mousedown":ec=!0;break;case"contextmenu":case"mouseup":case"dragend":ec=!1,Wd(pt,a,ut);break;case"selectionchange":if(wv)break;case"keydown":case"keyup":Wd(pt,a,ut)}var ae;if(Ku)t:{switch(t){case"compositionstart":var pe="onCompositionStart";break t;case"compositionend":pe="onCompositionEnd";break t;case"compositionupdate":pe="onCompositionUpdate";break t}pe=void 0}else Ar?Ld(t,a)&&(pe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(wd&&a.locale!=="ko"&&(Ar||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Ar&&(ae=Td()):(sa=ut,Wu="value"in sa?sa.value:sa.textContent,Ar=!0)),Ht=Bl(K,pe),0<Ht.length&&(pe=new Rd(pe,t,null,a,ut),pt.push({event:pe,listeners:Ht}),ae?pe.data=ae:(ae=Nd(a),ae!==null&&(pe.data=ae)))),(ae=Sv?xv(t,a):yv(t,a))&&(pe=Bl(K,"onBeforeInput"),0<pe.length&&(Ht=new Rd("onBeforeInput","beforeinput",null,a,ut),pt.push({event:Ht,listeners:pe}),Ht.data=ae)),hS(pt,t,K,a,ut)}_g(pt,n)})}function mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Bl(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ps(t,a),u!=null&&s.unshift(mo(t,u,f)),u=Ps(t,n),u!=null&&s.push(mo(t,u,f))),t.tag===3)return s;t=t.return}return[]}function gS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Sg(t,n,a,s,u){for(var f=n._reactName,g=[];a!==null&&a!==s;){var E=a,B=E.alternate,K=E.stateNode;if(E=E.tag,B!==null&&B===s)break;E!==5&&E!==26&&E!==27||K===null||(B=K,u?(K=Ps(a,f),K!=null&&g.unshift(mo(a,K,B))):u||(K=Ps(a,f),K!=null&&g.push(mo(a,K,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var _S=/\r\n?/g,vS=/\u0000|\uFFFD/g;function xg(t){return(typeof t=="string"?t:""+t).replace(_S,`
`).replace(vS,"")}function yg(t,n){return n=xg(n),xg(t)===n}function De(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Mr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Mr(t,""+s);break;case"className":me(t,"class",s);break;case"tabIndex":me(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":me(t,a,s);break;case"style":yd(t,s,f);break;case"data":if(n!=="object"){me(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Xo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&De(t,n,"name",u.name,u,null),De(t,n,"formEncType",u.formEncType,u,null),De(t,n,"formMethod",u.formMethod,u,null),De(t,n,"formTarget",u.formTarget,u,null)):(De(t,n,"encType",u.encType,u,null),De(t,n,"method",u.method,u,null),De(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Xo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=bi);break;case"onScroll":s!=null&&fe("scroll",t);break;case"onScrollEnd":s!=null&&fe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Xo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":fe("beforetoggle",t),fe("toggle",t),We(t,"popover",s);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":We(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=q0.get(a)||a,We(t,a,s))}}function Rf(t,n,a,s,u,f){switch(a){case"style":yd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Mr(t,s):(typeof s=="number"||typeof s=="bigint")&&Mr(t,""+s);break;case"onScroll":s!=null&&fe("scroll",t);break;case"onScrollEnd":s!=null&&fe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):We(t,a,s)}}}function vn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",t),fe("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:De(t,n,f,g,a,null)}}u&&De(t,n,"srcSet",a.srcSet,a,null),s&&De(t,n,"src",a.src,a,null);return;case"input":fe("invalid",t);var E=f=g=u=null,B=null,K=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":u=ut;break;case"type":g=ut;break;case"checked":B=ut;break;case"defaultChecked":K=ut;break;case"value":f=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:De(t,n,s,ut,a,null)}}Os(t,f,E,B,K,g,u,!1);return;case"select":fe("invalid",t),s=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":f=E;break;case"defaultValue":g=E;break;case"multiple":s=E;default:De(t,n,u,E,a,null)}n=f,a=g,t.multiple=!!s,n!=null?yr(t,!!s,n,!1):a!=null&&yr(t,!!s,a,!0);return;case"textarea":fe("invalid",t),f=u=s=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":s=E;break;case"defaultValue":u=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:De(t,n,g,E,a,null)}Sd(t,s,u,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(s=a[B],s!=null)&&(B==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":De(t,n,B,s,a,null));return;case"dialog":fe("beforetoggle",t),fe("toggle",t),fe("cancel",t),fe("close",t);break;case"iframe":case"object":fe("load",t);break;case"video":case"audio":for(s=0;s<po.length;s++)fe(po[s],t);break;case"image":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"embed":case"source":case"link":fe("error",t),fe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in a)if(a.hasOwnProperty(K)&&(s=a[K],s!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:De(t,n,K,s,a,null)}return;default:if(Hu(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&Rf(t,n,ut,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&De(t,n,E,s,a,null))}function SS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,E=null,B=null,K=null,ut=null;for(st in a){var pt=a[st];if(a.hasOwnProperty(st)&&pt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":B=pt;default:s.hasOwnProperty(st)||De(t,n,st,null,s,pt)}}for(var $ in s){var st=s[$];if(pt=a[$],s.hasOwnProperty($)&&(st!=null||pt!=null))switch($){case"type":f=st;break;case"name":u=st;break;case"checked":K=st;break;case"defaultChecked":ut=st;break;case"value":g=st;break;case"defaultValue":E=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:st!==pt&&De(t,n,$,st,s,pt)}}Ns(t,g,E,B,K,ut,f,u);return;case"select":st=g=E=$=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":st=B;default:s.hasOwnProperty(f)||De(t,n,f,null,s,B)}for(u in s)if(f=s[u],B=a[u],s.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":$=f;break;case"defaultValue":E=f;break;case"multiple":g=f;default:f!==B&&De(t,n,u,f,s,B)}n=E,a=g,s=st,$!=null?yr(t,!!a,$,!1):!!s!=!!a&&(n!=null?yr(t,!!a,n,!0):yr(t,!!a,a?[]:"",!1));return;case"textarea":st=$=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:De(t,n,E,null,s,u)}for(g in s)if(u=s[g],f=a[g],s.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":$=u;break;case"defaultValue":st=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&De(t,n,g,u,s,f)}vd(t,$,st);return;case"option":for(var Bt in a)$=a[Bt],a.hasOwnProperty(Bt)&&$!=null&&!s.hasOwnProperty(Bt)&&(Bt==="selected"?t.selected=!1:De(t,n,Bt,null,s,$));for(B in s)$=s[B],st=a[B],s.hasOwnProperty(B)&&$!==st&&($!=null||st!=null)&&(B==="selected"?t.selected=$&&typeof $!="function"&&typeof $!="symbol":De(t,n,B,$,s,st));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)$=a[Kt],a.hasOwnProperty(Kt)&&$!=null&&!s.hasOwnProperty(Kt)&&De(t,n,Kt,null,s,$);for(K in s)if($=s[K],st=a[K],s.hasOwnProperty(K)&&$!==st&&($!=null||st!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:De(t,n,K,$,s,st)}return;default:if(Hu(n)){for(var Ue in a)$=a[Ue],a.hasOwnProperty(Ue)&&$!==void 0&&!s.hasOwnProperty(Ue)&&Rf(t,n,Ue,void 0,s,$);for(ut in s)$=s[ut],st=a[ut],!s.hasOwnProperty(ut)||$===st||$===void 0&&st===void 0||Rf(t,n,ut,$,s,st);return}}for(var q in a)$=a[q],a.hasOwnProperty(q)&&$!=null&&!s.hasOwnProperty(q)&&De(t,n,q,null,s,$);for(pt in s)$=s[pt],st=a[pt],!s.hasOwnProperty(pt)||$===st||$==null&&st==null||De(t,n,pt,$,s,st)}function Mg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,g=u.initiatorType,E=u.duration;if(f&&E&&Mg(g)){for(g=0,E=u.responseEnd,s+=1;s<a.length;s++){var B=a[s],K=B.startTime;if(K>E)break;var ut=B.transferSize,pt=B.initiatorType;ut&&Mg(pt)&&(B=B.responseEnd,g+=ut*(B<E?1:(E-K)/(B-K)))}if(--s,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Cf=null,wf=null;function Il(t){return t.nodeType===9?t:t.ownerDocument}function Eg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Df(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Uf=null;function yS(){var t=window.event;return t&&t.type==="popstate"?t===Uf?!1:(Uf=t,!0):(Uf=null,!1)}var Ag=typeof setTimeout=="function"?setTimeout:void 0,MS=typeof clearTimeout=="function"?clearTimeout:void 0,bg=typeof Promise=="function"?Promise:void 0,ES=typeof queueMicrotask=="function"?queueMicrotask:typeof bg<"u"?function(t){return bg.resolve(null).then(t).catch(TS)}:Ag;function TS(t){setTimeout(function(){throw t})}function Ea(t){return t==="head"}function Rg(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),$r(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")go(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,go(a);for(var f=a.firstChild;f;){var g=f.nextSibling,E=f.nodeName;f[nt]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&go(t.ownerDocument.body);a=u}while(a);$r(n)}function Cg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Lf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Lf(a),Z(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function AS(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[nt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ii(t.nextSibling),t===null)break}return null}function bS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ii(t.nextSibling),t===null))return null;return t}function wg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ii(t.nextSibling),t===null))return null;return t}function Nf(t){return t.data==="$?"||t.data==="$~"}function Of(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function RS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ii(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Pf=null;function Dg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ii(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Ug(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Lg(t,n,a){switch(n=Il(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function go(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Z(t)}var ai=new Map,Ng=new Set;function Fl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Vi=k.d;k.d={f:CS,r:wS,D:DS,C:US,L:LS,m:NS,X:PS,S:OS,M:zS};function CS(){var t=Vi.f(),n=Dl();return t||n}function wS(t){var n=wt(t);n!==null&&n.tag===5&&n.type==="form"?Kp(n):Vi.r(t)}var Kr=typeof document>"u"?null:document;function Og(t,n,a){var s=Kr;if(s&&typeof n=="string"&&n){var u=En(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ng.has(u)||(Ng.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),vn(n,"link",t),zt(n),s.head.appendChild(n)))}}function DS(t){Vi.D(t),Og("dns-prefetch",t,null)}function US(t,n){Vi.C(t,n),Og("preconnect",t,n)}function LS(t,n,a){Vi.L(t,n,a);var s=Kr;if(s&&t&&n){var u='link[rel="preload"][as="'+En(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+En(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+En(a.imageSizes)+'"]')):u+='[href="'+En(t)+'"]';var f=u;switch(n){case"style":f=Qr(t);break;case"script":f=Jr(t)}ai.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ai.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(_o(f))||n==="script"&&s.querySelector(vo(f))||(n=s.createElement("link"),vn(n,"link",t),zt(n),s.head.appendChild(n)))}}function NS(t,n){Vi.m(t,n);var a=Kr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+En(s)+'"][href="'+En(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Jr(t)}if(!ai.has(f)&&(t=v({rel:"modulepreload",href:t},n),ai.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}s=a.createElement("link"),vn(s,"link",t),zt(s),a.head.appendChild(s)}}}function OS(t,n,a){Vi.S(t,n,a);var s=Kr;if(s&&t){var u=Nt(s).hoistableStyles,f=Qr(t);n=n||"default";var g=u.get(f);if(!g){var E={loading:0,preload:null};if(g=s.querySelector(_o(f)))E.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ai.get(f))&&zf(t,a);var B=g=s.createElement("link");zt(B),vn(B,"link",t),B._p=new Promise(function(K,ut){B.onload=K,B.onerror=ut}),B.addEventListener("load",function(){E.loading|=1}),B.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Hl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:E},u.set(f,g)}}}function PS(t,n){Vi.X(t,n);var a=Kr;if(a&&t){var s=Nt(a).hoistableScripts,u=Jr(t),f=s.get(u);f||(f=a.querySelector(vo(u)),f||(t=v({src:t,async:!0},n),(n=ai.get(u))&&Bf(t,n),f=a.createElement("script"),zt(f),vn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function zS(t,n){Vi.M(t,n);var a=Kr;if(a&&t){var s=Nt(a).hoistableScripts,u=Jr(t),f=s.get(u);f||(f=a.querySelector(vo(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=ai.get(u))&&Bf(t,n),f=a.createElement("script"),zt(f),vn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Pg(t,n,a,s){var u=(u=yt.current)?Fl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Qr(a.href),a=Nt(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Qr(a.href);var f=Nt(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(_o(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ai.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(t,a),f||BS(u,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Jr(a),a=Nt(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Qr(t){return'href="'+En(t)+'"'}function _o(t){return'link[rel="stylesheet"]['+t+"]"}function zg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function BS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),vn(n,"link",a),zt(n),t.head.appendChild(n))}function Jr(t){return'[src="'+En(t)+'"]'}function vo(t){return"script[async]"+t}function Bg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+En(a.href)+'"]');if(s)return n.instance=s,zt(s),s;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),zt(s),vn(s,"style",u),Hl(s,a.precedence,t),n.instance=s;case"stylesheet":u=Qr(a.href);var f=t.querySelector(_o(u));if(f)return n.state.loading|=4,n.instance=f,zt(f),f;s=zg(a),(u=ai.get(u))&&zf(s,u),f=(t.ownerDocument||t).createElement("link"),zt(f);var g=f;return g._p=new Promise(function(E,B){g.onload=E,g.onerror=B}),vn(f,"link",s),n.state.loading|=4,Hl(f,a.precedence,t),n.instance=f;case"script":return f=Jr(a.src),(u=t.querySelector(vo(f)))?(n.instance=u,zt(u),u):(s=a,(u=ai.get(f))&&(s=v({},a),Bf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),zt(u),vn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Hl(s,a.precedence,t));return n.instance}function Hl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,g=0;g<s.length;g++){var E=s[g];if(E.dataset.precedence===n)f=E;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Gl=null;function Ig(t,n,a){if(Gl===null){var s=new Map,u=Gl=new Map;u.set(a,s)}else u=Gl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[nt]||f[Je]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var E=s.get(g);E?E.push(f):s.set(g,[f])}}return s}function Fg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function IS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Hg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function FS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Qr(s.href),f=n.querySelector(_o(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Vl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,zt(f);return}f=n.ownerDocument||n,s=zg(s),(u=ai.get(u))&&zf(s,u),f=f.createElement("link"),zt(f);var g=f;g._p=new Promise(function(E,B){g.onload=E,g.onerror=B}),vn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Vl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var If=0;function HS(t,n){return t.stylesheets&&t.count===0&&kl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&kl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&If===0&&(If=62500*xS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&kl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>If?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Vl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Xl=null;function kl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Xl=new Map,n.forEach(GS,t),Xl=null,Vl.call(t))}function GS(t,n){if(!(n.state.loading&4)){var a=Xl.get(t);if(a)var s=a.get(null);else{a=new Map,Xl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,u),a.set(g,u),this.count++,s=Vl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var So={$$typeof:D,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function VS(t,n,a,s,u,f,g,E,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gn(0),this.hiddenUpdates=Gn(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Gg(t,n,a,s,u,f,g,E,B,K,ut,pt){return t=new VS(t,n,a,g,B,K,ut,pt,E),n=1,f===!0&&(n|=24),f=Xn(3,null,null,n),t.current=f,f.stateNode=t,n=gc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},xc(f),t}function Vg(t){return t?(t=wr,t):wr}function Xg(t,n,a,s,u,f){u=Vg(u),s.context===null?s.context=u:s.pendingContext=u,s=ha(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=da(t,s,n),a!==null&&(zn(a,t,n),Ks(a,t,n))}function kg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Ff(t,n){kg(t,n),(t=t.alternate)&&kg(t,n)}function Wg(t){if(t.tag===13||t.tag===31){var n=Wa(t,67108864);n!==null&&zn(n,t,67108864),Ff(t,67108864)}}function qg(t){if(t.tag===13||t.tag===31){var n=Zn();n=xr(n);var a=Wa(t,n);a!==null&&zn(a,t,n),Ff(t,n)}}var Wl=!0;function XS(t,n,a,s){var u=P.T;P.T=null;var f=k.p;try{k.p=2,Hf(t,n,a,s)}finally{k.p=f,P.T=u}}function kS(t,n,a,s){var u=P.T;P.T=null;var f=k.p;try{k.p=8,Hf(t,n,a,s)}finally{k.p=f,P.T=u}}function Hf(t,n,a,s){if(Wl){var u=Gf(s);if(u===null)bf(t,n,s,ql,a),Zg(t,s);else if(qS(u,t,n,a,s))s.stopPropagation();else if(Zg(t,s),n&4&&-1<WS.indexOf(t)){for(;u!==null;){var f=wt(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=kt(f.pendingLanes);if(g!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var B=1<<31-Zt(g);E.entanglements[1]|=B,g&=~B}Mi(f),(Me&6)===0&&(Cl=mt()+500,ho(0))}}break;case 31:case 13:E=Wa(f,2),E!==null&&zn(E,f,2),Dl(),Ff(f,2)}if(f=Gf(s),f===null&&bf(t,n,s,ql,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else bf(t,n,s,null,a)}}function Gf(t){return t=Vu(t),Vf(t)}var ql=null;function Vf(t){if(ql=null,t=Tt(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ql=t,null}function Yg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xt()){case qt:return 2;case Dt:return 8;case Lt:case ne:return 32;case At:return 268435456;default:return 32}default:return 32}}var Xf=!1,Ta=null,Aa=null,ba=null,xo=new Map,yo=new Map,Ra=[],WS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zg(t,n){switch(t){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(n.pointerId)}}function Mo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=wt(n),n!==null&&Wg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function qS(t,n,a,s,u){switch(n){case"focusin":return Ta=Mo(Ta,t,n,a,s,u),!0;case"dragenter":return Aa=Mo(Aa,t,n,a,s,u),!0;case"mouseover":return ba=Mo(ba,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return xo.set(f,Mo(xo.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,yo.set(f,Mo(yo.get(f)||null,t,n,a,s,u)),!0}return!1}function jg(t){var n=Tt(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ga(t.priority,function(){qg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ga(t.priority,function(){qg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Gf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Gu=s,a.target.dispatchEvent(s),Gu=null}else return n=wt(a),n!==null&&Wg(n),t.blockedOn=a,!1;n.shift()}return!0}function Kg(t,n,a){Yl(t)&&a.delete(n)}function YS(){Xf=!1,Ta!==null&&Yl(Ta)&&(Ta=null),Aa!==null&&Yl(Aa)&&(Aa=null),ba!==null&&Yl(ba)&&(ba=null),xo.forEach(Kg),yo.forEach(Kg)}function Zl(t,n){t.blockedOn===n&&(t.blockedOn=null,Xf||(Xf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,YS)))}var jl=null;function Qg(t){jl!==t&&(jl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){jl===t&&(jl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Vf(s||a)===null)continue;break}var f=wt(a);f!==null&&(t.splice(n,3),n-=3,Hc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function $r(t){function n(B){return Zl(B,t)}Ta!==null&&Zl(Ta,t),Aa!==null&&Zl(Aa,t),ba!==null&&Zl(ba,t),xo.forEach(n),yo.forEach(n);for(var a=0;a<Ra.length;a++){var s=Ra[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)jg(a),a.blockedOn===null&&Ra.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],g=u[xn]||null;if(typeof f=="function")g||Qg(a);else if(g){var E=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[xn]||null)E=g.formAction;else if(Vf(u)!==null)continue}else E=g.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),Qg(a)}}}function Jg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function kf(t){this._internalRoot=t}Kl.prototype.render=kf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Zn();Xg(a,s,t,n,null,null)},Kl.prototype.unmount=kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Xg(t.current,2,null,t,null,null),Dl(),n[aa]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ds();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ra.length&&n!==0&&n<Ra[a].priority;a++);Ra.splice(a,0,t),a===0&&jg(t)}};var $g=e.version;if($g!=="19.2.3")throw Error(r(527,$g,"19.2.3"));k.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var ZS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{jt=Ql.inject(ZS),Ct=Ql}catch{}}return To.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=sm,f=om,g=lm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Gg(t,1,!1,null,null,a,s,null,u,f,g,Jg),t[aa]=n.current,Af(t),new kf(n)},To.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=sm,g=om,E=lm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Gg(t,1,!0,n,a??null,s,u,B,f,g,E,Jg),n.context=Vg(null),a=n.current,s=Zn(),s=xr(s),u=ha(s),u.callback=null,da(a,u,s),a=s,n.current.lanes=a,Sn(n,a),Mi(n),t[aa]=n.current,Af(t),new Kl(n)},To.version="19.2.3",To}var u_;function ax(){if(u_)return Yf.exports;u_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Yf.exports=ix(),Yf.exports}var rx=ax();const ld="168",sx=0,c_=1,ox=2,h0=1,lx=2,Zi=3,Fa=0,Fn=1,ji=2,Ba=0,Ss=1,Ah=2,f_=3,h_=4,ux=5,hr=100,cx=101,fx=102,hx=103,dx=104,px=200,mx=201,gx=202,_x=203,bh=204,Rh=205,vx=206,Sx=207,xx=208,yx=209,Mx=210,Ex=211,Tx=212,Ax=213,bx=214,Rx=0,Cx=1,wx=2,Cu=3,Dx=4,Ux=5,Lx=6,Nx=7,d0=0,Ox=1,Px=2,Ia=0,zx=1,Bx=2,Ix=3,Fx=4,Hx=5,Gx=6,Vx=7,p0=300,Ms=301,Es=302,Ch=303,wh=304,Ou=306,Dh=1e3,pr=1001,Uh=1002,oi=1003,Xx=1004,Jl=1005,gi=1006,Qf=1007,mr=1008,$i=1009,m0=1010,g0=1011,Po=1012,ud=1013,_r=1014,Ki=1015,zo=1016,cd=1017,fd=1018,Ts=1020,_0=35902,v0=1021,S0=1022,_i=1023,x0=1024,y0=1025,xs=1026,As=1027,M0=1028,hd=1029,E0=1030,dd=1031,pd=1033,Mu=33776,Eu=33777,Tu=33778,Au=33779,Lh=35840,Nh=35841,Oh=35842,Ph=35843,zh=36196,Bh=37492,Ih=37496,Fh=37808,Hh=37809,Gh=37810,Vh=37811,Xh=37812,kh=37813,Wh=37814,qh=37815,Yh=37816,Zh=37817,jh=37818,Kh=37819,Qh=37820,Jh=37821,bu=36492,$h=36494,td=36495,T0=36283,ed=36284,nd=36285,id=36286,kx=3200,Wx=3201,qx=0,Yx=1,za="",Ei="srgb",Ha="srgb-linear",md="display-p3",Pu="display-p3-linear",wu="linear",Fe="srgb",Du="rec709",Uu="p3",ts=7680,d_=519,Zx=512,jx=513,Kx=514,A0=515,Qx=516,Jx=517,$x=518,ty=519,p_=35044,m_="300 es",Qi=2e3,Lu=2001;class Rs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jf=Math.PI/180,ad=180/Math.PI;function Bo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function In(o,e,i){return Math.max(e,Math.min(i,o))}function ey(o,e){return(o%e+e)%e}function $f(o,e,i){return(1-i)*o+i*e}function Ao(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(e=0,i=0){Ae.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(In(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(e,i,r,l,c,h,d,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],v=r[7],y=r[2],M=r[5],A=r[8],R=l[0],x=l[3],S=l[6],z=l[1],D=l[4],O=l[7],J=l[2],F=l[5],L=l[8];return c[0]=h*R+d*z+m*J,c[3]=h*x+d*D+m*F,c[6]=h*S+d*O+m*L,c[1]=p*R+_*z+v*J,c[4]=p*x+_*D+v*F,c[7]=p*S+_*O+v*L,c[2]=y*R+M*z+A*J,c[5]=y*x+M*D+A*F,c[8]=y*S+M*O+A*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-r*c*_+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],v=_*h-d*p,y=d*m-_*c,M=p*c-h*m,A=i*v+r*y+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=v*R,e[1]=(l*p-_*r)*R,e[2]=(d*r-l*h)*R,e[3]=y*R,e[4]=(_*i-l*m)*R,e[5]=(l*c-d*i)*R,e[6]=M*R,e[7]=(r*m-p*i)*R,e[8]=(h*i-r*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(th.makeScale(e,i)),this}rotate(e){return this.premultiply(th.makeRotation(-e)),this}translate(e,i){return this.premultiply(th.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const th=new se;function b0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Nu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ny(){const o=Nu("canvas");return o.style.display="block",o}const g_={};function Oo(o){o in g_||(g_[o]=!0,console.warn(o))}function iy(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const __=new se().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),v_=new se().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bo={[Ha]:{transfer:wu,primaries:Du,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o,fromReference:o=>o},[Ei]:{transfer:Fe,primaries:Du,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Pu]:{transfer:wu,primaries:Uu,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.applyMatrix3(v_),fromReference:o=>o.applyMatrix3(__)},[md]:{transfer:Fe,primaries:Uu,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.convertSRGBToLinear().applyMatrix3(v_),fromReference:o=>o.applyMatrix3(__).convertLinearToSRGB()}},ay=new Set([Ha,Pu]),Ee={enabled:!0,_workingColorSpace:Ha,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!ay.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=bo[e].toReference,l=bo[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return bo[o].primaries},getTransfer:function(o){return o===za?wu:bo[o].transfer},getLuminanceCoefficients:function(o,e=this._workingColorSpace){return o.fromArray(bo[e].luminanceCoefficients)}};function ys(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function eh(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let es;class ry{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{es===void 0&&(es=Nu("canvas")),es.width=e.width,es.height=e.height;const r=es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=es}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Nu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ys(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ys(i[r]/255)*255):i[r]=ys(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sy=0;class R0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(nh(l[h].image)):c.push(nh(l[h]))}else c=nh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function nh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ry.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oy=0;class wn extends Rs{constructor(e=wn.DEFAULT_IMAGE,i=wn.DEFAULT_MAPPING,r=pr,l=pr,c=gi,h=mr,d=_i,m=$i,p=wn.DEFAULT_ANISOTROPY,_=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Bo(),this.name="",this.source=new R0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==p0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dh:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case Uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dh:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case Uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=p0;wn.DEFAULT_ANISOTROPY=1;class pn{constructor(e=0,i=0,r=0,l=1){pn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],_=m[4],v=m[8],y=m[1],M=m[5],A=m[9],R=m[2],x=m[6],S=m[10];if(Math.abs(_-y)<.01&&Math.abs(v-R)<.01&&Math.abs(A-x)<.01){if(Math.abs(_+y)<.1&&Math.abs(v+R)<.1&&Math.abs(A+x)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,O=(M+1)/2,J=(S+1)/2,F=(_+y)/4,L=(v+R)/4,Q=(A+x)/4;return D>O&&D>J?D<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(D),l=F/r,c=L/r):O>J?O<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),r=F/l,c=Q/l):J<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(J),r=L/c,l=Q/c),this.set(r,l,c,i),this}let z=Math.sqrt((x-A)*(x-A)+(v-R)*(v-R)+(y-_)*(y-_));return Math.abs(z)<.001&&(z=1),this.x=(x-A)/z,this.y=(v-R)/z,this.z=(y-_)/z,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ly extends Rs{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new pn(0,0,e,i),this.scissorTest=!1,this.viewport=new pn(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new wn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new R0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends ly{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class C0 extends wn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uy extends wn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],v=r[l+3];const y=c[h+0],M=c[h+1],A=c[h+2],R=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v;return}if(d===1){e[i+0]=y,e[i+1]=M,e[i+2]=A,e[i+3]=R;return}if(v!==R||m!==y||p!==M||_!==A){let x=1-d;const S=m*y+p*M+_*A+v*R,z=S>=0?1:-1,D=1-S*S;if(D>Number.EPSILON){const J=Math.sqrt(D),F=Math.atan2(J,S*z);x=Math.sin(x*F)/J,d=Math.sin(d*F)/J}const O=d*z;if(m=m*x+y*O,p=p*x+M*O,_=_*x+A*O,v=v*x+R*O,x===1-d){const J=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=J,p*=J,_*=J,v*=J}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],v=c[h],y=c[h+1],M=c[h+2],A=c[h+3];return e[i]=d*A+_*v+m*M-p*y,e[i+1]=m*A+_*y+p*v-d*M,e[i+2]=p*A+_*M+d*y-m*v,e[i+3]=_*A-d*v-m*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),v=d(c/2),y=m(r/2),M=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=y*_*v+p*M*A,this._y=p*M*v-y*_*A,this._z=p*_*A+y*M*v,this._w=p*_*v-y*M*A;break;case"YXZ":this._x=y*_*v+p*M*A,this._y=p*M*v-y*_*A,this._z=p*_*A-y*M*v,this._w=p*_*v+y*M*A;break;case"ZXY":this._x=y*_*v-p*M*A,this._y=p*M*v+y*_*A,this._z=p*_*A+y*M*v,this._w=p*_*v-y*M*A;break;case"ZYX":this._x=y*_*v-p*M*A,this._y=p*M*v+y*_*A,this._z=p*_*A-y*M*v,this._w=p*_*v+y*M*A;break;case"YZX":this._x=y*_*v+p*M*A,this._y=p*M*v+y*_*A,this._z=p*_*A-y*M*v,this._w=p*_*v-y*M*A;break;case"XZY":this._x=y*_*v-p*M*A,this._y=p*M*v-y*_*A,this._z=p*_*A+y*M*v,this._w=p*_*v+y*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],y=r+d+v;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(In(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-r*p,this._z=c*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),v=Math.sin((1-i)*_)/p,y=Math.sin(i*_)/p;return this._w=h*v+this._w*y,this._x=r*v+this._x*y,this._y=l*v+this._y*y,this._z=c*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(e=0,i=0,r=0){at.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(S_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(S_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),_=2*(d*i-c*l),v=2*(c*r-h*i);return this.x=i+m*p+h*v-d*_,this.y=r+m*_+d*p-c*v,this.z=l+m*v+c*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(In(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new at,S_=new Io;class Fo{constructor(e=new at(1/0,1/0,1/0),i=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,di):di.fromBufferAttribute(c,h),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$l.copy(r.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),tu.subVectors(this.max,Ro),ns.subVectors(e.a,Ro),is.subVectors(e.b,Ro),as.subVectors(e.c,Ro),wa.subVectors(is,ns),Da.subVectors(as,is),ar.subVectors(ns,as);let i=[0,-wa.z,wa.y,0,-Da.z,Da.y,0,-ar.z,ar.y,wa.z,0,-wa.x,Da.z,0,-Da.x,ar.z,0,-ar.x,-wa.y,wa.x,0,-Da.y,Da.x,0,-ar.y,ar.x,0];return!ah(i,ns,is,as,tu)||(i=[1,0,0,0,1,0,0,0,1],!ah(i,ns,is,as,tu))?!1:(eu.crossVectors(wa,Da),i=[eu.x,eu.y,eu.z],ah(i,ns,is,as,tu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xi=[new at,new at,new at,new at,new at,new at,new at,new at],di=new at,$l=new Fo,ns=new at,is=new at,as=new at,wa=new at,Da=new at,ar=new at,Ro=new at,tu=new at,eu=new at,rr=new at;function ah(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){rr.fromArray(o,c);const d=l.x*Math.abs(rr.x)+l.y*Math.abs(rr.y)+l.z*Math.abs(rr.z),m=e.dot(rr),p=i.dot(rr),_=r.dot(rr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const cy=new Fo,Co=new at,rh=new at;class zu{constructor(e=new at,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):cy.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Co,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(rh)),this.expandByPoint(Co.copy(e.center).sub(rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new at,sh=new at,nu=new at,Ua=new at,oh=new at,iu=new at,lh=new at;class w0{constructor(e=new at,i=new at(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ki.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,i),ki.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){sh.copy(e).add(i).multiplyScalar(.5),nu.copy(i).sub(e).normalize(),Ua.copy(this.origin).sub(sh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(nu),d=Ua.dot(this.direction),m=-Ua.dot(nu),p=Ua.lengthSq(),_=Math.abs(1-h*h);let v,y,M,A;if(_>0)if(v=h*m-d,y=h*d-m,A=c*_,v>=0)if(y>=-A)if(y<=A){const R=1/_;v*=R,y*=R,M=v*(v+h*y+2*d)+y*(h*v+y+2*m)+p}else y=c,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;else y=-c,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;else y<=-A?(v=Math.max(0,-(-h*c+d)),y=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+y*(y+2*m)+p):y<=A?(v=0,y=Math.min(Math.max(-c,-m),c),M=y*(y+2*m)+p):(v=Math.max(0,-(h*c+d)),y=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+y*(y+2*m)+p);else y=h>0?-c:c,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(sh).addScaledVector(nu,y),M}intersectSphere(e,i){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),l=ki.dot(ki)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),_>=0?(c=(e.min.y-y.y)*_,h=(e.max.y-y.y)*_):(c=(e.max.y-y.y)*_,h=(e.min.y-y.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-y.z)*v,m=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,m=(e.min.z-y.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,i,r,l,c){oh.subVectors(i,e),iu.subVectors(r,e),lh.crossVectors(oh,iu);let h=this.direction.dot(lh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ua.subVectors(this.origin,e);const m=d*this.direction.dot(iu.crossVectors(Ua,iu));if(m<0)return null;const p=d*this.direction.dot(oh.cross(Ua));if(p<0||m+p>h)return null;const _=-d*Ua.dot(lh);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,i,r,l,c,h,d,m,p,_,v,y,M,A,R,x){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,_,v,y,M,A,R,x)}set(e,i,r,l,c,h,d,m,p,_,v,y,M,A,R,x){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=l,S[1]=c,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=_,S[10]=v,S[14]=y,S[3]=M,S[7]=A,S[11]=R,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/rs.setFromMatrixColumn(e,0).length(),c=1/rs.setFromMatrixColumn(e,1).length(),h=1/rs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const y=h*_,M=h*v,A=d*_,R=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=M+A*p,i[5]=y-R*p,i[9]=-d*m,i[2]=R-y*p,i[6]=A+M*p,i[10]=h*m}else if(e.order==="YXZ"){const y=m*_,M=m*v,A=p*_,R=p*v;i[0]=y+R*d,i[4]=A*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=M*d-A,i[6]=R+y*d,i[10]=h*m}else if(e.order==="ZXY"){const y=m*_,M=m*v,A=p*_,R=p*v;i[0]=y-R*d,i[4]=-h*v,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*_,i[9]=R-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const y=h*_,M=h*v,A=d*_,R=d*v;i[0]=m*_,i[4]=A*p-M,i[8]=y*p+R,i[1]=m*v,i[5]=R*p+y,i[9]=M*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const y=h*m,M=h*p,A=d*m,R=d*p;i[0]=m*_,i[4]=R-y*v,i[8]=A*v+M,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*v+A,i[10]=y-R*v}else if(e.order==="XZY"){const y=h*m,M=h*p,A=d*m,R=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=y*v+R,i[5]=h*_,i[9]=M*v-A,i[2]=A*v-M,i[6]=d*_,i[10]=R*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fy,e,hy)}lookAt(e,i,r){const l=this.elements;return jn.subVectors(e,i),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),La.crossVectors(r,jn),La.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),La.crossVectors(r,jn)),La.normalize(),au.crossVectors(jn,La),l[0]=La.x,l[4]=au.x,l[8]=jn.x,l[1]=La.y,l[5]=au.y,l[9]=jn.y,l[2]=La.z,l[6]=au.z,l[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],v=r[5],y=r[9],M=r[13],A=r[2],R=r[6],x=r[10],S=r[14],z=r[3],D=r[7],O=r[11],J=r[15],F=l[0],L=l[4],Q=l[8],w=l[12],b=l[1],G=l[5],lt=l[9],it=l[13],ht=l[2],ct=l[6],P=l[10],k=l[14],V=l[3],vt=l[7],Et=l[11],U=l[15];return c[0]=h*F+d*b+m*ht+p*V,c[4]=h*L+d*G+m*ct+p*vt,c[8]=h*Q+d*lt+m*P+p*Et,c[12]=h*w+d*it+m*k+p*U,c[1]=_*F+v*b+y*ht+M*V,c[5]=_*L+v*G+y*ct+M*vt,c[9]=_*Q+v*lt+y*P+M*Et,c[13]=_*w+v*it+y*k+M*U,c[2]=A*F+R*b+x*ht+S*V,c[6]=A*L+R*G+x*ct+S*vt,c[10]=A*Q+R*lt+x*P+S*Et,c[14]=A*w+R*it+x*k+S*U,c[3]=z*F+D*b+O*ht+J*V,c[7]=z*L+D*G+O*ct+J*vt,c[11]=z*Q+D*lt+O*P+J*Et,c[15]=z*w+D*it+O*k+J*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],v=e[6],y=e[10],M=e[14],A=e[3],R=e[7],x=e[11],S=e[15];return A*(+c*m*v-l*p*v-c*d*y+r*p*y+l*d*M-r*m*M)+R*(+i*m*M-i*p*y+c*h*y-l*h*M+l*p*_-c*m*_)+x*(+i*p*v-i*d*M-c*h*v+r*h*M+c*d*_-r*p*_)+S*(-l*d*_-i*m*v+i*d*y+l*h*v-r*h*y+r*m*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],v=e[9],y=e[10],M=e[11],A=e[12],R=e[13],x=e[14],S=e[15],z=v*x*p-R*y*p+R*m*M-d*x*M-v*m*S+d*y*S,D=A*y*p-_*x*p-A*m*M+h*x*M+_*m*S-h*y*S,O=_*R*p-A*v*p+A*d*M-h*R*M-_*d*S+h*v*S,J=A*v*m-_*R*m-A*d*y+h*R*y+_*d*x-h*v*x,F=i*z+r*D+l*O+c*J;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/F;return e[0]=z*L,e[1]=(R*y*c-v*x*c-R*l*M+r*x*M+v*l*S-r*y*S)*L,e[2]=(d*x*c-R*m*c+R*l*p-r*x*p-d*l*S+r*m*S)*L,e[3]=(v*m*c-d*y*c-v*l*p+r*y*p+d*l*M-r*m*M)*L,e[4]=D*L,e[5]=(_*x*c-A*y*c+A*l*M-i*x*M-_*l*S+i*y*S)*L,e[6]=(A*m*c-h*x*c-A*l*p+i*x*p+h*l*S-i*m*S)*L,e[7]=(h*y*c-_*m*c+_*l*p-i*y*p-h*l*M+i*m*M)*L,e[8]=O*L,e[9]=(A*v*c-_*R*c-A*r*M+i*R*M+_*r*S-i*v*S)*L,e[10]=(h*R*c-A*d*c+A*r*p-i*R*p-h*r*S+i*d*S)*L,e[11]=(_*d*c-h*v*c-_*r*p+i*v*p+h*r*M-i*d*M)*L,e[12]=J*L,e[13]=(_*R*l-A*v*l+A*r*y-i*R*y-_*r*x+i*v*x)*L,e[14]=(A*d*l-h*R*l-A*r*m+i*R*m+h*r*x-i*d*x)*L,e[15]=(h*v*l-_*d*l+_*r*m-i*v*m-h*r*y+i*d*y)*L,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,_=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,v=d+d,y=c*p,M=c*_,A=c*v,R=h*_,x=h*v,S=d*v,z=m*p,D=m*_,O=m*v,J=r.x,F=r.y,L=r.z;return l[0]=(1-(R+S))*J,l[1]=(M+O)*J,l[2]=(A-D)*J,l[3]=0,l[4]=(M-O)*F,l[5]=(1-(y+S))*F,l[6]=(x+z)*F,l[7]=0,l[8]=(A+D)*L,l[9]=(x-z)*L,l[10]=(1-(y+R))*L,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=rs.set(l[0],l[1],l[2]).length();const h=rs.set(l[4],l[5],l[6]).length(),d=rs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],pi.copy(this);const p=1/c,_=1/h,v=1/d;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=_,pi.elements[5]*=_,pi.elements[6]*=_,pi.elements[8]*=v,pi.elements[9]*=v,pi.elements[10]*=v,i.setFromRotationMatrix(pi),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Qi){const m=this.elements,p=2*c/(i-e),_=2*c/(r-l),v=(i+e)/(i-e),y=(r+l)/(r-l);let M,A;if(d===Qi)M=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===Lu)M=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Qi){const m=this.elements,p=1/(i-e),_=1/(r-l),v=1/(h-c),y=(i+e)*p,M=(r+l)*_;let A,R;if(d===Qi)A=(h+c)*v,R=-2*v;else if(d===Lu)A=c*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=R,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const rs=new at,pi=new rn,fy=new at(0,0,0),hy=new at(1,1,1),La=new at,au=new at,jn=new at,x_=new rn,y_=new Io;class ta{constructor(e=0,i=0,r=0,l=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(In(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-In(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(In(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-In(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(In(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-In(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return x_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(x_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return y_.setFromEuler(this),this.setFromQuaternion(y_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class D0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dy=0;const M_=new at,ss=new Io,Wi=new rn,ru=new at,wo=new at,py=new at,my=new Io,E_=new at(1,0,0),T_=new at(0,1,0),A_=new at(0,0,1),b_={type:"added"},gy={type:"removed"},os={type:"childadded",child:null},uh={type:"childremoved",child:null};class Hn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new at,i=new ta,r=new Io,l=new at(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new se}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new D0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ss.setFromAxisAngle(e,i),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,i){return ss.setFromAxisAngle(e,i),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(E_,e)}rotateY(e){return this.rotateOnAxis(T_,e)}rotateZ(e){return this.rotateOnAxis(A_,e)}translateOnAxis(e,i){return M_.copy(e).applyQuaternion(this.quaternion),this.position.add(M_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(E_,e)}translateY(e){return this.translateOnAxis(T_,e)}translateZ(e){return this.translateOnAxis(A_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?ru.copy(e):ru.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(wo,ru,this.up):Wi.lookAt(ru,wo,this.up),this.quaternion.setFromRotationMatrix(Wi),l&&(Wi.extractRotation(l.matrixWorld),ss.setFromRotationMatrix(Wi),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(b_),os.child=e,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(gy),uh.child=e,this.dispatchEvent(uh),uh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(b_),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,py),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,my,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),v=h(e.shapes),y=h(e.skeletons),M=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new at(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new at,qi=new at,ch=new at,Yi=new at,ls=new at,us=new at,R_=new at,fh=new at,hh=new at,dh=new at;class Ai{constructor(e=new at,i=new at,r=new at){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),mi.subVectors(e,i),l.cross(mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){mi.subVectors(l,i),qi.subVectors(r,i),ch.subVectors(e,i);const h=mi.dot(mi),d=mi.dot(qi),m=mi.dot(ch),p=qi.dot(qi),_=qi.dot(ch),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const y=1/v,M=(p*m-d*_)*y,A=(h*_-d*m)*y;return c.set(1-M-A,A,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,Yi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Yi.x),m.addScaledVector(h,Yi.y),m.addScaledVector(d,Yi.z),m)}static isFrontFacing(e,i,r,l){return mi.subVectors(r,i),qi.subVectors(e,i),mi.cross(qi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),mi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ai.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ai.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;ls.subVectors(l,r),us.subVectors(c,r),fh.subVectors(e,r);const m=ls.dot(fh),p=us.dot(fh);if(m<=0&&p<=0)return i.copy(r);hh.subVectors(e,l);const _=ls.dot(hh),v=us.dot(hh);if(_>=0&&v<=_)return i.copy(l);const y=m*v-_*p;if(y<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(ls,h);dh.subVectors(e,c);const M=ls.dot(dh),A=us.dot(dh);if(A>=0&&M<=A)return i.copy(c);const R=M*p-m*A;if(R<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(us,d);const x=_*A-M*v;if(x<=0&&v-_>=0&&M-A>=0)return R_.subVectors(c,l),d=(v-_)/(v-_+(M-A)),i.copy(l).addScaledVector(R_,d);const S=1/(x+R+y);return h=R*S,d=y*S,i.copy(r).addScaledVector(ls,h).addScaledVector(us,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const U0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Na={h:0,s:0,l:0},su={h:0,s:0,l:0};function ph(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Te{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ee.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ee.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ee.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ee.workingColorSpace){if(e=ey(e,1),i=In(i,0,1),r=In(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=ph(h,c,e+1/3),this.g=ph(h,c,e),this.b=ph(h,c,e-1/3)}return Ee.toWorkingColorSpace(this,l),this}setStyle(e,i=Ei){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ei){const r=U0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=eh(e.r),this.g=eh(e.g),this.b=eh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ei){return Ee.fromWorkingColorSpace(bn.copy(this),e),Math.round(In(bn.r*255,0,255))*65536+Math.round(In(bn.g*255,0,255))*256+Math.round(In(bn.b*255,0,255))}getHexString(e=Ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ee.workingColorSpace){Ee.fromWorkingColorSpace(bn.copy(this),i);const r=bn.r,l=bn.g,c=bn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=_<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(bn.copy(this),i),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Ei){Ee.fromWorkingColorSpace(bn.copy(this),e);const i=bn.r,r=bn.g,l=bn.b;return e!==Ei?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Na),this.setHSL(Na.h+e,Na.s+i,Na.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Na),e.getHSL(su);const r=$f(Na.h,su.h,i),l=$f(Na.s,su.s,i),c=$f(Na.l,su.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Te;Te.NAMES=U0;let _y=0;class Ho extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=Ss,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Rh,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Cu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(r.blending=this.blending),this.side!==Fa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==bh&&(r.blendSrc=this.blendSrc),this.blendDst!==Rh&&(r.blendDst=this.blendDst),this.blendEquation!==hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Cu&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==d_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class L0 extends Ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=d0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new at,ou=new Ae;class dn{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=p_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Oo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ou.fromBufferAttribute(this,i),ou.applyMatrix3(e),this.setXY(i,ou.x,ou.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(e),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(e),this.setXYZ(i,an.x,an.y,an.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ao(i,this.array)),i}setX(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ao(i,this.array)),i}setY(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ao(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ao(i,this.array)),i}setW(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),c=Bn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==p_&&(e.usage=this.usage),e}}class N0 extends dn{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class O0 extends dn{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class gr extends dn{constructor(e,i,r){super(new Float32Array(e),i,r)}}let vy=0;const ri=new rn,mh=new Hn,cs=new at,Kn=new Fo,Do=new Fo,hn=new at;class na extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(b0(e)?O0:N0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new se().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,i,r){return ri.makeTranslation(e,i,r),this.applyMatrix4(ri),this}scale(e,i,r){return ri.makeScale(e,i,r),this.applyMatrix4(ri),this}lookAt(e){return mh.lookAt(e),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const c=e[r];i.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new gr(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Kn.setFromBufferAttribute(c),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Do.setFromBufferAttribute(d),this.morphTargetsRelative?(hn.addVectors(Kn.min,Do.min),Kn.expandByPoint(hn),hn.addVectors(Kn.max,Do.max),Kn.expandByPoint(hn)):(Kn.expandByPoint(Do.min),Kn.expandByPoint(Do.max))}Kn.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)hn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(hn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)hn.fromBufferAttribute(d,p),m&&(cs.fromBufferAttribute(e,p),hn.add(cs)),l=Math.max(l,r.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Q=0;Q<r.count;Q++)d[Q]=new at,m[Q]=new at;const p=new at,_=new at,v=new at,y=new Ae,M=new Ae,A=new Ae,R=new at,x=new at;function S(Q,w,b){p.fromBufferAttribute(r,Q),_.fromBufferAttribute(r,w),v.fromBufferAttribute(r,b),y.fromBufferAttribute(c,Q),M.fromBufferAttribute(c,w),A.fromBufferAttribute(c,b),_.sub(p),v.sub(p),M.sub(y),A.sub(y);const G=1/(M.x*A.y-A.x*M.y);isFinite(G)&&(R.copy(_).multiplyScalar(A.y).addScaledVector(v,-M.y).multiplyScalar(G),x.copy(v).multiplyScalar(M.x).addScaledVector(_,-A.x).multiplyScalar(G),d[Q].add(R),d[w].add(R),d[b].add(R),m[Q].add(x),m[w].add(x),m[b].add(x))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let Q=0,w=z.length;Q<w;++Q){const b=z[Q],G=b.start,lt=b.count;for(let it=G,ht=G+lt;it<ht;it+=3)S(e.getX(it+0),e.getX(it+1),e.getX(it+2))}const D=new at,O=new at,J=new at,F=new at;function L(Q){J.fromBufferAttribute(l,Q),F.copy(J);const w=d[Q];D.copy(w),D.sub(J.multiplyScalar(J.dot(w))).normalize(),O.crossVectors(F,w);const G=O.dot(m[Q])<0?-1:1;h.setXYZW(Q,D.x,D.y,D.z,G)}for(let Q=0,w=z.length;Q<w;++Q){const b=z[Q],G=b.start,lt=b.count;for(let it=G,ht=G+lt;it<ht;it+=3)L(e.getX(it+0)),L(e.getX(it+1)),L(e.getX(it+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new dn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const l=new at,c=new at,h=new at,d=new at,m=new at,p=new at,_=new at,v=new at;if(e)for(let y=0,M=e.count;y<M;y+=3){const A=e.getX(y+0),R=e.getX(y+1),x=e.getX(y+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,x),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,x),d.add(_),m.add(_),p.add(_),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)hn.fromBufferAttribute(e,i),hn.normalize(),e.setXYZ(i,hn.x,hn.y,hn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,v=d.normalized,y=new p.constructor(m.length*_);let M=0,A=0;for(let R=0,x=m.length;R<x;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*_;for(let S=0;S<_;S++)y[A++]=p[M++]}return new dn(y,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new na,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,v=p.length;_<v;_++){const y=p[_],M=e(y,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,y=p.length;v<y;v++){const M=p[v];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let y=0,M=v.length;y<M;y++)_.push(v[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const C_=new rn,sr=new w0,lu=new zu,w_=new at,fs=new at,hs=new at,ds=new at,gh=new at,uu=new at,cu=new Ae,fu=new Ae,hu=new Ae,D_=new at,U_=new at,L_=new at,du=new at,pu=new at;class Ji extends Hn{constructor(e=new na,i=new L0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){uu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],v=c[m];_!==0&&(gh.fromBufferAttribute(v,e),h?uu.addScaledVector(gh,_):uu.addScaledVector(gh.sub(i),_))}i.add(uu)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),lu.copy(r.boundingSphere),lu.applyMatrix4(c),sr.copy(e.ray).recast(e.near),!(lu.containsPoint(sr.origin)===!1&&(sr.intersectSphere(lu,w_)===null||sr.origin.distanceToSquared(w_)>(e.far-e.near)**2))&&(C_.copy(c).invert(),sr.copy(e.ray).applyMatrix4(C_),!(r.boundingBox!==null&&sr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,sr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,y=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,R=y.length;A<R;A++){const x=y[A],S=h[x.materialIndex],z=Math.max(x.start,M.start),D=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let O=z,J=D;O<J;O+=3){const F=d.getX(O),L=d.getX(O+1),Q=d.getX(O+2);l=mu(this,S,e,r,p,_,v,F,L,Q),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let x=A,S=R;x<S;x+=3){const z=d.getX(x),D=d.getX(x+1),O=d.getX(x+2);l=mu(this,h,e,r,p,_,v,z,D,O),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,R=y.length;A<R;A++){const x=y[A],S=h[x.materialIndex],z=Math.max(x.start,M.start),D=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let O=z,J=D;O<J;O+=3){const F=O,L=O+1,Q=O+2;l=mu(this,S,e,r,p,_,v,F,L,Q),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let x=A,S=R;x<S;x+=3){const z=x,D=x+1,O=x+2;l=mu(this,h,e,r,p,_,v,z,D,O),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function Sy(o,e,i,r,l,c,h,d){let m;if(e.side===Fn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===Fa,d),m===null)return null;pu.copy(d),pu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(pu);return p<i.near||p>i.far?null:{distance:p,point:pu.clone(),object:o}}function mu(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,fs),o.getVertexPosition(m,hs),o.getVertexPosition(p,ds);const _=Sy(o,e,i,r,fs,hs,ds,du);if(_){l&&(cu.fromBufferAttribute(l,d),fu.fromBufferAttribute(l,m),hu.fromBufferAttribute(l,p),_.uv=Ai.getInterpolation(du,fs,hs,ds,cu,fu,hu,new Ae)),c&&(cu.fromBufferAttribute(c,d),fu.fromBufferAttribute(c,m),hu.fromBufferAttribute(c,p),_.uv1=Ai.getInterpolation(du,fs,hs,ds,cu,fu,hu,new Ae)),h&&(D_.fromBufferAttribute(h,d),U_.fromBufferAttribute(h,m),L_.fromBufferAttribute(h,p),_.normal=Ai.getInterpolation(du,fs,hs,ds,D_,U_,L_,new at),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new at,materialIndex:0};Ai.getNormal(fs,hs,ds,v.normal),_.face=v}return _}class Go extends na{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],v=[];let y=0,M=0;A("z","y","x",-1,-1,r,i,e,h,c,0),A("z","y","x",1,-1,r,i,-e,h,c,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,c,4),A("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new gr(p,3)),this.setAttribute("normal",new gr(_,3)),this.setAttribute("uv",new gr(v,2));function A(R,x,S,z,D,O,J,F,L,Q,w){const b=O/L,G=J/Q,lt=O/2,it=J/2,ht=F/2,ct=L+1,P=Q+1;let k=0,V=0;const vt=new at;for(let Et=0;Et<P;Et++){const U=Et*G-it;for(let tt=0;tt<ct;tt++){const St=tt*b-lt;vt[R]=St*z,vt[x]=U*D,vt[S]=ht,p.push(vt.x,vt.y,vt.z),vt[R]=0,vt[x]=0,vt[S]=F>0?1:-1,_.push(vt.x,vt.y,vt.z),v.push(tt/L),v.push(1-Et/Q),k+=1}}for(let Et=0;Et<Q;Et++)for(let U=0;U<L;U++){const tt=y+U+ct*Et,St=y+U+ct*(Et+1),Y=y+(U+1)+ct*(Et+1),ot=y+(U+1)+ct*Et;m.push(tt,St,ot),m.push(St,Y,ot),V+=6}d.addGroup(M,V,w),M+=V,y+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Cn(o){const e={};for(let i=0;i<o.length;i++){const r=bs(o[i]);for(const l in r)e[l]=r[l]}return e}function xy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function P0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ee.workingColorSpace}const yy={clone:bs,merge:Cn};var My=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ey=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ea extends Ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=My,this.fragmentShader=Ey,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=xy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class z0 extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Qi}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oa=new at,N_=new Ae,O_=new Ae;class si extends z0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ad*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ad*2*Math.atan(Math.tan(Jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z)}getViewSize(e,i){return this.getViewBounds(e,N_,O_),i.subVectors(O_,N_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Jf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ps=-90,ms=1;class Ty extends Hn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(ps,ms,e,i);l.layers=this.layers,this.add(l);const c=new si(ps,ms,e,i);c.layers=this.layers,this.add(c);const h=new si(ps,ms,e,i);h.layers=this.layers,this.add(h);const d=new si(ps,ms,e,i);d.layers=this.layers,this.add(d);const m=new si(ps,ms,e,i);m.layers=this.layers,this.add(m);const p=new si(ps,ms,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Qi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Lu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(v,y,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class B0 extends wn{constructor(e,i,r,l,c,h,d,m,p,_){e=e!==void 0?e:[],i=i!==void 0?i:Ms,super(e,i,r,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ay extends vr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new B0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:gi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Go(5,5,5),c=new ea({name:"CubemapFromEquirect",uniforms:bs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Ba});c.uniforms.tEquirect.value=i;const h=new Ji(l,c),d=i.minFilter;return i.minFilter===mr&&(i.minFilter=gi),new Ty(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}const _h=new at,by=new at,Ry=new se;class cr{constructor(e=new at(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=_h.subVectors(r,i).cross(by.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(_h),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Ry.getNormalMatrix(e),l=this.coplanarPoint(_h).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new zu,gu=new at;class I0{constructor(e=new cr,i=new cr,r=new cr,l=new cr,c=new cr,h=new cr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Qi){const r=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],_=l[5],v=l[6],y=l[7],M=l[8],A=l[9],R=l[10],x=l[11],S=l[12],z=l[13],D=l[14],O=l[15];if(r[0].setComponents(m-c,y-p,x-M,O-S).normalize(),r[1].setComponents(m+c,y+p,x+M,O+S).normalize(),r[2].setComponents(m+h,y+_,x+A,O+z).normalize(),r[3].setComponents(m-h,y-_,x-A,O-z).normalize(),r[4].setComponents(m-d,y-v,x-R,O-D).normalize(),i===Qi)r[5].setComponents(m+d,y+v,x+R,O+D).normalize();else if(i===Lu)r[5].setComponents(d,v,R,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),or.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(gu.x=l.normal.x>0?e.max.x:e.min.x,gu.y=l.normal.y>0?e.max.y:e.min.y,gu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(gu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function F0(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Cy(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const _=m.array,v=m._updateRange,y=m.updateRanges;if(o.bindBuffer(p,d),v.count===-1&&y.length===0&&o.bufferSubData(p,0,_),y.length!==0){for(let M=0,A=y.length;M<A;M++){const R=y[M];o.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}v.count!==-1&&(o.bufferSubData(p,v.offset*_.BYTES_PER_ELEMENT,_,v.offset,v.count),v.count=-1),m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}class Bu extends na{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,v=e/d,y=i/m,M=[],A=[],R=[],x=[];for(let S=0;S<_;S++){const z=S*y-h;for(let D=0;D<p;D++){const O=D*v-c;A.push(O,-z,0),R.push(0,0,1),x.push(D/d),x.push(1-S/m)}}for(let S=0;S<m;S++)for(let z=0;z<d;z++){const D=z+p*S,O=z+p*(S+1),J=z+1+p*(S+1),F=z+1+p*S;M.push(D,O,F),M.push(O,J,F)}this.setIndex(M),this.setAttribute("position",new gr(A,3)),this.setAttribute("normal",new gr(R,3)),this.setAttribute("uv",new gr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.width,e.height,e.widthSegments,e.heightSegments)}}var wy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ly=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ny=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Py=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,By=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Iy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$y=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rM="gl_FragColor = linearToOutputTexel( gl_FragColor );",sM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,MM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,WM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ZM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,JM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_E=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ME=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,EE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,RE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$E=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:wy,alphahash_pars_fragment:Dy,alphamap_fragment:Uy,alphamap_pars_fragment:Ly,alphatest_fragment:Ny,alphatest_pars_fragment:Oy,aomap_fragment:Py,aomap_pars_fragment:zy,batching_pars_vertex:By,batching_vertex:Iy,begin_vertex:Fy,beginnormal_vertex:Hy,bsdfs:Gy,iridescence_fragment:Vy,bumpmap_pars_fragment:Xy,clipping_planes_fragment:ky,clipping_planes_pars_fragment:Wy,clipping_planes_pars_vertex:qy,clipping_planes_vertex:Yy,color_fragment:Zy,color_pars_fragment:jy,color_pars_vertex:Ky,color_vertex:Qy,common:Jy,cube_uv_reflection_fragment:$y,defaultnormal_vertex:tM,displacementmap_pars_vertex:eM,displacementmap_vertex:nM,emissivemap_fragment:iM,emissivemap_pars_fragment:aM,colorspace_fragment:rM,colorspace_pars_fragment:sM,envmap_fragment:oM,envmap_common_pars_fragment:lM,envmap_pars_fragment:uM,envmap_pars_vertex:cM,envmap_physical_pars_fragment:yM,envmap_vertex:fM,fog_vertex:hM,fog_pars_vertex:dM,fog_fragment:pM,fog_pars_fragment:mM,gradientmap_pars_fragment:gM,lightmap_pars_fragment:_M,lights_lambert_fragment:vM,lights_lambert_pars_fragment:SM,lights_pars_begin:xM,lights_toon_fragment:MM,lights_toon_pars_fragment:EM,lights_phong_fragment:TM,lights_phong_pars_fragment:AM,lights_physical_fragment:bM,lights_physical_pars_fragment:RM,lights_fragment_begin:CM,lights_fragment_maps:wM,lights_fragment_end:DM,logdepthbuf_fragment:UM,logdepthbuf_pars_fragment:LM,logdepthbuf_pars_vertex:NM,logdepthbuf_vertex:OM,map_fragment:PM,map_pars_fragment:zM,map_particle_fragment:BM,map_particle_pars_fragment:IM,metalnessmap_fragment:FM,metalnessmap_pars_fragment:HM,morphinstance_vertex:GM,morphcolor_vertex:VM,morphnormal_vertex:XM,morphtarget_pars_vertex:kM,morphtarget_vertex:WM,normal_fragment_begin:qM,normal_fragment_maps:YM,normal_pars_fragment:ZM,normal_pars_vertex:jM,normal_vertex:KM,normalmap_pars_fragment:QM,clearcoat_normal_fragment_begin:JM,clearcoat_normal_fragment_maps:$M,clearcoat_pars_fragment:tE,iridescence_pars_fragment:eE,opaque_fragment:nE,packing:iE,premultiplied_alpha_fragment:aE,project_vertex:rE,dithering_fragment:sE,dithering_pars_fragment:oE,roughnessmap_fragment:lE,roughnessmap_pars_fragment:uE,shadowmap_pars_fragment:cE,shadowmap_pars_vertex:fE,shadowmap_vertex:hE,shadowmask_pars_fragment:dE,skinbase_vertex:pE,skinning_pars_vertex:mE,skinning_vertex:gE,skinnormal_vertex:_E,specularmap_fragment:vE,specularmap_pars_fragment:SE,tonemapping_fragment:xE,tonemapping_pars_fragment:yE,transmission_fragment:ME,transmission_pars_fragment:EE,uv_pars_fragment:TE,uv_pars_vertex:AE,uv_vertex:bE,worldpos_vertex:RE,background_vert:CE,background_frag:wE,backgroundCube_vert:DE,backgroundCube_frag:UE,cube_vert:LE,cube_frag:NE,depth_vert:OE,depth_frag:PE,distanceRGBA_vert:zE,distanceRGBA_frag:BE,equirect_vert:IE,equirect_frag:FE,linedashed_vert:HE,linedashed_frag:GE,meshbasic_vert:VE,meshbasic_frag:XE,meshlambert_vert:kE,meshlambert_frag:WE,meshmatcap_vert:qE,meshmatcap_frag:YE,meshnormal_vert:ZE,meshnormal_frag:jE,meshphong_vert:KE,meshphong_frag:QE,meshphysical_vert:JE,meshphysical_frag:$E,meshtoon_vert:tT,meshtoon_frag:eT,points_vert:nT,points_frag:iT,shadow_vert:aT,shadow_frag:rT,sprite_vert:sT,sprite_frag:oT},Ut={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Ti={basic:{uniforms:Cn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:Cn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Te(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:Cn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:Cn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:Cn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Te(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:Cn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:Cn([Ut.points,Ut.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:Cn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:Cn([Ut.common,Ut.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:Cn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:Cn([Ut.sprite,Ut.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:Cn([Ut.common,Ut.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:Cn([Ut.lights,Ut.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Ti.physical={uniforms:Cn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const _u={r:0,b:0,g:0},lr=new ta,lT=new rn;function uT(o,e,i,r,l,c,h){const d=new Te(0);let m=c===!0?0:1,p,_,v=null,y=0,M=null;function A(z){let D=z.isScene===!0?z.background:null;return D&&D.isTexture&&(D=(z.backgroundBlurriness>0?i:e).get(D)),D}function R(z){let D=!1;const O=A(z);O===null?S(d,m):O&&O.isColor&&(S(O,1),D=!0);const J=o.xr.getEnvironmentBlendMode();J==="additive"?r.buffers.color.setClear(0,0,0,1,h):J==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(z,D){const O=A(D);O&&(O.isCubeTexture||O.mapping===Ou)?(_===void 0&&(_=new Ji(new Go(1,1,1),new ea({name:"BackgroundCubeMaterial",uniforms:bs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(J,F,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),lr.copy(D.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),_.material.uniforms.envMap.value=O,_.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(lT.makeRotationFromEuler(lr)),_.material.toneMapped=Ee.getTransfer(O.colorSpace)!==Fe,(v!==O||y!==O.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,v=O,y=O.version,M=o.toneMapping),_.layers.enableAll(),z.unshift(_,_.geometry,_.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new Ji(new Bu(2,2),new ea({name:"BackgroundMaterial",uniforms:bs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ee.getTransfer(O.colorSpace)!==Fe,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(v!==O||y!==O.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=O,y=O.version,M=o.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null))}function S(z,D){z.getRGB(_u,P0(o)),r.buffers.color.setClear(_u.r,_u.g,_u.b,D,h)}return{getClearColor:function(){return d},setClearColor:function(z,D=1){d.set(z),m=D,S(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(z){m=z,S(d,m)},render:R,addToRenderList:x}}function cT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,h=!1;function d(b,G,lt,it,ht){let ct=!1;const P=v(it,lt,G);c!==P&&(c=P,p(c.object)),ct=M(b,it,lt,ht),ct&&A(b,it,lt,ht),ht!==null&&e.update(ht,o.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,O(b,G,lt,it),ht!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ht).buffer))}function m(){return o.createVertexArray()}function p(b){return o.bindVertexArray(b)}function _(b){return o.deleteVertexArray(b)}function v(b,G,lt){const it=lt.wireframe===!0;let ht=r[b.id];ht===void 0&&(ht={},r[b.id]=ht);let ct=ht[G.id];ct===void 0&&(ct={},ht[G.id]=ct);let P=ct[it];return P===void 0&&(P=y(m()),ct[it]=P),P}function y(b){const G=[],lt=[],it=[];for(let ht=0;ht<i;ht++)G[ht]=0,lt[ht]=0,it[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:lt,attributeDivisors:it,object:b,attributes:{},index:null}}function M(b,G,lt,it){const ht=c.attributes,ct=G.attributes;let P=0;const k=lt.getAttributes();for(const V in k)if(k[V].location>=0){const Et=ht[V];let U=ct[V];if(U===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(U=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(U=b.instanceColor)),Et===void 0||Et.attribute!==U||U&&Et.data!==U.data)return!0;P++}return c.attributesNum!==P||c.index!==it}function A(b,G,lt,it){const ht={},ct=G.attributes;let P=0;const k=lt.getAttributes();for(const V in k)if(k[V].location>=0){let Et=ct[V];Et===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(Et=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(Et=b.instanceColor));const U={};U.attribute=Et,Et&&Et.data&&(U.data=Et.data),ht[V]=U,P++}c.attributes=ht,c.attributesNum=P,c.index=it}function R(){const b=c.newAttributes;for(let G=0,lt=b.length;G<lt;G++)b[G]=0}function x(b){S(b,0)}function S(b,G){const lt=c.newAttributes,it=c.enabledAttributes,ht=c.attributeDivisors;lt[b]=1,it[b]===0&&(o.enableVertexAttribArray(b),it[b]=1),ht[b]!==G&&(o.vertexAttribDivisor(b,G),ht[b]=G)}function z(){const b=c.newAttributes,G=c.enabledAttributes;for(let lt=0,it=G.length;lt<it;lt++)G[lt]!==b[lt]&&(o.disableVertexAttribArray(lt),G[lt]=0)}function D(b,G,lt,it,ht,ct,P){P===!0?o.vertexAttribIPointer(b,G,lt,ht,ct):o.vertexAttribPointer(b,G,lt,it,ht,ct)}function O(b,G,lt,it){R();const ht=it.attributes,ct=lt.getAttributes(),P=G.defaultAttributeValues;for(const k in ct){const V=ct[k];if(V.location>=0){let vt=ht[k];if(vt===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(vt=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(vt=b.instanceColor)),vt!==void 0){const Et=vt.normalized,U=vt.itemSize,tt=e.get(vt);if(tt===void 0)continue;const St=tt.buffer,Y=tt.type,ot=tt.bytesPerElement,yt=Y===o.INT||Y===o.UNSIGNED_INT||vt.gpuType===ud;if(vt.isInterleavedBufferAttribute){const Mt=vt.data,Ft=Mt.stride,It=vt.offset;if(Mt.isInstancedInterleavedBuffer){for(let ee=0;ee<V.locationSize;ee++)S(V.location+ee,Mt.meshPerAttribute);b.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ee=0;ee<V.locationSize;ee++)x(V.location+ee);o.bindBuffer(o.ARRAY_BUFFER,St);for(let ee=0;ee<V.locationSize;ee++)D(V.location+ee,U/V.locationSize,Y,Et,Ft*ot,(It+U/V.locationSize*ee)*ot,yt)}else{if(vt.isInstancedBufferAttribute){for(let Mt=0;Mt<V.locationSize;Mt++)S(V.location+Mt,vt.meshPerAttribute);b.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Mt=0;Mt<V.locationSize;Mt++)x(V.location+Mt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Mt=0;Mt<V.locationSize;Mt++)D(V.location+Mt,U/V.locationSize,Y,Et,U*ot,U/V.locationSize*Mt*ot,yt)}}else if(P!==void 0){const Et=P[k];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(V.location,Et);break;case 3:o.vertexAttrib3fv(V.location,Et);break;case 4:o.vertexAttrib4fv(V.location,Et);break;default:o.vertexAttrib1fv(V.location,Et)}}}}z()}function J(){Q();for(const b in r){const G=r[b];for(const lt in G){const it=G[lt];for(const ht in it)_(it[ht].object),delete it[ht];delete G[lt]}delete r[b]}}function F(b){if(r[b.id]===void 0)return;const G=r[b.id];for(const lt in G){const it=G[lt];for(const ht in it)_(it[ht].object),delete it[ht];delete G[lt]}delete r[b.id]}function L(b){for(const G in r){const lt=r[G];if(lt[b.id]===void 0)continue;const it=lt[b.id];for(const ht in it)_(it[ht].object),delete it[ht];delete lt[b.id]}}function Q(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:w,dispose:J,releaseStatesOfGeometry:F,releaseStatesOfProgram:L,initAttributes:R,enableAttribute:x,disableUnusedAttributes:z}}function fT(o,e,i){let r;function l(p){r=p}function c(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,v){v!==0&&(o.drawArraysInstanced(r,p,_,v),i.update(_,r,v))}function d(p,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,v);let M=0;for(let A=0;A<v;A++)M+=_[A];i.update(M,r,1)}function m(p,_,v,y){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)h(p[A],_[A],y[A]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,_,0,y,0,v);let A=0;for(let R=0;R<v;R++)A+=_[R];for(let R=0;R<y.length;R++)i.update(A,r,y[R])}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function hT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==_i&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const L=F===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==$i&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ki&&!L)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),R=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),S=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=M>0,J=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:R,maxAttributes:x,maxVertexUniforms:S,maxVaryings:z,maxFragmentUniforms:D,vertexTextures:O,maxSamples:J}}function dT(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new cr,d=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const M=v.length!==0||y||r!==0||l;return l=y,r=v.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,y){i=_(v,y,0)},this.setState=function(v,y,M){const A=v.clippingPlanes,R=v.clipIntersection,x=v.clipShadows,S=o.get(v);if(!l||A===null||A.length===0||c&&!x)c?_(null):p();else{const z=c?0:r,D=z*4;let O=S.clippingState||null;m.value=O,O=_(A,y,D,M);for(let J=0;J!==D;++J)O[J]=i[J];S.clippingState=O,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,y,M,A){const R=v!==null?v.length:0;let x=null;if(R!==0){if(x=m.value,A!==!0||x===null){const S=M+R*4,z=y.matrixWorldInverse;d.getNormalMatrix(z),(x===null||x.length<S)&&(x=new Float32Array(S));for(let D=0,O=M;D!==R;++D,O+=4)h.copy(v[D]).applyMatrix4(z,d),h.normal.toArray(x,O),x[O+3]=h.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,x}}function pT(o){let e=new WeakMap;function i(h,d){return d===Ch?h.mapping=Ms:d===wh&&(h.mapping=Es),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ch||d===wh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Ay(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class mT extends z0{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const vs=4,P_=[.125,.215,.35,.446,.526,.582],dr=20,vh=new mT,z_=new Te;let Sh=null,xh=0,yh=0,Mh=!1;const fr=(1+Math.sqrt(5))/2,gs=1/fr,B_=[new at(-fr,gs,0),new at(fr,gs,0),new at(-gs,0,fr),new at(gs,0,fr),new at(0,fr,-gs),new at(0,fr,gs),new at(-1,1,-1),new at(1,1,-1),new at(-1,1,1),new at(1,1,1)];class I_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){Sh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=H_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sh,xh,yh),this._renderer.xr.enabled=Mh,e.scissorTest=!1,vu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ms||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:zo,format:_i,colorSpace:Ha,depthBuffer:!1},l=F_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gT(c)),this._blurMaterial=_T(c,e,i)}return l}_compileMaterial(e){const i=new Ji(this._lodPlanes[0],e);this._renderer.compile(i,vh)}_sceneToCubeUV(e,i,r,l){const d=new si(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(z_),_.toneMapping=Ia,_.autoClear=!1;const M=new L0({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),A=new Ji(new Go,M);let R=!1;const x=e.background;x?x.isColor&&(M.color.copy(x),e.background=null,R=!0):(M.color.copy(z_),R=!0);for(let S=0;S<6;S++){const z=S%3;z===0?(d.up.set(0,m[S],0),d.lookAt(p[S],0,0)):z===1?(d.up.set(0,0,m[S]),d.lookAt(0,p[S],0)):(d.up.set(0,m[S],0),d.lookAt(0,0,p[S]));const D=this._cubeSize;vu(l,z*D,S>2?D:0,D,D),_.setRenderTarget(l),R&&_.render(A,d),_.render(e,d)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=y,_.autoClear=v,e.background=x}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ms||e.mapping===Es;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=G_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=H_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Ji(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;vu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,vh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=B_[(l-c-1)%B_.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Ji(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*dr-1),R=c/A,x=isFinite(c)?1+Math.floor(_*R):dr;x>dr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${dr}`);const S=[];let z=0;for(let L=0;L<dr;++L){const Q=L/R,w=Math.exp(-Q*Q/2);S.push(w),L===0?z+=w:L<x&&(z+=2*w)}for(let L=0;L<S.length;L++)S[L]=S[L]/z;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=S,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:D}=this;y.dTheta.value=A,y.mipInt.value=D-r;const O=this._sizeLods[l],J=3*O*(l>D-vs?l-D+vs:0),F=4*(this._cubeSize-O);vu(i,J,F,3*O,2*O),m.setRenderTarget(i),m.render(v,vh)}}function gT(o){const e=[],i=[],r=[];let l=o;const c=o-vs+1+P_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-vs?m=P_[h-o+vs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),_=-p,v=1+p,y=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,A=6,R=3,x=2,S=1,z=new Float32Array(R*A*M),D=new Float32Array(x*A*M),O=new Float32Array(S*A*M);for(let F=0;F<M;F++){const L=F%3*2/3-1,Q=F>2?0:-1,w=[L,Q,0,L+2/3,Q,0,L+2/3,Q+1,0,L,Q,0,L+2/3,Q+1,0,L,Q+1,0];z.set(w,R*A*F),D.set(y,x*A*F);const b=[F,F,F,F,F,F];O.set(b,S*A*F)}const J=new na;J.setAttribute("position",new dn(z,R)),J.setAttribute("uv",new dn(D,x)),J.setAttribute("faceIndex",new dn(O,S)),e.push(J),l>vs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function F_(o,e,i){const r=new vr(o,e,i);return r.texture.mapping=Ou,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vu(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function _T(o,e,i){const r=new Float32Array(dr),l=new at(0,1,0);return new ea({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function H_(){return new ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function G_(){return new ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function gd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ch||m===wh,_=m===Ms||m===Es;if(p||_){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new I_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new I_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function ST(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Oo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function xT(o,e,i,r){const l={},c=new WeakMap;function h(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const A in y.attributes)e.remove(y.attributes[A]);for(const A in y.morphAttributes){const R=y.morphAttributes[A];for(let x=0,S=R.length;x<S;x++)e.remove(R[x])}y.removeEventListener("dispose",h),delete l[y.id];const M=c.get(y);M&&(e.remove(M),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(v,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(v){const y=v.attributes;for(const A in y)e.update(y[A],o.ARRAY_BUFFER);const M=v.morphAttributes;for(const A in M){const R=M[A];for(let x=0,S=R.length;x<S;x++)e.update(R[x],o.ARRAY_BUFFER)}}function p(v){const y=[],M=v.index,A=v.attributes.position;let R=0;if(M!==null){const z=M.array;R=M.version;for(let D=0,O=z.length;D<O;D+=3){const J=z[D+0],F=z[D+1],L=z[D+2];y.push(J,F,F,L,L,J)}}else if(A!==void 0){const z=A.array;R=A.version;for(let D=0,O=z.length/3-1;D<O;D+=3){const J=D+0,F=D+1,L=D+2;y.push(J,F,F,L,L,J)}}else return;const x=new(b0(y)?O0:N0)(y,1);x.version=R;const S=c.get(v);S&&e.remove(S),c.set(v,x)}function _(v){const y=c.get(v);if(y){const M=v.index;M!==null&&y.version<M.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function yT(o,e,i){let r;function l(y){r=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,M){o.drawElements(r,M,c,y*h),i.update(M,r,1)}function p(y,M,A){A!==0&&(o.drawElementsInstanced(r,M,c,y*h,A),i.update(M,r,A))}function _(y,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,y,0,A);let x=0;for(let S=0;S<A;S++)x+=M[S];i.update(x,r,1)}function v(y,M,A,R){if(A===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<y.length;S++)p(y[S]/h,M[S],R[S]);else{x.multiDrawElementsInstancedWEBGL(r,M,0,c,y,0,R,0,A);let S=0;for(let z=0;z<A;z++)S+=M[z];for(let z=0;z<R.length;z++)i.update(S,r,R[z])}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function MT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function ET(o,e,i){const r=new WeakMap,l=new pn;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let y=r.get(d);if(y===void 0||y.count!==v){let b=function(){Q.dispose(),r.delete(d),d.removeEventListener("dispose",b)};var M=b;y!==void 0&&y.texture.dispose();const A=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let O=0;A===!0&&(O=1),R===!0&&(O=2),x===!0&&(O=3);let J=d.attributes.position.count*O,F=1;J>e.maxTextureSize&&(F=Math.ceil(J/e.maxTextureSize),J=e.maxTextureSize);const L=new Float32Array(J*F*4*v),Q=new C0(L,J,F,v);Q.type=Ki,Q.needsUpdate=!0;const w=O*4;for(let G=0;G<v;G++){const lt=S[G],it=z[G],ht=D[G],ct=J*F*4*G;for(let P=0;P<lt.count;P++){const k=P*w;A===!0&&(l.fromBufferAttribute(lt,P),L[ct+k+0]=l.x,L[ct+k+1]=l.y,L[ct+k+2]=l.z,L[ct+k+3]=0),R===!0&&(l.fromBufferAttribute(it,P),L[ct+k+4]=l.x,L[ct+k+5]=l.y,L[ct+k+6]=l.z,L[ct+k+7]=0),x===!0&&(l.fromBufferAttribute(ht,P),L[ct+k+8]=l.x,L[ct+k+9]=l.y,L[ct+k+10]=l.z,L[ct+k+11]=ht.itemSize===4?l.w:1)}}y={count:v,texture:Q,size:new Ae(J,F)},r.set(d,y),d.addEventListener("dispose",b)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let x=0;x<p.length;x++)A+=p[x];const R=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function TT(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,v=e.get(m,_);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}class H0 extends wn{constructor(e,i,r,l,c,h,d,m,p,_=xs){if(_!==xs&&_!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===xs&&(r=_r),r===void 0&&_===As&&(r=Ts),super(null,l,c,h,d,m,_,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:oi,this.minFilter=m!==void 0?m:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const G0=new wn,V_=new H0(1,1),V0=new C0,X0=new uy,k0=new B0,X_=[],k_=[],W_=new Float32Array(16),q_=new Float32Array(9),Y_=new Float32Array(4);function Cs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=X_[l];if(c===void 0&&(c=new Float32Array(l),X_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function un(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function cn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Iu(o,e){let i=k_[e];i===void 0&&(i=new Int32Array(e),k_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function AT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function bT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2fv(this.addr,e),cn(i,e)}}function RT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(un(i,e))return;o.uniform3fv(this.addr,e),cn(i,e)}}function CT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4fv(this.addr,e),cn(i,e)}}function wT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),cn(i,e)}else{if(un(i,r))return;Y_.set(r),o.uniformMatrix2fv(this.addr,!1,Y_),cn(i,r)}}function DT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),cn(i,e)}else{if(un(i,r))return;q_.set(r),o.uniformMatrix3fv(this.addr,!1,q_),cn(i,r)}}function UT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),cn(i,e)}else{if(un(i,r))return;W_.set(r),o.uniformMatrix4fv(this.addr,!1,W_),cn(i,r)}}function LT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function NT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2iv(this.addr,e),cn(i,e)}}function OT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3iv(this.addr,e),cn(i,e)}}function PT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4iv(this.addr,e),cn(i,e)}}function zT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function BT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2uiv(this.addr,e),cn(i,e)}}function IT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3uiv(this.addr,e),cn(i,e)}}function FT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4uiv(this.addr,e),cn(i,e)}}function HT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(V_.compareFunction=A0,c=V_):c=G0,i.setTexture2D(e||c,l)}function GT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||X0,l)}function VT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||k0,l)}function XT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||V0,l)}function kT(o){switch(o){case 5126:return AT;case 35664:return bT;case 35665:return RT;case 35666:return CT;case 35674:return wT;case 35675:return DT;case 35676:return UT;case 5124:case 35670:return LT;case 35667:case 35671:return NT;case 35668:case 35672:return OT;case 35669:case 35673:return PT;case 5125:return zT;case 36294:return BT;case 36295:return IT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return HT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return VT;case 36289:case 36303:case 36311:case 36292:return XT}}function WT(o,e){o.uniform1fv(this.addr,e)}function qT(o,e){const i=Cs(e,this.size,2);o.uniform2fv(this.addr,i)}function YT(o,e){const i=Cs(e,this.size,3);o.uniform3fv(this.addr,i)}function ZT(o,e){const i=Cs(e,this.size,4);o.uniform4fv(this.addr,i)}function jT(o,e){const i=Cs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function KT(o,e){const i=Cs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function QT(o,e){const i=Cs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function JT(o,e){o.uniform1iv(this.addr,e)}function $T(o,e){o.uniform2iv(this.addr,e)}function tA(o,e){o.uniform3iv(this.addr,e)}function eA(o,e){o.uniform4iv(this.addr,e)}function nA(o,e){o.uniform1uiv(this.addr,e)}function iA(o,e){o.uniform2uiv(this.addr,e)}function aA(o,e){o.uniform3uiv(this.addr,e)}function rA(o,e){o.uniform4uiv(this.addr,e)}function sA(o,e,i){const r=this.cache,l=e.length,c=Iu(i,l);un(r,c)||(o.uniform1iv(this.addr,c),cn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||G0,c[h])}function oA(o,e,i){const r=this.cache,l=e.length,c=Iu(i,l);un(r,c)||(o.uniform1iv(this.addr,c),cn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||X0,c[h])}function lA(o,e,i){const r=this.cache,l=e.length,c=Iu(i,l);un(r,c)||(o.uniform1iv(this.addr,c),cn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||k0,c[h])}function uA(o,e,i){const r=this.cache,l=e.length,c=Iu(i,l);un(r,c)||(o.uniform1iv(this.addr,c),cn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||V0,c[h])}function cA(o){switch(o){case 5126:return WT;case 35664:return qT;case 35665:return YT;case 35666:return ZT;case 35674:return jT;case 35675:return KT;case 35676:return QT;case 5124:case 35670:return JT;case 35667:case 35671:return $T;case 35668:case 35672:return tA;case 35669:case 35673:return eA;case 5125:return nA;case 36294:return iA;case 36295:return aA;case 36296:return rA;case 35678:case 36198:case 36298:case 36306:case 35682:return sA;case 35679:case 36299:case 36307:return oA;case 35680:case 36300:case 36308:case 36293:return lA;case 36289:case 36303:case 36311:case 36292:return uA}}class fA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=kT(i.type)}}class hA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=cA(i.type)}}class dA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const Eh=/(\w+)(\])?(\[|\.)?/g;function Z_(o,e){o.seq.push(e),o.map[e.id]=e}function pA(o,e,i){const r=o.name,l=r.length;for(Eh.lastIndex=0;;){const c=Eh.exec(r),h=Eh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Z_(i,p===void 0?new fA(d,o,e):new hA(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new dA(d),Z_(i,v)),i=v}}}class Ru{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);pA(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function j_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const mA=37297;let gA=0;function _A(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}function vA(o){const e=Ee.getPrimaries(Ee.workingColorSpace),i=Ee.getPrimaries(o);let r;switch(e===i?r="":e===Uu&&i===Du?r="LinearDisplayP3ToLinearSRGB":e===Du&&i===Uu&&(r="LinearSRGBToLinearDisplayP3"),o){case Ha:case Pu:return[r,"LinearTransferOETF"];case Ei:case md:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function K_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+_A(o.getShaderSource(e),h)}else return l}function SA(o,e){const i=vA(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function xA(o,e){let i;switch(e){case zx:i="Linear";break;case Bx:i="Reinhard";break;case Ix:i="Cineon";break;case Fx:i="ACESFilmic";break;case Gx:i="AgX";break;case Vx:i="Neutral";break;case Hx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Su=new at;function yA(){Ee.getLuminanceCoefficients(Su);const o=Su.x.toFixed(4),e=Su.y.toFixed(4),i=Su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function EA(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function TA(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Lo(o){return o!==""}function Q_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function J_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AA=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(o){return o.replace(AA,RA)}const bA=new Map;function RA(o,e){let i=re[e];if(i===void 0){const r=bA.get(e);if(r!==void 0)i=re[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return rd(i)}const CA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $_(o){return o.replace(CA,wA)}function wA(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function t0(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===h0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===lx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function UA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ms:case Es:e="ENVMAP_TYPE_CUBE";break;case Ou:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LA(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Es&&(e="ENVMAP_MODE_REFRACTION"),e}function NA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case d0:e="ENVMAP_BLENDING_MULTIPLY";break;case Ox:e="ENVMAP_BLENDING_MIX";break;case Px:e="ENVMAP_BLENDING_ADD";break}return e}function OA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function PA(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=DA(i),p=UA(i),_=LA(i),v=NA(i),y=OA(i),M=MA(i),A=EA(c),R=l.createProgram();let x,S,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Lo).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Lo).join(`
`),S.length>0&&(S+=`
`)):(x=[t0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),S=[t0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ia?"#define TONE_MAPPING":"",i.toneMapping!==Ia?re.tonemapping_pars_fragment:"",i.toneMapping!==Ia?xA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,SA("linearToOutputTexel",i.outputColorSpace),yA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),h=rd(h),h=Q_(h,i),h=J_(h,i),d=rd(d),d=Q_(d,i),d=J_(d,i),h=$_(h),d=$_(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",i.glslVersion===m_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===m_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const D=z+x+h,O=z+S+d,J=j_(l,l.VERTEX_SHADER,D),F=j_(l,l.FRAGMENT_SHADER,O);l.attachShader(R,J),l.attachShader(R,F),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function L(G){if(o.debug.checkShaderErrors){const lt=l.getProgramInfoLog(R).trim(),it=l.getShaderInfoLog(J).trim(),ht=l.getShaderInfoLog(F).trim();let ct=!0,P=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ct=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,J,F);else{const k=K_(l,J,"vertex"),V=K_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+lt+`
`+k+`
`+V)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(it===""||ht==="")&&(P=!1);P&&(G.diagnostics={runnable:ct,programLog:lt,vertexShader:{log:it,prefix:x},fragmentShader:{log:ht,prefix:S}})}l.deleteShader(J),l.deleteShader(F),Q=new Ru(l,R),w=TA(l,R)}let Q;this.getUniforms=function(){return Q===void 0&&L(this),Q};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let b=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=l.getProgramParameter(R,mA)),b},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=gA++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=J,this.fragmentShader=F,this}let zA=0;class BA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new IA(e),i.set(e,r)),r}}class IA{constructor(e){this.id=zA++,this.code=e,this.usedTimes=0}}function FA(o,e,i,r,l,c,h){const d=new D0,m=new BA,p=new Set,_=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function x(w,b,G,lt,it){const ht=lt.fog,ct=it.geometry,P=w.isMeshStandardMaterial?lt.environment:null,k=(w.isMeshStandardMaterial?i:e).get(w.envMap||P),V=k&&k.mapping===Ou?k.image.height:null,vt=A[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const Et=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,U=Et!==void 0?Et.length:0;let tt=0;ct.morphAttributes.position!==void 0&&(tt=1),ct.morphAttributes.normal!==void 0&&(tt=2),ct.morphAttributes.color!==void 0&&(tt=3);let St,Y,ot,yt;if(vt){const _e=Ti[vt];St=_e.vertexShader,Y=_e.fragmentShader}else St=w.vertexShader,Y=w.fragmentShader,m.update(w),ot=m.getVertexShaderID(w),yt=m.getFragmentShaderID(w);const Mt=o.getRenderTarget(),Ft=it.isInstancedMesh===!0,It=it.isBatchedMesh===!0,ee=!!w.map,Le=!!w.matcap,I=!!k,Xe=!!w.aoMap,ue=!!w.lightMap,Se=!!w.bumpMap,Vt=!!w.normalMap,ke=!!w.displacementMap,Jt=!!w.emissiveMap,$t=!!w.metalnessMap,N=!!w.roughnessMap,T=w.anisotropy>0,rt=w.clearcoat>0,_t=w.dispersion>0,mt=w.iridescence>0,xt=w.sheen>0,qt=w.transmission>0,Dt=T&&!!w.anisotropyMap,Lt=rt&&!!w.clearcoatMap,ne=rt&&!!w.clearcoatNormalMap,At=rt&&!!w.clearcoatRoughnessMap,Ot=mt&&!!w.iridescenceMap,he=mt&&!!w.iridescenceThicknessMap,jt=xt&&!!w.sheenColorMap,Ct=xt&&!!w.sheenRoughnessMap,Yt=!!w.specularMap,Zt=!!w.specularColorMap,ze=!!w.specularIntensityMap,X=qt&&!!w.transmissionMap,bt=qt&&!!w.thicknessMap,dt=!!w.gradientMap,gt=!!w.alphaMap,Rt=w.alphaTest>0,kt=!!w.alphaHash,oe=!!w.extensions;let Pe=Ia;w.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Pe=o.toneMapping);const sn={shaderID:vt,shaderType:w.type,shaderName:w.name,vertexShader:St,fragmentShader:Y,defines:w.defines,customVertexShaderID:ot,customFragmentShaderID:yt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:It,batchingColor:It&&it._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&it.instanceColor!==null,instancingMorph:Ft&&it.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Mt===null?o.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Ha,alphaToCoverage:!!w.alphaToCoverage,map:ee,matcap:Le,envMap:I,envMapMode:I&&k.mapping,envMapCubeUVHeight:V,aoMap:Xe,lightMap:ue,bumpMap:Se,normalMap:Vt,displacementMap:y&&ke,emissiveMap:Jt,normalMapObjectSpace:Vt&&w.normalMapType===Yx,normalMapTangentSpace:Vt&&w.normalMapType===qx,metalnessMap:$t,roughnessMap:N,anisotropy:T,anisotropyMap:Dt,clearcoat:rt,clearcoatMap:Lt,clearcoatNormalMap:ne,clearcoatRoughnessMap:At,dispersion:_t,iridescence:mt,iridescenceMap:Ot,iridescenceThicknessMap:he,sheen:xt,sheenColorMap:jt,sheenRoughnessMap:Ct,specularMap:Yt,specularColorMap:Zt,specularIntensityMap:ze,transmission:qt,transmissionMap:X,thicknessMap:bt,gradientMap:dt,opaque:w.transparent===!1&&w.blending===Ss&&w.alphaToCoverage===!1,alphaMap:gt,alphaTest:Rt,alphaHash:kt,combine:w.combine,mapUv:ee&&R(w.map.channel),aoMapUv:Xe&&R(w.aoMap.channel),lightMapUv:ue&&R(w.lightMap.channel),bumpMapUv:Se&&R(w.bumpMap.channel),normalMapUv:Vt&&R(w.normalMap.channel),displacementMapUv:ke&&R(w.displacementMap.channel),emissiveMapUv:Jt&&R(w.emissiveMap.channel),metalnessMapUv:$t&&R(w.metalnessMap.channel),roughnessMapUv:N&&R(w.roughnessMap.channel),anisotropyMapUv:Dt&&R(w.anisotropyMap.channel),clearcoatMapUv:Lt&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:ne&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:he&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&R(w.sheenRoughnessMap.channel),specularMapUv:Yt&&R(w.specularMap.channel),specularColorMapUv:Zt&&R(w.specularColorMap.channel),specularIntensityMapUv:ze&&R(w.specularIntensityMap.channel),transmissionMapUv:X&&R(w.transmissionMap.channel),thicknessMapUv:bt&&R(w.thicknessMap.channel),alphaMapUv:gt&&R(w.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Vt||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!ct.attributes.uv&&(ee||gt),fog:!!ht,useFog:w.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:it.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:tt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ee&&w.map.isVideoTexture===!0&&Ee.getTransfer(w.map.colorSpace)===Fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ji,flipSided:w.side===Fn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:oe&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&w.extensions.multiDraw===!0||It)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return sn.vertexUv1s=p.has(1),sn.vertexUv2s=p.has(2),sn.vertexUv3s=p.has(3),p.clear(),sn}function S(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)b.push(G),b.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(z(b,w),D(b,w),b.push(o.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function z(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function D(w,b){d.disableAll(),b.supportsVertexTextures&&d.enable(0),b.instancing&&d.enable(1),b.instancingColor&&d.enable(2),b.instancingMorph&&d.enable(3),b.matcap&&d.enable(4),b.envMap&&d.enable(5),b.normalMapObjectSpace&&d.enable(6),b.normalMapTangentSpace&&d.enable(7),b.clearcoat&&d.enable(8),b.iridescence&&d.enable(9),b.alphaTest&&d.enable(10),b.vertexColors&&d.enable(11),b.vertexAlphas&&d.enable(12),b.vertexUv1s&&d.enable(13),b.vertexUv2s&&d.enable(14),b.vertexUv3s&&d.enable(15),b.vertexTangents&&d.enable(16),b.anisotropy&&d.enable(17),b.alphaHash&&d.enable(18),b.batching&&d.enable(19),b.dispersion&&d.enable(20),b.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),b.fog&&d.enable(0),b.useFog&&d.enable(1),b.flatShading&&d.enable(2),b.logarithmicDepthBuffer&&d.enable(3),b.skinning&&d.enable(4),b.morphTargets&&d.enable(5),b.morphNormals&&d.enable(6),b.morphColors&&d.enable(7),b.premultipliedAlpha&&d.enable(8),b.shadowMapEnabled&&d.enable(9),b.doubleSided&&d.enable(10),b.flipSided&&d.enable(11),b.useDepthPacking&&d.enable(12),b.dithering&&d.enable(13),b.transmission&&d.enable(14),b.sheen&&d.enable(15),b.opaque&&d.enable(16),b.pointsUvs&&d.enable(17),b.decodeVideoTexture&&d.enable(18),b.alphaToCoverage&&d.enable(19),w.push(d.mask)}function O(w){const b=A[w.type];let G;if(b){const lt=Ti[b];G=yy.clone(lt.uniforms)}else G=w.uniforms;return G}function J(w,b){let G;for(let lt=0,it=_.length;lt<it;lt++){const ht=_[lt];if(ht.cacheKey===b){G=ht,++G.usedTimes;break}}return G===void 0&&(G=new PA(o,b,w,c),_.push(G)),G}function F(w){if(--w.usedTimes===0){const b=_.indexOf(w);_[b]=_[_.length-1],_.pop(),w.destroy()}}function L(w){m.remove(w)}function Q(){m.dispose()}return{getParameters:x,getProgramCacheKey:S,getUniforms:O,acquireProgram:J,releaseProgram:F,releaseShaderCache:L,programs:_,dispose:Q}}function HA(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function GA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function e0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function n0(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(v,y,M,A,R,x){let S=o[e];return S===void 0?(S={id:v.id,object:v,geometry:y,material:M,groupOrder:A,renderOrder:v.renderOrder,z:R,group:x},o[e]=S):(S.id=v.id,S.object=v,S.geometry=y,S.material=M,S.groupOrder=A,S.renderOrder=v.renderOrder,S.z=R,S.group=x),e++,S}function d(v,y,M,A,R,x){const S=h(v,y,M,A,R,x);M.transmission>0?r.push(S):M.transparent===!0?l.push(S):i.push(S)}function m(v,y,M,A,R,x){const S=h(v,y,M,A,R,x);M.transmission>0?r.unshift(S):M.transparent===!0?l.unshift(S):i.unshift(S)}function p(v,y){i.length>1&&i.sort(v||GA),r.length>1&&r.sort(y||e0),l.length>1&&l.sort(y||e0)}function _(){for(let v=e,y=o.length;v<y;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function VA(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new n0,o.set(r,[h])):l>=c.length?(h=new n0,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function XA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new at,color:new Te};break;case"SpotLight":i={position:new at,direction:new at,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new at,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new at,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new at,halfWidth:new at,halfHeight:new at};break}return o[e.id]=i,i}}}function kA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let WA=0;function qA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function YA(o){const e=new XA,i=kA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new at);const l=new at,c=new rn,h=new rn;function d(p){let _=0,v=0,y=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,A=0,R=0,x=0,S=0,z=0,D=0,O=0,J=0,F=0,L=0;p.sort(qA);for(let w=0,b=p.length;w<b;w++){const G=p[w],lt=G.color,it=G.intensity,ht=G.distance,ct=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)_+=lt.r*it,v+=lt.g*it,y+=lt.b*it;else if(G.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(G.sh.coefficients[P],it);L++}else if(G.isDirectionalLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const k=G.shadow,V=i.get(G);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,r.directionalShadow[M]=V,r.directionalShadowMap[M]=ct,r.directionalShadowMatrix[M]=G.shadow.matrix,z++}r.directional[M]=P,M++}else if(G.isSpotLight){const P=e.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(lt).multiplyScalar(it),P.distance=ht,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,r.spot[R]=P;const k=G.shadow;if(G.map&&(r.spotLightMap[J]=G.map,J++,k.updateMatrices(G),G.castShadow&&F++),r.spotLightMatrix[R]=k.matrix,G.castShadow){const V=i.get(G);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,r.spotShadow[R]=V,r.spotShadowMap[R]=ct,O++}R++}else if(G.isRectAreaLight){const P=e.get(G);P.color.copy(lt).multiplyScalar(it),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),r.rectArea[x]=P,x++}else if(G.isPointLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const k=G.shadow,V=i.get(G);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,V.shadowCameraNear=k.camera.near,V.shadowCameraFar=k.camera.far,r.pointShadow[A]=V,r.pointShadowMap[A]=ct,r.pointShadowMatrix[A]=G.shadow.matrix,D++}r.point[A]=P,A++}else if(G.isHemisphereLight){const P=e.get(G);P.skyColor.copy(G.color).multiplyScalar(it),P.groundColor.copy(G.groundColor).multiplyScalar(it),r.hemi[S]=P,S++}}x>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=y;const Q=r.hash;(Q.directionalLength!==M||Q.pointLength!==A||Q.spotLength!==R||Q.rectAreaLength!==x||Q.hemiLength!==S||Q.numDirectionalShadows!==z||Q.numPointShadows!==D||Q.numSpotShadows!==O||Q.numSpotMaps!==J||Q.numLightProbes!==L)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=x,r.point.length=A,r.hemi.length=S,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=O+J-F,r.spotLightMap.length=J,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=L,Q.directionalLength=M,Q.pointLength=A,Q.spotLength=R,Q.rectAreaLength=x,Q.hemiLength=S,Q.numDirectionalShadows=z,Q.numPointShadows=D,Q.numSpotShadows=O,Q.numSpotMaps=J,Q.numLightProbes=L,r.version=WA++)}function m(p,_){let v=0,y=0,M=0,A=0,R=0;const x=_.matrixWorldInverse;for(let S=0,z=p.length;S<z;S++){const D=p[S];if(D.isDirectionalLight){const O=r.directional[v];O.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(x),v++}else if(D.isSpotLight){const O=r.spot[M];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(x),O.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(x),M++}else if(D.isRectAreaLight){const O=r.rectArea[A];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(x),h.identity(),c.copy(D.matrixWorld),c.premultiply(x),h.extractRotation(c),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),O.halfWidth.applyMatrix4(h),O.halfHeight.applyMatrix4(h),A++}else if(D.isPointLight){const O=r.point[y];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(x),y++}else if(D.isHemisphereLight){const O=r.hemi[R];O.direction.setFromMatrixPosition(D.matrixWorld),O.direction.transformDirection(x),R++}}}return{setup:d,setupView:m,state:r}}function i0(o){const e=new YA(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function ZA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new i0(o),e.set(l,[d])):c>=h.length?(d=new i0(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}class jA extends Ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KA extends Ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const QA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $A(o,e,i){let r=new I0;const l=new Ae,c=new Ae,h=new pn,d=new jA({depthPacking:Wx}),m=new KA,p={},_=i.maxTextureSize,v={[Fa]:Fn,[Fn]:Fa,[ji]:ji},y=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:QA,fragmentShader:JA}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const A=new na;A.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ji(A,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=h0;let S=this.type;this.render=function(F,L,Q){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const w=o.getRenderTarget(),b=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(Ba),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const it=S!==Zi&&this.type===Zi,ht=S===Zi&&this.type!==Zi;for(let ct=0,P=F.length;ct<P;ct++){const k=F[ct],V=k.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const vt=V.getFrameExtents();if(l.multiply(vt),c.copy(V.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/vt.x),l.x=c.x*vt.x,V.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/vt.y),l.y=c.y*vt.y,V.mapSize.y=c.y)),V.map===null||it===!0||ht===!0){const U=this.type!==Zi?{minFilter:oi,magFilter:oi}:{};V.map!==null&&V.map.dispose(),V.map=new vr(l.x,l.y,U),V.map.texture.name=k.name+".shadowMap",V.camera.updateProjectionMatrix()}o.setRenderTarget(V.map),o.clear();const Et=V.getViewportCount();for(let U=0;U<Et;U++){const tt=V.getViewport(U);h.set(c.x*tt.x,c.y*tt.y,c.x*tt.z,c.y*tt.w),lt.viewport(h),V.updateMatrices(k,U),r=V.getFrustum(),O(L,Q,V.camera,k,this.type)}V.isPointLightShadow!==!0&&this.type===Zi&&z(V,Q),V.needsUpdate=!1}S=this.type,x.needsUpdate=!1,o.setRenderTarget(w,b,G)};function z(F,L){const Q=e.update(R);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new vr(l.x,l.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(L,null,Q,y,R,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(L,null,Q,M,R,null)}function D(F,L,Q,w){let b=null;const G=Q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)b=G;else if(b=Q.isPointLight===!0?m:d,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const lt=b.uuid,it=L.uuid;let ht=p[lt];ht===void 0&&(ht={},p[lt]=ht);let ct=ht[it];ct===void 0&&(ct=b.clone(),ht[it]=ct,L.addEventListener("dispose",J)),b=ct}if(b.visible=L.visible,b.wireframe=L.wireframe,w===Zi?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:v[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,Q.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const lt=o.properties.get(b);lt.light=Q}return b}function O(F,L,Q,w,b){if(F.visible===!1)return;if(F.layers.test(L.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&b===Zi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,F.matrixWorld);const it=e.update(F),ht=F.material;if(Array.isArray(ht)){const ct=it.groups;for(let P=0,k=ct.length;P<k;P++){const V=ct[P],vt=ht[V.materialIndex];if(vt&&vt.visible){const Et=D(F,vt,w,b);F.onBeforeShadow(o,F,L,Q,it,Et,V),o.renderBufferDirect(Q,null,it,Et,F,V),F.onAfterShadow(o,F,L,Q,it,Et,V)}}}else if(ht.visible){const ct=D(F,ht,w,b);F.onBeforeShadow(o,F,L,Q,it,ct,null),o.renderBufferDirect(Q,null,it,ct,F,null),F.onAfterShadow(o,F,L,Q,it,ct,null)}}const lt=F.children;for(let it=0,ht=lt.length;it<ht;it++)O(lt[it],L,Q,w,b)}function J(F){F.target.removeEventListener("dispose",J);for(const Q in p){const w=p[Q],b=F.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}function tb(o){function e(){let X=!1;const bt=new pn;let dt=null;const gt=new pn(0,0,0,0);return{setMask:function(Rt){dt!==Rt&&!X&&(o.colorMask(Rt,Rt,Rt,Rt),dt=Rt)},setLocked:function(Rt){X=Rt},setClear:function(Rt,kt,oe,Pe,sn){sn===!0&&(Rt*=Pe,kt*=Pe,oe*=Pe),bt.set(Rt,kt,oe,Pe),gt.equals(bt)===!1&&(o.clearColor(Rt,kt,oe,Pe),gt.copy(bt))},reset:function(){X=!1,dt=null,gt.set(-1,0,0,0)}}}function i(){let X=!1,bt=null,dt=null,gt=null;return{setTest:function(Rt){Rt?yt(o.DEPTH_TEST):Mt(o.DEPTH_TEST)},setMask:function(Rt){bt!==Rt&&!X&&(o.depthMask(Rt),bt=Rt)},setFunc:function(Rt){if(dt!==Rt){switch(Rt){case Rx:o.depthFunc(o.NEVER);break;case Cx:o.depthFunc(o.ALWAYS);break;case wx:o.depthFunc(o.LESS);break;case Cu:o.depthFunc(o.LEQUAL);break;case Dx:o.depthFunc(o.EQUAL);break;case Ux:o.depthFunc(o.GEQUAL);break;case Lx:o.depthFunc(o.GREATER);break;case Nx:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}dt=Rt}},setLocked:function(Rt){X=Rt},setClear:function(Rt){gt!==Rt&&(o.clearDepth(Rt),gt=Rt)},reset:function(){X=!1,bt=null,dt=null,gt=null}}}function r(){let X=!1,bt=null,dt=null,gt=null,Rt=null,kt=null,oe=null,Pe=null,sn=null;return{setTest:function(_e){X||(_e?yt(o.STENCIL_TEST):Mt(o.STENCIL_TEST))},setMask:function(_e){bt!==_e&&!X&&(o.stencilMask(_e),bt=_e)},setFunc:function(_e,Gn,Sn){(dt!==_e||gt!==Gn||Rt!==Sn)&&(o.stencilFunc(_e,Gn,Sn),dt=_e,gt=Gn,Rt=Sn)},setOp:function(_e,Gn,Sn){(kt!==_e||oe!==Gn||Pe!==Sn)&&(o.stencilOp(_e,Gn,Sn),kt=_e,oe=Gn,Pe=Sn)},setLocked:function(_e){X=_e},setClear:function(_e){sn!==_e&&(o.clearStencil(_e),sn=_e)},reset:function(){X=!1,bt=null,dt=null,gt=null,Rt=null,kt=null,oe=null,Pe=null,sn=null}}}const l=new e,c=new i,h=new r,d=new WeakMap,m=new WeakMap;let p={},_={},v=new WeakMap,y=[],M=null,A=!1,R=null,x=null,S=null,z=null,D=null,O=null,J=null,F=new Te(0,0,0),L=0,Q=!1,w=null,b=null,G=null,lt=null,it=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ct=!1,P=0;const k=o.getParameter(o.VERSION);k.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(k)[1]),ct=P>=1):k.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),ct=P>=2);let V=null,vt={};const Et=o.getParameter(o.SCISSOR_BOX),U=o.getParameter(o.VIEWPORT),tt=new pn().fromArray(Et),St=new pn().fromArray(U);function Y(X,bt,dt,gt){const Rt=new Uint8Array(4),kt=o.createTexture();o.bindTexture(X,kt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let oe=0;oe<dt;oe++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,gt,0,o.RGBA,o.UNSIGNED_BYTE,Rt):o.texImage2D(bt+oe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Rt);return kt}const ot={};ot[o.TEXTURE_2D]=Y(o.TEXTURE_2D,o.TEXTURE_2D,1),ot[o.TEXTURE_CUBE_MAP]=Y(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[o.TEXTURE_2D_ARRAY]=Y(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ot[o.TEXTURE_3D]=Y(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),h.setClear(0),yt(o.DEPTH_TEST),c.setFunc(Cu),Se(!1),Vt(c_),yt(o.CULL_FACE),Xe(Ba);function yt(X){p[X]!==!0&&(o.enable(X),p[X]=!0)}function Mt(X){p[X]!==!1&&(o.disable(X),p[X]=!1)}function Ft(X,bt){return _[X]!==bt?(o.bindFramebuffer(X,bt),_[X]=bt,X===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=bt),X===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function It(X,bt){let dt=y,gt=!1;if(X){dt=v.get(bt),dt===void 0&&(dt=[],v.set(bt,dt));const Rt=X.textures;if(dt.length!==Rt.length||dt[0]!==o.COLOR_ATTACHMENT0){for(let kt=0,oe=Rt.length;kt<oe;kt++)dt[kt]=o.COLOR_ATTACHMENT0+kt;dt.length=Rt.length,gt=!0}}else dt[0]!==o.BACK&&(dt[0]=o.BACK,gt=!0);gt&&o.drawBuffers(dt)}function ee(X){return M!==X?(o.useProgram(X),M=X,!0):!1}const Le={[hr]:o.FUNC_ADD,[cx]:o.FUNC_SUBTRACT,[fx]:o.FUNC_REVERSE_SUBTRACT};Le[hx]=o.MIN,Le[dx]=o.MAX;const I={[px]:o.ZERO,[mx]:o.ONE,[gx]:o.SRC_COLOR,[bh]:o.SRC_ALPHA,[Mx]:o.SRC_ALPHA_SATURATE,[xx]:o.DST_COLOR,[vx]:o.DST_ALPHA,[_x]:o.ONE_MINUS_SRC_COLOR,[Rh]:o.ONE_MINUS_SRC_ALPHA,[yx]:o.ONE_MINUS_DST_COLOR,[Sx]:o.ONE_MINUS_DST_ALPHA,[Ex]:o.CONSTANT_COLOR,[Tx]:o.ONE_MINUS_CONSTANT_COLOR,[Ax]:o.CONSTANT_ALPHA,[bx]:o.ONE_MINUS_CONSTANT_ALPHA};function Xe(X,bt,dt,gt,Rt,kt,oe,Pe,sn,_e){if(X===Ba){A===!0&&(Mt(o.BLEND),A=!1);return}if(A===!1&&(yt(o.BLEND),A=!0),X!==ux){if(X!==R||_e!==Q){if((x!==hr||D!==hr)&&(o.blendEquation(o.FUNC_ADD),x=hr,D=hr),_e)switch(X){case Ss:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ah:o.blendFunc(o.ONE,o.ONE);break;case f_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case h_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ss:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ah:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case f_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case h_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}S=null,z=null,O=null,J=null,F.set(0,0,0),L=0,R=X,Q=_e}return}Rt=Rt||bt,kt=kt||dt,oe=oe||gt,(bt!==x||Rt!==D)&&(o.blendEquationSeparate(Le[bt],Le[Rt]),x=bt,D=Rt),(dt!==S||gt!==z||kt!==O||oe!==J)&&(o.blendFuncSeparate(I[dt],I[gt],I[kt],I[oe]),S=dt,z=gt,O=kt,J=oe),(Pe.equals(F)===!1||sn!==L)&&(o.blendColor(Pe.r,Pe.g,Pe.b,sn),F.copy(Pe),L=sn),R=X,Q=!1}function ue(X,bt){X.side===ji?Mt(o.CULL_FACE):yt(o.CULL_FACE);let dt=X.side===Fn;bt&&(dt=!dt),Se(dt),X.blending===Ss&&X.transparent===!1?Xe(Ba):Xe(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),l.setMask(X.colorWrite);const gt=X.stencilWrite;h.setTest(gt),gt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Jt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?yt(o.SAMPLE_ALPHA_TO_COVERAGE):Mt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Se(X){w!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),w=X)}function Vt(X){X!==sx?(yt(o.CULL_FACE),X!==b&&(X===c_?o.cullFace(o.BACK):X===ox?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Mt(o.CULL_FACE),b=X}function ke(X){X!==G&&(ct&&o.lineWidth(X),G=X)}function Jt(X,bt,dt){X?(yt(o.POLYGON_OFFSET_FILL),(lt!==bt||it!==dt)&&(o.polygonOffset(bt,dt),lt=bt,it=dt)):Mt(o.POLYGON_OFFSET_FILL)}function $t(X){X?yt(o.SCISSOR_TEST):Mt(o.SCISSOR_TEST)}function N(X){X===void 0&&(X=o.TEXTURE0+ht-1),V!==X&&(o.activeTexture(X),V=X)}function T(X,bt,dt){dt===void 0&&(V===null?dt=o.TEXTURE0+ht-1:dt=V);let gt=vt[dt];gt===void 0&&(gt={type:void 0,texture:void 0},vt[dt]=gt),(gt.type!==X||gt.texture!==bt)&&(V!==dt&&(o.activeTexture(dt),V=dt),o.bindTexture(X,bt||ot[X]),gt.type=X,gt.texture=bt)}function rt(){const X=vt[V];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function _t(){try{o.compressedTexImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xt(){try{o.texSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{o.texSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Lt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ne(){try{o.texStorage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{o.texStorage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ot(){try{o.texImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{o.texImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(X){tt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),tt.copy(X))}function Ct(X){St.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),St.copy(X))}function Yt(X,bt){let dt=m.get(bt);dt===void 0&&(dt=new WeakMap,m.set(bt,dt));let gt=dt.get(X);gt===void 0&&(gt=o.getUniformBlockIndex(bt,X.name),dt.set(X,gt))}function Zt(X,bt){const gt=m.get(bt).get(X);d.get(bt)!==gt&&(o.uniformBlockBinding(bt,gt,X.__bindingPointIndex),d.set(bt,gt))}function ze(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},V=null,vt={},_={},v=new WeakMap,y=[],M=null,A=!1,R=null,x=null,S=null,z=null,D=null,O=null,J=null,F=new Te(0,0,0),L=0,Q=!1,w=null,b=null,G=null,lt=null,it=null,tt.set(0,0,o.canvas.width,o.canvas.height),St.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),h.reset()}return{buffers:{color:l,depth:c,stencil:h},enable:yt,disable:Mt,bindFramebuffer:Ft,drawBuffers:It,useProgram:ee,setBlending:Xe,setMaterial:ue,setFlipSided:Se,setCullFace:Vt,setLineWidth:ke,setPolygonOffset:Jt,setScissorTest:$t,activeTexture:N,bindTexture:T,unbindTexture:rt,compressedTexImage2D:_t,compressedTexImage3D:mt,texImage2D:Ot,texImage3D:he,updateUBOMapping:Yt,uniformBlockBinding:Zt,texStorage2D:ne,texStorage3D:At,texSubImage2D:xt,texSubImage3D:qt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Lt,scissor:jt,viewport:Ct,reset:ze}}function a0(o,e,i,r){const l=eb(r);switch(i){case v0:return o*e;case x0:return o*e;case y0:return o*e*2;case M0:return o*e/l.components*l.byteLength;case hd:return o*e/l.components*l.byteLength;case E0:return o*e*2/l.components*l.byteLength;case dd:return o*e*2/l.components*l.byteLength;case S0:return o*e*3/l.components*l.byteLength;case _i:return o*e*4/l.components*l.byteLength;case pd:return o*e*4/l.components*l.byteLength;case Mu:case Eu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Tu:case Au:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Nh:case Ph:return Math.max(o,16)*Math.max(e,8)/4;case Lh:case Oh:return Math.max(o,8)*Math.max(e,8)/2;case zh:case Bh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ih:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case kh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case qh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case jh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case bu:case $h:case td:return Math.ceil(o/4)*Math.ceil(e/4)*16;case T0:case ed:return Math.ceil(o/4)*Math.ceil(e/4)*8;case nd:case id:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function eb(o){switch(o){case $i:case m0:return{byteLength:1,components:1};case Po:case g0:case zo:return{byteLength:2,components:1};case cd:case fd:return{byteLength:2,components:4};case _r:case ud:case Ki:return{byteLength:4,components:1};case _0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function nb(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ae,_=new WeakMap;let v;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,T){return M?new OffscreenCanvas(N,T):Nu("canvas")}function R(N,T,rt){let _t=1;const mt=$t(N);if((mt.width>rt||mt.height>rt)&&(_t=rt/Math.max(mt.width,mt.height)),_t<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const xt=Math.floor(_t*mt.width),qt=Math.floor(_t*mt.height);v===void 0&&(v=A(xt,qt));const Dt=T?A(xt,qt):v;return Dt.width=xt,Dt.height=qt,Dt.getContext("2d").drawImage(N,0,0,xt,qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+xt+"x"+qt+")."),Dt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),N;return N}function x(N){return N.generateMipmaps&&N.minFilter!==oi&&N.minFilter!==gi}function S(N){o.generateMipmap(N)}function z(N,T,rt,_t,mt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let xt=T;if(T===o.RED&&(rt===o.FLOAT&&(xt=o.R32F),rt===o.HALF_FLOAT&&(xt=o.R16F),rt===o.UNSIGNED_BYTE&&(xt=o.R8)),T===o.RED_INTEGER&&(rt===o.UNSIGNED_BYTE&&(xt=o.R8UI),rt===o.UNSIGNED_SHORT&&(xt=o.R16UI),rt===o.UNSIGNED_INT&&(xt=o.R32UI),rt===o.BYTE&&(xt=o.R8I),rt===o.SHORT&&(xt=o.R16I),rt===o.INT&&(xt=o.R32I)),T===o.RG&&(rt===o.FLOAT&&(xt=o.RG32F),rt===o.HALF_FLOAT&&(xt=o.RG16F),rt===o.UNSIGNED_BYTE&&(xt=o.RG8)),T===o.RG_INTEGER&&(rt===o.UNSIGNED_BYTE&&(xt=o.RG8UI),rt===o.UNSIGNED_SHORT&&(xt=o.RG16UI),rt===o.UNSIGNED_INT&&(xt=o.RG32UI),rt===o.BYTE&&(xt=o.RG8I),rt===o.SHORT&&(xt=o.RG16I),rt===o.INT&&(xt=o.RG32I)),T===o.RGB&&rt===o.UNSIGNED_INT_5_9_9_9_REV&&(xt=o.RGB9_E5),T===o.RGBA){const qt=mt?wu:Ee.getTransfer(_t);rt===o.FLOAT&&(xt=o.RGBA32F),rt===o.HALF_FLOAT&&(xt=o.RGBA16F),rt===o.UNSIGNED_BYTE&&(xt=qt===Fe?o.SRGB8_ALPHA8:o.RGBA8),rt===o.UNSIGNED_SHORT_4_4_4_4&&(xt=o.RGBA4),rt===o.UNSIGNED_SHORT_5_5_5_1&&(xt=o.RGB5_A1)}return(xt===o.R16F||xt===o.R32F||xt===o.RG16F||xt===o.RG32F||xt===o.RGBA16F||xt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),xt}function D(N,T){let rt;return N?T===null||T===_r||T===Ts?rt=o.DEPTH24_STENCIL8:T===Ki?rt=o.DEPTH32F_STENCIL8:T===Po&&(rt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===_r||T===Ts?rt=o.DEPTH_COMPONENT24:T===Ki?rt=o.DEPTH_COMPONENT32F:T===Po&&(rt=o.DEPTH_COMPONENT16),rt}function O(N,T){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==oi&&N.minFilter!==gi?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function J(N){const T=N.target;T.removeEventListener("dispose",J),L(T),T.isVideoTexture&&_.delete(T)}function F(N){const T=N.target;T.removeEventListener("dispose",F),w(T)}function L(N){const T=r.get(N);if(T.__webglInit===void 0)return;const rt=N.source,_t=y.get(rt);if(_t){const mt=_t[T.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&Q(N),Object.keys(_t).length===0&&y.delete(rt)}r.remove(N)}function Q(N){const T=r.get(N);o.deleteTexture(T.__webglTexture);const rt=N.source,_t=y.get(rt);delete _t[T.__cacheKey],h.memory.textures--}function w(N){const T=r.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(T.__webglFramebuffer[_t]))for(let mt=0;mt<T.__webglFramebuffer[_t].length;mt++)o.deleteFramebuffer(T.__webglFramebuffer[_t][mt]);else o.deleteFramebuffer(T.__webglFramebuffer[_t]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[_t])}else{if(Array.isArray(T.__webglFramebuffer))for(let _t=0;_t<T.__webglFramebuffer.length;_t++)o.deleteFramebuffer(T.__webglFramebuffer[_t]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _t=0;_t<T.__webglColorRenderbuffer.length;_t++)T.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[_t]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const rt=N.textures;for(let _t=0,mt=rt.length;_t<mt;_t++){const xt=r.get(rt[_t]);xt.__webglTexture&&(o.deleteTexture(xt.__webglTexture),h.memory.textures--),r.remove(rt[_t])}r.remove(N)}let b=0;function G(){b=0}function lt(){const N=b;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),b+=1,N}function it(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function ht(N,T){const rt=r.get(N);if(N.isVideoTexture&&ke(N),N.isRenderTargetTexture===!1&&N.version>0&&rt.__version!==N.version){const _t=N.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(rt,N,T);return}}i.bindTexture(o.TEXTURE_2D,rt.__webglTexture,o.TEXTURE0+T)}function ct(N,T){const rt=r.get(N);if(N.version>0&&rt.__version!==N.version){St(rt,N,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,rt.__webglTexture,o.TEXTURE0+T)}function P(N,T){const rt=r.get(N);if(N.version>0&&rt.__version!==N.version){St(rt,N,T);return}i.bindTexture(o.TEXTURE_3D,rt.__webglTexture,o.TEXTURE0+T)}function k(N,T){const rt=r.get(N);if(N.version>0&&rt.__version!==N.version){Y(rt,N,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture,o.TEXTURE0+T)}const V={[Dh]:o.REPEAT,[pr]:o.CLAMP_TO_EDGE,[Uh]:o.MIRRORED_REPEAT},vt={[oi]:o.NEAREST,[Xx]:o.NEAREST_MIPMAP_NEAREST,[Jl]:o.NEAREST_MIPMAP_LINEAR,[gi]:o.LINEAR,[Qf]:o.LINEAR_MIPMAP_NEAREST,[mr]:o.LINEAR_MIPMAP_LINEAR},Et={[Zx]:o.NEVER,[ty]:o.ALWAYS,[jx]:o.LESS,[A0]:o.LEQUAL,[Kx]:o.EQUAL,[$x]:o.GEQUAL,[Qx]:o.GREATER,[Jx]:o.NOTEQUAL};function U(N,T){if(T.type===Ki&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===gi||T.magFilter===Qf||T.magFilter===Jl||T.magFilter===mr||T.minFilter===gi||T.minFilter===Qf||T.minFilter===Jl||T.minFilter===mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,V[T.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,V[T.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,V[T.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,vt[T.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,vt[T.minFilter]),T.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,Et[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===oi||T.minFilter!==Jl&&T.minFilter!==mr||T.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const rt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function tt(N,T){let rt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",J));const _t=T.source;let mt=y.get(_t);mt===void 0&&(mt={},y.set(_t,mt));const xt=it(T);if(xt!==N.__cacheKey){mt[xt]===void 0&&(mt[xt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,rt=!0),mt[xt].usedTimes++;const qt=mt[N.__cacheKey];qt!==void 0&&(mt[N.__cacheKey].usedTimes--,qt.usedTimes===0&&Q(T)),N.__cacheKey=xt,N.__webglTexture=mt[xt].texture}return rt}function St(N,T,rt){let _t=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_t=o.TEXTURE_3D);const mt=tt(N,T),xt=T.source;i.bindTexture(_t,N.__webglTexture,o.TEXTURE0+rt);const qt=r.get(xt);if(xt.version!==qt.__version||mt===!0){i.activeTexture(o.TEXTURE0+rt);const Dt=Ee.getPrimaries(Ee.workingColorSpace),Lt=T.colorSpace===za?null:Ee.getPrimaries(T.colorSpace),ne=T.colorSpace===za||Dt===Lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let At=R(T.image,!1,l.maxTextureSize);At=Jt(T,At);const Ot=c.convert(T.format,T.colorSpace),he=c.convert(T.type);let jt=z(T.internalFormat,Ot,he,T.colorSpace,T.isVideoTexture);U(_t,T);let Ct;const Yt=T.mipmaps,Zt=T.isVideoTexture!==!0,ze=qt.__version===void 0||mt===!0,X=xt.dataReady,bt=O(T,At);if(T.isDepthTexture)jt=D(T.format===As,T.type),ze&&(Zt?i.texStorage2D(o.TEXTURE_2D,1,jt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,jt,At.width,At.height,0,Ot,he,null));else if(T.isDataTexture)if(Yt.length>0){Zt&&ze&&i.texStorage2D(o.TEXTURE_2D,bt,jt,Yt[0].width,Yt[0].height);for(let dt=0,gt=Yt.length;dt<gt;dt++)Ct=Yt[dt],Zt?X&&i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Ct.width,Ct.height,Ot,he,Ct.data):i.texImage2D(o.TEXTURE_2D,dt,jt,Ct.width,Ct.height,0,Ot,he,Ct.data);T.generateMipmaps=!1}else Zt?(ze&&i.texStorage2D(o.TEXTURE_2D,bt,jt,At.width,At.height),X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,Ot,he,At.data)):i.texImage2D(o.TEXTURE_2D,0,jt,At.width,At.height,0,Ot,he,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Zt&&ze&&i.texStorage3D(o.TEXTURE_2D_ARRAY,bt,jt,Yt[0].width,Yt[0].height,At.depth);for(let dt=0,gt=Yt.length;dt<gt;dt++)if(Ct=Yt[dt],T.format!==_i)if(Ot!==null)if(Zt){if(X)if(T.layerUpdates.size>0){const Rt=a0(Ct.width,Ct.height,T.format,T.type);for(const kt of T.layerUpdates){const oe=Ct.data.subarray(kt*Rt/Ct.data.BYTES_PER_ELEMENT,(kt+1)*Rt/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,kt,Ct.width,Ct.height,1,Ot,oe,0,0)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,0,Ct.width,Ct.height,At.depth,Ot,Ct.data,0,0)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,dt,jt,Ct.width,Ct.height,At.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,0,Ct.width,Ct.height,At.depth,Ot,he,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,dt,jt,Ct.width,Ct.height,At.depth,0,Ot,he,Ct.data)}else{Zt&&ze&&i.texStorage2D(o.TEXTURE_2D,bt,jt,Yt[0].width,Yt[0].height);for(let dt=0,gt=Yt.length;dt<gt;dt++)Ct=Yt[dt],T.format!==_i?Ot!==null?Zt?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,dt,0,0,Ct.width,Ct.height,Ot,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,dt,jt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?X&&i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Ct.width,Ct.height,Ot,he,Ct.data):i.texImage2D(o.TEXTURE_2D,dt,jt,Ct.width,Ct.height,0,Ot,he,Ct.data)}else if(T.isDataArrayTexture)if(Zt){if(ze&&i.texStorage3D(o.TEXTURE_2D_ARRAY,bt,jt,At.width,At.height,At.depth),X)if(T.layerUpdates.size>0){const dt=a0(At.width,At.height,T.format,T.type);for(const gt of T.layerUpdates){const Rt=At.data.subarray(gt*dt/At.data.BYTES_PER_ELEMENT,(gt+1)*dt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,At.width,At.height,1,Ot,he,Rt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ot,he,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,At.width,At.height,At.depth,0,Ot,he,At.data);else if(T.isData3DTexture)Zt?(ze&&i.texStorage3D(o.TEXTURE_3D,bt,jt,At.width,At.height,At.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ot,he,At.data)):i.texImage3D(o.TEXTURE_3D,0,jt,At.width,At.height,At.depth,0,Ot,he,At.data);else if(T.isFramebufferTexture){if(ze)if(Zt)i.texStorage2D(o.TEXTURE_2D,bt,jt,At.width,At.height);else{let dt=At.width,gt=At.height;for(let Rt=0;Rt<bt;Rt++)i.texImage2D(o.TEXTURE_2D,Rt,jt,dt,gt,0,Ot,he,null),dt>>=1,gt>>=1}}else if(Yt.length>0){if(Zt&&ze){const dt=$t(Yt[0]);i.texStorage2D(o.TEXTURE_2D,bt,jt,dt.width,dt.height)}for(let dt=0,gt=Yt.length;dt<gt;dt++)Ct=Yt[dt],Zt?X&&i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Ot,he,Ct):i.texImage2D(o.TEXTURE_2D,dt,jt,Ot,he,Ct);T.generateMipmaps=!1}else if(Zt){if(ze){const dt=$t(At);i.texStorage2D(o.TEXTURE_2D,bt,jt,dt.width,dt.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,he,At)}else i.texImage2D(o.TEXTURE_2D,0,jt,Ot,he,At);x(T)&&S(_t),qt.__version=xt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Y(N,T,rt){if(T.image.length!==6)return;const _t=tt(N,T),mt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+rt);const xt=r.get(mt);if(mt.version!==xt.__version||_t===!0){i.activeTexture(o.TEXTURE0+rt);const qt=Ee.getPrimaries(Ee.workingColorSpace),Dt=T.colorSpace===za?null:Ee.getPrimaries(T.colorSpace),Lt=T.colorSpace===za||qt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const ne=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,Ot=[];for(let gt=0;gt<6;gt++)!ne&&!At?Ot[gt]=R(T.image[gt],!0,l.maxCubemapSize):Ot[gt]=At?T.image[gt].image:T.image[gt],Ot[gt]=Jt(T,Ot[gt]);const he=Ot[0],jt=c.convert(T.format,T.colorSpace),Ct=c.convert(T.type),Yt=z(T.internalFormat,jt,Ct,T.colorSpace),Zt=T.isVideoTexture!==!0,ze=xt.__version===void 0||_t===!0,X=mt.dataReady;let bt=O(T,he);U(o.TEXTURE_CUBE_MAP,T);let dt;if(ne){Zt&&ze&&i.texStorage2D(o.TEXTURE_CUBE_MAP,bt,Yt,he.width,he.height);for(let gt=0;gt<6;gt++){dt=Ot[gt].mipmaps;for(let Rt=0;Rt<dt.length;Rt++){const kt=dt[Rt];T.format!==_i?jt!==null?Zt?X&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,0,0,kt.width,kt.height,jt,kt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,Yt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,0,0,kt.width,kt.height,jt,Ct,kt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,Yt,kt.width,kt.height,0,jt,Ct,kt.data)}}}else{if(dt=T.mipmaps,Zt&&ze){dt.length>0&&bt++;const gt=$t(Ot[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,bt,Yt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(At){Zt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ot[gt].width,Ot[gt].height,jt,Ct,Ot[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Yt,Ot[gt].width,Ot[gt].height,0,jt,Ct,Ot[gt].data);for(let Rt=0;Rt<dt.length;Rt++){const oe=dt[Rt].image[gt].image;Zt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,0,0,oe.width,oe.height,jt,Ct,oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,Yt,oe.width,oe.height,0,jt,Ct,oe.data)}}else{Zt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,jt,Ct,Ot[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Yt,jt,Ct,Ot[gt]);for(let Rt=0;Rt<dt.length;Rt++){const kt=dt[Rt];Zt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,0,0,jt,Ct,kt.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,Yt,jt,Ct,kt.image[gt])}}}x(T)&&S(o.TEXTURE_CUBE_MAP),xt.__version=mt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ot(N,T,rt,_t,mt,xt){const qt=c.convert(rt.format,rt.colorSpace),Dt=c.convert(rt.type),Lt=z(rt.internalFormat,qt,Dt,rt.colorSpace);if(!r.get(T).__hasExternalTextures){const At=Math.max(1,T.width>>xt),Ot=Math.max(1,T.height>>xt);mt===o.TEXTURE_3D||mt===o.TEXTURE_2D_ARRAY?i.texImage3D(mt,xt,Lt,At,Ot,T.depth,0,qt,Dt,null):i.texImage2D(mt,xt,Lt,At,Ot,0,qt,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Vt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,mt,r.get(rt).__webglTexture,0,Se(T)):(mt===o.TEXTURE_2D||mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,mt,r.get(rt).__webglTexture,xt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function yt(N,T,rt){if(o.bindRenderbuffer(o.RENDERBUFFER,N),T.depthBuffer){const _t=T.depthTexture,mt=_t&&_t.isDepthTexture?_t.type:null,xt=D(T.stencilBuffer,mt),qt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=Se(T);Vt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,xt,T.width,T.height):rt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,xt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,xt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,N)}else{const _t=T.textures;for(let mt=0;mt<_t.length;mt++){const xt=_t[mt],qt=c.convert(xt.format,xt.colorSpace),Dt=c.convert(xt.type),Lt=z(xt.internalFormat,qt,Dt,xt.colorSpace),ne=Se(T);rt&&Vt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,Lt,T.width,T.height):Vt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ne,Lt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Lt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Mt(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ht(T.depthTexture,0);const _t=r.get(T.depthTexture).__webglTexture,mt=Se(T);if(T.depthTexture.format===xs)Vt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0);else if(T.depthTexture.format===As)Vt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function Ft(N){const T=r.get(N),rt=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const _t=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_t){const mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_t.removeEventListener("dispose",mt)};_t.addEventListener("dispose",mt),T.__depthDisposeCallback=mt}T.__boundDepthTexture=_t}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(rt)throw new Error("target.depthTexture not supported in Cube render targets");Mt(T.__webglFramebuffer,N)}else if(rt){T.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[_t]),T.__webglDepthbuffer[_t]===void 0)T.__webglDepthbuffer[_t]=o.createRenderbuffer(),yt(T.__webglDepthbuffer[_t],N,!1);else{const mt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xt=T.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,xt),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,xt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),yt(T.__webglDepthbuffer,N,!1);else{const _t=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,mt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function It(N,T,rt){const _t=r.get(N);T!==void 0&&ot(_t.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),rt!==void 0&&Ft(N)}function ee(N){const T=N.texture,rt=r.get(N),_t=r.get(T);N.addEventListener("dispose",F);const mt=N.textures,xt=N.isWebGLCubeRenderTarget===!0,qt=mt.length>1;if(qt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=T.version,h.memory.textures++),xt){rt.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){rt.__webglFramebuffer[Dt]=[];for(let Lt=0;Lt<T.mipmaps.length;Lt++)rt.__webglFramebuffer[Dt][Lt]=o.createFramebuffer()}else rt.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){rt.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)rt.__webglFramebuffer[Dt]=o.createFramebuffer()}else rt.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Dt=0,Lt=mt.length;Dt<Lt;Dt++){const ne=r.get(mt[Dt]);ne.__webglTexture===void 0&&(ne.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&Vt(N)===!1){rt.__webglMultisampledFramebuffer=o.createFramebuffer(),rt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let Dt=0;Dt<mt.length;Dt++){const Lt=mt[Dt];rt.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,rt.__webglColorRenderbuffer[Dt]);const ne=c.convert(Lt.format,Lt.colorSpace),At=c.convert(Lt.type),Ot=z(Lt.internalFormat,ne,At,Lt.colorSpace,N.isXRRenderTarget===!0),he=Se(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,he,Ot,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,rt.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(rt.__webglDepthRenderbuffer=o.createRenderbuffer(),yt(rt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(xt){i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),U(o.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Lt=0;Lt<T.mipmaps.length;Lt++)ot(rt.__webglFramebuffer[Dt][Lt],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Lt);else ot(rt.__webglFramebuffer[Dt],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);x(T)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Dt=0,Lt=mt.length;Dt<Lt;Dt++){const ne=mt[Dt],At=r.get(ne);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),U(o.TEXTURE_2D,ne),ot(rt.__webglFramebuffer,N,ne,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),x(ne)&&S(o.TEXTURE_2D)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Dt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,_t.__webglTexture),U(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Lt=0;Lt<T.mipmaps.length;Lt++)ot(rt.__webglFramebuffer[Lt],N,T,o.COLOR_ATTACHMENT0,Dt,Lt);else ot(rt.__webglFramebuffer,N,T,o.COLOR_ATTACHMENT0,Dt,0);x(T)&&S(Dt),i.unbindTexture()}N.depthBuffer&&Ft(N)}function Le(N){const T=N.textures;for(let rt=0,_t=T.length;rt<_t;rt++){const mt=T[rt];if(x(mt)){const xt=N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,qt=r.get(mt).__webglTexture;i.bindTexture(xt,qt),S(xt),i.unbindTexture()}}}const I=[],Xe=[];function ue(N){if(N.samples>0){if(Vt(N)===!1){const T=N.textures,rt=N.width,_t=N.height;let mt=o.COLOR_BUFFER_BIT;const xt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=r.get(N),Dt=T.length>1;if(Dt)for(let Lt=0;Lt<T.length;Lt++)i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Lt=0;Lt<T.length;Lt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(mt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(mt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Lt]);const ne=r.get(T[Lt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ne,0)}o.blitFramebuffer(0,0,rt,_t,0,0,rt,_t,mt,o.NEAREST),m===!0&&(I.length=0,Xe.length=0,I.push(o.COLOR_ATTACHMENT0+Lt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(I.push(xt),Xe.push(xt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Xe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,I))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Lt=0;Lt<T.length;Lt++){i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Lt]);const ne=r.get(T[Lt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.TEXTURE_2D,ne,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const T=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Se(N){return Math.min(l.maxSamples,N.samples)}function Vt(N){const T=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ke(N){const T=h.render.frame;_.get(N)!==T&&(_.set(N,T),N.update())}function Jt(N,T){const rt=N.colorSpace,_t=N.format,mt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||rt!==Ha&&rt!==za&&(Ee.getTransfer(rt)===Fe?(_t!==_i||mt!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",rt)),T}function $t(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=G,this.setTexture2D=ht,this.setTexture2DArray=ct,this.setTexture3D=P,this.setTextureCube=k,this.rebindTextures=It,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Vt}function ib(o,e){function i(r,l=za){let c;const h=Ee.getTransfer(l);if(r===$i)return o.UNSIGNED_BYTE;if(r===cd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===fd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===_0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===m0)return o.BYTE;if(r===g0)return o.SHORT;if(r===Po)return o.UNSIGNED_SHORT;if(r===ud)return o.INT;if(r===_r)return o.UNSIGNED_INT;if(r===Ki)return o.FLOAT;if(r===zo)return o.HALF_FLOAT;if(r===v0)return o.ALPHA;if(r===S0)return o.RGB;if(r===_i)return o.RGBA;if(r===x0)return o.LUMINANCE;if(r===y0)return o.LUMINANCE_ALPHA;if(r===xs)return o.DEPTH_COMPONENT;if(r===As)return o.DEPTH_STENCIL;if(r===M0)return o.RED;if(r===hd)return o.RED_INTEGER;if(r===E0)return o.RG;if(r===dd)return o.RG_INTEGER;if(r===pd)return o.RGBA_INTEGER;if(r===Mu||r===Eu||r===Tu||r===Au)if(h===Fe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Mu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Mu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Au)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Lh||r===Nh||r===Oh||r===Ph)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Lh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Oh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ph)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zh||r===Bh||r===Ih)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===zh||r===Bh)return h===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ih)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fh||r===Hh||r===Gh||r===Vh||r===Xh||r===kh||r===Wh||r===qh||r===Yh||r===Zh||r===jh||r===Kh||r===Qh||r===Jh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Fh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bu||r===$h||r===td)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===bu)return h===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$h)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===td)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===T0||r===ed||r===nd||r===id)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===bu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===ed)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===id)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ts?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class ab extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class No extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rb={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new No,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new No,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new No,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const x=i.getJointPose(R,r),S=this._getHandJoint(p,R);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=_.position.distanceTo(v.position),M=.02,A=.005;p.inputState.pinching&&y>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(rb)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new No;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const sb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ob=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new wn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ea({vertexShader:sb,fragmentShader:ob,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ji(new Bu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ub extends Rs{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,v=null,y=null,M=null,A=null;const R=new lb,x=i.getContextAttributes();let S=null,z=null;const D=[],O=[],J=new Ae;let F=null;const L=new si;L.layers.enable(1),L.viewport=new pn;const Q=new si;Q.layers.enable(2),Q.viewport=new pn;const w=[L,Q],b=new ab;b.layers.enable(1),b.layers.enable(2);let G=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ot=D[Y];return ot===void 0&&(ot=new Th,D[Y]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Y){let ot=D[Y];return ot===void 0&&(ot=new Th,D[Y]=ot),ot.getGripSpace()},this.getHand=function(Y){let ot=D[Y];return ot===void 0&&(ot=new Th,D[Y]=ot),ot.getHandSpace()};function it(Y){const ot=O.indexOf(Y.inputSource);if(ot===-1)return;const yt=D[ot];yt!==void 0&&(yt.update(Y.inputSource,Y.frame,p||h),yt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ht(){l.removeEventListener("select",it),l.removeEventListener("selectstart",it),l.removeEventListener("selectend",it),l.removeEventListener("squeeze",it),l.removeEventListener("squeezestart",it),l.removeEventListener("squeezeend",it),l.removeEventListener("end",ht),l.removeEventListener("inputsourceschange",ct);for(let Y=0;Y<D.length;Y++){const ot=O[Y];ot!==null&&(O[Y]=null,D[Y].disconnect(ot))}G=null,lt=null,R.reset(),e.setRenderTarget(S),M=null,y=null,v=null,l=null,z=null,St.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(J.width,J.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){c=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(S=e.getRenderTarget(),l.addEventListener("select",it),l.addEventListener("selectstart",it),l.addEventListener("selectend",it),l.addEventListener("squeeze",it),l.addEventListener("squeezestart",it),l.addEventListener("squeezeend",it),l.addEventListener("end",ht),l.addEventListener("inputsourceschange",ct),x.xrCompatible!==!0&&await i.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(J),l.renderState.layers===void 0){const ot={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ot),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new vr(M.framebufferWidth,M.framebufferHeight,{format:_i,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ot=null,yt=null,Mt=null;x.depth&&(Mt=x.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ot=x.stencil?As:xs,yt=x.stencil?Ts:_r);const Ft={colorFormat:i.RGBA8,depthFormat:Mt,scaleFactor:c};v=new XRWebGLBinding(l,i),y=v.createProjectionLayer(Ft),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),z=new vr(y.textureWidth,y.textureHeight,{format:_i,type:$i,depthTexture:new H0(y.textureWidth,y.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),St.setContext(l),St.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ct(Y){for(let ot=0;ot<Y.removed.length;ot++){const yt=Y.removed[ot],Mt=O.indexOf(yt);Mt>=0&&(O[Mt]=null,D[Mt].disconnect(yt))}for(let ot=0;ot<Y.added.length;ot++){const yt=Y.added[ot];let Mt=O.indexOf(yt);if(Mt===-1){for(let It=0;It<D.length;It++)if(It>=O.length){O.push(yt),Mt=It;break}else if(O[It]===null){O[It]=yt,Mt=It;break}if(Mt===-1)break}const Ft=D[Mt];Ft&&Ft.connect(yt)}}const P=new at,k=new at;function V(Y,ot,yt){P.setFromMatrixPosition(ot.matrixWorld),k.setFromMatrixPosition(yt.matrixWorld);const Mt=P.distanceTo(k),Ft=ot.projectionMatrix.elements,It=yt.projectionMatrix.elements,ee=Ft[14]/(Ft[10]-1),Le=Ft[14]/(Ft[10]+1),I=(Ft[9]+1)/Ft[5],Xe=(Ft[9]-1)/Ft[5],ue=(Ft[8]-1)/Ft[0],Se=(It[8]+1)/It[0],Vt=ee*ue,ke=ee*Se,Jt=Mt/(-ue+Se),$t=Jt*-ue;if(ot.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX($t),Y.translateZ(Jt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ft[10]===-1)Y.projectionMatrix.copy(ot.projectionMatrix),Y.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const N=ee+Jt,T=Le+Jt,rt=Vt-$t,_t=ke+(Mt-$t),mt=I*Le/T*N,xt=Xe*Le/T*N;Y.projectionMatrix.makePerspective(rt,_t,mt,xt,N,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function vt(Y,ot){ot===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ot.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let ot=Y.near,yt=Y.far;R.texture!==null&&(R.depthNear>0&&(ot=R.depthNear),R.depthFar>0&&(yt=R.depthFar)),b.near=Q.near=L.near=ot,b.far=Q.far=L.far=yt,(G!==b.near||lt!==b.far)&&(l.updateRenderState({depthNear:b.near,depthFar:b.far}),G=b.near,lt=b.far);const Mt=Y.parent,Ft=b.cameras;vt(b,Mt);for(let It=0;It<Ft.length;It++)vt(Ft[It],Mt);Ft.length===2?V(b,L,Q):b.projectionMatrix.copy(L.projectionMatrix),Et(Y,b,Mt)};function Et(Y,ot,yt){yt===null?Y.matrix.copy(ot.matrixWorld):(Y.matrix.copy(yt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ot.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ot.projectionMatrix),Y.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ad*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(Y){m=Y,y!==null&&(y.fixedFoveation=Y),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Y)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(b)};let U=null;function tt(Y,ot){if(_=ot.getViewerPose(p||h),A=ot,_!==null){const yt=_.views;M!==null&&(e.setRenderTargetFramebuffer(z,M.framebuffer),e.setRenderTarget(z));let Mt=!1;yt.length!==b.cameras.length&&(b.cameras.length=0,Mt=!0);for(let It=0;It<yt.length;It++){const ee=yt[It];let Le=null;if(M!==null)Le=M.getViewport(ee);else{const Xe=v.getViewSubImage(y,ee);Le=Xe.viewport,It===0&&(e.setRenderTargetTextures(z,Xe.colorTexture,y.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(z))}let I=w[It];I===void 0&&(I=new si,I.layers.enable(It),I.viewport=new pn,w[It]=I),I.matrix.fromArray(ee.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(ee.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Le.x,Le.y,Le.width,Le.height),It===0&&(b.matrix.copy(I.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Mt===!0&&b.cameras.push(I)}const Ft=l.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const It=v.getDepthInformation(yt[0]);It&&It.isValid&&It.texture&&R.init(e,It,l.renderState)}}for(let yt=0;yt<D.length;yt++){const Mt=O[yt],Ft=D[yt];Mt!==null&&Ft!==void 0&&Ft.update(Mt,ot,p||h)}U&&U(Y,ot),ot.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ot}),A=null}const St=new F0;St.setAnimationLoop(tt),this.setAnimationLoop=function(Y){U=Y},this.dispose=function(){}}}const ur=new ta,cb=new rn;function fb(o,e){function i(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function r(x,S){S.color.getRGB(x.fogColor.value,P0(o)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function l(x,S,z,D,O){S.isMeshBasicMaterial||S.isMeshLambertMaterial?c(x,S):S.isMeshToonMaterial?(c(x,S),v(x,S)):S.isMeshPhongMaterial?(c(x,S),_(x,S)):S.isMeshStandardMaterial?(c(x,S),y(x,S),S.isMeshPhysicalMaterial&&M(x,S,O)):S.isMeshMatcapMaterial?(c(x,S),A(x,S)):S.isMeshDepthMaterial?c(x,S):S.isMeshDistanceMaterial?(c(x,S),R(x,S)):S.isMeshNormalMaterial?c(x,S):S.isLineBasicMaterial?(h(x,S),S.isLineDashedMaterial&&d(x,S)):S.isPointsMaterial?m(x,S,z,D):S.isSpriteMaterial?p(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,i(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,i(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===Fn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,i(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===Fn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,i(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,i(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const z=e.get(S),D=z.envMap,O=z.envMapRotation;D&&(x.envMap.value=D,ur.copy(O),ur.x*=-1,ur.y*=-1,ur.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),x.envMapRotation.value.setFromMatrix4(cb.makeRotationFromEuler(ur)),x.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,x.aoMapTransform))}function h(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,i(S.map,x.mapTransform))}function d(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function m(x,S,z,D){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*z,x.scale.value=D*.5,S.map&&(x.map.value=S.map,i(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function p(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,i(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function _(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function v(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function y(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function M(x,S,z){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Fn&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=z.texture,x.transmissionSamplerSize.value.set(z.width,z.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,x.specularIntensityMapTransform))}function A(x,S){S.matcap&&(x.matcap.value=S.matcap)}function R(x,S){const z=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(z.matrixWorld),x.nearDistance.value=z.shadow.camera.near,x.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function hb(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,D){const O=D.program;r.uniformBlockBinding(z,O)}function p(z,D){let O=l[z.id];O===void 0&&(A(z),O=_(z),l[z.id]=O,z.addEventListener("dispose",x));const J=D.program;r.updateUBOMapping(z,J);const F=e.render.frame;c[z.id]!==F&&(y(z),c[z.id]=F)}function _(z){const D=v();z.__bindingPointIndex=D;const O=o.createBuffer(),J=z.__size,F=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,J,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,O),O}function v(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(z){const D=l[z.id],O=z.uniforms,J=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let F=0,L=O.length;F<L;F++){const Q=Array.isArray(O[F])?O[F]:[O[F]];for(let w=0,b=Q.length;w<b;w++){const G=Q[w];if(M(G,F,w,J)===!0){const lt=G.__offset,it=Array.isArray(G.value)?G.value:[G.value];let ht=0;for(let ct=0;ct<it.length;ct++){const P=it[ct],k=R(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,lt+ht,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,ht),ht+=k.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(z,D,O,J){const F=z.value,L=D+"_"+O;if(J[L]===void 0)return typeof F=="number"||typeof F=="boolean"?J[L]=F:J[L]=F.clone(),!0;{const Q=J[L];if(typeof F=="number"||typeof F=="boolean"){if(Q!==F)return J[L]=F,!0}else if(Q.equals(F)===!1)return Q.copy(F),!0}return!1}function A(z){const D=z.uniforms;let O=0;const J=16;for(let L=0,Q=D.length;L<Q;L++){const w=Array.isArray(D[L])?D[L]:[D[L]];for(let b=0,G=w.length;b<G;b++){const lt=w[b],it=Array.isArray(lt.value)?lt.value:[lt.value];for(let ht=0,ct=it.length;ht<ct;ht++){const P=it[ht],k=R(P),V=O%J,vt=V%k.boundary,Et=V+vt;O+=vt,Et!==0&&J-Et<k.storage&&(O+=J-Et),lt.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=O,O+=k.storage}}}const F=O%J;return F>0&&(O+=J-F),z.__size=O,z.__cache={},this}function R(z){const D={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(D.boundary=4,D.storage=4):z.isVector2?(D.boundary=8,D.storage=8):z.isVector3||z.isColor?(D.boundary=16,D.storage=12):z.isVector4?(D.boundary=16,D.storage=16):z.isMatrix3?(D.boundary=48,D.storage=48):z.isMatrix4?(D.boundary=64,D.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),D}function x(z){const D=z.target;D.removeEventListener("dispose",x);const O=h.indexOf(D.__bindingPointIndex);h.splice(O,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function S(){for(const z in l)o.deleteBuffer(l[z]);h=[],l={},c={}}return{bind:m,update:p,dispose:S}}class db{constructor(e={}){const{canvas:i=ny(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const M=new Uint32Array(4),A=new Int32Array(4);let R=null,x=null;const S=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ei,this.toneMapping=Ia,this.toneMappingExposure=1;const D=this;let O=!1,J=0,F=0,L=null,Q=-1,w=null;const b=new pn,G=new pn;let lt=null;const it=new Te(0);let ht=0,ct=i.width,P=i.height,k=1,V=null,vt=null;const Et=new pn(0,0,ct,P),U=new pn(0,0,ct,P);let tt=!1;const St=new I0;let Y=!1,ot=!1;const yt=new rn,Mt=new at,Ft=new pn,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function Le(){return L===null?k:1}let I=r;function Xe(C,W){return i.getContext(C,W)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ld}`),i.addEventListener("webglcontextlost",dt,!1),i.addEventListener("webglcontextrestored",gt,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),I===null){const W="webgl2";if(I=Xe(W,C),I===null)throw Xe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ue,Se,Vt,ke,Jt,$t,N,T,rt,_t,mt,xt,qt,Dt,Lt,ne,At,Ot,he,jt,Ct,Yt,Zt,ze;function X(){ue=new ST(I),ue.init(),Yt=new ib(I,ue),Se=new hT(I,ue,e,Yt),Vt=new tb(I),ke=new MT(I),Jt=new HA,$t=new nb(I,ue,Vt,Jt,Se,Yt,ke),N=new pT(D),T=new vT(D),rt=new Cy(I),Zt=new cT(I,rt),_t=new xT(I,rt,ke,Zt),mt=new TT(I,_t,rt,ke),he=new ET(I,Se,$t),ne=new dT(Jt),xt=new FA(D,N,T,ue,Se,Zt,ne),qt=new fb(D,Jt),Dt=new VA,Lt=new ZA(ue),Ot=new uT(D,N,T,Vt,mt,y,m),At=new $A(D,mt,Se),ze=new hb(I,ke,Se,Vt),jt=new fT(I,ue,ke),Ct=new yT(I,ue,ke),ke.programs=xt.programs,D.capabilities=Se,D.extensions=ue,D.properties=Jt,D.renderLists=Dt,D.shadowMap=At,D.state=Vt,D.info=ke}X();const bt=new ub(D,I);this.xr=bt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=ue.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ue.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(ct,P,!1))},this.getSize=function(C){return C.set(ct,P)},this.setSize=function(C,W,et=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ct=C,P=W,i.width=Math.floor(C*k),i.height=Math.floor(W*k),et===!0&&(i.style.width=C+"px",i.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(ct*k,P*k).floor()},this.setDrawingBufferSize=function(C,W,et){ct=C,P=W,k=et,i.width=Math.floor(C*et),i.height=Math.floor(W*et),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(Et)},this.setViewport=function(C,W,et,nt){C.isVector4?Et.set(C.x,C.y,C.z,C.w):Et.set(C,W,et,nt),Vt.viewport(b.copy(Et).multiplyScalar(k).round())},this.getScissor=function(C){return C.copy(U)},this.setScissor=function(C,W,et,nt){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,W,et,nt),Vt.scissor(G.copy(U).multiplyScalar(k).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(C){Vt.setScissorTest(tt=C)},this.setOpaqueSort=function(C){V=C},this.setTransparentSort=function(C){vt=C},this.getClearColor=function(C){return C.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(C=!0,W=!0,et=!0){let nt=0;if(C){let Z=!1;if(L!==null){const Tt=L.texture.format;Z=Tt===pd||Tt===dd||Tt===hd}if(Z){const Tt=L.texture.type,wt=Tt===$i||Tt===_r||Tt===Po||Tt===Ts||Tt===cd||Tt===fd,Pt=Ot.getClearColor(),Nt=Ot.getClearAlpha(),zt=Pt.r,Qt=Pt.g,Gt=Pt.b;wt?(M[0]=zt,M[1]=Qt,M[2]=Gt,M[3]=Nt,I.clearBufferuiv(I.COLOR,0,M)):(A[0]=zt,A[1]=Qt,A[2]=Gt,A[3]=Nt,I.clearBufferiv(I.COLOR,0,A))}else nt|=I.COLOR_BUFFER_BIT}W&&(nt|=I.DEPTH_BUFFER_BIT),et&&(nt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",dt,!1),i.removeEventListener("webglcontextrestored",gt,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),Dt.dispose(),Lt.dispose(),Jt.dispose(),N.dispose(),T.dispose(),mt.dispose(),Zt.dispose(),ze.dispose(),xt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Sn),bt.removeEventListener("sessionend",Vo),vi.stop()};function dt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const C=ke.autoReset,W=At.enabled,et=At.autoUpdate,nt=At.needsUpdate,Z=At.type;X(),ke.autoReset=C,At.enabled=W,At.autoUpdate=et,At.needsUpdate=nt,At.type=Z}function Rt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function kt(C){const W=C.target;W.removeEventListener("dispose",kt),oe(W)}function oe(C){Pe(C),Jt.remove(C)}function Pe(C){const W=Jt.get(C).programs;W!==void 0&&(W.forEach(function(et){xt.releaseProgram(et)}),C.isShaderMaterial&&xt.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,et,nt,Z,Tt){W===null&&(W=It);const wt=Z.isMesh&&Z.matrixWorld.determinant()<0,Pt=xn(C,W,et,nt,Z);Vt.setMaterial(nt,wt);let Nt=et.index,zt=1;if(nt.wireframe===!0){if(Nt=_t.getWireframeAttribute(et),Nt===void 0)return;zt=2}const Qt=et.drawRange,Gt=et.attributes.position;let le=Qt.start*zt,be=(Qt.start+Qt.count)*zt;Tt!==null&&(le=Math.max(le,Tt.start*zt),be=Math.min(be,(Tt.start+Tt.count)*zt)),Nt!==null?(le=Math.max(le,0),be=Math.min(be,Nt.count)):Gt!=null&&(le=Math.max(le,0),be=Math.min(be,Gt.count));const He=be-le;if(He<0||He===1/0)return;Zt.setup(Z,nt,Pt,et,Nt);let yn,ve=jt;if(Nt!==null&&(yn=rt.get(Nt),ve=Ct,ve.setIndex(yn)),Z.isMesh)nt.wireframe===!0?(Vt.setLineWidth(nt.wireframeLinewidth*Le()),ve.setMode(I.LINES)):ve.setMode(I.TRIANGLES);else if(Z.isLine){let Xt=nt.linewidth;Xt===void 0&&(Xt=1),Vt.setLineWidth(Xt*Le()),Z.isLineSegments?ve.setMode(I.LINES):Z.isLineLoop?ve.setMode(I.LINE_LOOP):ve.setMode(I.LINE_STRIP)}else Z.isPoints?ve.setMode(I.POINTS):Z.isSprite&&ve.setMode(I.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ve.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))ve.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Xt=Z._multiDrawStarts,We=Z._multiDrawCounts,me=Z._multiDrawCount,je=Nt?rt.get(Nt).bytesPerElement:1,on=Jt.get(nt).currentProgram.getUniforms();for(let Mn=0;Mn<me;Mn++)on.setValue(I,"_gl_DrawID",Mn),ve.render(Xt[Mn]/je,We[Mn])}else if(Z.isInstancedMesh)ve.renderInstances(le,He,Z.count);else if(et.isInstancedBufferGeometry){const Xt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,We=Math.min(et.instanceCount,Xt);ve.renderInstances(le,He,We)}else ve.render(le,He)};function sn(C,W,et){C.transparent===!0&&C.side===ji&&C.forceSinglePass===!1?(C.side=Fn,C.needsUpdate=!0,Ga(C,W,et),C.side=Fa,C.needsUpdate=!0,Ga(C,W,et),C.side=ji):Ga(C,W,et)}this.compile=function(C,W,et=null){et===null&&(et=C),x=Lt.get(et),x.init(W),z.push(x),et.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),C!==et&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),x.setupLights();const nt=new Set;return C.traverse(function(Z){const Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const Pt=Tt[wt];sn(Pt,et,Z),nt.add(Pt)}else sn(Tt,et,Z),nt.add(Tt)}),z.pop(),x=null,nt},this.compileAsync=function(C,W,et=null){const nt=this.compile(C,W,et);return new Promise(Z=>{function Tt(){if(nt.forEach(function(wt){Jt.get(wt).currentProgram.isReady()&&nt.delete(wt)}),nt.size===0){Z(C);return}setTimeout(Tt,10)}ue.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let _e=null;function Gn(C){_e&&_e(C)}function Sn(){vi.stop()}function Vo(){vi.start()}const vi=new F0;vi.setAnimationLoop(Gn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(C){_e=C,bt.setAnimationLoop(C),C===null?vi.stop():vi.start()},bt.addEventListener("sessionstart",Sn),bt.addEventListener("sessionend",Vo),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(W),W=bt.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,W,L),x=Lt.get(C,z.length),x.init(W),z.push(x),yt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),St.setFromProjectionMatrix(yt),ot=this.localClippingEnabled,Y=ne.init(this.clippingPlanes,ot),R=Dt.get(C,S.length),R.init(),S.push(R),bt.enabled===!0&&bt.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&Sr(Tt,W,-1/0,D.sortObjects)}Sr(C,W,0,D.sortObjects),R.finish(),D.sortObjects===!0&&R.sort(V,vt),ee=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ee&&Ot.addToRenderList(R,C),this.info.render.frame++,Y===!0&&ne.beginShadows();const et=x.state.shadowsArray;At.render(et,C,W),Y===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=R.opaque,Z=R.transmissive;if(x.setupLights(),W.isArrayCamera){const Tt=W.cameras;if(Z.length>0)for(let wt=0,Pt=Tt.length;wt<Pt;wt++){const Nt=Tt[wt];xr(nt,Z,C,Nt)}ee&&Ot.render(C);for(let wt=0,Pt=Tt.length;wt<Pt;wt++){const Nt=Tt[wt];ws(R,C,Nt,Nt.viewport)}}else Z.length>0&&xr(nt,Z,C,W),ee&&Ot.render(C),ws(R,C,W);L!==null&&($t.updateMultisampleRenderTarget(L),$t.updateRenderTargetMipmap(L)),C.isScene===!0&&C.onAfterRender(D,C,W),Zt.resetDefaultState(),Q=-1,w=null,z.pop(),z.length>0?(x=z[z.length-1],Y===!0&&ne.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,S.pop(),S.length>0?R=S[S.length-1]:R=null};function Sr(C,W,et,nt){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)et=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||St.intersectsSprite(C)){nt&&Ft.setFromMatrixPosition(C.matrixWorld).applyMatrix4(yt);const wt=mt.update(C),Pt=C.material;Pt.visible&&R.push(C,wt,Pt,et,Ft.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||St.intersectsObject(C))){const wt=mt.update(C),Pt=C.material;if(nt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ft.copy(C.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Ft.copy(wt.boundingSphere.center)),Ft.applyMatrix4(C.matrixWorld).applyMatrix4(yt)),Array.isArray(Pt)){const Nt=wt.groups;for(let zt=0,Qt=Nt.length;zt<Qt;zt++){const Gt=Nt[zt],le=Pt[Gt.materialIndex];le&&le.visible&&R.push(C,wt,le,et,Ft.z,Gt)}}else Pt.visible&&R.push(C,wt,Pt,et,Ft.z,null)}}const Tt=C.children;for(let wt=0,Pt=Tt.length;wt<Pt;wt++)Sr(Tt[wt],W,et,nt)}function ws(C,W,et,nt){const Z=C.opaque,Tt=C.transmissive,wt=C.transparent;x.setupLightsView(et),Y===!0&&ne.setGlobalState(D.clippingPlanes,et),nt&&Vt.viewport(b.copy(nt)),Z.length>0&&ia(Z,W,et),Tt.length>0&&ia(Tt,W,et),wt.length>0&&ia(wt,W,et),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function xr(C,W,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[nt.id]===void 0&&(x.state.transmissionRenderTarget[nt.id]=new vr(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?zo:$i,minFilter:mr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));const Tt=x.state.transmissionRenderTarget[nt.id],wt=nt.viewport||b;Tt.setSize(wt.z,wt.w);const Pt=D.getRenderTarget();D.setRenderTarget(Tt),D.getClearColor(it),ht=D.getClearAlpha(),ht<1&&D.setClearColor(16777215,.5),D.clear(),ee&&Ot.render(et);const Nt=D.toneMapping;D.toneMapping=Ia;const zt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),x.setupLightsView(nt),Y===!0&&ne.setGlobalState(D.clippingPlanes,nt),ia(C,et,nt),$t.updateMultisampleRenderTarget(Tt),$t.updateRenderTargetMipmap(Tt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Gt=0,le=W.length;Gt<le;Gt++){const be=W[Gt],He=be.object,yn=be.geometry,ve=be.material,Xt=be.group;if(ve.side===ji&&He.layers.test(nt.layers)){const We=ve.side;ve.side=Fn,ve.needsUpdate=!0,Ds(He,et,nt,yn,ve,Xt),ve.side=We,ve.needsUpdate=!0,Qt=!0}}Qt===!0&&($t.updateMultisampleRenderTarget(Tt),$t.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Pt),D.setClearColor(it,ht),zt!==void 0&&(nt.viewport=zt),D.toneMapping=Nt}function ia(C,W,et){const nt=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Tt=C.length;Z<Tt;Z++){const wt=C[Z],Pt=wt.object,Nt=wt.geometry,zt=nt===null?wt.material:nt,Qt=wt.group;Pt.layers.test(et.layers)&&Ds(Pt,W,et,Nt,zt,Qt)}}function Ds(C,W,et,nt,Z,Tt){C.onBeforeRender(D,W,et,nt,Z,Tt),C.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(D,W,et,nt,C,Tt),Z.transparent===!0&&Z.side===ji&&Z.forceSinglePass===!1?(Z.side=Fn,Z.needsUpdate=!0,D.renderBufferDirect(et,W,nt,Z,C,Tt),Z.side=Fa,Z.needsUpdate=!0,D.renderBufferDirect(et,W,nt,Z,C,Tt),Z.side=ji):D.renderBufferDirect(et,W,nt,Z,C,Tt),C.onAfterRender(D,W,et,nt,Z,Tt)}function Ga(C,W,et){W.isScene!==!0&&(W=It);const nt=Jt.get(C),Z=x.state.lights,Tt=x.state.shadowsArray,wt=Z.state.version,Pt=xt.getParameters(C,Z.state,Tt,W,et),Nt=xt.getProgramCacheKey(Pt);let zt=nt.programs;nt.environment=C.isMeshStandardMaterial?W.environment:null,nt.fog=W.fog,nt.envMap=(C.isMeshStandardMaterial?T:N).get(C.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,zt===void 0&&(C.addEventListener("dispose",kt),zt=new Map,nt.programs=zt);let Qt=zt.get(Nt);if(Qt!==void 0){if(nt.currentProgram===Qt&&nt.lightsStateVersion===wt)return Je(C,Pt),Qt}else Pt.uniforms=xt.getUniforms(C),C.onBeforeCompile(Pt,D),Qt=xt.acquireProgram(Pt,Nt),zt.set(Nt,Qt),nt.uniforms=Pt.uniforms;const Gt=nt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Gt.clippingPlanes=ne.uniform),Je(C,Pt),nt.needsLights=Us(C),nt.lightsStateVersion=wt,nt.needsLights&&(Gt.ambientLightColor.value=Z.state.ambient,Gt.lightProbe.value=Z.state.probe,Gt.directionalLights.value=Z.state.directional,Gt.directionalLightShadows.value=Z.state.directionalShadow,Gt.spotLights.value=Z.state.spot,Gt.spotLightShadows.value=Z.state.spotShadow,Gt.rectAreaLights.value=Z.state.rectArea,Gt.ltc_1.value=Z.state.rectAreaLTC1,Gt.ltc_2.value=Z.state.rectAreaLTC2,Gt.pointLights.value=Z.state.point,Gt.pointLightShadows.value=Z.state.pointShadow,Gt.hemisphereLights.value=Z.state.hemi,Gt.directionalShadowMap.value=Z.state.directionalShadowMap,Gt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Gt.spotShadowMap.value=Z.state.spotShadowMap,Gt.spotLightMatrix.value=Z.state.spotLightMatrix,Gt.spotLightMap.value=Z.state.spotLightMap,Gt.pointShadowMap.value=Z.state.pointShadowMap,Gt.pointShadowMatrix.value=Z.state.pointShadowMatrix),nt.currentProgram=Qt,nt.uniformsList=null,Qt}function li(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Ru.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Je(C,W){const et=Jt.get(C);et.outputColorSpace=W.outputColorSpace,et.batching=W.batching,et.batchingColor=W.batchingColor,et.instancing=W.instancing,et.instancingColor=W.instancingColor,et.instancingMorph=W.instancingMorph,et.skinning=W.skinning,et.morphTargets=W.morphTargets,et.morphNormals=W.morphNormals,et.morphColors=W.morphColors,et.morphTargetsCount=W.morphTargetsCount,et.numClippingPlanes=W.numClippingPlanes,et.numIntersection=W.numClipIntersection,et.vertexAlphas=W.vertexAlphas,et.vertexTangents=W.vertexTangents,et.toneMapping=W.toneMapping}function xn(C,W,et,nt,Z){W.isScene!==!0&&(W=It),$t.resetTextureUnits();const Tt=W.fog,wt=nt.isMeshStandardMaterial?W.environment:null,Pt=L===null?D.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ha,Nt=(nt.isMeshStandardMaterial?T:N).get(nt.envMap||wt),zt=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Qt=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Gt=!!et.morphAttributes.position,le=!!et.morphAttributes.normal,be=!!et.morphAttributes.color;let He=Ia;nt.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(He=D.toneMapping);const yn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ve=yn!==void 0?yn.length:0,Xt=Jt.get(nt),We=x.state.lights;if(Y===!0&&(ot===!0||C!==w)){const Dn=C===w&&nt.id===Q;ne.setState(nt,C,Dn)}let me=!1;nt.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==We.state.version||Xt.outputColorSpace!==Pt||Z.isBatchedMesh&&Xt.batching===!1||!Z.isBatchedMesh&&Xt.batching===!0||Z.isBatchedMesh&&Xt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Xt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Xt.instancing===!1||!Z.isInstancedMesh&&Xt.instancing===!0||Z.isSkinnedMesh&&Xt.skinning===!1||!Z.isSkinnedMesh&&Xt.skinning===!0||Z.isInstancedMesh&&Xt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Xt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Xt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Xt.instancingMorph===!1&&Z.morphTexture!==null||Xt.envMap!==Nt||nt.fog===!0&&Xt.fog!==Tt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==ne.numPlanes||Xt.numIntersection!==ne.numIntersection)||Xt.vertexAlphas!==zt||Xt.vertexTangents!==Qt||Xt.morphTargets!==Gt||Xt.morphNormals!==le||Xt.morphColors!==be||Xt.toneMapping!==He||Xt.morphTargetsCount!==ve)&&(me=!0):(me=!0,Xt.__version=nt.version);let je=Xt.currentProgram;me===!0&&(je=Ga(nt,W,Z));let on=!1,Mn=!1,Ls=!1;const Ge=je.getUniforms(),ui=Xt.uniforms;if(Vt.useProgram(je.program)&&(on=!0,Mn=!0,Ls=!0),nt.id!==Q&&(Q=nt.id,Mn=!0),on||w!==C){Ge.setValue(I,"projectionMatrix",C.projectionMatrix),Ge.setValue(I,"viewMatrix",C.matrixWorldInverse);const Dn=Ge.map.cameraPosition;Dn!==void 0&&Dn.setValue(I,Mt.setFromMatrixPosition(C.matrixWorld)),Se.logarithmicDepthBuffer&&Ge.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ge.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,Mn=!0,Ls=!0)}if(Z.isSkinnedMesh){Ge.setOptional(I,Z,"bindMatrix"),Ge.setOptional(I,Z,"bindMatrixInverse");const Dn=Z.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),Ge.setValue(I,"boneTexture",Dn.boneTexture,$t))}Z.isBatchedMesh&&(Ge.setOptional(I,Z,"batchingTexture"),Ge.setValue(I,"batchingTexture",Z._matricesTexture,$t),Ge.setOptional(I,Z,"batchingIdTexture"),Ge.setValue(I,"batchingIdTexture",Z._indirectTexture,$t),Ge.setOptional(I,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ge.setValue(I,"batchingColorTexture",Z._colorsTexture,$t));const ra=et.morphAttributes;if((ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0)&&he.update(Z,et,je),(Mn||Xt.receiveShadow!==Z.receiveShadow)&&(Xt.receiveShadow=Z.receiveShadow,Ge.setValue(I,"receiveShadow",Z.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(ui.envMap.value=Nt,ui.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&W.environment!==null&&(ui.envMapIntensity.value=W.environmentIntensity),Mn&&(Ge.setValue(I,"toneMappingExposure",D.toneMappingExposure),Xt.needsLights&&aa(ui,Ls),Tt&&nt.fog===!0&&qt.refreshFogUniforms(ui,Tt),qt.refreshMaterialUniforms(ui,nt,k,P,x.state.transmissionRenderTarget[C.id]),Ru.upload(I,li(Xt),ui,$t)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Ru.upload(I,li(Xt),ui,$t),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ge.setValue(I,"center",Z.center),Ge.setValue(I,"modelViewMatrix",Z.modelViewMatrix),Ge.setValue(I,"normalMatrix",Z.normalMatrix),Ge.setValue(I,"modelMatrix",Z.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const Dn=nt.uniformsGroups;for(let En=0,Ns=Dn.length;En<Ns;En++){const Os=Dn[En];ze.update(Os,je),ze.bind(Os,je)}}return je}function aa(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Us(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,W,et){Jt.get(C.texture).__webglTexture=W,Jt.get(C.depthTexture).__webglTexture=et;const nt=Jt.get(C);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const et=Jt.get(C);et.__webglFramebuffer=W,et.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,et=0){L=C,J=W,F=et;let nt=!0,Z=null,Tt=!1,wt=!1;if(C){const Nt=Jt.get(C);if(Nt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(I.FRAMEBUFFER,null),nt=!1;else if(Nt.__webglFramebuffer===void 0)$t.setupRenderTarget(C);else if(Nt.__hasExternalTextures)$t.rebindTextures(C,Jt.get(C.texture).__webglTexture,Jt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Gt=C.depthTexture;if(Nt.__boundDepthTexture!==Gt){if(Gt!==null&&Jt.has(Gt)&&(C.width!==Gt.image.width||C.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$t.setupDepthRenderbuffer(C)}}const zt=C.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(wt=!0);const Qt=Jt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qt[W])?Z=Qt[W][et]:Z=Qt[W],Tt=!0):C.samples>0&&$t.useMultisampledRTT(C)===!1?Z=Jt.get(C).__webglMultisampledFramebuffer:Array.isArray(Qt)?Z=Qt[et]:Z=Qt,b.copy(C.viewport),G.copy(C.scissor),lt=C.scissorTest}else b.copy(Et).multiplyScalar(k).floor(),G.copy(U).multiplyScalar(k).floor(),lt=tt;if(Vt.bindFramebuffer(I.FRAMEBUFFER,Z)&&nt&&Vt.drawBuffers(C,Z),Vt.viewport(b),Vt.scissor(G),Vt.setScissorTest(lt),Tt){const Nt=Jt.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Nt.__webglTexture,et)}else if(wt){const Nt=Jt.get(C.texture),zt=W||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Nt.__webglTexture,et||0,zt)}Q=-1},this.readRenderTargetPixels=function(C,W,et,nt,Z,Tt,wt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Jt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&wt!==void 0&&(Pt=Pt[wt]),Pt){Vt.bindFramebuffer(I.FRAMEBUFFER,Pt);try{const Nt=C.texture,zt=Nt.format,Qt=Nt.type;if(!Se.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-nt&&et>=0&&et<=C.height-Z&&I.readPixels(W,et,nt,Z,Yt.convert(zt),Yt.convert(Qt),Tt)}finally{const Nt=L!==null?Jt.get(L).__webglFramebuffer:null;Vt.bindFramebuffer(I.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(C,W,et,nt,Z,Tt,wt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Jt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&wt!==void 0&&(Pt=Pt[wt]),Pt){Vt.bindFramebuffer(I.FRAMEBUFFER,Pt);try{const Nt=C.texture,zt=Nt.format,Qt=Nt.type;if(!Se.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-nt&&et>=0&&et<=C.height-Z){const Gt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Gt),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),I.readPixels(W,et,nt,Z,Yt.convert(zt),Yt.convert(Qt),0),I.flush();const le=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await iy(I,le,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Gt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt)}finally{I.deleteBuffer(Gt),I.deleteSync(le)}return Tt}}finally{const Nt=L!==null?Jt.get(L).__webglFramebuffer:null;Vt.bindFramebuffer(I.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(C,W=null,et=0){C.isTexture!==!0&&(Oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const nt=Math.pow(2,-et),Z=Math.floor(C.image.width*nt),Tt=Math.floor(C.image.height*nt),wt=W!==null?W.x:0,Pt=W!==null?W.y:0;$t.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,et,0,0,wt,Pt,Z,Tt),Vt.unbindTexture()},this.copyTextureToTexture=function(C,W,et=null,nt=null,Z=0){C.isTexture!==!0&&(Oo("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,C=arguments[1],W=arguments[2],Z=arguments[3]||0,et=null);let Tt,wt,Pt,Nt,zt,Qt;et!==null?(Tt=et.max.x-et.min.x,wt=et.max.y-et.min.y,Pt=et.min.x,Nt=et.min.y):(Tt=C.image.width,wt=C.image.height,Pt=0,Nt=0),nt!==null?(zt=nt.x,Qt=nt.y):(zt=0,Qt=0);const Gt=Yt.convert(W.format),le=Yt.convert(W.type);$t.setTexture2D(W,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const be=I.getParameter(I.UNPACK_ROW_LENGTH),He=I.getParameter(I.UNPACK_IMAGE_HEIGHT),yn=I.getParameter(I.UNPACK_SKIP_PIXELS),ve=I.getParameter(I.UNPACK_SKIP_ROWS),Xt=I.getParameter(I.UNPACK_SKIP_IMAGES),We=C.isCompressedTexture?C.mipmaps[Z]:C.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,We.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,We.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Nt),C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Z,zt,Qt,Tt,wt,Gt,le,We.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Z,zt,Qt,We.width,We.height,Gt,We.data):I.texSubImage2D(I.TEXTURE_2D,Z,zt,Qt,Tt,wt,Gt,le,We),I.pixelStorei(I.UNPACK_ROW_LENGTH,be),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,He),I.pixelStorei(I.UNPACK_SKIP_PIXELS,yn),I.pixelStorei(I.UNPACK_SKIP_ROWS,ve),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xt),Z===0&&W.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Vt.unbindTexture()},this.copyTextureToTexture3D=function(C,W,et=null,nt=null,Z=0){C.isTexture!==!0&&(Oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,nt=arguments[1]||null,C=arguments[2],W=arguments[3],Z=arguments[4]||0);let Tt,wt,Pt,Nt,zt,Qt,Gt,le,be;const He=C.isCompressedTexture?C.mipmaps[Z]:C.image;et!==null?(Tt=et.max.x-et.min.x,wt=et.max.y-et.min.y,Pt=et.max.z-et.min.z,Nt=et.min.x,zt=et.min.y,Qt=et.min.z):(Tt=He.width,wt=He.height,Pt=He.depth,Nt=0,zt=0,Qt=0),nt!==null?(Gt=nt.x,le=nt.y,be=nt.z):(Gt=0,le=0,be=0);const yn=Yt.convert(W.format),ve=Yt.convert(W.type);let Xt;if(W.isData3DTexture)$t.setTexture3D(W,0),Xt=I.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)$t.setTexture2DArray(W,0),Xt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const We=I.getParameter(I.UNPACK_ROW_LENGTH),me=I.getParameter(I.UNPACK_IMAGE_HEIGHT),je=I.getParameter(I.UNPACK_SKIP_PIXELS),on=I.getParameter(I.UNPACK_SKIP_ROWS),Mn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,He.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,He.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Nt),I.pixelStorei(I.UNPACK_SKIP_ROWS,zt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qt),C.isDataTexture||C.isData3DTexture?I.texSubImage3D(Xt,Z,Gt,le,be,Tt,wt,Pt,yn,ve,He.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(Xt,Z,Gt,le,be,Tt,wt,Pt,yn,He.data):I.texSubImage3D(Xt,Z,Gt,le,be,Tt,wt,Pt,yn,ve,He),I.pixelStorei(I.UNPACK_ROW_LENGTH,We),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,me),I.pixelStorei(I.UNPACK_SKIP_PIXELS,je),I.pixelStorei(I.UNPACK_SKIP_ROWS,on),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Mn),Z===0&&W.generateMipmaps&&I.generateMipmap(Xt),Vt.unbindTexture()},this.initRenderTarget=function(C){Jt.get(C).__webglFramebuffer===void 0&&$t.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?$t.setTextureCube(C,0):C.isData3DTexture?$t.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?$t.setTexture2DArray(C,0):$t.setTexture2D(C,0),Vt.unbindTexture()},this.resetState=function(){J=0,F=0,L=null,Vt.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===md?"display-p3":"srgb",i.unpackColorSpace=Ee.workingColorSpace===Pu?"display-p3":"srgb"}}class _d{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=i}clone(){return new _d(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pb extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class mb extends Ho{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const r0=new rn,sd=new w0,xu=new zu,yu=new at;class gb extends Hn{constructor(e=new na,i=new mb){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),xu.copy(r.boundingSphere),xu.applyMatrix4(l),xu.radius+=c,e.ray.intersectsSphere(xu)===!1)return;r0.copy(l).invert(),sd.copy(e.ray).applyMatrix4(r0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const y=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let A=y,R=M;A<R;A++){const x=p.getX(A);yu.fromBufferAttribute(v,x),s0(yu,x,m,l,e,i,this)}}else{const y=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let A=y,R=M;A<R;A++)yu.fromBufferAttribute(v,A),s0(yu,A,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function s0(o,e,i,r,l,c,h){const d=sd.distanceSqToPoint(o);if(d<i){const m=new at;sd.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,object:h})}}class _b extends wn{constructor(e,i,r,l,c,h,d,m,p){super(e,i,r,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=o0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=o0();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function o0(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ld);const Pa=[3552,3648,4215,4346,4702,4973,5454,6078,6080,6205,6373,6845,7570,7601,7602,8158,8739,8781,9129,9333,9410,9707,10027,10182,10630,11093,11379,11631,11744,12808,13462,13595,13632,13663,14628,14831,15796,15972,17245,17656,17846,19187,19592,19839,19901,20621,21214,21278,22706,24426,27871,28063,28531,29246,32530,35966,43822],_s=[.20320023,.240428955,.250814845,.27683691,.291074667,.3021083,.311718809,.324788147,.347799353,.362536656,.400185582,.417333031,.426267343,.437478346,.463457391,.470897362,.485592675,.533439258,.547034522,.557377309,.565667836,.576007618,.583099392,.589947027,.601855424,.644230419,.650078677,.658507585,.664425149,.691539883,.700260709,.728996858,.733857774,.753453022,.778192209,.782484904,.794440567,.808868488,.811877735,.8155771,.832775062,.854179756,.857698942,.86473999,.875209863,.88001511,.882261864,.899455841,.923902348,.93460629,.942972185,.955804172,.963306037,.97078122,.975832842,.987263722,.995676395];function l0(o){const e=Pa.length,i=Pa[0],r=_s[0],l=Pa[e-1],c=_s[e-1];if(o<i){const v=i/3;return o<=0?0:r*(Math.exp(o/v)-1)/(Math.exp(i/v)-1)}if(o>l){const v=(_s[e-1]-_s[e-2])/(Pa[e-1]-Pa[e-2]),y=v<=0?1:(1-c)/v;return 1-(1-c)*Math.exp(-(o-l)/y)}let h=0;for(;h<e-1&&Pa[h+1]<=o;)h+=1;const d=Pa[h],m=Pa[h+1],p=_s[h],_=_s[h+1];return p+(_-p)*(o-d)/(m-d)}const Uo=0,Sb=1e5,xb=5e3;function u0(o){return o>=100?"100":o>=99.99?o.toFixed(4):o>=99.9?o.toFixed(3):(o>=99,o.toFixed(2))}const c0=[{min:90,src:"images/5090.png",label:"5090"},{min:70,src:"images/5060.png",label:"5060"},{min:50,src:"images/5060baby.png",label:"5060 Baby"},{min:30,src:"images/dinkyboi.png",label:"Dinky Boi"},{min:0,src:"images/sd.png",label:"SD"}];function yb(o,e){const[i,r]=Oe.useState(o),l=Oe.useRef(i);return Oe.useEffect(()=>{l.current=i},[i]),Oe.useEffect(()=>{{r(o);return}},[o,e]),i}function Mb(o){return o>=.99?"Top 1%":o>=.95?"Top 5%":o>=.9?"Top 10%":o>=.8?"Top 20%":o>=.7?"Top 30%":o>=.5?"Above Average":o>=.3?"Mid Pack":"Entry Tier"}function Eb(o){return o>=.99?"Does oil prince semen work well as chapstick?":o>=.95?"How many kidneys did you sell for this?":o>=.9?"Did you take out a second mortgage?":o>=.8?"Mom's credit card must be smoking":o>=.7?"At least it's not integrated graphics":o>=.5?"Is this a toaster or a GPU?":o>=.3?"Could be worse... I guess":"Did you benchmark your Nokia?"}function f0(o){const e=Math.max(0,Math.min(100,o));return c0.find(i=>e>=i.min)??c0.at(-1)}function Tb({power:o,onWebglFail:e}){const i=Oe.useRef(null),r=Oe.useRef(o);return Oe.useEffect(()=>{r.current=o},[o]),Oe.useEffect(()=>{if(!i.current)return;const l=new pb;l.fog=new _d(1296,.05);const c=new si(70,window.innerWidth/window.innerHeight,.1,1e3);c.position.set(0,.8,10.5),c.lookAt(0,.7,0);let h;try{h=new db({antialias:!0,alpha:!0})}catch{e?.();return}h.setSize(window.innerWidth,window.innerHeight),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.current.appendChild(h.domElement);class d{constructor(A=42){this.seed=A,this.power=1e4,this.time=0,this.maxParticles=12e4;const R=new Float32Array(this.maxParticles*3),x=new Float32Array(this.maxParticles*3),S=new Float32Array(this.maxParticles*3),z=new Float32Array(this.maxParticles),D=new Float32Array(this.maxParticles),O=new Float32Array(this.maxParticles*3),J=new Float32Array(this.maxParticles*3),F=new Float32Array(this.maxParticles*3);for(let w=0;w<this.maxParticles;w+=1){const b=w*3,G=this.seededRandom(w)*Math.PI*2,lt=this.seededRandom(w+1e3),it=2.4+Math.pow(lt,.35)*4.2,ht=-1.2+this.seededRandom(w+2e3)*8.5;x[b]=Math.cos(G)*it,x[b+1]=ht+2,x[b+2]=Math.sin(G)*it,R[b]=x[b],R[b+1]=x[b+1],R[b+2]=x[b+2];const ct=this.seededRandom(w+3e3);O[b]=ct<.5?1:0,O[b+1]=ct>=.5?1:0,O[b+2]=0,z[w]=.28+this.seededRandom(w+4e3)*.8,D[w]=this.seededRandom(w+5e4)*Math.PI*2,J[b]=this.seededRandom(w+6e3)*100,J[b+1]=this.seededRandom(w+7e3)*100,J[b+2]=this.seededRandom(w+8e3)*100,F[b]=0,F[b+1]=0,F[b+2]=0}const L=new na;L.setAttribute("position",new dn(R,3)),L.setAttribute("basePosition",new dn(x,3)),L.setAttribute("color",new dn(S,3)),L.setAttribute("size",new dn(z,1)),L.setAttribute("phase",new dn(D,1)),L.setAttribute("colorZone",new dn(O,3)),L.setAttribute("noiseOffset",new dn(J,3)),L.setAttribute("velocity",new dn(F,3));const Q=new ea({uniforms:{time:{value:0},power:{value:this.power},pointTexture:{value:this.createMistTexture()}},vertexShader:`
            attribute float size;
            attribute float phase;
            attribute vec3 colorZone;
            attribute vec3 noiseOffset;
            attribute vec3 basePosition;
            attribute vec3 velocity;

            uniform float time;
            uniform float power;

            varying vec3 vColor;
            varying float vAlpha;

            float hash(vec3 p) {
              p = fract(p * vec3(443.897, 441.423, 437.195));
              p += dot(p, p.yzx + 19.19);
              return fract((p.x + p.y) * p.z);
            }

            float noise(vec3 p) {
              vec3 i = floor(p);
              vec3 f = fract(p);
              f = f * f * (3.0 - 2.0 * f);

              return mix(
                mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
                    mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                    mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
                f.z
              );
            }

            vec3 curlNoise(vec3 p) {
              float eps = 0.1;
              float n1 = noise(p + vec3(0, eps, 0));
              float n2 = noise(p + vec3(0, -eps, 0));
              float n3 = noise(p + vec3(eps, 0, 0));
              float n4 = noise(p + vec3(-eps, 0, 0));
              float n5 = noise(p + vec3(0, 0, eps));
              float n6 = noise(p + vec3(0, 0, -eps));

              return vec3(
                (n1 - n2) - (n5 - n6),
                (n5 - n6) - (n3 - n4),
                (n3 - n4) - (n1 - n2)
              ) / (2.0 * eps);
            }

            void main() {
              float cappedPower = min(max(power, 0.0), 16000.0);
              float raw = cappedPower / 10000.0;

              float motionIntensity = pow(raw, 0.8);
              motionIntensity = min(motionIntensity, 10.0);

              float turbulence = 0.6 + motionIntensity * 1.2;

              float lowRamp = smoothstep(0.0, 10000.0, cappedPower);
              float highRamp = smoothstep(10000.0, 16000.0, cappedPower);
              float brightnessIntensity = (power < 10000.0)
                ? mix(0.55, 0.85, lowRamp)
                : mix(0.85, 0.95, highRamp);

              float pulse = 0.8 + 0.2 * sin(time * 1.5 + phase);

              vec3 noisePos = position * 0.4 + noiseOffset * 0.01 + time * 0.4;
              vec3 curl = curlNoise(noisePos) * turbulence;

              float colorShiftSpeed = 0.3;
              float colorNoise = noise(position * 0.5 + time * colorShiftSpeed);

              vec3 yellow = vec3(1.0, 0.9, 0.0);
              vec3 blue = vec3(0.2, 0.4, 1.0);
              vec3 red = vec3(1.0, 0.1, 0.0);

              float pY = smoothstep(0.0, 10000.0, power);
              float pYB = smoothstep(10000.0, 20000.0, power);
              float pBR = smoothstep(20000.0, 40000.0, power);

              vec3 primary = mix(yellow * 0.7, yellow, pY);
              primary = mix(primary, blue, pYB);
              primary = mix(primary, red, pBR);

              float dist0 = length(position.xz);
              float edge = smoothstep(2.2, 4.6, dist0);

              float edgeN1 = noise(position * 1.2 + time * 0.55 + vec3(13.1, 7.3, 5.9));
              float edgeN2 = noise(position * 1.0 + time * 0.62 + vec3(3.7, 11.9, 2.1));

              float yellowEdgeRamp = mix(1.0, 0.65, pBR);
              float blueEdgeRamp = smoothstep(30000.0, 45000.0, power);

              float yWisp = smoothstep(0.35, 0.85, edgeN1);
              float bWisp = smoothstep(0.35, 0.85, edgeN2);

              vec3 edgeAccents = vec3(0.0);
              edgeAccents += yellow * (edge * yellowEdgeRamp) * (0.35 + 0.65 * yWisp);
              edgeAccents += blue   * (edge * blueEdgeRamp)   * (0.35 + 0.65 * bWisp);

              float core = 1.0 - edge;
              float subtleMix = 0.08;
              edgeAccents += yellow * core * (1.0 - pYB) * subtleMix;
              edgeAccents += blue   * core * (pYB)       * subtleMix;

              vColor = primary + edgeAccents;

              float m = max(vColor.r, max(vColor.g, vColor.b));
              vColor = vColor / (1.0 + m * 0.75);

              float brightness = pulse * brightnessIntensity;
              vColor *= brightness;

              vec3 flow = curl;
              flow.y += 0.8 * motionIntensity;

              vec3 advectedPos = position + flow * 0.08;

              float distFromCenter = length(advectedPos.xz);
              float heightFade = smoothstep(-3.0, 9.0, advectedPos.y) * smoothstep(10.5, 6.5, advectedPos.y);
              vAlpha = smoothstep(6.2, 1.6, distFromCenter) * pulse * heightFade * 0.55;

              vec4 mvPosition = modelViewMatrix * vec4(advectedPos, 1.0);
              gl_PointSize = size * 280.0 * motionIntensity / -mvPosition.z;
              gl_Position = projectionMatrix * mvPosition;
            }
          `,fragmentShader:`
            uniform sampler2D pointTexture;
            varying vec3 vColor;
            varying float vAlpha;

            void main() {
              vec4 texColor = texture2D(pointTexture, gl_PointCoord);
              if (texColor.a < 0.18) discard;
              vec3 glow = vColor * texColor.rgb * 1.3;
              float alpha = pow(texColor.a, 0.75) * vAlpha * 0.7;
              gl_FragColor = vec4(glow, alpha);
            }
          `,blending:Ah,depthWrite:!1,transparent:!0});this.points=new gb(L,Q),this.geometry=L,this.material=Q}seededRandom(A){const R=Math.sin(A+this.seed)*1e4;return R-Math.floor(R)}createMistTexture(){const A=document.createElement("canvas");A.width=128,A.height=128;const R=A.getContext("2d"),x=R.createRadialGradient(64,64,0,64,64,64);return x.addColorStop(0,"rgba(255, 255, 255, 1)"),x.addColorStop(.15,"rgba(255, 255, 255, 1)"),x.addColorStop(.35,"rgba(255, 255, 255, 1)"),x.addColorStop(.6,"rgba(255, 255, 255, 1)"),x.addColorStop(1,"rgba(255, 255, 255, 0)"),R.fillStyle=x,R.fillRect(0,0,128,128),new _b(A)}setPower(A){this.power=A,this.material.uniforms.power.value=A;const R=Math.min(this.maxParticles,Math.floor(3e3+A/1e4*1e4));this.geometry.setDrawRange(0,R)}update(A){this.time+=A,this.material.uniforms.time.value=this.time}}const m=new d;m.setPower(r.current);const p=new No;p.position.y=-5,p.add(m.points),l.add(p);const _=new vb,v=()=>{requestAnimationFrame(v);const M=_.getDelta();m.setPower(r.current),m.update(M),h.render(l,c)};v();const y=()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",y),i.current.setPower=M=>{m.setPower(M)},()=>{window.removeEventListener("resize",y),h.dispose(),i.current?.removeChild(h.domElement)}},[e]),Oe.useEffect(()=>{i.current?.setPower&&i.current.setPower(r.current)},[o]),Ze.jsx("div",{className:"aura-canvas",ref:i})}function Ab(){const[o,e]=Oe.useState(!0),i=Oe.useCallback(()=>{e(!1)},[]),[r,l]=Oe.useState(!1),[c,h]=Oe.useState(String(Uo)),[d,m]=Oe.useState(Uo),[p,_]=Oe.useState(Uo),v=Oe.useRef(Uo),[y,M]=Oe.useState(""),A="./",[R,x]=Oe.useState(()=>`${A}${f0(l0(Uo)*100).src}`),[S,z]=Oe.useState(null),[D,O]=Oe.useState(!1),J=Oe.useRef(null),[F,L]=Oe.useState(!1),Q=Oe.useRef(!1),w=Oe.useMemo(()=>{const V=l0(Math.max(0,d));return Number.isNaN(V)?0:Math.max(0,Math.min(1,V))},[d]),b=w*100,G=yb(b,!1),lt=Mb(w),it=Eb(w),ht=Math.max(d,0),ct=.2;Oe.useEffect(()=>{J.current&&(cancelAnimationFrame(J.current),J.current=null);const V=v.current,vt=p;if(V===vt)return;const Et=xb,U=performance.now(),tt=St=>{const Y=St-U,ot=Math.min(Y/Et,1),yt=1-Math.pow(1-ot,3),Mt=Math.max(0,V+(vt-V)*yt);v.current=Mt,m(Mt),ot<1&&(J.current=requestAnimationFrame(tt))};return J.current=requestAnimationFrame(tt),()=>{J.current&&cancelAnimationFrame(J.current),J.current=null}},[p]),Oe.useEffect(()=>{const V=f0(b),vt=`${A}${V.src}`;if(vt===R)return;z(R),x(vt),O(!0);const Et=setTimeout(()=>{O(!1),z(null)},600);return()=>clearTimeout(Et)},[R,b,A]);const P=V=>{const vt=V.target.value;if(h(vt),!vt){M("");return}/^\d+$/.test(vt)?M(""):M("Score must be a non-negative integer.")},k=()=>{const V=c.trim();if(!V){M("Enter a score to calculate.");return}if(!/^\d+$/.test(V)){M("Score must be a non-negative integer.");return}Q.current||(Q.current=!0,L(!0)),_(Math.min(Number(V),Sb)),M(""),l(!1)};return Ze.jsxs("div",{className:"page",children:[Ze.jsx("div",{className:"aura-layer","aria-hidden":"true",children:o?Ze.jsx(Tb,{power:ht,onWebglFail:i}):Ze.jsx("div",{className:"aura-fallback"})}),Ze.jsxs("main",{className:"content",children:[Ze.jsx("div",{className:`hero-banner ${F?"is-hidden":""}`,children:"To begin click the percentage below and enter you're graphics card's 3d bench score"}),Ze.jsxs("div",{className:"output score-layer",style:{background:`rgba(0, 0, 0, ${ct})`},children:[r?Ze.jsx("input",{className:"score-inline",type:"text",inputMode:"numeric",pattern:"[0-9]*",value:c,onChange:P,onBlur:k,onKeyDown:V=>{V.key==="Enter"&&(V.preventDefault(),k()),V.key==="Escape"&&(l(!1),M(""),h(String(d)))},"aria-label":"3DMark score",autoFocus:!0}):Ze.jsxs("button",{type:"button",className:"output-value output-button",onClick:()=>l(!0),children:[u0(G),"%"]}),Ze.jsx("p",{className:"output-tag",children:lt}),Ze.jsx("p",{className:"playful-message",children:it}),y?Ze.jsx("p",{className:"error",children:y}):null,Ze.jsxs("p",{className:"calibration",children:["Your computer is as good or better than ",u0(b),"% of steam players"]})]}),!o&&Ze.jsx("div",{className:"toggle-note",children:"WebGL unavailable"})]}),Ze.jsx("section",{className:"card gpu-layer",children:Ze.jsxs("div",{className:`card-art ${D?"is-fading":""}`,children:[S?Ze.jsx("img",{className:"card-img prev",src:S,alt:"Previous GPU card art"}):null,Ze.jsx("img",{className:"card-img current",src:R,alt:"GPU card art"}),Ze.jsx("div",{className:"card-glow","aria-hidden":"true"})]})})]})}rx.createRoot(document.getElementById("root")).render(Ze.jsx(Oe.StrictMode,{children:Ze.jsx(Ab,{})}));
