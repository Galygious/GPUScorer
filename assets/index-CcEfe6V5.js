(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var kf={exports:{}},Eo={};var t_;function jS(){if(t_)return Eo;t_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Eo.Fragment=e,Eo.jsx=i,Eo.jsxs=i,Eo}var e_;function KS(){return e_||(e_=1,kf.exports=jS()),kf.exports}var an=KS(),Wf={exports:{}},te={};var n_;function QS(){if(n_)return te;n_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function M(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function S(U,nt,St){this.props=U,this.context=nt,this.refs=y,this.updater=St||A}S.prototype.isReactComponent={},S.prototype.setState=function(U,nt){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,nt,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function z(){}z.prototype=S.prototype;function D(U,nt,St){this.props=U,this.context=nt,this.refs=y,this.updater=St||A}var N=D.prototype=new z;N.constructor=D,b(N,S.prototype),N.isPureReactComponent=!0;var $=Array.isArray;function I(){}var O={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function w(U,nt,St){var q=St.ref;return{$$typeof:o,type:U,key:nt,ref:q!==void 0?q:null,props:St}}function C(U,nt){return w(U.type,nt,U.props)}function G(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function lt(U){var nt={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(St){return nt[St]})}var st=/\/+/g;function mt(U,nt){return typeof U=="object"&&U!==null&&U.key!=null?lt(""+U.key):nt.toString(36)}function ft(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(I,I):(U.status="pending",U.then(function(nt){U.status==="pending"&&(U.status="fulfilled",U.value=nt)},function(nt){U.status==="pending"&&(U.status="rejected",U.reason=nt)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function P(U,nt,St,q,ot){var xt=typeof U;(xt==="undefined"||xt==="boolean")&&(U=null);var Mt=!1;if(U===null)Mt=!0;else switch(xt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(U.$$typeof){case o:case e:Mt=!0;break;case _:return Mt=U._init,P(Mt(U._payload),nt,St,q,ot)}}if(Mt)return ot=ot(U),Mt=q===""?"."+mt(U,0):q,$(ot)?(St="",Mt!=null&&(St=Mt.replace(st,"$&/")+"/"),P(ot,nt,St,"",function(ee){return ee})):ot!=null&&(G(ot)&&(ot=C(ot,St+(ot.key==null||U&&U.key===ot.key?"":(""+ot.key).replace(st,"$&/")+"/")+Mt)),nt.push(ot)),1;Mt=0;var Ft=q===""?".":q+":";if($(U))for(var It=0;It<U.length;It++)q=U[It],xt=Ft+mt(q,It),Mt+=P(q,nt,St,xt,ot);else if(It=M(U),typeof It=="function")for(U=It.call(U),It=0;!(q=U.next()).done;)q=q.value,xt=Ft+mt(q,It++),Mt+=P(q,nt,St,xt,ot);else if(xt==="object"){if(typeof U.then=="function")return P(ft(U),nt,St,q,ot);throw nt=String(U),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function W(U,nt,St){if(U==null)return U;var q=[],ot=0;return P(U,q,"","",function(xt){return nt.call(St,xt,ot++)}),q}function j(U){if(U._status===-1){var nt=U._result;nt=nt(),nt.then(function(St){(U._status===0||U._status===-1)&&(U._status=1,U._result=St)},function(St){(U._status===0||U._status===-1)&&(U._status=2,U._result=St)}),U._status===-1&&(U._status=0,U._result=nt)}if(U._status===1)return U._result.default;throw U._result}var yt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Et={map:W,forEach:function(U,nt,St){W(U,function(){nt.apply(this,arguments)},St)},count:function(U){var nt=0;return W(U,function(){nt++}),nt},toArray:function(U){return W(U,function(nt){return nt})||[]},only:function(U){if(!G(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return te.Activity=v,te.Children=Et,te.Component=S,te.Fragment=i,te.Profiler=l,te.PureComponent=D,te.StrictMode=r,te.Suspense=m,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,te.__COMPILER_RUNTIME={__proto__:null,c:function(U){return O.H.useMemoCache(U)}},te.cache=function(U){return function(){return U.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(U,nt,St){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var q=b({},U.props),ot=U.key;if(nt!=null)for(xt in nt.key!==void 0&&(ot=""+nt.key),nt)!Z.call(nt,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&nt.ref===void 0||(q[xt]=nt[xt]);var xt=arguments.length-2;if(xt===1)q.children=St;else if(1<xt){for(var Mt=Array(xt),Ft=0;Ft<xt;Ft++)Mt[Ft]=arguments[Ft+2];q.children=Mt}return w(U.type,ot,q)},te.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},te.createElement=function(U,nt,St){var q,ot={},xt=null;if(nt!=null)for(q in nt.key!==void 0&&(xt=""+nt.key),nt)Z.call(nt,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(ot[q]=nt[q]);var Mt=arguments.length-2;if(Mt===1)ot.children=St;else if(1<Mt){for(var Ft=Array(Mt),It=0;It<Mt;It++)Ft[It]=arguments[It+2];ot.children=Ft}if(U&&U.defaultProps)for(q in Mt=U.defaultProps,Mt)ot[q]===void 0&&(ot[q]=Mt[q]);return w(U,xt,ot)},te.createRef=function(){return{current:null}},te.forwardRef=function(U){return{$$typeof:d,render:U}},te.isValidElement=G,te.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:j}},te.memo=function(U,nt){return{$$typeof:p,type:U,compare:nt===void 0?null:nt}},te.startTransition=function(U){var nt=O.T,St={};O.T=St;try{var q=U(),ot=O.S;ot!==null&&ot(St,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(I,yt)}catch(xt){yt(xt)}finally{nt!==null&&St.types!==null&&(nt.types=St.types),O.T=nt}},te.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},te.use=function(U){return O.H.use(U)},te.useActionState=function(U,nt,St){return O.H.useActionState(U,nt,St)},te.useCallback=function(U,nt){return O.H.useCallback(U,nt)},te.useContext=function(U){return O.H.useContext(U)},te.useDebugValue=function(){},te.useDeferredValue=function(U,nt){return O.H.useDeferredValue(U,nt)},te.useEffect=function(U,nt){return O.H.useEffect(U,nt)},te.useEffectEvent=function(U){return O.H.useEffectEvent(U)},te.useId=function(){return O.H.useId()},te.useImperativeHandle=function(U,nt,St){return O.H.useImperativeHandle(U,nt,St)},te.useInsertionEffect=function(U,nt){return O.H.useInsertionEffect(U,nt)},te.useLayoutEffect=function(U,nt){return O.H.useLayoutEffect(U,nt)},te.useMemo=function(U,nt){return O.H.useMemo(U,nt)},te.useOptimistic=function(U,nt){return O.H.useOptimistic(U,nt)},te.useReducer=function(U,nt,St){return O.H.useReducer(U,nt,St)},te.useRef=function(U){return O.H.useRef(U)},te.useState=function(U){return O.H.useState(U)},te.useSyncExternalStore=function(U,nt,St){return O.H.useSyncExternalStore(U,nt,St)},te.useTransition=function(){return O.H.useTransition()},te.version="19.2.3",te}var i_;function od(){return i_||(i_=1,Wf.exports=QS()),Wf.exports}var Ke=od(),qf={exports:{}},To={},Yf={exports:{}},Zf={};var a_;function JS(){return a_||(a_=1,(function(o){function e(P,W){var j=P.length;P.push(W);t:for(;0<j;){var yt=j-1>>>1,Et=P[yt];if(0<l(Et,W))P[yt]=W,P[j]=Et,j=yt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var W=P[0],j=P.pop();if(j!==W){P[0]=j;t:for(var yt=0,Et=P.length,U=Et>>>1;yt<U;){var nt=2*(yt+1)-1,St=P[nt],q=nt+1,ot=P[q];if(0>l(St,j))q<Et&&0>l(ot,St)?(P[yt]=ot,P[q]=j,yt=q):(P[yt]=St,P[nt]=j,yt=nt);else if(q<Et&&0>l(ot,j))P[yt]=ot,P[q]=j,yt=q;else break t}}return W}function l(P,W){var j=P.sortIndex-W.sortIndex;return j!==0?j:P.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,v=null,x=3,M=!1,A=!1,b=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function N(P){for(var W=i(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=P)r(p),W.sortIndex=W.expirationTime,e(m,W);else break;W=i(p)}}function $(P){if(b=!1,N(P),!A)if(i(m)!==null)A=!0,I||(I=!0,lt());else{var W=i(p);W!==null&&ft($,W.startTime-P)}}var I=!1,O=-1,Z=5,w=-1;function C(){return y?!0:!(o.unstable_now()-w<Z)}function G(){if(y=!1,I){var P=o.unstable_now();w=P;var W=!0;try{t:{A=!1,b&&(b=!1,z(O),O=-1),M=!0;var j=x;try{e:{for(N(P),v=i(m);v!==null&&!(v.expirationTime>P&&C());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,x=v.priorityLevel;var Et=yt(v.expirationTime<=P);if(P=o.unstable_now(),typeof Et=="function"){v.callback=Et,N(P),W=!0;break e}v===i(m)&&r(m),N(P)}else r(m);v=i(m)}if(v!==null)W=!0;else{var U=i(p);U!==null&&ft($,U.startTime-P),W=!1}}break t}finally{v=null,x=j,M=!1}W=void 0}}finally{W?lt():I=!1}}}var lt;if(typeof D=="function")lt=function(){D(G)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,mt=st.port2;st.port1.onmessage=G,lt=function(){mt.postMessage(null)}}else lt=function(){S(G,0)};function ft(P,W){O=S(function(){P(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(P){switch(x){case 1:case 2:case 3:var W=3;break;default:W=x}var j=x;x=W;try{return P()}finally{x=j}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(P,W){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=x;x=P;try{return W()}finally{x=j}},o.unstable_scheduleCallback=function(P,W,j){var yt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?yt+j:yt):j=yt,P){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=j+Et,P={id:_++,callback:W,priorityLevel:P,startTime:j,expirationTime:Et,sortIndex:-1},j>yt?(P.sortIndex=j,e(p,P),i(m)===null&&P===i(p)&&(b?(z(O),O=-1):b=!0,ft($,j-yt))):(P.sortIndex=Et,e(m,P),A||M||(A=!0,I||(I=!0,lt()))),P},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(P){var W=x;return function(){var j=x;x=W;try{return P.apply(this,arguments)}finally{x=j}}}})(Zf)),Zf}var r_;function $S(){return r_||(r_=1,Yf.exports=JS()),Yf.exports}var jf={exports:{}},Tn={};var s_;function tx(){if(s_)return Tn;s_=1;var o=od();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Tn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},Tn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Tn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Tn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Tn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Tn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Tn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Tn.requestFormReset=function(m){r.d.r(m)},Tn.unstable_batchedUpdates=function(m,p){return m(p)},Tn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.2.3",Tn}var o_;function ex(){if(o_)return jf.exports;o_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),jf.exports=tx(),jf.exports}var l_;function nx(){if(l_)return To;l_=1;var o=$S(),e=od(),i=ex();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var g=!1,E=u.child;E;){if(E===a){g=!0,a=u,s=f;break}if(E===s){g=!0,s=u,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,s=u;break}if(E===s){g=!0,s=f,a=u;break}E=E.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),D=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var st=Symbol.for("react.client.reference");function mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===st?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case $:return"Suspense";case I:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case D:return t.displayName||"Context";case z:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:mt(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return mt(t(n))}catch{}}return null}var ft=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},yt=[],Et=-1;function U(t){return{current:t}}function nt(t){0>Et||(t.current=yt[Et],yt[Et]=null,Et--)}function St(t,n){Et++,yt[Et]=t.current,t.current=n}var q=U(null),ot=U(null),xt=U(null),Mt=U(null);function Ft(t,n){switch(St(xt,n),St(ot,t),St(q,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Eg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Eg(n),t=Tg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}nt(q),St(q,t)}function It(){nt(q),nt(ot),nt(xt)}function ee(t){t.memoizedState!==null&&St(Mt,t);var n=q.current,a=Tg(n,t.type);n!==a&&(St(ot,t),St(q,a))}function Le(t){ot.current===t&&(nt(q),nt(ot)),Mt.current===t&&(nt(Mt),So._currentValue=j)}var F,Ve;function ue(t){if(F===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);F=n&&n[1]||"",Ve=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+F+t+Ve}var Se=!1;function Vt(t,n){if(!t||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var dt=function(){throw Error()};if(Object.defineProperty(dt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(dt,[])}catch(rt){var J=rt}Reflect.construct(t,[],dt)}else{try{dt.call()}catch(rt){J=rt}t.call(dt.prototype)}}else{try{throw Error()}catch(rt){J=rt}(dt=t())&&typeof dt.catch=="function"&&dt.catch(function(){})}}catch(rt){if(rt&&J&&typeof rt.stack=="string")return[rt.stack,J.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],E=f[1];if(g&&E){var B=g.split(`
`),Q=E.split(`
`);for(u=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(s===B.length||u===Q.length)for(s=B.length-1,u=Q.length-1;1<=s&&0<=u&&B[s]!==Q[u];)u--;for(;1<=s&&0<=u;s--,u--)if(B[s]!==Q[u]){if(s!==1||u!==1)do if(s--,u--,0>u||B[s]!==Q[u]){var ut=`
`+B[s].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=s&&0<=u);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ue(a):""}function Xe(t,n){switch(t.tag){case 26:case 27:case 5:return ue(t.type);case 16:return ue("Lazy");case 13:return t.child!==n&&n!==null?ue("Suspense Fallback"):ue("Suspense");case 19:return ue("SuspenseList");case 0:case 15:return Vt(t.type,!1);case 11:return Vt(t.type.render,!1);case 1:return Vt(t.type,!0);case 31:return ue("Activity");default:return""}}function Jt(t){try{var n="",a=null;do n+=Xe(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var $t=Object.prototype.hasOwnProperty,L=o.unstable_scheduleCallback,T=o.unstable_cancelCallback,at=o.unstable_shouldYield,_t=o.unstable_requestPaint,pt=o.unstable_now,vt=o.unstable_getCurrentPriorityLevel,qt=o.unstable_ImmediatePriority,Dt=o.unstable_UserBlockingPriority,Lt=o.unstable_NormalPriority,ne=o.unstable_LowPriority,At=o.unstable_IdlePriority,Ot=o.log,he=o.unstable_setDisableYieldValue,jt=null,Ct=null;function Yt(t){if(typeof Ot=="function"&&he(t),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(jt,t)}catch{}}var Zt=Math.clz32?Math.clz32:bt,Pe=Math.log,V=Math.LN2;function bt(t){return t>>>=0,t===0?32:31-(Pe(t)/V|0)|0}var ht=256,gt=262144,Rt=4194304;function kt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function oe(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?u=kt(s):(g&=E,g!==0?u=kt(g):a||(a=E&~t,a!==0&&(u=kt(a))))):(E=s&~f,E!==0?u=kt(E):g!==0?u=kt(g):a||(a=s&~t,a!==0&&(u=kt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Oe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function sn(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _e(){var t=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),t}function Gn(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Sn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ho(t,n,a,s,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,B=t.expirationTimes,Q=t.hiddenUpdates;for(a=g&~a;0<a;){var ut=31-Zt(a),dt=1<<ut;E[ut]=0,B[ut]=-1;var J=Q[ut];if(J!==null)for(Q[ut]=null,ut=0;ut<J.length;ut++){var rt=J[ut];rt!==null&&(rt.lane&=-536870913)}a&=~dt}s!==0&&Si(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Si(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Zt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function xr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Zt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function ws(t,n){var a=n&-n;return a=(a&42)!==0?1:yr(a),(a&(t.suspendedLanes|n))!==0?0:a}function yr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function aa(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ds(){var t=W.p;return t!==0?t:(t=window.event,t===void 0?32:Yg(t.type))}function Ga(t,n){var a=W.p;try{return W.p=t,n()}finally{W.p=a}}var ui=Math.random().toString(36).slice(2),Qe="__reactFiber$"+ui,xn="__reactProps$"+ui,ra="__reactContainer$"+ui,Us="__reactEvents$"+ui,R="__reactListeners$"+ui,X="__reactHandles$"+ui,tt="__reactResources$"+ui,et="__reactMarker$"+ui;function Y(t){delete t[Qe],delete t[xn],delete t[Us],delete t[R],delete t[X]}function Tt(t){var n=t[Qe];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ra]||a[Qe]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Ug(t);t!==null;){if(a=t[Qe])return a;t=Ug(t)}return n}t=a,a=t.parentNode}return null}function wt(t){if(t=t[Qe]||t[ra]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Pt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Nt(t){var n=t[tt];return n||(n=t[tt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function zt(t){t[et]=!0}var Qt=new Set,Gt={};function le(t,n){be(t,n),be(t+"Capture",n)}function be(t,n){for(Gt[t]=n,t=0;t<n.length;t++)Qt.add(n[t])}var Fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yn={},ve={};function Xt(t){return $t.call(ve,t)?!0:$t.call(yn,t)?!1:Fe.test(t)?ve[t]=!0:(yn[t]=!0,!1)}function ke(t,n,a){if(Xt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function me(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ye(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function on(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mn(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ls(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function He(t){if(!t._valueTracker){var n=Mn(t)?"checked":"value";t._valueTracker=Ls(t,n,""+t[n])}}function ci(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Mn(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function sa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dn=/[\n"\\]/g;function En(t){return t.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ns(t,n,a,s,u,f,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+on(n)):t.value!==""+on(n)&&(t.value=""+on(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?Iu(t,g,on(n)):a!=null?Iu(t,g,on(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+on(E):t.removeAttribute("name")}function Os(t,n,a,s,u,f,g,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){He(t);return}a=a!=null?""+on(a):"",n=n!=null?""+on(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),He(t)}function Iu(t,n,a){n==="number"&&sa(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Mr(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+on(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function vd(t,n,a){if(n!=null&&(n=""+on(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+on(a):""}function Sd(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=on(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),He(t)}function Er(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var k0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||k0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function yd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&xd(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&xd(t,f,n[f])}function Fu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var W0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),q0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(t){return q0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ri(){}var Hu=null;function Gu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tr=null,Ar=null;function Md(t){var n=wt(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ns(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+En(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[xn]||null;if(!u)throw Error(r(90));Ns(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&ci(s)}break t;case"textarea":vd(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Mr(t,!!a.multiple,n,!1)}}}var Vu=!1;function Ed(t,n,a){if(Vu)return t(n,a);Vu=!0;try{var s=t(n);return s}finally{if(Vu=!1,(Tr!==null||Ar!==null)&&(Cl(),Tr&&(n=Tr,t=Ar,Ar=Tr=null,Md(n),t)))for(n=0;n<t.length;n++)Md(t[n])}}function Ps(t,n){var a=t.stateNode;if(a===null)return null;var s=a[xn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xu=!1;if(Ci)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Xu=!1}var oa=null,ku=null,Vo=null;function Td(){if(Vo)return Vo;var t,n=ku,a=n.length,s,u="value"in oa?oa.value:oa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===u[f-s];s++);return Vo=u.slice(t,1<s?1-s:void 0)}function Xo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ko(){return!0}function Ad(){return!1}function Un(t){function n(a,s,u,f,g){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ko:Ad,this.isPropagationStopped=Ad,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),n}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=Un(Va),Bs=v({},Va,{view:0,detail:0}),Y0=Un(Bs),Wu,qu,Is,qo=v({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(Wu=t.screenX-Is.screenX,qu=t.screenY-Is.screenY):qu=Wu=0,Is=t),Wu)},movementY:function(t){return"movementY"in t?t.movementY:qu}}),bd=Un(qo),Z0=v({},qo,{dataTransfer:0}),j0=Un(Z0),K0=v({},Bs,{relatedTarget:0}),Yu=Un(K0),Q0=v({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),J0=Un(Q0),$0=v({},Va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tv=Un($0),ev=v({},Va,{data:0}),Rd=Un(ev),nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=av[t])?!!n[t]:!1}function Zu(){return rv}var sv=v({},Bs,{key:function(t){if(t.key){var n=nv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zu,charCode:function(t){return t.type==="keypress"?Xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ov=Un(sv),lv=v({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=Un(lv),uv=v({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zu}),cv=Un(uv),fv=v({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),hv=Un(fv),dv=v({},qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pv=Un(dv),mv=v({},Va,{newState:0,oldState:0}),gv=Un(mv),_v=[9,13,27,32],ju=Ci&&"CompositionEvent"in window,Fs=null;Ci&&"documentMode"in document&&(Fs=document.documentMode);var vv=Ci&&"TextEvent"in window&&!Fs,wd=Ci&&(!ju||Fs&&8<Fs&&11>=Fs),Dd=" ",Ud=!1;function Ld(t,n){switch(t){case"keyup":return _v.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var br=!1;function Sv(t,n){switch(t){case"compositionend":return Nd(n);case"keypress":return n.which!==32?null:(Ud=!0,Dd);case"textInput":return t=n.data,t===Dd&&Ud?null:t;default:return null}}function xv(t,n){if(br)return t==="compositionend"||!ju&&Ld(t,n)?(t=Td(),Vo=ku=oa=null,br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wd&&n.locale!=="ko"?null:n.data;default:return null}}var yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!yv[t.type]:n==="textarea"}function Pd(t,n,a,s){Tr?Ar?Ar.push(s):Ar=[s]:Tr=s,n=Pl(n,"onChange"),0<n.length&&(a=new Wo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Hs=null,Gs=null;function Mv(t){_g(t,0)}function Yo(t){var n=Pt(t);if(ci(n))return t}function zd(t,n){if(t==="change")return n}var Bd=!1;if(Ci){var Ku;if(Ci){var Qu="oninput"in document;if(!Qu){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),Qu=typeof Id.oninput=="function"}Ku=Qu}else Ku=!1;Bd=Ku&&(!document.documentMode||9<document.documentMode)}function Fd(){Hs&&(Hs.detachEvent("onpropertychange",Hd),Gs=Hs=null)}function Hd(t){if(t.propertyName==="value"&&Yo(Gs)){var n=[];Pd(n,Gs,t,Gu(t)),Ed(Mv,n)}}function Ev(t,n,a){t==="focusin"?(Fd(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",Hd)):t==="focusout"&&Fd()}function Tv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yo(Gs)}function Av(t,n){if(t==="click")return Yo(n)}function bv(t,n){if(t==="input"||t==="change")return Yo(n)}function Rv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Vn=typeof Object.is=="function"?Object.is:Rv;function Vs(t,n){if(Vn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!$t.call(n,u)||!Vn(t[u],n[u]))return!1}return!0}function Gd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vd(t,n){var a=Gd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Gd(a)}}function Xd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Xd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function kd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=sa(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=sa(t.document)}return n}function Ju(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Cv=Ci&&"documentMode"in document&&11>=document.documentMode,Rr=null,$u=null,Xs=null,tc=!1;function Wd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tc||Rr==null||Rr!==sa(s)||(s=Rr,"selectionStart"in s&&Ju(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Xs&&Vs(Xs,s)||(Xs=s,s=Pl($u,"onSelect"),0<s.length&&(n=new Wo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Rr)))}function Xa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Cr={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},ec={},qd={};Ci&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function ka(t){if(ec[t])return ec[t];if(!Cr[t])return t;var n=Cr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in qd)return ec[t]=n[a];return t}var Yd=ka("animationend"),Zd=ka("animationiteration"),jd=ka("animationstart"),wv=ka("transitionrun"),Dv=ka("transitionstart"),Uv=ka("transitioncancel"),Kd=ka("transitionend"),Qd=new Map,nc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nc.push("scrollEnd");function fi(t,n){Qd.set(t,n),le(n,[t])}var Zo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Jn=[],wr=0,ic=0;function jo(){for(var t=wr,n=ic=wr=0;n<t;){var a=Jn[n];Jn[n++]=null;var s=Jn[n];Jn[n++]=null;var u=Jn[n];Jn[n++]=null;var f=Jn[n];if(Jn[n++]=null,s!==null&&u!==null){var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}f!==0&&Jd(a,u,f)}}function Ko(t,n,a,s){Jn[wr++]=t,Jn[wr++]=n,Jn[wr++]=a,Jn[wr++]=s,ic|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function ac(t,n,a,s){return Ko(t,n,a,s),Qo(t)}function Wa(t,n){return Ko(t,null,null,n),Qo(t)}function Jd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Zt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Qo(t){if(50<fo)throw fo=0,pf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Dr={};function Lv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,n,a,s){return new Lv(t,n,a,s)}function rc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wi(t,n){var a=t.alternate;return a===null?(a=Xn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function $d(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Jo(t,n,a,s,u,f){var g=0;if(s=t,typeof t=="function")rc(t)&&(g=1);else if(typeof t=="string")g=BS(t,a,q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Xn(31,a,n,u),t.elementType=w,t.lanes=f,t;case b:return qa(a.children,u,f,n);case y:g=8,u|=24;break;case S:return t=Xn(12,a,n,u|2),t.elementType=S,t.lanes=f,t;case $:return t=Xn(13,a,n,u),t.elementType=$,t.lanes=f,t;case I:return t=Xn(19,a,n,u),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:g=10;break t;case z:g=9;break t;case N:g=11;break t;case O:g=14;break t;case Z:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Xn(g,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function qa(t,n,a,s){return t=Xn(7,t,s,n),t.lanes=a,t}function sc(t,n,a){return t=Xn(6,t,null,n),t.lanes=a,t}function tp(t){var n=Xn(18,null,null,0);return n.stateNode=t,n}function oc(t,n,a){return n=Xn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ep=new WeakMap;function $n(t,n){if(typeof t=="object"&&t!==null){var a=ep.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Jt(n)},ep.set(t,n),n)}return{value:t,source:n,stack:Jt(n)}}var Ur=[],Lr=0,$o=null,ks=0,ti=[],ei=0,la=null,xi=1,yi="";function Di(t,n){Ur[Lr++]=ks,Ur[Lr++]=$o,$o=t,ks=n}function np(t,n,a){ti[ei++]=xi,ti[ei++]=yi,ti[ei++]=la,la=t;var s=xi;t=yi;var u=32-Zt(s)-1;s&=~(1<<u),a+=1;var f=32-Zt(n)+u;if(30<f){var g=u-u%5;f=(s&(1<<g)-1).toString(32),s>>=g,u-=g,xi=1<<32-Zt(n)+u|a<<u|s,yi=f+t}else xi=1<<f|a<<u|s,yi=t}function lc(t){t.return!==null&&(Di(t,1),np(t,1,0))}function uc(t){for(;t===$o;)$o=Ur[--Lr],Ur[Lr]=null,ks=Ur[--Lr],Ur[Lr]=null;for(;t===la;)la=ti[--ei],ti[ei]=null,yi=ti[--ei],ti[ei]=null,xi=ti[--ei],ti[ei]=null}function ip(t,n){ti[ei++]=xi,ti[ei++]=yi,ti[ei++]=la,xi=n.id,yi=n.overflow,la=t}var mn=null,ze=null,ge=!1,ua=null,ni=!1,cc=Error(r(519));function ca(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ws($n(n,t)),cc}function ap(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Qe]=t,n[xn]=s,a){case"dialog":fe("cancel",n),fe("close",n);break;case"iframe":case"object":case"embed":fe("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)fe(po[a],n);break;case"source":fe("error",n);break;case"img":case"image":case"link":fe("error",n),fe("load",n);break;case"details":fe("toggle",n);break;case"input":fe("invalid",n),Os(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":fe("invalid",n);break;case"textarea":fe("invalid",n),Sd(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||yg(n.textContent,a)?(s.popover!=null&&(fe("beforetoggle",n),fe("toggle",n)),s.onScroll!=null&&fe("scroll",n),s.onScrollEnd!=null&&fe("scrollend",n),s.onClick!=null&&(n.onclick=Ri),n=!0):n=!1,n||ca(t,!0)}function rp(t){for(mn=t.return;mn;)switch(mn.tag){case 5:case 31:case 13:ni=!1;return;case 27:case 3:ni=!0;return;default:mn=mn.return}}function Nr(t){if(t!==mn)return!1;if(!ge)return rp(t),ge=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||wf(t.type,t.memoizedProps)),a=!a),a&&ze&&ca(t),rp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ze=Dg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ze=Dg(t)}else n===27?(n=ze,Ta(t.type)?(t=Of,Of=null,ze=t):ze=n):ze=mn?ai(t.stateNode.nextSibling):null;return!0}function Ya(){ze=mn=null,ge=!1}function fc(){var t=ua;return t!==null&&(Pn===null?Pn=t:Pn.push.apply(Pn,t),ua=null),t}function Ws(t){ua===null?ua=[t]:ua.push(t)}var hc=U(null),Za=null,Ui=null;function fa(t,n,a){St(hc,n._currentValue),n._currentValue=a}function Li(t){t._currentValue=hc.current,nt(hc)}function dc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function pc(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=u;for(var B=0;B<n.length;B++)if(E.context===n[B]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),dc(f.return,a,t),s||(g=null);break t}f=E.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),dc(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Or(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var E=u.type;Vn(u.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(u===Mt.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(So):t=[So])}u=u.return}t!==null&&pc(n,t,a,s),n.flags|=262144}function tl(t){for(t=t.firstContext;t!==null;){if(!Vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ja(t){Za=t,Ui=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function gn(t){return sp(Za,t)}function el(t,n){return Za===null&&ja(t),sp(t,n)}function sp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ui===null){if(t===null)throw Error(r(308));Ui=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ui=Ui.next=n;return a}var Nv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Ov=o.unstable_scheduleCallback,Pv=o.unstable_NormalPriority,Je={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mc(){return{controller:new Nv,data:new Map,refCount:0}}function qs(t){t.refCount--,t.refCount===0&&Ov(Pv,function(){t.controller.abort()})}var Ys=null,gc=0,Pr=0,zr=null;function zv(t,n){if(Ys===null){var a=Ys=[];gc=0,Pr=xf(),zr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return gc++,n.then(op,op),n}function op(){if(--gc===0&&Ys!==null){zr!==null&&(zr.status="fulfilled");var t=Ys;Ys=null,Pr=0,zr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Bv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var lp=P.S;P.S=function(t,n){Wm=pt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&zv(t,n),lp!==null&&lp(t,n)};var Ka=U(null);function _c(){var t=Ka.current;return t!==null?t:Ne.pooledCache}function nl(t,n){n===null?St(Ka,Ka.current):St(Ka,n.pool)}function up(){var t=_c();return t===null?null:{parent:Je._currentValue,pool:t}}var Br=Error(r(460)),vc=Error(r(474)),il=Error(r(542)),al={then:function(){}};function cp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function fp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ri,Ri),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,dp(t),t;default:if(typeof n.status=="string")n.then(Ri,Ri);else{if(t=Ne,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,dp(t),t}throw Ja=n,Br}}function Qa(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ja=a,Br):a}}var Ja=null;function hp(){if(Ja===null)throw Error(r(459));var t=Ja;return Ja=null,t}function dp(t){if(t===Br||t===il)throw Error(r(483))}var Ir=null,Zs=0;function rl(t){var n=Zs;return Zs+=1,Ir===null&&(Ir=[]),fp(Ir,t,n)}function js(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function sl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function pp(t){function n(k,H){if(t){var K=k.deletions;K===null?(k.deletions=[H],k.flags|=16):K.push(H)}}function a(k,H){if(!t)return null;for(;H!==null;)n(k,H),H=H.sibling;return null}function s(k){for(var H=new Map;k!==null;)k.key!==null?H.set(k.key,k):H.set(k.index,k),k=k.sibling;return H}function u(k,H){return k=wi(k,H),k.index=0,k.sibling=null,k}function f(k,H,K){return k.index=K,t?(K=k.alternate,K!==null?(K=K.index,K<H?(k.flags|=67108866,H):K):(k.flags|=67108866,H)):(k.flags|=1048576,H)}function g(k){return t&&k.alternate===null&&(k.flags|=67108866),k}function E(k,H,K,ct){return H===null||H.tag!==6?(H=sc(K,k.mode,ct),H.return=k,H):(H=u(H,K),H.return=k,H)}function B(k,H,K,ct){var Wt=K.type;return Wt===b?ut(k,H,K.props.children,ct,K.key):H!==null&&(H.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===Z&&Qa(Wt)===H.type)?(H=u(H,K.props),js(H,K),H.return=k,H):(H=Jo(K.type,K.key,K.props,null,k.mode,ct),js(H,K),H.return=k,H)}function Q(k,H,K,ct){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=oc(K,k.mode,ct),H.return=k,H):(H=u(H,K.children||[]),H.return=k,H)}function ut(k,H,K,ct,Wt){return H===null||H.tag!==7?(H=qa(K,k.mode,ct,Wt),H.return=k,H):(H=u(H,K),H.return=k,H)}function dt(k,H,K){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=sc(""+H,k.mode,K),H.return=k,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case M:return K=Jo(H.type,H.key,H.props,null,k.mode,K),js(K,H),K.return=k,K;case A:return H=oc(H,k.mode,K),H.return=k,H;case Z:return H=Qa(H),dt(k,H,K)}if(ft(H)||lt(H))return H=qa(H,k.mode,K,null),H.return=k,H;if(typeof H.then=="function")return dt(k,rl(H),K);if(H.$$typeof===D)return dt(k,el(k,H),K);sl(k,H)}return null}function J(k,H,K,ct){var Wt=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Wt!==null?null:E(k,H,""+K,ct);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return K.key===Wt?B(k,H,K,ct):null;case A:return K.key===Wt?Q(k,H,K,ct):null;case Z:return K=Qa(K),J(k,H,K,ct)}if(ft(K)||lt(K))return Wt!==null?null:ut(k,H,K,ct,null);if(typeof K.then=="function")return J(k,H,rl(K),ct);if(K.$$typeof===D)return J(k,H,el(k,K),ct);sl(k,K)}return null}function rt(k,H,K,ct,Wt){if(typeof ct=="string"&&ct!==""||typeof ct=="number"||typeof ct=="bigint")return k=k.get(K)||null,E(H,k,""+ct,Wt);if(typeof ct=="object"&&ct!==null){switch(ct.$$typeof){case M:return k=k.get(ct.key===null?K:ct.key)||null,B(H,k,ct,Wt);case A:return k=k.get(ct.key===null?K:ct.key)||null,Q(H,k,ct,Wt);case Z:return ct=Qa(ct),rt(k,H,K,ct,Wt)}if(ft(ct)||lt(ct))return k=k.get(K)||null,ut(H,k,ct,Wt,null);if(typeof ct.then=="function")return rt(k,H,K,rl(ct),Wt);if(ct.$$typeof===D)return rt(k,H,K,el(H,ct),Wt);sl(H,ct)}return null}function Bt(k,H,K,ct){for(var Wt=null,xe=null,Ht=H,ae=H=0,pe=null;Ht!==null&&ae<K.length;ae++){Ht.index>ae?(pe=Ht,Ht=null):pe=Ht.sibling;var ye=J(k,Ht,K[ae],ct);if(ye===null){Ht===null&&(Ht=pe);break}t&&Ht&&ye.alternate===null&&n(k,Ht),H=f(ye,H,ae),xe===null?Wt=ye:xe.sibling=ye,xe=ye,Ht=pe}if(ae===K.length)return a(k,Ht),ge&&Di(k,ae),Wt;if(Ht===null){for(;ae<K.length;ae++)Ht=dt(k,K[ae],ct),Ht!==null&&(H=f(Ht,H,ae),xe===null?Wt=Ht:xe.sibling=Ht,xe=Ht);return ge&&Di(k,ae),Wt}for(Ht=s(Ht);ae<K.length;ae++)pe=rt(Ht,k,ae,K[ae],ct),pe!==null&&(t&&pe.alternate!==null&&Ht.delete(pe.key===null?ae:pe.key),H=f(pe,H,ae),xe===null?Wt=pe:xe.sibling=pe,xe=pe);return t&&Ht.forEach(function(wa){return n(k,wa)}),ge&&Di(k,ae),Wt}function Kt(k,H,K,ct){if(K==null)throw Error(r(151));for(var Wt=null,xe=null,Ht=H,ae=H=0,pe=null,ye=K.next();Ht!==null&&!ye.done;ae++,ye=K.next()){Ht.index>ae?(pe=Ht,Ht=null):pe=Ht.sibling;var wa=J(k,Ht,ye.value,ct);if(wa===null){Ht===null&&(Ht=pe);break}t&&Ht&&wa.alternate===null&&n(k,Ht),H=f(wa,H,ae),xe===null?Wt=wa:xe.sibling=wa,xe=wa,Ht=pe}if(ye.done)return a(k,Ht),ge&&Di(k,ae),Wt;if(Ht===null){for(;!ye.done;ae++,ye=K.next())ye=dt(k,ye.value,ct),ye!==null&&(H=f(ye,H,ae),xe===null?Wt=ye:xe.sibling=ye,xe=ye);return ge&&Di(k,ae),Wt}for(Ht=s(Ht);!ye.done;ae++,ye=K.next())ye=rt(Ht,k,ae,ye.value,ct),ye!==null&&(t&&ye.alternate!==null&&Ht.delete(ye.key===null?ae:ye.key),H=f(ye,H,ae),xe===null?Wt=ye:xe.sibling=ye,xe=ye);return t&&Ht.forEach(function(ZS){return n(k,ZS)}),ge&&Di(k,ae),Wt}function Ue(k,H,K,ct){if(typeof K=="object"&&K!==null&&K.type===b&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case M:t:{for(var Wt=K.key;H!==null;){if(H.key===Wt){if(Wt=K.type,Wt===b){if(H.tag===7){a(k,H.sibling),ct=u(H,K.props.children),ct.return=k,k=ct;break t}}else if(H.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===Z&&Qa(Wt)===H.type){a(k,H.sibling),ct=u(H,K.props),js(ct,K),ct.return=k,k=ct;break t}a(k,H);break}else n(k,H);H=H.sibling}K.type===b?(ct=qa(K.props.children,k.mode,ct,K.key),ct.return=k,k=ct):(ct=Jo(K.type,K.key,K.props,null,k.mode,ct),js(ct,K),ct.return=k,k=ct)}return g(k);case A:t:{for(Wt=K.key;H!==null;){if(H.key===Wt)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){a(k,H.sibling),ct=u(H,K.children||[]),ct.return=k,k=ct;break t}else{a(k,H);break}else n(k,H);H=H.sibling}ct=oc(K,k.mode,ct),ct.return=k,k=ct}return g(k);case Z:return K=Qa(K),Ue(k,H,K,ct)}if(ft(K))return Bt(k,H,K,ct);if(lt(K)){if(Wt=lt(K),typeof Wt!="function")throw Error(r(150));return K=Wt.call(K),Kt(k,H,K,ct)}if(typeof K.then=="function")return Ue(k,H,rl(K),ct);if(K.$$typeof===D)return Ue(k,H,el(k,K),ct);sl(k,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,H!==null&&H.tag===6?(a(k,H.sibling),ct=u(H,K),ct.return=k,k=ct):(a(k,H),ct=sc(K,k.mode,ct),ct.return=k,k=ct),g(k)):a(k,H)}return function(k,H,K,ct){try{Zs=0;var Wt=Ue(k,H,K,ct);return Ir=null,Wt}catch(Ht){if(Ht===Br||Ht===il)throw Ht;var xe=Xn(29,Ht,null,k.mode);return xe.lanes=ct,xe.return=k,xe}}}var $a=pp(!0),mp=pp(!1),ha=!1;function Sc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Me&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Qo(t),Jd(t,null,a),n}return Ko(t,s,n,a),Qo(t)}function Ks(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,xr(t,a)}}function yc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Mc=!1;function Qs(){if(Mc){var t=zr;if(t!==null)throw t}}function Js(t,n,a,s){Mc=!1;var u=t.updateQueue;ha=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var B=E,Q=B.next;B.next=null,g===null?f=Q:g.next=Q,g=B;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==g&&(E===null?ut.firstBaseUpdate=Q:E.next=Q,ut.lastBaseUpdate=B))}if(f!==null){var dt=u.baseState;g=0,ut=Q=B=null,E=f;do{var J=E.lane&-536870913,rt=J!==E.lane;if(rt?(de&J)===J:(s&J)===J){J!==0&&J===Pr&&(Mc=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Bt=t,Kt=E;J=n;var Ue=a;switch(Kt.tag){case 1:if(Bt=Kt.payload,typeof Bt=="function"){dt=Bt.call(Ue,dt,J);break t}dt=Bt;break t;case 3:Bt.flags=Bt.flags&-65537|128;case 0:if(Bt=Kt.payload,J=typeof Bt=="function"?Bt.call(Ue,dt,J):Bt,J==null)break t;dt=v({},dt,J);break t;case 2:ha=!0}}J=E.callback,J!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[J]:rt.push(J))}else rt={lane:J,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?(Q=ut=rt,B=dt):ut=ut.next=rt,g|=J;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;rt=E,E=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);ut===null&&(B=dt),u.baseState=B,u.firstBaseUpdate=Q,u.lastBaseUpdate=ut,f===null&&(u.shared.lanes=0),Sa|=g,t.lanes=g,t.memoizedState=dt}}function gp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function _p(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)gp(a[t],n)}var Fr=U(null),ol=U(0);function vp(t,n){t=Gi,St(ol,t),St(Fr,n),Gi=t|n.baseLanes}function Ec(){St(ol,Gi),St(Fr,Fr.current)}function Tc(){Gi=ol.current,nt(Fr),nt(ol)}var kn=U(null),ii=null;function ma(t){var n=t.alternate;St(Ze,Ze.current&1),St(kn,t),ii===null&&(n===null||Fr.current!==null||n.memoizedState!==null)&&(ii=t)}function Ac(t){St(Ze,Ze.current),St(kn,t),ii===null&&(ii=t)}function Sp(t){t.tag===22?(St(Ze,Ze.current),St(kn,t),ii===null&&(ii=t)):ga()}function ga(){St(Ze,Ze.current),St(kn,kn.current)}function Wn(t){nt(kn),ii===t&&(ii=null),nt(Ze)}var Ze=U(0);function ll(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Lf(a)||Nf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ni=0,ie=null,we=null,$e=null,ul=!1,Hr=!1,tr=!1,cl=0,$s=0,Gr=null,Iv=0;function We(){throw Error(r(321))}function bc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Vn(t[a],n[a]))return!1;return!0}function Rc(t,n,a,s,u,f){return Ni=f,ie=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?nm:Vc,tr=!1,f=a(s,u),tr=!1,Hr&&(f=yp(n,a,s,u)),xp(t),f}function xp(t){P.H=no;var n=we!==null&&we.next!==null;if(Ni=0,$e=we=ie=null,ul=!1,$s=0,Gr=null,n)throw Error(r(300));t===null||tn||(t=t.dependencies,t!==null&&tl(t)&&(tn=!0))}function yp(t,n,a,s){ie=t;var u=0;do{if(Hr&&(Gr=null),$s=0,Hr=!1,25<=u)throw Error(r(301));if(u+=1,$e=we=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=im,f=n(a,s)}while(Hr);return f}function Fv(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?to(n):n,t=t.useState()[0],(we!==null?we.memoizedState:null)!==t&&(ie.flags|=1024),n}function Cc(){var t=cl!==0;return cl=0,t}function wc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Dc(t){if(ul){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ul=!1}Ni=0,$e=we=ie=null,Hr=!1,$s=cl=0,Gr=null}function Rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?ie.memoizedState=$e=t:$e=$e.next=t,$e}function je(){if(we===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=we.next;var n=$e===null?ie.memoizedState:$e.next;if(n!==null)$e=n,we=t;else{if(t===null)throw ie.alternate===null?Error(r(467)):Error(r(310));we=t,t={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},$e===null?ie.memoizedState=$e=t:$e=$e.next=t}return $e}function fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(t){var n=$s;return $s+=1,Gr===null&&(Gr=[]),t=fp(Gr,t,n),n=ie,($e===null?n.memoizedState:$e.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?nm:Vc),t}function hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return to(t);if(t.$$typeof===D)return gn(t)}throw Error(r(438,String(t)))}function Uc(t){var n=null,a=ie.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ie.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=fl(),ie.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function Oi(t,n){return typeof n=="function"?n(t):n}function dl(t){var n=je();return Lc(n,we,t)}function Lc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var E=g=null,B=null,Q=n,ut=!1;do{var dt=Q.lane&-536870913;if(dt!==Q.lane?(de&dt)===dt:(Ni&dt)===dt){var J=Q.revertLane;if(J===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),dt===Pr&&(ut=!0);else if((Ni&J)===J){Q=Q.next,J===Pr&&(ut=!0);continue}else dt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},B===null?(E=B=dt,g=f):B=B.next=dt,ie.lanes|=J,Sa|=J;dt=Q.action,tr&&a(f,dt),f=Q.hasEagerState?Q.eagerState:a(f,dt)}else J={lane:dt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},B===null?(E=B=J,g=f):B=B.next=J,ie.lanes|=dt,Sa|=dt;Q=Q.next}while(Q!==null&&Q!==n);if(B===null?g=f:B.next=E,!Vn(f,t.memoizedState)&&(tn=!0,ut&&(a=zr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=B,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Nc(t){var n=je(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);Vn(f,n.memoizedState)||(tn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Mp(t,n,a){var s=ie,u=je(),f=ge;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Vn((we||u).memoizedState,a);if(g&&(u.memoizedState=a,tn=!0),u=u.queue,zc(Ap.bind(null,s,u,t),[t]),u.getSnapshot!==n||g||$e!==null&&$e.memoizedState.tag&1){if(s.flags|=2048,Vr(9,{destroy:void 0},Tp.bind(null,s,u,a,n),null),Ne===null)throw Error(r(349));f||(Ni&127)!==0||Ep(s,n,a)}return a}function Ep(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ie.updateQueue,n===null?(n=fl(),ie.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Tp(t,n,a,s){n.value=a,n.getSnapshot=s,bp(n)&&Rp(t)}function Ap(t,n,a){return a(function(){bp(n)&&Rp(t)})}function bp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Vn(t,a)}catch{return!0}}function Rp(t){var n=Wa(t,2);n!==null&&zn(n,t,2)}function Oc(t){var n=Rn();if(typeof t=="function"){var a=t;if(t=a(),tr){Yt(!0);try{a()}finally{Yt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:t},n}function Cp(t,n,a,s){return t.baseState=a,Lc(t,we,typeof s=="function"?s:Oi)}function Hv(t,n,a,s,u){if(gl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,wp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function wp(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=P.T,g={};P.T=g;try{var E=a(u,s),B=P.S;B!==null&&B(g,E),Dp(t,n,E)}catch(Q){Pc(t,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),P.T=f}}else try{f=a(u,s),Dp(t,n,f)}catch(Q){Pc(t,n,Q)}}function Dp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Up(t,n,s)},function(s){return Pc(t,n,s)}):Up(t,n,a)}function Up(t,n,a){n.status="fulfilled",n.value=a,Lp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,wp(t,a)))}function Pc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Lp(n),n=n.next;while(n!==s)}t.action=null}function Lp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Np(t,n){return n}function Op(t,n){if(ge){var a=Ne.formState;if(a!==null){t:{var s=ie;if(ge){if(ze){e:{for(var u=ze,f=ni;u.nodeType!==8;){if(!f){u=null;break e}if(u=ai(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){ze=ai(u.nextSibling),s=u.data==="F!";break t}}ca(s)}s=!1}s&&(n=a[0])}}return a=Rn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Np,lastRenderedState:n},a.queue=s,a=$p.bind(null,ie,s),s.dispatch=a,s=Oc(!1),f=Gc.bind(null,ie,!1,s.queue),s=Rn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=Hv.bind(null,ie,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Pp(t){var n=je();return zp(n,we,t)}function zp(t,n,a){if(n=Lc(t,n,Np)[0],t=dl(Oi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=to(n)}catch(g){throw g===Br?il:g}else s=n;n=je();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ie.flags|=2048,Vr(9,{destroy:void 0},Gv.bind(null,u,a),null)),[s,f,t]}function Gv(t,n){t.action=n}function Bp(t){var n=je(),a=we;if(a!==null)return zp(n,a,t);je(),n=n.memoizedState,a=je();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Vr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ie.updateQueue,n===null&&(n=fl(),ie.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Ip(){return je().memoizedState}function pl(t,n,a,s){var u=Rn();ie.flags|=t,u.memoizedState=Vr(1|n,{destroy:void 0},a,s===void 0?null:s)}function ml(t,n,a,s){var u=je();s=s===void 0?null:s;var f=u.memoizedState.inst;we!==null&&s!==null&&bc(s,we.memoizedState.deps)?u.memoizedState=Vr(n,f,a,s):(ie.flags|=t,u.memoizedState=Vr(1|n,f,a,s))}function Fp(t,n){pl(8390656,8,t,n)}function zc(t,n){ml(2048,8,t,n)}function Vv(t){ie.flags|=4;var n=ie.updateQueue;if(n===null)n=fl(),ie.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Hp(t){var n=je().memoizedState;return Vv({ref:n,nextImpl:t}),function(){if((Me&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Gp(t,n){return ml(4,2,t,n)}function Vp(t,n){return ml(4,4,t,n)}function Xp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function kp(t,n,a){a=a!=null?a.concat([t]):null,ml(4,4,Xp.bind(null,n,t),a)}function Bc(){}function Wp(t,n){var a=je();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&bc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function qp(t,n){var a=je();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&bc(n,s[1]))return s[0];if(s=t(),tr){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[s,n],s}function Ic(t,n,a){return a===void 0||(Ni&1073741824)!==0&&(de&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Ym(),ie.lanes|=t,Sa|=t,a)}function Yp(t,n,a,s){return Vn(a,n)?a:Fr.current!==null?(t=Ic(t,a,s),Vn(t,n)||(tn=!0),t):(Ni&42)===0||(Ni&1073741824)!==0&&(de&261930)===0?(tn=!0,t.memoizedState=a):(t=Ym(),ie.lanes|=t,Sa|=t,n)}function Zp(t,n,a,s,u){var f=W.p;W.p=f!==0&&8>f?f:8;var g=P.T,E={};P.T=E,Gc(t,!1,n,a);try{var B=u(),Q=P.S;if(Q!==null&&Q(E,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ut=Bv(B,s);eo(t,n,ut,Zn(t))}else eo(t,n,s,Zn(t))}catch(dt){eo(t,n,{then:function(){},status:"rejected",reason:dt},Zn())}finally{W.p=f,g!==null&&E.types!==null&&(g.types=E.types),P.T=g}}function Xv(){}function Fc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=jp(t).queue;Zp(t,u,n,j,a===null?Xv:function(){return Kp(t),a(s)})}function jp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Kp(t){var n=jp(t);n.next===null&&(n=t.alternate.memoizedState),eo(t,n.next.queue,{},Zn())}function Hc(){return gn(So)}function Qp(){return je().memoizedState}function Jp(){return je().memoizedState}function kv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();t=da(a);var s=pa(n,t,a);s!==null&&(zn(s,n,a),Ks(s,n,a)),n={cache:mc()},t.payload=n;return}n=n.return}}function Wv(t,n,a){var s=Zn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gl(t)?tm(n,a):(a=ac(t,n,a,s),a!==null&&(zn(a,t,s),em(a,n,s)))}function $p(t,n,a){var s=Zn();eo(t,n,a,s)}function eo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(gl(t))tm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,E=f(g,a);if(u.hasEagerState=!0,u.eagerState=E,Vn(E,g))return Ko(t,n,u,0),Ne===null&&jo(),!1}catch{}if(a=ac(t,n,u,s),a!==null)return zn(a,t,s),em(a,n,s),!0}return!1}function Gc(t,n,a,s){if(s={lane:2,revertLane:xf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},gl(t)){if(n)throw Error(r(479))}else n=ac(t,a,s,2),n!==null&&zn(n,t,2)}function gl(t){var n=t.alternate;return t===ie||n!==null&&n===ie}function tm(t,n){Hr=ul=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function em(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,xr(t,a)}}var no={readContext:gn,use:hl,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We};no.useEffectEvent=We;var nm={readContext:gn,use:hl,useCallback:function(t,n){return Rn().memoizedState=[t,n===void 0?null:n],t},useContext:gn,useEffect:Fp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,pl(4194308,4,Xp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return pl(4194308,4,t,n)},useInsertionEffect:function(t,n){pl(4,2,t,n)},useMemo:function(t,n){var a=Rn();n=n===void 0?null:n;var s=t();if(tr){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Rn();if(a!==void 0){var u=a(n);if(tr){Yt(!0);try{a(n)}finally{Yt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=Wv.bind(null,ie,t),[s.memoizedState,t]},useRef:function(t){var n=Rn();return t={current:t},n.memoizedState=t},useState:function(t){t=Oc(t);var n=t.queue,a=$p.bind(null,ie,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Bc,useDeferredValue:function(t,n){var a=Rn();return Ic(a,t,n)},useTransition:function(){var t=Oc(!1);return t=Zp.bind(null,ie,t.queue,!0,!1),Rn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ie,u=Rn();if(ge){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ne===null)throw Error(r(349));(de&127)!==0||Ep(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Fp(Ap.bind(null,s,f,t),[t]),s.flags|=2048,Vr(9,{destroy:void 0},Tp.bind(null,s,f,a,n),null),a},useId:function(){var t=Rn(),n=Ne.identifierPrefix;if(ge){var a=yi,s=xi;a=(s&~(1<<32-Zt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=cl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Iv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Hc,useFormState:Op,useActionState:Op,useOptimistic:function(t){var n=Rn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Gc.bind(null,ie,!0,a),a.dispatch=n,[t,n]},useMemoCache:Uc,useCacheRefresh:function(){return Rn().memoizedState=kv.bind(null,ie)},useEffectEvent:function(t){var n=Rn(),a={impl:t};return n.memoizedState=a,function(){if((Me&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Vc={readContext:gn,use:hl,useCallback:Wp,useContext:gn,useEffect:zc,useImperativeHandle:kp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:qp,useReducer:dl,useRef:Ip,useState:function(){return dl(Oi)},useDebugValue:Bc,useDeferredValue:function(t,n){var a=je();return Yp(a,we.memoizedState,t,n)},useTransition:function(){var t=dl(Oi)[0],n=je().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Mp,useId:Qp,useHostTransitionStatus:Hc,useFormState:Pp,useActionState:Pp,useOptimistic:function(t,n){var a=je();return Cp(a,we,t,n)},useMemoCache:Uc,useCacheRefresh:Jp};Vc.useEffectEvent=Hp;var im={readContext:gn,use:hl,useCallback:Wp,useContext:gn,useEffect:zc,useImperativeHandle:kp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:qp,useReducer:Nc,useRef:Ip,useState:function(){return Nc(Oi)},useDebugValue:Bc,useDeferredValue:function(t,n){var a=je();return we===null?Ic(a,t,n):Yp(a,we.memoizedState,t,n)},useTransition:function(){var t=Nc(Oi)[0],n=je().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Mp,useId:Qp,useHostTransitionStatus:Hc,useFormState:Bp,useActionState:Bp,useOptimistic:function(t,n){var a=je();return we!==null?Cp(a,we,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Uc,useCacheRefresh:Jp};im.useEffectEvent=Hp;function Xc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var kc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Zn(),u=da(s);u.payload=n,a!=null&&(u.callback=a),n=pa(t,u,s),n!==null&&(zn(n,t,s),Ks(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Zn(),u=da(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=pa(t,u,s),n!==null&&(zn(n,t,s),Ks(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Zn(),s=da(a);s.tag=2,n!=null&&(s.callback=n),n=pa(t,s,a),n!==null&&(zn(n,t,a),Ks(n,t,a))}};function am(t,n,a,s,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(u,f):!0}function rm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&kc.enqueueReplaceState(n,n.state,null)}function er(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function sm(t){Zo(t)}function om(t){console.error(t)}function lm(t){Zo(t)}function _l(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function um(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Wc(t,n,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){_l(t,n)},a}function cm(t){return t=da(t),t.tag=3,t}function fm(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){um(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){um(n,a,s),typeof u!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function qv(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Or(n,a,u,!0),a=kn.current,a!==null){switch(a.tag){case 31:case 13:return ii===null?wl():a.alternate===null&&qe===0&&(qe=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===al?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),_f(t,s,u)),!1;case 22:return a.flags|=65536,s===al?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),_f(t,s,u)),!1}throw Error(r(435,a.tag))}return _f(t,s,u),wl(),!1}if(ge)return n=kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==cc&&(t=Error(r(422),{cause:s}),Ws($n(t,a)))):(s!==cc&&(n=Error(r(423),{cause:s}),Ws($n(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=$n(s,a),u=Wc(t.stateNode,s,u),yc(t,u),qe!==4&&(qe=2)),!1;var f=Error(r(520),{cause:s});if(f=$n(f,a),co===null?co=[f]:co.push(f),qe!==4&&(qe=2),n===null)return!0;s=$n(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Wc(a.stateNode,s,t),yc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(xa===null||!xa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=cm(u),fm(u,t,a,s),yc(a,u),!1}a=a.return}while(a!==null);return!1}var qc=Error(r(461)),tn=!1;function _n(t,n,a,s){n.child=t===null?mp(n,null,a,s):$a(n,t.child,a,s)}function hm(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var E in s)E!=="ref"&&(g[E]=s[E])}else g=s;return ja(n),s=Rc(t,n,a,g,f,u),E=Cc(),t!==null&&!tn?(wc(t,n,u),Pi(t,n,u)):(ge&&E&&lc(n),n.flags|=1,_n(t,n,s,u),n.child)}function dm(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!rc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,pm(t,n,f,s,u)):(t=Jo(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!tf(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(g,s)&&t.ref===n.ref)return Pi(t,n,u)}return n.flags|=1,t=wi(f,s),t.ref=n.ref,t.return=n,n.child=t}function pm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Vs(f,s)&&t.ref===n.ref)if(tn=!1,n.pendingProps=s=f,tf(t,u))(t.flags&131072)!==0&&(tn=!0);else return n.lanes=t.lanes,Pi(t,n,u)}return Yc(t,n,a,s,u)}function mm(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return gm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&nl(n,f!==null?f.cachePool:null),f!==null?vp(n,f):Ec(),Sp(n);else return s=n.lanes=536870912,gm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(nl(n,f.cachePool),vp(n,f),ga(),n.memoizedState=null):(t!==null&&nl(n,null),Ec(),ga());return _n(t,n,u,a),n.child}function io(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function gm(t,n,a,s,u){var f=_c();return f=f===null?null:{parent:Je._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&nl(n,null),Ec(),Sp(n),t!==null&&Or(t,n,s,!0),n.childLanes=u,null}function vl(t,n){return n=xl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function _m(t,n,a){return $a(n,t.child,null,a),t=vl(n,n.pendingProps),t.flags|=2,Wn(n),n.memoizedState=null,t}function Yv(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ge){if(s.mode==="hidden")return t=vl(n,s),n.lanes=536870912,io(null,t);if(Ac(n),(t=ze)?(t=wg(t,ni),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:la!==null?{id:xi,overflow:yi}:null,retryLane:536870912,hydrationErrors:null},a=tp(t),a.return=n,n.child=a,mn=n,ze=null)):t=null,t===null)throw ca(n);return n.lanes=536870912,null}return vl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Ac(n),u)if(n.flags&256)n.flags&=-257,n=_m(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(tn||Or(t,n,a,!1),u=(a&t.childLanes)!==0,tn||u){if(s=Ne,s!==null&&(g=ws(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,Wa(t,g),zn(s,t,g),qc;wl(),n=_m(t,n,a)}else t=f.treeContext,ze=ai(g.nextSibling),mn=n,ge=!0,ua=null,ni=!1,t!==null&&ip(n,t),n=vl(n,s),n.flags|=4096;return n}return t=wi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Sl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Yc(t,n,a,s,u){return ja(n),a=Rc(t,n,a,s,void 0,u),s=Cc(),t!==null&&!tn?(wc(t,n,u),Pi(t,n,u)):(ge&&s&&lc(n),n.flags|=1,_n(t,n,a,u),n.child)}function vm(t,n,a,s,u,f){return ja(n),n.updateQueue=null,a=yp(n,s,a,u),xp(t),s=Cc(),t!==null&&!tn?(wc(t,n,f),Pi(t,n,f)):(ge&&s&&lc(n),n.flags|=1,_n(t,n,a,f),n.child)}function Sm(t,n,a,s,u){if(ja(n),n.stateNode===null){var f=Dr,g=a.contextType;typeof g=="object"&&g!==null&&(f=gn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=kc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Sc(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?gn(g):Dr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Xc(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&kc.enqueueReplaceState(f,f.state,null),Js(n,s,f,u),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,B=er(a,E);f.props=B;var Q=f.context,ut=a.contextType;g=Dr,typeof ut=="object"&&ut!==null&&(g=gn(ut));var dt=a.getDerivedStateFromProps;ut=typeof dt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||Q!==g)&&rm(n,f,s,g),ha=!1;var J=n.memoizedState;f.state=J,Js(n,s,f,u),Qs(),Q=n.memoizedState,E||J!==Q||ha?(typeof dt=="function"&&(Xc(n,a,dt,s),Q=n.memoizedState),(B=ha||am(n,a,B,s,J,Q,g))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=g,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,xc(t,n),g=n.memoizedProps,ut=er(a,g),f.props=ut,dt=n.pendingProps,J=f.context,Q=a.contextType,B=Dr,typeof Q=="object"&&Q!==null&&(B=gn(Q)),E=a.getDerivedStateFromProps,(Q=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==dt||J!==B)&&rm(n,f,s,B),ha=!1,J=n.memoizedState,f.state=J,Js(n,s,f,u),Qs();var rt=n.memoizedState;g!==dt||J!==rt||ha||t!==null&&t.dependencies!==null&&tl(t.dependencies)?(typeof E=="function"&&(Xc(n,a,E,s),rt=n.memoizedState),(ut=ha||am(n,a,ut,s,J,rt,B)||t!==null&&t.dependencies!==null&&tl(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,rt,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,rt,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&J===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&J===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=rt),f.props=s,f.state=rt,f.context=B,s=ut):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&J===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&J===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Sl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=$a(n,t.child,null,u),n.child=$a(n,null,a,u)):_n(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Pi(t,n,u),t}function xm(t,n,a,s){return Ya(),n.flags|=256,_n(t,n,a,s),n.child}var Zc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jc(t){return{baseLanes:t,cachePool:up()}}function Kc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Yn),t}function ym(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(Ze.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(ge){if(u?ma(n):ga(),(t=ze)?(t=wg(t,ni),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:la!==null?{id:xi,overflow:yi}:null,retryLane:536870912,hydrationErrors:null},a=tp(t),a.return=n,n.child=a,mn=n,ze=null)):t=null,t===null)throw ca(n);return Nf(t)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,u?(ga(),u=n.mode,E=xl({mode:"hidden",children:E},u),s=qa(s,u,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=jc(a),s.childLanes=Kc(t,g,a),n.memoizedState=Zc,io(null,s)):(ma(n),Qc(n,E))}var B=t.memoizedState;if(B!==null&&(E=B.dehydrated,E!==null)){if(f)n.flags&256?(ma(n),n.flags&=-257,n=Jc(t,n,a)):n.memoizedState!==null?(ga(),n.child=t.child,n.flags|=128,n=null):(ga(),E=s.fallback,u=n.mode,s=xl({mode:"visible",children:s.children},u),E=qa(E,u,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,$a(n,t.child,null,a),s=n.child,s.memoizedState=jc(a),s.childLanes=Kc(t,g,a),n.memoizedState=Zc,n=io(null,s));else if(ma(n),Nf(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var Q=g.dgst;g=Q,s=Error(r(419)),s.stack="",s.digest=g,Ws({value:s,source:null,stack:null}),n=Jc(t,n,a)}else if(tn||Or(t,n,a,!1),g=(a&t.childLanes)!==0,tn||g){if(g=Ne,g!==null&&(s=ws(g,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,Wa(t,s),zn(g,t,s),qc;Lf(E)||wl(),n=Jc(t,n,a)}else Lf(E)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,ze=ai(E.nextSibling),mn=n,ge=!0,ua=null,ni=!1,t!==null&&ip(n,t),n=Qc(n,s.children),n.flags|=4096);return n}return u?(ga(),E=s.fallback,u=n.mode,B=t.child,Q=B.sibling,s=wi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,Q!==null?E=wi(Q,E):(E=qa(E,u,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,io(null,s),s=n.child,E=t.child.memoizedState,E===null?E=jc(a):(u=E.cachePool,u!==null?(B=Je._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=up(),E={baseLanes:E.baseLanes|a,cachePool:u}),s.memoizedState=E,s.childLanes=Kc(t,g,a),n.memoizedState=Zc,io(t.child,s)):(ma(n),a=t.child,t=a.sibling,a=wi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Qc(t,n){return n=xl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function xl(t,n){return t=Xn(22,t,null,n),t.lanes=0,t}function Jc(t,n,a){return $a(n,t.child,null,a),t=Qc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Mm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),dc(t.return,n,a)}function $c(t,n,a,s,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function Em(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var g=Ze.current,E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,St(Ze,g),_n(t,n,s,a),s=ge?ks:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mm(t,a,n);else if(t.tag===19)Mm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&ll(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),$c(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&ll(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}$c(n,!0,a,null,f,s);break;case"together":$c(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Pi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Sa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Or(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=wi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=wi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function tf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&tl(t)))}function Zv(t,n,a){switch(n.tag){case 3:Ft(n,n.stateNode.containerInfo),fa(n,Je,t.memoizedState.cache),Ya();break;case 27:case 5:ee(n);break;case 4:Ft(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ac(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ym(t,n,a):(ma(n),t=Pi(t,n,a),t!==null?t.sibling:null);ma(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Or(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Em(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(Ze,Ze.current),s)break;return null;case 22:return n.lanes=0,mm(t,n,a,n.pendingProps);case 24:fa(n,Je,t.memoizedState.cache)}return Pi(t,n,a)}function Tm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)tn=!0;else{if(!tf(t,a)&&(n.flags&128)===0)return tn=!1,Zv(t,n,a);tn=(t.flags&131072)!==0}else tn=!1,ge&&(n.flags&1048576)!==0&&np(n,ks,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Qa(n.elementType),n.type=t,typeof t=="function")rc(t)?(s=er(t,s),n.tag=1,n=Sm(null,n,t,s,a)):(n.tag=0,n=Yc(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=hm(null,n,t,s,a);break t}else if(u===O){n.tag=14,n=dm(null,n,t,s,a);break t}}throw n=mt(t)||t,Error(r(306,n,""))}}return n;case 0:return Yc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=er(s,n.pendingProps),Sm(t,n,s,u,a);case 3:t:{if(Ft(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,xc(t,n),Js(n,s,null,a);var g=n.memoizedState;if(s=g.cache,fa(n,Je,s),s!==f.cache&&pc(n,[Je],a,!0),Qs(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=xm(t,n,s,a);break t}else if(s!==u){u=$n(Error(r(424)),n),Ws(u),n=xm(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,ze=ai(t.firstChild),mn=n,ge=!0,ua=null,ni=!0,a=mp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ya(),s===u){n=Pi(t,n,a);break t}_n(t,n,s,a)}n=n.child}return n;case 26:return Sl(t,n),t===null?(a=Pg(n.type,null,n.pendingProps,null))?n.memoizedState=a:ge||(a=n.type,t=n.pendingProps,s=zl(xt.current).createElement(a),s[Qe]=n,s[xn]=t,vn(s,a,t),zt(s),n.stateNode=s):n.memoizedState=Pg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ee(n),t===null&&ge&&(s=n.stateNode=Lg(n.type,n.pendingProps,xt.current),mn=n,ni=!0,u=ze,Ta(n.type)?(Of=u,ze=ai(s.firstChild)):ze=u),_n(t,n,n.pendingProps.children,a),Sl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ge&&((u=s=ze)&&(s=TS(s,n.type,n.pendingProps,ni),s!==null?(n.stateNode=s,mn=n,ze=ai(s.firstChild),ni=!1,u=!0):u=!1),u||ca(n)),ee(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,wf(u,f)?s=null:g!==null&&wf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Rc(t,n,Fv,null,null,a),So._currentValue=u),Sl(t,n),_n(t,n,s,a),n.child;case 6:return t===null&&ge&&((t=a=ze)&&(a=AS(a,n.pendingProps,ni),a!==null?(n.stateNode=a,mn=n,ze=null,t=!0):t=!1),t||ca(n)),null;case 13:return ym(t,n,a);case 4:return Ft(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=$a(n,null,s,a):_n(t,n,s,a),n.child;case 11:return hm(t,n,n.type,n.pendingProps,a);case 7:return _n(t,n,n.pendingProps,a),n.child;case 8:return _n(t,n,n.pendingProps.children,a),n.child;case 12:return _n(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,fa(n,n.type,s.value),_n(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,ja(n),u=gn(u),s=s(u),n.flags|=1,_n(t,n,s,a),n.child;case 14:return dm(t,n,n.type,n.pendingProps,a);case 15:return pm(t,n,n.type,n.pendingProps,a);case 19:return Em(t,n,a);case 31:return Yv(t,n,a);case 22:return mm(t,n,a,n.pendingProps);case 24:return ja(n),s=gn(Je),t===null?(u=_c(),u===null&&(u=Ne,f=mc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Sc(n),fa(n,Je,u)):((t.lanes&a)!==0&&(xc(t,n),Js(n,null,null,a),Qs()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),fa(n,Je,s)):(s=f.cache,fa(n,Je,s),s!==u.cache&&pc(n,[Je],a,!0))),_n(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function zi(t){t.flags|=4}function ef(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Qm())t.flags|=8192;else throw Ja=al,vc}else t.flags&=-16777217}function Am(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Hg(n))if(Qm())t.flags|=8192;else throw Ja=al,vc}function yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?_e():536870912,t.lanes|=n,qr|=n)}function ao(t,n){if(!ge)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Be(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function jv(t,n,a){var s=n.pendingProps;switch(uc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(n),null;case 1:return Be(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Li(Je),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Nr(n)?zi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,fc())),Be(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(zi(n),f!==null?(Be(n),Am(n,f)):(Be(n),ef(n,u,null,s,a))):f?f!==t.memoizedState?(zi(n),Be(n),Am(n,f)):(Be(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&zi(n),Be(n),ef(n,u,t,s,a)),null;case 27:if(Le(n),a=xt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&zi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Be(n),null}t=q.current,Nr(n)?ap(n):(t=Lg(u,s,a),n.stateNode=t,zi(n))}return Be(n),null;case 5:if(Le(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&zi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Be(n),null}if(f=q.current,Nr(n))ap(n);else{var g=zl(xt.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(u,{is:s.is}):g.createElement(u)}}f[Qe]=n,f[xn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(vn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&zi(n)}}return Be(n),ef(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&zi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=xt.current,Nr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=mn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[Qe]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||yg(t.nodeValue,a)),t||ca(n,!0)}else t=zl(t).createTextNode(s),t[Qe]=n,n.stateNode=t}return Be(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Nr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Qe]=n}else Ya(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Be(n),t=!1}else a=fc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Wn(n),n):(Wn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Be(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Nr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Qe]=n}else Ya(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Be(n),u=!1}else u=fc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Wn(n),n):(Wn(n),null)}return Wn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),yl(n,n.updateQueue),Be(n),null);case 4:return It(),t===null&&Tf(n.stateNode.containerInfo),Be(n),null;case 10:return Li(n.type),Be(n),null;case 19:if(nt(Ze),s=n.memoizedState,s===null)return Be(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)ao(s,!1);else{if(qe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ll(t),f!==null){for(n.flags|=128,ao(s,!1),t=f.updateQueue,n.updateQueue=t,yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)$d(a,t),a=a.sibling;return St(Ze,Ze.current&1|2),ge&&Di(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&pt()>bl&&(n.flags|=128,u=!0,ao(s,!1),n.lanes=4194304)}else{if(!u)if(t=ll(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,yl(n,t),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!ge)return Be(n),null}else 2*pt()-s.renderingStartTime>bl&&a!==536870912&&(n.flags|=128,u=!0,ao(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=pt(),t.sibling=null,a=Ze.current,St(Ze,u?a&1|2:a&1),ge&&Di(n,s.treeForkCount),t):(Be(n),null);case 22:case 23:return Wn(n),Tc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Be(n),n.subtreeFlags&6&&(n.flags|=8192)):Be(n),a=n.updateQueue,a!==null&&yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&nt(Ka),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Li(Je),Be(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Kv(t,n){switch(uc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Li(Je),It(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 31:if(n.memoizedState!==null){if(Wn(n),n.alternate===null)throw Error(r(340));Ya()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Wn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ya()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return nt(Ze),null;case 4:return It(),null;case 10:return Li(n.type),null;case 22:case 23:return Wn(n),Tc(),t!==null&&nt(Ka),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Li(Je),null;case 25:return null;default:return null}}function bm(t,n){switch(uc(n),n.tag){case 3:Li(Je),It();break;case 26:case 27:case 5:Le(n);break;case 4:It();break;case 31:n.memoizedState!==null&&Wn(n);break;case 13:Wn(n);break;case 19:nt(Ze);break;case 10:Li(n.type);break;case 22:case 23:Wn(n),Tc(),t!==null&&nt(Ka);break;case 24:Li(Je)}}function ro(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==u)}}catch(E){Ce(n,n.return,E)}}function _a(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var g=s.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,u=n;var B=a,Q=E;try{Q()}catch(ut){Ce(u,B,ut)}}}s=s.next}while(s!==f)}}catch(ut){Ce(n,n.return,ut)}}function Rm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{_p(n,a)}catch(s){Ce(t,t.return,s)}}}function Cm(t,n,a){a.props=er(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ce(t,n,s)}}function so(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Ce(t,n,u)}}function Mi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ce(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ce(t,n,u)}else a.current=null}function wm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ce(t,t.return,u)}}function nf(t,n,a){try{var s=t.stateNode;vS(s,t.type,a,n),s[xn]=n}catch(u){Ce(t,t.return,u)}}function Dm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ta(t.type)||t.tag===4}function af(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Dm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ta(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ri));else if(s!==4&&(s===27&&Ta(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(rf(t,n,a),t=t.sibling;t!==null;)rf(t,n,a),t=t.sibling}function Ml(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ta(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ml(t,n,a),t=t.sibling;t!==null;)Ml(t,n,a),t=t.sibling}function Um(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);vn(n,s,a),n[Qe]=t,n[xn]=a}catch(f){Ce(t,t.return,f)}}var Bi=!1,en=!1,sf=!1,Lm=typeof WeakSet=="function"?WeakSet:Set,fn=null;function Qv(t,n){if(t=t.containerInfo,Rf=Xl,t=kd(t),Ju(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,E=-1,B=-1,Q=0,ut=0,dt=t,J=null;e:for(;;){for(var rt;dt!==a||u!==0&&dt.nodeType!==3||(E=g+u),dt!==f||s!==0&&dt.nodeType!==3||(B=g+s),dt.nodeType===3&&(g+=dt.nodeValue.length),(rt=dt.firstChild)!==null;)J=dt,dt=rt;for(;;){if(dt===t)break e;if(J===a&&++Q===u&&(E=g),J===f&&++ut===s&&(B=g),(rt=dt.nextSibling)!==null)break;dt=J,J=dt.parentNode}dt=rt}a=E===-1||B===-1?null:{start:E,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cf={focusedElem:t,selectionRange:a},Xl=!1,fn=n;fn!==null;)if(n=fn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,fn=t;else for(;fn!==null;){switch(n=fn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Bt=er(a.type,u);t=s.getSnapshotBeforeUpdate(Bt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Kt){Ce(a,a.return,Kt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Uf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Uf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,fn=t;break}fn=n.return}}function Nm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Fi(t,a),s&4&&ro(5,a);break;case 1:if(Fi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Ce(a,a.return,g)}else{var u=er(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ce(a,a.return,g)}}s&64&&Rm(a),s&512&&so(a,a.return);break;case 3:if(Fi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{_p(t,n)}catch(g){Ce(a,a.return,g)}}break;case 27:n===null&&s&4&&Um(a);case 26:case 5:Fi(t,a),n===null&&s&4&&wm(a),s&512&&so(a,a.return);break;case 12:Fi(t,a);break;case 31:Fi(t,a),s&4&&zm(t,a);break;case 13:Fi(t,a),s&4&&Bm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=sS.bind(null,a),bS(t,a))));break;case 22:if(s=a.memoizedState!==null||Bi,!s){n=n!==null&&n.memoizedState!==null||en,u=Bi;var f=en;Bi=s,(en=n)&&!f?Hi(t,a,(a.subtreeFlags&8772)!==0):Fi(t,a),Bi=u,en=f}break;case 30:break;default:Fi(t,a)}}function Om(t){var n=t.alternate;n!==null&&(t.alternate=null,Om(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Y(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ge=null,Ln=!1;function Ii(t,n,a){for(a=a.child;a!==null;)Pm(t,n,a),a=a.sibling}function Pm(t,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(jt,a)}catch{}switch(a.tag){case 26:en||Mi(a,n),Ii(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||Mi(a,n);var s=Ge,u=Ln;Ta(a.type)&&(Ge=a.stateNode,Ln=!1),Ii(t,n,a),go(a.stateNode),Ge=s,Ln=u;break;case 5:en||Mi(a,n);case 6:if(s=Ge,u=Ln,Ge=null,Ii(t,n,a),Ge=s,Ln=u,Ge!==null)if(Ln)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(a.stateNode)}catch(f){Ce(a,n,f)}else try{Ge.removeChild(a.stateNode)}catch(f){Ce(a,n,f)}break;case 18:Ge!==null&&(Ln?(t=Ge,Rg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ts(t)):Rg(Ge,a.stateNode));break;case 4:s=Ge,u=Ln,Ge=a.stateNode.containerInfo,Ln=!0,Ii(t,n,a),Ge=s,Ln=u;break;case 0:case 11:case 14:case 15:_a(2,a,n),en||_a(4,a,n),Ii(t,n,a);break;case 1:en||(Mi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Cm(a,n,s)),Ii(t,n,a);break;case 21:Ii(t,n,a);break;case 22:en=(s=en)||a.memoizedState!==null,Ii(t,n,a),en=s;break;default:Ii(t,n,a)}}function zm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ts(t)}catch(a){Ce(n,n.return,a)}}}function Bm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ts(t)}catch(a){Ce(n,n.return,a)}}function Jv(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Lm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Lm),n;default:throw Error(r(435,t.tag))}}function El(t,n){var a=Jv(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=oS.bind(null,t,s);s.then(u,u)}})}function Nn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,g=n,E=g;t:for(;E!==null;){switch(E.tag){case 27:if(Ta(E.type)){Ge=E.stateNode,Ln=!1;break t}break;case 5:Ge=E.stateNode,Ln=!1;break t;case 3:case 4:Ge=E.stateNode.containerInfo,Ln=!0;break t}E=E.return}if(Ge===null)throw Error(r(160));Pm(f,g,u),Ge=null,Ln=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Im(n,t),n=n.sibling}var hi=null;function Im(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Nn(n,t),On(t),s&4&&(_a(3,t,t.return),ro(3,t),_a(5,t,t.return));break;case 1:Nn(n,t),On(t),s&512&&(en||a===null||Mi(a,a.return)),s&64&&Bi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=hi;if(Nn(n,t),On(t),s&512&&(en||a===null||Mi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[et]||f[Qe]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),vn(f,s,a),f[Qe]=t,zt(f),s=f;break t;case"link":var g=Ig("link","href",u).get(s+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(f=g[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break e}}f=u.createElement(s),vn(f,s,a),u.head.appendChild(f);break;case"meta":if(g=Ig("meta","content",u).get(s+(a.content||""))){for(E=0;E<g.length;E++)if(f=g[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break e}}f=u.createElement(s),vn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[Qe]=t,zt(f),s=f}t.stateNode=s}else Fg(u,t.type,t.stateNode);else t.stateNode=Bg(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Fg(u,t.type,t.stateNode):Bg(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&nf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Nn(n,t),On(t),s&512&&(en||a===null||Mi(a,a.return)),a!==null&&s&4&&nf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Nn(n,t),On(t),s&512&&(en||a===null||Mi(a,a.return)),t.flags&32){u=t.stateNode;try{Er(u,"")}catch(Bt){Ce(t,t.return,Bt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,nf(t,u,a!==null?a.memoizedProps:u)),s&1024&&(sf=!0);break;case 6:if(Nn(n,t),On(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Bt){Ce(t,t.return,Bt)}}break;case 3:if(Fl=null,u=hi,hi=Bl(n.containerInfo),Nn(n,t),hi=u,On(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ts(n.containerInfo)}catch(Bt){Ce(t,t.return,Bt)}sf&&(sf=!1,Fm(t));break;case 4:s=hi,hi=Bl(t.stateNode.containerInfo),Nn(n,t),On(t),hi=s;break;case 12:Nn(n,t),On(t);break;case 31:Nn(n,t),On(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,El(t,s)));break;case 13:Nn(n,t),On(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Al=pt()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,El(t,s)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,Q=Bi,ut=en;if(Bi=Q||u,en=ut||B,Nn(n,t),en=ut,Bi=Q,On(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||Bi||en||nr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=B.stateNode;var dt=B.memoizedProps.style,J=dt!=null&&dt.hasOwnProperty("display")?dt.display:null;E.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(Bt){Ce(B,B.return,Bt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Bt){Ce(B,B.return,Bt)}}}else if(n.tag===18){if(a===null){B=n;try{var rt=B.stateNode;u?Cg(rt,!0):Cg(B.stateNode,!1)}catch(Bt){Ce(B,B.return,Bt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,El(t,a))));break;case 19:Nn(n,t),On(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,El(t,s)));break;case 30:break;case 21:break;default:Nn(n,t),On(t)}}function On(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Dm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=af(t);Ml(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(Er(g,""),a.flags&=-33);var E=af(t);Ml(t,E,g);break;case 3:case 4:var B=a.stateNode.containerInfo,Q=af(t);rf(t,Q,B);break;default:throw Error(r(161))}}catch(ut){Ce(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Fm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Fm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Fi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Nm(t,n.alternate,n),n=n.sibling}function nr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),nr(n);break;case 1:Mi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Cm(n,n.return,a),nr(n);break;case 27:go(n.stateNode);case 26:case 5:Mi(n,n.return),nr(n);break;case 22:n.memoizedState===null&&nr(n);break;case 30:nr(n);break;default:nr(n)}t=t.sibling}}function Hi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Hi(u,f,a),ro(4,f);break;case 1:if(Hi(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){Ce(s,s.return,Q)}if(s=f,u=s.updateQueue,u!==null){var E=s.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)gp(B[u],E)}catch(Q){Ce(s,s.return,Q)}}a&&g&64&&Rm(f),so(f,f.return);break;case 27:Um(f);case 26:case 5:Hi(u,f,a),a&&s===null&&g&4&&wm(f),so(f,f.return);break;case 12:Hi(u,f,a);break;case 31:Hi(u,f,a),a&&g&4&&zm(u,f);break;case 13:Hi(u,f,a),a&&g&4&&Bm(u,f);break;case 22:f.memoizedState===null&&Hi(u,f,a),so(f,f.return);break;case 30:break;default:Hi(u,f,a)}n=n.sibling}}function of(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&qs(a))}function lf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t))}function di(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Hm(t,n,a,s),n=n.sibling}function Hm(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:di(t,n,a,s),u&2048&&ro(9,n);break;case 1:di(t,n,a,s);break;case 3:di(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t)));break;case 12:if(u&2048){di(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,E=f.onPostCommit;typeof E=="function"&&E(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Ce(n,n.return,B)}}else di(t,n,a,s);break;case 31:di(t,n,a,s);break;case 13:di(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?di(t,n,a,s):oo(t,n):f._visibility&2?di(t,n,a,s):(f._visibility|=2,Xr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&of(g,n);break;case 24:di(t,n,a,s),u&2048&&lf(n.alternate,n);break;default:di(t,n,a,s)}}function Xr(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,E=a,B=s,Q=g.flags;switch(g.tag){case 0:case 11:case 15:Xr(f,g,E,B,u),ro(8,g);break;case 23:break;case 22:var ut=g.stateNode;g.memoizedState!==null?ut._visibility&2?Xr(f,g,E,B,u):oo(f,g):(ut._visibility|=2,Xr(f,g,E,B,u)),u&&Q&2048&&of(g.alternate,g);break;case 24:Xr(f,g,E,B,u),u&&Q&2048&&lf(g.alternate,g);break;default:Xr(f,g,E,B,u)}n=n.sibling}}function oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:oo(a,s),u&2048&&of(s.alternate,s);break;case 24:oo(a,s),u&2048&&lf(s.alternate,s);break;default:oo(a,s)}n=n.sibling}}var lo=8192;function kr(t,n,a){if(t.subtreeFlags&lo)for(t=t.child;t!==null;)Gm(t,n,a),t=t.sibling}function Gm(t,n,a){switch(t.tag){case 26:kr(t,n,a),t.flags&lo&&t.memoizedState!==null&&IS(a,hi,t.memoizedState,t.memoizedProps);break;case 5:kr(t,n,a);break;case 3:case 4:var s=hi;hi=Bl(t.stateNode.containerInfo),kr(t,n,a),hi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=lo,lo=16777216,kr(t,n,a),lo=s):kr(t,n,a));break;default:kr(t,n,a)}}function Vm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];fn=s,km(s,t)}Vm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Xm(t),t=t.sibling}function Xm(t){switch(t.tag){case 0:case 11:case 15:uo(t),t.flags&2048&&_a(9,t,t.return);break;case 3:uo(t);break;case 12:uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Tl(t)):uo(t);break;default:uo(t)}}function Tl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];fn=s,km(s,t)}Vm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_a(8,n,n.return),Tl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Tl(n));break;default:Tl(n)}t=t.sibling}}function km(t,n){for(;fn!==null;){var a=fn;switch(a.tag){case 0:case 11:case 15:_a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,fn=s;else t:for(a=t;fn!==null;){s=fn;var u=s.sibling,f=s.return;if(Om(s),s===a){fn=null;break t}if(u!==null){u.return=f,fn=u;break t}fn=f}}}var $v={getCacheForType:function(t){var n=gn(Je),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return gn(Je).controller.signal}},tS=typeof WeakMap=="function"?WeakMap:Map,Me=0,Ne=null,ce=null,de=0,Re=0,qn=null,va=!1,Wr=!1,uf=!1,Gi=0,qe=0,Sa=0,ir=0,cf=0,Yn=0,qr=0,co=null,Pn=null,ff=!1,Al=0,Wm=0,bl=1/0,Rl=null,xa=null,ln=0,ya=null,Yr=null,Vi=0,hf=0,df=null,qm=null,fo=0,pf=null;function Zn(){return(Me&2)!==0&&de!==0?de&-de:P.T!==null?xf():Ds()}function Ym(){if(Yn===0)if((de&536870912)===0||ge){var t=gt;gt<<=1,(gt&3932160)===0&&(gt=262144),Yn=t}else Yn=536870912;return t=kn.current,t!==null&&(t.flags|=32),Yn}function zn(t,n,a){(t===Ne&&(Re===2||Re===9)||t.cancelPendingCommit!==null)&&(Zr(t,0),Ma(t,de,Yn,!1)),Sn(t,a),((Me&2)===0||t!==Ne)&&(t===Ne&&((Me&2)===0&&(ir|=a),qe===4&&Ma(t,de,Yn,!1)),Ei(t))}function Zm(t,n,a){if((Me&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Oe(t,n),u=s?iS(t,n):gf(t,n,!0),f=s;do{if(u===0){Wr&&!s&&Ma(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!eS(a)){u=gf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;u=co;var B=E.current.memoizedState.isDehydrated;if(B&&(Zr(E,g).flags|=256),g=gf(E,g,!1),g!==2){if(uf&&!B){E.errorRecoveryDisabledLanes|=f,ir|=f,u=4;break t}f=Pn,Pn=u,f!==null&&(Pn===null?Pn=f:Pn.push.apply(Pn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){Zr(t,0),Ma(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ma(s,n,Yn,!va);break t;case 2:Pn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Al+300-pt(),10<u)){if(Ma(s,n,Yn,!va),oe(s,0,!0)!==0)break t;Vi=n,s.timeoutHandle=Ag(jm.bind(null,s,a,Pn,Rl,ff,n,Yn,ir,qr,va,f,"Throttled",-0,0),u);break t}jm(s,a,Pn,Rl,ff,n,Yn,ir,qr,va,f,null,-0,0)}}break}while(!0);Ei(t)}function jm(t,n,a,s,u,f,g,E,B,Q,ut,dt,J,rt){if(t.timeoutHandle=-1,dt=n.subtreeFlags,dt&8192||(dt&16785408)===16785408){dt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ri},Gm(n,f,dt);var Bt=(f&62914560)===f?Al-pt():(f&4194048)===f?Wm-pt():0;if(Bt=FS(dt,Bt),Bt!==null){Vi=f,t.cancelPendingCommit=Bt(ig.bind(null,t,n,f,a,s,u,g,E,B,ut,dt,null,J,rt)),Ma(t,f,g,!Q);return}}ig(t,n,f,a,s,u,g,E,B)}function eS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Vn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ma(t,n,a,s){n&=~cf,n&=~ir,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Zt(u),g=1<<f;s[f]=-1,u&=~g}a!==0&&Si(t,a,n)}function Cl(){return(Me&6)===0?(ho(0),!1):!0}function mf(){if(ce!==null){if(Re===0)var t=ce.return;else t=ce,Ui=Za=null,Dc(t),Ir=null,Zs=0,t=ce;for(;t!==null;)bm(t.alternate,t),t=t.return;ce=null}}function Zr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,yS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Vi=0,mf(),Ne=t,ce=a=wi(t.current,null),de=n,Re=0,qn=null,va=!1,Wr=Oe(t,n),uf=!1,qr=Yn=cf=ir=Sa=qe=0,Pn=co=null,ff=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Zt(s),f=1<<u;n|=t[u],s&=~f}return Gi=n,jo(),a}function Km(t,n){ie=null,P.H=no,n===Br||n===il?(n=hp(),Re=3):n===vc?(n=hp(),Re=4):Re=n===qc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,ce===null&&(qe=1,_l(t,$n(n,t.current)))}function Qm(){var t=kn.current;return t===null?!0:(de&4194048)===de?ii===null:(de&62914560)===de||(de&536870912)!==0?t===ii:!1}function Jm(){var t=P.H;return P.H=no,t===null?no:t}function $m(){var t=P.A;return P.A=$v,t}function wl(){qe=4,va||(de&4194048)!==de&&kn.current!==null||(Wr=!0),(Sa&134217727)===0&&(ir&134217727)===0||Ne===null||Ma(Ne,de,Yn,!1)}function gf(t,n,a){var s=Me;Me|=2;var u=Jm(),f=$m();(Ne!==t||de!==n)&&(Rl=null,Zr(t,n)),n=!1;var g=qe;t:do try{if(Re!==0&&ce!==null){var E=ce,B=qn;switch(Re){case 8:mf(),g=6;break t;case 3:case 2:case 9:case 6:kn.current===null&&(n=!0);var Q=Re;if(Re=0,qn=null,jr(t,E,B,Q),a&&Wr){g=0;break t}break;default:Q=Re,Re=0,qn=null,jr(t,E,B,Q)}}nS(),g=qe;break}catch(ut){Km(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Ui=Za=null,Me=s,P.H=u,P.A=f,ce===null&&(Ne=null,de=0,jo()),g}function nS(){for(;ce!==null;)tg(ce)}function iS(t,n){var a=Me;Me|=2;var s=Jm(),u=$m();Ne!==t||de!==n?(Rl=null,bl=pt()+500,Zr(t,n)):Wr=Oe(t,n);t:do try{if(Re!==0&&ce!==null){n=ce;var f=qn;e:switch(Re){case 1:Re=0,qn=null,jr(t,n,f,1);break;case 2:case 9:if(cp(f)){Re=0,qn=null,eg(n);break}n=function(){Re!==2&&Re!==9||Ne!==t||(Re=7),Ei(t)},f.then(n,n);break t;case 3:Re=7;break t;case 4:Re=5;break t;case 7:cp(f)?(Re=0,qn=null,eg(n)):(Re=0,qn=null,jr(t,n,f,7));break;case 5:var g=null;switch(ce.tag){case 26:g=ce.memoizedState;case 5:case 27:var E=ce;if(g?Hg(g):E.stateNode.complete){Re=0,qn=null;var B=E.sibling;if(B!==null)ce=B;else{var Q=E.return;Q!==null?(ce=Q,Dl(Q)):ce=null}break e}}Re=0,qn=null,jr(t,n,f,5);break;case 6:Re=0,qn=null,jr(t,n,f,6);break;case 8:mf(),qe=6;break t;default:throw Error(r(462))}}aS();break}catch(ut){Km(t,ut)}while(!0);return Ui=Za=null,P.H=s,P.A=u,Me=a,ce!==null?0:(Ne=null,de=0,jo(),qe)}function aS(){for(;ce!==null&&!at();)tg(ce)}function tg(t){var n=Tm(t.alternate,t,Gi);t.memoizedProps=t.pendingProps,n===null?Dl(t):ce=n}function eg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=vm(a,n,n.pendingProps,n.type,void 0,de);break;case 11:n=vm(a,n,n.pendingProps,n.type.render,n.ref,de);break;case 5:Dc(n);default:bm(a,n),n=ce=$d(n,Gi),n=Tm(a,n,Gi)}t.memoizedProps=t.pendingProps,n===null?Dl(t):ce=n}function jr(t,n,a,s){Ui=Za=null,Dc(n),Ir=null,Zs=0;var u=n.return;try{if(qv(t,u,n,a,de)){qe=1,_l(t,$n(a,t.current)),ce=null;return}}catch(f){if(u!==null)throw ce=u,f;qe=1,_l(t,$n(a,t.current)),ce=null;return}n.flags&32768?(ge||s===1?t=!0:Wr||(de&536870912)!==0?t=!1:(va=t=!0,(s===2||s===9||s===3||s===6)&&(s=kn.current,s!==null&&s.tag===13&&(s.flags|=16384))),ng(n,t)):Dl(n)}function Dl(t){var n=t;do{if((n.flags&32768)!==0){ng(n,va);return}t=n.return;var a=jv(n.alternate,n,Gi);if(a!==null){ce=a;return}if(n=n.sibling,n!==null){ce=n;return}ce=n=t}while(n!==null);qe===0&&(qe=5)}function ng(t,n){do{var a=Kv(t.alternate,t);if(a!==null){a.flags&=32767,ce=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ce=t;return}ce=t=a}while(t!==null);qe=6,ce=null}function ig(t,n,a,s,u,f,g,E,B){t.cancelPendingCommit=null;do Ul();while(ln!==0);if((Me&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=ic,Ho(t,a,f,g,E,B),t===Ne&&(ce=Ne=null,de=0),Yr=n,ya=t,Vi=a,hf=f,df=u,qm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,lS(Lt,function(){return lg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,u=W.p,W.p=2,g=Me,Me|=4;try{Qv(t,n,a)}finally{Me=g,W.p=u,P.T=s}}ln=1,ag(),rg(),sg()}}function ag(){if(ln===1){ln=0;var t=ya,n=Yr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=W.p;W.p=2;var u=Me;Me|=4;try{Im(n,t);var f=Cf,g=kd(t.containerInfo),E=f.focusedElem,B=f.selectionRange;if(g!==E&&E&&E.ownerDocument&&Xd(E.ownerDocument.documentElement,E)){if(B!==null&&Ju(E)){var Q=B.start,ut=B.end;if(ut===void 0&&(ut=Q),"selectionStart"in E)E.selectionStart=Q,E.selectionEnd=Math.min(ut,E.value.length);else{var dt=E.ownerDocument||document,J=dt&&dt.defaultView||window;if(J.getSelection){var rt=J.getSelection(),Bt=E.textContent.length,Kt=Math.min(B.start,Bt),Ue=B.end===void 0?Kt:Math.min(B.end,Bt);!rt.extend&&Kt>Ue&&(g=Ue,Ue=Kt,Kt=g);var k=Vd(E,Kt),H=Vd(E,Ue);if(k&&H&&(rt.rangeCount!==1||rt.anchorNode!==k.node||rt.anchorOffset!==k.offset||rt.focusNode!==H.node||rt.focusOffset!==H.offset)){var K=dt.createRange();K.setStart(k.node,k.offset),rt.removeAllRanges(),Kt>Ue?(rt.addRange(K),rt.extend(H.node,H.offset)):(K.setEnd(H.node,H.offset),rt.addRange(K))}}}}for(dt=[],rt=E;rt=rt.parentNode;)rt.nodeType===1&&dt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<dt.length;E++){var ct=dt[E];ct.element.scrollLeft=ct.left,ct.element.scrollTop=ct.top}}Xl=!!Rf,Cf=Rf=null}finally{Me=u,W.p=s,P.T=a}}t.current=n,ln=2}}function rg(){if(ln===2){ln=0;var t=ya,n=Yr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=W.p;W.p=2;var u=Me;Me|=4;try{Nm(t,n.alternate,n)}finally{Me=u,W.p=s,P.T=a}}ln=3}}function sg(){if(ln===4||ln===3){ln=0,_t();var t=ya,n=Yr,a=Vi,s=qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?ln=5:(ln=0,Yr=ya=null,og(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(xa=null),aa(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(jt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,u=W.p,W.p=2,P.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var E=s[g];f(E.value,{componentStack:E.stack})}}finally{P.T=n,W.p=u}}(Vi&3)!==0&&Ul(),Ei(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===pf?fo++:(fo=0,pf=t):fo=0,ho(0)}}function og(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,qs(n)))}function Ul(){return ag(),rg(),sg(),lg()}function lg(){if(ln!==5)return!1;var t=ya,n=hf;hf=0;var a=aa(Vi),s=P.T,u=W.p;try{W.p=32>a?32:a,P.T=null,a=df,df=null;var f=ya,g=Vi;if(ln=0,Yr=ya=null,Vi=0,(Me&6)!==0)throw Error(r(331));var E=Me;if(Me|=4,Xm(f.current),Hm(f,f.current,g,a),Me=E,ho(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(jt,f)}catch{}return!0}finally{W.p=u,P.T=s,og(t,n)}}function ug(t,n,a){n=$n(a,n),n=Wc(t.stateNode,n,2),t=pa(t,n,2),t!==null&&(Sn(t,2),Ei(t))}function Ce(t,n,a){if(t.tag===3)ug(t,t,a);else for(;n!==null;){if(n.tag===3){ug(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(xa===null||!xa.has(s))){t=$n(a,t),a=cm(2),s=pa(n,a,2),s!==null&&(fm(a,s,n,t),Sn(s,2),Ei(s));break}}n=n.return}}function _f(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new tS;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(uf=!0,u.add(a),t=rS.bind(null,t,n,a),n.then(t,t))}function rS(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ne===t&&(de&a)===a&&(qe===4||qe===3&&(de&62914560)===de&&300>pt()-Al?(Me&2)===0&&Zr(t,0):cf|=a,qr===de&&(qr=0)),Ei(t)}function cg(t,n){n===0&&(n=_e()),t=Wa(t,n),t!==null&&(Sn(t,n),Ei(t))}function sS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),cg(t,a)}function oS(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),cg(t,a)}function lS(t,n){return L(t,n)}var Ll=null,Kr=null,vf=!1,Nl=!1,Sf=!1,Ea=0;function Ei(t){t!==Kr&&t.next===null&&(Kr===null?Ll=Kr=t:Kr=Kr.next=t),Nl=!0,vf||(vf=!0,cS())}function ho(t,n){if(!Sf&&Nl){Sf=!0;do for(var a=!1,s=Ll;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var g=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Zt(42|t)+1)-1,f&=u&~(g&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,pg(s,f))}else f=de,f=oe(s,s===Ne?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Oe(s,f)||(a=!0,pg(s,f));s=s.next}while(a);Sf=!1}}function uS(){fg()}function fg(){Nl=vf=!1;var t=0;Ea!==0&&xS()&&(t=Ea);for(var n=pt(),a=null,s=Ll;s!==null;){var u=s.next,f=hg(s,n);f===0?(s.next=null,a===null?Ll=u:a.next=u,u===null&&(Kr=a)):(a=s,(t!==0||(f&3)!==0)&&(Nl=!0)),s=u}ln!==0&&ln!==5||ho(t),Ea!==0&&(Ea=0)}function hg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Zt(f),E=1<<g,B=u[g];B===-1?((E&a)===0||(E&s)!==0)&&(u[g]=sn(E,n)):B<=n&&(t.expiredLanes|=E),f&=~E}if(n=Ne,a=de,a=oe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Re===2||Re===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&T(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Oe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&T(s),aa(a)){case 2:case 8:a=Dt;break;case 32:a=Lt;break;case 268435456:a=At;break;default:a=Lt}return s=dg.bind(null,t),a=L(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&T(s),t.callbackPriority=2,t.callbackNode=null,2}function dg(t,n){if(ln!==0&&ln!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ul()&&t.callbackNode!==a)return null;var s=de;return s=oe(t,t===Ne?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Zm(t,s,n),hg(t,pt()),t.callbackNode!=null&&t.callbackNode===a?dg.bind(null,t):null)}function pg(t,n){if(Ul())return null;Zm(t,n,!0)}function cS(){MS(function(){(Me&6)!==0?L(qt,uS):fg()})}function xf(){if(Ea===0){var t=Pr;t===0&&(t=ht,ht<<=1,(ht&261888)===0&&(ht=256)),Ea=t}return Ea}function mg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Go(""+t)}function gg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function fS(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=mg((u[xn]||null).action),g=s.submitter;g&&(n=(n=g[xn]||null)?mg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var E=new Wo("action","action",null,s,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ea!==0){var B=g?gg(u,g):new FormData(u);Fc(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(E.preventDefault(),B=g?gg(u,g):new FormData(u),Fc(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var yf=0;yf<nc.length;yf++){var Mf=nc[yf],hS=Mf.toLowerCase(),dS=Mf[0].toUpperCase()+Mf.slice(1);fi(hS,"on"+dS)}fi(Yd,"onAnimationEnd"),fi(Zd,"onAnimationIteration"),fi(jd,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(wv,"onTransitionRun"),fi(Dv,"onTransitionStart"),fi(Uv,"onTransitionCancel"),fi(Kd,"onTransitionEnd"),be("onMouseEnter",["mouseout","mouseover"]),be("onMouseLeave",["mouseout","mouseover"]),be("onPointerEnter",["pointerout","pointerover"]),be("onPointerLeave",["pointerout","pointerover"]),le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),le("onBeforeInput",["compositionend","keypress","textInput","paste"]),le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function _g(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var E=s[g],B=E.instance,Q=E.currentTarget;if(E=E.listener,B!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=Q;try{f(u)}catch(ut){Zo(ut)}u.currentTarget=null,f=B}else for(g=0;g<s.length;g++){if(E=s[g],B=E.instance,Q=E.currentTarget,E=E.listener,B!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=Q;try{f(u)}catch(ut){Zo(ut)}u.currentTarget=null,f=B}}}}function fe(t,n){var a=n[Us];a===void 0&&(a=n[Us]=new Set);var s=t+"__bubble";a.has(s)||(vg(n,t,2,!1),a.add(s))}function Ef(t,n,a){var s=0;n&&(s|=4),vg(a,t,s,n)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function Tf(t){if(!t[Ol]){t[Ol]=!0,Qt.forEach(function(a){a!=="selectionchange"&&(pS.has(a)||Ef(a,!1,t),Ef(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ol]||(n[Ol]=!0,Ef("selectionchange",!1,n))}}function vg(t,n,a,s){switch(Yg(n)){case 2:var u=VS;break;case 8:u=XS;break;default:u=Ff}a=u.bind(null,n,a,t),u=void 0,!Xu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Af(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var E=s.stateNode.containerInfo;if(E===u)break;if(g===4)for(g=s.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;E!==null;){if(g=Tt(E),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){s=f=g;continue t}E=E.parentNode}}s=s.return}Ed(function(){var Q=f,ut=Gu(a),dt=[];t:{var J=Qd.get(t);if(J!==void 0){var rt=Wo,Bt=t;switch(t){case"keypress":if(Xo(a)===0)break t;case"keydown":case"keyup":rt=ov;break;case"focusin":Bt="focus",rt=Yu;break;case"focusout":Bt="blur",rt=Yu;break;case"beforeblur":case"afterblur":rt=Yu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=cv;break;case Yd:case Zd:case jd:rt=J0;break;case Kd:rt=hv;break;case"scroll":case"scrollend":rt=Y0;break;case"wheel":rt=pv;break;case"copy":case"cut":case"paste":rt=tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Cd;break;case"toggle":case"beforetoggle":rt=gv}var Kt=(n&4)!==0,Ue=!Kt&&(t==="scroll"||t==="scrollend"),k=Kt?J!==null?J+"Capture":null:J;Kt=[];for(var H=Q,K;H!==null;){var ct=H;if(K=ct.stateNode,ct=ct.tag,ct!==5&&ct!==26&&ct!==27||K===null||k===null||(ct=Ps(H,k),ct!=null&&Kt.push(mo(H,ct,K))),Ue)break;H=H.return}0<Kt.length&&(J=new rt(J,Bt,null,a,ut),dt.push({event:J,listeners:Kt}))}}if((n&7)===0){t:{if(J=t==="mouseover"||t==="pointerover",rt=t==="mouseout"||t==="pointerout",J&&a!==Hu&&(Bt=a.relatedTarget||a.fromElement)&&(Tt(Bt)||Bt[ra]))break t;if((rt||J)&&(J=ut.window===ut?ut:(J=ut.ownerDocument)?J.defaultView||J.parentWindow:window,rt?(Bt=a.relatedTarget||a.toElement,rt=Q,Bt=Bt?Tt(Bt):null,Bt!==null&&(Ue=c(Bt),Kt=Bt.tag,Bt!==Ue||Kt!==5&&Kt!==27&&Kt!==6)&&(Bt=null)):(rt=null,Bt=Q),rt!==Bt)){if(Kt=bd,ct="onMouseLeave",k="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=Cd,ct="onPointerLeave",k="onPointerEnter",H="pointer"),Ue=rt==null?J:Pt(rt),K=Bt==null?J:Pt(Bt),J=new Kt(ct,H+"leave",rt,a,ut),J.target=Ue,J.relatedTarget=K,ct=null,Tt(ut)===Q&&(Kt=new Kt(k,H+"enter",Bt,a,ut),Kt.target=K,Kt.relatedTarget=Ue,ct=Kt),Ue=ct,rt&&Bt)e:{for(Kt=mS,k=rt,H=Bt,K=0,ct=k;ct;ct=Kt(ct))K++;ct=0;for(var Wt=H;Wt;Wt=Kt(Wt))ct++;for(;0<K-ct;)k=Kt(k),K--;for(;0<ct-K;)H=Kt(H),ct--;for(;K--;){if(k===H||H!==null&&k===H.alternate){Kt=k;break e}k=Kt(k),H=Kt(H)}Kt=null}else Kt=null;rt!==null&&Sg(dt,J,rt,Kt,!1),Bt!==null&&Ue!==null&&Sg(dt,Ue,Bt,Kt,!0)}}t:{if(J=Q?Pt(Q):window,rt=J.nodeName&&J.nodeName.toLowerCase(),rt==="select"||rt==="input"&&J.type==="file")var xe=zd;else if(Od(J))if(Bd)xe=bv;else{xe=Tv;var Ht=Ev}else rt=J.nodeName,!rt||rt.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?Q&&Fu(Q.elementType)&&(xe=zd):xe=Av;if(xe&&(xe=xe(t,Q))){Pd(dt,xe,a,ut);break t}Ht&&Ht(t,J,Q),t==="focusout"&&Q&&J.type==="number"&&Q.memoizedProps.value!=null&&Iu(J,"number",J.value)}switch(Ht=Q?Pt(Q):window,t){case"focusin":(Od(Ht)||Ht.contentEditable==="true")&&(Rr=Ht,$u=Q,Xs=null);break;case"focusout":Xs=$u=Rr=null;break;case"mousedown":tc=!0;break;case"contextmenu":case"mouseup":case"dragend":tc=!1,Wd(dt,a,ut);break;case"selectionchange":if(Cv)break;case"keydown":case"keyup":Wd(dt,a,ut)}var ae;if(ju)t:{switch(t){case"compositionstart":var pe="onCompositionStart";break t;case"compositionend":pe="onCompositionEnd";break t;case"compositionupdate":pe="onCompositionUpdate";break t}pe=void 0}else br?Ld(t,a)&&(pe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(wd&&a.locale!=="ko"&&(br||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&br&&(ae=Td()):(oa=ut,ku="value"in oa?oa.value:oa.textContent,br=!0)),Ht=Pl(Q,pe),0<Ht.length&&(pe=new Rd(pe,t,null,a,ut),dt.push({event:pe,listeners:Ht}),ae?pe.data=ae:(ae=Nd(a),ae!==null&&(pe.data=ae)))),(ae=vv?Sv(t,a):xv(t,a))&&(pe=Pl(Q,"onBeforeInput"),0<pe.length&&(Ht=new Rd("onBeforeInput","beforeinput",null,a,ut),dt.push({event:Ht,listeners:pe}),Ht.data=ae)),fS(dt,t,Q,a,ut)}_g(dt,n)})}function mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Pl(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ps(t,a),u!=null&&s.unshift(mo(t,u,f)),u=Ps(t,n),u!=null&&s.push(mo(t,u,f))),t.tag===3)return s;t=t.return}return[]}function mS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Sg(t,n,a,s,u){for(var f=n._reactName,g=[];a!==null&&a!==s;){var E=a,B=E.alternate,Q=E.stateNode;if(E=E.tag,B!==null&&B===s)break;E!==5&&E!==26&&E!==27||Q===null||(B=Q,u?(Q=Ps(a,f),Q!=null&&g.unshift(mo(a,Q,B))):u||(Q=Ps(a,f),Q!=null&&g.push(mo(a,Q,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var gS=/\r\n?/g,_S=/\u0000|\uFFFD/g;function xg(t){return(typeof t=="string"?t:""+t).replace(gS,`
`).replace(_S,"")}function yg(t,n){return n=xg(n),xg(t)===n}function De(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Er(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Er(t,""+s);break;case"className":me(t,"class",s);break;case"tabIndex":me(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":me(t,a,s);break;case"style":yd(t,s,f);break;case"data":if(n!=="object"){me(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&De(t,n,"name",u.name,u,null),De(t,n,"formEncType",u.formEncType,u,null),De(t,n,"formMethod",u.formMethod,u,null),De(t,n,"formTarget",u.formTarget,u,null)):(De(t,n,"encType",u.encType,u,null),De(t,n,"method",u.method,u,null),De(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ri);break;case"onScroll":s!=null&&fe("scroll",t);break;case"onScrollEnd":s!=null&&fe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Go(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":fe("beforetoggle",t),fe("toggle",t),ke(t,"popover",s);break;case"xlinkActuate":Ye(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ye(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ye(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ye(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ye(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ye(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ke(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=W0.get(a)||a,ke(t,a,s))}}function bf(t,n,a,s,u,f){switch(a){case"style":yd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Er(t,s):(typeof s=="number"||typeof s=="bigint")&&Er(t,""+s);break;case"onScroll":s!=null&&fe("scroll",t);break;case"onScrollEnd":s!=null&&fe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ri);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):ke(t,a,s)}}}function vn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",t),fe("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:De(t,n,f,g,a,null)}}u&&De(t,n,"srcSet",a.srcSet,a,null),s&&De(t,n,"src",a.src,a,null);return;case"input":fe("invalid",t);var E=f=g=u=null,B=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":u=ut;break;case"type":g=ut;break;case"checked":B=ut;break;case"defaultChecked":Q=ut;break;case"value":f=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:De(t,n,s,ut,a,null)}}Os(t,f,E,B,Q,g,u,!1);return;case"select":fe("invalid",t),s=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":f=E;break;case"defaultValue":g=E;break;case"multiple":s=E;default:De(t,n,u,E,a,null)}n=f,a=g,t.multiple=!!s,n!=null?Mr(t,!!s,n,!1):a!=null&&Mr(t,!!s,a,!0);return;case"textarea":fe("invalid",t),f=u=s=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":s=E;break;case"defaultValue":u=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:De(t,n,g,E,a,null)}Sd(t,s,u,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(s=a[B],s!=null)&&(B==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":De(t,n,B,s,a,null));return;case"dialog":fe("beforetoggle",t),fe("toggle",t),fe("cancel",t),fe("close",t);break;case"iframe":case"object":fe("load",t);break;case"video":case"audio":for(s=0;s<po.length;s++)fe(po[s],t);break;case"image":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"embed":case"source":case"link":fe("error",t),fe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:De(t,n,Q,s,a,null)}return;default:if(Fu(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&bf(t,n,ut,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&De(t,n,E,s,a,null))}function vS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,E=null,B=null,Q=null,ut=null;for(rt in a){var dt=a[rt];if(a.hasOwnProperty(rt)&&dt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":B=dt;default:s.hasOwnProperty(rt)||De(t,n,rt,null,s,dt)}}for(var J in s){var rt=s[J];if(dt=a[J],s.hasOwnProperty(J)&&(rt!=null||dt!=null))switch(J){case"type":f=rt;break;case"name":u=rt;break;case"checked":Q=rt;break;case"defaultChecked":ut=rt;break;case"value":g=rt;break;case"defaultValue":E=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==dt&&De(t,n,J,rt,s,dt)}}Ns(t,g,E,B,Q,ut,f,u);return;case"select":rt=g=E=J=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":rt=B;default:s.hasOwnProperty(f)||De(t,n,f,null,s,B)}for(u in s)if(f=s[u],B=a[u],s.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":J=f;break;case"defaultValue":E=f;break;case"multiple":g=f;default:f!==B&&De(t,n,u,f,s,B)}n=E,a=g,s=rt,J!=null?Mr(t,!!a,J,!1):!!s!=!!a&&(n!=null?Mr(t,!!a,n,!0):Mr(t,!!a,a?[]:"",!1));return;case"textarea":rt=J=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:De(t,n,E,null,s,u)}for(g in s)if(u=s[g],f=a[g],s.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":J=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&De(t,n,g,u,s,f)}vd(t,J,rt);return;case"option":for(var Bt in a)J=a[Bt],a.hasOwnProperty(Bt)&&J!=null&&!s.hasOwnProperty(Bt)&&(Bt==="selected"?t.selected=!1:De(t,n,Bt,null,s,J));for(B in s)J=s[B],rt=a[B],s.hasOwnProperty(B)&&J!==rt&&(J!=null||rt!=null)&&(B==="selected"?t.selected=J&&typeof J!="function"&&typeof J!="symbol":De(t,n,B,J,s,rt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)J=a[Kt],a.hasOwnProperty(Kt)&&J!=null&&!s.hasOwnProperty(Kt)&&De(t,n,Kt,null,s,J);for(Q in s)if(J=s[Q],rt=a[Q],s.hasOwnProperty(Q)&&J!==rt&&(J!=null||rt!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(r(137,n));break;default:De(t,n,Q,J,s,rt)}return;default:if(Fu(n)){for(var Ue in a)J=a[Ue],a.hasOwnProperty(Ue)&&J!==void 0&&!s.hasOwnProperty(Ue)&&bf(t,n,Ue,void 0,s,J);for(ut in s)J=s[ut],rt=a[ut],!s.hasOwnProperty(ut)||J===rt||J===void 0&&rt===void 0||bf(t,n,ut,J,s,rt);return}}for(var k in a)J=a[k],a.hasOwnProperty(k)&&J!=null&&!s.hasOwnProperty(k)&&De(t,n,k,null,s,J);for(dt in s)J=s[dt],rt=a[dt],!s.hasOwnProperty(dt)||J===rt||J==null&&rt==null||De(t,n,dt,J,s,rt)}function Mg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function SS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,g=u.initiatorType,E=u.duration;if(f&&E&&Mg(g)){for(g=0,E=u.responseEnd,s+=1;s<a.length;s++){var B=a[s],Q=B.startTime;if(Q>E)break;var ut=B.transferSize,dt=B.initiatorType;ut&&Mg(dt)&&(B=B.responseEnd,g+=ut*(B<E?1:(E-Q)/(B-Q)))}if(--s,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Rf=null,Cf=null;function zl(t){return t.nodeType===9?t:t.ownerDocument}function Eg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function wf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Df=null;function xS(){var t=window.event;return t&&t.type==="popstate"?t===Df?!1:(Df=t,!0):(Df=null,!1)}var Ag=typeof setTimeout=="function"?setTimeout:void 0,yS=typeof clearTimeout=="function"?clearTimeout:void 0,bg=typeof Promise=="function"?Promise:void 0,MS=typeof queueMicrotask=="function"?queueMicrotask:typeof bg<"u"?function(t){return bg.resolve(null).then(t).catch(ES)}:Ag;function ES(t){setTimeout(function(){throw t})}function Ta(t){return t==="head"}function Rg(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),ts(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")go(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,go(a);for(var f=a.firstChild;f;){var g=f.nextSibling,E=f.nodeName;f[et]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&go(t.ownerDocument.body);a=u}while(a);ts(n)}function Cg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Uf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Uf(a),Y(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function TS(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[et])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ai(t.nextSibling),t===null)break}return null}function AS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ai(t.nextSibling),t===null))return null;return t}function wg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ai(t.nextSibling),t===null))return null;return t}function Lf(t){return t.data==="$?"||t.data==="$~"}function Nf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function bS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ai(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Of=null;function Dg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ai(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Ug(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Lg(t,n,a){switch(n=zl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function go(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Y(t)}var ri=new Map,Ng=new Set;function Bl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Xi=W.d;W.d={f:RS,r:CS,D:wS,C:DS,L:US,m:LS,X:OS,S:NS,M:PS};function RS(){var t=Xi.f(),n=Cl();return t||n}function CS(t){var n=wt(t);n!==null&&n.tag===5&&n.type==="form"?Kp(n):Xi.r(t)}var Qr=typeof document>"u"?null:document;function Og(t,n,a){var s=Qr;if(s&&typeof n=="string"&&n){var u=En(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ng.has(u)||(Ng.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),vn(n,"link",t),zt(n),s.head.appendChild(n)))}}function wS(t){Xi.D(t),Og("dns-prefetch",t,null)}function DS(t,n){Xi.C(t,n),Og("preconnect",t,n)}function US(t,n,a){Xi.L(t,n,a);var s=Qr;if(s&&t&&n){var u='link[rel="preload"][as="'+En(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+En(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+En(a.imageSizes)+'"]')):u+='[href="'+En(t)+'"]';var f=u;switch(n){case"style":f=Jr(t);break;case"script":f=$r(t)}ri.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ri.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(_o(f))||n==="script"&&s.querySelector(vo(f))||(n=s.createElement("link"),vn(n,"link",t),zt(n),s.head.appendChild(n)))}}function LS(t,n){Xi.m(t,n);var a=Qr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+En(s)+'"][href="'+En(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=$r(t)}if(!ri.has(f)&&(t=v({rel:"modulepreload",href:t},n),ri.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}s=a.createElement("link"),vn(s,"link",t),zt(s),a.head.appendChild(s)}}}function NS(t,n,a){Xi.S(t,n,a);var s=Qr;if(s&&t){var u=Nt(s).hoistableStyles,f=Jr(t);n=n||"default";var g=u.get(f);if(!g){var E={loading:0,preload:null};if(g=s.querySelector(_o(f)))E.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ri.get(f))&&Pf(t,a);var B=g=s.createElement("link");zt(B),vn(B,"link",t),B._p=new Promise(function(Q,ut){B.onload=Q,B.onerror=ut}),B.addEventListener("load",function(){E.loading|=1}),B.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Il(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:E},u.set(f,g)}}}function OS(t,n){Xi.X(t,n);var a=Qr;if(a&&t){var s=Nt(a).hoistableScripts,u=$r(t),f=s.get(u);f||(f=a.querySelector(vo(u)),f||(t=v({src:t,async:!0},n),(n=ri.get(u))&&zf(t,n),f=a.createElement("script"),zt(f),vn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function PS(t,n){Xi.M(t,n);var a=Qr;if(a&&t){var s=Nt(a).hoistableScripts,u=$r(t),f=s.get(u);f||(f=a.querySelector(vo(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=ri.get(u))&&zf(t,n),f=a.createElement("script"),zt(f),vn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Pg(t,n,a,s){var u=(u=xt.current)?Bl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Jr(a.href),a=Nt(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Jr(a.href);var f=Nt(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(_o(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ri.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(t,a),f||zS(u,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=$r(a),a=Nt(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Jr(t){return'href="'+En(t)+'"'}function _o(t){return'link[rel="stylesheet"]['+t+"]"}function zg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function zS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),vn(n,"link",a),zt(n),t.head.appendChild(n))}function $r(t){return'[src="'+En(t)+'"]'}function vo(t){return"script[async]"+t}function Bg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+En(a.href)+'"]');if(s)return n.instance=s,zt(s),s;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),zt(s),vn(s,"style",u),Il(s,a.precedence,t),n.instance=s;case"stylesheet":u=Jr(a.href);var f=t.querySelector(_o(u));if(f)return n.state.loading|=4,n.instance=f,zt(f),f;s=zg(a),(u=ri.get(u))&&Pf(s,u),f=(t.ownerDocument||t).createElement("link"),zt(f);var g=f;return g._p=new Promise(function(E,B){g.onload=E,g.onerror=B}),vn(f,"link",s),n.state.loading|=4,Il(f,a.precedence,t),n.instance=f;case"script":return f=$r(a.src),(u=t.querySelector(vo(f)))?(n.instance=u,zt(u),u):(s=a,(u=ri.get(f))&&(s=v({},a),zf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),zt(u),vn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Il(s,a.precedence,t));return n.instance}function Il(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,g=0;g<s.length;g++){var E=s[g];if(E.dataset.precedence===n)f=E;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Pf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Fl=null;function Ig(t,n,a){if(Fl===null){var s=new Map,u=Fl=new Map;u.set(a,s)}else u=Fl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[et]||f[Qe]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var E=s.get(g);E?E.push(f):s.set(g,[f])}}return s}function Fg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function BS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Hg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function IS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Jr(s.href),f=n.querySelector(_o(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Hl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,zt(f);return}f=n.ownerDocument||n,s=zg(s),(u=ri.get(u))&&Pf(s,u),f=f.createElement("link"),zt(f);var g=f;g._p=new Promise(function(E,B){g.onload=E,g.onerror=B}),vn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Hl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Bf=0;function FS(t,n){return t.stylesheets&&t.count===0&&Vl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Vl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Bf===0&&(Bf=62500*SS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Vl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Bf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Hl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Gl=null;function Vl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gl=new Map,n.forEach(HS,t),Gl=null,Hl.call(t))}function HS(t,n){if(!(n.state.loading&4)){var a=Gl.get(t);if(a)var s=a.get(null);else{a=new Map,Gl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,u),a.set(g,u),this.count++,s=Hl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var So={$$typeof:D,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function GS(t,n,a,s,u,f,g,E,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gn(0),this.hiddenUpdates=Gn(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Gg(t,n,a,s,u,f,g,E,B,Q,ut,dt){return t=new GS(t,n,a,g,B,Q,ut,dt,E),n=1,f===!0&&(n|=24),f=Xn(3,null,null,n),t.current=f,f.stateNode=t,n=mc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Sc(f),t}function Vg(t){return t?(t=Dr,t):Dr}function Xg(t,n,a,s,u,f){u=Vg(u),s.context===null?s.context=u:s.pendingContext=u,s=da(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=pa(t,s,n),a!==null&&(zn(a,t,n),Ks(a,t,n))}function kg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function If(t,n){kg(t,n),(t=t.alternate)&&kg(t,n)}function Wg(t){if(t.tag===13||t.tag===31){var n=Wa(t,67108864);n!==null&&zn(n,t,67108864),If(t,67108864)}}function qg(t){if(t.tag===13||t.tag===31){var n=Zn();n=yr(n);var a=Wa(t,n);a!==null&&zn(a,t,n),If(t,n)}}var Xl=!0;function VS(t,n,a,s){var u=P.T;P.T=null;var f=W.p;try{W.p=2,Ff(t,n,a,s)}finally{W.p=f,P.T=u}}function XS(t,n,a,s){var u=P.T;P.T=null;var f=W.p;try{W.p=8,Ff(t,n,a,s)}finally{W.p=f,P.T=u}}function Ff(t,n,a,s){if(Xl){var u=Hf(s);if(u===null)Af(t,n,s,kl,a),Zg(t,s);else if(WS(u,t,n,a,s))s.stopPropagation();else if(Zg(t,s),n&4&&-1<kS.indexOf(t)){for(;u!==null;){var f=wt(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=kt(f.pendingLanes);if(g!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var B=1<<31-Zt(g);E.entanglements[1]|=B,g&=~B}Ei(f),(Me&6)===0&&(bl=pt()+500,ho(0))}}break;case 31:case 13:E=Wa(f,2),E!==null&&zn(E,f,2),Cl(),If(f,2)}if(f=Hf(s),f===null&&Af(t,n,s,kl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Af(t,n,s,null,a)}}function Hf(t){return t=Gu(t),Gf(t)}var kl=null;function Gf(t){if(kl=null,t=Tt(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return kl=t,null}function Yg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vt()){case qt:return 2;case Dt:return 8;case Lt:case ne:return 32;case At:return 268435456;default:return 32}default:return 32}}var Vf=!1,Aa=null,ba=null,Ra=null,xo=new Map,yo=new Map,Ca=[],kS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zg(t,n){switch(t){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(n.pointerId)}}function Mo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=wt(n),n!==null&&Wg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function WS(t,n,a,s,u){switch(n){case"focusin":return Aa=Mo(Aa,t,n,a,s,u),!0;case"dragenter":return ba=Mo(ba,t,n,a,s,u),!0;case"mouseover":return Ra=Mo(Ra,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return xo.set(f,Mo(xo.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,yo.set(f,Mo(yo.get(f)||null,t,n,a,s,u)),!0}return!1}function jg(t){var n=Tt(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ga(t.priority,function(){qg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ga(t.priority,function(){qg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Hf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Hu=s,a.target.dispatchEvent(s),Hu=null}else return n=wt(a),n!==null&&Wg(n),t.blockedOn=a,!1;n.shift()}return!0}function Kg(t,n,a){Wl(t)&&a.delete(n)}function qS(){Vf=!1,Aa!==null&&Wl(Aa)&&(Aa=null),ba!==null&&Wl(ba)&&(ba=null),Ra!==null&&Wl(Ra)&&(Ra=null),xo.forEach(Kg),yo.forEach(Kg)}function ql(t,n){t.blockedOn===n&&(t.blockedOn=null,Vf||(Vf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,qS)))}var Yl=null;function Qg(t){Yl!==t&&(Yl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Yl===t&&(Yl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Gf(s||a)===null)continue;break}var f=wt(a);f!==null&&(t.splice(n,3),n-=3,Fc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function ts(t){function n(B){return ql(B,t)}Aa!==null&&ql(Aa,t),ba!==null&&ql(ba,t),Ra!==null&&ql(Ra,t),xo.forEach(n),yo.forEach(n);for(var a=0;a<Ca.length;a++){var s=Ca[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)jg(a),a.blockedOn===null&&Ca.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],g=u[xn]||null;if(typeof f=="function")g||Qg(a);else if(g){var E=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[xn]||null)E=g.formAction;else if(Gf(u)!==null)continue}else E=g.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),Qg(a)}}}function Jg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Xf(t){this._internalRoot=t}Zl.prototype.render=Xf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Zn();Xg(a,s,t,n,null,null)},Zl.prototype.unmount=Xf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Xg(t.current,2,null,t,null,null),Cl(),n[ra]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ds();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,t),a===0&&jg(t)}};var $g=e.version;if($g!=="19.2.3")throw Error(r(527,$g,"19.2.3"));W.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var YS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{jt=jl.inject(YS),Ct=jl}catch{}}return To.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=sm,f=om,g=lm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Gg(t,1,!1,null,null,a,s,null,u,f,g,Jg),t[ra]=n.current,Tf(t),new Xf(n)},To.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=sm,g=om,E=lm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Gg(t,1,!0,n,a??null,s,u,B,f,g,E,Jg),n.context=Vg(null),a=n.current,s=Zn(),s=yr(s),u=da(s),u.callback=null,pa(a,u,s),a=s,n.current.lanes=a,Sn(n,a),Ei(n),t[ra]=n.current,Tf(t),new Zl(n)},To.version="19.2.3",To}var u_;function ix(){if(u_)return qf.exports;u_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),qf.exports=nx(),qf.exports}var ax=ix();const ld="168",rx=0,c_=1,sx=2,f0=1,ox=2,ji=3,Fa=0,Fn=1,Ki=2,Ba=0,Ss=1,Ah=2,f_=3,h_=4,lx=5,dr=100,ux=101,cx=102,fx=103,hx=104,dx=200,px=201,mx=202,gx=203,bh=204,Rh=205,_x=206,vx=207,Sx=208,xx=209,yx=210,Mx=211,Ex=212,Tx=213,Ax=214,bx=0,Rx=1,Cx=2,Ru=3,wx=4,Dx=5,Ux=6,Lx=7,h0=0,Nx=1,Ox=2,Ia=0,Px=1,zx=2,Bx=3,Ix=4,Fx=5,Hx=6,Gx=7,d0=300,Ms=301,Es=302,Ch=303,wh=304,Nu=306,Dh=1e3,mr=1001,Uh=1002,li=1003,Vx=1004,Kl=1005,_i=1006,Kf=1007,gr=1008,ta=1009,p0=1010,m0=1011,No=1012,ud=1013,vr=1014,Qi=1015,Oo=1016,cd=1017,fd=1018,Ts=1020,g0=35902,_0=1021,v0=1022,vi=1023,S0=1024,x0=1025,xs=1026,As=1027,y0=1028,hd=1029,M0=1030,dd=1031,pd=1033,yu=33776,Mu=33777,Eu=33778,Tu=33779,Lh=35840,Nh=35841,Oh=35842,Ph=35843,zh=36196,Bh=37492,Ih=37496,Fh=37808,Hh=37809,Gh=37810,Vh=37811,Xh=37812,kh=37813,Wh=37814,qh=37815,Yh=37816,Zh=37817,jh=37818,Kh=37819,Qh=37820,Jh=37821,Au=36492,$h=36494,td=36495,E0=36283,ed=36284,nd=36285,id=36286,Xx=3200,kx=3201,Wx=0,qx=1,za="",Ti="srgb",Ha="srgb-linear",md="display-p3",Ou="display-p3-linear",Cu="linear",Ie="srgb",wu="rec709",Du="p3",es=7680,d_=519,Yx=512,Zx=513,jx=514,T0=515,Kx=516,Qx=517,Jx=518,$x=519,p_=35044,m_="300 es",Ji=2e3,Uu=2001;class Rs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qf=Math.PI/180,ad=180/Math.PI;function Po(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function In(o,e,i){return Math.max(e,Math.min(i,o))}function ty(o,e){return(o%e+e)%e}function Jf(o,e,i){return(1-i)*o+i*e}function Ao(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(e=0,i=0){Ae.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(In(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(e,i,r,l,c,h,d,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],v=r[7],x=r[2],M=r[5],A=r[8],b=l[0],y=l[3],S=l[6],z=l[1],D=l[4],N=l[7],$=l[2],I=l[5],O=l[8];return c[0]=h*b+d*z+m*$,c[3]=h*y+d*D+m*I,c[6]=h*S+d*N+m*O,c[1]=p*b+_*z+v*$,c[4]=p*y+_*D+v*I,c[7]=p*S+_*N+v*O,c[2]=x*b+M*z+A*$,c[5]=x*y+M*D+A*I,c[8]=x*S+M*N+A*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-r*c*_+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],v=_*h-d*p,x=d*m-_*c,M=p*c-h*m,A=i*v+r*x+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=v*b,e[1]=(l*p-_*r)*b,e[2]=(d*r-l*h)*b,e[3]=x*b,e[4]=(_*i-l*m)*b,e[5]=(l*c-d*i)*b,e[6]=M*b,e[7]=(r*m-p*i)*b,e[8]=(h*i-r*c)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply($f.makeScale(e,i)),this}rotate(e){return this.premultiply($f.makeRotation(-e)),this}translate(e,i){return this.premultiply($f.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $f=new se;function A0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Lu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ey(){const o=Lu("canvas");return o.style.display="block",o}const g_={};function Lo(o){o in g_||(g_[o]=!0,console.warn(o))}function ny(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const __=new se().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),v_=new se().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bo={[Ha]:{transfer:Cu,primaries:wu,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o,fromReference:o=>o},[Ti]:{transfer:Ie,primaries:wu,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Ou]:{transfer:Cu,primaries:Du,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.applyMatrix3(v_),fromReference:o=>o.applyMatrix3(__)},[md]:{transfer:Ie,primaries:Du,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.convertSRGBToLinear().applyMatrix3(v_),fromReference:o=>o.applyMatrix3(__).convertLinearToSRGB()}},iy=new Set([Ha,Ou]),Ee={enabled:!0,_workingColorSpace:Ha,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!iy.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=bo[e].toReference,l=bo[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return bo[o].primaries},getTransfer:function(o){return o===za?Cu:bo[o].transfer},getLuminanceCoefficients:function(o,e=this._workingColorSpace){return o.fromArray(bo[e].luminanceCoefficients)}};function ys(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function th(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ns;class ay{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ns===void 0&&(ns=Lu("canvas")),ns.width=e.width,ns.height=e.height;const r=ns.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ns}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Lu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ys(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ys(i[r]/255)*255):i[r]=ys(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ry=0;class b0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Po(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(eh(l[h].image)):c.push(eh(l[h]))}else c=eh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function eh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ay.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sy=0;class wn extends Rs{constructor(e=wn.DEFAULT_IMAGE,i=wn.DEFAULT_MAPPING,r=mr,l=mr,c=_i,h=gr,d=vi,m=ta,p=wn.DEFAULT_ANISOTROPY,_=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Po(),this.name="",this.source=new b0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==d0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dh:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case Uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dh:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case Uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=d0;wn.DEFAULT_ANISOTROPY=1;class pn{constructor(e=0,i=0,r=0,l=1){pn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],_=m[4],v=m[8],x=m[1],M=m[5],A=m[9],b=m[2],y=m[6],S=m[10];if(Math.abs(_-x)<.01&&Math.abs(v-b)<.01&&Math.abs(A-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+b)<.1&&Math.abs(A+y)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,N=(M+1)/2,$=(S+1)/2,I=(_+x)/4,O=(v+b)/4,Z=(A+y)/4;return D>N&&D>$?D<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(D),l=I/r,c=O/r):N>$?N<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),r=I/l,c=Z/l):$<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt($),r=O/c,l=Z/c),this.set(r,l,c,i),this}let z=Math.sqrt((y-A)*(y-A)+(v-b)*(v-b)+(x-_)*(x-_));return Math.abs(z)<.001&&(z=1),this.x=(y-A)/z,this.y=(v-b)/z,this.z=(x-_)/z,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oy extends Rs{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new pn(0,0,e,i),this.scissorTest=!1,this.viewport=new pn(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new wn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new b0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends oy{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class R0 extends wn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=li,this.minFilter=li,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ly extends wn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=li,this.minFilter=li,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],v=r[l+3];const x=c[h+0],M=c[h+1],A=c[h+2],b=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=M,e[i+2]=A,e[i+3]=b;return}if(v!==b||m!==x||p!==M||_!==A){let y=1-d;const S=m*x+p*M+_*A+v*b,z=S>=0?1:-1,D=1-S*S;if(D>Number.EPSILON){const $=Math.sqrt(D),I=Math.atan2($,S*z);y=Math.sin(y*I)/$,d=Math.sin(d*I)/$}const N=d*z;if(m=m*y+x*N,p=p*y+M*N,_=_*y+A*N,v=v*y+b*N,y===1-d){const $=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=$,p*=$,_*=$,v*=$}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],v=c[h],x=c[h+1],M=c[h+2],A=c[h+3];return e[i]=d*A+_*v+m*M-p*x,e[i+1]=m*A+_*x+p*v-d*M,e[i+2]=p*A+_*M+d*x-m*v,e[i+3]=_*A-d*v-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),v=d(c/2),x=m(r/2),M=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=x*_*v+p*M*A,this._y=p*M*v-x*_*A,this._z=p*_*A+x*M*v,this._w=p*_*v-x*M*A;break;case"YXZ":this._x=x*_*v+p*M*A,this._y=p*M*v-x*_*A,this._z=p*_*A-x*M*v,this._w=p*_*v+x*M*A;break;case"ZXY":this._x=x*_*v-p*M*A,this._y=p*M*v+x*_*A,this._z=p*_*A+x*M*v,this._w=p*_*v-x*M*A;break;case"ZYX":this._x=x*_*v-p*M*A,this._y=p*M*v+x*_*A,this._z=p*_*A-x*M*v,this._w=p*_*v+x*M*A;break;case"YZX":this._x=x*_*v+p*M*A,this._y=p*M*v+x*_*A,this._z=p*_*A-x*M*v,this._w=p*_*v-x*M*A;break;case"XZY":this._x=x*_*v-p*M*A,this._y=p*M*v-x*_*A,this._z=p*_*A+x*M*v,this._w=p*_*v+x*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],x=r+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(In(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-r*p,this._z=c*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),v=Math.sin((1-i)*_)/p,x=Math.sin(i*_)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(e=0,i=0,r=0){it.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(S_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(S_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),_=2*(d*i-c*l),v=2*(c*r-h*i);return this.x=i+m*p+h*v-d*_,this.y=r+m*_+d*p-c*v,this.z=l+m*v+c*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(In(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nh=new it,S_=new zo;class Bo{constructor(e=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(pi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(pi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=pi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,pi):pi.fromBufferAttribute(c,h),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ql.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ql.copy(r.boundingBox)),Ql.applyMatrix4(e.matrixWorld),this.union(Ql)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),Jl.subVectors(this.max,Ro),is.subVectors(e.a,Ro),as.subVectors(e.b,Ro),rs.subVectors(e.c,Ro),Da.subVectors(as,is),Ua.subVectors(rs,as),ar.subVectors(is,rs);let i=[0,-Da.z,Da.y,0,-Ua.z,Ua.y,0,-ar.z,ar.y,Da.z,0,-Da.x,Ua.z,0,-Ua.x,ar.z,0,-ar.x,-Da.y,Da.x,0,-Ua.y,Ua.x,0,-ar.y,ar.x,0];return!ih(i,is,as,rs,Jl)||(i=[1,0,0,0,1,0,0,0,1],!ih(i,is,as,rs,Jl))?!1:($l.crossVectors(Da,Ua),i=[$l.x,$l.y,$l.z],ih(i,is,as,rs,Jl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ki=[new it,new it,new it,new it,new it,new it,new it,new it],pi=new it,Ql=new Bo,is=new it,as=new it,rs=new it,Da=new it,Ua=new it,ar=new it,Ro=new it,Jl=new it,$l=new it,rr=new it;function ih(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){rr.fromArray(o,c);const d=l.x*Math.abs(rr.x)+l.y*Math.abs(rr.y)+l.z*Math.abs(rr.z),m=e.dot(rr),p=i.dot(rr),_=r.dot(rr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const uy=new Bo,Co=new it,ah=new it;class Pu{constructor(e=new it,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):uy.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Co,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(ah)),this.expandByPoint(Co.copy(e.center).sub(ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wi=new it,rh=new it,tu=new it,La=new it,sh=new it,eu=new it,oh=new it;class C0{constructor(e=new it,i=new it(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Wi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,i),Wi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){rh.copy(e).add(i).multiplyScalar(.5),tu.copy(i).sub(e).normalize(),La.copy(this.origin).sub(rh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(tu),d=La.dot(this.direction),m=-La.dot(tu),p=La.lengthSq(),_=Math.abs(1-h*h);let v,x,M,A;if(_>0)if(v=h*m-d,x=h*d-m,A=c*_,v>=0)if(x>=-A)if(x<=A){const b=1/_;v*=b,x*=b,M=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=c,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x<=-A?(v=Math.max(0,-(-h*c+d)),x=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+x*(x+2*m)+p):x<=A?(v=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(v=Math.max(0,-(h*c+d)),x=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+x*(x+2*m)+p);else x=h>0?-c:c,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(rh).addScaledVector(tu,x),M}intersectSphere(e,i){Wi.subVectors(e.center,this.origin);const r=Wi.dot(this.direction),l=Wi.dot(Wi)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),_>=0?(c=(e.min.y-x.y)*_,h=(e.max.y-x.y)*_):(c=(e.max.y-x.y)*_,h=(e.min.y-x.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,i,r,l,c){sh.subVectors(i,e),eu.subVectors(r,e),oh.crossVectors(sh,eu);let h=this.direction.dot(oh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;La.subVectors(this.origin,e);const m=d*this.direction.dot(eu.crossVectors(La,eu));if(m<0)return null;const p=d*this.direction.dot(sh.cross(La));if(p<0||m+p>h)return null;const _=-d*La.dot(oh);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,i,r,l,c,h,d,m,p,_,v,x,M,A,b,y){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,_,v,x,M,A,b,y)}set(e,i,r,l,c,h,d,m,p,_,v,x,M,A,b,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=l,S[1]=c,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=_,S[10]=v,S[14]=x,S[3]=M,S[7]=A,S[11]=b,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ss.setFromMatrixColumn(e,0).length(),c=1/ss.setFromMatrixColumn(e,1).length(),h=1/ss.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=h*_,M=h*v,A=d*_,b=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=M+A*p,i[5]=x-b*p,i[9]=-d*m,i[2]=b-x*p,i[6]=A+M*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*_,M=m*v,A=p*_,b=p*v;i[0]=x+b*d,i[4]=A*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=M*d-A,i[6]=b+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*_,M=m*v,A=p*_,b=p*v;i[0]=x-b*d,i[4]=-h*v,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*_,i[9]=b-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*_,M=h*v,A=d*_,b=d*v;i[0]=m*_,i[4]=A*p-M,i[8]=x*p+b,i[1]=m*v,i[5]=b*p+x,i[9]=M*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,M=h*p,A=d*m,b=d*p;i[0]=m*_,i[4]=b-x*v,i[8]=A*v+M,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*v+A,i[10]=x-b*v}else if(e.order==="XZY"){const x=h*m,M=h*p,A=d*m,b=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=x*v+b,i[5]=h*_,i[9]=M*v-A,i[2]=A*v-M,i[6]=d*_,i[10]=b*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cy,e,fy)}lookAt(e,i,r){const l=this.elements;return jn.subVectors(e,i),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Na.crossVectors(r,jn),Na.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Na.crossVectors(r,jn)),Na.normalize(),nu.crossVectors(jn,Na),l[0]=Na.x,l[4]=nu.x,l[8]=jn.x,l[1]=Na.y,l[5]=nu.y,l[9]=jn.y,l[2]=Na.z,l[6]=nu.z,l[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],v=r[5],x=r[9],M=r[13],A=r[2],b=r[6],y=r[10],S=r[14],z=r[3],D=r[7],N=r[11],$=r[15],I=l[0],O=l[4],Z=l[8],w=l[12],C=l[1],G=l[5],lt=l[9],st=l[13],mt=l[2],ft=l[6],P=l[10],W=l[14],j=l[3],yt=l[7],Et=l[11],U=l[15];return c[0]=h*I+d*C+m*mt+p*j,c[4]=h*O+d*G+m*ft+p*yt,c[8]=h*Z+d*lt+m*P+p*Et,c[12]=h*w+d*st+m*W+p*U,c[1]=_*I+v*C+x*mt+M*j,c[5]=_*O+v*G+x*ft+M*yt,c[9]=_*Z+v*lt+x*P+M*Et,c[13]=_*w+v*st+x*W+M*U,c[2]=A*I+b*C+y*mt+S*j,c[6]=A*O+b*G+y*ft+S*yt,c[10]=A*Z+b*lt+y*P+S*Et,c[14]=A*w+b*st+y*W+S*U,c[3]=z*I+D*C+N*mt+$*j,c[7]=z*O+D*G+N*ft+$*yt,c[11]=z*Z+D*lt+N*P+$*Et,c[15]=z*w+D*st+N*W+$*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],v=e[6],x=e[10],M=e[14],A=e[3],b=e[7],y=e[11],S=e[15];return A*(+c*m*v-l*p*v-c*d*x+r*p*x+l*d*M-r*m*M)+b*(+i*m*M-i*p*x+c*h*x-l*h*M+l*p*_-c*m*_)+y*(+i*p*v-i*d*M-c*h*v+r*h*M+c*d*_-r*p*_)+S*(-l*d*_-i*m*v+i*d*x+l*h*v-r*h*x+r*m*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],v=e[9],x=e[10],M=e[11],A=e[12],b=e[13],y=e[14],S=e[15],z=v*y*p-b*x*p+b*m*M-d*y*M-v*m*S+d*x*S,D=A*x*p-_*y*p-A*m*M+h*y*M+_*m*S-h*x*S,N=_*b*p-A*v*p+A*d*M-h*b*M-_*d*S+h*v*S,$=A*v*m-_*b*m-A*d*x+h*b*x+_*d*y-h*v*y,I=i*z+r*D+l*N+c*$;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return e[0]=z*O,e[1]=(b*x*c-v*y*c-b*l*M+r*y*M+v*l*S-r*x*S)*O,e[2]=(d*y*c-b*m*c+b*l*p-r*y*p-d*l*S+r*m*S)*O,e[3]=(v*m*c-d*x*c-v*l*p+r*x*p+d*l*M-r*m*M)*O,e[4]=D*O,e[5]=(_*y*c-A*x*c+A*l*M-i*y*M-_*l*S+i*x*S)*O,e[6]=(A*m*c-h*y*c-A*l*p+i*y*p+h*l*S-i*m*S)*O,e[7]=(h*x*c-_*m*c+_*l*p-i*x*p-h*l*M+i*m*M)*O,e[8]=N*O,e[9]=(A*v*c-_*b*c-A*r*M+i*b*M+_*r*S-i*v*S)*O,e[10]=(h*b*c-A*d*c+A*r*p-i*b*p-h*r*S+i*d*S)*O,e[11]=(_*d*c-h*v*c-_*r*p+i*v*p+h*r*M-i*d*M)*O,e[12]=$*O,e[13]=(_*b*l-A*v*l+A*r*x-i*b*x-_*r*y+i*v*y)*O,e[14]=(A*d*l-h*b*l-A*r*m+i*b*m+h*r*y-i*d*y)*O,e[15]=(h*v*l-_*d*l+_*r*m-i*v*m-h*r*x+i*d*x)*O,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,_=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,v=d+d,x=c*p,M=c*_,A=c*v,b=h*_,y=h*v,S=d*v,z=m*p,D=m*_,N=m*v,$=r.x,I=r.y,O=r.z;return l[0]=(1-(b+S))*$,l[1]=(M+N)*$,l[2]=(A-D)*$,l[3]=0,l[4]=(M-N)*I,l[5]=(1-(x+S))*I,l[6]=(y+z)*I,l[7]=0,l[8]=(A+D)*O,l[9]=(y-z)*O,l[10]=(1-(x+b))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=ss.set(l[0],l[1],l[2]).length();const h=ss.set(l[4],l[5],l[6]).length(),d=ss.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],mi.copy(this);const p=1/c,_=1/h,v=1/d;return mi.elements[0]*=p,mi.elements[1]*=p,mi.elements[2]*=p,mi.elements[4]*=_,mi.elements[5]*=_,mi.elements[6]*=_,mi.elements[8]*=v,mi.elements[9]*=v,mi.elements[10]*=v,i.setFromRotationMatrix(mi),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Ji){const m=this.elements,p=2*c/(i-e),_=2*c/(r-l),v=(i+e)/(i-e),x=(r+l)/(r-l);let M,A;if(d===Ji)M=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===Uu)M=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Ji){const m=this.elements,p=1/(i-e),_=1/(r-l),v=1/(h-c),x=(i+e)*p,M=(r+l)*_;let A,b;if(d===Ji)A=(h+c)*v,b=-2*v;else if(d===Uu)A=c*v,b=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=b,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ss=new it,mi=new rn,cy=new it(0,0,0),fy=new it(1,1,1),Na=new it,nu=new it,jn=new it,x_=new rn,y_=new zo;class ea{constructor(e=0,i=0,r=0,l=ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(In(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-In(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(In(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-In(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(In(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-In(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return x_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(x_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return y_.setFromEuler(this),this.setFromQuaternion(y_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ea.DEFAULT_ORDER="XYZ";class w0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hy=0;const M_=new it,os=new zo,qi=new rn,iu=new it,wo=new it,dy=new it,py=new zo,E_=new it(1,0,0),T_=new it(0,1,0),A_=new it(0,0,1),b_={type:"added"},my={type:"removed"},ls={type:"childadded",child:null},lh={type:"childremoved",child:null};class Hn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new it,i=new ea,r=new zo,l=new it(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new se}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new w0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return os.setFromAxisAngle(e,i),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,i){return os.setFromAxisAngle(e,i),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(E_,e)}rotateY(e){return this.rotateOnAxis(T_,e)}rotateZ(e){return this.rotateOnAxis(A_,e)}translateOnAxis(e,i){return M_.copy(e).applyQuaternion(this.quaternion),this.position.add(M_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(E_,e)}translateY(e){return this.translateOnAxis(T_,e)}translateZ(e){return this.translateOnAxis(A_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?iu.copy(e):iu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(wo,iu,this.up):qi.lookAt(iu,wo,this.up),this.quaternion.setFromRotationMatrix(qi),l&&(qi.extractRotation(l.matrixWorld),os.setFromRotationMatrix(qi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(b_),ls.child=e,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(my),lh.child=e,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(b_),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,dy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,py,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),v=h(e.shapes),x=h(e.skeletons),M=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new it(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new it,Yi=new it,uh=new it,Zi=new it,us=new it,cs=new it,R_=new it,ch=new it,fh=new it,hh=new it;class bi{constructor(e=new it,i=new it,r=new it){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),gi.subVectors(e,i),l.cross(gi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){gi.subVectors(l,i),Yi.subVectors(r,i),uh.subVectors(e,i);const h=gi.dot(gi),d=gi.dot(Yi),m=gi.dot(uh),p=Yi.dot(Yi),_=Yi.dot(uh),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const x=1/v,M=(p*m-d*_)*x,A=(h*_-d*m)*x;return c.set(1-M-A,A,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,Zi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Zi.x),m.addScaledVector(h,Zi.y),m.addScaledVector(d,Zi.z),m)}static isFrontFacing(e,i,r,l){return gi.subVectors(r,i),Yi.subVectors(e,i),gi.cross(Yi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),gi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return bi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;us.subVectors(l,r),cs.subVectors(c,r),ch.subVectors(e,r);const m=us.dot(ch),p=cs.dot(ch);if(m<=0&&p<=0)return i.copy(r);fh.subVectors(e,l);const _=us.dot(fh),v=cs.dot(fh);if(_>=0&&v<=_)return i.copy(l);const x=m*v-_*p;if(x<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(us,h);hh.subVectors(e,c);const M=us.dot(hh),A=cs.dot(hh);if(A>=0&&M<=A)return i.copy(c);const b=M*p-m*A;if(b<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(cs,d);const y=_*A-M*v;if(y<=0&&v-_>=0&&M-A>=0)return R_.subVectors(c,l),d=(v-_)/(v-_+(M-A)),i.copy(l).addScaledVector(R_,d);const S=1/(y+b+x);return h=b*S,d=x*S,i.copy(r).addScaledVector(us,h).addScaledVector(cs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const D0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},au={h:0,s:0,l:0};function dh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Te{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ee.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ee.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ee.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ee.workingColorSpace){if(e=ty(e,1),i=In(i,0,1),r=In(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=dh(h,c,e+1/3),this.g=dh(h,c,e),this.b=dh(h,c,e-1/3)}return Ee.toWorkingColorSpace(this,l),this}setStyle(e,i=Ti){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ti){const r=D0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=th(e.r),this.g=th(e.g),this.b=th(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ti){return Ee.fromWorkingColorSpace(bn.copy(this),e),Math.round(In(bn.r*255,0,255))*65536+Math.round(In(bn.g*255,0,255))*256+Math.round(In(bn.b*255,0,255))}getHexString(e=Ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ee.workingColorSpace){Ee.fromWorkingColorSpace(bn.copy(this),i);const r=bn.r,l=bn.g,c=bn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=_<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(bn.copy(this),i),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Ti){Ee.fromWorkingColorSpace(bn.copy(this),e);const i=bn.r,r=bn.g,l=bn.b;return e!==Ti?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Oa),this.setHSL(Oa.h+e,Oa.s+i,Oa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Oa),e.getHSL(au);const r=Jf(Oa.h,au.h,i),l=Jf(Oa.s,au.s,i),c=Jf(Oa.l,au.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Te;Te.NAMES=D0;let gy=0;class Io extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=Po(),this.name="",this.type="Material",this.blending=Ss,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Rh,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Ru,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(r.blending=this.blending),this.side!==Fa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==bh&&(r.blendSrc=this.blendSrc),this.blendDst!==Rh&&(r.blendDst=this.blendDst),this.blendEquation!==dr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ru&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==d_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class U0 extends Io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ea,this.combine=h0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new it,ru=new Ae;class dn{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=p_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Lo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ru.fromBufferAttribute(this,i),ru.applyMatrix3(e),this.setXY(i,ru.x,ru.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix3(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix4(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyNormalMatrix(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.transformDirection(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ao(i,this.array)),i}setX(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ao(i,this.array)),i}setY(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ao(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ao(i,this.array)),i}setW(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),c=Bn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==p_&&(e.usage=this.usage),e}}class L0 extends dn{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class N0 extends dn{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class _r extends dn{constructor(e,i,r){super(new Float32Array(e),i,r)}}let _y=0;const si=new rn,ph=new Hn,fs=new it,Kn=new Bo,Do=new Bo,hn=new it;class ia extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(A0(e)?N0:L0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new se().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,i,r){return si.makeTranslation(e,i,r),this.applyMatrix4(si),this}scale(e,i,r){return si.makeScale(e,i,r),this.applyMatrix4(si),this}lookAt(e){return ph.lookAt(e),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const c=e[r];i.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new _r(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Kn.setFromBufferAttribute(c),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Do.setFromBufferAttribute(d),this.morphTargetsRelative?(hn.addVectors(Kn.min,Do.min),Kn.expandByPoint(hn),hn.addVectors(Kn.max,Do.max),Kn.expandByPoint(hn)):(Kn.expandByPoint(Do.min),Kn.expandByPoint(Do.max))}Kn.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)hn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(hn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)hn.fromBufferAttribute(d,p),m&&(fs.fromBufferAttribute(e,p),hn.add(fs)),l=Math.max(l,r.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<r.count;Z++)d[Z]=new it,m[Z]=new it;const p=new it,_=new it,v=new it,x=new Ae,M=new Ae,A=new Ae,b=new it,y=new it;function S(Z,w,C){p.fromBufferAttribute(r,Z),_.fromBufferAttribute(r,w),v.fromBufferAttribute(r,C),x.fromBufferAttribute(c,Z),M.fromBufferAttribute(c,w),A.fromBufferAttribute(c,C),_.sub(p),v.sub(p),M.sub(x),A.sub(x);const G=1/(M.x*A.y-A.x*M.y);isFinite(G)&&(b.copy(_).multiplyScalar(A.y).addScaledVector(v,-M.y).multiplyScalar(G),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-A.x).multiplyScalar(G),d[Z].add(b),d[w].add(b),d[C].add(b),m[Z].add(y),m[w].add(y),m[C].add(y))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let Z=0,w=z.length;Z<w;++Z){const C=z[Z],G=C.start,lt=C.count;for(let st=G,mt=G+lt;st<mt;st+=3)S(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const D=new it,N=new it,$=new it,I=new it;function O(Z){$.fromBufferAttribute(l,Z),I.copy($);const w=d[Z];D.copy(w),D.sub($.multiplyScalar($.dot(w))).normalize(),N.crossVectors(I,w);const G=N.dot(m[Z])<0?-1:1;h.setXYZW(Z,D.x,D.y,D.z,G)}for(let Z=0,w=z.length;Z<w;++Z){const C=z[Z],G=C.start,lt=C.count;for(let st=G,mt=G+lt;st<mt;st+=3)O(e.getX(st+0)),O(e.getX(st+1)),O(e.getX(st+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new dn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new it,c=new it,h=new it,d=new it,m=new it,p=new it,_=new it,v=new it;if(e)for(let x=0,M=e.count;x<M;x+=3){const A=e.getX(x+0),b=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,y),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,y),d.add(_),m.add(_),p.add(_),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)hn.fromBufferAttribute(e,i),hn.normalize(),e.setXYZ(i,hn.x,hn.y,hn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,v=d.normalized,x=new p.constructor(m.length*_);let M=0,A=0;for(let b=0,y=m.length;b<y;b++){d.isInterleavedBufferAttribute?M=m[b]*d.data.stride+d.offset:M=m[b]*_;for(let S=0;S<_;S++)x[A++]=p[M++]}return new dn(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ia,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,v=p.length;_<v;_++){const x=p[_],M=e(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let x=0,M=v.length;x<M;x++)_.push(v[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const C_=new rn,sr=new C0,su=new Pu,w_=new it,hs=new it,ds=new it,ps=new it,mh=new it,ou=new it,lu=new Ae,uu=new Ae,cu=new Ae,D_=new it,U_=new it,L_=new it,fu=new it,hu=new it;class $i extends Hn{constructor(e=new ia,i=new U0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){ou.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],v=c[m];_!==0&&(mh.fromBufferAttribute(v,e),h?ou.addScaledVector(mh,_):ou.addScaledVector(mh.sub(i),_))}i.add(ou)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),su.copy(r.boundingSphere),su.applyMatrix4(c),sr.copy(e.ray).recast(e.near),!(su.containsPoint(sr.origin)===!1&&(sr.intersectSphere(su,w_)===null||sr.origin.distanceToSquared(w_)>(e.far-e.near)**2))&&(C_.copy(c).invert(),sr.copy(e.ray).applyMatrix4(C_),!(r.boundingBox!==null&&sr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,sr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,b=x.length;A<b;A++){const y=x[A],S=h[y.materialIndex],z=Math.max(y.start,M.start),D=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let N=z,$=D;N<$;N+=3){const I=d.getX(N),O=d.getX(N+1),Z=d.getX(N+2);l=du(this,S,e,r,p,_,v,I,O,Z),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),b=Math.min(d.count,M.start+M.count);for(let y=A,S=b;y<S;y+=3){const z=d.getX(y),D=d.getX(y+1),N=d.getX(y+2);l=du(this,h,e,r,p,_,v,z,D,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,b=x.length;A<b;A++){const y=x[A],S=h[y.materialIndex],z=Math.max(y.start,M.start),D=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let N=z,$=D;N<$;N+=3){const I=N,O=N+1,Z=N+2;l=du(this,S,e,r,p,_,v,I,O,Z),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let y=A,S=b;y<S;y+=3){const z=y,D=y+1,N=y+2;l=du(this,h,e,r,p,_,v,z,D,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function vy(o,e,i,r,l,c,h,d){let m;if(e.side===Fn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===Fa,d),m===null)return null;hu.copy(d),hu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(hu);return p<i.near||p>i.far?null:{distance:p,point:hu.clone(),object:o}}function du(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,hs),o.getVertexPosition(m,ds),o.getVertexPosition(p,ps);const _=vy(o,e,i,r,hs,ds,ps,fu);if(_){l&&(lu.fromBufferAttribute(l,d),uu.fromBufferAttribute(l,m),cu.fromBufferAttribute(l,p),_.uv=bi.getInterpolation(fu,hs,ds,ps,lu,uu,cu,new Ae)),c&&(lu.fromBufferAttribute(c,d),uu.fromBufferAttribute(c,m),cu.fromBufferAttribute(c,p),_.uv1=bi.getInterpolation(fu,hs,ds,ps,lu,uu,cu,new Ae)),h&&(D_.fromBufferAttribute(h,d),U_.fromBufferAttribute(h,m),L_.fromBufferAttribute(h,p),_.normal=bi.getInterpolation(fu,hs,ds,ps,D_,U_,L_,new it),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new it,materialIndex:0};bi.getNormal(hs,ds,ps,v.normal),_.face=v}return _}class Fo extends ia{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],v=[];let x=0,M=0;A("z","y","x",-1,-1,r,i,e,h,c,0),A("z","y","x",1,-1,r,i,-e,h,c,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,c,4),A("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new _r(p,3)),this.setAttribute("normal",new _r(_,3)),this.setAttribute("uv",new _r(v,2));function A(b,y,S,z,D,N,$,I,O,Z,w){const C=N/O,G=$/Z,lt=N/2,st=$/2,mt=I/2,ft=O+1,P=Z+1;let W=0,j=0;const yt=new it;for(let Et=0;Et<P;Et++){const U=Et*G-st;for(let nt=0;nt<ft;nt++){const St=nt*C-lt;yt[b]=St*z,yt[y]=U*D,yt[S]=mt,p.push(yt.x,yt.y,yt.z),yt[b]=0,yt[y]=0,yt[S]=I>0?1:-1,_.push(yt.x,yt.y,yt.z),v.push(nt/O),v.push(1-Et/Z),W+=1}}for(let Et=0;Et<Z;Et++)for(let U=0;U<O;U++){const nt=x+U+ft*Et,St=x+U+ft*(Et+1),q=x+(U+1)+ft*(Et+1),ot=x+(U+1)+ft*Et;m.push(nt,St,ot),m.push(St,q,ot),j+=6}d.addGroup(M,j,w),M+=j,x+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Cn(o){const e={};for(let i=0;i<o.length;i++){const r=bs(o[i]);for(const l in r)e[l]=r[l]}return e}function Sy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function O0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ee.workingColorSpace}const xy={clone:bs,merge:Cn};var yy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,My=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class na extends Io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yy,this.fragmentShader=My,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=Sy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class P0 extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Ji}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pa=new it,N_=new Ae,O_=new Ae;class oi extends P0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ad*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ad*2*Math.atan(Math.tan(Qf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Pa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pa.x,Pa.y).multiplyScalar(-e/Pa.z),Pa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pa.x,Pa.y).multiplyScalar(-e/Pa.z)}getViewSize(e,i){return this.getViewBounds(e,N_,O_),i.subVectors(O_,N_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Qf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ms=-90,gs=1;class Ey extends Hn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(ms,gs,e,i);l.layers=this.layers,this.add(l);const c=new oi(ms,gs,e,i);c.layers=this.layers,this.add(c);const h=new oi(ms,gs,e,i);h.layers=this.layers,this.add(h);const d=new oi(ms,gs,e,i);d.layers=this.layers,this.add(d);const m=new oi(ms,gs,e,i);m.layers=this.layers,this.add(m);const p=new oi(ms,gs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ji)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Uu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(v,x,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class z0 extends wn{constructor(e,i,r,l,c,h,d,m,p,_){e=e!==void 0?e:[],i=i!==void 0?i:Ms,super(e,i,r,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ty extends Sr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new z0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:_i}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Fo(5,5,5),c=new na({name:"CubemapFromEquirect",uniforms:bs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Ba});c.uniforms.tEquirect.value=i;const h=new $i(l,c),d=i.minFilter;return i.minFilter===gr&&(i.minFilter=_i),new Ey(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}const gh=new it,Ay=new it,by=new se;class cr{constructor(e=new it(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=gh.subVectors(r,i).cross(Ay.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(gh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||by.getNormalMatrix(e),l=this.coplanarPoint(gh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new Pu,pu=new it;class B0{constructor(e=new cr,i=new cr,r=new cr,l=new cr,c=new cr,h=new cr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ji){const r=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],_=l[5],v=l[6],x=l[7],M=l[8],A=l[9],b=l[10],y=l[11],S=l[12],z=l[13],D=l[14],N=l[15];if(r[0].setComponents(m-c,x-p,y-M,N-S).normalize(),r[1].setComponents(m+c,x+p,y+M,N+S).normalize(),r[2].setComponents(m+h,x+_,y+A,N+z).normalize(),r[3].setComponents(m-h,x-_,y-A,N-z).normalize(),r[4].setComponents(m-d,x-v,y-b,N-D).normalize(),i===Ji)r[5].setComponents(m+d,x+v,y+b,N+D).normalize();else if(i===Uu)r[5].setComponents(d,v,b,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),or.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(pu.x=l.normal.x>0?e.max.x:e.min.x,pu.y=l.normal.y>0?e.max.y:e.min.y,pu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(pu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function I0(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Ry(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const _=m.array,v=m._updateRange,x=m.updateRanges;if(o.bindBuffer(p,d),v.count===-1&&x.length===0&&o.bufferSubData(p,0,_),x.length!==0){for(let M=0,A=x.length;M<A;M++){const b=x[M];o.bufferSubData(p,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}m.clearUpdateRanges()}v.count!==-1&&(o.bufferSubData(p,v.offset*_.BYTES_PER_ELEMENT,_,v.offset,v.count),v.count=-1),m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}class zu extends ia{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,v=e/d,x=i/m,M=[],A=[],b=[],y=[];for(let S=0;S<_;S++){const z=S*x-h;for(let D=0;D<p;D++){const N=D*v-c;A.push(N,-z,0),b.push(0,0,1),y.push(D/d),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let z=0;z<d;z++){const D=z+p*S,N=z+p*(S+1),$=z+1+p*(S+1),I=z+1+p*S;M.push(D,N,I),M.push(N,$,I)}this.setIndex(M),this.setAttribute("position",new _r(A,3)),this.setAttribute("normal",new _r(b,3)),this.setAttribute("uv",new _r(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zu(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wy=`#ifdef USE_ALPHAHASH
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
#endif`,Dy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ly=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ny=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Oy=`#ifdef USE_AOMAP
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
#endif`,Py=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zy=`#ifdef USE_BATCHING
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
#endif`,By=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gy=`#ifdef USE_IRIDESCENCE
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
#endif`,Vy=`#ifdef USE_BUMPMAP
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
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qy=`#define PI 3.141592653589793
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
} // validated`,Jy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$y=`vec3 transformedNormal = objectNormal;
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
#endif`,tM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aM="gl_FragColor = linearToOutputTexel( gl_FragColor );",rM=`
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
}`,sM=`#ifdef USE_ENVMAP
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
#endif`,oM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lM=`#ifdef USE_ENVMAP
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
#endif`,uM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cM=`#ifdef USE_ENVMAP
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
#endif`,fM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mM=`#ifdef USE_GRADIENTMAP
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
}`,gM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SM=`uniform bool receiveShadow;
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
#endif`,xM=`#ifdef USE_ENVMAP
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
#endif`,yM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AM=`PhysicalMaterial material;
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
#endif`,bM=`struct PhysicalMaterial {
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
}`,RM=`
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
#endif`,CM=`#if defined( RE_IndirectDiffuse )
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
#endif`,wM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BM=`#if defined( USE_POINTS_UV )
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
#endif`,IM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XM=`#ifdef USE_MORPHTARGETS
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
#endif`,kM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,YM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KM=`#ifdef USE_NORMALMAP
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
#endif`,QM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$M=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hE=`float getShadowMask() {
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
}`,dE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pE=`#ifdef USE_SKINNING
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
#endif`,mE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gE=`#ifdef USE_SKINNING
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
#endif`,_E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yE=`#ifdef USE_TRANSMISSION
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
#endif`,ME=`#ifdef USE_TRANSMISSION
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
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CE=`uniform sampler2D t2D;
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
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`#include <common>
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
}`,OE=`#if DEPTH_PACKING == 3200
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
}`,PE=`#define DISTANCE
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
}`,zE=`#define DISTANCE
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
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FE=`uniform float scale;
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
}`,HE=`uniform vec3 diffuse;
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
}`,GE=`#include <common>
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
}`,VE=`uniform vec3 diffuse;
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
}`,XE=`#define LAMBERT
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
}`,kE=`#define LAMBERT
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
}`,WE=`#define MATCAP
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
}`,qE=`#define MATCAP
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
}`,YE=`#define NORMAL
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
}`,ZE=`#define NORMAL
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
}`,jE=`#define PHONG
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
}`,KE=`#define PHONG
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
}`,QE=`#define STANDARD
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
}`,JE=`#define STANDARD
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
}`,$E=`#define TOON
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
}`,tT=`#define TOON
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
}`,eT=`uniform float size;
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
}`,nT=`uniform vec3 diffuse;
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
}`,iT=`#include <common>
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
}`,aT=`uniform vec3 color;
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
}`,rT=`uniform float rotation;
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
}`,sT=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:Cy,alphahash_pars_fragment:wy,alphamap_fragment:Dy,alphamap_pars_fragment:Uy,alphatest_fragment:Ly,alphatest_pars_fragment:Ny,aomap_fragment:Oy,aomap_pars_fragment:Py,batching_pars_vertex:zy,batching_vertex:By,begin_vertex:Iy,beginnormal_vertex:Fy,bsdfs:Hy,iridescence_fragment:Gy,bumpmap_pars_fragment:Vy,clipping_planes_fragment:Xy,clipping_planes_pars_fragment:ky,clipping_planes_pars_vertex:Wy,clipping_planes_vertex:qy,color_fragment:Yy,color_pars_fragment:Zy,color_pars_vertex:jy,color_vertex:Ky,common:Qy,cube_uv_reflection_fragment:Jy,defaultnormal_vertex:$y,displacementmap_pars_vertex:tM,displacementmap_vertex:eM,emissivemap_fragment:nM,emissivemap_pars_fragment:iM,colorspace_fragment:aM,colorspace_pars_fragment:rM,envmap_fragment:sM,envmap_common_pars_fragment:oM,envmap_pars_fragment:lM,envmap_pars_vertex:uM,envmap_physical_pars_fragment:xM,envmap_vertex:cM,fog_vertex:fM,fog_pars_vertex:hM,fog_fragment:dM,fog_pars_fragment:pM,gradientmap_pars_fragment:mM,lightmap_pars_fragment:gM,lights_lambert_fragment:_M,lights_lambert_pars_fragment:vM,lights_pars_begin:SM,lights_toon_fragment:yM,lights_toon_pars_fragment:MM,lights_phong_fragment:EM,lights_phong_pars_fragment:TM,lights_physical_fragment:AM,lights_physical_pars_fragment:bM,lights_fragment_begin:RM,lights_fragment_maps:CM,lights_fragment_end:wM,logdepthbuf_fragment:DM,logdepthbuf_pars_fragment:UM,logdepthbuf_pars_vertex:LM,logdepthbuf_vertex:NM,map_fragment:OM,map_pars_fragment:PM,map_particle_fragment:zM,map_particle_pars_fragment:BM,metalnessmap_fragment:IM,metalnessmap_pars_fragment:FM,morphinstance_vertex:HM,morphcolor_vertex:GM,morphnormal_vertex:VM,morphtarget_pars_vertex:XM,morphtarget_vertex:kM,normal_fragment_begin:WM,normal_fragment_maps:qM,normal_pars_fragment:YM,normal_pars_vertex:ZM,normal_vertex:jM,normalmap_pars_fragment:KM,clearcoat_normal_fragment_begin:QM,clearcoat_normal_fragment_maps:JM,clearcoat_pars_fragment:$M,iridescence_pars_fragment:tE,opaque_fragment:eE,packing:nE,premultiplied_alpha_fragment:iE,project_vertex:aE,dithering_fragment:rE,dithering_pars_fragment:sE,roughnessmap_fragment:oE,roughnessmap_pars_fragment:lE,shadowmap_pars_fragment:uE,shadowmap_pars_vertex:cE,shadowmap_vertex:fE,shadowmask_pars_fragment:hE,skinbase_vertex:dE,skinning_pars_vertex:pE,skinning_vertex:mE,skinnormal_vertex:gE,specularmap_fragment:_E,specularmap_pars_fragment:vE,tonemapping_fragment:SE,tonemapping_pars_fragment:xE,transmission_fragment:yE,transmission_pars_fragment:ME,uv_pars_fragment:EE,uv_pars_vertex:TE,uv_vertex:AE,worldpos_vertex:bE,background_vert:RE,background_frag:CE,backgroundCube_vert:wE,backgroundCube_frag:DE,cube_vert:UE,cube_frag:LE,depth_vert:NE,depth_frag:OE,distanceRGBA_vert:PE,distanceRGBA_frag:zE,equirect_vert:BE,equirect_frag:IE,linedashed_vert:FE,linedashed_frag:HE,meshbasic_vert:GE,meshbasic_frag:VE,meshlambert_vert:XE,meshlambert_frag:kE,meshmatcap_vert:WE,meshmatcap_frag:qE,meshnormal_vert:YE,meshnormal_frag:ZE,meshphong_vert:jE,meshphong_frag:KE,meshphysical_vert:QE,meshphysical_frag:JE,meshtoon_vert:$E,meshtoon_frag:tT,points_vert:eT,points_frag:nT,shadow_vert:iT,shadow_frag:aT,sprite_vert:rT,sprite_frag:sT},Ut={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Ai={basic:{uniforms:Cn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:Cn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Te(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:Cn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:Cn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:Cn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Te(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:Cn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:Cn([Ut.points,Ut.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:Cn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:Cn([Ut.common,Ut.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:Cn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:Cn([Ut.sprite,Ut.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:Cn([Ut.common,Ut.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:Cn([Ut.lights,Ut.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Ai.physical={uniforms:Cn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const mu={r:0,b:0,g:0},lr=new ea,oT=new rn;function lT(o,e,i,r,l,c,h){const d=new Te(0);let m=c===!0?0:1,p,_,v=null,x=0,M=null;function A(z){let D=z.isScene===!0?z.background:null;return D&&D.isTexture&&(D=(z.backgroundBlurriness>0?i:e).get(D)),D}function b(z){let D=!1;const N=A(z);N===null?S(d,m):N&&N.isColor&&(S(N,1),D=!0);const $=o.xr.getEnvironmentBlendMode();$==="additive"?r.buffers.color.setClear(0,0,0,1,h):$==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(z,D){const N=A(D);N&&(N.isCubeTexture||N.mapping===Nu)?(_===void 0&&(_=new $i(new Fo(1,1,1),new na({name:"BackgroundCubeMaterial",uniforms:bs(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function($,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),lr.copy(D.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),_.material.uniforms.envMap.value=N,_.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(oT.makeRotationFromEuler(lr)),_.material.toneMapped=Ee.getTransfer(N.colorSpace)!==Ie,(v!==N||x!==N.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,v=N,x=N.version,M=o.toneMapping),_.layers.enableAll(),z.unshift(_,_.geometry,_.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new $i(new zu(2,2),new na({name:"BackgroundMaterial",uniforms:bs(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ee.getTransfer(N.colorSpace)!==Ie,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||x!==N.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=N,x=N.version,M=o.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null))}function S(z,D){z.getRGB(mu,O0(o)),r.buffers.color.setClear(mu.r,mu.g,mu.b,D,h)}return{getClearColor:function(){return d},setClearColor:function(z,D=1){d.set(z),m=D,S(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(z){m=z,S(d,m)},render:b,addToRenderList:y}}function uT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(C,G,lt,st,mt){let ft=!1;const P=v(st,lt,G);c!==P&&(c=P,p(c.object)),ft=M(C,st,lt,mt),ft&&A(C,st,lt,mt),mt!==null&&e.update(mt,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,N(C,G,lt,st),mt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(mt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function _(C){return o.deleteVertexArray(C)}function v(C,G,lt){const st=lt.wireframe===!0;let mt=r[C.id];mt===void 0&&(mt={},r[C.id]=mt);let ft=mt[G.id];ft===void 0&&(ft={},mt[G.id]=ft);let P=ft[st];return P===void 0&&(P=x(m()),ft[st]=P),P}function x(C){const G=[],lt=[],st=[];for(let mt=0;mt<i;mt++)G[mt]=0,lt[mt]=0,st[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:lt,attributeDivisors:st,object:C,attributes:{},index:null}}function M(C,G,lt,st){const mt=c.attributes,ft=G.attributes;let P=0;const W=lt.getAttributes();for(const j in W)if(W[j].location>=0){const Et=mt[j];let U=ft[j];if(U===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),Et===void 0||Et.attribute!==U||U&&Et.data!==U.data)return!0;P++}return c.attributesNum!==P||c.index!==st}function A(C,G,lt,st){const mt={},ft=G.attributes;let P=0;const W=lt.getAttributes();for(const j in W)if(W[j].location>=0){let Et=ft[j];Et===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor));const U={};U.attribute=Et,Et&&Et.data&&(U.data=Et.data),mt[j]=U,P++}c.attributes=mt,c.attributesNum=P,c.index=st}function b(){const C=c.newAttributes;for(let G=0,lt=C.length;G<lt;G++)C[G]=0}function y(C){S(C,0)}function S(C,G){const lt=c.newAttributes,st=c.enabledAttributes,mt=c.attributeDivisors;lt[C]=1,st[C]===0&&(o.enableVertexAttribArray(C),st[C]=1),mt[C]!==G&&(o.vertexAttribDivisor(C,G),mt[C]=G)}function z(){const C=c.newAttributes,G=c.enabledAttributes;for(let lt=0,st=G.length;lt<st;lt++)G[lt]!==C[lt]&&(o.disableVertexAttribArray(lt),G[lt]=0)}function D(C,G,lt,st,mt,ft,P){P===!0?o.vertexAttribIPointer(C,G,lt,mt,ft):o.vertexAttribPointer(C,G,lt,st,mt,ft)}function N(C,G,lt,st){b();const mt=st.attributes,ft=lt.getAttributes(),P=G.defaultAttributeValues;for(const W in ft){const j=ft[W];if(j.location>=0){let yt=mt[W];if(yt===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor)),yt!==void 0){const Et=yt.normalized,U=yt.itemSize,nt=e.get(yt);if(nt===void 0)continue;const St=nt.buffer,q=nt.type,ot=nt.bytesPerElement,xt=q===o.INT||q===o.UNSIGNED_INT||yt.gpuType===ud;if(yt.isInterleavedBufferAttribute){const Mt=yt.data,Ft=Mt.stride,It=yt.offset;if(Mt.isInstancedInterleavedBuffer){for(let ee=0;ee<j.locationSize;ee++)S(j.location+ee,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ee=0;ee<j.locationSize;ee++)y(j.location+ee);o.bindBuffer(o.ARRAY_BUFFER,St);for(let ee=0;ee<j.locationSize;ee++)D(j.location+ee,U/j.locationSize,q,Et,Ft*ot,(It+U/j.locationSize*ee)*ot,xt)}else{if(yt.isInstancedBufferAttribute){for(let Mt=0;Mt<j.locationSize;Mt++)S(j.location+Mt,yt.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Mt=0;Mt<j.locationSize;Mt++)y(j.location+Mt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Mt=0;Mt<j.locationSize;Mt++)D(j.location+Mt,U/j.locationSize,q,Et,U*ot,U/j.locationSize*Mt*ot,xt)}}else if(P!==void 0){const Et=P[W];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(j.location,Et);break;case 3:o.vertexAttrib3fv(j.location,Et);break;case 4:o.vertexAttrib4fv(j.location,Et);break;default:o.vertexAttrib1fv(j.location,Et)}}}}z()}function $(){Z();for(const C in r){const G=r[C];for(const lt in G){const st=G[lt];for(const mt in st)_(st[mt].object),delete st[mt];delete G[lt]}delete r[C]}}function I(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const lt in G){const st=G[lt];for(const mt in st)_(st[mt].object),delete st[mt];delete G[lt]}delete r[C.id]}function O(C){for(const G in r){const lt=r[G];if(lt[C.id]===void 0)continue;const st=lt[C.id];for(const mt in st)_(st[mt].object),delete st[mt];delete lt[C.id]}}function Z(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:w,dispose:$,releaseStatesOfGeometry:I,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:y,disableUnusedAttributes:z}}function cT(o,e,i){let r;function l(p){r=p}function c(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,v){v!==0&&(o.drawArraysInstanced(r,p,_,v),i.update(_,r,v))}function d(p,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,v);let M=0;for(let A=0;A<v;A++)M+=_[A];i.update(M,r,1)}function m(p,_,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)h(p[A],_[A],x[A]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,v);let A=0;for(let b=0;b<v;b++)A+=_[b];for(let b=0;b<x.length;b++)i.update(A,r,x[b])}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function fT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==vi&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const O=I===Oo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ta&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Qi&&!O)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),S=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=M>0,$=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,maxTextures:x,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:S,maxVaryings:z,maxFragmentUniforms:D,vertexTextures:N,maxSamples:$}}function hT(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new cr,d=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||l;return l=x,r=v.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=_(v,x,0)},this.setState=function(v,x,M){const A=v.clippingPlanes,b=v.clipIntersection,y=v.clipShadows,S=o.get(v);if(!l||A===null||A.length===0||c&&!y)c?_(null):p();else{const z=c?0:r,D=z*4;let N=S.clippingState||null;m.value=N,N=_(A,x,D,M);for(let $=0;$!==D;++$)N[$]=i[$];S.clippingState=N,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,M,A){const b=v!==null?v.length:0;let y=null;if(b!==0){if(y=m.value,A!==!0||y===null){const S=M+b*4,z=x.matrixWorldInverse;d.getNormalMatrix(z),(y===null||y.length<S)&&(y=new Float32Array(S));for(let D=0,N=M;D!==b;++D,N+=4)h.copy(v[D]).applyMatrix4(z,d),h.normal.toArray(y,N),y[N+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function dT(o){let e=new WeakMap;function i(h,d){return d===Ch?h.mapping=Ms:d===wh&&(h.mapping=Es),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ch||d===wh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Ty(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class pT extends P0{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const vs=4,P_=[.125,.215,.35,.446,.526,.582],pr=20,_h=new pT,z_=new Te;let vh=null,Sh=0,xh=0,yh=!1;const fr=(1+Math.sqrt(5))/2,_s=1/fr,B_=[new it(-fr,_s,0),new it(fr,_s,0),new it(-_s,0,fr),new it(_s,0,fr),new it(0,fr,-_s),new it(0,fr,_s),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)];class I_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){vh=this._renderer.getRenderTarget(),Sh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=H_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vh,Sh,xh),this._renderer.xr.enabled=yh,e.scissorTest=!1,gu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ms||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vh=this._renderer.getRenderTarget(),Sh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Oo,format:vi,colorSpace:Ha,depthBuffer:!1},l=F_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mT(c)),this._blurMaterial=gT(c,e,i)}return l}_compileMaterial(e){const i=new $i(this._lodPlanes[0],e);this._renderer.compile(i,_h)}_sceneToCubeUV(e,i,r,l){const d=new oi(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(z_),_.toneMapping=Ia,_.autoClear=!1;const M=new U0({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),A=new $i(new Fo,M);let b=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,b=!0):(M.color.copy(z_),b=!0);for(let S=0;S<6;S++){const z=S%3;z===0?(d.up.set(0,m[S],0),d.lookAt(p[S],0,0)):z===1?(d.up.set(0,0,m[S]),d.lookAt(0,p[S],0)):(d.up.set(0,m[S],0),d.lookAt(0,0,p[S]));const D=this._cubeSize;gu(l,z*D,S>2?D:0,D,D),_.setRenderTarget(l),b&&_.render(A,d),_.render(e,d)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=y}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ms||e.mapping===Es;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=G_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=H_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new $i(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;gu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,_h)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=B_[(l-c-1)%B_.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new $i(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*pr-1),b=c/A,y=isFinite(c)?1+Math.floor(_*b):pr;y>pr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${pr}`);const S=[];let z=0;for(let O=0;O<pr;++O){const Z=O/b,w=Math.exp(-Z*Z/2);S.push(w),O===0?z+=w:O<y&&(z+=2*w)}for(let O=0;O<S.length;O++)S[O]=S[O]/z;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=S,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:D}=this;x.dTheta.value=A,x.mipInt.value=D-r;const N=this._sizeLods[l],$=3*N*(l>D-vs?l-D+vs:0),I=4*(this._cubeSize-N);gu(i,$,I,3*N,2*N),m.setRenderTarget(i),m.render(v,_h)}}function mT(o){const e=[],i=[],r=[];let l=o;const c=o-vs+1+P_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-vs?m=P_[h-o+vs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),_=-p,v=1+p,x=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,A=6,b=3,y=2,S=1,z=new Float32Array(b*A*M),D=new Float32Array(y*A*M),N=new Float32Array(S*A*M);for(let I=0;I<M;I++){const O=I%3*2/3-1,Z=I>2?0:-1,w=[O,Z,0,O+2/3,Z,0,O+2/3,Z+1,0,O,Z,0,O+2/3,Z+1,0,O,Z+1,0];z.set(w,b*A*I),D.set(x,y*A*I);const C=[I,I,I,I,I,I];N.set(C,S*A*I)}const $=new ia;$.setAttribute("position",new dn(z,b)),$.setAttribute("uv",new dn(D,y)),$.setAttribute("faceIndex",new dn(N,S)),e.push($),l>vs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function F_(o,e,i){const r=new Sr(o,e,i);return r.texture.mapping=Nu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gu(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function gT(o,e,i){const r=new Float32Array(pr),l=new it(0,1,0);return new na({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:gd(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function H_(){return new na({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gd(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function G_(){return new na({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gd(),fragmentShader:`

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
	`}function _T(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ch||m===wh,_=m===Ms||m===Es;if(p||_){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new I_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new I_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function vT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Lo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function ST(o,e,i,r){const l={},c=new WeakMap;function h(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);for(const A in x.morphAttributes){const b=x.morphAttributes[A];for(let y=0,S=b.length;y<S;y++)e.remove(b[y])}x.removeEventListener("dispose",h),delete l[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const A in x)e.update(x[A],o.ARRAY_BUFFER);const M=v.morphAttributes;for(const A in M){const b=M[A];for(let y=0,S=b.length;y<S;y++)e.update(b[y],o.ARRAY_BUFFER)}}function p(v){const x=[],M=v.index,A=v.attributes.position;let b=0;if(M!==null){const z=M.array;b=M.version;for(let D=0,N=z.length;D<N;D+=3){const $=z[D+0],I=z[D+1],O=z[D+2];x.push($,I,I,O,O,$)}}else if(A!==void 0){const z=A.array;b=A.version;for(let D=0,N=z.length/3-1;D<N;D+=3){const $=D+0,I=D+1,O=D+2;x.push($,I,I,O,O,$)}}else return;const y=new(A0(x)?N0:L0)(x,1);y.version=b;const S=c.get(v);S&&e.remove(S),c.set(v,y)}function _(v){const x=c.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function xT(o,e,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(r,M,c,x*h),i.update(M,r,1)}function p(x,M,A){A!==0&&(o.drawElementsInstanced(r,M,c,x*h,A),i.update(M,r,A))}function _(x,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,A);let y=0;for(let S=0;S<A;S++)y+=M[S];i.update(y,r,1)}function v(x,M,A,b){if(A===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<x.length;S++)p(x[S]/h,M[S],b[S]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,b,0,A);let S=0;for(let z=0;z<A;z++)S+=M[z];for(let z=0;z<b.length;z++)i.update(S,r,b[z])}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function yT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function MT(o,e,i){const r=new WeakMap,l=new pn;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let C=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var M=C;x!==void 0&&x.texture.dispose();const A=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let N=0;A===!0&&(N=1),b===!0&&(N=2),y===!0&&(N=3);let $=d.attributes.position.count*N,I=1;$>e.maxTextureSize&&(I=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const O=new Float32Array($*I*4*v),Z=new R0(O,$,I,v);Z.type=Qi,Z.needsUpdate=!0;const w=N*4;for(let G=0;G<v;G++){const lt=S[G],st=z[G],mt=D[G],ft=$*I*4*G;for(let P=0;P<lt.count;P++){const W=P*w;A===!0&&(l.fromBufferAttribute(lt,P),O[ft+W+0]=l.x,O[ft+W+1]=l.y,O[ft+W+2]=l.z,O[ft+W+3]=0),b===!0&&(l.fromBufferAttribute(st,P),O[ft+W+4]=l.x,O[ft+W+5]=l.y,O[ft+W+6]=l.z,O[ft+W+7]=0),y===!0&&(l.fromBufferAttribute(mt,P),O[ft+W+8]=l.x,O[ft+W+9]=l.y,O[ft+W+10]=l.z,O[ft+W+11]=mt.itemSize===4?l.w:1)}}x={count:v,texture:Z,size:new Ae($,I)},r.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const b=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",b),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function ET(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,v=e.get(m,_);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}class F0 extends wn{constructor(e,i,r,l,c,h,d,m,p,_=xs){if(_!==xs&&_!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===xs&&(r=vr),r===void 0&&_===As&&(r=Ts),super(null,l,c,h,d,m,_,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:li,this.minFilter=m!==void 0?m:li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const H0=new wn,V_=new F0(1,1),G0=new R0,V0=new ly,X0=new z0,X_=[],k_=[],W_=new Float32Array(16),q_=new Float32Array(9),Y_=new Float32Array(4);function Cs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=X_[l];if(c===void 0&&(c=new Float32Array(l),X_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function un(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function cn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Bu(o,e){let i=k_[e];i===void 0&&(i=new Int32Array(e),k_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function TT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function AT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2fv(this.addr,e),cn(i,e)}}function bT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(un(i,e))return;o.uniform3fv(this.addr,e),cn(i,e)}}function RT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4fv(this.addr,e),cn(i,e)}}function CT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),cn(i,e)}else{if(un(i,r))return;Y_.set(r),o.uniformMatrix2fv(this.addr,!1,Y_),cn(i,r)}}function wT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),cn(i,e)}else{if(un(i,r))return;q_.set(r),o.uniformMatrix3fv(this.addr,!1,q_),cn(i,r)}}function DT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),cn(i,e)}else{if(un(i,r))return;W_.set(r),o.uniformMatrix4fv(this.addr,!1,W_),cn(i,r)}}function UT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2iv(this.addr,e),cn(i,e)}}function NT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3iv(this.addr,e),cn(i,e)}}function OT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4iv(this.addr,e),cn(i,e)}}function PT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function zT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2uiv(this.addr,e),cn(i,e)}}function BT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3uiv(this.addr,e),cn(i,e)}}function IT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4uiv(this.addr,e),cn(i,e)}}function FT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(V_.compareFunction=T0,c=V_):c=H0,i.setTexture2D(e||c,l)}function HT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||V0,l)}function GT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||X0,l)}function VT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||G0,l)}function XT(o){switch(o){case 5126:return TT;case 35664:return AT;case 35665:return bT;case 35666:return RT;case 35674:return CT;case 35675:return wT;case 35676:return DT;case 5124:case 35670:return UT;case 35667:case 35671:return LT;case 35668:case 35672:return NT;case 35669:case 35673:return OT;case 5125:return PT;case 36294:return zT;case 36295:return BT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return VT}}function kT(o,e){o.uniform1fv(this.addr,e)}function WT(o,e){const i=Cs(e,this.size,2);o.uniform2fv(this.addr,i)}function qT(o,e){const i=Cs(e,this.size,3);o.uniform3fv(this.addr,i)}function YT(o,e){const i=Cs(e,this.size,4);o.uniform4fv(this.addr,i)}function ZT(o,e){const i=Cs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function jT(o,e){const i=Cs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function KT(o,e){const i=Cs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function QT(o,e){o.uniform1iv(this.addr,e)}function JT(o,e){o.uniform2iv(this.addr,e)}function $T(o,e){o.uniform3iv(this.addr,e)}function tA(o,e){o.uniform4iv(this.addr,e)}function eA(o,e){o.uniform1uiv(this.addr,e)}function nA(o,e){o.uniform2uiv(this.addr,e)}function iA(o,e){o.uniform3uiv(this.addr,e)}function aA(o,e){o.uniform4uiv(this.addr,e)}function rA(o,e,i){const r=this.cache,l=e.length,c=Bu(i,l);un(r,c)||(o.uniform1iv(this.addr,c),cn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||H0,c[h])}function sA(o,e,i){const r=this.cache,l=e.length,c=Bu(i,l);un(r,c)||(o.uniform1iv(this.addr,c),cn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||V0,c[h])}function oA(o,e,i){const r=this.cache,l=e.length,c=Bu(i,l);un(r,c)||(o.uniform1iv(this.addr,c),cn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||X0,c[h])}function lA(o,e,i){const r=this.cache,l=e.length,c=Bu(i,l);un(r,c)||(o.uniform1iv(this.addr,c),cn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||G0,c[h])}function uA(o){switch(o){case 5126:return kT;case 35664:return WT;case 35665:return qT;case 35666:return YT;case 35674:return ZT;case 35675:return jT;case 35676:return KT;case 5124:case 35670:return QT;case 35667:case 35671:return JT;case 35668:case 35672:return $T;case 35669:case 35673:return tA;case 5125:return eA;case 36294:return nA;case 36295:return iA;case 36296:return aA;case 35678:case 36198:case 36298:case 36306:case 35682:return rA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return oA;case 36289:case 36303:case 36311:case 36292:return lA}}class cA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=XT(i.type)}}class fA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=uA(i.type)}}class hA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const Mh=/(\w+)(\])?(\[|\.)?/g;function Z_(o,e){o.seq.push(e),o.map[e.id]=e}function dA(o,e,i){const r=o.name,l=r.length;for(Mh.lastIndex=0;;){const c=Mh.exec(r),h=Mh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Z_(i,p===void 0?new cA(d,o,e):new fA(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new hA(d),Z_(i,v)),i=v}}}class bu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);dA(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function j_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const pA=37297;let mA=0;function gA(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}function _A(o){const e=Ee.getPrimaries(Ee.workingColorSpace),i=Ee.getPrimaries(o);let r;switch(e===i?r="":e===Du&&i===wu?r="LinearDisplayP3ToLinearSRGB":e===wu&&i===Du&&(r="LinearSRGBToLinearDisplayP3"),o){case Ha:case Ou:return[r,"LinearTransferOETF"];case Ti:case md:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function K_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+gA(o.getShaderSource(e),h)}else return l}function vA(o,e){const i=_A(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function SA(o,e){let i;switch(e){case Px:i="Linear";break;case zx:i="Reinhard";break;case Bx:i="Cineon";break;case Ix:i="ACESFilmic";break;case Hx:i="AgX";break;case Gx:i="Neutral";break;case Fx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const _u=new it;function xA(){Ee.getLuminanceCoefficients(_u);const o=_u.x.toFixed(4),e=_u.y.toFixed(4),i=_u.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function MA(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function EA(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Uo(o){return o!==""}function Q_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function J_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TA=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(o){return o.replace(TA,bA)}const AA=new Map;function bA(o,e){let i=re[e];if(i===void 0){const r=AA.get(e);if(r!==void 0)i=re[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return rd(i)}const RA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $_(o){return o.replace(RA,CA)}function CA(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function t0(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function wA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===f0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===ox?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function DA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ms:case Es:e="ENVMAP_TYPE_CUBE";break;case Nu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UA(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Es&&(e="ENVMAP_MODE_REFRACTION"),e}function LA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case h0:e="ENVMAP_BLENDING_MULTIPLY";break;case Nx:e="ENVMAP_BLENDING_MIX";break;case Ox:e="ENVMAP_BLENDING_ADD";break}return e}function NA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function OA(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=wA(i),p=DA(i),_=UA(i),v=LA(i),x=NA(i),M=yA(i),A=MA(c),b=l.createProgram();let y,S,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Uo).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Uo).join(`
`),S.length>0&&(S+=`
`)):(y=[t0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),S=[t0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ia?"#define TONE_MAPPING":"",i.toneMapping!==Ia?re.tonemapping_pars_fragment:"",i.toneMapping!==Ia?SA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,vA("linearToOutputTexel",i.outputColorSpace),xA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Uo).join(`
`)),h=rd(h),h=Q_(h,i),h=J_(h,i),d=rd(d),d=Q_(d,i),d=J_(d,i),h=$_(h),d=$_(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===m_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===m_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const D=z+y+h,N=z+S+d,$=j_(l,l.VERTEX_SHADER,D),I=j_(l,l.FRAGMENT_SHADER,N);l.attachShader(b,$),l.attachShader(b,I),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function O(G){if(o.debug.checkShaderErrors){const lt=l.getProgramInfoLog(b).trim(),st=l.getShaderInfoLog($).trim(),mt=l.getShaderInfoLog(I).trim();let ft=!0,P=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(ft=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,b,$,I);else{const W=K_(l,$,"vertex"),j=K_(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+lt+`
`+W+`
`+j)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(st===""||mt==="")&&(P=!1);P&&(G.diagnostics={runnable:ft,programLog:lt,vertexShader:{log:st,prefix:y},fragmentShader:{log:mt,prefix:S}})}l.deleteShader($),l.deleteShader(I),Z=new bu(l,b),w=EA(l,b)}let Z;this.getUniforms=function(){return Z===void 0&&O(this),Z};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(b,pA)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=mA++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=$,this.fragmentShader=I,this}let PA=0;class zA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new BA(e),i.set(e,r)),r}}class BA{constructor(e){this.id=PA++,this.code=e,this.usedTimes=0}}function IA(o,e,i,r,l,c,h){const d=new w0,m=new zA,p=new Set,_=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,C,G,lt,st){const mt=lt.fog,ft=st.geometry,P=w.isMeshStandardMaterial?lt.environment:null,W=(w.isMeshStandardMaterial?i:e).get(w.envMap||P),j=W&&W.mapping===Nu?W.image.height:null,yt=A[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const Et=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,U=Et!==void 0?Et.length:0;let nt=0;ft.morphAttributes.position!==void 0&&(nt=1),ft.morphAttributes.normal!==void 0&&(nt=2),ft.morphAttributes.color!==void 0&&(nt=3);let St,q,ot,xt;if(yt){const _e=Ai[yt];St=_e.vertexShader,q=_e.fragmentShader}else St=w.vertexShader,q=w.fragmentShader,m.update(w),ot=m.getVertexShaderID(w),xt=m.getFragmentShaderID(w);const Mt=o.getRenderTarget(),Ft=st.isInstancedMesh===!0,It=st.isBatchedMesh===!0,ee=!!w.map,Le=!!w.matcap,F=!!W,Ve=!!w.aoMap,ue=!!w.lightMap,Se=!!w.bumpMap,Vt=!!w.normalMap,Xe=!!w.displacementMap,Jt=!!w.emissiveMap,$t=!!w.metalnessMap,L=!!w.roughnessMap,T=w.anisotropy>0,at=w.clearcoat>0,_t=w.dispersion>0,pt=w.iridescence>0,vt=w.sheen>0,qt=w.transmission>0,Dt=T&&!!w.anisotropyMap,Lt=at&&!!w.clearcoatMap,ne=at&&!!w.clearcoatNormalMap,At=at&&!!w.clearcoatRoughnessMap,Ot=pt&&!!w.iridescenceMap,he=pt&&!!w.iridescenceThicknessMap,jt=vt&&!!w.sheenColorMap,Ct=vt&&!!w.sheenRoughnessMap,Yt=!!w.specularMap,Zt=!!w.specularColorMap,Pe=!!w.specularIntensityMap,V=qt&&!!w.transmissionMap,bt=qt&&!!w.thicknessMap,ht=!!w.gradientMap,gt=!!w.alphaMap,Rt=w.alphaTest>0,kt=!!w.alphaHash,oe=!!w.extensions;let Oe=Ia;w.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Oe=o.toneMapping);const sn={shaderID:yt,shaderType:w.type,shaderName:w.name,vertexShader:St,fragmentShader:q,defines:w.defines,customVertexShaderID:ot,customFragmentShaderID:xt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:It,batchingColor:It&&st._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&st.instanceColor!==null,instancingMorph:Ft&&st.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Mt===null?o.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Ha,alphaToCoverage:!!w.alphaToCoverage,map:ee,matcap:Le,envMap:F,envMapMode:F&&W.mapping,envMapCubeUVHeight:j,aoMap:Ve,lightMap:ue,bumpMap:Se,normalMap:Vt,displacementMap:x&&Xe,emissiveMap:Jt,normalMapObjectSpace:Vt&&w.normalMapType===qx,normalMapTangentSpace:Vt&&w.normalMapType===Wx,metalnessMap:$t,roughnessMap:L,anisotropy:T,anisotropyMap:Dt,clearcoat:at,clearcoatMap:Lt,clearcoatNormalMap:ne,clearcoatRoughnessMap:At,dispersion:_t,iridescence:pt,iridescenceMap:Ot,iridescenceThicknessMap:he,sheen:vt,sheenColorMap:jt,sheenRoughnessMap:Ct,specularMap:Yt,specularColorMap:Zt,specularIntensityMap:Pe,transmission:qt,transmissionMap:V,thicknessMap:bt,gradientMap:ht,opaque:w.transparent===!1&&w.blending===Ss&&w.alphaToCoverage===!1,alphaMap:gt,alphaTest:Rt,alphaHash:kt,combine:w.combine,mapUv:ee&&b(w.map.channel),aoMapUv:Ve&&b(w.aoMap.channel),lightMapUv:ue&&b(w.lightMap.channel),bumpMapUv:Se&&b(w.bumpMap.channel),normalMapUv:Vt&&b(w.normalMap.channel),displacementMapUv:Xe&&b(w.displacementMap.channel),emissiveMapUv:Jt&&b(w.emissiveMap.channel),metalnessMapUv:$t&&b(w.metalnessMap.channel),roughnessMapUv:L&&b(w.roughnessMap.channel),anisotropyMapUv:Dt&&b(w.anisotropyMap.channel),clearcoatMapUv:Lt&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:ne&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:he&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&b(w.sheenRoughnessMap.channel),specularMapUv:Yt&&b(w.specularMap.channel),specularColorMapUv:Zt&&b(w.specularColorMap.channel),specularIntensityMapUv:Pe&&b(w.specularIntensityMap.channel),transmissionMapUv:V&&b(w.transmissionMap.channel),thicknessMapUv:bt&&b(w.thicknessMap.channel),alphaMapUv:gt&&b(w.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Vt||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ft.attributes.uv&&(ee||gt),fog:!!mt,useFog:w.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:st.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:nt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:Oe,decodeVideoTexture:ee&&w.map.isVideoTexture===!0&&Ee.getTransfer(w.map.colorSpace)===Ie,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ki,flipSided:w.side===Fn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:oe&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&w.extensions.multiDraw===!0||It)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return sn.vertexUv1s=p.has(1),sn.vertexUv2s=p.has(2),sn.vertexUv3s=p.has(3),p.clear(),sn}function S(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)C.push(G),C.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(z(C,w),D(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function z(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function D(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.skinning&&d.enable(4),C.morphTargets&&d.enable(5),C.morphNormals&&d.enable(6),C.morphColors&&d.enable(7),C.premultipliedAlpha&&d.enable(8),C.shadowMapEnabled&&d.enable(9),C.doubleSided&&d.enable(10),C.flipSided&&d.enable(11),C.useDepthPacking&&d.enable(12),C.dithering&&d.enable(13),C.transmission&&d.enable(14),C.sheen&&d.enable(15),C.opaque&&d.enable(16),C.pointsUvs&&d.enable(17),C.decodeVideoTexture&&d.enable(18),C.alphaToCoverage&&d.enable(19),w.push(d.mask)}function N(w){const C=A[w.type];let G;if(C){const lt=Ai[C];G=xy.clone(lt.uniforms)}else G=w.uniforms;return G}function $(w,C){let G;for(let lt=0,st=_.length;lt<st;lt++){const mt=_[lt];if(mt.cacheKey===C){G=mt,++G.usedTimes;break}}return G===void 0&&(G=new OA(o,C,w,c),_.push(G)),G}function I(w){if(--w.usedTimes===0){const C=_.indexOf(w);_[C]=_[_.length-1],_.pop(),w.destroy()}}function O(w){m.remove(w)}function Z(){m.dispose()}return{getParameters:y,getProgramCacheKey:S,getUniforms:N,acquireProgram:$,releaseProgram:I,releaseShaderCache:O,programs:_,dispose:Z}}function FA(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function HA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function e0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function n0(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(v,x,M,A,b,y){let S=o[e];return S===void 0?(S={id:v.id,object:v,geometry:x,material:M,groupOrder:A,renderOrder:v.renderOrder,z:b,group:y},o[e]=S):(S.id=v.id,S.object=v,S.geometry=x,S.material=M,S.groupOrder=A,S.renderOrder=v.renderOrder,S.z=b,S.group=y),e++,S}function d(v,x,M,A,b,y){const S=h(v,x,M,A,b,y);M.transmission>0?r.push(S):M.transparent===!0?l.push(S):i.push(S)}function m(v,x,M,A,b,y){const S=h(v,x,M,A,b,y);M.transmission>0?r.unshift(S):M.transparent===!0?l.unshift(S):i.unshift(S)}function p(v,x){i.length>1&&i.sort(v||HA),r.length>1&&r.sort(x||e0),l.length>1&&l.sort(x||e0)}function _(){for(let v=e,x=o.length;v<x;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function GA(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new n0,o.set(r,[h])):l>=c.length?(h=new n0,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function VA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new it,color:new Te};break;case"SpotLight":i={position:new it,direction:new it,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new it,halfWidth:new it,halfHeight:new it};break}return o[e.id]=i,i}}}function XA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let kA=0;function WA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function qA(o){const e=new VA,i=XA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new it);const l=new it,c=new rn,h=new rn;function d(p){let _=0,v=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,A=0,b=0,y=0,S=0,z=0,D=0,N=0,$=0,I=0,O=0;p.sort(WA);for(let w=0,C=p.length;w<C;w++){const G=p[w],lt=G.color,st=G.intensity,mt=G.distance,ft=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)_+=lt.r*st,v+=lt.g*st,x+=lt.b*st;else if(G.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(G.sh.coefficients[P],st);O++}else if(G.isDirectionalLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const W=G.shadow,j=i.get(G);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,r.directionalShadow[M]=j,r.directionalShadowMap[M]=ft,r.directionalShadowMatrix[M]=G.shadow.matrix,z++}r.directional[M]=P,M++}else if(G.isSpotLight){const P=e.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(lt).multiplyScalar(st),P.distance=mt,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,r.spot[b]=P;const W=G.shadow;if(G.map&&(r.spotLightMap[$]=G.map,$++,W.updateMatrices(G),G.castShadow&&I++),r.spotLightMatrix[b]=W.matrix,G.castShadow){const j=i.get(G);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,r.spotShadow[b]=j,r.spotShadowMap[b]=ft,N++}b++}else if(G.isRectAreaLight){const P=e.get(G);P.color.copy(lt).multiplyScalar(st),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=P,y++}else if(G.isPointLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const W=G.shadow,j=i.get(G);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,r.pointShadow[A]=j,r.pointShadowMap[A]=ft,r.pointShadowMatrix[A]=G.shadow.matrix,D++}r.point[A]=P,A++}else if(G.isHemisphereLight){const P=e.get(G);P.skyColor.copy(G.color).multiplyScalar(st),P.groundColor.copy(G.groundColor).multiplyScalar(st),r.hemi[S]=P,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const Z=r.hash;(Z.directionalLength!==M||Z.pointLength!==A||Z.spotLength!==b||Z.rectAreaLength!==y||Z.hemiLength!==S||Z.numDirectionalShadows!==z||Z.numPointShadows!==D||Z.numSpotShadows!==N||Z.numSpotMaps!==$||Z.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=b,r.rectArea.length=y,r.point.length=A,r.hemi.length=S,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=N+$-I,r.spotLightMap.length=$,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=O,Z.directionalLength=M,Z.pointLength=A,Z.spotLength=b,Z.rectAreaLength=y,Z.hemiLength=S,Z.numDirectionalShadows=z,Z.numPointShadows=D,Z.numSpotShadows=N,Z.numSpotMaps=$,Z.numLightProbes=O,r.version=kA++)}function m(p,_){let v=0,x=0,M=0,A=0,b=0;const y=_.matrixWorldInverse;for(let S=0,z=p.length;S<z;S++){const D=p[S];if(D.isDirectionalLight){const N=r.directional[v];N.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),v++}else if(D.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const N=r.rectArea[A];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(y),h.identity(),c.copy(D.matrixWorld),c.premultiply(y),h.extractRotation(c),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),A++}else if(D.isPointLight){const N=r.point[x];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(y),x++}else if(D.isHemisphereLight){const N=r.hemi[b];N.direction.setFromMatrixPosition(D.matrixWorld),N.direction.transformDirection(y),b++}}}return{setup:d,setupView:m,state:r}}function i0(o){const e=new qA(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function YA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new i0(o),e.set(l,[d])):c>=h.length?(d=new i0(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}class ZA extends Io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jA extends Io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QA=`uniform sampler2D shadow_pass;
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
}`;function JA(o,e,i){let r=new B0;const l=new Ae,c=new Ae,h=new pn,d=new ZA({depthPacking:kx}),m=new jA,p={},_=i.maxTextureSize,v={[Fa]:Fn,[Fn]:Fa,[Ki]:Ki},x=new na({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:KA,fragmentShader:QA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const A=new ia;A.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new $i(A,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=f0;let S=this.type;this.render=function(I,O,Z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(Ba),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const st=S!==ji&&this.type===ji,mt=S===ji&&this.type!==ji;for(let ft=0,P=I.length;ft<P;ft++){const W=I[ft],j=W.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const yt=j.getFrameExtents();if(l.multiply(yt),c.copy(j.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/yt.x),l.x=c.x*yt.x,j.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/yt.y),l.y=c.y*yt.y,j.mapSize.y=c.y)),j.map===null||st===!0||mt===!0){const U=this.type!==ji?{minFilter:li,magFilter:li}:{};j.map!==null&&j.map.dispose(),j.map=new Sr(l.x,l.y,U),j.map.texture.name=W.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const Et=j.getViewportCount();for(let U=0;U<Et;U++){const nt=j.getViewport(U);h.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),lt.viewport(h),j.updateMatrices(W,U),r=j.getFrustum(),N(O,Z,j.camera,W,this.type)}j.isPointLightShadow!==!0&&this.type===ji&&z(j,Z),j.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(w,C,G)};function z(I,O){const Z=e.update(b);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Sr(l.x,l.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(O,null,Z,x,b,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(O,null,Z,M,b,null)}function D(I,O,Z,w){let C=null;const G=Z.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)C=G;else if(C=Z.isPointLight===!0?m:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const lt=C.uuid,st=O.uuid;let mt=p[lt];mt===void 0&&(mt={},p[lt]=mt);let ft=mt[st];ft===void 0&&(ft=C.clone(),mt[st]=ft,O.addEventListener("dispose",$)),C=ft}if(C.visible=O.visible,C.wireframe=O.wireframe,w===ji?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:v[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,Z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const lt=o.properties.get(C);lt.light=Z}return C}function N(I,O,Z,w,C){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===ji)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,I.matrixWorld);const st=e.update(I),mt=I.material;if(Array.isArray(mt)){const ft=st.groups;for(let P=0,W=ft.length;P<W;P++){const j=ft[P],yt=mt[j.materialIndex];if(yt&&yt.visible){const Et=D(I,yt,w,C);I.onBeforeShadow(o,I,O,Z,st,Et,j),o.renderBufferDirect(Z,null,st,Et,I,j),I.onAfterShadow(o,I,O,Z,st,Et,j)}}}else if(mt.visible){const ft=D(I,mt,w,C);I.onBeforeShadow(o,I,O,Z,st,ft,null),o.renderBufferDirect(Z,null,st,ft,I,null),I.onAfterShadow(o,I,O,Z,st,ft,null)}}const lt=I.children;for(let st=0,mt=lt.length;st<mt;st++)N(lt[st],O,Z,w,C)}function $(I){I.target.removeEventListener("dispose",$);for(const Z in p){const w=p[Z],C=I.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function $A(o){function e(){let V=!1;const bt=new pn;let ht=null;const gt=new pn(0,0,0,0);return{setMask:function(Rt){ht!==Rt&&!V&&(o.colorMask(Rt,Rt,Rt,Rt),ht=Rt)},setLocked:function(Rt){V=Rt},setClear:function(Rt,kt,oe,Oe,sn){sn===!0&&(Rt*=Oe,kt*=Oe,oe*=Oe),bt.set(Rt,kt,oe,Oe),gt.equals(bt)===!1&&(o.clearColor(Rt,kt,oe,Oe),gt.copy(bt))},reset:function(){V=!1,ht=null,gt.set(-1,0,0,0)}}}function i(){let V=!1,bt=null,ht=null,gt=null;return{setTest:function(Rt){Rt?xt(o.DEPTH_TEST):Mt(o.DEPTH_TEST)},setMask:function(Rt){bt!==Rt&&!V&&(o.depthMask(Rt),bt=Rt)},setFunc:function(Rt){if(ht!==Rt){switch(Rt){case bx:o.depthFunc(o.NEVER);break;case Rx:o.depthFunc(o.ALWAYS);break;case Cx:o.depthFunc(o.LESS);break;case Ru:o.depthFunc(o.LEQUAL);break;case wx:o.depthFunc(o.EQUAL);break;case Dx:o.depthFunc(o.GEQUAL);break;case Ux:o.depthFunc(o.GREATER);break;case Lx:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ht=Rt}},setLocked:function(Rt){V=Rt},setClear:function(Rt){gt!==Rt&&(o.clearDepth(Rt),gt=Rt)},reset:function(){V=!1,bt=null,ht=null,gt=null}}}function r(){let V=!1,bt=null,ht=null,gt=null,Rt=null,kt=null,oe=null,Oe=null,sn=null;return{setTest:function(_e){V||(_e?xt(o.STENCIL_TEST):Mt(o.STENCIL_TEST))},setMask:function(_e){bt!==_e&&!V&&(o.stencilMask(_e),bt=_e)},setFunc:function(_e,Gn,Sn){(ht!==_e||gt!==Gn||Rt!==Sn)&&(o.stencilFunc(_e,Gn,Sn),ht=_e,gt=Gn,Rt=Sn)},setOp:function(_e,Gn,Sn){(kt!==_e||oe!==Gn||Oe!==Sn)&&(o.stencilOp(_e,Gn,Sn),kt=_e,oe=Gn,Oe=Sn)},setLocked:function(_e){V=_e},setClear:function(_e){sn!==_e&&(o.clearStencil(_e),sn=_e)},reset:function(){V=!1,bt=null,ht=null,gt=null,Rt=null,kt=null,oe=null,Oe=null,sn=null}}}const l=new e,c=new i,h=new r,d=new WeakMap,m=new WeakMap;let p={},_={},v=new WeakMap,x=[],M=null,A=!1,b=null,y=null,S=null,z=null,D=null,N=null,$=null,I=new Te(0,0,0),O=0,Z=!1,w=null,C=null,G=null,lt=null,st=null;const mt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ft=!1,P=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(W)[1]),ft=P>=1):W.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),ft=P>=2);let j=null,yt={};const Et=o.getParameter(o.SCISSOR_BOX),U=o.getParameter(o.VIEWPORT),nt=new pn().fromArray(Et),St=new pn().fromArray(U);function q(V,bt,ht,gt){const Rt=new Uint8Array(4),kt=o.createTexture();o.bindTexture(V,kt),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let oe=0;oe<ht;oe++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,gt,0,o.RGBA,o.UNSIGNED_BYTE,Rt):o.texImage2D(bt+oe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Rt);return kt}const ot={};ot[o.TEXTURE_2D]=q(o.TEXTURE_2D,o.TEXTURE_2D,1),ot[o.TEXTURE_CUBE_MAP]=q(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[o.TEXTURE_2D_ARRAY]=q(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ot[o.TEXTURE_3D]=q(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),h.setClear(0),xt(o.DEPTH_TEST),c.setFunc(Ru),Se(!1),Vt(c_),xt(o.CULL_FACE),Ve(Ba);function xt(V){p[V]!==!0&&(o.enable(V),p[V]=!0)}function Mt(V){p[V]!==!1&&(o.disable(V),p[V]=!1)}function Ft(V,bt){return _[V]!==bt?(o.bindFramebuffer(V,bt),_[V]=bt,V===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=bt),V===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function It(V,bt){let ht=x,gt=!1;if(V){ht=v.get(bt),ht===void 0&&(ht=[],v.set(bt,ht));const Rt=V.textures;if(ht.length!==Rt.length||ht[0]!==o.COLOR_ATTACHMENT0){for(let kt=0,oe=Rt.length;kt<oe;kt++)ht[kt]=o.COLOR_ATTACHMENT0+kt;ht.length=Rt.length,gt=!0}}else ht[0]!==o.BACK&&(ht[0]=o.BACK,gt=!0);gt&&o.drawBuffers(ht)}function ee(V){return M!==V?(o.useProgram(V),M=V,!0):!1}const Le={[dr]:o.FUNC_ADD,[ux]:o.FUNC_SUBTRACT,[cx]:o.FUNC_REVERSE_SUBTRACT};Le[fx]=o.MIN,Le[hx]=o.MAX;const F={[dx]:o.ZERO,[px]:o.ONE,[mx]:o.SRC_COLOR,[bh]:o.SRC_ALPHA,[yx]:o.SRC_ALPHA_SATURATE,[Sx]:o.DST_COLOR,[_x]:o.DST_ALPHA,[gx]:o.ONE_MINUS_SRC_COLOR,[Rh]:o.ONE_MINUS_SRC_ALPHA,[xx]:o.ONE_MINUS_DST_COLOR,[vx]:o.ONE_MINUS_DST_ALPHA,[Mx]:o.CONSTANT_COLOR,[Ex]:o.ONE_MINUS_CONSTANT_COLOR,[Tx]:o.CONSTANT_ALPHA,[Ax]:o.ONE_MINUS_CONSTANT_ALPHA};function Ve(V,bt,ht,gt,Rt,kt,oe,Oe,sn,_e){if(V===Ba){A===!0&&(Mt(o.BLEND),A=!1);return}if(A===!1&&(xt(o.BLEND),A=!0),V!==lx){if(V!==b||_e!==Z){if((y!==dr||D!==dr)&&(o.blendEquation(o.FUNC_ADD),y=dr,D=dr),_e)switch(V){case Ss:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ah:o.blendFunc(o.ONE,o.ONE);break;case f_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case h_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ss:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ah:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case f_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case h_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}S=null,z=null,N=null,$=null,I.set(0,0,0),O=0,b=V,Z=_e}return}Rt=Rt||bt,kt=kt||ht,oe=oe||gt,(bt!==y||Rt!==D)&&(o.blendEquationSeparate(Le[bt],Le[Rt]),y=bt,D=Rt),(ht!==S||gt!==z||kt!==N||oe!==$)&&(o.blendFuncSeparate(F[ht],F[gt],F[kt],F[oe]),S=ht,z=gt,N=kt,$=oe),(Oe.equals(I)===!1||sn!==O)&&(o.blendColor(Oe.r,Oe.g,Oe.b,sn),I.copy(Oe),O=sn),b=V,Z=!1}function ue(V,bt){V.side===Ki?Mt(o.CULL_FACE):xt(o.CULL_FACE);let ht=V.side===Fn;bt&&(ht=!ht),Se(ht),V.blending===Ss&&V.transparent===!1?Ve(Ba):Ve(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),l.setMask(V.colorWrite);const gt=V.stencilWrite;h.setTest(gt),gt&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Jt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?xt(o.SAMPLE_ALPHA_TO_COVERAGE):Mt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Se(V){w!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),w=V)}function Vt(V){V!==rx?(xt(o.CULL_FACE),V!==C&&(V===c_?o.cullFace(o.BACK):V===sx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Mt(o.CULL_FACE),C=V}function Xe(V){V!==G&&(ft&&o.lineWidth(V),G=V)}function Jt(V,bt,ht){V?(xt(o.POLYGON_OFFSET_FILL),(lt!==bt||st!==ht)&&(o.polygonOffset(bt,ht),lt=bt,st=ht)):Mt(o.POLYGON_OFFSET_FILL)}function $t(V){V?xt(o.SCISSOR_TEST):Mt(o.SCISSOR_TEST)}function L(V){V===void 0&&(V=o.TEXTURE0+mt-1),j!==V&&(o.activeTexture(V),j=V)}function T(V,bt,ht){ht===void 0&&(j===null?ht=o.TEXTURE0+mt-1:ht=j);let gt=yt[ht];gt===void 0&&(gt={type:void 0,texture:void 0},yt[ht]=gt),(gt.type!==V||gt.texture!==bt)&&(j!==ht&&(o.activeTexture(ht),j=ht),o.bindTexture(V,bt||ot[V]),gt.type=V,gt.texture=bt)}function at(){const V=yt[j];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function _t(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function vt(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qt(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ne(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function At(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ot(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function jt(V){nt.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),nt.copy(V))}function Ct(V){St.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),St.copy(V))}function Yt(V,bt){let ht=m.get(bt);ht===void 0&&(ht=new WeakMap,m.set(bt,ht));let gt=ht.get(V);gt===void 0&&(gt=o.getUniformBlockIndex(bt,V.name),ht.set(V,gt))}function Zt(V,bt){const gt=m.get(bt).get(V);d.get(bt)!==gt&&(o.uniformBlockBinding(bt,gt,V.__bindingPointIndex),d.set(bt,gt))}function Pe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},j=null,yt={},_={},v=new WeakMap,x=[],M=null,A=!1,b=null,y=null,S=null,z=null,D=null,N=null,$=null,I=new Te(0,0,0),O=0,Z=!1,w=null,C=null,G=null,lt=null,st=null,nt.set(0,0,o.canvas.width,o.canvas.height),St.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),h.reset()}return{buffers:{color:l,depth:c,stencil:h},enable:xt,disable:Mt,bindFramebuffer:Ft,drawBuffers:It,useProgram:ee,setBlending:Ve,setMaterial:ue,setFlipSided:Se,setCullFace:Vt,setLineWidth:Xe,setPolygonOffset:Jt,setScissorTest:$t,activeTexture:L,bindTexture:T,unbindTexture:at,compressedTexImage2D:_t,compressedTexImage3D:pt,texImage2D:Ot,texImage3D:he,updateUBOMapping:Yt,uniformBlockBinding:Zt,texStorage2D:ne,texStorage3D:At,texSubImage2D:vt,texSubImage3D:qt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Lt,scissor:jt,viewport:Ct,reset:Pe}}function a0(o,e,i,r){const l=tb(r);switch(i){case _0:return o*e;case S0:return o*e;case x0:return o*e*2;case y0:return o*e/l.components*l.byteLength;case hd:return o*e/l.components*l.byteLength;case M0:return o*e*2/l.components*l.byteLength;case dd:return o*e*2/l.components*l.byteLength;case v0:return o*e*3/l.components*l.byteLength;case vi:return o*e*4/l.components*l.byteLength;case pd:return o*e*4/l.components*l.byteLength;case yu:case Mu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Eu:case Tu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Nh:case Ph:return Math.max(o,16)*Math.max(e,8)/4;case Lh:case Oh:return Math.max(o,8)*Math.max(e,8)/2;case zh:case Bh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ih:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case kh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case qh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case jh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Au:case $h:case td:return Math.ceil(o/4)*Math.ceil(e/4)*16;case E0:case ed:return Math.ceil(o/4)*Math.ceil(e/4)*8;case nd:case id:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function tb(o){switch(o){case ta:case p0:return{byteLength:1,components:1};case No:case m0:case Oo:return{byteLength:2,components:1};case cd:case fd:return{byteLength:2,components:4};case vr:case ud:case Qi:return{byteLength:4,components:1};case g0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function eb(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ae,_=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,T){return M?new OffscreenCanvas(L,T):Lu("canvas")}function b(L,T,at){let _t=1;const pt=$t(L);if((pt.width>at||pt.height>at)&&(_t=at/Math.max(pt.width,pt.height)),_t<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const vt=Math.floor(_t*pt.width),qt=Math.floor(_t*pt.height);v===void 0&&(v=A(vt,qt));const Dt=T?A(vt,qt):v;return Dt.width=vt,Dt.height=qt,Dt.getContext("2d").drawImage(L,0,0,vt,qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+vt+"x"+qt+")."),Dt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),L;return L}function y(L){return L.generateMipmaps&&L.minFilter!==li&&L.minFilter!==_i}function S(L){o.generateMipmap(L)}function z(L,T,at,_t,pt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let vt=T;if(T===o.RED&&(at===o.FLOAT&&(vt=o.R32F),at===o.HALF_FLOAT&&(vt=o.R16F),at===o.UNSIGNED_BYTE&&(vt=o.R8)),T===o.RED_INTEGER&&(at===o.UNSIGNED_BYTE&&(vt=o.R8UI),at===o.UNSIGNED_SHORT&&(vt=o.R16UI),at===o.UNSIGNED_INT&&(vt=o.R32UI),at===o.BYTE&&(vt=o.R8I),at===o.SHORT&&(vt=o.R16I),at===o.INT&&(vt=o.R32I)),T===o.RG&&(at===o.FLOAT&&(vt=o.RG32F),at===o.HALF_FLOAT&&(vt=o.RG16F),at===o.UNSIGNED_BYTE&&(vt=o.RG8)),T===o.RG_INTEGER&&(at===o.UNSIGNED_BYTE&&(vt=o.RG8UI),at===o.UNSIGNED_SHORT&&(vt=o.RG16UI),at===o.UNSIGNED_INT&&(vt=o.RG32UI),at===o.BYTE&&(vt=o.RG8I),at===o.SHORT&&(vt=o.RG16I),at===o.INT&&(vt=o.RG32I)),T===o.RGB&&at===o.UNSIGNED_INT_5_9_9_9_REV&&(vt=o.RGB9_E5),T===o.RGBA){const qt=pt?Cu:Ee.getTransfer(_t);at===o.FLOAT&&(vt=o.RGBA32F),at===o.HALF_FLOAT&&(vt=o.RGBA16F),at===o.UNSIGNED_BYTE&&(vt=qt===Ie?o.SRGB8_ALPHA8:o.RGBA8),at===o.UNSIGNED_SHORT_4_4_4_4&&(vt=o.RGBA4),at===o.UNSIGNED_SHORT_5_5_5_1&&(vt=o.RGB5_A1)}return(vt===o.R16F||vt===o.R32F||vt===o.RG16F||vt===o.RG32F||vt===o.RGBA16F||vt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),vt}function D(L,T){let at;return L?T===null||T===vr||T===Ts?at=o.DEPTH24_STENCIL8:T===Qi?at=o.DEPTH32F_STENCIL8:T===No&&(at=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===vr||T===Ts?at=o.DEPTH_COMPONENT24:T===Qi?at=o.DEPTH_COMPONENT32F:T===No&&(at=o.DEPTH_COMPONENT16),at}function N(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==li&&L.minFilter!==_i?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function $(L){const T=L.target;T.removeEventListener("dispose",$),O(T),T.isVideoTexture&&_.delete(T)}function I(L){const T=L.target;T.removeEventListener("dispose",I),w(T)}function O(L){const T=r.get(L);if(T.__webglInit===void 0)return;const at=L.source,_t=x.get(at);if(_t){const pt=_t[T.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&Z(L),Object.keys(_t).length===0&&x.delete(at)}r.remove(L)}function Z(L){const T=r.get(L);o.deleteTexture(T.__webglTexture);const at=L.source,_t=x.get(at);delete _t[T.__cacheKey],h.memory.textures--}function w(L){const T=r.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(T.__webglFramebuffer[_t]))for(let pt=0;pt<T.__webglFramebuffer[_t].length;pt++)o.deleteFramebuffer(T.__webglFramebuffer[_t][pt]);else o.deleteFramebuffer(T.__webglFramebuffer[_t]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[_t])}else{if(Array.isArray(T.__webglFramebuffer))for(let _t=0;_t<T.__webglFramebuffer.length;_t++)o.deleteFramebuffer(T.__webglFramebuffer[_t]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _t=0;_t<T.__webglColorRenderbuffer.length;_t++)T.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[_t]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const at=L.textures;for(let _t=0,pt=at.length;_t<pt;_t++){const vt=r.get(at[_t]);vt.__webglTexture&&(o.deleteTexture(vt.__webglTexture),h.memory.textures--),r.remove(at[_t])}r.remove(L)}let C=0;function G(){C=0}function lt(){const L=C;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),C+=1,L}function st(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function mt(L,T){const at=r.get(L);if(L.isVideoTexture&&Xe(L),L.isRenderTargetTexture===!1&&L.version>0&&at.__version!==L.version){const _t=L.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(at,L,T);return}}i.bindTexture(o.TEXTURE_2D,at.__webglTexture,o.TEXTURE0+T)}function ft(L,T){const at=r.get(L);if(L.version>0&&at.__version!==L.version){St(at,L,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,at.__webglTexture,o.TEXTURE0+T)}function P(L,T){const at=r.get(L);if(L.version>0&&at.__version!==L.version){St(at,L,T);return}i.bindTexture(o.TEXTURE_3D,at.__webglTexture,o.TEXTURE0+T)}function W(L,T){const at=r.get(L);if(L.version>0&&at.__version!==L.version){q(at,L,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture,o.TEXTURE0+T)}const j={[Dh]:o.REPEAT,[mr]:o.CLAMP_TO_EDGE,[Uh]:o.MIRRORED_REPEAT},yt={[li]:o.NEAREST,[Vx]:o.NEAREST_MIPMAP_NEAREST,[Kl]:o.NEAREST_MIPMAP_LINEAR,[_i]:o.LINEAR,[Kf]:o.LINEAR_MIPMAP_NEAREST,[gr]:o.LINEAR_MIPMAP_LINEAR},Et={[Yx]:o.NEVER,[$x]:o.ALWAYS,[Zx]:o.LESS,[T0]:o.LEQUAL,[jx]:o.EQUAL,[Jx]:o.GEQUAL,[Kx]:o.GREATER,[Qx]:o.NOTEQUAL};function U(L,T){if(T.type===Qi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===_i||T.magFilter===Kf||T.magFilter===Kl||T.magFilter===gr||T.minFilter===_i||T.minFilter===Kf||T.minFilter===Kl||T.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,j[T.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,j[T.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,j[T.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,yt[T.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,yt[T.minFilter]),T.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,Et[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===li||T.minFilter!==Kl&&T.minFilter!==gr||T.type===Qi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const at=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function nt(L,T){let at=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",$));const _t=T.source;let pt=x.get(_t);pt===void 0&&(pt={},x.set(_t,pt));const vt=st(T);if(vt!==L.__cacheKey){pt[vt]===void 0&&(pt[vt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,at=!0),pt[vt].usedTimes++;const qt=pt[L.__cacheKey];qt!==void 0&&(pt[L.__cacheKey].usedTimes--,qt.usedTimes===0&&Z(T)),L.__cacheKey=vt,L.__webglTexture=pt[vt].texture}return at}function St(L,T,at){let _t=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_t=o.TEXTURE_3D);const pt=nt(L,T),vt=T.source;i.bindTexture(_t,L.__webglTexture,o.TEXTURE0+at);const qt=r.get(vt);if(vt.version!==qt.__version||pt===!0){i.activeTexture(o.TEXTURE0+at);const Dt=Ee.getPrimaries(Ee.workingColorSpace),Lt=T.colorSpace===za?null:Ee.getPrimaries(T.colorSpace),ne=T.colorSpace===za||Dt===Lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let At=b(T.image,!1,l.maxTextureSize);At=Jt(T,At);const Ot=c.convert(T.format,T.colorSpace),he=c.convert(T.type);let jt=z(T.internalFormat,Ot,he,T.colorSpace,T.isVideoTexture);U(_t,T);let Ct;const Yt=T.mipmaps,Zt=T.isVideoTexture!==!0,Pe=qt.__version===void 0||pt===!0,V=vt.dataReady,bt=N(T,At);if(T.isDepthTexture)jt=D(T.format===As,T.type),Pe&&(Zt?i.texStorage2D(o.TEXTURE_2D,1,jt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,jt,At.width,At.height,0,Ot,he,null));else if(T.isDataTexture)if(Yt.length>0){Zt&&Pe&&i.texStorage2D(o.TEXTURE_2D,bt,jt,Yt[0].width,Yt[0].height);for(let ht=0,gt=Yt.length;ht<gt;ht++)Ct=Yt[ht],Zt?V&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,Ct.width,Ct.height,Ot,he,Ct.data):i.texImage2D(o.TEXTURE_2D,ht,jt,Ct.width,Ct.height,0,Ot,he,Ct.data);T.generateMipmaps=!1}else Zt?(Pe&&i.texStorage2D(o.TEXTURE_2D,bt,jt,At.width,At.height),V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,Ot,he,At.data)):i.texImage2D(o.TEXTURE_2D,0,jt,At.width,At.height,0,Ot,he,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Zt&&Pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,bt,jt,Yt[0].width,Yt[0].height,At.depth);for(let ht=0,gt=Yt.length;ht<gt;ht++)if(Ct=Yt[ht],T.format!==vi)if(Ot!==null)if(Zt){if(V)if(T.layerUpdates.size>0){const Rt=a0(Ct.width,Ct.height,T.format,T.type);for(const kt of T.layerUpdates){const oe=Ct.data.subarray(kt*Rt/Ct.data.BYTES_PER_ELEMENT,(kt+1)*Rt/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,kt,Ct.width,Ct.height,1,Ot,oe,0,0)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,0,Ct.width,Ct.height,At.depth,Ot,Ct.data,0,0)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ht,jt,Ct.width,Ct.height,At.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?V&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,0,Ct.width,Ct.height,At.depth,Ot,he,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ht,jt,Ct.width,Ct.height,At.depth,0,Ot,he,Ct.data)}else{Zt&&Pe&&i.texStorage2D(o.TEXTURE_2D,bt,jt,Yt[0].width,Yt[0].height);for(let ht=0,gt=Yt.length;ht<gt;ht++)Ct=Yt[ht],T.format!==vi?Ot!==null?Zt?V&&i.compressedTexSubImage2D(o.TEXTURE_2D,ht,0,0,Ct.width,Ct.height,Ot,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,ht,jt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?V&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,Ct.width,Ct.height,Ot,he,Ct.data):i.texImage2D(o.TEXTURE_2D,ht,jt,Ct.width,Ct.height,0,Ot,he,Ct.data)}else if(T.isDataArrayTexture)if(Zt){if(Pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,bt,jt,At.width,At.height,At.depth),V)if(T.layerUpdates.size>0){const ht=a0(At.width,At.height,T.format,T.type);for(const gt of T.layerUpdates){const Rt=At.data.subarray(gt*ht/At.data.BYTES_PER_ELEMENT,(gt+1)*ht/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,At.width,At.height,1,Ot,he,Rt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ot,he,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,At.width,At.height,At.depth,0,Ot,he,At.data);else if(T.isData3DTexture)Zt?(Pe&&i.texStorage3D(o.TEXTURE_3D,bt,jt,At.width,At.height,At.depth),V&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ot,he,At.data)):i.texImage3D(o.TEXTURE_3D,0,jt,At.width,At.height,At.depth,0,Ot,he,At.data);else if(T.isFramebufferTexture){if(Pe)if(Zt)i.texStorage2D(o.TEXTURE_2D,bt,jt,At.width,At.height);else{let ht=At.width,gt=At.height;for(let Rt=0;Rt<bt;Rt++)i.texImage2D(o.TEXTURE_2D,Rt,jt,ht,gt,0,Ot,he,null),ht>>=1,gt>>=1}}else if(Yt.length>0){if(Zt&&Pe){const ht=$t(Yt[0]);i.texStorage2D(o.TEXTURE_2D,bt,jt,ht.width,ht.height)}for(let ht=0,gt=Yt.length;ht<gt;ht++)Ct=Yt[ht],Zt?V&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,Ot,he,Ct):i.texImage2D(o.TEXTURE_2D,ht,jt,Ot,he,Ct);T.generateMipmaps=!1}else if(Zt){if(Pe){const ht=$t(At);i.texStorage2D(o.TEXTURE_2D,bt,jt,ht.width,ht.height)}V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,he,At)}else i.texImage2D(o.TEXTURE_2D,0,jt,Ot,he,At);y(T)&&S(_t),qt.__version=vt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function q(L,T,at){if(T.image.length!==6)return;const _t=nt(L,T),pt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+at);const vt=r.get(pt);if(pt.version!==vt.__version||_t===!0){i.activeTexture(o.TEXTURE0+at);const qt=Ee.getPrimaries(Ee.workingColorSpace),Dt=T.colorSpace===za?null:Ee.getPrimaries(T.colorSpace),Lt=T.colorSpace===za||qt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const ne=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,Ot=[];for(let gt=0;gt<6;gt++)!ne&&!At?Ot[gt]=b(T.image[gt],!0,l.maxCubemapSize):Ot[gt]=At?T.image[gt].image:T.image[gt],Ot[gt]=Jt(T,Ot[gt]);const he=Ot[0],jt=c.convert(T.format,T.colorSpace),Ct=c.convert(T.type),Yt=z(T.internalFormat,jt,Ct,T.colorSpace),Zt=T.isVideoTexture!==!0,Pe=vt.__version===void 0||_t===!0,V=pt.dataReady;let bt=N(T,he);U(o.TEXTURE_CUBE_MAP,T);let ht;if(ne){Zt&&Pe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,bt,Yt,he.width,he.height);for(let gt=0;gt<6;gt++){ht=Ot[gt].mipmaps;for(let Rt=0;Rt<ht.length;Rt++){const kt=ht[Rt];T.format!==vi?jt!==null?Zt?V&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,0,0,kt.width,kt.height,jt,kt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,Yt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,0,0,kt.width,kt.height,jt,Ct,kt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,Yt,kt.width,kt.height,0,jt,Ct,kt.data)}}}else{if(ht=T.mipmaps,Zt&&Pe){ht.length>0&&bt++;const gt=$t(Ot[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,bt,Yt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(At){Zt?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ot[gt].width,Ot[gt].height,jt,Ct,Ot[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Yt,Ot[gt].width,Ot[gt].height,0,jt,Ct,Ot[gt].data);for(let Rt=0;Rt<ht.length;Rt++){const oe=ht[Rt].image[gt].image;Zt?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,0,0,oe.width,oe.height,jt,Ct,oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,Yt,oe.width,oe.height,0,jt,Ct,oe.data)}}else{Zt?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,jt,Ct,Ot[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Yt,jt,Ct,Ot[gt]);for(let Rt=0;Rt<ht.length;Rt++){const kt=ht[Rt];Zt?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,0,0,jt,Ct,kt.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,Yt,jt,Ct,kt.image[gt])}}}y(T)&&S(o.TEXTURE_CUBE_MAP),vt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ot(L,T,at,_t,pt,vt){const qt=c.convert(at.format,at.colorSpace),Dt=c.convert(at.type),Lt=z(at.internalFormat,qt,Dt,at.colorSpace);if(!r.get(T).__hasExternalTextures){const At=Math.max(1,T.width>>vt),Ot=Math.max(1,T.height>>vt);pt===o.TEXTURE_3D||pt===o.TEXTURE_2D_ARRAY?i.texImage3D(pt,vt,Lt,At,Ot,T.depth,0,qt,Dt,null):i.texImage2D(pt,vt,Lt,At,Ot,0,qt,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Vt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,pt,r.get(at).__webglTexture,0,Se(T)):(pt===o.TEXTURE_2D||pt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,pt,r.get(at).__webglTexture,vt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function xt(L,T,at){if(o.bindRenderbuffer(o.RENDERBUFFER,L),T.depthBuffer){const _t=T.depthTexture,pt=_t&&_t.isDepthTexture?_t.type:null,vt=D(T.stencilBuffer,pt),qt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=Se(T);Vt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,vt,T.width,T.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,vt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,vt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,L)}else{const _t=T.textures;for(let pt=0;pt<_t.length;pt++){const vt=_t[pt],qt=c.convert(vt.format,vt.colorSpace),Dt=c.convert(vt.type),Lt=z(vt.internalFormat,qt,Dt,vt.colorSpace),ne=Se(T);at&&Vt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,Lt,T.width,T.height):Vt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ne,Lt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Lt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Mt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),mt(T.depthTexture,0);const _t=r.get(T.depthTexture).__webglTexture,pt=Se(T);if(T.depthTexture.format===xs)Vt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0);else if(T.depthTexture.format===As)Vt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function Ft(L){const T=r.get(L),at=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const _t=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_t){const pt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_t.removeEventListener("dispose",pt)};_t.addEventListener("dispose",pt),T.__depthDisposeCallback=pt}T.__boundDepthTexture=_t}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");Mt(T.__webglFramebuffer,L)}else if(at){T.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[_t]),T.__webglDepthbuffer[_t]===void 0)T.__webglDepthbuffer[_t]=o.createRenderbuffer(),xt(T.__webglDepthbuffer[_t],L,!1);else{const pt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,vt=T.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,vt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,vt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),xt(T.__webglDepthbuffer,L,!1);else{const _t=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,pt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function It(L,T,at){const _t=r.get(L);T!==void 0&&ot(_t.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),at!==void 0&&Ft(L)}function ee(L){const T=L.texture,at=r.get(L),_t=r.get(T);L.addEventListener("dispose",I);const pt=L.textures,vt=L.isWebGLCubeRenderTarget===!0,qt=pt.length>1;if(qt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=T.version,h.memory.textures++),vt){at.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer[Dt]=[];for(let Lt=0;Lt<T.mipmaps.length;Lt++)at.__webglFramebuffer[Dt][Lt]=o.createFramebuffer()}else at.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)at.__webglFramebuffer[Dt]=o.createFramebuffer()}else at.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Dt=0,Lt=pt.length;Dt<Lt;Dt++){const ne=r.get(pt[Dt]);ne.__webglTexture===void 0&&(ne.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&Vt(L)===!1){at.__webglMultisampledFramebuffer=o.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Dt=0;Dt<pt.length;Dt++){const Lt=pt[Dt];at.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,at.__webglColorRenderbuffer[Dt]);const ne=c.convert(Lt.format,Lt.colorSpace),At=c.convert(Lt.type),Ot=z(Lt.internalFormat,ne,At,Lt.colorSpace,L.isXRRenderTarget===!0),he=Se(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,he,Ot,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,at.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(at.__webglDepthRenderbuffer=o.createRenderbuffer(),xt(at.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(vt){i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),U(o.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Lt=0;Lt<T.mipmaps.length;Lt++)ot(at.__webglFramebuffer[Dt][Lt],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Lt);else ot(at.__webglFramebuffer[Dt],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(T)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Dt=0,Lt=pt.length;Dt<Lt;Dt++){const ne=pt[Dt],At=r.get(ne);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),U(o.TEXTURE_2D,ne),ot(at.__webglFramebuffer,L,ne,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),y(ne)&&S(o.TEXTURE_2D)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Dt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,_t.__webglTexture),U(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Lt=0;Lt<T.mipmaps.length;Lt++)ot(at.__webglFramebuffer[Lt],L,T,o.COLOR_ATTACHMENT0,Dt,Lt);else ot(at.__webglFramebuffer,L,T,o.COLOR_ATTACHMENT0,Dt,0);y(T)&&S(Dt),i.unbindTexture()}L.depthBuffer&&Ft(L)}function Le(L){const T=L.textures;for(let at=0,_t=T.length;at<_t;at++){const pt=T[at];if(y(pt)){const vt=L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,qt=r.get(pt).__webglTexture;i.bindTexture(vt,qt),S(vt),i.unbindTexture()}}}const F=[],Ve=[];function ue(L){if(L.samples>0){if(Vt(L)===!1){const T=L.textures,at=L.width,_t=L.height;let pt=o.COLOR_BUFFER_BIT;const vt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=r.get(L),Dt=T.length>1;if(Dt)for(let Lt=0;Lt<T.length;Lt++)i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Lt=0;Lt<T.length;Lt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(pt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(pt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Lt]);const ne=r.get(T[Lt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ne,0)}o.blitFramebuffer(0,0,at,_t,0,0,at,_t,pt,o.NEAREST),m===!0&&(F.length=0,Ve.length=0,F.push(o.COLOR_ATTACHMENT0+Lt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(F.push(vt),Ve.push(vt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ve)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,F))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Lt=0;Lt<T.length;Lt++){i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Lt]);const ne=r.get(T[Lt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.TEXTURE_2D,ne,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Se(L){return Math.min(l.maxSamples,L.samples)}function Vt(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xe(L){const T=h.render.frame;_.get(L)!==T&&(_.set(L,T),L.update())}function Jt(L,T){const at=L.colorSpace,_t=L.format,pt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||at!==Ha&&at!==za&&(Ee.getTransfer(at)===Ie?(_t!==vi||pt!==ta)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),T}function $t(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=G,this.setTexture2D=mt,this.setTexture2DArray=ft,this.setTexture3D=P,this.setTextureCube=W,this.rebindTextures=It,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Vt}function nb(o,e){function i(r,l=za){let c;const h=Ee.getTransfer(l);if(r===ta)return o.UNSIGNED_BYTE;if(r===cd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===fd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===g0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===p0)return o.BYTE;if(r===m0)return o.SHORT;if(r===No)return o.UNSIGNED_SHORT;if(r===ud)return o.INT;if(r===vr)return o.UNSIGNED_INT;if(r===Qi)return o.FLOAT;if(r===Oo)return o.HALF_FLOAT;if(r===_0)return o.ALPHA;if(r===v0)return o.RGB;if(r===vi)return o.RGBA;if(r===S0)return o.LUMINANCE;if(r===x0)return o.LUMINANCE_ALPHA;if(r===xs)return o.DEPTH_COMPONENT;if(r===As)return o.DEPTH_STENCIL;if(r===y0)return o.RED;if(r===hd)return o.RED_INTEGER;if(r===M0)return o.RG;if(r===dd)return o.RG_INTEGER;if(r===pd)return o.RGBA_INTEGER;if(r===yu||r===Mu||r===Eu||r===Tu)if(h===Ie)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===yu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===yu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Lh||r===Nh||r===Oh||r===Ph)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Lh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Oh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ph)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zh||r===Bh||r===Ih)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===zh||r===Bh)return h===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ih)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fh||r===Hh||r===Gh||r===Vh||r===Xh||r===kh||r===Wh||r===qh||r===Yh||r===Zh||r===jh||r===Kh||r===Qh||r===Jh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Fh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Au||r===$h||r===td)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Au)return h===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$h)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===td)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===E0||r===ed||r===nd||r===id)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Au)return c.COMPRESSED_RED_RGTC1_EXT;if(r===ed)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===id)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ts?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class ib extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vu extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ab={type:"move"};class Eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const b of e.hand.values()){const y=i.getJointPose(b,r),S=this._getHandJoint(p,b);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=_.position.distanceTo(v.position),M=.02,A=.005;p.inputState.pinching&&x>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ab)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new vu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sb=`
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

}`;class ob{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new wn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new na({vertexShader:rb,fragmentShader:sb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $i(new zu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lb extends Rs{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,v=null,x=null,M=null,A=null;const b=new ob,y=i.getContextAttributes();let S=null,z=null;const D=[],N=[],$=new Ae;let I=null;const O=new oi;O.layers.enable(1),O.viewport=new pn;const Z=new oi;Z.layers.enable(2),Z.viewport=new pn;const w=[O,Z],C=new ib;C.layers.enable(1),C.layers.enable(2);let G=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ot=D[q];return ot===void 0&&(ot=new Eh,D[q]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(q){let ot=D[q];return ot===void 0&&(ot=new Eh,D[q]=ot),ot.getGripSpace()},this.getHand=function(q){let ot=D[q];return ot===void 0&&(ot=new Eh,D[q]=ot),ot.getHandSpace()};function st(q){const ot=N.indexOf(q.inputSource);if(ot===-1)return;const xt=D[ot];xt!==void 0&&(xt.update(q.inputSource,q.frame,p||h),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function mt(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",mt),l.removeEventListener("inputsourceschange",ft);for(let q=0;q<D.length;q++){const ot=N[q];ot!==null&&(N[q]=null,D[q].disconnect(ot))}G=null,lt=null,b.reset(),e.setRenderTarget(S),M=null,x=null,v=null,l=null,z=null,St.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize($.width,$.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){c=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(q){p=q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(S=e.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",mt),l.addEventListener("inputsourceschange",ft),y.xrCompatible!==!0&&await i.makeXRCompatible(),I=e.getPixelRatio(),e.getSize($),l.renderState.layers===void 0){const ot={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ot),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new Sr(M.framebufferWidth,M.framebufferHeight,{format:vi,type:ta,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ot=null,xt=null,Mt=null;y.depth&&(Mt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ot=y.stencil?As:xs,xt=y.stencil?Ts:vr);const Ft={colorFormat:i.RGBA8,depthFormat:Mt,scaleFactor:c};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(Ft),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),z=new Sr(x.textureWidth,x.textureHeight,{format:vi,type:ta,depthTexture:new F0(x.textureWidth,x.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),St.setContext(l),St.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ft(q){for(let ot=0;ot<q.removed.length;ot++){const xt=q.removed[ot],Mt=N.indexOf(xt);Mt>=0&&(N[Mt]=null,D[Mt].disconnect(xt))}for(let ot=0;ot<q.added.length;ot++){const xt=q.added[ot];let Mt=N.indexOf(xt);if(Mt===-1){for(let It=0;It<D.length;It++)if(It>=N.length){N.push(xt),Mt=It;break}else if(N[It]===null){N[It]=xt,Mt=It;break}if(Mt===-1)break}const Ft=D[Mt];Ft&&Ft.connect(xt)}}const P=new it,W=new it;function j(q,ot,xt){P.setFromMatrixPosition(ot.matrixWorld),W.setFromMatrixPosition(xt.matrixWorld);const Mt=P.distanceTo(W),Ft=ot.projectionMatrix.elements,It=xt.projectionMatrix.elements,ee=Ft[14]/(Ft[10]-1),Le=Ft[14]/(Ft[10]+1),F=(Ft[9]+1)/Ft[5],Ve=(Ft[9]-1)/Ft[5],ue=(Ft[8]-1)/Ft[0],Se=(It[8]+1)/It[0],Vt=ee*ue,Xe=ee*Se,Jt=Mt/(-ue+Se),$t=Jt*-ue;if(ot.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX($t),q.translateZ(Jt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ft[10]===-1)q.projectionMatrix.copy(ot.projectionMatrix),q.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const L=ee+Jt,T=Le+Jt,at=Vt-$t,_t=Xe+(Mt-$t),pt=F*Le/T*L,vt=Ve*Le/T*L;q.projectionMatrix.makePerspective(at,_t,pt,vt,L,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function yt(q,ot){ot===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ot.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let ot=q.near,xt=q.far;b.texture!==null&&(b.depthNear>0&&(ot=b.depthNear),b.depthFar>0&&(xt=b.depthFar)),C.near=Z.near=O.near=ot,C.far=Z.far=O.far=xt,(G!==C.near||lt!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,lt=C.far);const Mt=q.parent,Ft=C.cameras;yt(C,Mt);for(let It=0;It<Ft.length;It++)yt(Ft[It],Mt);Ft.length===2?j(C,O,Z):C.projectionMatrix.copy(O.projectionMatrix),Et(q,C,Mt)};function Et(q,ot,xt){xt===null?q.matrix.copy(ot.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(ot.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ot.projectionMatrix),q.projectionMatrixInverse.copy(ot.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ad*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(q){m=q,x!==null&&(x.fixedFoveation=q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(C)};let U=null;function nt(q,ot){if(_=ot.getViewerPose(p||h),A=ot,_!==null){const xt=_.views;M!==null&&(e.setRenderTargetFramebuffer(z,M.framebuffer),e.setRenderTarget(z));let Mt=!1;xt.length!==C.cameras.length&&(C.cameras.length=0,Mt=!0);for(let It=0;It<xt.length;It++){const ee=xt[It];let Le=null;if(M!==null)Le=M.getViewport(ee);else{const Ve=v.getViewSubImage(x,ee);Le=Ve.viewport,It===0&&(e.setRenderTargetTextures(z,Ve.colorTexture,x.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(z))}let F=w[It];F===void 0&&(F=new oi,F.layers.enable(It),F.viewport=new pn,w[It]=F),F.matrix.fromArray(ee.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(ee.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(Le.x,Le.y,Le.width,Le.height),It===0&&(C.matrix.copy(F.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Mt===!0&&C.cameras.push(F)}const Ft=l.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const It=v.getDepthInformation(xt[0]);It&&It.isValid&&It.texture&&b.init(e,It,l.renderState)}}for(let xt=0;xt<D.length;xt++){const Mt=N[xt],Ft=D[xt];Mt!==null&&Ft!==void 0&&Ft.update(Mt,ot,p||h)}U&&U(q,ot),ot.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ot}),A=null}const St=new I0;St.setAnimationLoop(nt),this.setAnimationLoop=function(q){U=q},this.dispose=function(){}}}const ur=new ea,ub=new rn;function cb(o,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,O0(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,z,D,N){S.isMeshBasicMaterial||S.isMeshLambertMaterial?c(y,S):S.isMeshToonMaterial?(c(y,S),v(y,S)):S.isMeshPhongMaterial?(c(y,S),_(y,S)):S.isMeshStandardMaterial?(c(y,S),x(y,S),S.isMeshPhysicalMaterial&&M(y,S,N)):S.isMeshMatcapMaterial?(c(y,S),A(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),b(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(h(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?m(y,S,z,D):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Fn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Fn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const z=e.get(S),D=z.envMap,N=z.envMapRotation;D&&(y.envMap.value=D,ur.copy(N),ur.x*=-1,ur.y*=-1,ur.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),y.envMapRotation.value.setFromMatrix4(ub.makeRotationFromEuler(ur)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,z,D){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*z,y.scale.value=D*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function x(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,z){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Fn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=z.texture,y.transmissionSamplerSize.value.set(z.width,z.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,S){S.matcap&&(y.matcap.value=S.matcap)}function b(y,S){const z=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(z.matrixWorld),y.nearDistance.value=z.shadow.camera.near,y.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function fb(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,D){const N=D.program;r.uniformBlockBinding(z,N)}function p(z,D){let N=l[z.id];N===void 0&&(A(z),N=_(z),l[z.id]=N,z.addEventListener("dispose",y));const $=D.program;r.updateUBOMapping(z,$);const I=e.render.frame;c[z.id]!==I&&(x(z),c[z.id]=I)}function _(z){const D=v();z.__bindingPointIndex=D;const N=o.createBuffer(),$=z.__size,I=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,$,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,N),N}function v(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(z){const D=l[z.id],N=z.uniforms,$=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let I=0,O=N.length;I<O;I++){const Z=Array.isArray(N[I])?N[I]:[N[I]];for(let w=0,C=Z.length;w<C;w++){const G=Z[w];if(M(G,I,w,$)===!0){const lt=G.__offset,st=Array.isArray(G.value)?G.value:[G.value];let mt=0;for(let ft=0;ft<st.length;ft++){const P=st[ft],W=b(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,lt+mt,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,mt),mt+=W.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(z,D,N,$){const I=z.value,O=D+"_"+N;if($[O]===void 0)return typeof I=="number"||typeof I=="boolean"?$[O]=I:$[O]=I.clone(),!0;{const Z=$[O];if(typeof I=="number"||typeof I=="boolean"){if(Z!==I)return $[O]=I,!0}else if(Z.equals(I)===!1)return Z.copy(I),!0}return!1}function A(z){const D=z.uniforms;let N=0;const $=16;for(let O=0,Z=D.length;O<Z;O++){const w=Array.isArray(D[O])?D[O]:[D[O]];for(let C=0,G=w.length;C<G;C++){const lt=w[C],st=Array.isArray(lt.value)?lt.value:[lt.value];for(let mt=0,ft=st.length;mt<ft;mt++){const P=st[mt],W=b(P),j=N%$,yt=j%W.boundary,Et=j+yt;N+=yt,Et!==0&&$-Et<W.storage&&(N+=$-Et),lt.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=N,N+=W.storage}}}const I=N%$;return I>0&&(N+=$-I),z.__size=N,z.__cache={},this}function b(z){const D={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(D.boundary=4,D.storage=4):z.isVector2?(D.boundary=8,D.storage=8):z.isVector3||z.isColor?(D.boundary=16,D.storage=12):z.isVector4?(D.boundary=16,D.storage=16):z.isMatrix3?(D.boundary=48,D.storage=48):z.isMatrix4?(D.boundary=64,D.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),D}function y(z){const D=z.target;D.removeEventListener("dispose",y);const N=h.indexOf(D.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function S(){for(const z in l)o.deleteBuffer(l[z]);h=[],l={},c={}}return{bind:m,update:p,dispose:S}}class hb{constructor(e={}){const{canvas:i=ey(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=h;const M=new Uint32Array(4),A=new Int32Array(4);let b=null,y=null;const S=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ti,this.toneMapping=Ia,this.toneMappingExposure=1;const D=this;let N=!1,$=0,I=0,O=null,Z=-1,w=null;const C=new pn,G=new pn;let lt=null;const st=new Te(0);let mt=0,ft=i.width,P=i.height,W=1,j=null,yt=null;const Et=new pn(0,0,ft,P),U=new pn(0,0,ft,P);let nt=!1;const St=new B0;let q=!1,ot=!1;const xt=new rn,Mt=new it,Ft=new pn,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function Le(){return O===null?W:1}let F=r;function Ve(R,X){return i.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ld}`),i.addEventListener("webglcontextlost",ht,!1),i.addEventListener("webglcontextrestored",gt,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),F===null){const X="webgl2";if(F=Ve(X,R),F===null)throw Ve(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ue,Se,Vt,Xe,Jt,$t,L,T,at,_t,pt,vt,qt,Dt,Lt,ne,At,Ot,he,jt,Ct,Yt,Zt,Pe;function V(){ue=new vT(F),ue.init(),Yt=new nb(F,ue),Se=new fT(F,ue,e,Yt),Vt=new $A(F),Xe=new yT(F),Jt=new FA,$t=new eb(F,ue,Vt,Jt,Se,Yt,Xe),L=new dT(D),T=new _T(D),at=new Ry(F),Zt=new uT(F,at),_t=new ST(F,at,Xe,Zt),pt=new ET(F,_t,at,Xe),he=new MT(F,Se,$t),ne=new hT(Jt),vt=new IA(D,L,T,ue,Se,Zt,ne),qt=new cb(D,Jt),Dt=new GA,Lt=new YA(ue),Ot=new lT(D,L,T,Vt,pt,x,m),At=new JA(D,pt,Se),Pe=new fb(F,Xe,Se,Vt),jt=new cT(F,ue,Xe),Ct=new xT(F,ue,Xe),Xe.programs=vt.programs,D.capabilities=Se,D.extensions=ue,D.properties=Jt,D.renderLists=Dt,D.shadowMap=At,D.state=Vt,D.info=Xe}V();const bt=new lb(D,F);this.xr=bt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(ft,P,!1))},this.getSize=function(R){return R.set(ft,P)},this.setSize=function(R,X,tt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ft=R,P=X,i.width=Math.floor(R*W),i.height=Math.floor(X*W),tt===!0&&(i.style.width=R+"px",i.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(ft*W,P*W).floor()},this.setDrawingBufferSize=function(R,X,tt){ft=R,P=X,W=tt,i.width=Math.floor(R*tt),i.height=Math.floor(X*tt),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(Et)},this.setViewport=function(R,X,tt,et){R.isVector4?Et.set(R.x,R.y,R.z,R.w):Et.set(R,X,tt,et),Vt.viewport(C.copy(Et).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(U)},this.setScissor=function(R,X,tt,et){R.isVector4?U.set(R.x,R.y,R.z,R.w):U.set(R,X,tt,et),Vt.scissor(G.copy(U).multiplyScalar(W).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(R){Vt.setScissorTest(nt=R)},this.setOpaqueSort=function(R){j=R},this.setTransparentSort=function(R){yt=R},this.getClearColor=function(R){return R.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(R=!0,X=!0,tt=!0){let et=0;if(R){let Y=!1;if(O!==null){const Tt=O.texture.format;Y=Tt===pd||Tt===dd||Tt===hd}if(Y){const Tt=O.texture.type,wt=Tt===ta||Tt===vr||Tt===No||Tt===Ts||Tt===cd||Tt===fd,Pt=Ot.getClearColor(),Nt=Ot.getClearAlpha(),zt=Pt.r,Qt=Pt.g,Gt=Pt.b;wt?(M[0]=zt,M[1]=Qt,M[2]=Gt,M[3]=Nt,F.clearBufferuiv(F.COLOR,0,M)):(A[0]=zt,A[1]=Qt,A[2]=Gt,A[3]=Nt,F.clearBufferiv(F.COLOR,0,A))}else et|=F.COLOR_BUFFER_BIT}X&&(et|=F.DEPTH_BUFFER_BIT),tt&&(et|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ht,!1),i.removeEventListener("webglcontextrestored",gt,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),Dt.dispose(),Lt.dispose(),Jt.dispose(),L.dispose(),T.dispose(),pt.dispose(),Zt.dispose(),Pe.dispose(),vt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Sn),bt.removeEventListener("sessionend",Ho),Si.stop()};function ht(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const R=Xe.autoReset,X=At.enabled,tt=At.autoUpdate,et=At.needsUpdate,Y=At.type;V(),Xe.autoReset=R,At.enabled=X,At.autoUpdate=tt,At.needsUpdate=et,At.type=Y}function Rt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function kt(R){const X=R.target;X.removeEventListener("dispose",kt),oe(X)}function oe(R){Oe(R),Jt.remove(R)}function Oe(R){const X=Jt.get(R).programs;X!==void 0&&(X.forEach(function(tt){vt.releaseProgram(tt)}),R.isShaderMaterial&&vt.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,tt,et,Y,Tt){X===null&&(X=It);const wt=Y.isMesh&&Y.matrixWorld.determinant()<0,Pt=xn(R,X,tt,et,Y);Vt.setMaterial(et,wt);let Nt=tt.index,zt=1;if(et.wireframe===!0){if(Nt=_t.getWireframeAttribute(tt),Nt===void 0)return;zt=2}const Qt=tt.drawRange,Gt=tt.attributes.position;let le=Qt.start*zt,be=(Qt.start+Qt.count)*zt;Tt!==null&&(le=Math.max(le,Tt.start*zt),be=Math.min(be,(Tt.start+Tt.count)*zt)),Nt!==null?(le=Math.max(le,0),be=Math.min(be,Nt.count)):Gt!=null&&(le=Math.max(le,0),be=Math.min(be,Gt.count));const Fe=be-le;if(Fe<0||Fe===1/0)return;Zt.setup(Y,et,Pt,tt,Nt);let yn,ve=jt;if(Nt!==null&&(yn=at.get(Nt),ve=Ct,ve.setIndex(yn)),Y.isMesh)et.wireframe===!0?(Vt.setLineWidth(et.wireframeLinewidth*Le()),ve.setMode(F.LINES)):ve.setMode(F.TRIANGLES);else if(Y.isLine){let Xt=et.linewidth;Xt===void 0&&(Xt=1),Vt.setLineWidth(Xt*Le()),Y.isLineSegments?ve.setMode(F.LINES):Y.isLineLoop?ve.setMode(F.LINE_LOOP):ve.setMode(F.LINE_STRIP)}else Y.isPoints?ve.setMode(F.POINTS):Y.isSprite&&ve.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ve.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))ve.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Xt=Y._multiDrawStarts,ke=Y._multiDrawCounts,me=Y._multiDrawCount,Ye=Nt?at.get(Nt).bytesPerElement:1,on=Jt.get(et).currentProgram.getUniforms();for(let Mn=0;Mn<me;Mn++)on.setValue(F,"_gl_DrawID",Mn),ve.render(Xt[Mn]/Ye,ke[Mn])}else if(Y.isInstancedMesh)ve.renderInstances(le,Fe,Y.count);else if(tt.isInstancedBufferGeometry){const Xt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,ke=Math.min(tt.instanceCount,Xt);ve.renderInstances(le,Fe,ke)}else ve.render(le,Fe)};function sn(R,X,tt){R.transparent===!0&&R.side===Ki&&R.forceSinglePass===!1?(R.side=Fn,R.needsUpdate=!0,Ga(R,X,tt),R.side=Fa,R.needsUpdate=!0,Ga(R,X,tt),R.side=Ki):Ga(R,X,tt)}this.compile=function(R,X,tt=null){tt===null&&(tt=R),y=Lt.get(tt),y.init(X),z.push(y),tt.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),R!==tt&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),y.setupLights();const et=new Set;return R.traverse(function(Y){const Tt=Y.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const Pt=Tt[wt];sn(Pt,tt,Y),et.add(Pt)}else sn(Tt,tt,Y),et.add(Tt)}),z.pop(),y=null,et},this.compileAsync=function(R,X,tt=null){const et=this.compile(R,X,tt);return new Promise(Y=>{function Tt(){if(et.forEach(function(wt){Jt.get(wt).currentProgram.isReady()&&et.delete(wt)}),et.size===0){Y(R);return}setTimeout(Tt,10)}ue.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let _e=null;function Gn(R){_e&&_e(R)}function Sn(){Si.stop()}function Ho(){Si.start()}const Si=new I0;Si.setAnimationLoop(Gn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(R){_e=R,bt.setAnimationLoop(R),R===null?Si.stop():Si.start()},bt.addEventListener("sessionstart",Sn),bt.addEventListener("sessionend",Ho),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(X),X=bt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,X,O),y=Lt.get(R,z.length),y.init(X),z.push(y),xt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),St.setFromProjectionMatrix(xt),ot=this.localClippingEnabled,q=ne.init(this.clippingPlanes,ot),b=Dt.get(R,S.length),b.init(),S.push(b),bt.enabled===!0&&bt.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&xr(Tt,X,-1/0,D.sortObjects)}xr(R,X,0,D.sortObjects),b.finish(),D.sortObjects===!0&&b.sort(j,yt),ee=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ee&&Ot.addToRenderList(b,R),this.info.render.frame++,q===!0&&ne.beginShadows();const tt=y.state.shadowsArray;At.render(tt,R,X),q===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=b.opaque,Y=b.transmissive;if(y.setupLights(),X.isArrayCamera){const Tt=X.cameras;if(Y.length>0)for(let wt=0,Pt=Tt.length;wt<Pt;wt++){const Nt=Tt[wt];yr(et,Y,R,Nt)}ee&&Ot.render(R);for(let wt=0,Pt=Tt.length;wt<Pt;wt++){const Nt=Tt[wt];ws(b,R,Nt,Nt.viewport)}}else Y.length>0&&yr(et,Y,R,X),ee&&Ot.render(R),ws(b,R,X);O!==null&&($t.updateMultisampleRenderTarget(O),$t.updateRenderTargetMipmap(O)),R.isScene===!0&&R.onAfterRender(D,R,X),Zt.resetDefaultState(),Z=-1,w=null,z.pop(),z.length>0?(y=z[z.length-1],q===!0&&ne.setGlobalState(D.clippingPlanes,y.state.camera)):y=null,S.pop(),S.length>0?b=S[S.length-1]:b=null};function xr(R,X,tt,et){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)tt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||St.intersectsSprite(R)){et&&Ft.setFromMatrixPosition(R.matrixWorld).applyMatrix4(xt);const wt=pt.update(R),Pt=R.material;Pt.visible&&b.push(R,wt,Pt,tt,Ft.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||St.intersectsObject(R))){const wt=pt.update(R),Pt=R.material;if(et&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ft.copy(R.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Ft.copy(wt.boundingSphere.center)),Ft.applyMatrix4(R.matrixWorld).applyMatrix4(xt)),Array.isArray(Pt)){const Nt=wt.groups;for(let zt=0,Qt=Nt.length;zt<Qt;zt++){const Gt=Nt[zt],le=Pt[Gt.materialIndex];le&&le.visible&&b.push(R,wt,le,tt,Ft.z,Gt)}}else Pt.visible&&b.push(R,wt,Pt,tt,Ft.z,null)}}const Tt=R.children;for(let wt=0,Pt=Tt.length;wt<Pt;wt++)xr(Tt[wt],X,tt,et)}function ws(R,X,tt,et){const Y=R.opaque,Tt=R.transmissive,wt=R.transparent;y.setupLightsView(tt),q===!0&&ne.setGlobalState(D.clippingPlanes,tt),et&&Vt.viewport(C.copy(et)),Y.length>0&&aa(Y,X,tt),Tt.length>0&&aa(Tt,X,tt),wt.length>0&&aa(wt,X,tt),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function yr(R,X,tt,et){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[et.id]===void 0&&(y.state.transmissionRenderTarget[et.id]=new Sr(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?Oo:ta,minFilter:gr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));const Tt=y.state.transmissionRenderTarget[et.id],wt=et.viewport||C;Tt.setSize(wt.z,wt.w);const Pt=D.getRenderTarget();D.setRenderTarget(Tt),D.getClearColor(st),mt=D.getClearAlpha(),mt<1&&D.setClearColor(16777215,.5),D.clear(),ee&&Ot.render(tt);const Nt=D.toneMapping;D.toneMapping=Ia;const zt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),y.setupLightsView(et),q===!0&&ne.setGlobalState(D.clippingPlanes,et),aa(R,tt,et),$t.updateMultisampleRenderTarget(Tt),$t.updateRenderTargetMipmap(Tt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Gt=0,le=X.length;Gt<le;Gt++){const be=X[Gt],Fe=be.object,yn=be.geometry,ve=be.material,Xt=be.group;if(ve.side===Ki&&Fe.layers.test(et.layers)){const ke=ve.side;ve.side=Fn,ve.needsUpdate=!0,Ds(Fe,tt,et,yn,ve,Xt),ve.side=ke,ve.needsUpdate=!0,Qt=!0}}Qt===!0&&($t.updateMultisampleRenderTarget(Tt),$t.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Pt),D.setClearColor(st,mt),zt!==void 0&&(et.viewport=zt),D.toneMapping=Nt}function aa(R,X,tt){const et=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Tt=R.length;Y<Tt;Y++){const wt=R[Y],Pt=wt.object,Nt=wt.geometry,zt=et===null?wt.material:et,Qt=wt.group;Pt.layers.test(tt.layers)&&Ds(Pt,X,tt,Nt,zt,Qt)}}function Ds(R,X,tt,et,Y,Tt){R.onBeforeRender(D,X,tt,et,Y,Tt),R.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(D,X,tt,et,R,Tt),Y.transparent===!0&&Y.side===Ki&&Y.forceSinglePass===!1?(Y.side=Fn,Y.needsUpdate=!0,D.renderBufferDirect(tt,X,et,Y,R,Tt),Y.side=Fa,Y.needsUpdate=!0,D.renderBufferDirect(tt,X,et,Y,R,Tt),Y.side=Ki):D.renderBufferDirect(tt,X,et,Y,R,Tt),R.onAfterRender(D,X,tt,et,Y,Tt)}function Ga(R,X,tt){X.isScene!==!0&&(X=It);const et=Jt.get(R),Y=y.state.lights,Tt=y.state.shadowsArray,wt=Y.state.version,Pt=vt.getParameters(R,Y.state,Tt,X,tt),Nt=vt.getProgramCacheKey(Pt);let zt=et.programs;et.environment=R.isMeshStandardMaterial?X.environment:null,et.fog=X.fog,et.envMap=(R.isMeshStandardMaterial?T:L).get(R.envMap||et.environment),et.envMapRotation=et.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,zt===void 0&&(R.addEventListener("dispose",kt),zt=new Map,et.programs=zt);let Qt=zt.get(Nt);if(Qt!==void 0){if(et.currentProgram===Qt&&et.lightsStateVersion===wt)return Qe(R,Pt),Qt}else Pt.uniforms=vt.getUniforms(R),R.onBeforeCompile(Pt,D),Qt=vt.acquireProgram(Pt,Nt),zt.set(Nt,Qt),et.uniforms=Pt.uniforms;const Gt=et.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Gt.clippingPlanes=ne.uniform),Qe(R,Pt),et.needsLights=Us(R),et.lightsStateVersion=wt,et.needsLights&&(Gt.ambientLightColor.value=Y.state.ambient,Gt.lightProbe.value=Y.state.probe,Gt.directionalLights.value=Y.state.directional,Gt.directionalLightShadows.value=Y.state.directionalShadow,Gt.spotLights.value=Y.state.spot,Gt.spotLightShadows.value=Y.state.spotShadow,Gt.rectAreaLights.value=Y.state.rectArea,Gt.ltc_1.value=Y.state.rectAreaLTC1,Gt.ltc_2.value=Y.state.rectAreaLTC2,Gt.pointLights.value=Y.state.point,Gt.pointLightShadows.value=Y.state.pointShadow,Gt.hemisphereLights.value=Y.state.hemi,Gt.directionalShadowMap.value=Y.state.directionalShadowMap,Gt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Gt.spotShadowMap.value=Y.state.spotShadowMap,Gt.spotLightMatrix.value=Y.state.spotLightMatrix,Gt.spotLightMap.value=Y.state.spotLightMap,Gt.pointShadowMap.value=Y.state.pointShadowMap,Gt.pointShadowMatrix.value=Y.state.pointShadowMatrix),et.currentProgram=Qt,et.uniformsList=null,Qt}function ui(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=bu.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function Qe(R,X){const tt=Jt.get(R);tt.outputColorSpace=X.outputColorSpace,tt.batching=X.batching,tt.batchingColor=X.batchingColor,tt.instancing=X.instancing,tt.instancingColor=X.instancingColor,tt.instancingMorph=X.instancingMorph,tt.skinning=X.skinning,tt.morphTargets=X.morphTargets,tt.morphNormals=X.morphNormals,tt.morphColors=X.morphColors,tt.morphTargetsCount=X.morphTargetsCount,tt.numClippingPlanes=X.numClippingPlanes,tt.numIntersection=X.numClipIntersection,tt.vertexAlphas=X.vertexAlphas,tt.vertexTangents=X.vertexTangents,tt.toneMapping=X.toneMapping}function xn(R,X,tt,et,Y){X.isScene!==!0&&(X=It),$t.resetTextureUnits();const Tt=X.fog,wt=et.isMeshStandardMaterial?X.environment:null,Pt=O===null?D.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ha,Nt=(et.isMeshStandardMaterial?T:L).get(et.envMap||wt),zt=et.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Qt=!!tt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Gt=!!tt.morphAttributes.position,le=!!tt.morphAttributes.normal,be=!!tt.morphAttributes.color;let Fe=Ia;et.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Fe=D.toneMapping);const yn=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,ve=yn!==void 0?yn.length:0,Xt=Jt.get(et),ke=y.state.lights;if(q===!0&&(ot===!0||R!==w)){const Dn=R===w&&et.id===Z;ne.setState(et,R,Dn)}let me=!1;et.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==ke.state.version||Xt.outputColorSpace!==Pt||Y.isBatchedMesh&&Xt.batching===!1||!Y.isBatchedMesh&&Xt.batching===!0||Y.isBatchedMesh&&Xt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Xt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Xt.instancing===!1||!Y.isInstancedMesh&&Xt.instancing===!0||Y.isSkinnedMesh&&Xt.skinning===!1||!Y.isSkinnedMesh&&Xt.skinning===!0||Y.isInstancedMesh&&Xt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Xt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Xt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Xt.instancingMorph===!1&&Y.morphTexture!==null||Xt.envMap!==Nt||et.fog===!0&&Xt.fog!==Tt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==ne.numPlanes||Xt.numIntersection!==ne.numIntersection)||Xt.vertexAlphas!==zt||Xt.vertexTangents!==Qt||Xt.morphTargets!==Gt||Xt.morphNormals!==le||Xt.morphColors!==be||Xt.toneMapping!==Fe||Xt.morphTargetsCount!==ve)&&(me=!0):(me=!0,Xt.__version=et.version);let Ye=Xt.currentProgram;me===!0&&(Ye=Ga(et,X,Y));let on=!1,Mn=!1,Ls=!1;const He=Ye.getUniforms(),ci=Xt.uniforms;if(Vt.useProgram(Ye.program)&&(on=!0,Mn=!0,Ls=!0),et.id!==Z&&(Z=et.id,Mn=!0),on||w!==R){He.setValue(F,"projectionMatrix",R.projectionMatrix),He.setValue(F,"viewMatrix",R.matrixWorldInverse);const Dn=He.map.cameraPosition;Dn!==void 0&&Dn.setValue(F,Mt.setFromMatrixPosition(R.matrixWorld)),Se.logarithmicDepthBuffer&&He.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&He.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Mn=!0,Ls=!0)}if(Y.isSkinnedMesh){He.setOptional(F,Y,"bindMatrix"),He.setOptional(F,Y,"bindMatrixInverse");const Dn=Y.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),He.setValue(F,"boneTexture",Dn.boneTexture,$t))}Y.isBatchedMesh&&(He.setOptional(F,Y,"batchingTexture"),He.setValue(F,"batchingTexture",Y._matricesTexture,$t),He.setOptional(F,Y,"batchingIdTexture"),He.setValue(F,"batchingIdTexture",Y._indirectTexture,$t),He.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&He.setValue(F,"batchingColorTexture",Y._colorsTexture,$t));const sa=tt.morphAttributes;if((sa.position!==void 0||sa.normal!==void 0||sa.color!==void 0)&&he.update(Y,tt,Ye),(Mn||Xt.receiveShadow!==Y.receiveShadow)&&(Xt.receiveShadow=Y.receiveShadow,He.setValue(F,"receiveShadow",Y.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(ci.envMap.value=Nt,ci.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&X.environment!==null&&(ci.envMapIntensity.value=X.environmentIntensity),Mn&&(He.setValue(F,"toneMappingExposure",D.toneMappingExposure),Xt.needsLights&&ra(ci,Ls),Tt&&et.fog===!0&&qt.refreshFogUniforms(ci,Tt),qt.refreshMaterialUniforms(ci,et,W,P,y.state.transmissionRenderTarget[R.id]),bu.upload(F,ui(Xt),ci,$t)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(bu.upload(F,ui(Xt),ci,$t),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&He.setValue(F,"center",Y.center),He.setValue(F,"modelViewMatrix",Y.modelViewMatrix),He.setValue(F,"normalMatrix",Y.normalMatrix),He.setValue(F,"modelMatrix",Y.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const Dn=et.uniformsGroups;for(let En=0,Ns=Dn.length;En<Ns;En++){const Os=Dn[En];Pe.update(Os,Ye),Pe.bind(Os,Ye)}}return Ye}function ra(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Us(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(R,X,tt){Jt.get(R.texture).__webglTexture=X,Jt.get(R.depthTexture).__webglTexture=tt;const et=Jt.get(R);et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=tt===void 0,et.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){const tt=Jt.get(R);tt.__webglFramebuffer=X,tt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,tt=0){O=R,$=X,I=tt;let et=!0,Y=null,Tt=!1,wt=!1;if(R){const Nt=Jt.get(R);if(Nt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(F.FRAMEBUFFER,null),et=!1;else if(Nt.__webglFramebuffer===void 0)$t.setupRenderTarget(R);else if(Nt.__hasExternalTextures)$t.rebindTextures(R,Jt.get(R.texture).__webglTexture,Jt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Gt=R.depthTexture;if(Nt.__boundDepthTexture!==Gt){if(Gt!==null&&Jt.has(Gt)&&(R.width!==Gt.image.width||R.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$t.setupDepthRenderbuffer(R)}}const zt=R.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(wt=!0);const Qt=Jt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qt[X])?Y=Qt[X][tt]:Y=Qt[X],Tt=!0):R.samples>0&&$t.useMultisampledRTT(R)===!1?Y=Jt.get(R).__webglMultisampledFramebuffer:Array.isArray(Qt)?Y=Qt[tt]:Y=Qt,C.copy(R.viewport),G.copy(R.scissor),lt=R.scissorTest}else C.copy(Et).multiplyScalar(W).floor(),G.copy(U).multiplyScalar(W).floor(),lt=nt;if(Vt.bindFramebuffer(F.FRAMEBUFFER,Y)&&et&&Vt.drawBuffers(R,Y),Vt.viewport(C),Vt.scissor(G),Vt.setScissorTest(lt),Tt){const Nt=Jt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Nt.__webglTexture,tt)}else if(wt){const Nt=Jt.get(R.texture),zt=X||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.__webglTexture,tt||0,zt)}Z=-1},this.readRenderTargetPixels=function(R,X,tt,et,Y,Tt,wt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Pt=Pt[wt]),Pt){Vt.bindFramebuffer(F.FRAMEBUFFER,Pt);try{const Nt=R.texture,zt=Nt.format,Qt=Nt.type;if(!Se.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-et&&tt>=0&&tt<=R.height-Y&&F.readPixels(X,tt,et,Y,Yt.convert(zt),Yt.convert(Qt),Tt)}finally{const Nt=O!==null?Jt.get(O).__webglFramebuffer:null;Vt.bindFramebuffer(F.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(R,X,tt,et,Y,Tt,wt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Pt=Pt[wt]),Pt){Vt.bindFramebuffer(F.FRAMEBUFFER,Pt);try{const Nt=R.texture,zt=Nt.format,Qt=Nt.type;if(!Se.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=R.width-et&&tt>=0&&tt<=R.height-Y){const Gt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Gt),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),F.readPixels(X,tt,et,Y,Yt.convert(zt),Yt.convert(Qt),0),F.flush();const le=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);await ny(F,le,4);try{F.bindBuffer(F.PIXEL_PACK_BUFFER,Gt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt)}finally{F.deleteBuffer(Gt),F.deleteSync(le)}return Tt}}finally{const Nt=O!==null?Jt.get(O).__webglFramebuffer:null;Vt.bindFramebuffer(F.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(R,X=null,tt=0){R.isTexture!==!0&&(Lo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1]);const et=Math.pow(2,-tt),Y=Math.floor(R.image.width*et),Tt=Math.floor(R.image.height*et),wt=X!==null?X.x:0,Pt=X!==null?X.y:0;$t.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,tt,0,0,wt,Pt,Y,Tt),Vt.unbindTexture()},this.copyTextureToTexture=function(R,X,tt=null,et=null,Y=0){R.isTexture!==!0&&(Lo("WebGLRenderer: copyTextureToTexture function signature has changed."),et=arguments[0]||null,R=arguments[1],X=arguments[2],Y=arguments[3]||0,tt=null);let Tt,wt,Pt,Nt,zt,Qt;tt!==null?(Tt=tt.max.x-tt.min.x,wt=tt.max.y-tt.min.y,Pt=tt.min.x,Nt=tt.min.y):(Tt=R.image.width,wt=R.image.height,Pt=0,Nt=0),et!==null?(zt=et.x,Qt=et.y):(zt=0,Qt=0);const Gt=Yt.convert(X.format),le=Yt.convert(X.type);$t.setTexture2D(X,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const be=F.getParameter(F.UNPACK_ROW_LENGTH),Fe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),yn=F.getParameter(F.UNPACK_SKIP_PIXELS),ve=F.getParameter(F.UNPACK_SKIP_ROWS),Xt=F.getParameter(F.UNPACK_SKIP_IMAGES),ke=R.isCompressedTexture?R.mipmaps[Y]:R.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ke.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ke.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Pt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Nt),R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Y,zt,Qt,Tt,wt,Gt,le,ke.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Y,zt,Qt,ke.width,ke.height,Gt,ke.data):F.texSubImage2D(F.TEXTURE_2D,Y,zt,Qt,Tt,wt,Gt,le,ke),F.pixelStorei(F.UNPACK_ROW_LENGTH,be),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Fe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,yn),F.pixelStorei(F.UNPACK_SKIP_ROWS,ve),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xt),Y===0&&X.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Vt.unbindTexture()},this.copyTextureToTexture3D=function(R,X,tt=null,et=null,Y=0){R.isTexture!==!0&&(Lo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,et=arguments[1]||null,R=arguments[2],X=arguments[3],Y=arguments[4]||0);let Tt,wt,Pt,Nt,zt,Qt,Gt,le,be;const Fe=R.isCompressedTexture?R.mipmaps[Y]:R.image;tt!==null?(Tt=tt.max.x-tt.min.x,wt=tt.max.y-tt.min.y,Pt=tt.max.z-tt.min.z,Nt=tt.min.x,zt=tt.min.y,Qt=tt.min.z):(Tt=Fe.width,wt=Fe.height,Pt=Fe.depth,Nt=0,zt=0,Qt=0),et!==null?(Gt=et.x,le=et.y,be=et.z):(Gt=0,le=0,be=0);const yn=Yt.convert(X.format),ve=Yt.convert(X.type);let Xt;if(X.isData3DTexture)$t.setTexture3D(X,0),Xt=F.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)$t.setTexture2DArray(X,0),Xt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const ke=F.getParameter(F.UNPACK_ROW_LENGTH),me=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ye=F.getParameter(F.UNPACK_SKIP_PIXELS),on=F.getParameter(F.UNPACK_SKIP_ROWS),Mn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Fe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Fe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Nt),F.pixelStorei(F.UNPACK_SKIP_ROWS,zt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Qt),R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Xt,Y,Gt,le,be,Tt,wt,Pt,yn,ve,Fe.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(Xt,Y,Gt,le,be,Tt,wt,Pt,yn,Fe.data):F.texSubImage3D(Xt,Y,Gt,le,be,Tt,wt,Pt,yn,ve,Fe),F.pixelStorei(F.UNPACK_ROW_LENGTH,ke),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,me),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ye),F.pixelStorei(F.UNPACK_SKIP_ROWS,on),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Mn),Y===0&&X.generateMipmaps&&F.generateMipmap(Xt),Vt.unbindTexture()},this.initRenderTarget=function(R){Jt.get(R).__webglFramebuffer===void 0&&$t.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?$t.setTextureCube(R,0):R.isData3DTexture?$t.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?$t.setTexture2DArray(R,0):$t.setTexture2D(R,0),Vt.unbindTexture()},this.resetState=function(){$=0,I=0,O=null,Vt.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===md?"display-p3":"srgb",i.unpackColorSpace=Ee.workingColorSpace===Ou?"display-p3":"srgb"}}class _d{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=i}clone(){return new _d(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class db extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ea,this.environmentIntensity=1,this.environmentRotation=new ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class pb extends Io{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const r0=new rn,sd=new C0,Su=new Pu,xu=new it;class mb extends Hn{constructor(e=new ia,i=new pb){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Su.copy(r.boundingSphere),Su.applyMatrix4(l),Su.radius+=c,e.ray.intersectsSphere(Su)===!1)return;r0.copy(l).invert(),sd.copy(e.ray).applyMatrix4(r0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const x=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let A=x,b=M;A<b;A++){const y=p.getX(A);xu.fromBufferAttribute(v,y),s0(xu,y,m,l,e,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let A=x,b=M;A<b;A++)xu.fromBufferAttribute(v,A),s0(xu,A,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function s0(o,e,i,r,l,c,h){const d=sd.distanceSqToPoint(o);if(d<i){const m=new it;sd.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,object:h})}}class gb extends wn{constructor(e,i,r,l,c,h,d,m,p){super(e,i,r,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _b{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=o0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=o0();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function o0(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ld);const Qn=[3552,3648,4215,4346,4702,4973,5454,6078,6080,6205,6373,6845,7570,7601,7602,8158,8739,8781,9129,9333,9410,9707,10027,10182,10630,11093,11379,11631,11744,12808,13462,13595,13632,13663,14628,14831,15796,15972,17245,17656,17846,19187,19592,19839,19901,20621,21214,21278,22706,24426,27871,28063,28531,29246,32530,35966,43822],hr=[.20320023,.240428955,.250814845,.27683691,.291074667,.3021083,.311718809,.324788147,.347799353,.362536656,.400185582,.417333031,.426267343,.437478346,.463457391,.470897362,.485592675,.533439258,.547034522,.557377309,.565667836,.576007618,.583099392,.589947027,.601855424,.644230419,.650078677,.658507585,.664425149,.691539883,.700260709,.728996858,.733857774,.753453022,.778192209,.782484904,.794440567,.808868488,.811877735,.8155771,.832775062,.854179756,.857698942,.86473999,.875209863,.88001511,.882261864,.899455841,.923902348,.93460629,.942972185,.955804172,.963306037,.97078122,.975832842,.987263722,.995676395];function l0(o){const e=Qn.length,i=Qn[0],r=hr[0],l=Qn[e-1],c=hr[e-1];if(o<i){const v=i/3;return o<=0?0:r*(Math.exp(o/v)-1)/(Math.exp(i/v)-1)}if(o>l){const v=(hr[e-1]-hr[e-2])/(Qn[e-1]-Qn[e-2]),x=v<=0?1:(1-c)/v;return 1-(1-c)*Math.exp(-(o-l)/x)}let h=0;for(;h<e-1&&Qn[h+1]<=o;)h+=1;const d=Qn[h],m=Qn[h+1],p=hr[h],_=hr[h+1];return p+(_-p)*(o-d)/(m-d)}const Th=35966,u0=[{min:90,src:"images/5090.png",label:"5090"},{min:70,src:"images/5060.png",label:"5060"},{min:50,src:"images/5060baby.png",label:"5060 Baby"},{min:30,src:"images/dinkyboi.png",label:"Dinky Boi"},{min:0,src:"images/sd.png",label:"SD"}];function vb(o,e){const[i,r]=Ke.useState(o),l=Ke.useRef(i);return Ke.useEffect(()=>{l.current=i},[i]),Ke.useEffect(()=>{let c;const h=l.current,d=650,m=performance.now(),p=_=>{const v=Math.min((_-m)/d,1),x=1-Math.pow(1-v,3);r(h+(o-h)*x),v<1&&(c=requestAnimationFrame(p))};return c=requestAnimationFrame(p),()=>cancelAnimationFrame(c)},[o,e]),i}function Sb(o){return o>=.99?"Top 1%":o>=.95?"Top 5%":o>=.9?"Top 10%":o>=.8?"Top 20%":o>=.7?"Top 30%":o>=.5?"Above Average":o>=.3?"Mid Pack":"Entry Tier"}function c0(o){const e=Math.max(0,Math.min(100,o));return u0.find(i=>e>=i.min)??u0.at(-1)}function xb(o){if(!Qn.length)return null;let e=0,i=Math.abs(o-Qn[0]);for(let r=1;r<Qn.length;r+=1){const l=Math.abs(o-Qn[r]);l<i&&(i=l,e=r)}return{score:Qn[e],pct:hr[e]}}function yb({power:o,onWebglFail:e}){const i=Ke.useRef(null),r=Ke.useRef(o);return Ke.useEffect(()=>{r.current=o},[o]),Ke.useEffect(()=>{if(!i.current)return;const l=new db;l.fog=new _d(1296,.05);const c=new oi(70,window.innerWidth/window.innerHeight,.1,1e3);c.position.set(0,2.2,10.5),c.lookAt(0,2,0);let h;try{h=new hb({antialias:!0,alpha:!0})}catch{e?.();return}h.setSize(window.innerWidth,window.innerHeight),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.current.appendChild(h.domElement);class d{constructor(M=42){this.seed=M,this.power=1e4,this.time=0,this.maxParticles=12e3;const A=new Float32Array(this.maxParticles*3),b=new Float32Array(this.maxParticles*3),y=new Float32Array(this.maxParticles*3),S=new Float32Array(this.maxParticles),z=new Float32Array(this.maxParticles),D=new Float32Array(this.maxParticles*3),N=new Float32Array(this.maxParticles*3),$=new Float32Array(this.maxParticles*3);for(let Z=0;Z<this.maxParticles;Z+=1){const w=Z*3,C=this.seededRandom(Z)*Math.PI*2,G=.7+this.seededRandom(Z+1e3)*2.4,lt=-.8+this.seededRandom(Z+2e3)*6.5;b[w]=Math.cos(C)*G,b[w+1]=lt+2,b[w+2]=Math.sin(C)*G,A[w]=b[w],A[w+1]=b[w+1],A[w+2]=b[w+2];const st=this.seededRandom(Z+3e3);D[w]=st<.5?1:0,D[w+1]=st>=.5?1:0,D[w+2]=0,S[Z]=.4+this.seededRandom(Z+4e3)*.8,z[Z]=this.seededRandom(Z+5e3)*Math.PI*2,N[w]=this.seededRandom(Z+6e3)*100,N[w+1]=this.seededRandom(Z+7e3)*100,N[w+2]=this.seededRandom(Z+8e3)*100,$[w]=0,$[w+1]=0,$[w+2]=0}const I=new ia;I.setAttribute("position",new dn(A,3)),I.setAttribute("basePosition",new dn(b,3)),I.setAttribute("color",new dn(y,3)),I.setAttribute("size",new dn(S,1)),I.setAttribute("phase",new dn(z,1)),I.setAttribute("colorZone",new dn(D,3)),I.setAttribute("noiseOffset",new dn(N,3)),I.setAttribute("velocity",new dn($,3));const O=new na({uniforms:{time:{value:0},power:{value:this.power},pointTexture:{value:this.createMistTexture()}},vertexShader:`
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

              float motionIntensity = pow(raw, 0.55);
              motionIntensity = min(motionIntensity, 10.0);

              float turbulence = 0.5 + motionIntensity * 1.2;

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
              float pBR = smoothstep(35000.0, 60000.0, power);

              vec3 primary = mix(yellow * 0.7, yellow, pY);
              primary = mix(primary, blue, pYB);
              primary = mix(primary, red, pBR);

              float dist0 = length(position.xz);
              float edge = smoothstep(1.6, 3.6, dist0);

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
              float heightFade = smoothstep(-2.0, 7.5, advectedPos.y) * smoothstep(9.0, 5.5, advectedPos.y);
              vAlpha = smoothstep(4.4, 1.2, distFromCenter) * pulse * heightFade * 0.5;

              vec4 mvPosition = modelViewMatrix * vec4(advectedPos, 1.0);
              gl_PointSize = size * 350.0 * motionIntensity / -mvPosition.z;
              gl_Position = projectionMatrix * mvPosition;
            }
          `,fragmentShader:`
            uniform sampler2D pointTexture;
            varying vec3 vColor;
            varying float vAlpha;

            void main() {
              vec4 texColor = texture2D(pointTexture, gl_PointCoord);
              vec3 glow = vColor * texColor.rgb * 1.15;
              glow = vec3(1.0) - exp(-glow * 1.35);
              float alpha = texColor.a * vAlpha * 0.45;
              gl_FragColor = vec4(glow, alpha);
            }
          `,blending:Ah,depthWrite:!1,transparent:!0});this.points=new mb(I,O),this.geometry=I,this.material=O}seededRandom(M){const A=Math.sin(M+this.seed)*1e4;return A-Math.floor(A)}createMistTexture(){const M=document.createElement("canvas");M.width=128,M.height=128;const A=M.getContext("2d"),b=A.createRadialGradient(64,64,0,64,64,64);return b.addColorStop(0,"rgba(255, 255, 255, 1)"),b.addColorStop(.2,"rgba(255, 255, 255, 0.8)"),b.addColorStop(.5,"rgba(255, 255, 255, 0.4)"),b.addColorStop(.8,"rgba(255, 255, 255, 0.1)"),b.addColorStop(1,"rgba(255, 255, 255, 0)"),A.fillStyle=b,A.fillRect(0,0,128,128),new gb(M)}setPower(M){this.power=M,this.material.uniforms.power.value=M;const A=Math.min(this.maxParticles,Math.floor(3e3+M/1e4*4500));this.geometry.setDrawRange(0,A)}update(M){this.time+=M,this.material.uniforms.time.value=this.time}}const m=new d;m.setPower(r.current),l.add(m.points);const p=new _b,_=()=>{requestAnimationFrame(_);const x=p.getDelta();m.update(x),h.render(l,c)};_();const v=()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",v),i.current.setPower=x=>{m.setPower(x)},()=>{window.removeEventListener("resize",v),h.dispose(),i.current?.removeChild(h.domElement)}},[e]),Ke.useEffect(()=>{i.current?.setPower&&i.current.setPower(r.current)},[o]),an.jsx("div",{className:"aura-canvas",ref:i})}function Mb(){const[o,e]=Ke.useState(!0),[i,r]=Ke.useState(!1),[l,c]=Ke.useState(String(Th)),[h,d]=Ke.useState(Th),[m,p]=Ke.useState(""),_="./",[v,x]=Ke.useState(()=>`${_}${c0(l0(Th)*100).src}`),[M,A]=Ke.useState(null),[b,y]=Ke.useState(!1),S=Ke.useMemo(()=>{const w=l0(h);return Number.isNaN(w)?0:Math.max(0,Math.min(1,w))},[h]),z=S*100,D=vb(z,!0),N=Sb(S),$=Ke.useMemo(()=>xb(h),[h]),I=Math.max(h,0);Ke.useEffect(()=>{const w=c0(z),C=`${_}${w.src}`;if(C===v)return;A(v),x(C),y(!0);const G=setTimeout(()=>{y(!1),A(null)},600);return()=>clearTimeout(G)},[v,z]);const O=w=>{const C=w.target.value;if(c(C),!C){p("");return}/^\d+$/.test(C)?(p(""),d(Number(C))):p("Score must be a non-negative integer.")},Z=()=>{const w=l.trim();if(!w){p("Enter a score to calculate.");return}if(!/^\d+$/.test(w)){p("Score must be a non-negative integer.");return}d(Number(w)),p(""),r(!1)};return an.jsxs("div",{className:"page",children:[an.jsx("div",{className:"aura-layer","aria-hidden":"true",children:o?an.jsx(yb,{power:I,onWebglFail:()=>e(!1)}):an.jsx("div",{className:"aura-fallback"})}),an.jsxs("main",{className:"content",children:[an.jsxs("div",{className:"output score-layer",children:[i?an.jsx("input",{className:"score-inline",type:"text",inputMode:"numeric",pattern:"[0-9]*",value:l,onChange:O,onBlur:Z,onKeyDown:w=>{w.key==="Enter"&&(w.preventDefault(),Z()),w.key==="Escape"&&(r(!1),p(""),c(String(h)))},"aria-label":"3DMark score",autoFocus:!0}):an.jsxs("button",{type:"button",className:"output-value output-button",onClick:()=>r(!0),children:[D.toFixed(2),"%"]}),an.jsx("p",{className:"output-tag",children:N}),m?an.jsx("p",{className:"error",children:m}):null,$?an.jsxs("p",{className:"calibration",children:["Nearest calibration: ",$.score," →"," ",($.pct*100).toFixed(2),"%"]}):null]}),an.jsx("section",{className:"card gpu-layer",children:an.jsxs("div",{className:`card-art ${b?"is-fading":""}`,children:[M?an.jsx("img",{className:"card-img prev",src:M,alt:"Previous GPU card art"}):null,an.jsx("img",{className:"card-img current",src:v,alt:"GPU card art"}),an.jsx("div",{className:"card-glow","aria-hidden":"true"})]})}),!o&&an.jsx("div",{className:"toggle-note",children:"WebGL unavailable"})]})]})}ax.createRoot(document.getElementById("root")).render(an.jsx(Ke.StrictMode,{children:an.jsx(Mb,{})}));
