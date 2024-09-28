import { jsx as me, jsxs as Qe } from "react/jsx-runtime";
import { useContext as $e, useReducer as Ce, useEffect as ge, useLayoutEffect as ze, createContext as Je, useRef as J, useState as Xe, createElement as xe, useCallback as B, useMemo as te } from "react";
import { unstable_batchedUpdates as Ze } from "react-dom";
import { set as _e, get as D } from "object-path";
var Te = { exports: {} }, ye = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function en() {
  return Ie || (Ie = 1, function(e) {
    function n(t, c) {
      var d = t.length;
      t.push(c);
      e: for (; 0 < d; ) {
        var p = d - 1 >>> 1, T = t[p];
        if (0 < l(T, c)) t[p] = c, t[d] = T, d = p;
        else break e;
      }
    }
    function i(t) {
      return t.length === 0 ? null : t[0];
    }
    function u(t) {
      if (t.length === 0) return null;
      var c = t[0], d = t.pop();
      if (d !== c) {
        t[0] = d;
        e: for (var p = 0, T = t.length, z = T >>> 1; p < z; ) {
          var W = 2 * (p + 1) - 1, ue = t[W], q = W + 1, ee = t[q];
          if (0 > l(ue, d)) q < T && 0 > l(ee, ue) ? (t[p] = ee, t[q] = d, p = q) : (t[p] = ue, t[W] = d, p = W);
          else if (q < T && 0 > l(ee, d)) t[p] = ee, t[q] = d, p = q;
          else break e;
        }
      }
      return c;
    }
    function l(t, c) {
      var d = t.sortIndex - c.sortIndex;
      return d !== 0 ? d : t.id - c.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var b = performance;
      e.unstable_now = function() {
        return b.now();
      };
    } else {
      var o = Date, h = o.now();
      e.unstable_now = function() {
        return o.now() - h;
      };
    }
    var f = [], a = [], y = 1, _ = null, v = 3, S = !1, E = !1, F = !1, A = typeof setTimeout == "function" ? setTimeout : null, X = typeof clearTimeout == "function" ? clearTimeout : null, x = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function M(t) {
      for (var c = i(a); c !== null; ) {
        if (c.callback === null) u(a);
        else if (c.startTime <= t) u(a), c.sortIndex = c.expirationTime, n(f, c);
        else break;
        c = i(a);
      }
    }
    function Y(t) {
      if (F = !1, M(t), !E) if (i(f) !== null) E = !0, R(K);
      else {
        var c = i(a);
        c !== null && j(Y, c.startTime - t);
      }
    }
    function K(t, c) {
      E = !1, F && (F = !1, X(U), U = -1), S = !0;
      var d = v;
      try {
        for (M(c), _ = i(f); _ !== null && (!(_.expirationTime > c) || t && !O()); ) {
          var p = _.callback;
          if (typeof p == "function") {
            _.callback = null, v = _.priorityLevel;
            var T = p(_.expirationTime <= c);
            c = e.unstable_now(), typeof T == "function" ? _.callback = T : _ === i(f) && u(f), M(c);
          } else u(f);
          _ = i(f);
        }
        if (_ !== null) var z = !0;
        else {
          var W = i(a);
          W !== null && j(Y, W.startTime - c), z = !1;
        }
        return z;
      } finally {
        _ = null, v = d, S = !1;
      }
    }
    var Q = !1, N = null, U = -1, $ = 5, I = -1;
    function O() {
      return !(e.unstable_now() - I < $);
    }
    function H() {
      if (N !== null) {
        var t = e.unstable_now();
        I = t;
        var c = !0;
        try {
          c = N(!0, t);
        } finally {
          c ? w() : (Q = !1, N = null);
        }
      } else Q = !1;
    }
    var w;
    if (typeof x == "function") w = function() {
      x(H);
    };
    else if (typeof MessageChannel < "u") {
      var P = new MessageChannel(), Z = P.port2;
      P.port1.onmessage = H, w = function() {
        Z.postMessage(null);
      };
    } else w = function() {
      A(H, 0);
    };
    function R(t) {
      N = t, Q || (Q = !0, w());
    }
    function j(t, c) {
      U = A(function() {
        t(e.unstable_now());
      }, c);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(t) {
      t.callback = null;
    }, e.unstable_continueExecution = function() {
      E || S || (E = !0, R(K));
    }, e.unstable_forceFrameRate = function(t) {
      0 > t || 125 < t ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < t ? Math.floor(1e3 / t) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, e.unstable_getFirstCallbackNode = function() {
      return i(f);
    }, e.unstable_next = function(t) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var c = 3;
          break;
        default:
          c = v;
      }
      var d = v;
      v = c;
      try {
        return t();
      } finally {
        v = d;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(t, c) {
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
      var d = v;
      v = t;
      try {
        return c();
      } finally {
        v = d;
      }
    }, e.unstable_scheduleCallback = function(t, c, d) {
      var p = e.unstable_now();
      switch (typeof d == "object" && d !== null ? (d = d.delay, d = typeof d == "number" && 0 < d ? p + d : p) : d = p, t) {
        case 1:
          var T = -1;
          break;
        case 2:
          T = 250;
          break;
        case 5:
          T = 1073741823;
          break;
        case 4:
          T = 1e4;
          break;
        default:
          T = 5e3;
      }
      return T = d + T, t = { id: y++, callback: c, priorityLevel: t, startTime: d, expirationTime: T, sortIndex: -1 }, d > p ? (t.sortIndex = d, n(a, t), i(f) === null && t === i(a) && (F ? (X(U), U = -1) : F = !0, j(Y, d - p))) : (t.sortIndex = T, n(f, t), E || S || (E = !0, R(K))), t;
    }, e.unstable_shouldYield = O, e.unstable_wrapCallback = function(t) {
      var c = v;
      return function() {
        var d = v;
        v = c;
        try {
          return t.apply(this, arguments);
        } finally {
          v = d;
        }
      };
    };
  }(ye)), ye;
}
var he = {};
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
function nn() {
  return Oe || (Oe = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = !1, i = !1, u = 5;
      function l(r, s) {
        var m = r.length;
        r.push(s), h(r, s, m);
      }
      function b(r) {
        return r.length === 0 ? null : r[0];
      }
      function o(r) {
        if (r.length === 0)
          return null;
        var s = r[0], m = r.pop();
        return m !== s && (r[0] = m, f(r, m, 0)), s;
      }
      function h(r, s, m) {
        for (var g = m; g > 0; ) {
          var k = g - 1 >>> 1, V = r[k];
          if (a(V, s) > 0)
            r[k] = s, r[g] = V, g = k;
          else
            return;
        }
      }
      function f(r, s, m) {
        for (var g = m, k = r.length, V = k >>> 1; g < V; ) {
          var C = (g + 1) * 2 - 1, ne = r[C], L = C + 1, se = r[L];
          if (a(ne, s) < 0)
            L < k && a(se, ne) < 0 ? (r[g] = se, r[L] = s, g = L) : (r[g] = ne, r[C] = s, g = C);
          else if (L < k && a(se, s) < 0)
            r[g] = se, r[L] = s, g = L;
          else
            return;
        }
      }
      function a(r, s) {
        var m = r.sortIndex - s.sortIndex;
        return m !== 0 ? m : r.id - s.id;
      }
      var y = 1, _ = 2, v = 3, S = 4, E = 5;
      function F(r, s) {
      }
      var A = typeof performance == "object" && typeof performance.now == "function";
      if (A) {
        var X = performance;
        e.unstable_now = function() {
          return X.now();
        };
      } else {
        var x = Date, M = x.now();
        e.unstable_now = function() {
          return x.now() - M;
        };
      }
      var Y = 1073741823, K = -1, Q = 250, N = 5e3, U = 1e4, $ = Y, I = [], O = [], H = 1, w = null, P = v, Z = !1, R = !1, j = !1, t = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function p(r) {
        for (var s = b(O); s !== null; ) {
          if (s.callback === null)
            o(O);
          else if (s.startTime <= r)
            o(O), s.sortIndex = s.expirationTime, l(I, s);
          else
            return;
          s = b(O);
        }
      }
      function T(r) {
        if (j = !1, p(r), !R)
          if (b(I) !== null)
            R = !0, ve(z);
          else {
            var s = b(O);
            s !== null && be(T, s.startTime - r);
          }
      }
      function z(r, s) {
        R = !1, j && (j = !1, Ee()), Z = !0;
        var m = P;
        try {
          var g;
          if (!i) return W(r, s);
        } finally {
          w = null, P = m, Z = !1;
        }
      }
      function W(r, s) {
        var m = s;
        for (p(m), w = b(I); w !== null && !n && !(w.expirationTime > m && (!r || Pe())); ) {
          var g = w.callback;
          if (typeof g == "function") {
            w.callback = null, P = w.priorityLevel;
            var k = w.expirationTime <= m, V = g(k);
            m = e.unstable_now(), typeof V == "function" ? w.callback = V : w === b(I) && o(I), p(m);
          } else
            o(I);
          w = b(I);
        }
        if (w !== null)
          return !0;
        var C = b(O);
        return C !== null && be(T, C.startTime - m), !1;
      }
      function ue(r, s) {
        switch (r) {
          case y:
          case _:
          case v:
          case S:
          case E:
            break;
          default:
            r = v;
        }
        var m = P;
        P = r;
        try {
          return s();
        } finally {
          P = m;
        }
      }
      function q(r) {
        var s;
        switch (P) {
          case y:
          case _:
          case v:
            s = v;
            break;
          default:
            s = P;
            break;
        }
        var m = P;
        P = s;
        try {
          return r();
        } finally {
          P = m;
        }
      }
      function ee(r) {
        var s = P;
        return function() {
          var m = P;
          P = s;
          try {
            return r.apply(this, arguments);
          } finally {
            P = m;
          }
        };
      }
      function Me(r, s, m) {
        var g = e.unstable_now(), k;
        if (typeof m == "object" && m !== null) {
          var V = m.delay;
          typeof V == "number" && V > 0 ? k = g + V : k = g;
        } else
          k = g;
        var C;
        switch (r) {
          case y:
            C = K;
            break;
          case _:
            C = Q;
            break;
          case E:
            C = $;
            break;
          case S:
            C = U;
            break;
          case v:
          default:
            C = N;
            break;
        }
        var ne = k + C, L = {
          id: H++,
          callback: s,
          priorityLevel: r,
          startTime: k,
          expirationTime: ne,
          sortIndex: -1
        };
        return k > g ? (L.sortIndex = k, l(O, L), b(I) === null && L === b(O) && (j ? Ee() : j = !0, be(T, k - g))) : (L.sortIndex = ne, l(I, L), !R && !Z && (R = !0, ve(z))), L;
      }
      function Ne() {
      }
      function He() {
        !R && !Z && (R = !0, ve(z));
      }
      function Be() {
        return b(I);
      }
      function Ue(r) {
        r.callback = null;
      }
      function je() {
        return P;
      }
      var le = !1, oe = null, ce = -1, fe = u, Se = -1;
      function Pe() {
        var r = e.unstable_now() - Se;
        return !(r < fe);
      }
      function We() {
      }
      function qe(r) {
        if (r < 0 || r > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        r > 0 ? fe = Math.floor(1e3 / r) : fe = u;
      }
      var de = function() {
        if (oe !== null) {
          var r = e.unstable_now();
          Se = r;
          var s = !0, m = !0;
          try {
            m = oe(s, r);
          } finally {
            m ? ie() : (le = !1, oe = null);
          }
        } else
          le = !1;
      }, ie;
      if (typeof d == "function")
        ie = function() {
          d(de);
        };
      else if (typeof MessageChannel < "u") {
        var ke = new MessageChannel(), Ge = ke.port2;
        ke.port1.onmessage = de, ie = function() {
          Ge.postMessage(null);
        };
      } else
        ie = function() {
          t(de, 0);
        };
      function ve(r) {
        oe = r, le || (le = !0, ie());
      }
      function be(r, s) {
        ce = t(function() {
          r(e.unstable_now());
        }, s);
      }
      function Ee() {
        c(ce), ce = -1;
      }
      var Ye = We, Ke = null;
      e.unstable_IdlePriority = E, e.unstable_ImmediatePriority = y, e.unstable_LowPriority = S, e.unstable_NormalPriority = v, e.unstable_Profiling = Ke, e.unstable_UserBlockingPriority = _, e.unstable_cancelCallback = Ue, e.unstable_continueExecution = He, e.unstable_forceFrameRate = qe, e.unstable_getCurrentPriorityLevel = je, e.unstable_getFirstCallbackNode = Be, e.unstable_next = q, e.unstable_pauseExecution = Ne, e.unstable_requestPaint = Ye, e.unstable_runWithPriority = ue, e.unstable_scheduleCallback = Me, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = ee, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(he)), he;
}
process.env.NODE_ENV === "production" ? Te.exports = en() : Te.exports = nn();
var pe = Te.exports;
const ae = Symbol(), tn = Symbol(), rn = typeof window > "u" || /ServerSideRendering/.test(window.navigator && window.navigator.userAgent), Le = rn ? ge : ze, un = pe.unstable_runWithPriority ? (e) => {
  try {
    pe.unstable_runWithPriority(pe.unstable_NormalPriority, e);
  } catch (n) {
    if (n.message === "Not implemented.")
      e();
    else
      throw n;
  }
} : (e) => e(), ln = (e) => ({
  value: i,
  children: u
}) => {
  const l = J(i), b = J(0), [o, h] = Xe(null);
  o && (o(i), h(null));
  const f = J();
  if (!f.current) {
    const a = /* @__PURE__ */ new Set(), y = (_, v) => {
      Ze(() => {
        b.current += 1;
        const S = {
          n: b.current
        };
        v != null && v.suspense && (S.n *= -1, S.p = new Promise((E) => {
          h(() => (F) => {
            S.v = F, delete S.p, E(F);
          });
        })), a.forEach((E) => E(S)), _();
      });
    };
    f.current = {
      [ae]: {
        /* "v"alue     */
        v: l,
        /* versio"n"   */
        n: b,
        /* "l"isteners */
        l: a,
        /* "u"pdate    */
        u: y
      }
    };
  }
  return Le(() => {
    l.current = i, b.current += 1, un(() => {
      f.current[ae].l.forEach((a) => {
        a({
          n: b.current,
          v: i
        });
      });
    });
  }, [i]), xe(e, {
    value: f.current
  }, u);
}, on = (e) => e;
function Fe(e) {
  const n = Je({
    [ae]: {
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
      u: (i) => i()
    }
  });
  return n[tn] = n.Provider, n.Provider = ln(n.Provider), delete n.Consumer, n;
}
function De(e, n) {
  const i = $e(e)[ae];
  if (typeof process == "object" && process.env.NODE_ENV !== "production" && !i)
    throw new Error("useContextSelector requires special context");
  const {
    /* "v"alue     */
    v: {
      current: u
    },
    /* versio"n"   */
    n: {
      current: l
    },
    /* "l"isteners */
    l: b
  } = i, o = n(u), [h, f] = Ce((a, y) => {
    if (!y)
      return [u, o];
    if ("p" in y)
      throw y.p;
    if (y.n === l)
      return Object.is(a[1], o) ? a : [u, o];
    try {
      if ("v" in y) {
        if (Object.is(a[0], y.v))
          return a;
        const _ = n(y.v);
        return Object.is(a[1], _) ? a : [y.v, _];
      }
    } catch {
    }
    return [...a];
  }, [u, o]);
  return Object.is(h[1], o) || f(), Le(() => (b.add(f), () => {
    b.delete(f);
  }), [b]), h[1];
}
function Re(e) {
  return De(e, on);
}
function Ve(e) {
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
const we = Fe(Ve()), Ae = Fe(() => {
});
function sn(e, n) {
  return function(u, l) {
    var b;
    switch (console.log("formReducer", l.type), l.type) {
      case "initialValues":
        u.initialValues = { ...l.value || {} };
      case "reset":
        u.values = { ...u.initialValues || {} };
      case "init": {
        const o = l.type === "init" && l.state ? { ...u, ...l.state } : u, h = e == null ? void 0 : e(o.values || {}), f = (n == null ? void 0 : n(o.values)) || {};
        return {
          ...o,
          errors: h,
          isSubmitting: o.isSubmitting || !1,
          required: l.type === "init" && ((b = l.state) == null ? void 0 : b.required) || f,
          submitted: o.submitted || 0,
          touched: o.touched || {}
        };
      }
      case "setValue": {
        const o = { ...u.values };
        if (D(o, l.name) === l.value)
          return u;
        _e(o, l.name, l.value);
        const h = e == null ? void 0 : e(o);
        let f = u.touched || {};
        return D(f, l.name) || (f = { ...f }, _e(f, l.name, !0)), {
          ...u,
          errors: h || {},
          required: (n == null ? void 0 : n(o)) || {},
          touched: f,
          values: o
        };
      }
      case "setDisabled": {
        if (!l.name)
          return u.isDisabled === l.value ? u : { ...u, isDisabled: !!l.value };
        const o = u.disabledFields || {};
        return _e(o, l.name, l.value), { ...u, disabledFields: o };
      }
      case "setTouched": {
        const o = (l.name ? Array.isArray(l.name) ? l.name : [l.name] : []).filter((a) => u.touched[a] !== l.touched);
        if (!o.length)
          return u;
        const h = o.reduce(
          (a, y) => ({ ...a, [y]: !0 }),
          u.touched || {}
        ), f = e == null ? void 0 : e(u.values);
        return { ...u, errors: f, touched: h };
      }
      case "startSubmit": {
        if (u.isSubmitting)
          return u;
        const o = e == null ? void 0 : e(u.values), h = !o;
        return {
          ...u,
          errors: o || {},
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
function an(e, n, i = []) {
  const u = J(n), l = B(() => u.current, []), b = J(
    (y, _) => u.current = e(y, _)
  ).current, [o, h] = Ce(b, n), f = J(i), a = te(
    () => f.current.reduceRight(
      (y, _) => (v) => _(o)(l, h)(y)(v),
      h
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return [o, a, l];
}
const kn = ({
  children: e,
  disabled: n,
  getRequired: i,
  id: u,
  initialValues: l,
  onStateUpdate: b,
  onSubmit: o,
  reducer: h,
  validation: f
}) => {
  const a = J(b);
  a.current = b;
  const y = J(o);
  y.current = o;
  const _ = B(
    (M) => (f == null ? void 0 : f(M)) || void 0,
    [f]
  ), v = te(
    () => h || sn(_, i),
    [i, h, _]
  ), S = te(
    () => (M) => (Y, K) => (Q) => (N) => {
      var I, O;
      const U = Y();
      Q(N);
      const $ = Y();
      if (N.type === "startSubmit" && $.isSubmitting) {
        const H = (I = y.current) == null ? void 0 : I.call(y, $.values);
        typeof (H == null ? void 0 : H.then) == "function" && H.catch(() => {
        }).then((w) => {
          K({ result: w, type: "endSubmit" });
        });
      }
      (O = a.current) == null || O.call(a, N, U, $, K);
    },
    []
  ), E = te(() => v(Ve({}), {
    state: { initialValues: l, isDisabled: !!n, values: l },
    type: "init"
  }), []), [F, A, X] = an(
    v,
    E,
    [S]
  );
  ge(() => {
    X().isDisabled !== !!n && A({ type: "setDisabled", value: !!n });
  }, [n]), ge(() => {
    X().initialValues !== l && A({ type: "initialValues", value: l });
  }, [l]);
  const x = (M) => {
    M.preventDefault(), A({ type: "startSubmit" });
  };
  return /* @__PURE__ */ me(Ae.Provider, { value: A, children: /* @__PURE__ */ me(we.Provider, { value: F, children: /* @__PURE__ */ Qe("form", { id: u, onSubmit: x, children: [
    typeof e == "function" ? e(F, A) : e,
    /* @__PURE__ */ me("button", { style: { left: -9999, position: "fixed", top: -9999 }, type: "submit" })
  ] }) }) });
};
function G(e) {
  return De(we, (n) => {
    if (!n)
      throw new Error(
        'Missing Form State Context (most probably you "useFormSelect" was called out of Form tag'
      );
    return e(n);
  });
}
function En(e) {
  return G((n) => {
    const i = D(n.values, e);
    return (i && Array.isArray(i) ? i : []).length;
  });
}
function cn(e) {
  return G(
    (n) => (n == null ? void 0 : n.submitted) > 0 || D(n == null ? void 0 : n.touched, e) ? D(n == null ? void 0 : n.errors, e) : void 0
  );
}
function fn(e) {
  return G((n) => D(n == null ? void 0 : n.initialValues, e) || null);
}
function dn(e) {
  return G((n) => {
    const i = D(n.values, e) || null, u = D(n.initialValues, e) || null;
    return i !== u;
  });
}
function vn(e) {
  return G((n) => {
    const i = D(n == null ? void 0 : n.disabledFields, e);
    return typeof i == "boolean" ? i : !!(n != null && n.isDisabled);
  });
}
function bn(e) {
  return G((n) => !!D(n.required, e));
}
function mn(e) {
  return G((n) => (n == null ? void 0 : n.submitted) > 0 || !!D(n == null ? void 0 : n.touched, e));
}
function _n(e) {
  return G((n) => D(n.values, e) || null);
}
function re() {
  return Re(Ae);
}
function yn(e) {
  const n = re();
  return B(
    (i) => {
      n({ name: e, type: "setDisabled", value: i });
    },
    [n, e]
  );
}
function hn(e) {
  const n = re();
  return B(
    (i) => {
      (i && typeof i.then == "function" ? i : Promise.resolve(i)).then((l) => n({ error: l, name: e, type: "setError" }));
    },
    [n, e]
  );
}
function pn(e) {
  const n = re();
  return B(
    (i = !0) => n({ name: e, touched: i, type: "setTouched" }),
    [n, e]
  );
}
function gn(e) {
  const n = re();
  return B(
    (i) => n({ name: e, type: "setValue", value: i }),
    [n, e]
  );
}
function In(e) {
  const n = fn(e), i = mn(e), u = dn(e), l = cn(e), b = vn(e), o = bn(e), h = _n(e), f = pn(e), a = gn(e), y = hn(e), _ = yn(e || void 0), v = B(() => {
    a(null);
  }, [a]), S = B(() => a(n), [n, a]);
  return te(
    () => ({
      clearValue: v,
      error: l,
      initialValue: n,
      isChanged: u,
      isDisabled: b,
      isRequired: o,
      isTouched: i,
      name: e,
      resetValue: S,
      setDisabled: _,
      setError: y,
      setTouched: f,
      setValue: a,
      value: h
    }),
    [
      v,
      l,
      n,
      u,
      b,
      o,
      i,
      e,
      S,
      y,
      f,
      a,
      _,
      h
    ]
  );
}
function On() {
  return Re(we);
}
function Cn() {
  const e = re(), n = G((u) => !!u.isSubmitting), i = B(() => {
    e({ type: "startSubmit" });
  }, [e]);
  return te(() => {
    const u = i;
    return u[0] = n, u[1] = i, u;
  }, [n, i]);
}
function Ln() {
  const e = re();
  return B((n) => e({ type: "setValues", values: n }), [e]);
}
export {
  kn as default,
  sn as getDefaultFormReducer,
  En as useArrayFieldLength,
  In as useField,
  cn as useFieldError,
  fn as useFieldInitialValue,
  dn as useFieldIsChanged,
  vn as useFieldIsDisabled,
  bn as useFieldIsRequired,
  mn as useFieldTouched,
  _n as useFieldValue,
  re as useFormDispatch,
  G as useFormSelect,
  On as useFormState,
  Cn as useFormSubmit,
  yn as useSetFieldDisabled,
  hn as useSetFieldError,
  pn as useSetFieldTouched,
  gn as useSetFieldValue,
  Ln as useSetValues
};
