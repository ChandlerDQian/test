var Ec = (e) => {
  throw TypeError(e);
};
var hl = (e, t, n) => t.has(e) || Ec("Cannot " + n);
var N = (e, t, n) => (
    hl(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  Z = (e, t, n) =>
    t.has(e)
      ? Ec("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  W = (e, t, n, r) => (
    hl(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  Ne = (e, t, n) => (hl(e, t, "access private method"), n);
var Cs = (e, t, n, r) => ({
  set _(o) {
    W(e, t, o, n);
  },
  get _() {
    return N(e, t, r);
  },
});
function Lg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s &&
            Object.defineProperty(
              e,
              o,
              s.get ? s : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
function bf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Nf = { exports: {} },
  Ii = {},
  jf = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var us = Symbol.for("react.element"),
  Og = Symbol.for("react.portal"),
  Mg = Symbol.for("react.fragment"),
  _g = Symbol.for("react.strict_mode"),
  Ag = Symbol.for("react.profiler"),
  Dg = Symbol.for("react.provider"),
  Ig = Symbol.for("react.context"),
  zg = Symbol.for("react.forward_ref"),
  Fg = Symbol.for("react.suspense"),
  $g = Symbol.for("react.memo"),
  Bg = Symbol.for("react.lazy"),
  kc = Symbol.iterator;
function Ug(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (kc && e[kc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Pf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Tf = Object.assign,
  Rf = {};
function oo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Rf),
    (this.updater = n || Pf);
}
oo.prototype.isReactComponent = {};
oo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
oo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Lf() {}
Lf.prototype = oo.prototype;
function nu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Rf),
    (this.updater = n || Pf);
}
var ru = (nu.prototype = new Lf());
ru.constructor = nu;
Tf(ru, oo.prototype);
ru.isPureReactComponent = !0;
var bc = Array.isArray,
  Of = Object.prototype.hasOwnProperty,
  ou = { current: null },
  Mf = { key: !0, ref: !0, __self: !0, __source: !0 };
function _f(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Of.call(t, r) && !Mf.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: us,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: ou.current,
  };
}
function Wg(e, t) {
  return {
    $$typeof: us,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function su(e) {
  return typeof e == "object" && e !== null && e.$$typeof === us;
}
function Vg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Nc = /\/+/g;
function ml(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Vg("" + e.key)
    : t.toString(36);
}
function Hs(e, t, n, r, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (s) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case us:
          case Og:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + ml(i, 0) : r),
      bc(o)
        ? ((n = ""),
          e != null && (n = e.replace(Nc, "$&/") + "/"),
          Hs(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (su(o) &&
            (o = Wg(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Nc, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), bc(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + ml(s, l);
      i += Hs(s, t, n, a, o);
    }
  else if (((a = Ug(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + ml(s, l++)), (i += Hs(s, t, n, a, o));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Es(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Hs(e, r, "", "", function (s) {
      return t.call(n, s, o++);
    }),
    r
  );
}
function Hg(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var De = { current: null },
  Qs = { transition: null },
  Qg = {
    ReactCurrentDispatcher: De,
    ReactCurrentBatchConfig: Qs,
    ReactCurrentOwner: ou,
  };
function Af() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = {
  map: Es,
  forEach: function (e, t, n) {
    Es(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Es(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Es(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!su(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
G.Component = oo;
G.Fragment = Mg;
G.Profiler = Ag;
G.PureComponent = nu;
G.StrictMode = _g;
G.Suspense = Fg;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qg;
G.act = Af;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Tf({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = ou.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Of.call(t, a) &&
        !Mf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: us, type: e.type, key: o, ref: s, props: r, _owner: i };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ig,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Dg, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = _f;
G.createFactory = function (e) {
  var t = _f.bind(null, e);
  return (t.type = e), t;
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: zg, render: e };
};
G.isValidElement = su;
G.lazy = function (e) {
  return { $$typeof: Bg, _payload: { _status: -1, _result: e }, _init: Hg };
};
G.memo = function (e, t) {
  return { $$typeof: $g, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = Qs.transition;
  Qs.transition = {};
  try {
    e();
  } finally {
    Qs.transition = t;
  }
};
G.unstable_act = Af;
G.useCallback = function (e, t) {
  return De.current.useCallback(e, t);
};
G.useContext = function (e) {
  return De.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return De.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return De.current.useEffect(e, t);
};
G.useId = function () {
  return De.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return De.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return De.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return De.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return De.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return De.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return De.current.useRef(e);
};
G.useState = function (e) {
  return De.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return De.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return De.current.useTransition();
};
G.version = "18.3.1";
jf.exports = G;
var x = jf.exports;
const L = bf(x),
  Df = Lg({ __proto__: null, default: L }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kg = x,
  Yg = Symbol.for("react.element"),
  Gg = Symbol.for("react.fragment"),
  qg = Object.prototype.hasOwnProperty,
  Xg = Kg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Zg = { key: !0, ref: !0, __self: !0, __source: !0 };
function If(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) qg.call(t, r) && !Zg.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Yg,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: Xg.current,
  };
}
Ii.Fragment = Gg;
Ii.jsx = If;
Ii.jsxs = If;
Nf.exports = Ii;
var c = Nf.exports,
  zf = { exports: {} },
  Xe = {},
  Ff = { exports: {} },
  $f = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, P) {
    var M = j.length;
    j.push(P);
    e: for (; 0 < M; ) {
      var F = (M - 1) >>> 1,
        z = j[F];
      if (0 < o(z, P)) (j[F] = P), (j[M] = z), (M = F);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var P = j[0],
      M = j.pop();
    if (M !== P) {
      j[0] = M;
      e: for (var F = 0, z = j.length, Y = z >>> 1; F < Y; ) {
        var q = 2 * (F + 1) - 1,
          he = j[q],
          be = q + 1,
          J = j[be];
        if (0 > o(he, M))
          be < z && 0 > o(J, he)
            ? ((j[F] = J), (j[be] = M), (F = be))
            : ((j[F] = he), (j[q] = M), (F = q));
        else if (be < z && 0 > o(J, M)) (j[F] = J), (j[be] = M), (F = be);
        else break e;
      }
    }
    return P;
  }
  function o(j, P) {
    var M = j.sortIndex - P.sortIndex;
    return M !== 0 ? M : j.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
    };
  }
  var a = [],
    u = [],
    d = 1,
    f = null,
    h = 3,
    p = !1,
    S = !1,
    y = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(j) {
    for (var P = n(u); P !== null; ) {
      if (P.callback === null) r(u);
      else if (P.startTime <= j)
        r(u), (P.sortIndex = P.expirationTime), t(a, P);
      else break;
      P = n(u);
    }
  }
  function C(j) {
    if (((y = !1), v(j), !S))
      if (n(a) !== null) (S = !0), B(E);
      else {
        var P = n(u);
        P !== null && Q(C, P.startTime - j);
      }
  }
  function E(j, P) {
    (S = !1), y && ((y = !1), g(T), (T = -1)), (p = !0);
    var M = h;
    try {
      for (
        v(P), f = n(a);
        f !== null && (!(f.expirationTime > P) || (j && !$()));

      ) {
        var F = f.callback;
        if (typeof F == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var z = F(f.expirationTime <= P);
          (P = e.unstable_now()),
            typeof z == "function" ? (f.callback = z) : f === n(a) && r(a),
            v(P);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var Y = !0;
      else {
        var q = n(u);
        q !== null && Q(C, q.startTime - P), (Y = !1);
      }
      return Y;
    } finally {
      (f = null), (h = M), (p = !1);
    }
  }
  var k = !1,
    b = null,
    T = -1,
    _ = 5,
    O = -1;
  function $() {
    return !(e.unstable_now() - O < _);
  }
  function I() {
    if (b !== null) {
      var j = e.unstable_now();
      O = j;
      var P = !0;
      try {
        P = b(!0, j);
      } finally {
        P ? K() : ((k = !1), (b = null));
      }
    } else k = !1;
  }
  var K;
  if (typeof m == "function")
    K = function () {
      m(I);
    };
  else if (typeof MessageChannel < "u") {
    var A = new MessageChannel(),
      H = A.port2;
    (A.port1.onmessage = I),
      (K = function () {
        H.postMessage(null);
      });
  } else
    K = function () {
      w(I, 0);
    };
  function B(j) {
    (b = j), k || ((k = !0), K());
  }
  function Q(j, P) {
    T = w(function () {
      j(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || p || ((S = !0), B(E));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (_ = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (j) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = h;
      }
      var M = h;
      h = P;
      try {
        return j();
      } finally {
        h = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, P) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var M = h;
      h = j;
      try {
        return P();
      } finally {
        h = M;
      }
    }),
    (e.unstable_scheduleCallback = function (j, P, M) {
      var F = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? F + M : F))
          : (M = F),
        j)
      ) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return (
        (z = M + z),
        (j = {
          id: d++,
          callback: P,
          priorityLevel: j,
          startTime: M,
          expirationTime: z,
          sortIndex: -1,
        }),
        M > F
          ? ((j.sortIndex = M),
            t(u, j),
            n(a) === null &&
              j === n(u) &&
              (y ? (g(T), (T = -1)) : (y = !0), Q(C, M - F)))
          : ((j.sortIndex = z), t(a, j), S || p || ((S = !0), B(E))),
        j
      );
    }),
    (e.unstable_shouldYield = $),
    (e.unstable_wrapCallback = function (j) {
      var P = h;
      return function () {
        var M = h;
        h = P;
        try {
          return j.apply(this, arguments);
        } finally {
          h = M;
        }
      };
    });
})($f);
Ff.exports = $f;
var Jg = Ff.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ev = x,
  qe = Jg;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Bf = new Set(),
  zo = {};
function ur(e, t) {
  Gr(e, t), Gr(e + "Capture", t);
}
function Gr(e, t) {
  for (zo[e] = t, e = 0; e < t.length; e++) Bf.add(t[e]);
}
var Qt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Gl = Object.prototype.hasOwnProperty,
  tv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  jc = {},
  Pc = {};
function nv(e) {
  return Gl.call(Pc, e)
    ? !0
    : Gl.call(jc, e)
    ? !1
    : tv.test(e)
    ? (Pc[e] = !0)
    : ((jc[e] = !0), !1);
}
function rv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ov(e, t, n, r) {
  if (t === null || typeof t > "u" || rv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ie(e, t, n, r, o, s, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i);
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ke[e] = new Ie(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ke[t] = new Ie(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ke[e] = new Ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ke[e] = new Ie(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ke[e] = new Ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ke[e] = new Ie(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ke[e] = new Ie(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ke[e] = new Ie(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ke[e] = new Ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var iu = /[\-:]([a-z])/g;
function lu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(iu, lu);
    ke[t] = new Ie(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(iu, lu);
    ke[t] = new Ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(iu, lu);
  ke[t] = new Ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ke[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ke.xlinkHref = new Ie(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ke[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function au(e, t, n, r) {
  var o = ke.hasOwnProperty(t) ? ke[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ov(t, n, o, r) && (n = null),
    r || o === null
      ? nv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Zt = ev.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ks = Symbol.for("react.element"),
  wr = Symbol.for("react.portal"),
  Sr = Symbol.for("react.fragment"),
  uu = Symbol.for("react.strict_mode"),
  ql = Symbol.for("react.profiler"),
  Uf = Symbol.for("react.provider"),
  Wf = Symbol.for("react.context"),
  cu = Symbol.for("react.forward_ref"),
  Xl = Symbol.for("react.suspense"),
  Zl = Symbol.for("react.suspense_list"),
  du = Symbol.for("react.memo"),
  dn = Symbol.for("react.lazy"),
  Vf = Symbol.for("react.offscreen"),
  Tc = Symbol.iterator;
function ho(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Tc && e[Tc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ce = Object.assign,
  gl;
function ko(e) {
  if (gl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      gl = (t && t[1]) || "";
    }
  return (
    `
` +
    gl +
    e
  );
}
var vl = !1;
function yl(e, t) {
  if (!e || vl) return "";
  vl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          s = r.stack.split(`
`),
          i = o.length - 1,
          l = s.length - 1;
        1 <= i && 0 <= l && o[i] !== s[l];

      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (o[i] !== s[l]) {
          if (i !== 1 || l !== 1)
            do
              if ((i--, l--, 0 > l || o[i] !== s[l])) {
                var a =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    (vl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ko(e) : "";
}
function sv(e) {
  switch (e.tag) {
    case 5:
      return ko(e.type);
    case 16:
      return ko("Lazy");
    case 13:
      return ko("Suspense");
    case 19:
      return ko("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = yl(e.type, !1)), e;
    case 11:
      return (e = yl(e.type.render, !1)), e;
    case 1:
      return (e = yl(e.type, !0)), e;
    default:
      return "";
  }
}
function Jl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Sr:
      return "Fragment";
    case wr:
      return "Portal";
    case ql:
      return "Profiler";
    case uu:
      return "StrictMode";
    case Xl:
      return "Suspense";
    case Zl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Wf:
        return (e.displayName || "Context") + ".Consumer";
      case Uf:
        return (e._context.displayName || "Context") + ".Provider";
      case cu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case du:
        return (
          (t = e.displayName || null), t !== null ? t : Jl(e.type) || "Memo"
        );
      case dn:
        (t = e._payload), (e = e._init);
        try {
          return Jl(e(t));
        } catch {}
    }
  return null;
}
function iv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Jl(t);
    case 8:
      return t === uu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function On(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Hf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function lv(e) {
  var t = Hf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), s.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function bs(e) {
  e._valueTracker || (e._valueTracker = lv(e));
}
function Qf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Hf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ii(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ea(e, t) {
  var n = t.checked;
  return ce({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Rc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = On(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Kf(e, t) {
  (t = t.checked), t != null && au(e, "checked", t, !1);
}
function ta(e, t) {
  Kf(e, t);
  var n = On(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? na(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && na(e, t.type, On(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Lc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function na(e, t, n) {
  (t !== "number" || ii(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var bo = Array.isArray;
function Or(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + On(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ra(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return ce({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Oc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (bo(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: On(n) };
}
function Yf(e, t) {
  var n = On(t.value),
    r = On(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Mc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Gf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function oa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Gf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ns,
  qf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ns = Ns || document.createElement("div"),
          Ns.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ns.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Fo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Po = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  av = ["Webkit", "ms", "Moz", "O"];
Object.keys(Po).forEach(function (e) {
  av.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Po[t] = Po[e]);
  });
});
function Xf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Po.hasOwnProperty(e) && Po[e])
    ? ("" + t).trim()
    : t + "px";
}
function Zf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Xf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var uv = ce(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function sa(e, t) {
  if (t) {
    if (uv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function ia(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var la = null;
function fu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var aa = null,
  Mr = null,
  _r = null;
function _c(e) {
  if ((e = fs(e))) {
    if (typeof aa != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Ui(t)), aa(e.stateNode, e.type, t));
  }
}
function Jf(e) {
  Mr ? (_r ? _r.push(e) : (_r = [e])) : (Mr = e);
}
function ep() {
  if (Mr) {
    var e = Mr,
      t = _r;
    if (((_r = Mr = null), _c(e), t)) for (e = 0; e < t.length; e++) _c(t[e]);
  }
}
function tp(e, t) {
  return e(t);
}
function np() {}
var xl = !1;
function rp(e, t, n) {
  if (xl) return e(t, n);
  xl = !0;
  try {
    return tp(e, t, n);
  } finally {
    (xl = !1), (Mr !== null || _r !== null) && (np(), ep());
  }
}
function $o(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ui(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var ua = !1;
if (Qt)
  try {
    var mo = {};
    Object.defineProperty(mo, "passive", {
      get: function () {
        ua = !0;
      },
    }),
      window.addEventListener("test", mo, mo),
      window.removeEventListener("test", mo, mo);
  } catch {
    ua = !1;
  }
function cv(e, t, n, r, o, s, i, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var To = !1,
  li = null,
  ai = !1,
  ca = null,
  dv = {
    onError: function (e) {
      (To = !0), (li = e);
    },
  };
function fv(e, t, n, r, o, s, i, l, a) {
  (To = !1), (li = null), cv.apply(dv, arguments);
}
function pv(e, t, n, r, o, s, i, l, a) {
  if ((fv.apply(this, arguments), To)) {
    if (To) {
      var u = li;
      (To = !1), (li = null);
    } else throw Error(R(198));
    ai || ((ai = !0), (ca = u));
  }
}
function cr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function op(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ac(e) {
  if (cr(e) !== e) throw Error(R(188));
}
function hv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = cr(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return Ac(o), e;
        if (s === r) return Ac(o), t;
        s = s.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = o), (r = s);
    else {
      for (var i = !1, l = o.child; l; ) {
        if (l === n) {
          (i = !0), (n = o), (r = s);
          break;
        }
        if (l === r) {
          (i = !0), (r = o), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = s.child; l; ) {
          if (l === n) {
            (i = !0), (n = s), (r = o);
            break;
          }
          if (l === r) {
            (i = !0), (r = s), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function sp(e) {
  return (e = hv(e)), e !== null ? ip(e) : null;
}
function ip(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ip(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var lp = qe.unstable_scheduleCallback,
  Dc = qe.unstable_cancelCallback,
  mv = qe.unstable_shouldYield,
  gv = qe.unstable_requestPaint,
  pe = qe.unstable_now,
  vv = qe.unstable_getCurrentPriorityLevel,
  pu = qe.unstable_ImmediatePriority,
  ap = qe.unstable_UserBlockingPriority,
  ui = qe.unstable_NormalPriority,
  yv = qe.unstable_LowPriority,
  up = qe.unstable_IdlePriority,
  zi = null,
  Ot = null;
function xv(e) {
  if (Ot && typeof Ot.onCommitFiberRoot == "function")
    try {
      Ot.onCommitFiberRoot(zi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var wt = Math.clz32 ? Math.clz32 : Cv,
  wv = Math.log,
  Sv = Math.LN2;
function Cv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((wv(e) / Sv) | 0)) | 0;
}
var js = 64,
  Ps = 4194304;
function No(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ci(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var l = i & ~o;
    l !== 0 ? (r = No(l)) : ((s &= i), s !== 0 && (r = No(s)));
  } else (i = n & ~o), i !== 0 ? (r = No(i)) : s !== 0 && (r = No(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - wt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Ev(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function kv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var i = 31 - wt(s),
      l = 1 << i,
      a = o[i];
    a === -1
      ? (!(l & n) || l & r) && (o[i] = Ev(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function da(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function cp() {
  var e = js;
  return (js <<= 1), !(js & 4194240) && (js = 64), e;
}
function wl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function cs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - wt(t)),
    (e[t] = n);
}
function bv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - wt(n),
      s = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s);
  }
}
function hu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - wt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ee = 0;
function dp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var fp,
  mu,
  pp,
  hp,
  mp,
  fa = !1,
  Ts = [],
  En = null,
  kn = null,
  bn = null,
  Bo = new Map(),
  Uo = new Map(),
  pn = [],
  Nv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ic(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      En = null;
      break;
    case "dragenter":
    case "dragleave":
      kn = null;
      break;
    case "mouseover":
    case "mouseout":
      bn = null;
      break;
    case "pointerover":
    case "pointerout":
      Bo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Uo.delete(t.pointerId);
  }
}
function go(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o],
      }),
      t !== null && ((t = fs(t)), t !== null && mu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function jv(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (En = go(En, e, t, n, r, o)), !0;
    case "dragenter":
      return (kn = go(kn, e, t, n, r, o)), !0;
    case "mouseover":
      return (bn = go(bn, e, t, n, r, o)), !0;
    case "pointerover":
      var s = o.pointerId;
      return Bo.set(s, go(Bo.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (s = o.pointerId), Uo.set(s, go(Uo.get(s) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function gp(e) {
  var t = Kn(e.target);
  if (t !== null) {
    var n = cr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = op(n)), t !== null)) {
          (e.blockedOn = t),
            mp(e.priority, function () {
              pp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ks(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = pa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (la = r), n.target.dispatchEvent(r), (la = null);
    } else return (t = fs(n)), t !== null && mu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function zc(e, t, n) {
  Ks(e) && n.delete(t);
}
function Pv() {
  (fa = !1),
    En !== null && Ks(En) && (En = null),
    kn !== null && Ks(kn) && (kn = null),
    bn !== null && Ks(bn) && (bn = null),
    Bo.forEach(zc),
    Uo.forEach(zc);
}
function vo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    fa ||
      ((fa = !0),
      qe.unstable_scheduleCallback(qe.unstable_NormalPriority, Pv)));
}
function Wo(e) {
  function t(o) {
    return vo(o, e);
  }
  if (0 < Ts.length) {
    vo(Ts[0], e);
    for (var n = 1; n < Ts.length; n++) {
      var r = Ts[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    En !== null && vo(En, e),
      kn !== null && vo(kn, e),
      bn !== null && vo(bn, e),
      Bo.forEach(t),
      Uo.forEach(t),
      n = 0;
    n < pn.length;
    n++
  )
    (r = pn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pn.length && ((n = pn[0]), n.blockedOn === null); )
    gp(n), n.blockedOn === null && pn.shift();
}
var Ar = Zt.ReactCurrentBatchConfig,
  di = !0;
function Tv(e, t, n, r) {
  var o = ee,
    s = Ar.transition;
  Ar.transition = null;
  try {
    (ee = 1), gu(e, t, n, r);
  } finally {
    (ee = o), (Ar.transition = s);
  }
}
function Rv(e, t, n, r) {
  var o = ee,
    s = Ar.transition;
  Ar.transition = null;
  try {
    (ee = 4), gu(e, t, n, r);
  } finally {
    (ee = o), (Ar.transition = s);
  }
}
function gu(e, t, n, r) {
  if (di) {
    var o = pa(e, t, n, r);
    if (o === null) Rl(e, t, r, fi, n), Ic(e, r);
    else if (jv(o, e, t, n, r)) r.stopPropagation();
    else if ((Ic(e, r), t & 4 && -1 < Nv.indexOf(e))) {
      for (; o !== null; ) {
        var s = fs(o);
        if (
          (s !== null && fp(s),
          (s = pa(e, t, n, r)),
          s === null && Rl(e, t, r, fi, n),
          s === o)
        )
          break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else Rl(e, t, r, null, n);
  }
}
var fi = null;
function pa(e, t, n, r) {
  if (((fi = null), (e = fu(r)), (e = Kn(e)), e !== null))
    if (((t = cr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = op(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (fi = e), null;
}
function vp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (vv()) {
        case pu:
          return 1;
        case ap:
          return 4;
        case ui:
        case yv:
          return 16;
        case up:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wn = null,
  vu = null,
  Ys = null;
function yp() {
  if (Ys) return Ys;
  var e,
    t = vu,
    n = t.length,
    r,
    o = "value" in wn ? wn.value : wn.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return (Ys = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Gs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Rs() {
  return !0;
}
function Fc() {
  return !1;
}
function Ze(e) {
  function t(n, r, o, s, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Rs
        : Fc),
      (this.isPropagationStopped = Fc),
      this
    );
  }
  return (
    ce(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Rs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Rs));
      },
      persist: function () {},
      isPersistent: Rs,
    }),
    t
  );
}
var so = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  yu = Ze(so),
  ds = ce({}, so, { view: 0, detail: 0 }),
  Lv = Ze(ds),
  Sl,
  Cl,
  yo,
  Fi = ce({}, ds, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== yo &&
            (yo && e.type === "mousemove"
              ? ((Sl = e.screenX - yo.screenX), (Cl = e.screenY - yo.screenY))
              : (Cl = Sl = 0),
            (yo = e)),
          Sl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Cl;
    },
  }),
  $c = Ze(Fi),
  Ov = ce({}, Fi, { dataTransfer: 0 }),
  Mv = Ze(Ov),
  _v = ce({}, ds, { relatedTarget: 0 }),
  El = Ze(_v),
  Av = ce({}, so, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dv = Ze(Av),
  Iv = ce({}, so, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  zv = Ze(Iv),
  Fv = ce({}, so, { data: 0 }),
  Bc = Ze(Fv),
  $v = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Bv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Uv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Wv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Uv[e]) ? !!t[e] : !1;
}
function xu() {
  return Wv;
}
var Vv = ce({}, ds, {
    key: function (e) {
      if (e.key) {
        var t = $v[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Gs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Bv[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xu,
    charCode: function (e) {
      return e.type === "keypress" ? Gs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Gs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Hv = Ze(Vv),
  Qv = ce({}, Fi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Uc = Ze(Qv),
  Kv = ce({}, ds, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xu,
  }),
  Yv = Ze(Kv),
  Gv = ce({}, so, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qv = Ze(Gv),
  Xv = ce({}, Fi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zv = Ze(Xv),
  Jv = [9, 13, 27, 32],
  wu = Qt && "CompositionEvent" in window,
  Ro = null;
Qt && "documentMode" in document && (Ro = document.documentMode);
var ey = Qt && "TextEvent" in window && !Ro,
  xp = Qt && (!wu || (Ro && 8 < Ro && 11 >= Ro)),
  Wc = " ",
  Vc = !1;
function wp(e, t) {
  switch (e) {
    case "keyup":
      return Jv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Sp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Cr = !1;
function ty(e, t) {
  switch (e) {
    case "compositionend":
      return Sp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Vc = !0), Wc);
    case "textInput":
      return (e = t.data), e === Wc && Vc ? null : e;
    default:
      return null;
  }
}
function ny(e, t) {
  if (Cr)
    return e === "compositionend" || (!wu && wp(e, t))
      ? ((e = yp()), (Ys = vu = wn = null), (Cr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return xp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ry = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Hc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ry[e.type] : t === "textarea";
}
function Cp(e, t, n, r) {
  Jf(r),
    (t = pi(t, "onChange")),
    0 < t.length &&
      ((n = new yu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Lo = null,
  Vo = null;
function oy(e) {
  Mp(e, 0);
}
function $i(e) {
  var t = br(e);
  if (Qf(t)) return e;
}
function sy(e, t) {
  if (e === "change") return t;
}
var Ep = !1;
if (Qt) {
  var kl;
  if (Qt) {
    var bl = "oninput" in document;
    if (!bl) {
      var Qc = document.createElement("div");
      Qc.setAttribute("oninput", "return;"),
        (bl = typeof Qc.oninput == "function");
    }
    kl = bl;
  } else kl = !1;
  Ep = kl && (!document.documentMode || 9 < document.documentMode);
}
function Kc() {
  Lo && (Lo.detachEvent("onpropertychange", kp), (Vo = Lo = null));
}
function kp(e) {
  if (e.propertyName === "value" && $i(Vo)) {
    var t = [];
    Cp(t, Vo, e, fu(e)), rp(oy, t);
  }
}
function iy(e, t, n) {
  e === "focusin"
    ? (Kc(), (Lo = t), (Vo = n), Lo.attachEvent("onpropertychange", kp))
    : e === "focusout" && Kc();
}
function ly(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return $i(Vo);
}
function ay(e, t) {
  if (e === "click") return $i(t);
}
function uy(e, t) {
  if (e === "input" || e === "change") return $i(t);
}
function cy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ct = typeof Object.is == "function" ? Object.is : cy;
function Ho(e, t) {
  if (Ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Gl.call(t, o) || !Ct(e[o], t[o])) return !1;
  }
  return !0;
}
function Yc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Gc(e, t) {
  var n = Yc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Yc(n);
  }
}
function bp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? bp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Np() {
  for (var e = window, t = ii(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ii(e.document);
  }
  return t;
}
function Su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function dy(e) {
  var t = Np(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    bp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Su(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          s = Math.min(r.start, o);
        (r = r.end === void 0 ? s : Math.min(r.end, o)),
          !e.extend && s > r && ((o = r), (r = s), (s = o)),
          (o = Gc(n, s));
        var i = Gc(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var fy = Qt && "documentMode" in document && 11 >= document.documentMode,
  Er = null,
  ha = null,
  Oo = null,
  ma = !1;
function qc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ma ||
    Er == null ||
    Er !== ii(r) ||
    ((r = Er),
    "selectionStart" in r && Su(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Oo && Ho(Oo, r)) ||
      ((Oo = r),
      (r = pi(ha, "onSelect")),
      0 < r.length &&
        ((t = new yu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Er))));
}
function Ls(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var kr = {
    animationend: Ls("Animation", "AnimationEnd"),
    animationiteration: Ls("Animation", "AnimationIteration"),
    animationstart: Ls("Animation", "AnimationStart"),
    transitionend: Ls("Transition", "TransitionEnd"),
  },
  Nl = {},
  jp = {};
Qt &&
  ((jp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete kr.animationend.animation,
    delete kr.animationiteration.animation,
    delete kr.animationstart.animation),
  "TransitionEvent" in window || delete kr.transitionend.transition);
function Bi(e) {
  if (Nl[e]) return Nl[e];
  if (!kr[e]) return e;
  var t = kr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in jp) return (Nl[e] = t[n]);
  return e;
}
var Pp = Bi("animationend"),
  Tp = Bi("animationiteration"),
  Rp = Bi("animationstart"),
  Lp = Bi("transitionend"),
  Op = new Map(),
  Xc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function zn(e, t) {
  Op.set(e, t), ur(t, [e]);
}
for (var jl = 0; jl < Xc.length; jl++) {
  var Pl = Xc[jl],
    py = Pl.toLowerCase(),
    hy = Pl[0].toUpperCase() + Pl.slice(1);
  zn(py, "on" + hy);
}
zn(Pp, "onAnimationEnd");
zn(Tp, "onAnimationIteration");
zn(Rp, "onAnimationStart");
zn("dblclick", "onDoubleClick");
zn("focusin", "onFocus");
zn("focusout", "onBlur");
zn(Lp, "onTransitionEnd");
Gr("onMouseEnter", ["mouseout", "mouseover"]);
Gr("onMouseLeave", ["mouseout", "mouseover"]);
Gr("onPointerEnter", ["pointerout", "pointerover"]);
Gr("onPointerLeave", ["pointerout", "pointerover"]);
ur(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ur(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
ur("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ur(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ur(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ur(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var jo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  my = new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));
function Zc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), pv(r, t, void 0, e), (e.currentTarget = null);
}
function Mp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var l = r[i],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && o.isPropagationStopped())) break e;
          Zc(o, l, u), (s = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((l = r[i]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && o.isPropagationStopped())
          )
            break e;
          Zc(o, l, u), (s = a);
        }
    }
  }
  if (ai) throw ((e = ca), (ai = !1), (ca = null), e);
}
function oe(e, t) {
  var n = t[wa];
  n === void 0 && (n = t[wa] = new Set());
  var r = e + "__bubble";
  n.has(r) || (_p(t, e, 2, !1), n.add(r));
}
function Tl(e, t, n) {
  var r = 0;
  t && (r |= 4), _p(n, e, r, t);
}
var Os = "_reactListening" + Math.random().toString(36).slice(2);
function Qo(e) {
  if (!e[Os]) {
    (e[Os] = !0),
      Bf.forEach(function (n) {
        n !== "selectionchange" && (my.has(n) || Tl(n, !1, e), Tl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Os] || ((t[Os] = !0), Tl("selectionchange", !1, t));
  }
}
function _p(e, t, n, r) {
  switch (vp(t)) {
    case 1:
      var o = Tv;
      break;
    case 4:
      o = Rv;
      break;
    default:
      o = gu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ua ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Rl(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; l !== null; ) {
          if (((i = Kn(l)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = s = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  rp(function () {
    var u = s,
      d = fu(n),
      f = [];
    e: {
      var h = Op.get(e);
      if (h !== void 0) {
        var p = yu,
          S = e;
        switch (e) {
          case "keypress":
            if (Gs(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = Hv;
            break;
          case "focusin":
            (S = "focus"), (p = El);
            break;
          case "focusout":
            (S = "blur"), (p = El);
            break;
          case "beforeblur":
          case "afterblur":
            p = El;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = $c;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = Mv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = Yv;
            break;
          case Pp:
          case Tp:
          case Rp:
            p = Dv;
            break;
          case Lp:
            p = qv;
            break;
          case "scroll":
            p = Lv;
            break;
          case "wheel":
            p = Zv;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = zv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Uc;
        }
        var y = (t & 4) !== 0,
          w = !y && e === "scroll",
          g = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var m = u, v; m !== null; ) {
          v = m;
          var C = v.stateNode;
          if (
            (v.tag === 5 &&
              C !== null &&
              ((v = C),
              g !== null && ((C = $o(m, g)), C != null && y.push(Ko(m, C, v)))),
            w)
          )
            break;
          m = m.return;
        }
        0 < y.length &&
          ((h = new p(h, S, null, n, d)), f.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          h &&
            n !== la &&
            (S = n.relatedTarget || n.fromElement) &&
            (Kn(S) || S[Kt]))
        )
          break e;
        if (
          (p || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          p
            ? ((S = n.relatedTarget || n.toElement),
              (p = u),
              (S = S ? Kn(S) : null),
              S !== null &&
                ((w = cr(S)), S !== w || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((p = null), (S = u)),
          p !== S)
        ) {
          if (
            ((y = $c),
            (C = "onMouseLeave"),
            (g = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Uc),
              (C = "onPointerLeave"),
              (g = "onPointerEnter"),
              (m = "pointer")),
            (w = p == null ? h : br(p)),
            (v = S == null ? h : br(S)),
            (h = new y(C, m + "leave", p, n, d)),
            (h.target = w),
            (h.relatedTarget = v),
            (C = null),
            Kn(d) === u &&
              ((y = new y(g, m + "enter", S, n, d)),
              (y.target = v),
              (y.relatedTarget = w),
              (C = y)),
            (w = C),
            p && S)
          )
            t: {
              for (y = p, g = S, m = 0, v = y; v; v = yr(v)) m++;
              for (v = 0, C = g; C; C = yr(C)) v++;
              for (; 0 < m - v; ) (y = yr(y)), m--;
              for (; 0 < v - m; ) (g = yr(g)), v--;
              for (; m--; ) {
                if (y === g || (g !== null && y === g.alternate)) break t;
                (y = yr(y)), (g = yr(g));
              }
              y = null;
            }
          else y = null;
          p !== null && Jc(f, h, p, y, !1),
            S !== null && w !== null && Jc(f, w, S, y, !0);
        }
      }
      e: {
        if (
          ((h = u ? br(u) : window),
          (p = h.nodeName && h.nodeName.toLowerCase()),
          p === "select" || (p === "input" && h.type === "file"))
        )
          var E = sy;
        else if (Hc(h))
          if (Ep) E = uy;
          else {
            E = ly;
            var k = iy;
          }
        else
          (p = h.nodeName) &&
            p.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (E = ay);
        if (E && (E = E(e, u))) {
          Cp(f, E, n, d);
          break e;
        }
        k && k(e, h, u),
          e === "focusout" &&
            (k = h._wrapperState) &&
            k.controlled &&
            h.type === "number" &&
            na(h, "number", h.value);
      }
      switch (((k = u ? br(u) : window), e)) {
        case "focusin":
          (Hc(k) || k.contentEditable === "true") &&
            ((Er = k), (ha = u), (Oo = null));
          break;
        case "focusout":
          Oo = ha = Er = null;
          break;
        case "mousedown":
          ma = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ma = !1), qc(f, n, d);
          break;
        case "selectionchange":
          if (fy) break;
        case "keydown":
        case "keyup":
          qc(f, n, d);
      }
      var b;
      if (wu)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Cr
          ? wp(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (xp &&
          n.locale !== "ko" &&
          (Cr || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Cr && (b = yp())
            : ((wn = d),
              (vu = "value" in wn ? wn.value : wn.textContent),
              (Cr = !0))),
        (k = pi(u, T)),
        0 < k.length &&
          ((T = new Bc(T, e, null, n, d)),
          f.push({ event: T, listeners: k }),
          b ? (T.data = b) : ((b = Sp(n)), b !== null && (T.data = b)))),
        (b = ey ? ty(e, n) : ny(e, n)) &&
          ((u = pi(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Bc("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = b)));
    }
    Mp(f, t);
  });
}
function Ko(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function pi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      s = o.stateNode;
    o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = $o(e, n)),
      s != null && r.unshift(Ko(e, s, o)),
      (s = $o(e, t)),
      s != null && r.push(Ko(e, s, o))),
      (e = e.return);
  }
  return r;
}
function yr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Jc(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = $o(n, s)), a != null && i.unshift(Ko(n, a, l)))
        : o || ((a = $o(n, s)), a != null && i.push(Ko(n, a, l)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var gy = /\r\n?/g,
  vy = /\u0000|\uFFFD/g;
function ed(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      gy,
      `
`
    )
    .replace(vy, "");
}
function Ms(e, t, n) {
  if (((t = ed(t)), ed(e) !== t && n)) throw Error(R(425));
}
function hi() {}
var ga = null,
  va = null;
function ya(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var xa = typeof setTimeout == "function" ? setTimeout : void 0,
  yy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  td = typeof Promise == "function" ? Promise : void 0,
  xy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof td < "u"
      ? function (e) {
          return td.resolve(null).then(e).catch(wy);
        }
      : xa;
function wy(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ll(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Wo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Wo(t);
}
function Nn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function nd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var io = Math.random().toString(36).slice(2),
  Lt = "__reactFiber$" + io,
  Yo = "__reactProps$" + io,
  Kt = "__reactContainer$" + io,
  wa = "__reactEvents$" + io,
  Sy = "__reactListeners$" + io,
  Cy = "__reactHandles$" + io;
function Kn(e) {
  var t = e[Lt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Kt] || n[Lt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = nd(e); e !== null; ) {
          if ((n = e[Lt])) return n;
          e = nd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function fs(e) {
  return (
    (e = e[Lt] || e[Kt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function br(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Ui(e) {
  return e[Yo] || null;
}
var Sa = [],
  Nr = -1;
function Fn(e) {
  return { current: e };
}
function se(e) {
  0 > Nr || ((e.current = Sa[Nr]), (Sa[Nr] = null), Nr--);
}
function ne(e, t) {
  Nr++, (Sa[Nr] = e.current), (e.current = t);
}
var Mn = {},
  Le = Fn(Mn),
  Be = Fn(!1),
  rr = Mn;
function qr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    s;
  for (s in n) o[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ue(e) {
  return (e = e.childContextTypes), e != null;
}
function mi() {
  se(Be), se(Le);
}
function rd(e, t, n) {
  if (Le.current !== Mn) throw Error(R(168));
  ne(Le, t), ne(Be, n);
}
function Ap(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(R(108, iv(e) || "Unknown", o));
  return ce({}, n, r);
}
function gi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Mn),
    (rr = Le.current),
    ne(Le, e),
    ne(Be, Be.current),
    !0
  );
}
function od(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = Ap(e, t, rr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      se(Be),
      se(Le),
      ne(Le, e))
    : se(Be),
    ne(Be, n);
}
var $t = null,
  Wi = !1,
  Ol = !1;
function Dp(e) {
  $t === null ? ($t = [e]) : $t.push(e);
}
function Ey(e) {
  (Wi = !0), Dp(e);
}
function $n() {
  if (!Ol && $t !== null) {
    Ol = !0;
    var e = 0,
      t = ee;
    try {
      var n = $t;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ($t = null), (Wi = !1);
    } catch (o) {
      throw ($t !== null && ($t = $t.slice(e + 1)), lp(pu, $n), o);
    } finally {
      (ee = t), (Ol = !1);
    }
  }
  return null;
}
var jr = [],
  Pr = 0,
  vi = null,
  yi = 0,
  nt = [],
  rt = 0,
  or = null,
  Ut = 1,
  Wt = "";
function Hn(e, t) {
  (jr[Pr++] = yi), (jr[Pr++] = vi), (vi = e), (yi = t);
}
function Ip(e, t, n) {
  (nt[rt++] = Ut), (nt[rt++] = Wt), (nt[rt++] = or), (or = e);
  var r = Ut;
  e = Wt;
  var o = 32 - wt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var s = 32 - wt(t) + o;
  if (30 < s) {
    var i = o - (o % 5);
    (s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Ut = (1 << (32 - wt(t) + o)) | (n << o) | r),
      (Wt = s + e);
  } else (Ut = (1 << s) | (n << o) | r), (Wt = e);
}
function Cu(e) {
  e.return !== null && (Hn(e, 1), Ip(e, 1, 0));
}
function Eu(e) {
  for (; e === vi; )
    (vi = jr[--Pr]), (jr[Pr] = null), (yi = jr[--Pr]), (jr[Pr] = null);
  for (; e === or; )
    (or = nt[--rt]),
      (nt[rt] = null),
      (Wt = nt[--rt]),
      (nt[rt] = null),
      (Ut = nt[--rt]),
      (nt[rt] = null);
}
var Ye = null,
  Ke = null,
  le = !1,
  yt = null;
function zp(e, t) {
  var n = ot(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function sd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ye = e), (Ke = Nn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ye = e), (Ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = or !== null ? { id: Ut, overflow: Wt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ot(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ye = e),
            (Ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ca(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ea(e) {
  if (le) {
    var t = Ke;
    if (t) {
      var n = t;
      if (!sd(e, t)) {
        if (Ca(e)) throw Error(R(418));
        t = Nn(n.nextSibling);
        var r = Ye;
        t && sd(e, t)
          ? zp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Ye = e));
      }
    } else {
      if (Ca(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (Ye = e);
    }
  }
}
function id(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ye = e;
}
function _s(e) {
  if (e !== Ye) return !1;
  if (!le) return id(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ya(e.type, e.memoizedProps))),
    t && (t = Ke))
  ) {
    if (Ca(e)) throw (Fp(), Error(R(418)));
    for (; t; ) zp(e, t), (t = Nn(t.nextSibling));
  }
  if ((id(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ke = Nn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ke = null;
    }
  } else Ke = Ye ? Nn(e.stateNode.nextSibling) : null;
  return !0;
}
function Fp() {
  for (var e = Ke; e; ) e = Nn(e.nextSibling);
}
function Xr() {
  (Ke = Ye = null), (le = !1);
}
function ku(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
var ky = Zt.ReactCurrentBatchConfig;
function xo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var o = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (i) {
            var l = o.refs;
            i === null ? delete l[s] : (l[s] = i);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function As(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ld(e) {
  var t = e._init;
  return t(e._payload);
}
function $p(e) {
  function t(g, m) {
    if (e) {
      var v = g.deletions;
      v === null ? ((g.deletions = [m]), (g.flags |= 16)) : v.push(m);
    }
  }
  function n(g, m) {
    if (!e) return null;
    for (; m !== null; ) t(g, m), (m = m.sibling);
    return null;
  }
  function r(g, m) {
    for (g = new Map(); m !== null; )
      m.key !== null ? g.set(m.key, m) : g.set(m.index, m), (m = m.sibling);
    return g;
  }
  function o(g, m) {
    return (g = Rn(g, m)), (g.index = 0), (g.sibling = null), g;
  }
  function s(g, m, v) {
    return (
      (g.index = v),
      e
        ? ((v = g.alternate),
          v !== null
            ? ((v = v.index), v < m ? ((g.flags |= 2), m) : v)
            : ((g.flags |= 2), m))
        : ((g.flags |= 1048576), m)
    );
  }
  function i(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, m, v, C) {
    return m === null || m.tag !== 6
      ? ((m = Fl(v, g.mode, C)), (m.return = g), m)
      : ((m = o(m, v)), (m.return = g), m);
  }
  function a(g, m, v, C) {
    var E = v.type;
    return E === Sr
      ? d(g, m, v.props.children, C, v.key)
      : m !== null &&
        (m.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === dn &&
            ld(E) === m.type))
      ? ((C = o(m, v.props)), (C.ref = xo(g, m, v)), (C.return = g), C)
      : ((C = ni(v.type, v.key, v.props, null, g.mode, C)),
        (C.ref = xo(g, m, v)),
        (C.return = g),
        C);
  }
  function u(g, m, v, C) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== v.containerInfo ||
      m.stateNode.implementation !== v.implementation
      ? ((m = $l(v, g.mode, C)), (m.return = g), m)
      : ((m = o(m, v.children || [])), (m.return = g), m);
  }
  function d(g, m, v, C, E) {
    return m === null || m.tag !== 7
      ? ((m = nr(v, g.mode, C, E)), (m.return = g), m)
      : ((m = o(m, v)), (m.return = g), m);
  }
  function f(g, m, v) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Fl("" + m, g.mode, v)), (m.return = g), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ks:
          return (
            (v = ni(m.type, m.key, m.props, null, g.mode, v)),
            (v.ref = xo(g, null, m)),
            (v.return = g),
            v
          );
        case wr:
          return (m = $l(m, g.mode, v)), (m.return = g), m;
        case dn:
          var C = m._init;
          return f(g, C(m._payload), v);
      }
      if (bo(m) || ho(m))
        return (m = nr(m, g.mode, v, null)), (m.return = g), m;
      As(g, m);
    }
    return null;
  }
  function h(g, m, v, C) {
    var E = m !== null ? m.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return E !== null ? null : l(g, m, "" + v, C);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ks:
          return v.key === E ? a(g, m, v, C) : null;
        case wr:
          return v.key === E ? u(g, m, v, C) : null;
        case dn:
          return (E = v._init), h(g, m, E(v._payload), C);
      }
      if (bo(v) || ho(v)) return E !== null ? null : d(g, m, v, C, null);
      As(g, v);
    }
    return null;
  }
  function p(g, m, v, C, E) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (g = g.get(v) || null), l(m, g, "" + C, E);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case ks:
          return (g = g.get(C.key === null ? v : C.key) || null), a(m, g, C, E);
        case wr:
          return (g = g.get(C.key === null ? v : C.key) || null), u(m, g, C, E);
        case dn:
          var k = C._init;
          return p(g, m, v, k(C._payload), E);
      }
      if (bo(C) || ho(C)) return (g = g.get(v) || null), d(m, g, C, E, null);
      As(m, C);
    }
    return null;
  }
  function S(g, m, v, C) {
    for (
      var E = null, k = null, b = m, T = (m = 0), _ = null;
      b !== null && T < v.length;
      T++
    ) {
      b.index > T ? ((_ = b), (b = null)) : (_ = b.sibling);
      var O = h(g, b, v[T], C);
      if (O === null) {
        b === null && (b = _);
        break;
      }
      e && b && O.alternate === null && t(g, b),
        (m = s(O, m, T)),
        k === null ? (E = O) : (k.sibling = O),
        (k = O),
        (b = _);
    }
    if (T === v.length) return n(g, b), le && Hn(g, T), E;
    if (b === null) {
      for (; T < v.length; T++)
        (b = f(g, v[T], C)),
          b !== null &&
            ((m = s(b, m, T)), k === null ? (E = b) : (k.sibling = b), (k = b));
      return le && Hn(g, T), E;
    }
    for (b = r(g, b); T < v.length; T++)
      (_ = p(b, g, T, v[T], C)),
        _ !== null &&
          (e && _.alternate !== null && b.delete(_.key === null ? T : _.key),
          (m = s(_, m, T)),
          k === null ? (E = _) : (k.sibling = _),
          (k = _));
    return (
      e &&
        b.forEach(function ($) {
          return t(g, $);
        }),
      le && Hn(g, T),
      E
    );
  }
  function y(g, m, v, C) {
    var E = ho(v);
    if (typeof E != "function") throw Error(R(150));
    if (((v = E.call(v)), v == null)) throw Error(R(151));
    for (
      var k = (E = null), b = m, T = (m = 0), _ = null, O = v.next();
      b !== null && !O.done;
      T++, O = v.next()
    ) {
      b.index > T ? ((_ = b), (b = null)) : (_ = b.sibling);
      var $ = h(g, b, O.value, C);
      if ($ === null) {
        b === null && (b = _);
        break;
      }
      e && b && $.alternate === null && t(g, b),
        (m = s($, m, T)),
        k === null ? (E = $) : (k.sibling = $),
        (k = $),
        (b = _);
    }
    if (O.done) return n(g, b), le && Hn(g, T), E;
    if (b === null) {
      for (; !O.done; T++, O = v.next())
        (O = f(g, O.value, C)),
          O !== null &&
            ((m = s(O, m, T)), k === null ? (E = O) : (k.sibling = O), (k = O));
      return le && Hn(g, T), E;
    }
    for (b = r(g, b); !O.done; T++, O = v.next())
      (O = p(b, g, T, O.value, C)),
        O !== null &&
          (e && O.alternate !== null && b.delete(O.key === null ? T : O.key),
          (m = s(O, m, T)),
          k === null ? (E = O) : (k.sibling = O),
          (k = O));
    return (
      e &&
        b.forEach(function (I) {
          return t(g, I);
        }),
      le && Hn(g, T),
      E
    );
  }
  function w(g, m, v, C) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Sr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case ks:
          e: {
            for (var E = v.key, k = m; k !== null; ) {
              if (k.key === E) {
                if (((E = v.type), E === Sr)) {
                  if (k.tag === 7) {
                    n(g, k.sibling),
                      (m = o(k, v.props.children)),
                      (m.return = g),
                      (g = m);
                    break e;
                  }
                } else if (
                  k.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === dn &&
                    ld(E) === k.type)
                ) {
                  n(g, k.sibling),
                    (m = o(k, v.props)),
                    (m.ref = xo(g, k, v)),
                    (m.return = g),
                    (g = m);
                  break e;
                }
                n(g, k);
                break;
              } else t(g, k);
              k = k.sibling;
            }
            v.type === Sr
              ? ((m = nr(v.props.children, g.mode, C, v.key)),
                (m.return = g),
                (g = m))
              : ((C = ni(v.type, v.key, v.props, null, g.mode, C)),
                (C.ref = xo(g, m, v)),
                (C.return = g),
                (g = C));
          }
          return i(g);
        case wr:
          e: {
            for (k = v.key; m !== null; ) {
              if (m.key === k)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === v.containerInfo &&
                  m.stateNode.implementation === v.implementation
                ) {
                  n(g, m.sibling),
                    (m = o(m, v.children || [])),
                    (m.return = g),
                    (g = m);
                  break e;
                } else {
                  n(g, m);
                  break;
                }
              else t(g, m);
              m = m.sibling;
            }
            (m = $l(v, g.mode, C)), (m.return = g), (g = m);
          }
          return i(g);
        case dn:
          return (k = v._init), w(g, m, k(v._payload), C);
      }
      if (bo(v)) return S(g, m, v, C);
      if (ho(v)) return y(g, m, v, C);
      As(g, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        m !== null && m.tag === 6
          ? (n(g, m.sibling), (m = o(m, v)), (m.return = g), (g = m))
          : (n(g, m), (m = Fl(v, g.mode, C)), (m.return = g), (g = m)),
        i(g))
      : n(g, m);
  }
  return w;
}
var Zr = $p(!0),
  Bp = $p(!1),
  xi = Fn(null),
  wi = null,
  Tr = null,
  bu = null;
function Nu() {
  bu = Tr = wi = null;
}
function ju(e) {
  var t = xi.current;
  se(xi), (e._currentValue = t);
}
function ka(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Dr(e, t) {
  (wi = e),
    (bu = Tr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && ($e = !0), (e.firstContext = null));
}
function it(e) {
  var t = e._currentValue;
  if (bu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Tr === null)) {
      if (wi === null) throw Error(R(308));
      (Tr = e), (wi.dependencies = { lanes: 0, firstContext: e });
    } else Tr = Tr.next = e;
  return t;
}
var Yn = null;
function Pu(e) {
  Yn === null ? (Yn = [e]) : Yn.push(e);
}
function Up(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Pu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Yt(e, r)
  );
}
function Yt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var fn = !1;
function Tu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Wp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Vt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function jn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Yt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Pu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Yt(e, n)
  );
}
function qs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), hu(e, n);
  }
}
function ad(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (o = s = i) : (s = s.next = i), (n = n.next);
      } while (n !== null);
      s === null ? (o = s = t) : (s = s.next = t);
    } else o = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Si(e, t, n, r) {
  var o = e.updateQueue;
  fn = !1;
  var s = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), i === null ? (s = u) : (i.next = u), (i = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== i &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var f = o.baseState;
    (i = 0), (d = u = a = null), (l = s);
    do {
      var h = l.lane,
        p = l.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var S = e,
            y = l;
          switch (((h = t), (p = n), y.tag)) {
            case 1:
              if (((S = y.payload), typeof S == "function")) {
                f = S.call(p, f, h);
                break e;
              }
              f = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = y.payload),
                (h = typeof S == "function" ? S.call(p, f, h) : S),
                h == null)
              )
                break e;
              f = ce({}, f, h);
              break e;
            case 2:
              fn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [l]) : h.push(l));
      } else
        (p = {
          eventTime: p,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = p), (a = f)) : (d = d.next = p),
          (i |= h);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (h = l),
          (l = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (a = f),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    (ir |= i), (e.lanes = i), (e.memoizedState = f);
  }
}
function ud(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(R(191, o));
        o.call(r);
      }
    }
}
var ps = {},
  Mt = Fn(ps),
  Go = Fn(ps),
  qo = Fn(ps);
function Gn(e) {
  if (e === ps) throw Error(R(174));
  return e;
}
function Ru(e, t) {
  switch ((ne(qo, t), ne(Go, e), ne(Mt, ps), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : oa(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = oa(t, e));
  }
  se(Mt), ne(Mt, t);
}
function Jr() {
  se(Mt), se(Go), se(qo);
}
function Vp(e) {
  Gn(qo.current);
  var t = Gn(Mt.current),
    n = oa(t, e.type);
  t !== n && (ne(Go, e), ne(Mt, n));
}
function Lu(e) {
  Go.current === e && (se(Mt), se(Go));
}
var ae = Fn(0);
function Ci(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ml = [];
function Ou() {
  for (var e = 0; e < Ml.length; e++)
    Ml[e]._workInProgressVersionPrimary = null;
  Ml.length = 0;
}
var Xs = Zt.ReactCurrentDispatcher,
  _l = Zt.ReactCurrentBatchConfig,
  sr = 0,
  ue = null,
  ve = null,
  we = null,
  Ei = !1,
  Mo = !1,
  Xo = 0,
  by = 0;
function je() {
  throw Error(R(321));
}
function Mu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ct(e[n], t[n])) return !1;
  return !0;
}
function _u(e, t, n, r, o, s) {
  if (
    ((sr = s),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Xs.current = e === null || e.memoizedState === null ? Ty : Ry),
    (e = n(r, o)),
    Mo)
  ) {
    s = 0;
    do {
      if (((Mo = !1), (Xo = 0), 25 <= s)) throw Error(R(301));
      (s += 1),
        (we = ve = null),
        (t.updateQueue = null),
        (Xs.current = Ly),
        (e = n(r, o));
    } while (Mo);
  }
  if (
    ((Xs.current = ki),
    (t = ve !== null && ve.next !== null),
    (sr = 0),
    (we = ve = ue = null),
    (Ei = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function Au() {
  var e = Xo !== 0;
  return (Xo = 0), e;
}
function jt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return we === null ? (ue.memoizedState = we = e) : (we = we.next = e), we;
}
function lt() {
  if (ve === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ve.next;
  var t = we === null ? ue.memoizedState : we.next;
  if (t !== null) (we = t), (ve = e);
  else {
    if (e === null) throw Error(R(310));
    (ve = e),
      (e = {
        memoizedState: ve.memoizedState,
        baseState: ve.baseState,
        baseQueue: ve.baseQueue,
        queue: ve.queue,
        next: null,
      }),
      we === null ? (ue.memoizedState = we = e) : (we = we.next = e);
  }
  return we;
}
function Zo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Al(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = ve,
    o = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = s.next), (s.next = i);
    }
    (r.baseQueue = o = s), (n.pending = null);
  }
  if (o !== null) {
    (s = o.next), (r = r.baseState);
    var l = (i = null),
      a = null,
      u = s;
    do {
      var d = u.lane;
      if ((sr & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (i = r)) : (a = a.next = f),
          (ue.lanes |= d),
          (ir |= d);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (i = r) : (a.next = l),
      Ct(r, t.memoizedState) || ($e = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (s = o.lane), (ue.lanes |= s), (ir |= s), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Dl(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (s = e(s, i.action)), (i = i.next);
    while (i !== o);
    Ct(s, t.memoizedState) || ($e = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Hp() {}
function Qp(e, t) {
  var n = ue,
    r = lt(),
    o = t(),
    s = !Ct(r.memoizedState, o);
  if (
    (s && ((r.memoizedState = o), ($e = !0)),
    (r = r.queue),
    Du(Gp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (we !== null && we.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Jo(9, Yp.bind(null, n, r, o, t), void 0, null),
      Se === null)
    )
      throw Error(R(349));
    sr & 30 || Kp(n, t, o);
  }
  return o;
}
function Kp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Yp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), qp(t) && Xp(e);
}
function Gp(e, t, n) {
  return n(function () {
    qp(t) && Xp(e);
  });
}
function qp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ct(e, n);
  } catch {
    return !0;
  }
}
function Xp(e) {
  var t = Yt(e, 1);
  t !== null && St(t, e, 1, -1);
}
function cd(e) {
  var t = jt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Py.bind(null, ue, e)),
    [t.memoizedState, e]
  );
}
function Jo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Zp() {
  return lt().memoizedState;
}
function Zs(e, t, n, r) {
  var o = jt();
  (ue.flags |= e),
    (o.memoizedState = Jo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Vi(e, t, n, r) {
  var o = lt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ve !== null) {
    var i = ve.memoizedState;
    if (((s = i.destroy), r !== null && Mu(r, i.deps))) {
      o.memoizedState = Jo(t, n, s, r);
      return;
    }
  }
  (ue.flags |= e), (o.memoizedState = Jo(1 | t, n, s, r));
}
function dd(e, t) {
  return Zs(8390656, 8, e, t);
}
function Du(e, t) {
  return Vi(2048, 8, e, t);
}
function Jp(e, t) {
  return Vi(4, 2, e, t);
}
function eh(e, t) {
  return Vi(4, 4, e, t);
}
function th(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function nh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Vi(4, 4, th.bind(null, t, e), n)
  );
}
function Iu() {}
function rh(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function oh(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function sh(e, t, n) {
  return sr & 21
    ? (Ct(n, t) || ((n = cp()), (ue.lanes |= n), (ir |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), ($e = !0)), (e.memoizedState = n));
}
function Ny(e, t) {
  var n = ee;
  (ee = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = _l.transition;
  _l.transition = {};
  try {
    e(!1), t();
  } finally {
    (ee = n), (_l.transition = r);
  }
}
function ih() {
  return lt().memoizedState;
}
function jy(e, t, n) {
  var r = Tn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    lh(e))
  )
    ah(t, n);
  else if (((n = Up(e, t, n, r)), n !== null)) {
    var o = Ae();
    St(n, e, r, o), uh(n, t, r);
  }
}
function Py(e, t, n) {
  var r = Tn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (lh(e)) ah(t, o);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          l = s(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Ct(l, i))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), Pu(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Up(e, t, o, r)),
      n !== null && ((o = Ae()), St(n, e, r, o), uh(n, t, r));
  }
}
function lh(e) {
  var t = e.alternate;
  return e === ue || (t !== null && t === ue);
}
function ah(e, t) {
  Mo = Ei = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function uh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), hu(e, n);
  }
}
var ki = {
    readContext: it,
    useCallback: je,
    useContext: je,
    useEffect: je,
    useImperativeHandle: je,
    useInsertionEffect: je,
    useLayoutEffect: je,
    useMemo: je,
    useReducer: je,
    useRef: je,
    useState: je,
    useDebugValue: je,
    useDeferredValue: je,
    useTransition: je,
    useMutableSource: je,
    useSyncExternalStore: je,
    useId: je,
    unstable_isNewReconciler: !1,
  },
  Ty = {
    readContext: it,
    useCallback: function (e, t) {
      return (jt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: it,
    useEffect: dd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Zs(4194308, 4, th.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Zs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Zs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = jt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = jt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = jy.bind(null, ue, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = jt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: cd,
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      return (jt().memoizedState = e);
    },
    useTransition: function () {
      var e = cd(!1),
        t = e[0];
      return (e = Ny.bind(null, e[1])), (jt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ue,
        o = jt();
      if (le) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), Se === null)) throw Error(R(349));
        sr & 30 || Kp(r, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (o.queue = s),
        dd(Gp.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Jo(9, Yp.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = jt(),
        t = Se.identifierPrefix;
      if (le) {
        var n = Wt,
          r = Ut;
        (n = (r & ~(1 << (32 - wt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Xo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = by++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ry = {
    readContext: it,
    useCallback: rh,
    useContext: it,
    useEffect: Du,
    useImperativeHandle: nh,
    useInsertionEffect: Jp,
    useLayoutEffect: eh,
    useMemo: oh,
    useReducer: Al,
    useRef: Zp,
    useState: function () {
      return Al(Zo);
    },
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      var t = lt();
      return sh(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = Al(Zo)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: Hp,
    useSyncExternalStore: Qp,
    useId: ih,
    unstable_isNewReconciler: !1,
  },
  Ly = {
    readContext: it,
    useCallback: rh,
    useContext: it,
    useEffect: Du,
    useImperativeHandle: nh,
    useInsertionEffect: Jp,
    useLayoutEffect: eh,
    useMemo: oh,
    useReducer: Dl,
    useRef: Zp,
    useState: function () {
      return Dl(Zo);
    },
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      var t = lt();
      return ve === null ? (t.memoizedState = e) : sh(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = Dl(Zo)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: Hp,
    useSyncExternalStore: Qp,
    useId: ih,
    unstable_isNewReconciler: !1,
  };
function pt(e, t) {
  if (e && e.defaultProps) {
    (t = ce({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ba(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ce({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Hi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? cr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      o = Tn(e),
      s = Vt(r, o);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = jn(e, s, o)),
      t !== null && (St(t, e, o, r), qs(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      o = Tn(e),
      s = Vt(r, o);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = jn(e, s, o)),
      t !== null && (St(t, e, o, r), qs(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ae(),
      r = Tn(e),
      o = Vt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = jn(e, o, r)),
      t !== null && (St(t, e, r, n), qs(t, e, r));
  },
};
function fd(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ho(n, r) || !Ho(o, s)
      : !0
  );
}
function ch(e, t, n) {
  var r = !1,
    o = Mn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = it(s))
      : ((o = Ue(t) ? rr : Le.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? qr(e, o) : Mn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Hi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function pd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Hi.enqueueReplaceState(t, t.state, null);
}
function Na(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Tu(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (o.context = it(s))
    : ((s = Ue(t) ? rr : Le.current), (o.context = qr(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (ba(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Hi.enqueueReplaceState(o, o.state, null),
      Si(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function eo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += sv(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (s) {
    o =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Il(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ja(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Oy = typeof WeakMap == "function" ? WeakMap : Map;
function dh(e, t, n) {
  (n = Vt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ni || ((Ni = !0), (Ia = r)), ja(e, t);
    }),
    n
  );
}
function fh(e, t, n) {
  (n = Vt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ja(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        ja(e, t),
          typeof r != "function" &&
            (Pn === null ? (Pn = new Set([this])) : Pn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function hd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Oy();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Qy.bind(null, e, t, n)), t.then(e, e));
}
function md(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function gd(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Vt(-1, 1)), (t.tag = 2), jn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var My = Zt.ReactCurrentOwner,
  $e = !1;
function Me(e, t, n, r) {
  t.child = e === null ? Bp(t, null, n, r) : Zr(t, e.child, n, r);
}
function vd(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return (
    Dr(t, o),
    (r = _u(e, t, n, r, s, o)),
    (n = Au()),
    e !== null && !$e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Gt(e, t, o))
      : (le && n && Cu(t), (t.flags |= 1), Me(e, t, r, o), t.child)
  );
}
function yd(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Hu(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), ph(e, t, s, r, o))
      : ((e = ni(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ho), n(i, r) && e.ref === t.ref)
    )
      return Gt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Rn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ph(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Ho(s, r) && e.ref === t.ref)
      if ((($e = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && ($e = !0);
      else return (t.lanes = e.lanes), Gt(e, t, o);
  }
  return Pa(e, t, n, r, o);
}
function hh(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(Lr, He),
        (He |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ne(Lr, He),
          (He |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        ne(Lr, He),
        (He |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ne(Lr, He),
      (He |= r);
  return Me(e, t, o, n), t.child;
}
function mh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Pa(e, t, n, r, o) {
  var s = Ue(n) ? rr : Le.current;
  return (
    (s = qr(t, s)),
    Dr(t, o),
    (n = _u(e, t, n, r, s, o)),
    (r = Au()),
    e !== null && !$e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Gt(e, t, o))
      : (le && r && Cu(t), (t.flags |= 1), Me(e, t, n, o), t.child)
  );
}
function xd(e, t, n, r, o) {
  if (Ue(n)) {
    var s = !0;
    gi(t);
  } else s = !1;
  if ((Dr(t, o), t.stateNode === null))
    Js(e, t), ch(t, n, r), Na(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var a = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = it(u))
      : ((u = Ue(n) ? rr : Le.current), (u = qr(t, u)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && pd(t, i, r, u)),
      (fn = !1);
    var h = t.memoizedState;
    (i.state = h),
      Si(t, r, i, o),
      (a = t.memoizedState),
      l !== r || h !== a || Be.current || fn
        ? (typeof d == "function" && (ba(t, n, d, r), (a = t.memoizedState)),
          (l = fn || fd(t, n, l, r, h, a, u))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = u),
          (r = l))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Wp(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : pt(t.type, l)),
      (i.props = u),
      (f = t.pendingProps),
      (h = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = it(a))
        : ((a = Ue(n) ? rr : Le.current), (a = qr(t, a)));
    var p = n.getDerivedStateFromProps;
    (d =
      typeof p == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== f || h !== a) && pd(t, i, r, a)),
      (fn = !1),
      (h = t.memoizedState),
      (i.state = h),
      Si(t, r, i, o);
    var S = t.memoizedState;
    l !== f || h !== S || Be.current || fn
      ? (typeof p == "function" && (ba(t, n, p, r), (S = t.memoizedState)),
        (u = fn || fd(t, n, u, r, h, S, a) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, S, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, S, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (i.props = r),
        (i.state = S),
        (i.context = a),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ta(e, t, n, r, s, o);
}
function Ta(e, t, n, r, o, s) {
  mh(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && od(t, n, !1), Gt(e, t, s);
  (r = t.stateNode), (My.current = t);
  var l =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Zr(t, e.child, null, s)), (t.child = Zr(t, null, l, s)))
      : Me(e, t, l, s),
    (t.memoizedState = r.state),
    o && od(t, n, !0),
    t.child
  );
}
function gh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? rd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && rd(e, t.context, !1),
    Ru(e, t.containerInfo);
}
function wd(e, t, n, r, o) {
  return Xr(), ku(o), (t.flags |= 256), Me(e, t, n, r), t.child;
}
var Ra = { dehydrated: null, treeContext: null, retryLane: 0 };
function La(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function vh(e, t, n) {
  var r = t.pendingProps,
    o = ae.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ne(ae, o & 1),
    e === null)
  )
    return (
      Ea(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = i))
                : (s = Yi(i, r, 0, null)),
              (e = nr(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = La(n)),
              (t.memoizedState = Ra),
              e)
            : zu(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return _y(e, t, i, r, l, o, n);
  if (s) {
    (s = r.fallback), (i = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Rn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (s = Rn(l, s)) : ((s = nr(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? La(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ra),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Rn(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function zu(e, t) {
  return (
    (t = Yi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ds(e, t, n, r) {
  return (
    r !== null && ku(r),
    Zr(t, e.child, null, n),
    (e = zu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function _y(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Il(Error(R(422)))), Ds(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (o = t.mode),
        (r = Yi({ mode: "visible", children: r.children }, o, 0, null)),
        (s = nr(s, o, i, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Zr(t, e.child, null, i),
        (t.child.memoizedState = La(i)),
        (t.memoizedState = Ra),
        s);
  if (!(t.mode & 1)) return Ds(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(R(419))), (r = Il(s, r, void 0)), Ds(e, t, i, r);
  }
  if (((l = (i & e.childLanes) !== 0), $e || l)) {
    if (((r = Se), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== s.retryLane &&
          ((s.retryLane = o), Yt(e, o), St(r, e, o, -1));
    }
    return Vu(), (r = Il(Error(R(421)))), Ds(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ky.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ke = Nn(o.nextSibling)),
      (Ye = t),
      (le = !0),
      (yt = null),
      e !== null &&
        ((nt[rt++] = Ut),
        (nt[rt++] = Wt),
        (nt[rt++] = or),
        (Ut = e.id),
        (Wt = e.overflow),
        (or = t)),
      (t = zu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Sd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ka(e.return, t, n);
}
function zl(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = o));
}
function yh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ((Me(e, t, r.children, n), (r = ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Sd(e, n, t);
        else if (e.tag === 19) Sd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ne(ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ci(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          zl(t, !1, o, n, s);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ci(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        zl(t, !0, n, null, s);
        break;
      case "together":
        zl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Js(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Gt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (ir |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Rn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Rn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ay(e, t, n) {
  switch (t.tag) {
    case 3:
      gh(t), Xr();
      break;
    case 5:
      Vp(t);
      break;
    case 1:
      Ue(t.type) && gi(t);
      break;
    case 4:
      Ru(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ne(xi, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ne(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? vh(e, t, n)
          : (ne(ae, ae.current & 1),
            (e = Gt(e, t, n)),
            e !== null ? e.sibling : null);
      ne(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return yh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ne(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), hh(e, t, n);
  }
  return Gt(e, t, n);
}
var xh, Oa, wh, Sh;
xh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Oa = function () {};
wh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Gn(Mt.current);
    var s = null;
    switch (n) {
      case "input":
        (o = ea(e, o)), (r = ea(e, r)), (s = []);
        break;
      case "select":
        (o = ce({}, o, { value: void 0 })),
          (r = ce({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (o = ra(e, o)), (r = ra(e, r)), (s = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = hi);
    }
    sa(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (zo.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (i in l)
              !l.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                l[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (zo.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && oe("scroll", e),
                  s || l === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Sh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function wo(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Dy(e, t, n) {
  var r = t.pendingProps;
  switch ((Eu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Pe(t), null;
    case 1:
      return Ue(t.type) && mi(), Pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Jr(),
        se(Be),
        se(Le),
        Ou(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_s(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), yt !== null && ($a(yt), (yt = null)))),
        Oa(e, t),
        Pe(t),
        null
      );
    case 5:
      Lu(t);
      var o = Gn(qo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        wh(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Pe(t), null;
        }
        if (((e = Gn(Mt.current)), _s(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Lt] = t), (r[Yo] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              oe("cancel", r), oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < jo.length; o++) oe(jo[o], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              oe("error", r), oe("load", r);
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              Rc(r, s), oe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                oe("invalid", r);
              break;
            case "textarea":
              Oc(r, s), oe("invalid", r);
          }
          sa(n, s), (o = null);
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var l = s[i];
              i === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ms(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ms(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : zo.hasOwnProperty(i) &&
                  l != null &&
                  i === "onScroll" &&
                  oe("scroll", r);
            }
          switch (n) {
            case "input":
              bs(r), Lc(r, s, !0);
              break;
            case "textarea":
              bs(r), Mc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = hi);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Gf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Lt] = t),
            (e[Yo] = r),
            xh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ia(n, r)), n)) {
              case "dialog":
                oe("cancel", e), oe("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < jo.length; o++) oe(jo[o], e);
                o = r;
                break;
              case "source":
                oe("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                oe("error", e), oe("load", e), (o = r);
                break;
              case "details":
                oe("toggle", e), (o = r);
                break;
              case "input":
                Rc(e, r), (o = ea(e, r)), oe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ce({}, r, { value: void 0 })),
                  oe("invalid", e);
                break;
              case "textarea":
                Oc(e, r), (o = ra(e, r)), oe("invalid", e);
                break;
              default:
                o = r;
            }
            sa(n, o), (l = o);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? Zf(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && qf(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Fo(e, a)
                    : typeof a == "number" && Fo(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (zo.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && oe("scroll", e)
                      : a != null && au(e, s, a, i));
              }
            switch (n) {
              case "input":
                bs(e), Lc(e, r, !1);
                break;
              case "textarea":
                bs(e), Mc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + On(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Or(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Or(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = hi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Pe(t), null;
    case 6:
      if (e && t.stateNode != null) Sh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = Gn(qo.current)), Gn(Mt.current), _s(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Lt] = t),
            (s = r.nodeValue !== n) && ((e = Ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ms(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ms(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Lt] = t),
            (t.stateNode = r);
      }
      return Pe(t), null;
    case 13:
      if (
        (se(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && Ke !== null && t.mode & 1 && !(t.flags & 128))
          Fp(), Xr(), (t.flags |= 98560), (s = !1);
        else if (((s = _s(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(R(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(R(317));
            s[Lt] = t;
          } else
            Xr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Pe(t), (s = !1);
        } else yt !== null && ($a(yt), (yt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? xe === 0 && (xe = 3) : Vu())),
          t.updateQueue !== null && (t.flags |= 4),
          Pe(t),
          null);
    case 4:
      return (
        Jr(), Oa(e, t), e === null && Qo(t.stateNode.containerInfo), Pe(t), null
      );
    case 10:
      return ju(t.type._context), Pe(t), null;
    case 17:
      return Ue(t.type) && mi(), Pe(t), null;
    case 19:
      if ((se(ae), (s = t.memoizedState), s === null)) return Pe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) wo(s, !1);
        else {
          if (xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Ci(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    wo(s, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (i = s.alternate),
                    i === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = i.childLanes),
                        (s.lanes = i.lanes),
                        (s.child = i.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = i.memoizedProps),
                        (s.memoizedState = i.memoizedState),
                        (s.updateQueue = i.updateQueue),
                        (s.type = i.type),
                        (e = i.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ne(ae, (ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            pe() > to &&
            ((t.flags |= 128), (r = !0), wo(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ci(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              wo(s, !0),
              s.tail === null && s.tailMode === "hidden" && !i.alternate && !le)
            )
              return Pe(t), null;
          } else
            2 * pe() - s.renderingStartTime > to &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), wo(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = s.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (s.last = i));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = pe()),
          (t.sibling = null),
          (n = ae.current),
          ne(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (Pe(t), null);
    case 22:
    case 23:
      return (
        Wu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? He & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Iy(e, t) {
  switch ((Eu(t), t.tag)) {
    case 1:
      return (
        Ue(t.type) && mi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Jr(),
        se(Be),
        se(Le),
        Ou(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Lu(t), null;
    case 13:
      if (
        (se(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        Xr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return se(ae), null;
    case 4:
      return Jr(), null;
    case 10:
      return ju(t.type._context), null;
    case 22:
    case 23:
      return Wu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Is = !1,
  Re = !1,
  zy = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function Rr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        fe(e, t, r);
      }
    else n.current = null;
}
function Ma(e, t, n) {
  try {
    n();
  } catch (r) {
    fe(e, t, r);
  }
}
var Cd = !1;
function Fy(e, t) {
  if (((ga = di), (e = Np()), Su(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            l = -1,
            a = -1,
            u = 0,
            d = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var p;
              f !== n || (o !== 0 && f.nodeType !== 3) || (l = i + o),
                f !== s || (r !== 0 && f.nodeType !== 3) || (a = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (p = f.firstChild) !== null;

            )
              (h = f), (f = p);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++u === o && (l = i),
                h === s && ++d === r && (a = i),
                (p = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = p;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (va = { focusedElem: e, selectionRange: n }, di = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var y = S.memoizedProps,
                    w = S.memoizedState,
                    g = t.stateNode,
                    m = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : pt(t.type, y),
                      w
                    );
                  g.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (C) {
          fe(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (S = Cd), (Cd = !1), S;
}
function _o(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        (o.destroy = void 0), s !== void 0 && Ma(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Qi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function _a(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ch(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ch(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Lt], delete t[Yo], delete t[wa], delete t[Sy], delete t[Cy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Eh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ed(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Eh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Aa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = hi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Aa(e, t, n), e = e.sibling; e !== null; ) Aa(e, t, n), (e = e.sibling);
}
function Da(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Da(e, t, n), e = e.sibling; e !== null; ) Da(e, t, n), (e = e.sibling);
}
var Ce = null,
  vt = !1;
function ln(e, t, n) {
  for (n = n.child; n !== null; ) kh(e, t, n), (n = n.sibling);
}
function kh(e, t, n) {
  if (Ot && typeof Ot.onCommitFiberUnmount == "function")
    try {
      Ot.onCommitFiberUnmount(zi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Re || Rr(n, t);
    case 6:
      var r = Ce,
        o = vt;
      (Ce = null),
        ln(e, t, n),
        (Ce = r),
        (vt = o),
        Ce !== null &&
          (vt
            ? ((e = Ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ce.removeChild(n.stateNode));
      break;
    case 18:
      Ce !== null &&
        (vt
          ? ((e = Ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ll(e.parentNode, n)
              : e.nodeType === 1 && Ll(e, n),
            Wo(e))
          : Ll(Ce, n.stateNode));
      break;
    case 4:
      (r = Ce),
        (o = vt),
        (Ce = n.stateNode.containerInfo),
        (vt = !0),
        ln(e, t, n),
        (Ce = r),
        (vt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var s = o,
            i = s.destroy;
          (s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && Ma(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      ln(e, t, n);
      break;
    case 1:
      if (
        !Re &&
        (Rr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          fe(n, t, l);
        }
      ln(e, t, n);
      break;
    case 21:
      ln(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Re = (r = Re) || n.memoizedState !== null), ln(e, t, n), (Re = r))
        : ln(e, t, n);
      break;
    default:
      ln(e, t, n);
  }
}
function kd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new zy()),
      t.forEach(function (r) {
        var o = Yy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function dt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var s = e,
          i = t,
          l = i;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Ce = l.stateNode), (vt = !1);
              break e;
            case 3:
              (Ce = l.stateNode.containerInfo), (vt = !0);
              break e;
            case 4:
              (Ce = l.stateNode.containerInfo), (vt = !0);
              break e;
          }
          l = l.return;
        }
        if (Ce === null) throw Error(R(160));
        kh(s, i, o), (Ce = null), (vt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        fe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) bh(t, e), (t = t.sibling);
}
function bh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((dt(t, e), Nt(e), r & 4)) {
        try {
          _o(3, e, e.return), Qi(3, e);
        } catch (y) {
          fe(e, e.return, y);
        }
        try {
          _o(5, e, e.return);
        } catch (y) {
          fe(e, e.return, y);
        }
      }
      break;
    case 1:
      dt(t, e), Nt(e), r & 512 && n !== null && Rr(n, n.return);
      break;
    case 5:
      if (
        (dt(t, e),
        Nt(e),
        r & 512 && n !== null && Rr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Fo(o, "");
        } catch (y) {
          fe(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && Kf(o, s),
              ia(l, i);
            var u = ia(l, s);
            for (i = 0; i < a.length; i += 2) {
              var d = a[i],
                f = a[i + 1];
              d === "style"
                ? Zf(o, f)
                : d === "dangerouslySetInnerHTML"
                ? qf(o, f)
                : d === "children"
                ? Fo(o, f)
                : au(o, d, f, u);
            }
            switch (l) {
              case "input":
                ta(o, s);
                break;
              case "textarea":
                Yf(o, s);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var p = s.value;
                p != null
                  ? Or(o, !!s.multiple, p, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Or(o, !!s.multiple, s.defaultValue, !0)
                      : Or(o, !!s.multiple, s.multiple ? [] : "", !1));
            }
            o[Yo] = s;
          } catch (y) {
            fe(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((dt(t, e), Nt(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (o = e.stateNode), (s = e.memoizedProps);
        try {
          o.nodeValue = s;
        } catch (y) {
          fe(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (dt(t, e), Nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Wo(t.containerInfo);
        } catch (y) {
          fe(e, e.return, y);
        }
      break;
    case 4:
      dt(t, e), Nt(e);
      break;
    case 13:
      dt(t, e),
        Nt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Bu = pe())),
        r & 4 && kd(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Re = (u = Re) || d), dt(t, e), (Re = u)) : dt(t, e),
        Nt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (D = e, d = e.child; d !== null; ) {
            for (f = D = d; D !== null; ) {
              switch (((h = D), (p = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _o(4, h, h.return);
                  break;
                case 1:
                  Rr(h, h.return);
                  var S = h.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (y) {
                      fe(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Rr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Nd(f);
                    continue;
                  }
              }
              p !== null ? ((p.return = h), (D = p)) : Nd(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((s = o.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Xf("display", i)));
              } catch (y) {
                fe(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (y) {
                fe(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      dt(t, e), Nt(e), r & 4 && kd(e);
      break;
    case 21:
      break;
    default:
      dt(t, e), Nt(e);
  }
}
function Nt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Eh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Fo(o, ""), (r.flags &= -33));
          var s = Ed(e);
          Da(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = Ed(e);
          Aa(e, l, i);
          break;
        default:
          throw Error(R(161));
      }
    } catch (a) {
      fe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function $y(e, t, n) {
  (D = e), Nh(e);
}
function Nh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var o = D,
      s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Is;
      if (!i) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Re;
        l = Is;
        var u = Re;
        if (((Is = i), (Re = a) && !u))
          for (D = o; D !== null; )
            (i = D),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? jd(o)
                : a !== null
                ? ((a.return = i), (D = a))
                : jd(o);
        for (; s !== null; ) (D = s), Nh(s), (s = s.sibling);
        (D = o), (Is = l), (Re = u);
      }
      bd(e);
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (D = s)) : bd(e);
  }
}
function bd(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Re || Qi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Re)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : pt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && ud(t, s, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ud(t, i, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Wo(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Re || (t.flags & 512 && _a(t));
      } catch (h) {
        fe(t, t.return, h);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function Nd(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function jd(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Qi(4, t);
          } catch (a) {
            fe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              fe(t, o, a);
            }
          }
          var s = t.return;
          try {
            _a(t);
          } catch (a) {
            fe(t, s, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            _a(t);
          } catch (a) {
            fe(t, i, a);
          }
      }
    } catch (a) {
      fe(t, t.return, a);
    }
    if (t === e) {
      D = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (D = l);
      break;
    }
    D = t.return;
  }
}
var By = Math.ceil,
  bi = Zt.ReactCurrentDispatcher,
  Fu = Zt.ReactCurrentOwner,
  st = Zt.ReactCurrentBatchConfig,
  X = 0,
  Se = null,
  me = null,
  Ee = 0,
  He = 0,
  Lr = Fn(0),
  xe = 0,
  es = null,
  ir = 0,
  Ki = 0,
  $u = 0,
  Ao = null,
  Fe = null,
  Bu = 0,
  to = 1 / 0,
  Ft = null,
  Ni = !1,
  Ia = null,
  Pn = null,
  zs = !1,
  Sn = null,
  ji = 0,
  Do = 0,
  za = null,
  ei = -1,
  ti = 0;
function Ae() {
  return X & 6 ? pe() : ei !== -1 ? ei : (ei = pe());
}
function Tn(e) {
  return e.mode & 1
    ? X & 2 && Ee !== 0
      ? Ee & -Ee
      : ky.transition !== null
      ? (ti === 0 && (ti = cp()), ti)
      : ((e = ee),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : vp(e.type))),
        e)
    : 1;
}
function St(e, t, n, r) {
  if (50 < Do) throw ((Do = 0), (za = null), Error(R(185)));
  cs(e, n, r),
    (!(X & 2) || e !== Se) &&
      (e === Se && (!(X & 2) && (Ki |= n), xe === 4 && hn(e, Ee)),
      We(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((to = pe() + 500), Wi && $n()));
}
function We(e, t) {
  var n = e.callbackNode;
  kv(e, t);
  var r = ci(e, e === Se ? Ee : 0);
  if (r === 0)
    n !== null && Dc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Dc(n), t === 1))
      e.tag === 0 ? Ey(Pd.bind(null, e)) : Dp(Pd.bind(null, e)),
        xy(function () {
          !(X & 6) && $n();
        }),
        (n = null);
    else {
      switch (dp(r)) {
        case 1:
          n = pu;
          break;
        case 4:
          n = ap;
          break;
        case 16:
          n = ui;
          break;
        case 536870912:
          n = up;
          break;
        default:
          n = ui;
      }
      n = _h(n, jh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function jh(e, t) {
  if (((ei = -1), (ti = 0), X & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (Ir() && e.callbackNode !== n) return null;
  var r = ci(e, e === Se ? Ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Pi(e, r);
  else {
    t = r;
    var o = X;
    X |= 2;
    var s = Th();
    (Se !== e || Ee !== t) && ((Ft = null), (to = pe() + 500), tr(e, t));
    do
      try {
        Vy();
        break;
      } catch (l) {
        Ph(e, l);
      }
    while (!0);
    Nu(),
      (bi.current = s),
      (X = o),
      me !== null ? (t = 0) : ((Se = null), (Ee = 0), (t = xe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = da(e)), o !== 0 && ((r = o), (t = Fa(e, o)))), t === 1)
    )
      throw ((n = es), tr(e, 0), hn(e, r), We(e, pe()), n);
    if (t === 6) hn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Uy(o) &&
          ((t = Pi(e, r)),
          t === 2 && ((s = da(e)), s !== 0 && ((r = s), (t = Fa(e, s)))),
          t === 1))
      )
        throw ((n = es), tr(e, 0), hn(e, r), We(e, pe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          Qn(e, Fe, Ft);
          break;
        case 3:
          if (
            (hn(e, r), (r & 130023424) === r && ((t = Bu + 500 - pe()), 10 < t))
          ) {
            if (ci(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ae(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = xa(Qn.bind(null, e, Fe, Ft), t);
            break;
          }
          Qn(e, Fe, Ft);
          break;
        case 4:
          if ((hn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - wt(r);
            (s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s);
          }
          if (
            ((r = o),
            (r = pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * By(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = xa(Qn.bind(null, e, Fe, Ft), r);
            break;
          }
          Qn(e, Fe, Ft);
          break;
        case 5:
          Qn(e, Fe, Ft);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return We(e, pe()), e.callbackNode === n ? jh.bind(null, e) : null;
}
function Fa(e, t) {
  var n = Ao;
  return (
    e.current.memoizedState.isDehydrated && (tr(e, t).flags |= 256),
    (e = Pi(e, t)),
    e !== 2 && ((t = Fe), (Fe = n), t !== null && $a(t)),
    e
  );
}
function $a(e) {
  Fe === null ? (Fe = e) : Fe.push.apply(Fe, e);
}
function Uy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!Ct(s(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function hn(e, t) {
  for (
    t &= ~$u,
      t &= ~Ki,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - wt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Pd(e) {
  if (X & 6) throw Error(R(327));
  Ir();
  var t = ci(e, 0);
  if (!(t & 1)) return We(e, pe()), null;
  var n = Pi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = da(e);
    r !== 0 && ((t = r), (n = Fa(e, r)));
  }
  if (n === 1) throw ((n = es), tr(e, 0), hn(e, t), We(e, pe()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Qn(e, Fe, Ft),
    We(e, pe()),
    null
  );
}
function Uu(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((to = pe() + 500), Wi && $n());
  }
}
function lr(e) {
  Sn !== null && Sn.tag === 0 && !(X & 6) && Ir();
  var t = X;
  X |= 1;
  var n = st.transition,
    r = ee;
  try {
    if (((st.transition = null), (ee = 1), e)) return e();
  } finally {
    (ee = r), (st.transition = n), (X = t), !(X & 6) && $n();
  }
}
function Wu() {
  (He = Lr.current), se(Lr);
}
function tr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), yy(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n;
      switch ((Eu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && mi();
          break;
        case 3:
          Jr(), se(Be), se(Le), Ou();
          break;
        case 5:
          Lu(r);
          break;
        case 4:
          Jr();
          break;
        case 13:
          se(ae);
          break;
        case 19:
          se(ae);
          break;
        case 10:
          ju(r.type._context);
          break;
        case 22:
        case 23:
          Wu();
      }
      n = n.return;
    }
  if (
    ((Se = e),
    (me = e = Rn(e.current, null)),
    (Ee = He = t),
    (xe = 0),
    (es = null),
    ($u = Ki = ir = 0),
    (Fe = Ao = null),
    Yn !== null)
  ) {
    for (t = 0; t < Yn.length; t++)
      if (((n = Yn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          (s.next = o), (r.next = i);
        }
        n.pending = r;
      }
    Yn = null;
  }
  return e;
}
function Ph(e, t) {
  do {
    var n = me;
    try {
      if ((Nu(), (Xs.current = ki), Ei)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ei = !1;
      }
      if (
        ((sr = 0),
        (we = ve = ue = null),
        (Mo = !1),
        (Xo = 0),
        (Fu.current = null),
        n === null || n.return === null)
      ) {
        (xe = 1), (es = t), (me = null);
        break;
      }
      e: {
        var s = e,
          i = n.return,
          l = n,
          a = t;
        if (
          ((t = Ee),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = l,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var p = md(i);
          if (p !== null) {
            (p.flags &= -257),
              gd(p, i, l, s, t),
              p.mode & 1 && hd(s, u, t),
              (t = p),
              (a = u);
            var S = t.updateQueue;
            if (S === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              hd(s, u, t), Vu();
              break e;
            }
            a = Error(R(426));
          }
        } else if (le && l.mode & 1) {
          var w = md(i);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              gd(w, i, l, s, t),
              ku(eo(a, l));
            break e;
          }
        }
        (s = a = eo(a, l)),
          xe !== 4 && (xe = 2),
          Ao === null ? (Ao = [s]) : Ao.push(s),
          (s = i);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var g = dh(s, a, t);
              ad(s, g);
              break e;
            case 1:
              l = a;
              var m = s.type,
                v = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Pn === null || !Pn.has(v))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var C = fh(s, l, t);
                ad(s, C);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Lh(n);
    } catch (E) {
      (t = E), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Th() {
  var e = bi.current;
  return (bi.current = ki), e === null ? ki : e;
}
function Vu() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    Se === null || (!(ir & 268435455) && !(Ki & 268435455)) || hn(Se, Ee);
}
function Pi(e, t) {
  var n = X;
  X |= 2;
  var r = Th();
  (Se !== e || Ee !== t) && ((Ft = null), tr(e, t));
  do
    try {
      Wy();
      break;
    } catch (o) {
      Ph(e, o);
    }
  while (!0);
  if ((Nu(), (X = n), (bi.current = r), me !== null)) throw Error(R(261));
  return (Se = null), (Ee = 0), xe;
}
function Wy() {
  for (; me !== null; ) Rh(me);
}
function Vy() {
  for (; me !== null && !mv(); ) Rh(me);
}
function Rh(e) {
  var t = Mh(e.alternate, e, He);
  (e.memoizedProps = e.pendingProps),
    t === null ? Lh(e) : (me = t),
    (Fu.current = null);
}
function Lh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Iy(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (xe = 6), (me = null);
        return;
      }
    } else if (((n = Dy(n, t, He)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  xe === 0 && (xe = 5);
}
function Qn(e, t, n) {
  var r = ee,
    o = st.transition;
  try {
    (st.transition = null), (ee = 1), Hy(e, t, n, r);
  } finally {
    (st.transition = o), (ee = r);
  }
  return null;
}
function Hy(e, t, n, r) {
  do Ir();
  while (Sn !== null);
  if (X & 6) throw Error(R(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (bv(e, s),
    e === Se && ((me = Se = null), (Ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zs ||
      ((zs = !0),
      _h(ui, function () {
        return Ir(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = st.transition), (st.transition = null);
    var i = ee;
    ee = 1;
    var l = X;
    (X |= 4),
      (Fu.current = null),
      Fy(e, n),
      bh(n, e),
      dy(va),
      (di = !!ga),
      (va = ga = null),
      (e.current = n),
      $y(n),
      gv(),
      (X = l),
      (ee = i),
      (st.transition = s);
  } else e.current = n;
  if (
    (zs && ((zs = !1), (Sn = e), (ji = o)),
    (s = e.pendingLanes),
    s === 0 && (Pn = null),
    xv(n.stateNode),
    We(e, pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ni) throw ((Ni = !1), (e = Ia), (Ia = null), e);
  return (
    ji & 1 && e.tag !== 0 && Ir(),
    (s = e.pendingLanes),
    s & 1 ? (e === za ? Do++ : ((Do = 0), (za = e))) : (Do = 0),
    $n(),
    null
  );
}
function Ir() {
  if (Sn !== null) {
    var e = dp(ji),
      t = st.transition,
      n = ee;
    try {
      if (((st.transition = null), (ee = 16 > e ? 16 : e), Sn === null))
        var r = !1;
      else {
        if (((e = Sn), (Sn = null), (ji = 0), X & 6)) throw Error(R(331));
        var o = X;
        for (X |= 4, D = e.current; D !== null; ) {
          var s = D,
            i = s.child;
          if (D.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (D = u; D !== null; ) {
                  var d = D;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _o(8, d, s);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (D = f);
                  else
                    for (; D !== null; ) {
                      d = D;
                      var h = d.sibling,
                        p = d.return;
                      if ((Ch(d), d === u)) {
                        D = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = p), (D = h);
                        break;
                      }
                      D = p;
                    }
                }
              }
              var S = s.alternate;
              if (S !== null) {
                var y = S.child;
                if (y !== null) {
                  S.child = null;
                  do {
                    var w = y.sibling;
                    (y.sibling = null), (y = w);
                  } while (y !== null);
                }
              }
              D = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) (i.return = s), (D = i);
          else
            e: for (; D !== null; ) {
              if (((s = D), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    _o(9, s, s.return);
                }
              var g = s.sibling;
              if (g !== null) {
                (g.return = s.return), (D = g);
                break e;
              }
              D = s.return;
            }
        }
        var m = e.current;
        for (D = m; D !== null; ) {
          i = D;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (D = v);
          else
            e: for (i = m; D !== null; ) {
              if (((l = D), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qi(9, l);
                  }
                } catch (E) {
                  fe(l, l.return, E);
                }
              if (l === i) {
                D = null;
                break e;
              }
              var C = l.sibling;
              if (C !== null) {
                (C.return = l.return), (D = C);
                break e;
              }
              D = l.return;
            }
        }
        if (
          ((X = o), $n(), Ot && typeof Ot.onPostCommitFiberRoot == "function")
        )
          try {
            Ot.onPostCommitFiberRoot(zi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ee = n), (st.transition = t);
    }
  }
  return !1;
}
function Td(e, t, n) {
  (t = eo(n, t)),
    (t = dh(e, t, 1)),
    (e = jn(e, t, 1)),
    (t = Ae()),
    e !== null && (cs(e, 1, t), We(e, t));
}
function fe(e, t, n) {
  if (e.tag === 3) Td(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Td(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Pn === null || !Pn.has(r)))
        ) {
          (e = eo(n, e)),
            (e = fh(t, e, 1)),
            (t = jn(t, e, 1)),
            (e = Ae()),
            t !== null && (cs(t, 1, e), We(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Qy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Se === e &&
      (Ee & n) === n &&
      (xe === 4 || (xe === 3 && (Ee & 130023424) === Ee && 500 > pe() - Bu)
        ? tr(e, 0)
        : ($u |= n)),
    We(e, t);
}
function Oh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ps), (Ps <<= 1), !(Ps & 130023424) && (Ps = 4194304))
      : (t = 1));
  var n = Ae();
  (e = Yt(e, t)), e !== null && (cs(e, t, n), We(e, n));
}
function Ky(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Oh(e, n);
}
function Yy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), Oh(e, n);
}
var Mh;
Mh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Be.current) $e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ($e = !1), Ay(e, t, n);
      $e = !!(e.flags & 131072);
    }
  else ($e = !1), le && t.flags & 1048576 && Ip(t, yi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Js(e, t), (e = t.pendingProps);
      var o = qr(t, Le.current);
      Dr(t, n), (o = _u(null, t, r, e, o, n));
      var s = Au();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ue(r) ? ((s = !0), gi(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Tu(t),
            (o.updater = Hi),
            (t.stateNode = o),
            (o._reactInternals = t),
            Na(t, r, e, n),
            (t = Ta(null, t, r, !0, s, n)))
          : ((t.tag = 0), le && s && Cu(t), Me(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Js(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = qy(r)),
          (e = pt(r, e)),
          o)
        ) {
          case 0:
            t = Pa(null, t, r, e, n);
            break e;
          case 1:
            t = xd(null, t, r, e, n);
            break e;
          case 11:
            t = vd(null, t, r, e, n);
            break e;
          case 14:
            t = yd(null, t, r, pt(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pt(r, o)),
        Pa(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pt(r, o)),
        xd(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((gh(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          Wp(e, t),
          Si(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (o = eo(Error(R(423)), t)), (t = wd(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = eo(Error(R(424)), t)), (t = wd(e, t, r, n, o));
            break e;
          } else
            for (
              Ke = Nn(t.stateNode.containerInfo.firstChild),
                Ye = t,
                le = !0,
                yt = null,
                n = Bp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Xr(), r === o)) {
            t = Gt(e, t, n);
            break e;
          }
          Me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Vp(t),
        e === null && Ea(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        ya(r, o) ? (i = null) : s !== null && ya(r, s) && (t.flags |= 32),
        mh(e, t),
        Me(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ea(t), null;
    case 13:
      return vh(e, t, n);
    case 4:
      return (
        Ru(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Zr(t, null, r, n)) : Me(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pt(r, o)),
        vd(e, t, r, o, n)
      );
    case 7:
      return Me(e, t, t.pendingProps, n), t.child;
    case 8:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (s = t.memoizedProps),
          (i = o.value),
          ne(xi, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (Ct(s.value, i)) {
            if (s.children === o.children && !Be.current) {
              t = Gt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                i = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = Vt(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      ka(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(R(341));
                (i.lanes |= n),
                  (l = i.alternate),
                  l !== null && (l.lanes |= n),
                  ka(i, n, t),
                  (i = s.sibling);
              } else i = s.child;
              if (i !== null) i.return = s;
              else
                for (i = s; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((s = i.sibling), s !== null)) {
                    (s.return = i.return), (i = s);
                    break;
                  }
                  i = i.return;
                }
              s = i;
            }
        Me(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Dr(t, n),
        (o = it(o)),
        (r = r(o)),
        (t.flags |= 1),
        Me(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = pt(r, t.pendingProps)),
        (o = pt(r.type, o)),
        yd(e, t, r, o, n)
      );
    case 15:
      return ph(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pt(r, o)),
        Js(e, t),
        (t.tag = 1),
        Ue(r) ? ((e = !0), gi(t)) : (e = !1),
        Dr(t, n),
        ch(t, r, o),
        Na(t, r, o, n),
        Ta(null, t, r, !0, e, n)
      );
    case 19:
      return yh(e, t, n);
    case 22:
      return hh(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function _h(e, t) {
  return lp(e, t);
}
function Gy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ot(e, t, n, r) {
  return new Gy(e, t, n, r);
}
function Hu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function qy(e) {
  if (typeof e == "function") return Hu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === cu)) return 11;
    if (e === du) return 14;
  }
  return 2;
}
function Rn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ot(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ni(e, t, n, r, o, s) {
  var i = 2;
  if (((r = e), typeof e == "function")) Hu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Sr:
        return nr(n.children, o, s, t);
      case uu:
        (i = 8), (o |= 8);
        break;
      case ql:
        return (
          (e = ot(12, n, t, o | 2)), (e.elementType = ql), (e.lanes = s), e
        );
      case Xl:
        return (e = ot(13, n, t, o)), (e.elementType = Xl), (e.lanes = s), e;
      case Zl:
        return (e = ot(19, n, t, o)), (e.elementType = Zl), (e.lanes = s), e;
      case Vf:
        return Yi(n, o, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Uf:
              i = 10;
              break e;
            case Wf:
              i = 9;
              break e;
            case cu:
              i = 11;
              break e;
            case du:
              i = 14;
              break e;
            case dn:
              (i = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ot(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function nr(e, t, n, r) {
  return (e = ot(7, e, r, t)), (e.lanes = n), e;
}
function Yi(e, t, n, r) {
  return (
    (e = ot(22, e, r, t)),
    (e.elementType = Vf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Fl(e, t, n) {
  return (e = ot(6, e, null, t)), (e.lanes = n), e;
}
function $l(e, t, n) {
  return (
    (t = ot(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Xy(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = wl(0)),
    (this.expirationTimes = wl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = wl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Qu(e, t, n, r, o, s, i, l, a) {
  return (
    (e = new Xy(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = ot(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Tu(s),
    e
  );
}
function Zy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: wr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ah(e) {
  if (!e) return Mn;
  e = e._reactInternals;
  e: {
    if (cr(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ue(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ue(n)) return Ap(e, n, t);
  }
  return t;
}
function Dh(e, t, n, r, o, s, i, l, a) {
  return (
    (e = Qu(n, r, !0, e, o, s, i, l, a)),
    (e.context = Ah(null)),
    (n = e.current),
    (r = Ae()),
    (o = Tn(n)),
    (s = Vt(r, o)),
    (s.callback = t ?? null),
    jn(n, s, o),
    (e.current.lanes = o),
    cs(e, o, r),
    We(e, r),
    e
  );
}
function Gi(e, t, n, r) {
  var o = t.current,
    s = Ae(),
    i = Tn(o);
  return (
    (n = Ah(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Vt(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = jn(o, t, i)),
    e !== null && (St(e, o, i, s), qs(e, o, i)),
    i
  );
}
function Ti(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Rd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ku(e, t) {
  Rd(e, t), (e = e.alternate) && Rd(e, t);
}
function Jy() {
  return null;
}
var Ih =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Yu(e) {
  this._internalRoot = e;
}
qi.prototype.render = Yu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Gi(e, t, null, null);
};
qi.prototype.unmount = Yu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    lr(function () {
      Gi(null, e, null, null);
    }),
      (t[Kt] = null);
  }
};
function qi(e) {
  this._internalRoot = e;
}
qi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = hp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pn.length && t !== 0 && t < pn[n].priority; n++);
    pn.splice(n, 0, e), n === 0 && gp(e);
  }
};
function Gu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Xi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ld() {}
function e0(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Ti(i);
        s.call(u);
      };
    }
    var i = Dh(t, r, e, 0, null, !1, !1, "", Ld);
    return (
      (e._reactRootContainer = i),
      (e[Kt] = i.current),
      Qo(e.nodeType === 8 ? e.parentNode : e),
      lr(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Ti(a);
      l.call(u);
    };
  }
  var a = Qu(e, 0, !1, null, null, !1, !1, "", Ld);
  return (
    (e._reactRootContainer = a),
    (e[Kt] = a.current),
    Qo(e.nodeType === 8 ? e.parentNode : e),
    lr(function () {
      Gi(t, a, n, r);
    }),
    a
  );
}
function Zi(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Ti(i);
        l.call(a);
      };
    }
    Gi(t, i, e, o);
  } else i = e0(n, t, e, o, r);
  return Ti(i);
}
fp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = No(t.pendingLanes);
        n !== 0 &&
          (hu(t, n | 1), We(t, pe()), !(X & 6) && ((to = pe() + 500), $n()));
      }
      break;
    case 13:
      lr(function () {
        var r = Yt(e, 1);
        if (r !== null) {
          var o = Ae();
          St(r, e, 1, o);
        }
      }),
        Ku(e, 1);
  }
};
mu = function (e) {
  if (e.tag === 13) {
    var t = Yt(e, 134217728);
    if (t !== null) {
      var n = Ae();
      St(t, e, 134217728, n);
    }
    Ku(e, 134217728);
  }
};
pp = function (e) {
  if (e.tag === 13) {
    var t = Tn(e),
      n = Yt(e, t);
    if (n !== null) {
      var r = Ae();
      St(n, e, t, r);
    }
    Ku(e, t);
  }
};
hp = function () {
  return ee;
};
mp = function (e, t) {
  var n = ee;
  try {
    return (ee = e), t();
  } finally {
    ee = n;
  }
};
aa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ta(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ui(r);
            if (!o) throw Error(R(90));
            Qf(r), ta(r, o);
          }
        }
      }
      break;
    case "textarea":
      Yf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Or(e, !!n.multiple, t, !1);
  }
};
tp = Uu;
np = lr;
var t0 = { usingClientEntryPoint: !1, Events: [fs, br, Ui, Jf, ep, Uu] },
  So = {
    findFiberByHostInstance: Kn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  n0 = {
    bundleType: So.bundleType,
    version: So.version,
    rendererPackageName: So.rendererPackageName,
    rendererConfig: So.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = sp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: So.findFiberByHostInstance || Jy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fs.isDisabled && Fs.supportsFiber)
    try {
      (zi = Fs.inject(n0)), (Ot = Fs);
    } catch {}
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = t0;
Xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Gu(t)) throw Error(R(200));
  return Zy(e, t, null, n);
};
Xe.createRoot = function (e, t) {
  if (!Gu(e)) throw Error(R(299));
  var n = !1,
    r = "",
    o = Ih;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Qu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Kt] = t.current),
    Qo(e.nodeType === 8 ? e.parentNode : e),
    new Yu(t)
  );
};
Xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = sp(t)), (e = e === null ? null : e.stateNode), e;
};
Xe.flushSync = function (e) {
  return lr(e);
};
Xe.hydrate = function (e, t, n) {
  if (!Xi(t)) throw Error(R(200));
  return Zi(null, e, t, !0, n);
};
Xe.hydrateRoot = function (e, t, n) {
  if (!Gu(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = "",
    i = Ih;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Dh(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[Kt] = t.current),
    Qo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new qi(t);
};
Xe.render = function (e, t, n) {
  if (!Xi(t)) throw Error(R(200));
  return Zi(null, e, t, !1, n);
};
Xe.unmountComponentAtNode = function (e) {
  if (!Xi(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (lr(function () {
        Zi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Kt] = null);
        });
      }),
      !0)
    : !1;
};
Xe.unstable_batchedUpdates = Uu;
Xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Xi(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Zi(e, t, n, !1, r);
};
Xe.version = "18.3.1-next-f1338f8080-20240426";
function zh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zh);
    } catch (e) {
      console.error(e);
    }
}
zh(), (zf.exports = Xe);
var hs = zf.exports;
const Fh = bf(hs);
var $h,
  Od = hs;
($h = Od.createRoot), Od.hydrateRoot;
const r0 = 1,
  o0 = 1e6;
let Bl = 0;
function s0() {
  return (Bl = (Bl + 1) % Number.MAX_SAFE_INTEGER), Bl.toString();
}
const Ul = new Map(),
  Md = (e) => {
    if (Ul.has(e)) return;
    const t = setTimeout(() => {
      Ul.delete(e), Io({ type: "REMOVE_TOAST", toastId: e });
    }, o0);
    Ul.set(e, t);
  },
  i0 = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, r0) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Md(n)
            : e.toasts.forEach((r) => {
                Md(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  ri = [];
let oi = { toasts: [] };
function Io(e) {
  (oi = i0(oi, e)),
    ri.forEach((t) => {
      t(oi);
    });
}
function l0({ ...e }) {
  const t = s0(),
    n = (o) => Io({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => Io({ type: "DISMISS_TOAST", toastId: t });
  return (
    Io({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function a0() {
  const [e, t] = x.useState(oi);
  return (
    x.useEffect(
      () => (
        ri.push(t),
        () => {
          const n = ri.indexOf(t);
          n > -1 && ri.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: l0,
      dismiss: (n) => Io({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function ye(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function _d(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Bh(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = _d(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : _d(e[o], null);
        }
      };
  };
}
function Et(...e) {
  return x.useCallback(Bh(...e), e);
}
function Ji(e, t = []) {
  let n = [];
  function r(s, i) {
    const l = x.createContext(i),
      a = n.length;
    n = [...n, i];
    const u = (f) => {
      var g;
      const { scope: h, children: p, ...S } = f,
        y = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[a]) || l,
        w = x.useMemo(() => S, Object.values(S));
      return c.jsx(y.Provider, { value: w, children: p });
    };
    u.displayName = s + "Provider";
    function d(f, h) {
      var y;
      const p = ((y = h == null ? void 0 : h[e]) == null ? void 0 : y[a]) || l,
        S = x.useContext(p);
      if (S) return S;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [u, d];
  }
  const o = () => {
    const s = n.map((i) => x.createContext(i));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || s;
      return x.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, u0(o, ...t)];
}
function u0(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const i = r.reduce((l, { useScope: a, scopeName: u }) => {
        const f = a(s)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Ri(e) {
  const t = d0(e),
    n = x.forwardRef((r, o) => {
      const { children: s, ...i } = r,
        l = x.Children.toArray(s),
        a = l.find(p0);
      if (a) {
        const u = a.props.children,
          d = l.map((f) =>
            f === a
              ? x.Children.count(u) > 1
                ? x.Children.only(null)
                : x.isValidElement(u)
                ? u.props.children
                : null
              : f
          );
        return c.jsx(t, {
          ...i,
          ref: o,
          children: x.isValidElement(u) ? x.cloneElement(u, void 0, d) : null,
        });
      }
      return c.jsx(t, { ...i, ref: o, children: s });
    });
  return (n.displayName = `${e}.Slot`), n;
}
var c0 = Ri("Slot");
function d0(e) {
  const t = x.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (x.isValidElement(o)) {
      const i = m0(o),
        l = h0(s, o.props);
      return (
        o.type !== x.Fragment && (l.ref = r ? Bh(r, i) : i),
        x.cloneElement(o, l)
      );
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var Uh = Symbol("radix.slottable");
function f0(e) {
  const t = ({ children: n }) => c.jsx(c.Fragment, { children: n });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = Uh), t;
}
function p0(e) {
  return (
    x.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === Uh
  );
}
function h0(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...l) => {
            const a = s(...l);
            return o(...l), a;
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...s })
      : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function m0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function g0(e) {
  const t = e + "CollectionProvider",
    [n, r] = Ji(t),
    [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (y) => {
      const { scope: w, children: g } = y,
        m = L.useRef(null),
        v = L.useRef(new Map()).current;
      return c.jsx(o, { scope: w, itemMap: v, collectionRef: m, children: g });
    };
  i.displayName = t;
  const l = e + "CollectionSlot",
    a = Ri(l),
    u = L.forwardRef((y, w) => {
      const { scope: g, children: m } = y,
        v = s(l, g),
        C = Et(w, v.collectionRef);
      return c.jsx(a, { ref: C, children: m });
    });
  u.displayName = l;
  const d = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    h = Ri(d),
    p = L.forwardRef((y, w) => {
      const { scope: g, children: m, ...v } = y,
        C = L.useRef(null),
        E = Et(w, C),
        k = s(d, g);
      return (
        L.useEffect(
          () => (
            k.itemMap.set(C, { ref: C, ...v }), () => void k.itemMap.delete(C)
          )
        ),
        c.jsx(h, { [f]: "", ref: E, children: m })
      );
    });
  p.displayName = d;
  function S(y) {
    const w = s(e + "CollectionConsumer", y);
    return L.useCallback(() => {
      const m = w.collectionRef.current;
      if (!m) return [];
      const v = Array.from(m.querySelectorAll(`[${f}]`));
      return Array.from(w.itemMap.values()).sort(
        (k, b) => v.indexOf(k.ref.current) - v.indexOf(b.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: i, Slot: u, ItemSlot: p }, S, r];
}
var v0 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Ve = v0.reduce((e, t) => {
    const n = Ri(`Primitive.${t}`),
      r = x.forwardRef((o, s) => {
        const { asChild: i, ...l } = o,
          a = i ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          c.jsx(a, { ...l, ref: s })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function Wh(e, t) {
  e && hs.flushSync(() => e.dispatchEvent(t));
}
function _n(e) {
  const t = x.useRef(e);
  return (
    x.useEffect(() => {
      t.current = e;
    }),
    x.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function y0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _n(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var x0 = "DismissableLayer",
  Ba = "dismissableLayer.update",
  w0 = "dismissableLayer.pointerDownOutside",
  S0 = "dismissableLayer.focusOutside",
  Ad,
  Vh = x.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  qu = x.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: s,
        onInteractOutside: i,
        onDismiss: l,
        ...a
      } = e,
      u = x.useContext(Vh),
      [d, f] = x.useState(null),
      h =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, p] = x.useState({}),
      S = Et(t, (b) => f(b)),
      y = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      g = y.indexOf(w),
      m = d ? y.indexOf(d) : -1,
      v = u.layersWithOutsidePointerEventsDisabled.size > 0,
      C = m >= g,
      E = E0((b) => {
        const T = b.target,
          _ = [...u.branches].some((O) => O.contains(T));
        !C ||
          _ ||
          (o == null || o(b),
          i == null || i(b),
          b.defaultPrevented || l == null || l());
      }, h),
      k = k0((b) => {
        const T = b.target;
        [...u.branches].some((O) => O.contains(T)) ||
          (s == null || s(b),
          i == null || i(b),
          b.defaultPrevented || l == null || l());
      }, h);
    return (
      y0((b) => {
        m === u.layers.size - 1 &&
          (r == null || r(b),
          !b.defaultPrevented && l && (b.preventDefault(), l()));
      }, h),
      x.useEffect(() => {
        if (d)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Ad = h.body.style.pointerEvents),
                (h.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            Dd(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (h.body.style.pointerEvents = Ad);
            }
          );
      }, [d, h, n, u]),
      x.useEffect(
        () => () => {
          d &&
            (u.layers.delete(d),
            u.layersWithOutsidePointerEventsDisabled.delete(d),
            Dd());
        },
        [d, u]
      ),
      x.useEffect(() => {
        const b = () => p({});
        return (
          document.addEventListener(Ba, b),
          () => document.removeEventListener(Ba, b)
        );
      }, []),
      c.jsx(Ve.div, {
        ...a,
        ref: S,
        style: {
          pointerEvents: v ? (C ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: ye(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: ye(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: ye(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        ),
      })
    );
  });
qu.displayName = x0;
var C0 = "DismissableLayerBranch",
  Hh = x.forwardRef((e, t) => {
    const n = x.useContext(Vh),
      r = x.useRef(null),
      o = Et(t, r);
    return (
      x.useEffect(() => {
        const s = r.current;
        if (s)
          return (
            n.branches.add(s),
            () => {
              n.branches.delete(s);
            }
          );
      }, [n.branches]),
      c.jsx(Ve.div, { ...e, ref: o })
    );
  });
Hh.displayName = C0;
function E0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _n(e),
    r = x.useRef(!1),
    o = x.useRef(() => {});
  return (
    x.useEffect(() => {
      const s = (l) => {
          if (l.target && !r.current) {
            let a = function () {
              Qh(w0, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = a),
                t.addEventListener("click", o.current, { once: !0 }))
              : a();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        i = window.setTimeout(() => {
          t.addEventListener("pointerdown", s);
        }, 0);
      return () => {
        window.clearTimeout(i),
          t.removeEventListener("pointerdown", s),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function k0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _n(e),
    r = x.useRef(!1);
  return (
    x.useEffect(() => {
      const o = (s) => {
        s.target &&
          !r.current &&
          Qh(S0, n, { originalEvent: s }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Dd() {
  const e = new CustomEvent(Ba);
  document.dispatchEvent(e);
}
function Qh(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Wh(o, s) : o.dispatchEvent(s);
}
var b0 = qu,
  N0 = Hh,
  An = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
  j0 = "Portal",
  Kh = x.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, s] = x.useState(!1);
    An(() => s(!0), []);
    const i =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return i ? Fh.createPortal(c.jsx(Ve.div, { ...r, ref: t }), i) : null;
  });
Kh.displayName = j0;
function P0(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var Xu = (e) => {
  const { present: t, children: n } = e,
    r = T0(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n),
    s = Et(r.ref, R0(o));
  return typeof n == "function" || r.isPresent
    ? x.cloneElement(o, { ref: s })
    : null;
};
Xu.displayName = "Presence";
function T0(e) {
  const [t, n] = x.useState(),
    r = x.useRef(null),
    o = x.useRef(e),
    s = x.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [l, a] = P0(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    x.useEffect(() => {
      const u = $s(r.current);
      s.current = l === "mounted" ? u : "none";
    }, [l]),
    An(() => {
      const u = r.current,
        d = o.current;
      if (d !== e) {
        const h = s.current,
          p = $s(u);
        e
          ? a("MOUNT")
          : p === "none" || (u == null ? void 0 : u.display) === "none"
          ? a("UNMOUNT")
          : a(d && h !== p ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, a]),
    An(() => {
      if (t) {
        let u;
        const d = t.ownerDocument.defaultView ?? window,
          f = (p) => {
            const y = $s(r.current).includes(p.animationName);
            if (p.target === t && y && (a("ANIMATION_END"), !o.current)) {
              const w = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                }));
            }
          },
          h = (p) => {
            p.target === t && (s.current = $s(r.current));
          };
        return (
          t.addEventListener("animationstart", h),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            d.clearTimeout(u),
              t.removeEventListener("animationstart", h),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f);
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: x.useCallback((u) => {
        (r.current = u ? getComputedStyle(u) : null), n(u);
      }, []),
    }
  );
}
function $s(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function R0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var L0 = Df[" useInsertionEffect ".trim().toString()] || An;
function O0({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, s, i] = M0({ defaultProp: t, onChange: n }),
    l = e !== void 0,
    a = l ? e : o;
  {
    const d = x.useRef(e !== void 0);
    x.useEffect(() => {
      const f = d.current;
      f !== l &&
        console.warn(
          `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${
            l ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (d.current = l);
    }, [l, r]);
  }
  const u = x.useCallback(
    (d) => {
      var f;
      if (l) {
        const h = _0(d) ? d(e) : d;
        h !== e && ((f = i.current) == null || f.call(i, h));
      } else s(d);
    },
    [l, e, s, i]
  );
  return [a, u];
}
function M0({ defaultProp: e, onChange: t }) {
  const [n, r] = x.useState(e),
    o = x.useRef(n),
    s = x.useRef(t);
  return (
    L0(() => {
      s.current = t;
    }, [t]),
    x.useEffect(() => {
      var i;
      o.current !== n &&
        ((i = s.current) == null || i.call(s, n), (o.current = n));
    }, [n, o]),
    [n, r, s]
  );
}
function _0(e) {
  return typeof e == "function";
}
var A0 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  D0 = "VisuallyHidden",
  el = x.forwardRef((e, t) =>
    c.jsx(Ve.span, { ...e, ref: t, style: { ...A0, ...e.style } })
  );
el.displayName = D0;
var I0 = el,
  Zu = "ToastProvider",
  [Ju, z0, F0] = g0("Toast"),
  [Yh, GS] = Ji("Toast", [F0]),
  [$0, tl] = Yh(Zu),
  Gh = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: s = 50,
        children: i,
      } = e,
      [l, a] = x.useState(null),
      [u, d] = x.useState(0),
      f = x.useRef(!1),
      h = x.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Zu}\`. Expected non-empty \`string\`.`
        ),
      c.jsx(Ju.Provider, {
        scope: t,
        children: c.jsx($0, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: s,
          toastCount: u,
          viewport: l,
          onViewportChange: a,
          onToastAdd: x.useCallback(() => d((p) => p + 1), []),
          onToastRemove: x.useCallback(() => d((p) => p - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: h,
          children: i,
        }),
      })
    );
  };
Gh.displayName = Zu;
var qh = "ToastViewport",
  B0 = ["F8"],
  Ua = "toast.viewportPause",
  Wa = "toast.viewportResume",
  Xh = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = B0,
        label: o = "Notifications ({hotkey})",
        ...s
      } = e,
      i = tl(qh, n),
      l = z0(n),
      a = x.useRef(null),
      u = x.useRef(null),
      d = x.useRef(null),
      f = x.useRef(null),
      h = Et(t, f, i.onViewportChange),
      p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      S = i.toastCount > 0;
    x.useEffect(() => {
      const w = (g) => {
        var v;
        r.length !== 0 &&
          r.every((C) => g[C] || g.code === C) &&
          ((v = f.current) == null || v.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [r]),
      x.useEffect(() => {
        const w = a.current,
          g = f.current;
        if (S && w && g) {
          const m = () => {
              if (!i.isClosePausedRef.current) {
                const k = new CustomEvent(Ua);
                g.dispatchEvent(k), (i.isClosePausedRef.current = !0);
              }
            },
            v = () => {
              if (i.isClosePausedRef.current) {
                const k = new CustomEvent(Wa);
                g.dispatchEvent(k), (i.isClosePausedRef.current = !1);
              }
            },
            C = (k) => {
              !w.contains(k.relatedTarget) && v();
            },
            E = () => {
              w.contains(document.activeElement) || v();
            };
          return (
            w.addEventListener("focusin", m),
            w.addEventListener("focusout", C),
            w.addEventListener("pointermove", m),
            w.addEventListener("pointerleave", E),
            window.addEventListener("blur", m),
            window.addEventListener("focus", v),
            () => {
              w.removeEventListener("focusin", m),
                w.removeEventListener("focusout", C),
                w.removeEventListener("pointermove", m),
                w.removeEventListener("pointerleave", E),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", v);
            }
          );
        }
      }, [S, i.isClosePausedRef]);
    const y = x.useCallback(
      ({ tabbingDirection: w }) => {
        const m = l().map((v) => {
          const C = v.ref.current,
            E = [C, ...ex(C)];
          return w === "forwards" ? E : E.reverse();
        });
        return (w === "forwards" ? m.reverse() : m).flat();
      },
      [l]
    );
    return (
      x.useEffect(() => {
        const w = f.current;
        if (w) {
          const g = (m) => {
            var E, k, b;
            const v = m.altKey || m.ctrlKey || m.metaKey;
            if (m.key === "Tab" && !v) {
              const T = document.activeElement,
                _ = m.shiftKey;
              if (m.target === w && _) {
                (E = u.current) == null || E.focus();
                return;
              }
              const I = y({ tabbingDirection: _ ? "backwards" : "forwards" }),
                K = I.findIndex((A) => A === T);
              Wl(I.slice(K + 1))
                ? m.preventDefault()
                : _
                ? (k = u.current) == null || k.focus()
                : (b = d.current) == null || b.focus();
            }
          };
          return (
            w.addEventListener("keydown", g),
            () => w.removeEventListener("keydown", g)
          );
        }
      }, [l, y]),
      c.jsxs(N0, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", p),
        tabIndex: -1,
        style: { pointerEvents: S ? void 0 : "none" },
        children: [
          S &&
            c.jsx(Va, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = y({ tabbingDirection: "forwards" });
                Wl(w);
              },
            }),
          c.jsx(Ju.Slot, {
            scope: n,
            children: c.jsx(Ve.ol, { tabIndex: -1, ...s, ref: h }),
          }),
          S &&
            c.jsx(Va, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const w = y({ tabbingDirection: "backwards" });
                Wl(w);
              },
            }),
        ],
      })
    );
  });
Xh.displayName = qh;
var Zh = "ToastFocusProxy",
  Va = x.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      s = tl(Zh, n);
    return c.jsx(el, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (i) => {
        var u;
        const l = i.relatedTarget;
        !((u = s.viewport) != null && u.contains(l)) && r();
      },
    });
  });
Va.displayName = Zh;
var ms = "Toast",
  U0 = "toast.swipeStart",
  W0 = "toast.swipeMove",
  V0 = "toast.swipeCancel",
  H0 = "toast.swipeEnd",
  Jh = x.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i } = e,
      [l, a] = O0({ prop: r, defaultProp: o ?? !0, onChange: s, caller: ms });
    return c.jsx(Xu, {
      present: n || l,
      children: c.jsx(Y0, {
        open: l,
        ...i,
        ref: t,
        onClose: () => a(!1),
        onPause: _n(e.onPause),
        onResume: _n(e.onResume),
        onSwipeStart: ye(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: ye(e.onSwipeMove, (u) => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${d}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${f}px`
            );
        }),
        onSwipeCancel: ye(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: ye(e.onSwipeEnd, (u) => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${d}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${f}px`
            ),
            a(!1);
        }),
      }),
    });
  });
Jh.displayName = ms;
var [Q0, K0] = Yh(ms, { onClose() {} }),
  Y0 = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: s,
        onClose: i,
        onEscapeKeyDown: l,
        onPause: a,
        onResume: u,
        onSwipeStart: d,
        onSwipeMove: f,
        onSwipeCancel: h,
        onSwipeEnd: p,
        ...S
      } = e,
      y = tl(ms, n),
      [w, g] = x.useState(null),
      m = Et(t, (A) => g(A)),
      v = x.useRef(null),
      C = x.useRef(null),
      E = o || y.duration,
      k = x.useRef(0),
      b = x.useRef(E),
      T = x.useRef(0),
      { onToastAdd: _, onToastRemove: O } = y,
      $ = _n(() => {
        var H;
        (w == null ? void 0 : w.contains(document.activeElement)) &&
          ((H = y.viewport) == null || H.focus()),
          i();
      }),
      I = x.useCallback(
        (A) => {
          !A ||
            A === 1 / 0 ||
            (window.clearTimeout(T.current),
            (k.current = new Date().getTime()),
            (T.current = window.setTimeout($, A)));
        },
        [$]
      );
    x.useEffect(() => {
      const A = y.viewport;
      if (A) {
        const H = () => {
            I(b.current), u == null || u();
          },
          B = () => {
            const Q = new Date().getTime() - k.current;
            (b.current = b.current - Q),
              window.clearTimeout(T.current),
              a == null || a();
          };
        return (
          A.addEventListener(Ua, B),
          A.addEventListener(Wa, H),
          () => {
            A.removeEventListener(Ua, B), A.removeEventListener(Wa, H);
          }
        );
      }
    }, [y.viewport, E, a, u, I]),
      x.useEffect(() => {
        s && !y.isClosePausedRef.current && I(E);
      }, [s, E, y.isClosePausedRef, I]),
      x.useEffect(() => (_(), () => O()), [_, O]);
    const K = x.useMemo(() => (w ? im(w) : null), [w]);
    return y.viewport
      ? c.jsxs(c.Fragment, {
          children: [
            K &&
              c.jsx(G0, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: K,
              }),
            c.jsx(Q0, {
              scope: n,
              onClose: $,
              children: hs.createPortal(
                c.jsx(Ju.ItemSlot, {
                  scope: n,
                  children: c.jsx(b0, {
                    asChild: !0,
                    onEscapeKeyDown: ye(l, () => {
                      y.isFocusedToastEscapeKeyDownRef.current || $(),
                        (y.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: c.jsx(Ve.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": s ? "open" : "closed",
                      "data-swipe-direction": y.swipeDirection,
                      ...S,
                      ref: m,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: ye(e.onKeyDown, (A) => {
                        A.key === "Escape" &&
                          (l == null || l(A.nativeEvent),
                          A.nativeEvent.defaultPrevented ||
                            ((y.isFocusedToastEscapeKeyDownRef.current = !0),
                            $()));
                      }),
                      onPointerDown: ye(e.onPointerDown, (A) => {
                        A.button === 0 &&
                          (v.current = { x: A.clientX, y: A.clientY });
                      }),
                      onPointerMove: ye(e.onPointerMove, (A) => {
                        if (!v.current) return;
                        const H = A.clientX - v.current.x,
                          B = A.clientY - v.current.y,
                          Q = !!C.current,
                          j = ["left", "right"].includes(y.swipeDirection),
                          P = ["left", "up"].includes(y.swipeDirection)
                            ? Math.min
                            : Math.max,
                          M = j ? P(0, H) : 0,
                          F = j ? 0 : P(0, B),
                          z = A.pointerType === "touch" ? 10 : 2,
                          Y = { x: M, y: F },
                          q = { originalEvent: A, delta: Y };
                        Q
                          ? ((C.current = Y), Bs(W0, f, q, { discrete: !1 }))
                          : Id(Y, y.swipeDirection, z)
                          ? ((C.current = Y),
                            Bs(U0, d, q, { discrete: !1 }),
                            A.target.setPointerCapture(A.pointerId))
                          : (Math.abs(H) > z || Math.abs(B) > z) &&
                            (v.current = null);
                      }),
                      onPointerUp: ye(e.onPointerUp, (A) => {
                        const H = C.current,
                          B = A.target;
                        if (
                          (B.hasPointerCapture(A.pointerId) &&
                            B.releasePointerCapture(A.pointerId),
                          (C.current = null),
                          (v.current = null),
                          H)
                        ) {
                          const Q = A.currentTarget,
                            j = { originalEvent: A, delta: H };
                          Id(H, y.swipeDirection, y.swipeThreshold)
                            ? Bs(H0, p, j, { discrete: !0 })
                            : Bs(V0, h, j, { discrete: !0 }),
                            Q.addEventListener(
                              "click",
                              (P) => P.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                y.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  G0 = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = tl(ms, t),
      [s, i] = x.useState(!1),
      [l, a] = x.useState(!1);
    return (
      Z0(() => i(!0)),
      x.useEffect(() => {
        const u = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      l
        ? null
        : c.jsx(Kh, {
            asChild: !0,
            children: c.jsx(el, {
              ...r,
              children:
                s && c.jsxs(c.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  q0 = "ToastTitle",
  em = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return c.jsx(Ve.div, { ...r, ref: t });
  });
em.displayName = q0;
var X0 = "ToastDescription",
  tm = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return c.jsx(Ve.div, { ...r, ref: t });
  });
tm.displayName = X0;
var nm = "ToastAction",
  rm = x.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? c.jsx(sm, {
          altText: n,
          asChild: !0,
          children: c.jsx(ec, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${nm}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
rm.displayName = nm;
var om = "ToastClose",
  ec = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = K0(om, n);
    return c.jsx(sm, {
      asChild: !0,
      children: c.jsx(Ve.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: ye(e.onClick, o.onClose),
      }),
    });
  });
ec.displayName = om;
var sm = x.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return c.jsx(Ve.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function im(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        J0(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          s = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (s) {
            const i = r.dataset.radixToastAnnounceAlt;
            i && t.push(i);
          } else t.push(...im(r));
      }
    }),
    t
  );
}
function Bs(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Wh(o, s) : o.dispatchEvent(s);
}
var Id = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    s = r > o;
  return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function Z0(e = () => {}) {
  const t = _n(e);
  An(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function J0(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function ex(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Wl(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var tx = Gh,
  lm = Xh,
  am = Jh,
  um = em,
  cm = tm,
  dm = rm,
  fm = ec;
function pm(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = pm(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function hm() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = pm(e)) && (r && (r += " "), (r += t));
  return r;
}
const zd = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Fd = hm,
  mm = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Fd(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: s } = t,
      i = Object.keys(o).map((u) => {
        const d = n == null ? void 0 : n[u],
          f = s == null ? void 0 : s[u];
        if (d === null) return null;
        const h = zd(d) || zd(f);
        return o[u][h];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, d) => {
          let [f, h] = d;
          return h === void 0 || (u[f] = h), u;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, d) => {
              let { class: f, className: h, ...p } = d;
              return Object.entries(p).every((S) => {
                let [y, w] = S;
                return Array.isArray(w)
                  ? w.includes({ ...s, ...l }[y])
                  : { ...s, ...l }[y] === w;
              })
                ? [...u, f, h]
                : u;
            }, []);
    return Fd(
      e,
      i,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nx = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  gm = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var rx = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ox = x.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: s,
      iconNode: i,
      ...l
    },
    a
  ) =>
    x.createElement(
      "svg",
      {
        ref: a,
        ...rx,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: gm("lucide", o),
        ...l,
      },
      [
        ...i.map(([u, d]) => x.createElement(u, d)),
        ...(Array.isArray(s) ? s : [s]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tc = (e, t) => {
  const n = x.forwardRef(({ className: r, ...o }, s) =>
    x.createElement(ox, {
      ref: s,
      iconNode: t,
      className: gm(`lucide-${nx(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sx = tc("MessagesSquare", [
  [
    "path",
    {
      d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",
      key: "p1xzt8",
    },
  ],
  [
    "path",
    { d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1", key: "1cx29u" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ix = tc("Wallet", [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6",
    },
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lx = tc("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  nc = "-",
  ax = (e) => {
    const t = cx(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const l = i.split(nc);
        return l[0] === "" && l.length !== 1 && l.shift(), vm(l, t) || ux(i);
      },
      getConflictingClassGroupIds: (i, l) => {
        const a = n[i] || [];
        return l && r[i] ? [...a, ...r[i]] : a;
      },
    };
  },
  vm = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? vm(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const s = e.join(nc);
    return (i = t.validators.find(({ validator: l }) => l(s))) == null
      ? void 0
      : i.classGroupId;
  },
  $d = /^\[(.+)\]$/,
  ux = (e) => {
    if ($d.test(e)) {
      const t = $d.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  cx = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      fx(Object.entries(e.classGroups), n).forEach(([s, i]) => {
        Ha(i, r, s, t);
      }),
      r
    );
  },
  Ha = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const s = o === "" ? t : Bd(t, o);
        s.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (dx(o)) {
          Ha(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([s, i]) => {
        Ha(i, Bd(t, s), n, r);
      });
    });
  },
  Bd = (e, t) => {
    let n = e;
    return (
      t.split(nc).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  dx = (e) => e.isThemeGetter,
  fx = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((s) =>
            typeof s == "string"
              ? t + s
              : typeof s == "object"
              ? Object.fromEntries(
                  Object.entries(s).map(([i, l]) => [t + i, l])
                )
              : s
          );
          return [n, o];
        })
      : e,
  px = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (s, i) => {
      n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(s) {
        let i = n.get(s);
        if (i !== void 0) return i;
        if ((i = r.get(s)) !== void 0) return o(s, i), i;
      },
      set(s, i) {
        n.has(s) ? n.set(s, i) : o(s, i);
      },
    };
  },
  ym = "!",
  hx = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      s = t.length,
      i = (l) => {
        const a = [];
        let u = 0,
          d = 0,
          f;
        for (let w = 0; w < l.length; w++) {
          let g = l[w];
          if (u === 0) {
            if (g === o && (r || l.slice(w, w + s) === t)) {
              a.push(l.slice(d, w)), (d = w + s);
              continue;
            }
            if (g === "/") {
              f = w;
              continue;
            }
          }
          g === "[" ? u++ : g === "]" && u--;
        }
        const h = a.length === 0 ? l : l.substring(d),
          p = h.startsWith(ym),
          S = p ? h.substring(1) : h,
          y = f && f > d ? f - d : void 0;
        return {
          modifiers: a,
          hasImportantModifier: p,
          baseClassName: S,
          maybePostfixModifierPosition: y,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: i }) : i;
  },
  mx = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  gx = (e) => ({ cache: px(e.cacheSize), parseClassName: hx(e), ...ax(e) }),
  vx = /\s+/,
  yx = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      s = [],
      i = e.trim().split(vx);
    let l = "";
    for (let a = i.length - 1; a >= 0; a -= 1) {
      const u = i[a],
        {
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: h,
          maybePostfixModifierPosition: p,
        } = n(u);
      let S = !!p,
        y = r(S ? h.substring(0, p) : h);
      if (!y) {
        if (!S) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((y = r(h)), !y)) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        S = !1;
      }
      const w = mx(d).join(":"),
        g = f ? w + ym : w,
        m = g + y;
      if (s.includes(m)) continue;
      s.push(m);
      const v = o(y, S);
      for (let C = 0; C < v.length; ++C) {
        const E = v[C];
        s.push(g + E);
      }
      l = u + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function xx() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = xm(t)) && (r && (r += " "), (r += n));
  return r;
}
const xm = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = xm(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function wx(e, ...t) {
  let n,
    r,
    o,
    s = i;
  function i(a) {
    const u = t.reduce((d, f) => f(d), e());
    return (n = gx(u)), (r = n.cache.get), (o = n.cache.set), (s = l), l(a);
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const d = yx(a, n);
    return o(a, d), d;
  }
  return function () {
    return s(xx.apply(null, arguments));
  };
}
const re = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  wm = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Sx = /^\d+\/\d+$/,
  Cx = new Set(["px", "full", "screen"]),
  Ex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  kx =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  bx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Nx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  jx =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  It = (e) => zr(e) || Cx.has(e) || Sx.test(e),
  an = (e) => lo(e, "length", Ax),
  zr = (e) => !!e && !Number.isNaN(Number(e)),
  Vl = (e) => lo(e, "number", zr),
  Co = (e) => !!e && Number.isInteger(Number(e)),
  Px = (e) => e.endsWith("%") && zr(e.slice(0, -1)),
  V = (e) => wm.test(e),
  un = (e) => Ex.test(e),
  Tx = new Set(["length", "size", "percentage"]),
  Rx = (e) => lo(e, Tx, Sm),
  Lx = (e) => lo(e, "position", Sm),
  Ox = new Set(["image", "url"]),
  Mx = (e) => lo(e, Ox, Ix),
  _x = (e) => lo(e, "", Dx),
  Eo = () => !0,
  lo = (e, t, n) => {
    const r = wm.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  Ax = (e) => kx.test(e) && !bx.test(e),
  Sm = () => !1,
  Dx = (e) => Nx.test(e),
  Ix = (e) => jx.test(e),
  zx = () => {
    const e = re("colors"),
      t = re("spacing"),
      n = re("blur"),
      r = re("brightness"),
      o = re("borderColor"),
      s = re("borderRadius"),
      i = re("borderSpacing"),
      l = re("borderWidth"),
      a = re("contrast"),
      u = re("grayscale"),
      d = re("hueRotate"),
      f = re("invert"),
      h = re("gap"),
      p = re("gradientColorStops"),
      S = re("gradientColorStopPositions"),
      y = re("inset"),
      w = re("margin"),
      g = re("opacity"),
      m = re("padding"),
      v = re("saturate"),
      C = re("scale"),
      E = re("sepia"),
      k = re("skew"),
      b = re("space"),
      T = re("translate"),
      _ = () => ["auto", "contain", "none"],
      O = () => ["auto", "hidden", "clip", "visible", "scroll"],
      $ = () => ["auto", V, t],
      I = () => [V, t],
      K = () => ["", It, an],
      A = () => ["auto", zr, V],
      H = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      B = () => ["solid", "dashed", "dotted", "double", "none"],
      Q = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      j = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      P = () => ["", "0", V],
      M = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      F = () => [zr, V];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Eo],
        spacing: [It, an],
        blur: ["none", "", un, V],
        brightness: F(),
        borderColor: [e],
        borderRadius: ["none", "", "full", un, V],
        borderSpacing: I(),
        borderWidth: K(),
        contrast: F(),
        grayscale: P(),
        hueRotate: F(),
        invert: P(),
        gap: I(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Px, an],
        inset: $(),
        margin: $(),
        opacity: F(),
        padding: I(),
        saturate: F(),
        scale: F(),
        sepia: P(),
        skew: F(),
        space: I(),
        translate: I(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", V] }],
        container: ["container"],
        columns: [{ columns: [un] }],
        "break-after": [{ "break-after": M() }],
        "break-before": [{ "break-before": M() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...H(), V] }],
        overflow: [{ overflow: O() }],
        "overflow-x": [{ "overflow-x": O() }],
        "overflow-y": [{ "overflow-y": O() }],
        overscroll: [{ overscroll: _() }],
        "overscroll-x": [{ "overscroll-x": _() }],
        "overscroll-y": [{ "overscroll-y": _() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [y] }],
        "inset-x": [{ "inset-x": [y] }],
        "inset-y": [{ "inset-y": [y] }],
        start: [{ start: [y] }],
        end: [{ end: [y] }],
        top: [{ top: [y] }],
        right: [{ right: [y] }],
        bottom: [{ bottom: [y] }],
        left: [{ left: [y] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Co, V] }],
        basis: [{ basis: $() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", V] }],
        grow: [{ grow: P() }],
        shrink: [{ shrink: P() }],
        order: [{ order: ["first", "last", "none", Co, V] }],
        "grid-cols": [{ "grid-cols": [Eo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Co, V] }, V] }],
        "col-start": [{ "col-start": A() }],
        "col-end": [{ "col-end": A() }],
        "grid-rows": [{ "grid-rows": [Eo] }],
        "row-start-end": [{ row: ["auto", { span: [Co, V] }, V] }],
        "row-start": [{ "row-start": A() }],
        "row-end": [{ "row-end": A() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", V] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", V] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...j()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...j(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...j(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [m] }],
        px: [{ px: [m] }],
        py: [{ py: [m] }],
        ps: [{ ps: [m] }],
        pe: [{ pe: [m] }],
        pt: [{ pt: [m] }],
        pr: [{ pr: [m] }],
        pb: [{ pb: [m] }],
        pl: [{ pl: [m] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [b] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [b] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", V, t] }],
        "min-w": [{ "min-w": [V, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              V,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [un] },
              un,
            ],
          },
        ],
        h: [{ h: [V, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [V, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", un, an] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Vl,
            ],
          },
        ],
        "font-family": [{ font: [Eo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              V,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", zr, Vl] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              It,
              V,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", V] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", V] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [g] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [g] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...B(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", It, an] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", It, V] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: I() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              V,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", V] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [g] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...H(), Lx] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Rx] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Mx,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [S] }],
        "gradient-via-pos": [{ via: [S] }],
        "gradient-to-pos": [{ to: [S] }],
        "gradient-from": [{ from: [p] }],
        "gradient-via": [{ via: [p] }],
        "gradient-to": [{ to: [p] }],
        rounded: [{ rounded: [s] }],
        "rounded-s": [{ "rounded-s": [s] }],
        "rounded-e": [{ "rounded-e": [s] }],
        "rounded-t": [{ "rounded-t": [s] }],
        "rounded-r": [{ "rounded-r": [s] }],
        "rounded-b": [{ "rounded-b": [s] }],
        "rounded-l": [{ "rounded-l": [s] }],
        "rounded-ss": [{ "rounded-ss": [s] }],
        "rounded-se": [{ "rounded-se": [s] }],
        "rounded-ee": [{ "rounded-ee": [s] }],
        "rounded-es": [{ "rounded-es": [s] }],
        "rounded-tl": [{ "rounded-tl": [s] }],
        "rounded-tr": [{ "rounded-tr": [s] }],
        "rounded-br": [{ "rounded-br": [s] }],
        "rounded-bl": [{ "rounded-bl": [s] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [g] }],
        "border-style": [{ border: [...B(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [g] }],
        "divide-style": [{ divide: B() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...B()] }],
        "outline-offset": [{ "outline-offset": [It, V] }],
        "outline-w": [{ outline: [It, an] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: K() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [g] }],
        "ring-offset-w": [{ "ring-offset": [It, an] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", un, _x] }],
        "shadow-color": [{ shadow: [Eo] }],
        opacity: [{ opacity: [g] }],
        "mix-blend": [{ "mix-blend": [...Q(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": Q() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", un, V] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [v] }],
        sepia: [{ sepia: [E] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [g] }],
        "backdrop-saturate": [{ "backdrop-saturate": [v] }],
        "backdrop-sepia": [{ "backdrop-sepia": [E] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              V,
            ],
          },
        ],
        duration: [{ duration: F() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", V] }],
        delay: [{ delay: F() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", V] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [C] }],
        "scale-x": [{ "scale-x": [C] }],
        "scale-y": [{ "scale-y": [C] }],
        rotate: [{ rotate: [Co, V] }],
        "translate-x": [{ "translate-x": [T] }],
        "translate-y": [{ "translate-y": [T] }],
        "skew-x": [{ "skew-x": [k] }],
        "skew-y": [{ "skew-y": [k] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              V,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              V,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": I() }],
        "scroll-mx": [{ "scroll-mx": I() }],
        "scroll-my": [{ "scroll-my": I() }],
        "scroll-ms": [{ "scroll-ms": I() }],
        "scroll-me": [{ "scroll-me": I() }],
        "scroll-mt": [{ "scroll-mt": I() }],
        "scroll-mr": [{ "scroll-mr": I() }],
        "scroll-mb": [{ "scroll-mb": I() }],
        "scroll-ml": [{ "scroll-ml": I() }],
        "scroll-p": [{ "scroll-p": I() }],
        "scroll-px": [{ "scroll-px": I() }],
        "scroll-py": [{ "scroll-py": I() }],
        "scroll-ps": [{ "scroll-ps": I() }],
        "scroll-pe": [{ "scroll-pe": I() }],
        "scroll-pt": [{ "scroll-pt": I() }],
        "scroll-pr": [{ "scroll-pr": I() }],
        "scroll-pb": [{ "scroll-pb": I() }],
        "scroll-pl": [{ "scroll-pl": I() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", V] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [It, an, Vl] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Fx = wx(zx);
function Jt(...e) {
  return Fx(hm(e));
}
const $x = tx,
  Cm = x.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(lm, {
      ref: n,
      className: Jt(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
Cm.displayName = lm.displayName;
const Bx = mm(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  Em = x.forwardRef(({ className: e, variant: t, ...n }, r) =>
    c.jsx(am, { ref: r, className: Jt(Bx({ variant: t }), e), ...n })
  );
Em.displayName = am.displayName;
const Ux = x.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(dm, {
    ref: n,
    className: Jt(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t,
  })
);
Ux.displayName = dm.displayName;
const km = x.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(fm, {
    ref: n,
    className: Jt(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: c.jsx(lx, { className: "h-4 w-4" }),
  })
);
km.displayName = fm.displayName;
const bm = x.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(um, { ref: n, className: Jt("text-sm font-semibold", e), ...t })
);
bm.displayName = um.displayName;
const Nm = x.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(cm, { ref: n, className: Jt("text-sm opacity-90", e), ...t })
);
Nm.displayName = cm.displayName;
function Wx() {
  const { toasts: e } = a0();
  return c.jsxs($x, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...s }) {
        return c.jsxs(
          Em,
          {
            ...s,
            children: [
              c.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && c.jsx(bm, { children: n }),
                  r && c.jsx(Nm, { children: r }),
                ],
              }),
              o,
              c.jsx(km, {}),
            ],
          },
          t
        );
      }),
      c.jsx(Cm, {}),
    ],
  });
}
var Ud = ["light", "dark"],
  Vx = "(prefers-color-scheme: dark)",
  Hx = x.createContext(void 0),
  Qx = { setTheme: (e) => {}, themes: [] },
  Kx = () => {
    var e;
    return (e = x.useContext(Hx)) != null ? e : Qx;
  };
x.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: s,
    value: i,
    attrs: l,
    nonce: a,
  }) => {
    let u = s === "system",
      d =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${l
              .map((S) => `'${S}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      f = o
        ? Ud.includes(s) && s
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      h = (S, y = !1, w = !0) => {
        let g = i ? i[S] : S,
          m = y ? S + "|| ''" : `'${g}'`,
          v = "";
        return (
          o &&
            w &&
            !y &&
            Ud.includes(S) &&
            (v += `d.style.colorScheme = '${S}';`),
          n === "class"
            ? y || g
              ? (v += `c.add(${m})`)
              : (v += "null")
            : g && (v += `d[s](n,${m})`),
          v
        );
      },
      p = e
        ? `!function(){${d}${h(e)}}()`
        : r
        ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Vx}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h(
            "dark"
          )}}else{${h("light")}}}else if(e){${
            i ? `var x=${JSON.stringify(i)};` : ""
          }${h(i ? "x[e]" : "e", !0)}}${
            u ? "" : "else{" + h(s, !1, !1) + "}"
          }${f}}catch(e){}}()`
        : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${
            i ? `var x=${JSON.stringify(i)};` : ""
          }${h(i ? "x[e]" : "e", !0)}}else{${h(
            s,
            !1,
            !1
          )};}${f}}catch(t){}}();`;
    return x.createElement("script", {
      nonce: a,
      dangerouslySetInnerHTML: { __html: p },
    });
  }
);
var Yx = (e) => {
    switch (e) {
      case "success":
        return Xx;
      case "info":
        return Jx;
      case "warning":
        return Zx;
      case "error":
        return ew;
      default:
        return null;
    }
  },
  Gx = Array(12).fill(0),
  qx = ({ visible: e, className: t }) =>
    L.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      L.createElement(
        "div",
        { className: "sonner-spinner" },
        Gx.map((n, r) =>
          L.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          })
        )
      )
    ),
  Xx = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  Zx = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  Jx = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  ew = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  tw = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    L.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    L.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  nw = () => {
    let [e, t] = L.useState(document.hidden);
    return (
      L.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Qa = 1,
  rw = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Qa++,
            s = this.toasts.find((l) => l.id === o),
            i = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            s
              ? (this.toasts = this.toasts.map((l) =>
                  l.id === o
                    ? (this.publish({ ...l, ...e, id: o, title: n }),
                      { ...l, ...e, id: o, dismissible: i, title: n })
                    : l
                ))
              : this.addToast({ title: n, ...r, dismissible: i, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0,
            s,
            i = r
              .then(async (a) => {
                if (((s = ["resolve", a]), L.isValidElement(a)))
                  (o = !1), this.create({ id: n, type: "default", message: a });
                else if (sw(a) && !a.ok) {
                  o = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${a.status}`)
                        : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${a.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: d,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(a)
                        : t.success,
                    d =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: d,
                  });
                }
              })
              .catch(async (a) => {
                if (((s = ["reject", a]), t.error !== void 0)) {
                  o = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(a) : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: d,
                  });
                }
              })
              .finally(() => {
                var a;
                o && (this.dismiss(n), (n = void 0)),
                  (a = t.finally) == null || a.call(t);
              }),
            l = () =>
              new Promise((a, u) =>
                i.then(() => (s[0] === "reject" ? u(s[1]) : a(s[1]))).catch(u)
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: l }
            : Object.assign(n, { unwrap: l });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Qa++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  ze = new rw(),
  ow = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Qa++;
    return ze.addToast({ title: e, ...t, id: n }), n;
  },
  sw = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  iw = ow,
  lw = () => ze.toasts,
  aw = () => ze.getActiveToasts();
Object.assign(
  iw,
  {
    success: ze.success,
    info: ze.info,
    warning: ze.warning,
    error: ze.error,
    custom: ze.custom,
    message: ze.message,
    promise: ze.promise,
    dismiss: ze.dismiss,
    loading: ze.loading,
  },
  { getHistory: lw, getToasts: aw }
);
function uw(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
uw(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Us(e) {
  return e.label !== void 0;
}
var cw = 3,
  dw = "32px",
  fw = "16px",
  Wd = 4e3,
  pw = 356,
  hw = 14,
  mw = 20,
  gw = 200;
function ft(...e) {
  return e.filter(Boolean).join(" ");
}
function vw(e) {
  let [t, n] = e.split("-"),
    r = [];
  return t && r.push(t), n && r.push(n), r;
}
var yw = (e) => {
  var t, n, r, o, s, i, l, a, u, d, f;
  let {
      invert: h,
      toast: p,
      unstyled: S,
      interacting: y,
      setHeights: w,
      visibleToasts: g,
      heights: m,
      index: v,
      toasts: C,
      expanded: E,
      removeToast: k,
      defaultRichColors: b,
      closeButton: T,
      style: _,
      cancelButtonStyle: O,
      actionButtonStyle: $,
      className: I = "",
      descriptionClassName: K = "",
      duration: A,
      position: H,
      gap: B,
      loadingIcon: Q,
      expandByDefault: j,
      classNames: P,
      icons: M,
      closeButtonAriaLabel: F = "Close toast",
      pauseWhenPageIsHidden: z,
    } = e,
    [Y, q] = L.useState(null),
    [he, be] = L.useState(null),
    [J, fr] = L.useState(!1),
    [en, Un] = L.useState(!1),
    [tn, pr] = L.useState(!1),
    [nn, xs] = L.useState(!1),
    [cl, ws] = L.useState(!1),
    [dl, fo] = L.useState(0),
    [hr, vc] = L.useState(0),
    po = L.useRef(p.duration || A || Wd),
    yc = L.useRef(null),
    Wn = L.useRef(null),
    Cg = v === 0,
    Eg = v + 1 <= g,
    Je = p.type,
    mr = p.dismissible !== !1,
    kg = p.className || "",
    bg = p.descriptionClassName || "",
    Ss = L.useMemo(
      () => m.findIndex((U) => U.toastId === p.id) || 0,
      [m, p.id]
    ),
    Ng = L.useMemo(() => {
      var U;
      return (U = p.closeButton) != null ? U : T;
    }, [p.closeButton, T]),
    xc = L.useMemo(() => p.duration || A || Wd, [p.duration, A]),
    fl = L.useRef(0),
    gr = L.useRef(0),
    wc = L.useRef(0),
    vr = L.useRef(null),
    [jg, Pg] = H.split("-"),
    Sc = L.useMemo(
      () => m.reduce((U, te, ie) => (ie >= Ss ? U : U + te.height), 0),
      [m, Ss]
    ),
    Cc = nw(),
    Tg = p.invert || h,
    pl = Je === "loading";
  (gr.current = L.useMemo(() => Ss * B + Sc, [Ss, Sc])),
    L.useEffect(() => {
      po.current = xc;
    }, [xc]),
    L.useEffect(() => {
      fr(!0);
    }, []),
    L.useEffect(() => {
      let U = Wn.current;
      if (U) {
        let te = U.getBoundingClientRect().height;
        return (
          vc(te),
          w((ie) => [
            { toastId: p.id, height: te, position: p.position },
            ...ie,
          ]),
          () => w((ie) => ie.filter((at) => at.toastId !== p.id))
        );
      }
    }, [w, p.id]),
    L.useLayoutEffect(() => {
      if (!J) return;
      let U = Wn.current,
        te = U.style.height;
      U.style.height = "auto";
      let ie = U.getBoundingClientRect().height;
      (U.style.height = te),
        vc(ie),
        w((at) =>
          at.find((ut) => ut.toastId === p.id)
            ? at.map((ut) => (ut.toastId === p.id ? { ...ut, height: ie } : ut))
            : [{ toastId: p.id, height: ie, position: p.position }, ...at]
        );
    }, [J, p.title, p.description, w, p.id]);
  let rn = L.useCallback(() => {
    Un(!0),
      fo(gr.current),
      w((U) => U.filter((te) => te.toastId !== p.id)),
      setTimeout(() => {
        k(p);
      }, gw);
  }, [p, k, w, gr]);
  L.useEffect(() => {
    if (
      (p.promise && Je === "loading") ||
      p.duration === 1 / 0 ||
      p.type === "loading"
    )
      return;
    let U;
    return (
      E || y || (z && Cc)
        ? (() => {
            if (wc.current < fl.current) {
              let te = new Date().getTime() - fl.current;
              po.current = po.current - te;
            }
            wc.current = new Date().getTime();
          })()
        : po.current !== 1 / 0 &&
          ((fl.current = new Date().getTime()),
          (U = setTimeout(() => {
            var te;
            (te = p.onAutoClose) == null || te.call(p, p), rn();
          }, po.current))),
      () => clearTimeout(U)
    );
  }, [E, y, p, Je, z, Cc, rn]),
    L.useEffect(() => {
      p.delete && rn();
    }, [rn, p.delete]);
  function Rg() {
    var U, te, ie;
    return M != null && M.loading
      ? L.createElement(
          "div",
          {
            className: ft(
              P == null ? void 0 : P.loader,
              (U = p == null ? void 0 : p.classNames) == null
                ? void 0
                : U.loader,
              "sonner-loader"
            ),
            "data-visible": Je === "loading",
          },
          M.loading
        )
      : Q
      ? L.createElement(
          "div",
          {
            className: ft(
              P == null ? void 0 : P.loader,
              (te = p == null ? void 0 : p.classNames) == null
                ? void 0
                : te.loader,
              "sonner-loader"
            ),
            "data-visible": Je === "loading",
          },
          Q
        )
      : L.createElement(qx, {
          className: ft(
            P == null ? void 0 : P.loader,
            (ie = p == null ? void 0 : p.classNames) == null
              ? void 0
              : ie.loader
          ),
          visible: Je === "loading",
        });
  }
  return L.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Wn,
      className: ft(
        I,
        kg,
        P == null ? void 0 : P.toast,
        (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast,
        P == null ? void 0 : P.default,
        P == null ? void 0 : P[Je],
        (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[Je]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = p.richColors) != null ? r : b,
      "data-styled": !(p.jsx || p.unstyled || S),
      "data-mounted": J,
      "data-promise": !!p.promise,
      "data-swiped": cl,
      "data-removed": en,
      "data-visible": Eg,
      "data-y-position": jg,
      "data-x-position": Pg,
      "data-index": v,
      "data-front": Cg,
      "data-swiping": tn,
      "data-dismissible": mr,
      "data-type": Je,
      "data-invert": Tg,
      "data-swipe-out": nn,
      "data-swipe-direction": he,
      "data-expanded": !!(E || (j && J)),
      style: {
        "--index": v,
        "--toasts-before": v,
        "--z-index": C.length - v,
        "--offset": `${en ? dl : gr.current}px`,
        "--initial-height": j ? "auto" : `${hr}px`,
        ..._,
        ...p.style,
      },
      onDragEnd: () => {
        pr(!1), q(null), (vr.current = null);
      },
      onPointerDown: (U) => {
        pl ||
          !mr ||
          ((yc.current = new Date()),
          fo(gr.current),
          U.target.setPointerCapture(U.pointerId),
          U.target.tagName !== "BUTTON" &&
            (pr(!0), (vr.current = { x: U.clientX, y: U.clientY })));
      },
      onPointerUp: () => {
        var U, te, ie, at;
        if (nn || !mr) return;
        vr.current = null;
        let ut = Number(
            ((U = Wn.current) == null
              ? void 0
              : U.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          on = Number(
            ((te = Wn.current) == null
              ? void 0
              : te.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          Vn =
            new Date().getTime() -
            ((ie = yc.current) == null ? void 0 : ie.getTime()),
          ct = Y === "x" ? ut : on,
          sn = Math.abs(ct) / Vn;
        if (Math.abs(ct) >= mw || sn > 0.11) {
          fo(gr.current),
            (at = p.onDismiss) == null || at.call(p, p),
            be(
              Y === "x" ? (ut > 0 ? "right" : "left") : on > 0 ? "down" : "up"
            ),
            rn(),
            xs(!0),
            ws(!1);
          return;
        }
        pr(!1), q(null);
      },
      onPointerMove: (U) => {
        var te, ie, at, ut;
        if (
          !vr.current ||
          !mr ||
          ((te = window.getSelection()) == null
            ? void 0
            : te.toString().length) > 0
        )
          return;
        let on = U.clientY - vr.current.y,
          Vn = U.clientX - vr.current.x,
          ct = (ie = e.swipeDirections) != null ? ie : vw(H);
        !Y &&
          (Math.abs(Vn) > 1 || Math.abs(on) > 1) &&
          q(Math.abs(Vn) > Math.abs(on) ? "x" : "y");
        let sn = { x: 0, y: 0 };
        Y === "y"
          ? (ct.includes("top") || ct.includes("bottom")) &&
            ((ct.includes("top") && on < 0) ||
              (ct.includes("bottom") && on > 0)) &&
            (sn.y = on)
          : Y === "x" &&
            (ct.includes("left") || ct.includes("right")) &&
            ((ct.includes("left") && Vn < 0) ||
              (ct.includes("right") && Vn > 0)) &&
            (sn.x = Vn),
          (Math.abs(sn.x) > 0 || Math.abs(sn.y) > 0) && ws(!0),
          (at = Wn.current) == null ||
            at.style.setProperty("--swipe-amount-x", `${sn.x}px`),
          (ut = Wn.current) == null ||
            ut.style.setProperty("--swipe-amount-y", `${sn.y}px`);
      },
    },
    Ng && !p.jsx
      ? L.createElement(
          "button",
          {
            "aria-label": F,
            "data-disabled": pl,
            "data-close-button": !0,
            onClick:
              pl || !mr
                ? () => {}
                : () => {
                    var U;
                    rn(), (U = p.onDismiss) == null || U.call(p, p);
                  },
            className: ft(
              P == null ? void 0 : P.closeButton,
              (o = p == null ? void 0 : p.classNames) == null
                ? void 0
                : o.closeButton
            ),
          },
          (s = M == null ? void 0 : M.close) != null ? s : tw
        )
      : null,
    p.jsx || x.isValidElement(p.title)
      ? p.jsx
        ? p.jsx
        : typeof p.title == "function"
        ? p.title()
        : p.title
      : L.createElement(
          L.Fragment,
          null,
          Je || p.icon || p.promise
            ? L.createElement(
                "div",
                {
                  "data-icon": "",
                  className: ft(
                    P == null ? void 0 : P.icon,
                    (i = p == null ? void 0 : p.classNames) == null
                      ? void 0
                      : i.icon
                  ),
                },
                p.promise || (p.type === "loading" && !p.icon)
                  ? p.icon || Rg()
                  : null,
                p.type !== "loading"
                  ? p.icon || (M == null ? void 0 : M[Je]) || Yx(Je)
                  : null
              )
            : null,
          L.createElement(
            "div",
            {
              "data-content": "",
              className: ft(
                P == null ? void 0 : P.content,
                (l = p == null ? void 0 : p.classNames) == null
                  ? void 0
                  : l.content
              ),
            },
            L.createElement(
              "div",
              {
                "data-title": "",
                className: ft(
                  P == null ? void 0 : P.title,
                  (a = p == null ? void 0 : p.classNames) == null
                    ? void 0
                    : a.title
                ),
              },
              typeof p.title == "function" ? p.title() : p.title
            ),
            p.description
              ? L.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: ft(
                      K,
                      bg,
                      P == null ? void 0 : P.description,
                      (u = p == null ? void 0 : p.classNames) == null
                        ? void 0
                        : u.description
                    ),
                  },
                  typeof p.description == "function"
                    ? p.description()
                    : p.description
                )
              : null
          ),
          x.isValidElement(p.cancel)
            ? p.cancel
            : p.cancel && Us(p.cancel)
            ? L.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: p.cancelButtonStyle || O,
                  onClick: (U) => {
                    var te, ie;
                    Us(p.cancel) &&
                      mr &&
                      ((ie = (te = p.cancel).onClick) == null || ie.call(te, U),
                      rn());
                  },
                  className: ft(
                    P == null ? void 0 : P.cancelButton,
                    (d = p == null ? void 0 : p.classNames) == null
                      ? void 0
                      : d.cancelButton
                  ),
                },
                p.cancel.label
              )
            : null,
          x.isValidElement(p.action)
            ? p.action
            : p.action && Us(p.action)
            ? L.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: p.actionButtonStyle || $,
                  onClick: (U) => {
                    var te, ie;
                    Us(p.action) &&
                      ((ie = (te = p.action).onClick) == null || ie.call(te, U),
                      !U.defaultPrevented && rn());
                  },
                  className: ft(
                    P == null ? void 0 : P.actionButton,
                    (f = p == null ? void 0 : p.classNames) == null
                      ? void 0
                      : f.actionButton
                  ),
                },
                p.action.label
              )
            : null
        )
  );
};
function Vd() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function xw(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, o) => {
      let s = o === 1,
        i = s ? "--mobile-offset" : "--offset",
        l = s ? fw : dw;
      function a(u) {
        ["top", "right", "bottom", "left"].forEach((d) => {
          n[`${i}-${d}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? a(r)
        : typeof r == "object"
        ? ["top", "right", "bottom", "left"].forEach((u) => {
            r[u] === void 0
              ? (n[`${i}-${u}`] = l)
              : (n[`${i}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]);
          })
        : a(l);
    }),
    n
  );
}
var ww = x.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: o = ["altKey", "KeyT"],
      expand: s,
      closeButton: i,
      className: l,
      offset: a,
      mobileOffset: u,
      theme: d = "light",
      richColors: f,
      duration: h,
      style: p,
      visibleToasts: S = cw,
      toastOptions: y,
      dir: w = Vd(),
      gap: g = hw,
      loadingIcon: m,
      icons: v,
      containerAriaLabel: C = "Notifications",
      pauseWhenPageIsHidden: E,
    } = e,
    [k, b] = L.useState([]),
    T = L.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(k.filter((z) => z.position).map((z) => z.position))
          )
        ),
      [k, r]
    ),
    [_, O] = L.useState([]),
    [$, I] = L.useState(!1),
    [K, A] = L.useState(!1),
    [H, B] = L.useState(
      d !== "system"
        ? d
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    Q = L.useRef(null),
    j = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    P = L.useRef(null),
    M = L.useRef(!1),
    F = L.useCallback((z) => {
      b((Y) => {
        var q;
        return (
          ((q = Y.find((he) => he.id === z.id)) != null && q.delete) ||
            ze.dismiss(z.id),
          Y.filter(({ id: he }) => he !== z.id)
        );
      });
    }, []);
  return (
    L.useEffect(
      () =>
        ze.subscribe((z) => {
          if (z.dismiss) {
            b((Y) => Y.map((q) => (q.id === z.id ? { ...q, delete: !0 } : q)));
            return;
          }
          setTimeout(() => {
            Fh.flushSync(() => {
              b((Y) => {
                let q = Y.findIndex((he) => he.id === z.id);
                return q !== -1
                  ? [...Y.slice(0, q), { ...Y[q], ...z }, ...Y.slice(q + 1)]
                  : [z, ...Y];
              });
            });
          });
        }),
      []
    ),
    L.useEffect(() => {
      if (d !== "system") {
        B(d);
        return;
      }
      if (
        (d === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? B("dark")
            : B("light")),
        typeof window > "u")
      )
        return;
      let z = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        z.addEventListener("change", ({ matches: Y }) => {
          B(Y ? "dark" : "light");
        });
      } catch {
        z.addListener(({ matches: q }) => {
          try {
            B(q ? "dark" : "light");
          } catch (he) {
            console.error(he);
          }
        });
      }
    }, [d]),
    L.useEffect(() => {
      k.length <= 1 && I(!1);
    }, [k]),
    L.useEffect(() => {
      let z = (Y) => {
        var q, he;
        o.every((be) => Y[be] || Y.code === be) &&
          (I(!0), (q = Q.current) == null || q.focus()),
          Y.code === "Escape" &&
            (document.activeElement === Q.current ||
              ((he = Q.current) != null &&
                he.contains(document.activeElement))) &&
            I(!1);
      };
      return (
        document.addEventListener("keydown", z),
        () => document.removeEventListener("keydown", z)
      );
    }, [o]),
    L.useEffect(() => {
      if (Q.current)
        return () => {
          P.current &&
            (P.current.focus({ preventScroll: !0 }),
            (P.current = null),
            (M.current = !1));
        };
    }, [Q.current]),
    L.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${C} ${j}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      T.map((z, Y) => {
        var q;
        let [he, be] = z.split("-");
        return k.length
          ? L.createElement(
              "ol",
              {
                key: z,
                dir: w === "auto" ? Vd() : w,
                tabIndex: -1,
                ref: Q,
                className: l,
                "data-sonner-toaster": !0,
                "data-theme": H,
                "data-y-position": he,
                "data-lifted": $ && k.length > 1 && !s,
                "data-x-position": be,
                style: {
                  "--front-toast-height": `${
                    ((q = _[0]) == null ? void 0 : q.height) || 0
                  }px`,
                  "--width": `${pw}px`,
                  "--gap": `${g}px`,
                  ...p,
                  ...xw(a, u),
                },
                onBlur: (J) => {
                  M.current &&
                    !J.currentTarget.contains(J.relatedTarget) &&
                    ((M.current = !1),
                    P.current &&
                      (P.current.focus({ preventScroll: !0 }),
                      (P.current = null)));
                },
                onFocus: (J) => {
                  (J.target instanceof HTMLElement &&
                    J.target.dataset.dismissible === "false") ||
                    M.current ||
                    ((M.current = !0), (P.current = J.relatedTarget));
                },
                onMouseEnter: () => I(!0),
                onMouseMove: () => I(!0),
                onMouseLeave: () => {
                  K || I(!1);
                },
                onDragEnd: () => I(!1),
                onPointerDown: (J) => {
                  (J.target instanceof HTMLElement &&
                    J.target.dataset.dismissible === "false") ||
                    A(!0);
                },
                onPointerUp: () => A(!1),
              },
              k
                .filter((J) => (!J.position && Y === 0) || J.position === z)
                .map((J, fr) => {
                  var en, Un;
                  return L.createElement(yw, {
                    key: J.id,
                    icons: v,
                    index: fr,
                    toast: J,
                    defaultRichColors: f,
                    duration:
                      (en = y == null ? void 0 : y.duration) != null ? en : h,
                    className: y == null ? void 0 : y.className,
                    descriptionClassName:
                      y == null ? void 0 : y.descriptionClassName,
                    invert: n,
                    visibleToasts: S,
                    closeButton:
                      (Un = y == null ? void 0 : y.closeButton) != null
                        ? Un
                        : i,
                    interacting: K,
                    position: z,
                    style: y == null ? void 0 : y.style,
                    unstyled: y == null ? void 0 : y.unstyled,
                    classNames: y == null ? void 0 : y.classNames,
                    cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                    actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                    removeToast: F,
                    toasts: k.filter((tn) => tn.position == J.position),
                    heights: _.filter((tn) => tn.position == J.position),
                    setHeights: O,
                    expandByDefault: s,
                    gap: g,
                    loadingIcon: m,
                    expanded: $,
                    pauseWhenPageIsHidden: E,
                    swipeDirections: e.swipeDirections,
                  });
                })
            )
          : null;
      })
    )
  );
});
const Sw = ({ ...e }) => {
    const { theme: t = "system" } = Kx();
    return c.jsx(ww, {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  Cw = ["top", "right", "bottom", "left"],
  Dn = Math.min,
  Qe = Math.max,
  Li = Math.round,
  Ws = Math.floor,
  _t = (e) => ({ x: e, y: e }),
  Ew = { left: "right", right: "left", bottom: "top", top: "bottom" },
  kw = { start: "end", end: "start" };
function Ka(e, t, n) {
  return Qe(e, Dn(t, n));
}
function qt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xt(e) {
  return e.split("-")[0];
}
function ao(e) {
  return e.split("-")[1];
}
function rc(e) {
  return e === "x" ? "y" : "x";
}
function oc(e) {
  return e === "y" ? "height" : "width";
}
function Ht(e) {
  return ["top", "bottom"].includes(Xt(e)) ? "y" : "x";
}
function sc(e) {
  return rc(Ht(e));
}
function bw(e, t, n) {
  n === void 0 && (n = !1);
  const r = ao(e),
    o = sc(e),
    s = oc(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[s] > t.floating[s] && (i = Oi(i)), [i, Oi(i)];
}
function Nw(e) {
  const t = Oi(e);
  return [Ya(e), t, Ya(t)];
}
function Ya(e) {
  return e.replace(/start|end/g, (t) => kw[t]);
}
function jw(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    s = ["top", "bottom"],
    i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function Pw(e, t, n, r) {
  const o = ao(e);
  let s = jw(Xt(e), n === "start", r);
  return (
    o && ((s = s.map((i) => i + "-" + o)), t && (s = s.concat(s.map(Ya)))), s
  );
}
function Oi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ew[t]);
}
function Tw(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function jm(e) {
  return typeof e != "number"
    ? Tw(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Mi(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Hd(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = Ht(t),
    i = sc(t),
    l = oc(i),
    a = Xt(t),
    u = s === "y",
    d = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    h = r[l] / 2 - o[l] / 2;
  let p;
  switch (a) {
    case "top":
      p = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      p = { x: d, y: r.y + r.height };
      break;
    case "right":
      p = { x: r.x + r.width, y: f };
      break;
    case "left":
      p = { x: r.x - o.width, y: f };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (ao(t)) {
    case "start":
      p[i] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      p[i] += h * (n && u ? -1 : 1);
      break;
  }
  return p;
}
const Rw = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: i,
    } = n,
    l = s.filter(Boolean),
    a = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: f } = Hd(u, r, a),
    h = r,
    p = {},
    S = 0;
  for (let y = 0; y < l.length; y++) {
    const { name: w, fn: g } = l[y],
      {
        x: m,
        y: v,
        data: C,
        reset: E,
      } = await g({
        x: d,
        y: f,
        initialPlacement: r,
        placement: h,
        strategy: o,
        middlewareData: p,
        rects: u,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (d = m ?? d),
      (f = v ?? f),
      (p = { ...p, [w]: { ...p[w], ...C } }),
      E &&
        S <= 50 &&
        (S++,
        typeof E == "object" &&
          (E.placement && (h = E.placement),
          E.rects &&
            (u =
              E.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : E.rects),
          ({ x: d, y: f } = Hd(u, h, a))),
        (y = -1));
  }
  return { x: d, y: f, placement: h, strategy: o, middlewareData: p };
};
async function ts(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: l, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: f = "floating",
      altBoundary: h = !1,
      padding: p = 0,
    } = qt(t, e),
    S = jm(p),
    w = l[h ? (f === "floating" ? "reference" : "floating") : f],
    g = Mi(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: d,
        strategy: a,
      })
    ),
    m =
      f === "floating"
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    v = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(l.floating)),
    C = (await (s.isElement == null ? void 0 : s.isElement(v)))
      ? (await (s.getScale == null ? void 0 : s.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = Mi(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: m,
            offsetParent: v,
            strategy: a,
          })
        : m
    );
  return {
    top: (g.top - E.top + S.top) / C.y,
    bottom: (E.bottom - g.bottom + S.bottom) / C.y,
    left: (g.left - E.left + S.left) / C.x,
    right: (E.right - g.right + S.right) / C.x,
  };
}
const Lw = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: s,
          platform: i,
          elements: l,
          middlewareData: a,
        } = t,
        { element: u, padding: d = 0 } = qt(e, t) || {};
      if (u == null) return {};
      const f = jm(d),
        h = { x: n, y: r },
        p = sc(o),
        S = oc(p),
        y = await i.getDimensions(u),
        w = p === "y",
        g = w ? "top" : "left",
        m = w ? "bottom" : "right",
        v = w ? "clientHeight" : "clientWidth",
        C = s.reference[S] + s.reference[p] - h[p] - s.floating[S],
        E = h[p] - s.reference[p],
        k = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
      let b = k ? k[v] : 0;
      (!b || !(await (i.isElement == null ? void 0 : i.isElement(k)))) &&
        (b = l.floating[v] || s.floating[S]);
      const T = C / 2 - E / 2,
        _ = b / 2 - y[S] / 2 - 1,
        O = Dn(f[g], _),
        $ = Dn(f[m], _),
        I = O,
        K = b - y[S] - $,
        A = b / 2 - y[S] / 2 + T,
        H = Ka(I, A, K),
        B =
          !a.arrow &&
          ao(o) != null &&
          A !== H &&
          s.reference[S] / 2 - (A < I ? O : $) - y[S] / 2 < 0,
        Q = B ? (A < I ? A - I : A - K) : 0;
      return {
        [p]: h[p] + Q,
        data: {
          [p]: H,
          centerOffset: A - H - Q,
          ...(B && { alignmentOffset: Q }),
        },
        reset: B,
      };
    },
  }),
  Ow = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: s,
              rects: i,
              initialPlacement: l,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: f = !0,
              fallbackPlacements: h,
              fallbackStrategy: p = "bestFit",
              fallbackAxisSideDirection: S = "none",
              flipAlignment: y = !0,
              ...w
            } = qt(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const g = Xt(o),
            m = Ht(l),
            v = Xt(l) === l,
            C = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            E = h || (v || !y ? [Oi(l)] : Nw(l)),
            k = S !== "none";
          !h && k && E.push(...Pw(l, y, S, C));
          const b = [l, ...E],
            T = await ts(t, w),
            _ = [];
          let O = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((d && _.push(T[g]), f)) {
            const H = bw(o, i, C);
            _.push(T[H[0]], T[H[1]]);
          }
          if (
            ((O = [...O, { placement: o, overflows: _ }]),
            !_.every((H) => H <= 0))
          ) {
            var $, I;
            const H = ((($ = s.flip) == null ? void 0 : $.index) || 0) + 1,
              B = b[H];
            if (B) {
              var K;
              const j = f === "alignment" ? m !== Ht(B) : !1,
                P = ((K = O[0]) == null ? void 0 : K.overflows[0]) > 0;
              if (!j || P)
                return {
                  data: { index: H, overflows: O },
                  reset: { placement: B },
                };
            }
            let Q =
              (I = O.filter((j) => j.overflows[0] <= 0).sort(
                (j, P) => j.overflows[1] - P.overflows[1]
              )[0]) == null
                ? void 0
                : I.placement;
            if (!Q)
              switch (p) {
                case "bestFit": {
                  var A;
                  const j =
                    (A = O.filter((P) => {
                      if (k) {
                        const M = Ht(P.placement);
                        return M === m || M === "y";
                      }
                      return !0;
                    })
                      .map((P) => [
                        P.placement,
                        P.overflows
                          .filter((M) => M > 0)
                          .reduce((M, F) => M + F, 0),
                      ])
                      .sort((P, M) => P[1] - M[1])[0]) == null
                      ? void 0
                      : A[0];
                  j && (Q = j);
                  break;
                }
                case "initialPlacement":
                  Q = l;
                  break;
              }
            if (o !== Q) return { reset: { placement: Q } };
          }
          return {};
        },
      }
    );
  };
function Qd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Kd(e) {
  return Cw.some((t) => e[t] >= 0);
}
const Mw = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = qt(e, t);
        switch (r) {
          case "referenceHidden": {
            const s = await ts(t, { ...o, elementContext: "reference" }),
              i = Qd(s, n.reference);
            return {
              data: { referenceHiddenOffsets: i, referenceHidden: Kd(i) },
            };
          }
          case "escaped": {
            const s = await ts(t, { ...o, altBoundary: !0 }),
              i = Qd(s, n.floating);
            return { data: { escapedOffsets: i, escaped: Kd(i) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function _w(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = Xt(n),
    l = ao(n),
    a = Ht(n) === "y",
    u = ["left", "top"].includes(i) ? -1 : 1,
    d = s && a ? -1 : 1,
    f = qt(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: S,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    l && typeof S == "number" && (p = l === "end" ? S * -1 : S),
    a ? { x: p * d, y: h * u } : { x: h * u, y: p * d }
  );
}
const Aw = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: s, placement: i, middlewareData: l } = t,
            a = await _w(t, e);
          return i === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: s + a.y, data: { ...a, placement: i } };
        },
      }
    );
  },
  Dw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: s = !0,
              crossAxis: i = !1,
              limiter: l = {
                fn: (w) => {
                  let { x: g, y: m } = w;
                  return { x: g, y: m };
                },
              },
              ...a
            } = qt(e, t),
            u = { x: n, y: r },
            d = await ts(t, a),
            f = Ht(Xt(o)),
            h = rc(f);
          let p = u[h],
            S = u[f];
          if (s) {
            const w = h === "y" ? "top" : "left",
              g = h === "y" ? "bottom" : "right",
              m = p + d[w],
              v = p - d[g];
            p = Ka(m, p, v);
          }
          if (i) {
            const w = f === "y" ? "top" : "left",
              g = f === "y" ? "bottom" : "right",
              m = S + d[w],
              v = S - d[g];
            S = Ka(m, S, v);
          }
          const y = l.fn({ ...t, [h]: p, [f]: S });
          return {
            ...y,
            data: { x: y.x - n, y: y.y - r, enabled: { [h]: s, [f]: i } },
          };
        },
      }
    );
  },
  Iw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = qt(e, t),
            d = { x: n, y: r },
            f = Ht(o),
            h = rc(f);
          let p = d[h],
            S = d[f];
          const y = qt(l, t),
            w =
              typeof y == "number"
                ? { mainAxis: y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...y };
          if (a) {
            const v = h === "y" ? "height" : "width",
              C = s.reference[h] - s.floating[v] + w.mainAxis,
              E = s.reference[h] + s.reference[v] - w.mainAxis;
            p < C ? (p = C) : p > E && (p = E);
          }
          if (u) {
            var g, m;
            const v = h === "y" ? "width" : "height",
              C = ["top", "left"].includes(Xt(o)),
              E =
                s.reference[f] -
                s.floating[v] +
                ((C && ((g = i.offset) == null ? void 0 : g[f])) || 0) +
                (C ? 0 : w.crossAxis),
              k =
                s.reference[f] +
                s.reference[v] +
                (C ? 0 : ((m = i.offset) == null ? void 0 : m[f]) || 0) -
                (C ? w.crossAxis : 0);
            S < E ? (S = E) : S > k && (S = k);
          }
          return { [h]: p, [f]: S };
        },
      }
    );
  },
  zw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: s, platform: i, elements: l } = t,
            { apply: a = () => {}, ...u } = qt(e, t),
            d = await ts(t, u),
            f = Xt(o),
            h = ao(o),
            p = Ht(o) === "y",
            { width: S, height: y } = s.floating;
          let w, g;
          f === "top" || f === "bottom"
            ? ((w = f),
              (g =
                h ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((g = f), (w = h === "end" ? "top" : "bottom"));
          const m = y - d.top - d.bottom,
            v = S - d.left - d.right,
            C = Dn(y - d[w], m),
            E = Dn(S - d[g], v),
            k = !t.middlewareData.shift;
          let b = C,
            T = E;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (T = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (b = m),
            k && !h)
          ) {
            const O = Qe(d.left, 0),
              $ = Qe(d.right, 0),
              I = Qe(d.top, 0),
              K = Qe(d.bottom, 0);
            p
              ? (T = S - 2 * (O !== 0 || $ !== 0 ? O + $ : Qe(d.left, d.right)))
              : (b =
                  y - 2 * (I !== 0 || K !== 0 ? I + K : Qe(d.top, d.bottom)));
          }
          await a({ ...t, availableWidth: T, availableHeight: b });
          const _ = await i.getDimensions(l.floating);
          return S !== _.width || y !== _.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function nl() {
  return typeof window < "u";
}
function uo(e) {
  return Pm(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ge(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Dt(e) {
  var t;
  return (t = (Pm(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Pm(e) {
  return nl() ? e instanceof Node || e instanceof Ge(e).Node : !1;
}
function kt(e) {
  return nl() ? e instanceof Element || e instanceof Ge(e).Element : !1;
}
function At(e) {
  return nl() ? e instanceof HTMLElement || e instanceof Ge(e).HTMLElement : !1;
}
function Yd(e) {
  return !nl() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Ge(e).ShadowRoot;
}
function gs(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = bt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function Fw(e) {
  return ["table", "td", "th"].includes(uo(e));
}
function rl(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function ic(e) {
  const t = lc(),
    n = kt(e) ? bt(e) : e;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((r) =>
      n[r] ? n[r] !== "none" : !1
    ) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (r) => (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function $w(e) {
  let t = In(e);
  for (; At(t) && !no(t); ) {
    if (ic(t)) return t;
    if (rl(t)) return null;
    t = In(t);
  }
  return null;
}
function lc() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function no(e) {
  return ["html", "body", "#document"].includes(uo(e));
}
function bt(e) {
  return Ge(e).getComputedStyle(e);
}
function ol(e) {
  return kt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function In(e) {
  if (uo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Yd(e) && e.host) || Dt(e);
  return Yd(t) ? t.host : t;
}
function Tm(e) {
  const t = In(e);
  return no(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : At(t) && gs(t)
    ? t
    : Tm(t);
}
function ns(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Tm(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = Ge(o);
  if (s) {
    const l = Ga(i);
    return t.concat(
      i,
      i.visualViewport || [],
      gs(o) ? o : [],
      l && n ? ns(l) : []
    );
  }
  return t.concat(o, ns(o, [], n));
}
function Ga(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Rm(e) {
  const t = bt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = At(e),
    s = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    l = Li(n) !== s || Li(r) !== i;
  return l && ((n = s), (r = i)), { width: n, height: r, $: l };
}
function ac(e) {
  return kt(e) ? e : e.contextElement;
}
function Fr(e) {
  const t = ac(e);
  if (!At(t)) return _t(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = Rm(t);
  let i = (s ? Li(n.width) : n.width) / r,
    l = (s ? Li(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: i, y: l }
  );
}
const Bw = _t(0);
function Lm(e) {
  const t = Ge(e);
  return !lc() || !t.visualViewport
    ? Bw
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Uw(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Ge(e)) ? !1 : t;
}
function ar(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    s = ac(e);
  let i = _t(1);
  t && (r ? kt(r) && (i = Fr(r)) : (i = Fr(e)));
  const l = Uw(s, n, r) ? Lm(s) : _t(0);
  let a = (o.left + l.x) / i.x,
    u = (o.top + l.y) / i.y,
    d = o.width / i.x,
    f = o.height / i.y;
  if (s) {
    const h = Ge(s),
      p = r && kt(r) ? Ge(r) : r;
    let S = h,
      y = Ga(S);
    for (; y && r && p !== S; ) {
      const w = Fr(y),
        g = y.getBoundingClientRect(),
        m = bt(y),
        v = g.left + (y.clientLeft + parseFloat(m.paddingLeft)) * w.x,
        C = g.top + (y.clientTop + parseFloat(m.paddingTop)) * w.y;
      (a *= w.x),
        (u *= w.y),
        (d *= w.x),
        (f *= w.y),
        (a += v),
        (u += C),
        (S = Ge(y)),
        (y = Ga(S));
    }
  }
  return Mi({ width: d, height: f, x: a, y: u });
}
function uc(e, t) {
  const n = ol(e).scrollLeft;
  return t ? t.left + n : ar(Dt(e)).left + n;
}
function Om(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : uc(e, r)),
    s = r.top + t.scrollTop;
  return { x: o, y: s };
}
function Ww(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === "fixed",
    i = Dt(r),
    l = t ? rl(t.floating) : !1;
  if (r === i || (l && s)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = _t(1);
  const d = _t(0),
    f = At(r);
  if (
    (f || (!f && !s)) &&
    ((uo(r) !== "body" || gs(i)) && (a = ol(r)), At(r))
  ) {
    const p = ar(r);
    (u = Fr(r)), (d.x = p.x + r.clientLeft), (d.y = p.y + r.clientTop);
  }
  const h = i && !f && !s ? Om(i, a, !0) : _t(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + d.x + h.x,
    y: n.y * u.y - a.scrollTop * u.y + d.y + h.y,
  };
}
function Vw(e) {
  return Array.from(e.getClientRects());
}
function Hw(e) {
  const t = Dt(e),
    n = ol(e),
    r = e.ownerDocument.body,
    o = Qe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = Qe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + uc(e);
  const l = -n.scrollTop;
  return (
    bt(r).direction === "rtl" && (i += Qe(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: i, y: l }
  );
}
function Qw(e, t) {
  const n = Ge(e),
    r = Dt(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    i = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    (s = o.width), (i = o.height);
    const u = lc();
    (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: s, height: i, x: l, y: a };
}
function Kw(e, t) {
  const n = ar(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = At(e) ? Fr(e) : _t(1),
    i = e.clientWidth * s.x,
    l = e.clientHeight * s.y,
    a = o * s.x,
    u = r * s.y;
  return { width: i, height: l, x: a, y: u };
}
function Gd(e, t, n) {
  let r;
  if (t === "viewport") r = Qw(e, n);
  else if (t === "document") r = Hw(Dt(e));
  else if (kt(t)) r = Kw(t, n);
  else {
    const o = Lm(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Mi(r);
}
function Mm(e, t) {
  const n = In(e);
  return n === t || !kt(n) || no(n)
    ? !1
    : bt(n).position === "fixed" || Mm(n, t);
}
function Yw(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = ns(e, [], !1).filter((l) => kt(l) && uo(l) !== "body"),
    o = null;
  const s = bt(e).position === "fixed";
  let i = s ? In(e) : e;
  for (; kt(i) && !no(i); ) {
    const l = bt(i),
      a = ic(i);
    !a && l.position === "fixed" && (o = null),
      (
        s
          ? !a && !o
          : (!a &&
              l.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (gs(i) && !a && Mm(e, i))
      )
        ? (r = r.filter((d) => d !== i))
        : (o = l),
      (i = In(i));
  }
  return t.set(e, r), r;
}
function Gw(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === "clippingAncestors"
        ? rl(t)
          ? []
          : Yw(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = i[0],
    a = i.reduce((u, d) => {
      const f = Gd(t, d, o);
      return (
        (u.top = Qe(f.top, u.top)),
        (u.right = Dn(f.right, u.right)),
        (u.bottom = Dn(f.bottom, u.bottom)),
        (u.left = Qe(f.left, u.left)),
        u
      );
    }, Gd(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function qw(e) {
  const { width: t, height: n } = Rm(e);
  return { width: t, height: n };
}
function Xw(e, t, n) {
  const r = At(t),
    o = Dt(t),
    s = n === "fixed",
    i = ar(e, !0, s, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = _t(0);
  function u() {
    a.x = uc(o);
  }
  if (r || (!r && !s))
    if (((uo(t) !== "body" || gs(o)) && (l = ol(t)), r)) {
      const p = ar(t, !0, s, t);
      (a.x = p.x + t.clientLeft), (a.y = p.y + t.clientTop);
    } else o && u();
  s && !r && o && u();
  const d = o && !r && !s ? Om(o, l) : _t(0),
    f = i.left + l.scrollLeft - a.x - d.x,
    h = i.top + l.scrollTop - a.y - d.y;
  return { x: f, y: h, width: i.width, height: i.height };
}
function Hl(e) {
  return bt(e).position === "static";
}
function qd(e, t) {
  if (!At(e) || bt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Dt(e) === n && (n = n.ownerDocument.body), n;
}
function _m(e, t) {
  const n = Ge(e);
  if (rl(e)) return n;
  if (!At(e)) {
    let o = In(e);
    for (; o && !no(o); ) {
      if (kt(o) && !Hl(o)) return o;
      o = In(o);
    }
    return n;
  }
  let r = qd(e, t);
  for (; r && Fw(r) && Hl(r); ) r = qd(r, t);
  return r && no(r) && Hl(r) && !ic(r) ? n : r || $w(e) || n;
}
const Zw = async function (e) {
  const t = this.getOffsetParent || _m,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: Xw(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Jw(e) {
  return bt(e).direction === "rtl";
}
const e1 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ww,
  getDocumentElement: Dt,
  getClippingRect: Gw,
  getOffsetParent: _m,
  getElementRects: Zw,
  getClientRects: Vw,
  getDimensions: qw,
  getScale: Fr,
  isElement: kt,
  isRTL: Jw,
};
function Am(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function t1(e, t) {
  let n = null,
    r;
  const o = Dt(e);
  function s() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function i(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), s();
    const u = e.getBoundingClientRect(),
      { left: d, top: f, width: h, height: p } = u;
    if ((l || t(), !h || !p)) return;
    const S = Ws(f),
      y = Ws(o.clientWidth - (d + h)),
      w = Ws(o.clientHeight - (f + p)),
      g = Ws(d),
      v = {
        rootMargin: -S + "px " + -y + "px " + -w + "px " + -g + "px",
        threshold: Qe(0, Dn(1, a)) || 1,
      };
    let C = !0;
    function E(k) {
      const b = k[0].intersectionRatio;
      if (b !== a) {
        if (!C) return i();
        b
          ? i(!1, b)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      b === 1 && !Am(u, e.getBoundingClientRect()) && i(), (C = !1);
    }
    try {
      n = new IntersectionObserver(E, { ...v, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(E, v);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function n1(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = ac(e),
    d = o || s ? [...(u ? ns(u) : []), ...ns(t)] : [];
  d.forEach((g) => {
    o && g.addEventListener("scroll", n, { passive: !0 }),
      s && g.addEventListener("resize", n);
  });
  const f = u && l ? t1(u, n) : null;
  let h = -1,
    p = null;
  i &&
    ((p = new ResizeObserver((g) => {
      let [m] = g;
      m &&
        m.target === u &&
        p &&
        (p.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var v;
          (v = p) == null || v.observe(t);
        }))),
        n();
    })),
    u && !a && p.observe(u),
    p.observe(t));
  let S,
    y = a ? ar(e) : null;
  a && w();
  function w() {
    const g = ar(e);
    y && !Am(y, g) && n(), (y = g), (S = requestAnimationFrame(w));
  }
  return (
    n(),
    () => {
      var g;
      d.forEach((m) => {
        o && m.removeEventListener("scroll", n),
          s && m.removeEventListener("resize", n);
      }),
        f == null || f(),
        (g = p) == null || g.disconnect(),
        (p = null),
        a && cancelAnimationFrame(S);
    }
  );
}
const r1 = Aw,
  o1 = Dw,
  s1 = Ow,
  i1 = zw,
  l1 = Mw,
  Xd = Lw,
  a1 = Iw,
  u1 = (e, t, n) => {
    const r = new Map(),
      o = { platform: e1, ...n },
      s = { ...o.platform, _c: r };
    return Rw(e, t, { ...o, platform: s });
  };
var si = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function _i(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!_i(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !_i(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Dm(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Zd(e, t) {
  const n = Dm(e);
  return Math.round(t * n) / n;
}
function Ql(e) {
  const t = x.useRef(e);
  return (
    si(() => {
      t.current = e;
    }),
    t
  );
}
function c1(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: s, floating: i } = {},
      transform: l = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [d, f] = x.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, p] = x.useState(r);
  _i(h, r) || p(r);
  const [S, y] = x.useState(null),
    [w, g] = x.useState(null),
    m = x.useCallback((j) => {
      j !== k.current && ((k.current = j), y(j));
    }, []),
    v = x.useCallback((j) => {
      j !== b.current && ((b.current = j), g(j));
    }, []),
    C = s || S,
    E = i || w,
    k = x.useRef(null),
    b = x.useRef(null),
    T = x.useRef(d),
    _ = a != null,
    O = Ql(a),
    $ = Ql(o),
    I = Ql(u),
    K = x.useCallback(() => {
      if (!k.current || !b.current) return;
      const j = { placement: t, strategy: n, middleware: h };
      $.current && (j.platform = $.current),
        u1(k.current, b.current, j).then((P) => {
          const M = { ...P, isPositioned: I.current !== !1 };
          A.current &&
            !_i(T.current, M) &&
            ((T.current = M),
            hs.flushSync(() => {
              f(M);
            }));
        });
    }, [h, t, n, $, I]);
  si(() => {
    u === !1 &&
      T.current.isPositioned &&
      ((T.current.isPositioned = !1), f((j) => ({ ...j, isPositioned: !1 })));
  }, [u]);
  const A = x.useRef(!1);
  si(
    () => (
      (A.current = !0),
      () => {
        A.current = !1;
      }
    ),
    []
  ),
    si(() => {
      if ((C && (k.current = C), E && (b.current = E), C && E)) {
        if (O.current) return O.current(C, E, K);
        K();
      }
    }, [C, E, K, O, _]);
  const H = x.useMemo(
      () => ({ reference: k, floating: b, setReference: m, setFloating: v }),
      [m, v]
    ),
    B = x.useMemo(() => ({ reference: C, floating: E }), [C, E]),
    Q = x.useMemo(() => {
      const j = { position: n, left: 0, top: 0 };
      if (!B.floating) return j;
      const P = Zd(B.floating, d.x),
        M = Zd(B.floating, d.y);
      return l
        ? {
            ...j,
            transform: "translate(" + P + "px, " + M + "px)",
            ...(Dm(B.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: P, top: M };
    }, [n, l, B.floating, d.x, d.y]);
  return x.useMemo(
    () => ({ ...d, update: K, refs: H, elements: B, floatingStyles: Q }),
    [d, K, H, B, Q]
  );
}
const d1 = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Xd({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? Xd({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  f1 = (e, t) => ({ ...r1(e), options: [e, t] }),
  p1 = (e, t) => ({ ...o1(e), options: [e, t] }),
  h1 = (e, t) => ({ ...a1(e), options: [e, t] }),
  m1 = (e, t) => ({ ...s1(e), options: [e, t] }),
  g1 = (e, t) => ({ ...i1(e), options: [e, t] }),
  v1 = (e, t) => ({ ...l1(e), options: [e, t] }),
  y1 = (e, t) => ({ ...d1(e), options: [e, t] });
var x1 = "Arrow",
  Im = x.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...s } = e;
    return c.jsx(Ve.svg, {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : c.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Im.displayName = x1;
var w1 = Im;
function S1(e) {
  const [t, n] = x.useState(void 0);
  return (
    An(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const s = o[0];
          let i, l;
          if ("borderBoxSize" in s) {
            const a = s.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            (i = u.inlineSize), (l = u.blockSize);
          } else (i = e.offsetWidth), (l = e.offsetHeight);
          n({ width: i, height: l });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var zm = "Popper",
  [Fm, $m] = Ji(zm),
  [qS, Bm] = Fm(zm),
  Um = "PopperAnchor",
  Wm = x.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      s = Bm(Um, n),
      i = x.useRef(null),
      l = Et(t, i);
    return (
      x.useEffect(() => {
        s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
      }),
      r ? null : c.jsx(Ve.div, { ...o, ref: l })
    );
  });
Wm.displayName = Um;
var cc = "PopperContent",
  [C1, E1] = Fm(cc),
  Vm = x.forwardRef((e, t) => {
    var J, fr, en, Un, tn, pr;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: s = "center",
        alignOffset: i = 0,
        arrowPadding: l = 0,
        avoidCollisions: a = !0,
        collisionBoundary: u = [],
        collisionPadding: d = 0,
        sticky: f = "partial",
        hideWhenDetached: h = !1,
        updatePositionStrategy: p = "optimized",
        onPlaced: S,
        ...y
      } = e,
      w = Bm(cc, n),
      [g, m] = x.useState(null),
      v = Et(t, (nn) => m(nn)),
      [C, E] = x.useState(null),
      k = S1(C),
      b = (k == null ? void 0 : k.width) ?? 0,
      T = (k == null ? void 0 : k.height) ?? 0,
      _ = r + (s !== "center" ? "-" + s : ""),
      O =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      $ = Array.isArray(u) ? u : [u],
      I = $.length > 0,
      K = { padding: O, boundary: $.filter(b1), altBoundary: I },
      {
        refs: A,
        floatingStyles: H,
        placement: B,
        isPositioned: Q,
        middlewareData: j,
      } = c1({
        strategy: "fixed",
        placement: _,
        whileElementsMounted: (...nn) =>
          n1(...nn, { animationFrame: p === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          f1({ mainAxis: o + T, alignmentAxis: i }),
          a &&
            p1({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? h1() : void 0,
              ...K,
            }),
          a && m1({ ...K }),
          g1({
            ...K,
            apply: ({
              elements: nn,
              rects: xs,
              availableWidth: cl,
              availableHeight: ws,
            }) => {
              const { width: dl, height: fo } = xs.reference,
                hr = nn.floating.style;
              hr.setProperty("--radix-popper-available-width", `${cl}px`),
                hr.setProperty("--radix-popper-available-height", `${ws}px`),
                hr.setProperty("--radix-popper-anchor-width", `${dl}px`),
                hr.setProperty("--radix-popper-anchor-height", `${fo}px`);
            },
          }),
          C && y1({ element: C, padding: l }),
          N1({ arrowWidth: b, arrowHeight: T }),
          h && v1({ strategy: "referenceHidden", ...K }),
        ],
      }),
      [P, M] = Km(B),
      F = _n(S);
    An(() => {
      Q && (F == null || F());
    }, [Q, F]);
    const z = (J = j.arrow) == null ? void 0 : J.x,
      Y = (fr = j.arrow) == null ? void 0 : fr.y,
      q = ((en = j.arrow) == null ? void 0 : en.centerOffset) !== 0,
      [he, be] = x.useState();
    return (
      An(() => {
        g && be(window.getComputedStyle(g).zIndex);
      }, [g]),
      c.jsx("div", {
        ref: A.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: Q ? H.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: he,
          "--radix-popper-transform-origin": [
            (Un = j.transformOrigin) == null ? void 0 : Un.x,
            (tn = j.transformOrigin) == null ? void 0 : tn.y,
          ].join(" "),
          ...(((pr = j.hide) == null ? void 0 : pr.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: c.jsx(C1, {
          scope: n,
          placedSide: P,
          onArrowChange: E,
          arrowX: z,
          arrowY: Y,
          shouldHideArrow: q,
          children: c.jsx(Ve.div, {
            "data-side": P,
            "data-align": M,
            ...y,
            ref: v,
            style: { ...y.style, animation: Q ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Vm.displayName = cc;
var Hm = "PopperArrow",
  k1 = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Qm = x.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      s = E1(Hm, r),
      i = k1[s.placedSide];
    return c.jsx("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [i]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[s.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[s.placedSide],
        visibility: s.shouldHideArrow ? "hidden" : void 0,
      },
      children: c.jsx(w1, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
Qm.displayName = Hm;
function b1(e) {
  return e !== null;
}
var N1 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, g, m;
    const { placement: n, rects: r, middlewareData: o } = t,
      i = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
      l = i ? 0 : e.arrowWidth,
      a = i ? 0 : e.arrowHeight,
      [u, d] = Km(n),
      f = { start: "0%", center: "50%", end: "100%" }[d],
      h = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + l / 2,
      p = (((m = o.arrow) == null ? void 0 : m.y) ?? 0) + a / 2;
    let S = "",
      y = "";
    return (
      u === "bottom"
        ? ((S = i ? f : `${h}px`), (y = `${-a}px`))
        : u === "top"
        ? ((S = i ? f : `${h}px`), (y = `${r.floating.height + a}px`))
        : u === "right"
        ? ((S = `${-a}px`), (y = i ? f : `${p}px`))
        : u === "left" &&
          ((S = `${r.floating.width + a}px`), (y = i ? f : `${p}px`)),
      { data: { x: S, y } }
    );
  },
});
function Km(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var j1 = Wm,
  P1 = Vm,
  T1 = Qm,
  [sl, XS] = Ji("Tooltip", [$m]),
  dc = $m(),
  Ym = "TooltipProvider",
  R1 = 700,
  Jd = "tooltip.open",
  [L1, Gm] = sl(Ym),
  qm = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = R1,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: s,
      } = e,
      i = x.useRef(!0),
      l = x.useRef(!1),
      a = x.useRef(0);
    return (
      x.useEffect(() => {
        const u = a.current;
        return () => window.clearTimeout(u);
      }, []),
      c.jsx(L1, {
        scope: t,
        isOpenDelayedRef: i,
        delayDuration: n,
        onOpen: x.useCallback(() => {
          window.clearTimeout(a.current), (i.current = !1);
        }, []),
        onClose: x.useCallback(() => {
          window.clearTimeout(a.current),
            (a.current = window.setTimeout(() => (i.current = !0), r));
        }, [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: x.useCallback((u) => {
          l.current = u;
        }, []),
        disableHoverableContent: o,
        children: s,
      })
    );
  };
qm.displayName = Ym;
var Xm = "Tooltip",
  [ZS, il] = sl(Xm),
  qa = "TooltipTrigger",
  O1 = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = il(qa, n),
      s = Gm(qa, n),
      i = dc(n),
      l = x.useRef(null),
      a = Et(t, l, o.onTriggerChange),
      u = x.useRef(!1),
      d = x.useRef(!1),
      f = x.useCallback(() => (u.current = !1), []);
    return (
      x.useEffect(
        () => () => document.removeEventListener("pointerup", f),
        [f]
      ),
      c.jsx(j1, {
        asChild: !0,
        ...i,
        children: c.jsx(Ve.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: a,
          onPointerMove: ye(e.onPointerMove, (h) => {
            h.pointerType !== "touch" &&
              !d.current &&
              !s.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (d.current = !0));
          }),
          onPointerLeave: ye(e.onPointerLeave, () => {
            o.onTriggerLeave(), (d.current = !1);
          }),
          onPointerDown: ye(e.onPointerDown, () => {
            o.open && o.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", f, { once: !0 });
          }),
          onFocus: ye(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: ye(e.onBlur, o.onClose),
          onClick: ye(e.onClick, o.onClose),
        }),
      })
    );
  });
O1.displayName = qa;
var M1 = "TooltipPortal",
  [JS, _1] = sl(M1, { forceMount: void 0 }),
  ro = "TooltipContent",
  Zm = x.forwardRef((e, t) => {
    const n = _1(ro, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...s } = e,
      i = il(ro, e.__scopeTooltip);
    return c.jsx(Xu, {
      present: r || i.open,
      children: i.disableHoverableContent
        ? c.jsx(Jm, { side: o, ...s, ref: t })
        : c.jsx(A1, { side: o, ...s, ref: t }),
    });
  }),
  A1 = x.forwardRef((e, t) => {
    const n = il(ro, e.__scopeTooltip),
      r = Gm(ro, e.__scopeTooltip),
      o = x.useRef(null),
      s = Et(t, o),
      [i, l] = x.useState(null),
      { trigger: a, onClose: u } = n,
      d = o.current,
      { onPointerInTransitChange: f } = r,
      h = x.useCallback(() => {
        l(null), f(!1);
      }, [f]),
      p = x.useCallback(
        (S, y) => {
          const w = S.currentTarget,
            g = { x: S.clientX, y: S.clientY },
            m = $1(g, w.getBoundingClientRect()),
            v = B1(g, m),
            C = U1(y.getBoundingClientRect()),
            E = V1([...v, ...C]);
          l(E), f(!0);
        },
        [f]
      );
    return (
      x.useEffect(() => () => h(), [h]),
      x.useEffect(() => {
        if (a && d) {
          const S = (w) => p(w, d),
            y = (w) => p(w, a);
          return (
            a.addEventListener("pointerleave", S),
            d.addEventListener("pointerleave", y),
            () => {
              a.removeEventListener("pointerleave", S),
                d.removeEventListener("pointerleave", y);
            }
          );
        }
      }, [a, d, p, h]),
      x.useEffect(() => {
        if (i) {
          const S = (y) => {
            const w = y.target,
              g = { x: y.clientX, y: y.clientY },
              m =
                (a == null ? void 0 : a.contains(w)) ||
                (d == null ? void 0 : d.contains(w)),
              v = !W1(g, i);
            m ? h() : v && (h(), u());
          };
          return (
            document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
          );
        }
      }, [a, d, i, u, h]),
      c.jsx(Jm, { ...e, ref: s })
    );
  }),
  [D1, I1] = sl(Xm, { isInside: !1 }),
  z1 = f0("TooltipContent"),
  Jm = x.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        ...l
      } = e,
      a = il(ro, n),
      u = dc(n),
      { onClose: d } = a;
    return (
      x.useEffect(
        () => (
          document.addEventListener(Jd, d),
          () => document.removeEventListener(Jd, d)
        ),
        [d]
      ),
      x.useEffect(() => {
        if (a.trigger) {
          const f = (h) => {
            const p = h.target;
            p != null && p.contains(a.trigger) && d();
          };
          return (
            window.addEventListener("scroll", f, { capture: !0 }),
            () => window.removeEventListener("scroll", f, { capture: !0 })
          );
        }
      }, [a.trigger, d]),
      c.jsx(qu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: d,
        children: c.jsxs(P1, {
          "data-state": a.stateAttribute,
          ...u,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            c.jsx(z1, { children: r }),
            c.jsx(D1, {
              scope: n,
              isInside: !0,
              children: c.jsx(I0, {
                id: a.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
Zm.displayName = ro;
var eg = "TooltipArrow",
  F1 = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = dc(n);
    return I1(eg, n).isInside ? null : c.jsx(T1, { ...o, ...r, ref: t });
  });
F1.displayName = eg;
function $1(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function B1(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function U1(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function W1(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const l = t[s],
      a = t[i],
      u = l.x,
      d = l.y,
      f = a.x,
      h = a.y;
    d > r != h > r && n < ((f - u) * (r - d)) / (h - d) + u && (o = !o);
  }
  return o;
}
function V1(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    H1(t)
  );
}
function H1(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1],
        i = t[t.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1],
        i = n[n.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var Q1 = qm,
  tg = Zm;
const K1 = Q1,
  Y1 = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    c.jsx(tg, {
      ref: r,
      sideOffset: t,
      className: Jt(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    })
  );
Y1.displayName = tg.displayName;
var ll = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  al = typeof window > "u" || "Deno" in globalThis;
function ht() {}
function G1(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function q1(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function X1(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function ef(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Z1(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function tf(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: s,
    queryKey: i,
    stale: l,
  } = e;
  if (i) {
    if (r) {
      if (t.queryHash !== fc(i, t.options)) return !1;
    } else if (!os(t.queryKey, i)) return !1;
  }
  if (n !== "all") {
    const a = t.isActive();
    if ((n === "active" && !a) || (n === "inactive" && a)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (o && o !== t.state.fetchStatus) ||
    (s && !s(t))
  );
}
function nf(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: s } = e;
  if (s) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (rs(t.options.mutationKey) !== rs(s)) return !1;
    } else if (!os(t.options.mutationKey, s)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function fc(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || rs)(e);
}
function rs(e) {
  return JSON.stringify(e, (t, n) =>
    Xa(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function os(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? Object.keys(t).every((n) => os(e[n], t[n]))
    : !1;
}
function ng(e, t) {
  if (e === t) return e;
  const n = rf(e) && rf(t);
  if (n || (Xa(e) && Xa(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      s = n ? t : Object.keys(t),
      i = s.length,
      l = n ? [] : {};
    let a = 0;
    for (let u = 0; u < i; u++) {
      const d = n ? u : s[u];
      ((!n && r.includes(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((l[d] = void 0), a++)
        : ((l[d] = ng(e[d], t[d])), l[d] === e[d] && e[d] !== void 0 && a++);
    }
    return o === i && a === o ? e : l;
  }
  return t;
}
function rf(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Xa(e) {
  if (!of(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !of(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function of(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function J1(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function e2(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? ng(e, t)
    : t;
}
function t2(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function n2(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var pc = Symbol();
function rg(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === pc
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var qn,
  mn,
  $r,
  vf,
  r2 =
    ((vf = class extends ll {
      constructor() {
        super();
        Z(this, qn);
        Z(this, mn);
        Z(this, $r);
        W(this, $r, (t) => {
          if (!al && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        N(this, mn) || this.setEventListener(N(this, $r));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = N(this, mn)) == null || t.call(this), W(this, mn, void 0));
      }
      setEventListener(t) {
        var n;
        W(this, $r, t),
          (n = N(this, mn)) == null || n.call(this),
          W(
            this,
            mn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        N(this, qn) !== t && (W(this, qn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof N(this, qn) == "boolean"
          ? N(this, qn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (qn = new WeakMap()),
    (mn = new WeakMap()),
    ($r = new WeakMap()),
    vf),
  og = new r2(),
  Br,
  gn,
  Ur,
  yf,
  o2 =
    ((yf = class extends ll {
      constructor() {
        super();
        Z(this, Br, !0);
        Z(this, gn);
        Z(this, Ur);
        W(this, Ur, (t) => {
          if (!al && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        N(this, gn) || this.setEventListener(N(this, Ur));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = N(this, gn)) == null || t.call(this), W(this, gn, void 0));
      }
      setEventListener(t) {
        var n;
        W(this, Ur, t),
          (n = N(this, gn)) == null || n.call(this),
          W(this, gn, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        N(this, Br) !== t &&
          (W(this, Br, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return N(this, Br);
      }
    }),
    (Br = new WeakMap()),
    (gn = new WeakMap()),
    (Ur = new WeakMap()),
    yf),
  Ai = new o2();
function s2() {
  let e, t;
  const n = new Promise((o, s) => {
    (e = o), (t = s);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (o) => {
      r({ status: "fulfilled", value: o }), e(o);
    }),
    (n.reject = (o) => {
      r({ status: "rejected", reason: o }), t(o);
    }),
    n
  );
}
function i2(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function sg(e) {
  return (e ?? "online") === "online" ? Ai.isOnline() : !0;
}
var ig = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Kl(e) {
  return e instanceof ig;
}
function lg(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const s = s2(),
    i = (y) => {
      var w;
      r || (h(new ig(y)), (w = e.abort) == null || w.call(e));
    },
    l = () => {
      t = !0;
    },
    a = () => {
      t = !1;
    },
    u = () =>
      og.isFocused() &&
      (e.networkMode === "always" || Ai.isOnline()) &&
      e.canRun(),
    d = () => sg(e.networkMode) && e.canRun(),
    f = (y) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onSuccess) == null || w.call(e, y),
        o == null || o(),
        s.resolve(y));
    },
    h = (y) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onError) == null || w.call(e, y),
        o == null || o(),
        s.reject(y));
    },
    p = () =>
      new Promise((y) => {
        var w;
        (o = (g) => {
          (r || u()) && y(g);
        }),
          (w = e.onPause) == null || w.call(e);
      }).then(() => {
        var y;
        (o = void 0), r || (y = e.onContinue) == null || y.call(e);
      }),
    S = () => {
      if (r) return;
      let y;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        y = w ?? e.fn();
      } catch (g) {
        y = Promise.reject(g);
      }
      Promise.resolve(y)
        .then(f)
        .catch((g) => {
          var k;
          if (r) return;
          const m = e.retry ?? (al ? 0 : 3),
            v = e.retryDelay ?? i2,
            C = typeof v == "function" ? v(n, g) : v,
            E =
              m === !0 ||
              (typeof m == "number" && n < m) ||
              (typeof m == "function" && m(n, g));
          if (t || !E) {
            h(g);
            return;
          }
          n++,
            (k = e.onFail) == null || k.call(e, n, g),
            J1(C)
              .then(() => (u() ? void 0 : p()))
              .then(() => {
                t ? h(g) : S();
              });
        });
    };
  return {
    promise: s,
    cancel: i,
    continue: () => (o == null || o(), s),
    cancelRetry: l,
    continueRetry: a,
    canStart: d,
    start: () => (d() ? S() : p().then(S), s),
  };
}
var l2 = (e) => setTimeout(e, 0);
function a2() {
  let e = [],
    t = 0,
    n = (l) => {
      l();
    },
    r = (l) => {
      l();
    },
    o = l2;
  const s = (l) => {
      t
        ? e.push(l)
        : o(() => {
            n(l);
          });
    },
    i = () => {
      const l = e;
      (e = []),
        l.length &&
          o(() => {
            r(() => {
              l.forEach((a) => {
                n(a);
              });
            });
          });
    };
  return {
    batch: (l) => {
      let a;
      t++;
      try {
        a = l();
      } finally {
        t--, t || i();
      }
      return a;
    },
    batchCalls:
      (l) =>
      (...a) => {
        s(() => {
          l(...a);
        });
      },
    schedule: s,
    setNotifyFunction: (l) => {
      n = l;
    },
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      o = l;
    },
  };
}
var _e = a2(),
  Xn,
  xf,
  ag =
    ((xf = class {
      constructor() {
        Z(this, Xn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          q1(this.gcTime) &&
            W(
              this,
              Xn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (al ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        N(this, Xn) && (clearTimeout(N(this, Xn)), W(this, Xn, void 0));
      }
    }),
    (Xn = new WeakMap()),
    xf),
  Wr,
  Vr,
  tt,
  Zn,
  Te,
  ls,
  Jn,
  mt,
  zt,
  wf,
  u2 =
    ((wf = class extends ag {
      constructor(t) {
        super();
        Z(this, mt);
        Z(this, Wr);
        Z(this, Vr);
        Z(this, tt);
        Z(this, Zn);
        Z(this, Te);
        Z(this, ls);
        Z(this, Jn);
        W(this, Jn, !1),
          W(this, ls, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          W(this, Zn, t.client),
          W(this, tt, N(this, Zn).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          W(this, Wr, d2(this.options)),
          (this.state = t.state ?? N(this, Wr)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = N(this, Te)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...N(this, ls), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          N(this, tt).remove(this);
      }
      setData(t, n) {
        const r = e2(this.state.data, t, this.options);
        return (
          Ne(this, mt, zt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        Ne(this, mt, zt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = N(this, Te)) == null ? void 0 : r.promise;
        return (
          (o = N(this, Te)) == null || o.cancel(t),
          n ? n.then(ht).catch(ht) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(N(this, Wr));
      }
      isActive() {
        return this.observers.some((t) => Z1(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === pc ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !X1(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = N(this, Te)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = N(this, Te)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          N(this, tt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (N(this, Te) &&
              (N(this, Jn)
                ? N(this, Te).cancel({ revert: !0 })
                : N(this, Te).cancelRetry()),
            this.scheduleGc()),
          N(this, tt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Ne(this, mt, zt).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var a, u, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (N(this, Te))
            return N(this, Te).continueRetry(), N(this, Te).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((h) => h.options.queryFn);
          f && this.setOptions(f.options);
        }
        const r = new AbortController(),
          o = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (W(this, Jn, !0), r.signal),
            });
          },
          s = () => {
            const f = rg(this.options, n),
              h = {
                client: N(this, Zn),
                queryKey: this.queryKey,
                meta: this.meta,
              };
            return (
              o(h),
              W(this, Jn, !1),
              this.options.persister ? this.options.persister(f, h, this) : f(h)
            );
          },
          i = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            client: N(this, Zn),
            state: this.state,
            fetchFn: s,
          };
        o(i),
          (a = this.options.behavior) == null || a.onFetch(i, this),
          W(this, Vr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((u = i.fetchOptions) == null ? void 0 : u.meta)) &&
            Ne(this, mt, zt).call(this, {
              type: "fetch",
              meta: (d = i.fetchOptions) == null ? void 0 : d.meta,
            });
        const l = (f) => {
          var h, p, S, y;
          (Kl(f) && f.silent) ||
            Ne(this, mt, zt).call(this, { type: "error", error: f }),
            Kl(f) ||
              ((p = (h = N(this, tt).config).onError) == null ||
                p.call(h, f, this),
              (y = (S = N(this, tt).config).onSettled) == null ||
                y.call(S, this.state.data, f, this)),
            this.scheduleGc();
        };
        return (
          W(
            this,
            Te,
            lg({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: i.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (f) => {
                var h, p, S, y;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (w) {
                  l(w);
                  return;
                }
                (p = (h = N(this, tt).config).onSuccess) == null ||
                  p.call(h, f, this),
                  (y = (S = N(this, tt).config).onSettled) == null ||
                    y.call(S, f, this.state.error, this),
                  this.scheduleGc();
              },
              onError: l,
              onFail: (f, h) => {
                Ne(this, mt, zt).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: h,
                });
              },
              onPause: () => {
                Ne(this, mt, zt).call(this, { type: "pause" });
              },
              onContinue: () => {
                Ne(this, mt, zt).call(this, { type: "continue" });
              },
              retry: i.options.retry,
              retryDelay: i.options.retryDelay,
              networkMode: i.options.networkMode,
              canRun: () => !0,
            })
          ),
          N(this, Te).start()
        );
      }
    }),
    (Wr = new WeakMap()),
    (Vr = new WeakMap()),
    (tt = new WeakMap()),
    (Zn = new WeakMap()),
    (Te = new WeakMap()),
    (ls = new WeakMap()),
    (Jn = new WeakMap()),
    (mt = new WeakSet()),
    (zt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...c2(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const o = t.error;
            return Kl(o) && o.revert && N(this, Vr)
              ? { ...N(this, Vr), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        _e.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            N(this, tt).notify({ query: this, type: "updated", action: t });
        });
    }),
    wf);
function c2(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: sg(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function d2(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Pt,
  Sf,
  f2 =
    ((Sf = class extends ll {
      constructor(t = {}) {
        super();
        Z(this, Pt);
        (this.config = t), W(this, Pt, new Map());
      }
      build(t, n, r) {
        const o = n.queryKey,
          s = n.queryHash ?? fc(o, n);
        let i = this.get(s);
        return (
          i ||
            ((i = new u2({
              client: t,
              queryKey: o,
              queryHash: s,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(i)),
          i
        );
      }
      add(t) {
        N(this, Pt).has(t.queryHash) ||
          (N(this, Pt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = N(this, Pt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && N(this, Pt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        _e.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return N(this, Pt).get(t);
      }
      getAll() {
        return [...N(this, Pt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => tf(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => tf(t, r)) : n;
      }
      notify(t) {
        _e.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        _e.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        _e.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Pt = new WeakMap()),
    Sf),
  Tt,
  Oe,
  er,
  Rt,
  cn,
  Cf,
  p2 =
    ((Cf = class extends ag {
      constructor(t) {
        super();
        Z(this, Rt);
        Z(this, Tt);
        Z(this, Oe);
        Z(this, er);
        (this.mutationId = t.mutationId),
          W(this, Oe, t.mutationCache),
          W(this, Tt, []),
          (this.state = t.state || h2()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        N(this, Tt).includes(t) ||
          (N(this, Tt).push(t),
          this.clearGcTimeout(),
          N(this, Oe).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        W(
          this,
          Tt,
          N(this, Tt).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          N(this, Oe).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        N(this, Tt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : N(this, Oe).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = N(this, er)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var s, i, l, a, u, d, f, h, p, S, y, w, g, m, v, C, E, k, b, T;
        const n = () => {
          Ne(this, Rt, cn).call(this, { type: "continue" });
        };
        W(
          this,
          er,
          lg({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (_, O) => {
              Ne(this, Rt, cn).call(this, {
                type: "failed",
                failureCount: _,
                error: O,
              });
            },
            onPause: () => {
              Ne(this, Rt, cn).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => N(this, Oe).canRun(this),
          })
        );
        const r = this.state.status === "pending",
          o = !N(this, er).canStart();
        try {
          if (r) n();
          else {
            Ne(this, Rt, cn).call(this, {
              type: "pending",
              variables: t,
              isPaused: o,
            }),
              await ((i = (s = N(this, Oe).config).onMutate) == null
                ? void 0
                : i.call(s, t, this));
            const O = await ((a = (l = this.options).onMutate) == null
              ? void 0
              : a.call(l, t));
            O !== this.state.context &&
              Ne(this, Rt, cn).call(this, {
                type: "pending",
                context: O,
                variables: t,
                isPaused: o,
              });
          }
          const _ = await N(this, er).start();
          return (
            await ((d = (u = N(this, Oe).config).onSuccess) == null
              ? void 0
              : d.call(u, _, t, this.state.context, this)),
            await ((h = (f = this.options).onSuccess) == null
              ? void 0
              : h.call(f, _, t, this.state.context)),
            await ((S = (p = N(this, Oe).config).onSettled) == null
              ? void 0
              : S.call(
                  p,
                  _,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((w = (y = this.options).onSettled) == null
              ? void 0
              : w.call(y, _, null, t, this.state.context)),
            Ne(this, Rt, cn).call(this, { type: "success", data: _ }),
            _
          );
        } catch (_) {
          try {
            throw (
              (await ((m = (g = N(this, Oe).config).onError) == null
                ? void 0
                : m.call(g, _, t, this.state.context, this)),
              await ((C = (v = this.options).onError) == null
                ? void 0
                : C.call(v, _, t, this.state.context)),
              await ((k = (E = N(this, Oe).config).onSettled) == null
                ? void 0
                : k.call(
                    E,
                    void 0,
                    _,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((T = (b = this.options).onSettled) == null
                ? void 0
                : T.call(b, void 0, _, t, this.state.context)),
              _)
            );
          } finally {
            Ne(this, Rt, cn).call(this, { type: "error", error: _ });
          }
        } finally {
          N(this, Oe).runNext(this);
        }
      }
    }),
    (Tt = new WeakMap()),
    (Oe = new WeakMap()),
    (er = new WeakMap()),
    (Rt = new WeakSet()),
    (cn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        _e.batch(() => {
          N(this, Tt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            N(this, Oe).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    Cf);
function h2() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Bt,
  gt,
  as,
  Ef,
  m2 =
    ((Ef = class extends ll {
      constructor(t = {}) {
        super();
        Z(this, Bt);
        Z(this, gt);
        Z(this, as);
        (this.config = t),
          W(this, Bt, new Set()),
          W(this, gt, new Map()),
          W(this, as, 0);
      }
      build(t, n, r) {
        const o = new p2({
          mutationCache: this,
          mutationId: ++Cs(this, as)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(o), o;
      }
      add(t) {
        N(this, Bt).add(t);
        const n = Vs(t);
        if (typeof n == "string") {
          const r = N(this, gt).get(n);
          r ? r.push(t) : N(this, gt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (N(this, Bt).delete(t)) {
          const n = Vs(t);
          if (typeof n == "string") {
            const r = N(this, gt).get(n);
            if (r)
              if (r.length > 1) {
                const o = r.indexOf(t);
                o !== -1 && r.splice(o, 1);
              } else r[0] === t && N(this, gt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = Vs(t);
        if (typeof n == "string") {
          const r = N(this, gt).get(n),
            o =
              r == null ? void 0 : r.find((s) => s.state.status === "pending");
          return !o || o === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = Vs(t);
        if (typeof n == "string") {
          const o =
            (r = N(this, gt).get(n)) == null
              ? void 0
              : r.find((s) => s !== t && s.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        _e.batch(() => {
          N(this, Bt).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            N(this, Bt).clear(),
            N(this, gt).clear();
        });
      }
      getAll() {
        return Array.from(N(this, Bt));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => nf(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => nf(t, n));
      }
      notify(t) {
        _e.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return _e.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(ht)))
        );
      }
    }),
    (Bt = new WeakMap()),
    (gt = new WeakMap()),
    (as = new WeakMap()),
    Ef);
function Vs(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function sf(e) {
  return {
    onFetch: (t, n) => {
      var d, f, h, p, S;
      const r = t.options,
        o =
          (h =
            (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null
              ? void 0
              : f.fetchMore) == null
            ? void 0
            : h.direction,
        s = ((p = t.state.data) == null ? void 0 : p.pages) || [],
        i = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
      let l = { pages: [], pageParams: [] },
        a = 0;
      const u = async () => {
        let y = !1;
        const w = (v) => {
            Object.defineProperty(v, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (y = !0)
                  : t.signal.addEventListener("abort", () => {
                      y = !0;
                    }),
                t.signal
              ),
            });
          },
          g = rg(t.options, t.fetchOptions),
          m = async (v, C, E) => {
            if (y) return Promise.reject();
            if (C == null && v.pages.length) return Promise.resolve(v);
            const k = {
              client: t.client,
              queryKey: t.queryKey,
              pageParam: C,
              direction: E ? "backward" : "forward",
              meta: t.options.meta,
            };
            w(k);
            const b = await g(k),
              { maxPages: T } = t.options,
              _ = E ? n2 : t2;
            return {
              pages: _(v.pages, b, T),
              pageParams: _(v.pageParams, C, T),
            };
          };
        if (o && s.length) {
          const v = o === "backward",
            C = v ? g2 : lf,
            E = { pages: s, pageParams: i },
            k = C(r, E);
          l = await m(E, k, v);
        } else {
          const v = e ?? s.length;
          do {
            const C = a === 0 ? i[0] ?? r.initialPageParam : lf(r, l);
            if (a > 0 && C == null) break;
            (l = await m(l, C)), a++;
          } while (a < v);
        }
        return l;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var y, w;
            return (w = (y = t.options).persister) == null
              ? void 0
              : w.call(
                  y,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function lf(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function g2(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var de,
  vn,
  yn,
  Hr,
  Qr,
  xn,
  Kr,
  Yr,
  kf,
  v2 =
    ((kf = class {
      constructor(e = {}) {
        Z(this, de);
        Z(this, vn);
        Z(this, yn);
        Z(this, Hr);
        Z(this, Qr);
        Z(this, xn);
        Z(this, Kr);
        Z(this, Yr);
        W(this, de, e.queryCache || new f2()),
          W(this, vn, e.mutationCache || new m2()),
          W(this, yn, e.defaultOptions || {}),
          W(this, Hr, new Map()),
          W(this, Qr, new Map()),
          W(this, xn, 0);
      }
      mount() {
        Cs(this, xn)._++,
          N(this, xn) === 1 &&
            (W(
              this,
              Kr,
              og.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), N(this, de).onFocus());
              })
            ),
            W(
              this,
              Yr,
              Ai.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), N(this, de).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        Cs(this, xn)._--,
          N(this, xn) === 0 &&
            ((e = N(this, Kr)) == null || e.call(this),
            W(this, Kr, void 0),
            (t = N(this, Yr)) == null || t.call(this),
            W(this, Yr, void 0));
      }
      isFetching(e) {
        return N(this, de).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return N(this, vn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = N(this, de).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = N(this, de).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(ef(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return N(this, de)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = N(this, de).get(r.queryHash),
          s = o == null ? void 0 : o.state.data,
          i = G1(t, s);
        if (i !== void 0)
          return N(this, de)
            .build(this, r)
            .setData(i, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return _e.batch(() =>
          N(this, de)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = N(this, de).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = N(this, de);
        _e.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = N(this, de);
        return _e.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = _e.batch(() =>
            N(this, de)
              .findAll(e)
              .map((o) => o.cancel(n))
          );
        return Promise.all(r).then(ht).catch(ht);
      }
      invalidateQueries(e, t = {}) {
        return _e.batch(
          () => (
            N(this, de)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t
                )
          )
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = _e.batch(() =>
            N(this, de)
              .findAll(e)
              .filter((o) => !o.isDisabled())
              .map((o) => {
                let s = o.fetch(void 0, n);
                return (
                  n.throwOnError || (s = s.catch(ht)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : s
                );
              })
          );
        return Promise.all(r).then(ht);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = N(this, de).build(this, t);
        return n.isStaleByTime(ef(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(ht).catch(ht);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = sf(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(ht).catch(ht);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = sf(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Ai.isOnline()
          ? N(this, vn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return N(this, de);
      }
      getMutationCache() {
        return N(this, vn);
      }
      getDefaultOptions() {
        return N(this, yn);
      }
      setDefaultOptions(e) {
        W(this, yn, e);
      }
      setQueryDefaults(e, t) {
        N(this, Hr).set(rs(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...N(this, Hr).values()],
          n = {};
        return (
          t.forEach((r) => {
            os(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        N(this, Qr).set(rs(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...N(this, Qr).values()],
          n = {};
        return (
          t.forEach((r) => {
            os(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...N(this, yn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = fc(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === pc && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...N(this, yn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        N(this, de).clear(), N(this, vn).clear();
      }
    }),
    (de = new WeakMap()),
    (vn = new WeakMap()),
    (yn = new WeakMap()),
    (Hr = new WeakMap()),
    (Qr = new WeakMap()),
    (xn = new WeakMap()),
    (Kr = new WeakMap()),
    (Yr = new WeakMap()),
    kf),
  y2 = x.createContext(void 0),
  x2 = ({ client: e, children: t }) => (
    x.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    c.jsx(y2.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ss() {
  return (
    (ss = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ss.apply(this, arguments)
  );
}
var Cn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Cn || (Cn = {}));
const af = "popstate";
function w2(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: s, search: i, hash: l } = r.location;
    return Za(
      "",
      { pathname: s, search: i, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Di(o);
  }
  return C2(t, n, null, e);
}
function ge(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ug(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function S2() {
  return Math.random().toString(36).substr(2, 8);
}
function uf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Za(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ss(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? co(t) : t,
      { state: n, key: (t && t.key) || r || S2() }
    )
  );
}
function Di(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function co(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function C2(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: s = !1 } = r,
    i = o.history,
    l = Cn.Pop,
    a = null,
    u = d();
  u == null && ((u = 0), i.replaceState(ss({}, i.state, { idx: u }), ""));
  function d() {
    return (i.state || { idx: null }).idx;
  }
  function f() {
    l = Cn.Pop;
    let w = d(),
      g = w == null ? null : w - u;
    (u = w), a && a({ action: l, location: y.location, delta: g });
  }
  function h(w, g) {
    l = Cn.Push;
    let m = Za(y.location, w, g);
    u = d() + 1;
    let v = uf(m, u),
      C = y.createHref(m);
    try {
      i.pushState(v, "", C);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      o.location.assign(C);
    }
    s && a && a({ action: l, location: y.location, delta: 1 });
  }
  function p(w, g) {
    l = Cn.Replace;
    let m = Za(y.location, w, g);
    u = d();
    let v = uf(m, u),
      C = y.createHref(m);
    i.replaceState(v, "", C),
      s && a && a({ action: l, location: y.location, delta: 0 });
  }
  function S(w) {
    let g = o.location.origin !== "null" ? o.location.origin : o.location.href,
      m = typeof w == "string" ? w : Di(w);
    return (
      (m = m.replace(/ $/, "%20")),
      ge(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          m
      ),
      new URL(m, g)
    );
  }
  let y = {
    get action() {
      return l;
    },
    get location() {
      return e(o, i);
    },
    listen(w) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(af, f),
        (a = w),
        () => {
          o.removeEventListener(af, f), (a = null);
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: S,
    encodeLocation(w) {
      let g = S(w);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: h,
    replace: p,
    go(w) {
      return i.go(w);
    },
  };
  return y;
}
var cf;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(cf || (cf = {}));
function E2(e, t, n) {
  return n === void 0 && (n = "/"), k2(e, t, n);
}
function k2(e, t, n, r) {
  let o = typeof t == "string" ? co(t) : t,
    s = hc(o.pathname || "/", n);
  if (s == null) return null;
  let i = cg(e);
  b2(i);
  let l = null;
  for (let a = 0; l == null && a < i.length; ++a) {
    let u = I2(s);
    l = _2(i[a], u);
  }
  return l;
}
function cg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (s, i, l) => {
    let a = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: i,
      route: s,
    };
    a.relativePath.startsWith("/") &&
      (ge(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Ln([r, a.relativePath]),
      d = n.concat(a);
    s.children &&
      s.children.length > 0 &&
      (ge(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      cg(s.children, t, d, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: O2(u, s.index), routesMeta: d });
  };
  return (
    e.forEach((s, i) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) o(s, i);
      else for (let a of dg(s.path)) o(s, i, a);
    }),
    t
  );
}
function dg(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [s, ""] : [s];
  let i = dg(r.join("/")),
    l = [];
  return (
    l.push(...i.map((a) => (a === "" ? s : [s, a].join("/")))),
    o && l.push(...i),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function b2(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : M2(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const N2 = /^:[\w-]+$/,
  j2 = 3,
  P2 = 2,
  T2 = 1,
  R2 = 10,
  L2 = -2,
  df = (e) => e === "*";
function O2(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(df) && (r += L2),
    t && (r += P2),
    n
      .filter((o) => !df(o))
      .reduce((o, s) => o + (N2.test(s) ? j2 : s === "" ? T2 : R2), r)
  );
}
function M2(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function _2(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    s = "/",
    i = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l],
      u = l === r.length - 1,
      d = s === "/" ? t : t.slice(s.length) || "/",
      f = A2(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        d
      ),
      h = a.route;
    if (!f) return null;
    Object.assign(o, f.params),
      i.push({
        params: o,
        pathname: Ln([s, f.pathname]),
        pathnameBase: B2(Ln([s, f.pathnameBase])),
        route: h,
      }),
      f.pathnameBase !== "/" && (s = Ln([s, f.pathnameBase]));
  }
  return i;
}
function A2(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = D2(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let s = o[0],
    i = s.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, d, f) => {
      let { paramName: h, isOptional: p } = d;
      if (h === "*") {
        let y = l[f] || "";
        i = s.slice(0, s.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const S = l[f];
      return (
        p && !S ? (u[h] = void 0) : (u[h] = (S || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: s,
    pathnameBase: i,
    pattern: e,
  };
}
function D2(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ug(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function I2(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ug(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function hc(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function z2(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? co(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : F2(n, t)) : t,
    search: U2(r),
    hash: W2(o),
  };
}
function F2(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Yl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function $2(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function fg(e, t) {
  let n = $2(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function pg(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = co(e))
    : ((o = ss({}, e)),
      ge(
        !o.pathname || !o.pathname.includes("?"),
        Yl("?", "pathname", "search", o)
      ),
      ge(
        !o.pathname || !o.pathname.includes("#"),
        Yl("#", "pathname", "hash", o)
      ),
      ge(!o.search || !o.search.includes("#"), Yl("#", "search", "hash", o)));
  let s = e === "" || o.pathname === "",
    i = s ? "/" : o.pathname,
    l;
  if (i == null) l = n;
  else {
    let f = t.length - 1;
    if (!r && i.startsWith("..")) {
      let h = i.split("/");
      for (; h[0] === ".."; ) h.shift(), (f -= 1);
      o.pathname = h.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let a = z2(o, l),
    u = i && i !== "/" && i.endsWith("/"),
    d = (s || i === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || d) && (a.pathname += "/"), a;
}
const Ln = (e) => e.join("/").replace(/\/\/+/g, "/"),
  B2 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  U2 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  W2 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function V2(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const hg = ["post", "put", "patch", "delete"];
new Set(hg);
const H2 = ["get", ...hg];
new Set(H2);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function is() {
  return (
    (is = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    is.apply(this, arguments)
  );
}
const mc = x.createContext(null),
  Q2 = x.createContext(null),
  dr = x.createContext(null),
  ul = x.createContext(null),
  Bn = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  mg = x.createContext(null);
function K2(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  vs() || ge(!1);
  let { basename: r, navigator: o } = x.useContext(dr),
    { hash: s, pathname: i, search: l } = vg(e, { relative: n }),
    a = i;
  return (
    r !== "/" && (a = i === "/" ? r : Ln([r, i])),
    o.createHref({ pathname: a, search: l, hash: s })
  );
}
function vs() {
  return x.useContext(ul) != null;
}
function ys() {
  return vs() || ge(!1), x.useContext(ul).location;
}
function gg(e) {
  x.useContext(dr).static || x.useLayoutEffect(e);
}
function gc() {
  let { isDataRoute: e } = x.useContext(Bn);
  return e ? lS() : Y2();
}
function Y2() {
  vs() || ge(!1);
  let e = x.useContext(mc),
    { basename: t, future: n, navigator: r } = x.useContext(dr),
    { matches: o } = x.useContext(Bn),
    { pathname: s } = ys(),
    i = JSON.stringify(fg(o, n.v7_relativeSplatPath)),
    l = x.useRef(!1);
  return (
    gg(() => {
      l.current = !0;
    }),
    x.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = pg(u, JSON.parse(i), s, d.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Ln([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d);
      },
      [t, r, i, s, e]
    )
  );
}
function G2() {
  let { matches: e } = x.useContext(Bn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function vg(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = x.useContext(dr),
    { matches: o } = x.useContext(Bn),
    { pathname: s } = ys(),
    i = JSON.stringify(fg(o, r.v7_relativeSplatPath));
  return x.useMemo(() => pg(e, JSON.parse(i), s, n === "path"), [e, i, s, n]);
}
function q2(e, t) {
  return X2(e, t);
}
function X2(e, t, n, r) {
  vs() || ge(!1);
  let { navigator: o } = x.useContext(dr),
    { matches: s } = x.useContext(Bn),
    i = s[s.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : "/";
  i && i.route;
  let u = ys(),
    d;
  if (t) {
    var f;
    let w = typeof t == "string" ? co(t) : t;
    a === "/" || ((f = w.pathname) != null && f.startsWith(a)) || ge(!1),
      (d = w);
  } else d = u;
  let h = d.pathname || "/",
    p = h;
  if (a !== "/") {
    let w = a.replace(/^\//, "").split("/");
    p = "/" + h.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let S = E2(e, { pathname: p }),
    y = nS(
      S &&
        S.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, l, w.params),
            pathname: Ln([
              a,
              o.encodeLocation
                ? o.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? a
                : Ln([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && y
    ? x.createElement(
        ul.Provider,
        {
          value: {
            location: is(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: Cn.Pop,
          },
        },
        y
      )
    : y;
}
function Z2() {
  let e = iS(),
    t = V2(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: o }, n) : null,
    null
  );
}
const J2 = x.createElement(Z2, null);
class eS extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          Bn.Provider,
          { value: this.props.routeContext },
          x.createElement(mg.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function tS(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = x.useContext(mc);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(Bn.Provider, { value: t }, r)
  );
}
function nS(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let d = i.findIndex(
      (f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0
    );
    d >= 0 || ge(!1), (i = i.slice(0, Math.min(i.length, d + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < i.length; d++) {
      let f = i[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
        f.route.id)
      ) {
        let { loaderData: h, errors: p } = n,
          S =
            f.route.loader &&
            h[f.route.id] === void 0 &&
            (!p || p[f.route.id] === void 0);
        if (f.route.lazy || S) {
          (a = !0), u >= 0 ? (i = i.slice(0, u + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((d, f, h) => {
    let p,
      S = !1,
      y = null,
      w = null;
    n &&
      ((p = l && f.route.id ? l[f.route.id] : void 0),
      (y = f.route.errorElement || J2),
      a &&
        (u < 0 && h === 0
          ? (aS("route-fallback"), (S = !0), (w = null))
          : u === h &&
            ((S = !0), (w = f.route.hydrateFallbackElement || null))));
    let g = t.concat(i.slice(0, h + 1)),
      m = () => {
        let v;
        return (
          p
            ? (v = y)
            : S
            ? (v = w)
            : f.route.Component
            ? (v = x.createElement(f.route.Component, null))
            : f.route.element
            ? (v = f.route.element)
            : (v = d),
          x.createElement(tS, {
            match: f,
            routeContext: { outlet: d, matches: g, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
      ? x.createElement(eS, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: p,
          children: m(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var yg = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(yg || {}),
  xg = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(xg || {});
function rS(e) {
  let t = x.useContext(mc);
  return t || ge(!1), t;
}
function oS(e) {
  let t = x.useContext(Q2);
  return t || ge(!1), t;
}
function sS(e) {
  let t = x.useContext(Bn);
  return t || ge(!1), t;
}
function wg(e) {
  let t = sS(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ge(!1), n.route.id;
}
function iS() {
  var e;
  let t = x.useContext(mg),
    n = oS(),
    r = wg();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function lS() {
  let { router: e } = rS(yg.UseNavigateStable),
    t = wg(xg.UseNavigateStable),
    n = x.useRef(!1);
  return (
    gg(() => {
      n.current = !0;
    }),
    x.useCallback(
      function (o, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, is({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
const ff = {};
function aS(e, t, n) {
  ff[e] || (ff[e] = !0);
}
function uS(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function et(e) {
  ge(!1);
}
function cS(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Cn.Pop,
    navigator: s,
    static: i = !1,
    future: l,
  } = e;
  vs() && ge(!1);
  let a = t.replace(/^\/*/, "/"),
    u = x.useMemo(
      () => ({
        basename: a,
        navigator: s,
        static: i,
        future: is({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, s, i]
    );
  typeof r == "string" && (r = co(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: h = "",
      state: p = null,
      key: S = "default",
    } = r,
    y = x.useMemo(() => {
      let w = hc(d, a);
      return w == null
        ? null
        : {
            location: { pathname: w, search: f, hash: h, state: p, key: S },
            navigationType: o,
          };
    }, [a, d, f, h, p, S, o]);
  return y == null
    ? null
    : x.createElement(
        dr.Provider,
        { value: u },
        x.createElement(ul.Provider, { children: n, value: y })
      );
}
function dS(e) {
  let { children: t, location: n } = e;
  return q2(Ja(t), n);
}
new Promise(() => {});
function Ja(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, o) => {
      if (!x.isValidElement(r)) return;
      let s = [...t, o];
      if (r.type === x.Fragment) {
        n.push.apply(n, Ja(r.props.children, s));
        return;
      }
      r.type !== et && ge(!1), !r.props.index || !r.props.children || ge(!1);
      let i = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = Ja(r.props.children, s)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function eu() {
  return (
    (eu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    eu.apply(this, arguments)
  );
}
function fS(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    s;
  for (s = 0; s < r.length; s++)
    (o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function pS(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function hS(e, t) {
  return e.button === 0 && (!t || t === "_self") && !pS(e);
}
const mS = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  gS = "6";
try {
  window.__reactRouterVersion = gS;
} catch {}
const vS = "startTransition",
  pf = Df[vS];
function yS(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    s = x.useRef();
  s.current == null && (s.current = w2({ window: o, v5Compat: !0 }));
  let i = s.current,
    [l, a] = x.useState({ action: i.action, location: i.location }),
    { v7_startTransition: u } = r || {},
    d = x.useCallback(
      (f) => {
        u && pf ? pf(() => a(f)) : a(f);
      },
      [a, u]
    );
  return (
    x.useLayoutEffect(() => i.listen(d), [i, d]),
    x.useEffect(() => uS(r), [r]),
    x.createElement(cS, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: i,
      future: r,
    })
  );
}
const xS =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  wS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  SS = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: s,
        replace: i,
        state: l,
        target: a,
        to: u,
        preventScrollReset: d,
        viewTransition: f,
      } = t,
      h = fS(t, mS),
      { basename: p } = x.useContext(dr),
      S,
      y = !1;
    if (typeof u == "string" && wS.test(u) && ((S = u), xS))
      try {
        let v = new URL(window.location.href),
          C = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u),
          E = hc(C.pathname, p);
        C.origin === v.origin && E != null
          ? (u = E + C.search + C.hash)
          : (y = !0);
      } catch {}
    let w = K2(u, { relative: o }),
      g = CS(u, {
        replace: i,
        state: l,
        target: a,
        preventScrollReset: d,
        relative: o,
        viewTransition: f,
      });
    function m(v) {
      r && r(v), v.defaultPrevented || g(v);
    }
    return x.createElement(
      "a",
      eu({}, h, { href: S || w, onClick: y || s ? r : m, ref: n, target: a })
    );
  });
var hf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(hf || (hf = {}));
var mf;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(mf || (mf = {}));
function CS(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: s,
      relative: i,
      viewTransition: l,
    } = t === void 0 ? {} : t,
    a = gc(),
    u = ys(),
    d = vg(e, { relative: i });
  return x.useCallback(
    (f) => {
      if (hS(f, n)) {
        f.preventDefault();
        let h = r !== void 0 ? r : Di(u) === Di(d);
        a(e, {
          replace: h,
          state: o,
          preventScrollReset: s,
          relative: i,
          viewTransition: l,
        });
      }
    },
    [u, a, d, r, o, n, e, s, i, l]
  );
}
const ES = ({ tabs: e, activeTab: t }) =>
    c.jsx("div", {
      className:
        "overflow-x-auto whitespace-nowrap border-b border-gmgn-gray-800",
      children: c.jsx("div", {
        className: "flex",
        children: e.map((n) =>
          c.jsx(
            SS,
            {
              to: n.path,
              className: `nav-tab ${t === n.path ? "active" : ""}`,
              children: n.label,
            },
            n.path
          )
        ),
      }),
    }),
  kS = ({ options: e, activeTime: t, onChange: n }) =>
    c.jsx("div", {
      className: "flex items-center justify-center space-x-2 py-2 bg-gmgn-bg",
      children: e.map((r) =>
        c.jsx(
          "button",
          {
            className: `time-filter-button ${t === r.value ? "active" : ""}`,
            onClick: () => n(r.value),
            children: r.label,
          },
          r.value
        )
      ),
    }),
  bS = mm(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  xt = x.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => {
      const i = r ? c0 : "button";
      return c.jsx(i, {
        className: Jt(bS({ variant: t, size: n, className: e })),
        ref: s,
        ...o,
      });
    }
  );
xt.displayName = "Button";
function NS(e) {
  return e ? (e.length > 8 ? e.slice(0, 4) + "..." + e.slice(-4) : e) : "";
}
function jS(e) {
  return e === void 0
    ? "-"
    : e >= 1e6
    ? (e / 1e6).toFixed(1) + "M"
    : e >= 1e3
    ? (e / 1e3).toFixed(1) + "K"
    : e.toString();
}
function PS(e) {
  return e === void 0
    ? "-"
    : e >= 1e6
    ? "$" + (e / 1e6).toFixed(1) + "M"
    : e >= 1e3
    ? "$" + (e / 1e3).toFixed(1) + "K"
    : "$" + e.toLocaleString();
}
function TS(e) {
  return e ? String(e) : "-";
}
const RS = ({ token: e, onSelect: t }) =>
  c.jsxs("div", {
    className:
      "flex items-center justify-between p-3 border-b border-gmgn-gray-800 hover:bg-gmgn-gray-900/30 cursor-pointer",
    onClick: () => t(e.id),
    children: [
      c.jsxs("div", {
        className: "flex items-center min-w-0",
        children: [
          c.jsx("div", {
            className:
              "flex-shrink-0 w-9 h-9 rounded-full overflow-hidden bg-gmgn-gray-700 mr-3",
            children: c.jsx("img", {
              src: e.image || "placeholder.svg",
              alt: e.name,
              className: "w-full h-full object-cover",
            }),
          }),
          c.jsxs("div", {
            className: "min-w-0",
            children: [
              c.jsxs("div", {
                className: "flex items-center space-x-1",
                children: [
                  c.jsx("span", {
                    className: "font-bold text-white truncate max-w-[100px]",
                    children: e.name,
                  }),
                  e.verified &&
                    c.jsx("svg", {
                      className: "w-4 h-4 text-blue-500",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                      children: c.jsx("path", {
                        d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
                      }),
                    }),
                  e.special &&
                    c.jsx("svg", {
                      className: "w-4 h-4 text-green-500",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                      children: c.jsx("path", { d: "M7 10l5 5 5-5z" }),
                    }),
                ],
              }),
              c.jsxs("div", {
                className: "flex items-center text-xs text-gray-400 space-x-1",
                children: [
                  c.jsx("span", { children: e.symbol }),
                  c.jsx("span", { className: "", children: NS(e.address) }),
                  c.jsx("span", {
                    className: "",
                    children: TS(e.timeSinceLaunch),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      c.jsxs("div", {
        className: "flex items-center space-x-6",
        children: [
          c.jsxs("div", {
            className: "text-right",
            children: [
              c.jsx("div", {
                className: "text-base font-bold text-white",
                children: jS(e.liq),
              }),
              c.jsx("div", {
                className: "text-xs text-gray-400",
                children: "Liq",
              }),
            ],
          }),
          c.jsxs("div", {
            className: "text-right",
            children: [
              c.jsx("div", {
                className: "text-base font-bold text-yellow-400",
                children: PS(e.mc),
              }),
              c.jsx("div", {
                className: "text-xs text-gray-400",
                children: "MC",
              }),
            ],
          }),
        ],
      }),
      c.jsxs("div", {
        className: "flex items-center space-x-2",
        children: [
          e.trending && c.jsx("span", { className: "text-lg", children: "🔥" }),
          c.jsx(xt, {
            className:
              "h-8 w-8 rounded-lg bg-gmgn-gray-800 hover:bg-gmgn-gray-700 p-0",
            tabIndex: -1,
            onClick: (n) => {
              n.stopPropagation();
            },
            children: c.jsx("svg", {
              className: "w-5 h-5 text-gmgn-green",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: c.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M13 10V3L4 14h7v7l9-11h-7z",
              }),
            }),
          }),
        ],
      }),
    ],
  });
function LS({ ohlcData: e, width: t = 320, height: n = 120 }) {
  if (!e.length) return c.jsx("div", { children: "No data" });
  const r = Math.max(...e.map((l) => l.high)),
    o = Math.min(...e.map((l) => l.low)),
    s = r - o || 1,
    i = (t / e.length) * 0.6;
  return c.jsx("svg", {
    width: t,
    height: n,
    children: e.map((l, a) => {
      const u = (a + 0.5) * (t / e.length),
        d = n - ((l.open - o) / s) * n,
        f = n - ((l.close - o) / s) * n,
        h = n - ((l.high - o) / s) * n,
        p = n - ((l.low - o) / s) * n,
        S = l.close >= l.open;
      return c.jsxs(
        "g",
        {
          children: [
            c.jsx("line", {
              x1: u,
              x2: u,
              y1: h,
              y2: p,
              stroke: "#888",
              strokeWidth: 2,
            }),
            c.jsx("rect", {
              x: u - i / 2,
              y: Math.min(d, f),
              width: i,
              height: Math.abs(f - d) || 2,
              fill: S ? "#4ade80" : "#f87171",
              stroke: "#222",
              strokeWidth: 1,
              rx: 2,
            }),
          ],
        },
        a
      );
    }),
  });
}
const OS =
    "https://682fe7f8f504aa3c70f599c3.mockapi.io/api/web3gmgn/dashboardData",
  gf =
    "https://682fe7f8f504aa3c70f599c3.mockapi.io/api/web3gmgn/cryptocurrencies",
  Sg = ({ token: e }) => {
    var d, f;
    const [t, n] = x.useState("1h"),
      [r, o] = x.useState("activity");
    e.priceChange >= 0;
    const [s, i] = x.useState([]),
      [l, a] = x.useState([]);
    x.useEffect(() => {
      Promise.all([
        fetch(OS).then((h) => h.json()),
        fetch(gf).then((h) => h.json()),
      ]).then(([h, p]) => {
        let S = [];
        h.forEach((y) => {
          const w = (y.cryptoAssets || []).find((g) => g.id === e.id);
          w && w.currentPriceUSD && S.push(w.currentPriceUSD);
        }),
          p.forEach((y) => {
            const w = (y.cryptoAssets || []).find((g) => g.id === e.id);
            w && w.currentPriceUSD && S.push(w.currentPriceUSD);
          }),
          i(S);
      });
    }, [e.id, t]),
      x.useEffect(() => {
        fetch(gf)
          .then((h) => h.json())
          .then((h) => {
            const p = h.find(
              (S) => S.name.toLowerCase() === e.name.toLowerCase()
            );
            a(p && p.ohlcData ? p.ohlcData : []);
          });
      }, [e.name, t]);
    const u = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(e.price);
    return c.jsxs("div", {
      className: "flex flex-col h-full",
      children: [
        c.jsxs("div", {
          className:
            "flex items-center justify-between p-4 border-b border-gmgn-gray-800",
          children: [
            c.jsxs("div", {
              className: "flex items-center",
              children: [
                c.jsx("button", {
                  className: "w-6 h-6 mr-3 text-gray-400",
                  children: c.jsx("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    className: "w-6 h-6",
                    children: c.jsx("path", {
                      d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                    }),
                  }),
                }),
                c.jsx("div", {
                  className:
                    "flex-shrink-0 w-12 h-12 mr-3 rounded-full overflow-hidden",
                  children: c.jsx("img", {
                    src: e.image || "placeholder.svg",
                    alt: e.name,
                    className: "w-full h-full object-cover",
                  }),
                }),
                c.jsxs("div", {
                  children: [
                    c.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        c.jsx("h2", {
                          className: "text-xl font-bold text-white",
                          children: e.name,
                        }),
                        e.warnings &&
                          Object.keys(e.warnings).length > 0 &&
                          c.jsx("svg", {
                            className: "w-5 h-5 text-red-500 ml-1",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: c.jsx("path", {
                              d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.83 0-1.5-.67-1.5-1.5S11.17 14 12 14s1.5.67 1.5 1.5S12.83 17 12 17zm0-9c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5z",
                            }),
                          }),
                      ],
                    }),
                    c.jsxs("div", {
                      className: "flex items-center text-gray-400",
                      children: [
                        c.jsx("span", { children: e.symbol }),
                        c.jsx("svg", {
                          className: "w-4 h-4 ml-1",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: c.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.jsx("div", {
              className: "flex items-center",
              children: c.jsx("button", {
                className: "p-2",
                children: c.jsx("svg", {
                  className: "w-6 h-6 text-white",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: c.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z",
                  }),
                }),
              }),
            }),
          ],
        }),
        c.jsxs("div", {
          className: "p-4",
          children: [
            c.jsxs("div", {
              className: "flex items-center justify-between mb-4",
              children: [
                c.jsx("div", {
                  className: "text-4xl font-bold text-gmgn-green",
                  children: u,
                }),
                c.jsx("span", {
                  className: "text-gray-400 font-medium",
                  children: "HODL",
                }),
              ],
            }),
            c.jsxs("div", {
              className: "flex flex-wrap gap-2 mb-6",
              children: [
                c.jsx(xt, {
                  className: `px-4 py-2 font-medium rounded-full ${
                    t === "1m"
                      ? "bg-gmgn-gray-700 text-white"
                      : "bg-gmgn-gray-800 text-gray-400"
                  }`,
                  onClick: () => n("1m"),
                  variant: "ghost",
                  children: "1m",
                }),
                c.jsx(xt, {
                  className: `px-4 py-2 font-medium rounded-full ${
                    t === "5m"
                      ? "bg-gmgn-gray-700 text-white"
                      : "bg-gmgn-gray-800 text-gray-400"
                  }`,
                  onClick: () => n("5m"),
                  variant: "ghost",
                  children: "5m",
                }),
                c.jsx(xt, {
                  className: `px-4 py-2 font-medium rounded-full ${
                    t === "1h"
                      ? "bg-gmgn-gray-700 text-white"
                      : "bg-gmgn-gray-800 text-gray-400"
                  }`,
                  onClick: () => n("1h"),
                  variant: "ghost",
                  children: "1h",
                }),
                c.jsx(xt, {
                  className: `px-4 py-2 font-medium rounded-full ${
                    t === "24h"
                      ? "bg-gmgn-gray-700 text-white"
                      : "bg-gmgn-gray-800 text-gray-400"
                  }`,
                  onClick: () => n("24h"),
                  variant: "ghost",
                  children: "24h",
                }),
              ],
            }),
            c.jsx("div", {
              className:
                "h-80 bg-gmgn-gray-900 rounded-lg mb-6 relative flex items-center justify-center",
              children: c.jsx(LS, { ohlcData: l }),
            }),
            e.warnings &&
              c.jsxs("div", {
                className: "mb-6",
                children: [
                  c.jsx("h3", {
                    className: "text-xl font-medium mb-2",
                    children: "PUMP Pool info",
                  }),
                  c.jsxs("div", {
                    className: "bg-gmgn-gray-800 rounded-lg p-4 space-y-3",
                    children: [
                      c.jsxs("div", {
                        className: "flex justify-between",
                        children: [
                          c.jsx("span", {
                            className: "text-gray-400",
                            children: "Total liq",
                          }),
                          c.jsxs("span", {
                            className: "text-white",
                            children: [
                              "$",
                              (d = e.totalLiquidity) == null
                                ? void 0
                                : d.toFixed(2),
                              " (",
                              e.totalLiquidity
                                ? (e.totalLiquidity * 0.0028).toFixed(2)
                                : "0",
                              " ",
                              "SOL)",
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "flex justify-between",
                        children: [
                          c.jsx("span", {
                            className: "text-gray-400",
                            children: "Market cap",
                          }),
                          c.jsxs("span", {
                            className: "text-white",
                            children: [
                              "$",
                              (f = e.marketCap) == null
                                ? void 0
                                : f.toLocaleString(),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "flex justify-between",
                        children: [
                          c.jsx("span", {
                            className: "text-gray-400",
                            children: "Holders",
                          }),
                          c.jsx("span", {
                            className: "text-white",
                            children: e.holders,
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "flex justify-between",
                        children: [
                          c.jsx("span", {
                            className: "text-gray-400",
                            children: "Total supply",
                          }),
                          c.jsx("span", {
                            className: "text-white",
                            children: e.totalSupply,
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "flex justify-between",
                        children: [
                          c.jsx("span", {
                            className: "text-gray-400",
                            children: "Pool created",
                          }),
                          c.jsx("span", {
                            className: "text-white",
                            children: e.poolCreated,
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsx("h3", {
                    className: "text-xl font-medium mt-6 mb-2",
                    children: "Degen Audit",
                  }),
                  c.jsxs("div", {
                    className: "bg-gmgn-gray-800 rounded-lg p-4 space-y-3",
                    children: [
                      c.jsxs("div", {
                        className: "flex justify-between",
                        children: [
                          c.jsx("span", {
                            className: "text-gray-400",
                            children: "NoMint",
                          }),
                          c.jsxs("div", {
                            className: "flex items-center",
                            children: [
                              c.jsx("span", {
                                className: "text-white mr-1",
                                children: "Yes",
                              }),
                              c.jsx("svg", {
                                className: "w-5 h-5 text-gmgn-green",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: c.jsx("path", {
                                  d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "flex justify-between",
                        children: [
                          c.jsx("span", {
                            className: "text-gray-400",
                            children: "Blacklist",
                          }),
                          c.jsxs("div", {
                            className: "flex items-center",
                            children: [
                              c.jsx("span", {
                                className: "text-white mr-1",
                                children: "No",
                              }),
                              c.jsx("svg", {
                                className: "w-5 h-5 text-gmgn-green",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: c.jsx("path", {
                                  d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "flex justify-between",
                        children: [
                          c.jsx("span", {
                            className: "text-gray-400",
                            children: "Burnt",
                          }),
                          c.jsxs("div", {
                            className: "flex items-center",
                            children: [
                              c.jsx("span", {
                                className: "text-white mr-1",
                                children: "Yes",
                              }),
                              c.jsx("svg", {
                                className: "w-5 h-5 text-gmgn-green",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: c.jsx("path", {
                                  d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "flex justify-between",
                        children: [
                          c.jsx("span", {
                            className: "text-gray-400",
                            children: "Top 10",
                          }),
                          c.jsxs("div", {
                            className: "flex items-center",
                            children: [
                              c.jsx("span", {
                                className: "text-white mr-1",
                                children: e.warnings.topHolders,
                              }),
                              c.jsx("svg", {
                                className: "w-5 h-5 text-gmgn-green",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: c.jsx("path", {
                                  d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
        c.jsx("div", {
          className: "mt-auto border-t border-gmgn-gray-800",
          children: c.jsxs("div", {
            className: "flex",
            children: [
              c.jsx("button", {
                className: `flex-1 p-4 text-center ${
                  r === "activity" ? "text-white" : "text-gray-400"
                }`,
                onClick: () => o("activity"),
                children: "Activity",
              }),
              c.jsx("button", {
                className: `flex-1 p-4 text-center ${
                  r === "liquidity" ? "text-white" : "text-gray-400"
                }`,
                onClick: () => o("liquidity"),
                children: "Liquidity",
              }),
              c.jsx("button", {
                className: `flex-1 p-4 text-center ${
                  r === "traders" ? "text-white" : "text-gray-400"
                }`,
                onClick: () => o("traders"),
                children: "Traders",
              }),
              c.jsx("button", {
                className: `flex-1 p-4 text-center ${
                  r === "holders" ? "text-white" : "text-gray-400"
                }`,
                onClick: () => o("holders"),
                children: "Holders",
              }),
            ],
          }),
        }),
        c.jsxs("div", {
          className:
            "fixed bottom-0 left-0 right-0 flex border-t border-gmgn-gray-800 bg-gmgn-bg",
          children: [
            c.jsx("button", {
              className: "flex-1 p-4 text-center",
              children: c.jsxs("div", {
                className: "flex flex-col items-center",
                children: [
                  c.jsx("svg", {
                    className: "w-6 h-6 text-gmgn-green",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M13 10V3L4 14h7v7l9-11h-7z",
                    }),
                  }),
                  c.jsx("span", {
                    className: "text-gray-300 text-sm mt-1",
                    children: "Buy",
                  }),
                ],
              }),
            }),
            c.jsx("button", {
              className: "flex-1 p-4 text-center",
              children: c.jsxs("div", {
                className: "flex flex-col items-center",
                children: [
                  c.jsx("svg", {
                    className: "w-6 h-6 text-gray-300",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M20 12H4m0 0l6-6m-6 6l6 6",
                    }),
                  }),
                  c.jsx("span", {
                    className: "text-gray-300 text-sm mt-1",
                    children: "Sell",
                  }),
                ],
              }),
            }),
            c.jsx("button", {
              className: "flex-1 p-4 text-center",
              children: c.jsxs("div", {
                className: "flex flex-col items-center",
                children: [
                  c.jsx("svg", {
                    className: "w-6 h-6 text-gray-300",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                    }),
                  }),
                  c.jsx("span", {
                    className: "text-gray-300 text-sm mt-1",
                    children: "Info",
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  tu = x.forwardRef(({ className: e, type: t, ...n }, r) =>
    c.jsx("input", {
      type: t,
      className: Jt(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ref: r,
      ...n,
    })
  );
tu.displayName = "Input";
const MS = ({ isOpen: e, onClose: t }) => {
    const [n, r] = x.useState(""),
      [o, s] = x.useState(""),
      [i, l] = x.useState(!1);
    return e
      ? c.jsx("div", {
          className:
            "fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center px-4",
          children: c.jsxs("div", {
            className: "w-full max-w-md bg-gmgn-gray-900 rounded-lg p-6",
            children: [
              c.jsxs("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                  c.jsx("h2", {
                    className: "text-3xl font-bold text-white",
                    children: "Log In",
                  }),
                  c.jsx("button", {
                    onClick: t,
                    className: "text-gray-400 hover:text-white",
                    children: c.jsx("svg", {
                      className: "w-6 h-6",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: c.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12",
                      }),
                    }),
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "space-y-4",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        htmlFor: "email",
                        className: "block text-lg text-white mb-2",
                        children: "Email",
                      }),
                      c.jsx(tu, {
                        id: "email",
                        type: "email",
                        placeholder: "Enter Email",
                        value: n,
                        onChange: (a) => r(a.target.value),
                        className:
                          "w-full p-4 bg-gmgn-gray-800 border-none text-white rounded-lg",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        htmlFor: "password",
                        className: "block text-lg text-white mb-2",
                        children: "Password",
                      }),
                      c.jsxs("div", {
                        className: "relative",
                        children: [
                          c.jsx(tu, {
                            id: "password",
                            type: i ? "text" : "password",
                            placeholder: "Enter Password",
                            value: o,
                            onChange: (a) => s(a.target.value),
                            className:
                              "w-full p-4 bg-gmgn-gray-800 border-none text-white rounded-lg",
                          }),
                          c.jsx("button", {
                            type: "button",
                            onClick: () => l(!i),
                            className:
                              "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400",
                            children: i
                              ? c.jsx("svg", {
                                  className: "w-6 h-6",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: c.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18",
                                  }),
                                })
                              : c.jsxs("svg", {
                                  className: "w-6 h-6",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: [
                                    c.jsx("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                                    }),
                                    c.jsx("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                                    }),
                                  ],
                                }),
                          }),
                        ],
                      }),
                      c.jsx("div", {
                        className: "flex justify-end mt-2",
                        children: c.jsx("a", {
                          href: "#",
                          className: "text-gmgn-green hover:underline",
                          children: "Forgot Password?",
                        }),
                      }),
                    ],
                  }),
                  c.jsx(xt, {
                    className:
                      "w-full py-6 bg-gmgn-green hover:bg-green-500 text-black font-bold text-xl rounded-lg",
                    onClick: () => {},
                    children: "Log In",
                  }),
                  c.jsxs("div", {
                    className: "relative my-6",
                    children: [
                      c.jsx("div", {
                        className: "absolute inset-0 flex items-center",
                        children: c.jsx("div", {
                          className: "w-full border-t border-gmgn-gray-700",
                        }),
                      }),
                      c.jsx("div", {
                        className: "relative flex justify-center text-sm",
                        children: c.jsx("span", {
                          className:
                            "px-4 bg-gmgn-gray-900 text-gray-400 text-lg",
                          children: "OR",
                        }),
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "grid grid-cols-4 gap-4",
                    children: [
                      c.jsx("div", {
                        className: "col-span-1",
                        children: c.jsxs(xt, {
                          className:
                            "w-full h-20 bg-gmgn-gray-800 hover:bg-gmgn-gray-700 rounded-lg flex flex-col items-center justify-center",
                          variant: "outline",
                          children: [
                            c.jsx(sx, { className: "h-8 w-8 text-blue-400" }),
                            c.jsx("span", {
                              className: "text-xs text-gray-300 mt-1",
                              children: "Telegram",
                            }),
                          ],
                        }),
                      }),
                      c.jsx("div", {
                        className: "col-span-1",
                        children: c.jsxs(xt, {
                          className:
                            "w-full h-20 bg-gmgn-gray-800 hover:bg-gmgn-gray-700 rounded-lg flex flex-col items-center justify-center",
                          variant: "outline",
                          children: [
                            c.jsxs("svg", {
                              className: "h-8 w-8 text-purple-400",
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              children: [
                                c.jsx("path", {
                                  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
                                }),
                                c.jsx("circle", { cx: "8", cy: "14", r: "2" }),
                                c.jsx("circle", { cx: "16", cy: "14", r: "2" }),
                              ],
                            }),
                            c.jsx("span", {
                              className: "text-xs text-gray-300 mt-1",
                              children: "Phantom",
                            }),
                          ],
                        }),
                      }),
                      c.jsx("div", {
                        className: "col-span-1",
                        children: c.jsxs(xt, {
                          className:
                            "w-full h-20 bg-gmgn-gray-800 hover:bg-gmgn-gray-700 rounded-lg flex flex-col items-center justify-center",
                          variant: "outline",
                          children: [
                            c.jsx(ix, { className: "h-8 w-8 text-white" }),
                            c.jsx("span", {
                              className: "text-xs text-gray-300 mt-1",
                              children: "Wallet",
                            }),
                          ],
                        }),
                      }),
                      c.jsx("div", {
                        className: "col-span-1",
                        children: c.jsxs(xt, {
                          className:
                            "w-full h-20 bg-gmgn-gray-800 hover:bg-gmgn-gray-700 rounded-lg flex flex-col items-center justify-center",
                          variant: "outline",
                          children: [
                            c.jsxs("svg", {
                              className: "h-8 w-8 text-white",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              children: [
                                c.jsx("rect", {
                                  x: "3",
                                  y: "3",
                                  width: "18",
                                  height: "18",
                                  rx: "2",
                                }),
                                c.jsx("path", { d: "M7 7h10v10H7z" }),
                              ],
                            }),
                            c.jsx("span", {
                              className: "text-xs text-gray-300 mt-1",
                              children: "APP Scan",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  c.jsx("div", {
                    className: "text-center mt-6",
                    children: c.jsxs("p", {
                      className: "text-gray-400",
                      children: [
                        "Don't have an account yet?",
                        " ",
                        c.jsx("a", {
                          href: "#",
                          className:
                            "text-gmgn-green hover:underline font-medium",
                          children: "Sign Up Now",
                        }),
                      ],
                    }),
                  }),
                  c.jsxs("div", {
                    className:
                      "pt-4 mt-6 text-center border-t border-gmgn-gray-800",
                    children: [
                      c.jsx("a", {
                        href: "#",
                        className: "text-gray-400 hover:text-white mr-4",
                        children: "Terms of Service",
                      }),
                      c.jsx("span", {
                        className: "text-gray-600",
                        children: "|",
                      }),
                      c.jsx("a", {
                        href: "#",
                        className: "text-gray-400 hover:text-white ml-4",
                        children: "Privacy Policy",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  _S = [
    { label: "Trenches", path: "/trenches" },
    { label: "New", path: "/new" },
    { label: "Trending", path: "/trending" },
    { label: "CopyTrade", path: "/copytrade" },
    { label: "SnipeX", path: "/snipex" },
    { label: "Monitor", path: "/monitor" },
  ],
  AS = [
    { label: "1m", value: "1m" },
    { label: "5m", value: "5m" },
    { label: "1h", value: "1h" },
    { label: "6h", value: "6h" },
    { label: "24h", value: "24h" },
  ],
  DS = "https://682fe7f8f504aa3c70f599c3.mockapi.io/api/web3gmgn/dashboardData",
  xr = () => {
    var g, m;
    const e = gc(),
      [t, n] = x.useState("/trending"),
      [r, o] = x.useState("1h"),
      [s, i] = x.useState(!1),
      [l, a] = x.useState(null),
      [u, d] = x.useState([]),
      [f, h] = x.useState(!0);
    x.useEffect(() => {
      fetch(DS)
        .then((v) => v.json())
        .then((v) => {
          d(v), h(!1);
        });
    }, []);
    const p = u.flatMap((v) =>
        (v.cryptoAssets || []).map((C) => {
          var E;
          return {
            id: C.id,
            name: C.name,
            symbol: C.symbol,
            image: "placeholder.svg",
            address: C.address || void 0,
            timeSinceLaunch: C.timeSinceLaunch || void 0,
            liq: (E = C.liquidityPoolInfo) == null ? void 0 : E.poolValueUSD,
            mc: C.marketCapUSD,
            trending: C.change24hPercentage > 0,
            verified: !1,
            special: !1,
          };
        })
      ),
      S = p.find((v) => v.id === l),
      y = (v) => {
        a(v);
      },
      w = () => {
        a(null);
      };
    return f
      ? c.jsx("div", {
          className: "text-center text-white",
          children: "Loading dashboard...",
        })
      : c.jsxs("div", {
          className: "flex flex-col min-h-screen bg-gmgn-bg text-white",
          children: [
            c.jsxs("div", {
              className: "flex items-center justify-between px-4 py-2",
              children: [
                c.jsx("button", {
                  className:
                    "p-2 rounded-full bg-gmgn-gray-800 hover:bg-gmgn-gray-700 mr-2",
                  onClick: () => e("/"),
                  "aria-label": "Home",
                  children: c.jsxs("svg", {
                    width: "28",
                    height: "28",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    viewBox: "0 0 24 24",
                    children: [
                      c.jsx("path", {
                        d: "M3 12l9-9 9 9",
                        stroke: "#fff",
                        strokeWidth: "2",
                        fill: "none",
                      }),
                      c.jsx("path", {
                        d: "M9 21V9h6v12",
                        stroke: "#fff",
                        strokeWidth: "2",
                        fill: "none",
                      }),
                    ],
                  }),
                }),
                c.jsx("button", {
                  className:
                    "p-2 rounded-full bg-gmgn-gray-800 hover:bg-gmgn-gray-700 ml-auto",
                  onClick: () => e("/wallet"),
                  "aria-label": "My Wallet",
                  children: c.jsxs("svg", {
                    width: "28",
                    height: "28",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    viewBox: "0 0 24 24",
                    children: [
                      c.jsx("rect", {
                        x: "2",
                        y: "7",
                        width: "20",
                        height: "14",
                        rx: "3",
                        fill: "#222",
                        stroke: "#fff",
                      }),
                      c.jsx("circle", {
                        cx: "18",
                        cy: "14",
                        r: "2",
                        fill: "#4ade80",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            c.jsx(ES, { tabs: _S, activeTab: t }),
            S
              ? c.jsxs("div", {
                  className: "flex flex-col flex-1",
                  children: [
                    c.jsxs("button", {
                      className: "flex items-center px-4 py-3 text-white",
                      onClick: w,
                      children: [
                        c.jsx("svg", {
                          className: "w-6 h-6 mr-2",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: c.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M10 19l-7-7m0 0l7-7m-7 7h18",
                          }),
                        }),
                        c.jsx("span", { children: "Email Verification Code" }),
                      ],
                    }),
                    c.jsx(Sg, {
                      token: {
                        id: S.id,
                        name: S.name,
                        symbol: S.symbol,
                        image: S.image,
                        price:
                          ((g = u
                            .flatMap((v) => v.cryptoAssets)
                            .find((v) => v.id === S.id)) == null
                            ? void 0
                            : g.currentPriceUSD) || 0,
                        priceChange:
                          ((m = u
                            .flatMap((v) => v.cryptoAssets)
                            .find((v) => v.id === S.id)) == null
                            ? void 0
                            : m.change24hPercentage) || 0,
                        marketCap: S.mc,
                        totalLiquidity: S.liq,
                        holders: void 0,
                        totalSupply: void 0,
                        poolCreated: void 0,
                        warnings: S.trending ? { noMint: !0 } : void 0,
                      },
                    }),
                  ],
                })
              : c.jsxs(c.Fragment, {
                  children: [
                    c.jsx("div", {
                      className: "flex items-center justify-between px-4 py-2",
                      children: c.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          c.jsx("h2", {
                            className: "text-xl font-bold",
                            children: "Trending",
                          }),
                          c.jsx("div", {
                            className: "flex items-center ml-4 text-gray-400",
                            children: c.jsx("span", {
                              className: "text-sm",
                              children: "NextBC",
                            }),
                          }),
                        ],
                      }),
                    }),
                    c.jsx(kS, { options: AS, activeTime: r, onChange: o }),
                    c.jsxs("div", {
                      className:
                        "flex items-center justify-between px-4 py-3 bg-gmgn-bg",
                      children: [
                        c.jsxs("button", {
                          className:
                            "flex items-center bg-gmgn-gray-800 rounded-lg px-3 py-1.5 text-gray-400",
                          children: [
                            c.jsx("svg", {
                              className: "w-5 h-5 mr-1",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              children: c.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                              }),
                            }),
                            "Devs",
                          ],
                        }),
                        c.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            c.jsxs("button", {
                              className:
                                "flex items-center bg-gmgn-gray-800 rounded-lg px-3 py-1.5 text-gray-400 mr-2",
                              children: [
                                c.jsx("svg", {
                                  className: "w-5 h-5 mr-1",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  children: c.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z",
                                  }),
                                }),
                                "Filter",
                              ],
                            }),
                            c.jsxs("button", {
                              className:
                                "flex items-center bg-gmgn-gray-800 rounded-lg px-3 py-1.5 text-gray-300",
                              children: [
                                "P1",
                                c.jsx("svg", {
                                  className: "w-4 h-4 ml-1",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  children: c.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M19 9l-7 7-7-7",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between px-4 py-2 border-b border-gmgn-gray-800",
                      children: [
                        c.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            c.jsx("span", {
                              className: "text-gray-400",
                              children: "Token",
                            }),
                            c.jsx("svg", {
                              className: "w-4 h-4 ml-1 text-gray-400",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              children: c.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M19 9l-7 7-7-7",
                              }),
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            c.jsx("span", {
                              className: "text-gray-400 mr-1",
                              children: "Liq",
                            }),
                            c.jsx("svg", {
                              className: "w-4 h-4 text-gray-400",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              children: c.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M19 9l-7 7-7-7",
                              }),
                            }),
                            c.jsx("span", {
                              className: "text-gray-400 mx-1",
                              children: "/",
                            }),
                            c.jsx("span", {
                              className: "text-gray-400 mr-1",
                              children: "Initial",
                            }),
                            c.jsx("svg", {
                              className: "w-4 h-4 text-gray-400",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              children: c.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M19 9l-7 7-7-7",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    c.jsx("div", {
                      className: "flex-1 overflow-y-auto",
                      children: p.map((v) =>
                        c.jsx(RS, { token: v, onSelect: y }, v.id)
                      ),
                    }),
                  ],
                }),
            c.jsx(MS, { isOpen: s, onClose: () => i(!1) }),
          ],
        });
  },
  IS = () => {
    const e = ys();
    return (
      x.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname
        );
      }, [e.pathname]),
      c.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-gmgn-bg",
        children: c.jsxs("div", {
          className: "text-center",
          children: [
            c.jsx("h1", {
              className: "text-4xl font-bold mb-4 text-white",
              children: "404",
            }),
            c.jsx("p", {
              className: "text-xl text-gray-400 mb-4",
              children: "Oops! Page not found",
            }),
            c.jsx("a", {
              href: "/",
              className: "text-gmgn-green hover:text-green-400 underline",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  zS = "https://682fe7f8f504aa3c70f599c3.mockapi.io/api/web3gmgn/users",
  FS = () => {
    const [e, t] = x.useState(""),
      [n, r] = x.useState(""),
      [o, s] = x.useState(""),
      [i, l] = x.useState(""),
      [a, u] = x.useState(!1),
      d = gc(),
      f = async (h) => {
        h.preventDefault(), s(""), l(""), u(!0);
        try {
          (await (await fetch(zS)).json()).find(
            (w) => w.email === e && w.password === n
          )
            ? (l("Login successful!"),
              setTimeout(() => {
                d("/");
              }, 1e3))
            : s("Invalid email or password.");
        } catch {
          s("Something went wrong.");
        } finally {
          u(!1);
        }
      };
    return c.jsx("div", {
      className:
        "min-h-screen flex items-center justify-center bg-black bg-opacity-80",
      children: c.jsxs("div", {
        className:
          "w-full max-w-md bg-[#181A20] rounded-2xl p-8 shadow-lg relative",
        children: [
          c.jsx("button", {
            className:
              "absolute top-6 right-6 text-2xl text-gray-400 hover:text-white",
            children: "×",
          }),
          c.jsx("h2", {
            className: "text-3xl font-bold text-white mb-2",
            children: "Log In",
          }),
          c.jsxs("p", {
            className: "text-gray-400 mb-6",
            children: [
              "Don't have an account yet?",
              " ",
              c.jsx("span", {
                className: "text-green-300 cursor-pointer",
                children: "Sign Up",
              }),
            ],
          }),
          c.jsxs("form", {
            onSubmit: f,
            className: "space-y-4",
            children: [
              c.jsxs("div", {
                children: [
                  c.jsx("label", {
                    className: "block text-white mb-1",
                    children: "Email",
                  }),
                  c.jsx("input", {
                    type: "email",
                    className:
                      "w-full px-4 py-3 rounded-lg bg-[#23262F] text-gray-200 placeholder-gray-500 focus:outline-none",
                    placeholder: "Enter Email",
                    value: e,
                    onChange: (h) => t(h.target.value),
                    required: !0,
                  }),
                ],
              }),
              c.jsxs("div", {
                children: [
                  c.jsx("label", {
                    className: "block text-white mb-1",
                    children: "Password",
                  }),
                  c.jsxs("div", {
                    className: "relative",
                    children: [
                      c.jsx("input", {
                        type: "password",
                        className:
                          "w-full px-4 py-3 rounded-lg bg-[#23262F] text-gray-200 placeholder-gray-500 focus:outline-none",
                        placeholder: "Enter Password",
                        value: n,
                        onChange: (h) => r(h.target.value),
                        required: !0,
                      }),
                      c.jsx("span", {
                        className:
                          "absolute right-3 top-3 text-gray-500 cursor-pointer",
                        children: c.jsxs("svg", {
                          width: "20",
                          height: "20",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          children: [
                            c.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                            }),
                            c.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              c.jsx("div", {
                className: "flex justify-end mb-2",
                children: c.jsx("span", {
                  className: "text-green-300 text-sm cursor-pointer",
                  children: "Forgot Password?",
                }),
              }),
              o &&
                c.jsx("div", {
                  className: "text-red-400 text-sm mb-2",
                  children: o,
                }),
              i &&
                c.jsx("div", {
                  className: "text-green-400 text-sm mb-2",
                  children: i,
                }),
              c.jsx("button", {
                type: "submit",
                className:
                  "w-full py-3 rounded-lg bg-green-300 text-black font-bold text-lg hover:bg-green-400 transition",
                disabled: a,
                children: a ? "Logging in..." : "Log In",
              }),
            ],
          }),
          c.jsxs("div", {
            className: "flex items-center my-6",
            children: [
              c.jsx("div", { className: "flex-grow border-t border-gray-700" }),
              c.jsx("span", {
                className: "mx-4 text-gray-500",
                children: "OR",
              }),
              c.jsx("div", { className: "flex-grow border-t border-gray-700" }),
            ],
          }),
          c.jsxs("div", {
            className: "flex justify-between mb-6",
            children: [
              c.jsxs("div", {
                className: "flex flex-col items-center",
                children: [
                  c.jsx("div", {
                    className: "bg-[#23262F] rounded-full p-4 mb-2",
                    children: c.jsx("svg", {
                      width: "28",
                      height: "28",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: c.jsx("path", {
                        fill: "#39A9EA",
                        d: "M21.944 3.685a1.5 1.5 0 00-1.7-.2L3.5 11.1a1.5 1.5 0 00.1 2.8l3.7 1.2 1.3 4.1a1.5 1.5 0 002.7.3l2.1-2.7 3.7 2.7a1.5 1.5 0 002.3-.8l3.1-13.1a1.5 1.5 0 00-.46-1.515z",
                      }),
                    }),
                  }),
                  c.jsx("span", {
                    className: "text-gray-200 text-sm",
                    children: "Telegram",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex flex-col items-center",
                children: [
                  c.jsx("div", {
                    className: "bg-[#23262F] rounded-full p-4 mb-2",
                    children: c.jsxs("svg", {
                      width: "28",
                      height: "28",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        c.jsx("circle", {
                          cx: "12",
                          cy: "12",
                          r: "10",
                          fill: "#9B8CFC",
                        }),
                        c.jsx("ellipse", {
                          cx: "12",
                          cy: "15",
                          rx: "4",
                          ry: "2",
                          fill: "#fff",
                        }),
                        c.jsx("ellipse", {
                          cx: "9.5",
                          cy: "11",
                          rx: "1.5",
                          ry: "2",
                          fill: "#fff",
                        }),
                        c.jsx("ellipse", {
                          cx: "14.5",
                          cy: "11",
                          rx: "1.5",
                          ry: "2",
                          fill: "#fff",
                        }),
                      ],
                    }),
                  }),
                  c.jsx("span", {
                    className: "text-gray-200 text-sm",
                    children: "Phantom",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex flex-col items-center",
                children: [
                  c.jsx("div", {
                    className: "bg-[#23262F] rounded-full p-4 mb-2",
                    children: c.jsxs("svg", {
                      width: "28",
                      height: "28",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        c.jsx("rect", {
                          x: "4",
                          y: "4",
                          width: "16",
                          height: "16",
                          rx: "4",
                          fill: "#fff",
                        }),
                        c.jsx("rect", {
                          x: "7",
                          y: "7",
                          width: "10",
                          height: "10",
                          rx: "2",
                          fill: "#23262F",
                        }),
                      ],
                    }),
                  }),
                  c.jsx("span", {
                    className: "text-gray-200 text-sm",
                    children: "APP Scan",
                  }),
                ],
              }),
            ],
          }),
          c.jsx("div", {
            className: "text-center mb-4",
            children: c.jsxs("span", {
              className: "text-gray-200",
              children: [
                "Connect with extension wallet",
                " ",
                c.jsx("span", {
                  className: "inline-block ml-1",
                  children: "→",
                }),
              ],
            }),
          }),
          c.jsxs("div", {
            className:
              "flex justify-center text-gray-500 text-xs space-x-2 mt-4",
            children: [
              c.jsx("span", { children: "Terms of Service" }),
              c.jsx("span", { children: "|" }),
              c.jsx("span", { children: "Privacy Policy" }),
            ],
          }),
        ],
      }),
    });
  },
  $S =
    "https://682fe7f8f504aa3c70f599c3.mockapi.io/api/web3gmgn/cryptocurrencies",
  BS = () => {
    var i;
    const { slug: e } = G2(),
      [t, n] = x.useState(null),
      [r, o] = x.useState(!0);
    if (
      (x.useEffect(() => {
        o(!0),
          fetch($S)
            .then((l) => l.json())
            .then((l) => {
              const a = l.find((u) => {
                var d;
                return (
                  ((d = u.name) == null ? void 0 : d.toLowerCase()) ===
                    (e == null ? void 0 : e.toLowerCase()) || u.id === e
                );
              });
              n(a), o(!1);
            });
      }, [e]),
      r)
    )
      return c.jsx("div", {
        className: "p-8 text-center text-gray-400",
        children: "Loading...",
      });
    if (!t)
      return c.jsx("div", {
        className: "p-8 text-center text-red-400",
        children: "Token not found",
      });
    const s = {
      id: t.id,
      name: t.name,
      symbol: t.symbol,
      image: t.image || "placeholder.svg",
      price: t.currentPriceUSD,
      priceChange: t.change24hPercentage,
      marketCap: t.marketCapUSD,
      totalLiquidity:
        (i = t.liquidityPoolInfo) == null ? void 0 : i.poolValueUSD,
      holders: t.holders,
      totalSupply: t.totalSupply,
      poolCreated: t.poolCreated,
      warnings: t.warnings,
    };
    return c.jsx(Sg, { token: s });
  },
  US = ({
    walletConnected: e = !1,
    walletBalance: t = 0,
    cryptoSymbol: n = "SOL",
  }) =>
    c.jsxs("header", {
      className:
        "flex items-center justify-between px-4 py-3 bg-gmgn-bg border-b border-gmgn-gray-800",
      children: [
        c.jsxs("div", {
          className: "flex items-center",
          children: [
            c.jsx("div", {
              className: "w-8 h-8 mr-2",
              children: c.jsx("img", {
                src: "./placeholder.svg",
                alt: "GMGN Logo",
                className: "w-full h-full",
              }),
            }),
            c.jsxs("div", {
              className: "flex items-center",
              children: [
                c.jsx("span", {
                  className: "text-white font-bold mr-1",
                  children: n,
                }),
                c.jsx("svg", {
                  className: "w-4 h-4 text-gray-400",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: c.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M19 9l-7 7-7-7",
                  }),
                }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          className: "flex items-center",
          children: [
            c.jsx("button", {
              className: "p-2 rounded-full mr-2",
              children: c.jsx("svg", {
                className: "w-6 h-6 text-white",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: c.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                }),
              }),
            }),
            c.jsx("button", {
              className: "p-2 rounded-full",
              children: c.jsx("svg", {
                className: "w-6 h-6 text-white",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: c.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
                }),
              }),
            }),
          ],
        }),
      ],
    }),
  WS = () => {
    const e = {
      avatar: "placeholder.svg",
      address: "0x4CDMr...BDr",
      username: "4CDMrp",
      balances: [
        { symbol: "SOL", amount: 12.34, usd: 2200 },
        { symbol: "USDC", amount: 500, usd: 500 },
      ],
      recentActivity: [
        { type: "Buy", asset: "SOL", amount: 2, date: "2024-05-25" },
        { type: "Sell", asset: "USDC", amount: 100, date: "2024-05-24" },
      ],
    };
    return c.jsx(c.Fragment, {
      children: c.jsxs("div", {
        className: "p-6 max-w-2xl mx-auto text-white",
        children: [
          c.jsxs("div", {
            className: "flex items-center mb-6",
            children: [
              c.jsx("img", {
                src: e.avatar,
                alt: "avatar",
                className: "w-16 h-16 rounded-full mr-4",
              }),
              c.jsxs("div", {
                children: [
                  c.jsx("div", {
                    className: "text-xl font-bold",
                    children: e.username,
                  }),
                  c.jsx("div", {
                    className: "text-gray-400 text-sm",
                    children: e.address,
                  }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: "mb-6",
            children: [
              c.jsx("h2", {
                className: "text-lg font-semibold mb-2",
                children: "Balances",
              }),
              c.jsx("div", {
                className:
                  "bg-gmgn-gray-900 rounded-lg p-4 flex flex-col gap-2",
                children: e.balances.map((t) =>
                  c.jsxs(
                    "div",
                    {
                      className: "flex justify-between",
                      children: [
                        c.jsx("span", { children: t.symbol }),
                        c.jsxs("span", {
                          children: [t.amount, " ($", t.usd, ")"],
                        }),
                      ],
                    },
                    t.symbol
                  )
                ),
              }),
            ],
          }),
          c.jsxs("div", {
            children: [
              c.jsx("h2", {
                className: "text-lg font-semibold mb-2",
                children: "Recent Activity",
              }),
              c.jsx("div", {
                className:
                  "bg-gmgn-gray-900 rounded-lg p-4 flex flex-col gap-2",
                children: e.recentActivity.map((t, n) =>
                  c.jsxs(
                    "div",
                    {
                      className: "flex justify-between text-sm",
                      children: [
                        c.jsxs("span", { children: [t.type, " ", t.asset] }),
                        c.jsxs("span", {
                          children: [t.amount, " on ", t.date],
                        }),
                      ],
                    },
                    n
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    });
  },
  VS = [
    {
      name: "dwns",
      description: "dog wif no spine",
      address: "57wtZ...ump",
      avatar: "",
      volume: "$1.1K",
      marketCap: "$5.9K",
      percent: "+17.1%",
      holders: 3,
      tx: 6,
      badges: ["100%"],
      time: "4s",
    },
    {
      name: "FRGNT",
      description: "Froggernaut",
      address: "G5E7u...oon",
      avatar: "",
      volume: "$297.2",
      marketCap: "$5.4K",
      percent: "+10.9%",
      holders: 2,
      tx: 2,
      badges: [],
      time: "13s",
    },
    {
      name: "Dge",
      description: "The O is Missing",
      address: "6fzxc...ump",
      avatar: "",
      volume: "$752.3",
      marketCap: "$5.6K",
      percent: "+8.4%",
      holders: 1,
      tx: 5,
      badges: ["100%"],
      time: "13s",
    },
  ],
  HS = () =>
    c.jsxs("div", {
      className: "p-4 max-w-xl mx-auto",
      children: [
        c.jsx("h1", {
          className: "text-2xl font-bold mb-4",
          children: "Trending Web3 Coins",
        }),
        c.jsx("div", {
          className: "space-y-4",
          children: VS.map((e, t) =>
            c.jsxs(
              "div",
              {
                className:
                  "flex items-center bg-gmgn-gray-900 rounded-lg p-4 gap-4 shadow",
                children: [
                  c.jsx("div", {
                    className:
                      "w-16 h-16 rounded-full bg-gmgn-gray-800 flex items-center justify-center overflow-hidden",
                    children: e.avatar
                      ? c.jsx("img", {
                          src: e.avatar,
                          alt: e.name,
                          className: "w-full h-full object-cover",
                        })
                      : c.jsx("div", {
                          className: "w-10 h-10 bg-gray-700 rounded-full",
                        }),
                  }),
                  c.jsxs("div", {
                    className: "flex-1",
                    children: [
                      c.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          c.jsx("span", {
                            className: "font-bold text-lg text-white",
                            children: e.name,
                          }),
                          c.jsx("span", {
                            className: "text-gray-400",
                            children: e.description,
                          }),
                        ],
                      }),
                      c.jsx("div", {
                        className: "text-xs text-gray-500 mb-1",
                        children: e.address,
                      }),
                      c.jsxs("div", {
                        className: "flex gap-4 text-sm",
                        children: [
                          c.jsxs("span", {
                            children: [
                              "V ",
                              c.jsx("span", {
                                className: "font-semibold",
                                children: e.volume,
                              }),
                            ],
                          }),
                          c.jsxs("span", {
                            children: [
                              "MC ",
                              c.jsx("span", {
                                className: "font-semibold",
                                children: e.marketCap,
                              }),
                            ],
                          }),
                          c.jsx("span", {
                            className: "text-green-400",
                            children: e.percent,
                          }),
                          c.jsxs("span", {
                            className: "text-gray-400",
                            children: ["👥 ", e.holders],
                          }),
                          c.jsxs("span", {
                            className: "text-gray-400",
                            children: ["TX ", e.tx],
                          }),
                          e.badges.map((n, r) =>
                            c.jsx(
                              "span",
                              {
                                className:
                                  "ml-2 px-2 py-0.5 rounded bg-red-900 text-red-400 text-xs font-bold",
                                children: n,
                              },
                              r
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                  c.jsx("div", {
                    children: c.jsx("button", {
                      className: "p-2 rounded-full bg-gmgn-gray-800",
                      children: c.jsxs("svg", {
                        width: "24",
                        height: "24",
                        fill: "none",
                        stroke: "#4ade80",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        children: [
                          c.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                          c.jsx("path", {
                            d: "M8 12l2 2 4-4",
                            stroke: "#4ade80",
                            strokeWidth: "2",
                            fill: "none",
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              },
              t
            )
          ),
        }),
      ],
    }),
  QS = new v2(),
  KS = () =>
    c.jsx(x2, {
      client: QS,
      children: c.jsx(K1, {
        children: c.jsxs("div", {
          className: "bg-gmgn-bg min-h-screen",
          children: [
            c.jsx(Wx, {}),
            c.jsx(Sw, {}),
            c.jsx(US, {}),
            c.jsx(yS, {
              children: c.jsxs(dS, {
                children: [
                  c.jsx(et, { path: "/", element: c.jsx(xr, {}) }),
                  c.jsx(et, { path: "/login", element: c.jsx(FS, {}) }),
                  c.jsx(et, { path: "/trending", element: c.jsx(xr, {}) }),
                  c.jsx(et, { path: "/trenches", element: c.jsx(HS, {}) }),
                  c.jsx(et, { path: "/new", element: c.jsx(xr, {}) }),
                  c.jsx(et, { path: "/copytrade", element: c.jsx(xr, {}) }),
                  c.jsx(et, { path: "/wallet", element: c.jsx(WS, {}) }),
                  c.jsx(et, { path: "/snipex", element: c.jsx(xr, {}) }),
                  c.jsx(et, { path: "/monitor", element: c.jsx(xr, {}) }),
                  c.jsx(et, { path: "*", element: c.jsx(IS, {}) }),
                  c.jsx(et, { path: "/token/:slug", element: c.jsx(BS, {}) }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
$h(document.getElementById("root")).render(c.jsx(KS, {}));
