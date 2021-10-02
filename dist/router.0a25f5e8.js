// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/navigo/lib/navigo.min.js":[function(require,module,exports) {
var define;
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("Navigo",[],n):"object"==typeof exports?exports.Navigo=n():t.Navigo=n()}("undefined"!=typeof self?self:this,(function(){return function(){"use strict";var t={407:function(t,n,e){e.d(n,{default:function(){return N}});var o=/([:*])(\w+)/g,r=/\*/g,i=/\/\?/g;function a(t){return void 0===t&&(t="/"),v()?location.pathname+location.search+location.hash:t}function s(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function c(t){return"string"==typeof t}function u(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function h(t){var n=s(t).split(/\?(.*)?$/);return[s(n[0]),n.slice(1).join("")]}function f(t){for(var n={},e=t.split("&"),o=0;o<e.length;o++){var r=e[o].split("=");if(""!==r[0]){var i=decodeURIComponent(r[0]);n[i]?(Array.isArray(n[i])||(n[i]=[n[i]]),n[i].push(decodeURIComponent(r[1]||""))):n[i]=decodeURIComponent(r[1]||"")}}return n}function l(t,n){var e,a=h(s(t.currentLocationPath)),l=a[0],p=a[1],d=""===p?null:f(p),v=[];if(c(n.path)){if(e="(?:/^|^)"+s(n.path).replace(o,(function(t,n,e){return v.push(e),"([^/]+)"})).replace(r,"?(?:.*)").replace(i,"/?([^/]+|)")+"$",""===s(n.path)&&""===s(l))return{url:l,queryString:p,hashString:u(t.to),route:n,data:null,params:d}}else e=n.path;var g=new RegExp(e,""),m=l.match(g);if(m){var y=c(n.path)?function(t,n){return 0===n.length?null:t?t.slice(1,t.length).reduce((function(t,e,o){return null===t&&(t={}),t[n[o]]=decodeURIComponent(e),t}),null):null}(m,v):m.groups?m.groups:m.slice(1);return{url:s(l.replace(new RegExp("^"+t.instance.root),"")),queryString:p,hashString:u(t.to),route:n,data:y,params:d}}return!1}function p(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function d(t,n){return void 0===t[n]||!0===t[n]}function v(){return"undefined"!=typeof window}function g(t,n){return void 0===t&&(t=[]),void 0===n&&(n={}),t.filter((function(t){return t})).forEach((function(t){["before","after","already","leave"].forEach((function(e){t[e]&&(n[e]||(n[e]=[]),n[e].push(t[e]))}))})),n}function m(t,n,e){var o=n||{},r=0;!function n(){t[r]?Array.isArray(t[r])?(t.splice.apply(t,[r,1].concat(t[r][0](o)?t[r][1]:t[r][2])),n()):t[r](o,(function(t){void 0===t||!0===t?(r+=1,n()):e&&e(o)})):e&&e(o)}()}function y(t,n){void 0===t.currentLocationPath&&(t.currentLocationPath=t.to=a(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),n()}function _(t,n){for(var e=0;e<t.instance.routes.length;e++){var o=l(t,t.instance.routes[e]);if(o&&(t.matches||(t.matches=[]),t.matches.push(o),"ONE"===t.resolveOptions.strategy))return void n()}n()}function k(t,n){t.navigateOptions&&(void 0!==t.navigateOptions.shouldResolve&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),void 0!==t.navigateOptions.silent&&console.warn('"silent" is deprecated. Please check the documentation.')),n()}function O(t,n){!0===t.navigateOptions.force?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),n(!1)):n()}m.if=function(t,n,e){return Array.isArray(n)||(n=[n]),Array.isArray(e)||(e=[e]),[t,n,e]};var w=v(),L=p();function b(t,n){if(d(t.navigateOptions,"updateBrowserURL")){var e=("/"+t.to).replace(/\/\//g,"/"),o=w&&t.resolveOptions&&!0===t.resolveOptions.hash;L?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",o?"#"+e:e),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout((function(){if(!o){var n=location.hash;location.hash="",location.hash=n}t.instance.__freezeListening=!1}),1))):w&&(window.location.href=t.to)}n()}function A(t,n){var e=t.instance;e.lastResolved()?m(e.lastResolved().map((function(n){return function(e,o){if(n.route.hooks&&n.route.hooks.leave){var r=!1,i=t.instance.matchLocation(n.route.path,t.currentLocationPath,!1);r="*"!==n.route.path?!i:!(t.matches&&t.matches.find((function(t){return n.route.path===t.route.path}))),d(t.navigateOptions,"callHooks")&&r?m(n.route.hooks.leave.map((function(n){return function(e,o){return n((function(n){!1===n?t.instance.__markAsClean(t):o()}),t.matches&&t.matches.length>0?1===t.matches.length?t.matches[0]:t.matches:void 0)}})).concat([function(){return o()}])):o()}else o()}})),{},(function(){return n()})):n()}function P(t,n){d(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),n()}var R=[function(t,n){var e=t.instance.lastResolved();if(e&&e[0]&&e[0].route===t.match.route&&e[0].url===t.match.url&&e[0].queryString===t.match.queryString)return e.forEach((function(n){n.route.hooks&&n.route.hooks.already&&d(t.navigateOptions,"callHooks")&&n.route.hooks.already.forEach((function(n){return n(t.match)}))})),void n(!1);n()},function(t,n){t.match.route.hooks&&t.match.route.hooks.before&&d(t.navigateOptions,"callHooks")?m(t.match.route.hooks.before.map((function(n){return function(e,o){return n((function(n){!1===n?t.instance.__markAsClean(t):o()}),t.match)}})).concat([function(){return n()}])):n()},function(t,n){d(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),n()},function(t,n){t.match.route.hooks&&t.match.route.hooks.after&&d(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach((function(n){return n(t.match)})),n()}],S=[A,function(t,n){var e=t.instance._notFoundRoute;if(e){t.notFoundHandled=!0;var o=h(t.currentLocationPath),r=o[0],i=o[1],a=u(t.to);e.path=s(r);var c={url:e.path,queryString:i,hashString:a,data:null,route:e,params:""!==i?f(i):null};t.matches=[c],t.match=c}n()},m.if((function(t){return t.notFoundHandled}),R.concat([P]),[function(t,n){t.resolveOptions&&!1!==t.resolveOptions.noMatchWarning&&void 0!==t.resolveOptions.noMatchWarning||console.warn('Navigo: "'+t.currentLocationPath+"\" didn't match any of the registered routes."),n()},function(t,n){t.instance._setCurrent(null),n()}])];function E(){return(E=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}function x(t,n){var e=0;A(t,(function o(){e!==t.matches.length?m(R,E({},t,{match:t.matches[e]}),(function(){e+=1,o()})):P(t,n)}))}function H(t){t.instance.__markAsClean(t)}function j(){return(j=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}var C="[data-navigo]";function N(t,n){var e,o=n||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:C},r=this,i="/",d=null,w=[],L=!1,A=p(),P=v();function R(t){return t.indexOf("#")>=0&&(t=!0===o.hash?t.split("#")[1]||"/":t.split("#")[0]),t}function E(t){return s(i+"/"+s(t))}function N(t,n,e,o){return t=c(t)?E(t):t,{name:o||s(String(t)),path:t,handler:n,hooks:g(e)}}function U(t,n){if(!r.__dirty){r.__dirty=!0,t=t?s(i)+"/"+s(t):void 0;var e={instance:r,to:t,currentLocationPath:t,navigateOptions:{},resolveOptions:j({},o,n)};return m([y,_,m.if((function(t){var n=t.matches;return n&&n.length>0}),x,S)],e,H),!!e.matches&&e.matches}r.__waiting.push((function(){return r.resolve(t,n)}))}function q(t,n){if(r.__dirty)r.__waiting.push((function(){return r.navigate(t,n)}));else{r.__dirty=!0,t=s(i)+"/"+s(t);var e={instance:r,to:t,navigateOptions:n||{},resolveOptions:n&&n.resolveOptions?n.resolveOptions:o,currentLocationPath:R(t)};m([k,O,_,m.if((function(t){var n=t.matches;return n&&n.length>0}),x,S),b,H],e,H)}}function F(){if(P)return(P?[].slice.call(document.querySelectorAll(o.linksSelector||C)):[]).forEach((function(t){"false"!==t.getAttribute("data-navigo")&&"_blank"!==t.getAttribute("target")?t.hasListenerAttached||(t.hasListenerAttached=!0,t.navigoHandler=function(n){if((n.ctrlKey||n.metaKey)&&"a"===n.target.tagName.toLowerCase())return!1;var e=t.getAttribute("href");if(null==e)return!1;if(e.match(/^(http|https)/)&&"undefined"!=typeof URL)try{var o=new URL(e);e=o.pathname+o.search}catch(t){}var i=function(t){if(!t)return{};var n,e=t.split(","),o={};return e.forEach((function(t){var e=t.split(":").map((function(t){return t.replace(/(^ +| +$)/g,"")}));switch(e[0]){case"historyAPIMethod":o.historyAPIMethod=e[1];break;case"resolveOptionsStrategy":n||(n={}),n.strategy=e[1];break;case"resolveOptionsHash":n||(n={}),n.hash="true"===e[1];break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":o[e[0]]="true"===e[1]}})),n&&(o.resolveOptions=n),o}(t.getAttribute("data-navigo-options"));L||(n.preventDefault(),n.stopPropagation(),r.navigate(s(e),i))},t.addEventListener("click",t.navigoHandler)):t.hasListenerAttached&&t.removeEventListener("click",t.navigoHandler)})),r}function I(t,n,e){var o=w.find((function(n){return n.name===t})),r=null;if(o){if(r=o.path,n)for(var a in n)r=r.replace(":"+a,n[a]);r=r.match(/^\//)?r:"/"+r}return r&&e&&!e.includeRoot&&(r=r.replace(new RegExp("^/"+i),"")),r}function M(t){var n=h(s(t)),o=n[0],r=n[1],i=""===r?null:f(r);return{url:o,queryString:r,hashString:u(t),route:N(o,(function(){}),[e],o),data:null,params:i}}function T(t,n,e){return"string"==typeof n&&(n=z(n)),n?(n.hooks[t]||(n.hooks[t]=[]),n.hooks[t].push(e),function(){n.hooks[t]=n.hooks[t].filter((function(t){return t!==e}))}):(console.warn("Route doesn't exists: "+n),function(){})}function z(t){return"string"==typeof t?w.find((function(n){return n.name===E(t)})):w.find((function(n){return n.handler===t}))}t?i=s(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'),this.root=i,this.routes=w,this.destroyed=L,this.current=d,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=function(t){t.instance.__dirty=!1,t.instance.__waiting.length>0&&t.instance.__waiting.shift()()},this.on=function(t,n,o){var r=this;return"object"!=typeof t||t instanceof RegExp?("function"==typeof t&&(o=n,n=t,t=i),w.push(N(t,n,[e,o])),this):(Object.keys(t).forEach((function(n){if("function"==typeof t[n])r.on(n,t[n]);else{var o=t[n],i=o.uses,a=o.as,s=o.hooks;w.push(N(n,i,[e,s],a))}})),this)},this.off=function(t){return this.routes=w=w.filter((function(n){return c(t)?s(n.path)!==s(t):"function"==typeof t?t!==n.handler:String(n.path)!==String(t)})),this},this.resolve=U,this.navigate=q,this.navigateByName=function(t,n,e){var o=I(t,n);return null!==o&&(q(o.replace(new RegExp("^/?"+i),""),e),!0)},this.destroy=function(){this.routes=w=[],A&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=L=!0},this.notFound=function(t,n){return r._notFoundRoute=N("*",t,[e,n],"__NOT_FOUND__"),this},this.updatePageLinks=F,this.link=function(t){return"/"+i+"/"+s(t)},this.hooks=function(t){return e=t,this},this.extractGETParameters=function(t){return h(R(t))},this.lastResolved=function(){return d},this.generate=I,this.getLinkPath=function(t){return t.getAttribute("href")},this.match=function(t){var n={instance:r,currentLocationPath:t,to:t,navigateOptions:{},resolveOptions:o};return _(n,(function(){})),!!n.matches&&n.matches},this.matchLocation=function(t,n,e){void 0===n||void 0!==e&&!e||(n=E(n));var o={instance:r,to:n,currentLocationPath:n};return y(o,(function(){})),"string"==typeof t&&(t=void 0===e||e?E(t):t),l(o,{name:String(t),path:t,handler:function(){},hooks:{}})||!1},this.getCurrentLocation=function(){return M(s(a(i)).replace(new RegExp("^"+i),""))},this.addBeforeHook=T.bind(this,"before"),this.addAfterHook=T.bind(this,"after"),this.addAlreadyHook=T.bind(this,"already"),this.addLeaveHook=T.bind(this,"leave"),this.getRoute=z,this._pathToMatchObject=M,this._clean=s,this._checkForAHash=R,this._setCurrent=function(t){return d=r.current=t},function(){A&&(this.__popstateListener=function(){r.__freezeListening||U()},window.addEventListener("popstate",this.__popstateListener))}.call(this),F.call(this)}}},n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{}};return t[o](r,r.exports,e),r.exports}return e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e(407)}().default}));

},{}],"ts-built/variables.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeCards = changeCards;
exports.images = exports.cardsDefault = exports.cards = exports.variables = void 0;
var variables = {
  gameStateToggler: document.getElementById("gameStateToggler"),
  gameStateText: document.getElementById("gameStateText"),
  headerAvatar: document.getElementById("headerAvatar"),
  substrate: document.getElementById("substrate"),
  substrate2: document.getElementById("substrate2"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  registerWindow: document.getElementById("registerWindow"),
  registerOpen: document.getElementById("registerOpen"),
  registerErrText: document.getElementById("registerErrText"),
  registerInput_1: document.getElementById("registerInput_1"),
  registerInput_2: document.getElementById("registerInput_2"),
  registerInput_3: document.getElementById("registerInput_3"),
  registerIconCheck_1: document.getElementById("registerIconCheck_1"),
  registerIconCheck_2: document.getElementById("registerIconCheck_2"),
  registerIconCheck_3: document.getElementById("registerIconCheck_3"),
  registerIconErr_1: document.getElementById("registerIconErr_1"),
  registerIconErr_2: document.getElementById("registerIconErr_2"),
  registerIconErr_3: document.getElementById("registerIconErr_3"),
  registerAvatar: document.getElementById("registerAvatar"),
  registerNoAvatar: document.getElementById("registerNoAvatar"),
  registerUserAvatar: document.getElementById("registerUserAvatar"),
  registerAdd: document.getElementById("registerAdd"),
  registerCancel: document.getElementById("registerCancel"),
  gameFieldSubstrate: document.getElementById("gameFieldSubstrate"),
  resultWindow: document.getElementById("resultWindow"),
  resultName: document.getElementById("resultName"),
  resultBtn: document.getElementById("resultBtn"),
  resultTime1: document.getElementById("resultTime1"),
  resultTime2: document.getElementById("resultTime2"),
  gameField: document.getElementById("game-field"),
  main: document.getElementById("main")
};
exports.variables = variables;
var cards = [{
  imageContainer: document.getElementById("gameImage_1"),
  cover: document.getElementById("backsideCard_1"),
  imageId: null,
  succes: document.getElementById("succes1"),
  fail: document.getElementById("fail1"),
  succesCover: document.getElementById("succesCover1"),
  failCover: document.getElementById("failCover1")
}, {
  imageContainer: document.getElementById("gameImage_2"),
  cover: document.getElementById("backsideCard_2"),
  imageId: null,
  succes: document.getElementById("succes2"),
  fail: document.getElementById("fail2"),
  succesCover: document.getElementById("succesCover2"),
  failCover: document.getElementById("failCover2")
}, {
  imageContainer: document.getElementById("gameImage_3"),
  cover: document.getElementById("backsideCard_3"),
  imageId: null,
  succes: document.getElementById("succes3"),
  fail: document.getElementById("fail3"),
  succesCover: document.getElementById("succesCover3"),
  failCover: document.getElementById("failCover3")
}, {
  imageContainer: document.getElementById("gameImage_4"),
  cover: document.getElementById("backsideCard_4"),
  imageId: null,
  succes: document.getElementById("succes4"),
  fail: document.getElementById("fail4"),
  succesCover: document.getElementById("succesCover4"),
  failCover: document.getElementById("failCover4")
}, {
  imageContainer: document.getElementById("gameImage_5"),
  cover: document.getElementById("backsideCard_5"),
  imageId: null,
  succes: document.getElementById("succes5"),
  fail: document.getElementById("fail5"),
  succesCover: document.getElementById("succesCover5"),
  failCover: document.getElementById("failCover5")
}, {
  imageContainer: document.getElementById("gameImage_6"),
  cover: document.getElementById("backsideCard_6"),
  imageId: null,
  succes: document.getElementById("succes6"),
  fail: document.getElementById("fail6"),
  succesCover: document.getElementById("succesCover6"),
  failCover: document.getElementById("failCover6")
}, {
  imageContainer: document.getElementById("gameImage_7"),
  cover: document.getElementById("backsideCard_7"),
  imageId: null,
  succes: document.getElementById("succes7"),
  fail: document.getElementById("fail7"),
  succesCover: document.getElementById("succesCover7"),
  failCover: document.getElementById("failCover7")
}, {
  imageContainer: document.getElementById("gameImage_8"),
  cover: document.getElementById("backsideCard_8"),
  imageId: null,
  succes: document.getElementById("succes8"),
  fail: document.getElementById("fail8"),
  succesCover: document.getElementById("succesCover8"),
  failCover: document.getElementById("failCover8")
}, {
  imageContainer: document.getElementById("gameImage_9"),
  cover: document.getElementById("backsideCard_9"),
  imageId: null,
  succes: document.getElementById("succes9"),
  fail: document.getElementById("fail9"),
  succesCover: document.getElementById("succesCover9"),
  failCover: document.getElementById("failCover9")
}, {
  imageContainer: document.getElementById("gameImage_10"),
  cover: document.getElementById("backsideCard_10"),
  imageId: null,
  succes: document.getElementById("succes10"),
  fail: document.getElementById("fail10"),
  succesCover: document.getElementById("succesCover10"),
  failCover: document.getElementById("failCover10")
}, {
  imageContainer: document.getElementById("gameImage_11"),
  cover: document.getElementById("backsideCard_11"),
  imageId: null,
  succes: document.getElementById("succes11"),
  fail: document.getElementById("fail11"),
  succesCover: document.getElementById("succesCover11"),
  failCover: document.getElementById("failCover11")
}, {
  imageContainer: document.getElementById("gameImage_12"),
  cover: document.getElementById("backsideCard_12"),
  imageId: null,
  succes: document.getElementById("succes12"),
  fail: document.getElementById("fail12"),
  succesCover: document.getElementById("succesCover12"),
  failCover: document.getElementById("failCover12")
}];
exports.cards = cards;
var cardsDefault = [{
  imageContainer: document.getElementById("gameImage_1"),
  cover: document.getElementById("backsideCard_1"),
  imageId: null,
  succes: document.getElementById("succes1"),
  fail: document.getElementById("fail1"),
  succesCover: document.getElementById("succesCover1"),
  failCover: document.getElementById("failCover1")
}, {
  imageContainer: document.getElementById("gameImage_2"),
  cover: document.getElementById("backsideCard_2"),
  imageId: null,
  succes: document.getElementById("succes2"),
  fail: document.getElementById("fail2"),
  succesCover: document.getElementById("succesCover2"),
  failCover: document.getElementById("failCover2")
}, {
  imageContainer: document.getElementById("gameImage_3"),
  cover: document.getElementById("backsideCard_3"),
  imageId: null,
  succes: document.getElementById("succes3"),
  fail: document.getElementById("fail3"),
  succesCover: document.getElementById("succesCover3"),
  failCover: document.getElementById("failCover3")
}, {
  imageContainer: document.getElementById("gameImage_4"),
  cover: document.getElementById("backsideCard_4"),
  imageId: null,
  succes: document.getElementById("succes4"),
  fail: document.getElementById("fail4"),
  succesCover: document.getElementById("succesCover4"),
  failCover: document.getElementById("failCover4")
}, {
  imageContainer: document.getElementById("gameImage_5"),
  cover: document.getElementById("backsideCard_5"),
  imageId: null,
  succes: document.getElementById("succes5"),
  fail: document.getElementById("fail5"),
  succesCover: document.getElementById("succesCover5"),
  failCover: document.getElementById("failCover5")
}, {
  imageContainer: document.getElementById("gameImage_6"),
  cover: document.getElementById("backsideCard_6"),
  imageId: null,
  succes: document.getElementById("succes6"),
  fail: document.getElementById("fail6"),
  succesCover: document.getElementById("succesCover6"),
  failCover: document.getElementById("failCover6")
}, {
  imageContainer: document.getElementById("gameImage_7"),
  cover: document.getElementById("backsideCard_7"),
  imageId: null,
  succes: document.getElementById("succes7"),
  fail: document.getElementById("fail7"),
  succesCover: document.getElementById("succesCover7"),
  failCover: document.getElementById("failCover7")
}, {
  imageContainer: document.getElementById("gameImage_8"),
  cover: document.getElementById("backsideCard_8"),
  imageId: null,
  succes: document.getElementById("succes8"),
  fail: document.getElementById("fail8"),
  succesCover: document.getElementById("succesCover8"),
  failCover: document.getElementById("failCover8")
}, {
  imageContainer: document.getElementById("gameImage_9"),
  cover: document.getElementById("backsideCard_9"),
  imageId: null,
  succes: document.getElementById("succes9"),
  fail: document.getElementById("fail9"),
  succesCover: document.getElementById("succesCover9"),
  failCover: document.getElementById("failCover9")
}, {
  imageContainer: document.getElementById("gameImage_10"),
  cover: document.getElementById("backsideCard_10"),
  imageId: null,
  succes: document.getElementById("succes10"),
  fail: document.getElementById("fail10"),
  succesCover: document.getElementById("succesCover10"),
  failCover: document.getElementById("failCover10")
}, {
  imageContainer: document.getElementById("gameImage_11"),
  cover: document.getElementById("backsideCard_11"),
  imageId: null,
  succes: document.getElementById("succes11"),
  fail: document.getElementById("fail11"),
  succesCover: document.getElementById("succesCover11"),
  failCover: document.getElementById("failCover11")
}, {
  imageContainer: document.getElementById("gameImage_12"),
  cover: document.getElementById("backsideCard_12"),
  imageId: null,
  succes: document.getElementById("succes12"),
  fail: document.getElementById("fail12"),
  succesCover: document.getElementById("succesCover12"),
  failCover: document.getElementById("failCover12")
}];
exports.cardsDefault = cardsDefault;

function changeCards() {
  return exports.cards = cards = cardsDefault;
}

var images = [{
  image: "<img class=\"game-field__container-image\" src=\"./assets/images/elephant.png\" />",
  id: 1
}, {
  image: "<img class=\"game-field__container-image\" src=\"./assets/images/elephant.png\" />",
  id: 1
}, {
  image: "<img class=\"game-field__container-image\" src=\"./assets/images/bird.png\" />",
  id: 2
}, {
  image: "<img class=\"game-field__container-image\" src=\"./assets/images/bird.png\" />",
  id: 2
}, {
  image: "<img class=\"game-field__container-image\" src=\"./assets/images/wolf.png\" />",
  id: 3
}, {
  image: "<img class=\"game-field__container-image\" src=\"./assets/images/wolf.png\" />",
  id: 3
}, {
  image: "<img class=\"game-field__container-image\" src=\"./assets/images/lion.png\" />",
  id: 4
}, {
  image: "<img class=\"game-field__container-image\" src=\"./assets/images/lion.png\" />",
  id: 4
}, {
  image: "<img class=\"game-field__container-image\" src=\"./assets/images/tiger.png\" />",
  id: 5
}, {
  image: "<img class=\"game-field__container-image\" src=\"./assets/images/tiger.png\" />",
  id: 5
}, {
  image: "<img class=\"game-field__container-image\" src=\"./assets/images/pinguin.png\" />",
  id: 6
}, {
  image: "<img class=\"game-field__container-image\" src=\"./assets/images/pinguin.png\" />",
  id: 6
}];
exports.images = images;
},{}],"scripts/pages.js":[function(require,module,exports) {
var pages = {
  game: "\n            \n        "
};
},{}],"scripts/router.js":[function(require,module,exports) {
"use strict";

var _navigo = _interopRequireDefault(require("navigo"));

var _variables = require("../ts-built/variables.js");

var _pages = require("./pages.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _navigo.default('/');
router.on('/game', function () {
  _variables.variables.main.innerHTML = _pages.pages.game;
});
router.on('/about', function () {
  _variables.variables.main.innerHTML = 'about';
});
router.on('/settings', function () {
  _variables.variables.main.innerHTML = 'settings';
});
router.on('/score', function () {
  _variables.variables.main.innerHTML = 'score';
});
router.resolve();
router.navigate('/about');
},{"navigo":"node_modules/navigo/lib/navigo.min.js","../ts-built/variables.js":"ts-built/variables.js","./pages.js":"scripts/pages.js"}],"C:/Users/Ultraprice.by/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63601" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Ultraprice.by/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/router.js"], null)
//# sourceMappingURL=/router.0a25f5e8.js.map