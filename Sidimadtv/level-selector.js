!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("clappr")):"function"==typeof define&&define.amd?define(["clappr"],e):"object"==typeof exports?exports.LevelSelector=e(require("clappr")):t.LevelSelector=e(t.Clappr)}("undefined"!=typeof self?self:this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="<%=baseUrl%>/",e(e.s=39)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(10),o=n(29),i=n(14),u=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(11)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=t.exports={version:"2.5.5"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(1),o=n(12);t.exports=n(2)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(54),o=n(16);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(22)("wks"),o=n(13),i=n(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e,n){var r=n(0),o=n(4),i=n(28),u=n(5),l=n(3),s=function(t,e,n){var c,a,f,p=t&s.F,v=t&s.G,d=t&s.S,h=t&s.P,y=t&s.B,b=t&s.W,g=v?o:o[e]||(o[e]={}),_=g.prototype,m=v?r:d?r[e]:(r[e]||{}).prototype;v&&(n=e);for(c in n)(a=!p&&m&&void 0!==m[c])&&l(g,c)||(f=a?m[c]:n[c],g[c]=v&&"function"!=typeof m[c]?n[c]:y&&a?i(f,r):b&&m[c]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((g.virtual||(g.virtual={}))[c]=f,t&s.R&&_&&!_[c]&&u(_,c,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,n){var r=n(6);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(6);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=!0},function(t,e){t.exports={}},function(t,e,n){var r=n(10),o=n(53),i=n(23),u=n(21)("IE_PROTO"),l=function(){},s=function(){var t,e=n(30)("iframe"),r=i.length;for(e.style.display="none",n(58).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(l.prototype=r(t),n=new l,l.prototype=null,n[u]=t):n=s(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(34),o=n(23);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(22)("keys"),o=n(13);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(1).f,o=n(3),i=n(8)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){e.f=n(8)},function(t,e,n){var r=n(0),o=n(4),i=n(17),u=n(25),l=n(1).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||l(e,t,{value:u.f(t)})}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(46);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){t.exports=!n(2)&&!n(11)(function(){return 7!=Object.defineProperty(n(30)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(6),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(48),i=r(o),u=n(65),l=r(u),s="function"==typeof l.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof l.default&&t.constructor===l.default&&t!==l.default.prototype?"symbol":typeof t};e.default="function"==typeof l.default&&"symbol"===s(i.default)?function(t){return void 0===t?"undefined":s(t)}:function(t){return t&&"function"==typeof l.default&&t.constructor===l.default&&t!==l.default.prototype?"symbol":void 0===t?"undefined":s(t)}},function(t,e,n){"use strict";var r=n(17),o=n(9),i=n(33),u=n(5),l=n(18),s=n(52),c=n(24),a=n(59),f=n(8)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,d,h,y,b){s(n,e,d);var g,_,m,L=function(t){if(!p&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},E=e+" Iterator",x="values"==h,S=!1,O=t.prototype,C=O[f]||O["@@iterator"]||h&&O[h],w=C||L(h),T=h?x?L("entries"):w:void 0,j="Array"==e?O.entries||C:C;if(j&&(m=a(j.call(new t)))!==Object.prototype&&m.next&&(c(m,E,!0),r||"function"==typeof m[f]||u(m,f,v)),x&&C&&"values"!==C.name&&(S=!0,w=function(){return C.call(this)}),r&&!b||!p&&!S&&O[f]||u(O,f,w),l[e]=w,l[E]=v,h)if(g={values:x?w:L("values"),keys:y?w:L("keys"),entries:T},b)for(_ in g)_ in O||i(O,_,g[_]);else o(o.P+o.F*(p||S),e,g);return g}},function(t,e,n){t.exports=n(5)},function(t,e,n){var r=n(3),o=n(7),i=n(55)(!1),u=n(21)("IE_PROTO");t.exports=function(t,e){var n,l=o(t),s=0,c=[];for(n in l)n!=u&&r(l,n)&&c.push(n);for(;e.length>s;)r(l,n=e[s++])&&(~i(c,n)||c.push(n));return c}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(34),o=n(23).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(27),o=n(12),i=n(7),u=n(14),l=n(3),s=n(29),c=Object.getOwnPropertyDescriptor;e.f=n(2)?c:function(t,e){if(t=i(t),e=u(e,!0),s)try{return c(t,e)}catch(t){}if(l(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(40),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=o.default,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(41),i=r(o),u=n(42),l=r(u),s=n(47),c=r(s),a=n(75),f=r(a),p=n(83),v=n(84),d=r(v),h=n(85),y=r(h),b=function(t){function e(){return(0,i.default)(this,e),(0,c.default)(this,t.apply(this,arguments))}return(0,f.default)(e,t),e.prototype.bindEvents=function(){this.listenTo(this.core,p.Events.CORE_READY,this.bindPlaybackEvents),this.listenTo(this.core,p.Events.CORE_ACTIVE_CONTAINER_CHANGED,this.reload),this.listenTo(this.core.mediaControl,p.Events.MEDIACONTROL_RENDERED,this.render),this.listenTo(this.core.mediaControl,p.Events.MEDIACONTROL_HIDE,this.hideSelectLevelMenu)},e.prototype.unBindEvents=function(){this.stopListening(this.core,p.Events.CORE_READY),this.stopListening(this.core,p.Events.CORE_ACTIVE_CONTAINER_CHANGED),this.stopListening(this.core.mediaControl,p.Events.MEDIACONTROL_RENDERED),this.stopListening(this.core.mediaControl,p.Events.MEDIACONTROL_HIDE),this.stopListening(this.core.activePlayback,p.Events.PLAYBACK_LEVELS_AVAILABLE),this.stopListening(this.core.activePlayback,p.Events.PLAYBACK_LEVEL_SWITCH_START),this.stopListening(this.core.activePlayback,p.Events.PLAYBACK_LEVEL_SWITCH_END),this.stopListening(this.core.activePlayback,p.Events.PLAYBACK_BITRATE)},e.prototype.bindPlaybackEvents=function(){var t=this.core.activePlayback;this.listenTo(t,p.Events.PLAYBACK_LEVELS_AVAILABLE,this.fillLevels),this.listenTo(t,p.Events.PLAYBACK_LEVEL_SWITCH_START,this.startLevelSwitch),this.listenTo(t,p.Events.PLAYBACK_LEVEL_SWITCH_END,this.stopLevelSwitch),this.listenTo(t,p.Events.PLAYBACK_BITRATE,this.updateCurrentLevel),t.levels&&t.levels.length>0&&this.fillLevels(t.levels)},e.prototype.reload=function(){this.unBindEvents(),this.bindEvents(),this.bindPlaybackEvents()},e.prototype.shouldRender=function(){if(!this.core.activeContainer)return!1;var t=this.core.activePlayback;if(!t)return!1;var e=void 0!==t.currentLevel,n=!!(this.levels&&this.levels.length>1);return e&&n},e.prototype.render=function(){if(this.shouldRender()){var t=p.Styler.getStyleFor(y.default,{baseUrl:this.core.options.baseUrl});this.$el.html(this.template({levels:this.levels,title:this.getTitle()})),this.$el.append(t),this.core.mediaControl.$(".media-control-right-panel").append(this.el),this.highlightCurrentLevel()}return this},e.prototype.fillLevels=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;void 0===this.selectedLevelId&&(this.selectedLevelId=e),this.levels=t,this.configureLevelsLabels(),this.render()},e.prototype.configureLevelsLabels=function(){if(void 0!==this.core.options.levelSelectorConfig){var t=this.core.options.levelSelectorConfig.labelCallback;if(t&&"function"!=typeof t)throw new TypeError("labelCallback must be a function");var e=this.core.options.levelSelectorConfig.labels,n=e?this.core.options.levelSelectorConfig.labels:{};if(t||e){var r=void 0,o=void 0;for(var i in this.levels)r=this.levels[i],o=n[r.id],t?r.label=t(r,o):o&&(r.label=o)}}},e.prototype.findLevelBy=function(t){var e=void 0;return this.levels.forEach(function(n){n.id===t&&(e=n)}),e},e.prototype.onLevelSelect=function(t){return this.selectedLevelId=parseInt(t.target.dataset.levelSelectorSelect,10),this.core.activePlayback.currentLevel!=this.selectedLevelId&&(this.core.activePlayback.currentLevel=this.selectedLevelId,this.toggleContextMenu(),t.stopPropagation(),!1)},e.prototype.onShowLevelSelectMenu=function(){this.toggleContextMenu()},e.prototype.hideSelectLevelMenu=function(){this.$(".level_selector ul").hide()},e.prototype.toggleContextMenu=function(){this.$(".level_selector ul").toggle()},e.prototype.buttonElement=function(){return this.$(".level_selector button")},e.prototype.levelElement=function(t){return this.$(".level_selector ul a"+(isNaN(t)?"":'[data-level-selector-select="'+t+'"]')).parent()},e.prototype.getTitle=function(){return(this.core.options.levelSelectorConfig||{}).title},e.prototype.startLevelSwitch=function(){this.buttonElement().addClass("changing")},e.prototype.stopLevelSwitch=function(){this.buttonElement().removeClass("changing")},e.prototype.updateText=function(t){-1===t?this.buttonElement().text(this.currentLevel?"AUTO ("+this.currentLevel.label+")":"AUTO"):this.buttonElement().text(this.findLevelBy(t).label)},e.prototype.updateCurrentLevel=function(t){var e=this.findLevelBy(t.level);this.currentLevel=e||null,this.highlightCurrentLevel()},e.prototype.highlightCurrentLevel=function(){this.levelElement().removeClass("current"),this.currentLevel&&this.levelElement(this.currentLevel.id).addClass("current"),this.updateText(this.selectedLevelId)},(0,l.default)(e,[{key:"name",get:function(){return"level_selector"}},{key:"template",get:function(){return(0,p.template)(d.default)}},{key:"attributes",get:function(){return{class:this.name,"data-level-selector":""}}},{key:"events",get:function(){return{"click [data-level-selector-select]":"onLevelSelect","click [data-level-selector-button]":"onShowLevelSelectMenu"}}}],[{key:"version",get:function(){return VERSION}}]),e}(p.UICorePlugin);e.default=b,t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(43),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports={default:n(44),__esModule:!0}},function(t,e,n){n(45);var r=n(4).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(9);r(r.S+r.F*!n(2),"Object",{defineProperty:n(1).f})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(31),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,o.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){t.exports={default:n(49),__esModule:!0}},function(t,e,n){n(50),n(61),t.exports=n(25).f("iterator")},function(t,e,n){"use strict";var r=n(51)(!0);n(32)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(15),o=n(16);t.exports=function(t){return function(e,n){var i,u,l=String(o(e)),s=r(n),c=l.length;return s<0||s>=c?t?"":void 0:(i=l.charCodeAt(s),i<55296||i>56319||s+1===c||(u=l.charCodeAt(s+1))<56320||u>57343?t?l.charAt(s):i:t?l.slice(s,s+2):u-56320+(i-55296<<10)+65536)}}},function(t,e,n){"use strict";var r=n(19),o=n(12),i=n(24),u={};n(5)(u,n(8)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(1),o=n(10),i=n(20);t.exports=n(2)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),l=u.length,s=0;l>s;)r.f(t,n=u[s++],e[n]);return t}},function(t,e,n){var r=n(35);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(7),o=n(56),i=n(57);t.exports=function(t){return function(e,n,u){var l,s=r(e),c=o(s.length),a=i(u,c);if(t&&n!=n){for(;c>a;)if((l=s[a++])!=l)return!0}else for(;c>a;a++)if((t||a in s)&&s[a]===n)return t||a||0;return!t&&-1}}},function(t,e,n){var r=n(15),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(15),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(3),o=n(60),i=n(21)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(16);t.exports=function(t){return Object(r(t))}},function(t,e,n){n(62);for(var r=n(0),o=n(5),i=n(18),u=n(8)("toStringTag"),l="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<l.length;s++){var c=l[s],a=r[c],f=a&&a.prototype;f&&!f[u]&&o(f,u,c),i[c]=i.Array}},function(t,e,n){"use strict";var r=n(63),o=n(64),i=n(18),u=n(7);t.exports=n(32)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){t.exports={default:n(66),__esModule:!0}},function(t,e,n){n(67),n(72),n(73),n(74),t.exports=n(4).Symbol},function(t,e,n){"use strict";var r=n(0),o=n(3),i=n(2),u=n(9),l=n(33),s=n(68).KEY,c=n(11),a=n(22),f=n(24),p=n(13),v=n(8),d=n(25),h=n(26),y=n(69),b=n(70),g=n(10),_=n(6),m=n(7),L=n(14),E=n(12),x=n(19),S=n(71),O=n(38),C=n(1),w=n(20),T=O.f,j=C.f,A=S.f,P=r.Symbol,M=r.JSON,k=M&&M.stringify,R=v("_hidden"),I=v("toPrimitive"),N={}.propertyIsEnumerable,B=a("symbol-registry"),D=a("symbols"),U=a("op-symbols"),F=Object.prototype,V="function"==typeof P,G=r.QObject,H=!G||!G.prototype||!G.prototype.findChild,Y=i&&c(function(){return 7!=x(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=T(F,e);r&&delete F[e],j(t,e,n),r&&t!==F&&j(F,e,r)}:j,K=function(t){var e=D[t]=x(P.prototype);return e._k=t,e},W=V&&"symbol"==typeof P.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof P},$=function(t,e,n){return t===F&&$(U,e,n),g(t),e=L(e,!0),g(n),o(D,e)?(n.enumerable?(o(t,R)&&t[R][e]&&(t[R][e]=!1),n=x(n,{enumerable:E(0,!1)})):(o(t,R)||j(t,R,E(1,{})),t[R][e]=!0),Y(t,e,n)):j(t,e,n)},J=function(t,e){g(t);for(var n,r=y(e=m(e)),o=0,i=r.length;i>o;)$(t,n=r[o++],e[n]);return t},z=function(t,e){return void 0===e?x(t):J(x(t),e)},q=function(t){var e=N.call(this,t=L(t,!0));return!(this===F&&o(D,t)&&!o(U,t))&&(!(e||!o(this,t)||!o(D,t)||o(this,R)&&this[R][t])||e)},Q=function(t,e){if(t=m(t),e=L(e,!0),t!==F||!o(D,e)||o(U,e)){var n=T(t,e);return!n||!o(D,e)||o(t,R)&&t[R][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=A(m(t)),r=[],i=0;n.length>i;)o(D,e=n[i++])||e==R||e==s||r.push(e);return r},Z=function(t){for(var e,n=t===F,r=A(n?U:m(t)),i=[],u=0;r.length>u;)!o(D,e=r[u++])||n&&!o(F,e)||i.push(D[e]);return i};V||(P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===F&&e.call(U,n),o(this,R)&&o(this[R],t)&&(this[R][t]=!1),Y(this,t,E(1,n))};return i&&H&&Y(F,t,{configurable:!0,set:e}),K(t)},l(P.prototype,"toString",function(){return this._k}),O.f=Q,C.f=$,n(37).f=S.f=X,n(27).f=q,n(36).f=Z,i&&!n(17)&&l(F,"propertyIsEnumerable",q,!0),d.f=function(t){return K(v(t))}),u(u.G+u.W+u.F*!V,{Symbol:P});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)v(tt[et++]);for(var nt=w(v.store),rt=0;nt.length>rt;)h(nt[rt++]);u(u.S+u.F*!V,"Symbol",{for:function(t){return o(B,t+="")?B[t]:B[t]=P(t)},keyFor:function(t){if(!W(t))throw TypeError(t+" is not a symbol!");for(var e in B)if(B[e]===t)return e},useSetter:function(){H=!0},useSimple:function(){H=!1}}),u(u.S+u.F*!V,"Object",{create:z,defineProperty:$,defineProperties:J,getOwnPropertyDescriptor:Q,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),M&&u(u.S+u.F*(!V||c(function(){var t=P();return"[null]"!=k([t])||"{}"!=k({a:t})||"{}"!=k(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(_(e)||void 0!==t)&&!W(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!W(e))return e}),r[1]=e,k.apply(M,r)}}),P.prototype[I]||n(5)(P.prototype,I,P.prototype.valueOf),f(P,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},function(t,e,n){var r=n(13)("meta"),o=n(6),i=n(3),u=n(1).f,l=0,s=Object.isExtensible||function(){return!0},c=!n(11)(function(){return s(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++l,w:{}}})},f=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!e)return"E";a(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!s(t))return!0;if(!e)return!1;a(t)}return t[r].w},v=function(t){return c&&d.NEED&&s(t)&&!i(t,r)&&a(t),t},d=t.exports={KEY:r,NEED:!1,fastKey:f,getWeak:p,onFreeze:v}},function(t,e,n){var r=n(20),o=n(36),i=n(27);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,l=n(t),s=i.f,c=0;l.length>c;)s.call(t,u=l[c++])&&e.push(u);return e}},function(t,e,n){var r=n(35);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(7),o=n(37).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?l(t):o(r(t))}},function(t,e){},function(t,e,n){n(26)("asyncIterator")},function(t,e,n){n(26)("observable")},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(76),i=r(o),u=n(80),l=r(u),s=n(31),c=r(s);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,c.default)(e)));t.prototype=(0,l.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(i.default?(0,i.default)(t,e):t.__proto__=e)}},function(t,e,n){t.exports={default:n(77),__esModule:!0}},function(t,e,n){n(78),t.exports=n(4).Object.setPrototypeOf},function(t,e,n){var r=n(9);r(r.S,"Object",{setPrototypeOf:n(79).set})},function(t,e,n){var r=n(6),o=n(10),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(28)(Function.call,n(38).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){t.exports={default:n(81),__esModule:!0}},function(t,e,n){n(82);var r=n(4).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){var r=n(9);r(r.S,"Object",{create:n(19)})},function(e,n){e.exports=t},function(t,e){t.exports='<button data-level-selector-button>\n  Auto\n</button>\n<ul>\n  <% if (title) { %>\n  <li data-title><%= title %></li>\n  <% }; %>\n  <li><a href="#" data-level-selector-select="-1">AUTO</a></li>\n  <% for (var i = 0; i < levels.length; i++) { %>\n    <li><a href="#" data-level-selector-select="<%= levels[i].id %>"><%= levels[i].label %></a></li>\n  <% }; %>\n</ul>\n'},function(t,e,n){var r=n(86);"string"==typeof r&&(r=[[t.i,r,""]]);n(88)(r,{singleton:!0});r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(87)(!1),e.push([t.i,".level_selector[data-level-selector]{float:right;position:relative;height:100%}.level_selector[data-level-selector] button{background-color:transparent;color:#fff;font-family:Roboto,Open Sans,Arial,sans-serif;-webkit-font-smoothing:antialiased;border:none;font-size:12px;height:100%}.level_selector[data-level-selector] button:hover{color:#c9c9c9}.level_selector[data-level-selector] button.changing{-webkit-animation:pulse .5s infinite alternate}.level_selector[data-level-selector]>ul{list-style-type:none;position:absolute;bottom:100%;display:none;background-color:rgba(28,28,28,.9);white-space:nowrap}.level_selector[data-level-selector] li{font-size:12px;color:#eee}.level_selector[data-level-selector] li[data-title]{background-color:#333;padding:8px 25px}.level_selector[data-level-selector] li a{color:#eee;padding:5px 10px;display:block;text-decoration:none}.level_selector[data-level-selector] li a:hover{background-color:hsla(0,0%,100%,.1);color:#fff}.level_selector[data-level-selector] li a:hover a{color:#fff;text-decoration:none}.level_selector[data-level-selector] li.current a{color:#2ecc71}",""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var u=t[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),e.push(u))}},e}},function(t,e){function n(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],e))}else{for(var l=[],i=0;i<r.parts.length;i++)l.push(u(r.parts[i],e));a[r.id]={id:r.id,refs:1,parts:l}}}}function r(t){for(var e=[],n={},r=0;r<t.length;r++){var o=t[r],i=o[0],u=o[1],l=o[2],s=o[3],c={css:u,media:l,sourceMap:s};n[i]?n[i].parts.push(c):e.push(n[i]={id:i,parts:[c]})}return e}function o(){var t=document.createElement("style"),e=v();return t.type="text/css",e.appendChild(t),t}function i(){var t=document.createElement("link"),e=v();return t.rel="stylesheet",e.appendChild(t),t}function u(t,e){var n,r,u;if(e.singleton){var a=h++;n=d||(d=o()),r=l.bind(null,n,a,!1),u=l.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=i(),r=c.bind(null,n),u=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=o(),r=s.bind(null,n),u=function(){n.parentNode.removeChild(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else u()}}function l(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}function s(t,e){var n=e.css,r=e.media;e.sourceMap;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function c(t,e){var n=e.css,r=(e.media,e.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var a={},f=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},p=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=f(function(){return document.head||document.getElementsByTagName("head")[0]}),d=null,h=0;t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=p());var o=r(t);return n(o,e),function(t){for(var i=[],u=0;u<o.length;u++){var l=o[u],s=a[l.id];s.refs--,i.push(s)}if(t){n(r(t),e)}for(var u=0;u<i.length;u++){var s=i[u];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete a[s.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()}])});