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
},{}],"ts-built/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shuffle = shuffle;
exports.checkMail = checkMail;
exports.addAccountBlock = addAccountBlock;

var _modals = require("./modals.js");

var _variables = require("./variables.js");

function shuffle(arr) {
  return arr.sort(function () {
    return Math.random() - 0.5;
  });
}

function checkMail() {
  var mail = _variables.variables.registerInput_3.value;
  var dog = mail.indexOf("@");
  var errText = _variables.variables.registerErrText;

  if (mail == "") {
    errText.innerHTML = "Введите Адрес электронной почты";
    return false;
  } else if (mail.indexOf(".") == -1) {
    errText.innerHTML = 'Нет символа"."';
    return false;
  } else if (mail.indexOf(",") >= 0 || mail.indexOf(";") >= 0 || mail.indexOf(" ") >= 0) {
    errText.innerHTML = "Адрес электронной почты был введен неправильно";
    return false;
  } else if (dog == -1) {
    errText.innerHTML = 'Нет символа"@"';
    return false;
  } else if (dog < 1 || dog > mail.length - 5) {
    errText.innerHTML = "Адрес электронной почты был введен неправильно";
    return false;
  } else if (mail.charAt(dog - 1) == "." || mail.charAt(dog + 1) == ".") {
    errText.innerHTML = "Адрес электронной почты был введен неправильно";
    return false;
  } else {
    return true;
  }
}

function addAccountBlock() {
  if (_modals.name && _modals.lastname && _modals.email && _modals.ava !== null) {
    localStorage.setItem("name", _modals.name);
    localStorage.setItem("lastname", _modals.lastname);
    localStorage.setItem("email", _modals.email);
    localStorage.setItem("ava", _modals.ava);
  }
}
/* let name: any = localStorage.getItem("name");
let password: any = localStorage.getItem("password");
let email: any = localStorage.getItem("email"); */
},{"./modals.js":"ts-built/modals.js","./variables.js":"ts-built/variables.js"}],"ts-built/script.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopGame = stopGame;

var _variables = require("./variables.js");

var _utils = require("./utils.js");

var _modals = require("./modals.js");

var gameState = false;

if (_variables.variables.gameStateToggler !== null) {
  _variables.variables.gameStateToggler.onclick = function () {
    if (gameState === false) {
      gameState = true;
      startGame();
    } else {
      gameState = false;
      _variables.variables.gameFieldSubstrate.style.display = "unset";
      stopGame();
    }

    if (gameState === true) {
      _variables.variables.gameStateText.textContent = "Stop";
    } else {
      _variables.variables.gameStateText.textContent = "Start";
    }
  };
} //--------------------ClockTimer---------------//


var timer = null;
var time = "";
var sec = "00";
var min = "00";

function clocktimer() {
  sec = "00";
  min = "00";
  timer = setInterval(function () {
    sec = +sec + 1;

    if (sec < 10) {
      sec = "0" + sec;
    }

    if (sec == 60) {
      sec = "00";
      min = +min + 1;

      if (min < 10) {
        min = "0" + min;
      }
    }

    _variables.variables.seconds.innerText = sec;
    _variables.variables.minutes.innerText = min;
    time = "".concat(min, ":").concat(sec);
  }, 1000);
} //------------Game----------------//


function startGame() {
  spawnImages(_variables.cards, (0, _utils.shuffle)(_variables.images));
  clocktimer();
  _variables.variables.gameFieldSubstrate.style.display = "none";
}

function stopGame() {
  (0, _variables.changeCards)();
  clearCards(_variables.cards);
  clearTimeout(timer);
  sec = "00";
  min = "00";
  _variables.variables.seconds.innerText = sec;
  _variables.variables.minutes.innerText = min;
}

function clearCards(cards) {
  cards.forEach(function (card, i) {
    card.fail.style.display = "none";
    card.failCover.style.display = "none";
    card.imageContainer.style.display = "none";
    card.cover.style.display = "unset";
    card.fail.style.display = "none";
    card.failCover.style.display = "none";
    card.succes.style.display = "none";
    card.succesCover.style.display = "none";
  });
}

function spawnImages(cards, images) {
  cards.forEach(function (card, i) {
    card.imageContainer.innerHTML = images[i].image;
    card.imageId = images[i].id;
    addOnclicks(card);
  });
}

var getSucces = null;
var arr = [];

function check(arr, card, getSucces) {
  if (arr[0] !== arr[1]) {
    _variables.variables.gameFieldSubstrate.style.display = "unset";

    _variables.cards.forEach(function (card) {
      setTimeout(function () {
        card.fail.style.display = "unset";
        card.failCover.style.display = "unset";
      }, 700);
      setTimeout(function () {
        card.imageContainer.style.display = "none";
        card.cover.style.display = "unset";
        card.fail.style.display = "none";
        card.failCover.style.display = "none";
        _variables.variables.gameFieldSubstrate.style.display = "none";
      }, 1500);
    });
  }

  if (arr[0] == arr[1]) {
    setTimeout(function () {
      card.succes.style.display = "unset";
      card.succesCover.style.display = "unset";
      getSucces();

      if (_variables.cards.length === 0) {
        _variables.variables.resultName.innerHTML = localStorage.getItem("name");
        _variables.variables.resultTime1.innerHTML = time;
        _variables.variables.resultTime2.innerHTML = time;
        clearTimeout(timer);
        (0, _modals.openResultWindow)();
      }
    }, 1000);

    var index1 = _variables.cards.findIndex(function (n) {
      return n.imageId === arr[0];
    });

    if (index1 !== -1) {
      _variables.cards.splice(index1, 1);
    }

    var index2 = _variables.cards.findIndex(function (n) {
      return n.imageId === arr[1];
    });

    if (index2 !== -1) {
      _variables.cards.splice(index2, 1);
    }
  }
}

