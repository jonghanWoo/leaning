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
})({"src/quotes.js":[function(require,module,exports) {
var quotes = [];
var count = [];
var newLocal = "1.질병은 입을 쫓아 들어가고 화근은 입을 좇아 나온다. < 태평어람 >,2.행복이란 타인을 행복하게 해주려는 데서 생기는 부산물이다.,3.지혜는 듣는 데서 오고 후회는 말하는 데서 온다.,4.말을 많이 하는 것과 말을 잘하는 것은 다르다.,5.탐욕은 일체를 얻고자 욕심내어서 도리어 모든 것을 잃어버린다. < 몽테뉴 >,6.100권의 책에 쓰인 말보다 한 가지 성실한 마음이 크게 사람을 움직인다.< 프랭크린 >,7.힘으로 사람을 복종시키려 말고 덕으로써 사람을 복종시켜라. < 맹자 >,8.힘으로 유지되어야 할 필요가 있는 것은 무엇이나 불운이다. < 펄벅 >,9.자비 검약 겸허를 몸가짐의 三寶로하라. < 노자 >,10.타인에 대한 존경은 처세법의 제일 조건이다. < 아미엘 >,11.공포로 인해 타협하자 말 것이며 남이 나에게 타협하는 것을 두려워하지도 말라.< 케네디 >,12.오늘 할 수 있는 일에 전력을 다하라. 그러면 내일에는 한 걸음 더 진보한다. < 뉴턴 >,13.최대 다수의 최대 행복을 얻는 행동이 최선이다. < 허치슨 >,14.햇빛은 하나의 초점에 모아질 때만 불꽃을 피우는 것이다. < 벨 >,15.기다림만으로 사는 사람은 굶어서 죽는다. < 이탈리아 속담 >,16.속이는 말로 재물을 모으는 것은 죽음을 구하는 것. < 성경 >,17.끝을 맺기를 처음과 같이 하면 실패가 없다. < 노자 >,18.좋은 희망을 품는 것은 그것을 이룰 수 있는 지름길이다. < 루터 >,19.남자는 야생동물이면 여자는 이 야생동물을 길들이는 자이다.< 폴리스 바이언 >,20.남자는 언제나 여인의 첫사랑이 되고 싶어 한다.여자는 그 남자의 마지막 낭만이되려고 한다.,21.남자란 말하며 접근할 때는 봄이지만 결혼해 버리면 겨울이다. < 셰익스피어 >,22.죄는 미워하고 죄수는 사랑하라.< 간디 >,23.사랑은 나이 들어 생기 없는 사람들을 젊게 만들며 젊음을 찾는 사람들을 언제 까지나 젊게 만든다. < 클로우에게 >,24.나는 죽음을 겁내지 않는다.다만 의무를 다하지 않고 사는 것을 겁낸다.< 하운드 >,25 만약 제군이 돈의 가치를 알고 싶으면 나가서 얼마간의 돈을 빌려보라. < 프랭크린 >,26.모든 날 중 가장 완전히 잃어버린 날은 웃지 않는 날이다.< 샹포르 >,27.물고기를 주어라.한 끼 잘 먹을 것이다.하지만 물고기 잡는 법을 그르쳐 주어라.평생을 먹을 것이다. < 탈무드 >,28.열의 없이 성취 된 위업이란 아직 하나도 없다. <에머슨 >,29.버들가지는 약하지만 다른 재목을 묶을 수도 있다. < 하버트 >,30.오늘 달걀 한 개 갖는 것보다 암탉을 한 마리 갖는 편이 낫다. < 토마스 플러 >,31.왕은 배 민중은 물이다.물은 큰 배를 띄우기도 하고 뒤엎기도 한다. < 순자 >,32.우선 자연을 따르라.그리고 자연을 정복하라. < 베이컨 >,33.타인의 결점은 우리들의 눈앞에 있고 자신의 결점은 우리의 등 뒤에 있다.,34.태만은 천천히 움직이므로 가난이 곧 따라 잡는다. < 프랭크린 >,35.절제는 모든 진주 고리를 이어주는 비단의 실이다.< 홀 >,36.금전은 비료와 같은 것으로 뿌리지 않으면 쓸모가 없다. < 베이컨 >,37.사람은 자기가 한 약속을 지킬만한 좋은 기억력을 가져야 한다. < 니체 >;";
var lists = newLocal;
var list = lists.split(",");
var numCallbackRuns = 0;
list.forEach(function (item) {
  quotes.push(item);
  numCallbackRuns++;
  count.push(numCallbackRuns);
});
var newquote = {
  quote: quotes,
  num: count
};
var Rquote = document.querySelector("#quote span:first-child");
var RNum = document.querySelector("#quote span:last-child");
var randomQuote = Math.floor(Math.random() * quotes.length);
var toDayQuote = newquote.quote[randomQuote];
console.log(toDayQuote);
Rquote.innerText = toDayQuote;
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37583" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/quotes.js"], null)
//# sourceMappingURL=/quotes.e414229b.js.map