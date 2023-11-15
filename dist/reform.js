import { jsx as fk, Fragment as dk } from "react/jsx-runtime";
import pT, { createContext as pk, useRef as v0, useState as vk, createElement as hk, useEffect as mk, useLayoutEffect as yk, useContext as gk, useReducer as Sk } from "react";
var Ek = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ck = { exports: {} };
(function(T) {
  (function(g, h) {
    T.exports = h();
  })(Ek, function() {
    var g = Object.prototype.toString;
    function h($, Y) {
      return $ == null ? !1 : Object.prototype.hasOwnProperty.call($, Y);
    }
    function D($) {
      if (!$ || S($) && $.length === 0)
        return !0;
      if (typeof $ != "string") {
        for (var Y in $)
          if (h($, Y))
            return !1;
        return !0;
      }
      return !1;
    }
    function M($) {
      return g.call($);
    }
    function V($) {
      return typeof $ == "object" && M($) === "[object Object]";
    }
    var S = Array.isArray || function($) {
      return g.call($) === "[object Array]";
    };
    function J($) {
      return typeof $ == "boolean" || M($) === "[object Boolean]";
    }
    function G($) {
      var Y = parseInt($);
      return Y.toString() === $ ? Y : $;
    }
    function P($) {
      $ = $ || {};
      var Y = function(se) {
        return Object.keys(Y).reduce(function(B, q) {
          return q === "create" || typeof Y[q] == "function" && (B[q] = Y[q].bind(Y, se)), B;
        }, {});
      }, Z;
      $.includeInheritedProps ? Z = function() {
        return !0;
      } : Z = function(se, B) {
        return typeof B == "number" && Array.isArray(se) || h(se, B);
      };
      function xe(se, B) {
        if (Z(se, B))
          return se[B];
      }
      var Me;
      $.includeInheritedProps ? Me = function(se, B) {
        typeof B != "string" && typeof B != "number" && (B = String(B));
        var q = xe(se, B);
        if (B === "__proto__" || B === "prototype" || B === "constructor" && typeof q == "function")
          throw new Error("For security reasons, object's magic properties cannot be set");
        return q;
      } : Me = function(se, B) {
        return xe(se, B);
      };
      function Pe(se, B, q, ye) {
        if (typeof B == "number" && (B = [B]), !B || B.length === 0)
          return se;
        if (typeof B == "string")
          return Pe(se, B.split(".").map(G), q, ye);
        var Ee = B[0], Ke = Me(se, Ee);
        return B.length === 1 ? ((Ke === void 0 || !ye) && (se[Ee] = q), Ke) : (Ke === void 0 && (typeof B[1] == "number" ? se[Ee] = [] : se[Ee] = {}), Pe(se[Ee], B.slice(1), q, ye));
      }
      return Y.has = function(se, B) {
        if (typeof B == "number" ? B = [B] : typeof B == "string" && (B = B.split(".")), !B || B.length === 0)
          return !!se;
        for (var q = 0; q < B.length; q++) {
          var ye = G(B[q]);
          if (typeof ye == "number" && S(se) && ye < se.length || ($.includeInheritedProps ? ye in Object(se) : h(se, ye)))
            se = se[ye];
          else
            return !1;
        }
        return !0;
      }, Y.ensureExists = function(se, B, q) {
        return Pe(se, B, q, !0);
      }, Y.set = function(se, B, q, ye) {
        return Pe(se, B, q, ye);
      }, Y.insert = function(se, B, q, ye) {
        var Ee = Y.get(se, B);
        ye = ~~ye, S(Ee) || (Ee = [], Y.set(se, B, Ee)), Ee.splice(ye, 0, q);
      }, Y.empty = function(se, B) {
        if (!D(B) && se != null) {
          var q, ye;
          if (q = Y.get(se, B)) {
            if (typeof q == "string")
              return Y.set(se, B, "");
            if (J(q))
              return Y.set(se, B, !1);
            if (typeof q == "number")
              return Y.set(se, B, 0);
            if (S(q))
              q.length = 0;
            else if (V(q))
              for (ye in q)
                Z(q, ye) && delete q[ye];
            else
              return Y.set(se, B, null);
          }
        }
      }, Y.push = function(se, B) {
        var q = Y.get(se, B);
        S(q) || (q = [], Y.set(se, B, q)), q.push.apply(q, Array.prototype.slice.call(arguments, 2));
      }, Y.coalesce = function(se, B, q) {
        for (var ye, Ee = 0, Ke = B.length; Ee < Ke; Ee++)
          if ((ye = Y.get(se, B[Ee])) !== void 0)
            return ye;
        return q;
      }, Y.get = function(se, B, q) {
        if (typeof B == "number" && (B = [B]), !B || B.length === 0)
          return se;
        if (se == null)
          return q;
        if (typeof B == "string")
          return Y.get(se, B.split("."), q);
        var ye = G(B[0]), Ee = Me(se, ye);
        return Ee === void 0 ? q : B.length === 1 ? Ee : Y.get(se[ye], B.slice(1), q);
      }, Y.del = function(B, q) {
        if (typeof q == "number" && (q = [q]), B == null || D(q))
          return B;
        if (typeof q == "string")
          return Y.del(B, q.split("."));
        var ye = G(q[0]);
        if (Me(B, ye), !Z(B, ye))
          return B;
        if (q.length === 1)
          S(B) ? B.splice(ye, 1) : delete B[ye];
        else
          return Y.del(B[ye], q.slice(1));
        return B;
      }, Y;
    }
    var de = P();
    return de.create = P, de.withInheritedProps = P({ includeInheritedProps: !0 }), de;
  });
})(Ck);
var g0 = { exports: {} }, h0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iT;
function Tk() {
  return iT || (iT = 1, function(T) {
    function g(ne, _e) {
      var ce = ne.length;
      ne.push(_e);
      e:
        for (; 0 < ce; ) {
          var it = ce - 1 >>> 1, ut = ne[it];
          if (0 < M(ut, _e))
            ne[it] = _e, ne[ce] = ut, ce = it;
          else
            break e;
        }
    }
    function h(ne) {
      return ne.length === 0 ? null : ne[0];
    }
    function D(ne) {
      if (ne.length === 0)
        return null;
      var _e = ne[0], ce = ne.pop();
      if (ce !== _e) {
        ne[0] = ce;
        e:
          for (var it = 0, ut = ne.length, Yn = ut >>> 1; it < Yn; ) {
            var ur = 2 * (it + 1) - 1, ii = ne[ur], Nn = ur + 1, li = ne[Nn];
            if (0 > M(ii, ce))
              Nn < ut && 0 > M(li, ii) ? (ne[it] = li, ne[Nn] = ce, it = Nn) : (ne[it] = ii, ne[ur] = ce, it = ur);
            else if (Nn < ut && 0 > M(li, ce))
              ne[it] = li, ne[Nn] = ce, it = Nn;
            else
              break e;
          }
      }
      return _e;
    }
    function M(ne, _e) {
      var ce = ne.sortIndex - _e.sortIndex;
      return ce !== 0 ? ce : ne.id - _e.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var V = performance;
      T.unstable_now = function() {
        return V.now();
      };
    } else {
      var S = Date, J = S.now();
      T.unstable_now = function() {
        return S.now() - J;
      };
    }
    var G = [], P = [], de = 1, $ = null, Y = 3, Z = !1, xe = !1, Me = !1, Pe = typeof setTimeout == "function" ? setTimeout : null, se = typeof clearTimeout == "function" ? clearTimeout : null, B = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function q(ne) {
      for (var _e = h(P); _e !== null; ) {
        if (_e.callback === null)
          D(P);
        else if (_e.startTime <= ne)
          D(P), _e.sortIndex = _e.expirationTime, g(G, _e);
        else
          break;
        _e = h(P);
      }
    }
    function ye(ne) {
      if (Me = !1, q(ne), !xe)
        if (h(G) !== null)
          xe = !0, Dt(Ee);
        else {
          var _e = h(P);
          _e !== null && Cr(ye, _e.startTime - ne);
        }
    }
    function Ee(ne, _e) {
      xe = !1, Me && (Me = !1, se(En), En = -1), Z = !0;
      var ce = Y;
      try {
        for (q(_e), $ = h(G); $ !== null && (!($.expirationTime > _e) || ne && !ze()); ) {
          var it = $.callback;
          if (typeof it == "function") {
            $.callback = null, Y = $.priorityLevel;
            var ut = it($.expirationTime <= _e);
            _e = T.unstable_now(), typeof ut == "function" ? $.callback = ut : $ === h(G) && D(G), q(_e);
          } else
            D(G);
          $ = h(G);
        }
        if ($ !== null)
          var Yn = !0;
        else {
          var ur = h(P);
          ur !== null && Cr(ye, ur.startTime - _e), Yn = !1;
        }
        return Yn;
      } finally {
        $ = null, Y = ce, Z = !1;
      }
    }
    var Ke = !1, Be = null, En = -1, Zt = 5, Tt = -1;
    function ze() {
      return !(T.unstable_now() - Tt < Zt);
    }
    function on() {
      if (Be !== null) {
        var ne = T.unstable_now();
        Tt = ne;
        var _e = !0;
        try {
          _e = Be(!0, ne);
        } finally {
          _e ? je() : (Ke = !1, Be = null);
        }
      } else
        Ke = !1;
    }
    var je;
    if (typeof B == "function")
      je = function() {
        B(on);
      };
    else if (typeof MessageChannel < "u") {
      var tt = new MessageChannel(), Mn = tt.port2;
      tt.port1.onmessage = on, je = function() {
        Mn.postMessage(null);
      };
    } else
      je = function() {
        Pe(on, 0);
      };
    function Dt(ne) {
      Be = ne, Ke || (Ke = !0, je());
    }
    function Cr(ne, _e) {
      En = Pe(function() {
        ne(T.unstable_now());
      }, _e);
    }
    T.unstable_IdlePriority = 5, T.unstable_ImmediatePriority = 1, T.unstable_LowPriority = 4, T.unstable_NormalPriority = 3, T.unstable_Profiling = null, T.unstable_UserBlockingPriority = 2, T.unstable_cancelCallback = function(ne) {
      ne.callback = null;
    }, T.unstable_continueExecution = function() {
      xe || Z || (xe = !0, Dt(Ee));
    }, T.unstable_forceFrameRate = function(ne) {
      0 > ne || 125 < ne ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Zt = 0 < ne ? Math.floor(1e3 / ne) : 5;
    }, T.unstable_getCurrentPriorityLevel = function() {
      return Y;
    }, T.unstable_getFirstCallbackNode = function() {
      return h(G);
    }, T.unstable_next = function(ne) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
          var _e = 3;
          break;
        default:
          _e = Y;
      }
      var ce = Y;
      Y = _e;
      try {
        return ne();
      } finally {
        Y = ce;
      }
    }, T.unstable_pauseExecution = function() {
    }, T.unstable_requestPaint = function() {
    }, T.unstable_runWithPriority = function(ne, _e) {
      switch (ne) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ne = 3;
      }
      var ce = Y;
      Y = ne;
      try {
        return _e();
      } finally {
        Y = ce;
      }
    }, T.unstable_scheduleCallback = function(ne, _e, ce) {
      var it = T.unstable_now();
      switch (typeof ce == "object" && ce !== null ? (ce = ce.delay, ce = typeof ce == "number" && 0 < ce ? it + ce : it) : ce = it, ne) {
        case 1:
          var ut = -1;
          break;
        case 2:
          ut = 250;
          break;
        case 5:
          ut = 1073741823;
          break;
        case 4:
          ut = 1e4;
          break;
        default:
          ut = 5e3;
      }
      return ut = ce + ut, ne = { id: de++, callback: _e, priorityLevel: ne, startTime: ce, expirationTime: ut, sortIndex: -1 }, ce > it ? (ne.sortIndex = ce, g(P, ne), h(G) === null && ne === h(P) && (Me ? (se(En), En = -1) : Me = !0, Cr(ye, ce - it))) : (ne.sortIndex = ut, g(G, ne), xe || Z || (xe = !0, Dt(Ee))), ne;
    }, T.unstable_shouldYield = ze, T.unstable_wrapCallback = function(ne) {
      var _e = Y;
      return function() {
        var ce = Y;
        Y = _e;
        try {
          return ne.apply(this, arguments);
        } finally {
          Y = ce;
        }
      };
    };
  }(h0)), h0;
}
var m0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lT;
function xk() {
  return lT || (lT = 1, function(T) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var g = !1, h = !1, D = 5;
      function M(re, we) {
        var Ye = re.length;
        re.push(we), J(re, we, Ye);
      }
      function V(re) {
        return re.length === 0 ? null : re[0];
      }
      function S(re) {
        if (re.length === 0)
          return null;
        var we = re[0], Ye = re.pop();
        return Ye !== we && (re[0] = Ye, G(re, Ye, 0)), we;
      }
      function J(re, we, Ye) {
        for (var ft = Ye; ft > 0; ) {
          var zt = ft - 1 >>> 1, Tn = re[zt];
          if (P(Tn, we) > 0)
            re[zt] = we, re[ft] = Tn, ft = zt;
          else
            return;
        }
      }
      function G(re, we, Ye) {
        for (var ft = Ye, zt = re.length, Tn = zt >>> 1; ft < Tn; ) {
          var Yt = (ft + 1) * 2 - 1, Rr = re[Yt], kt = Yt + 1, da = re[kt];
          if (P(Rr, we) < 0)
            kt < zt && P(da, Rr) < 0 ? (re[ft] = da, re[kt] = we, ft = kt) : (re[ft] = Rr, re[Yt] = we, ft = Yt);
          else if (kt < zt && P(da, we) < 0)
            re[ft] = da, re[kt] = we, ft = kt;
          else
            return;
        }
      }
      function P(re, we) {
        var Ye = re.sortIndex - we.sortIndex;
        return Ye !== 0 ? Ye : re.id - we.id;
      }
      var de = 1, $ = 2, Y = 3, Z = 4, xe = 5;
      function Me(re, we) {
      }
      var Pe = typeof performance == "object" && typeof performance.now == "function";
      if (Pe) {
        var se = performance;
        T.unstable_now = function() {
          return se.now();
        };
      } else {
        var B = Date, q = B.now();
        T.unstable_now = function() {
          return B.now() - q;
        };
      }
      var ye = 1073741823, Ee = -1, Ke = 250, Be = 5e3, En = 1e4, Zt = ye, Tt = [], ze = [], on = 1, je = null, tt = Y, Mn = !1, Dt = !1, Cr = !1, ne = typeof setTimeout == "function" ? setTimeout : null, _e = typeof clearTimeout == "function" ? clearTimeout : null, ce = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function it(re) {
        for (var we = V(ze); we !== null; ) {
          if (we.callback === null)
            S(ze);
          else if (we.startTime <= re)
            S(ze), we.sortIndex = we.expirationTime, M(Tt, we);
          else
            return;
          we = V(ze);
        }
      }
      function ut(re) {
        if (Cr = !1, it(re), !Dt)
          if (V(Tt) !== null)
            Dt = !0, si(Yn);
          else {
            var we = V(ze);
            we !== null && In(ut, we.startTime - re);
          }
      }
      function Yn(re, we) {
        Dt = !1, Cr && (Cr = !1, Kr()), Mn = !0;
        var Ye = tt;
        try {
          var ft;
          if (!h)
            return ur(re, we);
        } finally {
          je = null, tt = Ye, Mn = !1;
        }
      }
      function ur(re, we) {
        var Ye = we;
        for (it(Ye), je = V(Tt); je !== null && !g && !(je.expirationTime > Ye && (!re || Vl())); ) {
          var ft = je.callback;
          if (typeof ft == "function") {
            je.callback = null, tt = je.priorityLevel;
            var zt = je.expirationTime <= Ye, Tn = ft(zt);
            Ye = T.unstable_now(), typeof Tn == "function" ? je.callback = Tn : je === V(Tt) && S(Tt), it(Ye);
          } else
            S(Tt);
          je = V(Tt);
        }
        if (je !== null)
          return !0;
        var Yt = V(ze);
        return Yt !== null && In(ut, Yt.startTime - Ye), !1;
      }
      function ii(re, we) {
        switch (re) {
          case de:
          case $:
          case Y:
          case Z:
          case xe:
            break;
          default:
            re = Y;
        }
        var Ye = tt;
        tt = re;
        try {
          return we();
        } finally {
          tt = Ye;
        }
      }
      function Nn(re) {
        var we;
        switch (tt) {
          case de:
          case $:
          case Y:
            we = Y;
            break;
          default:
            we = tt;
            break;
        }
        var Ye = tt;
        tt = we;
        try {
          return re();
        } finally {
          tt = Ye;
        }
      }
      function li(re) {
        var we = tt;
        return function() {
          var Ye = tt;
          tt = we;
          try {
            return re.apply(this, arguments);
          } finally {
            tt = Ye;
          }
        };
      }
      function Xr(re, we, Ye) {
        var ft = T.unstable_now(), zt;
        if (typeof Ye == "object" && Ye !== null) {
          var Tn = Ye.delay;
          typeof Tn == "number" && Tn > 0 ? zt = ft + Tn : zt = ft;
        } else
          zt = ft;
        var Yt;
        switch (re) {
          case de:
            Yt = Ee;
            break;
          case $:
            Yt = Ke;
            break;
          case xe:
            Yt = Zt;
            break;
          case Z:
            Yt = En;
            break;
          case Y:
          default:
            Yt = Be;
            break;
        }
        var Rr = zt + Yt, kt = {
          id: on++,
          callback: we,
          priorityLevel: re,
          startTime: zt,
          expirationTime: Rr,
          sortIndex: -1
        };
        return zt > ft ? (kt.sortIndex = zt, M(ze, kt), V(Tt) === null && kt === V(ze) && (Cr ? Kr() : Cr = !0, In(ut, zt - ft))) : (kt.sortIndex = Rr, M(Tt, kt), !Dt && !Mn && (Dt = !0, si(Yn))), kt;
      }
      function ca() {
      }
      function Pu() {
        !Dt && !Mn && (Dt = !0, si(Yn));
      }
      function Tr() {
        return V(Tt);
      }
      function ka(re) {
        re.callback = null;
      }
      function Cn() {
        return tt;
      }
      var Qn = !1, xr = null, Wr = -1, or = D, _a = -1;
      function Vl() {
        var re = T.unstable_now() - _a;
        return !(re < or);
      }
      function Qi() {
      }
      function ui(re) {
        if (re < 0 || re > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        re > 0 ? or = Math.floor(1e3 / re) : or = D;
      }
      var Ii = function() {
        if (xr !== null) {
          var re = T.unstable_now();
          _a = re;
          var we = !0, Ye = !0;
          try {
            Ye = xr(we, re);
          } finally {
            Ye ? qr() : (Qn = !1, xr = null);
          }
        } else
          Qn = !1;
      }, qr;
      if (typeof ce == "function")
        qr = function() {
          ce(Ii);
        };
      else if (typeof MessageChannel < "u") {
        var oi = new MessageChannel(), fa = oi.port2;
        oi.port1.onmessage = Ii, qr = function() {
          fa.postMessage(null);
        };
      } else
        qr = function() {
          ne(Ii, 0);
        };
      function si(re) {
        xr = re, Qn || (Qn = !0, qr());
      }
      function In(re, we) {
        Wr = ne(function() {
          re(T.unstable_now());
        }, we);
      }
      function Kr() {
        _e(Wr), Wr = -1;
      }
      var Yu = Qi, ci = null;
      T.unstable_IdlePriority = xe, T.unstable_ImmediatePriority = de, T.unstable_LowPriority = Z, T.unstable_NormalPriority = Y, T.unstable_Profiling = ci, T.unstable_UserBlockingPriority = $, T.unstable_cancelCallback = ka, T.unstable_continueExecution = Pu, T.unstable_forceFrameRate = ui, T.unstable_getCurrentPriorityLevel = Cn, T.unstable_getFirstCallbackNode = Tr, T.unstable_next = Nn, T.unstable_pauseExecution = ca, T.unstable_requestPaint = Yu, T.unstable_runWithPriority = ii, T.unstable_scheduleCallback = Xr, T.unstable_shouldYield = Vl, T.unstable_wrapCallback = li, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(m0)), m0;
}
process.env.NODE_ENV === "production" ? g0.exports = Tk() : g0.exports = xk();
var Rp = g0.exports, S0 = { exports: {} }, Qr = {};
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uT;
function Rk() {
  if (uT)
    return Qr;
  uT = 1;
  var T = pT, g = Rp;
  function h(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var D = /* @__PURE__ */ new Set(), M = {};
  function V(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (M[n] = r, n = 0; n < r.length; n++)
      D.add(r[n]);
  }
  var J = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), G = Object.prototype.hasOwnProperty, P = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, de = {}, $ = {};
  function Y(n) {
    return G.call($, n) ? !0 : G.call(de, n) ? !1 : P.test(n) ? $[n] = !0 : (de[n] = !0, !1);
  }
  function Z(n, r, l, o) {
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
  function xe(n, r, l, o) {
    if (r === null || typeof r > "u" || Z(n, r, l, o))
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
  function Me(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var Pe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Pe[n] = new Me(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Pe[r] = new Me(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Pe[n] = new Me(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Pe[n] = new Me(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Pe[n] = new Me(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Pe[n] = new Me(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Pe[n] = new Me(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Pe[n] = new Me(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Pe[n] = new Me(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var se = /[\-:]([a-z])/g;
  function B(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      se,
      B
    );
    Pe[r] = new Me(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(se, B);
    Pe[r] = new Me(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(se, B);
    Pe[r] = new Me(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Pe[n] = new Me(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Pe.xlinkHref = new Me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Pe[n] = new Me(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function q(n, r, l, o) {
    var c = Pe.hasOwnProperty(r) ? Pe[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (xe(r, l, c, o) && (l = null), o || c === null ? Y(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ye = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ee = Symbol.for("react.element"), Ke = Symbol.for("react.portal"), Be = Symbol.for("react.fragment"), En = Symbol.for("react.strict_mode"), Zt = Symbol.for("react.profiler"), Tt = Symbol.for("react.provider"), ze = Symbol.for("react.context"), on = Symbol.for("react.forward_ref"), je = Symbol.for("react.suspense"), tt = Symbol.for("react.suspense_list"), Mn = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), Cr = Symbol.for("react.offscreen"), ne = Symbol.iterator;
  function _e(n) {
    return n === null || typeof n != "object" ? null : (n = ne && n[ne] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ce = Object.assign, it;
  function ut(n) {
    if (it === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        it = r && r[1] || "";
      }
    return `
` + it + n;
  }
  var Yn = !1;
  function ur(n, r) {
    if (!n || Yn)
      return "";
    Yn = !0;
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
          } catch (U) {
            var o = U;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (U) {
            o = U;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, C = d.length - 1; 1 <= m && 0 <= C && c[m] !== d[C]; )
          C--;
        for (; 1 <= m && 0 <= C; m--, C--)
          if (c[m] !== d[C]) {
            if (m !== 1 || C !== 1)
              do
                if (m--, C--, 0 > C || c[m] !== d[C]) {
                  var x = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", n.displayName)), x;
                }
              while (1 <= m && 0 <= C);
            break;
          }
      }
    } finally {
      Yn = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? ut(n) : "";
  }
  function ii(n) {
    switch (n.tag) {
      case 5:
        return ut(n.type);
      case 16:
        return ut("Lazy");
      case 13:
        return ut("Suspense");
      case 19:
        return ut("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = ur(n.type, !1), n;
      case 11:
        return n = ur(n.type.render, !1), n;
      case 1:
        return n = ur(n.type, !0), n;
      default:
        return "";
    }
  }
  function Nn(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Be:
        return "Fragment";
      case Ke:
        return "Portal";
      case Zt:
        return "Profiler";
      case En:
        return "StrictMode";
      case je:
        return "Suspense";
      case tt:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case ze:
          return (n.displayName || "Context") + ".Consumer";
        case Tt:
          return (n._context.displayName || "Context") + ".Provider";
        case on:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Mn:
          return r = n.displayName || null, r !== null ? r : Nn(n.type) || "Memo";
        case Dt:
          r = n._payload, n = n._init;
          try {
            return Nn(n(r));
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
        return Nn(r);
      case 8:
        return r === En ? "StrictMode" : "Mode";
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
  function Xr(n) {
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
  function ca(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Pu(n) {
    var r = ca(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Tr(n) {
    n._valueTracker || (n._valueTracker = Pu(n));
  }
  function ka(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = ca(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Cn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Qn(n, r) {
    var l = r.checked;
    return ce({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function xr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Xr(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Wr(n, r) {
    r = r.checked, r != null && q(n, "checked", r, !1);
  }
  function or(n, r) {
    Wr(n, r);
    var l = Xr(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Vl(n, r.type, l) : r.hasOwnProperty("defaultValue") && Vl(n, r.type, Xr(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
  function Vl(n, r, l) {
    (r !== "number" || Cn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
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
      for (l = "" + Xr(l), r = null, c = 0; c < n.length; c++) {
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
      throw Error(h(91));
    return ce({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function qr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(h(92));
        if (Qi(l)) {
          if (1 < l.length)
            throw Error(h(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Xr(l) };
  }
  function oi(n, r) {
    var l = Xr(r.value), o = Xr(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function fa(n) {
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
  function In(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? si(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Kr, Yu = function(n) {
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
  var re = {
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
  }, we = ["Webkit", "ms", "Moz", "O"];
  Object.keys(re).forEach(function(n) {
    we.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), re[r] = re[n];
    });
  });
  function Ye(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || re.hasOwnProperty(n) && re[n] ? ("" + r).trim() : r + "px";
  }
  function ft(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = Ye(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var zt = ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Tn(n, r) {
    if (r) {
      if (zt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(h(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(h(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(h(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(h(62));
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
  var Rr = null;
  function kt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var da = null, Ft = null, _t = null;
  function bp(n) {
    if (n = mo(n)) {
      if (typeof da != "function")
        throw Error(h(280));
      var r = n.stateNode;
      r && (r = Te(r), da(n.stateNode, n.type, r));
    }
  }
  function is(n) {
    Ft ? _t ? _t.push(n) : _t = [n] : Ft = n;
  }
  function ls() {
    if (Ft) {
      var n = Ft, r = _t;
      if (_t = Ft = null, bp(n), r)
        for (n = 0; n < r.length; n++)
          bp(r[n]);
    }
  }
  function Dp(n, r) {
    return n(r);
  }
  function kp() {
  }
  var us = !1;
  function rf(n, r, l) {
    if (us)
      return n(r, l);
    us = !0;
    try {
      return Dp(n, r, l);
    } finally {
      us = !1, (Ft !== null || _t !== null) && (kp(), ls());
    }
  }
  function Qu(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = Te(l);
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
      throw Error(h(231, r, typeof l));
    return l;
  }
  var os = !1;
  if (J)
    try {
      var Gi = {};
      Object.defineProperty(Gi, "passive", { get: function() {
        os = !0;
      } }), window.addEventListener("test", Gi, Gi), window.removeEventListener("test", Gi, Gi);
    } catch {
      os = !1;
    }
  function jl(n, r, l, o, c, d, m, C, x) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (I) {
      this.onError(I);
    }
  }
  var Zr = !1, Oa = null, Bl = !1, Iu = null, af = { onError: function(n) {
    Zr = !0, Oa = n;
  } };
  function lf(n, r, l, o, c, d, m, C, x) {
    Zr = !1, Oa = null, jl.apply(af, arguments);
  }
  function $l(n, r, l, o, c, d, m, C, x) {
    if (lf.apply(this, arguments), Zr) {
      if (Zr) {
        var U = Oa;
        Zr = !1, Oa = null;
      } else
        throw Error(h(198));
      Bl || (Bl = !0, Iu = U);
    }
  }
  function pa(n) {
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
  function Gu(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Pl(n) {
    if (pa(n) !== n)
      throw Error(h(188));
  }
  function Ln(n) {
    var r = n.alternate;
    if (!r) {
      if (r = pa(n), r === null)
        throw Error(h(188));
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
            return Pl(c), n;
          if (d === o)
            return Pl(c), r;
          d = d.sibling;
        }
        throw Error(h(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var m = !1, C = c.child; C; ) {
          if (C === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (C === o) {
            m = !0, o = c, l = d;
            break;
          }
          C = C.sibling;
        }
        if (!m) {
          for (C = d.child; C; ) {
            if (C === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (C === o) {
              m = !0, o = d, l = c;
              break;
            }
            C = C.sibling;
          }
          if (!m)
            throw Error(h(189));
        }
      }
      if (l.alternate !== o)
        throw Error(h(190));
    }
    if (l.tag !== 3)
      throw Error(h(188));
    return l.stateNode.current === l ? n : r;
  }
  function _p(n) {
    return n = Ln(n), n !== null ? Op(n) : null;
  }
  function Op(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Op(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var uf = g.unstable_scheduleCallback, Mp = g.unstable_cancelCallback, Um = g.unstable_shouldYield, Am = g.unstable_requestPaint, Ot = g.unstable_now, Hm = g.unstable_getCurrentPriorityLevel, Ma = g.unstable_ImmediatePriority, Qe = g.unstable_UserBlockingPriority, fi = g.unstable_NormalPriority, Np = g.unstable_LowPriority, of = g.unstable_IdlePriority, Xu = null, Jr = null;
  function Lp(n) {
    if (Jr && typeof Jr.onCommitFiberRoot == "function")
      try {
        Jr.onCommitFiberRoot(Xu, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var wr = Math.clz32 ? Math.clz32 : Fm, zp = Math.log, Up = Math.LN2;
  function Fm(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (zp(n) / Up | 0) | 0;
  }
  var ss = 64, Yl = 4194304;
  function Xi(n) {
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
  function ea(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var C = m & ~c;
      C !== 0 ? o = Xi(C) : (d &= m, d !== 0 && (o = Xi(d)));
    } else
      m = l & ~c, m !== 0 ? o = Xi(m) : d !== 0 && (o = Xi(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - wr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function sf(n, r) {
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
  function cs(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - wr(d), C = 1 << m, x = c[m];
      x === -1 ? (!(C & l) || C & o) && (c[m] = sf(C, r)) : x <= r && (n.expiredLanes |= C), d &= ~C;
    }
  }
  function cf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function fs() {
    var n = ss;
    return ss <<= 1, !(ss & 4194240) && (ss = 64), n;
  }
  function ff(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function Wi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - wr(r), n[r] = l;
  }
  function Vm(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - wr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Wu(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - wr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var lt = 0;
  function df(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Ap, ds, dt, Hp, pf, He = !1, qu = [], Vt = null, br = null, Dr = null, Ku = /* @__PURE__ */ new Map(), Qt = /* @__PURE__ */ new Map(), ot = [], jm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ta(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Vt = null;
        break;
      case "dragenter":
      case "dragleave":
        br = null;
        break;
      case "mouseover":
      case "mouseout":
        Dr = null;
        break;
      case "pointerover":
      case "pointerout":
        Ku.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qt.delete(r.pointerId);
    }
  }
  function xn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = mo(r), r !== null && ds(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function di(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Vt = xn(Vt, n, r, l, o, c), !0;
      case "dragenter":
        return br = xn(br, n, r, l, o, c), !0;
      case "mouseover":
        return Dr = xn(Dr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Ku.set(d, xn(Ku.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Qt.set(d, xn(Qt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Fp(n) {
    var r = _r(n.target);
    if (r !== null) {
      var l = pa(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Gu(l), r !== null) {
            n.blockedOn = r, pf(n.priority, function() {
              dt(l);
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
  function Ql(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = hs(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Rr = o, l.target.dispatchEvent(o), Rr = null;
      } else
        return r = mo(l), r !== null && ds(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function vf(n, r, l) {
    Ql(n) && l.delete(r);
  }
  function Vp() {
    He = !1, Vt !== null && Ql(Vt) && (Vt = null), br !== null && Ql(br) && (br = null), Dr !== null && Ql(Dr) && (Dr = null), Ku.forEach(vf), Qt.forEach(vf);
  }
  function Zu(n, r) {
    n.blockedOn === r && (n.blockedOn = null, He || (He = !0, g.unstable_scheduleCallback(g.unstable_NormalPriority, Vp)));
  }
  function Ju(n) {
    function r(c) {
      return Zu(c, n);
    }
    if (0 < qu.length) {
      Zu(qu[0], n);
      for (var l = 1; l < qu.length; l++) {
        var o = qu[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Vt !== null && Zu(Vt, n), br !== null && Zu(br, n), Dr !== null && Zu(Dr, n), Ku.forEach(r), Qt.forEach(r), l = 0; l < ot.length; l++)
      o = ot[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < ot.length && (l = ot[0], l.blockedOn === null); )
      Fp(l), l.blockedOn === null && ot.shift();
  }
  var Il = ye.ReactCurrentBatchConfig, qi = !0;
  function jp(n, r, l, o) {
    var c = lt, d = Il.transition;
    Il.transition = null;
    try {
      lt = 1, vs(n, r, l, o);
    } finally {
      lt = c, Il.transition = d;
    }
  }
  function ps(n, r, l, o) {
    var c = lt, d = Il.transition;
    Il.transition = null;
    try {
      lt = 4, vs(n, r, l, o);
    } finally {
      lt = c, Il.transition = d;
    }
  }
  function vs(n, r, l, o) {
    if (qi) {
      var c = hs(n, r, l, o);
      if (c === null)
        Ds(n, r, o, eo, l), ta(n, o);
      else if (di(c, n, r, l, o))
        o.stopPropagation();
      else if (ta(n, o), r & 4 && -1 < jm.indexOf(n)) {
        for (; c !== null; ) {
          var d = mo(c);
          if (d !== null && Ap(d), d = hs(n, r, l, o), d === null && Ds(n, r, o, eo, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        Ds(n, r, o, null, l);
    }
  }
  var eo = null;
  function hs(n, r, l, o) {
    if (eo = null, n = kt(o), n = _r(n), n !== null)
      if (r = pa(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Gu(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return eo = n, null;
  }
  function hf(n) {
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
        switch (Hm()) {
          case Ma:
            return 1;
          case Qe:
            return 4;
          case fi:
          case Np:
            return 16;
          case of:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Na = null, to = null, no = null;
  function mf() {
    if (no)
      return no;
    var n, r = to, l = r.length, o, c = "value" in Na ? Na.value : Na.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++)
      ;
    return no = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function Gl(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ro() {
    return !0;
  }
  function Bp() {
    return !1;
  }
  function sr(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var C in n)
        n.hasOwnProperty(C) && (l = n[C], this[C] = l ? l(d) : d[C]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? ro : Bp, this.isPropagationStopped = Bp, this;
    }
    return ce(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ro);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ro);
    }, persist: function() {
    }, isPersistent: ro }), r;
  }
  var pi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ms = sr(pi), Xl = ce({}, pi, { view: 0, detail: 0 }), $p = sr(Xl), ys, yf, ao, Jt = ce({}, Xl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Cf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== ao && (ao && n.type === "mousemove" ? (ys = n.screenX - ao.screenX, yf = n.screenY - ao.screenY) : yf = ys = 0, ao = n), ys);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : yf;
  } }), gs = sr(Jt), Pp = ce({}, Jt, { dataTransfer: 0 }), Yp = sr(Pp), Bm = ce({}, Xl, { relatedTarget: 0 }), vi = sr(Bm), gf = ce({}, pi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Qp = sr(gf), $m = ce({}, pi, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Pm = sr($m), Ym = ce({}, pi, { data: 0 }), Sf = sr(Ym), Ef = {
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
  }, Ip = {
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
  }, Gp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Xp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Gp[n]) ? !!r[n] : !1;
  }
  function Cf() {
    return Xp;
  }
  var La = ce({}, Xl, { key: function(n) {
    if (n.key) {
      var r = Ef[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Gl(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Ip[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Cf, charCode: function(n) {
    return n.type === "keypress" ? Gl(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Gl(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Qm = sr(La), Tf = ce({}, Jt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ss = sr(Tf), xf = ce({}, Xl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cf }), Im = sr(xf), Es = ce({}, pi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wp = sr(Es), Gn = ce({}, Jt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), za = sr(Gn), jt = [9, 13, 27, 32], na = J && "CompositionEvent" in window, Ki = null;
  J && "documentMode" in document && (Ki = document.documentMode);
  var Cs = J && "TextEvent" in window && !Ki, qp = J && (!na || Ki && 8 < Ki && 11 >= Ki), Wl = String.fromCharCode(32), Kp = !1;
  function Zp(n, r) {
    switch (n) {
      case "keyup":
        return jt.indexOf(r.keyCode) !== -1;
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
  function Ts(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ql = !1;
  function Gm(n, r) {
    switch (n) {
      case "compositionend":
        return Ts(r);
      case "keypress":
        return r.which !== 32 ? null : (Kp = !0, Wl);
      case "textInput":
        return n = r.data, n === Wl && Kp ? null : n;
      default:
        return null;
    }
  }
  function Xm(n, r) {
    if (ql)
      return n === "compositionend" || !na && Zp(n, r) ? (n = mf(), no = to = Na = null, ql = !1, n) : null;
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
        return qp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Jp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ev(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Jp[n.type] : r === "textarea";
  }
  function tv(n, r, l, o) {
    is(o), r = po(r, "onChange"), 0 < r.length && (l = new ms("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var io = null, Kl = null;
  function Zl(n) {
    bs(n, 0);
  }
  function Jl(n) {
    var r = tu(n);
    if (ka(r))
      return n;
  }
  function nv(n, r) {
    if (n === "change")
      return r;
  }
  var Rf = !1;
  if (J) {
    var wf;
    if (J) {
      var bf = "oninput" in document;
      if (!bf) {
        var rv = document.createElement("div");
        rv.setAttribute("oninput", "return;"), bf = typeof rv.oninput == "function";
      }
      wf = bf;
    } else
      wf = !1;
    Rf = wf && (!document.documentMode || 9 < document.documentMode);
  }
  function av() {
    io && (io.detachEvent("onpropertychange", iv), Kl = io = null);
  }
  function iv(n) {
    if (n.propertyName === "value" && Jl(Kl)) {
      var r = [];
      tv(r, Kl, n, kt(n)), rf(Zl, r);
    }
  }
  function Wm(n, r, l) {
    n === "focusin" ? (av(), io = r, Kl = l, io.attachEvent("onpropertychange", iv)) : n === "focusout" && av();
  }
  function qm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Jl(Kl);
  }
  function Km(n, r) {
    if (n === "click")
      return Jl(r);
  }
  function lv(n, r) {
    if (n === "input" || n === "change")
      return Jl(r);
  }
  function Zm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var kr = typeof Object.is == "function" ? Object.is : Zm;
  function lo(n, r) {
    if (kr(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!G.call(r, c) || !kr(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function uv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function ov(n, r) {
    var l = uv(n);
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
      l = uv(l);
    }
  }
  function sv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? sv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function xs() {
    for (var n = window, r = Cn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = Cn(n.document);
    }
    return r;
  }
  function Ua(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Rs(n) {
    var r = xs(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && sv(l.ownerDocument.documentElement, l)) {
      if (o !== null && Ua(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = ov(l, d);
          var m = ov(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var cv = J && "documentMode" in document && 11 >= document.documentMode, ra = null, Df = null, uo = null, kf = !1;
  function fv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    kf || ra == null || ra !== Cn(o) || (o = ra, "selectionStart" in o && Ua(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), uo && lo(uo, o) || (uo = o, o = po(Df, "onSelect"), 0 < o.length && (r = new ms("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = ra)));
  }
  function ws(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Zi = { animationend: ws("Animation", "AnimationEnd"), animationiteration: ws("Animation", "AnimationIteration"), animationstart: ws("Animation", "AnimationStart"), transitionend: ws("Transition", "TransitionEnd") }, _f = {}, Of = {};
  J && (Of = document.createElement("div").style, "AnimationEvent" in window || (delete Zi.animationend.animation, delete Zi.animationiteration.animation, delete Zi.animationstart.animation), "TransitionEvent" in window || delete Zi.transitionend.transition);
  function en(n) {
    if (_f[n])
      return _f[n];
    if (!Zi[n])
      return n;
    var r = Zi[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Of)
        return _f[n] = r[l];
    return n;
  }
  var Mf = en("animationend"), dv = en("animationiteration"), pv = en("animationstart"), vv = en("transitionend"), hv = /* @__PURE__ */ new Map(), mv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Aa(n, r) {
    hv.set(n, r), V(r, [n]);
  }
  for (var oo = 0; oo < mv.length; oo++) {
    var Ji = mv[oo], Jm = Ji.toLowerCase(), so = Ji[0].toUpperCase() + Ji.slice(1);
    Aa(Jm, "on" + so);
  }
  Aa(Mf, "onAnimationEnd"), Aa(dv, "onAnimationIteration"), Aa(pv, "onAnimationStart"), Aa("dblclick", "onDoubleClick"), Aa("focusin", "onFocus"), Aa("focusout", "onBlur"), Aa(vv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), V("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), V("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), V("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), V("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), V("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), V("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var co = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ey = new Set("cancel close invalid load scroll toggle".split(" ").concat(co));
  function yv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, $l(o, r, void 0, n), n.currentTarget = null;
  }
  function bs(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var C = o[m], x = C.instance, U = C.currentTarget;
            if (C = C.listener, x !== d && c.isPropagationStopped())
              break e;
            yv(c, C, U), d = x;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (C = o[m], x = C.instance, U = C.currentTarget, C = C.listener, x !== d && c.isPropagationStopped())
              break e;
            yv(c, C, U), d = x;
          }
      }
    }
    if (Bl)
      throw n = Iu, Bl = !1, Iu = null, n;
  }
  function pt(n, r) {
    var l = r[Ff];
    l === void 0 && (l = r[Ff] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (gv(r, n, 2, !1), l.add(o));
  }
  function hi(n, r, l) {
    var o = 0;
    r && (o |= 4), gv(l, n, o, r);
  }
  var Ha = "_reactListening" + Math.random().toString(36).slice(2);
  function eu(n) {
    if (!n[Ha]) {
      n[Ha] = !0, D.forEach(function(l) {
        l !== "selectionchange" && (ey.has(l) || hi(l, !1, n), hi(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ha] || (r[Ha] = !0, hi("selectionchange", !1, r));
    }
  }
  function gv(n, r, l, o) {
    switch (hf(r)) {
      case 1:
        var c = jp;
        break;
      case 4:
        c = ps;
        break;
      default:
        c = vs;
    }
    l = c.bind(null, r, l, n), c = void 0, !os || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Ds(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var m = o.tag;
          if (m === 3 || m === 4) {
            var C = o.stateNode.containerInfo;
            if (C === c || C.nodeType === 8 && C.parentNode === c)
              break;
            if (m === 4)
              for (m = o.return; m !== null; ) {
                var x = m.tag;
                if ((x === 3 || x === 4) && (x = m.stateNode.containerInfo, x === c || x.nodeType === 8 && x.parentNode === c))
                  return;
                m = m.return;
              }
            for (; C !== null; ) {
              if (m = _r(C), m === null)
                return;
              if (x = m.tag, x === 5 || x === 6) {
                o = d = m;
                continue e;
              }
              C = C.parentNode;
            }
          }
          o = o.return;
        }
    rf(function() {
      var U = d, I = kt(l), X = [];
      e: {
        var Q = hv.get(n);
        if (Q !== void 0) {
          var ie = ms, pe = n;
          switch (n) {
            case "keypress":
              if (Gl(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              ie = Qm;
              break;
            case "focusin":
              pe = "focus", ie = vi;
              break;
            case "focusout":
              pe = "blur", ie = vi;
              break;
            case "beforeblur":
            case "afterblur":
              ie = vi;
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
              ie = gs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ie = Yp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ie = Im;
              break;
            case Mf:
            case dv:
            case pv:
              ie = Qp;
              break;
            case vv:
              ie = Wp;
              break;
            case "scroll":
              ie = $p;
              break;
            case "wheel":
              ie = za;
              break;
            case "copy":
            case "cut":
            case "paste":
              ie = Pm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ie = Ss;
          }
          var me = (r & 4) !== 0, At = !me && n === "scroll", k = me ? Q !== null ? Q + "Capture" : null : Q;
          me = [];
          for (var w = U, N; w !== null; ) {
            N = w;
            var K = N.stateNode;
            if (N.tag === 5 && K !== null && (N = K, k !== null && (K = Qu(w, k), K != null && me.push(fo(w, K, N)))), At)
              break;
            w = w.return;
          }
          0 < me.length && (Q = new ie(Q, pe, null, l, I), X.push({ event: Q, listeners: me }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Q = n === "mouseover" || n === "pointerover", ie = n === "mouseout" || n === "pointerout", Q && l !== Rr && (pe = l.relatedTarget || l.fromElement) && (_r(pe) || pe[Fa]))
            break e;
          if ((ie || Q) && (Q = I.window === I ? I : (Q = I.ownerDocument) ? Q.defaultView || Q.parentWindow : window, ie ? (pe = l.relatedTarget || l.toElement, ie = U, pe = pe ? _r(pe) : null, pe !== null && (At = pa(pe), pe !== At || pe.tag !== 5 && pe.tag !== 6) && (pe = null)) : (ie = null, pe = U), ie !== pe)) {
            if (me = gs, K = "onMouseLeave", k = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (me = Ss, K = "onPointerLeave", k = "onPointerEnter", w = "pointer"), At = ie == null ? Q : tu(ie), N = pe == null ? Q : tu(pe), Q = new me(K, w + "leave", ie, l, I), Q.target = At, Q.relatedTarget = N, K = null, _r(I) === U && (me = new me(k, w + "enter", pe, l, I), me.target = N, me.relatedTarget = At, K = me), At = K, ie && pe)
              t: {
                for (me = ie, k = pe, w = 0, N = me; N; N = el(N))
                  w++;
                for (N = 0, K = k; K; K = el(K))
                  N++;
                for (; 0 < w - N; )
                  me = el(me), w--;
                for (; 0 < N - w; )
                  k = el(k), N--;
                for (; w--; ) {
                  if (me === k || k !== null && me === k.alternate)
                    break t;
                  me = el(me), k = el(k);
                }
                me = null;
              }
            else
              me = null;
            ie !== null && Nf(X, Q, ie, me, !1), pe !== null && At !== null && Nf(X, At, pe, me, !0);
          }
        }
        e: {
          if (Q = U ? tu(U) : window, ie = Q.nodeName && Q.nodeName.toLowerCase(), ie === "select" || ie === "input" && Q.type === "file")
            var ge = nv;
          else if (ev(Q))
            if (Rf)
              ge = lv;
            else {
              ge = qm;
              var ve = Wm;
            }
          else
            (ie = Q.nodeName) && ie.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (ge = Km);
          if (ge && (ge = ge(n, U))) {
            tv(X, ge, l, I);
            break e;
          }
          ve && ve(n, Q, U), n === "focusout" && (ve = Q._wrapperState) && ve.controlled && Q.type === "number" && Vl(Q, "number", Q.value);
        }
        switch (ve = U ? tu(U) : window, n) {
          case "focusin":
            (ev(ve) || ve.contentEditable === "true") && (ra = ve, Df = U, uo = null);
            break;
          case "focusout":
            uo = Df = ra = null;
            break;
          case "mousedown":
            kf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            kf = !1, fv(X, l, I);
            break;
          case "selectionchange":
            if (cv)
              break;
          case "keydown":
          case "keyup":
            fv(X, l, I);
        }
        var Ce;
        if (na)
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
          ql ? Zp(n, l) && (Le = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Le = "onCompositionStart");
        Le && (qp && l.locale !== "ko" && (ql || Le !== "onCompositionStart" ? Le === "onCompositionEnd" && ql && (Ce = mf()) : (Na = I, to = "value" in Na ? Na.value : Na.textContent, ql = !0)), ve = po(U, Le), 0 < ve.length && (Le = new Sf(Le, n, null, l, I), X.push({ event: Le, listeners: ve }), Ce ? Le.data = Ce : (Ce = Ts(l), Ce !== null && (Le.data = Ce)))), (Ce = Cs ? Gm(n, l) : Xm(n, l)) && (U = po(U, "onBeforeInput"), 0 < U.length && (I = new Sf("onBeforeInput", "beforeinput", null, l, I), X.push({ event: I, listeners: U }), I.data = Ce));
      }
      bs(X, r);
    });
  }
  function fo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function po(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Qu(n, l), d != null && o.unshift(fo(n, d, c)), d = Qu(n, r), d != null && o.push(fo(n, d, c))), n = n.return;
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
  function Nf(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var C = l, x = C.alternate, U = C.stateNode;
      if (x !== null && x === o)
        break;
      C.tag === 5 && U !== null && (C = U, c ? (x = Qu(l, d), x != null && m.unshift(fo(l, x, C))) : c || (x = Qu(l, d), x != null && m.push(fo(l, x, C)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var Lf = /\r\n?/g, ty = /\u0000|\uFFFD/g;
  function zf(n) {
    return (typeof n == "string" ? n : "" + n).replace(Lf, `
`).replace(ty, "");
  }
  function ks(n, r, l) {
    if (r = zf(r), zf(n) !== r && l)
      throw Error(h(425));
  }
  function _s() {
  }
  var Uf = null, tl = null;
  function vo(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var nl = typeof setTimeout == "function" ? setTimeout : void 0, Sv = typeof clearTimeout == "function" ? clearTimeout : void 0, Af = typeof Promise == "function" ? Promise : void 0, Hf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Af < "u" ? function(n) {
    return Af.resolve(null).then(n).catch(ny);
  } : nl;
  function ny(n) {
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
            n.removeChild(c), Ju(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Ju(r);
  }
  function aa(n) {
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
  function ho(n) {
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
  var yi = Math.random().toString(36).slice(2), va = "__reactFiber$" + yi, rl = "__reactProps$" + yi, Fa = "__reactContainer$" + yi, Ff = "__reactEvents$" + yi, ry = "__reactListeners$" + yi, Vf = "__reactHandles$" + yi;
  function _r(n) {
    var r = n[va];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Fa] || l[va]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = ho(n); n !== null; ) {
            if (l = n[va])
              return l;
            n = ho(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function mo(n) {
    return n = n[va] || n[Fa], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function tu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(h(33));
  }
  function Te(n) {
    return n[rl] || null;
  }
  var gi = [], ht = -1;
  function Fe(n) {
    return { current: n };
  }
  function nt(n) {
    0 > ht || (n.current = gi[ht], gi[ht] = null, ht--);
  }
  function rt(n, r) {
    ht++, gi[ht] = n.current, n.current = r;
  }
  var ha = {}, Ne = Fe(ha), Mt = Fe(!1), Xn = ha;
  function Or(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return ha;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Et(n) {
    return n = n.childContextTypes, n != null;
  }
  function Mr() {
    nt(Mt), nt(Ne);
  }
  function Si(n, r, l) {
    if (Ne.current !== ha)
      throw Error(h(168));
    rt(Ne, r), rt(Mt, l);
  }
  function yo(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(h(108, li(n) || "Unknown", c));
    return ce({}, l, o);
  }
  function Os(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ha, Xn = Ne.current, rt(Ne, n), rt(Mt, Mt.current), !0;
  }
  function Ev(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(h(169));
    l ? (n = yo(n, r, Xn), o.__reactInternalMemoizedMergedChildContext = n, nt(Mt), nt(Ne), rt(Ne, n)) : nt(Mt), rt(Mt, l);
  }
  var cr = null, tn = !1, go = !1;
  function jf(n) {
    cr === null ? cr = [n] : cr.push(n);
  }
  function Bf(n) {
    tn = !0, jf(n);
  }
  function Wn() {
    if (!go && cr !== null) {
      go = !0;
      var n = 0, r = lt;
      try {
        var l = cr;
        for (lt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        cr = null, tn = !1;
      } catch (c) {
        throw cr !== null && (cr = cr.slice(n + 1)), uf(Ma, Wn), c;
      } finally {
        lt = r, go = !1;
      }
    }
    return null;
  }
  var Ei = [], qn = 0, al = null, nu = 0, Kn = [], Rn = 0, Nr = null, sn = 1, Va = "";
  function fr(n, r) {
    Ei[qn++] = nu, Ei[qn++] = al, al = n, nu = r;
  }
  function $f(n, r, l) {
    Kn[Rn++] = sn, Kn[Rn++] = Va, Kn[Rn++] = Nr, Nr = n;
    var o = sn;
    n = Va;
    var c = 32 - wr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - wr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, sn = 1 << 32 - wr(r) + c | l << c | o, Va = d + n;
    } else
      sn = 1 << d | l << c | o, Va = n;
  }
  function Ms(n) {
    n.return !== null && (fr(n, 1), $f(n, 1, 0));
  }
  function Pf(n) {
    for (; n === al; )
      al = Ei[--qn], Ei[qn] = null, nu = Ei[--qn], Ei[qn] = null;
    for (; n === Nr; )
      Nr = Kn[--Rn], Kn[Rn] = null, Va = Kn[--Rn], Kn[Rn] = null, sn = Kn[--Rn], Kn[Rn] = null;
  }
  var dr = null, Zn = null, mt = !1, Lr = null;
  function Yf(n, r) {
    var l = Vr(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Cv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, dr = n, Zn = aa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, dr = n, Zn = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Nr !== null ? { id: sn, overflow: Va } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Vr(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, dr = n, Zn = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ns(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ls(n) {
    if (mt) {
      var r = Zn;
      if (r) {
        var l = r;
        if (!Cv(n, r)) {
          if (Ns(n))
            throw Error(h(418));
          r = aa(l.nextSibling);
          var o = dr;
          r && Cv(n, r) ? Yf(o, l) : (n.flags = n.flags & -4097 | 2, mt = !1, dr = n);
        }
      } else {
        if (Ns(n))
          throw Error(h(418));
        n.flags = n.flags & -4097 | 2, mt = !1, dr = n;
      }
    }
  }
  function Tv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    dr = n;
  }
  function zs(n) {
    if (n !== dr)
      return !1;
    if (!mt)
      return Tv(n), mt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !vo(n.type, n.memoizedProps)), r && (r = Zn)) {
      if (Ns(n))
        throw xv(), Error(h(418));
      for (; r; )
        Yf(n, r), r = aa(r.nextSibling);
    }
    if (Tv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(h(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Zn = aa(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Zn = null;
      }
    } else
      Zn = dr ? aa(n.stateNode.nextSibling) : null;
    return !0;
  }
  function xv() {
    for (var n = Zn; n; )
      n = aa(n.nextSibling);
  }
  function xt() {
    Zn = dr = null, mt = !1;
  }
  function Qf(n) {
    Lr === null ? Lr = [n] : Lr.push(n);
  }
  var Us = ye.ReactCurrentBatchConfig;
  function pr(n, r) {
    if (n && n.defaultProps) {
      r = ce({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var ma = Fe(null), As = null, Ci = null, If = null;
  function Gf() {
    If = Ci = As = null;
  }
  function Ti(n) {
    var r = ma.current;
    nt(ma), n._currentValue = r;
  }
  function nn(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function ee(n, r) {
    As = n, If = Ci = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Bt = !0), n.firstContext = null);
  }
  function Ut(n) {
    var r = n._currentValue;
    if (If !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Ci === null) {
        if (As === null)
          throw Error(h(308));
        Ci = n, As.dependencies = { lanes: 0, firstContext: n };
      } else
        Ci = Ci.next = n;
    return r;
  }
  var cn = null;
  function Xf(n) {
    cn === null ? cn = [n] : cn.push(n);
  }
  function Rv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Xf(r)) : (l.next = c.next, c.next = l), r.interleaved = l, ja(n, o);
  }
  function ja(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var xi = !1;
  function Wf(n) {
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
    if (o = o.shared, Ie & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, ja(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Xf(o)) : (r.next = c.next, c.next = r), o.interleaved = r, ja(n, l);
  }
  function Hs(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Wu(n, l);
    }
  }
  function qf(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
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
    xi = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, C = c.shared.pending;
    if (C !== null) {
      c.shared.pending = null;
      var x = C, U = x.next;
      x.next = null, m === null ? d = U : m.next = U, m = x;
      var I = n.alternate;
      I !== null && (I = I.updateQueue, C = I.lastBaseUpdate, C !== m && (C === null ? I.firstBaseUpdate = U : C.next = U, I.lastBaseUpdate = x));
    }
    if (d !== null) {
      var X = c.baseState;
      m = 0, I = U = x = null, C = d;
      do {
        var Q = C.lane, ie = C.eventTime;
        if ((o & Q) === Q) {
          I !== null && (I = I.next = {
            eventTime: ie,
            lane: 0,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null
          });
          e: {
            var pe = n, me = C;
            switch (Q = r, ie = l, me.tag) {
              case 1:
                if (pe = me.payload, typeof pe == "function") {
                  X = pe.call(ie, X, Q);
                  break e;
                }
                X = pe;
                break e;
              case 3:
                pe.flags = pe.flags & -65537 | 128;
              case 0:
                if (pe = me.payload, Q = typeof pe == "function" ? pe.call(ie, X, Q) : pe, Q == null)
                  break e;
                X = ce({}, X, Q);
                break e;
              case 2:
                xi = !0;
            }
          }
          C.callback !== null && C.lane !== 0 && (n.flags |= 64, Q = c.effects, Q === null ? c.effects = [C] : Q.push(C));
        } else
          ie = { eventTime: ie, lane: Q, tag: C.tag, payload: C.payload, callback: C.callback, next: null }, I === null ? (U = I = ie, x = X) : I = I.next = ie, m |= Q;
        if (C = C.next, C === null) {
          if (C = c.shared.pending, C === null)
            break;
          Q = C, C = Q.next, Q.next = null, c.lastBaseUpdate = Q, c.shared.pending = null;
        }
      } while (1);
      if (I === null && (x = X), c.baseState = x, c.firstBaseUpdate = U, c.lastBaseUpdate = I, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Qa |= m, n.lanes = m, n.memoizedState = X;
    }
  }
  function il(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(h(191, c));
          c.call(o);
        }
      }
  }
  var wv = new T.Component().refs;
  function Kf(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ce({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Fs = { isMounted: function(n) {
    return (n = n._reactInternals) ? pa(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = kn(), c = $t(n), d = Ba(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ri(n, d, c), r !== null && (_n(r, n, c, o), Hs(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = kn(), c = $t(n), d = Ba(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ri(n, d, c), r !== null && (_n(r, n, c, o), Hs(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = kn(), o = $t(n), c = Ba(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ri(n, c, o), r !== null && (_n(r, n, o, l), Hs(r, n, o));
  } };
  function bv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !lo(l, o) || !lo(c, d) : !0;
  }
  function Dv(n, r, l) {
    var o = !1, c = ha, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ut(d) : (c = Et(r) ? Xn : Ne.current, o = r.contextTypes, d = (o = o != null) ? Or(n, c) : ha), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Fs, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function kv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Fs.enqueueReplaceState(r, r.state, null);
  }
  function Vs(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = wv, Wf(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ut(d) : (d = Et(r) ? Xn : Ne.current, c.context = Or(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Kf(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Fs.enqueueReplaceState(c, c.state, null), wi(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function ru(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(h(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(h(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var C = c.refs;
          C === wv && (C = c.refs = {}), m === null ? delete C[d] : C[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(h(284));
      if (!l._owner)
        throw Error(h(290, n));
    }
    return n;
  }
  function js(n, r) {
    throw n = Object.prototype.toString.call(r), Error(h(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function _v(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Ov(n) {
    function r(k, w) {
      if (n) {
        var N = k.deletions;
        N === null ? (k.deletions = [w], k.flags |= 16) : N.push(w);
      }
    }
    function l(k, w) {
      if (!n)
        return null;
      for (; w !== null; )
        r(k, w), w = w.sibling;
      return null;
    }
    function o(k, w) {
      for (k = /* @__PURE__ */ new Map(); w !== null; )
        w.key !== null ? k.set(w.key, w) : k.set(w.index, w), w = w.sibling;
      return k;
    }
    function c(k, w) {
      return k = Li(k, w), k.index = 0, k.sibling = null, k;
    }
    function d(k, w, N) {
      return k.index = N, n ? (N = k.alternate, N !== null ? (N = N.index, N < w ? (k.flags |= 2, w) : N) : (k.flags |= 2, w)) : (k.flags |= 1048576, w);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function C(k, w, N, K) {
      return w === null || w.tag !== 6 ? (w = Ho(N, k.mode, K), w.return = k, w) : (w = c(w, N), w.return = k, w);
    }
    function x(k, w, N, K) {
      var ge = N.type;
      return ge === Be ? I(k, w, N.props.children, K, N.key) : w !== null && (w.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === Dt && _v(ge) === w.type) ? (K = c(w, N.props), K.ref = ru(k, w, N), K.return = k, K) : (K = gc(N.type, N.key, N.props, null, k.mode, K), K.ref = ru(k, w, N), K.return = k, K);
    }
    function U(k, w, N, K) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== N.containerInfo || w.stateNode.implementation !== N.implementation ? (w = Rl(N, k.mode, K), w.return = k, w) : (w = c(w, N.children || []), w.return = k, w);
    }
    function I(k, w, N, K, ge) {
      return w === null || w.tag !== 7 ? (w = xl(N, k.mode, K, ge), w.return = k, w) : (w = c(w, N), w.return = k, w);
    }
    function X(k, w, N) {
      if (typeof w == "string" && w !== "" || typeof w == "number")
        return w = Ho("" + w, k.mode, N), w.return = k, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Ee:
            return N = gc(w.type, w.key, w.props, null, k.mode, N), N.ref = ru(k, null, w), N.return = k, N;
          case Ke:
            return w = Rl(w, k.mode, N), w.return = k, w;
          case Dt:
            var K = w._init;
            return X(k, K(w._payload), N);
        }
        if (Qi(w) || _e(w))
          return w = xl(w, k.mode, N, null), w.return = k, w;
        js(k, w);
      }
      return null;
    }
    function Q(k, w, N, K) {
      var ge = w !== null ? w.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number")
        return ge !== null ? null : C(k, w, "" + N, K);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Ee:
            return N.key === ge ? x(k, w, N, K) : null;
          case Ke:
            return N.key === ge ? U(k, w, N, K) : null;
          case Dt:
            return ge = N._init, Q(
              k,
              w,
              ge(N._payload),
              K
            );
        }
        if (Qi(N) || _e(N))
          return ge !== null ? null : I(k, w, N, K, null);
        js(k, N);
      }
      return null;
    }
    function ie(k, w, N, K, ge) {
      if (typeof K == "string" && K !== "" || typeof K == "number")
        return k = k.get(N) || null, C(w, k, "" + K, ge);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case Ee:
            return k = k.get(K.key === null ? N : K.key) || null, x(w, k, K, ge);
          case Ke:
            return k = k.get(K.key === null ? N : K.key) || null, U(w, k, K, ge);
          case Dt:
            var ve = K._init;
            return ie(k, w, N, ve(K._payload), ge);
        }
        if (Qi(K) || _e(K))
          return k = k.get(N) || null, I(w, k, K, ge, null);
        js(w, K);
      }
      return null;
    }
    function pe(k, w, N, K) {
      for (var ge = null, ve = null, Ce = w, Le = w = 0, ln = null; Ce !== null && Le < N.length; Le++) {
        Ce.index > Le ? (ln = Ce, Ce = null) : ln = Ce.sibling;
        var Ze = Q(k, Ce, N[Le], K);
        if (Ze === null) {
          Ce === null && (Ce = ln);
          break;
        }
        n && Ce && Ze.alternate === null && r(k, Ce), w = d(Ze, w, Le), ve === null ? ge = Ze : ve.sibling = Ze, ve = Ze, Ce = ln;
      }
      if (Le === N.length)
        return l(k, Ce), mt && fr(k, Le), ge;
      if (Ce === null) {
        for (; Le < N.length; Le++)
          Ce = X(k, N[Le], K), Ce !== null && (w = d(Ce, w, Le), ve === null ? ge = Ce : ve.sibling = Ce, ve = Ce);
        return mt && fr(k, Le), ge;
      }
      for (Ce = o(k, Ce); Le < N.length; Le++)
        ln = ie(Ce, k, Le, N[Le], K), ln !== null && (n && ln.alternate !== null && Ce.delete(ln.key === null ? Le : ln.key), w = d(ln, w, Le), ve === null ? ge = ln : ve.sibling = ln, ve = ln);
      return n && Ce.forEach(function(zi) {
        return r(k, zi);
      }), mt && fr(k, Le), ge;
    }
    function me(k, w, N, K) {
      var ge = _e(N);
      if (typeof ge != "function")
        throw Error(h(150));
      if (N = ge.call(N), N == null)
        throw Error(h(151));
      for (var ve = ge = null, Ce = w, Le = w = 0, ln = null, Ze = N.next(); Ce !== null && !Ze.done; Le++, Ze = N.next()) {
        Ce.index > Le ? (ln = Ce, Ce = null) : ln = Ce.sibling;
        var zi = Q(k, Ce, Ze.value, K);
        if (zi === null) {
          Ce === null && (Ce = ln);
          break;
        }
        n && Ce && zi.alternate === null && r(k, Ce), w = d(zi, w, Le), ve === null ? ge = zi : ve.sibling = zi, ve = zi, Ce = ln;
      }
      if (Ze.done)
        return l(
          k,
          Ce
        ), mt && fr(k, Le), ge;
      if (Ce === null) {
        for (; !Ze.done; Le++, Ze = N.next())
          Ze = X(k, Ze.value, K), Ze !== null && (w = d(Ze, w, Le), ve === null ? ge = Ze : ve.sibling = Ze, ve = Ze);
        return mt && fr(k, Le), ge;
      }
      for (Ce = o(k, Ce); !Ze.done; Le++, Ze = N.next())
        Ze = ie(Ce, k, Le, Ze.value, K), Ze !== null && (n && Ze.alternate !== null && Ce.delete(Ze.key === null ? Le : Ze.key), w = d(Ze, w, Le), ve === null ? ge = Ze : ve.sibling = Ze, ve = Ze);
      return n && Ce.forEach(function(xy) {
        return r(k, xy);
      }), mt && fr(k, Le), ge;
    }
    function At(k, w, N, K) {
      if (typeof N == "object" && N !== null && N.type === Be && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Ee:
            e: {
              for (var ge = N.key, ve = w; ve !== null; ) {
                if (ve.key === ge) {
                  if (ge = N.type, ge === Be) {
                    if (ve.tag === 7) {
                      l(k, ve.sibling), w = c(ve, N.props.children), w.return = k, k = w;
                      break e;
                    }
                  } else if (ve.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === Dt && _v(ge) === ve.type) {
                    l(k, ve.sibling), w = c(ve, N.props), w.ref = ru(k, ve, N), w.return = k, k = w;
                    break e;
                  }
                  l(k, ve);
                  break;
                } else
                  r(k, ve);
                ve = ve.sibling;
              }
              N.type === Be ? (w = xl(N.props.children, k.mode, K, N.key), w.return = k, k = w) : (K = gc(N.type, N.key, N.props, null, k.mode, K), K.ref = ru(k, w, N), K.return = k, k = K);
            }
            return m(k);
          case Ke:
            e: {
              for (ve = N.key; w !== null; ) {
                if (w.key === ve)
                  if (w.tag === 4 && w.stateNode.containerInfo === N.containerInfo && w.stateNode.implementation === N.implementation) {
                    l(k, w.sibling), w = c(w, N.children || []), w.return = k, k = w;
                    break e;
                  } else {
                    l(k, w);
                    break;
                  }
                else
                  r(k, w);
                w = w.sibling;
              }
              w = Rl(N, k.mode, K), w.return = k, k = w;
            }
            return m(k);
          case Dt:
            return ve = N._init, At(k, w, ve(N._payload), K);
        }
        if (Qi(N))
          return pe(k, w, N, K);
        if (_e(N))
          return me(k, w, N, K);
        js(k, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, w !== null && w.tag === 6 ? (l(k, w.sibling), w = c(w, N), w.return = k, k = w) : (l(k, w), w = Ho(N, k.mode, K), w.return = k, k = w), m(k)) : l(k, w);
    }
    return At;
  }
  var au = Ov(!0), Mv = Ov(!1), So = {}, ia = Fe(So), Eo = Fe(So), iu = Fe(So);
  function ll(n) {
    if (n === So)
      throw Error(h(174));
    return n;
  }
  function Zf(n, r) {
    switch (rt(iu, r), rt(Eo, n), rt(ia, So), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : In(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = In(r, n);
    }
    nt(ia), rt(ia, r);
  }
  function bi() {
    nt(ia), nt(Eo), nt(iu);
  }
  function be(n) {
    ll(iu.current);
    var r = ll(ia.current), l = In(r, n.type);
    r !== l && (rt(Eo, n), rt(ia, l));
  }
  function $e(n) {
    Eo.current === n && (nt(ia), nt(Eo));
  }
  var De = Fe(0);
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
  function Bs() {
    for (var n = 0; n < zr.length; n++)
      zr[n]._workInProgressVersionPrimary = null;
    zr.length = 0;
  }
  var $s = ye.ReactCurrentDispatcher, Jf = ye.ReactCurrentBatchConfig, ul = 0, yt = null, F = null, Xe = null, ke = !1, ya = !1, vr = 0, ol = 0;
  function gt() {
    throw Error(h(321));
  }
  function sl(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!kr(n[l], r[l]))
        return !1;
    return !0;
  }
  function Di(n, r, l, o, c, d) {
    if (ul = d, yt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, $s.current = n === null || n.memoizedState === null ? iy : ly, n = l(o, c), ya) {
      d = 0;
      do {
        if (ya = !1, vr = 0, 25 <= d)
          throw Error(h(301));
        d += 1, Xe = F = null, r.updateQueue = null, $s.current = td, n = l(o, c);
      } while (ya);
    }
    if ($s.current = ac, r = F !== null && F.next !== null, ul = 0, Xe = F = yt = null, ke = !1, r)
      throw Error(h(300));
    return n;
  }
  function cl() {
    var n = vr !== 0;
    return vr = 0, n;
  }
  function Ur() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Xe === null ? yt.memoizedState = Xe = n : Xe = Xe.next = n, Xe;
  }
  function Jn() {
    if (F === null) {
      var n = yt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = F.next;
    var r = Xe === null ? yt.memoizedState : Xe.next;
    if (r !== null)
      Xe = r, F = n;
    else {
      if (n === null)
        throw Error(h(310));
      F = n, n = { memoizedState: F.memoizedState, baseState: F.baseState, baseQueue: F.baseQueue, queue: F.queue, next: null }, Xe === null ? yt.memoizedState = Xe = n : Xe = Xe.next = n;
    }
    return Xe;
  }
  function fl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Co(n) {
    var r = Jn(), l = r.queue;
    if (l === null)
      throw Error(h(311));
    l.lastRenderedReducer = n;
    var o = F, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var C = m = null, x = null, U = d;
      do {
        var I = U.lane;
        if ((ul & I) === I)
          x !== null && (x = x.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var X = {
            lane: I,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          x === null ? (C = x = X, m = o) : x = x.next = X, yt.lanes |= I, Qa |= I;
        }
        U = U.next;
      } while (U !== null && U !== d);
      x === null ? m = o : x.next = C, kr(o, r.memoizedState) || (Bt = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = x, l.lastRenderedState = o;
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
  function To(n) {
    var r = Jn(), l = r.queue;
    if (l === null)
      throw Error(h(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      kr(d, r.memoizedState) || (Bt = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Ps() {
  }
  function Ys(n, r) {
    var l = yt, o = Jn(), c = r(), d = !kr(o.memoizedState, c);
    if (d && (o.memoizedState = c, Bt = !0), o = o.queue, xo(Gs.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Xe !== null && Xe.memoizedState.tag & 1) {
      if (l.flags |= 2048, dl(9, Is.bind(null, l, o, c, r), void 0, null), wt === null)
        throw Error(h(349));
      ul & 30 || Qs(l, r, c);
    }
    return c;
  }
  function Qs(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = yt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, yt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Is(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Xs(r) && Ws(n);
  }
  function Gs(n, r, l) {
    return l(function() {
      Xs(r) && Ws(n);
    });
  }
  function Xs(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !kr(n, l);
    } catch {
      return !0;
    }
  }
  function Ws(n) {
    var r = ja(n, 1);
    r !== null && _n(r, n, 1, -1);
  }
  function qs(n) {
    var r = Ur();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: fl, lastRenderedState: n }, r.queue = n, n = n.dispatch = rc.bind(null, yt, n), [r.memoizedState, n];
  }
  function dl(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = yt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, yt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Ks() {
    return Jn().memoizedState;
  }
  function pl(n, r, l, o) {
    var c = Ur();
    yt.flags |= n, c.memoizedState = dl(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function $a(n, r, l, o) {
    var c = Jn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (F !== null) {
      var m = F.memoizedState;
      if (d = m.destroy, o !== null && sl(o, m.deps)) {
        c.memoizedState = dl(r, l, d, o);
        return;
      }
    }
    yt.flags |= n, c.memoizedState = dl(1 | r, l, d, o);
  }
  function Zs(n, r) {
    return pl(8390656, 8, n, r);
  }
  function xo(n, r) {
    return $a(2048, 8, n, r);
  }
  function Js(n, r) {
    return $a(4, 2, n, r);
  }
  function ec(n, r) {
    return $a(4, 4, n, r);
  }
  function ed(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function lu(n, r, l) {
    return l = l != null ? l.concat([n]) : null, $a(4, 4, ed.bind(null, r, n), l);
  }
  function tc() {
  }
  function uu(n, r) {
    var l = Jn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && sl(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function ki(n, r) {
    var l = Jn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && sl(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function er(n, r, l) {
    return ul & 21 ? (kr(l, r) || (l = fs(), yt.lanes |= l, Qa |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Bt = !0), n.memoizedState = l);
  }
  function ay(n, r) {
    var l = lt;
    lt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Jf.transition;
    Jf.transition = {};
    try {
      n(!1), r();
    } finally {
      lt = l, Jf.transition = o;
    }
  }
  function vt() {
    return Jn().memoizedState;
  }
  function nc(n, r, l) {
    var o = $t(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, ou(n))
      Ro(r, l);
    else if (l = Rv(n, r, l, o), l !== null) {
      var c = kn();
      _n(l, n, o, c), Nv(l, r, o);
    }
  }
  function rc(n, r, l) {
    var o = $t(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ou(n))
      Ro(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, C = d(m, l);
          if (c.hasEagerState = !0, c.eagerState = C, kr(C, m)) {
            var x = r.interleaved;
            x === null ? (c.next = c, Xf(r)) : (c.next = x.next, x.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Rv(n, r, c, o), l !== null && (c = kn(), _n(l, n, o, c), Nv(l, r, o));
    }
  }
  function ou(n) {
    var r = n.alternate;
    return n === yt || r !== null && r === yt;
  }
  function Ro(n, r) {
    ya = ke = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Nv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Wu(n, l);
    }
  }
  var ac = { readContext: Ut, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, iy = { readContext: Ut, useCallback: function(n, r) {
    return Ur().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ut, useEffect: Zs, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, pl(
      4194308,
      4,
      ed.bind(null, r, n),
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
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = nc.bind(null, yt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Ur();
    return n = { current: n }, r.memoizedState = n;
  }, useState: qs, useDebugValue: tc, useDeferredValue: function(n) {
    return Ur().memoizedState = n;
  }, useTransition: function() {
    var n = qs(!1), r = n[0];
    return n = ay.bind(null, n[1]), Ur().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = yt, c = Ur();
    if (mt) {
      if (l === void 0)
        throw Error(h(407));
      l = l();
    } else {
      if (l = r(), wt === null)
        throw Error(h(349));
      ul & 30 || Qs(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Zs(Gs.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, dl(9, Is.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Ur(), r = wt.identifierPrefix;
    if (mt) {
      var l = Va, o = sn;
      l = (o & ~(1 << 32 - wr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = vr++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = ol++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ly = {
    readContext: Ut,
    useCallback: uu,
    useContext: Ut,
    useEffect: xo,
    useImperativeHandle: lu,
    useInsertionEffect: Js,
    useLayoutEffect: ec,
    useMemo: ki,
    useReducer: Co,
    useRef: Ks,
    useState: function() {
      return Co(fl);
    },
    useDebugValue: tc,
    useDeferredValue: function(n) {
      var r = Jn();
      return er(r, F.memoizedState, n);
    },
    useTransition: function() {
      var n = Co(fl)[0], r = Jn().memoizedState;
      return [n, r];
    },
    useMutableSource: Ps,
    useSyncExternalStore: Ys,
    useId: vt,
    unstable_isNewReconciler: !1
  }, td = { readContext: Ut, useCallback: uu, useContext: Ut, useEffect: xo, useImperativeHandle: lu, useInsertionEffect: Js, useLayoutEffect: ec, useMemo: ki, useReducer: To, useRef: Ks, useState: function() {
    return To(fl);
  }, useDebugValue: tc, useDeferredValue: function(n) {
    var r = Jn();
    return F === null ? r.memoizedState = n : er(r, F.memoizedState, n);
  }, useTransition: function() {
    var n = To(fl)[0], r = Jn().memoizedState;
    return [n, r];
  }, useMutableSource: Ps, useSyncExternalStore: Ys, useId: vt, unstable_isNewReconciler: !1 };
  function su(n, r) {
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
  function wo(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function ic(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var uy = typeof WeakMap == "function" ? WeakMap : Map;
  function Lv(n, r, l) {
    l = Ba(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      dc || (dc = !0, gl = o), ic(n, r);
    }, l;
  }
  function bo(n, r, l) {
    l = Ba(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        ic(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      ic(n, r), typeof o != "function" && (Ea === null ? Ea = /* @__PURE__ */ new Set([this]) : Ea.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function zv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new uy();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = vy.bind(null, n, r, l), r.then(n, n));
  }
  function nd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function rd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Ba(-1, 1), r.tag = 2, Ri(l, r, 1))), l.lanes |= 1), n);
  }
  var oy = ye.ReactCurrentOwner, Bt = !1;
  function Gt(n, r, l, o) {
    r.child = n === null ? Mv(r, null, l, o) : au(r, n.child, l, o);
  }
  function _i(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return ee(r, c), o = Di(n, r, l, o, d, c), l = cl(), n !== null && !Bt ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, fn(n, r, c)) : (mt && l && Ms(r), r.flags |= 1, Gt(n, r, o, c), r.child);
  }
  function lc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Td(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, tr(n, r, d, o, c)) : (n = gc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : lo, l(m, o) && n.ref === r.ref)
        return fn(n, r, c);
    }
    return r.flags |= 1, n = Li(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function tr(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (lo(d, o) && n.ref === r.ref)
        if (Bt = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (Bt = !0);
        else
          return r.lanes = n.lanes, fn(n, r, c);
    }
    return cu(n, r, l, o, c);
  }
  function vl(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, rt(mu, hr), hr |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, rt(mu, hr), hr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, rt(mu, hr), hr |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, rt(mu, hr), hr |= o;
    return Gt(n, r, c, l), r.child;
  }
  function Ve(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function cu(n, r, l, o, c) {
    var d = Et(l) ? Xn : Ne.current;
    return d = Or(r, d), ee(r, c), l = Di(n, r, l, o, d, c), o = cl(), n !== null && !Bt ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, fn(n, r, c)) : (mt && o && Ms(r), r.flags |= 1, Gt(n, r, l, c), r.child);
  }
  function ad(n, r, l, o, c) {
    if (Et(l)) {
      var d = !0;
      Os(r);
    } else
      d = !1;
    if (ee(r, c), r.stateNode === null)
      wn(n, r), Dv(r, l, o), Vs(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, C = r.memoizedProps;
      m.props = C;
      var x = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = Ut(U) : (U = Et(l) ? Xn : Ne.current, U = Or(r, U));
      var I = l.getDerivedStateFromProps, X = typeof I == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      X || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (C !== o || x !== U) && kv(r, m, o, U), xi = !1;
      var Q = r.memoizedState;
      m.state = Q, wi(r, o, m, c), x = r.memoizedState, C !== o || Q !== x || Mt.current || xi ? (typeof I == "function" && (Kf(r, l, I, o), x = r.memoizedState), (C = xi || bv(r, l, C, o, Q, x, U)) ? (X || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = x), m.props = o, m.state = x, m.context = U, o = C) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, It(n, r), C = r.memoizedProps, U = r.type === r.elementType ? C : pr(r.type, C), m.props = U, X = r.pendingProps, Q = m.context, x = l.contextType, typeof x == "object" && x !== null ? x = Ut(x) : (x = Et(l) ? Xn : Ne.current, x = Or(r, x));
      var ie = l.getDerivedStateFromProps;
      (I = typeof ie == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (C !== X || Q !== x) && kv(r, m, o, x), xi = !1, Q = r.memoizedState, m.state = Q, wi(r, o, m, c);
      var pe = r.memoizedState;
      C !== X || Q !== pe || Mt.current || xi ? (typeof ie == "function" && (Kf(r, l, ie, o), pe = r.memoizedState), (U = xi || bv(r, l, U, o, Q, pe, x) || !1) ? (I || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, pe, x), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, pe, x)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || C === n.memoizedProps && Q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || C === n.memoizedProps && Q === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = pe), m.props = o, m.state = pe, m.context = x, o = U) : (typeof m.componentDidUpdate != "function" || C === n.memoizedProps && Q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || C === n.memoizedProps && Q === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Uv(n, r, l, o, d, c);
  }
  function Uv(n, r, l, o, c, d) {
    Ve(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && Ev(r, l, !1), fn(n, r, d);
    o = r.stateNode, oy.current = r;
    var C = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = au(r, n.child, null, d), r.child = au(r, null, C, d)) : Gt(n, r, C, d), r.memoizedState = o.state, c && Ev(r, l, !0), r.child;
  }
  function Av(n) {
    var r = n.stateNode;
    r.pendingContext ? Si(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Si(n, r.context, !1), Zf(n, r.containerInfo);
  }
  function uc(n, r, l, o, c) {
    return xt(), Qf(c), r.flags |= 256, Gt(n, r, l, o), r.child;
  }
  var hl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function id(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function ld(n, r, l) {
    var o = r.pendingProps, c = De.current, d = !1, m = (r.flags & 128) !== 0, C;
    if ((C = m) || (C = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), C ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), rt(De, c & 1), n === null)
      return Ls(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Ao(m, o, 0, null), n = xl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = id(l), r.memoizedState = hl, n) : ud(r, m));
    if (c = n.memoizedState, c !== null && (C = c.dehydrated, C !== null))
      return sy(n, r, m, o, C, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, C = c.sibling;
      var x = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = x, r.deletions = null) : (o = Li(c, x), o.subtreeFlags = c.subtreeFlags & 14680064), C !== null ? d = Li(C, d) : (d = xl(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? id(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = hl, o;
    }
    return d = n.child, n = d.sibling, o = Li(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function ud(n, r) {
    return r = Ao({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function fu(n, r, l, o) {
    return o !== null && Qf(o), au(r, n.child, null, l), n = ud(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function sy(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = wo(Error(h(422))), fu(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Ao({ mode: "visible", children: o.children }, c, 0, null), d = xl(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && au(r, n.child, null, m), r.child.memoizedState = id(m), r.memoizedState = hl, d);
    if (!(r.mode & 1))
      return fu(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var C = o.dgst;
      return o = C, d = Error(h(419)), o = wo(d, o, void 0), fu(n, r, m, o);
    }
    if (C = (m & n.childLanes) !== 0, Bt || C) {
      if (o = wt, o !== null) {
        switch (m & -m) {
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, ja(n, c), _n(o, n, c, -1));
      }
      return Sd(), o = wo(Error(h(421))), fu(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = hy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Zn = aa(c.nextSibling), dr = r, mt = !0, Lr = null, n !== null && (Kn[Rn++] = sn, Kn[Rn++] = Va, Kn[Rn++] = Nr, sn = n.id, Va = n.overflow, Nr = r), r = ud(r, o.children), r.flags |= 4096, r);
  }
  function od(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), nn(n.return, r, l);
  }
  function oc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function sd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Gt(n, r, o.children, l), o = De.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && od(n, l, r);
            else if (n.tag === 19)
              od(n, l, r);
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
    if (rt(De, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && Rt(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), oc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Rt(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          oc(r, !0, l, null, d);
          break;
        case "together":
          oc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function wn(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function fn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Qa |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(h(153));
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
        Av(r), xt();
        break;
      case 5:
        be(r);
        break;
      case 1:
        Et(r.type) && Os(r);
        break;
      case 4:
        Zf(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        rt(ma, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (rt(De, De.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? ld(n, r, l) : (rt(De, De.current & 1), n = fn(n, r, l), n !== null ? n.sibling : null);
        rt(De, De.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return sd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), rt(De, De.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, vl(n, r, l);
    }
    return fn(n, r, l);
  }
  var Do, ml, Ar, Xt;
  Do = function(n, r) {
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
      n = r.stateNode, ll(ia.current);
      var d = null;
      switch (l) {
        case "input":
          c = Qn(n, c), o = Qn(n, o), d = [];
          break;
        case "select":
          c = ce({}, c, { value: void 0 }), o = ce({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Ii(n, c), o = Ii(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = _s);
      }
      Tn(l, o);
      var m;
      l = null;
      for (U in c)
        if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null)
          if (U === "style") {
            var C = c[U];
            for (m in C)
              C.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (M.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var x = o[U];
        if (C = c != null ? c[U] : void 0, o.hasOwnProperty(U) && x !== C && (x != null || C != null))
          if (U === "style")
            if (C) {
              for (m in C)
                !C.hasOwnProperty(m) || x && x.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in x)
                x.hasOwnProperty(m) && C[m] !== x[m] && (l || (l = {}), l[m] = x[m]);
            } else
              l || (d || (d = []), d.push(
                U,
                l
              )), l = x;
          else
            U === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, C = C ? C.__html : void 0, x != null && C !== x && (d = d || []).push(U, x)) : U === "children" ? typeof x != "string" && typeof x != "number" || (d = d || []).push(U, "" + x) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (M.hasOwnProperty(U) ? (x != null && U === "onScroll" && pt("scroll", n), d || C === x || (d = [])) : (d = d || []).push(U, x));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, Xt = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function ko(n, r) {
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
  function bn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function cy(n, r, l) {
    var o = r.pendingProps;
    switch (Pf(r), r.tag) {
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
        return bn(r), null;
      case 1:
        return Et(r.type) && Mr(), bn(r), null;
      case 3:
        return o = r.stateNode, bi(), nt(Mt), nt(Ne), Bs(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (zs(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Lr !== null && (Uo(Lr), Lr = null))), ml(n, r), bn(r), null;
      case 5:
        $e(r);
        var c = ll(iu.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Ar(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(h(166));
            return bn(r), null;
          }
          if (n = ll(ia.current), zs(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[va] = r, o[rl] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                pt("cancel", o), pt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                pt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < co.length; c++)
                  pt(co[c], o);
                break;
              case "source":
                pt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                pt(
                  "error",
                  o
                ), pt("load", o);
                break;
              case "details":
                pt("toggle", o);
                break;
              case "input":
                xr(o, d), pt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, pt("invalid", o);
                break;
              case "textarea":
                qr(o, d), pt("invalid", o);
            }
            Tn(l, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var C = d[m];
                m === "children" ? typeof C == "string" ? o.textContent !== C && (d.suppressHydrationWarning !== !0 && ks(o.textContent, C, n), c = ["children", C]) : typeof C == "number" && o.textContent !== "" + C && (d.suppressHydrationWarning !== !0 && ks(
                  o.textContent,
                  C,
                  n
                ), c = ["children", "" + C]) : M.hasOwnProperty(m) && C != null && m === "onScroll" && pt("scroll", o);
              }
            switch (l) {
              case "input":
                Tr(o), _a(o, d, !0);
                break;
              case "textarea":
                Tr(o), fa(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = _s);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = si(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[va] = r, n[rl] = o, Do(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Yt(l, o), l) {
                case "dialog":
                  pt("cancel", n), pt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  pt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < co.length; c++)
                    pt(co[c], n);
                  c = o;
                  break;
                case "source":
                  pt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  pt(
                    "error",
                    n
                  ), pt("load", n), c = o;
                  break;
                case "details":
                  pt("toggle", n), c = o;
                  break;
                case "input":
                  xr(n, o), c = Qn(n, o), pt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ce({}, o, { value: void 0 }), pt("invalid", n);
                  break;
                case "textarea":
                  qr(n, o), c = Ii(n, o), pt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Tn(l, c), C = c;
              for (d in C)
                if (C.hasOwnProperty(d)) {
                  var x = C[d];
                  d === "style" ? ft(n, x) : d === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, x != null && Yu(n, x)) : d === "children" ? typeof x == "string" ? (l !== "textarea" || x !== "") && ci(n, x) : typeof x == "number" && ci(n, "" + x) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (M.hasOwnProperty(d) ? x != null && d === "onScroll" && pt("scroll", n) : x != null && q(n, d, x, m));
                }
              switch (l) {
                case "input":
                  Tr(n), _a(n, o, !1);
                  break;
                case "textarea":
                  Tr(n), fa(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Xr(o.value));
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
                  typeof c.onClick == "function" && (n.onclick = _s);
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
        return bn(r), null;
      case 6:
        if (n && r.stateNode != null)
          Xt(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(h(166));
          if (l = ll(iu.current), ll(ia.current), zs(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[va] = r, (d = o.nodeValue !== l) && (n = dr, n !== null))
              switch (n.tag) {
                case 3:
                  ks(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && ks(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[va] = r, r.stateNode = o;
        }
        return bn(r), null;
      case 13:
        if (nt(De), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (mt && Zn !== null && r.mode & 1 && !(r.flags & 128))
            xv(), xt(), r.flags |= 98560, d = !1;
          else if (d = zs(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(h(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(h(317));
              d[va] = r;
            } else
              xt(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            bn(r), d = !1;
          } else
            Lr !== null && (Uo(Lr), Lr = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || De.current & 1 ? qt === 0 && (qt = 3) : Sd())), r.updateQueue !== null && (r.flags |= 4), bn(r), null);
      case 4:
        return bi(), ml(n, r), n === null && eu(r.stateNode.containerInfo), bn(r), null;
      case 10:
        return Ti(r.type._context), bn(r), null;
      case 17:
        return Et(r.type) && Mr(), bn(r), null;
      case 19:
        if (nt(De), d = r.memoizedState, d === null)
          return bn(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (o)
            ko(d, !1);
          else {
            if (qt !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (m = Rt(n), m !== null) {
                  for (r.flags |= 128, ko(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return rt(De, De.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Ot() > gu && (r.flags |= 128, o = !0, ko(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = Rt(m), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ko(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !mt)
                return bn(r), null;
            } else
              2 * Ot() - d.renderingStartTime > gu && l !== 1073741824 && (r.flags |= 128, o = !0, ko(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ot(), r.sibling = null, l = De.current, rt(De, o ? l & 1 | 2 : l & 1), r) : (bn(r), null);
      case 22:
      case 23:
        return gd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? hr & 1073741824 && (bn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : bn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(h(156, r.tag));
  }
  function cd(n, r) {
    switch (Pf(r), r.tag) {
      case 1:
        return Et(r.type) && Mr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return bi(), nt(Mt), nt(Ne), Bs(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return $e(r), null;
      case 13:
        if (nt(De), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(h(340));
          xt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return nt(De), null;
      case 4:
        return bi(), null;
      case 10:
        return Ti(r.type._context), null;
      case 22:
      case 23:
        return gd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var _o = !1, Wt = !1, Hv = typeof WeakSet == "function" ? WeakSet : Set, fe = null;
  function du(n, r) {
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
  function Oo(n, r, l) {
    try {
      l();
    } catch (o) {
      Lt(n, r, o);
    }
  }
  var Fv = !1;
  function Vv(n, r) {
    if (Uf = qi, n = xs(), Ua(n)) {
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
            var m = 0, C = -1, x = -1, U = 0, I = 0, X = n, Q = null;
            t:
              for (; ; ) {
                for (var ie; X !== l || c !== 0 && X.nodeType !== 3 || (C = m + c), X !== d || o !== 0 && X.nodeType !== 3 || (x = m + o), X.nodeType === 3 && (m += X.nodeValue.length), (ie = X.firstChild) !== null; )
                  Q = X, X = ie;
                for (; ; ) {
                  if (X === n)
                    break t;
                  if (Q === l && ++U === c && (C = m), Q === d && ++I === o && (x = m), (ie = X.nextSibling) !== null)
                    break;
                  X = Q, Q = X.parentNode;
                }
                X = ie;
              }
            l = C === -1 || x === -1 ? null : { start: C, end: x };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (tl = { focusedElem: n, selectionRange: l }, qi = !1, fe = r; fe !== null; )
      if (r = fe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, fe = n;
      else
        for (; fe !== null; ) {
          r = fe;
          try {
            var pe = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (pe !== null) {
                    var me = pe.memoizedProps, At = pe.memoizedState, k = r.stateNode, w = k.getSnapshotBeforeUpdate(r.elementType === r.type ? me : pr(r.type, me), At);
                    k.__reactInternalSnapshotBeforeUpdate = w;
                  }
                  break;
                case 3:
                  var N = r.stateNode.containerInfo;
                  N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(h(163));
              }
          } catch (K) {
            Lt(r, r.return, K);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, fe = n;
            break;
          }
          fe = r.return;
        }
    return pe = Fv, Fv = !1, pe;
  }
  function Mo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Oo(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function No(n, r) {
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
  function fd(n) {
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
  function dd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, dd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[va], delete r[rl], delete r[Ff], delete r[ry], delete r[Vf])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function jv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function sc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || jv(n.return))
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
  function pu(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = _s));
    else if (o !== 4 && (n = n.child, n !== null))
      for (pu(n, r, l), n = n.sibling; n !== null; )
        pu(n, r, l), n = n.sibling;
  }
  function ga(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (ga(n, r, l), n = n.sibling; n !== null; )
        ga(n, r, l), n = n.sibling;
  }
  var Ct = null, rn = !1;
  function Hr(n, r, l) {
    for (l = l.child; l !== null; )
      vu(n, r, l), l = l.sibling;
  }
  function vu(n, r, l) {
    if (Jr && typeof Jr.onCommitFiberUnmount == "function")
      try {
        Jr.onCommitFiberUnmount(Xu, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        Wt || du(l, r);
      case 6:
        var o = Ct, c = rn;
        Ct = null, Hr(n, r, l), Ct = o, rn = c, Ct !== null && (rn ? (n = Ct, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Ct.removeChild(l.stateNode));
        break;
      case 18:
        Ct !== null && (rn ? (n = Ct, l = l.stateNode, n.nodeType === 8 ? mi(n.parentNode, l) : n.nodeType === 1 && mi(n, l), Ju(n)) : mi(Ct, l.stateNode));
        break;
      case 4:
        o = Ct, c = rn, Ct = l.stateNode.containerInfo, rn = !0, Hr(n, r, l), Ct = o, rn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Wt && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Oo(l, r, m), c = c.next;
          } while (c !== o);
        }
        Hr(n, r, l);
        break;
      case 1:
        if (!Wt && (du(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (C) {
            Lt(l, r, C);
          }
        Hr(n, r, l);
        break;
      case 21:
        Hr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Wt = (o = Wt) || l.memoizedState !== null, Hr(n, r, l), Wt = o) : Hr(n, r, l);
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
      l === null && (l = n.stateNode = new Hv()), r.forEach(function(o) {
        var c = my.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function la(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, m = r, C = m;
          e:
            for (; C !== null; ) {
              switch (C.tag) {
                case 5:
                  Ct = C.stateNode, rn = !1;
                  break e;
                case 3:
                  Ct = C.stateNode.containerInfo, rn = !0;
                  break e;
                case 4:
                  Ct = C.stateNode.containerInfo, rn = !0;
                  break e;
              }
              C = C.return;
            }
          if (Ct === null)
            throw Error(h(160));
          vu(d, m, c), Ct = null, rn = !1;
          var x = c.alternate;
          x !== null && (x.return = null), c.return = null;
        } catch (U) {
          Lt(c, r, U);
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
        if (la(r, n), Sa(n), o & 4) {
          try {
            Mo(3, n, n.return), No(3, n);
          } catch (me) {
            Lt(n, n.return, me);
          }
          try {
            Mo(5, n, n.return);
          } catch (me) {
            Lt(n, n.return, me);
          }
        }
        break;
      case 1:
        la(r, n), Sa(n), o & 512 && l !== null && du(l, l.return);
        break;
      case 5:
        if (la(r, n), Sa(n), o & 512 && l !== null && du(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ci(c, "");
          } catch (me) {
            Lt(n, n.return, me);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, C = n.type, x = n.updateQueue;
          if (n.updateQueue = null, x !== null)
            try {
              C === "input" && d.type === "radio" && d.name != null && Wr(c, d), Yt(C, m);
              var U = Yt(C, d);
              for (m = 0; m < x.length; m += 2) {
                var I = x[m], X = x[m + 1];
                I === "style" ? ft(c, X) : I === "dangerouslySetInnerHTML" ? Yu(c, X) : I === "children" ? ci(c, X) : q(c, I, X, U);
              }
              switch (C) {
                case "input":
                  or(c, d);
                  break;
                case "textarea":
                  oi(c, d);
                  break;
                case "select":
                  var Q = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var ie = d.value;
                  ie != null ? ui(c, !!d.multiple, ie, !1) : Q !== !!d.multiple && (d.defaultValue != null ? ui(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : ui(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[rl] = d;
            } catch (me) {
              Lt(n, n.return, me);
            }
        }
        break;
      case 6:
        if (la(r, n), Sa(n), o & 4) {
          if (n.stateNode === null)
            throw Error(h(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (me) {
            Lt(n, n.return, me);
          }
        }
        break;
      case 3:
        if (la(r, n), Sa(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ju(r.containerInfo);
          } catch (me) {
            Lt(n, n.return, me);
          }
        break;
      case 4:
        la(r, n), Sa(n);
        break;
      case 13:
        la(r, n), Sa(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (hd = Ot())), o & 4 && Ya(n);
        break;
      case 22:
        if (I = l !== null && l.memoizedState !== null, n.mode & 1 ? (Wt = (U = Wt) || I, la(r, n), Wt = U) : la(r, n), Sa(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !I && n.mode & 1)
            for (fe = n, I = n.child; I !== null; ) {
              for (X = fe = I; fe !== null; ) {
                switch (Q = fe, ie = Q.child, Q.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Mo(4, Q, Q.return);
                    break;
                  case 1:
                    du(Q, Q.return);
                    var pe = Q.stateNode;
                    if (typeof pe.componentWillUnmount == "function") {
                      o = Q, l = Q.return;
                      try {
                        r = o, pe.props = r.memoizedProps, pe.state = r.memoizedState, pe.componentWillUnmount();
                      } catch (me) {
                        Lt(o, l, me);
                      }
                    }
                    break;
                  case 5:
                    du(Q, Q.return);
                    break;
                  case 22:
                    if (Q.memoizedState !== null) {
                      pd(X);
                      continue;
                    }
                }
                ie !== null ? (ie.return = Q, fe = ie) : pd(X);
              }
              I = I.sibling;
            }
          e:
            for (I = null, X = n; ; ) {
              if (X.tag === 5) {
                if (I === null) {
                  I = X;
                  try {
                    c = X.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (C = X.stateNode, x = X.memoizedProps.style, m = x != null && x.hasOwnProperty("display") ? x.display : null, C.style.display = Ye("display", m));
                  } catch (me) {
                    Lt(n, n.return, me);
                  }
                }
              } else if (X.tag === 6) {
                if (I === null)
                  try {
                    X.stateNode.nodeValue = U ? "" : X.memoizedProps;
                  } catch (me) {
                    Lt(n, n.return, me);
                  }
              } else if ((X.tag !== 22 && X.tag !== 23 || X.memoizedState === null || X === n) && X.child !== null) {
                X.child.return = X, X = X.child;
                continue;
              }
              if (X === n)
                break e;
              for (; X.sibling === null; ) {
                if (X.return === null || X.return === n)
                  break e;
                I === X && (I = null), X = X.return;
              }
              I === X && (I = null), X.sibling.return = X.return, X = X.sibling;
            }
        }
        break;
      case 19:
        la(r, n), Sa(n), o & 4 && Ya(n);
        break;
      case 21:
        break;
      default:
        la(
          r,
          n
        ), Sa(n);
    }
  }
  function Sa(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (jv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(h(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ci(c, ""), o.flags &= -33);
            var d = sc(n);
            ga(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, C = sc(n);
            pu(n, C, m);
            break;
          default:
            throw Error(h(161));
        }
      } catch (x) {
        Lt(n, n.return, x);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function $v(n, r, l) {
    fe = n, hu(n);
  }
  function hu(n, r, l) {
    for (var o = (n.mode & 1) !== 0; fe !== null; ) {
      var c = fe, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || _o;
        if (!m) {
          var C = c.alternate, x = C !== null && C.memoizedState !== null || Wt;
          C = _o;
          var U = Wt;
          if (_o = m, (Wt = x) && !U)
            for (fe = c; fe !== null; )
              m = fe, x = m.child, m.tag === 22 && m.memoizedState !== null ? Yv(c) : x !== null ? (x.return = m, fe = x) : Yv(c);
          for (; d !== null; )
            fe = d, hu(d), d = d.sibling;
          fe = c, _o = C, Wt = U;
        }
        Pv(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, fe = d) : Pv(n);
    }
  }
  function Pv(n) {
    for (; fe !== null; ) {
      var r = fe;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Wt || No(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !Wt)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : pr(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && il(r, d, o);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  il(r, m, l);
                }
                break;
              case 5:
                var C = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = C;
                  var x = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      x.autoFocus && l.focus();
                      break;
                    case "img":
                      x.src && (l.src = x.src);
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
                  var U = r.alternate;
                  if (U !== null) {
                    var I = U.memoizedState;
                    if (I !== null) {
                      var X = I.dehydrated;
                      X !== null && Ju(X);
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
                throw Error(h(163));
            }
          Wt || r.flags & 512 && fd(r);
        } catch (Q) {
          Lt(r, r.return, Q);
        }
      }
      if (r === n) {
        fe = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, fe = l;
        break;
      }
      fe = r.return;
    }
  }
  function pd(n) {
    for (; fe !== null; ) {
      var r = fe;
      if (r === n) {
        fe = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, fe = l;
        break;
      }
      fe = r.return;
    }
  }
  function Yv(n) {
    for (; fe !== null; ) {
      var r = fe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              No(4, r);
            } catch (x) {
              Lt(r, l, x);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (x) {
                Lt(r, c, x);
              }
            }
            var d = r.return;
            try {
              fd(r);
            } catch (x) {
              Lt(r, d, x);
            }
            break;
          case 5:
            var m = r.return;
            try {
              fd(r);
            } catch (x) {
              Lt(r, m, x);
            }
        }
      } catch (x) {
        Lt(r, r.return, x);
      }
      if (r === n) {
        fe = null;
        break;
      }
      var C = r.sibling;
      if (C !== null) {
        C.return = r.return, fe = C;
        break;
      }
      fe = r.return;
    }
  }
  var cc = Math.ceil, Lo = ye.ReactCurrentDispatcher, vd = ye.ReactCurrentOwner, Dn = ye.ReactCurrentBatchConfig, Ie = 0, wt = null, Nt = null, an = 0, hr = 0, mu = Fe(0), qt = 0, zo = null, Qa = 0, fc = 0, yu = 0, yl = null, zn = null, hd = 0, gu = 1 / 0, Ia = null, dc = !1, gl = null, Ea = null, Oi = !1, Mi = null, pc = 0, Su = 0, vc = null, Sl = -1, El = 0;
  function kn() {
    return Ie & 6 ? Ot() : Sl !== -1 ? Sl : Sl = Ot();
  }
  function $t(n) {
    return n.mode & 1 ? Ie & 2 && an !== 0 ? an & -an : Us.transition !== null ? (El === 0 && (El = fs()), El) : (n = lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : hf(n.type)), n) : 1;
  }
  function _n(n, r, l, o) {
    if (50 < Su)
      throw Su = 0, vc = null, Error(h(185));
    Wi(n, l, o), (!(Ie & 2) || n !== wt) && (n === wt && (!(Ie & 2) && (fc |= l), qt === 4 && Fr(n, an)), On(n, o), l === 1 && Ie === 0 && !(r.mode & 1) && (gu = Ot() + 500, tn && Wn()));
  }
  function On(n, r) {
    var l = n.callbackNode;
    cs(n, r);
    var o = ea(n, n === wt ? an : 0);
    if (o === 0)
      l !== null && Mp(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Mp(l), r === 1)
        n.tag === 0 ? Bf(Qv.bind(null, n)) : jf(Qv.bind(null, n)), Hf(function() {
          !(Ie & 6) && Wn();
        }), l = null;
      else {
        switch (df(o)) {
          case 1:
            l = Ma;
            break;
          case 4:
            l = Qe;
            break;
          case 16:
            l = fi;
            break;
          case 536870912:
            l = of;
            break;
          default:
            l = fi;
        }
        l = Cd(l, Eu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Eu(n, r) {
    if (Sl = -1, El = 0, Ie & 6)
      throw Error(h(327));
    var l = n.callbackNode;
    if (Tu() && n.callbackNode !== l)
      return null;
    var o = ea(n, n === wt ? an : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = mc(n, o);
    else {
      r = o;
      var c = Ie;
      Ie |= 2;
      var d = hc();
      (wt !== n || an !== r) && (Ia = null, gu = Ot() + 500, Cl(n, r));
      do
        try {
          dy();
          break;
        } catch (C) {
          Iv(n, C);
        }
      while (1);
      Gf(), Lo.current = d, Ie = c, Nt !== null ? r = 0 : (wt = null, an = 0, r = qt);
    }
    if (r !== 0) {
      if (r === 2 && (c = cf(n), c !== 0 && (o = c, r = md(n, c))), r === 1)
        throw l = zo, Cl(n, 0), Fr(n, o), On(n, Ot()), l;
      if (r === 6)
        Fr(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !yd(c) && (r = mc(n, o), r === 2 && (d = cf(n), d !== 0 && (o = d, r = md(n, d))), r === 1))
          throw l = zo, Cl(n, 0), Fr(n, o), On(n, Ot()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(h(345));
          case 2:
            Tl(n, zn, Ia);
            break;
          case 3:
            if (Fr(n, o), (o & 130023424) === o && (r = hd + 500 - Ot(), 10 < r)) {
              if (ea(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                kn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = nl(Tl.bind(null, n, zn, Ia), r);
              break;
            }
            Tl(n, zn, Ia);
            break;
          case 4:
            if (Fr(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - wr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Ot() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * cc(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = nl(Tl.bind(null, n, zn, Ia), o);
              break;
            }
            Tl(n, zn, Ia);
            break;
          case 5:
            Tl(n, zn, Ia);
            break;
          default:
            throw Error(h(329));
        }
      }
    }
    return On(n, Ot()), n.callbackNode === l ? Eu.bind(null, n) : null;
  }
  function md(n, r) {
    var l = yl;
    return n.current.memoizedState.isDehydrated && (Cl(n, r).flags |= 256), n = mc(n, r), n !== 2 && (r = zn, zn = l, r !== null && Uo(r)), n;
  }
  function Uo(n) {
    zn === null ? zn = n : zn.push.apply(zn, n);
  }
  function yd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!kr(d(), c))
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
    for (r &= ~yu, r &= ~fc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - wr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Qv(n) {
    if (Ie & 6)
      throw Error(h(327));
    Tu();
    var r = ea(n, 0);
    if (!(r & 1))
      return On(n, Ot()), null;
    var l = mc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = cf(n);
      o !== 0 && (r = o, l = md(n, o));
    }
    if (l === 1)
      throw l = zo, Cl(n, 0), Fr(n, r), On(n, Ot()), l;
    if (l === 6)
      throw Error(h(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Tl(n, zn, Ia), On(n, Ot()), null;
  }
  function Cu(n, r) {
    var l = Ie;
    Ie |= 1;
    try {
      return n(r);
    } finally {
      Ie = l, Ie === 0 && (gu = Ot() + 500, tn && Wn());
    }
  }
  function Ni(n) {
    Mi !== null && Mi.tag === 0 && !(Ie & 6) && Tu();
    var r = Ie;
    Ie |= 1;
    var l = Dn.transition, o = lt;
    try {
      if (Dn.transition = null, lt = 1, n)
        return n();
    } finally {
      lt = o, Dn.transition = l, Ie = r, !(Ie & 6) && Wn();
    }
  }
  function gd() {
    hr = mu.current, nt(mu);
  }
  function Cl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Sv(l)), Nt !== null)
      for (l = Nt.return; l !== null; ) {
        var o = l;
        switch (Pf(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && Mr();
            break;
          case 3:
            bi(), nt(Mt), nt(Ne), Bs();
            break;
          case 5:
            $e(o);
            break;
          case 4:
            bi();
            break;
          case 13:
            nt(De);
            break;
          case 19:
            nt(De);
            break;
          case 10:
            Ti(o.type._context);
            break;
          case 22:
          case 23:
            gd();
        }
        l = l.return;
      }
    if (wt = n, Nt = n = Li(n.current, null), an = hr = r, qt = 0, zo = null, yu = fc = Qa = 0, zn = yl = null, cn !== null) {
      for (r = 0; r < cn.length; r++)
        if (l = cn[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, o.next = m;
          }
          l.pending = o;
        }
      cn = null;
    }
    return n;
  }
  function Iv(n, r) {
    do {
      var l = Nt;
      try {
        if (Gf(), $s.current = ac, ke) {
          for (var o = yt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          ke = !1;
        }
        if (ul = 0, Xe = F = yt = null, ya = !1, vr = 0, vd.current = null, l === null || l.return === null) {
          qt = 1, zo = r, Nt = null;
          break;
        }
        e: {
          var d = n, m = l.return, C = l, x = r;
          if (r = an, C.flags |= 32768, x !== null && typeof x == "object" && typeof x.then == "function") {
            var U = x, I = C, X = I.tag;
            if (!(I.mode & 1) && (X === 0 || X === 11 || X === 15)) {
              var Q = I.alternate;
              Q ? (I.updateQueue = Q.updateQueue, I.memoizedState = Q.memoizedState, I.lanes = Q.lanes) : (I.updateQueue = null, I.memoizedState = null);
            }
            var ie = nd(m);
            if (ie !== null) {
              ie.flags &= -257, rd(ie, m, C, d, r), ie.mode & 1 && zv(d, U, r), r = ie, x = U;
              var pe = r.updateQueue;
              if (pe === null) {
                var me = /* @__PURE__ */ new Set();
                me.add(x), r.updateQueue = me;
              } else
                pe.add(x);
              break e;
            } else {
              if (!(r & 1)) {
                zv(d, U, r), Sd();
                break e;
              }
              x = Error(h(426));
            }
          } else if (mt && C.mode & 1) {
            var At = nd(m);
            if (At !== null) {
              !(At.flags & 65536) && (At.flags |= 256), rd(At, m, C, d, r), Qf(su(x, C));
              break e;
            }
          }
          d = x = su(x, C), qt !== 4 && (qt = 2), yl === null ? yl = [d] : yl.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = Lv(d, x, r);
                qf(d, k);
                break e;
              case 1:
                C = x;
                var w = d.type, N = d.stateNode;
                if (!(d.flags & 128) && (typeof w.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (Ea === null || !Ea.has(N)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var K = bo(d, C, r);
                  qf(d, K);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Ed(l);
      } catch (ge) {
        r = ge, Nt === l && l !== null && (Nt = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function hc() {
    var n = Lo.current;
    return Lo.current = ac, n === null ? ac : n;
  }
  function Sd() {
    (qt === 0 || qt === 3 || qt === 2) && (qt = 4), wt === null || !(Qa & 268435455) && !(fc & 268435455) || Fr(wt, an);
  }
  function mc(n, r) {
    var l = Ie;
    Ie |= 2;
    var o = hc();
    (wt !== n || an !== r) && (Ia = null, Cl(n, r));
    do
      try {
        fy();
        break;
      } catch (c) {
        Iv(n, c);
      }
    while (1);
    if (Gf(), Ie = l, Lo.current = o, Nt !== null)
      throw Error(h(261));
    return wt = null, an = 0, qt;
  }
  function fy() {
    for (; Nt !== null; )
      Gv(Nt);
  }
  function dy() {
    for (; Nt !== null && !Um(); )
      Gv(Nt);
  }
  function Gv(n) {
    var r = Wv(n.alternate, n, hr);
    n.memoizedProps = n.pendingProps, r === null ? Ed(n) : Nt = r, vd.current = null;
  }
  function Ed(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = cd(l, r), l !== null) {
          l.flags &= 32767, Nt = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          qt = 6, Nt = null;
          return;
        }
      } else if (l = cy(l, r, hr), l !== null) {
        Nt = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Nt = r;
        return;
      }
      Nt = r = n;
    } while (r !== null);
    qt === 0 && (qt = 5);
  }
  function Tl(n, r, l) {
    var o = lt, c = Dn.transition;
    try {
      Dn.transition = null, lt = 1, py(n, r, l, o);
    } finally {
      Dn.transition = c, lt = o;
    }
    return null;
  }
  function py(n, r, l, o) {
    do
      Tu();
    while (Mi !== null);
    if (Ie & 6)
      throw Error(h(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(h(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Vm(n, d), n === wt && (Nt = wt = null, an = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Oi || (Oi = !0, Cd(fi, function() {
      return Tu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Dn.transition, Dn.transition = null;
      var m = lt;
      lt = 1;
      var C = Ie;
      Ie |= 4, vd.current = null, Vv(n, l), Bv(l, n), Rs(tl), qi = !!Uf, tl = Uf = null, n.current = l, $v(l), Am(), Ie = C, lt = m, Dn.transition = d;
    } else
      n.current = l;
    if (Oi && (Oi = !1, Mi = n, pc = c), d = n.pendingLanes, d === 0 && (Ea = null), Lp(l.stateNode), On(n, Ot()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (dc)
      throw dc = !1, n = gl, gl = null, n;
    return pc & 1 && n.tag !== 0 && Tu(), d = n.pendingLanes, d & 1 ? n === vc ? Su++ : (Su = 0, vc = n) : Su = 0, Wn(), null;
  }
  function Tu() {
    if (Mi !== null) {
      var n = df(pc), r = Dn.transition, l = lt;
      try {
        if (Dn.transition = null, lt = 16 > n ? 16 : n, Mi === null)
          var o = !1;
        else {
          if (n = Mi, Mi = null, pc = 0, Ie & 6)
            throw Error(h(331));
          var c = Ie;
          for (Ie |= 4, fe = n.current; fe !== null; ) {
            var d = fe, m = d.child;
            if (fe.flags & 16) {
              var C = d.deletions;
              if (C !== null) {
                for (var x = 0; x < C.length; x++) {
                  var U = C[x];
                  for (fe = U; fe !== null; ) {
                    var I = fe;
                    switch (I.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Mo(8, I, d);
                    }
                    var X = I.child;
                    if (X !== null)
                      X.return = I, fe = X;
                    else
                      for (; fe !== null; ) {
                        I = fe;
                        var Q = I.sibling, ie = I.return;
                        if (dd(I), I === U) {
                          fe = null;
                          break;
                        }
                        if (Q !== null) {
                          Q.return = ie, fe = Q;
                          break;
                        }
                        fe = ie;
                      }
                  }
                }
                var pe = d.alternate;
                if (pe !== null) {
                  var me = pe.child;
                  if (me !== null) {
                    pe.child = null;
                    do {
                      var At = me.sibling;
                      me.sibling = null, me = At;
                    } while (me !== null);
                  }
                }
                fe = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null)
              m.return = d, fe = m;
            else
              e:
                for (; fe !== null; ) {
                  if (d = fe, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Mo(9, d, d.return);
                    }
                  var k = d.sibling;
                  if (k !== null) {
                    k.return = d.return, fe = k;
                    break e;
                  }
                  fe = d.return;
                }
          }
          var w = n.current;
          for (fe = w; fe !== null; ) {
            m = fe;
            var N = m.child;
            if (m.subtreeFlags & 2064 && N !== null)
              N.return = m, fe = N;
            else
              e:
                for (m = w; fe !== null; ) {
                  if (C = fe, C.flags & 2048)
                    try {
                      switch (C.tag) {
                        case 0:
                        case 11:
                        case 15:
                          No(9, C);
                      }
                    } catch (ge) {
                      Lt(C, C.return, ge);
                    }
                  if (C === m) {
                    fe = null;
                    break e;
                  }
                  var K = C.sibling;
                  if (K !== null) {
                    K.return = C.return, fe = K;
                    break e;
                  }
                  fe = C.return;
                }
          }
          if (Ie = c, Wn(), Jr && typeof Jr.onPostCommitFiberRoot == "function")
            try {
              Jr.onPostCommitFiberRoot(Xu, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        lt = l, Dn.transition = r;
      }
    }
    return !1;
  }
  function Xv(n, r, l) {
    r = su(l, r), r = Lv(n, r, 1), n = Ri(n, r, 1), r = kn(), n !== null && (Wi(n, 1, r), On(n, r));
  }
  function Lt(n, r, l) {
    if (n.tag === 3)
      Xv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Xv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ea === null || !Ea.has(o))) {
            n = su(l, n), n = bo(r, n, 1), r = Ri(r, n, 1), n = kn(), r !== null && (Wi(r, 1, n), On(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function vy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = kn(), n.pingedLanes |= n.suspendedLanes & l, wt === n && (an & l) === l && (qt === 4 || qt === 3 && (an & 130023424) === an && 500 > Ot() - hd ? Cl(n, 0) : yu |= l), On(n, r);
  }
  function yc(n, r) {
    r === 0 && (n.mode & 1 ? (r = Yl, Yl <<= 1, !(Yl & 130023424) && (Yl = 4194304)) : r = 1);
    var l = kn();
    n = ja(n, r), n !== null && (Wi(n, r, l), On(n, l));
  }
  function hy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), yc(n, l);
  }
  function my(n, r) {
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
        throw Error(h(314));
    }
    o !== null && o.delete(r), yc(n, l);
  }
  var Wv;
  Wv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Mt.current)
        Bt = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return Bt = !1, Pa(n, r, l);
        Bt = !!(n.flags & 131072);
      }
    else
      Bt = !1, mt && r.flags & 1048576 && $f(r, nu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        wn(n, r), n = r.pendingProps;
        var c = Or(r, Ne.current);
        ee(r, l), c = Di(null, r, o, n, c, l);
        var d = cl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Et(o) ? (d = !0, Os(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Wf(r), c.updater = Fs, r.stateNode = c, c._reactInternals = r, Vs(r, o, n, l), r = Uv(null, r, o, !0, d, l)) : (r.tag = 0, mt && d && Ms(r), Gt(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (wn(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = gy(o), n = pr(o, n), c) {
            case 0:
              r = cu(null, r, o, n, l);
              break e;
            case 1:
              r = ad(null, r, o, n, l);
              break e;
            case 11:
              r = _i(null, r, o, n, l);
              break e;
            case 14:
              r = lc(null, r, o, pr(o.type, n), l);
              break e;
          }
          throw Error(h(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : pr(o, c), cu(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : pr(o, c), ad(n, r, o, c, l);
      case 3:
        e: {
          if (Av(r), n === null)
            throw Error(h(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, It(n, r), wi(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = su(Error(h(423)), r), r = uc(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = su(Error(h(424)), r), r = uc(n, r, o, l, c);
              break e;
            } else
              for (Zn = aa(r.stateNode.containerInfo.firstChild), dr = r, mt = !0, Lr = null, l = Mv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (xt(), o === c) {
              r = fn(n, r, l);
              break e;
            }
            Gt(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return be(r), n === null && Ls(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, vo(o, c) ? m = null : d !== null && vo(o, d) && (r.flags |= 32), Ve(n, r), Gt(n, r, m, l), r.child;
      case 6:
        return n === null && Ls(r), null;
      case 13:
        return ld(n, r, l);
      case 4:
        return Zf(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = au(r, null, o, l) : Gt(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : pr(o, c), _i(n, r, o, c, l);
      case 7:
        return Gt(n, r, r.pendingProps, l), r.child;
      case 8:
        return Gt(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Gt(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, rt(ma, o._currentValue), o._currentValue = m, d !== null)
            if (kr(d.value, m)) {
              if (d.children === c.children && !Mt.current) {
                r = fn(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var C = d.dependencies;
                if (C !== null) {
                  m = d.child;
                  for (var x = C.firstContext; x !== null; ) {
                    if (x.context === o) {
                      if (d.tag === 1) {
                        x = Ba(-1, l & -l), x.tag = 2;
                        var U = d.updateQueue;
                        if (U !== null) {
                          U = U.shared;
                          var I = U.pending;
                          I === null ? x.next = x : (x.next = I.next, I.next = x), U.pending = x;
                        }
                      }
                      d.lanes |= l, x = d.alternate, x !== null && (x.lanes |= l), nn(
                        d.return,
                        l,
                        r
                      ), C.lanes |= l;
                      break;
                    }
                    x = x.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(h(341));
                  m.lanes |= l, C = m.alternate, C !== null && (C.lanes |= l), nn(m, l, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          Gt(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, ee(r, l), c = Ut(c), o = o(c), r.flags |= 1, Gt(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = pr(o, r.pendingProps), c = pr(o.type, c), lc(n, r, o, c, l);
      case 15:
        return tr(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : pr(o, c), wn(n, r), r.tag = 1, Et(o) ? (n = !0, Os(r)) : n = !1, ee(r, l), Dv(r, o, c), Vs(r, o, c, l), Uv(null, r, o, !0, n, l);
      case 19:
        return sd(n, r, l);
      case 22:
        return vl(n, r, l);
    }
    throw Error(h(156, r.tag));
  };
  function Cd(n, r) {
    return uf(n, r);
  }
  function yy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Vr(n, r, l, o) {
    return new yy(n, r, l, o);
  }
  function Td(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function gy(n) {
    if (typeof n == "function")
      return Td(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === on)
        return 11;
      if (n === Mn)
        return 14;
    }
    return 2;
  }
  function Li(n, r) {
    var l = n.alternate;
    return l === null ? (l = Vr(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function gc(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function")
      Td(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case Be:
            return xl(l.children, c, d, r);
          case En:
            m = 8, c |= 8;
            break;
          case Zt:
            return n = Vr(12, l, r, c | 2), n.elementType = Zt, n.lanes = d, n;
          case je:
            return n = Vr(13, l, r, c), n.elementType = je, n.lanes = d, n;
          case tt:
            return n = Vr(19, l, r, c), n.elementType = tt, n.lanes = d, n;
          case Cr:
            return Ao(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Tt:
                  m = 10;
                  break e;
                case ze:
                  m = 9;
                  break e;
                case on:
                  m = 11;
                  break e;
                case Mn:
                  m = 14;
                  break e;
                case Dt:
                  m = 16, o = null;
                  break e;
              }
            throw Error(h(130, n == null ? n : typeof n, ""));
        }
    return r = Vr(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function xl(n, r, l, o) {
    return n = Vr(7, n, o, r), n.lanes = l, n;
  }
  function Ao(n, r, l, o) {
    return n = Vr(22, n, o, r), n.elementType = Cr, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Ho(n, r, l) {
    return n = Vr(6, n, null, r), n.lanes = l, n;
  }
  function Rl(n, r, l) {
    return r = Vr(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Sy(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ff(0), this.expirationTimes = ff(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ff(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Sc(n, r, l, o, c, d, m, C, x) {
    return n = new Sy(n, r, l, C, x), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Vr(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Wf(d), n;
  }
  function qv(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ke, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function xd(n) {
    if (!n)
      return ha;
    n = n._reactInternals;
    e: {
      if (pa(n) !== n || n.tag !== 1)
        throw Error(h(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Et(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(h(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Et(l))
        return yo(n, l, r);
    }
    return r;
  }
  function Kv(n, r, l, o, c, d, m, C, x) {
    return n = Sc(l, o, !0, n, c, d, m, C, x), n.context = xd(null), l = n.current, o = kn(), c = $t(l), d = Ba(o, c), d.callback = r ?? null, Ri(l, d, c), n.current.lanes = c, Wi(n, c, o), On(n, o), n;
  }
  function Fo(n, r, l, o) {
    var c = r.current, d = kn(), m = $t(c);
    return l = xd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Ba(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ri(c, r, m), n !== null && (_n(n, c, m, d), Hs(n, c, m)), m;
  }
  function Ec(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Zv(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Rd(n, r) {
    Zv(n, r), (n = n.alternate) && Zv(n, r);
  }
  function Jv() {
    return null;
  }
  var wd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Cc(n) {
    this._internalRoot = n;
  }
  Ga.prototype.render = Cc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(h(409));
    Fo(n, r, null, null);
  }, Ga.prototype.unmount = Cc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ni(function() {
        Fo(null, n, null, null);
      }), r[Fa] = null;
    }
  };
  function Ga(n) {
    this._internalRoot = n;
  }
  Ga.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Hp();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < ot.length && r !== 0 && r < ot[l].priority; l++)
        ;
      ot.splice(l, 0, n), l === 0 && Fp(n);
    }
  };
  function bd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Tc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function eh() {
  }
  function Ey(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = Ec(m);
          d.call(U);
        };
      }
      var m = Kv(r, o, n, 0, null, !1, !1, "", eh);
      return n._reactRootContainer = m, n[Fa] = m.current, eu(n.nodeType === 8 ? n.parentNode : n), Ni(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var C = o;
      o = function() {
        var U = Ec(x);
        C.call(U);
      };
    }
    var x = Sc(n, 0, !1, null, null, !1, !1, "", eh);
    return n._reactRootContainer = x, n[Fa] = x.current, eu(n.nodeType === 8 ? n.parentNode : n), Ni(function() {
      Fo(r, x, l, o);
    }), x;
  }
  function xc(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var C = c;
        c = function() {
          var x = Ec(m);
          C.call(x);
        };
      }
      Fo(r, m, n, c);
    } else
      m = Ey(l, r, n, c, o);
    return Ec(m);
  }
  Ap = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Xi(r.pendingLanes);
          l !== 0 && (Wu(r, l | 1), On(r, Ot()), !(Ie & 6) && (gu = Ot() + 500, Wn()));
        }
        break;
      case 13:
        Ni(function() {
          var o = ja(n, 1);
          if (o !== null) {
            var c = kn();
            _n(o, n, 1, c);
          }
        }), Rd(n, 1);
    }
  }, ds = function(n) {
    if (n.tag === 13) {
      var r = ja(n, 134217728);
      if (r !== null) {
        var l = kn();
        _n(r, n, 134217728, l);
      }
      Rd(n, 134217728);
    }
  }, dt = function(n) {
    if (n.tag === 13) {
      var r = $t(n), l = ja(n, r);
      if (l !== null) {
        var o = kn();
        _n(l, n, r, o);
      }
      Rd(n, r);
    }
  }, Hp = function() {
    return lt;
  }, pf = function(n, r) {
    var l = lt;
    try {
      return lt = n, r();
    } finally {
      lt = l;
    }
  }, da = function(n, r, l) {
    switch (r) {
      case "input":
        if (or(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Te(o);
              if (!c)
                throw Error(h(90));
              ka(o), or(o, c);
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
  }, Dp = Cu, kp = Ni;
  var Cy = { usingClientEntryPoint: !1, Events: [mo, tu, Te, is, ls, Cu] }, xu = { findFiberByHostInstance: _r, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Ty = { bundleType: xu.bundleType, version: xu.version, rendererPackageName: xu.rendererPackageName, rendererConfig: xu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ye.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = _p(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: xu.findFiberByHostInstance || Jv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Rc.isDisabled && Rc.supportsFiber)
      try {
        Xu = Rc.inject(Ty), Jr = Rc;
      } catch {
      }
  }
  return Qr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cy, Qr.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!bd(r))
      throw Error(h(200));
    return qv(n, r, null, l);
  }, Qr.createRoot = function(n, r) {
    if (!bd(n))
      throw Error(h(299));
    var l = !1, o = "", c = wd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Sc(n, 1, !1, null, null, l, !1, o, c), n[Fa] = r.current, eu(n.nodeType === 8 ? n.parentNode : n), new Cc(r);
  }, Qr.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(h(188)) : (n = Object.keys(n).join(","), Error(h(268, n)));
    return n = _p(r), n = n === null ? null : n.stateNode, n;
  }, Qr.flushSync = function(n) {
    return Ni(n);
  }, Qr.hydrate = function(n, r, l) {
    if (!Tc(r))
      throw Error(h(200));
    return xc(null, n, r, !0, l);
  }, Qr.hydrateRoot = function(n, r, l) {
    if (!bd(n))
      throw Error(h(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = wd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Kv(r, null, n, 1, l ?? null, c, !1, d, m), n[Fa] = r.current, eu(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Ga(r);
  }, Qr.render = function(n, r, l) {
    if (!Tc(r))
      throw Error(h(200));
    return xc(null, n, r, !1, l);
  }, Qr.unmountComponentAtNode = function(n) {
    if (!Tc(n))
      throw Error(h(40));
    return n._reactRootContainer ? (Ni(function() {
      xc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Fa] = null;
      });
    }), !0) : !1;
  }, Qr.unstable_batchedUpdates = Cu, Qr.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Tc(l))
      throw Error(h(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(h(38));
    return xc(n, r, l, !1, o);
  }, Qr.version = "18.2.0-next-9e3b772b8-20220608", Qr;
}
var Ir = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oT;
function wk() {
  return oT || (oT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var T = pT, g = Rp, h = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, D = !1;
    function M(e) {
      D = e;
    }
    function V(e) {
      if (!D) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        J("warn", e, a);
      }
    }
    function S(e) {
      if (!D) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        J("error", e, a);
      }
    }
    function J(e, t, a) {
      {
        var i = h.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var G = 0, P = 1, de = 2, $ = 3, Y = 4, Z = 5, xe = 6, Me = 7, Pe = 8, se = 9, B = 10, q = 11, ye = 12, Ee = 13, Ke = 14, Be = 15, En = 16, Zt = 17, Tt = 18, ze = 19, on = 21, je = 22, tt = 23, Mn = 24, Dt = 25, Cr = !0, ne = !1, _e = !1, ce = !1, it = !1, ut = !0, Yn = !1, ur = !1, ii = !0, Nn = !0, li = !0, Xr = /* @__PURE__ */ new Set(), ca = {}, Pu = {};
    function Tr(e, t) {
      ka(e, t), ka(e + "Capture", t);
    }
    function ka(e, t) {
      ca[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ca[e] = t;
      {
        var a = e.toLowerCase();
        Pu[a] = e, e === "onDoubleClick" && (Pu.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Xr.add(t[i]);
    }
    var Cn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Qn = Object.prototype.hasOwnProperty;
    function xr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Wr(e) {
      try {
        return or(e), !1;
      } catch {
        return !0;
      }
    }
    function or(e) {
      return "" + e;
    }
    function _a(e, t) {
      if (Wr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, xr(e)), or(e);
    }
    function Vl(e) {
      if (Wr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xr(e)), or(e);
    }
    function Qi(e, t) {
      if (Wr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, xr(e)), or(e);
    }
    function ui(e, t) {
      if (Wr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, xr(e)), or(e);
    }
    function Ii(e) {
      if (Wr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", xr(e)), or(e);
    }
    function qr(e) {
      if (Wr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", xr(e)), or(e);
    }
    var oi = 0, fa = 1, si = 2, In = 3, Kr = 4, Yu = 5, ci = 6, re = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", we = re + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ye = new RegExp("^[" + re + "][" + we + "]*$"), ft = {}, zt = {};
    function Tn(e) {
      return Qn.call(zt, e) ? !0 : Qn.call(ft, e) ? !1 : Ye.test(e) ? (zt[e] = !0, !0) : (ft[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function Yt(e, t, a) {
      return t !== null ? t.type === oi : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Rr(e, t, a, i) {
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
      if (t === null || typeof t > "u" || Rr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case In:
            return !t;
          case Kr:
            return t === !1;
          case Yu:
            return isNaN(t);
          case ci:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function da(e) {
      return _t.hasOwnProperty(e) ? _t[e] : null;
    }
    function Ft(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === si || t === In || t === Kr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var _t = {}, bp = [
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
    bp.forEach(function(e) {
      _t[e] = new Ft(
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
      _t[t] = new Ft(
        t,
        fa,
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
      _t[e] = new Ft(
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
      _t[e] = new Ft(
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
      _t[e] = new Ft(
        e,
        In,
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
      _t[e] = new Ft(
        e,
        In,
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
      _t[e] = new Ft(
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
      _t[e] = new Ft(
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
      _t[e] = new Ft(
        e,
        Yu,
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
    var is = /[\-\:]([a-z])/g, ls = function(e) {
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
      var t = e.replace(is, ls);
      _t[t] = new Ft(
        t,
        fa,
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
      var t = e.replace(is, ls);
      _t[t] = new Ft(
        t,
        fa,
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
      var t = e.replace(is, ls);
      _t[t] = new Ft(
        t,
        fa,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      _t[e] = new Ft(
        e,
        fa,
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
    _t[Dp] = new Ft(
      "xlinkHref",
      fa,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      _t[e] = new Ft(
        e,
        fa,
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
    var kp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, us = !1;
    function rf(e) {
      !us && kp.test(e) && (us = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Qu(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        _a(a, t), i.sanitizeURL && rf("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Kr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : kt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (kt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === In)
            return a;
          f = e.getAttribute(s);
        }
        return kt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function os(e, t, a, i) {
      {
        if (!Tn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return _a(a, t), u === "" + a ? a : u;
      }
    }
    function Gi(e, t, a, i) {
      var u = da(t);
      if (!Yt(t, u, i)) {
        if (kt(t, a, u, i) && (a = null), i || u === null) {
          if (Tn(t)) {
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
            e[p] = v === In ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, E = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, R;
          b === In || b === Kr && a === !0 ? R = "" : (_a(a, y), R = "" + a, u.sanitizeURL && rf(R.toString())), E ? e.setAttributeNS(E, y, R) : e.setAttribute(y, R);
        }
      }
    }
    var jl = Symbol.for("react.element"), Zr = Symbol.for("react.portal"), Oa = Symbol.for("react.fragment"), Bl = Symbol.for("react.strict_mode"), Iu = Symbol.for("react.profiler"), af = Symbol.for("react.provider"), lf = Symbol.for("react.context"), $l = Symbol.for("react.forward_ref"), pa = Symbol.for("react.suspense"), Gu = Symbol.for("react.suspense_list"), Pl = Symbol.for("react.memo"), Ln = Symbol.for("react.lazy"), _p = Symbol.for("react.scope"), Op = Symbol.for("react.debug_trace_mode"), uf = Symbol.for("react.offscreen"), Mp = Symbol.for("react.legacy_hidden"), Um = Symbol.for("react.cache"), Am = Symbol.for("react.tracing_marker"), Ot = Symbol.iterator, Hm = "@@iterator";
    function Ma(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ot && e[Ot] || e[Hm];
      return typeof t == "function" ? t : null;
    }
    var Qe = Object.assign, fi = 0, Np, of, Xu, Jr, Lp, wr, zp;
    function Up() {
    }
    Up.__reactDisabledLog = !0;
    function Fm() {
      {
        if (fi === 0) {
          Np = console.log, of = console.info, Xu = console.warn, Jr = console.error, Lp = console.group, wr = console.groupCollapsed, zp = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Up,
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
    function ss() {
      {
        if (fi--, fi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Qe({}, e, {
              value: Np
            }),
            info: Qe({}, e, {
              value: of
            }),
            warn: Qe({}, e, {
              value: Xu
            }),
            error: Qe({}, e, {
              value: Jr
            }),
            group: Qe({}, e, {
              value: Lp
            }),
            groupCollapsed: Qe({}, e, {
              value: wr
            }),
            groupEnd: Qe({}, e, {
              value: zp
            })
          });
        }
        fi < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Yl = h.ReactCurrentDispatcher, Xi;
    function ea(e, t, a) {
      {
        if (Xi === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Xi = i && i[1] || "";
          }
        return `
` + Xi + e;
      }
    }
    var sf = !1, cs;
    {
      var cf = typeof WeakMap == "function" ? WeakMap : Map;
      cs = new cf();
    }
    function fs(e, t) {
      if (!e || sf)
        return "";
      {
        var a = cs.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      sf = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Yl.current, Yl.current = null, Fm();
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
            } catch (z) {
              i = z;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (z) {
              i = z;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            i = z;
          }
          e();
        }
      } catch (z) {
        if (z && i && typeof z.stack == "string") {
          for (var p = z.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, E = v.length - 1; y >= 1 && E >= 0 && p[y] !== v[E]; )
            E--;
          for (; y >= 1 && E >= 0; y--, E--)
            if (p[y] !== v[E]) {
              if (y !== 1 || E !== 1)
                do
                  if (y--, E--, E < 0 || p[y] !== v[E]) {
                    var b = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && cs.set(e, b), b;
                  }
                while (y >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        sf = !1, Yl.current = s, ss(), Error.prepareStackTrace = u;
      }
      var R = e ? e.displayName || e.name : "", L = R ? ea(R) : "";
      return typeof e == "function" && cs.set(e, L), L;
    }
    function ff(e, t, a) {
      return fs(e, !0);
    }
    function Wi(e, t, a) {
      return fs(e, !1);
    }
    function Vm(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Wu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fs(e, Vm(e));
      if (typeof e == "string")
        return ea(e);
      switch (e) {
        case pa:
          return ea("Suspense");
        case Gu:
          return ea("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $l:
            return Wi(e.render);
          case Pl:
            return Wu(e.type, t, a);
          case Ln: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Wu(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function lt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Z:
          return ea(e.type);
        case En:
          return ea("Lazy");
        case Ee:
          return ea("Suspense");
        case ze:
          return ea("SuspenseList");
        case G:
        case de:
        case Be:
          return Wi(e.type);
        case q:
          return Wi(e.type.render);
        case P:
          return ff(e.type);
        default:
          return "";
      }
    }
    function df(e) {
      try {
        var t = "", a = e;
        do
          t += lt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Ap(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function ds(e) {
      return e.displayName || "Context";
    }
    function dt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Oa:
          return "Fragment";
        case Zr:
          return "Portal";
        case Iu:
          return "Profiler";
        case Bl:
          return "StrictMode";
        case pa:
          return "Suspense";
        case Gu:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case lf:
            var t = e;
            return ds(t) + ".Consumer";
          case af:
            var a = e;
            return ds(a._context) + ".Provider";
          case $l:
            return Ap(e, e.render, "ForwardRef");
          case Pl:
            var i = e.displayName || null;
            return i !== null ? i : dt(e.type) || "Memo";
          case Ln: {
            var u = e, s = u._payload, f = u._init;
            try {
              return dt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Hp(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function pf(e) {
      return e.displayName || "Context";
    }
    function He(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Mn:
          return "Cache";
        case se:
          var i = a;
          return pf(i) + ".Consumer";
        case B:
          var u = a;
          return pf(u._context) + ".Provider";
        case Tt:
          return "DehydratedFragment";
        case q:
          return Hp(a, a.render, "ForwardRef");
        case Me:
          return "Fragment";
        case Z:
          return a;
        case Y:
          return "Portal";
        case $:
          return "Root";
        case xe:
          return "Text";
        case En:
          return dt(a);
        case Pe:
          return a === Bl ? "StrictMode" : "Mode";
        case je:
          return "Offscreen";
        case ye:
          return "Profiler";
        case on:
          return "Scope";
        case Ee:
          return "Suspense";
        case ze:
          return "SuspenseList";
        case Dt:
          return "TracingMarker";
        case P:
        case G:
        case Zt:
        case de:
        case Ke:
        case Be:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var qu = h.ReactDebugCurrentFrame, Vt = null, br = !1;
    function Dr() {
      {
        if (Vt === null)
          return null;
        var e = Vt._debugOwner;
        if (e !== null && typeof e < "u")
          return He(e);
      }
      return null;
    }
    function Ku() {
      return Vt === null ? "" : df(Vt);
    }
    function Qt() {
      qu.getCurrentStack = null, Vt = null, br = !1;
    }
    function ot(e) {
      qu.getCurrentStack = e === null ? null : Ku, Vt = e, br = !1;
    }
    function jm() {
      return Vt;
    }
    function ta(e) {
      br = e;
    }
    function xn(e) {
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
          return qr(e), e;
        default:
          return "";
      }
    }
    var Fp = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ql(e, t) {
      Fp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function vf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Vp(e) {
      return e._valueTracker;
    }
    function Zu(e) {
      e._valueTracker = null;
    }
    function Ju(e) {
      var t = "";
      return e && (vf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Il(e) {
      var t = vf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      qr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            qr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            qr(p), i = "" + p;
          },
          stopTracking: function() {
            Zu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function qi(e) {
      Vp(e) || (e._valueTracker = Il(e));
    }
    function jp(e) {
      if (!e)
        return !1;
      var t = Vp(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Ju(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ps(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var vs = !1, eo = !1, hs = !1, hf = !1;
    function Na(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function to(e, t) {
      var a = e, i = t.checked, u = Qe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function no(e, t) {
      Ql("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !eo && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), eo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !vs && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), vs = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: di(t.value != null ? t.value : i),
        controlled: Na(t)
      };
    }
    function mf(e, t) {
      var a = e, i = t.checked;
      i != null && Gi(a, "checked", i, !1);
    }
    function Gl(e, t) {
      var a = e;
      {
        var i = Na(t);
        !a._wrapperState.controlled && i && !hf && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), hf = !0), a._wrapperState.controlled && !i && !hs && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), hs = !0);
      }
      mf(e, t);
      var u = di(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = xn(u)) : a.value !== xn(u) && (a.value = xn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? pi(a, t.type, u) : t.hasOwnProperty("defaultValue") && pi(a, t.type, di(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ro(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = xn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Bp(e, t) {
      var a = e;
      Gl(a, t), sr(a, t);
    }
    function sr(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        _a(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = yh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            jp(f), Gl(f, p);
          }
        }
      }
    }
    function pi(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ps(e.ownerDocument) !== e) && (a == null ? e.defaultValue = xn(e._wrapperState.initialValue) : e.defaultValue !== xn(a) && (e.defaultValue = xn(a)));
    }
    var ms = !1, Xl = !1, $p = !1;
    function ys(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? T.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Xl || (Xl = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && ($p || ($p = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ms && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ms = !0);
    }
    function yf(e, t) {
      t.value != null && e.setAttribute("value", xn(di(t.value)));
    }
    var ao = Array.isArray;
    function Jt(e) {
      return ao(e);
    }
    var gs;
    gs = !1;
    function Pp() {
      var e = Dr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Yp = ["value", "defaultValue"];
    function Bm(e) {
      {
        Ql("select", e);
        for (var t = 0; t < Yp.length; t++) {
          var a = Yp[t];
          if (e[a] != null) {
            var i = Jt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Pp()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Pp());
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
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var E = xn(di(a)), b = null, R = 0; R < u.length; R++) {
          if (u[R].value === E) {
            u[R].selected = !0, i && (u[R].defaultSelected = !0);
            return;
          }
          b === null && !u[R].disabled && (b = u[R]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function gf(e, t) {
      return Qe({}, t, {
        value: void 0
      });
    }
    function Qp(e, t) {
      var a = e;
      Bm(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !gs && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), gs = !0);
    }
    function $m(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? vi(a, !!t.multiple, i, !1) : t.defaultValue != null && vi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Pm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? vi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? vi(a, !!t.multiple, t.defaultValue, !0) : vi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Ym(e, t) {
      var a = e, i = t.value;
      i != null && vi(a, !!t.multiple, i, !1);
    }
    var Sf = !1;
    function Ef(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Qe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: xn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Ip(e, t) {
      var a = e;
      Ql("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Sf && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component"), Sf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Jt(u)) {
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
    function Gp(e, t) {
      var a = e, i = di(t.value), u = di(t.defaultValue);
      if (i != null) {
        var s = xn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = xn(u));
    }
    function Xp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Cf(e, t) {
      Gp(e, t);
    }
    var La = "http://www.w3.org/1999/xhtml", Qm = "http://www.w3.org/1998/Math/MathML", Tf = "http://www.w3.org/2000/svg";
    function Ss(e) {
      switch (e) {
        case "svg":
          return Tf;
        case "math":
          return Qm;
        default:
          return La;
      }
    }
    function xf(e, t) {
      return e == null || e === La ? Ss(t) : e === Tf && t === "foreignObject" ? La : e;
    }
    var Im = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Es, Wp = Im(function(e, t) {
      if (e.namespaceURI === Tf && !("innerHTML" in e)) {
        Es = Es || document.createElement("div"), Es.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Es.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Gn = 1, za = 3, jt = 8, na = 9, Ki = 11, Cs = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === za) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, qp = {
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
    }, Wl = {
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
    function Kp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Zp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Wl).forEach(function(e) {
      Zp.forEach(function(t) {
        Wl[Kp(t, e)] = Wl[e];
      });
    });
    function Ts(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Wl.hasOwnProperty(e) && Wl[e]) ? t + "px" : (ui(t, e), ("" + t).trim());
    }
    var ql = /([A-Z])/g, Gm = /^ms-/;
    function Xm(e) {
      return e.replace(ql, "-$1").toLowerCase().replace(Gm, "-ms-");
    }
    var Jp = function() {
    };
    {
      var ev = /^(?:webkit|moz|o)[A-Z]/, tv = /^-ms-/, io = /-(.)/g, Kl = /;\s*$/, Zl = {}, Jl = {}, nv = !1, Rf = !1, wf = function(e) {
        return e.replace(io, function(t, a) {
          return a.toUpperCase();
        });
      }, bf = function(e) {
        Zl.hasOwnProperty(e) && Zl[e] || (Zl[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          wf(e.replace(tv, "ms-"))
        ));
      }, rv = function(e) {
        Zl.hasOwnProperty(e) && Zl[e] || (Zl[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, av = function(e, t) {
        Jl.hasOwnProperty(t) && Jl[t] || (Jl[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Kl, "")));
      }, iv = function(e, t) {
        nv || (nv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Wm = function(e, t) {
        Rf || (Rf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Jp = function(e, t) {
        e.indexOf("-") > -1 ? bf(e) : ev.test(e) ? rv(e) : Kl.test(t) && av(e, t), typeof t == "number" && (isNaN(t) ? iv(e, t) : isFinite(t) || Wm(e, t));
      };
    }
    var qm = Jp;
    function Km(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Xm(i)) + ":", t += Ts(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function lv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || qm(i, t[i]);
          var s = Ts(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Zm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function kr(e) {
      var t = {};
      for (var a in e)
        for (var i = qp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function lo(e, t) {
      {
        if (!t)
          return;
        var a = kr(e), i = kr(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Zm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var uv = {
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
    }, ov = Qe({
      menuitem: !0
    }, uv), sv = "__html";
    function xs(e, t) {
      if (t) {
        if (ov[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(sv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
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
    var Rs = {
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
    }, cv = {
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
    }, ra = {}, Df = new RegExp("^(aria)-[" + we + "]*$"), uo = new RegExp("^(aria)[A-Z][" + we + "]*$");
    function kf(e, t) {
      {
        if (Qn.call(ra, t) && ra[t])
          return !0;
        if (uo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = cv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ra[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ra[t] = !0, !0;
        }
        if (Df.test(t)) {
          var u = t.toLowerCase(), s = cv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return ra[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), ra[t] = !0, !0;
        }
      }
      return !0;
    }
    function fv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = kf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function ws(e, t) {
      Ua(e, t) || fv(e, t);
    }
    var Zi = !1;
    function _f(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Zi && (Zi = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Of = function() {
    };
    {
      var en = {}, Mf = /^on./, dv = /^on[^A-Z]/, pv = new RegExp("^(aria)-[" + we + "]*$"), vv = new RegExp("^(aria)[A-Z][" + we + "]*$");
      Of = function(e, t, a, i) {
        if (Qn.call(en, t) && en[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), en[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), en[t] = !0, !0;
          if (Mf.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), en[t] = !0, !0;
        } else if (Mf.test(t))
          return dv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), en[t] = !0, !0;
        if (pv.test(t) || vv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), en[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), en[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), en[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), en[t] = !0, !0;
        var v = da(t), y = v !== null && v.type === oi;
        if (Rs.hasOwnProperty(u)) {
          var E = Rs[u];
          if (E !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, E), en[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), en[t] = !0, !0;
        return typeof a == "boolean" && Rr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), en[t] = !0, !0) : y ? !0 : Rr(t, a, v, !1) ? (en[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === In && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), en[t] = !0), !0);
      };
    }
    var hv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Of(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function mv(e, t, a) {
      Ua(e, t) || hv(e, t, a);
    }
    var Aa = 1, oo = 2, Ji = 4, Jm = Aa | oo | Ji, so = null;
    function co(e) {
      so !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), so = e;
    }
    function ey() {
      so === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), so = null;
    }
    function yv(e) {
      return e === so;
    }
    function bs(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === za ? t.parentNode : t;
    }
    var pt = null, hi = null, Ha = null;
    function eu(e) {
      var t = bu(e);
      if (t) {
        if (typeof pt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = yh(a);
          pt(t.stateNode, t.type, i);
        }
      }
    }
    function gv(e) {
      pt = e;
    }
    function Ds(e) {
      hi ? Ha ? Ha.push(e) : Ha = [e] : hi = e;
    }
    function fo() {
      return hi !== null || Ha !== null;
    }
    function po() {
      if (hi) {
        var e = hi, t = Ha;
        if (hi = null, Ha = null, eu(e), t)
          for (var a = 0; a < t.length; a++)
            eu(t[a]);
      }
    }
    var el = function(e, t) {
      return e(t);
    }, Nf = function() {
    }, Lf = !1;
    function ty() {
      var e = fo();
      e && (Nf(), po());
    }
    function zf(e, t, a) {
      if (Lf)
        return e(t, a);
      Lf = !0;
      try {
        return el(e, t, a);
      } finally {
        Lf = !1, ty();
      }
    }
    function ks(e, t, a) {
      el = e, Nf = a;
    }
    function _s(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Uf(e, t, a) {
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
          return !!(a.disabled && _s(t));
        default:
          return !1;
      }
    }
    function tl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = yh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Uf(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var vo = !1;
    if (Cn)
      try {
        var nl = {};
        Object.defineProperty(nl, "passive", {
          get: function() {
            vo = !0;
          }
        }), window.addEventListener("test", nl, nl), window.removeEventListener("test", nl, nl);
      } catch {
        vo = !1;
      }
    function Sv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (E) {
        this.onError(E);
      }
    }
    var Af = Sv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Hf = document.createElement("react");
      Af = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var E = document.createEvent("Event"), b = !1, R = !0, L = window.event, z = Object.getOwnPropertyDescriptor(window, "event");
        function A() {
          Hf.removeEventListener(H, Re, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = L);
        }
        var ue = Array.prototype.slice.call(arguments, 3);
        function Re() {
          b = !0, A(), a.apply(i, ue), R = !1;
        }
        var Se, qe = !1, Ge = !1;
        function _(O) {
          if (Se = O.error, qe = !0, Se === null && O.colno === 0 && O.lineno === 0 && (Ge = !0), O.defaultPrevented && Se != null && typeof Se == "object")
            try {
              Se._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", _), Hf.addEventListener(H, Re, !1), E.initEvent(H, !1, !1), Hf.dispatchEvent(E), z && Object.defineProperty(window, "event", z), b && R && (qe ? Ge && (Se = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Se = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Se)), window.removeEventListener("error", _), !b)
          return A(), Sv.apply(this, arguments);
      };
    }
    var ny = Af, mi = !1, aa = null, ho = !1, yi = null, va = {
      onError: function(e) {
        mi = !0, aa = e;
      }
    };
    function rl(e, t, a, i, u, s, f, p, v) {
      mi = !1, aa = null, ny.apply(va, arguments);
    }
    function Fa(e, t, a, i, u, s, f, p, v) {
      if (rl.apply(this, arguments), mi) {
        var y = Vf();
        ho || (ho = !0, yi = y);
      }
    }
    function Ff() {
      if (ho) {
        var e = yi;
        throw ho = !1, yi = null, e;
      }
    }
    function ry() {
      return mi;
    }
    function Vf() {
      if (mi) {
        var e = aa;
        return mi = !1, aa = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _r(e) {
      return e._reactInternals;
    }
    function mo(e) {
      return e._reactInternals !== void 0;
    }
    function tu(e, t) {
      e._reactInternals = t;
    }
    var Te = (
      /*                      */
      0
    ), gi = (
      /*                */
      1
    ), ht = (
      /*                    */
      2
    ), Fe = (
      /*                       */
      4
    ), nt = (
      /*                */
      16
    ), rt = (
      /*                 */
      32
    ), ha = (
      /*                     */
      64
    ), Ne = (
      /*                   */
      128
    ), Mt = (
      /*            */
      256
    ), Xn = (
      /*                          */
      512
    ), Or = (
      /*                     */
      1024
    ), Et = (
      /*                      */
      2048
    ), Mr = (
      /*                    */
      4096
    ), Si = (
      /*                   */
      8192
    ), yo = (
      /*             */
      16384
    ), Os = Et | Fe | ha | Xn | Or | yo, Ev = (
      /*               */
      32767
    ), cr = (
      /*                   */
      32768
    ), tn = (
      /*                */
      65536
    ), go = (
      /* */
      131072
    ), jf = (
      /*                       */
      1048576
    ), Bf = (
      /*                    */
      2097152
    ), Wn = (
      /*                 */
      4194304
    ), Ei = (
      /*                */
      8388608
    ), qn = (
      /*               */
      16777216
    ), al = (
      /*              */
      33554432
    ), nu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Fe | Or | 0
    ), Kn = ht | Fe | nt | rt | Xn | Mr | Si, Rn = Fe | ha | Xn | Si, Nr = Et | nt, sn = Wn | Ei | Bf, Va = h.ReactCurrentOwner;
    function fr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (ht | Mr)) !== Te && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === $ ? a : null;
    }
    function $f(e) {
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
    function Ms(e) {
      return e.tag === $ ? e.stateNode.containerInfo : null;
    }
    function Pf(e) {
      return fr(e) === e;
    }
    function dr(e) {
      {
        var t = Va.current;
        if (t !== null && t.tag === P) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", He(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = _r(e);
      return u ? fr(u) === u : !1;
    }
    function Zn(e) {
      if (fr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function mt(e) {
      var t = e.alternate;
      if (!t) {
        var a = fr(e);
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
              return Zn(s), e;
            if (v === u)
              return Zn(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, E = s.child; E; ) {
            if (E === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (E === u) {
              y = !0, u = s, i = f;
              break;
            }
            E = E.sibling;
          }
          if (!y) {
            for (E = f.child; E; ) {
              if (E === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (E === u) {
                y = !0, u = f, i = s;
                break;
              }
              E = E.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== $)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Lr(e) {
      var t = mt(e);
      return t !== null ? Yf(t) : null;
    }
    function Yf(e) {
      if (e.tag === Z || e.tag === xe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Yf(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Cv(e) {
      var t = mt(e);
      return t !== null ? Ns(t) : null;
    }
    function Ns(e) {
      if (e.tag === Z || e.tag === xe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Y) {
          var a = Ns(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ls = g.unstable_scheduleCallback, Tv = g.unstable_cancelCallback, zs = g.unstable_shouldYield, xv = g.unstable_requestPaint, xt = g.unstable_now, Qf = g.unstable_getCurrentPriorityLevel, Us = g.unstable_ImmediatePriority, pr = g.unstable_UserBlockingPriority, ma = g.unstable_NormalPriority, As = g.unstable_LowPriority, Ci = g.unstable_IdlePriority, If = g.unstable_yieldValue, Gf = g.unstable_setDisableYieldValue, Ti = null, nn = null, ee = null, Ut = !1, cn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Xf(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ii && (e = Qe({}, e, {
          getLaneLabelMap: Ri,
          injectProfilingHooks: Ba
        })), Ti = t.inject(e), nn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Rv(e, t) {
      if (nn && typeof nn.onScheduleFiberRoot == "function")
        try {
          nn.onScheduleFiberRoot(Ti, e, t);
        } catch (a) {
          Ut || (Ut = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function ja(e, t) {
      if (nn && typeof nn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ne) === Ne;
          if (Nn) {
            var i;
            switch (t) {
              case wn:
                i = Us;
                break;
              case fn:
                i = pr;
                break;
              case Pa:
                i = ma;
                break;
              case Do:
                i = Ci;
                break;
              default:
                i = ma;
                break;
            }
            nn.onCommitFiberRoot(Ti, e, i, a);
          }
        } catch (u) {
          Ut || (Ut = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function xi(e) {
      if (nn && typeof nn.onPostCommitFiberRoot == "function")
        try {
          nn.onPostCommitFiberRoot(Ti, e);
        } catch (t) {
          Ut || (Ut = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Wf(e) {
      if (nn && typeof nn.onCommitFiberUnmount == "function")
        try {
          nn.onCommitFiberUnmount(Ti, e);
        } catch (t) {
          Ut || (Ut = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function It(e) {
      if (typeof If == "function" && (Gf(e), M(e)), nn && typeof nn.setStrictMode == "function")
        try {
          nn.setStrictMode(Ti, e);
        } catch (t) {
          Ut || (Ut = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ba(e) {
      ee = e;
    }
    function Ri() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < yt; a++) {
          var i = ay(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Hs(e) {
      ee !== null && typeof ee.markCommitStarted == "function" && ee.markCommitStarted(e);
    }
    function qf() {
      ee !== null && typeof ee.markCommitStopped == "function" && ee.markCommitStopped();
    }
    function wi(e) {
      ee !== null && typeof ee.markComponentRenderStarted == "function" && ee.markComponentRenderStarted(e);
    }
    function il() {
      ee !== null && typeof ee.markComponentRenderStopped == "function" && ee.markComponentRenderStopped();
    }
    function wv(e) {
      ee !== null && typeof ee.markComponentPassiveEffectMountStarted == "function" && ee.markComponentPassiveEffectMountStarted(e);
    }
    function Kf() {
      ee !== null && typeof ee.markComponentPassiveEffectMountStopped == "function" && ee.markComponentPassiveEffectMountStopped();
    }
    function Fs(e) {
      ee !== null && typeof ee.markComponentPassiveEffectUnmountStarted == "function" && ee.markComponentPassiveEffectUnmountStarted(e);
    }
    function bv() {
      ee !== null && typeof ee.markComponentPassiveEffectUnmountStopped == "function" && ee.markComponentPassiveEffectUnmountStopped();
    }
    function Dv(e) {
      ee !== null && typeof ee.markComponentLayoutEffectMountStarted == "function" && ee.markComponentLayoutEffectMountStarted(e);
    }
    function kv() {
      ee !== null && typeof ee.markComponentLayoutEffectMountStopped == "function" && ee.markComponentLayoutEffectMountStopped();
    }
    function Vs(e) {
      ee !== null && typeof ee.markComponentLayoutEffectUnmountStarted == "function" && ee.markComponentLayoutEffectUnmountStarted(e);
    }
    function ru() {
      ee !== null && typeof ee.markComponentLayoutEffectUnmountStopped == "function" && ee.markComponentLayoutEffectUnmountStopped();
    }
    function js(e, t, a) {
      ee !== null && typeof ee.markComponentErrored == "function" && ee.markComponentErrored(e, t, a);
    }
    function _v(e, t, a) {
      ee !== null && typeof ee.markComponentSuspended == "function" && ee.markComponentSuspended(e, t, a);
    }
    function Ov(e) {
      ee !== null && typeof ee.markLayoutEffectsStarted == "function" && ee.markLayoutEffectsStarted(e);
    }
    function au() {
      ee !== null && typeof ee.markLayoutEffectsStopped == "function" && ee.markLayoutEffectsStopped();
    }
    function Mv(e) {
      ee !== null && typeof ee.markPassiveEffectsStarted == "function" && ee.markPassiveEffectsStarted(e);
    }
    function So() {
      ee !== null && typeof ee.markPassiveEffectsStopped == "function" && ee.markPassiveEffectsStopped();
    }
    function ia(e) {
      ee !== null && typeof ee.markRenderStarted == "function" && ee.markRenderStarted(e);
    }
    function Eo() {
      ee !== null && typeof ee.markRenderYielded == "function" && ee.markRenderYielded();
    }
    function iu() {
      ee !== null && typeof ee.markRenderStopped == "function" && ee.markRenderStopped();
    }
    function ll(e) {
      ee !== null && typeof ee.markRenderScheduled == "function" && ee.markRenderScheduled(e);
    }
    function Zf(e, t) {
      ee !== null && typeof ee.markForceUpdateScheduled == "function" && ee.markForceUpdateScheduled(e, t);
    }
    function bi(e, t) {
      ee !== null && typeof ee.markStateUpdateScheduled == "function" && ee.markStateUpdateScheduled(e, t);
    }
    var be = (
      /*                         */
      0
    ), $e = (
      /*                 */
      1
    ), De = (
      /*                    */
      2
    ), Rt = (
      /*               */
      8
    ), zr = (
      /*              */
      16
    ), Bs = Math.clz32 ? Math.clz32 : ul, $s = Math.log, Jf = Math.LN2;
    function ul(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - ($s(t) / Jf | 0) | 0;
    }
    var yt = 31, F = (
      /*                        */
      0
    ), Xe = (
      /*                          */
      0
    ), ke = (
      /*                        */
      1
    ), ya = (
      /*    */
      2
    ), vr = (
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
    ), Di = (
      /*                       */
      4194240
    ), cl = (
      /*                        */
      64
    ), Ur = (
      /*                        */
      128
    ), Jn = (
      /*                        */
      256
    ), fl = (
      /*                        */
      512
    ), Co = (
      /*                        */
      1024
    ), To = (
      /*                        */
      2048
    ), Ps = (
      /*                        */
      4096
    ), Ys = (
      /*                        */
      8192
    ), Qs = (
      /*                        */
      16384
    ), Is = (
      /*                       */
      32768
    ), Gs = (
      /*                       */
      65536
    ), Xs = (
      /*                       */
      131072
    ), Ws = (
      /*                       */
      262144
    ), qs = (
      /*                       */
      524288
    ), dl = (
      /*                       */
      1048576
    ), Ks = (
      /*                       */
      2097152
    ), pl = (
      /*                            */
      130023424
    ), $a = (
      /*                             */
      4194304
    ), Zs = (
      /*                             */
      8388608
    ), xo = (
      /*                             */
      16777216
    ), Js = (
      /*                             */
      33554432
    ), ec = (
      /*                             */
      67108864
    ), ed = $a, lu = (
      /*          */
      134217728
    ), tc = (
      /*                          */
      268435455
    ), uu = (
      /*               */
      268435456
    ), ki = (
      /*                        */
      536870912
    ), er = (
      /*                   */
      1073741824
    );
    function ay(e) {
      {
        if (e & ke)
          return "Sync";
        if (e & ya)
          return "InputContinuousHydration";
        if (e & vr)
          return "InputContinuous";
        if (e & ol)
          return "DefaultHydration";
        if (e & gt)
          return "Default";
        if (e & sl)
          return "TransitionHydration";
        if (e & Di)
          return "Transition";
        if (e & pl)
          return "Retry";
        if (e & lu)
          return "SelectiveHydration";
        if (e & uu)
          return "IdleHydration";
        if (e & ki)
          return "Idle";
        if (e & er)
          return "Offscreen";
      }
    }
    var vt = -1, nc = cl, rc = $a;
    function ou(e) {
      switch (Bt(e)) {
        case ke:
          return ke;
        case ya:
          return ya;
        case vr:
          return vr;
        case ol:
          return ol;
        case gt:
          return gt;
        case sl:
          return sl;
        case cl:
        case Ur:
        case Jn:
        case fl:
        case Co:
        case To:
        case Ps:
        case Ys:
        case Qs:
        case Is:
        case Gs:
        case Xs:
        case Ws:
        case qs:
        case dl:
        case Ks:
          return e & Di;
        case $a:
        case Zs:
        case xo:
        case Js:
        case ec:
          return e & pl;
        case lu:
          return lu;
        case uu:
          return uu;
        case ki:
          return ki;
        case er:
          return er;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ro(e, t) {
      var a = e.pendingLanes;
      if (a === F)
        return F;
      var i = F, u = e.suspendedLanes, s = e.pingedLanes, f = a & tc;
      if (f !== F) {
        var p = f & ~u;
        if (p !== F)
          i = ou(p);
        else {
          var v = f & s;
          v !== F && (i = ou(v));
        }
      } else {
        var y = a & ~u;
        y !== F ? i = ou(y) : s !== F && (i = ou(s));
      }
      if (i === F)
        return F;
      if (t !== F && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === F) {
        var E = Bt(i), b = Bt(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          E >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          E === gt && (b & Di) !== F
        )
          return t;
      }
      (i & vr) !== F && (i |= a & gt);
      var R = e.entangledLanes;
      if (R !== F)
        for (var L = e.entanglements, z = i & R; z > 0; ) {
          var A = _i(z), ue = 1 << A;
          i |= L[A], z &= ~ue;
        }
      return i;
    }
    function Nv(e, t) {
      for (var a = e.eventTimes, i = vt; t > 0; ) {
        var u = _i(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function ac(e, t) {
      switch (e) {
        case ke:
        case ya:
        case vr:
          return t + 250;
        case ol:
        case gt:
        case sl:
        case cl:
        case Ur:
        case Jn:
        case fl:
        case Co:
        case To:
        case Ps:
        case Ys:
        case Qs:
        case Is:
        case Gs:
        case Xs:
        case Ws:
        case qs:
        case dl:
        case Ks:
          return t + 5e3;
        case $a:
        case Zs:
        case xo:
        case Js:
        case ec:
          return vt;
        case lu:
        case uu:
        case ki:
        case er:
          return vt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), vt;
      }
    }
    function iy(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = _i(f), v = 1 << p, y = s[p];
        y === vt ? ((v & i) === F || (v & u) !== F) && (s[p] = ac(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ly(e) {
      return ou(e.pendingLanes);
    }
    function td(e) {
      var t = e.pendingLanes & ~er;
      return t !== F ? t : t & er ? er : F;
    }
    function su(e) {
      return (e & ke) !== F;
    }
    function wo(e) {
      return (e & tc) !== F;
    }
    function ic(e) {
      return (e & pl) === e;
    }
    function uy(e) {
      var t = ke | vr | gt;
      return (e & t) === F;
    }
    function Lv(e) {
      return (e & Di) === e;
    }
    function bo(e, t) {
      var a = ya | vr | ol | gt;
      return (t & a) !== F;
    }
    function zv(e, t) {
      return (t & e.expiredLanes) !== F;
    }
    function nd(e) {
      return (e & Di) !== F;
    }
    function rd() {
      var e = nc;
      return nc <<= 1, (nc & Di) === F && (nc = cl), e;
    }
    function oy() {
      var e = rc;
      return rc <<= 1, (rc & pl) === F && (rc = $a), e;
    }
    function Bt(e) {
      return e & -e;
    }
    function Gt(e) {
      return Bt(e);
    }
    function _i(e) {
      return 31 - Bs(e);
    }
    function lc(e) {
      return _i(e);
    }
    function tr(e, t) {
      return (e & t) !== F;
    }
    function vl(e, t) {
      return (e & t) === t;
    }
    function Ve(e, t) {
      return e | t;
    }
    function cu(e, t) {
      return e & ~t;
    }
    function ad(e, t) {
      return e & t;
    }
    function Uv(e) {
      return e;
    }
    function Av(e, t) {
      return e !== Xe && e < t ? e : t;
    }
    function uc(e) {
      for (var t = [], a = 0; a < yt; a++)
        t.push(e);
      return t;
    }
    function hl(e, t, a) {
      e.pendingLanes |= t, t !== ki && (e.suspendedLanes = F, e.pingedLanes = F);
      var i = e.eventTimes, u = lc(t);
      i[u] = a;
    }
    function id(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = _i(i), s = 1 << u;
        a[u] = vt, i &= ~s;
      }
    }
    function ld(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function ud(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = F, e.pingedLanes = F, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = _i(f), v = 1 << p;
        i[p] = F, u[p] = vt, s[p] = vt, f &= ~v;
      }
    }
    function fu(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = _i(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function sy(e, t) {
      var a = Bt(t), i;
      switch (a) {
        case vr:
          i = ya;
          break;
        case gt:
          i = ol;
          break;
        case cl:
        case Ur:
        case Jn:
        case fl:
        case Co:
        case To:
        case Ps:
        case Ys:
        case Qs:
        case Is:
        case Gs:
        case Xs:
        case Ws:
        case qs:
        case dl:
        case Ks:
        case $a:
        case Zs:
        case xo:
        case Js:
        case ec:
          i = sl;
          break;
        case ki:
          i = uu;
          break;
        default:
          i = Xe;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Xe ? Xe : i;
    }
    function od(e, t, a) {
      if (cn)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = lc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function oc(e, t) {
      if (cn)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = lc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function sd(e, t) {
      return null;
    }
    var wn = ke, fn = vr, Pa = gt, Do = ki, ml = Xe;
    function Ar() {
      return ml;
    }
    function Xt(e) {
      ml = e;
    }
    function ko(e, t) {
      var a = ml;
      try {
        return ml = e, t();
      } finally {
        ml = a;
      }
    }
    function bn(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function cy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function cd(e, t) {
      return e !== 0 && e < t;
    }
    function _o(e) {
      var t = Bt(e);
      return cd(wn, t) ? cd(fn, t) ? wo(t) ? Pa : Do : fn : wn;
    }
    function Wt(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Hv;
    function fe(e) {
      Hv = e;
    }
    function du(e) {
      Hv(e);
    }
    var Oo;
    function Fv(e) {
      Oo = e;
    }
    var Vv;
    function Mo(e) {
      Vv = e;
    }
    var No;
    function fd(e) {
      No = e;
    }
    var dd;
    function jv(e) {
      dd = e;
    }
    var sc = !1, pu = [], ga = null, Ct = null, rn = null, Hr = /* @__PURE__ */ new Map(), vu = /* @__PURE__ */ new Map(), Ya = [], la = [
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
      return la.indexOf(e) > -1;
    }
    function Sa(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function $v(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ga = null;
          break;
        case "dragenter":
        case "dragleave":
          Ct = null;
          break;
        case "mouseover":
        case "mouseout":
          rn = null;
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
          vu.delete(i);
          break;
        }
      }
    }
    function hu(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Sa(t, a, i, u, s);
        if (t !== null) {
          var p = bu(t);
          p !== null && Oo(p);
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
          return ga = hu(ga, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Ct = hu(Ct, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return rn = hu(rn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Hr.set(y, hu(Hr.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var E = u, b = E.pointerId;
          return vu.set(b, hu(vu.get(b) || null, e, t, a, i, E)), !0;
        }
      }
      return !1;
    }
    function pd(e) {
      var t = Bo(e.target);
      if (t !== null) {
        var a = fr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ee) {
            var u = $f(a);
            if (u !== null) {
              e.blockedOn = u, dd(e.priority, function() {
                Vv(a);
              });
              return;
            }
          } else if (i === $) {
            var s = a.stateNode;
            if (Wt(s)) {
              e.blockedOn = Ms(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Yv(e) {
      for (var t = No(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Ya.length && cd(t, Ya[i].priority); i++)
        ;
      Ya.splice(i, 0, a), i === 0 && pd(a);
    }
    function cc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = yl(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          co(s), u.target.dispatchEvent(s), ey();
        } else {
          var f = bu(i);
          return f !== null && Oo(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Lo(e, t, a) {
      cc(e) && a.delete(t);
    }
    function vd() {
      sc = !1, ga !== null && cc(ga) && (ga = null), Ct !== null && cc(Ct) && (Ct = null), rn !== null && cc(rn) && (rn = null), Hr.forEach(Lo), vu.forEach(Lo);
    }
    function Dn(e, t) {
      e.blockedOn === t && (e.blockedOn = null, sc || (sc = !0, g.unstable_scheduleCallback(g.unstable_NormalPriority, vd)));
    }
    function Ie(e) {
      if (pu.length > 0) {
        Dn(pu[0], e);
        for (var t = 1; t < pu.length; t++) {
          var a = pu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ga !== null && Dn(ga, e), Ct !== null && Dn(Ct, e), rn !== null && Dn(rn, e);
      var i = function(p) {
        return Dn(p, e);
      };
      Hr.forEach(i), vu.forEach(i);
      for (var u = 0; u < Ya.length; u++) {
        var s = Ya[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Ya.length > 0; ) {
        var f = Ya[0];
        if (f.blockedOn !== null)
          break;
        pd(f), f.blockedOn === null && Ya.shift();
      }
    }
    var wt = h.ReactCurrentBatchConfig, Nt = !0;
    function an(e) {
      Nt = !!e;
    }
    function hr() {
      return Nt;
    }
    function mu(e, t, a) {
      var i = zn(t), u;
      switch (i) {
        case wn:
          u = qt;
          break;
        case fn:
          u = zo;
          break;
        case Pa:
        default:
          u = Qa;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function qt(e, t, a, i) {
      var u = Ar(), s = wt.transition;
      wt.transition = null;
      try {
        Xt(wn), Qa(e, t, a, i);
      } finally {
        Xt(u), wt.transition = s;
      }
    }
    function zo(e, t, a, i) {
      var u = Ar(), s = wt.transition;
      wt.transition = null;
      try {
        Xt(fn), Qa(e, t, a, i);
      } finally {
        Xt(u), wt.transition = s;
      }
    }
    function Qa(e, t, a, i) {
      Nt && fc(e, t, a, i);
    }
    function fc(e, t, a, i) {
      var u = yl(e, t, a, i);
      if (u === null) {
        Oy(e, t, i, yu, a), $v(e, i);
        return;
      }
      if (Pv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if ($v(e, i), t & Ji && Bv(e)) {
        for (; u !== null; ) {
          var s = bu(u);
          s !== null && du(s);
          var f = yl(e, t, a, i);
          if (f === null && Oy(e, t, i, yu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Oy(e, t, i, null, a);
    }
    var yu = null;
    function yl(e, t, a, i) {
      yu = null;
      var u = bs(i), s = Bo(u);
      if (s !== null) {
        var f = fr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ee) {
            var v = $f(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === $) {
            var y = f.stateNode;
            if (Wt(y))
              return Ms(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return yu = s, null;
    }
    function zn(e) {
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
          return wn;
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
          return fn;
        case "message": {
          var t = Qf();
          switch (t) {
            case Us:
              return wn;
            case pr:
              return fn;
            case ma:
            case As:
              return Pa;
            case Ci:
              return Do;
            default:
              return Pa;
          }
        }
        default:
          return Pa;
      }
    }
    function hd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function gu(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Ia(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function dc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var gl = null, Ea = null, Oi = null;
    function Mi(e) {
      return gl = e, Ea = vc(), !0;
    }
    function pc() {
      gl = null, Ea = null, Oi = null;
    }
    function Su() {
      if (Oi)
        return Oi;
      var e, t = Ea, a = t.length, i, u = vc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Oi = u.slice(e, p), Oi;
    }
    function vc() {
      return "value" in gl ? gl.value : gl.textContent;
    }
    function Sl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function El() {
      return !0;
    }
    function kn() {
      return !1;
    }
    function $t(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = El : this.isDefaultPrevented = kn, this.isPropagationStopped = kn, this;
      }
      return Qe(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = El);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = El);
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
        isPersistent: El
      }), t;
    }
    var _n = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, On = $t(_n), Eu = Qe({}, _n, {
      view: 0,
      detail: 0
    }), md = $t(Eu), Uo, yd, Fr;
    function Qv(e) {
      e !== Fr && (Fr && e.type === "mousemove" ? (Uo = e.screenX - Fr.screenX, yd = e.screenY - Fr.screenY) : (Uo = 0, yd = 0), Fr = e);
    }
    var Cu = Qe({}, Eu, {
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
      getModifierState: yc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Qv(e), Uo);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : yd;
      }
    }), Ni = $t(Cu), gd = Qe({}, Cu, {
      dataTransfer: 0
    }), Cl = $t(gd), Iv = Qe({}, Eu, {
      relatedTarget: 0
    }), hc = $t(Iv), Sd = Qe({}, _n, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), mc = $t(Sd), fy = Qe({}, _n, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), dy = $t(fy), Gv = Qe({}, _n, {
      data: 0
    }), Ed = $t(Gv), Tl = Ed, py = {
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
    }, Tu = {
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
    function Xv(e) {
      if (e.key) {
        var t = py[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Sl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Tu[e.keyCode] || "Unidentified" : "";
    }
    var Lt = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function vy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Lt[e];
      return i ? !!a[i] : !1;
    }
    function yc(e) {
      return vy;
    }
    var hy = Qe({}, Eu, {
      key: Xv,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: yc,
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
    }), my = $t(hy), Wv = Qe({}, Cu, {
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
    }), Cd = $t(Wv), yy = Qe({}, Eu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: yc
    }), Vr = $t(yy), Td = Qe({}, _n, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), gy = $t(Td), Li = Qe({}, Cu, {
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
    }), gc = $t(Li), xl = [9, 13, 27, 32], Ao = 229, Ho = Cn && "CompositionEvent" in window, Rl = null;
    Cn && "documentMode" in document && (Rl = document.documentMode);
    var Sy = Cn && "TextEvent" in window && !Rl, Sc = Cn && (!Ho || Rl && Rl > 8 && Rl <= 11), qv = 32, xd = String.fromCharCode(qv);
    function Kv() {
      Tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Tr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Tr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Tr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Fo = !1;
    function Ec(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Zv(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Rd(e, t) {
      return e === "keydown" && t.keyCode === Ao;
    }
    function Jv(e, t) {
      switch (e) {
        case "keyup":
          return xl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ao;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function wd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Cc(e) {
      return e.locale === "ko";
    }
    var Ga = !1;
    function bd(e, t, a, i, u) {
      var s, f;
      if (Ho ? s = Zv(t) : Ga ? Jv(t, i) && (s = "onCompositionEnd") : Rd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Sc && !Cc(i) && (!Ga && s === "onCompositionStart" ? Ga = Mi(u) : s === "onCompositionEnd" && Ga && (f = Su()));
      var p = ah(a, s);
      if (p.length > 0) {
        var v = new Ed(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = wd(i);
          y !== null && (v.data = y);
        }
      }
    }
    function Tc(e, t) {
      switch (e) {
        case "compositionend":
          return wd(t);
        case "keypress":
          var a = t.which;
          return a !== qv ? null : (Fo = !0, xd);
        case "textInput":
          var i = t.data;
          return i === xd && Fo ? null : i;
        default:
          return null;
      }
    }
    function eh(e, t) {
      if (Ga) {
        if (e === "compositionend" || !Ho && Jv(e, t)) {
          var a = Su();
          return pc(), Ga = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Ec(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Sc && !Cc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Ey(e, t, a, i, u) {
      var s;
      if (Sy ? s = Tc(t, i) : s = eh(t, i), !s)
        return null;
      var f = ah(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Tl("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function xc(e, t, a, i, u, s, f) {
      bd(e, t, a, i, u), Ey(e, t, a, i, u);
    }
    var Cy = {
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
    function xu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Cy[e.type] : t === "textarea";
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
    function Ty(e) {
      if (!Cn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Rc() {
      Tr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      Ds(i);
      var u = ah(t, "onChange");
      if (u.length > 0) {
        var s = new On("onChange", "change", null, a, i);
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
      n(t, l, e, bs(e)), zf(d, t);
    }
    function d(e) {
      H0(e, 0);
    }
    function m(e) {
      var t = Oc(e);
      if (jp(t))
        return e;
    }
    function C(e, t) {
      if (e === "change")
        return t;
    }
    var x = !1;
    Cn && (x = Ty("input") && (!document.documentMode || document.documentMode > 9));
    function U(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", X);
    }
    function I() {
      r && (r.detachEvent("onpropertychange", X), r = null, l = null);
    }
    function X(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function Q(e, t, a) {
      e === "focusin" ? (I(), U(t, a)) : e === "focusout" && I();
    }
    function ie(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function pe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function me(e, t) {
      if (e === "click")
        return m(t);
    }
    function At(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function k(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || pi(e, "number", e.value);
    }
    function w(e, t, a, i, u, s, f) {
      var p = a ? Oc(a) : window, v, y;
      if (o(p) ? v = C : xu(p) ? x ? v = At : (v = ie, y = Q) : pe(p) && (v = me), v) {
        var E = v(t, a);
        if (E) {
          n(e, E, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && k(p);
    }
    function N() {
      ka("onMouseEnter", ["mouseout", "mouseover"]), ka("onMouseLeave", ["mouseout", "mouseover"]), ka("onPointerEnter", ["pointerout", "pointerover"]), ka("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function K(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !yv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Bo(y) || jd(y)))
          return;
      }
      if (!(!v && !p)) {
        var E;
        if (u.window === u)
          E = u;
        else {
          var b = u.ownerDocument;
          b ? E = b.defaultView || b.parentWindow : E = window;
        }
        var R, L;
        if (v) {
          var z = i.relatedTarget || i.toElement;
          if (R = a, L = z ? Bo(z) : null, L !== null) {
            var A = fr(L);
            (L !== A || L.tag !== Z && L.tag !== xe) && (L = null);
          }
        } else
          R = null, L = a;
        if (R !== L) {
          var ue = Ni, Re = "onMouseLeave", Se = "onMouseEnter", qe = "mouse";
          (t === "pointerout" || t === "pointerover") && (ue = Cd, Re = "onPointerLeave", Se = "onPointerEnter", qe = "pointer");
          var Ge = R == null ? E : Oc(R), _ = L == null ? E : Oc(L), H = new ue(Re, qe + "leave", R, i, u);
          H.target = Ge, H.relatedTarget = _;
          var O = null, W = Bo(u);
          if (W === a) {
            var oe = new ue(Se, qe + "enter", L, i, u);
            oe.target = _, oe.relatedTarget = Ge, O = oe;
          }
          YT(e, H, O, R, L);
        }
      }
    }
    function ge(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ve = typeof Object.is == "function" ? Object.is : ge;
    function Ce(e, t) {
      if (ve(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Qn.call(t, s) || !ve(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Le(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function ln(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ze(e, t) {
      for (var a = Le(e), i = 0, u = 0; a; ) {
        if (a.nodeType === za) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Le(ln(a));
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
      return xy(e, u, s, f, p);
    }
    function xy(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, E = e, b = null;
      e:
        for (; ; ) {
          for (var R = null; E === t && (a === 0 || E.nodeType === za) && (f = s + a), E === i && (u === 0 || E.nodeType === za) && (p = s + u), E.nodeType === za && (s += E.nodeValue.length), (R = E.firstChild) !== null; )
            b = E, E = R;
          for (; ; ) {
            if (E === e)
              break e;
            if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (R = E.nextSibling) !== null)
              break;
            E = b, b = E.parentNode;
          }
          E = R;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function wT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Ze(e, f), E = Ze(e, p);
        if (y && E) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === E.node && u.focusOffset === E.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(E.node, E.offset)) : (b.setEnd(E.node, E.offset), u.addRange(b));
        }
      }
    }
    function w0(e) {
      return e && e.nodeType === za;
    }
    function b0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : w0(e) ? !1 : w0(t) ? b0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function bT(e) {
      return e && e.ownerDocument && b0(e.ownerDocument.documentElement, e);
    }
    function DT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function D0() {
      for (var e = window, t = ps(); t instanceof e.HTMLIFrameElement; ) {
        if (DT(t))
          e = t.contentWindow;
        else
          return t;
        t = ps(e.document);
      }
      return t;
    }
    function Ry(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function kT() {
      var e = D0();
      return {
        focusedElem: e,
        selectionRange: Ry(e) ? OT(e) : null
      };
    }
    function _T(e) {
      var t = D0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && bT(a)) {
        i !== null && Ry(a) && MT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Gn && u.push({
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
    function OT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = zi(e), t || {
        start: 0,
        end: 0
      };
    }
    function MT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : wT(e, t);
    }
    var NT = Cn && "documentMode" in document && document.documentMode <= 11;
    function LT() {
      Tr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var wc = null, wy = null, Dd = null, by = !1;
    function zT(e) {
      if ("selectionStart" in e && Ry(e))
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
    function UT(e) {
      return e.window === e ? e.document : e.nodeType === na ? e : e.ownerDocument;
    }
    function k0(e, t, a) {
      var i = UT(a);
      if (!(by || wc == null || wc !== ps(i))) {
        var u = zT(wc);
        if (!Dd || !Ce(Dd, u)) {
          Dd = u;
          var s = ah(wy, "onSelect");
          if (s.length > 0) {
            var f = new On("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = wc;
          }
        }
      }
    }
    function AT(e, t, a, i, u, s, f) {
      var p = a ? Oc(a) : window;
      switch (t) {
        case "focusin":
          (xu(p) || p.contentEditable === "true") && (wc = p, wy = a, Dd = null);
          break;
        case "focusout":
          wc = null, wy = null, Dd = null;
          break;
        case "mousedown":
          by = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          by = !1, k0(e, i, u);
          break;
        case "selectionchange":
          if (NT)
            break;
        case "keydown":
        case "keyup":
          k0(e, i, u);
      }
    }
    function th(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var bc = {
      animationend: th("Animation", "AnimationEnd"),
      animationiteration: th("Animation", "AnimationIteration"),
      animationstart: th("Animation", "AnimationStart"),
      transitionend: th("Transition", "TransitionEnd")
    }, Dy = {}, _0 = {};
    Cn && (_0 = document.createElement("div").style, "AnimationEvent" in window || (delete bc.animationend.animation, delete bc.animationiteration.animation, delete bc.animationstart.animation), "TransitionEvent" in window || delete bc.transitionend.transition);
    function nh(e) {
      if (Dy[e])
        return Dy[e];
      if (!bc[e])
        return e;
      var t = bc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in _0)
          return Dy[e] = t[a];
      return e;
    }
    var O0 = nh("animationend"), M0 = nh("animationiteration"), N0 = nh("animationstart"), L0 = nh("transitionend"), z0 = /* @__PURE__ */ new Map(), U0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Ru(e, t) {
      z0.set(e, t), Tr(t, [e]);
    }
    function HT() {
      for (var e = 0; e < U0.length; e++) {
        var t = U0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Ru(a, "on" + i);
      }
      Ru(O0, "onAnimationEnd"), Ru(M0, "onAnimationIteration"), Ru(N0, "onAnimationStart"), Ru("dblclick", "onDoubleClick"), Ru("focusin", "onFocus"), Ru("focusout", "onBlur"), Ru(L0, "onTransitionEnd");
    }
    function FT(e, t, a, i, u, s, f) {
      var p = z0.get(t);
      if (p !== void 0) {
        var v = On, y = t;
        switch (t) {
          case "keypress":
            if (Sl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = my;
            break;
          case "focusin":
            y = "focus", v = hc;
            break;
          case "focusout":
            y = "blur", v = hc;
            break;
          case "beforeblur":
          case "afterblur":
            v = hc;
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
            v = Ni;
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
          case O0:
          case M0:
          case N0:
            v = mc;
            break;
          case L0:
            v = gy;
            break;
          case "scroll":
            v = md;
            break;
          case "wheel":
            v = gc;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = dy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Cd;
            break;
        }
        var E = (s & Ji) !== 0;
        {
          var b = !E && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", R = $T(a, p, i.type, E, b);
          if (R.length > 0) {
            var L = new v(p, y, null, i, u);
            e.push({
              event: L,
              listeners: R
            });
          }
        }
      }
    }
    HT(), N(), Rc(), LT(), Kv();
    function VT(e, t, a, i, u, s, f) {
      FT(e, t, a, i, u, s);
      var p = (s & Jm) === 0;
      p && (K(e, t, a, i, u), w(e, t, a, i, u), AT(e, t, a, i, u), xc(e, t, a, i, u));
    }
    var kd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], ky = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(kd));
    function A0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Fa(i, t, void 0, e), e.currentTarget = null;
    }
    function jT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          A0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var E = t[y], b = E.instance, R = E.currentTarget, L = E.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          A0(e, L, R), i = b;
        }
    }
    function H0(e, t) {
      for (var a = (t & Ji) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        jT(s, f, a);
      }
      Ff();
    }
    function BT(e, t, a, i, u) {
      var s = bs(a), f = [];
      VT(f, e, i, a, s, t), H0(f, t);
    }
    function bt(e, t) {
      ky.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = yR(t), u = QT(e, a);
      i.has(u) || (F0(t, e, oo, a), i.add(u));
    }
    function _y(e, t, a) {
      ky.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ji), F0(a, e, i, t);
    }
    var rh = "_reactListening" + Math.random().toString(36).slice(2);
    function _d(e) {
      if (!e[rh]) {
        e[rh] = !0, Xr.forEach(function(a) {
          a !== "selectionchange" && (ky.has(a) || _y(a, !1, e), _y(a, !0, e));
        });
        var t = e.nodeType === na ? e : e.ownerDocument;
        t !== null && (t[rh] || (t[rh] = !0, _y("selectionchange", !1, t)));
      }
    }
    function F0(e, t, a, i, u) {
      var s = mu(e, t, a), f = void 0;
      vo && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Ia(e, t, s, f) : gu(e, t, s) : f !== void 0 ? dc(e, t, s, f) : hd(e, t, s);
    }
    function V0(e, t) {
      return e === t || e.nodeType === jt && e.parentNode === t;
    }
    function Oy(e, t, a, i, u) {
      var s = i;
      if (!(t & Aa) && !(t & oo)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === $ || v === Y) {
                var y = p.stateNode.containerInfo;
                if (V0(y, f))
                  break;
                if (v === Y)
                  for (var E = p.return; E !== null; ) {
                    var b = E.tag;
                    if (b === $ || b === Y) {
                      var R = E.stateNode.containerInfo;
                      if (V0(R, f))
                        return;
                    }
                    E = E.return;
                  }
                for (; y !== null; ) {
                  var L = Bo(y);
                  if (L === null)
                    return;
                  var z = L.tag;
                  if (z === Z || z === xe) {
                    p = s = L;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      zf(function() {
        return BT(e, t, a, s);
      });
    }
    function Od(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function $T(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, E = null; y !== null; ) {
        var b = y, R = b.stateNode, L = b.tag;
        if (L === Z && R !== null && (E = R, p !== null)) {
          var z = tl(y, p);
          z != null && v.push(Od(y, z, E));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function ah(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === Z && f !== null) {
          var v = f, y = tl(u, a);
          y != null && i.unshift(Od(u, y, v));
          var E = tl(u, t);
          E != null && i.push(Od(u, E, v));
        }
        u = u.return;
      }
      return i;
    }
    function Dc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Z);
      return e || null;
    }
    function PT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Dc(s))
        u++;
      for (var f = 0, p = i; p; p = Dc(p))
        f++;
      for (; u - f > 0; )
        a = Dc(a), u--;
      for (; f - u > 0; )
        i = Dc(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Dc(a), i = Dc(i);
      }
      return null;
    }
    function j0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, E = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === Z && E !== null) {
          var R = E;
          if (u) {
            var L = tl(p, s);
            L != null && f.unshift(Od(p, L, R));
          } else if (!u) {
            var z = tl(p, s);
            z != null && f.push(Od(p, z, R));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function YT(e, t, a, i, u) {
      var s = i && u ? PT(i, u) : null;
      i !== null && j0(e, t, i, s, !1), u !== null && a !== null && j0(e, a, u, s, !0);
    }
    function QT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var jr = !1, Md = "dangerouslySetInnerHTML", ih = "suppressContentEditableWarning", wu = "suppressHydrationWarning", B0 = "autoFocus", Vo = "children", jo = "style", lh = "__html", My, uh, Nd, $0, oh, P0, Y0;
    My = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, uh = function(e, t) {
      ws(e, t), _f(e, t), mv(e, t, {
        registrationNameDependencies: ca,
        possibleRegistrationNames: Pu
      });
    }, P0 = Cn && !document.documentMode, Nd = function(e, t, a) {
      if (!jr) {
        var i = sh(a), u = sh(t);
        u !== i && (jr = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, $0 = function(e) {
      if (!jr) {
        jr = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, oh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, Y0 = function(e, t) {
      var a = e.namespaceURI === La ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var IT = /\r\n?/g, GT = /\u0000|\uFFFD/g;
    function sh(e) {
      Ii(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(IT, `
`).replace(GT, "");
    }
    function ch(e, t, a, i) {
      var u = sh(t), s = sh(e);
      if (s !== u && (i && (jr || (jr = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Cr))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function Q0(e) {
      return e.nodeType === na ? e : e.ownerDocument;
    }
    function XT() {
    }
    function fh(e) {
      e.onclick = XT;
    }
    function WT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === jo)
            f && Object.freeze(f), lv(t, f);
          else if (s === Md) {
            var p = f ? f[lh] : void 0;
            p != null && Wp(t, p);
          } else if (s === Vo)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && Cs(t, f);
            } else
              typeof f == "number" && Cs(t, "" + f);
          else
            s === ih || s === wu || s === B0 || (ca.hasOwnProperty(s) ? f != null && (typeof f != "function" && oh(s, f), s === "onScroll" && bt("scroll", t)) : f != null && Gi(t, s, f, u));
        }
    }
    function qT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === jo ? lv(e, f) : s === Md ? Wp(e, f) : s === Vo ? Cs(e, f) : Gi(e, s, f, i);
      }
    }
    function KT(e, t, a, i) {
      var u, s = Q0(a), f, p = i;
      if (p === La && (p = Ss(e)), p === La) {
        if (u = Ua(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var E = f;
          t.multiple ? E.multiple = !0 : t.size && (E.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === La && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Qn.call(My, e) && (My[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function ZT(e, t) {
      return Q0(t).createTextNode(e);
    }
    function JT(e, t, a, i) {
      var u = Ua(t, a);
      uh(t, a);
      var s;
      switch (t) {
        case "dialog":
          bt("cancel", e), bt("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          bt("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < kd.length; f++)
            bt(kd[f], e);
          s = a;
          break;
        case "source":
          bt("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          bt("error", e), bt("load", e), s = a;
          break;
        case "details":
          bt("toggle", e), s = a;
          break;
        case "input":
          no(e, a), s = to(e, a), bt("invalid", e);
          break;
        case "option":
          ys(e, a), s = a;
          break;
        case "select":
          Qp(e, a), s = gf(e, a), bt("invalid", e);
          break;
        case "textarea":
          Ip(e, a), s = Ef(e, a), bt("invalid", e);
          break;
        default:
          s = a;
      }
      switch (xs(t, s), WT(t, e, i, s, u), t) {
        case "input":
          qi(e), ro(e, a, !1);
          break;
        case "textarea":
          qi(e), Xp(e);
          break;
        case "option":
          yf(e, a);
          break;
        case "select":
          $m(e, a);
          break;
        default:
          typeof s.onClick == "function" && fh(e);
          break;
      }
    }
    function ex(e, t, a, i, u) {
      uh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = to(e, a), p = to(e, i), s = [];
          break;
        case "select":
          f = gf(e, a), p = gf(e, i), s = [];
          break;
        case "textarea":
          f = Ef(e, a), p = Ef(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && fh(e);
          break;
      }
      xs(t, p);
      var v, y, E = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === jo) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (E || (E = {}), E[y] = "");
          } else
            v === Md || v === Vo || v === ih || v === wu || v === B0 || (ca.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var R = p[v], L = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || R === L || R == null && L == null))
          if (v === jo)
            if (R && Object.freeze(R), L) {
              for (y in L)
                L.hasOwnProperty(y) && (!R || !R.hasOwnProperty(y)) && (E || (E = {}), E[y] = "");
              for (y in R)
                R.hasOwnProperty(y) && L[y] !== R[y] && (E || (E = {}), E[y] = R[y]);
            } else
              E || (s || (s = []), s.push(v, E)), E = R;
          else if (v === Md) {
            var z = R ? R[lh] : void 0, A = L ? L[lh] : void 0;
            z != null && A !== z && (s = s || []).push(v, z);
          } else
            v === Vo ? (typeof R == "string" || typeof R == "number") && (s = s || []).push(v, "" + R) : v === ih || v === wu || (ca.hasOwnProperty(v) ? (R != null && (typeof R != "function" && oh(v, R), v === "onScroll" && bt("scroll", e)), !s && L !== R && (s = [])) : (s = s || []).push(v, R));
      }
      return E && (lo(E, p[jo]), (s = s || []).push(jo, E)), s;
    }
    function tx(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && mf(e, u);
      var s = Ua(a, i), f = Ua(a, u);
      switch (qT(e, t, s, f), a) {
        case "input":
          Gl(e, u);
          break;
        case "textarea":
          Gp(e, u);
          break;
        case "select":
          Pm(e, u);
          break;
      }
    }
    function nx(e) {
      {
        var t = e.toLowerCase();
        return Rs.hasOwnProperty(t) && Rs[t] || null;
      }
    }
    function rx(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Ua(t, a), uh(t, a), t) {
        case "dialog":
          bt("cancel", e), bt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          bt("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < kd.length; y++)
            bt(kd[y], e);
          break;
        case "source":
          bt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          bt("error", e), bt("load", e);
          break;
        case "details":
          bt("toggle", e);
          break;
        case "input":
          no(e, a), bt("invalid", e);
          break;
        case "option":
          ys(e, a);
          break;
        case "select":
          Qp(e, a), bt("invalid", e);
          break;
        case "textarea":
          Ip(e, a), bt("invalid", e);
          break;
      }
      xs(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var E = e.attributes, b = 0; b < E.length; b++) {
          var R = E[b].name.toLowerCase();
          switch (R) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(E[b].name);
          }
        }
      }
      var L = null;
      for (var z in a)
        if (a.hasOwnProperty(z)) {
          var A = a[z];
          if (z === Vo)
            typeof A == "string" ? e.textContent !== A && (a[wu] !== !0 && ch(e.textContent, A, s, f), L = [Vo, A]) : typeof A == "number" && e.textContent !== "" + A && (a[wu] !== !0 && ch(e.textContent, A, s, f), L = [Vo, "" + A]);
          else if (ca.hasOwnProperty(z))
            A != null && (typeof A != "function" && oh(z, A), z === "onScroll" && bt("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ue = void 0, Re = p && Yn ? null : da(z);
            if (a[wu] !== !0) {
              if (!(z === ih || z === wu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              z === "value" || z === "checked" || z === "selected")) {
                if (z === Md) {
                  var Se = e.innerHTML, qe = A ? A[lh] : void 0;
                  if (qe != null) {
                    var Ge = Y0(e, qe);
                    Ge !== Se && Nd(z, Se, Ge);
                  }
                } else if (z === jo) {
                  if (v.delete(z), P0) {
                    var _ = Km(A);
                    ue = e.getAttribute("style"), _ !== ue && Nd(z, ue, _);
                  }
                } else if (p && !Yn)
                  v.delete(z.toLowerCase()), ue = os(e, z, A), A !== ue && Nd(z, ue, A);
                else if (!Yt(z, Re, p) && !kt(z, A, Re, p)) {
                  var H = !1;
                  if (Re !== null)
                    v.delete(Re.attributeName), ue = Qu(e, z, A, Re);
                  else {
                    var O = i;
                    if (O === La && (O = Ss(t)), O === La)
                      v.delete(z.toLowerCase());
                    else {
                      var W = nx(z);
                      W !== null && W !== z && (H = !0, v.delete(W)), v.delete(z);
                    }
                    ue = os(e, z, A);
                  }
                  var oe = Yn;
                  !oe && A !== ue && !H && Nd(z, ue, A);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[wu] !== !0 && $0(v), t) {
        case "input":
          qi(e), ro(e, a, !0);
          break;
        case "textarea":
          qi(e), Xp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && fh(e);
          break;
      }
      return L;
    }
    function ax(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ny(e, t) {
      {
        if (jr)
          return;
        jr = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (jr)
          return;
        jr = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function zy(e, t, a) {
      {
        if (jr)
          return;
        jr = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Uy(e, t) {
      {
        if (t === "" || jr)
          return;
        jr = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function ix(e, t, a) {
      switch (t) {
        case "input":
          Bp(e, a);
          return;
        case "textarea":
          Cf(e, a);
          return;
        case "select":
          Ym(e, a);
          return;
      }
    }
    var Ld = function() {
    }, zd = function() {
    };
    {
      var lx = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], I0 = [
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
      ], ux = I0.concat(["button"]), ox = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], G0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      zd = function(e, t) {
        var a = Qe({}, e || G0), i = {
          tag: t
        };
        return I0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), ux.indexOf(t) !== -1 && (a.pTagInButtonScope = null), lx.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var sx = function(e, t) {
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
            return ox.indexOf(t) === -1;
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
      }, cx = function(e, t) {
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
      }, X0 = {};
      Ld = function(e, t, a) {
        a = a || G0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = sx(e, u) ? null : i, f = s ? null : cx(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!X0[y]) {
            X0[y] = !0;
            var E = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? E = "Text nodes" : (E = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : E = "<" + e + ">", s) {
              var R = "";
              v === "table" && e === "tr" && (R += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", E, v, b, R);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", E, v);
          }
        }
      };
    }
    var dh = "suppressHydrationWarning", ph = "$", vh = "/$", Ud = "$?", Ad = "$!", fx = "style", Ay = null, Hy = null;
    function dx(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case na:
        case Ki: {
          t = i === na ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : xf(null, "");
          break;
        }
        default: {
          var s = i === jt ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = xf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = zd(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function px(e, t, a) {
      {
        var i = e, u = xf(i.namespace, t), s = zd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function c_(e) {
      return e;
    }
    function vx(e) {
      Ay = hr(), Hy = kT();
      var t = null;
      return an(!1), t;
    }
    function hx(e) {
      _T(Hy), an(Ay), Ay = null, Hy = null;
    }
    function mx(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Ld(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = zd(f.ancestorInfo, e);
          Ld(null, p, v);
        }
        s = f.namespace;
      }
      var y = KT(e, t, a, s);
      return Vd(u, y), Qy(y, t), y;
    }
    function yx(e, t) {
      e.appendChild(t);
    }
    function gx(e, t, a, i, u) {
      switch (JT(e, t, a, i), t) {
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
    function Sx(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = zd(f.ancestorInfo, t);
          Ld(null, p, v);
        }
      }
      return ex(e, t, a, i);
    }
    function Fy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Ex(e, t, a, i) {
      {
        var u = a;
        Ld(null, e, u.ancestorInfo);
      }
      var s = ZT(e, t);
      return Vd(i, s), s;
    }
    function Cx() {
      var e = window.event;
      return e === void 0 ? Pa : zn(e.type);
    }
    var Vy = typeof setTimeout == "function" ? setTimeout : void 0, Tx = typeof clearTimeout == "function" ? clearTimeout : void 0, jy = -1, W0 = typeof Promise == "function" ? Promise : void 0, xx = typeof queueMicrotask == "function" ? queueMicrotask : typeof W0 < "u" ? function(e) {
      return W0.resolve(null).then(e).catch(Rx);
    } : Vy;
    function Rx(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function wx(e, t, a, i) {
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
    function bx(e, t, a, i, u, s) {
      tx(e, t, a, i, u), Qy(e, u);
    }
    function q0(e) {
      Cs(e, "");
    }
    function Dx(e, t, a) {
      e.nodeValue = a;
    }
    function kx(e, t) {
      e.appendChild(t);
    }
    function _x(e, t) {
      var a;
      e.nodeType === jt ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && fh(a);
    }
    function Ox(e, t, a) {
      e.insertBefore(t, a);
    }
    function Mx(e, t, a) {
      e.nodeType === jt ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Nx(e, t) {
      e.removeChild(t);
    }
    function Lx(e, t) {
      e.nodeType === jt ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function By(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === jt) {
          var s = u.data;
          if (s === vh)
            if (i === 0) {
              e.removeChild(u), Ie(t);
              return;
            } else
              i--;
          else
            (s === ph || s === Ud || s === Ad) && i++;
        }
        a = u;
      } while (a);
      Ie(t);
    }
    function zx(e, t) {
      e.nodeType === jt ? By(e.parentNode, t) : e.nodeType === Gn && By(e, t), Ie(e);
    }
    function Ux(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Ax(e) {
      e.nodeValue = "";
    }
    function Hx(e, t) {
      e = e;
      var a = t[fx], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Ts("display", i);
    }
    function Fx(e, t) {
      e.nodeValue = t;
    }
    function Vx(e) {
      e.nodeType === Gn ? e.textContent = "" : e.nodeType === na && e.documentElement && e.removeChild(e.documentElement);
    }
    function jx(e, t, a) {
      return e.nodeType !== Gn || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Bx(e, t) {
      return t === "" || e.nodeType !== za ? null : e;
    }
    function $x(e) {
      return e.nodeType !== jt ? null : e;
    }
    function K0(e) {
      return e.data === Ud;
    }
    function $y(e) {
      return e.data === Ad;
    }
    function Px(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function Yx(e, t) {
      e._reactRetry = t;
    }
    function hh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Gn || t === za)
          break;
        if (t === jt) {
          var a = e.data;
          if (a === ph || a === Ad || a === Ud)
            break;
          if (a === vh)
            return null;
        }
      }
      return e;
    }
    function Hd(e) {
      return hh(e.nextSibling);
    }
    function Qx(e) {
      return hh(e.firstChild);
    }
    function Ix(e) {
      return hh(e.firstChild);
    }
    function Gx(e) {
      return hh(e.nextSibling);
    }
    function Xx(e, t, a, i, u, s, f) {
      Vd(s, e), Qy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & $e) !== be;
      return rx(e, t, a, p, i, y, f);
    }
    function Wx(e, t, a, i) {
      return Vd(a, e), a.mode & $e, ax(e, t);
    }
    function qx(e, t) {
      Vd(t, e);
    }
    function Kx(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === jt) {
          var i = t.data;
          if (i === vh) {
            if (a === 0)
              return Hd(t);
            a--;
          } else
            (i === ph || i === Ad || i === Ud) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Z0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === jt) {
          var i = t.data;
          if (i === ph || i === Ad || i === Ud) {
            if (a === 0)
              return t;
            a--;
          } else
            i === vh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Zx(e) {
      Ie(e);
    }
    function Jx(e) {
      Ie(e);
    }
    function eR(e) {
      return e !== "head" && e !== "body";
    }
    function tR(e, t, a, i) {
      var u = !0;
      ch(t.nodeValue, a, i, u);
    }
    function nR(e, t, a, i, u, s) {
      if (t[dh] !== !0) {
        var f = !0;
        ch(i.nodeValue, u, s, f);
      }
    }
    function rR(e, t) {
      t.nodeType === Gn ? Ny(e, t) : t.nodeType === jt || Ly(e, t);
    }
    function aR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Gn ? Ny(a, t) : t.nodeType === jt || Ly(a, t));
      }
    }
    function iR(e, t, a, i, u) {
      (u || t[dh] !== !0) && (i.nodeType === Gn ? Ny(a, i) : i.nodeType === jt || Ly(a, i));
    }
    function lR(e, t, a) {
      zy(e, t);
    }
    function uR(e, t) {
      Uy(e, t);
    }
    function oR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && zy(i, t);
      }
    }
    function sR(e, t) {
      {
        var a = e.parentNode;
        a !== null && Uy(a, t);
      }
    }
    function cR(e, t, a, i, u, s) {
      (s || t[dh] !== !0) && zy(a, i);
    }
    function fR(e, t, a, i, u) {
      (u || t[dh] !== !0) && Uy(a, i);
    }
    function dR(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function pR(e) {
      _d(e);
    }
    var kc = Math.random().toString(36).slice(2), _c = "__reactFiber$" + kc, Py = "__reactProps$" + kc, Fd = "__reactContainer$" + kc, Yy = "__reactEvents$" + kc, vR = "__reactListeners$" + kc, hR = "__reactHandles$" + kc;
    function mR(e) {
      delete e[_c], delete e[Py], delete e[Yy], delete e[vR], delete e[hR];
    }
    function Vd(e, t) {
      t[_c] = e;
    }
    function mh(e, t) {
      t[Fd] = e;
    }
    function J0(e) {
      e[Fd] = null;
    }
    function jd(e) {
      return !!e[Fd];
    }
    function Bo(e) {
      var t = e[_c];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Fd] || a[_c], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = Z0(e); u !== null; ) {
              var s = u[_c];
              if (s)
                return s;
              u = Z0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function bu(e) {
      var t = e[_c] || e[Fd];
      return t && (t.tag === Z || t.tag === xe || t.tag === Ee || t.tag === $) ? t : null;
    }
    function Oc(e) {
      if (e.tag === Z || e.tag === xe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function yh(e) {
      return e[Py] || null;
    }
    function Qy(e, t) {
      e[Py] = t;
    }
    function yR(e) {
      var t = e[Yy];
      return t === void 0 && (t = e[Yy] = /* @__PURE__ */ new Set()), t;
    }
    var eE = {}, tE = h.ReactDebugCurrentFrame;
    function gh(e) {
      if (e) {
        var t = e._owner, a = Wu(e.type, e._source, t ? t.type : null);
        tE.setExtraStackFrame(a);
      } else
        tE.setExtraStackFrame(null);
    }
    function Xa(e, t, a, i, u) {
      {
        var s = Function.call.bind(Qn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (gh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), gh(null)), p instanceof Error && !(p.message in eE) && (eE[p.message] = !0, gh(u), S("Failed %s type: %s", a, p.message), gh(null));
          }
      }
    }
    var Iy = [], Sh;
    Sh = [];
    var wl = -1;
    function Du(e) {
      return {
        current: e
      };
    }
    function nr(e, t) {
      if (wl < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Sh[wl] && S("Unexpected Fiber popped."), e.current = Iy[wl], Iy[wl] = null, Sh[wl] = null, wl--;
    }
    function rr(e, t, a) {
      wl++, Iy[wl] = e.current, Sh[wl] = a, e.current = t;
    }
    var Gy;
    Gy = {};
    var ua = {};
    Object.freeze(ua);
    var bl = Du(ua), Ui = Du(!1), Xy = ua;
    function Mc(e, t, a) {
      return a && Ai(t) ? Xy : bl.current;
    }
    function nE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Nc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ua;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = He(e) || "Unknown";
          Xa(i, s, "context", p);
        }
        return u && nE(e, t, s), s;
      }
    }
    function Eh() {
      return Ui.current;
    }
    function Ai(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ch(e) {
      nr(Ui, e), nr(bl, e);
    }
    function Wy(e) {
      nr(Ui, e), nr(bl, e);
    }
    function rE(e, t, a) {
      {
        if (bl.current !== ua)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        rr(bl, t, e), rr(Ui, a, e);
      }
    }
    function aE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = He(e) || "Unknown";
            Gy[s] || (Gy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((He(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = He(e) || "Unknown";
          Xa(u, f, "child context", v);
        }
        return Qe({}, a, f);
      }
    }
    function Th(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ua;
        return Xy = bl.current, rr(bl, a, e), rr(Ui, Ui.current, e), !0;
      }
    }
    function iE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = aE(e, t, Xy);
          i.__reactInternalMemoizedMergedChildContext = u, nr(Ui, e), nr(bl, e), rr(bl, u, e), rr(Ui, a, e);
        } else
          nr(Ui, e), rr(Ui, a, e);
      }
    }
    function gR(e) {
      {
        if (!Pf(e) || e.tag !== P)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case $:
              return t.stateNode.context;
            case P: {
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
    var ku = 0, xh = 1, Dl = null, qy = !1, Ky = !1;
    function lE(e) {
      Dl === null ? Dl = [e] : Dl.push(e);
    }
    function SR(e) {
      qy = !0, lE(e);
    }
    function uE() {
      qy && _u();
    }
    function _u() {
      if (!Ky && Dl !== null) {
        Ky = !0;
        var e = 0, t = Ar();
        try {
          var a = !0, i = Dl;
          for (Xt(wn); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Dl = null, qy = !1;
        } catch (s) {
          throw Dl !== null && (Dl = Dl.slice(e + 1)), Ls(Us, _u), s;
        } finally {
          Xt(t), Ky = !1;
        }
      }
      return null;
    }
    var Lc = [], zc = 0, Rh = null, wh = 0, Ca = [], Ta = 0, $o = null, kl = 1, _l = "";
    function ER(e) {
      return Yo(), (e.flags & jf) !== Te;
    }
    function CR(e) {
      return Yo(), wh;
    }
    function TR() {
      var e = _l, t = kl, a = t & ~xR(t);
      return a.toString(32) + e;
    }
    function Po(e, t) {
      Yo(), Lc[zc++] = wh, Lc[zc++] = Rh, Rh = e, wh = t;
    }
    function oE(e, t, a) {
      Yo(), Ca[Ta++] = kl, Ca[Ta++] = _l, Ca[Ta++] = $o, $o = e;
      var i = kl, u = _l, s = bh(i) - 1, f = i & ~(1 << s), p = a + 1, v = bh(t) + s;
      if (v > 30) {
        var y = s - s % 5, E = (1 << y) - 1, b = (f & E).toString(32), R = f >> y, L = s - y, z = bh(t) + L, A = p << L, ue = A | R, Re = b + u;
        kl = 1 << z | ue, _l = Re;
      } else {
        var Se = p << s, qe = Se | f, Ge = u;
        kl = 1 << v | qe, _l = Ge;
      }
    }
    function Zy(e) {
      Yo();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Po(e, a), oE(e, a, i);
      }
    }
    function bh(e) {
      return 32 - Bs(e);
    }
    function xR(e) {
      return 1 << bh(e) - 1;
    }
    function Jy(e) {
      for (; e === Rh; )
        Rh = Lc[--zc], Lc[zc] = null, wh = Lc[--zc], Lc[zc] = null;
      for (; e === $o; )
        $o = Ca[--Ta], Ca[Ta] = null, _l = Ca[--Ta], Ca[Ta] = null, kl = Ca[--Ta], Ca[Ta] = null;
    }
    function RR() {
      return Yo(), $o !== null ? {
        id: kl,
        overflow: _l
      } : null;
    }
    function wR(e, t) {
      Yo(), Ca[Ta++] = kl, Ca[Ta++] = _l, Ca[Ta++] = $o, kl = t.id, _l = t.overflow, $o = e;
    }
    function Yo() {
      An() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Un = null, xa = null, Wa = !1, Qo = !1, Ou = null;
    function bR() {
      Wa && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function sE() {
      Qo = !0;
    }
    function DR() {
      return Qo;
    }
    function kR(e) {
      var t = e.stateNode.containerInfo;
      return xa = Ix(t), Un = e, Wa = !0, Ou = null, Qo = !1, !0;
    }
    function _R(e, t, a) {
      return xa = Gx(t), Un = e, Wa = !0, Ou = null, Qo = !1, a !== null && wR(e, a), !0;
    }
    function cE(e, t) {
      switch (e.tag) {
        case $: {
          rR(e.stateNode.containerInfo, t);
          break;
        }
        case Z: {
          var a = (e.mode & $e) !== be;
          iR(
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
          i.dehydrated !== null && aR(i.dehydrated, t);
          break;
        }
      }
    }
    function fE(e, t) {
      cE(e, t);
      var a = ND();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= nt) : i.push(a);
    }
    function eg(e, t) {
      {
        if (Qo)
          return;
        switch (e.tag) {
          case $: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Z:
                var i = t.type;
                t.pendingProps, lR(a, i);
                break;
              case xe:
                var u = t.pendingProps;
                uR(a, u);
                break;
            }
            break;
          }
          case Z: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case Z: {
                var v = t.type, y = t.pendingProps, E = (e.mode & $e) !== be;
                cR(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  E
                );
                break;
              }
              case xe: {
                var b = t.pendingProps, R = (e.mode & $e) !== be;
                fR(
                  s,
                  f,
                  p,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  R
                );
                break;
              }
            }
            break;
          }
          case Ee: {
            var L = e.memoizedState, z = L.dehydrated;
            if (z !== null)
              switch (t.tag) {
                case Z:
                  var A = t.type;
                  t.pendingProps, oR(z, A);
                  break;
                case xe:
                  var ue = t.pendingProps;
                  sR(z, ue);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function dE(e, t) {
      t.flags = t.flags & ~Mr | ht, eg(e, t);
    }
    function pE(e, t) {
      switch (e.tag) {
        case Z: {
          var a = e.type;
          e.pendingProps;
          var i = jx(t, a);
          return i !== null ? (e.stateNode = i, Un = e, xa = Qx(i), !0) : !1;
        }
        case xe: {
          var u = e.pendingProps, s = Bx(t, u);
          return s !== null ? (e.stateNode = s, Un = e, xa = null, !0) : !1;
        }
        case Ee: {
          var f = $x(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: RR(),
              retryLane: er
            };
            e.memoizedState = p;
            var v = LD(f);
            return v.return = e, e.child = v, Un = e, xa = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function tg(e) {
      return (e.mode & $e) !== be && (e.flags & Ne) === Te;
    }
    function ng(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function rg(e) {
      if (Wa) {
        var t = xa;
        if (!t) {
          tg(e) && (eg(Un, e), ng()), dE(Un, e), Wa = !1, Un = e;
          return;
        }
        var a = t;
        if (!pE(e, t)) {
          tg(e) && (eg(Un, e), ng()), t = Hd(a);
          var i = Un;
          if (!t || !pE(e, t)) {
            dE(Un, e), Wa = !1, Un = e;
            return;
          }
          fE(i, a);
        }
      }
    }
    function OR(e, t, a) {
      var i = e.stateNode, u = !Qo, s = Xx(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function MR(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Wx(t, a, e);
      if (i) {
        var u = Un;
        if (u !== null)
          switch (u.tag) {
            case $: {
              var s = u.stateNode.containerInfo, f = (u.mode & $e) !== be;
              tR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case Z: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, E = (u.mode & $e) !== be;
              nR(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                E
              );
              break;
            }
          }
      }
      return i;
    }
    function NR(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      qx(a, e);
    }
    function LR(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Kx(a);
    }
    function vE(e) {
      for (var t = e.return; t !== null && t.tag !== Z && t.tag !== $ && t.tag !== Ee; )
        t = t.return;
      Un = t;
    }
    function Dh(e) {
      if (e !== Un)
        return !1;
      if (!Wa)
        return vE(e), Wa = !0, !1;
      if (e.tag !== $ && (e.tag !== Z || eR(e.type) && !Fy(e.type, e.memoizedProps))) {
        var t = xa;
        if (t)
          if (tg(e))
            hE(e), ng();
          else
            for (; t; )
              fE(e, t), t = Hd(t);
      }
      return vE(e), e.tag === Ee ? xa = LR(e) : xa = Un ? Hd(e.stateNode) : null, !0;
    }
    function zR() {
      return Wa && xa !== null;
    }
    function hE(e) {
      for (var t = xa; t; )
        cE(e, t), t = Hd(t);
    }
    function Uc() {
      Un = null, xa = null, Wa = !1, Qo = !1;
    }
    function mE() {
      Ou !== null && (cC(Ou), Ou = null);
    }
    function An() {
      return Wa;
    }
    function ag(e) {
      Ou === null ? Ou = [e] : Ou.push(e);
    }
    var UR = h.ReactCurrentBatchConfig, AR = null;
    function HR() {
      return UR.transition;
    }
    var qa = {
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
      var FR = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Rt && (t = a), a = a.return;
        return t;
      }, Io = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Bd = [], $d = [], Pd = [], Yd = [], Qd = [], Id = [], Go = /* @__PURE__ */ new Set();
      qa.recordUnsafeLifecycleWarnings = function(e, t) {
        Go.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Bd.push(e), e.mode & Rt && typeof t.UNSAFE_componentWillMount == "function" && $d.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Pd.push(e), e.mode & Rt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Yd.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Qd.push(e), e.mode & Rt && typeof t.UNSAFE_componentWillUpdate == "function" && Id.push(e));
      }, qa.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Bd.length > 0 && (Bd.forEach(function(R) {
          e.add(He(R) || "Component"), Go.add(R.type);
        }), Bd = []);
        var t = /* @__PURE__ */ new Set();
        $d.length > 0 && ($d.forEach(function(R) {
          t.add(He(R) || "Component"), Go.add(R.type);
        }), $d = []);
        var a = /* @__PURE__ */ new Set();
        Pd.length > 0 && (Pd.forEach(function(R) {
          a.add(He(R) || "Component"), Go.add(R.type);
        }), Pd = []);
        var i = /* @__PURE__ */ new Set();
        Yd.length > 0 && (Yd.forEach(function(R) {
          i.add(He(R) || "Component"), Go.add(R.type);
        }), Yd = []);
        var u = /* @__PURE__ */ new Set();
        Qd.length > 0 && (Qd.forEach(function(R) {
          u.add(He(R) || "Component"), Go.add(R.type);
        }), Qd = []);
        var s = /* @__PURE__ */ new Set();
        if (Id.length > 0 && (Id.forEach(function(R) {
          s.add(He(R) || "Component"), Go.add(R.type);
        }), Id = []), t.size > 0) {
          var f = Io(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Io(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Io(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Io(e);
          V(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var E = Io(a);
          V(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (u.size > 0) {
          var b = Io(u);
          V(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var kh = /* @__PURE__ */ new Map(), yE = /* @__PURE__ */ new Set();
      qa.recordLegacyContextWarning = function(e, t) {
        var a = FR(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!yE.has(e.type)) {
          var i = kh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], kh.set(a, i)), i.push(e));
        }
      }, qa.flushLegacyContextWarning = function() {
        kh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(He(s) || "Component"), yE.add(s.type);
            });
            var u = Io(i);
            try {
              ot(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Qt();
            }
          }
        });
      }, qa.discardPendingWarnings = function() {
        Bd = [], $d = [], Pd = [], Yd = [], Qd = [], Id = [], kh = /* @__PURE__ */ new Map();
      };
    }
    function Ka(e, t) {
      if (e && e.defaultProps) {
        var a = Qe({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var ig = Du(null), lg;
    lg = {};
    var _h = null, Ac = null, ug = null, Oh = !1;
    function Mh() {
      _h = null, Ac = null, ug = null, Oh = !1;
    }
    function gE() {
      Oh = !0;
    }
    function SE() {
      Oh = !1;
    }
    function EE(e, t, a) {
      rr(ig, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== lg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = lg;
    }
    function og(e, t) {
      var a = ig.current;
      nr(ig, t), e._currentValue = a;
    }
    function sg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (vl(i.childLanes, t) ? u !== null && !vl(u.childLanes, t) && (u.childLanes = Ve(u.childLanes, t)) : (i.childLanes = Ve(i.childLanes, t), u !== null && (u.childLanes = Ve(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function VR(e, t, a) {
      jR(e, t, a);
    }
    function jR(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === P) {
                var p = Gt(a), v = Ol(vt, p);
                v.tag = Lh;
                var y = i.updateQueue;
                if (y !== null) {
                  var E = y.shared, b = E.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), E.pending = v;
                }
              }
              i.lanes = Ve(i.lanes, a);
              var R = i.alternate;
              R !== null && (R.lanes = Ve(R.lanes, a)), sg(i.return, a, e), s.lanes = Ve(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === B)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Tt) {
          var L = i.return;
          if (L === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          L.lanes = Ve(L.lanes, a);
          var z = L.alternate;
          z !== null && (z.lanes = Ve(z.lanes, a)), sg(L, a, e), u = i.sibling;
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
            var A = u.sibling;
            if (A !== null) {
              A.return = u.return, u = A;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Hc(e, t) {
      _h = e, Ac = null, ug = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (tr(a.lanes, t) && lp(), a.firstContext = null);
      }
    }
    function un(e) {
      Oh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (ug !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Ac === null) {
          if (_h === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Ac = a, _h.dependencies = {
            lanes: F,
            firstContext: a
          };
        } else
          Ac = Ac.next = a;
      }
      return t;
    }
    var Xo = null;
    function cg(e) {
      Xo === null ? Xo = [e] : Xo.push(e);
    }
    function BR() {
      if (Xo !== null) {
        for (var e = 0; e < Xo.length; e++) {
          var t = Xo[e], a = t.interleaved;
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
        Xo = null;
      }
    }
    function CE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, cg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Nh(e, i);
    }
    function $R(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, cg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function PR(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, cg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Nh(e, i);
    }
    function Br(e, t) {
      return Nh(e, t);
    }
    var YR = Nh;
    function Nh(e, t) {
      e.lanes = Ve(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ve(a.lanes, t)), a === null && (e.flags & (ht | Mr)) !== Te && TC(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ve(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ve(a.childLanes, t) : (u.flags & (ht | Mr)) !== Te && TC(e), i = u, u = u.return;
      if (i.tag === $) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var TE = 0, xE = 1, Lh = 2, fg = 3, zh = !1, dg, Uh;
    dg = !1, Uh = null;
    function pg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: F
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function RE(e, t) {
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
        tag: TE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Mu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Uh === u && !dg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), dg = !0), Yb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, YR(e, a);
      } else
        return PR(e, u, t, a);
    }
    function Ah(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (nd(a)) {
          var s = u.lanes;
          s = ad(s, e.pendingLanes);
          var f = Ve(s, a);
          u.lanes = f, fu(e, f);
        }
      }
    }
    function vg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
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
      var E = a.lastBaseUpdate;
      E === null ? a.firstBaseUpdate = t : E.next = t, a.lastBaseUpdate = t;
    }
    function QR(e, t, a, i, u, s) {
      switch (a.tag) {
        case xE: {
          var f = a.payload;
          if (typeof f == "function") {
            gE();
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
              SE();
            }
            return p;
          }
          return f;
        }
        case fg:
          e.flags = e.flags & ~tn | Ne;
        case TE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            gE(), y = v.call(s, i, u);
            {
              if (e.mode & Rt) {
                It(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  It(!1);
                }
              }
              SE();
            }
          } else
            y = v;
          return y == null ? i : Qe({}, i, y);
        }
        case Lh:
          return zh = !0, i;
      }
      return i;
    }
    function Hh(e, t, a, i) {
      var u = e.updateQueue;
      zh = !1, Uh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var E = e.alternate;
        if (E !== null) {
          var b = E.updateQueue, R = b.lastBaseUpdate;
          R !== f && (R === null ? b.firstBaseUpdate = y : R.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var L = u.baseState, z = F, A = null, ue = null, Re = null, Se = s;
        do {
          var qe = Se.lane, Ge = Se.eventTime;
          if (vl(i, qe)) {
            if (Re !== null) {
              var H = {
                eventTime: Ge,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Xe,
                tag: Se.tag,
                payload: Se.payload,
                callback: Se.callback,
                next: null
              };
              Re = Re.next = H;
            }
            L = QR(e, u, Se, L, t, a);
            var O = Se.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            Se.lane !== Xe) {
              e.flags |= ha;
              var W = u.effects;
              W === null ? u.effects = [Se] : W.push(Se);
            }
          } else {
            var _ = {
              eventTime: Ge,
              lane: qe,
              tag: Se.tag,
              payload: Se.payload,
              callback: Se.callback,
              next: null
            };
            Re === null ? (ue = Re = _, A = L) : Re = Re.next = _, z = Ve(z, qe);
          }
          if (Se = Se.next, Se === null) {
            if (p = u.shared.pending, p === null)
              break;
            var oe = p, ae = oe.next;
            oe.next = null, Se = ae, u.lastBaseUpdate = oe, u.shared.pending = null;
          }
        } while (!0);
        Re === null && (A = L), u.baseState = A, u.firstBaseUpdate = ue, u.lastBaseUpdate = Re;
        var Oe = u.shared.interleaved;
        if (Oe !== null) {
          var Ae = Oe;
          do
            z = Ve(z, Ae.lane), Ae = Ae.next;
          while (Ae !== Oe);
        } else
          s === null && (u.shared.lanes = F);
        gp(z), e.lanes = z, e.memoizedState = L;
      }
      Uh = null;
    }
    function IR(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function wE() {
      zh = !1;
    }
    function Fh() {
      return zh;
    }
    function bE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, IR(f, a));
        }
    }
    var hg = {}, DE = new T.Component().refs, mg, yg, gg, Sg, Eg, kE, Vh, Cg, Tg, xg;
    {
      mg = /* @__PURE__ */ new Set(), yg = /* @__PURE__ */ new Set(), gg = /* @__PURE__ */ new Set(), Sg = /* @__PURE__ */ new Set(), Cg = /* @__PURE__ */ new Set(), Eg = /* @__PURE__ */ new Set(), Tg = /* @__PURE__ */ new Set(), xg = /* @__PURE__ */ new Set();
      var _E = /* @__PURE__ */ new Set();
      Vh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          _E.has(a) || (_E.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, kE = function(e, t) {
        if (t === void 0) {
          var a = dt(e) || "Component";
          Eg.has(a) || (Eg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(hg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(hg);
    }
    function Rg(e, t, a, i) {
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
        kE(t, s);
      }
      var f = s == null ? u : Qe({}, u, s);
      if (e.memoizedState = f, e.lanes === F) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var wg = {
      isMounted: dr,
      enqueueSetState: function(e, t, a) {
        var i = _r(e), u = gr(), s = Vu(i), f = Ol(u, s);
        f.payload = t, a != null && (Vh(a, "setState"), f.callback = a);
        var p = Mu(i, f, s);
        p !== null && (Sn(p, i, s, u), Ah(p, i, s)), bi(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = _r(e), u = gr(), s = Vu(i), f = Ol(u, s);
        f.tag = xE, f.payload = t, a != null && (Vh(a, "replaceState"), f.callback = a);
        var p = Mu(i, f, s);
        p !== null && (Sn(p, i, s, u), Ah(p, i, s)), bi(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = _r(e), i = gr(), u = Vu(a), s = Ol(i, u);
        s.tag = Lh, t != null && (Vh(t, "forceUpdate"), s.callback = t);
        var f = Mu(a, s, u);
        f !== null && (Sn(f, a, u, i), Ah(f, a, u)), Zf(a, u);
      }
    };
    function OE(e, t, a, i, u, s, f) {
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
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", dt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ce(a, i) || !Ce(u, s) : !0;
    }
    function GR(e, t, a) {
      var i = e.stateNode;
      {
        var u = dt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Tg.has(t) && (Tg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", dt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !gg.has(t) && (gg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", dt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Jt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function ME(e, t) {
      t.updater = wg, e.stateNode = t, tu(t, e), t._reactInternalInstance = hg;
    }
    function NE(e, t, a) {
      var i = !1, u = ua, s = ua, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === lf && f._context === void 0
        );
        if (!p && !xg.has(t)) {
          xg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === af ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", dt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = un(f);
      else {
        u = Mc(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Nc(e, u) : ua;
      }
      var E = new t(a, s);
      if (e.mode & Rt) {
        It(!0);
        try {
          E = new t(a, s);
        } finally {
          It(!1);
        }
      }
      var b = e.memoizedState = E.state !== null && E.state !== void 0 ? E.state : null;
      ME(e, E);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var R = dt(t) || "Component";
          yg.has(R) || (yg.add(R), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", R, E.state === null ? "null" : "undefined", R));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof E.getSnapshotBeforeUpdate == "function") {
          var L = null, z = null, A = null;
          if (typeof E.componentWillMount == "function" && E.componentWillMount.__suppressDeprecationWarning !== !0 ? L = "componentWillMount" : typeof E.UNSAFE_componentWillMount == "function" && (L = "UNSAFE_componentWillMount"), typeof E.componentWillReceiveProps == "function" && E.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? z = "componentWillReceiveProps" : typeof E.UNSAFE_componentWillReceiveProps == "function" && (z = "UNSAFE_componentWillReceiveProps"), typeof E.componentWillUpdate == "function" && E.componentWillUpdate.__suppressDeprecationWarning !== !0 ? A = "componentWillUpdate" : typeof E.UNSAFE_componentWillUpdate == "function" && (A = "UNSAFE_componentWillUpdate"), L !== null || z !== null || A !== null) {
            var ue = dt(t) || "Component", Re = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Sg.has(ue) || (Sg.add(ue), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ue, Re, L !== null ? `
  ` + L : "", z !== null ? `
  ` + z : "", A !== null ? `
  ` + A : ""));
          }
        }
      }
      return i && nE(e, u, s), E;
    }
    function XR(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", He(e) || "Component"), wg.enqueueReplaceState(t, t.state, null));
    }
    function LE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = He(e) || "Component";
          mg.has(s) || (mg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        wg.enqueueReplaceState(t, t.state, null);
      }
    }
    function bg(e, t, a, i) {
      GR(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = DE, pg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = un(s);
      else {
        var f = Mc(e, t, !0);
        u.context = Nc(e, f);
      }
      {
        if (u.state === a) {
          var p = dt(t) || "Component";
          Cg.has(p) || (Cg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Rt && qa.recordLegacyContextWarning(e, u), qa.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (Rg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (XR(e, u), Hh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Fe;
        y |= Wn, (e.mode & zr) !== be && (y |= qn), e.flags |= y;
      }
    }
    function WR(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ua;
      if (typeof p == "object" && p !== null)
        v = un(p);
      else {
        var y = Mc(e, t, !0);
        v = Nc(e, y);
      }
      var E = t.getDerivedStateFromProps, b = typeof E == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && LE(e, u, a, v), wE();
      var R = e.memoizedState, L = u.state = R;
      if (Hh(e, a, u, i), L = e.memoizedState, s === a && R === L && !Eh() && !Fh()) {
        if (typeof u.componentDidMount == "function") {
          var z = Fe;
          z |= Wn, (e.mode & zr) !== be && (z |= qn), e.flags |= z;
        }
        return !1;
      }
      typeof E == "function" && (Rg(e, t, E, a), L = e.memoizedState);
      var A = Fh() || OE(e, t, s, a, R, L, v);
      if (A) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ue = Fe;
          ue |= Wn, (e.mode & zr) !== be && (ue |= qn), e.flags |= ue;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Re = Fe;
          Re |= Wn, (e.mode & zr) !== be && (Re |= qn), e.flags |= Re;
        }
        e.memoizedProps = a, e.memoizedState = L;
      }
      return u.props = a, u.state = L, u.context = v, A;
    }
    function qR(e, t, a, i, u) {
      var s = t.stateNode;
      RE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Ka(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, E = a.contextType, b = ua;
      if (typeof E == "object" && E !== null)
        b = un(E);
      else {
        var R = Mc(t, a, !0);
        b = Nc(t, R);
      }
      var L = a.getDerivedStateFromProps, z = typeof L == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !z && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && LE(t, s, i, b), wE();
      var A = t.memoizedState, ue = s.state = A;
      if (Hh(t, i, s, u), ue = t.memoizedState, f === v && A === ue && !Eh() && !Fh() && !_e)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || A !== e.memoizedState) && (t.flags |= Fe), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || A !== e.memoizedState) && (t.flags |= Or), !1;
      typeof L == "function" && (Rg(t, a, L, i), ue = t.memoizedState);
      var Re = Fh() || OE(t, a, p, i, A, ue, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      _e;
      return Re ? (!z && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ue, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ue, b)), typeof s.componentDidUpdate == "function" && (t.flags |= Fe), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Or)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || A !== e.memoizedState) && (t.flags |= Fe), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || A !== e.memoizedState) && (t.flags |= Or), t.memoizedProps = i, t.memoizedState = ue), s.props = i, s.state = ue, s.context = b, Re;
    }
    var Dg, kg, _g, Og, Mg, zE = function(e, t) {
    };
    Dg = !1, kg = !1, _g = {}, Og = {}, Mg = {}, zE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = He(t) || "Component";
        Og[a] || (Og[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Gd(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Rt || ur) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = He(e) || "Component";
          _g[u] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), _g[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== P)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Qi(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var E = function(b) {
            var R = v.refs;
            R === DE && (R = v.refs = {}), b === null ? delete R[y] : R[y] = b;
          };
          return E._stringRef = y, E;
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
    function jh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Bh(e) {
      {
        var t = He(e) || "Component";
        if (Mg[t])
          return;
        Mg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function UE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function AE(e) {
      function t(_, H) {
        if (e) {
          var O = _.deletions;
          O === null ? (_.deletions = [H], _.flags |= nt) : O.push(H);
        }
      }
      function a(_, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(_, O), O = O.sibling;
        return null;
      }
      function i(_, H) {
        for (var O = /* @__PURE__ */ new Map(), W = H; W !== null; )
          W.key !== null ? O.set(W.key, W) : O.set(W.index, W), W = W.sibling;
        return O;
      }
      function u(_, H) {
        var O = ns(_, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(_, H, O) {
        if (_.index = O, !e)
          return _.flags |= jf, H;
        var W = _.alternate;
        if (W !== null) {
          var oe = W.index;
          return oe < H ? (_.flags |= ht, H) : oe;
        } else
          return _.flags |= ht, H;
      }
      function f(_) {
        return e && _.alternate === null && (_.flags |= ht), _;
      }
      function p(_, H, O, W) {
        if (H === null || H.tag !== xe) {
          var oe = a0(O, _.mode, W);
          return oe.return = _, oe;
        } else {
          var ae = u(H, O);
          return ae.return = _, ae;
        }
      }
      function v(_, H, O, W) {
        var oe = O.type;
        if (oe === Oa)
          return E(_, H, O.props.children, W, O.key);
        if (H !== null && (H.elementType === oe || // Keep this check inline so it only runs on the false path:
        bC(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof oe == "object" && oe !== null && oe.$$typeof === Ln && UE(oe) === H.type)) {
          var ae = u(H, O.props);
          return ae.ref = Gd(_, H, O), ae.return = _, ae._debugSource = O._source, ae._debugOwner = O._owner, ae;
        }
        var Oe = r0(O, _.mode, W);
        return Oe.ref = Gd(_, H, O), Oe.return = _, Oe;
      }
      function y(_, H, O, W) {
        if (H === null || H.tag !== Y || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var oe = i0(O, _.mode, W);
          return oe.return = _, oe;
        } else {
          var ae = u(H, O.children || []);
          return ae.return = _, ae;
        }
      }
      function E(_, H, O, W, oe) {
        if (H === null || H.tag !== Me) {
          var ae = Bu(O, _.mode, W, oe);
          return ae.return = _, ae;
        } else {
          var Oe = u(H, O);
          return Oe.return = _, Oe;
        }
      }
      function b(_, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var W = a0("" + H, _.mode, O);
          return W.return = _, W;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case jl: {
              var oe = r0(H, _.mode, O);
              return oe.ref = Gd(_, null, H), oe.return = _, oe;
            }
            case Zr: {
              var ae = i0(H, _.mode, O);
              return ae.return = _, ae;
            }
            case Ln: {
              var Oe = H._payload, Ae = H._init;
              return b(_, Ae(Oe), O);
            }
          }
          if (Jt(H) || Ma(H)) {
            var ct = Bu(H, _.mode, O, null);
            return ct.return = _, ct;
          }
          jh(_, H);
        }
        return typeof H == "function" && Bh(_), null;
      }
      function R(_, H, O, W) {
        var oe = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return oe !== null ? null : p(_, H, "" + O, W);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case jl:
              return O.key === oe ? v(_, H, O, W) : null;
            case Zr:
              return O.key === oe ? y(_, H, O, W) : null;
            case Ln: {
              var ae = O._payload, Oe = O._init;
              return R(_, H, Oe(ae), W);
            }
          }
          if (Jt(O) || Ma(O))
            return oe !== null ? null : E(_, H, O, W, null);
          jh(_, O);
        }
        return typeof O == "function" && Bh(_), null;
      }
      function L(_, H, O, W, oe) {
        if (typeof W == "string" && W !== "" || typeof W == "number") {
          var ae = _.get(O) || null;
          return p(H, ae, "" + W, oe);
        }
        if (typeof W == "object" && W !== null) {
          switch (W.$$typeof) {
            case jl: {
              var Oe = _.get(W.key === null ? O : W.key) || null;
              return v(H, Oe, W, oe);
            }
            case Zr: {
              var Ae = _.get(W.key === null ? O : W.key) || null;
              return y(H, Ae, W, oe);
            }
            case Ln:
              var ct = W._payload, Je = W._init;
              return L(_, H, O, Je(ct), oe);
          }
          if (Jt(W) || Ma(W)) {
            var Kt = _.get(O) || null;
            return E(H, Kt, W, oe, null);
          }
          jh(H, W);
        }
        return typeof W == "function" && Bh(H), null;
      }
      function z(_, H, O) {
        {
          if (typeof _ != "object" || _ === null)
            return H;
          switch (_.$$typeof) {
            case jl:
            case Zr:
              zE(_, O);
              var W = _.key;
              if (typeof W != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(W);
                break;
              }
              if (!H.has(W)) {
                H.add(W);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", W);
              break;
            case Ln:
              var oe = _._payload, ae = _._init;
              z(ae(oe), H, O);
              break;
          }
        }
        return H;
      }
      function A(_, H, O, W) {
        for (var oe = null, ae = 0; ae < O.length; ae++) {
          var Oe = O[ae];
          oe = z(Oe, oe, _);
        }
        for (var Ae = null, ct = null, Je = H, Kt = 0, et = 0, Pt = null; Je !== null && et < O.length; et++) {
          Je.index > et ? (Pt = Je, Je = null) : Pt = Je.sibling;
          var ir = R(_, Je, O[et], W);
          if (ir === null) {
            Je === null && (Je = Pt);
            break;
          }
          e && Je && ir.alternate === null && t(_, Je), Kt = s(ir, Kt, et), ct === null ? Ae = ir : ct.sibling = ir, ct = ir, Je = Pt;
        }
        if (et === O.length) {
          if (a(_, Je), An()) {
            var Pn = et;
            Po(_, Pn);
          }
          return Ae;
        }
        if (Je === null) {
          for (; et < O.length; et++) {
            var sa = b(_, O[et], W);
            sa !== null && (Kt = s(sa, Kt, et), ct === null ? Ae = sa : ct.sibling = sa, ct = sa);
          }
          if (An()) {
            var Sr = et;
            Po(_, Sr);
          }
          return Ae;
        }
        for (var Er = i(_, Je); et < O.length; et++) {
          var lr = L(Er, _, et, O[et], W);
          lr !== null && (e && lr.alternate !== null && Er.delete(lr.key === null ? et : lr.key), Kt = s(lr, Kt, et), ct === null ? Ae = lr : ct.sibling = lr, ct = lr);
        }
        if (e && Er.forEach(function(ef) {
          return t(_, ef);
        }), An()) {
          var Al = et;
          Po(_, Al);
        }
        return Ae;
      }
      function ue(_, H, O, W) {
        var oe = Ma(O);
        if (typeof oe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (kg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), kg = !0), O.entries === oe && (Dg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Dg = !0);
          var ae = oe.call(O);
          if (ae)
            for (var Oe = null, Ae = ae.next(); !Ae.done; Ae = ae.next()) {
              var ct = Ae.value;
              Oe = z(ct, Oe, _);
            }
        }
        var Je = oe.call(O);
        if (Je == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Kt = null, et = null, Pt = H, ir = 0, Pn = 0, sa = null, Sr = Je.next(); Pt !== null && !Sr.done; Pn++, Sr = Je.next()) {
          Pt.index > Pn ? (sa = Pt, Pt = null) : sa = Pt.sibling;
          var Er = R(_, Pt, Sr.value, W);
          if (Er === null) {
            Pt === null && (Pt = sa);
            break;
          }
          e && Pt && Er.alternate === null && t(_, Pt), ir = s(Er, ir, Pn), et === null ? Kt = Er : et.sibling = Er, et = Er, Pt = sa;
        }
        if (Sr.done) {
          if (a(_, Pt), An()) {
            var lr = Pn;
            Po(_, lr);
          }
          return Kt;
        }
        if (Pt === null) {
          for (; !Sr.done; Pn++, Sr = Je.next()) {
            var Al = b(_, Sr.value, W);
            Al !== null && (ir = s(Al, ir, Pn), et === null ? Kt = Al : et.sibling = Al, et = Al);
          }
          if (An()) {
            var ef = Pn;
            Po(_, ef);
          }
          return Kt;
        }
        for (var xp = i(_, Pt); !Sr.done; Pn++, Sr = Je.next()) {
          var Yi = L(xp, _, Pn, Sr.value, W);
          Yi !== null && (e && Yi.alternate !== null && xp.delete(Yi.key === null ? Pn : Yi.key), ir = s(Yi, ir, Pn), et === null ? Kt = Yi : et.sibling = Yi, et = Yi);
        }
        if (e && xp.forEach(function(ck) {
          return t(_, ck);
        }), An()) {
          var sk = Pn;
          Po(_, sk);
        }
        return Kt;
      }
      function Re(_, H, O, W) {
        if (H !== null && H.tag === xe) {
          a(_, H.sibling);
          var oe = u(H, O);
          return oe.return = _, oe;
        }
        a(_, H);
        var ae = a0(O, _.mode, W);
        return ae.return = _, ae;
      }
      function Se(_, H, O, W) {
        for (var oe = O.key, ae = H; ae !== null; ) {
          if (ae.key === oe) {
            var Oe = O.type;
            if (Oe === Oa) {
              if (ae.tag === Me) {
                a(_, ae.sibling);
                var Ae = u(ae, O.props.children);
                return Ae.return = _, Ae._debugSource = O._source, Ae._debugOwner = O._owner, Ae;
              }
            } else if (ae.elementType === Oe || // Keep this check inline so it only runs on the false path:
            bC(ae, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Oe == "object" && Oe !== null && Oe.$$typeof === Ln && UE(Oe) === ae.type) {
              a(_, ae.sibling);
              var ct = u(ae, O.props);
              return ct.ref = Gd(_, ae, O), ct.return = _, ct._debugSource = O._source, ct._debugOwner = O._owner, ct;
            }
            a(_, ae);
            break;
          } else
            t(_, ae);
          ae = ae.sibling;
        }
        if (O.type === Oa) {
          var Je = Bu(O.props.children, _.mode, W, O.key);
          return Je.return = _, Je;
        } else {
          var Kt = r0(O, _.mode, W);
          return Kt.ref = Gd(_, H, O), Kt.return = _, Kt;
        }
      }
      function qe(_, H, O, W) {
        for (var oe = O.key, ae = H; ae !== null; ) {
          if (ae.key === oe)
            if (ae.tag === Y && ae.stateNode.containerInfo === O.containerInfo && ae.stateNode.implementation === O.implementation) {
              a(_, ae.sibling);
              var Oe = u(ae, O.children || []);
              return Oe.return = _, Oe;
            } else {
              a(_, ae);
              break;
            }
          else
            t(_, ae);
          ae = ae.sibling;
        }
        var Ae = i0(O, _.mode, W);
        return Ae.return = _, Ae;
      }
      function Ge(_, H, O, W) {
        var oe = typeof O == "object" && O !== null && O.type === Oa && O.key === null;
        if (oe && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case jl:
              return f(Se(_, H, O, W));
            case Zr:
              return f(qe(_, H, O, W));
            case Ln:
              var ae = O._payload, Oe = O._init;
              return Ge(_, H, Oe(ae), W);
          }
          if (Jt(O))
            return A(_, H, O, W);
          if (Ma(O))
            return ue(_, H, O, W);
          jh(_, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Re(_, H, "" + O, W)) : (typeof O == "function" && Bh(_), a(_, H));
      }
      return Ge;
    }
    var Fc = AE(!0), HE = AE(!1);
    function KR(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ns(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ns(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function ZR(e, t) {
      for (var a = e.child; a !== null; )
        DD(a, t), a = a.sibling;
    }
    var Xd = {}, Nu = Du(Xd), Wd = Du(Xd), $h = Du(Xd);
    function Ph(e) {
      if (e === Xd)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function FE() {
      var e = Ph($h.current);
      return e;
    }
    function Ng(e, t) {
      rr($h, t, e), rr(Wd, e, e), rr(Nu, Xd, e);
      var a = dx(t);
      nr(Nu, e), rr(Nu, a, e);
    }
    function Vc(e) {
      nr(Nu, e), nr(Wd, e), nr($h, e);
    }
    function Lg() {
      var e = Ph(Nu.current);
      return e;
    }
    function VE(e) {
      Ph($h.current);
      var t = Ph(Nu.current), a = px(t, e.type);
      t !== a && (rr(Wd, e, e), rr(Nu, a, e));
    }
    function zg(e) {
      Wd.current === e && (nr(Nu, e), nr(Wd, e));
    }
    var JR = 0, jE = 1, BE = 1, qd = 2, Za = Du(JR);
    function Ug(e, t) {
      return (e & t) !== 0;
    }
    function jc(e) {
      return e & jE;
    }
    function Ag(e, t) {
      return e & jE | t;
    }
    function ew(e, t) {
      return e | t;
    }
    function Lu(e, t) {
      rr(Za, t, e);
    }
    function Bc(e) {
      nr(Za, e);
    }
    function tw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Yh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ee) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || K0(i) || $y(i))
              return t;
          }
        } else if (t.tag === ze && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ne) !== Te;
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
    var $r = (
      /*   */
      0
    ), dn = (
      /* */
      1
    ), Hi = (
      /*  */
      2
    ), pn = (
      /*    */
      4
    ), Hn = (
      /*   */
      8
    ), Hg = [];
    function Fg() {
      for (var e = 0; e < Hg.length; e++) {
        var t = Hg[e];
        t._workInProgressVersionPrimary = null;
      }
      Hg.length = 0;
    }
    function nw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var le = h.ReactCurrentDispatcher, Kd = h.ReactCurrentBatchConfig, Vg, $c;
    Vg = /* @__PURE__ */ new Set();
    var Wo = F, st = null, vn = null, hn = null, Qh = !1, Zd = !1, Jd = 0, rw = 0, aw = 25, j = null, Ra = null, zu = -1, jg = !1;
    function at() {
      {
        var e = j;
        Ra === null ? Ra = [e] : Ra.push(e);
      }
    }
    function te() {
      {
        var e = j;
        Ra !== null && (zu++, Ra[zu] !== e && iw(e));
      }
    }
    function Pc(e) {
      e != null && !Jt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", j, typeof e);
    }
    function iw(e) {
      {
        var t = He(st);
        if (!Vg.has(t) && (Vg.add(t), Ra !== null)) {
          for (var a = "", i = 30, u = 0; u <= zu; u++) {
            for (var s = Ra[u], f = u === zu ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ar() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Bg(e, t) {
      if (jg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", j), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, j, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ve(e[a], t[a]))
          return !1;
      return !0;
    }
    function Yc(e, t, a, i, u, s) {
      Wo = s, st = t, Ra = e !== null ? e._debugHookTypes : null, zu = -1, jg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = F, e !== null && e.memoizedState !== null ? le.current = s1 : Ra !== null ? le.current = o1 : le.current = u1;
      var f = a(i, u);
      if (Zd) {
        var p = 0;
        do {
          if (Zd = !1, Jd = 0, p >= aw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, jg = !1, vn = null, hn = null, t.updateQueue = null, zu = -1, le.current = c1, f = a(i, u);
        } while (Zd);
      }
      le.current = am, t._debugHookTypes = Ra;
      var v = vn !== null && vn.next !== null;
      if (Wo = F, st = null, vn = null, hn = null, j = null, Ra = null, zu = -1, e !== null && (e.flags & sn) !== (t.flags & sn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & $e) !== be && S("Internal React error: Expected static flag was missing. Please notify the React team."), Qh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Qc() {
      var e = Jd !== 0;
      return Jd = 0, e;
    }
    function $E(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & zr) !== be ? t.flags &= ~(al | qn | Et | Fe) : t.flags &= ~(Et | Fe), e.lanes = cu(e.lanes, a);
    }
    function PE() {
      if (le.current = am, Qh) {
        for (var e = st.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Qh = !1;
      }
      Wo = F, st = null, vn = null, hn = null, Ra = null, zu = -1, j = null, n1 = !1, Zd = !1, Jd = 0;
    }
    function Fi() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return hn === null ? st.memoizedState = hn = e : hn = hn.next = e, hn;
    }
    function wa() {
      var e;
      if (vn === null) {
        var t = st.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = vn.next;
      var a;
      if (hn === null ? a = st.memoizedState : a = hn.next, a !== null)
        hn = a, a = hn.next, vn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        vn = e;
        var i = {
          memoizedState: vn.memoizedState,
          baseState: vn.baseState,
          baseQueue: vn.baseQueue,
          queue: vn.queue,
          next: null
        };
        hn === null ? st.memoizedState = hn = i : hn = hn.next = i;
      }
      return hn;
    }
    function YE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function $g(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Pg(e, t, a) {
      var i = Fi(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: F,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = sw.bind(null, st, s);
      return [i.memoizedState, f];
    }
    function Yg(e, t, a) {
      var i = wa(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = vn, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var E = f.next, b = s.baseState, R = null, L = null, z = null, A = E;
        do {
          var ue = A.lane;
          if (vl(Wo, ue)) {
            if (z !== null) {
              var Se = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Xe,
                action: A.action,
                hasEagerState: A.hasEagerState,
                eagerState: A.eagerState,
                next: null
              };
              z = z.next = Se;
            }
            if (A.hasEagerState)
              b = A.eagerState;
            else {
              var qe = A.action;
              b = e(b, qe);
            }
          } else {
            var Re = {
              lane: ue,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null
            };
            z === null ? (L = z = Re, R = b) : z = z.next = Re, st.lanes = Ve(st.lanes, ue), gp(ue);
          }
          A = A.next;
        } while (A !== null && A !== E);
        z === null ? R = b : z.next = L, ve(b, i.memoizedState) || lp(), i.memoizedState = b, i.baseState = R, i.baseQueue = z, u.lastRenderedState = b;
      }
      var Ge = u.interleaved;
      if (Ge !== null) {
        var _ = Ge;
        do {
          var H = _.lane;
          st.lanes = Ve(st.lanes, H), gp(H), _ = _.next;
        } while (_ !== Ge);
      } else
        f === null && (u.lanes = F);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Qg(e, t, a) {
      var i = wa(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var E = y.action;
          p = e(p, E), y = y.next;
        } while (y !== v);
        ve(p, i.memoizedState) || lp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function f_(e, t, a) {
    }
    function d_(e, t, a) {
    }
    function Ig(e, t, a) {
      var i = st, u = Fi(), s, f = An();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), $c || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), $c = !0);
      } else {
        if (s = t(), !$c) {
          var p = t();
          ve(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), $c = !0);
        }
        var v = Tm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        bo(v, Wo) || QE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, qh(GE.bind(null, i, y, e), [e]), i.flags |= Et, ep(dn | Hn, IE.bind(null, i, y, s, t), void 0, null), s;
    }
    function Ih(e, t, a) {
      var i = st, u = wa(), s = t();
      if (!$c) {
        var f = t();
        ve(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), $c = !0);
      }
      var p = u.memoizedState, v = !ve(p, s);
      v && (u.memoizedState = s, lp());
      var y = u.queue;
      if (np(GE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      hn !== null && hn.memoizedState.tag & dn) {
        i.flags |= Et, ep(dn | Hn, IE.bind(null, i, y, s, t), void 0, null);
        var E = Tm();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        bo(E, Wo) || QE(i, t, s);
      }
      return s;
    }
    function QE(e, t, a) {
      e.flags |= yo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = st.updateQueue;
      if (u === null)
        u = YE(), st.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function IE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, XE(t) && WE(e);
    }
    function GE(e, t, a) {
      var i = function() {
        XE(t) && WE(e);
      };
      return a(i);
    }
    function XE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ve(a, i);
      } catch {
        return !0;
      }
    }
    function WE(e) {
      var t = Br(e, ke);
      t !== null && Sn(t, e, ke, vt);
    }
    function Gh(e) {
      var t = Fi();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: F,
        dispatch: null,
        lastRenderedReducer: $g,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = cw.bind(null, st, a);
      return [t.memoizedState, i];
    }
    function Gg(e) {
      return Yg($g);
    }
    function Xg(e) {
      return Qg($g);
    }
    function ep(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = st.updateQueue;
      if (s === null)
        s = YE(), st.updateQueue = s, s.lastEffect = u.next = u;
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
    function Wg(e) {
      var t = Fi();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Xh(e) {
      var t = wa();
      return t.memoizedState;
    }
    function tp(e, t, a, i) {
      var u = Fi(), s = i === void 0 ? null : i;
      st.flags |= e, u.memoizedState = ep(dn | t, a, void 0, s);
    }
    function Wh(e, t, a, i) {
      var u = wa(), s = i === void 0 ? null : i, f = void 0;
      if (vn !== null) {
        var p = vn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Bg(s, v)) {
            u.memoizedState = ep(t, a, f, s);
            return;
          }
        }
      }
      st.flags |= e, u.memoizedState = ep(dn | t, a, f, s);
    }
    function qh(e, t) {
      return (st.mode & zr) !== be ? tp(al | Et | Ei, Hn, e, t) : tp(Et | Ei, Hn, e, t);
    }
    function np(e, t) {
      return Wh(Et, Hn, e, t);
    }
    function qg(e, t) {
      return tp(Fe, Hi, e, t);
    }
    function Kh(e, t) {
      return Wh(Fe, Hi, e, t);
    }
    function Kg(e, t) {
      var a = Fe;
      return a |= Wn, (st.mode & zr) !== be && (a |= qn), tp(a, pn, e, t);
    }
    function Zh(e, t) {
      return Wh(Fe, pn, e, t);
    }
    function qE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Zg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Fe;
      return u |= Wn, (st.mode & zr) !== be && (u |= qn), tp(u, pn, qE.bind(null, t, e), i);
    }
    function Jh(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Wh(Fe, pn, qE.bind(null, t, e), i);
    }
    function lw(e, t) {
    }
    var em = lw;
    function Jg(e, t) {
      var a = Fi(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function tm(e, t) {
      var a = wa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Bg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function eS(e, t) {
      var a = Fi(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function nm(e, t) {
      var a = wa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Bg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function tS(e) {
      var t = Fi();
      return t.memoizedState = e, e;
    }
    function KE(e) {
      var t = wa(), a = vn, i = a.memoizedState;
      return JE(t, i, e);
    }
    function ZE(e) {
      var t = wa();
      if (vn === null)
        return t.memoizedState = e, e;
      var a = vn.memoizedState;
      return JE(t, a, e);
    }
    function JE(e, t, a) {
      var i = !uy(Wo);
      if (i) {
        if (!ve(a, t)) {
          var u = rd();
          st.lanes = Ve(st.lanes, u), gp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, lp()), e.memoizedState = a, a;
    }
    function uw(e, t, a) {
      var i = Ar();
      Xt(bn(i, fn)), e(!0);
      var u = Kd.transition;
      Kd.transition = {};
      var s = Kd.transition;
      Kd.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Xt(i), Kd.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && V("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function nS() {
      var e = Gh(!1), t = e[0], a = e[1], i = uw.bind(null, a), u = Fi();
      return u.memoizedState = i, [t, i];
    }
    function e1() {
      var e = Gg(), t = e[0], a = wa(), i = a.memoizedState;
      return [t, i];
    }
    function t1() {
      var e = Xg(), t = e[0], a = wa(), i = a.memoizedState;
      return [t, i];
    }
    var n1 = !1;
    function ow() {
      return n1;
    }
    function rS() {
      var e = Fi(), t = Tm(), a = t.identifierPrefix, i;
      if (An()) {
        var u = TR();
        i = ":" + a + "R" + u;
        var s = Jd++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = rw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function rm() {
      var e = wa(), t = e.memoizedState;
      return t;
    }
    function sw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Vu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (r1(e))
        a1(t, u);
      else {
        var s = CE(e, t, u, i);
        if (s !== null) {
          var f = gr();
          Sn(s, e, i, f), i1(s, t, i);
        }
      }
      l1(e, i);
    }
    function cw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Vu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (r1(e))
        a1(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === F && (s === null || s.lanes === F)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = le.current, le.current = Ja;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, ve(y, v)) {
                $R(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              le.current = p;
            }
          }
        }
        var E = CE(e, t, u, i);
        if (E !== null) {
          var b = gr();
          Sn(E, e, i, b), i1(E, t, i);
        }
      }
      l1(e, i);
    }
    function r1(e) {
      var t = e.alternate;
      return e === st || t !== null && t === st;
    }
    function a1(e, t) {
      Zd = Qh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function i1(e, t, a) {
      if (nd(a)) {
        var i = t.lanes;
        i = ad(i, e.pendingLanes);
        var u = Ve(i, a);
        t.lanes = u, fu(e, u);
      }
    }
    function l1(e, t, a) {
      bi(e, t);
    }
    var am = {
      readContext: un,
      useCallback: ar,
      useContext: ar,
      useEffect: ar,
      useImperativeHandle: ar,
      useInsertionEffect: ar,
      useLayoutEffect: ar,
      useMemo: ar,
      useReducer: ar,
      useRef: ar,
      useState: ar,
      useDebugValue: ar,
      useDeferredValue: ar,
      useTransition: ar,
      useMutableSource: ar,
      useSyncExternalStore: ar,
      useId: ar,
      unstable_isNewReconciler: ne
    }, u1 = null, o1 = null, s1 = null, c1 = null, Vi = null, Ja = null, im = null;
    {
      var aS = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ue = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      u1 = {
        readContext: function(e) {
          return un(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", at(), Pc(t), Jg(e, t);
        },
        useContext: function(e) {
          return j = "useContext", at(), un(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", at(), Pc(t), qh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", at(), Pc(a), Zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", at(), Pc(t), qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", at(), Pc(t), Kg(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", at(), Pc(t);
          var a = le.current;
          le.current = Vi;
          try {
            return eS(e, t);
          } finally {
            le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", at();
          var i = le.current;
          le.current = Vi;
          try {
            return Pg(e, t, a);
          } finally {
            le.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", at(), Wg(e);
        },
        useState: function(e) {
          j = "useState", at();
          var t = le.current;
          le.current = Vi;
          try {
            return Gh(e);
          } finally {
            le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", at(), void 0;
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", at(), tS(e);
        },
        useTransition: function() {
          return j = "useTransition", at(), nS();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", at(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", at(), Ig(e, t, a);
        },
        useId: function() {
          return j = "useId", at(), rS();
        },
        unstable_isNewReconciler: ne
      }, o1 = {
        readContext: function(e) {
          return un(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", te(), Jg(e, t);
        },
        useContext: function(e) {
          return j = "useContext", te(), un(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", te(), qh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", te(), Zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", te(), qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", te(), Kg(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", te();
          var a = le.current;
          le.current = Vi;
          try {
            return eS(e, t);
          } finally {
            le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", te();
          var i = le.current;
          le.current = Vi;
          try {
            return Pg(e, t, a);
          } finally {
            le.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", te(), Wg(e);
        },
        useState: function(e) {
          j = "useState", te();
          var t = le.current;
          le.current = Vi;
          try {
            return Gh(e);
          } finally {
            le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", te(), void 0;
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", te(), tS(e);
        },
        useTransition: function() {
          return j = "useTransition", te(), nS();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", te(), Ig(e, t, a);
        },
        useId: function() {
          return j = "useId", te(), rS();
        },
        unstable_isNewReconciler: ne
      }, s1 = {
        readContext: function(e) {
          return un(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", te(), tm(e, t);
        },
        useContext: function(e) {
          return j = "useContext", te(), un(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", te(), np(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", te(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", te(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", te(), Zh(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", te();
          var a = le.current;
          le.current = Ja;
          try {
            return nm(e, t);
          } finally {
            le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", te();
          var i = le.current;
          le.current = Ja;
          try {
            return Yg(e, t, a);
          } finally {
            le.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", te(), Xh();
        },
        useState: function(e) {
          j = "useState", te();
          var t = le.current;
          le.current = Ja;
          try {
            return Gg(e);
          } finally {
            le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", te(), em();
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", te(), KE(e);
        },
        useTransition: function() {
          return j = "useTransition", te(), e1();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", te(), Ih(e, t);
        },
        useId: function() {
          return j = "useId", te(), rm();
        },
        unstable_isNewReconciler: ne
      }, c1 = {
        readContext: function(e) {
          return un(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", te(), tm(e, t);
        },
        useContext: function(e) {
          return j = "useContext", te(), un(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", te(), np(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", te(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", te(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", te(), Zh(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", te();
          var a = le.current;
          le.current = im;
          try {
            return nm(e, t);
          } finally {
            le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", te();
          var i = le.current;
          le.current = im;
          try {
            return Qg(e, t, a);
          } finally {
            le.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", te(), Xh();
        },
        useState: function(e) {
          j = "useState", te();
          var t = le.current;
          le.current = im;
          try {
            return Xg(e);
          } finally {
            le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", te(), em();
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", te(), ZE(e);
        },
        useTransition: function() {
          return j = "useTransition", te(), t1();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", te(), Ih(e, t);
        },
        useId: function() {
          return j = "useId", te(), rm();
        },
        unstable_isNewReconciler: ne
      }, Vi = {
        readContext: function(e) {
          return aS(), un(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", Ue(), at(), Jg(e, t);
        },
        useContext: function(e) {
          return j = "useContext", Ue(), at(), un(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", Ue(), at(), qh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", Ue(), at(), Zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", Ue(), at(), qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", Ue(), at(), Kg(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", Ue(), at();
          var a = le.current;
          le.current = Vi;
          try {
            return eS(e, t);
          } finally {
            le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", Ue(), at();
          var i = le.current;
          le.current = Vi;
          try {
            return Pg(e, t, a);
          } finally {
            le.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", Ue(), at(), Wg(e);
        },
        useState: function(e) {
          j = "useState", Ue(), at();
          var t = le.current;
          le.current = Vi;
          try {
            return Gh(e);
          } finally {
            le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", Ue(), at(), void 0;
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", Ue(), at(), tS(e);
        },
        useTransition: function() {
          return j = "useTransition", Ue(), at(), nS();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", Ue(), at(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", Ue(), at(), Ig(e, t, a);
        },
        useId: function() {
          return j = "useId", Ue(), at(), rS();
        },
        unstable_isNewReconciler: ne
      }, Ja = {
        readContext: function(e) {
          return aS(), un(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", Ue(), te(), tm(e, t);
        },
        useContext: function(e) {
          return j = "useContext", Ue(), te(), un(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", Ue(), te(), np(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", Ue(), te(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", Ue(), te(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", Ue(), te(), Zh(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", Ue(), te();
          var a = le.current;
          le.current = Ja;
          try {
            return nm(e, t);
          } finally {
            le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", Ue(), te();
          var i = le.current;
          le.current = Ja;
          try {
            return Yg(e, t, a);
          } finally {
            le.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", Ue(), te(), Xh();
        },
        useState: function(e) {
          j = "useState", Ue(), te();
          var t = le.current;
          le.current = Ja;
          try {
            return Gg(e);
          } finally {
            le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", Ue(), te(), em();
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", Ue(), te(), KE(e);
        },
        useTransition: function() {
          return j = "useTransition", Ue(), te(), e1();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", Ue(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", Ue(), te(), Ih(e, t);
        },
        useId: function() {
          return j = "useId", Ue(), te(), rm();
        },
        unstable_isNewReconciler: ne
      }, im = {
        readContext: function(e) {
          return aS(), un(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", Ue(), te(), tm(e, t);
        },
        useContext: function(e) {
          return j = "useContext", Ue(), te(), un(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", Ue(), te(), np(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", Ue(), te(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", Ue(), te(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", Ue(), te(), Zh(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", Ue(), te();
          var a = le.current;
          le.current = Ja;
          try {
            return nm(e, t);
          } finally {
            le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", Ue(), te();
          var i = le.current;
          le.current = Ja;
          try {
            return Qg(e, t, a);
          } finally {
            le.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", Ue(), te(), Xh();
        },
        useState: function(e) {
          j = "useState", Ue(), te();
          var t = le.current;
          le.current = Ja;
          try {
            return Xg(e);
          } finally {
            le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", Ue(), te(), em();
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", Ue(), te(), ZE(e);
        },
        useTransition: function() {
          return j = "useTransition", Ue(), te(), t1();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", Ue(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", Ue(), te(), Ih(e, t);
        },
        useId: function() {
          return j = "useId", Ue(), te(), rm();
        },
        unstable_isNewReconciler: ne
      };
    }
    var Uu = g.unstable_now, f1 = 0, lm = -1, rp = -1, um = -1, iS = !1, om = !1;
    function d1() {
      return iS;
    }
    function fw() {
      om = !0;
    }
    function dw() {
      iS = !1, om = !1;
    }
    function pw() {
      iS = om, om = !1;
    }
    function p1() {
      return f1;
    }
    function v1() {
      f1 = Uu();
    }
    function lS(e) {
      rp = Uu(), e.actualStartTime < 0 && (e.actualStartTime = Uu());
    }
    function h1(e) {
      rp = -1;
    }
    function sm(e, t) {
      if (rp >= 0) {
        var a = Uu() - rp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), rp = -1;
      }
    }
    function ji(e) {
      if (lm >= 0) {
        var t = Uu() - lm;
        lm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case $:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ye:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function uS(e) {
      if (um >= 0) {
        var t = Uu() - um;
        um = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case $:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ye:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Bi() {
      lm = Uu();
    }
    function oS() {
      um = Uu();
    }
    function sS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function qo(e, t) {
      return {
        value: e,
        source: t,
        stack: df(t),
        digest: null
      };
    }
    function cS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function vw(e, t) {
      return !0;
    }
    function fS(e, t) {
      try {
        var a = vw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === P)
            return;
          console.error(i);
        }
        var p = u ? He(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === $)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var E = He(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + E + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (R) {
        setTimeout(function() {
          throw R;
        });
      }
    }
    var hw = typeof WeakMap == "function" ? WeakMap : Map;
    function m1(e, t, a) {
      var i = Ol(vt, a);
      i.tag = fg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        uD(u), fS(e, t);
      }, i;
    }
    function dS(e, t, a) {
      var i = Ol(vt, a);
      i.tag = fg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          DC(e), fS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        DC(e), fS(e, t), typeof u != "function" && iD(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (tr(e.lanes, ke) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", He(e) || "Unknown"));
      }), i;
    }
    function y1(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new hw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = oD.bind(null, e, t, a);
        cn && Sp(e, a), t.then(s, s);
      }
    }
    function mw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function yw(e, t) {
      var a = e.tag;
      if ((e.mode & $e) === be && (a === G || a === q || a === Be)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function g1(e) {
      var t = e;
      do {
        if (t.tag === Ee && tw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function S1(e, t, a, i, u) {
      if ((e.mode & $e) === be) {
        if (e === t)
          e.flags |= tn;
        else {
          if (e.flags |= Ne, a.flags |= go, a.flags &= ~(Os | cr), a.tag === P) {
            var s = a.alternate;
            if (s === null)
              a.tag = Zt;
            else {
              var f = Ol(vt, ke);
              f.tag = Lh, Mu(a, f, ke);
            }
          }
          a.lanes = Ve(a.lanes, ke);
        }
        return e;
      }
      return e.flags |= tn, e.lanes = u, e;
    }
    function gw(e, t, a, i, u) {
      if (a.flags |= cr, cn && Sp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        yw(a), An() && a.mode & $e && sE();
        var f = g1(t);
        if (f !== null) {
          f.flags &= ~Mt, S1(f, t, a, e, u), f.mode & $e && y1(e, s, u), mw(f, e, s);
          return;
        } else {
          if (!su(u)) {
            y1(e, s, u), QS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (An() && a.mode & $e) {
        sE();
        var v = g1(t);
        if (v !== null) {
          (v.flags & tn) === Te && (v.flags |= Mt), S1(v, t, a, e, u), ag(qo(i, a));
          return;
        }
      }
      i = qo(i, a), Kb(i);
      var y = t;
      do {
        switch (y.tag) {
          case $: {
            var E = i;
            y.flags |= tn;
            var b = Gt(u);
            y.lanes = Ve(y.lanes, b);
            var R = m1(y, E, b);
            vg(y, R);
            return;
          }
          case P:
            var L = i, z = y.type, A = y.stateNode;
            if ((y.flags & Ne) === Te && (typeof z.getDerivedStateFromError == "function" || A !== null && typeof A.componentDidCatch == "function" && !gC(A))) {
              y.flags |= tn;
              var ue = Gt(u);
              y.lanes = Ve(y.lanes, ue);
              var Re = dS(y, L, ue);
              vg(y, Re);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function Sw() {
      return null;
    }
    var ap = h.ReactCurrentOwner, ei = !1, pS, ip, vS, hS, mS, Ko, yS, cm;
    pS = {}, ip = {}, vS = {}, hS = {}, mS = {}, Ko = !1, yS = {}, cm = {};
    function mr(e, t, a, i) {
      e === null ? t.child = HE(t, null, a, i) : t.child = Fc(t, e.child, a, i);
    }
    function Ew(e, t, a, i) {
      t.child = Fc(t, e.child, null, i), t.child = Fc(t, null, a, i);
    }
    function E1(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xa(
          s,
          i,
          // Resolved props
          "prop",
          dt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Hc(t, u), wi(t);
      {
        if (ap.current = t, ta(!0), v = Yc(e, t, f, i, p, u), y = Qc(), t.mode & Rt) {
          It(!0);
          try {
            v = Yc(e, t, f, i, p, u), y = Qc();
          } finally {
            It(!1);
          }
        }
        ta(!1);
      }
      return il(), e !== null && !ei ? ($E(e, t, u), Ml(e, t, u)) : (An() && y && Zy(t), t.flags |= gi, mr(e, t, v, u), t.child);
    }
    function C1(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (wD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Jc(s), t.tag = Be, t.type = f, ES(t, s), T1(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Xa(
            p,
            i,
            // Resolved props
            "prop",
            dt(s)
          );
        }
        var v = n0(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var y = a.type, E = y.propTypes;
        E && Xa(
          E,
          i,
          // Resolved props
          "prop",
          dt(y)
        );
      }
      var b = e.child, R = bS(e, u);
      if (!R) {
        var L = b.memoizedProps, z = a.compare;
        if (z = z !== null ? z : Ce, z(L, i) && e.ref === t.ref)
          return Ml(e, t, u);
      }
      t.flags |= gi;
      var A = ns(b, i);
      return A.ref = t.ref, A.return = t, t.child = A, A;
    }
    function T1(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ln) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Xa(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            dt(s)
          );
        }
      }
      if (e !== null) {
        var E = e.memoizedProps;
        if (Ce(E, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ei = !1, t.pendingProps = i = E, bS(e, u))
            (e.flags & go) !== Te && (ei = !0);
          else
            return t.lanes = e.lanes, Ml(e, t, u);
      }
      return gS(e, t, a, i, u);
    }
    function x1(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ce)
        if ((t.mode & $e) === be) {
          var f = {
            baseLanes: F,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, xm(t, a);
        } else if (tr(a, er)) {
          var b = {
            baseLanes: F,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var R = s !== null ? s.baseLanes : a;
          xm(t, R);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Ve(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = er;
          var E = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = E, t.updateQueue = null, xm(t, v), null;
        }
      else {
        var L;
        s !== null ? (L = Ve(s.baseLanes, a), t.memoizedState = null) : L = a, xm(t, L);
      }
      return mr(e, t, u, a), t.child;
    }
    function Cw(e, t, a) {
      var i = t.pendingProps;
      return mr(e, t, i, a), t.child;
    }
    function Tw(e, t, a) {
      var i = t.pendingProps.children;
      return mr(e, t, i, a), t.child;
    }
    function xw(e, t, a) {
      {
        t.flags |= Fe;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return mr(e, t, s, a), t.child;
    }
    function R1(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Xn, t.flags |= Bf);
    }
    function gS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xa(
          s,
          i,
          // Resolved props
          "prop",
          dt(a)
        );
      }
      var f;
      {
        var p = Mc(t, a, !0);
        f = Nc(t, p);
      }
      var v, y;
      Hc(t, u), wi(t);
      {
        if (ap.current = t, ta(!0), v = Yc(e, t, a, i, f, u), y = Qc(), t.mode & Rt) {
          It(!0);
          try {
            v = Yc(e, t, a, i, f, u), y = Qc();
          } finally {
            It(!1);
          }
        }
        ta(!1);
      }
      return il(), e !== null && !ei ? ($E(e, t, u), Ml(e, t, u)) : (An() && y && Zy(t), t.flags |= gi, mr(e, t, v, u), t.child);
    }
    function w1(e, t, a, i, u) {
      {
        switch (jD(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ne, t.flags |= tn;
            var y = new Error("Simulated error coming from DevTools"), E = Gt(u);
            t.lanes = Ve(t.lanes, E);
            var b = dS(t, qo(y, t), E);
            vg(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var R = a.propTypes;
          R && Xa(
            R,
            i,
            // Resolved props
            "prop",
            dt(a)
          );
        }
      }
      var L;
      Ai(a) ? (L = !0, Th(t)) : L = !1, Hc(t, u);
      var z = t.stateNode, A;
      z === null ? (dm(e, t), NE(t, a, i), bg(t, a, i, u), A = !0) : e === null ? A = WR(t, a, i, u) : A = qR(e, t, a, i, u);
      var ue = SS(e, t, a, A, L, u);
      {
        var Re = t.stateNode;
        A && Re.props !== i && (Ko || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", He(t) || "a component"), Ko = !0);
      }
      return ue;
    }
    function SS(e, t, a, i, u, s) {
      R1(e, t);
      var f = (t.flags & Ne) !== Te;
      if (!i && !f)
        return u && iE(t, a, !1), Ml(e, t, s);
      var p = t.stateNode;
      ap.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, h1();
      else {
        wi(t);
        {
          if (ta(!0), v = p.render(), t.mode & Rt) {
            It(!0);
            try {
              p.render();
            } finally {
              It(!1);
            }
          }
          ta(!1);
        }
        il();
      }
      return t.flags |= gi, e !== null && f ? Ew(e, t, v, s) : mr(e, t, v, s), t.memoizedState = p.state, u && iE(t, a, !0), t.child;
    }
    function b1(e) {
      var t = e.stateNode;
      t.pendingContext ? rE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && rE(e, t.context, !1), Ng(e, t.containerInfo);
    }
    function Rw(e, t, a) {
      if (b1(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      RE(e, t), Hh(t, i, null, a);
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
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Mt) {
          var E = qo(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return D1(e, t, p, a, E);
        } else if (p !== s) {
          var b = qo(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return D1(e, t, p, a, b);
        } else {
          kR(t);
          var R = HE(t, null, p, a);
          t.child = R;
          for (var L = R; L; )
            L.flags = L.flags & ~ht | Mr, L = L.sibling;
        }
      } else {
        if (Uc(), p === s)
          return Ml(e, t, a);
        mr(e, t, p, a);
      }
      return t.child;
    }
    function D1(e, t, a, i, u) {
      return Uc(), ag(u), t.flags |= Mt, mr(e, t, a, i), t.child;
    }
    function ww(e, t, a) {
      VE(t), e === null && rg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Fy(i, u);
      return p ? f = null : s !== null && Fy(i, s) && (t.flags |= rt), R1(e, t), mr(e, t, f, a), t.child;
    }
    function bw(e, t) {
      return e === null && rg(t), null;
    }
    function Dw(e, t, a, i) {
      dm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = bD(v), E = Ka(v, u), b;
      switch (y) {
        case G:
          return ES(t, v), t.type = v = Jc(v), b = gS(null, t, v, E, i), b;
        case P:
          return t.type = v = qS(v), b = w1(null, t, v, E, i), b;
        case q:
          return t.type = v = KS(v), b = E1(null, t, v, E, i), b;
        case Ke: {
          if (t.type !== t.elementType) {
            var R = v.propTypes;
            R && Xa(
              R,
              E,
              // Resolved for outer only
              "prop",
              dt(v)
            );
          }
          return b = C1(
            null,
            t,
            v,
            Ka(v.type, E),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var L = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ln && (L = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + L));
    }
    function kw(e, t, a, i, u) {
      dm(e, t), t.tag = P;
      var s;
      return Ai(a) ? (s = !0, Th(t)) : s = !1, Hc(t, u), NE(t, a, i), bg(t, a, i, u), SS(null, t, a, !0, s, u);
    }
    function _w(e, t, a, i) {
      dm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Mc(t, a, !1);
        s = Nc(t, f);
      }
      Hc(t, i);
      var p, v;
      wi(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = dt(a) || "Unknown";
          pS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), pS[y] = !0);
        }
        t.mode & Rt && qa.recordLegacyContextWarning(t, null), ta(!0), ap.current = t, p = Yc(null, t, a, u, s, i), v = Qc(), ta(!1);
      }
      if (il(), t.flags |= gi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var E = dt(a) || "Unknown";
        ip[E] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", E, E, E), ip[E] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = dt(a) || "Unknown";
          ip[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), ip[b] = !0);
        }
        t.tag = P, t.memoizedState = null, t.updateQueue = null;
        var R = !1;
        return Ai(a) ? (R = !0, Th(t)) : R = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, pg(t), ME(t, p), bg(t, a, u, i), SS(null, t, a, !0, R, i);
      } else {
        if (t.tag = G, t.mode & Rt) {
          It(!0);
          try {
            p = Yc(null, t, a, u, s, i), v = Qc();
          } finally {
            It(!1);
          }
        }
        return An() && v && Zy(t), mr(null, t, p, i), ES(t, a), t.child;
      }
    }
    function ES(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Dr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), mS[u] || (mS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = dt(t) || "Unknown";
          hS[f] || (S("%s: Function components do not support getDerivedStateFromProps.", f), hS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = dt(t) || "Unknown";
          vS[p] || (S("%s: Function components do not support contextType.", p), vS[p] = !0);
        }
      }
    }
    var CS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Xe
    };
    function TS(e) {
      return {
        baseLanes: e,
        cachePool: Sw(),
        transitions: null
      };
    }
    function Ow(e, t) {
      var a = null;
      return {
        baseLanes: Ve(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Mw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Ug(e, qd);
    }
    function Nw(e, t) {
      return cu(e.childLanes, t);
    }
    function k1(e, t, a) {
      var i = t.pendingProps;
      BD(t) && (t.flags |= Ne);
      var u = Za.current, s = !1, f = (t.flags & Ne) !== Te;
      if (f || Mw(u, e) ? (s = !0, t.flags &= ~Ne) : (e === null || e.memoizedState !== null) && (u = ew(u, BE)), u = jc(u), Lu(t, u), e === null) {
        rg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Hw(t, v);
        }
        var y = i.children, E = i.fallback;
        if (s) {
          var b = Lw(t, y, E, a), R = t.child;
          return R.memoizedState = TS(a), t.memoizedState = CS, b;
        } else
          return xS(t, y);
      } else {
        var L = e.memoizedState;
        if (L !== null) {
          var z = L.dehydrated;
          if (z !== null)
            return Fw(e, t, f, i, z, L, a);
        }
        if (s) {
          var A = i.fallback, ue = i.children, Re = Uw(e, t, ue, A, a), Se = t.child, qe = e.child.memoizedState;
          return Se.memoizedState = qe === null ? TS(a) : Ow(qe, a), Se.childLanes = Nw(e, a), t.memoizedState = CS, Re;
        } else {
          var Ge = i.children, _ = zw(e, t, Ge, a);
          return t.memoizedState = null, _;
        }
      }
    }
    function xS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = RS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Lw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & $e) === be && s !== null ? (p = s, p.childLanes = F, p.pendingProps = f, e.mode & De && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Bu(a, u, i, null)) : (p = RS(f, u), v = Bu(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function RS(e, t, a) {
      return _C(e, t, F, null);
    }
    function _1(e, t) {
      return ns(e, t);
    }
    function zw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = _1(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & $e) === be && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= nt) : p.push(s);
      }
      return t.child = f, f;
    }
    function Uw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & $e) === be && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var E = t.child;
        y = E, y.childLanes = F, y.pendingProps = v, t.mode & De && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = _1(f, v), y.subtreeFlags = f.subtreeFlags & sn;
      var b;
      return p !== null ? b = ns(p, i) : (b = Bu(i, s, u, null), b.flags |= ht), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function fm(e, t, a, i) {
      i !== null && ag(i), Fc(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = xS(t, s);
      return f.flags |= ht, t.memoizedState = null, f;
    }
    function Aw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = RS(f, s), v = Bu(i, s, u, null);
      return v.flags |= ht, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & $e) !== be && Fc(t, e.child, null, u), v;
    }
    function Hw(e, t, a) {
      return (e.mode & $e) === be ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ke) : $y(t) ? e.lanes = ol : e.lanes = er, null;
    }
    function Fw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Mt) {
          t.flags &= ~Mt;
          var _ = cS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return fm(e, t, f, _);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ne, null;
          var H = i.children, O = i.fallback, W = Aw(e, t, H, O, f), oe = t.child;
          return oe.memoizedState = TS(f), t.memoizedState = CS, W;
        }
      else {
        if (bR(), (t.mode & $e) === be)
          return fm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if ($y(u)) {
          var p, v, y;
          {
            var E = Px(u);
            p = E.digest, v = E.message, y = E.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var R = cS(b, p, y);
          return fm(e, t, f, R);
        }
        var L = tr(f, e.childLanes);
        if (ei || L) {
          var z = Tm();
          if (z !== null) {
            var A = sy(z, f);
            if (A !== Xe && A !== s.retryLane) {
              s.retryLane = A;
              var ue = vt;
              Br(e, A), Sn(z, e, A, ue);
            }
          }
          QS();
          var Re = cS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return fm(e, t, f, Re);
        } else if (K0(u)) {
          t.flags |= Ne, t.child = e.child;
          var Se = sD.bind(null, e);
          return Yx(u, Se), null;
        } else {
          _R(t, u, s.treeContext);
          var qe = i.children, Ge = xS(t, qe);
          return Ge.flags |= Mr, Ge;
        }
      }
    }
    function O1(e, t, a) {
      e.lanes = Ve(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ve(i.lanes, t)), sg(e.return, t, a);
    }
    function Vw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ee) {
          var u = i.memoizedState;
          u !== null && O1(i, a, e);
        } else if (i.tag === ze)
          O1(i, a, e);
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
    function jw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Yh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Bw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !yS[e])
        if (yS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function $w(e, t) {
      e !== void 0 && !cm[e] && (e !== "collapsed" && e !== "hidden" ? (cm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (cm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function M1(e, t) {
      {
        var a = Jt(e), i = !a && typeof Ma(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Pw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Jt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!M1(e[a], a))
              return;
        } else {
          var i = Ma(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!M1(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function wS(e, t, a, i, u) {
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
    function N1(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Bw(u), $w(s, u), Pw(f, u), mr(e, t, f, a);
      var p = Za.current, v = Ug(p, qd);
      if (v)
        p = Ag(p, qd), t.flags |= Ne;
      else {
        var y = e !== null && (e.flags & Ne) !== Te;
        y && Vw(t, t.child, a), p = jc(p);
      }
      if (Lu(t, p), (t.mode & $e) === be)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var E = jw(t.child), b;
            E === null ? (b = t.child, t.child = null) : (b = E.sibling, E.sibling = null), wS(
              t,
              !1,
              // isBackwards
              b,
              E,
              s
            );
            break;
          }
          case "backwards": {
            var R = null, L = t.child;
            for (t.child = null; L !== null; ) {
              var z = L.alternate;
              if (z !== null && Yh(z) === null) {
                t.child = L;
                break;
              }
              var A = L.sibling;
              L.sibling = R, R = L, L = A;
            }
            wS(
              t,
              !0,
              // isBackwards
              R,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            wS(
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
    function Yw(e, t, a) {
      Ng(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Fc(t, null, i, a) : mr(e, t, i, a), t.child;
    }
    var L1 = !1;
    function Qw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || L1 || (L1 = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Xa(v, s, "prop", "Context.Provider");
      }
      if (EE(t, u, p), f !== null) {
        var y = f.value;
        if (ve(y, p)) {
          if (f.children === s.children && !Eh())
            return Ml(e, t, a);
        } else
          VR(t, u, a);
      }
      var E = s.children;
      return mr(e, t, E, a), t.child;
    }
    var z1 = !1;
    function Iw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (z1 || (z1 = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Hc(t, a);
      var f = un(i);
      wi(t);
      var p;
      return ap.current = t, ta(!0), p = s(f), ta(!1), il(), t.flags |= gi, mr(e, t, p, a), t.child;
    }
    function lp() {
      ei = !0;
    }
    function dm(e, t) {
      (t.mode & $e) === be && e !== null && (e.alternate = null, t.alternate = null, t.flags |= ht);
    }
    function Ml(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), h1(), gp(t.lanes), tr(a, t.childLanes) ? (KR(e, t), t.child) : null;
    }
    function Gw(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= nt) : s.push(e), a.flags |= ht, a;
      }
    }
    function bS(e, t) {
      var a = e.lanes;
      return !!tr(a, t);
    }
    function Xw(e, t, a) {
      switch (t.tag) {
        case $:
          b1(t), t.stateNode, Uc();
          break;
        case Z:
          VE(t);
          break;
        case P: {
          var i = t.type;
          Ai(i) && Th(t);
          break;
        }
        case Y:
          Ng(t, t.stateNode.containerInfo);
          break;
        case B: {
          var u = t.memoizedProps.value, s = t.type._context;
          EE(t, s, u);
          break;
        }
        case ye:
          {
            var f = tr(a, t.childLanes);
            f && (t.flags |= Fe);
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
              return Lu(t, jc(Za.current)), t.flags |= Ne, null;
            var y = t.child, E = y.childLanes;
            if (tr(a, E))
              return k1(e, t, a);
            Lu(t, jc(Za.current));
            var b = Ml(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            Lu(t, jc(Za.current));
          break;
        }
        case ze: {
          var R = (e.flags & Ne) !== Te, L = tr(a, t.childLanes);
          if (R) {
            if (L)
              return N1(e, t, a);
            t.flags |= Ne;
          }
          var z = t.memoizedState;
          if (z !== null && (z.rendering = null, z.tail = null, z.lastEffect = null), Lu(t, Za.current), L)
            break;
          return null;
        }
        case je:
        case tt:
          return t.lanes = F, x1(e, t, a);
      }
      return Ml(e, t, a);
    }
    function U1(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Gw(e, t, n0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Eh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ei = !0;
        else {
          var s = bS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ne) === Te)
            return ei = !1, Xw(e, t, a);
          (e.flags & go) !== Te ? ei = !0 : ei = !1;
        }
      } else if (ei = !1, An() && ER(t)) {
        var f = t.index, p = CR();
        oE(t, p, f);
      }
      switch (t.lanes = F, t.tag) {
        case de:
          return _w(e, t, t.type, a);
        case En: {
          var v = t.elementType;
          return Dw(e, t, v, a);
        }
        case G: {
          var y = t.type, E = t.pendingProps, b = t.elementType === y ? E : Ka(y, E);
          return gS(e, t, y, b, a);
        }
        case P: {
          var R = t.type, L = t.pendingProps, z = t.elementType === R ? L : Ka(R, L);
          return w1(e, t, R, z, a);
        }
        case $:
          return Rw(e, t, a);
        case Z:
          return ww(e, t, a);
        case xe:
          return bw(e, t);
        case Ee:
          return k1(e, t, a);
        case Y:
          return Yw(e, t, a);
        case q: {
          var A = t.type, ue = t.pendingProps, Re = t.elementType === A ? ue : Ka(A, ue);
          return E1(e, t, A, Re, a);
        }
        case Me:
          return Cw(e, t, a);
        case Pe:
          return Tw(e, t, a);
        case ye:
          return xw(e, t, a);
        case B:
          return Qw(e, t, a);
        case se:
          return Iw(e, t, a);
        case Ke: {
          var Se = t.type, qe = t.pendingProps, Ge = Ka(Se, qe);
          if (t.type !== t.elementType) {
            var _ = Se.propTypes;
            _ && Xa(
              _,
              Ge,
              // Resolved for outer only
              "prop",
              dt(Se)
            );
          }
          return Ge = Ka(Se.type, Ge), C1(e, t, Se, Ge, a);
        }
        case Be:
          return T1(e, t, t.type, t.pendingProps, a);
        case Zt: {
          var H = t.type, O = t.pendingProps, W = t.elementType === H ? O : Ka(H, O);
          return kw(e, t, H, W, a);
        }
        case ze:
          return N1(e, t, a);
        case on:
          break;
        case je:
          return x1(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ic(e) {
      e.flags |= Fe;
    }
    function A1(e) {
      e.flags |= Xn, e.flags |= Bf;
    }
    var H1, DS, F1, V1;
    H1 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === Z || u.tag === xe)
          yx(e, u.stateNode);
        else if (u.tag !== Y) {
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
    }, DS = function(e, t) {
    }, F1 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Lg(), v = Sx(f, a, s, i, u, p);
        t.updateQueue = v, v && Ic(t);
      }
    }, V1 = function(e, t, a, i) {
      a !== i && Ic(t);
    };
    function up(e, t) {
      if (!An())
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
    function Fn(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = F, i = Te;
      if (t) {
        if ((e.mode & De) !== be) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Ve(a, Ve(y.lanes, y.childLanes)), i |= y.subtreeFlags & sn, i |= y.flags & sn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var E = e.child; E !== null; )
            a = Ve(a, Ve(E.lanes, E.childLanes)), i |= E.subtreeFlags & sn, i |= E.flags & sn, E.return = e, E = E.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & De) !== be) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ve(a, Ve(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ve(a, Ve(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Ww(e, t, a) {
      if (zR() && (t.mode & $e) !== be && (t.flags & Ne) === Te)
        return hE(t), Uc(), t.flags |= Mt | cr | tn, !1;
      var i = Dh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (NR(t), Fn(t), (t.mode & De) !== be) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Uc(), (t.flags & Ne) === Te && (t.memoizedState = null), t.flags |= Fe, Fn(t), (t.mode & De) !== be) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return mE(), !0;
    }
    function j1(e, t, a) {
      var i = t.pendingProps;
      switch (Jy(t), t.tag) {
        case de:
        case En:
        case Be:
        case G:
        case q:
        case Me:
        case Pe:
        case ye:
        case se:
        case Ke:
          return Fn(t), null;
        case P: {
          var u = t.type;
          return Ai(u) && Ch(t), Fn(t), null;
        }
        case $: {
          var s = t.stateNode;
          if (Vc(t), Wy(t), Fg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Dh(t);
            if (f)
              Ic(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Mt) !== Te) && (t.flags |= Or, mE());
            }
          }
          return DS(e, t), Fn(t), null;
        }
        case Z: {
          zg(t);
          var v = FE(), y = t.type;
          if (e !== null && t.stateNode != null)
            F1(e, t, y, i, v), e.ref !== t.ref && A1(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Fn(t), null;
            }
            var E = Lg(), b = Dh(t);
            if (b)
              OR(t, v, E) && Ic(t);
            else {
              var R = mx(y, i, v, E, t);
              H1(R, t, !1, !1), t.stateNode = R, gx(R, y, i, v) && Ic(t);
            }
            t.ref !== null && A1(t);
          }
          return Fn(t), null;
        }
        case xe: {
          var L = i;
          if (e && t.stateNode != null) {
            var z = e.memoizedProps;
            V1(e, t, z, L);
          } else {
            if (typeof L != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var A = FE(), ue = Lg(), Re = Dh(t);
            Re ? MR(t) && Ic(t) : t.stateNode = Ex(L, A, ue, t);
          }
          return Fn(t), null;
        }
        case Ee: {
          Bc(t);
          var Se = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var qe = Ww(e, t, Se);
            if (!qe)
              return t.flags & tn ? t : null;
          }
          if ((t.flags & Ne) !== Te)
            return t.lanes = a, (t.mode & De) !== be && sS(t), t;
          var Ge = Se !== null, _ = e !== null && e.memoizedState !== null;
          if (Ge !== _ && Ge) {
            var H = t.child;
            if (H.flags |= Si, (t.mode & $e) !== be) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !it);
              O || Ug(Za.current, BE) ? qb() : QS();
            }
          }
          var W = t.updateQueue;
          if (W !== null && (t.flags |= Fe), Fn(t), (t.mode & De) !== be && Ge) {
            var oe = t.child;
            oe !== null && (t.treeBaseDuration -= oe.treeBaseDuration);
          }
          return null;
        }
        case Y:
          return Vc(t), DS(e, t), e === null && pR(t.stateNode.containerInfo), Fn(t), null;
        case B:
          var ae = t.type._context;
          return og(ae, t), Fn(t), null;
        case Zt: {
          var Oe = t.type;
          return Ai(Oe) && Ch(t), Fn(t), null;
        }
        case ze: {
          Bc(t);
          var Ae = t.memoizedState;
          if (Ae === null)
            return Fn(t), null;
          var ct = (t.flags & Ne) !== Te, Je = Ae.rendering;
          if (Je === null)
            if (ct)
              up(Ae, !1);
            else {
              var Kt = Zb() && (e === null || (e.flags & Ne) === Te);
              if (!Kt)
                for (var et = t.child; et !== null; ) {
                  var Pt = Yh(et);
                  if (Pt !== null) {
                    ct = !0, t.flags |= Ne, up(Ae, !1);
                    var ir = Pt.updateQueue;
                    return ir !== null && (t.updateQueue = ir, t.flags |= Fe), t.subtreeFlags = Te, ZR(t, a), Lu(t, Ag(Za.current, qd)), t.child;
                  }
                  et = et.sibling;
                }
              Ae.tail !== null && xt() > uC() && (t.flags |= Ne, ct = !0, up(Ae, !1), t.lanes = ed);
            }
          else {
            if (!ct) {
              var Pn = Yh(Je);
              if (Pn !== null) {
                t.flags |= Ne, ct = !0;
                var sa = Pn.updateQueue;
                if (sa !== null && (t.updateQueue = sa, t.flags |= Fe), up(Ae, !0), Ae.tail === null && Ae.tailMode === "hidden" && !Je.alternate && !An())
                  return Fn(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                xt() * 2 - Ae.renderingStartTime > uC() && a !== er && (t.flags |= Ne, ct = !0, up(Ae, !1), t.lanes = ed);
            }
            if (Ae.isBackwards)
              Je.sibling = t.child, t.child = Je;
            else {
              var Sr = Ae.last;
              Sr !== null ? Sr.sibling = Je : t.child = Je, Ae.last = Je;
            }
          }
          if (Ae.tail !== null) {
            var Er = Ae.tail;
            Ae.rendering = Er, Ae.tail = Er.sibling, Ae.renderingStartTime = xt(), Er.sibling = null;
            var lr = Za.current;
            return ct ? lr = Ag(lr, qd) : lr = jc(lr), Lu(t, lr), Er;
          }
          return Fn(t), null;
        }
        case on:
          break;
        case je:
        case tt: {
          YS(t);
          var Al = t.memoizedState, ef = Al !== null;
          if (e !== null) {
            var xp = e.memoizedState, Yi = xp !== null;
            Yi !== ef && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ce && (t.flags |= Si);
          }
          return !ef || (t.mode & $e) === be ? Fn(t) : tr(Pi, er) && (Fn(t), t.subtreeFlags & (ht | Fe) && (t.flags |= Si)), null;
        }
        case Mn:
          return null;
        case Dt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function qw(e, t, a) {
      switch (Jy(t), t.tag) {
        case P: {
          var i = t.type;
          Ai(i) && Ch(t);
          var u = t.flags;
          return u & tn ? (t.flags = u & ~tn | Ne, (t.mode & De) !== be && sS(t), t) : null;
        }
        case $: {
          t.stateNode, Vc(t), Wy(t), Fg();
          var s = t.flags;
          return (s & tn) !== Te && (s & Ne) === Te ? (t.flags = s & ~tn | Ne, t) : null;
        }
        case Z:
          return zg(t), null;
        case Ee: {
          Bc(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Uc();
          }
          var p = t.flags;
          return p & tn ? (t.flags = p & ~tn | Ne, (t.mode & De) !== be && sS(t), t) : null;
        }
        case ze:
          return Bc(t), null;
        case Y:
          return Vc(t), null;
        case B:
          var v = t.type._context;
          return og(v, t), null;
        case je:
        case tt:
          return YS(t), null;
        case Mn:
          return null;
        default:
          return null;
      }
    }
    function B1(e, t, a) {
      switch (Jy(t), t.tag) {
        case P: {
          var i = t.type.childContextTypes;
          i != null && Ch(t);
          break;
        }
        case $: {
          t.stateNode, Vc(t), Wy(t), Fg();
          break;
        }
        case Z: {
          zg(t);
          break;
        }
        case Y:
          Vc(t);
          break;
        case Ee:
          Bc(t);
          break;
        case ze:
          Bc(t);
          break;
        case B:
          var u = t.type._context;
          og(u, t);
          break;
        case je:
        case tt:
          YS(t);
          break;
      }
    }
    var $1 = null;
    $1 = /* @__PURE__ */ new Set();
    var pm = !1, Vn = !1, Kw = typeof WeakSet == "function" ? WeakSet : Set, he = null, Gc = null, Xc = null;
    function Zw(e) {
      rl(null, function() {
        throw e;
      }), Vf();
    }
    var Jw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & De)
        try {
          Bi(), t.componentWillUnmount();
        } finally {
          ji(e);
        }
      else
        t.componentWillUnmount();
    };
    function P1(e, t) {
      try {
        Au(pn, e);
      } catch (a) {
        St(e, t, a);
      }
    }
    function kS(e, t, a) {
      try {
        Jw(e, a);
      } catch (i) {
        St(e, t, i);
      }
    }
    function eb(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        St(e, t, i);
      }
    }
    function Y1(e, t) {
      try {
        I1(e);
      } catch (a) {
        St(e, t, a);
      }
    }
    function Wc(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Nn && li && e.mode & De)
              try {
                Bi(), i = a(null);
              } finally {
                ji(e);
              }
            else
              i = a(null);
          } catch (u) {
            St(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", He(e));
        } else
          a.current = null;
    }
    function vm(e, t, a) {
      try {
        a();
      } catch (i) {
        St(e, t, i);
      }
    }
    var Q1 = !1;
    function tb(e, t) {
      vx(e.containerInfo), he = t, nb();
      var a = Q1;
      return Q1 = !1, a;
    }
    function nb() {
      for (; he !== null; ) {
        var e = he, t = e.child;
        (e.subtreeFlags & nu) !== Te && t !== null ? (t.return = e, he = t) : rb();
      }
    }
    function rb() {
      for (; he !== null; ) {
        var e = he;
        ot(e);
        try {
          ab(e);
        } catch (a) {
          St(e, e.return, a);
        }
        Qt();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, he = t;
          return;
        }
        he = e.return;
      }
    }
    function ab(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Or) !== Te) {
        switch (ot(e), e.tag) {
          case G:
          case q:
          case Be:
            break;
          case P: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ko && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", He(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", He(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Ka(e.type, i), u);
              {
                var p = $1;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", He(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case $: {
            {
              var v = e.stateNode;
              Vx(v.containerInfo);
            }
            break;
          }
          case Z:
          case xe:
          case Y:
          case Zt:
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
            f.destroy = void 0, p !== void 0 && ((e & Hn) !== $r ? Fs(t) : (e & pn) !== $r && Vs(t), (e & Hi) !== $r && Ep(!0), vm(t, a, p), (e & Hi) !== $r && Ep(!1), (e & Hn) !== $r ? bv() : (e & pn) !== $r && ru());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Au(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Hn) !== $r ? wv(t) : (e & pn) !== $r && Dv(t);
            var f = s.create;
            (e & Hi) !== $r && Ep(!0), s.destroy = f(), (e & Hi) !== $r && Ep(!1), (e & Hn) !== $r ? Kf() : (e & pn) !== $r && kv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & pn) !== Te ? v = "useLayoutEffect" : (s.tag & Hi) !== Te ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function ib(e, t) {
      if ((t.flags & Fe) !== Te)
        switch (t.tag) {
          case ye: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = p1(), p = t.alternate === null ? "mount" : "update";
            d1() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case $:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case ye:
                    var E = v.stateNode;
                    E.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function lb(e, t, a, i) {
      if ((a.flags & Rn) !== Te)
        switch (a.tag) {
          case G:
          case q:
          case Be: {
            if (!Vn)
              if (a.mode & De)
                try {
                  Bi(), Au(pn | dn, a);
                } finally {
                  ji(a);
                }
              else
                Au(pn | dn, a);
            break;
          }
          case P: {
            var u = a.stateNode;
            if (a.flags & Fe && !Vn)
              if (t === null)
                if (a.type === a.elementType && !Ko && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", He(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", He(a) || "instance")), a.mode & De)
                  try {
                    Bi(), u.componentDidMount();
                  } finally {
                    ji(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Ka(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Ko && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", He(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", He(a) || "instance")), a.mode & De)
                  try {
                    Bi(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ji(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Ko && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", He(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", He(a) || "instance")), bE(a, p, u));
            break;
          }
          case $: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Z:
                    y = a.child.stateNode;
                    break;
                  case P:
                    y = a.child.stateNode;
                    break;
                }
              bE(a, v, y);
            }
            break;
          }
          case Z: {
            var E = a.stateNode;
            if (t === null && a.flags & Fe) {
              var b = a.type, R = a.memoizedProps;
              wx(E, b, R);
            }
            break;
          }
          case xe:
            break;
          case Y:
            break;
          case ye: {
            {
              var L = a.memoizedProps, z = L.onCommit, A = L.onRender, ue = a.stateNode.effectDuration, Re = p1(), Se = t === null ? "mount" : "update";
              d1() && (Se = "nested-update"), typeof A == "function" && A(a.memoizedProps.id, Se, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Re);
              {
                typeof z == "function" && z(a.memoizedProps.id, Se, ue, Re), rD(a);
                var qe = a.return;
                e:
                  for (; qe !== null; ) {
                    switch (qe.tag) {
                      case $:
                        var Ge = qe.stateNode;
                        Ge.effectDuration += ue;
                        break e;
                      case ye:
                        var _ = qe.stateNode;
                        _.effectDuration += ue;
                        break e;
                    }
                    qe = qe.return;
                  }
              }
            }
            break;
          }
          case Ee: {
            vb(e, a);
            break;
          }
          case ze:
          case Zt:
          case on:
          case je:
          case tt:
          case Dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Vn || a.flags & Xn && I1(a);
    }
    function ub(e) {
      switch (e.tag) {
        case G:
        case q:
        case Be: {
          if (e.mode & De)
            try {
              Bi(), P1(e, e.return);
            } finally {
              ji(e);
            }
          else
            P1(e, e.return);
          break;
        }
        case P: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && eb(e, e.return, t), Y1(e, e.return);
          break;
        }
        case Z: {
          Y1(e, e.return);
          break;
        }
      }
    }
    function ob(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === Z) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Ux(u) : Hx(i.stateNode, i.memoizedProps);
            } catch (f) {
              St(e, e.return, f);
            }
          }
        } else if (i.tag === xe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Ax(s) : Fx(s, i.memoizedProps);
            } catch (f) {
              St(e, e.return, f);
            }
        } else if (!((i.tag === je || i.tag === tt) && i.memoizedState !== null && i !== e)) {
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
    function I1(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case Z:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & De)
            try {
              Bi(), u = t(i);
            } finally {
              ji(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", He(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", He(e)), t.current = i;
      }
    }
    function sb(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function G1(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, G1(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Z) {
          var a = e.stateNode;
          a !== null && mR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function cb(e) {
      for (var t = e.return; t !== null; ) {
        if (X1(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function X1(e) {
      return e.tag === Z || e.tag === $ || e.tag === Y;
    }
    function W1(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || X1(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== Z && t.tag !== xe && t.tag !== Tt; ) {
            if (t.flags & ht || t.child === null || t.tag === Y)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & ht))
            return t.stateNode;
        }
    }
    function fb(e) {
      var t = cb(e);
      switch (t.tag) {
        case Z: {
          var a = t.stateNode;
          t.flags & rt && (q0(a), t.flags &= ~rt);
          var i = W1(e);
          OS(e, i, a);
          break;
        }
        case $:
        case Y: {
          var u = t.stateNode.containerInfo, s = W1(e);
          _S(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === Z || i === xe;
      if (u) {
        var s = e.stateNode;
        t ? Mx(a, s, t) : _x(a, s);
      } else if (i !== Y) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    function OS(e, t, a) {
      var i = e.tag, u = i === Z || i === xe;
      if (u) {
        var s = e.stateNode;
        t ? Ox(a, s, t) : kx(a, s);
      } else if (i !== Y) {
        var f = e.child;
        if (f !== null) {
          OS(f, t, a);
          for (var p = f.sibling; p !== null; )
            OS(p, t, a), p = p.sibling;
        }
      }
    }
    var jn = null, ni = !1;
    function db(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case Z: {
                jn = i.stateNode, ni = !1;
                break e;
              }
              case $: {
                jn = i.stateNode.containerInfo, ni = !0;
                break e;
              }
              case Y: {
                jn = i.stateNode.containerInfo, ni = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (jn === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        q1(e, t, a), jn = null, ni = !1;
      }
      sb(a);
    }
    function Hu(e, t, a) {
      for (var i = a.child; i !== null; )
        q1(e, t, i), i = i.sibling;
    }
    function q1(e, t, a) {
      switch (Wf(a), a.tag) {
        case Z:
          Vn || Wc(a, t);
        case xe: {
          {
            var i = jn, u = ni;
            jn = null, Hu(e, t, a), jn = i, ni = u, jn !== null && (ni ? Lx(jn, a.stateNode) : Nx(jn, a.stateNode));
          }
          return;
        }
        case Tt: {
          jn !== null && (ni ? zx(jn, a.stateNode) : By(jn, a.stateNode));
          return;
        }
        case Y: {
          {
            var s = jn, f = ni;
            jn = a.stateNode.containerInfo, ni = !0, Hu(e, t, a), jn = s, ni = f;
          }
          return;
        }
        case G:
        case q:
        case Ke:
        case Be: {
          if (!Vn) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, E = y;
                do {
                  var b = E, R = b.destroy, L = b.tag;
                  R !== void 0 && ((L & Hi) !== $r ? vm(a, t, R) : (L & pn) !== $r && (Vs(a), a.mode & De ? (Bi(), vm(a, t, R), ji(a)) : vm(a, t, R), ru())), E = E.next;
                } while (E !== y);
              }
            }
          }
          Hu(e, t, a);
          return;
        }
        case P: {
          if (!Vn) {
            Wc(a, t);
            var z = a.stateNode;
            typeof z.componentWillUnmount == "function" && kS(a, t, z);
          }
          Hu(e, t, a);
          return;
        }
        case on: {
          Hu(e, t, a);
          return;
        }
        case je: {
          if (
            // TODO: Remove this dead flag
            a.mode & $e
          ) {
            var A = Vn;
            Vn = A || a.memoizedState !== null, Hu(e, t, a), Vn = A;
          } else
            Hu(e, t, a);
          break;
        }
        default: {
          Hu(e, t, a);
          return;
        }
      }
    }
    function pb(e) {
      e.memoizedState;
    }
    function vb(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && Jx(s);
          }
        }
      }
    }
    function K1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Kw()), t.forEach(function(i) {
          var u = cD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), cn)
              if (Gc !== null && Xc !== null)
                Sp(Xc, Gc);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function hb(e, t, a) {
      Gc = a, Xc = e, ot(t), Z1(t, e), ot(t), Gc = null, Xc = null;
    }
    function ri(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            db(e, t, s);
          } catch (v) {
            St(s, t, v);
          }
        }
      var f = jm();
      if (t.subtreeFlags & Kn)
        for (var p = t.child; p !== null; )
          ot(p), Z1(p, e), p = p.sibling;
      ot(f);
    }
    function Z1(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case G:
        case q:
        case Ke:
        case Be: {
          if (ri(t, e), $i(e), u & Fe) {
            try {
              ti(Hi | dn, e, e.return), Au(Hi | dn, e);
            } catch (Oe) {
              St(e, e.return, Oe);
            }
            if (e.mode & De) {
              try {
                Bi(), ti(pn | dn, e, e.return);
              } catch (Oe) {
                St(e, e.return, Oe);
              }
              ji(e);
            } else
              try {
                ti(pn | dn, e, e.return);
              } catch (Oe) {
                St(e, e.return, Oe);
              }
          }
          return;
        }
        case P: {
          ri(t, e), $i(e), u & Xn && i !== null && Wc(i, i.return);
          return;
        }
        case Z: {
          ri(t, e), $i(e), u & Xn && i !== null && Wc(i, i.return);
          {
            if (e.flags & rt) {
              var s = e.stateNode;
              try {
                q0(s);
              } catch (Oe) {
                St(e, e.return, Oe);
              }
            }
            if (u & Fe) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, E = e.updateQueue;
                if (e.updateQueue = null, E !== null)
                  try {
                    bx(f, E, y, v, p, e);
                  } catch (Oe) {
                    St(e, e.return, Oe);
                  }
              }
            }
          }
          return;
        }
        case xe: {
          if (ri(t, e), $i(e), u & Fe) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, R = e.memoizedProps, L = i !== null ? i.memoizedProps : R;
            try {
              Dx(b, L, R);
            } catch (Oe) {
              St(e, e.return, Oe);
            }
          }
          return;
        }
        case $: {
          if (ri(t, e), $i(e), u & Fe && i !== null) {
            var z = i.memoizedState;
            if (z.isDehydrated)
              try {
                Zx(t.containerInfo);
              } catch (Oe) {
                St(e, e.return, Oe);
              }
          }
          return;
        }
        case Y: {
          ri(t, e), $i(e);
          return;
        }
        case Ee: {
          ri(t, e), $i(e);
          var A = e.child;
          if (A.flags & Si) {
            var ue = A.stateNode, Re = A.memoizedState, Se = Re !== null;
            if (ue.isHidden = Se, Se) {
              var qe = A.alternate !== null && A.alternate.memoizedState !== null;
              qe || Wb();
            }
          }
          if (u & Fe) {
            try {
              pb(e);
            } catch (Oe) {
              St(e, e.return, Oe);
            }
            K1(e);
          }
          return;
        }
        case je: {
          var Ge = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & $e
          ) {
            var _ = Vn;
            Vn = _ || Ge, ri(t, e), Vn = _;
          } else
            ri(t, e);
          if ($i(e), u & Si) {
            var H = e.stateNode, O = e.memoizedState, W = O !== null, oe = e;
            if (H.isHidden = W, W && !Ge && (oe.mode & $e) !== be) {
              he = oe;
              for (var ae = oe.child; ae !== null; )
                he = ae, yb(ae), ae = ae.sibling;
            }
            ob(oe, W);
          }
          return;
        }
        case ze: {
          ri(t, e), $i(e), u & Fe && K1(e);
          return;
        }
        case on:
          return;
        default: {
          ri(t, e), $i(e);
          return;
        }
      }
    }
    function $i(e) {
      var t = e.flags;
      if (t & ht) {
        try {
          fb(e);
        } catch (a) {
          St(e, e.return, a);
        }
        e.flags &= ~ht;
      }
      t & Mr && (e.flags &= ~Mr);
    }
    function mb(e, t, a) {
      Gc = a, Xc = t, he = e, J1(e, t, a), Gc = null, Xc = null;
    }
    function J1(e, t, a) {
      for (var i = (e.mode & $e) !== be; he !== null; ) {
        var u = he, s = u.child;
        if (u.tag === je && i) {
          var f = u.memoizedState !== null, p = f || pm;
          if (p) {
            MS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, E = y || Vn, b = pm, R = Vn;
            pm = p, Vn = E, Vn && !R && (he = u, gb(u));
            for (var L = s; L !== null; )
              he = L, J1(
                L,
                // New root; bubble back up to here and stop.
                t,
                a
              ), L = L.sibling;
            he = u, pm = b, Vn = R, MS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Rn) !== Te && s !== null ? (s.return = u, he = s) : MS(e, t, a);
      }
    }
    function MS(e, t, a) {
      for (; he !== null; ) {
        var i = he;
        if ((i.flags & Rn) !== Te) {
          var u = i.alternate;
          ot(i);
          try {
            lb(t, u, i, a);
          } catch (f) {
            St(i, i.return, f);
          }
          Qt();
        }
        if (i === e) {
          he = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, he = s;
          return;
        }
        he = i.return;
      }
    }
    function yb(e) {
      for (; he !== null; ) {
        var t = he, a = t.child;
        switch (t.tag) {
          case G:
          case q:
          case Ke:
          case Be: {
            if (t.mode & De)
              try {
                Bi(), ti(pn, t, t.return);
              } finally {
                ji(t);
              }
            else
              ti(pn, t, t.return);
            break;
          }
          case P: {
            Wc(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && kS(t, t.return, i);
            break;
          }
          case Z: {
            Wc(t, t.return);
            break;
          }
          case je: {
            var u = t.memoizedState !== null;
            if (u) {
              eC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, he = a) : eC(e);
      }
    }
    function eC(e) {
      for (; he !== null; ) {
        var t = he;
        if (t === e) {
          he = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, he = a;
          return;
        }
        he = t.return;
      }
    }
    function gb(e) {
      for (; he !== null; ) {
        var t = he, a = t.child;
        if (t.tag === je) {
          var i = t.memoizedState !== null;
          if (i) {
            tC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, he = a) : tC(e);
      }
    }
    function tC(e) {
      for (; he !== null; ) {
        var t = he;
        ot(t);
        try {
          ub(t);
        } catch (i) {
          St(t, t.return, i);
        }
        if (Qt(), t === e) {
          he = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, he = a;
          return;
        }
        he = t.return;
      }
    }
    function Sb(e, t, a, i) {
      he = t, Eb(t, e, a, i);
    }
    function Eb(e, t, a, i) {
      for (; he !== null; ) {
        var u = he, s = u.child;
        (u.subtreeFlags & Nr) !== Te && s !== null ? (s.return = u, he = s) : Cb(e, t, a, i);
      }
    }
    function Cb(e, t, a, i) {
      for (; he !== null; ) {
        var u = he;
        if ((u.flags & Et) !== Te) {
          ot(u);
          try {
            Tb(t, u, a, i);
          } catch (f) {
            St(u, u.return, f);
          }
          Qt();
        }
        if (u === e) {
          he = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, he = s;
          return;
        }
        he = u.return;
      }
    }
    function Tb(e, t, a, i) {
      switch (t.tag) {
        case G:
        case q:
        case Be: {
          if (t.mode & De) {
            oS();
            try {
              Au(Hn | dn, t);
            } finally {
              uS(t);
            }
          } else
            Au(Hn | dn, t);
          break;
        }
      }
    }
    function xb(e) {
      he = e, Rb();
    }
    function Rb() {
      for (; he !== null; ) {
        var e = he, t = e.child;
        if ((he.flags & nt) !== Te) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              he = u, Db(u, e);
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
            he = e;
          }
        }
        (e.subtreeFlags & Nr) !== Te && t !== null ? (t.return = e, he = t) : wb();
      }
    }
    function wb() {
      for (; he !== null; ) {
        var e = he;
        (e.flags & Et) !== Te && (ot(e), bb(e), Qt());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, he = t;
          return;
        }
        he = e.return;
      }
    }
    function bb(e) {
      switch (e.tag) {
        case G:
        case q:
        case Be: {
          e.mode & De ? (oS(), ti(Hn | dn, e, e.return), uS(e)) : ti(Hn | dn, e, e.return);
          break;
        }
      }
    }
    function Db(e, t) {
      for (; he !== null; ) {
        var a = he;
        ot(a), _b(a, t), Qt();
        var i = a.child;
        i !== null ? (i.return = a, he = i) : kb(e);
      }
    }
    function kb(e) {
      for (; he !== null; ) {
        var t = he, a = t.sibling, i = t.return;
        if (G1(t), t === e) {
          he = null;
          return;
        }
        if (a !== null) {
          a.return = i, he = a;
          return;
        }
        he = i;
      }
    }
    function _b(e, t) {
      switch (e.tag) {
        case G:
        case q:
        case Be: {
          e.mode & De ? (oS(), ti(Hn, e, t), uS(e)) : ti(Hn, e, t);
          break;
        }
      }
    }
    function Ob(e) {
      switch (e.tag) {
        case G:
        case q:
        case Be: {
          try {
            Au(pn | dn, e);
          } catch (a) {
            St(e, e.return, a);
          }
          break;
        }
        case P: {
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
    function Mb(e) {
      switch (e.tag) {
        case G:
        case q:
        case Be: {
          try {
            Au(Hn | dn, e);
          } catch (t) {
            St(e, e.return, t);
          }
          break;
        }
      }
    }
    function Nb(e) {
      switch (e.tag) {
        case G:
        case q:
        case Be: {
          try {
            ti(pn | dn, e, e.return);
          } catch (a) {
            St(e, e.return, a);
          }
          break;
        }
        case P: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && kS(e, e.return, t);
          break;
        }
      }
    }
    function Lb(e) {
      switch (e.tag) {
        case G:
        case q:
        case Be:
          try {
            ti(Hn | dn, e, e.return);
          } catch (t) {
            St(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var op = Symbol.for;
      op("selector.component"), op("selector.has_pseudo_class"), op("selector.role"), op("selector.test_id"), op("selector.text");
    }
    var zb = [];
    function Ub() {
      zb.forEach(function(e) {
        return e();
      });
    }
    var Ab = h.ReactCurrentActQueue;
    function Hb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function nC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Ab.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Fb = Math.ceil, NS = h.ReactCurrentDispatcher, LS = h.ReactCurrentOwner, Bn = h.ReactCurrentBatchConfig, ai = h.ReactCurrentActQueue, mn = (
      /*             */
      0
    ), rC = (
      /*               */
      1
    ), $n = (
      /*                */
      2
    ), ba = (
      /*                */
      4
    ), Nl = 0, sp = 1, Zo = 2, hm = 3, cp = 4, aC = 5, zS = 6, We = mn, yr = null, Ht = null, yn = F, Pi = F, US = Du(F), gn = Nl, fp = null, mm = F, dp = F, ym = F, pp = null, Pr = null, AS = 0, iC = 500, lC = 1 / 0, Vb = 500, Ll = null;
    function vp() {
      lC = xt() + Vb;
    }
    function uC() {
      return lC;
    }
    var gm = !1, HS = null, qc = null, Jo = !1, Fu = null, hp = F, FS = [], VS = null, jb = 50, mp = 0, jS = null, BS = !1, Sm = !1, Bb = 50, Kc = 0, Em = null, yp = vt, Cm = F, oC = !1;
    function Tm() {
      return yr;
    }
    function gr() {
      return (We & ($n | ba)) !== mn ? xt() : (yp !== vt || (yp = xt()), yp);
    }
    function Vu(e) {
      var t = e.mode;
      if ((t & $e) === be)
        return ke;
      if ((We & $n) !== mn && yn !== F)
        return Gt(yn);
      var a = HR() !== AR;
      if (a) {
        if (Bn.transition !== null) {
          var i = Bn.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Cm === Xe && (Cm = rd()), Cm;
      }
      var u = Ar();
      if (u !== Xe)
        return u;
      var s = Cx();
      return s;
    }
    function $b(e) {
      var t = e.mode;
      return (t & $e) === be ? ke : oy();
    }
    function Sn(e, t, a, i) {
      dD(), oC && S("useInsertionEffect must not schedule updates."), BS && (Sm = !0), hl(e, a, i), (We & $n) !== F && e === yr ? hD(t) : (cn && od(e, t, a), mD(t), e === yr && ((We & $n) === mn && (dp = Ve(dp, a)), gn === cp && ju(e, yn)), Yr(e, i), a === ke && We === mn && (t.mode & $e) === be && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ai.isBatchingLegacy && (vp(), uE()));
    }
    function Pb(e, t, a) {
      var i = e.current;
      i.lanes = t, hl(e, t, a), Yr(e, a);
    }
    function Yb(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (We & $n) !== mn
      );
    }
    function Yr(e, t) {
      var a = e.callbackNode;
      iy(e, t);
      var i = Ro(e, e === yr ? yn : F);
      if (i === F) {
        a !== null && RC(a), e.callbackNode = null, e.callbackPriority = Xe;
        return;
      }
      var u = Bt(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ai.current !== null && a !== XS)) {
        a == null && s !== ke && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && RC(a);
      var f;
      if (u === ke)
        e.tag === ku ? (ai.isBatchingLegacy !== null && (ai.didScheduleLegacyUpdate = !0), SR(fC.bind(null, e))) : lE(fC.bind(null, e)), ai.current !== null ? ai.current.push(_u) : xx(function() {
          (We & ($n | ba)) === mn && _u();
        }), f = null;
      else {
        var p;
        switch (_o(i)) {
          case wn:
            p = Us;
            break;
          case fn:
            p = pr;
            break;
          case Pa:
            p = ma;
            break;
          case Do:
            p = Ci;
            break;
          default:
            p = ma;
            break;
        }
        f = WS(p, sC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function sC(e, t) {
      if (dw(), yp = vt, Cm = F, (We & ($n | ba)) !== mn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Ul();
      if (i && e.callbackNode !== a)
        return null;
      var u = Ro(e, e === yr ? yn : F);
      if (u === F)
        return null;
      var s = !bo(e, u) && !zv(e, u) && !t, f = s ? eD(e, u) : Rm(e, u);
      if (f !== Nl) {
        if (f === Zo) {
          var p = td(e);
          p !== F && (u = p, f = $S(e, p));
        }
        if (f === sp) {
          var v = fp;
          throw es(e, F), ju(e, u), Yr(e, xt()), v;
        }
        if (f === zS)
          ju(e, u);
        else {
          var y = !bo(e, u), E = e.current.alternate;
          if (y && !Ib(E)) {
            if (f = Rm(e, u), f === Zo) {
              var b = td(e);
              b !== F && (u = b, f = $S(e, b));
            }
            if (f === sp) {
              var R = fp;
              throw es(e, F), ju(e, u), Yr(e, xt()), R;
            }
          }
          e.finishedWork = E, e.finishedLanes = u, Qb(e, f, u);
        }
      }
      return Yr(e, xt()), e.callbackNode === a ? sC.bind(null, e) : null;
    }
    function $S(e, t) {
      var a = pp;
      if (Wt(e)) {
        var i = es(e, t);
        i.flags |= Mt, dR(e.containerInfo);
      }
      var u = Rm(e, t);
      if (u !== Zo) {
        var s = Pr;
        Pr = a, s !== null && cC(s);
      }
      return u;
    }
    function cC(e) {
      Pr === null ? Pr = e : Pr.push.apply(Pr, e);
    }
    function Qb(e, t, a) {
      switch (t) {
        case Nl:
        case sp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Zo: {
          ts(e, Pr, Ll);
          break;
        }
        case hm: {
          if (ju(e, a), ic(a) && // do not delay if we're inside an act() scope
          !wC()) {
            var i = AS + iC - xt();
            if (i > 10) {
              var u = Ro(e, F);
              if (u !== F)
                break;
              var s = e.suspendedLanes;
              if (!vl(s, a)) {
                gr(), ld(e, s);
                break;
              }
              e.timeoutHandle = Vy(ts.bind(null, e, Pr, Ll), i);
              break;
            }
          }
          ts(e, Pr, Ll);
          break;
        }
        case cp: {
          if (ju(e, a), Lv(a))
            break;
          if (!wC()) {
            var f = Nv(e, a), p = f, v = xt() - p, y = fD(v) - v;
            if (y > 10) {
              e.timeoutHandle = Vy(ts.bind(null, e, Pr, Ll), y);
              break;
            }
          }
          ts(e, Pr, Ll);
          break;
        }
        case aC: {
          ts(e, Pr, Ll);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Ib(e) {
      for (var t = e; ; ) {
        if (t.flags & yo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ve(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & yo && v !== null) {
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
    function ju(e, t) {
      t = cu(t, ym), t = cu(t, dp), id(e, t);
    }
    function fC(e) {
      if (pw(), (We & ($n | ba)) !== mn)
        throw new Error("Should not already be working.");
      Ul();
      var t = Ro(e, F);
      if (!tr(t, ke))
        return Yr(e, xt()), null;
      var a = Rm(e, t);
      if (e.tag !== ku && a === Zo) {
        var i = td(e);
        i !== F && (t = i, a = $S(e, i));
      }
      if (a === sp) {
        var u = fp;
        throw es(e, F), ju(e, t), Yr(e, xt()), u;
      }
      if (a === zS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ts(e, Pr, Ll), Yr(e, xt()), null;
    }
    function Gb(e, t) {
      t !== F && (fu(e, Ve(t, ke)), Yr(e, xt()), (We & ($n | ba)) === mn && (vp(), _u()));
    }
    function PS(e, t) {
      var a = We;
      We |= rC;
      try {
        return e(t);
      } finally {
        We = a, We === mn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ai.isBatchingLegacy && (vp(), uE());
      }
    }
    function Xb(e, t, a, i, u) {
      var s = Ar(), f = Bn.transition;
      try {
        return Bn.transition = null, Xt(wn), e(t, a, i, u);
      } finally {
        Xt(s), Bn.transition = f, We === mn && vp();
      }
    }
    function zl(e) {
      Fu !== null && Fu.tag === ku && (We & ($n | ba)) === mn && Ul();
      var t = We;
      We |= rC;
      var a = Bn.transition, i = Ar();
      try {
        return Bn.transition = null, Xt(wn), e ? e() : void 0;
      } finally {
        Xt(i), Bn.transition = a, We = t, (We & ($n | ba)) === mn && _u();
      }
    }
    function dC() {
      return (We & ($n | ba)) !== mn;
    }
    function xm(e, t) {
      rr(US, Pi, e), Pi = Ve(Pi, t);
    }
    function YS(e) {
      Pi = US.current, nr(US, e);
    }
    function es(e, t) {
      e.finishedWork = null, e.finishedLanes = F;
      var a = e.timeoutHandle;
      if (a !== jy && (e.timeoutHandle = jy, Tx(a)), Ht !== null)
        for (var i = Ht.return; i !== null; ) {
          var u = i.alternate;
          B1(u, i), i = i.return;
        }
      yr = e;
      var s = ns(e.current, null);
      return Ht = s, yn = Pi = t, gn = Nl, fp = null, mm = F, dp = F, ym = F, pp = null, Pr = null, BR(), qa.discardPendingWarnings(), s;
    }
    function pC(e, t) {
      do {
        var a = Ht;
        try {
          if (Mh(), PE(), Qt(), LS.current = null, a === null || a.return === null) {
            gn = sp, fp = t, Ht = null;
            return;
          }
          if (Nn && a.mode & De && sm(a, !0), ii)
            if (il(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              _v(a, i, yn);
            } else
              js(a, t, yn);
          gw(e, a.return, a, t, yn), yC(a);
        } catch (u) {
          t = u, Ht === a && a !== null ? (a = a.return, Ht = a) : a = Ht;
          continue;
        }
        return;
      } while (!0);
    }
    function vC() {
      var e = NS.current;
      return NS.current = am, e === null ? am : e;
    }
    function hC(e) {
      NS.current = e;
    }
    function Wb() {
      AS = xt();
    }
    function gp(e) {
      mm = Ve(e, mm);
    }
    function qb() {
      gn === Nl && (gn = hm);
    }
    function QS() {
      (gn === Nl || gn === hm || gn === Zo) && (gn = cp), yr !== null && (wo(mm) || wo(dp)) && ju(yr, yn);
    }
    function Kb(e) {
      gn !== cp && (gn = Zo), pp === null ? pp = [e] : pp.push(e);
    }
    function Zb() {
      return gn === Nl;
    }
    function Rm(e, t) {
      var a = We;
      We |= $n;
      var i = vC();
      if (yr !== e || yn !== t) {
        if (cn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Sp(e, yn), u.clear()), oc(e, t);
        }
        Ll = sd(), es(e, t);
      }
      ia(t);
      do
        try {
          Jb();
          break;
        } catch (s) {
          pC(e, s);
        }
      while (!0);
      if (Mh(), We = a, hC(i), Ht !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return iu(), yr = null, yn = F, gn;
    }
    function Jb() {
      for (; Ht !== null; )
        mC(Ht);
    }
    function eD(e, t) {
      var a = We;
      We |= $n;
      var i = vC();
      if (yr !== e || yn !== t) {
        if (cn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Sp(e, yn), u.clear()), oc(e, t);
        }
        Ll = sd(), vp(), es(e, t);
      }
      ia(t);
      do
        try {
          tD();
          break;
        } catch (s) {
          pC(e, s);
        }
      while (!0);
      return Mh(), hC(i), We = a, Ht !== null ? (Eo(), Nl) : (iu(), yr = null, yn = F, gn);
    }
    function tD() {
      for (; Ht !== null && !zs(); )
        mC(Ht);
    }
    function mC(e) {
      var t = e.alternate;
      ot(e);
      var a;
      (e.mode & De) !== be ? (lS(e), a = IS(t, e, Pi), sm(e, !0)) : a = IS(t, e, Pi), Qt(), e.memoizedProps = e.pendingProps, a === null ? yC(e) : Ht = a, LS.current = null;
    }
    function yC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & cr) === Te) {
          ot(t);
          var u = void 0;
          if ((t.mode & De) === be ? u = j1(a, t, Pi) : (lS(t), u = j1(a, t, Pi), sm(t, !1)), Qt(), u !== null) {
            Ht = u;
            return;
          }
        } else {
          var s = qw(a, t);
          if (s !== null) {
            s.flags &= Ev, Ht = s;
            return;
          }
          if ((t.mode & De) !== be) {
            sm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= cr, i.subtreeFlags = Te, i.deletions = null;
          else {
            gn = zS, Ht = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Ht = v;
          return;
        }
        t = i, Ht = t;
      } while (t !== null);
      gn === Nl && (gn = aC);
    }
    function ts(e, t, a) {
      var i = Ar(), u = Bn.transition;
      try {
        Bn.transition = null, Xt(wn), nD(e, t, a, i);
      } finally {
        Bn.transition = u, Xt(i);
      }
      return null;
    }
    function nD(e, t, a, i) {
      do
        Ul();
      while (Fu !== null);
      if (pD(), (We & ($n | ba)) !== mn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Hs(s), u === null)
        return qf(), null;
      if (s === F && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = F, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Xe;
      var f = Ve(u.lanes, u.childLanes);
      ud(e, f), e === yr && (yr = null, Ht = null, yn = F), ((u.subtreeFlags & Nr) !== Te || (u.flags & Nr) !== Te) && (Jo || (Jo = !0, VS = a, WS(ma, function() {
        return Ul(), null;
      })));
      var p = (u.subtreeFlags & (nu | Kn | Rn | Nr)) !== Te, v = (u.flags & (nu | Kn | Rn | Nr)) !== Te;
      if (p || v) {
        var y = Bn.transition;
        Bn.transition = null;
        var E = Ar();
        Xt(wn);
        var b = We;
        We |= ba, LS.current = null, tb(e, u), v1(), hb(e, u, s), hx(e.containerInfo), e.current = u, Ov(s), mb(u, e, s), au(), xv(), We = b, Xt(E), Bn.transition = y;
      } else
        e.current = u, v1();
      var R = Jo;
      if (Jo ? (Jo = !1, Fu = e, hp = s) : (Kc = 0, Em = null), f = e.pendingLanes, f === F && (qc = null), R || CC(e.current, !1), ja(u.stateNode, i), cn && e.memoizedUpdaters.clear(), Ub(), Yr(e, xt()), t !== null)
        for (var L = e.onRecoverableError, z = 0; z < t.length; z++) {
          var A = t[z], ue = A.stack, Re = A.digest;
          L(A.value, {
            componentStack: ue,
            digest: Re
          });
        }
      if (gm) {
        gm = !1;
        var Se = HS;
        throw HS = null, Se;
      }
      return tr(hp, ke) && e.tag !== ku && Ul(), f = e.pendingLanes, tr(f, ke) ? (fw(), e === jS ? mp++ : (mp = 0, jS = e)) : mp = 0, _u(), qf(), null;
    }
    function Ul() {
      if (Fu !== null) {
        var e = _o(hp), t = cy(Pa, e), a = Bn.transition, i = Ar();
        try {
          return Bn.transition = null, Xt(t), aD();
        } finally {
          Xt(i), Bn.transition = a;
        }
      }
      return !1;
    }
    function rD(e) {
      FS.push(e), Jo || (Jo = !0, WS(ma, function() {
        return Ul(), null;
      }));
    }
    function aD() {
      if (Fu === null)
        return !1;
      var e = VS;
      VS = null;
      var t = Fu, a = hp;
      if (Fu = null, hp = F, (We & ($n | ba)) !== mn)
        throw new Error("Cannot flush passive effects while already rendering.");
      BS = !0, Sm = !1, Mv(a);
      var i = We;
      We |= ba, xb(t.current), Sb(t, t.current, a, e);
      {
        var u = FS;
        FS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          ib(t, f);
        }
      }
      So(), CC(t.current, !0), We = i, _u(), Sm ? t === Em ? Kc++ : (Kc = 0, Em = t) : Kc = 0, BS = !1, Sm = !1, xi(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function gC(e) {
      return qc !== null && qc.has(e);
    }
    function iD(e) {
      qc === null ? qc = /* @__PURE__ */ new Set([e]) : qc.add(e);
    }
    function lD(e) {
      gm || (gm = !0, HS = e);
    }
    var uD = lD;
    function SC(e, t, a) {
      var i = qo(a, t), u = m1(e, i, ke), s = Mu(e, u, ke), f = gr();
      s !== null && (hl(s, ke, f), Yr(s, f));
    }
    function St(e, t, a) {
      if (Zw(a), Ep(!1), e.tag === $) {
        SC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === $) {
          SC(i, e, a);
          return;
        } else if (i.tag === P) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !gC(s)) {
            var f = qo(a, e), p = dS(i, f, ke), v = Mu(i, p, ke), y = gr();
            v !== null && (hl(v, ke, y), Yr(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function oD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = gr();
      ld(e, a), yD(e), yr === e && vl(yn, a) && (gn === cp || gn === hm && ic(yn) && xt() - AS < iC ? es(e, F) : ym = Ve(ym, a)), Yr(e, u);
    }
    function EC(e, t) {
      t === Xe && (t = $b(e));
      var a = gr(), i = Br(e, t);
      i !== null && (hl(i, t, a), Yr(i, a));
    }
    function sD(e) {
      var t = e.memoizedState, a = Xe;
      t !== null && (a = t.retryLane), EC(e, a);
    }
    function cD(e, t) {
      var a = Xe, i;
      switch (e.tag) {
        case Ee:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case ze:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), EC(e, a);
    }
    function fD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Fb(e / 1960) * 1960;
    }
    function dD() {
      if (mp > jb)
        throw mp = 0, jS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Kc > Bb && (Kc = 0, Em = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function pD() {
      qa.flushLegacyContextWarning(), qa.flushPendingUnsafeLifecycleWarnings();
    }
    function CC(e, t) {
      ot(e), wm(e, qn, Nb), t && wm(e, al, Lb), wm(e, qn, Ob), t && wm(e, al, Mb), Qt();
    }
    function wm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Te ? i = i.child : ((i.flags & t) !== Te && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var bm = null;
    function TC(e) {
      {
        if ((We & $n) !== mn || !(e.mode & $e))
          return;
        var t = e.tag;
        if (t !== de && t !== $ && t !== P && t !== G && t !== q && t !== Ke && t !== Be)
          return;
        var a = He(e) || "ReactComponent";
        if (bm !== null) {
          if (bm.has(a))
            return;
          bm.add(a);
        } else
          bm = /* @__PURE__ */ new Set([a]);
        var i = Vt;
        try {
          ot(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? ot(e) : Qt();
        }
      }
    }
    var IS;
    {
      var vD = null;
      IS = function(e, t, a) {
        var i = OC(vD, t);
        try {
          return U1(e, t, a);
        } catch (s) {
          if (DR() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Mh(), PE(), B1(e, t), OC(t, i), t.mode & De && lS(t), rl(null, U1, null, e, t, a), ry()) {
            var u = Vf();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var xC = !1, GS;
    GS = /* @__PURE__ */ new Set();
    function hD(e) {
      if (br && !ow())
        switch (e.tag) {
          case G:
          case q:
          case Be: {
            var t = Ht && He(Ht) || "Unknown", a = t;
            if (!GS.has(a)) {
              GS.add(a);
              var i = He(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case P: {
            xC || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), xC = !0);
            break;
          }
        }
    }
    function Sp(e, t) {
      if (cn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          od(e, i, t);
        });
      }
    }
    var XS = {};
    function WS(e, t) {
      {
        var a = ai.current;
        return a !== null ? (a.push(t), XS) : Ls(e, t);
      }
    }
    function RC(e) {
      if (e !== XS)
        return Tv(e);
    }
    function wC() {
      return ai.current !== null;
    }
    function mD(e) {
      {
        if (e.mode & $e) {
          if (!nC())
            return;
        } else if (!Hb() || We !== mn || e.tag !== G && e.tag !== q && e.tag !== Be)
          return;
        if (ai.current === null) {
          var t = Vt;
          try {
            ot(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, He(e));
          } finally {
            t ? ot(e) : Qt();
          }
        }
      }
    }
    function yD(e) {
      e.tag !== ku && nC() && ai.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Ep(e) {
      oC = e;
    }
    var Da = null, Zc = null, gD = function(e) {
      Da = e;
    };
    function Jc(e) {
      {
        if (Da === null)
          return e;
        var t = Da(e);
        return t === void 0 ? e : t.current;
      }
    }
    function qS(e) {
      return Jc(e);
    }
    function KS(e) {
      {
        if (Da === null)
          return e;
        var t = Da(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Jc(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: $l,
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
    function bC(e, t) {
      {
        if (Da === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case P: {
            typeof i == "function" && (u = !0);
            break;
          }
          case G: {
            (typeof i == "function" || s === Ln) && (u = !0);
            break;
          }
          case q: {
            (s === $l || s === Ln) && (u = !0);
            break;
          }
          case Ke:
          case Be: {
            (s === Pl || s === Ln) && (u = !0);
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
    function DC(e) {
      {
        if (Da === null || typeof WeakSet != "function")
          return;
        Zc === null && (Zc = /* @__PURE__ */ new WeakSet()), Zc.add(e);
      }
    }
    var SD = function(e, t) {
      {
        if (Da === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Ul(), zl(function() {
          ZS(e.current, i, a);
        });
      }
    }, ED = function(e, t) {
      {
        if (e.context !== ua)
          return;
        Ul(), zl(function() {
          Cp(t, e, null, null);
        });
      }
    };
    function ZS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case G:
          case Be:
          case P:
            v = p;
            break;
          case q:
            v = p.render;
            break;
        }
        if (Da === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, E = !1;
        if (v !== null) {
          var b = Da(v);
          b !== void 0 && (a.has(b) ? E = !0 : t.has(b) && (f === P ? E = !0 : y = !0));
        }
        if (Zc !== null && (Zc.has(e) || i !== null && Zc.has(i)) && (E = !0), E && (e._debugNeedsRemount = !0), E || y) {
          var R = Br(e, ke);
          R !== null && Sn(R, e, ke, vt);
        }
        u !== null && !E && ZS(u, t, a), s !== null && ZS(s, t, a);
      }
    }
    var CD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return JS(e.current, i, a), a;
      }
    };
    function JS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case G:
          case Be:
          case P:
            p = f;
            break;
          case q:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? TD(e, a) : i !== null && JS(i, t, a), u !== null && JS(u, t, a);
      }
    }
    function TD(e, t) {
      {
        var a = xD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case Z:
              t.add(i.stateNode);
              return;
            case Y:
              t.add(i.stateNode.containerInfo);
              return;
            case $:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function xD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === Z)
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
    var e0;
    {
      e0 = !1;
      try {
        var kC = Object.preventExtensions({});
      } catch {
        e0 = !0;
      }
    }
    function RD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Te, this.subtreeFlags = Te, this.deletions = null, this.lanes = F, this.childLanes = F, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !e0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var oa = function(e, t, a, i) {
      return new RD(e, t, a, i);
    };
    function t0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function wD(e) {
      return typeof e == "function" && !t0(e) && e.defaultProps === void 0;
    }
    function bD(e) {
      if (typeof e == "function")
        return t0(e) ? P : G;
      if (e != null) {
        var t = e.$$typeof;
        if (t === $l)
          return q;
        if (t === Pl)
          return Ke;
      }
      return de;
    }
    function ns(e, t) {
      var a = e.alternate;
      a === null ? (a = oa(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Te, a.subtreeFlags = Te, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & sn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case de:
        case G:
        case Be:
          a.type = Jc(e.type);
          break;
        case P:
          a.type = qS(e.type);
          break;
        case q:
          a.type = KS(e.type);
          break;
      }
      return a;
    }
    function DD(e, t) {
      e.flags &= sn | ht;
      var a = e.alternate;
      if (a === null)
        e.childLanes = F, e.lanes = t, e.child = null, e.subtreeFlags = Te, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Te, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function kD(e, t, a) {
      var i;
      return e === xh ? (i = $e, t === !0 && (i |= Rt, i |= zr)) : i = be, cn && (i |= De), oa($, null, null, i);
    }
    function n0(e, t, a, i, u, s) {
      var f = de, p = e;
      if (typeof e == "function")
        t0(e) ? (f = P, p = qS(p)) : p = Jc(p);
      else if (typeof e == "string")
        f = Z;
      else
        e:
          switch (e) {
            case Oa:
              return Bu(a.children, u, s, t);
            case Bl:
              f = Pe, u |= Rt, (u & $e) !== be && (u |= zr);
              break;
            case Iu:
              return _D(a, u, s, t);
            case pa:
              return OD(a, u, s, t);
            case Gu:
              return MD(a, u, s, t);
            case uf:
              return _C(a, u, s, t);
            case Mp:
            case _p:
            case Um:
            case Am:
            case Op:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case af:
                    f = B;
                    break e;
                  case lf:
                    f = se;
                    break e;
                  case $l:
                    f = q, p = KS(p);
                    break e;
                  case Pl:
                    f = Ke;
                    break e;
                  case Ln:
                    f = En, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? He(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var E = oa(f, a, t, u);
      return E.elementType = e, E.type = p, E.lanes = s, E._debugOwner = i, E;
    }
    function r0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = n0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Bu(e, t, a, i) {
      var u = oa(Me, e, i, t);
      return u.lanes = a, u;
    }
    function _D(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = oa(ye, e, i, t | De);
      return u.elementType = Iu, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function OD(e, t, a, i) {
      var u = oa(Ee, e, i, t);
      return u.elementType = pa, u.lanes = a, u;
    }
    function MD(e, t, a, i) {
      var u = oa(ze, e, i, t);
      return u.elementType = Gu, u.lanes = a, u;
    }
    function _C(e, t, a, i) {
      var u = oa(je, e, i, t);
      u.elementType = uf, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function a0(e, t, a) {
      var i = oa(xe, e, null, t);
      return i.lanes = a, i;
    }
    function ND() {
      var e = oa(Z, null, null, be);
      return e.elementType = "DELETED", e;
    }
    function LD(e) {
      var t = oa(Tt, null, null, be);
      return t.stateNode = e, t;
    }
    function i0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = oa(Y, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function OC(e, t) {
      return e === null && (e = oa(de, null, null, be)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function zD(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = jy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Xe, this.eventTimes = uc(F), this.expirationTimes = uc(vt), this.pendingLanes = F, this.suspendedLanes = F, this.pingedLanes = F, this.expiredLanes = F, this.mutableReadLanes = F, this.finishedLanes = F, this.entangledLanes = F, this.entanglements = uc(F), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < yt; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case xh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case ku:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function MC(e, t, a, i, u, s, f, p, v, y) {
      var E = new zD(e, t, a, p, v), b = kD(t, s);
      E.current = b, b.stateNode = E;
      {
        var R = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        b.memoizedState = R;
      }
      return pg(b), E;
    }
    var l0 = "18.2.0";
    function UD(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Vl(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Zr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var u0, o0;
    u0 = !1, o0 = {};
    function NC(e) {
      if (!e)
        return ua;
      var t = _r(e), a = gR(t);
      if (t.tag === P) {
        var i = t.type;
        if (Ai(i))
          return aE(t, i, a);
      }
      return a;
    }
    function AD(e, t) {
      {
        var a = _r(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Lr(a);
        if (u === null)
          return null;
        if (u.mode & Rt) {
          var s = He(a) || "Component";
          if (!o0[s]) {
            o0[s] = !0;
            var f = Vt;
            try {
              ot(u), a.mode & Rt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? ot(f) : Qt();
            }
          }
        }
        return u.stateNode;
      }
    }
    function LC(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return MC(e, t, v, y, a, i, u, s, f);
    }
    function zC(e, t, a, i, u, s, f, p, v, y) {
      var E = !0, b = MC(a, i, E, e, u, s, f, p, v);
      b.context = NC(null);
      var R = b.current, L = gr(), z = Vu(R), A = Ol(L, z);
      return A.callback = t ?? null, Mu(R, A, z), Pb(b, z, L), b;
    }
    function Cp(e, t, a, i) {
      Rv(t, e);
      var u = t.current, s = gr(), f = Vu(u);
      ll(f);
      var p = NC(a);
      t.context === null ? t.context = p : t.pendingContext = p, br && Vt !== null && !u0 && (u0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, He(Vt) || "Unknown"));
      var v = Ol(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Mu(u, v, f);
      return y !== null && (Sn(y, u, f, s), Ah(y, u, f)), f;
    }
    function Dm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case Z:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function HD(e) {
      switch (e.tag) {
        case $: {
          var t = e.stateNode;
          if (Wt(t)) {
            var a = ly(t);
            Gb(t, a);
          }
          break;
        }
        case Ee: {
          zl(function() {
            var u = Br(e, ke);
            if (u !== null) {
              var s = gr();
              Sn(u, e, ke, s);
            }
          });
          var i = ke;
          s0(e, i);
          break;
        }
      }
    }
    function UC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Av(a.retryLane, t));
    }
    function s0(e, t) {
      UC(e, t);
      var a = e.alternate;
      a && UC(a, t);
    }
    function FD(e) {
      if (e.tag === Ee) {
        var t = lu, a = Br(e, t);
        if (a !== null) {
          var i = gr();
          Sn(a, e, t, i);
        }
        s0(e, t);
      }
    }
    function VD(e) {
      if (e.tag === Ee) {
        var t = Vu(e), a = Br(e, t);
        if (a !== null) {
          var i = gr();
          Sn(a, e, t, i);
        }
        s0(e, t);
      }
    }
    function AC(e) {
      var t = Cv(e);
      return t === null ? null : t.stateNode;
    }
    var HC = function(e) {
      return null;
    };
    function jD(e) {
      return HC(e);
    }
    var FC = function(e) {
      return !1;
    };
    function BD(e) {
      return FC(e);
    }
    var VC = null, jC = null, BC = null, $C = null, PC = null, YC = null, QC = null, IC = null, GC = null;
    {
      var XC = function(e, t, a) {
        var i = t[a], u = Jt(e) ? e.slice() : Qe({}, e);
        return a + 1 === t.length ? (Jt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = XC(e[i], t, a + 1), u);
      }, WC = function(e, t) {
        return XC(e, t, 0);
      }, qC = function(e, t, a, i) {
        var u = t[i], s = Jt(e) ? e.slice() : Qe({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Jt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = qC(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, KC = function(e, t, a) {
        if (t.length !== a.length) {
          V("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              V("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return qC(e, t, a, 0);
      }, ZC = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Jt(e) ? e.slice() : Qe({}, e);
        return s[u] = ZC(e[u], t, a + 1, i), s;
      }, JC = function(e, t, a) {
        return ZC(e, t, 0, a);
      }, c0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      VC = function(e, t, a, i) {
        var u = c0(e, t);
        if (u !== null) {
          var s = JC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Qe({}, e.memoizedProps);
          var f = Br(e, ke);
          f !== null && Sn(f, e, ke, vt);
        }
      }, jC = function(e, t, a) {
        var i = c0(e, t);
        if (i !== null) {
          var u = WC(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Qe({}, e.memoizedProps);
          var s = Br(e, ke);
          s !== null && Sn(s, e, ke, vt);
        }
      }, BC = function(e, t, a, i) {
        var u = c0(e, t);
        if (u !== null) {
          var s = KC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Qe({}, e.memoizedProps);
          var f = Br(e, ke);
          f !== null && Sn(f, e, ke, vt);
        }
      }, $C = function(e, t, a) {
        e.pendingProps = JC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Br(e, ke);
        i !== null && Sn(i, e, ke, vt);
      }, PC = function(e, t) {
        e.pendingProps = WC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Br(e, ke);
        a !== null && Sn(a, e, ke, vt);
      }, YC = function(e, t, a) {
        e.pendingProps = KC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Br(e, ke);
        i !== null && Sn(i, e, ke, vt);
      }, QC = function(e) {
        var t = Br(e, ke);
        t !== null && Sn(t, e, ke, vt);
      }, IC = function(e) {
        HC = e;
      }, GC = function(e) {
        FC = e;
      };
    }
    function $D(e) {
      var t = Lr(e);
      return t === null ? null : t.stateNode;
    }
    function PD(e) {
      return null;
    }
    function YD() {
      return Vt;
    }
    function QD(e) {
      var t = e.findFiberByHostInstance, a = h.ReactCurrentDispatcher;
      return Xf({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: VC,
        overrideHookStateDeletePath: jC,
        overrideHookStateRenamePath: BC,
        overrideProps: $C,
        overridePropsDeletePath: PC,
        overridePropsRenamePath: YC,
        setErrorHandler: IC,
        setSuspenseHandler: GC,
        scheduleUpdate: QC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: $D,
        findFiberByHostInstance: t || PD,
        // React Refresh
        findHostInstancesForRefresh: CD,
        scheduleRefresh: SD,
        scheduleRoot: ED,
        setRefreshHandler: gD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: YD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: l0
      });
    }
    var eT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function f0(e) {
      this._internalRoot = e;
    }
    km.prototype.render = f0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : _m(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== jt) {
          var i = AC(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Cp(e, t, null, null);
    }, km.prototype.unmount = f0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        dC() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), zl(function() {
          Cp(null, e, null, null);
        }), J0(t);
      }
    };
    function ID(e, t) {
      if (!_m(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      tT(e);
      var a = !1, i = !1, u = "", s = eT;
      t != null && (t.hydrate ? V("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === jl && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = LC(e, xh, null, a, i, u, s);
      mh(f.current, e);
      var p = e.nodeType === jt ? e.parentNode : e;
      return _d(p), new f0(f);
    }
    function km(e) {
      this._internalRoot = e;
    }
    function GD(e) {
      e && Yv(e);
    }
    km.prototype.unstable_scheduleHydration = GD;
    function XD(e, t, a) {
      if (!_m(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      tT(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = eT;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = zC(t, null, e, xh, i, s, f, p, v);
      if (mh(y.current, e), _d(e), u)
        for (var E = 0; E < u.length; E++) {
          var b = u[E];
          nw(y, b);
        }
      return new km(y);
    }
    function _m(e) {
      return !!(e && (e.nodeType === Gn || e.nodeType === na || e.nodeType === Ki || !ut));
    }
    function Tp(e) {
      return !!(e && (e.nodeType === Gn || e.nodeType === na || e.nodeType === Ki || e.nodeType === jt && e.nodeValue === " react-mount-point-unstable "));
    }
    function tT(e) {
      e.nodeType === Gn && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), jd(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var WD = h.ReactCurrentOwner, nT;
    nT = function(e) {
      if (e._reactRootContainer && e.nodeType !== jt) {
        var t = AC(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = d0(e), u = !!(i && bu(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Gn && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function d0(e) {
      return e ? e.nodeType === na ? e.documentElement : e.firstChild : null;
    }
    function rT() {
    }
    function qD(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var R = Dm(f);
            s.call(R);
          };
        }
        var f = zC(
          t,
          i,
          e,
          ku,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          rT
        );
        e._reactRootContainer = f, mh(f.current, e);
        var p = e.nodeType === jt ? e.parentNode : e;
        return _d(p), zl(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var R = Dm(E);
            y.call(R);
          };
        }
        var E = LC(
          e,
          ku,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          rT
        );
        e._reactRootContainer = E, mh(E.current, e);
        var b = e.nodeType === jt ? e.parentNode : e;
        return _d(b), zl(function() {
          Cp(t, E, a, i);
        }), E;
      }
    }
    function KD(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Om(e, t, a, i, u) {
      nT(a), KD(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = qD(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Dm(f);
            p.call(v);
          };
        }
        Cp(t, f, e, u);
      }
      return Dm(f);
    }
    function ZD(e) {
      {
        var t = WD.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", dt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Gn ? e : AD(e, "findDOMNode");
    }
    function JD(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Tp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = jd(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Om(null, e, t, !0, a);
    }
    function ek(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Tp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = jd(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Om(null, e, t, !1, a);
    }
    function tk(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Tp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !mo(e))
        throw new Error("parentComponent must be a valid React Component");
      return Om(e, t, a, !1, i);
    }
    function nk(e) {
      if (!Tp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = jd(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = d0(e), i = a && !bu(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return zl(function() {
          Om(null, null, e, !1, function() {
            e._reactRootContainer = null, J0(e);
          });
        }), !0;
      } else {
        {
          var u = d0(e), s = !!(u && bu(u)), f = e.nodeType === Gn && Tp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    fe(HD), Fv(FD), Mo(VD), fd(Ar), jv(ko), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), gv(ix), ks(PS, Xb, zl);
    function rk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_m(t))
        throw new Error("Target container is not a DOM element.");
      return UD(e, t, null, a);
    }
    function ak(e, t, a, i) {
      return tk(e, t, a, i);
    }
    var p0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [bu, Oc, yh, Ds, po, PS]
    };
    function ik(e, t) {
      return p0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ID(e, t);
    }
    function lk(e, t, a) {
      return p0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), XD(e, t, a);
    }
    function uk(e) {
      return dC() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), zl(e);
    }
    var ok = QD({
      findFiberByHostInstance: Bo,
      bundleType: 1,
      version: l0,
      rendererPackageName: "react-dom"
    });
    if (!ok && Cn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var aT = window.location.protocol;
      /^(https?|file):$/.test(aT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (aT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = p0, Ir.createPortal = rk, Ir.createRoot = ik, Ir.findDOMNode = ZD, Ir.flushSync = uk, Ir.hydrate = JD, Ir.hydrateRoot = lk, Ir.render = ek, Ir.unmountComponentAtNode = nk, Ir.unstable_batchedUpdates = PS, Ir.unstable_renderSubtreeIntoContainer = ak, Ir.version = l0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ir;
}
function vT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vT);
    } catch (T) {
      console.error(T);
    }
  }
}
process.env.NODE_ENV === "production" ? (vT(), S0.exports = Rk()) : S0.exports = wk();
var bk = S0.exports;
const Nm = Symbol(), Dk = Symbol(), hT = typeof window > "u" || /ServerSideRendering/.test(window.navigator && window.navigator.userAgent) ? mk : yk, kk = Rp.unstable_runWithPriority ? (T) => Rp.unstable_runWithPriority(Rp.unstable_NormalPriority, T) : (T) => T(), _k = (T) => T;
function mT(T) {
  const g = pk({ [Nm]: { v: { current: T }, n: { current: -1 }, l: /* @__PURE__ */ new Set(), u: (D) => D() } });
  var h;
  return g[Dk] = g.Provider, g.Provider = (h = g.Provider, ({ value: D, children: M }) => {
    const V = v0(D), S = v0(0), [J, G] = vk(null);
    J && (J(D), G(null));
    const P = v0();
    if (!P.current) {
      const de = /* @__PURE__ */ new Set(), $ = (Y, Z) => {
        bk.unstable_batchedUpdates(() => {
          S.current += 1;
          const xe = { n: S.current };
          Z != null && Z.suspense && (xe.n *= -1, xe.p = new Promise((Me) => {
            G(() => (Pe) => {
              xe.v = Pe, delete xe.p, Me(Pe);
            });
          })), de.forEach((Me) => Me(xe)), Y();
        });
      };
      P.current = { [Nm]: { v: V, n: S, l: de, u: $ } };
    }
    return hT(() => {
      V.current = D, S.current += 1, kk(() => {
        P.current[Nm].l.forEach((de) => {
          de({ n: S.current, v: D });
        });
      });
    }, [D]), hk(h, { value: P.current }, M);
  }), delete g.Consumer, g;
}
function Ok(T, g) {
  const h = gk(T)[Nm];
  if (typeof process == "object" && process.env.NODE_ENV !== "production" && !h)
    throw new Error("useContextSelector requires special context");
  const { v: { current: D }, n: { current: M }, l: V } = h, S = g(D), [J, G] = Sk((P, de) => {
    if (!de)
      return [D, S];
    if ("p" in de)
      throw de.p;
    if (de.n === M)
      return Object.is(P[1], S) ? P : [D, S];
    try {
      if ("v" in de) {
        if (Object.is(P[0], de.v))
          return P;
        const $ = g(de.v);
        return Object.is(P[1], $) ? P : [de.v, $];
      }
    } catch {
    }
    return [...P];
  }, [D, S]);
  return Object.is(J[1], S) || G(), hT(() => (V.add(G), () => {
    V.delete(G);
  }), [V]), J[1];
}
function Mk(T) {
  return Ok(T, _k);
}
function as(T) {
  this._maxSize = T, this.clear();
}
as.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
as.prototype.get = function(T) {
  return this._values[T];
};
as.prototype.set = function(T, g) {
  return this._size >= this._maxSize && this.clear(), T in this._values || this._size++, this._values[T] = g;
};
var Nk = /[^.^\]^[]+|(?=\[\]|\.\.)/g, yT = /^\d+$/, Lk = /^\d/, zk = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, Uk = /^\s*(['"]?)(.*?)(\1)\s*$/, T0 = 512, sT = new as(T0), cT = new as(T0), fT = new as(T0), gT = {
  Cache: as,
  split: E0,
  normalizePath: y0,
  setter: function(T) {
    var g = y0(T);
    return cT.get(T) || cT.set(T, function(D, M) {
      for (var V = 0, S = g.length, J = D; V < S - 1; ) {
        var G = g[V];
        if (G === "__proto__" || G === "constructor" || G === "prototype")
          return D;
        J = J[g[V++]];
      }
      J[g[V]] = M;
    });
  },
  getter: function(T, g) {
    var h = y0(T);
    return fT.get(T) || fT.set(T, function(M) {
      for (var V = 0, S = h.length; V < S; )
        if (M != null || !g)
          M = M[h[V++]];
        else
          return;
      return M;
    });
  },
  join: function(T) {
    return T.reduce(function(g, h) {
      return g + (x0(h) || yT.test(h) ? "[" + h + "]" : (g ? "." : "") + h);
    }, "");
  },
  forEach: function(T, g, h) {
    Ak(Array.isArray(T) ? T : E0(T), g, h);
  }
};
function y0(T) {
  return sT.get(T) || sT.set(
    T,
    E0(T).map(function(g) {
      return g.replace(Uk, "$2");
    })
  );
}
function E0(T) {
  return T.match(Nk) || [""];
}
function Ak(T, g, h) {
  var D = T.length, M, V, S, J;
  for (V = 0; V < D; V++)
    M = T[V], M && (Vk(M) && (M = '"' + M + '"'), J = x0(M), S = !J && /^\d+$/.test(M), g.call(h, M, J, S, V, T));
}
function x0(T) {
  return typeof T == "string" && T && ["'", '"'].indexOf(T.charAt(0)) !== -1;
}
function Hk(T) {
  return T.match(Lk) && !T.match(yT);
}
function Fk(T) {
  return zk.test(T);
}
function Vk(T) {
  return !x0(T) && (Hk(T) || Fk(T));
}
var ST = { exports: {} };
ST.exports = function(T) {
  return ET(jk(T), T);
};
ST.exports.array = ET;
function ET(T, g) {
  var h = T.length, D = new Array(h), M = {}, V = h, S = Bk(g), J = $k(T);
  for (g.forEach(function(P) {
    if (!J.has(P[0]) || !J.has(P[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); V--; )
    M[V] || G(T[V], V, /* @__PURE__ */ new Set());
  return D;
  function G(P, de, $) {
    if ($.has(P)) {
      var Y;
      try {
        Y = ", node was:" + JSON.stringify(P);
      } catch {
        Y = "";
      }
      throw new Error("Cyclic dependency" + Y);
    }
    if (!J.has(P))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(P));
    if (!M[de]) {
      M[de] = !0;
      var Z = S.get(P) || /* @__PURE__ */ new Set();
      if (Z = Array.from(Z), de = Z.length) {
        $.add(P);
        do {
          var xe = Z[--de];
          G(xe, J.get(xe), $);
        } while (de);
        $.delete(P);
      }
      D[--h] = P;
    }
  }
}
function jk(T) {
  for (var g = /* @__PURE__ */ new Set(), h = 0, D = T.length; h < D; h++) {
    var M = T[h];
    g.add(M[0]), g.add(M[1]);
  }
  return Array.from(g);
}
function Bk(T) {
  for (var g = /* @__PURE__ */ new Map(), h = 0, D = T.length; h < D; h++) {
    var M = T[h];
    g.has(M[0]) || g.set(M[0], /* @__PURE__ */ new Set()), g.has(M[1]) || g.set(M[1], /* @__PURE__ */ new Set()), g.get(M[0]).add(M[1]);
  }
  return g;
}
function $k(T) {
  for (var g = /* @__PURE__ */ new Map(), h = 0, D = T.length; h < D; h++)
    g.set(T[h], h);
  return g;
}
const Pk = Object.prototype.toString, Yk = Error.prototype.toString, Qk = RegExp.prototype.toString, Ik = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Gk = /^Symbol\((.*)\)(.*)$/;
function Xk(T) {
  return T != +T ? "NaN" : T === 0 && 1 / T < 0 ? "-0" : "" + T;
}
function dT(T, g = !1) {
  if (T == null || T === !0 || T === !1)
    return "" + T;
  const h = typeof T;
  if (h === "number")
    return Xk(T);
  if (h === "string")
    return g ? `"${T}"` : T;
  if (h === "function")
    return "[Function " + (T.name || "anonymous") + "]";
  if (h === "symbol")
    return Ik.call(T).replace(Gk, "Symbol($1)");
  const D = Pk.call(T).slice(8, -1);
  return D === "Date" ? isNaN(T.getTime()) ? "" + T : T.toISOString(T) : D === "Error" || T instanceof Error ? "[" + Yk.call(T) + "]" : D === "RegExp" ? Qk.call(T) : null;
}
function $u(T, g) {
  let h = dT(T, g);
  return h !== null ? h : JSON.stringify(T, function(D, M) {
    let V = dT(this[D], g);
    return V !== null ? V : M;
  }, 2);
}
function CT(T) {
  return T == null ? [] : [].concat(T);
}
let TT, Wk = /\$\{\s*(\w+)\s*\}/g;
TT = Symbol.toStringTag;
class Gr extends Error {
  static formatError(g, h) {
    const D = h.label || h.path || "this";
    return D !== h.path && (h = Object.assign({}, h, {
      path: D
    })), typeof g == "string" ? g.replace(Wk, (M, V) => $u(h[V])) : typeof g == "function" ? g(h) : g;
  }
  static isError(g) {
    return g && g.name === "ValidationError";
  }
  constructor(g, h, D, M, V) {
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this[TT] = "Error", this.name = "ValidationError", this.value = h, this.path = D, this.type = M, this.errors = [], this.inner = [], CT(g).forEach((S) => {
      if (Gr.isError(S)) {
        this.errors.push(...S.errors);
        const J = S.inner.length ? S.inner : [S];
        this.inner.push(...J);
      } else
        this.errors.push(S);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], !V && Error.captureStackTrace && Error.captureStackTrace(this, Gr);
  }
}
let Fl = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: T,
    type: g,
    value: h,
    originalValue: D
  }) => {
    const M = D != null && D !== h ? ` (cast from the value \`${$u(D, !0)}\`).` : ".";
    return g !== "mixed" ? `${T} must be a \`${g}\` type, but the final value was: \`${$u(h, !0)}\`` + M : `${T} must match the configured type. The validated value was: \`${$u(h, !0)}\`` + M;
  }
}, qk = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
}, Kk = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, C0 = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Zk = {
  isValue: "${path} field must be ${value}"
}, Jk = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, e_ = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, t_ = {
  notType: (T) => {
    const {
      path: g,
      value: h,
      spec: D
    } = T, M = D.types.length;
    if (Array.isArray(h)) {
      if (h.length < M)
        return `${g} tuple value has too few items, expected a length of ${M} but got ${h.length} for value: \`${$u(h, !0)}\``;
      if (h.length > M)
        return `${g} tuple value has too many items, expected a length of ${M} but got ${h.length} for value: \`${$u(h, !0)}\``;
    }
    return Gr.formatError(Fl.notType, T);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: Fl,
  string: qk,
  number: Kk,
  date: C0,
  object: Jk,
  array: e_,
  boolean: Zk,
  tuple: t_
});
const xT = (T) => T && T.__isYupSchema__;
class Lm {
  static fromOptions(g, h) {
    if (!h.then && !h.otherwise)
      throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: D,
      then: M,
      otherwise: V
    } = h, S = typeof D == "function" ? D : (...J) => J.every((G) => G === D);
    return new Lm(g, (J, G) => {
      var P;
      let de = S(...J) ? M : V;
      return (P = de == null ? void 0 : de(G)) != null ? P : G;
    });
  }
  constructor(g, h) {
    this.fn = void 0, this.refs = g, this.refs = g, this.fn = h;
  }
  resolve(g, h) {
    let D = this.refs.map((V) => (
      // TODO: ? operator here?
      V.getValue(h == null ? void 0 : h.value, h == null ? void 0 : h.parent, h == null ? void 0 : h.context)
    )), M = this.fn(D, g, h);
    if (M === void 0 || // @ts-ignore this can be base
    M === g)
      return g;
    if (!xT(M))
      throw new TypeError("conditions must return a schema object");
    return M.resolve(h);
  }
}
const Mm = {
  context: "$",
  value: "."
};
class wp {
  constructor(g, h = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof g != "string")
      throw new TypeError("ref must be a string, got: " + g);
    if (this.key = g.trim(), g === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Mm.context, this.isValue = this.key[0] === Mm.value, this.isSibling = !this.isContext && !this.isValue;
    let D = this.isContext ? Mm.context : this.isValue ? Mm.value : "";
    this.path = this.key.slice(D.length), this.getter = this.path && gT.getter(this.path, !0), this.map = h.map;
  }
  getValue(g, h, D) {
    let M = this.isContext ? D : this.isValue ? g : h;
    return this.getter && (M = this.getter(M || {})), this.map && (M = this.map(M)), M;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(g, h) {
    return this.getValue(g, h == null ? void 0 : h.parent, h == null ? void 0 : h.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(g) {
    return g && g.__isYupRef;
  }
}
wp.prototype.__isYupRef = !0;
const RT = (T) => T == null;
function tf(T) {
  function g({
    value: h,
    path: D = "",
    options: M,
    originalValue: V,
    schema: S
  }, J, G) {
    const {
      name: P,
      test: de,
      params: $,
      message: Y,
      skipAbsent: Z
    } = T;
    let {
      parent: xe,
      context: Me,
      abortEarly: Pe = S.spec.abortEarly,
      disableStackTrace: se = S.spec.disableStackTrace
    } = M;
    function B(ze) {
      return wp.isRef(ze) ? ze.getValue(h, xe, Me) : ze;
    }
    function q(ze = {}) {
      var on;
      const je = Object.assign({
        value: h,
        originalValue: V,
        label: S.spec.label,
        path: ze.path || D,
        spec: S.spec
      }, $, ze.params);
      for (const Mn of Object.keys(je))
        je[Mn] = B(je[Mn]);
      const tt = new Gr(Gr.formatError(ze.message || Y, je), h, je.path, ze.type || P, (on = ze.disableStackTrace) != null ? on : se);
      return tt.params = je, tt;
    }
    const ye = Pe ? J : G;
    let Ee = {
      path: D,
      parent: xe,
      type: P,
      from: M.from,
      createError: q,
      resolve: B,
      options: M,
      originalValue: V,
      schema: S
    };
    const Ke = (ze) => {
      Gr.isError(ze) ? ye(ze) : ze ? G(null) : ye(q());
    }, Be = (ze) => {
      Gr.isError(ze) ? ye(ze) : J(ze);
    };
    if (Z && RT(h))
      return Ke(!0);
    let Zt;
    try {
      var Tt;
      if (Zt = de.call(Ee, h, Ee), typeof ((Tt = Zt) == null ? void 0 : Tt.then) == "function") {
        if (M.sync)
          throw new Error(`Validation test of type: "${Ee.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(Zt).then(Ke, Be);
      }
    } catch (ze) {
      Be(ze);
      return;
    }
    Ke(Zt);
  }
  return g.OPTIONS = T, g;
}
function n_(T, g, h, D = h) {
  let M, V, S;
  return g ? (gT.forEach(g, (J, G, P) => {
    let de = G ? J.slice(1, J.length - 1) : J;
    T = T.resolve({
      context: D,
      parent: M,
      value: h
    });
    let $ = T.type === "tuple", Y = P ? parseInt(de, 10) : 0;
    if (T.innerType || $) {
      if ($ && !P)
        throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${S}" must contain an index to the tuple element, e.g. "${S}[0]"`);
      if (h && Y >= h.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${J}, in the path: ${g}. because there is no value at that index. `);
      M = h, h = h && h[Y], T = $ ? T.spec.types[Y] : T.innerType;
    }
    if (!P) {
      if (!T.fields || !T.fields[de])
        throw new Error(`The schema does not contain the path: ${g}. (failed at: ${S} which is a type: "${T.type}")`);
      M = h, h = h && h[de], T = T.fields[de];
    }
    V = de, S = G ? "[" + J + "]" : "." + J;
  }), {
    schema: T,
    parent: M,
    parentPath: V
  }) : {
    parent: M,
    parentPath: g,
    schema: T
  };
}
class zm extends Set {
  describe() {
    const g = [];
    for (const h of this.values())
      g.push(wp.isRef(h) ? h.describe() : h);
    return g;
  }
  resolveAll(g) {
    let h = [];
    for (const D of this.values())
      h.push(g(D));
    return h;
  }
  clone() {
    return new zm(this.values());
  }
  merge(g, h) {
    const D = this.clone();
    return g.forEach((M) => D.add(M)), h.forEach((M) => D.delete(M)), D;
  }
}
function nf(T, g = /* @__PURE__ */ new Map()) {
  if (xT(T) || !T || typeof T != "object")
    return T;
  if (g.has(T))
    return g.get(T);
  let h;
  if (T instanceof Date)
    h = new Date(T.getTime()), g.set(T, h);
  else if (T instanceof RegExp)
    h = new RegExp(T), g.set(T, h);
  else if (Array.isArray(T)) {
    h = new Array(T.length), g.set(T, h);
    for (let D = 0; D < T.length; D++)
      h[D] = nf(T[D], g);
  } else if (T instanceof Map) {
    h = /* @__PURE__ */ new Map(), g.set(T, h);
    for (const [D, M] of T.entries())
      h.set(D, nf(M, g));
  } else if (T instanceof Set) {
    h = /* @__PURE__ */ new Set(), g.set(T, h);
    for (const D of T)
      h.add(nf(D, g));
  } else if (T instanceof Object) {
    h = {}, g.set(T, h);
    for (const [D, M] of Object.entries(T))
      h[D] = nf(M, g);
  } else
    throw Error(`Unable to clone ${T}`);
  return h;
}
class rs {
  constructor(g) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new zm(), this._blacklist = new zm(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(Fl.notType);
    }), this.type = g.type, this._typeCheck = g.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, g == null ? void 0 : g.spec), this.withMutation((h) => {
      h.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(g) {
    if (this._mutate)
      return g && Object.assign(this.spec, g), this;
    const h = Object.create(Object.getPrototypeOf(this));
    return h.type = this.type, h._typeCheck = this._typeCheck, h._whitelist = this._whitelist.clone(), h._blacklist = this._blacklist.clone(), h.internalTests = Object.assign({}, this.internalTests), h.exclusiveTests = Object.assign({}, this.exclusiveTests), h.deps = [...this.deps], h.conditions = [...this.conditions], h.tests = [...this.tests], h.transforms = [...this.transforms], h.spec = nf(Object.assign({}, this.spec, g)), h;
  }
  label(g) {
    let h = this.clone();
    return h.spec.label = g, h;
  }
  meta(...g) {
    if (g.length === 0)
      return this.spec.meta;
    let h = this.clone();
    return h.spec.meta = Object.assign(h.spec.meta || {}, g[0]), h;
  }
  withMutation(g) {
    let h = this._mutate;
    this._mutate = !0;
    let D = g(this);
    return this._mutate = h, D;
  }
  concat(g) {
    if (!g || g === this)
      return this;
    if (g.type !== this.type && this.type !== "mixed")
      throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${g.type}`);
    let h = this, D = g.clone();
    const M = Object.assign({}, h.spec, D.spec);
    return D.spec = M, D.internalTests = Object.assign({}, h.internalTests, D.internalTests), D._whitelist = h._whitelist.merge(g._whitelist, g._blacklist), D._blacklist = h._blacklist.merge(g._blacklist, g._whitelist), D.tests = h.tests, D.exclusiveTests = h.exclusiveTests, D.withMutation((V) => {
      g.tests.forEach((S) => {
        V.test(S.OPTIONS);
      });
    }), D.transforms = [...h.transforms, ...D.transforms], D;
  }
  isType(g) {
    return g == null ? !!(this.spec.nullable && g === null || this.spec.optional && g === void 0) : this._typeCheck(g);
  }
  resolve(g) {
    let h = this;
    if (h.conditions.length) {
      let D = h.conditions;
      h = h.clone(), h.conditions = [], h = D.reduce((M, V) => V.resolve(M, g), h), h = h.resolve(g);
    }
    return h;
  }
  resolveOptions(g) {
    var h, D, M, V;
    return Object.assign({}, g, {
      from: g.from || [],
      strict: (h = g.strict) != null ? h : this.spec.strict,
      abortEarly: (D = g.abortEarly) != null ? D : this.spec.abortEarly,
      recursive: (M = g.recursive) != null ? M : this.spec.recursive,
      disableStackTrace: (V = g.disableStackTrace) != null ? V : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(g, h = {}) {
    let D = this.resolve(Object.assign({
      value: g
    }, h)), M = h.assert === "ignore-optionality", V = D._cast(g, h);
    if (h.assert !== !1 && !D.isType(V)) {
      if (M && RT(V))
        return V;
      let S = $u(g), J = $u(V);
      throw new TypeError(`The value of ${h.path || "field"} could not be cast to a value that satisfies the schema type: "${D.type}". 

attempted value: ${S} 
` + (J !== S ? `result of cast: ${J}` : ""));
    }
    return V;
  }
  _cast(g, h) {
    let D = g === void 0 ? g : this.transforms.reduce((M, V) => V.call(this, M, g, this), g);
    return D === void 0 && (D = this.getDefault(h)), D;
  }
  _validate(g, h = {}, D, M) {
    let {
      path: V,
      originalValue: S = g,
      strict: J = this.spec.strict
    } = h, G = g;
    J || (G = this._cast(G, Object.assign({
      assert: !1
    }, h)));
    let P = [];
    for (let de of Object.values(this.internalTests))
      de && P.push(de);
    this.runTests({
      path: V,
      value: G,
      originalValue: S,
      options: h,
      tests: P
    }, D, (de) => {
      if (de.length)
        return M(de, G);
      this.runTests({
        path: V,
        value: G,
        originalValue: S,
        options: h,
        tests: this.tests
      }, D, M);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(g, h, D) {
    let M = !1, {
      tests: V,
      value: S,
      originalValue: J,
      path: G,
      options: P
    } = g, de = (Me) => {
      M || (M = !0, h(Me, S));
    }, $ = (Me) => {
      M || (M = !0, D(Me, S));
    }, Y = V.length, Z = [];
    if (!Y)
      return $([]);
    let xe = {
      value: S,
      originalValue: J,
      path: G,
      options: P,
      schema: this
    };
    for (let Me = 0; Me < V.length; Me++) {
      const Pe = V[Me];
      Pe(xe, de, function(B) {
        B && (Array.isArray(B) ? Z.push(...B) : Z.push(B)), --Y <= 0 && $(Z);
      });
    }
  }
  asNestedTest({
    key: g,
    index: h,
    parent: D,
    parentPath: M,
    originalParent: V,
    options: S
  }) {
    const J = g ?? h;
    if (J == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const G = typeof J == "number";
    let P = D[J];
    const de = Object.assign({}, S, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: D,
      value: P,
      originalValue: V[J],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [G ? "index" : "key"]: J,
      path: G || J.includes(".") ? `${M || ""}[${P ? J : `"${J}"`}]` : (M ? `${M}.` : "") + g
    });
    return ($, Y, Z) => this.resolve(de)._validate(P, de, Y, Z);
  }
  validate(g, h) {
    var D;
    let M = this.resolve(Object.assign({}, h, {
      value: g
    })), V = (D = h == null ? void 0 : h.disableStackTrace) != null ? D : M.spec.disableStackTrace;
    return new Promise((S, J) => M._validate(g, h, (G, P) => {
      Gr.isError(G) && (G.value = P), J(G);
    }, (G, P) => {
      G.length ? J(new Gr(G, P, void 0, void 0, V)) : S(P);
    }));
  }
  validateSync(g, h) {
    var D;
    let M = this.resolve(Object.assign({}, h, {
      value: g
    })), V, S = (D = h == null ? void 0 : h.disableStackTrace) != null ? D : M.spec.disableStackTrace;
    return M._validate(g, Object.assign({}, h, {
      sync: !0
    }), (J, G) => {
      throw Gr.isError(J) && (J.value = G), J;
    }, (J, G) => {
      if (J.length)
        throw new Gr(J, g, void 0, void 0, S);
      V = G;
    }), V;
  }
  isValid(g, h) {
    return this.validate(g, h).then(() => !0, (D) => {
      if (Gr.isError(D))
        return !1;
      throw D;
    });
  }
  isValidSync(g, h) {
    try {
      return this.validateSync(g, h), !0;
    } catch (D) {
      if (Gr.isError(D))
        return !1;
      throw D;
    }
  }
  _getDefault(g) {
    let h = this.spec.default;
    return h == null ? h : typeof h == "function" ? h.call(this, g) : nf(h);
  }
  getDefault(g) {
    return this.resolve(g || {})._getDefault(g);
  }
  default(g) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: g
    });
  }
  strict(g = !0) {
    return this.clone({
      strict: g
    });
  }
  nullability(g, h) {
    const D = this.clone({
      nullable: g
    });
    return D.internalTests.nullable = tf({
      message: h,
      name: "nullable",
      test(M) {
        return M === null ? this.schema.spec.nullable : !0;
      }
    }), D;
  }
  optionality(g, h) {
    const D = this.clone({
      optional: g
    });
    return D.internalTests.optionality = tf({
      message: h,
      name: "optionality",
      test(M) {
        return M === void 0 ? this.schema.spec.optional : !0;
      }
    }), D;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(g = Fl.defined) {
    return this.optionality(!1, g);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(g = Fl.notNull) {
    return this.nullability(!1, g);
  }
  required(g = Fl.required) {
    return this.clone().withMutation((h) => h.nonNullable(g).defined(g));
  }
  notRequired() {
    return this.clone().withMutation((g) => g.nullable().optional());
  }
  transform(g) {
    let h = this.clone();
    return h.transforms.push(g), h;
  }
  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */
  test(...g) {
    let h;
    if (g.length === 1 ? typeof g[0] == "function" ? h = {
      test: g[0]
    } : h = g[0] : g.length === 2 ? h = {
      name: g[0],
      test: g[1]
    } : h = {
      name: g[0],
      message: g[1],
      test: g[2]
    }, h.message === void 0 && (h.message = Fl.default), typeof h.test != "function")
      throw new TypeError("`test` is a required parameters");
    let D = this.clone(), M = tf(h), V = h.exclusive || h.name && D.exclusiveTests[h.name] === !0;
    if (h.exclusive && !h.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return h.name && (D.exclusiveTests[h.name] = !!h.exclusive), D.tests = D.tests.filter((S) => !(S.OPTIONS.name === h.name && (V || S.OPTIONS.test === M.OPTIONS.test))), D.tests.push(M), D;
  }
  when(g, h) {
    !Array.isArray(g) && typeof g != "string" && (h = g, g = ".");
    let D = this.clone(), M = CT(g).map((V) => new wp(V));
    return M.forEach((V) => {
      V.isSibling && D.deps.push(V.key);
    }), D.conditions.push(typeof h == "function" ? new Lm(M, h) : Lm.fromOptions(M, h)), D;
  }
  typeError(g) {
    let h = this.clone();
    return h.internalTests.typeError = tf({
      message: g,
      name: "typeError",
      skipAbsent: !0,
      test(D) {
        return this.schema._typeCheck(D) ? !0 : this.createError({
          params: {
            type: this.schema.type
          }
        });
      }
    }), h;
  }
  oneOf(g, h = Fl.oneOf) {
    let D = this.clone();
    return g.forEach((M) => {
      D._whitelist.add(M), D._blacklist.delete(M);
    }), D.internalTests.whiteList = tf({
      message: h,
      name: "oneOf",
      skipAbsent: !0,
      test(M) {
        let V = this.schema._whitelist, S = V.resolveAll(this.resolve);
        return S.includes(M) ? !0 : this.createError({
          params: {
            values: Array.from(V).join(", "),
            resolved: S
          }
        });
      }
    }), D;
  }
  notOneOf(g, h = Fl.notOneOf) {
    let D = this.clone();
    return g.forEach((M) => {
      D._blacklist.add(M), D._whitelist.delete(M);
    }), D.internalTests.blacklist = tf({
      message: h,
      name: "notOneOf",
      test(M) {
        let V = this.schema._blacklist, S = V.resolveAll(this.resolve);
        return S.includes(M) ? this.createError({
          params: {
            values: Array.from(V).join(", "),
            resolved: S
          }
        }) : !0;
      }
    }), D;
  }
  strip(g = !0) {
    let h = this.clone();
    return h.spec.strip = g, h;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(g) {
    const h = (g ? this.resolve(g) : this).clone(), {
      label: D,
      meta: M,
      optional: V,
      nullable: S
    } = h.spec;
    return {
      meta: M,
      label: D,
      optional: V,
      nullable: S,
      default: h.getDefault(g),
      type: h.type,
      oneOf: h._whitelist.describe(),
      notOneOf: h._blacklist.describe(),
      tests: h.tests.map((G) => ({
        name: G.OPTIONS.name,
        params: G.OPTIONS.params
      })).filter((G, P, de) => de.findIndex(($) => $.name === G.name) === P)
    };
  }
}
rs.prototype.__isYupSchema__ = !0;
for (const T of ["validate", "validateSync"])
  rs.prototype[`${T}At`] = function(g, h, D = {}) {
    const {
      parent: M,
      parentPath: V,
      schema: S
    } = n_(this, g, h, D.context);
    return S[T](M && M[V], Object.assign({}, D, {
      parent: M,
      path: g
    }));
  };
for (const T of ["equals", "is"])
  rs.prototype[T] = rs.prototype.oneOf;
for (const T of ["not", "nope"])
  rs.prototype[T] = rs.prototype.notOneOf;
const r_ = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Hl(T, g = 0) {
  return Number(T) || g;
}
function a_(T) {
  const g = r_.exec(T);
  if (!g)
    return Date.parse ? Date.parse(T) : Number.NaN;
  const h = {
    year: Hl(g[1]),
    month: Hl(g[2], 1) - 1,
    day: Hl(g[3], 1),
    hour: Hl(g[4]),
    minute: Hl(g[5]),
    second: Hl(g[6]),
    millisecond: g[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      Hl(g[7].substring(0, 3))
    ) : 0,
    z: g[8] || void 0,
    plusMinus: g[9] || void 0,
    hourOffset: Hl(g[10]),
    minuteOffset: Hl(g[11])
  };
  if (h.z === void 0 && h.plusMinus === void 0)
    return new Date(h.year, h.month, h.day, h.hour, h.minute, h.second, h.millisecond).valueOf();
  let D = 0;
  return h.z !== "Z" && h.plusMinus !== void 0 && (D = h.hourOffset * 60 + h.minuteOffset, h.plusMinus === "+" && (D = 0 - D)), Date.UTC(h.year, h.month, h.day, h.hour, h.minute + D, h.second, h.millisecond);
}
let i_ = /* @__PURE__ */ new Date(""), l_ = (T) => Object.prototype.toString.call(T) === "[object Date]";
class R0 extends rs {
  constructor() {
    super({
      type: "date",
      check(g) {
        return l_(g) && !isNaN(g.getTime());
      }
    }), this.withMutation(() => {
      this.transform((g, h, D) => !D.spec.coerce || D.isType(g) || g === null ? g : (g = a_(g), isNaN(g) ? R0.INVALID_DATE : new Date(g)));
    });
  }
  prepareParam(g, h) {
    let D;
    if (wp.isRef(g))
      D = g;
    else {
      let M = this.cast(g);
      if (!this._typeCheck(M))
        throw new TypeError(`\`${h}\` must be a Date or a value that can be \`cast()\` to a Date`);
      D = M;
    }
    return D;
  }
  min(g, h = C0.min) {
    let D = this.prepareParam(g, "min");
    return this.test({
      message: h,
      name: "min",
      exclusive: !0,
      params: {
        min: g
      },
      skipAbsent: !0,
      test(M) {
        return M >= this.resolve(D);
      }
    });
  }
  max(g, h = C0.max) {
    let D = this.prepareParam(g, "max");
    return this.test({
      message: h,
      name: "max",
      exclusive: !0,
      params: {
        max: g
      },
      skipAbsent: !0,
      test(M) {
        return M <= this.resolve(D);
      }
    });
  }
}
R0.INVALID_DATE = i_;
const u_ = {
  changed: {},
  errors: {},
  initialErrors: {},
  initialTouched: {},
  initialValues: {},
  isValid: !0,
  lastAction: "init",
  submitted: 0,
  touched: {},
  values: {}
};
mT(u_);
const o_ = mT(() => {
});
function s_() {
  return Mk(o_);
}
function h_({ children: T }) {
  const g = s_();
  return /* @__PURE__ */ fk(dk, { children: T(g) });
}
export {
  h_ as FormDispatchConsumer
};
