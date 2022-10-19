(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[884],{9361:function(e,t){"use strict";t.Z=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},4184:function(e,t){var n; /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&e.push(a)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0!==(n=(function(){return i}).apply(t,[]))&&(e.exports=n)}()},1143:function(e){"use strict";var t=function(e,t,n,r,i,o,a,s){if(!e){var u;if(void 0===t)u=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,s],l=0;(u=Error(t.replace(/%s/g,function(){return c[l++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}};e.exports=t},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9361).Z,i=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n,s=e.src,u=e.sizes,m=e.unoptimized,h=void 0!==m&&m,E=e.priority,C=void 0!==E&&E,N=e.loading,A=e.lazyRoot,I=e.lazyBoundary,R=e.className,T=e.quality,z=e.width,L=e.height,P=e.style,j=e.objectFit,_=e.objectPosition,D=e.onLoadingComplete,M=e.placeholder,q=void 0===M?"empty":M,U=e.blurDataURL,W=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),V=l.useContext(v.ImageConfigContext),Z=l.useMemo(function(){var e=g||V||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort(function(e,t){return e-t}),n=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:n})},[V]),B=u?"responsive":"intrinsic";"layout"in W&&(W.layout&&(B=W.layout),delete W.layout);var F=k;if("loader"in W){if(W.loader){var H=W.loader;F=function(e){e.config;var t=c(e,["config"]);return H(t)}}delete W.loader}var K="";if(function(e){var t;return"object"==typeof e&&(x(e)||void 0!==e.src)}(s)){var X=x(s)?s.default:s;if(!X.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(U=U||X.blurDataURL,K=X.src,(!B||"fill"!==B)&&(L=L||X.height,z=z||X.width,!X.height||!X.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)))}s="string"==typeof s?s:K;var G=!C&&("lazy"===N||void 0===N);(s.startsWith("data:")||s.startsWith("blob:"))&&(h=!0,G=!1),y.has(s)&&(G=!1),Z.unoptimized&&(h=!0);var Y=i(l.useState(!1),2),J=Y[0],$=Y[1],Q=i(p.useIntersection({rootRef:void 0===A?null:A,rootMargin:I||"200px",disabled:!G}),3),ee=Q[0],et=Q[1],en=Q[2],er=!G||et,ei={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},eo={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ea=!1,es=S(z),eu=S(L),ec=S(T),el=Object.assign({},P,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:j,objectPosition:_}),ed="blur"!==q||J?{}:{backgroundSize:j||"cover",backgroundPosition:_||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(U,'")')};if("fill"===B)ei.display="block",ei.position="absolute",ei.top=0,ei.left=0,ei.bottom=0,ei.right=0;else if(void 0!==es&&void 0!==eu){var ef=eu/es,ep=isNaN(ef)?"100%":"".concat(100*ef,"%");"responsive"===B?(ei.display="block",ei.position="relative",ea=!0,eo.paddingTop=ep):"intrinsic"===B?(ei.display="inline-block",ei.position="relative",ei.maxWidth="100%",ea=!0,eo.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(es,"%27%20height=%27").concat(eu,"%27/%3e")):"fixed"===B&&(ei.display="inline-block",ei.position="relative",ei.width=es,ei.height=eu)}var ev={src:b,srcSet:void 0,sizes:void 0};er&&(ev=w({config:Z,src:s,unoptimized:h,layout:B,width:es,quality:ec,sizes:u,loader:F}));var em=s,eh="imagesizes";eh="imageSizes";var eg=(r(n={},"imageSrcSet",ev.srcSet),r(n,eh,ev.sizes),r(n,"crossOrigin",W.crossOrigin),n),ey=l.default.useLayoutEffect,eb=l.useRef(D),eE=l.useRef(s);l.useEffect(function(){eb.current=D},[D]),ey(function(){eE.current!==s&&(en(),eE.current=s)},[en,s]);var ex=a({isLazy:G,imgAttributes:ev,heightInt:eu,widthInt:es,qualityInt:ec,layout:B,className:R,imgStyle:el,blurStyle:ed,loading:N,config:Z,unoptimized:h,placeholder:q,loader:F,srcString:em,onLoadingCompleteRef:eb,setBlurComplete:$,setIntersection:ee,isVisible:er,noscriptSizes:u},W);return l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{style:ei},ea?l.default.createElement("span",{style:eo},t?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,l.default.createElement(O,Object.assign({},ex))),C?l.default.createElement(d.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ev.src+ev.srcSet+ev.sizes,rel:"preload",as:"image",href:ev.srcSet?void 0:ev.src},eg))):null)};var a=n(6495).Z,s=n(2648).Z,u=n(1598).Z,c=n(7273).Z,l=u(n(7294)),d=s(n(5443)),f=n(9309),p=n(7190),v=n(9977);n(3794);var m=n(2392);function h(e){return"/"===e[0]?e.slice(1):e}var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},y=new Set,b="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",E=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(h(n))),a=o.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString()),o.href}],["cloudinary",function(e){var t,n=e.config,r=e.src,i=e.width,o=["f_auto","c_limit","w_"+i,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(n.path).concat(o).concat(h(r))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(h(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function x(e){return void 0!==e.default}function w(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,a=e.width,s=e.quality,u=e.sizes,c=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var l=function(e,t,n,r){var i=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var s=/(^|\s)(1?\d?\d)vw/g,u=[];c=s.exec(r);c)u.push(parseInt(c[2]));if(u.length){var c,l,d=.01*(l=Math).min.apply(l,o(u));return{widths:a.filter(function(e){return e>=i[0]*d}),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map(function(e){return a.find(function(t){return t>=e})||a[a.length-1]}))),kind:"x"}}(t,a,i,u),d=l.widths,f=l.kind,p=d.length-1;return{sizes:u||"w"!==f?u:"100vw",srcSet:d.map(function(e,r){return"".concat(c({config:t,src:n,quality:s,width:e})," ").concat("w"===f?e:r+1).concat(f)}).join(", "),src:c({config:t,src:n,quality:s,width:d[p]})}}function S(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function k(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=E.get(n);if(r)return r(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function C(e,t,n,r,i,o){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(y.add(t),"blur"===r&&o(!0),null==i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}}))}var O=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,i=e.layout,o=e.className,s=e.imgStyle,u=e.blurStyle,d=e.isLazy,f=e.placeholder,p=e.loading,v=e.srcString,m=e.config,h=e.unoptimized,g=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,E=e.setIntersection,x=e.onLoad,S=e.onError,k=(e.isVisible,e.noscriptSizes),O=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return p=d?"lazy":p,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},O,t,{decoding:"async","data-nimg":i,className:o,style:a({},s,u),ref:l.useCallback(function(e){E(e),(null==e?void 0:e.complete)&&C(e,v,i,f,y,b)},[E,v,i,f,y,b,]),onLoad:function(e){C(e.currentTarget,v,i,f,y,b),x&&x(e)},onError:function(e){"blur"===f&&b(!0),S&&S(e)}})),(d||"blur"===f)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},O,w({config:m,src:v,unoptimized:h,layout:i,width:n,quality:r,sizes:k,loader:g}),{decoding:"async","data-nimg":i,style:s,className:o,loading:p}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5675:function(e,t,n){n(8045)},2703:function(e,t,n){"use strict";var r=n(414);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,a){if(a!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4098:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,{Z:function(){return ed}});var o=n(7294),a=function(e){var t=(0,o.useRef)(e);return(0,o.useEffect)(function(){t.current=e},[e]),t};function s(e){var t=a(e);return(0,o.useCallback)(function(){return t.current&&t.current.apply(t,arguments)},[t])}var u=function(e,t){var n=(0,o.useRef)(!0);(0,o.useEffect)(function(){if(n.current){n.current=!1;return}return e()},t)},c=n(4184),l=n.n(c);function d(e,t){return(d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var f=n(3935),p={disabled:!1},v=o.createContext(null),m="unmounted",h="exited",g="entering",y="entered",b="exiting",E=function(e){function t(t,n){r=e.call(this,t,n)||this;var r,i,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(i=h,r.appearStatus=g):i=y:i=t.unmountOnExit||t.mountOnEnter?m:h,r.state={status:i},r.nextCallback=null,r}n=t,r=e,n.prototype=Object.create(r.prototype),n.prototype.constructor=n,d(n,r),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===m?{status:h}:null};var n,r,a=t.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==g&&n!==y&&(t=g):(n===g||n===y)&&(t=b)}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},a.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){if(this.cancelNextCallback(),t===g){if(this.props.unmountOnExit||this.props.mountOnEnter){var n,r=this.props.nodeRef?this.props.nodeRef.current:f.findDOMNode(this);r&&(n=r).scrollTop}this.performEnter(e)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===h&&this.setState({status:m})},a.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,i=this.props.nodeRef?[r]:[f.findDOMNode(this),r],o=i[0],a=i[1],s=this.getTimeouts(),u=r?s.appear:s.enter;if(!e&&!n||p.disabled){this.safeSetState({status:y},function(){t.props.onEntered(o)});return}this.props.onEnter(o,a),this.safeSetState({status:g},function(){t.props.onEntering(o,a),t.onTransitionEnd(u,function(){t.safeSetState({status:y},function(){t.props.onEntered(o,a)})})})},a.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:f.findDOMNode(this);if(!t||p.disabled){this.safeSetState({status:h},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:b},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:h},function(){e.props.onExited(r)})})})},a.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},a.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:f.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=i[0],a=i[1];this.props.addEndListener(o,a)}null!=e&&setTimeout(this.nextCallback,e)},a.render=function(){var e=this.state.status;if(e===m)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,i(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(v.Provider,{value:null},"function"==typeof n?n(e,r):o.cloneElement(o.Children.only(n),r))},t}(o.Component);function x(){}E.contextType=v,E.propTypes={},E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x},E.UNMOUNTED=m,E.EXITED=h,E.ENTERING=g,E.ENTERED=y,E.EXITING=b;var w=n(5697),S=n.n(w);function k(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function C(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}n(1143);var O=/-(.)/g,N=o.createContext({});function A(e,t){var n=(0,o.useContext)(N);return e||n[t]||t}N.Consumer,N.Provider;var I,R,T,z,L,P,j,_,D=["className","bsPrefix","as"],M=(I="carousel-caption",L=void 0===(z=(T=void 0===R?{}:R).displayName)?function(e){var t;return e[0].toUpperCase()+e.replace(O,function(e,t){return t.toUpperCase()}).slice(1)}(I):z,P=T.Component,j=T.defaultProps,(_=o.forwardRef(function(e,t){var n=e.className,a=e.bsPrefix,s=e.as,u=i(e,D),c=A(a,I);return o.createElement(void 0===s?P||"div":s,r({ref:t,className:l()(n,c)},u))})).defaultProps=j,_.displayName=L,_),q=["as","bsPrefix","children","className"],U=o.forwardRef(function(e,t){var n=e.as,a=e.bsPrefix,s=e.children,u=e.className,c=i(e,q),d=l()(u,A(a,"carousel-item"));return o.createElement(void 0===n?"div":n,r({ref:t},c,{className:d}),s)});function W(e,t){var n=0;return o.Children.map(e,function(e){return o.isValidElement(e)?t(e,n++):e})}U.displayName="CarouselItem";var V=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(e){return null!=e}).reduce(function(e,t){if("function"!=typeof t)throw Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];e.apply(this,r),t.apply(this,r)}},null)},Z=["as","disabled","onKeyDown"];function B(e){return!e||"#"===e.trim()}var F=o.forwardRef(function(e,t){var n=e.as,a=e.disabled,s=e.onKeyDown,u=i(e,Z),c=function(e){var t=u.href,n=u.onClick;if((a||B(t))&&e.preventDefault(),a){e.stopPropagation();return}n&&n(e)},l=function(e){" "===e.key&&(e.preventDefault(),c(e))};return B(u.href)&&(u.role=u.role||"button",u.href=u.href||"#"),a&&(u.tabIndex=-1,u["aria-disabled"]=!0),o.createElement(void 0===n?"a":n,r({ref:t},u,{onClick:c,onKeyDown:V(l,s)}))});F.displayName="SafeAnchor";var H=/([A-Z])/g,K=/^ms-/;function X(e){var t;return e.replace(H,"-$1").toLowerCase().replace(K,"-ms-")}var G=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,Y=function(e,t){var n,r,i,o,a="",s="";if("string"==typeof t)return e.style.getPropertyValue(X(t))||((o=(i=r=n=e)&&i.ownerDocument||document)&&o.defaultView||window).getComputedStyle(n,void 0).getPropertyValue(X(t));Object.keys(t).forEach(function(n){var r,i=t[n];i||0===i?(r=n)&&G.test(r)?s+=n+"("+i+") ":a+=X(n)+": "+i+";":e.style.removeProperty(X(n))}),s&&(a+="transform: "+s+";"),e.style.cssText+=";"+a},J=!!("undefined"!=typeof window&&window.document&&window.document.createElement),$=!1,Q=!1;try{var ee={get passive(){return $=!0},get once(){return Q=$=!0}};J&&(window.addEventListener("test",ee,ee),window.removeEventListener("test",ee,!0))}catch(et){}var en=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!Q){var i=r.once,o=r.capture,a=n;!Q&&i&&(a=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=a),e.addEventListener(t,a,$?r:o)}e.addEventListener(t,n,r)},er=function(e,t,n,r){var i=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,i),n.__once&&e.removeEventListener(t,n.__once,i)},ei=function(e,t,n,r){return en(e,t,n,r),function(){er(e,t,n,r)}};function eo(e,t){var n=Y(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function ea(e,t){var n=eo(e,"transitionDuration"),r=eo(e,"transitionDelay"),i=function(e,t,n,r){if(null==n){var i,o,a;a=-1===(o=Y(e,"transitionDuration")||"").indexOf("ms")?1e3:1,n=parseFloat(o)*a||0}var s,u,c,l,d,f,p=(u=n,c=void 0,c=5,l=!1,d=setTimeout(function(){l||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var i=document.createEvent("HTMLEvents");i.initEvent(t,n,r),e.dispatchEvent(i)}}(e,"transitionend",!0)},u+c),f=ei(e,"transitionend",function(){l=!0},{once:!0}),function(){clearTimeout(d),f()}),v=ei(e,"transitionend",t);return function(){p(),v()}}(e,function(n){n.target===e&&(i(),t(n))},n+r)}var es=["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"],eu={bsPrefix:S().string,as:S().elementType,slide:S().bool,fade:S().bool,controls:S().bool,indicators:S().bool,activeIndex:S().number,onSelect:S().func,onSlide:S().func,onSlid:S().func,interval:S().number,keyboard:S().bool,pause:S().oneOf(["hover",!1]),wrap:S().bool,touch:S().bool,prevIcon:S().node,prevLabel:S().string,nextIcon:S().node,nextLabel:S().string},ec={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:o.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:o.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"},el=o.forwardRef(function(e,t){var n,c,d,f=Object.keys(c={activeIndex:"onSelect"}).reduce(function(t,n){var a,s,u,l,d,f,p,v,m,h,g=t[k(n)],y=t[n],b=i(t,[k(n),n].map(C)),E=c[n],x=(l=e[E],d=(0,o.useRef)(void 0!==y),p=(f=(0,o.useState)(g))[0],v=f[1],m=void 0!==y,h=d.current,d.current=m,!m&&h&&p!==g&&v(g),[m?y:p,(0,o.useCallback)(function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];l&&l.apply(void 0,[e].concat(n)),v(e)},[l])]),w=x[0],S=x[1];return r({},b,((a={})[n]=w,a[E]=S,a))},e),p=f.as,v=f.bsPrefix,m=f.slide,h=f.fade,g=f.controls,y=f.indicators,b=f.activeIndex,x=f.onSelect,w=f.onSlide,S=f.onSlid,O=f.interval,N=f.keyboard,I=f.onKeyDown,R=f.pause,T=f.onMouseOver,z=f.onMouseOut,L=f.wrap,P=f.touch,j=f.onTouchStart,_=f.onTouchMove,D=f.onTouchEnd,M=f.prevIcon,q=f.prevLabel,U=f.nextIcon,V=f.nextLabel,Z=f.className,B=f.children,H=i(f,es),K=A(v,"carousel"),X=(0,o.useRef)(null),G=(0,o.useState)("next"),Y=G[0],J=G[1],$=(0,o.useState)(!1),Q=$[0],ee=$[1],et=(0,o.useState)(!1),en=et[0],er=et[1],ei=(0,o.useState)(b||0),eo=ei[0],eu=ei[1];en||b===eo||(J(X.current?X.current:(b||0)>eo?"next":"prev"),m&&er(!0),eu(b||0)),(0,o.useEffect)(function(){X.current&&(X.current=null)});var ec,el,ed,ef=0;el=function(e,t){++ef,t===b&&(d=e.props.interval)},ed=0,o.Children.forEach(B,function(e){o.isValidElement(e)&&el(e,ed++)});var ep=a(d),ev=(0,o.useCallback)(function(e){if(!en){var t=eo-1;if(t<0){if(!L)return;t=ef-1}X.current="prev",x&&x(t,e)}},[en,eo,x,L,ef]),em=s(function(e){if(!en){var t=eo+1;if(t>=ef){if(!L)return;t=0}X.current="next",x&&x(t,e)}}),eh=(0,o.useRef)();(0,o.useImperativeHandle)(t,function(){return{element:eh.current,prev:ev,next:em}});var eg=s(function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(eh.current)&&em()}),ey="next"===Y?"left":"right";u(function(){!m&&(w&&w(eo,ey),S&&S(eo,ey))},[eo]);var eb,eE,ex,ew,eS,ek,eC,eO,eN=K+"-item-"+Y,eA=K+"-item-"+ey,eI=(0,o.useCallback)(function(e){var t;e.offsetHeight,w&&w(eo,ey)},[w,eo,ey]),eR=(0,o.useCallback)(function(){er(!1),S&&S(eo,ey)},[S,eo,ey]),eT=(0,o.useCallback)(function(e){if(N&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),ev(e);return;case"ArrowRight":e.preventDefault(),em(e);return}I&&I(e)},[N,I,ev,em]),ez=(0,o.useCallback)(function(e){"hover"===R&&ee(!0),T&&T(e)},[R,T]),eL=(0,o.useCallback)(function(e){ee(!1),z&&z(e)},[z]),eP=(0,o.useRef)(0),ej=(0,o.useRef)(0),e_=(eb=(0,o.useRef)(!0),eE=(0,o.useRef)(function(){return eb.current}),(0,o.useEffect)(function(){return eb.current=!0,function(){eb.current=!1}},[]),ex=eE.current,ew=(0,o.useRef)(),eS=function(){return clearTimeout(ew.current)},(eC=(0,o.useRef)(eS)).current=eS,(0,o.useEffect)(function(){return function(){return eC.current()}},[]),(0,o.useMemo)(function(){var e=function(){return clearTimeout(ew.current)};return{set:function(t,n){void 0===n&&(n=0),ex()&&(e(),n<=2147483647?ew.current=setTimeout(t,n):function e(t,n,r){var i=r-Date.now();t.current=i<=2147483647?setTimeout(n,i):setTimeout(function(){return e(t,n,r)},2147483647)}(ew,t,Date.now()+n))},clear:e}},[])),eD=(0,o.useCallback)(function(e){eP.current=e.touches[0].clientX,ej.current=0,"hover"===R&&ee(!0),j&&j(e)},[R,j]),eM=(0,o.useCallback)(function(e){e.touches&&e.touches.length>1?ej.current=0:ej.current=e.touches[0].clientX-eP.current,_&&_(e)},[_]),eq=(0,o.useCallback)(function(e){if(P){var t=ej.current;Math.abs(t)>40&&(t>0?ev(e):em(e))}"hover"===R&&e_.set(function(){ee(!1)},O||void 0),D&&D(e)},[P,R,ev,em,e_,O,D]),eU=null!=O&&!Q&&!en,eW=(0,o.useRef)();(0,o.useEffect)(function(){var e,t;if(eU)return eW.current=window.setInterval(document.visibilityState?eg:em,null!=(e=null!=(t=ep.current)?t:O)?e:void 0),function(){null!==eW.current&&clearInterval(eW.current)}},[eU,em,ep,O,eg]);var eV=(0,o.useMemo)(function(){return y&&Array.from({length:ef},function(e,t){return function(e){x&&x(t,e)}})},[y,ef,x]);return o.createElement(void 0===p?"div":p,r({ref:eh},H,{onKeyDown:eT,onMouseOver:ez,onMouseOut:eL,onTouchStart:eD,onTouchMove:eM,onTouchEnd:eq,className:l()(Z,K,m&&"slide",h&&K+"-fade")}),y&&o.createElement("ol",{className:K+"-indicators"},W(B,function(e,t){return o.createElement("li",{key:t,className:t===eo?"active":void 0,onClick:eV?eV[t]:void 0})})),o.createElement("div",{className:K+"-inner"},W(B,function(e,t){var n=t===eo;return m?o.createElement(E,{in:n,onEnter:n?eI:void 0,onEntered:n?eR:void 0,addEndListener:ea},function(t){return o.cloneElement(e,{className:l()(e.props.className,n&&"entered"!==t&&eN,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&eA)})}):o.cloneElement(e,{className:l()(e.props.className,n&&"active")})})),g&&o.createElement(o.Fragment,null,(L||0!==b)&&o.createElement(F,{className:K+"-control-prev",onClick:ev},M,q&&o.createElement("span",{className:"sr-only"},q)),(L||b!==ef-1)&&o.createElement(F,{className:K+"-control-next",onClick:em},U,V&&o.createElement("span",{className:"sr-only"},V))))});el.displayName="Carousel",el.propTypes=eu,el.defaultProps=ec,el.Caption=M,el.Item=U;var ed=el}}]);