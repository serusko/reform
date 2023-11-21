import { jsx as es, Fragment as Tp } from "react/jsx-runtime";
import tT, { createContext as Gk, useRef as d0, useState as Wk, createElement as Xk, useEffect as qk, useLayoutEffect as Kk, useContext as Zk, useReducer as Jk, useMemo as Mm, useCallback as Rp } from "react";
var eb = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, nT = { exports: {} };
(function(L) {
  (function(I, k) {
    L.exports = k();
  })(eb, function() {
    var I = Object.prototype.toString;
    function k(H, j) {
      return H == null ? !1 : Object.prototype.hasOwnProperty.call(H, j);
    }
    function Ue(H) {
      if (!H || g(H) && H.length === 0)
        return !0;
      if (typeof H != "string") {
        for (var j in H)
          if (k(H, j))
            return !1;
        return !0;
      }
      return !1;
    }
    function Ge(H) {
      return I.call(H);
    }
    function Ne(H) {
      return typeof H == "object" && Ge(H) === "[object Object]";
    }
    var g = Array.isArray || function(H) {
      return I.call(H) === "[object Array]";
    };
    function vt(H) {
      return typeof H == "boolean" || Ge(H) === "[object Boolean]";
    }
    function de(H) {
      var j = parseInt(H);
      return j.toString() === H ? j : H;
    }
    function K(H) {
      H = H || {};
      var j = function(le) {
        return Object.keys(j).reduce(function(F, Y) {
          return Y === "create" || typeof j[Y] == "function" && (F[Y] = j[Y].bind(j, le)), F;
        }, {});
      }, te;
      H.includeInheritedProps ? te = function() {
        return !0;
      } : te = function(le, F) {
        return typeof F == "number" && Array.isArray(le) || k(le, F);
      };
      function ke(le, F) {
        if (te(le, F))
          return le[F];
      }
      var Fe;
      H.includeInheritedProps ? Fe = function(le, F) {
        typeof F != "string" && typeof F != "number" && (F = String(F));
        var Y = ke(le, F);
        if (F === "__proto__" || F === "prototype" || F === "constructor" && typeof Y == "function")
          throw new Error("For security reasons, object's magic properties cannot be set");
        return Y;
      } : Fe = function(le, F) {
        return ke(le, F);
      };
      function We(le, F, Y, ve) {
        if (typeof F == "number" && (F = [F]), !F || F.length === 0)
          return le;
        if (typeof F == "string")
          return We(le, F.split(".").map(de), Y, ve);
        var ge = F[0], tt = Fe(le, ge);
        return F.length === 1 ? ((tt === void 0 || !ve) && (le[ge] = Y), tt) : (tt === void 0 && (typeof F[1] == "number" ? le[ge] = [] : le[ge] = {}), We(le[ge], F.slice(1), Y, ve));
      }
      return j.has = function(le, F) {
        if (typeof F == "number" ? F = [F] : typeof F == "string" && (F = F.split(".")), !F || F.length === 0)
          return !!le;
        for (var Y = 0; Y < F.length; Y++) {
          var ve = de(F[Y]);
          if (typeof ve == "number" && g(le) && ve < le.length || (H.includeInheritedProps ? ve in Object(le) : k(le, ve)))
            le = le[ve];
          else
            return !1;
        }
        return !0;
      }, j.ensureExists = function(le, F, Y) {
        return We(le, F, Y, !0);
      }, j.set = function(le, F, Y, ve) {
        return We(le, F, Y, ve);
      }, j.insert = function(le, F, Y, ve) {
        var ge = j.get(le, F);
        ve = ~~ve, g(ge) || (ge = [], j.set(le, F, ge)), ge.splice(ve, 0, Y);
      }, j.empty = function(le, F) {
        if (!Ue(F) && le != null) {
          var Y, ve;
          if (Y = j.get(le, F)) {
            if (typeof Y == "string")
              return j.set(le, F, "");
            if (vt(Y))
              return j.set(le, F, !1);
            if (typeof Y == "number")
              return j.set(le, F, 0);
            if (g(Y))
              Y.length = 0;
            else if (Ne(Y))
              for (ve in Y)
                te(Y, ve) && delete Y[ve];
            else
              return j.set(le, F, null);
          }
        }
      }, j.push = function(le, F) {
        var Y = j.get(le, F);
        g(Y) || (Y = [], j.set(le, F, Y)), Y.push.apply(Y, Array.prototype.slice.call(arguments, 2));
      }, j.coalesce = function(le, F, Y) {
        for (var ve, ge = 0, tt = F.length; ge < tt; ge++)
          if ((ve = j.get(le, F[ge])) !== void 0)
            return ve;
        return Y;
      }, j.get = function(le, F, Y) {
        if (typeof F == "number" && (F = [F]), !F || F.length === 0)
          return le;
        if (le == null)
          return Y;
        if (typeof F == "string")
          return j.get(le, F.split("."), Y);
        var ve = de(F[0]), ge = Fe(le, ve);
        return ge === void 0 ? Y : F.length === 1 ? ge : j.get(le[ve], F.slice(1), Y);
      }, j.del = function(F, Y) {
        if (typeof Y == "number" && (Y = [Y]), F == null || Ue(Y))
          return F;
        if (typeof Y == "string")
          return j.del(F, Y.split("."));
        var ve = de(Y[0]);
        if (Fe(F, ve), !te(F, ve))
          return F;
        if (Y.length === 1)
          g(F) ? F.splice(ve, 1) : delete F[ve];
        else
          return j.del(F[ve], Y.slice(1));
        return F;
      }, j;
    }
    var Ae = K();
    return Ae.create = K, Ae.withInheritedProps = K({ includeInheritedProps: !0 }), Ae;
  });
})(nT);
var Lm = nT.exports, h0 = { exports: {} }, p0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KE;
function tb() {
  return KE || (KE = 1, function(L) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var I = !1, k = !1, Ue = 5;
      function Ge(q, Se) {
        var Ve = q.length;
        q.push(Se), vt(q, Se, Ve);
      }
      function Ne(q) {
        return q.length === 0 ? null : q[0];
      }
      function g(q) {
        if (q.length === 0)
          return null;
        var Se = q[0], Ve = q.pop();
        return Ve !== Se && (q[0] = Ve, de(q, Ve, 0)), Se;
      }
      function vt(q, Se, Ve) {
        for (var st = Ve; st > 0; ) {
          var Nt = st - 1 >>> 1, Sn = q[Nt];
          if (K(Sn, Se) > 0)
            q[Nt] = Se, q[st] = Sn, st = Nt;
          else
            return;
        }
      }
      function de(q, Se, Ve) {
        for (var st = Ve, Nt = q.length, Sn = Nt >>> 1; st < Sn; ) {
          var Yt = (st + 1) * 2 - 1, xr = q[Yt], kt = Yt + 1, fa = q[kt];
          if (K(xr, Se) < 0)
            kt < Nt && K(fa, xr) < 0 ? (q[st] = fa, q[kt] = Se, st = kt) : (q[st] = xr, q[Yt] = Se, st = Yt);
          else if (kt < Nt && K(fa, Se) < 0)
            q[st] = fa, q[kt] = Se, st = kt;
          else
            return;
        }
      }
      function K(q, Se) {
        var Ve = q.sortIndex - Se.sortIndex;
        return Ve !== 0 ? Ve : q.id - Se.id;
      }
      var Ae = 1, H = 2, j = 3, te = 4, ke = 5;
      function Fe(q, Se) {
      }
      var We = typeof performance == "object" && typeof performance.now == "function";
      if (We) {
        var le = performance;
        L.unstable_now = function() {
          return le.now();
        };
      } else {
        var F = Date, Y = F.now();
        L.unstable_now = function() {
          return F.now() - Y;
        };
      }
      var ve = 1073741823, ge = -1, tt = 250, He = 5e3, bn = 1e4, ir = ve, Ht = [], pt = [], jn = 1, $e = null, at = j, Cr = !1, Dt = !1, Er = !1, X = typeof setTimeout == "function" ? setTimeout : null, Re = typeof clearTimeout == "function" ? clearTimeout : null, ae = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function nt(q) {
        for (var Se = Ne(pt); Se !== null; ) {
          if (Se.callback === null)
            g(pt);
          else if (Se.startTime <= q)
            g(pt), Se.sortIndex = Se.expirationTime, Ge(Ht, Se);
          else
            return;
          Se = Ne(pt);
        }
      }
      function it(q) {
        if (Er = !1, nt(q), !Dt)
          if (Ne(Ht) !== null)
            Dt = !0, oi(Pn);
          else {
            var Se = Ne(pt);
            Se !== null && Yn(it, Se.startTime - q);
          }
      }
      function Pn(q, Se) {
        Dt = !1, Er && (Er = !1, qr()), Cr = !0;
        var Ve = at;
        try {
          var st;
          if (!k)
            return lr(q, Se);
        } finally {
          $e = null, at = Ve, Cr = !1;
        }
      }
      function lr(q, Se) {
        var Ve = Se;
        for (nt(Ve), $e = Ne(Ht); $e !== null && !I && !($e.expirationTime > Ve && (!q || Hl())); ) {
          var st = $e.callback;
          if (typeof st == "function") {
            $e.callback = null, at = $e.priorityLevel;
            var Nt = $e.expirationTime <= Ve, Sn = st(Nt);
            Ve = L.unstable_now(), typeof Sn == "function" ? $e.callback = Sn : $e === Ne(Ht) && g(Ht), nt(Ve);
          } else
            g(Ht);
          $e = Ne(Ht);
        }
        if ($e !== null)
          return !0;
        var Yt = Ne(pt);
        return Yt !== null && Yn(it, Yt.startTime - Ve), !1;
      }
      function ai(q, Se) {
        switch (q) {
          case Ae:
          case H:
          case j:
          case te:
          case ke:
            break;
          default:
            q = j;
        }
        var Ve = at;
        at = q;
        try {
          return Se();
        } finally {
          at = Ve;
        }
      }
      function _n(q) {
        var Se;
        switch (at) {
          case Ae:
          case H:
          case j:
            Se = j;
            break;
          default:
            Se = at;
            break;
        }
        var Ve = at;
        at = Se;
        try {
          return q();
        } finally {
          at = Ve;
        }
      }
      function ii(q) {
        var Se = at;
        return function() {
          var Ve = at;
          at = Se;
          try {
            return q.apply(this, arguments);
          } finally {
            at = Ve;
          }
        };
      }
      function Gr(q, Se, Ve) {
        var st = L.unstable_now(), Nt;
        if (typeof Ve == "object" && Ve !== null) {
          var Sn = Ve.delay;
          typeof Sn == "number" && Sn > 0 ? Nt = st + Sn : Nt = st;
        } else
          Nt = st;
        var Yt;
        switch (q) {
          case Ae:
            Yt = ge;
            break;
          case H:
            Yt = tt;
            break;
          case ke:
            Yt = ir;
            break;
          case te:
            Yt = bn;
            break;
          case j:
          default:
            Yt = He;
            break;
        }
        var xr = Nt + Yt, kt = {
          id: jn++,
          callback: Se,
          priorityLevel: q,
          startTime: Nt,
          expirationTime: xr,
          sortIndex: -1
        };
        return Nt > st ? (kt.sortIndex = Nt, Ge(pt, kt), Ne(Ht) === null && kt === Ne(pt) && (Er ? qr() : Er = !0, Yn(it, Nt - st))) : (kt.sortIndex = xr, Ge(Ht, kt), !Dt && !Cr && (Dt = !0, oi(Pn))), kt;
      }
      function sa() {
      }
      function Bu() {
        !Dt && !Cr && (Dt = !0, oi(Pn));
      }
      function Tr() {
        return Ne(Ht);
      }
      function ka(q) {
        q.callback = null;
      }
      function gn() {
        return at;
      }
      var $n = !1, Rr = null, Wr = -1, ur = Ue, ba = -1;
      function Hl() {
        var q = L.unstable_now() - ba;
        return !(q < ur);
      }
      function Yi() {
      }
      function li(q) {
        if (q < 0 || q > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        q > 0 ? ur = Math.floor(1e3 / q) : ur = Ue;
      }
      var Qi = function() {
        if (Rr !== null) {
          var q = L.unstable_now();
          ba = q;
          var Se = !0, Ve = !0;
          try {
            Ve = Rr(Se, q);
          } finally {
            Ve ? Xr() : ($n = !1, Rr = null);
          }
        } else
          $n = !1;
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
          X(Qi, 0);
        };
      function oi(q) {
        Rr = q, $n || ($n = !0, Xr());
      }
      function Yn(q, Se) {
        Wr = X(function() {
          q(L.unstable_now());
        }, Se);
      }
      function qr() {
        Re(Wr), Wr = -1;
      }
      var ju = Yi, si = null;
      L.unstable_IdlePriority = ke, L.unstable_ImmediatePriority = Ae, L.unstable_LowPriority = te, L.unstable_NormalPriority = j, L.unstable_Profiling = si, L.unstable_UserBlockingPriority = H, L.unstable_cancelCallback = ka, L.unstable_continueExecution = Bu, L.unstable_forceFrameRate = li, L.unstable_getCurrentPriorityLevel = gn, L.unstable_getFirstCallbackNode = Tr, L.unstable_next = _n, L.unstable_pauseExecution = sa, L.unstable_requestPaint = ju, L.unstable_runWithPriority = ai, L.unstable_scheduleCallback = Gr, L.unstable_shouldYield = Hl, L.unstable_wrapCallback = ii, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(p0)), p0;
}
var v0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZE;
function nb() {
  return ZE || (ZE = 1, function(L) {
    function I(X, Re) {
      var ae = X.length;
      X.push(Re);
      e:
        for (; 0 < ae; ) {
          var nt = ae - 1 >>> 1, it = X[nt];
          if (0 < Ge(it, Re))
            X[nt] = Re, X[ae] = it, ae = nt;
          else
            break e;
        }
    }
    function k(X) {
      return X.length === 0 ? null : X[0];
    }
    function Ue(X) {
      if (X.length === 0)
        return null;
      var Re = X[0], ae = X.pop();
      if (ae !== Re) {
        X[0] = ae;
        e:
          for (var nt = 0, it = X.length, Pn = it >>> 1; nt < Pn; ) {
            var lr = 2 * (nt + 1) - 1, ai = X[lr], _n = lr + 1, ii = X[_n];
            if (0 > Ge(ai, ae))
              _n < it && 0 > Ge(ii, ai) ? (X[nt] = ii, X[_n] = ae, nt = _n) : (X[nt] = ai, X[lr] = ae, nt = lr);
            else if (_n < it && 0 > Ge(ii, ae))
              X[nt] = ii, X[_n] = ae, nt = _n;
            else
              break e;
          }
      }
      return Re;
    }
    function Ge(X, Re) {
      var ae = X.sortIndex - Re.sortIndex;
      return ae !== 0 ? ae : X.id - Re.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Ne = performance;
      L.unstable_now = function() {
        return Ne.now();
      };
    } else {
      var g = Date, vt = g.now();
      L.unstable_now = function() {
        return g.now() - vt;
      };
    }
    var de = [], K = [], Ae = 1, H = null, j = 3, te = !1, ke = !1, Fe = !1, We = typeof setTimeout == "function" ? setTimeout : null, le = typeof clearTimeout == "function" ? clearTimeout : null, F = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Y(X) {
      for (var Re = k(K); Re !== null; ) {
        if (Re.callback === null)
          Ue(K);
        else if (Re.startTime <= X)
          Ue(K), Re.sortIndex = Re.expirationTime, I(de, Re);
        else
          break;
        Re = k(K);
      }
    }
    function ve(X) {
      if (Fe = !1, Y(X), !ke)
        if (k(de) !== null)
          ke = !0, Dt(ge);
        else {
          var Re = k(K);
          Re !== null && Er(ve, Re.startTime - X);
        }
    }
    function ge(X, Re) {
      ke = !1, Fe && (Fe = !1, le(bn), bn = -1), te = !0;
      var ae = j;
      try {
        for (Y(Re), H = k(de); H !== null && (!(H.expirationTime > Re) || X && !pt()); ) {
          var nt = H.callback;
          if (typeof nt == "function") {
            H.callback = null, j = H.priorityLevel;
            var it = nt(H.expirationTime <= Re);
            Re = L.unstable_now(), typeof it == "function" ? H.callback = it : H === k(de) && Ue(de), Y(Re);
          } else
            Ue(de);
          H = k(de);
        }
        if (H !== null)
          var Pn = !0;
        else {
          var lr = k(K);
          lr !== null && Er(ve, lr.startTime - Re), Pn = !1;
        }
        return Pn;
      } finally {
        H = null, j = ae, te = !1;
      }
    }
    var tt = !1, He = null, bn = -1, ir = 5, Ht = -1;
    function pt() {
      return !(L.unstable_now() - Ht < ir);
    }
    function jn() {
      if (He !== null) {
        var X = L.unstable_now();
        Ht = X;
        var Re = !0;
        try {
          Re = He(!0, X);
        } finally {
          Re ? $e() : (tt = !1, He = null);
        }
      } else
        tt = !1;
    }
    var $e;
    if (typeof F == "function")
      $e = function() {
        F(jn);
      };
    else if (typeof MessageChannel < "u") {
      var at = new MessageChannel(), Cr = at.port2;
      at.port1.onmessage = jn, $e = function() {
        Cr.postMessage(null);
      };
    } else
      $e = function() {
        We(jn, 0);
      };
    function Dt(X) {
      He = X, tt || (tt = !0, $e());
    }
    function Er(X, Re) {
      bn = We(function() {
        X(L.unstable_now());
      }, Re);
    }
    L.unstable_IdlePriority = 5, L.unstable_ImmediatePriority = 1, L.unstable_LowPriority = 4, L.unstable_NormalPriority = 3, L.unstable_Profiling = null, L.unstable_UserBlockingPriority = 2, L.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, L.unstable_continueExecution = function() {
      ke || te || (ke = !0, Dt(ge));
    }, L.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ir = 0 < X ? Math.floor(1e3 / X) : 5;
    }, L.unstable_getCurrentPriorityLevel = function() {
      return j;
    }, L.unstable_getFirstCallbackNode = function() {
      return k(de);
    }, L.unstable_next = function(X) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var Re = 3;
          break;
        default:
          Re = j;
      }
      var ae = j;
      j = Re;
      try {
        return X();
      } finally {
        j = ae;
      }
    }, L.unstable_pauseExecution = function() {
    }, L.unstable_requestPaint = function() {
    }, L.unstable_runWithPriority = function(X, Re) {
      switch (X) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          X = 3;
      }
      var ae = j;
      j = X;
      try {
        return Re();
      } finally {
        j = ae;
      }
    }, L.unstable_scheduleCallback = function(X, Re, ae) {
      var nt = L.unstable_now();
      switch (typeof ae == "object" && ae !== null ? (ae = ae.delay, ae = typeof ae == "number" && 0 < ae ? nt + ae : nt) : ae = nt, X) {
        case 1:
          var it = -1;
          break;
        case 2:
          it = 250;
          break;
        case 5:
          it = 1073741823;
          break;
        case 4:
          it = 1e4;
          break;
        default:
          it = 5e3;
      }
      return it = ae + it, X = { id: Ae++, callback: Re, priorityLevel: X, startTime: ae, expirationTime: it, sortIndex: -1 }, ae > nt ? (X.sortIndex = ae, I(K, X), k(de) === null && X === k(K) && (Fe ? (le(bn), bn = -1) : Fe = !0, Er(ve, ae - nt))) : (X.sortIndex = it, I(de, X), ke || te || (ke = !0, Dt(ge))), X;
    }, L.unstable_shouldYield = pt, L.unstable_wrapCallback = function(X) {
      var Re = j;
      return function() {
        var ae = j;
        j = Re;
        try {
          return X.apply(this, arguments);
        } finally {
          j = ae;
        }
      };
    };
  }(v0)), v0;
}
process.env.NODE_ENV === "production" ? h0.exports = nb() : h0.exports = tb();
var Ep = h0.exports, m0 = { exports: {} }, Qr = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JE;
function rb() {
  return JE || (JE = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var L = tT, I = Ep, k = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ue = !1;
    function Ge(e) {
      Ue = e;
    }
    function Ne(e) {
      if (!Ue) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        vt("warn", e, a);
      }
    }
    function g(e) {
      if (!Ue) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        vt("error", e, a);
      }
    }
    function vt(e, t, a) {
      {
        var i = k.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var de = 0, K = 1, Ae = 2, H = 3, j = 4, te = 5, ke = 6, Fe = 7, We = 8, le = 9, F = 10, Y = 11, ve = 12, ge = 13, tt = 14, He = 15, bn = 16, ir = 17, Ht = 18, pt = 19, jn = 21, $e = 22, at = 23, Cr = 24, Dt = 25, Er = !0, X = !1, Re = !1, ae = !1, nt = !1, it = !0, Pn = !1, lr = !1, ai = !0, _n = !0, ii = !0, Gr = /* @__PURE__ */ new Set(), sa = {}, Bu = {};
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
    var gn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", $n = Object.prototype.hasOwnProperty;
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
    function Hl(e) {
      if (Wr(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(e)), ur(e);
    }
    function Yi(e, t) {
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
    var ui = 0, ca = 1, oi = 2, Yn = 3, qr = 4, ju = 5, si = 6, q = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Se = q + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ve = new RegExp("^[" + q + "][" + Se + "]*$"), st = {}, Nt = {};
    function Sn(e) {
      return $n.call(Nt, e) ? !0 : $n.call(st, e) ? !1 : Ve.test(e) ? (Nt[e] = !0, !0) : (st[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function Yt(e, t, a) {
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
          case Yn:
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
      this.acceptsBooleans = t === oi || t === Yn || t === qr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var bt = {}, wp = [
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
    wp.forEach(function(e) {
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
        Yn,
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
        Yn,
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
    var Dp = "xlinkHref";
    bt[Dp] = new Ft(
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
    var kp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, rs = !1;
    function ef(e) {
      !rs && kp.test(e) && (rs = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Pu(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        ba(a, t), i.sanitizeURL && ef("" + a);
        var s = i.attributeName, f = null;
        if (i.type === qr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : kt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (kt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Yn)
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
      if (!Yt(t, u, i)) {
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
            e[p] = v === Yn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var m = u.attributeName, y = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(m);
        else {
          var R = u.type, E;
          R === Yn || R === qr && a === !0 ? E = "" : (ba(a, m), E = "" + a, u.sanitizeURL && ef(E.toString())), y ? e.setAttributeNS(y, m, E) : e.setAttribute(m, E);
        }
      }
    }
    var Fl = Symbol.for("react.element"), Kr = Symbol.for("react.portal"), _a = Symbol.for("react.fragment"), Vl = Symbol.for("react.strict_mode"), $u = Symbol.for("react.profiler"), tf = Symbol.for("react.provider"), nf = Symbol.for("react.context"), Bl = Symbol.for("react.forward_ref"), da = Symbol.for("react.suspense"), Yu = Symbol.for("react.suspense_list"), jl = Symbol.for("react.memo"), On = Symbol.for("react.lazy"), bp = Symbol.for("react.scope"), _p = Symbol.for("react.debug_trace_mode"), rf = Symbol.for("react.offscreen"), Op = Symbol.for("react.legacy_hidden"), Nm = Symbol.for("react.cache"), zm = Symbol.for("react.tracing_marker"), _t = Symbol.iterator, Um = "@@iterator";
    function Oa(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = _t && e[_t] || e[Um];
      return typeof t == "function" ? t : null;
    }
    var Be = Object.assign, ci = 0, Mp, af, Qu, Zr, Lp, wr, Np;
    function zp() {
    }
    zp.__reactDisabledLog = !0;
    function Am() {
      {
        if (ci === 0) {
          Mp = console.log, af = console.info, Qu = console.warn, Zr = console.error, Lp = console.group, wr = console.groupCollapsed, Np = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: zp,
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
            log: Be({}, e, {
              value: Mp
            }),
            info: Be({}, e, {
              value: af
            }),
            warn: Be({}, e, {
              value: Qu
            }),
            error: Be({}, e, {
              value: Zr
            }),
            group: Be({}, e, {
              value: Lp
            }),
            groupCollapsed: Be({}, e, {
              value: wr
            }),
            groupEnd: Be({}, e, {
              value: Np
            })
          });
        }
        ci < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Pl = k.ReactCurrentDispatcher, Gi;
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
    var lf = !1, ls;
    {
      var uf = typeof WeakMap == "function" ? WeakMap : Map;
      ls = new uf();
    }
    function us(e, t) {
      if (!e || lf)
        return "";
      {
        var a = ls.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      lf = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Pl.current, Pl.current = null, Am();
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
        lf = !1, Pl.current = s, is(), Error.prepareStackTrace = u;
      }
      var E = e ? e.displayName || e.name : "", _ = E ? Jr(E) : "";
      return typeof e == "function" && ls.set(e, _), _;
    }
    function of(e, t, a) {
      return us(e, !0);
    }
    function Wi(e, t, a) {
      return us(e, !1);
    }
    function Hm(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Iu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return us(e, Hm(e));
      if (typeof e == "string")
        return Jr(e);
      switch (e) {
        case da:
          return Jr("Suspense");
        case Yu:
          return Jr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Bl:
            return Wi(e.render);
          case jl:
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
    function rt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case te:
          return Jr(e.type);
        case bn:
          return Jr("Lazy");
        case ge:
          return Jr("Suspense");
        case pt:
          return Jr("SuspenseList");
        case de:
        case Ae:
        case He:
          return Wi(e.type);
        case Y:
          return Wi(e.type.render);
        case K:
          return of(e.type);
        default:
          return "";
      }
    }
    function sf(e) {
      try {
        var t = "", a = e;
        do
          t += rt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Up(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function os(e) {
      return e.displayName || "Context";
    }
    function ct(e) {
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
        case $u:
          return "Profiler";
        case Vl:
          return "StrictMode";
        case da:
          return "Suspense";
        case Yu:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case nf:
            var t = e;
            return os(t) + ".Consumer";
          case tf:
            var a = e;
            return os(a._context) + ".Provider";
          case Bl:
            return Up(e, e.render, "ForwardRef");
          case jl:
            var i = e.displayName || null;
            return i !== null ? i : ct(e.type) || "Memo";
          case On: {
            var u = e, s = u._payload, f = u._init;
            try {
              return ct(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Ap(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function cf(e) {
      return e.displayName || "Context";
    }
    function Oe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Cr:
          return "Cache";
        case le:
          var i = a;
          return cf(i) + ".Consumer";
        case F:
          var u = a;
          return cf(u._context) + ".Provider";
        case Ht:
          return "DehydratedFragment";
        case Y:
          return Ap(a, a.render, "ForwardRef");
        case Fe:
          return "Fragment";
        case te:
          return a;
        case j:
          return "Portal";
        case H:
          return "Root";
        case ke:
          return "Text";
        case bn:
          return ct(a);
        case We:
          return a === Vl ? "StrictMode" : "Mode";
        case $e:
          return "Offscreen";
        case ve:
          return "Profiler";
        case jn:
          return "Scope";
        case ge:
          return "Suspense";
        case pt:
          return "SuspenseList";
        case Dt:
          return "TracingMarker";
        case K:
        case de:
        case ir:
        case Ae:
        case tt:
        case He:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Gu = k.ReactDebugCurrentFrame, Vt = null, Dr = !1;
    function kr() {
      {
        if (Vt === null)
          return null;
        var e = Vt._debugOwner;
        if (e !== null && typeof e < "u")
          return Oe(e);
      }
      return null;
    }
    function Wu() {
      return Vt === null ? "" : sf(Vt);
    }
    function Qt() {
      Gu.getCurrentStack = null, Vt = null, Dr = !1;
    }
    function lt(e) {
      Gu.getCurrentStack = e === null ? null : Wu, Vt = e, Dr = !1;
    }
    function Fm() {
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
    var Hp = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function $l(e, t) {
      Hp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ff(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Fp(e) {
      return e._valueTracker;
    }
    function Xu(e) {
      e._valueTracker = null;
    }
    function qu(e) {
      var t = "";
      return e && (ff(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Yl(e) {
      var t = ff(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
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
      Fp(e) || (e._valueTracker = Yl(e));
    }
    function Vp(e) {
      if (!e)
        return !1;
      var t = Fp(e);
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
    var cs = !1, Ku = !1, fs = !1, df = !1;
    function Ma(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Zu(e, t) {
      var a = e, i = t.checked, u = Be({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Ju(e, t) {
      $l("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Ku && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), Ku = !0), t.value !== void 0 && t.defaultValue !== void 0 && !cs && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), cs = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: fi(t.value != null ? t.value : i),
        controlled: Ma(t)
      };
    }
    function pf(e, t) {
      var a = e, i = t.checked;
      i != null && Ii(a, "checked", i, !1);
    }
    function Ql(e, t) {
      var a = e;
      {
        var i = Ma(t);
        !a._wrapperState.controlled && i && !df && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), df = !0), a._wrapperState.controlled && !i && !fs && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), fs = !0);
      }
      pf(e, t);
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
    function Bp(e, t) {
      var a = e;
      Ql(a, t), or(a, t);
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
            var p = mh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Vp(f), Ql(f, p);
          }
        }
      }
    }
    function di(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ss(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Cn(e._wrapperState.initialValue) : e.defaultValue !== Cn(a) && (e.defaultValue = Cn(a)));
    }
    var ds = !1, Il = !1, jp = !1;
    function ps(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? L.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Il || (Il = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (jp || (jp = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ds && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ds = !0);
    }
    function vf(e, t) {
      t.value != null && e.setAttribute("value", Cn(fi(t.value)));
    }
    var to = Array.isArray;
    function Zt(e) {
      return to(e);
    }
    var vs;
    vs = !1;
    function Pp() {
      var e = kr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var $p = ["value", "defaultValue"];
    function Vm(e) {
      {
        $l("select", e);
        for (var t = 0; t < $p.length; t++) {
          var a = $p[t];
          if (e[a] != null) {
            var i = Zt(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Pp()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Pp());
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
    function hf(e, t) {
      return Be({}, t, {
        value: void 0
      });
    }
    function Yp(e, t) {
      var a = e;
      Vm(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !vs && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), vs = !0);
    }
    function Bm(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? pi(a, !!t.multiple, i, !1) : t.defaultValue != null && pi(a, !!t.multiple, t.defaultValue, !0);
    }
    function jm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? pi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? pi(a, !!t.multiple, t.defaultValue, !0) : pi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Pm(e, t) {
      var a = e, i = t.value;
      i != null && pi(a, !!t.multiple, i, !1);
    }
    var mf = !1;
    function yf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Be({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Cn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Qp(e, t) {
      var a = e;
      $l("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !mf && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component"), mf = !0);
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
    function Ip(e, t) {
      var a = e, i = fi(t.value), u = fi(t.defaultValue);
      if (i != null) {
        var s = Cn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Cn(u));
    }
    function Gp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function gf(e, t) {
      Ip(e, t);
    }
    var La = "http://www.w3.org/1999/xhtml", $m = "http://www.w3.org/1998/Math/MathML", Sf = "http://www.w3.org/2000/svg";
    function hs(e) {
      switch (e) {
        case "svg":
          return Sf;
        case "math":
          return $m;
        default:
          return La;
      }
    }
    function Cf(e, t) {
      return e == null || e === La ? hs(t) : e === Sf && t === "foreignObject" ? La : e;
    }
    var Ym = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, ms, Wp = Ym(function(e, t) {
      if (e.namespaceURI === Sf && !("innerHTML" in e)) {
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
    }, Xp = {
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
    function qp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Kp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Gl).forEach(function(e) {
      Kp.forEach(function(t) {
        Gl[qp(t, e)] = Gl[e];
      });
    });
    function gs(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Gl.hasOwnProperty(e) && Gl[e]) ? t + "px" : (li(t, e), ("" + t).trim());
    }
    var Wl = /([A-Z])/g, Qm = /^ms-/;
    function Im(e) {
      return e.replace(Wl, "-$1").toLowerCase().replace(Qm, "-ms-");
    }
    var Zp = function() {
    };
    {
      var Jp = /^(?:webkit|moz|o)[A-Z]/, ev = /^-ms-/, no = /-(.)/g, Xl = /;\s*$/, ql = {}, Kl = {}, tv = !1, Ef = !1, Tf = function(e) {
        return e.replace(no, function(t, a) {
          return a.toUpperCase();
        });
      }, Rf = function(e) {
        ql.hasOwnProperty(e) && ql[e] || (ql[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Tf(e.replace(ev, "ms-"))
        ));
      }, nv = function(e) {
        ql.hasOwnProperty(e) && ql[e] || (ql[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, rv = function(e, t) {
        Kl.hasOwnProperty(t) && Kl[t] || (Kl[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Xl, "")));
      }, av = function(e, t) {
        tv || (tv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Gm = function(e, t) {
        Ef || (Ef = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Zp = function(e, t) {
        e.indexOf("-") > -1 ? Rf(e) : Jp.test(e) ? nv(e) : Xl.test(t) && rv(e, t), typeof t == "number" && (isNaN(t) ? av(e, t) : isFinite(t) || Gm(e, t));
      };
    }
    var Wm = Zp;
    function Xm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Im(i)) + ":", t += gs(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function iv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Wm(i, t[i]);
          var s = gs(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function qm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function br(e) {
      var t = {};
      for (var a in e)
        for (var i = Xp[a] || [a], u = 0; u < i.length; u++)
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
            u[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", qm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var lv = {
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
    }, uv = Be({
      menuitem: !0
    }, lv), ov = "__html";
    function Ss(e, t) {
      if (t) {
        if (uv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(ov in t.dangerouslySetInnerHTML))
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
    }, sv = {
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
    }, na = {}, xf = new RegExp("^(aria)-[" + Se + "]*$"), ao = new RegExp("^(aria)[A-Z][" + Se + "]*$");
    function wf(e, t) {
      {
        if ($n.call(na, t) && na[t])
          return !0;
        if (ao.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = sv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), na[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), na[t] = !0, !0;
        }
        if (xf.test(t)) {
          var u = t.toLowerCase(), s = sv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return na[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), na[t] = !0, !0;
        }
      }
      return !0;
    }
    function cv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = wf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Es(e, t) {
      za(e, t) || cv(e, t);
    }
    var Ki = !1;
    function Df(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Ki && (Ki = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var kf = function() {
    };
    {
      var Jt = {}, bf = /^on./, fv = /^on[^A-Z]/, dv = new RegExp("^(aria)-[" + Se + "]*$"), pv = new RegExp("^(aria)[A-Z][" + Se + "]*$");
      kf = function(e, t, a, i) {
        if ($n.call(Jt, t) && Jt[t])
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
          if (bf.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), Jt[t] = !0, !0;
        } else if (bf.test(t))
          return fv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Jt[t] = !0, !0;
        if (dv.test(t) || pv.test(t))
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
        return typeof a == "boolean" && xr(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Jt[t] = !0, !0) : m ? !0 : xr(t, a, v, !1) ? (Jt[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Yn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Jt[t] = !0), !0);
      };
    }
    var vv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = kf(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function hv(e, t, a) {
      za(e, t) || vv(e, t, a);
    }
    var Ua = 1, io = 2, Zi = 4, Km = Ua | io | Zi, lo = null;
    function uo(e) {
      lo !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), lo = e;
    }
    function Zm() {
      lo === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), lo = null;
    }
    function mv(e) {
      return e === lo;
    }
    function Ts(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Na ? t.parentNode : t;
    }
    var ft = null, vi = null, Aa = null;
    function Zl(e) {
      var t = xu(e);
      if (t) {
        if (typeof ft != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = mh(a);
          ft(t.stateNode, t.type, i);
        }
      }
    }
    function yv(e) {
      ft = e;
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
        if (vi = null, Aa = null, Zl(e), t)
          for (var a = 0; a < t.length; a++)
            Zl(t[a]);
      }
    }
    var Ji = function(e, t) {
      return e(t);
    }, _f = function() {
    }, Of = !1;
    function Jm() {
      var e = oo();
      e && (_f(), so());
    }
    function Mf(e, t, a) {
      if (Of)
        return e(t, a);
      Of = !0;
      try {
        return Ji(e, t, a);
      } finally {
        Of = !1, Jm();
      }
    }
    function xs(e, t, a) {
      Ji = e, _f = a;
    }
    function ws(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Lf(e, t, a) {
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
      var i = mh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Lf(t, e.type, i))
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
    function gv(e, t, a, i, u, s, f, p, v) {
      var m = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, m);
      } catch (y) {
        this.onError(y);
      }
    }
    var Nf = gv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var zf = document.createElement("react");
      Nf = function(t, a, i, u, s, f, p, v, m) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var y = document.createEvent("Event"), R = !1, E = !0, _ = window.event, O = Object.getOwnPropertyDescriptor(window, "event");
        function N() {
          zf.removeEventListener(z, ye, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = _);
        }
        var ne = Array.prototype.slice.call(arguments, 3);
        function ye() {
          R = !0, N(), a.apply(i, ne), E = !1;
        }
        var pe, Ie = !1, Pe = !1;
        function w(D) {
          if (pe = D.error, Ie = !0, pe === null && D.colno === 0 && D.lineno === 0 && (Pe = !0), D.defaultPrevented && pe != null && typeof pe == "object")
            try {
              pe._suppressLogging = !0;
            } catch {
            }
        }
        var z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", w), zf.addEventListener(z, ye, !1), y.initEvent(z, !1, !1), zf.dispatchEvent(y), O && Object.defineProperty(window, "event", O), R && E && (Ie ? Pe && (pe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : pe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(pe)), window.removeEventListener("error", w), !R)
          return N(), gv.apply(this, arguments);
      };
    }
    var ey = Nf, hi = !1, ra = null, fo = !1, mi = null, pa = {
      onError: function(e) {
        hi = !0, ra = e;
      }
    };
    function nl(e, t, a, i, u, s, f, p, v) {
      hi = !1, ra = null, ey.apply(pa, arguments);
    }
    function Ha(e, t, a, i, u, s, f, p, v) {
      if (nl.apply(this, arguments), hi) {
        var m = Af();
        fo || (fo = !0, mi = m);
      }
    }
    function Uf() {
      if (fo) {
        var e = mi;
        throw fo = !1, mi = null, e;
      }
    }
    function ty() {
      return hi;
    }
    function Af() {
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
    function Jl(e, t) {
      e._reactInternals = t;
    }
    var me = (
      /*                      */
      0
    ), yi = (
      /*                */
      1
    ), ht = (
      /*                    */
      2
    ), Me = (
      /*                       */
      4
    ), Ze = (
      /*                */
      16
    ), Je = (
      /*                 */
      32
    ), va = (
      /*                     */
      64
    ), we = (
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
    ), Ds = Ct | Me | va | In | Or | vo, Sv = (
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
    ), Hf = (
      /*                       */
      1048576
    ), Ff = (
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
    ), eu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Me | Or | 0
    ), Xn = ht | Me | Ze | Je | In | Mr | gi, En = Me | va | In | gi, Lr = Ct | Ze, un = Gn | Si | Ff, Fa = k.ReactCurrentOwner;
    function cr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (ht | Mr)) !== me && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === H ? a : null;
    }
    function Vf(e) {
      if (e.tag === ge) {
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
      return e.tag === H ? e.stateNode.containerInfo : null;
    }
    function Bf(e) {
      return cr(e) === e;
    }
    function fr(e) {
      {
        var t = Fa.current;
        if (t !== null && t.tag === K) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Oe(a) || "A component"), i._warnedAboutRefsInRender = !0;
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
      if (i.tag !== H)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Nr(e) {
      var t = mt(e);
      return t !== null ? jf(t) : null;
    }
    function jf(e) {
      if (e.tag === te || e.tag === ke)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = jf(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Cv(e) {
      var t = mt(e);
      return t !== null ? bs(t) : null;
    }
    function bs(e) {
      if (e.tag === te || e.tag === ke)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== j) {
          var a = bs(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var _s = I.unstable_scheduleCallback, Ev = I.unstable_cancelCallback, Os = I.unstable_shouldYield, Tv = I.unstable_requestPaint, Tt = I.unstable_now, Pf = I.unstable_getCurrentPriorityLevel, Ms = I.unstable_ImmediatePriority, dr = I.unstable_UserBlockingPriority, ha = I.unstable_NormalPriority, Ls = I.unstable_LowPriority, Ci = I.unstable_IdlePriority, $f = I.unstable_yieldValue, Yf = I.unstable_setDisableYieldValue, Ei = null, tn = null, G = null, zt = !1, on = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Qf(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ai && (e = Be({}, e, {
          getLaneLabelMap: Ri,
          injectProfilingHooks: Ba
        })), Ei = t.inject(e), tn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Rv(e, t) {
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
          var a = (e.current.flags & we) === we;
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
    function If(e) {
      if (tn && typeof tn.onCommitFiberUnmount == "function")
        try {
          tn.onCommitFiberUnmount(Ei, e);
        } catch (t) {
          zt || (zt = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function It(e) {
      if (typeof $f == "function" && (Yf(e), Ge(e)), tn && typeof tn.setStrictMode == "function")
        try {
          tn.setStrictMode(Ei, e);
        } catch (t) {
          zt || (zt = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Ba(e) {
      G = e;
    }
    function Ri() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < yt; a++) {
          var i = ny(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Ns(e) {
      G !== null && typeof G.markCommitStarted == "function" && G.markCommitStarted(e);
    }
    function Gf() {
      G !== null && typeof G.markCommitStopped == "function" && G.markCommitStopped();
    }
    function xi(e) {
      G !== null && typeof G.markComponentRenderStarted == "function" && G.markComponentRenderStarted(e);
    }
    function al() {
      G !== null && typeof G.markComponentRenderStopped == "function" && G.markComponentRenderStopped();
    }
    function xv(e) {
      G !== null && typeof G.markComponentPassiveEffectMountStarted == "function" && G.markComponentPassiveEffectMountStarted(e);
    }
    function Wf() {
      G !== null && typeof G.markComponentPassiveEffectMountStopped == "function" && G.markComponentPassiveEffectMountStopped();
    }
    function zs(e) {
      G !== null && typeof G.markComponentPassiveEffectUnmountStarted == "function" && G.markComponentPassiveEffectUnmountStarted(e);
    }
    function wv() {
      G !== null && typeof G.markComponentPassiveEffectUnmountStopped == "function" && G.markComponentPassiveEffectUnmountStopped();
    }
    function Dv(e) {
      G !== null && typeof G.markComponentLayoutEffectMountStarted == "function" && G.markComponentLayoutEffectMountStarted(e);
    }
    function kv() {
      G !== null && typeof G.markComponentLayoutEffectMountStopped == "function" && G.markComponentLayoutEffectMountStopped();
    }
    function Us(e) {
      G !== null && typeof G.markComponentLayoutEffectUnmountStarted == "function" && G.markComponentLayoutEffectUnmountStarted(e);
    }
    function tu() {
      G !== null && typeof G.markComponentLayoutEffectUnmountStopped == "function" && G.markComponentLayoutEffectUnmountStopped();
    }
    function As(e, t, a) {
      G !== null && typeof G.markComponentErrored == "function" && G.markComponentErrored(e, t, a);
    }
    function bv(e, t, a) {
      G !== null && typeof G.markComponentSuspended == "function" && G.markComponentSuspended(e, t, a);
    }
    function _v(e) {
      G !== null && typeof G.markLayoutEffectsStarted == "function" && G.markLayoutEffectsStarted(e);
    }
    function nu() {
      G !== null && typeof G.markLayoutEffectsStopped == "function" && G.markLayoutEffectsStopped();
    }
    function Ov(e) {
      G !== null && typeof G.markPassiveEffectsStarted == "function" && G.markPassiveEffectsStarted(e);
    }
    function mo() {
      G !== null && typeof G.markPassiveEffectsStopped == "function" && G.markPassiveEffectsStopped();
    }
    function aa(e) {
      G !== null && typeof G.markRenderStarted == "function" && G.markRenderStarted(e);
    }
    function yo() {
      G !== null && typeof G.markRenderYielded == "function" && G.markRenderYielded();
    }
    function ru() {
      G !== null && typeof G.markRenderStopped == "function" && G.markRenderStopped();
    }
    function il(e) {
      G !== null && typeof G.markRenderScheduled == "function" && G.markRenderScheduled(e);
    }
    function Xf(e, t) {
      G !== null && typeof G.markForceUpdateScheduled == "function" && G.markForceUpdateScheduled(e, t);
    }
    function wi(e, t) {
      G !== null && typeof G.markStateUpdateScheduled == "function" && G.markStateUpdateScheduled(e, t);
    }
    var Ce = (
      /*                         */
      0
    ), ze = (
      /*                 */
      1
    ), Ee = (
      /*                    */
      2
    ), Rt = (
      /*               */
      8
    ), zr = (
      /*              */
      16
    ), Hs = Math.clz32 ? Math.clz32 : ll, Fs = Math.log, qf = Math.LN2;
    function ll(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Fs(t) / qf | 0) | 0;
    }
    var yt = 31, U = (
      /*                        */
      0
    ), Ye = (
      /*                          */
      0
    ), Te = (
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
    ), $s = (
      /*                       */
      65536
    ), Ys = (
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
    ), Kf = ja, au = (
      /*          */
      134217728
    ), Ks = (
      /*                          */
      268435455
    ), iu = (
      /*               */
      268435456
    ), ki = (
      /*                        */
      536870912
    ), Zn = (
      /*                   */
      1073741824
    );
    function ny(e) {
      {
        if (e & Te)
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
        if (e & au)
          return "SelectiveHydration";
        if (e & iu)
          return "IdleHydration";
        if (e & ki)
          return "Idle";
        if (e & Zn)
          return "Offscreen";
      }
    }
    var dt = -1, Zs = sl, Js = ja;
    function lu(e) {
      switch (jt(e)) {
        case Te:
          return Te;
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
        case $s:
        case Ys:
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
        case au:
          return au;
        case iu:
          return iu;
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
      if (a === U)
        return U;
      var i = U, u = e.suspendedLanes, s = e.pingedLanes, f = a & Ks;
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
          y === gt && (R & Di) !== U
        )
          return t;
      }
      (i & pr) !== U && (i |= a & gt);
      var E = e.entangledLanes;
      if (E !== U)
        for (var _ = e.entanglements, O = i & E; O > 0; ) {
          var N = bi(O), ne = 1 << N;
          i |= _[N], O &= ~ne;
        }
      return i;
    }
    function Mv(e, t) {
      for (var a = e.eventTimes, i = dt; t > 0; ) {
        var u = bi(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function ec(e, t) {
      switch (e) {
        case Te:
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
        case $s:
        case Ys:
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
          return dt;
        case au:
        case iu:
        case ki:
        case Zn:
          return dt;
        default:
          return g("Should have found matching lanes. This is a bug in React."), dt;
      }
    }
    function ry(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = bi(f), v = 1 << p, m = s[p];
        m === dt ? ((v & i) === U || (v & u) !== U) && (s[p] = ec(v, t)) : m <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ay(e) {
      return lu(e.pendingLanes);
    }
    function Zf(e) {
      var t = e.pendingLanes & ~Zn;
      return t !== U ? t : t & Zn ? Zn : U;
    }
    function uu(e) {
      return (e & Te) !== U;
    }
    function To(e) {
      return (e & Ks) !== U;
    }
    function tc(e) {
      return (e & dl) === e;
    }
    function iy(e) {
      var t = Te | pr | gt;
      return (e & t) === U;
    }
    function Lv(e) {
      return (e & Di) === e;
    }
    function Ro(e, t) {
      var a = ma | pr | ul | gt;
      return (t & a) !== U;
    }
    function Nv(e, t) {
      return (t & e.expiredLanes) !== U;
    }
    function Jf(e) {
      return (e & Di) !== U;
    }
    function ed() {
      var e = Zs;
      return Zs <<= 1, (Zs & Di) === U && (Zs = sl), e;
    }
    function ly() {
      var e = Js;
      return Js <<= 1, (Js & dl) === U && (Js = ja), e;
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
      return (e & t) !== U;
    }
    function pl(e, t) {
      return (e & t) === t;
    }
    function Le(e, t) {
      return e | t;
    }
    function ou(e, t) {
      return e & ~t;
    }
    function td(e, t) {
      return e & t;
    }
    function zv(e) {
      return e;
    }
    function Uv(e, t) {
      return e !== Ye && e < t ? e : t;
    }
    function rc(e) {
      for (var t = [], a = 0; a < yt; a++)
        t.push(e);
      return t;
    }
    function vl(e, t, a) {
      e.pendingLanes |= t, t !== ki && (e.suspendedLanes = U, e.pingedLanes = U);
      var i = e.eventTimes, u = nc(t);
      i[u] = a;
    }
    function nd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = bi(i), s = 1 << u;
        a[u] = dt, i &= ~s;
      }
    }
    function rd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function ad(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = U, e.pingedLanes = U, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = bi(f), v = 1 << p;
        i[p] = U, u[p] = dt, s[p] = dt, f &= ~v;
      }
    }
    function su(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = bi(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function uy(e, t) {
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
        case $s:
        case Ys:
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
          i = iu;
          break;
        default:
          i = Ye;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Ye ? Ye : i;
    }
    function id(e, t, a) {
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
    function ld(e, t) {
      return null;
    }
    var Tn = Te, sn = pr, Pa = gt, xo = ki, hl = Ye;
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
    function oy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function ud(e, t) {
      return e !== 0 && e < t;
    }
    function Do(e) {
      var t = jt(e);
      return ud(Tn, t) ? ud(sn, t) ? To(t) ? Pa : xo : sn : Tn;
    }
    function Xt(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Av;
    function ie(e) {
      Av = e;
    }
    function cu(e) {
      Av(e);
    }
    var ko;
    function Hv(e) {
      ko = e;
    }
    var Fv;
    function bo(e) {
      Fv = e;
    }
    var _o;
    function od(e) {
      _o = e;
    }
    var sd;
    function Vv(e) {
      sd = e;
    }
    var ic = !1, fu = [], ya = null, Et = null, nn = null, Hr = /* @__PURE__ */ new Map(), du = /* @__PURE__ */ new Map(), $a = [], ia = [
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
    function Bv(e) {
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
    function jv(e, t) {
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
          p !== null && ko(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Pv(e, t, a, i, u) {
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
    function cd(e) {
      var t = Fo(e.target);
      if (t !== null) {
        var a = cr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ge) {
            var u = Vf(a);
            if (u !== null) {
              e.blockedOn = u, sd(e.priority, function() {
                Fv(a);
              });
              return;
            }
          } else if (i === H) {
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
    function $v(e) {
      for (var t = _o(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < $a.length && ud(t, $a[i].priority); i++)
        ;
      $a.splice(i, 0, a), i === 0 && cd(a);
    }
    function lc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = ml(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          uo(s), u.target.dispatchEvent(s), Zm();
        } else {
          var f = xu(i);
          return f !== null && ko(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Oo(e, t, a) {
      lc(e) && a.delete(t);
    }
    function fd() {
      ic = !1, ya !== null && lc(ya) && (ya = null), Et !== null && lc(Et) && (Et = null), nn !== null && lc(nn) && (nn = null), Hr.forEach(Oo), du.forEach(Oo);
    }
    function xn(e, t) {
      e.blockedOn === t && (e.blockedOn = null, ic || (ic = !0, I.unstable_scheduleCallback(I.unstable_NormalPriority, fd)));
    }
    function je(e) {
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
        cd(f), f.blockedOn === null && $a.shift();
      }
    }
    var xt = k.ReactCurrentBatchConfig, Mt = !0;
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
          u = qt;
          break;
        case sn:
          u = Mo;
          break;
        case Pa:
        default:
          u = Ya;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function qt(e, t, a, i) {
      var u = Ar(), s = xt.transition;
      xt.transition = null;
      try {
        Wt(Tn), Ya(e, t, a, i);
      } finally {
        Wt(u), xt.transition = s;
      }
    }
    function Mo(e, t, a, i) {
      var u = Ar(), s = xt.transition;
      xt.transition = null;
      try {
        Wt(sn), Ya(e, t, a, i);
      } finally {
        Wt(u), xt.transition = s;
      }
    }
    function Ya(e, t, a, i) {
      Mt && uc(e, t, a, i);
    }
    function uc(e, t, a, i) {
      var u = ml(e, t, a, i);
      if (u === null) {
        by(e, t, i, hu, a), jv(e, i);
        return;
      }
      if (Pv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (jv(e, i), t & Zi && Bv(e)) {
        for (; u !== null; ) {
          var s = xu(u);
          s !== null && cu(s);
          var f = ml(e, t, a, i);
          if (f === null && by(e, t, i, hu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      by(e, t, i, null, a);
    }
    var hu = null;
    function ml(e, t, a, i) {
      hu = null;
      var u = Ts(i), s = Fo(u);
      if (s !== null) {
        var f = cr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === ge) {
            var v = Vf(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === H) {
            var m = f.stateNode;
            if (Xt(m))
              return ks(f);
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
          var t = Pf();
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
    function dd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function mu(e, t, a) {
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
    function yu() {
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
      return Be(t.prototype, {
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
    }, kn = Pt(Dn), gu = Be({}, Dn, {
      view: 0,
      detail: 0
    }), pd = Pt(gu), Lo, vd, Fr;
    function Yv(e) {
      e !== Fr && (Fr && e.type === "mousemove" ? (Lo = e.screenX - Fr.screenX, vd = e.screenY - Fr.screenY) : (Lo = 0, vd = 0), Fr = e);
    }
    var Su = Be({}, gu, {
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
        return "movementX" in e ? e.movementX : (Yv(e), Lo);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : vd;
      }
    }), Mi = Pt(Su), hd = Be({}, Su, {
      dataTransfer: 0
    }), Cl = Pt(hd), Qv = Be({}, gu, {
      relatedTarget: 0
    }), fc = Pt(Qv), md = Be({}, Dn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), dc = Pt(md), sy = Be({}, Dn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), cy = Pt(sy), Iv = Be({}, Dn, {
      data: 0
    }), yd = Pt(Iv), El = yd, fy = {
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
    function Gv(e) {
      if (e.key) {
        var t = fy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = gl(e);
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
    function dy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Lt[e];
      return i ? !!a[i] : !1;
    }
    function pc(e) {
      return dy;
    }
    var py = Be({}, gu, {
      key: Gv,
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
    }), vy = Pt(py), Wv = Be({}, Su, {
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
    }), gd = Pt(Wv), hy = Be({}, gu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pc
    }), Vr = Pt(hy), Sd = Be({}, Dn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), my = Pt(Sd), Li = Be({}, Su, {
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
    var yy = gn && "TextEvent" in window && !Rl, hc = gn && (!zo || Rl && Rl > 8 && Rl <= 11), Xv = 32, Cd = String.fromCharCode(Xv);
    function qv() {
      Tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Tr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Tr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Tr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Uo = !1;
    function mc(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Kv(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Ed(e, t) {
      return e === "keydown" && t.keyCode === No;
    }
    function Zv(e, t) {
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
    function Td(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function yc(e) {
      return e.locale === "ko";
    }
    var Ia = !1;
    function Rd(e, t, a, i, u) {
      var s, f;
      if (zo ? s = Kv(t) : Ia ? Zv(t, i) && (s = "onCompositionEnd") : Ed(t, i) && (s = "onCompositionStart"), !s)
        return null;
      hc && !yc(i) && (!Ia && s === "onCompositionStart" ? Ia = Oi(u) : s === "onCompositionEnd" && Ia && (f = yu()));
      var p = rh(a, s);
      if (p.length > 0) {
        var v = new yd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var m = Td(i);
          m !== null && (v.data = m);
        }
      }
    }
    function gc(e, t) {
      switch (e) {
        case "compositionend":
          return Td(t);
        case "keypress":
          var a = t.which;
          return a !== Xv ? null : (Uo = !0, Cd);
        case "textInput":
          var i = t.data;
          return i === Cd && Uo ? null : i;
        default:
          return null;
      }
    }
    function Jv(e, t) {
      if (Ia) {
        if (e === "compositionend" || !zo && Zv(e, t)) {
          var a = yu();
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
    function gy(e, t, a, i, u) {
      var s;
      if (yy ? s = gc(t, i) : s = Jv(t, i), !s)
        return null;
      var f = rh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new El("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Sc(e, t, a, i, u, s, f) {
      Rd(e, t, a, i, u), gy(e, t, a, i, u);
    }
    var Sy = {
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
      return t === "input" ? !!Sy[e.type] : t === "textarea";
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
    function Cy(e) {
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
      var u = rh(t, "onChange");
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
      n(t, l, e, Ts(e)), Mf(d, t);
    }
    function d(e) {
      _0(e, 0);
    }
    function h(e) {
      var t = Dc(e);
      if (Vp(t))
        return e;
    }
    function S(e, t) {
      if (e === "change")
        return t;
    }
    var C = !1;
    gn && (C = Cy("input") && (!document.documentMode || document.documentMode > 9));
    function M(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", P);
    }
    function B() {
      r && (r.detachEvent("onpropertychange", P), r = null, l = null);
    }
    function P(e) {
      e.propertyName === "value" && h(l) && c(e);
    }
    function V(e, t, a) {
      e === "focusin" ? (B(), M(t, a)) : e === "focusout" && B();
    }
    function J(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return h(l);
    }
    function ue(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ce(e, t) {
      if (e === "click")
        return h(t);
    }
    function Ut(e, t) {
      if (e === "input" || e === "change")
        return h(t);
    }
    function x(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || di(e, "number", e.value);
    }
    function T(e, t, a, i, u, s, f) {
      var p = a ? Dc(a) : window, v, m;
      if (o(p) ? v = S : Eu(p) ? C ? v = Ut : (v = J, m = V) : ue(p) && (v = ce), v) {
        var y = v(t, a);
        if (y) {
          n(e, y, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && x(p);
    }
    function b() {
      ka("onMouseEnter", ["mouseout", "mouseover"]), ka("onMouseLeave", ["mouseout", "mouseover"]), ka("onPointerEnter", ["pointerout", "pointerover"]), ka("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Q(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !mv(i)) {
        var m = i.relatedTarget || i.fromElement;
        if (m && (Fo(m) || Hd(m)))
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
            var N = cr(_);
            (_ !== N || _.tag !== te && _.tag !== ke) && (_ = null);
          }
        } else
          E = null, _ = a;
        if (E !== _) {
          var ne = Mi, ye = "onMouseLeave", pe = "onMouseEnter", Ie = "mouse";
          (t === "pointerout" || t === "pointerover") && (ne = gd, ye = "onPointerLeave", pe = "onPointerEnter", Ie = "pointer");
          var Pe = E == null ? y : Dc(E), w = _ == null ? y : Dc(_), z = new ne(ye, Ie + "leave", E, i, u);
          z.target = Pe, z.relatedTarget = w;
          var D = null, $ = Fo(u);
          if ($ === a) {
            var re = new ne(pe, Ie + "enter", _, i, u);
            re.target = w, re.relatedTarget = Pe, D = re;
          }
          DT(e, z, D, E, _);
        }
      }
    }
    function fe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var oe = typeof Object.is == "function" ? Object.is : fe;
    function he(e, t) {
      if (oe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!$n.call(t, s) || !oe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function De(e) {
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
      for (var a = De(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Na) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = De(an(a));
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
      return Ey(e, u, s, f, p);
    }
    function Ey(e, t, a, i, u) {
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
    function uT(e, t) {
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
    function y0(e) {
      return e && e.nodeType === Na;
    }
    function g0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : y0(e) ? !1 : y0(t) ? g0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function oT(e) {
      return e && e.ownerDocument && g0(e.ownerDocument.documentElement, e);
    }
    function sT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function S0() {
      for (var e = window, t = ss(); t instanceof e.HTMLIFrameElement; ) {
        if (sT(t))
          e = t.contentWindow;
        else
          return t;
        t = ss(e.document);
      }
      return t;
    }
    function Ty(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function cT() {
      var e = S0();
      return {
        focusedElem: e,
        selectionRange: Ty(e) ? dT(e) : null
      };
    }
    function fT(e) {
      var t = S0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && oT(a)) {
        i !== null && Ty(a) && pT(a, i);
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
    function dT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ni(e), t || {
        start: 0,
        end: 0
      };
    }
    function pT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : uT(e, t);
    }
    var vT = gn && "documentMode" in document && document.documentMode <= 11;
    function hT() {
      Tr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Ec = null, Ry = null, xd = null, xy = !1;
    function mT(e) {
      if ("selectionStart" in e && Ty(e))
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
    function yT(e) {
      return e.window === e ? e.document : e.nodeType === ta ? e : e.ownerDocument;
    }
    function C0(e, t, a) {
      var i = yT(a);
      if (!(xy || Ec == null || Ec !== ss(i))) {
        var u = mT(Ec);
        if (!xd || !he(xd, u)) {
          xd = u;
          var s = rh(Ry, "onSelect");
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
    function gT(e, t, a, i, u, s, f) {
      var p = a ? Dc(a) : window;
      switch (t) {
        case "focusin":
          (Eu(p) || p.contentEditable === "true") && (Ec = p, Ry = a, xd = null);
          break;
        case "focusout":
          Ec = null, Ry = null, xd = null;
          break;
        case "mousedown":
          xy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          xy = !1, C0(e, i, u);
          break;
        case "selectionchange":
          if (vT)
            break;
        case "keydown":
        case "keyup":
          C0(e, i, u);
      }
    }
    function eh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Tc = {
      animationend: eh("Animation", "AnimationEnd"),
      animationiteration: eh("Animation", "AnimationIteration"),
      animationstart: eh("Animation", "AnimationStart"),
      transitionend: eh("Transition", "TransitionEnd")
    }, wy = {}, E0 = {};
    gn && (E0 = document.createElement("div").style, "AnimationEvent" in window || (delete Tc.animationend.animation, delete Tc.animationiteration.animation, delete Tc.animationstart.animation), "TransitionEvent" in window || delete Tc.transitionend.transition);
    function th(e) {
      if (wy[e])
        return wy[e];
      if (!Tc[e])
        return e;
      var t = Tc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in E0)
          return wy[e] = t[a];
      return e;
    }
    var T0 = th("animationend"), R0 = th("animationiteration"), x0 = th("animationstart"), w0 = th("transitionend"), D0 = /* @__PURE__ */ new Map(), k0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Tu(e, t) {
      D0.set(e, t), Tr(t, [e]);
    }
    function ST() {
      for (var e = 0; e < k0.length; e++) {
        var t = k0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Tu(a, "on" + i);
      }
      Tu(T0, "onAnimationEnd"), Tu(R0, "onAnimationIteration"), Tu(x0, "onAnimationStart"), Tu("dblclick", "onDoubleClick"), Tu("focusin", "onFocus"), Tu("focusout", "onBlur"), Tu(w0, "onTransitionEnd");
    }
    function CT(e, t, a, i, u, s, f) {
      var p = D0.get(t);
      if (p !== void 0) {
        var v = kn, m = t;
        switch (t) {
          case "keypress":
            if (gl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = vy;
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
          case T0:
          case R0:
          case x0:
            v = dc;
            break;
          case w0:
            v = my;
            break;
          case "scroll":
            v = pd;
            break;
          case "wheel":
            v = vc;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = cy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = gd;
            break;
        }
        var y = (s & Zi) !== 0;
        {
          var R = !y && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", E = xT(a, p, i.type, y, R);
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
    ST(), b(), Cc(), hT(), qv();
    function ET(e, t, a, i, u, s, f) {
      CT(e, t, a, i, u, s);
      var p = (s & Km) === 0;
      p && (Q(e, t, a, i, u), T(e, t, a, i, u), gT(e, t, a, i, u), Sc(e, t, a, i, u));
    }
    var wd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Dy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(wd));
    function b0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ha(i, t, void 0, e), e.currentTarget = null;
    }
    function TT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          b0(e, v, p), i = f;
        }
      else
        for (var m = 0; m < t.length; m++) {
          var y = t[m], R = y.instance, E = y.currentTarget, _ = y.listener;
          if (R !== i && e.isPropagationStopped())
            return;
          b0(e, _, E), i = R;
        }
    }
    function _0(e, t) {
      for (var a = (t & Zi) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        TT(s, f, a);
      }
      Uf();
    }
    function RT(e, t, a, i, u) {
      var s = Ts(a), f = [];
      ET(f, e, i, a, s, t), _0(f, t);
    }
    function wt(e, t) {
      Dy.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = JR(t), u = kT(e, a);
      i.has(u) || (O0(t, e, io, a), i.add(u));
    }
    function ky(e, t, a) {
      Dy.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Zi), O0(a, e, i, t);
    }
    var nh = "_reactListening" + Math.random().toString(36).slice(2);
    function Dd(e) {
      if (!e[nh]) {
        e[nh] = !0, Gr.forEach(function(a) {
          a !== "selectionchange" && (Dy.has(a) || ky(a, !1, e), ky(a, !0, e));
        });
        var t = e.nodeType === ta ? e : e.ownerDocument;
        t !== null && (t[nh] || (t[nh] = !0, ky("selectionchange", !1, t)));
      }
    }
    function O0(e, t, a, i, u) {
      var s = vu(e, t, a), f = void 0;
      co && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Qa(e, t, s, f) : mu(e, t, s) : f !== void 0 ? oc(e, t, s, f) : dd(e, t, s);
    }
    function M0(e, t) {
      return e === t || e.nodeType === Bt && e.parentNode === t;
    }
    function by(e, t, a, i, u) {
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
              if (v === H || v === j) {
                var m = p.stateNode.containerInfo;
                if (M0(m, f))
                  break;
                if (v === j)
                  for (var y = p.return; y !== null; ) {
                    var R = y.tag;
                    if (R === H || R === j) {
                      var E = y.stateNode.containerInfo;
                      if (M0(E, f))
                        return;
                    }
                    y = y.return;
                  }
                for (; m !== null; ) {
                  var _ = Fo(m);
                  if (_ === null)
                    return;
                  var O = _.tag;
                  if (O === te || O === ke) {
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
      Mf(function() {
        return RT(e, t, a, s);
      });
    }
    function kd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function xT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], m = e, y = null; m !== null; ) {
        var R = m, E = R.stateNode, _ = R.tag;
        if (_ === te && E !== null && (y = E, p !== null)) {
          var O = el(m, p);
          O != null && v.push(kd(m, O, y));
        }
        if (u)
          break;
        m = m.return;
      }
      return v;
    }
    function rh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === te && f !== null) {
          var v = f, m = el(u, a);
          m != null && i.unshift(kd(u, m, v));
          var y = el(u, t);
          y != null && i.push(kd(u, y, v));
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
      while (e && e.tag !== te);
      return e || null;
    }
    function wT(e, t) {
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
    function L0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, m = v.alternate, y = v.stateNode, R = v.tag;
        if (m !== null && m === i)
          break;
        if (R === te && y !== null) {
          var E = y;
          if (u) {
            var _ = el(p, s);
            _ != null && f.unshift(kd(p, _, E));
          } else if (!u) {
            var O = el(p, s);
            O != null && f.push(kd(p, O, E));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function DT(e, t, a, i, u) {
      var s = i && u ? wT(i, u) : null;
      i !== null && L0(e, t, i, s, !1), u !== null && a !== null && L0(e, a, u, s, !0);
    }
    function kT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Br = !1, bd = "dangerouslySetInnerHTML", ah = "suppressContentEditableWarning", Ru = "suppressHydrationWarning", N0 = "autoFocus", Ao = "children", Ho = "style", ih = "__html", _y, lh, _d, z0, uh, U0, A0;
    _y = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, lh = function(e, t) {
      Es(e, t), Df(e, t), hv(e, t, {
        registrationNameDependencies: sa,
        possibleRegistrationNames: Bu
      });
    }, U0 = gn && !document.documentMode, _d = function(e, t, a) {
      if (!Br) {
        var i = oh(a), u = oh(t);
        u !== i && (Br = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, z0 = function(e) {
      if (!Br) {
        Br = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, uh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, A0 = function(e, t) {
      var a = e.namespaceURI === La ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var bT = /\r\n?/g, _T = /\u0000|\uFFFD/g;
    function oh(e) {
      Qi(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(bT, `
`).replace(_T, "");
    }
    function sh(e, t, a, i) {
      var u = oh(t), s = oh(e);
      if (s !== u && (i && (Br || (Br = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Er))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function H0(e) {
      return e.nodeType === ta ? e : e.ownerDocument;
    }
    function OT() {
    }
    function ch(e) {
      e.onclick = OT;
    }
    function MT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ho)
            f && Object.freeze(f), iv(t, f);
          else if (s === bd) {
            var p = f ? f[ih] : void 0;
            p != null && Wp(t, p);
          } else if (s === Ao)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ys(t, f);
            } else
              typeof f == "number" && ys(t, "" + f);
          else
            s === ah || s === Ru || s === N0 || (sa.hasOwnProperty(s) ? f != null && (typeof f != "function" && uh(s, f), s === "onScroll" && wt("scroll", t)) : f != null && Ii(t, s, f, u));
        }
    }
    function LT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ho ? iv(e, f) : s === bd ? Wp(e, f) : s === Ao ? ys(e, f) : Ii(e, s, f, i);
      }
    }
    function NT(e, t, a, i) {
      var u, s = H0(a), f, p = i;
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
      return p === La && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !$n.call(_y, e) && (_y[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function zT(e, t) {
      return H0(t).createTextNode(e);
    }
    function UT(e, t, a, i) {
      var u = za(t, a);
      lh(t, a);
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
          for (var f = 0; f < wd.length; f++)
            wt(wd[f], e);
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
          Yp(e, a), s = hf(e, a), wt("invalid", e);
          break;
        case "textarea":
          Qp(e, a), s = yf(e, a), wt("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Ss(t, s), MT(t, e, i, s, u), t) {
        case "input":
          Xi(e), eo(e, a, !1);
          break;
        case "textarea":
          Xi(e), Gp(e);
          break;
        case "option":
          vf(e, a);
          break;
        case "select":
          Bm(e, a);
          break;
        default:
          typeof s.onClick == "function" && ch(e);
          break;
      }
    }
    function AT(e, t, a, i, u) {
      lh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Zu(e, a), p = Zu(e, i), s = [];
          break;
        case "select":
          f = hf(e, a), p = hf(e, i), s = [];
          break;
        case "textarea":
          f = yf(e, a), p = yf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && ch(e);
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
            v === bd || v === Ao || v === ah || v === Ru || v === N0 || (sa.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
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
          else if (v === bd) {
            var O = E ? E[ih] : void 0, N = _ ? _[ih] : void 0;
            O != null && N !== O && (s = s || []).push(v, O);
          } else
            v === Ao ? (typeof E == "string" || typeof E == "number") && (s = s || []).push(v, "" + E) : v === ah || v === Ru || (sa.hasOwnProperty(v) ? (E != null && (typeof E != "function" && uh(v, E), v === "onScroll" && wt("scroll", e)), !s && _ !== E && (s = [])) : (s = s || []).push(v, E));
      }
      return y && (ro(y, p[Ho]), (s = s || []).push(Ho, y)), s;
    }
    function HT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && pf(e, u);
      var s = za(a, i), f = za(a, u);
      switch (LT(e, t, s, f), a) {
        case "input":
          Ql(e, u);
          break;
        case "textarea":
          Ip(e, u);
          break;
        case "select":
          jm(e, u);
          break;
      }
    }
    function FT(e) {
      {
        var t = e.toLowerCase();
        return Cs.hasOwnProperty(t) && Cs[t] || null;
      }
    }
    function VT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = za(t, a), lh(t, a), t) {
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
          for (var m = 0; m < wd.length; m++)
            wt(wd[m], e);
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
          Yp(e, a), wt("invalid", e);
          break;
        case "textarea":
          Qp(e, a), wt("invalid", e);
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
          var N = a[O];
          if (O === Ao)
            typeof N == "string" ? e.textContent !== N && (a[Ru] !== !0 && sh(e.textContent, N, s, f), _ = [Ao, N]) : typeof N == "number" && e.textContent !== "" + N && (a[Ru] !== !0 && sh(e.textContent, N, s, f), _ = [Ao, "" + N]);
          else if (sa.hasOwnProperty(O))
            N != null && (typeof N != "function" && uh(O, N), O === "onScroll" && wt("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ne = void 0, ye = p && Pn ? null : fa(O);
            if (a[Ru] !== !0) {
              if (!(O === ah || O === Ru || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              O === "value" || O === "checked" || O === "selected")) {
                if (O === bd) {
                  var pe = e.innerHTML, Ie = N ? N[ih] : void 0;
                  if (Ie != null) {
                    var Pe = A0(e, Ie);
                    Pe !== pe && _d(O, pe, Pe);
                  }
                } else if (O === Ho) {
                  if (v.delete(O), U0) {
                    var w = Xm(N);
                    ne = e.getAttribute("style"), w !== ne && _d(O, ne, w);
                  }
                } else if (p && !Pn)
                  v.delete(O.toLowerCase()), ne = as(e, O, N), N !== ne && _d(O, ne, N);
                else if (!Yt(O, ye, p) && !kt(O, N, ye, p)) {
                  var z = !1;
                  if (ye !== null)
                    v.delete(ye.attributeName), ne = Pu(e, O, N, ye);
                  else {
                    var D = i;
                    if (D === La && (D = hs(t)), D === La)
                      v.delete(O.toLowerCase());
                    else {
                      var $ = FT(O);
                      $ !== null && $ !== O && (z = !0, v.delete($)), v.delete(O);
                    }
                    ne = as(e, O, N);
                  }
                  var re = Pn;
                  !re && N !== ne && !z && _d(O, ne, N);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Ru] !== !0 && z0(v), t) {
        case "input":
          Xi(e), eo(e, a, !0);
          break;
        case "textarea":
          Xi(e), Gp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && ch(e);
          break;
      }
      return _;
    }
    function BT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Oy(e, t) {
      {
        if (Br)
          return;
        Br = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function My(e, t) {
      {
        if (Br)
          return;
        Br = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t, a) {
      {
        if (Br)
          return;
        Br = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t) {
      {
        if (t === "" || Br)
          return;
        Br = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function jT(e, t, a) {
      switch (t) {
        case "input":
          Bp(e, a);
          return;
        case "textarea":
          gf(e, a);
          return;
        case "select":
          Pm(e, a);
          return;
      }
    }
    var Od = function() {
    }, Md = function() {
    };
    {
      var PT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], F0 = [
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
      ], $T = F0.concat(["button"]), YT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], V0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Md = function(e, t) {
        var a = Be({}, e || V0), i = {
          tag: t
        };
        return F0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), $T.indexOf(t) !== -1 && (a.pTagInButtonScope = null), PT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var QT = function(e, t) {
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
            return YT.indexOf(t) === -1;
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
      }, IT = function(e, t) {
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
      }, B0 = {};
      Od = function(e, t, a) {
        a = a || V0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = QT(e, u) ? null : i, f = s ? null : IT(e, a), p = s || f;
        if (p) {
          var v = p.tag, m = !!s + "|" + e + "|" + v;
          if (!B0[m]) {
            B0[m] = !0;
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
    var fh = "suppressHydrationWarning", dh = "$", ph = "/$", Ld = "$?", Nd = "$!", GT = "style", zy = null, Uy = null;
    function WT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ta:
        case qi: {
          t = i === ta ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Cf(null, "");
          break;
        }
        default: {
          var s = i === Bt ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Cf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Md(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function XT(e, t, a) {
      {
        var i = e, u = Cf(i.namespace, t), s = Md(i.ancestorInfo, t);
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
      zy = vr(), Uy = cT();
      var t = null;
      return rn(!1), t;
    }
    function KT(e) {
      fT(Uy), rn(zy), zy = null, Uy = null;
    }
    function ZT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Od(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Md(f.ancestorInfo, e);
          Od(null, p, v);
        }
        s = f.namespace;
      }
      var m = NT(e, t, a, s);
      return Ad(u, m), $y(m, t), m;
    }
    function JT(e, t) {
      e.appendChild(t);
    }
    function eR(e, t, a, i, u) {
      switch (UT(e, t, a, i), t) {
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
    function tR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Md(f.ancestorInfo, t);
          Od(null, p, v);
        }
      }
      return AT(e, t, a, i);
    }
    function Ay(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function nR(e, t, a, i) {
      {
        var u = a;
        Od(null, e, u.ancestorInfo);
      }
      var s = zT(e, t);
      return Ad(i, s), s;
    }
    function rR() {
      var e = window.event;
      return e === void 0 ? Pa : Mn(e.type);
    }
    var Hy = typeof setTimeout == "function" ? setTimeout : void 0, aR = typeof clearTimeout == "function" ? clearTimeout : void 0, Fy = -1, j0 = typeof Promise == "function" ? Promise : void 0, iR = typeof queueMicrotask == "function" ? queueMicrotask : typeof j0 < "u" ? function(e) {
      return j0.resolve(null).then(e).catch(lR);
    } : Hy;
    function lR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function uR(e, t, a, i) {
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
    function oR(e, t, a, i, u, s) {
      HT(e, t, a, i, u), $y(e, u);
    }
    function P0(e) {
      ys(e, "");
    }
    function sR(e, t, a) {
      e.nodeValue = a;
    }
    function cR(e, t) {
      e.appendChild(t);
    }
    function fR(e, t) {
      var a;
      e.nodeType === Bt ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && ch(a);
    }
    function dR(e, t, a) {
      e.insertBefore(t, a);
    }
    function pR(e, t, a) {
      e.nodeType === Bt ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function vR(e, t) {
      e.removeChild(t);
    }
    function hR(e, t) {
      e.nodeType === Bt ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Vy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Bt) {
          var s = u.data;
          if (s === ph)
            if (i === 0) {
              e.removeChild(u), je(t);
              return;
            } else
              i--;
          else
            (s === dh || s === Ld || s === Nd) && i++;
        }
        a = u;
      } while (a);
      je(t);
    }
    function mR(e, t) {
      e.nodeType === Bt ? Vy(e.parentNode, t) : e.nodeType === Qn && Vy(e, t), je(e);
    }
    function yR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function gR(e) {
      e.nodeValue = "";
    }
    function SR(e, t) {
      e = e;
      var a = t[GT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = gs("display", i);
    }
    function CR(e, t) {
      e.nodeValue = t;
    }
    function ER(e) {
      e.nodeType === Qn ? e.textContent = "" : e.nodeType === ta && e.documentElement && e.removeChild(e.documentElement);
    }
    function TR(e, t, a) {
      return e.nodeType !== Qn || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function RR(e, t) {
      return t === "" || e.nodeType !== Na ? null : e;
    }
    function xR(e) {
      return e.nodeType !== Bt ? null : e;
    }
    function $0(e) {
      return e.data === Ld;
    }
    function By(e) {
      return e.data === Nd;
    }
    function wR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function DR(e, t) {
      e._reactRetry = t;
    }
    function vh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Qn || t === Na)
          break;
        if (t === Bt) {
          var a = e.data;
          if (a === dh || a === Nd || a === Ld)
            break;
          if (a === ph)
            return null;
        }
      }
      return e;
    }
    function zd(e) {
      return vh(e.nextSibling);
    }
    function kR(e) {
      return vh(e.firstChild);
    }
    function bR(e) {
      return vh(e.firstChild);
    }
    function _R(e) {
      return vh(e.nextSibling);
    }
    function OR(e, t, a, i, u, s, f) {
      Ad(s, e), $y(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & ze) !== Ce;
      return VT(e, t, a, p, i, m, f);
    }
    function MR(e, t, a, i) {
      return Ad(a, e), a.mode & ze, BT(e, t);
    }
    function LR(e, t) {
      Ad(t, e);
    }
    function NR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Bt) {
          var i = t.data;
          if (i === ph) {
            if (a === 0)
              return zd(t);
            a--;
          } else
            (i === dh || i === Nd || i === Ld) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Y0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Bt) {
          var i = t.data;
          if (i === dh || i === Nd || i === Ld) {
            if (a === 0)
              return t;
            a--;
          } else
            i === ph && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function zR(e) {
      je(e);
    }
    function UR(e) {
      je(e);
    }
    function AR(e) {
      return e !== "head" && e !== "body";
    }
    function HR(e, t, a, i) {
      var u = !0;
      sh(t.nodeValue, a, i, u);
    }
    function FR(e, t, a, i, u, s) {
      if (t[fh] !== !0) {
        var f = !0;
        sh(i.nodeValue, u, s, f);
      }
    }
    function VR(e, t) {
      t.nodeType === Qn ? Oy(e, t) : t.nodeType === Bt || My(e, t);
    }
    function BR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Qn ? Oy(a, t) : t.nodeType === Bt || My(a, t));
      }
    }
    function jR(e, t, a, i, u) {
      (u || t[fh] !== !0) && (i.nodeType === Qn ? Oy(a, i) : i.nodeType === Bt || My(a, i));
    }
    function PR(e, t, a) {
      Ly(e, t);
    }
    function $R(e, t) {
      Ny(e, t);
    }
    function YR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ly(i, t);
      }
    }
    function QR(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ny(a, t);
      }
    }
    function IR(e, t, a, i, u, s) {
      (s || t[fh] !== !0) && Ly(a, i);
    }
    function GR(e, t, a, i, u) {
      (u || t[fh] !== !0) && Ny(a, i);
    }
    function WR(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function XR(e) {
      Dd(e);
    }
    var xc = Math.random().toString(36).slice(2), wc = "__reactFiber$" + xc, jy = "__reactProps$" + xc, Ud = "__reactContainer$" + xc, Py = "__reactEvents$" + xc, qR = "__reactListeners$" + xc, KR = "__reactHandles$" + xc;
    function ZR(e) {
      delete e[wc], delete e[jy], delete e[Py], delete e[qR], delete e[KR];
    }
    function Ad(e, t) {
      t[wc] = e;
    }
    function hh(e, t) {
      t[Ud] = e;
    }
    function Q0(e) {
      e[Ud] = null;
    }
    function Hd(e) {
      return !!e[Ud];
    }
    function Fo(e) {
      var t = e[wc];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Ud] || a[wc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = Y0(e); u !== null; ) {
              var s = u[wc];
              if (s)
                return s;
              u = Y0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function xu(e) {
      var t = e[wc] || e[Ud];
      return t && (t.tag === te || t.tag === ke || t.tag === ge || t.tag === H) ? t : null;
    }
    function Dc(e) {
      if (e.tag === te || e.tag === ke)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function mh(e) {
      return e[jy] || null;
    }
    function $y(e, t) {
      e[jy] = t;
    }
    function JR(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var I0 = {}, G0 = k.ReactDebugCurrentFrame;
    function yh(e) {
      if (e) {
        var t = e._owner, a = Iu(e.type, e._source, t ? t.type : null);
        G0.setExtraStackFrame(a);
      } else
        G0.setExtraStackFrame(null);
    }
    function Ga(e, t, a, i, u) {
      {
        var s = Function.call.bind($n);
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
            p && !(p instanceof Error) && (yh(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), yh(null)), p instanceof Error && !(p.message in I0) && (I0[p.message] = !0, yh(u), g("Failed %s type: %s", a, p.message), yh(null));
          }
      }
    }
    var Yy = [], gh;
    gh = [];
    var xl = -1;
    function wu(e) {
      return {
        current: e
      };
    }
    function er(e, t) {
      if (xl < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== gh[xl] && g("Unexpected Fiber popped."), e.current = Yy[xl], Yy[xl] = null, gh[xl] = null, xl--;
    }
    function tr(e, t, a) {
      xl++, Yy[xl] = e.current, gh[xl] = a, e.current = t;
    }
    var Qy;
    Qy = {};
    var la = {};
    Object.freeze(la);
    var wl = wu(la), zi = wu(!1), Iy = la;
    function kc(e, t, a) {
      return a && Ui(t) ? Iy : wl.current;
    }
    function W0(e, t, a) {
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
          var p = Oe(e) || "Unknown";
          Ga(i, s, "context", p);
        }
        return u && W0(e, t, s), s;
      }
    }
    function Sh() {
      return zi.current;
    }
    function Ui(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ch(e) {
      er(zi, e), er(wl, e);
    }
    function Gy(e) {
      er(zi, e), er(wl, e);
    }
    function X0(e, t, a) {
      {
        if (wl.current !== la)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        tr(wl, t, e), tr(zi, a, e);
      }
    }
    function q0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Oe(e) || "Unknown";
            Qy[s] || (Qy[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Oe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Oe(e) || "Unknown";
          Ga(u, f, "child context", v);
        }
        return Be({}, a, f);
      }
    }
    function Eh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || la;
        return Iy = wl.current, tr(wl, a, e), tr(zi, zi.current, e), !0;
      }
    }
    function K0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = q0(e, t, Iy);
          i.__reactInternalMemoizedMergedChildContext = u, er(zi, e), er(wl, e), tr(wl, u, e), tr(zi, a, e);
        } else
          er(zi, e), tr(zi, a, e);
      }
    }
    function ex(e) {
      {
        if (!Bf(e) || e.tag !== K)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case H:
              return t.stateNode.context;
            case K: {
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
    var Du = 0, Th = 1, Dl = null, Wy = !1, Xy = !1;
    function Z0(e) {
      Dl === null ? Dl = [e] : Dl.push(e);
    }
    function tx(e) {
      Wy = !0, Z0(e);
    }
    function J0() {
      Wy && ku();
    }
    function ku() {
      if (!Xy && Dl !== null) {
        Xy = !0;
        var e = 0, t = Ar();
        try {
          var a = !0, i = Dl;
          for (Wt(Tn); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Dl = null, Wy = !1;
        } catch (s) {
          throw Dl !== null && (Dl = Dl.slice(e + 1)), _s(Ms, ku), s;
        } finally {
          Wt(t), Xy = !1;
        }
      }
      return null;
    }
    var _c = [], Oc = 0, Rh = null, xh = 0, Ca = [], Ea = 0, Vo = null, kl = 1, bl = "";
    function nx(e) {
      return jo(), (e.flags & Hf) !== me;
    }
    function rx(e) {
      return jo(), xh;
    }
    function ax() {
      var e = bl, t = kl, a = t & ~ix(t);
      return a.toString(32) + e;
    }
    function Bo(e, t) {
      jo(), _c[Oc++] = xh, _c[Oc++] = Rh, Rh = e, xh = t;
    }
    function e1(e, t, a) {
      jo(), Ca[Ea++] = kl, Ca[Ea++] = bl, Ca[Ea++] = Vo, Vo = e;
      var i = kl, u = bl, s = wh(i) - 1, f = i & ~(1 << s), p = a + 1, v = wh(t) + s;
      if (v > 30) {
        var m = s - s % 5, y = (1 << m) - 1, R = (f & y).toString(32), E = f >> m, _ = s - m, O = wh(t) + _, N = p << _, ne = N | E, ye = R + u;
        kl = 1 << O | ne, bl = ye;
      } else {
        var pe = p << s, Ie = pe | f, Pe = u;
        kl = 1 << v | Ie, bl = Pe;
      }
    }
    function qy(e) {
      jo();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Bo(e, a), e1(e, a, i);
      }
    }
    function wh(e) {
      return 32 - Hs(e);
    }
    function ix(e) {
      return 1 << wh(e) - 1;
    }
    function Ky(e) {
      for (; e === Rh; )
        Rh = _c[--Oc], _c[Oc] = null, xh = _c[--Oc], _c[Oc] = null;
      for (; e === Vo; )
        Vo = Ca[--Ea], Ca[Ea] = null, bl = Ca[--Ea], Ca[Ea] = null, kl = Ca[--Ea], Ca[Ea] = null;
    }
    function lx() {
      return jo(), Vo !== null ? {
        id: kl,
        overflow: bl
      } : null;
    }
    function ux(e, t) {
      jo(), Ca[Ea++] = kl, Ca[Ea++] = bl, Ca[Ea++] = Vo, kl = t.id, bl = t.overflow, Vo = e;
    }
    function jo() {
      Nn() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ln = null, Ta = null, Wa = !1, Po = !1, bu = null;
    function ox() {
      Wa && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function t1() {
      Po = !0;
    }
    function sx() {
      return Po;
    }
    function cx(e) {
      var t = e.stateNode.containerInfo;
      return Ta = bR(t), Ln = e, Wa = !0, bu = null, Po = !1, !0;
    }
    function fx(e, t, a) {
      return Ta = _R(t), Ln = e, Wa = !0, bu = null, Po = !1, a !== null && ux(e, a), !0;
    }
    function n1(e, t) {
      switch (e.tag) {
        case H: {
          VR(e.stateNode.containerInfo, t);
          break;
        }
        case te: {
          var a = (e.mode & ze) !== Ce;
          jR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ge: {
          var i = e.memoizedState;
          i.dehydrated !== null && BR(i.dehydrated, t);
          break;
        }
      }
    }
    function r1(e, t) {
      n1(e, t);
      var a = vk();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ze) : i.push(a);
    }
    function Zy(e, t) {
      {
        if (Po)
          return;
        switch (e.tag) {
          case H: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case te:
                var i = t.type;
                t.pendingProps, PR(a, i);
                break;
              case ke:
                var u = t.pendingProps;
                $R(a, u);
                break;
            }
            break;
          }
          case te: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case te: {
                var v = t.type, m = t.pendingProps, y = (e.mode & ze) !== Ce;
                IR(
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
              case ke: {
                var R = t.pendingProps, E = (e.mode & ze) !== Ce;
                GR(
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
          case ge: {
            var _ = e.memoizedState, O = _.dehydrated;
            if (O !== null)
              switch (t.tag) {
                case te:
                  var N = t.type;
                  t.pendingProps, YR(O, N);
                  break;
                case ke:
                  var ne = t.pendingProps;
                  QR(O, ne);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function a1(e, t) {
      t.flags = t.flags & ~Mr | ht, Zy(e, t);
    }
    function i1(e, t) {
      switch (e.tag) {
        case te: {
          var a = e.type;
          e.pendingProps;
          var i = TR(t, a);
          return i !== null ? (e.stateNode = i, Ln = e, Ta = kR(i), !0) : !1;
        }
        case ke: {
          var u = e.pendingProps, s = RR(t, u);
          return s !== null ? (e.stateNode = s, Ln = e, Ta = null, !0) : !1;
        }
        case ge: {
          var f = xR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: lx(),
              retryLane: Zn
            };
            e.memoizedState = p;
            var v = hk(f);
            return v.return = e, e.child = v, Ln = e, Ta = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Jy(e) {
      return (e.mode & ze) !== Ce && (e.flags & we) === me;
    }
    function eg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function tg(e) {
      if (Wa) {
        var t = Ta;
        if (!t) {
          Jy(e) && (Zy(Ln, e), eg()), a1(Ln, e), Wa = !1, Ln = e;
          return;
        }
        var a = t;
        if (!i1(e, t)) {
          Jy(e) && (Zy(Ln, e), eg()), t = zd(a);
          var i = Ln;
          if (!t || !i1(e, t)) {
            a1(Ln, e), Wa = !1, Ln = e;
            return;
          }
          r1(i, a);
        }
      }
    }
    function dx(e, t, a) {
      var i = e.stateNode, u = !Po, s = OR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function px(e) {
      var t = e.stateNode, a = e.memoizedProps, i = MR(t, a, e);
      if (i) {
        var u = Ln;
        if (u !== null)
          switch (u.tag) {
            case H: {
              var s = u.stateNode.containerInfo, f = (u.mode & ze) !== Ce;
              HR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case te: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, y = (u.mode & ze) !== Ce;
              FR(
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
    function vx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      LR(a, e);
    }
    function hx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return NR(a);
    }
    function l1(e) {
      for (var t = e.return; t !== null && t.tag !== te && t.tag !== H && t.tag !== ge; )
        t = t.return;
      Ln = t;
    }
    function Dh(e) {
      if (e !== Ln)
        return !1;
      if (!Wa)
        return l1(e), Wa = !0, !1;
      if (e.tag !== H && (e.tag !== te || AR(e.type) && !Ay(e.type, e.memoizedProps))) {
        var t = Ta;
        if (t)
          if (Jy(e))
            u1(e), eg();
          else
            for (; t; )
              r1(e, t), t = zd(t);
      }
      return l1(e), e.tag === ge ? Ta = hx(e) : Ta = Ln ? zd(e.stateNode) : null, !0;
    }
    function mx() {
      return Wa && Ta !== null;
    }
    function u1(e) {
      for (var t = Ta; t; )
        n1(e, t), t = zd(t);
    }
    function Mc() {
      Ln = null, Ta = null, Wa = !1, Po = !1;
    }
    function o1() {
      bu !== null && (nE(bu), bu = null);
    }
    function Nn() {
      return Wa;
    }
    function ng(e) {
      bu === null ? bu = [e] : bu.push(e);
    }
    var yx = k.ReactCurrentBatchConfig, gx = null;
    function Sx() {
      return yx.transition;
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
      var Cx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Rt && (t = a), a = a.return;
        return t;
      }, $o = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Fd = [], Vd = [], Bd = [], jd = [], Pd = [], $d = [], Yo = /* @__PURE__ */ new Set();
      Xa.recordUnsafeLifecycleWarnings = function(e, t) {
        Yo.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Fd.push(e), e.mode & Rt && typeof t.UNSAFE_componentWillMount == "function" && Vd.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Bd.push(e), e.mode & Rt && typeof t.UNSAFE_componentWillReceiveProps == "function" && jd.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Pd.push(e), e.mode & Rt && typeof t.UNSAFE_componentWillUpdate == "function" && $d.push(e));
      }, Xa.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Fd.length > 0 && (Fd.forEach(function(E) {
          e.add(Oe(E) || "Component"), Yo.add(E.type);
        }), Fd = []);
        var t = /* @__PURE__ */ new Set();
        Vd.length > 0 && (Vd.forEach(function(E) {
          t.add(Oe(E) || "Component"), Yo.add(E.type);
        }), Vd = []);
        var a = /* @__PURE__ */ new Set();
        Bd.length > 0 && (Bd.forEach(function(E) {
          a.add(Oe(E) || "Component"), Yo.add(E.type);
        }), Bd = []);
        var i = /* @__PURE__ */ new Set();
        jd.length > 0 && (jd.forEach(function(E) {
          i.add(Oe(E) || "Component"), Yo.add(E.type);
        }), jd = []);
        var u = /* @__PURE__ */ new Set();
        Pd.length > 0 && (Pd.forEach(function(E) {
          u.add(Oe(E) || "Component"), Yo.add(E.type);
        }), Pd = []);
        var s = /* @__PURE__ */ new Set();
        if ($d.length > 0 && ($d.forEach(function(E) {
          s.add(Oe(E) || "Component"), Yo.add(E.type);
        }), $d = []), t.size > 0) {
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
          Ne(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var y = $o(a);
          Ne(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (u.size > 0) {
          var R = $o(u);
          Ne(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
      };
      var kh = /* @__PURE__ */ new Map(), s1 = /* @__PURE__ */ new Set();
      Xa.recordLegacyContextWarning = function(e, t) {
        var a = Cx(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!s1.has(e.type)) {
          var i = kh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], kh.set(a, i)), i.push(e));
        }
      }, Xa.flushLegacyContextWarning = function() {
        kh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Oe(s) || "Component"), s1.add(s.type);
            });
            var u = $o(i);
            try {
              lt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Qt();
            }
          }
        });
      }, Xa.discardPendingWarnings = function() {
        Fd = [], Vd = [], Bd = [], jd = [], Pd = [], $d = [], kh = /* @__PURE__ */ new Map();
      };
    }
    function qa(e, t) {
      if (e && e.defaultProps) {
        var a = Be({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var rg = wu(null), ag;
    ag = {};
    var bh = null, Lc = null, ig = null, _h = !1;
    function Oh() {
      bh = null, Lc = null, ig = null, _h = !1;
    }
    function c1() {
      _h = !0;
    }
    function f1() {
      _h = !1;
    }
    function d1(e, t, a) {
      tr(rg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ag && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ag;
    }
    function lg(e, t) {
      var a = rg.current;
      er(rg, t), e._currentValue = a;
    }
    function ug(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (pl(i.childLanes, t) ? u !== null && !pl(u.childLanes, t) && (u.childLanes = Le(u.childLanes, t)) : (i.childLanes = Le(i.childLanes, t), u !== null && (u.childLanes = Le(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ex(e, t, a) {
      Tx(e, t, a);
    }
    function Tx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === K) {
                var p = Gt(a), v = _l(dt, p);
                v.tag = Lh;
                var m = i.updateQueue;
                if (m !== null) {
                  var y = m.shared, R = y.pending;
                  R === null ? v.next = v : (v.next = R.next, R.next = v), y.pending = v;
                }
              }
              i.lanes = Le(i.lanes, a);
              var E = i.alternate;
              E !== null && (E.lanes = Le(E.lanes, a)), ug(i.return, a, e), s.lanes = Le(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === F)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Ht) {
          var _ = i.return;
          if (_ === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          _.lanes = Le(_.lanes, a);
          var O = _.alternate;
          O !== null && (O.lanes = Le(O.lanes, a)), ug(_, a, e), u = i.sibling;
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
            var N = u.sibling;
            if (N !== null) {
              N.return = u.return, u = N;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Nc(e, t) {
      bh = e, Lc = null, ig = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Jn(a.lanes, t) && rp(), a.firstContext = null);
      }
    }
    function ln(e) {
      _h && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (ig !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Lc === null) {
          if (bh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Lc = a, bh.dependencies = {
            lanes: U,
            firstContext: a
          };
        } else
          Lc = Lc.next = a;
      }
      return t;
    }
    var Qo = null;
    function og(e) {
      Qo === null ? Qo = [e] : Qo.push(e);
    }
    function Rx() {
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
    function p1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, og(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Mh(e, i);
    }
    function xx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, og(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function wx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, og(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Mh(e, i);
    }
    function jr(e, t) {
      return Mh(e, t);
    }
    var Dx = Mh;
    function Mh(e, t) {
      e.lanes = Le(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Le(a.lanes, t)), a === null && (e.flags & (ht | Mr)) !== me && vE(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Le(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Le(a.childLanes, t) : (u.flags & (ht | Mr)) !== me && vE(e), i = u, u = u.return;
      if (i.tag === H) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var v1 = 0, h1 = 1, Lh = 2, sg = 3, Nh = !1, cg, zh;
    cg = !1, zh = null;
    function fg(e) {
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
    function m1(e, t) {
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
        tag: v1,
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
      if (zh === u && !cg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), cg = !0), DD()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Dx(e, a);
      } else
        return wx(e, u, t, a);
    }
    function Uh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Jf(a)) {
          var s = u.lanes;
          s = td(s, e.pendingLanes);
          var f = Le(s, a);
          u.lanes = f, su(e, f);
        }
      }
    }
    function dg(e, t) {
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
    function kx(e, t, a, i, u, s) {
      switch (a.tag) {
        case h1: {
          var f = a.payload;
          if (typeof f == "function") {
            c1();
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
              f1();
            }
            return p;
          }
          return f;
        }
        case sg:
          e.flags = e.flags & ~en | we;
        case v1: {
          var v = a.payload, m;
          if (typeof v == "function") {
            c1(), m = v.call(s, i, u);
            {
              if (e.mode & Rt) {
                It(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  It(!1);
                }
              }
              f1();
            }
          } else
            m = v;
          return m == null ? i : Be({}, i, m);
        }
        case Lh:
          return Nh = !0, i;
      }
      return i;
    }
    function Ah(e, t, a, i) {
      var u = e.updateQueue;
      Nh = !1, zh = u.shared;
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
        var _ = u.baseState, O = U, N = null, ne = null, ye = null, pe = s;
        do {
          var Ie = pe.lane, Pe = pe.eventTime;
          if (pl(i, Ie)) {
            if (ye !== null) {
              var z = {
                eventTime: Pe,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ye,
                tag: pe.tag,
                payload: pe.payload,
                callback: pe.callback,
                next: null
              };
              ye = ye.next = z;
            }
            _ = kx(e, u, pe, _, t, a);
            var D = pe.callback;
            if (D !== null && // If the update was already committed, we should not queue its
            // callback again.
            pe.lane !== Ye) {
              e.flags |= va;
              var $ = u.effects;
              $ === null ? u.effects = [pe] : $.push(pe);
            }
          } else {
            var w = {
              eventTime: Pe,
              lane: Ie,
              tag: pe.tag,
              payload: pe.payload,
              callback: pe.callback,
              next: null
            };
            ye === null ? (ne = ye = w, N = _) : ye = ye.next = w, O = Le(O, Ie);
          }
          if (pe = pe.next, pe === null) {
            if (p = u.shared.pending, p === null)
              break;
            var re = p, Z = re.next;
            re.next = null, pe = Z, u.lastBaseUpdate = re, u.shared.pending = null;
          }
        } while (!0);
        ye === null && (N = _), u.baseState = N, u.firstBaseUpdate = ne, u.lastBaseUpdate = ye;
        var xe = u.shared.interleaved;
        if (xe !== null) {
          var _e = xe;
          do
            O = Le(O, _e.lane), _e = _e.next;
          while (_e !== xe);
        } else
          s === null && (u.shared.lanes = U);
        hp(O), e.lanes = O, e.memoizedState = _;
      }
      zh = null;
    }
    function bx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function y1() {
      Nh = !1;
    }
    function Hh() {
      return Nh;
    }
    function g1(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, bx(f, a));
        }
    }
    var pg = {}, S1 = new L.Component().refs, vg, hg, mg, yg, gg, C1, Fh, Sg, Cg, Eg;
    {
      vg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set(), mg = /* @__PURE__ */ new Set(), yg = /* @__PURE__ */ new Set(), Sg = /* @__PURE__ */ new Set(), gg = /* @__PURE__ */ new Set(), Cg = /* @__PURE__ */ new Set(), Eg = /* @__PURE__ */ new Set();
      var E1 = /* @__PURE__ */ new Set();
      Fh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          E1.has(a) || (E1.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, C1 = function(e, t) {
        if (t === void 0) {
          var a = ct(e) || "Component";
          gg.has(a) || (gg.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(pg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(pg);
    }
    function Tg(e, t, a, i) {
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
        C1(t, s);
      }
      var f = s == null ? u : Be({}, u, s);
      if (e.memoizedState = f, e.lanes === U) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Rg = {
      isMounted: fr,
      enqueueSetState: function(e, t, a) {
        var i = _r(e), u = yr(), s = Hu(i), f = _l(u, s);
        f.payload = t, a != null && (Fh(a, "setState"), f.callback = a);
        var p = _u(i, f, s);
        p !== null && (yn(p, i, s, u), Uh(p, i, s)), wi(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = _r(e), u = yr(), s = Hu(i), f = _l(u, s);
        f.tag = h1, f.payload = t, a != null && (Fh(a, "replaceState"), f.callback = a);
        var p = _u(i, f, s);
        p !== null && (yn(p, i, s, u), Uh(p, i, s)), wi(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = _r(e), i = yr(), u = Hu(a), s = _l(i, u);
        s.tag = Lh, t != null && (Fh(t, "forceUpdate"), s.callback = t);
        var f = _u(a, s, u);
        f !== null && (yn(f, a, u, i), Uh(f, a, u)), Xf(a, u);
      }
    };
    function T1(e, t, a, i, u, s, f) {
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
          v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", ct(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !he(a, i) || !he(u, s) : !0;
    }
    function _x(e, t, a) {
      var i = e.stateNode;
      {
        var u = ct(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Cg.has(t) && (Cg.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", ct(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !mg.has(t) && (mg.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", ct(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Zt(p)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function R1(e, t) {
      t.updater = Rg, e.stateNode = t, Jl(t, e), t._reactInternalInstance = pg;
    }
    function x1(e, t, a) {
      var i = !1, u = la, s = la, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === nf && f._context === void 0
        );
        if (!p && !Eg.has(t)) {
          Eg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === tf ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", ct(t) || "Component", v);
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
      R1(e, y);
      {
        if (typeof t.getDerivedStateFromProps == "function" && R === null) {
          var E = ct(t) || "Component";
          hg.has(E) || (hg.add(E), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", E, y.state === null ? "null" : "undefined", E));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var _ = null, O = null, N = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? _ = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (_ = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? O = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (O = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? N = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (N = "UNSAFE_componentWillUpdate"), _ !== null || O !== null || N !== null) {
            var ne = ct(t) || "Component", ye = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            yg.has(ne) || (yg.add(ne), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ne, ye, _ !== null ? `
  ` + _ : "", O !== null ? `
  ` + O : "", N !== null ? `
  ` + N : ""));
          }
        }
      }
      return i && W0(e, u, s), y;
    }
    function Ox(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Oe(e) || "Component"), Rg.enqueueReplaceState(t, t.state, null));
    }
    function w1(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Oe(e) || "Component";
          vg.has(s) || (vg.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Rg.enqueueReplaceState(t, t.state, null);
      }
    }
    function xg(e, t, a, i) {
      _x(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = S1, fg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = ln(s);
      else {
        var f = kc(e, t, !0);
        u.context = bc(e, f);
      }
      {
        if (u.state === a) {
          var p = ct(t) || "Component";
          Sg.has(p) || (Sg.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Rt && Xa.recordLegacyContextWarning(e, u), Xa.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (Tg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Ox(e, u), Ah(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = Me;
        m |= Gn, (e.mode & zr) !== Ce && (m |= Wn), e.flags |= m;
      }
    }
    function Mx(e, t, a, i) {
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
      !R && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && w1(e, u, a, v), y1();
      var E = e.memoizedState, _ = u.state = E;
      if (Ah(e, a, u, i), _ = e.memoizedState, s === a && E === _ && !Sh() && !Hh()) {
        if (typeof u.componentDidMount == "function") {
          var O = Me;
          O |= Gn, (e.mode & zr) !== Ce && (O |= Wn), e.flags |= O;
        }
        return !1;
      }
      typeof y == "function" && (Tg(e, t, y, a), _ = e.memoizedState);
      var N = Hh() || T1(e, t, s, a, E, _, v);
      if (N) {
        if (!R && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ne = Me;
          ne |= Gn, (e.mode & zr) !== Ce && (ne |= Wn), e.flags |= ne;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var ye = Me;
          ye |= Gn, (e.mode & zr) !== Ce && (ye |= Wn), e.flags |= ye;
        }
        e.memoizedProps = a, e.memoizedState = _;
      }
      return u.props = a, u.state = _, u.context = v, N;
    }
    function Lx(e, t, a, i, u) {
      var s = t.stateNode;
      m1(e, t);
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
      !O && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== R) && w1(t, s, i, R), y1();
      var N = t.memoizedState, ne = s.state = N;
      if (Ah(t, i, s, u), ne = t.memoizedState, f === v && N === ne && !Sh() && !Hh() && !Re)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= Me), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= Or), !1;
      typeof _ == "function" && (Tg(t, a, _, i), ne = t.memoizedState);
      var ye = Hh() || T1(t, a, p, i, N, ne, R) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Re;
      return ye ? (!O && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ne, R), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ne, R)), typeof s.componentDidUpdate == "function" && (t.flags |= Me), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Or)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= Me), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= Or), t.memoizedProps = i, t.memoizedState = ne), s.props = i, s.state = ne, s.context = R, ye;
    }
    var wg, Dg, kg, bg, _g, D1 = function(e, t) {
    };
    wg = !1, Dg = !1, kg = {}, bg = {}, _g = {}, D1 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Oe(t) || "Component";
        bg[a] || (bg[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Yd(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Rt || lr) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Oe(e) || "Component";
          kg[u] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), kg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== K)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Yi(i, "ref");
          var m = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === m)
            return t.ref;
          var y = function(R) {
            var E = v.refs;
            E === S1 && (E = v.refs = {}), R === null ? delete E[m] : E[m] = R;
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
    function Vh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Bh(e) {
      {
        var t = Oe(e) || "Component";
        if (_g[t])
          return;
        _g[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function k1(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function b1(e) {
      function t(w, z) {
        if (e) {
          var D = w.deletions;
          D === null ? (w.deletions = [z], w.flags |= Ze) : D.push(z);
        }
      }
      function a(w, z) {
        if (!e)
          return null;
        for (var D = z; D !== null; )
          t(w, D), D = D.sibling;
        return null;
      }
      function i(w, z) {
        for (var D = /* @__PURE__ */ new Map(), $ = z; $ !== null; )
          $.key !== null ? D.set($.key, $) : D.set($.index, $), $ = $.sibling;
        return D;
      }
      function u(w, z) {
        var D = Jo(w, z);
        return D.index = 0, D.sibling = null, D;
      }
      function s(w, z, D) {
        if (w.index = D, !e)
          return w.flags |= Hf, z;
        var $ = w.alternate;
        if ($ !== null) {
          var re = $.index;
          return re < z ? (w.flags |= ht, z) : re;
        } else
          return w.flags |= ht, z;
      }
      function f(w) {
        return e && w.alternate === null && (w.flags |= ht), w;
      }
      function p(w, z, D, $) {
        if (z === null || z.tag !== ke) {
          var re = n0(D, w.mode, $);
          return re.return = w, re;
        } else {
          var Z = u(z, D);
          return Z.return = w, Z;
        }
      }
      function v(w, z, D, $) {
        var re = D.type;
        if (re === _a)
          return y(w, z, D.props.children, $, D.key);
        if (z !== null && (z.elementType === re || // Keep this check inline so it only runs on the false path:
        gE(z, D) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof re == "object" && re !== null && re.$$typeof === On && k1(re) === z.type)) {
          var Z = u(z, D.props);
          return Z.ref = Yd(w, z, D), Z.return = w, Z._debugSource = D._source, Z._debugOwner = D._owner, Z;
        }
        var xe = t0(D, w.mode, $);
        return xe.ref = Yd(w, z, D), xe.return = w, xe;
      }
      function m(w, z, D, $) {
        if (z === null || z.tag !== j || z.stateNode.containerInfo !== D.containerInfo || z.stateNode.implementation !== D.implementation) {
          var re = r0(D, w.mode, $);
          return re.return = w, re;
        } else {
          var Z = u(z, D.children || []);
          return Z.return = w, Z;
        }
      }
      function y(w, z, D, $, re) {
        if (z === null || z.tag !== Fe) {
          var Z = Vu(D, w.mode, $, re);
          return Z.return = w, Z;
        } else {
          var xe = u(z, D);
          return xe.return = w, xe;
        }
      }
      function R(w, z, D) {
        if (typeof z == "string" && z !== "" || typeof z == "number") {
          var $ = n0("" + z, w.mode, D);
          return $.return = w, $;
        }
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Fl: {
              var re = t0(z, w.mode, D);
              return re.ref = Yd(w, null, z), re.return = w, re;
            }
            case Kr: {
              var Z = r0(z, w.mode, D);
              return Z.return = w, Z;
            }
            case On: {
              var xe = z._payload, _e = z._init;
              return R(w, _e(xe), D);
            }
          }
          if (Zt(z) || Oa(z)) {
            var ot = Vu(z, w.mode, D, null);
            return ot.return = w, ot;
          }
          Vh(w, z);
        }
        return typeof z == "function" && Bh(w), null;
      }
      function E(w, z, D, $) {
        var re = z !== null ? z.key : null;
        if (typeof D == "string" && D !== "" || typeof D == "number")
          return re !== null ? null : p(w, z, "" + D, $);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case Fl:
              return D.key === re ? v(w, z, D, $) : null;
            case Kr:
              return D.key === re ? m(w, z, D, $) : null;
            case On: {
              var Z = D._payload, xe = D._init;
              return E(w, z, xe(Z), $);
            }
          }
          if (Zt(D) || Oa(D))
            return re !== null ? null : y(w, z, D, $, null);
          Vh(w, D);
        }
        return typeof D == "function" && Bh(w), null;
      }
      function _(w, z, D, $, re) {
        if (typeof $ == "string" && $ !== "" || typeof $ == "number") {
          var Z = w.get(D) || null;
          return p(z, Z, "" + $, re);
        }
        if (typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case Fl: {
              var xe = w.get($.key === null ? D : $.key) || null;
              return v(z, xe, $, re);
            }
            case Kr: {
              var _e = w.get($.key === null ? D : $.key) || null;
              return m(z, _e, $, re);
            }
            case On:
              var ot = $._payload, qe = $._init;
              return _(w, z, D, qe(ot), re);
          }
          if (Zt($) || Oa($)) {
            var Kt = w.get(D) || null;
            return y(z, Kt, $, re, null);
          }
          Vh(z, $);
        }
        return typeof $ == "function" && Bh(z), null;
      }
      function O(w, z, D) {
        {
          if (typeof w != "object" || w === null)
            return z;
          switch (w.$$typeof) {
            case Fl:
            case Kr:
              D1(w, D);
              var $ = w.key;
              if (typeof $ != "string")
                break;
              if (z === null) {
                z = /* @__PURE__ */ new Set(), z.add($);
                break;
              }
              if (!z.has($)) {
                z.add($);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", $);
              break;
            case On:
              var re = w._payload, Z = w._init;
              O(Z(re), z, D);
              break;
          }
        }
        return z;
      }
      function N(w, z, D, $) {
        for (var re = null, Z = 0; Z < D.length; Z++) {
          var xe = D[Z];
          re = O(xe, re, w);
        }
        for (var _e = null, ot = null, qe = z, Kt = 0, Ke = 0, $t = null; qe !== null && Ke < D.length; Ke++) {
          qe.index > Ke ? ($t = qe, qe = null) : $t = qe.sibling;
          var rr = E(w, qe, D[Ke], $);
          if (rr === null) {
            qe === null && (qe = $t);
            break;
          }
          e && qe && rr.alternate === null && t(w, qe), Kt = s(rr, Kt, Ke), ot === null ? _e = rr : ot.sibling = rr, ot = rr, qe = $t;
        }
        if (Ke === D.length) {
          if (a(w, qe), Nn()) {
            var Bn = Ke;
            Bo(w, Bn);
          }
          return _e;
        }
        if (qe === null) {
          for (; Ke < D.length; Ke++) {
            var oa = R(w, D[Ke], $);
            oa !== null && (Kt = s(oa, Kt, Ke), ot === null ? _e = oa : ot.sibling = oa, ot = oa);
          }
          if (Nn()) {
            var gr = Ke;
            Bo(w, gr);
          }
          return _e;
        }
        for (var Sr = i(w, qe); Ke < D.length; Ke++) {
          var ar = _(Sr, w, Ke, D[Ke], $);
          ar !== null && (e && ar.alternate !== null && Sr.delete(ar.key === null ? Ke : ar.key), Kt = s(ar, Kt, Ke), ot === null ? _e = ar : ot.sibling = ar, ot = ar);
        }
        if (e && Sr.forEach(function(qc) {
          return t(w, qc);
        }), Nn()) {
          var Ul = Ke;
          Bo(w, Ul);
        }
        return _e;
      }
      function ne(w, z, D, $) {
        var re = Oa(D);
        if (typeof re != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          D[Symbol.toStringTag] === "Generator" && (Dg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Dg = !0), D.entries === re && (wg || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), wg = !0);
          var Z = re.call(D);
          if (Z)
            for (var xe = null, _e = Z.next(); !_e.done; _e = Z.next()) {
              var ot = _e.value;
              xe = O(ot, xe, w);
            }
        }
        var qe = re.call(D);
        if (qe == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Kt = null, Ke = null, $t = z, rr = 0, Bn = 0, oa = null, gr = qe.next(); $t !== null && !gr.done; Bn++, gr = qe.next()) {
          $t.index > Bn ? (oa = $t, $t = null) : oa = $t.sibling;
          var Sr = E(w, $t, gr.value, $);
          if (Sr === null) {
            $t === null && ($t = oa);
            break;
          }
          e && $t && Sr.alternate === null && t(w, $t), rr = s(Sr, rr, Bn), Ke === null ? Kt = Sr : Ke.sibling = Sr, Ke = Sr, $t = oa;
        }
        if (gr.done) {
          if (a(w, $t), Nn()) {
            var ar = Bn;
            Bo(w, ar);
          }
          return Kt;
        }
        if ($t === null) {
          for (; !gr.done; Bn++, gr = qe.next()) {
            var Ul = R(w, gr.value, $);
            Ul !== null && (rr = s(Ul, rr, Bn), Ke === null ? Kt = Ul : Ke.sibling = Ul, Ke = Ul);
          }
          if (Nn()) {
            var qc = Bn;
            Bo(w, qc);
          }
          return Kt;
        }
        for (var Cp = i(w, $t); !gr.done; Bn++, gr = qe.next()) {
          var $i = _(Cp, w, Bn, gr.value, $);
          $i !== null && (e && $i.alternate !== null && Cp.delete($i.key === null ? Bn : $i.key), rr = s($i, rr, Bn), Ke === null ? Kt = $i : Ke.sibling = $i, Ke = $i);
        }
        if (e && Cp.forEach(function(Ik) {
          return t(w, Ik);
        }), Nn()) {
          var Qk = Bn;
          Bo(w, Qk);
        }
        return Kt;
      }
      function ye(w, z, D, $) {
        if (z !== null && z.tag === ke) {
          a(w, z.sibling);
          var re = u(z, D);
          return re.return = w, re;
        }
        a(w, z);
        var Z = n0(D, w.mode, $);
        return Z.return = w, Z;
      }
      function pe(w, z, D, $) {
        for (var re = D.key, Z = z; Z !== null; ) {
          if (Z.key === re) {
            var xe = D.type;
            if (xe === _a) {
              if (Z.tag === Fe) {
                a(w, Z.sibling);
                var _e = u(Z, D.props.children);
                return _e.return = w, _e._debugSource = D._source, _e._debugOwner = D._owner, _e;
              }
            } else if (Z.elementType === xe || // Keep this check inline so it only runs on the false path:
            gE(Z, D) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof xe == "object" && xe !== null && xe.$$typeof === On && k1(xe) === Z.type) {
              a(w, Z.sibling);
              var ot = u(Z, D.props);
              return ot.ref = Yd(w, Z, D), ot.return = w, ot._debugSource = D._source, ot._debugOwner = D._owner, ot;
            }
            a(w, Z);
            break;
          } else
            t(w, Z);
          Z = Z.sibling;
        }
        if (D.type === _a) {
          var qe = Vu(D.props.children, w.mode, $, D.key);
          return qe.return = w, qe;
        } else {
          var Kt = t0(D, w.mode, $);
          return Kt.ref = Yd(w, z, D), Kt.return = w, Kt;
        }
      }
      function Ie(w, z, D, $) {
        for (var re = D.key, Z = z; Z !== null; ) {
          if (Z.key === re)
            if (Z.tag === j && Z.stateNode.containerInfo === D.containerInfo && Z.stateNode.implementation === D.implementation) {
              a(w, Z.sibling);
              var xe = u(Z, D.children || []);
              return xe.return = w, xe;
            } else {
              a(w, Z);
              break;
            }
          else
            t(w, Z);
          Z = Z.sibling;
        }
        var _e = r0(D, w.mode, $);
        return _e.return = w, _e;
      }
      function Pe(w, z, D, $) {
        var re = typeof D == "object" && D !== null && D.type === _a && D.key === null;
        if (re && (D = D.props.children), typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case Fl:
              return f(pe(w, z, D, $));
            case Kr:
              return f(Ie(w, z, D, $));
            case On:
              var Z = D._payload, xe = D._init;
              return Pe(w, z, xe(Z), $);
          }
          if (Zt(D))
            return N(w, z, D, $);
          if (Oa(D))
            return ne(w, z, D, $);
          Vh(w, D);
        }
        return typeof D == "string" && D !== "" || typeof D == "number" ? f(ye(w, z, "" + D, $)) : (typeof D == "function" && Bh(w), a(w, z));
      }
      return Pe;
    }
    var zc = b1(!0), _1 = b1(!1);
    function Nx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Jo(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Jo(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function zx(e, t) {
      for (var a = e.child; a !== null; )
        sk(a, t), a = a.sibling;
    }
    var Qd = {}, Ou = wu(Qd), Id = wu(Qd), jh = wu(Qd);
    function Ph(e) {
      if (e === Qd)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function O1() {
      var e = Ph(jh.current);
      return e;
    }
    function Og(e, t) {
      tr(jh, t, e), tr(Id, e, e), tr(Ou, Qd, e);
      var a = WT(t);
      er(Ou, e), tr(Ou, a, e);
    }
    function Uc(e) {
      er(Ou, e), er(Id, e), er(jh, e);
    }
    function Mg() {
      var e = Ph(Ou.current);
      return e;
    }
    function M1(e) {
      Ph(jh.current);
      var t = Ph(Ou.current), a = XT(t, e.type);
      t !== a && (tr(Id, e, e), tr(Ou, a, e));
    }
    function Lg(e) {
      Id.current === e && (er(Ou, e), er(Id, e));
    }
    var Ux = 0, L1 = 1, N1 = 1, Gd = 2, Ka = wu(Ux);
    function Ng(e, t) {
      return (e & t) !== 0;
    }
    function Ac(e) {
      return e & L1;
    }
    function zg(e, t) {
      return e & L1 | t;
    }
    function Ax(e, t) {
      return e | t;
    }
    function Mu(e, t) {
      tr(Ka, t, e);
    }
    function Hc(e) {
      er(Ka, e);
    }
    function Hx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function $h(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ge) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || $0(i) || By(i))
              return t;
          }
        } else if (t.tag === pt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & we) !== me;
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
    ), Ug = [];
    function Ag() {
      for (var e = 0; e < Ug.length; e++) {
        var t = Ug[e];
        t._workInProgressVersionPrimary = null;
      }
      Ug.length = 0;
    }
    function Fx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ee = k.ReactCurrentDispatcher, Wd = k.ReactCurrentBatchConfig, Hg, Fc;
    Hg = /* @__PURE__ */ new Set();
    var Io = U, ut = null, dn = null, pn = null, Yh = !1, Xd = !1, qd = 0, Vx = 0, Bx = 25, A = null, Ra = null, Lu = -1, Fg = !1;
    function et() {
      {
        var e = A;
        Ra === null ? Ra = [e] : Ra.push(e);
      }
    }
    function W() {
      {
        var e = A;
        Ra !== null && (Lu++, Ra[Lu] !== e && jx(e));
      }
    }
    function Vc(e) {
      e != null && !Zt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", A, typeof e);
    }
    function jx(e) {
      {
        var t = Oe(ut);
        if (!Hg.has(t) && (Hg.add(t), Ra !== null)) {
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
    function Vg(e, t) {
      if (Fg)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", A), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, A, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!oe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Bc(e, t, a, i, u, s) {
      Io = s, ut = t, Ra = e !== null ? e._debugHookTypes : null, Lu = -1, Fg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = U, e !== null && e.memoizedState !== null ? ee.current = tC : Ra !== null ? ee.current = eC : ee.current = J1;
      var f = a(i, u);
      if (Xd) {
        var p = 0;
        do {
          if (Xd = !1, qd = 0, p >= Bx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Fg = !1, dn = null, pn = null, t.updateQueue = null, Lu = -1, ee.current = nC, f = a(i, u);
        } while (Xd);
      }
      ee.current = rm, t._debugHookTypes = Ra;
      var v = dn !== null && dn.next !== null;
      if (Io = U, ut = null, dn = null, pn = null, A = null, Ra = null, Lu = -1, e !== null && (e.flags & un) !== (t.flags & un) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ze) !== Ce && g("Internal React error: Expected static flag was missing. Please notify the React team."), Yh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function jc() {
      var e = qd !== 0;
      return qd = 0, e;
    }
    function z1(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & zr) !== Ce ? t.flags &= ~(rl | Wn | Ct | Me) : t.flags &= ~(Ct | Me), e.lanes = ou(e.lanes, a);
    }
    function U1() {
      if (ee.current = rm, Yh) {
        for (var e = ut.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Yh = !1;
      }
      Io = U, ut = null, dn = null, pn = null, Ra = null, Lu = -1, A = null, W1 = !1, Xd = !1, qd = 0;
    }
    function Hi() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pn === null ? ut.memoizedState = pn = e : pn = pn.next = e, pn;
    }
    function xa() {
      var e;
      if (dn === null) {
        var t = ut.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dn.next;
      var a;
      if (pn === null ? a = ut.memoizedState : a = pn.next, a !== null)
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
        pn === null ? ut.memoizedState = pn = i : pn = pn.next = i;
      }
      return pn;
    }
    function A1() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Bg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function jg(e, t, a) {
      var i = Hi(), u;
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
      var f = s.dispatch = Qx.bind(null, ut, s);
      return [i.memoizedState, f];
    }
    function Pg(e, t, a) {
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
        var y = f.next, R = s.baseState, E = null, _ = null, O = null, N = y;
        do {
          var ne = N.lane;
          if (pl(Io, ne)) {
            if (O !== null) {
              var pe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ye,
                action: N.action,
                hasEagerState: N.hasEagerState,
                eagerState: N.eagerState,
                next: null
              };
              O = O.next = pe;
            }
            if (N.hasEagerState)
              R = N.eagerState;
            else {
              var Ie = N.action;
              R = e(R, Ie);
            }
          } else {
            var ye = {
              lane: ne,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            };
            O === null ? (_ = O = ye, E = R) : O = O.next = ye, ut.lanes = Le(ut.lanes, ne), hp(ne);
          }
          N = N.next;
        } while (N !== null && N !== y);
        O === null ? E = R : O.next = _, oe(R, i.memoizedState) || rp(), i.memoizedState = R, i.baseState = E, i.baseQueue = O, u.lastRenderedState = R;
      }
      var Pe = u.interleaved;
      if (Pe !== null) {
        var w = Pe;
        do {
          var z = w.lane;
          ut.lanes = Le(ut.lanes, z), hp(z), w = w.next;
        } while (w !== Pe);
      } else
        f === null && (u.lanes = U);
      var D = u.dispatch;
      return [i.memoizedState, D];
    }
    function $g(e, t, a) {
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
        oe(p, i.memoizedState) || rp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Sb(e, t, a) {
    }
    function Cb(e, t, a) {
    }
    function Yg(e, t, a) {
      var i = ut, u = Hi(), s, f = Nn();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Fc || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Fc = !0);
      } else {
        if (s = t(), !Fc) {
          var p = t();
          oe(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Fc = !0);
        }
        var v = Em();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ro(v, Io) || H1(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, Xh(V1.bind(null, i, m, e), [e]), i.flags |= Ct, Kd(cn | zn, F1.bind(null, i, m, s, t), void 0, null), s;
    }
    function Qh(e, t, a) {
      var i = ut, u = xa(), s = t();
      if (!Fc) {
        var f = t();
        oe(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Fc = !0);
      }
      var p = u.memoizedState, v = !oe(p, s);
      v && (u.memoizedState = s, rp());
      var m = u.queue;
      if (Jd(V1.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pn !== null && pn.memoizedState.tag & cn) {
        i.flags |= Ct, Kd(cn | zn, F1.bind(null, i, m, s, t), void 0, null);
        var y = Em();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ro(y, Io) || H1(i, t, s);
      }
      return s;
    }
    function H1(e, t, a) {
      e.flags |= vo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = ut.updateQueue;
      if (u === null)
        u = A1(), ut.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function F1(e, t, a, i) {
      t.value = a, t.getSnapshot = i, B1(t) && j1(e);
    }
    function V1(e, t, a) {
      var i = function() {
        B1(t) && j1(e);
      };
      return a(i);
    }
    function B1(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !oe(a, i);
      } catch {
        return !0;
      }
    }
    function j1(e) {
      var t = jr(e, Te);
      t !== null && yn(t, e, Te, dt);
    }
    function Ih(e) {
      var t = Hi();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: U,
        dispatch: null,
        lastRenderedReducer: Bg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Ix.bind(null, ut, a);
      return [t.memoizedState, i];
    }
    function Qg(e) {
      return Pg(Bg);
    }
    function Ig(e) {
      return $g(Bg);
    }
    function Kd(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = ut.updateQueue;
      if (s === null)
        s = A1(), ut.updateQueue = s, s.lastEffect = u.next = u;
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
    function Gg(e) {
      var t = Hi();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Gh(e) {
      var t = xa();
      return t.memoizedState;
    }
    function Zd(e, t, a, i) {
      var u = Hi(), s = i === void 0 ? null : i;
      ut.flags |= e, u.memoizedState = Kd(cn | t, a, void 0, s);
    }
    function Wh(e, t, a, i) {
      var u = xa(), s = i === void 0 ? null : i, f = void 0;
      if (dn !== null) {
        var p = dn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Vg(s, v)) {
            u.memoizedState = Kd(t, a, f, s);
            return;
          }
        }
      }
      ut.flags |= e, u.memoizedState = Kd(cn | t, a, f, s);
    }
    function Xh(e, t) {
      return (ut.mode & zr) !== Ce ? Zd(rl | Ct | Si, zn, e, t) : Zd(Ct | Si, zn, e, t);
    }
    function Jd(e, t) {
      return Wh(Ct, zn, e, t);
    }
    function Wg(e, t) {
      return Zd(Me, Ai, e, t);
    }
    function qh(e, t) {
      return Wh(Me, Ai, e, t);
    }
    function Xg(e, t) {
      var a = Me;
      return a |= Gn, (ut.mode & zr) !== Ce && (a |= Wn), Zd(a, fn, e, t);
    }
    function Kh(e, t) {
      return Wh(Me, fn, e, t);
    }
    function P1(e, t) {
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
    function qg(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Me;
      return u |= Gn, (ut.mode & zr) !== Ce && (u |= Wn), Zd(u, fn, P1.bind(null, t, e), i);
    }
    function Zh(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Wh(Me, fn, P1.bind(null, t, e), i);
    }
    function Px(e, t) {
    }
    var Jh = Px;
    function Kg(e, t) {
      var a = Hi(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function em(e, t) {
      var a = xa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Vg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Zg(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function tm(e, t) {
      var a = xa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Vg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Jg(e) {
      var t = Hi();
      return t.memoizedState = e, e;
    }
    function $1(e) {
      var t = xa(), a = dn, i = a.memoizedState;
      return Q1(t, i, e);
    }
    function Y1(e) {
      var t = xa();
      if (dn === null)
        return t.memoizedState = e, e;
      var a = dn.memoizedState;
      return Q1(t, a, e);
    }
    function Q1(e, t, a) {
      var i = !iy(Io);
      if (i) {
        if (!oe(a, t)) {
          var u = ed();
          ut.lanes = Le(ut.lanes, u), hp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, rp()), e.memoizedState = a, a;
    }
    function $x(e, t, a) {
      var i = Ar();
      Wt(Rn(i, sn)), e(!0);
      var u = Wd.transition;
      Wd.transition = {};
      var s = Wd.transition;
      Wd.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Wt(i), Wd.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Ne("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function eS() {
      var e = Ih(!1), t = e[0], a = e[1], i = $x.bind(null, a), u = Hi();
      return u.memoizedState = i, [t, i];
    }
    function I1() {
      var e = Qg(), t = e[0], a = xa(), i = a.memoizedState;
      return [t, i];
    }
    function G1() {
      var e = Ig(), t = e[0], a = xa(), i = a.memoizedState;
      return [t, i];
    }
    var W1 = !1;
    function Yx() {
      return W1;
    }
    function tS() {
      var e = Hi(), t = Em(), a = t.identifierPrefix, i;
      if (Nn()) {
        var u = ax();
        i = ":" + a + "R" + u;
        var s = qd++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Vx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function nm() {
      var e = xa(), t = e.memoizedState;
      return t;
    }
    function Qx(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Hu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (X1(e))
        q1(t, u);
      else {
        var s = p1(e, t, u, i);
        if (s !== null) {
          var f = yr();
          yn(s, e, i, f), K1(s, t, i);
        }
      }
      Z1(e, i);
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
      if (X1(e))
        q1(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === U && (s === null || s.lanes === U)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ee.current, ee.current = Za;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, oe(m, v)) {
                xx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ee.current = p;
            }
          }
        }
        var y = p1(e, t, u, i);
        if (y !== null) {
          var R = yr();
          yn(y, e, i, R), K1(y, t, i);
        }
      }
      Z1(e, i);
    }
    function X1(e) {
      var t = e.alternate;
      return e === ut || t !== null && t === ut;
    }
    function q1(e, t) {
      Xd = Yh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function K1(e, t, a) {
      if (Jf(a)) {
        var i = t.lanes;
        i = td(i, e.pendingLanes);
        var u = Le(i, a);
        t.lanes = u, su(e, u);
      }
    }
    function Z1(e, t, a) {
      wi(e, t);
    }
    var rm = {
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
      unstable_isNewReconciler: X
    }, J1 = null, eC = null, tC = null, nC = null, Fi = null, Za = null, am = null;
    {
      var nS = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, be = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      J1 = {
        readContext: function(e) {
          return ln(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", et(), Vc(t), Kg(e, t);
        },
        useContext: function(e) {
          return A = "useContext", et(), ln(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", et(), Vc(t), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", et(), Vc(a), qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", et(), Vc(t), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", et(), Vc(t), Xg(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", et(), Vc(t);
          var a = ee.current;
          ee.current = Fi;
          try {
            return Zg(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", et();
          var i = ee.current;
          ee.current = Fi;
          try {
            return jg(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", et(), Gg(e);
        },
        useState: function(e) {
          A = "useState", et();
          var t = ee.current;
          ee.current = Fi;
          try {
            return Ih(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", et(), void 0;
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", et(), Jg(e);
        },
        useTransition: function() {
          return A = "useTransition", et(), eS();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", et(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", et(), Yg(e, t, a);
        },
        useId: function() {
          return A = "useId", et(), tS();
        },
        unstable_isNewReconciler: X
      }, eC = {
        readContext: function(e) {
          return ln(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", W(), Kg(e, t);
        },
        useContext: function(e) {
          return A = "useContext", W(), ln(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", W(), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", W(), qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", W(), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", W(), Xg(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", W();
          var a = ee.current;
          ee.current = Fi;
          try {
            return Zg(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", W();
          var i = ee.current;
          ee.current = Fi;
          try {
            return jg(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", W(), Gg(e);
        },
        useState: function(e) {
          A = "useState", W();
          var t = ee.current;
          ee.current = Fi;
          try {
            return Ih(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", W(), void 0;
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", W(), Jg(e);
        },
        useTransition: function() {
          return A = "useTransition", W(), eS();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", W(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", W(), Yg(e, t, a);
        },
        useId: function() {
          return A = "useId", W(), tS();
        },
        unstable_isNewReconciler: X
      }, tC = {
        readContext: function(e) {
          return ln(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", W(), em(e, t);
        },
        useContext: function(e) {
          return A = "useContext", W(), ln(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", W(), Jd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", W(), Zh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", W(), qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", W(), Kh(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", W();
          var a = ee.current;
          ee.current = Za;
          try {
            return tm(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", W();
          var i = ee.current;
          ee.current = Za;
          try {
            return Pg(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", W(), Gh();
        },
        useState: function(e) {
          A = "useState", W();
          var t = ee.current;
          ee.current = Za;
          try {
            return Qg(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", W(), Jh();
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", W(), $1(e);
        },
        useTransition: function() {
          return A = "useTransition", W(), I1();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", W(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", W(), Qh(e, t);
        },
        useId: function() {
          return A = "useId", W(), nm();
        },
        unstable_isNewReconciler: X
      }, nC = {
        readContext: function(e) {
          return ln(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", W(), em(e, t);
        },
        useContext: function(e) {
          return A = "useContext", W(), ln(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", W(), Jd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", W(), Zh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", W(), qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", W(), Kh(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", W();
          var a = ee.current;
          ee.current = am;
          try {
            return tm(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", W();
          var i = ee.current;
          ee.current = am;
          try {
            return $g(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", W(), Gh();
        },
        useState: function(e) {
          A = "useState", W();
          var t = ee.current;
          ee.current = am;
          try {
            return Ig(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", W(), Jh();
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", W(), Y1(e);
        },
        useTransition: function() {
          return A = "useTransition", W(), G1();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", W(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", W(), Qh(e, t);
        },
        useId: function() {
          return A = "useId", W(), nm();
        },
        unstable_isNewReconciler: X
      }, Fi = {
        readContext: function(e) {
          return nS(), ln(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", be(), et(), Kg(e, t);
        },
        useContext: function(e) {
          return A = "useContext", be(), et(), ln(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", be(), et(), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", be(), et(), qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", be(), et(), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", be(), et(), Xg(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", be(), et();
          var a = ee.current;
          ee.current = Fi;
          try {
            return Zg(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", be(), et();
          var i = ee.current;
          ee.current = Fi;
          try {
            return jg(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", be(), et(), Gg(e);
        },
        useState: function(e) {
          A = "useState", be(), et();
          var t = ee.current;
          ee.current = Fi;
          try {
            return Ih(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", be(), et(), void 0;
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", be(), et(), Jg(e);
        },
        useTransition: function() {
          return A = "useTransition", be(), et(), eS();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", be(), et(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", be(), et(), Yg(e, t, a);
        },
        useId: function() {
          return A = "useId", be(), et(), tS();
        },
        unstable_isNewReconciler: X
      }, Za = {
        readContext: function(e) {
          return nS(), ln(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", be(), W(), em(e, t);
        },
        useContext: function(e) {
          return A = "useContext", be(), W(), ln(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", be(), W(), Jd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", be(), W(), Zh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", be(), W(), qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", be(), W(), Kh(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", be(), W();
          var a = ee.current;
          ee.current = Za;
          try {
            return tm(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", be(), W();
          var i = ee.current;
          ee.current = Za;
          try {
            return Pg(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", be(), W(), Gh();
        },
        useState: function(e) {
          A = "useState", be(), W();
          var t = ee.current;
          ee.current = Za;
          try {
            return Qg(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", be(), W(), Jh();
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", be(), W(), $1(e);
        },
        useTransition: function() {
          return A = "useTransition", be(), W(), I1();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", be(), W(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", be(), W(), Qh(e, t);
        },
        useId: function() {
          return A = "useId", be(), W(), nm();
        },
        unstable_isNewReconciler: X
      }, am = {
        readContext: function(e) {
          return nS(), ln(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", be(), W(), em(e, t);
        },
        useContext: function(e) {
          return A = "useContext", be(), W(), ln(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", be(), W(), Jd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", be(), W(), Zh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", be(), W(), qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", be(), W(), Kh(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", be(), W();
          var a = ee.current;
          ee.current = Za;
          try {
            return tm(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", be(), W();
          var i = ee.current;
          ee.current = Za;
          try {
            return $g(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", be(), W(), Gh();
        },
        useState: function(e) {
          A = "useState", be(), W();
          var t = ee.current;
          ee.current = Za;
          try {
            return Ig(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", be(), W(), Jh();
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", be(), W(), Y1(e);
        },
        useTransition: function() {
          return A = "useTransition", be(), W(), G1();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", be(), W(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", be(), W(), Qh(e, t);
        },
        useId: function() {
          return A = "useId", be(), W(), nm();
        },
        unstable_isNewReconciler: X
      };
    }
    var Nu = I.unstable_now, rC = 0, im = -1, ep = -1, lm = -1, rS = !1, um = !1;
    function aC() {
      return rS;
    }
    function Gx() {
      um = !0;
    }
    function Wx() {
      rS = !1, um = !1;
    }
    function Xx() {
      rS = um, um = !1;
    }
    function iC() {
      return rC;
    }
    function lC() {
      rC = Nu();
    }
    function aS(e) {
      ep = Nu(), e.actualStartTime < 0 && (e.actualStartTime = Nu());
    }
    function uC(e) {
      ep = -1;
    }
    function om(e, t) {
      if (ep >= 0) {
        var a = Nu() - ep;
        e.actualDuration += a, t && (e.selfBaseDuration = a), ep = -1;
      }
    }
    function Vi(e) {
      if (im >= 0) {
        var t = Nu() - im;
        im = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case H:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ve:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function iS(e) {
      if (lm >= 0) {
        var t = Nu() - lm;
        lm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case H:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ve:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Bi() {
      im = Nu();
    }
    function lS() {
      lm = Nu();
    }
    function uS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Go(e, t) {
      return {
        value: e,
        source: t,
        stack: sf(t),
        digest: null
      };
    }
    function oS(e, t, a) {
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
    function sS(e, t) {
      try {
        var a = qx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === K)
            return;
          console.error(i);
        }
        var p = u ? Oe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === H)
          m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var y = Oe(e) || "Anonymous";
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
    var Kx = typeof WeakMap == "function" ? WeakMap : Map;
    function oC(e, t, a) {
      var i = _l(dt, a);
      i.tag = sg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        $D(u), sS(e, t);
      }, i;
    }
    function cS(e, t, a) {
      var i = _l(dt, a);
      i.tag = sg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          SE(e), sS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        SE(e), sS(e, t), typeof u != "function" && jD(this);
        var v = t.value, m = t.stack;
        this.componentDidCatch(v, {
          componentStack: m !== null ? m : ""
        }), typeof u != "function" && (Jn(e.lanes, Te) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Oe(e) || "Unknown"));
      }), i;
    }
    function sC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Kx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = YD.bind(null, e, t, a);
        on && mp(e, a), t.then(s, s);
      }
    }
    function Zx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function Jx(e, t) {
      var a = e.tag;
      if ((e.mode & ze) === Ce && (a === de || a === Y || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function cC(e) {
      var t = e;
      do {
        if (t.tag === ge && Hx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function fC(e, t, a, i, u) {
      if ((e.mode & ze) === Ce) {
        if (e === t)
          e.flags |= en;
        else {
          if (e.flags |= we, a.flags |= ho, a.flags &= ~(Ds | sr), a.tag === K) {
            var s = a.alternate;
            if (s === null)
              a.tag = ir;
            else {
              var f = _l(dt, Te);
              f.tag = Lh, _u(a, f, Te);
            }
          }
          a.lanes = Le(a.lanes, Te);
        }
        return e;
      }
      return e.flags |= en, e.lanes = u, e;
    }
    function ew(e, t, a, i, u) {
      if (a.flags |= sr, on && mp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Jx(a), Nn() && a.mode & ze && t1();
        var f = cC(t);
        if (f !== null) {
          f.flags &= ~Ot, fC(f, t, a, e, u), f.mode & ze && sC(e, s, u), Zx(f, e, s);
          return;
        } else {
          if (!uu(u)) {
            sC(e, s, u), $S();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Nn() && a.mode & ze) {
        t1();
        var v = cC(t);
        if (v !== null) {
          (v.flags & en) === me && (v.flags |= Ot), fC(v, t, a, e, u), ng(Go(i, a));
          return;
        }
      }
      i = Go(i, a), ND(i);
      var m = t;
      do {
        switch (m.tag) {
          case H: {
            var y = i;
            m.flags |= en;
            var R = Gt(u);
            m.lanes = Le(m.lanes, R);
            var E = oC(m, y, R);
            dg(m, E);
            return;
          }
          case K:
            var _ = i, O = m.type, N = m.stateNode;
            if ((m.flags & we) === me && (typeof O.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && !cE(N))) {
              m.flags |= en;
              var ne = Gt(u);
              m.lanes = Le(m.lanes, ne);
              var ye = cS(m, _, ne);
              dg(m, ye);
              return;
            }
            break;
        }
        m = m.return;
      } while (m !== null);
    }
    function tw() {
      return null;
    }
    var tp = k.ReactCurrentOwner, Ja = !1, fS, np, dS, pS, vS, Wo, hS, sm;
    fS = {}, np = {}, dS = {}, pS = {}, vS = {}, Wo = !1, hS = {}, sm = {};
    function hr(e, t, a, i) {
      e === null ? t.child = _1(t, null, a, i) : t.child = zc(t, e.child, a, i);
    }
    function nw(e, t, a, i) {
      t.child = zc(t, e.child, null, i), t.child = zc(t, null, a, i);
    }
    function dC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ga(
          s,
          i,
          // Resolved props
          "prop",
          ct(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      Nc(t, u), xi(t);
      {
        if (tp.current = t, ea(!0), v = Bc(e, t, f, i, p, u), m = jc(), t.mode & Rt) {
          It(!0);
          try {
            v = Bc(e, t, f, i, p, u), m = jc();
          } finally {
            It(!1);
          }
        }
        ea(!1);
      }
      return al(), e !== null && !Ja ? (z1(e, t, u), Ol(e, t, u)) : (Nn() && m && qy(t), t.flags |= yi, hr(e, t, v, u), t.child);
    }
    function pC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (uk(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Xc(s), t.tag = He, t.type = f, gS(t, s), vC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Ga(
            p,
            i,
            // Resolved props
            "prop",
            ct(s)
          );
        }
        var v = e0(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var m = a.type, y = m.propTypes;
        y && Ga(
          y,
          i,
          // Resolved props
          "prop",
          ct(m)
        );
      }
      var R = e.child, E = xS(e, u);
      if (!E) {
        var _ = R.memoizedProps, O = a.compare;
        if (O = O !== null ? O : he, O(_, i) && e.ref === t.ref)
          return Ol(e, t, u);
      }
      t.flags |= yi;
      var N = Jo(R, i);
      return N.ref = t.ref, N.return = t, t.child = N, N;
    }
    function vC(e, t, a, i, u) {
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
            ct(s)
          );
        }
      }
      if (e !== null) {
        var y = e.memoizedProps;
        if (he(y, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Ja = !1, t.pendingProps = i = y, xS(e, u))
            (e.flags & ho) !== me && (Ja = !0);
          else
            return t.lanes = e.lanes, Ol(e, t, u);
      }
      return mS(e, t, a, i, u);
    }
    function hC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ae)
        if ((t.mode & ze) === Ce) {
          var f = {
            baseLanes: U,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Tm(t, a);
        } else if (Jn(a, Zn)) {
          var R = {
            baseLanes: U,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = R;
          var E = s !== null ? s.baseLanes : a;
          Tm(t, E);
        } else {
          var p = null, v;
          if (s !== null) {
            var m = s.baseLanes;
            v = Le(m, a);
          } else
            v = a;
          t.lanes = t.childLanes = Zn;
          var y = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = y, t.updateQueue = null, Tm(t, v), null;
        }
      else {
        var _;
        s !== null ? (_ = Le(s.baseLanes, a), t.memoizedState = null) : _ = a, Tm(t, _);
      }
      return hr(e, t, u, a), t.child;
    }
    function rw(e, t, a) {
      var i = t.pendingProps;
      return hr(e, t, i, a), t.child;
    }
    function aw(e, t, a) {
      var i = t.pendingProps.children;
      return hr(e, t, i, a), t.child;
    }
    function iw(e, t, a) {
      {
        t.flags |= Me;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return hr(e, t, s, a), t.child;
    }
    function mC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= In, t.flags |= Ff);
    }
    function mS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ga(
          s,
          i,
          // Resolved props
          "prop",
          ct(a)
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
        if (tp.current = t, ea(!0), v = Bc(e, t, a, i, f, u), m = jc(), t.mode & Rt) {
          It(!0);
          try {
            v = Bc(e, t, a, i, f, u), m = jc();
          } finally {
            It(!1);
          }
        }
        ea(!1);
      }
      return al(), e !== null && !Ja ? (z1(e, t, u), Ol(e, t, u)) : (Nn() && m && qy(t), t.flags |= yi, hr(e, t, v, u), t.child);
    }
    function yC(e, t, a, i, u) {
      {
        switch (Tk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= we, t.flags |= en;
            var m = new Error("Simulated error coming from DevTools"), y = Gt(u);
            t.lanes = Le(t.lanes, y);
            var R = cS(t, Go(m, t), y);
            dg(t, R);
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
            ct(a)
          );
        }
      }
      var _;
      Ui(a) ? (_ = !0, Eh(t)) : _ = !1, Nc(t, u);
      var O = t.stateNode, N;
      O === null ? (fm(e, t), x1(t, a, i), xg(t, a, i, u), N = !0) : e === null ? N = Mx(t, a, i, u) : N = Lx(e, t, a, i, u);
      var ne = yS(e, t, a, N, _, u);
      {
        var ye = t.stateNode;
        N && ye.props !== i && (Wo || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Oe(t) || "a component"), Wo = !0);
      }
      return ne;
    }
    function yS(e, t, a, i, u, s) {
      mC(e, t);
      var f = (t.flags & we) !== me;
      if (!i && !f)
        return u && K0(t, a, !1), Ol(e, t, s);
      var p = t.stateNode;
      tp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, uC();
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
      return t.flags |= yi, e !== null && f ? nw(e, t, v, s) : hr(e, t, v, s), t.memoizedState = p.state, u && K0(t, a, !0), t.child;
    }
    function gC(e) {
      var t = e.stateNode;
      t.pendingContext ? X0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && X0(e, t.context, !1), Og(e, t.containerInfo);
    }
    function lw(e, t, a) {
      if (gC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      m1(e, t), Ah(t, i, null, a);
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
          return SC(e, t, p, a, y);
        } else if (p !== s) {
          var R = Go(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return SC(e, t, p, a, R);
        } else {
          cx(t);
          var E = _1(t, null, p, a);
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
    function SC(e, t, a, i, u) {
      return Mc(), ng(u), t.flags |= Ot, hr(e, t, a, i), t.child;
    }
    function uw(e, t, a) {
      M1(t), e === null && tg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Ay(i, u);
      return p ? f = null : s !== null && Ay(i, s) && (t.flags |= Je), mC(e, t), hr(e, t, f, a), t.child;
    }
    function ow(e, t) {
      return e === null && tg(t), null;
    }
    function sw(e, t, a, i) {
      fm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = ok(v), y = qa(v, u), R;
      switch (m) {
        case de:
          return gS(t, v), t.type = v = Xc(v), R = mS(null, t, v, y, i), R;
        case K:
          return t.type = v = WS(v), R = yC(null, t, v, y, i), R;
        case Y:
          return t.type = v = XS(v), R = dC(null, t, v, y, i), R;
        case tt: {
          if (t.type !== t.elementType) {
            var E = v.propTypes;
            E && Ga(
              E,
              y,
              // Resolved for outer only
              "prop",
              ct(v)
            );
          }
          return R = pC(
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
    function cw(e, t, a, i, u) {
      fm(e, t), t.tag = K;
      var s;
      return Ui(a) ? (s = !0, Eh(t)) : s = !1, Nc(t, u), x1(t, a, i), xg(t, a, i, u), yS(null, t, a, !0, s, u);
    }
    function fw(e, t, a, i) {
      fm(e, t);
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
          var m = ct(a) || "Unknown";
          fS[m] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), fS[m] = !0);
        }
        t.mode & Rt && Xa.recordLegacyContextWarning(t, null), ea(!0), tp.current = t, p = Bc(null, t, a, u, s, i), v = jc(), ea(!1);
      }
      if (al(), t.flags |= yi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var y = ct(a) || "Unknown";
        np[y] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", y, y, y), np[y] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var R = ct(a) || "Unknown";
          np[R] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), np[R] = !0);
        }
        t.tag = K, t.memoizedState = null, t.updateQueue = null;
        var E = !1;
        return Ui(a) ? (E = !0, Eh(t)) : E = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, fg(t), R1(t, p), xg(t, a, u, i), yS(null, t, a, !0, E, i);
      } else {
        if (t.tag = de, t.mode & Rt) {
          It(!0);
          try {
            p = Bc(null, t, a, u, s, i), v = jc();
          } finally {
            It(!1);
          }
        }
        return Nn() && v && qy(t), hr(null, t, p, i), gS(t, a), t.child;
      }
    }
    function gS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = kr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), vS[u] || (vS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = ct(t) || "Unknown";
          pS[f] || (g("%s: Function components do not support getDerivedStateFromProps.", f), pS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = ct(t) || "Unknown";
          dS[p] || (g("%s: Function components do not support contextType.", p), dS[p] = !0);
        }
      }
    }
    var SS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Ye
    };
    function CS(e) {
      return {
        baseLanes: e,
        cachePool: tw(),
        transitions: null
      };
    }
    function dw(e, t) {
      var a = null;
      return {
        baseLanes: Le(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function pw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Ng(e, Gd);
    }
    function vw(e, t) {
      return ou(e.childLanes, t);
    }
    function CC(e, t, a) {
      var i = t.pendingProps;
      Rk(t) && (t.flags |= we);
      var u = Ka.current, s = !1, f = (t.flags & we) !== me;
      if (f || pw(u, e) ? (s = !0, t.flags &= ~we) : (e === null || e.memoizedState !== null) && (u = Ax(u, N1)), u = Ac(u), Mu(t, u), e === null) {
        tg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Sw(t, v);
        }
        var m = i.children, y = i.fallback;
        if (s) {
          var R = hw(t, m, y, a), E = t.child;
          return E.memoizedState = CS(a), t.memoizedState = SS, R;
        } else
          return ES(t, m);
      } else {
        var _ = e.memoizedState;
        if (_ !== null) {
          var O = _.dehydrated;
          if (O !== null)
            return Cw(e, t, f, i, O, _, a);
        }
        if (s) {
          var N = i.fallback, ne = i.children, ye = yw(e, t, ne, N, a), pe = t.child, Ie = e.child.memoizedState;
          return pe.memoizedState = Ie === null ? CS(a) : dw(Ie, a), pe.childLanes = vw(e, a), t.memoizedState = SS, ye;
        } else {
          var Pe = i.children, w = mw(e, t, Pe, a);
          return t.memoizedState = null, w;
        }
      }
    }
    function ES(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = TS(u, i);
      return s.return = e, e.child = s, s;
    }
    function hw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ze) === Ce && s !== null ? (p = s, p.childLanes = U, p.pendingProps = f, e.mode & Ee && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Vu(a, u, i, null)) : (p = TS(f, u), v = Vu(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function TS(e, t, a) {
      return EE(e, t, U, null);
    }
    function EC(e, t) {
      return Jo(e, t);
    }
    function mw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = EC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ze) === Ce && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Ze) : p.push(s);
      }
      return t.child = f, f;
    }
    function yw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, m;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ze) === Ce && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var y = t.child;
        m = y, m.childLanes = U, m.pendingProps = v, t.mode & Ee && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = EC(f, v), m.subtreeFlags = f.subtreeFlags & un;
      var R;
      return p !== null ? R = Jo(p, i) : (R = Vu(i, s, u, null), R.flags |= ht), R.return = t, m.return = t, m.sibling = R, t.child = m, R;
    }
    function cm(e, t, a, i) {
      i !== null && ng(i), zc(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = ES(t, s);
      return f.flags |= ht, t.memoizedState = null, f;
    }
    function gw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = TS(f, s), v = Vu(i, s, u, null);
      return v.flags |= ht, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ze) !== Ce && zc(t, e.child, null, u), v;
    }
    function Sw(e, t, a) {
      return (e.mode & ze) === Ce ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Te) : By(t) ? e.lanes = ul : e.lanes = Zn, null;
    }
    function Cw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Ot) {
          t.flags &= ~Ot;
          var w = oS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return cm(e, t, f, w);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= we, null;
          var z = i.children, D = i.fallback, $ = gw(e, t, z, D, f), re = t.child;
          return re.memoizedState = CS(f), t.memoizedState = SS, $;
        }
      else {
        if (ox(), (t.mode & ze) === Ce)
          return cm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (By(u)) {
          var p, v, m;
          {
            var y = wR(u);
            p = y.digest, v = y.message, m = y.stack;
          }
          var R;
          v ? R = new Error(v) : R = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var E = oS(R, p, m);
          return cm(e, t, f, E);
        }
        var _ = Jn(f, e.childLanes);
        if (Ja || _) {
          var O = Em();
          if (O !== null) {
            var N = uy(O, f);
            if (N !== Ye && N !== s.retryLane) {
              s.retryLane = N;
              var ne = dt;
              jr(e, N), yn(O, e, N, ne);
            }
          }
          $S();
          var ye = oS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return cm(e, t, f, ye);
        } else if ($0(u)) {
          t.flags |= we, t.child = e.child;
          var pe = QD.bind(null, e);
          return DR(u, pe), null;
        } else {
          fx(t, u, s.treeContext);
          var Ie = i.children, Pe = ES(t, Ie);
          return Pe.flags |= Mr, Pe;
        }
      }
    }
    function TC(e, t, a) {
      e.lanes = Le(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Le(i.lanes, t)), ug(e.return, t, a);
    }
    function Ew(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ge) {
          var u = i.memoizedState;
          u !== null && TC(i, a, e);
        } else if (i.tag === pt)
          TC(i, a, e);
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
    function Tw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && $h(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Rw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !hS[e])
        if (hS[e] = !0, typeof e == "string")
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
    function xw(e, t) {
      e !== void 0 && !sm[e] && (e !== "collapsed" && e !== "hidden" ? (sm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (sm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function RC(e, t) {
      {
        var a = Zt(e), i = !a && typeof Oa(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function ww(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Zt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!RC(e[a], a))
              return;
        } else {
          var i = Oa(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!RC(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function RS(e, t, a, i, u) {
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
    function xC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Rw(u), xw(s, u), ww(f, u), hr(e, t, f, a);
      var p = Ka.current, v = Ng(p, Gd);
      if (v)
        p = zg(p, Gd), t.flags |= we;
      else {
        var m = e !== null && (e.flags & we) !== me;
        m && Ew(t, t.child, a), p = Ac(p);
      }
      if (Mu(t, p), (t.mode & ze) === Ce)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var y = Tw(t.child), R;
            y === null ? (R = t.child, t.child = null) : (R = y.sibling, y.sibling = null), RS(
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
              if (O !== null && $h(O) === null) {
                t.child = _;
                break;
              }
              var N = _.sibling;
              _.sibling = E, E = _, _ = N;
            }
            RS(
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
            RS(
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
    function Dw(e, t, a) {
      Og(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = zc(t, null, i, a) : hr(e, t, i, a), t.child;
    }
    var wC = !1;
    function kw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || wC || (wC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ga(v, s, "prop", "Context.Provider");
      }
      if (d1(t, u, p), f !== null) {
        var m = f.value;
        if (oe(m, p)) {
          if (f.children === s.children && !Sh())
            return Ol(e, t, a);
        } else
          Ex(t, u, a);
      }
      var y = s.children;
      return hr(e, t, y, a), t.child;
    }
    var DC = !1;
    function bw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (DC || (DC = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Nc(t, a);
      var f = ln(i);
      xi(t);
      var p;
      return tp.current = t, ea(!0), p = s(f), ea(!1), al(), t.flags |= yi, hr(e, t, p, a), t.child;
    }
    function rp() {
      Ja = !0;
    }
    function fm(e, t) {
      (t.mode & ze) === Ce && e !== null && (e.alternate = null, t.alternate = null, t.flags |= ht);
    }
    function Ol(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), uC(), hp(t.lanes), Jn(a, t.childLanes) ? (Nx(e, t), t.child) : null;
    }
    function _w(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Ze) : s.push(e), a.flags |= ht, a;
      }
    }
    function xS(e, t) {
      var a = e.lanes;
      return !!Jn(a, t);
    }
    function Ow(e, t, a) {
      switch (t.tag) {
        case H:
          gC(t), t.stateNode, Mc();
          break;
        case te:
          M1(t);
          break;
        case K: {
          var i = t.type;
          Ui(i) && Eh(t);
          break;
        }
        case j:
          Og(t, t.stateNode.containerInfo);
          break;
        case F: {
          var u = t.memoizedProps.value, s = t.type._context;
          d1(t, s, u);
          break;
        }
        case ve:
          {
            var f = Jn(a, t.childLanes);
            f && (t.flags |= Me);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case ge: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Mu(t, Ac(Ka.current)), t.flags |= we, null;
            var m = t.child, y = m.childLanes;
            if (Jn(a, y))
              return CC(e, t, a);
            Mu(t, Ac(Ka.current));
            var R = Ol(e, t, a);
            return R !== null ? R.sibling : null;
          } else
            Mu(t, Ac(Ka.current));
          break;
        }
        case pt: {
          var E = (e.flags & we) !== me, _ = Jn(a, t.childLanes);
          if (E) {
            if (_)
              return xC(e, t, a);
            t.flags |= we;
          }
          var O = t.memoizedState;
          if (O !== null && (O.rendering = null, O.tail = null, O.lastEffect = null), Mu(t, Ka.current), _)
            break;
          return null;
        }
        case $e:
        case at:
          return t.lanes = U, hC(e, t, a);
      }
      return Ol(e, t, a);
    }
    function kC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return _w(e, t, e0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Sh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Ja = !0;
        else {
          var s = xS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & we) === me)
            return Ja = !1, Ow(e, t, a);
          (e.flags & ho) !== me ? Ja = !0 : Ja = !1;
        }
      } else if (Ja = !1, Nn() && nx(t)) {
        var f = t.index, p = rx();
        e1(t, p, f);
      }
      switch (t.lanes = U, t.tag) {
        case Ae:
          return fw(e, t, t.type, a);
        case bn: {
          var v = t.elementType;
          return sw(e, t, v, a);
        }
        case de: {
          var m = t.type, y = t.pendingProps, R = t.elementType === m ? y : qa(m, y);
          return mS(e, t, m, R, a);
        }
        case K: {
          var E = t.type, _ = t.pendingProps, O = t.elementType === E ? _ : qa(E, _);
          return yC(e, t, E, O, a);
        }
        case H:
          return lw(e, t, a);
        case te:
          return uw(e, t, a);
        case ke:
          return ow(e, t);
        case ge:
          return CC(e, t, a);
        case j:
          return Dw(e, t, a);
        case Y: {
          var N = t.type, ne = t.pendingProps, ye = t.elementType === N ? ne : qa(N, ne);
          return dC(e, t, N, ye, a);
        }
        case Fe:
          return rw(e, t, a);
        case We:
          return aw(e, t, a);
        case ve:
          return iw(e, t, a);
        case F:
          return kw(e, t, a);
        case le:
          return bw(e, t, a);
        case tt: {
          var pe = t.type, Ie = t.pendingProps, Pe = qa(pe, Ie);
          if (t.type !== t.elementType) {
            var w = pe.propTypes;
            w && Ga(
              w,
              Pe,
              // Resolved for outer only
              "prop",
              ct(pe)
            );
          }
          return Pe = qa(pe.type, Pe), pC(e, t, pe, Pe, a);
        }
        case He:
          return vC(e, t, t.type, t.pendingProps, a);
        case ir: {
          var z = t.type, D = t.pendingProps, $ = t.elementType === z ? D : qa(z, D);
          return cw(e, t, z, $, a);
        }
        case pt:
          return xC(e, t, a);
        case jn:
          break;
        case $e:
          return hC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Pc(e) {
      e.flags |= Me;
    }
    function bC(e) {
      e.flags |= In, e.flags |= Ff;
    }
    var _C, wS, OC, MC;
    _C = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === te || u.tag === ke)
          JT(e, u.stateNode);
        else if (u.tag !== j) {
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
    }, wS = function(e, t) {
    }, OC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Mg(), v = tR(f, a, s, i, u, p);
        t.updateQueue = v, v && Pc(t);
      }
    }, MC = function(e, t, a, i) {
      a !== i && Pc(t);
    };
    function ap(e, t) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = U, i = me;
      if (t) {
        if ((e.mode & Ee) !== Ce) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = Le(a, Le(m.lanes, m.childLanes)), i |= m.subtreeFlags & un, i |= m.flags & un, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var y = e.child; y !== null; )
            a = Le(a, Le(y.lanes, y.childLanes)), i |= y.subtreeFlags & un, i |= y.flags & un, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ee) !== Ce) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Le(a, Le(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Le(a, Le(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Mw(e, t, a) {
      if (mx() && (t.mode & ze) !== Ce && (t.flags & we) === me)
        return u1(t), Mc(), t.flags |= Ot | sr | en, !1;
      var i = Dh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (vx(t), Un(t), (t.mode & Ee) !== Ce) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Mc(), (t.flags & we) === me && (t.memoizedState = null), t.flags |= Me, Un(t), (t.mode & Ee) !== Ce) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return o1(), !0;
    }
    function LC(e, t, a) {
      var i = t.pendingProps;
      switch (Ky(t), t.tag) {
        case Ae:
        case bn:
        case He:
        case de:
        case Y:
        case Fe:
        case We:
        case ve:
        case le:
        case tt:
          return Un(t), null;
        case K: {
          var u = t.type;
          return Ui(u) && Ch(t), Un(t), null;
        }
        case H: {
          var s = t.stateNode;
          if (Uc(t), Gy(t), Ag(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Dh(t);
            if (f)
              Pc(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Ot) !== me) && (t.flags |= Or, o1());
            }
          }
          return wS(e, t), Un(t), null;
        }
        case te: {
          Lg(t);
          var v = O1(), m = t.type;
          if (e !== null && t.stateNode != null)
            OC(e, t, m, i, v), e.ref !== t.ref && bC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Un(t), null;
            }
            var y = Mg(), R = Dh(t);
            if (R)
              dx(t, v, y) && Pc(t);
            else {
              var E = ZT(m, i, v, y, t);
              _C(E, t, !1, !1), t.stateNode = E, eR(E, m, i, v) && Pc(t);
            }
            t.ref !== null && bC(t);
          }
          return Un(t), null;
        }
        case ke: {
          var _ = i;
          if (e && t.stateNode != null) {
            var O = e.memoizedProps;
            MC(e, t, O, _);
          } else {
            if (typeof _ != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var N = O1(), ne = Mg(), ye = Dh(t);
            ye ? px(t) && Pc(t) : t.stateNode = nR(_, N, ne, t);
          }
          return Un(t), null;
        }
        case ge: {
          Hc(t);
          var pe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ie = Mw(e, t, pe);
            if (!Ie)
              return t.flags & en ? t : null;
          }
          if ((t.flags & we) !== me)
            return t.lanes = a, (t.mode & Ee) !== Ce && uS(t), t;
          var Pe = pe !== null, w = e !== null && e.memoizedState !== null;
          if (Pe !== w && Pe) {
            var z = t.child;
            if (z.flags |= gi, (t.mode & ze) !== Ce) {
              var D = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !nt);
              D || Ng(Ka.current, N1) ? LD() : $S();
            }
          }
          var $ = t.updateQueue;
          if ($ !== null && (t.flags |= Me), Un(t), (t.mode & Ee) !== Ce && Pe) {
            var re = t.child;
            re !== null && (t.treeBaseDuration -= re.treeBaseDuration);
          }
          return null;
        }
        case j:
          return Uc(t), wS(e, t), e === null && XR(t.stateNode.containerInfo), Un(t), null;
        case F:
          var Z = t.type._context;
          return lg(Z, t), Un(t), null;
        case ir: {
          var xe = t.type;
          return Ui(xe) && Ch(t), Un(t), null;
        }
        case pt: {
          Hc(t);
          var _e = t.memoizedState;
          if (_e === null)
            return Un(t), null;
          var ot = (t.flags & we) !== me, qe = _e.rendering;
          if (qe === null)
            if (ot)
              ap(_e, !1);
            else {
              var Kt = zD() && (e === null || (e.flags & we) === me);
              if (!Kt)
                for (var Ke = t.child; Ke !== null; ) {
                  var $t = $h(Ke);
                  if ($t !== null) {
                    ot = !0, t.flags |= we, ap(_e, !1);
                    var rr = $t.updateQueue;
                    return rr !== null && (t.updateQueue = rr, t.flags |= Me), t.subtreeFlags = me, zx(t, a), Mu(t, zg(Ka.current, Gd)), t.child;
                  }
                  Ke = Ke.sibling;
                }
              _e.tail !== null && Tt() > JC() && (t.flags |= we, ot = !0, ap(_e, !1), t.lanes = Kf);
            }
          else {
            if (!ot) {
              var Bn = $h(qe);
              if (Bn !== null) {
                t.flags |= we, ot = !0;
                var oa = Bn.updateQueue;
                if (oa !== null && (t.updateQueue = oa, t.flags |= Me), ap(_e, !0), _e.tail === null && _e.tailMode === "hidden" && !qe.alternate && !Nn())
                  return Un(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Tt() * 2 - _e.renderingStartTime > JC() && a !== Zn && (t.flags |= we, ot = !0, ap(_e, !1), t.lanes = Kf);
            }
            if (_e.isBackwards)
              qe.sibling = t.child, t.child = qe;
            else {
              var gr = _e.last;
              gr !== null ? gr.sibling = qe : t.child = qe, _e.last = qe;
            }
          }
          if (_e.tail !== null) {
            var Sr = _e.tail;
            _e.rendering = Sr, _e.tail = Sr.sibling, _e.renderingStartTime = Tt(), Sr.sibling = null;
            var ar = Ka.current;
            return ot ? ar = zg(ar, Gd) : ar = Ac(ar), Mu(t, ar), Sr;
          }
          return Un(t), null;
        }
        case jn:
          break;
        case $e:
        case at: {
          PS(t);
          var Ul = t.memoizedState, qc = Ul !== null;
          if (e !== null) {
            var Cp = e.memoizedState, $i = Cp !== null;
            $i !== qc && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ae && (t.flags |= gi);
          }
          return !qc || (t.mode & ze) === Ce ? Un(t) : Jn(Pi, Zn) && (Un(t), t.subtreeFlags & (ht | Me) && (t.flags |= gi)), null;
        }
        case Cr:
          return null;
        case Dt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Lw(e, t, a) {
      switch (Ky(t), t.tag) {
        case K: {
          var i = t.type;
          Ui(i) && Ch(t);
          var u = t.flags;
          return u & en ? (t.flags = u & ~en | we, (t.mode & Ee) !== Ce && uS(t), t) : null;
        }
        case H: {
          t.stateNode, Uc(t), Gy(t), Ag();
          var s = t.flags;
          return (s & en) !== me && (s & we) === me ? (t.flags = s & ~en | we, t) : null;
        }
        case te:
          return Lg(t), null;
        case ge: {
          Hc(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Mc();
          }
          var p = t.flags;
          return p & en ? (t.flags = p & ~en | we, (t.mode & Ee) !== Ce && uS(t), t) : null;
        }
        case pt:
          return Hc(t), null;
        case j:
          return Uc(t), null;
        case F:
          var v = t.type._context;
          return lg(v, t), null;
        case $e:
        case at:
          return PS(t), null;
        case Cr:
          return null;
        default:
          return null;
      }
    }
    function NC(e, t, a) {
      switch (Ky(t), t.tag) {
        case K: {
          var i = t.type.childContextTypes;
          i != null && Ch(t);
          break;
        }
        case H: {
          t.stateNode, Uc(t), Gy(t), Ag();
          break;
        }
        case te: {
          Lg(t);
          break;
        }
        case j:
          Uc(t);
          break;
        case ge:
          Hc(t);
          break;
        case pt:
          Hc(t);
          break;
        case F:
          var u = t.type._context;
          lg(u, t);
          break;
        case $e:
        case at:
          PS(t);
          break;
      }
    }
    var zC = null;
    zC = /* @__PURE__ */ new Set();
    var dm = !1, An = !1, Nw = typeof WeakSet == "function" ? WeakSet : Set, se = null, $c = null, Yc = null;
    function zw(e) {
      nl(null, function() {
        throw e;
      }), Af();
    }
    var Uw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ee)
        try {
          Bi(), t.componentWillUnmount();
        } finally {
          Vi(e);
        }
      else
        t.componentWillUnmount();
    };
    function UC(e, t) {
      try {
        zu(fn, e);
      } catch (a) {
        St(e, t, a);
      }
    }
    function DS(e, t, a) {
      try {
        Uw(e, a);
      } catch (i) {
        St(e, t, i);
      }
    }
    function Aw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        St(e, t, i);
      }
    }
    function AC(e, t) {
      try {
        FC(e);
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
            if (_n && ii && e.mode & Ee)
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
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Oe(e));
        } else
          a.current = null;
    }
    function pm(e, t, a) {
      try {
        a();
      } catch (i) {
        St(e, t, i);
      }
    }
    var HC = !1;
    function Hw(e, t) {
      qT(e.containerInfo), se = t, Fw();
      var a = HC;
      return HC = !1, a;
    }
    function Fw() {
      for (; se !== null; ) {
        var e = se, t = e.child;
        (e.subtreeFlags & eu) !== me && t !== null ? (t.return = e, se = t) : Vw();
      }
    }
    function Vw() {
      for (; se !== null; ) {
        var e = se;
        lt(e);
        try {
          Bw(e);
        } catch (a) {
          St(e, e.return, a);
        }
        Qt();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, se = t;
          return;
        }
        se = e.return;
      }
    }
    function Bw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Or) !== me) {
        switch (lt(e), e.tag) {
          case de:
          case Y:
          case He:
            break;
          case K: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Wo && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Oe(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Oe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : qa(e.type, i), u);
              {
                var p = zC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Oe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case H: {
            {
              var v = e.stateNode;
              ER(v.containerInfo);
            }
            break;
          }
          case te:
          case ke:
          case j:
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
            f.destroy = void 0, p !== void 0 && ((e & zn) !== Pr ? zs(t) : (e & fn) !== Pr && Us(t), (e & Ai) !== Pr && yp(!0), pm(t, a, p), (e & Ai) !== Pr && yp(!1), (e & zn) !== Pr ? wv() : (e & fn) !== Pr && tu());
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
            (e & zn) !== Pr ? xv(t) : (e & fn) !== Pr && Dv(t);
            var f = s.create;
            (e & Ai) !== Pr && yp(!0), s.destroy = f(), (e & Ai) !== Pr && yp(!1), (e & zn) !== Pr ? Wf() : (e & fn) !== Pr && kv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & fn) !== me ? v = "useLayoutEffect" : (s.tag & Ai) !== me ? v = "useInsertionEffect" : v = "useEffect";
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
    function jw(e, t) {
      if ((t.flags & Me) !== me)
        switch (t.tag) {
          case ve: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = iC(), p = t.alternate === null ? "mount" : "update";
            aC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case H:
                    var m = v.stateNode;
                    m.passiveEffectDuration += a;
                    break e;
                  case ve:
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
    function Pw(e, t, a, i) {
      if ((a.flags & En) !== me)
        switch (a.tag) {
          case de:
          case Y:
          case He: {
            if (!An)
              if (a.mode & Ee)
                try {
                  Bi(), zu(fn | cn, a);
                } finally {
                  Vi(a);
                }
              else
                zu(fn | cn, a);
            break;
          }
          case K: {
            var u = a.stateNode;
            if (a.flags & Me && !An)
              if (t === null)
                if (a.type === a.elementType && !Wo && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Oe(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Oe(a) || "instance")), a.mode & Ee)
                  try {
                    Bi(), u.componentDidMount();
                  } finally {
                    Vi(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : qa(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Wo && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Oe(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Oe(a) || "instance")), a.mode & Ee)
                  try {
                    Bi(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Vi(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Wo && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Oe(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Oe(a) || "instance")), g1(a, p, u));
            break;
          }
          case H: {
            var v = a.updateQueue;
            if (v !== null) {
              var m = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case te:
                    m = a.child.stateNode;
                    break;
                  case K:
                    m = a.child.stateNode;
                    break;
                }
              g1(a, v, m);
            }
            break;
          }
          case te: {
            var y = a.stateNode;
            if (t === null && a.flags & Me) {
              var R = a.type, E = a.memoizedProps;
              uR(y, R, E);
            }
            break;
          }
          case ke:
            break;
          case j:
            break;
          case ve: {
            {
              var _ = a.memoizedProps, O = _.onCommit, N = _.onRender, ne = a.stateNode.effectDuration, ye = iC(), pe = t === null ? "mount" : "update";
              aC() && (pe = "nested-update"), typeof N == "function" && N(a.memoizedProps.id, pe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ye);
              {
                typeof O == "function" && O(a.memoizedProps.id, pe, ne, ye), VD(a);
                var Ie = a.return;
                e:
                  for (; Ie !== null; ) {
                    switch (Ie.tag) {
                      case H:
                        var Pe = Ie.stateNode;
                        Pe.effectDuration += ne;
                        break e;
                      case ve:
                        var w = Ie.stateNode;
                        w.effectDuration += ne;
                        break e;
                    }
                    Ie = Ie.return;
                  }
              }
            }
            break;
          }
          case ge: {
            qw(e, a);
            break;
          }
          case pt:
          case ir:
          case jn:
          case $e:
          case at:
          case Dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      An || a.flags & In && FC(a);
    }
    function $w(e) {
      switch (e.tag) {
        case de:
        case Y:
        case He: {
          if (e.mode & Ee)
            try {
              Bi(), UC(e, e.return);
            } finally {
              Vi(e);
            }
          else
            UC(e, e.return);
          break;
        }
        case K: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Aw(e, e.return, t), AC(e, e.return);
          break;
        }
        case te: {
          AC(e, e.return);
          break;
        }
      }
    }
    function Yw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === te) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? yR(u) : SR(i.stateNode, i.memoizedProps);
            } catch (f) {
              St(e, e.return, f);
            }
          }
        } else if (i.tag === ke) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? gR(s) : CR(s, i.memoizedProps);
            } catch (f) {
              St(e, e.return, f);
            }
        } else if (!((i.tag === $e || i.tag === at) && i.memoizedState !== null && i !== e)) {
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
    function FC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case te:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ee)
            try {
              Bi(), u = t(i);
            } finally {
              Vi(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Oe(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Oe(e)), t.current = i;
      }
    }
    function Qw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function VC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, VC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === te) {
          var a = e.stateNode;
          a !== null && ZR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Iw(e) {
      for (var t = e.return; t !== null; ) {
        if (BC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function BC(e) {
      return e.tag === te || e.tag === H || e.tag === j;
    }
    function jC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || BC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== te && t.tag !== ke && t.tag !== Ht; ) {
            if (t.flags & ht || t.child === null || t.tag === j)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & ht))
            return t.stateNode;
        }
    }
    function Gw(e) {
      var t = Iw(e);
      switch (t.tag) {
        case te: {
          var a = t.stateNode;
          t.flags & Je && (P0(a), t.flags &= ~Je);
          var i = jC(e);
          bS(e, i, a);
          break;
        }
        case H:
        case j: {
          var u = t.stateNode.containerInfo, s = jC(e);
          kS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function kS(e, t, a) {
      var i = e.tag, u = i === te || i === ke;
      if (u) {
        var s = e.stateNode;
        t ? pR(a, s, t) : fR(a, s);
      } else if (i !== j) {
        var f = e.child;
        if (f !== null) {
          kS(f, t, a);
          for (var p = f.sibling; p !== null; )
            kS(p, t, a), p = p.sibling;
        }
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === te || i === ke;
      if (u) {
        var s = e.stateNode;
        t ? dR(a, s, t) : cR(a, s);
      } else if (i !== j) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    var Hn = null, ti = !1;
    function Ww(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case te: {
                Hn = i.stateNode, ti = !1;
                break e;
              }
              case H: {
                Hn = i.stateNode.containerInfo, ti = !0;
                break e;
              }
              case j: {
                Hn = i.stateNode.containerInfo, ti = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Hn === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        PC(e, t, a), Hn = null, ti = !1;
      }
      Qw(a);
    }
    function Uu(e, t, a) {
      for (var i = a.child; i !== null; )
        PC(e, t, i), i = i.sibling;
    }
    function PC(e, t, a) {
      switch (If(a), a.tag) {
        case te:
          An || Qc(a, t);
        case ke: {
          {
            var i = Hn, u = ti;
            Hn = null, Uu(e, t, a), Hn = i, ti = u, Hn !== null && (ti ? hR(Hn, a.stateNode) : vR(Hn, a.stateNode));
          }
          return;
        }
        case Ht: {
          Hn !== null && (ti ? mR(Hn, a.stateNode) : Vy(Hn, a.stateNode));
          return;
        }
        case j: {
          {
            var s = Hn, f = ti;
            Hn = a.stateNode.containerInfo, ti = !0, Uu(e, t, a), Hn = s, ti = f;
          }
          return;
        }
        case de:
        case Y:
        case tt:
        case He: {
          if (!An) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, y = m;
                do {
                  var R = y, E = R.destroy, _ = R.tag;
                  E !== void 0 && ((_ & Ai) !== Pr ? pm(a, t, E) : (_ & fn) !== Pr && (Us(a), a.mode & Ee ? (Bi(), pm(a, t, E), Vi(a)) : pm(a, t, E), tu())), y = y.next;
                } while (y !== m);
              }
            }
          }
          Uu(e, t, a);
          return;
        }
        case K: {
          if (!An) {
            Qc(a, t);
            var O = a.stateNode;
            typeof O.componentWillUnmount == "function" && DS(a, t, O);
          }
          Uu(e, t, a);
          return;
        }
        case jn: {
          Uu(e, t, a);
          return;
        }
        case $e: {
          if (
            // TODO: Remove this dead flag
            a.mode & ze
          ) {
            var N = An;
            An = N || a.memoizedState !== null, Uu(e, t, a), An = N;
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
    function Xw(e) {
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
            s !== null && UR(s);
          }
        }
      }
    }
    function $C(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Nw()), t.forEach(function(i) {
          var u = ID.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), on)
              if ($c !== null && Yc !== null)
                mp(Yc, $c);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Kw(e, t, a) {
      $c = a, Yc = e, lt(t), YC(t, e), lt(t), $c = null, Yc = null;
    }
    function ni(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Ww(e, t, s);
          } catch (v) {
            St(s, t, v);
          }
        }
      var f = Fm();
      if (t.subtreeFlags & Xn)
        for (var p = t.child; p !== null; )
          lt(p), YC(p, e), p = p.sibling;
      lt(f);
    }
    function YC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case de:
        case Y:
        case tt:
        case He: {
          if (ni(t, e), ji(e), u & Me) {
            try {
              ei(Ai | cn, e, e.return), zu(Ai | cn, e);
            } catch (xe) {
              St(e, e.return, xe);
            }
            if (e.mode & Ee) {
              try {
                Bi(), ei(fn | cn, e, e.return);
              } catch (xe) {
                St(e, e.return, xe);
              }
              Vi(e);
            } else
              try {
                ei(fn | cn, e, e.return);
              } catch (xe) {
                St(e, e.return, xe);
              }
          }
          return;
        }
        case K: {
          ni(t, e), ji(e), u & In && i !== null && Qc(i, i.return);
          return;
        }
        case te: {
          ni(t, e), ji(e), u & In && i !== null && Qc(i, i.return);
          {
            if (e.flags & Je) {
              var s = e.stateNode;
              try {
                P0(s);
              } catch (xe) {
                St(e, e.return, xe);
              }
            }
            if (u & Me) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, y = e.updateQueue;
                if (e.updateQueue = null, y !== null)
                  try {
                    oR(f, y, m, v, p, e);
                  } catch (xe) {
                    St(e, e.return, xe);
                  }
              }
            }
          }
          return;
        }
        case ke: {
          if (ni(t, e), ji(e), u & Me) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var R = e.stateNode, E = e.memoizedProps, _ = i !== null ? i.memoizedProps : E;
            try {
              sR(R, _, E);
            } catch (xe) {
              St(e, e.return, xe);
            }
          }
          return;
        }
        case H: {
          if (ni(t, e), ji(e), u & Me && i !== null) {
            var O = i.memoizedState;
            if (O.isDehydrated)
              try {
                zR(t.containerInfo);
              } catch (xe) {
                St(e, e.return, xe);
              }
          }
          return;
        }
        case j: {
          ni(t, e), ji(e);
          return;
        }
        case ge: {
          ni(t, e), ji(e);
          var N = e.child;
          if (N.flags & gi) {
            var ne = N.stateNode, ye = N.memoizedState, pe = ye !== null;
            if (ne.isHidden = pe, pe) {
              var Ie = N.alternate !== null && N.alternate.memoizedState !== null;
              Ie || MD();
            }
          }
          if (u & Me) {
            try {
              Xw(e);
            } catch (xe) {
              St(e, e.return, xe);
            }
            $C(e);
          }
          return;
        }
        case $e: {
          var Pe = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ze
          ) {
            var w = An;
            An = w || Pe, ni(t, e), An = w;
          } else
            ni(t, e);
          if (ji(e), u & gi) {
            var z = e.stateNode, D = e.memoizedState, $ = D !== null, re = e;
            if (z.isHidden = $, $ && !Pe && (re.mode & ze) !== Ce) {
              se = re;
              for (var Z = re.child; Z !== null; )
                se = Z, Jw(Z), Z = Z.sibling;
            }
            Yw(re, $);
          }
          return;
        }
        case pt: {
          ni(t, e), ji(e), u & Me && $C(e);
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
          Gw(e);
        } catch (a) {
          St(e, e.return, a);
        }
        e.flags &= ~ht;
      }
      t & Mr && (e.flags &= ~Mr);
    }
    function Zw(e, t, a) {
      $c = a, Yc = t, se = e, QC(e, t, a), $c = null, Yc = null;
    }
    function QC(e, t, a) {
      for (var i = (e.mode & ze) !== Ce; se !== null; ) {
        var u = se, s = u.child;
        if (u.tag === $e && i) {
          var f = u.memoizedState !== null, p = f || dm;
          if (p) {
            _S(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, y = m || An, R = dm, E = An;
            dm = p, An = y, An && !E && (se = u, eD(u));
            for (var _ = s; _ !== null; )
              se = _, QC(
                _,
                // New root; bubble back up to here and stop.
                t,
                a
              ), _ = _.sibling;
            se = u, dm = R, An = E, _S(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & En) !== me && s !== null ? (s.return = u, se = s) : _S(e, t, a);
      }
    }
    function _S(e, t, a) {
      for (; se !== null; ) {
        var i = se;
        if ((i.flags & En) !== me) {
          var u = i.alternate;
          lt(i);
          try {
            Pw(t, u, i, a);
          } catch (f) {
            St(i, i.return, f);
          }
          Qt();
        }
        if (i === e) {
          se = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, se = s;
          return;
        }
        se = i.return;
      }
    }
    function Jw(e) {
      for (; se !== null; ) {
        var t = se, a = t.child;
        switch (t.tag) {
          case de:
          case Y:
          case tt:
          case He: {
            if (t.mode & Ee)
              try {
                Bi(), ei(fn, t, t.return);
              } finally {
                Vi(t);
              }
            else
              ei(fn, t, t.return);
            break;
          }
          case K: {
            Qc(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && DS(t, t.return, i);
            break;
          }
          case te: {
            Qc(t, t.return);
            break;
          }
          case $e: {
            var u = t.memoizedState !== null;
            if (u) {
              IC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, se = a) : IC(e);
      }
    }
    function IC(e) {
      for (; se !== null; ) {
        var t = se;
        if (t === e) {
          se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, se = a;
          return;
        }
        se = t.return;
      }
    }
    function eD(e) {
      for (; se !== null; ) {
        var t = se, a = t.child;
        if (t.tag === $e) {
          var i = t.memoizedState !== null;
          if (i) {
            GC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, se = a) : GC(e);
      }
    }
    function GC(e) {
      for (; se !== null; ) {
        var t = se;
        lt(t);
        try {
          $w(t);
        } catch (i) {
          St(t, t.return, i);
        }
        if (Qt(), t === e) {
          se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, se = a;
          return;
        }
        se = t.return;
      }
    }
    function tD(e, t, a, i) {
      se = t, nD(t, e, a, i);
    }
    function nD(e, t, a, i) {
      for (; se !== null; ) {
        var u = se, s = u.child;
        (u.subtreeFlags & Lr) !== me && s !== null ? (s.return = u, se = s) : rD(e, t, a, i);
      }
    }
    function rD(e, t, a, i) {
      for (; se !== null; ) {
        var u = se;
        if ((u.flags & Ct) !== me) {
          lt(u);
          try {
            aD(t, u, a, i);
          } catch (f) {
            St(u, u.return, f);
          }
          Qt();
        }
        if (u === e) {
          se = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, se = s;
          return;
        }
        se = u.return;
      }
    }
    function aD(e, t, a, i) {
      switch (t.tag) {
        case de:
        case Y:
        case He: {
          if (t.mode & Ee) {
            lS();
            try {
              zu(zn | cn, t);
            } finally {
              iS(t);
            }
          } else
            zu(zn | cn, t);
          break;
        }
      }
    }
    function iD(e) {
      se = e, lD();
    }
    function lD() {
      for (; se !== null; ) {
        var e = se, t = e.child;
        if ((se.flags & Ze) !== me) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              se = u, sD(u, e);
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
            se = e;
          }
        }
        (e.subtreeFlags & Lr) !== me && t !== null ? (t.return = e, se = t) : uD();
      }
    }
    function uD() {
      for (; se !== null; ) {
        var e = se;
        (e.flags & Ct) !== me && (lt(e), oD(e), Qt());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, se = t;
          return;
        }
        se = e.return;
      }
    }
    function oD(e) {
      switch (e.tag) {
        case de:
        case Y:
        case He: {
          e.mode & Ee ? (lS(), ei(zn | cn, e, e.return), iS(e)) : ei(zn | cn, e, e.return);
          break;
        }
      }
    }
    function sD(e, t) {
      for (; se !== null; ) {
        var a = se;
        lt(a), fD(a, t), Qt();
        var i = a.child;
        i !== null ? (i.return = a, se = i) : cD(e);
      }
    }
    function cD(e) {
      for (; se !== null; ) {
        var t = se, a = t.sibling, i = t.return;
        if (VC(t), t === e) {
          se = null;
          return;
        }
        if (a !== null) {
          a.return = i, se = a;
          return;
        }
        se = i;
      }
    }
    function fD(e, t) {
      switch (e.tag) {
        case de:
        case Y:
        case He: {
          e.mode & Ee ? (lS(), ei(zn, e, t), iS(e)) : ei(zn, e, t);
          break;
        }
      }
    }
    function dD(e) {
      switch (e.tag) {
        case de:
        case Y:
        case He: {
          try {
            zu(fn | cn, e);
          } catch (a) {
            St(e, e.return, a);
          }
          break;
        }
        case K: {
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
    function pD(e) {
      switch (e.tag) {
        case de:
        case Y:
        case He: {
          try {
            zu(zn | cn, e);
          } catch (t) {
            St(e, e.return, t);
          }
          break;
        }
      }
    }
    function vD(e) {
      switch (e.tag) {
        case de:
        case Y:
        case He: {
          try {
            ei(fn | cn, e, e.return);
          } catch (a) {
            St(e, e.return, a);
          }
          break;
        }
        case K: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && DS(e, e.return, t);
          break;
        }
      }
    }
    function hD(e) {
      switch (e.tag) {
        case de:
        case Y:
        case He:
          try {
            ei(zn | cn, e, e.return);
          } catch (t) {
            St(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var ip = Symbol.for;
      ip("selector.component"), ip("selector.has_pseudo_class"), ip("selector.role"), ip("selector.test_id"), ip("selector.text");
    }
    var mD = [];
    function yD() {
      mD.forEach(function(e) {
        return e();
      });
    }
    var gD = k.ReactCurrentActQueue;
    function SD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function WC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && gD.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var CD = Math.ceil, OS = k.ReactCurrentDispatcher, MS = k.ReactCurrentOwner, Fn = k.ReactCurrentBatchConfig, ri = k.ReactCurrentActQueue, vn = (
      /*             */
      0
    ), XC = (
      /*               */
      1
    ), Vn = (
      /*                */
      2
    ), wa = (
      /*                */
      4
    ), Ml = 0, lp = 1, Xo = 2, vm = 3, up = 4, qC = 5, LS = 6, Qe = vn, mr = null, At = null, hn = U, Pi = U, NS = wu(U), mn = Ml, op = null, hm = U, sp = U, mm = U, cp = null, $r = null, zS = 0, KC = 500, ZC = 1 / 0, ED = 500, Ll = null;
    function fp() {
      ZC = Tt() + ED;
    }
    function JC() {
      return ZC;
    }
    var ym = !1, US = null, Ic = null, qo = !1, Au = null, dp = U, AS = [], HS = null, TD = 50, pp = 0, FS = null, VS = !1, gm = !1, RD = 50, Gc = 0, Sm = null, vp = dt, Cm = U, eE = !1;
    function Em() {
      return mr;
    }
    function yr() {
      return (Qe & (Vn | wa)) !== vn ? Tt() : (vp !== dt || (vp = Tt()), vp);
    }
    function Hu(e) {
      var t = e.mode;
      if ((t & ze) === Ce)
        return Te;
      if ((Qe & Vn) !== vn && hn !== U)
        return Gt(hn);
      var a = Sx() !== gx;
      if (a) {
        if (Fn.transition !== null) {
          var i = Fn.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Cm === Ye && (Cm = ed()), Cm;
      }
      var u = Ar();
      if (u !== Ye)
        return u;
      var s = rR();
      return s;
    }
    function xD(e) {
      var t = e.mode;
      return (t & ze) === Ce ? Te : ly();
    }
    function yn(e, t, a, i) {
      WD(), eE && g("useInsertionEffect must not schedule updates."), VS && (gm = !0), vl(e, a, i), (Qe & Vn) !== U && e === mr ? KD(t) : (on && id(e, t, a), ZD(t), e === mr && ((Qe & Vn) === vn && (sp = Le(sp, a)), mn === up && Fu(e, hn)), Yr(e, i), a === Te && Qe === vn && (t.mode & ze) === Ce && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ri.isBatchingLegacy && (fp(), J0()));
    }
    function wD(e, t, a) {
      var i = e.current;
      i.lanes = t, vl(e, t, a), Yr(e, a);
    }
    function DD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Qe & Vn) !== vn
      );
    }
    function Yr(e, t) {
      var a = e.callbackNode;
      ry(e, t);
      var i = Eo(e, e === mr ? hn : U);
      if (i === U) {
        a !== null && mE(a), e.callbackNode = null, e.callbackPriority = Ye;
        return;
      }
      var u = jt(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ri.current !== null && a !== IS)) {
        a == null && s !== Te && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && mE(a);
      var f;
      if (u === Te)
        e.tag === Du ? (ri.isBatchingLegacy !== null && (ri.didScheduleLegacyUpdate = !0), tx(rE.bind(null, e))) : Z0(rE.bind(null, e)), ri.current !== null ? ri.current.push(ku) : iR(function() {
          (Qe & (Vn | wa)) === vn && ku();
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
        f = GS(p, tE.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function tE(e, t) {
      if (Wx(), vp = dt, Cm = U, (Qe & (Vn | wa)) !== vn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = zl();
      if (i && e.callbackNode !== a)
        return null;
      var u = Eo(e, e === mr ? hn : U);
      if (u === U)
        return null;
      var s = !Ro(e, u) && !Nv(e, u) && !t, f = s ? AD(e, u) : Rm(e, u);
      if (f !== Ml) {
        if (f === Xo) {
          var p = Zf(e);
          p !== U && (u = p, f = BS(e, p));
        }
        if (f === lp) {
          var v = op;
          throw Ko(e, U), Fu(e, u), Yr(e, Tt()), v;
        }
        if (f === LS)
          Fu(e, u);
        else {
          var m = !Ro(e, u), y = e.current.alternate;
          if (m && !bD(y)) {
            if (f = Rm(e, u), f === Xo) {
              var R = Zf(e);
              R !== U && (u = R, f = BS(e, R));
            }
            if (f === lp) {
              var E = op;
              throw Ko(e, U), Fu(e, u), Yr(e, Tt()), E;
            }
          }
          e.finishedWork = y, e.finishedLanes = u, kD(e, f, u);
        }
      }
      return Yr(e, Tt()), e.callbackNode === a ? tE.bind(null, e) : null;
    }
    function BS(e, t) {
      var a = cp;
      if (Xt(e)) {
        var i = Ko(e, t);
        i.flags |= Ot, WR(e.containerInfo);
      }
      var u = Rm(e, t);
      if (u !== Xo) {
        var s = $r;
        $r = a, s !== null && nE(s);
      }
      return u;
    }
    function nE(e) {
      $r === null ? $r = e : $r.push.apply($r, e);
    }
    function kD(e, t, a) {
      switch (t) {
        case Ml:
        case lp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Xo: {
          Zo(e, $r, Ll);
          break;
        }
        case vm: {
          if (Fu(e, a), tc(a) && // do not delay if we're inside an act() scope
          !yE()) {
            var i = zS + KC - Tt();
            if (i > 10) {
              var u = Eo(e, U);
              if (u !== U)
                break;
              var s = e.suspendedLanes;
              if (!pl(s, a)) {
                yr(), rd(e, s);
                break;
              }
              e.timeoutHandle = Hy(Zo.bind(null, e, $r, Ll), i);
              break;
            }
          }
          Zo(e, $r, Ll);
          break;
        }
        case up: {
          if (Fu(e, a), Lv(a))
            break;
          if (!yE()) {
            var f = Mv(e, a), p = f, v = Tt() - p, m = GD(v) - v;
            if (m > 10) {
              e.timeoutHandle = Hy(Zo.bind(null, e, $r, Ll), m);
              break;
            }
          }
          Zo(e, $r, Ll);
          break;
        }
        case qC: {
          Zo(e, $r, Ll);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function bD(e) {
      for (var t = e; ; ) {
        if (t.flags & vo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!oe(f(), p))
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
    function Fu(e, t) {
      t = ou(t, mm), t = ou(t, sp), nd(e, t);
    }
    function rE(e) {
      if (Xx(), (Qe & (Vn | wa)) !== vn)
        throw new Error("Should not already be working.");
      zl();
      var t = Eo(e, U);
      if (!Jn(t, Te))
        return Yr(e, Tt()), null;
      var a = Rm(e, t);
      if (e.tag !== Du && a === Xo) {
        var i = Zf(e);
        i !== U && (t = i, a = BS(e, i));
      }
      if (a === lp) {
        var u = op;
        throw Ko(e, U), Fu(e, t), Yr(e, Tt()), u;
      }
      if (a === LS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Zo(e, $r, Ll), Yr(e, Tt()), null;
    }
    function _D(e, t) {
      t !== U && (su(e, Le(t, Te)), Yr(e, Tt()), (Qe & (Vn | wa)) === vn && (fp(), ku()));
    }
    function jS(e, t) {
      var a = Qe;
      Qe |= XC;
      try {
        return e(t);
      } finally {
        Qe = a, Qe === vn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ri.isBatchingLegacy && (fp(), J0());
      }
    }
    function OD(e, t, a, i, u) {
      var s = Ar(), f = Fn.transition;
      try {
        return Fn.transition = null, Wt(Tn), e(t, a, i, u);
      } finally {
        Wt(s), Fn.transition = f, Qe === vn && fp();
      }
    }
    function Nl(e) {
      Au !== null && Au.tag === Du && (Qe & (Vn | wa)) === vn && zl();
      var t = Qe;
      Qe |= XC;
      var a = Fn.transition, i = Ar();
      try {
        return Fn.transition = null, Wt(Tn), e ? e() : void 0;
      } finally {
        Wt(i), Fn.transition = a, Qe = t, (Qe & (Vn | wa)) === vn && ku();
      }
    }
    function aE() {
      return (Qe & (Vn | wa)) !== vn;
    }
    function Tm(e, t) {
      tr(NS, Pi, e), Pi = Le(Pi, t);
    }
    function PS(e) {
      Pi = NS.current, er(NS, e);
    }
    function Ko(e, t) {
      e.finishedWork = null, e.finishedLanes = U;
      var a = e.timeoutHandle;
      if (a !== Fy && (e.timeoutHandle = Fy, aR(a)), At !== null)
        for (var i = At.return; i !== null; ) {
          var u = i.alternate;
          NC(u, i), i = i.return;
        }
      mr = e;
      var s = Jo(e.current, null);
      return At = s, hn = Pi = t, mn = Ml, op = null, hm = U, sp = U, mm = U, cp = null, $r = null, Rx(), Xa.discardPendingWarnings(), s;
    }
    function iE(e, t) {
      do {
        var a = At;
        try {
          if (Oh(), U1(), Qt(), MS.current = null, a === null || a.return === null) {
            mn = lp, op = t, At = null;
            return;
          }
          if (_n && a.mode & Ee && om(a, !0), ai)
            if (al(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              bv(a, i, hn);
            } else
              As(a, t, hn);
          ew(e, a.return, a, t, hn), sE(a);
        } catch (u) {
          t = u, At === a && a !== null ? (a = a.return, At = a) : a = At;
          continue;
        }
        return;
      } while (!0);
    }
    function lE() {
      var e = OS.current;
      return OS.current = rm, e === null ? rm : e;
    }
    function uE(e) {
      OS.current = e;
    }
    function MD() {
      zS = Tt();
    }
    function hp(e) {
      hm = Le(e, hm);
    }
    function LD() {
      mn === Ml && (mn = vm);
    }
    function $S() {
      (mn === Ml || mn === vm || mn === Xo) && (mn = up), mr !== null && (To(hm) || To(sp)) && Fu(mr, hn);
    }
    function ND(e) {
      mn !== up && (mn = Xo), cp === null ? cp = [e] : cp.push(e);
    }
    function zD() {
      return mn === Ml;
    }
    function Rm(e, t) {
      var a = Qe;
      Qe |= Vn;
      var i = lE();
      if (mr !== e || hn !== t) {
        if (on) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (mp(e, hn), u.clear()), ac(e, t);
        }
        Ll = ld(), Ko(e, t);
      }
      aa(t);
      do
        try {
          UD();
          break;
        } catch (s) {
          iE(e, s);
        }
      while (!0);
      if (Oh(), Qe = a, uE(i), At !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return ru(), mr = null, hn = U, mn;
    }
    function UD() {
      for (; At !== null; )
        oE(At);
    }
    function AD(e, t) {
      var a = Qe;
      Qe |= Vn;
      var i = lE();
      if (mr !== e || hn !== t) {
        if (on) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (mp(e, hn), u.clear()), ac(e, t);
        }
        Ll = ld(), fp(), Ko(e, t);
      }
      aa(t);
      do
        try {
          HD();
          break;
        } catch (s) {
          iE(e, s);
        }
      while (!0);
      return Oh(), uE(i), Qe = a, At !== null ? (yo(), Ml) : (ru(), mr = null, hn = U, mn);
    }
    function HD() {
      for (; At !== null && !Os(); )
        oE(At);
    }
    function oE(e) {
      var t = e.alternate;
      lt(e);
      var a;
      (e.mode & Ee) !== Ce ? (aS(e), a = YS(t, e, Pi), om(e, !0)) : a = YS(t, e, Pi), Qt(), e.memoizedProps = e.pendingProps, a === null ? sE(e) : At = a, MS.current = null;
    }
    function sE(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & sr) === me) {
          lt(t);
          var u = void 0;
          if ((t.mode & Ee) === Ce ? u = LC(a, t, Pi) : (aS(t), u = LC(a, t, Pi), om(t, !1)), Qt(), u !== null) {
            At = u;
            return;
          }
        } else {
          var s = Lw(a, t);
          if (s !== null) {
            s.flags &= Sv, At = s;
            return;
          }
          if ((t.mode & Ee) !== Ce) {
            om(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= sr, i.subtreeFlags = me, i.deletions = null;
          else {
            mn = LS, At = null;
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
      mn === Ml && (mn = qC);
    }
    function Zo(e, t, a) {
      var i = Ar(), u = Fn.transition;
      try {
        Fn.transition = null, Wt(Tn), FD(e, t, a, i);
      } finally {
        Fn.transition = u, Wt(i);
      }
      return null;
    }
    function FD(e, t, a, i) {
      do
        zl();
      while (Au !== null);
      if (XD(), (Qe & (Vn | wa)) !== vn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Ns(s), u === null)
        return Gf(), null;
      if (s === U && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = U, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ye;
      var f = Le(u.lanes, u.childLanes);
      ad(e, f), e === mr && (mr = null, At = null, hn = U), ((u.subtreeFlags & Lr) !== me || (u.flags & Lr) !== me) && (qo || (qo = !0, HS = a, GS(ha, function() {
        return zl(), null;
      })));
      var p = (u.subtreeFlags & (eu | Xn | En | Lr)) !== me, v = (u.flags & (eu | Xn | En | Lr)) !== me;
      if (p || v) {
        var m = Fn.transition;
        Fn.transition = null;
        var y = Ar();
        Wt(Tn);
        var R = Qe;
        Qe |= wa, MS.current = null, Hw(e, u), lC(), Kw(e, u, s), KT(e.containerInfo), e.current = u, _v(s), Zw(u, e, s), nu(), Tv(), Qe = R, Wt(y), Fn.transition = m;
      } else
        e.current = u, lC();
      var E = qo;
      if (qo ? (qo = !1, Au = e, dp = s) : (Gc = 0, Sm = null), f = e.pendingLanes, f === U && (Ic = null), E || pE(e.current, !1), Va(u.stateNode, i), on && e.memoizedUpdaters.clear(), yD(), Yr(e, Tt()), t !== null)
        for (var _ = e.onRecoverableError, O = 0; O < t.length; O++) {
          var N = t[O], ne = N.stack, ye = N.digest;
          _(N.value, {
            componentStack: ne,
            digest: ye
          });
        }
      if (ym) {
        ym = !1;
        var pe = US;
        throw US = null, pe;
      }
      return Jn(dp, Te) && e.tag !== Du && zl(), f = e.pendingLanes, Jn(f, Te) ? (Gx(), e === FS ? pp++ : (pp = 0, FS = e)) : pp = 0, ku(), Gf(), null;
    }
    function zl() {
      if (Au !== null) {
        var e = Do(dp), t = oy(Pa, e), a = Fn.transition, i = Ar();
        try {
          return Fn.transition = null, Wt(t), BD();
        } finally {
          Wt(i), Fn.transition = a;
        }
      }
      return !1;
    }
    function VD(e) {
      AS.push(e), qo || (qo = !0, GS(ha, function() {
        return zl(), null;
      }));
    }
    function BD() {
      if (Au === null)
        return !1;
      var e = HS;
      HS = null;
      var t = Au, a = dp;
      if (Au = null, dp = U, (Qe & (Vn | wa)) !== vn)
        throw new Error("Cannot flush passive effects while already rendering.");
      VS = !0, gm = !1, Ov(a);
      var i = Qe;
      Qe |= wa, iD(t.current), tD(t, t.current, a, e);
      {
        var u = AS;
        AS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          jw(t, f);
        }
      }
      mo(), pE(t.current, !0), Qe = i, ku(), gm ? t === Sm ? Gc++ : (Gc = 0, Sm = t) : Gc = 0, VS = !1, gm = !1, Ti(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function cE(e) {
      return Ic !== null && Ic.has(e);
    }
    function jD(e) {
      Ic === null ? Ic = /* @__PURE__ */ new Set([e]) : Ic.add(e);
    }
    function PD(e) {
      ym || (ym = !0, US = e);
    }
    var $D = PD;
    function fE(e, t, a) {
      var i = Go(a, t), u = oC(e, i, Te), s = _u(e, u, Te), f = yr();
      s !== null && (vl(s, Te, f), Yr(s, f));
    }
    function St(e, t, a) {
      if (zw(a), yp(!1), e.tag === H) {
        fE(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === H) {
          fE(i, e, a);
          return;
        } else if (i.tag === K) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !cE(s)) {
            var f = Go(a, e), p = cS(i, f, Te), v = _u(i, p, Te), m = yr();
            v !== null && (vl(v, Te, m), Yr(v, m));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function YD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = yr();
      rd(e, a), JD(e), mr === e && pl(hn, a) && (mn === up || mn === vm && tc(hn) && Tt() - zS < KC ? Ko(e, U) : mm = Le(mm, a)), Yr(e, u);
    }
    function dE(e, t) {
      t === Ye && (t = xD(e));
      var a = yr(), i = jr(e, t);
      i !== null && (vl(i, t, a), Yr(i, a));
    }
    function QD(e) {
      var t = e.memoizedState, a = Ye;
      t !== null && (a = t.retryLane), dE(e, a);
    }
    function ID(e, t) {
      var a = Ye, i;
      switch (e.tag) {
        case ge:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case pt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), dE(e, a);
    }
    function GD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : CD(e / 1960) * 1960;
    }
    function WD() {
      if (pp > TD)
        throw pp = 0, FS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Gc > RD && (Gc = 0, Sm = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function XD() {
      Xa.flushLegacyContextWarning(), Xa.flushPendingUnsafeLifecycleWarnings();
    }
    function pE(e, t) {
      lt(e), xm(e, Wn, vD), t && xm(e, rl, hD), xm(e, Wn, dD), t && xm(e, rl, pD), Qt();
    }
    function xm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== me ? i = i.child : ((i.flags & t) !== me && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var wm = null;
    function vE(e) {
      {
        if ((Qe & Vn) !== vn || !(e.mode & ze))
          return;
        var t = e.tag;
        if (t !== Ae && t !== H && t !== K && t !== de && t !== Y && t !== tt && t !== He)
          return;
        var a = Oe(e) || "ReactComponent";
        if (wm !== null) {
          if (wm.has(a))
            return;
          wm.add(a);
        } else
          wm = /* @__PURE__ */ new Set([a]);
        var i = Vt;
        try {
          lt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? lt(e) : Qt();
        }
      }
    }
    var YS;
    {
      var qD = null;
      YS = function(e, t, a) {
        var i = TE(qD, t);
        try {
          return kC(e, t, a);
        } catch (s) {
          if (sx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Oh(), U1(), NC(e, t), TE(t, i), t.mode & Ee && aS(t), nl(null, kC, null, e, t, a), ty()) {
            var u = Af();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var hE = !1, QS;
    QS = /* @__PURE__ */ new Set();
    function KD(e) {
      if (Dr && !Yx())
        switch (e.tag) {
          case de:
          case Y:
          case He: {
            var t = At && Oe(At) || "Unknown", a = t;
            if (!QS.has(a)) {
              QS.add(a);
              var i = Oe(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case K: {
            hE || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), hE = !0);
            break;
          }
        }
    }
    function mp(e, t) {
      if (on) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          id(e, i, t);
        });
      }
    }
    var IS = {};
    function GS(e, t) {
      {
        var a = ri.current;
        return a !== null ? (a.push(t), IS) : _s(e, t);
      }
    }
    function mE(e) {
      if (e !== IS)
        return Ev(e);
    }
    function yE() {
      return ri.current !== null;
    }
    function ZD(e) {
      {
        if (e.mode & ze) {
          if (!WC())
            return;
        } else if (!SD() || Qe !== vn || e.tag !== de && e.tag !== Y && e.tag !== He)
          return;
        if (ri.current === null) {
          var t = Vt;
          try {
            lt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Oe(e));
          } finally {
            t ? lt(e) : Qt();
          }
        }
      }
    }
    function JD(e) {
      e.tag !== Du && WC() && ri.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function yp(e) {
      eE = e;
    }
    var Da = null, Wc = null, ek = function(e) {
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
    function WS(e) {
      return Xc(e);
    }
    function XS(e) {
      {
        if (Da === null)
          return e;
        var t = Da(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Xc(e.render);
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
    function gE(e, t) {
      {
        if (Da === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case K: {
            typeof i == "function" && (u = !0);
            break;
          }
          case de: {
            (typeof i == "function" || s === On) && (u = !0);
            break;
          }
          case Y: {
            (s === Bl || s === On) && (u = !0);
            break;
          }
          case tt:
          case He: {
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
    function SE(e) {
      {
        if (Da === null || typeof WeakSet != "function")
          return;
        Wc === null && (Wc = /* @__PURE__ */ new WeakSet()), Wc.add(e);
      }
    }
    var tk = function(e, t) {
      {
        if (Da === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        zl(), Nl(function() {
          qS(e.current, i, a);
        });
      }
    }, nk = function(e, t) {
      {
        if (e.context !== la)
          return;
        zl(), Nl(function() {
          gp(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case de:
          case He:
          case K:
            v = p;
            break;
          case Y:
            v = p.render;
            break;
        }
        if (Da === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, y = !1;
        if (v !== null) {
          var R = Da(v);
          R !== void 0 && (a.has(R) ? y = !0 : t.has(R) && (f === K ? y = !0 : m = !0));
        }
        if (Wc !== null && (Wc.has(e) || i !== null && Wc.has(i)) && (y = !0), y && (e._debugNeedsRemount = !0), y || m) {
          var E = jr(e, Te);
          E !== null && yn(E, e, Te, dt);
        }
        u !== null && !y && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var rk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return KS(e.current, i, a), a;
      }
    };
    function KS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case de:
          case He:
          case K:
            p = f;
            break;
          case Y:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? ak(e, a) : i !== null && KS(i, t, a), u !== null && KS(u, t, a);
      }
    }
    function ak(e, t) {
      {
        var a = ik(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case te:
              t.add(i.stateNode);
              return;
            case j:
              t.add(i.stateNode.containerInfo);
              return;
            case H:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function ik(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === te)
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
    var ZS;
    {
      ZS = !1;
      try {
        var CE = Object.preventExtensions({});
      } catch {
        ZS = !0;
      }
    }
    function lk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = me, this.subtreeFlags = me, this.deletions = null, this.lanes = U, this.childLanes = U, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !ZS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ua = function(e, t, a, i) {
      return new lk(e, t, a, i);
    };
    function JS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function uk(e) {
      return typeof e == "function" && !JS(e) && e.defaultProps === void 0;
    }
    function ok(e) {
      if (typeof e == "function")
        return JS(e) ? K : de;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Bl)
          return Y;
        if (t === jl)
          return tt;
      }
      return Ae;
    }
    function Jo(e, t) {
      var a = e.alternate;
      a === null ? (a = ua(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = me, a.subtreeFlags = me, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & un, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ae:
        case de:
        case He:
          a.type = Xc(e.type);
          break;
        case K:
          a.type = WS(e.type);
          break;
        case Y:
          a.type = XS(e.type);
          break;
      }
      return a;
    }
    function sk(e, t) {
      e.flags &= un | ht;
      var a = e.alternate;
      if (a === null)
        e.childLanes = U, e.lanes = t, e.child = null, e.subtreeFlags = me, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = me, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function ck(e, t, a) {
      var i;
      return e === Th ? (i = ze, t === !0 && (i |= Rt, i |= zr)) : i = Ce, on && (i |= Ee), ua(H, null, null, i);
    }
    function e0(e, t, a, i, u, s) {
      var f = Ae, p = e;
      if (typeof e == "function")
        JS(e) ? (f = K, p = WS(p)) : p = Xc(p);
      else if (typeof e == "string")
        f = te;
      else
        e:
          switch (e) {
            case _a:
              return Vu(a.children, u, s, t);
            case Vl:
              f = We, u |= Rt, (u & ze) !== Ce && (u |= zr);
              break;
            case $u:
              return fk(a, u, s, t);
            case da:
              return dk(a, u, s, t);
            case Yu:
              return pk(a, u, s, t);
            case rf:
              return EE(a, u, s, t);
            case Op:
            case bp:
            case Nm:
            case zm:
            case _p:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case tf:
                    f = F;
                    break e;
                  case nf:
                    f = le;
                    break e;
                  case Bl:
                    f = Y, p = XS(p);
                    break e;
                  case jl:
                    f = tt;
                    break e;
                  case On:
                    f = bn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var m = i ? Oe(i) : null;
                m && (v += `

Check the render method of \`` + m + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var y = ua(f, a, t, u);
      return y.elementType = e, y.type = p, y.lanes = s, y._debugOwner = i, y;
    }
    function t0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = e0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Vu(e, t, a, i) {
      var u = ua(Fe, e, i, t);
      return u.lanes = a, u;
    }
    function fk(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ua(ve, e, i, t | Ee);
      return u.elementType = $u, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function dk(e, t, a, i) {
      var u = ua(ge, e, i, t);
      return u.elementType = da, u.lanes = a, u;
    }
    function pk(e, t, a, i) {
      var u = ua(pt, e, i, t);
      return u.elementType = Yu, u.lanes = a, u;
    }
    function EE(e, t, a, i) {
      var u = ua($e, e, i, t);
      u.elementType = rf, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function n0(e, t, a) {
      var i = ua(ke, e, null, t);
      return i.lanes = a, i;
    }
    function vk() {
      var e = ua(te, null, null, Ce);
      return e.elementType = "DELETED", e;
    }
    function hk(e) {
      var t = ua(Ht, null, null, Ce);
      return t.stateNode = e, t;
    }
    function r0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ua(j, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function TE(e, t) {
      return e === null && (e = ua(Ae, null, null, Ce)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function mk(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Fy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ye, this.eventTimes = rc(U), this.expirationTimes = rc(dt), this.pendingLanes = U, this.suspendedLanes = U, this.pingedLanes = U, this.expiredLanes = U, this.mutableReadLanes = U, this.finishedLanes = U, this.entangledLanes = U, this.entanglements = rc(U), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < yt; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Th:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Du:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function RE(e, t, a, i, u, s, f, p, v, m) {
      var y = new mk(e, t, a, p, v), R = ck(t, s);
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
      return fg(R), y;
    }
    var a0 = "18.2.0";
    function yk(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Hl(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Kr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var i0, l0;
    i0 = !1, l0 = {};
    function xE(e) {
      if (!e)
        return la;
      var t = _r(e), a = ex(t);
      if (t.tag === K) {
        var i = t.type;
        if (Ui(i))
          return q0(t, i, a);
      }
      return a;
    }
    function gk(e, t) {
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
          var s = Oe(a) || "Component";
          if (!l0[s]) {
            l0[s] = !0;
            var f = Vt;
            try {
              lt(u), a.mode & Rt ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? lt(f) : Qt();
            }
          }
        }
        return u.stateNode;
      }
    }
    function wE(e, t, a, i, u, s, f, p) {
      var v = !1, m = null;
      return RE(e, t, v, m, a, i, u, s, f);
    }
    function DE(e, t, a, i, u, s, f, p, v, m) {
      var y = !0, R = RE(a, i, y, e, u, s, f, p, v);
      R.context = xE(null);
      var E = R.current, _ = yr(), O = Hu(E), N = _l(_, O);
      return N.callback = t ?? null, _u(E, N, O), wD(R, O, _), R;
    }
    function gp(e, t, a, i) {
      Rv(t, e);
      var u = t.current, s = yr(), f = Hu(u);
      il(f);
      var p = xE(a);
      t.context === null ? t.context = p : t.pendingContext = p, Dr && Vt !== null && !i0 && (i0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Oe(Vt) || "Unknown"));
      var v = _l(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = _u(u, v, f);
      return m !== null && (yn(m, u, f, s), Uh(m, u, f)), f;
    }
    function Dm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case te:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Sk(e) {
      switch (e.tag) {
        case H: {
          var t = e.stateNode;
          if (Xt(t)) {
            var a = ay(t);
            _D(t, a);
          }
          break;
        }
        case ge: {
          Nl(function() {
            var u = jr(e, Te);
            if (u !== null) {
              var s = yr();
              yn(u, e, Te, s);
            }
          });
          var i = Te;
          u0(e, i);
          break;
        }
      }
    }
    function kE(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Uv(a.retryLane, t));
    }
    function u0(e, t) {
      kE(e, t);
      var a = e.alternate;
      a && kE(a, t);
    }
    function Ck(e) {
      if (e.tag === ge) {
        var t = au, a = jr(e, t);
        if (a !== null) {
          var i = yr();
          yn(a, e, t, i);
        }
        u0(e, t);
      }
    }
    function Ek(e) {
      if (e.tag === ge) {
        var t = Hu(e), a = jr(e, t);
        if (a !== null) {
          var i = yr();
          yn(a, e, t, i);
        }
        u0(e, t);
      }
    }
    function bE(e) {
      var t = Cv(e);
      return t === null ? null : t.stateNode;
    }
    var _E = function(e) {
      return null;
    };
    function Tk(e) {
      return _E(e);
    }
    var OE = function(e) {
      return !1;
    };
    function Rk(e) {
      return OE(e);
    }
    var ME = null, LE = null, NE = null, zE = null, UE = null, AE = null, HE = null, FE = null, VE = null;
    {
      var BE = function(e, t, a) {
        var i = t[a], u = Zt(e) ? e.slice() : Be({}, e);
        return a + 1 === t.length ? (Zt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = BE(e[i], t, a + 1), u);
      }, jE = function(e, t) {
        return BE(e, t, 0);
      }, PE = function(e, t, a, i) {
        var u = t[i], s = Zt(e) ? e.slice() : Be({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Zt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = PE(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, $E = function(e, t, a) {
        if (t.length !== a.length) {
          Ne("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Ne("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return PE(e, t, a, 0);
      }, YE = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Zt(e) ? e.slice() : Be({}, e);
        return s[u] = YE(e[u], t, a + 1, i), s;
      }, QE = function(e, t, a) {
        return YE(e, t, 0, a);
      }, o0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      ME = function(e, t, a, i) {
        var u = o0(e, t);
        if (u !== null) {
          var s = QE(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Be({}, e.memoizedProps);
          var f = jr(e, Te);
          f !== null && yn(f, e, Te, dt);
        }
      }, LE = function(e, t, a) {
        var i = o0(e, t);
        if (i !== null) {
          var u = jE(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Be({}, e.memoizedProps);
          var s = jr(e, Te);
          s !== null && yn(s, e, Te, dt);
        }
      }, NE = function(e, t, a, i) {
        var u = o0(e, t);
        if (u !== null) {
          var s = $E(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Be({}, e.memoizedProps);
          var f = jr(e, Te);
          f !== null && yn(f, e, Te, dt);
        }
      }, zE = function(e, t, a) {
        e.pendingProps = QE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = jr(e, Te);
        i !== null && yn(i, e, Te, dt);
      }, UE = function(e, t) {
        e.pendingProps = jE(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = jr(e, Te);
        a !== null && yn(a, e, Te, dt);
      }, AE = function(e, t, a) {
        e.pendingProps = $E(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = jr(e, Te);
        i !== null && yn(i, e, Te, dt);
      }, HE = function(e) {
        var t = jr(e, Te);
        t !== null && yn(t, e, Te, dt);
      }, FE = function(e) {
        _E = e;
      }, VE = function(e) {
        OE = e;
      };
    }
    function xk(e) {
      var t = Nr(e);
      return t === null ? null : t.stateNode;
    }
    function wk(e) {
      return null;
    }
    function Dk() {
      return Vt;
    }
    function kk(e) {
      var t = e.findFiberByHostInstance, a = k.ReactCurrentDispatcher;
      return Qf({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: ME,
        overrideHookStateDeletePath: LE,
        overrideHookStateRenamePath: NE,
        overrideProps: zE,
        overridePropsDeletePath: UE,
        overridePropsRenamePath: AE,
        setErrorHandler: FE,
        setSuspenseHandler: VE,
        scheduleUpdate: HE,
        currentDispatcherRef: a,
        findHostInstanceByFiber: xk,
        findFiberByHostInstance: t || wk,
        // React Refresh
        findHostInstancesForRefresh: rk,
        scheduleRefresh: tk,
        scheduleRoot: nk,
        setRefreshHandler: ek,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Dk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: a0
      });
    }
    var IE = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function s0(e) {
      this._internalRoot = e;
    }
    km.prototype.render = s0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : bm(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Bt) {
          var i = bE(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      gp(e, t, null, null);
    }, km.prototype.unmount = s0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        aE() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Nl(function() {
          gp(null, e, null, null);
        }), Q0(t);
      }
    };
    function bk(e, t) {
      if (!bm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      GE(e);
      var a = !1, i = !1, u = "", s = IE;
      t != null && (t.hydrate ? Ne("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Fl && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = wE(e, Th, null, a, i, u, s);
      hh(f.current, e);
      var p = e.nodeType === Bt ? e.parentNode : e;
      return Dd(p), new s0(f);
    }
    function km(e) {
      this._internalRoot = e;
    }
    function _k(e) {
      e && $v(e);
    }
    km.prototype.unstable_scheduleHydration = _k;
    function Ok(e, t, a) {
      if (!bm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      GE(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = IE;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = DE(t, null, e, Th, i, s, f, p, v);
      if (hh(m.current, e), Dd(e), u)
        for (var y = 0; y < u.length; y++) {
          var R = u[y];
          Fx(m, R);
        }
      return new km(m);
    }
    function bm(e) {
      return !!(e && (e.nodeType === Qn || e.nodeType === ta || e.nodeType === qi || !it));
    }
    function Sp(e) {
      return !!(e && (e.nodeType === Qn || e.nodeType === ta || e.nodeType === qi || e.nodeType === Bt && e.nodeValue === " react-mount-point-unstable "));
    }
    function GE(e) {
      e.nodeType === Qn && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Hd(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Mk = k.ReactCurrentOwner, WE;
    WE = function(e) {
      if (e._reactRootContainer && e.nodeType !== Bt) {
        var t = bE(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = c0(e), u = !!(i && xu(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qn && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function c0(e) {
      return e ? e.nodeType === ta ? e.documentElement : e.firstChild : null;
    }
    function XE() {
    }
    function Lk(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var E = Dm(f);
            s.call(E);
          };
        }
        var f = DE(
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
          XE
        );
        e._reactRootContainer = f, hh(f.current, e);
        var p = e.nodeType === Bt ? e.parentNode : e;
        return Dd(p), Nl(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var m = i;
          i = function() {
            var E = Dm(y);
            m.call(E);
          };
        }
        var y = wE(
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
          XE
        );
        e._reactRootContainer = y, hh(y.current, e);
        var R = e.nodeType === Bt ? e.parentNode : e;
        return Dd(R), Nl(function() {
          gp(t, y, a, i);
        }), y;
      }
    }
    function Nk(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function _m(e, t, a, i, u) {
      WE(a), Nk(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Lk(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Dm(f);
            p.call(v);
          };
        }
        gp(t, f, e, u);
      }
      return Dm(f);
    }
    function zk(e) {
      {
        var t = Mk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ct(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Qn ? e : gk(e, "findDOMNode");
    }
    function Uk(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Sp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Hd(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return _m(null, e, t, !0, a);
    }
    function Ak(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Sp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Hd(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return _m(null, e, t, !1, a);
    }
    function Hk(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Sp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !po(e))
        throw new Error("parentComponent must be a valid React Component");
      return _m(e, t, a, !1, i);
    }
    function Fk(e) {
      if (!Sp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Hd(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = c0(e), i = a && !xu(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Nl(function() {
          _m(null, null, e, !1, function() {
            e._reactRootContainer = null, Q0(e);
          });
        }), !0;
      } else {
        {
          var u = c0(e), s = !!(u && xu(u)), f = e.nodeType === Qn && Sp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ie(Sk), Hv(Ck), bo(Ek), od(Ar), Vv(wo), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), yv(jT), xs(jS, OD, Nl);
    function Vk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!bm(t))
        throw new Error("Target container is not a DOM element.");
      return yk(e, t, null, a);
    }
    function Bk(e, t, a, i) {
      return Hk(e, t, a, i);
    }
    var f0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [xu, Dc, mh, Rs, so, jS]
    };
    function jk(e, t) {
      return f0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), bk(e, t);
    }
    function Pk(e, t, a) {
      return f0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Ok(e, t, a);
    }
    function $k(e) {
      return aE() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Nl(e);
    }
    var Yk = kk({
      findFiberByHostInstance: Fo,
      bundleType: 1,
      version: a0,
      rendererPackageName: "react-dom"
    });
    if (!Yk && gn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var qE = window.location.protocol;
      /^(https?|file):$/.test(qE) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (qE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = f0, Qr.createPortal = Vk, Qr.createRoot = jk, Qr.findDOMNode = zk, Qr.flushSync = $k, Qr.hydrate = Uk, Qr.hydrateRoot = Pk, Qr.render = Ak, Qr.unmountComponentAtNode = Fk, Qr.unstable_batchedUpdates = jS, Qr.unstable_renderSubtreeIntoContainer = Bk, Qr.version = a0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
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
var eT;
function ab() {
  if (eT)
    return Ir;
  eT = 1;
  var L = tT, I = Ep;
  function k(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ue = /* @__PURE__ */ new Set(), Ge = {};
  function Ne(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (Ge[n] = r, n = 0; n < r.length; n++)
      Ue.add(r[n]);
  }
  var vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), de = Object.prototype.hasOwnProperty, K = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ae = {}, H = {};
  function j(n) {
    return de.call(H, n) ? !0 : de.call(Ae, n) ? !1 : K.test(n) ? H[n] = !0 : (Ae[n] = !0, !1);
  }
  function te(n, r, l, o) {
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
  function ke(n, r, l, o) {
    if (r === null || typeof r > "u" || te(n, r, l, o))
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
  function Fe(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var We = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    We[n] = new Fe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    We[r] = new Fe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    We[n] = new Fe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    We[n] = new Fe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    We[n] = new Fe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    We[n] = new Fe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    We[n] = new Fe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    We[n] = new Fe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    We[n] = new Fe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var le = /[\-:]([a-z])/g;
  function F(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      le,
      F
    );
    We[r] = new Fe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(le, F);
    We[r] = new Fe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(le, F);
    We[r] = new Fe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    We[n] = new Fe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), We.xlinkHref = new Fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    We[n] = new Fe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Y(n, r, l, o) {
    var c = We.hasOwnProperty(r) ? We[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ke(r, l, c, o) && (l = null), o || c === null ? j(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ve = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ge = Symbol.for("react.element"), tt = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), bn = Symbol.for("react.strict_mode"), ir = Symbol.for("react.profiler"), Ht = Symbol.for("react.provider"), pt = Symbol.for("react.context"), jn = Symbol.for("react.forward_ref"), $e = Symbol.for("react.suspense"), at = Symbol.for("react.suspense_list"), Cr = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), Er = Symbol.for("react.offscreen"), X = Symbol.iterator;
  function Re(n) {
    return n === null || typeof n != "object" ? null : (n = X && n[X] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ae = Object.assign, nt;
  function it(n) {
    if (nt === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        nt = r && r[1] || "";
      }
    return `
` + nt + n;
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
    return (n = n ? n.displayName || n.name : "") ? it(n) : "";
  }
  function ai(n) {
    switch (n.tag) {
      case 5:
        return it(n.type);
      case 16:
        return it("Lazy");
      case 13:
        return it("Suspense");
      case 19:
        return it("SuspenseList");
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
      case He:
        return "Fragment";
      case tt:
        return "Portal";
      case ir:
        return "Profiler";
      case bn:
        return "StrictMode";
      case $e:
        return "Suspense";
      case at:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case pt:
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
  function $n(n, r) {
    var l = r.checked;
    return ae({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Rr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Gr(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Wr(n, r) {
    r = r.checked, r != null && Y(n, "checked", r, !1);
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
  function ba(n, r, l) {
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
  var Yi = Array.isArray;
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
      throw Error(k(91));
    return ae({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Xr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(k(92));
        if (Yi(l)) {
          if (1 < l.length)
            throw Error(k(93));
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
  function Yn(n, r) {
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
  var q = {
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
  }, Se = ["Webkit", "ms", "Moz", "O"];
  Object.keys(q).forEach(function(n) {
    Se.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), q[r] = q[n];
    });
  });
  function Ve(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || q.hasOwnProperty(n) && q[n] ? ("" + r).trim() : r + "px";
  }
  function st(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = Ve(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Nt = ae({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Sn(n, r) {
    if (r) {
      if (Nt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(k(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(k(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(k(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(k(62));
    }
  }
  function Yt(n, r) {
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
  function wp(n) {
    if (n = po(n)) {
      if (typeof fa != "function")
        throw Error(k(280));
      var r = n.stateNode;
      r && (r = me(r), fa(n.stateNode, n.type, r));
    }
  }
  function ts(n) {
    Ft ? bt ? bt.push(n) : bt = [n] : Ft = n;
  }
  function ns() {
    if (Ft) {
      var n = Ft, r = bt;
      if (bt = Ft = null, wp(n), r)
        for (n = 0; n < r.length; n++)
          wp(r[n]);
    }
  }
  function Dp(n, r) {
    return n(r);
  }
  function kp() {
  }
  var rs = !1;
  function ef(n, r, l) {
    if (rs)
      return n(r, l);
    rs = !0;
    try {
      return Dp(n, r, l);
    } finally {
      rs = !1, (Ft !== null || bt !== null) && (kp(), ns());
    }
  }
  function Pu(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = me(l);
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
      throw Error(k(231, r, typeof l));
    return l;
  }
  var as = !1;
  if (vt)
    try {
      var Ii = {};
      Object.defineProperty(Ii, "passive", { get: function() {
        as = !0;
      } }), window.addEventListener("test", Ii, Ii), window.removeEventListener("test", Ii, Ii);
    } catch {
      as = !1;
    }
  function Fl(n, r, l, o, c, d, h, S, C) {
    var M = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, M);
    } catch (B) {
      this.onError(B);
    }
  }
  var Kr = !1, _a = null, Vl = !1, $u = null, tf = { onError: function(n) {
    Kr = !0, _a = n;
  } };
  function nf(n, r, l, o, c, d, h, S, C) {
    Kr = !1, _a = null, Fl.apply(tf, arguments);
  }
  function Bl(n, r, l, o, c, d, h, S, C) {
    if (nf.apply(this, arguments), Kr) {
      if (Kr) {
        var M = _a;
        Kr = !1, _a = null;
      } else
        throw Error(k(198));
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
  function Yu(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function jl(n) {
    if (da(n) !== n)
      throw Error(k(188));
  }
  function On(n) {
    var r = n.alternate;
    if (!r) {
      if (r = da(n), r === null)
        throw Error(k(188));
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
        throw Error(k(188));
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
            throw Error(k(189));
        }
      }
      if (l.alternate !== o)
        throw Error(k(190));
    }
    if (l.tag !== 3)
      throw Error(k(188));
    return l.stateNode.current === l ? n : r;
  }
  function bp(n) {
    return n = On(n), n !== null ? _p(n) : null;
  }
  function _p(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = _p(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var rf = I.unstable_scheduleCallback, Op = I.unstable_cancelCallback, Nm = I.unstable_shouldYield, zm = I.unstable_requestPaint, _t = I.unstable_now, Um = I.unstable_getCurrentPriorityLevel, Oa = I.unstable_ImmediatePriority, Be = I.unstable_UserBlockingPriority, ci = I.unstable_NormalPriority, Mp = I.unstable_LowPriority, af = I.unstable_IdlePriority, Qu = null, Zr = null;
  function Lp(n) {
    if (Zr && typeof Zr.onCommitFiberRoot == "function")
      try {
        Zr.onCommitFiberRoot(Qu, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var wr = Math.clz32 ? Math.clz32 : Am, Np = Math.log, zp = Math.LN2;
  function Am(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Np(n) / zp | 0) | 0;
  }
  var is = 64, Pl = 4194304;
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
  function lf(n, r) {
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
      C === -1 ? (!(S & l) || S & o) && (c[h] = lf(S, r)) : C <= r && (n.expiredLanes |= S), d &= ~S;
    }
  }
  function uf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function us() {
    var n = is;
    return is <<= 1, !(is & 4194240) && (is = 64), n;
  }
  function of(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function Wi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - wr(r), n[r] = l;
  }
  function Hm(n, r) {
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
  var rt = 0;
  function sf(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Up, os, ct, Ap, cf, Oe = !1, Gu = [], Vt = null, Dr = null, kr = null, Wu = /* @__PURE__ */ new Map(), Qt = /* @__PURE__ */ new Map(), lt = [], Fm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
  function Hp(n) {
    var r = _r(n.target);
    if (r !== null) {
      var l = da(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Yu(l), r !== null) {
            n.blockedOn = r, cf(n.priority, function() {
              ct(l);
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
  function $l(n) {
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
  function ff(n, r, l) {
    $l(n) && l.delete(r);
  }
  function Fp() {
    Oe = !1, Vt !== null && $l(Vt) && (Vt = null), Dr !== null && $l(Dr) && (Dr = null), kr !== null && $l(kr) && (kr = null), Wu.forEach(ff), Qt.forEach(ff);
  }
  function Xu(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Oe || (Oe = !0, I.unstable_scheduleCallback(I.unstable_NormalPriority, Fp)));
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
    for (Vt !== null && Xu(Vt, n), Dr !== null && Xu(Dr, n), kr !== null && Xu(kr, n), Wu.forEach(r), Qt.forEach(r), l = 0; l < lt.length; l++)
      o = lt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < lt.length && (l = lt[0], l.blockedOn === null); )
      Hp(l), l.blockedOn === null && lt.shift();
  }
  var Yl = ve.ReactCurrentBatchConfig, Xi = !0;
  function Vp(n, r, l, o) {
    var c = rt, d = Yl.transition;
    Yl.transition = null;
    try {
      rt = 1, cs(n, r, l, o);
    } finally {
      rt = c, Yl.transition = d;
    }
  }
  function ss(n, r, l, o) {
    var c = rt, d = Yl.transition;
    Yl.transition = null;
    try {
      rt = 4, cs(n, r, l, o);
    } finally {
      rt = c, Yl.transition = d;
    }
  }
  function cs(n, r, l, o) {
    if (Xi) {
      var c = fs(n, r, l, o);
      if (c === null)
        Rs(n, r, o, Ku, l), ea(n, o);
      else if (fi(c, n, r, l, o))
        o.stopPropagation();
      else if (ea(n, o), r & 4 && -1 < Fm.indexOf(n)) {
        for (; c !== null; ) {
          var d = po(c);
          if (d !== null && Up(d), d = fs(n, r, l, o), d === null && Rs(n, r, o, Ku, l), d === c)
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
        if (n = Yu(r), n !== null)
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
  function df(n) {
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
        switch (Um()) {
          case Oa:
            return 1;
          case Be:
            return 4;
          case ci:
          case Mp:
            return 16;
          case af:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ma = null, Zu = null, Ju = null;
  function pf() {
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
  function Ql(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function eo() {
    return !0;
  }
  function Bp() {
    return !1;
  }
  function or(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var S in n)
        n.hasOwnProperty(S) && (l = n[S], this[S] = l ? l(d) : d[S]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? eo : Bp, this.isPropagationStopped = Bp, this;
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
  }, defaultPrevented: 0, isTrusted: 0 }, ds = or(di), Il = ae({}, di, { view: 0, detail: 0 }), jp = or(Il), ps, vf, to, Zt = ae({}, Il, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: gf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== to && (to && n.type === "mousemove" ? (ps = n.screenX - to.screenX, vf = n.screenY - to.screenY) : vf = ps = 0, to = n), ps);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : vf;
  } }), vs = or(Zt), Pp = ae({}, Zt, { dataTransfer: 0 }), $p = or(Pp), Vm = ae({}, Il, { relatedTarget: 0 }), pi = or(Vm), hf = ae({}, di, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Yp = or(hf), Bm = ae({}, di, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), jm = or(Bm), Pm = ae({}, di, { data: 0 }), mf = or(Pm), yf = {
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
  }, Qp = {
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
  }, Ip = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Gp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Ip[n]) ? !!r[n] : !1;
  }
  function gf() {
    return Gp;
  }
  var La = ae({}, Il, { key: function(n) {
    if (n.key) {
      var r = yf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Ql(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Qp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: gf, charCode: function(n) {
    return n.type === "keypress" ? Ql(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Ql(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), $m = or(La), Sf = ae({}, Zt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), hs = or(Sf), Cf = ae({}, Il, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: gf }), Ym = or(Cf), ms = ae({}, di, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wp = or(ms), Qn = ae({}, Zt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Na = or(Qn), Bt = [9, 13, 27, 32], ta = vt && "CompositionEvent" in window, qi = null;
  vt && "documentMode" in document && (qi = document.documentMode);
  var ys = vt && "TextEvent" in window && !qi, Xp = vt && (!ta || qi && 8 < qi && 11 >= qi), Gl = " ", qp = !1;
  function Kp(n, r) {
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
  var Wl = !1;
  function Qm(n, r) {
    switch (n) {
      case "compositionend":
        return gs(r);
      case "keypress":
        return r.which !== 32 ? null : (qp = !0, Gl);
      case "textInput":
        return n = r.data, n === Gl && qp ? null : n;
      default:
        return null;
    }
  }
  function Im(n, r) {
    if (Wl)
      return n === "compositionend" || !ta && Kp(n, r) ? (n = pf(), Ju = Zu = Ma = null, Wl = !1, n) : null;
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
        return Xp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Zp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Jp(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Zp[n.type] : r === "textarea";
  }
  function ev(n, r, l, o) {
    ts(o), r = so(r, "onChange"), 0 < r.length && (l = new ds("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var no = null, Xl = null;
  function ql(n) {
    Ts(n, 0);
  }
  function Kl(n) {
    var r = Jl(n);
    if (ka(r))
      return n;
  }
  function tv(n, r) {
    if (n === "change")
      return r;
  }
  var Ef = !1;
  if (vt) {
    var Tf;
    if (vt) {
      var Rf = "oninput" in document;
      if (!Rf) {
        var nv = document.createElement("div");
        nv.setAttribute("oninput", "return;"), Rf = typeof nv.oninput == "function";
      }
      Tf = Rf;
    } else
      Tf = !1;
    Ef = Tf && (!document.documentMode || 9 < document.documentMode);
  }
  function rv() {
    no && (no.detachEvent("onpropertychange", av), Xl = no = null);
  }
  function av(n) {
    if (n.propertyName === "value" && Kl(Xl)) {
      var r = [];
      ev(r, Xl, n, kt(n)), ef(ql, r);
    }
  }
  function Gm(n, r, l) {
    n === "focusin" ? (rv(), no = r, Xl = l, no.attachEvent("onpropertychange", av)) : n === "focusout" && rv();
  }
  function Wm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Kl(Xl);
  }
  function Xm(n, r) {
    if (n === "click")
      return Kl(r);
  }
  function iv(n, r) {
    if (n === "input" || n === "change")
      return Kl(r);
  }
  function qm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var br = typeof Object.is == "function" ? Object.is : qm;
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
      if (!de.call(r, c) || !br(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function lv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function uv(n, r) {
    var l = lv(n);
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
      l = lv(l);
    }
  }
  function ov(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? ov(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
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
    if (r !== l && l && l.ownerDocument && ov(l.ownerDocument.documentElement, l)) {
      if (o !== null && za(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = uv(l, d);
          var h = uv(
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
  var sv = vt && "documentMode" in document && 11 >= document.documentMode, na = null, xf = null, ao = null, wf = !1;
  function cv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    wf || na == null || na !== gn(o) || (o = na, "selectionStart" in o && za(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ao && ro(ao, o) || (ao = o, o = so(xf, "onSelect"), 0 < o.length && (r = new ds("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = na)));
  }
  function Es(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Ki = { animationend: Es("Animation", "AnimationEnd"), animationiteration: Es("Animation", "AnimationIteration"), animationstart: Es("Animation", "AnimationStart"), transitionend: Es("Transition", "TransitionEnd") }, Df = {}, kf = {};
  vt && (kf = document.createElement("div").style, "AnimationEvent" in window || (delete Ki.animationend.animation, delete Ki.animationiteration.animation, delete Ki.animationstart.animation), "TransitionEvent" in window || delete Ki.transitionend.transition);
  function Jt(n) {
    if (Df[n])
      return Df[n];
    if (!Ki[n])
      return n;
    var r = Ki[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in kf)
        return Df[n] = r[l];
    return n;
  }
  var bf = Jt("animationend"), fv = Jt("animationiteration"), dv = Jt("animationstart"), pv = Jt("transitionend"), vv = /* @__PURE__ */ new Map(), hv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ua(n, r) {
    vv.set(n, r), Ne(r, [n]);
  }
  for (var io = 0; io < hv.length; io++) {
    var Zi = hv[io], Km = Zi.toLowerCase(), lo = Zi[0].toUpperCase() + Zi.slice(1);
    Ua(Km, "on" + lo);
  }
  Ua(bf, "onAnimationEnd"), Ua(fv, "onAnimationIteration"), Ua(dv, "onAnimationStart"), Ua("dblclick", "onDoubleClick"), Ua("focusin", "onFocus"), Ua("focusout", "onBlur"), Ua(pv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), Ne("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ne("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ne("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ne("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ne("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ne("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var uo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zm = new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));
  function mv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Bl(o, r, void 0, n), n.currentTarget = null;
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
            mv(c, S, M), d = C;
          }
        else
          for (h = 0; h < o.length; h++) {
            if (S = o[h], C = S.instance, M = S.currentTarget, S = S.listener, C !== d && c.isPropagationStopped())
              break e;
            mv(c, S, M), d = C;
          }
      }
    }
    if (Vl)
      throw n = $u, Vl = !1, $u = null, n;
  }
  function ft(n, r) {
    var l = r[Uf];
    l === void 0 && (l = r[Uf] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (yv(r, n, 2, !1), l.add(o));
  }
  function vi(n, r, l) {
    var o = 0;
    r && (o |= 4), yv(l, n, o, r);
  }
  var Aa = "_reactListening" + Math.random().toString(36).slice(2);
  function Zl(n) {
    if (!n[Aa]) {
      n[Aa] = !0, Ue.forEach(function(l) {
        l !== "selectionchange" && (Zm.has(l) || vi(l, !1, n), vi(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Aa] || (r[Aa] = !0, vi("selectionchange", !1, r));
    }
  }
  function yv(n, r, l, o) {
    switch (df(r)) {
      case 1:
        var c = Vp;
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
    ef(function() {
      var M = d, B = kt(l), P = [];
      e: {
        var V = vv.get(n);
        if (V !== void 0) {
          var J = ds, ue = n;
          switch (n) {
            case "keypress":
              if (Ql(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              J = $m;
              break;
            case "focusin":
              ue = "focus", J = pi;
              break;
            case "focusout":
              ue = "blur", J = pi;
              break;
            case "beforeblur":
            case "afterblur":
              J = pi;
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
              J = vs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              J = $p;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              J = Ym;
              break;
            case bf:
            case fv:
            case dv:
              J = Yp;
              break;
            case pv:
              J = Wp;
              break;
            case "scroll":
              J = jp;
              break;
            case "wheel":
              J = Na;
              break;
            case "copy":
            case "cut":
            case "paste":
              J = jm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              J = hs;
          }
          var ce = (r & 4) !== 0, Ut = !ce && n === "scroll", x = ce ? V !== null ? V + "Capture" : null : V;
          ce = [];
          for (var T = M, b; T !== null; ) {
            b = T;
            var Q = b.stateNode;
            if (b.tag === 5 && Q !== null && (b = Q, x !== null && (Q = Pu(T, x), Q != null && ce.push(oo(T, Q, b)))), Ut)
              break;
            T = T.return;
          }
          0 < ce.length && (V = new J(V, ue, null, l, B), P.push({ event: V, listeners: ce }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (V = n === "mouseover" || n === "pointerover", J = n === "mouseout" || n === "pointerout", V && l !== xr && (ue = l.relatedTarget || l.fromElement) && (_r(ue) || ue[Ha]))
            break e;
          if ((J || V) && (V = B.window === B ? B : (V = B.ownerDocument) ? V.defaultView || V.parentWindow : window, J ? (ue = l.relatedTarget || l.toElement, J = M, ue = ue ? _r(ue) : null, ue !== null && (Ut = da(ue), ue !== Ut || ue.tag !== 5 && ue.tag !== 6) && (ue = null)) : (J = null, ue = M), J !== ue)) {
            if (ce = vs, Q = "onMouseLeave", x = "onMouseEnter", T = "mouse", (n === "pointerout" || n === "pointerover") && (ce = hs, Q = "onPointerLeave", x = "onPointerEnter", T = "pointer"), Ut = J == null ? V : Jl(J), b = ue == null ? V : Jl(ue), V = new ce(Q, T + "leave", J, l, B), V.target = Ut, V.relatedTarget = b, Q = null, _r(B) === M && (ce = new ce(x, T + "enter", ue, l, B), ce.target = b, ce.relatedTarget = Ut, Q = ce), Ut = Q, J && ue)
              t: {
                for (ce = J, x = ue, T = 0, b = ce; b; b = Ji(b))
                  T++;
                for (b = 0, Q = x; Q; Q = Ji(Q))
                  b++;
                for (; 0 < T - b; )
                  ce = Ji(ce), T--;
                for (; 0 < b - T; )
                  x = Ji(x), b--;
                for (; T--; ) {
                  if (ce === x || x !== null && ce === x.alternate)
                    break t;
                  ce = Ji(ce), x = Ji(x);
                }
                ce = null;
              }
            else
              ce = null;
            J !== null && _f(P, V, J, ce, !1), ue !== null && Ut !== null && _f(P, Ut, ue, ce, !0);
          }
        }
        e: {
          if (V = M ? Jl(M) : window, J = V.nodeName && V.nodeName.toLowerCase(), J === "select" || J === "input" && V.type === "file")
            var fe = tv;
          else if (Jp(V))
            if (Ef)
              fe = iv;
            else {
              fe = Wm;
              var oe = Gm;
            }
          else
            (J = V.nodeName) && J.toLowerCase() === "input" && (V.type === "checkbox" || V.type === "radio") && (fe = Xm);
          if (fe && (fe = fe(n, M))) {
            ev(P, fe, l, B);
            break e;
          }
          oe && oe(n, V, M), n === "focusout" && (oe = V._wrapperState) && oe.controlled && V.type === "number" && Hl(V, "number", V.value);
        }
        switch (oe = M ? Jl(M) : window, n) {
          case "focusin":
            (Jp(oe) || oe.contentEditable === "true") && (na = oe, xf = M, ao = null);
            break;
          case "focusout":
            ao = xf = na = null;
            break;
          case "mousedown":
            wf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            wf = !1, cv(P, l, B);
            break;
          case "selectionchange":
            if (sv)
              break;
          case "keydown":
          case "keyup":
            cv(P, l, B);
        }
        var he;
        if (ta)
          e: {
            switch (n) {
              case "compositionstart":
                var De = "onCompositionStart";
                break e;
              case "compositionend":
                De = "onCompositionEnd";
                break e;
              case "compositionupdate":
                De = "onCompositionUpdate";
                break e;
            }
            De = void 0;
          }
        else
          Wl ? Kp(n, l) && (De = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (De = "onCompositionStart");
        De && (Xp && l.locale !== "ko" && (Wl || De !== "onCompositionStart" ? De === "onCompositionEnd" && Wl && (he = pf()) : (Ma = B, Zu = "value" in Ma ? Ma.value : Ma.textContent, Wl = !0)), oe = so(M, De), 0 < oe.length && (De = new mf(De, n, null, l, B), P.push({ event: De, listeners: oe }), he ? De.data = he : (he = gs(l), he !== null && (De.data = he)))), (he = ys ? Qm(n, l) : Im(n, l)) && (M = so(M, "onBeforeInput"), 0 < M.length && (B = new mf("onBeforeInput", "beforeinput", null, l, B), P.push({ event: B, listeners: M }), B.data = he));
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
  function _f(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var S = l, C = S.alternate, M = S.stateNode;
      if (C !== null && C === o)
        break;
      S.tag === 5 && M !== null && (S = M, c ? (C = Pu(l, d), C != null && h.unshift(oo(l, C, S))) : c || (C = Pu(l, d), C != null && h.push(oo(l, C, S)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var Of = /\r\n?/g, Jm = /\u0000|\uFFFD/g;
  function Mf(n) {
    return (typeof n == "string" ? n : "" + n).replace(Of, `
`).replace(Jm, "");
  }
  function xs(n, r, l) {
    if (r = Mf(r), Mf(n) !== r && l)
      throw Error(k(425));
  }
  function ws() {
  }
  var Lf = null, el = null;
  function co(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var tl = typeof setTimeout == "function" ? setTimeout : void 0, gv = typeof clearTimeout == "function" ? clearTimeout : void 0, Nf = typeof Promise == "function" ? Promise : void 0, zf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nf < "u" ? function(n) {
    return Nf.resolve(null).then(n).catch(ey);
  } : tl;
  function ey(n) {
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
  var mi = Math.random().toString(36).slice(2), pa = "__reactFiber$" + mi, nl = "__reactProps$" + mi, Ha = "__reactContainer$" + mi, Uf = "__reactEvents$" + mi, ty = "__reactListeners$" + mi, Af = "__reactHandles$" + mi;
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
  function Jl(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(k(33));
  }
  function me(n) {
    return n[nl] || null;
  }
  var yi = [], ht = -1;
  function Me(n) {
    return { current: n };
  }
  function Ze(n) {
    0 > ht || (n.current = yi[ht], yi[ht] = null, ht--);
  }
  function Je(n, r) {
    ht++, yi[ht] = n.current, n.current = r;
  }
  var va = {}, we = Me(va), Ot = Me(!1), In = va;
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
    Ze(Ot), Ze(we);
  }
  function gi(n, r, l) {
    if (we.current !== va)
      throw Error(k(168));
    Je(we, r), Je(Ot, l);
  }
  function vo(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(k(108, ii(n) || "Unknown", c));
    return ae({}, l, o);
  }
  function Ds(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || va, In = we.current, Je(we, n), Je(Ot, Ot.current), !0;
  }
  function Sv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(k(169));
    l ? (n = vo(n, r, In), o.__reactInternalMemoizedMergedChildContext = n, Ze(Ot), Ze(we), Je(we, n)) : Ze(Ot), Je(Ot, l);
  }
  var sr = null, en = !1, ho = !1;
  function Hf(n) {
    sr === null ? sr = [n] : sr.push(n);
  }
  function Ff(n) {
    en = !0, Hf(n);
  }
  function Gn() {
    if (!ho && sr !== null) {
      ho = !0;
      var n = 0, r = rt;
      try {
        var l = sr;
        for (rt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        sr = null, en = !1;
      } catch (c) {
        throw sr !== null && (sr = sr.slice(n + 1)), rf(Oa, Gn), c;
      } finally {
        rt = r, ho = !1;
      }
    }
    return null;
  }
  var Si = [], Wn = 0, rl = null, eu = 0, Xn = [], En = 0, Lr = null, un = 1, Fa = "";
  function cr(n, r) {
    Si[Wn++] = eu, Si[Wn++] = rl, rl = n, eu = r;
  }
  function Vf(n, r, l) {
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
    n.return !== null && (cr(n, 1), Vf(n, 1, 0));
  }
  function Bf(n) {
    for (; n === rl; )
      rl = Si[--Wn], Si[Wn] = null, eu = Si[--Wn], Si[Wn] = null;
    for (; n === Lr; )
      Lr = Xn[--En], Xn[En] = null, Fa = Xn[--En], Xn[En] = null, un = Xn[--En], Xn[En] = null;
  }
  var fr = null, qn = null, mt = !1, Nr = null;
  function jf(n, r) {
    var l = Vr(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Cv(n, r) {
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
        if (!Cv(n, r)) {
          if (bs(n))
            throw Error(k(418));
          r = ra(l.nextSibling);
          var o = fr;
          r && Cv(n, r) ? jf(o, l) : (n.flags = n.flags & -4097 | 2, mt = !1, fr = n);
        }
      } else {
        if (bs(n))
          throw Error(k(418));
        n.flags = n.flags & -4097 | 2, mt = !1, fr = n;
      }
    }
  }
  function Ev(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    fr = n;
  }
  function Os(n) {
    if (n !== fr)
      return !1;
    if (!mt)
      return Ev(n), mt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !co(n.type, n.memoizedProps)), r && (r = qn)) {
      if (bs(n))
        throw Tv(), Error(k(418));
      for (; r; )
        jf(n, r), r = ra(r.nextSibling);
    }
    if (Ev(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(k(317));
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
  function Tv() {
    for (var n = qn; n; )
      n = ra(n.nextSibling);
  }
  function Tt() {
    qn = fr = null, mt = !1;
  }
  function Pf(n) {
    Nr === null ? Nr = [n] : Nr.push(n);
  }
  var Ms = ve.ReactCurrentBatchConfig;
  function dr(n, r) {
    if (n && n.defaultProps) {
      r = ae({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var ha = Me(null), Ls = null, Ci = null, $f = null;
  function Yf() {
    $f = Ci = Ls = null;
  }
  function Ei(n) {
    var r = ha.current;
    Ze(ha), n._currentValue = r;
  }
  function tn(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function G(n, r) {
    Ls = n, $f = Ci = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (jt = !0), n.firstContext = null);
  }
  function zt(n) {
    var r = n._currentValue;
    if ($f !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Ci === null) {
        if (Ls === null)
          throw Error(k(308));
        Ci = n, Ls.dependencies = { lanes: 0, firstContext: n };
      } else
        Ci = Ci.next = n;
    return r;
  }
  var on = null;
  function Qf(n) {
    on === null ? on = [n] : on.push(n);
  }
  function Rv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Qf(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Va(n, o);
  }
  function Va(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ti = !1;
  function If(n) {
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
    if (o = o.shared, je & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Va(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Qf(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Va(n, l);
  }
  function Ns(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Iu(n, l);
    }
  }
  function Gf(n, r) {
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
      var B = n.alternate;
      B !== null && (B = B.updateQueue, S = B.lastBaseUpdate, S !== h && (S === null ? B.firstBaseUpdate = M : S.next = M, B.lastBaseUpdate = C));
    }
    if (d !== null) {
      var P = c.baseState;
      h = 0, B = M = C = null, S = d;
      do {
        var V = S.lane, J = S.eventTime;
        if ((o & V) === V) {
          B !== null && (B = B.next = {
            eventTime: J,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var ue = n, ce = S;
            switch (V = r, J = l, ce.tag) {
              case 1:
                if (ue = ce.payload, typeof ue == "function") {
                  P = ue.call(J, P, V);
                  break e;
                }
                P = ue;
                break e;
              case 3:
                ue.flags = ue.flags & -65537 | 128;
              case 0:
                if (ue = ce.payload, V = typeof ue == "function" ? ue.call(J, P, V) : ue, V == null)
                  break e;
                P = ae({}, P, V);
                break e;
              case 2:
                Ti = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (n.flags |= 64, V = c.effects, V === null ? c.effects = [S] : V.push(S));
        } else
          J = { eventTime: J, lane: V, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, B === null ? (M = B = J, C = P) : B = B.next = J, h |= V;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null)
            break;
          V = S, S = V.next, V.next = null, c.lastBaseUpdate = V, c.shared.pending = null;
        }
      } while (!0);
      if (B === null && (C = P), c.baseState = C, c.firstBaseUpdate = M, c.lastBaseUpdate = B, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Ya |= h, n.lanes = h, n.memoizedState = P;
    }
  }
  function al(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(k(191, c));
          c.call(o);
        }
      }
  }
  var xv = new L.Component().refs;
  function Wf(n, r, l, o) {
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
  function wv(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !ro(l, o) || !ro(c, d) : !0;
  }
  function Dv(n, r, l) {
    var o = !1, c = va, d = r.contextType;
    return typeof d == "object" && d !== null ? d = zt(d) : (c = Ct(r) ? In : we.current, o = r.contextTypes, d = (o = o != null) ? Or(n, c) : va), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = zs, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function kv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && zs.enqueueReplaceState(r, r.state, null);
  }
  function Us(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = xv, If(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = zt(d) : (d = Ct(r) ? In : we.current, c.context = Or(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Wf(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && zs.enqueueReplaceState(c, c.state, null), xi(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function tu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(k(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(k(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var S = c.refs;
          S === xv && (S = c.refs = {}), h === null ? delete S[d] : S[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(k(284));
      if (!l._owner)
        throw Error(k(290, n));
    }
    return n;
  }
  function As(n, r) {
    throw n = Object.prototype.toString.call(r), Error(k(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function bv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function _v(n) {
    function r(x, T) {
      if (n) {
        var b = x.deletions;
        b === null ? (x.deletions = [T], x.flags |= 16) : b.push(T);
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
      return x = Li(x, T), x.index = 0, x.sibling = null, x;
    }
    function d(x, T, b) {
      return x.index = b, n ? (b = x.alternate, b !== null ? (b = b.index, b < T ? (x.flags |= 2, T) : b) : (x.flags |= 2, T)) : (x.flags |= 1048576, T);
    }
    function h(x) {
      return n && x.alternate === null && (x.flags |= 2), x;
    }
    function S(x, T, b, Q) {
      return T === null || T.tag !== 6 ? (T = zo(b, x.mode, Q), T.return = x, T) : (T = c(T, b), T.return = x, T);
    }
    function C(x, T, b, Q) {
      var fe = b.type;
      return fe === He ? B(x, T, b.props.children, Q, b.key) : T !== null && (T.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === Dt && bv(fe) === T.type) ? (Q = c(T, b.props), Q.ref = tu(x, T, b), Q.return = x, Q) : (Q = vc(b.type, b.key, b.props, null, x.mode, Q), Q.ref = tu(x, T, b), Q.return = x, Q);
    }
    function M(x, T, b, Q) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== b.containerInfo || T.stateNode.implementation !== b.implementation ? (T = Rl(b, x.mode, Q), T.return = x, T) : (T = c(T, b.children || []), T.return = x, T);
    }
    function B(x, T, b, Q, fe) {
      return T === null || T.tag !== 7 ? (T = Tl(b, x.mode, Q, fe), T.return = x, T) : (T = c(T, b), T.return = x, T);
    }
    function P(x, T, b) {
      if (typeof T == "string" && T !== "" || typeof T == "number")
        return T = zo("" + T, x.mode, b), T.return = x, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case ge:
            return b = vc(T.type, T.key, T.props, null, x.mode, b), b.ref = tu(x, null, T), b.return = x, b;
          case tt:
            return T = Rl(T, x.mode, b), T.return = x, T;
          case Dt:
            var Q = T._init;
            return P(x, Q(T._payload), b);
        }
        if (Yi(T) || Re(T))
          return T = Tl(T, x.mode, b, null), T.return = x, T;
        As(x, T);
      }
      return null;
    }
    function V(x, T, b, Q) {
      var fe = T !== null ? T.key : null;
      if (typeof b == "string" && b !== "" || typeof b == "number")
        return fe !== null ? null : S(x, T, "" + b, Q);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case ge:
            return b.key === fe ? C(x, T, b, Q) : null;
          case tt:
            return b.key === fe ? M(x, T, b, Q) : null;
          case Dt:
            return fe = b._init, V(
              x,
              T,
              fe(b._payload),
              Q
            );
        }
        if (Yi(b) || Re(b))
          return fe !== null ? null : B(x, T, b, Q, null);
        As(x, b);
      }
      return null;
    }
    function J(x, T, b, Q, fe) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number")
        return x = x.get(b) || null, S(T, x, "" + Q, fe);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case ge:
            return x = x.get(Q.key === null ? b : Q.key) || null, C(T, x, Q, fe);
          case tt:
            return x = x.get(Q.key === null ? b : Q.key) || null, M(T, x, Q, fe);
          case Dt:
            var oe = Q._init;
            return J(x, T, b, oe(Q._payload), fe);
        }
        if (Yi(Q) || Re(Q))
          return x = x.get(b) || null, B(T, x, Q, fe, null);
        As(T, Q);
      }
      return null;
    }
    function ue(x, T, b, Q) {
      for (var fe = null, oe = null, he = T, De = T = 0, an = null; he !== null && De < b.length; De++) {
        he.index > De ? (an = he, he = null) : an = he.sibling;
        var Xe = V(x, he, b[De], Q);
        if (Xe === null) {
          he === null && (he = an);
          break;
        }
        n && he && Xe.alternate === null && r(x, he), T = d(Xe, T, De), oe === null ? fe = Xe : oe.sibling = Xe, oe = Xe, he = an;
      }
      if (De === b.length)
        return l(x, he), mt && cr(x, De), fe;
      if (he === null) {
        for (; De < b.length; De++)
          he = P(x, b[De], Q), he !== null && (T = d(he, T, De), oe === null ? fe = he : oe.sibling = he, oe = he);
        return mt && cr(x, De), fe;
      }
      for (he = o(x, he); De < b.length; De++)
        an = J(he, x, De, b[De], Q), an !== null && (n && an.alternate !== null && he.delete(an.key === null ? De : an.key), T = d(an, T, De), oe === null ? fe = an : oe.sibling = an, oe = an);
      return n && he.forEach(function(Ni) {
        return r(x, Ni);
      }), mt && cr(x, De), fe;
    }
    function ce(x, T, b, Q) {
      var fe = Re(b);
      if (typeof fe != "function")
        throw Error(k(150));
      if (b = fe.call(b), b == null)
        throw Error(k(151));
      for (var oe = fe = null, he = T, De = T = 0, an = null, Xe = b.next(); he !== null && !Xe.done; De++, Xe = b.next()) {
        he.index > De ? (an = he, he = null) : an = he.sibling;
        var Ni = V(x, he, Xe.value, Q);
        if (Ni === null) {
          he === null && (he = an);
          break;
        }
        n && he && Ni.alternate === null && r(x, he), T = d(Ni, T, De), oe === null ? fe = Ni : oe.sibling = Ni, oe = Ni, he = an;
      }
      if (Xe.done)
        return l(
          x,
          he
        ), mt && cr(x, De), fe;
      if (he === null) {
        for (; !Xe.done; De++, Xe = b.next())
          Xe = P(x, Xe.value, Q), Xe !== null && (T = d(Xe, T, De), oe === null ? fe = Xe : oe.sibling = Xe, oe = Xe);
        return mt && cr(x, De), fe;
      }
      for (he = o(x, he); !Xe.done; De++, Xe = b.next())
        Xe = J(he, x, De, Xe.value, Q), Xe !== null && (n && Xe.alternate !== null && he.delete(Xe.key === null ? De : Xe.key), T = d(Xe, T, De), oe === null ? fe = Xe : oe.sibling = Xe, oe = Xe);
      return n && he.forEach(function(Ey) {
        return r(x, Ey);
      }), mt && cr(x, De), fe;
    }
    function Ut(x, T, b, Q) {
      if (typeof b == "object" && b !== null && b.type === He && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case ge:
            e: {
              for (var fe = b.key, oe = T; oe !== null; ) {
                if (oe.key === fe) {
                  if (fe = b.type, fe === He) {
                    if (oe.tag === 7) {
                      l(x, oe.sibling), T = c(oe, b.props.children), T.return = x, x = T;
                      break e;
                    }
                  } else if (oe.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === Dt && bv(fe) === oe.type) {
                    l(x, oe.sibling), T = c(oe, b.props), T.ref = tu(x, oe, b), T.return = x, x = T;
                    break e;
                  }
                  l(x, oe);
                  break;
                } else
                  r(x, oe);
                oe = oe.sibling;
              }
              b.type === He ? (T = Tl(b.props.children, x.mode, Q, b.key), T.return = x, x = T) : (Q = vc(b.type, b.key, b.props, null, x.mode, Q), Q.ref = tu(x, T, b), Q.return = x, x = Q);
            }
            return h(x);
          case tt:
            e: {
              for (oe = b.key; T !== null; ) {
                if (T.key === oe)
                  if (T.tag === 4 && T.stateNode.containerInfo === b.containerInfo && T.stateNode.implementation === b.implementation) {
                    l(x, T.sibling), T = c(T, b.children || []), T.return = x, x = T;
                    break e;
                  } else {
                    l(x, T);
                    break;
                  }
                else
                  r(x, T);
                T = T.sibling;
              }
              T = Rl(b, x.mode, Q), T.return = x, x = T;
            }
            return h(x);
          case Dt:
            return oe = b._init, Ut(x, T, oe(b._payload), Q);
        }
        if (Yi(b))
          return ue(x, T, b, Q);
        if (Re(b))
          return ce(x, T, b, Q);
        As(x, b);
      }
      return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, T !== null && T.tag === 6 ? (l(x, T.sibling), T = c(T, b), T.return = x, x = T) : (l(x, T), T = zo(b, x.mode, Q), T.return = x, x = T), h(x)) : l(x, T);
    }
    return Ut;
  }
  var nu = _v(!0), Ov = _v(!1), mo = {}, aa = Me(mo), yo = Me(mo), ru = Me(mo);
  function il(n) {
    if (n === mo)
      throw Error(k(174));
    return n;
  }
  function Xf(n, r) {
    switch (Je(ru, r), Je(yo, n), Je(aa, mo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Yn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Yn(r, n);
    }
    Ze(aa), Je(aa, r);
  }
  function wi() {
    Ze(aa), Ze(yo), Ze(ru);
  }
  function Ce(n) {
    il(ru.current);
    var r = il(aa.current), l = Yn(r, n.type);
    r !== l && (Je(yo, n), Je(aa, l));
  }
  function ze(n) {
    yo.current === n && (Ze(aa), Ze(yo));
  }
  var Ee = Me(0);
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
  var Fs = ve.ReactCurrentDispatcher, qf = ve.ReactCurrentBatchConfig, ll = 0, yt = null, U = null, Ye = null, Te = !1, ma = !1, pr = 0, ul = 0;
  function gt() {
    throw Error(k(321));
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
    if (ll = d, yt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Fs.current = n === null || n.memoizedState === null ? ry : ay, n = l(o, c), ma) {
      d = 0;
      do {
        if (ma = !1, pr = 0, 25 <= d)
          throw Error(k(301));
        d += 1, Ye = U = null, r.updateQueue = null, Fs.current = Zf, n = l(o, c);
      } while (ma);
    }
    if (Fs.current = ec, r = U !== null && U.next !== null, ll = 0, Ye = U = yt = null, Te = !1, r)
      throw Error(k(300));
    return n;
  }
  function sl() {
    var n = pr !== 0;
    return pr = 0, n;
  }
  function Ur() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ye === null ? yt.memoizedState = Ye = n : Ye = Ye.next = n, Ye;
  }
  function Kn() {
    if (U === null) {
      var n = yt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = U.next;
    var r = Ye === null ? yt.memoizedState : Ye.next;
    if (r !== null)
      Ye = r, U = n;
    else {
      if (n === null)
        throw Error(k(310));
      U = n, n = { memoizedState: U.memoizedState, baseState: U.baseState, baseQueue: U.baseQueue, queue: U.queue, next: null }, Ye === null ? yt.memoizedState = Ye = n : Ye = Ye.next = n;
    }
    return Ye;
  }
  function cl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function go(n) {
    var r = Kn(), l = r.queue;
    if (l === null)
      throw Error(k(311));
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
        var B = M.lane;
        if ((ll & B) === B)
          C !== null && (C = C.next = { lane: 0, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }), o = M.hasEagerState ? M.eagerState : n(o, M.action);
        else {
          var P = {
            lane: B,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          };
          C === null ? (S = C = P, h = o) : C = C.next = P, yt.lanes |= B, Ya |= B;
        }
        M = M.next;
      } while (M !== null && M !== d);
      C === null ? h = o : C.next = S, br(o, r.memoizedState) || (jt = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = C, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, yt.lanes |= d, Ya |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function So(n) {
    var r = Kn(), l = r.queue;
    if (l === null)
      throw Error(k(311));
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
    if (d && (o.memoizedState = c, jt = !0), o = o.queue, Co($s.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Ye !== null && Ye.memoizedState.tag & 1) {
      if (l.flags |= 2048, fl(9, Ps.bind(null, l, o, c, r), void 0, null), xt === null)
        throw Error(k(349));
      ll & 30 || js(l, r, c);
    }
    return c;
  }
  function js(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = yt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, yt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Ps(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Ys(r) && Qs(n);
  }
  function $s(n, r, l) {
    return l(function() {
      Ys(r) && Qs(n);
    });
  }
  function Ys(n) {
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
    if (U !== null) {
      var h = U.memoizedState;
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
    return l = l != null ? l.concat([n]) : null, ja(4, 4, Kf.bind(null, r, n), l);
  }
  function Ks() {
  }
  function iu(n, r) {
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
    return ll & 21 ? (br(l, r) || (l = us(), yt.lanes |= l, Ya |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, jt = !0), n.memoizedState = l);
  }
  function ny(n, r) {
    var l = rt;
    rt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = qf.transition;
    qf.transition = {};
    try {
      n(!1), r();
    } finally {
      rt = l, qf.transition = o;
    }
  }
  function dt() {
    return Kn().memoizedState;
  }
  function Zs(n, r, l) {
    var o = Pt(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, lu(n))
      Eo(r, l);
    else if (l = Rv(n, r, l, o), l !== null) {
      var c = wn();
      Dn(l, n, o, c), Mv(l, r, o);
    }
  }
  function Js(n, r, l) {
    var o = Pt(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (lu(n))
      Eo(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var h = r.lastRenderedState, S = d(h, l);
          if (c.hasEagerState = !0, c.eagerState = S, br(S, h)) {
            var C = r.interleaved;
            C === null ? (c.next = c, Qf(r)) : (c.next = C.next, C.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Rv(n, r, c, o), l !== null && (c = wn(), Dn(l, n, o, c), Mv(l, r, o));
    }
  }
  function lu(n) {
    var r = n.alternate;
    return n === yt || r !== null && r === yt;
  }
  function Eo(n, r) {
    ma = Te = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Mv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Iu(n, l);
    }
  }
  var ec = { readContext: zt, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, ry = { readContext: zt, useCallback: function(n, r) {
    return Ur().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: zt, useEffect: Ws, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, dl(
      4194308,
      4,
      Kf.bind(null, r, n),
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
    return n = ny.bind(null, n[1]), Ur().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = yt, c = Ur();
    if (mt) {
      if (l === void 0)
        throw Error(k(407));
      l = l();
    } else {
      if (l = r(), xt === null)
        throw Error(k(349));
      ll & 30 || js(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Ws($s.bind(
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
  }, unstable_isNewReconciler: !1 }, ay = {
    readContext: zt,
    useCallback: iu,
    useContext: zt,
    useEffect: Co,
    useImperativeHandle: au,
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
      return Zn(r, U.memoizedState, n);
    },
    useTransition: function() {
      var n = go(cl)[0], r = Kn().memoizedState;
      return [n, r];
    },
    useMutableSource: Vs,
    useSyncExternalStore: Bs,
    useId: dt,
    unstable_isNewReconciler: !1
  }, Zf = { readContext: zt, useCallback: iu, useContext: zt, useEffect: Co, useImperativeHandle: au, useInsertionEffect: Xs, useLayoutEffect: qs, useMemo: ki, useReducer: So, useRef: Gs, useState: function() {
    return So(cl);
  }, useDebugValue: Ks, useDeferredValue: function(n) {
    var r = Kn();
    return U === null ? r.memoizedState = n : Zn(r, U.memoizedState, n);
  }, useTransition: function() {
    var n = So(cl)[0], r = Kn().memoizedState;
    return [n, r];
  }, useMutableSource: Vs, useSyncExternalStore: Bs, useId: dt, unstable_isNewReconciler: !1 };
  function uu(n, r) {
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
  var iy = typeof WeakMap == "function" ? WeakMap : Map;
  function Lv(n, r, l) {
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
  function Nv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new iy();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = dy.bind(null, n, r, l), r.then(n, n));
  }
  function Jf(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function ed(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Ba(-1, 1), r.tag = 2, Ri(l, r, 1))), l.lanes |= 1), n);
  }
  var ly = ve.ReactCurrentOwner, jt = !1;
  function Gt(n, r, l, o) {
    r.child = n === null ? Ov(r, null, l, o) : nu(r, n.child, l, o);
  }
  function bi(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return G(r, c), o = Di(n, r, l, o, d, c), l = sl(), n !== null && !jt ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, sn(n, r, c)) : (mt && l && ks(r), r.flags |= 1, Gt(n, r, o, c), r.child);
  }
  function nc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Sd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Jn(n, r, d, o, c)) : (n = vc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
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
    return ou(n, r, l, o, c);
  }
  function pl(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Je(vu, vr), vr |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Je(vu, vr), vr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Je(vu, vr), vr |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Je(vu, vr), vr |= o;
    return Gt(n, r, c, l), r.child;
  }
  function Le(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function ou(n, r, l, o, c) {
    var d = Ct(l) ? In : we.current;
    return d = Or(r, d), G(r, c), l = Di(n, r, l, o, d, c), o = sl(), n !== null && !jt ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, sn(n, r, c)) : (mt && o && ks(r), r.flags |= 1, Gt(n, r, l, c), r.child);
  }
  function td(n, r, l, o, c) {
    if (Ct(l)) {
      var d = !0;
      Ds(r);
    } else
      d = !1;
    if (G(r, c), r.stateNode === null)
      Tn(n, r), Dv(r, l, o), Us(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, S = r.memoizedProps;
      h.props = S;
      var C = h.context, M = l.contextType;
      typeof M == "object" && M !== null ? M = zt(M) : (M = Ct(l) ? In : we.current, M = Or(r, M));
      var B = l.getDerivedStateFromProps, P = typeof B == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      P || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== o || C !== M) && kv(r, h, o, M), Ti = !1;
      var V = r.memoizedState;
      h.state = V, xi(r, o, h, c), C = r.memoizedState, S !== o || V !== C || Ot.current || Ti ? (typeof B == "function" && (Wf(r, l, B, o), C = r.memoizedState), (S = Ti || wv(r, l, S, o, V, C, M)) ? (P || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = C), h.props = o, h.state = C, h.context = M, o = S) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, It(n, r), S = r.memoizedProps, M = r.type === r.elementType ? S : dr(r.type, S), h.props = M, P = r.pendingProps, V = h.context, C = l.contextType, typeof C == "object" && C !== null ? C = zt(C) : (C = Ct(l) ? In : we.current, C = Or(r, C));
      var J = l.getDerivedStateFromProps;
      (B = typeof J == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== P || V !== C) && kv(r, h, o, C), Ti = !1, V = r.memoizedState, h.state = V, xi(r, o, h, c);
      var ue = r.memoizedState;
      S !== P || V !== ue || Ot.current || Ti ? (typeof J == "function" && (Wf(r, l, J, o), ue = r.memoizedState), (M = Ti || wv(r, l, M, o, V, ue, C) || !1) ? (B || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, ue, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, ue, C)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && V === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && V === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ue), h.props = o, h.state = ue, h.context = C, o = M) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && V === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && V === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return zv(n, r, l, o, d, c);
  }
  function zv(n, r, l, o, c, d) {
    Le(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h)
      return c && Sv(r, l, !1), sn(n, r, d);
    o = r.stateNode, ly.current = r;
    var S = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = nu(r, n.child, null, d), r.child = nu(r, null, S, d)) : Gt(n, r, S, d), r.memoizedState = o.state, c && Sv(r, l, !0), r.child;
  }
  function Uv(n) {
    var r = n.stateNode;
    r.pendingContext ? gi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && gi(n, r.context, !1), Xf(n, r.containerInfo);
  }
  function rc(n, r, l, o, c) {
    return Tt(), Pf(c), r.flags |= 256, Gt(n, r, l, o), r.child;
  }
  var vl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function nd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function rd(n, r, l) {
    var o = r.pendingProps, c = Ee.current, d = !1, h = (r.flags & 128) !== 0, S;
    if ((S = h) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Je(Ee, c & 1), n === null)
      return _s(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = No(h, o, 0, null), n = Tl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = nd(l), r.memoizedState = vl, n) : ad(r, h));
    if (c = n.memoizedState, c !== null && (S = c.dehydrated, S !== null))
      return uy(n, r, h, o, S, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, S = c.sibling;
      var C = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = C, r.deletions = null) : (o = Li(c, C), o.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? d = Li(S, d) : (d = Tl(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? nd(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = vl, o;
    }
    return d = n.child, n = d.sibling, o = Li(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function ad(n, r) {
    return r = No({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function su(n, r, l, o) {
    return o !== null && Pf(o), nu(r, n.child, null, l), n = ad(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function uy(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = To(Error(k(422))), su(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = No({ mode: "visible", children: o.children }, c, 0, null), d = Tl(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && nu(r, n.child, null, h), r.child.memoizedState = nd(h), r.memoizedState = vl, d);
    if (!(r.mode & 1))
      return su(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var S = o.dgst;
      return o = S, d = Error(k(419)), o = To(d, o, void 0), su(n, r, h, o);
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
      return md(), o = To(Error(k(421))), su(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = py.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, qn = ra(c.nextSibling), fr = r, mt = !0, Nr = null, n !== null && (Xn[En++] = un, Xn[En++] = Fa, Xn[En++] = Lr, un = n.id, Fa = n.overflow, Lr = r), r = ad(r, o.children), r.flags |= 4096, r);
  }
  function id(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), tn(n.return, r, l);
  }
  function ac(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function ld(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Gt(n, r, o.children, l), o = Ee.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && id(n, l, r);
            else if (n.tag === 19)
              id(n, l, r);
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
    if (Je(Ee, o), !(r.mode & 1))
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
    if (n !== null && (r.dependencies = n.dependencies), Ya |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(k(153));
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
        Uv(r), Tt();
        break;
      case 5:
        Ce(r);
        break;
      case 1:
        Ct(r.type) && Ds(r);
        break;
      case 4:
        Xf(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Je(ha, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Je(Ee, Ee.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? rd(n, r, l) : (Je(Ee, Ee.current & 1), n = sn(n, r, l), n !== null ? n.sibling : null);
        Je(Ee, Ee.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return ld(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Je(Ee, Ee.current), o)
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
          c = $n(n, c), o = $n(n, o), d = [];
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
            M !== "dangerouslySetInnerHTML" && M !== "children" && M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && M !== "autoFocus" && (Ge.hasOwnProperty(M) ? d || (d = []) : (d = d || []).push(M, null));
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
            M === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, S = S ? S.__html : void 0, C != null && S !== C && (d = d || []).push(M, C)) : M === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(M, "" + C) : M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && (Ge.hasOwnProperty(M) ? (C != null && M === "onScroll" && ft("scroll", n), d || S === C || (d = [])) : (d = d || []).push(M, C));
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
  function oy(n, r, l) {
    var o = r.pendingProps;
    switch (Bf(r), r.tag) {
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
        return o = r.stateNode, wi(), Ze(Ot), Ze(we), Hs(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Os(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Nr !== null && (Lo(Nr), Nr = null))), hl(n, r), Rn(r), null;
      case 5:
        ze(r);
        var c = il(ru.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Ar(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(k(166));
            return Rn(r), null;
          }
          if (n = il(aa.current), Os(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[pa] = r, o[nl] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                ft("cancel", o), ft("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                ft("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < uo.length; c++)
                  ft(uo[c], o);
                break;
              case "source":
                ft("error", o);
                break;
              case "img":
              case "image":
              case "link":
                ft(
                  "error",
                  o
                ), ft("load", o);
                break;
              case "details":
                ft("toggle", o);
                break;
              case "input":
                Rr(o, d), ft("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, ft("invalid", o);
                break;
              case "textarea":
                Xr(o, d), ft("invalid", o);
            }
            Sn(l, d), c = null;
            for (var h in d)
              if (d.hasOwnProperty(h)) {
                var S = d[h];
                h === "children" ? typeof S == "string" ? o.textContent !== S && (d.suppressHydrationWarning !== !0 && xs(o.textContent, S, n), c = ["children", S]) : typeof S == "number" && o.textContent !== "" + S && (d.suppressHydrationWarning !== !0 && xs(
                  o.textContent,
                  S,
                  n
                ), c = ["children", "" + S]) : Ge.hasOwnProperty(h) && S != null && h === "onScroll" && ft("scroll", o);
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
              switch (h = Yt(l, o), l) {
                case "dialog":
                  ft("cancel", n), ft("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ft("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < uo.length; c++)
                    ft(uo[c], n);
                  c = o;
                  break;
                case "source":
                  ft("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  ft(
                    "error",
                    n
                  ), ft("load", n), c = o;
                  break;
                case "details":
                  ft("toggle", n), c = o;
                  break;
                case "input":
                  Rr(n, o), c = $n(n, o), ft("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ae({}, o, { value: void 0 }), ft("invalid", n);
                  break;
                case "textarea":
                  Xr(n, o), c = Qi(n, o), ft("invalid", n);
                  break;
                default:
                  c = o;
              }
              Sn(l, c), S = c;
              for (d in S)
                if (S.hasOwnProperty(d)) {
                  var C = S[d];
                  d === "style" ? st(n, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && ju(n, C)) : d === "children" ? typeof C == "string" ? (l !== "textarea" || C !== "") && si(n, C) : typeof C == "number" && si(n, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ge.hasOwnProperty(d) ? C != null && d === "onScroll" && ft("scroll", n) : C != null && Y(n, d, C, h));
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
            throw Error(k(166));
          if (l = il(ru.current), il(aa.current), Os(r)) {
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
        if (Ze(Ee), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (mt && qn !== null && r.mode & 1 && !(r.flags & 128))
            Tv(), Tt(), r.flags |= 98560, d = !1;
          else if (d = Os(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(k(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(k(317));
              d[pa] = r;
            } else
              Tt(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Rn(r), d = !1;
          } else
            Nr !== null && (Lo(Nr), Nr = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Ee.current & 1 ? qt === 0 && (qt = 3) : md())), r.updateQueue !== null && (r.flags |= 4), Rn(r), null);
      case 4:
        return wi(), hl(n, r), n === null && Zl(r.stateNode.containerInfo), Rn(r), null;
      case 10:
        return Ei(r.type._context), Rn(r), null;
      case 17:
        return Ct(r.type) && Mr(), Rn(r), null;
      case 19:
        if (Ze(Ee), d = r.memoizedState, d === null)
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
                  return Je(Ee, Ee.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && _t() > mu && (r.flags |= 128, o = !0, wo(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = Rt(h), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), wo(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !mt)
                return Rn(r), null;
            } else
              2 * _t() - d.renderingStartTime > mu && l !== 1073741824 && (r.flags |= 128, o = !0, wo(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = _t(), r.sibling = null, l = Ee.current, Je(Ee, o ? l & 1 | 2 : l & 1), r) : (Rn(r), null);
      case 22:
      case 23:
        return hd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? vr & 1073741824 && (Rn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Rn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(k(156, r.tag));
  }
  function ud(n, r) {
    switch (Bf(r), r.tag) {
      case 1:
        return Ct(r.type) && Mr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return wi(), Ze(Ot), Ze(we), Hs(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return ze(r), null;
      case 13:
        if (Ze(Ee), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(k(340));
          Tt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Ze(Ee), null;
      case 4:
        return wi(), null;
      case 10:
        return Ei(r.type._context), null;
      case 22:
      case 23:
        return hd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Do = !1, Xt = !1, Av = typeof WeakSet == "function" ? WeakSet : Set, ie = null;
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
  function ko(n, r, l) {
    try {
      l();
    } catch (o) {
      Lt(n, r, o);
    }
  }
  var Hv = !1;
  function Fv(n, r) {
    if (Lf = Xi, n = Ss(), za(n)) {
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
            var h = 0, S = -1, C = -1, M = 0, B = 0, P = n, V = null;
            t:
              for (; ; ) {
                for (var J; P !== l || c !== 0 && P.nodeType !== 3 || (S = h + c), P !== d || o !== 0 && P.nodeType !== 3 || (C = h + o), P.nodeType === 3 && (h += P.nodeValue.length), (J = P.firstChild) !== null; )
                  V = P, P = J;
                for (; ; ) {
                  if (P === n)
                    break t;
                  if (V === l && ++M === c && (S = h), V === d && ++B === o && (C = h), (J = P.nextSibling) !== null)
                    break;
                  P = V, V = P.parentNode;
                }
                P = J;
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
            var ue = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ue !== null) {
                    var ce = ue.memoizedProps, Ut = ue.memoizedState, x = r.stateNode, T = x.getSnapshotBeforeUpdate(r.elementType === r.type ? ce : dr(r.type, ce), Ut);
                    x.__reactInternalSnapshotBeforeUpdate = T;
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
                  throw Error(k(163));
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
    return ue = Hv, Hv = !1, ue;
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
  function od(n) {
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
  function sd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, sd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[pa], delete r[nl], delete r[Uf], delete r[ty], delete r[Af])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Vv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ic(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Vv(n.return))
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
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = ws));
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
        Zr.onCommitFiberUnmount(Qu, l);
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
      l === null && (l = n.stateNode = new Av()), r.forEach(function(o) {
        var c = vy.bind(null, n, o);
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
            throw Error(k(160));
          du(d, h, c), Et = null, nn = !1;
          var C = c.alternate;
          C !== null && (C.return = null), c.return = null;
        } catch (M) {
          Lt(c, r, M);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Bv(r, n), r = r.sibling;
  }
  function Bv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ia(r, n), ga(n), o & 4) {
          try {
            bo(3, n, n.return), _o(3, n);
          } catch (ce) {
            Lt(n, n.return, ce);
          }
          try {
            bo(5, n, n.return);
          } catch (ce) {
            Lt(n, n.return, ce);
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
            si(c, "");
          } catch (ce) {
            Lt(n, n.return, ce);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, S = n.type, C = n.updateQueue;
          if (n.updateQueue = null, C !== null)
            try {
              S === "input" && d.type === "radio" && d.name != null && Wr(c, d), Yt(S, h);
              var M = Yt(S, d);
              for (h = 0; h < C.length; h += 2) {
                var B = C[h], P = C[h + 1];
                B === "style" ? st(c, P) : B === "dangerouslySetInnerHTML" ? ju(c, P) : B === "children" ? si(c, P) : Y(c, B, P, M);
              }
              switch (S) {
                case "input":
                  ur(c, d);
                  break;
                case "textarea":
                  ui(c, d);
                  break;
                case "select":
                  var V = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var J = d.value;
                  J != null ? li(c, !!d.multiple, J, !1) : V !== !!d.multiple && (d.defaultValue != null ? li(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : li(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[nl] = d;
            } catch (ce) {
              Lt(n, n.return, ce);
            }
        }
        break;
      case 6:
        if (ia(r, n), ga(n), o & 4) {
          if (n.stateNode === null)
            throw Error(k(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (ce) {
            Lt(n, n.return, ce);
          }
        }
        break;
      case 3:
        if (ia(r, n), ga(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            qu(r.containerInfo);
          } catch (ce) {
            Lt(n, n.return, ce);
          }
        break;
      case 4:
        ia(r, n), ga(n);
        break;
      case 13:
        ia(r, n), ga(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (dd = _t())), o & 4 && $a(n);
        break;
      case 22:
        if (B = l !== null && l.memoizedState !== null, n.mode & 1 ? (Xt = (M = Xt) || B, ia(r, n), Xt = M) : ia(r, n), ga(n), o & 8192) {
          if (M = n.memoizedState !== null, (n.stateNode.isHidden = M) && !B && n.mode & 1)
            for (ie = n, B = n.child; B !== null; ) {
              for (P = ie = B; ie !== null; ) {
                switch (V = ie, J = V.child, V.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    bo(4, V, V.return);
                    break;
                  case 1:
                    cu(V, V.return);
                    var ue = V.stateNode;
                    if (typeof ue.componentWillUnmount == "function") {
                      o = V, l = V.return;
                      try {
                        r = o, ue.props = r.memoizedProps, ue.state = r.memoizedState, ue.componentWillUnmount();
                      } catch (ce) {
                        Lt(o, l, ce);
                      }
                    }
                    break;
                  case 5:
                    cu(V, V.return);
                    break;
                  case 22:
                    if (V.memoizedState !== null) {
                      cd(P);
                      continue;
                    }
                }
                J !== null ? (J.return = V, ie = J) : cd(P);
              }
              B = B.sibling;
            }
          e:
            for (B = null, P = n; ; ) {
              if (P.tag === 5) {
                if (B === null) {
                  B = P;
                  try {
                    c = P.stateNode, M ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (S = P.stateNode, C = P.memoizedProps.style, h = C != null && C.hasOwnProperty("display") ? C.display : null, S.style.display = Ve("display", h));
                  } catch (ce) {
                    Lt(n, n.return, ce);
                  }
                }
              } else if (P.tag === 6) {
                if (B === null)
                  try {
                    P.stateNode.nodeValue = M ? "" : P.memoizedProps;
                  } catch (ce) {
                    Lt(n, n.return, ce);
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
                B === P && (B = null), P = P.return;
              }
              B === P && (B = null), P.sibling.return = P.return, P = P.sibling;
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
            if (Vv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(k(160));
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
            fu(n, S, h);
            break;
          default:
            throw Error(k(161));
        }
      } catch (C) {
        Lt(n, n.return, C);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function jv(n, r, l) {
    ie = n, pu(n);
  }
  function pu(n, r, l) {
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
              h = ie, C = h.child, h.tag === 22 && h.memoizedState !== null ? $v(c) : C !== null ? (C.return = h, ie = C) : $v(c);
          for (; d !== null; )
            ie = d, pu(d), d = d.sibling;
          ie = c, Do = S, Xt = M;
        }
        Pv(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, ie = d) : Pv(n);
    }
  }
  function Pv(n) {
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
                    var B = M.memoizedState;
                    if (B !== null) {
                      var P = B.dehydrated;
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
                throw Error(k(163));
            }
          Xt || r.flags & 512 && od(r);
        } catch (V) {
          Lt(r, r.return, V);
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
  function cd(n) {
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
  function $v(n) {
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
              od(r);
            } catch (C) {
              Lt(r, d, C);
            }
            break;
          case 5:
            var h = r.return;
            try {
              od(r);
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
  var lc = Math.ceil, Oo = ve.ReactCurrentDispatcher, fd = ve.ReactCurrentOwner, xn = ve.ReactCurrentBatchConfig, je = 0, xt = null, Mt = null, rn = 0, vr = 0, vu = Me(0), qt = 0, Mo = null, Ya = 0, uc = 0, hu = 0, ml = null, Mn = null, dd = 0, mu = 1 / 0, Qa = null, oc = !1, yl = null, Sa = null, _i = !1, Oi = null, sc = 0, yu = 0, cc = null, gl = -1, Sl = 0;
  function wn() {
    return je & 6 ? _t() : gl !== -1 ? gl : gl = _t();
  }
  function Pt(n) {
    return n.mode & 1 ? je & 2 && rn !== 0 ? rn & -rn : Ms.transition !== null ? (Sl === 0 && (Sl = us()), Sl) : (n = rt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : df(n.type)), n) : 1;
  }
  function Dn(n, r, l, o) {
    if (50 < yu)
      throw yu = 0, cc = null, Error(k(185));
    Wi(n, l, o), (!(je & 2) || n !== xt) && (n === xt && (!(je & 2) && (uc |= l), qt === 4 && Fr(n, rn)), kn(n, o), l === 1 && je === 0 && !(r.mode & 1) && (mu = _t() + 500, en && Gn()));
  }
  function kn(n, r) {
    var l = n.callbackNode;
    ls(n, r);
    var o = Jr(n, n === xt ? rn : 0);
    if (o === 0)
      l !== null && Op(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Op(l), r === 1)
        n.tag === 0 ? Ff(Yv.bind(null, n)) : Hf(Yv.bind(null, n)), zf(function() {
          !(je & 6) && Gn();
        }), l = null;
      else {
        switch (sf(o)) {
          case 1:
            l = Oa;
            break;
          case 4:
            l = Be;
            break;
          case 16:
            l = ci;
            break;
          case 536870912:
            l = af;
            break;
          default:
            l = ci;
        }
        l = gd(l, gu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function gu(n, r) {
    if (gl = -1, Sl = 0, je & 6)
      throw Error(k(327));
    var l = n.callbackNode;
    if (Cu() && n.callbackNode !== l)
      return null;
    var o = Jr(n, n === xt ? rn : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = dc(n, o);
    else {
      r = o;
      var c = je;
      je |= 2;
      var d = fc();
      (xt !== n || rn !== r) && (Qa = null, mu = _t() + 500, Cl(n, r));
      do
        try {
          cy();
          break;
        } catch (S) {
          Qv(n, S);
        }
      while (!0);
      Yf(), Oo.current = d, je = c, Mt !== null ? r = 0 : (xt = null, rn = 0, r = qt);
    }
    if (r !== 0) {
      if (r === 2 && (c = uf(n), c !== 0 && (o = c, r = pd(n, c))), r === 1)
        throw l = Mo, Cl(n, 0), Fr(n, o), kn(n, _t()), l;
      if (r === 6)
        Fr(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !vd(c) && (r = dc(n, o), r === 2 && (d = uf(n), d !== 0 && (o = d, r = pd(n, d))), r === 1))
          throw l = Mo, Cl(n, 0), Fr(n, o), kn(n, _t()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(k(345));
          case 2:
            El(n, Mn, Qa);
            break;
          case 3:
            if (Fr(n, o), (o & 130023424) === o && (r = dd + 500 - _t(), 10 < r)) {
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
            throw Error(k(329));
        }
      }
    }
    return kn(n, _t()), n.callbackNode === l ? gu.bind(null, n) : null;
  }
  function pd(n, r) {
    var l = ml;
    return n.current.memoizedState.isDehydrated && (Cl(n, r).flags |= 256), n = dc(n, r), n !== 2 && (r = Mn, Mn = l, r !== null && Lo(r)), n;
  }
  function Lo(n) {
    Mn === null ? Mn = n : Mn.push.apply(Mn, n);
  }
  function vd(n) {
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
    for (r &= ~hu, r &= ~uc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - wr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Yv(n) {
    if (je & 6)
      throw Error(k(327));
    Cu();
    var r = Jr(n, 0);
    if (!(r & 1))
      return kn(n, _t()), null;
    var l = dc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = uf(n);
      o !== 0 && (r = o, l = pd(n, o));
    }
    if (l === 1)
      throw l = Mo, Cl(n, 0), Fr(n, r), kn(n, _t()), l;
    if (l === 6)
      throw Error(k(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, El(n, Mn, Qa), kn(n, _t()), null;
  }
  function Su(n, r) {
    var l = je;
    je |= 1;
    try {
      return n(r);
    } finally {
      je = l, je === 0 && (mu = _t() + 500, en && Gn());
    }
  }
  function Mi(n) {
    Oi !== null && Oi.tag === 0 && !(je & 6) && Cu();
    var r = je;
    je |= 1;
    var l = xn.transition, o = rt;
    try {
      if (xn.transition = null, rt = 1, n)
        return n();
    } finally {
      rt = o, xn.transition = l, je = r, !(je & 6) && Gn();
    }
  }
  function hd() {
    vr = vu.current, Ze(vu);
  }
  function Cl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, gv(l)), Mt !== null)
      for (l = Mt.return; l !== null; ) {
        var o = l;
        switch (Bf(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && Mr();
            break;
          case 3:
            wi(), Ze(Ot), Ze(we), Hs();
            break;
          case 5:
            ze(o);
            break;
          case 4:
            wi();
            break;
          case 13:
            Ze(Ee);
            break;
          case 19:
            Ze(Ee);
            break;
          case 10:
            Ei(o.type._context);
            break;
          case 22:
          case 23:
            hd();
        }
        l = l.return;
      }
    if (xt = n, Mt = n = Li(n.current, null), rn = vr = r, qt = 0, Mo = null, hu = uc = Ya = 0, Mn = ml = null, on !== null) {
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
  function Qv(n, r) {
    do {
      var l = Mt;
      try {
        if (Yf(), Fs.current = ec, Te) {
          for (var o = yt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Te = !1;
        }
        if (ll = 0, Ye = U = yt = null, ma = !1, pr = 0, fd.current = null, l === null || l.return === null) {
          qt = 1, Mo = r, Mt = null;
          break;
        }
        e: {
          var d = n, h = l.return, S = l, C = r;
          if (r = rn, S.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var M = C, B = S, P = B.tag;
            if (!(B.mode & 1) && (P === 0 || P === 11 || P === 15)) {
              var V = B.alternate;
              V ? (B.updateQueue = V.updateQueue, B.memoizedState = V.memoizedState, B.lanes = V.lanes) : (B.updateQueue = null, B.memoizedState = null);
            }
            var J = Jf(h);
            if (J !== null) {
              J.flags &= -257, ed(J, h, S, d, r), J.mode & 1 && Nv(d, M, r), r = J, C = M;
              var ue = r.updateQueue;
              if (ue === null) {
                var ce = /* @__PURE__ */ new Set();
                ce.add(C), r.updateQueue = ce;
              } else
                ue.add(C);
              break e;
            } else {
              if (!(r & 1)) {
                Nv(d, M, r), md();
                break e;
              }
              C = Error(k(426));
            }
          } else if (mt && S.mode & 1) {
            var Ut = Jf(h);
            if (Ut !== null) {
              !(Ut.flags & 65536) && (Ut.flags |= 256), ed(Ut, h, S, d, r), Pf(uu(C, S));
              break e;
            }
          }
          d = C = uu(C, S), qt !== 4 && (qt = 2), ml === null ? ml = [d] : ml.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var x = Lv(d, C, r);
                Gf(d, x);
                break e;
              case 1:
                S = C;
                var T = d.type, b = d.stateNode;
                if (!(d.flags & 128) && (typeof T.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (Sa === null || !Sa.has(b)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var Q = Ro(d, S, r);
                  Gf(d, Q);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        yd(l);
      } catch (fe) {
        r = fe, Mt === l && l !== null && (Mt = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function fc() {
    var n = Oo.current;
    return Oo.current = ec, n === null ? ec : n;
  }
  function md() {
    (qt === 0 || qt === 3 || qt === 2) && (qt = 4), xt === null || !(Ya & 268435455) && !(uc & 268435455) || Fr(xt, rn);
  }
  function dc(n, r) {
    var l = je;
    je |= 2;
    var o = fc();
    (xt !== n || rn !== r) && (Qa = null, Cl(n, r));
    do
      try {
        sy();
        break;
      } catch (c) {
        Qv(n, c);
      }
    while (!0);
    if (Yf(), je = l, Oo.current = o, Mt !== null)
      throw Error(k(261));
    return xt = null, rn = 0, qt;
  }
  function sy() {
    for (; Mt !== null; )
      Iv(Mt);
  }
  function cy() {
    for (; Mt !== null && !Nm(); )
      Iv(Mt);
  }
  function Iv(n) {
    var r = Wv(n.alternate, n, vr);
    n.memoizedProps = n.pendingProps, r === null ? yd(n) : Mt = r, fd.current = null;
  }
  function yd(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = ud(l, r), l !== null) {
          l.flags &= 32767, Mt = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          qt = 6, Mt = null;
          return;
        }
      } else if (l = oy(l, r, vr), l !== null) {
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
    var o = rt, c = xn.transition;
    try {
      xn.transition = null, rt = 1, fy(n, r, l, o);
    } finally {
      xn.transition = c, rt = o;
    }
    return null;
  }
  function fy(n, r, l, o) {
    do
      Cu();
    while (Oi !== null);
    if (je & 6)
      throw Error(k(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(k(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Hm(n, d), n === xt && (Mt = xt = null, rn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || _i || (_i = !0, gd(ci, function() {
      return Cu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = xn.transition, xn.transition = null;
      var h = rt;
      rt = 1;
      var S = je;
      je |= 4, fd.current = null, Fv(n, l), Bv(l, n), Cs(el), Xi = !!Lf, el = Lf = null, n.current = l, jv(l), zm(), je = S, rt = h, xn.transition = d;
    } else
      n.current = l;
    if (_i && (_i = !1, Oi = n, sc = c), d = n.pendingLanes, d === 0 && (Sa = null), Lp(l.stateNode), kn(n, _t()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (oc)
      throw oc = !1, n = yl, yl = null, n;
    return sc & 1 && n.tag !== 0 && Cu(), d = n.pendingLanes, d & 1 ? n === cc ? yu++ : (yu = 0, cc = n) : yu = 0, Gn(), null;
  }
  function Cu() {
    if (Oi !== null) {
      var n = sf(sc), r = xn.transition, l = rt;
      try {
        if (xn.transition = null, rt = 16 > n ? 16 : n, Oi === null)
          var o = !1;
        else {
          if (n = Oi, Oi = null, sc = 0, je & 6)
            throw Error(k(331));
          var c = je;
          for (je |= 4, ie = n.current; ie !== null; ) {
            var d = ie, h = d.child;
            if (ie.flags & 16) {
              var S = d.deletions;
              if (S !== null) {
                for (var C = 0; C < S.length; C++) {
                  var M = S[C];
                  for (ie = M; ie !== null; ) {
                    var B = ie;
                    switch (B.tag) {
                      case 0:
                      case 11:
                      case 15:
                        bo(8, B, d);
                    }
                    var P = B.child;
                    if (P !== null)
                      P.return = B, ie = P;
                    else
                      for (; ie !== null; ) {
                        B = ie;
                        var V = B.sibling, J = B.return;
                        if (sd(B), B === M) {
                          ie = null;
                          break;
                        }
                        if (V !== null) {
                          V.return = J, ie = V;
                          break;
                        }
                        ie = J;
                      }
                  }
                }
                var ue = d.alternate;
                if (ue !== null) {
                  var ce = ue.child;
                  if (ce !== null) {
                    ue.child = null;
                    do {
                      var Ut = ce.sibling;
                      ce.sibling = null, ce = Ut;
                    } while (ce !== null);
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
                  var x = d.sibling;
                  if (x !== null) {
                    x.return = d.return, ie = x;
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
                    } catch (fe) {
                      Lt(S, S.return, fe);
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
          if (je = c, Gn(), Zr && typeof Zr.onPostCommitFiberRoot == "function")
            try {
              Zr.onPostCommitFiberRoot(Qu, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        rt = l, xn.transition = r;
      }
    }
    return !1;
  }
  function Gv(n, r, l) {
    r = uu(l, r), r = Lv(n, r, 1), n = Ri(n, r, 1), r = wn(), n !== null && (Wi(n, 1, r), kn(n, r));
  }
  function Lt(n, r, l) {
    if (n.tag === 3)
      Gv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Gv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Sa === null || !Sa.has(o))) {
            n = uu(l, n), n = Ro(r, n, 1), r = Ri(r, n, 1), n = wn(), r !== null && (Wi(r, 1, n), kn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function dy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = wn(), n.pingedLanes |= n.suspendedLanes & l, xt === n && (rn & l) === l && (qt === 4 || qt === 3 && (rn & 130023424) === rn && 500 > _t() - dd ? Cl(n, 0) : hu |= l), kn(n, r);
  }
  function pc(n, r) {
    r === 0 && (n.mode & 1 ? (r = Pl, Pl <<= 1, !(Pl & 130023424) && (Pl = 4194304)) : r = 1);
    var l = wn();
    n = Va(n, r), n !== null && (Wi(n, r, l), kn(n, l));
  }
  function py(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), pc(n, l);
  }
  function vy(n, r) {
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
        throw Error(k(314));
    }
    o !== null && o.delete(r), pc(n, l);
  }
  var Wv;
  Wv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Ot.current)
        jt = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return jt = !1, Pa(n, r, l);
        jt = !!(n.flags & 131072);
      }
    else
      jt = !1, mt && r.flags & 1048576 && Vf(r, eu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Tn(n, r), n = r.pendingProps;
        var c = Or(r, we.current);
        G(r, l), c = Di(null, r, o, n, c, l);
        var d = sl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Ct(o) ? (d = !0, Ds(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, If(r), c.updater = zs, r.stateNode = c, c._reactInternals = r, Us(r, o, n, l), r = zv(null, r, o, !0, d, l)) : (r.tag = 0, mt && d && ks(r), Gt(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Tn(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = my(o), n = dr(o, n), c) {
            case 0:
              r = ou(null, r, o, n, l);
              break e;
            case 1:
              r = td(null, r, o, n, l);
              break e;
            case 11:
              r = bi(null, r, o, n, l);
              break e;
            case 14:
              r = nc(null, r, o, dr(o.type, n), l);
              break e;
          }
          throw Error(k(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : dr(o, c), ou(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : dr(o, c), td(n, r, o, c, l);
      case 3:
        e: {
          if (Uv(r), n === null)
            throw Error(k(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, It(n, r), xi(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = uu(Error(k(423)), r), r = rc(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = uu(Error(k(424)), r), r = rc(n, r, o, l, c);
              break e;
            } else
              for (qn = ra(r.stateNode.containerInfo.firstChild), fr = r, mt = !0, Nr = null, l = Ov(r, null, o, l), r.child = l; l; )
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
        return Ce(r), n === null && _s(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, co(o, c) ? h = null : d !== null && co(o, d) && (r.flags |= 32), Le(n, r), Gt(n, r, h, l), r.child;
      case 6:
        return n === null && _s(r), null;
      case 13:
        return rd(n, r, l);
      case 4:
        return Xf(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = nu(r, null, o, l) : Gt(n, r, o, l), r.child;
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
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, Je(ha, o._currentValue), o._currentValue = h, d !== null)
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
                          var B = M.pending;
                          B === null ? C.next = C : (C.next = B.next, B.next = C), M.pending = C;
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
                    throw Error(k(341));
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
        return c = r.type, o = r.pendingProps.children, G(r, l), c = zt(c), o = o(c), r.flags |= 1, Gt(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = dr(o, r.pendingProps), c = dr(o.type, c), nc(n, r, o, c, l);
      case 15:
        return Jn(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : dr(o, c), Tn(n, r), r.tag = 1, Ct(o) ? (n = !0, Ds(r)) : n = !1, G(r, l), Dv(r, o, c), Us(r, o, c, l), zv(null, r, o, !0, n, l);
      case 19:
        return ld(n, r, l);
      case 22:
        return pl(n, r, l);
    }
    throw Error(k(156, r.tag));
  };
  function gd(n, r) {
    return rf(n, r);
  }
  function hy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Vr(n, r, l, o) {
    return new hy(n, r, l, o);
  }
  function Sd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function my(n) {
    if (typeof n == "function")
      return Sd(n) ? 1 : 0;
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
      Sd(n) && (h = 1);
    else if (typeof n == "string")
      h = 5;
    else
      e:
        switch (n) {
          case He:
            return Tl(l.children, c, d, r);
          case bn:
            h = 8, c |= 8;
            break;
          case ir:
            return n = Vr(12, l, r, c | 2), n.elementType = ir, n.lanes = d, n;
          case $e:
            return n = Vr(13, l, r, c), n.elementType = $e, n.lanes = d, n;
          case at:
            return n = Vr(19, l, r, c), n.elementType = at, n.lanes = d, n;
          case Er:
            return No(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Ht:
                  h = 10;
                  break e;
                case pt:
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
            throw Error(k(130, n == null ? n : typeof n, ""));
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
  function yy(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = of(0), this.expirationTimes = of(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = of(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function hc(n, r, l, o, c, d, h, S, C) {
    return n = new yy(n, r, l, S, C), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Vr(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, If(d), n;
  }
  function Xv(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: tt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Cd(n) {
    if (!n)
      return va;
    n = n._reactInternals;
    e: {
      if (da(n) !== n || n.tag !== 1)
        throw Error(k(170));
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
      throw Error(k(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Ct(l))
        return vo(n, l, r);
    }
    return r;
  }
  function qv(n, r, l, o, c, d, h, S, C) {
    return n = hc(l, o, !0, n, c, d, h, S, C), n.context = Cd(null), l = n.current, o = wn(), c = Pt(l), d = Ba(o, c), d.callback = r ?? null, Ri(l, d, c), n.current.lanes = c, Wi(n, c, o), kn(n, o), n;
  }
  function Uo(n, r, l, o) {
    var c = r.current, d = wn(), h = Pt(c);
    return l = Cd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Ba(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ri(c, r, h), n !== null && (Dn(n, c, h, d), Ns(n, c, h)), h;
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
  function Kv(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Ed(n, r) {
    Kv(n, r), (n = n.alternate) && Kv(n, r);
  }
  function Zv() {
    return null;
  }
  var Td = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function yc(n) {
    this._internalRoot = n;
  }
  Ia.prototype.render = yc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(k(409));
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
      var r = Ap();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < lt.length && r !== 0 && r < lt[l].priority; l++)
        ;
      lt.splice(l, 0, n), l === 0 && Hp(n);
    }
  };
  function Rd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function gc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Jv() {
  }
  function gy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var M = mc(h);
          d.call(M);
        };
      }
      var h = qv(r, o, n, 0, null, !1, !1, "", Jv);
      return n._reactRootContainer = h, n[Ha] = h.current, Zl(n.nodeType === 8 ? n.parentNode : n), Mi(), h;
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
    var C = hc(n, 0, !1, null, null, !1, !1, "", Jv);
    return n._reactRootContainer = C, n[Ha] = C.current, Zl(n.nodeType === 8 ? n.parentNode : n), Mi(function() {
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
      h = gy(l, r, n, c, o);
    return mc(h);
  }
  Up = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Gi(r.pendingLanes);
          l !== 0 && (Iu(r, l | 1), kn(r, _t()), !(je & 6) && (mu = _t() + 500, Gn()));
        }
        break;
      case 13:
        Mi(function() {
          var o = Va(n, 1);
          if (o !== null) {
            var c = wn();
            Dn(o, n, 1, c);
          }
        }), Ed(n, 1);
    }
  }, os = function(n) {
    if (n.tag === 13) {
      var r = Va(n, 134217728);
      if (r !== null) {
        var l = wn();
        Dn(r, n, 134217728, l);
      }
      Ed(n, 134217728);
    }
  }, ct = function(n) {
    if (n.tag === 13) {
      var r = Pt(n), l = Va(n, r);
      if (l !== null) {
        var o = wn();
        Dn(l, n, r, o);
      }
      Ed(n, r);
    }
  }, Ap = function() {
    return rt;
  }, cf = function(n, r) {
    var l = rt;
    try {
      return rt = n, r();
    } finally {
      rt = l;
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
              var c = me(o);
              if (!c)
                throw Error(k(90));
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
  }, Dp = Su, kp = Mi;
  var Sy = { usingClientEntryPoint: !1, Events: [po, Jl, me, ts, ns, Su] }, Eu = { findFiberByHostInstance: _r, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Cy = { bundleType: Eu.bundleType, version: Eu.version, rendererPackageName: Eu.rendererPackageName, rendererConfig: Eu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ve.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = bp(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Eu.findFiberByHostInstance || Zv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cc.isDisabled && Cc.supportsFiber)
      try {
        Qu = Cc.inject(Cy), Zr = Cc;
      } catch {
      }
  }
  return Ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sy, Ir.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Rd(r))
      throw Error(k(200));
    return Xv(n, r, null, l);
  }, Ir.createRoot = function(n, r) {
    if (!Rd(n))
      throw Error(k(299));
    var l = !1, o = "", c = Td;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = hc(n, 1, !1, null, null, l, !1, o, c), n[Ha] = r.current, Zl(n.nodeType === 8 ? n.parentNode : n), new yc(r);
  }, Ir.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(k(188)) : (n = Object.keys(n).join(","), Error(k(268, n)));
    return n = bp(r), n = n === null ? null : n.stateNode, n;
  }, Ir.flushSync = function(n) {
    return Mi(n);
  }, Ir.hydrate = function(n, r, l) {
    if (!gc(r))
      throw Error(k(200));
    return Sc(null, n, r, !0, l);
  }, Ir.hydrateRoot = function(n, r, l) {
    if (!Rd(n))
      throw Error(k(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = Td;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = qv(r, null, n, 1, l ?? null, c, !1, d, h), n[Ha] = r.current, Zl(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Ia(r);
  }, Ir.render = function(n, r, l) {
    if (!gc(r))
      throw Error(k(200));
    return Sc(null, n, r, !1, l);
  }, Ir.unmountComponentAtNode = function(n) {
    if (!gc(n))
      throw Error(k(40));
    return n._reactRootContainer ? (Mi(function() {
      Sc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ha] = null;
      });
    }), !0) : !1;
  }, Ir.unstable_batchedUpdates = Su, Ir.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!gc(l))
      throw Error(k(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(k(38));
    return Sc(n, r, l, !1, o);
  }, Ir.version = "18.2.0-next-9e3b772b8-20220608", Ir;
}
function rT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rT);
    } catch (L) {
      console.error(L);
    }
  }
}
process.env.NODE_ENV === "production" ? (rT(), m0.exports = ab()) : m0.exports = rb();
var ib = m0.exports;
const Om = Symbol(), lb = Symbol(), aT = typeof window > "u" || /ServerSideRendering/.test(window.navigator && window.navigator.userAgent) ? qk : Kk, ub = Ep.unstable_runWithPriority ? (L) => Ep.unstable_runWithPriority(Ep.unstable_NormalPriority, L) : (L) => L(), ob = (L) => L;
function iT(L) {
  const I = Gk({ [Om]: { v: { current: L }, n: { current: -1 }, l: /* @__PURE__ */ new Set(), u: (Ue) => Ue() } });
  var k;
  return I[lb] = I.Provider, I.Provider = (k = I.Provider, ({ value: Ue, children: Ge }) => {
    const Ne = d0(Ue), g = d0(0), [vt, de] = Wk(null);
    vt && (vt(Ue), de(null));
    const K = d0();
    if (!K.current) {
      const Ae = /* @__PURE__ */ new Set(), H = (j, te) => {
        ib.unstable_batchedUpdates(() => {
          g.current += 1;
          const ke = { n: g.current };
          te != null && te.suspense && (ke.n *= -1, ke.p = new Promise((Fe) => {
            de(() => (We) => {
              ke.v = We, delete ke.p, Fe(We);
            });
          })), Ae.forEach((Fe) => Fe(ke)), j();
        });
      };
      K.current = { [Om]: { v: Ne, n: g, l: Ae, u: H } };
    }
    return aT(() => {
      Ne.current = Ue, g.current += 1, ub(() => {
        K.current[Om].l.forEach((Ae) => {
          Ae({ n: g.current, v: Ue });
        });
      });
    }, [Ue]), Xk(k, { value: K.current }, Ge);
  }), delete I.Consumer, I;
}
function Kc(L, I) {
  const k = Zk(L)[Om];
  if (typeof process == "object" && process.env.NODE_ENV !== "production" && !k)
    throw new Error("useContextSelector requires special context");
  const { v: { current: Ue }, n: { current: Ge }, l: Ne } = k, g = I(Ue), [vt, de] = Jk((K, Ae) => {
    if (!Ae)
      return [Ue, g];
    if ("p" in Ae)
      throw Ae.p;
    if (Ae.n === Ge)
      return Object.is(K[1], g) ? K : [Ue, g];
    try {
      if ("v" in Ae) {
        if (Object.is(K[0], Ae.v))
          return K;
        const H = I(Ae.v);
        return Object.is(K[1], H) ? K : [Ae.v, H];
      }
    } catch {
    }
    return [...K];
  }, [Ue, g]);
  return Object.is(vt[1], g) || de(), aT(() => (Ne.add(de), () => {
    Ne.delete(de);
  }), [Ne]), vt[1];
}
function Zc(L) {
  return Kc(L, ob);
}
const sb = {
  changed: {},
  errors: {},
  initialValues: {},
  isValid: !0,
  isValidating: !1,
  lastAction: "init",
  submitted: 0,
  touched: {},
  values: {}
}, Jc = iT(sb), xp = iT(() => {
});
function cb(L) {
  const I = Al((H) => {
    var j;
    return !!((j = H.changed) != null && j[L]);
  }), k = Al(
    (H) => {
      var j;
      return (j = H.disabledFields) != null && j[L] ? !!H.disabledFields[L] : !!H.disabled;
    }
  ), Ue = Al(
    (H) => {
      var j, te;
      return H.submitted > 0 || (j = H.touched) != null && j[L] ? (te = H.errors) == null ? void 0 : te[L] : void 0;
    }
  ), Ge = Al((H) => {
    var j;
    return (j = H.initialValues) == null ? void 0 : j[L];
  }), Ne = !1, g = Al((H) => (H == null ? void 0 : H.submitted) > 0 || !!(H != null && H.touched[L])), vt = Al((H) => Lm.get(H.values, L)), de = fb(L), K = db(L), Ae = pb(L);
  return Mm(
    () => ({
      error: Ue,
      initialValue: Ge,
      isChanged: I,
      isDisabled: k,
      isRequired: Ne,
      isTouched: g,
      name: L,
      onBlur: () => K(),
      onChange: de,
      setError: Ae,
      setValue: de,
      value: vt
    }),
    [
      I,
      k,
      Ue,
      Ge,
      Ne,
      L,
      Ae,
      K,
      de,
      g,
      vt
    ]
  );
}
function Rb(L) {
  return Kc(Jc, (I) => Lm.get(I.values, L));
}
function xb(L) {
  return Kc(Jc, (I) => I.errors[L]);
}
function wb(L) {
  return Kc(Jc, (I) => !!I.touched[L]);
}
function fb(L) {
  const I = Zc(xp);
  return Rp((k) => I({ name: L, type: "setValue", value: k }), [I, L]);
}
function Db() {
  const L = Zc(xp);
  return Rp((I) => L({ type: "setValues", values: I }), [L]);
}
function db(L) {
  const I = Zc(xp);
  return Rp(
    (k = !0) => I({ name: L, touched: k, type: "setTouched" }),
    [I, L]
  );
}
function pb(L) {
  const I = Zc(xp);
  return Rp(
    (k) => I({ error: k, name: L, type: "setError" }),
    [I, L]
  );
}
function Al(L) {
  return Kc(Jc, L);
}
function vb() {
  return Zc(Jc);
}
function lT() {
  return Zc(xp) || (() => {
  });
}
function hb() {
  const L = lT();
  return Rp(() => {
    L({ type: "startSubmit" });
  }, [L]);
}
function kb() {
  const L = Kc(Jc, (k) => !!k.isSubmitting), I = hb();
  return Mm(() => [L, I], [I, L]);
}
function mb({ children: L, name: I }) {
  const k = cb(I);
  return /* @__PURE__ */ es(Tp, { children: L(k) });
}
function bb({ children: L, name: I }) {
  const k = Al((Ue) => Lm.get(Ue.values, I));
  return Mm(() => /* @__PURE__ */ es(Tp, { children: L(k) }), [L, k]);
}
const yb = ({ name: L, render: I }) => {
  const k = Al((Ue) => {
    const Ge = Lm.get(Ue.values, L);
    return (Ge && Array.isArray(Ge) ? Ge : []).length;
  });
  return Mm(
    () => I(
      k,
      Array.from(Array(k)).map((Ue, Ge) => Ge)
    ),
    [k, I]
  );
}, _b = ({ name: L, render: I }) => /* @__PURE__ */ es(
  yb,
  {
    name: L,
    render: (k, Ue) => Ue.map((Ge) => /* @__PURE__ */ es(mb, { name: `${L}.${Ge}`, children: (Ne) => I({ item: Ne.value, name: `${L}.${Ge}` }) }, `${L}.${Ge}`))
  }
);
function Ob({
  children: L
}) {
  const I = vb();
  return /* @__PURE__ */ es(Tp, { children: L && L(I) || null });
}
function Mb({
  children: L
}) {
  const I = lT();
  return /* @__PURE__ */ es(Tp, { children: L(I) });
}
const Lb = ({
  children: L,
  condition: I
}) => Al(I) ? /* @__PURE__ */ es(Tp, { children: L }) : null;
export {
  _b as ArrayFieldRenderer,
  yb as FieldArrayLengthConsumer,
  mb as FieldConsumer,
  bb as FieldValueConsumer,
  Mb as FormDispatchConsumer,
  Ob as FormStateConsumer,
  Lb as FormStateRender,
  cb as useField,
  xb as useFieldError,
  wb as useFieldTouched,
  Rb as useFieldValue,
  lT as useFormDispatch,
  Al as useFormSelect,
  vb as useFormState,
  hb as useFormSubmit,
  pb as useSetFieldError,
  fb as useSetFieldValue,
  db as useSetSetFieldTouched,
  Db as useSetValues,
  kb as useSubmitButton
};
