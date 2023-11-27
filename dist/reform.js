import { jsx as l0, jsxs as Wk } from "react/jsx-runtime";
import qE, { createContext as Xk, useRef as ts, useState as Kk, createElement as qk, useContext as Zk, useReducer as ZE, useEffect as s0, useLayoutEffect as Jk, useCallback as Zc, useMemo as JE } from "react";
var eb = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, c0 = { exports: {} }, u0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var GE;
function tb() {
  return GE || (GE = 1, function(z) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var $ = !1, b = !1, ue = 5;
      function De(Z, Te) {
        var Pe = Z.length;
        Z.push(Te), Be(Z, Te, Pe);
      }
      function he(Z) {
        return Z.length === 0 ? null : Z[0];
      }
      function g(Z) {
        if (Z.length === 0)
          return null;
        var Te = Z[0], Pe = Z.pop();
        return Pe !== Te && (Z[0] = Pe, fe(Z, Pe, 0)), Te;
      }
      function Be(Z, Te, Pe) {
        for (var ct = Pe; ct > 0; ) {
          var Nt = ct - 1 >>> 1, Sn = Z[Nt];
          if (G(Sn, Te) > 0)
            Z[Nt] = Te, Z[ct] = Sn, ct = Nt;
          else
            return;
        }
      }
      function fe(Z, Te, Pe) {
        for (var ct = Pe, Nt = Z.length, Sn = Nt >>> 1; ct < Sn; ) {
          var $t = (ct + 1) * 2 - 1, xr = Z[$t], kt = $t + 1, fa = Z[kt];
          if (G(xr, Te) < 0)
            kt < Nt && G(fa, xr) < 0 ? (Z[ct] = fa, Z[kt] = Te, ct = kt) : (Z[ct] = xr, Z[$t] = Te, ct = $t);
          else if (kt < Nt && G(fa, Te) < 0)
            Z[ct] = fa, Z[kt] = Te, ct = kt;
          else
            return;
        }
      }
      function G(Z, Te) {
        var Pe = Z.sortIndex - Te.sortIndex;
        return Pe !== 0 ? Pe : Z.id - Te.id;
      }
      var be = 1, F = 2, A = 3, K = 4, ye = 5;
      function Oe(Z, Te) {
      }
      var Fe = typeof performance == "object" && typeof performance.now == "function";
      if (Fe) {
        var ne = performance;
        z.unstable_now = function() {
          return ne.now();
        };
      } else {
        var V = Date, Q = V.now();
        z.unstable_now = function() {
          return V.now() - Q;
        };
      }
      var me = 1073741823, Ee = -1, nt = 250, je = 5e3, bn = 1e4, ir = me, Ht = [], vt = [], jn = 1, Ie = null, it = A, Cr = !1, Dt = !1, Er = !1, q = typeof setTimeout == "function" ? setTimeout : null, ke = typeof clearTimeout == "function" ? clearTimeout : null, ie = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function rt(Z) {
        for (var Te = he(vt); Te !== null; ) {
          if (Te.callback === null)
            g(vt);
          else if (Te.startTime <= Z)
            g(vt), Te.sortIndex = Te.expirationTime, De(Ht, Te);
          else
            return;
          Te = he(vt);
        }
      }
      function lt(Z) {
        if (Er = !1, rt(Z), !Dt)
          if (he(Ht) !== null)
            Dt = !0, si(Pn);
          else {
            var Te = he(vt);
            Te !== null && $n(lt, Te.startTime - Z);
          }
      }
      function Pn(Z, Te) {
        Dt = !1, Er && (Er = !1, Kr()), Cr = !0;
        var Pe = it;
        try {
          var ct;
          if (!b)
            return lr(Z, Te);
        } finally {
          Ie = null, it = Pe, Cr = !1;
        }
      }
      function lr(Z, Te) {
        var Pe = Te;
        for (rt(Pe), Ie = he(Ht); Ie !== null && !$ && !(Ie.expirationTime > Pe && (!Z || Hl())); ) {
          var ct = Ie.callback;
          if (typeof ct == "function") {
            Ie.callback = null, it = Ie.priorityLevel;
            var Nt = Ie.expirationTime <= Pe, Sn = ct(Nt);
            Pe = z.unstable_now(), typeof Sn == "function" ? Ie.callback = Sn : Ie === he(Ht) && g(Ht), rt(Pe);
          } else
            g(Ht);
          Ie = he(Ht);
        }
        if (Ie !== null)
          return !0;
        var $t = he(vt);
        return $t !== null && $n(lt, $t.startTime - Pe), !1;
      }
      function ii(Z, Te) {
        switch (Z) {
          case be:
          case F:
          case A:
          case K:
          case ye:
            break;
          default:
            Z = A;
        }
        var Pe = it;
        it = Z;
        try {
          return Te();
        } finally {
          it = Pe;
        }
      }
      function _n(Z) {
        var Te;
        switch (it) {
          case be:
          case F:
          case A:
            Te = A;
            break;
          default:
            Te = it;
            break;
        }
        var Pe = it;
        it = Te;
        try {
          return Z();
        } finally {
          it = Pe;
        }
      }
      function li(Z) {
        var Te = it;
        return function() {
          var Pe = it;
          it = Te;
          try {
            return Z.apply(this, arguments);
          } finally {
            it = Pe;
          }
        };
      }
      function Gr(Z, Te, Pe) {
        var ct = z.unstable_now(), Nt;
        if (typeof Pe == "object" && Pe !== null) {
          var Sn = Pe.delay;
          typeof Sn == "number" && Sn > 0 ? Nt = ct + Sn : Nt = ct;
        } else
          Nt = ct;
        var $t;
        switch (Z) {
          case be:
            $t = Ee;
            break;
          case F:
            $t = nt;
            break;
          case ye:
            $t = ir;
            break;
          case K:
            $t = bn;
            break;
          case A:
          default:
            $t = je;
            break;
        }
        var xr = Nt + $t, kt = {
          id: jn++,
          callback: Te,
          priorityLevel: Z,
          startTime: Nt,
          expirationTime: xr,
          sortIndex: -1
        };
        return Nt > ct ? (kt.sortIndex = Nt, De(vt, kt), he(Ht) === null && kt === he(vt) && (Er ? Kr() : Er = !0, $n(lt, Nt - ct))) : (kt.sortIndex = xr, De(Ht, kt), !Dt && !Cr && (Dt = !0, si(Pn))), kt;
      }
      function sa() {
      }
      function ju() {
        !Dt && !Cr && (Dt = !0, si(Pn));
      }
      function Tr() {
        return he(Ht);
      }
      function ba(Z) {
        Z.callback = null;
      }
      function gn() {
        return it;
      }
      var Yn = !1, Rr = null, Wr = -1, ur = ue, _a = -1;
      function Hl() {
        var Z = z.unstable_now() - _a;
        return !(Z < ur);
      }
      function Qi() {
      }
      function ui(Z) {
        if (Z < 0 || Z > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Z > 0 ? ur = Math.floor(1e3 / Z) : ur = ue;
      }
      var Ii = function() {
        if (Rr !== null) {
          var Z = z.unstable_now();
          _a = Z;
          var Te = !0, Pe = !0;
          try {
            Pe = Rr(Te, Z);
          } finally {
            Pe ? Xr() : (Yn = !1, Rr = null);
          }
        } else
          Yn = !1;
      }, Xr;
      if (typeof ie == "function")
        Xr = function() {
          ie(Ii);
        };
      else if (typeof MessageChannel < "u") {
        var oi = new MessageChannel(), ca = oi.port2;
        oi.port1.onmessage = Ii, Xr = function() {
          ca.postMessage(null);
        };
      } else
        Xr = function() {
          q(Ii, 0);
        };
      function si(Z) {
        Rr = Z, Yn || (Yn = !0, Xr());
      }
      function $n(Z, Te) {
        Wr = q(function() {
          Z(z.unstable_now());
        }, Te);
      }
      function Kr() {
        ke(Wr), Wr = -1;
      }
      var Pu = Qi, ci = null;
      z.unstable_IdlePriority = ye, z.unstable_ImmediatePriority = be, z.unstable_LowPriority = K, z.unstable_NormalPriority = A, z.unstable_Profiling = ci, z.unstable_UserBlockingPriority = F, z.unstable_cancelCallback = ba, z.unstable_continueExecution = ju, z.unstable_forceFrameRate = ui, z.unstable_getCurrentPriorityLevel = gn, z.unstable_getFirstCallbackNode = Tr, z.unstable_next = _n, z.unstable_pauseExecution = sa, z.unstable_requestPaint = Pu, z.unstable_runWithPriority = ii, z.unstable_scheduleCallback = Gr, z.unstable_shouldYield = Hl, z.unstable_wrapCallback = li, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(u0)), u0;
}
var o0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var WE;
function nb() {
  return WE || (WE = 1, function(z) {
    function $(q, ke) {
      var ie = q.length;
      q.push(ke);
      e:
        for (; 0 < ie; ) {
          var rt = ie - 1 >>> 1, lt = q[rt];
          if (0 < De(lt, ke))
            q[rt] = ke, q[ie] = lt, ie = rt;
          else
            break e;
        }
    }
    function b(q) {
      return q.length === 0 ? null : q[0];
    }
    function ue(q) {
      if (q.length === 0)
        return null;
      var ke = q[0], ie = q.pop();
      if (ie !== ke) {
        q[0] = ie;
        e:
          for (var rt = 0, lt = q.length, Pn = lt >>> 1; rt < Pn; ) {
            var lr = 2 * (rt + 1) - 1, ii = q[lr], _n = lr + 1, li = q[_n];
            if (0 > De(ii, ie))
              _n < lt && 0 > De(li, ii) ? (q[rt] = li, q[_n] = ie, rt = _n) : (q[rt] = ii, q[lr] = ie, rt = lr);
            else if (_n < lt && 0 > De(li, ie))
              q[rt] = li, q[_n] = ie, rt = _n;
            else
              break e;
          }
      }
      return ke;
    }
    function De(q, ke) {
      var ie = q.sortIndex - ke.sortIndex;
      return ie !== 0 ? ie : q.id - ke.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var he = performance;
      z.unstable_now = function() {
        return he.now();
      };
    } else {
      var g = Date, Be = g.now();
      z.unstable_now = function() {
        return g.now() - Be;
      };
    }
    var fe = [], G = [], be = 1, F = null, A = 3, K = !1, ye = !1, Oe = !1, Fe = typeof setTimeout == "function" ? setTimeout : null, ne = typeof clearTimeout == "function" ? clearTimeout : null, V = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Q(q) {
      for (var ke = b(G); ke !== null; ) {
        if (ke.callback === null)
          ue(G);
        else if (ke.startTime <= q)
          ue(G), ke.sortIndex = ke.expirationTime, $(fe, ke);
        else
          break;
        ke = b(G);
      }
    }
    function me(q) {
      if (Oe = !1, Q(q), !ye)
        if (b(fe) !== null)
          ye = !0, Dt(Ee);
        else {
          var ke = b(G);
          ke !== null && Er(me, ke.startTime - q);
        }
    }
    function Ee(q, ke) {
      ye = !1, Oe && (Oe = !1, ne(bn), bn = -1), K = !0;
      var ie = A;
      try {
        for (Q(ke), F = b(fe); F !== null && (!(F.expirationTime > ke) || q && !vt()); ) {
          var rt = F.callback;
          if (typeof rt == "function") {
            F.callback = null, A = F.priorityLevel;
            var lt = rt(F.expirationTime <= ke);
            ke = z.unstable_now(), typeof lt == "function" ? F.callback = lt : F === b(fe) && ue(fe), Q(ke);
          } else
            ue(fe);
          F = b(fe);
        }
        if (F !== null)
          var Pn = !0;
        else {
          var lr = b(G);
          lr !== null && Er(me, lr.startTime - ke), Pn = !1;
        }
        return Pn;
      } finally {
        F = null, A = ie, K = !1;
      }
    }
    var nt = !1, je = null, bn = -1, ir = 5, Ht = -1;
    function vt() {
      return !(z.unstable_now() - Ht < ir);
    }
    function jn() {
      if (je !== null) {
        var q = z.unstable_now();
        Ht = q;
        var ke = !0;
        try {
          ke = je(!0, q);
        } finally {
          ke ? Ie() : (nt = !1, je = null);
        }
      } else
        nt = !1;
    }
    var Ie;
    if (typeof V == "function")
      Ie = function() {
        V(jn);
      };
    else if (typeof MessageChannel < "u") {
      var it = new MessageChannel(), Cr = it.port2;
      it.port1.onmessage = jn, Ie = function() {
        Cr.postMessage(null);
      };
    } else
      Ie = function() {
        Fe(jn, 0);
      };
    function Dt(q) {
      je = q, nt || (nt = !0, Ie());
    }
    function Er(q, ke) {
      bn = Fe(function() {
        q(z.unstable_now());
      }, ke);
    }
    z.unstable_IdlePriority = 5, z.unstable_ImmediatePriority = 1, z.unstable_LowPriority = 4, z.unstable_NormalPriority = 3, z.unstable_Profiling = null, z.unstable_UserBlockingPriority = 2, z.unstable_cancelCallback = function(q) {
      q.callback = null;
    }, z.unstable_continueExecution = function() {
      ye || K || (ye = !0, Dt(Ee));
    }, z.unstable_forceFrameRate = function(q) {
      0 > q || 125 < q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ir = 0 < q ? Math.floor(1e3 / q) : 5;
    }, z.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, z.unstable_getFirstCallbackNode = function() {
      return b(fe);
    }, z.unstable_next = function(q) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var ke = 3;
          break;
        default:
          ke = A;
      }
      var ie = A;
      A = ke;
      try {
        return q();
      } finally {
        A = ie;
      }
    }, z.unstable_pauseExecution = function() {
    }, z.unstable_requestPaint = function() {
    }, z.unstable_runWithPriority = function(q, ke) {
      switch (q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          q = 3;
      }
      var ie = A;
      A = q;
      try {
        return ke();
      } finally {
        A = ie;
      }
    }, z.unstable_scheduleCallback = function(q, ke, ie) {
      var rt = z.unstable_now();
      switch (typeof ie == "object" && ie !== null ? (ie = ie.delay, ie = typeof ie == "number" && 0 < ie ? rt + ie : rt) : ie = rt, q) {
        case 1:
          var lt = -1;
          break;
        case 2:
          lt = 250;
          break;
        case 5:
          lt = 1073741823;
          break;
        case 4:
          lt = 1e4;
          break;
        default:
          lt = 5e3;
      }
      return lt = ie + lt, q = { id: be++, callback: ke, priorityLevel: q, startTime: ie, expirationTime: lt, sortIndex: -1 }, ie > rt ? (q.sortIndex = ie, $(G, q), b(fe) === null && q === b(G) && (Oe ? (ne(bn), bn = -1) : Oe = !0, Er(me, ie - rt))) : (q.sortIndex = lt, $(fe, q), ye || K || (ye = !0, Dt(Ee))), q;
    }, z.unstable_shouldYield = vt, z.unstable_wrapCallback = function(q) {
      var ke = A;
      return function() {
        var ie = A;
        A = ke;
        try {
          return q.apply(this, arguments);
        } finally {
          A = ie;
        }
      };
    };
  }(o0)), o0;
}
process.env.NODE_ENV === "production" ? c0.exports = nb() : c0.exports = tb();
var Cp = c0.exports, f0 = { exports: {} }, Qr = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XE;
function rb() {
  return XE || (XE = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var z = qE, $ = Cp, b = z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ue = !1;
    function De(e) {
      ue = e;
    }
    function he(e) {
      if (!ue) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Be("warn", e, a);
      }
    }
    function g(e) {
      if (!ue) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Be("error", e, a);
      }
    }
    function Be(e, t, a) {
      {
        var i = b.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var fe = 0, G = 1, be = 2, F = 3, A = 4, K = 5, ye = 6, Oe = 7, Fe = 8, ne = 9, V = 10, Q = 11, me = 12, Ee = 13, nt = 14, je = 15, bn = 16, ir = 17, Ht = 18, vt = 19, jn = 21, Ie = 22, it = 23, Cr = 24, Dt = 25, Er = !0, q = !1, ke = !1, ie = !1, rt = !1, lt = !0, Pn = !1, lr = !1, ii = !0, _n = !0, li = !0, Gr = /* @__PURE__ */ new Set(), sa = {}, ju = {};
    function Tr(e, t) {
      ba(e, t), ba(e + "Capture", t);
    }
    function ba(e, t) {
      sa[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), sa[e] = t;
      {
        var a = e.toLowerCase();
        ju[a] = e, e === "onDoubleClick" && (ju.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Gr.add(t[i]);
    }
    var gn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Yn = Object.prototype.hasOwnProperty;
    function Rr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Wr(e) {
      try {
        return ur(e), !1;
      } catch {
        return !0;
      }
    }
    function ur(e) {
      return "" + e;
    }
    function _a(e, t) {
      if (Wr(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rr(e)), ur(e);
    }
    function Hl(e) {
      if (Wr(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(e)), ur(e);
    }
    function Qi(e, t) {
      if (Wr(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rr(e)), ur(e);
    }
    function ui(e, t) {
      if (Wr(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rr(e)), ur(e);
    }
    function Ii(e) {
      if (Wr(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Rr(e)), ur(e);
    }
    function Xr(e) {
      if (Wr(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Rr(e)), ur(e);
    }
    var oi = 0, ca = 1, si = 2, $n = 3, Kr = 4, Pu = 5, ci = 6, Z = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Te = Z + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Pe = new RegExp("^[" + Z + "][" + Te + "]*$"), ct = {}, Nt = {};
    function Sn(e) {
      return Yn.call(Nt, e) ? !0 : Yn.call(ct, e) ? !1 : Pe.test(e) ? (Nt[e] = !0, !0) : (ct[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function $t(e, t, a) {
      return t !== null ? t.type === oi : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function xr(e, t, a, i) {
      if (a !== null && a.type === oi)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function kt(e, t, a, i) {
      if (t === null || typeof t > "u" || xr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case $n:
            return !t;
          case Kr:
            return t === !1;
          case Pu:
            return isNaN(t);
          case ci:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function fa(e) {
      return bt.hasOwnProperty(e) ? bt[e] : null;
    }
    function Ft(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === si || t === $n || t === Kr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var bt = {}, Ep = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Ep.forEach(function(e) {
      bt[e] = new Ft(
        e,
        oi,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      bt[t] = new Ft(
        t,
        ca,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      bt[e] = new Ft(
        e,
        si,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      bt[e] = new Ft(
        e,
        si,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      bt[e] = new Ft(
        e,
        $n,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      bt[e] = new Ft(
        e,
        $n,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      bt[e] = new Ft(
        e,
        Kr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      bt[e] = new Ft(
        e,
        ci,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      bt[e] = new Ft(
        e,
        Pu,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ns = /[\-\:]([a-z])/g, rs = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ns, rs);
      bt[t] = new Ft(
        t,
        ca,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ns, rs);
      bt[t] = new Ft(
        t,
        ca,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ns, rs);
      bt[t] = new Ft(
        t,
        ca,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      bt[e] = new Ft(
        e,
        ca,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Tp = "xlinkHref";
    bt[Tp] = new Ft(
      "xlinkHref",
      ca,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      bt[e] = new Ft(
        e,
        ca,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Rp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, as = !1;
    function Jc(e) {
      !as && Rp.test(e) && (as = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Yu(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        _a(a, t), i.sanitizeURL && Jc("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Kr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : kt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (kt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === $n)
            return a;
          f = e.getAttribute(s);
        }
        return kt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function is(e, t, a, i) {
      {
        if (!Sn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return _a(a, t), u === "" + a ? a : u;
      }
    }
    function Gi(e, t, a, i) {
      var u = fa(t);
      if (!$t(t, u, i)) {
        if (kt(t, a, u, i) && (a = null), i || u === null) {
          if (Sn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (_a(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === $n ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var m = u.attributeName, y = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(m);
        else {
          var R = u.type, E;
          R === $n || R === Kr && a === !0 ? E = "" : (_a(a, m), E = "" + a, u.sanitizeURL && Jc(E.toString())), y ? e.setAttributeNS(y, m, E) : e.setAttribute(m, E);
        }
      }
    }
    var Fl = Symbol.for("react.element"), qr = Symbol.for("react.portal"), Oa = Symbol.for("react.fragment"), Vl = Symbol.for("react.strict_mode"), $u = Symbol.for("react.profiler"), ef = Symbol.for("react.provider"), tf = Symbol.for("react.context"), Bl = Symbol.for("react.forward_ref"), da = Symbol.for("react.suspense"), Qu = Symbol.for("react.suspense_list"), jl = Symbol.for("react.memo"), On = Symbol.for("react.lazy"), xp = Symbol.for("react.scope"), wp = Symbol.for("react.debug_trace_mode"), nf = Symbol.for("react.offscreen"), Dp = Symbol.for("react.legacy_hidden"), km = Symbol.for("react.cache"), bm = Symbol.for("react.tracing_marker"), _t = Symbol.iterator, _m = "@@iterator";
    function Ma(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = _t && e[_t] || e[_m];
      return typeof t == "function" ? t : null;
    }
    var Ye = Object.assign, fi = 0, kp, rf, Iu, Zr, bp, wr, _p;
    function Op() {
    }
    Op.__reactDisabledLog = !0;
    function Om() {
      {
        if (fi === 0) {
          kp = console.log, rf = console.info, Iu = console.warn, Zr = console.error, bp = console.group, wr = console.groupCollapsed, _p = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Op,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        fi++;
      }
    }
    function ls() {
      {
        if (fi--, fi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ye({}, e, {
              value: kp
            }),
            info: Ye({}, e, {
              value: rf
            }),
            warn: Ye({}, e, {
              value: Iu
            }),
            error: Ye({}, e, {
              value: Zr
            }),
            group: Ye({}, e, {
              value: bp
            }),
            groupCollapsed: Ye({}, e, {
              value: wr
            }),
            groupEnd: Ye({}, e, {
              value: _p
            })
          });
        }
        fi < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Pl = b.ReactCurrentDispatcher, Wi;
    function Jr(e, t, a) {
      {
        if (Wi === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Wi = i && i[1] || "";
          }
        return `
` + Wi + e;
      }
    }
    var af = !1, us;
    {
      var lf = typeof WeakMap == "function" ? WeakMap : Map;
      us = new lf();
    }
    function os(e, t) {
      if (!e || af)
        return "";
      {
        var a = us.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      af = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Pl.current, Pl.current = null, Om();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (O) {
              i = O;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (O) {
              i = O;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            i = O;
          }
          e();
        }
      } catch (O) {
        if (O && i && typeof O.stack == "string") {
          for (var p = O.stack.split(`
`), v = i.stack.split(`
`), m = p.length - 1, y = v.length - 1; m >= 1 && y >= 0 && p[m] !== v[y]; )
            y--;
          for (; m >= 1 && y >= 0; m--, y--)
            if (p[m] !== v[y]) {
              if (m !== 1 || y !== 1)
                do
                  if (m--, y--, y < 0 || p[m] !== v[y]) {
                    var R = `
` + p[m].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && us.set(e, R), R;
                  }
                while (m >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        af = !1, Pl.current = s, ls(), Error.prepareStackTrace = u;
      }
      var E = e ? e.displayName || e.name : "", _ = E ? Jr(E) : "";
      return typeof e == "function" && us.set(e, _), _;
    }
    function uf(e, t, a) {
      return os(e, !0);
    }
    function Xi(e, t, a) {
      return os(e, !1);
    }
    function Mm(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Gu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return os(e, Mm(e));
      if (typeof e == "string")
        return Jr(e);
      switch (e) {
        case da:
          return Jr("Suspense");
        case Qu:
          return Jr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Bl:
            return Xi(e.render);
          case jl:
            return Gu(e.type, t, a);
          case On: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Gu(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function at(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case K:
          return Jr(e.type);
        case bn:
          return Jr("Lazy");
        case Ee:
          return Jr("Suspense");
        case vt:
          return Jr("SuspenseList");
        case fe:
        case be:
        case je:
          return Xi(e.type);
        case Q:
          return Xi(e.type.render);
        case G:
          return uf(e.type);
        default:
          return "";
      }
    }
    function of(e) {
      try {
        var t = "", a = e;
        do
          t += at(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Mp(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function ss(e) {
      return e.displayName || "Context";
    }
    function ft(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Oa:
          return "Fragment";
        case qr:
          return "Portal";
        case $u:
          return "Profiler";
        case Vl:
          return "StrictMode";
        case da:
          return "Suspense";
        case Qu:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case tf:
            var t = e;
            return ss(t) + ".Consumer";
          case ef:
            var a = e;
            return ss(a._context) + ".Provider";
          case Bl:
            return Mp(e, e.render, "ForwardRef");
          case jl:
            var i = e.displayName || null;
            return i !== null ? i : ft(e.type) || "Memo";
          case On: {
            var u = e, s = u._payload, f = u._init;
            try {
              return ft(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Lp(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function sf(e) {
      return e.displayName || "Context";
    }
    function Ue(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Cr:
          return "Cache";
        case ne:
          var i = a;
          return sf(i) + ".Consumer";
        case V:
          var u = a;
          return sf(u._context) + ".Provider";
        case Ht:
          return "DehydratedFragment";
        case Q:
          return Lp(a, a.render, "ForwardRef");
        case Oe:
          return "Fragment";
        case K:
          return a;
        case A:
          return "Portal";
        case F:
          return "Root";
        case ye:
          return "Text";
        case bn:
          return ft(a);
        case Fe:
          return a === Vl ? "StrictMode" : "Mode";
        case Ie:
          return "Offscreen";
        case me:
          return "Profiler";
        case jn:
          return "Scope";
        case Ee:
          return "Suspense";
        case vt:
          return "SuspenseList";
        case Dt:
          return "TracingMarker";
        case G:
        case fe:
        case ir:
        case be:
        case nt:
        case je:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Wu = b.ReactDebugCurrentFrame, Vt = null, Dr = !1;
    function kr() {
      {
        if (Vt === null)
          return null;
        var e = Vt._debugOwner;
        if (e !== null && typeof e < "u")
          return Ue(e);
      }
      return null;
    }
    function Xu() {
      return Vt === null ? "" : of(Vt);
    }
    function Qt() {
      Wu.getCurrentStack = null, Vt = null, Dr = !1;
    }
    function ut(e) {
      Wu.getCurrentStack = e === null ? null : Xu, Vt = e, Dr = !1;
    }
    function Lm() {
      return Vt;
    }
    function ea(e) {
      Dr = e;
    }
    function Cn(e) {
      return "" + e;
    }
    function di(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Xr(e), e;
        default:
          return "";
      }
    }
    var Np = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Yl(e, t) {
      Np[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function cf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function zp(e) {
      return e._valueTracker;
    }
    function Ku(e) {
      e._valueTracker = null;
    }
    function qu(e) {
      var t = "";
      return e && (cf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function $l(e) {
      var t = cf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Xr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Xr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Xr(p), i = "" + p;
          },
          stopTracking: function() {
            Ku(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ki(e) {
      zp(e) || (e._valueTracker = $l(e));
    }
    function Up(e) {
      if (!e)
        return !1;
      var t = zp(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = qu(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function cs(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var fs = !1, Zu = !1, ds = !1, ff = !1;
    function La(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Ju(e, t) {
      var a = e, i = t.checked, u = Ye({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function eo(e, t) {
      Yl("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Zu && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), Zu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !fs && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), fs = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: di(t.value != null ? t.value : i),
        controlled: La(t)
      };
    }
    function df(e, t) {
      var a = e, i = t.checked;
      i != null && Gi(a, "checked", i, !1);
    }
    function Ql(e, t) {
      var a = e;
      {
        var i = La(t);
        !a._wrapperState.controlled && i && !ff && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ff = !0), a._wrapperState.controlled && !i && !ds && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ds = !0);
      }
      df(e, t);
      var u = di(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Cn(u)) : a.value !== Cn(u) && (a.value = Cn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? pi(a, t.type, u) : t.hasOwnProperty("defaultValue") && pi(a, t.type, di(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function to(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Cn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Ap(e, t) {
      var a = e;
      Ql(a, t), or(a, t);
    }
    function or(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        _a(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = dh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Up(f), Ql(f, p);
          }
        }
      }
    }
    function pi(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || cs(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Cn(e._wrapperState.initialValue) : e.defaultValue !== Cn(a) && (e.defaultValue = Cn(a)));
    }
    var ps = !1, Il = !1, Hp = !1;
    function vs(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? z.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Il || (Il = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Hp || (Hp = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ps && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ps = !0);
    }
    function pf(e, t) {
      t.value != null && e.setAttribute("value", Cn(di(t.value)));
    }
    var no = Array.isArray;
    function Zt(e) {
      return no(e);
    }
    var hs;
    hs = !1;
    function Fp() {
      var e = kr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Vp = ["value", "defaultValue"];
    function Nm(e) {
      {
        Yl("select", e);
        for (var t = 0; t < Vp.length; t++) {
          var a = Vp[t];
          if (e[a] != null) {
            var i = Zt(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Fp()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Fp());
          }
        }
      }
    }
    function vi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var m = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== m && (u[v].selected = m), m && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var y = Cn(di(a)), R = null, E = 0; E < u.length; E++) {
          if (u[E].value === y) {
            u[E].selected = !0, i && (u[E].defaultSelected = !0);
            return;
          }
          R === null && !u[E].disabled && (R = u[E]);
        }
        R !== null && (R.selected = !0);
      }
    }
    function vf(e, t) {
      return Ye({}, t, {
        value: void 0
      });
    }
    function Bp(e, t) {
      var a = e;
      Nm(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !hs && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), hs = !0);
    }
    function zm(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? vi(a, !!t.multiple, i, !1) : t.defaultValue != null && vi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Um(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? vi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? vi(a, !!t.multiple, t.defaultValue, !0) : vi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Am(e, t) {
      var a = e, i = t.value;
      i != null && vi(a, !!t.multiple, i, !1);
    }
    var hf = !1;
    function mf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ye({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Cn(a._wrapperState.initialValue)
      });
      return i;
    }
    function jp(e, t) {
      var a = e;
      Yl("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !hf && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component"), hf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Zt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: di(i)
      };
    }
    function Pp(e, t) {
      var a = e, i = di(t.value), u = di(t.defaultValue);
      if (i != null) {
        var s = Cn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Cn(u));
    }
    function Yp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function yf(e, t) {
      Pp(e, t);
    }
    var Na = "http://www.w3.org/1999/xhtml", Hm = "http://www.w3.org/1998/Math/MathML", gf = "http://www.w3.org/2000/svg";
    function ms(e) {
      switch (e) {
        case "svg":
          return gf;
        case "math":
          return Hm;
        default:
          return Na;
      }
    }
    function Sf(e, t) {
      return e == null || e === Na ? ms(t) : e === gf && t === "foreignObject" ? Na : e;
    }
    var Fm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, ys, $p = Fm(function(e, t) {
      if (e.namespaceURI === gf && !("innerHTML" in e)) {
        ys = ys || document.createElement("div"), ys.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = ys.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Qn = 1, za = 3, Bt = 8, ta = 9, qi = 11, gs = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === za) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Qp = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Gl = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Ip(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Gp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Gl).forEach(function(e) {
      Gp.forEach(function(t) {
        Gl[Ip(t, e)] = Gl[e];
      });
    });
    function Ss(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Gl.hasOwnProperty(e) && Gl[e]) ? t + "px" : (ui(t, e), ("" + t).trim());
    }
    var Wl = /([A-Z])/g, Vm = /^ms-/;
    function Bm(e) {
      return e.replace(Wl, "-$1").toLowerCase().replace(Vm, "-ms-");
    }
    var Wp = function() {
    };
    {
      var Xp = /^(?:webkit|moz|o)[A-Z]/, Kp = /^-ms-/, ro = /-(.)/g, Xl = /;\s*$/, Kl = {}, ql = {}, qp = !1, Cf = !1, Ef = function(e) {
        return e.replace(ro, function(t, a) {
          return a.toUpperCase();
        });
      }, Tf = function(e) {
        Kl.hasOwnProperty(e) && Kl[e] || (Kl[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ef(e.replace(Kp, "ms-"))
        ));
      }, Zp = function(e) {
        Kl.hasOwnProperty(e) && Kl[e] || (Kl[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Jp = function(e, t) {
        ql.hasOwnProperty(t) && ql[t] || (ql[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Xl, "")));
      }, ev = function(e, t) {
        qp || (qp = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, jm = function(e, t) {
        Cf || (Cf = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Wp = function(e, t) {
        e.indexOf("-") > -1 ? Tf(e) : Xp.test(e) ? Zp(e) : Xl.test(t) && Jp(e, t), typeof t == "number" && (isNaN(t) ? ev(e, t) : isFinite(t) || jm(e, t));
      };
    }
    var Pm = Wp;
    function Ym(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Bm(i)) + ":", t += Ss(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function tv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Pm(i, t[i]);
          var s = Ss(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function $m(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function br(e) {
      var t = {};
      for (var a in e)
        for (var i = Qp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ao(e, t) {
      {
        if (!t)
          return;
        var a = br(e), i = br(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", $m(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var nv = {
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
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, rv = Ye({
      menuitem: !0
    }, nv), av = "__html";
    function Cs(e, t) {
      if (t) {
        if (rv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(av in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ua(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
    var Es = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, iv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, na = {}, Rf = new RegExp("^(aria)-[" + Te + "]*$"), io = new RegExp("^(aria)[A-Z][" + Te + "]*$");
    function xf(e, t) {
      {
        if (Yn.call(na, t) && na[t])
          return !0;
        if (io.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = iv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), na[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), na[t] = !0, !0;
        }
        if (Rf.test(t)) {
          var u = t.toLowerCase(), s = iv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return na[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), na[t] = !0, !0;
        }
      }
      return !0;
    }
    function lv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = xf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Ts(e, t) {
      Ua(e, t) || lv(e, t);
    }
    var Zi = !1;
    function wf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Zi && (Zi = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Df = function() {
    };
    {
      var Jt = {}, kf = /^on./, uv = /^on[^A-Z]/, ov = new RegExp("^(aria)-[" + Te + "]*$"), sv = new RegExp("^(aria)[A-Z][" + Te + "]*$");
      Df = function(e, t, a, i) {
        if (Yn.call(Jt, t) && Jt[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Jt[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Jt[t] = !0, !0;
          if (kf.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), Jt[t] = !0, !0;
        } else if (kf.test(t))
          return uv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Jt[t] = !0, !0;
        if (ov.test(t) || sv.test(t))
          return !0;
        if (u === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Jt[t] = !0, !0;
        if (u === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Jt[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Jt[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Jt[t] = !0, !0;
        var v = fa(t), m = v !== null && v.type === oi;
        if (Es.hasOwnProperty(u)) {
          var y = Es[u];
          if (y !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, y), Jt[t] = !0, !0;
        } else if (!m && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Jt[t] = !0, !0;
        return typeof a == "boolean" && xr(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Jt[t] = !0, !0) : m ? !0 : xr(t, a, v, !1) ? (Jt[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === $n && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Jt[t] = !0), !0);
      };
    }
    var cv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Df(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function fv(e, t, a) {
      Ua(e, t) || cv(e, t, a);
    }
    var Aa = 1, lo = 2, Ji = 4, Qm = Aa | lo | Ji, uo = null;
    function oo(e) {
      uo !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), uo = e;
    }
    function Im() {
      uo === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), uo = null;
    }
    function dv(e) {
      return e === uo;
    }
    function Rs(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === za ? t.parentNode : t;
    }
    var dt = null, hi = null, Ha = null;
    function Zl(e) {
      var t = xu(e);
      if (t) {
        if (typeof dt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = dh(a);
          dt(t.stateNode, t.type, i);
        }
      }
    }
    function pv(e) {
      dt = e;
    }
    function xs(e) {
      hi ? Ha ? Ha.push(e) : Ha = [e] : hi = e;
    }
    function so() {
      return hi !== null || Ha !== null;
    }
    function co() {
      if (hi) {
        var e = hi, t = Ha;
        if (hi = null, Ha = null, Zl(e), t)
          for (var a = 0; a < t.length; a++)
            Zl(t[a]);
      }
    }
    var el = function(e, t) {
      return e(t);
    }, bf = function() {
    }, _f = !1;
    function Gm() {
      var e = so();
      e && (bf(), co());
    }
    function Of(e, t, a) {
      if (_f)
        return e(t, a);
      _f = !0;
      try {
        return el(e, t, a);
      } finally {
        _f = !1, Gm();
      }
    }
    function ws(e, t, a) {
      el = e, bf = a;
    }
    function Ds(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Mf(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && Ds(t));
        default:
          return !1;
      }
    }
    function tl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = dh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Mf(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var fo = !1;
    if (gn)
      try {
        var nl = {};
        Object.defineProperty(nl, "passive", {
          get: function() {
            fo = !0;
          }
        }), window.addEventListener("test", nl, nl), window.removeEventListener("test", nl, nl);
      } catch {
        fo = !1;
      }
    function vv(e, t, a, i, u, s, f, p, v) {
      var m = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, m);
      } catch (y) {
        this.onError(y);
      }
    }
    var Lf = vv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Nf = document.createElement("react");
      Lf = function(t, a, i, u, s, f, p, v, m) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var y = document.createEvent("Event"), R = !1, E = !0, _ = window.event, O = Object.getOwnPropertyDescriptor(window, "event");
        function L() {
          Nf.removeEventListener(N, Ce, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = _);
        }
        var re = Array.prototype.slice.call(arguments, 3);
        function Ce() {
          R = !0, L(), a.apply(i, re), E = !1;
        }
        var ve, Xe = !1, Qe = !1;
        function w(D) {
          if (ve = D.error, Xe = !0, ve === null && D.colno === 0 && D.lineno === 0 && (Qe = !0), D.defaultPrevented && ve != null && typeof ve == "object")
            try {
              ve._suppressLogging = !0;
            } catch {
            }
        }
        var N = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", w), Nf.addEventListener(N, Ce, !1), y.initEvent(N, !1, !1), Nf.dispatchEvent(y), O && Object.defineProperty(window, "event", O), R && E && (Xe ? Qe && (ve = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ve = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ve)), window.removeEventListener("error", w), !R)
          return L(), vv.apply(this, arguments);
      };
    }
    var Wm = Lf, mi = !1, ra = null, po = !1, yi = null, pa = {
      onError: function(e) {
        mi = !0, ra = e;
      }
    };
    function rl(e, t, a, i, u, s, f, p, v) {
      mi = !1, ra = null, Wm.apply(pa, arguments);
    }
    function Fa(e, t, a, i, u, s, f, p, v) {
      if (rl.apply(this, arguments), mi) {
        var m = Uf();
        po || (po = !0, yi = m);
      }
    }
    function zf() {
      if (po) {
        var e = yi;
        throw po = !1, yi = null, e;
      }
    }
    function Xm() {
      return mi;
    }
    function Uf() {
      if (mi) {
        var e = ra;
        return mi = !1, ra = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _r(e) {
      return e._reactInternals;
    }
    function vo(e) {
      return e._reactInternals !== void 0;
    }
    function Jl(e, t) {
      e._reactInternals = t;
    }
    var Se = (
      /*                      */
      0
    ), gi = (
      /*                */
      1
    ), ht = (
      /*                    */
      2
    ), Ae = (
      /*                       */
      4
    ), Je = (
      /*                */
      16
    ), et = (
      /*                 */
      32
    ), va = (
      /*                     */
      64
    ), Me = (
      /*                   */
      128
    ), Ot = (
      /*            */
      256
    ), In = (
      /*                          */
      512
    ), Or = (
      /*                     */
      1024
    ), Ct = (
      /*                      */
      2048
    ), Mr = (
      /*                    */
      4096
    ), Si = (
      /*                   */
      8192
    ), ho = (
      /*             */
      16384
    ), ks = Ct | Ae | va | In | Or | ho, hv = (
      /*               */
      32767
    ), sr = (
      /*                   */
      32768
    ), en = (
      /*                */
      65536
    ), mo = (
      /* */
      131072
    ), Af = (
      /*                       */
      1048576
    ), Hf = (
      /*                    */
      2097152
    ), Gn = (
      /*                 */
      4194304
    ), Ci = (
      /*                */
      8388608
    ), Wn = (
      /*               */
      16777216
    ), al = (
      /*              */
      33554432
    ), eu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ae | Or | 0
    ), Xn = ht | Ae | Je | et | In | Mr | Si, En = Ae | va | In | Si, Lr = Ct | Je, un = Gn | Ci | Hf, Va = b.ReactCurrentOwner;
    function cr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (ht | Mr)) !== Se && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === F ? a : null;
    }
    function Ff(e) {
      if (e.tag === Ee) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function bs(e) {
      return e.tag === F ? e.stateNode.containerInfo : null;
    }
    function Vf(e) {
      return cr(e) === e;
    }
    function fr(e) {
      {
        var t = Va.current;
        if (t !== null && t.tag === G) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ue(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = _r(e);
      return u ? cr(u) === u : !1;
    }
    function Kn(e) {
      if (cr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function mt(e) {
      var t = e.alternate;
      if (!t) {
        var a = cr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return Kn(s), e;
            if (v === u)
              return Kn(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var m = !1, y = s.child; y; ) {
            if (y === i) {
              m = !0, i = s, u = f;
              break;
            }
            if (y === u) {
              m = !0, u = s, i = f;
              break;
            }
            y = y.sibling;
          }
          if (!m) {
            for (y = f.child; y; ) {
              if (y === i) {
                m = !0, i = f, u = s;
                break;
              }
              if (y === u) {
                m = !0, u = f, i = s;
                break;
              }
              y = y.sibling;
            }
            if (!m)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== F)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Nr(e) {
      var t = mt(e);
      return t !== null ? Bf(t) : null;
    }
    function Bf(e) {
      if (e.tag === K || e.tag === ye)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Bf(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function mv(e) {
      var t = mt(e);
      return t !== null ? _s(t) : null;
    }
    function _s(e) {
      if (e.tag === K || e.tag === ye)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== A) {
          var a = _s(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Os = $.unstable_scheduleCallback, yv = $.unstable_cancelCallback, Ms = $.unstable_shouldYield, gv = $.unstable_requestPaint, Tt = $.unstable_now, jf = $.unstable_getCurrentPriorityLevel, Ls = $.unstable_ImmediatePriority, dr = $.unstable_UserBlockingPriority, ha = $.unstable_NormalPriority, Ns = $.unstable_LowPriority, Ei = $.unstable_IdlePriority, Pf = $.unstable_yieldValue, Yf = $.unstable_setDisableYieldValue, Ti = null, tn = null, W = null, zt = !1, on = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function $f(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ii && (e = Ye({}, e, {
          getLaneLabelMap: xi,
          injectProfilingHooks: ja
        })), Ti = t.inject(e), tn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Sv(e, t) {
      if (tn && typeof tn.onScheduleFiberRoot == "function")
        try {
          tn.onScheduleFiberRoot(Ti, e, t);
        } catch (a) {
          zt || (zt = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function Ba(e, t) {
      if (tn && typeof tn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Me) === Me;
          if (_n) {
            var i;
            switch (t) {
              case Tn:
                i = Ls;
                break;
              case sn:
                i = dr;
                break;
              case Ya:
                i = ha;
                break;
              case wo:
                i = Ei;
                break;
              default:
                i = ha;
                break;
            }
            tn.onCommitFiberRoot(Ti, e, i, a);
          }
        } catch (u) {
          zt || (zt = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function Ri(e) {
      if (tn && typeof tn.onPostCommitFiberRoot == "function")
        try {
          tn.onPostCommitFiberRoot(Ti, e);
        } catch (t) {
          zt || (zt = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Qf(e) {
      if (tn && typeof tn.onCommitFiberUnmount == "function")
        try {
          tn.onCommitFiberUnmount(Ti, e);
        } catch (t) {
          zt || (zt = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function It(e) {
      if (typeof Pf == "function" && (Yf(e), De(e)), tn && typeof tn.setStrictMode == "function")
        try {
          tn.setStrictMode(Ti, e);
        } catch (t) {
          zt || (zt = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function ja(e) {
      W = e;
    }
    function xi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < yt; a++) {
          var i = Km(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function zs(e) {
      W !== null && typeof W.markCommitStarted == "function" && W.markCommitStarted(e);
    }
    function If() {
      W !== null && typeof W.markCommitStopped == "function" && W.markCommitStopped();
    }
    function wi(e) {
      W !== null && typeof W.markComponentRenderStarted == "function" && W.markComponentRenderStarted(e);
    }
    function il() {
      W !== null && typeof W.markComponentRenderStopped == "function" && W.markComponentRenderStopped();
    }
    function Cv(e) {
      W !== null && typeof W.markComponentPassiveEffectMountStarted == "function" && W.markComponentPassiveEffectMountStarted(e);
    }
    function Gf() {
      W !== null && typeof W.markComponentPassiveEffectMountStopped == "function" && W.markComponentPassiveEffectMountStopped();
    }
    function Us(e) {
      W !== null && typeof W.markComponentPassiveEffectUnmountStarted == "function" && W.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ev() {
      W !== null && typeof W.markComponentPassiveEffectUnmountStopped == "function" && W.markComponentPassiveEffectUnmountStopped();
    }
    function Tv(e) {
      W !== null && typeof W.markComponentLayoutEffectMountStarted == "function" && W.markComponentLayoutEffectMountStarted(e);
    }
    function Rv() {
      W !== null && typeof W.markComponentLayoutEffectMountStopped == "function" && W.markComponentLayoutEffectMountStopped();
    }
    function As(e) {
      W !== null && typeof W.markComponentLayoutEffectUnmountStarted == "function" && W.markComponentLayoutEffectUnmountStarted(e);
    }
    function tu() {
      W !== null && typeof W.markComponentLayoutEffectUnmountStopped == "function" && W.markComponentLayoutEffectUnmountStopped();
    }
    function Hs(e, t, a) {
      W !== null && typeof W.markComponentErrored == "function" && W.markComponentErrored(e, t, a);
    }
    function xv(e, t, a) {
      W !== null && typeof W.markComponentSuspended == "function" && W.markComponentSuspended(e, t, a);
    }
    function wv(e) {
      W !== null && typeof W.markLayoutEffectsStarted == "function" && W.markLayoutEffectsStarted(e);
    }
    function nu() {
      W !== null && typeof W.markLayoutEffectsStopped == "function" && W.markLayoutEffectsStopped();
    }
    function Dv(e) {
      W !== null && typeof W.markPassiveEffectsStarted == "function" && W.markPassiveEffectsStarted(e);
    }
    function yo() {
      W !== null && typeof W.markPassiveEffectsStopped == "function" && W.markPassiveEffectsStopped();
    }
    function aa(e) {
      W !== null && typeof W.markRenderStarted == "function" && W.markRenderStarted(e);
    }
    function go() {
      W !== null && typeof W.markRenderYielded == "function" && W.markRenderYielded();
    }
    function ru() {
      W !== null && typeof W.markRenderStopped == "function" && W.markRenderStopped();
    }
    function ll(e) {
      W !== null && typeof W.markRenderScheduled == "function" && W.markRenderScheduled(e);
    }
    function Wf(e, t) {
      W !== null && typeof W.markForceUpdateScheduled == "function" && W.markForceUpdateScheduled(e, t);
    }
    function Di(e, t) {
      W !== null && typeof W.markStateUpdateScheduled == "function" && W.markStateUpdateScheduled(e, t);
    }
    var Re = (
      /*                         */
      0
    ), Ve = (
      /*                 */
      1
    ), xe = (
      /*                    */
      2
    ), Rt = (
      /*               */
      8
    ), zr = (
      /*              */
      16
    ), Fs = Math.clz32 ? Math.clz32 : ul, Vs = Math.log, Xf = Math.LN2;
    function ul(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Vs(t) / Xf | 0) | 0;
    }
    var yt = 31, U = (
      /*                        */
      0
    ), Ge = (
      /*                          */
      0
    ), we = (
      /*                        */
      1
    ), ma = (
      /*    */
      2
    ), pr = (
      /*             */
      4
    ), ol = (
      /*            */
      8
    ), gt = (
      /*                     */
      16
    ), sl = (
      /*                */
      32
    ), ki = (
      /*                       */
      4194240
    ), cl = (
      /*                        */
      64
    ), Ur = (
      /*                        */
      128
    ), qn = (
      /*                        */
      256
    ), fl = (
      /*                        */
      512
    ), So = (
      /*                        */
      1024
    ), Co = (
      /*                        */
      2048
    ), Bs = (
      /*                        */
      4096
    ), js = (
      /*                        */
      8192
    ), Ps = (
      /*                        */
      16384
    ), Ys = (
      /*                       */
      32768
    ), $s = (
      /*                       */
      65536
    ), Qs = (
      /*                       */
      131072
    ), Is = (
      /*                       */
      262144
    ), Gs = (
      /*                       */
      524288
    ), dl = (
      /*                       */
      1048576
    ), Ws = (
      /*                       */
      2097152
    ), pl = (
      /*                            */
      130023424
    ), Pa = (
      /*                             */
      4194304
    ), Xs = (
      /*                             */
      8388608
    ), Eo = (
      /*                             */
      16777216
    ), Ks = (
      /*                             */
      33554432
    ), qs = (
      /*                             */
      67108864
    ), Kf = Pa, au = (
      /*          */
      134217728
    ), Zs = (
      /*                          */
      268435455
    ), iu = (
      /*               */
      268435456
    ), bi = (
      /*                        */
      536870912
    ), Zn = (
      /*                   */
      1073741824
    );
    function Km(e) {
      {
        if (e & we)
          return "Sync";
        if (e & ma)
          return "InputContinuousHydration";
        if (e & pr)
          return "InputContinuous";
        if (e & ol)
          return "DefaultHydration";
        if (e & gt)
          return "Default";
        if (e & sl)
          return "TransitionHydration";
        if (e & ki)
          return "Transition";
        if (e & pl)
          return "Retry";
        if (e & au)
          return "SelectiveHydration";
        if (e & iu)
          return "IdleHydration";
        if (e & bi)
          return "Idle";
        if (e & Zn)
          return "Offscreen";
      }
    }
    var pt = -1, Js = cl, ec = Pa;
    function lu(e) {
      switch (jt(e)) {
        case we:
          return we;
        case ma:
          return ma;
        case pr:
          return pr;
        case ol:
          return ol;
        case gt:
          return gt;
        case sl:
          return sl;
        case cl:
        case Ur:
        case qn:
        case fl:
        case So:
        case Co:
        case Bs:
        case js:
        case Ps:
        case Ys:
        case $s:
        case Qs:
        case Is:
        case Gs:
        case dl:
        case Ws:
          return e & ki;
        case Pa:
        case Xs:
        case Eo:
        case Ks:
        case qs:
          return e & pl;
        case au:
          return au;
        case iu:
          return iu;
        case bi:
          return bi;
        case Zn:
          return Zn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function To(e, t) {
      var a = e.pendingLanes;
      if (a === U)
        return U;
      var i = U, u = e.suspendedLanes, s = e.pingedLanes, f = a & Zs;
      if (f !== U) {
        var p = f & ~u;
        if (p !== U)
          i = lu(p);
        else {
          var v = f & s;
          v !== U && (i = lu(v));
        }
      } else {
        var m = a & ~u;
        m !== U ? i = lu(m) : s !== U && (i = lu(s));
      }
      if (i === U)
        return U;
      if (t !== U && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === U) {
        var y = jt(i), R = jt(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          y >= R || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          y === gt && (R & ki) !== U
        )
          return t;
      }
      (i & pr) !== U && (i |= a & gt);
      var E = e.entangledLanes;
      if (E !== U)
        for (var _ = e.entanglements, O = i & E; O > 0; ) {
          var L = _i(O), re = 1 << L;
          i |= _[L], O &= ~re;
        }
      return i;
    }
    function kv(e, t) {
      for (var a = e.eventTimes, i = pt; t > 0; ) {
        var u = _i(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function tc(e, t) {
      switch (e) {
        case we:
        case ma:
        case pr:
          return t + 250;
        case ol:
        case gt:
        case sl:
        case cl:
        case Ur:
        case qn:
        case fl:
        case So:
        case Co:
        case Bs:
        case js:
        case Ps:
        case Ys:
        case $s:
        case Qs:
        case Is:
        case Gs:
        case dl:
        case Ws:
          return t + 5e3;
        case Pa:
        case Xs:
        case Eo:
        case Ks:
        case qs:
          return pt;
        case au:
        case iu:
        case bi:
        case Zn:
          return pt;
        default:
          return g("Should have found matching lanes. This is a bug in React."), pt;
      }
    }
    function qm(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = _i(f), v = 1 << p, m = s[p];
        m === pt ? ((v & i) === U || (v & u) !== U) && (s[p] = tc(v, t)) : m <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Zm(e) {
      return lu(e.pendingLanes);
    }
    function qf(e) {
      var t = e.pendingLanes & ~Zn;
      return t !== U ? t : t & Zn ? Zn : U;
    }
    function uu(e) {
      return (e & we) !== U;
    }
    function Ro(e) {
      return (e & Zs) !== U;
    }
    function nc(e) {
      return (e & pl) === e;
    }
    function Jm(e) {
      var t = we | pr | gt;
      return (e & t) === U;
    }
    function bv(e) {
      return (e & ki) === e;
    }
    function xo(e, t) {
      var a = ma | pr | ol | gt;
      return (t & a) !== U;
    }
    function _v(e, t) {
      return (t & e.expiredLanes) !== U;
    }
    function Zf(e) {
      return (e & ki) !== U;
    }
    function Jf() {
      var e = Js;
      return Js <<= 1, (Js & ki) === U && (Js = cl), e;
    }
    function ey() {
      var e = ec;
      return ec <<= 1, (ec & pl) === U && (ec = Pa), e;
    }
    function jt(e) {
      return e & -e;
    }
    function Gt(e) {
      return jt(e);
    }
    function _i(e) {
      return 31 - Fs(e);
    }
    function rc(e) {
      return _i(e);
    }
    function Jn(e, t) {
      return (e & t) !== U;
    }
    function vl(e, t) {
      return (e & t) === t;
    }
    function He(e, t) {
      return e | t;
    }
    function ou(e, t) {
      return e & ~t;
    }
    function ed(e, t) {
      return e & t;
    }
    function Ov(e) {
      return e;
    }
    function Mv(e, t) {
      return e !== Ge && e < t ? e : t;
    }
    function ac(e) {
      for (var t = [], a = 0; a < yt; a++)
        t.push(e);
      return t;
    }
    function hl(e, t, a) {
      e.pendingLanes |= t, t !== bi && (e.suspendedLanes = U, e.pingedLanes = U);
      var i = e.eventTimes, u = rc(t);
      i[u] = a;
    }
    function td(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = _i(i), s = 1 << u;
        a[u] = pt, i &= ~s;
      }
    }
    function nd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function rd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = U, e.pingedLanes = U, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = _i(f), v = 1 << p;
        i[p] = U, u[p] = pt, s[p] = pt, f &= ~v;
      }
    }
    function su(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = _i(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function ty(e, t) {
      var a = jt(t), i;
      switch (a) {
        case pr:
          i = ma;
          break;
        case gt:
          i = ol;
          break;
        case cl:
        case Ur:
        case qn:
        case fl:
        case So:
        case Co:
        case Bs:
        case js:
        case Ps:
        case Ys:
        case $s:
        case Qs:
        case Is:
        case Gs:
        case dl:
        case Ws:
        case Pa:
        case Xs:
        case Eo:
        case Ks:
        case qs:
          i = sl;
          break;
        case bi:
          i = iu;
          break;
        default:
          i = Ge;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Ge ? Ge : i;
    }
    function ad(e, t, a) {
      if (on)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = rc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function ic(e, t) {
      if (on)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = rc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function id(e, t) {
      return null;
    }
    var Tn = we, sn = pr, Ya = gt, wo = bi, ml = Ge;
    function Ar() {
      return ml;
    }
    function Wt(e) {
      ml = e;
    }
    function Do(e, t) {
      var a = ml;
      try {
        return ml = e, t();
      } finally {
        ml = a;
      }
    }
    function Rn(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ny(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function ld(e, t) {
      return e !== 0 && e < t;
    }
    function ko(e) {
      var t = jt(e);
      return ld(Tn, t) ? ld(sn, t) ? Ro(t) ? Ya : wo : sn : Tn;
    }
    function Xt(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Lv;
    function le(e) {
      Lv = e;
    }
    function cu(e) {
      Lv(e);
    }
    var bo;
    function Nv(e) {
      bo = e;
    }
    var zv;
    function _o(e) {
      zv = e;
    }
    var Oo;
    function ud(e) {
      Oo = e;
    }
    var od;
    function Uv(e) {
      od = e;
    }
    var lc = !1, fu = [], ya = null, Et = null, nn = null, Hr = /* @__PURE__ */ new Map(), du = /* @__PURE__ */ new Map(), $a = [], ia = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Av(e) {
      return ia.indexOf(e) > -1;
    }
    function ga(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Hv(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ya = null;
          break;
        case "dragenter":
        case "dragleave":
          Et = null;
          break;
        case "mouseover":
        case "mouseout":
          nn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Hr.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          du.delete(i);
          break;
        }
      }
    }
    function pu(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ga(t, a, i, u, s);
        if (t !== null) {
          var p = xu(t);
          p !== null && bo(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Fv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return ya = pu(ya, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Et = pu(Et, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return nn = pu(nn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, m = v.pointerId;
          return Hr.set(m, pu(Hr.get(m) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var y = u, R = y.pointerId;
          return du.set(R, pu(du.get(R) || null, e, t, a, i, y)), !0;
        }
      }
      return !1;
    }
    function sd(e) {
      var t = Vo(e.target);
      if (t !== null) {
        var a = cr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ee) {
            var u = Ff(a);
            if (u !== null) {
              e.blockedOn = u, od(e.priority, function() {
                zv(a);
              });
              return;
            }
          } else if (i === F) {
            var s = a.stateNode;
            if (Xt(s)) {
              e.blockedOn = bs(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Vv(e) {
      for (var t = Oo(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < $a.length && ld(t, $a[i].priority); i++)
        ;
      $a.splice(i, 0, a), i === 0 && sd(a);
    }
    function uc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = yl(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          oo(s), u.target.dispatchEvent(s), Im();
        } else {
          var f = xu(i);
          return f !== null && bo(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Mo(e, t, a) {
      uc(e) && a.delete(t);
    }
    function cd() {
      lc = !1, ya !== null && uc(ya) && (ya = null), Et !== null && uc(Et) && (Et = null), nn !== null && uc(nn) && (nn = null), Hr.forEach(Mo), du.forEach(Mo);
    }
    function xn(e, t) {
      e.blockedOn === t && (e.blockedOn = null, lc || (lc = !0, $.unstable_scheduleCallback($.unstable_NormalPriority, cd)));
    }
    function $e(e) {
      if (fu.length > 0) {
        xn(fu[0], e);
        for (var t = 1; t < fu.length; t++) {
          var a = fu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ya !== null && xn(ya, e), Et !== null && xn(Et, e), nn !== null && xn(nn, e);
      var i = function(p) {
        return xn(p, e);
      };
      Hr.forEach(i), du.forEach(i);
      for (var u = 0; u < $a.length; u++) {
        var s = $a[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; $a.length > 0; ) {
        var f = $a[0];
        if (f.blockedOn !== null)
          break;
        sd(f), f.blockedOn === null && $a.shift();
      }
    }
    var xt = b.ReactCurrentBatchConfig, Mt = !0;
    function rn(e) {
      Mt = !!e;
    }
    function vr() {
      return Mt;
    }
    function vu(e, t, a) {
      var i = Mn(t), u;
      switch (i) {
        case Tn:
          u = Kt;
          break;
        case sn:
          u = Lo;
          break;
        case Ya:
        default:
          u = Qa;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Kt(e, t, a, i) {
      var u = Ar(), s = xt.transition;
      xt.transition = null;
      try {
        Wt(Tn), Qa(e, t, a, i);
      } finally {
        Wt(u), xt.transition = s;
      }
    }
    function Lo(e, t, a, i) {
      var u = Ar(), s = xt.transition;
      xt.transition = null;
      try {
        Wt(sn), Qa(e, t, a, i);
      } finally {
        Wt(u), xt.transition = s;
      }
    }
    function Qa(e, t, a, i) {
      Mt && oc(e, t, a, i);
    }
    function oc(e, t, a, i) {
      var u = yl(e, t, a, i);
      if (u === null) {
        Ty(e, t, i, hu, a), Hv(e, i);
        return;
      }
      if (Fv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Hv(e, i), t & Ji && Av(e)) {
        for (; u !== null; ) {
          var s = xu(u);
          s !== null && cu(s);
          var f = yl(e, t, a, i);
          if (f === null && Ty(e, t, i, hu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Ty(e, t, i, null, a);
    }
    var hu = null;
    function yl(e, t, a, i) {
      hu = null;
      var u = Rs(i), s = Vo(u);
      if (s !== null) {
        var f = cr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ee) {
            var v = Ff(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === F) {
            var m = f.stateNode;
            if (Xt(m))
              return bs(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return hu = s, null;
    }
    function Mn(e) {
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
          return Tn;
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
          return sn;
        case "message": {
          var t = jf();
          switch (t) {
            case Ls:
              return Tn;
            case dr:
              return sn;
            case ha:
            case Ns:
              return Ya;
            case Ei:
              return wo;
            default:
              return Ya;
          }
        }
        default:
          return Ya;
      }
    }
    function fd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function mu(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Ia(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function sc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var gl = null, Sa = null, Oi = null;
    function Mi(e) {
      return gl = e, Sa = fc(), !0;
    }
    function cc() {
      gl = null, Sa = null, Oi = null;
    }
    function yu() {
      if (Oi)
        return Oi;
      var e, t = Sa, a = t.length, i, u = fc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Oi = u.slice(e, p), Oi;
    }
    function fc() {
      return "value" in gl ? gl.value : gl.textContent;
    }
    function Sl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Cl() {
      return !0;
    }
    function wn() {
      return !1;
    }
    function Pt(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var m = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return m ? this.isDefaultPrevented = Cl : this.isDefaultPrevented = wn, this.isPropagationStopped = wn, this;
      }
      return Ye(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Cl);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Cl);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Cl
      }), t;
    }
    var Dn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, kn = Pt(Dn), gu = Ye({}, Dn, {
      view: 0,
      detail: 0
    }), dd = Pt(gu), No, pd, Fr;
    function Bv(e) {
      e !== Fr && (Fr && e.type === "mousemove" ? (No = e.screenX - Fr.screenX, pd = e.screenY - Fr.screenY) : (No = 0, pd = 0), Fr = e);
    }
    var Su = Ye({}, gu, {
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
      getModifierState: vc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Bv(e), No);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : pd;
      }
    }), Li = Pt(Su), vd = Ye({}, Su, {
      dataTransfer: 0
    }), El = Pt(vd), jv = Ye({}, gu, {
      relatedTarget: 0
    }), dc = Pt(jv), hd = Ye({}, Dn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), pc = Pt(hd), ry = Ye({}, Dn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), ay = Pt(ry), Pv = Ye({}, Dn, {
      data: 0
    }), md = Pt(Pv), Tl = md, iy = {
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
      MozPrintableKey: "Unidentified"
    }, Cu = {
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
      224: "Meta"
    };
    function Yv(e) {
      if (e.key) {
        var t = iy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Sl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Cu[e.keyCode] || "Unidentified" : "";
    }
    var Lt = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ly(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Lt[e];
      return i ? !!a[i] : !1;
    }
    function vc(e) {
      return ly;
    }
    var uy = Ye({}, gu, {
      key: Yv,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: vc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Sl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Sl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), oy = Pt(uy), $v = Ye({}, Su, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), yd = Pt($v), sy = Ye({}, gu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: vc
    }), Vr = Pt(sy), gd = Ye({}, Dn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), cy = Pt(gd), Ni = Ye({}, Su, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), hc = Pt(Ni), Rl = [9, 13, 27, 32], zo = 229, Uo = gn && "CompositionEvent" in window, xl = null;
    gn && "documentMode" in document && (xl = document.documentMode);
    var fy = gn && "TextEvent" in window && !xl, mc = gn && (!Uo || xl && xl > 8 && xl <= 11), Qv = 32, Sd = String.fromCharCode(Qv);
    function Iv() {
      Tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Tr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Tr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Tr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ao = !1;
    function yc(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Gv(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Cd(e, t) {
      return e === "keydown" && t.keyCode === zo;
    }
    function Wv(e, t) {
      switch (e) {
        case "keyup":
          return Rl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== zo;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Ed(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function gc(e) {
      return e.locale === "ko";
    }
    var Ga = !1;
    function Td(e, t, a, i, u) {
      var s, f;
      if (Uo ? s = Gv(t) : Ga ? Wv(t, i) && (s = "onCompositionEnd") : Cd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      mc && !gc(i) && (!Ga && s === "onCompositionStart" ? Ga = Mi(u) : s === "onCompositionEnd" && Ga && (f = yu()));
      var p = Jv(a, s);
      if (p.length > 0) {
        var v = new md(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var m = Ed(i);
          m !== null && (v.data = m);
        }
      }
    }
    function Sc(e, t) {
      switch (e) {
        case "compositionend":
          return Ed(t);
        case "keypress":
          var a = t.which;
          return a !== Qv ? null : (Ao = !0, Sd);
        case "textInput":
          var i = t.data;
          return i === Sd && Ao ? null : i;
        default:
          return null;
      }
    }
    function Xv(e, t) {
      if (Ga) {
        if (e === "compositionend" || !Uo && Wv(e, t)) {
          var a = yu();
          return cc(), Ga = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!yc(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return mc && !gc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function dy(e, t, a, i, u) {
      var s;
      if (fy ? s = Sc(t, i) : s = Xv(t, i), !s)
        return null;
      var f = Jv(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Tl("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Cc(e, t, a, i, u, s, f) {
      Td(e, t, a, i, u), dy(e, t, a, i, u);
    }
    var py = {
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
      week: !0
    };
    function Eu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!py[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function vy(e) {
      if (!gn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Ec() {
      Tr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      xs(i);
      var u = Jv(t, "onChange");
      if (u.length > 0) {
        var s = new kn("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, Rs(e)), Of(d, t);
    }
    function d(e) {
      w0(e, 0);
    }
    function h(e) {
      var t = kc(e);
      if (Up(t))
        return e;
    }
    function S(e, t) {
      if (e === "change")
        return t;
    }
    var C = !1;
    gn && (C = vy("input") && (!document.documentMode || document.documentMode > 9));
    function M(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", P);
    }
    function j() {
      r && (r.detachEvent("onpropertychange", P), r = null, l = null);
    }
    function P(e) {
      e.propertyName === "value" && h(l) && c(e);
    }
    function B(e, t, a) {
      e === "focusin" ? (j(), M(t, a)) : e === "focusout" && j();
    }
    function ee(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return h(l);
    }
    function oe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function de(e, t) {
      if (e === "click")
        return h(t);
    }
    function Ut(e, t) {
      if (e === "input" || e === "change")
        return h(t);
    }
    function x(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || pi(e, "number", e.value);
    }
    function T(e, t, a, i, u, s, f) {
      var p = a ? kc(a) : window, v, m;
      if (o(p) ? v = S : Eu(p) ? C ? v = Ut : (v = ee, m = B) : oe(p) && (v = de), v) {
        var y = v(t, a);
        if (y) {
          n(e, y, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && x(p);
    }
    function k() {
      ba("onMouseEnter", ["mouseout", "mouseover"]), ba("onMouseLeave", ["mouseout", "mouseover"]), ba("onPointerEnter", ["pointerout", "pointerover"]), ba("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function I(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !dv(i)) {
        var m = i.relatedTarget || i.fromElement;
        if (m && (Vo(m) || Ad(m)))
          return;
      }
      if (!(!v && !p)) {
        var y;
        if (u.window === u)
          y = u;
        else {
          var R = u.ownerDocument;
          R ? y = R.defaultView || R.parentWindow : y = window;
        }
        var E, _;
        if (v) {
          var O = i.relatedTarget || i.toElement;
          if (E = a, _ = O ? Vo(O) : null, _ !== null) {
            var L = cr(_);
            (_ !== L || _.tag !== K && _.tag !== ye) && (_ = null);
          }
        } else
          E = null, _ = a;
        if (E !== _) {
          var re = Li, Ce = "onMouseLeave", ve = "onMouseEnter", Xe = "mouse";
          (t === "pointerout" || t === "pointerover") && (re = yd, Ce = "onPointerLeave", ve = "onPointerEnter", Xe = "pointer");
          var Qe = E == null ? y : kc(E), w = _ == null ? y : kc(_), N = new re(Ce, Xe + "leave", E, i, u);
          N.target = Qe, N.relatedTarget = w;
          var D = null, Y = Vo(u);
          if (Y === a) {
            var ae = new re(ve, Xe + "enter", _, i, u);
            ae.target = w, ae.relatedTarget = Qe, D = ae;
          }
          kT(e, N, D, E, _);
        }
      }
    }
    function pe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var se = typeof Object.is == "function" ? Object.is : pe;
    function ge(e, t) {
      if (se(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Yn.call(t, s) || !se(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Le(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function an(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ke(e, t) {
      for (var a = Le(e), i = 0, u = 0; a; ) {
        if (a.nodeType === za) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Le(an(a));
      }
    }
    function zi(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return hy(e, u, s, f, p);
    }
    function hy(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, m = 0, y = e, R = null;
      e:
        for (; ; ) {
          for (var E = null; y === t && (a === 0 || y.nodeType === za) && (f = s + a), y === i && (u === 0 || y.nodeType === za) && (p = s + u), y.nodeType === za && (s += y.nodeValue.length), (E = y.firstChild) !== null; )
            R = y, y = E;
          for (; ; ) {
            if (y === e)
              break e;
            if (R === t && ++v === a && (f = s), R === i && ++m === u && (p = s), (E = y.nextSibling) !== null)
              break;
            y = R, R = y.parentNode;
          }
          y = E;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function oT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var m = Ke(e, f), y = Ke(e, p);
        if (m && y) {
          if (u.rangeCount === 1 && u.anchorNode === m.node && u.anchorOffset === m.offset && u.focusNode === y.node && u.focusOffset === y.offset)
            return;
          var R = a.createRange();
          R.setStart(m.node, m.offset), u.removeAllRanges(), f > p ? (u.addRange(R), u.extend(y.node, y.offset)) : (R.setEnd(y.node, y.offset), u.addRange(R));
        }
      }
    }
    function p0(e) {
      return e && e.nodeType === za;
    }
    function v0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : p0(e) ? !1 : p0(t) ? v0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function sT(e) {
      return e && e.ownerDocument && v0(e.ownerDocument.documentElement, e);
    }
    function cT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function h0() {
      for (var e = window, t = cs(); t instanceof e.HTMLIFrameElement; ) {
        if (cT(t))
          e = t.contentWindow;
        else
          return t;
        t = cs(e.document);
      }
      return t;
    }
    function my(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function fT() {
      var e = h0();
      return {
        focusedElem: e,
        selectionRange: my(e) ? pT(e) : null
      };
    }
    function dT(e) {
      var t = h0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && sT(a)) {
        i !== null && my(a) && vT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Qn && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function pT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = zi(e), t || {
        start: 0,
        end: 0
      };
    }
    function vT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : oT(e, t);
    }
    var hT = gn && "documentMode" in document && document.documentMode <= 11;
    function mT() {
      Tr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Tc = null, yy = null, Rd = null, gy = !1;
    function yT(e) {
      if ("selectionStart" in e && my(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function gT(e) {
      return e.window === e ? e.document : e.nodeType === ta ? e : e.ownerDocument;
    }
    function m0(e, t, a) {
      var i = gT(a);
      if (!(gy || Tc == null || Tc !== cs(i))) {
        var u = yT(Tc);
        if (!Rd || !ge(Rd, u)) {
          Rd = u;
          var s = Jv(yy, "onSelect");
          if (s.length > 0) {
            var f = new kn("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Tc;
          }
        }
      }
    }
    function ST(e, t, a, i, u, s, f) {
      var p = a ? kc(a) : window;
      switch (t) {
        case "focusin":
          (Eu(p) || p.contentEditable === "true") && (Tc = p, yy = a, Rd = null);
          break;
        case "focusout":
          Tc = null, yy = null, Rd = null;
          break;
        case "mousedown":
          gy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          gy = !1, m0(e, i, u);
          break;
        case "selectionchange":
          if (hT)
            break;
        case "keydown":
        case "keyup":
          m0(e, i, u);
      }
    }
    function Kv(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Rc = {
      animationend: Kv("Animation", "AnimationEnd"),
      animationiteration: Kv("Animation", "AnimationIteration"),
      animationstart: Kv("Animation", "AnimationStart"),
      transitionend: Kv("Transition", "TransitionEnd")
    }, Sy = {}, y0 = {};
    gn && (y0 = document.createElement("div").style, "AnimationEvent" in window || (delete Rc.animationend.animation, delete Rc.animationiteration.animation, delete Rc.animationstart.animation), "TransitionEvent" in window || delete Rc.transitionend.transition);
    function qv(e) {
      if (Sy[e])
        return Sy[e];
      if (!Rc[e])
        return e;
      var t = Rc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in y0)
          return Sy[e] = t[a];
      return e;
    }
    var g0 = qv("animationend"), S0 = qv("animationiteration"), C0 = qv("animationstart"), E0 = qv("transitionend"), T0 = /* @__PURE__ */ new Map(), R0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Tu(e, t) {
      T0.set(e, t), Tr(t, [e]);
    }
    function CT() {
      for (var e = 0; e < R0.length; e++) {
        var t = R0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Tu(a, "on" + i);
      }
      Tu(g0, "onAnimationEnd"), Tu(S0, "onAnimationIteration"), Tu(C0, "onAnimationStart"), Tu("dblclick", "onDoubleClick"), Tu("focusin", "onFocus"), Tu("focusout", "onBlur"), Tu(E0, "onTransitionEnd");
    }
    function ET(e, t, a, i, u, s, f) {
      var p = T0.get(t);
      if (p !== void 0) {
        var v = kn, m = t;
        switch (t) {
          case "keypress":
            if (Sl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = oy;
            break;
          case "focusin":
            m = "focus", v = dc;
            break;
          case "focusout":
            m = "blur", v = dc;
            break;
          case "beforeblur":
          case "afterblur":
            v = dc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Li;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = El;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Vr;
            break;
          case g0:
          case S0:
          case C0:
            v = pc;
            break;
          case E0:
            v = cy;
            break;
          case "scroll":
            v = dd;
            break;
          case "wheel":
            v = hc;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = ay;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = yd;
            break;
        }
        var y = (s & Ji) !== 0;
        {
          var R = !y && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", E = wT(a, p, i.type, y, R);
          if (E.length > 0) {
            var _ = new v(p, m, null, i, u);
            e.push({
              event: _,
              listeners: E
            });
          }
        }
      }
    }
    CT(), k(), Ec(), mT(), Iv();
    function TT(e, t, a, i, u, s, f) {
      ET(e, t, a, i, u, s);
      var p = (s & Qm) === 0;
      p && (I(e, t, a, i, u), T(e, t, a, i, u), ST(e, t, a, i, u), Cc(e, t, a, i, u));
    }
    var xd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Cy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(xd));
    function x0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Fa(i, t, void 0, e), e.currentTarget = null;
    }
    function RT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          x0(e, v, p), i = f;
        }
      else
        for (var m = 0; m < t.length; m++) {
          var y = t[m], R = y.instance, E = y.currentTarget, _ = y.listener;
          if (R !== i && e.isPropagationStopped())
            return;
          x0(e, _, E), i = R;
        }
    }
    function w0(e, t) {
      for (var a = (t & Ji) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        RT(s, f, a);
      }
      zf();
    }
    function xT(e, t, a, i, u) {
      var s = Rs(a), f = [];
      TT(f, e, i, a, s, t), w0(f, t);
    }
    function wt(e, t) {
      Cy.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = ex(t), u = bT(e, a);
      i.has(u) || (D0(t, e, lo, a), i.add(u));
    }
    function Ey(e, t, a) {
      Cy.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ji), D0(a, e, i, t);
    }
    var Zv = "_reactListening" + Math.random().toString(36).slice(2);
    function wd(e) {
      if (!e[Zv]) {
        e[Zv] = !0, Gr.forEach(function(a) {
          a !== "selectionchange" && (Cy.has(a) || Ey(a, !1, e), Ey(a, !0, e));
        });
        var t = e.nodeType === ta ? e : e.ownerDocument;
        t !== null && (t[Zv] || (t[Zv] = !0, Ey("selectionchange", !1, t)));
      }
    }
    function D0(e, t, a, i, u) {
      var s = vu(e, t, a), f = void 0;
      fo && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Ia(e, t, s, f) : mu(e, t, s) : f !== void 0 ? sc(e, t, s, f) : fd(e, t, s);
    }
    function k0(e, t) {
      return e === t || e.nodeType === Bt && e.parentNode === t;
    }
    function Ty(e, t, a, i, u) {
      var s = i;
      if (!(t & Aa) && !(t & lo)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === F || v === A) {
                var m = p.stateNode.containerInfo;
                if (k0(m, f))
                  break;
                if (v === A)
                  for (var y = p.return; y !== null; ) {
                    var R = y.tag;
                    if (R === F || R === A) {
                      var E = y.stateNode.containerInfo;
                      if (k0(E, f))
                        return;
                    }
                    y = y.return;
                  }
                for (; m !== null; ) {
                  var _ = Vo(m);
                  if (_ === null)
                    return;
                  var O = _.tag;
                  if (O === K || O === ye) {
                    p = s = _;
                    continue e;
                  }
                  m = m.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      Of(function() {
        return xT(e, t, a, s);
      });
    }
    function Dd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function wT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], m = e, y = null; m !== null; ) {
        var R = m, E = R.stateNode, _ = R.tag;
        if (_ === K && E !== null && (y = E, p !== null)) {
          var O = tl(m, p);
          O != null && v.push(Dd(m, O, y));
        }
        if (u)
          break;
        m = m.return;
      }
      return v;
    }
    function Jv(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === K && f !== null) {
          var v = f, m = tl(u, a);
          m != null && i.unshift(Dd(u, m, v));
          var y = tl(u, t);
          y != null && i.push(Dd(u, y, v));
        }
        u = u.return;
      }
      return i;
    }
    function xc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== K);
      return e || null;
    }
    function DT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = xc(s))
        u++;
      for (var f = 0, p = i; p; p = xc(p))
        f++;
      for (; u - f > 0; )
        a = xc(a), u--;
      for (; f - u > 0; )
        i = xc(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = xc(a), i = xc(i);
      }
      return null;
    }
    function b0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, m = v.alternate, y = v.stateNode, R = v.tag;
        if (m !== null && m === i)
          break;
        if (R === K && y !== null) {
          var E = y;
          if (u) {
            var _ = tl(p, s);
            _ != null && f.unshift(Dd(p, _, E));
          } else if (!u) {
            var O = tl(p, s);
            O != null && f.push(Dd(p, O, E));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function kT(e, t, a, i, u) {
      var s = i && u ? DT(i, u) : null;
      i !== null && b0(e, t, i, s, !1), u !== null && a !== null && b0(e, a, u, s, !0);
    }
    function bT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Br = !1, kd = "dangerouslySetInnerHTML", eh = "suppressContentEditableWarning", Ru = "suppressHydrationWarning", _0 = "autoFocus", Ho = "children", Fo = "style", th = "__html", Ry, nh, bd, O0, rh, M0, L0;
    Ry = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, nh = function(e, t) {
      Ts(e, t), wf(e, t), fv(e, t, {
        registrationNameDependencies: sa,
        possibleRegistrationNames: ju
      });
    }, M0 = gn && !document.documentMode, bd = function(e, t, a) {
      if (!Br) {
        var i = ah(a), u = ah(t);
        u !== i && (Br = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, O0 = function(e) {
      if (!Br) {
        Br = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, rh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, L0 = function(e, t) {
      var a = e.namespaceURI === Na ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var _T = /\r\n?/g, OT = /\u0000|\uFFFD/g;
    function ah(e) {
      Ii(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(_T, `
`).replace(OT, "");
    }
    function ih(e, t, a, i) {
      var u = ah(t), s = ah(e);
      if (s !== u && (i && (Br || (Br = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Er))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function N0(e) {
      return e.nodeType === ta ? e : e.ownerDocument;
    }
    function MT() {
    }
    function lh(e) {
      e.onclick = MT;
    }
    function LT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Fo)
            f && Object.freeze(f), tv(t, f);
          else if (s === kd) {
            var p = f ? f[th] : void 0;
            p != null && $p(t, p);
          } else if (s === Ho)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && gs(t, f);
            } else
              typeof f == "number" && gs(t, "" + f);
          else
            s === eh || s === Ru || s === _0 || (sa.hasOwnProperty(s) ? f != null && (typeof f != "function" && rh(s, f), s === "onScroll" && wt("scroll", t)) : f != null && Gi(t, s, f, u));
        }
    }
    function NT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Fo ? tv(e, f) : s === kd ? $p(e, f) : s === Ho ? gs(e, f) : Gi(e, s, f, i);
      }
    }
    function zT(e, t, a, i) {
      var u, s = N0(a), f, p = i;
      if (p === Na && (p = ms(e)), p === Na) {
        if (u = Ua(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var m = v.firstChild;
          f = v.removeChild(m);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var y = f;
          t.multiple ? y.multiple = !0 : t.size && (y.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Na && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Yn.call(Ry, e) && (Ry[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function UT(e, t) {
      return N0(t).createTextNode(e);
    }
    function AT(e, t, a, i) {
      var u = Ua(t, a);
      nh(t, a);
      var s;
      switch (t) {
        case "dialog":
          wt("cancel", e), wt("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          wt("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < xd.length; f++)
            wt(xd[f], e);
          s = a;
          break;
        case "source":
          wt("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          wt("error", e), wt("load", e), s = a;
          break;
        case "details":
          wt("toggle", e), s = a;
          break;
        case "input":
          eo(e, a), s = Ju(e, a), wt("invalid", e);
          break;
        case "option":
          vs(e, a), s = a;
          break;
        case "select":
          Bp(e, a), s = vf(e, a), wt("invalid", e);
          break;
        case "textarea":
          jp(e, a), s = mf(e, a), wt("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Cs(t, s), LT(t, e, i, s, u), t) {
        case "input":
          Ki(e), to(e, a, !1);
          break;
        case "textarea":
          Ki(e), Yp(e);
          break;
        case "option":
          pf(e, a);
          break;
        case "select":
          zm(e, a);
          break;
        default:
          typeof s.onClick == "function" && lh(e);
          break;
      }
    }
    function HT(e, t, a, i, u) {
      nh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Ju(e, a), p = Ju(e, i), s = [];
          break;
        case "select":
          f = vf(e, a), p = vf(e, i), s = [];
          break;
        case "textarea":
          f = mf(e, a), p = mf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && lh(e);
          break;
      }
      Cs(t, p);
      var v, m, y = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Fo) {
            var R = f[v];
            for (m in R)
              R.hasOwnProperty(m) && (y || (y = {}), y[m] = "");
          } else
            v === kd || v === Ho || v === eh || v === Ru || v === _0 || (sa.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var E = p[v], _ = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || E === _ || E == null && _ == null))
          if (v === Fo)
            if (E && Object.freeze(E), _) {
              for (m in _)
                _.hasOwnProperty(m) && (!E || !E.hasOwnProperty(m)) && (y || (y = {}), y[m] = "");
              for (m in E)
                E.hasOwnProperty(m) && _[m] !== E[m] && (y || (y = {}), y[m] = E[m]);
            } else
              y || (s || (s = []), s.push(v, y)), y = E;
          else if (v === kd) {
            var O = E ? E[th] : void 0, L = _ ? _[th] : void 0;
            O != null && L !== O && (s = s || []).push(v, O);
          } else
            v === Ho ? (typeof E == "string" || typeof E == "number") && (s = s || []).push(v, "" + E) : v === eh || v === Ru || (sa.hasOwnProperty(v) ? (E != null && (typeof E != "function" && rh(v, E), v === "onScroll" && wt("scroll", e)), !s && _ !== E && (s = [])) : (s = s || []).push(v, E));
      }
      return y && (ao(y, p[Fo]), (s = s || []).push(Fo, y)), s;
    }
    function FT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && df(e, u);
      var s = Ua(a, i), f = Ua(a, u);
      switch (NT(e, t, s, f), a) {
        case "input":
          Ql(e, u);
          break;
        case "textarea":
          Pp(e, u);
          break;
        case "select":
          Um(e, u);
          break;
      }
    }
    function VT(e) {
      {
        var t = e.toLowerCase();
        return Es.hasOwnProperty(t) && Es[t] || null;
      }
    }
    function BT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Ua(t, a), nh(t, a), t) {
        case "dialog":
          wt("cancel", e), wt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          wt("load", e);
          break;
        case "video":
        case "audio":
          for (var m = 0; m < xd.length; m++)
            wt(xd[m], e);
          break;
        case "source":
          wt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          wt("error", e), wt("load", e);
          break;
        case "details":
          wt("toggle", e);
          break;
        case "input":
          eo(e, a), wt("invalid", e);
          break;
        case "option":
          vs(e, a);
          break;
        case "select":
          Bp(e, a), wt("invalid", e);
          break;
        case "textarea":
          jp(e, a), wt("invalid", e);
          break;
      }
      Cs(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var y = e.attributes, R = 0; R < y.length; R++) {
          var E = y[R].name.toLowerCase();
          switch (E) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(y[R].name);
          }
        }
      }
      var _ = null;
      for (var O in a)
        if (a.hasOwnProperty(O)) {
          var L = a[O];
          if (O === Ho)
            typeof L == "string" ? e.textContent !== L && (a[Ru] !== !0 && ih(e.textContent, L, s, f), _ = [Ho, L]) : typeof L == "number" && e.textContent !== "" + L && (a[Ru] !== !0 && ih(e.textContent, L, s, f), _ = [Ho, "" + L]);
          else if (sa.hasOwnProperty(O))
            L != null && (typeof L != "function" && rh(O, L), O === "onScroll" && wt("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var re = void 0, Ce = p && Pn ? null : fa(O);
            if (a[Ru] !== !0) {
              if (!(O === eh || O === Ru || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              O === "value" || O === "checked" || O === "selected")) {
                if (O === kd) {
                  var ve = e.innerHTML, Xe = L ? L[th] : void 0;
                  if (Xe != null) {
                    var Qe = L0(e, Xe);
                    Qe !== ve && bd(O, ve, Qe);
                  }
                } else if (O === Fo) {
                  if (v.delete(O), M0) {
                    var w = Ym(L);
                    re = e.getAttribute("style"), w !== re && bd(O, re, w);
                  }
                } else if (p && !Pn)
                  v.delete(O.toLowerCase()), re = is(e, O, L), L !== re && bd(O, re, L);
                else if (!$t(O, Ce, p) && !kt(O, L, Ce, p)) {
                  var N = !1;
                  if (Ce !== null)
                    v.delete(Ce.attributeName), re = Yu(e, O, L, Ce);
                  else {
                    var D = i;
                    if (D === Na && (D = ms(t)), D === Na)
                      v.delete(O.toLowerCase());
                    else {
                      var Y = VT(O);
                      Y !== null && Y !== O && (N = !0, v.delete(Y)), v.delete(O);
                    }
                    re = is(e, O, L);
                  }
                  var ae = Pn;
                  !ae && L !== re && !N && bd(O, re, L);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Ru] !== !0 && O0(v), t) {
        case "input":
          Ki(e), to(e, a, !0);
          break;
        case "textarea":
          Ki(e), Yp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && lh(e);
          break;
      }
      return _;
    }
    function jT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function xy(e, t) {
      {
        if (Br)
          return;
        Br = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function wy(e, t) {
      {
        if (Br)
          return;
        Br = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t, a) {
      {
        if (Br)
          return;
        Br = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function ky(e, t) {
      {
        if (t === "" || Br)
          return;
        Br = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function PT(e, t, a) {
      switch (t) {
        case "input":
          Ap(e, a);
          return;
        case "textarea":
          yf(e, a);
          return;
        case "select":
          Am(e, a);
          return;
      }
    }
    var _d = function() {
    }, Od = function() {
    };
    {
      var YT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], z0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], $T = z0.concat(["button"]), QT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], U0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Od = function(e, t) {
        var a = Ye({}, e || U0), i = {
          tag: t
        };
        return z0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), $T.indexOf(t) !== -1 && (a.pTagInButtonScope = null), YT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var IT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return QT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, GT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, A0 = {};
      _d = function(e, t, a) {
        a = a || U0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = IT(e, u) ? null : i, f = s ? null : GT(e, a), p = s || f;
        if (p) {
          var v = p.tag, m = !!s + "|" + e + "|" + v;
          if (!A0[m]) {
            A0[m] = !0;
            var y = e, R = "";
            if (e === "#text" ? /\S/.test(t) ? y = "Text nodes" : (y = "Whitespace text nodes", R = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : y = "<" + e + ">", s) {
              var E = "";
              v === "table" && e === "tr" && (E += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", y, v, R, E);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", y, v);
          }
        }
      };
    }
    var uh = "suppressHydrationWarning", oh = "$", sh = "/$", Md = "$?", Ld = "$!", WT = "style", by = null, _y = null;
    function XT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ta:
        case qi: {
          t = i === ta ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Sf(null, "");
          break;
        }
        default: {
          var s = i === Bt ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Sf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Od(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function KT(e, t, a) {
      {
        var i = e, u = Sf(i.namespace, t), s = Od(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function gb(e) {
      return e;
    }
    function qT(e) {
      by = vr(), _y = fT();
      var t = null;
      return rn(!1), t;
    }
    function ZT(e) {
      dT(_y), rn(by), by = null, _y = null;
    }
    function JT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (_d(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Od(f.ancestorInfo, e);
          _d(null, p, v);
        }
        s = f.namespace;
      }
      var m = zT(e, t, a, s);
      return Ud(u, m), Hy(m, t), m;
    }
    function eR(e, t) {
      e.appendChild(t);
    }
    function tR(e, t, a, i, u) {
      switch (AT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function nR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Od(f.ancestorInfo, t);
          _d(null, p, v);
        }
      }
      return HT(e, t, a, i);
    }
    function Oy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function rR(e, t, a, i) {
      {
        var u = a;
        _d(null, e, u.ancestorInfo);
      }
      var s = UT(e, t);
      return Ud(i, s), s;
    }
    function aR() {
      var e = window.event;
      return e === void 0 ? Ya : Mn(e.type);
    }
    var My = typeof setTimeout == "function" ? setTimeout : void 0, iR = typeof clearTimeout == "function" ? clearTimeout : void 0, Ly = -1, H0 = typeof Promise == "function" ? Promise : void 0, lR = typeof queueMicrotask == "function" ? queueMicrotask : typeof H0 < "u" ? function(e) {
      return H0.resolve(null).then(e).catch(uR);
    } : My;
    function uR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function oR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function sR(e, t, a, i, u, s) {
      FT(e, t, a, i, u), Hy(e, u);
    }
    function F0(e) {
      gs(e, "");
    }
    function cR(e, t, a) {
      e.nodeValue = a;
    }
    function fR(e, t) {
      e.appendChild(t);
    }
    function dR(e, t) {
      var a;
      e.nodeType === Bt ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && lh(a);
    }
    function pR(e, t, a) {
      e.insertBefore(t, a);
    }
    function vR(e, t, a) {
      e.nodeType === Bt ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function hR(e, t) {
      e.removeChild(t);
    }
    function mR(e, t) {
      e.nodeType === Bt ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ny(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Bt) {
          var s = u.data;
          if (s === sh)
            if (i === 0) {
              e.removeChild(u), $e(t);
              return;
            } else
              i--;
          else
            (s === oh || s === Md || s === Ld) && i++;
        }
        a = u;
      } while (a);
      $e(t);
    }
    function yR(e, t) {
      e.nodeType === Bt ? Ny(e.parentNode, t) : e.nodeType === Qn && Ny(e, t), $e(e);
    }
    function gR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function SR(e) {
      e.nodeValue = "";
    }
    function CR(e, t) {
      e = e;
      var a = t[WT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Ss("display", i);
    }
    function ER(e, t) {
      e.nodeValue = t;
    }
    function TR(e) {
      e.nodeType === Qn ? e.textContent = "" : e.nodeType === ta && e.documentElement && e.removeChild(e.documentElement);
    }
    function RR(e, t, a) {
      return e.nodeType !== Qn || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function xR(e, t) {
      return t === "" || e.nodeType !== za ? null : e;
    }
    function wR(e) {
      return e.nodeType !== Bt ? null : e;
    }
    function V0(e) {
      return e.data === Md;
    }
    function zy(e) {
      return e.data === Ld;
    }
    function DR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function kR(e, t) {
      e._reactRetry = t;
    }
    function ch(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Qn || t === za)
          break;
        if (t === Bt) {
          var a = e.data;
          if (a === oh || a === Ld || a === Md)
            break;
          if (a === sh)
            return null;
        }
      }
      return e;
    }
    function Nd(e) {
      return ch(e.nextSibling);
    }
    function bR(e) {
      return ch(e.firstChild);
    }
    function _R(e) {
      return ch(e.firstChild);
    }
    function OR(e) {
      return ch(e.nextSibling);
    }
    function MR(e, t, a, i, u, s, f) {
      Ud(s, e), Hy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & Ve) !== Re;
      return BT(e, t, a, p, i, m, f);
    }
    function LR(e, t, a, i) {
      return Ud(a, e), a.mode & Ve, jT(e, t);
    }
    function NR(e, t) {
      Ud(t, e);
    }
    function zR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Bt) {
          var i = t.data;
          if (i === sh) {
            if (a === 0)
              return Nd(t);
            a--;
          } else
            (i === oh || i === Ld || i === Md) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function B0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Bt) {
          var i = t.data;
          if (i === oh || i === Ld || i === Md) {
            if (a === 0)
              return t;
            a--;
          } else
            i === sh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function UR(e) {
      $e(e);
    }
    function AR(e) {
      $e(e);
    }
    function HR(e) {
      return e !== "head" && e !== "body";
    }
    function FR(e, t, a, i) {
      var u = !0;
      ih(t.nodeValue, a, i, u);
    }
    function VR(e, t, a, i, u, s) {
      if (t[uh] !== !0) {
        var f = !0;
        ih(i.nodeValue, u, s, f);
      }
    }
    function BR(e, t) {
      t.nodeType === Qn ? xy(e, t) : t.nodeType === Bt || wy(e, t);
    }
    function jR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Qn ? xy(a, t) : t.nodeType === Bt || wy(a, t));
      }
    }
    function PR(e, t, a, i, u) {
      (u || t[uh] !== !0) && (i.nodeType === Qn ? xy(a, i) : i.nodeType === Bt || wy(a, i));
    }
    function YR(e, t, a) {
      Dy(e, t);
    }
    function $R(e, t) {
      ky(e, t);
    }
    function QR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Dy(i, t);
      }
    }
    function IR(e, t) {
      {
        var a = e.parentNode;
        a !== null && ky(a, t);
      }
    }
    function GR(e, t, a, i, u, s) {
      (s || t[uh] !== !0) && Dy(a, i);
    }
    function WR(e, t, a, i, u) {
      (u || t[uh] !== !0) && ky(a, i);
    }
    function XR(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function KR(e) {
      wd(e);
    }
    var wc = Math.random().toString(36).slice(2), Dc = "__reactFiber$" + wc, Uy = "__reactProps$" + wc, zd = "__reactContainer$" + wc, Ay = "__reactEvents$" + wc, qR = "__reactListeners$" + wc, ZR = "__reactHandles$" + wc;
    function JR(e) {
      delete e[Dc], delete e[Uy], delete e[Ay], delete e[qR], delete e[ZR];
    }
    function Ud(e, t) {
      t[Dc] = e;
    }
    function fh(e, t) {
      t[zd] = e;
    }
    function j0(e) {
      e[zd] = null;
    }
    function Ad(e) {
      return !!e[zd];
    }
    function Vo(e) {
      var t = e[Dc];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[zd] || a[Dc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = B0(e); u !== null; ) {
              var s = u[Dc];
              if (s)
                return s;
              u = B0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function xu(e) {
      var t = e[Dc] || e[zd];
      return t && (t.tag === K || t.tag === ye || t.tag === Ee || t.tag === F) ? t : null;
    }
    function kc(e) {
      if (e.tag === K || e.tag === ye)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function dh(e) {
      return e[Uy] || null;
    }
    function Hy(e, t) {
      e[Uy] = t;
    }
    function ex(e) {
      var t = e[Ay];
      return t === void 0 && (t = e[Ay] = /* @__PURE__ */ new Set()), t;
    }
    var P0 = {}, Y0 = b.ReactDebugCurrentFrame;
    function ph(e) {
      if (e) {
        var t = e._owner, a = Gu(e.type, e._source, t ? t.type : null);
        Y0.setExtraStackFrame(a);
      } else
        Y0.setExtraStackFrame(null);
    }
    function Wa(e, t, a, i, u) {
      {
        var s = Function.call.bind(Yn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              p = m;
            }
            p && !(p instanceof Error) && (ph(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), ph(null)), p instanceof Error && !(p.message in P0) && (P0[p.message] = !0, ph(u), g("Failed %s type: %s", a, p.message), ph(null));
          }
      }
    }
    var Fy = [], vh;
    vh = [];
    var wl = -1;
    function wu(e) {
      return {
        current: e
      };
    }
    function er(e, t) {
      if (wl < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== vh[wl] && g("Unexpected Fiber popped."), e.current = Fy[wl], Fy[wl] = null, vh[wl] = null, wl--;
    }
    function tr(e, t, a) {
      wl++, Fy[wl] = e.current, vh[wl] = a, e.current = t;
    }
    var Vy;
    Vy = {};
    var la = {};
    Object.freeze(la);
    var Dl = wu(la), Ui = wu(!1), By = la;
    function bc(e, t, a) {
      return a && Ai(t) ? By : Dl.current;
    }
    function $0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function _c(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return la;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ue(e) || "Unknown";
          Wa(i, s, "context", p);
        }
        return u && $0(e, t, s), s;
      }
    }
    function hh() {
      return Ui.current;
    }
    function Ai(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function mh(e) {
      er(Ui, e), er(Dl, e);
    }
    function jy(e) {
      er(Ui, e), er(Dl, e);
    }
    function Q0(e, t, a) {
      {
        if (Dl.current !== la)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        tr(Dl, t, e), tr(Ui, a, e);
      }
    }
    function I0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ue(e) || "Unknown";
            Vy[s] || (Vy[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ue(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ue(e) || "Unknown";
          Wa(u, f, "child context", v);
        }
        return Ye({}, a, f);
      }
    }
    function yh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || la;
        return By = Dl.current, tr(Dl, a, e), tr(Ui, Ui.current, e), !0;
      }
    }
    function G0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = I0(e, t, By);
          i.__reactInternalMemoizedMergedChildContext = u, er(Ui, e), er(Dl, e), tr(Dl, u, e), tr(Ui, a, e);
        } else
          er(Ui, e), tr(Ui, a, e);
      }
    }
    function tx(e) {
      {
        if (!Vf(e) || e.tag !== G)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case F:
              return t.stateNode.context;
            case G: {
              var a = t.type;
              if (Ai(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Du = 0, gh = 1, kl = null, Py = !1, Yy = !1;
    function W0(e) {
      kl === null ? kl = [e] : kl.push(e);
    }
    function nx(e) {
      Py = !0, W0(e);
    }
    function X0() {
      Py && ku();
    }
    function ku() {
      if (!Yy && kl !== null) {
        Yy = !0;
        var e = 0, t = Ar();
        try {
          var a = !0, i = kl;
          for (Wt(Tn); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          kl = null, Py = !1;
        } catch (s) {
          throw kl !== null && (kl = kl.slice(e + 1)), Os(Ls, ku), s;
        } finally {
          Wt(t), Yy = !1;
        }
      }
      return null;
    }
    var Oc = [], Mc = 0, Sh = null, Ch = 0, Ca = [], Ea = 0, Bo = null, bl = 1, _l = "";
    function rx(e) {
      return Po(), (e.flags & Af) !== Se;
    }
    function ax(e) {
      return Po(), Ch;
    }
    function ix() {
      var e = _l, t = bl, a = t & ~lx(t);
      return a.toString(32) + e;
    }
    function jo(e, t) {
      Po(), Oc[Mc++] = Ch, Oc[Mc++] = Sh, Sh = e, Ch = t;
    }
    function K0(e, t, a) {
      Po(), Ca[Ea++] = bl, Ca[Ea++] = _l, Ca[Ea++] = Bo, Bo = e;
      var i = bl, u = _l, s = Eh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Eh(t) + s;
      if (v > 30) {
        var m = s - s % 5, y = (1 << m) - 1, R = (f & y).toString(32), E = f >> m, _ = s - m, O = Eh(t) + _, L = p << _, re = L | E, Ce = R + u;
        bl = 1 << O | re, _l = Ce;
      } else {
        var ve = p << s, Xe = ve | f, Qe = u;
        bl = 1 << v | Xe, _l = Qe;
      }
    }
    function $y(e) {
      Po();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        jo(e, a), K0(e, a, i);
      }
    }
    function Eh(e) {
      return 32 - Fs(e);
    }
    function lx(e) {
      return 1 << Eh(e) - 1;
    }
    function Qy(e) {
      for (; e === Sh; )
        Sh = Oc[--Mc], Oc[Mc] = null, Ch = Oc[--Mc], Oc[Mc] = null;
      for (; e === Bo; )
        Bo = Ca[--Ea], Ca[Ea] = null, _l = Ca[--Ea], Ca[Ea] = null, bl = Ca[--Ea], Ca[Ea] = null;
    }
    function ux() {
      return Po(), Bo !== null ? {
        id: bl,
        overflow: _l
      } : null;
    }
    function ox(e, t) {
      Po(), Ca[Ea++] = bl, Ca[Ea++] = _l, Ca[Ea++] = Bo, bl = t.id, _l = t.overflow, Bo = e;
    }
    function Po() {
      Nn() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ln = null, Ta = null, Xa = !1, Yo = !1, bu = null;
    function sx() {
      Xa && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function q0() {
      Yo = !0;
    }
    function cx() {
      return Yo;
    }
    function fx(e) {
      var t = e.stateNode.containerInfo;
      return Ta = _R(t), Ln = e, Xa = !0, bu = null, Yo = !1, !0;
    }
    function dx(e, t, a) {
      return Ta = OR(t), Ln = e, Xa = !0, bu = null, Yo = !1, a !== null && ox(e, a), !0;
    }
    function Z0(e, t) {
      switch (e.tag) {
        case F: {
          BR(e.stateNode.containerInfo, t);
          break;
        }
        case K: {
          var a = (e.mode & Ve) !== Re;
          PR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ee: {
          var i = e.memoizedState;
          i.dehydrated !== null && jR(i.dehydrated, t);
          break;
        }
      }
    }
    function J0(e, t) {
      Z0(e, t);
      var a = hk();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Je) : i.push(a);
    }
    function Iy(e, t) {
      {
        if (Yo)
          return;
        switch (e.tag) {
          case F: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case K:
                var i = t.type;
                t.pendingProps, YR(a, i);
                break;
              case ye:
                var u = t.pendingProps;
                $R(a, u);
                break;
            }
            break;
          }
          case K: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case K: {
                var v = t.type, m = t.pendingProps, y = (e.mode & Ve) !== Re;
                GR(
                  s,
                  f,
                  p,
                  v,
                  m,
                  // TODO: Delete this argument when we remove the legacy root API.
                  y
                );
                break;
              }
              case ye: {
                var R = t.pendingProps, E = (e.mode & Ve) !== Re;
                WR(
                  s,
                  f,
                  p,
                  R,
                  // TODO: Delete this argument when we remove the legacy root API.
                  E
                );
                break;
              }
            }
            break;
          }
          case Ee: {
            var _ = e.memoizedState, O = _.dehydrated;
            if (O !== null)
              switch (t.tag) {
                case K:
                  var L = t.type;
                  t.pendingProps, QR(O, L);
                  break;
                case ye:
                  var re = t.pendingProps;
                  IR(O, re);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function e1(e, t) {
      t.flags = t.flags & ~Mr | ht, Iy(e, t);
    }
    function t1(e, t) {
      switch (e.tag) {
        case K: {
          var a = e.type;
          e.pendingProps;
          var i = RR(t, a);
          return i !== null ? (e.stateNode = i, Ln = e, Ta = bR(i), !0) : !1;
        }
        case ye: {
          var u = e.pendingProps, s = xR(t, u);
          return s !== null ? (e.stateNode = s, Ln = e, Ta = null, !0) : !1;
        }
        case Ee: {
          var f = wR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: ux(),
              retryLane: Zn
            };
            e.memoizedState = p;
            var v = mk(f);
            return v.return = e, e.child = v, Ln = e, Ta = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Gy(e) {
      return (e.mode & Ve) !== Re && (e.flags & Me) === Se;
    }
    function Wy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Xy(e) {
      if (Xa) {
        var t = Ta;
        if (!t) {
          Gy(e) && (Iy(Ln, e), Wy()), e1(Ln, e), Xa = !1, Ln = e;
          return;
        }
        var a = t;
        if (!t1(e, t)) {
          Gy(e) && (Iy(Ln, e), Wy()), t = Nd(a);
          var i = Ln;
          if (!t || !t1(e, t)) {
            e1(Ln, e), Xa = !1, Ln = e;
            return;
          }
          J0(i, a);
        }
      }
    }
    function px(e, t, a) {
      var i = e.stateNode, u = !Yo, s = MR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function vx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = LR(t, a, e);
      if (i) {
        var u = Ln;
        if (u !== null)
          switch (u.tag) {
            case F: {
              var s = u.stateNode.containerInfo, f = (u.mode & Ve) !== Re;
              FR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case K: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, y = (u.mode & Ve) !== Re;
              VR(
                p,
                v,
                m,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                y
              );
              break;
            }
          }
      }
      return i;
    }
    function hx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      NR(a, e);
    }
    function mx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return zR(a);
    }
    function n1(e) {
      for (var t = e.return; t !== null && t.tag !== K && t.tag !== F && t.tag !== Ee; )
        t = t.return;
      Ln = t;
    }
    function Th(e) {
      if (e !== Ln)
        return !1;
      if (!Xa)
        return n1(e), Xa = !0, !1;
      if (e.tag !== F && (e.tag !== K || HR(e.type) && !Oy(e.type, e.memoizedProps))) {
        var t = Ta;
        if (t)
          if (Gy(e))
            r1(e), Wy();
          else
            for (; t; )
              J0(e, t), t = Nd(t);
      }
      return n1(e), e.tag === Ee ? Ta = mx(e) : Ta = Ln ? Nd(e.stateNode) : null, !0;
    }
    function yx() {
      return Xa && Ta !== null;
    }
    function r1(e) {
      for (var t = Ta; t; )
        Z0(e, t), t = Nd(t);
    }
    function Lc() {
      Ln = null, Ta = null, Xa = !1, Yo = !1;
    }
    function a1() {
      bu !== null && (ZC(bu), bu = null);
    }
    function Nn() {
      return Xa;
    }
    function Ky(e) {
      bu === null ? bu = [e] : bu.push(e);
    }
    var gx = b.ReactCurrentBatchConfig, Sx = null;
    function Cx() {
      return gx.transition;
    }
    var Ka = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Ex = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Rt && (t = a), a = a.return;
        return t;
      }, $o = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Hd = [], Fd = [], Vd = [], Bd = [], jd = [], Pd = [], Qo = /* @__PURE__ */ new Set();
      Ka.recordUnsafeLifecycleWarnings = function(e, t) {
        Qo.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Hd.push(e), e.mode & Rt && typeof t.UNSAFE_componentWillMount == "function" && Fd.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Vd.push(e), e.mode & Rt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Bd.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && jd.push(e), e.mode & Rt && typeof t.UNSAFE_componentWillUpdate == "function" && Pd.push(e));
      }, Ka.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Hd.length > 0 && (Hd.forEach(function(E) {
          e.add(Ue(E) || "Component"), Qo.add(E.type);
        }), Hd = []);
        var t = /* @__PURE__ */ new Set();
        Fd.length > 0 && (Fd.forEach(function(E) {
          t.add(Ue(E) || "Component"), Qo.add(E.type);
        }), Fd = []);
        var a = /* @__PURE__ */ new Set();
        Vd.length > 0 && (Vd.forEach(function(E) {
          a.add(Ue(E) || "Component"), Qo.add(E.type);
        }), Vd = []);
        var i = /* @__PURE__ */ new Set();
        Bd.length > 0 && (Bd.forEach(function(E) {
          i.add(Ue(E) || "Component"), Qo.add(E.type);
        }), Bd = []);
        var u = /* @__PURE__ */ new Set();
        jd.length > 0 && (jd.forEach(function(E) {
          u.add(Ue(E) || "Component"), Qo.add(E.type);
        }), jd = []);
        var s = /* @__PURE__ */ new Set();
        if (Pd.length > 0 && (Pd.forEach(function(E) {
          s.add(Ue(E) || "Component"), Qo.add(E.type);
        }), Pd = []), t.size > 0) {
          var f = $o(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = $o(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = $o(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var m = $o(e);
          he(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var y = $o(a);
          he(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (u.size > 0) {
          var R = $o(u);
          he(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
      };
      var Rh = /* @__PURE__ */ new Map(), i1 = /* @__PURE__ */ new Set();
      Ka.recordLegacyContextWarning = function(e, t) {
        var a = Ex(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!i1.has(e.type)) {
          var i = Rh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Rh.set(a, i)), i.push(e));
        }
      }, Ka.flushLegacyContextWarning = function() {
        Rh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ue(s) || "Component"), i1.add(s.type);
            });
            var u = $o(i);
            try {
              ut(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Qt();
            }
          }
        });
      }, Ka.discardPendingWarnings = function() {
        Hd = [], Fd = [], Vd = [], Bd = [], jd = [], Pd = [], Rh = /* @__PURE__ */ new Map();
      };
    }
    function qa(e, t) {
      if (e && e.defaultProps) {
        var a = Ye({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var qy = wu(null), Zy;
    Zy = {};
    var xh = null, Nc = null, Jy = null, wh = !1;
    function Dh() {
      xh = null, Nc = null, Jy = null, wh = !1;
    }
    function l1() {
      wh = !0;
    }
    function u1() {
      wh = !1;
    }
    function o1(e, t, a) {
      tr(qy, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Zy && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Zy;
    }
    function eg(e, t) {
      var a = qy.current;
      er(qy, t), e._currentValue = a;
    }
    function tg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (vl(i.childLanes, t) ? u !== null && !vl(u.childLanes, t) && (u.childLanes = He(u.childLanes, t)) : (i.childLanes = He(i.childLanes, t), u !== null && (u.childLanes = He(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Tx(e, t, a) {
      Rx(e, t, a);
    }
    function Rx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === G) {
                var p = Gt(a), v = Ol(pt, p);
                v.tag = bh;
                var m = i.updateQueue;
                if (m !== null) {
                  var y = m.shared, R = y.pending;
                  R === null ? v.next = v : (v.next = R.next, R.next = v), y.pending = v;
                }
              }
              i.lanes = He(i.lanes, a);
              var E = i.alternate;
              E !== null && (E.lanes = He(E.lanes, a)), tg(i.return, a, e), s.lanes = He(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === V)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Ht) {
          var _ = i.return;
          if (_ === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          _.lanes = He(_.lanes, a);
          var O = _.alternate;
          O !== null && (O.lanes = He(O.lanes, a)), tg(_, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var L = u.sibling;
            if (L !== null) {
              L.return = u.return, u = L;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function zc(e, t) {
      xh = e, Nc = null, Jy = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Jn(a.lanes, t) && np(), a.firstContext = null);
      }
    }
    function ln(e) {
      wh && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Jy !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Nc === null) {
          if (xh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Nc = a, xh.dependencies = {
            lanes: U,
            firstContext: a
          };
        } else
          Nc = Nc.next = a;
      }
      return t;
    }
    var Io = null;
    function ng(e) {
      Io === null ? Io = [e] : Io.push(e);
    }
    function xx() {
      if (Io !== null) {
        for (var e = 0; e < Io.length; e++) {
          var t = Io[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Io = null;
      }
    }
    function s1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ng(t)) : (a.next = u.next, u.next = a), t.interleaved = a, kh(e, i);
    }
    function wx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, ng(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Dx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ng(t)) : (a.next = u.next, u.next = a), t.interleaved = a, kh(e, i);
    }
    function jr(e, t) {
      return kh(e, t);
    }
    var kx = kh;
    function kh(e, t) {
      e.lanes = He(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = He(a.lanes, t)), a === null && (e.flags & (ht | Mr)) !== Se && cE(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = He(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = He(a.childLanes, t) : (u.flags & (ht | Mr)) !== Se && cE(e), i = u, u = u.return;
      if (i.tag === F) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var c1 = 0, f1 = 1, bh = 2, rg = 3, _h = !1, ag, Oh;
    ag = !1, Oh = null;
    function ig(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: U
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function d1(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Ol(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: c1,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function _u(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Oh === u && !ag && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), ag = !0), kD()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, kx(e, a);
      } else
        return Dx(e, u, t, a);
    }
    function Mh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Zf(a)) {
          var s = u.lanes;
          s = ed(s, e.pendingLanes);
          var f = He(s, a);
          u.lanes = f, su(e, f);
        }
      }
    }
    function lg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var m = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = m : (f.next = m, f = m), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var y = a.lastBaseUpdate;
      y === null ? a.firstBaseUpdate = t : y.next = t, a.lastBaseUpdate = t;
    }
    function bx(e, t, a, i, u, s) {
      switch (a.tag) {
        case f1: {
          var f = a.payload;
          if (typeof f == "function") {
            l1();
            var p = f.call(s, i, u);
            {
              if (e.mode & Rt) {
                It(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  It(!1);
                }
              }
              u1();
            }
            return p;
          }
          return f;
        }
        case rg:
          e.flags = e.flags & ~en | Me;
        case c1: {
          var v = a.payload, m;
          if (typeof v == "function") {
            l1(), m = v.call(s, i, u);
            {
              if (e.mode & Rt) {
                It(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  It(!1);
                }
              }
              u1();
            }
          } else
            m = v;
          return m == null ? i : Ye({}, i, m);
        }
        case bh:
          return _h = !0, i;
      }
      return i;
    }
    function Lh(e, t, a, i) {
      var u = e.updateQueue;
      _h = !1, Oh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, m = v.next;
        v.next = null, f === null ? s = m : f.next = m, f = v;
        var y = e.alternate;
        if (y !== null) {
          var R = y.updateQueue, E = R.lastBaseUpdate;
          E !== f && (E === null ? R.firstBaseUpdate = m : E.next = m, R.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var _ = u.baseState, O = U, L = null, re = null, Ce = null, ve = s;
        do {
          var Xe = ve.lane, Qe = ve.eventTime;
          if (vl(i, Xe)) {
            if (Ce !== null) {
              var N = {
                eventTime: Qe,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ge,
                tag: ve.tag,
                payload: ve.payload,
                callback: ve.callback,
                next: null
              };
              Ce = Ce.next = N;
            }
            _ = bx(e, u, ve, _, t, a);
            var D = ve.callback;
            if (D !== null && // If the update was already committed, we should not queue its
            // callback again.
            ve.lane !== Ge) {
              e.flags |= va;
              var Y = u.effects;
              Y === null ? u.effects = [ve] : Y.push(ve);
            }
          } else {
            var w = {
              eventTime: Qe,
              lane: Xe,
              tag: ve.tag,
              payload: ve.payload,
              callback: ve.callback,
              next: null
            };
            Ce === null ? (re = Ce = w, L = _) : Ce = Ce.next = w, O = He(O, Xe);
          }
          if (ve = ve.next, ve === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ae = p, J = ae.next;
            ae.next = null, ve = J, u.lastBaseUpdate = ae, u.shared.pending = null;
          }
        } while (!0);
        Ce === null && (L = _), u.baseState = L, u.firstBaseUpdate = re, u.lastBaseUpdate = Ce;
        var _e = u.shared.interleaved;
        if (_e !== null) {
          var ze = _e;
          do
            O = He(O, ze.lane), ze = ze.next;
          while (ze !== _e);
        } else
          s === null && (u.shared.lanes = U);
        vp(O), e.lanes = O, e.memoizedState = _;
      }
      Oh = null;
    }
    function _x(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function p1() {
      _h = !1;
    }
    function Nh() {
      return _h;
    }
    function v1(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, _x(f, a));
        }
    }
    var ug = {}, h1 = new z.Component().refs, og, sg, cg, fg, dg, m1, zh, pg, vg, hg;
    {
      og = /* @__PURE__ */ new Set(), sg = /* @__PURE__ */ new Set(), cg = /* @__PURE__ */ new Set(), fg = /* @__PURE__ */ new Set(), pg = /* @__PURE__ */ new Set(), dg = /* @__PURE__ */ new Set(), vg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set();
      var y1 = /* @__PURE__ */ new Set();
      zh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          y1.has(a) || (y1.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, m1 = function(e, t) {
        if (t === void 0) {
          var a = ft(e) || "Component";
          dg.has(a) || (dg.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(ug, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(ug);
    }
    function mg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Rt) {
          It(!0);
          try {
            s = a(i, u);
          } finally {
            It(!1);
          }
        }
        m1(t, s);
      }
      var f = s == null ? u : Ye({}, u, s);
      if (e.memoizedState = f, e.lanes === U) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var yg = {
      isMounted: fr,
      enqueueSetState: function(e, t, a) {
        var i = _r(e), u = yr(), s = Hu(i), f = Ol(u, s);
        f.payload = t, a != null && (zh(a, "setState"), f.callback = a);
        var p = _u(i, f, s);
        p !== null && (yn(p, i, s, u), Mh(p, i, s)), Di(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = _r(e), u = yr(), s = Hu(i), f = Ol(u, s);
        f.tag = f1, f.payload = t, a != null && (zh(a, "replaceState"), f.callback = a);
        var p = _u(i, f, s);
        p !== null && (yn(p, i, s, u), Mh(p, i, s)), Di(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = _r(e), i = yr(), u = Hu(a), s = Ol(i, u);
        s.tag = bh, t != null && (zh(t, "forceUpdate"), s.callback = t);
        var f = _u(a, s, u);
        f !== null && (yn(f, a, u, i), Mh(f, a, u)), Wf(a, u);
      }
    };
    function g1(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Rt) {
            It(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              It(!1);
            }
          }
          v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", ft(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ge(a, i) || !ge(u, s) : !0;
    }
    function Ox(e, t, a) {
      var i = e.stateNode;
      {
        var u = ft(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !vg.has(t) && (vg.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", ft(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !cg.has(t) && (cg.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", ft(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Zt(p)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function S1(e, t) {
      t.updater = yg, e.stateNode = t, Jl(t, e), t._reactInternalInstance = ug;
    }
    function C1(e, t, a) {
      var i = !1, u = la, s = la, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === tf && f._context === void 0
        );
        if (!p && !hg.has(t)) {
          hg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === ef ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", ft(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = ln(f);
      else {
        u = bc(e, t, !0);
        var m = t.contextTypes;
        i = m != null, s = i ? _c(e, u) : la;
      }
      var y = new t(a, s);
      if (e.mode & Rt) {
        It(!0);
        try {
          y = new t(a, s);
        } finally {
          It(!1);
        }
      }
      var R = e.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null;
      S1(e, y);
      {
        if (typeof t.getDerivedStateFromProps == "function" && R === null) {
          var E = ft(t) || "Component";
          sg.has(E) || (sg.add(E), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", E, y.state === null ? "null" : "undefined", E));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var _ = null, O = null, L = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? _ = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (_ = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? O = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (O = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? L = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (L = "UNSAFE_componentWillUpdate"), _ !== null || O !== null || L !== null) {
            var re = ft(t) || "Component", Ce = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            fg.has(re) || (fg.add(re), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, re, Ce, _ !== null ? `
  ` + _ : "", O !== null ? `
  ` + O : "", L !== null ? `
  ` + L : ""));
          }
        }
      }
      return i && $0(e, u, s), y;
    }
    function Mx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ue(e) || "Component"), yg.enqueueReplaceState(t, t.state, null));
    }
    function E1(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ue(e) || "Component";
          og.has(s) || (og.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        yg.enqueueReplaceState(t, t.state, null);
      }
    }
    function gg(e, t, a, i) {
      Ox(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = h1, ig(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = ln(s);
      else {
        var f = bc(e, t, !0);
        u.context = _c(e, f);
      }
      {
        if (u.state === a) {
          var p = ft(t) || "Component";
          pg.has(p) || (pg.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Rt && Ka.recordLegacyContextWarning(e, u), Ka.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (mg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Mx(e, u), Lh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = Ae;
        m |= Gn, (e.mode & zr) !== Re && (m |= Wn), e.flags |= m;
      }
    }
    function Lx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = la;
      if (typeof p == "object" && p !== null)
        v = ln(p);
      else {
        var m = bc(e, t, !0);
        v = _c(e, m);
      }
      var y = t.getDerivedStateFromProps, R = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !R && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && E1(e, u, a, v), p1();
      var E = e.memoizedState, _ = u.state = E;
      if (Lh(e, a, u, i), _ = e.memoizedState, s === a && E === _ && !hh() && !Nh()) {
        if (typeof u.componentDidMount == "function") {
          var O = Ae;
          O |= Gn, (e.mode & zr) !== Re && (O |= Wn), e.flags |= O;
        }
        return !1;
      }
      typeof y == "function" && (mg(e, t, y, a), _ = e.memoizedState);
      var L = Nh() || g1(e, t, s, a, E, _, v);
      if (L) {
        if (!R && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var re = Ae;
          re |= Gn, (e.mode & zr) !== Re && (re |= Wn), e.flags |= re;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ce = Ae;
          Ce |= Gn, (e.mode & zr) !== Re && (Ce |= Wn), e.flags |= Ce;
        }
        e.memoizedProps = a, e.memoizedState = _;
      }
      return u.props = a, u.state = _, u.context = v, L;
    }
    function Nx(e, t, a, i, u) {
      var s = t.stateNode;
      d1(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : qa(t.type, f);
      s.props = p;
      var v = t.pendingProps, m = s.context, y = a.contextType, R = la;
      if (typeof y == "object" && y !== null)
        R = ln(y);
      else {
        var E = bc(t, a, !0);
        R = _c(t, E);
      }
      var _ = a.getDerivedStateFromProps, O = typeof _ == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !O && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== R) && E1(t, s, i, R), p1();
      var L = t.memoizedState, re = s.state = L;
      if (Lh(t, i, s, u), re = t.memoizedState, f === v && L === re && !hh() && !Nh() && !ke)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= Ae), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= Or), !1;
      typeof _ == "function" && (mg(t, a, _, i), re = t.memoizedState);
      var Ce = Nh() || g1(t, a, p, i, L, re, R) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ke;
      return Ce ? (!O && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, re, R), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, re, R)), typeof s.componentDidUpdate == "function" && (t.flags |= Ae), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Or)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= Ae), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= Or), t.memoizedProps = i, t.memoizedState = re), s.props = i, s.state = re, s.context = R, Ce;
    }
    var Sg, Cg, Eg, Tg, Rg, T1 = function(e, t) {
    };
    Sg = !1, Cg = !1, Eg = {}, Tg = {}, Rg = {}, T1 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ue(t) || "Component";
        Tg[a] || (Tg[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Yd(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Rt || lr) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Ue(e) || "Component";
          Eg[u] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), Eg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== G)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Qi(i, "ref");
          var m = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === m)
            return t.ref;
          var y = function(R) {
            var E = v.refs;
            E === h1 && (E = v.refs = {}), R === null ? delete E[m] : E[m] = R;
          };
          return y._stringRef = m, y;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Uh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Ah(e) {
      {
        var t = Ue(e) || "Component";
        if (Rg[t])
          return;
        Rg[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function R1(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function x1(e) {
      function t(w, N) {
        if (e) {
          var D = w.deletions;
          D === null ? (w.deletions = [N], w.flags |= Je) : D.push(N);
        }
      }
      function a(w, N) {
        if (!e)
          return null;
        for (var D = N; D !== null; )
          t(w, D), D = D.sibling;
        return null;
      }
      function i(w, N) {
        for (var D = /* @__PURE__ */ new Map(), Y = N; Y !== null; )
          Y.key !== null ? D.set(Y.key, Y) : D.set(Y.index, Y), Y = Y.sibling;
        return D;
      }
      function u(w, N) {
        var D = es(w, N);
        return D.index = 0, D.sibling = null, D;
      }
      function s(w, N, D) {
        if (w.index = D, !e)
          return w.flags |= Af, N;
        var Y = w.alternate;
        if (Y !== null) {
          var ae = Y.index;
          return ae < N ? (w.flags |= ht, N) : ae;
        } else
          return w.flags |= ht, N;
      }
      function f(w) {
        return e && w.alternate === null && (w.flags |= ht), w;
      }
      function p(w, N, D, Y) {
        if (N === null || N.tag !== ye) {
          var ae = KS(D, w.mode, Y);
          return ae.return = w, ae;
        } else {
          var J = u(N, D);
          return J.return = w, J;
        }
      }
      function v(w, N, D, Y) {
        var ae = D.type;
        if (ae === Oa)
          return y(w, N, D.props.children, Y, D.key);
        if (N !== null && (N.elementType === ae || // Keep this check inline so it only runs on the false path:
        vE(N, D) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ae == "object" && ae !== null && ae.$$typeof === On && R1(ae) === N.type)) {
          var J = u(N, D.props);
          return J.ref = Yd(w, N, D), J.return = w, J._debugSource = D._source, J._debugOwner = D._owner, J;
        }
        var _e = XS(D, w.mode, Y);
        return _e.ref = Yd(w, N, D), _e.return = w, _e;
      }
      function m(w, N, D, Y) {
        if (N === null || N.tag !== A || N.stateNode.containerInfo !== D.containerInfo || N.stateNode.implementation !== D.implementation) {
          var ae = qS(D, w.mode, Y);
          return ae.return = w, ae;
        } else {
          var J = u(N, D.children || []);
          return J.return = w, J;
        }
      }
      function y(w, N, D, Y, ae) {
        if (N === null || N.tag !== Oe) {
          var J = Vu(D, w.mode, Y, ae);
          return J.return = w, J;
        } else {
          var _e = u(N, D);
          return _e.return = w, _e;
        }
      }
      function R(w, N, D) {
        if (typeof N == "string" && N !== "" || typeof N == "number") {
          var Y = KS("" + N, w.mode, D);
          return Y.return = w, Y;
        }
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case Fl: {
              var ae = XS(N, w.mode, D);
              return ae.ref = Yd(w, null, N), ae.return = w, ae;
            }
            case qr: {
              var J = qS(N, w.mode, D);
              return J.return = w, J;
            }
            case On: {
              var _e = N._payload, ze = N._init;
              return R(w, ze(_e), D);
            }
          }
          if (Zt(N) || Ma(N)) {
            var st = Vu(N, w.mode, D, null);
            return st.return = w, st;
          }
          Uh(w, N);
        }
        return typeof N == "function" && Ah(w), null;
      }
      function E(w, N, D, Y) {
        var ae = N !== null ? N.key : null;
        if (typeof D == "string" && D !== "" || typeof D == "number")
          return ae !== null ? null : p(w, N, "" + D, Y);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case Fl:
              return D.key === ae ? v(w, N, D, Y) : null;
            case qr:
              return D.key === ae ? m(w, N, D, Y) : null;
            case On: {
              var J = D._payload, _e = D._init;
              return E(w, N, _e(J), Y);
            }
          }
          if (Zt(D) || Ma(D))
            return ae !== null ? null : y(w, N, D, Y, null);
          Uh(w, D);
        }
        return typeof D == "function" && Ah(w), null;
      }
      function _(w, N, D, Y, ae) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number") {
          var J = w.get(D) || null;
          return p(N, J, "" + Y, ae);
        }
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case Fl: {
              var _e = w.get(Y.key === null ? D : Y.key) || null;
              return v(N, _e, Y, ae);
            }
            case qr: {
              var ze = w.get(Y.key === null ? D : Y.key) || null;
              return m(N, ze, Y, ae);
            }
            case On:
              var st = Y._payload, qe = Y._init;
              return _(w, N, D, qe(st), ae);
          }
          if (Zt(Y) || Ma(Y)) {
            var qt = w.get(D) || null;
            return y(N, qt, Y, ae, null);
          }
          Uh(N, Y);
        }
        return typeof Y == "function" && Ah(N), null;
      }
      function O(w, N, D) {
        {
          if (typeof w != "object" || w === null)
            return N;
          switch (w.$$typeof) {
            case Fl:
            case qr:
              T1(w, D);
              var Y = w.key;
              if (typeof Y != "string")
                break;
              if (N === null) {
                N = /* @__PURE__ */ new Set(), N.add(Y);
                break;
              }
              if (!N.has(Y)) {
                N.add(Y);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Y);
              break;
            case On:
              var ae = w._payload, J = w._init;
              O(J(ae), N, D);
              break;
          }
        }
        return N;
      }
      function L(w, N, D, Y) {
        for (var ae = null, J = 0; J < D.length; J++) {
          var _e = D[J];
          ae = O(_e, ae, w);
        }
        for (var ze = null, st = null, qe = N, qt = 0, Ze = 0, Yt = null; qe !== null && Ze < D.length; Ze++) {
          qe.index > Ze ? (Yt = qe, qe = null) : Yt = qe.sibling;
          var rr = E(w, qe, D[Ze], Y);
          if (rr === null) {
            qe === null && (qe = Yt);
            break;
          }
          e && qe && rr.alternate === null && t(w, qe), qt = s(rr, qt, Ze), st === null ? ze = rr : st.sibling = rr, st = rr, qe = Yt;
        }
        if (Ze === D.length) {
          if (a(w, qe), Nn()) {
            var Bn = Ze;
            jo(w, Bn);
          }
          return ze;
        }
        if (qe === null) {
          for (; Ze < D.length; Ze++) {
            var oa = R(w, D[Ze], Y);
            oa !== null && (qt = s(oa, qt, Ze), st === null ? ze = oa : st.sibling = oa, st = oa);
          }
          if (Nn()) {
            var gr = Ze;
            jo(w, gr);
          }
          return ze;
        }
        for (var Sr = i(w, qe); Ze < D.length; Ze++) {
          var ar = _(Sr, w, Ze, D[Ze], Y);
          ar !== null && (e && ar.alternate !== null && Sr.delete(ar.key === null ? Ze : ar.key), qt = s(ar, qt, Ze), st === null ? ze = ar : st.sibling = ar, st = ar);
        }
        if (e && Sr.forEach(function(qc) {
          return t(w, qc);
        }), Nn()) {
          var Al = Ze;
          jo(w, Al);
        }
        return ze;
      }
      function re(w, N, D, Y) {
        var ae = Ma(D);
        if (typeof ae != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          D[Symbol.toStringTag] === "Generator" && (Cg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Cg = !0), D.entries === ae && (Sg || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Sg = !0);
          var J = ae.call(D);
          if (J)
            for (var _e = null, ze = J.next(); !ze.done; ze = J.next()) {
              var st = ze.value;
              _e = O(st, _e, w);
            }
        }
        var qe = ae.call(D);
        if (qe == null)
          throw new Error("An iterable object provided no iterator.");
        for (var qt = null, Ze = null, Yt = N, rr = 0, Bn = 0, oa = null, gr = qe.next(); Yt !== null && !gr.done; Bn++, gr = qe.next()) {
          Yt.index > Bn ? (oa = Yt, Yt = null) : oa = Yt.sibling;
          var Sr = E(w, Yt, gr.value, Y);
          if (Sr === null) {
            Yt === null && (Yt = oa);
            break;
          }
          e && Yt && Sr.alternate === null && t(w, Yt), rr = s(Sr, rr, Bn), Ze === null ? qt = Sr : Ze.sibling = Sr, Ze = Sr, Yt = oa;
        }
        if (gr.done) {
          if (a(w, Yt), Nn()) {
            var ar = Bn;
            jo(w, ar);
          }
          return qt;
        }
        if (Yt === null) {
          for (; !gr.done; Bn++, gr = qe.next()) {
            var Al = R(w, gr.value, Y);
            Al !== null && (rr = s(Al, rr, Bn), Ze === null ? qt = Al : Ze.sibling = Al, Ze = Al);
          }
          if (Nn()) {
            var qc = Bn;
            jo(w, qc);
          }
          return qt;
        }
        for (var Sp = i(w, Yt); !gr.done; Bn++, gr = qe.next()) {
          var $i = _(Sp, w, Bn, gr.value, Y);
          $i !== null && (e && $i.alternate !== null && Sp.delete($i.key === null ? Bn : $i.key), rr = s($i, rr, Bn), Ze === null ? qt = $i : Ze.sibling = $i, Ze = $i);
        }
        if (e && Sp.forEach(function(Gk) {
          return t(w, Gk);
        }), Nn()) {
          var Ik = Bn;
          jo(w, Ik);
        }
        return qt;
      }
      function Ce(w, N, D, Y) {
        if (N !== null && N.tag === ye) {
          a(w, N.sibling);
          var ae = u(N, D);
          return ae.return = w, ae;
        }
        a(w, N);
        var J = KS(D, w.mode, Y);
        return J.return = w, J;
      }
      function ve(w, N, D, Y) {
        for (var ae = D.key, J = N; J !== null; ) {
          if (J.key === ae) {
            var _e = D.type;
            if (_e === Oa) {
              if (J.tag === Oe) {
                a(w, J.sibling);
                var ze = u(J, D.props.children);
                return ze.return = w, ze._debugSource = D._source, ze._debugOwner = D._owner, ze;
              }
            } else if (J.elementType === _e || // Keep this check inline so it only runs on the false path:
            vE(J, D) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof _e == "object" && _e !== null && _e.$$typeof === On && R1(_e) === J.type) {
              a(w, J.sibling);
              var st = u(J, D.props);
              return st.ref = Yd(w, J, D), st.return = w, st._debugSource = D._source, st._debugOwner = D._owner, st;
            }
            a(w, J);
            break;
          } else
            t(w, J);
          J = J.sibling;
        }
        if (D.type === Oa) {
          var qe = Vu(D.props.children, w.mode, Y, D.key);
          return qe.return = w, qe;
        } else {
          var qt = XS(D, w.mode, Y);
          return qt.ref = Yd(w, N, D), qt.return = w, qt;
        }
      }
      function Xe(w, N, D, Y) {
        for (var ae = D.key, J = N; J !== null; ) {
          if (J.key === ae)
            if (J.tag === A && J.stateNode.containerInfo === D.containerInfo && J.stateNode.implementation === D.implementation) {
              a(w, J.sibling);
              var _e = u(J, D.children || []);
              return _e.return = w, _e;
            } else {
              a(w, J);
              break;
            }
          else
            t(w, J);
          J = J.sibling;
        }
        var ze = qS(D, w.mode, Y);
        return ze.return = w, ze;
      }
      function Qe(w, N, D, Y) {
        var ae = typeof D == "object" && D !== null && D.type === Oa && D.key === null;
        if (ae && (D = D.props.children), typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case Fl:
              return f(ve(w, N, D, Y));
            case qr:
              return f(Xe(w, N, D, Y));
            case On:
              var J = D._payload, _e = D._init;
              return Qe(w, N, _e(J), Y);
          }
          if (Zt(D))
            return L(w, N, D, Y);
          if (Ma(D))
            return re(w, N, D, Y);
          Uh(w, D);
        }
        return typeof D == "string" && D !== "" || typeof D == "number" ? f(Ce(w, N, "" + D, Y)) : (typeof D == "function" && Ah(w), a(w, N));
      }
      return Qe;
    }
    var Uc = x1(!0), w1 = x1(!1);
    function zx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = es(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = es(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Ux(e, t) {
      for (var a = e.child; a !== null; )
        ck(a, t), a = a.sibling;
    }
    var $d = {}, Ou = wu($d), Qd = wu($d), Hh = wu($d);
    function Fh(e) {
      if (e === $d)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function D1() {
      var e = Fh(Hh.current);
      return e;
    }
    function xg(e, t) {
      tr(Hh, t, e), tr(Qd, e, e), tr(Ou, $d, e);
      var a = XT(t);
      er(Ou, e), tr(Ou, a, e);
    }
    function Ac(e) {
      er(Ou, e), er(Qd, e), er(Hh, e);
    }
    function wg() {
      var e = Fh(Ou.current);
      return e;
    }
    function k1(e) {
      Fh(Hh.current);
      var t = Fh(Ou.current), a = KT(t, e.type);
      t !== a && (tr(Qd, e, e), tr(Ou, a, e));
    }
    function Dg(e) {
      Qd.current === e && (er(Ou, e), er(Qd, e));
    }
    var Ax = 0, b1 = 1, _1 = 1, Id = 2, Za = wu(Ax);
    function kg(e, t) {
      return (e & t) !== 0;
    }
    function Hc(e) {
      return e & b1;
    }
    function bg(e, t) {
      return e & b1 | t;
    }
    function Hx(e, t) {
      return e | t;
    }
    function Mu(e, t) {
      tr(Za, t, e);
    }
    function Fc(e) {
      er(Za, e);
    }
    function Fx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Vh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ee) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || V0(i) || zy(i))
              return t;
          }
        } else if (t.tag === vt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Me) !== Se;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Pr = (
      /*   */
      0
    ), cn = (
      /* */
      1
    ), Hi = (
      /*  */
      2
    ), fn = (
      /*    */
      4
    ), zn = (
      /*   */
      8
    ), _g = [];
    function Og() {
      for (var e = 0; e < _g.length; e++) {
        var t = _g[e];
        t._workInProgressVersionPrimary = null;
      }
      _g.length = 0;
    }
    function Vx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var te = b.ReactCurrentDispatcher, Gd = b.ReactCurrentBatchConfig, Mg, Vc;
    Mg = /* @__PURE__ */ new Set();
    var Go = U, ot = null, dn = null, pn = null, Bh = !1, Wd = !1, Xd = 0, Bx = 0, jx = 25, H = null, Ra = null, Lu = -1, Lg = !1;
    function tt() {
      {
        var e = H;
        Ra === null ? Ra = [e] : Ra.push(e);
      }
    }
    function X() {
      {
        var e = H;
        Ra !== null && (Lu++, Ra[Lu] !== e && Px(e));
      }
    }
    function Bc(e) {
      e != null && !Zt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", H, typeof e);
    }
    function Px(e) {
      {
        var t = Ue(ot);
        if (!Mg.has(t) && (Mg.add(t), Ra !== null)) {
          for (var a = "", i = 30, u = 0; u <= Lu; u++) {
            for (var s = Ra[u], f = u === Lu ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function nr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Ng(e, t) {
      if (Lg)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", H), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, H, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!se(e[a], t[a]))
          return !1;
      return !0;
    }
    function jc(e, t, a, i, u, s) {
      Go = s, ot = t, Ra = e !== null ? e._debugHookTypes : null, Lu = -1, Lg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = U, e !== null && e.memoizedState !== null ? te.current = q1 : Ra !== null ? te.current = K1 : te.current = X1;
      var f = a(i, u);
      if (Wd) {
        var p = 0;
        do {
          if (Wd = !1, Xd = 0, p >= jx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Lg = !1, dn = null, pn = null, t.updateQueue = null, Lu = -1, te.current = Z1, f = a(i, u);
        } while (Wd);
      }
      te.current = Jh, t._debugHookTypes = Ra;
      var v = dn !== null && dn.next !== null;
      if (Go = U, ot = null, dn = null, pn = null, H = null, Ra = null, Lu = -1, e !== null && (e.flags & un) !== (t.flags & un) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ve) !== Re && g("Internal React error: Expected static flag was missing. Please notify the React team."), Bh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Pc() {
      var e = Xd !== 0;
      return Xd = 0, e;
    }
    function O1(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & zr) !== Re ? t.flags &= ~(al | Wn | Ct | Ae) : t.flags &= ~(Ct | Ae), e.lanes = ou(e.lanes, a);
    }
    function M1() {
      if (te.current = Jh, Bh) {
        for (var e = ot.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Bh = !1;
      }
      Go = U, ot = null, dn = null, pn = null, Ra = null, Lu = -1, H = null, $1 = !1, Wd = !1, Xd = 0;
    }
    function Fi() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pn === null ? ot.memoizedState = pn = e : pn = pn.next = e, pn;
    }
    function xa() {
      var e;
      if (dn === null) {
        var t = ot.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dn.next;
      var a;
      if (pn === null ? a = ot.memoizedState : a = pn.next, a !== null)
        pn = a, a = pn.next, dn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        dn = e;
        var i = {
          memoizedState: dn.memoizedState,
          baseState: dn.baseState,
          baseQueue: dn.baseQueue,
          queue: dn.queue,
          next: null
        };
        pn === null ? ot.memoizedState = pn = i : pn = pn.next = i;
      }
      return pn;
    }
    function L1() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function zg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ug(e, t, a) {
      var i = Fi(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: U,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Ix.bind(null, ot, s);
      return [i.memoizedState, f];
    }
    function Ag(e, t, a) {
      var i = xa(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = dn, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, m = p.next;
          f.next = m, p.next = v;
        }
        s.baseQueue !== f && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var y = f.next, R = s.baseState, E = null, _ = null, O = null, L = y;
        do {
          var re = L.lane;
          if (vl(Go, re)) {
            if (O !== null) {
              var ve = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ge,
                action: L.action,
                hasEagerState: L.hasEagerState,
                eagerState: L.eagerState,
                next: null
              };
              O = O.next = ve;
            }
            if (L.hasEagerState)
              R = L.eagerState;
            else {
              var Xe = L.action;
              R = e(R, Xe);
            }
          } else {
            var Ce = {
              lane: re,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null
            };
            O === null ? (_ = O = Ce, E = R) : O = O.next = Ce, ot.lanes = He(ot.lanes, re), vp(re);
          }
          L = L.next;
        } while (L !== null && L !== y);
        O === null ? E = R : O.next = _, se(R, i.memoizedState) || np(), i.memoizedState = R, i.baseState = E, i.baseQueue = O, u.lastRenderedState = R;
      }
      var Qe = u.interleaved;
      if (Qe !== null) {
        var w = Qe;
        do {
          var N = w.lane;
          ot.lanes = He(ot.lanes, N), vp(N), w = w.next;
        } while (w !== Qe);
      } else
        f === null && (u.lanes = U);
      var D = u.dispatch;
      return [i.memoizedState, D];
    }
    function Hg(e, t, a) {
      var i = xa(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, m = v;
        do {
          var y = m.action;
          p = e(p, y), m = m.next;
        } while (m !== v);
        se(p, i.memoizedState) || np(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Sb(e, t, a) {
    }
    function Cb(e, t, a) {
    }
    function Fg(e, t, a) {
      var i = ot, u = Fi(), s, f = Nn();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Vc || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Vc = !0);
      } else {
        if (s = t(), !Vc) {
          var p = t();
          se(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Vc = !0);
        }
        var v = ym();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        xo(v, Go) || N1(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, Qh(U1.bind(null, i, m, e), [e]), i.flags |= Ct, Kd(cn | zn, z1.bind(null, i, m, s, t), void 0, null), s;
    }
    function jh(e, t, a) {
      var i = ot, u = xa(), s = t();
      if (!Vc) {
        var f = t();
        se(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Vc = !0);
      }
      var p = u.memoizedState, v = !se(p, s);
      v && (u.memoizedState = s, np());
      var m = u.queue;
      if (Zd(U1.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pn !== null && pn.memoizedState.tag & cn) {
        i.flags |= Ct, Kd(cn | zn, z1.bind(null, i, m, s, t), void 0, null);
        var y = ym();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        xo(y, Go) || N1(i, t, s);
      }
      return s;
    }
    function N1(e, t, a) {
      e.flags |= ho;
      var i = {
        getSnapshot: t,
        value: a
      }, u = ot.updateQueue;
      if (u === null)
        u = L1(), ot.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function z1(e, t, a, i) {
      t.value = a, t.getSnapshot = i, A1(t) && H1(e);
    }
    function U1(e, t, a) {
      var i = function() {
        A1(t) && H1(e);
      };
      return a(i);
    }
    function A1(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !se(a, i);
      } catch {
        return !0;
      }
    }
    function H1(e) {
      var t = jr(e, we);
      t !== null && yn(t, e, we, pt);
    }
    function Ph(e) {
      var t = Fi();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: U,
        dispatch: null,
        lastRenderedReducer: zg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Gx.bind(null, ot, a);
      return [t.memoizedState, i];
    }
    function Vg(e) {
      return Ag(zg);
    }
    function Bg(e) {
      return Hg(zg);
    }
    function Kd(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = ot.updateQueue;
      if (s === null)
        s = L1(), ot.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function jg(e) {
      var t = Fi();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Yh(e) {
      var t = xa();
      return t.memoizedState;
    }
    function qd(e, t, a, i) {
      var u = Fi(), s = i === void 0 ? null : i;
      ot.flags |= e, u.memoizedState = Kd(cn | t, a, void 0, s);
    }
    function $h(e, t, a, i) {
      var u = xa(), s = i === void 0 ? null : i, f = void 0;
      if (dn !== null) {
        var p = dn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Ng(s, v)) {
            u.memoizedState = Kd(t, a, f, s);
            return;
          }
        }
      }
      ot.flags |= e, u.memoizedState = Kd(cn | t, a, f, s);
    }
    function Qh(e, t) {
      return (ot.mode & zr) !== Re ? qd(al | Ct | Ci, zn, e, t) : qd(Ct | Ci, zn, e, t);
    }
    function Zd(e, t) {
      return $h(Ct, zn, e, t);
    }
    function Pg(e, t) {
      return qd(Ae, Hi, e, t);
    }
    function Ih(e, t) {
      return $h(Ae, Hi, e, t);
    }
    function Yg(e, t) {
      var a = Ae;
      return a |= Gn, (ot.mode & zr) !== Re && (a |= Wn), qd(a, fn, e, t);
    }
    function Gh(e, t) {
      return $h(Ae, fn, e, t);
    }
    function F1(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function $g(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ae;
      return u |= Gn, (ot.mode & zr) !== Re && (u |= Wn), qd(u, fn, F1.bind(null, t, e), i);
    }
    function Wh(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return $h(Ae, fn, F1.bind(null, t, e), i);
    }
    function Yx(e, t) {
    }
    var Xh = Yx;
    function Qg(e, t) {
      var a = Fi(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Kh(e, t) {
      var a = xa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ng(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Ig(e, t) {
      var a = Fi(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function qh(e, t) {
      var a = xa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ng(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Gg(e) {
      var t = Fi();
      return t.memoizedState = e, e;
    }
    function V1(e) {
      var t = xa(), a = dn, i = a.memoizedState;
      return j1(t, i, e);
    }
    function B1(e) {
      var t = xa();
      if (dn === null)
        return t.memoizedState = e, e;
      var a = dn.memoizedState;
      return j1(t, a, e);
    }
    function j1(e, t, a) {
      var i = !Jm(Go);
      if (i) {
        if (!se(a, t)) {
          var u = Jf();
          ot.lanes = He(ot.lanes, u), vp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, np()), e.memoizedState = a, a;
    }
    function $x(e, t, a) {
      var i = Ar();
      Wt(Rn(i, sn)), e(!0);
      var u = Gd.transition;
      Gd.transition = {};
      var s = Gd.transition;
      Gd.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Wt(i), Gd.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && he("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Wg() {
      var e = Ph(!1), t = e[0], a = e[1], i = $x.bind(null, a), u = Fi();
      return u.memoizedState = i, [t, i];
    }
    function P1() {
      var e = Vg(), t = e[0], a = xa(), i = a.memoizedState;
      return [t, i];
    }
    function Y1() {
      var e = Bg(), t = e[0], a = xa(), i = a.memoizedState;
      return [t, i];
    }
    var $1 = !1;
    function Qx() {
      return $1;
    }
    function Xg() {
      var e = Fi(), t = ym(), a = t.identifierPrefix, i;
      if (Nn()) {
        var u = ix();
        i = ":" + a + "R" + u;
        var s = Xd++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Bx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Zh() {
      var e = xa(), t = e.memoizedState;
      return t;
    }
    function Ix(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Hu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Q1(e))
        I1(t, u);
      else {
        var s = s1(e, t, u, i);
        if (s !== null) {
          var f = yr();
          yn(s, e, i, f), G1(s, t, i);
        }
      }
      W1(e, i);
    }
    function Gx(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Hu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Q1(e))
        I1(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === U && (s === null || s.lanes === U)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = te.current, te.current = Ja;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, se(m, v)) {
                wx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              te.current = p;
            }
          }
        }
        var y = s1(e, t, u, i);
        if (y !== null) {
          var R = yr();
          yn(y, e, i, R), G1(y, t, i);
        }
      }
      W1(e, i);
    }
    function Q1(e) {
      var t = e.alternate;
      return e === ot || t !== null && t === ot;
    }
    function I1(e, t) {
      Wd = Bh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function G1(e, t, a) {
      if (Zf(a)) {
        var i = t.lanes;
        i = ed(i, e.pendingLanes);
        var u = He(i, a);
        t.lanes = u, su(e, u);
      }
    }
    function W1(e, t, a) {
      Di(e, t);
    }
    var Jh = {
      readContext: ln,
      useCallback: nr,
      useContext: nr,
      useEffect: nr,
      useImperativeHandle: nr,
      useInsertionEffect: nr,
      useLayoutEffect: nr,
      useMemo: nr,
      useReducer: nr,
      useRef: nr,
      useState: nr,
      useDebugValue: nr,
      useDeferredValue: nr,
      useTransition: nr,
      useMutableSource: nr,
      useSyncExternalStore: nr,
      useId: nr,
      unstable_isNewReconciler: q
    }, X1 = null, K1 = null, q1 = null, Z1 = null, Vi = null, Ja = null, em = null;
    {
      var Kg = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ne = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      X1 = {
        readContext: function(e) {
          return ln(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", tt(), Bc(t), Qg(e, t);
        },
        useContext: function(e) {
          return H = "useContext", tt(), ln(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", tt(), Bc(t), Qh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", tt(), Bc(a), $g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", tt(), Bc(t), Pg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", tt(), Bc(t), Yg(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", tt(), Bc(t);
          var a = te.current;
          te.current = Vi;
          try {
            return Ig(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", tt();
          var i = te.current;
          te.current = Vi;
          try {
            return Ug(e, t, a);
          } finally {
            te.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", tt(), jg(e);
        },
        useState: function(e) {
          H = "useState", tt();
          var t = te.current;
          te.current = Vi;
          try {
            return Ph(e);
          } finally {
            te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", tt(), void 0;
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", tt(), Gg(e);
        },
        useTransition: function() {
          return H = "useTransition", tt(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", tt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", tt(), Fg(e, t, a);
        },
        useId: function() {
          return H = "useId", tt(), Xg();
        },
        unstable_isNewReconciler: q
      }, K1 = {
        readContext: function(e) {
          return ln(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", X(), Qg(e, t);
        },
        useContext: function(e) {
          return H = "useContext", X(), ln(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", X(), Qh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", X(), $g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", X(), Pg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", X(), Yg(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", X();
          var a = te.current;
          te.current = Vi;
          try {
            return Ig(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", X();
          var i = te.current;
          te.current = Vi;
          try {
            return Ug(e, t, a);
          } finally {
            te.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", X(), jg(e);
        },
        useState: function(e) {
          H = "useState", X();
          var t = te.current;
          te.current = Vi;
          try {
            return Ph(e);
          } finally {
            te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", X(), void 0;
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", X(), Gg(e);
        },
        useTransition: function() {
          return H = "useTransition", X(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", X(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", X(), Fg(e, t, a);
        },
        useId: function() {
          return H = "useId", X(), Xg();
        },
        unstable_isNewReconciler: q
      }, q1 = {
        readContext: function(e) {
          return ln(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", X(), Kh(e, t);
        },
        useContext: function(e) {
          return H = "useContext", X(), ln(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", X(), Zd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", X(), Wh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", X(), Ih(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", X(), Gh(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", X();
          var a = te.current;
          te.current = Ja;
          try {
            return qh(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", X();
          var i = te.current;
          te.current = Ja;
          try {
            return Ag(e, t, a);
          } finally {
            te.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", X(), Yh();
        },
        useState: function(e) {
          H = "useState", X();
          var t = te.current;
          te.current = Ja;
          try {
            return Vg(e);
          } finally {
            te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", X(), Xh();
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", X(), V1(e);
        },
        useTransition: function() {
          return H = "useTransition", X(), P1();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", X(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", X(), jh(e, t);
        },
        useId: function() {
          return H = "useId", X(), Zh();
        },
        unstable_isNewReconciler: q
      }, Z1 = {
        readContext: function(e) {
          return ln(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", X(), Kh(e, t);
        },
        useContext: function(e) {
          return H = "useContext", X(), ln(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", X(), Zd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", X(), Wh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", X(), Ih(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", X(), Gh(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", X();
          var a = te.current;
          te.current = em;
          try {
            return qh(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", X();
          var i = te.current;
          te.current = em;
          try {
            return Hg(e, t, a);
          } finally {
            te.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", X(), Yh();
        },
        useState: function(e) {
          H = "useState", X();
          var t = te.current;
          te.current = em;
          try {
            return Bg(e);
          } finally {
            te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", X(), Xh();
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", X(), B1(e);
        },
        useTransition: function() {
          return H = "useTransition", X(), Y1();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", X(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", X(), jh(e, t);
        },
        useId: function() {
          return H = "useId", X(), Zh();
        },
        unstable_isNewReconciler: q
      }, Vi = {
        readContext: function(e) {
          return Kg(), ln(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", Ne(), tt(), Qg(e, t);
        },
        useContext: function(e) {
          return H = "useContext", Ne(), tt(), ln(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", Ne(), tt(), Qh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", Ne(), tt(), $g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", Ne(), tt(), Pg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", Ne(), tt(), Yg(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", Ne(), tt();
          var a = te.current;
          te.current = Vi;
          try {
            return Ig(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", Ne(), tt();
          var i = te.current;
          te.current = Vi;
          try {
            return Ug(e, t, a);
          } finally {
            te.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", Ne(), tt(), jg(e);
        },
        useState: function(e) {
          H = "useState", Ne(), tt();
          var t = te.current;
          te.current = Vi;
          try {
            return Ph(e);
          } finally {
            te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", Ne(), tt(), void 0;
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", Ne(), tt(), Gg(e);
        },
        useTransition: function() {
          return H = "useTransition", Ne(), tt(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", Ne(), tt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", Ne(), tt(), Fg(e, t, a);
        },
        useId: function() {
          return H = "useId", Ne(), tt(), Xg();
        },
        unstable_isNewReconciler: q
      }, Ja = {
        readContext: function(e) {
          return Kg(), ln(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", Ne(), X(), Kh(e, t);
        },
        useContext: function(e) {
          return H = "useContext", Ne(), X(), ln(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", Ne(), X(), Zd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", Ne(), X(), Wh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", Ne(), X(), Ih(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", Ne(), X(), Gh(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", Ne(), X();
          var a = te.current;
          te.current = Ja;
          try {
            return qh(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", Ne(), X();
          var i = te.current;
          te.current = Ja;
          try {
            return Ag(e, t, a);
          } finally {
            te.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", Ne(), X(), Yh();
        },
        useState: function(e) {
          H = "useState", Ne(), X();
          var t = te.current;
          te.current = Ja;
          try {
            return Vg(e);
          } finally {
            te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", Ne(), X(), Xh();
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", Ne(), X(), V1(e);
        },
        useTransition: function() {
          return H = "useTransition", Ne(), X(), P1();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", Ne(), X(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", Ne(), X(), jh(e, t);
        },
        useId: function() {
          return H = "useId", Ne(), X(), Zh();
        },
        unstable_isNewReconciler: q
      }, em = {
        readContext: function(e) {
          return Kg(), ln(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", Ne(), X(), Kh(e, t);
        },
        useContext: function(e) {
          return H = "useContext", Ne(), X(), ln(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", Ne(), X(), Zd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", Ne(), X(), Wh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", Ne(), X(), Ih(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", Ne(), X(), Gh(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", Ne(), X();
          var a = te.current;
          te.current = Ja;
          try {
            return qh(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", Ne(), X();
          var i = te.current;
          te.current = Ja;
          try {
            return Hg(e, t, a);
          } finally {
            te.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", Ne(), X(), Yh();
        },
        useState: function(e) {
          H = "useState", Ne(), X();
          var t = te.current;
          te.current = Ja;
          try {
            return Bg(e);
          } finally {
            te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", Ne(), X(), Xh();
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", Ne(), X(), B1(e);
        },
        useTransition: function() {
          return H = "useTransition", Ne(), X(), Y1();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", Ne(), X(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", Ne(), X(), jh(e, t);
        },
        useId: function() {
          return H = "useId", Ne(), X(), Zh();
        },
        unstable_isNewReconciler: q
      };
    }
    var Nu = $.unstable_now, J1 = 0, tm = -1, Jd = -1, nm = -1, qg = !1, rm = !1;
    function eC() {
      return qg;
    }
    function Wx() {
      rm = !0;
    }
    function Xx() {
      qg = !1, rm = !1;
    }
    function Kx() {
      qg = rm, rm = !1;
    }
    function tC() {
      return J1;
    }
    function nC() {
      J1 = Nu();
    }
    function Zg(e) {
      Jd = Nu(), e.actualStartTime < 0 && (e.actualStartTime = Nu());
    }
    function rC(e) {
      Jd = -1;
    }
    function am(e, t) {
      if (Jd >= 0) {
        var a = Nu() - Jd;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Jd = -1;
      }
    }
    function Bi(e) {
      if (tm >= 0) {
        var t = Nu() - tm;
        tm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case F:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case me:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Jg(e) {
      if (nm >= 0) {
        var t = Nu() - nm;
        nm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case F:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case me:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ji() {
      tm = Nu();
    }
    function eS() {
      nm = Nu();
    }
    function tS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Wo(e, t) {
      return {
        value: e,
        source: t,
        stack: of(t),
        digest: null
      };
    }
    function nS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function qx(e, t) {
      return !0;
    }
    function rS(e, t) {
      try {
        var a = qx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === G)
            return;
          console.error(i);
        }
        var p = u ? Ue(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === F)
          m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var y = Ue(e) || "Anonymous";
          m = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + y + ".");
        }
        var R = v + `
` + f + `

` + ("" + m);
        console.error(R);
      } catch (E) {
        setTimeout(function() {
          throw E;
        });
      }
    }
    var Zx = typeof WeakMap == "function" ? WeakMap : Map;
    function aC(e, t, a) {
      var i = Ol(pt, a);
      i.tag = rg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        $D(u), rS(e, t);
      }, i;
    }
    function aS(e, t, a) {
      var i = Ol(pt, a);
      i.tag = rg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          hE(e), rS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        hE(e), rS(e, t), typeof u != "function" && PD(this);
        var v = t.value, m = t.stack;
        this.componentDidCatch(v, {
          componentStack: m !== null ? m : ""
        }), typeof u != "function" && (Jn(e.lanes, we) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ue(e) || "Unknown"));
      }), i;
    }
    function iC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Zx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = QD.bind(null, e, t, a);
        on && hp(e, a), t.then(s, s);
      }
    }
    function Jx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function ew(e, t) {
      var a = e.tag;
      if ((e.mode & Ve) === Re && (a === fe || a === Q || a === je)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function lC(e) {
      var t = e;
      do {
        if (t.tag === Ee && Fx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function uC(e, t, a, i, u) {
      if ((e.mode & Ve) === Re) {
        if (e === t)
          e.flags |= en;
        else {
          if (e.flags |= Me, a.flags |= mo, a.flags &= ~(ks | sr), a.tag === G) {
            var s = a.alternate;
            if (s === null)
              a.tag = ir;
            else {
              var f = Ol(pt, we);
              f.tag = bh, _u(a, f, we);
            }
          }
          a.lanes = He(a.lanes, we);
        }
        return e;
      }
      return e.flags |= en, e.lanes = u, e;
    }
    function tw(e, t, a, i, u) {
      if (a.flags |= sr, on && hp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        ew(a), Nn() && a.mode & Ve && q0();
        var f = lC(t);
        if (f !== null) {
          f.flags &= ~Ot, uC(f, t, a, e, u), f.mode & Ve && iC(e, s, u), Jx(f, e, s);
          return;
        } else {
          if (!uu(u)) {
            iC(e, s, u), HS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Nn() && a.mode & Ve) {
        q0();
        var v = lC(t);
        if (v !== null) {
          (v.flags & en) === Se && (v.flags |= Ot), uC(v, t, a, e, u), Ky(Wo(i, a));
          return;
        }
      }
      i = Wo(i, a), zD(i);
      var m = t;
      do {
        switch (m.tag) {
          case F: {
            var y = i;
            m.flags |= en;
            var R = Gt(u);
            m.lanes = He(m.lanes, R);
            var E = aC(m, y, R);
            lg(m, E);
            return;
          }
          case G:
            var _ = i, O = m.type, L = m.stateNode;
            if ((m.flags & Me) === Se && (typeof O.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && !lE(L))) {
              m.flags |= en;
              var re = Gt(u);
              m.lanes = He(m.lanes, re);
              var Ce = aS(m, _, re);
              lg(m, Ce);
              return;
            }
            break;
        }
        m = m.return;
      } while (m !== null);
    }
    function nw() {
      return null;
    }
    var ep = b.ReactCurrentOwner, ei = !1, iS, tp, lS, uS, oS, Xo, sS, im;
    iS = {}, tp = {}, lS = {}, uS = {}, oS = {}, Xo = !1, sS = {}, im = {};
    function hr(e, t, a, i) {
      e === null ? t.child = w1(t, null, a, i) : t.child = Uc(t, e.child, a, i);
    }
    function rw(e, t, a, i) {
      t.child = Uc(t, e.child, null, i), t.child = Uc(t, null, a, i);
    }
    function oC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Wa(
          s,
          i,
          // Resolved props
          "prop",
          ft(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      zc(t, u), wi(t);
      {
        if (ep.current = t, ea(!0), v = jc(e, t, f, i, p, u), m = Pc(), t.mode & Rt) {
          It(!0);
          try {
            v = jc(e, t, f, i, p, u), m = Pc();
          } finally {
            It(!1);
          }
        }
        ea(!1);
      }
      return il(), e !== null && !ei ? (O1(e, t, u), Ml(e, t, u)) : (Nn() && m && $y(t), t.flags |= gi, hr(e, t, v, u), t.child);
    }
    function sC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (ok(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Kc(s), t.tag = je, t.type = f, dS(t, s), cC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Wa(
            p,
            i,
            // Resolved props
            "prop",
            ft(s)
          );
        }
        var v = WS(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var m = a.type, y = m.propTypes;
        y && Wa(
          y,
          i,
          // Resolved props
          "prop",
          ft(m)
        );
      }
      var R = e.child, E = gS(e, u);
      if (!E) {
        var _ = R.memoizedProps, O = a.compare;
        if (O = O !== null ? O : ge, O(_, i) && e.ref === t.ref)
          return Ml(e, t, u);
      }
      t.flags |= gi;
      var L = es(R, i);
      return L.ref = t.ref, L.return = t, t.child = L, L;
    }
    function cC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === On) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var m = s && s.propTypes;
          m && Wa(
            m,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            ft(s)
          );
        }
      }
      if (e !== null) {
        var y = e.memoizedProps;
        if (ge(y, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ei = !1, t.pendingProps = i = y, gS(e, u))
            (e.flags & mo) !== Se && (ei = !0);
          else
            return t.lanes = e.lanes, Ml(e, t, u);
      }
      return cS(e, t, a, i, u);
    }
    function fC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ie)
        if ((t.mode & Ve) === Re) {
          var f = {
            baseLanes: U,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, gm(t, a);
        } else if (Jn(a, Zn)) {
          var R = {
            baseLanes: U,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = R;
          var E = s !== null ? s.baseLanes : a;
          gm(t, E);
        } else {
          var p = null, v;
          if (s !== null) {
            var m = s.baseLanes;
            v = He(m, a);
          } else
            v = a;
          t.lanes = t.childLanes = Zn;
          var y = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = y, t.updateQueue = null, gm(t, v), null;
        }
      else {
        var _;
        s !== null ? (_ = He(s.baseLanes, a), t.memoizedState = null) : _ = a, gm(t, _);
      }
      return hr(e, t, u, a), t.child;
    }
    function aw(e, t, a) {
      var i = t.pendingProps;
      return hr(e, t, i, a), t.child;
    }
    function iw(e, t, a) {
      var i = t.pendingProps.children;
      return hr(e, t, i, a), t.child;
    }
    function lw(e, t, a) {
      {
        t.flags |= Ae;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return hr(e, t, s, a), t.child;
    }
    function dC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= In, t.flags |= Hf);
    }
    function cS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Wa(
          s,
          i,
          // Resolved props
          "prop",
          ft(a)
        );
      }
      var f;
      {
        var p = bc(t, a, !0);
        f = _c(t, p);
      }
      var v, m;
      zc(t, u), wi(t);
      {
        if (ep.current = t, ea(!0), v = jc(e, t, a, i, f, u), m = Pc(), t.mode & Rt) {
          It(!0);
          try {
            v = jc(e, t, a, i, f, u), m = Pc();
          } finally {
            It(!1);
          }
        }
        ea(!1);
      }
      return il(), e !== null && !ei ? (O1(e, t, u), Ml(e, t, u)) : (Nn() && m && $y(t), t.flags |= gi, hr(e, t, v, u), t.child);
    }
    function pC(e, t, a, i, u) {
      {
        switch (Rk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Me, t.flags |= en;
            var m = new Error("Simulated error coming from DevTools"), y = Gt(u);
            t.lanes = He(t.lanes, y);
            var R = aS(t, Wo(m, t), y);
            lg(t, R);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var E = a.propTypes;
          E && Wa(
            E,
            i,
            // Resolved props
            "prop",
            ft(a)
          );
        }
      }
      var _;
      Ai(a) ? (_ = !0, yh(t)) : _ = !1, zc(t, u);
      var O = t.stateNode, L;
      O === null ? (um(e, t), C1(t, a, i), gg(t, a, i, u), L = !0) : e === null ? L = Lx(t, a, i, u) : L = Nx(e, t, a, i, u);
      var re = fS(e, t, a, L, _, u);
      {
        var Ce = t.stateNode;
        L && Ce.props !== i && (Xo || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ue(t) || "a component"), Xo = !0);
      }
      return re;
    }
    function fS(e, t, a, i, u, s) {
      dC(e, t);
      var f = (t.flags & Me) !== Se;
      if (!i && !f)
        return u && G0(t, a, !1), Ml(e, t, s);
      var p = t.stateNode;
      ep.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, rC();
      else {
        wi(t);
        {
          if (ea(!0), v = p.render(), t.mode & Rt) {
            It(!0);
            try {
              p.render();
            } finally {
              It(!1);
            }
          }
          ea(!1);
        }
        il();
      }
      return t.flags |= gi, e !== null && f ? rw(e, t, v, s) : hr(e, t, v, s), t.memoizedState = p.state, u && G0(t, a, !0), t.child;
    }
    function vC(e) {
      var t = e.stateNode;
      t.pendingContext ? Q0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Q0(e, t.context, !1), xg(e, t.containerInfo);
    }
    function uw(e, t, a) {
      if (vC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      d1(e, t), Lh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, m = t.updateQueue;
        if (m.baseState = v, t.memoizedState = v, t.flags & Ot) {
          var y = Wo(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return hC(e, t, p, a, y);
        } else if (p !== s) {
          var R = Wo(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return hC(e, t, p, a, R);
        } else {
          fx(t);
          var E = w1(t, null, p, a);
          t.child = E;
          for (var _ = E; _; )
            _.flags = _.flags & ~ht | Mr, _ = _.sibling;
        }
      } else {
        if (Lc(), p === s)
          return Ml(e, t, a);
        hr(e, t, p, a);
      }
      return t.child;
    }
    function hC(e, t, a, i, u) {
      return Lc(), Ky(u), t.flags |= Ot, hr(e, t, a, i), t.child;
    }
    function ow(e, t, a) {
      k1(t), e === null && Xy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Oy(i, u);
      return p ? f = null : s !== null && Oy(i, s) && (t.flags |= et), dC(e, t), hr(e, t, f, a), t.child;
    }
    function sw(e, t) {
      return e === null && Xy(t), null;
    }
    function cw(e, t, a, i) {
      um(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = sk(v), y = qa(v, u), R;
      switch (m) {
        case fe:
          return dS(t, v), t.type = v = Kc(v), R = cS(null, t, v, y, i), R;
        case G:
          return t.type = v = PS(v), R = pC(null, t, v, y, i), R;
        case Q:
          return t.type = v = YS(v), R = oC(null, t, v, y, i), R;
        case nt: {
          if (t.type !== t.elementType) {
            var E = v.propTypes;
            E && Wa(
              E,
              y,
              // Resolved for outer only
              "prop",
              ft(v)
            );
          }
          return R = sC(
            null,
            t,
            v,
            qa(v.type, y),
            // The inner type can have defaults too
            i
          ), R;
        }
      }
      var _ = "";
      throw v !== null && typeof v == "object" && v.$$typeof === On && (_ = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + _));
    }
    function fw(e, t, a, i, u) {
      um(e, t), t.tag = G;
      var s;
      return Ai(a) ? (s = !0, yh(t)) : s = !1, zc(t, u), C1(t, a, i), gg(t, a, i, u), fS(null, t, a, !0, s, u);
    }
    function dw(e, t, a, i) {
      um(e, t);
      var u = t.pendingProps, s;
      {
        var f = bc(t, a, !1);
        s = _c(t, f);
      }
      zc(t, i);
      var p, v;
      wi(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var m = ft(a) || "Unknown";
          iS[m] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), iS[m] = !0);
        }
        t.mode & Rt && Ka.recordLegacyContextWarning(t, null), ea(!0), ep.current = t, p = jc(null, t, a, u, s, i), v = Pc(), ea(!1);
      }
      if (il(), t.flags |= gi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var y = ft(a) || "Unknown";
        tp[y] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", y, y, y), tp[y] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var R = ft(a) || "Unknown";
          tp[R] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), tp[R] = !0);
        }
        t.tag = G, t.memoizedState = null, t.updateQueue = null;
        var E = !1;
        return Ai(a) ? (E = !0, yh(t)) : E = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, ig(t), S1(t, p), gg(t, a, u, i), fS(null, t, a, !0, E, i);
      } else {
        if (t.tag = fe, t.mode & Rt) {
          It(!0);
          try {
            p = jc(null, t, a, u, s, i), v = Pc();
          } finally {
            It(!1);
          }
        }
        return Nn() && v && $y(t), hr(null, t, p, i), dS(t, a), t.child;
      }
    }
    function dS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = kr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), oS[u] || (oS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = ft(t) || "Unknown";
          uS[f] || (g("%s: Function components do not support getDerivedStateFromProps.", f), uS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = ft(t) || "Unknown";
          lS[p] || (g("%s: Function components do not support contextType.", p), lS[p] = !0);
        }
      }
    }
    var pS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Ge
    };
    function vS(e) {
      return {
        baseLanes: e,
        cachePool: nw(),
        transitions: null
      };
    }
    function pw(e, t) {
      var a = null;
      return {
        baseLanes: He(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function vw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return kg(e, Id);
    }
    function hw(e, t) {
      return ou(e.childLanes, t);
    }
    function mC(e, t, a) {
      var i = t.pendingProps;
      xk(t) && (t.flags |= Me);
      var u = Za.current, s = !1, f = (t.flags & Me) !== Se;
      if (f || vw(u, e) ? (s = !0, t.flags &= ~Me) : (e === null || e.memoizedState !== null) && (u = Hx(u, _1)), u = Hc(u), Mu(t, u), e === null) {
        Xy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Cw(t, v);
        }
        var m = i.children, y = i.fallback;
        if (s) {
          var R = mw(t, m, y, a), E = t.child;
          return E.memoizedState = vS(a), t.memoizedState = pS, R;
        } else
          return hS(t, m);
      } else {
        var _ = e.memoizedState;
        if (_ !== null) {
          var O = _.dehydrated;
          if (O !== null)
            return Ew(e, t, f, i, O, _, a);
        }
        if (s) {
          var L = i.fallback, re = i.children, Ce = gw(e, t, re, L, a), ve = t.child, Xe = e.child.memoizedState;
          return ve.memoizedState = Xe === null ? vS(a) : pw(Xe, a), ve.childLanes = hw(e, a), t.memoizedState = pS, Ce;
        } else {
          var Qe = i.children, w = yw(e, t, Qe, a);
          return t.memoizedState = null, w;
        }
      }
    }
    function hS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = mS(u, i);
      return s.return = e, e.child = s, s;
    }
    function mw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Ve) === Re && s !== null ? (p = s, p.childLanes = U, p.pendingProps = f, e.mode & xe && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Vu(a, u, i, null)) : (p = mS(f, u), v = Vu(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function mS(e, t, a) {
      return yE(e, t, U, null);
    }
    function yC(e, t) {
      return es(e, t);
    }
    function yw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = yC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ve) === Re && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Je) : p.push(s);
      }
      return t.child = f, f;
    }
    function gw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, m;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Ve) === Re && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var y = t.child;
        m = y, m.childLanes = U, m.pendingProps = v, t.mode & xe && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = yC(f, v), m.subtreeFlags = f.subtreeFlags & un;
      var R;
      return p !== null ? R = es(p, i) : (R = Vu(i, s, u, null), R.flags |= ht), R.return = t, m.return = t, m.sibling = R, t.child = m, R;
    }
    function lm(e, t, a, i) {
      i !== null && Ky(i), Uc(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = hS(t, s);
      return f.flags |= ht, t.memoizedState = null, f;
    }
    function Sw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = mS(f, s), v = Vu(i, s, u, null);
      return v.flags |= ht, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Ve) !== Re && Uc(t, e.child, null, u), v;
    }
    function Cw(e, t, a) {
      return (e.mode & Ve) === Re ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = we) : zy(t) ? e.lanes = ol : e.lanes = Zn, null;
    }
    function Ew(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Ot) {
          t.flags &= ~Ot;
          var w = nS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return lm(e, t, f, w);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Me, null;
          var N = i.children, D = i.fallback, Y = Sw(e, t, N, D, f), ae = t.child;
          return ae.memoizedState = vS(f), t.memoizedState = pS, Y;
        }
      else {
        if (sx(), (t.mode & Ve) === Re)
          return lm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (zy(u)) {
          var p, v, m;
          {
            var y = DR(u);
            p = y.digest, v = y.message, m = y.stack;
          }
          var R;
          v ? R = new Error(v) : R = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var E = nS(R, p, m);
          return lm(e, t, f, E);
        }
        var _ = Jn(f, e.childLanes);
        if (ei || _) {
          var O = ym();
          if (O !== null) {
            var L = ty(O, f);
            if (L !== Ge && L !== s.retryLane) {
              s.retryLane = L;
              var re = pt;
              jr(e, L), yn(O, e, L, re);
            }
          }
          HS();
          var Ce = nS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return lm(e, t, f, Ce);
        } else if (V0(u)) {
          t.flags |= Me, t.child = e.child;
          var ve = ID.bind(null, e);
          return kR(u, ve), null;
        } else {
          dx(t, u, s.treeContext);
          var Xe = i.children, Qe = hS(t, Xe);
          return Qe.flags |= Mr, Qe;
        }
      }
    }
    function gC(e, t, a) {
      e.lanes = He(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = He(i.lanes, t)), tg(e.return, t, a);
    }
    function Tw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ee) {
          var u = i.memoizedState;
          u !== null && gC(i, a, e);
        } else if (i.tag === vt)
          gC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Rw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Vh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function xw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !sS[e])
        if (sS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function ww(e, t) {
      e !== void 0 && !im[e] && (e !== "collapsed" && e !== "hidden" ? (im[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (im[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function SC(e, t) {
      {
        var a = Zt(e), i = !a && typeof Ma(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Dw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Zt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!SC(e[a], a))
              return;
        } else {
          var i = Ma(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!SC(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function yS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function CC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      xw(u), ww(s, u), Dw(f, u), hr(e, t, f, a);
      var p = Za.current, v = kg(p, Id);
      if (v)
        p = bg(p, Id), t.flags |= Me;
      else {
        var m = e !== null && (e.flags & Me) !== Se;
        m && Tw(t, t.child, a), p = Hc(p);
      }
      if (Mu(t, p), (t.mode & Ve) === Re)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var y = Rw(t.child), R;
            y === null ? (R = t.child, t.child = null) : (R = y.sibling, y.sibling = null), yS(
              t,
              !1,
              // isBackwards
              R,
              y,
              s
            );
            break;
          }
          case "backwards": {
            var E = null, _ = t.child;
            for (t.child = null; _ !== null; ) {
              var O = _.alternate;
              if (O !== null && Vh(O) === null) {
                t.child = _;
                break;
              }
              var L = _.sibling;
              _.sibling = E, E = _, _ = L;
            }
            yS(
              t,
              !0,
              // isBackwards
              E,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            yS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function kw(e, t, a) {
      xg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Uc(t, null, i, a) : hr(e, t, i, a), t.child;
    }
    var EC = !1;
    function bw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || EC || (EC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Wa(v, s, "prop", "Context.Provider");
      }
      if (o1(t, u, p), f !== null) {
        var m = f.value;
        if (se(m, p)) {
          if (f.children === s.children && !hh())
            return Ml(e, t, a);
        } else
          Tx(t, u, a);
      }
      var y = s.children;
      return hr(e, t, y, a), t.child;
    }
    var TC = !1;
    function _w(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (TC || (TC = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), zc(t, a);
      var f = ln(i);
      wi(t);
      var p;
      return ep.current = t, ea(!0), p = s(f), ea(!1), il(), t.flags |= gi, hr(e, t, p, a), t.child;
    }
    function np() {
      ei = !0;
    }
    function um(e, t) {
      (t.mode & Ve) === Re && e !== null && (e.alternate = null, t.alternate = null, t.flags |= ht);
    }
    function Ml(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), rC(), vp(t.lanes), Jn(a, t.childLanes) ? (zx(e, t), t.child) : null;
    }
    function Ow(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Je) : s.push(e), a.flags |= ht, a;
      }
    }
    function gS(e, t) {
      var a = e.lanes;
      return !!Jn(a, t);
    }
    function Mw(e, t, a) {
      switch (t.tag) {
        case F:
          vC(t), t.stateNode, Lc();
          break;
        case K:
          k1(t);
          break;
        case G: {
          var i = t.type;
          Ai(i) && yh(t);
          break;
        }
        case A:
          xg(t, t.stateNode.containerInfo);
          break;
        case V: {
          var u = t.memoizedProps.value, s = t.type._context;
          o1(t, s, u);
          break;
        }
        case me:
          {
            var f = Jn(a, t.childLanes);
            f && (t.flags |= Ae);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ee: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Mu(t, Hc(Za.current)), t.flags |= Me, null;
            var m = t.child, y = m.childLanes;
            if (Jn(a, y))
              return mC(e, t, a);
            Mu(t, Hc(Za.current));
            var R = Ml(e, t, a);
            return R !== null ? R.sibling : null;
          } else
            Mu(t, Hc(Za.current));
          break;
        }
        case vt: {
          var E = (e.flags & Me) !== Se, _ = Jn(a, t.childLanes);
          if (E) {
            if (_)
              return CC(e, t, a);
            t.flags |= Me;
          }
          var O = t.memoizedState;
          if (O !== null && (O.rendering = null, O.tail = null, O.lastEffect = null), Mu(t, Za.current), _)
            break;
          return null;
        }
        case Ie:
        case it:
          return t.lanes = U, fC(e, t, a);
      }
      return Ml(e, t, a);
    }
    function RC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Ow(e, t, WS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || hh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ei = !0;
        else {
          var s = gS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Me) === Se)
            return ei = !1, Mw(e, t, a);
          (e.flags & mo) !== Se ? ei = !0 : ei = !1;
        }
      } else if (ei = !1, Nn() && rx(t)) {
        var f = t.index, p = ax();
        K0(t, p, f);
      }
      switch (t.lanes = U, t.tag) {
        case be:
          return dw(e, t, t.type, a);
        case bn: {
          var v = t.elementType;
          return cw(e, t, v, a);
        }
        case fe: {
          var m = t.type, y = t.pendingProps, R = t.elementType === m ? y : qa(m, y);
          return cS(e, t, m, R, a);
        }
        case G: {
          var E = t.type, _ = t.pendingProps, O = t.elementType === E ? _ : qa(E, _);
          return pC(e, t, E, O, a);
        }
        case F:
          return uw(e, t, a);
        case K:
          return ow(e, t, a);
        case ye:
          return sw(e, t);
        case Ee:
          return mC(e, t, a);
        case A:
          return kw(e, t, a);
        case Q: {
          var L = t.type, re = t.pendingProps, Ce = t.elementType === L ? re : qa(L, re);
          return oC(e, t, L, Ce, a);
        }
        case Oe:
          return aw(e, t, a);
        case Fe:
          return iw(e, t, a);
        case me:
          return lw(e, t, a);
        case V:
          return bw(e, t, a);
        case ne:
          return _w(e, t, a);
        case nt: {
          var ve = t.type, Xe = t.pendingProps, Qe = qa(ve, Xe);
          if (t.type !== t.elementType) {
            var w = ve.propTypes;
            w && Wa(
              w,
              Qe,
              // Resolved for outer only
              "prop",
              ft(ve)
            );
          }
          return Qe = qa(ve.type, Qe), sC(e, t, ve, Qe, a);
        }
        case je:
          return cC(e, t, t.type, t.pendingProps, a);
        case ir: {
          var N = t.type, D = t.pendingProps, Y = t.elementType === N ? D : qa(N, D);
          return fw(e, t, N, Y, a);
        }
        case vt:
          return CC(e, t, a);
        case jn:
          break;
        case Ie:
          return fC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Yc(e) {
      e.flags |= Ae;
    }
    function xC(e) {
      e.flags |= In, e.flags |= Hf;
    }
    var wC, SS, DC, kC;
    wC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === K || u.tag === ye)
          eR(e, u.stateNode);
        else if (u.tag !== A) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, SS = function(e, t) {
    }, DC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = wg(), v = nR(f, a, s, i, u, p);
        t.updateQueue = v, v && Yc(t);
      }
    }, kC = function(e, t, a, i) {
      a !== i && Yc(t);
    };
    function rp(e, t) {
      if (!Nn())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Un(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = U, i = Se;
      if (t) {
        if ((e.mode & xe) !== Re) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = He(a, He(m.lanes, m.childLanes)), i |= m.subtreeFlags & un, i |= m.flags & un, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var y = e.child; y !== null; )
            a = He(a, He(y.lanes, y.childLanes)), i |= y.subtreeFlags & un, i |= y.flags & un, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & xe) !== Re) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = He(a, He(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = He(a, He(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Lw(e, t, a) {
      if (yx() && (t.mode & Ve) !== Re && (t.flags & Me) === Se)
        return r1(t), Lc(), t.flags |= Ot | sr | en, !1;
      var i = Th(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (hx(t), Un(t), (t.mode & xe) !== Re) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Lc(), (t.flags & Me) === Se && (t.memoizedState = null), t.flags |= Ae, Un(t), (t.mode & xe) !== Re) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return a1(), !0;
    }
    function bC(e, t, a) {
      var i = t.pendingProps;
      switch (Qy(t), t.tag) {
        case be:
        case bn:
        case je:
        case fe:
        case Q:
        case Oe:
        case Fe:
        case me:
        case ne:
        case nt:
          return Un(t), null;
        case G: {
          var u = t.type;
          return Ai(u) && mh(t), Un(t), null;
        }
        case F: {
          var s = t.stateNode;
          if (Ac(t), jy(t), Og(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Th(t);
            if (f)
              Yc(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Ot) !== Se) && (t.flags |= Or, a1());
            }
          }
          return SS(e, t), Un(t), null;
        }
        case K: {
          Dg(t);
          var v = D1(), m = t.type;
          if (e !== null && t.stateNode != null)
            DC(e, t, m, i, v), e.ref !== t.ref && xC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Un(t), null;
            }
            var y = wg(), R = Th(t);
            if (R)
              px(t, v, y) && Yc(t);
            else {
              var E = JT(m, i, v, y, t);
              wC(E, t, !1, !1), t.stateNode = E, tR(E, m, i, v) && Yc(t);
            }
            t.ref !== null && xC(t);
          }
          return Un(t), null;
        }
        case ye: {
          var _ = i;
          if (e && t.stateNode != null) {
            var O = e.memoizedProps;
            kC(e, t, O, _);
          } else {
            if (typeof _ != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var L = D1(), re = wg(), Ce = Th(t);
            Ce ? vx(t) && Yc(t) : t.stateNode = rR(_, L, re, t);
          }
          return Un(t), null;
        }
        case Ee: {
          Fc(t);
          var ve = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Xe = Lw(e, t, ve);
            if (!Xe)
              return t.flags & en ? t : null;
          }
          if ((t.flags & Me) !== Se)
            return t.lanes = a, (t.mode & xe) !== Re && tS(t), t;
          var Qe = ve !== null, w = e !== null && e.memoizedState !== null;
          if (Qe !== w && Qe) {
            var N = t.child;
            if (N.flags |= Si, (t.mode & Ve) !== Re) {
              var D = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !rt);
              D || kg(Za.current, _1) ? ND() : HS();
            }
          }
          var Y = t.updateQueue;
          if (Y !== null && (t.flags |= Ae), Un(t), (t.mode & xe) !== Re && Qe) {
            var ae = t.child;
            ae !== null && (t.treeBaseDuration -= ae.treeBaseDuration);
          }
          return null;
        }
        case A:
          return Ac(t), SS(e, t), e === null && KR(t.stateNode.containerInfo), Un(t), null;
        case V:
          var J = t.type._context;
          return eg(J, t), Un(t), null;
        case ir: {
          var _e = t.type;
          return Ai(_e) && mh(t), Un(t), null;
        }
        case vt: {
          Fc(t);
          var ze = t.memoizedState;
          if (ze === null)
            return Un(t), null;
          var st = (t.flags & Me) !== Se, qe = ze.rendering;
          if (qe === null)
            if (st)
              rp(ze, !1);
            else {
              var qt = UD() && (e === null || (e.flags & Me) === Se);
              if (!qt)
                for (var Ze = t.child; Ze !== null; ) {
                  var Yt = Vh(Ze);
                  if (Yt !== null) {
                    st = !0, t.flags |= Me, rp(ze, !1);
                    var rr = Yt.updateQueue;
                    return rr !== null && (t.updateQueue = rr, t.flags |= Ae), t.subtreeFlags = Se, Ux(t, a), Mu(t, bg(Za.current, Id)), t.child;
                  }
                  Ze = Ze.sibling;
                }
              ze.tail !== null && Tt() > XC() && (t.flags |= Me, st = !0, rp(ze, !1), t.lanes = Kf);
            }
          else {
            if (!st) {
              var Bn = Vh(qe);
              if (Bn !== null) {
                t.flags |= Me, st = !0;
                var oa = Bn.updateQueue;
                if (oa !== null && (t.updateQueue = oa, t.flags |= Ae), rp(ze, !0), ze.tail === null && ze.tailMode === "hidden" && !qe.alternate && !Nn())
                  return Un(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Tt() * 2 - ze.renderingStartTime > XC() && a !== Zn && (t.flags |= Me, st = !0, rp(ze, !1), t.lanes = Kf);
            }
            if (ze.isBackwards)
              qe.sibling = t.child, t.child = qe;
            else {
              var gr = ze.last;
              gr !== null ? gr.sibling = qe : t.child = qe, ze.last = qe;
            }
          }
          if (ze.tail !== null) {
            var Sr = ze.tail;
            ze.rendering = Sr, ze.tail = Sr.sibling, ze.renderingStartTime = Tt(), Sr.sibling = null;
            var ar = Za.current;
            return st ? ar = bg(ar, Id) : ar = Hc(ar), Mu(t, ar), Sr;
          }
          return Un(t), null;
        }
        case jn:
          break;
        case Ie:
        case it: {
          AS(t);
          var Al = t.memoizedState, qc = Al !== null;
          if (e !== null) {
            var Sp = e.memoizedState, $i = Sp !== null;
            $i !== qc && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ie && (t.flags |= Si);
          }
          return !qc || (t.mode & Ve) === Re ? Un(t) : Jn(Yi, Zn) && (Un(t), t.subtreeFlags & (ht | Ae) && (t.flags |= Si)), null;
        }
        case Cr:
          return null;
        case Dt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Nw(e, t, a) {
      switch (Qy(t), t.tag) {
        case G: {
          var i = t.type;
          Ai(i) && mh(t);
          var u = t.flags;
          return u & en ? (t.flags = u & ~en | Me, (t.mode & xe) !== Re && tS(t), t) : null;
        }
        case F: {
          t.stateNode, Ac(t), jy(t), Og();
          var s = t.flags;
          return (s & en) !== Se && (s & Me) === Se ? (t.flags = s & ~en | Me, t) : null;
        }
        case K:
          return Dg(t), null;
        case Ee: {
          Fc(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Lc();
          }
          var p = t.flags;
          return p & en ? (t.flags = p & ~en | Me, (t.mode & xe) !== Re && tS(t), t) : null;
        }
        case vt:
          return Fc(t), null;
        case A:
          return Ac(t), null;
        case V:
          var v = t.type._context;
          return eg(v, t), null;
        case Ie:
        case it:
          return AS(t), null;
        case Cr:
          return null;
        default:
          return null;
      }
    }
    function _C(e, t, a) {
      switch (Qy(t), t.tag) {
        case G: {
          var i = t.type.childContextTypes;
          i != null && mh(t);
          break;
        }
        case F: {
          t.stateNode, Ac(t), jy(t), Og();
          break;
        }
        case K: {
          Dg(t);
          break;
        }
        case A:
          Ac(t);
          break;
        case Ee:
          Fc(t);
          break;
        case vt:
          Fc(t);
          break;
        case V:
          var u = t.type._context;
          eg(u, t);
          break;
        case Ie:
        case it:
          AS(t);
          break;
      }
    }
    var OC = null;
    OC = /* @__PURE__ */ new Set();
    var om = !1, An = !1, zw = typeof WeakSet == "function" ? WeakSet : Set, ce = null, $c = null, Qc = null;
    function Uw(e) {
      rl(null, function() {
        throw e;
      }), Uf();
    }
    var Aw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & xe)
        try {
          ji(), t.componentWillUnmount();
        } finally {
          Bi(e);
        }
      else
        t.componentWillUnmount();
    };
    function MC(e, t) {
      try {
        zu(fn, e);
      } catch (a) {
        St(e, t, a);
      }
    }
    function CS(e, t, a) {
      try {
        Aw(e, a);
      } catch (i) {
        St(e, t, i);
      }
    }
    function Hw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        St(e, t, i);
      }
    }
    function LC(e, t) {
      try {
        zC(e);
      } catch (a) {
        St(e, t, a);
      }
    }
    function Ic(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (_n && li && e.mode & xe)
              try {
                ji(), i = a(null);
              } finally {
                Bi(e);
              }
            else
              i = a(null);
          } catch (u) {
            St(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ue(e));
        } else
          a.current = null;
    }
    function sm(e, t, a) {
      try {
        a();
      } catch (i) {
        St(e, t, i);
      }
    }
    var NC = !1;
    function Fw(e, t) {
      qT(e.containerInfo), ce = t, Vw();
      var a = NC;
      return NC = !1, a;
    }
    function Vw() {
      for (; ce !== null; ) {
        var e = ce, t = e.child;
        (e.subtreeFlags & eu) !== Se && t !== null ? (t.return = e, ce = t) : Bw();
      }
    }
    function Bw() {
      for (; ce !== null; ) {
        var e = ce;
        ut(e);
        try {
          jw(e);
        } catch (a) {
          St(e, e.return, a);
        }
        Qt();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ce = t;
          return;
        }
        ce = e.return;
      }
    }
    function jw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Or) !== Se) {
        switch (ut(e), e.tag) {
          case fe:
          case Q:
          case je:
            break;
          case G: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Xo && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ue(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ue(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : qa(e.type, i), u);
              {
                var p = OC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ue(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case F: {
            {
              var v = e.stateNode;
              TR(v.containerInfo);
            }
            break;
          }
          case K:
          case ye:
          case A:
          case ir:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Qt();
      }
    }
    function ti(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & zn) !== Pr ? Us(t) : (e & fn) !== Pr && As(t), (e & Hi) !== Pr && mp(!0), sm(t, a, p), (e & Hi) !== Pr && mp(!1), (e & zn) !== Pr ? Ev() : (e & fn) !== Pr && tu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function zu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & zn) !== Pr ? Cv(t) : (e & fn) !== Pr && Tv(t);
            var f = s.create;
            (e & Hi) !== Pr && mp(!0), s.destroy = f(), (e & Hi) !== Pr && mp(!1), (e & zn) !== Pr ? Gf() : (e & fn) !== Pr && Rv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & fn) !== Se ? v = "useLayoutEffect" : (s.tag & Hi) !== Se ? v = "useInsertionEffect" : v = "useEffect";
                var m = void 0;
                p === null ? m = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? m = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : m = " You returned: " + p, g("%s must not return anything besides a function, which is used for clean-up.%s", v, m);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Pw(e, t) {
      if ((t.flags & Ae) !== Se)
        switch (t.tag) {
          case me: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = tC(), p = t.alternate === null ? "mount" : "update";
            eC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case F:
                    var m = v.stateNode;
                    m.passiveEffectDuration += a;
                    break e;
                  case me:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function Yw(e, t, a, i) {
      if ((a.flags & En) !== Se)
        switch (a.tag) {
          case fe:
          case Q:
          case je: {
            if (!An)
              if (a.mode & xe)
                try {
                  ji(), zu(fn | cn, a);
                } finally {
                  Bi(a);
                }
              else
                zu(fn | cn, a);
            break;
          }
          case G: {
            var u = a.stateNode;
            if (a.flags & Ae && !An)
              if (t === null)
                if (a.type === a.elementType && !Xo && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ue(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ue(a) || "instance")), a.mode & xe)
                  try {
                    ji(), u.componentDidMount();
                  } finally {
                    Bi(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : qa(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Xo && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ue(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ue(a) || "instance")), a.mode & xe)
                  try {
                    ji(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Bi(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Xo && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ue(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ue(a) || "instance")), v1(a, p, u));
            break;
          }
          case F: {
            var v = a.updateQueue;
            if (v !== null) {
              var m = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case K:
                    m = a.child.stateNode;
                    break;
                  case G:
                    m = a.child.stateNode;
                    break;
                }
              v1(a, v, m);
            }
            break;
          }
          case K: {
            var y = a.stateNode;
            if (t === null && a.flags & Ae) {
              var R = a.type, E = a.memoizedProps;
              oR(y, R, E);
            }
            break;
          }
          case ye:
            break;
          case A:
            break;
          case me: {
            {
              var _ = a.memoizedProps, O = _.onCommit, L = _.onRender, re = a.stateNode.effectDuration, Ce = tC(), ve = t === null ? "mount" : "update";
              eC() && (ve = "nested-update"), typeof L == "function" && L(a.memoizedProps.id, ve, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ce);
              {
                typeof O == "function" && O(a.memoizedProps.id, ve, re, Ce), BD(a);
                var Xe = a.return;
                e:
                  for (; Xe !== null; ) {
                    switch (Xe.tag) {
                      case F:
                        var Qe = Xe.stateNode;
                        Qe.effectDuration += re;
                        break e;
                      case me:
                        var w = Xe.stateNode;
                        w.effectDuration += re;
                        break e;
                    }
                    Xe = Xe.return;
                  }
              }
            }
            break;
          }
          case Ee: {
            qw(e, a);
            break;
          }
          case vt:
          case ir:
          case jn:
          case Ie:
          case it:
          case Dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      An || a.flags & In && zC(a);
    }
    function $w(e) {
      switch (e.tag) {
        case fe:
        case Q:
        case je: {
          if (e.mode & xe)
            try {
              ji(), MC(e, e.return);
            } finally {
              Bi(e);
            }
          else
            MC(e, e.return);
          break;
        }
        case G: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Hw(e, e.return, t), LC(e, e.return);
          break;
        }
        case K: {
          LC(e, e.return);
          break;
        }
      }
    }
    function Qw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === K) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? gR(u) : CR(i.stateNode, i.memoizedProps);
            } catch (f) {
              St(e, e.return, f);
            }
          }
        } else if (i.tag === ye) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? SR(s) : ER(s, i.memoizedProps);
            } catch (f) {
              St(e, e.return, f);
            }
        } else if (!((i.tag === Ie || i.tag === it) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function zC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case K:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & xe)
            try {
              ji(), u = t(i);
            } finally {
              Bi(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ue(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ue(e)), t.current = i;
      }
    }
    function Iw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function UC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, UC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === K) {
          var a = e.stateNode;
          a !== null && JR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Gw(e) {
      for (var t = e.return; t !== null; ) {
        if (AC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function AC(e) {
      return e.tag === K || e.tag === F || e.tag === A;
    }
    function HC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || AC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== K && t.tag !== ye && t.tag !== Ht; ) {
            if (t.flags & ht || t.child === null || t.tag === A)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & ht))
            return t.stateNode;
        }
    }
    function Ww(e) {
      var t = Gw(e);
      switch (t.tag) {
        case K: {
          var a = t.stateNode;
          t.flags & et && (F0(a), t.flags &= ~et);
          var i = HC(e);
          TS(e, i, a);
          break;
        }
        case F:
        case A: {
          var u = t.stateNode.containerInfo, s = HC(e);
          ES(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function ES(e, t, a) {
      var i = e.tag, u = i === K || i === ye;
      if (u) {
        var s = e.stateNode;
        t ? vR(a, s, t) : dR(a, s);
      } else if (i !== A) {
        var f = e.child;
        if (f !== null) {
          ES(f, t, a);
          for (var p = f.sibling; p !== null; )
            ES(p, t, a), p = p.sibling;
        }
      }
    }
    function TS(e, t, a) {
      var i = e.tag, u = i === K || i === ye;
      if (u) {
        var s = e.stateNode;
        t ? pR(a, s, t) : fR(a, s);
      } else if (i !== A) {
        var f = e.child;
        if (f !== null) {
          TS(f, t, a);
          for (var p = f.sibling; p !== null; )
            TS(p, t, a), p = p.sibling;
        }
      }
    }
    var Hn = null, ni = !1;
    function Xw(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case K: {
                Hn = i.stateNode, ni = !1;
                break e;
              }
              case F: {
                Hn = i.stateNode.containerInfo, ni = !0;
                break e;
              }
              case A: {
                Hn = i.stateNode.containerInfo, ni = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Hn === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        FC(e, t, a), Hn = null, ni = !1;
      }
      Iw(a);
    }
    function Uu(e, t, a) {
      for (var i = a.child; i !== null; )
        FC(e, t, i), i = i.sibling;
    }
    function FC(e, t, a) {
      switch (Qf(a), a.tag) {
        case K:
          An || Ic(a, t);
        case ye: {
          {
            var i = Hn, u = ni;
            Hn = null, Uu(e, t, a), Hn = i, ni = u, Hn !== null && (ni ? mR(Hn, a.stateNode) : hR(Hn, a.stateNode));
          }
          return;
        }
        case Ht: {
          Hn !== null && (ni ? yR(Hn, a.stateNode) : Ny(Hn, a.stateNode));
          return;
        }
        case A: {
          {
            var s = Hn, f = ni;
            Hn = a.stateNode.containerInfo, ni = !0, Uu(e, t, a), Hn = s, ni = f;
          }
          return;
        }
        case fe:
        case Q:
        case nt:
        case je: {
          if (!An) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, y = m;
                do {
                  var R = y, E = R.destroy, _ = R.tag;
                  E !== void 0 && ((_ & Hi) !== Pr ? sm(a, t, E) : (_ & fn) !== Pr && (As(a), a.mode & xe ? (ji(), sm(a, t, E), Bi(a)) : sm(a, t, E), tu())), y = y.next;
                } while (y !== m);
              }
            }
          }
          Uu(e, t, a);
          return;
        }
        case G: {
          if (!An) {
            Ic(a, t);
            var O = a.stateNode;
            typeof O.componentWillUnmount == "function" && CS(a, t, O);
          }
          Uu(e, t, a);
          return;
        }
        case jn: {
          Uu(e, t, a);
          return;
        }
        case Ie: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ve
          ) {
            var L = An;
            An = L || a.memoizedState !== null, Uu(e, t, a), An = L;
          } else
            Uu(e, t, a);
          break;
        }
        default: {
          Uu(e, t, a);
          return;
        }
      }
    }
    function Kw(e) {
      e.memoizedState;
    }
    function qw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && AR(s);
          }
        }
      }
    }
    function VC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new zw()), t.forEach(function(i) {
          var u = GD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), on)
              if ($c !== null && Qc !== null)
                hp(Qc, $c);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Zw(e, t, a) {
      $c = a, Qc = e, ut(t), BC(t, e), ut(t), $c = null, Qc = null;
    }
    function ri(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Xw(e, t, s);
          } catch (v) {
            St(s, t, v);
          }
        }
      var f = Lm();
      if (t.subtreeFlags & Xn)
        for (var p = t.child; p !== null; )
          ut(p), BC(p, e), p = p.sibling;
      ut(f);
    }
    function BC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case fe:
        case Q:
        case nt:
        case je: {
          if (ri(t, e), Pi(e), u & Ae) {
            try {
              ti(Hi | cn, e, e.return), zu(Hi | cn, e);
            } catch (_e) {
              St(e, e.return, _e);
            }
            if (e.mode & xe) {
              try {
                ji(), ti(fn | cn, e, e.return);
              } catch (_e) {
                St(e, e.return, _e);
              }
              Bi(e);
            } else
              try {
                ti(fn | cn, e, e.return);
              } catch (_e) {
                St(e, e.return, _e);
              }
          }
          return;
        }
        case G: {
          ri(t, e), Pi(e), u & In && i !== null && Ic(i, i.return);
          return;
        }
        case K: {
          ri(t, e), Pi(e), u & In && i !== null && Ic(i, i.return);
          {
            if (e.flags & et) {
              var s = e.stateNode;
              try {
                F0(s);
              } catch (_e) {
                St(e, e.return, _e);
              }
            }
            if (u & Ae) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, y = e.updateQueue;
                if (e.updateQueue = null, y !== null)
                  try {
                    sR(f, y, m, v, p, e);
                  } catch (_e) {
                    St(e, e.return, _e);
                  }
              }
            }
          }
          return;
        }
        case ye: {
          if (ri(t, e), Pi(e), u & Ae) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var R = e.stateNode, E = e.memoizedProps, _ = i !== null ? i.memoizedProps : E;
            try {
              cR(R, _, E);
            } catch (_e) {
              St(e, e.return, _e);
            }
          }
          return;
        }
        case F: {
          if (ri(t, e), Pi(e), u & Ae && i !== null) {
            var O = i.memoizedState;
            if (O.isDehydrated)
              try {
                UR(t.containerInfo);
              } catch (_e) {
                St(e, e.return, _e);
              }
          }
          return;
        }
        case A: {
          ri(t, e), Pi(e);
          return;
        }
        case Ee: {
          ri(t, e), Pi(e);
          var L = e.child;
          if (L.flags & Si) {
            var re = L.stateNode, Ce = L.memoizedState, ve = Ce !== null;
            if (re.isHidden = ve, ve) {
              var Xe = L.alternate !== null && L.alternate.memoizedState !== null;
              Xe || LD();
            }
          }
          if (u & Ae) {
            try {
              Kw(e);
            } catch (_e) {
              St(e, e.return, _e);
            }
            VC(e);
          }
          return;
        }
        case Ie: {
          var Qe = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ve
          ) {
            var w = An;
            An = w || Qe, ri(t, e), An = w;
          } else
            ri(t, e);
          if (Pi(e), u & Si) {
            var N = e.stateNode, D = e.memoizedState, Y = D !== null, ae = e;
            if (N.isHidden = Y, Y && !Qe && (ae.mode & Ve) !== Re) {
              ce = ae;
              for (var J = ae.child; J !== null; )
                ce = J, eD(J), J = J.sibling;
            }
            Qw(ae, Y);
          }
          return;
        }
        case vt: {
          ri(t, e), Pi(e), u & Ae && VC(e);
          return;
        }
        case jn:
          return;
        default: {
          ri(t, e), Pi(e);
          return;
        }
      }
    }
    function Pi(e) {
      var t = e.flags;
      if (t & ht) {
        try {
          Ww(e);
        } catch (a) {
          St(e, e.return, a);
        }
        e.flags &= ~ht;
      }
      t & Mr && (e.flags &= ~Mr);
    }
    function Jw(e, t, a) {
      $c = a, Qc = t, ce = e, jC(e, t, a), $c = null, Qc = null;
    }
    function jC(e, t, a) {
      for (var i = (e.mode & Ve) !== Re; ce !== null; ) {
        var u = ce, s = u.child;
        if (u.tag === Ie && i) {
          var f = u.memoizedState !== null, p = f || om;
          if (p) {
            RS(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, y = m || An, R = om, E = An;
            om = p, An = y, An && !E && (ce = u, tD(u));
            for (var _ = s; _ !== null; )
              ce = _, jC(
                _,
                // New root; bubble back up to here and stop.
                t,
                a
              ), _ = _.sibling;
            ce = u, om = R, An = E, RS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & En) !== Se && s !== null ? (s.return = u, ce = s) : RS(e, t, a);
      }
    }
    function RS(e, t, a) {
      for (; ce !== null; ) {
        var i = ce;
        if ((i.flags & En) !== Se) {
          var u = i.alternate;
          ut(i);
          try {
            Yw(t, u, i, a);
          } catch (f) {
            St(i, i.return, f);
          }
          Qt();
        }
        if (i === e) {
          ce = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ce = s;
          return;
        }
        ce = i.return;
      }
    }
    function eD(e) {
      for (; ce !== null; ) {
        var t = ce, a = t.child;
        switch (t.tag) {
          case fe:
          case Q:
          case nt:
          case je: {
            if (t.mode & xe)
              try {
                ji(), ti(fn, t, t.return);
              } finally {
                Bi(t);
              }
            else
              ti(fn, t, t.return);
            break;
          }
          case G: {
            Ic(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && CS(t, t.return, i);
            break;
          }
          case K: {
            Ic(t, t.return);
            break;
          }
          case Ie: {
            var u = t.memoizedState !== null;
            if (u) {
              PC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ce = a) : PC(e);
      }
    }
    function PC(e) {
      for (; ce !== null; ) {
        var t = ce;
        if (t === e) {
          ce = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ce = a;
          return;
        }
        ce = t.return;
      }
    }
    function tD(e) {
      for (; ce !== null; ) {
        var t = ce, a = t.child;
        if (t.tag === Ie) {
          var i = t.memoizedState !== null;
          if (i) {
            YC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ce = a) : YC(e);
      }
    }
    function YC(e) {
      for (; ce !== null; ) {
        var t = ce;
        ut(t);
        try {
          $w(t);
        } catch (i) {
          St(t, t.return, i);
        }
        if (Qt(), t === e) {
          ce = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ce = a;
          return;
        }
        ce = t.return;
      }
    }
    function nD(e, t, a, i) {
      ce = t, rD(t, e, a, i);
    }
    function rD(e, t, a, i) {
      for (; ce !== null; ) {
        var u = ce, s = u.child;
        (u.subtreeFlags & Lr) !== Se && s !== null ? (s.return = u, ce = s) : aD(e, t, a, i);
      }
    }
    function aD(e, t, a, i) {
      for (; ce !== null; ) {
        var u = ce;
        if ((u.flags & Ct) !== Se) {
          ut(u);
          try {
            iD(t, u, a, i);
          } catch (f) {
            St(u, u.return, f);
          }
          Qt();
        }
        if (u === e) {
          ce = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ce = s;
          return;
        }
        ce = u.return;
      }
    }
    function iD(e, t, a, i) {
      switch (t.tag) {
        case fe:
        case Q:
        case je: {
          if (t.mode & xe) {
            eS();
            try {
              zu(zn | cn, t);
            } finally {
              Jg(t);
            }
          } else
            zu(zn | cn, t);
          break;
        }
      }
    }
    function lD(e) {
      ce = e, uD();
    }
    function uD() {
      for (; ce !== null; ) {
        var e = ce, t = e.child;
        if ((ce.flags & Je) !== Se) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ce = u, cD(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            ce = e;
          }
        }
        (e.subtreeFlags & Lr) !== Se && t !== null ? (t.return = e, ce = t) : oD();
      }
    }
    function oD() {
      for (; ce !== null; ) {
        var e = ce;
        (e.flags & Ct) !== Se && (ut(e), sD(e), Qt());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ce = t;
          return;
        }
        ce = e.return;
      }
    }
    function sD(e) {
      switch (e.tag) {
        case fe:
        case Q:
        case je: {
          e.mode & xe ? (eS(), ti(zn | cn, e, e.return), Jg(e)) : ti(zn | cn, e, e.return);
          break;
        }
      }
    }
    function cD(e, t) {
      for (; ce !== null; ) {
        var a = ce;
        ut(a), dD(a, t), Qt();
        var i = a.child;
        i !== null ? (i.return = a, ce = i) : fD(e);
      }
    }
    function fD(e) {
      for (; ce !== null; ) {
        var t = ce, a = t.sibling, i = t.return;
        if (UC(t), t === e) {
          ce = null;
          return;
        }
        if (a !== null) {
          a.return = i, ce = a;
          return;
        }
        ce = i;
      }
    }
    function dD(e, t) {
      switch (e.tag) {
        case fe:
        case Q:
        case je: {
          e.mode & xe ? (eS(), ti(zn, e, t), Jg(e)) : ti(zn, e, t);
          break;
        }
      }
    }
    function pD(e) {
      switch (e.tag) {
        case fe:
        case Q:
        case je: {
          try {
            zu(fn | cn, e);
          } catch (a) {
            St(e, e.return, a);
          }
          break;
        }
        case G: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            St(e, e.return, a);
          }
          break;
        }
      }
    }
    function vD(e) {
      switch (e.tag) {
        case fe:
        case Q:
        case je: {
          try {
            zu(zn | cn, e);
          } catch (t) {
            St(e, e.return, t);
          }
          break;
        }
      }
    }
    function hD(e) {
      switch (e.tag) {
        case fe:
        case Q:
        case je: {
          try {
            ti(fn | cn, e, e.return);
          } catch (a) {
            St(e, e.return, a);
          }
          break;
        }
        case G: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && CS(e, e.return, t);
          break;
        }
      }
    }
    function mD(e) {
      switch (e.tag) {
        case fe:
        case Q:
        case je:
          try {
            ti(zn | cn, e, e.return);
          } catch (t) {
            St(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var ap = Symbol.for;
      ap("selector.component"), ap("selector.has_pseudo_class"), ap("selector.role"), ap("selector.test_id"), ap("selector.text");
    }
    var yD = [];
    function gD() {
      yD.forEach(function(e) {
        return e();
      });
    }
    var SD = b.ReactCurrentActQueue;
    function CD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function $C() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && SD.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var ED = Math.ceil, xS = b.ReactCurrentDispatcher, wS = b.ReactCurrentOwner, Fn = b.ReactCurrentBatchConfig, ai = b.ReactCurrentActQueue, vn = (
      /*             */
      0
    ), QC = (
      /*               */
      1
    ), Vn = (
      /*                */
      2
    ), wa = (
      /*                */
      4
    ), Ll = 0, ip = 1, Ko = 2, cm = 3, lp = 4, IC = 5, DS = 6, We = vn, mr = null, At = null, hn = U, Yi = U, kS = wu(U), mn = Ll, up = null, fm = U, op = U, dm = U, sp = null, Yr = null, bS = 0, GC = 500, WC = 1 / 0, TD = 500, Nl = null;
    function cp() {
      WC = Tt() + TD;
    }
    function XC() {
      return WC;
    }
    var pm = !1, _S = null, Gc = null, qo = !1, Au = null, fp = U, OS = [], MS = null, RD = 50, dp = 0, LS = null, NS = !1, vm = !1, xD = 50, Wc = 0, hm = null, pp = pt, mm = U, KC = !1;
    function ym() {
      return mr;
    }
    function yr() {
      return (We & (Vn | wa)) !== vn ? Tt() : (pp !== pt || (pp = Tt()), pp);
    }
    function Hu(e) {
      var t = e.mode;
      if ((t & Ve) === Re)
        return we;
      if ((We & Vn) !== vn && hn !== U)
        return Gt(hn);
      var a = Cx() !== Sx;
      if (a) {
        if (Fn.transition !== null) {
          var i = Fn.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return mm === Ge && (mm = Jf()), mm;
      }
      var u = Ar();
      if (u !== Ge)
        return u;
      var s = aR();
      return s;
    }
    function wD(e) {
      var t = e.mode;
      return (t & Ve) === Re ? we : ey();
    }
    function yn(e, t, a, i) {
      XD(), KC && g("useInsertionEffect must not schedule updates."), NS && (vm = !0), hl(e, a, i), (We & Vn) !== U && e === mr ? ZD(t) : (on && ad(e, t, a), JD(t), e === mr && ((We & Vn) === vn && (op = He(op, a)), mn === lp && Fu(e, hn)), $r(e, i), a === we && We === vn && (t.mode & Ve) === Re && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ai.isBatchingLegacy && (cp(), X0()));
    }
    function DD(e, t, a) {
      var i = e.current;
      i.lanes = t, hl(e, t, a), $r(e, a);
    }
    function kD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (We & Vn) !== vn
      );
    }
    function $r(e, t) {
      var a = e.callbackNode;
      qm(e, t);
      var i = To(e, e === mr ? hn : U);
      if (i === U) {
        a !== null && dE(a), e.callbackNode = null, e.callbackPriority = Ge;
        return;
      }
      var u = jt(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ai.current !== null && a !== BS)) {
        a == null && s !== we && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && dE(a);
      var f;
      if (u === we)
        e.tag === Du ? (ai.isBatchingLegacy !== null && (ai.didScheduleLegacyUpdate = !0), nx(JC.bind(null, e))) : W0(JC.bind(null, e)), ai.current !== null ? ai.current.push(ku) : lR(function() {
          (We & (Vn | wa)) === vn && ku();
        }), f = null;
      else {
        var p;
        switch (ko(i)) {
          case Tn:
            p = Ls;
            break;
          case sn:
            p = dr;
            break;
          case Ya:
            p = ha;
            break;
          case wo:
            p = Ei;
            break;
          default:
            p = ha;
            break;
        }
        f = jS(p, qC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function qC(e, t) {
      if (Xx(), pp = pt, mm = U, (We & (Vn | wa)) !== vn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Ul();
      if (i && e.callbackNode !== a)
        return null;
      var u = To(e, e === mr ? hn : U);
      if (u === U)
        return null;
      var s = !xo(e, u) && !_v(e, u) && !t, f = s ? HD(e, u) : Sm(e, u);
      if (f !== Ll) {
        if (f === Ko) {
          var p = qf(e);
          p !== U && (u = p, f = zS(e, p));
        }
        if (f === ip) {
          var v = up;
          throw Zo(e, U), Fu(e, u), $r(e, Tt()), v;
        }
        if (f === DS)
          Fu(e, u);
        else {
          var m = !xo(e, u), y = e.current.alternate;
          if (m && !_D(y)) {
            if (f = Sm(e, u), f === Ko) {
              var R = qf(e);
              R !== U && (u = R, f = zS(e, R));
            }
            if (f === ip) {
              var E = up;
              throw Zo(e, U), Fu(e, u), $r(e, Tt()), E;
            }
          }
          e.finishedWork = y, e.finishedLanes = u, bD(e, f, u);
        }
      }
      return $r(e, Tt()), e.callbackNode === a ? qC.bind(null, e) : null;
    }
    function zS(e, t) {
      var a = sp;
      if (Xt(e)) {
        var i = Zo(e, t);
        i.flags |= Ot, XR(e.containerInfo);
      }
      var u = Sm(e, t);
      if (u !== Ko) {
        var s = Yr;
        Yr = a, s !== null && ZC(s);
      }
      return u;
    }
    function ZC(e) {
      Yr === null ? Yr = e : Yr.push.apply(Yr, e);
    }
    function bD(e, t, a) {
      switch (t) {
        case Ll:
        case ip:
          throw new Error("Root did not complete. This is a bug in React.");
        case Ko: {
          Jo(e, Yr, Nl);
          break;
        }
        case cm: {
          if (Fu(e, a), nc(a) && // do not delay if we're inside an act() scope
          !pE()) {
            var i = bS + GC - Tt();
            if (i > 10) {
              var u = To(e, U);
              if (u !== U)
                break;
              var s = e.suspendedLanes;
              if (!vl(s, a)) {
                yr(), nd(e, s);
                break;
              }
              e.timeoutHandle = My(Jo.bind(null, e, Yr, Nl), i);
              break;
            }
          }
          Jo(e, Yr, Nl);
          break;
        }
        case lp: {
          if (Fu(e, a), bv(a))
            break;
          if (!pE()) {
            var f = kv(e, a), p = f, v = Tt() - p, m = WD(v) - v;
            if (m > 10) {
              e.timeoutHandle = My(Jo.bind(null, e, Yr, Nl), m);
              break;
            }
          }
          Jo(e, Yr, Nl);
          break;
        }
        case IC: {
          Jo(e, Yr, Nl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function _D(e) {
      for (var t = e; ; ) {
        if (t.flags & ho) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!se(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & ho && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Fu(e, t) {
      t = ou(t, dm), t = ou(t, op), td(e, t);
    }
    function JC(e) {
      if (Kx(), (We & (Vn | wa)) !== vn)
        throw new Error("Should not already be working.");
      Ul();
      var t = To(e, U);
      if (!Jn(t, we))
        return $r(e, Tt()), null;
      var a = Sm(e, t);
      if (e.tag !== Du && a === Ko) {
        var i = qf(e);
        i !== U && (t = i, a = zS(e, i));
      }
      if (a === ip) {
        var u = up;
        throw Zo(e, U), Fu(e, t), $r(e, Tt()), u;
      }
      if (a === DS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Jo(e, Yr, Nl), $r(e, Tt()), null;
    }
    function OD(e, t) {
      t !== U && (su(e, He(t, we)), $r(e, Tt()), (We & (Vn | wa)) === vn && (cp(), ku()));
    }
    function US(e, t) {
      var a = We;
      We |= QC;
      try {
        return e(t);
      } finally {
        We = a, We === vn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ai.isBatchingLegacy && (cp(), X0());
      }
    }
    function MD(e, t, a, i, u) {
      var s = Ar(), f = Fn.transition;
      try {
        return Fn.transition = null, Wt(Tn), e(t, a, i, u);
      } finally {
        Wt(s), Fn.transition = f, We === vn && cp();
      }
    }
    function zl(e) {
      Au !== null && Au.tag === Du && (We & (Vn | wa)) === vn && Ul();
      var t = We;
      We |= QC;
      var a = Fn.transition, i = Ar();
      try {
        return Fn.transition = null, Wt(Tn), e ? e() : void 0;
      } finally {
        Wt(i), Fn.transition = a, We = t, (We & (Vn | wa)) === vn && ku();
      }
    }
    function eE() {
      return (We & (Vn | wa)) !== vn;
    }
    function gm(e, t) {
      tr(kS, Yi, e), Yi = He(Yi, t);
    }
    function AS(e) {
      Yi = kS.current, er(kS, e);
    }
    function Zo(e, t) {
      e.finishedWork = null, e.finishedLanes = U;
      var a = e.timeoutHandle;
      if (a !== Ly && (e.timeoutHandle = Ly, iR(a)), At !== null)
        for (var i = At.return; i !== null; ) {
          var u = i.alternate;
          _C(u, i), i = i.return;
        }
      mr = e;
      var s = es(e.current, null);
      return At = s, hn = Yi = t, mn = Ll, up = null, fm = U, op = U, dm = U, sp = null, Yr = null, xx(), Ka.discardPendingWarnings(), s;
    }
    function tE(e, t) {
      do {
        var a = At;
        try {
          if (Dh(), M1(), Qt(), wS.current = null, a === null || a.return === null) {
            mn = ip, up = t, At = null;
            return;
          }
          if (_n && a.mode & xe && am(a, !0), ii)
            if (il(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              xv(a, i, hn);
            } else
              Hs(a, t, hn);
          tw(e, a.return, a, t, hn), iE(a);
        } catch (u) {
          t = u, At === a && a !== null ? (a = a.return, At = a) : a = At;
          continue;
        }
        return;
      } while (!0);
    }
    function nE() {
      var e = xS.current;
      return xS.current = Jh, e === null ? Jh : e;
    }
    function rE(e) {
      xS.current = e;
    }
    function LD() {
      bS = Tt();
    }
    function vp(e) {
      fm = He(e, fm);
    }
    function ND() {
      mn === Ll && (mn = cm);
    }
    function HS() {
      (mn === Ll || mn === cm || mn === Ko) && (mn = lp), mr !== null && (Ro(fm) || Ro(op)) && Fu(mr, hn);
    }
    function zD(e) {
      mn !== lp && (mn = Ko), sp === null ? sp = [e] : sp.push(e);
    }
    function UD() {
      return mn === Ll;
    }
    function Sm(e, t) {
      var a = We;
      We |= Vn;
      var i = nE();
      if (mr !== e || hn !== t) {
        if (on) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (hp(e, hn), u.clear()), ic(e, t);
        }
        Nl = id(), Zo(e, t);
      }
      aa(t);
      do
        try {
          AD();
          break;
        } catch (s) {
          tE(e, s);
        }
      while (!0);
      if (Dh(), We = a, rE(i), At !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return ru(), mr = null, hn = U, mn;
    }
    function AD() {
      for (; At !== null; )
        aE(At);
    }
    function HD(e, t) {
      var a = We;
      We |= Vn;
      var i = nE();
      if (mr !== e || hn !== t) {
        if (on) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (hp(e, hn), u.clear()), ic(e, t);
        }
        Nl = id(), cp(), Zo(e, t);
      }
      aa(t);
      do
        try {
          FD();
          break;
        } catch (s) {
          tE(e, s);
        }
      while (!0);
      return Dh(), rE(i), We = a, At !== null ? (go(), Ll) : (ru(), mr = null, hn = U, mn);
    }
    function FD() {
      for (; At !== null && !Ms(); )
        aE(At);
    }
    function aE(e) {
      var t = e.alternate;
      ut(e);
      var a;
      (e.mode & xe) !== Re ? (Zg(e), a = FS(t, e, Yi), am(e, !0)) : a = FS(t, e, Yi), Qt(), e.memoizedProps = e.pendingProps, a === null ? iE(e) : At = a, wS.current = null;
    }
    function iE(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & sr) === Se) {
          ut(t);
          var u = void 0;
          if ((t.mode & xe) === Re ? u = bC(a, t, Yi) : (Zg(t), u = bC(a, t, Yi), am(t, !1)), Qt(), u !== null) {
            At = u;
            return;
          }
        } else {
          var s = Nw(a, t);
          if (s !== null) {
            s.flags &= hv, At = s;
            return;
          }
          if ((t.mode & xe) !== Re) {
            am(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= sr, i.subtreeFlags = Se, i.deletions = null;
          else {
            mn = DS, At = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          At = v;
          return;
        }
        t = i, At = t;
      } while (t !== null);
      mn === Ll && (mn = IC);
    }
    function Jo(e, t, a) {
      var i = Ar(), u = Fn.transition;
      try {
        Fn.transition = null, Wt(Tn), VD(e, t, a, i);
      } finally {
        Fn.transition = u, Wt(i);
      }
      return null;
    }
    function VD(e, t, a, i) {
      do
        Ul();
      while (Au !== null);
      if (KD(), (We & (Vn | wa)) !== vn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (zs(s), u === null)
        return If(), null;
      if (s === U && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = U, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ge;
      var f = He(u.lanes, u.childLanes);
      rd(e, f), e === mr && (mr = null, At = null, hn = U), ((u.subtreeFlags & Lr) !== Se || (u.flags & Lr) !== Se) && (qo || (qo = !0, MS = a, jS(ha, function() {
        return Ul(), null;
      })));
      var p = (u.subtreeFlags & (eu | Xn | En | Lr)) !== Se, v = (u.flags & (eu | Xn | En | Lr)) !== Se;
      if (p || v) {
        var m = Fn.transition;
        Fn.transition = null;
        var y = Ar();
        Wt(Tn);
        var R = We;
        We |= wa, wS.current = null, Fw(e, u), nC(), Zw(e, u, s), ZT(e.containerInfo), e.current = u, wv(s), Jw(u, e, s), nu(), gv(), We = R, Wt(y), Fn.transition = m;
      } else
        e.current = u, nC();
      var E = qo;
      if (qo ? (qo = !1, Au = e, fp = s) : (Wc = 0, hm = null), f = e.pendingLanes, f === U && (Gc = null), E || sE(e.current, !1), Ba(u.stateNode, i), on && e.memoizedUpdaters.clear(), gD(), $r(e, Tt()), t !== null)
        for (var _ = e.onRecoverableError, O = 0; O < t.length; O++) {
          var L = t[O], re = L.stack, Ce = L.digest;
          _(L.value, {
            componentStack: re,
            digest: Ce
          });
        }
      if (pm) {
        pm = !1;
        var ve = _S;
        throw _S = null, ve;
      }
      return Jn(fp, we) && e.tag !== Du && Ul(), f = e.pendingLanes, Jn(f, we) ? (Wx(), e === LS ? dp++ : (dp = 0, LS = e)) : dp = 0, ku(), If(), null;
    }
    function Ul() {
      if (Au !== null) {
        var e = ko(fp), t = ny(Ya, e), a = Fn.transition, i = Ar();
        try {
          return Fn.transition = null, Wt(t), jD();
        } finally {
          Wt(i), Fn.transition = a;
        }
      }
      return !1;
    }
    function BD(e) {
      OS.push(e), qo || (qo = !0, jS(ha, function() {
        return Ul(), null;
      }));
    }
    function jD() {
      if (Au === null)
        return !1;
      var e = MS;
      MS = null;
      var t = Au, a = fp;
      if (Au = null, fp = U, (We & (Vn | wa)) !== vn)
        throw new Error("Cannot flush passive effects while already rendering.");
      NS = !0, vm = !1, Dv(a);
      var i = We;
      We |= wa, lD(t.current), nD(t, t.current, a, e);
      {
        var u = OS;
        OS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Pw(t, f);
        }
      }
      yo(), sE(t.current, !0), We = i, ku(), vm ? t === hm ? Wc++ : (Wc = 0, hm = t) : Wc = 0, NS = !1, vm = !1, Ri(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function lE(e) {
      return Gc !== null && Gc.has(e);
    }
    function PD(e) {
      Gc === null ? Gc = /* @__PURE__ */ new Set([e]) : Gc.add(e);
    }
    function YD(e) {
      pm || (pm = !0, _S = e);
    }
    var $D = YD;
    function uE(e, t, a) {
      var i = Wo(a, t), u = aC(e, i, we), s = _u(e, u, we), f = yr();
      s !== null && (hl(s, we, f), $r(s, f));
    }
    function St(e, t, a) {
      if (Uw(a), mp(!1), e.tag === F) {
        uE(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === F) {
          uE(i, e, a);
          return;
        } else if (i.tag === G) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !lE(s)) {
            var f = Wo(a, e), p = aS(i, f, we), v = _u(i, p, we), m = yr();
            v !== null && (hl(v, we, m), $r(v, m));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function QD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = yr();
      nd(e, a), ek(e), mr === e && vl(hn, a) && (mn === lp || mn === cm && nc(hn) && Tt() - bS < GC ? Zo(e, U) : dm = He(dm, a)), $r(e, u);
    }
    function oE(e, t) {
      t === Ge && (t = wD(e));
      var a = yr(), i = jr(e, t);
      i !== null && (hl(i, t, a), $r(i, a));
    }
    function ID(e) {
      var t = e.memoizedState, a = Ge;
      t !== null && (a = t.retryLane), oE(e, a);
    }
    function GD(e, t) {
      var a = Ge, i;
      switch (e.tag) {
        case Ee:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case vt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), oE(e, a);
    }
    function WD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : ED(e / 1960) * 1960;
    }
    function XD() {
      if (dp > RD)
        throw dp = 0, LS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Wc > xD && (Wc = 0, hm = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function KD() {
      Ka.flushLegacyContextWarning(), Ka.flushPendingUnsafeLifecycleWarnings();
    }
    function sE(e, t) {
      ut(e), Cm(e, Wn, hD), t && Cm(e, al, mD), Cm(e, Wn, pD), t && Cm(e, al, vD), Qt();
    }
    function Cm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Se ? i = i.child : ((i.flags & t) !== Se && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Em = null;
    function cE(e) {
      {
        if ((We & Vn) !== vn || !(e.mode & Ve))
          return;
        var t = e.tag;
        if (t !== be && t !== F && t !== G && t !== fe && t !== Q && t !== nt && t !== je)
          return;
        var a = Ue(e) || "ReactComponent";
        if (Em !== null) {
          if (Em.has(a))
            return;
          Em.add(a);
        } else
          Em = /* @__PURE__ */ new Set([a]);
        var i = Vt;
        try {
          ut(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? ut(e) : Qt();
        }
      }
    }
    var FS;
    {
      var qD = null;
      FS = function(e, t, a) {
        var i = gE(qD, t);
        try {
          return RC(e, t, a);
        } catch (s) {
          if (cx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Dh(), M1(), _C(e, t), gE(t, i), t.mode & xe && Zg(t), rl(null, RC, null, e, t, a), Xm()) {
            var u = Uf();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var fE = !1, VS;
    VS = /* @__PURE__ */ new Set();
    function ZD(e) {
      if (Dr && !Qx())
        switch (e.tag) {
          case fe:
          case Q:
          case je: {
            var t = At && Ue(At) || "Unknown", a = t;
            if (!VS.has(a)) {
              VS.add(a);
              var i = Ue(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case G: {
            fE || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), fE = !0);
            break;
          }
        }
    }
    function hp(e, t) {
      if (on) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          ad(e, i, t);
        });
      }
    }
    var BS = {};
    function jS(e, t) {
      {
        var a = ai.current;
        return a !== null ? (a.push(t), BS) : Os(e, t);
      }
    }
    function dE(e) {
      if (e !== BS)
        return yv(e);
    }
    function pE() {
      return ai.current !== null;
    }
    function JD(e) {
      {
        if (e.mode & Ve) {
          if (!$C())
            return;
        } else if (!CD() || We !== vn || e.tag !== fe && e.tag !== Q && e.tag !== je)
          return;
        if (ai.current === null) {
          var t = Vt;
          try {
            ut(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ue(e));
          } finally {
            t ? ut(e) : Qt();
          }
        }
      }
    }
    function ek(e) {
      e.tag !== Du && $C() && ai.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function mp(e) {
      KC = e;
    }
    var Da = null, Xc = null, tk = function(e) {
      Da = e;
    };
    function Kc(e) {
      {
        if (Da === null)
          return e;
        var t = Da(e);
        return t === void 0 ? e : t.current;
      }
    }
    function PS(e) {
      return Kc(e);
    }
    function YS(e) {
      {
        if (Da === null)
          return e;
        var t = Da(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Kc(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Bl,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function vE(e, t) {
      {
        if (Da === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case G: {
            typeof i == "function" && (u = !0);
            break;
          }
          case fe: {
            (typeof i == "function" || s === On) && (u = !0);
            break;
          }
          case Q: {
            (s === Bl || s === On) && (u = !0);
            break;
          }
          case nt:
          case je: {
            (s === jl || s === On) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Da(a);
          if (f !== void 0 && f === Da(i))
            return !0;
        }
        return !1;
      }
    }
    function hE(e) {
      {
        if (Da === null || typeof WeakSet != "function")
          return;
        Xc === null && (Xc = /* @__PURE__ */ new WeakSet()), Xc.add(e);
      }
    }
    var nk = function(e, t) {
      {
        if (Da === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Ul(), zl(function() {
          $S(e.current, i, a);
        });
      }
    }, rk = function(e, t) {
      {
        if (e.context !== la)
          return;
        Ul(), zl(function() {
          yp(t, e, null, null);
        });
      }
    };
    function $S(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case fe:
          case je:
          case G:
            v = p;
            break;
          case Q:
            v = p.render;
            break;
        }
        if (Da === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, y = !1;
        if (v !== null) {
          var R = Da(v);
          R !== void 0 && (a.has(R) ? y = !0 : t.has(R) && (f === G ? y = !0 : m = !0));
        }
        if (Xc !== null && (Xc.has(e) || i !== null && Xc.has(i)) && (y = !0), y && (e._debugNeedsRemount = !0), y || m) {
          var E = jr(e, we);
          E !== null && yn(E, e, we, pt);
        }
        u !== null && !y && $S(u, t, a), s !== null && $S(s, t, a);
      }
    }
    var ak = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return QS(e.current, i, a), a;
      }
    };
    function QS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case fe:
          case je:
          case G:
            p = f;
            break;
          case Q:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? ik(e, a) : i !== null && QS(i, t, a), u !== null && QS(u, t, a);
      }
    }
    function ik(e, t) {
      {
        var a = lk(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case K:
              t.add(i.stateNode);
              return;
            case A:
              t.add(i.stateNode.containerInfo);
              return;
            case F:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function lk(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === K)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var IS;
    {
      IS = !1;
      try {
        var mE = Object.preventExtensions({});
      } catch {
        IS = !0;
      }
    }
    function uk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Se, this.subtreeFlags = Se, this.deletions = null, this.lanes = U, this.childLanes = U, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !IS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ua = function(e, t, a, i) {
      return new uk(e, t, a, i);
    };
    function GS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ok(e) {
      return typeof e == "function" && !GS(e) && e.defaultProps === void 0;
    }
    function sk(e) {
      if (typeof e == "function")
        return GS(e) ? G : fe;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Bl)
          return Q;
        if (t === jl)
          return nt;
      }
      return be;
    }
    function es(e, t) {
      var a = e.alternate;
      a === null ? (a = ua(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Se, a.subtreeFlags = Se, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & un, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case be:
        case fe:
        case je:
          a.type = Kc(e.type);
          break;
        case G:
          a.type = PS(e.type);
          break;
        case Q:
          a.type = YS(e.type);
          break;
      }
      return a;
    }
    function ck(e, t) {
      e.flags &= un | ht;
      var a = e.alternate;
      if (a === null)
        e.childLanes = U, e.lanes = t, e.child = null, e.subtreeFlags = Se, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Se, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function fk(e, t, a) {
      var i;
      return e === gh ? (i = Ve, t === !0 && (i |= Rt, i |= zr)) : i = Re, on && (i |= xe), ua(F, null, null, i);
    }
    function WS(e, t, a, i, u, s) {
      var f = be, p = e;
      if (typeof e == "function")
        GS(e) ? (f = G, p = PS(p)) : p = Kc(p);
      else if (typeof e == "string")
        f = K;
      else
        e:
          switch (e) {
            case Oa:
              return Vu(a.children, u, s, t);
            case Vl:
              f = Fe, u |= Rt, (u & Ve) !== Re && (u |= zr);
              break;
            case $u:
              return dk(a, u, s, t);
            case da:
              return pk(a, u, s, t);
            case Qu:
              return vk(a, u, s, t);
            case nf:
              return yE(a, u, s, t);
            case Dp:
            case xp:
            case km:
            case bm:
            case wp:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ef:
                    f = V;
                    break e;
                  case tf:
                    f = ne;
                    break e;
                  case Bl:
                    f = Q, p = YS(p);
                    break e;
                  case jl:
                    f = nt;
                    break e;
                  case On:
                    f = bn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var m = i ? Ue(i) : null;
                m && (v += `

Check the render method of \`` + m + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var y = ua(f, a, t, u);
      return y.elementType = e, y.type = p, y.lanes = s, y._debugOwner = i, y;
    }
    function XS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = WS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Vu(e, t, a, i) {
      var u = ua(Oe, e, i, t);
      return u.lanes = a, u;
    }
    function dk(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ua(me, e, i, t | xe);
      return u.elementType = $u, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function pk(e, t, a, i) {
      var u = ua(Ee, e, i, t);
      return u.elementType = da, u.lanes = a, u;
    }
    function vk(e, t, a, i) {
      var u = ua(vt, e, i, t);
      return u.elementType = Qu, u.lanes = a, u;
    }
    function yE(e, t, a, i) {
      var u = ua(Ie, e, i, t);
      u.elementType = nf, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function KS(e, t, a) {
      var i = ua(ye, e, null, t);
      return i.lanes = a, i;
    }
    function hk() {
      var e = ua(K, null, null, Re);
      return e.elementType = "DELETED", e;
    }
    function mk(e) {
      var t = ua(Ht, null, null, Re);
      return t.stateNode = e, t;
    }
    function qS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ua(A, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function gE(e, t) {
      return e === null && (e = ua(be, null, null, Re)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function yk(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ly, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ge, this.eventTimes = ac(U), this.expirationTimes = ac(pt), this.pendingLanes = U, this.suspendedLanes = U, this.pingedLanes = U, this.expiredLanes = U, this.mutableReadLanes = U, this.finishedLanes = U, this.entangledLanes = U, this.entanglements = ac(U), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < yt; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case gh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Du:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function SE(e, t, a, i, u, s, f, p, v, m) {
      var y = new yk(e, t, a, p, v), R = fk(t, s);
      y.current = R, R.stateNode = y;
      {
        var E = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        R.memoizedState = E;
      }
      return ig(R), y;
    }
    var ZS = "18.2.0";
    function gk(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Hl(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: qr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var JS, e0;
    JS = !1, e0 = {};
    function CE(e) {
      if (!e)
        return la;
      var t = _r(e), a = tx(t);
      if (t.tag === G) {
        var i = t.type;
        if (Ai(i))
          return I0(t, i, a);
      }
      return a;
    }
    function Sk(e, t) {
      {
        var a = _r(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Nr(a);
        if (u === null)
          return null;
        if (u.mode & Rt) {
          var s = Ue(a) || "Component";
          if (!e0[s]) {
            e0[s] = !0;
            var f = Vt;
            try {
              ut(u), a.mode & Rt ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? ut(f) : Qt();
            }
          }
        }
        return u.stateNode;
      }
    }
    function EE(e, t, a, i, u, s, f, p) {
      var v = !1, m = null;
      return SE(e, t, v, m, a, i, u, s, f);
    }
    function TE(e, t, a, i, u, s, f, p, v, m) {
      var y = !0, R = SE(a, i, y, e, u, s, f, p, v);
      R.context = CE(null);
      var E = R.current, _ = yr(), O = Hu(E), L = Ol(_, O);
      return L.callback = t ?? null, _u(E, L, O), DD(R, O, _), R;
    }
    function yp(e, t, a, i) {
      Sv(t, e);
      var u = t.current, s = yr(), f = Hu(u);
      ll(f);
      var p = CE(a);
      t.context === null ? t.context = p : t.pendingContext = p, Dr && Vt !== null && !JS && (JS = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ue(Vt) || "Unknown"));
      var v = Ol(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = _u(u, v, f);
      return m !== null && (yn(m, u, f, s), Mh(m, u, f)), f;
    }
    function Tm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case K:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Ck(e) {
      switch (e.tag) {
        case F: {
          var t = e.stateNode;
          if (Xt(t)) {
            var a = Zm(t);
            OD(t, a);
          }
          break;
        }
        case Ee: {
          zl(function() {
            var u = jr(e, we);
            if (u !== null) {
              var s = yr();
              yn(u, e, we, s);
            }
          });
          var i = we;
          t0(e, i);
          break;
        }
      }
    }
    function RE(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Mv(a.retryLane, t));
    }
    function t0(e, t) {
      RE(e, t);
      var a = e.alternate;
      a && RE(a, t);
    }
    function Ek(e) {
      if (e.tag === Ee) {
        var t = au, a = jr(e, t);
        if (a !== null) {
          var i = yr();
          yn(a, e, t, i);
        }
        t0(e, t);
      }
    }
    function Tk(e) {
      if (e.tag === Ee) {
        var t = Hu(e), a = jr(e, t);
        if (a !== null) {
          var i = yr();
          yn(a, e, t, i);
        }
        t0(e, t);
      }
    }
    function xE(e) {
      var t = mv(e);
      return t === null ? null : t.stateNode;
    }
    var wE = function(e) {
      return null;
    };
    function Rk(e) {
      return wE(e);
    }
    var DE = function(e) {
      return !1;
    };
    function xk(e) {
      return DE(e);
    }
    var kE = null, bE = null, _E = null, OE = null, ME = null, LE = null, NE = null, zE = null, UE = null;
    {
      var AE = function(e, t, a) {
        var i = t[a], u = Zt(e) ? e.slice() : Ye({}, e);
        return a + 1 === t.length ? (Zt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = AE(e[i], t, a + 1), u);
      }, HE = function(e, t) {
        return AE(e, t, 0);
      }, FE = function(e, t, a, i) {
        var u = t[i], s = Zt(e) ? e.slice() : Ye({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Zt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = FE(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, VE = function(e, t, a) {
        if (t.length !== a.length) {
          he("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              he("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return FE(e, t, a, 0);
      }, BE = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Zt(e) ? e.slice() : Ye({}, e);
        return s[u] = BE(e[u], t, a + 1, i), s;
      }, jE = function(e, t, a) {
        return BE(e, t, 0, a);
      }, n0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      kE = function(e, t, a, i) {
        var u = n0(e, t);
        if (u !== null) {
          var s = jE(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ye({}, e.memoizedProps);
          var f = jr(e, we);
          f !== null && yn(f, e, we, pt);
        }
      }, bE = function(e, t, a) {
        var i = n0(e, t);
        if (i !== null) {
          var u = HE(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ye({}, e.memoizedProps);
          var s = jr(e, we);
          s !== null && yn(s, e, we, pt);
        }
      }, _E = function(e, t, a, i) {
        var u = n0(e, t);
        if (u !== null) {
          var s = VE(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ye({}, e.memoizedProps);
          var f = jr(e, we);
          f !== null && yn(f, e, we, pt);
        }
      }, OE = function(e, t, a) {
        e.pendingProps = jE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = jr(e, we);
        i !== null && yn(i, e, we, pt);
      }, ME = function(e, t) {
        e.pendingProps = HE(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = jr(e, we);
        a !== null && yn(a, e, we, pt);
      }, LE = function(e, t, a) {
        e.pendingProps = VE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = jr(e, we);
        i !== null && yn(i, e, we, pt);
      }, NE = function(e) {
        var t = jr(e, we);
        t !== null && yn(t, e, we, pt);
      }, zE = function(e) {
        wE = e;
      }, UE = function(e) {
        DE = e;
      };
    }
    function wk(e) {
      var t = Nr(e);
      return t === null ? null : t.stateNode;
    }
    function Dk(e) {
      return null;
    }
    function kk() {
      return Vt;
    }
    function bk(e) {
      var t = e.findFiberByHostInstance, a = b.ReactCurrentDispatcher;
      return $f({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: kE,
        overrideHookStateDeletePath: bE,
        overrideHookStateRenamePath: _E,
        overrideProps: OE,
        overridePropsDeletePath: ME,
        overridePropsRenamePath: LE,
        setErrorHandler: zE,
        setSuspenseHandler: UE,
        scheduleUpdate: NE,
        currentDispatcherRef: a,
        findHostInstanceByFiber: wk,
        findFiberByHostInstance: t || Dk,
        // React Refresh
        findHostInstancesForRefresh: ak,
        scheduleRefresh: nk,
        scheduleRoot: rk,
        setRefreshHandler: tk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: kk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: ZS
      });
    }
    var PE = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function r0(e) {
      this._internalRoot = e;
    }
    Rm.prototype.render = r0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : xm(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Bt) {
          var i = xE(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      yp(e, t, null, null);
    }, Rm.prototype.unmount = r0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        eE() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), zl(function() {
          yp(null, e, null, null);
        }), j0(t);
      }
    };
    function _k(e, t) {
      if (!xm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      YE(e);
      var a = !1, i = !1, u = "", s = PE;
      t != null && (t.hydrate ? he("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Fl && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = EE(e, gh, null, a, i, u, s);
      fh(f.current, e);
      var p = e.nodeType === Bt ? e.parentNode : e;
      return wd(p), new r0(f);
    }
    function Rm(e) {
      this._internalRoot = e;
    }
    function Ok(e) {
      e && Vv(e);
    }
    Rm.prototype.unstable_scheduleHydration = Ok;
    function Mk(e, t, a) {
      if (!xm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      YE(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = PE;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = TE(t, null, e, gh, i, s, f, p, v);
      if (fh(m.current, e), wd(e), u)
        for (var y = 0; y < u.length; y++) {
          var R = u[y];
          Vx(m, R);
        }
      return new Rm(m);
    }
    function xm(e) {
      return !!(e && (e.nodeType === Qn || e.nodeType === ta || e.nodeType === qi || !lt));
    }
    function gp(e) {
      return !!(e && (e.nodeType === Qn || e.nodeType === ta || e.nodeType === qi || e.nodeType === Bt && e.nodeValue === " react-mount-point-unstable "));
    }
    function YE(e) {
      e.nodeType === Qn && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Ad(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Lk = b.ReactCurrentOwner, $E;
    $E = function(e) {
      if (e._reactRootContainer && e.nodeType !== Bt) {
        var t = xE(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = a0(e), u = !!(i && xu(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qn && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function a0(e) {
      return e ? e.nodeType === ta ? e.documentElement : e.firstChild : null;
    }
    function QE() {
    }
    function Nk(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var E = Tm(f);
            s.call(E);
          };
        }
        var f = TE(
          t,
          i,
          e,
          Du,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          QE
        );
        e._reactRootContainer = f, fh(f.current, e);
        var p = e.nodeType === Bt ? e.parentNode : e;
        return wd(p), zl(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var m = i;
          i = function() {
            var E = Tm(y);
            m.call(E);
          };
        }
        var y = EE(
          e,
          Du,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          QE
        );
        e._reactRootContainer = y, fh(y.current, e);
        var R = e.nodeType === Bt ? e.parentNode : e;
        return wd(R), zl(function() {
          yp(t, y, a, i);
        }), y;
      }
    }
    function zk(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function wm(e, t, a, i, u) {
      $E(a), zk(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Nk(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Tm(f);
            p.call(v);
          };
        }
        yp(t, f, e, u);
      }
      return Tm(f);
    }
    function Uk(e) {
      {
        var t = Lk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ft(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Qn ? e : Sk(e, "findDOMNode");
    }
    function Ak(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Ad(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return wm(null, e, t, !0, a);
    }
    function Hk(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Ad(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return wm(null, e, t, !1, a);
    }
    function Fk(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !gp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !vo(e))
        throw new Error("parentComponent must be a valid React Component");
      return wm(e, t, a, !1, i);
    }
    function Vk(e) {
      if (!gp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Ad(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = a0(e), i = a && !xu(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return zl(function() {
          wm(null, null, e, !1, function() {
            e._reactRootContainer = null, j0(e);
          });
        }), !0;
      } else {
        {
          var u = a0(e), s = !!(u && xu(u)), f = e.nodeType === Qn && gp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    le(Ck), Nv(Ek), _o(Tk), ud(Ar), Uv(Do), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), pv(PT), ws(US, MD, zl);
    function Bk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!xm(t))
        throw new Error("Target container is not a DOM element.");
      return gk(e, t, null, a);
    }
    function jk(e, t, a, i) {
      return Fk(e, t, a, i);
    }
    var i0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [xu, kc, dh, xs, co, US]
    };
    function Pk(e, t) {
      return i0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), _k(e, t);
    }
    function Yk(e, t, a) {
      return i0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Mk(e, t, a);
    }
    function $k(e) {
      return eE() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), zl(e);
    }
    var Qk = bk({
      findFiberByHostInstance: Vo,
      bundleType: 1,
      version: ZS,
      rendererPackageName: "react-dom"
    });
    if (!Qk && gn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var IE = window.location.protocol;
      /^(https?|file):$/.test(IE) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (IE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = i0, Qr.createPortal = Bk, Qr.createRoot = Pk, Qr.findDOMNode = Uk, Qr.flushSync = $k, Qr.hydrate = Ak, Qr.hydrateRoot = Yk, Qr.render = Hk, Qr.unmountComponentAtNode = Vk, Qr.unstable_batchedUpdates = US, Qr.unstable_renderSubtreeIntoContainer = jk, Qr.version = ZS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Qr;
}
var Ir = {};
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KE;
function ab() {
  if (KE)
    return Ir;
  KE = 1;
  var z = qE, $ = Cp;
  function b(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ue = /* @__PURE__ */ new Set(), De = {};
  function he(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (De[n] = r, n = 0; n < r.length; n++)
      ue.add(r[n]);
  }
  var Be = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fe = Object.prototype.hasOwnProperty, G = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, be = {}, F = {};
  function A(n) {
    return fe.call(F, n) ? !0 : fe.call(be, n) ? !1 : G.test(n) ? F[n] = !0 : (be[n] = !0, !1);
  }
  function K(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ye(n, r, l, o) {
    if (r === null || typeof r > "u" || K(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function Oe(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var Fe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Fe[n] = new Oe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Fe[r] = new Oe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Fe[n] = new Oe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Fe[n] = new Oe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Fe[n] = new Oe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Fe[n] = new Oe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Fe[n] = new Oe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Fe[n] = new Oe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Fe[n] = new Oe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ne = /[\-:]([a-z])/g;
  function V(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ne,
      V
    );
    Fe[r] = new Oe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ne, V);
    Fe[r] = new Oe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ne, V);
    Fe[r] = new Oe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Fe[n] = new Oe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Fe.xlinkHref = new Oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Fe[n] = new Oe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Q(n, r, l, o) {
    var c = Fe.hasOwnProperty(r) ? Fe[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ye(r, l, c, o) && (l = null), o || c === null ? A(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var me = z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ee = Symbol.for("react.element"), nt = Symbol.for("react.portal"), je = Symbol.for("react.fragment"), bn = Symbol.for("react.strict_mode"), ir = Symbol.for("react.profiler"), Ht = Symbol.for("react.provider"), vt = Symbol.for("react.context"), jn = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), it = Symbol.for("react.suspense_list"), Cr = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), Er = Symbol.for("react.offscreen"), q = Symbol.iterator;
  function ke(n) {
    return n === null || typeof n != "object" ? null : (n = q && n[q] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ie = Object.assign, rt;
  function lt(n) {
    if (rt === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        rt = r && r[1] || "";
      }
    return `
` + rt + n;
  }
  var Pn = !1;
  function lr(n, r) {
    if (!n || Pn)
      return "";
    Pn = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (M) {
            var o = M;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (M) {
            o = M;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (M) {
          o = M;
        }
        n();
      }
    } catch (M) {
      if (M && o && typeof M.stack == "string") {
        for (var c = M.stack.split(`
`), d = o.stack.split(`
`), h = c.length - 1, S = d.length - 1; 1 <= h && 0 <= S && c[h] !== d[S]; )
          S--;
        for (; 1 <= h && 0 <= S; h--, S--)
          if (c[h] !== d[S]) {
            if (h !== 1 || S !== 1)
              do
                if (h--, S--, 0 > S || c[h] !== d[S]) {
                  var C = `
` + c[h].replace(" at new ", " at ");
                  return n.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", n.displayName)), C;
                }
              while (1 <= h && 0 <= S);
            break;
          }
      }
    } finally {
      Pn = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? lt(n) : "";
  }
  function ii(n) {
    switch (n.tag) {
      case 5:
        return lt(n.type);
      case 16:
        return lt("Lazy");
      case 13:
        return lt("Suspense");
      case 19:
        return lt("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = lr(n.type, !1), n;
      case 11:
        return n = lr(n.type.render, !1), n;
      case 1:
        return n = lr(n.type, !0), n;
      default:
        return "";
    }
  }
  function _n(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case je:
        return "Fragment";
      case nt:
        return "Portal";
      case ir:
        return "Profiler";
      case bn:
        return "StrictMode";
      case Ie:
        return "Suspense";
      case it:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case vt:
          return (n.displayName || "Context") + ".Consumer";
        case Ht:
          return (n._context.displayName || "Context") + ".Provider";
        case jn:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Cr:
          return r = n.displayName || null, r !== null ? r : _n(n.type) || "Memo";
        case Dt:
          r = n._payload, n = n._init;
          try {
            return _n(n(r));
          } catch {
          }
      }
    return null;
  }
  function li(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return _n(r);
      case 8:
        return r === bn ? "StrictMode" : "Mode";
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
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function Gr(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function sa(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ju(n) {
    var r = sa(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(h) {
        o = "" + h, d.call(this, h);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(h) {
        o = "" + h;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Tr(n) {
    n._valueTracker || (n._valueTracker = ju(n));
  }
  function ba(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = sa(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function gn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Yn(n, r) {
    var l = r.checked;
    return ie({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Rr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Gr(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Wr(n, r) {
    r = r.checked, r != null && Q(n, "checked", r, !1);
  }
  function ur(n, r) {
    Wr(n, r);
    var l = Gr(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Hl(n, r.type, l) : r.hasOwnProperty("defaultValue") && Hl(n, r.type, Gr(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function _a(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Hl(n, r, l) {
    (r !== "number" || gn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Qi = Array.isArray;
  function ui(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Gr(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ii(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(b(91));
    return ie({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Xr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(b(92));
        if (Qi(l)) {
          if (1 < l.length)
            throw Error(b(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Gr(l) };
  }
  function oi(n, r) {
    var l = Gr(r.value), o = Gr(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function ca(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function si(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function $n(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? si(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Kr, Pu = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Kr = Kr || document.createElement("div"), Kr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Kr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ci(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Z = {
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
    strokeWidth: !0
  }, Te = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Z).forEach(function(n) {
    Te.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Z[r] = Z[n];
    });
  });
  function Pe(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Z.hasOwnProperty(n) && Z[n] ? ("" + r).trim() : r + "px";
  }
  function ct(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = Pe(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Nt = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Sn(n, r) {
    if (r) {
      if (Nt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(b(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(b(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(b(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(b(62));
    }
  }
  function $t(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
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
  var xr = null;
  function kt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var fa = null, Ft = null, bt = null;
  function Ep(n) {
    if (n = vo(n)) {
      if (typeof fa != "function")
        throw Error(b(280));
      var r = n.stateNode;
      r && (r = Se(r), fa(n.stateNode, n.type, r));
    }
  }
  function ns(n) {
    Ft ? bt ? bt.push(n) : bt = [n] : Ft = n;
  }
  function rs() {
    if (Ft) {
      var n = Ft, r = bt;
      if (bt = Ft = null, Ep(n), r)
        for (n = 0; n < r.length; n++)
          Ep(r[n]);
    }
  }
  function Tp(n, r) {
    return n(r);
  }
  function Rp() {
  }
  var as = !1;
  function Jc(n, r, l) {
    if (as)
      return n(r, l);
    as = !0;
    try {
      return Tp(n, r, l);
    } finally {
      as = !1, (Ft !== null || bt !== null) && (Rp(), rs());
    }
  }
  function Yu(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = Se(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
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
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(b(231, r, typeof l));
    return l;
  }
  var is = !1;
  if (Be)
    try {
      var Gi = {};
      Object.defineProperty(Gi, "passive", { get: function() {
        is = !0;
      } }), window.addEventListener("test", Gi, Gi), window.removeEventListener("test", Gi, Gi);
    } catch {
      is = !1;
    }
  function Fl(n, r, l, o, c, d, h, S, C) {
    var M = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, M);
    } catch (j) {
      this.onError(j);
    }
  }
  var qr = !1, Oa = null, Vl = !1, $u = null, ef = { onError: function(n) {
    qr = !0, Oa = n;
  } };
  function tf(n, r, l, o, c, d, h, S, C) {
    qr = !1, Oa = null, Fl.apply(ef, arguments);
  }
  function Bl(n, r, l, o, c, d, h, S, C) {
    if (tf.apply(this, arguments), qr) {
      if (qr) {
        var M = Oa;
        qr = !1, Oa = null;
      } else
        throw Error(b(198));
      Vl || (Vl = !0, $u = M);
    }
  }
  function da(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Qu(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function jl(n) {
    if (da(n) !== n)
      throw Error(b(188));
  }
  function On(n) {
    var r = n.alternate;
    if (!r) {
      if (r = da(n), r === null)
        throw Error(b(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return jl(c), n;
          if (d === o)
            return jl(c), r;
          d = d.sibling;
        }
        throw Error(b(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var h = !1, S = c.child; S; ) {
          if (S === l) {
            h = !0, l = c, o = d;
            break;
          }
          if (S === o) {
            h = !0, o = c, l = d;
            break;
          }
          S = S.sibling;
        }
        if (!h) {
          for (S = d.child; S; ) {
            if (S === l) {
              h = !0, l = d, o = c;
              break;
            }
            if (S === o) {
              h = !0, o = d, l = c;
              break;
            }
            S = S.sibling;
          }
          if (!h)
            throw Error(b(189));
        }
      }
      if (l.alternate !== o)
        throw Error(b(190));
    }
    if (l.tag !== 3)
      throw Error(b(188));
    return l.stateNode.current === l ? n : r;
  }
  function xp(n) {
    return n = On(n), n !== null ? wp(n) : null;
  }
  function wp(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = wp(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var nf = $.unstable_scheduleCallback, Dp = $.unstable_cancelCallback, km = $.unstable_shouldYield, bm = $.unstable_requestPaint, _t = $.unstable_now, _m = $.unstable_getCurrentPriorityLevel, Ma = $.unstable_ImmediatePriority, Ye = $.unstable_UserBlockingPriority, fi = $.unstable_NormalPriority, kp = $.unstable_LowPriority, rf = $.unstable_IdlePriority, Iu = null, Zr = null;
  function bp(n) {
    if (Zr && typeof Zr.onCommitFiberRoot == "function")
      try {
        Zr.onCommitFiberRoot(Iu, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var wr = Math.clz32 ? Math.clz32 : Om, _p = Math.log, Op = Math.LN2;
  function Om(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (_p(n) / Op | 0) | 0;
  }
  var ls = 64, Pl = 4194304;
  function Wi(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Jr(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, h = l & 268435455;
    if (h !== 0) {
      var S = h & ~c;
      S !== 0 ? o = Wi(S) : (d &= h, d !== 0 && (o = Wi(d)));
    } else
      h = l & ~c, h !== 0 ? o = Wi(h) : d !== 0 && (o = Wi(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - wr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function af(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function us(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var h = 31 - wr(d), S = 1 << h, C = c[h];
      C === -1 ? (!(S & l) || S & o) && (c[h] = af(S, r)) : C <= r && (n.expiredLanes |= S), d &= ~S;
    }
  }
  function lf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function os() {
    var n = ls;
    return ls <<= 1, !(ls & 4194240) && (ls = 64), n;
  }
  function uf(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function Xi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - wr(r), n[r] = l;
  }
  function Mm(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - wr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Gu(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - wr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var at = 0;
  function of(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Mp, ss, ft, Lp, sf, Ue = !1, Wu = [], Vt = null, Dr = null, kr = null, Xu = /* @__PURE__ */ new Map(), Qt = /* @__PURE__ */ new Map(), ut = [], Lm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ea(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Vt = null;
        break;
      case "dragenter":
      case "dragleave":
        Dr = null;
        break;
      case "mouseover":
      case "mouseout":
        kr = null;
        break;
      case "pointerover":
      case "pointerout":
        Xu.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qt.delete(r.pointerId);
    }
  }
  function Cn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = vo(r), r !== null && ss(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function di(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Vt = Cn(Vt, n, r, l, o, c), !0;
      case "dragenter":
        return Dr = Cn(Dr, n, r, l, o, c), !0;
      case "mouseover":
        return kr = Cn(kr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Xu.set(d, Cn(Xu.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Qt.set(d, Cn(Qt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Np(n) {
    var r = _r(n.target);
    if (r !== null) {
      var l = da(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Qu(l), r !== null) {
            n.blockedOn = r, sf(n.priority, function() {
              ft(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Yl(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ds(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        xr = o, l.target.dispatchEvent(o), xr = null;
      } else
        return r = vo(l), r !== null && ss(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function cf(n, r, l) {
    Yl(n) && l.delete(r);
  }
  function zp() {
    Ue = !1, Vt !== null && Yl(Vt) && (Vt = null), Dr !== null && Yl(Dr) && (Dr = null), kr !== null && Yl(kr) && (kr = null), Xu.forEach(cf), Qt.forEach(cf);
  }
  function Ku(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ue || (Ue = !0, $.unstable_scheduleCallback($.unstable_NormalPriority, zp)));
  }
  function qu(n) {
    function r(c) {
      return Ku(c, n);
    }
    if (0 < Wu.length) {
      Ku(Wu[0], n);
      for (var l = 1; l < Wu.length; l++) {
        var o = Wu[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Vt !== null && Ku(Vt, n), Dr !== null && Ku(Dr, n), kr !== null && Ku(kr, n), Xu.forEach(r), Qt.forEach(r), l = 0; l < ut.length; l++)
      o = ut[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < ut.length && (l = ut[0], l.blockedOn === null); )
      Np(l), l.blockedOn === null && ut.shift();
  }
  var $l = me.ReactCurrentBatchConfig, Ki = !0;
  function Up(n, r, l, o) {
    var c = at, d = $l.transition;
    $l.transition = null;
    try {
      at = 1, fs(n, r, l, o);
    } finally {
      at = c, $l.transition = d;
    }
  }
  function cs(n, r, l, o) {
    var c = at, d = $l.transition;
    $l.transition = null;
    try {
      at = 4, fs(n, r, l, o);
    } finally {
      at = c, $l.transition = d;
    }
  }
  function fs(n, r, l, o) {
    if (Ki) {
      var c = ds(n, r, l, o);
      if (c === null)
        xs(n, r, o, Zu, l), ea(n, o);
      else if (di(c, n, r, l, o))
        o.stopPropagation();
      else if (ea(n, o), r & 4 && -1 < Lm.indexOf(n)) {
        for (; c !== null; ) {
          var d = vo(c);
          if (d !== null && Mp(d), d = ds(n, r, l, o), d === null && xs(n, r, o, Zu, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        xs(n, r, o, null, l);
    }
  }
  var Zu = null;
  function ds(n, r, l, o) {
    if (Zu = null, n = kt(o), n = _r(n), n !== null)
      if (r = da(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Qu(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Zu = n, null;
  }
  function ff(n) {
    switch (n) {
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
        switch (_m()) {
          case Ma:
            return 1;
          case Ye:
            return 4;
          case fi:
          case kp:
            return 16;
          case rf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var La = null, Ju = null, eo = null;
  function df() {
    if (eo)
      return eo;
    var n, r = Ju, l = r.length, o, c = "value" in La ? La.value : La.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var h = l - n;
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++)
      ;
    return eo = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function Ql(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function to() {
    return !0;
  }
  function Ap() {
    return !1;
  }
  function or(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var S in n)
        n.hasOwnProperty(S) && (l = n[S], this[S] = l ? l(d) : d[S]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? to : Ap, this.isPropagationStopped = Ap, this;
    }
    return ie(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = to);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = to);
    }, persist: function() {
    }, isPersistent: to }), r;
  }
  var pi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ps = or(pi), Il = ie({}, pi, { view: 0, detail: 0 }), Hp = or(Il), vs, pf, no, Zt = ie({}, Il, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== no && (no && n.type === "mousemove" ? (vs = n.screenX - no.screenX, pf = n.screenY - no.screenY) : pf = vs = 0, no = n), vs);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : pf;
  } }), hs = or(Zt), Fp = ie({}, Zt, { dataTransfer: 0 }), Vp = or(Fp), Nm = ie({}, Il, { relatedTarget: 0 }), vi = or(Nm), vf = ie({}, pi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Bp = or(vf), zm = ie({}, pi, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Um = or(zm), Am = ie({}, pi, { data: 0 }), hf = or(Am), mf = {
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
    MozPrintableKey: "Unidentified"
  }, jp = {
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
    224: "Meta"
  }, Pp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Yp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Pp[n]) ? !!r[n] : !1;
  }
  function yf() {
    return Yp;
  }
  var Na = ie({}, Il, { key: function(n) {
    if (n.key) {
      var r = mf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Ql(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? jp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yf, charCode: function(n) {
    return n.type === "keypress" ? Ql(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Ql(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Hm = or(Na), gf = ie({}, Zt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ms = or(gf), Sf = ie({}, Il, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yf }), Fm = or(Sf), ys = ie({}, pi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), $p = or(ys), Qn = ie({}, Zt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), za = or(Qn), Bt = [9, 13, 27, 32], ta = Be && "CompositionEvent" in window, qi = null;
  Be && "documentMode" in document && (qi = document.documentMode);
  var gs = Be && "TextEvent" in window && !qi, Qp = Be && (!ta || qi && 8 < qi && 11 >= qi), Gl = " ", Ip = !1;
  function Gp(n, r) {
    switch (n) {
      case "keyup":
        return Bt.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ss(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Wl = !1;
  function Vm(n, r) {
    switch (n) {
      case "compositionend":
        return Ss(r);
      case "keypress":
        return r.which !== 32 ? null : (Ip = !0, Gl);
      case "textInput":
        return n = r.data, n === Gl && Ip ? null : n;
      default:
        return null;
    }
  }
  function Bm(n, r) {
    if (Wl)
      return n === "compositionend" || !ta && Gp(n, r) ? (n = df(), eo = Ju = La = null, Wl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Qp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Wp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Xp(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Wp[n.type] : r === "textarea";
  }
  function Kp(n, r, l, o) {
    ns(o), r = co(r, "onChange"), 0 < r.length && (l = new ps("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var ro = null, Xl = null;
  function Kl(n) {
    Rs(n, 0);
  }
  function ql(n) {
    var r = Jl(n);
    if (ba(r))
      return n;
  }
  function qp(n, r) {
    if (n === "change")
      return r;
  }
  var Cf = !1;
  if (Be) {
    var Ef;
    if (Be) {
      var Tf = "oninput" in document;
      if (!Tf) {
        var Zp = document.createElement("div");
        Zp.setAttribute("oninput", "return;"), Tf = typeof Zp.oninput == "function";
      }
      Ef = Tf;
    } else
      Ef = !1;
    Cf = Ef && (!document.documentMode || 9 < document.documentMode);
  }
  function Jp() {
    ro && (ro.detachEvent("onpropertychange", ev), Xl = ro = null);
  }
  function ev(n) {
    if (n.propertyName === "value" && ql(Xl)) {
      var r = [];
      Kp(r, Xl, n, kt(n)), Jc(Kl, r);
    }
  }
  function jm(n, r, l) {
    n === "focusin" ? (Jp(), ro = r, Xl = l, ro.attachEvent("onpropertychange", ev)) : n === "focusout" && Jp();
  }
  function Pm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return ql(Xl);
  }
  function Ym(n, r) {
    if (n === "click")
      return ql(r);
  }
  function tv(n, r) {
    if (n === "input" || n === "change")
      return ql(r);
  }
  function $m(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var br = typeof Object.is == "function" ? Object.is : $m;
  function ao(n, r) {
    if (br(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!fe.call(r, c) || !br(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function nv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function rv(n, r) {
    var l = nv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = nv(l);
    }
  }
  function av(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? av(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Cs() {
    for (var n = window, r = gn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = gn(n.document);
    }
    return r;
  }
  function Ua(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Es(n) {
    var r = Cs(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && av(l.ownerDocument.documentElement, l)) {
      if (o !== null && Ua(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = rv(l, d);
          var h = rv(
            l,
            o
          );
          c && h && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== h.node || n.focusOffset !== h.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(h.node, h.offset)) : (r.setEnd(h.node, h.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var iv = Be && "documentMode" in document && 11 >= document.documentMode, na = null, Rf = null, io = null, xf = !1;
  function lv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    xf || na == null || na !== gn(o) || (o = na, "selectionStart" in o && Ua(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), io && ao(io, o) || (io = o, o = co(Rf, "onSelect"), 0 < o.length && (r = new ps("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = na)));
  }
  function Ts(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Zi = { animationend: Ts("Animation", "AnimationEnd"), animationiteration: Ts("Animation", "AnimationIteration"), animationstart: Ts("Animation", "AnimationStart"), transitionend: Ts("Transition", "TransitionEnd") }, wf = {}, Df = {};
  Be && (Df = document.createElement("div").style, "AnimationEvent" in window || (delete Zi.animationend.animation, delete Zi.animationiteration.animation, delete Zi.animationstart.animation), "TransitionEvent" in window || delete Zi.transitionend.transition);
  function Jt(n) {
    if (wf[n])
      return wf[n];
    if (!Zi[n])
      return n;
    var r = Zi[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Df)
        return wf[n] = r[l];
    return n;
  }
  var kf = Jt("animationend"), uv = Jt("animationiteration"), ov = Jt("animationstart"), sv = Jt("transitionend"), cv = /* @__PURE__ */ new Map(), fv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Aa(n, r) {
    cv.set(n, r), he(r, [n]);
  }
  for (var lo = 0; lo < fv.length; lo++) {
    var Ji = fv[lo], Qm = Ji.toLowerCase(), uo = Ji[0].toUpperCase() + Ji.slice(1);
    Aa(Qm, "on" + uo);
  }
  Aa(kf, "onAnimationEnd"), Aa(uv, "onAnimationIteration"), Aa(ov, "onAnimationStart"), Aa("dblclick", "onDoubleClick"), Aa("focusin", "onFocus"), Aa("focusout", "onBlur"), Aa(sv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), he("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), he("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), he("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), he("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), he("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), he("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var oo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Im = new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));
  function dv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Bl(o, r, void 0, n), n.currentTarget = null;
  }
  function Rs(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var h = o.length - 1; 0 <= h; h--) {
            var S = o[h], C = S.instance, M = S.currentTarget;
            if (S = S.listener, C !== d && c.isPropagationStopped())
              break e;
            dv(c, S, M), d = C;
          }
        else
          for (h = 0; h < o.length; h++) {
            if (S = o[h], C = S.instance, M = S.currentTarget, S = S.listener, C !== d && c.isPropagationStopped())
              break e;
            dv(c, S, M), d = C;
          }
      }
    }
    if (Vl)
      throw n = $u, Vl = !1, $u = null, n;
  }
  function dt(n, r) {
    var l = r[zf];
    l === void 0 && (l = r[zf] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (pv(r, n, 2, !1), l.add(o));
  }
  function hi(n, r, l) {
    var o = 0;
    r && (o |= 4), pv(l, n, o, r);
  }
  var Ha = "_reactListening" + Math.random().toString(36).slice(2);
  function Zl(n) {
    if (!n[Ha]) {
      n[Ha] = !0, ue.forEach(function(l) {
        l !== "selectionchange" && (Im.has(l) || hi(l, !1, n), hi(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ha] || (r[Ha] = !0, hi("selectionchange", !1, r));
    }
  }
  function pv(n, r, l, o) {
    switch (ff(r)) {
      case 1:
        var c = Up;
        break;
      case 4:
        c = cs;
        break;
      default:
        c = fs;
    }
    l = c.bind(null, r, l, n), c = void 0, !is || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function xs(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var h = o.tag;
          if (h === 3 || h === 4) {
            var S = o.stateNode.containerInfo;
            if (S === c || S.nodeType === 8 && S.parentNode === c)
              break;
            if (h === 4)
              for (h = o.return; h !== null; ) {
                var C = h.tag;
                if ((C === 3 || C === 4) && (C = h.stateNode.containerInfo, C === c || C.nodeType === 8 && C.parentNode === c))
                  return;
                h = h.return;
              }
            for (; S !== null; ) {
              if (h = _r(S), h === null)
                return;
              if (C = h.tag, C === 5 || C === 6) {
                o = d = h;
                continue e;
              }
              S = S.parentNode;
            }
          }
          o = o.return;
        }
    Jc(function() {
      var M = d, j = kt(l), P = [];
      e: {
        var B = cv.get(n);
        if (B !== void 0) {
          var ee = ps, oe = n;
          switch (n) {
            case "keypress":
              if (Ql(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              ee = Hm;
              break;
            case "focusin":
              oe = "focus", ee = vi;
              break;
            case "focusout":
              oe = "blur", ee = vi;
              break;
            case "beforeblur":
            case "afterblur":
              ee = vi;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ee = hs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ee = Vp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = Fm;
              break;
            case kf:
            case uv:
            case ov:
              ee = Bp;
              break;
            case sv:
              ee = $p;
              break;
            case "scroll":
              ee = Hp;
              break;
            case "wheel":
              ee = za;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = Um;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = ms;
          }
          var de = (r & 4) !== 0, Ut = !de && n === "scroll", x = de ? B !== null ? B + "Capture" : null : B;
          de = [];
          for (var T = M, k; T !== null; ) {
            k = T;
            var I = k.stateNode;
            if (k.tag === 5 && I !== null && (k = I, x !== null && (I = Yu(T, x), I != null && de.push(so(T, I, k)))), Ut)
              break;
            T = T.return;
          }
          0 < de.length && (B = new ee(B, oe, null, l, j), P.push({ event: B, listeners: de }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (B = n === "mouseover" || n === "pointerover", ee = n === "mouseout" || n === "pointerout", B && l !== xr && (oe = l.relatedTarget || l.fromElement) && (_r(oe) || oe[Fa]))
            break e;
          if ((ee || B) && (B = j.window === j ? j : (B = j.ownerDocument) ? B.defaultView || B.parentWindow : window, ee ? (oe = l.relatedTarget || l.toElement, ee = M, oe = oe ? _r(oe) : null, oe !== null && (Ut = da(oe), oe !== Ut || oe.tag !== 5 && oe.tag !== 6) && (oe = null)) : (ee = null, oe = M), ee !== oe)) {
            if (de = hs, I = "onMouseLeave", x = "onMouseEnter", T = "mouse", (n === "pointerout" || n === "pointerover") && (de = ms, I = "onPointerLeave", x = "onPointerEnter", T = "pointer"), Ut = ee == null ? B : Jl(ee), k = oe == null ? B : Jl(oe), B = new de(I, T + "leave", ee, l, j), B.target = Ut, B.relatedTarget = k, I = null, _r(j) === M && (de = new de(x, T + "enter", oe, l, j), de.target = k, de.relatedTarget = Ut, I = de), Ut = I, ee && oe)
              t: {
                for (de = ee, x = oe, T = 0, k = de; k; k = el(k))
                  T++;
                for (k = 0, I = x; I; I = el(I))
                  k++;
                for (; 0 < T - k; )
                  de = el(de), T--;
                for (; 0 < k - T; )
                  x = el(x), k--;
                for (; T--; ) {
                  if (de === x || x !== null && de === x.alternate)
                    break t;
                  de = el(de), x = el(x);
                }
                de = null;
              }
            else
              de = null;
            ee !== null && bf(P, B, ee, de, !1), oe !== null && Ut !== null && bf(P, Ut, oe, de, !0);
          }
        }
        e: {
          if (B = M ? Jl(M) : window, ee = B.nodeName && B.nodeName.toLowerCase(), ee === "select" || ee === "input" && B.type === "file")
            var pe = qp;
          else if (Xp(B))
            if (Cf)
              pe = tv;
            else {
              pe = Pm;
              var se = jm;
            }
          else
            (ee = B.nodeName) && ee.toLowerCase() === "input" && (B.type === "checkbox" || B.type === "radio") && (pe = Ym);
          if (pe && (pe = pe(n, M))) {
            Kp(P, pe, l, j);
            break e;
          }
          se && se(n, B, M), n === "focusout" && (se = B._wrapperState) && se.controlled && B.type === "number" && Hl(B, "number", B.value);
        }
        switch (se = M ? Jl(M) : window, n) {
          case "focusin":
            (Xp(se) || se.contentEditable === "true") && (na = se, Rf = M, io = null);
            break;
          case "focusout":
            io = Rf = na = null;
            break;
          case "mousedown":
            xf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            xf = !1, lv(P, l, j);
            break;
          case "selectionchange":
            if (iv)
              break;
          case "keydown":
          case "keyup":
            lv(P, l, j);
        }
        var ge;
        if (ta)
          e: {
            switch (n) {
              case "compositionstart":
                var Le = "onCompositionStart";
                break e;
              case "compositionend":
                Le = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Le = "onCompositionUpdate";
                break e;
            }
            Le = void 0;
          }
        else
          Wl ? Gp(n, l) && (Le = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Le = "onCompositionStart");
        Le && (Qp && l.locale !== "ko" && (Wl || Le !== "onCompositionStart" ? Le === "onCompositionEnd" && Wl && (ge = df()) : (La = j, Ju = "value" in La ? La.value : La.textContent, Wl = !0)), se = co(M, Le), 0 < se.length && (Le = new hf(Le, n, null, l, j), P.push({ event: Le, listeners: se }), ge ? Le.data = ge : (ge = Ss(l), ge !== null && (Le.data = ge)))), (ge = gs ? Vm(n, l) : Bm(n, l)) && (M = co(M, "onBeforeInput"), 0 < M.length && (j = new hf("onBeforeInput", "beforeinput", null, l, j), P.push({ event: j, listeners: M }), j.data = ge));
      }
      Rs(P, r);
    });
  }
  function so(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function co(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Yu(n, l), d != null && o.unshift(so(n, d, c)), d = Yu(n, r), d != null && o.push(so(n, d, c))), n = n.return;
    }
    return o;
  }
  function el(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function bf(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var S = l, C = S.alternate, M = S.stateNode;
      if (C !== null && C === o)
        break;
      S.tag === 5 && M !== null && (S = M, c ? (C = Yu(l, d), C != null && h.unshift(so(l, C, S))) : c || (C = Yu(l, d), C != null && h.push(so(l, C, S)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var _f = /\r\n?/g, Gm = /\u0000|\uFFFD/g;
  function Of(n) {
    return (typeof n == "string" ? n : "" + n).replace(_f, `
`).replace(Gm, "");
  }
  function ws(n, r, l) {
    if (r = Of(r), Of(n) !== r && l)
      throw Error(b(425));
  }
  function Ds() {
  }
  var Mf = null, tl = null;
  function fo(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var nl = typeof setTimeout == "function" ? setTimeout : void 0, vv = typeof clearTimeout == "function" ? clearTimeout : void 0, Lf = typeof Promise == "function" ? Promise : void 0, Nf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lf < "u" ? function(n) {
    return Lf.resolve(null).then(n).catch(Wm);
  } : nl;
  function Wm(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function mi(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), qu(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    qu(r);
  }
  function ra(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function po(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var yi = Math.random().toString(36).slice(2), pa = "__reactFiber$" + yi, rl = "__reactProps$" + yi, Fa = "__reactContainer$" + yi, zf = "__reactEvents$" + yi, Xm = "__reactListeners$" + yi, Uf = "__reactHandles$" + yi;
  function _r(n) {
    var r = n[pa];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Fa] || l[pa]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = po(n); n !== null; ) {
            if (l = n[pa])
              return l;
            n = po(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function vo(n) {
    return n = n[pa] || n[Fa], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Jl(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(b(33));
  }
  function Se(n) {
    return n[rl] || null;
  }
  var gi = [], ht = -1;
  function Ae(n) {
    return { current: n };
  }
  function Je(n) {
    0 > ht || (n.current = gi[ht], gi[ht] = null, ht--);
  }
  function et(n, r) {
    ht++, gi[ht] = n.current, n.current = r;
  }
  var va = {}, Me = Ae(va), Ot = Ae(!1), In = va;
  function Or(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return va;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Ct(n) {
    return n = n.childContextTypes, n != null;
  }
  function Mr() {
    Je(Ot), Je(Me);
  }
  function Si(n, r, l) {
    if (Me.current !== va)
      throw Error(b(168));
    et(Me, r), et(Ot, l);
  }
  function ho(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(b(108, li(n) || "Unknown", c));
    return ie({}, l, o);
  }
  function ks(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || va, In = Me.current, et(Me, n), et(Ot, Ot.current), !0;
  }
  function hv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(b(169));
    l ? (n = ho(n, r, In), o.__reactInternalMemoizedMergedChildContext = n, Je(Ot), Je(Me), et(Me, n)) : Je(Ot), et(Ot, l);
  }
  var sr = null, en = !1, mo = !1;
  function Af(n) {
    sr === null ? sr = [n] : sr.push(n);
  }
  function Hf(n) {
    en = !0, Af(n);
  }
  function Gn() {
    if (!mo && sr !== null) {
      mo = !0;
      var n = 0, r = at;
      try {
        var l = sr;
        for (at = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        sr = null, en = !1;
      } catch (c) {
        throw sr !== null && (sr = sr.slice(n + 1)), nf(Ma, Gn), c;
      } finally {
        at = r, mo = !1;
      }
    }
    return null;
  }
  var Ci = [], Wn = 0, al = null, eu = 0, Xn = [], En = 0, Lr = null, un = 1, Va = "";
  function cr(n, r) {
    Ci[Wn++] = eu, Ci[Wn++] = al, al = n, eu = r;
  }
  function Ff(n, r, l) {
    Xn[En++] = un, Xn[En++] = Va, Xn[En++] = Lr, Lr = n;
    var o = un;
    n = Va;
    var c = 32 - wr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - wr(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, un = 1 << 32 - wr(r) + c | l << c | o, Va = d + n;
    } else
      un = 1 << d | l << c | o, Va = n;
  }
  function bs(n) {
    n.return !== null && (cr(n, 1), Ff(n, 1, 0));
  }
  function Vf(n) {
    for (; n === al; )
      al = Ci[--Wn], Ci[Wn] = null, eu = Ci[--Wn], Ci[Wn] = null;
    for (; n === Lr; )
      Lr = Xn[--En], Xn[En] = null, Va = Xn[--En], Xn[En] = null, un = Xn[--En], Xn[En] = null;
  }
  var fr = null, Kn = null, mt = !1, Nr = null;
  function Bf(n, r) {
    var l = Vr(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function mv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, fr = n, Kn = ra(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, fr = n, Kn = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Lr !== null ? { id: un, overflow: Va } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Vr(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, fr = n, Kn = null, !0) : !1;
      default:
        return !1;
    }
  }
  function _s(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Os(n) {
    if (mt) {
      var r = Kn;
      if (r) {
        var l = r;
        if (!mv(n, r)) {
          if (_s(n))
            throw Error(b(418));
          r = ra(l.nextSibling);
          var o = fr;
          r && mv(n, r) ? Bf(o, l) : (n.flags = n.flags & -4097 | 2, mt = !1, fr = n);
        }
      } else {
        if (_s(n))
          throw Error(b(418));
        n.flags = n.flags & -4097 | 2, mt = !1, fr = n;
      }
    }
  }
  function yv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    fr = n;
  }
  function Ms(n) {
    if (n !== fr)
      return !1;
    if (!mt)
      return yv(n), mt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !fo(n.type, n.memoizedProps)), r && (r = Kn)) {
      if (_s(n))
        throw gv(), Error(b(418));
      for (; r; )
        Bf(n, r), r = ra(r.nextSibling);
    }
    if (yv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(b(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Kn = ra(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Kn = null;
      }
    } else
      Kn = fr ? ra(n.stateNode.nextSibling) : null;
    return !0;
  }
  function gv() {
    for (var n = Kn; n; )
      n = ra(n.nextSibling);
  }
  function Tt() {
    Kn = fr = null, mt = !1;
  }
  function jf(n) {
    Nr === null ? Nr = [n] : Nr.push(n);
  }
  var Ls = me.ReactCurrentBatchConfig;
  function dr(n, r) {
    if (n && n.defaultProps) {
      r = ie({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var ha = Ae(null), Ns = null, Ei = null, Pf = null;
  function Yf() {
    Pf = Ei = Ns = null;
  }
  function Ti(n) {
    var r = ha.current;
    Je(ha), n._currentValue = r;
  }
  function tn(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function W(n, r) {
    Ns = n, Pf = Ei = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (jt = !0), n.firstContext = null);
  }
  function zt(n) {
    var r = n._currentValue;
    if (Pf !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Ei === null) {
        if (Ns === null)
          throw Error(b(308));
        Ei = n, Ns.dependencies = { lanes: 0, firstContext: n };
      } else
        Ei = Ei.next = n;
    return r;
  }
  var on = null;
  function $f(n) {
    on === null ? on = [n] : on.push(n);
  }
  function Sv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, $f(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ba(n, o);
  }
  function Ba(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ri = !1;
  function Qf(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function It(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ja(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function xi(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, $e & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ba(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, $f(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ba(n, l);
  }
  function zs(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Gu(n, l);
    }
  }
  function If(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var h = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = h : d = d.next = h, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function wi(n, r, l, o) {
    var c = n.updateQueue;
    Ri = !1;
    var d = c.firstBaseUpdate, h = c.lastBaseUpdate, S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var C = S, M = C.next;
      C.next = null, h === null ? d = M : h.next = M, h = C;
      var j = n.alternate;
      j !== null && (j = j.updateQueue, S = j.lastBaseUpdate, S !== h && (S === null ? j.firstBaseUpdate = M : S.next = M, j.lastBaseUpdate = C));
    }
    if (d !== null) {
      var P = c.baseState;
      h = 0, j = M = C = null, S = d;
      do {
        var B = S.lane, ee = S.eventTime;
        if ((o & B) === B) {
          j !== null && (j = j.next = {
            eventTime: ee,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var oe = n, de = S;
            switch (B = r, ee = l, de.tag) {
              case 1:
                if (oe = de.payload, typeof oe == "function") {
                  P = oe.call(ee, P, B);
                  break e;
                }
                P = oe;
                break e;
              case 3:
                oe.flags = oe.flags & -65537 | 128;
              case 0:
                if (oe = de.payload, B = typeof oe == "function" ? oe.call(ee, P, B) : oe, B == null)
                  break e;
                P = ie({}, P, B);
                break e;
              case 2:
                Ri = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (n.flags |= 64, B = c.effects, B === null ? c.effects = [S] : B.push(S));
        } else
          ee = { eventTime: ee, lane: B, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, j === null ? (M = j = ee, C = P) : j = j.next = ee, h |= B;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null)
            break;
          B = S, S = B.next, B.next = null, c.lastBaseUpdate = B, c.shared.pending = null;
        }
      } while (!0);
      if (j === null && (C = P), c.baseState = C, c.firstBaseUpdate = M, c.lastBaseUpdate = j, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Qa |= h, n.lanes = h, n.memoizedState = P;
    }
  }
  function il(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(b(191, c));
          c.call(o);
        }
      }
  }
  var Cv = new z.Component().refs;
  function Gf(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ie({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Us = { isMounted: function(n) {
    return (n = n._reactInternals) ? da(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = wn(), c = Pt(n), d = ja(o, c);
    d.payload = r, l != null && (d.callback = l), r = xi(n, d, c), r !== null && (Dn(r, n, c, o), zs(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = wn(), c = Pt(n), d = ja(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = xi(n, d, c), r !== null && (Dn(r, n, c, o), zs(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = wn(), o = Pt(n), c = ja(l, o);
    c.tag = 2, r != null && (c.callback = r), r = xi(n, c, o), r !== null && (Dn(r, n, o, l), zs(r, n, o));
  } };
  function Ev(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !ao(l, o) || !ao(c, d) : !0;
  }
  function Tv(n, r, l) {
    var o = !1, c = va, d = r.contextType;
    return typeof d == "object" && d !== null ? d = zt(d) : (c = Ct(r) ? In : Me.current, o = r.contextTypes, d = (o = o != null) ? Or(n, c) : va), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Us, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Rv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Us.enqueueReplaceState(r, r.state, null);
  }
  function As(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = Cv, Qf(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = zt(d) : (d = Ct(r) ? In : Me.current, c.context = Or(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Gf(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Us.enqueueReplaceState(c, c.state, null), wi(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function tu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(b(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(b(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var S = c.refs;
          S === Cv && (S = c.refs = {}), h === null ? delete S[d] : S[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(b(284));
      if (!l._owner)
        throw Error(b(290, n));
    }
    return n;
  }
  function Hs(n, r) {
    throw n = Object.prototype.toString.call(r), Error(b(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function xv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function wv(n) {
    function r(x, T) {
      if (n) {
        var k = x.deletions;
        k === null ? (x.deletions = [T], x.flags |= 16) : k.push(T);
      }
    }
    function l(x, T) {
      if (!n)
        return null;
      for (; T !== null; )
        r(x, T), T = T.sibling;
      return null;
    }
    function o(x, T) {
      for (x = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? x.set(T.key, T) : x.set(T.index, T), T = T.sibling;
      return x;
    }
    function c(x, T) {
      return x = Ni(x, T), x.index = 0, x.sibling = null, x;
    }
    function d(x, T, k) {
      return x.index = k, n ? (k = x.alternate, k !== null ? (k = k.index, k < T ? (x.flags |= 2, T) : k) : (x.flags |= 2, T)) : (x.flags |= 1048576, T);
    }
    function h(x) {
      return n && x.alternate === null && (x.flags |= 2), x;
    }
    function S(x, T, k, I) {
      return T === null || T.tag !== 6 ? (T = Uo(k, x.mode, I), T.return = x, T) : (T = c(T, k), T.return = x, T);
    }
    function C(x, T, k, I) {
      var pe = k.type;
      return pe === je ? j(x, T, k.props.children, I, k.key) : T !== null && (T.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === Dt && xv(pe) === T.type) ? (I = c(T, k.props), I.ref = tu(x, T, k), I.return = x, I) : (I = hc(k.type, k.key, k.props, null, x.mode, I), I.ref = tu(x, T, k), I.return = x, I);
    }
    function M(x, T, k, I) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== k.containerInfo || T.stateNode.implementation !== k.implementation ? (T = xl(k, x.mode, I), T.return = x, T) : (T = c(T, k.children || []), T.return = x, T);
    }
    function j(x, T, k, I, pe) {
      return T === null || T.tag !== 7 ? (T = Rl(k, x.mode, I, pe), T.return = x, T) : (T = c(T, k), T.return = x, T);
    }
    function P(x, T, k) {
      if (typeof T == "string" && T !== "" || typeof T == "number")
        return T = Uo("" + T, x.mode, k), T.return = x, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Ee:
            return k = hc(T.type, T.key, T.props, null, x.mode, k), k.ref = tu(x, null, T), k.return = x, k;
          case nt:
            return T = xl(T, x.mode, k), T.return = x, T;
          case Dt:
            var I = T._init;
            return P(x, I(T._payload), k);
        }
        if (Qi(T) || ke(T))
          return T = Rl(T, x.mode, k, null), T.return = x, T;
        Hs(x, T);
      }
      return null;
    }
    function B(x, T, k, I) {
      var pe = T !== null ? T.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number")
        return pe !== null ? null : S(x, T, "" + k, I);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Ee:
            return k.key === pe ? C(x, T, k, I) : null;
          case nt:
            return k.key === pe ? M(x, T, k, I) : null;
          case Dt:
            return pe = k._init, B(
              x,
              T,
              pe(k._payload),
              I
            );
        }
        if (Qi(k) || ke(k))
          return pe !== null ? null : j(x, T, k, I, null);
        Hs(x, k);
      }
      return null;
    }
    function ee(x, T, k, I, pe) {
      if (typeof I == "string" && I !== "" || typeof I == "number")
        return x = x.get(k) || null, S(T, x, "" + I, pe);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case Ee:
            return x = x.get(I.key === null ? k : I.key) || null, C(T, x, I, pe);
          case nt:
            return x = x.get(I.key === null ? k : I.key) || null, M(T, x, I, pe);
          case Dt:
            var se = I._init;
            return ee(x, T, k, se(I._payload), pe);
        }
        if (Qi(I) || ke(I))
          return x = x.get(k) || null, j(T, x, I, pe, null);
        Hs(T, I);
      }
      return null;
    }
    function oe(x, T, k, I) {
      for (var pe = null, se = null, ge = T, Le = T = 0, an = null; ge !== null && Le < k.length; Le++) {
        ge.index > Le ? (an = ge, ge = null) : an = ge.sibling;
        var Ke = B(x, ge, k[Le], I);
        if (Ke === null) {
          ge === null && (ge = an);
          break;
        }
        n && ge && Ke.alternate === null && r(x, ge), T = d(Ke, T, Le), se === null ? pe = Ke : se.sibling = Ke, se = Ke, ge = an;
      }
      if (Le === k.length)
        return l(x, ge), mt && cr(x, Le), pe;
      if (ge === null) {
        for (; Le < k.length; Le++)
          ge = P(x, k[Le], I), ge !== null && (T = d(ge, T, Le), se === null ? pe = ge : se.sibling = ge, se = ge);
        return mt && cr(x, Le), pe;
      }
      for (ge = o(x, ge); Le < k.length; Le++)
        an = ee(ge, x, Le, k[Le], I), an !== null && (n && an.alternate !== null && ge.delete(an.key === null ? Le : an.key), T = d(an, T, Le), se === null ? pe = an : se.sibling = an, se = an);
      return n && ge.forEach(function(zi) {
        return r(x, zi);
      }), mt && cr(x, Le), pe;
    }
    function de(x, T, k, I) {
      var pe = ke(k);
      if (typeof pe != "function")
        throw Error(b(150));
      if (k = pe.call(k), k == null)
        throw Error(b(151));
      for (var se = pe = null, ge = T, Le = T = 0, an = null, Ke = k.next(); ge !== null && !Ke.done; Le++, Ke = k.next()) {
        ge.index > Le ? (an = ge, ge = null) : an = ge.sibling;
        var zi = B(x, ge, Ke.value, I);
        if (zi === null) {
          ge === null && (ge = an);
          break;
        }
        n && ge && zi.alternate === null && r(x, ge), T = d(zi, T, Le), se === null ? pe = zi : se.sibling = zi, se = zi, ge = an;
      }
      if (Ke.done)
        return l(
          x,
          ge
        ), mt && cr(x, Le), pe;
      if (ge === null) {
        for (; !Ke.done; Le++, Ke = k.next())
          Ke = P(x, Ke.value, I), Ke !== null && (T = d(Ke, T, Le), se === null ? pe = Ke : se.sibling = Ke, se = Ke);
        return mt && cr(x, Le), pe;
      }
      for (ge = o(x, ge); !Ke.done; Le++, Ke = k.next())
        Ke = ee(ge, x, Le, Ke.value, I), Ke !== null && (n && Ke.alternate !== null && ge.delete(Ke.key === null ? Le : Ke.key), T = d(Ke, T, Le), se === null ? pe = Ke : se.sibling = Ke, se = Ke);
      return n && ge.forEach(function(hy) {
        return r(x, hy);
      }), mt && cr(x, Le), pe;
    }
    function Ut(x, T, k, I) {
      if (typeof k == "object" && k !== null && k.type === je && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Ee:
            e: {
              for (var pe = k.key, se = T; se !== null; ) {
                if (se.key === pe) {
                  if (pe = k.type, pe === je) {
                    if (se.tag === 7) {
                      l(x, se.sibling), T = c(se, k.props.children), T.return = x, x = T;
                      break e;
                    }
                  } else if (se.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === Dt && xv(pe) === se.type) {
                    l(x, se.sibling), T = c(se, k.props), T.ref = tu(x, se, k), T.return = x, x = T;
                    break e;
                  }
                  l(x, se);
                  break;
                } else
                  r(x, se);
                se = se.sibling;
              }
              k.type === je ? (T = Rl(k.props.children, x.mode, I, k.key), T.return = x, x = T) : (I = hc(k.type, k.key, k.props, null, x.mode, I), I.ref = tu(x, T, k), I.return = x, x = I);
            }
            return h(x);
          case nt:
            e: {
              for (se = k.key; T !== null; ) {
                if (T.key === se)
                  if (T.tag === 4 && T.stateNode.containerInfo === k.containerInfo && T.stateNode.implementation === k.implementation) {
                    l(x, T.sibling), T = c(T, k.children || []), T.return = x, x = T;
                    break e;
                  } else {
                    l(x, T);
                    break;
                  }
                else
                  r(x, T);
                T = T.sibling;
              }
              T = xl(k, x.mode, I), T.return = x, x = T;
            }
            return h(x);
          case Dt:
            return se = k._init, Ut(x, T, se(k._payload), I);
        }
        if (Qi(k))
          return oe(x, T, k, I);
        if (ke(k))
          return de(x, T, k, I);
        Hs(x, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, T !== null && T.tag === 6 ? (l(x, T.sibling), T = c(T, k), T.return = x, x = T) : (l(x, T), T = Uo(k, x.mode, I), T.return = x, x = T), h(x)) : l(x, T);
    }
    return Ut;
  }
  var nu = wv(!0), Dv = wv(!1), yo = {}, aa = Ae(yo), go = Ae(yo), ru = Ae(yo);
  function ll(n) {
    if (n === yo)
      throw Error(b(174));
    return n;
  }
  function Wf(n, r) {
    switch (et(ru, r), et(go, n), et(aa, yo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : $n(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = $n(r, n);
    }
    Je(aa), et(aa, r);
  }
  function Di() {
    Je(aa), Je(go), Je(ru);
  }
  function Re(n) {
    ll(ru.current);
    var r = ll(aa.current), l = $n(r, n.type);
    r !== l && (et(go, n), et(aa, l));
  }
  function Ve(n) {
    go.current === n && (Je(aa), Je(go));
  }
  var xe = Ae(0);
  function Rt(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var zr = [];
  function Fs() {
    for (var n = 0; n < zr.length; n++)
      zr[n]._workInProgressVersionPrimary = null;
    zr.length = 0;
  }
  var Vs = me.ReactCurrentDispatcher, Xf = me.ReactCurrentBatchConfig, ul = 0, yt = null, U = null, Ge = null, we = !1, ma = !1, pr = 0, ol = 0;
  function gt() {
    throw Error(b(321));
  }
  function sl(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!br(n[l], r[l]))
        return !1;
    return !0;
  }
  function ki(n, r, l, o, c, d) {
    if (ul = d, yt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Vs.current = n === null || n.memoizedState === null ? qm : Zm, n = l(o, c), ma) {
      d = 0;
      do {
        if (ma = !1, pr = 0, 25 <= d)
          throw Error(b(301));
        d += 1, Ge = U = null, r.updateQueue = null, Vs.current = qf, n = l(o, c);
      } while (ma);
    }
    if (Vs.current = tc, r = U !== null && U.next !== null, ul = 0, Ge = U = yt = null, we = !1, r)
      throw Error(b(300));
    return n;
  }
  function cl() {
    var n = pr !== 0;
    return pr = 0, n;
  }
  function Ur() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ge === null ? yt.memoizedState = Ge = n : Ge = Ge.next = n, Ge;
  }
  function qn() {
    if (U === null) {
      var n = yt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = U.next;
    var r = Ge === null ? yt.memoizedState : Ge.next;
    if (r !== null)
      Ge = r, U = n;
    else {
      if (n === null)
        throw Error(b(310));
      U = n, n = { memoizedState: U.memoizedState, baseState: U.baseState, baseQueue: U.baseQueue, queue: U.queue, next: null }, Ge === null ? yt.memoizedState = Ge = n : Ge = Ge.next = n;
    }
    return Ge;
  }
  function fl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function So(n) {
    var r = qn(), l = r.queue;
    if (l === null)
      throw Error(b(311));
    l.lastRenderedReducer = n;
    var o = U, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = d.next, d.next = h;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var S = h = null, C = null, M = d;
      do {
        var j = M.lane;
        if ((ul & j) === j)
          C !== null && (C = C.next = { lane: 0, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }), o = M.hasEagerState ? M.eagerState : n(o, M.action);
        else {
          var P = {
            lane: j,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          };
          C === null ? (S = C = P, h = o) : C = C.next = P, yt.lanes |= j, Qa |= j;
        }
        M = M.next;
      } while (M !== null && M !== d);
      C === null ? h = o : C.next = S, br(o, r.memoizedState) || (jt = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = C, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, yt.lanes |= d, Qa |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Co(n) {
    var r = qn(), l = r.queue;
    if (l === null)
      throw Error(b(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var h = c = c.next;
      do
        d = n(d, h.action), h = h.next;
      while (h !== c);
      br(d, r.memoizedState) || (jt = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Bs() {
  }
  function js(n, r) {
    var l = yt, o = qn(), c = r(), d = !br(o.memoizedState, c);
    if (d && (o.memoizedState = c, jt = !0), o = o.queue, Eo($s.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Ge !== null && Ge.memoizedState.tag & 1) {
      if (l.flags |= 2048, dl(9, Ys.bind(null, l, o, c, r), void 0, null), xt === null)
        throw Error(b(349));
      ul & 30 || Ps(l, r, c);
    }
    return c;
  }
  function Ps(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = yt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, yt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Ys(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Qs(r) && Is(n);
  }
  function $s(n, r, l) {
    return l(function() {
      Qs(r) && Is(n);
    });
  }
  function Qs(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !br(n, l);
    } catch {
      return !0;
    }
  }
  function Is(n) {
    var r = Ba(n, 1);
    r !== null && Dn(r, n, 1, -1);
  }
  function Gs(n) {
    var r = Ur();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: fl, lastRenderedState: n }, r.queue = n, n = n.dispatch = ec.bind(null, yt, n), [r.memoizedState, n];
  }
  function dl(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = yt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, yt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Ws() {
    return qn().memoizedState;
  }
  function pl(n, r, l, o) {
    var c = Ur();
    yt.flags |= n, c.memoizedState = dl(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Pa(n, r, l, o) {
    var c = qn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (U !== null) {
      var h = U.memoizedState;
      if (d = h.destroy, o !== null && sl(o, h.deps)) {
        c.memoizedState = dl(r, l, d, o);
        return;
      }
    }
    yt.flags |= n, c.memoizedState = dl(1 | r, l, d, o);
  }
  function Xs(n, r) {
    return pl(8390656, 8, n, r);
  }
  function Eo(n, r) {
    return Pa(2048, 8, n, r);
  }
  function Ks(n, r) {
    return Pa(4, 2, n, r);
  }
  function qs(n, r) {
    return Pa(4, 4, n, r);
  }
  function Kf(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function au(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Pa(4, 4, Kf.bind(null, r, n), l);
  }
  function Zs() {
  }
  function iu(n, r) {
    var l = qn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && sl(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function bi(n, r) {
    var l = qn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && sl(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Zn(n, r, l) {
    return ul & 21 ? (br(l, r) || (l = os(), yt.lanes |= l, Qa |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, jt = !0), n.memoizedState = l);
  }
  function Km(n, r) {
    var l = at;
    at = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Xf.transition;
    Xf.transition = {};
    try {
      n(!1), r();
    } finally {
      at = l, Xf.transition = o;
    }
  }
  function pt() {
    return qn().memoizedState;
  }
  function Js(n, r, l) {
    var o = Pt(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, lu(n))
      To(r, l);
    else if (l = Sv(n, r, l, o), l !== null) {
      var c = wn();
      Dn(l, n, o, c), kv(l, r, o);
    }
  }
  function ec(n, r, l) {
    var o = Pt(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (lu(n))
      To(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var h = r.lastRenderedState, S = d(h, l);
          if (c.hasEagerState = !0, c.eagerState = S, br(S, h)) {
            var C = r.interleaved;
            C === null ? (c.next = c, $f(r)) : (c.next = C.next, C.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Sv(n, r, c, o), l !== null && (c = wn(), Dn(l, n, o, c), kv(l, r, o));
    }
  }
  function lu(n) {
    var r = n.alternate;
    return n === yt || r !== null && r === yt;
  }
  function To(n, r) {
    ma = we = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function kv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Gu(n, l);
    }
  }
  var tc = { readContext: zt, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, qm = { readContext: zt, useCallback: function(n, r) {
    return Ur().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: zt, useEffect: Xs, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, pl(
      4194308,
      4,
      Kf.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return pl(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return pl(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Ur();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Ur();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Js.bind(null, yt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Ur();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Gs, useDebugValue: Zs, useDeferredValue: function(n) {
    return Ur().memoizedState = n;
  }, useTransition: function() {
    var n = Gs(!1), r = n[0];
    return n = Km.bind(null, n[1]), Ur().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = yt, c = Ur();
    if (mt) {
      if (l === void 0)
        throw Error(b(407));
      l = l();
    } else {
      if (l = r(), xt === null)
        throw Error(b(349));
      ul & 30 || Ps(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Xs($s.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, dl(9, Ys.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Ur(), r = xt.identifierPrefix;
    if (mt) {
      var l = Va, o = un;
      l = (o & ~(1 << 32 - wr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = pr++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = ol++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Zm = {
    readContext: zt,
    useCallback: iu,
    useContext: zt,
    useEffect: Eo,
    useImperativeHandle: au,
    useInsertionEffect: Ks,
    useLayoutEffect: qs,
    useMemo: bi,
    useReducer: So,
    useRef: Ws,
    useState: function() {
      return So(fl);
    },
    useDebugValue: Zs,
    useDeferredValue: function(n) {
      var r = qn();
      return Zn(r, U.memoizedState, n);
    },
    useTransition: function() {
      var n = So(fl)[0], r = qn().memoizedState;
      return [n, r];
    },
    useMutableSource: Bs,
    useSyncExternalStore: js,
    useId: pt,
    unstable_isNewReconciler: !1
  }, qf = { readContext: zt, useCallback: iu, useContext: zt, useEffect: Eo, useImperativeHandle: au, useInsertionEffect: Ks, useLayoutEffect: qs, useMemo: bi, useReducer: Co, useRef: Ws, useState: function() {
    return Co(fl);
  }, useDebugValue: Zs, useDeferredValue: function(n) {
    var r = qn();
    return U === null ? r.memoizedState = n : Zn(r, U.memoizedState, n);
  }, useTransition: function() {
    var n = Co(fl)[0], r = qn().memoizedState;
    return [n, r];
  }, useMutableSource: Bs, useSyncExternalStore: js, useId: pt, unstable_isNewReconciler: !1 };
  function uu(n, r) {
    try {
      var l = "", o = r;
      do
        l += ii(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Ro(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function nc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Jm = typeof WeakMap == "function" ? WeakMap : Map;
  function bv(n, r, l) {
    l = ja(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      sc || (sc = !0, gl = o), nc(n, r);
    }, l;
  }
  function xo(n, r, l) {
    l = ja(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        nc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      nc(n, r), typeof o != "function" && (Sa === null ? Sa = /* @__PURE__ */ new Set([this]) : Sa.add(this));
      var h = r.stack;
      this.componentDidCatch(r.value, { componentStack: h !== null ? h : "" });
    }), l;
  }
  function _v(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Jm();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = ly.bind(null, n, r, l), r.then(n, n));
  }
  function Zf(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Jf(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = ja(-1, 1), r.tag = 2, xi(l, r, 1))), l.lanes |= 1), n);
  }
  var ey = me.ReactCurrentOwner, jt = !1;
  function Gt(n, r, l, o) {
    r.child = n === null ? Dv(r, null, l, o) : nu(r, n.child, l, o);
  }
  function _i(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return W(r, c), o = ki(n, r, l, o, d, c), l = cl(), n !== null && !jt ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, sn(n, r, c)) : (mt && l && bs(r), r.flags |= 1, Gt(n, r, o, c), r.child);
  }
  function rc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !gd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Jn(n, r, d, o, c)) : (n = hc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var h = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ao, l(h, o) && n.ref === r.ref)
        return sn(n, r, c);
    }
    return r.flags |= 1, n = Ni(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Jn(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ao(d, o) && n.ref === r.ref)
        if (jt = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (jt = !0);
        else
          return r.lanes = n.lanes, sn(n, r, c);
    }
    return ou(n, r, l, o, c);
  }
  function vl(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, et(vu, vr), vr |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, et(vu, vr), vr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, et(vu, vr), vr |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, et(vu, vr), vr |= o;
    return Gt(n, r, c, l), r.child;
  }
  function He(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function ou(n, r, l, o, c) {
    var d = Ct(l) ? In : Me.current;
    return d = Or(r, d), W(r, c), l = ki(n, r, l, o, d, c), o = cl(), n !== null && !jt ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, sn(n, r, c)) : (mt && o && bs(r), r.flags |= 1, Gt(n, r, l, c), r.child);
  }
  function ed(n, r, l, o, c) {
    if (Ct(l)) {
      var d = !0;
      ks(r);
    } else
      d = !1;
    if (W(r, c), r.stateNode === null)
      Tn(n, r), Tv(r, l, o), As(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, S = r.memoizedProps;
      h.props = S;
      var C = h.context, M = l.contextType;
      typeof M == "object" && M !== null ? M = zt(M) : (M = Ct(l) ? In : Me.current, M = Or(r, M));
      var j = l.getDerivedStateFromProps, P = typeof j == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      P || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== o || C !== M) && Rv(r, h, o, M), Ri = !1;
      var B = r.memoizedState;
      h.state = B, wi(r, o, h, c), C = r.memoizedState, S !== o || B !== C || Ot.current || Ri ? (typeof j == "function" && (Gf(r, l, j, o), C = r.memoizedState), (S = Ri || Ev(r, l, S, o, B, C, M)) ? (P || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = C), h.props = o, h.state = C, h.context = M, o = S) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, It(n, r), S = r.memoizedProps, M = r.type === r.elementType ? S : dr(r.type, S), h.props = M, P = r.pendingProps, B = h.context, C = l.contextType, typeof C == "object" && C !== null ? C = zt(C) : (C = Ct(l) ? In : Me.current, C = Or(r, C));
      var ee = l.getDerivedStateFromProps;
      (j = typeof ee == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== P || B !== C) && Rv(r, h, o, C), Ri = !1, B = r.memoizedState, h.state = B, wi(r, o, h, c);
      var oe = r.memoizedState;
      S !== P || B !== oe || Ot.current || Ri ? (typeof ee == "function" && (Gf(r, l, ee, o), oe = r.memoizedState), (M = Ri || Ev(r, l, M, o, B, oe, C) || !1) ? (j || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, oe, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, oe, C)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && B === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && B === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = oe), h.props = o, h.state = oe, h.context = C, o = M) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && B === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && B === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Ov(n, r, l, o, d, c);
  }
  function Ov(n, r, l, o, c, d) {
    He(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h)
      return c && hv(r, l, !1), sn(n, r, d);
    o = r.stateNode, ey.current = r;
    var S = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = nu(r, n.child, null, d), r.child = nu(r, null, S, d)) : Gt(n, r, S, d), r.memoizedState = o.state, c && hv(r, l, !0), r.child;
  }
  function Mv(n) {
    var r = n.stateNode;
    r.pendingContext ? Si(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Si(n, r.context, !1), Wf(n, r.containerInfo);
  }
  function ac(n, r, l, o, c) {
    return Tt(), jf(c), r.flags |= 256, Gt(n, r, l, o), r.child;
  }
  var hl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function td(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function nd(n, r, l) {
    var o = r.pendingProps, c = xe.current, d = !1, h = (r.flags & 128) !== 0, S;
    if ((S = h) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), et(xe, c & 1), n === null)
      return Os(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = zo(h, o, 0, null), n = Rl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = td(l), r.memoizedState = hl, n) : rd(r, h));
    if (c = n.memoizedState, c !== null && (S = c.dehydrated, S !== null))
      return ty(n, r, h, o, S, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, S = c.sibling;
      var C = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = C, r.deletions = null) : (o = Ni(c, C), o.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? d = Ni(S, d) : (d = Rl(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? td(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = hl, o;
    }
    return d = n.child, n = d.sibling, o = Ni(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function rd(n, r) {
    return r = zo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function su(n, r, l, o) {
    return o !== null && jf(o), nu(r, n.child, null, l), n = rd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ty(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ro(Error(b(422))), su(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = zo({ mode: "visible", children: o.children }, c, 0, null), d = Rl(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && nu(r, n.child, null, h), r.child.memoizedState = td(h), r.memoizedState = hl, d);
    if (!(r.mode & 1))
      return su(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var S = o.dgst;
      return o = S, d = Error(b(419)), o = Ro(d, o, void 0), su(n, r, h, o);
    }
    if (S = (h & n.childLanes) !== 0, jt || S) {
      if (o = xt, o !== null) {
        switch (h & -h) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | h) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ba(n, c), Dn(o, n, c, -1));
      }
      return hd(), o = Ro(Error(b(421))), su(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = uy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Kn = ra(c.nextSibling), fr = r, mt = !0, Nr = null, n !== null && (Xn[En++] = un, Xn[En++] = Va, Xn[En++] = Lr, un = n.id, Va = n.overflow, Lr = r), r = rd(r, o.children), r.flags |= 4096, r);
  }
  function ad(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), tn(n.return, r, l);
  }
  function ic(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function id(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Gt(n, r, o.children, l), o = xe.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && ad(n, l, r);
            else if (n.tag === 19)
              ad(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (et(xe, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && Rt(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), ic(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Rt(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          ic(r, !0, l, null, d);
          break;
        case "together":
          ic(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Tn(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function sn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Qa |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(b(153));
    if (r.child !== null) {
      for (n = r.child, l = Ni(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Ni(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Ya(n, r, l) {
    switch (r.tag) {
      case 3:
        Mv(r), Tt();
        break;
      case 5:
        Re(r);
        break;
      case 1:
        Ct(r.type) && ks(r);
        break;
      case 4:
        Wf(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        et(ha, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (et(xe, xe.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? nd(n, r, l) : (et(xe, xe.current & 1), n = sn(n, r, l), n !== null ? n.sibling : null);
        et(xe, xe.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return id(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), et(xe, xe.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, vl(n, r, l);
    }
    return sn(n, r, l);
  }
  var wo, ml, Ar, Wt;
  wo = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, ml = function() {
  }, Ar = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, ll(aa.current);
      var d = null;
      switch (l) {
        case "input":
          c = Yn(n, c), o = Yn(n, o), d = [];
          break;
        case "select":
          c = ie({}, c, { value: void 0 }), o = ie({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Ii(n, c), o = Ii(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Ds);
      }
      Sn(l, o);
      var h;
      l = null;
      for (M in c)
        if (!o.hasOwnProperty(M) && c.hasOwnProperty(M) && c[M] != null)
          if (M === "style") {
            var S = c[M];
            for (h in S)
              S.hasOwnProperty(h) && (l || (l = {}), l[h] = "");
          } else
            M !== "dangerouslySetInnerHTML" && M !== "children" && M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && M !== "autoFocus" && (De.hasOwnProperty(M) ? d || (d = []) : (d = d || []).push(M, null));
      for (M in o) {
        var C = o[M];
        if (S = c != null ? c[M] : void 0, o.hasOwnProperty(M) && C !== S && (C != null || S != null))
          if (M === "style")
            if (S) {
              for (h in S)
                !S.hasOwnProperty(h) || C && C.hasOwnProperty(h) || (l || (l = {}), l[h] = "");
              for (h in C)
                C.hasOwnProperty(h) && S[h] !== C[h] && (l || (l = {}), l[h] = C[h]);
            } else
              l || (d || (d = []), d.push(
                M,
                l
              )), l = C;
          else
            M === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, S = S ? S.__html : void 0, C != null && S !== C && (d = d || []).push(M, C)) : M === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(M, "" + C) : M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && (De.hasOwnProperty(M) ? (C != null && M === "onScroll" && dt("scroll", n), d || S === C || (d = [])) : (d = d || []).push(M, C));
      }
      l && (d = d || []).push("style", l);
      var M = d;
      (r.updateQueue = M) && (r.flags |= 4);
    }
  }, Wt = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Do(n, r) {
    if (!mt)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Rn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function ny(n, r, l) {
    var o = r.pendingProps;
    switch (Vf(r), r.tag) {
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
        return Rn(r), null;
      case 1:
        return Ct(r.type) && Mr(), Rn(r), null;
      case 3:
        return o = r.stateNode, Di(), Je(Ot), Je(Me), Fs(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Ms(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Nr !== null && (No(Nr), Nr = null))), ml(n, r), Rn(r), null;
      case 5:
        Ve(r);
        var c = ll(ru.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Ar(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(b(166));
            return Rn(r), null;
          }
          if (n = ll(aa.current), Ms(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[pa] = r, o[rl] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                dt("cancel", o), dt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                dt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < oo.length; c++)
                  dt(oo[c], o);
                break;
              case "source":
                dt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                dt(
                  "error",
                  o
                ), dt("load", o);
                break;
              case "details":
                dt("toggle", o);
                break;
              case "input":
                Rr(o, d), dt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, dt("invalid", o);
                break;
              case "textarea":
                Xr(o, d), dt("invalid", o);
            }
            Sn(l, d), c = null;
            for (var h in d)
              if (d.hasOwnProperty(h)) {
                var S = d[h];
                h === "children" ? typeof S == "string" ? o.textContent !== S && (d.suppressHydrationWarning !== !0 && ws(o.textContent, S, n), c = ["children", S]) : typeof S == "number" && o.textContent !== "" + S && (d.suppressHydrationWarning !== !0 && ws(
                  o.textContent,
                  S,
                  n
                ), c = ["children", "" + S]) : De.hasOwnProperty(h) && S != null && h === "onScroll" && dt("scroll", o);
              }
            switch (l) {
              case "input":
                Tr(o), _a(o, d, !0);
                break;
              case "textarea":
                Tr(o), ca(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Ds);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = si(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[pa] = r, n[rl] = o, wo(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (h = $t(l, o), l) {
                case "dialog":
                  dt("cancel", n), dt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  dt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < oo.length; c++)
                    dt(oo[c], n);
                  c = o;
                  break;
                case "source":
                  dt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  dt(
                    "error",
                    n
                  ), dt("load", n), c = o;
                  break;
                case "details":
                  dt("toggle", n), c = o;
                  break;
                case "input":
                  Rr(n, o), c = Yn(n, o), dt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ie({}, o, { value: void 0 }), dt("invalid", n);
                  break;
                case "textarea":
                  Xr(n, o), c = Ii(n, o), dt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Sn(l, c), S = c;
              for (d in S)
                if (S.hasOwnProperty(d)) {
                  var C = S[d];
                  d === "style" ? ct(n, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && Pu(n, C)) : d === "children" ? typeof C == "string" ? (l !== "textarea" || C !== "") && ci(n, C) : typeof C == "number" && ci(n, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (De.hasOwnProperty(d) ? C != null && d === "onScroll" && dt("scroll", n) : C != null && Q(n, d, C, h));
                }
              switch (l) {
                case "input":
                  Tr(n), _a(n, o, !1);
                  break;
                case "textarea":
                  Tr(n), ca(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Gr(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? ui(n, !!o.multiple, d, !1) : o.defaultValue != null && ui(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Ds);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Rn(r), null;
      case 6:
        if (n && r.stateNode != null)
          Wt(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(b(166));
          if (l = ll(ru.current), ll(aa.current), Ms(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[pa] = r, (d = o.nodeValue !== l) && (n = fr, n !== null))
              switch (n.tag) {
                case 3:
                  ws(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && ws(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[pa] = r, r.stateNode = o;
        }
        return Rn(r), null;
      case 13:
        if (Je(xe), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (mt && Kn !== null && r.mode & 1 && !(r.flags & 128))
            gv(), Tt(), r.flags |= 98560, d = !1;
          else if (d = Ms(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(b(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(b(317));
              d[pa] = r;
            } else
              Tt(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Rn(r), d = !1;
          } else
            Nr !== null && (No(Nr), Nr = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || xe.current & 1 ? Kt === 0 && (Kt = 3) : hd())), r.updateQueue !== null && (r.flags |= 4), Rn(r), null);
      case 4:
        return Di(), ml(n, r), n === null && Zl(r.stateNode.containerInfo), Rn(r), null;
      case 10:
        return Ti(r.type._context), Rn(r), null;
      case 17:
        return Ct(r.type) && Mr(), Rn(r), null;
      case 19:
        if (Je(xe), d = r.memoizedState, d === null)
          return Rn(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null)
          if (o)
            Do(d, !1);
          else {
            if (Kt !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (h = Rt(n), h !== null) {
                  for (r.flags |= 128, Do(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return et(xe, xe.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && _t() > mu && (r.flags |= 128, o = !0, Do(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = Rt(h), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Do(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !mt)
                return Rn(r), null;
            } else
              2 * _t() - d.renderingStartTime > mu && l !== 1073741824 && (r.flags |= 128, o = !0, Do(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = _t(), r.sibling = null, l = xe.current, et(xe, o ? l & 1 | 2 : l & 1), r) : (Rn(r), null);
      case 22:
      case 23:
        return vd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? vr & 1073741824 && (Rn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Rn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(b(156, r.tag));
  }
  function ld(n, r) {
    switch (Vf(r), r.tag) {
      case 1:
        return Ct(r.type) && Mr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Di(), Je(Ot), Je(Me), Fs(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ve(r), null;
      case 13:
        if (Je(xe), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(b(340));
          Tt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Je(xe), null;
      case 4:
        return Di(), null;
      case 10:
        return Ti(r.type._context), null;
      case 22:
      case 23:
        return vd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ko = !1, Xt = !1, Lv = typeof WeakSet == "function" ? WeakSet : Set, le = null;
  function cu(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          Lt(n, r, o);
        }
      else
        l.current = null;
  }
  function bo(n, r, l) {
    try {
      l();
    } catch (o) {
      Lt(n, r, o);
    }
  }
  var Nv = !1;
  function zv(n, r) {
    if (Mf = Ki, n = Cs(), Ua(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var h = 0, S = -1, C = -1, M = 0, j = 0, P = n, B = null;
            t:
              for (; ; ) {
                for (var ee; P !== l || c !== 0 && P.nodeType !== 3 || (S = h + c), P !== d || o !== 0 && P.nodeType !== 3 || (C = h + o), P.nodeType === 3 && (h += P.nodeValue.length), (ee = P.firstChild) !== null; )
                  B = P, P = ee;
                for (; ; ) {
                  if (P === n)
                    break t;
                  if (B === l && ++M === c && (S = h), B === d && ++j === o && (C = h), (ee = P.nextSibling) !== null)
                    break;
                  P = B, B = P.parentNode;
                }
                P = ee;
              }
            l = S === -1 || C === -1 ? null : { start: S, end: C };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (tl = { focusedElem: n, selectionRange: l }, Ki = !1, le = r; le !== null; )
      if (r = le, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, le = n;
      else
        for (; le !== null; ) {
          r = le;
          try {
            var oe = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (oe !== null) {
                    var de = oe.memoizedProps, Ut = oe.memoizedState, x = r.stateNode, T = x.getSnapshotBeforeUpdate(r.elementType === r.type ? de : dr(r.type, de), Ut);
                    x.__reactInternalSnapshotBeforeUpdate = T;
                  }
                  break;
                case 3:
                  var k = r.stateNode.containerInfo;
                  k.nodeType === 1 ? k.textContent = "" : k.nodeType === 9 && k.documentElement && k.removeChild(k.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(b(163));
              }
          } catch (I) {
            Lt(r, r.return, I);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, le = n;
            break;
          }
          le = r.return;
        }
    return oe = Nv, Nv = !1, oe;
  }
  function _o(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && bo(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Oo(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function ud(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function od(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, od(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[pa], delete r[rl], delete r[zf], delete r[Xm], delete r[Uf])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Uv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function lc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Uv(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function fu(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Ds));
    else if (o !== 4 && (n = n.child, n !== null))
      for (fu(n, r, l), n = n.sibling; n !== null; )
        fu(n, r, l), n = n.sibling;
  }
  function ya(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (ya(n, r, l), n = n.sibling; n !== null; )
        ya(n, r, l), n = n.sibling;
  }
  var Et = null, nn = !1;
  function Hr(n, r, l) {
    for (l = l.child; l !== null; )
      du(n, r, l), l = l.sibling;
  }
  function du(n, r, l) {
    if (Zr && typeof Zr.onCommitFiberUnmount == "function")
      try {
        Zr.onCommitFiberUnmount(Iu, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        Xt || cu(l, r);
      case 6:
        var o = Et, c = nn;
        Et = null, Hr(n, r, l), Et = o, nn = c, Et !== null && (nn ? (n = Et, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Et.removeChild(l.stateNode));
        break;
      case 18:
        Et !== null && (nn ? (n = Et, l = l.stateNode, n.nodeType === 8 ? mi(n.parentNode, l) : n.nodeType === 1 && mi(n, l), qu(n)) : mi(Et, l.stateNode));
        break;
      case 4:
        o = Et, c = nn, Et = l.stateNode.containerInfo, nn = !0, Hr(n, r, l), Et = o, nn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Xt && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, h = d.destroy;
            d = d.tag, h !== void 0 && (d & 2 || d & 4) && bo(l, r, h), c = c.next;
          } while (c !== o);
        }
        Hr(n, r, l);
        break;
      case 1:
        if (!Xt && (cu(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (S) {
            Lt(l, r, S);
          }
        Hr(n, r, l);
        break;
      case 21:
        Hr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Xt = (o = Xt) || l.memoizedState !== null, Hr(n, r, l), Xt = o) : Hr(n, r, l);
        break;
      default:
        Hr(n, r, l);
    }
  }
  function $a(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Lv()), r.forEach(function(o) {
        var c = oy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ia(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, h = r, S = h;
          e:
            for (; S !== null; ) {
              switch (S.tag) {
                case 5:
                  Et = S.stateNode, nn = !1;
                  break e;
                case 3:
                  Et = S.stateNode.containerInfo, nn = !0;
                  break e;
                case 4:
                  Et = S.stateNode.containerInfo, nn = !0;
                  break e;
              }
              S = S.return;
            }
          if (Et === null)
            throw Error(b(160));
          du(d, h, c), Et = null, nn = !1;
          var C = c.alternate;
          C !== null && (C.return = null), c.return = null;
        } catch (M) {
          Lt(c, r, M);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Av(r, n), r = r.sibling;
  }
  function Av(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ia(r, n), ga(n), o & 4) {
          try {
            _o(3, n, n.return), Oo(3, n);
          } catch (de) {
            Lt(n, n.return, de);
          }
          try {
            _o(5, n, n.return);
          } catch (de) {
            Lt(n, n.return, de);
          }
        }
        break;
      case 1:
        ia(r, n), ga(n), o & 512 && l !== null && cu(l, l.return);
        break;
      case 5:
        if (ia(r, n), ga(n), o & 512 && l !== null && cu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ci(c, "");
          } catch (de) {
            Lt(n, n.return, de);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, S = n.type, C = n.updateQueue;
          if (n.updateQueue = null, C !== null)
            try {
              S === "input" && d.type === "radio" && d.name != null && Wr(c, d), $t(S, h);
              var M = $t(S, d);
              for (h = 0; h < C.length; h += 2) {
                var j = C[h], P = C[h + 1];
                j === "style" ? ct(c, P) : j === "dangerouslySetInnerHTML" ? Pu(c, P) : j === "children" ? ci(c, P) : Q(c, j, P, M);
              }
              switch (S) {
                case "input":
                  ur(c, d);
                  break;
                case "textarea":
                  oi(c, d);
                  break;
                case "select":
                  var B = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var ee = d.value;
                  ee != null ? ui(c, !!d.multiple, ee, !1) : B !== !!d.multiple && (d.defaultValue != null ? ui(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : ui(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[rl] = d;
            } catch (de) {
              Lt(n, n.return, de);
            }
        }
        break;
      case 6:
        if (ia(r, n), ga(n), o & 4) {
          if (n.stateNode === null)
            throw Error(b(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (de) {
            Lt(n, n.return, de);
          }
        }
        break;
      case 3:
        if (ia(r, n), ga(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            qu(r.containerInfo);
          } catch (de) {
            Lt(n, n.return, de);
          }
        break;
      case 4:
        ia(r, n), ga(n);
        break;
      case 13:
        ia(r, n), ga(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (fd = _t())), o & 4 && $a(n);
        break;
      case 22:
        if (j = l !== null && l.memoizedState !== null, n.mode & 1 ? (Xt = (M = Xt) || j, ia(r, n), Xt = M) : ia(r, n), ga(n), o & 8192) {
          if (M = n.memoizedState !== null, (n.stateNode.isHidden = M) && !j && n.mode & 1)
            for (le = n, j = n.child; j !== null; ) {
              for (P = le = j; le !== null; ) {
                switch (B = le, ee = B.child, B.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    _o(4, B, B.return);
                    break;
                  case 1:
                    cu(B, B.return);
                    var oe = B.stateNode;
                    if (typeof oe.componentWillUnmount == "function") {
                      o = B, l = B.return;
                      try {
                        r = o, oe.props = r.memoizedProps, oe.state = r.memoizedState, oe.componentWillUnmount();
                      } catch (de) {
                        Lt(o, l, de);
                      }
                    }
                    break;
                  case 5:
                    cu(B, B.return);
                    break;
                  case 22:
                    if (B.memoizedState !== null) {
                      sd(P);
                      continue;
                    }
                }
                ee !== null ? (ee.return = B, le = ee) : sd(P);
              }
              j = j.sibling;
            }
          e:
            for (j = null, P = n; ; ) {
              if (P.tag === 5) {
                if (j === null) {
                  j = P;
                  try {
                    c = P.stateNode, M ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (S = P.stateNode, C = P.memoizedProps.style, h = C != null && C.hasOwnProperty("display") ? C.display : null, S.style.display = Pe("display", h));
                  } catch (de) {
                    Lt(n, n.return, de);
                  }
                }
              } else if (P.tag === 6) {
                if (j === null)
                  try {
                    P.stateNode.nodeValue = M ? "" : P.memoizedProps;
                  } catch (de) {
                    Lt(n, n.return, de);
                  }
              } else if ((P.tag !== 22 && P.tag !== 23 || P.memoizedState === null || P === n) && P.child !== null) {
                P.child.return = P, P = P.child;
                continue;
              }
              if (P === n)
                break e;
              for (; P.sibling === null; ) {
                if (P.return === null || P.return === n)
                  break e;
                j === P && (j = null), P = P.return;
              }
              j === P && (j = null), P.sibling.return = P.return, P = P.sibling;
            }
        }
        break;
      case 19:
        ia(r, n), ga(n), o & 4 && $a(n);
        break;
      case 21:
        break;
      default:
        ia(
          r,
          n
        ), ga(n);
    }
  }
  function ga(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Uv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(b(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ci(c, ""), o.flags &= -33);
            var d = lc(n);
            ya(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, S = lc(n);
            fu(n, S, h);
            break;
          default:
            throw Error(b(161));
        }
      } catch (C) {
        Lt(n, n.return, C);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Hv(n, r, l) {
    le = n, pu(n);
  }
  function pu(n, r, l) {
    for (var o = (n.mode & 1) !== 0; le !== null; ) {
      var c = le, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || ko;
        if (!h) {
          var S = c.alternate, C = S !== null && S.memoizedState !== null || Xt;
          S = ko;
          var M = Xt;
          if (ko = h, (Xt = C) && !M)
            for (le = c; le !== null; )
              h = le, C = h.child, h.tag === 22 && h.memoizedState !== null ? Vv(c) : C !== null ? (C.return = h, le = C) : Vv(c);
          for (; d !== null; )
            le = d, pu(d), d = d.sibling;
          le = c, ko = S, Xt = M;
        }
        Fv(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, le = d) : Fv(n);
    }
  }
  function Fv(n) {
    for (; le !== null; ) {
      var r = le;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Xt || Oo(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !Xt)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : dr(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && il(r, d, o);
                break;
              case 3:
                var h = r.updateQueue;
                if (h !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  il(r, h, l);
                }
                break;
              case 5:
                var S = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = S;
                  var C = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      C.autoFocus && l.focus();
                      break;
                    case "img":
                      C.src && (l.src = C.src);
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
                if (r.memoizedState === null) {
                  var M = r.alternate;
                  if (M !== null) {
                    var j = M.memoizedState;
                    if (j !== null) {
                      var P = j.dehydrated;
                      P !== null && qu(P);
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
                throw Error(b(163));
            }
          Xt || r.flags & 512 && ud(r);
        } catch (B) {
          Lt(r, r.return, B);
        }
      }
      if (r === n) {
        le = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, le = l;
        break;
      }
      le = r.return;
    }
  }
  function sd(n) {
    for (; le !== null; ) {
      var r = le;
      if (r === n) {
        le = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, le = l;
        break;
      }
      le = r.return;
    }
  }
  function Vv(n) {
    for (; le !== null; ) {
      var r = le;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Oo(4, r);
            } catch (C) {
              Lt(r, l, C);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (C) {
                Lt(r, c, C);
              }
            }
            var d = r.return;
            try {
              ud(r);
            } catch (C) {
              Lt(r, d, C);
            }
            break;
          case 5:
            var h = r.return;
            try {
              ud(r);
            } catch (C) {
              Lt(r, h, C);
            }
        }
      } catch (C) {
        Lt(r, r.return, C);
      }
      if (r === n) {
        le = null;
        break;
      }
      var S = r.sibling;
      if (S !== null) {
        S.return = r.return, le = S;
        break;
      }
      le = r.return;
    }
  }
  var uc = Math.ceil, Mo = me.ReactCurrentDispatcher, cd = me.ReactCurrentOwner, xn = me.ReactCurrentBatchConfig, $e = 0, xt = null, Mt = null, rn = 0, vr = 0, vu = Ae(0), Kt = 0, Lo = null, Qa = 0, oc = 0, hu = 0, yl = null, Mn = null, fd = 0, mu = 1 / 0, Ia = null, sc = !1, gl = null, Sa = null, Oi = !1, Mi = null, cc = 0, yu = 0, fc = null, Sl = -1, Cl = 0;
  function wn() {
    return $e & 6 ? _t() : Sl !== -1 ? Sl : Sl = _t();
  }
  function Pt(n) {
    return n.mode & 1 ? $e & 2 && rn !== 0 ? rn & -rn : Ls.transition !== null ? (Cl === 0 && (Cl = os()), Cl) : (n = at, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ff(n.type)), n) : 1;
  }
  function Dn(n, r, l, o) {
    if (50 < yu)
      throw yu = 0, fc = null, Error(b(185));
    Xi(n, l, o), (!($e & 2) || n !== xt) && (n === xt && (!($e & 2) && (oc |= l), Kt === 4 && Fr(n, rn)), kn(n, o), l === 1 && $e === 0 && !(r.mode & 1) && (mu = _t() + 500, en && Gn()));
  }
  function kn(n, r) {
    var l = n.callbackNode;
    us(n, r);
    var o = Jr(n, n === xt ? rn : 0);
    if (o === 0)
      l !== null && Dp(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Dp(l), r === 1)
        n.tag === 0 ? Hf(Bv.bind(null, n)) : Af(Bv.bind(null, n)), Nf(function() {
          !($e & 6) && Gn();
        }), l = null;
      else {
        switch (of(o)) {
          case 1:
            l = Ma;
            break;
          case 4:
            l = Ye;
            break;
          case 16:
            l = fi;
            break;
          case 536870912:
            l = rf;
            break;
          default:
            l = fi;
        }
        l = yd(l, gu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function gu(n, r) {
    if (Sl = -1, Cl = 0, $e & 6)
      throw Error(b(327));
    var l = n.callbackNode;
    if (Cu() && n.callbackNode !== l)
      return null;
    var o = Jr(n, n === xt ? rn : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = pc(n, o);
    else {
      r = o;
      var c = $e;
      $e |= 2;
      var d = dc();
      (xt !== n || rn !== r) && (Ia = null, mu = _t() + 500, El(n, r));
      do
        try {
          ay();
          break;
        } catch (S) {
          jv(n, S);
        }
      while (!0);
      Yf(), Mo.current = d, $e = c, Mt !== null ? r = 0 : (xt = null, rn = 0, r = Kt);
    }
    if (r !== 0) {
      if (r === 2 && (c = lf(n), c !== 0 && (o = c, r = dd(n, c))), r === 1)
        throw l = Lo, El(n, 0), Fr(n, o), kn(n, _t()), l;
      if (r === 6)
        Fr(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !pd(c) && (r = pc(n, o), r === 2 && (d = lf(n), d !== 0 && (o = d, r = dd(n, d))), r === 1))
          throw l = Lo, El(n, 0), Fr(n, o), kn(n, _t()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(b(345));
          case 2:
            Tl(n, Mn, Ia);
            break;
          case 3:
            if (Fr(n, o), (o & 130023424) === o && (r = fd + 500 - _t(), 10 < r)) {
              if (Jr(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                wn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = nl(Tl.bind(null, n, Mn, Ia), r);
              break;
            }
            Tl(n, Mn, Ia);
            break;
          case 4:
            if (Fr(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - wr(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = _t() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * uc(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = nl(Tl.bind(null, n, Mn, Ia), o);
              break;
            }
            Tl(n, Mn, Ia);
            break;
          case 5:
            Tl(n, Mn, Ia);
            break;
          default:
            throw Error(b(329));
        }
      }
    }
    return kn(n, _t()), n.callbackNode === l ? gu.bind(null, n) : null;
  }
  function dd(n, r) {
    var l = yl;
    return n.current.memoizedState.isDehydrated && (El(n, r).flags |= 256), n = pc(n, r), n !== 2 && (r = Mn, Mn = l, r !== null && No(r)), n;
  }
  function No(n) {
    Mn === null ? Mn = n : Mn.push.apply(Mn, n);
  }
  function pd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!br(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Fr(n, r) {
    for (r &= ~hu, r &= ~oc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - wr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Bv(n) {
    if ($e & 6)
      throw Error(b(327));
    Cu();
    var r = Jr(n, 0);
    if (!(r & 1))
      return kn(n, _t()), null;
    var l = pc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = lf(n);
      o !== 0 && (r = o, l = dd(n, o));
    }
    if (l === 1)
      throw l = Lo, El(n, 0), Fr(n, r), kn(n, _t()), l;
    if (l === 6)
      throw Error(b(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Tl(n, Mn, Ia), kn(n, _t()), null;
  }
  function Su(n, r) {
    var l = $e;
    $e |= 1;
    try {
      return n(r);
    } finally {
      $e = l, $e === 0 && (mu = _t() + 500, en && Gn());
    }
  }
  function Li(n) {
    Mi !== null && Mi.tag === 0 && !($e & 6) && Cu();
    var r = $e;
    $e |= 1;
    var l = xn.transition, o = at;
    try {
      if (xn.transition = null, at = 1, n)
        return n();
    } finally {
      at = o, xn.transition = l, $e = r, !($e & 6) && Gn();
    }
  }
  function vd() {
    vr = vu.current, Je(vu);
  }
  function El(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, vv(l)), Mt !== null)
      for (l = Mt.return; l !== null; ) {
        var o = l;
        switch (Vf(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && Mr();
            break;
          case 3:
            Di(), Je(Ot), Je(Me), Fs();
            break;
          case 5:
            Ve(o);
            break;
          case 4:
            Di();
            break;
          case 13:
            Je(xe);
            break;
          case 19:
            Je(xe);
            break;
          case 10:
            Ti(o.type._context);
            break;
          case 22:
          case 23:
            vd();
        }
        l = l.return;
      }
    if (xt = n, Mt = n = Ni(n.current, null), rn = vr = r, Kt = 0, Lo = null, hu = oc = Qa = 0, Mn = yl = null, on !== null) {
      for (r = 0; r < on.length; r++)
        if (l = on[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var h = d.next;
            d.next = c, o.next = h;
          }
          l.pending = o;
        }
      on = null;
    }
    return n;
  }
  function jv(n, r) {
    do {
      var l = Mt;
      try {
        if (Yf(), Vs.current = tc, we) {
          for (var o = yt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          we = !1;
        }
        if (ul = 0, Ge = U = yt = null, ma = !1, pr = 0, cd.current = null, l === null || l.return === null) {
          Kt = 1, Lo = r, Mt = null;
          break;
        }
        e: {
          var d = n, h = l.return, S = l, C = r;
          if (r = rn, S.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var M = C, j = S, P = j.tag;
            if (!(j.mode & 1) && (P === 0 || P === 11 || P === 15)) {
              var B = j.alternate;
              B ? (j.updateQueue = B.updateQueue, j.memoizedState = B.memoizedState, j.lanes = B.lanes) : (j.updateQueue = null, j.memoizedState = null);
            }
            var ee = Zf(h);
            if (ee !== null) {
              ee.flags &= -257, Jf(ee, h, S, d, r), ee.mode & 1 && _v(d, M, r), r = ee, C = M;
              var oe = r.updateQueue;
              if (oe === null) {
                var de = /* @__PURE__ */ new Set();
                de.add(C), r.updateQueue = de;
              } else
                oe.add(C);
              break e;
            } else {
              if (!(r & 1)) {
                _v(d, M, r), hd();
                break e;
              }
              C = Error(b(426));
            }
          } else if (mt && S.mode & 1) {
            var Ut = Zf(h);
            if (Ut !== null) {
              !(Ut.flags & 65536) && (Ut.flags |= 256), Jf(Ut, h, S, d, r), jf(uu(C, S));
              break e;
            }
          }
          d = C = uu(C, S), Kt !== 4 && (Kt = 2), yl === null ? yl = [d] : yl.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var x = bv(d, C, r);
                If(d, x);
                break e;
              case 1:
                S = C;
                var T = d.type, k = d.stateNode;
                if (!(d.flags & 128) && (typeof T.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (Sa === null || !Sa.has(k)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var I = xo(d, S, r);
                  If(d, I);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        md(l);
      } catch (pe) {
        r = pe, Mt === l && l !== null && (Mt = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function dc() {
    var n = Mo.current;
    return Mo.current = tc, n === null ? tc : n;
  }
  function hd() {
    (Kt === 0 || Kt === 3 || Kt === 2) && (Kt = 4), xt === null || !(Qa & 268435455) && !(oc & 268435455) || Fr(xt, rn);
  }
  function pc(n, r) {
    var l = $e;
    $e |= 2;
    var o = dc();
    (xt !== n || rn !== r) && (Ia = null, El(n, r));
    do
      try {
        ry();
        break;
      } catch (c) {
        jv(n, c);
      }
    while (!0);
    if (Yf(), $e = l, Mo.current = o, Mt !== null)
      throw Error(b(261));
    return xt = null, rn = 0, Kt;
  }
  function ry() {
    for (; Mt !== null; )
      Pv(Mt);
  }
  function ay() {
    for (; Mt !== null && !km(); )
      Pv(Mt);
  }
  function Pv(n) {
    var r = $v(n.alternate, n, vr);
    n.memoizedProps = n.pendingProps, r === null ? md(n) : Mt = r, cd.current = null;
  }
  function md(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = ld(l, r), l !== null) {
          l.flags &= 32767, Mt = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Kt = 6, Mt = null;
          return;
        }
      } else if (l = ny(l, r, vr), l !== null) {
        Mt = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Mt = r;
        return;
      }
      Mt = r = n;
    } while (r !== null);
    Kt === 0 && (Kt = 5);
  }
  function Tl(n, r, l) {
    var o = at, c = xn.transition;
    try {
      xn.transition = null, at = 1, iy(n, r, l, o);
    } finally {
      xn.transition = c, at = o;
    }
    return null;
  }
  function iy(n, r, l, o) {
    do
      Cu();
    while (Mi !== null);
    if ($e & 6)
      throw Error(b(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(b(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Mm(n, d), n === xt && (Mt = xt = null, rn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Oi || (Oi = !0, yd(fi, function() {
      return Cu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = xn.transition, xn.transition = null;
      var h = at;
      at = 1;
      var S = $e;
      $e |= 4, cd.current = null, zv(n, l), Av(l, n), Es(tl), Ki = !!Mf, tl = Mf = null, n.current = l, Hv(l), bm(), $e = S, at = h, xn.transition = d;
    } else
      n.current = l;
    if (Oi && (Oi = !1, Mi = n, cc = c), d = n.pendingLanes, d === 0 && (Sa = null), bp(l.stateNode), kn(n, _t()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (sc)
      throw sc = !1, n = gl, gl = null, n;
    return cc & 1 && n.tag !== 0 && Cu(), d = n.pendingLanes, d & 1 ? n === fc ? yu++ : (yu = 0, fc = n) : yu = 0, Gn(), null;
  }
  function Cu() {
    if (Mi !== null) {
      var n = of(cc), r = xn.transition, l = at;
      try {
        if (xn.transition = null, at = 16 > n ? 16 : n, Mi === null)
          var o = !1;
        else {
          if (n = Mi, Mi = null, cc = 0, $e & 6)
            throw Error(b(331));
          var c = $e;
          for ($e |= 4, le = n.current; le !== null; ) {
            var d = le, h = d.child;
            if (le.flags & 16) {
              var S = d.deletions;
              if (S !== null) {
                for (var C = 0; C < S.length; C++) {
                  var M = S[C];
                  for (le = M; le !== null; ) {
                    var j = le;
                    switch (j.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _o(8, j, d);
                    }
                    var P = j.child;
                    if (P !== null)
                      P.return = j, le = P;
                    else
                      for (; le !== null; ) {
                        j = le;
                        var B = j.sibling, ee = j.return;
                        if (od(j), j === M) {
                          le = null;
                          break;
                        }
                        if (B !== null) {
                          B.return = ee, le = B;
                          break;
                        }
                        le = ee;
                      }
                  }
                }
                var oe = d.alternate;
                if (oe !== null) {
                  var de = oe.child;
                  if (de !== null) {
                    oe.child = null;
                    do {
                      var Ut = de.sibling;
                      de.sibling = null, de = Ut;
                    } while (de !== null);
                  }
                }
                le = d;
              }
            }
            if (d.subtreeFlags & 2064 && h !== null)
              h.return = d, le = h;
            else
              e:
                for (; le !== null; ) {
                  if (d = le, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _o(9, d, d.return);
                    }
                  var x = d.sibling;
                  if (x !== null) {
                    x.return = d.return, le = x;
                    break e;
                  }
                  le = d.return;
                }
          }
          var T = n.current;
          for (le = T; le !== null; ) {
            h = le;
            var k = h.child;
            if (h.subtreeFlags & 2064 && k !== null)
              k.return = h, le = k;
            else
              e:
                for (h = T; le !== null; ) {
                  if (S = le, S.flags & 2048)
                    try {
                      switch (S.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Oo(9, S);
                      }
                    } catch (pe) {
                      Lt(S, S.return, pe);
                    }
                  if (S === h) {
                    le = null;
                    break e;
                  }
                  var I = S.sibling;
                  if (I !== null) {
                    I.return = S.return, le = I;
                    break e;
                  }
                  le = S.return;
                }
          }
          if ($e = c, Gn(), Zr && typeof Zr.onPostCommitFiberRoot == "function")
            try {
              Zr.onPostCommitFiberRoot(Iu, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        at = l, xn.transition = r;
      }
    }
    return !1;
  }
  function Yv(n, r, l) {
    r = uu(l, r), r = bv(n, r, 1), n = xi(n, r, 1), r = wn(), n !== null && (Xi(n, 1, r), kn(n, r));
  }
  function Lt(n, r, l) {
    if (n.tag === 3)
      Yv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Yv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Sa === null || !Sa.has(o))) {
            n = uu(l, n), n = xo(r, n, 1), r = xi(r, n, 1), n = wn(), r !== null && (Xi(r, 1, n), kn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function ly(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = wn(), n.pingedLanes |= n.suspendedLanes & l, xt === n && (rn & l) === l && (Kt === 4 || Kt === 3 && (rn & 130023424) === rn && 500 > _t() - fd ? El(n, 0) : hu |= l), kn(n, r);
  }
  function vc(n, r) {
    r === 0 && (n.mode & 1 ? (r = Pl, Pl <<= 1, !(Pl & 130023424) && (Pl = 4194304)) : r = 1);
    var l = wn();
    n = Ba(n, r), n !== null && (Xi(n, r, l), kn(n, l));
  }
  function uy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), vc(n, l);
  }
  function oy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(b(314));
    }
    o !== null && o.delete(r), vc(n, l);
  }
  var $v;
  $v = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Ot.current)
        jt = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return jt = !1, Ya(n, r, l);
        jt = !!(n.flags & 131072);
      }
    else
      jt = !1, mt && r.flags & 1048576 && Ff(r, eu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Tn(n, r), n = r.pendingProps;
        var c = Or(r, Me.current);
        W(r, l), c = ki(null, r, o, n, c, l);
        var d = cl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Ct(o) ? (d = !0, ks(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Qf(r), c.updater = Us, r.stateNode = c, c._reactInternals = r, As(r, o, n, l), r = Ov(null, r, o, !0, d, l)) : (r.tag = 0, mt && d && bs(r), Gt(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Tn(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = cy(o), n = dr(o, n), c) {
            case 0:
              r = ou(null, r, o, n, l);
              break e;
            case 1:
              r = ed(null, r, o, n, l);
              break e;
            case 11:
              r = _i(null, r, o, n, l);
              break e;
            case 14:
              r = rc(null, r, o, dr(o.type, n), l);
              break e;
          }
          throw Error(b(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : dr(o, c), ou(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : dr(o, c), ed(n, r, o, c, l);
      case 3:
        e: {
          if (Mv(r), n === null)
            throw Error(b(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, It(n, r), wi(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = uu(Error(b(423)), r), r = ac(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = uu(Error(b(424)), r), r = ac(n, r, o, l, c);
              break e;
            } else
              for (Kn = ra(r.stateNode.containerInfo.firstChild), fr = r, mt = !0, Nr = null, l = Dv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Tt(), o === c) {
              r = sn(n, r, l);
              break e;
            }
            Gt(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Re(r), n === null && Os(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, fo(o, c) ? h = null : d !== null && fo(o, d) && (r.flags |= 32), He(n, r), Gt(n, r, h, l), r.child;
      case 6:
        return n === null && Os(r), null;
      case 13:
        return nd(n, r, l);
      case 4:
        return Wf(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = nu(r, null, o, l) : Gt(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : dr(o, c), _i(n, r, o, c, l);
      case 7:
        return Gt(n, r, r.pendingProps, l), r.child;
      case 8:
        return Gt(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Gt(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, et(ha, o._currentValue), o._currentValue = h, d !== null)
            if (br(d.value, h)) {
              if (d.children === c.children && !Ot.current) {
                r = sn(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var S = d.dependencies;
                if (S !== null) {
                  h = d.child;
                  for (var C = S.firstContext; C !== null; ) {
                    if (C.context === o) {
                      if (d.tag === 1) {
                        C = ja(-1, l & -l), C.tag = 2;
                        var M = d.updateQueue;
                        if (M !== null) {
                          M = M.shared;
                          var j = M.pending;
                          j === null ? C.next = C : (C.next = j.next, j.next = C), M.pending = C;
                        }
                      }
                      d.lanes |= l, C = d.alternate, C !== null && (C.lanes |= l), tn(
                        d.return,
                        l,
                        r
                      ), S.lanes |= l;
                      break;
                    }
                    C = C.next;
                  }
                } else if (d.tag === 10)
                  h = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (h = d.return, h === null)
                    throw Error(b(341));
                  h.lanes |= l, S = h.alternate, S !== null && (S.lanes |= l), tn(h, l, r), h = d.sibling;
                } else
                  h = d.child;
                if (h !== null)
                  h.return = d;
                else
                  for (h = d; h !== null; ) {
                    if (h === r) {
                      h = null;
                      break;
                    }
                    if (d = h.sibling, d !== null) {
                      d.return = h.return, h = d;
                      break;
                    }
                    h = h.return;
                  }
                d = h;
              }
          Gt(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, W(r, l), c = zt(c), o = o(c), r.flags |= 1, Gt(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = dr(o, r.pendingProps), c = dr(o.type, c), rc(n, r, o, c, l);
      case 15:
        return Jn(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : dr(o, c), Tn(n, r), r.tag = 1, Ct(o) ? (n = !0, ks(r)) : n = !1, W(r, l), Tv(r, o, c), As(r, o, c, l), Ov(null, r, o, !0, n, l);
      case 19:
        return id(n, r, l);
      case 22:
        return vl(n, r, l);
    }
    throw Error(b(156, r.tag));
  };
  function yd(n, r) {
    return nf(n, r);
  }
  function sy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Vr(n, r, l, o) {
    return new sy(n, r, l, o);
  }
  function gd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function cy(n) {
    if (typeof n == "function")
      return gd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === jn)
        return 11;
      if (n === Cr)
        return 14;
    }
    return 2;
  }
  function Ni(n, r) {
    var l = n.alternate;
    return l === null ? (l = Vr(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function hc(n, r, l, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function")
      gd(n) && (h = 1);
    else if (typeof n == "string")
      h = 5;
    else
      e:
        switch (n) {
          case je:
            return Rl(l.children, c, d, r);
          case bn:
            h = 8, c |= 8;
            break;
          case ir:
            return n = Vr(12, l, r, c | 2), n.elementType = ir, n.lanes = d, n;
          case Ie:
            return n = Vr(13, l, r, c), n.elementType = Ie, n.lanes = d, n;
          case it:
            return n = Vr(19, l, r, c), n.elementType = it, n.lanes = d, n;
          case Er:
            return zo(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Ht:
                  h = 10;
                  break e;
                case vt:
                  h = 9;
                  break e;
                case jn:
                  h = 11;
                  break e;
                case Cr:
                  h = 14;
                  break e;
                case Dt:
                  h = 16, o = null;
                  break e;
              }
            throw Error(b(130, n == null ? n : typeof n, ""));
        }
    return r = Vr(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Rl(n, r, l, o) {
    return n = Vr(7, n, o, r), n.lanes = l, n;
  }
  function zo(n, r, l, o) {
    return n = Vr(22, n, o, r), n.elementType = Er, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Uo(n, r, l) {
    return n = Vr(6, n, null, r), n.lanes = l, n;
  }
  function xl(n, r, l) {
    return r = Vr(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function fy(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = uf(0), this.expirationTimes = uf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = uf(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function mc(n, r, l, o, c, d, h, S, C) {
    return n = new fy(n, r, l, S, C), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Vr(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Qf(d), n;
  }
  function Qv(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: nt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Sd(n) {
    if (!n)
      return va;
    n = n._reactInternals;
    e: {
      if (da(n) !== n || n.tag !== 1)
        throw Error(b(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Ct(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(b(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Ct(l))
        return ho(n, l, r);
    }
    return r;
  }
  function Iv(n, r, l, o, c, d, h, S, C) {
    return n = mc(l, o, !0, n, c, d, h, S, C), n.context = Sd(null), l = n.current, o = wn(), c = Pt(l), d = ja(o, c), d.callback = r ?? null, xi(l, d, c), n.current.lanes = c, Xi(n, c, o), kn(n, o), n;
  }
  function Ao(n, r, l, o) {
    var c = r.current, d = wn(), h = Pt(c);
    return l = Sd(l), r.context === null ? r.context = l : r.pendingContext = l, r = ja(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = xi(c, r, h), n !== null && (Dn(n, c, h, d), zs(n, c, h)), h;
  }
  function yc(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Gv(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Cd(n, r) {
    Gv(n, r), (n = n.alternate) && Gv(n, r);
  }
  function Wv() {
    return null;
  }
  var Ed = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function gc(n) {
    this._internalRoot = n;
  }
  Ga.prototype.render = gc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(b(409));
    Ao(n, r, null, null);
  }, Ga.prototype.unmount = gc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Li(function() {
        Ao(null, n, null, null);
      }), r[Fa] = null;
    }
  };
  function Ga(n) {
    this._internalRoot = n;
  }
  Ga.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Lp();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < ut.length && r !== 0 && r < ut[l].priority; l++)
        ;
      ut.splice(l, 0, n), l === 0 && Np(n);
    }
  };
  function Td(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Sc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Xv() {
  }
  function dy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var M = yc(h);
          d.call(M);
        };
      }
      var h = Iv(r, o, n, 0, null, !1, !1, "", Xv);
      return n._reactRootContainer = h, n[Fa] = h.current, Zl(n.nodeType === 8 ? n.parentNode : n), Li(), h;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var S = o;
      o = function() {
        var M = yc(C);
        S.call(M);
      };
    }
    var C = mc(n, 0, !1, null, null, !1, !1, "", Xv);
    return n._reactRootContainer = C, n[Fa] = C.current, Zl(n.nodeType === 8 ? n.parentNode : n), Li(function() {
      Ao(r, C, l, o);
    }), C;
  }
  function Cc(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == "function") {
        var S = c;
        c = function() {
          var C = yc(h);
          S.call(C);
        };
      }
      Ao(r, h, n, c);
    } else
      h = dy(l, r, n, c, o);
    return yc(h);
  }
  Mp = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Wi(r.pendingLanes);
          l !== 0 && (Gu(r, l | 1), kn(r, _t()), !($e & 6) && (mu = _t() + 500, Gn()));
        }
        break;
      case 13:
        Li(function() {
          var o = Ba(n, 1);
          if (o !== null) {
            var c = wn();
            Dn(o, n, 1, c);
          }
        }), Cd(n, 1);
    }
  }, ss = function(n) {
    if (n.tag === 13) {
      var r = Ba(n, 134217728);
      if (r !== null) {
        var l = wn();
        Dn(r, n, 134217728, l);
      }
      Cd(n, 134217728);
    }
  }, ft = function(n) {
    if (n.tag === 13) {
      var r = Pt(n), l = Ba(n, r);
      if (l !== null) {
        var o = wn();
        Dn(l, n, r, o);
      }
      Cd(n, r);
    }
  }, Lp = function() {
    return at;
  }, sf = function(n, r) {
    var l = at;
    try {
      return at = n, r();
    } finally {
      at = l;
    }
  }, fa = function(n, r, l) {
    switch (r) {
      case "input":
        if (ur(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Se(o);
              if (!c)
                throw Error(b(90));
              ba(o), ur(o, c);
            }
          }
        }
        break;
      case "textarea":
        oi(n, l);
        break;
      case "select":
        r = l.value, r != null && ui(n, !!l.multiple, r, !1);
    }
  }, Tp = Su, Rp = Li;
  var py = { usingClientEntryPoint: !1, Events: [vo, Jl, Se, ns, rs, Su] }, Eu = { findFiberByHostInstance: _r, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, vy = { bundleType: Eu.bundleType, version: Eu.version, rendererPackageName: Eu.rendererPackageName, rendererConfig: Eu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: me.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = xp(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Eu.findFiberByHostInstance || Wv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ec = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ec.isDisabled && Ec.supportsFiber)
      try {
        Iu = Ec.inject(vy), Zr = Ec;
      } catch {
      }
  }
  return Ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = py, Ir.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Td(r))
      throw Error(b(200));
    return Qv(n, r, null, l);
  }, Ir.createRoot = function(n, r) {
    if (!Td(n))
      throw Error(b(299));
    var l = !1, o = "", c = Ed;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = mc(n, 1, !1, null, null, l, !1, o, c), n[Fa] = r.current, Zl(n.nodeType === 8 ? n.parentNode : n), new gc(r);
  }, Ir.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(b(188)) : (n = Object.keys(n).join(","), Error(b(268, n)));
    return n = xp(r), n = n === null ? null : n.stateNode, n;
  }, Ir.flushSync = function(n) {
    return Li(n);
  }, Ir.hydrate = function(n, r, l) {
    if (!Sc(r))
      throw Error(b(200));
    return Cc(null, n, r, !0, l);
  }, Ir.hydrateRoot = function(n, r, l) {
    if (!Td(n))
      throw Error(b(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = Ed;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = Iv(r, null, n, 1, l ?? null, c, !1, d, h), n[Fa] = r.current, Zl(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Ga(r);
  }, Ir.render = function(n, r, l) {
    if (!Sc(r))
      throw Error(b(200));
    return Cc(null, n, r, !1, l);
  }, Ir.unmountComponentAtNode = function(n) {
    if (!Sc(n))
      throw Error(b(40));
    return n._reactRootContainer ? (Li(function() {
      Cc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Fa] = null;
      });
    }), !0) : !1;
  }, Ir.unstable_batchedUpdates = Su, Ir.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Sc(l))
      throw Error(b(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(b(38));
    return Cc(n, r, l, !1, o);
  }, Ir.version = "18.2.0-next-9e3b772b8-20220608", Ir;
}
function eT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eT);
    } catch (z) {
      console.error(z);
    }
  }
}
process.env.NODE_ENV === "production" ? (eT(), f0.exports = ab()) : f0.exports = rb();
var ib = f0.exports;
const Dm = Symbol(), lb = Symbol(), tT = typeof window > "u" || /ServerSideRendering/.test(window.navigator && window.navigator.userAgent) ? s0 : Jk, ub = Cp.unstable_runWithPriority ? (z) => Cp.unstable_runWithPriority(Cp.unstable_NormalPriority, z) : (z) => z(), ob = (z) => z;
function nT(z) {
  const $ = Xk({ [Dm]: { v: { current: z }, n: { current: -1 }, l: /* @__PURE__ */ new Set(), u: (ue) => ue() } });
  var b;
  return $[lb] = $.Provider, $.Provider = (b = $.Provider, ({ value: ue, children: De }) => {
    const he = ts(ue), g = ts(0), [Be, fe] = Kk(null);
    Be && (Be(ue), fe(null));
    const G = ts();
    if (!G.current) {
      const be = /* @__PURE__ */ new Set(), F = (A, K) => {
        ib.unstable_batchedUpdates(() => {
          g.current += 1;
          const ye = { n: g.current };
          K != null && K.suspense && (ye.n *= -1, ye.p = new Promise((Oe) => {
            fe(() => (Fe) => {
              ye.v = Fe, delete ye.p, Oe(Fe);
            });
          })), be.forEach((Oe) => Oe(ye)), A();
        });
      };
      G.current = { [Dm]: { v: he, n: g, l: be, u: F } };
    }
    return tT(() => {
      he.current = ue, g.current += 1, ub(() => {
        G.current[Dm].l.forEach((be) => {
          be({ n: g.current, v: ue });
        });
      });
    }, [ue]), qk(b, { value: G.current }, De);
  }), delete $.Consumer, $;
}
function rT(z, $) {
  const b = Zk(z)[Dm];
  if (typeof process == "object" && process.env.NODE_ENV !== "production" && !b)
    throw new Error("useContextSelector requires special context");
  const { v: { current: ue }, n: { current: De }, l: he } = b, g = $(ue), [Be, fe] = ZE((G, be) => {
    if (!be)
      return [ue, g];
    if ("p" in be)
      throw be.p;
    if (be.n === De)
      return Object.is(G[1], g) ? G : [ue, g];
    try {
      if ("v" in be) {
        if (Object.is(G[0], be.v))
          return G;
        const F = $(be.v);
        return Object.is(G[1], F) ? G : [be.v, F];
      }
    } catch {
    }
    return [...G];
  }, [ue, g]);
  return Object.is(Be[1], g) || fe(), tT(() => (he.add(fe), () => {
    he.delete(fe);
  }), [he]), Be[1];
}
function sb(z) {
  return rT(z, ob);
}
const aT = {
  changed: {},
  errors: {},
  initialValues: {},
  isValid: !0,
  isValidating: !1,
  lastAction: "init",
  required: {},
  submitted: 0,
  touched: {},
  values: {}
}, iT = nT(aT), lT = nT(() => {
});
var uT = { exports: {} };
(function(z) {
  (function($, b) {
    z.exports = b();
  })(eb, function() {
    var $ = Object.prototype.toString;
    function b(F, A) {
      return F == null ? !1 : Object.prototype.hasOwnProperty.call(F, A);
    }
    function ue(F) {
      if (!F || g(F) && F.length === 0)
        return !0;
      if (typeof F != "string") {
        for (var A in F)
          if (b(F, A))
            return !1;
        return !0;
      }
      return !1;
    }
    function De(F) {
      return $.call(F);
    }
    function he(F) {
      return typeof F == "object" && De(F) === "[object Object]";
    }
    var g = Array.isArray || function(F) {
      return $.call(F) === "[object Array]";
    };
    function Be(F) {
      return typeof F == "boolean" || De(F) === "[object Boolean]";
    }
    function fe(F) {
      var A = parseInt(F);
      return A.toString() === F ? A : F;
    }
    function G(F) {
      F = F || {};
      var A = function(ne) {
        return Object.keys(A).reduce(function(V, Q) {
          return Q === "create" || typeof A[Q] == "function" && (V[Q] = A[Q].bind(A, ne)), V;
        }, {});
      }, K;
      F.includeInheritedProps ? K = function() {
        return !0;
      } : K = function(ne, V) {
        return typeof V == "number" && Array.isArray(ne) || b(ne, V);
      };
      function ye(ne, V) {
        if (K(ne, V))
          return ne[V];
      }
      var Oe;
      F.includeInheritedProps ? Oe = function(ne, V) {
        typeof V != "string" && typeof V != "number" && (V = String(V));
        var Q = ye(ne, V);
        if (V === "__proto__" || V === "prototype" || V === "constructor" && typeof Q == "function")
          throw new Error("For security reasons, object's magic properties cannot be set");
        return Q;
      } : Oe = function(ne, V) {
        return ye(ne, V);
      };
      function Fe(ne, V, Q, me) {
        if (typeof V == "number" && (V = [V]), !V || V.length === 0)
          return ne;
        if (typeof V == "string")
          return Fe(ne, V.split(".").map(fe), Q, me);
        var Ee = V[0], nt = Oe(ne, Ee);
        return V.length === 1 ? ((nt === void 0 || !me) && (ne[Ee] = Q), nt) : (nt === void 0 && (typeof V[1] == "number" ? ne[Ee] = [] : ne[Ee] = {}), Fe(ne[Ee], V.slice(1), Q, me));
      }
      return A.has = function(ne, V) {
        if (typeof V == "number" ? V = [V] : typeof V == "string" && (V = V.split(".")), !V || V.length === 0)
          return !!ne;
        for (var Q = 0; Q < V.length; Q++) {
          var me = fe(V[Q]);
          if (typeof me == "number" && g(ne) && me < ne.length || (F.includeInheritedProps ? me in Object(ne) : b(ne, me)))
            ne = ne[me];
          else
            return !1;
        }
        return !0;
      }, A.ensureExists = function(ne, V, Q) {
        return Fe(ne, V, Q, !0);
      }, A.set = function(ne, V, Q, me) {
        return Fe(ne, V, Q, me);
      }, A.insert = function(ne, V, Q, me) {
        var Ee = A.get(ne, V);
        me = ~~me, g(Ee) || (Ee = [], A.set(ne, V, Ee)), Ee.splice(me, 0, Q);
      }, A.empty = function(ne, V) {
        if (!ue(V) && ne != null) {
          var Q, me;
          if (Q = A.get(ne, V)) {
            if (typeof Q == "string")
              return A.set(ne, V, "");
            if (Be(Q))
              return A.set(ne, V, !1);
            if (typeof Q == "number")
              return A.set(ne, V, 0);
            if (g(Q))
              Q.length = 0;
            else if (he(Q))
              for (me in Q)
                K(Q, me) && delete Q[me];
            else
              return A.set(ne, V, null);
          }
        }
      }, A.push = function(ne, V) {
        var Q = A.get(ne, V);
        g(Q) || (Q = [], A.set(ne, V, Q)), Q.push.apply(Q, Array.prototype.slice.call(arguments, 2));
      }, A.coalesce = function(ne, V, Q) {
        for (var me, Ee = 0, nt = V.length; Ee < nt; Ee++)
          if ((me = A.get(ne, V[Ee])) !== void 0)
            return me;
        return Q;
      }, A.get = function(ne, V, Q) {
        if (typeof V == "number" && (V = [V]), !V || V.length === 0)
          return ne;
        if (ne == null)
          return Q;
        if (typeof V == "string")
          return A.get(ne, V.split("."), Q);
        var me = fe(V[0]), Ee = Oe(ne, me);
        return Ee === void 0 ? Q : V.length === 1 ? Ee : A.get(ne[me], V.slice(1), Q);
      }, A.del = function(V, Q) {
        if (typeof Q == "number" && (Q = [Q]), V == null || ue(Q))
          return V;
        if (typeof Q == "string")
          return A.del(V, Q.split("."));
        var me = fe(Q[0]);
        if (Oe(V, me), !K(V, me))
          return V;
        if (Q.length === 1)
          g(V) ? V.splice(me, 1) : delete V[me];
        else
          return A.del(V[me], Q.slice(1));
        return V;
      }, A;
    }
    var be = G();
    return be.create = G, be.withInheritedProps = G({ includeInheritedProps: !0 }), be;
  });
})(uT);
var ka = uT.exports;
function cb(z, $) {
  return function(ue, De) {
    switch (De.type) {
      case "initialValues":
        ue.initialValues = { ...De.value || {} };
      case "reset":
        ue.values = { ...ue.initialValues || {} };
      case "init": {
        const he = z == null ? void 0 : z(ue.values || {});
        return {
          ...ue,
          changed: {},
          errors: {},
          initialValues: "initialValues" in De && De.initialValues || ue.initialValues || {},
          isSubmitting: !1,
          isValid: !he,
          isValidating: !1,
          required: ($ == null ? void 0 : $(ue.values)) || {},
          submitted: 0,
          touched: {}
        };
      }
      case "setValue": {
        const he = { ...ue.values };
        if (ka.get(he, De.name) === De.value)
          return ue;
        ka.set(he, De.name, De.value);
        const g = z == null ? void 0 : z(he);
        let Be = ue.touched || {};
        return ka.get(Be, De.name) || (Be = { ...Be }, ka.set(Be, De.name, !0)), {
          ...ue,
          changed: { ...ue.changed, [De.name]: !0 },
          errors: g || {},
          isValid: !g,
          required: ($ == null ? void 0 : $(he)) || {},
          touched: Be,
          values: he
        };
      }
      case "setDisabled":
        return ue.disabled === De.value ? ue : { ...ue, disabled: !!De.value };
      case "setTouched": {
        const he = (De.name ? Array.isArray(De.name) ? De.name : [De.name] : []).filter((g) => ue.touched[g] !== De.touched);
        return he.length ? {
          ...ue,
          touched: he.reduce((g, Be) => ({ ...g, [Be]: !0 }), ue.touched || {})
        } : ue;
      }
      case "startSubmit": {
        if (ue.isSubmitting)
          return ue;
        const he = z == null ? void 0 : z(ue.values), g = !he;
        return {
          ...ue,
          disabled: g,
          errors: he || {},
          isSubmitting: g,
          isValid: g,
          submitted: ue.submitted || 1
        };
      }
      case "endSubmit":
        return ue.isSubmitting ? {
          ...ue,
          disabled: !1,
          isSubmitting: !1
        } : ue;
      default:
        return ue;
    }
  };
}
function fb(z, $, b, ue, De, he) {
  const g = ts(), Be = ts((be, F, A) => {
    const K = g.current, ye = De.current, Oe = he.current;
    if (!K) {
      console.error('Cannot access to Dispatch trigger inside "on" action');
      return;
    }
    if (ye && be.type === "startSubmit" && A.isSubmitting && !F.isSubmitting) {
      const Fe = ye == null ? void 0 : ye(A.values);
      Fe && typeof Fe.then == "function" ? Fe.finally(() => K({ type: "endSubmit" })) : K({ type: "endSubmit" });
    }
    Oe && Oe(be, F, A, K);
  }), fe = Zc(
    (be, F) => {
      const A = z(be, F);
      return Be.current(F, be, A), A;
    },
    [z, Be]
  ), G = ZE(
    fe,
    aT,
    (be) => z(
      {
        ...be,
        disabled: b,
        initialValues: $ || {},
        readOnly: ue,
        values: $ || {}
      },
      { type: "init" }
    )
  );
  return g.current = G[1], G;
}
const Rb = ({
  children: z,
  disabled: $,
  getRequired: b,
  id: ue,
  initialValues: De,
  onStateUpdate: he,
  onSubmit: g,
  readOnly: Be,
  reducer: fe,
  validation: G
}) => {
  const be = Zc(
    (ne) => (G == null ? void 0 : G(ne)) || void 0,
    [G]
  ), F = JE(
    () => fe || cb(be, b),
    [b, fe, be]
  ), A = ts(he);
  A.current = he;
  const K = ts(g);
  K.current = g;
  const [ye, Oe] = fb(
    F,
    De,
    !!$,
    !!Be,
    K,
    A
  );
  s0(() => {
    De !== ye.initialValues && Oe({ type: "initialValues", value: De });
  }, [De]), s0(() => {
    ye.disabled !== !!$ && Oe({ type: "setDisabled", value: !!$ });
  }, [$, Oe]);
  const Fe = Zc(
    (ne) => {
      ne.preventDefault(), Oe({ type: "startSubmit" });
    },
    [Oe]
  );
  return /* @__PURE__ */ l0(lT.Provider, { value: Oe, children: /* @__PURE__ */ l0(iT.Provider, { value: ye, children: /* @__PURE__ */ Wk("form", { id: ue, onSubmit: Fe, children: [
    typeof z == "function" ? z(ye, Oe) : z,
    /* @__PURE__ */ l0("button", { style: { left: -9999, position: "fixed", top: -9999 }, type: "submit" })
  ] }) }) });
};
function Bu(z) {
  return rT(iT, z);
}
function db(z) {
  return Bu(
    ($) => ($ == null ? void 0 : $.submitted) > 0 || ka.get(($ == null ? void 0 : $.touched) || {}, z) ? ka.get(($ == null ? void 0 : $.errors) || {}, z) : void 0
  );
}
function pb(z) {
  return Bu(($) => ($ == null ? void 0 : $.submitted) > 0 || !!ka.get(($ == null ? void 0 : $.touched) || {}, z));
}
function d0() {
  return sb(lT) || (() => {
  });
}
function vb(z) {
  const $ = d0();
  return Zc(
    (b) => $({ error: b, name: z, type: "setError" }),
    [$, z]
  );
}
function hb(z) {
  const $ = d0();
  return Zc(
    (b = !0) => $({ name: z, touched: b, type: "setTouched" }),
    [$, z]
  );
}
function mb(z) {
  const $ = d0();
  return Zc((b) => $({ name: z, type: "setValue", value: b }), [$, z]);
}
function xb(z) {
  const $ = Bu((A) => !!ka.get((A == null ? void 0 : A.changed) || {}, z)), b = Bu((A) => {
    const K = ka.get((A == null ? void 0 : A.disabledFields) || {}, z);
    return typeof K == "boolean" ? K : !!(A != null && A.disabled);
  }), ue = Bu((A) => !!(A != null && A.readOnly)), De = db(z), he = Bu((A) => ka.get((A == null ? void 0 : A.initialValues) || {}, z) || null), g = Bu((A) => !!ka.get(A == null ? void 0 : A.required, z)), Be = yb(z), fe = pb(z), G = mb(z), be = hb(z), F = vb(z);
  return JE(
    () => ({
      error: De,
      initialValue: he,
      isChanged: $,
      isDisabled: b,
      isReadOnly: ue,
      isRequired: g,
      isTouched: fe,
      name: z,
      onChange: G,
      setError: F,
      setTouched: be,
      setValue: G,
      value: Be
    }),
    [
      $,
      b,
      De,
      ue,
      he,
      g,
      z,
      F,
      be,
      G,
      fe,
      Be
    ]
  );
}
function yb(z) {
  return Bu(($) => ka.get($.values || {}, z) || null);
}
export {
  Rb as default,
  xb as useField,
  yb as useFieldValue
};