function addOnclicks(card) {
  card.cover.onclick = function () {
    card.imageContainer.style.display = "unset";
    card.cover.style.display = "none";
    var succes = card.succes;
    var succesCover = card.succesCover;
    arr.push(card.imageId);

    if (arr.length === 2) {
      check(arr, card, getSucces);
      arr = [];
    } else {
      getSucces = function getSucces() {
        succesCover.style.display = "unset";
        succes.style.display = "unset";
      };
    }
  };
}
},{"./variables.js":"ts-built/variables.js","./utils.js":"ts-built/utils.js","./modals.js":"ts-built/modals.js"}],"ts-built/modals.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openResultWindow = exports.ava = exports.email = exports.lastname = exports.name = void 0;

var _variables = require("./variables.js");

var _script = require("./script.js");

var _utils = require("./utils.js");

if (_variables.variables.registerOpen !== null) {
  _variables.variables.registerOpen.onclick = function () {
    _variables.variables.registerWindow.classList.toggle("register-visible");

    _variables.variables.substrate.classList.toggle("substrate-visible");
  };
}

var name = null;
exports.name = name;
var lastname = null;
exports.lastname = lastname;
var email = null;
exports.email = email;
var ava = null;
exports.ava = ava;
var reg = localStorage.getItem("registration");

if (reg !== "done") {
  _variables.variables.registerAdd.onclick = function () {
    function checkRegisterInputs() {
      var input_1 = false;
      var input_2 = false;
      var input_3 = false;

      if (_variables.variables.registerInput_1.value.length < 2) {
        _variables.variables.registerIconErr_1.style.display = "flex";
        _variables.variables.registerIconCheck_1.style.display = "none";
      } else {
        _variables.variables.registerIconCheck_1.style.display = "unset";
        _variables.variables.registerIconErr_1.style.display = "none";
        input_1 = true;
      }

      if (_variables.variables.registerInput_2.value.length < 2) {
        _variables.variables.registerIconErr_2.style.display = "flex";
        _variables.variables.registerIconCheck_2.style.display = "none";
      } else {
        _variables.variables.registerIconCheck_2.style.display = "unset";
        _variables.variables.registerIconErr_2.style.display = "none";
        input_2 = true;
      }

      if ((0, _utils.checkMail)() === false) {
        _variables.variables.registerIconErr_3.style.display = "flex";
        _variables.variables.registerIconCheck_3.style.display = "none";
      } else {
        _variables.variables.registerIconCheck_3.style.display = "unset";
        _variables.variables.registerIconErr_3.style.display = "none";
        input_3 = true;
      }

      if (input_1 && input_2 && input_3 === true) {
        exports.name = name = _variables.variables.registerInput_1.value;
        exports.lastname = lastname = _variables.variables.registerInput_2.value;
        exports.email = email = _variables.variables.registerInput_3.value;
        (0, _utils.addAccountBlock)();
        return true;
      }
    }

    if (checkRegisterInputs() === true) {
      localStorage.setItem("registration", "done");
      _variables.variables.headerAvatar.src = ava;

      _variables.variables.registerWindow.classList.remove("register-visible");

      _variables.variables.substrate.classList.remove("substrate-visible");

      _variables.variables.gameStateToggler.style.display = "unset";
      _variables.variables.headerAvatar.style.display = "unset";
      _variables.variables.registerOpen.style.display = "none";
    }
  };

  _variables.variables.registerCancel.onclick = function () {
    _variables.variables.registerWindow.classList.remove("register-visible");

    _variables.variables.substrate.classList.remove("substrate-visible");
  };

  var avatar = false;

  _variables.variables.registerAvatar.onchange = function () {
    var file = _variables.variables.registerAvatar.files[0];

    if (file) {
      exports.ava = ava = URL.createObjectURL(file);
      _variables.variables.registerUserAvatar.src = ava;
    }

    _variables.variables.registerUserAvatar.style.display = "unset";
    _variables.variables.registerNoAvatar.style.display = "none";
    avatar = true;
  };

  if (avatar === false) {
    exports.ava = ava = "./assets/icons/no-avatar.svg";
  }
} else {
  _variables.variables.headerAvatar.src = localStorage.getItem("ava");
  _variables.variables.gameStateToggler.style.display = "unset";
  _variables.variables.headerAvatar.style.display = "unset";
  _variables.variables.registerOpen.style.display = "none";
}

_variables.variables.substrate.onclick = function () {
  _variables.variables.substrate.classList.remove("substrate-visible");

  _variables.variables.registerWindow.classList.remove("register-visible");
}; //-------Result Window-------//


var openResultWindow = function openResultWindow() {
  if (_variables.cards.length === 0) {
    _variables.variables.substrate2.classList.toggle("substrate-visible");

    _variables.variables.resultWindow.classList.toggle("result-visible");
  }
};

exports.openResultWindow = openResultWindow;

_variables.variables.resultBtn.onclick = function () {
  _variables.variables.resultWindow.classList.remove("result-visible");

  _variables.variables.substrate2.classList.remove("substrate-visible");

  (0, _script.stopGame)();
};
},{"./variables.js":"ts-built/variables.js","./script.js":"ts-built/script.js","./utils.js":"ts-built/utils.js"}],"C:/Users/Ultraprice.by/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["C:/Users/Ultraprice.by/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","ts-built/modals.js"], null)
//# sourceMappingURL=/modals.ea35c063.js.map