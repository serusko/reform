import { jsx as me, jsxs as qe } from "react/jsx-runtime";
import { useContext as Qe, useReducer as Se, useEffect as he, useLayoutEffect as ze, createContext as Je, useRef as G, useState as $e, createElement as Xe, useCallback as U, useMemo as Ie } from "react";
import { unstable_batchedUpdates as Ze } from "react-dom";
import * as xe from "object-path";
import { set as oe, get as V } from "object-path";
var ge = { exports: {} }, _e = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function en() {
  return Ee || (Ee = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = !1, o = !1, i = 5;
      function u(t, a) {
        var _ = t.length;
        t.push(a), h(t, a, _);
      }
      function l(t) {
        return t.length === 0 ? null : t[0];
      }
      function v(t) {
        if (t.length === 0)
          return null;
        var a = t[0], _ = t.pop();
        return _ !== a && (t[0] = _, p(t, _, 0)), a;
      }
      function h(t, a, _) {
        for (var k = _; k > 0; ) {
          var S = k - 1 >>> 1, M = t[S];
          if (b(M, a) > 0)
            t[S] = a, t[k] = M, k = S;
          else
            return;
        }
      }
      function p(t, a, _) {
        for (var k = _, S = t.length, M = S >>> 1; k < M; ) {
          var I = (k + 1) * 2 - 1, J = t[I], L = I + 1, le = t[L];
          if (b(J, a) < 0)
            L < S && b(le, J) < 0 ? (t[k] = le, t[L] = a, k = L) : (t[k] = J, t[I] = a, k = I);
          else if (L < S && b(le, a) < 0)
            t[k] = le, t[L] = a, k = L;
          else
            return;
        }
      }
      function b(t, a) {
        var _ = t.sortIndex - a.sortIndex;
        return _ !== 0 ? _ : t.id - a.id;
      }
      var m = 1, d = 2, f = 3, w = 4, y = 5;
      function T(t, a) {
      }
      var F = typeof performance == "object" && typeof performance.now == "function";
      if (F) {
        var j = performance;
        e.unstable_now = function() {
          return j.now();
        };
      } else {
        var $ = Date, X = $.now();
        e.unstable_now = function() {
          return $.now() - X;
        };
      }
      var Z = 1073741823, x = -1, K = 250, q = 5e3, Y = 1e4, te = Z, C = [], R = [], ee = 1, O = null, E = f, Q = !1, D = !1, A = !1, r = typeof setTimeout == "function" ? setTimeout : null, s = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function g(t) {
        for (var a = l(R); a !== null; ) {
          if (a.callback === null)
            v(R);
          else if (a.startTime <= t)
            v(R), a.sortIndex = a.expirationTime, u(C, a);
          else
            return;
          a = l(R);
        }
      }
      function P(t) {
        if (A = !1, g(t), !D)
          if (l(C) !== null)
            D = !0, ve(W);
          else {
            var a = l(R);
            a !== null && be(P, a.startTime - t);
          }
      }
      function W(t, a) {
        D = !1, A && (A = !1, Pe()), Q = !0;
        var _ = E;
        try {
          var k;
          if (!o)
            return N(t, a);
        } finally {
          O = null, E = _, Q = !1;
        }
      }
      function N(t, a) {
        var _ = a;
        for (g(_), O = l(C); O !== null && !n && !(O.expirationTime > _ && (!t || ke())); ) {
          var k = O.callback;
          if (typeof k == "function") {
            O.callback = null, E = O.priorityLevel;
            var S = O.expirationTime <= _, M = k(S);
            _ = e.unstable_now(), typeof M == "function" ? O.callback = M : O === l(C) && v(C), g(_);
          } else
            v(C);
          O = l(C);
        }
        if (O !== null)
          return !0;
        var I = l(R);
        return I !== null && be(P, I.startTime - _), !1;
      }
      function ne(t, a) {
        switch (t) {
          case m:
          case d:
          case f:
          case w:
          case y:
            break;
          default:
            t = f;
        }
        var _ = E;
        E = t;
        try {
          return a();
        } finally {
          E = _;
        }
      }
      function H(t) {
        var a;
        switch (E) {
          case m:
          case d:
          case f:
            a = f;
            break;
          default:
            a = E;
            break;
        }
        var _ = E;
        E = a;
        try {
          return t();
        } finally {
          E = _;
        }
      }
      function z(t) {
        var a = E;
        return function() {
          var _ = E;
          E = a;
          try {
            return t.apply(this, arguments);
          } finally {
            E = _;
          }
        };
      }
      function Me(t, a, _) {
        var k = e.unstable_now(), S;
        if (typeof _ == "object" && _ !== null) {
          var M = _.delay;
          typeof M == "number" && M > 0 ? S = k + M : S = k;
        } else
          S = k;
        var I;
        switch (t) {
          case m:
            I = x;
            break;
          case d:
            I = K;
            break;
          case y:
            I = te;
            break;
          case w:
            I = Y;
            break;
          case f:
          default:
            I = q;
            break;
        }
        var J = S + I, L = {
          id: ee++,
          callback: a,
          priorityLevel: t,
          startTime: S,
          expirationTime: J,
          sortIndex: -1
        };
        return S > k ? (L.sortIndex = S, u(R, L), l(C) === null && L === l(R) && (A ? Pe() : A = !0, be(P, S - k))) : (L.sortIndex = J, u(C, L), !D && !Q && (D = !0, ve(W))), L;
      }
      function Ae() {
      }
      function Ne() {
        !D && !Q && (D = !0, ve(W));
      }
      function He() {
        return l(C);
      }
      function Ue(t) {
        t.callback = null;
      }
      function Be() {
        return E;
      }
      var ie = !1, ue = null, ce = -1, fe = i, Te = -1;
      function ke() {
        var t = e.unstable_now() - Te;
        return !(t < fe);
      }
      function je() {
      }
      function We(t) {
        if (t < 0 || t > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        t > 0 ? fe = Math.floor(1e3 / t) : fe = i;
      }
      var de = function() {
        if (ue !== null) {
          var t = e.unstable_now();
          Te = t;
          var a = !0, _ = !0;
          try {
            _ = ue(a, t);
          } finally {
            _ ? re() : (ie = !1, ue = null);
          }
        } else
          ie = !1;
      }, re;
      if (typeof c == "function")
        re = function() {
          c(de);
        };
      else if (typeof MessageChannel < "u") {
        var we = new MessageChannel(), Ye = we.port2;
        we.port1.onmessage = de, re = function() {
          Ye.postMessage(null);
        };
      } else
        re = function() {
          r(de, 0);
        };
      function ve(t) {
        ue = t, ie || (ie = !0, re());
      }
      function be(t, a) {
        ce = r(function() {
          t(e.unstable_now());
        }, a);
      }
      function Pe() {
        s(ce), ce = -1;
      }
      var Ge = je, Ke = null;
      e.unstable_IdlePriority = y, e.unstable_ImmediatePriority = m, e.unstable_LowPriority = w, e.unstable_NormalPriority = f, e.unstable_Profiling = Ke, e.unstable_UserBlockingPriority = d, e.unstable_cancelCallback = Ue, e.unstable_continueExecution = Ne, e.unstable_forceFrameRate = We, e.unstable_getCurrentPriorityLevel = Be, e.unstable_getFirstCallbackNode = He, e.unstable_next = H, e.unstable_pauseExecution = Ae, e.unstable_requestPaint = Ge, e.unstable_runWithPriority = ne, e.unstable_scheduleCallback = Me, e.unstable_shouldYield = ke, e.unstable_wrapCallback = z, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(_e)), _e;
}
var ye = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function nn() {
  return Oe || (Oe = 1, function(e) {
    function n(r, s) {
      var c = r.length;
      r.push(s);
      e:
        for (; 0 < c; ) {
          var g = c - 1 >>> 1, P = r[g];
          if (0 < u(P, s))
            r[g] = s, r[c] = P, c = g;
          else
            break e;
        }
    }
    function o(r) {
      return r.length === 0 ? null : r[0];
    }
    function i(r) {
      if (r.length === 0)
        return null;
      var s = r[0], c = r.pop();
      if (c !== s) {
        r[0] = c;
        e:
          for (var g = 0, P = r.length, W = P >>> 1; g < W; ) {
            var N = 2 * (g + 1) - 1, ne = r[N], H = N + 1, z = r[H];
            if (0 > u(ne, c))
              H < P && 0 > u(z, ne) ? (r[g] = z, r[H] = c, g = H) : (r[g] = ne, r[N] = c, g = N);
            else if (H < P && 0 > u(z, c))
              r[g] = z, r[H] = c, g = H;
            else
              break e;
          }
      }
      return s;
    }
    function u(r, s) {
      var c = r.sortIndex - s.sortIndex;
      return c !== 0 ? c : r.id - s.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var l = performance;
      e.unstable_now = function() {
        return l.now();
      };
    } else {
      var v = Date, h = v.now();
      e.unstable_now = function() {
        return v.now() - h;
      };
    }
    var p = [], b = [], m = 1, d = null, f = 3, w = !1, y = !1, T = !1, F = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, $ = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function X(r) {
      for (var s = o(b); s !== null; ) {
        if (s.callback === null)
          i(b);
        else if (s.startTime <= r)
          i(b), s.sortIndex = s.expirationTime, n(p, s);
        else
          break;
        s = o(b);
      }
    }
    function Z(r) {
      if (T = !1, X(r), !y)
        if (o(p) !== null)
          y = !0, D(x);
        else {
          var s = o(b);
          s !== null && A(Z, s.startTime - r);
        }
    }
    function x(r, s) {
      y = !1, T && (T = !1, j(Y), Y = -1), w = !0;
      var c = f;
      try {
        for (X(s), d = o(p); d !== null && (!(d.expirationTime > s) || r && !R()); ) {
          var g = d.callback;
          if (typeof g == "function") {
            d.callback = null, f = d.priorityLevel;
            var P = g(d.expirationTime <= s);
            s = e.unstable_now(), typeof P == "function" ? d.callback = P : d === o(p) && i(p), X(s);
          } else
            i(p);
          d = o(p);
        }
        if (d !== null)
          var W = !0;
        else {
          var N = o(b);
          N !== null && A(Z, N.startTime - s), W = !1;
        }
        return W;
      } finally {
        d = null, f = c, w = !1;
      }
    }
    var K = !1, q = null, Y = -1, te = 5, C = -1;
    function R() {
      return !(e.unstable_now() - C < te);
    }
    function ee() {
      if (q !== null) {
        var r = e.unstable_now();
        C = r;
        var s = !0;
        try {
          s = q(!0, r);
        } finally {
          s ? O() : (K = !1, q = null);
        }
      } else
        K = !1;
    }
    var O;
    if (typeof $ == "function")
      O = function() {
        $(ee);
      };
    else if (typeof MessageChannel < "u") {
      var E = new MessageChannel(), Q = E.port2;
      E.port1.onmessage = ee, O = function() {
        Q.postMessage(null);
      };
    } else
      O = function() {
        F(ee, 0);
      };
    function D(r) {
      q = r, K || (K = !0, O());
    }
    function A(r, s) {
      Y = F(function() {
        r(e.unstable_now());
      }, s);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(r) {
      r.callback = null;
    }, e.unstable_continueExecution = function() {
      y || w || (y = !0, D(x));
    }, e.unstable_forceFrameRate = function(r) {
      0 > r || 125 < r ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : te = 0 < r ? Math.floor(1e3 / r) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return f;
    }, e.unstable_getFirstCallbackNode = function() {
      return o(p);
    }, e.unstable_next = function(r) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var s = 3;
          break;
        default:
          s = f;
      }
      var c = f;
      f = s;
      try {
        return r();
      } finally {
        f = c;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(r, s) {
      switch (r) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          r = 3;
      }
      var c = f;
      f = r;
      try {
        return s();
      } finally {
        f = c;
      }
    }, e.unstable_scheduleCallback = function(r, s, c) {
      var g = e.unstable_now();
      switch (typeof c == "object" && c !== null ? (c = c.delay, c = typeof c == "number" && 0 < c ? g + c : g) : c = g, r) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = c + P, r = { id: m++, callback: s, priorityLevel: r, startTime: c, expirationTime: P, sortIndex: -1 }, c > g ? (r.sortIndex = c, n(b, r), o(p) === null && r === o(b) && (T ? (j(Y), Y = -1) : T = !0, A(Z, c - g))) : (r.sortIndex = P, n(p, r), y || w || (y = !0, D(x))), r;
    }, e.unstable_shouldYield = R, e.unstable_wrapCallback = function(r) {
      var s = f;
      return function() {
        var c = f;
        f = s;
        try {
          return r.apply(this, arguments);
        } finally {
          f = c;
        }
      };
    };
  }(ye)), ye;
}
process.env.NODE_ENV === "production" ? ge.exports = nn() : ge.exports = en();
var pe = ge.exports;
const ae = Symbol(), rn = Symbol(), Le = typeof window > "u" || /ServerSideRendering/.test(window.navigator && window.navigator.userAgent) ? he : ze, tn = pe.unstable_runWithPriority ? (e) => pe.unstable_runWithPriority(pe.unstable_NormalPriority, e) : (e) => e(), un = (e) => e;
function Fe(e) {
  const n = Je({ [ae]: { v: { current: e }, n: { current: -1 }, l: /* @__PURE__ */ new Set(), u: (i) => i() } });
  var o;
  return n[rn] = n.Provider, n.Provider = (o = n.Provider, ({ value: i, children: u }) => {
    const l = G(i), v = G(0), [h, p] = $e(null);
    h && (h(i), p(null));
    const b = G();
    if (!b.current) {
      const m = /* @__PURE__ */ new Set(), d = (f, w) => {
        Ze(() => {
          v.current += 1;
          const y = { n: v.current };
          w != null && w.suspense && (y.n *= -1, y.p = new Promise((T) => {
            p(() => (F) => {
              y.v = F, delete y.p, T(F);
            });
          })), m.forEach((T) => T(y)), f();
        });
      };
      b.current = { [ae]: { v: l, n: v, l: m, u: d } };
    }
    return Le(() => {
      l.current = i, v.current += 1, tn(() => {
        b.current[ae].l.forEach((m) => {
          m({ n: v.current, v: i });
        });
      });
    }, [i]), Xe(o, { value: b.current }, u);
  }), delete n.Consumer, n;
}
function Ce(e, n) {
  const o = Qe(e)[ae];
  if (typeof process == "object" && process.env.NODE_ENV !== "production" && !o)
    throw new Error("useContextSelector requires special context");
  const { v: { current: i }, n: { current: u }, l } = o, v = n(i), [h, p] = Se((b, m) => {
    if (!m)
      return [i, v];
    if ("p" in m)
      throw m.p;
    if (m.n === u)
      return Object.is(b[1], v) ? b : [i, v];
    try {
      if ("v" in m) {
        if (Object.is(b[0], m.v))
          return b;
        const d = n(m.v);
        return Object.is(b[1], d) ? b : [m.v, d];
      }
    } catch {
    }
    return [...b];
  }, [i, v]);
  return Object.is(h[1], v) || p(), Le(() => (l.add(p), () => {
    l.delete(p);
  }), [l]), h[1];
}
function ln(e) {
  return Ce(e, un);
}
const Ve = {
  errors: {},
  initialValues: {},
  isValid: !0,
  isValidating: !1,
  lastAction: "init",
  required: {},
  submitted: 0,
  touched: {},
  values: {}
}, Re = Fe(Ve), De = Fe(() => {
});
function on(e, n) {
  return function(i, u) {
    switch (u.type) {
      case "initialValues":
        i.initialValues = { ...u.value || {} };
      case "reset":
        i.values = { ...i.initialValues || {} };
      case "init": {
        const l = e == null ? void 0 : e(i.values || {});
        return {
          ...i,
          errors: {},
          initialValues: "initialValues" in u && u.initialValues || i.initialValues || {},
          isSubmitting: !1,
          isValid: !l,
          isValidating: !1,
          required: (n == null ? void 0 : n(i.values)) || {},
          submitted: 0,
          touched: {}
        };
      }
      case "setValue": {
        const l = { ...i.values };
        if (xe.get(l, u.name) === u.value)
          return i;
        oe(l, u.name, u.value);
        const v = e == null ? void 0 : e(l);
        let h = i.touched || {};
        return V(h, u.name) || (h = { ...h }, oe(h, u.name, !0)), {
          ...i,
          errors: v || {},
          isValid: !v,
          required: (n == null ? void 0 : n(l)) || {},
          touched: h,
          values: l
        };
      }
      case "setReadOnly": {
        if (!u.name)
          return i.readOnly === u.value ? i : { ...i, readOnly: !!u.value };
        const l = i.disabledFields || {};
        return oe(l, u.name, u.value), { ...i, readonlyFields: l };
      }
      case "setDisabled": {
        if (!u.name)
          return i.disabled === u.value ? i : { ...i, disabled: !!u.value };
        const l = i.disabledFields || {};
        return oe(l, u.name, u.value), { ...i, disabledFields: l };
      }
      case "setTouched": {
        const l = (u.name ? Array.isArray(u.name) ? u.name : [u.name] : []).filter((h) => i.touched[h] !== u.touched);
        if (!l.length)
          return i;
        const v = l.reduce(
          (h, p) => ({ ...h, [p]: !0 }),
          i.touched || {}
        );
        return { ...i, touched: v };
      }
      case "startSubmit": {
        if (i.isSubmitting)
          return i;
        const l = e == null ? void 0 : e(i.values), v = !l;
        return {
          ...i,
          disabled: v,
          errors: l || {},
          isSubmitting: v,
          isValid: v,
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
function an(e, n, o, i, u, l) {
  const v = G(), h = G((m, d, f) => {
    const w = v.current, y = u.current, T = l.current;
    if (!w) {
      console.error('Cannot access to Dispatch trigger inside "on" action');
      return;
    }
    if (y && m.type === "startSubmit" && f.isSubmitting && !d.isSubmitting) {
      const F = y == null ? void 0 : y(f.values);
      F && typeof F.then == "function" ? F.finally(() => w({ type: "endSubmit" })) : w({ type: "endSubmit" });
    }
    T && T(m, d, f, w);
  }), p = U(
    (m, d) => {
      const f = e(m, d);
      return h.current(d, m, f), f;
    },
    [e, h]
  ), b = Se(
    p,
    Ve,
    (m) => e(
      {
        ...m,
        disabled: o,
        initialValues: n || {},
        readOnly: i,
        values: n || {}
      },
      { type: "init" }
    )
  );
  return v.current = b[1], b;
}
const sn = ({
  children: e,
  disabled: n,
  getRequired: o,
  id: i,
  initialValues: u,
  onStateUpdate: l,
  onSubmit: v,
  readOnly: h,
  reducer: p,
  validation: b
}) => {
  const m = U(
    (j) => (b == null ? void 0 : b(j)) || void 0,
    [b]
  ), d = Ie(
    () => p || on(m, o),
    [o, p, m]
  ), f = G(l);
  f.current = l;
  const w = G(v);
  w.current = v;
  const [y, T] = an(
    d,
    u,
    !!n,
    !!h,
    w,
    f
  );
  he(() => {
    u !== y.initialValues && T({ type: "initialValues", value: u });
  }, [u]), he(() => {
    y.disabled !== !!n && T({ type: "setDisabled", value: !!n });
  }, [n, T]);
  const F = U(
    (j) => {
      j.preventDefault(), T({ type: "startSubmit" });
    },
    [T]
  );
  return /* @__PURE__ */ me(De.Provider, { value: T, children: /* @__PURE__ */ me(Re.Provider, { value: y, children: /* @__PURE__ */ qe("form", { id: i, onSubmit: F, children: [
    typeof e == "function" ? e(y, T) : e,
    /* @__PURE__ */ me("button", { style: { left: -9999, position: "fixed", top: -9999 }, type: "submit" })
  ] }) }) });
}, Sn = sn;
function B(e) {
  return Ce(Re, e);
}
function cn(e) {
  return B(
    (n) => (n == null ? void 0 : n.submitted) > 0 || V((n == null ? void 0 : n.touched) || {}, e) ? V((n == null ? void 0 : n.errors) || {}, e) : void 0
  );
}
function fn(e) {
  return B((n) => V((n == null ? void 0 : n.initialValues) || {}, e) || null);
}
function dn(e) {
  return B((n) => {
    const o = V(n.values || {}, e) || null, i = V(n.initialValues || {}, e) || null;
    return o !== i;
  });
}
function vn(e) {
  return B((n) => {
    const o = V((n == null ? void 0 : n.disabledFields) || {}, e);
    return typeof o == "boolean" ? o : !!(n != null && n.disabled);
  });
}
function bn(e) {
  return B((n) => {
    const o = V(n.readonlyFields || {}, e);
    return typeof o == "boolean" ? o : !!n.readOnly;
  });
}
function mn(e) {
  return B((n) => !!V((n == null ? void 0 : n.required) || {}, e));
}
function _n(e) {
  return B((n) => V((n == null ? void 0 : n.isValidatingFields) || {}, e) || !!(n != null && n.isValidating));
}
function yn(e) {
  return B((n) => (n == null ? void 0 : n.submitted) > 0 || !!V((n == null ? void 0 : n.touched) || {}, e));
}
function pn(e) {
  return B((n) => V(n.values || {}, e) || null);
}
function se() {
  return ln(De) || (() => {
  });
}
function hn(e) {
  const n = se();
  return U(
    (o) => {
      n({ name: e, type: "setDisabled", value: o });
    },
    [n, e]
  );
}
function gn(e) {
  const n = se();
  return U(
    (o) => {
      (o && typeof o.then == "function" ? o : Promise.resolve(o)).then((u) => n({ error: u, name: e, type: "setError" }));
    },
    [n, e]
  );
}
function Tn(e) {
  const n = se();
  return U(
    (o = !0) => n({ name: e, touched: o, type: "setTouched" }),
    [n, e]
  );
}
function kn(e) {
  const n = se();
  return U(
    (o) => n({ name: e, type: "setValue", value: o }),
    [n, e]
  );
}
function In(e) {
  const n = fn(e), o = yn(e), i = dn(e), u = cn(e), l = vn(e), v = bn(e), h = _n(e), p = mn(e), b = pn(e), m = Tn(e), d = kn(e), f = gn(e), w = hn(e), y = U(() => {
    d(null);
  }, [d]), T = U(() => d(n), [n, d]);
  return Ie(
    () => ({
      clearValue: y,
      error: u,
      initialValue: n,
      isChanged: i,
      isDisabled: l,
      isReadOnly: v,
      isRequired: p,
      isTouched: o,
      isValidating: h,
      name: e,
      resetValue: T,
      setDisabled: w,
      setError: f,
      setTouched: m,
      setValue: d,
      value: b
    }),
    [
      y,
      u,
      n,
      i,
      l,
      v,
      p,
      o,
      h,
      e,
      T,
      f,
      m,
      d,
      w,
      b
    ]
  );
}
export {
  Sn as default,
  In as useField,
  pn as useFieldValue
};
