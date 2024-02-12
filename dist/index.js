import { jsx as me, jsxs as Qe } from "react/jsx-runtime";
import { useContext as ze, useReducer as Fe, useEffect as pe, useLayoutEffect as Je, createContext as $e, useRef as G, useState as Xe, createElement as Ze, useCallback as N, useMemo as Te } from "react";
import { unstable_batchedUpdates as xe } from "react-dom";
import { set as oe, get as V } from "object-path";
var ge = { exports: {} }, _e = {};
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
function en() {
  return Oe || (Oe = 1, function(e) {
    function n(r, s) {
      var c = r.length;
      r.push(s);
      e:
        for (; 0 < c; ) {
          var g = c - 1 >>> 1, S = r[g];
          if (0 < u(S, s))
            r[g] = s, r[c] = S, c = g;
          else
            break e;
        }
    }
    function l(r) {
      return r.length === 0 ? null : r[0];
    }
    function t(r) {
      if (r.length === 0)
        return null;
      var s = r[0], c = r.pop();
      if (c !== s) {
        r[0] = c;
        e:
          for (var g = 0, S = r.length, W = S >>> 1; g < W; ) {
            var U = 2 * (g + 1) - 1, te = r[U], B = U + 1, z = r[B];
            if (0 > u(te, c))
              B < S && 0 > u(z, te) ? (r[g] = z, r[B] = c, g = B) : (r[g] = te, r[U] = c, g = U);
            else if (B < S && 0 > u(z, c))
              r[g] = z, r[B] = c, g = B;
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
      var a = performance;
      e.unstable_now = function() {
        return a.now();
      };
    } else {
      var v = Date, p = v.now();
      e.unstable_now = function() {
        return v.now() - p;
      };
    }
    var h = [], b = [], m = 1, d = null, f = 3, w = !1, y = !1, T = !1, L = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, X = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Z(r) {
      for (var s = l(b); s !== null; ) {
        if (s.callback === null)
          t(b);
        else if (s.startTime <= r)
          t(b), s.sortIndex = s.expirationTime, n(h, s);
        else
          break;
        s = l(b);
      }
    }
    function x(r) {
      if (T = !1, Z(r), !y)
        if (l(h) !== null)
          y = !0, A(ee);
        else {
          var s = l(b);
          s !== null && H(x, s.startTime - r);
        }
    }
    function ee(r, s) {
      y = !1, T && (T = !1, j(Y), Y = -1), w = !0;
      var c = f;
      try {
        for (Z(s), d = l(h); d !== null && (!(d.expirationTime > s) || r && !D()); ) {
          var g = d.callback;
          if (typeof g == "function") {
            d.callback = null, f = d.priorityLevel;
            var S = g(d.expirationTime <= s);
            s = e.unstable_now(), typeof S == "function" ? d.callback = S : d === l(h) && t(h), Z(s);
          } else
            t(h);
          d = l(h);
        }
        if (d !== null)
          var W = !0;
        else {
          var U = l(b);
          U !== null && H(x, U.startTime - s), W = !1;
        }
        return W;
      } finally {
        d = null, f = c, w = !1;
      }
    }
    var K = !1, q = null, Y = -1, ie = 5, C = -1;
    function D() {
      return !(e.unstable_now() - C < ie);
    }
    function ne() {
      if (q !== null) {
        var r = e.unstable_now();
        C = r;
        var s = !0;
        try {
          s = q(!0, r);
        } finally {
          s ? E() : (K = !1, q = null);
        }
      } else
        K = !1;
    }
    var E;
    if (typeof X == "function")
      E = function() {
        X(ne);
      };
    else if (typeof MessageChannel < "u") {
      var P = new MessageChannel(), Q = P.port2;
      P.port1.onmessage = ne, E = function() {
        Q.postMessage(null);
      };
    } else
      E = function() {
        L(ne, 0);
      };
    function A(r) {
      q = r, K || (K = !0, E());
    }
    function H(r, s) {
      Y = L(function() {
        r(e.unstable_now());
      }, s);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(r) {
      r.callback = null;
    }, e.unstable_continueExecution = function() {
      y || w || (y = !0, A(ee));
    }, e.unstable_forceFrameRate = function(r) {
      0 > r || 125 < r ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ie = 0 < r ? Math.floor(1e3 / r) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return f;
    }, e.unstable_getFirstCallbackNode = function() {
      return l(h);
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
      return S = c + S, r = { id: m++, callback: s, priorityLevel: r, startTime: c, expirationTime: S, sortIndex: -1 }, c > g ? (r.sortIndex = c, n(b, r), l(h) === null && r === l(b) && (T ? (j(Y), Y = -1) : T = !0, H(x, c - g))) : (r.sortIndex = S, n(h, r), y || w || (y = !0, A(ee))), r;
    }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function(r) {
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
  }(_e)), _e;
}
var ye = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function nn() {
  return Ie || (Ie = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = !1, l = !1, t = 5;
      function u(i, o) {
        var _ = i.length;
        i.push(o), p(i, o, _);
      }
      function a(i) {
        return i.length === 0 ? null : i[0];
      }
      function v(i) {
        if (i.length === 0)
          return null;
        var o = i[0], _ = i.pop();
        return _ !== o && (i[0] = _, h(i, _, 0)), o;
      }
      function p(i, o, _) {
        for (var k = _; k > 0; ) {
          var O = k - 1 >>> 1, M = i[O];
          if (b(M, o) > 0)
            i[O] = o, i[k] = M, k = O;
          else
            return;
        }
      }
      function h(i, o, _) {
        for (var k = _, O = i.length, M = O >>> 1; k < M; ) {
          var I = (k + 1) * 2 - 1, J = i[I], F = I + 1, ae = i[F];
          if (b(J, o) < 0)
            F < O && b(ae, J) < 0 ? (i[k] = ae, i[F] = o, k = F) : (i[k] = J, i[I] = o, k = I);
          else if (F < O && b(ae, o) < 0)
            i[k] = ae, i[F] = o, k = F;
          else
            return;
        }
      }
      function b(i, o) {
        var _ = i.sortIndex - o.sortIndex;
        return _ !== 0 ? _ : i.id - o.id;
      }
      var m = 1, d = 2, f = 3, w = 4, y = 5;
      function T(i, o) {
      }
      var L = typeof performance == "object" && typeof performance.now == "function";
      if (L) {
        var j = performance;
        e.unstable_now = function() {
          return j.now();
        };
      } else {
        var X = Date, Z = X.now();
        e.unstable_now = function() {
          return X.now() - Z;
        };
      }
      var x = 1073741823, ee = -1, K = 250, q = 5e3, Y = 1e4, ie = x, C = [], D = [], ne = 1, E = null, P = f, Q = !1, A = !1, H = !1, r = typeof setTimeout == "function" ? setTimeout : null, s = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function g(i) {
        for (var o = a(D); o !== null; ) {
          if (o.callback === null)
            v(D);
          else if (o.startTime <= i)
            v(D), o.sortIndex = o.expirationTime, u(C, o);
          else
            return;
          o = a(D);
        }
      }
      function S(i) {
        if (H = !1, g(i), !A)
          if (a(C) !== null)
            A = !0, ve(W);
          else {
            var o = a(D);
            o !== null && be(S, o.startTime - i);
          }
      }
      function W(i, o) {
        A = !1, H && (H = !1, Ee()), Q = !0;
        var _ = P;
        try {
          var k;
          if (!l)
            return U(i, o);
        } finally {
          E = null, P = _, Q = !1;
        }
      }
      function U(i, o) {
        var _ = o;
        for (g(_), E = a(C); E !== null && !n && !(E.expirationTime > _ && (!i || Se())); ) {
          var k = E.callback;
          if (typeof k == "function") {
            E.callback = null, P = E.priorityLevel;
            var O = E.expirationTime <= _, M = k(O);
            _ = e.unstable_now(), typeof M == "function" ? E.callback = M : E === a(C) && v(C), g(_);
          } else
            v(C);
          E = a(C);
        }
        if (E !== null)
          return !0;
        var I = a(D);
        return I !== null && be(S, I.startTime - _), !1;
      }
      function te(i, o) {
        switch (i) {
          case m:
          case d:
          case f:
          case w:
          case y:
            break;
          default:
            i = f;
        }
        var _ = P;
        P = i;
        try {
          return o();
        } finally {
          P = _;
        }
      }
      function B(i) {
        var o;
        switch (P) {
          case m:
          case d:
          case f:
            o = f;
            break;
          default:
            o = P;
            break;
        }
        var _ = P;
        P = o;
        try {
          return i();
        } finally {
          P = _;
        }
      }
      function z(i) {
        var o = P;
        return function() {
          var _ = P;
          P = o;
          try {
            return i.apply(this, arguments);
          } finally {
            P = _;
          }
        };
      }
      function Me(i, o, _) {
        var k = e.unstable_now(), O;
        if (typeof _ == "object" && _ !== null) {
          var M = _.delay;
          typeof M == "number" && M > 0 ? O = k + M : O = k;
        } else
          O = k;
        var I;
        switch (i) {
          case m:
            I = ee;
            break;
          case d:
            I = K;
            break;
          case y:
            I = ie;
            break;
          case w:
            I = Y;
            break;
          case f:
          default:
            I = q;
            break;
        }
        var J = O + I, F = {
          id: ne++,
          callback: o,
          priorityLevel: i,
          startTime: O,
          expirationTime: J,
          sortIndex: -1
        };
        return O > k ? (F.sortIndex = O, u(D, F), a(C) === null && F === a(D) && (H ? Ee() : H = !0, be(S, O - k))) : (F.sortIndex = J, u(C, F), !A && !Q && (A = !0, ve(W))), F;
      }
      function Ne() {
      }
      function He() {
        !A && !Q && (A = !0, ve(W));
      }
      function Ue() {
        return a(C);
      }
      function Be(i) {
        i.callback = null;
      }
      function je() {
        return P;
      }
      var ue = !1, le = null, ce = -1, fe = t, we = -1;
      function Se() {
        var i = e.unstable_now() - we;
        return !(i < fe);
      }
      function We() {
      }
      function Ye(i) {
        if (i < 0 || i > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        i > 0 ? fe = Math.floor(1e3 / i) : fe = t;
      }
      var de = function() {
        if (le !== null) {
          var i = e.unstable_now();
          we = i;
          var o = !0, _ = !0;
          try {
            _ = le(o, i);
          } finally {
            _ ? re() : (ue = !1, le = null);
          }
        } else
          ue = !1;
      }, re;
      if (typeof c == "function")
        re = function() {
          c(de);
        };
      else if (typeof MessageChannel < "u") {
        var Pe = new MessageChannel(), Ge = Pe.port2;
        Pe.port1.onmessage = de, re = function() {
          Ge.postMessage(null);
        };
      } else
        re = function() {
          r(de, 0);
        };
      function ve(i) {
        le = i, ue || (ue = !0, re());
      }
      function be(i, o) {
        ce = r(function() {
          i(e.unstable_now());
        }, o);
      }
      function Ee() {
        s(ce), ce = -1;
      }
      var Ke = We, qe = null;
      e.unstable_IdlePriority = y, e.unstable_ImmediatePriority = m, e.unstable_LowPriority = w, e.unstable_NormalPriority = f, e.unstable_Profiling = qe, e.unstable_UserBlockingPriority = d, e.unstable_cancelCallback = Be, e.unstable_continueExecution = He, e.unstable_forceFrameRate = Ye, e.unstable_getCurrentPriorityLevel = je, e.unstable_getFirstCallbackNode = Ue, e.unstable_next = B, e.unstable_pauseExecution = Ne, e.unstable_requestPaint = Ke, e.unstable_runWithPriority = te, e.unstable_scheduleCallback = Me, e.unstable_shouldYield = Se, e.unstable_wrapCallback = z, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ye)), ye;
}
process.env.NODE_ENV === "production" ? ge.exports = en() : ge.exports = nn();
var he = ge.exports;
const se = Symbol(), tn = Symbol(), Ve = typeof window > "u" || /ServerSideRendering/.test(window.navigator && window.navigator.userAgent) ? pe : Je, rn = he.unstable_runWithPriority ? (e) => he.unstable_runWithPriority(he.unstable_NormalPriority, e) : (e) => e(), un = (e) => e;
function Le(e) {
  const n = $e({ [se]: { v: { current: e }, n: { current: -1 }, l: /* @__PURE__ */ new Set(), u: (t) => t() } });
  var l;
  return n[tn] = n.Provider, n.Provider = (l = n.Provider, ({ value: t, children: u }) => {
    const a = G(t), v = G(0), [p, h] = Xe(null);
    p && (p(t), h(null));
    const b = G();
    if (!b.current) {
      const m = /* @__PURE__ */ new Set(), d = (f, w) => {
        xe(() => {
          v.current += 1;
          const y = { n: v.current };
          w != null && w.suspense && (y.n *= -1, y.p = new Promise((T) => {
            h(() => (L) => {
              y.v = L, delete y.p, T(L);
            });
          })), m.forEach((T) => T(y)), f();
        });
      };
      b.current = { [se]: { v: a, n: v, l: m, u: d } };
    }
    return Ve(() => {
      a.current = t, v.current += 1, rn(() => {
        b.current[se].l.forEach((m) => {
          m({ n: v.current, v: t });
        });
      });
    }, [t]), Ze(l, { value: b.current }, u);
  }), delete n.Consumer, n;
}
function Ce(e, n) {
  const l = ze(e)[se];
  if (typeof process == "object" && process.env.NODE_ENV !== "production" && !l)
    throw new Error("useContextSelector requires special context");
  const { v: { current: t }, n: { current: u }, l: a } = l, v = n(t), [p, h] = Fe((b, m) => {
    if (!m)
      return [t, v];
    if ("p" in m)
      throw m.p;
    if (m.n === u)
      return Object.is(b[1], v) ? b : [t, v];
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
  }, [t, v]);
  return Object.is(p[1], v) || h(), Ve(() => (a.add(h), () => {
    a.delete(h);
  }), [a]), p[1];
}
function Re(e) {
  return Ce(e, un);
}
const De = {
  disabledFields: {},
  errors: {},
  initialValues: {},
  isValid: !0,
  isValidating: !1,
  isValidatingFields: {},
  lastAction: "init",
  readonlyFields: {},
  required: {},
  submitted: 0,
  touched: {},
  validatingFields: {},
  values: {}
}, ke = Le(De), Ae = Le(() => {
});
function ln(e, n) {
  return function(t, u) {
    switch (u.type) {
      case "initialValues":
        t.initialValues = { ...u.value || {} };
      case "reset":
        t.values = { ...t.initialValues || {} };
      case "init": {
        const a = e == null ? void 0 : e(t.values || {});
        return {
          ...t,
          errors: {},
          initialValues: "initialValues" in u && u.initialValues || t.initialValues || {},
          isSubmitting: !1,
          isValid: !a,
          isValidating: !1,
          required: (n == null ? void 0 : n(t.values)) || {},
          submitted: 0,
          touched: {}
        };
      }
      case "setValue": {
        const a = { ...t.values };
        if (V(a, u.name) === u.value)
          return t;
        oe(a, u.name, u.value);
        const v = e == null ? void 0 : e(a);
        let p = t.touched || {};
        return V(p, u.name) || (p = { ...p }, oe(p, u.name, !0)), {
          ...t,
          errors: v || {},
          isValid: !v,
          required: (n == null ? void 0 : n(a)) || {},
          touched: p,
          values: a
        };
      }
      case "setReadOnly": {
        if (!u.name)
          return t.readOnly === u.value ? t : { ...t, readOnly: !!u.value };
        const a = t.disabledFields || {};
        return oe(a, u.name, u.value), { ...t, readonlyFields: a };
      }
      case "setDisabled": {
        if (!u.name)
          return t.disabled === u.value ? t : { ...t, disabled: !!u.value };
        const a = t.disabledFields || {};
        return oe(a, u.name, u.value), { ...t, disabledFields: a };
      }
      case "setTouched": {
        const a = (u.name ? Array.isArray(u.name) ? u.name : [u.name] : []).filter((p) => t.touched[p] !== u.touched);
        if (!a.length)
          return t;
        const v = a.reduce(
          (p, h) => ({ ...p, [h]: !0 }),
          t.touched || {}
        );
        return { ...t, touched: v };
      }
      case "startSubmit": {
        if (t.isSubmitting)
          return t;
        const a = e == null ? void 0 : e(t.values), v = !a;
        return {
          ...t,
          disabled: v,
          errors: a || {},
          isSubmitting: v,
          isValid: v,
          submitted: t.submitted || 1
        };
      }
      case "endSubmit":
        return t.isSubmitting ? {
          ...t,
          disabled: !1,
          isSubmitting: !1
        } : t;
      default:
        return t;
    }
  };
}
function an(e, n, l, t, u, a) {
  const v = G(), p = G((m, d, f) => {
    const w = v.current, y = u.current, T = a.current;
    if (!w) {
      console.error('Cannot access to Dispatch trigger inside "on" action');
      return;
    }
    if (y && m.type === "startSubmit" && f.isSubmitting && !d.isSubmitting) {
      const L = y == null ? void 0 : y(f.values);
      L && typeof L.then == "function" ? L.finally(() => w({ type: "endSubmit" })) : w({ type: "endSubmit" });
    }
    T && T(m, d, f, w);
  }), h = N(
    (m, d) => {
      const f = e(m, d);
      return p.current(d, m, f), f;
    },
    [e, p]
  ), b = Fe(
    h,
    De,
    (m) => e(
      {
        ...m,
        disabled: l,
        initialValues: n || {},
        readOnly: t,
        values: n || {}
      },
      { type: "init" }
    )
  );
  return v.current = b[1], b;
}
const on = ({
  children: e,
  disabled: n,
  getRequired: l,
  id: t,
  initialValues: u,
  onStateUpdate: a,
  onSubmit: v,
  readOnly: p,
  reducer: h,
  validation: b
}) => {
  const m = N(
    (j) => (b == null ? void 0 : b(j)) || void 0,
    [b]
  ), d = Te(
    () => h || ln(m, l),
    [l, h, m]
  ), f = G(a);
  f.current = a;
  const w = G(v);
  w.current = v;
  const [y, T] = an(
    d,
    u,
    !!n,
    !!p,
    w,
    f
  );
  pe(() => {
    u !== y.initialValues && T({ type: "initialValues", value: u });
  }, [u]), pe(() => {
    y.disabled !== !!n && T({ type: "setDisabled", value: !!n });
  }, [n, T]);
  const L = N(
    (j) => {
      j.preventDefault(), T({ type: "startSubmit" });
    },
    [T]
  );
  return /* @__PURE__ */ me(Ae.Provider, { value: T, children: /* @__PURE__ */ me(ke.Provider, { value: y, children: /* @__PURE__ */ Qe("form", { id: t, onSubmit: L, children: [
    typeof e == "function" ? e(y, T) : e,
    /* @__PURE__ */ me("button", { style: { left: -9999, position: "fixed", top: -9999 }, type: "submit" })
  ] }) }) });
}, En = on;
function R(e) {
  return Ce(ke, e);
}
function On(e) {
  return R((n) => {
    const l = V(n.values, e);
    return (l && Array.isArray(l) ? l : []).length;
  });
}
function sn(e) {
  return R(
    (n) => (n == null ? void 0 : n.submitted) > 0 || V(n == null ? void 0 : n.touched, e) ? V(n == null ? void 0 : n.errors, e) : void 0
  );
}
function cn(e) {
  return R((n) => V(n == null ? void 0 : n.initialValues, e) || null);
}
function fn(e) {
  return R((n) => {
    const l = V(n.values, e) || null, t = V(n.initialValues, e) || null;
    return l !== t;
  });
}
function dn(e) {
  return R((n) => {
    const l = V(n == null ? void 0 : n.disabledFields, e);
    return typeof l == "boolean" ? l : !!(n != null && n.disabled);
  });
}
function vn(e) {
  return R((n) => {
    const l = V(n.readonlyFields, e);
    return typeof l == "boolean" ? l : !!n.readOnly;
  });
}
function bn(e) {
  return R((n) => !!V(n == null ? void 0 : n.required, e));
}
function mn(e) {
  return R((n) => V(n == null ? void 0 : n.isValidatingFields, e) || !!(n != null && n.isValidating));
}
function _n(e) {
  return R((n) => (n == null ? void 0 : n.submitted) > 0 || !!V(n == null ? void 0 : n.touched, e));
}
function yn(e) {
  return R((n) => V(n.values, e) || null);
}
function $() {
  return Re(Ae);
}
function hn(e) {
  const n = $();
  return N(
    (l) => {
      n({ name: e, type: "setDisabled", value: l });
    },
    [n, e]
  );
}
function pn(e) {
  const n = $();
  return N(
    (l) => {
      (l && typeof l.then == "function" ? l : Promise.resolve(l)).then((u) => n({ error: u, name: e, type: "setError" }));
    },
    [n, e]
  );
}
function gn(e) {
  const n = $();
  return N(
    (l = !0) => n({ name: e, touched: l, type: "setTouched" }),
    [n, e]
  );
}
function Tn(e) {
  const n = $();
  return N(
    (l) => n({ name: e, type: "setValue", value: l }),
    [n, e]
  );
}
function In(e) {
  const n = cn(e), l = _n(e), t = fn(e), u = sn(e), a = dn(e), v = vn(e), p = mn(e), h = bn(e), b = yn(e), m = gn(e), d = Tn(e), f = pn(e), w = hn(e || void 0), y = N(() => {
    d(null);
  }, [d]), T = N(() => d(n), [n, d]);
  return Te(
    () => ({
      clearValue: y,
      error: u,
      initialValue: n,
      isChanged: t,
      isDisabled: a,
      isReadOnly: v,
      isRequired: h,
      isTouched: l,
      isValidating: p,
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
      t,
      a,
      v,
      h,
      l,
      p,
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
function Fn() {
  return Re(ke);
}
function Vn() {
  const e = $(), n = R((u) => !!u.isSubmitting), l = R((u) => !!u.isValidating), t = N(() => {
    e({ type: "startSubmit" });
  }, [e]);
  return Te(() => {
    const u = t;
    return u[0] = n, u[1] = l, u[2] = t, u;
  }, [n, l, t]);
}
function Ln() {
  const e = $();
  return N((n) => e({ type: "setValues", values: n }), [e]);
}
export {
  En as default,
  ln as getDefaultFormReducer,
  On as useArrayFieldLength,
  In as useField,
  sn as useFieldError,
  cn as useFieldInitialValue,
  fn as useFieldIsChanged,
  dn as useFieldIsDisabled,
  vn as useFieldIsReadonly,
  bn as useFieldIsRequired,
  mn as useFieldIsValidating,
  _n as useFieldTouched,
  yn as useFieldValue,
  $ as useFormDispatch,
  R as useFormSelect,
  Fn as useFormState,
  Vn as useFormSubmit,
  hn as useSetFieldDisabled,
  pn as useSetFieldError,
  gn as useSetFieldTouched,
  Tn as useSetFieldValue,
  Ln as useSetValues
};
