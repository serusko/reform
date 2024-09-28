import { jsx as Z, jsxs as oe, Fragment as Oe } from "react/jsx-runtime";
import { useContext as ze, useReducer as Le, useEffect as fe, useLayoutEffect as Je, createContext as Xe, useRef as $, useState as Ze, createElement as en, useCallback as B, useMemo as ee } from "react";
import { unstable_batchedUpdates as nn } from "react-dom";
import { get as M, set as he } from "object-path";
var we = { exports: {} }, pe = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function tn() {
  return Ce || (Ce = 1, function(e) {
    function n(t, f) {
      var d = t.length;
      t.push(f);
      e: for (; 0 < d; ) {
        var p = d - 1 >>> 1, S = t[p];
        if (0 < o(S, f)) t[p] = f, t[d] = S, d = p;
        else break e;
      }
    }
    function r(t) {
      return t.length === 0 ? null : t[0];
    }
    function u(t) {
      if (t.length === 0) return null;
      var f = t[0], d = t.pop();
      if (d !== f) {
        t[0] = d;
        e: for (var p = 0, S = t.length, X = S >>> 1; p < X; ) {
          var K = 2 * (p + 1) - 1, ie = t[K], x = K + 1, te = t[x];
          if (0 > o(ie, d)) x < S && 0 > o(te, ie) ? (t[p] = te, t[x] = d, p = x) : (t[p] = ie, t[K] = d, p = K);
          else if (x < S && 0 > o(te, d)) t[p] = te, t[x] = d, p = x;
          else break e;
        }
      }
      return f;
    }
    function o(t, f) {
      var d = t.sortIndex - f.sortIndex;
      return d !== 0 ? d : t.id - f.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var v = performance;
      e.unstable_now = function() {
        return v.now();
      };
    } else {
      var l = Date, h = l.now();
      e.unstable_now = function() {
        return l.now() - h;
      };
    }
    var c = [], s = [], y = 1, b = null, m = 3, T = !1, w = !1, C = !1, I = typeof setTimeout == "function" ? setTimeout : null, W = typeof clearTimeout == "function" ? clearTimeout : null, R = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function V(t) {
      for (var f = r(s); f !== null; ) {
        if (f.callback === null) u(s);
        else if (f.startTime <= t) u(s), f.sortIndex = f.expirationTime, n(c, f);
        else break;
        f = r(s);
      }
    }
    function U(t) {
      if (C = !1, V(t), !w) if (r(c) !== null) w = !0, N(A);
      else {
        var f = r(s);
        f !== null && Y(U, f.startTime - t);
      }
    }
    function A(t, f) {
      w = !1, C && (C = !1, W(G), G = -1), T = !0;
      var d = m;
      try {
        for (V(f), b = r(c); b !== null && (!(b.expirationTime > f) || t && !F()); ) {
          var p = b.callback;
          if (typeof p == "function") {
            b.callback = null, m = b.priorityLevel;
            var S = p(b.expirationTime <= f);
            f = e.unstable_now(), typeof S == "function" ? b.callback = S : b === r(c) && u(c), V(f);
          } else u(c);
          b = r(c);
        }
        if (b !== null) var X = !0;
        else {
          var K = r(s);
          K !== null && Y(U, K.startTime - f), X = !1;
        }
        return X;
      } finally {
        b = null, m = d, T = !1;
      }
    }
    var z = !1, j = null, G = -1, J = 5, O = -1;
    function F() {
      return !(e.unstable_now() - O < J);
    }
    function q() {
      if (j !== null) {
        var t = e.unstable_now();
        O = t;
        var f = !0;
        try {
          f = j(!0, t);
        } finally {
          f ? k() : (z = !1, j = null);
        }
      } else z = !1;
    }
    var k;
    if (typeof R == "function") k = function() {
      R(q);
    };
    else if (typeof MessageChannel < "u") {
      var P = new MessageChannel(), ne = P.port2;
      P.port1.onmessage = q, k = function() {
        ne.postMessage(null);
      };
    } else k = function() {
      I(q, 0);
    };
    function N(t) {
      j = t, z || (z = !0, k());
    }
    function Y(t, f) {
      G = I(function() {
        t(e.unstable_now());
      }, f);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(t) {
      t.callback = null;
    }, e.unstable_continueExecution = function() {
      w || T || (w = !0, N(A));
    }, e.unstable_forceFrameRate = function(t) {
      0 > t || 125 < t ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : J = 0 < t ? Math.floor(1e3 / t) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return m;
    }, e.unstable_getFirstCallbackNode = function() {
      return r(c);
    }, e.unstable_next = function(t) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var f = 3;
          break;
        default:
          f = m;
      }
      var d = m;
      m = f;
      try {
        return t();
      } finally {
        m = d;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(t, f) {
      switch (t) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          t = 3;
      }
      var d = m;
      m = t;
      try {
        return f();
      } finally {
        m = d;
      }
    }, e.unstable_scheduleCallback = function(t, f, d) {
      var p = e.unstable_now();
      switch (typeof d == "object" && d !== null ? (d = d.delay, d = typeof d == "number" && 0 < d ? p + d : p) : d = p, t) {
        case 1:
          var S = -1;
          break;
        case 2:
          S = 250;
          break;
        case 5:
          S = 1073741823;
          break;
        case 4:
          S = 1e4;
          break;
        default:
          S = 5e3;
      }
      return S = d + S, t = { id: y++, callback: f, priorityLevel: t, startTime: d, expirationTime: S, sortIndex: -1 }, d > p ? (t.sortIndex = d, n(s, t), r(c) === null && t === r(s) && (C ? (W(G), G = -1) : C = !0, Y(U, d - p))) : (t.sortIndex = S, n(c, t), w || T || (w = !0, N(A))), t;
    }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function(t) {
      var f = m;
      return function() {
        var d = m;
        m = f;
        try {
          return t.apply(this, arguments);
        } finally {
          m = d;
        }
      };
    };
  }(pe)), pe;
}
var ge = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function rn() {
  return Fe || (Fe = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = !1, r = !1, u = 5;
      function o(i, a) {
        var _ = i.length;
        i.push(a), h(i, a, _);
      }
      function v(i) {
        return i.length === 0 ? null : i[0];
      }
      function l(i) {
        if (i.length === 0)
          return null;
        var a = i[0], _ = i.pop();
        return _ !== a && (i[0] = _, c(i, _, 0)), a;
      }
      function h(i, a, _) {
        for (var g = _; g > 0; ) {
          var E = g - 1 >>> 1, H = i[E];
          if (s(H, a) > 0)
            i[E] = a, i[g] = H, g = E;
          else
            return;
        }
      }
      function c(i, a, _) {
        for (var g = _, E = i.length, H = E >>> 1; g < H; ) {
          var L = (g + 1) * 2 - 1, re = i[L], D = L + 1, ce = i[D];
          if (s(re, a) < 0)
            D < E && s(ce, re) < 0 ? (i[g] = ce, i[D] = a, g = D) : (i[g] = re, i[L] = a, g = L);
          else if (D < E && s(ce, a) < 0)
            i[g] = ce, i[D] = a, g = D;
          else
            return;
        }
      }
      function s(i, a) {
        var _ = i.sortIndex - a.sortIndex;
        return _ !== 0 ? _ : i.id - a.id;
      }
      var y = 1, b = 2, m = 3, T = 4, w = 5;
      function C(i, a) {
      }
      var I = typeof performance == "object" && typeof performance.now == "function";
      if (I) {
        var W = performance;
        e.unstable_now = function() {
          return W.now();
        };
      } else {
        var R = Date, V = R.now();
        e.unstable_now = function() {
          return R.now() - V;
        };
      }
      var U = 1073741823, A = -1, z = 250, j = 5e3, G = 1e4, J = U, O = [], F = [], q = 1, k = null, P = m, ne = !1, N = !1, Y = !1, t = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function p(i) {
        for (var a = v(F); a !== null; ) {
          if (a.callback === null)
            l(F);
          else if (a.startTime <= i)
            l(F), a.sortIndex = a.expirationTime, o(O, a);
          else
            return;
          a = v(F);
        }
      }
      function S(i) {
        if (Y = !1, p(i), !N)
          if (v(O) !== null)
            N = !0, _e(X);
          else {
            var a = v(F);
            a !== null && ye(S, a.startTime - i);
          }
      }
      function X(i, a) {
        N = !1, Y && (Y = !1, Ie()), ne = !0;
        var _ = P;
        try {
          var g;
          if (!r) return K(i, a);
        } finally {
          k = null, P = _, ne = !1;
        }
      }
      function K(i, a) {
        var _ = a;
        for (p(_), k = v(O); k !== null && !n && !(k.expirationTime > _ && (!i || Pe())); ) {
          var g = k.callback;
          if (typeof g == "function") {
            k.callback = null, P = k.priorityLevel;
            var E = k.expirationTime <= _, H = g(E);
            _ = e.unstable_now(), typeof H == "function" ? k.callback = H : k === v(O) && l(O), p(_);
          } else
            l(O);
          k = v(O);
        }
        if (k !== null)
          return !0;
        var L = v(F);
        return L !== null && ye(S, L.startTime - _), !1;
      }
      function ie(i, a) {
        switch (i) {
          case y:
          case b:
          case m:
          case T:
          case w:
            break;
          default:
            i = m;
        }
        var _ = P;
        P = i;
        try {
          return a();
        } finally {
          P = _;
        }
      }
      function x(i) {
        var a;
        switch (P) {
          case y:
          case b:
          case m:
            a = m;
            break;
          default:
            a = P;
            break;
        }
        var _ = P;
        P = a;
        try {
          return i();
        } finally {
          P = _;
        }
      }
      function te(i) {
        var a = P;
        return function() {
          var _ = P;
          P = a;
          try {
            return i.apply(this, arguments);
          } finally {
            P = _;
          }
        };
      }
      function Be(i, a, _) {
        var g = e.unstable_now(), E;
        if (typeof _ == "object" && _ !== null) {
          var H = _.delay;
          typeof H == "number" && H > 0 ? E = g + H : E = g;
        } else
          E = g;
        var L;
        switch (i) {
          case y:
            L = A;
            break;
          case b:
            L = z;
            break;
          case w:
            L = J;
            break;
          case T:
            L = G;
            break;
          case m:
          default:
            L = j;
            break;
        }
        var re = E + L, D = {
          id: q++,
          callback: a,
          priorityLevel: i,
          startTime: E,
          expirationTime: re,
          sortIndex: -1
        };
        return E > g ? (D.sortIndex = E, o(F, D), v(O) === null && D === v(F) && (Y ? Ie() : Y = !0, ye(S, E - g))) : (D.sortIndex = re, o(O, D), !N && !ne && (N = !0, _e(X))), D;
      }
      function Ue() {
      }
      function je() {
        !N && !ne && (N = !0, _e(X));
      }
      function qe() {
        return v(O);
      }
      function We(i) {
        i.callback = null;
      }
      function Ge() {
        return P;
      }
      var se = !1, ae = null, ve = -1, be = u, ke = -1;
      function Pe() {
        var i = e.unstable_now() - ke;
        return !(i < be);
      }
      function Ye() {
      }
      function Ke(i) {
        if (i < 0 || i > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        i > 0 ? be = Math.floor(1e3 / i) : be = u;
      }
      var me = function() {
        if (ae !== null) {
          var i = e.unstable_now();
          ke = i;
          var a = !0, _ = !0;
          try {
            _ = ae(a, i);
          } finally {
            _ ? le() : (se = !1, ae = null);
          }
        } else
          se = !1;
      }, le;
      if (typeof d == "function")
        le = function() {
          d(me);
        };
      else if (typeof MessageChannel < "u") {
        var Ee = new MessageChannel(), xe = Ee.port2;
        Ee.port1.onmessage = me, le = function() {
          xe.postMessage(null);
        };
      } else
        le = function() {
          t(me, 0);
        };
      function _e(i) {
        ae = i, se || (se = !0, le());
      }
      function ye(i, a) {
        ve = t(function() {
          i(e.unstable_now());
        }, a);
      }
      function Ie() {
        f(ve), ve = -1;
      }
      var $e = Ye, Qe = null;
      e.unstable_IdlePriority = w, e.unstable_ImmediatePriority = y, e.unstable_LowPriority = T, e.unstable_NormalPriority = m, e.unstable_Profiling = Qe, e.unstable_UserBlockingPriority = b, e.unstable_cancelCallback = We, e.unstable_continueExecution = je, e.unstable_forceFrameRate = Ke, e.unstable_getCurrentPriorityLevel = Ge, e.unstable_getFirstCallbackNode = qe, e.unstable_next = x, e.unstable_pauseExecution = Ue, e.unstable_requestPaint = $e, e.unstable_runWithPriority = ie, e.unstable_scheduleCallback = Be, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = te, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ge)), ge;
}
process.env.NODE_ENV === "production" ? we.exports = tn() : we.exports = rn();
var Te = we.exports;
const de = Symbol(), un = Symbol(), ln = typeof window > "u" || /ServerSideRendering/.test(window.navigator && window.navigator.userAgent), De = ln ? fe : Je, on = Te.unstable_runWithPriority ? (e) => {
  try {
    Te.unstable_runWithPriority(Te.unstable_NormalPriority, e);
  } catch (n) {
    if (n.message === "Not implemented.")
      e();
    else
      throw n;
  }
} : (e) => e(), sn = (e) => ({
  value: r,
  children: u
}) => {
  const o = $(r), v = $(0), [l, h] = Ze(null);
  l && (l(r), h(null));
  const c = $();
  if (!c.current) {
    const s = /* @__PURE__ */ new Set(), y = (b, m) => {
      nn(() => {
        v.current += 1;
        const T = {
          n: v.current
        };
        m != null && m.suspense && (T.n *= -1, T.p = new Promise((w) => {
          h(() => (C) => {
            T.v = C, delete T.p, w(C);
          });
        })), s.forEach((w) => w(T)), b();
      });
    };
    c.current = {
      [de]: {
        /* "v"alue     */
        v: o,
        /* versio"n"   */
        n: v,
        /* "l"isteners */
        l: s,
        /* "u"pdate    */
        u: y
      }
    };
  }
  return De(() => {
    o.current = r, v.current += 1, on(() => {
      c.current[de].l.forEach((s) => {
        s({
          n: v.current,
          v: r
        });
      });
    });
  }, [r]), en(e, {
    value: c.current
  }, u);
}, an = (e) => e;
function Re(e) {
  const n = Xe({
    [de]: {
      /* "v"alue     */
      v: {
        current: e
      },
      /* versio"n"   */
      n: {
        current: -1
      },
      /* "l"isteners */
      l: /* @__PURE__ */ new Set(),
      /* "u"pdate    */
      u: (r) => r()
    }
  });
  return n[un] = n.Provider, n.Provider = sn(n.Provider), delete n.Consumer, n;
}
function Ve(e, n) {
  const r = ze(e)[de];
  if (typeof process == "object" && process.env.NODE_ENV !== "production" && !r)
    throw new Error("useContextSelector requires special context");
  const {
    /* "v"alue     */
    v: {
      current: u
    },
    /* versio"n"   */
    n: {
      current: o
    },
    /* "l"isteners */
    l: v
  } = r, l = n(u), [h, c] = Le((s, y) => {
    if (!y)
      return [u, l];
    if ("p" in y)
      throw y.p;
    if (y.n === o)
      return Object.is(s[1], l) ? s : [u, l];
    try {
      if ("v" in y) {
        if (Object.is(s[0], y.v))
          return s;
        const b = n(y.v);
        return Object.is(s[1], b) ? s : [y.v, b];
      }
    } catch {
    }
    return [...s];
  }, [u, l]);
  return Object.is(h[1], l) || c(), De(() => (v.add(c), () => {
    v.delete(c);
  }), [v]), h[1];
}
function Me(e) {
  return Ve(e, an);
}
function Ae(e) {
  return {
    disabledFields: {},
    errors: void 0,
    initialValues: {},
    isDisabled: !1,
    required: {},
    submitted: 0,
    touched: {},
    validatingFields: {},
    values: {},
    ...e || {}
  };
}
const Se = Re(Ae()), Ne = Re(() => {
});
function Q(e) {
  return Ve(Se, (n) => {
    if (!n)
      throw new Error(
        'Missing Form State Context (most probably you "useFormSelect" was called out of Form tag'
      );
    return e(n);
  });
}
function cn(e) {
  return Q(
    (n) => (n == null ? void 0 : n.submitted) > 0 || M(n == null ? void 0 : n.touched, e) ? M(n == null ? void 0 : n.errors, e) : void 0
  );
}
function fn(e) {
  return Q((n) => M(n == null ? void 0 : n.initialValues, e) || null);
}
function dn(e) {
  return Q((n) => {
    const r = M(n.values, e) || null, u = M(n.initialValues, e) || null;
    return r !== u;
  });
}
function vn(e) {
  return Q((n) => {
    const r = M(n == null ? void 0 : n.disabledFields, e);
    return typeof r == "boolean" ? r : !!(n != null && n.isDisabled);
  });
}
function bn(e) {
  return Q((n) => !!M(n.required, e));
}
function mn(e) {
  return Q((n) => (n == null ? void 0 : n.submitted) > 0 || !!M(n == null ? void 0 : n.touched, e));
}
function _n(e) {
  return Q((n) => M(n.values, e) || null);
}
function ue() {
  return Me(Ne);
}
function yn(e) {
  const n = ue();
  return B(
    (r) => {
      n({ name: e, type: "setDisabled", value: r });
    },
    [n, e]
  );
}
function hn(e) {
  const n = ue();
  return B(
    (r) => {
      (r && typeof r.then == "function" ? r : Promise.resolve(r)).then((o) => n({ error: o, name: e, type: "setError" }));
    },
    [n, e]
  );
}
function pn(e) {
  const n = ue();
  return B(
    (r = !0) => n({ name: e, touched: r, type: "setTouched" }),
    [n, e]
  );
}
function gn(e) {
  const n = ue();
  return B(
    (r) => n({ name: e, type: "setValue", value: r }),
    [n, e]
  );
}
function He(e) {
  const n = fn(e), r = mn(e), u = dn(e), o = cn(e), v = vn(e), l = bn(e), h = _n(e), c = pn(e), s = gn(e), y = hn(e), b = yn(e || void 0), m = B(() => {
    s(null);
  }, [s]), T = B(() => s(n), [n, s]);
  return ee(
    () => ({
      clearValue: m,
      error: o,
      initialValue: n,
      isChanged: u,
      isDisabled: v,
      isRequired: l,
      isTouched: r,
      name: e,
      resetValue: T,
      setDisabled: b,
      setError: y,
      setTouched: c,
      setValue: s,
      value: h
    }),
    [
      m,
      o,
      n,
      u,
      v,
      l,
      r,
      e,
      T,
      y,
      c,
      s,
      b,
      h
    ]
  );
}
function In({
  component: e,
  isDisabled: n,
  isRequired: r,
  name: u,
  ...o
}) {
  const v = e, l = He(u), h = {
    errorText: l.error
  };
  return (
    // @ts-ignore TODO: ...
    /* @__PURE__ */ Z(
      v,
      {
        ...o,
        ...h,
        ...l,
        disabled: n !== void 0 ? n : l.isDisabled,
        required: r !== void 0 ? r : l.isRequired
      }
    )
  );
}
function Tn(e, n) {
  return function(u, o) {
    var v;
    switch (console.log("formReducer", o.type), o.type) {
      case "initialValues":
        u.initialValues = { ...o.value || {} };
      case "reset":
        u.values = { ...u.initialValues || {} };
      case "init": {
        const l = o.type === "init" && o.state ? { ...u, ...o.state } : u, h = e == null ? void 0 : e(l.values || {}), c = (n == null ? void 0 : n(l.values)) || {};
        return {
          ...l,
          errors: h,
          isSubmitting: l.isSubmitting || !1,
          required: o.type === "init" && ((v = o.state) == null ? void 0 : v.required) || c,
          submitted: l.submitted || 0,
          touched: l.touched || {}
        };
      }
      case "setValue": {
        const l = { ...u.values };
        if (M(l, o.name) === o.value)
          return u;
        he(l, o.name, o.value);
        const h = e == null ? void 0 : e(l);
        let c = u.touched || {};
        return M(c, o.name) || (c = { ...c }, he(c, o.name, !0)), {
          ...u,
          errors: h || {},
          required: (n == null ? void 0 : n(l)) || {},
          touched: c,
          values: l
        };
      }
      case "setDisabled": {
        if (!o.name)
          return u.isDisabled === o.value ? u : { ...u, isDisabled: !!o.value };
        const l = u.disabledFields || {};
        return he(l, o.name, o.value), { ...u, disabledFields: l };
      }
      case "setTouched": {
        const l = (o.name ? Array.isArray(o.name) ? o.name : [o.name] : []).filter((s) => u.touched[s] !== o.touched);
        if (!l.length)
          return u;
        const h = l.reduce(
          (s, y) => ({ ...s, [y]: !0 }),
          u.touched || {}
        ), c = e == null ? void 0 : e(u.values);
        return { ...u, errors: c, touched: h };
      }
      case "startSubmit": {
        if (u.isSubmitting)
          return u;
        const l = e == null ? void 0 : e(u.values), h = !l;
        return {
          ...u,
          errors: l || {},
          isDisabled: h,
          isSubmitting: h,
          submitted: u.submitted || 1
        };
      }
      case "endSubmit":
        return u.isSubmitting ? {
          ...u,
          isDisabled: !1,
          isSubmitting: !1
        } : u;
      default:
        return u;
    }
  };
}
function wn(e, n, r = []) {
  const u = $(n), o = B(() => u.current, []), v = $(
    (y, b) => u.current = e(y, b)
  ).current, [l, h] = Le(v, n), c = $(r), s = ee(
    () => c.current.reduceRight(
      (y, b) => (m) => b(l)(o, h)(y)(m),
      h
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return [l, s, o];
}
const On = ({
  children: e,
  disabled: n,
  getRequired: r,
  id: u,
  initialValues: o,
  onStateUpdate: v,
  onSubmit: l,
  reducer: h,
  validation: c
}) => {
  const s = $(v);
  s.current = v;
  const y = $(l);
  y.current = l;
  const b = B(
    (V) => (c == null ? void 0 : c(V)) || void 0,
    [c]
  ), m = ee(
    () => h || Tn(b, r),
    [r, h, b]
  ), T = ee(
    () => (V) => (U, A) => (z) => (j) => {
      var O, F;
      const G = U();
      z(j);
      const J = U();
      if (j.type === "startSubmit" && J.isSubmitting) {
        const q = (O = y.current) == null ? void 0 : O.call(y, J.values);
        typeof (q == null ? void 0 : q.then) == "function" && q.catch(() => {
        }).then((k) => {
          A({ result: k, type: "endSubmit" });
        });
      }
      (F = s.current) == null || F.call(s, j, G, J, A);
    },
    []
  ), w = ee(() => m(Ae({}), {
    state: { initialValues: o, isDisabled: !!n, values: o },
    type: "init"
  }), []), [C, I, W] = wn(
    m,
    w,
    [T]
  );
  fe(() => {
    W().isDisabled !== !!n && I({ type: "setDisabled", value: !!n });
  }, [n]), fe(() => {
    W().initialValues !== o && I({ type: "initialValues", value: o });
  }, [o]);
  const R = (V) => {
    V.preventDefault(), I({ type: "startSubmit" });
  };
  return /* @__PURE__ */ Z(Ne.Provider, { value: I, children: /* @__PURE__ */ Z(Se.Provider, { value: C, children: /* @__PURE__ */ oe("form", { id: u, onSubmit: R, children: [
    typeof e == "function" ? e(C, I) : e,
    /* @__PURE__ */ Z("button", { style: { left: -9999, position: "fixed", top: -9999 }, type: "submit" })
  ] }) }) });
};
function Cn({
  children: e,
  component: n,
  label: r,
  name: u,
  required: o,
  type: v,
  value: l,
  ...h
}) {
  const c = n, {
    error: s,
    isDisabled: y,
    isRequired: b,
    setTouched: m,
    setValue: T,
    value: w
  } = He(u), C = ee(() => `${n}-${u}-${Math.random()}`, [u, n]), I = ["radio", "checkbox"].includes(v || ""), W = B(
    (U) => {
      var A;
      T(
        // @ts-ignore TODO: improve
        I ? w === l ? null : l : ((A = U.currentTarget) == null ? void 0 : A.value) || null
      );
    },
    [w, I, T, l]
  ), R = $();
  fe(() => {
    R.current && (s && typeof s == "string" ? (R.current.setCustomValidity(s), R.current.reportValidity()) : R.current.setCustomValidity(""));
  });
  const V = /* @__PURE__ */ Z(
    c,
    {
      ...h,
      ref: R,
      checked: I ? w === l : void 0,
      disabled: y,
      id: C,
      required: typeof o == "boolean" ? o : b,
      type: v,
      value: I ? l : w || "",
      onBlur: () => m(!0),
      onChange: W,
      children: e
    }
  );
  return /* @__PURE__ */ Z("div", { style: { display: "flex", flexDirection: "column", gap: "0.25rem" }, children: n === "input" && v && I ? /* @__PURE__ */ Z(Oe, { children: /* @__PURE__ */ oe("label", { style: { display: "flex", flexDirection: "row", gap: "0.25rem" }, children: [
    V,
    r && /* @__PURE__ */ oe("span", { children: [
      r,
      b ? " *" : null
    ] })
  ] }) }) : /* @__PURE__ */ oe(Oe, { children: [
    r && /* @__PURE__ */ oe("label", { htmlFor: C, children: [
      r,
      b ? " *" : null
    ] }),
    V
  ] }) });
}
function Fn(e) {
  return Q((n) => {
    const r = M(n.values, e);
    return (r && Array.isArray(r) ? r : []).length;
  });
}
function Ln() {
  return Me(Se);
}
function Dn() {
  const e = ue(), n = Q((u) => !!u.isSubmitting), r = B(() => {
    e({ type: "startSubmit" });
  }, [e]);
  return ee(() => {
    const u = r;
    return u[0] = n, u[1] = r, u;
  }, [n, r]);
}
function Rn() {
  const e = ue();
  return B((n) => e({ type: "setValues", values: n }), [e]);
}
export {
  In as Field,
  Cn as HtmlField,
  On as default,
  Tn as getDefaultFormReducer,
  Fn as useArrayFieldLength,
  He as useField,
  cn as useFieldError,
  fn as useFieldInitialValue,
  dn as useFieldIsChanged,
  vn as useFieldIsDisabled,
  bn as useFieldIsRequired,
  mn as useFieldTouched,
  _n as useFieldValue,
  ue as useFormDispatch,
  Q as useFormSelect,
  Ln as useFormState,
  Dn as useFormSubmit,
  yn as useSetFieldDisabled,
  hn as useSetFieldError,
  pn as useSetFieldTouched,
  gn as useSetFieldValue,
  Rn as useSetValues
};
