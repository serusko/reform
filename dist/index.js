import { jsx as ye, jsxs as Qe } from "react/jsx-runtime";
import { useContext as ze, useReducer as ke, useEffect as ge, useLayoutEffect as Je, createContext as $e, useRef as $, useState as Xe, createElement as Ze, useCallback as q, useMemo as Ee } from "react";
import { unstable_batchedUpdates as xe } from "react-dom";
var je = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, pe = { exports: {} }, me = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function en() {
  return Oe || (Oe = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = !1, c = !1, i = 5;
      function f(o, v) {
        var w = o.length;
        o.push(v), O(o, v, w);
      }
      function d(o) {
        return o.length === 0 ? null : o[0];
      }
      function y(o) {
        if (o.length === 0)
          return null;
        var v = o[0], w = o.pop();
        return w !== v && (o[0] = w, h(o, w, 0)), v;
      }
      function O(o, v, w) {
        for (var I = w; I > 0; ) {
          var D = I - 1 >>> 1, K = o[D];
          if (b(K, v) > 0)
            o[D] = v, o[I] = K, I = D;
          else
            return;
        }
      }
      function h(o, v, w) {
        for (var I = w, D = o.length, K = D >>> 1; I < K; ) {
          var A = (I + 1) * 2 - 1, j = o[A], M = A + 1, le = o[M];
          if (b(j, v) < 0)
            M < D && b(le, j) < 0 ? (o[I] = le, o[M] = v, I = M) : (o[I] = j, o[A] = v, I = A);
          else if (M < D && b(le, v) < 0)
            o[I] = le, o[M] = v, I = M;
          else
            return;
        }
      }
      function b(o, v) {
        var w = o.sortIndex - v.sortIndex;
        return w !== 0 ? w : o.id - v.id;
      }
      var g = 1, u = 2, t = 3, S = 4, T = 5;
      function P(o, v) {
      }
      var C = typeof performance == "object" && typeof performance.now == "function";
      if (C) {
        var s = performance;
        e.unstable_now = function() {
          return s.now();
        };
      } else {
        var r = Date, a = r.now();
        e.unstable_now = function() {
          return r.now() - a;
        };
      }
      var p = 1073741823, E = -1, B = 250, X = 5e3, J = 1e4, te = p, N = [], H = [], ee = 1, V = null, L = t, Z = !1, U = !1, G = !1, l = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, _ = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function k(o) {
        for (var v = d(H); v !== null; ) {
          if (v.callback === null)
            y(H);
          else if (v.startTime <= o)
            y(H), v.sortIndex = v.expirationTime, f(N, v);
          else
            return;
          v = d(H);
        }
      }
      function F(o) {
        if (G = !1, k(o), !U)
          if (d(N) !== null)
            U = !0, de(z);
          else {
            var v = d(H);
            v !== null && ve(F, v.startTime - o);
          }
      }
      function z(o, v) {
        U = !1, G && (G = !1, Pe()), Z = !0;
        var w = L;
        try {
          var I;
          if (!c)
            return W(o, v);
        } finally {
          V = null, L = w, Z = !1;
        }
      }
      function W(o, v) {
        var w = v;
        for (k(w), V = d(N); V !== null && !n && !(V.expirationTime > w && (!o || we())); ) {
          var I = V.callback;
          if (typeof I == "function") {
            V.callback = null, L = V.priorityLevel;
            var D = V.expirationTime <= w, K = I(D);
            w = e.unstable_now(), typeof K == "function" ? V.callback = K : V === d(N) && y(N), k(w);
          } else
            y(N);
          V = d(N);
        }
        if (V !== null)
          return !0;
        var A = d(H);
        return A !== null && ve(F, A.startTime - w), !1;
      }
      function ne(o, v) {
        switch (o) {
          case g:
          case u:
          case t:
          case S:
          case T:
            break;
          default:
            o = t;
        }
        var w = L;
        L = o;
        try {
          return v();
        } finally {
          L = w;
        }
      }
      function Y(o) {
        var v;
        switch (L) {
          case g:
          case u:
          case t:
            v = t;
            break;
          default:
            v = L;
            break;
        }
        var w = L;
        L = v;
        try {
          return o();
        } finally {
          L = w;
        }
      }
      function x(o) {
        var v = L;
        return function() {
          var w = L;
          L = v;
          try {
            return o.apply(this, arguments);
          } finally {
            L = w;
          }
        };
      }
      function Ae(o, v, w) {
        var I = e.unstable_now(), D;
        if (typeof w == "object" && w !== null) {
          var K = w.delay;
          typeof K == "number" && K > 0 ? D = I + K : D = I;
        } else
          D = I;
        var A;
        switch (o) {
          case g:
            A = E;
            break;
          case u:
            A = B;
            break;
          case T:
            A = te;
            break;
          case S:
            A = J;
            break;
          case t:
          default:
            A = X;
            break;
        }
        var j = D + A, M = {
          id: ee++,
          callback: v,
          priorityLevel: o,
          startTime: D,
          expirationTime: j,
          sortIndex: -1
        };
        return D > I ? (M.sortIndex = D, f(H, M), d(N) === null && M === d(H) && (G ? Pe() : G = !0, ve(F, D - I))) : (M.sortIndex = j, f(N, M), !U && !Z && (U = !0, de(z))), M;
      }
      function Me() {
      }
      function Ne() {
        !U && !Z && (U = !0, de(z));
      }
      function Be() {
        return d(N);
      }
      function He(o) {
        o.callback = null;
      }
      function Ue() {
        return L;
      }
      var ie = !1, ue = null, ae = -1, ce = i, he = -1;
      function we() {
        var o = e.unstable_now() - he;
        return !(o < ce);
      }
      function Ke() {
      }
      function Ge(o) {
        if (o < 0 || o > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        o > 0 ? ce = Math.floor(1e3 / o) : ce = i;
      }
      var fe = function() {
        if (ue !== null) {
          var o = e.unstable_now();
          he = o;
          var v = !0, w = !0;
          try {
            w = ue(v, o);
          } finally {
            w ? re() : (ie = !1, ue = null);
          }
        } else
          ie = !1;
      }, re;
      if (typeof _ == "function")
        re = function() {
          _(fe);
        };
      else if (typeof MessageChannel < "u") {
        var Te = new MessageChannel(), We = Te.port2;
        Te.port1.onmessage = fe, re = function() {
          We.postMessage(null);
        };
      } else
        re = function() {
          l(fe, 0);
        };
      function de(o) {
        ue = o, ie || (ie = !0, re());
      }
      function ve(o, v) {
        ae = l(function() {
          o(e.unstable_now());
        }, v);
      }
      function Pe() {
        m(ae), ae = -1;
      }
      var Ye = Ke, qe = null;
      e.unstable_IdlePriority = T, e.unstable_ImmediatePriority = g, e.unstable_LowPriority = S, e.unstable_NormalPriority = t, e.unstable_Profiling = qe, e.unstable_UserBlockingPriority = u, e.unstable_cancelCallback = He, e.unstable_continueExecution = Ne, e.unstable_forceFrameRate = Ge, e.unstable_getCurrentPriorityLevel = Ue, e.unstable_getFirstCallbackNode = Be, e.unstable_next = Y, e.unstable_pauseExecution = Me, e.unstable_requestPaint = Ye, e.unstable_runWithPriority = ne, e.unstable_scheduleCallback = Ae, e.unstable_shouldYield = we, e.unstable_wrapCallback = x, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(me)), me;
}
var be = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function nn() {
  return Se || (Se = 1, function(e) {
    function n(l, m) {
      var _ = l.length;
      l.push(m);
      e:
        for (; 0 < _; ) {
          var k = _ - 1 >>> 1, F = l[k];
          if (0 < f(F, m))
            l[k] = m, l[_] = F, _ = k;
          else
            break e;
        }
    }
    function c(l) {
      return l.length === 0 ? null : l[0];
    }
    function i(l) {
      if (l.length === 0)
        return null;
      var m = l[0], _ = l.pop();
      if (_ !== m) {
        l[0] = _;
        e:
          for (var k = 0, F = l.length, z = F >>> 1; k < z; ) {
            var W = 2 * (k + 1) - 1, ne = l[W], Y = W + 1, x = l[Y];
            if (0 > f(ne, _))
              Y < F && 0 > f(x, ne) ? (l[k] = x, l[Y] = _, k = Y) : (l[k] = ne, l[W] = _, k = W);
            else if (Y < F && 0 > f(x, _))
              l[k] = x, l[Y] = _, k = Y;
            else
              break e;
          }
      }
      return m;
    }
    function f(l, m) {
      var _ = l.sortIndex - m.sortIndex;
      return _ !== 0 ? _ : l.id - m.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      e.unstable_now = function() {
        return d.now();
      };
    } else {
      var y = Date, O = y.now();
      e.unstable_now = function() {
        return y.now() - O;
      };
    }
    var h = [], b = [], g = 1, u = null, t = 3, S = !1, T = !1, P = !1, C = typeof setTimeout == "function" ? setTimeout : null, s = typeof clearTimeout == "function" ? clearTimeout : null, r = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function a(l) {
      for (var m = c(b); m !== null; ) {
        if (m.callback === null)
          i(b);
        else if (m.startTime <= l)
          i(b), m.sortIndex = m.expirationTime, n(h, m);
        else
          break;
        m = c(b);
      }
    }
    function p(l) {
      if (P = !1, a(l), !T)
        if (c(h) !== null)
          T = !0, U(E);
        else {
          var m = c(b);
          m !== null && G(p, m.startTime - l);
        }
    }
    function E(l, m) {
      T = !1, P && (P = !1, s(J), J = -1), S = !0;
      var _ = t;
      try {
        for (a(m), u = c(h); u !== null && (!(u.expirationTime > m) || l && !H()); ) {
          var k = u.callback;
          if (typeof k == "function") {
            u.callback = null, t = u.priorityLevel;
            var F = k(u.expirationTime <= m);
            m = e.unstable_now(), typeof F == "function" ? u.callback = F : u === c(h) && i(h), a(m);
          } else
            i(h);
          u = c(h);
        }
        if (u !== null)
          var z = !0;
        else {
          var W = c(b);
          W !== null && G(p, W.startTime - m), z = !1;
        }
        return z;
      } finally {
        u = null, t = _, S = !1;
      }
    }
    var B = !1, X = null, J = -1, te = 5, N = -1;
    function H() {
      return !(e.unstable_now() - N < te);
    }
    function ee() {
      if (X !== null) {
        var l = e.unstable_now();
        N = l;
        var m = !0;
        try {
          m = X(!0, l);
        } finally {
          m ? V() : (B = !1, X = null);
        }
      } else
        B = !1;
    }
    var V;
    if (typeof r == "function")
      V = function() {
        r(ee);
      };
    else if (typeof MessageChannel < "u") {
      var L = new MessageChannel(), Z = L.port2;
      L.port1.onmessage = ee, V = function() {
        Z.postMessage(null);
      };
    } else
      V = function() {
        C(ee, 0);
      };
    function U(l) {
      X = l, B || (B = !0, V());
    }
    function G(l, m) {
      J = C(function() {
        l(e.unstable_now());
      }, m);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(l) {
      l.callback = null;
    }, e.unstable_continueExecution = function() {
      T || S || (T = !0, U(E));
    }, e.unstable_forceFrameRate = function(l) {
      0 > l || 125 < l ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : te = 0 < l ? Math.floor(1e3 / l) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return t;
    }, e.unstable_getFirstCallbackNode = function() {
      return c(h);
    }, e.unstable_next = function(l) {
      switch (t) {
        case 1:
        case 2:
        case 3:
          var m = 3;
          break;
        default:
          m = t;
      }
      var _ = t;
      t = m;
      try {
        return l();
      } finally {
        t = _;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(l, m) {
      switch (l) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          l = 3;
      }
      var _ = t;
      t = l;
      try {
        return m();
      } finally {
        t = _;
      }
    }, e.unstable_scheduleCallback = function(l, m, _) {
      var k = e.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? k + _ : k) : _ = k, l) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return F = _ + F, l = { id: g++, callback: m, priorityLevel: l, startTime: _, expirationTime: F, sortIndex: -1 }, _ > k ? (l.sortIndex = _, n(b, l), c(h) === null && l === c(b) && (P ? (s(J), J = -1) : P = !0, G(p, _ - k))) : (l.sortIndex = F, n(h, l), T || S || (T = !0, U(E))), l;
    }, e.unstable_shouldYield = H, e.unstable_wrapCallback = function(l) {
      var m = t;
      return function() {
        var _ = t;
        t = m;
        try {
          return l.apply(this, arguments);
        } finally {
          t = _;
        }
      };
    };
  }(be)), be;
}
process.env.NODE_ENV === "production" ? pe.exports = nn() : pe.exports = en();
var _e = pe.exports;
const oe = Symbol(), rn = Symbol(), Ie = typeof window > "u" || /ServerSideRendering/.test(window.navigator && window.navigator.userAgent) ? ge : Je, tn = _e.unstable_runWithPriority ? (e) => _e.unstable_runWithPriority(_e.unstable_NormalPriority, e) : (e) => e(), un = (e) => e;
function Fe(e) {
  const n = $e({ [oe]: { v: { current: e }, n: { current: -1 }, l: /* @__PURE__ */ new Set(), u: (i) => i() } });
  var c;
  return n[rn] = n.Provider, n.Provider = (c = n.Provider, ({ value: i, children: f }) => {
    const d = $(i), y = $(0), [O, h] = Xe(null);
    O && (O(i), h(null));
    const b = $();
    if (!b.current) {
      const g = /* @__PURE__ */ new Set(), u = (t, S) => {
        xe(() => {
          y.current += 1;
          const T = { n: y.current };
          S != null && S.suspense && (T.n *= -1, T.p = new Promise((P) => {
            h(() => (C) => {
              T.v = C, delete T.p, P(C);
            });
          })), g.forEach((P) => P(T)), t();
        });
      };
      b.current = { [oe]: { v: d, n: y, l: g, u } };
    }
    return Ie(() => {
      d.current = i, y.current += 1, tn(() => {
        b.current[oe].l.forEach((g) => {
          g({ n: y.current, v: i });
        });
      });
    }, [i]), Ze(c, { value: b.current }, f);
  }), delete n.Consumer, n;
}
function Le(e, n) {
  const c = ze(e)[oe];
  if (typeof process == "object" && process.env.NODE_ENV !== "production" && !c)
    throw new Error("useContextSelector requires special context");
  const { v: { current: i }, n: { current: f }, l: d } = c, y = n(i), [O, h] = ke((b, g) => {
    if (!g)
      return [i, y];
    if ("p" in g)
      throw g.p;
    if (g.n === f)
      return Object.is(b[1], y) ? b : [i, y];
    try {
      if ("v" in g) {
        if (Object.is(b[0], g.v))
          return b;
        const u = n(g.v);
        return Object.is(b[1], u) ? b : [g.v, u];
      }
    } catch {
    }
    return [...b];
  }, [i, y]);
  return Object.is(O[1], y) || h(), Ie(() => (d.add(h), () => {
    d.delete(h);
  }), [d]), O[1];
}
function ln(e) {
  return Le(e, un);
}
const Ce = {
  errors: {},
  initialValues: {},
  isValid: !0,
  isValidating: !1,
  lastAction: "init",
  required: {},
  submitted: 0,
  touched: {},
  values: {}
}, Ve = Fe(Ce), De = Fe(() => {
});
var Re = { exports: {} };
(function(e) {
  (function(n, c) {
    e.exports = c();
  })(je, function() {
    var n = Object.prototype.toString;
    function c(u, t) {
      return u == null ? !1 : Object.prototype.hasOwnProperty.call(u, t);
    }
    function i(u) {
      if (!u || y(u) && u.length === 0)
        return !0;
      if (typeof u != "string") {
        for (var t in u)
          if (c(u, t))
            return !1;
        return !0;
      }
      return !1;
    }
    function f(u) {
      return n.call(u);
    }
    function d(u) {
      return typeof u == "object" && f(u) === "[object Object]";
    }
    var y = Array.isArray || function(u) {
      return n.call(u) === "[object Array]";
    };
    function O(u) {
      return typeof u == "boolean" || f(u) === "[object Boolean]";
    }
    function h(u) {
      var t = parseInt(u);
      return t.toString() === u ? t : u;
    }
    function b(u) {
      u = u || {};
      var t = function(s) {
        return Object.keys(t).reduce(function(r, a) {
          return a === "create" || typeof t[a] == "function" && (r[a] = t[a].bind(t, s)), r;
        }, {});
      }, S;
      u.includeInheritedProps ? S = function() {
        return !0;
      } : S = function(s, r) {
        return typeof r == "number" && Array.isArray(s) || c(s, r);
      };
      function T(s, r) {
        if (S(s, r))
          return s[r];
      }
      var P;
      u.includeInheritedProps ? P = function(s, r) {
        typeof r != "string" && typeof r != "number" && (r = String(r));
        var a = T(s, r);
        if (r === "__proto__" || r === "prototype" || r === "constructor" && typeof a == "function")
          throw new Error("For security reasons, object's magic properties cannot be set");
        return a;
      } : P = function(s, r) {
        return T(s, r);
      };
      function C(s, r, a, p) {
        if (typeof r == "number" && (r = [r]), !r || r.length === 0)
          return s;
        if (typeof r == "string")
          return C(s, r.split(".").map(h), a, p);
        var E = r[0], B = P(s, E);
        return r.length === 1 ? ((B === void 0 || !p) && (s[E] = a), B) : (B === void 0 && (typeof r[1] == "number" ? s[E] = [] : s[E] = {}), C(s[E], r.slice(1), a, p));
      }
      return t.has = function(s, r) {
        if (typeof r == "number" ? r = [r] : typeof r == "string" && (r = r.split(".")), !r || r.length === 0)
          return !!s;
        for (var a = 0; a < r.length; a++) {
          var p = h(r[a]);
          if (typeof p == "number" && y(s) && p < s.length || (u.includeInheritedProps ? p in Object(s) : c(s, p)))
            s = s[p];
          else
            return !1;
        }
        return !0;
      }, t.ensureExists = function(s, r, a) {
        return C(s, r, a, !0);
      }, t.set = function(s, r, a, p) {
        return C(s, r, a, p);
      }, t.insert = function(s, r, a, p) {
        var E = t.get(s, r);
        p = ~~p, y(E) || (E = [], t.set(s, r, E)), E.splice(p, 0, a);
      }, t.empty = function(s, r) {
        if (!i(r) && s != null) {
          var a, p;
          if (a = t.get(s, r)) {
            if (typeof a == "string")
              return t.set(s, r, "");
            if (O(a))
              return t.set(s, r, !1);
            if (typeof a == "number")
              return t.set(s, r, 0);
            if (y(a))
              a.length = 0;
            else if (d(a))
              for (p in a)
                S(a, p) && delete a[p];
            else
              return t.set(s, r, null);
          }
        }
      }, t.push = function(s, r) {
        var a = t.get(s, r);
        y(a) || (a = [], t.set(s, r, a)), a.push.apply(a, Array.prototype.slice.call(arguments, 2));
      }, t.coalesce = function(s, r, a) {
        for (var p, E = 0, B = r.length; E < B; E++)
          if ((p = t.get(s, r[E])) !== void 0)
            return p;
        return a;
      }, t.get = function(s, r, a) {
        if (typeof r == "number" && (r = [r]), !r || r.length === 0)
          return s;
        if (s == null)
          return a;
        if (typeof r == "string")
          return t.get(s, r.split("."), a);
        var p = h(r[0]), E = P(s, p);
        return E === void 0 ? a : r.length === 1 ? E : t.get(s[p], r.slice(1), a);
      }, t.del = function(r, a) {
        if (typeof a == "number" && (a = [a]), r == null || i(a))
          return r;
        if (typeof a == "string")
          return t.del(r, a.split("."));
        var p = h(a[0]);
        if (P(r, p), !S(r, p))
          return r;
        if (a.length === 1)
          y(r) ? r.splice(p, 1) : delete r[p];
        else
          return t.del(r[p], a.slice(1));
        return r;
      }, t;
    }
    var g = b();
    return g.create = b, g.withInheritedProps = b({ includeInheritedProps: !0 }), g;
  });
})(Re);
var R = Re.exports;
function on(e, n) {
  return function(i, f) {
    switch (f.type) {
      case "initialValues":
        i.initialValues = { ...f.value || {} };
      case "reset":
        i.values = { ...i.initialValues || {} };
      case "init": {
        const d = e == null ? void 0 : e(i.values || {});
        return {
          ...i,
          errors: {},
          initialValues: "initialValues" in f && f.initialValues || i.initialValues || {},
          isSubmitting: !1,
          isValid: !d,
          isValidating: !1,
          required: (n == null ? void 0 : n(i.values)) || {},
          submitted: 0,
          touched: {}
        };
      }
      case "setValue": {
        const d = { ...i.values };
        if (R.get(d, f.name) === f.value)
          return i;
        R.set(d, f.name, f.value);
        const y = e == null ? void 0 : e(d);
        let O = i.touched || {};
        return R.get(O, f.name) || (O = { ...O }, R.set(O, f.name, !0)), {
          ...i,
          errors: y || {},
          isValid: !y,
          required: (n == null ? void 0 : n(d)) || {},
          touched: O,
          values: d
        };
      }
      case "setReadOnly": {
        if (!f.name)
          return i.readOnly === f.value ? i : { ...i, readOnly: !!f.value };
        const d = i.disabledFields || {};
        return R.set(d, f.name, f.value), { ...i, readonlyFields: d };
      }
      case "setDisabled": {
        if (!f.name)
          return i.disabled === f.value ? i : { ...i, disabled: !!f.value };
        const d = i.disabledFields || {};
        return R.set(d, f.name, f.value), { ...i, disabledFields: d };
      }
      case "setTouched": {
        const d = (f.name ? Array.isArray(f.name) ? f.name : [f.name] : []).filter((O) => i.touched[O] !== f.touched);
        if (!d.length)
          return i;
        const y = d.reduce(
          (O, h) => ({ ...O, [h]: !0 }),
          i.touched || {}
        );
        return { ...i, touched: y };
      }
      case "startSubmit": {
        if (i.isSubmitting)
          return i;
        const d = e == null ? void 0 : e(i.values), y = !d;
        return {
          ...i,
          disabled: y,
          errors: d || {},
          isSubmitting: y,
          isValid: y,
          submitted: i.submitted || 1
        };
      }
      case "endSubmit":
        return i.isSubmitting ? {
          ...i,
          disabled: !1,
          isSubmitting: !1
        } : i;
      default:
        return i;
    }
  };
}
function sn(e, n, c, i, f, d) {
  const y = $(), O = $((g, u, t) => {
    const S = y.current, T = f.current, P = d.current;
    if (!S) {
      console.error('Cannot access to Dispatch trigger inside "on" action');
      return;
    }
    if (T && g.type === "startSubmit" && t.isSubmitting && !u.isSubmitting) {
      const C = T == null ? void 0 : T(t.values);
      C && typeof C.then == "function" ? C.finally(() => S({ type: "endSubmit" })) : S({ type: "endSubmit" });
    }
    P && P(g, u, t, S);
  }), h = q(
    (g, u) => {
      const t = e(g, u);
      return O.current(u, g, t), t;
    },
    [e, O]
  ), b = ke(
    h,
    Ce,
    (g) => e(
      {
        ...g,
        disabled: c,
        initialValues: n || {},
        readOnly: i,
        values: n || {}
      },
      { type: "init" }
    )
  );
  return y.current = b[1], b;
}
const an = ({
  children: e,
  disabled: n,
  getRequired: c,
  id: i,
  initialValues: f,
  onStateUpdate: d,
  onSubmit: y,
  readOnly: O,
  reducer: h,
  validation: b
}) => {
  const g = q(
    (s) => (b == null ? void 0 : b(s)) || void 0,
    [b]
  ), u = Ee(
    () => h || on(g, c),
    [c, h, g]
  ), t = $(d);
  t.current = d;
  const S = $(y);
  S.current = y;
  const [T, P] = sn(
    u,
    f,
    !!n,
    !!O,
    S,
    t
  );
  ge(() => {
    f !== T.initialValues && P({ type: "initialValues", value: f });
  }, [f]), ge(() => {
    T.disabled !== !!n && P({ type: "setDisabled", value: !!n });
  }, [n, P]);
  const C = q(
    (s) => {
      s.preventDefault(), P({ type: "startSubmit" });
    },
    [P]
  );
  return /* @__PURE__ */ ye(De.Provider, { value: P, children: /* @__PURE__ */ ye(Ve.Provider, { value: T, children: /* @__PURE__ */ Qe("form", { id: i, onSubmit: C, children: [
    typeof e == "function" ? e(T, P) : e,
    /* @__PURE__ */ ye("button", { style: { left: -9999, position: "fixed", top: -9999 }, type: "submit" })
  ] }) }) });
}, kn = an;
function Q(e) {
  return Le(Ve, e);
}
function cn(e) {
  return Q(
    (n) => (n == null ? void 0 : n.submitted) > 0 || R.get((n == null ? void 0 : n.touched) || {}, e) ? R.get((n == null ? void 0 : n.errors) || {}, e) : void 0
  );
}
function fn(e) {
  return Q((n) => R.get((n == null ? void 0 : n.initialValues) || {}, e) || null);
}
function dn(e) {
  return Q((n) => {
    const c = R.get(n.values || {}, e) || null, i = R.get(n.initialValues || {}, e) || null;
    return c !== i;
  });
}
function vn(e) {
  return Q((n) => {
    const c = R.get((n == null ? void 0 : n.disabledFields) || {}, e);
    return typeof c == "boolean" ? c : !!(n != null && n.disabled);
  });
}
function yn(e) {
  return Q((n) => {
    const c = R.get(n.readonlyFields || {}, e);
    return typeof c == "boolean" ? c : !!n.readOnly;
  });
}
function mn(e) {
  return Q((n) => !!R.get((n == null ? void 0 : n.required) || {}, e));
}
function bn(e) {
  return Q((n) => R.get((n == null ? void 0 : n.isValidatingFields) || {}, e) || !!(n != null && n.isValidating));
}
function _n(e) {
  return Q((n) => (n == null ? void 0 : n.submitted) > 0 || !!R.get((n == null ? void 0 : n.touched) || {}, e));
}
function gn(e) {
  return Q((n) => R.get(n.values || {}, e) || null);
}
function se() {
  return ln(De) || (() => {
  });
}
function pn(e) {
  const n = se();
  return q(
    (c) => {
      n({ name: e, type: "setDisabled", value: c });
    },
    [n, e]
  );
}
function hn(e) {
  const n = se();
  return q(
    (c) => {
      (c && typeof c.then == "function" ? c : Promise.resolve(c)).then((f) => n({ error: f, name: e, type: "setError" }));
    },
    [n, e]
  );
}
function wn(e) {
  const n = se();
  return q(
    (c = !0) => n({ name: e, touched: c, type: "setTouched" }),
    [n, e]
  );
}
function Tn(e) {
  const n = se();
  return q(
    (c) => n({ name: e, type: "setValue", value: c }),
    [n, e]
  );
}
function En(e) {
  const n = fn(e), c = _n(e), i = dn(e), f = cn(e), d = vn(e), y = yn(e), O = bn(e), h = mn(e), b = gn(e), g = wn(e), u = Tn(e), t = hn(e), S = pn(e), T = q(() => {
    u(null);
  }, [u]), P = q(() => u(n), [n, u]);
  return Ee(
    () => ({
      clearValue: T,
      error: f,
      initialValue: n,
      isChanged: i,
      isDisabled: d,
      isReadOnly: y,
      isRequired: h,
      isTouched: c,
      isValidating: O,
      name: e,
      resetValue: P,
      setDisabled: S,
      setError: t,
      setTouched: g,
      setValue: u,
      value: b
    }),
    [
      T,
      f,
      n,
      i,
      d,
      y,
      h,
      c,
      O,
      e,
      P,
      t,
      g,
      u,
      S,
      b
    ]
  );
}
export {
  kn as default,
  En as useField,
  gn as useFieldValue
};
