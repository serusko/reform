import { jsx as l0, jsxs as Wk } from "react/jsx-runtime";
import KE, { createContext as Xk, useRef as es, useState as qk, createElement as Kk, useContext as Zk, useReducer as ZE, useEffect as s0, useLayoutEffect as Jk, useCallback as Kc, useMemo as JE } from "react";
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
  return GE || (GE = 1, function(A) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var K = !1, x = !1, ye = 5;
      function Fe(Z, Te) {
        var je = Z.length;
        Z.push(Te), Ze(Z, Te, je);
      }
      function Ce(Z) {
        return Z.length === 0 ? null : Z[0];
      }
      function g(Z) {
        if (Z.length === 0)
          return null;
        var Te = Z[0], je = Z.pop();
        return je !== Te && (Z[0] = je, le(Z, je, 0)), Te;
      }
      function Ze(Z, Te, je) {
        for (var ct = je; ct > 0; ) {
          var Nt = ct - 1 >>> 1, Sn = Z[Nt];
          if (G(Sn, Te) > 0)
            Z[Nt] = Te, Z[ct] = Sn, ct = Nt;
          else
            return;
        }
      }
      function le(Z, Te, je) {
        for (var ct = je, Nt = Z.length, Sn = Nt >>> 1; ct < Sn; ) {
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
        var je = Z.sortIndex - Te.sortIndex;
        return je !== 0 ? je : Z.id - Te.id;
      }
      var be = 1, F = 2, U = 3, I = 4, fe = 5;
      function Ae(Z, Te) {
      }
      var He = typeof performance == "object" && typeof performance.now == "function";
      if (He) {
        var ue = performance;
        A.unstable_now = function() {
          return ue.now();
        };
      } else {
        var V = Date, $ = V.now();
        A.unstable_now = function() {
          return V.now() - $;
        };
      }
      var he = 1073741823, Ee = -1, nt = 250, Be = 5e3, bn = 1e4, ir = he, Ht = [], vt = [], jn = 1, Qe = null, it = U, Cr = !1, Dt = !1, Er = !1, q = typeof setTimeout == "function" ? setTimeout : null, De = typeof clearTimeout == "function" ? clearTimeout : null, ae = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function rt(Z) {
        for (var Te = Ce(vt); Te !== null; ) {
          if (Te.callback === null)
            g(vt);
          else if (Te.startTime <= Z)
            g(vt), Te.sortIndex = Te.expirationTime, Fe(Ht, Te);
          else
            return;
          Te = Ce(vt);
        }
      }
      function lt(Z) {
        if (Er = !1, rt(Z), !Dt)
          if (Ce(Ht) !== null)
            Dt = !0, oi(Pn);
          else {
            var Te = Ce(vt);
            Te !== null && $n(lt, Te.startTime - Z);
          }
      }
      function Pn(Z, Te) {
        Dt = !1, Er && (Er = !1, qr()), Cr = !0;
        var je = it;
        try {
          var ct;
          if (!x)
            return lr(Z, Te);
        } finally {
          Qe = null, it = je, Cr = !1;
        }
      }
      function lr(Z, Te) {
        var je = Te;
        for (rt(je), Qe = Ce(Ht); Qe !== null && !K && !(Qe.expirationTime > je && (!Z || Al())); ) {
          var ct = Qe.callback;
          if (typeof ct == "function") {
            Qe.callback = null, it = Qe.priorityLevel;
            var Nt = Qe.expirationTime <= je, Sn = ct(Nt);
            je = A.unstable_now(), typeof Sn == "function" ? Qe.callback = Sn : Qe === Ce(Ht) && g(Ht), rt(je);
          } else
            g(Ht);
          Qe = Ce(Ht);
        }
        if (Qe !== null)
          return !0;
        var $t = Ce(vt);
        return $t !== null && $n(lt, $t.startTime - je), !1;
      }
      function ai(Z, Te) {
        switch (Z) {
          case be:
          case F:
          case U:
          case I:
          case fe:
            break;
          default:
            Z = U;
        }
        var je = it;
        it = Z;
        try {
          return Te();
        } finally {
          it = je;
        }
      }
      function _n(Z) {
        var Te;
        switch (it) {
          case be:
          case F:
          case U:
            Te = U;
            break;
          default:
            Te = it;
            break;
        }
        var je = it;
        it = Te;
        try {
          return Z();
        } finally {
          it = je;
        }
      }
      function ii(Z) {
        var Te = it;
        return function() {
          var je = it;
          it = Te;
          try {
            return Z.apply(this, arguments);
          } finally {
            it = je;
          }
        };
      }
      function Gr(Z, Te, je) {
        var ct = A.unstable_now(), Nt;
        if (typeof je == "object" && je !== null) {
          var Sn = je.delay;
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
          case fe:
            $t = ir;
            break;
          case I:
            $t = bn;
            break;
          case U:
          default:
            $t = Be;
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
        return Nt > ct ? (kt.sortIndex = Nt, Fe(vt, kt), Ce(Ht) === null && kt === Ce(vt) && (Er ? qr() : Er = !0, $n(lt, Nt - ct))) : (kt.sortIndex = xr, Fe(Ht, kt), !Dt && !Cr && (Dt = !0, oi(Pn))), kt;
      }
      function sa() {
      }
      function Bu() {
        !Dt && !Cr && (Dt = !0, oi(Pn));
      }
      function Tr() {
        return Ce(Ht);
      }
      function ka(Z) {
        Z.callback = null;
      }
      function gn() {
        return it;
      }
      var Yn = !1, Rr = null, Wr = -1, ur = ye, ba = -1;
      function Al() {
        var Z = A.unstable_now() - ba;
        return !(Z < ur);
      }
      function $i() {
      }
      function li(Z) {
        if (Z < 0 || Z > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Z > 0 ? ur = Math.floor(1e3 / Z) : ur = ye;
      }
      var Qi = function() {
        if (Rr !== null) {
          var Z = A.unstable_now();
          ba = Z;
          var Te = !0, je = !0;
          try {
            je = Rr(Te, Z);
          } finally {
            je ? Xr() : (Yn = !1, Rr = null);
          }
        } else
          Yn = !1;
      }, Xr;
      if (typeof ae == "function")
        Xr = function() {
          ae(Qi);
        };
      else if (typeof MessageChannel < "u") {
        var ui = new MessageChannel(), ca = ui.port2;
        ui.port1.onmessage = Qi, Xr = function() {
          ca.postMessage(null);
        };
      } else
        Xr = function() {
          q(Qi, 0);
        };
      function oi(Z) {
        Rr = Z, Yn || (Yn = !0, Xr());
      }
      function $n(Z, Te) {
        Wr = q(function() {
          Z(A.unstable_now());
        }, Te);
      }
      function qr() {
        De(Wr), Wr = -1;
      }
      var ju = $i, si = null;
      A.unstable_IdlePriority = fe, A.unstable_ImmediatePriority = be, A.unstable_LowPriority = I, A.unstable_NormalPriority = U, A.unstable_Profiling = si, A.unstable_UserBlockingPriority = F, A.unstable_cancelCallback = ka, A.unstable_continueExecution = Bu, A.unstable_forceFrameRate = li, A.unstable_getCurrentPriorityLevel = gn, A.unstable_getFirstCallbackNode = Tr, A.unstable_next = _n, A.unstable_pauseExecution = sa, A.unstable_requestPaint = ju, A.unstable_runWithPriority = ai, A.unstable_scheduleCallback = Gr, A.unstable_shouldYield = Al, A.unstable_wrapCallback = ii, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
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
  return WE || (WE = 1, function(A) {
    function K(q, De) {
      var ae = q.length;
      q.push(De);
      e:
        for (; 0 < ae; ) {
          var rt = ae - 1 >>> 1, lt = q[rt];
          if (0 < Fe(lt, De))
            q[rt] = De, q[ae] = lt, ae = rt;
          else
            break e;
        }
    }
    function x(q) {
      return q.length === 0 ? null : q[0];
    }
    function ye(q) {
      if (q.length === 0)
        return null;
      var De = q[0], ae = q.pop();
      if (ae !== De) {
        q[0] = ae;
        e:
          for (var rt = 0, lt = q.length, Pn = lt >>> 1; rt < Pn; ) {
            var lr = 2 * (rt + 1) - 1, ai = q[lr], _n = lr + 1, ii = q[_n];
            if (0 > Fe(ai, ae))
              _n < lt && 0 > Fe(ii, ai) ? (q[rt] = ii, q[_n] = ae, rt = _n) : (q[rt] = ai, q[lr] = ae, rt = lr);
            else if (_n < lt && 0 > Fe(ii, ae))
              q[rt] = ii, q[_n] = ae, rt = _n;
            else
              break e;
          }
      }
      return De;
    }
    function Fe(q, De) {
      var ae = q.sortIndex - De.sortIndex;
      return ae !== 0 ? ae : q.id - De.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Ce = performance;
      A.unstable_now = function() {
        return Ce.now();
      };
    } else {
      var g = Date, Ze = g.now();
      A.unstable_now = function() {
        return g.now() - Ze;
      };
    }
    var le = [], G = [], be = 1, F = null, U = 3, I = !1, fe = !1, Ae = !1, He = typeof setTimeout == "function" ? setTimeout : null, ue = typeof clearTimeout == "function" ? clearTimeout : null, V = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function $(q) {
      for (var De = x(G); De !== null; ) {
        if (De.callback === null)
          ye(G);
        else if (De.startTime <= q)
          ye(G), De.sortIndex = De.expirationTime, K(le, De);
        else
          break;
        De = x(G);
      }
    }
    function he(q) {
      if (Ae = !1, $(q), !fe)
        if (x(le) !== null)
          fe = !0, Dt(Ee);
        else {
          var De = x(G);
          De !== null && Er(he, De.startTime - q);
        }
    }
    function Ee(q, De) {
      fe = !1, Ae && (Ae = !1, ue(bn), bn = -1), I = !0;
      var ae = U;
      try {
        for ($(De), F = x(le); F !== null && (!(F.expirationTime > De) || q && !vt()); ) {
          var rt = F.callback;
          if (typeof rt == "function") {
            F.callback = null, U = F.priorityLevel;
            var lt = rt(F.expirationTime <= De);
            De = A.unstable_now(), typeof lt == "function" ? F.callback = lt : F === x(le) && ye(le), $(De);
          } else
            ye(le);
          F = x(le);
        }
        if (F !== null)
          var Pn = !0;
        else {
          var lr = x(G);
          lr !== null && Er(he, lr.startTime - De), Pn = !1;
        }
        return Pn;
      } finally {
        F = null, U = ae, I = !1;
      }
    }
    var nt = !1, Be = null, bn = -1, ir = 5, Ht = -1;
    function vt() {
      return !(A.unstable_now() - Ht < ir);
    }
    function jn() {
      if (Be !== null) {
        var q = A.unstable_now();
        Ht = q;
        var De = !0;
        try {
          De = Be(!0, q);
        } finally {
          De ? Qe() : (nt = !1, Be = null);
        }
      } else
        nt = !1;
    }
    var Qe;
    if (typeof V == "function")
      Qe = function() {
        V(jn);
      };
    else if (typeof MessageChannel < "u") {
      var it = new MessageChannel(), Cr = it.port2;
      it.port1.onmessage = jn, Qe = function() {
        Cr.postMessage(null);
      };
    } else
      Qe = function() {
        He(jn, 0);
      };
    function Dt(q) {
      Be = q, nt || (nt = !0, Qe());
    }
    function Er(q, De) {
      bn = He(function() {
        q(A.unstable_now());
      }, De);
    }
    A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function(q) {
      q.callback = null;
    }, A.unstable_continueExecution = function() {
      fe || I || (fe = !0, Dt(Ee));
    }, A.unstable_forceFrameRate = function(q) {
      0 > q || 125 < q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ir = 0 < q ? Math.floor(1e3 / q) : 5;
    }, A.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, A.unstable_getFirstCallbackNode = function() {
      return x(le);
    }, A.unstable_next = function(q) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var De = 3;
          break;
        default:
          De = U;
      }
      var ae = U;
      U = De;
      try {
        return q();
      } finally {
        U = ae;
      }
    }, A.unstable_pauseExecution = function() {
    }, A.unstable_requestPaint = function() {
    }, A.unstable_runWithPriority = function(q, De) {
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
      var ae = U;
      U = q;
      try {
        return De();
      } finally {
        U = ae;
      }
    }, A.unstable_scheduleCallback = function(q, De, ae) {
      var rt = A.unstable_now();
      switch (typeof ae == "object" && ae !== null ? (ae = ae.delay, ae = typeof ae == "number" && 0 < ae ? rt + ae : rt) : ae = rt, q) {
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
      return lt = ae + lt, q = { id: be++, callback: De, priorityLevel: q, startTime: ae, expirationTime: lt, sortIndex: -1 }, ae > rt ? (q.sortIndex = ae, K(G, q), x(le) === null && q === x(G) && (Ae ? (ue(bn), bn = -1) : Ae = !0, Er(he, ae - rt))) : (q.sortIndex = lt, K(le, q), fe || I || (fe = !0, Dt(Ee))), q;
    }, A.unstable_shouldYield = vt, A.unstable_wrapCallback = function(q) {
      var De = U;
      return function() {
        var ae = U;
        U = De;
        try {
          return q.apply(this, arguments);
        } finally {
          U = ae;
        }
      };
    };
  }(o0)), o0;
}
process.env.NODE_ENV === "production" ? c0.exports = nb() : c0.exports = tb();
var Sp = c0.exports, f0 = { exports: {} }, Qr = {};
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
    var A = KE, K = Sp, x = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ye = !1;
    function Fe(e) {
      ye = e;
    }
    function Ce(e) {
      if (!ye) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ze("warn", e, a);
      }
    }
    function g(e) {
      if (!ye) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ze("error", e, a);
      }
    }
    function Ze(e, t, a) {
      {
        var i = x.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var le = 0, G = 1, be = 2, F = 3, U = 4, I = 5, fe = 6, Ae = 7, He = 8, ue = 9, V = 10, $ = 11, he = 12, Ee = 13, nt = 14, Be = 15, bn = 16, ir = 17, Ht = 18, vt = 19, jn = 21, Qe = 22, it = 23, Cr = 24, Dt = 25, Er = !0, q = !1, De = !1, ae = !1, rt = !1, lt = !0, Pn = !1, lr = !1, ai = !0, _n = !0, ii = !0, Gr = /* @__PURE__ */ new Set(), sa = {}, Bu = {};
    function Tr(e, t) {
      ka(e, t), ka(e + "Capture", t);
    }
    function ka(e, t) {
      sa[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), sa[e] = t;
      {
        var a = e.toLowerCase();
        Bu[a] = e, e === "onDoubleClick" && (Bu.ondblclick = e);
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
    function ba(e, t) {
      if (Wr(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rr(e)), ur(e);
    }
    function Al(e) {
      if (Wr(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(e)), ur(e);
    }
    function $i(e, t) {
      if (Wr(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rr(e)), ur(e);
    }
    function li(e, t) {
      if (Wr(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rr(e)), ur(e);
    }
    function Qi(e) {
      if (Wr(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Rr(e)), ur(e);
    }
    function Xr(e) {
      if (Wr(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Rr(e)), ur(e);
    }
    var ui = 0, ca = 1, oi = 2, $n = 3, qr = 4, ju = 5, si = 6, Z = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Te = Z + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", je = new RegExp("^[" + Z + "][" + Te + "]*$"), ct = {}, Nt = {};
    function Sn(e) {
      return Yn.call(Nt, e) ? !0 : Yn.call(ct, e) ? !1 : je.test(e) ? (Nt[e] = !0, !0) : (ct[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function $t(e, t, a) {
      return t !== null ? t.type === ui : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function xr(e, t, a, i) {
      if (a !== null && a.type === ui)
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
          case qr:
            return t === !1;
          case ju:
            return isNaN(t);
          case si:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function fa(e) {
      return bt.hasOwnProperty(e) ? bt[e] : null;
    }
    function Ft(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === oi || t === $n || t === qr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var bt = {}, Cp = [
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
    Cp.forEach(function(e) {
      bt[e] = new Ft(
        e,
        ui,
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
        oi,
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
        qr,
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
    }), ["rowSpan", "start"].forEach(function(e) {
      bt[e] = new Ft(
        e,
        ju,
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
    var ts = /[\-\:]([a-z])/g, ns = function(e) {
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
      var t = e.replace(ts, ns);
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
      var t = e.replace(ts, ns);
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
      var t = e.replace(ts, ns);
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
    var Ep = "xlinkHref";
    bt[Ep] = new Ft(
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
    var Tp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, rs = !1;
    function Zc(e) {
      !rs && Tp.test(e) && (rs = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Pu(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        ba(a, t), i.sanitizeURL && Zc("" + a);
        var s = i.attributeName, f = null;
        if (i.type === qr) {
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
    function as(e, t, a, i) {
      {
        if (!Sn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return ba(a, t), u === "" + a ? a : u;
      }
    }
    function Ii(e, t, a, i) {
      var u = fa(t);
      if (!$t(t, u, i)) {
        if (kt(t, a, u, i) && (a = null), i || u === null) {
          if (Sn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (ba(a, t), e.setAttribute(s, "" + a));
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
          R === $n || R === qr && a === !0 ? E = "" : (ba(a, m), E = "" + a, u.sanitizeURL && Zc(E.toString())), y ? e.setAttributeNS(y, m, E) : e.setAttribute(m, E);
        }
      }
    }
    var Hl = Symbol.for("react.element"), Kr = Symbol.for("react.portal"), _a = Symbol.for("react.fragment"), Fl = Symbol.for("react.strict_mode"), Yu = Symbol.for("react.profiler"), Jc = Symbol.for("react.provider"), ef = Symbol.for("react.context"), Vl = Symbol.for("react.forward_ref"), da = Symbol.for("react.suspense"), $u = Symbol.for("react.suspense_list"), Bl = Symbol.for("react.memo"), On = Symbol.for("react.lazy"), Rp = Symbol.for("react.scope"), xp = Symbol.for("react.debug_trace_mode"), tf = Symbol.for("react.offscreen"), wp = Symbol.for("react.legacy_hidden"), km = Symbol.for("react.cache"), bm = Symbol.for("react.tracing_marker"), _t = Symbol.iterator, _m = "@@iterator";
    function Oa(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = _t && e[_t] || e[_m];
      return typeof t == "function" ? t : null;
    }
    var Pe = Object.assign, ci = 0, Dp, nf, Qu, Zr, kp, wr, bp;
    function _p() {
    }
    _p.__reactDisabledLog = !0;
    function Om() {
      {
        if (ci === 0) {
          Dp = console.log, nf = console.info, Qu = console.warn, Zr = console.error, kp = console.group, wr = console.groupCollapsed, bp = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _p,
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
        ci++;
      }
    }
    function is() {
      {
        if (ci--, ci === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Pe({}, e, {
              value: Dp
            }),
            info: Pe({}, e, {
              value: nf
            }),
            warn: Pe({}, e, {
              value: Qu
            }),
            error: Pe({}, e, {
              value: Zr
            }),
            group: Pe({}, e, {
              value: kp
            }),
            groupCollapsed: Pe({}, e, {
              value: wr
            }),
            groupEnd: Pe({}, e, {
              value: bp
            })
          });
        }
        ci < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var jl = x.ReactCurrentDispatcher, Gi;
    function Jr(e, t, a) {
      {
        if (Gi === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Gi = i && i[1] || "";
          }
        return `
` + Gi + e;
      }
    }
    var rf = !1, ls;
    {
      var af = typeof WeakMap == "function" ? WeakMap : Map;
      ls = new af();
    }
    function us(e, t) {
      if (!e || rf)
        return "";
      {
        var a = ls.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      rf = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = jl.current, jl.current = null, Om();
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
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && ls.set(e, R), R;
                  }
                while (m >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        rf = !1, jl.current = s, is(), Error.prepareStackTrace = u;
      }
      var E = e ? e.displayName || e.name : "", _ = E ? Jr(E) : "";
      return typeof e == "function" && ls.set(e, _), _;
    }
    function lf(e, t, a) {
      return us(e, !0);
    }
    function Wi(e, t, a) {
      return us(e, !1);
    }
    function Mm(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Iu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return us(e, Mm(e));
      if (typeof e == "string")
        return Jr(e);
      switch (e) {
        case da:
          return Jr("Suspense");
        case $u:
          return Jr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Vl:
            return Wi(e.render);
          case Bl:
            return Iu(e.type, t, a);
          case On: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Iu(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function at(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case I:
          return Jr(e.type);
        case bn:
          return Jr("Lazy");
        case Ee:
          return Jr("Suspense");
        case vt:
          return Jr("SuspenseList");
        case le:
        case be:
        case Be:
          return Wi(e.type);
        case $:
          return Wi(e.type.render);
        case G:
          return lf(e.type);
        default:
          return "";
      }
    }
    function uf(e) {
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
    function Op(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function os(e) {
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
        case _a:
          return "Fragment";
        case Kr:
          return "Portal";
        case Yu:
          return "Profiler";
        case Fl:
          return "StrictMode";
        case da:
          return "Suspense";
        case $u:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ef:
            var t = e;
            return os(t) + ".Consumer";
          case Jc:
            var a = e;
            return os(a._context) + ".Provider";
          case Vl:
            return Op(e, e.render, "ForwardRef");
          case Bl:
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
    function Mp(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function of(e) {
      return e.displayName || "Context";
    }
    function Ne(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Cr:
          return "Cache";
        case ue:
          var i = a;
          return of(i) + ".Consumer";
        case V:
          var u = a;
          return of(u._context) + ".Provider";
        case Ht:
          return "DehydratedFragment";
        case $:
          return Mp(a, a.render, "ForwardRef");
        case Ae:
          return "Fragment";
        case I:
          return a;
        case U:
          return "Portal";
        case F:
          return "Root";
        case fe:
          return "Text";
        case bn:
          return ft(a);
        case He:
          return a === Fl ? "StrictMode" : "Mode";
        case Qe:
          return "Offscreen";
        case he:
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
        case le:
        case ir:
        case be:
        case nt:
        case Be:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Gu = x.ReactDebugCurrentFrame, Vt = null, Dr = !1;
    function kr() {
      {
        if (Vt === null)
          return null;
        var e = Vt._debugOwner;
        if (e !== null && typeof e < "u")
          return Ne(e);
      }
      return null;
    }
    function Wu() {
      return Vt === null ? "" : uf(Vt);
    }
    function Qt() {
      Gu.getCurrentStack = null, Vt = null, Dr = !1;
    }
    function ut(e) {
      Gu.getCurrentStack = e === null ? null : Wu, Vt = e, Dr = !1;
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
    function fi(e) {
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
    var Lp = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Pl(e, t) {
      Lp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function sf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Np(e) {
      return e._valueTracker;
    }
    function Xu(e) {
      e._valueTracker = null;
    }
    function qu(e) {
      var t = "";
      return e && (sf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Yl(e) {
      var t = sf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
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
            Xu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Xi(e) {
      Np(e) || (e._valueTracker = Yl(e));
    }
    function zp(e) {
      if (!e)
        return !1;
      var t = Np(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = qu(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ss(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var cs = !1, Ku = !1, fs = !1, cf = !1;
    function Ma(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Zu(e, t) {
      var a = e, i = t.checked, u = Pe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Ju(e, t) {
      Pl("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Ku && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), Ku = !0), t.value !== void 0 && t.defaultValue !== void 0 && !cs && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), cs = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: fi(t.value != null ? t.value : i),
        controlled: Ma(t)
      };
    }
    function ff(e, t) {
      var a = e, i = t.checked;
      i != null && Ii(a, "checked", i, !1);
    }
    function $l(e, t) {
      var a = e;
      {
        var i = Ma(t);
        !a._wrapperState.controlled && i && !cf && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), cf = !0), a._wrapperState.controlled && !i && !fs && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), fs = !0);
      }
      ff(e, t);
      var u = fi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Cn(u)) : a.value !== Cn(u) && (a.value = Cn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? di(a, t.type, u) : t.hasOwnProperty("defaultValue") && di(a, t.type, fi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function eo(e, t, a) {
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
    function Up(e, t) {
      var a = e;
      $l(a, t), or(a, t);
    }
    function or(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        ba(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = fh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            zp(f), $l(f, p);
          }
        }
      }
    }
    function di(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ss(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Cn(e._wrapperState.initialValue) : e.defaultValue !== Cn(a) && (e.defaultValue = Cn(a)));
    }
    var ds = !1, Ql = !1, Ap = !1;
    function ps(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? A.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ql || (Ql = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Ap || (Ap = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ds && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ds = !0);
    }
    function df(e, t) {
      t.value != null && e.setAttribute("value", Cn(fi(t.value)));
    }
    var to = Array.isArray;
    function Zt(e) {
      return to(e);
    }
    var vs;
    vs = !1;
    function Hp() {
      var e = kr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Fp = ["value", "defaultValue"];
    function Nm(e) {
      {
        Pl("select", e);
        for (var t = 0; t < Fp.length; t++) {
          var a = Fp[t];
          if (e[a] != null) {
            var i = Zt(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Hp()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Hp());
          }
        }
      }
    }
    function pi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var m = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== m && (u[v].selected = m), m && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var y = Cn(fi(a)), R = null, E = 0; E < u.length; E++) {
          if (u[E].value === y) {
            u[E].selected = !0, i && (u[E].defaultSelected = !0);
            return;
          }
          R === null && !u[E].disabled && (R = u[E]);
        }
        R !== null && (R.selected = !0);
      }
    }
    function pf(e, t) {
      return Pe({}, t, {
        value: void 0
      });
    }
    function Vp(e, t) {
      var a = e;
      Nm(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !vs && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), vs = !0);
    }
    function zm(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? pi(a, !!t.multiple, i, !1) : t.defaultValue != null && pi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Um(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? pi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? pi(a, !!t.multiple, t.defaultValue, !0) : pi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Am(e, t) {
      var a = e, i = t.value;
      i != null && pi(a, !!t.multiple, i, !1);
    }
    var vf = !1;
    function hf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Pe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Cn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Bp(e, t) {
      var a = e;
      Pl("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !vf && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component"), vf = !0);
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
        initialValue: fi(i)
      };
    }
    function jp(e, t) {
      var a = e, i = fi(t.value), u = fi(t.defaultValue);
      if (i != null) {
        var s = Cn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Cn(u));
    }
    function Pp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function mf(e, t) {
      jp(e, t);
    }
    var La = "http://www.w3.org/1999/xhtml", Hm = "http://www.w3.org/1998/Math/MathML", yf = "http://www.w3.org/2000/svg";
    function hs(e) {
      switch (e) {
        case "svg":
          return yf;
        case "math":
          return Hm;
        default:
          return La;
      }
    }
    function gf(e, t) {
      return e == null || e === La ? hs(t) : e === yf && t === "foreignObject" ? La : e;
    }
    var Fm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, ms, Yp = Fm(function(e, t) {
      if (e.namespaceURI === yf && !("innerHTML" in e)) {
        ms = ms || document.createElement("div"), ms.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = ms.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Qn = 1, Na = 3, Bt = 8, ta = 9, qi = 11, ys = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Na) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, $p = {
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
    }, Il = {
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
    function Qp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Ip = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Il).forEach(function(e) {
      Ip.forEach(function(t) {
        Il[Qp(t, e)] = Il[e];
      });
    });
    function gs(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Il.hasOwnProperty(e) && Il[e]) ? t + "px" : (li(t, e), ("" + t).trim());
    }
    var Gl = /([A-Z])/g, Vm = /^ms-/;
    function Bm(e) {
      return e.replace(Gl, "-$1").toLowerCase().replace(Vm, "-ms-");
    }
    var Gp = function() {
    };
    {
      var Wp = /^(?:webkit|moz|o)[A-Z]/, Xp = /^-ms-/, no = /-(.)/g, Wl = /;\s*$/, Xl = {}, ql = {}, qp = !1, Sf = !1, Cf = function(e) {
        return e.replace(no, function(t, a) {
          return a.toUpperCase();
        });
      }, Ef = function(e) {
        Xl.hasOwnProperty(e) && Xl[e] || (Xl[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Cf(e.replace(Xp, "ms-"))
        ));
      }, Kp = function(e) {
        Xl.hasOwnProperty(e) && Xl[e] || (Xl[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Zp = function(e, t) {
        ql.hasOwnProperty(t) && ql[t] || (ql[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Wl, "")));
      }, Jp = function(e, t) {
        qp || (qp = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, jm = function(e, t) {
        Sf || (Sf = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Gp = function(e, t) {
        e.indexOf("-") > -1 ? Ef(e) : Wp.test(e) ? Kp(e) : Wl.test(t) && Zp(e, t), typeof t == "number" && (isNaN(t) ? Jp(e, t) : isFinite(t) || jm(e, t));
      };
    }
    var Pm = Gp;
    function Ym(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Bm(i)) + ":", t += gs(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function ev(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Pm(i, t[i]);
          var s = gs(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function $m(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function br(e) {
      var t = {};
      for (var a in e)
        for (var i = $p[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ro(e, t) {
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
    var tv = {
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
    }, nv = Pe({
      menuitem: !0
    }, tv), rv = "__html";
    function Ss(e, t) {
      if (t) {
        if (nv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(rv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function za(e, t) {
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
    var Cs = {
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
    }, av = {
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
    }, na = {}, Tf = new RegExp("^(aria)-[" + Te + "]*$"), ao = new RegExp("^(aria)[A-Z][" + Te + "]*$");
    function Rf(e, t) {
      {
        if (Yn.call(na, t) && na[t])
          return !0;
        if (ao.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = av.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), na[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), na[t] = !0, !0;
        }
        if (Tf.test(t)) {
          var u = t.toLowerCase(), s = av.hasOwnProperty(u) ? u : null;
          if (s == null)
            return na[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), na[t] = !0, !0;
        }
      }
      return !0;
    }
    function iv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Rf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Es(e, t) {
      za(e, t) || iv(e, t);
    }
    var Ki = !1;
    function xf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Ki && (Ki = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var wf = function() {
    };
    {
      var Jt = {}, Df = /^on./, lv = /^on[^A-Z]/, uv = new RegExp("^(aria)-[" + Te + "]*$"), ov = new RegExp("^(aria)[A-Z][" + Te + "]*$");
      wf = function(e, t, a, i) {
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
          if (Df.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), Jt[t] = !0, !0;
        } else if (Df.test(t))
          return lv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Jt[t] = !0, !0;
        if (uv.test(t) || ov.test(t))
          return !0;
        if (u === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Jt[t] = !0, !0;
        if (u === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Jt[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Jt[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Jt[t] = !0, !0;
        var v = fa(t), m = v !== null && v.type === ui;
        if (Cs.hasOwnProperty(u)) {
          var y = Cs[u];
          if (y !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, y), Jt[t] = !0, !0;
        } else if (!m && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Jt[t] = !0, !0;
        return typeof a == "boolean" && xr(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Jt[t] = !0, !0) : m ? !0 : xr(t, a, v, !1) ? (Jt[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === $n && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Jt[t] = !0), !0);
      };
    }
    var sv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = wf(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function cv(e, t, a) {
      za(e, t) || sv(e, t, a);
    }
    var Ua = 1, io = 2, Zi = 4, Qm = Ua | io | Zi, lo = null;
    function uo(e) {
      lo !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), lo = e;
    }
    function Im() {
      lo === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), lo = null;
    }
    function fv(e) {
      return e === lo;
    }
    function Ts(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Na ? t.parentNode : t;
    }
    var dt = null, vi = null, Aa = null;
    function Kl(e) {
      var t = Ru(e);
      if (t) {
        if (typeof dt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = fh(a);
          dt(t.stateNode, t.type, i);
        }
      }
    }
    function dv(e) {
      dt = e;
    }
    function Rs(e) {
      vi ? Aa ? Aa.push(e) : Aa = [e] : vi = e;
    }
    function oo() {
      return vi !== null || Aa !== null;
    }
    function so() {
      if (vi) {
        var e = vi, t = Aa;
        if (vi = null, Aa = null, Kl(e), t)
          for (var a = 0; a < t.length; a++)
            Kl(t[a]);
      }
    }
    var Ji = function(e, t) {
      return e(t);
    }, kf = function() {
    }, bf = !1;
    function Gm() {
      var e = oo();
      e && (kf(), so());
    }
    function _f(e, t, a) {
      if (bf)
        return e(t, a);
      bf = !0;
      try {
        return Ji(e, t, a);
      } finally {
        bf = !1, Gm();
      }
    }
    function xs(e, t, a) {
      Ji = e, kf = a;
    }
    function ws(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Of(e, t, a) {
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
          return !!(a.disabled && ws(t));
        default:
          return !1;
      }
    }
    function el(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = fh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Of(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var co = !1;
    if (gn)
      try {
        var tl = {};
        Object.defineProperty(tl, "passive", {
          get: function() {
            co = !0;
          }
        }), window.addEventListener("test", tl, tl), window.removeEventListener("test", tl, tl);
      } catch {
        co = !1;
      }
    function pv(e, t, a, i, u, s, f, p, v) {
      var m = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, m);
      } catch (y) {
        this.onError(y);
      }
    }
    var Mf = pv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Lf = document.createElement("react");
      Mf = function(t, a, i, u, s, f, p, v, m) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var y = document.createEvent("Event"), R = !1, E = !0, _ = window.event, O = Object.getOwnPropertyDescriptor(window, "event");
        function L() {
          Lf.removeEventListener(N, Se, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = _);
        }
        var ne = Array.prototype.slice.call(arguments, 3);
        function Se() {
          R = !0, L(), a.apply(i, ne), E = !1;
        }
        var ve, We = !1, $e = !1;
        function D(k) {
          if (ve = k.error, We = !0, ve === null && k.colno === 0 && k.lineno === 0 && ($e = !0), k.defaultPrevented && ve != null && typeof ve == "object")
            try {
              ve._suppressLogging = !0;
            } catch {
            }
        }
        var N = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), Lf.addEventListener(N, Se, !1), y.initEvent(N, !1, !1), Lf.dispatchEvent(y), O && Object.defineProperty(window, "event", O), R && E && (We ? $e && (ve = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ve = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ve)), window.removeEventListener("error", D), !R)
          return L(), pv.apply(this, arguments);
      };
    }
    var Wm = Mf, hi = !1, ra = null, fo = !1, mi = null, pa = {
      onError: function(e) {
        hi = !0, ra = e;
      }
    };
    function nl(e, t, a, i, u, s, f, p, v) {
      hi = !1, ra = null, Wm.apply(pa, arguments);
    }
    function Ha(e, t, a, i, u, s, f, p, v) {
      if (nl.apply(this, arguments), hi) {
        var m = zf();
        fo || (fo = !0, mi = m);
      }
    }
    function Nf() {
      if (fo) {
        var e = mi;
        throw fo = !1, mi = null, e;
      }
    }
    function Xm() {
      return hi;
    }
    function zf() {
      if (hi) {
        var e = ra;
        return hi = !1, ra = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _r(e) {
      return e._reactInternals;
    }
    function po(e) {
      return e._reactInternals !== void 0;
    }
    function Zl(e, t) {
      e._reactInternals = t;
    }
    var ge = (
      /*                      */
      0
    ), yi = (
      /*                */
      1
    ), ht = (
      /*                    */
      2
    ), ze = (
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
    ), _e = (
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
    ), gi = (
      /*                   */
      8192
    ), vo = (
      /*             */
      16384
    ), Ds = Ct | ze | va | In | Or | vo, vv = (
      /*               */
      32767
    ), sr = (
      /*                   */
      32768
    ), en = (
      /*                */
      65536
    ), ho = (
      /* */
      131072
    ), Uf = (
      /*                       */
      1048576
    ), Af = (
      /*                    */
      2097152
    ), Gn = (
      /*                 */
      4194304
    ), Si = (
      /*                */
      8388608
    ), Wn = (
      /*               */
      16777216
    ), rl = (
      /*              */
      33554432
    ), Jl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ze | Or | 0
    ), Xn = ht | ze | Je | et | In | Mr | gi, En = ze | va | In | gi, Lr = Ct | Je, un = Gn | Si | Af, Fa = x.ReactCurrentOwner;
    function cr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (ht | Mr)) !== ge && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === F ? a : null;
    }
    function Hf(e) {
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
    function ks(e) {
      return e.tag === F ? e.stateNode.containerInfo : null;
    }
    function Ff(e) {
      return cr(e) === e;
    }
    function fr(e) {
      {
        var t = Fa.current;
        if (t !== null && t.tag === G) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ne(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = _r(e);
      return u ? cr(u) === u : !1;
    }
    function qn(e) {
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
              return qn(s), e;
            if (v === u)
              return qn(s), t;
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
      return t !== null ? Vf(t) : null;
    }
    function Vf(e) {
      if (e.tag === I || e.tag === fe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Vf(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function hv(e) {
      var t = mt(e);
      return t !== null ? bs(t) : null;
    }
    function bs(e) {
      if (e.tag === I || e.tag === fe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== U) {
          var a = bs(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var _s = K.unstable_scheduleCallback, mv = K.unstable_cancelCallback, Os = K.unstable_shouldYield, yv = K.unstable_requestPaint, Tt = K.unstable_now, Bf = K.unstable_getCurrentPriorityLevel, Ms = K.unstable_ImmediatePriority, dr = K.unstable_UserBlockingPriority, ha = K.unstable_NormalPriority, Ls = K.unstable_LowPriority, Ci = K.unstable_IdlePriority, jf = K.unstable_yieldValue, Pf = K.unstable_setDisableYieldValue, Ei = null, tn = null, W = null, zt = !1, on = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Yf(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ai && (e = Pe({}, e, {
          getLaneLabelMap: Ri,
          injectProfilingHooks: Ba
        })), Ei = t.inject(e), tn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function gv(e, t) {
      if (tn && typeof tn.onScheduleFiberRoot == "function")
        try {
          tn.onScheduleFiberRoot(Ei, e, t);
        } catch (a) {
          zt || (zt = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function Va(e, t) {
      if (tn && typeof tn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & _e) === _e;
          if (_n) {
            var i;
            switch (t) {
              case Tn:
                i = Ms;
                break;
              case sn:
                i = dr;
                break;
              case Pa:
                i = ha;
                break;
              case xo:
                i = Ci;
                break;
              default:
                i = ha;
                break;
            }
            tn.onCommitFiberRoot(Ei, e, i, a);
          }
        } catch (u) {
          zt || (zt = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function Ti(e) {
      if (tn && typeof tn.onPostCommitFiberRoot == "function")
        try {
          tn.onPostCommitFiberRoot(Ei, e);
        } catch (t) {
          zt || (zt = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function $f(e) {
      if (tn && typeof tn.onCommitFiberUnmount == "function")
        try {
          tn.onCommitFiberUnmount(Ei, e);
        } catch (t) {
          zt || (zt = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function It(e) {
      if (typeof jf == "function" && (Pf(e), Fe(e)), tn && typeof tn.setStrictMode == "function")
        try {
          tn.setStrictMode(Ei, e);
        } catch (t) {
          zt || (zt = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Ba(e) {
      W = e;
    }
    function Ri() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < yt; a++) {
          var i = qm(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Ns(e) {
      W !== null && typeof W.markCommitStarted == "function" && W.markCommitStarted(e);
    }
    function Qf() {
      W !== null && typeof W.markCommitStopped == "function" && W.markCommitStopped();
    }
    function xi(e) {
      W !== null && typeof W.markComponentRenderStarted == "function" && W.markComponentRenderStarted(e);
    }
    function al() {
      W !== null && typeof W.markComponentRenderStopped == "function" && W.markComponentRenderStopped();
    }
    function Sv(e) {
      W !== null && typeof W.markComponentPassiveEffectMountStarted == "function" && W.markComponentPassiveEffectMountStarted(e);
    }
    function If() {
      W !== null && typeof W.markComponentPassiveEffectMountStopped == "function" && W.markComponentPassiveEffectMountStopped();
    }
    function zs(e) {
      W !== null && typeof W.markComponentPassiveEffectUnmountStarted == "function" && W.markComponentPassiveEffectUnmountStarted(e);
    }
    function Cv() {
      W !== null && typeof W.markComponentPassiveEffectUnmountStopped == "function" && W.markComponentPassiveEffectUnmountStopped();
    }
    function Ev(e) {
      W !== null && typeof W.markComponentLayoutEffectMountStarted == "function" && W.markComponentLayoutEffectMountStarted(e);
    }
    function Tv() {
      W !== null && typeof W.markComponentLayoutEffectMountStopped == "function" && W.markComponentLayoutEffectMountStopped();
    }
    function Us(e) {
      W !== null && typeof W.markComponentLayoutEffectUnmountStarted == "function" && W.markComponentLayoutEffectUnmountStarted(e);
    }
    function eu() {
      W !== null && typeof W.markComponentLayoutEffectUnmountStopped == "function" && W.markComponentLayoutEffectUnmountStopped();
    }
    function As(e, t, a) {
      W !== null && typeof W.markComponentErrored == "function" && W.markComponentErrored(e, t, a);
    }
    function Rv(e, t, a) {
      W !== null && typeof W.markComponentSuspended == "function" && W.markComponentSuspended(e, t, a);
    }
    function xv(e) {
      W !== null && typeof W.markLayoutEffectsStarted == "function" && W.markLayoutEffectsStarted(e);
    }
    function tu() {
      W !== null && typeof W.markLayoutEffectsStopped == "function" && W.markLayoutEffectsStopped();
    }
    function wv(e) {
      W !== null && typeof W.markPassiveEffectsStarted == "function" && W.markPassiveEffectsStarted(e);
    }
    function mo() {
      W !== null && typeof W.markPassiveEffectsStopped == "function" && W.markPassiveEffectsStopped();
    }
    function aa(e) {
      W !== null && typeof W.markRenderStarted == "function" && W.markRenderStarted(e);
    }
    function yo() {
      W !== null && typeof W.markRenderYielded == "function" && W.markRenderYielded();
    }
    function nu() {
      W !== null && typeof W.markRenderStopped == "function" && W.markRenderStopped();
    }
    function il(e) {
      W !== null && typeof W.markRenderScheduled == "function" && W.markRenderScheduled(e);
    }
    function Gf(e, t) {
      W !== null && typeof W.markForceUpdateScheduled == "function" && W.markForceUpdateScheduled(e, t);
    }
    function wi(e, t) {
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
    ), Hs = Math.clz32 ? Math.clz32 : ll, Fs = Math.log, Wf = Math.LN2;
    function ll(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Fs(t) / Wf | 0) | 0;
    }
    var yt = 31, z = (
      /*                        */
      0
    ), Ie = (
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
    ), ul = (
      /*            */
      8
    ), gt = (
      /*                     */
      16
    ), ol = (
      /*                */
      32
    ), Di = (
      /*                       */
      4194240
    ), sl = (
      /*                        */
      64
    ), Ur = (
      /*                        */
      128
    ), Kn = (
      /*                        */
      256
    ), cl = (
      /*                        */
      512
    ), go = (
      /*                        */
      1024
    ), So = (
      /*                        */
      2048
    ), Vs = (
      /*                        */
      4096
    ), Bs = (
      /*                        */
      8192
    ), js = (
      /*                        */
      16384
    ), Ps = (
      /*                       */
      32768
    ), Ys = (
      /*                       */
      65536
    ), $s = (
      /*                       */
      131072
    ), Qs = (
      /*                       */
      262144
    ), Is = (
      /*                       */
      524288
    ), fl = (
      /*                       */
      1048576
    ), Gs = (
      /*                       */
      2097152
    ), dl = (
      /*                            */
      130023424
    ), ja = (
      /*                             */
      4194304
    ), Ws = (
      /*                             */
      8388608
    ), Co = (
      /*                             */
      16777216
    ), Xs = (
      /*                             */
      33554432
    ), qs = (
      /*                             */
      67108864
    ), Xf = ja, ru = (
      /*          */
      134217728
    ), Ks = (
      /*                          */
      268435455
    ), au = (
      /*               */
      268435456
    ), ki = (
      /*                        */
      536870912
    ), Zn = (
      /*                   */
      1073741824
    );
    function qm(e) {
      {
        if (e & we)
          return "Sync";
        if (e & ma)
          return "InputContinuousHydration";
        if (e & pr)
          return "InputContinuous";
        if (e & ul)
          return "DefaultHydration";
        if (e & gt)
          return "Default";
        if (e & ol)
          return "TransitionHydration";
        if (e & Di)
          return "Transition";
        if (e & dl)
          return "Retry";
        if (e & ru)
          return "SelectiveHydration";
        if (e & au)
          return "IdleHydration";
        if (e & ki)
          return "Idle";
        if (e & Zn)
          return "Offscreen";
      }
    }
    var pt = -1, Zs = sl, Js = ja;
    function iu(e) {
      switch (jt(e)) {
        case we:
          return we;
        case ma:
          return ma;
        case pr:
          return pr;
        case ul:
          return ul;
        case gt:
          return gt;
        case ol:
          return ol;
        case sl:
        case Ur:
        case Kn:
        case cl:
        case go:
        case So:
        case Vs:
        case Bs:
        case js:
        case Ps:
        case Ys:
        case $s:
        case Qs:
        case Is:
        case fl:
        case Gs:
          return e & Di;
        case ja:
        case Ws:
        case Co:
        case Xs:
        case qs:
          return e & dl;
        case ru:
          return ru;
        case au:
          return au;
        case ki:
          return ki;
        case Zn:
          return Zn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Eo(e, t) {
      var a = e.pendingLanes;
      if (a === z)
        return z;
      var i = z, u = e.suspendedLanes, s = e.pingedLanes, f = a & Ks;
      if (f !== z) {
        var p = f & ~u;
        if (p !== z)
          i = iu(p);
        else {
          var v = f & s;
          v !== z && (i = iu(v));
        }
      } else {
        var m = a & ~u;
        m !== z ? i = iu(m) : s !== z && (i = iu(s));
      }
      if (i === z)
        return z;
      if (t !== z && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === z) {
        var y = jt(i), R = jt(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          y >= R || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          y === gt && (R & Di) !== z
        )
          return t;
      }
      (i & pr) !== z && (i |= a & gt);
      var E = e.entangledLanes;
      if (E !== z)
        for (var _ = e.entanglements, O = i & E; O > 0; ) {
          var L = bi(O), ne = 1 << L;
          i |= _[L], O &= ~ne;
        }
      return i;
    }
    function Dv(e, t) {
      for (var a = e.eventTimes, i = pt; t > 0; ) {
        var u = bi(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function ec(e, t) {
      switch (e) {
        case we:
        case ma:
        case pr:
          return t + 250;
        case ul:
        case gt:
        case ol:
        case sl:
        case Ur:
        case Kn:
        case cl:
        case go:
        case So:
        case Vs:
        case Bs:
        case js:
        case Ps:
        case Ys:
        case $s:
        case Qs:
        case Is:
        case fl:
        case Gs:
          return t + 5e3;
        case ja:
        case Ws:
        case Co:
        case Xs:
        case qs:
          return pt;
        case ru:
        case au:
        case ki:
        case Zn:
          return pt;
        default:
          return g("Should have found matching lanes. This is a bug in React."), pt;
      }
    }
    function Km(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = bi(f), v = 1 << p, m = s[p];
        m === pt ? ((v & i) === z || (v & u) !== z) && (s[p] = ec(v, t)) : m <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Zm(e) {
      return iu(e.pendingLanes);
    }
    function qf(e) {
      var t = e.pendingLanes & ~Zn;
      return t !== z ? t : t & Zn ? Zn : z;
    }
    function lu(e) {
      return (e & we) !== z;
    }
    function To(e) {
      return (e & Ks) !== z;
    }
    function tc(e) {
      return (e & dl) === e;
    }
    function Jm(e) {
      var t = we | pr | gt;
      return (e & t) === z;
    }
    function kv(e) {
      return (e & Di) === e;
    }
    function Ro(e, t) {
      var a = ma | pr | ul | gt;
      return (t & a) !== z;
    }
    function bv(e, t) {
      return (t & e.expiredLanes) !== z;
    }
    function Kf(e) {
      return (e & Di) !== z;
    }
    function Zf() {
      var e = Zs;
      return Zs <<= 1, (Zs & Di) === z && (Zs = sl), e;
    }
    function ey() {
      var e = Js;
      return Js <<= 1, (Js & dl) === z && (Js = ja), e;
    }
    function jt(e) {
      return e & -e;
    }
    function Gt(e) {
      return jt(e);
    }
    function bi(e) {
      return 31 - Hs(e);
    }
    function nc(e) {
      return bi(e);
    }
    function Jn(e, t) {
      return (e & t) !== z;
    }
    function pl(e, t) {
      return (e & t) === t;
    }
    function Ue(e, t) {
      return e | t;
    }
    function uu(e, t) {
      return e & ~t;
    }
    function Jf(e, t) {
      return e & t;
    }
    function _v(e) {
      return e;
    }
    function Ov(e, t) {
      return e !== Ie && e < t ? e : t;
    }
    function rc(e) {
      for (var t = [], a = 0; a < yt; a++)
        t.push(e);
      return t;
    }
    function vl(e, t, a) {
      e.pendingLanes |= t, t !== ki && (e.suspendedLanes = z, e.pingedLanes = z);
      var i = e.eventTimes, u = nc(t);
      i[u] = a;
    }
    function ed(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = bi(i), s = 1 << u;
        a[u] = pt, i &= ~s;
      }
    }
    function td(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function nd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = z, e.pingedLanes = z, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = bi(f), v = 1 << p;
        i[p] = z, u[p] = pt, s[p] = pt, f &= ~v;
      }
    }
    function ou(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = bi(u), f = 1 << s;
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
          i = ul;
          break;
        case sl:
        case Ur:
        case Kn:
        case cl:
        case go:
        case So:
        case Vs:
        case Bs:
        case js:
        case Ps:
        case Ys:
        case $s:
        case Qs:
        case Is:
        case fl:
        case Gs:
        case ja:
        case Ws:
        case Co:
        case Xs:
        case qs:
          i = ol;
          break;
        case ki:
          i = au;
          break;
        default:
          i = Ie;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Ie ? Ie : i;
    }
    function rd(e, t, a) {
      if (on)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = nc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function ac(e, t) {
      if (on)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = nc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function ad(e, t) {
      return null;
    }
    var Tn = we, sn = pr, Pa = gt, xo = ki, hl = Ie;
    function Ar() {
      return hl;
    }
    function Wt(e) {
      hl = e;
    }
    function wo(e, t) {
      var a = hl;
      try {
        return hl = e, t();
      } finally {
        hl = a;
      }
    }
    function Rn(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ny(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function id(e, t) {
      return e !== 0 && e < t;
    }
    function Do(e) {
      var t = jt(e);
      return id(Tn, t) ? id(sn, t) ? To(t) ? Pa : xo : sn : Tn;
    }
    function Xt(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Mv;
    function ie(e) {
      Mv = e;
    }
    function su(e) {
      Mv(e);
    }
    var ko;
    function Lv(e) {
      ko = e;
    }
    var Nv;
    function bo(e) {
      Nv = e;
    }
    var _o;
    function ld(e) {
      _o = e;
    }
    var ud;
    function zv(e) {
      ud = e;
    }
    var ic = !1, cu = [], ya = null, Et = null, nn = null, Hr = /* @__PURE__ */ new Map(), fu = /* @__PURE__ */ new Map(), Ya = [], ia = [
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
    function Uv(e) {
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
    function Av(e, t) {
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
          fu.delete(i);
          break;
        }
      }
    }
    function du(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ga(t, a, i, u, s);
        if (t !== null) {
          var p = Ru(t);
          p !== null && ko(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Hv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return ya = du(ya, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Et = du(Et, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return nn = du(nn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, m = v.pointerId;
          return Hr.set(m, du(Hr.get(m) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var y = u, R = y.pointerId;
          return fu.set(R, du(fu.get(R) || null, e, t, a, i, y)), !0;
        }
      }
      return !1;
    }
    function od(e) {
      var t = Fo(e.target);
      if (t !== null) {
        var a = cr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ee) {
            var u = Hf(a);
            if (u !== null) {
              e.blockedOn = u, ud(e.priority, function() {
                Nv(a);
              });
              return;
            }
          } else if (i === F) {
            var s = a.stateNode;
            if (Xt(s)) {
              e.blockedOn = ks(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Fv(e) {
      for (var t = _o(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Ya.length && id(t, Ya[i].priority); i++)
        ;
      Ya.splice(i, 0, a), i === 0 && od(a);
    }
    function lc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = ml(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          uo(s), u.target.dispatchEvent(s), Im();
        } else {
          var f = Ru(i);
          return f !== null && ko(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Oo(e, t, a) {
      lc(e) && a.delete(t);
    }
    function sd() {
      ic = !1, ya !== null && lc(ya) && (ya = null), Et !== null && lc(Et) && (Et = null), nn !== null && lc(nn) && (nn = null), Hr.forEach(Oo), fu.forEach(Oo);
    }
    function xn(e, t) {
      e.blockedOn === t && (e.blockedOn = null, ic || (ic = !0, K.unstable_scheduleCallback(K.unstable_NormalPriority, sd)));
    }
    function Ye(e) {
      if (cu.length > 0) {
        xn(cu[0], e);
        for (var t = 1; t < cu.length; t++) {
          var a = cu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ya !== null && xn(ya, e), Et !== null && xn(Et, e), nn !== null && xn(nn, e);
      var i = function(p) {
        return xn(p, e);
      };
      Hr.forEach(i), fu.forEach(i);
      for (var u = 0; u < Ya.length; u++) {
        var s = Ya[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Ya.length > 0; ) {
        var f = Ya[0];
        if (f.blockedOn !== null)
          break;
        od(f), f.blockedOn === null && Ya.shift();
      }
    }
    var xt = x.ReactCurrentBatchConfig, Mt = !0;
    function rn(e) {
      Mt = !!e;
    }
    function vr() {
      return Mt;
    }
    function pu(e, t, a) {
      var i = Mn(t), u;
      switch (i) {
        case Tn:
          u = qt;
          break;
        case sn:
          u = Mo;
          break;
        case Pa:
        default:
          u = $a;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function qt(e, t, a, i) {
      var u = Ar(), s = xt.transition;
      xt.transition = null;
      try {
        Wt(Tn), $a(e, t, a, i);
      } finally {
        Wt(u), xt.transition = s;
      }
    }
    function Mo(e, t, a, i) {
      var u = Ar(), s = xt.transition;
      xt.transition = null;
      try {
        Wt(sn), $a(e, t, a, i);
      } finally {
        Wt(u), xt.transition = s;
      }
    }
    function $a(e, t, a, i) {
      Mt && uc(e, t, a, i);
    }
    function uc(e, t, a, i) {
      var u = ml(e, t, a, i);
      if (u === null) {
        Ty(e, t, i, vu, a), Av(e, i);
        return;
      }
      if (Hv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Av(e, i), t & Zi && Uv(e)) {
        for (; u !== null; ) {
          var s = Ru(u);
          s !== null && su(s);
          var f = ml(e, t, a, i);
          if (f === null && Ty(e, t, i, vu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Ty(e, t, i, null, a);
    }
    var vu = null;
    function ml(e, t, a, i) {
      vu = null;
      var u = Ts(i), s = Fo(u);
      if (s !== null) {
        var f = cr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ee) {
            var v = Hf(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === F) {
            var m = f.stateNode;
            if (Xt(m))
              return ks(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return vu = s, null;
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
          var t = Bf();
          switch (t) {
            case Ms:
              return Tn;
            case dr:
              return sn;
            case ha:
            case Ls:
              return Pa;
            case Ci:
              return xo;
            default:
              return Pa;
          }
        }
        default:
          return Pa;
      }
    }
    function cd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function hu(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Qa(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function oc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var yl = null, Sa = null, _i = null;
    function Oi(e) {
      return yl = e, Sa = cc(), !0;
    }
    function sc() {
      yl = null, Sa = null, _i = null;
    }
    function mu() {
      if (_i)
        return _i;
      var e, t = Sa, a = t.length, i, u = cc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return _i = u.slice(e, p), _i;
    }
    function cc() {
      return "value" in yl ? yl.value : yl.textContent;
    }
    function gl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Sl() {
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
        return m ? this.isDefaultPrevented = Sl : this.isDefaultPrevented = wn, this.isPropagationStopped = wn, this;
      }
      return Pe(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Sl);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Sl);
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
        isPersistent: Sl
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
    }, kn = Pt(Dn), yu = Pe({}, Dn, {
      view: 0,
      detail: 0
    }), fd = Pt(yu), Lo, dd, Fr;
    function Vv(e) {
      e !== Fr && (Fr && e.type === "mousemove" ? (Lo = e.screenX - Fr.screenX, dd = e.screenY - Fr.screenY) : (Lo = 0, dd = 0), Fr = e);
    }
    var gu = Pe({}, yu, {
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
      getModifierState: pc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Vv(e), Lo);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : dd;
      }
    }), Mi = Pt(gu), pd = Pe({}, gu, {
      dataTransfer: 0
    }), Cl = Pt(pd), Bv = Pe({}, yu, {
      relatedTarget: 0
    }), fc = Pt(Bv), vd = Pe({}, Dn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), dc = Pt(vd), ry = Pe({}, Dn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), ay = Pt(ry), jv = Pe({}, Dn, {
      data: 0
    }), hd = Pt(jv), El = hd, iy = {
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
    }, Su = {
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
    function Pv(e) {
      if (e.key) {
        var t = iy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = gl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Su[e.keyCode] || "Unidentified" : "";
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
    function pc(e) {
      return ly;
    }
    var uy = Pe({}, yu, {
      key: Pv,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? gl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? gl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), oy = Pt(uy), Yv = Pe({}, gu, {
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
    }), md = Pt(Yv), sy = Pe({}, yu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pc
    }), Vr = Pt(sy), yd = Pe({}, Dn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), cy = Pt(yd), Li = Pe({}, gu, {
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
    }), vc = Pt(Li), Tl = [9, 13, 27, 32], No = 229, zo = gn && "CompositionEvent" in window, Rl = null;
    gn && "documentMode" in document && (Rl = document.documentMode);
    var fy = gn && "TextEvent" in window && !Rl, hc = gn && (!zo || Rl && Rl > 8 && Rl <= 11), $v = 32, gd = String.fromCharCode($v);
    function Qv() {
      Tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Tr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Tr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Tr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Uo = !1;
    function mc(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Iv(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Sd(e, t) {
      return e === "keydown" && t.keyCode === No;
    }
    function Gv(e, t) {
      switch (e) {
        case "keyup":
          return Tl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== No;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Cd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function yc(e) {
      return e.locale === "ko";
    }
    var Ia = !1;
    function Ed(e, t, a, i, u) {
      var s, f;
      if (zo ? s = Iv(t) : Ia ? Gv(t, i) && (s = "onCompositionEnd") : Sd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      hc && !yc(i) && (!Ia && s === "onCompositionStart" ? Ia = Oi(u) : s === "onCompositionEnd" && Ia && (f = mu()));
      var p = Zv(a, s);
      if (p.length > 0) {
        var v = new hd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var m = Cd(i);
          m !== null && (v.data = m);
        }
      }
    }
    function gc(e, t) {
      switch (e) {
        case "compositionend":
          return Cd(t);
        case "keypress":
          var a = t.which;
          return a !== $v ? null : (Uo = !0, gd);
        case "textInput":
          var i = t.data;
          return i === gd && Uo ? null : i;
        default:
          return null;
      }
    }
    function Wv(e, t) {
      if (Ia) {
        if (e === "compositionend" || !zo && Gv(e, t)) {
          var a = mu();
          return sc(), Ia = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!mc(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return hc && !yc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function dy(e, t, a, i, u) {
      var s;
      if (fy ? s = gc(t, i) : s = Wv(t, i), !s)
        return null;
      var f = Zv(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new El("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Sc(e, t, a, i, u, s, f) {
      Ed(e, t, a, i, u), dy(e, t, a, i, u);
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
    function Cu(e) {
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
    function Cc() {
      Tr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      Rs(i);
      var u = Zv(t, "onChange");
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
      n(t, l, e, Ts(e)), _f(d, t);
    }
    function d(e) {
      w0(e, 0);
    }
    function h(e) {
      var t = Dc(e);
      if (zp(t))
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
    function w(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || di(e, "number", e.value);
    }
    function T(e, t, a, i, u, s, f) {
      var p = a ? Dc(a) : window, v, m;
      if (o(p) ? v = S : Cu(p) ? C ? v = Ut : (v = ee, m = B) : oe(p) && (v = de), v) {
        var y = v(t, a);
        if (y) {
          n(e, y, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && w(p);
    }
    function b() {
      ka("onMouseEnter", ["mouseout", "mouseover"]), ka("onMouseLeave", ["mouseout", "mouseover"]), ka("onPointerEnter", ["pointerout", "pointerover"]), ka("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Q(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !fv(i)) {
        var m = i.relatedTarget || i.fromElement;
        if (m && (Fo(m) || Ud(m)))
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
          if (E = a, _ = O ? Fo(O) : null, _ !== null) {
            var L = cr(_);
            (_ !== L || _.tag !== I && _.tag !== fe) && (_ = null);
          }
        } else
          E = null, _ = a;
        if (E !== _) {
          var ne = Mi, Se = "onMouseLeave", ve = "onMouseEnter", We = "mouse";
          (t === "pointerout" || t === "pointerover") && (ne = md, Se = "onPointerLeave", ve = "onPointerEnter", We = "pointer");
          var $e = E == null ? y : Dc(E), D = _ == null ? y : Dc(_), N = new ne(Se, We + "leave", E, i, u);
          N.target = $e, N.relatedTarget = D;
          var k = null, Y = Fo(u);
          if (Y === a) {
            var re = new ne(ve, We + "enter", _, i, u);
            re.target = D, re.relatedTarget = $e, k = re;
          }
          kT(e, N, k, E, _);
        }
      }
    }
    function pe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var se = typeof Object.is == "function" ? Object.is : pe;
    function me(e, t) {
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
    function Oe(e) {
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
    function Xe(e, t) {
      for (var a = Oe(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Na) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Oe(an(a));
      }
    }
    function Ni(e) {
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
          for (var E = null; y === t && (a === 0 || y.nodeType === Na) && (f = s + a), y === i && (u === 0 || y.nodeType === Na) && (p = s + u), y.nodeType === Na && (s += y.nodeValue.length), (E = y.firstChild) !== null; )
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
        var m = Xe(e, f), y = Xe(e, p);
        if (m && y) {
          if (u.rangeCount === 1 && u.anchorNode === m.node && u.anchorOffset === m.offset && u.focusNode === y.node && u.focusOffset === y.offset)
            return;
          var R = a.createRange();
          R.setStart(m.node, m.offset), u.removeAllRanges(), f > p ? (u.addRange(R), u.extend(y.node, y.offset)) : (R.setEnd(y.node, y.offset), u.addRange(R));
        }
      }
    }
    function p0(e) {
      return e && e.nodeType === Na;
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
      for (var e = window, t = ss(); t instanceof e.HTMLIFrameElement; ) {
        if (cT(t))
          e = t.contentWindow;
        else
          return t;
        t = ss(e.document);
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
      } : t = Ni(e), t || {
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
    var Ec = null, yy = null, Td = null, gy = !1;
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
      if (!(gy || Ec == null || Ec !== ss(i))) {
        var u = yT(Ec);
        if (!Td || !me(Td, u)) {
          Td = u;
          var s = Zv(yy, "onSelect");
          if (s.length > 0) {
            var f = new kn("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Ec;
          }
        }
      }
    }
    function ST(e, t, a, i, u, s, f) {
      var p = a ? Dc(a) : window;
      switch (t) {
        case "focusin":
          (Cu(p) || p.contentEditable === "true") && (Ec = p, yy = a, Td = null);
          break;
        case "focusout":
          Ec = null, yy = null, Td = null;
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
    function Xv(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Tc = {
      animationend: Xv("Animation", "AnimationEnd"),
      animationiteration: Xv("Animation", "AnimationIteration"),
      animationstart: Xv("Animation", "AnimationStart"),
      transitionend: Xv("Transition", "TransitionEnd")
    }, Sy = {}, y0 = {};
    gn && (y0 = document.createElement("div").style, "AnimationEvent" in window || (delete Tc.animationend.animation, delete Tc.animationiteration.animation, delete Tc.animationstart.animation), "TransitionEvent" in window || delete Tc.transitionend.transition);
    function qv(e) {
      if (Sy[e])
        return Sy[e];
      if (!Tc[e])
        return e;
      var t = Tc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in y0)
          return Sy[e] = t[a];
      return e;
    }
    var g0 = qv("animationend"), S0 = qv("animationiteration"), C0 = qv("animationstart"), E0 = qv("transitionend"), T0 = /* @__PURE__ */ new Map(), R0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Eu(e, t) {
      T0.set(e, t), Tr(t, [e]);
    }
    function CT() {
      for (var e = 0; e < R0.length; e++) {
        var t = R0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Eu(a, "on" + i);
      }
      Eu(g0, "onAnimationEnd"), Eu(S0, "onAnimationIteration"), Eu(C0, "onAnimationStart"), Eu("dblclick", "onDoubleClick"), Eu("focusin", "onFocus"), Eu("focusout", "onBlur"), Eu(E0, "onTransitionEnd");
    }
    function ET(e, t, a, i, u, s, f) {
      var p = T0.get(t);
      if (p !== void 0) {
        var v = kn, m = t;
        switch (t) {
          case "keypress":
            if (gl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = oy;
            break;
          case "focusin":
            m = "focus", v = fc;
            break;
          case "focusout":
            m = "blur", v = fc;
            break;
          case "beforeblur":
          case "afterblur":
            v = fc;
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
            v = Mi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Cl;
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
            v = dc;
            break;
          case E0:
            v = cy;
            break;
          case "scroll":
            v = fd;
            break;
          case "wheel":
            v = vc;
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
            v = md;
            break;
        }
        var y = (s & Zi) !== 0;
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
    CT(), b(), Cc(), mT(), Qv();
    function TT(e, t, a, i, u, s, f) {
      ET(e, t, a, i, u, s);
      var p = (s & Qm) === 0;
      p && (Q(e, t, a, i, u), T(e, t, a, i, u), ST(e, t, a, i, u), Sc(e, t, a, i, u));
    }
    var Rd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Cy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Rd));
    function x0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ha(i, t, void 0, e), e.currentTarget = null;
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
      for (var a = (t & Zi) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        RT(s, f, a);
      }
      Nf();
    }
    function xT(e, t, a, i, u) {
      var s = Ts(a), f = [];
      TT(f, e, i, a, s, t), w0(f, t);
    }
    function wt(e, t) {
      Cy.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = ex(t), u = bT(e, a);
      i.has(u) || (D0(t, e, io, a), i.add(u));
    }
    function Ey(e, t, a) {
      Cy.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Zi), D0(a, e, i, t);
    }
    var Kv = "_reactListening" + Math.random().toString(36).slice(2);
    function xd(e) {
      if (!e[Kv]) {
        e[Kv] = !0, Gr.forEach(function(a) {
          a !== "selectionchange" && (Cy.has(a) || Ey(a, !1, e), Ey(a, !0, e));
        });
        var t = e.nodeType === ta ? e : e.ownerDocument;
        t !== null && (t[Kv] || (t[Kv] = !0, Ey("selectionchange", !1, t)));
      }
    }
    function D0(e, t, a, i, u) {
      var s = pu(e, t, a), f = void 0;
      co && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Qa(e, t, s, f) : hu(e, t, s) : f !== void 0 ? oc(e, t, s, f) : cd(e, t, s);
    }
    function k0(e, t) {
      return e === t || e.nodeType === Bt && e.parentNode === t;
    }
    function Ty(e, t, a, i, u) {
      var s = i;
      if (!(t & Ua) && !(t & io)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === F || v === U) {
                var m = p.stateNode.containerInfo;
                if (k0(m, f))
                  break;
                if (v === U)
                  for (var y = p.return; y !== null; ) {
                    var R = y.tag;
                    if (R === F || R === U) {
                      var E = y.stateNode.containerInfo;
                      if (k0(E, f))
                        return;
                    }
                    y = y.return;
                  }
                for (; m !== null; ) {
                  var _ = Fo(m);
                  if (_ === null)
                    return;
                  var O = _.tag;
                  if (O === I || O === fe) {
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
      _f(function() {
        return xT(e, t, a, s);
      });
    }
    function wd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function wT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], m = e, y = null; m !== null; ) {
        var R = m, E = R.stateNode, _ = R.tag;
        if (_ === I && E !== null && (y = E, p !== null)) {
          var O = el(m, p);
          O != null && v.push(wd(m, O, y));
        }
        if (u)
          break;
        m = m.return;
      }
      return v;
    }
    function Zv(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === I && f !== null) {
          var v = f, m = el(u, a);
          m != null && i.unshift(wd(u, m, v));
          var y = el(u, t);
          y != null && i.push(wd(u, y, v));
        }
        u = u.return;
      }
      return i;
    }
    function Rc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== I);
      return e || null;
    }
    function DT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Rc(s))
        u++;
      for (var f = 0, p = i; p; p = Rc(p))
        f++;
      for (; u - f > 0; )
        a = Rc(a), u--;
      for (; f - u > 0; )
        i = Rc(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Rc(a), i = Rc(i);
      }
      return null;
    }
    function b0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, m = v.alternate, y = v.stateNode, R = v.tag;
        if (m !== null && m === i)
          break;
        if (R === I && y !== null) {
          var E = y;
          if (u) {
            var _ = el(p, s);
            _ != null && f.unshift(wd(p, _, E));
          } else if (!u) {
            var O = el(p, s);
            O != null && f.push(wd(p, O, E));
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
    var Br = !1, Dd = "dangerouslySetInnerHTML", Jv = "suppressContentEditableWarning", Tu = "suppressHydrationWarning", _0 = "autoFocus", Ao = "children", Ho = "style", eh = "__html", Ry, th, kd, O0, nh, M0, L0;
    Ry = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, th = function(e, t) {
      Es(e, t), xf(e, t), cv(e, t, {
        registrationNameDependencies: sa,
        possibleRegistrationNames: Bu
      });
    }, M0 = gn && !document.documentMode, kd = function(e, t, a) {
      if (!Br) {
        var i = rh(a), u = rh(t);
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
    }, nh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, L0 = function(e, t) {
      var a = e.namespaceURI === La ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var _T = /\r\n?/g, OT = /\u0000|\uFFFD/g;
    function rh(e) {
      Qi(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(_T, `
`).replace(OT, "");
    }
    function ah(e, t, a, i) {
      var u = rh(t), s = rh(e);
      if (s !== u && (i && (Br || (Br = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Er))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function N0(e) {
      return e.nodeType === ta ? e : e.ownerDocument;
    }
    function MT() {
    }
    function ih(e) {
      e.onclick = MT;
    }
    function LT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ho)
            f && Object.freeze(f), ev(t, f);
          else if (s === Dd) {
            var p = f ? f[eh] : void 0;
            p != null && Yp(t, p);
          } else if (s === Ao)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ys(t, f);
            } else
              typeof f == "number" && ys(t, "" + f);
          else
            s === Jv || s === Tu || s === _0 || (sa.hasOwnProperty(s) ? f != null && (typeof f != "function" && nh(s, f), s === "onScroll" && wt("scroll", t)) : f != null && Ii(t, s, f, u));
        }
    }
    function NT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ho ? ev(e, f) : s === Dd ? Yp(e, f) : s === Ao ? ys(e, f) : Ii(e, s, f, i);
      }
    }
    function zT(e, t, a, i) {
      var u, s = N0(a), f, p = i;
      if (p === La && (p = hs(e)), p === La) {
        if (u = za(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === La && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Yn.call(Ry, e) && (Ry[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function UT(e, t) {
      return N0(t).createTextNode(e);
    }
    function AT(e, t, a, i) {
      var u = za(t, a);
      th(t, a);
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
          for (var f = 0; f < Rd.length; f++)
            wt(Rd[f], e);
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
          Ju(e, a), s = Zu(e, a), wt("invalid", e);
          break;
        case "option":
          ps(e, a), s = a;
          break;
        case "select":
          Vp(e, a), s = pf(e, a), wt("invalid", e);
          break;
        case "textarea":
          Bp(e, a), s = hf(e, a), wt("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Ss(t, s), LT(t, e, i, s, u), t) {
        case "input":
          Xi(e), eo(e, a, !1);
          break;
        case "textarea":
          Xi(e), Pp(e);
          break;
        case "option":
          df(e, a);
          break;
        case "select":
          zm(e, a);
          break;
        default:
          typeof s.onClick == "function" && ih(e);
          break;
      }
    }
    function HT(e, t, a, i, u) {
      th(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Zu(e, a), p = Zu(e, i), s = [];
          break;
        case "select":
          f = pf(e, a), p = pf(e, i), s = [];
          break;
        case "textarea":
          f = hf(e, a), p = hf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && ih(e);
          break;
      }
      Ss(t, p);
      var v, m, y = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Ho) {
            var R = f[v];
            for (m in R)
              R.hasOwnProperty(m) && (y || (y = {}), y[m] = "");
          } else
            v === Dd || v === Ao || v === Jv || v === Tu || v === _0 || (sa.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var E = p[v], _ = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || E === _ || E == null && _ == null))
          if (v === Ho)
            if (E && Object.freeze(E), _) {
              for (m in _)
                _.hasOwnProperty(m) && (!E || !E.hasOwnProperty(m)) && (y || (y = {}), y[m] = "");
              for (m in E)
                E.hasOwnProperty(m) && _[m] !== E[m] && (y || (y = {}), y[m] = E[m]);
            } else
              y || (s || (s = []), s.push(v, y)), y = E;
          else if (v === Dd) {
            var O = E ? E[eh] : void 0, L = _ ? _[eh] : void 0;
            O != null && L !== O && (s = s || []).push(v, O);
          } else
            v === Ao ? (typeof E == "string" || typeof E == "number") && (s = s || []).push(v, "" + E) : v === Jv || v === Tu || (sa.hasOwnProperty(v) ? (E != null && (typeof E != "function" && nh(v, E), v === "onScroll" && wt("scroll", e)), !s && _ !== E && (s = [])) : (s = s || []).push(v, E));
      }
      return y && (ro(y, p[Ho]), (s = s || []).push(Ho, y)), s;
    }
    function FT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && ff(e, u);
      var s = za(a, i), f = za(a, u);
      switch (NT(e, t, s, f), a) {
        case "input":
          $l(e, u);
          break;
        case "textarea":
          jp(e, u);
          break;
        case "select":
          Um(e, u);
          break;
      }
    }
    function VT(e) {
      {
        var t = e.toLowerCase();
        return Cs.hasOwnProperty(t) && Cs[t] || null;
      }
    }
    function BT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = za(t, a), th(t, a), t) {
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
          for (var m = 0; m < Rd.length; m++)
            wt(Rd[m], e);
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
          Ju(e, a), wt("invalid", e);
          break;
        case "option":
          ps(e, a);
          break;
        case "select":
          Vp(e, a), wt("invalid", e);
          break;
        case "textarea":
          Bp(e, a), wt("invalid", e);
          break;
      }
      Ss(t, a);
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
          if (O === Ao)
            typeof L == "string" ? e.textContent !== L && (a[Tu] !== !0 && ah(e.textContent, L, s, f), _ = [Ao, L]) : typeof L == "number" && e.textContent !== "" + L && (a[Tu] !== !0 && ah(e.textContent, L, s, f), _ = [Ao, "" + L]);
          else if (sa.hasOwnProperty(O))
            L != null && (typeof L != "function" && nh(O, L), O === "onScroll" && wt("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ne = void 0, Se = p && Pn ? null : fa(O);
            if (a[Tu] !== !0) {
              if (!(O === Jv || O === Tu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              O === "value" || O === "checked" || O === "selected")) {
                if (O === Dd) {
                  var ve = e.innerHTML, We = L ? L[eh] : void 0;
                  if (We != null) {
                    var $e = L0(e, We);
                    $e !== ve && kd(O, ve, $e);
                  }
                } else if (O === Ho) {
                  if (v.delete(O), M0) {
                    var D = Ym(L);
                    ne = e.getAttribute("style"), D !== ne && kd(O, ne, D);
                  }
                } else if (p && !Pn)
                  v.delete(O.toLowerCase()), ne = as(e, O, L), L !== ne && kd(O, ne, L);
                else if (!$t(O, Se, p) && !kt(O, L, Se, p)) {
                  var N = !1;
                  if (Se !== null)
                    v.delete(Se.attributeName), ne = Pu(e, O, L, Se);
                  else {
                    var k = i;
                    if (k === La && (k = hs(t)), k === La)
                      v.delete(O.toLowerCase());
                    else {
                      var Y = VT(O);
                      Y !== null && Y !== O && (N = !0, v.delete(Y)), v.delete(O);
                    }
                    ne = as(e, O, L);
                  }
                  var re = Pn;
                  !re && L !== ne && !N && kd(O, ne, L);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Tu] !== !0 && O0(v), t) {
        case "input":
          Xi(e), eo(e, a, !0);
          break;
        case "textarea":
          Xi(e), Pp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && ih(e);
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
          Up(e, a);
          return;
        case "textarea":
          mf(e, a);
          return;
        case "select":
          Am(e, a);
          return;
      }
    }
    var bd = function() {
    }, _d = function() {
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
      _d = function(e, t) {
        var a = Pe({}, e || U0), i = {
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
      bd = function(e, t, a) {
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
    var lh = "suppressHydrationWarning", uh = "$", oh = "/$", Od = "$?", Md = "$!", WT = "style", by = null, _y = null;
    function XT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ta:
        case qi: {
          t = i === ta ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : gf(null, "");
          break;
        }
        default: {
          var s = i === Bt ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = gf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = _d(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function qT(e, t, a) {
      {
        var i = e, u = gf(i.namespace, t), s = _d(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function mb(e) {
      return e;
    }
    function KT(e) {
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
        if (bd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = _d(f.ancestorInfo, e);
          bd(null, p, v);
        }
        s = f.namespace;
      }
      var m = zT(e, t, a, s);
      return zd(u, m), Hy(m, t), m;
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
          var p = "" + i.children, v = _d(f.ancestorInfo, t);
          bd(null, p, v);
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
        bd(null, e, u.ancestorInfo);
      }
      var s = UT(e, t);
      return zd(i, s), s;
    }
    function aR() {
      var e = window.event;
      return e === void 0 ? Pa : Mn(e.type);
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
      ys(e, "");
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
      i == null && a.onclick === null && ih(a);
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
          if (s === oh)
            if (i === 0) {
              e.removeChild(u), Ye(t);
              return;
            } else
              i--;
          else
            (s === uh || s === Od || s === Md) && i++;
        }
        a = u;
      } while (a);
      Ye(t);
    }
    function yR(e, t) {
      e.nodeType === Bt ? Ny(e.parentNode, t) : e.nodeType === Qn && Ny(e, t), Ye(e);
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
      e.style.display = gs("display", i);
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
      return t === "" || e.nodeType !== Na ? null : e;
    }
    function wR(e) {
      return e.nodeType !== Bt ? null : e;
    }
    function V0(e) {
      return e.data === Od;
    }
    function zy(e) {
      return e.data === Md;
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
    function sh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Qn || t === Na)
          break;
        if (t === Bt) {
          var a = e.data;
          if (a === uh || a === Md || a === Od)
            break;
          if (a === oh)
            return null;
        }
      }
      return e;
    }
    function Ld(e) {
      return sh(e.nextSibling);
    }
    function bR(e) {
      return sh(e.firstChild);
    }
    function _R(e) {
      return sh(e.firstChild);
    }
    function OR(e) {
      return sh(e.nextSibling);
    }
    function MR(e, t, a, i, u, s, f) {
      zd(s, e), Hy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & Ve) !== Re;
      return BT(e, t, a, p, i, m, f);
    }
    function LR(e, t, a, i) {
      return zd(a, e), a.mode & Ve, jT(e, t);
    }
    function NR(e, t) {
      zd(t, e);
    }
    function zR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Bt) {
          var i = t.data;
          if (i === oh) {
            if (a === 0)
              return Ld(t);
            a--;
          } else
            (i === uh || i === Md || i === Od) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function B0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Bt) {
          var i = t.data;
          if (i === uh || i === Md || i === Od) {
            if (a === 0)
              return t;
            a--;
          } else
            i === oh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function UR(e) {
      Ye(e);
    }
    function AR(e) {
      Ye(e);
    }
    function HR(e) {
      return e !== "head" && e !== "body";
    }
    function FR(e, t, a, i) {
      var u = !0;
      ah(t.nodeValue, a, i, u);
    }
    function VR(e, t, a, i, u, s) {
      if (t[lh] !== !0) {
        var f = !0;
        ah(i.nodeValue, u, s, f);
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
      (u || t[lh] !== !0) && (i.nodeType === Qn ? xy(a, i) : i.nodeType === Bt || wy(a, i));
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
      (s || t[lh] !== !0) && Dy(a, i);
    }
    function WR(e, t, a, i, u) {
      (u || t[lh] !== !0) && ky(a, i);
    }
    function XR(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function qR(e) {
      xd(e);
    }
    var xc = Math.random().toString(36).slice(2), wc = "__reactFiber$" + xc, Uy = "__reactProps$" + xc, Nd = "__reactContainer$" + xc, Ay = "__reactEvents$" + xc, KR = "__reactListeners$" + xc, ZR = "__reactHandles$" + xc;
    function JR(e) {
      delete e[wc], delete e[Uy], delete e[Ay], delete e[KR], delete e[ZR];
    }
    function zd(e, t) {
      t[wc] = e;
    }
    function ch(e, t) {
      t[Nd] = e;
    }
    function j0(e) {
      e[Nd] = null;
    }
    function Ud(e) {
      return !!e[Nd];
    }
    function Fo(e) {
      var t = e[wc];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Nd] || a[wc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = B0(e); u !== null; ) {
              var s = u[wc];
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
    function Ru(e) {
      var t = e[wc] || e[Nd];
      return t && (t.tag === I || t.tag === fe || t.tag === Ee || t.tag === F) ? t : null;
    }
    function Dc(e) {
      if (e.tag === I || e.tag === fe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function fh(e) {
      return e[Uy] || null;
    }
    function Hy(e, t) {
      e[Uy] = t;
    }
    function ex(e) {
      var t = e[Ay];
      return t === void 0 && (t = e[Ay] = /* @__PURE__ */ new Set()), t;
    }
    var P0 = {}, Y0 = x.ReactDebugCurrentFrame;
    function dh(e) {
      if (e) {
        var t = e._owner, a = Iu(e.type, e._source, t ? t.type : null);
        Y0.setExtraStackFrame(a);
      } else
        Y0.setExtraStackFrame(null);
    }
    function Ga(e, t, a, i, u) {
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
            p && !(p instanceof Error) && (dh(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), dh(null)), p instanceof Error && !(p.message in P0) && (P0[p.message] = !0, dh(u), g("Failed %s type: %s", a, p.message), dh(null));
          }
      }
    }
    var Fy = [], ph;
    ph = [];
    var xl = -1;
    function xu(e) {
      return {
        current: e
      };
    }
    function er(e, t) {
      if (xl < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== ph[xl] && g("Unexpected Fiber popped."), e.current = Fy[xl], Fy[xl] = null, ph[xl] = null, xl--;
    }
    function tr(e, t, a) {
      xl++, Fy[xl] = e.current, ph[xl] = a, e.current = t;
    }
    var Vy;
    Vy = {};
    var la = {};
    Object.freeze(la);
    var wl = xu(la), zi = xu(!1), By = la;
    function kc(e, t, a) {
      return a && Ui(t) ? By : wl.current;
    }
    function $0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function bc(e, t) {
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
          var p = Ne(e) || "Unknown";
          Ga(i, s, "context", p);
        }
        return u && $0(e, t, s), s;
      }
    }
    function vh() {
      return zi.current;
    }
    function Ui(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function hh(e) {
      er(zi, e), er(wl, e);
    }
    function jy(e) {
      er(zi, e), er(wl, e);
    }
    function Q0(e, t, a) {
      {
        if (wl.current !== la)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        tr(wl, t, e), tr(zi, a, e);
      }
    }
    function I0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ne(e) || "Unknown";
            Vy[s] || (Vy[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ne(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ne(e) || "Unknown";
          Ga(u, f, "child context", v);
        }
        return Pe({}, a, f);
      }
    }
    function mh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || la;
        return By = wl.current, tr(wl, a, e), tr(zi, zi.current, e), !0;
      }
    }
    function G0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = I0(e, t, By);
          i.__reactInternalMemoizedMergedChildContext = u, er(zi, e), er(wl, e), tr(wl, u, e), tr(zi, a, e);
        } else
          er(zi, e), tr(zi, a, e);
      }
    }
    function tx(e) {
      {
        if (!Ff(e) || e.tag !== G)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case F:
              return t.stateNode.context;
            case G: {
              var a = t.type;
              if (Ui(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var wu = 0, yh = 1, Dl = null, Py = !1, Yy = !1;
    function W0(e) {
      Dl === null ? Dl = [e] : Dl.push(e);
    }
    function nx(e) {
      Py = !0, W0(e);
    }
    function X0() {
      Py && Du();
    }
    function Du() {
      if (!Yy && Dl !== null) {
        Yy = !0;
        var e = 0, t = Ar();
        try {
          var a = !0, i = Dl;
          for (Wt(Tn); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Dl = null, Py = !1;
        } catch (s) {
          throw Dl !== null && (Dl = Dl.slice(e + 1)), _s(Ms, Du), s;
        } finally {
          Wt(t), Yy = !1;
        }
      }
      return null;
    }
    var _c = [], Oc = 0, gh = null, Sh = 0, Ca = [], Ea = 0, Vo = null, kl = 1, bl = "";
    function rx(e) {
      return jo(), (e.flags & Uf) !== ge;
    }
    function ax(e) {
      return jo(), Sh;
    }
    function ix() {
      var e = bl, t = kl, a = t & ~lx(t);
      return a.toString(32) + e;
    }
    function Bo(e, t) {
      jo(), _c[Oc++] = Sh, _c[Oc++] = gh, gh = e, Sh = t;
    }
    function q0(e, t, a) {
      jo(), Ca[Ea++] = kl, Ca[Ea++] = bl, Ca[Ea++] = Vo, Vo = e;
      var i = kl, u = bl, s = Ch(i) - 1, f = i & ~(1 << s), p = a + 1, v = Ch(t) + s;
      if (v > 30) {
        var m = s - s % 5, y = (1 << m) - 1, R = (f & y).toString(32), E = f >> m, _ = s - m, O = Ch(t) + _, L = p << _, ne = L | E, Se = R + u;
        kl = 1 << O | ne, bl = Se;
      } else {
        var ve = p << s, We = ve | f, $e = u;
        kl = 1 << v | We, bl = $e;
      }
    }
    function $y(e) {
      jo();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Bo(e, a), q0(e, a, i);
      }
    }
    function Ch(e) {
      return 32 - Hs(e);
    }
    function lx(e) {
      return 1 << Ch(e) - 1;
    }
    function Qy(e) {
      for (; e === gh; )
        gh = _c[--Oc], _c[Oc] = null, Sh = _c[--Oc], _c[Oc] = null;
      for (; e === Vo; )
        Vo = Ca[--Ea], Ca[Ea] = null, bl = Ca[--Ea], Ca[Ea] = null, kl = Ca[--Ea], Ca[Ea] = null;
    }
    function ux() {
      return jo(), Vo !== null ? {
        id: kl,
        overflow: bl
      } : null;
    }
    function ox(e, t) {
      jo(), Ca[Ea++] = kl, Ca[Ea++] = bl, Ca[Ea++] = Vo, kl = t.id, bl = t.overflow, Vo = e;
    }
    function jo() {
      Nn() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ln = null, Ta = null, Wa = !1, Po = !1, ku = null;
    function sx() {
      Wa && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function K0() {
      Po = !0;
    }
    function cx() {
      return Po;
    }
    function fx(e) {
      var t = e.stateNode.containerInfo;
      return Ta = _R(t), Ln = e, Wa = !0, ku = null, Po = !1, !0;
    }
    function dx(e, t, a) {
      return Ta = OR(t), Ln = e, Wa = !0, ku = null, Po = !1, a !== null && ox(e, a), !0;
    }
    function Z0(e, t) {
      switch (e.tag) {
        case F: {
          BR(e.stateNode.containerInfo, t);
          break;
        }
        case I: {
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
        if (Po)
          return;
        switch (e.tag) {
          case F: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case I:
                var i = t.type;
                t.pendingProps, YR(a, i);
                break;
              case fe:
                var u = t.pendingProps;
                $R(a, u);
                break;
            }
            break;
          }
          case I: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case I: {
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
              case fe: {
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
                case I:
                  var L = t.type;
                  t.pendingProps, QR(O, L);
                  break;
                case fe:
                  var ne = t.pendingProps;
                  IR(O, ne);
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
        case I: {
          var a = e.type;
          e.pendingProps;
          var i = RR(t, a);
          return i !== null ? (e.stateNode = i, Ln = e, Ta = bR(i), !0) : !1;
        }
        case fe: {
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
      return (e.mode & Ve) !== Re && (e.flags & _e) === ge;
    }
    function Wy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Xy(e) {
      if (Wa) {
        var t = Ta;
        if (!t) {
          Gy(e) && (Iy(Ln, e), Wy()), e1(Ln, e), Wa = !1, Ln = e;
          return;
        }
        var a = t;
        if (!t1(e, t)) {
          Gy(e) && (Iy(Ln, e), Wy()), t = Ld(a);
          var i = Ln;
          if (!t || !t1(e, t)) {
            e1(Ln, e), Wa = !1, Ln = e;
            return;
          }
          J0(i, a);
        }
      }
    }
    function px(e, t, a) {
      var i = e.stateNode, u = !Po, s = MR(i, e.type, e.memoizedProps, t, a, e, u);
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
            case I: {
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
      for (var t = e.return; t !== null && t.tag !== I && t.tag !== F && t.tag !== Ee; )
        t = t.return;
      Ln = t;
    }
    function Eh(e) {
      if (e !== Ln)
        return !1;
      if (!Wa)
        return n1(e), Wa = !0, !1;
      if (e.tag !== F && (e.tag !== I || HR(e.type) && !Oy(e.type, e.memoizedProps))) {
        var t = Ta;
        if (t)
          if (Gy(e))
            r1(e), Wy();
          else
            for (; t; )
              J0(e, t), t = Ld(t);
      }
      return n1(e), e.tag === Ee ? Ta = mx(e) : Ta = Ln ? Ld(e.stateNode) : null, !0;
    }
    function yx() {
      return Wa && Ta !== null;
    }
    function r1(e) {
      for (var t = Ta; t; )
        Z0(e, t), t = Ld(t);
    }
    function Mc() {
      Ln = null, Ta = null, Wa = !1, Po = !1;
    }
    function a1() {
      ku !== null && (ZC(ku), ku = null);
    }
    function Nn() {
      return Wa;
    }
    function qy(e) {
      ku === null ? ku = [e] : ku.push(e);
    }
    var gx = x.ReactCurrentBatchConfig, Sx = null;
    function Cx() {
      return gx.transition;
    }
    var Xa = {
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
      }, Yo = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Ad = [], Hd = [], Fd = [], Vd = [], Bd = [], jd = [], $o = /* @__PURE__ */ new Set();
      Xa.recordUnsafeLifecycleWarnings = function(e, t) {
        $o.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Ad.push(e), e.mode & Rt && typeof t.UNSAFE_componentWillMount == "function" && Hd.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Fd.push(e), e.mode & Rt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Vd.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Bd.push(e), e.mode & Rt && typeof t.UNSAFE_componentWillUpdate == "function" && jd.push(e));
      }, Xa.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Ad.length > 0 && (Ad.forEach(function(E) {
          e.add(Ne(E) || "Component"), $o.add(E.type);
        }), Ad = []);
        var t = /* @__PURE__ */ new Set();
        Hd.length > 0 && (Hd.forEach(function(E) {
          t.add(Ne(E) || "Component"), $o.add(E.type);
        }), Hd = []);
        var a = /* @__PURE__ */ new Set();
        Fd.length > 0 && (Fd.forEach(function(E) {
          a.add(Ne(E) || "Component"), $o.add(E.type);
        }), Fd = []);
        var i = /* @__PURE__ */ new Set();
        Vd.length > 0 && (Vd.forEach(function(E) {
          i.add(Ne(E) || "Component"), $o.add(E.type);
        }), Vd = []);
        var u = /* @__PURE__ */ new Set();
        Bd.length > 0 && (Bd.forEach(function(E) {
          u.add(Ne(E) || "Component"), $o.add(E.type);
        }), Bd = []);
        var s = /* @__PURE__ */ new Set();
        if (jd.length > 0 && (jd.forEach(function(E) {
          s.add(Ne(E) || "Component"), $o.add(E.type);
        }), jd = []), t.size > 0) {
          var f = Yo(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Yo(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Yo(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var m = Yo(e);
          Ce(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var y = Yo(a);
          Ce(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (u.size > 0) {
          var R = Yo(u);
          Ce(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
      };
      var Th = /* @__PURE__ */ new Map(), i1 = /* @__PURE__ */ new Set();
      Xa.recordLegacyContextWarning = function(e, t) {
        var a = Ex(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!i1.has(e.type)) {
          var i = Th.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Th.set(a, i)), i.push(e));
        }
      }, Xa.flushLegacyContextWarning = function() {
        Th.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ne(s) || "Component"), i1.add(s.type);
            });
            var u = Yo(i);
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
      }, Xa.discardPendingWarnings = function() {
        Ad = [], Hd = [], Fd = [], Vd = [], Bd = [], jd = [], Th = /* @__PURE__ */ new Map();
      };
    }
    function qa(e, t) {
      if (e && e.defaultProps) {
        var a = Pe({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Ky = xu(null), Zy;
    Zy = {};
    var Rh = null, Lc = null, Jy = null, xh = !1;
    function wh() {
      Rh = null, Lc = null, Jy = null, xh = !1;
    }
    function l1() {
      xh = !0;
    }
    function u1() {
      xh = !1;
    }
    function o1(e, t, a) {
      tr(Ky, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Zy && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Zy;
    }
    function eg(e, t) {
      var a = Ky.current;
      er(Ky, t), e._currentValue = a;
    }
    function tg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (pl(i.childLanes, t) ? u !== null && !pl(u.childLanes, t) && (u.childLanes = Ue(u.childLanes, t)) : (i.childLanes = Ue(i.childLanes, t), u !== null && (u.childLanes = Ue(u.childLanes, t))), i === a)
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
                var p = Gt(a), v = _l(pt, p);
                v.tag = kh;
                var m = i.updateQueue;
                if (m !== null) {
                  var y = m.shared, R = y.pending;
                  R === null ? v.next = v : (v.next = R.next, R.next = v), y.pending = v;
                }
              }
              i.lanes = Ue(i.lanes, a);
              var E = i.alternate;
              E !== null && (E.lanes = Ue(E.lanes, a)), tg(i.return, a, e), s.lanes = Ue(s.lanes, a);
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
          _.lanes = Ue(_.lanes, a);
          var O = _.alternate;
          O !== null && (O.lanes = Ue(O.lanes, a)), tg(_, a, e), u = i.sibling;
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
    function Nc(e, t) {
      Rh = e, Lc = null, Jy = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Jn(a.lanes, t) && tp(), a.firstContext = null);
      }
    }
    function ln(e) {
      xh && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Jy !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Lc === null) {
          if (Rh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Lc = a, Rh.dependencies = {
            lanes: z,
            firstContext: a
          };
        } else
          Lc = Lc.next = a;
      }
      return t;
    }
    var Qo = null;
    function ng(e) {
      Qo === null ? Qo = [e] : Qo.push(e);
    }
    function xx() {
      if (Qo !== null) {
        for (var e = 0; e < Qo.length; e++) {
          var t = Qo[e], a = t.interleaved;
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
        Qo = null;
      }
    }
    function s1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ng(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Dh(e, i);
    }
    function wx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, ng(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Dx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ng(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Dh(e, i);
    }
    function jr(e, t) {
      return Dh(e, t);
    }
    var kx = Dh;
    function Dh(e, t) {
      e.lanes = Ue(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ue(a.lanes, t)), a === null && (e.flags & (ht | Mr)) !== ge && cE(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ue(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ue(a.childLanes, t) : (u.flags & (ht | Mr)) !== ge && cE(e), i = u, u = u.return;
      if (i.tag === F) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var c1 = 0, f1 = 1, kh = 2, rg = 3, bh = !1, ag, _h;
    ag = !1, _h = null;
    function ig(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: z
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
    function _l(e, t) {
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
    function bu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (_h === u && !ag && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), ag = !0), kD()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, kx(e, a);
      } else
        return Dx(e, u, t, a);
    }
    function Oh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Kf(a)) {
          var s = u.lanes;
          s = Jf(s, e.pendingLanes);
          var f = Ue(s, a);
          u.lanes = f, ou(e, f);
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
          e.flags = e.flags & ~en | _e;
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
          return m == null ? i : Pe({}, i, m);
        }
        case kh:
          return bh = !0, i;
      }
      return i;
    }
    function Mh(e, t, a, i) {
      var u = e.updateQueue;
      bh = !1, _h = u.shared;
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
        var _ = u.baseState, O = z, L = null, ne = null, Se = null, ve = s;
        do {
          var We = ve.lane, $e = ve.eventTime;
          if (pl(i, We)) {
            if (Se !== null) {
              var N = {
                eventTime: $e,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ie,
                tag: ve.tag,
                payload: ve.payload,
                callback: ve.callback,
                next: null
              };
              Se = Se.next = N;
            }
            _ = bx(e, u, ve, _, t, a);
            var k = ve.callback;
            if (k !== null && // If the update was already committed, we should not queue its
            // callback again.
            ve.lane !== Ie) {
              e.flags |= va;
              var Y = u.effects;
              Y === null ? u.effects = [ve] : Y.push(ve);
            }
          } else {
            var D = {
              eventTime: $e,
              lane: We,
              tag: ve.tag,
              payload: ve.payload,
              callback: ve.callback,
              next: null
            };
            Se === null ? (ne = Se = D, L = _) : Se = Se.next = D, O = Ue(O, We);
          }
          if (ve = ve.next, ve === null) {
            if (p = u.shared.pending, p === null)
              break;
            var re = p, J = re.next;
            re.next = null, ve = J, u.lastBaseUpdate = re, u.shared.pending = null;
          }
        } while (!0);
        Se === null && (L = _), u.baseState = L, u.firstBaseUpdate = ne, u.lastBaseUpdate = Se;
        var ke = u.shared.interleaved;
        if (ke !== null) {
          var Le = ke;
          do
            O = Ue(O, Le.lane), Le = Le.next;
          while (Le !== ke);
        } else
          s === null && (u.shared.lanes = z);
        pp(O), e.lanes = O, e.memoizedState = _;
      }
      _h = null;
    }
    function _x(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function p1() {
      bh = !1;
    }
    function Lh() {
      return bh;
    }
    function v1(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, _x(f, a));
        }
    }
    var ug = {}, h1 = new A.Component().refs, og, sg, cg, fg, dg, m1, Nh, pg, vg, hg;
    {
      og = /* @__PURE__ */ new Set(), sg = /* @__PURE__ */ new Set(), cg = /* @__PURE__ */ new Set(), fg = /* @__PURE__ */ new Set(), pg = /* @__PURE__ */ new Set(), dg = /* @__PURE__ */ new Set(), vg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set();
      var y1 = /* @__PURE__ */ new Set();
      Nh = function(e, t) {
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
      var f = s == null ? u : Pe({}, u, s);
      if (e.memoizedState = f, e.lanes === z) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var yg = {
      isMounted: fr,
      enqueueSetState: function(e, t, a) {
        var i = _r(e), u = yr(), s = Au(i), f = _l(u, s);
        f.payload = t, a != null && (Nh(a, "setState"), f.callback = a);
        var p = bu(i, f, s);
        p !== null && (yn(p, i, s, u), Oh(p, i, s)), wi(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = _r(e), u = yr(), s = Au(i), f = _l(u, s);
        f.tag = f1, f.payload = t, a != null && (Nh(a, "replaceState"), f.callback = a);
        var p = bu(i, f, s);
        p !== null && (yn(p, i, s, u), Oh(p, i, s)), wi(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = _r(e), i = yr(), u = Au(a), s = _l(i, u);
        s.tag = kh, t != null && (Nh(t, "forceUpdate"), s.callback = t);
        var f = bu(a, s, u);
        f !== null && (yn(f, a, u, i), Oh(f, a, u)), Gf(a, u);
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
      return t.prototype && t.prototype.isPureReactComponent ? !me(a, i) || !me(u, s) : !0;
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
      t.updater = yg, e.stateNode = t, Zl(t, e), t._reactInternalInstance = ug;
    }
    function C1(e, t, a) {
      var i = !1, u = la, s = la, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === ef && f._context === void 0
        );
        if (!p && !hg.has(t)) {
          hg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Jc ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", ft(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = ln(f);
      else {
        u = kc(e, t, !0);
        var m = t.contextTypes;
        i = m != null, s = i ? bc(e, u) : la;
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
            var ne = ft(t) || "Component", Se = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            fg.has(ne) || (fg.add(ne), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ne, Se, _ !== null ? `
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
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ne(e) || "Component"), yg.enqueueReplaceState(t, t.state, null));
    }
    function E1(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ne(e) || "Component";
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
        var f = kc(e, t, !0);
        u.context = bc(e, f);
      }
      {
        if (u.state === a) {
          var p = ft(t) || "Component";
          pg.has(p) || (pg.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Rt && Xa.recordLegacyContextWarning(e, u), Xa.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (mg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Mx(e, u), Mh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = ze;
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
        var m = kc(e, t, !0);
        v = bc(e, m);
      }
      var y = t.getDerivedStateFromProps, R = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !R && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && E1(e, u, a, v), p1();
      var E = e.memoizedState, _ = u.state = E;
      if (Mh(e, a, u, i), _ = e.memoizedState, s === a && E === _ && !vh() && !Lh()) {
        if (typeof u.componentDidMount == "function") {
          var O = ze;
          O |= Gn, (e.mode & zr) !== Re && (O |= Wn), e.flags |= O;
        }
        return !1;
      }
      typeof y == "function" && (mg(e, t, y, a), _ = e.memoizedState);
      var L = Lh() || g1(e, t, s, a, E, _, v);
      if (L) {
        if (!R && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ne = ze;
          ne |= Gn, (e.mode & zr) !== Re && (ne |= Wn), e.flags |= ne;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Se = ze;
          Se |= Gn, (e.mode & zr) !== Re && (Se |= Wn), e.flags |= Se;
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
        var E = kc(t, a, !0);
        R = bc(t, E);
      }
      var _ = a.getDerivedStateFromProps, O = typeof _ == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !O && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== R) && E1(t, s, i, R), p1();
      var L = t.memoizedState, ne = s.state = L;
      if (Mh(t, i, s, u), ne = t.memoizedState, f === v && L === ne && !vh() && !Lh() && !De)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= ze), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= Or), !1;
      typeof _ == "function" && (mg(t, a, _, i), ne = t.memoizedState);
      var Se = Lh() || g1(t, a, p, i, L, ne, R) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      De;
      return Se ? (!O && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ne, R), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ne, R)), typeof s.componentDidUpdate == "function" && (t.flags |= ze), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Or)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= ze), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= Or), t.memoizedProps = i, t.memoizedState = ne), s.props = i, s.state = ne, s.context = R, Se;
    }
    var Sg, Cg, Eg, Tg, Rg, T1 = function(e, t) {
    };
    Sg = !1, Cg = !1, Eg = {}, Tg = {}, Rg = {}, T1 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ne(t) || "Component";
        Tg[a] || (Tg[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Pd(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Rt || lr) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Ne(e) || "Component";
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
          $i(i, "ref");
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
    function zh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Uh(e) {
      {
        var t = Ne(e) || "Component";
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
      function t(D, N) {
        if (e) {
          var k = D.deletions;
          k === null ? (D.deletions = [N], D.flags |= Je) : k.push(N);
        }
      }
      function a(D, N) {
        if (!e)
          return null;
        for (var k = N; k !== null; )
          t(D, k), k = k.sibling;
        return null;
      }
      function i(D, N) {
        for (var k = /* @__PURE__ */ new Map(), Y = N; Y !== null; )
          Y.key !== null ? k.set(Y.key, Y) : k.set(Y.index, Y), Y = Y.sibling;
        return k;
      }
      function u(D, N) {
        var k = Jo(D, N);
        return k.index = 0, k.sibling = null, k;
      }
      function s(D, N, k) {
        if (D.index = k, !e)
          return D.flags |= Uf, N;
        var Y = D.alternate;
        if (Y !== null) {
          var re = Y.index;
          return re < N ? (D.flags |= ht, N) : re;
        } else
          return D.flags |= ht, N;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= ht), D;
      }
      function p(D, N, k, Y) {
        if (N === null || N.tag !== fe) {
          var re = qS(k, D.mode, Y);
          return re.return = D, re;
        } else {
          var J = u(N, k);
          return J.return = D, J;
        }
      }
      function v(D, N, k, Y) {
        var re = k.type;
        if (re === _a)
          return y(D, N, k.props.children, Y, k.key);
        if (N !== null && (N.elementType === re || // Keep this check inline so it only runs on the false path:
        vE(N, k) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof re == "object" && re !== null && re.$$typeof === On && R1(re) === N.type)) {
          var J = u(N, k.props);
          return J.ref = Pd(D, N, k), J.return = D, J._debugSource = k._source, J._debugOwner = k._owner, J;
        }
        var ke = XS(k, D.mode, Y);
        return ke.ref = Pd(D, N, k), ke.return = D, ke;
      }
      function m(D, N, k, Y) {
        if (N === null || N.tag !== U || N.stateNode.containerInfo !== k.containerInfo || N.stateNode.implementation !== k.implementation) {
          var re = KS(k, D.mode, Y);
          return re.return = D, re;
        } else {
          var J = u(N, k.children || []);
          return J.return = D, J;
        }
      }
      function y(D, N, k, Y, re) {
        if (N === null || N.tag !== Ae) {
          var J = Fu(k, D.mode, Y, re);
          return J.return = D, J;
        } else {
          var ke = u(N, k);
          return ke.return = D, ke;
        }
      }
      function R(D, N, k) {
        if (typeof N == "string" && N !== "" || typeof N == "number") {
          var Y = qS("" + N, D.mode, k);
          return Y.return = D, Y;
        }
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case Hl: {
              var re = XS(N, D.mode, k);
              return re.ref = Pd(D, null, N), re.return = D, re;
            }
            case Kr: {
              var J = KS(N, D.mode, k);
              return J.return = D, J;
            }
            case On: {
              var ke = N._payload, Le = N._init;
              return R(D, Le(ke), k);
            }
          }
          if (Zt(N) || Oa(N)) {
            var st = Fu(N, D.mode, k, null);
            return st.return = D, st;
          }
          zh(D, N);
        }
        return typeof N == "function" && Uh(D), null;
      }
      function E(D, N, k, Y) {
        var re = N !== null ? N.key : null;
        if (typeof k == "string" && k !== "" || typeof k == "number")
          return re !== null ? null : p(D, N, "" + k, Y);
        if (typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case Hl:
              return k.key === re ? v(D, N, k, Y) : null;
            case Kr:
              return k.key === re ? m(D, N, k, Y) : null;
            case On: {
              var J = k._payload, ke = k._init;
              return E(D, N, ke(J), Y);
            }
          }
          if (Zt(k) || Oa(k))
            return re !== null ? null : y(D, N, k, Y, null);
          zh(D, k);
        }
        return typeof k == "function" && Uh(D), null;
      }
      function _(D, N, k, Y, re) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number") {
          var J = D.get(k) || null;
          return p(N, J, "" + Y, re);
        }
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case Hl: {
              var ke = D.get(Y.key === null ? k : Y.key) || null;
              return v(N, ke, Y, re);
            }
            case Kr: {
              var Le = D.get(Y.key === null ? k : Y.key) || null;
              return m(N, Le, Y, re);
            }
            case On:
              var st = Y._payload, qe = Y._init;
              return _(D, N, k, qe(st), re);
          }
          if (Zt(Y) || Oa(Y)) {
            var Kt = D.get(k) || null;
            return y(N, Kt, Y, re, null);
          }
          zh(N, Y);
        }
        return typeof Y == "function" && Uh(N), null;
      }
      function O(D, N, k) {
        {
          if (typeof D != "object" || D === null)
            return N;
          switch (D.$$typeof) {
            case Hl:
            case Kr:
              T1(D, k);
              var Y = D.key;
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
              var re = D._payload, J = D._init;
              O(J(re), N, k);
              break;
          }
        }
        return N;
      }
      function L(D, N, k, Y) {
        for (var re = null, J = 0; J < k.length; J++) {
          var ke = k[J];
          re = O(ke, re, D);
        }
        for (var Le = null, st = null, qe = N, Kt = 0, Ke = 0, Yt = null; qe !== null && Ke < k.length; Ke++) {
          qe.index > Ke ? (Yt = qe, qe = null) : Yt = qe.sibling;
          var rr = E(D, qe, k[Ke], Y);
          if (rr === null) {
            qe === null && (qe = Yt);
            break;
          }
          e && qe && rr.alternate === null && t(D, qe), Kt = s(rr, Kt, Ke), st === null ? Le = rr : st.sibling = rr, st = rr, qe = Yt;
        }
        if (Ke === k.length) {
          if (a(D, qe), Nn()) {
            var Bn = Ke;
            Bo(D, Bn);
          }
          return Le;
        }
        if (qe === null) {
          for (; Ke < k.length; Ke++) {
            var oa = R(D, k[Ke], Y);
            oa !== null && (Kt = s(oa, Kt, Ke), st === null ? Le = oa : st.sibling = oa, st = oa);
          }
          if (Nn()) {
            var gr = Ke;
            Bo(D, gr);
          }
          return Le;
        }
        for (var Sr = i(D, qe); Ke < k.length; Ke++) {
          var ar = _(Sr, D, Ke, k[Ke], Y);
          ar !== null && (e && ar.alternate !== null && Sr.delete(ar.key === null ? Ke : ar.key), Kt = s(ar, Kt, Ke), st === null ? Le = ar : st.sibling = ar, st = ar);
        }
        if (e && Sr.forEach(function(qc) {
          return t(D, qc);
        }), Nn()) {
          var Ul = Ke;
          Bo(D, Ul);
        }
        return Le;
      }
      function ne(D, N, k, Y) {
        var re = Oa(k);
        if (typeof re != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          k[Symbol.toStringTag] === "Generator" && (Cg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Cg = !0), k.entries === re && (Sg || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Sg = !0);
          var J = re.call(k);
          if (J)
            for (var ke = null, Le = J.next(); !Le.done; Le = J.next()) {
              var st = Le.value;
              ke = O(st, ke, D);
            }
        }
        var qe = re.call(k);
        if (qe == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Kt = null, Ke = null, Yt = N, rr = 0, Bn = 0, oa = null, gr = qe.next(); Yt !== null && !gr.done; Bn++, gr = qe.next()) {
          Yt.index > Bn ? (oa = Yt, Yt = null) : oa = Yt.sibling;
          var Sr = E(D, Yt, gr.value, Y);
          if (Sr === null) {
            Yt === null && (Yt = oa);
            break;
          }
          e && Yt && Sr.alternate === null && t(D, Yt), rr = s(Sr, rr, Bn), Ke === null ? Kt = Sr : Ke.sibling = Sr, Ke = Sr, Yt = oa;
        }
        if (gr.done) {
          if (a(D, Yt), Nn()) {
            var ar = Bn;
            Bo(D, ar);
          }
          return Kt;
        }
        if (Yt === null) {
          for (; !gr.done; Bn++, gr = qe.next()) {
            var Ul = R(D, gr.value, Y);
            Ul !== null && (rr = s(Ul, rr, Bn), Ke === null ? Kt = Ul : Ke.sibling = Ul, Ke = Ul);
          }
          if (Nn()) {
            var qc = Bn;
            Bo(D, qc);
          }
          return Kt;
        }
        for (var gp = i(D, Yt); !gr.done; Bn++, gr = qe.next()) {
          var Yi = _(gp, D, Bn, gr.value, Y);
          Yi !== null && (e && Yi.alternate !== null && gp.delete(Yi.key === null ? Bn : Yi.key), rr = s(Yi, rr, Bn), Ke === null ? Kt = Yi : Ke.sibling = Yi, Ke = Yi);
        }
        if (e && gp.forEach(function(Gk) {
          return t(D, Gk);
        }), Nn()) {
          var Ik = Bn;
          Bo(D, Ik);
        }
        return Kt;
      }
      function Se(D, N, k, Y) {
        if (N !== null && N.tag === fe) {
          a(D, N.sibling);
          var re = u(N, k);
          return re.return = D, re;
        }
        a(D, N);
        var J = qS(k, D.mode, Y);
        return J.return = D, J;
      }
      function ve(D, N, k, Y) {
        for (var re = k.key, J = N; J !== null; ) {
          if (J.key === re) {
            var ke = k.type;
            if (ke === _a) {
              if (J.tag === Ae) {
                a(D, J.sibling);
                var Le = u(J, k.props.children);
                return Le.return = D, Le._debugSource = k._source, Le._debugOwner = k._owner, Le;
              }
            } else if (J.elementType === ke || // Keep this check inline so it only runs on the false path:
            vE(J, k) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ke == "object" && ke !== null && ke.$$typeof === On && R1(ke) === J.type) {
              a(D, J.sibling);
              var st = u(J, k.props);
              return st.ref = Pd(D, J, k), st.return = D, st._debugSource = k._source, st._debugOwner = k._owner, st;
            }
            a(D, J);
            break;
          } else
            t(D, J);
          J = J.sibling;
        }
        if (k.type === _a) {
          var qe = Fu(k.props.children, D.mode, Y, k.key);
          return qe.return = D, qe;
        } else {
          var Kt = XS(k, D.mode, Y);
          return Kt.ref = Pd(D, N, k), Kt.return = D, Kt;
        }
      }
      function We(D, N, k, Y) {
        for (var re = k.key, J = N; J !== null; ) {
          if (J.key === re)
            if (J.tag === U && J.stateNode.containerInfo === k.containerInfo && J.stateNode.implementation === k.implementation) {
              a(D, J.sibling);
              var ke = u(J, k.children || []);
              return ke.return = D, ke;
            } else {
              a(D, J);
              break;
            }
          else
            t(D, J);
          J = J.sibling;
        }
        var Le = KS(k, D.mode, Y);
        return Le.return = D, Le;
      }
      function $e(D, N, k, Y) {
        var re = typeof k == "object" && k !== null && k.type === _a && k.key === null;
        if (re && (k = k.props.children), typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case Hl:
              return f(ve(D, N, k, Y));
            case Kr:
              return f(We(D, N, k, Y));
            case On:
              var J = k._payload, ke = k._init;
              return $e(D, N, ke(J), Y);
          }
          if (Zt(k))
            return L(D, N, k, Y);
          if (Oa(k))
            return ne(D, N, k, Y);
          zh(D, k);
        }
        return typeof k == "string" && k !== "" || typeof k == "number" ? f(Se(D, N, "" + k, Y)) : (typeof k == "function" && Uh(D), a(D, N));
      }
      return $e;
    }
    var zc = x1(!0), w1 = x1(!1);
    function zx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Jo(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Jo(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Ux(e, t) {
      for (var a = e.child; a !== null; )
        ck(a, t), a = a.sibling;
    }
    var Yd = {}, _u = xu(Yd), $d = xu(Yd), Ah = xu(Yd);
    function Hh(e) {
      if (e === Yd)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function D1() {
      var e = Hh(Ah.current);
      return e;
    }
    function xg(e, t) {
      tr(Ah, t, e), tr($d, e, e), tr(_u, Yd, e);
      var a = XT(t);
      er(_u, e), tr(_u, a, e);
    }
    function Uc(e) {
      er(_u, e), er($d, e), er(Ah, e);
    }
    function wg() {
      var e = Hh(_u.current);
      return e;
    }
    function k1(e) {
      Hh(Ah.current);
      var t = Hh(_u.current), a = qT(t, e.type);
      t !== a && (tr($d, e, e), tr(_u, a, e));
    }
    function Dg(e) {
      $d.current === e && (er(_u, e), er($d, e));
    }
    var Ax = 0, b1 = 1, _1 = 1, Qd = 2, Ka = xu(Ax);
    function kg(e, t) {
      return (e & t) !== 0;
    }
    function Ac(e) {
      return e & b1;
    }
    function bg(e, t) {
      return e & b1 | t;
    }
    function Hx(e, t) {
      return e | t;
    }
    function Ou(e, t) {
      tr(Ka, t, e);
    }
    function Hc(e) {
      er(Ka, e);
    }
    function Fx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Fh(e) {
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
          var u = (t.flags & _e) !== ge;
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
    ), Ai = (
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
    var te = x.ReactCurrentDispatcher, Id = x.ReactCurrentBatchConfig, Mg, Fc;
    Mg = /* @__PURE__ */ new Set();
    var Io = z, ot = null, dn = null, pn = null, Vh = !1, Gd = !1, Wd = 0, Bx = 0, jx = 25, H = null, Ra = null, Mu = -1, Lg = !1;
    function tt() {
      {
        var e = H;
        Ra === null ? Ra = [e] : Ra.push(e);
      }
    }
    function X() {
      {
        var e = H;
        Ra !== null && (Mu++, Ra[Mu] !== e && Px(e));
      }
    }
    function Vc(e) {
      e != null && !Zt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", H, typeof e);
    }
    function Px(e) {
      {
        var t = Ne(ot);
        if (!Mg.has(t) && (Mg.add(t), Ra !== null)) {
          for (var a = "", i = 30, u = 0; u <= Mu; u++) {
            for (var s = Ra[u], f = u === Mu ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function Bc(e, t, a, i, u, s) {
      Io = s, ot = t, Ra = e !== null ? e._debugHookTypes : null, Mu = -1, Lg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = z, e !== null && e.memoizedState !== null ? te.current = K1 : Ra !== null ? te.current = q1 : te.current = X1;
      var f = a(i, u);
      if (Gd) {
        var p = 0;
        do {
          if (Gd = !1, Wd = 0, p >= jx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Lg = !1, dn = null, pn = null, t.updateQueue = null, Mu = -1, te.current = Z1, f = a(i, u);
        } while (Gd);
      }
      te.current = Zh, t._debugHookTypes = Ra;
      var v = dn !== null && dn.next !== null;
      if (Io = z, ot = null, dn = null, pn = null, H = null, Ra = null, Mu = -1, e !== null && (e.flags & un) !== (t.flags & un) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ve) !== Re && g("Internal React error: Expected static flag was missing. Please notify the React team."), Vh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function jc() {
      var e = Wd !== 0;
      return Wd = 0, e;
    }
    function O1(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & zr) !== Re ? t.flags &= ~(rl | Wn | Ct | ze) : t.flags &= ~(Ct | ze), e.lanes = uu(e.lanes, a);
    }
    function M1() {
      if (te.current = Zh, Vh) {
        for (var e = ot.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Vh = !1;
      }
      Io = z, ot = null, dn = null, pn = null, Ra = null, Mu = -1, H = null, $1 = !1, Gd = !1, Wd = 0;
    }
    function Hi() {
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
      var i = Hi(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: z,
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
          var ne = L.lane;
          if (pl(Io, ne)) {
            if (O !== null) {
              var ve = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ie,
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
              var We = L.action;
              R = e(R, We);
            }
          } else {
            var Se = {
              lane: ne,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null
            };
            O === null ? (_ = O = Se, E = R) : O = O.next = Se, ot.lanes = Ue(ot.lanes, ne), pp(ne);
          }
          L = L.next;
        } while (L !== null && L !== y);
        O === null ? E = R : O.next = _, se(R, i.memoizedState) || tp(), i.memoizedState = R, i.baseState = E, i.baseQueue = O, u.lastRenderedState = R;
      }
      var $e = u.interleaved;
      if ($e !== null) {
        var D = $e;
        do {
          var N = D.lane;
          ot.lanes = Ue(ot.lanes, N), pp(N), D = D.next;
        } while (D !== $e);
      } else
        f === null && (u.lanes = z);
      var k = u.dispatch;
      return [i.memoizedState, k];
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
        se(p, i.memoizedState) || tp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function yb(e, t, a) {
    }
    function gb(e, t, a) {
    }
    function Fg(e, t, a) {
      var i = ot, u = Hi(), s, f = Nn();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Fc || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Fc = !0);
      } else {
        if (s = t(), !Fc) {
          var p = t();
          se(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Fc = !0);
        }
        var v = mm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ro(v, Io) || N1(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, $h(U1.bind(null, i, m, e), [e]), i.flags |= Ct, Xd(cn | zn, z1.bind(null, i, m, s, t), void 0, null), s;
    }
    function Bh(e, t, a) {
      var i = ot, u = xa(), s = t();
      if (!Fc) {
        var f = t();
        se(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Fc = !0);
      }
      var p = u.memoizedState, v = !se(p, s);
      v && (u.memoizedState = s, tp());
      var m = u.queue;
      if (Kd(U1.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pn !== null && pn.memoizedState.tag & cn) {
        i.flags |= Ct, Xd(cn | zn, z1.bind(null, i, m, s, t), void 0, null);
        var y = mm();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ro(y, Io) || N1(i, t, s);
      }
      return s;
    }
    function N1(e, t, a) {
      e.flags |= vo;
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
    function jh(e) {
      var t = Hi();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: z,
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
    function Xd(e, t, a, i) {
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
      var t = Hi();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Ph(e) {
      var t = xa();
      return t.memoizedState;
    }
    function qd(e, t, a, i) {
      var u = Hi(), s = i === void 0 ? null : i;
      ot.flags |= e, u.memoizedState = Xd(cn | t, a, void 0, s);
    }
    function Yh(e, t, a, i) {
      var u = xa(), s = i === void 0 ? null : i, f = void 0;
      if (dn !== null) {
        var p = dn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Ng(s, v)) {
            u.memoizedState = Xd(t, a, f, s);
            return;
          }
        }
      }
      ot.flags |= e, u.memoizedState = Xd(cn | t, a, f, s);
    }
    function $h(e, t) {
      return (ot.mode & zr) !== Re ? qd(rl | Ct | Si, zn, e, t) : qd(Ct | Si, zn, e, t);
    }
    function Kd(e, t) {
      return Yh(Ct, zn, e, t);
    }
    function Pg(e, t) {
      return qd(ze, Ai, e, t);
    }
    function Qh(e, t) {
      return Yh(ze, Ai, e, t);
    }
    function Yg(e, t) {
      var a = ze;
      return a |= Gn, (ot.mode & zr) !== Re && (a |= Wn), qd(a, fn, e, t);
    }
    function Ih(e, t) {
      return Yh(ze, fn, e, t);
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
      var i = a != null ? a.concat([e]) : null, u = ze;
      return u |= Gn, (ot.mode & zr) !== Re && (u |= Wn), qd(u, fn, F1.bind(null, t, e), i);
    }
    function Gh(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Yh(ze, fn, F1.bind(null, t, e), i);
    }
    function Yx(e, t) {
    }
    var Wh = Yx;
    function Qg(e, t) {
      var a = Hi(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Xh(e, t) {
      var a = xa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ng(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Ig(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, u = e();
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
      var t = Hi();
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
      var i = !Jm(Io);
      if (i) {
        if (!se(a, t)) {
          var u = Zf();
          ot.lanes = Ue(ot.lanes, u), pp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, tp()), e.memoizedState = a, a;
    }
    function $x(e, t, a) {
      var i = Ar();
      Wt(Rn(i, sn)), e(!0);
      var u = Id.transition;
      Id.transition = {};
      var s = Id.transition;
      Id.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Wt(i), Id.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Ce("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Wg() {
      var e = jh(!1), t = e[0], a = e[1], i = $x.bind(null, a), u = Hi();
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
      var e = Hi(), t = mm(), a = t.identifierPrefix, i;
      if (Nn()) {
        var u = ix();
        i = ":" + a + "R" + u;
        var s = Wd++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Bx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Kh() {
      var e = xa(), t = e.memoizedState;
      return t;
    }
    function Ix(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Au(e), u = {
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
      var i = Au(e), u = {
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
        if (e.lanes === z && (s === null || s.lanes === z)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = te.current, te.current = Za;
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
      Gd = Vh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function G1(e, t, a) {
      if (Kf(a)) {
        var i = t.lanes;
        i = Jf(i, e.pendingLanes);
        var u = Ue(i, a);
        t.lanes = u, ou(e, u);
      }
    }
    function W1(e, t, a) {
      wi(e, t);
    }
    var Zh = {
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
    }, X1 = null, q1 = null, K1 = null, Z1 = null, Fi = null, Za = null, Jh = null;
    {
      var qg = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Me = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      X1 = {
        readContext: function(e) {
          return ln(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", tt(), Vc(t), Qg(e, t);
        },
        useContext: function(e) {
          return H = "useContext", tt(), ln(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", tt(), Vc(t), $h(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", tt(), Vc(a), $g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", tt(), Vc(t), Pg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", tt(), Vc(t), Yg(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", tt(), Vc(t);
          var a = te.current;
          te.current = Fi;
          try {
            return Ig(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", tt();
          var i = te.current;
          te.current = Fi;
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
          te.current = Fi;
          try {
            return jh(e);
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
      }, q1 = {
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
          return H = "useEffect", X(), $h(e, t);
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
          te.current = Fi;
          try {
            return Ig(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", X();
          var i = te.current;
          te.current = Fi;
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
          te.current = Fi;
          try {
            return jh(e);
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
      }, K1 = {
        readContext: function(e) {
          return ln(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", X(), Xh(e, t);
        },
        useContext: function(e) {
          return H = "useContext", X(), ln(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", X(), Kd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", X(), Gh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", X(), Qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", X(), Ih(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", X();
          var a = te.current;
          te.current = Za;
          try {
            return qh(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", X();
          var i = te.current;
          te.current = Za;
          try {
            return Ag(e, t, a);
          } finally {
            te.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", X(), Ph();
        },
        useState: function(e) {
          H = "useState", X();
          var t = te.current;
          te.current = Za;
          try {
            return Vg(e);
          } finally {
            te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", X(), Wh();
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
          return H = "useSyncExternalStore", X(), Bh(e, t);
        },
        useId: function() {
          return H = "useId", X(), Kh();
        },
        unstable_isNewReconciler: q
      }, Z1 = {
        readContext: function(e) {
          return ln(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", X(), Xh(e, t);
        },
        useContext: function(e) {
          return H = "useContext", X(), ln(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", X(), Kd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", X(), Gh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", X(), Qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", X(), Ih(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", X();
          var a = te.current;
          te.current = Jh;
          try {
            return qh(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", X();
          var i = te.current;
          te.current = Jh;
          try {
            return Hg(e, t, a);
          } finally {
            te.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", X(), Ph();
        },
        useState: function(e) {
          H = "useState", X();
          var t = te.current;
          te.current = Jh;
          try {
            return Bg(e);
          } finally {
            te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", X(), Wh();
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
          return H = "useSyncExternalStore", X(), Bh(e, t);
        },
        useId: function() {
          return H = "useId", X(), Kh();
        },
        unstable_isNewReconciler: q
      }, Fi = {
        readContext: function(e) {
          return qg(), ln(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", Me(), tt(), Qg(e, t);
        },
        useContext: function(e) {
          return H = "useContext", Me(), tt(), ln(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", Me(), tt(), $h(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", Me(), tt(), $g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", Me(), tt(), Pg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", Me(), tt(), Yg(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", Me(), tt();
          var a = te.current;
          te.current = Fi;
          try {
            return Ig(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", Me(), tt();
          var i = te.current;
          te.current = Fi;
          try {
            return Ug(e, t, a);
          } finally {
            te.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", Me(), tt(), jg(e);
        },
        useState: function(e) {
          H = "useState", Me(), tt();
          var t = te.current;
          te.current = Fi;
          try {
            return jh(e);
          } finally {
            te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", Me(), tt(), void 0;
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", Me(), tt(), Gg(e);
        },
        useTransition: function() {
          return H = "useTransition", Me(), tt(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", Me(), tt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", Me(), tt(), Fg(e, t, a);
        },
        useId: function() {
          return H = "useId", Me(), tt(), Xg();
        },
        unstable_isNewReconciler: q
      }, Za = {
        readContext: function(e) {
          return qg(), ln(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", Me(), X(), Xh(e, t);
        },
        useContext: function(e) {
          return H = "useContext", Me(), X(), ln(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", Me(), X(), Kd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", Me(), X(), Gh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", Me(), X(), Qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", Me(), X(), Ih(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", Me(), X();
          var a = te.current;
          te.current = Za;
          try {
            return qh(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", Me(), X();
          var i = te.current;
          te.current = Za;
          try {
            return Ag(e, t, a);
          } finally {
            te.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", Me(), X(), Ph();
        },
        useState: function(e) {
          H = "useState", Me(), X();
          var t = te.current;
          te.current = Za;
          try {
            return Vg(e);
          } finally {
            te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", Me(), X(), Wh();
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", Me(), X(), V1(e);
        },
        useTransition: function() {
          return H = "useTransition", Me(), X(), P1();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", Me(), X(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", Me(), X(), Bh(e, t);
        },
        useId: function() {
          return H = "useId", Me(), X(), Kh();
        },
        unstable_isNewReconciler: q
      }, Jh = {
        readContext: function(e) {
          return qg(), ln(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", Me(), X(), Xh(e, t);
        },
        useContext: function(e) {
          return H = "useContext", Me(), X(), ln(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", Me(), X(), Kd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", Me(), X(), Gh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", Me(), X(), Qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", Me(), X(), Ih(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", Me(), X();
          var a = te.current;
          te.current = Za;
          try {
            return qh(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", Me(), X();
          var i = te.current;
          te.current = Za;
          try {
            return Hg(e, t, a);
          } finally {
            te.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", Me(), X(), Ph();
        },
        useState: function(e) {
          H = "useState", Me(), X();
          var t = te.current;
          te.current = Za;
          try {
            return Bg(e);
          } finally {
            te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", Me(), X(), Wh();
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", Me(), X(), B1(e);
        },
        useTransition: function() {
          return H = "useTransition", Me(), X(), Y1();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", Me(), X(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", Me(), X(), Bh(e, t);
        },
        useId: function() {
          return H = "useId", Me(), X(), Kh();
        },
        unstable_isNewReconciler: q
      };
    }
    var Lu = K.unstable_now, J1 = 0, em = -1, Zd = -1, tm = -1, Kg = !1, nm = !1;
    function eC() {
      return Kg;
    }
    function Wx() {
      nm = !0;
    }
    function Xx() {
      Kg = !1, nm = !1;
    }
    function qx() {
      Kg = nm, nm = !1;
    }
    function tC() {
      return J1;
    }
    function nC() {
      J1 = Lu();
    }
    function Zg(e) {
      Zd = Lu(), e.actualStartTime < 0 && (e.actualStartTime = Lu());
    }
    function rC(e) {
      Zd = -1;
    }
    function rm(e, t) {
      if (Zd >= 0) {
        var a = Lu() - Zd;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Zd = -1;
      }
    }
    function Vi(e) {
      if (em >= 0) {
        var t = Lu() - em;
        em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case F:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case he:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Jg(e) {
      if (tm >= 0) {
        var t = Lu() - tm;
        tm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case F:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case he:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Bi() {
      em = Lu();
    }
    function eS() {
      tm = Lu();
    }
    function tS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Go(e, t) {
      return {
        value: e,
        source: t,
        stack: uf(t),
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
    function Kx(e, t) {
      return !0;
    }
    function rS(e, t) {
      try {
        var a = Kx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === G)
            return;
          console.error(i);
        }
        var p = u ? Ne(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === F)
          m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var y = Ne(e) || "Anonymous";
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
      var i = _l(pt, a);
      i.tag = rg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        $D(u), rS(e, t);
      }, i;
    }
    function aS(e, t, a) {
      var i = _l(pt, a);
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
        }), typeof u != "function" && (Jn(e.lanes, we) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ne(e) || "Unknown"));
      }), i;
    }
    function iC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Zx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = QD.bind(null, e, t, a);
        on && vp(e, a), t.then(s, s);
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
      if ((e.mode & Ve) === Re && (a === le || a === $ || a === Be)) {
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
          if (e.flags |= _e, a.flags |= ho, a.flags &= ~(Ds | sr), a.tag === G) {
            var s = a.alternate;
            if (s === null)
              a.tag = ir;
            else {
              var f = _l(pt, we);
              f.tag = kh, bu(a, f, we);
            }
          }
          a.lanes = Ue(a.lanes, we);
        }
        return e;
      }
      return e.flags |= en, e.lanes = u, e;
    }
    function tw(e, t, a, i, u) {
      if (a.flags |= sr, on && vp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        ew(a), Nn() && a.mode & Ve && K0();
        var f = lC(t);
        if (f !== null) {
          f.flags &= ~Ot, uC(f, t, a, e, u), f.mode & Ve && iC(e, s, u), Jx(f, e, s);
          return;
        } else {
          if (!lu(u)) {
            iC(e, s, u), HS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Nn() && a.mode & Ve) {
        K0();
        var v = lC(t);
        if (v !== null) {
          (v.flags & en) === ge && (v.flags |= Ot), uC(v, t, a, e, u), qy(Go(i, a));
          return;
        }
      }
      i = Go(i, a), zD(i);
      var m = t;
      do {
        switch (m.tag) {
          case F: {
            var y = i;
            m.flags |= en;
            var R = Gt(u);
            m.lanes = Ue(m.lanes, R);
            var E = aC(m, y, R);
            lg(m, E);
            return;
          }
          case G:
            var _ = i, O = m.type, L = m.stateNode;
            if ((m.flags & _e) === ge && (typeof O.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && !lE(L))) {
              m.flags |= en;
              var ne = Gt(u);
              m.lanes = Ue(m.lanes, ne);
              var Se = aS(m, _, ne);
              lg(m, Se);
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
    var Jd = x.ReactCurrentOwner, Ja = !1, iS, ep, lS, uS, oS, Wo, sS, am;
    iS = {}, ep = {}, lS = {}, uS = {}, oS = {}, Wo = !1, sS = {}, am = {};
    function hr(e, t, a, i) {
      e === null ? t.child = w1(t, null, a, i) : t.child = zc(t, e.child, a, i);
    }
    function rw(e, t, a, i) {
      t.child = zc(t, e.child, null, i), t.child = zc(t, null, a, i);
    }
    function oC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ga(
          s,
          i,
          // Resolved props
          "prop",
          ft(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      Nc(t, u), xi(t);
      {
        if (Jd.current = t, ea(!0), v = Bc(e, t, f, i, p, u), m = jc(), t.mode & Rt) {
          It(!0);
          try {
            v = Bc(e, t, f, i, p, u), m = jc();
          } finally {
            It(!1);
          }
        }
        ea(!1);
      }
      return al(), e !== null && !Ja ? (O1(e, t, u), Ol(e, t, u)) : (Nn() && m && $y(t), t.flags |= yi, hr(e, t, v, u), t.child);
    }
    function sC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (ok(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Xc(s), t.tag = Be, t.type = f, dS(t, s), cC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Ga(
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
        y && Ga(
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
        if (O = O !== null ? O : me, O(_, i) && e.ref === t.ref)
          return Ol(e, t, u);
      }
      t.flags |= yi;
      var L = Jo(R, i);
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
          m && Ga(
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
        if (me(y, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Ja = !1, t.pendingProps = i = y, gS(e, u))
            (e.flags & ho) !== ge && (Ja = !0);
          else
            return t.lanes = e.lanes, Ol(e, t, u);
      }
      return cS(e, t, a, i, u);
    }
    function fC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ae)
        if ((t.mode & Ve) === Re) {
          var f = {
            baseLanes: z,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, ym(t, a);
        } else if (Jn(a, Zn)) {
          var R = {
            baseLanes: z,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = R;
          var E = s !== null ? s.baseLanes : a;
          ym(t, E);
        } else {
          var p = null, v;
          if (s !== null) {
            var m = s.baseLanes;
            v = Ue(m, a);
          } else
            v = a;
          t.lanes = t.childLanes = Zn;
          var y = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = y, t.updateQueue = null, ym(t, v), null;
        }
      else {
        var _;
        s !== null ? (_ = Ue(s.baseLanes, a), t.memoizedState = null) : _ = a, ym(t, _);
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
        t.flags |= ze;
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
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= In, t.flags |= Af);
    }
    function cS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ga(
          s,
          i,
          // Resolved props
          "prop",
          ft(a)
        );
      }
      var f;
      {
        var p = kc(t, a, !0);
        f = bc(t, p);
      }
      var v, m;
      Nc(t, u), xi(t);
      {
        if (Jd.current = t, ea(!0), v = Bc(e, t, a, i, f, u), m = jc(), t.mode & Rt) {
          It(!0);
          try {
            v = Bc(e, t, a, i, f, u), m = jc();
          } finally {
            It(!1);
          }
        }
        ea(!1);
      }
      return al(), e !== null && !Ja ? (O1(e, t, u), Ol(e, t, u)) : (Nn() && m && $y(t), t.flags |= yi, hr(e, t, v, u), t.child);
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
            t.flags |= _e, t.flags |= en;
            var m = new Error("Simulated error coming from DevTools"), y = Gt(u);
            t.lanes = Ue(t.lanes, y);
            var R = aS(t, Go(m, t), y);
            lg(t, R);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var E = a.propTypes;
          E && Ga(
            E,
            i,
            // Resolved props
            "prop",
            ft(a)
          );
        }
      }
      var _;
      Ui(a) ? (_ = !0, mh(t)) : _ = !1, Nc(t, u);
      var O = t.stateNode, L;
      O === null ? (lm(e, t), C1(t, a, i), gg(t, a, i, u), L = !0) : e === null ? L = Lx(t, a, i, u) : L = Nx(e, t, a, i, u);
      var ne = fS(e, t, a, L, _, u);
      {
        var Se = t.stateNode;
        L && Se.props !== i && (Wo || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ne(t) || "a component"), Wo = !0);
      }
      return ne;
    }
    function fS(e, t, a, i, u, s) {
      dC(e, t);
      var f = (t.flags & _e) !== ge;
      if (!i && !f)
        return u && G0(t, a, !1), Ol(e, t, s);
      var p = t.stateNode;
      Jd.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, rC();
      else {
        xi(t);
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
        al();
      }
      return t.flags |= yi, e !== null && f ? rw(e, t, v, s) : hr(e, t, v, s), t.memoizedState = p.state, u && G0(t, a, !0), t.child;
    }
    function vC(e) {
      var t = e.stateNode;
      t.pendingContext ? Q0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Q0(e, t.context, !1), xg(e, t.containerInfo);
    }
    function uw(e, t, a) {
      if (vC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      d1(e, t), Mh(t, i, null, a);
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
          var y = Go(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return hC(e, t, p, a, y);
        } else if (p !== s) {
          var R = Go(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return hC(e, t, p, a, R);
        } else {
          fx(t);
          var E = w1(t, null, p, a);
          t.child = E;
          for (var _ = E; _; )
            _.flags = _.flags & ~ht | Mr, _ = _.sibling;
        }
      } else {
        if (Mc(), p === s)
          return Ol(e, t, a);
        hr(e, t, p, a);
      }
      return t.child;
    }
    function hC(e, t, a, i, u) {
      return Mc(), qy(u), t.flags |= Ot, hr(e, t, a, i), t.child;
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
      lm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = sk(v), y = qa(v, u), R;
      switch (m) {
        case le:
          return dS(t, v), t.type = v = Xc(v), R = cS(null, t, v, y, i), R;
        case G:
          return t.type = v = PS(v), R = pC(null, t, v, y, i), R;
        case $:
          return t.type = v = YS(v), R = oC(null, t, v, y, i), R;
        case nt: {
          if (t.type !== t.elementType) {
            var E = v.propTypes;
            E && Ga(
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
      lm(e, t), t.tag = G;
      var s;
      return Ui(a) ? (s = !0, mh(t)) : s = !1, Nc(t, u), C1(t, a, i), gg(t, a, i, u), fS(null, t, a, !0, s, u);
    }
    function dw(e, t, a, i) {
      lm(e, t);
      var u = t.pendingProps, s;
      {
        var f = kc(t, a, !1);
        s = bc(t, f);
      }
      Nc(t, i);
      var p, v;
      xi(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var m = ft(a) || "Unknown";
          iS[m] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), iS[m] = !0);
        }
        t.mode & Rt && Xa.recordLegacyContextWarning(t, null), ea(!0), Jd.current = t, p = Bc(null, t, a, u, s, i), v = jc(), ea(!1);
      }
      if (al(), t.flags |= yi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var y = ft(a) || "Unknown";
        ep[y] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", y, y, y), ep[y] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var R = ft(a) || "Unknown";
          ep[R] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), ep[R] = !0);
        }
        t.tag = G, t.memoizedState = null, t.updateQueue = null;
        var E = !1;
        return Ui(a) ? (E = !0, mh(t)) : E = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, ig(t), S1(t, p), gg(t, a, u, i), fS(null, t, a, !0, E, i);
      } else {
        if (t.tag = le, t.mode & Rt) {
          It(!0);
          try {
            p = Bc(null, t, a, u, s, i), v = jc();
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
      retryLane: Ie
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
        baseLanes: Ue(e.baseLanes, t),
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
      return kg(e, Qd);
    }
    function hw(e, t) {
      return uu(e.childLanes, t);
    }
    function mC(e, t, a) {
      var i = t.pendingProps;
      xk(t) && (t.flags |= _e);
      var u = Ka.current, s = !1, f = (t.flags & _e) !== ge;
      if (f || vw(u, e) ? (s = !0, t.flags &= ~_e) : (e === null || e.memoizedState !== null) && (u = Hx(u, _1)), u = Ac(u), Ou(t, u), e === null) {
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
          var L = i.fallback, ne = i.children, Se = gw(e, t, ne, L, a), ve = t.child, We = e.child.memoizedState;
          return ve.memoizedState = We === null ? vS(a) : pw(We, a), ve.childLanes = hw(e, a), t.memoizedState = pS, Se;
        } else {
          var $e = i.children, D = yw(e, t, $e, a);
          return t.memoizedState = null, D;
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
      return (u & Ve) === Re && s !== null ? (p = s, p.childLanes = z, p.pendingProps = f, e.mode & xe && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Fu(a, u, i, null)) : (p = mS(f, u), v = Fu(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function mS(e, t, a) {
      return yE(e, t, z, null);
    }
    function yC(e, t) {
      return Jo(e, t);
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
        m = y, m.childLanes = z, m.pendingProps = v, t.mode & xe && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = yC(f, v), m.subtreeFlags = f.subtreeFlags & un;
      var R;
      return p !== null ? R = Jo(p, i) : (R = Fu(i, s, u, null), R.flags |= ht), R.return = t, m.return = t, m.sibling = R, t.child = m, R;
    }
    function im(e, t, a, i) {
      i !== null && qy(i), zc(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = hS(t, s);
      return f.flags |= ht, t.memoizedState = null, f;
    }
    function Sw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = mS(f, s), v = Fu(i, s, u, null);
      return v.flags |= ht, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Ve) !== Re && zc(t, e.child, null, u), v;
    }
    function Cw(e, t, a) {
      return (e.mode & Ve) === Re ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = we) : zy(t) ? e.lanes = ul : e.lanes = Zn, null;
    }
    function Ew(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Ot) {
          t.flags &= ~Ot;
          var D = nS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return im(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= _e, null;
          var N = i.children, k = i.fallback, Y = Sw(e, t, N, k, f), re = t.child;
          return re.memoizedState = vS(f), t.memoizedState = pS, Y;
        }
      else {
        if (sx(), (t.mode & Ve) === Re)
          return im(
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
          return im(e, t, f, E);
        }
        var _ = Jn(f, e.childLanes);
        if (Ja || _) {
          var O = mm();
          if (O !== null) {
            var L = ty(O, f);
            if (L !== Ie && L !== s.retryLane) {
              s.retryLane = L;
              var ne = pt;
              jr(e, L), yn(O, e, L, ne);
            }
          }
          HS();
          var Se = nS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return im(e, t, f, Se);
        } else if (V0(u)) {
          t.flags |= _e, t.child = e.child;
          var ve = ID.bind(null, e);
          return kR(u, ve), null;
        } else {
          dx(t, u, s.treeContext);
          var We = i.children, $e = hS(t, We);
          return $e.flags |= Mr, $e;
        }
      }
    }
    function gC(e, t, a) {
      e.lanes = Ue(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ue(i.lanes, t)), tg(e.return, t, a);
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
        i !== null && Fh(i) === null && (a = t), t = t.sibling;
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
      e !== void 0 && !am[e] && (e !== "collapsed" && e !== "hidden" ? (am[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (am[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function SC(e, t) {
      {
        var a = Zt(e), i = !a && typeof Oa(e) == "function";
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
          var i = Oa(e);
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
      var p = Ka.current, v = kg(p, Qd);
      if (v)
        p = bg(p, Qd), t.flags |= _e;
      else {
        var m = e !== null && (e.flags & _e) !== ge;
        m && Tw(t, t.child, a), p = Ac(p);
      }
      if (Ou(t, p), (t.mode & Ve) === Re)
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
              if (O !== null && Fh(O) === null) {
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
      return e === null ? t.child = zc(t, null, i, a) : hr(e, t, i, a), t.child;
    }
    var EC = !1;
    function bw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || EC || (EC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ga(v, s, "prop", "Context.Provider");
      }
      if (o1(t, u, p), f !== null) {
        var m = f.value;
        if (se(m, p)) {
          if (f.children === s.children && !vh())
            return Ol(e, t, a);
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
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Nc(t, a);
      var f = ln(i);
      xi(t);
      var p;
      return Jd.current = t, ea(!0), p = s(f), ea(!1), al(), t.flags |= yi, hr(e, t, p, a), t.child;
    }
    function tp() {
      Ja = !0;
    }
    function lm(e, t) {
      (t.mode & Ve) === Re && e !== null && (e.alternate = null, t.alternate = null, t.flags |= ht);
    }
    function Ol(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), rC(), pp(t.lanes), Jn(a, t.childLanes) ? (zx(e, t), t.child) : null;
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
          vC(t), t.stateNode, Mc();
          break;
        case I:
          k1(t);
          break;
        case G: {
          var i = t.type;
          Ui(i) && mh(t);
          break;
        }
        case U:
          xg(t, t.stateNode.containerInfo);
          break;
        case V: {
          var u = t.memoizedProps.value, s = t.type._context;
          o1(t, s, u);
          break;
        }
        case he:
          {
            var f = Jn(a, t.childLanes);
            f && (t.flags |= ze);
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
              return Ou(t, Ac(Ka.current)), t.flags |= _e, null;
            var m = t.child, y = m.childLanes;
            if (Jn(a, y))
              return mC(e, t, a);
            Ou(t, Ac(Ka.current));
            var R = Ol(e, t, a);
            return R !== null ? R.sibling : null;
          } else
            Ou(t, Ac(Ka.current));
          break;
        }
        case vt: {
          var E = (e.flags & _e) !== ge, _ = Jn(a, t.childLanes);
          if (E) {
            if (_)
              return CC(e, t, a);
            t.flags |= _e;
          }
          var O = t.memoizedState;
          if (O !== null && (O.rendering = null, O.tail = null, O.lastEffect = null), Ou(t, Ka.current), _)
            break;
          return null;
        }
        case Qe:
        case it:
          return t.lanes = z, fC(e, t, a);
      }
      return Ol(e, t, a);
    }
    function RC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Ow(e, t, WS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || vh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Ja = !0;
        else {
          var s = gS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & _e) === ge)
            return Ja = !1, Mw(e, t, a);
          (e.flags & ho) !== ge ? Ja = !0 : Ja = !1;
        }
      } else if (Ja = !1, Nn() && rx(t)) {
        var f = t.index, p = ax();
        q0(t, p, f);
      }
      switch (t.lanes = z, t.tag) {
        case be:
          return dw(e, t, t.type, a);
        case bn: {
          var v = t.elementType;
          return cw(e, t, v, a);
        }
        case le: {
          var m = t.type, y = t.pendingProps, R = t.elementType === m ? y : qa(m, y);
          return cS(e, t, m, R, a);
        }
        case G: {
          var E = t.type, _ = t.pendingProps, O = t.elementType === E ? _ : qa(E, _);
          return pC(e, t, E, O, a);
        }
        case F:
          return uw(e, t, a);
        case I:
          return ow(e, t, a);
        case fe:
          return sw(e, t);
        case Ee:
          return mC(e, t, a);
        case U:
          return kw(e, t, a);
        case $: {
          var L = t.type, ne = t.pendingProps, Se = t.elementType === L ? ne : qa(L, ne);
          return oC(e, t, L, Se, a);
        }
        case Ae:
          return aw(e, t, a);
        case He:
          return iw(e, t, a);
        case he:
          return lw(e, t, a);
        case V:
          return bw(e, t, a);
        case ue:
          return _w(e, t, a);
        case nt: {
          var ve = t.type, We = t.pendingProps, $e = qa(ve, We);
          if (t.type !== t.elementType) {
            var D = ve.propTypes;
            D && Ga(
              D,
              $e,
              // Resolved for outer only
              "prop",
              ft(ve)
            );
          }
          return $e = qa(ve.type, $e), sC(e, t, ve, $e, a);
        }
        case Be:
          return cC(e, t, t.type, t.pendingProps, a);
        case ir: {
          var N = t.type, k = t.pendingProps, Y = t.elementType === N ? k : qa(N, k);
          return fw(e, t, N, Y, a);
        }
        case vt:
          return CC(e, t, a);
        case jn:
          break;
        case Qe:
          return fC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Pc(e) {
      e.flags |= ze;
    }
    function xC(e) {
      e.flags |= In, e.flags |= Af;
    }
    var wC, SS, DC, kC;
    wC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === I || u.tag === fe)
          eR(e, u.stateNode);
        else if (u.tag !== U) {
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
        t.updateQueue = v, v && Pc(t);
      }
    }, kC = function(e, t, a, i) {
      a !== i && Pc(t);
    };
    function np(e, t) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = z, i = ge;
      if (t) {
        if ((e.mode & xe) !== Re) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = Ue(a, Ue(m.lanes, m.childLanes)), i |= m.subtreeFlags & un, i |= m.flags & un, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var y = e.child; y !== null; )
            a = Ue(a, Ue(y.lanes, y.childLanes)), i |= y.subtreeFlags & un, i |= y.flags & un, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & xe) !== Re) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ue(a, Ue(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ue(a, Ue(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Lw(e, t, a) {
      if (yx() && (t.mode & Ve) !== Re && (t.flags & _e) === ge)
        return r1(t), Mc(), t.flags |= Ot | sr | en, !1;
      var i = Eh(t);
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
          if (Mc(), (t.flags & _e) === ge && (t.memoizedState = null), t.flags |= ze, Un(t), (t.mode & xe) !== Re) {
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
        case Be:
        case le:
        case $:
        case Ae:
        case He:
        case he:
        case ue:
        case nt:
          return Un(t), null;
        case G: {
          var u = t.type;
          return Ui(u) && hh(t), Un(t), null;
        }
        case F: {
          var s = t.stateNode;
          if (Uc(t), jy(t), Og(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Eh(t);
            if (f)
              Pc(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Ot) !== ge) && (t.flags |= Or, a1());
            }
          }
          return SS(e, t), Un(t), null;
        }
        case I: {
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
            var y = wg(), R = Eh(t);
            if (R)
              px(t, v, y) && Pc(t);
            else {
              var E = JT(m, i, v, y, t);
              wC(E, t, !1, !1), t.stateNode = E, tR(E, m, i, v) && Pc(t);
            }
            t.ref !== null && xC(t);
          }
          return Un(t), null;
        }
        case fe: {
          var _ = i;
          if (e && t.stateNode != null) {
            var O = e.memoizedProps;
            kC(e, t, O, _);
          } else {
            if (typeof _ != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var L = D1(), ne = wg(), Se = Eh(t);
            Se ? vx(t) && Pc(t) : t.stateNode = rR(_, L, ne, t);
          }
          return Un(t), null;
        }
        case Ee: {
          Hc(t);
          var ve = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var We = Lw(e, t, ve);
            if (!We)
              return t.flags & en ? t : null;
          }
          if ((t.flags & _e) !== ge)
            return t.lanes = a, (t.mode & xe) !== Re && tS(t), t;
          var $e = ve !== null, D = e !== null && e.memoizedState !== null;
          if ($e !== D && $e) {
            var N = t.child;
            if (N.flags |= gi, (t.mode & Ve) !== Re) {
              var k = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !rt);
              k || kg(Ka.current, _1) ? ND() : HS();
            }
          }
          var Y = t.updateQueue;
          if (Y !== null && (t.flags |= ze), Un(t), (t.mode & xe) !== Re && $e) {
            var re = t.child;
            re !== null && (t.treeBaseDuration -= re.treeBaseDuration);
          }
          return null;
        }
        case U:
          return Uc(t), SS(e, t), e === null && qR(t.stateNode.containerInfo), Un(t), null;
        case V:
          var J = t.type._context;
          return eg(J, t), Un(t), null;
        case ir: {
          var ke = t.type;
          return Ui(ke) && hh(t), Un(t), null;
        }
        case vt: {
          Hc(t);
          var Le = t.memoizedState;
          if (Le === null)
            return Un(t), null;
          var st = (t.flags & _e) !== ge, qe = Le.rendering;
          if (qe === null)
            if (st)
              np(Le, !1);
            else {
              var Kt = UD() && (e === null || (e.flags & _e) === ge);
              if (!Kt)
                for (var Ke = t.child; Ke !== null; ) {
                  var Yt = Fh(Ke);
                  if (Yt !== null) {
                    st = !0, t.flags |= _e, np(Le, !1);
                    var rr = Yt.updateQueue;
                    return rr !== null && (t.updateQueue = rr, t.flags |= ze), t.subtreeFlags = ge, Ux(t, a), Ou(t, bg(Ka.current, Qd)), t.child;
                  }
                  Ke = Ke.sibling;
                }
              Le.tail !== null && Tt() > XC() && (t.flags |= _e, st = !0, np(Le, !1), t.lanes = Xf);
            }
          else {
            if (!st) {
              var Bn = Fh(qe);
              if (Bn !== null) {
                t.flags |= _e, st = !0;
                var oa = Bn.updateQueue;
                if (oa !== null && (t.updateQueue = oa, t.flags |= ze), np(Le, !0), Le.tail === null && Le.tailMode === "hidden" && !qe.alternate && !Nn())
                  return Un(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Tt() * 2 - Le.renderingStartTime > XC() && a !== Zn && (t.flags |= _e, st = !0, np(Le, !1), t.lanes = Xf);
            }
            if (Le.isBackwards)
              qe.sibling = t.child, t.child = qe;
            else {
              var gr = Le.last;
              gr !== null ? gr.sibling = qe : t.child = qe, Le.last = qe;
            }
          }
          if (Le.tail !== null) {
            var Sr = Le.tail;
            Le.rendering = Sr, Le.tail = Sr.sibling, Le.renderingStartTime = Tt(), Sr.sibling = null;
            var ar = Ka.current;
            return st ? ar = bg(ar, Qd) : ar = Ac(ar), Ou(t, ar), Sr;
          }
          return Un(t), null;
        }
        case jn:
          break;
        case Qe:
        case it: {
          AS(t);
          var Ul = t.memoizedState, qc = Ul !== null;
          if (e !== null) {
            var gp = e.memoizedState, Yi = gp !== null;
            Yi !== qc && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ae && (t.flags |= gi);
          }
          return !qc || (t.mode & Ve) === Re ? Un(t) : Jn(Pi, Zn) && (Un(t), t.subtreeFlags & (ht | ze) && (t.flags |= gi)), null;
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
          Ui(i) && hh(t);
          var u = t.flags;
          return u & en ? (t.flags = u & ~en | _e, (t.mode & xe) !== Re && tS(t), t) : null;
        }
        case F: {
          t.stateNode, Uc(t), jy(t), Og();
          var s = t.flags;
          return (s & en) !== ge && (s & _e) === ge ? (t.flags = s & ~en | _e, t) : null;
        }
        case I:
          return Dg(t), null;
        case Ee: {
          Hc(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Mc();
          }
          var p = t.flags;
          return p & en ? (t.flags = p & ~en | _e, (t.mode & xe) !== Re && tS(t), t) : null;
        }
        case vt:
          return Hc(t), null;
        case U:
          return Uc(t), null;
        case V:
          var v = t.type._context;
          return eg(v, t), null;
        case Qe:
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
          i != null && hh(t);
          break;
        }
        case F: {
          t.stateNode, Uc(t), jy(t), Og();
          break;
        }
        case I: {
          Dg(t);
          break;
        }
        case U:
          Uc(t);
          break;
        case Ee:
          Hc(t);
          break;
        case vt:
          Hc(t);
          break;
        case V:
          var u = t.type._context;
          eg(u, t);
          break;
        case Qe:
        case it:
          AS(t);
          break;
      }
    }
    var OC = null;
    OC = /* @__PURE__ */ new Set();
    var um = !1, An = !1, zw = typeof WeakSet == "function" ? WeakSet : Set, ce = null, Yc = null, $c = null;
    function Uw(e) {
      nl(null, function() {
        throw e;
      }), zf();
    }
    var Aw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & xe)
        try {
          Bi(), t.componentWillUnmount();
        } finally {
          Vi(e);
        }
      else
        t.componentWillUnmount();
    };
    function MC(e, t) {
      try {
        Nu(fn, e);
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
    function Qc(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (_n && ii && e.mode & xe)
              try {
                Bi(), i = a(null);
              } finally {
                Vi(e);
              }
            else
              i = a(null);
          } catch (u) {
            St(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ne(e));
        } else
          a.current = null;
    }
    function om(e, t, a) {
      try {
        a();
      } catch (i) {
        St(e, t, i);
      }
    }
    var NC = !1;
    function Fw(e, t) {
      KT(e.containerInfo), ce = t, Vw();
      var a = NC;
      return NC = !1, a;
    }
    function Vw() {
      for (; ce !== null; ) {
        var e = ce, t = e.child;
        (e.subtreeFlags & Jl) !== ge && t !== null ? (t.return = e, ce = t) : Bw();
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
      if ((a & Or) !== ge) {
        switch (ut(e), e.tag) {
          case le:
          case $:
          case Be:
            break;
          case G: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Wo && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ne(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ne(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : qa(e.type, i), u);
              {
                var p = OC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ne(e)));
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
          case I:
          case fe:
          case U:
          case ir:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Qt();
      }
    }
    function ei(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & zn) !== Pr ? zs(t) : (e & fn) !== Pr && Us(t), (e & Ai) !== Pr && hp(!0), om(t, a, p), (e & Ai) !== Pr && hp(!1), (e & zn) !== Pr ? Cv() : (e & fn) !== Pr && eu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Nu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & zn) !== Pr ? Sv(t) : (e & fn) !== Pr && Ev(t);
            var f = s.create;
            (e & Ai) !== Pr && hp(!0), s.destroy = f(), (e & Ai) !== Pr && hp(!1), (e & zn) !== Pr ? If() : (e & fn) !== Pr && Tv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & fn) !== ge ? v = "useLayoutEffect" : (s.tag & Ai) !== ge ? v = "useInsertionEffect" : v = "useEffect";
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
      if ((t.flags & ze) !== ge)
        switch (t.tag) {
          case he: {
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
                  case he:
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
      if ((a.flags & En) !== ge)
        switch (a.tag) {
          case le:
          case $:
          case Be: {
            if (!An)
              if (a.mode & xe)
                try {
                  Bi(), Nu(fn | cn, a);
                } finally {
                  Vi(a);
                }
              else
                Nu(fn | cn, a);
            break;
          }
          case G: {
            var u = a.stateNode;
            if (a.flags & ze && !An)
              if (t === null)
                if (a.type === a.elementType && !Wo && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ne(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ne(a) || "instance")), a.mode & xe)
                  try {
                    Bi(), u.componentDidMount();
                  } finally {
                    Vi(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : qa(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Wo && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ne(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ne(a) || "instance")), a.mode & xe)
                  try {
                    Bi(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Vi(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Wo && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ne(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ne(a) || "instance")), v1(a, p, u));
            break;
          }
          case F: {
            var v = a.updateQueue;
            if (v !== null) {
              var m = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case I:
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
          case I: {
            var y = a.stateNode;
            if (t === null && a.flags & ze) {
              var R = a.type, E = a.memoizedProps;
              oR(y, R, E);
            }
            break;
          }
          case fe:
            break;
          case U:
            break;
          case he: {
            {
              var _ = a.memoizedProps, O = _.onCommit, L = _.onRender, ne = a.stateNode.effectDuration, Se = tC(), ve = t === null ? "mount" : "update";
              eC() && (ve = "nested-update"), typeof L == "function" && L(a.memoizedProps.id, ve, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Se);
              {
                typeof O == "function" && O(a.memoizedProps.id, ve, ne, Se), BD(a);
                var We = a.return;
                e:
                  for (; We !== null; ) {
                    switch (We.tag) {
                      case F:
                        var $e = We.stateNode;
                        $e.effectDuration += ne;
                        break e;
                      case he:
                        var D = We.stateNode;
                        D.effectDuration += ne;
                        break e;
                    }
                    We = We.return;
                  }
              }
            }
            break;
          }
          case Ee: {
            Kw(e, a);
            break;
          }
          case vt:
          case ir:
          case jn:
          case Qe:
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
        case le:
        case $:
        case Be: {
          if (e.mode & xe)
            try {
              Bi(), MC(e, e.return);
            } finally {
              Vi(e);
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
        case I: {
          LC(e, e.return);
          break;
        }
      }
    }
    function Qw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === I) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? gR(u) : CR(i.stateNode, i.memoizedProps);
            } catch (f) {
              St(e, e.return, f);
            }
          }
        } else if (i.tag === fe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? SR(s) : ER(s, i.memoizedProps);
            } catch (f) {
              St(e, e.return, f);
            }
        } else if (!((i.tag === Qe || i.tag === it) && i.memoizedState !== null && i !== e)) {
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
          case I:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & xe)
            try {
              Bi(), u = t(i);
            } finally {
              Vi(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ne(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ne(e)), t.current = i;
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
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === I) {
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
      return e.tag === I || e.tag === F || e.tag === U;
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
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== I && t.tag !== fe && t.tag !== Ht; ) {
            if (t.flags & ht || t.child === null || t.tag === U)
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
        case I: {
          var a = t.stateNode;
          t.flags & et && (F0(a), t.flags &= ~et);
          var i = HC(e);
          TS(e, i, a);
          break;
        }
        case F:
        case U: {
          var u = t.stateNode.containerInfo, s = HC(e);
          ES(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function ES(e, t, a) {
      var i = e.tag, u = i === I || i === fe;
      if (u) {
        var s = e.stateNode;
        t ? vR(a, s, t) : dR(a, s);
      } else if (i !== U) {
        var f = e.child;
        if (f !== null) {
          ES(f, t, a);
          for (var p = f.sibling; p !== null; )
            ES(p, t, a), p = p.sibling;
        }
      }
    }
    function TS(e, t, a) {
      var i = e.tag, u = i === I || i === fe;
      if (u) {
        var s = e.stateNode;
        t ? pR(a, s, t) : fR(a, s);
      } else if (i !== U) {
        var f = e.child;
        if (f !== null) {
          TS(f, t, a);
          for (var p = f.sibling; p !== null; )
            TS(p, t, a), p = p.sibling;
        }
      }
    }
    var Hn = null, ti = !1;
    function Xw(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case I: {
                Hn = i.stateNode, ti = !1;
                break e;
              }
              case F: {
                Hn = i.stateNode.containerInfo, ti = !0;
                break e;
              }
              case U: {
                Hn = i.stateNode.containerInfo, ti = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Hn === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        FC(e, t, a), Hn = null, ti = !1;
      }
      Iw(a);
    }
    function zu(e, t, a) {
      for (var i = a.child; i !== null; )
        FC(e, t, i), i = i.sibling;
    }
    function FC(e, t, a) {
      switch ($f(a), a.tag) {
        case I:
          An || Qc(a, t);
        case fe: {
          {
            var i = Hn, u = ti;
            Hn = null, zu(e, t, a), Hn = i, ti = u, Hn !== null && (ti ? mR(Hn, a.stateNode) : hR(Hn, a.stateNode));
          }
          return;
        }
        case Ht: {
          Hn !== null && (ti ? yR(Hn, a.stateNode) : Ny(Hn, a.stateNode));
          return;
        }
        case U: {
          {
            var s = Hn, f = ti;
            Hn = a.stateNode.containerInfo, ti = !0, zu(e, t, a), Hn = s, ti = f;
          }
          return;
        }
        case le:
        case $:
        case nt:
        case Be: {
          if (!An) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, y = m;
                do {
                  var R = y, E = R.destroy, _ = R.tag;
                  E !== void 0 && ((_ & Ai) !== Pr ? om(a, t, E) : (_ & fn) !== Pr && (Us(a), a.mode & xe ? (Bi(), om(a, t, E), Vi(a)) : om(a, t, E), eu())), y = y.next;
                } while (y !== m);
              }
            }
          }
          zu(e, t, a);
          return;
        }
        case G: {
          if (!An) {
            Qc(a, t);
            var O = a.stateNode;
            typeof O.componentWillUnmount == "function" && CS(a, t, O);
          }
          zu(e, t, a);
          return;
        }
        case jn: {
          zu(e, t, a);
          return;
        }
        case Qe: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ve
          ) {
            var L = An;
            An = L || a.memoizedState !== null, zu(e, t, a), An = L;
          } else
            zu(e, t, a);
          break;
        }
        default: {
          zu(e, t, a);
          return;
        }
      }
    }
    function qw(e) {
      e.memoizedState;
    }
    function Kw(e, t) {
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
              if (Yc !== null && $c !== null)
                vp($c, Yc);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Zw(e, t, a) {
      Yc = a, $c = e, ut(t), BC(t, e), ut(t), Yc = null, $c = null;
    }
    function ni(e, t, a) {
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
        case le:
        case $:
        case nt:
        case Be: {
          if (ni(t, e), ji(e), u & ze) {
            try {
              ei(Ai | cn, e, e.return), Nu(Ai | cn, e);
            } catch (ke) {
              St(e, e.return, ke);
            }
            if (e.mode & xe) {
              try {
                Bi(), ei(fn | cn, e, e.return);
              } catch (ke) {
                St(e, e.return, ke);
              }
              Vi(e);
            } else
              try {
                ei(fn | cn, e, e.return);
              } catch (ke) {
                St(e, e.return, ke);
              }
          }
          return;
        }
        case G: {
          ni(t, e), ji(e), u & In && i !== null && Qc(i, i.return);
          return;
        }
        case I: {
          ni(t, e), ji(e), u & In && i !== null && Qc(i, i.return);
          {
            if (e.flags & et) {
              var s = e.stateNode;
              try {
                F0(s);
              } catch (ke) {
                St(e, e.return, ke);
              }
            }
            if (u & ze) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, y = e.updateQueue;
                if (e.updateQueue = null, y !== null)
                  try {
                    sR(f, y, m, v, p, e);
                  } catch (ke) {
                    St(e, e.return, ke);
                  }
              }
            }
          }
          return;
        }
        case fe: {
          if (ni(t, e), ji(e), u & ze) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var R = e.stateNode, E = e.memoizedProps, _ = i !== null ? i.memoizedProps : E;
            try {
              cR(R, _, E);
            } catch (ke) {
              St(e, e.return, ke);
            }
          }
          return;
        }
        case F: {
          if (ni(t, e), ji(e), u & ze && i !== null) {
            var O = i.memoizedState;
            if (O.isDehydrated)
              try {
                UR(t.containerInfo);
              } catch (ke) {
                St(e, e.return, ke);
              }
          }
          return;
        }
        case U: {
          ni(t, e), ji(e);
          return;
        }
        case Ee: {
          ni(t, e), ji(e);
          var L = e.child;
          if (L.flags & gi) {
            var ne = L.stateNode, Se = L.memoizedState, ve = Se !== null;
            if (ne.isHidden = ve, ve) {
              var We = L.alternate !== null && L.alternate.memoizedState !== null;
              We || LD();
            }
          }
          if (u & ze) {
            try {
              qw(e);
            } catch (ke) {
              St(e, e.return, ke);
            }
            VC(e);
          }
          return;
        }
        case Qe: {
          var $e = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ve
          ) {
            var D = An;
            An = D || $e, ni(t, e), An = D;
          } else
            ni(t, e);
          if (ji(e), u & gi) {
            var N = e.stateNode, k = e.memoizedState, Y = k !== null, re = e;
            if (N.isHidden = Y, Y && !$e && (re.mode & Ve) !== Re) {
              ce = re;
              for (var J = re.child; J !== null; )
                ce = J, eD(J), J = J.sibling;
            }
            Qw(re, Y);
          }
          return;
        }
        case vt: {
          ni(t, e), ji(e), u & ze && VC(e);
          return;
        }
        case jn:
          return;
        default: {
          ni(t, e), ji(e);
          return;
        }
      }
    }
    function ji(e) {
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
      Yc = a, $c = t, ce = e, jC(e, t, a), Yc = null, $c = null;
    }
    function jC(e, t, a) {
      for (var i = (e.mode & Ve) !== Re; ce !== null; ) {
        var u = ce, s = u.child;
        if (u.tag === Qe && i) {
          var f = u.memoizedState !== null, p = f || um;
          if (p) {
            RS(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, y = m || An, R = um, E = An;
            um = p, An = y, An && !E && (ce = u, tD(u));
            for (var _ = s; _ !== null; )
              ce = _, jC(
                _,
                // New root; bubble back up to here and stop.
                t,
                a
              ), _ = _.sibling;
            ce = u, um = R, An = E, RS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & En) !== ge && s !== null ? (s.return = u, ce = s) : RS(e, t, a);
      }
    }
    function RS(e, t, a) {
      for (; ce !== null; ) {
        var i = ce;
        if ((i.flags & En) !== ge) {
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
          case le:
          case $:
          case nt:
          case Be: {
            if (t.mode & xe)
              try {
                Bi(), ei(fn, t, t.return);
              } finally {
                Vi(t);
              }
            else
              ei(fn, t, t.return);
            break;
          }
          case G: {
            Qc(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && CS(t, t.return, i);
            break;
          }
          case I: {
            Qc(t, t.return);
            break;
          }
          case Qe: {
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
        if (t.tag === Qe) {
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
        (u.subtreeFlags & Lr) !== ge && s !== null ? (s.return = u, ce = s) : aD(e, t, a, i);
      }
    }
    function aD(e, t, a, i) {
      for (; ce !== null; ) {
        var u = ce;
        if ((u.flags & Ct) !== ge) {
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
        case le:
        case $:
        case Be: {
          if (t.mode & xe) {
            eS();
            try {
              Nu(zn | cn, t);
            } finally {
              Jg(t);
            }
          } else
            Nu(zn | cn, t);
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
        if ((ce.flags & Je) !== ge) {
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
        (e.subtreeFlags & Lr) !== ge && t !== null ? (t.return = e, ce = t) : oD();
      }
    }
    function oD() {
      for (; ce !== null; ) {
        var e = ce;
        (e.flags & Ct) !== ge && (ut(e), sD(e), Qt());
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
        case le:
        case $:
        case Be: {
          e.mode & xe ? (eS(), ei(zn | cn, e, e.return), Jg(e)) : ei(zn | cn, e, e.return);
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
        case le:
        case $:
        case Be: {
          e.mode & xe ? (eS(), ei(zn, e, t), Jg(e)) : ei(zn, e, t);
          break;
        }
      }
    }
    function pD(e) {
      switch (e.tag) {
        case le:
        case $:
        case Be: {
          try {
            Nu(fn | cn, e);
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
        case le:
        case $:
        case Be: {
          try {
            Nu(zn | cn, e);
          } catch (t) {
            St(e, e.return, t);
          }
          break;
        }
      }
    }
    function hD(e) {
      switch (e.tag) {
        case le:
        case $:
        case Be: {
          try {
            ei(fn | cn, e, e.return);
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
        case le:
        case $:
        case Be:
          try {
            ei(zn | cn, e, e.return);
          } catch (t) {
            St(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var rp = Symbol.for;
      rp("selector.component"), rp("selector.has_pseudo_class"), rp("selector.role"), rp("selector.test_id"), rp("selector.text");
    }
    var yD = [];
    function gD() {
      yD.forEach(function(e) {
        return e();
      });
    }
    var SD = x.ReactCurrentActQueue;
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
    var ED = Math.ceil, xS = x.ReactCurrentDispatcher, wS = x.ReactCurrentOwner, Fn = x.ReactCurrentBatchConfig, ri = x.ReactCurrentActQueue, vn = (
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
    ), Ml = 0, ap = 1, Xo = 2, sm = 3, ip = 4, IC = 5, DS = 6, Ge = vn, mr = null, At = null, hn = z, Pi = z, kS = xu(z), mn = Ml, lp = null, cm = z, up = z, fm = z, op = null, Yr = null, bS = 0, GC = 500, WC = 1 / 0, TD = 500, Ll = null;
    function sp() {
      WC = Tt() + TD;
    }
    function XC() {
      return WC;
    }
    var dm = !1, _S = null, Ic = null, qo = !1, Uu = null, cp = z, OS = [], MS = null, RD = 50, fp = 0, LS = null, NS = !1, pm = !1, xD = 50, Gc = 0, vm = null, dp = pt, hm = z, qC = !1;
    function mm() {
      return mr;
    }
    function yr() {
      return (Ge & (Vn | wa)) !== vn ? Tt() : (dp !== pt || (dp = Tt()), dp);
    }
    function Au(e) {
      var t = e.mode;
      if ((t & Ve) === Re)
        return we;
      if ((Ge & Vn) !== vn && hn !== z)
        return Gt(hn);
      var a = Cx() !== Sx;
      if (a) {
        if (Fn.transition !== null) {
          var i = Fn.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return hm === Ie && (hm = Zf()), hm;
      }
      var u = Ar();
      if (u !== Ie)
        return u;
      var s = aR();
      return s;
    }
    function wD(e) {
      var t = e.mode;
      return (t & Ve) === Re ? we : ey();
    }
    function yn(e, t, a, i) {
      XD(), qC && g("useInsertionEffect must not schedule updates."), NS && (pm = !0), vl(e, a, i), (Ge & Vn) !== z && e === mr ? ZD(t) : (on && rd(e, t, a), JD(t), e === mr && ((Ge & Vn) === vn && (up = Ue(up, a)), mn === ip && Hu(e, hn)), $r(e, i), a === we && Ge === vn && (t.mode & Ve) === Re && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ri.isBatchingLegacy && (sp(), X0()));
    }
    function DD(e, t, a) {
      var i = e.current;
      i.lanes = t, vl(e, t, a), $r(e, a);
    }
    function kD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ge & Vn) !== vn
      );
    }
    function $r(e, t) {
      var a = e.callbackNode;
      Km(e, t);
      var i = Eo(e, e === mr ? hn : z);
      if (i === z) {
        a !== null && dE(a), e.callbackNode = null, e.callbackPriority = Ie;
        return;
      }
      var u = jt(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ri.current !== null && a !== BS)) {
        a == null && s !== we && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && dE(a);
      var f;
      if (u === we)
        e.tag === wu ? (ri.isBatchingLegacy !== null && (ri.didScheduleLegacyUpdate = !0), nx(JC.bind(null, e))) : W0(JC.bind(null, e)), ri.current !== null ? ri.current.push(Du) : lR(function() {
          (Ge & (Vn | wa)) === vn && Du();
        }), f = null;
      else {
        var p;
        switch (Do(i)) {
          case Tn:
            p = Ms;
            break;
          case sn:
            p = dr;
            break;
          case Pa:
            p = ha;
            break;
          case xo:
            p = Ci;
            break;
          default:
            p = ha;
            break;
        }
        f = jS(p, KC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function KC(e, t) {
      if (Xx(), dp = pt, hm = z, (Ge & (Vn | wa)) !== vn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = zl();
      if (i && e.callbackNode !== a)
        return null;
      var u = Eo(e, e === mr ? hn : z);
      if (u === z)
        return null;
      var s = !Ro(e, u) && !bv(e, u) && !t, f = s ? HD(e, u) : gm(e, u);
      if (f !== Ml) {
        if (f === Xo) {
          var p = qf(e);
          p !== z && (u = p, f = zS(e, p));
        }
        if (f === ap) {
          var v = lp;
          throw Ko(e, z), Hu(e, u), $r(e, Tt()), v;
        }
        if (f === DS)
          Hu(e, u);
        else {
          var m = !Ro(e, u), y = e.current.alternate;
          if (m && !_D(y)) {
            if (f = gm(e, u), f === Xo) {
              var R = qf(e);
              R !== z && (u = R, f = zS(e, R));
            }
            if (f === ap) {
              var E = lp;
              throw Ko(e, z), Hu(e, u), $r(e, Tt()), E;
            }
          }
          e.finishedWork = y, e.finishedLanes = u, bD(e, f, u);
        }
      }
      return $r(e, Tt()), e.callbackNode === a ? KC.bind(null, e) : null;
    }
    function zS(e, t) {
      var a = op;
      if (Xt(e)) {
        var i = Ko(e, t);
        i.flags |= Ot, XR(e.containerInfo);
      }
      var u = gm(e, t);
      if (u !== Xo) {
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
        case Ml:
        case ap:
          throw new Error("Root did not complete. This is a bug in React.");
        case Xo: {
          Zo(e, Yr, Ll);
          break;
        }
        case sm: {
          if (Hu(e, a), tc(a) && // do not delay if we're inside an act() scope
          !pE()) {
            var i = bS + GC - Tt();
            if (i > 10) {
              var u = Eo(e, z);
              if (u !== z)
                break;
              var s = e.suspendedLanes;
              if (!pl(s, a)) {
                yr(), td(e, s);
                break;
              }
              e.timeoutHandle = My(Zo.bind(null, e, Yr, Ll), i);
              break;
            }
          }
          Zo(e, Yr, Ll);
          break;
        }
        case ip: {
          if (Hu(e, a), kv(a))
            break;
          if (!pE()) {
            var f = Dv(e, a), p = f, v = Tt() - p, m = WD(v) - v;
            if (m > 10) {
              e.timeoutHandle = My(Zo.bind(null, e, Yr, Ll), m);
              break;
            }
          }
          Zo(e, Yr, Ll);
          break;
        }
        case IC: {
          Zo(e, Yr, Ll);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function _D(e) {
      for (var t = e; ; ) {
        if (t.flags & vo) {
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
        if (t.subtreeFlags & vo && v !== null) {
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
    function Hu(e, t) {
      t = uu(t, fm), t = uu(t, up), ed(e, t);
    }
    function JC(e) {
      if (qx(), (Ge & (Vn | wa)) !== vn)
        throw new Error("Should not already be working.");
      zl();
      var t = Eo(e, z);
      if (!Jn(t, we))
        return $r(e, Tt()), null;
      var a = gm(e, t);
      if (e.tag !== wu && a === Xo) {
        var i = qf(e);
        i !== z && (t = i, a = zS(e, i));
      }
      if (a === ap) {
        var u = lp;
        throw Ko(e, z), Hu(e, t), $r(e, Tt()), u;
      }
      if (a === DS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Zo(e, Yr, Ll), $r(e, Tt()), null;
    }
    function OD(e, t) {
      t !== z && (ou(e, Ue(t, we)), $r(e, Tt()), (Ge & (Vn | wa)) === vn && (sp(), Du()));
    }
    function US(e, t) {
      var a = Ge;
      Ge |= QC;
      try {
        return e(t);
      } finally {
        Ge = a, Ge === vn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ri.isBatchingLegacy && (sp(), X0());
      }
    }
    function MD(e, t, a, i, u) {
      var s = Ar(), f = Fn.transition;
      try {
        return Fn.transition = null, Wt(Tn), e(t, a, i, u);
      } finally {
        Wt(s), Fn.transition = f, Ge === vn && sp();
      }
    }
    function Nl(e) {
      Uu !== null && Uu.tag === wu && (Ge & (Vn | wa)) === vn && zl();
      var t = Ge;
      Ge |= QC;
      var a = Fn.transition, i = Ar();
      try {
        return Fn.transition = null, Wt(Tn), e ? e() : void 0;
      } finally {
        Wt(i), Fn.transition = a, Ge = t, (Ge & (Vn | wa)) === vn && Du();
      }
    }
    function eE() {
      return (Ge & (Vn | wa)) !== vn;
    }
    function ym(e, t) {
      tr(kS, Pi, e), Pi = Ue(Pi, t);
    }
    function AS(e) {
      Pi = kS.current, er(kS, e);
    }
    function Ko(e, t) {
      e.finishedWork = null, e.finishedLanes = z;
      var a = e.timeoutHandle;
      if (a !== Ly && (e.timeoutHandle = Ly, iR(a)), At !== null)
        for (var i = At.return; i !== null; ) {
          var u = i.alternate;
          _C(u, i), i = i.return;
        }
      mr = e;
      var s = Jo(e.current, null);
      return At = s, hn = Pi = t, mn = Ml, lp = null, cm = z, up = z, fm = z, op = null, Yr = null, xx(), Xa.discardPendingWarnings(), s;
    }
    function tE(e, t) {
      do {
        var a = At;
        try {
          if (wh(), M1(), Qt(), wS.current = null, a === null || a.return === null) {
            mn = ap, lp = t, At = null;
            return;
          }
          if (_n && a.mode & xe && rm(a, !0), ai)
            if (al(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Rv(a, i, hn);
            } else
              As(a, t, hn);
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
      return xS.current = Zh, e === null ? Zh : e;
    }
    function rE(e) {
      xS.current = e;
    }
    function LD() {
      bS = Tt();
    }
    function pp(e) {
      cm = Ue(e, cm);
    }
    function ND() {
      mn === Ml && (mn = sm);
    }
    function HS() {
      (mn === Ml || mn === sm || mn === Xo) && (mn = ip), mr !== null && (To(cm) || To(up)) && Hu(mr, hn);
    }
    function zD(e) {
      mn !== ip && (mn = Xo), op === null ? op = [e] : op.push(e);
    }
    function UD() {
      return mn === Ml;
    }
    function gm(e, t) {
      var a = Ge;
      Ge |= Vn;
      var i = nE();
      if (mr !== e || hn !== t) {
        if (on) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (vp(e, hn), u.clear()), ac(e, t);
        }
        Ll = ad(), Ko(e, t);
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
      if (wh(), Ge = a, rE(i), At !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return nu(), mr = null, hn = z, mn;
    }
    function AD() {
      for (; At !== null; )
        aE(At);
    }
    function HD(e, t) {
      var a = Ge;
      Ge |= Vn;
      var i = nE();
      if (mr !== e || hn !== t) {
        if (on) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (vp(e, hn), u.clear()), ac(e, t);
        }
        Ll = ad(), sp(), Ko(e, t);
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
      return wh(), rE(i), Ge = a, At !== null ? (yo(), Ml) : (nu(), mr = null, hn = z, mn);
    }
    function FD() {
      for (; At !== null && !Os(); )
        aE(At);
    }
    function aE(e) {
      var t = e.alternate;
      ut(e);
      var a;
      (e.mode & xe) !== Re ? (Zg(e), a = FS(t, e, Pi), rm(e, !0)) : a = FS(t, e, Pi), Qt(), e.memoizedProps = e.pendingProps, a === null ? iE(e) : At = a, wS.current = null;
    }
    function iE(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & sr) === ge) {
          ut(t);
          var u = void 0;
          if ((t.mode & xe) === Re ? u = bC(a, t, Pi) : (Zg(t), u = bC(a, t, Pi), rm(t, !1)), Qt(), u !== null) {
            At = u;
            return;
          }
        } else {
          var s = Nw(a, t);
          if (s !== null) {
            s.flags &= vv, At = s;
            return;
          }
          if ((t.mode & xe) !== Re) {
            rm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= sr, i.subtreeFlags = ge, i.deletions = null;
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
      mn === Ml && (mn = IC);
    }
    function Zo(e, t, a) {
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
        zl();
      while (Uu !== null);
      if (qD(), (Ge & (Vn | wa)) !== vn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Ns(s), u === null)
        return Qf(), null;
      if (s === z && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = z, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ie;
      var f = Ue(u.lanes, u.childLanes);
      nd(e, f), e === mr && (mr = null, At = null, hn = z), ((u.subtreeFlags & Lr) !== ge || (u.flags & Lr) !== ge) && (qo || (qo = !0, MS = a, jS(ha, function() {
        return zl(), null;
      })));
      var p = (u.subtreeFlags & (Jl | Xn | En | Lr)) !== ge, v = (u.flags & (Jl | Xn | En | Lr)) !== ge;
      if (p || v) {
        var m = Fn.transition;
        Fn.transition = null;
        var y = Ar();
        Wt(Tn);
        var R = Ge;
        Ge |= wa, wS.current = null, Fw(e, u), nC(), Zw(e, u, s), ZT(e.containerInfo), e.current = u, xv(s), Jw(u, e, s), tu(), yv(), Ge = R, Wt(y), Fn.transition = m;
      } else
        e.current = u, nC();
      var E = qo;
      if (qo ? (qo = !1, Uu = e, cp = s) : (Gc = 0, vm = null), f = e.pendingLanes, f === z && (Ic = null), E || sE(e.current, !1), Va(u.stateNode, i), on && e.memoizedUpdaters.clear(), gD(), $r(e, Tt()), t !== null)
        for (var _ = e.onRecoverableError, O = 0; O < t.length; O++) {
          var L = t[O], ne = L.stack, Se = L.digest;
          _(L.value, {
            componentStack: ne,
            digest: Se
          });
        }
      if (dm) {
        dm = !1;
        var ve = _S;
        throw _S = null, ve;
      }
      return Jn(cp, we) && e.tag !== wu && zl(), f = e.pendingLanes, Jn(f, we) ? (Wx(), e === LS ? fp++ : (fp = 0, LS = e)) : fp = 0, Du(), Qf(), null;
    }
    function zl() {
      if (Uu !== null) {
        var e = Do(cp), t = ny(Pa, e), a = Fn.transition, i = Ar();
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
        return zl(), null;
      }));
    }
    function jD() {
      if (Uu === null)
        return !1;
      var e = MS;
      MS = null;
      var t = Uu, a = cp;
      if (Uu = null, cp = z, (Ge & (Vn | wa)) !== vn)
        throw new Error("Cannot flush passive effects while already rendering.");
      NS = !0, pm = !1, wv(a);
      var i = Ge;
      Ge |= wa, lD(t.current), nD(t, t.current, a, e);
      {
        var u = OS;
        OS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Pw(t, f);
        }
      }
      mo(), sE(t.current, !0), Ge = i, Du(), pm ? t === vm ? Gc++ : (Gc = 0, vm = t) : Gc = 0, NS = !1, pm = !1, Ti(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function lE(e) {
      return Ic !== null && Ic.has(e);
    }
    function PD(e) {
      Ic === null ? Ic = /* @__PURE__ */ new Set([e]) : Ic.add(e);
    }
    function YD(e) {
      dm || (dm = !0, _S = e);
    }
    var $D = YD;
    function uE(e, t, a) {
      var i = Go(a, t), u = aC(e, i, we), s = bu(e, u, we), f = yr();
      s !== null && (vl(s, we, f), $r(s, f));
    }
    function St(e, t, a) {
      if (Uw(a), hp(!1), e.tag === F) {
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
            var f = Go(a, e), p = aS(i, f, we), v = bu(i, p, we), m = yr();
            v !== null && (vl(v, we, m), $r(v, m));
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
      td(e, a), ek(e), mr === e && pl(hn, a) && (mn === ip || mn === sm && tc(hn) && Tt() - bS < GC ? Ko(e, z) : fm = Ue(fm, a)), $r(e, u);
    }
    function oE(e, t) {
      t === Ie && (t = wD(e));
      var a = yr(), i = jr(e, t);
      i !== null && (vl(i, t, a), $r(i, a));
    }
    function ID(e) {
      var t = e.memoizedState, a = Ie;
      t !== null && (a = t.retryLane), oE(e, a);
    }
    function GD(e, t) {
      var a = Ie, i;
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
      if (fp > RD)
        throw fp = 0, LS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Gc > xD && (Gc = 0, vm = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function qD() {
      Xa.flushLegacyContextWarning(), Xa.flushPendingUnsafeLifecycleWarnings();
    }
    function sE(e, t) {
      ut(e), Sm(e, Wn, hD), t && Sm(e, rl, mD), Sm(e, Wn, pD), t && Sm(e, rl, vD), Qt();
    }
    function Sm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== ge ? i = i.child : ((i.flags & t) !== ge && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Cm = null;
    function cE(e) {
      {
        if ((Ge & Vn) !== vn || !(e.mode & Ve))
          return;
        var t = e.tag;
        if (t !== be && t !== F && t !== G && t !== le && t !== $ && t !== nt && t !== Be)
          return;
        var a = Ne(e) || "ReactComponent";
        if (Cm !== null) {
          if (Cm.has(a))
            return;
          Cm.add(a);
        } else
          Cm = /* @__PURE__ */ new Set([a]);
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
      var KD = null;
      FS = function(e, t, a) {
        var i = gE(KD, t);
        try {
          return RC(e, t, a);
        } catch (s) {
          if (cx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (wh(), M1(), _C(e, t), gE(t, i), t.mode & xe && Zg(t), nl(null, RC, null, e, t, a), Xm()) {
            var u = zf();
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
          case le:
          case $:
          case Be: {
            var t = At && Ne(At) || "Unknown", a = t;
            if (!VS.has(a)) {
              VS.add(a);
              var i = Ne(e) || "Unknown";
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
    function vp(e, t) {
      if (on) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          rd(e, i, t);
        });
      }
    }
    var BS = {};
    function jS(e, t) {
      {
        var a = ri.current;
        return a !== null ? (a.push(t), BS) : _s(e, t);
      }
    }
    function dE(e) {
      if (e !== BS)
        return mv(e);
    }
    function pE() {
      return ri.current !== null;
    }
    function JD(e) {
      {
        if (e.mode & Ve) {
          if (!$C())
            return;
        } else if (!CD() || Ge !== vn || e.tag !== le && e.tag !== $ && e.tag !== Be)
          return;
        if (ri.current === null) {
          var t = Vt;
          try {
            ut(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ne(e));
          } finally {
            t ? ut(e) : Qt();
          }
        }
      }
    }
    function ek(e) {
      e.tag !== wu && $C() && ri.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function hp(e) {
      qC = e;
    }
    var Da = null, Wc = null, tk = function(e) {
      Da = e;
    };
    function Xc(e) {
      {
        if (Da === null)
          return e;
        var t = Da(e);
        return t === void 0 ? e : t.current;
      }
    }
    function PS(e) {
      return Xc(e);
    }
    function YS(e) {
      {
        if (Da === null)
          return e;
        var t = Da(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Xc(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Vl,
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
          case le: {
            (typeof i == "function" || s === On) && (u = !0);
            break;
          }
          case $: {
            (s === Vl || s === On) && (u = !0);
            break;
          }
          case nt:
          case Be: {
            (s === Bl || s === On) && (u = !0);
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
        Wc === null && (Wc = /* @__PURE__ */ new WeakSet()), Wc.add(e);
      }
    }
    var nk = function(e, t) {
      {
        if (Da === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        zl(), Nl(function() {
          $S(e.current, i, a);
        });
      }
    }, rk = function(e, t) {
      {
        if (e.context !== la)
          return;
        zl(), Nl(function() {
          mp(t, e, null, null);
        });
      }
    };
    function $S(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case le:
          case Be:
          case G:
            v = p;
            break;
          case $:
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
        if (Wc !== null && (Wc.has(e) || i !== null && Wc.has(i)) && (y = !0), y && (e._debugNeedsRemount = !0), y || m) {
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
          case le:
          case Be:
          case G:
            p = f;
            break;
          case $:
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
            case I:
              t.add(i.stateNode);
              return;
            case U:
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
        if (a.tag === I)
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
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = ge, this.subtreeFlags = ge, this.deletions = null, this.lanes = z, this.childLanes = z, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !IS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
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
        return GS(e) ? G : le;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Vl)
          return $;
        if (t === Bl)
          return nt;
      }
      return be;
    }
    function Jo(e, t) {
      var a = e.alternate;
      a === null ? (a = ua(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ge, a.subtreeFlags = ge, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & un, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case be:
        case le:
        case Be:
          a.type = Xc(e.type);
          break;
        case G:
          a.type = PS(e.type);
          break;
        case $:
          a.type = YS(e.type);
          break;
      }
      return a;
    }
    function ck(e, t) {
      e.flags &= un | ht;
      var a = e.alternate;
      if (a === null)
        e.childLanes = z, e.lanes = t, e.child = null, e.subtreeFlags = ge, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ge, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
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
      return e === yh ? (i = Ve, t === !0 && (i |= Rt, i |= zr)) : i = Re, on && (i |= xe), ua(F, null, null, i);
    }
    function WS(e, t, a, i, u, s) {
      var f = be, p = e;
      if (typeof e == "function")
        GS(e) ? (f = G, p = PS(p)) : p = Xc(p);
      else if (typeof e == "string")
        f = I;
      else
        e:
          switch (e) {
            case _a:
              return Fu(a.children, u, s, t);
            case Fl:
              f = He, u |= Rt, (u & Ve) !== Re && (u |= zr);
              break;
            case Yu:
              return dk(a, u, s, t);
            case da:
              return pk(a, u, s, t);
            case $u:
              return vk(a, u, s, t);
            case tf:
              return yE(a, u, s, t);
            case wp:
            case Rp:
            case km:
            case bm:
            case xp:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Jc:
                    f = V;
                    break e;
                  case ef:
                    f = ue;
                    break e;
                  case Vl:
                    f = $, p = YS(p);
                    break e;
                  case Bl:
                    f = nt;
                    break e;
                  case On:
                    f = bn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var m = i ? Ne(i) : null;
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
    function Fu(e, t, a, i) {
      var u = ua(Ae, e, i, t);
      return u.lanes = a, u;
    }
    function dk(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ua(he, e, i, t | xe);
      return u.elementType = Yu, u.lanes = a, u.stateNode = {
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
      return u.elementType = $u, u.lanes = a, u;
    }
    function yE(e, t, a, i) {
      var u = ua(Qe, e, i, t);
      u.elementType = tf, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function qS(e, t, a) {
      var i = ua(fe, e, null, t);
      return i.lanes = a, i;
    }
    function hk() {
      var e = ua(I, null, null, Re);
      return e.elementType = "DELETED", e;
    }
    function mk(e) {
      var t = ua(Ht, null, null, Re);
      return t.stateNode = e, t;
    }
    function KS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ua(U, i, e.key, t);
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
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ly, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ie, this.eventTimes = rc(z), this.expirationTimes = rc(pt), this.pendingLanes = z, this.suspendedLanes = z, this.pingedLanes = z, this.expiredLanes = z, this.mutableReadLanes = z, this.finishedLanes = z, this.entangledLanes = z, this.entanglements = rc(z), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < yt; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case yh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case wu:
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
      return Al(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Kr,
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
        if (Ui(i))
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
          var s = Ne(a) || "Component";
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
      var E = R.current, _ = yr(), O = Au(E), L = _l(_, O);
      return L.callback = t ?? null, bu(E, L, O), DD(R, O, _), R;
    }
    function mp(e, t, a, i) {
      gv(t, e);
      var u = t.current, s = yr(), f = Au(u);
      il(f);
      var p = CE(a);
      t.context === null ? t.context = p : t.pendingContext = p, Dr && Vt !== null && !JS && (JS = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ne(Vt) || "Unknown"));
      var v = _l(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = bu(u, v, f);
      return m !== null && (yn(m, u, f, s), Oh(m, u, f)), f;
    }
    function Em(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case I:
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
          Nl(function() {
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
      a !== null && a.dehydrated !== null && (a.retryLane = Ov(a.retryLane, t));
    }
    function t0(e, t) {
      RE(e, t);
      var a = e.alternate;
      a && RE(a, t);
    }
    function Ek(e) {
      if (e.tag === Ee) {
        var t = ru, a = jr(e, t);
        if (a !== null) {
          var i = yr();
          yn(a, e, t, i);
        }
        t0(e, t);
      }
    }
    function Tk(e) {
      if (e.tag === Ee) {
        var t = Au(e), a = jr(e, t);
        if (a !== null) {
          var i = yr();
          yn(a, e, t, i);
        }
        t0(e, t);
      }
    }
    function xE(e) {
      var t = hv(e);
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
        var i = t[a], u = Zt(e) ? e.slice() : Pe({}, e);
        return a + 1 === t.length ? (Zt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = AE(e[i], t, a + 1), u);
      }, HE = function(e, t) {
        return AE(e, t, 0);
      }, FE = function(e, t, a, i) {
        var u = t[i], s = Zt(e) ? e.slice() : Pe({}, e);
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
          Ce("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Ce("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return FE(e, t, a, 0);
      }, BE = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Zt(e) ? e.slice() : Pe({}, e);
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
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Pe({}, e.memoizedProps);
          var f = jr(e, we);
          f !== null && yn(f, e, we, pt);
        }
      }, bE = function(e, t, a) {
        var i = n0(e, t);
        if (i !== null) {
          var u = HE(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Pe({}, e.memoizedProps);
          var s = jr(e, we);
          s !== null && yn(s, e, we, pt);
        }
      }, _E = function(e, t, a, i) {
        var u = n0(e, t);
        if (u !== null) {
          var s = VE(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Pe({}, e.memoizedProps);
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
      var t = e.findFiberByHostInstance, a = x.ReactCurrentDispatcher;
      return Yf({
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
    Tm.prototype.render = r0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Rm(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Bt) {
          var i = xE(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      mp(e, t, null, null);
    }, Tm.prototype.unmount = r0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        eE() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Nl(function() {
          mp(null, e, null, null);
        }), j0(t);
      }
    };
    function _k(e, t) {
      if (!Rm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      YE(e);
      var a = !1, i = !1, u = "", s = PE;
      t != null && (t.hydrate ? Ce("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Hl && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = EE(e, yh, null, a, i, u, s);
      ch(f.current, e);
      var p = e.nodeType === Bt ? e.parentNode : e;
      return xd(p), new r0(f);
    }
    function Tm(e) {
      this._internalRoot = e;
    }
    function Ok(e) {
      e && Fv(e);
    }
    Tm.prototype.unstable_scheduleHydration = Ok;
    function Mk(e, t, a) {
      if (!Rm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      YE(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = PE;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = TE(t, null, e, yh, i, s, f, p, v);
      if (ch(m.current, e), xd(e), u)
        for (var y = 0; y < u.length; y++) {
          var R = u[y];
          Vx(m, R);
        }
      return new Tm(m);
    }
    function Rm(e) {
      return !!(e && (e.nodeType === Qn || e.nodeType === ta || e.nodeType === qi || !lt));
    }
    function yp(e) {
      return !!(e && (e.nodeType === Qn || e.nodeType === ta || e.nodeType === qi || e.nodeType === Bt && e.nodeValue === " react-mount-point-unstable "));
    }
    function YE(e) {
      e.nodeType === Qn && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Ud(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Lk = x.ReactCurrentOwner, $E;
    $E = function(e) {
      if (e._reactRootContainer && e.nodeType !== Bt) {
        var t = xE(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = a0(e), u = !!(i && Ru(i));
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
            var E = Em(f);
            s.call(E);
          };
        }
        var f = TE(
          t,
          i,
          e,
          wu,
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
        e._reactRootContainer = f, ch(f.current, e);
        var p = e.nodeType === Bt ? e.parentNode : e;
        return xd(p), Nl(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var m = i;
          i = function() {
            var E = Em(y);
            m.call(E);
          };
        }
        var y = EE(
          e,
          wu,
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
        e._reactRootContainer = y, ch(y.current, e);
        var R = e.nodeType === Bt ? e.parentNode : e;
        return xd(R), Nl(function() {
          mp(t, y, a, i);
        }), y;
      }
    }
    function zk(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function xm(e, t, a, i, u) {
      $E(a), zk(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Nk(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Em(f);
            p.call(v);
          };
        }
        mp(t, f, e, u);
      }
      return Em(f);
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
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Ud(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return xm(null, e, t, !0, a);
    }
    function Hk(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Ud(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return xm(null, e, t, !1, a);
    }
    function Fk(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !po(e))
        throw new Error("parentComponent must be a valid React Component");
      return xm(e, t, a, !1, i);
    }
    function Vk(e) {
      if (!yp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Ud(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = a0(e), i = a && !Ru(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Nl(function() {
          xm(null, null, e, !1, function() {
            e._reactRootContainer = null, j0(e);
          });
        }), !0;
      } else {
        {
          var u = a0(e), s = !!(u && Ru(u)), f = e.nodeType === Qn && yp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ie(Ck), Lv(Ek), bo(Tk), ld(Ar), zv(wo), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), dv(PT), xs(US, MD, Nl);
    function Bk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Rm(t))
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
      Events: [Ru, Dc, fh, Rs, so, US]
    };
    function Pk(e, t) {
      return i0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), _k(e, t);
    }
    function Yk(e, t, a) {
      return i0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Mk(e, t, a);
    }
    function $k(e) {
      return eE() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Nl(e);
    }
    var Qk = bk({
      findFiberByHostInstance: Fo,
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
var qE;
function ab() {
  if (qE)
    return Ir;
  qE = 1;
  var A = KE, K = Sp;
  function x(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ye = /* @__PURE__ */ new Set(), Fe = {};
  function Ce(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (Fe[n] = r, n = 0; n < r.length; n++)
      ye.add(r[n]);
  }
  var Ze = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), le = Object.prototype.hasOwnProperty, G = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, be = {}, F = {};
  function U(n) {
    return le.call(F, n) ? !0 : le.call(be, n) ? !1 : G.test(n) ? F[n] = !0 : (be[n] = !0, !1);
  }
  function I(n, r, l, o) {
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
  function fe(n, r, l, o) {
    if (r === null || typeof r > "u" || I(n, r, l, o))
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
  function Ae(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var He = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    He[n] = new Ae(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    He[r] = new Ae(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    He[n] = new Ae(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    He[n] = new Ae(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    He[n] = new Ae(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    He[n] = new Ae(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    He[n] = new Ae(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    He[n] = new Ae(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    He[n] = new Ae(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ue = /[\-:]([a-z])/g;
  function V(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ue,
      V
    );
    He[r] = new Ae(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ue, V);
    He[r] = new Ae(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ue, V);
    He[r] = new Ae(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    He[n] = new Ae(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), He.xlinkHref = new Ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    He[n] = new Ae(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function $(n, r, l, o) {
    var c = He.hasOwnProperty(r) ? He[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (fe(r, l, c, o) && (l = null), o || c === null ? U(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var he = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ee = Symbol.for("react.element"), nt = Symbol.for("react.portal"), Be = Symbol.for("react.fragment"), bn = Symbol.for("react.strict_mode"), ir = Symbol.for("react.profiler"), Ht = Symbol.for("react.provider"), vt = Symbol.for("react.context"), jn = Symbol.for("react.forward_ref"), Qe = Symbol.for("react.suspense"), it = Symbol.for("react.suspense_list"), Cr = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), Er = Symbol.for("react.offscreen"), q = Symbol.iterator;
  function De(n) {
    return n === null || typeof n != "object" ? null : (n = q && n[q] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ae = Object.assign, rt;
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
  function ai(n) {
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
      case Be:
        return "Fragment";
      case nt:
        return "Portal";
      case ir:
        return "Profiler";
      case bn:
        return "StrictMode";
      case Qe:
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
  function ii(n) {
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
  function Bu(n) {
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
    n._valueTracker || (n._valueTracker = Bu(n));
  }
  function ka(n) {
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
    return ae({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Rr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Gr(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Wr(n, r) {
    r = r.checked, r != null && $(n, "checked", r, !1);
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
    r.hasOwnProperty("value") ? Al(n, r.type, l) : r.hasOwnProperty("defaultValue") && Al(n, r.type, Gr(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ba(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Al(n, r, l) {
    (r !== "number" || gn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var $i = Array.isArray;
  function li(n, r, l, o) {
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
  function Qi(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(x(91));
    return ae({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Xr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(x(92));
        if ($i(l)) {
          if (1 < l.length)
            throw Error(x(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Gr(l) };
  }
  function ui(n, r) {
    var l = Gr(r.value), o = Gr(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function ca(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function oi(n) {
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
    return n == null || n === "http://www.w3.org/1999/xhtml" ? oi(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var qr, ju = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (qr = qr || document.createElement("div"), qr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = qr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function si(n, r) {
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
  function je(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Z.hasOwnProperty(n) && Z[n] ? ("" + r).trim() : r + "px";
  }
  function ct(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = je(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Nt = ae({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Sn(n, r) {
    if (r) {
      if (Nt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(x(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(x(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(x(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(x(62));
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
  function Cp(n) {
    if (n = po(n)) {
      if (typeof fa != "function")
        throw Error(x(280));
      var r = n.stateNode;
      r && (r = ge(r), fa(n.stateNode, n.type, r));
    }
  }
  function ts(n) {
    Ft ? bt ? bt.push(n) : bt = [n] : Ft = n;
  }
  function ns() {
    if (Ft) {
      var n = Ft, r = bt;
      if (bt = Ft = null, Cp(n), r)
        for (n = 0; n < r.length; n++)
          Cp(r[n]);
    }
  }
  function Ep(n, r) {
    return n(r);
  }
  function Tp() {
  }
  var rs = !1;
  function Zc(n, r, l) {
    if (rs)
      return n(r, l);
    rs = !0;
    try {
      return Ep(n, r, l);
    } finally {
      rs = !1, (Ft !== null || bt !== null) && (Tp(), ns());
    }
  }
  function Pu(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = ge(l);
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
      throw Error(x(231, r, typeof l));
    return l;
  }
  var as = !1;
  if (Ze)
    try {
      var Ii = {};
      Object.defineProperty(Ii, "passive", { get: function() {
        as = !0;
      } }), window.addEventListener("test", Ii, Ii), window.removeEventListener("test", Ii, Ii);
    } catch {
      as = !1;
    }
  function Hl(n, r, l, o, c, d, h, S, C) {
    var M = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, M);
    } catch (j) {
      this.onError(j);
    }
  }
  var Kr = !1, _a = null, Fl = !1, Yu = null, Jc = { onError: function(n) {
    Kr = !0, _a = n;
  } };
  function ef(n, r, l, o, c, d, h, S, C) {
    Kr = !1, _a = null, Hl.apply(Jc, arguments);
  }
  function Vl(n, r, l, o, c, d, h, S, C) {
    if (ef.apply(this, arguments), Kr) {
      if (Kr) {
        var M = _a;
        Kr = !1, _a = null;
      } else
        throw Error(x(198));
      Fl || (Fl = !0, Yu = M);
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
  function $u(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Bl(n) {
    if (da(n) !== n)
      throw Error(x(188));
  }
  function On(n) {
    var r = n.alternate;
    if (!r) {
      if (r = da(n), r === null)
        throw Error(x(188));
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
            return Bl(c), n;
          if (d === o)
            return Bl(c), r;
          d = d.sibling;
        }
        throw Error(x(188));
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
            throw Error(x(189));
        }
      }
      if (l.alternate !== o)
        throw Error(x(190));
    }
    if (l.tag !== 3)
      throw Error(x(188));
    return l.stateNode.current === l ? n : r;
  }
  function Rp(n) {
    return n = On(n), n !== null ? xp(n) : null;
  }
  function xp(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = xp(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var tf = K.unstable_scheduleCallback, wp = K.unstable_cancelCallback, km = K.unstable_shouldYield, bm = K.unstable_requestPaint, _t = K.unstable_now, _m = K.unstable_getCurrentPriorityLevel, Oa = K.unstable_ImmediatePriority, Pe = K.unstable_UserBlockingPriority, ci = K.unstable_NormalPriority, Dp = K.unstable_LowPriority, nf = K.unstable_IdlePriority, Qu = null, Zr = null;
  function kp(n) {
    if (Zr && typeof Zr.onCommitFiberRoot == "function")
      try {
        Zr.onCommitFiberRoot(Qu, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var wr = Math.clz32 ? Math.clz32 : Om, bp = Math.log, _p = Math.LN2;
  function Om(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (bp(n) / _p | 0) | 0;
  }
  var is = 64, jl = 4194304;
  function Gi(n) {
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
      S !== 0 ? o = Gi(S) : (d &= h, d !== 0 && (o = Gi(d)));
    } else
      h = l & ~c, h !== 0 ? o = Gi(h) : d !== 0 && (o = Gi(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - wr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function rf(n, r) {
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
  function ls(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var h = 31 - wr(d), S = 1 << h, C = c[h];
      C === -1 ? (!(S & l) || S & o) && (c[h] = rf(S, r)) : C <= r && (n.expiredLanes |= S), d &= ~S;
    }
  }
  function af(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function us() {
    var n = is;
    return is <<= 1, !(is & 4194240) && (is = 64), n;
  }
  function lf(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function Wi(n, r, l) {
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
  function Iu(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - wr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var at = 0;
  function uf(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Op, os, ft, Mp, of, Ne = !1, Gu = [], Vt = null, Dr = null, kr = null, Wu = /* @__PURE__ */ new Map(), Qt = /* @__PURE__ */ new Map(), ut = [], Lm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        Wu.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qt.delete(r.pointerId);
    }
  }
  function Cn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = po(r), r !== null && os(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function fi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Vt = Cn(Vt, n, r, l, o, c), !0;
      case "dragenter":
        return Dr = Cn(Dr, n, r, l, o, c), !0;
      case "mouseover":
        return kr = Cn(kr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Wu.set(d, Cn(Wu.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Qt.set(d, Cn(Qt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Lp(n) {
    var r = _r(n.target);
    if (r !== null) {
      var l = da(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = $u(l), r !== null) {
            n.blockedOn = r, of(n.priority, function() {
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
  function Pl(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = fs(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        xr = o, l.target.dispatchEvent(o), xr = null;
      } else
        return r = po(l), r !== null && os(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function sf(n, r, l) {
    Pl(n) && l.delete(r);
  }
  function Np() {
    Ne = !1, Vt !== null && Pl(Vt) && (Vt = null), Dr !== null && Pl(Dr) && (Dr = null), kr !== null && Pl(kr) && (kr = null), Wu.forEach(sf), Qt.forEach(sf);
  }
  function Xu(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ne || (Ne = !0, K.unstable_scheduleCallback(K.unstable_NormalPriority, Np)));
  }
  function qu(n) {
    function r(c) {
      return Xu(c, n);
    }
    if (0 < Gu.length) {
      Xu(Gu[0], n);
      for (var l = 1; l < Gu.length; l++) {
        var o = Gu[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Vt !== null && Xu(Vt, n), Dr !== null && Xu(Dr, n), kr !== null && Xu(kr, n), Wu.forEach(r), Qt.forEach(r), l = 0; l < ut.length; l++)
      o = ut[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < ut.length && (l = ut[0], l.blockedOn === null); )
      Lp(l), l.blockedOn === null && ut.shift();
  }
  var Yl = he.ReactCurrentBatchConfig, Xi = !0;
  function zp(n, r, l, o) {
    var c = at, d = Yl.transition;
    Yl.transition = null;
    try {
      at = 1, cs(n, r, l, o);
    } finally {
      at = c, Yl.transition = d;
    }
  }
  function ss(n, r, l, o) {
    var c = at, d = Yl.transition;
    Yl.transition = null;
    try {
      at = 4, cs(n, r, l, o);
    } finally {
      at = c, Yl.transition = d;
    }
  }
  function cs(n, r, l, o) {
    if (Xi) {
      var c = fs(n, r, l, o);
      if (c === null)
        Rs(n, r, o, Ku, l), ea(n, o);
      else if (fi(c, n, r, l, o))
        o.stopPropagation();
      else if (ea(n, o), r & 4 && -1 < Lm.indexOf(n)) {
        for (; c !== null; ) {
          var d = po(c);
          if (d !== null && Op(d), d = fs(n, r, l, o), d === null && Rs(n, r, o, Ku, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        Rs(n, r, o, null, l);
    }
  }
  var Ku = null;
  function fs(n, r, l, o) {
    if (Ku = null, n = kt(o), n = _r(n), n !== null)
      if (r = da(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = $u(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Ku = n, null;
  }
  function cf(n) {
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
          case Oa:
            return 1;
          case Pe:
            return 4;
          case ci:
          case Dp:
            return 16;
          case nf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ma = null, Zu = null, Ju = null;
  function ff() {
    if (Ju)
      return Ju;
    var n, r = Zu, l = r.length, o, c = "value" in Ma ? Ma.value : Ma.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var h = l - n;
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++)
      ;
    return Ju = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function $l(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function eo() {
    return !0;
  }
  function Up() {
    return !1;
  }
  function or(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var S in n)
        n.hasOwnProperty(S) && (l = n[S], this[S] = l ? l(d) : d[S]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? eo : Up, this.isPropagationStopped = Up, this;
    }
    return ae(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = eo);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = eo);
    }, persist: function() {
    }, isPersistent: eo }), r;
  }
  var di = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ds = or(di), Ql = ae({}, di, { view: 0, detail: 0 }), Ap = or(Ql), ps, df, to, Zt = ae({}, Ql, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: mf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== to && (to && n.type === "mousemove" ? (ps = n.screenX - to.screenX, df = n.screenY - to.screenY) : df = ps = 0, to = n), ps);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : df;
  } }), vs = or(Zt), Hp = ae({}, Zt, { dataTransfer: 0 }), Fp = or(Hp), Nm = ae({}, Ql, { relatedTarget: 0 }), pi = or(Nm), pf = ae({}, di, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Vp = or(pf), zm = ae({}, di, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Um = or(zm), Am = ae({}, di, { data: 0 }), vf = or(Am), hf = {
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
  }, Bp = {
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
  }, jp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = jp[n]) ? !!r[n] : !1;
  }
  function mf() {
    return Pp;
  }
  var La = ae({}, Ql, { key: function(n) {
    if (n.key) {
      var r = hf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = $l(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Bp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: mf, charCode: function(n) {
    return n.type === "keypress" ? $l(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? $l(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Hm = or(La), yf = ae({}, Zt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), hs = or(yf), gf = ae({}, Ql, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: mf }), Fm = or(gf), ms = ae({}, di, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yp = or(ms), Qn = ae({}, Zt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Na = or(Qn), Bt = [9, 13, 27, 32], ta = Ze && "CompositionEvent" in window, qi = null;
  Ze && "documentMode" in document && (qi = document.documentMode);
  var ys = Ze && "TextEvent" in window && !qi, $p = Ze && (!ta || qi && 8 < qi && 11 >= qi), Il = " ", Qp = !1;
  function Ip(n, r) {
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
  function gs(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Gl = !1;
  function Vm(n, r) {
    switch (n) {
      case "compositionend":
        return gs(r);
      case "keypress":
        return r.which !== 32 ? null : (Qp = !0, Il);
      case "textInput":
        return n = r.data, n === Il && Qp ? null : n;
      default:
        return null;
    }
  }
  function Bm(n, r) {
    if (Gl)
      return n === "compositionend" || !ta && Ip(n, r) ? (n = ff(), Ju = Zu = Ma = null, Gl = !1, n) : null;
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
        return $p && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Gp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Wp(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Gp[n.type] : r === "textarea";
  }
  function Xp(n, r, l, o) {
    ts(o), r = so(r, "onChange"), 0 < r.length && (l = new ds("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var no = null, Wl = null;
  function Xl(n) {
    Ts(n, 0);
  }
  function ql(n) {
    var r = Zl(n);
    if (ka(r))
      return n;
  }
  function qp(n, r) {
    if (n === "change")
      return r;
  }
  var Sf = !1;
  if (Ze) {
    var Cf;
    if (Ze) {
      var Ef = "oninput" in document;
      if (!Ef) {
        var Kp = document.createElement("div");
        Kp.setAttribute("oninput", "return;"), Ef = typeof Kp.oninput == "function";
      }
      Cf = Ef;
    } else
      Cf = !1;
    Sf = Cf && (!document.documentMode || 9 < document.documentMode);
  }
  function Zp() {
    no && (no.detachEvent("onpropertychange", Jp), Wl = no = null);
  }
  function Jp(n) {
    if (n.propertyName === "value" && ql(Wl)) {
      var r = [];
      Xp(r, Wl, n, kt(n)), Zc(Xl, r);
    }
  }
  function jm(n, r, l) {
    n === "focusin" ? (Zp(), no = r, Wl = l, no.attachEvent("onpropertychange", Jp)) : n === "focusout" && Zp();
  }
  function Pm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return ql(Wl);
  }
  function Ym(n, r) {
    if (n === "click")
      return ql(r);
  }
  function ev(n, r) {
    if (n === "input" || n === "change")
      return ql(r);
  }
  function $m(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var br = typeof Object.is == "function" ? Object.is : $m;
  function ro(n, r) {
    if (br(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!le.call(r, c) || !br(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function tv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function nv(n, r) {
    var l = tv(n);
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
      l = tv(l);
    }
  }
  function rv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? rv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ss() {
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
  function za(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Cs(n) {
    var r = Ss(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && rv(l.ownerDocument.documentElement, l)) {
      if (o !== null && za(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = nv(l, d);
          var h = nv(
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
  var av = Ze && "documentMode" in document && 11 >= document.documentMode, na = null, Tf = null, ao = null, Rf = !1;
  function iv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Rf || na == null || na !== gn(o) || (o = na, "selectionStart" in o && za(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ao && ro(ao, o) || (ao = o, o = so(Tf, "onSelect"), 0 < o.length && (r = new ds("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = na)));
  }
  function Es(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Ki = { animationend: Es("Animation", "AnimationEnd"), animationiteration: Es("Animation", "AnimationIteration"), animationstart: Es("Animation", "AnimationStart"), transitionend: Es("Transition", "TransitionEnd") }, xf = {}, wf = {};
  Ze && (wf = document.createElement("div").style, "AnimationEvent" in window || (delete Ki.animationend.animation, delete Ki.animationiteration.animation, delete Ki.animationstart.animation), "TransitionEvent" in window || delete Ki.transitionend.transition);
  function Jt(n) {
    if (xf[n])
      return xf[n];
    if (!Ki[n])
      return n;
    var r = Ki[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in wf)
        return xf[n] = r[l];
    return n;
  }
  var Df = Jt("animationend"), lv = Jt("animationiteration"), uv = Jt("animationstart"), ov = Jt("transitionend"), sv = /* @__PURE__ */ new Map(), cv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ua(n, r) {
    sv.set(n, r), Ce(r, [n]);
  }
  for (var io = 0; io < cv.length; io++) {
    var Zi = cv[io], Qm = Zi.toLowerCase(), lo = Zi[0].toUpperCase() + Zi.slice(1);
    Ua(Qm, "on" + lo);
  }
  Ua(Df, "onAnimationEnd"), Ua(lv, "onAnimationIteration"), Ua(uv, "onAnimationStart"), Ua("dblclick", "onDoubleClick"), Ua("focusin", "onFocus"), Ua("focusout", "onBlur"), Ua(ov, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), Ce("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ce("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ce("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ce("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ce("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ce("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var uo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Im = new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));
  function fv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Vl(o, r, void 0, n), n.currentTarget = null;
  }
  function Ts(n, r) {
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
            fv(c, S, M), d = C;
          }
        else
          for (h = 0; h < o.length; h++) {
            if (S = o[h], C = S.instance, M = S.currentTarget, S = S.listener, C !== d && c.isPropagationStopped())
              break e;
            fv(c, S, M), d = C;
          }
      }
    }
    if (Fl)
      throw n = Yu, Fl = !1, Yu = null, n;
  }
  function dt(n, r) {
    var l = r[Nf];
    l === void 0 && (l = r[Nf] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (dv(r, n, 2, !1), l.add(o));
  }
  function vi(n, r, l) {
    var o = 0;
    r && (o |= 4), dv(l, n, o, r);
  }
  var Aa = "_reactListening" + Math.random().toString(36).slice(2);
  function Kl(n) {
    if (!n[Aa]) {
      n[Aa] = !0, ye.forEach(function(l) {
        l !== "selectionchange" && (Im.has(l) || vi(l, !1, n), vi(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Aa] || (r[Aa] = !0, vi("selectionchange", !1, r));
    }
  }
  function dv(n, r, l, o) {
    switch (cf(r)) {
      case 1:
        var c = zp;
        break;
      case 4:
        c = ss;
        break;
      default:
        c = cs;
    }
    l = c.bind(null, r, l, n), c = void 0, !as || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Rs(n, r, l, o, c) {
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
    Zc(function() {
      var M = d, j = kt(l), P = [];
      e: {
        var B = sv.get(n);
        if (B !== void 0) {
          var ee = ds, oe = n;
          switch (n) {
            case "keypress":
              if ($l(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              ee = Hm;
              break;
            case "focusin":
              oe = "focus", ee = pi;
              break;
            case "focusout":
              oe = "blur", ee = pi;
              break;
            case "beforeblur":
            case "afterblur":
              ee = pi;
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
              ee = vs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ee = Fp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = Fm;
              break;
            case Df:
            case lv:
            case uv:
              ee = Vp;
              break;
            case ov:
              ee = Yp;
              break;
            case "scroll":
              ee = Ap;
              break;
            case "wheel":
              ee = Na;
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
              ee = hs;
          }
          var de = (r & 4) !== 0, Ut = !de && n === "scroll", w = de ? B !== null ? B + "Capture" : null : B;
          de = [];
          for (var T = M, b; T !== null; ) {
            b = T;
            var Q = b.stateNode;
            if (b.tag === 5 && Q !== null && (b = Q, w !== null && (Q = Pu(T, w), Q != null && de.push(oo(T, Q, b)))), Ut)
              break;
            T = T.return;
          }
          0 < de.length && (B = new ee(B, oe, null, l, j), P.push({ event: B, listeners: de }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (B = n === "mouseover" || n === "pointerover", ee = n === "mouseout" || n === "pointerout", B && l !== xr && (oe = l.relatedTarget || l.fromElement) && (_r(oe) || oe[Ha]))
            break e;
          if ((ee || B) && (B = j.window === j ? j : (B = j.ownerDocument) ? B.defaultView || B.parentWindow : window, ee ? (oe = l.relatedTarget || l.toElement, ee = M, oe = oe ? _r(oe) : null, oe !== null && (Ut = da(oe), oe !== Ut || oe.tag !== 5 && oe.tag !== 6) && (oe = null)) : (ee = null, oe = M), ee !== oe)) {
            if (de = vs, Q = "onMouseLeave", w = "onMouseEnter", T = "mouse", (n === "pointerout" || n === "pointerover") && (de = hs, Q = "onPointerLeave", w = "onPointerEnter", T = "pointer"), Ut = ee == null ? B : Zl(ee), b = oe == null ? B : Zl(oe), B = new de(Q, T + "leave", ee, l, j), B.target = Ut, B.relatedTarget = b, Q = null, _r(j) === M && (de = new de(w, T + "enter", oe, l, j), de.target = b, de.relatedTarget = Ut, Q = de), Ut = Q, ee && oe)
              t: {
                for (de = ee, w = oe, T = 0, b = de; b; b = Ji(b))
                  T++;
                for (b = 0, Q = w; Q; Q = Ji(Q))
                  b++;
                for (; 0 < T - b; )
                  de = Ji(de), T--;
                for (; 0 < b - T; )
                  w = Ji(w), b--;
                for (; T--; ) {
                  if (de === w || w !== null && de === w.alternate)
                    break t;
                  de = Ji(de), w = Ji(w);
                }
                de = null;
              }
            else
              de = null;
            ee !== null && kf(P, B, ee, de, !1), oe !== null && Ut !== null && kf(P, Ut, oe, de, !0);
          }
        }
        e: {
          if (B = M ? Zl(M) : window, ee = B.nodeName && B.nodeName.toLowerCase(), ee === "select" || ee === "input" && B.type === "file")
            var pe = qp;
          else if (Wp(B))
            if (Sf)
              pe = ev;
            else {
              pe = Pm;
              var se = jm;
            }
          else
            (ee = B.nodeName) && ee.toLowerCase() === "input" && (B.type === "checkbox" || B.type === "radio") && (pe = Ym);
          if (pe && (pe = pe(n, M))) {
            Xp(P, pe, l, j);
            break e;
          }
          se && se(n, B, M), n === "focusout" && (se = B._wrapperState) && se.controlled && B.type === "number" && Al(B, "number", B.value);
        }
        switch (se = M ? Zl(M) : window, n) {
          case "focusin":
            (Wp(se) || se.contentEditable === "true") && (na = se, Tf = M, ao = null);
            break;
          case "focusout":
            ao = Tf = na = null;
            break;
          case "mousedown":
            Rf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Rf = !1, iv(P, l, j);
            break;
          case "selectionchange":
            if (av)
              break;
          case "keydown":
          case "keyup":
            iv(P, l, j);
        }
        var me;
        if (ta)
          e: {
            switch (n) {
              case "compositionstart":
                var Oe = "onCompositionStart";
                break e;
              case "compositionend":
                Oe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Oe = "onCompositionUpdate";
                break e;
            }
            Oe = void 0;
          }
        else
          Gl ? Ip(n, l) && (Oe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Oe = "onCompositionStart");
        Oe && ($p && l.locale !== "ko" && (Gl || Oe !== "onCompositionStart" ? Oe === "onCompositionEnd" && Gl && (me = ff()) : (Ma = j, Zu = "value" in Ma ? Ma.value : Ma.textContent, Gl = !0)), se = so(M, Oe), 0 < se.length && (Oe = new vf(Oe, n, null, l, j), P.push({ event: Oe, listeners: se }), me ? Oe.data = me : (me = gs(l), me !== null && (Oe.data = me)))), (me = ys ? Vm(n, l) : Bm(n, l)) && (M = so(M, "onBeforeInput"), 0 < M.length && (j = new vf("onBeforeInput", "beforeinput", null, l, j), P.push({ event: j, listeners: M }), j.data = me));
      }
      Ts(P, r);
    });
  }
  function oo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function so(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Pu(n, l), d != null && o.unshift(oo(n, d, c)), d = Pu(n, r), d != null && o.push(oo(n, d, c))), n = n.return;
    }
    return o;
  }
  function Ji(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function kf(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var S = l, C = S.alternate, M = S.stateNode;
      if (C !== null && C === o)
        break;
      S.tag === 5 && M !== null && (S = M, c ? (C = Pu(l, d), C != null && h.unshift(oo(l, C, S))) : c || (C = Pu(l, d), C != null && h.push(oo(l, C, S)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var bf = /\r\n?/g, Gm = /\u0000|\uFFFD/g;
  function _f(n) {
    return (typeof n == "string" ? n : "" + n).replace(bf, `
`).replace(Gm, "");
  }
  function xs(n, r, l) {
    if (r = _f(r), _f(n) !== r && l)
      throw Error(x(425));
  }
  function ws() {
  }
  var Of = null, el = null;
  function co(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var tl = typeof setTimeout == "function" ? setTimeout : void 0, pv = typeof clearTimeout == "function" ? clearTimeout : void 0, Mf = typeof Promise == "function" ? Promise : void 0, Lf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mf < "u" ? function(n) {
    return Mf.resolve(null).then(n).catch(Wm);
  } : tl;
  function Wm(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function hi(n, r) {
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
  function fo(n) {
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
  var mi = Math.random().toString(36).slice(2), pa = "__reactFiber$" + mi, nl = "__reactProps$" + mi, Ha = "__reactContainer$" + mi, Nf = "__reactEvents$" + mi, Xm = "__reactListeners$" + mi, zf = "__reactHandles$" + mi;
  function _r(n) {
    var r = n[pa];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Ha] || l[pa]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = fo(n); n !== null; ) {
            if (l = n[pa])
              return l;
            n = fo(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function po(n) {
    return n = n[pa] || n[Ha], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Zl(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(x(33));
  }
  function ge(n) {
    return n[nl] || null;
  }
  var yi = [], ht = -1;
  function ze(n) {
    return { current: n };
  }
  function Je(n) {
    0 > ht || (n.current = yi[ht], yi[ht] = null, ht--);
  }
  function et(n, r) {
    ht++, yi[ht] = n.current, n.current = r;
  }
  var va = {}, _e = ze(va), Ot = ze(!1), In = va;
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
    Je(Ot), Je(_e);
  }
  function gi(n, r, l) {
    if (_e.current !== va)
      throw Error(x(168));
    et(_e, r), et(Ot, l);
  }
  function vo(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(x(108, ii(n) || "Unknown", c));
    return ae({}, l, o);
  }
  function Ds(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || va, In = _e.current, et(_e, n), et(Ot, Ot.current), !0;
  }
  function vv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(x(169));
    l ? (n = vo(n, r, In), o.__reactInternalMemoizedMergedChildContext = n, Je(Ot), Je(_e), et(_e, n)) : Je(Ot), et(Ot, l);
  }
  var sr = null, en = !1, ho = !1;
  function Uf(n) {
    sr === null ? sr = [n] : sr.push(n);
  }
  function Af(n) {
    en = !0, Uf(n);
  }
  function Gn() {
    if (!ho && sr !== null) {
      ho = !0;
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
        throw sr !== null && (sr = sr.slice(n + 1)), tf(Oa, Gn), c;
      } finally {
        at = r, ho = !1;
      }
    }
    return null;
  }
  var Si = [], Wn = 0, rl = null, Jl = 0, Xn = [], En = 0, Lr = null, un = 1, Fa = "";
  function cr(n, r) {
    Si[Wn++] = Jl, Si[Wn++] = rl, rl = n, Jl = r;
  }
  function Hf(n, r, l) {
    Xn[En++] = un, Xn[En++] = Fa, Xn[En++] = Lr, Lr = n;
    var o = un;
    n = Fa;
    var c = 32 - wr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - wr(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, un = 1 << 32 - wr(r) + c | l << c | o, Fa = d + n;
    } else
      un = 1 << d | l << c | o, Fa = n;
  }
  function ks(n) {
    n.return !== null && (cr(n, 1), Hf(n, 1, 0));
  }
  function Ff(n) {
    for (; n === rl; )
      rl = Si[--Wn], Si[Wn] = null, Jl = Si[--Wn], Si[Wn] = null;
    for (; n === Lr; )
      Lr = Xn[--En], Xn[En] = null, Fa = Xn[--En], Xn[En] = null, un = Xn[--En], Xn[En] = null;
  }
  var fr = null, qn = null, mt = !1, Nr = null;
  function Vf(n, r) {
    var l = Vr(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function hv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, fr = n, qn = ra(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, fr = n, qn = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Lr !== null ? { id: un, overflow: Fa } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Vr(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, fr = n, qn = null, !0) : !1;
      default:
        return !1;
    }
  }
  function bs(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function _s(n) {
    if (mt) {
      var r = qn;
      if (r) {
        var l = r;
        if (!hv(n, r)) {
          if (bs(n))
            throw Error(x(418));
          r = ra(l.nextSibling);
          var o = fr;
          r && hv(n, r) ? Vf(o, l) : (n.flags = n.flags & -4097 | 2, mt = !1, fr = n);
        }
      } else {
        if (bs(n))
          throw Error(x(418));
        n.flags = n.flags & -4097 | 2, mt = !1, fr = n;
      }
    }
  }
  function mv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    fr = n;
  }
  function Os(n) {
    if (n !== fr)
      return !1;
    if (!mt)
      return mv(n), mt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !co(n.type, n.memoizedProps)), r && (r = qn)) {
      if (bs(n))
        throw yv(), Error(x(418));
      for (; r; )
        Vf(n, r), r = ra(r.nextSibling);
    }
    if (mv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(x(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                qn = ra(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        qn = null;
      }
    } else
      qn = fr ? ra(n.stateNode.nextSibling) : null;
    return !0;
  }
  function yv() {
    for (var n = qn; n; )
      n = ra(n.nextSibling);
  }
  function Tt() {
    qn = fr = null, mt = !1;
  }
  function Bf(n) {
    Nr === null ? Nr = [n] : Nr.push(n);
  }
  var Ms = he.ReactCurrentBatchConfig;
  function dr(n, r) {
    if (n && n.defaultProps) {
      r = ae({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var ha = ze(null), Ls = null, Ci = null, jf = null;
  function Pf() {
    jf = Ci = Ls = null;
  }
  function Ei(n) {
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
    Ls = n, jf = Ci = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (jt = !0), n.firstContext = null);
  }
  function zt(n) {
    var r = n._currentValue;
    if (jf !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Ci === null) {
        if (Ls === null)
          throw Error(x(308));
        Ci = n, Ls.dependencies = { lanes: 0, firstContext: n };
      } else
        Ci = Ci.next = n;
    return r;
  }
  var on = null;
  function Yf(n) {
    on === null ? on = [n] : on.push(n);
  }
  function gv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Yf(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Va(n, o);
  }
  function Va(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ti = !1;
  function $f(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function It(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ba(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ri(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, Ye & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Va(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Yf(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Va(n, l);
  }
  function Ns(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Iu(n, l);
    }
  }
  function Qf(n, r) {
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
  function xi(n, r, l, o) {
    var c = n.updateQueue;
    Ti = !1;
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
                P = ae({}, P, B);
                break e;
              case 2:
                Ti = !0;
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
      $a |= h, n.lanes = h, n.memoizedState = P;
    }
  }
  function al(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(x(191, c));
          c.call(o);
        }
      }
  }
  var Sv = new A.Component().refs;
  function If(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ae({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var zs = { isMounted: function(n) {
    return (n = n._reactInternals) ? da(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = wn(), c = Pt(n), d = Ba(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ri(n, d, c), r !== null && (Dn(r, n, c, o), Ns(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = wn(), c = Pt(n), d = Ba(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ri(n, d, c), r !== null && (Dn(r, n, c, o), Ns(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = wn(), o = Pt(n), c = Ba(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ri(n, c, o), r !== null && (Dn(r, n, o, l), Ns(r, n, o));
  } };
  function Cv(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !ro(l, o) || !ro(c, d) : !0;
  }
  function Ev(n, r, l) {
    var o = !1, c = va, d = r.contextType;
    return typeof d == "object" && d !== null ? d = zt(d) : (c = Ct(r) ? In : _e.current, o = r.contextTypes, d = (o = o != null) ? Or(n, c) : va), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = zs, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Tv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && zs.enqueueReplaceState(r, r.state, null);
  }
  function Us(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = Sv, $f(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = zt(d) : (d = Ct(r) ? In : _e.current, c.context = Or(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (If(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && zs.enqueueReplaceState(c, c.state, null), xi(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function eu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(x(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(x(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var S = c.refs;
          S === Sv && (S = c.refs = {}), h === null ? delete S[d] : S[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(x(284));
      if (!l._owner)
        throw Error(x(290, n));
    }
    return n;
  }
  function As(n, r) {
    throw n = Object.prototype.toString.call(r), Error(x(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Rv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function xv(n) {
    function r(w, T) {
      if (n) {
        var b = w.deletions;
        b === null ? (w.deletions = [T], w.flags |= 16) : b.push(T);
      }
    }
    function l(w, T) {
      if (!n)
        return null;
      for (; T !== null; )
        r(w, T), T = T.sibling;
      return null;
    }
    function o(w, T) {
      for (w = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? w.set(T.key, T) : w.set(T.index, T), T = T.sibling;
      return w;
    }
    function c(w, T) {
      return w = Li(w, T), w.index = 0, w.sibling = null, w;
    }
    function d(w, T, b) {
      return w.index = b, n ? (b = w.alternate, b !== null ? (b = b.index, b < T ? (w.flags |= 2, T) : b) : (w.flags |= 2, T)) : (w.flags |= 1048576, T);
    }
    function h(w) {
      return n && w.alternate === null && (w.flags |= 2), w;
    }
    function S(w, T, b, Q) {
      return T === null || T.tag !== 6 ? (T = zo(b, w.mode, Q), T.return = w, T) : (T = c(T, b), T.return = w, T);
    }
    function C(w, T, b, Q) {
      var pe = b.type;
      return pe === Be ? j(w, T, b.props.children, Q, b.key) : T !== null && (T.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === Dt && Rv(pe) === T.type) ? (Q = c(T, b.props), Q.ref = eu(w, T, b), Q.return = w, Q) : (Q = vc(b.type, b.key, b.props, null, w.mode, Q), Q.ref = eu(w, T, b), Q.return = w, Q);
    }
    function M(w, T, b, Q) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== b.containerInfo || T.stateNode.implementation !== b.implementation ? (T = Rl(b, w.mode, Q), T.return = w, T) : (T = c(T, b.children || []), T.return = w, T);
    }
    function j(w, T, b, Q, pe) {
      return T === null || T.tag !== 7 ? (T = Tl(b, w.mode, Q, pe), T.return = w, T) : (T = c(T, b), T.return = w, T);
    }
    function P(w, T, b) {
      if (typeof T == "string" && T !== "" || typeof T == "number")
        return T = zo("" + T, w.mode, b), T.return = w, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Ee:
            return b = vc(T.type, T.key, T.props, null, w.mode, b), b.ref = eu(w, null, T), b.return = w, b;
          case nt:
            return T = Rl(T, w.mode, b), T.return = w, T;
          case Dt:
            var Q = T._init;
            return P(w, Q(T._payload), b);
        }
        if ($i(T) || De(T))
          return T = Tl(T, w.mode, b, null), T.return = w, T;
        As(w, T);
      }
      return null;
    }
    function B(w, T, b, Q) {
      var pe = T !== null ? T.key : null;
      if (typeof b == "string" && b !== "" || typeof b == "number")
        return pe !== null ? null : S(w, T, "" + b, Q);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Ee:
            return b.key === pe ? C(w, T, b, Q) : null;
          case nt:
            return b.key === pe ? M(w, T, b, Q) : null;
          case Dt:
            return pe = b._init, B(
              w,
              T,
              pe(b._payload),
              Q
            );
        }
        if ($i(b) || De(b))
          return pe !== null ? null : j(w, T, b, Q, null);
        As(w, b);
      }
      return null;
    }
    function ee(w, T, b, Q, pe) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number")
        return w = w.get(b) || null, S(T, w, "" + Q, pe);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case Ee:
            return w = w.get(Q.key === null ? b : Q.key) || null, C(T, w, Q, pe);
          case nt:
            return w = w.get(Q.key === null ? b : Q.key) || null, M(T, w, Q, pe);
          case Dt:
            var se = Q._init;
            return ee(w, T, b, se(Q._payload), pe);
        }
        if ($i(Q) || De(Q))
          return w = w.get(b) || null, j(T, w, Q, pe, null);
        As(T, Q);
      }
      return null;
    }
    function oe(w, T, b, Q) {
      for (var pe = null, se = null, me = T, Oe = T = 0, an = null; me !== null && Oe < b.length; Oe++) {
        me.index > Oe ? (an = me, me = null) : an = me.sibling;
        var Xe = B(w, me, b[Oe], Q);
        if (Xe === null) {
          me === null && (me = an);
          break;
        }
        n && me && Xe.alternate === null && r(w, me), T = d(Xe, T, Oe), se === null ? pe = Xe : se.sibling = Xe, se = Xe, me = an;
      }
      if (Oe === b.length)
        return l(w, me), mt && cr(w, Oe), pe;
      if (me === null) {
        for (; Oe < b.length; Oe++)
          me = P(w, b[Oe], Q), me !== null && (T = d(me, T, Oe), se === null ? pe = me : se.sibling = me, se = me);
        return mt && cr(w, Oe), pe;
      }
      for (me = o(w, me); Oe < b.length; Oe++)
        an = ee(me, w, Oe, b[Oe], Q), an !== null && (n && an.alternate !== null && me.delete(an.key === null ? Oe : an.key), T = d(an, T, Oe), se === null ? pe = an : se.sibling = an, se = an);
      return n && me.forEach(function(Ni) {
        return r(w, Ni);
      }), mt && cr(w, Oe), pe;
    }
    function de(w, T, b, Q) {
      var pe = De(b);
      if (typeof pe != "function")
        throw Error(x(150));
      if (b = pe.call(b), b == null)
        throw Error(x(151));
      for (var se = pe = null, me = T, Oe = T = 0, an = null, Xe = b.next(); me !== null && !Xe.done; Oe++, Xe = b.next()) {
        me.index > Oe ? (an = me, me = null) : an = me.sibling;
        var Ni = B(w, me, Xe.value, Q);
        if (Ni === null) {
          me === null && (me = an);
          break;
        }
        n && me && Ni.alternate === null && r(w, me), T = d(Ni, T, Oe), se === null ? pe = Ni : se.sibling = Ni, se = Ni, me = an;
      }
      if (Xe.done)
        return l(
          w,
          me
        ), mt && cr(w, Oe), pe;
      if (me === null) {
        for (; !Xe.done; Oe++, Xe = b.next())
          Xe = P(w, Xe.value, Q), Xe !== null && (T = d(Xe, T, Oe), se === null ? pe = Xe : se.sibling = Xe, se = Xe);
        return mt && cr(w, Oe), pe;
      }
      for (me = o(w, me); !Xe.done; Oe++, Xe = b.next())
        Xe = ee(me, w, Oe, Xe.value, Q), Xe !== null && (n && Xe.alternate !== null && me.delete(Xe.key === null ? Oe : Xe.key), T = d(Xe, T, Oe), se === null ? pe = Xe : se.sibling = Xe, se = Xe);
      return n && me.forEach(function(hy) {
        return r(w, hy);
      }), mt && cr(w, Oe), pe;
    }
    function Ut(w, T, b, Q) {
      if (typeof b == "object" && b !== null && b.type === Be && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Ee:
            e: {
              for (var pe = b.key, se = T; se !== null; ) {
                if (se.key === pe) {
                  if (pe = b.type, pe === Be) {
                    if (se.tag === 7) {
                      l(w, se.sibling), T = c(se, b.props.children), T.return = w, w = T;
                      break e;
                    }
                  } else if (se.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === Dt && Rv(pe) === se.type) {
                    l(w, se.sibling), T = c(se, b.props), T.ref = eu(w, se, b), T.return = w, w = T;
                    break e;
                  }
                  l(w, se);
                  break;
                } else
                  r(w, se);
                se = se.sibling;
              }
              b.type === Be ? (T = Tl(b.props.children, w.mode, Q, b.key), T.return = w, w = T) : (Q = vc(b.type, b.key, b.props, null, w.mode, Q), Q.ref = eu(w, T, b), Q.return = w, w = Q);
            }
            return h(w);
          case nt:
            e: {
              for (se = b.key; T !== null; ) {
                if (T.key === se)
                  if (T.tag === 4 && T.stateNode.containerInfo === b.containerInfo && T.stateNode.implementation === b.implementation) {
                    l(w, T.sibling), T = c(T, b.children || []), T.return = w, w = T;
                    break e;
                  } else {
                    l(w, T);
                    break;
                  }
                else
                  r(w, T);
                T = T.sibling;
              }
              T = Rl(b, w.mode, Q), T.return = w, w = T;
            }
            return h(w);
          case Dt:
            return se = b._init, Ut(w, T, se(b._payload), Q);
        }
        if ($i(b))
          return oe(w, T, b, Q);
        if (De(b))
          return de(w, T, b, Q);
        As(w, b);
      }
      return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, T !== null && T.tag === 6 ? (l(w, T.sibling), T = c(T, b), T.return = w, w = T) : (l(w, T), T = zo(b, w.mode, Q), T.return = w, w = T), h(w)) : l(w, T);
    }
    return Ut;
  }
  var tu = xv(!0), wv = xv(!1), mo = {}, aa = ze(mo), yo = ze(mo), nu = ze(mo);
  function il(n) {
    if (n === mo)
      throw Error(x(174));
    return n;
  }
  function Gf(n, r) {
    switch (et(nu, r), et(yo, n), et(aa, mo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : $n(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = $n(r, n);
    }
    Je(aa), et(aa, r);
  }
  function wi() {
    Je(aa), Je(yo), Je(nu);
  }
  function Re(n) {
    il(nu.current);
    var r = il(aa.current), l = $n(r, n.type);
    r !== l && (et(yo, n), et(aa, l));
  }
  function Ve(n) {
    yo.current === n && (Je(aa), Je(yo));
  }
  var xe = ze(0);
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
  function Hs() {
    for (var n = 0; n < zr.length; n++)
      zr[n]._workInProgressVersionPrimary = null;
    zr.length = 0;
  }
  var Fs = he.ReactCurrentDispatcher, Wf = he.ReactCurrentBatchConfig, ll = 0, yt = null, z = null, Ie = null, we = !1, ma = !1, pr = 0, ul = 0;
  function gt() {
    throw Error(x(321));
  }
  function ol(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!br(n[l], r[l]))
        return !1;
    return !0;
  }
  function Di(n, r, l, o, c, d) {
    if (ll = d, yt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Fs.current = n === null || n.memoizedState === null ? Km : Zm, n = l(o, c), ma) {
      d = 0;
      do {
        if (ma = !1, pr = 0, 25 <= d)
          throw Error(x(301));
        d += 1, Ie = z = null, r.updateQueue = null, Fs.current = qf, n = l(o, c);
      } while (ma);
    }
    if (Fs.current = ec, r = z !== null && z.next !== null, ll = 0, Ie = z = yt = null, we = !1, r)
      throw Error(x(300));
    return n;
  }
  function sl() {
    var n = pr !== 0;
    return pr = 0, n;
  }
  function Ur() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ie === null ? yt.memoizedState = Ie = n : Ie = Ie.next = n, Ie;
  }
  function Kn() {
    if (z === null) {
      var n = yt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = z.next;
    var r = Ie === null ? yt.memoizedState : Ie.next;
    if (r !== null)
      Ie = r, z = n;
    else {
      if (n === null)
        throw Error(x(310));
      z = n, n = { memoizedState: z.memoizedState, baseState: z.baseState, baseQueue: z.baseQueue, queue: z.queue, next: null }, Ie === null ? yt.memoizedState = Ie = n : Ie = Ie.next = n;
    }
    return Ie;
  }
  function cl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function go(n) {
    var r = Kn(), l = r.queue;
    if (l === null)
      throw Error(x(311));
    l.lastRenderedReducer = n;
    var o = z, c = o.baseQueue, d = l.pending;
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
        if ((ll & j) === j)
          C !== null && (C = C.next = { lane: 0, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }), o = M.hasEagerState ? M.eagerState : n(o, M.action);
        else {
          var P = {
            lane: j,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          };
          C === null ? (S = C = P, h = o) : C = C.next = P, yt.lanes |= j, $a |= j;
        }
        M = M.next;
      } while (M !== null && M !== d);
      C === null ? h = o : C.next = S, br(o, r.memoizedState) || (jt = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = C, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, yt.lanes |= d, $a |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function So(n) {
    var r = Kn(), l = r.queue;
    if (l === null)
      throw Error(x(311));
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
  function Vs() {
  }
  function Bs(n, r) {
    var l = yt, o = Kn(), c = r(), d = !br(o.memoizedState, c);
    if (d && (o.memoizedState = c, jt = !0), o = o.queue, Co(Ys.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Ie !== null && Ie.memoizedState.tag & 1) {
      if (l.flags |= 2048, fl(9, Ps.bind(null, l, o, c, r), void 0, null), xt === null)
        throw Error(x(349));
      ll & 30 || js(l, r, c);
    }
    return c;
  }
  function js(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = yt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, yt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Ps(n, r, l, o) {
    r.value = l, r.getSnapshot = o, $s(r) && Qs(n);
  }
  function Ys(n, r, l) {
    return l(function() {
      $s(r) && Qs(n);
    });
  }
  function $s(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !br(n, l);
    } catch {
      return !0;
    }
  }
  function Qs(n) {
    var r = Va(n, 1);
    r !== null && Dn(r, n, 1, -1);
  }
  function Is(n) {
    var r = Ur();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cl, lastRenderedState: n }, r.queue = n, n = n.dispatch = Js.bind(null, yt, n), [r.memoizedState, n];
  }
  function fl(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = yt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, yt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Gs() {
    return Kn().memoizedState;
  }
  function dl(n, r, l, o) {
    var c = Ur();
    yt.flags |= n, c.memoizedState = fl(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function ja(n, r, l, o) {
    var c = Kn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (z !== null) {
      var h = z.memoizedState;
      if (d = h.destroy, o !== null && ol(o, h.deps)) {
        c.memoizedState = fl(r, l, d, o);
        return;
      }
    }
    yt.flags |= n, c.memoizedState = fl(1 | r, l, d, o);
  }
  function Ws(n, r) {
    return dl(8390656, 8, n, r);
  }
  function Co(n, r) {
    return ja(2048, 8, n, r);
  }
  function Xs(n, r) {
    return ja(4, 2, n, r);
  }
  function qs(n, r) {
    return ja(4, 4, n, r);
  }
  function Xf(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function ru(n, r, l) {
    return l = l != null ? l.concat([n]) : null, ja(4, 4, Xf.bind(null, r, n), l);
  }
  function Ks() {
  }
  function au(n, r) {
    var l = Kn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && ol(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function ki(n, r) {
    var l = Kn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && ol(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Zn(n, r, l) {
    return ll & 21 ? (br(l, r) || (l = us(), yt.lanes |= l, $a |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, jt = !0), n.memoizedState = l);
  }
  function qm(n, r) {
    var l = at;
    at = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Wf.transition;
    Wf.transition = {};
    try {
      n(!1), r();
    } finally {
      at = l, Wf.transition = o;
    }
  }
  function pt() {
    return Kn().memoizedState;
  }
  function Zs(n, r, l) {
    var o = Pt(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, iu(n))
      Eo(r, l);
    else if (l = gv(n, r, l, o), l !== null) {
      var c = wn();
      Dn(l, n, o, c), Dv(l, r, o);
    }
  }
  function Js(n, r, l) {
    var o = Pt(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (iu(n))
      Eo(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var h = r.lastRenderedState, S = d(h, l);
          if (c.hasEagerState = !0, c.eagerState = S, br(S, h)) {
            var C = r.interleaved;
            C === null ? (c.next = c, Yf(r)) : (c.next = C.next, C.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = gv(n, r, c, o), l !== null && (c = wn(), Dn(l, n, o, c), Dv(l, r, o));
    }
  }
  function iu(n) {
    var r = n.alternate;
    return n === yt || r !== null && r === yt;
  }
  function Eo(n, r) {
    ma = we = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Dv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Iu(n, l);
    }
  }
  var ec = { readContext: zt, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, Km = { readContext: zt, useCallback: function(n, r) {
    return Ur().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: zt, useEffect: Ws, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, dl(
      4194308,
      4,
      Xf.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return dl(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return dl(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Ur();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Ur();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Zs.bind(null, yt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Ur();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Is, useDebugValue: Ks, useDeferredValue: function(n) {
    return Ur().memoizedState = n;
  }, useTransition: function() {
    var n = Is(!1), r = n[0];
    return n = qm.bind(null, n[1]), Ur().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = yt, c = Ur();
    if (mt) {
      if (l === void 0)
        throw Error(x(407));
      l = l();
    } else {
      if (l = r(), xt === null)
        throw Error(x(349));
      ll & 30 || js(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Ws(Ys.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, fl(9, Ps.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Ur(), r = xt.identifierPrefix;
    if (mt) {
      var l = Fa, o = un;
      l = (o & ~(1 << 32 - wr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = pr++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = ul++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Zm = {
    readContext: zt,
    useCallback: au,
    useContext: zt,
    useEffect: Co,
    useImperativeHandle: ru,
    useInsertionEffect: Xs,
    useLayoutEffect: qs,
    useMemo: ki,
    useReducer: go,
    useRef: Gs,
    useState: function() {
      return go(cl);
    },
    useDebugValue: Ks,
    useDeferredValue: function(n) {
      var r = Kn();
      return Zn(r, z.memoizedState, n);
    },
    useTransition: function() {
      var n = go(cl)[0], r = Kn().memoizedState;
      return [n, r];
    },
    useMutableSource: Vs,
    useSyncExternalStore: Bs,
    useId: pt,
    unstable_isNewReconciler: !1
  }, qf = { readContext: zt, useCallback: au, useContext: zt, useEffect: Co, useImperativeHandle: ru, useInsertionEffect: Xs, useLayoutEffect: qs, useMemo: ki, useReducer: So, useRef: Gs, useState: function() {
    return So(cl);
  }, useDebugValue: Ks, useDeferredValue: function(n) {
    var r = Kn();
    return z === null ? r.memoizedState = n : Zn(r, z.memoizedState, n);
  }, useTransition: function() {
    var n = So(cl)[0], r = Kn().memoizedState;
    return [n, r];
  }, useMutableSource: Vs, useSyncExternalStore: Bs, useId: pt, unstable_isNewReconciler: !1 };
  function lu(n, r) {
    try {
      var l = "", o = r;
      do
        l += ai(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function To(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function tc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Jm = typeof WeakMap == "function" ? WeakMap : Map;
  function kv(n, r, l) {
    l = Ba(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      oc || (oc = !0, yl = o), tc(n, r);
    }, l;
  }
  function Ro(n, r, l) {
    l = Ba(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        tc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      tc(n, r), typeof o != "function" && (Sa === null ? Sa = /* @__PURE__ */ new Set([this]) : Sa.add(this));
      var h = r.stack;
      this.componentDidCatch(r.value, { componentStack: h !== null ? h : "" });
    }), l;
  }
  function bv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Jm();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = ly.bind(null, n, r, l), r.then(n, n));
  }
  function Kf(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Zf(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Ba(-1, 1), r.tag = 2, Ri(l, r, 1))), l.lanes |= 1), n);
  }
  var ey = he.ReactCurrentOwner, jt = !1;
  function Gt(n, r, l, o) {
    r.child = n === null ? wv(r, null, l, o) : tu(r, n.child, l, o);
  }
  function bi(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return W(r, c), o = Di(n, r, l, o, d, c), l = sl(), n !== null && !jt ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, sn(n, r, c)) : (mt && l && ks(r), r.flags |= 1, Gt(n, r, o, c), r.child);
  }
  function nc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !yd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Jn(n, r, d, o, c)) : (n = vc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var h = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ro, l(h, o) && n.ref === r.ref)
        return sn(n, r, c);
    }
    return r.flags |= 1, n = Li(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Jn(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ro(d, o) && n.ref === r.ref)
        if (jt = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (jt = !0);
        else
          return r.lanes = n.lanes, sn(n, r, c);
    }
    return uu(n, r, l, o, c);
  }
  function pl(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, et(pu, vr), vr |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, et(pu, vr), vr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, et(pu, vr), vr |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, et(pu, vr), vr |= o;
    return Gt(n, r, c, l), r.child;
  }
  function Ue(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function uu(n, r, l, o, c) {
    var d = Ct(l) ? In : _e.current;
    return d = Or(r, d), W(r, c), l = Di(n, r, l, o, d, c), o = sl(), n !== null && !jt ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, sn(n, r, c)) : (mt && o && ks(r), r.flags |= 1, Gt(n, r, l, c), r.child);
  }
  function Jf(n, r, l, o, c) {
    if (Ct(l)) {
      var d = !0;
      Ds(r);
    } else
      d = !1;
    if (W(r, c), r.stateNode === null)
      Tn(n, r), Ev(r, l, o), Us(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, S = r.memoizedProps;
      h.props = S;
      var C = h.context, M = l.contextType;
      typeof M == "object" && M !== null ? M = zt(M) : (M = Ct(l) ? In : _e.current, M = Or(r, M));
      var j = l.getDerivedStateFromProps, P = typeof j == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      P || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== o || C !== M) && Tv(r, h, o, M), Ti = !1;
      var B = r.memoizedState;
      h.state = B, xi(r, o, h, c), C = r.memoizedState, S !== o || B !== C || Ot.current || Ti ? (typeof j == "function" && (If(r, l, j, o), C = r.memoizedState), (S = Ti || Cv(r, l, S, o, B, C, M)) ? (P || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = C), h.props = o, h.state = C, h.context = M, o = S) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, It(n, r), S = r.memoizedProps, M = r.type === r.elementType ? S : dr(r.type, S), h.props = M, P = r.pendingProps, B = h.context, C = l.contextType, typeof C == "object" && C !== null ? C = zt(C) : (C = Ct(l) ? In : _e.current, C = Or(r, C));
      var ee = l.getDerivedStateFromProps;
      (j = typeof ee == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== P || B !== C) && Tv(r, h, o, C), Ti = !1, B = r.memoizedState, h.state = B, xi(r, o, h, c);
      var oe = r.memoizedState;
      S !== P || B !== oe || Ot.current || Ti ? (typeof ee == "function" && (If(r, l, ee, o), oe = r.memoizedState), (M = Ti || Cv(r, l, M, o, B, oe, C) || !1) ? (j || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, oe, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, oe, C)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && B === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && B === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = oe), h.props = o, h.state = oe, h.context = C, o = M) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && B === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && B === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return _v(n, r, l, o, d, c);
  }
  function _v(n, r, l, o, c, d) {
    Ue(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h)
      return c && vv(r, l, !1), sn(n, r, d);
    o = r.stateNode, ey.current = r;
    var S = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = tu(r, n.child, null, d), r.child = tu(r, null, S, d)) : Gt(n, r, S, d), r.memoizedState = o.state, c && vv(r, l, !0), r.child;
  }
  function Ov(n) {
    var r = n.stateNode;
    r.pendingContext ? gi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && gi(n, r.context, !1), Gf(n, r.containerInfo);
  }
  function rc(n, r, l, o, c) {
    return Tt(), Bf(c), r.flags |= 256, Gt(n, r, l, o), r.child;
  }
  var vl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ed(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function td(n, r, l) {
    var o = r.pendingProps, c = xe.current, d = !1, h = (r.flags & 128) !== 0, S;
    if ((S = h) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), et(xe, c & 1), n === null)
      return _s(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = No(h, o, 0, null), n = Tl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = ed(l), r.memoizedState = vl, n) : nd(r, h));
    if (c = n.memoizedState, c !== null && (S = c.dehydrated, S !== null))
      return ty(n, r, h, o, S, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, S = c.sibling;
      var C = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = C, r.deletions = null) : (o = Li(c, C), o.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? d = Li(S, d) : (d = Tl(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? ed(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = vl, o;
    }
    return d = n.child, n = d.sibling, o = Li(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function nd(n, r) {
    return r = No({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ou(n, r, l, o) {
    return o !== null && Bf(o), tu(r, n.child, null, l), n = nd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ty(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = To(Error(x(422))), ou(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = No({ mode: "visible", children: o.children }, c, 0, null), d = Tl(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && tu(r, n.child, null, h), r.child.memoizedState = ed(h), r.memoizedState = vl, d);
    if (!(r.mode & 1))
      return ou(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var S = o.dgst;
      return o = S, d = Error(x(419)), o = To(d, o, void 0), ou(n, r, h, o);
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
        c = c & (o.suspendedLanes | h) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Va(n, c), Dn(o, n, c, -1));
      }
      return vd(), o = To(Error(x(421))), ou(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = uy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, qn = ra(c.nextSibling), fr = r, mt = !0, Nr = null, n !== null && (Xn[En++] = un, Xn[En++] = Fa, Xn[En++] = Lr, un = n.id, Fa = n.overflow, Lr = r), r = nd(r, o.children), r.flags |= 4096, r);
  }
  function rd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), tn(n.return, r, l);
  }
  function ac(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function ad(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Gt(n, r, o.children, l), o = xe.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && rd(n, l, r);
            else if (n.tag === 19)
              rd(n, l, r);
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
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), ac(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Rt(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          ac(r, !0, l, null, d);
          break;
        case "together":
          ac(r, !1, null, null, void 0);
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
    if (n !== null && (r.dependencies = n.dependencies), $a |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(x(153));
    if (r.child !== null) {
      for (n = r.child, l = Li(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Li(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Pa(n, r, l) {
    switch (r.tag) {
      case 3:
        Ov(r), Tt();
        break;
      case 5:
        Re(r);
        break;
      case 1:
        Ct(r.type) && Ds(r);
        break;
      case 4:
        Gf(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        et(ha, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (et(xe, xe.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? td(n, r, l) : (et(xe, xe.current & 1), n = sn(n, r, l), n !== null ? n.sibling : null);
        et(xe, xe.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return ad(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), et(xe, xe.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, pl(n, r, l);
    }
    return sn(n, r, l);
  }
  var xo, hl, Ar, Wt;
  xo = function(n, r) {
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
  }, hl = function() {
  }, Ar = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, il(aa.current);
      var d = null;
      switch (l) {
        case "input":
          c = Yn(n, c), o = Yn(n, o), d = [];
          break;
        case "select":
          c = ae({}, c, { value: void 0 }), o = ae({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Qi(n, c), o = Qi(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = ws);
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
            M !== "dangerouslySetInnerHTML" && M !== "children" && M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && M !== "autoFocus" && (Fe.hasOwnProperty(M) ? d || (d = []) : (d = d || []).push(M, null));
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
            M === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, S = S ? S.__html : void 0, C != null && S !== C && (d = d || []).push(M, C)) : M === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(M, "" + C) : M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && (Fe.hasOwnProperty(M) ? (C != null && M === "onScroll" && dt("scroll", n), d || S === C || (d = [])) : (d = d || []).push(M, C));
      }
      l && (d = d || []).push("style", l);
      var M = d;
      (r.updateQueue = M) && (r.flags |= 4);
    }
  }, Wt = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function wo(n, r) {
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
    switch (Ff(r), r.tag) {
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
        return o = r.stateNode, wi(), Je(Ot), Je(_e), Hs(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Os(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Nr !== null && (Lo(Nr), Nr = null))), hl(n, r), Rn(r), null;
      case 5:
        Ve(r);
        var c = il(nu.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Ar(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(x(166));
            return Rn(r), null;
          }
          if (n = il(aa.current), Os(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[pa] = r, o[nl] = d, n = (r.mode & 1) !== 0, l) {
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
                for (c = 0; c < uo.length; c++)
                  dt(uo[c], o);
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
                h === "children" ? typeof S == "string" ? o.textContent !== S && (d.suppressHydrationWarning !== !0 && xs(o.textContent, S, n), c = ["children", S]) : typeof S == "number" && o.textContent !== "" + S && (d.suppressHydrationWarning !== !0 && xs(
                  o.textContent,
                  S,
                  n
                ), c = ["children", "" + S]) : Fe.hasOwnProperty(h) && S != null && h === "onScroll" && dt("scroll", o);
              }
            switch (l) {
              case "input":
                Tr(o), ba(o, d, !0);
                break;
              case "textarea":
                Tr(o), ca(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = ws);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = oi(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[pa] = r, n[nl] = o, xo(n, r, !1, !1), r.stateNode = n;
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
                  for (c = 0; c < uo.length; c++)
                    dt(uo[c], n);
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
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ae({}, o, { value: void 0 }), dt("invalid", n);
                  break;
                case "textarea":
                  Xr(n, o), c = Qi(n, o), dt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Sn(l, c), S = c;
              for (d in S)
                if (S.hasOwnProperty(d)) {
                  var C = S[d];
                  d === "style" ? ct(n, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && ju(n, C)) : d === "children" ? typeof C == "string" ? (l !== "textarea" || C !== "") && si(n, C) : typeof C == "number" && si(n, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Fe.hasOwnProperty(d) ? C != null && d === "onScroll" && dt("scroll", n) : C != null && $(n, d, C, h));
                }
              switch (l) {
                case "input":
                  Tr(n), ba(n, o, !1);
                  break;
                case "textarea":
                  Tr(n), ca(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Gr(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? li(n, !!o.multiple, d, !1) : o.defaultValue != null && li(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = ws);
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
            throw Error(x(166));
          if (l = il(nu.current), il(aa.current), Os(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[pa] = r, (d = o.nodeValue !== l) && (n = fr, n !== null))
              switch (n.tag) {
                case 3:
                  xs(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && xs(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[pa] = r, r.stateNode = o;
        }
        return Rn(r), null;
      case 13:
        if (Je(xe), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (mt && qn !== null && r.mode & 1 && !(r.flags & 128))
            yv(), Tt(), r.flags |= 98560, d = !1;
          else if (d = Os(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(x(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(x(317));
              d[pa] = r;
            } else
              Tt(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Rn(r), d = !1;
          } else
            Nr !== null && (Lo(Nr), Nr = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || xe.current & 1 ? qt === 0 && (qt = 3) : vd())), r.updateQueue !== null && (r.flags |= 4), Rn(r), null);
      case 4:
        return wi(), hl(n, r), n === null && Kl(r.stateNode.containerInfo), Rn(r), null;
      case 10:
        return Ei(r.type._context), Rn(r), null;
      case 17:
        return Ct(r.type) && Mr(), Rn(r), null;
      case 19:
        if (Je(xe), d = r.memoizedState, d === null)
          return Rn(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null)
          if (o)
            wo(d, !1);
          else {
            if (qt !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (h = Rt(n), h !== null) {
                  for (r.flags |= 128, wo(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return et(xe, xe.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && _t() > hu && (r.flags |= 128, o = !0, wo(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = Rt(h), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), wo(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !mt)
                return Rn(r), null;
            } else
              2 * _t() - d.renderingStartTime > hu && l !== 1073741824 && (r.flags |= 128, o = !0, wo(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = _t(), r.sibling = null, l = xe.current, et(xe, o ? l & 1 | 2 : l & 1), r) : (Rn(r), null);
      case 22:
      case 23:
        return pd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? vr & 1073741824 && (Rn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Rn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(x(156, r.tag));
  }
  function id(n, r) {
    switch (Ff(r), r.tag) {
      case 1:
        return Ct(r.type) && Mr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return wi(), Je(Ot), Je(_e), Hs(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ve(r), null;
      case 13:
        if (Je(xe), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(x(340));
          Tt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Je(xe), null;
      case 4:
        return wi(), null;
      case 10:
        return Ei(r.type._context), null;
      case 22:
      case 23:
        return pd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Do = !1, Xt = !1, Mv = typeof WeakSet == "function" ? WeakSet : Set, ie = null;
  function su(n, r) {
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
  function ko(n, r, l) {
    try {
      l();
    } catch (o) {
      Lt(n, r, o);
    }
  }
  var Lv = !1;
  function Nv(n, r) {
    if (Of = Xi, n = Ss(), za(n)) {
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
    for (el = { focusedElem: n, selectionRange: l }, Xi = !1, ie = r; ie !== null; )
      if (r = ie, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, ie = n;
      else
        for (; ie !== null; ) {
          r = ie;
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
                    var de = oe.memoizedProps, Ut = oe.memoizedState, w = r.stateNode, T = w.getSnapshotBeforeUpdate(r.elementType === r.type ? de : dr(r.type, de), Ut);
                    w.__reactInternalSnapshotBeforeUpdate = T;
                  }
                  break;
                case 3:
                  var b = r.stateNode.containerInfo;
                  b.nodeType === 1 ? b.textContent = "" : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(x(163));
              }
          } catch (Q) {
            Lt(r, r.return, Q);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, ie = n;
            break;
          }
          ie = r.return;
        }
    return oe = Lv, Lv = !1, oe;
  }
  function bo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && ko(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function _o(n, r) {
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
  function ld(n) {
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
  function ud(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, ud(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[pa], delete r[nl], delete r[Nf], delete r[Xm], delete r[zf])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function zv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ic(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || zv(n.return))
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
  function cu(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = ws));
    else if (o !== 4 && (n = n.child, n !== null))
      for (cu(n, r, l), n = n.sibling; n !== null; )
        cu(n, r, l), n = n.sibling;
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
      fu(n, r, l), l = l.sibling;
  }
  function fu(n, r, l) {
    if (Zr && typeof Zr.onCommitFiberUnmount == "function")
      try {
        Zr.onCommitFiberUnmount(Qu, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        Xt || su(l, r);
      case 6:
        var o = Et, c = nn;
        Et = null, Hr(n, r, l), Et = o, nn = c, Et !== null && (nn ? (n = Et, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Et.removeChild(l.stateNode));
        break;
      case 18:
        Et !== null && (nn ? (n = Et, l = l.stateNode, n.nodeType === 8 ? hi(n.parentNode, l) : n.nodeType === 1 && hi(n, l), qu(n)) : hi(Et, l.stateNode));
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
            d = d.tag, h !== void 0 && (d & 2 || d & 4) && ko(l, r, h), c = c.next;
          } while (c !== o);
        }
        Hr(n, r, l);
        break;
      case 1:
        if (!Xt && (su(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
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
  function Ya(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Mv()), r.forEach(function(o) {
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
            throw Error(x(160));
          fu(d, h, c), Et = null, nn = !1;
          var C = c.alternate;
          C !== null && (C.return = null), c.return = null;
        } catch (M) {
          Lt(c, r, M);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Uv(r, n), r = r.sibling;
  }
  function Uv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ia(r, n), ga(n), o & 4) {
          try {
            bo(3, n, n.return), _o(3, n);
          } catch (de) {
            Lt(n, n.return, de);
          }
          try {
            bo(5, n, n.return);
          } catch (de) {
            Lt(n, n.return, de);
          }
        }
        break;
      case 1:
        ia(r, n), ga(n), o & 512 && l !== null && su(l, l.return);
        break;
      case 5:
        if (ia(r, n), ga(n), o & 512 && l !== null && su(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            si(c, "");
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
                j === "style" ? ct(c, P) : j === "dangerouslySetInnerHTML" ? ju(c, P) : j === "children" ? si(c, P) : $(c, j, P, M);
              }
              switch (S) {
                case "input":
                  ur(c, d);
                  break;
                case "textarea":
                  ui(c, d);
                  break;
                case "select":
                  var B = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var ee = d.value;
                  ee != null ? li(c, !!d.multiple, ee, !1) : B !== !!d.multiple && (d.defaultValue != null ? li(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : li(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[nl] = d;
            } catch (de) {
              Lt(n, n.return, de);
            }
        }
        break;
      case 6:
        if (ia(r, n), ga(n), o & 4) {
          if (n.stateNode === null)
            throw Error(x(162));
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
        ia(r, n), ga(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (cd = _t())), o & 4 && Ya(n);
        break;
      case 22:
        if (j = l !== null && l.memoizedState !== null, n.mode & 1 ? (Xt = (M = Xt) || j, ia(r, n), Xt = M) : ia(r, n), ga(n), o & 8192) {
          if (M = n.memoizedState !== null, (n.stateNode.isHidden = M) && !j && n.mode & 1)
            for (ie = n, j = n.child; j !== null; ) {
              for (P = ie = j; ie !== null; ) {
                switch (B = ie, ee = B.child, B.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    bo(4, B, B.return);
                    break;
                  case 1:
                    su(B, B.return);
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
                    su(B, B.return);
                    break;
                  case 22:
                    if (B.memoizedState !== null) {
                      od(P);
                      continue;
                    }
                }
                ee !== null ? (ee.return = B, ie = ee) : od(P);
              }
              j = j.sibling;
            }
          e:
            for (j = null, P = n; ; ) {
              if (P.tag === 5) {
                if (j === null) {
                  j = P;
                  try {
                    c = P.stateNode, M ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (S = P.stateNode, C = P.memoizedProps.style, h = C != null && C.hasOwnProperty("display") ? C.display : null, S.style.display = je("display", h));
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
        ia(r, n), ga(n), o & 4 && Ya(n);
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
            if (zv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(x(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (si(c, ""), o.flags &= -33);
            var d = ic(n);
            ya(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, S = ic(n);
            cu(n, S, h);
            break;
          default:
            throw Error(x(161));
        }
      } catch (C) {
        Lt(n, n.return, C);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Av(n, r, l) {
    ie = n, du(n);
  }
  function du(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ie !== null; ) {
      var c = ie, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || Do;
        if (!h) {
          var S = c.alternate, C = S !== null && S.memoizedState !== null || Xt;
          S = Do;
          var M = Xt;
          if (Do = h, (Xt = C) && !M)
            for (ie = c; ie !== null; )
              h = ie, C = h.child, h.tag === 22 && h.memoizedState !== null ? Fv(c) : C !== null ? (C.return = h, ie = C) : Fv(c);
          for (; d !== null; )
            ie = d, du(d), d = d.sibling;
          ie = c, Do = S, Xt = M;
        }
        Hv(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, ie = d) : Hv(n);
    }
  }
  function Hv(n) {
    for (; ie !== null; ) {
      var r = ie;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Xt || _o(5, r);
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
                d !== null && al(r, d, o);
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
                  al(r, h, l);
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
                throw Error(x(163));
            }
          Xt || r.flags & 512 && ld(r);
        } catch (B) {
          Lt(r, r.return, B);
        }
      }
      if (r === n) {
        ie = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ie = l;
        break;
      }
      ie = r.return;
    }
  }
  function od(n) {
    for (; ie !== null; ) {
      var r = ie;
      if (r === n) {
        ie = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ie = l;
        break;
      }
      ie = r.return;
    }
  }
  function Fv(n) {
    for (; ie !== null; ) {
      var r = ie;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              _o(4, r);
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
              ld(r);
            } catch (C) {
              Lt(r, d, C);
            }
            break;
          case 5:
            var h = r.return;
            try {
              ld(r);
            } catch (C) {
              Lt(r, h, C);
            }
        }
      } catch (C) {
        Lt(r, r.return, C);
      }
      if (r === n) {
        ie = null;
        break;
      }
      var S = r.sibling;
      if (S !== null) {
        S.return = r.return, ie = S;
        break;
      }
      ie = r.return;
    }
  }
  var lc = Math.ceil, Oo = he.ReactCurrentDispatcher, sd = he.ReactCurrentOwner, xn = he.ReactCurrentBatchConfig, Ye = 0, xt = null, Mt = null, rn = 0, vr = 0, pu = ze(0), qt = 0, Mo = null, $a = 0, uc = 0, vu = 0, ml = null, Mn = null, cd = 0, hu = 1 / 0, Qa = null, oc = !1, yl = null, Sa = null, _i = !1, Oi = null, sc = 0, mu = 0, cc = null, gl = -1, Sl = 0;
  function wn() {
    return Ye & 6 ? _t() : gl !== -1 ? gl : gl = _t();
  }
  function Pt(n) {
    return n.mode & 1 ? Ye & 2 && rn !== 0 ? rn & -rn : Ms.transition !== null ? (Sl === 0 && (Sl = us()), Sl) : (n = at, n !== 0 || (n = window.event, n = n === void 0 ? 16 : cf(n.type)), n) : 1;
  }
  function Dn(n, r, l, o) {
    if (50 < mu)
      throw mu = 0, cc = null, Error(x(185));
    Wi(n, l, o), (!(Ye & 2) || n !== xt) && (n === xt && (!(Ye & 2) && (uc |= l), qt === 4 && Fr(n, rn)), kn(n, o), l === 1 && Ye === 0 && !(r.mode & 1) && (hu = _t() + 500, en && Gn()));
  }
  function kn(n, r) {
    var l = n.callbackNode;
    ls(n, r);
    var o = Jr(n, n === xt ? rn : 0);
    if (o === 0)
      l !== null && wp(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && wp(l), r === 1)
        n.tag === 0 ? Af(Vv.bind(null, n)) : Uf(Vv.bind(null, n)), Lf(function() {
          !(Ye & 6) && Gn();
        }), l = null;
      else {
        switch (uf(o)) {
          case 1:
            l = Oa;
            break;
          case 4:
            l = Pe;
            break;
          case 16:
            l = ci;
            break;
          case 536870912:
            l = nf;
            break;
          default:
            l = ci;
        }
        l = md(l, yu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function yu(n, r) {
    if (gl = -1, Sl = 0, Ye & 6)
      throw Error(x(327));
    var l = n.callbackNode;
    if (Su() && n.callbackNode !== l)
      return null;
    var o = Jr(n, n === xt ? rn : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = dc(n, o);
    else {
      r = o;
      var c = Ye;
      Ye |= 2;
      var d = fc();
      (xt !== n || rn !== r) && (Qa = null, hu = _t() + 500, Cl(n, r));
      do
        try {
          ay();
          break;
        } catch (S) {
          Bv(n, S);
        }
      while (!0);
      Pf(), Oo.current = d, Ye = c, Mt !== null ? r = 0 : (xt = null, rn = 0, r = qt);
    }
    if (r !== 0) {
      if (r === 2 && (c = af(n), c !== 0 && (o = c, r = fd(n, c))), r === 1)
        throw l = Mo, Cl(n, 0), Fr(n, o), kn(n, _t()), l;
      if (r === 6)
        Fr(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !dd(c) && (r = dc(n, o), r === 2 && (d = af(n), d !== 0 && (o = d, r = fd(n, d))), r === 1))
          throw l = Mo, Cl(n, 0), Fr(n, o), kn(n, _t()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(x(345));
          case 2:
            El(n, Mn, Qa);
            break;
          case 3:
            if (Fr(n, o), (o & 130023424) === o && (r = cd + 500 - _t(), 10 < r)) {
              if (Jr(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                wn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = tl(El.bind(null, n, Mn, Qa), r);
              break;
            }
            El(n, Mn, Qa);
            break;
          case 4:
            if (Fr(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - wr(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = _t() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * lc(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = tl(El.bind(null, n, Mn, Qa), o);
              break;
            }
            El(n, Mn, Qa);
            break;
          case 5:
            El(n, Mn, Qa);
            break;
          default:
            throw Error(x(329));
        }
      }
    }
    return kn(n, _t()), n.callbackNode === l ? yu.bind(null, n) : null;
  }
  function fd(n, r) {
    var l = ml;
    return n.current.memoizedState.isDehydrated && (Cl(n, r).flags |= 256), n = dc(n, r), n !== 2 && (r = Mn, Mn = l, r !== null && Lo(r)), n;
  }
  function Lo(n) {
    Mn === null ? Mn = n : Mn.push.apply(Mn, n);
  }
  function dd(n) {
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
    for (r &= ~vu, r &= ~uc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - wr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Vv(n) {
    if (Ye & 6)
      throw Error(x(327));
    Su();
    var r = Jr(n, 0);
    if (!(r & 1))
      return kn(n, _t()), null;
    var l = dc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = af(n);
      o !== 0 && (r = o, l = fd(n, o));
    }
    if (l === 1)
      throw l = Mo, Cl(n, 0), Fr(n, r), kn(n, _t()), l;
    if (l === 6)
      throw Error(x(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, El(n, Mn, Qa), kn(n, _t()), null;
  }
  function gu(n, r) {
    var l = Ye;
    Ye |= 1;
    try {
      return n(r);
    } finally {
      Ye = l, Ye === 0 && (hu = _t() + 500, en && Gn());
    }
  }
  function Mi(n) {
    Oi !== null && Oi.tag === 0 && !(Ye & 6) && Su();
    var r = Ye;
    Ye |= 1;
    var l = xn.transition, o = at;
    try {
      if (xn.transition = null, at = 1, n)
        return n();
    } finally {
      at = o, xn.transition = l, Ye = r, !(Ye & 6) && Gn();
    }
  }
  function pd() {
    vr = pu.current, Je(pu);
  }
  function Cl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, pv(l)), Mt !== null)
      for (l = Mt.return; l !== null; ) {
        var o = l;
        switch (Ff(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && Mr();
            break;
          case 3:
            wi(), Je(Ot), Je(_e), Hs();
            break;
          case 5:
            Ve(o);
            break;
          case 4:
            wi();
            break;
          case 13:
            Je(xe);
            break;
          case 19:
            Je(xe);
            break;
          case 10:
            Ei(o.type._context);
            break;
          case 22:
          case 23:
            pd();
        }
        l = l.return;
      }
    if (xt = n, Mt = n = Li(n.current, null), rn = vr = r, qt = 0, Mo = null, vu = uc = $a = 0, Mn = ml = null, on !== null) {
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
  function Bv(n, r) {
    do {
      var l = Mt;
      try {
        if (Pf(), Fs.current = ec, we) {
          for (var o = yt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          we = !1;
        }
        if (ll = 0, Ie = z = yt = null, ma = !1, pr = 0, sd.current = null, l === null || l.return === null) {
          qt = 1, Mo = r, Mt = null;
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
            var ee = Kf(h);
            if (ee !== null) {
              ee.flags &= -257, Zf(ee, h, S, d, r), ee.mode & 1 && bv(d, M, r), r = ee, C = M;
              var oe = r.updateQueue;
              if (oe === null) {
                var de = /* @__PURE__ */ new Set();
                de.add(C), r.updateQueue = de;
              } else
                oe.add(C);
              break e;
            } else {
              if (!(r & 1)) {
                bv(d, M, r), vd();
                break e;
              }
              C = Error(x(426));
            }
          } else if (mt && S.mode & 1) {
            var Ut = Kf(h);
            if (Ut !== null) {
              !(Ut.flags & 65536) && (Ut.flags |= 256), Zf(Ut, h, S, d, r), Bf(lu(C, S));
              break e;
            }
          }
          d = C = lu(C, S), qt !== 4 && (qt = 2), ml === null ? ml = [d] : ml.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var w = kv(d, C, r);
                Qf(d, w);
                break e;
              case 1:
                S = C;
                var T = d.type, b = d.stateNode;
                if (!(d.flags & 128) && (typeof T.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (Sa === null || !Sa.has(b)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var Q = Ro(d, S, r);
                  Qf(d, Q);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        hd(l);
      } catch (pe) {
        r = pe, Mt === l && l !== null && (Mt = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function fc() {
    var n = Oo.current;
    return Oo.current = ec, n === null ? ec : n;
  }
  function vd() {
    (qt === 0 || qt === 3 || qt === 2) && (qt = 4), xt === null || !($a & 268435455) && !(uc & 268435455) || Fr(xt, rn);
  }
  function dc(n, r) {
    var l = Ye;
    Ye |= 2;
    var o = fc();
    (xt !== n || rn !== r) && (Qa = null, Cl(n, r));
    do
      try {
        ry();
        break;
      } catch (c) {
        Bv(n, c);
      }
    while (!0);
    if (Pf(), Ye = l, Oo.current = o, Mt !== null)
      throw Error(x(261));
    return xt = null, rn = 0, qt;
  }
  function ry() {
    for (; Mt !== null; )
      jv(Mt);
  }
  function ay() {
    for (; Mt !== null && !km(); )
      jv(Mt);
  }
  function jv(n) {
    var r = Yv(n.alternate, n, vr);
    n.memoizedProps = n.pendingProps, r === null ? hd(n) : Mt = r, sd.current = null;
  }
  function hd(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = id(l, r), l !== null) {
          l.flags &= 32767, Mt = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          qt = 6, Mt = null;
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
    qt === 0 && (qt = 5);
  }
  function El(n, r, l) {
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
      Su();
    while (Oi !== null);
    if (Ye & 6)
      throw Error(x(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(x(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Mm(n, d), n === xt && (Mt = xt = null, rn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || _i || (_i = !0, md(ci, function() {
      return Su(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = xn.transition, xn.transition = null;
      var h = at;
      at = 1;
      var S = Ye;
      Ye |= 4, sd.current = null, Nv(n, l), Uv(l, n), Cs(el), Xi = !!Of, el = Of = null, n.current = l, Av(l), bm(), Ye = S, at = h, xn.transition = d;
    } else
      n.current = l;
    if (_i && (_i = !1, Oi = n, sc = c), d = n.pendingLanes, d === 0 && (Sa = null), kp(l.stateNode), kn(n, _t()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (oc)
      throw oc = !1, n = yl, yl = null, n;
    return sc & 1 && n.tag !== 0 && Su(), d = n.pendingLanes, d & 1 ? n === cc ? mu++ : (mu = 0, cc = n) : mu = 0, Gn(), null;
  }
  function Su() {
    if (Oi !== null) {
      var n = uf(sc), r = xn.transition, l = at;
      try {
        if (xn.transition = null, at = 16 > n ? 16 : n, Oi === null)
          var o = !1;
        else {
          if (n = Oi, Oi = null, sc = 0, Ye & 6)
            throw Error(x(331));
          var c = Ye;
          for (Ye |= 4, ie = n.current; ie !== null; ) {
            var d = ie, h = d.child;
            if (ie.flags & 16) {
              var S = d.deletions;
              if (S !== null) {
                for (var C = 0; C < S.length; C++) {
                  var M = S[C];
                  for (ie = M; ie !== null; ) {
                    var j = ie;
                    switch (j.tag) {
                      case 0:
                      case 11:
                      case 15:
                        bo(8, j, d);
                    }
                    var P = j.child;
                    if (P !== null)
                      P.return = j, ie = P;
                    else
                      for (; ie !== null; ) {
                        j = ie;
                        var B = j.sibling, ee = j.return;
                        if (ud(j), j === M) {
                          ie = null;
                          break;
                        }
                        if (B !== null) {
                          B.return = ee, ie = B;
                          break;
                        }
                        ie = ee;
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
                ie = d;
              }
            }
            if (d.subtreeFlags & 2064 && h !== null)
              h.return = d, ie = h;
            else
              e:
                for (; ie !== null; ) {
                  if (d = ie, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        bo(9, d, d.return);
                    }
                  var w = d.sibling;
                  if (w !== null) {
                    w.return = d.return, ie = w;
                    break e;
                  }
                  ie = d.return;
                }
          }
          var T = n.current;
          for (ie = T; ie !== null; ) {
            h = ie;
            var b = h.child;
            if (h.subtreeFlags & 2064 && b !== null)
              b.return = h, ie = b;
            else
              e:
                for (h = T; ie !== null; ) {
                  if (S = ie, S.flags & 2048)
                    try {
                      switch (S.tag) {
                        case 0:
                        case 11:
                        case 15:
                          _o(9, S);
                      }
                    } catch (pe) {
                      Lt(S, S.return, pe);
                    }
                  if (S === h) {
                    ie = null;
                    break e;
                  }
                  var Q = S.sibling;
                  if (Q !== null) {
                    Q.return = S.return, ie = Q;
                    break e;
                  }
                  ie = S.return;
                }
          }
          if (Ye = c, Gn(), Zr && typeof Zr.onPostCommitFiberRoot == "function")
            try {
              Zr.onPostCommitFiberRoot(Qu, n);
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
  function Pv(n, r, l) {
    r = lu(l, r), r = kv(n, r, 1), n = Ri(n, r, 1), r = wn(), n !== null && (Wi(n, 1, r), kn(n, r));
  }
  function Lt(n, r, l) {
    if (n.tag === 3)
      Pv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Pv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Sa === null || !Sa.has(o))) {
            n = lu(l, n), n = Ro(r, n, 1), r = Ri(r, n, 1), n = wn(), r !== null && (Wi(r, 1, n), kn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function ly(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = wn(), n.pingedLanes |= n.suspendedLanes & l, xt === n && (rn & l) === l && (qt === 4 || qt === 3 && (rn & 130023424) === rn && 500 > _t() - cd ? Cl(n, 0) : vu |= l), kn(n, r);
  }
  function pc(n, r) {
    r === 0 && (n.mode & 1 ? (r = jl, jl <<= 1, !(jl & 130023424) && (jl = 4194304)) : r = 1);
    var l = wn();
    n = Va(n, r), n !== null && (Wi(n, r, l), kn(n, l));
  }
  function uy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), pc(n, l);
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
        throw Error(x(314));
    }
    o !== null && o.delete(r), pc(n, l);
  }
  var Yv;
  Yv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Ot.current)
        jt = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return jt = !1, Pa(n, r, l);
        jt = !!(n.flags & 131072);
      }
    else
      jt = !1, mt && r.flags & 1048576 && Hf(r, Jl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Tn(n, r), n = r.pendingProps;
        var c = Or(r, _e.current);
        W(r, l), c = Di(null, r, o, n, c, l);
        var d = sl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Ct(o) ? (d = !0, Ds(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, $f(r), c.updater = zs, r.stateNode = c, c._reactInternals = r, Us(r, o, n, l), r = _v(null, r, o, !0, d, l)) : (r.tag = 0, mt && d && ks(r), Gt(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Tn(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = cy(o), n = dr(o, n), c) {
            case 0:
              r = uu(null, r, o, n, l);
              break e;
            case 1:
              r = Jf(null, r, o, n, l);
              break e;
            case 11:
              r = bi(null, r, o, n, l);
              break e;
            case 14:
              r = nc(null, r, o, dr(o.type, n), l);
              break e;
          }
          throw Error(x(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : dr(o, c), uu(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : dr(o, c), Jf(n, r, o, c, l);
      case 3:
        e: {
          if (Ov(r), n === null)
            throw Error(x(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, It(n, r), xi(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = lu(Error(x(423)), r), r = rc(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = lu(Error(x(424)), r), r = rc(n, r, o, l, c);
              break e;
            } else
              for (qn = ra(r.stateNode.containerInfo.firstChild), fr = r, mt = !0, Nr = null, l = wv(r, null, o, l), r.child = l; l; )
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
        return Re(r), n === null && _s(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, co(o, c) ? h = null : d !== null && co(o, d) && (r.flags |= 32), Ue(n, r), Gt(n, r, h, l), r.child;
      case 6:
        return n === null && _s(r), null;
      case 13:
        return td(n, r, l);
      case 4:
        return Gf(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = tu(r, null, o, l) : Gt(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : dr(o, c), bi(n, r, o, c, l);
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
                        C = Ba(-1, l & -l), C.tag = 2;
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
                    throw Error(x(341));
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
        return o = r.type, c = dr(o, r.pendingProps), c = dr(o.type, c), nc(n, r, o, c, l);
      case 15:
        return Jn(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : dr(o, c), Tn(n, r), r.tag = 1, Ct(o) ? (n = !0, Ds(r)) : n = !1, W(r, l), Ev(r, o, c), Us(r, o, c, l), _v(null, r, o, !0, n, l);
      case 19:
        return ad(n, r, l);
      case 22:
        return pl(n, r, l);
    }
    throw Error(x(156, r.tag));
  };
  function md(n, r) {
    return tf(n, r);
  }
  function sy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Vr(n, r, l, o) {
    return new sy(n, r, l, o);
  }
  function yd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function cy(n) {
    if (typeof n == "function")
      return yd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === jn)
        return 11;
      if (n === Cr)
        return 14;
    }
    return 2;
  }
  function Li(n, r) {
    var l = n.alternate;
    return l === null ? (l = Vr(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function vc(n, r, l, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function")
      yd(n) && (h = 1);
    else if (typeof n == "string")
      h = 5;
    else
      e:
        switch (n) {
          case Be:
            return Tl(l.children, c, d, r);
          case bn:
            h = 8, c |= 8;
            break;
          case ir:
            return n = Vr(12, l, r, c | 2), n.elementType = ir, n.lanes = d, n;
          case Qe:
            return n = Vr(13, l, r, c), n.elementType = Qe, n.lanes = d, n;
          case it:
            return n = Vr(19, l, r, c), n.elementType = it, n.lanes = d, n;
          case Er:
            return No(l, c, d, r);
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
            throw Error(x(130, n == null ? n : typeof n, ""));
        }
    return r = Vr(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Tl(n, r, l, o) {
    return n = Vr(7, n, o, r), n.lanes = l, n;
  }
  function No(n, r, l, o) {
    return n = Vr(22, n, o, r), n.elementType = Er, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function zo(n, r, l) {
    return n = Vr(6, n, null, r), n.lanes = l, n;
  }
  function Rl(n, r, l) {
    return r = Vr(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function fy(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = lf(0), this.expirationTimes = lf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lf(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function hc(n, r, l, o, c, d, h, S, C) {
    return n = new fy(n, r, l, S, C), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Vr(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $f(d), n;
  }
  function $v(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: nt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function gd(n) {
    if (!n)
      return va;
    n = n._reactInternals;
    e: {
      if (da(n) !== n || n.tag !== 1)
        throw Error(x(170));
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
      throw Error(x(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Ct(l))
        return vo(n, l, r);
    }
    return r;
  }
  function Qv(n, r, l, o, c, d, h, S, C) {
    return n = hc(l, o, !0, n, c, d, h, S, C), n.context = gd(null), l = n.current, o = wn(), c = Pt(l), d = Ba(o, c), d.callback = r ?? null, Ri(l, d, c), n.current.lanes = c, Wi(n, c, o), kn(n, o), n;
  }
  function Uo(n, r, l, o) {
    var c = r.current, d = wn(), h = Pt(c);
    return l = gd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Ba(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ri(c, r, h), n !== null && (Dn(n, c, h, d), Ns(n, c, h)), h;
  }
  function mc(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Iv(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Sd(n, r) {
    Iv(n, r), (n = n.alternate) && Iv(n, r);
  }
  function Gv() {
    return null;
  }
  var Cd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function yc(n) {
    this._internalRoot = n;
  }
  Ia.prototype.render = yc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(x(409));
    Uo(n, r, null, null);
  }, Ia.prototype.unmount = yc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Mi(function() {
        Uo(null, n, null, null);
      }), r[Ha] = null;
    }
  };
  function Ia(n) {
    this._internalRoot = n;
  }
  Ia.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Mp();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < ut.length && r !== 0 && r < ut[l].priority; l++)
        ;
      ut.splice(l, 0, n), l === 0 && Lp(n);
    }
  };
  function Ed(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function gc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Wv() {
  }
  function dy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var M = mc(h);
          d.call(M);
        };
      }
      var h = Qv(r, o, n, 0, null, !1, !1, "", Wv);
      return n._reactRootContainer = h, n[Ha] = h.current, Kl(n.nodeType === 8 ? n.parentNode : n), Mi(), h;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var S = o;
      o = function() {
        var M = mc(C);
        S.call(M);
      };
    }
    var C = hc(n, 0, !1, null, null, !1, !1, "", Wv);
    return n._reactRootContainer = C, n[Ha] = C.current, Kl(n.nodeType === 8 ? n.parentNode : n), Mi(function() {
      Uo(r, C, l, o);
    }), C;
  }
  function Sc(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == "function") {
        var S = c;
        c = function() {
          var C = mc(h);
          S.call(C);
        };
      }
      Uo(r, h, n, c);
    } else
      h = dy(l, r, n, c, o);
    return mc(h);
  }
  Op = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Gi(r.pendingLanes);
          l !== 0 && (Iu(r, l | 1), kn(r, _t()), !(Ye & 6) && (hu = _t() + 500, Gn()));
        }
        break;
      case 13:
        Mi(function() {
          var o = Va(n, 1);
          if (o !== null) {
            var c = wn();
            Dn(o, n, 1, c);
          }
        }), Sd(n, 1);
    }
  }, os = function(n) {
    if (n.tag === 13) {
      var r = Va(n, 134217728);
      if (r !== null) {
        var l = wn();
        Dn(r, n, 134217728, l);
      }
      Sd(n, 134217728);
    }
  }, ft = function(n) {
    if (n.tag === 13) {
      var r = Pt(n), l = Va(n, r);
      if (l !== null) {
        var o = wn();
        Dn(l, n, r, o);
      }
      Sd(n, r);
    }
  }, Mp = function() {
    return at;
  }, of = function(n, r) {
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
              var c = ge(o);
              if (!c)
                throw Error(x(90));
              ka(o), ur(o, c);
            }
          }
        }
        break;
      case "textarea":
        ui(n, l);
        break;
      case "select":
        r = l.value, r != null && li(n, !!l.multiple, r, !1);
    }
  }, Ep = gu, Tp = Mi;
  var py = { usingClientEntryPoint: !1, Events: [po, Zl, ge, ts, ns, gu] }, Cu = { findFiberByHostInstance: _r, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, vy = { bundleType: Cu.bundleType, version: Cu.version, rendererPackageName: Cu.rendererPackageName, rendererConfig: Cu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: he.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Rp(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Cu.findFiberByHostInstance || Gv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cc.isDisabled && Cc.supportsFiber)
      try {
        Qu = Cc.inject(vy), Zr = Cc;
      } catch {
      }
  }
  return Ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = py, Ir.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ed(r))
      throw Error(x(200));
    return $v(n, r, null, l);
  }, Ir.createRoot = function(n, r) {
    if (!Ed(n))
      throw Error(x(299));
    var l = !1, o = "", c = Cd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = hc(n, 1, !1, null, null, l, !1, o, c), n[Ha] = r.current, Kl(n.nodeType === 8 ? n.parentNode : n), new yc(r);
  }, Ir.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(x(188)) : (n = Object.keys(n).join(","), Error(x(268, n)));
    return n = Rp(r), n = n === null ? null : n.stateNode, n;
  }, Ir.flushSync = function(n) {
    return Mi(n);
  }, Ir.hydrate = function(n, r, l) {
    if (!gc(r))
      throw Error(x(200));
    return Sc(null, n, r, !0, l);
  }, Ir.hydrateRoot = function(n, r, l) {
    if (!Ed(n))
      throw Error(x(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = Cd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = Qv(r, null, n, 1, l ?? null, c, !1, d, h), n[Ha] = r.current, Kl(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Ia(r);
  }, Ir.render = function(n, r, l) {
    if (!gc(r))
      throw Error(x(200));
    return Sc(null, n, r, !1, l);
  }, Ir.unmountComponentAtNode = function(n) {
    if (!gc(n))
      throw Error(x(40));
    return n._reactRootContainer ? (Mi(function() {
      Sc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ha] = null;
      });
    }), !0) : !1;
  }, Ir.unstable_batchedUpdates = gu, Ir.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!gc(l))
      throw Error(x(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(x(38));
    return Sc(n, r, l, !1, o);
  }, Ir.version = "18.2.0-next-9e3b772b8-20220608", Ir;
}
function eT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eT);
    } catch (A) {
      console.error(A);
    }
  }
}
process.env.NODE_ENV === "production" ? (eT(), f0.exports = ab()) : f0.exports = rb();
var ib = f0.exports;
const wm = Symbol(), lb = Symbol(), tT = typeof window > "u" || /ServerSideRendering/.test(window.navigator && window.navigator.userAgent) ? s0 : Jk, ub = Sp.unstable_runWithPriority ? (A) => Sp.unstable_runWithPriority(Sp.unstable_NormalPriority, A) : (A) => A(), ob = (A) => A;
function nT(A) {
  const K = Xk({ [wm]: { v: { current: A }, n: { current: -1 }, l: /* @__PURE__ */ new Set(), u: (ye) => ye() } });
  var x;
  return K[lb] = K.Provider, K.Provider = (x = K.Provider, ({ value: ye, children: Fe }) => {
    const Ce = es(ye), g = es(0), [Ze, le] = qk(null);
    Ze && (Ze(ye), le(null));
    const G = es();
    if (!G.current) {
      const be = /* @__PURE__ */ new Set(), F = (U, I) => {
        ib.unstable_batchedUpdates(() => {
          g.current += 1;
          const fe = { n: g.current };
          I != null && I.suspense && (fe.n *= -1, fe.p = new Promise((Ae) => {
            le(() => (He) => {
              fe.v = He, delete fe.p, Ae(He);
            });
          })), be.forEach((Ae) => Ae(fe)), U();
        });
      };
      G.current = { [wm]: { v: Ce, n: g, l: be, u: F } };
    }
    return tT(() => {
      Ce.current = ye, g.current += 1, ub(() => {
        G.current[wm].l.forEach((be) => {
          be({ n: g.current, v: ye });
        });
      });
    }, [ye]), Kk(x, { value: G.current }, Fe);
  }), delete K.Consumer, K;
}
function rT(A, K) {
  const x = Zk(A)[wm];
  if (typeof process == "object" && process.env.NODE_ENV !== "production" && !x)
    throw new Error("useContextSelector requires special context");
  const { v: { current: ye }, n: { current: Fe }, l: Ce } = x, g = K(ye), [Ze, le] = ZE((G, be) => {
    if (!be)
      return [ye, g];
    if ("p" in be)
      throw be.p;
    if (be.n === Fe)
      return Object.is(G[1], g) ? G : [ye, g];
    try {
      if ("v" in be) {
        if (Object.is(G[0], be.v))
          return G;
        const F = K(be.v);
        return Object.is(G[1], F) ? G : [be.v, F];
      }
    } catch {
    }
    return [...G];
  }, [ye, g]);
  return Object.is(Ze[1], g) || le(), tT(() => (Ce.add(le), () => {
    Ce.delete(le);
  }), [Ce]), Ze[1];
}
function sb(A) {
  return rT(A, ob);
}
const aT = {
  changed: {},
  errors: {},
  initialValues: {},
  isValid: !0,
  isValidating: !1,
  lastAction: "init",
  submitted: 0,
  touched: {},
  values: {}
}, iT = nT(aT), lT = nT(() => {
});
var uT = { exports: {} };
(function(A) {
  (function(K, x) {
    A.exports = x();
  })(eb, function() {
    var K = Object.prototype.toString;
    function x(F, U) {
      return F == null ? !1 : Object.prototype.hasOwnProperty.call(F, U);
    }
    function ye(F) {
      if (!F || g(F) && F.length === 0)
        return !0;
      if (typeof F != "string") {
        for (var U in F)
          if (x(F, U))
            return !1;
        return !0;
      }
      return !1;
    }
    function Fe(F) {
      return K.call(F);
    }
    function Ce(F) {
      return typeof F == "object" && Fe(F) === "[object Object]";
    }
    var g = Array.isArray || function(F) {
      return K.call(F) === "[object Array]";
    };
    function Ze(F) {
      return typeof F == "boolean" || Fe(F) === "[object Boolean]";
    }
    function le(F) {
      var U = parseInt(F);
      return U.toString() === F ? U : F;
    }
    function G(F) {
      F = F || {};
      var U = function(ue) {
        return Object.keys(U).reduce(function(V, $) {
          return $ === "create" || typeof U[$] == "function" && (V[$] = U[$].bind(U, ue)), V;
        }, {});
      }, I;
      F.includeInheritedProps ? I = function() {
        return !0;
      } : I = function(ue, V) {
        return typeof V == "number" && Array.isArray(ue) || x(ue, V);
      };
      function fe(ue, V) {
        if (I(ue, V))
          return ue[V];
      }
      var Ae;
      F.includeInheritedProps ? Ae = function(ue, V) {
        typeof V != "string" && typeof V != "number" && (V = String(V));
        var $ = fe(ue, V);
        if (V === "__proto__" || V === "prototype" || V === "constructor" && typeof $ == "function")
          throw new Error("For security reasons, object's magic properties cannot be set");
        return $;
      } : Ae = function(ue, V) {
        return fe(ue, V);
      };
      function He(ue, V, $, he) {
        if (typeof V == "number" && (V = [V]), !V || V.length === 0)
          return ue;
        if (typeof V == "string")
          return He(ue, V.split(".").map(le), $, he);
        var Ee = V[0], nt = Ae(ue, Ee);
        return V.length === 1 ? ((nt === void 0 || !he) && (ue[Ee] = $), nt) : (nt === void 0 && (typeof V[1] == "number" ? ue[Ee] = [] : ue[Ee] = {}), He(ue[Ee], V.slice(1), $, he));
      }
      return U.has = function(ue, V) {
        if (typeof V == "number" ? V = [V] : typeof V == "string" && (V = V.split(".")), !V || V.length === 0)
          return !!ue;
        for (var $ = 0; $ < V.length; $++) {
          var he = le(V[$]);
          if (typeof he == "number" && g(ue) && he < ue.length || (F.includeInheritedProps ? he in Object(ue) : x(ue, he)))
            ue = ue[he];
          else
            return !1;
        }
        return !0;
      }, U.ensureExists = function(ue, V, $) {
        return He(ue, V, $, !0);
      }, U.set = function(ue, V, $, he) {
        return He(ue, V, $, he);
      }, U.insert = function(ue, V, $, he) {
        var Ee = U.get(ue, V);
        he = ~~he, g(Ee) || (Ee = [], U.set(ue, V, Ee)), Ee.splice(he, 0, $);
      }, U.empty = function(ue, V) {
        if (!ye(V) && ue != null) {
          var $, he;
          if ($ = U.get(ue, V)) {
            if (typeof $ == "string")
              return U.set(ue, V, "");
            if (Ze($))
              return U.set(ue, V, !1);
            if (typeof $ == "number")
              return U.set(ue, V, 0);
            if (g($))
              $.length = 0;
            else if (Ce($))
              for (he in $)
                I($, he) && delete $[he];
            else
              return U.set(ue, V, null);
          }
        }
      }, U.push = function(ue, V) {
        var $ = U.get(ue, V);
        g($) || ($ = [], U.set(ue, V, $)), $.push.apply($, Array.prototype.slice.call(arguments, 2));
      }, U.coalesce = function(ue, V, $) {
        for (var he, Ee = 0, nt = V.length; Ee < nt; Ee++)
          if ((he = U.get(ue, V[Ee])) !== void 0)
            return he;
        return $;
      }, U.get = function(ue, V, $) {
        if (typeof V == "number" && (V = [V]), !V || V.length === 0)
          return ue;
        if (ue == null)
          return $;
        if (typeof V == "string")
          return U.get(ue, V.split("."), $);
        var he = le(V[0]), Ee = Ae(ue, he);
        return Ee === void 0 ? $ : V.length === 1 ? Ee : U.get(ue[he], V.slice(1), $);
      }, U.del = function(V, $) {
        if (typeof $ == "number" && ($ = [$]), V == null || ye($))
          return V;
        if (typeof $ == "string")
          return U.del(V, $.split("."));
        var he = le($[0]);
        if (Ae(V, he), !I(V, he))
          return V;
        if ($.length === 1)
          g(V) ? V.splice(he, 1) : delete V[he];
        else
          return U.del(V[he], $.slice(1));
        return V;
      }, U;
    }
    var be = G();
    return be.create = G, be.withInheritedProps = G({ includeInheritedProps: !0 }), be;
  });
})(uT);
var Dm = uT.exports;
function cb(A, K, x) {
  try {
    Dm.set(A, K, x);
  } catch (ye) {
    throw console.log("setIn", K), ye;
  }
}
function fb(A) {
  return function(x, ye) {
    switch (ye.type) {
      case "initialValues":
        x.initialValues = { ...ye.value || {} };
      case "reset":
        x.values = { ...x.initialValues || {} };
      case "init":
        return {
          ...x,
          changed: {},
          errors: {},
          isSubmitting: !1,
          isValidating: !1,
          submitted: 0,
          touched: {}
        };
      case "setValue": {
        const Fe = { ...x.values };
        if (Dm.get(Fe, ye.name) === ye.value)
          return x;
        cb(Fe, ye.name, ye.value);
        const Ce = A == null ? void 0 : A(Fe);
        return {
          ...x,
          changed: { ...x.changed, [ye.name]: !0 },
          errors: Ce || {},
          isValid: !Ce,
          touched: { ...x.touched, [ye.name]: !0 },
          values: Fe
        };
      }
      case "setDisabled":
        return x.disabled === ye.value ? x : { ...x, disabled: !!ye.value };
      case "setTouched": {
        const Fe = ye.name ? Array.isArray(ye.name) ? ye.name : [ye.name] : [];
        return {
          ...x,
          touched: Fe.reduce((Ce, g) => ({ ...Ce, [g]: !0 }), x.touched || {})
        };
      }
      case "startSubmit": {
        if (x.isSubmitting)
          return x;
        const Fe = A == null ? void 0 : A(x.values), Ce = !Fe;
        return {
          ...x,
          disabled: Ce,
          errors: Fe || {},
          isSubmitting: Ce,
          isValid: Ce
        };
      }
      case "endSubmit":
        return x.isSubmitting ? {
          ...x,
          disabled: !1,
          isSubmitting: !1
        } : x;
      default:
        return x;
    }
  };
}
function db(A, K, x, ye, Fe, Ce) {
  const g = es(), Ze = es((be, F, U) => {
    const I = g.current, fe = Fe.current, Ae = Ce.current;
    if (!I) {
      console.error('Cannot access to Dispatch trigger inside "on" action');
      return;
    }
    if (fe && be.type === "startSubmit" && U.isSubmitting && !F.isSubmitting) {
      const He = fe == null ? void 0 : fe(U.values);
      He && typeof He.then == "function" && He.finally(() => I({ type: "endSubmit" }));
    }
    Ae && Ae(be, F, U, I);
  }), le = Kc(
    (be, F) => {
      const U = A(be, F);
      return Ze.current(F, be, U), U;
    },
    [A, Ze]
  ), G = ZE(
    le,
    aT,
    (be) => A(
      {
        ...be,
        disabled: x,
        initialValues: K || {},
        readOnly: ye,
        values: K || {}
      },
      { type: "init" }
    )
  );
  return g.current = G[1], G;
}
const Eb = ({
  children: A,
  disabled: K,
  id: x,
  initialValues: ye,
  onStateUpdate: Fe,
  onSubmit: Ce,
  readOnly: g,
  reducer: Ze,
  validation: le
}) => {
  const G = Kc(
    (He) => (le == null ? void 0 : le(He)) || void 0,
    [le]
  ), be = JE(
    () => Ze || fb(G),
    [Ze, G]
  ), F = es(Fe);
  F.current = Fe;
  const U = es(Ce);
  U.current = Ce;
  const [I, fe] = db(
    be,
    ye,
    !!K,
    !!g,
    U,
    F
  );
  s0(() => {
    ye !== I.initialValues && fe({ type: "initialValues", value: ye });
  }, [ye]), s0(() => {
    I.disabled !== !!K && fe({ type: "setDisabled", value: !!K });
  }, [K, I.disabled, fe]);
  const Ae = Kc(
    (He) => {
      He.preventDefault(), fe({ type: "startSubmit" });
    },
    [fe]
  );
  return /* @__PURE__ */ l0(lT.Provider, { value: fe, children: /* @__PURE__ */ l0(iT.Provider, { value: I, children: /* @__PURE__ */ Wk("form", { id: x, onSubmit: Ae, children: [
    typeof A == "function" ? A(I, fe) : A,
    /* @__PURE__ */ l0("button", { style: { left: -9999, position: "fixed", top: -9999 }, type: "submit" })
  ] }) }) });
};
function Vu(A) {
  return rT(iT, A);
}
function d0() {
  return sb(lT) || (() => {
  });
}
function pb(A) {
  const K = d0();
  return Kc(
    (x) => K({ error: x, name: A, type: "setError" }),
    [K, A]
  );
}
function vb(A) {
  const K = d0();
  return Kc(
    (x = !0) => K({ name: A, touched: x, type: "setTouched" }),
    [K, A]
  );
}
function hb(A) {
  const K = d0();
  return Kc((x) => K({ name: A, type: "setValue", value: x }), [K, A]);
}
function Tb(A) {
  const K = Vu((U) => {
    var I;
    return !!((I = U.changed) != null && I[A]);
  }), x = Vu(
    (U) => {
      var I;
      return (I = U.disabledFields) != null && I[A] ? !!U.disabledFields[A] : !!U.disabled;
    }
  ), ye = Vu((U) => U.readOnly), Fe = Vu(
    (U) => {
      var I, fe;
      return U.submitted > 0 || (I = U.touched) != null && I[A] ? (fe = U.errors) == null ? void 0 : fe[A] : void 0;
    }
  ), Ce = Vu((U) => {
    var I;
    return (I = U.initialValues) == null ? void 0 : I[A];
  }), g = !1, Ze = Vu((U) => (U == null ? void 0 : U.submitted) > 0 || !!(U != null && U.touched[A])), le = Vu((U) => Dm.get(U.values, A)), G = hb(A), be = vb(A), F = pb(A);
  return JE(
    () => ({
      error: Fe,
      initialValue: Ce,
      isChanged: K,
      isDisabled: x,
      isReadOnly: ye,
      isRequired: g,
      isTouched: Ze,
      name: A,
      onChange: G,
      setError: F,
      setTouched: be,
      setValue: G,
      value: le
    }),
    [
      K,
      x,
      Fe,
      ye,
      Ce,
      g,
      A,
      F,
      be,
      G,
      Ze,
      le
    ]
  );
}
function Rb(A) {
  return Vu((K) => Dm.get(K.values, A));
}
export {
  Eb as default,
  Tb as useField,
  Rb as useFieldValue
};
