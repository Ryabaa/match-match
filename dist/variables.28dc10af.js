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
})({"ts-built/variables.js":[function(require,module,exports) {
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
},{}],"C:/Users/Ultraprice.by/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["C:/Users/Ultraprice.by/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","ts-built/variables.js"], null)
//# sourceMappingURL=/variables.28dc10af.js.map