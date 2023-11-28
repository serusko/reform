import { jsx as u0, jsxs as Wk } from 'react/jsx-runtime';
import qE, {
  createContext as Xk,
  useRef as ns,
  useState as Kk,
  createElement as qk,
  useContext as Zk,
  useReducer as ZE,
  useEffect as c0,
  useLayoutEffect as Jk,
  useCallback as Hl,
  useMemo as JE,
} from 'react';
var eb =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  f0 = { exports: {} },
  o0 = {};
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
  return (
    GE ||
      ((GE = 1),
      (function (L) {
        process.env.NODE_ENV !== 'production' &&
          (function () {
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == 'function' &&
              __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
            var N = !1,
              w = !1,
              Z = 5;
            function he(J, Re) {
              var Pe = J.length;
              J.push(Re), Fe(J, Re, Pe);
            }
            function se(J) {
              return J.length === 0 ? null : J[0];
            }
            function g(J) {
              if (J.length === 0) return null;
              var Re = J[0],
                Pe = J.pop();
              return Pe !== Re && ((J[0] = Pe), oe(J, Pe, 0)), Re;
            }
            function Fe(J, Re, Pe) {
              for (var ct = Pe; ct > 0; ) {
                var Nt = (ct - 1) >>> 1,
                  Sn = J[Nt];
                if (G(Sn, Re) > 0) (J[Nt] = Re), (J[ct] = Sn), (ct = Nt);
                else return;
              }
            }
            function oe(J, Re, Pe) {
              for (var ct = Pe, Nt = J.length, Sn = Nt >>> 1; ct < Sn; ) {
                var $t = (ct + 1) * 2 - 1,
                  wr = J[$t],
                  kt = $t + 1,
                  da = J[kt];
                if (G(wr, Re) < 0)
                  kt < Nt && G(da, wr) < 0
                    ? ((J[ct] = da), (J[kt] = Re), (ct = kt))
                    : ((J[ct] = wr), (J[$t] = Re), (ct = $t));
                else if (kt < Nt && G(da, Re) < 0) (J[ct] = da), (J[kt] = Re), (ct = kt);
                else return;
              }
            }
            function G(J, Re) {
              var Pe = J.sortIndex - Re.sortIndex;
              return Pe !== 0 ? Pe : J.id - Re.id;
            }
            var _e = 1,
              F = 2,
              P = 3,
              K = 4,
              me = 5;
            function De(J, Re) {}
            var Ve = typeof performance == 'object' && typeof performance.now == 'function';
            if (Ve) {
              var re = performance;
              L.unstable_now = function () {
                return re.now();
              };
            } else {
              var V = Date,
                Q = V.now();
              L.unstable_now = function () {
                return V.now() - Q;
              };
            }
            var ge = 1073741823,
              Te = -1,
              nt = 250,
              je = 5e3,
              bn = 1e4,
              lr = ge,
              Ht = [],
              vt = [],
              Pn = 1,
              Ie = null,
              it = P,
              Er = !1,
              Dt = !1,
              Tr = !1,
              q = typeof setTimeout == 'function' ? setTimeout : null,
              be = typeof clearTimeout == 'function' ? clearTimeout : null,
              le = typeof setImmediate < 'u' ? setImmediate : null;
            typeof navigator < 'u' &&
              navigator.scheduling !== void 0 &&
              navigator.scheduling.isInputPending !== void 0 &&
              navigator.scheduling.isInputPending.bind(navigator.scheduling);
            function rt(J) {
              for (var Re = se(vt); Re !== null; ) {
                if (Re.callback === null) g(vt);
                else if (Re.startTime <= J) g(vt), (Re.sortIndex = Re.expirationTime), he(Ht, Re);
                else return;
                Re = se(vt);
              }
            }
            function lt(J) {
              if (((Tr = !1), rt(J), !Dt))
                if (se(Ht) !== null) (Dt = !0), si(Yn);
                else {
                  var Re = se(vt);
                  Re !== null && Qn(lt, Re.startTime - J);
                }
            }
            function Yn(J, Re) {
              (Dt = !1), Tr && ((Tr = !1), qr()), (Er = !0);
              var Pe = it;
              try {
                var ct;
                if (!w) return ur(J, Re);
              } finally {
                (Ie = null), (it = Pe), (Er = !1);
              }
            }
            function ur(J, Re) {
              var Pe = Re;
              for (
                rt(Pe), Ie = se(Ht);
                Ie !== null && !N && !(Ie.expirationTime > Pe && (!J || Vl()));

              ) {
                var ct = Ie.callback;
                if (typeof ct == 'function') {
                  (Ie.callback = null), (it = Ie.priorityLevel);
                  var Nt = Ie.expirationTime <= Pe,
                    Sn = ct(Nt);
                  (Pe = L.unstable_now()),
                    typeof Sn == 'function' ? (Ie.callback = Sn) : Ie === se(Ht) && g(Ht),
                    rt(Pe);
                } else g(Ht);
                Ie = se(Ht);
              }
              if (Ie !== null) return !0;
              var $t = se(vt);
              return $t !== null && Qn(lt, $t.startTime - Pe), !1;
            }
            function ii(J, Re) {
              switch (J) {
                case _e:
                case F:
                case P:
                case K:
                case me:
                  break;
                default:
                  J = P;
              }
              var Pe = it;
              it = J;
              try {
                return Re();
              } finally {
                it = Pe;
              }
            }
            function _n(J) {
              var Re;
              switch (it) {
                case _e:
                case F:
                case P:
                  Re = P;
                  break;
                default:
                  Re = it;
                  break;
              }
              var Pe = it;
              it = Re;
              try {
                return J();
              } finally {
                it = Pe;
              }
            }
            function li(J) {
              var Re = it;
              return function () {
                var Pe = it;
                it = Re;
                try {
                  return J.apply(this, arguments);
                } finally {
                  it = Pe;
                }
              };
            }
            function Wr(J, Re, Pe) {
              var ct = L.unstable_now(),
                Nt;
              if (typeof Pe == 'object' && Pe !== null) {
                var Sn = Pe.delay;
                typeof Sn == 'number' && Sn > 0 ? (Nt = ct + Sn) : (Nt = ct);
              } else Nt = ct;
              var $t;
              switch (J) {
                case _e:
                  $t = Te;
                  break;
                case F:
                  $t = nt;
                  break;
                case me:
                  $t = lr;
                  break;
                case K:
                  $t = bn;
                  break;
                case P:
                default:
                  $t = je;
                  break;
              }
              var wr = Nt + $t,
                kt = {
                  id: Pn++,
                  callback: Re,
                  priorityLevel: J,
                  startTime: Nt,
                  expirationTime: wr,
                  sortIndex: -1,
                };
              return (
                Nt > ct
                  ? ((kt.sortIndex = Nt),
                    he(vt, kt),
                    se(Ht) === null && kt === se(vt) && (Tr ? qr() : (Tr = !0), Qn(lt, Nt - ct)))
                  : ((kt.sortIndex = wr), he(Ht, kt), !Dt && !Er && ((Dt = !0), si(Yn))),
                kt
              );
            }
            function ca() {}
            function Pu() {
              !Dt && !Er && ((Dt = !0), si(Yn));
            }
            function Rr() {
              return se(Ht);
            }
            function ba(J) {
              J.callback = null;
            }
            function gn() {
              return it;
            }
            var $n = !1,
              xr = null,
              Xr = -1,
              or = Z,
              _a = -1;
            function Vl() {
              var J = L.unstable_now() - _a;
              return !(J < or);
            }
            function Qi() {}
            function ui(J) {
              if (J < 0 || J > 125) {
                console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                );
                return;
              }
              J > 0 ? (or = Math.floor(1e3 / J)) : (or = Z);
            }
            var Ii = function () {
                if (xr !== null) {
                  var J = L.unstable_now();
                  _a = J;
                  var Re = !0,
                    Pe = !0;
                  try {
                    Pe = xr(Re, J);
                  } finally {
                    Pe ? Kr() : (($n = !1), (xr = null));
                  }
                } else $n = !1;
              },
              Kr;
            if (typeof le == 'function')
              Kr = function () {
                le(Ii);
              };
            else if (typeof MessageChannel < 'u') {
              var oi = new MessageChannel(),
                fa = oi.port2;
              (oi.port1.onmessage = Ii),
                (Kr = function () {
                  fa.postMessage(null);
                });
            } else
              Kr = function () {
                q(Ii, 0);
              };
            function si(J) {
              (xr = J), $n || (($n = !0), Kr());
            }
            function Qn(J, Re) {
              Xr = q(function () {
                J(L.unstable_now());
              }, Re);
            }
            function qr() {
              be(Xr), (Xr = -1);
            }
            var Yu = Qi,
              ci = null;
            (L.unstable_IdlePriority = me),
              (L.unstable_ImmediatePriority = _e),
              (L.unstable_LowPriority = K),
              (L.unstable_NormalPriority = P),
              (L.unstable_Profiling = ci),
              (L.unstable_UserBlockingPriority = F),
              (L.unstable_cancelCallback = ba),
              (L.unstable_continueExecution = Pu),
              (L.unstable_forceFrameRate = ui),
              (L.unstable_getCurrentPriorityLevel = gn),
              (L.unstable_getFirstCallbackNode = Rr),
              (L.unstable_next = _n),
              (L.unstable_pauseExecution = ca),
              (L.unstable_requestPaint = Yu),
              (L.unstable_runWithPriority = ii),
              (L.unstable_scheduleCallback = Wr),
              (L.unstable_shouldYield = Vl),
              (L.unstable_wrapCallback = li),
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == 'function' &&
                __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
          })();
      })(o0)),
    o0
  );
}
var s0 = {};
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
  return (
    WE ||
      ((WE = 1),
      (function (L) {
        function N(q, be) {
          var le = q.length;
          q.push(be);
          e: for (; 0 < le; ) {
            var rt = (le - 1) >>> 1,
              lt = q[rt];
            if (0 < he(lt, be)) (q[rt] = be), (q[le] = lt), (le = rt);
            else break e;
          }
        }
        function w(q) {
          return q.length === 0 ? null : q[0];
        }
        function Z(q) {
          if (q.length === 0) return null;
          var be = q[0],
            le = q.pop();
          if (le !== be) {
            q[0] = le;
            e: for (var rt = 0, lt = q.length, Yn = lt >>> 1; rt < Yn; ) {
              var ur = 2 * (rt + 1) - 1,
                ii = q[ur],
                _n = ur + 1,
                li = q[_n];
              if (0 > he(ii, le))
                _n < lt && 0 > he(li, ii)
                  ? ((q[rt] = li), (q[_n] = le), (rt = _n))
                  : ((q[rt] = ii), (q[ur] = le), (rt = ur));
              else if (_n < lt && 0 > he(li, le)) (q[rt] = li), (q[_n] = le), (rt = _n);
              else break e;
            }
          }
          return be;
        }
        function he(q, be) {
          var le = q.sortIndex - be.sortIndex;
          return le !== 0 ? le : q.id - be.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var se = performance;
          L.unstable_now = function () {
            return se.now();
          };
        } else {
          var g = Date,
            Fe = g.now();
          L.unstable_now = function () {
            return g.now() - Fe;
          };
        }
        var oe = [],
          G = [],
          _e = 1,
          F = null,
          P = 3,
          K = !1,
          me = !1,
          De = !1,
          Ve = typeof setTimeout == 'function' ? setTimeout : null,
          re = typeof clearTimeout == 'function' ? clearTimeout : null,
          V = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Q(q) {
          for (var be = w(G); be !== null; ) {
            if (be.callback === null) Z(G);
            else if (be.startTime <= q) Z(G), (be.sortIndex = be.expirationTime), N(oe, be);
            else break;
            be = w(G);
          }
        }
        function ge(q) {
          if (((De = !1), Q(q), !me))
            if (w(oe) !== null) (me = !0), Dt(Te);
            else {
              var be = w(G);
              be !== null && Tr(ge, be.startTime - q);
            }
        }
        function Te(q, be) {
          (me = !1), De && ((De = !1), re(bn), (bn = -1)), (K = !0);
          var le = P;
          try {
            for (Q(be), F = w(oe); F !== null && (!(F.expirationTime > be) || (q && !vt())); ) {
              var rt = F.callback;
              if (typeof rt == 'function') {
                (F.callback = null), (P = F.priorityLevel);
                var lt = rt(F.expirationTime <= be);
                (be = L.unstable_now()),
                  typeof lt == 'function' ? (F.callback = lt) : F === w(oe) && Z(oe),
                  Q(be);
              } else Z(oe);
              F = w(oe);
            }
            if (F !== null) var Yn = !0;
            else {
              var ur = w(G);
              ur !== null && Tr(ge, ur.startTime - be), (Yn = !1);
            }
            return Yn;
          } finally {
            (F = null), (P = le), (K = !1);
          }
        }
        var nt = !1,
          je = null,
          bn = -1,
          lr = 5,
          Ht = -1;
        function vt() {
          return !(L.unstable_now() - Ht < lr);
        }
        function Pn() {
          if (je !== null) {
            var q = L.unstable_now();
            Ht = q;
            var be = !0;
            try {
              be = je(!0, q);
            } finally {
              be ? Ie() : ((nt = !1), (je = null));
            }
          } else nt = !1;
        }
        var Ie;
        if (typeof V == 'function')
          Ie = function () {
            V(Pn);
          };
        else if (typeof MessageChannel < 'u') {
          var it = new MessageChannel(),
            Er = it.port2;
          (it.port1.onmessage = Pn),
            (Ie = function () {
              Er.postMessage(null);
            });
        } else
          Ie = function () {
            Ve(Pn, 0);
          };
        function Dt(q) {
          (je = q), nt || ((nt = !0), Ie());
        }
        function Tr(q, be) {
          bn = Ve(function () {
            q(L.unstable_now());
          }, be);
        }
        (L.unstable_IdlePriority = 5),
          (L.unstable_ImmediatePriority = 1),
          (L.unstable_LowPriority = 4),
          (L.unstable_NormalPriority = 3),
          (L.unstable_Profiling = null),
          (L.unstable_UserBlockingPriority = 2),
          (L.unstable_cancelCallback = function (q) {
            q.callback = null;
          }),
          (L.unstable_continueExecution = function () {
            me || K || ((me = !0), Dt(Te));
          }),
          (L.unstable_forceFrameRate = function (q) {
            0 > q || 125 < q
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (lr = 0 < q ? Math.floor(1e3 / q) : 5);
          }),
          (L.unstable_getCurrentPriorityLevel = function () {
            return P;
          }),
          (L.unstable_getFirstCallbackNode = function () {
            return w(oe);
          }),
          (L.unstable_next = function (q) {
            switch (P) {
              case 1:
              case 2:
              case 3:
                var be = 3;
                break;
              default:
                be = P;
            }
            var le = P;
            P = be;
            try {
              return q();
            } finally {
              P = le;
            }
          }),
          (L.unstable_pauseExecution = function () {}),
          (L.unstable_requestPaint = function () {}),
          (L.unstable_runWithPriority = function (q, be) {
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
            var le = P;
            P = q;
            try {
              return be();
            } finally {
              P = le;
            }
          }),
          (L.unstable_scheduleCallback = function (q, be, le) {
            var rt = L.unstable_now();
            switch (
              (typeof le == 'object' && le !== null
                ? ((le = le.delay), (le = typeof le == 'number' && 0 < le ? rt + le : rt))
                : (le = rt),
              q)
            ) {
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
            return (
              (lt = le + lt),
              (q = {
                id: _e++,
                callback: be,
                priorityLevel: q,
                startTime: le,
                expirationTime: lt,
                sortIndex: -1,
              }),
              le > rt
                ? ((q.sortIndex = le),
                  N(G, q),
                  w(oe) === null &&
                    q === w(G) &&
                    (De ? (re(bn), (bn = -1)) : (De = !0), Tr(ge, le - rt)))
                : ((q.sortIndex = lt), N(oe, q), me || K || ((me = !0), Dt(Te))),
              q
            );
          }),
          (L.unstable_shouldYield = vt),
          (L.unstable_wrapCallback = function (q) {
            var be = P;
            return function () {
              var le = P;
              P = be;
              try {
                return q.apply(this, arguments);
              } finally {
                P = le;
              }
            };
          });
      })(s0)),
    s0
  );
}
process.env.NODE_ENV === 'production' ? (f0.exports = nb()) : (f0.exports = tb());
var Cp = f0.exports,
  d0 = { exports: {} },
  Ir = {};
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
  return (
    XE ||
      ((XE = 1),
      process.env.NODE_ENV !== 'production' &&
        (function () {
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == 'function' &&
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          var L = qE,
            N = Cp,
            w = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            Z = !1;
          function he(e) {
            Z = e;
          }
          function se(e) {
            if (!Z) {
              for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                a[i - 1] = arguments[i];
              Fe('warn', e, a);
            }
          }
          function g(e) {
            if (!Z) {
              for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                a[i - 1] = arguments[i];
              Fe('error', e, a);
            }
          }
          function Fe(e, t, a) {
            {
              var i = w.ReactDebugCurrentFrame,
                u = i.getStackAddendum();
              u !== '' && ((t += '%s'), (a = a.concat([u])));
              var s = a.map(function (f) {
                return String(f);
              });
              s.unshift('Warning: ' + t), Function.prototype.apply.call(console[e], console, s);
            }
          }
          var oe = 0,
            G = 1,
            _e = 2,
            F = 3,
            P = 4,
            K = 5,
            me = 6,
            De = 7,
            Ve = 8,
            re = 9,
            V = 10,
            Q = 11,
            ge = 12,
            Te = 13,
            nt = 14,
            je = 15,
            bn = 16,
            lr = 17,
            Ht = 18,
            vt = 19,
            Pn = 21,
            Ie = 22,
            it = 23,
            Er = 24,
            Dt = 25,
            Tr = !0,
            q = !1,
            be = !1,
            le = !1,
            rt = !1,
            lt = !0,
            Yn = !1,
            ur = !1,
            ii = !0,
            _n = !0,
            li = !0,
            Wr = /* @__PURE__ */ new Set(),
            ca = {},
            Pu = {};
          function Rr(e, t) {
            ba(e, t), ba(e + 'Capture', t);
          }
          function ba(e, t) {
            ca[e] &&
              g(
                'EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.',
                e,
              ),
              (ca[e] = t);
            {
              var a = e.toLowerCase();
              (Pu[a] = e), e === 'onDoubleClick' && (Pu.ondblclick = e);
            }
            for (var i = 0; i < t.length; i++) Wr.add(t[i]);
          }
          var gn =
              typeof window < 'u' &&
              typeof window.document < 'u' &&
              typeof window.document.createElement < 'u',
            $n = Object.prototype.hasOwnProperty;
          function xr(e) {
            {
              var t = typeof Symbol == 'function' && Symbol.toStringTag,
                a = (t && e[Symbol.toStringTag]) || e.constructor.name || 'Object';
              return a;
            }
          }
          function Xr(e) {
            try {
              return or(e), !1;
            } catch {
              return !0;
            }
          }
          function or(e) {
            return '' + e;
          }
          function _a(e, t) {
            if (Xr(e))
              return (
                g(
                  'The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.',
                  t,
                  xr(e),
                ),
                or(e)
              );
          }
          function Vl(e) {
            if (Xr(e))
              return (
                g(
                  'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                  xr(e),
                ),
                or(e)
              );
          }
          function Qi(e, t) {
            if (Xr(e))
              return (
                g(
                  'The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.',
                  t,
                  xr(e),
                ),
                or(e)
              );
          }
          function ui(e, t) {
            if (Xr(e))
              return (
                g(
                  'The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.',
                  t,
                  xr(e),
                ),
                or(e)
              );
          }
          function Ii(e) {
            if (Xr(e))
              return (
                g(
                  'The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.',
                  xr(e),
                ),
                or(e)
              );
          }
          function Kr(e) {
            if (Xr(e))
              return (
                g(
                  'Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.',
                  xr(e),
                ),
                or(e)
              );
          }
          var oi = 0,
            fa = 1,
            si = 2,
            Qn = 3,
            qr = 4,
            Yu = 5,
            ci = 6,
            J =
              ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD',
            Re = J + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',
            Pe = new RegExp('^[' + J + '][' + Re + ']*$'),
            ct = {},
            Nt = {};
          function Sn(e) {
            return $n.call(Nt, e)
              ? !0
              : $n.call(ct, e)
                ? !1
                : Pe.test(e)
                  ? ((Nt[e] = !0), !0)
                  : ((ct[e] = !0), g('Invalid attribute name: `%s`', e), !1);
          }
          function $t(e, t, a) {
            return t !== null
              ? t.type === oi
              : a
                ? !1
                : e.length > 2 && (e[0] === 'o' || e[0] === 'O') && (e[1] === 'n' || e[1] === 'N');
          }
          function wr(e, t, a, i) {
            if (a !== null && a.type === oi) return !1;
            switch (typeof t) {
              case 'function':
              case 'symbol':
                return !0;
              case 'boolean': {
                if (i) return !1;
                if (a !== null) return !a.acceptsBooleans;
                var u = e.toLowerCase().slice(0, 5);
                return u !== 'data-' && u !== 'aria-';
              }
              default:
                return !1;
            }
          }
          function kt(e, t, a, i) {
            if (t === null || typeof t > 'u' || wr(e, t, a, i)) return !0;
            if (i) return !1;
            if (a !== null)
              switch (a.type) {
                case Qn:
                  return !t;
                case qr:
                  return t === !1;
                case Yu:
                  return isNaN(t);
                case ci:
                  return isNaN(t) || t < 1;
              }
            return !1;
          }
          function da(e) {
            return bt.hasOwnProperty(e) ? bt[e] : null;
          }
          function Ft(e, t, a, i, u, s, f) {
            (this.acceptsBooleans = t === si || t === Qn || t === qr),
              (this.attributeName = i),
              (this.attributeNamespace = u),
              (this.mustUseProperty = a),
              (this.propertyName = e),
              (this.type = t),
              (this.sanitizeURL = s),
              (this.removeEmptyString = f);
          }
          var bt = {},
            Ep = [
              'children',
              'dangerouslySetInnerHTML',
              // TODO: This prevents the assignment of defaultValue to regular
              // elements (not just inputs). Now that ReactDOMInput assigns to the
              // defaultValue property -- do we need this?
              'defaultValue',
              'defaultChecked',
              'innerHTML',
              'suppressContentEditableWarning',
              'suppressHydrationWarning',
              'style',
            ];
          Ep.forEach(function (e) {
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
              !1,
            );
          }),
            [
              ['acceptCharset', 'accept-charset'],
              ['className', 'class'],
              ['htmlFor', 'for'],
              ['httpEquiv', 'http-equiv'],
            ].forEach(function (e) {
              var t = e[0],
                a = e[1];
              bt[t] = new Ft(
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
                !1,
              );
            }),
            ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
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
                !1,
              );
            }),
            ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
              function (e) {
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
                  !1,
                );
              },
            ),
            [
              'allowFullScreen',
              'async',
              // Note: there is a special case that prevents it from being written to the DOM
              // on the client side because the browsers are inconsistent. Instead we call focus().
              'autoFocus',
              'autoPlay',
              'controls',
              'default',
              'defer',
              'disabled',
              'disablePictureInPicture',
              'disableRemotePlayback',
              'formNoValidate',
              'hidden',
              'loop',
              'noModule',
              'noValidate',
              'open',
              'playsInline',
              'readOnly',
              'required',
              'reversed',
              'scoped',
              'seamless',
              // Microdata
              'itemScope',
            ].forEach(function (e) {
              bt[e] = new Ft(
                e,
                Qn,
                !1,
                // mustUseProperty
                e.toLowerCase(),
                // attributeName
                null,
                // attributeNamespace
                !1,
                // sanitizeURL
                !1,
              );
            }),
            [
              'checked',
              // Note: `option.selected` is not updated if `select.multiple` is
              // disabled with `removeAttribute`. We have special logic for handling this.
              'multiple',
              'muted',
              'selected',
              // NOTE: if you add a camelCased prop to this list,
              // you'll need to set attributeName to name.toLowerCase()
              // instead in the assignment below.
            ].forEach(function (e) {
              bt[e] = new Ft(
                e,
                Qn,
                !0,
                // mustUseProperty
                e,
                // attributeName
                null,
                // attributeNamespace
                !1,
                // sanitizeURL
                !1,
              );
            }),
            [
              'capture',
              'download',
              // NOTE: if you add a camelCased prop to this list,
              // you'll need to set attributeName to name.toLowerCase()
              // instead in the assignment below.
            ].forEach(function (e) {
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
                !1,
              );
            }),
            [
              'cols',
              'rows',
              'size',
              'span',
              // NOTE: if you add a camelCased prop to this list,
              // you'll need to set attributeName to name.toLowerCase()
              // instead in the assignment below.
            ].forEach(function (e) {
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
                !1,
              );
            }),
            ['rowSpan', 'start'].forEach(function (e) {
              bt[e] = new Ft(
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
                !1,
              );
            });
          var rs = /[\-\:]([a-z])/g,
            as = function (e) {
              return e[1].toUpperCase();
            };
          [
            'accent-height',
            'alignment-baseline',
            'arabic-form',
            'baseline-shift',
            'cap-height',
            'clip-path',
            'clip-rule',
            'color-interpolation',
            'color-interpolation-filters',
            'color-profile',
            'color-rendering',
            'dominant-baseline',
            'enable-background',
            'fill-opacity',
            'fill-rule',
            'flood-color',
            'flood-opacity',
            'font-family',
            'font-size',
            'font-size-adjust',
            'font-stretch',
            'font-style',
            'font-variant',
            'font-weight',
            'glyph-name',
            'glyph-orientation-horizontal',
            'glyph-orientation-vertical',
            'horiz-adv-x',
            'horiz-origin-x',
            'image-rendering',
            'letter-spacing',
            'lighting-color',
            'marker-end',
            'marker-mid',
            'marker-start',
            'overline-position',
            'overline-thickness',
            'paint-order',
            'panose-1',
            'pointer-events',
            'rendering-intent',
            'shape-rendering',
            'stop-color',
            'stop-opacity',
            'strikethrough-position',
            'strikethrough-thickness',
            'stroke-dasharray',
            'stroke-dashoffset',
            'stroke-linecap',
            'stroke-linejoin',
            'stroke-miterlimit',
            'stroke-opacity',
            'stroke-width',
            'text-anchor',
            'text-decoration',
            'text-rendering',
            'underline-position',
            'underline-thickness',
            'unicode-bidi',
            'unicode-range',
            'units-per-em',
            'v-alphabetic',
            'v-hanging',
            'v-ideographic',
            'v-mathematical',
            'vector-effect',
            'vert-adv-y',
            'vert-origin-x',
            'vert-origin-y',
            'word-spacing',
            'writing-mode',
            'xmlns:xlink',
            'x-height',
            // NOTE: if you add a camelCased prop to this list,
            // you'll need to set attributeName to name.toLowerCase()
            // instead in the assignment below.
          ].forEach(function (e) {
            var t = e.replace(rs, as);
            bt[t] = new Ft(
              t,
              fa,
              !1,
              // mustUseProperty
              e,
              null,
              // attributeNamespace
              !1,
              // sanitizeURL
              !1,
            );
          }),
            [
              'xlink:actuate',
              'xlink:arcrole',
              'xlink:role',
              'xlink:show',
              'xlink:title',
              'xlink:type',
              // NOTE: if you add a camelCased prop to this list,
              // you'll need to set attributeName to name.toLowerCase()
              // instead in the assignment below.
            ].forEach(function (e) {
              var t = e.replace(rs, as);
              bt[t] = new Ft(
                t,
                fa,
                !1,
                // mustUseProperty
                e,
                'http://www.w3.org/1999/xlink',
                !1,
                // sanitizeURL
                !1,
              );
            }),
            [
              'xml:base',
              'xml:lang',
              'xml:space',
              // NOTE: if you add a camelCased prop to this list,
              // you'll need to set attributeName to name.toLowerCase()
              // instead in the assignment below.
            ].forEach(function (e) {
              var t = e.replace(rs, as);
              bt[t] = new Ft(
                t,
                fa,
                !1,
                // mustUseProperty
                e,
                'http://www.w3.org/XML/1998/namespace',
                !1,
                // sanitizeURL
                !1,
              );
            }),
            ['tabIndex', 'crossOrigin'].forEach(function (e) {
              bt[e] = new Ft(
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
                !1,
              );
            });
          var Tp = 'xlinkHref';
          (bt[Tp] = new Ft(
            'xlinkHref',
            fa,
            !1,
            // mustUseProperty
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            // sanitizeURL
            !1,
          )),
            ['src', 'href', 'action', 'formAction'].forEach(function (e) {
              bt[e] = new Ft(
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
                !0,
              );
            });
          var Rp =
              /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,
            is = !1;
          function Jc(e) {
            !is &&
              Rp.test(e) &&
              ((is = !0),
              g(
                'A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.',
                JSON.stringify(e),
              ));
          }
          function $u(e, t, a, i) {
            if (i.mustUseProperty) {
              var u = i.propertyName;
              return e[u];
            } else {
              _a(a, t), i.sanitizeURL && Jc('' + a);
              var s = i.attributeName,
                f = null;
              if (i.type === qr) {
                if (e.hasAttribute(s)) {
                  var p = e.getAttribute(s);
                  return p === '' ? !0 : kt(t, a, i, !1) ? p : p === '' + a ? a : p;
                }
              } else if (e.hasAttribute(s)) {
                if (kt(t, a, i, !1)) return e.getAttribute(s);
                if (i.type === Qn) return a;
                f = e.getAttribute(s);
              }
              return kt(t, a, i, !1) ? (f === null ? a : f) : f === '' + a ? a : f;
            }
          }
          function ls(e, t, a, i) {
            {
              if (!Sn(t)) return;
              if (!e.hasAttribute(t)) return a === void 0 ? void 0 : null;
              var u = e.getAttribute(t);
              return _a(a, t), u === '' + a ? a : u;
            }
          }
          function Gi(e, t, a, i) {
            var u = da(t);
            if (!$t(t, u, i)) {
              if ((kt(t, a, u, i) && (a = null), i || u === null)) {
                if (Sn(t)) {
                  var s = t;
                  a === null ? e.removeAttribute(s) : (_a(a, t), e.setAttribute(s, '' + a));
                }
                return;
              }
              var f = u.mustUseProperty;
              if (f) {
                var p = u.propertyName;
                if (a === null) {
                  var v = u.type;
                  e[p] = v === Qn ? !1 : '';
                } else e[p] = a;
                return;
              }
              var m = u.attributeName,
                y = u.attributeNamespace;
              if (a === null) e.removeAttribute(m);
              else {
                var R = u.type,
                  E;
                R === Qn || (R === qr && a === !0)
                  ? (E = '')
                  : (_a(a, m), (E = '' + a), u.sanitizeURL && Jc(E.toString())),
                  y ? e.setAttributeNS(y, m, E) : e.setAttribute(m, E);
              }
            }
          }
          var Bl = Symbol.for('react.element'),
            Zr = Symbol.for('react.portal'),
            Oa = Symbol.for('react.fragment'),
            jl = Symbol.for('react.strict_mode'),
            Qu = Symbol.for('react.profiler'),
            ef = Symbol.for('react.provider'),
            tf = Symbol.for('react.context'),
            Pl = Symbol.for('react.forward_ref'),
            pa = Symbol.for('react.suspense'),
            Iu = Symbol.for('react.suspense_list'),
            Yl = Symbol.for('react.memo'),
            On = Symbol.for('react.lazy'),
            xp = Symbol.for('react.scope'),
            wp = Symbol.for('react.debug_trace_mode'),
            nf = Symbol.for('react.offscreen'),
            Dp = Symbol.for('react.legacy_hidden'),
            bm = Symbol.for('react.cache'),
            _m = Symbol.for('react.tracing_marker'),
            _t = Symbol.iterator,
            Om = '@@iterator';
          function Ma(e) {
            if (e === null || typeof e != 'object') return null;
            var t = (_t && e[_t]) || e[Om];
            return typeof t == 'function' ? t : null;
          }
          var Ye = Object.assign,
            fi = 0,
            kp,
            rf,
            Gu,
            Jr,
            bp,
            Dr,
            _p;
          function Op() {}
          Op.__reactDisabledLog = !0;
          function Mm() {
            {
              if (fi === 0) {
                (kp = console.log),
                  (rf = console.info),
                  (Gu = console.warn),
                  (Jr = console.error),
                  (bp = console.group),
                  (Dr = console.groupCollapsed),
                  (_p = console.groupEnd);
                var e = {
                  configurable: !0,
                  enumerable: !0,
                  value: Op,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  info: e,
                  log: e,
                  warn: e,
                  error: e,
                  group: e,
                  groupCollapsed: e,
                  groupEnd: e,
                });
              }
              fi++;
            }
          }
          function us() {
            {
              if ((fi--, fi === 0)) {
                var e = {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  log: Ye({}, e, {
                    value: kp,
                  }),
                  info: Ye({}, e, {
                    value: rf,
                  }),
                  warn: Ye({}, e, {
                    value: Gu,
                  }),
                  error: Ye({}, e, {
                    value: Jr,
                  }),
                  group: Ye({}, e, {
                    value: bp,
                  }),
                  groupCollapsed: Ye({}, e, {
                    value: Dr,
                  }),
                  groupEnd: Ye({}, e, {
                    value: _p,
                  }),
                });
              }
              fi < 0 &&
                g('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
            }
          }
          var $l = w.ReactCurrentDispatcher,
            Wi;
          function ea(e, t, a) {
            {
              if (Wi === void 0)
                try {
                  throw Error();
                } catch (u) {
                  var i = u.stack.trim().match(/\n( *(at )?)/);
                  Wi = (i && i[1]) || '';
                }
              return (
                `
` +
                Wi +
                e
              );
            }
          }
          var af = !1,
            os;
          {
            var lf = typeof WeakMap == 'function' ? WeakMap : Map;
            os = new lf();
          }
          function ss(e, t) {
            if (!e || af) return '';
            {
              var a = os.get(e);
              if (a !== void 0) return a;
            }
            var i;
            af = !0;
            var u = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var s;
            (s = $l.current), ($l.current = null), Mm();
            try {
              if (t) {
                var f = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(f.prototype, 'props', {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == 'object' && Reflect.construct)
                ) {
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
              if (O && i && typeof O.stack == 'string') {
                for (
                  var p = O.stack.split(`
`),
                    v = i.stack.split(`
`),
                    m = p.length - 1,
                    y = v.length - 1;
                  m >= 1 && y >= 0 && p[m] !== v[y];

                )
                  y--;
                for (; m >= 1 && y >= 0; m--, y--)
                  if (p[m] !== v[y]) {
                    if (m !== 1 || y !== 1)
                      do
                        if ((m--, y--, y < 0 || p[m] !== v[y])) {
                          var R =
                            `
` + p[m].replace(' at new ', ' at ');
                          return (
                            e.displayName &&
                              R.includes('<anonymous>') &&
                              (R = R.replace('<anonymous>', e.displayName)),
                            typeof e == 'function' && os.set(e, R),
                            R
                          );
                        }
                      while (m >= 1 && y >= 0);
                    break;
                  }
              }
            } finally {
              (af = !1), ($l.current = s), us(), (Error.prepareStackTrace = u);
            }
            var E = e ? e.displayName || e.name : '',
              _ = E ? ea(E) : '';
            return typeof e == 'function' && os.set(e, _), _;
          }
          function uf(e, t, a) {
            return ss(e, !0);
          }
          function Xi(e, t, a) {
            return ss(e, !1);
          }
          function Lm(e) {
            var t = e.prototype;
            return !!(t && t.isReactComponent);
          }
          function Wu(e, t, a) {
            if (e == null) return '';
            if (typeof e == 'function') return ss(e, Lm(e));
            if (typeof e == 'string') return ea(e);
            switch (e) {
              case pa:
                return ea('Suspense');
              case Iu:
                return ea('SuspenseList');
            }
            if (typeof e == 'object')
              switch (e.$$typeof) {
                case Pl:
                  return Xi(e.render);
                case Yl:
                  return Wu(e.type, t, a);
                case On: {
                  var i = e,
                    u = i._payload,
                    s = i._init;
                  try {
                    return Wu(s(u), t, a);
                  } catch {}
                }
              }
            return '';
          }
          function at(e) {
            switch ((e._debugOwner && e._debugOwner.type, e._debugSource, e.tag)) {
              case K:
                return ea(e.type);
              case bn:
                return ea('Lazy');
              case Te:
                return ea('Suspense');
              case vt:
                return ea('SuspenseList');
              case oe:
              case _e:
              case je:
                return Xi(e.type);
              case Q:
                return Xi(e.type.render);
              case G:
                return uf(e.type);
              default:
                return '';
            }
          }
          function of(e) {
            try {
              var t = '',
                a = e;
              do (t += at(a)), (a = a.return);
              while (a);
              return t;
            } catch (i) {
              return (
                `
Error generating stack: ` +
                i.message +
                `
` +
                i.stack
              );
            }
          }
          function Mp(e, t, a) {
            var i = e.displayName;
            if (i) return i;
            var u = t.displayName || t.name || '';
            return u !== '' ? a + '(' + u + ')' : a;
          }
          function cs(e) {
            return e.displayName || 'Context';
          }
          function ft(e) {
            if (e == null) return null;
            if (
              (typeof e.tag == 'number' &&
                g(
                  'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.',
                ),
              typeof e == 'function')
            )
              return e.displayName || e.name || null;
            if (typeof e == 'string') return e;
            switch (e) {
              case Oa:
                return 'Fragment';
              case Zr:
                return 'Portal';
              case Qu:
                return 'Profiler';
              case jl:
                return 'StrictMode';
              case pa:
                return 'Suspense';
              case Iu:
                return 'SuspenseList';
            }
            if (typeof e == 'object')
              switch (e.$$typeof) {
                case tf:
                  var t = e;
                  return cs(t) + '.Consumer';
                case ef:
                  var a = e;
                  return cs(a._context) + '.Provider';
                case Pl:
                  return Mp(e, e.render, 'ForwardRef');
                case Yl:
                  var i = e.displayName || null;
                  return i !== null ? i : ft(e.type) || 'Memo';
                case On: {
                  var u = e,
                    s = u._payload,
                    f = u._init;
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
            var i = t.displayName || t.name || '';
            return e.displayName || (i !== '' ? a + '(' + i + ')' : a);
          }
          function sf(e) {
            return e.displayName || 'Context';
          }
          function Ue(e) {
            var t = e.tag,
              a = e.type;
            switch (t) {
              case Er:
                return 'Cache';
              case re:
                var i = a;
                return sf(i) + '.Consumer';
              case V:
                var u = a;
                return sf(u._context) + '.Provider';
              case Ht:
                return 'DehydratedFragment';
              case Q:
                return Lp(a, a.render, 'ForwardRef');
              case De:
                return 'Fragment';
              case K:
                return a;
              case P:
                return 'Portal';
              case F:
                return 'Root';
              case me:
                return 'Text';
              case bn:
                return ft(a);
              case Ve:
                return a === jl ? 'StrictMode' : 'Mode';
              case Ie:
                return 'Offscreen';
              case ge:
                return 'Profiler';
              case Pn:
                return 'Scope';
              case Te:
                return 'Suspense';
              case vt:
                return 'SuspenseList';
              case Dt:
                return 'TracingMarker';
              case G:
              case oe:
              case lr:
              case _e:
              case nt:
              case je:
                if (typeof a == 'function') return a.displayName || a.name || null;
                if (typeof a == 'string') return a;
                break;
            }
            return null;
          }
          var Xu = w.ReactDebugCurrentFrame,
            Vt = null,
            kr = !1;
          function br() {
            {
              if (Vt === null) return null;
              var e = Vt._debugOwner;
              if (e !== null && typeof e < 'u') return Ue(e);
            }
            return null;
          }
          function Ku() {
            return Vt === null ? '' : of(Vt);
          }
          function Qt() {
            (Xu.getCurrentStack = null), (Vt = null), (kr = !1);
          }
          function ut(e) {
            (Xu.getCurrentStack = e === null ? null : Ku), (Vt = e), (kr = !1);
          }
          function Nm() {
            return Vt;
          }
          function ta(e) {
            kr = e;
          }
          function Cn(e) {
            return '' + e;
          }
          function di(e) {
            switch (typeof e) {
              case 'boolean':
              case 'number':
              case 'string':
              case 'undefined':
                return e;
              case 'object':
                return Kr(e), e;
              default:
                return '';
            }
          }
          var Np = {
            button: !0,
            checkbox: !0,
            image: !0,
            hidden: !0,
            radio: !0,
            reset: !0,
            submit: !0,
          };
          function Ql(e, t) {
            Np[t.type] ||
              t.onChange ||
              t.onInput ||
              t.readOnly ||
              t.disabled ||
              t.value == null ||
              g(
                'You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.',
              ),
              t.onChange ||
                t.readOnly ||
                t.disabled ||
                t.checked == null ||
                g(
                  'You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.',
                );
          }
          function cf(e) {
            var t = e.type,
              a = e.nodeName;
            return a && a.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
          }
          function zp(e) {
            return e._valueTracker;
          }
          function qu(e) {
            e._valueTracker = null;
          }
          function Zu(e) {
            var t = '';
            return e && (cf(e) ? (t = e.checked ? 'true' : 'false') : (t = e.value)), t;
          }
          function Il(e) {
            var t = cf(e) ? 'checked' : 'value',
              a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
            Kr(e[t]);
            var i = '' + e[t];
            if (
              !(
                e.hasOwnProperty(t) ||
                typeof a > 'u' ||
                typeof a.get != 'function' ||
                typeof a.set != 'function'
              )
            ) {
              var u = a.get,
                s = a.set;
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                  return u.call(this);
                },
                set: function (p) {
                  Kr(p), (i = '' + p), s.call(this, p);
                },
              }),
                Object.defineProperty(e, t, {
                  enumerable: a.enumerable,
                });
              var f = {
                getValue: function () {
                  return i;
                },
                setValue: function (p) {
                  Kr(p), (i = '' + p);
                },
                stopTracking: function () {
                  qu(e), delete e[t];
                },
              };
              return f;
            }
          }
          function Ki(e) {
            zp(e) || (e._valueTracker = Il(e));
          }
          function Up(e) {
            if (!e) return !1;
            var t = zp(e);
            if (!t) return !0;
            var a = t.getValue(),
              i = Zu(e);
            return i !== a ? (t.setValue(i), !0) : !1;
          }
          function fs(e) {
            if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
              return null;
            try {
              return e.activeElement || e.body;
            } catch {
              return e.body;
            }
          }
          var ds = !1,
            Ju = !1,
            ps = !1,
            ff = !1;
          function La(e) {
            var t = e.type === 'checkbox' || e.type === 'radio';
            return t ? e.checked != null : e.value != null;
          }
          function eo(e, t) {
            var a = e,
              i = t.checked,
              u = Ye({}, t, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: void 0,
                checked: i ?? a._wrapperState.initialChecked,
              });
            return u;
          }
          function to(e, t) {
            Ql('input', t),
              t.checked !== void 0 &&
                t.defaultChecked !== void 0 &&
                !Ju &&
                (g(
                  '%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
                  br() || 'A component',
                  t.type,
                ),
                (Ju = !0)),
              t.value !== void 0 &&
                t.defaultValue !== void 0 &&
                !ds &&
                (g(
                  '%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
                  br() || 'A component',
                  t.type,
                ),
                (ds = !0));
            var a = e,
              i = t.defaultValue == null ? '' : t.defaultValue;
            a._wrapperState = {
              initialChecked: t.checked != null ? t.checked : t.defaultChecked,
              initialValue: di(t.value != null ? t.value : i),
              controlled: La(t),
            };
          }
          function df(e, t) {
            var a = e,
              i = t.checked;
            i != null && Gi(a, 'checked', i, !1);
          }
          function Gl(e, t) {
            var a = e;
            {
              var i = La(t);
              !a._wrapperState.controlled &&
                i &&
                !ff &&
                (g(
                  'A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components',
                ),
                (ff = !0)),
                a._wrapperState.controlled &&
                  !i &&
                  !ps &&
                  (g(
                    'A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components',
                  ),
                  (ps = !0));
            }
            df(e, t);
            var u = di(t.value),
              s = t.type;
            if (u != null)
              s === 'number'
                ? ((u === 0 && a.value === '') || // We explicitly want to coerce to number here if possible.
                    // eslint-disable-next-line
                    a.value != u) &&
                  (a.value = Cn(u))
                : a.value !== Cn(u) && (a.value = Cn(u));
            else if (s === 'submit' || s === 'reset') {
              a.removeAttribute('value');
              return;
            }
            t.hasOwnProperty('value')
              ? pi(a, t.type, u)
              : t.hasOwnProperty('defaultValue') && pi(a, t.type, di(t.defaultValue)),
              t.checked == null &&
                t.defaultChecked != null &&
                (a.defaultChecked = !!t.defaultChecked);
          }
          function no(e, t, a) {
            var i = e;
            if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
              var u = t.type,
                s = u === 'submit' || u === 'reset';
              if (s && (t.value === void 0 || t.value === null)) return;
              var f = Cn(i._wrapperState.initialValue);
              a || (f !== i.value && (i.value = f)), (i.defaultValue = f);
            }
            var p = i.name;
            p !== '' && (i.name = ''),
              (i.defaultChecked = !i.defaultChecked),
              (i.defaultChecked = !!i._wrapperState.initialChecked),
              p !== '' && (i.name = p);
          }
          function Ap(e, t) {
            var a = e;
            Gl(a, t), sr(a, t);
          }
          function sr(e, t) {
            var a = t.name;
            if (t.type === 'radio' && a != null) {
              for (var i = e; i.parentNode; ) i = i.parentNode;
              _a(a, 'name');
              for (
                var u = i.querySelectorAll(
                    'input[name=' + JSON.stringify('' + a) + '][type="radio"]',
                  ),
                  s = 0;
                s < u.length;
                s++
              ) {
                var f = u[s];
                if (!(f === e || f.form !== e.form)) {
                  var p = dh(f);
                  if (!p)
                    throw new Error(
                      'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.',
                    );
                  Up(f), Gl(f, p);
                }
              }
            }
          }
          function pi(e, t, a) {
            // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
            (t !== 'number' || fs(e.ownerDocument) !== e) &&
              (a == null
                ? (e.defaultValue = Cn(e._wrapperState.initialValue))
                : e.defaultValue !== Cn(a) && (e.defaultValue = Cn(a)));
          }
          var vs = !1,
            Wl = !1,
            Hp = !1;
          function hs(e, t) {
            t.value == null &&
              (typeof t.children == 'object' && t.children !== null
                ? L.Children.forEach(t.children, function (a) {
                    a != null &&
                      (typeof a == 'string' ||
                        typeof a == 'number' ||
                        Wl ||
                        ((Wl = !0),
                        g(
                          'Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.',
                        )));
                  })
                : t.dangerouslySetInnerHTML != null &&
                  (Hp ||
                    ((Hp = !0),
                    g(
                      'Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.',
                    )))),
              t.selected != null &&
                !vs &&
                (g(
                  'Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.',
                ),
                (vs = !0));
          }
          function pf(e, t) {
            t.value != null && e.setAttribute('value', Cn(di(t.value)));
          }
          var ro = Array.isArray;
          function Zt(e) {
            return ro(e);
          }
          var ms;
          ms = !1;
          function Fp() {
            var e = br();
            return e
              ? `

Check the render method of \`` +
                  e +
                  '`.'
              : '';
          }
          var Vp = ['value', 'defaultValue'];
          function zm(e) {
            {
              Ql('select', e);
              for (var t = 0; t < Vp.length; t++) {
                var a = Vp[t];
                if (e[a] != null) {
                  var i = Zt(e[a]);
                  e.multiple && !i
                    ? g(
                        'The `%s` prop supplied to <select> must be an array if `multiple` is true.%s',
                        a,
                        Fp(),
                      )
                    : !e.multiple &&
                      i &&
                      g(
                        'The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s',
                        a,
                        Fp(),
                      );
                }
              }
            }
          }
          function vi(e, t, a, i) {
            var u = e.options;
            if (t) {
              for (var s = a, f = {}, p = 0; p < s.length; p++) f['$' + s[p]] = !0;
              for (var v = 0; v < u.length; v++) {
                var m = f.hasOwnProperty('$' + u[v].value);
                u[v].selected !== m && (u[v].selected = m), m && i && (u[v].defaultSelected = !0);
              }
            } else {
              for (var y = Cn(di(a)), R = null, E = 0; E < u.length; E++) {
                if (u[E].value === y) {
                  (u[E].selected = !0), i && (u[E].defaultSelected = !0);
                  return;
                }
                R === null && !u[E].disabled && (R = u[E]);
              }
              R !== null && (R.selected = !0);
            }
          }
          function vf(e, t) {
            return Ye({}, t, {
              value: void 0,
            });
          }
          function Bp(e, t) {
            var a = e;
            zm(t),
              (a._wrapperState = {
                wasMultiple: !!t.multiple,
              }),
              t.value !== void 0 &&
                t.defaultValue !== void 0 &&
                !ms &&
                (g(
                  'Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
                ),
                (ms = !0));
          }
          function Um(e, t) {
            var a = e;
            a.multiple = !!t.multiple;
            var i = t.value;
            i != null
              ? vi(a, !!t.multiple, i, !1)
              : t.defaultValue != null && vi(a, !!t.multiple, t.defaultValue, !0);
          }
          function Am(e, t) {
            var a = e,
              i = a._wrapperState.wasMultiple;
            a._wrapperState.wasMultiple = !!t.multiple;
            var u = t.value;
            u != null
              ? vi(a, !!t.multiple, u, !1)
              : i !== !!t.multiple &&
                (t.defaultValue != null
                  ? vi(a, !!t.multiple, t.defaultValue, !0)
                  : vi(a, !!t.multiple, t.multiple ? [] : '', !1));
          }
          function Hm(e, t) {
            var a = e,
              i = t.value;
            i != null && vi(a, !!t.multiple, i, !1);
          }
          var hf = !1;
          function mf(e, t) {
            var a = e;
            if (t.dangerouslySetInnerHTML != null)
              throw new Error('`dangerouslySetInnerHTML` does not make sense on <textarea>.');
            var i = Ye({}, t, {
              value: void 0,
              defaultValue: void 0,
              children: Cn(a._wrapperState.initialValue),
            });
            return i;
          }
          function jp(e, t) {
            var a = e;
            Ql('textarea', t),
              t.value !== void 0 &&
                t.defaultValue !== void 0 &&
                !hf &&
                (g(
                  '%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components',
                  br() || 'A component',
                ),
                (hf = !0));
            var i = t.value;
            if (i == null) {
              var u = t.children,
                s = t.defaultValue;
              if (u != null) {
                g(
                  'Use the `defaultValue` or `value` props instead of setting children on <textarea>.',
                );
                {
                  if (s != null)
                    throw new Error(
                      'If you supply `defaultValue` on a <textarea>, do not pass children.',
                    );
                  if (Zt(u)) {
                    if (u.length > 1)
                      throw new Error('<textarea> can only have at most one child.');
                    u = u[0];
                  }
                  s = u;
                }
              }
              s == null && (s = ''), (i = s);
            }
            a._wrapperState = {
              initialValue: di(i),
            };
          }
          function Pp(e, t) {
            var a = e,
              i = di(t.value),
              u = di(t.defaultValue);
            if (i != null) {
              var s = Cn(i);
              s !== a.value && (a.value = s),
                t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
            }
            u != null && (a.defaultValue = Cn(u));
          }
          function Yp(e, t) {
            var a = e,
              i = a.textContent;
            i === a._wrapperState.initialValue && i !== '' && i !== null && (a.value = i);
          }
          function yf(e, t) {
            Pp(e, t);
          }
          var Na = 'http://www.w3.org/1999/xhtml',
            Fm = 'http://www.w3.org/1998/Math/MathML',
            gf = 'http://www.w3.org/2000/svg';
          function ys(e) {
            switch (e) {
              case 'svg':
                return gf;
              case 'math':
                return Fm;
              default:
                return Na;
            }
          }
          function Sf(e, t) {
            return e == null || e === Na ? ys(t) : e === gf && t === 'foreignObject' ? Na : e;
          }
          var Vm = function (e) {
              return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
                ? function (t, a, i, u) {
                    MSApp.execUnsafeLocalFunction(function () {
                      return e(t, a, i, u);
                    });
                  }
                : e;
            },
            gs,
            $p = Vm(function (e, t) {
              if (e.namespaceURI === gf && !('innerHTML' in e)) {
                (gs = gs || document.createElement('div')),
                  (gs.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>');
                for (var a = gs.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
                for (; a.firstChild; ) e.appendChild(a.firstChild);
                return;
              }
              e.innerHTML = t;
            }),
            In = 1,
            za = 3,
            Bt = 8,
            na = 9,
            qi = 11,
            Ss = function (e, t) {
              if (t) {
                var a = e.firstChild;
                if (a && a === e.lastChild && a.nodeType === za) {
                  a.nodeValue = t;
                  return;
                }
              }
              e.textContent = t;
            },
            Qp = {
              animation: [
                'animationDelay',
                'animationDirection',
                'animationDuration',
                'animationFillMode',
                'animationIterationCount',
                'animationName',
                'animationPlayState',
                'animationTimingFunction',
              ],
              background: [
                'backgroundAttachment',
                'backgroundClip',
                'backgroundColor',
                'backgroundImage',
                'backgroundOrigin',
                'backgroundPositionX',
                'backgroundPositionY',
                'backgroundRepeat',
                'backgroundSize',
              ],
              backgroundPosition: ['backgroundPositionX', 'backgroundPositionY'],
              border: [
                'borderBottomColor',
                'borderBottomStyle',
                'borderBottomWidth',
                'borderImageOutset',
                'borderImageRepeat',
                'borderImageSlice',
                'borderImageSource',
                'borderImageWidth',
                'borderLeftColor',
                'borderLeftStyle',
                'borderLeftWidth',
                'borderRightColor',
                'borderRightStyle',
                'borderRightWidth',
                'borderTopColor',
                'borderTopStyle',
                'borderTopWidth',
              ],
              borderBlockEnd: ['borderBlockEndColor', 'borderBlockEndStyle', 'borderBlockEndWidth'],
              borderBlockStart: [
                'borderBlockStartColor',
                'borderBlockStartStyle',
                'borderBlockStartWidth',
              ],
              borderBottom: ['borderBottomColor', 'borderBottomStyle', 'borderBottomWidth'],
              borderColor: [
                'borderBottomColor',
                'borderLeftColor',
                'borderRightColor',
                'borderTopColor',
              ],
              borderImage: [
                'borderImageOutset',
                'borderImageRepeat',
                'borderImageSlice',
                'borderImageSource',
                'borderImageWidth',
              ],
              borderInlineEnd: [
                'borderInlineEndColor',
                'borderInlineEndStyle',
                'borderInlineEndWidth',
              ],
              borderInlineStart: [
                'borderInlineStartColor',
                'borderInlineStartStyle',
                'borderInlineStartWidth',
              ],
              borderLeft: ['borderLeftColor', 'borderLeftStyle', 'borderLeftWidth'],
              borderRadius: [
                'borderBottomLeftRadius',
                'borderBottomRightRadius',
                'borderTopLeftRadius',
                'borderTopRightRadius',
              ],
              borderRight: ['borderRightColor', 'borderRightStyle', 'borderRightWidth'],
              borderStyle: [
                'borderBottomStyle',
                'borderLeftStyle',
                'borderRightStyle',
                'borderTopStyle',
              ],
              borderTop: ['borderTopColor', 'borderTopStyle', 'borderTopWidth'],
              borderWidth: [
                'borderBottomWidth',
                'borderLeftWidth',
                'borderRightWidth',
                'borderTopWidth',
              ],
              columnRule: ['columnRuleColor', 'columnRuleStyle', 'columnRuleWidth'],
              columns: ['columnCount', 'columnWidth'],
              flex: ['flexBasis', 'flexGrow', 'flexShrink'],
              flexFlow: ['flexDirection', 'flexWrap'],
              font: [
                'fontFamily',
                'fontFeatureSettings',
                'fontKerning',
                'fontLanguageOverride',
                'fontSize',
                'fontSizeAdjust',
                'fontStretch',
                'fontStyle',
                'fontVariant',
                'fontVariantAlternates',
                'fontVariantCaps',
                'fontVariantEastAsian',
                'fontVariantLigatures',
                'fontVariantNumeric',
                'fontVariantPosition',
                'fontWeight',
                'lineHeight',
              ],
              fontVariant: [
                'fontVariantAlternates',
                'fontVariantCaps',
                'fontVariantEastAsian',
                'fontVariantLigatures',
                'fontVariantNumeric',
                'fontVariantPosition',
              ],
              gap: ['columnGap', 'rowGap'],
              grid: [
                'gridAutoColumns',
                'gridAutoFlow',
                'gridAutoRows',
                'gridTemplateAreas',
                'gridTemplateColumns',
                'gridTemplateRows',
              ],
              gridArea: ['gridColumnEnd', 'gridColumnStart', 'gridRowEnd', 'gridRowStart'],
              gridColumn: ['gridColumnEnd', 'gridColumnStart'],
              gridColumnGap: ['columnGap'],
              gridGap: ['columnGap', 'rowGap'],
              gridRow: ['gridRowEnd', 'gridRowStart'],
              gridRowGap: ['rowGap'],
              gridTemplate: ['gridTemplateAreas', 'gridTemplateColumns', 'gridTemplateRows'],
              listStyle: ['listStyleImage', 'listStylePosition', 'listStyleType'],
              margin: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
              marker: ['markerEnd', 'markerMid', 'markerStart'],
              mask: [
                'maskClip',
                'maskComposite',
                'maskImage',
                'maskMode',
                'maskOrigin',
                'maskPositionX',
                'maskPositionY',
                'maskRepeat',
                'maskSize',
              ],
              maskPosition: ['maskPositionX', 'maskPositionY'],
              outline: ['outlineColor', 'outlineStyle', 'outlineWidth'],
              overflow: ['overflowX', 'overflowY'],
              padding: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
              placeContent: ['alignContent', 'justifyContent'],
              placeItems: ['alignItems', 'justifyItems'],
              placeSelf: ['alignSelf', 'justifySelf'],
              textDecoration: ['textDecorationColor', 'textDecorationLine', 'textDecorationStyle'],
              textEmphasis: ['textEmphasisColor', 'textEmphasisStyle'],
              transition: [
                'transitionDelay',
                'transitionDuration',
                'transitionProperty',
                'transitionTimingFunction',
              ],
              wordWrap: ['overflowWrap'],
            },
            Xl = {
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
              strokeWidth: !0,
            };
          function Ip(e, t) {
            return e + t.charAt(0).toUpperCase() + t.substring(1);
          }
          var Gp = ['Webkit', 'ms', 'Moz', 'O'];
          Object.keys(Xl).forEach(function (e) {
            Gp.forEach(function (t) {
              Xl[Ip(t, e)] = Xl[e];
            });
          });
          function Cs(e, t, a) {
            var i = t == null || typeof t == 'boolean' || t === '';
            return i
              ? ''
              : !a && typeof t == 'number' && t !== 0 && !(Xl.hasOwnProperty(e) && Xl[e])
                ? t + 'px'
                : (ui(t, e), ('' + t).trim());
          }
          var Kl = /([A-Z])/g,
            Bm = /^ms-/;
          function jm(e) {
            return e.replace(Kl, '-$1').toLowerCase().replace(Bm, '-ms-');
          }
          var Wp = function () {};
          {
            var Xp = /^(?:webkit|moz|o)[A-Z]/,
              Kp = /^-ms-/,
              ao = /-(.)/g,
              ql = /;\s*$/,
              Zl = {},
              Jl = {},
              qp = !1,
              Cf = !1,
              Ef = function (e) {
                return e.replace(ao, function (t, a) {
                  return a.toUpperCase();
                });
              },
              Tf = function (e) {
                (Zl.hasOwnProperty(e) && Zl[e]) ||
                  ((Zl[e] = !0),
                  g(
                    'Unsupported style property %s. Did you mean %s?',
                    e,
                    // As Andi Smith suggests
                    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
                    // is converted to lowercase `ms`.
                    Ef(e.replace(Kp, 'ms-')),
                  ));
              },
              Zp = function (e) {
                (Zl.hasOwnProperty(e) && Zl[e]) ||
                  ((Zl[e] = !0),
                  g(
                    'Unsupported vendor-prefixed style property %s. Did you mean %s?',
                    e,
                    e.charAt(0).toUpperCase() + e.slice(1),
                  ));
              },
              Jp = function (e, t) {
                (Jl.hasOwnProperty(t) && Jl[t]) ||
                  ((Jl[t] = !0),
                  g(
                    `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
                    e,
                    t.replace(ql, ''),
                  ));
              },
              ev = function (e, t) {
                qp ||
                  ((qp = !0), g('`NaN` is an invalid value for the `%s` css style property.', e));
              },
              Pm = function (e, t) {
                Cf ||
                  ((Cf = !0),
                  g('`Infinity` is an invalid value for the `%s` css style property.', e));
              };
            Wp = function (e, t) {
              e.indexOf('-') > -1 ? Tf(e) : Xp.test(e) ? Zp(e) : ql.test(t) && Jp(e, t),
                typeof t == 'number' && (isNaN(t) ? ev(e, t) : isFinite(t) || Pm(e, t));
            };
          }
          var Ym = Wp;
          function $m(e) {
            {
              var t = '',
                a = '';
              for (var i in e)
                if (e.hasOwnProperty(i)) {
                  var u = e[i];
                  if (u != null) {
                    var s = i.indexOf('--') === 0;
                    (t += a + (s ? i : jm(i)) + ':'), (t += Cs(i, u, s)), (a = ';');
                  }
                }
              return t || null;
            }
          }
          function tv(e, t) {
            var a = e.style;
            for (var i in t)
              if (t.hasOwnProperty(i)) {
                var u = i.indexOf('--') === 0;
                u || Ym(i, t[i]);
                var s = Cs(i, t[i], u);
                i === 'float' && (i = 'cssFloat'), u ? a.setProperty(i, s) : (a[i] = s);
              }
          }
          function Qm(e) {
            return e == null || typeof e == 'boolean' || e === '';
          }
          function _r(e) {
            var t = {};
            for (var a in e) for (var i = Qp[a] || [a], u = 0; u < i.length; u++) t[i[u]] = a;
            return t;
          }
          function io(e, t) {
            {
              if (!t) return;
              var a = _r(e),
                i = _r(t),
                u = {};
              for (var s in a) {
                var f = a[s],
                  p = i[s];
                if (p && f !== p) {
                  var v = f + ',' + p;
                  if (u[v]) continue;
                  (u[v] = !0),
                    g(
                      "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                      Qm(e[f]) ? 'Removing' : 'Updating',
                      f,
                      p,
                    );
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
              wbr: !0,
              // NOTE: menuitem's close tag should be omitted, but that causes problems.
            },
            rv = Ye(
              {
                menuitem: !0,
              },
              nv,
            ),
            av = '__html';
          function Es(e, t) {
            if (t) {
              if (rv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
                throw new Error(
                  e +
                    ' is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.',
                );
              if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null)
                  throw new Error(
                    'Can only set one of `children` or `props.dangerouslySetInnerHTML`.',
                  );
                if (
                  typeof t.dangerouslySetInnerHTML != 'object' ||
                  !(av in t.dangerouslySetInnerHTML)
                )
                  throw new Error(
                    '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.',
                  );
              }
              if (
                (!t.suppressContentEditableWarning &&
                  t.contentEditable &&
                  t.children != null &&
                  g(
                    'A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.',
                  ),
                t.style != null && typeof t.style != 'object')
              )
                throw new Error(
                  "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.",
                );
            }
          }
          function Ua(e, t) {
            if (e.indexOf('-') === -1) return typeof t.is == 'string';
            switch (e) {
              case 'annotation-xml':
              case 'color-profile':
              case 'font-face':
              case 'font-face-src':
              case 'font-face-uri':
              case 'font-face-format':
              case 'font-face-name':
              case 'missing-glyph':
                return !1;
              default:
                return !0;
            }
          }
          var Ts = {
              // HTML
              accept: 'accept',
              acceptcharset: 'acceptCharset',
              'accept-charset': 'acceptCharset',
              accesskey: 'accessKey',
              action: 'action',
              allowfullscreen: 'allowFullScreen',
              alt: 'alt',
              as: 'as',
              async: 'async',
              autocapitalize: 'autoCapitalize',
              autocomplete: 'autoComplete',
              autocorrect: 'autoCorrect',
              autofocus: 'autoFocus',
              autoplay: 'autoPlay',
              autosave: 'autoSave',
              capture: 'capture',
              cellpadding: 'cellPadding',
              cellspacing: 'cellSpacing',
              challenge: 'challenge',
              charset: 'charSet',
              checked: 'checked',
              children: 'children',
              cite: 'cite',
              class: 'className',
              classid: 'classID',
              classname: 'className',
              cols: 'cols',
              colspan: 'colSpan',
              content: 'content',
              contenteditable: 'contentEditable',
              contextmenu: 'contextMenu',
              controls: 'controls',
              controlslist: 'controlsList',
              coords: 'coords',
              crossorigin: 'crossOrigin',
              dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
              data: 'data',
              datetime: 'dateTime',
              default: 'default',
              defaultchecked: 'defaultChecked',
              defaultvalue: 'defaultValue',
              defer: 'defer',
              dir: 'dir',
              disabled: 'disabled',
              disablepictureinpicture: 'disablePictureInPicture',
              disableremoteplayback: 'disableRemotePlayback',
              download: 'download',
              draggable: 'draggable',
              enctype: 'encType',
              enterkeyhint: 'enterKeyHint',
              for: 'htmlFor',
              form: 'form',
              formmethod: 'formMethod',
              formaction: 'formAction',
              formenctype: 'formEncType',
              formnovalidate: 'formNoValidate',
              formtarget: 'formTarget',
              frameborder: 'frameBorder',
              headers: 'headers',
              height: 'height',
              hidden: 'hidden',
              high: 'high',
              href: 'href',
              hreflang: 'hrefLang',
              htmlfor: 'htmlFor',
              httpequiv: 'httpEquiv',
              'http-equiv': 'httpEquiv',
              icon: 'icon',
              id: 'id',
              imagesizes: 'imageSizes',
              imagesrcset: 'imageSrcSet',
              innerhtml: 'innerHTML',
              inputmode: 'inputMode',
              integrity: 'integrity',
              is: 'is',
              itemid: 'itemID',
              itemprop: 'itemProp',
              itemref: 'itemRef',
              itemscope: 'itemScope',
              itemtype: 'itemType',
              keyparams: 'keyParams',
              keytype: 'keyType',
              kind: 'kind',
              label: 'label',
              lang: 'lang',
              list: 'list',
              loop: 'loop',
              low: 'low',
              manifest: 'manifest',
              marginwidth: 'marginWidth',
              marginheight: 'marginHeight',
              max: 'max',
              maxlength: 'maxLength',
              media: 'media',
              mediagroup: 'mediaGroup',
              method: 'method',
              min: 'min',
              minlength: 'minLength',
              multiple: 'multiple',
              muted: 'muted',
              name: 'name',
              nomodule: 'noModule',
              nonce: 'nonce',
              novalidate: 'noValidate',
              open: 'open',
              optimum: 'optimum',
              pattern: 'pattern',
              placeholder: 'placeholder',
              playsinline: 'playsInline',
              poster: 'poster',
              preload: 'preload',
              profile: 'profile',
              radiogroup: 'radioGroup',
              readonly: 'readOnly',
              referrerpolicy: 'referrerPolicy',
              rel: 'rel',
              required: 'required',
              reversed: 'reversed',
              role: 'role',
              rows: 'rows',
              rowspan: 'rowSpan',
              sandbox: 'sandbox',
              scope: 'scope',
              scoped: 'scoped',
              scrolling: 'scrolling',
              seamless: 'seamless',
              selected: 'selected',
              shape: 'shape',
              size: 'size',
              sizes: 'sizes',
              span: 'span',
              spellcheck: 'spellCheck',
              src: 'src',
              srcdoc: 'srcDoc',
              srclang: 'srcLang',
              srcset: 'srcSet',
              start: 'start',
              step: 'step',
              style: 'style',
              summary: 'summary',
              tabindex: 'tabIndex',
              target: 'target',
              title: 'title',
              type: 'type',
              usemap: 'useMap',
              value: 'value',
              width: 'width',
              wmode: 'wmode',
              wrap: 'wrap',
              // SVG
              about: 'about',
              accentheight: 'accentHeight',
              'accent-height': 'accentHeight',
              accumulate: 'accumulate',
              additive: 'additive',
              alignmentbaseline: 'alignmentBaseline',
              'alignment-baseline': 'alignmentBaseline',
              allowreorder: 'allowReorder',
              alphabetic: 'alphabetic',
              amplitude: 'amplitude',
              arabicform: 'arabicForm',
              'arabic-form': 'arabicForm',
              ascent: 'ascent',
              attributename: 'attributeName',
              attributetype: 'attributeType',
              autoreverse: 'autoReverse',
              azimuth: 'azimuth',
              basefrequency: 'baseFrequency',
              baselineshift: 'baselineShift',
              'baseline-shift': 'baselineShift',
              baseprofile: 'baseProfile',
              bbox: 'bbox',
              begin: 'begin',
              bias: 'bias',
              by: 'by',
              calcmode: 'calcMode',
              capheight: 'capHeight',
              'cap-height': 'capHeight',
              clip: 'clip',
              clippath: 'clipPath',
              'clip-path': 'clipPath',
              clippathunits: 'clipPathUnits',
              cliprule: 'clipRule',
              'clip-rule': 'clipRule',
              color: 'color',
              colorinterpolation: 'colorInterpolation',
              'color-interpolation': 'colorInterpolation',
              colorinterpolationfilters: 'colorInterpolationFilters',
              'color-interpolation-filters': 'colorInterpolationFilters',
              colorprofile: 'colorProfile',
              'color-profile': 'colorProfile',
              colorrendering: 'colorRendering',
              'color-rendering': 'colorRendering',
              contentscripttype: 'contentScriptType',
              contentstyletype: 'contentStyleType',
              cursor: 'cursor',
              cx: 'cx',
              cy: 'cy',
              d: 'd',
              datatype: 'datatype',
              decelerate: 'decelerate',
              descent: 'descent',
              diffuseconstant: 'diffuseConstant',
              direction: 'direction',
              display: 'display',
              divisor: 'divisor',
              dominantbaseline: 'dominantBaseline',
              'dominant-baseline': 'dominantBaseline',
              dur: 'dur',
              dx: 'dx',
              dy: 'dy',
              edgemode: 'edgeMode',
              elevation: 'elevation',
              enablebackground: 'enableBackground',
              'enable-background': 'enableBackground',
              end: 'end',
              exponent: 'exponent',
              externalresourcesrequired: 'externalResourcesRequired',
              fill: 'fill',
              fillopacity: 'fillOpacity',
              'fill-opacity': 'fillOpacity',
              fillrule: 'fillRule',
              'fill-rule': 'fillRule',
              filter: 'filter',
              filterres: 'filterRes',
              filterunits: 'filterUnits',
              floodopacity: 'floodOpacity',
              'flood-opacity': 'floodOpacity',
              floodcolor: 'floodColor',
              'flood-color': 'floodColor',
              focusable: 'focusable',
              fontfamily: 'fontFamily',
              'font-family': 'fontFamily',
              fontsize: 'fontSize',
              'font-size': 'fontSize',
              fontsizeadjust: 'fontSizeAdjust',
              'font-size-adjust': 'fontSizeAdjust',
              fontstretch: 'fontStretch',
              'font-stretch': 'fontStretch',
              fontstyle: 'fontStyle',
              'font-style': 'fontStyle',
              fontvariant: 'fontVariant',
              'font-variant': 'fontVariant',
              fontweight: 'fontWeight',
              'font-weight': 'fontWeight',
              format: 'format',
              from: 'from',
              fx: 'fx',
              fy: 'fy',
              g1: 'g1',
              g2: 'g2',
              glyphname: 'glyphName',
              'glyph-name': 'glyphName',
              glyphorientationhorizontal: 'glyphOrientationHorizontal',
              'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
              glyphorientationvertical: 'glyphOrientationVertical',
              'glyph-orientation-vertical': 'glyphOrientationVertical',
              glyphref: 'glyphRef',
              gradienttransform: 'gradientTransform',
              gradientunits: 'gradientUnits',
              hanging: 'hanging',
              horizadvx: 'horizAdvX',
              'horiz-adv-x': 'horizAdvX',
              horizoriginx: 'horizOriginX',
              'horiz-origin-x': 'horizOriginX',
              ideographic: 'ideographic',
              imagerendering: 'imageRendering',
              'image-rendering': 'imageRendering',
              in2: 'in2',
              in: 'in',
              inlist: 'inlist',
              intercept: 'intercept',
              k1: 'k1',
              k2: 'k2',
              k3: 'k3',
              k4: 'k4',
              k: 'k',
              kernelmatrix: 'kernelMatrix',
              kernelunitlength: 'kernelUnitLength',
              kerning: 'kerning',
              keypoints: 'keyPoints',
              keysplines: 'keySplines',
              keytimes: 'keyTimes',
              lengthadjust: 'lengthAdjust',
              letterspacing: 'letterSpacing',
              'letter-spacing': 'letterSpacing',
              lightingcolor: 'lightingColor',
              'lighting-color': 'lightingColor',
              limitingconeangle: 'limitingConeAngle',
              local: 'local',
              markerend: 'markerEnd',
              'marker-end': 'markerEnd',
              markerheight: 'markerHeight',
              markermid: 'markerMid',
              'marker-mid': 'markerMid',
              markerstart: 'markerStart',
              'marker-start': 'markerStart',
              markerunits: 'markerUnits',
              markerwidth: 'markerWidth',
              mask: 'mask',
              maskcontentunits: 'maskContentUnits',
              maskunits: 'maskUnits',
              mathematical: 'mathematical',
              mode: 'mode',
              numoctaves: 'numOctaves',
              offset: 'offset',
              opacity: 'opacity',
              operator: 'operator',
              order: 'order',
              orient: 'orient',
              orientation: 'orientation',
              origin: 'origin',
              overflow: 'overflow',
              overlineposition: 'overlinePosition',
              'overline-position': 'overlinePosition',
              overlinethickness: 'overlineThickness',
              'overline-thickness': 'overlineThickness',
              paintorder: 'paintOrder',
              'paint-order': 'paintOrder',
              panose1: 'panose1',
              'panose-1': 'panose1',
              pathlength: 'pathLength',
              patterncontentunits: 'patternContentUnits',
              patterntransform: 'patternTransform',
              patternunits: 'patternUnits',
              pointerevents: 'pointerEvents',
              'pointer-events': 'pointerEvents',
              points: 'points',
              pointsatx: 'pointsAtX',
              pointsaty: 'pointsAtY',
              pointsatz: 'pointsAtZ',
              prefix: 'prefix',
              preservealpha: 'preserveAlpha',
              preserveaspectratio: 'preserveAspectRatio',
              primitiveunits: 'primitiveUnits',
              property: 'property',
              r: 'r',
              radius: 'radius',
              refx: 'refX',
              refy: 'refY',
              renderingintent: 'renderingIntent',
              'rendering-intent': 'renderingIntent',
              repeatcount: 'repeatCount',
              repeatdur: 'repeatDur',
              requiredextensions: 'requiredExtensions',
              requiredfeatures: 'requiredFeatures',
              resource: 'resource',
              restart: 'restart',
              result: 'result',
              results: 'results',
              rotate: 'rotate',
              rx: 'rx',
              ry: 'ry',
              scale: 'scale',
              security: 'security',
              seed: 'seed',
              shaperendering: 'shapeRendering',
              'shape-rendering': 'shapeRendering',
              slope: 'slope',
              spacing: 'spacing',
              specularconstant: 'specularConstant',
              specularexponent: 'specularExponent',
              speed: 'speed',
              spreadmethod: 'spreadMethod',
              startoffset: 'startOffset',
              stddeviation: 'stdDeviation',
              stemh: 'stemh',
              stemv: 'stemv',
              stitchtiles: 'stitchTiles',
              stopcolor: 'stopColor',
              'stop-color': 'stopColor',
              stopopacity: 'stopOpacity',
              'stop-opacity': 'stopOpacity',
              strikethroughposition: 'strikethroughPosition',
              'strikethrough-position': 'strikethroughPosition',
              strikethroughthickness: 'strikethroughThickness',
              'strikethrough-thickness': 'strikethroughThickness',
              string: 'string',
              stroke: 'stroke',
              strokedasharray: 'strokeDasharray',
              'stroke-dasharray': 'strokeDasharray',
              strokedashoffset: 'strokeDashoffset',
              'stroke-dashoffset': 'strokeDashoffset',
              strokelinecap: 'strokeLinecap',
              'stroke-linecap': 'strokeLinecap',
              strokelinejoin: 'strokeLinejoin',
              'stroke-linejoin': 'strokeLinejoin',
              strokemiterlimit: 'strokeMiterlimit',
              'stroke-miterlimit': 'strokeMiterlimit',
              strokewidth: 'strokeWidth',
              'stroke-width': 'strokeWidth',
              strokeopacity: 'strokeOpacity',
              'stroke-opacity': 'strokeOpacity',
              suppresscontenteditablewarning: 'suppressContentEditableWarning',
              suppresshydrationwarning: 'suppressHydrationWarning',
              surfacescale: 'surfaceScale',
              systemlanguage: 'systemLanguage',
              tablevalues: 'tableValues',
              targetx: 'targetX',
              targety: 'targetY',
              textanchor: 'textAnchor',
              'text-anchor': 'textAnchor',
              textdecoration: 'textDecoration',
              'text-decoration': 'textDecoration',
              textlength: 'textLength',
              textrendering: 'textRendering',
              'text-rendering': 'textRendering',
              to: 'to',
              transform: 'transform',
              typeof: 'typeof',
              u1: 'u1',
              u2: 'u2',
              underlineposition: 'underlinePosition',
              'underline-position': 'underlinePosition',
              underlinethickness: 'underlineThickness',
              'underline-thickness': 'underlineThickness',
              unicode: 'unicode',
              unicodebidi: 'unicodeBidi',
              'unicode-bidi': 'unicodeBidi',
              unicoderange: 'unicodeRange',
              'unicode-range': 'unicodeRange',
              unitsperem: 'unitsPerEm',
              'units-per-em': 'unitsPerEm',
              unselectable: 'unselectable',
              valphabetic: 'vAlphabetic',
              'v-alphabetic': 'vAlphabetic',
              values: 'values',
              vectoreffect: 'vectorEffect',
              'vector-effect': 'vectorEffect',
              version: 'version',
              vertadvy: 'vertAdvY',
              'vert-adv-y': 'vertAdvY',
              vertoriginx: 'vertOriginX',
              'vert-origin-x': 'vertOriginX',
              vertoriginy: 'vertOriginY',
              'vert-origin-y': 'vertOriginY',
              vhanging: 'vHanging',
              'v-hanging': 'vHanging',
              videographic: 'vIdeographic',
              'v-ideographic': 'vIdeographic',
              viewbox: 'viewBox',
              viewtarget: 'viewTarget',
              visibility: 'visibility',
              vmathematical: 'vMathematical',
              'v-mathematical': 'vMathematical',
              vocab: 'vocab',
              widths: 'widths',
              wordspacing: 'wordSpacing',
              'word-spacing': 'wordSpacing',
              writingmode: 'writingMode',
              'writing-mode': 'writingMode',
              x1: 'x1',
              x2: 'x2',
              x: 'x',
              xchannelselector: 'xChannelSelector',
              xheight: 'xHeight',
              'x-height': 'xHeight',
              xlinkactuate: 'xlinkActuate',
              'xlink:actuate': 'xlinkActuate',
              xlinkarcrole: 'xlinkArcrole',
              'xlink:arcrole': 'xlinkArcrole',
              xlinkhref: 'xlinkHref',
              'xlink:href': 'xlinkHref',
              xlinkrole: 'xlinkRole',
              'xlink:role': 'xlinkRole',
              xlinkshow: 'xlinkShow',
              'xlink:show': 'xlinkShow',
              xlinktitle: 'xlinkTitle',
              'xlink:title': 'xlinkTitle',
              xlinktype: 'xlinkType',
              'xlink:type': 'xlinkType',
              xmlbase: 'xmlBase',
              'xml:base': 'xmlBase',
              xmllang: 'xmlLang',
              'xml:lang': 'xmlLang',
              xmlns: 'xmlns',
              'xml:space': 'xmlSpace',
              xmlnsxlink: 'xmlnsXlink',
              'xmlns:xlink': 'xmlnsXlink',
              xmlspace: 'xmlSpace',
              y1: 'y1',
              y2: 'y2',
              y: 'y',
              ychannelselector: 'yChannelSelector',
              z: 'z',
              zoomandpan: 'zoomAndPan',
            },
            iv = {
              'aria-current': 0,
              // state
              'aria-description': 0,
              'aria-details': 0,
              'aria-disabled': 0,
              // state
              'aria-hidden': 0,
              // state
              'aria-invalid': 0,
              // state
              'aria-keyshortcuts': 0,
              'aria-label': 0,
              'aria-roledescription': 0,
              // Widget Attributes
              'aria-autocomplete': 0,
              'aria-checked': 0,
              'aria-expanded': 0,
              'aria-haspopup': 0,
              'aria-level': 0,
              'aria-modal': 0,
              'aria-multiline': 0,
              'aria-multiselectable': 0,
              'aria-orientation': 0,
              'aria-placeholder': 0,
              'aria-pressed': 0,
              'aria-readonly': 0,
              'aria-required': 0,
              'aria-selected': 0,
              'aria-sort': 0,
              'aria-valuemax': 0,
              'aria-valuemin': 0,
              'aria-valuenow': 0,
              'aria-valuetext': 0,
              // Live Region Attributes
              'aria-atomic': 0,
              'aria-busy': 0,
              'aria-live': 0,
              'aria-relevant': 0,
              // Drag-and-Drop Attributes
              'aria-dropeffect': 0,
              'aria-grabbed': 0,
              // Relationship Attributes
              'aria-activedescendant': 0,
              'aria-colcount': 0,
              'aria-colindex': 0,
              'aria-colspan': 0,
              'aria-controls': 0,
              'aria-describedby': 0,
              'aria-errormessage': 0,
              'aria-flowto': 0,
              'aria-labelledby': 0,
              'aria-owns': 0,
              'aria-posinset': 0,
              'aria-rowcount': 0,
              'aria-rowindex': 0,
              'aria-rowspan': 0,
              'aria-setsize': 0,
            },
            ra = {},
            Rf = new RegExp('^(aria)-[' + Re + ']*$'),
            lo = new RegExp('^(aria)[A-Z][' + Re + ']*$');
          function xf(e, t) {
            {
              if ($n.call(ra, t) && ra[t]) return !0;
              if (lo.test(t)) {
                var a = 'aria-' + t.slice(4).toLowerCase(),
                  i = iv.hasOwnProperty(a) ? a : null;
                if (i == null)
                  return (
                    g(
                      'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.',
                      t,
                    ),
                    (ra[t] = !0),
                    !0
                  );
                if (t !== i)
                  return (
                    g('Invalid ARIA attribute `%s`. Did you mean `%s`?', t, i), (ra[t] = !0), !0
                  );
              }
              if (Rf.test(t)) {
                var u = t.toLowerCase(),
                  s = iv.hasOwnProperty(u) ? u : null;
                if (s == null) return (ra[t] = !0), !1;
                if (t !== s)
                  return (
                    g('Unknown ARIA attribute `%s`. Did you mean `%s`?', t, s), (ra[t] = !0), !0
                  );
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
              var s = a
                .map(function (f) {
                  return '`' + f + '`';
                })
                .join(', ');
              a.length === 1
                ? g(
                    'Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props',
                    s,
                    e,
                  )
                : a.length > 1 &&
                  g(
                    'Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props',
                    s,
                    e,
                  );
            }
          }
          function Rs(e, t) {
            Ua(e, t) || lv(e, t);
          }
          var Zi = !1;
          function wf(e, t) {
            {
              if (e !== 'input' && e !== 'textarea' && e !== 'select') return;
              t != null &&
                t.value === null &&
                !Zi &&
                ((Zi = !0),
                e === 'select' && t.multiple
                  ? g(
                      '`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.',
                      e,
                    )
                  : g(
                      '`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.',
                      e,
                    ));
            }
          }
          var Df = function () {};
          {
            var Jt = {},
              kf = /^on./,
              uv = /^on[^A-Z]/,
              ov = new RegExp('^(aria)-[' + Re + ']*$'),
              sv = new RegExp('^(aria)[A-Z][' + Re + ']*$');
            Df = function (e, t, a, i) {
              if ($n.call(Jt, t) && Jt[t]) return !0;
              var u = t.toLowerCase();
              if (u === 'onfocusin' || u === 'onfocusout')
                return (
                  g(
                    'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.',
                  ),
                  (Jt[t] = !0),
                  !0
                );
              if (i != null) {
                var s = i.registrationNameDependencies,
                  f = i.possibleRegistrationNames;
                if (s.hasOwnProperty(t)) return !0;
                var p = f.hasOwnProperty(u) ? f[u] : null;
                if (p != null)
                  return (
                    g('Invalid event handler property `%s`. Did you mean `%s`?', t, p),
                    (Jt[t] = !0),
                    !0
                  );
                if (kf.test(t))
                  return (
                    g('Unknown event handler property `%s`. It will be ignored.', t),
                    (Jt[t] = !0),
                    !0
                  );
              } else if (kf.test(t))
                return (
                  uv.test(t) &&
                    g(
                      'Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.',
                      t,
                    ),
                  (Jt[t] = !0),
                  !0
                );
              if (ov.test(t) || sv.test(t)) return !0;
              if (u === 'innerhtml')
                return (
                  g(
                    'Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.',
                  ),
                  (Jt[t] = !0),
                  !0
                );
              if (u === 'aria')
                return (
                  g(
                    'The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.',
                  ),
                  (Jt[t] = !0),
                  !0
                );
              if (u === 'is' && a !== null && a !== void 0 && typeof a != 'string')
                return (
                  g(
                    'Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.',
                    typeof a,
                  ),
                  (Jt[t] = !0),
                  !0
                );
              if (typeof a == 'number' && isNaN(a))
                return (
                  g(
                    'Received NaN for the `%s` attribute. If this is expected, cast the value to a string.',
                    t,
                  ),
                  (Jt[t] = !0),
                  !0
                );
              var v = da(t),
                m = v !== null && v.type === oi;
              if (Ts.hasOwnProperty(u)) {
                var y = Ts[u];
                if (y !== t)
                  return g('Invalid DOM property `%s`. Did you mean `%s`?', t, y), (Jt[t] = !0), !0;
              } else if (!m && t !== u)
                return (
                  g(
                    'React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.',
                    t,
                    u,
                  ),
                  (Jt[t] = !0),
                  !0
                );
              return typeof a == 'boolean' && wr(t, a, v, !1)
                ? (a
                    ? g(
                        'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                        a,
                        t,
                        t,
                        a,
                        t,
                      )
                    : g(
                        'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                        a,
                        t,
                        t,
                        a,
                        t,
                        t,
                        t,
                      ),
                  (Jt[t] = !0),
                  !0)
                : m
                  ? !0
                  : wr(t, a, v, !1)
                    ? ((Jt[t] = !0), !1)
                    : ((a === 'false' || a === 'true') &&
                        v !== null &&
                        v.type === Qn &&
                        (g(
                          'Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?',
                          a,
                          t,
                          a === 'false'
                            ? 'The browser will interpret it as a truthy value.'
                            : 'Although this works, it will not work as expected if you pass the string "false".',
                          t,
                          a,
                        ),
                        (Jt[t] = !0)),
                      !0);
            };
          }
          var cv = function (e, t, a) {
            {
              var i = [];
              for (var u in t) {
                var s = Df(e, u, t[u], a);
                s || i.push(u);
              }
              var f = i
                .map(function (p) {
                  return '`' + p + '`';
                })
                .join(', ');
              i.length === 1
                ? g(
                    'Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ',
                    f,
                    e,
                  )
                : i.length > 1 &&
                  g(
                    'Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ',
                    f,
                    e,
                  );
            }
          };
          function fv(e, t, a) {
            Ua(e, t) || cv(e, t, a);
          }
          var Aa = 1,
            uo = 2,
            Ji = 4,
            Im = Aa | uo | Ji,
            oo = null;
          function so(e) {
            oo !== null &&
              g(
                'Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue.',
              ),
              (oo = e);
          }
          function Gm() {
            oo === null &&
              g(
                'Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue.',
              ),
              (oo = null);
          }
          function dv(e) {
            return e === oo;
          }
          function xs(e) {
            var t = e.target || e.srcElement || window;
            return (
              t.correspondingUseElement && (t = t.correspondingUseElement),
              t.nodeType === za ? t.parentNode : t
            );
          }
          var dt = null,
            hi = null,
            Ha = null;
          function eu(e) {
            var t = Du(e);
            if (t) {
              if (typeof dt != 'function')
                throw new Error(
                  'setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.',
                );
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
          function ws(e) {
            hi ? (Ha ? Ha.push(e) : (Ha = [e])) : (hi = e);
          }
          function co() {
            return hi !== null || Ha !== null;
          }
          function fo() {
            if (hi) {
              var e = hi,
                t = Ha;
              if (((hi = null), (Ha = null), eu(e), t)) for (var a = 0; a < t.length; a++) eu(t[a]);
            }
          }
          var el = function (e, t) {
              return e(t);
            },
            bf = function () {},
            _f = !1;
          function Wm() {
            var e = co();
            e && (bf(), fo());
          }
          function Of(e, t, a) {
            if (_f) return e(t, a);
            _f = !0;
            try {
              return el(e, t, a);
            } finally {
              (_f = !1), Wm();
            }
          }
          function Ds(e, t, a) {
            (el = e), (bf = a);
          }
          function ks(e) {
            return e === 'button' || e === 'input' || e === 'select' || e === 'textarea';
          }
          function Mf(e, t, a) {
            switch (e) {
              case 'onClick':
              case 'onClickCapture':
              case 'onDoubleClick':
              case 'onDoubleClickCapture':
              case 'onMouseDown':
              case 'onMouseDownCapture':
              case 'onMouseMove':
              case 'onMouseMoveCapture':
              case 'onMouseUp':
              case 'onMouseUpCapture':
              case 'onMouseEnter':
                return !!(a.disabled && ks(t));
              default:
                return !1;
            }
          }
          function tl(e, t) {
            var a = e.stateNode;
            if (a === null) return null;
            var i = dh(a);
            if (i === null) return null;
            var u = i[t];
            if (Mf(t, e.type, i)) return null;
            if (u && typeof u != 'function')
              throw new Error(
                'Expected `' +
                  t +
                  '` listener to be a function, instead got a value of `' +
                  typeof u +
                  '` type.',
              );
            return u;
          }
          var po = !1;
          if (gn)
            try {
              var nl = {};
              Object.defineProperty(nl, 'passive', {
                get: function () {
                  po = !0;
                },
              }),
                window.addEventListener('test', nl, nl),
                window.removeEventListener('test', nl, nl);
            } catch {
              po = !1;
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
          if (
            typeof window < 'u' &&
            typeof window.dispatchEvent == 'function' &&
            typeof document < 'u' &&
            typeof document.createEvent == 'function'
          ) {
            var Nf = document.createElement('react');
            Lf = function (t, a, i, u, s, f, p, v, m) {
              if (typeof document > 'u' || document === null)
                throw new Error(
                  'The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.',
                );
              var y = document.createEvent('Event'),
                R = !1,
                E = !0,
                _ = window.event,
                O = Object.getOwnPropertyDescriptor(window, 'event');
              function z() {
                Nf.removeEventListener(U, Ee, !1),
                  typeof window.event < 'u' && window.hasOwnProperty('event') && (window.event = _);
              }
              var ae = Array.prototype.slice.call(arguments, 3);
              function Ee() {
                (R = !0), z(), a.apply(i, ae), (E = !1);
              }
              var ye,
                Xe = !1,
                Qe = !1;
              function D(k) {
                if (
                  ((ye = k.error),
                  (Xe = !0),
                  ye === null && k.colno === 0 && k.lineno === 0 && (Qe = !0),
                  k.defaultPrevented && ye != null && typeof ye == 'object')
                )
                  try {
                    ye._suppressLogging = !0;
                  } catch {}
              }
              var U = 'react-' + (t || 'invokeguardedcallback');
              if (
                (window.addEventListener('error', D),
                Nf.addEventListener(U, Ee, !1),
                y.initEvent(U, !1, !1),
                Nf.dispatchEvent(y),
                O && Object.defineProperty(window, 'event', O),
                R &&
                  E &&
                  (Xe
                    ? Qe &&
                      (ye = new Error(
                        "A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.",
                      ))
                    : (ye = new Error(
                        `An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`,
                      )),
                  this.onError(ye)),
                window.removeEventListener('error', D),
                !R)
              )
                return z(), vv.apply(this, arguments);
            };
          }
          var Xm = Lf,
            mi = !1,
            aa = null,
            vo = !1,
            yi = null,
            va = {
              onError: function (e) {
                (mi = !0), (aa = e);
              },
            };
          function rl(e, t, a, i, u, s, f, p, v) {
            (mi = !1), (aa = null), Xm.apply(va, arguments);
          }
          function Fa(e, t, a, i, u, s, f, p, v) {
            if ((rl.apply(this, arguments), mi)) {
              var m = Uf();
              vo || ((vo = !0), (yi = m));
            }
          }
          function zf() {
            if (vo) {
              var e = yi;
              throw ((vo = !1), (yi = null), e);
            }
          }
          function Km() {
            return mi;
          }
          function Uf() {
            if (mi) {
              var e = aa;
              return (mi = !1), (aa = null), e;
            } else
              throw new Error(
                'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.',
              );
          }
          function Or(e) {
            return e._reactInternals;
          }
          function ho(e) {
            return e._reactInternals !== void 0;
          }
          function tu(e, t) {
            e._reactInternals = t;
          }
          var Ce =
              /*                      */
              0,
            gi =
              /*                */
              1,
            ht =
              /*                    */
              2,
            Ae =
              /*                       */
              4,
            Je =
              /*                */
              16,
            et =
              /*                 */
              32,
            ha =
              /*                     */
              64,
            Me =
              /*                   */
              128,
            Ot =
              /*            */
              256,
            Gn =
              /*                          */
              512,
            Mr =
              /*                     */
              1024,
            Ct =
              /*                      */
              2048,
            Lr =
              /*                    */
              4096,
            Si =
              /*                   */
              8192,
            mo =
              /*             */
              16384,
            bs = Ct | Ae | ha | Gn | Mr | mo,
            hv =
              /*               */
              32767,
            cr =
              /*                   */
              32768,
            en =
              /*                */
              65536,
            yo =
              /* */
              131072,
            Af =
              /*                       */
              1048576,
            Hf =
              /*                    */
              2097152,
            Wn =
              /*                 */
              4194304,
            Ci =
              /*                */
              8388608,
            Xn =
              /*               */
              16777216,
            al =
              /*              */
              33554432,
            nu =
              // TODO: Remove Update flag from before mutation phase by re-landing Visibility
              // flag logic (see #20043)
              Ae | Mr | 0,
            Kn = ht | Ae | Je | et | Gn | Lr | Si,
            En = Ae | ha | Gn | Si,
            Nr = Ct | Je,
            un = Wn | Ci | Hf,
            Va = w.ReactCurrentOwner;
          function fr(e) {
            var t = e,
              a = e;
            if (e.alternate) for (; t.return; ) t = t.return;
            else {
              var i = t;
              do (t = i), (t.flags & (ht | Lr)) !== Ce && (a = t.return), (i = t.return);
              while (i);
            }
            return t.tag === F ? a : null;
          }
          function Ff(e) {
            if (e.tag === Te) {
              var t = e.memoizedState;
              if (t === null) {
                var a = e.alternate;
                a !== null && (t = a.memoizedState);
              }
              if (t !== null) return t.dehydrated;
            }
            return null;
          }
          function _s(e) {
            return e.tag === F ? e.stateNode.containerInfo : null;
          }
          function Vf(e) {
            return fr(e) === e;
          }
          function dr(e) {
            {
              var t = Va.current;
              if (t !== null && t.tag === G) {
                var a = t,
                  i = a.stateNode;
                i._warnedAboutRefsInRender ||
                  g(
                    '%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.',
                    Ue(a) || 'A component',
                  ),
                  (i._warnedAboutRefsInRender = !0);
              }
            }
            var u = Or(e);
            return u ? fr(u) === u : !1;
          }
          function qn(e) {
            if (fr(e) !== e) throw new Error('Unable to find node on an unmounted component.');
          }
          function mt(e) {
            var t = e.alternate;
            if (!t) {
              var a = fr(e);
              if (a === null) throw new Error('Unable to find node on an unmounted component.');
              return a !== e ? null : e;
            }
            for (var i = e, u = t; ; ) {
              var s = i.return;
              if (s === null) break;
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
                  if (v === i) return qn(s), e;
                  if (v === u) return qn(s), t;
                  v = v.sibling;
                }
                throw new Error('Unable to find node on an unmounted component.');
              }
              if (i.return !== u.return) (i = s), (u = f);
              else {
                for (var m = !1, y = s.child; y; ) {
                  if (y === i) {
                    (m = !0), (i = s), (u = f);
                    break;
                  }
                  if (y === u) {
                    (m = !0), (u = s), (i = f);
                    break;
                  }
                  y = y.sibling;
                }
                if (!m) {
                  for (y = f.child; y; ) {
                    if (y === i) {
                      (m = !0), (i = f), (u = s);
                      break;
                    }
                    if (y === u) {
                      (m = !0), (u = f), (i = s);
                      break;
                    }
                    y = y.sibling;
                  }
                  if (!m)
                    throw new Error(
                      'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.',
                    );
                }
              }
              if (i.alternate !== u)
                throw new Error(
                  "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.",
                );
            }
            if (i.tag !== F) throw new Error('Unable to find node on an unmounted component.');
            return i.stateNode.current === i ? e : t;
          }
          function zr(e) {
            var t = mt(e);
            return t !== null ? Bf(t) : null;
          }
          function Bf(e) {
            if (e.tag === K || e.tag === me) return e;
            for (var t = e.child; t !== null; ) {
              var a = Bf(t);
              if (a !== null) return a;
              t = t.sibling;
            }
            return null;
          }
          function mv(e) {
            var t = mt(e);
            return t !== null ? Os(t) : null;
          }
          function Os(e) {
            if (e.tag === K || e.tag === me) return e;
            for (var t = e.child; t !== null; ) {
              if (t.tag !== P) {
                var a = Os(t);
                if (a !== null) return a;
              }
              t = t.sibling;
            }
            return null;
          }
          var Ms = N.unstable_scheduleCallback,
            yv = N.unstable_cancelCallback,
            Ls = N.unstable_shouldYield,
            gv = N.unstable_requestPaint,
            Tt = N.unstable_now,
            jf = N.unstable_getCurrentPriorityLevel,
            Ns = N.unstable_ImmediatePriority,
            pr = N.unstable_UserBlockingPriority,
            ma = N.unstable_NormalPriority,
            zs = N.unstable_LowPriority,
            Ei = N.unstable_IdlePriority,
            Pf = N.unstable_yieldValue,
            Yf = N.unstable_setDisableYieldValue,
            Ti = null,
            tn = null,
            W = null,
            zt = !1,
            on = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u';
          function $f(e) {
            if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u') return !1;
            var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (t.isDisabled) return !0;
            if (!t.supportsFiber)
              return (
                g(
                  'The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools',
                ),
                !0
              );
            try {
              ii &&
                (e = Ye({}, e, {
                  getLaneLabelMap: xi,
                  injectProfilingHooks: ja,
                })),
                (Ti = t.inject(e)),
                (tn = t);
            } catch (a) {
              g('React instrumentation encountered an error: %s.', a);
            }
            return !!t.checkDCE;
          }
          function Sv(e, t) {
            if (tn && typeof tn.onScheduleFiberRoot == 'function')
              try {
                tn.onScheduleFiberRoot(Ti, e, t);
              } catch (a) {
                zt || ((zt = !0), g('React instrumentation encountered an error: %s', a));
              }
          }
          function Ba(e, t) {
            if (tn && typeof tn.onCommitFiberRoot == 'function')
              try {
                var a = (e.current.flags & Me) === Me;
                if (_n) {
                  var i;
                  switch (t) {
                    case Tn:
                      i = Ns;
                      break;
                    case sn:
                      i = pr;
                      break;
                    case Ya:
                      i = ma;
                      break;
                    case Do:
                      i = Ei;
                      break;
                    default:
                      i = ma;
                      break;
                  }
                  tn.onCommitFiberRoot(Ti, e, i, a);
                }
              } catch (u) {
                zt || ((zt = !0), g('React instrumentation encountered an error: %s', u));
              }
          }
          function Ri(e) {
            if (tn && typeof tn.onPostCommitFiberRoot == 'function')
              try {
                tn.onPostCommitFiberRoot(Ti, e);
              } catch (t) {
                zt || ((zt = !0), g('React instrumentation encountered an error: %s', t));
              }
          }
          function Qf(e) {
            if (tn && typeof tn.onCommitFiberUnmount == 'function')
              try {
                tn.onCommitFiberUnmount(Ti, e);
              } catch (t) {
                zt || ((zt = !0), g('React instrumentation encountered an error: %s', t));
              }
          }
          function It(e) {
            if (
              (typeof Pf == 'function' && (Yf(e), he(e)),
              tn && typeof tn.setStrictMode == 'function')
            )
              try {
                tn.setStrictMode(Ti, e);
              } catch (t) {
                zt || ((zt = !0), g('React instrumentation encountered an error: %s', t));
              }
          }
          function ja(e) {
            W = e;
          }
          function xi() {
            {
              for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < yt; a++) {
                var i = qm(t);
                e.set(t, i), (t *= 2);
              }
              return e;
            }
          }
          function Us(e) {
            W !== null && typeof W.markCommitStarted == 'function' && W.markCommitStarted(e);
          }
          function If() {
            W !== null && typeof W.markCommitStopped == 'function' && W.markCommitStopped();
          }
          function wi(e) {
            W !== null &&
              typeof W.markComponentRenderStarted == 'function' &&
              W.markComponentRenderStarted(e);
          }
          function il() {
            W !== null &&
              typeof W.markComponentRenderStopped == 'function' &&
              W.markComponentRenderStopped();
          }
          function Cv(e) {
            W !== null &&
              typeof W.markComponentPassiveEffectMountStarted == 'function' &&
              W.markComponentPassiveEffectMountStarted(e);
          }
          function Gf() {
            W !== null &&
              typeof W.markComponentPassiveEffectMountStopped == 'function' &&
              W.markComponentPassiveEffectMountStopped();
          }
          function As(e) {
            W !== null &&
              typeof W.markComponentPassiveEffectUnmountStarted == 'function' &&
              W.markComponentPassiveEffectUnmountStarted(e);
          }
          function Ev() {
            W !== null &&
              typeof W.markComponentPassiveEffectUnmountStopped == 'function' &&
              W.markComponentPassiveEffectUnmountStopped();
          }
          function Tv(e) {
            W !== null &&
              typeof W.markComponentLayoutEffectMountStarted == 'function' &&
              W.markComponentLayoutEffectMountStarted(e);
          }
          function Rv() {
            W !== null &&
              typeof W.markComponentLayoutEffectMountStopped == 'function' &&
              W.markComponentLayoutEffectMountStopped();
          }
          function Hs(e) {
            W !== null &&
              typeof W.markComponentLayoutEffectUnmountStarted == 'function' &&
              W.markComponentLayoutEffectUnmountStarted(e);
          }
          function ru() {
            W !== null &&
              typeof W.markComponentLayoutEffectUnmountStopped == 'function' &&
              W.markComponentLayoutEffectUnmountStopped();
          }
          function Fs(e, t, a) {
            W !== null &&
              typeof W.markComponentErrored == 'function' &&
              W.markComponentErrored(e, t, a);
          }
          function xv(e, t, a) {
            W !== null &&
              typeof W.markComponentSuspended == 'function' &&
              W.markComponentSuspended(e, t, a);
          }
          function wv(e) {
            W !== null &&
              typeof W.markLayoutEffectsStarted == 'function' &&
              W.markLayoutEffectsStarted(e);
          }
          function au() {
            W !== null &&
              typeof W.markLayoutEffectsStopped == 'function' &&
              W.markLayoutEffectsStopped();
          }
          function Dv(e) {
            W !== null &&
              typeof W.markPassiveEffectsStarted == 'function' &&
              W.markPassiveEffectsStarted(e);
          }
          function go() {
            W !== null &&
              typeof W.markPassiveEffectsStopped == 'function' &&
              W.markPassiveEffectsStopped();
          }
          function ia(e) {
            W !== null && typeof W.markRenderStarted == 'function' && W.markRenderStarted(e);
          }
          function So() {
            W !== null && typeof W.markRenderYielded == 'function' && W.markRenderYielded();
          }
          function iu() {
            W !== null && typeof W.markRenderStopped == 'function' && W.markRenderStopped();
          }
          function ll(e) {
            W !== null && typeof W.markRenderScheduled == 'function' && W.markRenderScheduled(e);
          }
          function Wf(e, t) {
            W !== null &&
              typeof W.markForceUpdateScheduled == 'function' &&
              W.markForceUpdateScheduled(e, t);
          }
          function Di(e, t) {
            W !== null &&
              typeof W.markStateUpdateScheduled == 'function' &&
              W.markStateUpdateScheduled(e, t);
          }
          var xe =
              /*                         */
              0,
            Be =
              /*                 */
              1,
            we =
              /*                    */
              2,
            Rt =
              /*               */
              8,
            Ur =
              /*              */
              16,
            Vs = Math.clz32 ? Math.clz32 : ul,
            Bs = Math.log,
            Xf = Math.LN2;
          function ul(e) {
            var t = e >>> 0;
            return t === 0 ? 32 : (31 - ((Bs(t) / Xf) | 0)) | 0;
          }
          var yt = 31,
            A =
              /*                        */
              0,
            Ge =
              /*                          */
              0,
            ke =
              /*                        */
              1,
            ya =
              /*    */
              2,
            vr =
              /*             */
              4,
            ol =
              /*            */
              8,
            gt =
              /*                     */
              16,
            sl =
              /*                */
              32,
            ki =
              /*                       */
              4194240,
            cl =
              /*                        */
              64,
            Ar =
              /*                        */
              128,
            Zn =
              /*                        */
              256,
            fl =
              /*                        */
              512,
            Co =
              /*                        */
              1024,
            Eo =
              /*                        */
              2048,
            js =
              /*                        */
              4096,
            Ps =
              /*                        */
              8192,
            Ys =
              /*                        */
              16384,
            $s =
              /*                       */
              32768,
            Qs =
              /*                       */
              65536,
            Is =
              /*                       */
              131072,
            Gs =
              /*                       */
              262144,
            Ws =
              /*                       */
              524288,
            dl =
              /*                       */
              1048576,
            Xs =
              /*                       */
              2097152,
            pl =
              /*                            */
              130023424,
            Pa =
              /*                             */
              4194304,
            Ks =
              /*                             */
              8388608,
            To =
              /*                             */
              16777216,
            qs =
              /*                             */
              33554432,
            Zs =
              /*                             */
              67108864,
            Kf = Pa,
            lu =
              /*          */
              134217728,
            Js =
              /*                          */
              268435455,
            uu =
              /*               */
              268435456,
            bi =
              /*                        */
              536870912,
            Jn =
              /*                   */
              1073741824;
          function qm(e) {
            {
              if (e & ke) return 'Sync';
              if (e & ya) return 'InputContinuousHydration';
              if (e & vr) return 'InputContinuous';
              if (e & ol) return 'DefaultHydration';
              if (e & gt) return 'Default';
              if (e & sl) return 'TransitionHydration';
              if (e & ki) return 'Transition';
              if (e & pl) return 'Retry';
              if (e & lu) return 'SelectiveHydration';
              if (e & uu) return 'IdleHydration';
              if (e & bi) return 'Idle';
              if (e & Jn) return 'Offscreen';
            }
          }
          var pt = -1,
            ec = cl,
            tc = Pa;
          function ou(e) {
            switch (jt(e)) {
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
              case Ar:
              case Zn:
              case fl:
              case Co:
              case Eo:
              case js:
              case Ps:
              case Ys:
              case $s:
              case Qs:
              case Is:
              case Gs:
              case Ws:
              case dl:
              case Xs:
                return e & ki;
              case Pa:
              case Ks:
              case To:
              case qs:
              case Zs:
                return e & pl;
              case lu:
                return lu;
              case uu:
                return uu;
              case bi:
                return bi;
              case Jn:
                return Jn;
              default:
                return g('Should have found matching lanes. This is a bug in React.'), e;
            }
          }
          function Ro(e, t) {
            var a = e.pendingLanes;
            if (a === A) return A;
            var i = A,
              u = e.suspendedLanes,
              s = e.pingedLanes,
              f = a & Js;
            if (f !== A) {
              var p = f & ~u;
              if (p !== A) i = ou(p);
              else {
                var v = f & s;
                v !== A && (i = ou(v));
              }
            } else {
              var m = a & ~u;
              m !== A ? (i = ou(m)) : s !== A && (i = ou(s));
            }
            if (i === A) return A;
            if (
              t !== A &&
              t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
              // bother waiting until the root is complete.
              (t & u) === A
            ) {
              var y = jt(i),
                R = jt(t);
              if (
                // Tests whether the next lane is equal or lower priority than the wip
                // one. This works because the bits decrease in priority as you go left.
                y >= R || // Default priority updates should not interrupt transition updates. The
                // only difference between default updates and transition updates is that
                // default updates do not support refresh transitions.
                (y === gt && (R & ki) !== A)
              )
                return t;
            }
            (i & vr) !== A && (i |= a & gt);
            var E = e.entangledLanes;
            if (E !== A)
              for (var _ = e.entanglements, O = i & E; O > 0; ) {
                var z = _i(O),
                  ae = 1 << z;
                (i |= _[z]), (O &= ~ae);
              }
            return i;
          }
          function kv(e, t) {
            for (var a = e.eventTimes, i = pt; t > 0; ) {
              var u = _i(t),
                s = 1 << u,
                f = a[u];
              f > i && (i = f), (t &= ~s);
            }
            return i;
          }
          function nc(e, t) {
            switch (e) {
              case ke:
              case ya:
              case vr:
                return t + 250;
              case ol:
              case gt:
              case sl:
              case cl:
              case Ar:
              case Zn:
              case fl:
              case Co:
              case Eo:
              case js:
              case Ps:
              case Ys:
              case $s:
              case Qs:
              case Is:
              case Gs:
              case Ws:
              case dl:
              case Xs:
                return t + 5e3;
              case Pa:
              case Ks:
              case To:
              case qs:
              case Zs:
                return pt;
              case lu:
              case uu:
              case bi:
              case Jn:
                return pt;
              default:
                return g('Should have found matching lanes. This is a bug in React.'), pt;
            }
          }
          function Zm(e, t) {
            for (
              var a = e.pendingLanes,
                i = e.suspendedLanes,
                u = e.pingedLanes,
                s = e.expirationTimes,
                f = a;
              f > 0;

            ) {
              var p = _i(f),
                v = 1 << p,
                m = s[p];
              m === pt
                ? ((v & i) === A || (v & u) !== A) && (s[p] = nc(v, t))
                : m <= t && (e.expiredLanes |= v),
                (f &= ~v);
            }
          }
          function Jm(e) {
            return ou(e.pendingLanes);
          }
          function qf(e) {
            var t = e.pendingLanes & ~Jn;
            return t !== A ? t : t & Jn ? Jn : A;
          }
          function su(e) {
            return (e & ke) !== A;
          }
          function xo(e) {
            return (e & Js) !== A;
          }
          function rc(e) {
            return (e & pl) === e;
          }
          function ey(e) {
            var t = ke | vr | gt;
            return (e & t) === A;
          }
          function bv(e) {
            return (e & ki) === e;
          }
          function wo(e, t) {
            var a = ya | vr | ol | gt;
            return (t & a) !== A;
          }
          function _v(e, t) {
            return (t & e.expiredLanes) !== A;
          }
          function Zf(e) {
            return (e & ki) !== A;
          }
          function Jf() {
            var e = ec;
            return (ec <<= 1), (ec & ki) === A && (ec = cl), e;
          }
          function ty() {
            var e = tc;
            return (tc <<= 1), (tc & pl) === A && (tc = Pa), e;
          }
          function jt(e) {
            return e & -e;
          }
          function Gt(e) {
            return jt(e);
          }
          function _i(e) {
            return 31 - Vs(e);
          }
          function ac(e) {
            return _i(e);
          }
          function er(e, t) {
            return (e & t) !== A;
          }
          function vl(e, t) {
            return (e & t) === t;
          }
          function He(e, t) {
            return e | t;
          }
          function cu(e, t) {
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
          function ic(e) {
            for (var t = [], a = 0; a < yt; a++) t.push(e);
            return t;
          }
          function hl(e, t, a) {
            (e.pendingLanes |= t), t !== bi && ((e.suspendedLanes = A), (e.pingedLanes = A));
            var i = e.eventTimes,
              u = ac(t);
            i[u] = a;
          }
          function td(e, t) {
            (e.suspendedLanes |= t), (e.pingedLanes &= ~t);
            for (var a = e.expirationTimes, i = t; i > 0; ) {
              var u = _i(i),
                s = 1 << u;
              (a[u] = pt), (i &= ~s);
            }
          }
          function nd(e, t, a) {
            e.pingedLanes |= e.suspendedLanes & t;
          }
          function rd(e, t) {
            var a = e.pendingLanes & ~t;
            (e.pendingLanes = t),
              (e.suspendedLanes = A),
              (e.pingedLanes = A),
              (e.expiredLanes &= t),
              (e.mutableReadLanes &= t),
              (e.entangledLanes &= t);
            for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
              var p = _i(f),
                v = 1 << p;
              (i[p] = A), (u[p] = pt), (s[p] = pt), (f &= ~v);
            }
          }
          function fu(e, t) {
            for (var a = (e.entangledLanes |= t), i = e.entanglements, u = a; u; ) {
              var s = _i(u),
                f = 1 << s;
              // Is this one of the newly entangled lanes?
              (f & t) | // Is this lane transitively entangled with the newly entangled lanes?
                (i[s] & t) && (i[s] |= t),
                (u &= ~f);
            }
          }
          function ny(e, t) {
            var a = jt(t),
              i;
            switch (a) {
              case vr:
                i = ya;
                break;
              case gt:
                i = ol;
                break;
              case cl:
              case Ar:
              case Zn:
              case fl:
              case Co:
              case Eo:
              case js:
              case Ps:
              case Ys:
              case $s:
              case Qs:
              case Is:
              case Gs:
              case Ws:
              case dl:
              case Xs:
              case Pa:
              case Ks:
              case To:
              case qs:
              case Zs:
                i = sl;
                break;
              case bi:
                i = uu;
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
                var u = ac(a),
                  s = 1 << u,
                  f = i[u];
                f.add(t), (a &= ~s);
              }
          }
          function lc(e, t) {
            if (on)
              for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
                var u = ac(t),
                  s = 1 << u,
                  f = a[u];
                f.size > 0 &&
                  (f.forEach(function (p) {
                    var v = p.alternate;
                    (v === null || !i.has(v)) && i.add(p);
                  }),
                  f.clear()),
                  (t &= ~s);
              }
          }
          function id(e, t) {
            return null;
          }
          var Tn = ke,
            sn = vr,
            Ya = gt,
            Do = bi,
            ml = Ge;
          function Hr() {
            return ml;
          }
          function Wt(e) {
            ml = e;
          }
          function ko(e, t) {
            var a = ml;
            try {
              return (ml = e), t();
            } finally {
              ml = a;
            }
          }
          function Rn(e, t) {
            return e !== 0 && e < t ? e : t;
          }
          function ry(e, t) {
            return e === 0 || e > t ? e : t;
          }
          function ld(e, t) {
            return e !== 0 && e < t;
          }
          function bo(e) {
            var t = jt(e);
            return ld(Tn, t) ? (ld(sn, t) ? (xo(t) ? Ya : Do) : sn) : Tn;
          }
          function Xt(e) {
            var t = e.current.memoizedState;
            return t.isDehydrated;
          }
          var Lv;
          function ue(e) {
            Lv = e;
          }
          function du(e) {
            Lv(e);
          }
          var _o;
          function Nv(e) {
            _o = e;
          }
          var zv;
          function Oo(e) {
            zv = e;
          }
          var Mo;
          function ud(e) {
            Mo = e;
          }
          var od;
          function Uv(e) {
            od = e;
          }
          var uc = !1,
            pu = [],
            ga = null,
            Et = null,
            nn = null,
            Fr = /* @__PURE__ */ new Map(),
            vu = /* @__PURE__ */ new Map(),
            $a = [],
            la = [
              'mousedown',
              'mouseup',
              'touchcancel',
              'touchend',
              'touchstart',
              'auxclick',
              'dblclick',
              'pointercancel',
              'pointerdown',
              'pointerup',
              'dragend',
              'dragstart',
              'drop',
              'compositionend',
              'compositionstart',
              'keydown',
              'keypress',
              'keyup',
              'input',
              'textInput',
              // Intentionally camelCase
              'copy',
              'cut',
              'paste',
              'click',
              'change',
              'contextmenu',
              'reset',
              'submit',
            ];
          function Av(e) {
            return la.indexOf(e) > -1;
          }
          function Sa(e, t, a, i, u) {
            return {
              blockedOn: e,
              domEventName: t,
              eventSystemFlags: a,
              nativeEvent: u,
              targetContainers: [i],
            };
          }
          function Hv(e, t) {
            switch (e) {
              case 'focusin':
              case 'focusout':
                ga = null;
                break;
              case 'dragenter':
              case 'dragleave':
                Et = null;
                break;
              case 'mouseover':
              case 'mouseout':
                nn = null;
                break;
              case 'pointerover':
              case 'pointerout': {
                var a = t.pointerId;
                Fr.delete(a);
                break;
              }
              case 'gotpointercapture':
              case 'lostpointercapture': {
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
                var p = Du(t);
                p !== null && _o(p);
              }
              return f;
            }
            e.eventSystemFlags |= i;
            var v = e.targetContainers;
            return u !== null && v.indexOf(u) === -1 && v.push(u), e;
          }
          function Fv(e, t, a, i, u) {
            switch (t) {
              case 'focusin': {
                var s = u;
                return (ga = hu(ga, e, t, a, i, s)), !0;
              }
              case 'dragenter': {
                var f = u;
                return (Et = hu(Et, e, t, a, i, f)), !0;
              }
              case 'mouseover': {
                var p = u;
                return (nn = hu(nn, e, t, a, i, p)), !0;
              }
              case 'pointerover': {
                var v = u,
                  m = v.pointerId;
                return Fr.set(m, hu(Fr.get(m) || null, e, t, a, i, v)), !0;
              }
              case 'gotpointercapture': {
                var y = u,
                  R = y.pointerId;
                return vu.set(R, hu(vu.get(R) || null, e, t, a, i, y)), !0;
              }
            }
            return !1;
          }
          function sd(e) {
            var t = Bo(e.target);
            if (t !== null) {
              var a = fr(t);
              if (a !== null) {
                var i = a.tag;
                if (i === Te) {
                  var u = Ff(a);
                  if (u !== null) {
                    (e.blockedOn = u),
                      od(e.priority, function () {
                        zv(a);
                      });
                    return;
                  }
                } else if (i === F) {
                  var s = a.stateNode;
                  if (Xt(s)) {
                    e.blockedOn = _s(a);
                    return;
                  }
                }
              }
            }
            e.blockedOn = null;
          }
          function Vv(e) {
            for (
              var t = Mo(),
                a = {
                  blockedOn: null,
                  target: e,
                  priority: t,
                },
                i = 0;
              i < $a.length && ld(t, $a[i].priority);
              i++
            );
            $a.splice(i, 0, a), i === 0 && sd(a);
          }
          function oc(e) {
            if (e.blockedOn !== null) return !1;
            for (var t = e.targetContainers; t.length > 0; ) {
              var a = t[0],
                i = yl(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
              if (i === null) {
                var u = e.nativeEvent,
                  s = new u.constructor(u.type, u);
                so(s), u.target.dispatchEvent(s), Gm();
              } else {
                var f = Du(i);
                return f !== null && _o(f), (e.blockedOn = i), !1;
              }
              t.shift();
            }
            return !0;
          }
          function Lo(e, t, a) {
            oc(e) && a.delete(t);
          }
          function cd() {
            (uc = !1),
              ga !== null && oc(ga) && (ga = null),
              Et !== null && oc(Et) && (Et = null),
              nn !== null && oc(nn) && (nn = null),
              Fr.forEach(Lo),
              vu.forEach(Lo);
          }
          function xn(e, t) {
            e.blockedOn === t &&
              ((e.blockedOn = null),
              uc || ((uc = !0), N.unstable_scheduleCallback(N.unstable_NormalPriority, cd)));
          }
          function $e(e) {
            if (pu.length > 0) {
              xn(pu[0], e);
              for (var t = 1; t < pu.length; t++) {
                var a = pu[t];
                a.blockedOn === e && (a.blockedOn = null);
              }
            }
            ga !== null && xn(ga, e), Et !== null && xn(Et, e), nn !== null && xn(nn, e);
            var i = function (p) {
              return xn(p, e);
            };
            Fr.forEach(i), vu.forEach(i);
            for (var u = 0; u < $a.length; u++) {
              var s = $a[u];
              s.blockedOn === e && (s.blockedOn = null);
            }
            for (; $a.length > 0; ) {
              var f = $a[0];
              if (f.blockedOn !== null) break;
              sd(f), f.blockedOn === null && $a.shift();
            }
          }
          var xt = w.ReactCurrentBatchConfig,
            Mt = !0;
          function rn(e) {
            Mt = !!e;
          }
          function hr() {
            return Mt;
          }
          function mu(e, t, a) {
            var i = Mn(t),
              u;
            switch (i) {
              case Tn:
                u = Kt;
                break;
              case sn:
                u = No;
                break;
              case Ya:
              default:
                u = Qa;
                break;
            }
            return u.bind(null, t, a, e);
          }
          function Kt(e, t, a, i) {
            var u = Hr(),
              s = xt.transition;
            xt.transition = null;
            try {
              Wt(Tn), Qa(e, t, a, i);
            } finally {
              Wt(u), (xt.transition = s);
            }
          }
          function No(e, t, a, i) {
            var u = Hr(),
              s = xt.transition;
            xt.transition = null;
            try {
              Wt(sn), Qa(e, t, a, i);
            } finally {
              Wt(u), (xt.transition = s);
            }
          }
          function Qa(e, t, a, i) {
            Mt && sc(e, t, a, i);
          }
          function sc(e, t, a, i) {
            var u = yl(e, t, a, i);
            if (u === null) {
              Ry(e, t, i, yu, a), Hv(e, i);
              return;
            }
            if (Fv(u, e, t, a, i)) {
              i.stopPropagation();
              return;
            }
            if ((Hv(e, i), t & Ji && Av(e))) {
              for (; u !== null; ) {
                var s = Du(u);
                s !== null && du(s);
                var f = yl(e, t, a, i);
                if ((f === null && Ry(e, t, i, yu, a), f === u)) break;
                u = f;
              }
              u !== null && i.stopPropagation();
              return;
            }
            Ry(e, t, i, null, a);
          }
          var yu = null;
          function yl(e, t, a, i) {
            yu = null;
            var u = xs(i),
              s = Bo(u);
            if (s !== null) {
              var f = fr(s);
              if (f === null) s = null;
              else {
                var p = f.tag;
                if (p === Te) {
                  var v = Ff(f);
                  if (v !== null) return v;
                  s = null;
                } else if (p === F) {
                  var m = f.stateNode;
                  if (Xt(m)) return _s(f);
                  s = null;
                } else f !== s && (s = null);
              }
            }
            return (yu = s), null;
          }
          function Mn(e) {
            switch (e) {
              case 'cancel':
              case 'click':
              case 'close':
              case 'contextmenu':
              case 'copy':
              case 'cut':
              case 'auxclick':
              case 'dblclick':
              case 'dragend':
              case 'dragstart':
              case 'drop':
              case 'focusin':
              case 'focusout':
              case 'input':
              case 'invalid':
              case 'keydown':
              case 'keypress':
              case 'keyup':
              case 'mousedown':
              case 'mouseup':
              case 'paste':
              case 'pause':
              case 'play':
              case 'pointercancel':
              case 'pointerdown':
              case 'pointerup':
              case 'ratechange':
              case 'reset':
              case 'resize':
              case 'seeked':
              case 'submit':
              case 'touchcancel':
              case 'touchend':
              case 'touchstart':
              case 'volumechange':
              case 'change':
              case 'selectionchange':
              case 'textInput':
              case 'compositionstart':
              case 'compositionend':
              case 'compositionupdate':
              case 'beforeblur':
              case 'afterblur':
              case 'beforeinput':
              case 'blur':
              case 'fullscreenchange':
              case 'focus':
              case 'hashchange':
              case 'popstate':
              case 'select':
              case 'selectstart':
                return Tn;
              case 'drag':
              case 'dragenter':
              case 'dragexit':
              case 'dragleave':
              case 'dragover':
              case 'mousemove':
              case 'mouseout':
              case 'mouseover':
              case 'pointermove':
              case 'pointerout':
              case 'pointerover':
              case 'scroll':
              case 'toggle':
              case 'touchmove':
              case 'wheel':
              case 'mouseenter':
              case 'mouseleave':
              case 'pointerenter':
              case 'pointerleave':
                return sn;
              case 'message': {
                var t = jf();
                switch (t) {
                  case Ns:
                    return Tn;
                  case pr:
                    return sn;
                  case ma:
                  case zs:
                    return Ya;
                  case Ei:
                    return Do;
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
          function gu(e, t, a) {
            return e.addEventListener(t, a, !0), a;
          }
          function Ia(e, t, a, i) {
            return (
              e.addEventListener(t, a, {
                capture: !0,
                passive: i,
              }),
              a
            );
          }
          function cc(e, t, a, i) {
            return (
              e.addEventListener(t, a, {
                passive: i,
              }),
              a
            );
          }
          var gl = null,
            Ca = null,
            Oi = null;
          function Mi(e) {
            return (gl = e), (Ca = dc()), !0;
          }
          function fc() {
            (gl = null), (Ca = null), (Oi = null);
          }
          function Su() {
            if (Oi) return Oi;
            var e,
              t = Ca,
              a = t.length,
              i,
              u = dc(),
              s = u.length;
            for (e = 0; e < a && t[e] === u[e]; e++);
            var f = a - e;
            for (i = 1; i <= f && t[a - i] === u[s - i]; i++);
            var p = i > 1 ? 1 - i : void 0;
            return (Oi = u.slice(e, p)), Oi;
          }
          function dc() {
            return 'value' in gl ? gl.value : gl.textContent;
          }
          function Sl(e) {
            var t,
              a = e.keyCode;
            return (
              'charCode' in e ? ((t = e.charCode), t === 0 && a === 13 && (t = 13)) : (t = a),
              t === 10 && (t = 13),
              t >= 32 || t === 13 ? t : 0
            );
          }
          function Cl() {
            return !0;
          }
          function wn() {
            return !1;
          }
          function Pt(e) {
            function t(a, i, u, s, f) {
              (this._reactName = a),
                (this._targetInst = u),
                (this.type = i),
                (this.nativeEvent = s),
                (this.target = f),
                (this.currentTarget = null);
              for (var p in e)
                if (e.hasOwnProperty(p)) {
                  var v = e[p];
                  v ? (this[p] = v(s)) : (this[p] = s[p]);
                }
              var m = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
              return (
                m ? (this.isDefaultPrevented = Cl) : (this.isDefaultPrevented = wn),
                (this.isPropagationStopped = wn),
                this
              );
            }
            return (
              Ye(t.prototype, {
                preventDefault: function () {
                  this.defaultPrevented = !0;
                  var a = this.nativeEvent;
                  a &&
                    (a.preventDefault
                      ? a.preventDefault()
                      : typeof a.returnValue != 'unknown' && (a.returnValue = !1),
                    (this.isDefaultPrevented = Cl));
                },
                stopPropagation: function () {
                  var a = this.nativeEvent;
                  a &&
                    (a.stopPropagation
                      ? a.stopPropagation()
                      : typeof a.cancelBubble != 'unknown' && (a.cancelBubble = !0),
                    (this.isPropagationStopped = Cl));
                },
                /**
                 * We release all dispatched `SyntheticEvent`s after each event loop, adding
                 * them back into the pool. This allows a way to hold onto a reference that
                 * won't be added back into the pool.
                 */
                persist: function () {},
                /**
                 * Checks if this event should be released back into the pool.
                 *
                 * @return {boolean} True if this should not be released, false otherwise.
                 */
                isPersistent: Cl,
              }),
              t
            );
          }
          var Dn = {
              eventPhase: 0,
              bubbles: 0,
              cancelable: 0,
              timeStamp: function (e) {
                return e.timeStamp || Date.now();
              },
              defaultPrevented: 0,
              isTrusted: 0,
            },
            kn = Pt(Dn),
            Cu = Ye({}, Dn, {
              view: 0,
              detail: 0,
            }),
            dd = Pt(Cu),
            zo,
            pd,
            Vr;
          function Bv(e) {
            e !== Vr &&
              (Vr && e.type === 'mousemove'
                ? ((zo = e.screenX - Vr.screenX), (pd = e.screenY - Vr.screenY))
                : ((zo = 0), (pd = 0)),
              (Vr = e));
          }
          var Eu = Ye({}, Cu, {
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
              getModifierState: hc,
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
                return 'movementX' in e ? e.movementX : (Bv(e), zo);
              },
              movementY: function (e) {
                return 'movementY' in e ? e.movementY : pd;
              },
            }),
            Li = Pt(Eu),
            vd = Ye({}, Eu, {
              dataTransfer: 0,
            }),
            El = Pt(vd),
            jv = Ye({}, Cu, {
              relatedTarget: 0,
            }),
            pc = Pt(jv),
            hd = Ye({}, Dn, {
              animationName: 0,
              elapsedTime: 0,
              pseudoElement: 0,
            }),
            vc = Pt(hd),
            ay = Ye({}, Dn, {
              clipboardData: function (e) {
                return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
              },
            }),
            iy = Pt(ay),
            Pv = Ye({}, Dn, {
              data: 0,
            }),
            md = Pt(Pv),
            Tl = md,
            ly = {
              Esc: 'Escape',
              Spacebar: ' ',
              Left: 'ArrowLeft',
              Up: 'ArrowUp',
              Right: 'ArrowRight',
              Down: 'ArrowDown',
              Del: 'Delete',
              Win: 'OS',
              Menu: 'ContextMenu',
              Apps: 'ContextMenu',
              Scroll: 'ScrollLock',
              MozPrintableKey: 'Unidentified',
            },
            Tu = {
              8: 'Backspace',
              9: 'Tab',
              12: 'Clear',
              13: 'Enter',
              16: 'Shift',
              17: 'Control',
              18: 'Alt',
              19: 'Pause',
              20: 'CapsLock',
              27: 'Escape',
              32: ' ',
              33: 'PageUp',
              34: 'PageDown',
              35: 'End',
              36: 'Home',
              37: 'ArrowLeft',
              38: 'ArrowUp',
              39: 'ArrowRight',
              40: 'ArrowDown',
              45: 'Insert',
              46: 'Delete',
              112: 'F1',
              113: 'F2',
              114: 'F3',
              115: 'F4',
              116: 'F5',
              117: 'F6',
              118: 'F7',
              119: 'F8',
              120: 'F9',
              121: 'F10',
              122: 'F11',
              123: 'F12',
              144: 'NumLock',
              145: 'ScrollLock',
              224: 'Meta',
            };
          function Yv(e) {
            if (e.key) {
              var t = ly[e.key] || e.key;
              if (t !== 'Unidentified') return t;
            }
            if (e.type === 'keypress') {
              var a = Sl(e);
              return a === 13 ? 'Enter' : String.fromCharCode(a);
            }
            return e.type === 'keydown' || e.type === 'keyup'
              ? Tu[e.keyCode] || 'Unidentified'
              : '';
          }
          var Lt = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
          };
          function uy(e) {
            var t = this,
              a = t.nativeEvent;
            if (a.getModifierState) return a.getModifierState(e);
            var i = Lt[e];
            return i ? !!a[i] : !1;
          }
          function hc(e) {
            return uy;
          }
          var oy = Ye({}, Cu, {
              key: Yv,
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: hc,
              // Legacy Interface
              charCode: function (e) {
                return e.type === 'keypress' ? Sl(e) : 0;
              },
              keyCode: function (e) {
                return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
              },
              which: function (e) {
                return e.type === 'keypress'
                  ? Sl(e)
                  : e.type === 'keydown' || e.type === 'keyup'
                    ? e.keyCode
                    : 0;
              },
            }),
            sy = Pt(oy),
            $v = Ye({}, Eu, {
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
            yd = Pt($v),
            cy = Ye({}, Cu, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: hc,
            }),
            Br = Pt(cy),
            gd = Ye({}, Dn, {
              propertyName: 0,
              elapsedTime: 0,
              pseudoElement: 0,
            }),
            fy = Pt(gd),
            Ni = Ye({}, Eu, {
              deltaX: function (e) {
                return 'deltaX' in e
                  ? e.deltaX
                  : // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
                    'wheelDeltaX' in e
                    ? -e.wheelDeltaX
                    : 0;
              },
              deltaY: function (e) {
                return 'deltaY' in e
                  ? e.deltaY
                  : // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
                    'wheelDeltaY' in e
                    ? -e.wheelDeltaY
                    : // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
                      'wheelDelta' in e
                      ? -e.wheelDelta
                      : 0;
              },
              deltaZ: 0,
              // Browsers without "deltaMode" is reporting in raw wheel delta where one
              // notch on the scroll is always +/- 120, roughly equivalent to pixels.
              // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
              // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
              deltaMode: 0,
            }),
            mc = Pt(Ni),
            Rl = [9, 13, 27, 32],
            Uo = 229,
            Ao = gn && 'CompositionEvent' in window,
            xl = null;
          gn && 'documentMode' in document && (xl = document.documentMode);
          var dy = gn && 'TextEvent' in window && !xl,
            yc = gn && (!Ao || (xl && xl > 8 && xl <= 11)),
            Qv = 32,
            Sd = String.fromCharCode(Qv);
          function Iv() {
            Rr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
              Rr('onCompositionEnd', [
                'compositionend',
                'focusout',
                'keydown',
                'keypress',
                'keyup',
                'mousedown',
              ]),
              Rr('onCompositionStart', [
                'compositionstart',
                'focusout',
                'keydown',
                'keypress',
                'keyup',
                'mousedown',
              ]),
              Rr('onCompositionUpdate', [
                'compositionupdate',
                'focusout',
                'keydown',
                'keypress',
                'keyup',
                'mousedown',
              ]);
          }
          var Ho = !1;
          function gc(e) {
            return (
              (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
              !(e.ctrlKey && e.altKey)
            );
          }
          function Gv(e) {
            switch (e) {
              case 'compositionstart':
                return 'onCompositionStart';
              case 'compositionend':
                return 'onCompositionEnd';
              case 'compositionupdate':
                return 'onCompositionUpdate';
            }
          }
          function Cd(e, t) {
            return e === 'keydown' && t.keyCode === Uo;
          }
          function Wv(e, t) {
            switch (e) {
              case 'keyup':
                return Rl.indexOf(t.keyCode) !== -1;
              case 'keydown':
                return t.keyCode !== Uo;
              case 'keypress':
              case 'mousedown':
              case 'focusout':
                return !0;
              default:
                return !1;
            }
          }
          function Ed(e) {
            var t = e.detail;
            return typeof t == 'object' && 'data' in t ? t.data : null;
          }
          function Sc(e) {
            return e.locale === 'ko';
          }
          var Ga = !1;
          function Td(e, t, a, i, u) {
            var s, f;
            if (
              (Ao
                ? (s = Gv(t))
                : Ga
                  ? Wv(t, i) && (s = 'onCompositionEnd')
                  : Cd(t, i) && (s = 'onCompositionStart'),
              !s)
            )
              return null;
            yc &&
              !Sc(i) &&
              (!Ga && s === 'onCompositionStart'
                ? (Ga = Mi(u))
                : s === 'onCompositionEnd' && Ga && (f = Su()));
            var p = Jv(a, s);
            if (p.length > 0) {
              var v = new md(s, t, null, i, u);
              if (
                (e.push({
                  event: v,
                  listeners: p,
                }),
                f)
              )
                v.data = f;
              else {
                var m = Ed(i);
                m !== null && (v.data = m);
              }
            }
          }
          function Cc(e, t) {
            switch (e) {
              case 'compositionend':
                return Ed(t);
              case 'keypress':
                var a = t.which;
                return a !== Qv ? null : ((Ho = !0), Sd);
              case 'textInput':
                var i = t.data;
                return i === Sd && Ho ? null : i;
              default:
                return null;
            }
          }
          function Xv(e, t) {
            if (Ga) {
              if (e === 'compositionend' || (!Ao && Wv(e, t))) {
                var a = Su();
                return fc(), (Ga = !1), a;
              }
              return null;
            }
            switch (e) {
              case 'paste':
                return null;
              case 'keypress':
                if (!gc(t)) {
                  if (t.char && t.char.length > 1) return t.char;
                  if (t.which) return String.fromCharCode(t.which);
                }
                return null;
              case 'compositionend':
                return yc && !Sc(t) ? null : t.data;
              default:
                return null;
            }
          }
          function py(e, t, a, i, u) {
            var s;
            if ((dy ? (s = Cc(t, i)) : (s = Xv(t, i)), !s)) return null;
            var f = Jv(a, 'onBeforeInput');
            if (f.length > 0) {
              var p = new Tl('onBeforeInput', 'beforeinput', null, i, u);
              e.push({
                event: p,
                listeners: f,
              }),
                (p.data = s);
            }
          }
          function Ec(e, t, a, i, u, s, f) {
            Td(e, t, a, i, u), py(e, t, a, i, u);
          }
          var vy = {
            color: !0,
            date: !0,
            datetime: !0,
            'datetime-local': !0,
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
          function Ru(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === 'input' ? !!vy[e.type] : t === 'textarea';
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
          function hy(e) {
            if (!gn) return !1;
            var t = 'on' + e,
              a = t in document;
            if (!a) {
              var i = document.createElement('div');
              i.setAttribute(t, 'return;'), (a = typeof i[t] == 'function');
            }
            return a;
          }
          function Tc() {
            Rr('onChange', [
              'change',
              'click',
              'focusin',
              'focusout',
              'input',
              'keydown',
              'keyup',
              'selectionchange',
            ]);
          }
          function n(e, t, a, i) {
            ws(i);
            var u = Jv(t, 'onChange');
            if (u.length > 0) {
              var s = new kn('onChange', 'change', null, a, i);
              e.push({
                event: s,
                listeners: u,
              });
            }
          }
          var r = null,
            l = null;
          function o(e) {
            var t = e.nodeName && e.nodeName.toLowerCase();
            return t === 'select' || (t === 'input' && e.type === 'file');
          }
          function c(e) {
            var t = [];
            n(t, l, e, xs(e)), Of(d, t);
          }
          function d(e) {
            w0(e, 0);
          }
          function h(e) {
            var t = bc(e);
            if (Up(t)) return e;
          }
          function S(e, t) {
            if (e === 'change') return t;
          }
          var C = !1;
          gn && (C = hy('input') && (!document.documentMode || document.documentMode > 9));
          function M(e, t) {
            (r = e), (l = t), r.attachEvent('onpropertychange', Y);
          }
          function j() {
            r && (r.detachEvent('onpropertychange', Y), (r = null), (l = null));
          }
          function Y(e) {
            e.propertyName === 'value' && h(l) && c(e);
          }
          function B(e, t, a) {
            e === 'focusin' ? (j(), M(t, a)) : e === 'focusout' && j();
          }
          function te(e, t) {
            if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return h(l);
          }
          function ce(e) {
            var t = e.nodeName;
            return (
              t && t.toLowerCase() === 'input' && (e.type === 'checkbox' || e.type === 'radio')
            );
          }
          function pe(e, t) {
            if (e === 'click') return h(t);
          }
          function Ut(e, t) {
            if (e === 'input' || e === 'change') return h(t);
          }
          function x(e) {
            var t = e._wrapperState;
            !t || !t.controlled || e.type !== 'number' || pi(e, 'number', e.value);
          }
          function T(e, t, a, i, u, s, f) {
            var p = a ? bc(a) : window,
              v,
              m;
            if (
              (o(p) ? (v = S) : Ru(p) ? (C ? (v = Ut) : ((v = te), (m = B))) : ce(p) && (v = pe), v)
            ) {
              var y = v(t, a);
              if (y) {
                n(e, y, i, u);
                return;
              }
            }
            m && m(t, p, a), t === 'focusout' && x(p);
          }
          function b() {
            ba('onMouseEnter', ['mouseout', 'mouseover']),
              ba('onMouseLeave', ['mouseout', 'mouseover']),
              ba('onPointerEnter', ['pointerout', 'pointerover']),
              ba('onPointerLeave', ['pointerout', 'pointerover']);
          }
          function I(e, t, a, i, u, s, f) {
            var p = t === 'mouseover' || t === 'pointerover',
              v = t === 'mouseout' || t === 'pointerout';
            if (p && !dv(i)) {
              var m = i.relatedTarget || i.fromElement;
              if (m && (Bo(m) || Ad(m))) return;
            }
            if (!(!v && !p)) {
              var y;
              if (u.window === u) y = u;
              else {
                var R = u.ownerDocument;
                R ? (y = R.defaultView || R.parentWindow) : (y = window);
              }
              var E, _;
              if (v) {
                var O = i.relatedTarget || i.toElement;
                if (((E = a), (_ = O ? Bo(O) : null), _ !== null)) {
                  var z = fr(_);
                  (_ !== z || (_.tag !== K && _.tag !== me)) && (_ = null);
                }
              } else (E = null), (_ = a);
              if (E !== _) {
                var ae = Li,
                  Ee = 'onMouseLeave',
                  ye = 'onMouseEnter',
                  Xe = 'mouse';
                (t === 'pointerout' || t === 'pointerover') &&
                  ((ae = yd), (Ee = 'onPointerLeave'), (ye = 'onPointerEnter'), (Xe = 'pointer'));
                var Qe = E == null ? y : bc(E),
                  D = _ == null ? y : bc(_),
                  U = new ae(Ee, Xe + 'leave', E, i, u);
                (U.target = Qe), (U.relatedTarget = D);
                var k = null,
                  $ = Bo(u);
                if ($ === a) {
                  var ie = new ae(ye, Xe + 'enter', _, i, u);
                  (ie.target = D), (ie.relatedTarget = Qe), (k = ie);
                }
                kT(e, U, k, E, _);
              }
            }
          }
          function ve(e, t) {
            return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
          }
          var fe = typeof Object.is == 'function' ? Object.is : ve;
          function Se(e, t) {
            if (fe(e, t)) return !0;
            if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
            var a = Object.keys(e),
              i = Object.keys(t);
            if (a.length !== i.length) return !1;
            for (var u = 0; u < a.length; u++) {
              var s = a[u];
              if (!$n.call(t, s) || !fe(e[s], t[s])) return !1;
            }
            return !0;
          }
          function Le(e) {
            for (; e && e.firstChild; ) e = e.firstChild;
            return e;
          }
          function an(e) {
            for (; e; ) {
              if (e.nextSibling) return e.nextSibling;
              e = e.parentNode;
            }
          }
          function Ke(e, t) {
            for (var a = Le(e), i = 0, u = 0; a; ) {
              if (a.nodeType === za) {
                if (((u = i + a.textContent.length), i <= t && u >= t))
                  return {
                    node: a,
                    offset: t - i,
                  };
                i = u;
              }
              a = Le(an(a));
            }
          }
          function zi(e) {
            var t = e.ownerDocument,
              a = (t && t.defaultView) || window,
              i = a.getSelection && a.getSelection();
            if (!i || i.rangeCount === 0) return null;
            var u = i.anchorNode,
              s = i.anchorOffset,
              f = i.focusNode,
              p = i.focusOffset;
            try {
              u.nodeType, f.nodeType;
            } catch {
              return null;
            }
            return my(e, u, s, f, p);
          }
          function my(e, t, a, i, u) {
            var s = 0,
              f = -1,
              p = -1,
              v = 0,
              m = 0,
              y = e,
              R = null;
            e: for (;;) {
              for (
                var E = null;
                y === t && (a === 0 || y.nodeType === za) && (f = s + a),
                  y === i && (u === 0 || y.nodeType === za) && (p = s + u),
                  y.nodeType === za && (s += y.nodeValue.length),
                  (E = y.firstChild) !== null;

              )
                (R = y), (y = E);
              for (;;) {
                if (y === e) break e;
                if (
                  (R === t && ++v === a && (f = s),
                  R === i && ++m === u && (p = s),
                  (E = y.nextSibling) !== null)
                )
                  break;
                (y = R), (R = y.parentNode);
              }
              y = E;
            }
            return f === -1 || p === -1
              ? null
              : {
                  start: f,
                  end: p,
                };
          }
          function oT(e, t) {
            var a = e.ownerDocument || document,
              i = (a && a.defaultView) || window;
            if (i.getSelection) {
              var u = i.getSelection(),
                s = e.textContent.length,
                f = Math.min(t.start, s),
                p = t.end === void 0 ? f : Math.min(t.end, s);
              if (!u.extend && f > p) {
                var v = p;
                (p = f), (f = v);
              }
              var m = Ke(e, f),
                y = Ke(e, p);
              if (m && y) {
                if (
                  u.rangeCount === 1 &&
                  u.anchorNode === m.node &&
                  u.anchorOffset === m.offset &&
                  u.focusNode === y.node &&
                  u.focusOffset === y.offset
                )
                  return;
                var R = a.createRange();
                R.setStart(m.node, m.offset),
                  u.removeAllRanges(),
                  f > p
                    ? (u.addRange(R), u.extend(y.node, y.offset))
                    : (R.setEnd(y.node, y.offset), u.addRange(R));
              }
            }
          }
          function p0(e) {
            return e && e.nodeType === za;
          }
          function v0(e, t) {
            return !e || !t
              ? !1
              : e === t
                ? !0
                : p0(e)
                  ? !1
                  : p0(t)
                    ? v0(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : e.compareDocumentPosition
                        ? !!(e.compareDocumentPosition(t) & 16)
                        : !1;
          }
          function sT(e) {
            return e && e.ownerDocument && v0(e.ownerDocument.documentElement, e);
          }
          function cT(e) {
            try {
              return typeof e.contentWindow.location.href == 'string';
            } catch {
              return !1;
            }
          }
          function h0() {
            for (var e = window, t = fs(); t instanceof e.HTMLIFrameElement; ) {
              if (cT(t)) e = t.contentWindow;
              else return t;
              t = fs(e.document);
            }
            return t;
          }
          function yy(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return (
              t &&
              ((t === 'input' &&
                (e.type === 'text' ||
                  e.type === 'search' ||
                  e.type === 'tel' ||
                  e.type === 'url' ||
                  e.type === 'password')) ||
                t === 'textarea' ||
                e.contentEditable === 'true')
            );
          }
          function fT() {
            var e = h0();
            return {
              focusedElem: e,
              selectionRange: yy(e) ? pT(e) : null,
            };
          }
          function dT(e) {
            var t = h0(),
              a = e.focusedElem,
              i = e.selectionRange;
            if (t !== a && sT(a)) {
              i !== null && yy(a) && vT(a, i);
              for (var u = [], s = a; (s = s.parentNode); )
                s.nodeType === In &&
                  u.push({
                    element: s,
                    left: s.scrollLeft,
                    top: s.scrollTop,
                  });
              typeof a.focus == 'function' && a.focus();
              for (var f = 0; f < u.length; f++) {
                var p = u[f];
                (p.element.scrollLeft = p.left), (p.element.scrollTop = p.top);
              }
            }
          }
          function pT(e) {
            var t;
            return (
              'selectionStart' in e
                ? (t = {
                    start: e.selectionStart,
                    end: e.selectionEnd,
                  })
                : (t = zi(e)),
              t || {
                start: 0,
                end: 0,
              }
            );
          }
          function vT(e, t) {
            var a = t.start,
              i = t.end;
            i === void 0 && (i = a),
              'selectionStart' in e
                ? ((e.selectionStart = a), (e.selectionEnd = Math.min(i, e.value.length)))
                : oT(e, t);
          }
          var hT = gn && 'documentMode' in document && document.documentMode <= 11;
          function mT() {
            Rr('onSelect', [
              'focusout',
              'contextmenu',
              'dragend',
              'focusin',
              'keydown',
              'keyup',
              'mousedown',
              'mouseup',
              'selectionchange',
            ]);
          }
          var Rc = null,
            gy = null,
            Rd = null,
            Sy = !1;
          function yT(e) {
            if ('selectionStart' in e && yy(e))
              return {
                start: e.selectionStart,
                end: e.selectionEnd,
              };
            var t = (e.ownerDocument && e.ownerDocument.defaultView) || window,
              a = t.getSelection();
            return {
              anchorNode: a.anchorNode,
              anchorOffset: a.anchorOffset,
              focusNode: a.focusNode,
              focusOffset: a.focusOffset,
            };
          }
          function gT(e) {
            return e.window === e ? e.document : e.nodeType === na ? e : e.ownerDocument;
          }
          function m0(e, t, a) {
            var i = gT(a);
            if (!(Sy || Rc == null || Rc !== fs(i))) {
              var u = yT(Rc);
              if (!Rd || !Se(Rd, u)) {
                Rd = u;
                var s = Jv(gy, 'onSelect');
                if (s.length > 0) {
                  var f = new kn('onSelect', 'select', null, t, a);
                  e.push({
                    event: f,
                    listeners: s,
                  }),
                    (f.target = Rc);
                }
              }
            }
          }
          function ST(e, t, a, i, u, s, f) {
            var p = a ? bc(a) : window;
            switch (t) {
              case 'focusin':
                (Ru(p) || p.contentEditable === 'true') && ((Rc = p), (gy = a), (Rd = null));
                break;
              case 'focusout':
                (Rc = null), (gy = null), (Rd = null);
                break;
              case 'mousedown':
                Sy = !0;
                break;
              case 'contextmenu':
              case 'mouseup':
              case 'dragend':
                (Sy = !1), m0(e, i, u);
                break;
              case 'selectionchange':
                if (hT) break;
              case 'keydown':
              case 'keyup':
                m0(e, i, u);
            }
          }
          function Kv(e, t) {
            var a = {};
            return (
              (a[e.toLowerCase()] = t.toLowerCase()),
              (a['Webkit' + e] = 'webkit' + t),
              (a['Moz' + e] = 'moz' + t),
              a
            );
          }
          var xc = {
              animationend: Kv('Animation', 'AnimationEnd'),
              animationiteration: Kv('Animation', 'AnimationIteration'),
              animationstart: Kv('Animation', 'AnimationStart'),
              transitionend: Kv('Transition', 'TransitionEnd'),
            },
            Cy = {},
            y0 = {};
          gn &&
            ((y0 = document.createElement('div').style),
            'AnimationEvent' in window ||
              (delete xc.animationend.animation,
              delete xc.animationiteration.animation,
              delete xc.animationstart.animation),
            'TransitionEvent' in window || delete xc.transitionend.transition);
          function qv(e) {
            if (Cy[e]) return Cy[e];
            if (!xc[e]) return e;
            var t = xc[e];
            for (var a in t) if (t.hasOwnProperty(a) && a in y0) return (Cy[e] = t[a]);
            return e;
          }
          var g0 = qv('animationend'),
            S0 = qv('animationiteration'),
            C0 = qv('animationstart'),
            E0 = qv('transitionend'),
            T0 = /* @__PURE__ */ new Map(),
            R0 = [
              'abort',
              'auxClick',
              'cancel',
              'canPlay',
              'canPlayThrough',
              'click',
              'close',
              'contextMenu',
              'copy',
              'cut',
              'drag',
              'dragEnd',
              'dragEnter',
              'dragExit',
              'dragLeave',
              'dragOver',
              'dragStart',
              'drop',
              'durationChange',
              'emptied',
              'encrypted',
              'ended',
              'error',
              'gotPointerCapture',
              'input',
              'invalid',
              'keyDown',
              'keyPress',
              'keyUp',
              'load',
              'loadedData',
              'loadedMetadata',
              'loadStart',
              'lostPointerCapture',
              'mouseDown',
              'mouseMove',
              'mouseOut',
              'mouseOver',
              'mouseUp',
              'paste',
              'pause',
              'play',
              'playing',
              'pointerCancel',
              'pointerDown',
              'pointerMove',
              'pointerOut',
              'pointerOver',
              'pointerUp',
              'progress',
              'rateChange',
              'reset',
              'resize',
              'seeked',
              'seeking',
              'stalled',
              'submit',
              'suspend',
              'timeUpdate',
              'touchCancel',
              'touchEnd',
              'touchStart',
              'volumeChange',
              'scroll',
              'toggle',
              'touchMove',
              'waiting',
              'wheel',
            ];
          function xu(e, t) {
            T0.set(e, t), Rr(t, [e]);
          }
          function CT() {
            for (var e = 0; e < R0.length; e++) {
              var t = R0[e],
                a = t.toLowerCase(),
                i = t[0].toUpperCase() + t.slice(1);
              xu(a, 'on' + i);
            }
            xu(g0, 'onAnimationEnd'),
              xu(S0, 'onAnimationIteration'),
              xu(C0, 'onAnimationStart'),
              xu('dblclick', 'onDoubleClick'),
              xu('focusin', 'onFocus'),
              xu('focusout', 'onBlur'),
              xu(E0, 'onTransitionEnd');
          }
          function ET(e, t, a, i, u, s, f) {
            var p = T0.get(t);
            if (p !== void 0) {
              var v = kn,
                m = t;
              switch (t) {
                case 'keypress':
                  if (Sl(i) === 0) return;
                case 'keydown':
                case 'keyup':
                  v = sy;
                  break;
                case 'focusin':
                  (m = 'focus'), (v = pc);
                  break;
                case 'focusout':
                  (m = 'blur'), (v = pc);
                  break;
                case 'beforeblur':
                case 'afterblur':
                  v = pc;
                  break;
                case 'click':
                  if (i.button === 2) return;
                case 'auxclick':
                case 'dblclick':
                case 'mousedown':
                case 'mousemove':
                case 'mouseup':
                case 'mouseout':
                case 'mouseover':
                case 'contextmenu':
                  v = Li;
                  break;
                case 'drag':
                case 'dragend':
                case 'dragenter':
                case 'dragexit':
                case 'dragleave':
                case 'dragover':
                case 'dragstart':
                case 'drop':
                  v = El;
                  break;
                case 'touchcancel':
                case 'touchend':
                case 'touchmove':
                case 'touchstart':
                  v = Br;
                  break;
                case g0:
                case S0:
                case C0:
                  v = vc;
                  break;
                case E0:
                  v = fy;
                  break;
                case 'scroll':
                  v = dd;
                  break;
                case 'wheel':
                  v = mc;
                  break;
                case 'copy':
                case 'cut':
                case 'paste':
                  v = iy;
                  break;
                case 'gotpointercapture':
                case 'lostpointercapture':
                case 'pointercancel':
                case 'pointerdown':
                case 'pointermove':
                case 'pointerout':
                case 'pointerover':
                case 'pointerup':
                  v = yd;
                  break;
              }
              var y = (s & Ji) !== 0;
              {
                var R =
                    !y && // TODO: ideally, we'd eventually add all events from
                    // nonDelegatedEvents list in DOMPluginEventSystem.
                    // Then we can remove this special list.
                    // This is a breaking change that can wait until React 18.
                    t === 'scroll',
                  E = wT(a, p, i.type, y, R);
                if (E.length > 0) {
                  var _ = new v(p, m, null, i, u);
                  e.push({
                    event: _,
                    listeners: E,
                  });
                }
              }
            }
          }
          CT(), b(), Tc(), mT(), Iv();
          function TT(e, t, a, i, u, s, f) {
            ET(e, t, a, i, u, s);
            var p = (s & Im) === 0;
            p && (I(e, t, a, i, u), T(e, t, a, i, u), ST(e, t, a, i, u), Ec(e, t, a, i, u));
          }
          var xd = [
              'abort',
              'canplay',
              'canplaythrough',
              'durationchange',
              'emptied',
              'encrypted',
              'ended',
              'error',
              'loadeddata',
              'loadedmetadata',
              'loadstart',
              'pause',
              'play',
              'playing',
              'progress',
              'ratechange',
              'resize',
              'seeked',
              'seeking',
              'stalled',
              'suspend',
              'timeupdate',
              'volumechange',
              'waiting',
            ],
            Ey = new Set(['cancel', 'close', 'invalid', 'load', 'scroll', 'toggle'].concat(xd));
          function x0(e, t, a) {
            var i = e.type || 'unknown-event';
            (e.currentTarget = a), Fa(i, t, void 0, e), (e.currentTarget = null);
          }
          function RT(e, t, a) {
            var i;
            if (a)
              for (var u = t.length - 1; u >= 0; u--) {
                var s = t[u],
                  f = s.instance,
                  p = s.currentTarget,
                  v = s.listener;
                if (f !== i && e.isPropagationStopped()) return;
                x0(e, v, p), (i = f);
              }
            else
              for (var m = 0; m < t.length; m++) {
                var y = t[m],
                  R = y.instance,
                  E = y.currentTarget,
                  _ = y.listener;
                if (R !== i && e.isPropagationStopped()) return;
                x0(e, _, E), (i = R);
              }
          }
          function w0(e, t) {
            for (var a = (t & Ji) !== 0, i = 0; i < e.length; i++) {
              var u = e[i],
                s = u.event,
                f = u.listeners;
              RT(s, f, a);
            }
            zf();
          }
          function xT(e, t, a, i, u) {
            var s = xs(a),
              f = [];
            TT(f, e, i, a, s, t), w0(f, t);
          }
          function wt(e, t) {
            Ey.has(e) ||
              g(
                'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
                e,
              );
            var a = !1,
              i = ex(t),
              u = bT(e, a);
            i.has(u) || (D0(t, e, uo, a), i.add(u));
          }
          function Ty(e, t, a) {
            Ey.has(e) &&
              !t &&
              g(
                'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
                e,
              );
            var i = 0;
            t && (i |= Ji), D0(a, e, i, t);
          }
          var Zv = '_reactListening' + Math.random().toString(36).slice(2);
          function wd(e) {
            if (!e[Zv]) {
              (e[Zv] = !0),
                Wr.forEach(function (a) {
                  a !== 'selectionchange' && (Ey.has(a) || Ty(a, !1, e), Ty(a, !0, e));
                });
              var t = e.nodeType === na ? e : e.ownerDocument;
              t !== null && (t[Zv] || ((t[Zv] = !0), Ty('selectionchange', !1, t)));
            }
          }
          function D0(e, t, a, i, u) {
            var s = mu(e, t, a),
              f = void 0;
            po && (t === 'touchstart' || t === 'touchmove' || t === 'wheel') && (f = !0),
              (e = e),
              i
                ? f !== void 0
                  ? Ia(e, t, s, f)
                  : gu(e, t, s)
                : f !== void 0
                  ? cc(e, t, s, f)
                  : fd(e, t, s);
          }
          function k0(e, t) {
            return e === t || (e.nodeType === Bt && e.parentNode === t);
          }
          function Ry(e, t, a, i, u) {
            var s = i;
            if (!(t & Aa) && !(t & uo)) {
              var f = u;
              if (i !== null) {
                var p = i;
                e: for (;;) {
                  if (p === null) return;
                  var v = p.tag;
                  if (v === F || v === P) {
                    var m = p.stateNode.containerInfo;
                    if (k0(m, f)) break;
                    if (v === P)
                      for (var y = p.return; y !== null; ) {
                        var R = y.tag;
                        if (R === F || R === P) {
                          var E = y.stateNode.containerInfo;
                          if (k0(E, f)) return;
                        }
                        y = y.return;
                      }
                    for (; m !== null; ) {
                      var _ = Bo(m);
                      if (_ === null) return;
                      var O = _.tag;
                      if (O === K || O === me) {
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
            Of(function () {
              return xT(e, t, a, s);
            });
          }
          function Dd(e, t, a) {
            return {
              instance: e,
              listener: t,
              currentTarget: a,
            };
          }
          function wT(e, t, a, i, u, s) {
            for (
              var f = t !== null ? t + 'Capture' : null, p = i ? f : t, v = [], m = e, y = null;
              m !== null;

            ) {
              var R = m,
                E = R.stateNode,
                _ = R.tag;
              if (_ === K && E !== null && ((y = E), p !== null)) {
                var O = tl(m, p);
                O != null && v.push(Dd(m, O, y));
              }
              if (u) break;
              m = m.return;
            }
            return v;
          }
          function Jv(e, t) {
            for (var a = t + 'Capture', i = [], u = e; u !== null; ) {
              var s = u,
                f = s.stateNode,
                p = s.tag;
              if (p === K && f !== null) {
                var v = f,
                  m = tl(u, a);
                m != null && i.unshift(Dd(u, m, v));
                var y = tl(u, t);
                y != null && i.push(Dd(u, y, v));
              }
              u = u.return;
            }
            return i;
          }
          function wc(e) {
            if (e === null) return null;
            do e = e.return;
            while (e && e.tag !== K);
            return e || null;
          }
          function DT(e, t) {
            for (var a = e, i = t, u = 0, s = a; s; s = wc(s)) u++;
            for (var f = 0, p = i; p; p = wc(p)) f++;
            for (; u - f > 0; ) (a = wc(a)), u--;
            for (; f - u > 0; ) (i = wc(i)), f--;
            for (var v = u; v--; ) {
              if (a === i || (i !== null && a === i.alternate)) return a;
              (a = wc(a)), (i = wc(i));
            }
            return null;
          }
          function b0(e, t, a, i, u) {
            for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
              var v = p,
                m = v.alternate,
                y = v.stateNode,
                R = v.tag;
              if (m !== null && m === i) break;
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
            f.length !== 0 &&
              e.push({
                event: t,
                listeners: f,
              });
          }
          function kT(e, t, a, i, u) {
            var s = i && u ? DT(i, u) : null;
            i !== null && b0(e, t, i, s, !1), u !== null && a !== null && b0(e, a, u, s, !0);
          }
          function bT(e, t) {
            return e + '__' + (t ? 'capture' : 'bubble');
          }
          var jr = !1,
            kd = 'dangerouslySetInnerHTML',
            eh = 'suppressContentEditableWarning',
            wu = 'suppressHydrationWarning',
            _0 = 'autoFocus',
            Fo = 'children',
            Vo = 'style',
            th = '__html',
            xy,
            nh,
            bd,
            O0,
            rh,
            M0,
            L0;
          (xy = {
            // There are working polyfills for <dialog>. Let people use it.
            dialog: !0,
            // Electron ships a custom <webview> tag to display external web content in
            // an isolated frame and process.
            // This tag is not present in non Electron environments such as JSDom which
            // is often used for testing purposes.
            // @see https://electronjs.org/docs/api/webview-tag
            webview: !0,
          }),
            (nh = function (e, t) {
              Rs(e, t),
                wf(e, t),
                fv(e, t, {
                  registrationNameDependencies: ca,
                  possibleRegistrationNames: Pu,
                });
            }),
            (M0 = gn && !document.documentMode),
            (bd = function (e, t, a) {
              if (!jr) {
                var i = ah(a),
                  u = ah(t);
                u !== i &&
                  ((jr = !0),
                  g(
                    'Prop `%s` did not match. Server: %s Client: %s',
                    e,
                    JSON.stringify(u),
                    JSON.stringify(i),
                  ));
              }
            }),
            (O0 = function (e) {
              if (!jr) {
                jr = !0;
                var t = [];
                e.forEach(function (a) {
                  t.push(a);
                }),
                  g('Extra attributes from the server: %s', t);
              }
            }),
            (rh = function (e, t) {
              t === !1
                ? g(
                    'Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                    e,
                    e,
                    e,
                  )
                : g(
                    'Expected `%s` listener to be a function, instead got a value of `%s` type.',
                    e,
                    typeof t,
                  );
            }),
            (L0 = function (e, t) {
              var a =
                e.namespaceURI === Na
                  ? e.ownerDocument.createElement(e.tagName)
                  : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
              return (a.innerHTML = t), a.innerHTML;
            });
          var _T = /\r\n?/g,
            OT = /\u0000|\uFFFD/g;
          function ah(e) {
            Ii(e);
            var t = typeof e == 'string' ? e : '' + e;
            return t
              .replace(
                _T,
                `
`,
              )
              .replace(OT, '');
          }
          function ih(e, t, a, i) {
            var u = ah(t),
              s = ah(e);
            if (
              s !== u &&
              (i &&
                (jr ||
                  ((jr = !0), g('Text content did not match. Server: "%s" Client: "%s"', s, u))),
              a && Tr)
            )
              throw new Error('Text content does not match server-rendered HTML.');
          }
          function N0(e) {
            return e.nodeType === na ? e : e.ownerDocument;
          }
          function MT() {}
          function lh(e) {
            e.onclick = MT;
          }
          function LT(e, t, a, i, u) {
            for (var s in i)
              if (i.hasOwnProperty(s)) {
                var f = i[s];
                if (s === Vo) f && Object.freeze(f), tv(t, f);
                else if (s === kd) {
                  var p = f ? f[th] : void 0;
                  p != null && $p(t, p);
                } else if (s === Fo)
                  if (typeof f == 'string') {
                    var v = e !== 'textarea' || f !== '';
                    v && Ss(t, f);
                  } else typeof f == 'number' && Ss(t, '' + f);
                else
                  s === eh ||
                    s === wu ||
                    s === _0 ||
                    (ca.hasOwnProperty(s)
                      ? f != null &&
                        (typeof f != 'function' && rh(s, f), s === 'onScroll' && wt('scroll', t))
                      : f != null && Gi(t, s, f, u));
              }
          }
          function NT(e, t, a, i) {
            for (var u = 0; u < t.length; u += 2) {
              var s = t[u],
                f = t[u + 1];
              s === Vo ? tv(e, f) : s === kd ? $p(e, f) : s === Fo ? Ss(e, f) : Gi(e, s, f, i);
            }
          }
          function zT(e, t, a, i) {
            var u,
              s = N0(a),
              f,
              p = i;
            if ((p === Na && (p = ys(e)), p === Na)) {
              if (
                ((u = Ua(e, t)),
                !u &&
                  e !== e.toLowerCase() &&
                  g(
                    '<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.',
                    e,
                  ),
                e === 'script')
              ) {
                var v = s.createElement('div');
                v.innerHTML = '<script></script>';
                var m = v.firstChild;
                f = v.removeChild(m);
              } else if (typeof t.is == 'string')
                f = s.createElement(e, {
                  is: t.is,
                });
              else if (((f = s.createElement(e)), e === 'select')) {
                var y = f;
                t.multiple ? (y.multiple = !0) : t.size && (y.size = t.size);
              }
            } else f = s.createElementNS(p, e);
            return (
              p === Na &&
                !u &&
                Object.prototype.toString.call(f) === '[object HTMLUnknownElement]' &&
                !$n.call(xy, e) &&
                ((xy[e] = !0),
                g(
                  'The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.',
                  e,
                )),
              f
            );
          }
          function UT(e, t) {
            return N0(t).createTextNode(e);
          }
          function AT(e, t, a, i) {
            var u = Ua(t, a);
            nh(t, a);
            var s;
            switch (t) {
              case 'dialog':
                wt('cancel', e), wt('close', e), (s = a);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                wt('load', e), (s = a);
                break;
              case 'video':
              case 'audio':
                for (var f = 0; f < xd.length; f++) wt(xd[f], e);
                s = a;
                break;
              case 'source':
                wt('error', e), (s = a);
                break;
              case 'img':
              case 'image':
              case 'link':
                wt('error', e), wt('load', e), (s = a);
                break;
              case 'details':
                wt('toggle', e), (s = a);
                break;
              case 'input':
                to(e, a), (s = eo(e, a)), wt('invalid', e);
                break;
              case 'option':
                hs(e, a), (s = a);
                break;
              case 'select':
                Bp(e, a), (s = vf(e, a)), wt('invalid', e);
                break;
              case 'textarea':
                jp(e, a), (s = mf(e, a)), wt('invalid', e);
                break;
              default:
                s = a;
            }
            switch ((Es(t, s), LT(t, e, i, s, u), t)) {
              case 'input':
                Ki(e), no(e, a, !1);
                break;
              case 'textarea':
                Ki(e), Yp(e);
                break;
              case 'option':
                pf(e, a);
                break;
              case 'select':
                Um(e, a);
                break;
              default:
                typeof s.onClick == 'function' && lh(e);
                break;
            }
          }
          function HT(e, t, a, i, u) {
            nh(t, i);
            var s = null,
              f,
              p;
            switch (t) {
              case 'input':
                (f = eo(e, a)), (p = eo(e, i)), (s = []);
                break;
              case 'select':
                (f = vf(e, a)), (p = vf(e, i)), (s = []);
                break;
              case 'textarea':
                (f = mf(e, a)), (p = mf(e, i)), (s = []);
                break;
              default:
                (f = a),
                  (p = i),
                  typeof f.onClick != 'function' && typeof p.onClick == 'function' && lh(e);
                break;
            }
            Es(t, p);
            var v,
              m,
              y = null;
            for (v in f)
              if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
                if (v === Vo) {
                  var R = f[v];
                  for (m in R) R.hasOwnProperty(m) && (y || (y = {}), (y[m] = ''));
                } else
                  v === kd ||
                    v === Fo ||
                    v === eh ||
                    v === wu ||
                    v === _0 ||
                    (ca.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
            for (v in p) {
              var E = p[v],
                _ = f != null ? f[v] : void 0;
              if (!(!p.hasOwnProperty(v) || E === _ || (E == null && _ == null)))
                if (v === Vo)
                  if ((E && Object.freeze(E), _)) {
                    for (m in _)
                      _.hasOwnProperty(m) &&
                        (!E || !E.hasOwnProperty(m)) &&
                        (y || (y = {}), (y[m] = ''));
                    for (m in E)
                      E.hasOwnProperty(m) && _[m] !== E[m] && (y || (y = {}), (y[m] = E[m]));
                  } else y || (s || (s = []), s.push(v, y)), (y = E);
                else if (v === kd) {
                  var O = E ? E[th] : void 0,
                    z = _ ? _[th] : void 0;
                  O != null && z !== O && (s = s || []).push(v, O);
                } else
                  v === Fo
                    ? (typeof E == 'string' || typeof E == 'number') &&
                      (s = s || []).push(v, '' + E)
                    : v === eh ||
                      v === wu ||
                      (ca.hasOwnProperty(v)
                        ? (E != null &&
                            (typeof E != 'function' && rh(v, E),
                            v === 'onScroll' && wt('scroll', e)),
                          !s && _ !== E && (s = []))
                        : (s = s || []).push(v, E));
            }
            return y && (io(y, p[Vo]), (s = s || []).push(Vo, y)), s;
          }
          function FT(e, t, a, i, u) {
            a === 'input' && u.type === 'radio' && u.name != null && df(e, u);
            var s = Ua(a, i),
              f = Ua(a, u);
            switch ((NT(e, t, s, f), a)) {
              case 'input':
                Gl(e, u);
                break;
              case 'textarea':
                Pp(e, u);
                break;
              case 'select':
                Am(e, u);
                break;
            }
          }
          function VT(e) {
            {
              var t = e.toLowerCase();
              return (Ts.hasOwnProperty(t) && Ts[t]) || null;
            }
          }
          function BT(e, t, a, i, u, s, f) {
            var p, v;
            switch (((p = Ua(t, a)), nh(t, a), t)) {
              case 'dialog':
                wt('cancel', e), wt('close', e);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                wt('load', e);
                break;
              case 'video':
              case 'audio':
                for (var m = 0; m < xd.length; m++) wt(xd[m], e);
                break;
              case 'source':
                wt('error', e);
                break;
              case 'img':
              case 'image':
              case 'link':
                wt('error', e), wt('load', e);
                break;
              case 'details':
                wt('toggle', e);
                break;
              case 'input':
                to(e, a), wt('invalid', e);
                break;
              case 'option':
                hs(e, a);
                break;
              case 'select':
                Bp(e, a), wt('invalid', e);
                break;
              case 'textarea':
                jp(e, a), wt('invalid', e);
                break;
            }
            Es(t, a);
            {
              v = /* @__PURE__ */ new Set();
              for (var y = e.attributes, R = 0; R < y.length; R++) {
                var E = y[R].name.toLowerCase();
                switch (E) {
                  case 'value':
                    break;
                  case 'checked':
                    break;
                  case 'selected':
                    break;
                  default:
                    v.add(y[R].name);
                }
              }
            }
            var _ = null;
            for (var O in a)
              if (a.hasOwnProperty(O)) {
                var z = a[O];
                if (O === Fo)
                  typeof z == 'string'
                    ? e.textContent !== z &&
                      (a[wu] !== !0 && ih(e.textContent, z, s, f), (_ = [Fo, z]))
                    : typeof z == 'number' &&
                      e.textContent !== '' + z &&
                      (a[wu] !== !0 && ih(e.textContent, z, s, f), (_ = [Fo, '' + z]));
                else if (ca.hasOwnProperty(O))
                  z != null &&
                    (typeof z != 'function' && rh(O, z), O === 'onScroll' && wt('scroll', e));
                else if (
                  f && // Convince Flow we've calculated it (it's DEV-only in this method.)
                  typeof p == 'boolean'
                ) {
                  var ae = void 0,
                    Ee = p && Yn ? null : da(O);
                  if (a[wu] !== !0) {
                    if (
                      !(
                        O === eh ||
                        O === wu || // Controlled attributes are not validated
                        // TODO: Only ignore them on controlled tags.
                        O === 'value' ||
                        O === 'checked' ||
                        O === 'selected'
                      )
                    ) {
                      if (O === kd) {
                        var ye = e.innerHTML,
                          Xe = z ? z[th] : void 0;
                        if (Xe != null) {
                          var Qe = L0(e, Xe);
                          Qe !== ye && bd(O, ye, Qe);
                        }
                      } else if (O === Vo) {
                        if ((v.delete(O), M0)) {
                          var D = $m(z);
                          (ae = e.getAttribute('style')), D !== ae && bd(O, ae, D);
                        }
                      } else if (p && !Yn)
                        v.delete(O.toLowerCase()), (ae = ls(e, O, z)), z !== ae && bd(O, ae, z);
                      else if (!$t(O, Ee, p) && !kt(O, z, Ee, p)) {
                        var U = !1;
                        if (Ee !== null) v.delete(Ee.attributeName), (ae = $u(e, O, z, Ee));
                        else {
                          var k = i;
                          if ((k === Na && (k = ys(t)), k === Na)) v.delete(O.toLowerCase());
                          else {
                            var $ = VT(O);
                            $ !== null && $ !== O && ((U = !0), v.delete($)), v.delete(O);
                          }
                          ae = ls(e, O, z);
                        }
                        var ie = Yn;
                        !ie && z !== ae && !U && bd(O, ae, z);
                      }
                    }
                  }
                }
              }
            switch (
              (f && // $FlowFixMe - Should be inferred as not undefined.
                v.size > 0 &&
                a[wu] !== !0 &&
                O0(v),
              t)
            ) {
              case 'input':
                Ki(e), no(e, a, !0);
                break;
              case 'textarea':
                Ki(e), Yp(e);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof a.onClick == 'function' && lh(e);
                break;
            }
            return _;
          }
          function jT(e, t, a) {
            var i = e.nodeValue !== t;
            return i;
          }
          function wy(e, t) {
            {
              if (jr) return;
              (jr = !0),
                g(
                  'Did not expect server HTML to contain a <%s> in <%s>.',
                  t.nodeName.toLowerCase(),
                  e.nodeName.toLowerCase(),
                );
            }
          }
          function Dy(e, t) {
            {
              if (jr) return;
              (jr = !0),
                g(
                  'Did not expect server HTML to contain the text node "%s" in <%s>.',
                  t.nodeValue,
                  e.nodeName.toLowerCase(),
                );
            }
          }
          function ky(e, t, a) {
            {
              if (jr) return;
              (jr = !0),
                g(
                  'Expected server HTML to contain a matching <%s> in <%s>.',
                  t,
                  e.nodeName.toLowerCase(),
                );
            }
          }
          function by(e, t) {
            {
              if (t === '' || jr) return;
              (jr = !0),
                g(
                  'Expected server HTML to contain a matching text node for "%s" in <%s>.',
                  t,
                  e.nodeName.toLowerCase(),
                );
            }
          }
          function PT(e, t, a) {
            switch (t) {
              case 'input':
                Ap(e, a);
                return;
              case 'textarea':
                yf(e, a);
                return;
              case 'select':
                Hm(e, a);
                return;
            }
          }
          var _d = function () {},
            Od = function () {};
          {
            var YT = [
                'address',
                'applet',
                'area',
                'article',
                'aside',
                'base',
                'basefont',
                'bgsound',
                'blockquote',
                'body',
                'br',
                'button',
                'caption',
                'center',
                'col',
                'colgroup',
                'dd',
                'details',
                'dir',
                'div',
                'dl',
                'dt',
                'embed',
                'fieldset',
                'figcaption',
                'figure',
                'footer',
                'form',
                'frame',
                'frameset',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'head',
                'header',
                'hgroup',
                'hr',
                'html',
                'iframe',
                'img',
                'input',
                'isindex',
                'li',
                'link',
                'listing',
                'main',
                'marquee',
                'menu',
                'menuitem',
                'meta',
                'nav',
                'noembed',
                'noframes',
                'noscript',
                'object',
                'ol',
                'p',
                'param',
                'plaintext',
                'pre',
                'script',
                'section',
                'select',
                'source',
                'style',
                'summary',
                'table',
                'tbody',
                'td',
                'template',
                'textarea',
                'tfoot',
                'th',
                'thead',
                'title',
                'tr',
                'track',
                'ul',
                'wbr',
                'xmp',
              ],
              z0 = [
                'applet',
                'caption',
                'html',
                'table',
                'td',
                'th',
                'marquee',
                'object',
                'template',
                // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
                // TODO: Distinguish by namespace here -- for <title>, including it here
                // errs on the side of fewer warnings
                'foreignObject',
                'desc',
                'title',
              ],
              $T = z0.concat(['button']),
              QT = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'],
              U0 = {
                current: null,
                formTag: null,
                aTagInScope: null,
                buttonTagInScope: null,
                nobrTagInScope: null,
                pTagInButtonScope: null,
                listItemTagAutoclosing: null,
                dlItemTagAutoclosing: null,
              };
            Od = function (e, t) {
              var a = Ye({}, e || U0),
                i = {
                  tag: t,
                };
              return (
                z0.indexOf(t) !== -1 &&
                  ((a.aTagInScope = null), (a.buttonTagInScope = null), (a.nobrTagInScope = null)),
                $T.indexOf(t) !== -1 && (a.pTagInButtonScope = null),
                YT.indexOf(t) !== -1 &&
                  t !== 'address' &&
                  t !== 'div' &&
                  t !== 'p' &&
                  ((a.listItemTagAutoclosing = null), (a.dlItemTagAutoclosing = null)),
                (a.current = i),
                t === 'form' && (a.formTag = i),
                t === 'a' && (a.aTagInScope = i),
                t === 'button' && (a.buttonTagInScope = i),
                t === 'nobr' && (a.nobrTagInScope = i),
                t === 'p' && (a.pTagInButtonScope = i),
                t === 'li' && (a.listItemTagAutoclosing = i),
                (t === 'dd' || t === 'dt') && (a.dlItemTagAutoclosing = i),
                a
              );
            };
            var IT = function (e, t) {
                switch (t) {
                  case 'select':
                    return e === 'option' || e === 'optgroup' || e === '#text';
                  case 'optgroup':
                    return e === 'option' || e === '#text';
                  case 'option':
                    return e === '#text';
                  case 'tr':
                    return (
                      e === 'th' ||
                      e === 'td' ||
                      e === 'style' ||
                      e === 'script' ||
                      e === 'template'
                    );
                  case 'tbody':
                  case 'thead':
                  case 'tfoot':
                    return e === 'tr' || e === 'style' || e === 'script' || e === 'template';
                  case 'colgroup':
                    return e === 'col' || e === 'template';
                  case 'table':
                    return (
                      e === 'caption' ||
                      e === 'colgroup' ||
                      e === 'tbody' ||
                      e === 'tfoot' ||
                      e === 'thead' ||
                      e === 'style' ||
                      e === 'script' ||
                      e === 'template'
                    );
                  case 'head':
                    return (
                      e === 'base' ||
                      e === 'basefont' ||
                      e === 'bgsound' ||
                      e === 'link' ||
                      e === 'meta' ||
                      e === 'title' ||
                      e === 'noscript' ||
                      e === 'noframes' ||
                      e === 'style' ||
                      e === 'script' ||
                      e === 'template'
                    );
                  case 'html':
                    return e === 'head' || e === 'body' || e === 'frameset';
                  case 'frameset':
                    return e === 'frame';
                  case '#document':
                    return e === 'html';
                }
                switch (e) {
                  case 'h1':
                  case 'h2':
                  case 'h3':
                  case 'h4':
                  case 'h5':
                  case 'h6':
                    return (
                      t !== 'h1' &&
                      t !== 'h2' &&
                      t !== 'h3' &&
                      t !== 'h4' &&
                      t !== 'h5' &&
                      t !== 'h6'
                    );
                  case 'rp':
                  case 'rt':
                    return QT.indexOf(t) === -1;
                  case 'body':
                  case 'caption':
                  case 'col':
                  case 'colgroup':
                  case 'frameset':
                  case 'frame':
                  case 'head':
                  case 'html':
                  case 'tbody':
                  case 'td':
                  case 'tfoot':
                  case 'th':
                  case 'thead':
                  case 'tr':
                    return t == null;
                }
                return !0;
              },
              GT = function (e, t) {
                switch (e) {
                  case 'address':
                  case 'article':
                  case 'aside':
                  case 'blockquote':
                  case 'center':
                  case 'details':
                  case 'dialog':
                  case 'dir':
                  case 'div':
                  case 'dl':
                  case 'fieldset':
                  case 'figcaption':
                  case 'figure':
                  case 'footer':
                  case 'header':
                  case 'hgroup':
                  case 'main':
                  case 'menu':
                  case 'nav':
                  case 'ol':
                  case 'p':
                  case 'section':
                  case 'summary':
                  case 'ul':
                  case 'pre':
                  case 'listing':
                  case 'table':
                  case 'hr':
                  case 'xmp':
                  case 'h1':
                  case 'h2':
                  case 'h3':
                  case 'h4':
                  case 'h5':
                  case 'h6':
                    return t.pTagInButtonScope;
                  case 'form':
                    return t.formTag || t.pTagInButtonScope;
                  case 'li':
                    return t.listItemTagAutoclosing;
                  case 'dd':
                  case 'dt':
                    return t.dlItemTagAutoclosing;
                  case 'button':
                    return t.buttonTagInScope;
                  case 'a':
                    return t.aTagInScope;
                  case 'nobr':
                    return t.nobrTagInScope;
                }
                return null;
              },
              A0 = {};
            _d = function (e, t, a) {
              a = a || U0;
              var i = a.current,
                u = i && i.tag;
              t != null &&
                (e != null &&
                  g('validateDOMNesting: when childText is passed, childTag should be null'),
                (e = '#text'));
              var s = IT(e, u) ? null : i,
                f = s ? null : GT(e, a),
                p = s || f;
              if (p) {
                var v = p.tag,
                  m = !!s + '|' + e + '|' + v;
                if (!A0[m]) {
                  A0[m] = !0;
                  var y = e,
                    R = '';
                  if (
                    (e === '#text'
                      ? /\S/.test(t)
                        ? (y = 'Text nodes')
                        : ((y = 'Whitespace text nodes'),
                          (R =
                            " Make sure you don't have any extra whitespace between tags on each line of your source code."))
                      : (y = '<' + e + '>'),
                    s)
                  ) {
                    var E = '';
                    v === 'table' &&
                      e === 'tr' &&
                      (E +=
                        ' Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.'),
                      g(
                        'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s',
                        y,
                        v,
                        R,
                        E,
                      );
                  } else
                    g('validateDOMNesting(...): %s cannot appear as a descendant of <%s>.', y, v);
                }
              }
            };
          }
          var uh = 'suppressHydrationWarning',
            oh = '$',
            sh = '/$',
            Md = '$?',
            Ld = '$!',
            WT = 'style',
            _y = null,
            Oy = null;
          function XT(e) {
            var t,
              a,
              i = e.nodeType;
            switch (i) {
              case na:
              case qi: {
                t = i === na ? '#document' : '#fragment';
                var u = e.documentElement;
                a = u ? u.namespaceURI : Sf(null, '');
                break;
              }
              default: {
                var s = i === Bt ? e.parentNode : e,
                  f = s.namespaceURI || null;
                (t = s.tagName), (a = Sf(f, t));
                break;
              }
            }
            {
              var p = t.toLowerCase(),
                v = Od(null, p);
              return {
                namespace: a,
                ancestorInfo: v,
              };
            }
          }
          function KT(e, t, a) {
            {
              var i = e,
                u = Sf(i.namespace, t),
                s = Od(i.ancestorInfo, t);
              return {
                namespace: u,
                ancestorInfo: s,
              };
            }
          }
          function wb(e) {
            return e;
          }
          function qT(e) {
            (_y = hr()), (Oy = fT());
            var t = null;
            return rn(!1), t;
          }
          function ZT(e) {
            dT(Oy), rn(_y), (_y = null), (Oy = null);
          }
          function JT(e, t, a, i, u) {
            var s;
            {
              var f = i;
              if (
                (_d(e, null, f.ancestorInfo),
                typeof t.children == 'string' || typeof t.children == 'number')
              ) {
                var p = '' + t.children,
                  v = Od(f.ancestorInfo, e);
                _d(null, p, v);
              }
              s = f.namespace;
            }
            var m = zT(e, t, a, s);
            return Ud(u, m), Fy(m, t), m;
          }
          function eR(e, t) {
            e.appendChild(t);
          }
          function tR(e, t, a, i, u) {
            switch ((AT(e, t, a, i), t)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                return !!a.autoFocus;
              case 'img':
                return !0;
              default:
                return !1;
            }
          }
          function nR(e, t, a, i, u, s) {
            {
              var f = s;
              if (
                typeof i.children != typeof a.children &&
                (typeof i.children == 'string' || typeof i.children == 'number')
              ) {
                var p = '' + i.children,
                  v = Od(f.ancestorInfo, t);
                _d(null, p, v);
              }
            }
            return HT(e, t, a, i);
          }
          function My(e, t) {
            return (
              e === 'textarea' ||
              e === 'noscript' ||
              typeof t.children == 'string' ||
              typeof t.children == 'number' ||
              (typeof t.dangerouslySetInnerHTML == 'object' &&
                t.dangerouslySetInnerHTML !== null &&
                t.dangerouslySetInnerHTML.__html != null)
            );
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
          var Ly = typeof setTimeout == 'function' ? setTimeout : void 0,
            iR = typeof clearTimeout == 'function' ? clearTimeout : void 0,
            Ny = -1,
            H0 = typeof Promise == 'function' ? Promise : void 0,
            lR =
              typeof queueMicrotask == 'function'
                ? queueMicrotask
                : typeof H0 < 'u'
                  ? function (e) {
                      return H0.resolve(null).then(e).catch(uR);
                    }
                  : Ly;
          function uR(e) {
            setTimeout(function () {
              throw e;
            });
          }
          function oR(e, t, a, i) {
            switch (t) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                a.autoFocus && e.focus();
                return;
              case 'img': {
                a.src && (e.src = a.src);
                return;
              }
            }
          }
          function sR(e, t, a, i, u, s) {
            FT(e, t, a, i, u), Fy(e, u);
          }
          function F0(e) {
            Ss(e, '');
          }
          function cR(e, t, a) {
            e.nodeValue = a;
          }
          function fR(e, t) {
            e.appendChild(t);
          }
          function dR(e, t) {
            var a;
            e.nodeType === Bt
              ? ((a = e.parentNode), a.insertBefore(t, e))
              : ((a = e), a.appendChild(t));
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
          function zy(e, t) {
            var a = t,
              i = 0;
            do {
              var u = a.nextSibling;
              if ((e.removeChild(a), u && u.nodeType === Bt)) {
                var s = u.data;
                if (s === sh)
                  if (i === 0) {
                    e.removeChild(u), $e(t);
                    return;
                  } else i--;
                else (s === oh || s === Md || s === Ld) && i++;
              }
              a = u;
            } while (a);
            $e(t);
          }
          function yR(e, t) {
            e.nodeType === Bt ? zy(e.parentNode, t) : e.nodeType === In && zy(e, t), $e(e);
          }
          function gR(e) {
            e = e;
            var t = e.style;
            typeof t.setProperty == 'function'
              ? t.setProperty('display', 'none', 'important')
              : (t.display = 'none');
          }
          function SR(e) {
            e.nodeValue = '';
          }
          function CR(e, t) {
            e = e;
            var a = t[WT],
              i = a != null && a.hasOwnProperty('display') ? a.display : null;
            e.style.display = Cs('display', i);
          }
          function ER(e, t) {
            e.nodeValue = t;
          }
          function TR(e) {
            e.nodeType === In
              ? (e.textContent = '')
              : e.nodeType === na && e.documentElement && e.removeChild(e.documentElement);
          }
          function RR(e, t, a) {
            return e.nodeType !== In || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
          }
          function xR(e, t) {
            return t === '' || e.nodeType !== za ? null : e;
          }
          function wR(e) {
            return e.nodeType !== Bt ? null : e;
          }
          function V0(e) {
            return e.data === Md;
          }
          function Uy(e) {
            return e.data === Ld;
          }
          function DR(e) {
            var t = e.nextSibling && e.nextSibling.dataset,
              a,
              i,
              u;
            return (
              t && ((a = t.dgst), (i = t.msg), (u = t.stck)),
              {
                message: i,
                digest: a,
                stack: u,
              }
            );
          }
          function kR(e, t) {
            e._reactRetry = t;
          }
          function ch(e) {
            for (; e != null; e = e.nextSibling) {
              var t = e.nodeType;
              if (t === In || t === za) break;
              if (t === Bt) {
                var a = e.data;
                if (a === oh || a === Ld || a === Md) break;
                if (a === sh) return null;
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
            Ud(s, e), Fy(e, a);
            var p;
            {
              var v = u;
              p = v.namespace;
            }
            var m = (s.mode & Be) !== xe;
            return BT(e, t, a, p, i, m, f);
          }
          function LR(e, t, a, i) {
            return Ud(a, e), a.mode & Be, jT(e, t);
          }
          function NR(e, t) {
            Ud(t, e);
          }
          function zR(e) {
            for (var t = e.nextSibling, a = 0; t; ) {
              if (t.nodeType === Bt) {
                var i = t.data;
                if (i === sh) {
                  if (a === 0) return Nd(t);
                  a--;
                } else (i === oh || i === Ld || i === Md) && a++;
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
                  if (a === 0) return t;
                  a--;
                } else i === sh && a++;
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
            return e !== 'head' && e !== 'body';
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
            t.nodeType === In ? wy(e, t) : t.nodeType === Bt || Dy(e, t);
          }
          function jR(e, t) {
            {
              var a = e.parentNode;
              a !== null && (t.nodeType === In ? wy(a, t) : t.nodeType === Bt || Dy(a, t));
            }
          }
          function PR(e, t, a, i, u) {
            (u || t[uh] !== !0) && (i.nodeType === In ? wy(a, i) : i.nodeType === Bt || Dy(a, i));
          }
          function YR(e, t, a) {
            ky(e, t);
          }
          function $R(e, t) {
            by(e, t);
          }
          function QR(e, t, a) {
            {
              var i = e.parentNode;
              i !== null && ky(i, t);
            }
          }
          function IR(e, t) {
            {
              var a = e.parentNode;
              a !== null && by(a, t);
            }
          }
          function GR(e, t, a, i, u, s) {
            (s || t[uh] !== !0) && ky(a, i);
          }
          function WR(e, t, a, i, u) {
            (u || t[uh] !== !0) && by(a, i);
          }
          function XR(e) {
            g(
              'An error occurred during hydration. The server HTML was replaced with client content in <%s>.',
              e.nodeName.toLowerCase(),
            );
          }
          function KR(e) {
            wd(e);
          }
          var Dc = Math.random().toString(36).slice(2),
            kc = '__reactFiber$' + Dc,
            Ay = '__reactProps$' + Dc,
            zd = '__reactContainer$' + Dc,
            Hy = '__reactEvents$' + Dc,
            qR = '__reactListeners$' + Dc,
            ZR = '__reactHandles$' + Dc;
          function JR(e) {
            delete e[kc], delete e[Ay], delete e[Hy], delete e[qR], delete e[ZR];
          }
          function Ud(e, t) {
            t[kc] = e;
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
          function Bo(e) {
            var t = e[kc];
            if (t) return t;
            for (var a = e.parentNode; a; ) {
              if (((t = a[zd] || a[kc]), t)) {
                var i = t.alternate;
                if (t.child !== null || (i !== null && i.child !== null))
                  for (var u = B0(e); u !== null; ) {
                    var s = u[kc];
                    if (s) return s;
                    u = B0(u);
                  }
                return t;
              }
              (e = a), (a = e.parentNode);
            }
            return null;
          }
          function Du(e) {
            var t = e[kc] || e[zd];
            return t && (t.tag === K || t.tag === me || t.tag === Te || t.tag === F) ? t : null;
          }
          function bc(e) {
            if (e.tag === K || e.tag === me) return e.stateNode;
            throw new Error('getNodeFromInstance: Invalid argument.');
          }
          function dh(e) {
            return e[Ay] || null;
          }
          function Fy(e, t) {
            e[Ay] = t;
          }
          function ex(e) {
            var t = e[Hy];
            return t === void 0 && (t = e[Hy] = /* @__PURE__ */ new Set()), t;
          }
          var P0 = {},
            Y0 = w.ReactDebugCurrentFrame;
          function ph(e) {
            if (e) {
              var t = e._owner,
                a = Wu(e.type, e._source, t ? t.type : null);
              Y0.setExtraStackFrame(a);
            } else Y0.setExtraStackFrame(null);
          }
          function Wa(e, t, a, i, u) {
            {
              var s = Function.call.bind($n);
              for (var f in e)
                if (s(e, f)) {
                  var p = void 0;
                  try {
                    if (typeof e[f] != 'function') {
                      var v = Error(
                        (i || 'React class') +
                          ': ' +
                          a +
                          ' type `' +
                          f +
                          '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                          typeof e[f] +
                          '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
                      );
                      throw ((v.name = 'Invariant Violation'), v);
                    }
                    p = e[f](t, f, i, a, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                  } catch (m) {
                    p = m;
                  }
                  p &&
                    !(p instanceof Error) &&
                    (ph(u),
                    g(
                      '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                      i || 'React class',
                      a,
                      f,
                      typeof p,
                    ),
                    ph(null)),
                    p instanceof Error &&
                      !(p.message in P0) &&
                      ((P0[p.message] = !0),
                      ph(u),
                      g('Failed %s type: %s', a, p.message),
                      ph(null));
                }
            }
          }
          var Vy = [],
            vh;
          vh = [];
          var wl = -1;
          function ku(e) {
            return {
              current: e,
            };
          }
          function tr(e, t) {
            if (wl < 0) {
              g('Unexpected pop.');
              return;
            }
            t !== vh[wl] && g('Unexpected Fiber popped.'),
              (e.current = Vy[wl]),
              (Vy[wl] = null),
              (vh[wl] = null),
              wl--;
          }
          function nr(e, t, a) {
            wl++, (Vy[wl] = e.current), (vh[wl] = a), (e.current = t);
          }
          var By;
          By = {};
          var ua = {};
          Object.freeze(ua);
          var Dl = ku(ua),
            Ui = ku(!1),
            jy = ua;
          function _c(e, t, a) {
            return a && Ai(t) ? jy : Dl.current;
          }
          function $0(e, t, a) {
            {
              var i = e.stateNode;
              (i.__reactInternalMemoizedUnmaskedChildContext = t),
                (i.__reactInternalMemoizedMaskedChildContext = a);
            }
          }
          function Oc(e, t) {
            {
              var a = e.type,
                i = a.contextTypes;
              if (!i) return ua;
              var u = e.stateNode;
              if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
                return u.__reactInternalMemoizedMaskedChildContext;
              var s = {};
              for (var f in i) s[f] = t[f];
              {
                var p = Ue(e) || 'Unknown';
                Wa(i, s, 'context', p);
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
            tr(Ui, e), tr(Dl, e);
          }
          function Py(e) {
            tr(Ui, e), tr(Dl, e);
          }
          function Q0(e, t, a) {
            {
              if (Dl.current !== ua)
                throw new Error(
                  'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.',
                );
              nr(Dl, t, e), nr(Ui, a, e);
            }
          }
          function I0(e, t, a) {
            {
              var i = e.stateNode,
                u = t.childContextTypes;
              if (typeof i.getChildContext != 'function') {
                {
                  var s = Ue(e) || 'Unknown';
                  By[s] ||
                    ((By[s] = !0),
                    g(
                      '%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.',
                      s,
                      s,
                    ));
                }
                return a;
              }
              var f = i.getChildContext();
              for (var p in f)
                if (!(p in u))
                  throw new Error(
                    (Ue(e) || 'Unknown') +
                      '.getChildContext(): key "' +
                      p +
                      '" is not defined in childContextTypes.',
                  );
              {
                var v = Ue(e) || 'Unknown';
                Wa(u, f, 'child context', v);
              }
              return Ye({}, a, f);
            }
          }
          function yh(e) {
            {
              var t = e.stateNode,
                a = (t && t.__reactInternalMemoizedMergedChildContext) || ua;
              return (jy = Dl.current), nr(Dl, a, e), nr(Ui, Ui.current, e), !0;
            }
          }
          function G0(e, t, a) {
            {
              var i = e.stateNode;
              if (!i)
                throw new Error(
                  'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.',
                );
              if (a) {
                var u = I0(e, t, jy);
                (i.__reactInternalMemoizedMergedChildContext = u),
                  tr(Ui, e),
                  tr(Dl, e),
                  nr(Dl, u, e),
                  nr(Ui, a, e);
              } else tr(Ui, e), nr(Ui, a, e);
            }
          }
          function tx(e) {
            {
              if (!Vf(e) || e.tag !== G)
                throw new Error(
                  'Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.',
                );
              var t = e;
              do {
                switch (t.tag) {
                  case F:
                    return t.stateNode.context;
                  case G: {
                    var a = t.type;
                    if (Ai(a)) return t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break;
                  }
                }
                t = t.return;
              } while (t !== null);
              throw new Error(
                'Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.',
              );
            }
          }
          var bu = 0,
            gh = 1,
            kl = null,
            Yy = !1,
            $y = !1;
          function W0(e) {
            kl === null ? (kl = [e]) : kl.push(e);
          }
          function nx(e) {
            (Yy = !0), W0(e);
          }
          function X0() {
            Yy && _u();
          }
          function _u() {
            if (!$y && kl !== null) {
              $y = !0;
              var e = 0,
                t = Hr();
              try {
                var a = !0,
                  i = kl;
                for (Wt(Tn); e < i.length; e++) {
                  var u = i[e];
                  do u = u(a);
                  while (u !== null);
                }
                (kl = null), (Yy = !1);
              } catch (s) {
                throw (kl !== null && (kl = kl.slice(e + 1)), Ms(Ns, _u), s);
              } finally {
                Wt(t), ($y = !1);
              }
            }
            return null;
          }
          var Mc = [],
            Lc = 0,
            Sh = null,
            Ch = 0,
            Ea = [],
            Ta = 0,
            jo = null,
            bl = 1,
            _l = '';
          function rx(e) {
            return Yo(), (e.flags & Af) !== Ce;
          }
          function ax(e) {
            return Yo(), Ch;
          }
          function ix() {
            var e = _l,
              t = bl,
              a = t & ~lx(t);
            return a.toString(32) + e;
          }
          function Po(e, t) {
            Yo(), (Mc[Lc++] = Ch), (Mc[Lc++] = Sh), (Sh = e), (Ch = t);
          }
          function K0(e, t, a) {
            Yo(), (Ea[Ta++] = bl), (Ea[Ta++] = _l), (Ea[Ta++] = jo), (jo = e);
            var i = bl,
              u = _l,
              s = Eh(i) - 1,
              f = i & ~(1 << s),
              p = a + 1,
              v = Eh(t) + s;
            if (v > 30) {
              var m = s - (s % 5),
                y = (1 << m) - 1,
                R = (f & y).toString(32),
                E = f >> m,
                _ = s - m,
                O = Eh(t) + _,
                z = p << _,
                ae = z | E,
                Ee = R + u;
              (bl = (1 << O) | ae), (_l = Ee);
            } else {
              var ye = p << s,
                Xe = ye | f,
                Qe = u;
              (bl = (1 << v) | Xe), (_l = Qe);
            }
          }
          function Qy(e) {
            Yo();
            var t = e.return;
            if (t !== null) {
              var a = 1,
                i = 0;
              Po(e, a), K0(e, a, i);
            }
          }
          function Eh(e) {
            return 32 - Vs(e);
          }
          function lx(e) {
            return 1 << (Eh(e) - 1);
          }
          function Iy(e) {
            for (; e === Sh; ) (Sh = Mc[--Lc]), (Mc[Lc] = null), (Ch = Mc[--Lc]), (Mc[Lc] = null);
            for (; e === jo; )
              (jo = Ea[--Ta]),
                (Ea[Ta] = null),
                (_l = Ea[--Ta]),
                (Ea[Ta] = null),
                (bl = Ea[--Ta]),
                (Ea[Ta] = null);
          }
          function ux() {
            return (
              Yo(),
              jo !== null
                ? {
                    id: bl,
                    overflow: _l,
                  }
                : null
            );
          }
          function ox(e, t) {
            Yo(),
              (Ea[Ta++] = bl),
              (Ea[Ta++] = _l),
              (Ea[Ta++] = jo),
              (bl = t.id),
              (_l = t.overflow),
              (jo = e);
          }
          function Yo() {
            Nn() || g('Expected to be hydrating. This is a bug in React. Please file an issue.');
          }
          var Ln = null,
            Ra = null,
            Xa = !1,
            $o = !1,
            Ou = null;
          function sx() {
            Xa && g('We should not be hydrating here. This is a bug in React. Please file a bug.');
          }
          function q0() {
            $o = !0;
          }
          function cx() {
            return $o;
          }
          function fx(e) {
            var t = e.stateNode.containerInfo;
            return (Ra = _R(t)), (Ln = e), (Xa = !0), (Ou = null), ($o = !1), !0;
          }
          function dx(e, t, a) {
            return (
              (Ra = OR(t)), (Ln = e), (Xa = !0), (Ou = null), ($o = !1), a !== null && ox(e, a), !0
            );
          }
          function Z0(e, t) {
            switch (e.tag) {
              case F: {
                BR(e.stateNode.containerInfo, t);
                break;
              }
              case K: {
                var a = (e.mode & Be) !== xe;
                PR(
                  e.type,
                  e.memoizedProps,
                  e.stateNode,
                  t,
                  // TODO: Delete this argument when we remove the legacy root API.
                  a,
                );
                break;
              }
              case Te: {
                var i = e.memoizedState;
                i.dehydrated !== null && jR(i.dehydrated, t);
                break;
              }
            }
          }
          function J0(e, t) {
            Z0(e, t);
            var a = hk();
            (a.stateNode = t), (a.return = e);
            var i = e.deletions;
            i === null ? ((e.deletions = [a]), (e.flags |= Je)) : i.push(a);
          }
          function Gy(e, t) {
            {
              if ($o) return;
              switch (e.tag) {
                case F: {
                  var a = e.stateNode.containerInfo;
                  switch (t.tag) {
                    case K:
                      var i = t.type;
                      t.pendingProps, YR(a, i);
                      break;
                    case me:
                      var u = t.pendingProps;
                      $R(a, u);
                      break;
                  }
                  break;
                }
                case K: {
                  var s = e.type,
                    f = e.memoizedProps,
                    p = e.stateNode;
                  switch (t.tag) {
                    case K: {
                      var v = t.type,
                        m = t.pendingProps,
                        y = (e.mode & Be) !== xe;
                      GR(
                        s,
                        f,
                        p,
                        v,
                        m,
                        // TODO: Delete this argument when we remove the legacy root API.
                        y,
                      );
                      break;
                    }
                    case me: {
                      var R = t.pendingProps,
                        E = (e.mode & Be) !== xe;
                      WR(
                        s,
                        f,
                        p,
                        R,
                        // TODO: Delete this argument when we remove the legacy root API.
                        E,
                      );
                      break;
                    }
                  }
                  break;
                }
                case Te: {
                  var _ = e.memoizedState,
                    O = _.dehydrated;
                  if (O !== null)
                    switch (t.tag) {
                      case K:
                        var z = t.type;
                        t.pendingProps, QR(O, z);
                        break;
                      case me:
                        var ae = t.pendingProps;
                        IR(O, ae);
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
            (t.flags = (t.flags & ~Lr) | ht), Gy(e, t);
          }
          function t1(e, t) {
            switch (e.tag) {
              case K: {
                var a = e.type;
                e.pendingProps;
                var i = RR(t, a);
                return i !== null ? ((e.stateNode = i), (Ln = e), (Ra = bR(i)), !0) : !1;
              }
              case me: {
                var u = e.pendingProps,
                  s = xR(t, u);
                return s !== null ? ((e.stateNode = s), (Ln = e), (Ra = null), !0) : !1;
              }
              case Te: {
                var f = wR(t);
                if (f !== null) {
                  var p = {
                    dehydrated: f,
                    treeContext: ux(),
                    retryLane: Jn,
                  };
                  e.memoizedState = p;
                  var v = mk(f);
                  return (v.return = e), (e.child = v), (Ln = e), (Ra = null), !0;
                }
                return !1;
              }
              default:
                return !1;
            }
          }
          function Wy(e) {
            return (e.mode & Be) !== xe && (e.flags & Me) === Ce;
          }
          function Xy(e) {
            throw new Error(
              'Hydration failed because the initial UI does not match what was rendered on the server.',
            );
          }
          function Ky(e) {
            if (Xa) {
              var t = Ra;
              if (!t) {
                Wy(e) && (Gy(Ln, e), Xy()), e1(Ln, e), (Xa = !1), (Ln = e);
                return;
              }
              var a = t;
              if (!t1(e, t)) {
                Wy(e) && (Gy(Ln, e), Xy()), (t = Nd(a));
                var i = Ln;
                if (!t || !t1(e, t)) {
                  e1(Ln, e), (Xa = !1), (Ln = e);
                  return;
                }
                J0(i, a);
              }
            }
          }
          function px(e, t, a) {
            var i = e.stateNode,
              u = !$o,
              s = MR(i, e.type, e.memoizedProps, t, a, e, u);
            return (e.updateQueue = s), s !== null;
          }
          function vx(e) {
            var t = e.stateNode,
              a = e.memoizedProps,
              i = LR(t, a, e);
            if (i) {
              var u = Ln;
              if (u !== null)
                switch (u.tag) {
                  case F: {
                    var s = u.stateNode.containerInfo,
                      f = (u.mode & Be) !== xe;
                    FR(
                      s,
                      t,
                      a,
                      // TODO: Delete this argument when we remove the legacy root API.
                      f,
                    );
                    break;
                  }
                  case K: {
                    var p = u.type,
                      v = u.memoizedProps,
                      m = u.stateNode,
                      y = (u.mode & Be) !== xe;
                    VR(
                      p,
                      v,
                      m,
                      t,
                      a,
                      // TODO: Delete this argument when we remove the legacy root API.
                      y,
                    );
                    break;
                  }
                }
            }
            return i;
          }
          function hx(e) {
            var t = e.memoizedState,
              a = t !== null ? t.dehydrated : null;
            if (!a)
              throw new Error(
                'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.',
              );
            NR(a, e);
          }
          function mx(e) {
            var t = e.memoizedState,
              a = t !== null ? t.dehydrated : null;
            if (!a)
              throw new Error(
                'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.',
              );
            return zR(a);
          }
          function n1(e) {
            for (var t = e.return; t !== null && t.tag !== K && t.tag !== F && t.tag !== Te; )
              t = t.return;
            Ln = t;
          }
          function Th(e) {
            if (e !== Ln) return !1;
            if (!Xa) return n1(e), (Xa = !0), !1;
            if (e.tag !== F && (e.tag !== K || (HR(e.type) && !My(e.type, e.memoizedProps)))) {
              var t = Ra;
              if (t)
                if (Wy(e)) r1(e), Xy();
                else for (; t; ) J0(e, t), (t = Nd(t));
            }
            return n1(e), e.tag === Te ? (Ra = mx(e)) : (Ra = Ln ? Nd(e.stateNode) : null), !0;
          }
          function yx() {
            return Xa && Ra !== null;
          }
          function r1(e) {
            for (var t = Ra; t; ) Z0(e, t), (t = Nd(t));
          }
          function Nc() {
            (Ln = null), (Ra = null), (Xa = !1), ($o = !1);
          }
          function a1() {
            Ou !== null && (ZC(Ou), (Ou = null));
          }
          function Nn() {
            return Xa;
          }
          function qy(e) {
            Ou === null ? (Ou = [e]) : Ou.push(e);
          }
          var gx = w.ReactCurrentBatchConfig,
            Sx = null;
          function Cx() {
            return gx.transition;
          }
          var Ka = {
            recordUnsafeLifecycleWarnings: function (e, t) {},
            flushPendingUnsafeLifecycleWarnings: function () {},
            recordLegacyContextWarning: function (e, t) {},
            flushLegacyContextWarning: function () {},
            discardPendingWarnings: function () {},
          };
          {
            var Ex = function (e) {
                for (var t = null, a = e; a !== null; ) a.mode & Rt && (t = a), (a = a.return);
                return t;
              },
              Qo = function (e) {
                var t = [];
                return (
                  e.forEach(function (a) {
                    t.push(a);
                  }),
                  t.sort().join(', ')
                );
              },
              Hd = [],
              Fd = [],
              Vd = [],
              Bd = [],
              jd = [],
              Pd = [],
              Io = /* @__PURE__ */ new Set();
            (Ka.recordUnsafeLifecycleWarnings = function (e, t) {
              Io.has(e.type) ||
                (typeof t.componentWillMount == 'function' && // Don't warn about react-lifecycles-compat polyfilled components.
                  t.componentWillMount.__suppressDeprecationWarning !== !0 &&
                  Hd.push(e),
                e.mode & Rt && typeof t.UNSAFE_componentWillMount == 'function' && Fd.push(e),
                typeof t.componentWillReceiveProps == 'function' &&
                  t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 &&
                  Vd.push(e),
                e.mode & Rt &&
                  typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
                  Bd.push(e),
                typeof t.componentWillUpdate == 'function' &&
                  t.componentWillUpdate.__suppressDeprecationWarning !== !0 &&
                  jd.push(e),
                e.mode & Rt && typeof t.UNSAFE_componentWillUpdate == 'function' && Pd.push(e));
            }),
              (Ka.flushPendingUnsafeLifecycleWarnings = function () {
                var e = /* @__PURE__ */ new Set();
                Hd.length > 0 &&
                  (Hd.forEach(function (E) {
                    e.add(Ue(E) || 'Component'), Io.add(E.type);
                  }),
                  (Hd = []));
                var t = /* @__PURE__ */ new Set();
                Fd.length > 0 &&
                  (Fd.forEach(function (E) {
                    t.add(Ue(E) || 'Component'), Io.add(E.type);
                  }),
                  (Fd = []));
                var a = /* @__PURE__ */ new Set();
                Vd.length > 0 &&
                  (Vd.forEach(function (E) {
                    a.add(Ue(E) || 'Component'), Io.add(E.type);
                  }),
                  (Vd = []));
                var i = /* @__PURE__ */ new Set();
                Bd.length > 0 &&
                  (Bd.forEach(function (E) {
                    i.add(Ue(E) || 'Component'), Io.add(E.type);
                  }),
                  (Bd = []));
                var u = /* @__PURE__ */ new Set();
                jd.length > 0 &&
                  (jd.forEach(function (E) {
                    u.add(Ue(E) || 'Component'), Io.add(E.type);
                  }),
                  (jd = []));
                var s = /* @__PURE__ */ new Set();
                if (
                  (Pd.length > 0 &&
                    (Pd.forEach(function (E) {
                      s.add(Ue(E) || 'Component'), Io.add(E.type);
                    }),
                    (Pd = [])),
                  t.size > 0)
                ) {
                  var f = Qo(t);
                  g(
                    `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
                    f,
                  );
                }
                if (i.size > 0) {
                  var p = Qo(i);
                  g(
                    `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`,
                    p,
                  );
                }
                if (s.size > 0) {
                  var v = Qo(s);
                  g(
                    `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
                    v,
                  );
                }
                if (e.size > 0) {
                  var m = Qo(e);
                  se(
                    `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                    m,
                  );
                }
                if (a.size > 0) {
                  var y = Qo(a);
                  se(
                    `componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                    y,
                  );
                }
                if (u.size > 0) {
                  var R = Qo(u);
                  se(
                    `componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                    R,
                  );
                }
              });
            var Rh = /* @__PURE__ */ new Map(),
              i1 = /* @__PURE__ */ new Set();
            (Ka.recordLegacyContextWarning = function (e, t) {
              var a = Ex(e);
              if (a === null) {
                g(
                  'Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.',
                );
                return;
              }
              if (!i1.has(e.type)) {
                var i = Rh.get(a);
                (e.type.contextTypes != null ||
                  e.type.childContextTypes != null ||
                  (t !== null && typeof t.getChildContext == 'function')) &&
                  (i === void 0 && ((i = []), Rh.set(a, i)), i.push(e));
              }
            }),
              (Ka.flushLegacyContextWarning = function () {
                Rh.forEach(function (e, t) {
                  if (e.length !== 0) {
                    var a = e[0],
                      i = /* @__PURE__ */ new Set();
                    e.forEach(function (s) {
                      i.add(Ue(s) || 'Component'), i1.add(s.type);
                    });
                    var u = Qo(i);
                    try {
                      ut(a),
                        g(
                          `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`,
                          u,
                        );
                    } finally {
                      Qt();
                    }
                  }
                });
              }),
              (Ka.discardPendingWarnings = function () {
                (Hd = []),
                  (Fd = []),
                  (Vd = []),
                  (Bd = []),
                  (jd = []),
                  (Pd = []),
                  (Rh = /* @__PURE__ */ new Map());
              });
          }
          function qa(e, t) {
            if (e && e.defaultProps) {
              var a = Ye({}, t),
                i = e.defaultProps;
              for (var u in i) a[u] === void 0 && (a[u] = i[u]);
              return a;
            }
            return t;
          }
          var Zy = ku(null),
            Jy;
          Jy = {};
          var xh = null,
            zc = null,
            eg = null,
            wh = !1;
          function Dh() {
            (xh = null), (zc = null), (eg = null), (wh = !1);
          }
          function l1() {
            wh = !0;
          }
          function u1() {
            wh = !1;
          }
          function o1(e, t, a) {
            nr(Zy, t._currentValue, e),
              (t._currentValue = a),
              t._currentRenderer !== void 0 &&
                t._currentRenderer !== null &&
                t._currentRenderer !== Jy &&
                g(
                  'Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.',
                ),
              (t._currentRenderer = Jy);
          }
          function tg(e, t) {
            var a = Zy.current;
            tr(Zy, t), (e._currentValue = a);
          }
          function ng(e, t, a) {
            for (var i = e; i !== null; ) {
              var u = i.alternate;
              if (
                (vl(i.childLanes, t)
                  ? u !== null && !vl(u.childLanes, t) && (u.childLanes = He(u.childLanes, t))
                  : ((i.childLanes = He(i.childLanes, t)),
                    u !== null && (u.childLanes = He(u.childLanes, t))),
                i === a)
              )
                break;
              i = i.return;
            }
            i !== a &&
              g(
                'Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.',
              );
          }
          function Tx(e, t, a) {
            Rx(e, t, a);
          }
          function Rx(e, t, a) {
            var i = e.child;
            for (i !== null && (i.return = e); i !== null; ) {
              var u = void 0,
                s = i.dependencies;
              if (s !== null) {
                u = i.child;
                for (var f = s.firstContext; f !== null; ) {
                  if (f.context === t) {
                    if (i.tag === G) {
                      var p = Gt(a),
                        v = Ol(pt, p);
                      v.tag = bh;
                      var m = i.updateQueue;
                      if (m !== null) {
                        var y = m.shared,
                          R = y.pending;
                        R === null ? (v.next = v) : ((v.next = R.next), (R.next = v)),
                          (y.pending = v);
                      }
                    }
                    i.lanes = He(i.lanes, a);
                    var E = i.alternate;
                    E !== null && (E.lanes = He(E.lanes, a)),
                      ng(i.return, a, e),
                      (s.lanes = He(s.lanes, a));
                    break;
                  }
                  f = f.next;
                }
              } else if (i.tag === V) u = i.type === e.type ? null : i.child;
              else if (i.tag === Ht) {
                var _ = i.return;
                if (_ === null)
                  throw new Error(
                    'We just came from a parent so we must have had a parent. This is a bug in React.',
                  );
                _.lanes = He(_.lanes, a);
                var O = _.alternate;
                O !== null && (O.lanes = He(O.lanes, a)), ng(_, a, e), (u = i.sibling);
              } else u = i.child;
              if (u !== null) u.return = i;
              else
                for (u = i; u !== null; ) {
                  if (u === e) {
                    u = null;
                    break;
                  }
                  var z = u.sibling;
                  if (z !== null) {
                    (z.return = u.return), (u = z);
                    break;
                  }
                  u = u.return;
                }
              i = u;
            }
          }
          function Uc(e, t) {
            (xh = e), (zc = null), (eg = null);
            var a = e.dependencies;
            if (a !== null) {
              var i = a.firstContext;
              i !== null && (er(a.lanes, t) && np(), (a.firstContext = null));
            }
          }
          function ln(e) {
            wh &&
              g(
                'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().',
              );
            var t = e._currentValue;
            if (eg !== e) {
              var a = {
                context: e,
                memoizedValue: t,
                next: null,
              };
              if (zc === null) {
                if (xh === null)
                  throw new Error(
                    'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().',
                  );
                (zc = a),
                  (xh.dependencies = {
                    lanes: A,
                    firstContext: a,
                  });
              } else zc = zc.next = a;
            }
            return t;
          }
          var Go = null;
          function rg(e) {
            Go === null ? (Go = [e]) : Go.push(e);
          }
          function xx() {
            if (Go !== null) {
              for (var e = 0; e < Go.length; e++) {
                var t = Go[e],
                  a = t.interleaved;
                if (a !== null) {
                  t.interleaved = null;
                  var i = a.next,
                    u = t.pending;
                  if (u !== null) {
                    var s = u.next;
                    (u.next = i), (a.next = s);
                  }
                  t.pending = a;
                }
              }
              Go = null;
            }
          }
          function s1(e, t, a, i) {
            var u = t.interleaved;
            return (
              u === null ? ((a.next = a), rg(t)) : ((a.next = u.next), (u.next = a)),
              (t.interleaved = a),
              kh(e, i)
            );
          }
          function wx(e, t, a, i) {
            var u = t.interleaved;
            u === null ? ((a.next = a), rg(t)) : ((a.next = u.next), (u.next = a)),
              (t.interleaved = a);
          }
          function Dx(e, t, a, i) {
            var u = t.interleaved;
            return (
              u === null ? ((a.next = a), rg(t)) : ((a.next = u.next), (u.next = a)),
              (t.interleaved = a),
              kh(e, i)
            );
          }
          function Pr(e, t) {
            return kh(e, t);
          }
          var kx = kh;
          function kh(e, t) {
            e.lanes = He(e.lanes, t);
            var a = e.alternate;
            a !== null && (a.lanes = He(a.lanes, t)),
              a === null && (e.flags & (ht | Lr)) !== Ce && cE(e);
            for (var i = e, u = e.return; u !== null; )
              (u.childLanes = He(u.childLanes, t)),
                (a = u.alternate),
                a !== null
                  ? (a.childLanes = He(a.childLanes, t))
                  : (u.flags & (ht | Lr)) !== Ce && cE(e),
                (i = u),
                (u = u.return);
            if (i.tag === F) {
              var s = i.stateNode;
              return s;
            } else return null;
          }
          var c1 = 0,
            f1 = 1,
            bh = 2,
            ag = 3,
            _h = !1,
            ig,
            Oh;
          (ig = !1), (Oh = null);
          function lg(e) {
            var t = {
              baseState: e.memoizedState,
              firstBaseUpdate: null,
              lastBaseUpdate: null,
              shared: {
                pending: null,
                interleaved: null,
                lanes: A,
              },
              effects: null,
            };
            e.updateQueue = t;
          }
          function d1(e, t) {
            var a = t.updateQueue,
              i = e.updateQueue;
            if (a === i) {
              var u = {
                baseState: i.baseState,
                firstBaseUpdate: i.firstBaseUpdate,
                lastBaseUpdate: i.lastBaseUpdate,
                shared: i.shared,
                effects: i.effects,
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
              next: null,
            };
            return a;
          }
          function Mu(e, t, a) {
            var i = e.updateQueue;
            if (i === null) return null;
            var u = i.shared;
            if (
              (Oh === u &&
                !ig &&
                (g(
                  'An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.',
                ),
                (ig = !0)),
              kD())
            ) {
              var s = u.pending;
              return (
                s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
                (u.pending = t),
                kx(e, a)
              );
            } else return Dx(e, u, t, a);
          }
          function Mh(e, t, a) {
            var i = t.updateQueue;
            if (i !== null) {
              var u = i.shared;
              if (Zf(a)) {
                var s = u.lanes;
                s = ed(s, e.pendingLanes);
                var f = He(s, a);
                (u.lanes = f), fu(e, f);
              }
            }
          }
          function ug(e, t) {
            var a = e.updateQueue,
              i = e.alternate;
            if (i !== null) {
              var u = i.updateQueue;
              if (a === u) {
                var s = null,
                  f = null,
                  p = a.firstBaseUpdate;
                if (p !== null) {
                  var v = p;
                  do {
                    var m = {
                      eventTime: v.eventTime,
                      lane: v.lane,
                      tag: v.tag,
                      payload: v.payload,
                      callback: v.callback,
                      next: null,
                    };
                    f === null ? (s = f = m) : ((f.next = m), (f = m)), (v = v.next);
                  } while (v !== null);
                  f === null ? (s = f = t) : ((f.next = t), (f = t));
                } else s = f = t;
                (a = {
                  baseState: u.baseState,
                  firstBaseUpdate: s,
                  lastBaseUpdate: f,
                  shared: u.shared,
                  effects: u.effects,
                }),
                  (e.updateQueue = a);
                return;
              }
            }
            var y = a.lastBaseUpdate;
            y === null ? (a.firstBaseUpdate = t) : (y.next = t), (a.lastBaseUpdate = t);
          }
          function bx(e, t, a, i, u, s) {
            switch (a.tag) {
              case f1: {
                var f = a.payload;
                if (typeof f == 'function') {
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
              case ag:
                e.flags = (e.flags & ~en) | Me;
              case c1: {
                var v = a.payload,
                  m;
                if (typeof v == 'function') {
                  l1(), (m = v.call(s, i, u));
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
                } else m = v;
                return m == null ? i : Ye({}, i, m);
              }
              case bh:
                return (_h = !0), i;
            }
            return i;
          }
          function Lh(e, t, a, i) {
            var u = e.updateQueue;
            (_h = !1), (Oh = u.shared);
            var s = u.firstBaseUpdate,
              f = u.lastBaseUpdate,
              p = u.shared.pending;
            if (p !== null) {
              u.shared.pending = null;
              var v = p,
                m = v.next;
              (v.next = null), f === null ? (s = m) : (f.next = m), (f = v);
              var y = e.alternate;
              if (y !== null) {
                var R = y.updateQueue,
                  E = R.lastBaseUpdate;
                E !== f &&
                  (E === null ? (R.firstBaseUpdate = m) : (E.next = m), (R.lastBaseUpdate = v));
              }
            }
            if (s !== null) {
              var _ = u.baseState,
                O = A,
                z = null,
                ae = null,
                Ee = null,
                ye = s;
              do {
                var Xe = ye.lane,
                  Qe = ye.eventTime;
                if (vl(i, Xe)) {
                  if (Ee !== null) {
                    var U = {
                      eventTime: Qe,
                      // This update is going to be committed so we never want uncommit
                      // it. Using NoLane works because 0 is a subset of all bitmasks, so
                      // this will never be skipped by the check above.
                      lane: Ge,
                      tag: ye.tag,
                      payload: ye.payload,
                      callback: ye.callback,
                      next: null,
                    };
                    Ee = Ee.next = U;
                  }
                  _ = bx(e, u, ye, _, t, a);
                  var k = ye.callback;
                  if (
                    k !== null && // If the update was already committed, we should not queue its
                    // callback again.
                    ye.lane !== Ge
                  ) {
                    e.flags |= ha;
                    var $ = u.effects;
                    $ === null ? (u.effects = [ye]) : $.push(ye);
                  }
                } else {
                  var D = {
                    eventTime: Qe,
                    lane: Xe,
                    tag: ye.tag,
                    payload: ye.payload,
                    callback: ye.callback,
                    next: null,
                  };
                  Ee === null ? ((ae = Ee = D), (z = _)) : (Ee = Ee.next = D), (O = He(O, Xe));
                }
                if (((ye = ye.next), ye === null)) {
                  if (((p = u.shared.pending), p === null)) break;
                  var ie = p,
                    ee = ie.next;
                  (ie.next = null), (ye = ee), (u.lastBaseUpdate = ie), (u.shared.pending = null);
                }
              } while (!0);
              Ee === null && (z = _),
                (u.baseState = z),
                (u.firstBaseUpdate = ae),
                (u.lastBaseUpdate = Ee);
              var Oe = u.shared.interleaved;
              if (Oe !== null) {
                var ze = Oe;
                do (O = He(O, ze.lane)), (ze = ze.next);
                while (ze !== Oe);
              } else s === null && (u.shared.lanes = A);
              vp(O), (e.lanes = O), (e.memoizedState = _);
            }
            Oh = null;
          }
          function _x(e, t) {
            if (typeof e != 'function')
              throw new Error(
                'Invalid argument passed as callback. Expected a function. Instead ' +
                  ('received: ' + e),
              );
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
            if (((t.effects = null), i !== null))
              for (var u = 0; u < i.length; u++) {
                var s = i[u],
                  f = s.callback;
                f !== null && ((s.callback = null), _x(f, a));
              }
          }
          var og = {},
            h1 = new L.Component().refs,
            sg,
            cg,
            fg,
            dg,
            pg,
            m1,
            zh,
            vg,
            hg,
            mg;
          {
            (sg = /* @__PURE__ */ new Set()),
              (cg = /* @__PURE__ */ new Set()),
              (fg = /* @__PURE__ */ new Set()),
              (dg = /* @__PURE__ */ new Set()),
              (vg = /* @__PURE__ */ new Set()),
              (pg = /* @__PURE__ */ new Set()),
              (hg = /* @__PURE__ */ new Set()),
              (mg = /* @__PURE__ */ new Set());
            var y1 = /* @__PURE__ */ new Set();
            (zh = function (e, t) {
              if (!(e === null || typeof e == 'function')) {
                var a = t + '_' + e;
                y1.has(a) ||
                  (y1.add(a),
                  g(
                    '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
                    t,
                    e,
                  ));
              }
            }),
              (m1 = function (e, t) {
                if (t === void 0) {
                  var a = ft(e) || 'Component';
                  pg.has(a) ||
                    (pg.add(a),
                    g(
                      '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.',
                      a,
                    ));
                }
              }),
              Object.defineProperty(og, '_processChildContext', {
                enumerable: !1,
                value: function () {
                  throw new Error(
                    "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).",
                  );
                },
              }),
              Object.freeze(og);
          }
          function yg(e, t, a, i) {
            var u = e.memoizedState,
              s = a(i, u);
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
            if (((e.memoizedState = f), e.lanes === A)) {
              var p = e.updateQueue;
              p.baseState = f;
            }
          }
          var gg = {
            isMounted: dr,
            enqueueSetState: function (e, t, a) {
              var i = Or(e),
                u = gr(),
                s = Vu(i),
                f = Ol(u, s);
              (f.payload = t), a != null && (zh(a, 'setState'), (f.callback = a));
              var p = Mu(i, f, s);
              p !== null && (yn(p, i, s, u), Mh(p, i, s)), Di(i, s);
            },
            enqueueReplaceState: function (e, t, a) {
              var i = Or(e),
                u = gr(),
                s = Vu(i),
                f = Ol(u, s);
              (f.tag = f1), (f.payload = t), a != null && (zh(a, 'replaceState'), (f.callback = a));
              var p = Mu(i, f, s);
              p !== null && (yn(p, i, s, u), Mh(p, i, s)), Di(i, s);
            },
            enqueueForceUpdate: function (e, t) {
              var a = Or(e),
                i = gr(),
                u = Vu(a),
                s = Ol(i, u);
              (s.tag = bh), t != null && (zh(t, 'forceUpdate'), (s.callback = t));
              var f = Mu(a, s, u);
              f !== null && (yn(f, a, u, i), Mh(f, a, u)), Wf(a, u);
            },
          };
          function g1(e, t, a, i, u, s, f) {
            var p = e.stateNode;
            if (typeof p.shouldComponentUpdate == 'function') {
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
                v === void 0 &&
                  g(
                    '%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.',
                    ft(t) || 'Component',
                  );
              }
              return v;
            }
            return t.prototype && t.prototype.isPureReactComponent ? !Se(a, i) || !Se(u, s) : !0;
          }
          function Ox(e, t, a) {
            var i = e.stateNode;
            {
              var u = ft(t) || 'Component',
                s = i.render;
              s ||
                (t.prototype && typeof t.prototype.render == 'function'
                  ? g(
                      '%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?',
                      u,
                    )
                  : g(
                      '%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.',
                      u,
                    )),
                i.getInitialState &&
                  !i.getInitialState.isReactClassApproved &&
                  !i.state &&
                  g(
                    'getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?',
                    u,
                  ),
                i.getDefaultProps &&
                  !i.getDefaultProps.isReactClassApproved &&
                  g(
                    'getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.',
                    u,
                  ),
                i.propTypes &&
                  g(
                    'propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.',
                    u,
                  ),
                i.contextType &&
                  g(
                    'contextType was defined as an instance property on %s. Use a static property to define contextType instead.',
                    u,
                  ),
                i.contextTypes &&
                  g(
                    'contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.',
                    u,
                  ),
                t.contextType &&
                  t.contextTypes &&
                  !hg.has(t) &&
                  (hg.add(t),
                  g(
                    '%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.',
                    u,
                  )),
                typeof i.componentShouldUpdate == 'function' &&
                  g(
                    '%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.',
                    u,
                  ),
                t.prototype &&
                  t.prototype.isPureReactComponent &&
                  typeof i.shouldComponentUpdate < 'u' &&
                  g(
                    '%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.',
                    ft(t) || 'A pure component',
                  ),
                typeof i.componentDidUnmount == 'function' &&
                  g(
                    '%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?',
                    u,
                  ),
                typeof i.componentDidReceiveProps == 'function' &&
                  g(
                    '%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().',
                    u,
                  ),
                typeof i.componentWillRecieveProps == 'function' &&
                  g(
                    '%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
                    u,
                  ),
                typeof i.UNSAFE_componentWillRecieveProps == 'function' &&
                  g(
                    '%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?',
                    u,
                  );
              var f = i.props !== a;
              i.props !== void 0 &&
                f &&
                g(
                  "%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
                  u,
                  u,
                ),
                i.defaultProps &&
                  g(
                    'Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.',
                    u,
                    u,
                  ),
                typeof i.getSnapshotBeforeUpdate == 'function' &&
                  typeof i.componentDidUpdate != 'function' &&
                  !fg.has(t) &&
                  (fg.add(t),
                  g(
                    '%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.',
                    ft(t),
                  )),
                typeof i.getDerivedStateFromProps == 'function' &&
                  g(
                    '%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
                    u,
                  ),
                typeof i.getDerivedStateFromError == 'function' &&
                  g(
                    '%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
                    u,
                  ),
                typeof t.getSnapshotBeforeUpdate == 'function' &&
                  g(
                    '%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.',
                    u,
                  );
              var p = i.state;
              p &&
                (typeof p != 'object' || Zt(p)) &&
                g('%s.state: must be set to an object or null', u),
                typeof i.getChildContext == 'function' &&
                  typeof t.childContextTypes != 'object' &&
                  g(
                    '%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().',
                    u,
                  );
            }
          }
          function S1(e, t) {
            (t.updater = gg), (e.stateNode = t), tu(t, e), (t._reactInternalInstance = og);
          }
          function C1(e, t, a) {
            var i = !1,
              u = ua,
              s = ua,
              f = t.contextType;
            if ('contextType' in t) {
              var p =
                // Allow null for conditional declaration
                f === null || (f !== void 0 && f.$$typeof === tf && f._context === void 0);
              if (!p && !mg.has(t)) {
                mg.add(t);
                var v = '';
                f === void 0
                  ? (v =
                      ' However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.')
                  : typeof f != 'object'
                    ? (v = ' However, it is set to a ' + typeof f + '.')
                    : f.$$typeof === ef
                      ? (v = ' Did you accidentally pass the Context.Provider instead?')
                      : f._context !== void 0
                        ? (v = ' Did you accidentally pass the Context.Consumer instead?')
                        : (v =
                            ' However, it is set to an object with keys {' +
                            Object.keys(f).join(', ') +
                            '}.'),
                  g(
                    '%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s',
                    ft(t) || 'Component',
                    v,
                  );
              }
            }
            if (typeof f == 'object' && f !== null) s = ln(f);
            else {
              u = _c(e, t, !0);
              var m = t.contextTypes;
              (i = m != null), (s = i ? Oc(e, u) : ua);
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
            var R = (e.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null);
            S1(e, y);
            {
              if (typeof t.getDerivedStateFromProps == 'function' && R === null) {
                var E = ft(t) || 'Component';
                cg.has(E) ||
                  (cg.add(E),
                  g(
                    '`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.',
                    E,
                    y.state === null ? 'null' : 'undefined',
                    E,
                  ));
              }
              if (
                typeof t.getDerivedStateFromProps == 'function' ||
                typeof y.getSnapshotBeforeUpdate == 'function'
              ) {
                var _ = null,
                  O = null,
                  z = null;
                if (
                  (typeof y.componentWillMount == 'function' &&
                  y.componentWillMount.__suppressDeprecationWarning !== !0
                    ? (_ = 'componentWillMount')
                    : typeof y.UNSAFE_componentWillMount == 'function' &&
                      (_ = 'UNSAFE_componentWillMount'),
                  typeof y.componentWillReceiveProps == 'function' &&
                  y.componentWillReceiveProps.__suppressDeprecationWarning !== !0
                    ? (O = 'componentWillReceiveProps')
                    : typeof y.UNSAFE_componentWillReceiveProps == 'function' &&
                      (O = 'UNSAFE_componentWillReceiveProps'),
                  typeof y.componentWillUpdate == 'function' &&
                  y.componentWillUpdate.__suppressDeprecationWarning !== !0
                    ? (z = 'componentWillUpdate')
                    : typeof y.UNSAFE_componentWillUpdate == 'function' &&
                      (z = 'UNSAFE_componentWillUpdate'),
                  _ !== null || O !== null || z !== null)
                ) {
                  var ae = ft(t) || 'Component',
                    Ee =
                      typeof t.getDerivedStateFromProps == 'function'
                        ? 'getDerivedStateFromProps()'
                        : 'getSnapshotBeforeUpdate()';
                  dg.has(ae) ||
                    (dg.add(ae),
                    g(
                      `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,
                      ae,
                      Ee,
                      _ !== null
                        ? `
  ` + _
                        : '',
                      O !== null
                        ? `
  ` + O
                        : '',
                      z !== null
                        ? `
  ` + z
                        : '',
                    ));
                }
              }
            }
            return i && $0(e, u, s), y;
          }
          function Mx(e, t) {
            var a = t.state;
            typeof t.componentWillMount == 'function' && t.componentWillMount(),
              typeof t.UNSAFE_componentWillMount == 'function' && t.UNSAFE_componentWillMount(),
              a !== t.state &&
                (g(
                  "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
                  Ue(e) || 'Component',
                ),
                gg.enqueueReplaceState(t, t.state, null));
          }
          function E1(e, t, a, i) {
            var u = t.state;
            if (
              (typeof t.componentWillReceiveProps == 'function' &&
                t.componentWillReceiveProps(a, i),
              typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
                t.UNSAFE_componentWillReceiveProps(a, i),
              t.state !== u)
            ) {
              {
                var s = Ue(e) || 'Component';
                sg.has(s) ||
                  (sg.add(s),
                  g(
                    "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
                    s,
                  ));
              }
              gg.enqueueReplaceState(t, t.state, null);
            }
          }
          function Sg(e, t, a, i) {
            Ox(e, t, a);
            var u = e.stateNode;
            (u.props = a), (u.state = e.memoizedState), (u.refs = h1), lg(e);
            var s = t.contextType;
            if (typeof s == 'object' && s !== null) u.context = ln(s);
            else {
              var f = _c(e, t, !0);
              u.context = Oc(e, f);
            }
            {
              if (u.state === a) {
                var p = ft(t) || 'Component';
                vg.has(p) ||
                  (vg.add(p),
                  g(
                    "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
                    p,
                  ));
              }
              e.mode & Rt && Ka.recordLegacyContextWarning(e, u),
                Ka.recordUnsafeLifecycleWarnings(e, u);
            }
            u.state = e.memoizedState;
            var v = t.getDerivedStateFromProps;
            if (
              (typeof v == 'function' && (yg(e, t, v, a), (u.state = e.memoizedState)),
              typeof t.getDerivedStateFromProps != 'function' &&
                typeof u.getSnapshotBeforeUpdate != 'function' &&
                (typeof u.UNSAFE_componentWillMount == 'function' ||
                  typeof u.componentWillMount == 'function') &&
                (Mx(e, u), Lh(e, a, u, i), (u.state = e.memoizedState)),
              typeof u.componentDidMount == 'function')
            ) {
              var m = Ae;
              (m |= Wn), (e.mode & Ur) !== xe && (m |= Xn), (e.flags |= m);
            }
          }
          function Lx(e, t, a, i) {
            var u = e.stateNode,
              s = e.memoizedProps;
            u.props = s;
            var f = u.context,
              p = t.contextType,
              v = ua;
            if (typeof p == 'object' && p !== null) v = ln(p);
            else {
              var m = _c(e, t, !0);
              v = Oc(e, m);
            }
            var y = t.getDerivedStateFromProps,
              R = typeof y == 'function' || typeof u.getSnapshotBeforeUpdate == 'function';
            !R &&
              (typeof u.UNSAFE_componentWillReceiveProps == 'function' ||
                typeof u.componentWillReceiveProps == 'function') &&
              (s !== a || f !== v) &&
              E1(e, u, a, v),
              p1();
            var E = e.memoizedState,
              _ = (u.state = E);
            if ((Lh(e, a, u, i), (_ = e.memoizedState), s === a && E === _ && !hh() && !Nh())) {
              if (typeof u.componentDidMount == 'function') {
                var O = Ae;
                (O |= Wn), (e.mode & Ur) !== xe && (O |= Xn), (e.flags |= O);
              }
              return !1;
            }
            typeof y == 'function' && (yg(e, t, y, a), (_ = e.memoizedState));
            var z = Nh() || g1(e, t, s, a, E, _, v);
            if (z) {
              if (
                (!R &&
                  (typeof u.UNSAFE_componentWillMount == 'function' ||
                    typeof u.componentWillMount == 'function') &&
                  (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function')
              ) {
                var ae = Ae;
                (ae |= Wn), (e.mode & Ur) !== xe && (ae |= Xn), (e.flags |= ae);
              }
            } else {
              if (typeof u.componentDidMount == 'function') {
                var Ee = Ae;
                (Ee |= Wn), (e.mode & Ur) !== xe && (Ee |= Xn), (e.flags |= Ee);
              }
              (e.memoizedProps = a), (e.memoizedState = _);
            }
            return (u.props = a), (u.state = _), (u.context = v), z;
          }
          function Nx(e, t, a, i, u) {
            var s = t.stateNode;
            d1(e, t);
            var f = t.memoizedProps,
              p = t.type === t.elementType ? f : qa(t.type, f);
            s.props = p;
            var v = t.pendingProps,
              m = s.context,
              y = a.contextType,
              R = ua;
            if (typeof y == 'object' && y !== null) R = ln(y);
            else {
              var E = _c(t, a, !0);
              R = Oc(t, E);
            }
            var _ = a.getDerivedStateFromProps,
              O = typeof _ == 'function' || typeof s.getSnapshotBeforeUpdate == 'function';
            !O &&
              (typeof s.UNSAFE_componentWillReceiveProps == 'function' ||
                typeof s.componentWillReceiveProps == 'function') &&
              (f !== v || m !== R) &&
              E1(t, s, i, R),
              p1();
            var z = t.memoizedState,
              ae = (s.state = z);
            if (
              (Lh(t, i, s, u), (ae = t.memoizedState), f === v && z === ae && !hh() && !Nh() && !be)
            )
              return (
                typeof s.componentDidUpdate == 'function' &&
                  (f !== e.memoizedProps || z !== e.memoizedState) &&
                  (t.flags |= Ae),
                typeof s.getSnapshotBeforeUpdate == 'function' &&
                  (f !== e.memoizedProps || z !== e.memoizedState) &&
                  (t.flags |= Mr),
                !1
              );
            typeof _ == 'function' && (yg(t, a, _, i), (ae = t.memoizedState));
            var Ee =
              Nh() ||
              g1(t, a, p, i, z, ae, R) || // TODO: In some cases, we'll end up checking if context has changed twice,
              // both before and after `shouldComponentUpdate` has been called. Not ideal,
              // but I'm loath to refactor this function. This only happens for memoized
              // components so it's not that common.
              be;
            return (
              Ee
                ? (!O &&
                    (typeof s.UNSAFE_componentWillUpdate == 'function' ||
                      typeof s.componentWillUpdate == 'function') &&
                    (typeof s.componentWillUpdate == 'function' && s.componentWillUpdate(i, ae, R),
                    typeof s.UNSAFE_componentWillUpdate == 'function' &&
                      s.UNSAFE_componentWillUpdate(i, ae, R)),
                  typeof s.componentDidUpdate == 'function' && (t.flags |= Ae),
                  typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= Mr))
                : (typeof s.componentDidUpdate == 'function' &&
                    (f !== e.memoizedProps || z !== e.memoizedState) &&
                    (t.flags |= Ae),
                  typeof s.getSnapshotBeforeUpdate == 'function' &&
                    (f !== e.memoizedProps || z !== e.memoizedState) &&
                    (t.flags |= Mr),
                  (t.memoizedProps = i),
                  (t.memoizedState = ae)),
              (s.props = i),
              (s.state = ae),
              (s.context = R),
              Ee
            );
          }
          var Cg,
            Eg,
            Tg,
            Rg,
            xg,
            T1 = function (e, t) {};
          (Cg = !1),
            (Eg = !1),
            (Tg = {}),
            (Rg = {}),
            (xg = {}),
            (T1 = function (e, t) {
              if (
                !(e === null || typeof e != 'object') &&
                !(!e._store || e._store.validated || e.key != null)
              ) {
                if (typeof e._store != 'object')
                  throw new Error(
                    'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.',
                  );
                e._store.validated = !0;
                var a = Ue(t) || 'Component';
                Rg[a] ||
                  ((Rg[a] = !0),
                  g(
                    'Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.',
                  ));
              }
            });
          function Yd(e, t, a) {
            var i = a.ref;
            if (i !== null && typeof i != 'function' && typeof i != 'object') {
              if (
                (e.mode & Rt || ur) && // We warn in ReactElement.js if owner and self are equal for string refs
                // because these cannot be automatically converted to an arrow function
                // using a codemod. Therefore, we don't have to warn about string refs again.
                !(a._owner && a._self && a._owner.stateNode !== a._self)
              ) {
                var u = Ue(e) || 'Component';
                Tg[u] ||
                  (g(
                    'A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                    i,
                  ),
                  (Tg[u] = !0));
              }
              if (a._owner) {
                var s = a._owner,
                  f;
                if (s) {
                  var p = s;
                  if (p.tag !== G)
                    throw new Error(
                      'Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                    );
                  f = p.stateNode;
                }
                if (!f)
                  throw new Error(
                    'Missing owner for string ref ' +
                      i +
                      '. This error is likely caused by a bug in React. Please file an issue.',
                  );
                var v = f;
                Qi(i, 'ref');
                var m = '' + i;
                if (
                  t !== null &&
                  t.ref !== null &&
                  typeof t.ref == 'function' &&
                  t.ref._stringRef === m
                )
                  return t.ref;
                var y = function (R) {
                  var E = v.refs;
                  E === h1 && (E = v.refs = {}), R === null ? delete E[m] : (E[m] = R);
                };
                return (y._stringRef = m), y;
              } else {
                if (typeof i != 'string')
                  throw new Error(
                    'Expected ref to be a function, a string, an object returned by React.createRef(), or null.',
                  );
                if (!a._owner)
                  throw new Error(
                    'Element ref was specified as a string (' +
                      i +
                      `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`,
                  );
              }
            }
            return i;
          }
          function Uh(e, t) {
            var a = Object.prototype.toString.call(t);
            throw new Error(
              'Objects are not valid as a React child (found: ' +
                (a === '[object Object]'
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : a) +
                '). If you meant to render a collection of children, use an array instead.',
            );
          }
          function Ah(e) {
            {
              var t = Ue(e) || 'Component';
              if (xg[t]) return;
              (xg[t] = !0),
                g(
                  'Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.',
                );
            }
          }
          function R1(e) {
            var t = e._payload,
              a = e._init;
            return a(t);
          }
          function x1(e) {
            function t(D, U) {
              if (e) {
                var k = D.deletions;
                k === null ? ((D.deletions = [U]), (D.flags |= Je)) : k.push(U);
              }
            }
            function a(D, U) {
              if (!e) return null;
              for (var k = U; k !== null; ) t(D, k), (k = k.sibling);
              return null;
            }
            function i(D, U) {
              for (var k = /* @__PURE__ */ new Map(), $ = U; $ !== null; )
                $.key !== null ? k.set($.key, $) : k.set($.index, $), ($ = $.sibling);
              return k;
            }
            function u(D, U) {
              var k = ts(D, U);
              return (k.index = 0), (k.sibling = null), k;
            }
            function s(D, U, k) {
              if (((D.index = k), !e)) return (D.flags |= Af), U;
              var $ = D.alternate;
              if ($ !== null) {
                var ie = $.index;
                return ie < U ? ((D.flags |= ht), U) : ie;
              } else return (D.flags |= ht), U;
            }
            function f(D) {
              return e && D.alternate === null && (D.flags |= ht), D;
            }
            function p(D, U, k, $) {
              if (U === null || U.tag !== me) {
                var ie = qS(k, D.mode, $);
                return (ie.return = D), ie;
              } else {
                var ee = u(U, k);
                return (ee.return = D), ee;
              }
            }
            function v(D, U, k, $) {
              var ie = k.type;
              if (ie === Oa) return y(D, U, k.props.children, $, k.key);
              if (
                U !== null &&
                (U.elementType === ie || // Keep this check inline so it only runs on the false path:
                  vE(U, k) || // Lazy types should reconcile their resolved type.
                  // We need to do this after the Hot Reloading check above,
                  // because hot reloading has different semantics than prod because
                  // it doesn't resuspend. So we can't let the call below suspend.
                  (typeof ie == 'object' && ie !== null && ie.$$typeof === On && R1(ie) === U.type))
              ) {
                var ee = u(U, k.props);
                return (
                  (ee.ref = Yd(D, U, k)),
                  (ee.return = D),
                  (ee._debugSource = k._source),
                  (ee._debugOwner = k._owner),
                  ee
                );
              }
              var Oe = KS(k, D.mode, $);
              return (Oe.ref = Yd(D, U, k)), (Oe.return = D), Oe;
            }
            function m(D, U, k, $) {
              if (
                U === null ||
                U.tag !== P ||
                U.stateNode.containerInfo !== k.containerInfo ||
                U.stateNode.implementation !== k.implementation
              ) {
                var ie = ZS(k, D.mode, $);
                return (ie.return = D), ie;
              } else {
                var ee = u(U, k.children || []);
                return (ee.return = D), ee;
              }
            }
            function y(D, U, k, $, ie) {
              if (U === null || U.tag !== De) {
                var ee = ju(k, D.mode, $, ie);
                return (ee.return = D), ee;
              } else {
                var Oe = u(U, k);
                return (Oe.return = D), Oe;
              }
            }
            function R(D, U, k) {
              if ((typeof U == 'string' && U !== '') || typeof U == 'number') {
                var $ = qS('' + U, D.mode, k);
                return ($.return = D), $;
              }
              if (typeof U == 'object' && U !== null) {
                switch (U.$$typeof) {
                  case Bl: {
                    var ie = KS(U, D.mode, k);
                    return (ie.ref = Yd(D, null, U)), (ie.return = D), ie;
                  }
                  case Zr: {
                    var ee = ZS(U, D.mode, k);
                    return (ee.return = D), ee;
                  }
                  case On: {
                    var Oe = U._payload,
                      ze = U._init;
                    return R(D, ze(Oe), k);
                  }
                }
                if (Zt(U) || Ma(U)) {
                  var st = ju(U, D.mode, k, null);
                  return (st.return = D), st;
                }
                Uh(D, U);
              }
              return typeof U == 'function' && Ah(D), null;
            }
            function E(D, U, k, $) {
              var ie = U !== null ? U.key : null;
              if ((typeof k == 'string' && k !== '') || typeof k == 'number')
                return ie !== null ? null : p(D, U, '' + k, $);
              if (typeof k == 'object' && k !== null) {
                switch (k.$$typeof) {
                  case Bl:
                    return k.key === ie ? v(D, U, k, $) : null;
                  case Zr:
                    return k.key === ie ? m(D, U, k, $) : null;
                  case On: {
                    var ee = k._payload,
                      Oe = k._init;
                    return E(D, U, Oe(ee), $);
                  }
                }
                if (Zt(k) || Ma(k)) return ie !== null ? null : y(D, U, k, $, null);
                Uh(D, k);
              }
              return typeof k == 'function' && Ah(D), null;
            }
            function _(D, U, k, $, ie) {
              if ((typeof $ == 'string' && $ !== '') || typeof $ == 'number') {
                var ee = D.get(k) || null;
                return p(U, ee, '' + $, ie);
              }
              if (typeof $ == 'object' && $ !== null) {
                switch ($.$$typeof) {
                  case Bl: {
                    var Oe = D.get($.key === null ? k : $.key) || null;
                    return v(U, Oe, $, ie);
                  }
                  case Zr: {
                    var ze = D.get($.key === null ? k : $.key) || null;
                    return m(U, ze, $, ie);
                  }
                  case On:
                    var st = $._payload,
                      qe = $._init;
                    return _(D, U, k, qe(st), ie);
                }
                if (Zt($) || Ma($)) {
                  var qt = D.get(k) || null;
                  return y(U, qt, $, ie, null);
                }
                Uh(U, $);
              }
              return typeof $ == 'function' && Ah(U), null;
            }
            function O(D, U, k) {
              {
                if (typeof D != 'object' || D === null) return U;
                switch (D.$$typeof) {
                  case Bl:
                  case Zr:
                    T1(D, k);
                    var $ = D.key;
                    if (typeof $ != 'string') break;
                    if (U === null) {
                      (U = /* @__PURE__ */ new Set()), U.add($);
                      break;
                    }
                    if (!U.has($)) {
                      U.add($);
                      break;
                    }
                    g(
                      'Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.',
                      $,
                    );
                    break;
                  case On:
                    var ie = D._payload,
                      ee = D._init;
                    O(ee(ie), U, k);
                    break;
                }
              }
              return U;
            }
            function z(D, U, k, $) {
              for (var ie = null, ee = 0; ee < k.length; ee++) {
                var Oe = k[ee];
                ie = O(Oe, ie, D);
              }
              for (
                var ze = null, st = null, qe = U, qt = 0, Ze = 0, Yt = null;
                qe !== null && Ze < k.length;
                Ze++
              ) {
                qe.index > Ze ? ((Yt = qe), (qe = null)) : (Yt = qe.sibling);
                var ar = E(D, qe, k[Ze], $);
                if (ar === null) {
                  qe === null && (qe = Yt);
                  break;
                }
                e && qe && ar.alternate === null && t(D, qe),
                  (qt = s(ar, qt, Ze)),
                  st === null ? (ze = ar) : (st.sibling = ar),
                  (st = ar),
                  (qe = Yt);
              }
              if (Ze === k.length) {
                if ((a(D, qe), Nn())) {
                  var Bn = Ze;
                  Po(D, Bn);
                }
                return ze;
              }
              if (qe === null) {
                for (; Ze < k.length; Ze++) {
                  var sa = R(D, k[Ze], $);
                  sa !== null &&
                    ((qt = s(sa, qt, Ze)), st === null ? (ze = sa) : (st.sibling = sa), (st = sa));
                }
                if (Nn()) {
                  var Sr = Ze;
                  Po(D, Sr);
                }
                return ze;
              }
              for (var Cr = i(D, qe); Ze < k.length; Ze++) {
                var ir = _(Cr, D, Ze, k[Ze], $);
                ir !== null &&
                  (e && ir.alternate !== null && Cr.delete(ir.key === null ? Ze : ir.key),
                  (qt = s(ir, qt, Ze)),
                  st === null ? (ze = ir) : (st.sibling = ir),
                  (st = ir));
              }
              if (
                (e &&
                  Cr.forEach(function (Zc) {
                    return t(D, Zc);
                  }),
                Nn())
              ) {
                var Al = Ze;
                Po(D, Al);
              }
              return ze;
            }
            function ae(D, U, k, $) {
              var ie = Ma(k);
              if (typeof ie != 'function')
                throw new Error(
                  'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.',
                );
              {
                typeof Symbol == 'function' && // $FlowFixMe Flow doesn't know about toStringTag
                  k[Symbol.toStringTag] === 'Generator' &&
                  (Eg ||
                    g(
                      'Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.',
                    ),
                  (Eg = !0)),
                  k.entries === ie &&
                    (Cg ||
                      g(
                        'Using Maps as children is not supported. Use an array of keyed ReactElements instead.',
                      ),
                    (Cg = !0));
                var ee = ie.call(k);
                if (ee)
                  for (var Oe = null, ze = ee.next(); !ze.done; ze = ee.next()) {
                    var st = ze.value;
                    Oe = O(st, Oe, D);
                  }
              }
              var qe = ie.call(k);
              if (qe == null) throw new Error('An iterable object provided no iterator.');
              for (
                var qt = null, Ze = null, Yt = U, ar = 0, Bn = 0, sa = null, Sr = qe.next();
                Yt !== null && !Sr.done;
                Bn++, Sr = qe.next()
              ) {
                Yt.index > Bn ? ((sa = Yt), (Yt = null)) : (sa = Yt.sibling);
                var Cr = E(D, Yt, Sr.value, $);
                if (Cr === null) {
                  Yt === null && (Yt = sa);
                  break;
                }
                e && Yt && Cr.alternate === null && t(D, Yt),
                  (ar = s(Cr, ar, Bn)),
                  Ze === null ? (qt = Cr) : (Ze.sibling = Cr),
                  (Ze = Cr),
                  (Yt = sa);
              }
              if (Sr.done) {
                if ((a(D, Yt), Nn())) {
                  var ir = Bn;
                  Po(D, ir);
                }
                return qt;
              }
              if (Yt === null) {
                for (; !Sr.done; Bn++, Sr = qe.next()) {
                  var Al = R(D, Sr.value, $);
                  Al !== null &&
                    ((ar = s(Al, ar, Bn)), Ze === null ? (qt = Al) : (Ze.sibling = Al), (Ze = Al));
                }
                if (Nn()) {
                  var Zc = Bn;
                  Po(D, Zc);
                }
                return qt;
              }
              for (var Sp = i(D, Yt); !Sr.done; Bn++, Sr = qe.next()) {
                var $i = _(Sp, D, Bn, Sr.value, $);
                $i !== null &&
                  (e && $i.alternate !== null && Sp.delete($i.key === null ? Bn : $i.key),
                  (ar = s($i, ar, Bn)),
                  Ze === null ? (qt = $i) : (Ze.sibling = $i),
                  (Ze = $i));
              }
              if (
                (e &&
                  Sp.forEach(function (Gk) {
                    return t(D, Gk);
                  }),
                Nn())
              ) {
                var Ik = Bn;
                Po(D, Ik);
              }
              return qt;
            }
            function Ee(D, U, k, $) {
              if (U !== null && U.tag === me) {
                a(D, U.sibling);
                var ie = u(U, k);
                return (ie.return = D), ie;
              }
              a(D, U);
              var ee = qS(k, D.mode, $);
              return (ee.return = D), ee;
            }
            function ye(D, U, k, $) {
              for (var ie = k.key, ee = U; ee !== null; ) {
                if (ee.key === ie) {
                  var Oe = k.type;
                  if (Oe === Oa) {
                    if (ee.tag === De) {
                      a(D, ee.sibling);
                      var ze = u(ee, k.props.children);
                      return (
                        (ze.return = D),
                        (ze._debugSource = k._source),
                        (ze._debugOwner = k._owner),
                        ze
                      );
                    }
                  } else if (
                    ee.elementType === Oe || // Keep this check inline so it only runs on the false path:
                    vE(ee, k) || // Lazy types should reconcile their resolved type.
                    // We need to do this after the Hot Reloading check above,
                    // because hot reloading has different semantics than prod because
                    // it doesn't resuspend. So we can't let the call below suspend.
                    (typeof Oe == 'object' &&
                      Oe !== null &&
                      Oe.$$typeof === On &&
                      R1(Oe) === ee.type)
                  ) {
                    a(D, ee.sibling);
                    var st = u(ee, k.props);
                    return (
                      (st.ref = Yd(D, ee, k)),
                      (st.return = D),
                      (st._debugSource = k._source),
                      (st._debugOwner = k._owner),
                      st
                    );
                  }
                  a(D, ee);
                  break;
                } else t(D, ee);
                ee = ee.sibling;
              }
              if (k.type === Oa) {
                var qe = ju(k.props.children, D.mode, $, k.key);
                return (qe.return = D), qe;
              } else {
                var qt = KS(k, D.mode, $);
                return (qt.ref = Yd(D, U, k)), (qt.return = D), qt;
              }
            }
            function Xe(D, U, k, $) {
              for (var ie = k.key, ee = U; ee !== null; ) {
                if (ee.key === ie)
                  if (
                    ee.tag === P &&
                    ee.stateNode.containerInfo === k.containerInfo &&
                    ee.stateNode.implementation === k.implementation
                  ) {
                    a(D, ee.sibling);
                    var Oe = u(ee, k.children || []);
                    return (Oe.return = D), Oe;
                  } else {
                    a(D, ee);
                    break;
                  }
                else t(D, ee);
                ee = ee.sibling;
              }
              var ze = ZS(k, D.mode, $);
              return (ze.return = D), ze;
            }
            function Qe(D, U, k, $) {
              var ie = typeof k == 'object' && k !== null && k.type === Oa && k.key === null;
              if ((ie && (k = k.props.children), typeof k == 'object' && k !== null)) {
                switch (k.$$typeof) {
                  case Bl:
                    return f(ye(D, U, k, $));
                  case Zr:
                    return f(Xe(D, U, k, $));
                  case On:
                    var ee = k._payload,
                      Oe = k._init;
                    return Qe(D, U, Oe(ee), $);
                }
                if (Zt(k)) return z(D, U, k, $);
                if (Ma(k)) return ae(D, U, k, $);
                Uh(D, k);
              }
              return (typeof k == 'string' && k !== '') || typeof k == 'number'
                ? f(Ee(D, U, '' + k, $))
                : (typeof k == 'function' && Ah(D), a(D, U));
            }
            return Qe;
          }
          var Ac = x1(!0),
            w1 = x1(!1);
          function zx(e, t) {
            if (e !== null && t.child !== e.child)
              throw new Error('Resuming work not yet implemented.');
            if (t.child !== null) {
              var a = t.child,
                i = ts(a, a.pendingProps);
              for (t.child = i, i.return = t; a.sibling !== null; )
                (a = a.sibling), (i = i.sibling = ts(a, a.pendingProps)), (i.return = t);
              i.sibling = null;
            }
          }
          function Ux(e, t) {
            for (var a = e.child; a !== null; ) ck(a, t), (a = a.sibling);
          }
          var $d = {},
            Lu = ku($d),
            Qd = ku($d),
            Hh = ku($d);
          function Fh(e) {
            if (e === $d)
              throw new Error(
                'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.',
              );
            return e;
          }
          function D1() {
            var e = Fh(Hh.current);
            return e;
          }
          function wg(e, t) {
            nr(Hh, t, e), nr(Qd, e, e), nr(Lu, $d, e);
            var a = XT(t);
            tr(Lu, e), nr(Lu, a, e);
          }
          function Hc(e) {
            tr(Lu, e), tr(Qd, e), tr(Hh, e);
          }
          function Dg() {
            var e = Fh(Lu.current);
            return e;
          }
          function k1(e) {
            Fh(Hh.current);
            var t = Fh(Lu.current),
              a = KT(t, e.type);
            t !== a && (nr(Qd, e, e), nr(Lu, a, e));
          }
          function kg(e) {
            Qd.current === e && (tr(Lu, e), tr(Qd, e));
          }
          var Ax = 0,
            b1 = 1,
            _1 = 1,
            Id = 2,
            Za = ku(Ax);
          function bg(e, t) {
            return (e & t) !== 0;
          }
          function Fc(e) {
            return e & b1;
          }
          function _g(e, t) {
            return (e & b1) | t;
          }
          function Hx(e, t) {
            return e | t;
          }
          function Nu(e, t) {
            nr(Za, t, e);
          }
          function Vc(e) {
            tr(Za, e);
          }
          function Fx(e, t) {
            var a = e.memoizedState;
            return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
          }
          function Vh(e) {
            for (var t = e; t !== null; ) {
              if (t.tag === Te) {
                var a = t.memoizedState;
                if (a !== null) {
                  var i = a.dehydrated;
                  if (i === null || V0(i) || Uy(i)) return t;
                }
              } else if (
                t.tag === vt && // revealOrder undefined can't be trusted because it don't
                // keep track of whether it suspended or not.
                t.memoizedProps.revealOrder !== void 0
              ) {
                var u = (t.flags & Me) !== Ce;
                if (u) return t;
              } else if (t.child !== null) {
                (t.child.return = t), (t = t.child);
                continue;
              }
              if (t === e) return null;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
            return null;
          }
          var Yr =
              /*   */
              0,
            cn =
              /* */
              1,
            Hi =
              /*  */
              2,
            fn =
              /*    */
              4,
            zn =
              /*   */
              8,
            Og = [];
          function Mg() {
            for (var e = 0; e < Og.length; e++) {
              var t = Og[e];
              t._workInProgressVersionPrimary = null;
            }
            Og.length = 0;
          }
          function Vx(e, t) {
            var a = t._getVersion,
              i = a(t._source);
            e.mutableSourceEagerHydrationData == null
              ? (e.mutableSourceEagerHydrationData = [t, i])
              : e.mutableSourceEagerHydrationData.push(t, i);
          }
          var ne = w.ReactCurrentDispatcher,
            Gd = w.ReactCurrentBatchConfig,
            Lg,
            Bc;
          Lg = /* @__PURE__ */ new Set();
          var Wo = A,
            ot = null,
            dn = null,
            pn = null,
            Bh = !1,
            Wd = !1,
            Xd = 0,
            Bx = 0,
            jx = 25,
            H = null,
            xa = null,
            zu = -1,
            Ng = !1;
          function tt() {
            {
              var e = H;
              xa === null ? (xa = [e]) : xa.push(e);
            }
          }
          function X() {
            {
              var e = H;
              xa !== null && (zu++, xa[zu] !== e && Px(e));
            }
          }
          function jc(e) {
            e != null &&
              !Zt(e) &&
              g(
                '%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.',
                H,
                typeof e,
              );
          }
          function Px(e) {
            {
              var t = Ue(ot);
              if (!Lg.has(t) && (Lg.add(t), xa !== null)) {
                for (var a = '', i = 30, u = 0; u <= zu; u++) {
                  for (var s = xa[u], f = u === zu ? e : s, p = u + 1 + '. ' + s; p.length < i; )
                    p += ' ';
                  (p +=
                    f +
                    `
`),
                    (a += p);
                }
                g(
                  `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
                  t,
                  a,
                );
              }
            }
          }
          function rr() {
            throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
          }
          function zg(e, t) {
            if (Ng) return !1;
            if (t === null)
              return (
                g(
                  '%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.',
                  H,
                ),
                !1
              );
            e.length !== t.length &&
              g(
                `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
                H,
                '[' + t.join(', ') + ']',
                '[' + e.join(', ') + ']',
              );
            for (var a = 0; a < t.length && a < e.length; a++) if (!fe(e[a], t[a])) return !1;
            return !0;
          }
          function Pc(e, t, a, i, u, s) {
            (Wo = s),
              (ot = t),
              (xa = e !== null ? e._debugHookTypes : null),
              (zu = -1),
              (Ng = e !== null && e.type !== t.type),
              (t.memoizedState = null),
              (t.updateQueue = null),
              (t.lanes = A),
              e !== null && e.memoizedState !== null
                ? (ne.current = q1)
                : xa !== null
                  ? (ne.current = K1)
                  : (ne.current = X1);
            var f = a(i, u);
            if (Wd) {
              var p = 0;
              do {
                if (((Wd = !1), (Xd = 0), p >= jx))
                  throw new Error(
                    'Too many re-renders. React limits the number of renders to prevent an infinite loop.',
                  );
                (p += 1),
                  (Ng = !1),
                  (dn = null),
                  (pn = null),
                  (t.updateQueue = null),
                  (zu = -1),
                  (ne.current = Z1),
                  (f = a(i, u));
              } while (Wd);
            }
            (ne.current = Jh), (t._debugHookTypes = xa);
            var v = dn !== null && dn.next !== null;
            if (
              ((Wo = A),
              (ot = null),
              (dn = null),
              (pn = null),
              (H = null),
              (xa = null),
              (zu = -1),
              e !== null &&
                (e.flags & un) !== (t.flags & un) && // Disable this warning in legacy mode, because legacy Suspense is weird
                // and creates false positives. To make this work in legacy mode, we'd
                // need to mark fibers that commit in an incomplete state, somehow. For
                // now I'll disable the warning that most of the bugs that would trigger
                // it are either exclusive to concurrent mode or exist in both.
                (e.mode & Be) !== xe &&
                g(
                  'Internal React error: Expected static flag was missing. Please notify the React team.',
                ),
              (Bh = !1),
              v)
            )
              throw new Error(
                'Rendered fewer hooks than expected. This may be caused by an accidental early return statement.',
              );
            return f;
          }
          function Yc() {
            var e = Xd !== 0;
            return (Xd = 0), e;
          }
          function O1(e, t, a) {
            (t.updateQueue = e.updateQueue),
              (t.mode & Ur) !== xe ? (t.flags &= ~(al | Xn | Ct | Ae)) : (t.flags &= ~(Ct | Ae)),
              (e.lanes = cu(e.lanes, a));
          }
          function M1() {
            if (((ne.current = Jh), Bh)) {
              for (var e = ot.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null), (e = e.next);
              }
              Bh = !1;
            }
            (Wo = A),
              (ot = null),
              (dn = null),
              (pn = null),
              (xa = null),
              (zu = -1),
              (H = null),
              ($1 = !1),
              (Wd = !1),
              (Xd = 0);
          }
          function Fi() {
            var e = {
              memoizedState: null,
              baseState: null,
              baseQueue: null,
              queue: null,
              next: null,
            };
            return pn === null ? (ot.memoizedState = pn = e) : (pn = pn.next = e), pn;
          }
          function wa() {
            var e;
            if (dn === null) {
              var t = ot.alternate;
              t !== null ? (e = t.memoizedState) : (e = null);
            } else e = dn.next;
            var a;
            if ((pn === null ? (a = ot.memoizedState) : (a = pn.next), a !== null))
              (pn = a), (a = pn.next), (dn = e);
            else {
              if (e === null)
                throw new Error('Rendered more hooks than during the previous render.');
              dn = e;
              var i = {
                memoizedState: dn.memoizedState,
                baseState: dn.baseState,
                baseQueue: dn.baseQueue,
                queue: dn.queue,
                next: null,
              };
              pn === null ? (ot.memoizedState = pn = i) : (pn = pn.next = i);
            }
            return pn;
          }
          function L1() {
            return {
              lastEffect: null,
              stores: null,
            };
          }
          function Ug(e, t) {
            return typeof t == 'function' ? t(e) : t;
          }
          function Ag(e, t, a) {
            var i = Fi(),
              u;
            a !== void 0 ? (u = a(t)) : (u = t), (i.memoizedState = i.baseState = u);
            var s = {
              pending: null,
              interleaved: null,
              lanes: A,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: u,
            };
            i.queue = s;
            var f = (s.dispatch = Ix.bind(null, ot, s));
            return [i.memoizedState, f];
          }
          function Hg(e, t, a) {
            var i = wa(),
              u = i.queue;
            if (u === null)
              throw new Error(
                'Should have a queue. This is likely a bug in React. Please file an issue.',
              );
            u.lastRenderedReducer = e;
            var s = dn,
              f = s.baseQueue,
              p = u.pending;
            if (p !== null) {
              if (f !== null) {
                var v = f.next,
                  m = p.next;
                (f.next = m), (p.next = v);
              }
              s.baseQueue !== f &&
                g(
                  'Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.',
                ),
                (s.baseQueue = f = p),
                (u.pending = null);
            }
            if (f !== null) {
              var y = f.next,
                R = s.baseState,
                E = null,
                _ = null,
                O = null,
                z = y;
              do {
                var ae = z.lane;
                if (vl(Wo, ae)) {
                  if (O !== null) {
                    var ye = {
                      // This update is going to be committed so we never want uncommit
                      // it. Using NoLane works because 0 is a subset of all bitmasks, so
                      // this will never be skipped by the check above.
                      lane: Ge,
                      action: z.action,
                      hasEagerState: z.hasEagerState,
                      eagerState: z.eagerState,
                      next: null,
                    };
                    O = O.next = ye;
                  }
                  if (z.hasEagerState) R = z.eagerState;
                  else {
                    var Xe = z.action;
                    R = e(R, Xe);
                  }
                } else {
                  var Ee = {
                    lane: ae,
                    action: z.action,
                    hasEagerState: z.hasEagerState,
                    eagerState: z.eagerState,
                    next: null,
                  };
                  O === null ? ((_ = O = Ee), (E = R)) : (O = O.next = Ee),
                    (ot.lanes = He(ot.lanes, ae)),
                    vp(ae);
                }
                z = z.next;
              } while (z !== null && z !== y);
              O === null ? (E = R) : (O.next = _),
                fe(R, i.memoizedState) || np(),
                (i.memoizedState = R),
                (i.baseState = E),
                (i.baseQueue = O),
                (u.lastRenderedState = R);
            }
            var Qe = u.interleaved;
            if (Qe !== null) {
              var D = Qe;
              do {
                var U = D.lane;
                (ot.lanes = He(ot.lanes, U)), vp(U), (D = D.next);
              } while (D !== Qe);
            } else f === null && (u.lanes = A);
            var k = u.dispatch;
            return [i.memoizedState, k];
          }
          function Fg(e, t, a) {
            var i = wa(),
              u = i.queue;
            if (u === null)
              throw new Error(
                'Should have a queue. This is likely a bug in React. Please file an issue.',
              );
            u.lastRenderedReducer = e;
            var s = u.dispatch,
              f = u.pending,
              p = i.memoizedState;
            if (f !== null) {
              u.pending = null;
              var v = f.next,
                m = v;
              do {
                var y = m.action;
                (p = e(p, y)), (m = m.next);
              } while (m !== v);
              fe(p, i.memoizedState) || np(),
                (i.memoizedState = p),
                i.baseQueue === null && (i.baseState = p),
                (u.lastRenderedState = p);
            }
            return [p, s];
          }
          function Db(e, t, a) {}
          function kb(e, t, a) {}
          function Vg(e, t, a) {
            var i = ot,
              u = Fi(),
              s,
              f = Nn();
            if (f) {
              if (a === void 0)
                throw new Error(
                  'Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.',
                );
              (s = a()),
                Bc ||
                  (s !== a() &&
                    (g(
                      'The result of getServerSnapshot should be cached to avoid an infinite loop',
                    ),
                    (Bc = !0)));
            } else {
              if (((s = t()), !Bc)) {
                var p = t();
                fe(s, p) ||
                  (g('The result of getSnapshot should be cached to avoid an infinite loop'),
                  (Bc = !0));
              }
              var v = ym();
              if (v === null)
                throw new Error(
                  'Expected a work-in-progress root. This is a bug in React. Please file an issue.',
                );
              wo(v, Wo) || N1(i, t, s);
            }
            u.memoizedState = s;
            var m = {
              value: s,
              getSnapshot: t,
            };
            return (
              (u.queue = m),
              Qh(U1.bind(null, i, m, e), [e]),
              (i.flags |= Ct),
              Kd(cn | zn, z1.bind(null, i, m, s, t), void 0, null),
              s
            );
          }
          function jh(e, t, a) {
            var i = ot,
              u = wa(),
              s = t();
            if (!Bc) {
              var f = t();
              fe(s, f) ||
                (g('The result of getSnapshot should be cached to avoid an infinite loop'),
                (Bc = !0));
            }
            var p = u.memoizedState,
              v = !fe(p, s);
            v && ((u.memoizedState = s), np());
            var m = u.queue;
            if (
              (Zd(U1.bind(null, i, m, e), [e]),
              m.getSnapshot !== t ||
                v || // Check if the susbcribe function changed. We can save some memory by
                // checking whether we scheduled a subscription effect above.
                (pn !== null && pn.memoizedState.tag & cn))
            ) {
              (i.flags |= Ct), Kd(cn | zn, z1.bind(null, i, m, s, t), void 0, null);
              var y = ym();
              if (y === null)
                throw new Error(
                  'Expected a work-in-progress root. This is a bug in React. Please file an issue.',
                );
              wo(y, Wo) || N1(i, t, s);
            }
            return s;
          }
          function N1(e, t, a) {
            e.flags |= mo;
            var i = {
                getSnapshot: t,
                value: a,
              },
              u = ot.updateQueue;
            if (u === null) (u = L1()), (ot.updateQueue = u), (u.stores = [i]);
            else {
              var s = u.stores;
              s === null ? (u.stores = [i]) : s.push(i);
            }
          }
          function z1(e, t, a, i) {
            (t.value = a), (t.getSnapshot = i), A1(t) && H1(e);
          }
          function U1(e, t, a) {
            var i = function () {
              A1(t) && H1(e);
            };
            return a(i);
          }
          function A1(e) {
            var t = e.getSnapshot,
              a = e.value;
            try {
              var i = t();
              return !fe(a, i);
            } catch {
              return !0;
            }
          }
          function H1(e) {
            var t = Pr(e, ke);
            t !== null && yn(t, e, ke, pt);
          }
          function Ph(e) {
            var t = Fi();
            typeof e == 'function' && (e = e()), (t.memoizedState = t.baseState = e);
            var a = {
              pending: null,
              interleaved: null,
              lanes: A,
              dispatch: null,
              lastRenderedReducer: Ug,
              lastRenderedState: e,
            };
            t.queue = a;
            var i = (a.dispatch = Gx.bind(null, ot, a));
            return [t.memoizedState, i];
          }
          function Bg(e) {
            return Hg(Ug);
          }
          function jg(e) {
            return Fg(Ug);
          }
          function Kd(e, t, a, i) {
            var u = {
                tag: e,
                create: t,
                destroy: a,
                deps: i,
                // Circular
                next: null,
              },
              s = ot.updateQueue;
            if (s === null) (s = L1()), (ot.updateQueue = s), (s.lastEffect = u.next = u);
            else {
              var f = s.lastEffect;
              if (f === null) s.lastEffect = u.next = u;
              else {
                var p = f.next;
                (f.next = u), (u.next = p), (s.lastEffect = u);
              }
            }
            return u;
          }
          function Pg(e) {
            var t = Fi();
            {
              var a = {
                current: e,
              };
              return (t.memoizedState = a), a;
            }
          }
          function Yh(e) {
            var t = wa();
            return t.memoizedState;
          }
          function qd(e, t, a, i) {
            var u = Fi(),
              s = i === void 0 ? null : i;
            (ot.flags |= e), (u.memoizedState = Kd(cn | t, a, void 0, s));
          }
          function $h(e, t, a, i) {
            var u = wa(),
              s = i === void 0 ? null : i,
              f = void 0;
            if (dn !== null) {
              var p = dn.memoizedState;
              if (((f = p.destroy), s !== null)) {
                var v = p.deps;
                if (zg(s, v)) {
                  u.memoizedState = Kd(t, a, f, s);
                  return;
                }
              }
            }
            (ot.flags |= e), (u.memoizedState = Kd(cn | t, a, f, s));
          }
          function Qh(e, t) {
            return (ot.mode & Ur) !== xe ? qd(al | Ct | Ci, zn, e, t) : qd(Ct | Ci, zn, e, t);
          }
          function Zd(e, t) {
            return $h(Ct, zn, e, t);
          }
          function Yg(e, t) {
            return qd(Ae, Hi, e, t);
          }
          function Ih(e, t) {
            return $h(Ae, Hi, e, t);
          }
          function $g(e, t) {
            var a = Ae;
            return (a |= Wn), (ot.mode & Ur) !== xe && (a |= Xn), qd(a, fn, e, t);
          }
          function Gh(e, t) {
            return $h(Ae, fn, e, t);
          }
          function F1(e, t) {
            if (typeof t == 'function') {
              var a = t,
                i = e();
              return (
                a(i),
                function () {
                  a(null);
                }
              );
            } else if (t != null) {
              var u = t;
              u.hasOwnProperty('current') ||
                g(
                  'Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.',
                  'an object with keys {' + Object.keys(u).join(', ') + '}',
                );
              var s = e();
              return (
                (u.current = s),
                function () {
                  u.current = null;
                }
              );
            }
          }
          function Qg(e, t, a) {
            typeof t != 'function' &&
              g(
                'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
                t !== null ? typeof t : 'null',
              );
            var i = a != null ? a.concat([e]) : null,
              u = Ae;
            return (u |= Wn), (ot.mode & Ur) !== xe && (u |= Xn), qd(u, fn, F1.bind(null, t, e), i);
          }
          function Wh(e, t, a) {
            typeof t != 'function' &&
              g(
                'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
                t !== null ? typeof t : 'null',
              );
            var i = a != null ? a.concat([e]) : null;
            return $h(Ae, fn, F1.bind(null, t, e), i);
          }
          function Yx(e, t) {}
          var Xh = Yx;
          function Ig(e, t) {
            var a = Fi(),
              i = t === void 0 ? null : t;
            return (a.memoizedState = [e, i]), e;
          }
          function Kh(e, t) {
            var a = wa(),
              i = t === void 0 ? null : t,
              u = a.memoizedState;
            if (u !== null && i !== null) {
              var s = u[1];
              if (zg(i, s)) return u[0];
            }
            return (a.memoizedState = [e, i]), e;
          }
          function Gg(e, t) {
            var a = Fi(),
              i = t === void 0 ? null : t,
              u = e();
            return (a.memoizedState = [u, i]), u;
          }
          function qh(e, t) {
            var a = wa(),
              i = t === void 0 ? null : t,
              u = a.memoizedState;
            if (u !== null && i !== null) {
              var s = u[1];
              if (zg(i, s)) return u[0];
            }
            var f = e();
            return (a.memoizedState = [f, i]), f;
          }
          function Wg(e) {
            var t = Fi();
            return (t.memoizedState = e), e;
          }
          function V1(e) {
            var t = wa(),
              a = dn,
              i = a.memoizedState;
            return j1(t, i, e);
          }
          function B1(e) {
            var t = wa();
            if (dn === null) return (t.memoizedState = e), e;
            var a = dn.memoizedState;
            return j1(t, a, e);
          }
          function j1(e, t, a) {
            var i = !ey(Wo);
            if (i) {
              if (!fe(a, t)) {
                var u = Jf();
                (ot.lanes = He(ot.lanes, u)), vp(u), (e.baseState = !0);
              }
              return t;
            } else return e.baseState && ((e.baseState = !1), np()), (e.memoizedState = a), a;
          }
          function $x(e, t, a) {
            var i = Hr();
            Wt(Rn(i, sn)), e(!0);
            var u = Gd.transition;
            Gd.transition = {};
            var s = Gd.transition;
            Gd.transition._updatedFibers = /* @__PURE__ */ new Set();
            try {
              e(!1), t();
            } finally {
              if ((Wt(i), (Gd.transition = u), u === null && s._updatedFibers)) {
                var f = s._updatedFibers.size;
                f > 10 &&
                  se(
                    'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.',
                  ),
                  s._updatedFibers.clear();
              }
            }
          }
          function Xg() {
            var e = Ph(!1),
              t = e[0],
              a = e[1],
              i = $x.bind(null, a),
              u = Fi();
            return (u.memoizedState = i), [t, i];
          }
          function P1() {
            var e = Bg(),
              t = e[0],
              a = wa(),
              i = a.memoizedState;
            return [t, i];
          }
          function Y1() {
            var e = jg(),
              t = e[0],
              a = wa(),
              i = a.memoizedState;
            return [t, i];
          }
          var $1 = !1;
          function Qx() {
            return $1;
          }
          function Kg() {
            var e = Fi(),
              t = ym(),
              a = t.identifierPrefix,
              i;
            if (Nn()) {
              var u = ix();
              i = ':' + a + 'R' + u;
              var s = Xd++;
              s > 0 && (i += 'H' + s.toString(32)), (i += ':');
            } else {
              var f = Bx++;
              i = ':' + a + 'r' + f.toString(32) + ':';
            }
            return (e.memoizedState = i), i;
          }
          function Zh() {
            var e = wa(),
              t = e.memoizedState;
            return t;
          }
          function Ix(e, t, a) {
            typeof arguments[3] == 'function' &&
              g(
                "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().",
              );
            var i = Vu(e),
              u = {
                lane: i,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null,
              };
            if (Q1(e)) I1(t, u);
            else {
              var s = s1(e, t, u, i);
              if (s !== null) {
                var f = gr();
                yn(s, e, i, f), G1(s, t, i);
              }
            }
            W1(e, i);
          }
          function Gx(e, t, a) {
            typeof arguments[3] == 'function' &&
              g(
                "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().",
              );
            var i = Vu(e),
              u = {
                lane: i,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null,
              };
            if (Q1(e)) I1(t, u);
            else {
              var s = e.alternate;
              if (e.lanes === A && (s === null || s.lanes === A)) {
                var f = t.lastRenderedReducer;
                if (f !== null) {
                  var p;
                  (p = ne.current), (ne.current = Ja);
                  try {
                    var v = t.lastRenderedState,
                      m = f(v, a);
                    if (((u.hasEagerState = !0), (u.eagerState = m), fe(m, v))) {
                      wx(e, t, u, i);
                      return;
                    }
                  } catch {
                  } finally {
                    ne.current = p;
                  }
                }
              }
              var y = s1(e, t, u, i);
              if (y !== null) {
                var R = gr();
                yn(y, e, i, R), G1(y, t, i);
              }
            }
            W1(e, i);
          }
          function Q1(e) {
            var t = e.alternate;
            return e === ot || (t !== null && t === ot);
          }
          function I1(e, t) {
            Wd = Bh = !0;
            var a = e.pending;
            a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)), (e.pending = t);
          }
          function G1(e, t, a) {
            if (Zf(a)) {
              var i = t.lanes;
              i = ed(i, e.pendingLanes);
              var u = He(i, a);
              (t.lanes = u), fu(e, u);
            }
          }
          function W1(e, t, a) {
            Di(e, t);
          }
          var Jh = {
              readContext: ln,
              useCallback: rr,
              useContext: rr,
              useEffect: rr,
              useImperativeHandle: rr,
              useInsertionEffect: rr,
              useLayoutEffect: rr,
              useMemo: rr,
              useReducer: rr,
              useRef: rr,
              useState: rr,
              useDebugValue: rr,
              useDeferredValue: rr,
              useTransition: rr,
              useMutableSource: rr,
              useSyncExternalStore: rr,
              useId: rr,
              unstable_isNewReconciler: q,
            },
            X1 = null,
            K1 = null,
            q1 = null,
            Z1 = null,
            Vi = null,
            Ja = null,
            em = null;
          {
            var qg = function () {
                g(
                  'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().',
                );
              },
              Ne = function () {
                g(
                  'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks',
                );
              };
            (X1 = {
              readContext: function (e) {
                return ln(e);
              },
              useCallback: function (e, t) {
                return (H = 'useCallback'), tt(), jc(t), Ig(e, t);
              },
              useContext: function (e) {
                return (H = 'useContext'), tt(), ln(e);
              },
              useEffect: function (e, t) {
                return (H = 'useEffect'), tt(), jc(t), Qh(e, t);
              },
              useImperativeHandle: function (e, t, a) {
                return (H = 'useImperativeHandle'), tt(), jc(a), Qg(e, t, a);
              },
              useInsertionEffect: function (e, t) {
                return (H = 'useInsertionEffect'), tt(), jc(t), Yg(e, t);
              },
              useLayoutEffect: function (e, t) {
                return (H = 'useLayoutEffect'), tt(), jc(t), $g(e, t);
              },
              useMemo: function (e, t) {
                (H = 'useMemo'), tt(), jc(t);
                var a = ne.current;
                ne.current = Vi;
                try {
                  return Gg(e, t);
                } finally {
                  ne.current = a;
                }
              },
              useReducer: function (e, t, a) {
                (H = 'useReducer'), tt();
                var i = ne.current;
                ne.current = Vi;
                try {
                  return Ag(e, t, a);
                } finally {
                  ne.current = i;
                }
              },
              useRef: function (e) {
                return (H = 'useRef'), tt(), Pg(e);
              },
              useState: function (e) {
                (H = 'useState'), tt();
                var t = ne.current;
                ne.current = Vi;
                try {
                  return Ph(e);
                } finally {
                  ne.current = t;
                }
              },
              useDebugValue: function (e, t) {
                return (H = 'useDebugValue'), tt(), void 0;
              },
              useDeferredValue: function (e) {
                return (H = 'useDeferredValue'), tt(), Wg(e);
              },
              useTransition: function () {
                return (H = 'useTransition'), tt(), Xg();
              },
              useMutableSource: function (e, t, a) {
                return (H = 'useMutableSource'), tt(), void 0;
              },
              useSyncExternalStore: function (e, t, a) {
                return (H = 'useSyncExternalStore'), tt(), Vg(e, t, a);
              },
              useId: function () {
                return (H = 'useId'), tt(), Kg();
              },
              unstable_isNewReconciler: q,
            }),
              (K1 = {
                readContext: function (e) {
                  return ln(e);
                },
                useCallback: function (e, t) {
                  return (H = 'useCallback'), X(), Ig(e, t);
                },
                useContext: function (e) {
                  return (H = 'useContext'), X(), ln(e);
                },
                useEffect: function (e, t) {
                  return (H = 'useEffect'), X(), Qh(e, t);
                },
                useImperativeHandle: function (e, t, a) {
                  return (H = 'useImperativeHandle'), X(), Qg(e, t, a);
                },
                useInsertionEffect: function (e, t) {
                  return (H = 'useInsertionEffect'), X(), Yg(e, t);
                },
                useLayoutEffect: function (e, t) {
                  return (H = 'useLayoutEffect'), X(), $g(e, t);
                },
                useMemo: function (e, t) {
                  (H = 'useMemo'), X();
                  var a = ne.current;
                  ne.current = Vi;
                  try {
                    return Gg(e, t);
                  } finally {
                    ne.current = a;
                  }
                },
                useReducer: function (e, t, a) {
                  (H = 'useReducer'), X();
                  var i = ne.current;
                  ne.current = Vi;
                  try {
                    return Ag(e, t, a);
                  } finally {
                    ne.current = i;
                  }
                },
                useRef: function (e) {
                  return (H = 'useRef'), X(), Pg(e);
                },
                useState: function (e) {
                  (H = 'useState'), X();
                  var t = ne.current;
                  ne.current = Vi;
                  try {
                    return Ph(e);
                  } finally {
                    ne.current = t;
                  }
                },
                useDebugValue: function (e, t) {
                  return (H = 'useDebugValue'), X(), void 0;
                },
                useDeferredValue: function (e) {
                  return (H = 'useDeferredValue'), X(), Wg(e);
                },
                useTransition: function () {
                  return (H = 'useTransition'), X(), Xg();
                },
                useMutableSource: function (e, t, a) {
                  return (H = 'useMutableSource'), X(), void 0;
                },
                useSyncExternalStore: function (e, t, a) {
                  return (H = 'useSyncExternalStore'), X(), Vg(e, t, a);
                },
                useId: function () {
                  return (H = 'useId'), X(), Kg();
                },
                unstable_isNewReconciler: q,
              }),
              (q1 = {
                readContext: function (e) {
                  return ln(e);
                },
                useCallback: function (e, t) {
                  return (H = 'useCallback'), X(), Kh(e, t);
                },
                useContext: function (e) {
                  return (H = 'useContext'), X(), ln(e);
                },
                useEffect: function (e, t) {
                  return (H = 'useEffect'), X(), Zd(e, t);
                },
                useImperativeHandle: function (e, t, a) {
                  return (H = 'useImperativeHandle'), X(), Wh(e, t, a);
                },
                useInsertionEffect: function (e, t) {
                  return (H = 'useInsertionEffect'), X(), Ih(e, t);
                },
                useLayoutEffect: function (e, t) {
                  return (H = 'useLayoutEffect'), X(), Gh(e, t);
                },
                useMemo: function (e, t) {
                  (H = 'useMemo'), X();
                  var a = ne.current;
                  ne.current = Ja;
                  try {
                    return qh(e, t);
                  } finally {
                    ne.current = a;
                  }
                },
                useReducer: function (e, t, a) {
                  (H = 'useReducer'), X();
                  var i = ne.current;
                  ne.current = Ja;
                  try {
                    return Hg(e, t, a);
                  } finally {
                    ne.current = i;
                  }
                },
                useRef: function (e) {
                  return (H = 'useRef'), X(), Yh();
                },
                useState: function (e) {
                  (H = 'useState'), X();
                  var t = ne.current;
                  ne.current = Ja;
                  try {
                    return Bg(e);
                  } finally {
                    ne.current = t;
                  }
                },
                useDebugValue: function (e, t) {
                  return (H = 'useDebugValue'), X(), Xh();
                },
                useDeferredValue: function (e) {
                  return (H = 'useDeferredValue'), X(), V1(e);
                },
                useTransition: function () {
                  return (H = 'useTransition'), X(), P1();
                },
                useMutableSource: function (e, t, a) {
                  return (H = 'useMutableSource'), X(), void 0;
                },
                useSyncExternalStore: function (e, t, a) {
                  return (H = 'useSyncExternalStore'), X(), jh(e, t);
                },
                useId: function () {
                  return (H = 'useId'), X(), Zh();
                },
                unstable_isNewReconciler: q,
              }),
              (Z1 = {
                readContext: function (e) {
                  return ln(e);
                },
                useCallback: function (e, t) {
                  return (H = 'useCallback'), X(), Kh(e, t);
                },
                useContext: function (e) {
                  return (H = 'useContext'), X(), ln(e);
                },
                useEffect: function (e, t) {
                  return (H = 'useEffect'), X(), Zd(e, t);
                },
                useImperativeHandle: function (e, t, a) {
                  return (H = 'useImperativeHandle'), X(), Wh(e, t, a);
                },
                useInsertionEffect: function (e, t) {
                  return (H = 'useInsertionEffect'), X(), Ih(e, t);
                },
                useLayoutEffect: function (e, t) {
                  return (H = 'useLayoutEffect'), X(), Gh(e, t);
                },
                useMemo: function (e, t) {
                  (H = 'useMemo'), X();
                  var a = ne.current;
                  ne.current = em;
                  try {
                    return qh(e, t);
                  } finally {
                    ne.current = a;
                  }
                },
                useReducer: function (e, t, a) {
                  (H = 'useReducer'), X();
                  var i = ne.current;
                  ne.current = em;
                  try {
                    return Fg(e, t, a);
                  } finally {
                    ne.current = i;
                  }
                },
                useRef: function (e) {
                  return (H = 'useRef'), X(), Yh();
                },
                useState: function (e) {
                  (H = 'useState'), X();
                  var t = ne.current;
                  ne.current = em;
                  try {
                    return jg(e);
                  } finally {
                    ne.current = t;
                  }
                },
                useDebugValue: function (e, t) {
                  return (H = 'useDebugValue'), X(), Xh();
                },
                useDeferredValue: function (e) {
                  return (H = 'useDeferredValue'), X(), B1(e);
                },
                useTransition: function () {
                  return (H = 'useTransition'), X(), Y1();
                },
                useMutableSource: function (e, t, a) {
                  return (H = 'useMutableSource'), X(), void 0;
                },
                useSyncExternalStore: function (e, t, a) {
                  return (H = 'useSyncExternalStore'), X(), jh(e, t);
                },
                useId: function () {
                  return (H = 'useId'), X(), Zh();
                },
                unstable_isNewReconciler: q,
              }),
              (Vi = {
                readContext: function (e) {
                  return qg(), ln(e);
                },
                useCallback: function (e, t) {
                  return (H = 'useCallback'), Ne(), tt(), Ig(e, t);
                },
                useContext: function (e) {
                  return (H = 'useContext'), Ne(), tt(), ln(e);
                },
                useEffect: function (e, t) {
                  return (H = 'useEffect'), Ne(), tt(), Qh(e, t);
                },
                useImperativeHandle: function (e, t, a) {
                  return (H = 'useImperativeHandle'), Ne(), tt(), Qg(e, t, a);
                },
                useInsertionEffect: function (e, t) {
                  return (H = 'useInsertionEffect'), Ne(), tt(), Yg(e, t);
                },
                useLayoutEffect: function (e, t) {
                  return (H = 'useLayoutEffect'), Ne(), tt(), $g(e, t);
                },
                useMemo: function (e, t) {
                  (H = 'useMemo'), Ne(), tt();
                  var a = ne.current;
                  ne.current = Vi;
                  try {
                    return Gg(e, t);
                  } finally {
                    ne.current = a;
                  }
                },
                useReducer: function (e, t, a) {
                  (H = 'useReducer'), Ne(), tt();
                  var i = ne.current;
                  ne.current = Vi;
                  try {
                    return Ag(e, t, a);
                  } finally {
                    ne.current = i;
                  }
                },
                useRef: function (e) {
                  return (H = 'useRef'), Ne(), tt(), Pg(e);
                },
                useState: function (e) {
                  (H = 'useState'), Ne(), tt();
                  var t = ne.current;
                  ne.current = Vi;
                  try {
                    return Ph(e);
                  } finally {
                    ne.current = t;
                  }
                },
                useDebugValue: function (e, t) {
                  return (H = 'useDebugValue'), Ne(), tt(), void 0;
                },
                useDeferredValue: function (e) {
                  return (H = 'useDeferredValue'), Ne(), tt(), Wg(e);
                },
                useTransition: function () {
                  return (H = 'useTransition'), Ne(), tt(), Xg();
                },
                useMutableSource: function (e, t, a) {
                  return (H = 'useMutableSource'), Ne(), tt(), void 0;
                },
                useSyncExternalStore: function (e, t, a) {
                  return (H = 'useSyncExternalStore'), Ne(), tt(), Vg(e, t, a);
                },
                useId: function () {
                  return (H = 'useId'), Ne(), tt(), Kg();
                },
                unstable_isNewReconciler: q,
              }),
              (Ja = {
                readContext: function (e) {
                  return qg(), ln(e);
                },
                useCallback: function (e, t) {
                  return (H = 'useCallback'), Ne(), X(), Kh(e, t);
                },
                useContext: function (e) {
                  return (H = 'useContext'), Ne(), X(), ln(e);
                },
                useEffect: function (e, t) {
                  return (H = 'useEffect'), Ne(), X(), Zd(e, t);
                },
                useImperativeHandle: function (e, t, a) {
                  return (H = 'useImperativeHandle'), Ne(), X(), Wh(e, t, a);
                },
                useInsertionEffect: function (e, t) {
                  return (H = 'useInsertionEffect'), Ne(), X(), Ih(e, t);
                },
                useLayoutEffect: function (e, t) {
                  return (H = 'useLayoutEffect'), Ne(), X(), Gh(e, t);
                },
                useMemo: function (e, t) {
                  (H = 'useMemo'), Ne(), X();
                  var a = ne.current;
                  ne.current = Ja;
                  try {
                    return qh(e, t);
                  } finally {
                    ne.current = a;
                  }
                },
                useReducer: function (e, t, a) {
                  (H = 'useReducer'), Ne(), X();
                  var i = ne.current;
                  ne.current = Ja;
                  try {
                    return Hg(e, t, a);
                  } finally {
                    ne.current = i;
                  }
                },
                useRef: function (e) {
                  return (H = 'useRef'), Ne(), X(), Yh();
                },
                useState: function (e) {
                  (H = 'useState'), Ne(), X();
                  var t = ne.current;
                  ne.current = Ja;
                  try {
                    return Bg(e);
                  } finally {
                    ne.current = t;
                  }
                },
                useDebugValue: function (e, t) {
                  return (H = 'useDebugValue'), Ne(), X(), Xh();
                },
                useDeferredValue: function (e) {
                  return (H = 'useDeferredValue'), Ne(), X(), V1(e);
                },
                useTransition: function () {
                  return (H = 'useTransition'), Ne(), X(), P1();
                },
                useMutableSource: function (e, t, a) {
                  return (H = 'useMutableSource'), Ne(), X(), void 0;
                },
                useSyncExternalStore: function (e, t, a) {
                  return (H = 'useSyncExternalStore'), Ne(), X(), jh(e, t);
                },
                useId: function () {
                  return (H = 'useId'), Ne(), X(), Zh();
                },
                unstable_isNewReconciler: q,
              }),
              (em = {
                readContext: function (e) {
                  return qg(), ln(e);
                },
                useCallback: function (e, t) {
                  return (H = 'useCallback'), Ne(), X(), Kh(e, t);
                },
                useContext: function (e) {
                  return (H = 'useContext'), Ne(), X(), ln(e);
                },
                useEffect: function (e, t) {
                  return (H = 'useEffect'), Ne(), X(), Zd(e, t);
                },
                useImperativeHandle: function (e, t, a) {
                  return (H = 'useImperativeHandle'), Ne(), X(), Wh(e, t, a);
                },
                useInsertionEffect: function (e, t) {
                  return (H = 'useInsertionEffect'), Ne(), X(), Ih(e, t);
                },
                useLayoutEffect: function (e, t) {
                  return (H = 'useLayoutEffect'), Ne(), X(), Gh(e, t);
                },
                useMemo: function (e, t) {
                  (H = 'useMemo'), Ne(), X();
                  var a = ne.current;
                  ne.current = Ja;
                  try {
                    return qh(e, t);
                  } finally {
                    ne.current = a;
                  }
                },
                useReducer: function (e, t, a) {
                  (H = 'useReducer'), Ne(), X();
                  var i = ne.current;
                  ne.current = Ja;
                  try {
                    return Fg(e, t, a);
                  } finally {
                    ne.current = i;
                  }
                },
                useRef: function (e) {
                  return (H = 'useRef'), Ne(), X(), Yh();
                },
                useState: function (e) {
                  (H = 'useState'), Ne(), X();
                  var t = ne.current;
                  ne.current = Ja;
                  try {
                    return jg(e);
                  } finally {
                    ne.current = t;
                  }
                },
                useDebugValue: function (e, t) {
                  return (H = 'useDebugValue'), Ne(), X(), Xh();
                },
                useDeferredValue: function (e) {
                  return (H = 'useDeferredValue'), Ne(), X(), B1(e);
                },
                useTransition: function () {
                  return (H = 'useTransition'), Ne(), X(), Y1();
                },
                useMutableSource: function (e, t, a) {
                  return (H = 'useMutableSource'), Ne(), X(), void 0;
                },
                useSyncExternalStore: function (e, t, a) {
                  return (H = 'useSyncExternalStore'), Ne(), X(), jh(e, t);
                },
                useId: function () {
                  return (H = 'useId'), Ne(), X(), Zh();
                },
                unstable_isNewReconciler: q,
              });
          }
          var Uu = N.unstable_now,
            J1 = 0,
            tm = -1,
            Jd = -1,
            nm = -1,
            Zg = !1,
            rm = !1;
          function eC() {
            return Zg;
          }
          function Wx() {
            rm = !0;
          }
          function Xx() {
            (Zg = !1), (rm = !1);
          }
          function Kx() {
            (Zg = rm), (rm = !1);
          }
          function tC() {
            return J1;
          }
          function nC() {
            J1 = Uu();
          }
          function Jg(e) {
            (Jd = Uu()), e.actualStartTime < 0 && (e.actualStartTime = Uu());
          }
          function rC(e) {
            Jd = -1;
          }
          function am(e, t) {
            if (Jd >= 0) {
              var a = Uu() - Jd;
              (e.actualDuration += a), t && (e.selfBaseDuration = a), (Jd = -1);
            }
          }
          function Bi(e) {
            if (tm >= 0) {
              var t = Uu() - tm;
              tm = -1;
              for (var a = e.return; a !== null; ) {
                switch (a.tag) {
                  case F:
                    var i = a.stateNode;
                    i.effectDuration += t;
                    return;
                  case ge:
                    var u = a.stateNode;
                    u.effectDuration += t;
                    return;
                }
                a = a.return;
              }
            }
          }
          function eS(e) {
            if (nm >= 0) {
              var t = Uu() - nm;
              nm = -1;
              for (var a = e.return; a !== null; ) {
                switch (a.tag) {
                  case F:
                    var i = a.stateNode;
                    i !== null && (i.passiveEffectDuration += t);
                    return;
                  case ge:
                    var u = a.stateNode;
                    u !== null && (u.passiveEffectDuration += t);
                    return;
                }
                a = a.return;
              }
            }
          }
          function ji() {
            tm = Uu();
          }
          function tS() {
            nm = Uu();
          }
          function nS(e) {
            for (var t = e.child; t; ) (e.actualDuration += t.actualDuration), (t = t.sibling);
          }
          function Xo(e, t) {
            return {
              value: e,
              source: t,
              stack: of(t),
              digest: null,
            };
          }
          function rS(e, t, a) {
            return {
              value: e,
              source: null,
              stack: a ?? null,
              digest: t ?? null,
            };
          }
          function qx(e, t) {
            return !0;
          }
          function aS(e, t) {
            try {
              var a = qx(e, t);
              if (a === !1) return;
              var i = t.value,
                u = t.source,
                s = t.stack,
                f = s !== null ? s : '';
              if (i != null && i._suppressLogging) {
                if (e.tag === G) return;
                console.error(i);
              }
              var p = u ? Ue(u) : null,
                v = p
                  ? 'The above error occurred in the <' + p + '> component:'
                  : 'The above error occurred in one of your React components:',
                m;
              if (e.tag === F)
                m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
              else {
                var y = Ue(e) || 'Anonymous';
                m =
                  'React will try to recreate this component tree from scratch ' +
                  ('using the error boundary you provided, ' + y + '.');
              }
              var R =
                v +
                `
` +
                f +
                `

` +
                ('' + m);
              console.error(R);
            } catch (E) {
              setTimeout(function () {
                throw E;
              });
            }
          }
          var Zx = typeof WeakMap == 'function' ? WeakMap : Map;
          function aC(e, t, a) {
            var i = Ol(pt, a);
            (i.tag = ag),
              (i.payload = {
                element: null,
              });
            var u = t.value;
            return (
              (i.callback = function () {
                $D(u), aS(e, t);
              }),
              i
            );
          }
          function iS(e, t, a) {
            var i = Ol(pt, a);
            i.tag = ag;
            var u = e.type.getDerivedStateFromError;
            if (typeof u == 'function') {
              var s = t.value;
              (i.payload = function () {
                return u(s);
              }),
                (i.callback = function () {
                  hE(e), aS(e, t);
                });
            }
            var f = e.stateNode;
            return (
              f !== null &&
                typeof f.componentDidCatch == 'function' &&
                (i.callback = function () {
                  hE(e), aS(e, t), typeof u != 'function' && PD(this);
                  var v = t.value,
                    m = t.stack;
                  this.componentDidCatch(v, {
                    componentStack: m !== null ? m : '',
                  }),
                    typeof u != 'function' &&
                      (er(e.lanes, ke) ||
                        g(
                          '%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.',
                          Ue(e) || 'Unknown',
                        ));
                }),
              i
            );
          }
          function iC(e, t, a) {
            var i = e.pingCache,
              u;
            if (
              (i === null
                ? ((i = e.pingCache = new Zx()), (u = /* @__PURE__ */ new Set()), i.set(t, u))
                : ((u = i.get(t)), u === void 0 && ((u = /* @__PURE__ */ new Set()), i.set(t, u))),
              !u.has(a))
            ) {
              u.add(a);
              var s = QD.bind(null, e, t, a);
              on && hp(e, a), t.then(s, s);
            }
          }
          function Jx(e, t, a, i) {
            var u = e.updateQueue;
            if (u === null) {
              var s = /* @__PURE__ */ new Set();
              s.add(a), (e.updateQueue = s);
            } else u.add(a);
          }
          function ew(e, t) {
            var a = e.tag;
            if ((e.mode & Be) === xe && (a === oe || a === Q || a === je)) {
              var i = e.alternate;
              i
                ? ((e.updateQueue = i.updateQueue),
                  (e.memoizedState = i.memoizedState),
                  (e.lanes = i.lanes))
                : ((e.updateQueue = null), (e.memoizedState = null));
            }
          }
          function lC(e) {
            var t = e;
            do {
              if (t.tag === Te && Fx(t)) return t;
              t = t.return;
            } while (t !== null);
            return null;
          }
          function uC(e, t, a, i, u) {
            if ((e.mode & Be) === xe) {
              if (e === t) e.flags |= en;
              else {
                if (((e.flags |= Me), (a.flags |= yo), (a.flags &= ~(bs | cr)), a.tag === G)) {
                  var s = a.alternate;
                  if (s === null) a.tag = lr;
                  else {
                    var f = Ol(pt, ke);
                    (f.tag = bh), Mu(a, f, ke);
                  }
                }
                a.lanes = He(a.lanes, ke);
              }
              return e;
            }
            return (e.flags |= en), (e.lanes = u), e;
          }
          function tw(e, t, a, i, u) {
            if (
              ((a.flags |= cr),
              on && hp(e, u),
              i !== null && typeof i == 'object' && typeof i.then == 'function')
            ) {
              var s = i;
              ew(a), Nn() && a.mode & Be && q0();
              var f = lC(t);
              if (f !== null) {
                (f.flags &= ~Ot), uC(f, t, a, e, u), f.mode & Be && iC(e, s, u), Jx(f, e, s);
                return;
              } else {
                if (!su(u)) {
                  iC(e, s, u), FS();
                  return;
                }
                var p = new Error(
                  'A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.',
                );
                i = p;
              }
            } else if (Nn() && a.mode & Be) {
              q0();
              var v = lC(t);
              if (v !== null) {
                (v.flags & en) === Ce && (v.flags |= Ot), uC(v, t, a, e, u), qy(Xo(i, a));
                return;
              }
            }
            (i = Xo(i, a)), zD(i);
            var m = t;
            do {
              switch (m.tag) {
                case F: {
                  var y = i;
                  m.flags |= en;
                  var R = Gt(u);
                  m.lanes = He(m.lanes, R);
                  var E = aC(m, y, R);
                  ug(m, E);
                  return;
                }
                case G:
                  var _ = i,
                    O = m.type,
                    z = m.stateNode;
                  if (
                    (m.flags & Me) === Ce &&
                    (typeof O.getDerivedStateFromError == 'function' ||
                      (z !== null && typeof z.componentDidCatch == 'function' && !lE(z)))
                  ) {
                    m.flags |= en;
                    var ae = Gt(u);
                    m.lanes = He(m.lanes, ae);
                    var Ee = iS(m, _, ae);
                    ug(m, Ee);
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
          var ep = w.ReactCurrentOwner,
            ei = !1,
            lS,
            tp,
            uS,
            oS,
            sS,
            Ko,
            cS,
            im;
          (lS = {}), (tp = {}), (uS = {}), (oS = {}), (sS = {}), (Ko = !1), (cS = {}), (im = {});
          function mr(e, t, a, i) {
            e === null ? (t.child = w1(t, null, a, i)) : (t.child = Ac(t, e.child, a, i));
          }
          function rw(e, t, a, i) {
            (t.child = Ac(t, e.child, null, i)), (t.child = Ac(t, null, a, i));
          }
          function oC(e, t, a, i, u) {
            if (t.type !== t.elementType) {
              var s = a.propTypes;
              s &&
                Wa(
                  s,
                  i,
                  // Resolved props
                  'prop',
                  ft(a),
                );
            }
            var f = a.render,
              p = t.ref,
              v,
              m;
            Uc(t, u), wi(t);
            {
              if (((ep.current = t), ta(!0), (v = Pc(e, t, f, i, p, u)), (m = Yc()), t.mode & Rt)) {
                It(!0);
                try {
                  (v = Pc(e, t, f, i, p, u)), (m = Yc());
                } finally {
                  It(!1);
                }
              }
              ta(!1);
            }
            return (
              il(),
              e !== null && !ei
                ? (O1(e, t, u), Ml(e, t, u))
                : (Nn() && m && Qy(t), (t.flags |= gi), mr(e, t, v, u), t.child)
            );
          }
          function sC(e, t, a, i, u) {
            if (e === null) {
              var s = a.type;
              if (
                ok(s) &&
                a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
                a.defaultProps === void 0
              ) {
                var f = s;
                return (f = qc(s)), (t.tag = je), (t.type = f), pS(t, s), cC(e, t, f, i, u);
              }
              {
                var p = s.propTypes;
                p &&
                  Wa(
                    p,
                    i,
                    // Resolved props
                    'prop',
                    ft(s),
                  );
              }
              var v = XS(a.type, null, i, t, t.mode, u);
              return (v.ref = t.ref), (v.return = t), (t.child = v), v;
            }
            {
              var m = a.type,
                y = m.propTypes;
              y &&
                Wa(
                  y,
                  i,
                  // Resolved props
                  'prop',
                  ft(m),
                );
            }
            var R = e.child,
              E = SS(e, u);
            if (!E) {
              var _ = R.memoizedProps,
                O = a.compare;
              if (((O = O !== null ? O : Se), O(_, i) && e.ref === t.ref)) return Ml(e, t, u);
            }
            t.flags |= gi;
            var z = ts(R, i);
            return (z.ref = t.ref), (z.return = t), (t.child = z), z;
          }
          function cC(e, t, a, i, u) {
            if (t.type !== t.elementType) {
              var s = t.elementType;
              if (s.$$typeof === On) {
                var f = s,
                  p = f._payload,
                  v = f._init;
                try {
                  s = v(p);
                } catch {
                  s = null;
                }
                var m = s && s.propTypes;
                m &&
                  Wa(
                    m,
                    i,
                    // Resolved (SimpleMemoComponent has no defaultProps)
                    'prop',
                    ft(s),
                  );
              }
            }
            if (e !== null) {
              var y = e.memoizedProps;
              if (
                Se(y, i) &&
                e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
                t.type === e.type
              )
                if (((ei = !1), (t.pendingProps = i = y), SS(e, u)))
                  (e.flags & yo) !== Ce && (ei = !0);
                else return (t.lanes = e.lanes), Ml(e, t, u);
            }
            return fS(e, t, a, i, u);
          }
          function fC(e, t, a) {
            var i = t.pendingProps,
              u = i.children,
              s = e !== null ? e.memoizedState : null;
            if (i.mode === 'hidden' || le)
              if ((t.mode & Be) === xe) {
                var f = {
                  baseLanes: A,
                  cachePool: null,
                  transitions: null,
                };
                (t.memoizedState = f), gm(t, a);
              } else if (er(a, Jn)) {
                var R = {
                  baseLanes: A,
                  cachePool: null,
                  transitions: null,
                };
                t.memoizedState = R;
                var E = s !== null ? s.baseLanes : a;
                gm(t, E);
              } else {
                var p = null,
                  v;
                if (s !== null) {
                  var m = s.baseLanes;
                  v = He(m, a);
                } else v = a;
                t.lanes = t.childLanes = Jn;
                var y = {
                  baseLanes: v,
                  cachePool: p,
                  transitions: null,
                };
                return (t.memoizedState = y), (t.updateQueue = null), gm(t, v), null;
              }
            else {
              var _;
              s !== null ? ((_ = He(s.baseLanes, a)), (t.memoizedState = null)) : (_ = a), gm(t, _);
            }
            return mr(e, t, u, a), t.child;
          }
          function aw(e, t, a) {
            var i = t.pendingProps;
            return mr(e, t, i, a), t.child;
          }
          function iw(e, t, a) {
            var i = t.pendingProps.children;
            return mr(e, t, i, a), t.child;
          }
          function lw(e, t, a) {
            {
              t.flags |= Ae;
              {
                var i = t.stateNode;
                (i.effectDuration = 0), (i.passiveEffectDuration = 0);
              }
            }
            var u = t.pendingProps,
              s = u.children;
            return mr(e, t, s, a), t.child;
          }
          function dC(e, t) {
            var a = t.ref;
            ((e === null && a !== null) || (e !== null && e.ref !== a)) &&
              ((t.flags |= Gn), (t.flags |= Hf));
          }
          function fS(e, t, a, i, u) {
            if (t.type !== t.elementType) {
              var s = a.propTypes;
              s &&
                Wa(
                  s,
                  i,
                  // Resolved props
                  'prop',
                  ft(a),
                );
            }
            var f;
            {
              var p = _c(t, a, !0);
              f = Oc(t, p);
            }
            var v, m;
            Uc(t, u), wi(t);
            {
              if (((ep.current = t), ta(!0), (v = Pc(e, t, a, i, f, u)), (m = Yc()), t.mode & Rt)) {
                It(!0);
                try {
                  (v = Pc(e, t, a, i, f, u)), (m = Yc());
                } finally {
                  It(!1);
                }
              }
              ta(!1);
            }
            return (
              il(),
              e !== null && !ei
                ? (O1(e, t, u), Ml(e, t, u))
                : (Nn() && m && Qy(t), (t.flags |= gi), mr(e, t, v, u), t.child)
            );
          }
          function pC(e, t, a, i, u) {
            {
              switch (Rk(t)) {
                case !1: {
                  var s = t.stateNode,
                    f = t.type,
                    p = new f(t.memoizedProps, s.context),
                    v = p.state;
                  s.updater.enqueueSetState(s, v, null);
                  break;
                }
                case !0: {
                  (t.flags |= Me), (t.flags |= en);
                  var m = new Error('Simulated error coming from DevTools'),
                    y = Gt(u);
                  t.lanes = He(t.lanes, y);
                  var R = iS(t, Xo(m, t), y);
                  ug(t, R);
                  break;
                }
              }
              if (t.type !== t.elementType) {
                var E = a.propTypes;
                E &&
                  Wa(
                    E,
                    i,
                    // Resolved props
                    'prop',
                    ft(a),
                  );
              }
            }
            var _;
            Ai(a) ? ((_ = !0), yh(t)) : (_ = !1), Uc(t, u);
            var O = t.stateNode,
              z;
            O === null
              ? (um(e, t), C1(t, a, i), Sg(t, a, i, u), (z = !0))
              : e === null
                ? (z = Lx(t, a, i, u))
                : (z = Nx(e, t, a, i, u));
            var ae = dS(e, t, a, z, _, u);
            {
              var Ee = t.stateNode;
              z &&
                Ee.props !== i &&
                (Ko ||
                  g(
                    'It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.',
                    Ue(t) || 'a component',
                  ),
                (Ko = !0));
            }
            return ae;
          }
          function dS(e, t, a, i, u, s) {
            dC(e, t);
            var f = (t.flags & Me) !== Ce;
            if (!i && !f) return u && G0(t, a, !1), Ml(e, t, s);
            var p = t.stateNode;
            ep.current = t;
            var v;
            if (f && typeof a.getDerivedStateFromError != 'function') (v = null), rC();
            else {
              wi(t);
              {
                if ((ta(!0), (v = p.render()), t.mode & Rt)) {
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
            return (
              (t.flags |= gi),
              e !== null && f ? rw(e, t, v, s) : mr(e, t, v, s),
              (t.memoizedState = p.state),
              u && G0(t, a, !0),
              t.child
            );
          }
          function vC(e) {
            var t = e.stateNode;
            t.pendingContext
              ? Q0(e, t.pendingContext, t.pendingContext !== t.context)
              : t.context && Q0(e, t.context, !1),
              wg(e, t.containerInfo);
          }
          function uw(e, t, a) {
            if ((vC(t), e === null))
              throw new Error('Should have a current fiber. This is a bug in React.');
            var i = t.pendingProps,
              u = t.memoizedState,
              s = u.element;
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
                  transitions: f.transitions,
                },
                m = t.updateQueue;
              if (((m.baseState = v), (t.memoizedState = v), t.flags & Ot)) {
                var y = Xo(
                  new Error(
                    'There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.',
                  ),
                  t,
                );
                return hC(e, t, p, a, y);
              } else if (p !== s) {
                var R = Xo(
                  new Error(
                    'This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.',
                  ),
                  t,
                );
                return hC(e, t, p, a, R);
              } else {
                fx(t);
                var E = w1(t, null, p, a);
                t.child = E;
                for (var _ = E; _; ) (_.flags = (_.flags & ~ht) | Lr), (_ = _.sibling);
              }
            } else {
              if ((Nc(), p === s)) return Ml(e, t, a);
              mr(e, t, p, a);
            }
            return t.child;
          }
          function hC(e, t, a, i, u) {
            return Nc(), qy(u), (t.flags |= Ot), mr(e, t, a, i), t.child;
          }
          function ow(e, t, a) {
            k1(t), e === null && Ky(t);
            var i = t.type,
              u = t.pendingProps,
              s = e !== null ? e.memoizedProps : null,
              f = u.children,
              p = My(i, u);
            return (
              p ? (f = null) : s !== null && My(i, s) && (t.flags |= et),
              dC(e, t),
              mr(e, t, f, a),
              t.child
            );
          }
          function sw(e, t) {
            return e === null && Ky(t), null;
          }
          function cw(e, t, a, i) {
            um(e, t);
            var u = t.pendingProps,
              s = a,
              f = s._payload,
              p = s._init,
              v = p(f);
            t.type = v;
            var m = (t.tag = sk(v)),
              y = qa(v, u),
              R;
            switch (m) {
              case oe:
                return pS(t, v), (t.type = v = qc(v)), (R = fS(null, t, v, y, i)), R;
              case G:
                return (t.type = v = YS(v)), (R = pC(null, t, v, y, i)), R;
              case Q:
                return (t.type = v = $S(v)), (R = oC(null, t, v, y, i)), R;
              case nt: {
                if (t.type !== t.elementType) {
                  var E = v.propTypes;
                  E &&
                    Wa(
                      E,
                      y,
                      // Resolved for outer only
                      'prop',
                      ft(v),
                    );
                }
                return (
                  (R = sC(
                    null,
                    t,
                    v,
                    qa(v.type, y),
                    // The inner type can have defaults too
                    i,
                  )),
                  R
                );
              }
            }
            var _ = '';
            throw (
              (v !== null &&
                typeof v == 'object' &&
                v.$$typeof === On &&
                (_ = ' Did you wrap a component in React.lazy() more than once?'),
              new Error(
                'Element type is invalid. Received a promise that resolves to: ' +
                  v +
                  '. ' +
                  ('Lazy element type must resolve to a class or function.' + _),
              ))
            );
          }
          function fw(e, t, a, i, u) {
            um(e, t), (t.tag = G);
            var s;
            return (
              Ai(a) ? ((s = !0), yh(t)) : (s = !1),
              Uc(t, u),
              C1(t, a, i),
              Sg(t, a, i, u),
              dS(null, t, a, !0, s, u)
            );
          }
          function dw(e, t, a, i) {
            um(e, t);
            var u = t.pendingProps,
              s;
            {
              var f = _c(t, a, !1);
              s = Oc(t, f);
            }
            Uc(t, i);
            var p, v;
            wi(t);
            {
              if (a.prototype && typeof a.prototype.render == 'function') {
                var m = ft(a) || 'Unknown';
                lS[m] ||
                  (g(
                    "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
                    m,
                    m,
                  ),
                  (lS[m] = !0));
              }
              t.mode & Rt && Ka.recordLegacyContextWarning(t, null),
                ta(!0),
                (ep.current = t),
                (p = Pc(null, t, a, u, s, i)),
                (v = Yc()),
                ta(!1);
            }
            if (
              (il(),
              (t.flags |= gi),
              typeof p == 'object' &&
                p !== null &&
                typeof p.render == 'function' &&
                p.$$typeof === void 0)
            ) {
              var y = ft(a) || 'Unknown';
              tp[y] ||
                (g(
                  "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
                  y,
                  y,
                  y,
                ),
                (tp[y] = !0));
            }
            if (
              // Run these checks in production only if the flag is off.
              // Eventually we'll delete this branch altogether.
              typeof p == 'object' &&
              p !== null &&
              typeof p.render == 'function' &&
              p.$$typeof === void 0
            ) {
              {
                var R = ft(a) || 'Unknown';
                tp[R] ||
                  (g(
                    "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
                    R,
                    R,
                    R,
                  ),
                  (tp[R] = !0));
              }
              (t.tag = G), (t.memoizedState = null), (t.updateQueue = null);
              var E = !1;
              return (
                Ai(a) ? ((E = !0), yh(t)) : (E = !1),
                (t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null),
                lg(t),
                S1(t, p),
                Sg(t, a, u, i),
                dS(null, t, a, !0, E, i)
              );
            } else {
              if (((t.tag = oe), t.mode & Rt)) {
                It(!0);
                try {
                  (p = Pc(null, t, a, u, s, i)), (v = Yc());
                } finally {
                  It(!1);
                }
              }
              return Nn() && v && Qy(t), mr(null, t, p, i), pS(t, a), t.child;
            }
          }
          function pS(e, t) {
            {
              if (
                (t &&
                  t.childContextTypes &&
                  g(
                    '%s(...): childContextTypes cannot be defined on a function component.',
                    t.displayName || t.name || 'Component',
                  ),
                e.ref !== null)
              ) {
                var a = '',
                  i = br();
                i &&
                  (a +=
                    `

Check the render method of \`` +
                    i +
                    '`.');
                var u = i || '',
                  s = e._debugSource;
                s && (u = s.fileName + ':' + s.lineNumber),
                  sS[u] ||
                    ((sS[u] = !0),
                    g(
                      'Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s',
                      a,
                    ));
              }
              if (typeof t.getDerivedStateFromProps == 'function') {
                var f = ft(t) || 'Unknown';
                oS[f] ||
                  (g('%s: Function components do not support getDerivedStateFromProps.', f),
                  (oS[f] = !0));
              }
              if (typeof t.contextType == 'object' && t.contextType !== null) {
                var p = ft(t) || 'Unknown';
                uS[p] ||
                  (g('%s: Function components do not support contextType.', p), (uS[p] = !0));
              }
            }
          }
          var vS = {
            dehydrated: null,
            treeContext: null,
            retryLane: Ge,
          };
          function hS(e) {
            return {
              baseLanes: e,
              cachePool: nw(),
              transitions: null,
            };
          }
          function pw(e, t) {
            var a = null;
            return {
              baseLanes: He(e.baseLanes, t),
              cachePool: a,
              transitions: e.transitions,
            };
          }
          function vw(e, t, a, i) {
            if (t !== null) {
              var u = t.memoizedState;
              if (u === null) return !1;
            }
            return bg(e, Id);
          }
          function hw(e, t) {
            return cu(e.childLanes, t);
          }
          function mC(e, t, a) {
            var i = t.pendingProps;
            xk(t) && (t.flags |= Me);
            var u = Za.current,
              s = !1,
              f = (t.flags & Me) !== Ce;
            if (
              (f || vw(u, e)
                ? ((s = !0), (t.flags &= ~Me))
                : (e === null || e.memoizedState !== null) && (u = Hx(u, _1)),
              (u = Fc(u)),
              Nu(t, u),
              e === null)
            ) {
              Ky(t);
              var p = t.memoizedState;
              if (p !== null) {
                var v = p.dehydrated;
                if (v !== null) return Cw(t, v);
              }
              var m = i.children,
                y = i.fallback;
              if (s) {
                var R = mw(t, m, y, a),
                  E = t.child;
                return (E.memoizedState = hS(a)), (t.memoizedState = vS), R;
              } else return mS(t, m);
            } else {
              var _ = e.memoizedState;
              if (_ !== null) {
                var O = _.dehydrated;
                if (O !== null) return Ew(e, t, f, i, O, _, a);
              }
              if (s) {
                var z = i.fallback,
                  ae = i.children,
                  Ee = gw(e, t, ae, z, a),
                  ye = t.child,
                  Xe = e.child.memoizedState;
                return (
                  (ye.memoizedState = Xe === null ? hS(a) : pw(Xe, a)),
                  (ye.childLanes = hw(e, a)),
                  (t.memoizedState = vS),
                  Ee
                );
              } else {
                var Qe = i.children,
                  D = yw(e, t, Qe, a);
                return (t.memoizedState = null), D;
              }
            }
          }
          function mS(e, t, a) {
            var i = e.mode,
              u = {
                mode: 'visible',
                children: t,
              },
              s = yS(u, i);
            return (s.return = e), (e.child = s), s;
          }
          function mw(e, t, a, i) {
            var u = e.mode,
              s = e.child,
              f = {
                mode: 'hidden',
                children: t,
              },
              p,
              v;
            return (
              (u & Be) === xe && s !== null
                ? ((p = s),
                  (p.childLanes = A),
                  (p.pendingProps = f),
                  e.mode & we &&
                    ((p.actualDuration = 0),
                    (p.actualStartTime = -1),
                    (p.selfBaseDuration = 0),
                    (p.treeBaseDuration = 0)),
                  (v = ju(a, u, i, null)))
                : ((p = yS(f, u)), (v = ju(a, u, i, null))),
              (p.return = e),
              (v.return = e),
              (p.sibling = v),
              (e.child = p),
              v
            );
          }
          function yS(e, t, a) {
            return yE(e, t, A, null);
          }
          function yC(e, t) {
            return ts(e, t);
          }
          function yw(e, t, a, i) {
            var u = e.child,
              s = u.sibling,
              f = yC(u, {
                mode: 'visible',
                children: a,
              });
            if (
              ((t.mode & Be) === xe && (f.lanes = i),
              (f.return = t),
              (f.sibling = null),
              s !== null)
            ) {
              var p = t.deletions;
              p === null ? ((t.deletions = [s]), (t.flags |= Je)) : p.push(s);
            }
            return (t.child = f), f;
          }
          function gw(e, t, a, i, u) {
            var s = t.mode,
              f = e.child,
              p = f.sibling,
              v = {
                mode: 'hidden',
                children: a,
              },
              m;
            if (
              // In legacy mode, we commit the primary tree as if it successfully
              // completed, even though it's in an inconsistent state.
              (s & Be) === xe && // Make sure we're on the second pass, i.e. the primary child fragment was
              // already cloned. In legacy mode, the only case where this isn't true is
              // when DevTools forces us to display a fallback; we skip the first render
              // pass entirely and go straight to rendering the fallback. (In Concurrent
              // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
              // only codepath.)
              t.child !== f
            ) {
              var y = t.child;
              (m = y),
                (m.childLanes = A),
                (m.pendingProps = v),
                t.mode & we &&
                  ((m.actualDuration = 0),
                  (m.actualStartTime = -1),
                  (m.selfBaseDuration = f.selfBaseDuration),
                  (m.treeBaseDuration = f.treeBaseDuration)),
                (t.deletions = null);
            } else (m = yC(f, v)), (m.subtreeFlags = f.subtreeFlags & un);
            var R;
            return (
              p !== null ? (R = ts(p, i)) : ((R = ju(i, s, u, null)), (R.flags |= ht)),
              (R.return = t),
              (m.return = t),
              (m.sibling = R),
              (t.child = m),
              R
            );
          }
          function lm(e, t, a, i) {
            i !== null && qy(i), Ac(t, e.child, null, a);
            var u = t.pendingProps,
              s = u.children,
              f = mS(t, s);
            return (f.flags |= ht), (t.memoizedState = null), f;
          }
          function Sw(e, t, a, i, u) {
            var s = t.mode,
              f = {
                mode: 'visible',
                children: a,
              },
              p = yS(f, s),
              v = ju(i, s, u, null);
            return (
              (v.flags |= ht),
              (p.return = t),
              (v.return = t),
              (p.sibling = v),
              (t.child = p),
              (t.mode & Be) !== xe && Ac(t, e.child, null, u),
              v
            );
          }
          function Cw(e, t, a) {
            return (
              (e.mode & Be) === xe
                ? (g(
                    'Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components.',
                  ),
                  (e.lanes = ke))
                : Uy(t)
                  ? (e.lanes = ol)
                  : (e.lanes = Jn),
              null
            );
          }
          function Ew(e, t, a, i, u, s, f) {
            if (a)
              if (t.flags & Ot) {
                t.flags &= ~Ot;
                var D = rS(
                  new Error(
                    'There was an error while hydrating this Suspense boundary. Switched to client rendering.',
                  ),
                );
                return lm(e, t, f, D);
              } else {
                if (t.memoizedState !== null) return (t.child = e.child), (t.flags |= Me), null;
                var U = i.children,
                  k = i.fallback,
                  $ = Sw(e, t, U, k, f),
                  ie = t.child;
                return (ie.memoizedState = hS(f)), (t.memoizedState = vS), $;
              }
            else {
              if ((sx(), (t.mode & Be) === xe))
                return lm(
                  e,
                  t,
                  f,
                  // TODO: When we delete legacy mode, we should make this error argument
                  // required — every concurrent mode path that causes hydration to
                  // de-opt to client rendering should have an error message.
                  null,
                );
              if (Uy(u)) {
                var p, v, m;
                {
                  var y = DR(u);
                  (p = y.digest), (v = y.message), (m = y.stack);
                }
                var R;
                v
                  ? (R = new Error(v))
                  : (R = new Error(
                      'The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.',
                    ));
                var E = rS(R, p, m);
                return lm(e, t, f, E);
              }
              var _ = er(f, e.childLanes);
              if (ei || _) {
                var O = ym();
                if (O !== null) {
                  var z = ny(O, f);
                  if (z !== Ge && z !== s.retryLane) {
                    s.retryLane = z;
                    var ae = pt;
                    Pr(e, z), yn(O, e, z, ae);
                  }
                }
                FS();
                var Ee = rS(
                  new Error(
                    'This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.',
                  ),
                );
                return lm(e, t, f, Ee);
              } else if (V0(u)) {
                (t.flags |= Me), (t.child = e.child);
                var ye = ID.bind(null, e);
                return kR(u, ye), null;
              } else {
                dx(t, u, s.treeContext);
                var Xe = i.children,
                  Qe = mS(t, Xe);
                return (Qe.flags |= Lr), Qe;
              }
            }
          }
          function gC(e, t, a) {
            e.lanes = He(e.lanes, t);
            var i = e.alternate;
            i !== null && (i.lanes = He(i.lanes, t)), ng(e.return, t, a);
          }
          function Tw(e, t, a) {
            for (var i = t; i !== null; ) {
              if (i.tag === Te) {
                var u = i.memoizedState;
                u !== null && gC(i, a, e);
              } else if (i.tag === vt) gC(i, a, e);
              else if (i.child !== null) {
                (i.child.return = i), (i = i.child);
                continue;
              }
              if (i === e) return;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e) return;
                i = i.return;
              }
              (i.sibling.return = i.return), (i = i.sibling);
            }
          }
          function Rw(e) {
            for (var t = e, a = null; t !== null; ) {
              var i = t.alternate;
              i !== null && Vh(i) === null && (a = t), (t = t.sibling);
            }
            return a;
          }
          function xw(e) {
            if (e !== void 0 && e !== 'forwards' && e !== 'backwards' && e !== 'together' && !cS[e])
              if (((cS[e] = !0), typeof e == 'string'))
                switch (e.toLowerCase()) {
                  case 'together':
                  case 'forwards':
                  case 'backwards': {
                    g(
                      '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                      e,
                      e.toLowerCase(),
                    );
                    break;
                  }
                  case 'forward':
                  case 'backward': {
                    g(
                      '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                      e,
                      e.toLowerCase(),
                    );
                    break;
                  }
                  default:
                    g(
                      '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                      e,
                    );
                    break;
                }
              else
                g(
                  '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                  e,
                );
          }
          function ww(e, t) {
            e !== void 0 &&
              !im[e] &&
              (e !== 'collapsed' && e !== 'hidden'
                ? ((im[e] = !0),
                  g(
                    '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
                    e,
                  ))
                : t !== 'forwards' &&
                  t !== 'backwards' &&
                  ((im[e] = !0),
                  g(
                    '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
                    e,
                  )));
          }
          function SC(e, t) {
            {
              var a = Zt(e),
                i = !a && typeof Ma(e) == 'function';
              if (a || i) {
                var u = a ? 'array' : 'iterable';
                return (
                  g(
                    'A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>',
                    u,
                    t,
                    u,
                  ),
                  !1
                );
              }
            }
            return !0;
          }
          function Dw(e, t) {
            if ((t === 'forwards' || t === 'backwards') && e !== void 0 && e !== null && e !== !1)
              if (Zt(e)) {
                for (var a = 0; a < e.length; a++) if (!SC(e[a], a)) return;
              } else {
                var i = Ma(e);
                if (typeof i == 'function') {
                  var u = i.call(e);
                  if (u)
                    for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                      if (!SC(s.value, f)) return;
                      f++;
                    }
                } else
                  g(
                    'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
                    t,
                  );
              }
          }
          function gS(e, t, a, i, u) {
            var s = e.memoizedState;
            s === null
              ? (e.memoizedState = {
                  isBackwards: t,
                  rendering: null,
                  renderingStartTime: 0,
                  last: i,
                  tail: a,
                  tailMode: u,
                })
              : ((s.isBackwards = t),
                (s.rendering = null),
                (s.renderingStartTime = 0),
                (s.last = i),
                (s.tail = a),
                (s.tailMode = u));
          }
          function CC(e, t, a) {
            var i = t.pendingProps,
              u = i.revealOrder,
              s = i.tail,
              f = i.children;
            xw(u), ww(s, u), Dw(f, u), mr(e, t, f, a);
            var p = Za.current,
              v = bg(p, Id);
            if (v) (p = _g(p, Id)), (t.flags |= Me);
            else {
              var m = e !== null && (e.flags & Me) !== Ce;
              m && Tw(t, t.child, a), (p = Fc(p));
            }
            if ((Nu(t, p), (t.mode & Be) === xe)) t.memoizedState = null;
            else
              switch (u) {
                case 'forwards': {
                  var y = Rw(t.child),
                    R;
                  y === null
                    ? ((R = t.child), (t.child = null))
                    : ((R = y.sibling), (y.sibling = null)),
                    gS(
                      t,
                      !1,
                      // isBackwards
                      R,
                      y,
                      s,
                    );
                  break;
                }
                case 'backwards': {
                  var E = null,
                    _ = t.child;
                  for (t.child = null; _ !== null; ) {
                    var O = _.alternate;
                    if (O !== null && Vh(O) === null) {
                      t.child = _;
                      break;
                    }
                    var z = _.sibling;
                    (_.sibling = E), (E = _), (_ = z);
                  }
                  gS(
                    t,
                    !0,
                    // isBackwards
                    E,
                    null,
                    // last
                    s,
                  );
                  break;
                }
                case 'together': {
                  gS(
                    t,
                    !1,
                    // isBackwards
                    null,
                    // tail
                    null,
                    // last
                    void 0,
                  );
                  break;
                }
                default:
                  t.memoizedState = null;
              }
            return t.child;
          }
          function kw(e, t, a) {
            wg(t, t.stateNode.containerInfo);
            var i = t.pendingProps;
            return e === null ? (t.child = Ac(t, null, i, a)) : mr(e, t, i, a), t.child;
          }
          var EC = !1;
          function bw(e, t, a) {
            var i = t.type,
              u = i._context,
              s = t.pendingProps,
              f = t.memoizedProps,
              p = s.value;
            {
              'value' in s ||
                EC ||
                ((EC = !0),
                g(
                  'The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?',
                ));
              var v = t.type.propTypes;
              v && Wa(v, s, 'prop', 'Context.Provider');
            }
            if ((o1(t, u, p), f !== null)) {
              var m = f.value;
              if (fe(m, p)) {
                if (f.children === s.children && !hh()) return Ml(e, t, a);
              } else Tx(t, u, a);
            }
            var y = s.children;
            return mr(e, t, y, a), t.child;
          }
          var TC = !1;
          function _w(e, t, a) {
            var i = t.type;
            i._context === void 0
              ? i !== i.Consumer &&
                (TC ||
                  ((TC = !0),
                  g(
                    'Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?',
                  )))
              : (i = i._context);
            var u = t.pendingProps,
              s = u.children;
            typeof s != 'function' &&
              g(
                "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.",
              ),
              Uc(t, a);
            var f = ln(i);
            wi(t);
            var p;
            return (
              (ep.current = t),
              ta(!0),
              (p = s(f)),
              ta(!1),
              il(),
              (t.flags |= gi),
              mr(e, t, p, a),
              t.child
            );
          }
          function np() {
            ei = !0;
          }
          function um(e, t) {
            (t.mode & Be) === xe &&
              e !== null &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= ht));
          }
          function Ml(e, t, a) {
            return (
              e !== null && (t.dependencies = e.dependencies),
              rC(),
              vp(t.lanes),
              er(a, t.childLanes) ? (zx(e, t), t.child) : null
            );
          }
          function Ow(e, t, a) {
            {
              var i = t.return;
              if (i === null) throw new Error('Cannot swap the root fiber.');
              if (
                ((e.alternate = null),
                (t.alternate = null),
                (a.index = t.index),
                (a.sibling = t.sibling),
                (a.return = t.return),
                (a.ref = t.ref),
                t === i.child)
              )
                i.child = a;
              else {
                var u = i.child;
                if (u === null) throw new Error('Expected parent to have a child.');
                for (; u.sibling !== t; )
                  if (((u = u.sibling), u === null))
                    throw new Error('Expected to find the previous sibling.');
                u.sibling = a;
              }
              var s = i.deletions;
              return (
                s === null ? ((i.deletions = [e]), (i.flags |= Je)) : s.push(e), (a.flags |= ht), a
              );
            }
          }
          function SS(e, t) {
            var a = e.lanes;
            return !!er(a, t);
          }
          function Mw(e, t, a) {
            switch (t.tag) {
              case F:
                vC(t), t.stateNode, Nc();
                break;
              case K:
                k1(t);
                break;
              case G: {
                var i = t.type;
                Ai(i) && yh(t);
                break;
              }
              case P:
                wg(t, t.stateNode.containerInfo);
                break;
              case V: {
                var u = t.memoizedProps.value,
                  s = t.type._context;
                o1(t, s, u);
                break;
              }
              case ge:
                {
                  var f = er(a, t.childLanes);
                  f && (t.flags |= Ae);
                  {
                    var p = t.stateNode;
                    (p.effectDuration = 0), (p.passiveEffectDuration = 0);
                  }
                }
                break;
              case Te: {
                var v = t.memoizedState;
                if (v !== null) {
                  if (v.dehydrated !== null) return Nu(t, Fc(Za.current)), (t.flags |= Me), null;
                  var m = t.child,
                    y = m.childLanes;
                  if (er(a, y)) return mC(e, t, a);
                  Nu(t, Fc(Za.current));
                  var R = Ml(e, t, a);
                  return R !== null ? R.sibling : null;
                } else Nu(t, Fc(Za.current));
                break;
              }
              case vt: {
                var E = (e.flags & Me) !== Ce,
                  _ = er(a, t.childLanes);
                if (E) {
                  if (_) return CC(e, t, a);
                  t.flags |= Me;
                }
                var O = t.memoizedState;
                if (
                  (O !== null && ((O.rendering = null), (O.tail = null), (O.lastEffect = null)),
                  Nu(t, Za.current),
                  _)
                )
                  break;
                return null;
              }
              case Ie:
              case it:
                return (t.lanes = A), fC(e, t, a);
            }
            return Ml(e, t, a);
          }
          function RC(e, t, a) {
            if (t._debugNeedsRemount && e !== null)
              return Ow(
                e,
                t,
                XS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes),
              );
            if (e !== null) {
              var i = e.memoizedProps,
                u = t.pendingProps;
              if (
                i !== u ||
                hh() || // Force a re-render if the implementation changed due to hot reload:
                t.type !== e.type
              )
                ei = !0;
              else {
                var s = SS(e, a);
                if (
                  !s && // If this is the second pass of an error or suspense boundary, there
                  // may not be work scheduled on `current`, so we check for this flag.
                  (t.flags & Me) === Ce
                )
                  return (ei = !1), Mw(e, t, a);
                (e.flags & yo) !== Ce ? (ei = !0) : (ei = !1);
              }
            } else if (((ei = !1), Nn() && rx(t))) {
              var f = t.index,
                p = ax();
              K0(t, p, f);
            }
            switch (((t.lanes = A), t.tag)) {
              case _e:
                return dw(e, t, t.type, a);
              case bn: {
                var v = t.elementType;
                return cw(e, t, v, a);
              }
              case oe: {
                var m = t.type,
                  y = t.pendingProps,
                  R = t.elementType === m ? y : qa(m, y);
                return fS(e, t, m, R, a);
              }
              case G: {
                var E = t.type,
                  _ = t.pendingProps,
                  O = t.elementType === E ? _ : qa(E, _);
                return pC(e, t, E, O, a);
              }
              case F:
                return uw(e, t, a);
              case K:
                return ow(e, t, a);
              case me:
                return sw(e, t);
              case Te:
                return mC(e, t, a);
              case P:
                return kw(e, t, a);
              case Q: {
                var z = t.type,
                  ae = t.pendingProps,
                  Ee = t.elementType === z ? ae : qa(z, ae);
                return oC(e, t, z, Ee, a);
              }
              case De:
                return aw(e, t, a);
              case Ve:
                return iw(e, t, a);
              case ge:
                return lw(e, t, a);
              case V:
                return bw(e, t, a);
              case re:
                return _w(e, t, a);
              case nt: {
                var ye = t.type,
                  Xe = t.pendingProps,
                  Qe = qa(ye, Xe);
                if (t.type !== t.elementType) {
                  var D = ye.propTypes;
                  D &&
                    Wa(
                      D,
                      Qe,
                      // Resolved for outer only
                      'prop',
                      ft(ye),
                    );
                }
                return (Qe = qa(ye.type, Qe)), sC(e, t, ye, Qe, a);
              }
              case je:
                return cC(e, t, t.type, t.pendingProps, a);
              case lr: {
                var U = t.type,
                  k = t.pendingProps,
                  $ = t.elementType === U ? k : qa(U, k);
                return fw(e, t, U, $, a);
              }
              case vt:
                return CC(e, t, a);
              case Pn:
                break;
              case Ie:
                return fC(e, t, a);
            }
            throw new Error(
              'Unknown unit of work tag (' +
                t.tag +
                '). This error is likely caused by a bug in React. Please file an issue.',
            );
          }
          function $c(e) {
            e.flags |= Ae;
          }
          function xC(e) {
            (e.flags |= Gn), (e.flags |= Hf);
          }
          var wC, CS, DC, kC;
          (wC = function (e, t, a, i) {
            for (var u = t.child; u !== null; ) {
              if (u.tag === K || u.tag === me) eR(e, u.stateNode);
              else if (u.tag !== P) {
                if (u.child !== null) {
                  (u.child.return = u), (u = u.child);
                  continue;
                }
              }
              if (u === t) return;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t) return;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
          }),
            (CS = function (e, t) {}),
            (DC = function (e, t, a, i, u) {
              var s = e.memoizedProps;
              if (s !== i) {
                var f = t.stateNode,
                  p = Dg(),
                  v = nR(f, a, s, i, u, p);
                (t.updateQueue = v), v && $c(t);
              }
            }),
            (kC = function (e, t, a, i) {
              a !== i && $c(t);
            });
          function rp(e, t) {
            if (!Nn())
              switch (e.tailMode) {
                case 'hidden': {
                  for (var a = e.tail, i = null; a !== null; )
                    a.alternate !== null && (i = a), (a = a.sibling);
                  i === null ? (e.tail = null) : (i.sibling = null);
                  break;
                }
                case 'collapsed': {
                  for (var u = e.tail, s = null; u !== null; )
                    u.alternate !== null && (s = u), (u = u.sibling);
                  s === null
                    ? !t && e.tail !== null
                      ? (e.tail.sibling = null)
                      : (e.tail = null)
                    : (s.sibling = null);
                  break;
                }
              }
          }
          function Un(e) {
            var t = e.alternate !== null && e.alternate.child === e.child,
              a = A,
              i = Ce;
            if (t) {
              if ((e.mode & we) !== xe) {
                for (var v = e.selfBaseDuration, m = e.child; m !== null; )
                  (a = He(a, He(m.lanes, m.childLanes))),
                    (i |= m.subtreeFlags & un),
                    (i |= m.flags & un),
                    (v += m.treeBaseDuration),
                    (m = m.sibling);
                e.treeBaseDuration = v;
              } else
                for (var y = e.child; y !== null; )
                  (a = He(a, He(y.lanes, y.childLanes))),
                    (i |= y.subtreeFlags & un),
                    (i |= y.flags & un),
                    (y.return = e),
                    (y = y.sibling);
              e.subtreeFlags |= i;
            } else {
              if ((e.mode & we) !== xe) {
                for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
                  (a = He(a, He(f.lanes, f.childLanes))),
                    (i |= f.subtreeFlags),
                    (i |= f.flags),
                    (u += f.actualDuration),
                    (s += f.treeBaseDuration),
                    (f = f.sibling);
                (e.actualDuration = u), (e.treeBaseDuration = s);
              } else
                for (var p = e.child; p !== null; )
                  (a = He(a, He(p.lanes, p.childLanes))),
                    (i |= p.subtreeFlags),
                    (i |= p.flags),
                    (p.return = e),
                    (p = p.sibling);
              e.subtreeFlags |= i;
            }
            return (e.childLanes = a), t;
          }
          function Lw(e, t, a) {
            if (yx() && (t.mode & Be) !== xe && (t.flags & Me) === Ce)
              return r1(t), Nc(), (t.flags |= Ot | cr | en), !1;
            var i = Th(t);
            if (a !== null && a.dehydrated !== null)
              if (e === null) {
                if (!i)
                  throw new Error(
                    'A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.',
                  );
                if ((hx(t), Un(t), (t.mode & we) !== xe)) {
                  var u = a !== null;
                  if (u) {
                    var s = t.child;
                    s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
                  }
                }
                return !1;
              } else {
                if (
                  (Nc(),
                  (t.flags & Me) === Ce && (t.memoizedState = null),
                  (t.flags |= Ae),
                  Un(t),
                  (t.mode & we) !== xe)
                ) {
                  var f = a !== null;
                  if (f) {
                    var p = t.child;
                    p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
                  }
                }
                return !1;
              }
            else return a1(), !0;
          }
          function bC(e, t, a) {
            var i = t.pendingProps;
            switch ((Iy(t), t.tag)) {
              case _e:
              case bn:
              case je:
              case oe:
              case Q:
              case De:
              case Ve:
              case ge:
              case re:
              case nt:
                return Un(t), null;
              case G: {
                var u = t.type;
                return Ai(u) && mh(t), Un(t), null;
              }
              case F: {
                var s = t.stateNode;
                if (
                  (Hc(t),
                  Py(t),
                  Mg(),
                  s.pendingContext && ((s.context = s.pendingContext), (s.pendingContext = null)),
                  e === null || e.child === null)
                ) {
                  var f = Th(t);
                  if (f) $c(t);
                  else if (e !== null) {
                    var p = e.memoizedState;
                    // Check if this is a client root
                    (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
                      (t.flags & Ot) !== Ce) &&
                      ((t.flags |= Mr), a1());
                  }
                }
                return CS(e, t), Un(t), null;
              }
              case K: {
                kg(t);
                var v = D1(),
                  m = t.type;
                if (e !== null && t.stateNode != null) DC(e, t, m, i, v), e.ref !== t.ref && xC(t);
                else {
                  if (!i) {
                    if (t.stateNode === null)
                      throw new Error(
                        'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.',
                      );
                    return Un(t), null;
                  }
                  var y = Dg(),
                    R = Th(t);
                  if (R) px(t, v, y) && $c(t);
                  else {
                    var E = JT(m, i, v, y, t);
                    wC(E, t, !1, !1), (t.stateNode = E), tR(E, m, i, v) && $c(t);
                  }
                  t.ref !== null && xC(t);
                }
                return Un(t), null;
              }
              case me: {
                var _ = i;
                if (e && t.stateNode != null) {
                  var O = e.memoizedProps;
                  kC(e, t, O, _);
                } else {
                  if (typeof _ != 'string' && t.stateNode === null)
                    throw new Error(
                      'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.',
                    );
                  var z = D1(),
                    ae = Dg(),
                    Ee = Th(t);
                  Ee ? vx(t) && $c(t) : (t.stateNode = rR(_, z, ae, t));
                }
                return Un(t), null;
              }
              case Te: {
                Vc(t);
                var ye = t.memoizedState;
                if (
                  e === null ||
                  (e.memoizedState !== null && e.memoizedState.dehydrated !== null)
                ) {
                  var Xe = Lw(e, t, ye);
                  if (!Xe) return t.flags & en ? t : null;
                }
                if ((t.flags & Me) !== Ce) return (t.lanes = a), (t.mode & we) !== xe && nS(t), t;
                var Qe = ye !== null,
                  D = e !== null && e.memoizedState !== null;
                if (Qe !== D && Qe) {
                  var U = t.child;
                  if (((U.flags |= Si), (t.mode & Be) !== xe)) {
                    var k =
                      e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !rt);
                    k || bg(Za.current, _1) ? ND() : FS();
                  }
                }
                var $ = t.updateQueue;
                if (($ !== null && (t.flags |= Ae), Un(t), (t.mode & we) !== xe && Qe)) {
                  var ie = t.child;
                  ie !== null && (t.treeBaseDuration -= ie.treeBaseDuration);
                }
                return null;
              }
              case P:
                return Hc(t), CS(e, t), e === null && KR(t.stateNode.containerInfo), Un(t), null;
              case V:
                var ee = t.type._context;
                return tg(ee, t), Un(t), null;
              case lr: {
                var Oe = t.type;
                return Ai(Oe) && mh(t), Un(t), null;
              }
              case vt: {
                Vc(t);
                var ze = t.memoizedState;
                if (ze === null) return Un(t), null;
                var st = (t.flags & Me) !== Ce,
                  qe = ze.rendering;
                if (qe === null)
                  if (st) rp(ze, !1);
                  else {
                    var qt = UD() && (e === null || (e.flags & Me) === Ce);
                    if (!qt)
                      for (var Ze = t.child; Ze !== null; ) {
                        var Yt = Vh(Ze);
                        if (Yt !== null) {
                          (st = !0), (t.flags |= Me), rp(ze, !1);
                          var ar = Yt.updateQueue;
                          return (
                            ar !== null && ((t.updateQueue = ar), (t.flags |= Ae)),
                            (t.subtreeFlags = Ce),
                            Ux(t, a),
                            Nu(t, _g(Za.current, Id)),
                            t.child
                          );
                        }
                        Ze = Ze.sibling;
                      }
                    ze.tail !== null &&
                      Tt() > XC() &&
                      ((t.flags |= Me), (st = !0), rp(ze, !1), (t.lanes = Kf));
                  }
                else {
                  if (!st) {
                    var Bn = Vh(qe);
                    if (Bn !== null) {
                      (t.flags |= Me), (st = !0);
                      var sa = Bn.updateQueue;
                      if (
                        (sa !== null && ((t.updateQueue = sa), (t.flags |= Ae)),
                        rp(ze, !0),
                        ze.tail === null && ze.tailMode === 'hidden' && !qe.alternate && !Nn())
                      )
                        return Un(t), null;
                    }
                    // The time it took to render last row is greater than the remaining
                    // time we have to render. So rendering one more row would likely
                    // exceed it.
                    else
                      Tt() * 2 - ze.renderingStartTime > XC() &&
                        a !== Jn &&
                        ((t.flags |= Me), (st = !0), rp(ze, !1), (t.lanes = Kf));
                  }
                  if (ze.isBackwards) (qe.sibling = t.child), (t.child = qe);
                  else {
                    var Sr = ze.last;
                    Sr !== null ? (Sr.sibling = qe) : (t.child = qe), (ze.last = qe);
                  }
                }
                if (ze.tail !== null) {
                  var Cr = ze.tail;
                  (ze.rendering = Cr),
                    (ze.tail = Cr.sibling),
                    (ze.renderingStartTime = Tt()),
                    (Cr.sibling = null);
                  var ir = Za.current;
                  return st ? (ir = _g(ir, Id)) : (ir = Fc(ir)), Nu(t, ir), Cr;
                }
                return Un(t), null;
              }
              case Pn:
                break;
              case Ie:
              case it: {
                HS(t);
                var Al = t.memoizedState,
                  Zc = Al !== null;
                if (e !== null) {
                  var Sp = e.memoizedState,
                    $i = Sp !== null;
                  $i !== Zc && // LegacyHidden doesn't do any hiding — it only pre-renders.
                    !le &&
                    (t.flags |= Si);
                }
                return (
                  !Zc || (t.mode & Be) === xe
                    ? Un(t)
                    : er(Yi, Jn) && (Un(t), t.subtreeFlags & (ht | Ae) && (t.flags |= Si)),
                  null
                );
              }
              case Er:
                return null;
              case Dt:
                return null;
            }
            throw new Error(
              'Unknown unit of work tag (' +
                t.tag +
                '). This error is likely caused by a bug in React. Please file an issue.',
            );
          }
          function Nw(e, t, a) {
            switch ((Iy(t), t.tag)) {
              case G: {
                var i = t.type;
                Ai(i) && mh(t);
                var u = t.flags;
                return u & en
                  ? ((t.flags = (u & ~en) | Me), (t.mode & we) !== xe && nS(t), t)
                  : null;
              }
              case F: {
                t.stateNode, Hc(t), Py(t), Mg();
                var s = t.flags;
                return (s & en) !== Ce && (s & Me) === Ce ? ((t.flags = (s & ~en) | Me), t) : null;
              }
              case K:
                return kg(t), null;
              case Te: {
                Vc(t);
                var f = t.memoizedState;
                if (f !== null && f.dehydrated !== null) {
                  if (t.alternate === null)
                    throw new Error(
                      'Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.',
                    );
                  Nc();
                }
                var p = t.flags;
                return p & en
                  ? ((t.flags = (p & ~en) | Me), (t.mode & we) !== xe && nS(t), t)
                  : null;
              }
              case vt:
                return Vc(t), null;
              case P:
                return Hc(t), null;
              case V:
                var v = t.type._context;
                return tg(v, t), null;
              case Ie:
              case it:
                return HS(t), null;
              case Er:
                return null;
              default:
                return null;
            }
          }
          function _C(e, t, a) {
            switch ((Iy(t), t.tag)) {
              case G: {
                var i = t.type.childContextTypes;
                i != null && mh(t);
                break;
              }
              case F: {
                t.stateNode, Hc(t), Py(t), Mg();
                break;
              }
              case K: {
                kg(t);
                break;
              }
              case P:
                Hc(t);
                break;
              case Te:
                Vc(t);
                break;
              case vt:
                Vc(t);
                break;
              case V:
                var u = t.type._context;
                tg(u, t);
                break;
              case Ie:
              case it:
                HS(t);
                break;
            }
          }
          var OC = null;
          OC = /* @__PURE__ */ new Set();
          var om = !1,
            An = !1,
            zw = typeof WeakSet == 'function' ? WeakSet : Set,
            de = null,
            Qc = null,
            Ic = null;
          function Uw(e) {
            rl(null, function () {
              throw e;
            }),
              Uf();
          }
          var Aw = function (e, t) {
            if (((t.props = e.memoizedProps), (t.state = e.memoizedState), e.mode & we))
              try {
                ji(), t.componentWillUnmount();
              } finally {
                Bi(e);
              }
            else t.componentWillUnmount();
          };
          function MC(e, t) {
            try {
              Au(fn, e);
            } catch (a) {
              St(e, t, a);
            }
          }
          function ES(e, t, a) {
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
          function Gc(e, t) {
            var a = e.ref;
            if (a !== null)
              if (typeof a == 'function') {
                var i;
                try {
                  if (_n && li && e.mode & we)
                    try {
                      ji(), (i = a(null));
                    } finally {
                      Bi(e);
                    }
                  else i = a(null);
                } catch (u) {
                  St(e, t, u);
                }
                typeof i == 'function' &&
                  g(
                    'Unexpected return value from a callback ref in %s. A callback ref should not return a function.',
                    Ue(e),
                  );
              } else a.current = null;
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
            qT(e.containerInfo), (de = t), Vw();
            var a = NC;
            return (NC = !1), a;
          }
          function Vw() {
            for (; de !== null; ) {
              var e = de,
                t = e.child;
              (e.subtreeFlags & nu) !== Ce && t !== null ? ((t.return = e), (de = t)) : Bw();
            }
          }
          function Bw() {
            for (; de !== null; ) {
              var e = de;
              ut(e);
              try {
                jw(e);
              } catch (a) {
                St(e, e.return, a);
              }
              Qt();
              var t = e.sibling;
              if (t !== null) {
                (t.return = e.return), (de = t);
                return;
              }
              de = e.return;
            }
          }
          function jw(e) {
            var t = e.alternate,
              a = e.flags;
            if ((a & Mr) !== Ce) {
              switch ((ut(e), e.tag)) {
                case oe:
                case Q:
                case je:
                  break;
                case G: {
                  if (t !== null) {
                    var i = t.memoizedProps,
                      u = t.memoizedState,
                      s = e.stateNode;
                    e.type === e.elementType &&
                      !Ko &&
                      (s.props !== e.memoizedProps &&
                        g(
                          'Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                          Ue(e) || 'instance',
                        ),
                      s.state !== e.memoizedState &&
                        g(
                          'Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                          Ue(e) || 'instance',
                        ));
                    var f = s.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? i : qa(e.type, i),
                      u,
                    );
                    {
                      var p = OC;
                      f === void 0 &&
                        !p.has(e.type) &&
                        (p.add(e.type),
                        g(
                          '%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.',
                          Ue(e),
                        ));
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
                case me:
                case P:
                case lr:
                  break;
                default:
                  throw new Error(
                    'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.',
                  );
              }
              Qt();
            }
          }
          function ti(e, t, a) {
            var i = t.updateQueue,
              u = i !== null ? i.lastEffect : null;
            if (u !== null) {
              var s = u.next,
                f = s;
              do {
                if ((f.tag & e) === e) {
                  var p = f.destroy;
                  (f.destroy = void 0),
                    p !== void 0 &&
                      ((e & zn) !== Yr ? As(t) : (e & fn) !== Yr && Hs(t),
                      (e & Hi) !== Yr && mp(!0),
                      sm(t, a, p),
                      (e & Hi) !== Yr && mp(!1),
                      (e & zn) !== Yr ? Ev() : (e & fn) !== Yr && ru());
                }
                f = f.next;
              } while (f !== s);
            }
          }
          function Au(e, t) {
            var a = t.updateQueue,
              i = a !== null ? a.lastEffect : null;
            if (i !== null) {
              var u = i.next,
                s = u;
              do {
                if ((s.tag & e) === e) {
                  (e & zn) !== Yr ? Cv(t) : (e & fn) !== Yr && Tv(t);
                  var f = s.create;
                  (e & Hi) !== Yr && mp(!0),
                    (s.destroy = f()),
                    (e & Hi) !== Yr && mp(!1),
                    (e & zn) !== Yr ? Gf() : (e & fn) !== Yr && Rv();
                  {
                    var p = s.destroy;
                    if (p !== void 0 && typeof p != 'function') {
                      var v = void 0;
                      (s.tag & fn) !== Ce
                        ? (v = 'useLayoutEffect')
                        : (s.tag & Hi) !== Ce
                          ? (v = 'useInsertionEffect')
                          : (v = 'useEffect');
                      var m = void 0;
                      p === null
                        ? (m =
                            ' You returned null. If your effect does not require clean up, return undefined (or nothing).')
                        : typeof p.then == 'function'
                          ? (m =
                              `

It looks like you wrote ` +
                              v +
                              `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` +
                              v +
                              `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching`)
                          : (m = ' You returned: ' + p),
                        g(
                          '%s must not return anything besides a function, which is used for clean-up.%s',
                          v,
                          m,
                        );
                    }
                  }
                }
                s = s.next;
              } while (s !== u);
            }
          }
          function Pw(e, t) {
            if ((t.flags & Ae) !== Ce)
              switch (t.tag) {
                case ge: {
                  var a = t.stateNode.passiveEffectDuration,
                    i = t.memoizedProps,
                    u = i.id,
                    s = i.onPostCommit,
                    f = tC(),
                    p = t.alternate === null ? 'mount' : 'update';
                  eC() && (p = 'nested-update'), typeof s == 'function' && s(u, p, a, f);
                  var v = t.return;
                  e: for (; v !== null; ) {
                    switch (v.tag) {
                      case F:
                        var m = v.stateNode;
                        m.passiveEffectDuration += a;
                        break e;
                      case ge:
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
            if ((a.flags & En) !== Ce)
              switch (a.tag) {
                case oe:
                case Q:
                case je: {
                  if (!An)
                    if (a.mode & we)
                      try {
                        ji(), Au(fn | cn, a);
                      } finally {
                        Bi(a);
                      }
                    else Au(fn | cn, a);
                  break;
                }
                case G: {
                  var u = a.stateNode;
                  if (a.flags & Ae && !An)
                    if (t === null)
                      if (
                        (a.type === a.elementType &&
                          !Ko &&
                          (u.props !== a.memoizedProps &&
                            g(
                              'Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                              Ue(a) || 'instance',
                            ),
                          u.state !== a.memoizedState &&
                            g(
                              'Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                              Ue(a) || 'instance',
                            )),
                        a.mode & we)
                      )
                        try {
                          ji(), u.componentDidMount();
                        } finally {
                          Bi(a);
                        }
                      else u.componentDidMount();
                    else {
                      var s =
                          a.elementType === a.type ? t.memoizedProps : qa(a.type, t.memoizedProps),
                        f = t.memoizedState;
                      if (
                        (a.type === a.elementType &&
                          !Ko &&
                          (u.props !== a.memoizedProps &&
                            g(
                              'Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                              Ue(a) || 'instance',
                            ),
                          u.state !== a.memoizedState &&
                            g(
                              'Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                              Ue(a) || 'instance',
                            )),
                        a.mode & we)
                      )
                        try {
                          ji(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                        } finally {
                          Bi(a);
                        }
                      else u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                    }
                  var p = a.updateQueue;
                  p !== null &&
                    (a.type === a.elementType &&
                      !Ko &&
                      (u.props !== a.memoizedProps &&
                        g(
                          'Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                          Ue(a) || 'instance',
                        ),
                      u.state !== a.memoizedState &&
                        g(
                          'Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                          Ue(a) || 'instance',
                        )),
                    v1(a, p, u));
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
                    var R = a.type,
                      E = a.memoizedProps;
                    oR(y, R, E);
                  }
                  break;
                }
                case me:
                  break;
                case P:
                  break;
                case ge: {
                  {
                    var _ = a.memoizedProps,
                      O = _.onCommit,
                      z = _.onRender,
                      ae = a.stateNode.effectDuration,
                      Ee = tC(),
                      ye = t === null ? 'mount' : 'update';
                    eC() && (ye = 'nested-update'),
                      typeof z == 'function' &&
                        z(
                          a.memoizedProps.id,
                          ye,
                          a.actualDuration,
                          a.treeBaseDuration,
                          a.actualStartTime,
                          Ee,
                        );
                    {
                      typeof O == 'function' && O(a.memoizedProps.id, ye, ae, Ee), BD(a);
                      var Xe = a.return;
                      e: for (; Xe !== null; ) {
                        switch (Xe.tag) {
                          case F:
                            var Qe = Xe.stateNode;
                            Qe.effectDuration += ae;
                            break e;
                          case ge:
                            var D = Xe.stateNode;
                            D.effectDuration += ae;
                            break e;
                        }
                        Xe = Xe.return;
                      }
                    }
                  }
                  break;
                }
                case Te: {
                  qw(e, a);
                  break;
                }
                case vt:
                case lr:
                case Pn:
                case Ie:
                case it:
                case Dt:
                  break;
                default:
                  throw new Error(
                    'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.',
                  );
              }
            An || (a.flags & Gn && zC(a));
          }
          function $w(e) {
            switch (e.tag) {
              case oe:
              case Q:
              case je: {
                if (e.mode & we)
                  try {
                    ji(), MC(e, e.return);
                  } finally {
                    Bi(e);
                  }
                else MC(e, e.return);
                break;
              }
              case G: {
                var t = e.stateNode;
                typeof t.componentDidMount == 'function' && Hw(e, e.return, t), LC(e, e.return);
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
              } else if (i.tag === me) {
                if (a === null)
                  try {
                    var s = i.stateNode;
                    t ? SR(s) : ER(s, i.memoizedProps);
                  } catch (f) {
                    St(e, e.return, f);
                  }
              } else if (!((i.tag === Ie || i.tag === it) && i.memoizedState !== null && i !== e)) {
                if (i.child !== null) {
                  (i.child.return = i), (i = i.child);
                  continue;
                }
              }
              if (i === e) return;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e) return;
                a === i && (a = null), (i = i.return);
              }
              a === i && (a = null), (i.sibling.return = i.return), (i = i.sibling);
            }
          }
          function zC(e) {
            var t = e.ref;
            if (t !== null) {
              var a = e.stateNode,
                i;
              switch (e.tag) {
                case K:
                  i = a;
                  break;
                default:
                  i = a;
              }
              if (typeof t == 'function') {
                var u;
                if (e.mode & we)
                  try {
                    ji(), (u = t(i));
                  } finally {
                    Bi(e);
                  }
                else u = t(i);
                typeof u == 'function' &&
                  g(
                    'Unexpected return value from a callback ref in %s. A callback ref should not return a function.',
                    Ue(e),
                  );
              } else
                t.hasOwnProperty('current') ||
                  g(
                    'Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().',
                    Ue(e),
                  ),
                  (t.current = i);
            }
          }
          function Iw(e) {
            var t = e.alternate;
            t !== null && (t.return = null), (e.return = null);
          }
          function UC(e) {
            var t = e.alternate;
            t !== null && ((e.alternate = null), UC(t));
            {
              if (((e.child = null), (e.deletions = null), (e.sibling = null), e.tag === K)) {
                var a = e.stateNode;
                a !== null && JR(a);
              }
              (e.stateNode = null),
                (e._debugOwner = null),
                (e.return = null),
                (e.dependencies = null),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.pendingProps = null),
                (e.stateNode = null),
                (e.updateQueue = null);
            }
          }
          function Gw(e) {
            for (var t = e.return; t !== null; ) {
              if (AC(t)) return t;
              t = t.return;
            }
            throw new Error(
              'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.',
            );
          }
          function AC(e) {
            return e.tag === K || e.tag === F || e.tag === P;
          }
          function HC(e) {
            var t = e;
            e: for (;;) {
              for (; t.sibling === null; ) {
                if (t.return === null || AC(t.return)) return null;
                t = t.return;
              }
              for (
                t.sibling.return = t.return, t = t.sibling;
                t.tag !== K && t.tag !== me && t.tag !== Ht;

              ) {
                if (t.flags & ht || t.child === null || t.tag === P) continue e;
                (t.child.return = t), (t = t.child);
              }
              if (!(t.flags & ht)) return t.stateNode;
            }
          }
          function Ww(e) {
            var t = Gw(e);
            switch (t.tag) {
              case K: {
                var a = t.stateNode;
                t.flags & et && (F0(a), (t.flags &= ~et));
                var i = HC(e);
                RS(e, i, a);
                break;
              }
              case F:
              case P: {
                var u = t.stateNode.containerInfo,
                  s = HC(e);
                TS(e, s, u);
                break;
              }
              default:
                throw new Error(
                  'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.',
                );
            }
          }
          function TS(e, t, a) {
            var i = e.tag,
              u = i === K || i === me;
            if (u) {
              var s = e.stateNode;
              t ? vR(a, s, t) : dR(a, s);
            } else if (i !== P) {
              var f = e.child;
              if (f !== null) {
                TS(f, t, a);
                for (var p = f.sibling; p !== null; ) TS(p, t, a), (p = p.sibling);
              }
            }
          }
          function RS(e, t, a) {
            var i = e.tag,
              u = i === K || i === me;
            if (u) {
              var s = e.stateNode;
              t ? pR(a, s, t) : fR(a, s);
            } else if (i !== P) {
              var f = e.child;
              if (f !== null) {
                RS(f, t, a);
                for (var p = f.sibling; p !== null; ) RS(p, t, a), (p = p.sibling);
              }
            }
          }
          var Hn = null,
            ni = !1;
          function Xw(e, t, a) {
            {
              var i = t;
              e: for (; i !== null; ) {
                switch (i.tag) {
                  case K: {
                    (Hn = i.stateNode), (ni = !1);
                    break e;
                  }
                  case F: {
                    (Hn = i.stateNode.containerInfo), (ni = !0);
                    break e;
                  }
                  case P: {
                    (Hn = i.stateNode.containerInfo), (ni = !0);
                    break e;
                  }
                }
                i = i.return;
              }
              if (Hn === null)
                throw new Error(
                  'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.',
                );
              FC(e, t, a), (Hn = null), (ni = !1);
            }
            Iw(a);
          }
          function Hu(e, t, a) {
            for (var i = a.child; i !== null; ) FC(e, t, i), (i = i.sibling);
          }
          function FC(e, t, a) {
            switch ((Qf(a), a.tag)) {
              case K:
                An || Gc(a, t);
              case me: {
                {
                  var i = Hn,
                    u = ni;
                  (Hn = null),
                    Hu(e, t, a),
                    (Hn = i),
                    (ni = u),
                    Hn !== null && (ni ? mR(Hn, a.stateNode) : hR(Hn, a.stateNode));
                }
                return;
              }
              case Ht: {
                Hn !== null && (ni ? yR(Hn, a.stateNode) : zy(Hn, a.stateNode));
                return;
              }
              case P: {
                {
                  var s = Hn,
                    f = ni;
                  (Hn = a.stateNode.containerInfo), (ni = !0), Hu(e, t, a), (Hn = s), (ni = f);
                }
                return;
              }
              case oe:
              case Q:
              case nt:
              case je: {
                if (!An) {
                  var p = a.updateQueue;
                  if (p !== null) {
                    var v = p.lastEffect;
                    if (v !== null) {
                      var m = v.next,
                        y = m;
                      do {
                        var R = y,
                          E = R.destroy,
                          _ = R.tag;
                        E !== void 0 &&
                          ((_ & Hi) !== Yr
                            ? sm(a, t, E)
                            : (_ & fn) !== Yr &&
                              (Hs(a),
                              a.mode & we ? (ji(), sm(a, t, E), Bi(a)) : sm(a, t, E),
                              ru())),
                          (y = y.next);
                      } while (y !== m);
                    }
                  }
                }
                Hu(e, t, a);
                return;
              }
              case G: {
                if (!An) {
                  Gc(a, t);
                  var O = a.stateNode;
                  typeof O.componentWillUnmount == 'function' && ES(a, t, O);
                }
                Hu(e, t, a);
                return;
              }
              case Pn: {
                Hu(e, t, a);
                return;
              }
              case Ie: {
                if (
                  // TODO: Remove this dead flag
                  a.mode & Be
                ) {
                  var z = An;
                  (An = z || a.memoizedState !== null), Hu(e, t, a), (An = z);
                } else Hu(e, t, a);
                break;
              }
              default: {
                Hu(e, t, a);
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
              a === null && (a = e.stateNode = new zw()),
                t.forEach(function (i) {
                  var u = GD.bind(null, e, i);
                  if (!a.has(i)) {
                    if ((a.add(i), on))
                      if (Qc !== null && Ic !== null) hp(Ic, Qc);
                      else
                        throw Error(
                          'Expected finished root and lanes to be set. This is a bug in React.',
                        );
                    i.then(u, u);
                  }
                });
            }
          }
          function Zw(e, t, a) {
            (Qc = a), (Ic = e), ut(t), BC(t, e), ut(t), (Qc = null), (Ic = null);
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
            var f = Nm();
            if (t.subtreeFlags & Kn)
              for (var p = t.child; p !== null; ) ut(p), BC(p, e), (p = p.sibling);
            ut(f);
          }
          function BC(e, t, a) {
            var i = e.alternate,
              u = e.flags;
            switch (e.tag) {
              case oe:
              case Q:
              case nt:
              case je: {
                if ((ri(t, e), Pi(e), u & Ae)) {
                  try {
                    ti(Hi | cn, e, e.return), Au(Hi | cn, e);
                  } catch (Oe) {
                    St(e, e.return, Oe);
                  }
                  if (e.mode & we) {
                    try {
                      ji(), ti(fn | cn, e, e.return);
                    } catch (Oe) {
                      St(e, e.return, Oe);
                    }
                    Bi(e);
                  } else
                    try {
                      ti(fn | cn, e, e.return);
                    } catch (Oe) {
                      St(e, e.return, Oe);
                    }
                }
                return;
              }
              case G: {
                ri(t, e), Pi(e), u & Gn && i !== null && Gc(i, i.return);
                return;
              }
              case K: {
                ri(t, e), Pi(e), u & Gn && i !== null && Gc(i, i.return);
                {
                  if (e.flags & et) {
                    var s = e.stateNode;
                    try {
                      F0(s);
                    } catch (Oe) {
                      St(e, e.return, Oe);
                    }
                  }
                  if (u & Ae) {
                    var f = e.stateNode;
                    if (f != null) {
                      var p = e.memoizedProps,
                        v = i !== null ? i.memoizedProps : p,
                        m = e.type,
                        y = e.updateQueue;
                      if (((e.updateQueue = null), y !== null))
                        try {
                          sR(f, y, m, v, p, e);
                        } catch (Oe) {
                          St(e, e.return, Oe);
                        }
                    }
                  }
                }
                return;
              }
              case me: {
                if ((ri(t, e), Pi(e), u & Ae)) {
                  if (e.stateNode === null)
                    throw new Error(
                      'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.',
                    );
                  var R = e.stateNode,
                    E = e.memoizedProps,
                    _ = i !== null ? i.memoizedProps : E;
                  try {
                    cR(R, _, E);
                  } catch (Oe) {
                    St(e, e.return, Oe);
                  }
                }
                return;
              }
              case F: {
                if ((ri(t, e), Pi(e), u & Ae && i !== null)) {
                  var O = i.memoizedState;
                  if (O.isDehydrated)
                    try {
                      UR(t.containerInfo);
                    } catch (Oe) {
                      St(e, e.return, Oe);
                    }
                }
                return;
              }
              case P: {
                ri(t, e), Pi(e);
                return;
              }
              case Te: {
                ri(t, e), Pi(e);
                var z = e.child;
                if (z.flags & Si) {
                  var ae = z.stateNode,
                    Ee = z.memoizedState,
                    ye = Ee !== null;
                  if (((ae.isHidden = ye), ye)) {
                    var Xe = z.alternate !== null && z.alternate.memoizedState !== null;
                    Xe || LD();
                  }
                }
                if (u & Ae) {
                  try {
                    Kw(e);
                  } catch (Oe) {
                    St(e, e.return, Oe);
                  }
                  VC(e);
                }
                return;
              }
              case Ie: {
                var Qe = i !== null && i.memoizedState !== null;
                if (
                  // TODO: Remove this dead flag
                  e.mode & Be
                ) {
                  var D = An;
                  (An = D || Qe), ri(t, e), (An = D);
                } else ri(t, e);
                if ((Pi(e), u & Si)) {
                  var U = e.stateNode,
                    k = e.memoizedState,
                    $ = k !== null,
                    ie = e;
                  if (((U.isHidden = $), $ && !Qe && (ie.mode & Be) !== xe)) {
                    de = ie;
                    for (var ee = ie.child; ee !== null; ) (de = ee), eD(ee), (ee = ee.sibling);
                  }
                  Qw(ie, $);
                }
                return;
              }
              case vt: {
                ri(t, e), Pi(e), u & Ae && VC(e);
                return;
              }
              case Pn:
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
            t & Lr && (e.flags &= ~Lr);
          }
          function Jw(e, t, a) {
            (Qc = a), (Ic = t), (de = e), jC(e, t, a), (Qc = null), (Ic = null);
          }
          function jC(e, t, a) {
            for (var i = (e.mode & Be) !== xe; de !== null; ) {
              var u = de,
                s = u.child;
              if (u.tag === Ie && i) {
                var f = u.memoizedState !== null,
                  p = f || om;
                if (p) {
                  xS(e, t, a);
                  continue;
                } else {
                  var v = u.alternate,
                    m = v !== null && v.memoizedState !== null,
                    y = m || An,
                    R = om,
                    E = An;
                  (om = p), (An = y), An && !E && ((de = u), tD(u));
                  for (var _ = s; _ !== null; )
                    (de = _),
                      jC(
                        _,
                        // New root; bubble back up to here and stop.
                        t,
                        a,
                      ),
                      (_ = _.sibling);
                  (de = u), (om = R), (An = E), xS(e, t, a);
                  continue;
                }
              }
              (u.subtreeFlags & En) !== Ce && s !== null ? ((s.return = u), (de = s)) : xS(e, t, a);
            }
          }
          function xS(e, t, a) {
            for (; de !== null; ) {
              var i = de;
              if ((i.flags & En) !== Ce) {
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
                de = null;
                return;
              }
              var s = i.sibling;
              if (s !== null) {
                (s.return = i.return), (de = s);
                return;
              }
              de = i.return;
            }
          }
          function eD(e) {
            for (; de !== null; ) {
              var t = de,
                a = t.child;
              switch (t.tag) {
                case oe:
                case Q:
                case nt:
                case je: {
                  if (t.mode & we)
                    try {
                      ji(), ti(fn, t, t.return);
                    } finally {
                      Bi(t);
                    }
                  else ti(fn, t, t.return);
                  break;
                }
                case G: {
                  Gc(t, t.return);
                  var i = t.stateNode;
                  typeof i.componentWillUnmount == 'function' && ES(t, t.return, i);
                  break;
                }
                case K: {
                  Gc(t, t.return);
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
              a !== null ? ((a.return = t), (de = a)) : PC(e);
            }
          }
          function PC(e) {
            for (; de !== null; ) {
              var t = de;
              if (t === e) {
                de = null;
                return;
              }
              var a = t.sibling;
              if (a !== null) {
                (a.return = t.return), (de = a);
                return;
              }
              de = t.return;
            }
          }
          function tD(e) {
            for (; de !== null; ) {
              var t = de,
                a = t.child;
              if (t.tag === Ie) {
                var i = t.memoizedState !== null;
                if (i) {
                  YC(e);
                  continue;
                }
              }
              a !== null ? ((a.return = t), (de = a)) : YC(e);
            }
          }
          function YC(e) {
            for (; de !== null; ) {
              var t = de;
              ut(t);
              try {
                $w(t);
              } catch (i) {
                St(t, t.return, i);
              }
              if ((Qt(), t === e)) {
                de = null;
                return;
              }
              var a = t.sibling;
              if (a !== null) {
                (a.return = t.return), (de = a);
                return;
              }
              de = t.return;
            }
          }
          function nD(e, t, a, i) {
            (de = t), rD(t, e, a, i);
          }
          function rD(e, t, a, i) {
            for (; de !== null; ) {
              var u = de,
                s = u.child;
              (u.subtreeFlags & Nr) !== Ce && s !== null
                ? ((s.return = u), (de = s))
                : aD(e, t, a, i);
            }
          }
          function aD(e, t, a, i) {
            for (; de !== null; ) {
              var u = de;
              if ((u.flags & Ct) !== Ce) {
                ut(u);
                try {
                  iD(t, u, a, i);
                } catch (f) {
                  St(u, u.return, f);
                }
                Qt();
              }
              if (u === e) {
                de = null;
                return;
              }
              var s = u.sibling;
              if (s !== null) {
                (s.return = u.return), (de = s);
                return;
              }
              de = u.return;
            }
          }
          function iD(e, t, a, i) {
            switch (t.tag) {
              case oe:
              case Q:
              case je: {
                if (t.mode & we) {
                  tS();
                  try {
                    Au(zn | cn, t);
                  } finally {
                    eS(t);
                  }
                } else Au(zn | cn, t);
                break;
              }
            }
          }
          function lD(e) {
            (de = e), uD();
          }
          function uD() {
            for (; de !== null; ) {
              var e = de,
                t = e.child;
              if ((de.flags & Je) !== Ce) {
                var a = e.deletions;
                if (a !== null) {
                  for (var i = 0; i < a.length; i++) {
                    var u = a[i];
                    (de = u), cD(u, e);
                  }
                  {
                    var s = e.alternate;
                    if (s !== null) {
                      var f = s.child;
                      if (f !== null) {
                        s.child = null;
                        do {
                          var p = f.sibling;
                          (f.sibling = null), (f = p);
                        } while (f !== null);
                      }
                    }
                  }
                  de = e;
                }
              }
              (e.subtreeFlags & Nr) !== Ce && t !== null ? ((t.return = e), (de = t)) : oD();
            }
          }
          function oD() {
            for (; de !== null; ) {
              var e = de;
              (e.flags & Ct) !== Ce && (ut(e), sD(e), Qt());
              var t = e.sibling;
              if (t !== null) {
                (t.return = e.return), (de = t);
                return;
              }
              de = e.return;
            }
          }
          function sD(e) {
            switch (e.tag) {
              case oe:
              case Q:
              case je: {
                e.mode & we ? (tS(), ti(zn | cn, e, e.return), eS(e)) : ti(zn | cn, e, e.return);
                break;
              }
            }
          }
          function cD(e, t) {
            for (; de !== null; ) {
              var a = de;
              ut(a), dD(a, t), Qt();
              var i = a.child;
              i !== null ? ((i.return = a), (de = i)) : fD(e);
            }
          }
          function fD(e) {
            for (; de !== null; ) {
              var t = de,
                a = t.sibling,
                i = t.return;
              if ((UC(t), t === e)) {
                de = null;
                return;
              }
              if (a !== null) {
                (a.return = i), (de = a);
                return;
              }
              de = i;
            }
          }
          function dD(e, t) {
            switch (e.tag) {
              case oe:
              case Q:
              case je: {
                e.mode & we ? (tS(), ti(zn, e, t), eS(e)) : ti(zn, e, t);
                break;
              }
            }
          }
          function pD(e) {
            switch (e.tag) {
              case oe:
              case Q:
              case je: {
                try {
                  Au(fn | cn, e);
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
              case oe:
              case Q:
              case je: {
                try {
                  Au(zn | cn, e);
                } catch (t) {
                  St(e, e.return, t);
                }
                break;
              }
            }
          }
          function hD(e) {
            switch (e.tag) {
              case oe:
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
                typeof t.componentWillUnmount == 'function' && ES(e, e.return, t);
                break;
              }
            }
          }
          function mD(e) {
            switch (e.tag) {
              case oe:
              case Q:
              case je:
                try {
                  ti(zn | cn, e, e.return);
                } catch (t) {
                  St(e, e.return, t);
                }
            }
          }
          if (typeof Symbol == 'function' && Symbol.for) {
            var ap = Symbol.for;
            ap('selector.component'),
              ap('selector.has_pseudo_class'),
              ap('selector.role'),
              ap('selector.test_id'),
              ap('selector.text');
          }
          var yD = [];
          function gD() {
            yD.forEach(function (e) {
              return e();
            });
          }
          var SD = w.ReactCurrentActQueue;
          function CD(e) {
            {
              var t =
                  // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
                  typeof IS_REACT_ACT_ENVIRONMENT < 'u' ? IS_REACT_ACT_ENVIRONMENT : void 0,
                a = typeof jest < 'u';
              return a && t !== !1;
            }
          }
          function $C() {
            {
              var e =
                // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
                typeof IS_REACT_ACT_ENVIRONMENT < 'u' ? IS_REACT_ACT_ENVIRONMENT : void 0;
              return (
                !e &&
                  SD.current !== null &&
                  g('The current testing environment is not configured to support act(...)'),
                e
              );
            }
          }
          var ED = Math.ceil,
            wS = w.ReactCurrentDispatcher,
            DS = w.ReactCurrentOwner,
            Fn = w.ReactCurrentBatchConfig,
            ai = w.ReactCurrentActQueue,
            vn =
              /*             */
              0,
            QC =
              /*               */
              1,
            Vn =
              /*                */
              2,
            Da =
              /*                */
              4,
            Ll = 0,
            ip = 1,
            qo = 2,
            cm = 3,
            lp = 4,
            IC = 5,
            kS = 6,
            We = vn,
            yr = null,
            At = null,
            hn = A,
            Yi = A,
            bS = ku(A),
            mn = Ll,
            up = null,
            fm = A,
            op = A,
            dm = A,
            sp = null,
            $r = null,
            _S = 0,
            GC = 500,
            WC = 1 / 0,
            TD = 500,
            Nl = null;
          function cp() {
            WC = Tt() + TD;
          }
          function XC() {
            return WC;
          }
          var pm = !1,
            OS = null,
            Wc = null,
            Zo = !1,
            Fu = null,
            fp = A,
            MS = [],
            LS = null,
            RD = 50,
            dp = 0,
            NS = null,
            zS = !1,
            vm = !1,
            xD = 50,
            Xc = 0,
            hm = null,
            pp = pt,
            mm = A,
            KC = !1;
          function ym() {
            return yr;
          }
          function gr() {
            return (We & (Vn | Da)) !== vn ? Tt() : (pp !== pt || (pp = Tt()), pp);
          }
          function Vu(e) {
            var t = e.mode;
            if ((t & Be) === xe) return ke;
            if ((We & Vn) !== vn && hn !== A) return Gt(hn);
            var a = Cx() !== Sx;
            if (a) {
              if (Fn.transition !== null) {
                var i = Fn.transition;
                i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()),
                  i._updatedFibers.add(e);
              }
              return mm === Ge && (mm = Jf()), mm;
            }
            var u = Hr();
            if (u !== Ge) return u;
            var s = aR();
            return s;
          }
          function wD(e) {
            var t = e.mode;
            return (t & Be) === xe ? ke : ty();
          }
          function yn(e, t, a, i) {
            XD(),
              KC && g('useInsertionEffect must not schedule updates.'),
              zS && (vm = !0),
              hl(e, a, i),
              (We & Vn) !== A && e === yr
                ? ZD(t)
                : (on && ad(e, t, a),
                  JD(t),
                  e === yr && ((We & Vn) === vn && (op = He(op, a)), mn === lp && Bu(e, hn)),
                  Qr(e, i),
                  a === ke &&
                    We === vn &&
                    (t.mode & Be) === xe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
                    !ai.isBatchingLegacy &&
                    (cp(), X0()));
          }
          function DD(e, t, a) {
            var i = e.current;
            (i.lanes = t), hl(e, t, a), Qr(e, a);
          }
          function kD(e) {
            return (
              // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
              // decided not to enable it.
              (We & Vn) !== vn
            );
          }
          function Qr(e, t) {
            var a = e.callbackNode;
            Zm(e, t);
            var i = Ro(e, e === yr ? hn : A);
            if (i === A) {
              a !== null && dE(a), (e.callbackNode = null), (e.callbackPriority = Ge);
              return;
            }
            var u = jt(i),
              s = e.callbackPriority;
            if (
              s === u && // Special case related to `act`. If the currently scheduled task is a
              // Scheduler task, rather than an `act` task, cancel it and re-scheduled
              // on the `act` queue.
              !(ai.current !== null && a !== jS)
            ) {
              a == null &&
                s !== ke &&
                g(
                  'Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.',
                );
              return;
            }
            a != null && dE(a);
            var f;
            if (u === ke)
              e.tag === bu
                ? (ai.isBatchingLegacy !== null && (ai.didScheduleLegacyUpdate = !0),
                  nx(JC.bind(null, e)))
                : W0(JC.bind(null, e)),
                ai.current !== null
                  ? ai.current.push(_u)
                  : lR(function () {
                      (We & (Vn | Da)) === vn && _u();
                    }),
                (f = null);
            else {
              var p;
              switch (bo(i)) {
                case Tn:
                  p = Ns;
                  break;
                case sn:
                  p = pr;
                  break;
                case Ya:
                  p = ma;
                  break;
                case Do:
                  p = Ei;
                  break;
                default:
                  p = ma;
                  break;
              }
              f = PS(p, qC.bind(null, e));
            }
            (e.callbackPriority = u), (e.callbackNode = f);
          }
          function qC(e, t) {
            if ((Xx(), (pp = pt), (mm = A), (We & (Vn | Da)) !== vn))
              throw new Error('Should not already be working.');
            var a = e.callbackNode,
              i = Ul();
            if (i && e.callbackNode !== a) return null;
            var u = Ro(e, e === yr ? hn : A);
            if (u === A) return null;
            var s = !wo(e, u) && !_v(e, u) && !t,
              f = s ? HD(e, u) : Sm(e, u);
            if (f !== Ll) {
              if (f === qo) {
                var p = qf(e);
                p !== A && ((u = p), (f = US(e, p)));
              }
              if (f === ip) {
                var v = up;
                throw (Jo(e, A), Bu(e, u), Qr(e, Tt()), v);
              }
              if (f === kS) Bu(e, u);
              else {
                var m = !wo(e, u),
                  y = e.current.alternate;
                if (m && !_D(y)) {
                  if (((f = Sm(e, u)), f === qo)) {
                    var R = qf(e);
                    R !== A && ((u = R), (f = US(e, R)));
                  }
                  if (f === ip) {
                    var E = up;
                    throw (Jo(e, A), Bu(e, u), Qr(e, Tt()), E);
                  }
                }
                (e.finishedWork = y), (e.finishedLanes = u), bD(e, f, u);
              }
            }
            return Qr(e, Tt()), e.callbackNode === a ? qC.bind(null, e) : null;
          }
          function US(e, t) {
            var a = sp;
            if (Xt(e)) {
              var i = Jo(e, t);
              (i.flags |= Ot), XR(e.containerInfo);
            }
            var u = Sm(e, t);
            if (u !== qo) {
              var s = $r;
              ($r = a), s !== null && ZC(s);
            }
            return u;
          }
          function ZC(e) {
            $r === null ? ($r = e) : $r.push.apply($r, e);
          }
          function bD(e, t, a) {
            switch (t) {
              case Ll:
              case ip:
                throw new Error('Root did not complete. This is a bug in React.');
              case qo: {
                es(e, $r, Nl);
                break;
              }
              case cm: {
                if (
                  (Bu(e, a),
                  rc(a) && // do not delay if we're inside an act() scope
                    !pE())
                ) {
                  var i = _S + GC - Tt();
                  if (i > 10) {
                    var u = Ro(e, A);
                    if (u !== A) break;
                    var s = e.suspendedLanes;
                    if (!vl(s, a)) {
                      gr(), nd(e, s);
                      break;
                    }
                    e.timeoutHandle = Ly(es.bind(null, e, $r, Nl), i);
                    break;
                  }
                }
                es(e, $r, Nl);
                break;
              }
              case lp: {
                if ((Bu(e, a), bv(a))) break;
                if (!pE()) {
                  var f = kv(e, a),
                    p = f,
                    v = Tt() - p,
                    m = WD(v) - v;
                  if (m > 10) {
                    e.timeoutHandle = Ly(es.bind(null, e, $r, Nl), m);
                    break;
                  }
                }
                es(e, $r, Nl);
                break;
              }
              case IC: {
                es(e, $r, Nl);
                break;
              }
              default:
                throw new Error('Unknown root exit status.');
            }
          }
          function _D(e) {
            for (var t = e; ; ) {
              if (t.flags & mo) {
                var a = t.updateQueue;
                if (a !== null) {
                  var i = a.stores;
                  if (i !== null)
                    for (var u = 0; u < i.length; u++) {
                      var s = i[u],
                        f = s.getSnapshot,
                        p = s.value;
                      try {
                        if (!fe(f(), p)) return !1;
                      } catch {
                        return !1;
                      }
                    }
                }
              }
              var v = t.child;
              if (t.subtreeFlags & mo && v !== null) {
                (v.return = t), (t = v);
                continue;
              }
              if (t === e) return !0;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
            return !0;
          }
          function Bu(e, t) {
            (t = cu(t, dm)), (t = cu(t, op)), td(e, t);
          }
          function JC(e) {
            if ((Kx(), (We & (Vn | Da)) !== vn)) throw new Error('Should not already be working.');
            Ul();
            var t = Ro(e, A);
            if (!er(t, ke)) return Qr(e, Tt()), null;
            var a = Sm(e, t);
            if (e.tag !== bu && a === qo) {
              var i = qf(e);
              i !== A && ((t = i), (a = US(e, i)));
            }
            if (a === ip) {
              var u = up;
              throw (Jo(e, A), Bu(e, t), Qr(e, Tt()), u);
            }
            if (a === kS) throw new Error('Root did not complete. This is a bug in React.');
            var s = e.current.alternate;
            return (e.finishedWork = s), (e.finishedLanes = t), es(e, $r, Nl), Qr(e, Tt()), null;
          }
          function OD(e, t) {
            t !== A && (fu(e, He(t, ke)), Qr(e, Tt()), (We & (Vn | Da)) === vn && (cp(), _u()));
          }
          function AS(e, t) {
            var a = We;
            We |= QC;
            try {
              return e(t);
            } finally {
              (We = a),
                We === vn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
                  !ai.isBatchingLegacy &&
                  (cp(), X0());
            }
          }
          function MD(e, t, a, i, u) {
            var s = Hr(),
              f = Fn.transition;
            try {
              return (Fn.transition = null), Wt(Tn), e(t, a, i, u);
            } finally {
              Wt(s), (Fn.transition = f), We === vn && cp();
            }
          }
          function zl(e) {
            Fu !== null && Fu.tag === bu && (We & (Vn | Da)) === vn && Ul();
            var t = We;
            We |= QC;
            var a = Fn.transition,
              i = Hr();
            try {
              return (Fn.transition = null), Wt(Tn), e ? e() : void 0;
            } finally {
              Wt(i), (Fn.transition = a), (We = t), (We & (Vn | Da)) === vn && _u();
            }
          }
          function eE() {
            return (We & (Vn | Da)) !== vn;
          }
          function gm(e, t) {
            nr(bS, Yi, e), (Yi = He(Yi, t));
          }
          function HS(e) {
            (Yi = bS.current), tr(bS, e);
          }
          function Jo(e, t) {
            (e.finishedWork = null), (e.finishedLanes = A);
            var a = e.timeoutHandle;
            if ((a !== Ny && ((e.timeoutHandle = Ny), iR(a)), At !== null))
              for (var i = At.return; i !== null; ) {
                var u = i.alternate;
                _C(u, i), (i = i.return);
              }
            yr = e;
            var s = ts(e.current, null);
            return (
              (At = s),
              (hn = Yi = t),
              (mn = Ll),
              (up = null),
              (fm = A),
              (op = A),
              (dm = A),
              (sp = null),
              ($r = null),
              xx(),
              Ka.discardPendingWarnings(),
              s
            );
          }
          function tE(e, t) {
            do {
              var a = At;
              try {
                if ((Dh(), M1(), Qt(), (DS.current = null), a === null || a.return === null)) {
                  (mn = ip), (up = t), (At = null);
                  return;
                }
                if ((_n && a.mode & we && am(a, !0), ii))
                  if ((il(), t !== null && typeof t == 'object' && typeof t.then == 'function')) {
                    var i = t;
                    xv(a, i, hn);
                  } else Fs(a, t, hn);
                tw(e, a.return, a, t, hn), iE(a);
              } catch (u) {
                (t = u), At === a && a !== null ? ((a = a.return), (At = a)) : (a = At);
                continue;
              }
              return;
            } while (!0);
          }
          function nE() {
            var e = wS.current;
            return (wS.current = Jh), e === null ? Jh : e;
          }
          function rE(e) {
            wS.current = e;
          }
          function LD() {
            _S = Tt();
          }
          function vp(e) {
            fm = He(e, fm);
          }
          function ND() {
            mn === Ll && (mn = cm);
          }
          function FS() {
            (mn === Ll || mn === cm || mn === qo) && (mn = lp),
              yr !== null && (xo(fm) || xo(op)) && Bu(yr, hn);
          }
          function zD(e) {
            mn !== lp && (mn = qo), sp === null ? (sp = [e]) : sp.push(e);
          }
          function UD() {
            return mn === Ll;
          }
          function Sm(e, t) {
            var a = We;
            We |= Vn;
            var i = nE();
            if (yr !== e || hn !== t) {
              if (on) {
                var u = e.memoizedUpdaters;
                u.size > 0 && (hp(e, hn), u.clear()), lc(e, t);
              }
              (Nl = id()), Jo(e, t);
            }
            ia(t);
            do
              try {
                AD();
                break;
              } catch (s) {
                tE(e, s);
              }
            while (!0);
            if ((Dh(), (We = a), rE(i), At !== null))
              throw new Error(
                'Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.',
              );
            return iu(), (yr = null), (hn = A), mn;
          }
          function AD() {
            for (; At !== null; ) aE(At);
          }
          function HD(e, t) {
            var a = We;
            We |= Vn;
            var i = nE();
            if (yr !== e || hn !== t) {
              if (on) {
                var u = e.memoizedUpdaters;
                u.size > 0 && (hp(e, hn), u.clear()), lc(e, t);
              }
              (Nl = id()), cp(), Jo(e, t);
            }
            ia(t);
            do
              try {
                FD();
                break;
              } catch (s) {
                tE(e, s);
              }
            while (!0);
            return (
              Dh(), rE(i), (We = a), At !== null ? (So(), Ll) : (iu(), (yr = null), (hn = A), mn)
            );
          }
          function FD() {
            for (; At !== null && !Ls(); ) aE(At);
          }
          function aE(e) {
            var t = e.alternate;
            ut(e);
            var a;
            (e.mode & we) !== xe ? (Jg(e), (a = VS(t, e, Yi)), am(e, !0)) : (a = VS(t, e, Yi)),
              Qt(),
              (e.memoizedProps = e.pendingProps),
              a === null ? iE(e) : (At = a),
              (DS.current = null);
          }
          function iE(e) {
            var t = e;
            do {
              var a = t.alternate,
                i = t.return;
              if ((t.flags & cr) === Ce) {
                ut(t);
                var u = void 0;
                if (
                  ((t.mode & we) === xe
                    ? (u = bC(a, t, Yi))
                    : (Jg(t), (u = bC(a, t, Yi)), am(t, !1)),
                  Qt(),
                  u !== null)
                ) {
                  At = u;
                  return;
                }
              } else {
                var s = Nw(a, t);
                if (s !== null) {
                  (s.flags &= hv), (At = s);
                  return;
                }
                if ((t.mode & we) !== xe) {
                  am(t, !1);
                  for (var f = t.actualDuration, p = t.child; p !== null; )
                    (f += p.actualDuration), (p = p.sibling);
                  t.actualDuration = f;
                }
                if (i !== null) (i.flags |= cr), (i.subtreeFlags = Ce), (i.deletions = null);
                else {
                  (mn = kS), (At = null);
                  return;
                }
              }
              var v = t.sibling;
              if (v !== null) {
                At = v;
                return;
              }
              (t = i), (At = t);
            } while (t !== null);
            mn === Ll && (mn = IC);
          }
          function es(e, t, a) {
            var i = Hr(),
              u = Fn.transition;
            try {
              (Fn.transition = null), Wt(Tn), VD(e, t, a, i);
            } finally {
              (Fn.transition = u), Wt(i);
            }
            return null;
          }
          function VD(e, t, a, i) {
            do Ul();
            while (Fu !== null);
            if ((KD(), (We & (Vn | Da)) !== vn)) throw new Error('Should not already be working.');
            var u = e.finishedWork,
              s = e.finishedLanes;
            if ((Us(s), u === null)) return If(), null;
            if (
              (s === A &&
                g(
                  'root.finishedLanes should not be empty during a commit. This is a bug in React.',
                ),
              (e.finishedWork = null),
              (e.finishedLanes = A),
              u === e.current)
            )
              throw new Error(
                'Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.',
              );
            (e.callbackNode = null), (e.callbackPriority = Ge);
            var f = He(u.lanes, u.childLanes);
            rd(e, f),
              e === yr && ((yr = null), (At = null), (hn = A)),
              ((u.subtreeFlags & Nr) !== Ce || (u.flags & Nr) !== Ce) &&
                (Zo ||
                  ((Zo = !0),
                  (LS = a),
                  PS(ma, function () {
                    return Ul(), null;
                  })));
            var p = (u.subtreeFlags & (nu | Kn | En | Nr)) !== Ce,
              v = (u.flags & (nu | Kn | En | Nr)) !== Ce;
            if (p || v) {
              var m = Fn.transition;
              Fn.transition = null;
              var y = Hr();
              Wt(Tn);
              var R = We;
              (We |= Da),
                (DS.current = null),
                Fw(e, u),
                nC(),
                Zw(e, u, s),
                ZT(e.containerInfo),
                (e.current = u),
                wv(s),
                Jw(u, e, s),
                au(),
                gv(),
                (We = R),
                Wt(y),
                (Fn.transition = m);
            } else (e.current = u), nC();
            var E = Zo;
            if (
              (Zo ? ((Zo = !1), (Fu = e), (fp = s)) : ((Xc = 0), (hm = null)),
              (f = e.pendingLanes),
              f === A && (Wc = null),
              E || sE(e.current, !1),
              Ba(u.stateNode, i),
              on && e.memoizedUpdaters.clear(),
              gD(),
              Qr(e, Tt()),
              t !== null)
            )
              for (var _ = e.onRecoverableError, O = 0; O < t.length; O++) {
                var z = t[O],
                  ae = z.stack,
                  Ee = z.digest;
                _(z.value, {
                  componentStack: ae,
                  digest: Ee,
                });
              }
            if (pm) {
              pm = !1;
              var ye = OS;
              throw ((OS = null), ye);
            }
            return (
              er(fp, ke) && e.tag !== bu && Ul(),
              (f = e.pendingLanes),
              er(f, ke) ? (Wx(), e === NS ? dp++ : ((dp = 0), (NS = e))) : (dp = 0),
              _u(),
              If(),
              null
            );
          }
          function Ul() {
            if (Fu !== null) {
              var e = bo(fp),
                t = ry(Ya, e),
                a = Fn.transition,
                i = Hr();
              try {
                return (Fn.transition = null), Wt(t), jD();
              } finally {
                Wt(i), (Fn.transition = a);
              }
            }
            return !1;
          }
          function BD(e) {
            MS.push(e),
              Zo ||
                ((Zo = !0),
                PS(ma, function () {
                  return Ul(), null;
                }));
          }
          function jD() {
            if (Fu === null) return !1;
            var e = LS;
            LS = null;
            var t = Fu,
              a = fp;
            if (((Fu = null), (fp = A), (We & (Vn | Da)) !== vn))
              throw new Error('Cannot flush passive effects while already rendering.');
            (zS = !0), (vm = !1), Dv(a);
            var i = We;
            (We |= Da), lD(t.current), nD(t, t.current, a, e);
            {
              var u = MS;
              MS = [];
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                Pw(t, f);
              }
            }
            go(),
              sE(t.current, !0),
              (We = i),
              _u(),
              vm ? (t === hm ? Xc++ : ((Xc = 0), (hm = t))) : (Xc = 0),
              (zS = !1),
              (vm = !1),
              Ri(t);
            {
              var p = t.current.stateNode;
              (p.effectDuration = 0), (p.passiveEffectDuration = 0);
            }
            return !0;
          }
          function lE(e) {
            return Wc !== null && Wc.has(e);
          }
          function PD(e) {
            Wc === null ? (Wc = /* @__PURE__ */ new Set([e])) : Wc.add(e);
          }
          function YD(e) {
            pm || ((pm = !0), (OS = e));
          }
          var $D = YD;
          function uE(e, t, a) {
            var i = Xo(a, t),
              u = aC(e, i, ke),
              s = Mu(e, u, ke),
              f = gr();
            s !== null && (hl(s, ke, f), Qr(s, f));
          }
          function St(e, t, a) {
            if ((Uw(a), mp(!1), e.tag === F)) {
              uE(e, e, a);
              return;
            }
            var i = null;
            for (i = t; i !== null; ) {
              if (i.tag === F) {
                uE(i, e, a);
                return;
              } else if (i.tag === G) {
                var u = i.type,
                  s = i.stateNode;
                if (
                  typeof u.getDerivedStateFromError == 'function' ||
                  (typeof s.componentDidCatch == 'function' && !lE(s))
                ) {
                  var f = Xo(a, e),
                    p = iS(i, f, ke),
                    v = Mu(i, p, ke),
                    m = gr();
                  v !== null && (hl(v, ke, m), Qr(v, m));
                  return;
                }
              }
              i = i.return;
            }
            g(
              `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
              a,
            );
          }
          function QD(e, t, a) {
            var i = e.pingCache;
            i !== null && i.delete(t);
            var u = gr();
            nd(e, a),
              ek(e),
              yr === e &&
                vl(hn, a) &&
                (mn === lp || (mn === cm && rc(hn) && Tt() - _S < GC)
                  ? Jo(e, A)
                  : (dm = He(dm, a))),
              Qr(e, u);
          }
          function oE(e, t) {
            t === Ge && (t = wD(e));
            var a = gr(),
              i = Pr(e, t);
            i !== null && (hl(i, t, a), Qr(i, a));
          }
          function ID(e) {
            var t = e.memoizedState,
              a = Ge;
            t !== null && (a = t.retryLane), oE(e, a);
          }
          function GD(e, t) {
            var a = Ge,
              i;
            switch (e.tag) {
              case Te:
                i = e.stateNode;
                var u = e.memoizedState;
                u !== null && (a = u.retryLane);
                break;
              case vt:
                i = e.stateNode;
                break;
              default:
                throw new Error(
                  'Pinged unknown suspense boundary type. This is probably a bug in React.',
                );
            }
            i !== null && i.delete(t), oE(e, a);
          }
          function WD(e) {
            return e < 120
              ? 120
              : e < 480
                ? 480
                : e < 1080
                  ? 1080
                  : e < 1920
                    ? 1920
                    : e < 3e3
                      ? 3e3
                      : e < 4320
                        ? 4320
                        : ED(e / 1960) * 1960;
          }
          function XD() {
            if (dp > RD)
              throw (
                ((dp = 0),
                (NS = null),
                new Error(
                  'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.',
                ))
              );
            Xc > xD &&
              ((Xc = 0),
              (hm = null),
              g(
                "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.",
              ));
          }
          function KD() {
            Ka.flushLegacyContextWarning(), Ka.flushPendingUnsafeLifecycleWarnings();
          }
          function sE(e, t) {
            ut(e), Cm(e, Xn, hD), t && Cm(e, al, mD), Cm(e, Xn, pD), t && Cm(e, al, vD), Qt();
          }
          function Cm(e, t, a) {
            for (var i = e, u = null; i !== null; ) {
              var s = i.subtreeFlags & t;
              i !== u && i.child !== null && s !== Ce
                ? (i = i.child)
                : ((i.flags & t) !== Ce && a(i),
                  i.sibling !== null ? (i = i.sibling) : (i = u = i.return));
            }
          }
          var Em = null;
          function cE(e) {
            {
              if ((We & Vn) !== vn || !(e.mode & Be)) return;
              var t = e.tag;
              if (t !== _e && t !== F && t !== G && t !== oe && t !== Q && t !== nt && t !== je)
                return;
              var a = Ue(e) || 'ReactComponent';
              if (Em !== null) {
                if (Em.has(a)) return;
                Em.add(a);
              } else Em = /* @__PURE__ */ new Set([a]);
              var i = Vt;
              try {
                ut(e),
                  g(
                    "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.",
                  );
              } finally {
                i ? ut(e) : Qt();
              }
            }
          }
          var VS;
          {
            var qD = null;
            VS = function (e, t, a) {
              var i = gE(qD, t);
              try {
                return RC(e, t, a);
              } catch (s) {
                if (cx() || (s !== null && typeof s == 'object' && typeof s.then == 'function'))
                  throw s;
                if (
                  (Dh(),
                  M1(),
                  _C(e, t),
                  gE(t, i),
                  t.mode & we && Jg(t),
                  rl(null, RC, null, e, t, a),
                  Km())
                ) {
                  var u = Uf();
                  typeof u == 'object' &&
                    u !== null &&
                    u._suppressLogging &&
                    typeof s == 'object' &&
                    s !== null &&
                    !s._suppressLogging &&
                    (s._suppressLogging = !0);
                }
                throw s;
              }
            };
          }
          var fE = !1,
            BS;
          BS = /* @__PURE__ */ new Set();
          function ZD(e) {
            if (kr && !Qx())
              switch (e.tag) {
                case oe:
                case Q:
                case je: {
                  var t = (At && Ue(At)) || 'Unknown',
                    a = t;
                  if (!BS.has(a)) {
                    BS.add(a);
                    var i = Ue(e) || 'Unknown';
                    g(
                      'Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render',
                      i,
                      t,
                      t,
                    );
                  }
                  break;
                }
                case G: {
                  fE ||
                    (g(
                      'Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.',
                    ),
                    (fE = !0));
                  break;
                }
              }
          }
          function hp(e, t) {
            if (on) {
              var a = e.memoizedUpdaters;
              a.forEach(function (i) {
                ad(e, i, t);
              });
            }
          }
          var jS = {};
          function PS(e, t) {
            {
              var a = ai.current;
              return a !== null ? (a.push(t), jS) : Ms(e, t);
            }
          }
          function dE(e) {
            if (e !== jS) return yv(e);
          }
          function pE() {
            return ai.current !== null;
          }
          function JD(e) {
            {
              if (e.mode & Be) {
                if (!$C()) return;
              } else if (!CD() || We !== vn || (e.tag !== oe && e.tag !== Q && e.tag !== je))
                return;
              if (ai.current === null) {
                var t = Vt;
                try {
                  ut(e),
                    g(
                      `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`,
                      Ue(e),
                    );
                } finally {
                  t ? ut(e) : Qt();
                }
              }
            }
          }
          function ek(e) {
            e.tag !== bu &&
              $C() &&
              ai.current === null &&
              g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

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
          var ka = null,
            Kc = null,
            tk = function (e) {
              ka = e;
            };
          function qc(e) {
            {
              if (ka === null) return e;
              var t = ka(e);
              return t === void 0 ? e : t.current;
            }
          }
          function YS(e) {
            return qc(e);
          }
          function $S(e) {
            {
              if (ka === null) return e;
              var t = ka(e);
              if (t === void 0) {
                if (e != null && typeof e.render == 'function') {
                  var a = qc(e.render);
                  if (e.render !== a) {
                    var i = {
                      $$typeof: Pl,
                      render: a,
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
              if (ka === null) return !1;
              var a = e.elementType,
                i = t.type,
                u = !1,
                s = typeof i == 'object' && i !== null ? i.$$typeof : null;
              switch (e.tag) {
                case G: {
                  typeof i == 'function' && (u = !0);
                  break;
                }
                case oe: {
                  (typeof i == 'function' || s === On) && (u = !0);
                  break;
                }
                case Q: {
                  (s === Pl || s === On) && (u = !0);
                  break;
                }
                case nt:
                case je: {
                  (s === Yl || s === On) && (u = !0);
                  break;
                }
                default:
                  return !1;
              }
              if (u) {
                var f = ka(a);
                if (f !== void 0 && f === ka(i)) return !0;
              }
              return !1;
            }
          }
          function hE(e) {
            {
              if (ka === null || typeof WeakSet != 'function') return;
              Kc === null && (Kc = /* @__PURE__ */ new WeakSet()), Kc.add(e);
            }
          }
          var nk = function (e, t) {
              {
                if (ka === null) return;
                var a = t.staleFamilies,
                  i = t.updatedFamilies;
                Ul(),
                  zl(function () {
                    QS(e.current, i, a);
                  });
              }
            },
            rk = function (e, t) {
              {
                if (e.context !== ua) return;
                Ul(),
                  zl(function () {
                    yp(t, e, null, null);
                  });
              }
            };
          function QS(e, t, a) {
            {
              var i = e.alternate,
                u = e.child,
                s = e.sibling,
                f = e.tag,
                p = e.type,
                v = null;
              switch (f) {
                case oe:
                case je:
                case G:
                  v = p;
                  break;
                case Q:
                  v = p.render;
                  break;
              }
              if (ka === null)
                throw new Error('Expected resolveFamily to be set during hot reload.');
              var m = !1,
                y = !1;
              if (v !== null) {
                var R = ka(v);
                R !== void 0 && (a.has(R) ? (y = !0) : t.has(R) && (f === G ? (y = !0) : (m = !0)));
              }
              if (
                (Kc !== null && (Kc.has(e) || (i !== null && Kc.has(i))) && (y = !0),
                y && (e._debugNeedsRemount = !0),
                y || m)
              ) {
                var E = Pr(e, ke);
                E !== null && yn(E, e, ke, pt);
              }
              u !== null && !y && QS(u, t, a), s !== null && QS(s, t, a);
            }
          }
          var ak = function (e, t) {
            {
              var a = /* @__PURE__ */ new Set(),
                i = new Set(
                  t.map(function (u) {
                    return u.current;
                  }),
                );
              return IS(e.current, i, a), a;
            }
          };
          function IS(e, t, a) {
            {
              var i = e.child,
                u = e.sibling,
                s = e.tag,
                f = e.type,
                p = null;
              switch (s) {
                case oe:
                case je:
                case G:
                  p = f;
                  break;
                case Q:
                  p = f.render;
                  break;
              }
              var v = !1;
              p !== null && t.has(p) && (v = !0),
                v ? ik(e, a) : i !== null && IS(i, t, a),
                u !== null && IS(u, t, a);
            }
          }
          function ik(e, t) {
            {
              var a = lk(e, t);
              if (a) return;
              for (var i = e; ; ) {
                switch (i.tag) {
                  case K:
                    t.add(i.stateNode);
                    return;
                  case P:
                    t.add(i.stateNode.containerInfo);
                    return;
                  case F:
                    t.add(i.stateNode.containerInfo);
                    return;
                }
                if (i.return === null) throw new Error('Expected to reach root first.');
                i = i.return;
              }
            }
          }
          function lk(e, t) {
            for (var a = e, i = !1; ; ) {
              if (a.tag === K) (i = !0), t.add(a.stateNode);
              else if (a.child !== null) {
                (a.child.return = a), (a = a.child);
                continue;
              }
              if (a === e) return i;
              for (; a.sibling === null; ) {
                if (a.return === null || a.return === e) return i;
                a = a.return;
              }
              (a.sibling.return = a.return), (a = a.sibling);
            }
            return !1;
          }
          var GS;
          {
            GS = !1;
            try {
              var mE = Object.preventExtensions({});
            } catch {
              GS = !0;
            }
          }
          function uk(e, t, a, i) {
            (this.tag = e),
              (this.key = a),
              (this.elementType = null),
              (this.type = null),
              (this.stateNode = null),
              (this.return = null),
              (this.child = null),
              (this.sibling = null),
              (this.index = 0),
              (this.ref = null),
              (this.pendingProps = t),
              (this.memoizedProps = null),
              (this.updateQueue = null),
              (this.memoizedState = null),
              (this.dependencies = null),
              (this.mode = i),
              (this.flags = Ce),
              (this.subtreeFlags = Ce),
              (this.deletions = null),
              (this.lanes = A),
              (this.childLanes = A),
              (this.alternate = null),
              (this.actualDuration = Number.NaN),
              (this.actualStartTime = Number.NaN),
              (this.selfBaseDuration = Number.NaN),
              (this.treeBaseDuration = Number.NaN),
              (this.actualDuration = 0),
              (this.actualStartTime = -1),
              (this.selfBaseDuration = 0),
              (this.treeBaseDuration = 0),
              (this._debugSource = null),
              (this._debugOwner = null),
              (this._debugNeedsRemount = !1),
              (this._debugHookTypes = null),
              !GS &&
                typeof Object.preventExtensions == 'function' &&
                Object.preventExtensions(this);
          }
          var oa = function (e, t, a, i) {
            return new uk(e, t, a, i);
          };
          function WS(e) {
            var t = e.prototype;
            return !!(t && t.isReactComponent);
          }
          function ok(e) {
            return typeof e == 'function' && !WS(e) && e.defaultProps === void 0;
          }
          function sk(e) {
            if (typeof e == 'function') return WS(e) ? G : oe;
            if (e != null) {
              var t = e.$$typeof;
              if (t === Pl) return Q;
              if (t === Yl) return nt;
            }
            return _e;
          }
          function ts(e, t) {
            var a = e.alternate;
            a === null
              ? ((a = oa(e.tag, t, e.key, e.mode)),
                (a.elementType = e.elementType),
                (a.type = e.type),
                (a.stateNode = e.stateNode),
                (a._debugSource = e._debugSource),
                (a._debugOwner = e._debugOwner),
                (a._debugHookTypes = e._debugHookTypes),
                (a.alternate = e),
                (e.alternate = a))
              : ((a.pendingProps = t),
                (a.type = e.type),
                (a.flags = Ce),
                (a.subtreeFlags = Ce),
                (a.deletions = null),
                (a.actualDuration = 0),
                (a.actualStartTime = -1)),
              (a.flags = e.flags & un),
              (a.childLanes = e.childLanes),
              (a.lanes = e.lanes),
              (a.child = e.child),
              (a.memoizedProps = e.memoizedProps),
              (a.memoizedState = e.memoizedState),
              (a.updateQueue = e.updateQueue);
            var i = e.dependencies;
            switch (
              ((a.dependencies =
                i === null
                  ? null
                  : {
                      lanes: i.lanes,
                      firstContext: i.firstContext,
                    }),
              (a.sibling = e.sibling),
              (a.index = e.index),
              (a.ref = e.ref),
              (a.selfBaseDuration = e.selfBaseDuration),
              (a.treeBaseDuration = e.treeBaseDuration),
              (a._debugNeedsRemount = e._debugNeedsRemount),
              a.tag)
            ) {
              case _e:
              case oe:
              case je:
                a.type = qc(e.type);
                break;
              case G:
                a.type = YS(e.type);
                break;
              case Q:
                a.type = $S(e.type);
                break;
            }
            return a;
          }
          function ck(e, t) {
            e.flags &= un | ht;
            var a = e.alternate;
            if (a === null)
              (e.childLanes = A),
                (e.lanes = t),
                (e.child = null),
                (e.subtreeFlags = Ce),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                (e.dependencies = null),
                (e.stateNode = null),
                (e.selfBaseDuration = 0),
                (e.treeBaseDuration = 0);
            else {
              (e.childLanes = a.childLanes),
                (e.lanes = a.lanes),
                (e.child = a.child),
                (e.subtreeFlags = Ce),
                (e.deletions = null),
                (e.memoizedProps = a.memoizedProps),
                (e.memoizedState = a.memoizedState),
                (e.updateQueue = a.updateQueue),
                (e.type = a.type);
              var i = a.dependencies;
              (e.dependencies =
                i === null
                  ? null
                  : {
                      lanes: i.lanes,
                      firstContext: i.firstContext,
                    }),
                (e.selfBaseDuration = a.selfBaseDuration),
                (e.treeBaseDuration = a.treeBaseDuration);
            }
            return e;
          }
          function fk(e, t, a) {
            var i;
            return (
              e === gh ? ((i = Be), t === !0 && ((i |= Rt), (i |= Ur))) : (i = xe),
              on && (i |= we),
              oa(F, null, null, i)
            );
          }
          function XS(e, t, a, i, u, s) {
            var f = _e,
              p = e;
            if (typeof e == 'function') WS(e) ? ((f = G), (p = YS(p))) : (p = qc(p));
            else if (typeof e == 'string') f = K;
            else
              e: switch (e) {
                case Oa:
                  return ju(a.children, u, s, t);
                case jl:
                  (f = Ve), (u |= Rt), (u & Be) !== xe && (u |= Ur);
                  break;
                case Qu:
                  return dk(a, u, s, t);
                case pa:
                  return pk(a, u, s, t);
                case Iu:
                  return vk(a, u, s, t);
                case nf:
                  return yE(a, u, s, t);
                case Dp:
                case xp:
                case bm:
                case _m:
                case wp:
                default: {
                  if (typeof e == 'object' && e !== null)
                    switch (e.$$typeof) {
                      case ef:
                        f = V;
                        break e;
                      case tf:
                        f = re;
                        break e;
                      case Pl:
                        (f = Q), (p = $S(p));
                        break e;
                      case Yl:
                        f = nt;
                        break e;
                      case On:
                        (f = bn), (p = null);
                        break e;
                    }
                  var v = '';
                  {
                    (e === void 0 ||
                      (typeof e == 'object' && e !== null && Object.keys(e).length === 0)) &&
                      (v +=
                        " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                    var m = i ? Ue(i) : null;
                    m &&
                      (v +=
                        `

Check the render method of \`` +
                        m +
                        '`.');
                  }
                  throw new Error(
                    'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) ' +
                      ('but got: ' + (e == null ? e : typeof e) + '.' + v),
                  );
                }
              }
            var y = oa(f, a, t, u);
            return (y.elementType = e), (y.type = p), (y.lanes = s), (y._debugOwner = i), y;
          }
          function KS(e, t, a) {
            var i = null;
            i = e._owner;
            var u = e.type,
              s = e.key,
              f = e.props,
              p = XS(u, s, f, i, t, a);
            return (p._debugSource = e._source), (p._debugOwner = e._owner), p;
          }
          function ju(e, t, a, i) {
            var u = oa(De, e, i, t);
            return (u.lanes = a), u;
          }
          function dk(e, t, a, i) {
            typeof e.id != 'string' &&
              g(
                'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
                typeof e.id,
              );
            var u = oa(ge, e, i, t | we);
            return (
              (u.elementType = Qu),
              (u.lanes = a),
              (u.stateNode = {
                effectDuration: 0,
                passiveEffectDuration: 0,
              }),
              u
            );
          }
          function pk(e, t, a, i) {
            var u = oa(Te, e, i, t);
            return (u.elementType = pa), (u.lanes = a), u;
          }
          function vk(e, t, a, i) {
            var u = oa(vt, e, i, t);
            return (u.elementType = Iu), (u.lanes = a), u;
          }
          function yE(e, t, a, i) {
            var u = oa(Ie, e, i, t);
            (u.elementType = nf), (u.lanes = a);
            var s = {
              isHidden: !1,
            };
            return (u.stateNode = s), u;
          }
          function qS(e, t, a) {
            var i = oa(me, e, null, t);
            return (i.lanes = a), i;
          }
          function hk() {
            var e = oa(K, null, null, xe);
            return (e.elementType = 'DELETED'), e;
          }
          function mk(e) {
            var t = oa(Ht, null, null, xe);
            return (t.stateNode = e), t;
          }
          function ZS(e, t, a) {
            var i = e.children !== null ? e.children : [],
              u = oa(P, i, e.key, t);
            return (
              (u.lanes = a),
              (u.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                // Used by persistent updates
                implementation: e.implementation,
              }),
              u
            );
          }
          function gE(e, t) {
            return (
              e === null && (e = oa(_e, null, null, xe)),
              (e.tag = t.tag),
              (e.key = t.key),
              (e.elementType = t.elementType),
              (e.type = t.type),
              (e.stateNode = t.stateNode),
              (e.return = t.return),
              (e.child = t.child),
              (e.sibling = t.sibling),
              (e.index = t.index),
              (e.ref = t.ref),
              (e.pendingProps = t.pendingProps),
              (e.memoizedProps = t.memoizedProps),
              (e.updateQueue = t.updateQueue),
              (e.memoizedState = t.memoizedState),
              (e.dependencies = t.dependencies),
              (e.mode = t.mode),
              (e.flags = t.flags),
              (e.subtreeFlags = t.subtreeFlags),
              (e.deletions = t.deletions),
              (e.lanes = t.lanes),
              (e.childLanes = t.childLanes),
              (e.alternate = t.alternate),
              (e.actualDuration = t.actualDuration),
              (e.actualStartTime = t.actualStartTime),
              (e.selfBaseDuration = t.selfBaseDuration),
              (e.treeBaseDuration = t.treeBaseDuration),
              (e._debugSource = t._debugSource),
              (e._debugOwner = t._debugOwner),
              (e._debugNeedsRemount = t._debugNeedsRemount),
              (e._debugHookTypes = t._debugHookTypes),
              e
            );
          }
          function yk(e, t, a, i, u) {
            (this.tag = t),
              (this.containerInfo = e),
              (this.pendingChildren = null),
              (this.current = null),
              (this.pingCache = null),
              (this.finishedWork = null),
              (this.timeoutHandle = Ny),
              (this.context = null),
              (this.pendingContext = null),
              (this.callbackNode = null),
              (this.callbackPriority = Ge),
              (this.eventTimes = ic(A)),
              (this.expirationTimes = ic(pt)),
              (this.pendingLanes = A),
              (this.suspendedLanes = A),
              (this.pingedLanes = A),
              (this.expiredLanes = A),
              (this.mutableReadLanes = A),
              (this.finishedLanes = A),
              (this.entangledLanes = A),
              (this.entanglements = ic(A)),
              (this.identifierPrefix = i),
              (this.onRecoverableError = u),
              (this.mutableSourceEagerHydrationData = null),
              (this.effectDuration = 0),
              (this.passiveEffectDuration = 0);
            {
              this.memoizedUpdaters = /* @__PURE__ */ new Set();
              for (var s = (this.pendingUpdatersLaneMap = []), f = 0; f < yt; f++)
                s.push(/* @__PURE__ */ new Set());
            }
            switch (t) {
              case gh:
                this._debugRootType = a ? 'hydrateRoot()' : 'createRoot()';
                break;
              case bu:
                this._debugRootType = a ? 'hydrate()' : 'render()';
                break;
            }
          }
          function SE(e, t, a, i, u, s, f, p, v, m) {
            var y = new yk(e, t, a, p, v),
              R = fk(t, s);
            (y.current = R), (R.stateNode = y);
            {
              var E = {
                element: i,
                isDehydrated: a,
                cache: null,
                // not enabled yet
                transitions: null,
                pendingSuspenseBoundaries: null,
              };
              R.memoizedState = E;
            }
            return lg(R), y;
          }
          var JS = '18.2.0';
          function gk(e, t, a) {
            var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
            return (
              Vl(i),
              {
                // This tag allow us to uniquely identify this as a React Portal
                $$typeof: Zr,
                key: i == null ? null : '' + i,
                children: e,
                containerInfo: t,
                implementation: a,
              }
            );
          }
          var e0, t0;
          (e0 = !1), (t0 = {});
          function CE(e) {
            if (!e) return ua;
            var t = Or(e),
              a = tx(t);
            if (t.tag === G) {
              var i = t.type;
              if (Ai(i)) return I0(t, i, a);
            }
            return a;
          }
          function Sk(e, t) {
            {
              var a = Or(e);
              if (a === void 0) {
                if (typeof e.render == 'function')
                  throw new Error('Unable to find node on an unmounted component.');
                var i = Object.keys(e).join(',');
                throw new Error('Argument appears to not be a ReactComponent. Keys: ' + i);
              }
              var u = zr(a);
              if (u === null) return null;
              if (u.mode & Rt) {
                var s = Ue(a) || 'Component';
                if (!t0[s]) {
                  t0[s] = !0;
                  var f = Vt;
                  try {
                    ut(u),
                      a.mode & Rt
                        ? g(
                            '%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node',
                            t,
                            t,
                            s,
                          )
                        : g(
                            '%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node',
                            t,
                            t,
                            s,
                          );
                  } finally {
                    f ? ut(f) : Qt();
                  }
                }
              }
              return u.stateNode;
            }
          }
          function EE(e, t, a, i, u, s, f, p) {
            var v = !1,
              m = null;
            return SE(e, t, v, m, a, i, u, s, f);
          }
          function TE(e, t, a, i, u, s, f, p, v, m) {
            var y = !0,
              R = SE(a, i, y, e, u, s, f, p, v);
            R.context = CE(null);
            var E = R.current,
              _ = gr(),
              O = Vu(E),
              z = Ol(_, O);
            return (z.callback = t ?? null), Mu(E, z, O), DD(R, O, _), R;
          }
          function yp(e, t, a, i) {
            Sv(t, e);
            var u = t.current,
              s = gr(),
              f = Vu(u);
            ll(f);
            var p = CE(a);
            t.context === null ? (t.context = p) : (t.pendingContext = p),
              kr &&
                Vt !== null &&
                !e0 &&
                ((e0 = !0),
                g(
                  `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
                  Ue(Vt) || 'Unknown',
                ));
            var v = Ol(s, f);
            (v.payload = {
              element: e,
            }),
              (i = i === void 0 ? null : i),
              i !== null &&
                (typeof i != 'function' &&
                  g(
                    'render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
                    i,
                  ),
                (v.callback = i));
            var m = Mu(u, v, f);
            return m !== null && (yn(m, u, f, s), Mh(m, u, f)), f;
          }
          function Tm(e) {
            var t = e.current;
            if (!t.child) return null;
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
                  var a = Jm(t);
                  OD(t, a);
                }
                break;
              }
              case Te: {
                zl(function () {
                  var u = Pr(e, ke);
                  if (u !== null) {
                    var s = gr();
                    yn(u, e, ke, s);
                  }
                });
                var i = ke;
                n0(e, i);
                break;
              }
            }
          }
          function RE(e, t) {
            var a = e.memoizedState;
            a !== null && a.dehydrated !== null && (a.retryLane = Mv(a.retryLane, t));
          }
          function n0(e, t) {
            RE(e, t);
            var a = e.alternate;
            a && RE(a, t);
          }
          function Ek(e) {
            if (e.tag === Te) {
              var t = lu,
                a = Pr(e, t);
              if (a !== null) {
                var i = gr();
                yn(a, e, t, i);
              }
              n0(e, t);
            }
          }
          function Tk(e) {
            if (e.tag === Te) {
              var t = Vu(e),
                a = Pr(e, t);
              if (a !== null) {
                var i = gr();
                yn(a, e, t, i);
              }
              n0(e, t);
            }
          }
          function xE(e) {
            var t = mv(e);
            return t === null ? null : t.stateNode;
          }
          var wE = function (e) {
            return null;
          };
          function Rk(e) {
            return wE(e);
          }
          var DE = function (e) {
            return !1;
          };
          function xk(e) {
            return DE(e);
          }
          var kE = null,
            bE = null,
            _E = null,
            OE = null,
            ME = null,
            LE = null,
            NE = null,
            zE = null,
            UE = null;
          {
            var AE = function (e, t, a) {
                var i = t[a],
                  u = Zt(e) ? e.slice() : Ye({}, e);
                return a + 1 === t.length
                  ? (Zt(u) ? u.splice(i, 1) : delete u[i], u)
                  : ((u[i] = AE(e[i], t, a + 1)), u);
              },
              HE = function (e, t) {
                return AE(e, t, 0);
              },
              FE = function (e, t, a, i) {
                var u = t[i],
                  s = Zt(e) ? e.slice() : Ye({}, e);
                if (i + 1 === t.length) {
                  var f = a[i];
                  (s[f] = s[u]), Zt(s) ? s.splice(u, 1) : delete s[u];
                } else
                  s[u] = FE(
                    // $FlowFixMe number or string is fine here
                    e[u],
                    t,
                    a,
                    i + 1,
                  );
                return s;
              },
              VE = function (e, t, a) {
                if (t.length !== a.length) {
                  se('copyWithRename() expects paths of the same length');
                  return;
                } else
                  for (var i = 0; i < a.length - 1; i++)
                    if (t[i] !== a[i]) {
                      se(
                        'copyWithRename() expects paths to be the same except for the deepest key',
                      );
                      return;
                    }
                return FE(e, t, a, 0);
              },
              BE = function (e, t, a, i) {
                if (a >= t.length) return i;
                var u = t[a],
                  s = Zt(e) ? e.slice() : Ye({}, e);
                return (s[u] = BE(e[u], t, a + 1, i)), s;
              },
              jE = function (e, t, a) {
                return BE(e, t, 0, a);
              },
              r0 = function (e, t) {
                for (var a = e.memoizedState; a !== null && t > 0; ) (a = a.next), t--;
                return a;
              };
            (kE = function (e, t, a, i) {
              var u = r0(e, t);
              if (u !== null) {
                var s = jE(u.memoizedState, a, i);
                (u.memoizedState = s),
                  (u.baseState = s),
                  (e.memoizedProps = Ye({}, e.memoizedProps));
                var f = Pr(e, ke);
                f !== null && yn(f, e, ke, pt);
              }
            }),
              (bE = function (e, t, a) {
                var i = r0(e, t);
                if (i !== null) {
                  var u = HE(i.memoizedState, a);
                  (i.memoizedState = u),
                    (i.baseState = u),
                    (e.memoizedProps = Ye({}, e.memoizedProps));
                  var s = Pr(e, ke);
                  s !== null && yn(s, e, ke, pt);
                }
              }),
              (_E = function (e, t, a, i) {
                var u = r0(e, t);
                if (u !== null) {
                  var s = VE(u.memoizedState, a, i);
                  (u.memoizedState = s),
                    (u.baseState = s),
                    (e.memoizedProps = Ye({}, e.memoizedProps));
                  var f = Pr(e, ke);
                  f !== null && yn(f, e, ke, pt);
                }
              }),
              (OE = function (e, t, a) {
                (e.pendingProps = jE(e.memoizedProps, t, a)),
                  e.alternate && (e.alternate.pendingProps = e.pendingProps);
                var i = Pr(e, ke);
                i !== null && yn(i, e, ke, pt);
              }),
              (ME = function (e, t) {
                (e.pendingProps = HE(e.memoizedProps, t)),
                  e.alternate && (e.alternate.pendingProps = e.pendingProps);
                var a = Pr(e, ke);
                a !== null && yn(a, e, ke, pt);
              }),
              (LE = function (e, t, a) {
                (e.pendingProps = VE(e.memoizedProps, t, a)),
                  e.alternate && (e.alternate.pendingProps = e.pendingProps);
                var i = Pr(e, ke);
                i !== null && yn(i, e, ke, pt);
              }),
              (NE = function (e) {
                var t = Pr(e, ke);
                t !== null && yn(t, e, ke, pt);
              }),
              (zE = function (e) {
                wE = e;
              }),
              (UE = function (e) {
                DE = e;
              });
          }
          function wk(e) {
            var t = zr(e);
            return t === null ? null : t.stateNode;
          }
          function Dk(e) {
            return null;
          }
          function kk() {
            return Vt;
          }
          function bk(e) {
            var t = e.findFiberByHostInstance,
              a = w.ReactCurrentDispatcher;
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
              reconcilerVersion: JS,
            });
          }
          var PE =
            typeof reportError == 'function'
              ? // In modern browsers, reportError will dispatch an error event,
                // emulating an uncaught JavaScript error.
                reportError
              : function (e) {
                  console.error(e);
                };
          function a0(e) {
            this._internalRoot = e;
          }
          (Rm.prototype.render = a0.prototype.render =
            function (e) {
              var t = this._internalRoot;
              if (t === null) throw new Error('Cannot update an unmounted root.');
              {
                typeof arguments[1] == 'function'
                  ? g(
                      'render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().',
                    )
                  : xm(arguments[1])
                    ? g(
                        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.",
                      )
                    : typeof arguments[1] < 'u' &&
                      g(
                        'You passed a second argument to root.render(...) but it only accepts one argument.',
                      );
                var a = t.containerInfo;
                if (a.nodeType !== Bt) {
                  var i = xE(t.current);
                  i &&
                    i.parentNode !== a &&
                    g(
                      "render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.",
                    );
                }
              }
              yp(e, t, null, null);
            }),
            (Rm.prototype.unmount = a0.prototype.unmount =
              function () {
                typeof arguments[0] == 'function' &&
                  g(
                    'unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().',
                  );
                var e = this._internalRoot;
                if (e !== null) {
                  this._internalRoot = null;
                  var t = e.containerInfo;
                  eE() &&
                    g(
                      'Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition.',
                    ),
                    zl(function () {
                      yp(null, e, null, null);
                    }),
                    j0(t);
                }
              });
          function _k(e, t) {
            if (!xm(e)) throw new Error('createRoot(...): Target container is not a DOM element.');
            YE(e);
            var a = !1,
              i = !1,
              u = '',
              s = PE;
            t != null &&
              (t.hydrate
                ? se(
                    'hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.',
                  )
                : typeof t == 'object' &&
                  t !== null &&
                  t.$$typeof === Bl &&
                  g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),
              t.unstable_strictMode === !0 && (a = !0),
              t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
              t.onRecoverableError !== void 0 && (s = t.onRecoverableError),
              t.transitionCallbacks !== void 0 && t.transitionCallbacks);
            var f = EE(e, gh, null, a, i, u, s);
            fh(f.current, e);
            var p = e.nodeType === Bt ? e.parentNode : e;
            return wd(p), new a0(f);
          }
          function Rm(e) {
            this._internalRoot = e;
          }
          function Ok(e) {
            e && Vv(e);
          }
          Rm.prototype.unstable_scheduleHydration = Ok;
          function Mk(e, t, a) {
            if (!xm(e)) throw new Error('hydrateRoot(...): Target container is not a DOM element.');
            YE(e),
              t === void 0 &&
                g(
                  'Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)',
                );
            var i = a ?? null,
              u = (a != null && a.hydratedSources) || null,
              s = !1,
              f = !1,
              p = '',
              v = PE;
            a != null &&
              (a.unstable_strictMode === !0 && (s = !0),
              a.identifierPrefix !== void 0 && (p = a.identifierPrefix),
              a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
            var m = TE(t, null, e, gh, i, s, f, p, v);
            if ((fh(m.current, e), wd(e), u))
              for (var y = 0; y < u.length; y++) {
                var R = u[y];
                Vx(m, R);
              }
            return new Rm(m);
          }
          function xm(e) {
            return !!(e && (e.nodeType === In || e.nodeType === na || e.nodeType === qi || !lt));
          }
          function gp(e) {
            return !!(
              e &&
              (e.nodeType === In ||
                e.nodeType === na ||
                e.nodeType === qi ||
                (e.nodeType === Bt && e.nodeValue === ' react-mount-point-unstable '))
            );
          }
          function YE(e) {
            e.nodeType === In &&
              e.tagName &&
              e.tagName.toUpperCase() === 'BODY' &&
              g(
                'createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app.',
              ),
              Ad(e) &&
                (e._reactRootContainer
                  ? g(
                      'You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.',
                    )
                  : g(
                      'You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.',
                    ));
          }
          var Lk = w.ReactCurrentOwner,
            $E;
          $E = function (e) {
            if (e._reactRootContainer && e.nodeType !== Bt) {
              var t = xE(e._reactRootContainer.current);
              t &&
                t.parentNode !== e &&
                g(
                  'render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.',
                );
            }
            var a = !!e._reactRootContainer,
              i = i0(e),
              u = !!(i && Du(i));
            u &&
              !a &&
              g(
                'render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render.',
              ),
              e.nodeType === In &&
                e.tagName &&
                e.tagName.toUpperCase() === 'BODY' &&
                g(
                  'render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.',
                );
          };
          function i0(e) {
            return e ? (e.nodeType === na ? e.documentElement : e.firstChild) : null;
          }
          function QE() {}
          function Nk(e, t, a, i, u) {
            if (u) {
              if (typeof i == 'function') {
                var s = i;
                i = function () {
                  var E = Tm(f);
                  s.call(E);
                };
              }
              var f = TE(
                t,
                i,
                e,
                bu,
                null,
                // hydrationCallbacks
                !1,
                // isStrictMode
                !1,
                // concurrentUpdatesByDefaultOverride,
                '',
                // identifierPrefix
                QE,
              );
              (e._reactRootContainer = f), fh(f.current, e);
              var p = e.nodeType === Bt ? e.parentNode : e;
              return wd(p), zl(), f;
            } else {
              for (var v; (v = e.lastChild); ) e.removeChild(v);
              if (typeof i == 'function') {
                var m = i;
                i = function () {
                  var E = Tm(y);
                  m.call(E);
                };
              }
              var y = EE(
                e,
                bu,
                null,
                // hydrationCallbacks
                !1,
                // isStrictMode
                !1,
                // concurrentUpdatesByDefaultOverride,
                '',
                // identifierPrefix
                QE,
              );
              (e._reactRootContainer = y), fh(y.current, e);
              var R = e.nodeType === Bt ? e.parentNode : e;
              return (
                wd(R),
                zl(function () {
                  yp(t, y, a, i);
                }),
                y
              );
            }
          }
          function zk(e, t) {
            e !== null &&
              typeof e != 'function' &&
              g(
                '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
                t,
                e,
              );
          }
          function wm(e, t, a, i, u) {
            $E(a), zk(u === void 0 ? null : u, 'render');
            var s = a._reactRootContainer,
              f;
            if (!s) f = Nk(a, t, e, u, i);
            else {
              if (((f = s), typeof u == 'function')) {
                var p = u;
                u = function () {
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
                a ||
                  g(
                    '%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.',
                    ft(t.type) || 'A component',
                  ),
                  (t.stateNode._warnedAboutRefsInRender = !0);
              }
            }
            return e == null ? null : e.nodeType === In ? e : Sk(e, 'findDOMNode');
          }
          function Ak(e, t, a) {
            if (
              (g(
                "ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot",
              ),
              !gp(t))
            )
              throw new Error('Target container is not a DOM element.');
            {
              var i = Ad(t) && t._reactRootContainer === void 0;
              i &&
                g(
                  'You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?',
                );
            }
            return wm(null, e, t, !0, a);
          }
          function Hk(e, t, a) {
            if (
              (g(
                "ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot",
              ),
              !gp(t))
            )
              throw new Error('Target container is not a DOM element.');
            {
              var i = Ad(t) && t._reactRootContainer === void 0;
              i &&
                g(
                  'You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?',
                );
            }
            return wm(null, e, t, !1, a);
          }
          function Fk(e, t, a, i) {
            if (
              (g(
                "ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot",
              ),
              !gp(a))
            )
              throw new Error('Target container is not a DOM element.');
            if (e == null || !ho(e))
              throw new Error('parentComponent must be a valid React Component');
            return wm(e, t, a, !1, i);
          }
          function Vk(e) {
            if (!gp(e))
              throw new Error(
                'unmountComponentAtNode(...): Target container is not a DOM element.',
              );
            {
              var t = Ad(e) && e._reactRootContainer === void 0;
              t &&
                g(
                  'You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?',
                );
            }
            if (e._reactRootContainer) {
              {
                var a = i0(e),
                  i = a && !Du(a);
                i &&
                  g(
                    "unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.",
                  );
              }
              return (
                zl(function () {
                  wm(null, null, e, !1, function () {
                    (e._reactRootContainer = null), j0(e);
                  });
                }),
                !0
              );
            } else {
              {
                var u = i0(e),
                  s = !!(u && Du(u)),
                  f = e.nodeType === In && gp(e.parentNode) && !!e.parentNode._reactRootContainer;
                s &&
                  g(
                    "unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",
                    f
                      ? 'You may have accidentally passed in a React root node instead of its container.'
                      : 'Instead, have the parent component update its state and rerender in order to remove this component.',
                  );
              }
              return !1;
            }
          }
          ue(Ck),
            Nv(Ek),
            Oo(Tk),
            ud(Hr),
            Uv(ko),
            (typeof Map != 'function' || // $FlowIssue Flow incorrectly thinks Map has no prototype
              Map.prototype == null ||
              typeof Map.prototype.forEach != 'function' ||
              typeof Set != 'function' || // $FlowIssue Flow incorrectly thinks Set has no prototype
              Set.prototype == null ||
              typeof Set.prototype.clear != 'function' ||
              typeof Set.prototype.forEach != 'function') &&
              g(
                'React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills',
              ),
            pv(PT),
            Ds(AS, MD, zl);
          function Bk(e, t) {
            var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            if (!xm(t)) throw new Error('Target container is not a DOM element.');
            return gk(e, t, null, a);
          }
          function jk(e, t, a, i) {
            return Fk(e, t, a, i);
          }
          var l0 = {
            usingClientEntryPoint: !1,
            // Keep in sync with ReactTestUtils.js.
            // This is an array for better minification.
            Events: [Du, bc, dh, ws, fo, AS],
          };
          function Pk(e, t) {
            return (
              l0.usingClientEntryPoint ||
                g(
                  'You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".',
                ),
              _k(e, t)
            );
          }
          function Yk(e, t, a) {
            return (
              l0.usingClientEntryPoint ||
                g(
                  'You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".',
                ),
              Mk(e, t, a)
            );
          }
          function $k(e) {
            return (
              eE() &&
                g(
                  'flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.',
                ),
              zl(e)
            );
          }
          var Qk = bk({
            findFiberByHostInstance: Bo,
            bundleType: 1,
            version: JS,
            rendererPackageName: 'react-dom',
          });
          if (
            !Qk &&
            gn &&
            window.top === window.self &&
            ((navigator.userAgent.indexOf('Chrome') > -1 &&
              navigator.userAgent.indexOf('Edge') === -1) ||
              navigator.userAgent.indexOf('Firefox') > -1)
          ) {
            var IE = window.location.protocol;
            /^(https?|file):$/.test(IE) &&
              console.info(
                '%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools' +
                  (IE === 'file:'
                    ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq`
                    : ''),
                'font-weight:bold',
              );
          }
          (Ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l0),
            (Ir.createPortal = Bk),
            (Ir.createRoot = Pk),
            (Ir.findDOMNode = Uk),
            (Ir.flushSync = $k),
            (Ir.hydrate = Ak),
            (Ir.hydrateRoot = Yk),
            (Ir.render = Hk),
            (Ir.unmountComponentAtNode = Vk),
            (Ir.unstable_batchedUpdates = AS),
            (Ir.unstable_renderSubtreeIntoContainer = jk),
            (Ir.version = JS),
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == 'function' &&
              __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        })()),
    Ir
  );
}
var Gr = {};
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
  if (KE) return Gr;
  KE = 1;
  var L = qE,
    N = Cp;
  function w(n) {
    for (
      var r = 'https://reactjs.org/docs/error-decoder.html?invariant=' + n, l = 1;
      l < arguments.length;
      l++
    )
      r += '&args[]=' + encodeURIComponent(arguments[l]);
    return (
      'Minified React error #' +
      n +
      '; visit ' +
      r +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var Z = /* @__PURE__ */ new Set(),
    he = {};
  function se(n, r) {
    g(n, r), g(n + 'Capture', r);
  }
  function g(n, r) {
    for (he[n] = r, n = 0; n < r.length; n++) Z.add(r[n]);
  }
  var Fe = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    oe = Object.prototype.hasOwnProperty,
    G =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    _e = {},
    F = {};
  function P(n) {
    return oe.call(F, n) ? !0 : oe.call(_e, n) ? !1 : G.test(n) ? (F[n] = !0) : ((_e[n] = !0), !1);
  }
  function K(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return o
          ? !1
          : l !== null
            ? !l.acceptsBooleans
            : ((n = n.toLowerCase().slice(0, 5)), n !== 'data-' && n !== 'aria-');
      default:
        return !1;
    }
  }
  function me(n, r, l, o) {
    if (r === null || typeof r > 'u' || K(n, r, l, o)) return !0;
    if (o) return !1;
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
  function De(n, r, l, o, c, d, h) {
    (this.acceptsBooleans = r === 2 || r === 3 || r === 4),
      (this.attributeName = o),
      (this.attributeNamespace = c),
      (this.mustUseProperty = l),
      (this.propertyName = n),
      (this.type = r),
      (this.sanitizeURL = d),
      (this.removeEmptyString = h);
  }
  var Ve = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (n) {
      Ve[n] = new De(n, 0, !1, n, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (n) {
      var r = n[0];
      Ve[r] = new De(r, 1, !1, n[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (n) {
      Ve[n] = new De(n, 2, !1, n.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (n) {
        Ve[n] = new De(n, 2, !1, n, null, !1, !1);
      },
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (n) {
        Ve[n] = new De(n, 3, !1, n.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (n) {
      Ve[n] = new De(n, 3, !0, n, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (n) {
      Ve[n] = new De(n, 4, !1, n, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (n) {
      Ve[n] = new De(n, 6, !1, n, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (n) {
      Ve[n] = new De(n, 5, !1, n.toLowerCase(), null, !1, !1);
    });
  var re = /[\-:]([a-z])/g;
  function V(n) {
    return n[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (n) {
      var r = n.replace(re, V);
      Ve[r] = new De(r, 1, !1, n, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (n) {
        var r = n.replace(re, V);
        Ve[r] = new De(r, 1, !1, n, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (n) {
      var r = n.replace(re, V);
      Ve[r] = new De(r, 1, !1, n, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (n) {
      Ve[n] = new De(n, 1, !1, n.toLowerCase(), null, !1, !1);
    }),
    (Ve.xlinkHref = new De(
      'xlinkHref',
      1,
      !1,
      'xlink:href',
      'http://www.w3.org/1999/xlink',
      !0,
      !1,
    )),
    ['src', 'href', 'action', 'formAction'].forEach(function (n) {
      Ve[n] = new De(n, 1, !1, n.toLowerCase(), null, !0, !0);
    });
  function Q(n, r, l, o) {
    var c = Ve.hasOwnProperty(r) ? Ve[r] : null;
    (c !== null
      ? c.type !== 0
      : o || !(2 < r.length) || (r[0] !== 'o' && r[0] !== 'O') || (r[1] !== 'n' && r[1] !== 'N')) &&
      (me(r, l, c, o) && (l = null),
      o || c === null
        ? P(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, '' + l))
        : c.mustUseProperty
          ? (n[c.propertyName] = l === null ? (c.type === 3 ? !1 : '') : l)
          : ((r = c.attributeName),
            (o = c.attributeNamespace),
            l === null
              ? n.removeAttribute(r)
              : ((c = c.type),
                (l = c === 3 || (c === 4 && l === !0) ? '' : '' + l),
                o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ge = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Te = Symbol.for('react.element'),
    nt = Symbol.for('react.portal'),
    je = Symbol.for('react.fragment'),
    bn = Symbol.for('react.strict_mode'),
    lr = Symbol.for('react.profiler'),
    Ht = Symbol.for('react.provider'),
    vt = Symbol.for('react.context'),
    Pn = Symbol.for('react.forward_ref'),
    Ie = Symbol.for('react.suspense'),
    it = Symbol.for('react.suspense_list'),
    Er = Symbol.for('react.memo'),
    Dt = Symbol.for('react.lazy'),
    Tr = Symbol.for('react.offscreen'),
    q = Symbol.iterator;
  function be(n) {
    return n === null || typeof n != 'object'
      ? null
      : ((n = (q && n[q]) || n['@@iterator']), typeof n == 'function' ? n : null);
  }
  var le = Object.assign,
    rt;
  function lt(n) {
    if (rt === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        rt = (r && r[1]) || '';
      }
    return (
      `
` +
      rt +
      n
    );
  }
  var Yn = !1;
  function ur(n, r) {
    if (!n || Yn) return '';
    Yn = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (
          ((r = function () {
            throw Error();
          }),
          Object.defineProperty(r.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
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
      if (M && o && typeof M.stack == 'string') {
        for (
          var c = M.stack.split(`
`),
            d = o.stack.split(`
`),
            h = c.length - 1,
            S = d.length - 1;
          1 <= h && 0 <= S && c[h] !== d[S];

        )
          S--;
        for (; 1 <= h && 0 <= S; h--, S--)
          if (c[h] !== d[S]) {
            if (h !== 1 || S !== 1)
              do
                if ((h--, S--, 0 > S || c[h] !== d[S])) {
                  var C =
                    `
` + c[h].replace(' at new ', ' at ');
                  return (
                    n.displayName &&
                      C.includes('<anonymous>') &&
                      (C = C.replace('<anonymous>', n.displayName)),
                    C
                  );
                }
              while (1 <= h && 0 <= S);
            break;
          }
      }
    } finally {
      (Yn = !1), (Error.prepareStackTrace = l);
    }
    return (n = n ? n.displayName || n.name : '') ? lt(n) : '';
  }
  function ii(n) {
    switch (n.tag) {
      case 5:
        return lt(n.type);
      case 16:
        return lt('Lazy');
      case 13:
        return lt('Suspense');
      case 19:
        return lt('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (n = ur(n.type, !1)), n;
      case 11:
        return (n = ur(n.type.render, !1)), n;
      case 1:
        return (n = ur(n.type, !0)), n;
      default:
        return '';
    }
  }
  function _n(n) {
    if (n == null) return null;
    if (typeof n == 'function') return n.displayName || n.name || null;
    if (typeof n == 'string') return n;
    switch (n) {
      case je:
        return 'Fragment';
      case nt:
        return 'Portal';
      case lr:
        return 'Profiler';
      case bn:
        return 'StrictMode';
      case Ie:
        return 'Suspense';
      case it:
        return 'SuspenseList';
    }
    if (typeof n == 'object')
      switch (n.$$typeof) {
        case vt:
          return (n.displayName || 'Context') + '.Consumer';
        case Ht:
          return (n._context.displayName || 'Context') + '.Provider';
        case Pn:
          var r = n.render;
          return (
            (n = n.displayName),
            n ||
              ((n = r.displayName || r.name || ''),
              (n = n !== '' ? 'ForwardRef(' + n + ')' : 'ForwardRef')),
            n
          );
        case Er:
          return (r = n.displayName || null), r !== null ? r : _n(n.type) || 'Memo';
        case Dt:
          (r = n._payload), (n = n._init);
          try {
            return _n(n(r));
          } catch {}
      }
    return null;
  }
  function li(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (r.displayName || 'Context') + '.Consumer';
      case 10:
        return (r._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (n = r.render),
          (n = n.displayName || n.name || ''),
          r.displayName || (n !== '' ? 'ForwardRef(' + n + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return r;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return _n(r);
      case 8:
        return r === bn ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == 'function') return r.displayName || r.name || null;
        if (typeof r == 'string') return r;
    }
    return null;
  }
  function Wr(n) {
    switch (typeof n) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return n;
      case 'object':
        return n;
      default:
        return '';
    }
  }
  function ca(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === 'input' && (r === 'checkbox' || r === 'radio');
  }
  function Pu(n) {
    var r = ca(n) ? 'checked' : 'value',
      l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r),
      o = '' + n[r];
    if (
      !n.hasOwnProperty(r) &&
      typeof l < 'u' &&
      typeof l.get == 'function' &&
      typeof l.set == 'function'
    ) {
      var c = l.get,
        d = l.set;
      return (
        Object.defineProperty(n, r, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (h) {
            (o = '' + h), d.call(this, h);
          },
        }),
        Object.defineProperty(n, r, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (h) {
            o = '' + h;
          },
          stopTracking: function () {
            (n._valueTracker = null), delete n[r];
          },
        }
      );
    }
  }
  function Rr(n) {
    n._valueTracker || (n._valueTracker = Pu(n));
  }
  function ba(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(),
      o = '';
    return (
      n && (o = ca(n) ? (n.checked ? 'true' : 'false') : n.value),
      (n = o),
      n !== l ? (r.setValue(n), !0) : !1
    );
  }
  function gn(n) {
    if (((n = n || (typeof document < 'u' ? document : void 0)), typeof n > 'u')) return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function $n(n, r) {
    var l = r.checked;
    return le({}, r, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: l ?? n._wrapperState.initialChecked,
    });
  }
  function xr(n, r) {
    var l = r.defaultValue == null ? '' : r.defaultValue,
      o = r.checked != null ? r.checked : r.defaultChecked;
    (l = Wr(r.value != null ? r.value : l)),
      (n._wrapperState = {
        initialChecked: o,
        initialValue: l,
        controlled:
          r.type === 'checkbox' || r.type === 'radio' ? r.checked != null : r.value != null,
      });
  }
  function Xr(n, r) {
    (r = r.checked), r != null && Q(n, 'checked', r, !1);
  }
  function or(n, r) {
    Xr(n, r);
    var l = Wr(r.value),
      o = r.type;
    if (l != null)
      o === 'number'
        ? ((l === 0 && n.value === '') || n.value != l) && (n.value = '' + l)
        : n.value !== '' + l && (n.value = '' + l);
    else if (o === 'submit' || o === 'reset') {
      n.removeAttribute('value');
      return;
    }
    r.hasOwnProperty('value')
      ? Vl(n, r.type, l)
      : r.hasOwnProperty('defaultValue') && Vl(n, r.type, Wr(r.defaultValue)),
      r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function _a(n, r, l) {
    if (r.hasOwnProperty('value') || r.hasOwnProperty('defaultValue')) {
      var o = r.type;
      if (!((o !== 'submit' && o !== 'reset') || (r.value !== void 0 && r.value !== null))) return;
      (r = '' + n._wrapperState.initialValue),
        l || r === n.value || (n.value = r),
        (n.defaultValue = r);
    }
    (l = n.name),
      l !== '' && (n.name = ''),
      (n.defaultChecked = !!n._wrapperState.initialChecked),
      l !== '' && (n.name = l);
  }
  function Vl(n, r, l) {
    (r !== 'number' || gn(n.ownerDocument) !== n) &&
      (l == null
        ? (n.defaultValue = '' + n._wrapperState.initialValue)
        : n.defaultValue !== '' + l && (n.defaultValue = '' + l));
  }
  var Qi = Array.isArray;
  function ui(n, r, l, o) {
    if (((n = n.options), r)) {
      r = {};
      for (var c = 0; c < l.length; c++) r['$' + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        (c = r.hasOwnProperty('$' + n[l].value)),
          n[l].selected !== c && (n[l].selected = c),
          c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = '' + Wr(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          (n[c].selected = !0), o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ii(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(w(91));
    return le({}, r, {
      value: void 0,
      defaultValue: void 0,
      children: '' + n._wrapperState.initialValue,
    });
  }
  function Kr(n, r) {
    var l = r.value;
    if (l == null) {
      if (((l = r.children), (r = r.defaultValue), l != null)) {
        if (r != null) throw Error(w(92));
        if (Qi(l)) {
          if (1 < l.length) throw Error(w(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ''), (l = r);
    }
    n._wrapperState = { initialValue: Wr(l) };
  }
  function oi(n, r) {
    var l = Wr(r.value),
      o = Wr(r.defaultValue);
    l != null &&
      ((l = '' + l),
      l !== n.value && (n.value = l),
      r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)),
      o != null && (n.defaultValue = '' + o);
  }
  function fa(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== '' && r !== null && (n.value = r);
  }
  function si(n) {
    switch (n) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Qn(n, r) {
    return n == null || n === 'http://www.w3.org/1999/xhtml'
      ? si(r)
      : n === 'http://www.w3.org/2000/svg' && r === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : n;
  }
  var qr,
    Yu = (function (n) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (r, l, o, c) {
            MSApp.execUnsafeLocalFunction(function () {
              return n(r, l, o, c);
            });
          }
        : n;
    })(function (n, r) {
      if (n.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in n) n.innerHTML = r;
      else {
        for (
          qr = qr || document.createElement('div'),
            qr.innerHTML = '<svg>' + r.valueOf().toString() + '</svg>',
            r = qr.firstChild;
          n.firstChild;

        )
          n.removeChild(n.firstChild);
        for (; r.firstChild; ) n.appendChild(r.firstChild);
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
  var J = {
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
    Re = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(J).forEach(function (n) {
    Re.forEach(function (r) {
      (r = r + n.charAt(0).toUpperCase() + n.substring(1)), (J[r] = J[n]);
    });
  });
  function Pe(n, r, l) {
    return r == null || typeof r == 'boolean' || r === ''
      ? ''
      : l || typeof r != 'number' || r === 0 || (J.hasOwnProperty(n) && J[n])
        ? ('' + r).trim()
        : r + 'px';
  }
  function ct(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf('--') === 0,
          c = Pe(l, r[l], o);
        l === 'float' && (l = 'cssFloat'), o ? n.setProperty(l, c) : (n[l] = c);
      }
  }
  var Nt = le(
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
    },
  );
  function Sn(n, r) {
    if (r) {
      if (Nt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(w(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(w(60));
        if (
          typeof r.dangerouslySetInnerHTML != 'object' ||
          !('__html' in r.dangerouslySetInnerHTML)
        )
          throw Error(w(61));
      }
      if (r.style != null && typeof r.style != 'object') throw Error(w(62));
    }
  }
  function $t(n, r) {
    if (n.indexOf('-') === -1) return typeof r.is == 'string';
    switch (n) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var wr = null;
  function kt(n) {
    return (
      (n = n.target || n.srcElement || window),
      n.correspondingUseElement && (n = n.correspondingUseElement),
      n.nodeType === 3 ? n.parentNode : n
    );
  }
  var da = null,
    Ft = null,
    bt = null;
  function Ep(n) {
    if ((n = ho(n))) {
      if (typeof da != 'function') throw Error(w(280));
      var r = n.stateNode;
      r && ((r = Ce(r)), da(n.stateNode, n.type, r));
    }
  }
  function rs(n) {
    Ft ? (bt ? bt.push(n) : (bt = [n])) : (Ft = n);
  }
  function as() {
    if (Ft) {
      var n = Ft,
        r = bt;
      if (((bt = Ft = null), Ep(n), r)) for (n = 0; n < r.length; n++) Ep(r[n]);
    }
  }
  function Tp(n, r) {
    return n(r);
  }
  function Rp() {}
  var is = !1;
  function Jc(n, r, l) {
    if (is) return n(r, l);
    is = !0;
    try {
      return Tp(n, r, l);
    } finally {
      (is = !1), (Ft !== null || bt !== null) && (Rp(), as());
    }
  }
  function $u(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Ce(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (o = !o.disabled) ||
          ((n = n.type),
          (o = !(n === 'button' || n === 'input' || n === 'select' || n === 'textarea'))),
          (n = !o);
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != 'function') throw Error(w(231, r, typeof l));
    return l;
  }
  var ls = !1;
  if (Fe)
    try {
      var Gi = {};
      Object.defineProperty(Gi, 'passive', {
        get: function () {
          ls = !0;
        },
      }),
        window.addEventListener('test', Gi, Gi),
        window.removeEventListener('test', Gi, Gi);
    } catch {
      ls = !1;
    }
  function Bl(n, r, l, o, c, d, h, S, C) {
    var M = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, M);
    } catch (j) {
      this.onError(j);
    }
  }
  var Zr = !1,
    Oa = null,
    jl = !1,
    Qu = null,
    ef = {
      onError: function (n) {
        (Zr = !0), (Oa = n);
      },
    };
  function tf(n, r, l, o, c, d, h, S, C) {
    (Zr = !1), (Oa = null), Bl.apply(ef, arguments);
  }
  function Pl(n, r, l, o, c, d, h, S, C) {
    if ((tf.apply(this, arguments), Zr)) {
      if (Zr) {
        var M = Oa;
        (Zr = !1), (Oa = null);
      } else throw Error(w(198));
      jl || ((jl = !0), (Qu = M));
    }
  }
  function pa(n) {
    var r = n,
      l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do (r = n), r.flags & 4098 && (l = r.return), (n = r.return);
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Iu(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if ((r === null && ((n = n.alternate), n !== null && (r = n.memoizedState)), r !== null))
        return r.dehydrated;
    }
    return null;
  }
  function Yl(n) {
    if (pa(n) !== n) throw Error(w(188));
  }
  function On(n) {
    var r = n.alternate;
    if (!r) {
      if (((r = pa(n)), r === null)) throw Error(w(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (((o = c.return), o !== null)) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return Yl(c), n;
          if (d === o) return Yl(c), r;
          d = d.sibling;
        }
        throw Error(w(188));
      }
      if (l.return !== o.return) (l = c), (o = d);
      else {
        for (var h = !1, S = c.child; S; ) {
          if (S === l) {
            (h = !0), (l = c), (o = d);
            break;
          }
          if (S === o) {
            (h = !0), (o = c), (l = d);
            break;
          }
          S = S.sibling;
        }
        if (!h) {
          for (S = d.child; S; ) {
            if (S === l) {
              (h = !0), (l = d), (o = c);
              break;
            }
            if (S === o) {
              (h = !0), (o = d), (l = c);
              break;
            }
            S = S.sibling;
          }
          if (!h) throw Error(w(189));
        }
      }
      if (l.alternate !== o) throw Error(w(190));
    }
    if (l.tag !== 3) throw Error(w(188));
    return l.stateNode.current === l ? n : r;
  }
  function xp(n) {
    return (n = On(n)), n !== null ? wp(n) : null;
  }
  function wp(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = wp(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var nf = N.unstable_scheduleCallback,
    Dp = N.unstable_cancelCallback,
    bm = N.unstable_shouldYield,
    _m = N.unstable_requestPaint,
    _t = N.unstable_now,
    Om = N.unstable_getCurrentPriorityLevel,
    Ma = N.unstable_ImmediatePriority,
    Ye = N.unstable_UserBlockingPriority,
    fi = N.unstable_NormalPriority,
    kp = N.unstable_LowPriority,
    rf = N.unstable_IdlePriority,
    Gu = null,
    Jr = null;
  function bp(n) {
    if (Jr && typeof Jr.onCommitFiberRoot == 'function')
      try {
        Jr.onCommitFiberRoot(Gu, n, void 0, (n.current.flags & 128) === 128);
      } catch {}
  }
  var Dr = Math.clz32 ? Math.clz32 : Mm,
    _p = Math.log,
    Op = Math.LN2;
  function Mm(n) {
    return (n >>>= 0), n === 0 ? 32 : (31 - ((_p(n) / Op) | 0)) | 0;
  }
  var us = 64,
    $l = 4194304;
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
  function ea(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0,
      c = n.suspendedLanes,
      d = n.pingedLanes,
      h = l & 268435455;
    if (h !== 0) {
      var S = h & ~c;
      S !== 0 ? (o = Wi(S)) : ((d &= h), d !== 0 && (o = Wi(d)));
    } else (h = l & ~c), h !== 0 ? (o = Wi(h)) : d !== 0 && (o = Wi(d));
    if (o === 0) return 0;
    if (
      r !== 0 &&
      r !== o &&
      !(r & c) &&
      ((c = o & -o), (d = r & -r), c >= d || (c === 16 && (d & 4194240) !== 0))
    )
      return r;
    if ((o & 4 && (o |= l & 16), (r = n.entangledLanes), r !== 0))
      for (n = n.entanglements, r &= o; 0 < r; )
        (l = 31 - Dr(r)), (c = 1 << l), (o |= n[l]), (r &= ~c);
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
  function os(n, r) {
    for (
      var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes;
      0 < d;

    ) {
      var h = 31 - Dr(d),
        S = 1 << h,
        C = c[h];
      C === -1 ? (!(S & l) || S & o) && (c[h] = af(S, r)) : C <= r && (n.expiredLanes |= S),
        (d &= ~S);
    }
  }
  function lf(n) {
    return (n = n.pendingLanes & -1073741825), n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ss() {
    var n = us;
    return (us <<= 1), !(us & 4194240) && (us = 64), n;
  }
  function uf(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Xi(n, r, l) {
    (n.pendingLanes |= r),
      r !== 536870912 && ((n.suspendedLanes = 0), (n.pingedLanes = 0)),
      (n = n.eventTimes),
      (r = 31 - Dr(r)),
      (n[r] = l);
  }
  function Lm(n, r) {
    var l = n.pendingLanes & ~r;
    (n.pendingLanes = r),
      (n.suspendedLanes = 0),
      (n.pingedLanes = 0),
      (n.expiredLanes &= r),
      (n.mutableReadLanes &= r),
      (n.entangledLanes &= r),
      (r = n.entanglements);
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Dr(l),
        d = 1 << c;
      (r[c] = 0), (o[c] = -1), (n[c] = -1), (l &= ~d);
    }
  }
  function Wu(n, r) {
    var l = (n.entangledLanes |= r);
    for (n = n.entanglements; l; ) {
      var o = 31 - Dr(l),
        c = 1 << o;
      (c & r) | (n[o] & r) && (n[o] |= r), (l &= ~c);
    }
  }
  var at = 0;
  function of(n) {
    return (n &= -n), 1 < n ? (4 < n ? (n & 268435455 ? 16 : 536870912) : 4) : 1;
  }
  var Mp,
    cs,
    ft,
    Lp,
    sf,
    Ue = !1,
    Xu = [],
    Vt = null,
    kr = null,
    br = null,
    Ku = /* @__PURE__ */ new Map(),
    Qt = /* @__PURE__ */ new Map(),
    ut = [],
    Nm =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' ',
      );
  function ta(n, r) {
    switch (n) {
      case 'focusin':
      case 'focusout':
        Vt = null;
        break;
      case 'dragenter':
      case 'dragleave':
        kr = null;
        break;
      case 'mouseover':
      case 'mouseout':
        br = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Ku.delete(r.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Qt.delete(r.pointerId);
    }
  }
  function Cn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d
      ? ((n = {
          blockedOn: r,
          domEventName: l,
          eventSystemFlags: o,
          nativeEvent: d,
          targetContainers: [c],
        }),
        r !== null && ((r = ho(r)), r !== null && cs(r)),
        n)
      : ((n.eventSystemFlags |= o),
        (r = n.targetContainers),
        c !== null && r.indexOf(c) === -1 && r.push(c),
        n);
  }
  function di(n, r, l, o, c) {
    switch (r) {
      case 'focusin':
        return (Vt = Cn(Vt, n, r, l, o, c)), !0;
      case 'dragenter':
        return (kr = Cn(kr, n, r, l, o, c)), !0;
      case 'mouseover':
        return (br = Cn(br, n, r, l, o, c)), !0;
      case 'pointerover':
        var d = c.pointerId;
        return Ku.set(d, Cn(Ku.get(d) || null, n, r, l, o, c)), !0;
      case 'gotpointercapture':
        return (d = c.pointerId), Qt.set(d, Cn(Qt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Np(n) {
    var r = Or(n.target);
    if (r !== null) {
      var l = pa(r);
      if (l !== null) {
        if (((r = l.tag), r === 13)) {
          if (((r = Iu(l)), r !== null)) {
            (n.blockedOn = r),
              sf(n.priority, function () {
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
  function Ql(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ps(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        (wr = o), l.target.dispatchEvent(o), (wr = null);
      } else return (r = ho(l)), r !== null && cs(r), (n.blockedOn = l), !1;
      r.shift();
    }
    return !0;
  }
  function cf(n, r, l) {
    Ql(n) && l.delete(r);
  }
  function zp() {
    (Ue = !1),
      Vt !== null && Ql(Vt) && (Vt = null),
      kr !== null && Ql(kr) && (kr = null),
      br !== null && Ql(br) && (br = null),
      Ku.forEach(cf),
      Qt.forEach(cf);
  }
  function qu(n, r) {
    n.blockedOn === r &&
      ((n.blockedOn = null),
      Ue || ((Ue = !0), N.unstable_scheduleCallback(N.unstable_NormalPriority, zp)));
  }
  function Zu(n) {
    function r(c) {
      return qu(c, n);
    }
    if (0 < Xu.length) {
      qu(Xu[0], n);
      for (var l = 1; l < Xu.length; l++) {
        var o = Xu[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (
      Vt !== null && qu(Vt, n),
        kr !== null && qu(kr, n),
        br !== null && qu(br, n),
        Ku.forEach(r),
        Qt.forEach(r),
        l = 0;
      l < ut.length;
      l++
    )
      (o = ut[l]), o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < ut.length && ((l = ut[0]), l.blockedOn === null); )
      Np(l), l.blockedOn === null && ut.shift();
  }
  var Il = ge.ReactCurrentBatchConfig,
    Ki = !0;
  function Up(n, r, l, o) {
    var c = at,
      d = Il.transition;
    Il.transition = null;
    try {
      (at = 1), ds(n, r, l, o);
    } finally {
      (at = c), (Il.transition = d);
    }
  }
  function fs(n, r, l, o) {
    var c = at,
      d = Il.transition;
    Il.transition = null;
    try {
      (at = 4), ds(n, r, l, o);
    } finally {
      (at = c), (Il.transition = d);
    }
  }
  function ds(n, r, l, o) {
    if (Ki) {
      var c = ps(n, r, l, o);
      if (c === null) ws(n, r, o, Ju, l), ta(n, o);
      else if (di(c, n, r, l, o)) o.stopPropagation();
      else if ((ta(n, o), r & 4 && -1 < Nm.indexOf(n))) {
        for (; c !== null; ) {
          var d = ho(c);
          if (
            (d !== null && Mp(d), (d = ps(n, r, l, o)), d === null && ws(n, r, o, Ju, l), d === c)
          )
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else ws(n, r, o, null, l);
    }
  }
  var Ju = null;
  function ps(n, r, l, o) {
    if (((Ju = null), (n = kt(o)), (n = Or(n)), n !== null))
      if (((r = pa(n)), r === null)) n = null;
      else if (((l = r.tag), l === 13)) {
        if (((n = Iu(r)), n !== null)) return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else r !== n && (n = null);
    return (Ju = n), null;
  }
  function ff(n) {
    switch (n) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (Om()) {
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
  var La = null,
    eo = null,
    to = null;
  function df() {
    if (to) return to;
    var n,
      r = eo,
      l = r.length,
      o,
      c = 'value' in La ? La.value : La.textContent,
      d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++);
    var h = l - n;
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++);
    return (to = c.slice(n, 1 < o ? 1 - o : void 0));
  }
  function Gl(n) {
    var r = n.keyCode;
    return (
      'charCode' in n ? ((n = n.charCode), n === 0 && r === 13 && (n = 13)) : (n = r),
      n === 10 && (n = 13),
      32 <= n || n === 13 ? n : 0
    );
  }
  function no() {
    return !0;
  }
  function Ap() {
    return !1;
  }
  function sr(n) {
    function r(l, o, c, d, h) {
      (this._reactName = l),
        (this._targetInst = c),
        (this.type = o),
        (this.nativeEvent = d),
        (this.target = h),
        (this.currentTarget = null);
      for (var S in n) n.hasOwnProperty(S) && ((l = n[S]), (this[S] = l ? l(d) : d[S]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? no
          : Ap),
        (this.isPropagationStopped = Ap),
        this
      );
    }
    return (
      le(r.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = no));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = no));
        },
        persist: function () {},
        isPersistent: no,
      }),
      r
    );
  }
  var pi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (n) {
        return n.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    vs = sr(pi),
    Wl = le({}, pi, { view: 0, detail: 0 }),
    Hp = sr(Wl),
    hs,
    pf,
    ro,
    Zt = le({}, Wl, {
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
      getModifierState: yf,
      button: 0,
      buttons: 0,
      relatedTarget: function (n) {
        return n.relatedTarget === void 0
          ? n.fromElement === n.srcElement
            ? n.toElement
            : n.fromElement
          : n.relatedTarget;
      },
      movementX: function (n) {
        return 'movementX' in n
          ? n.movementX
          : (n !== ro &&
              (ro && n.type === 'mousemove'
                ? ((hs = n.screenX - ro.screenX), (pf = n.screenY - ro.screenY))
                : (pf = hs = 0),
              (ro = n)),
            hs);
      },
      movementY: function (n) {
        return 'movementY' in n ? n.movementY : pf;
      },
    }),
    ms = sr(Zt),
    Fp = le({}, Zt, { dataTransfer: 0 }),
    Vp = sr(Fp),
    zm = le({}, Wl, { relatedTarget: 0 }),
    vi = sr(zm),
    vf = le({}, pi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Bp = sr(vf),
    Um = le({}, pi, {
      clipboardData: function (n) {
        return 'clipboardData' in n ? n.clipboardData : window.clipboardData;
      },
    }),
    Am = sr(Um),
    Hm = le({}, pi, { data: 0 }),
    hf = sr(Hm),
    mf = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    jp = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Pp = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Yp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Pp[n]) ? !!r[n] : !1;
  }
  function yf() {
    return Yp;
  }
  var Na = le({}, Wl, {
      key: function (n) {
        if (n.key) {
          var r = mf[n.key] || n.key;
          if (r !== 'Unidentified') return r;
        }
        return n.type === 'keypress'
          ? ((n = Gl(n)), n === 13 ? 'Enter' : String.fromCharCode(n))
          : n.type === 'keydown' || n.type === 'keyup'
            ? jp[n.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: yf,
      charCode: function (n) {
        return n.type === 'keypress' ? Gl(n) : 0;
      },
      keyCode: function (n) {
        return n.type === 'keydown' || n.type === 'keyup' ? n.keyCode : 0;
      },
      which: function (n) {
        return n.type === 'keypress'
          ? Gl(n)
          : n.type === 'keydown' || n.type === 'keyup'
            ? n.keyCode
            : 0;
      },
    }),
    Fm = sr(Na),
    gf = le({}, Zt, {
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
    ys = sr(gf),
    Sf = le({}, Wl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: yf,
    }),
    Vm = sr(Sf),
    gs = le({}, pi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    $p = sr(gs),
    In = le({}, Zt, {
      deltaX: function (n) {
        return 'deltaX' in n ? n.deltaX : 'wheelDeltaX' in n ? -n.wheelDeltaX : 0;
      },
      deltaY: function (n) {
        return 'deltaY' in n
          ? n.deltaY
          : 'wheelDeltaY' in n
            ? -n.wheelDeltaY
            : 'wheelDelta' in n
              ? -n.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    za = sr(In),
    Bt = [9, 13, 27, 32],
    na = Fe && 'CompositionEvent' in window,
    qi = null;
  Fe && 'documentMode' in document && (qi = document.documentMode);
  var Ss = Fe && 'TextEvent' in window && !qi,
    Qp = Fe && (!na || (qi && 8 < qi && 11 >= qi)),
    Xl = ' ',
    Ip = !1;
  function Gp(n, r) {
    switch (n) {
      case 'keyup':
        return Bt.indexOf(r.keyCode) !== -1;
      case 'keydown':
        return r.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Cs(n) {
    return (n = n.detail), typeof n == 'object' && 'data' in n ? n.data : null;
  }
  var Kl = !1;
  function Bm(n, r) {
    switch (n) {
      case 'compositionend':
        return Cs(r);
      case 'keypress':
        return r.which !== 32 ? null : ((Ip = !0), Xl);
      case 'textInput':
        return (n = r.data), n === Xl && Ip ? null : n;
      default:
        return null;
    }
  }
  function jm(n, r) {
    if (Kl)
      return n === 'compositionend' || (!na && Gp(n, r))
        ? ((n = df()), (to = eo = La = null), (Kl = !1), n)
        : null;
    switch (n) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case 'compositionend':
        return Qp && r.locale !== 'ko' ? null : r.data;
      default:
        return null;
    }
  }
  var Wp = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
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
  function Xp(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === 'input' ? !!Wp[n.type] : r === 'textarea';
  }
  function Kp(n, r, l, o) {
    rs(o),
      (r = fo(r, 'onChange')),
      0 < r.length &&
        ((l = new vs('onChange', 'change', null, l, o)), n.push({ event: l, listeners: r }));
  }
  var ao = null,
    ql = null;
  function Zl(n) {
    xs(n, 0);
  }
  function Jl(n) {
    var r = tu(n);
    if (ba(r)) return n;
  }
  function qp(n, r) {
    if (n === 'change') return r;
  }
  var Cf = !1;
  if (Fe) {
    var Ef;
    if (Fe) {
      var Tf = 'oninput' in document;
      if (!Tf) {
        var Zp = document.createElement('div');
        Zp.setAttribute('oninput', 'return;'), (Tf = typeof Zp.oninput == 'function');
      }
      Ef = Tf;
    } else Ef = !1;
    Cf = Ef && (!document.documentMode || 9 < document.documentMode);
  }
  function Jp() {
    ao && (ao.detachEvent('onpropertychange', ev), (ql = ao = null));
  }
  function ev(n) {
    if (n.propertyName === 'value' && Jl(ql)) {
      var r = [];
      Kp(r, ql, n, kt(n)), Jc(Zl, r);
    }
  }
  function Pm(n, r, l) {
    n === 'focusin'
      ? (Jp(), (ao = r), (ql = l), ao.attachEvent('onpropertychange', ev))
      : n === 'focusout' && Jp();
  }
  function Ym(n) {
    if (n === 'selectionchange' || n === 'keyup' || n === 'keydown') return Jl(ql);
  }
  function $m(n, r) {
    if (n === 'click') return Jl(r);
  }
  function tv(n, r) {
    if (n === 'input' || n === 'change') return Jl(r);
  }
  function Qm(n, r) {
    return (n === r && (n !== 0 || 1 / n === 1 / r)) || (n !== n && r !== r);
  }
  var _r = typeof Object.is == 'function' ? Object.is : Qm;
  function io(n, r) {
    if (_r(n, r)) return !0;
    if (typeof n != 'object' || n === null || typeof r != 'object' || r === null) return !1;
    var l = Object.keys(n),
      o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!oe.call(r, c) || !_r(n[c], r[c])) return !1;
    }
    return !0;
  }
  function nv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function rv(n, r) {
    var l = nv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (((o = n + l.textContent.length), n <= r && o >= r)) return { node: l, offset: r - n };
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
    return n && r
      ? n === r
        ? !0
        : n && n.nodeType === 3
          ? !1
          : r && r.nodeType === 3
            ? av(n, r.parentNode)
            : 'contains' in n
              ? n.contains(r)
              : n.compareDocumentPosition
                ? !!(n.compareDocumentPosition(r) & 16)
                : !1
      : !1;
  }
  function Es() {
    for (var n = window, r = gn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == 'string';
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = gn(n.document);
    }
    return r;
  }
  function Ua(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return (
      r &&
      ((r === 'input' &&
        (n.type === 'text' ||
          n.type === 'search' ||
          n.type === 'tel' ||
          n.type === 'url' ||
          n.type === 'password')) ||
        r === 'textarea' ||
        n.contentEditable === 'true')
    );
  }
  function Ts(n) {
    var r = Es(),
      l = n.focusedElem,
      o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && av(l.ownerDocument.documentElement, l)) {
      if (o !== null && Ua(l)) {
        if (((r = o.start), (n = o.end), n === void 0 && (n = r), 'selectionStart' in l))
          (l.selectionStart = r), (l.selectionEnd = Math.min(n, l.value.length));
        else if (
          ((n = ((r = l.ownerDocument || document) && r.defaultView) || window), n.getSelection)
        ) {
          n = n.getSelection();
          var c = l.textContent.length,
            d = Math.min(o.start, c);
          (o = o.end === void 0 ? d : Math.min(o.end, c)),
            !n.extend && d > o && ((c = o), (o = d), (d = c)),
            (c = rv(l, d));
          var h = rv(l, o);
          c &&
            h &&
            (n.rangeCount !== 1 ||
              n.anchorNode !== c.node ||
              n.anchorOffset !== c.offset ||
              n.focusNode !== h.node ||
              n.focusOffset !== h.offset) &&
            ((r = r.createRange()),
            r.setStart(c.node, c.offset),
            n.removeAllRanges(),
            d > o
              ? (n.addRange(r), n.extend(h.node, h.offset))
              : (r.setEnd(h.node, h.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; (n = n.parentNode); )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == 'function' && l.focus(), l = 0; l < r.length; l++)
        (n = r[l]), (n.element.scrollLeft = n.left), (n.element.scrollTop = n.top);
    }
  }
  var iv = Fe && 'documentMode' in document && 11 >= document.documentMode,
    ra = null,
    Rf = null,
    lo = null,
    xf = !1;
  function lv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    xf ||
      ra == null ||
      ra !== gn(o) ||
      ((o = ra),
      'selectionStart' in o && Ua(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (lo && io(lo, o)) ||
        ((lo = o),
        (o = fo(Rf, 'onSelect')),
        0 < o.length &&
          ((r = new vs('onSelect', 'select', null, r, l)),
          n.push({ event: r, listeners: o }),
          (r.target = ra))));
  }
  function Rs(n, r) {
    var l = {};
    return (
      (l[n.toLowerCase()] = r.toLowerCase()),
      (l['Webkit' + n] = 'webkit' + r),
      (l['Moz' + n] = 'moz' + r),
      l
    );
  }
  var Zi = {
      animationend: Rs('Animation', 'AnimationEnd'),
      animationiteration: Rs('Animation', 'AnimationIteration'),
      animationstart: Rs('Animation', 'AnimationStart'),
      transitionend: Rs('Transition', 'TransitionEnd'),
    },
    wf = {},
    Df = {};
  Fe &&
    ((Df = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Zi.animationend.animation,
      delete Zi.animationiteration.animation,
      delete Zi.animationstart.animation),
    'TransitionEvent' in window || delete Zi.transitionend.transition);
  function Jt(n) {
    if (wf[n]) return wf[n];
    if (!Zi[n]) return n;
    var r = Zi[n],
      l;
    for (l in r) if (r.hasOwnProperty(l) && l in Df) return (wf[n] = r[l]);
    return n;
  }
  var kf = Jt('animationend'),
    uv = Jt('animationiteration'),
    ov = Jt('animationstart'),
    sv = Jt('transitionend'),
    cv = /* @__PURE__ */ new Map(),
    fv =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  function Aa(n, r) {
    cv.set(n, r), se(r, [n]);
  }
  for (var uo = 0; uo < fv.length; uo++) {
    var Ji = fv[uo],
      Im = Ji.toLowerCase(),
      oo = Ji[0].toUpperCase() + Ji.slice(1);
    Aa(Im, 'on' + oo);
  }
  Aa(kf, 'onAnimationEnd'),
    Aa(uv, 'onAnimationIteration'),
    Aa(ov, 'onAnimationStart'),
    Aa('dblclick', 'onDoubleClick'),
    Aa('focusin', 'onFocus'),
    Aa('focusout', 'onBlur'),
    Aa(sv, 'onTransitionEnd'),
    g('onMouseEnter', ['mouseout', 'mouseover']),
    g('onMouseLeave', ['mouseout', 'mouseover']),
    g('onPointerEnter', ['pointerout', 'pointerover']),
    g('onPointerLeave', ['pointerout', 'pointerover']),
    se('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    se(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    se('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    se('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    se(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    se(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    );
  var so =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    Gm = new Set('cancel close invalid load scroll toggle'.split(' ').concat(so));
  function dv(n, r, l) {
    var o = n.type || 'unknown-event';
    (n.currentTarget = l), Pl(o, r, void 0, n), (n.currentTarget = null);
  }
  function xs(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l],
        c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var h = o.length - 1; 0 <= h; h--) {
            var S = o[h],
              C = S.instance,
              M = S.currentTarget;
            if (((S = S.listener), C !== d && c.isPropagationStopped())) break e;
            dv(c, S, M), (d = C);
          }
        else
          for (h = 0; h < o.length; h++) {
            if (
              ((S = o[h]),
              (C = S.instance),
              (M = S.currentTarget),
              (S = S.listener),
              C !== d && c.isPropagationStopped())
            )
              break e;
            dv(c, S, M), (d = C);
          }
      }
    }
    if (jl) throw ((n = Qu), (jl = !1), (Qu = null), n);
  }
  function dt(n, r) {
    var l = r[zf];
    l === void 0 && (l = r[zf] = /* @__PURE__ */ new Set());
    var o = n + '__bubble';
    l.has(o) || (pv(r, n, 2, !1), l.add(o));
  }
  function hi(n, r, l) {
    var o = 0;
    r && (o |= 4), pv(l, n, o, r);
  }
  var Ha = '_reactListening' + Math.random().toString(36).slice(2);
  function eu(n) {
    if (!n[Ha]) {
      (n[Ha] = !0),
        Z.forEach(function (l) {
          l !== 'selectionchange' && (Gm.has(l) || hi(l, !1, n), hi(l, !0, n));
        });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ha] || ((r[Ha] = !0), hi('selectionchange', !1, r));
    }
  }
  function pv(n, r, l, o) {
    switch (ff(r)) {
      case 1:
        var c = Up;
        break;
      case 4:
        c = fs;
        break;
      default:
        c = ds;
    }
    (l = c.bind(null, r, l, n)),
      (c = void 0),
      !ls || (r !== 'touchstart' && r !== 'touchmove' && r !== 'wheel') || (c = !0),
      o
        ? c !== void 0
          ? n.addEventListener(r, l, { capture: !0, passive: c })
          : n.addEventListener(r, l, !0)
        : c !== void 0
          ? n.addEventListener(r, l, { passive: c })
          : n.addEventListener(r, l, !1);
  }
  function ws(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e: for (;;) {
        if (o === null) return;
        var h = o.tag;
        if (h === 3 || h === 4) {
          var S = o.stateNode.containerInfo;
          if (S === c || (S.nodeType === 8 && S.parentNode === c)) break;
          if (h === 4)
            for (h = o.return; h !== null; ) {
              var C = h.tag;
              if (
                (C === 3 || C === 4) &&
                ((C = h.stateNode.containerInfo),
                C === c || (C.nodeType === 8 && C.parentNode === c))
              )
                return;
              h = h.return;
            }
          for (; S !== null; ) {
            if (((h = Or(S)), h === null)) return;
            if (((C = h.tag), C === 5 || C === 6)) {
              o = d = h;
              continue e;
            }
            S = S.parentNode;
          }
        }
        o = o.return;
      }
    Jc(function () {
      var M = d,
        j = kt(l),
        Y = [];
      e: {
        var B = cv.get(n);
        if (B !== void 0) {
          var te = vs,
            ce = n;
          switch (n) {
            case 'keypress':
              if (Gl(l) === 0) break e;
            case 'keydown':
            case 'keyup':
              te = Fm;
              break;
            case 'focusin':
              (ce = 'focus'), (te = vi);
              break;
            case 'focusout':
              (ce = 'blur'), (te = vi);
              break;
            case 'beforeblur':
            case 'afterblur':
              te = vi;
              break;
            case 'click':
              if (l.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              te = ms;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              te = Vp;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              te = Vm;
              break;
            case kf:
            case uv:
            case ov:
              te = Bp;
              break;
            case sv:
              te = $p;
              break;
            case 'scroll':
              te = Hp;
              break;
            case 'wheel':
              te = za;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              te = Am;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              te = ys;
          }
          var pe = (r & 4) !== 0,
            Ut = !pe && n === 'scroll',
            x = pe ? (B !== null ? B + 'Capture' : null) : B;
          pe = [];
          for (var T = M, b; T !== null; ) {
            b = T;
            var I = b.stateNode;
            if (
              (b.tag === 5 &&
                I !== null &&
                ((b = I), x !== null && ((I = $u(T, x)), I != null && pe.push(co(T, I, b)))),
              Ut)
            )
              break;
            T = T.return;
          }
          0 < pe.length && ((B = new te(B, ce, null, l, j)), Y.push({ event: B, listeners: pe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (
            ((B = n === 'mouseover' || n === 'pointerover'),
            (te = n === 'mouseout' || n === 'pointerout'),
            B && l !== wr && (ce = l.relatedTarget || l.fromElement) && (Or(ce) || ce[Fa]))
          )
            break e;
          if (
            (te || B) &&
            ((B =
              j.window === j
                ? j
                : (B = j.ownerDocument)
                  ? B.defaultView || B.parentWindow
                  : window),
            te
              ? ((ce = l.relatedTarget || l.toElement),
                (te = M),
                (ce = ce ? Or(ce) : null),
                ce !== null &&
                  ((Ut = pa(ce)), ce !== Ut || (ce.tag !== 5 && ce.tag !== 6)) &&
                  (ce = null))
              : ((te = null), (ce = M)),
            te !== ce)
          ) {
            if (
              ((pe = ms),
              (I = 'onMouseLeave'),
              (x = 'onMouseEnter'),
              (T = 'mouse'),
              (n === 'pointerout' || n === 'pointerover') &&
                ((pe = ys), (I = 'onPointerLeave'), (x = 'onPointerEnter'), (T = 'pointer')),
              (Ut = te == null ? B : tu(te)),
              (b = ce == null ? B : tu(ce)),
              (B = new pe(I, T + 'leave', te, l, j)),
              (B.target = Ut),
              (B.relatedTarget = b),
              (I = null),
              Or(j) === M &&
                ((pe = new pe(x, T + 'enter', ce, l, j)),
                (pe.target = b),
                (pe.relatedTarget = Ut),
                (I = pe)),
              (Ut = I),
              te && ce)
            )
              t: {
                for (pe = te, x = ce, T = 0, b = pe; b; b = el(b)) T++;
                for (b = 0, I = x; I; I = el(I)) b++;
                for (; 0 < T - b; ) (pe = el(pe)), T--;
                for (; 0 < b - T; ) (x = el(x)), b--;
                for (; T--; ) {
                  if (pe === x || (x !== null && pe === x.alternate)) break t;
                  (pe = el(pe)), (x = el(x));
                }
                pe = null;
              }
            else pe = null;
            te !== null && bf(Y, B, te, pe, !1),
              ce !== null && Ut !== null && bf(Y, Ut, ce, pe, !0);
          }
        }
        e: {
          if (
            ((B = M ? tu(M) : window),
            (te = B.nodeName && B.nodeName.toLowerCase()),
            te === 'select' || (te === 'input' && B.type === 'file'))
          )
            var ve = qp;
          else if (Xp(B))
            if (Cf) ve = tv;
            else {
              ve = Ym;
              var fe = Pm;
            }
          else
            (te = B.nodeName) &&
              te.toLowerCase() === 'input' &&
              (B.type === 'checkbox' || B.type === 'radio') &&
              (ve = $m);
          if (ve && (ve = ve(n, M))) {
            Kp(Y, ve, l, j);
            break e;
          }
          fe && fe(n, B, M),
            n === 'focusout' &&
              (fe = B._wrapperState) &&
              fe.controlled &&
              B.type === 'number' &&
              Vl(B, 'number', B.value);
        }
        switch (((fe = M ? tu(M) : window), n)) {
          case 'focusin':
            (Xp(fe) || fe.contentEditable === 'true') && ((ra = fe), (Rf = M), (lo = null));
            break;
          case 'focusout':
            lo = Rf = ra = null;
            break;
          case 'mousedown':
            xf = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (xf = !1), lv(Y, l, j);
            break;
          case 'selectionchange':
            if (iv) break;
          case 'keydown':
          case 'keyup':
            lv(Y, l, j);
        }
        var Se;
        if (na)
          e: {
            switch (n) {
              case 'compositionstart':
                var Le = 'onCompositionStart';
                break e;
              case 'compositionend':
                Le = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Le = 'onCompositionUpdate';
                break e;
            }
            Le = void 0;
          }
        else
          Kl
            ? Gp(n, l) && (Le = 'onCompositionEnd')
            : n === 'keydown' && l.keyCode === 229 && (Le = 'onCompositionStart');
        Le &&
          (Qp &&
            l.locale !== 'ko' &&
            (Kl || Le !== 'onCompositionStart'
              ? Le === 'onCompositionEnd' && Kl && (Se = df())
              : ((La = j), (eo = 'value' in La ? La.value : La.textContent), (Kl = !0))),
          (fe = fo(M, Le)),
          0 < fe.length &&
            ((Le = new hf(Le, n, null, l, j)),
            Y.push({ event: Le, listeners: fe }),
            Se ? (Le.data = Se) : ((Se = Cs(l)), Se !== null && (Le.data = Se)))),
          (Se = Ss ? Bm(n, l) : jm(n, l)) &&
            ((M = fo(M, 'onBeforeInput')),
            0 < M.length &&
              ((j = new hf('onBeforeInput', 'beforeinput', null, l, j)),
              Y.push({ event: j, listeners: M }),
              (j.data = Se)));
      }
      xs(Y, r);
    });
  }
  function co(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function fo(n, r) {
    for (var l = r + 'Capture', o = []; n !== null; ) {
      var c = n,
        d = c.stateNode;
      c.tag === 5 &&
        d !== null &&
        ((c = d),
        (d = $u(n, l)),
        d != null && o.unshift(co(n, d, c)),
        (d = $u(n, r)),
        d != null && o.push(co(n, d, c))),
        (n = n.return);
    }
    return o;
  }
  function el(n) {
    if (n === null) return null;
    do n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function bf(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var S = l,
        C = S.alternate,
        M = S.stateNode;
      if (C !== null && C === o) break;
      S.tag === 5 &&
        M !== null &&
        ((S = M),
        c
          ? ((C = $u(l, d)), C != null && h.unshift(co(l, C, S)))
          : c || ((C = $u(l, d)), C != null && h.push(co(l, C, S)))),
        (l = l.return);
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var _f = /\r\n?/g,
    Wm = /\u0000|\uFFFD/g;
  function Of(n) {
    return (typeof n == 'string' ? n : '' + n)
      .replace(
        _f,
        `
`,
      )
      .replace(Wm, '');
  }
  function Ds(n, r, l) {
    if (((r = Of(r)), Of(n) !== r && l)) throw Error(w(425));
  }
  function ks() {}
  var Mf = null,
    tl = null;
  function po(n, r) {
    return (
      n === 'textarea' ||
      n === 'noscript' ||
      typeof r.children == 'string' ||
      typeof r.children == 'number' ||
      (typeof r.dangerouslySetInnerHTML == 'object' &&
        r.dangerouslySetInnerHTML !== null &&
        r.dangerouslySetInnerHTML.__html != null)
    );
  }
  var nl = typeof setTimeout == 'function' ? setTimeout : void 0,
    vv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Lf = typeof Promise == 'function' ? Promise : void 0,
    Nf =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Lf < 'u'
          ? function (n) {
              return Lf.resolve(null).then(n).catch(Xm);
            }
          : nl;
  function Xm(n) {
    setTimeout(function () {
      throw n;
    });
  }
  function mi(n, r) {
    var l = r,
      o = 0;
    do {
      var c = l.nextSibling;
      if ((n.removeChild(l), c && c.nodeType === 8))
        if (((l = c.data), l === '/$')) {
          if (o === 0) {
            n.removeChild(c), Zu(r);
            return;
          }
          o--;
        } else (l !== '$' && l !== '$?' && l !== '$!') || o++;
      l = c;
    } while (l);
    Zu(r);
  }
  function aa(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (((r = n.data), r === '$' || r === '$!' || r === '$?')) break;
        if (r === '/$') return null;
      }
    }
    return n;
  }
  function vo(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === '$' || l === '$!' || l === '$?') {
          if (r === 0) return n;
          r--;
        } else l === '/$' && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var yi = Math.random().toString(36).slice(2),
    va = '__reactFiber$' + yi,
    rl = '__reactProps$' + yi,
    Fa = '__reactContainer$' + yi,
    zf = '__reactEvents$' + yi,
    Km = '__reactListeners$' + yi,
    Uf = '__reactHandles$' + yi;
  function Or(n) {
    var r = n[va];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if ((r = l[Fa] || l[va])) {
        if (((l = r.alternate), r.child !== null || (l !== null && l.child !== null)))
          for (n = vo(n); n !== null; ) {
            if ((l = n[va])) return l;
            n = vo(n);
          }
        return r;
      }
      (n = l), (l = n.parentNode);
    }
    return null;
  }
  function ho(n) {
    return (
      (n = n[va] || n[Fa]),
      !n || (n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3) ? null : n
    );
  }
  function tu(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(w(33));
  }
  function Ce(n) {
    return n[rl] || null;
  }
  var gi = [],
    ht = -1;
  function Ae(n) {
    return { current: n };
  }
  function Je(n) {
    0 > ht || ((n.current = gi[ht]), (gi[ht] = null), ht--);
  }
  function et(n, r) {
    ht++, (gi[ht] = n.current), (n.current = r);
  }
  var ha = {},
    Me = Ae(ha),
    Ot = Ae(!1),
    Gn = ha;
  function Mr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return ha;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {},
      d;
    for (d in l) c[d] = r[d];
    return (
      o &&
        ((n = n.stateNode),
        (n.__reactInternalMemoizedUnmaskedChildContext = r),
        (n.__reactInternalMemoizedMaskedChildContext = c)),
      c
    );
  }
  function Ct(n) {
    return (n = n.childContextTypes), n != null;
  }
  function Lr() {
    Je(Ot), Je(Me);
  }
  function Si(n, r, l) {
    if (Me.current !== ha) throw Error(w(168));
    et(Me, r), et(Ot, l);
  }
  function mo(n, r, l) {
    var o = n.stateNode;
    if (((r = r.childContextTypes), typeof o.getChildContext != 'function')) return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(w(108, li(n) || 'Unknown', c));
    return le({}, l, o);
  }
  function bs(n) {
    return (
      (n = ((n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext) || ha),
      (Gn = Me.current),
      et(Me, n),
      et(Ot, Ot.current),
      !0
    );
  }
  function hv(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(w(169));
    l
      ? ((n = mo(n, r, Gn)),
        (o.__reactInternalMemoizedMergedChildContext = n),
        Je(Ot),
        Je(Me),
        et(Me, n))
      : Je(Ot),
      et(Ot, l);
  }
  var cr = null,
    en = !1,
    yo = !1;
  function Af(n) {
    cr === null ? (cr = [n]) : cr.push(n);
  }
  function Hf(n) {
    (en = !0), Af(n);
  }
  function Wn() {
    if (!yo && cr !== null) {
      yo = !0;
      var n = 0,
        r = at;
      try {
        var l = cr;
        for (at = 1; n < l.length; n++) {
          var o = l[n];
          do o = o(!0);
          while (o !== null);
        }
        (cr = null), (en = !1);
      } catch (c) {
        throw (cr !== null && (cr = cr.slice(n + 1)), nf(Ma, Wn), c);
      } finally {
        (at = r), (yo = !1);
      }
    }
    return null;
  }
  var Ci = [],
    Xn = 0,
    al = null,
    nu = 0,
    Kn = [],
    En = 0,
    Nr = null,
    un = 1,
    Va = '';
  function fr(n, r) {
    (Ci[Xn++] = nu), (Ci[Xn++] = al), (al = n), (nu = r);
  }
  function Ff(n, r, l) {
    (Kn[En++] = un), (Kn[En++] = Va), (Kn[En++] = Nr), (Nr = n);
    var o = un;
    n = Va;
    var c = 32 - Dr(o) - 1;
    (o &= ~(1 << c)), (l += 1);
    var d = 32 - Dr(r) + c;
    if (30 < d) {
      var h = c - (c % 5);
      (d = (o & ((1 << h) - 1)).toString(32)),
        (o >>= h),
        (c -= h),
        (un = (1 << (32 - Dr(r) + c)) | (l << c) | o),
        (Va = d + n);
    } else (un = (1 << d) | (l << c) | o), (Va = n);
  }
  function _s(n) {
    n.return !== null && (fr(n, 1), Ff(n, 1, 0));
  }
  function Vf(n) {
    for (; n === al; ) (al = Ci[--Xn]), (Ci[Xn] = null), (nu = Ci[--Xn]), (Ci[Xn] = null);
    for (; n === Nr; )
      (Nr = Kn[--En]),
        (Kn[En] = null),
        (Va = Kn[--En]),
        (Kn[En] = null),
        (un = Kn[--En]),
        (Kn[En] = null);
  }
  var dr = null,
    qn = null,
    mt = !1,
    zr = null;
  function Bf(n, r) {
    var l = Br(5, null, null, 0);
    (l.elementType = 'DELETED'),
      (l.stateNode = r),
      (l.return = n),
      (r = n.deletions),
      r === null ? ((n.deletions = [l]), (n.flags |= 16)) : r.push(l);
  }
  function mv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return (
          (r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r),
          r !== null ? ((n.stateNode = r), (dr = n), (qn = aa(r.firstChild)), !0) : !1
        );
      case 6:
        return (
          (r = n.pendingProps === '' || r.nodeType !== 3 ? null : r),
          r !== null ? ((n.stateNode = r), (dr = n), (qn = null), !0) : !1
        );
      case 13:
        return (
          (r = r.nodeType !== 8 ? null : r),
          r !== null
            ? ((l = Nr !== null ? { id: un, overflow: Va } : null),
              (n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }),
              (l = Br(18, null, null, 0)),
              (l.stateNode = r),
              (l.return = n),
              (n.child = l),
              (dr = n),
              (qn = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Os(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ms(n) {
    if (mt) {
      var r = qn;
      if (r) {
        var l = r;
        if (!mv(n, r)) {
          if (Os(n)) throw Error(w(418));
          r = aa(l.nextSibling);
          var o = dr;
          r && mv(n, r) ? Bf(o, l) : ((n.flags = (n.flags & -4097) | 2), (mt = !1), (dr = n));
        }
      } else {
        if (Os(n)) throw Error(w(418));
        (n.flags = (n.flags & -4097) | 2), (mt = !1), (dr = n);
      }
    }
  }
  function yv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    dr = n;
  }
  function Ls(n) {
    if (n !== dr) return !1;
    if (!mt) return yv(n), (mt = !0), !1;
    var r;
    if (
      ((r = n.tag !== 3) &&
        !(r = n.tag !== 5) &&
        ((r = n.type), (r = r !== 'head' && r !== 'body' && !po(n.type, n.memoizedProps))),
      r && (r = qn))
    ) {
      if (Os(n)) throw (gv(), Error(w(418)));
      for (; r; ) Bf(n, r), (r = aa(r.nextSibling));
    }
    if ((yv(n), n.tag === 13)) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n)) throw Error(w(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === '/$') {
              if (r === 0) {
                qn = aa(n.nextSibling);
                break e;
              }
              r--;
            } else (l !== '$' && l !== '$!' && l !== '$?') || r++;
          }
          n = n.nextSibling;
        }
        qn = null;
      }
    } else qn = dr ? aa(n.stateNode.nextSibling) : null;
    return !0;
  }
  function gv() {
    for (var n = qn; n; ) n = aa(n.nextSibling);
  }
  function Tt() {
    (qn = dr = null), (mt = !1);
  }
  function jf(n) {
    zr === null ? (zr = [n]) : zr.push(n);
  }
  var Ns = ge.ReactCurrentBatchConfig;
  function pr(n, r) {
    if (n && n.defaultProps) {
      (r = le({}, r)), (n = n.defaultProps);
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var ma = Ae(null),
    zs = null,
    Ei = null,
    Pf = null;
  function Yf() {
    Pf = Ei = zs = null;
  }
  function Ti(n) {
    var r = ma.current;
    Je(ma), (n._currentValue = r);
  }
  function tn(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if (
        ((n.childLanes & r) !== r
          ? ((n.childLanes |= r), o !== null && (o.childLanes |= r))
          : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r),
        n === l)
      )
        break;
      n = n.return;
    }
  }
  function W(n, r) {
    (zs = n),
      (Pf = Ei = null),
      (n = n.dependencies),
      n !== null && n.firstContext !== null && (n.lanes & r && (jt = !0), (n.firstContext = null));
  }
  function zt(n) {
    var r = n._currentValue;
    if (Pf !== n)
      if (((n = { context: n, memoizedValue: r, next: null }), Ei === null)) {
        if (zs === null) throw Error(w(308));
        (Ei = n), (zs.dependencies = { lanes: 0, firstContext: n });
      } else Ei = Ei.next = n;
    return r;
  }
  var on = null;
  function $f(n) {
    on === null ? (on = [n]) : on.push(n);
  }
  function Sv(n, r, l, o) {
    var c = r.interleaved;
    return (
      c === null ? ((l.next = l), $f(r)) : ((l.next = c.next), (c.next = l)),
      (r.interleaved = l),
      Ba(n, o)
    );
  }
  function Ba(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      (n.childLanes |= r),
        (l = n.alternate),
        l !== null && (l.childLanes |= r),
        (l = n),
        (n = n.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ri = !1;
  function Qf(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function It(n, r) {
    (n = n.updateQueue),
      r.updateQueue === n &&
        (r.updateQueue = {
          baseState: n.baseState,
          firstBaseUpdate: n.firstBaseUpdate,
          lastBaseUpdate: n.lastBaseUpdate,
          shared: n.shared,
          effects: n.effects,
        });
  }
  function ja(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function xi(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), $e & 2)) {
      var c = o.pending;
      return (
        c === null ? (r.next = r) : ((r.next = c.next), (c.next = r)), (o.pending = r), Ba(n, l)
      );
    }
    return (
      (c = o.interleaved),
      c === null ? ((r.next = r), $f(o)) : ((r.next = c.next), (c.next = r)),
      (o.interleaved = r),
      Ba(n, l)
    );
  }
  function Us(n, r, l) {
    if (((r = r.updateQueue), r !== null && ((r = r.shared), (l & 4194240) !== 0))) {
      var o = r.lanes;
      (o &= n.pendingLanes), (l |= o), (r.lanes = l), Wu(n, l);
    }
  }
  function If(n, r) {
    var l = n.updateQueue,
      o = n.alternate;
    if (o !== null && ((o = o.updateQueue), l === o)) {
      var c = null,
        d = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var h = {
            eventTime: l.eventTime,
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: l.callback,
            next: null,
          };
          d === null ? (c = d = h) : (d = d.next = h), (l = l.next);
        } while (l !== null);
        d === null ? (c = d = r) : (d = d.next = r);
      } else c = d = r;
      (l = {
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: d,
        shared: o.shared,
        effects: o.effects,
      }),
        (n.updateQueue = l);
      return;
    }
    (n = l.lastBaseUpdate),
      n === null ? (l.firstBaseUpdate = r) : (n.next = r),
      (l.lastBaseUpdate = r);
  }
  function wi(n, r, l, o) {
    var c = n.updateQueue;
    Ri = !1;
    var d = c.firstBaseUpdate,
      h = c.lastBaseUpdate,
      S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var C = S,
        M = C.next;
      (C.next = null), h === null ? (d = M) : (h.next = M), (h = C);
      var j = n.alternate;
      j !== null &&
        ((j = j.updateQueue),
        (S = j.lastBaseUpdate),
        S !== h && (S === null ? (j.firstBaseUpdate = M) : (S.next = M), (j.lastBaseUpdate = C)));
    }
    if (d !== null) {
      var Y = c.baseState;
      (h = 0), (j = M = C = null), (S = d);
      do {
        var B = S.lane,
          te = S.eventTime;
        if ((o & B) === B) {
          j !== null &&
            (j = j.next =
              {
                eventTime: te,
                lane: 0,
                tag: S.tag,
                payload: S.payload,
                callback: S.callback,
                next: null,
              });
          e: {
            var ce = n,
              pe = S;
            switch (((B = r), (te = l), pe.tag)) {
              case 1:
                if (((ce = pe.payload), typeof ce == 'function')) {
                  Y = ce.call(te, Y, B);
                  break e;
                }
                Y = ce;
                break e;
              case 3:
                ce.flags = (ce.flags & -65537) | 128;
              case 0:
                if (
                  ((ce = pe.payload),
                  (B = typeof ce == 'function' ? ce.call(te, Y, B) : ce),
                  B == null)
                )
                  break e;
                Y = le({}, Y, B);
                break e;
              case 2:
                Ri = !0;
            }
          }
          S.callback !== null &&
            S.lane !== 0 &&
            ((n.flags |= 64), (B = c.effects), B === null ? (c.effects = [S]) : B.push(S));
        } else
          (te = {
            eventTime: te,
            lane: B,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null,
          }),
            j === null ? ((M = j = te), (C = Y)) : (j = j.next = te),
            (h |= B);
        if (((S = S.next), S === null)) {
          if (((S = c.shared.pending), S === null)) break;
          (B = S), (S = B.next), (B.next = null), (c.lastBaseUpdate = B), (c.shared.pending = null);
        }
      } while (!0);
      if (
        (j === null && (C = Y),
        (c.baseState = C),
        (c.firstBaseUpdate = M),
        (c.lastBaseUpdate = j),
        (r = c.shared.interleaved),
        r !== null)
      ) {
        c = r;
        do (h |= c.lane), (c = c.next);
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      (Qa |= h), (n.lanes = h), (n.memoizedState = Y);
    }
  }
  function il(n, r, l) {
    if (((n = r.effects), (r.effects = null), n !== null))
      for (r = 0; r < n.length; r++) {
        var o = n[r],
          c = o.callback;
        if (c !== null) {
          if (((o.callback = null), (o = l), typeof c != 'function')) throw Error(w(191, c));
          c.call(o);
        }
      }
  }
  var Cv = new L.Component().refs;
  function Gf(n, r, l, o) {
    (r = n.memoizedState),
      (l = l(o, r)),
      (l = l == null ? r : le({}, r, l)),
      (n.memoizedState = l),
      n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var As = {
    isMounted: function (n) {
      return (n = n._reactInternals) ? pa(n) === n : !1;
    },
    enqueueSetState: function (n, r, l) {
      n = n._reactInternals;
      var o = wn(),
        c = Pt(n),
        d = ja(o, c);
      (d.payload = r),
        l != null && (d.callback = l),
        (r = xi(n, d, c)),
        r !== null && (Dn(r, n, c, o), Us(r, n, c));
    },
    enqueueReplaceState: function (n, r, l) {
      n = n._reactInternals;
      var o = wn(),
        c = Pt(n),
        d = ja(o, c);
      (d.tag = 1),
        (d.payload = r),
        l != null && (d.callback = l),
        (r = xi(n, d, c)),
        r !== null && (Dn(r, n, c, o), Us(r, n, c));
    },
    enqueueForceUpdate: function (n, r) {
      n = n._reactInternals;
      var l = wn(),
        o = Pt(n),
        c = ja(l, o);
      (c.tag = 2),
        r != null && (c.callback = r),
        (r = xi(n, c, o)),
        r !== null && (Dn(r, n, o, l), Us(r, n, o));
    },
  };
  function Ev(n, r, l, o, c, d, h) {
    return (
      (n = n.stateNode),
      typeof n.shouldComponentUpdate == 'function'
        ? n.shouldComponentUpdate(o, d, h)
        : r.prototype && r.prototype.isPureReactComponent
          ? !io(l, o) || !io(c, d)
          : !0
    );
  }
  function Tv(n, r, l) {
    var o = !1,
      c = ha,
      d = r.contextType;
    return (
      typeof d == 'object' && d !== null
        ? (d = zt(d))
        : ((c = Ct(r) ? Gn : Me.current),
          (o = r.contextTypes),
          (d = (o = o != null) ? Mr(n, c) : ha)),
      (r = new r(l, d)),
      (n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null),
      (r.updater = As),
      (n.stateNode = r),
      (r._reactInternals = n),
      o &&
        ((n = n.stateNode),
        (n.__reactInternalMemoizedUnmaskedChildContext = c),
        (n.__reactInternalMemoizedMaskedChildContext = d)),
      r
    );
  }
  function Rv(n, r, l, o) {
    (n = r.state),
      typeof r.componentWillReceiveProps == 'function' && r.componentWillReceiveProps(l, o),
      typeof r.UNSAFE_componentWillReceiveProps == 'function' &&
        r.UNSAFE_componentWillReceiveProps(l, o),
      r.state !== n && As.enqueueReplaceState(r, r.state, null);
  }
  function Hs(n, r, l, o) {
    var c = n.stateNode;
    (c.props = l), (c.state = n.memoizedState), (c.refs = Cv), Qf(n);
    var d = r.contextType;
    typeof d == 'object' && d !== null
      ? (c.context = zt(d))
      : ((d = Ct(r) ? Gn : Me.current), (c.context = Mr(n, d))),
      (c.state = n.memoizedState),
      (d = r.getDerivedStateFromProps),
      typeof d == 'function' && (Gf(n, r, d, l), (c.state = n.memoizedState)),
      typeof r.getDerivedStateFromProps == 'function' ||
        typeof c.getSnapshotBeforeUpdate == 'function' ||
        (typeof c.UNSAFE_componentWillMount != 'function' &&
          typeof c.componentWillMount != 'function') ||
        ((r = c.state),
        typeof c.componentWillMount == 'function' && c.componentWillMount(),
        typeof c.UNSAFE_componentWillMount == 'function' && c.UNSAFE_componentWillMount(),
        r !== c.state && As.enqueueReplaceState(c, c.state, null),
        wi(n, l, c, o),
        (c.state = n.memoizedState)),
      typeof c.componentDidMount == 'function' && (n.flags |= 4194308);
  }
  function ru(n, r, l) {
    if (((n = l.ref), n !== null && typeof n != 'function' && typeof n != 'object')) {
      if (l._owner) {
        if (((l = l._owner), l)) {
          if (l.tag !== 1) throw Error(w(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(w(147, n));
        var c = o,
          d = '' + n;
        return r !== null && r.ref !== null && typeof r.ref == 'function' && r.ref._stringRef === d
          ? r.ref
          : ((r = function (h) {
              var S = c.refs;
              S === Cv && (S = c.refs = {}), h === null ? delete S[d] : (S[d] = h);
            }),
            (r._stringRef = d),
            r);
      }
      if (typeof n != 'string') throw Error(w(284));
      if (!l._owner) throw Error(w(290, n));
    }
    return n;
  }
  function Fs(n, r) {
    throw (
      ((n = Object.prototype.toString.call(r)),
      Error(
        w(31, n === '[object Object]' ? 'object with keys {' + Object.keys(r).join(', ') + '}' : n),
      ))
    );
  }
  function xv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function wv(n) {
    function r(x, T) {
      if (n) {
        var b = x.deletions;
        b === null ? ((x.deletions = [T]), (x.flags |= 16)) : b.push(T);
      }
    }
    function l(x, T) {
      if (!n) return null;
      for (; T !== null; ) r(x, T), (T = T.sibling);
      return null;
    }
    function o(x, T) {
      for (x = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? x.set(T.key, T) : x.set(T.index, T), (T = T.sibling);
      return x;
    }
    function c(x, T) {
      return (x = Ni(x, T)), (x.index = 0), (x.sibling = null), x;
    }
    function d(x, T, b) {
      return (
        (x.index = b),
        n
          ? ((b = x.alternate),
            b !== null ? ((b = b.index), b < T ? ((x.flags |= 2), T) : b) : ((x.flags |= 2), T))
          : ((x.flags |= 1048576), T)
      );
    }
    function h(x) {
      return n && x.alternate === null && (x.flags |= 2), x;
    }
    function S(x, T, b, I) {
      return T === null || T.tag !== 6
        ? ((T = Ao(b, x.mode, I)), (T.return = x), T)
        : ((T = c(T, b)), (T.return = x), T);
    }
    function C(x, T, b, I) {
      var ve = b.type;
      return ve === je
        ? j(x, T, b.props.children, I, b.key)
        : T !== null &&
            (T.elementType === ve ||
              (typeof ve == 'object' && ve !== null && ve.$$typeof === Dt && xv(ve) === T.type))
          ? ((I = c(T, b.props)), (I.ref = ru(x, T, b)), (I.return = x), I)
          : ((I = mc(b.type, b.key, b.props, null, x.mode, I)),
            (I.ref = ru(x, T, b)),
            (I.return = x),
            I);
    }
    function M(x, T, b, I) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== b.containerInfo ||
        T.stateNode.implementation !== b.implementation
        ? ((T = xl(b, x.mode, I)), (T.return = x), T)
        : ((T = c(T, b.children || [])), (T.return = x), T);
    }
    function j(x, T, b, I, ve) {
      return T === null || T.tag !== 7
        ? ((T = Rl(b, x.mode, I, ve)), (T.return = x), T)
        : ((T = c(T, b)), (T.return = x), T);
    }
    function Y(x, T, b) {
      if ((typeof T == 'string' && T !== '') || typeof T == 'number')
        return (T = Ao('' + T, x.mode, b)), (T.return = x), T;
      if (typeof T == 'object' && T !== null) {
        switch (T.$$typeof) {
          case Te:
            return (
              (b = mc(T.type, T.key, T.props, null, x.mode, b)),
              (b.ref = ru(x, null, T)),
              (b.return = x),
              b
            );
          case nt:
            return (T = xl(T, x.mode, b)), (T.return = x), T;
          case Dt:
            var I = T._init;
            return Y(x, I(T._payload), b);
        }
        if (Qi(T) || be(T)) return (T = Rl(T, x.mode, b, null)), (T.return = x), T;
        Fs(x, T);
      }
      return null;
    }
    function B(x, T, b, I) {
      var ve = T !== null ? T.key : null;
      if ((typeof b == 'string' && b !== '') || typeof b == 'number')
        return ve !== null ? null : S(x, T, '' + b, I);
      if (typeof b == 'object' && b !== null) {
        switch (b.$$typeof) {
          case Te:
            return b.key === ve ? C(x, T, b, I) : null;
          case nt:
            return b.key === ve ? M(x, T, b, I) : null;
          case Dt:
            return (ve = b._init), B(x, T, ve(b._payload), I);
        }
        if (Qi(b) || be(b)) return ve !== null ? null : j(x, T, b, I, null);
        Fs(x, b);
      }
      return null;
    }
    function te(x, T, b, I, ve) {
      if ((typeof I == 'string' && I !== '') || typeof I == 'number')
        return (x = x.get(b) || null), S(T, x, '' + I, ve);
      if (typeof I == 'object' && I !== null) {
        switch (I.$$typeof) {
          case Te:
            return (x = x.get(I.key === null ? b : I.key) || null), C(T, x, I, ve);
          case nt:
            return (x = x.get(I.key === null ? b : I.key) || null), M(T, x, I, ve);
          case Dt:
            var fe = I._init;
            return te(x, T, b, fe(I._payload), ve);
        }
        if (Qi(I) || be(I)) return (x = x.get(b) || null), j(T, x, I, ve, null);
        Fs(T, I);
      }
      return null;
    }
    function ce(x, T, b, I) {
      for (
        var ve = null, fe = null, Se = T, Le = (T = 0), an = null;
        Se !== null && Le < b.length;
        Le++
      ) {
        Se.index > Le ? ((an = Se), (Se = null)) : (an = Se.sibling);
        var Ke = B(x, Se, b[Le], I);
        if (Ke === null) {
          Se === null && (Se = an);
          break;
        }
        n && Se && Ke.alternate === null && r(x, Se),
          (T = d(Ke, T, Le)),
          fe === null ? (ve = Ke) : (fe.sibling = Ke),
          (fe = Ke),
          (Se = an);
      }
      if (Le === b.length) return l(x, Se), mt && fr(x, Le), ve;
      if (Se === null) {
        for (; Le < b.length; Le++)
          (Se = Y(x, b[Le], I)),
            Se !== null &&
              ((T = d(Se, T, Le)), fe === null ? (ve = Se) : (fe.sibling = Se), (fe = Se));
        return mt && fr(x, Le), ve;
      }
      for (Se = o(x, Se); Le < b.length; Le++)
        (an = te(Se, x, Le, b[Le], I)),
          an !== null &&
            (n && an.alternate !== null && Se.delete(an.key === null ? Le : an.key),
            (T = d(an, T, Le)),
            fe === null ? (ve = an) : (fe.sibling = an),
            (fe = an));
      return (
        n &&
          Se.forEach(function (zi) {
            return r(x, zi);
          }),
        mt && fr(x, Le),
        ve
      );
    }
    function pe(x, T, b, I) {
      var ve = be(b);
      if (typeof ve != 'function') throw Error(w(150));
      if (((b = ve.call(b)), b == null)) throw Error(w(151));
      for (
        var fe = (ve = null), Se = T, Le = (T = 0), an = null, Ke = b.next();
        Se !== null && !Ke.done;
        Le++, Ke = b.next()
      ) {
        Se.index > Le ? ((an = Se), (Se = null)) : (an = Se.sibling);
        var zi = B(x, Se, Ke.value, I);
        if (zi === null) {
          Se === null && (Se = an);
          break;
        }
        n && Se && zi.alternate === null && r(x, Se),
          (T = d(zi, T, Le)),
          fe === null ? (ve = zi) : (fe.sibling = zi),
          (fe = zi),
          (Se = an);
      }
      if (Ke.done) return l(x, Se), mt && fr(x, Le), ve;
      if (Se === null) {
        for (; !Ke.done; Le++, Ke = b.next())
          (Ke = Y(x, Ke.value, I)),
            Ke !== null &&
              ((T = d(Ke, T, Le)), fe === null ? (ve = Ke) : (fe.sibling = Ke), (fe = Ke));
        return mt && fr(x, Le), ve;
      }
      for (Se = o(x, Se); !Ke.done; Le++, Ke = b.next())
        (Ke = te(Se, x, Le, Ke.value, I)),
          Ke !== null &&
            (n && Ke.alternate !== null && Se.delete(Ke.key === null ? Le : Ke.key),
            (T = d(Ke, T, Le)),
            fe === null ? (ve = Ke) : (fe.sibling = Ke),
            (fe = Ke));
      return (
        n &&
          Se.forEach(function (my) {
            return r(x, my);
          }),
        mt && fr(x, Le),
        ve
      );
    }
    function Ut(x, T, b, I) {
      if (
        (typeof b == 'object' &&
          b !== null &&
          b.type === je &&
          b.key === null &&
          (b = b.props.children),
        typeof b == 'object' && b !== null)
      ) {
        switch (b.$$typeof) {
          case Te:
            e: {
              for (var ve = b.key, fe = T; fe !== null; ) {
                if (fe.key === ve) {
                  if (((ve = b.type), ve === je)) {
                    if (fe.tag === 7) {
                      l(x, fe.sibling), (T = c(fe, b.props.children)), (T.return = x), (x = T);
                      break e;
                    }
                  } else if (
                    fe.elementType === ve ||
                    (typeof ve == 'object' &&
                      ve !== null &&
                      ve.$$typeof === Dt &&
                      xv(ve) === fe.type)
                  ) {
                    l(x, fe.sibling),
                      (T = c(fe, b.props)),
                      (T.ref = ru(x, fe, b)),
                      (T.return = x),
                      (x = T);
                    break e;
                  }
                  l(x, fe);
                  break;
                } else r(x, fe);
                fe = fe.sibling;
              }
              b.type === je
                ? ((T = Rl(b.props.children, x.mode, I, b.key)), (T.return = x), (x = T))
                : ((I = mc(b.type, b.key, b.props, null, x.mode, I)),
                  (I.ref = ru(x, T, b)),
                  (I.return = x),
                  (x = I));
            }
            return h(x);
          case nt:
            e: {
              for (fe = b.key; T !== null; ) {
                if (T.key === fe)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === b.containerInfo &&
                    T.stateNode.implementation === b.implementation
                  ) {
                    l(x, T.sibling), (T = c(T, b.children || [])), (T.return = x), (x = T);
                    break e;
                  } else {
                    l(x, T);
                    break;
                  }
                else r(x, T);
                T = T.sibling;
              }
              (T = xl(b, x.mode, I)), (T.return = x), (x = T);
            }
            return h(x);
          case Dt:
            return (fe = b._init), Ut(x, T, fe(b._payload), I);
        }
        if (Qi(b)) return ce(x, T, b, I);
        if (be(b)) return pe(x, T, b, I);
        Fs(x, b);
      }
      return (typeof b == 'string' && b !== '') || typeof b == 'number'
        ? ((b = '' + b),
          T !== null && T.tag === 6
            ? (l(x, T.sibling), (T = c(T, b)), (T.return = x), (x = T))
            : (l(x, T), (T = Ao(b, x.mode, I)), (T.return = x), (x = T)),
          h(x))
        : l(x, T);
    }
    return Ut;
  }
  var au = wv(!0),
    Dv = wv(!1),
    go = {},
    ia = Ae(go),
    So = Ae(go),
    iu = Ae(go);
  function ll(n) {
    if (n === go) throw Error(w(174));
    return n;
  }
  function Wf(n, r) {
    switch ((et(iu, r), et(So, n), et(ia, go), (n = r.nodeType), n)) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Qn(null, '');
        break;
      default:
        (n = n === 8 ? r.parentNode : r),
          (r = n.namespaceURI || null),
          (n = n.tagName),
          (r = Qn(r, n));
    }
    Je(ia), et(ia, r);
  }
  function Di() {
    Je(ia), Je(So), Je(iu);
  }
  function xe(n) {
    ll(iu.current);
    var r = ll(ia.current),
      l = Qn(r, n.type);
    r !== l && (et(So, n), et(ia, l));
  }
  function Be(n) {
    So.current === n && (Je(ia), Je(So));
  }
  var we = Ae(0);
  function Rt(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || l.data === '$?' || l.data === '$!'))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
    return null;
  }
  var Ur = [];
  function Vs() {
    for (var n = 0; n < Ur.length; n++) Ur[n]._workInProgressVersionPrimary = null;
    Ur.length = 0;
  }
  var Bs = ge.ReactCurrentDispatcher,
    Xf = ge.ReactCurrentBatchConfig,
    ul = 0,
    yt = null,
    A = null,
    Ge = null,
    ke = !1,
    ya = !1,
    vr = 0,
    ol = 0;
  function gt() {
    throw Error(w(321));
  }
  function sl(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!_r(n[l], r[l])) return !1;
    return !0;
  }
  function ki(n, r, l, o, c, d) {
    if (
      ((ul = d),
      (yt = r),
      (r.memoizedState = null),
      (r.updateQueue = null),
      (r.lanes = 0),
      (Bs.current = n === null || n.memoizedState === null ? Zm : Jm),
      (n = l(o, c)),
      ya)
    ) {
      d = 0;
      do {
        if (((ya = !1), (vr = 0), 25 <= d)) throw Error(w(301));
        (d += 1), (Ge = A = null), (r.updateQueue = null), (Bs.current = qf), (n = l(o, c));
      } while (ya);
    }
    if (
      ((Bs.current = nc),
      (r = A !== null && A.next !== null),
      (ul = 0),
      (Ge = A = yt = null),
      (ke = !1),
      r)
    )
      throw Error(w(300));
    return n;
  }
  function cl() {
    var n = vr !== 0;
    return (vr = 0), n;
  }
  function Ar() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ge === null ? (yt.memoizedState = Ge = n) : (Ge = Ge.next = n), Ge;
  }
  function Zn() {
    if (A === null) {
      var n = yt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = A.next;
    var r = Ge === null ? yt.memoizedState : Ge.next;
    if (r !== null) (Ge = r), (A = n);
    else {
      if (n === null) throw Error(w(310));
      (A = n),
        (n = {
          memoizedState: A.memoizedState,
          baseState: A.baseState,
          baseQueue: A.baseQueue,
          queue: A.queue,
          next: null,
        }),
        Ge === null ? (yt.memoizedState = Ge = n) : (Ge = Ge.next = n);
    }
    return Ge;
  }
  function fl(n, r) {
    return typeof r == 'function' ? r(n) : r;
  }
  function Co(n) {
    var r = Zn(),
      l = r.queue;
    if (l === null) throw Error(w(311));
    l.lastRenderedReducer = n;
    var o = A,
      c = o.baseQueue,
      d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        (c.next = d.next), (d.next = h);
      }
      (o.baseQueue = c = d), (l.pending = null);
    }
    if (c !== null) {
      (d = c.next), (o = o.baseState);
      var S = (h = null),
        C = null,
        M = d;
      do {
        var j = M.lane;
        if ((ul & j) === j)
          C !== null &&
            (C = C.next =
              {
                lane: 0,
                action: M.action,
                hasEagerState: M.hasEagerState,
                eagerState: M.eagerState,
                next: null,
              }),
            (o = M.hasEagerState ? M.eagerState : n(o, M.action));
        else {
          var Y = {
            lane: j,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null,
          };
          C === null ? ((S = C = Y), (h = o)) : (C = C.next = Y), (yt.lanes |= j), (Qa |= j);
        }
        M = M.next;
      } while (M !== null && M !== d);
      C === null ? (h = o) : (C.next = S),
        _r(o, r.memoizedState) || (jt = !0),
        (r.memoizedState = o),
        (r.baseState = h),
        (r.baseQueue = C),
        (l.lastRenderedState = o);
    }
    if (((n = l.interleaved), n !== null)) {
      c = n;
      do (d = c.lane), (yt.lanes |= d), (Qa |= d), (c = c.next);
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Eo(n) {
    var r = Zn(),
      l = r.queue;
    if (l === null) throw Error(w(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch,
      c = l.pending,
      d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var h = (c = c.next);
      do (d = n(d, h.action)), (h = h.next);
      while (h !== c);
      _r(d, r.memoizedState) || (jt = !0),
        (r.memoizedState = d),
        r.baseQueue === null && (r.baseState = d),
        (l.lastRenderedState = d);
    }
    return [d, o];
  }
  function js() {}
  function Ps(n, r) {
    var l = yt,
      o = Zn(),
      c = r(),
      d = !_r(o.memoizedState, c);
    if (
      (d && ((o.memoizedState = c), (jt = !0)),
      (o = o.queue),
      To(Qs.bind(null, l, o, n), [n]),
      o.getSnapshot !== r || d || (Ge !== null && Ge.memoizedState.tag & 1))
    ) {
      if (((l.flags |= 2048), dl(9, $s.bind(null, l, o, c, r), void 0, null), xt === null))
        throw Error(w(349));
      ul & 30 || Ys(l, r, c);
    }
    return c;
  }
  function Ys(n, r, l) {
    (n.flags |= 16384),
      (n = { getSnapshot: r, value: l }),
      (r = yt.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }), (yt.updateQueue = r), (r.stores = [n]))
        : ((l = r.stores), l === null ? (r.stores = [n]) : l.push(n));
  }
  function $s(n, r, l, o) {
    (r.value = l), (r.getSnapshot = o), Is(r) && Gs(n);
  }
  function Qs(n, r, l) {
    return l(function () {
      Is(r) && Gs(n);
    });
  }
  function Is(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !_r(n, l);
    } catch {
      return !0;
    }
  }
  function Gs(n) {
    var r = Ba(n, 1);
    r !== null && Dn(r, n, 1, -1);
  }
  function Ws(n) {
    var r = Ar();
    return (
      typeof n == 'function' && (n = n()),
      (r.memoizedState = r.baseState = n),
      (n = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fl,
        lastRenderedState: n,
      }),
      (r.queue = n),
      (n = n.dispatch = tc.bind(null, yt, n)),
      [r.memoizedState, n]
    );
  }
  function dl(n, r, l, o) {
    return (
      (n = { tag: n, create: r, destroy: l, deps: o, next: null }),
      (r = yt.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }),
          (yt.updateQueue = r),
          (r.lastEffect = n.next = n))
        : ((l = r.lastEffect),
          l === null
            ? (r.lastEffect = n.next = n)
            : ((o = l.next), (l.next = n), (n.next = o), (r.lastEffect = n))),
      n
    );
  }
  function Xs() {
    return Zn().memoizedState;
  }
  function pl(n, r, l, o) {
    var c = Ar();
    (yt.flags |= n), (c.memoizedState = dl(1 | r, l, void 0, o === void 0 ? null : o));
  }
  function Pa(n, r, l, o) {
    var c = Zn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (A !== null) {
      var h = A.memoizedState;
      if (((d = h.destroy), o !== null && sl(o, h.deps))) {
        c.memoizedState = dl(r, l, d, o);
        return;
      }
    }
    (yt.flags |= n), (c.memoizedState = dl(1 | r, l, d, o));
  }
  function Ks(n, r) {
    return pl(8390656, 8, n, r);
  }
  function To(n, r) {
    return Pa(2048, 8, n, r);
  }
  function qs(n, r) {
    return Pa(4, 2, n, r);
  }
  function Zs(n, r) {
    return Pa(4, 4, n, r);
  }
  function Kf(n, r) {
    if (typeof r == 'function')
      return (
        (n = n()),
        r(n),
        function () {
          r(null);
        }
      );
    if (r != null)
      return (
        (n = n()),
        (r.current = n),
        function () {
          r.current = null;
        }
      );
  }
  function lu(n, r, l) {
    return (l = l != null ? l.concat([n]) : null), Pa(4, 4, Kf.bind(null, r, n), l);
  }
  function Js() {}
  function uu(n, r) {
    var l = Zn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && sl(r, o[1]) ? o[0] : ((l.memoizedState = [n, r]), n);
  }
  function bi(n, r) {
    var l = Zn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && sl(r, o[1])
      ? o[0]
      : ((n = n()), (l.memoizedState = [n, r]), n);
  }
  function Jn(n, r, l) {
    return ul & 21
      ? (_r(l, r) || ((l = ss()), (yt.lanes |= l), (Qa |= l), (n.baseState = !0)), r)
      : (n.baseState && ((n.baseState = !1), (jt = !0)), (n.memoizedState = l));
  }
  function qm(n, r) {
    var l = at;
    (at = l !== 0 && 4 > l ? l : 4), n(!0);
    var o = Xf.transition;
    Xf.transition = {};
    try {
      n(!1), r();
    } finally {
      (at = l), (Xf.transition = o);
    }
  }
  function pt() {
    return Zn().memoizedState;
  }
  function ec(n, r, l) {
    var o = Pt(n);
    if (((l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }), ou(n)))
      Ro(r, l);
    else if (((l = Sv(n, r, l, o)), l !== null)) {
      var c = wn();
      Dn(l, n, o, c), kv(l, r, o);
    }
  }
  function tc(n, r, l) {
    var o = Pt(n),
      c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ou(n)) Ro(r, c);
    else {
      var d = n.alternate;
      if (
        n.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = r.lastRenderedReducer), d !== null)
      )
        try {
          var h = r.lastRenderedState,
            S = d(h, l);
          if (((c.hasEagerState = !0), (c.eagerState = S), _r(S, h))) {
            var C = r.interleaved;
            C === null ? ((c.next = c), $f(r)) : ((c.next = C.next), (C.next = c)),
              (r.interleaved = c);
            return;
          }
        } catch {
        } finally {
        }
      (l = Sv(n, r, c, o)), l !== null && ((c = wn()), Dn(l, n, o, c), kv(l, r, o));
    }
  }
  function ou(n) {
    var r = n.alternate;
    return n === yt || (r !== null && r === yt);
  }
  function Ro(n, r) {
    ya = ke = !0;
    var l = n.pending;
    l === null ? (r.next = r) : ((r.next = l.next), (l.next = r)), (n.pending = r);
  }
  function kv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      (o &= n.pendingLanes), (l |= o), (r.lanes = l), Wu(n, l);
    }
  }
  var nc = {
      readContext: zt,
      useCallback: gt,
      useContext: gt,
      useEffect: gt,
      useImperativeHandle: gt,
      useInsertionEffect: gt,
      useLayoutEffect: gt,
      useMemo: gt,
      useReducer: gt,
      useRef: gt,
      useState: gt,
      useDebugValue: gt,
      useDeferredValue: gt,
      useTransition: gt,
      useMutableSource: gt,
      useSyncExternalStore: gt,
      useId: gt,
      unstable_isNewReconciler: !1,
    },
    Zm = {
      readContext: zt,
      useCallback: function (n, r) {
        return (Ar().memoizedState = [n, r === void 0 ? null : r]), n;
      },
      useContext: zt,
      useEffect: Ks,
      useImperativeHandle: function (n, r, l) {
        return (l = l != null ? l.concat([n]) : null), pl(4194308, 4, Kf.bind(null, r, n), l);
      },
      useLayoutEffect: function (n, r) {
        return pl(4194308, 4, n, r);
      },
      useInsertionEffect: function (n, r) {
        return pl(4, 2, n, r);
      },
      useMemo: function (n, r) {
        var l = Ar();
        return (r = r === void 0 ? null : r), (n = n()), (l.memoizedState = [n, r]), n;
      },
      useReducer: function (n, r, l) {
        var o = Ar();
        return (
          (r = l !== void 0 ? l(r) : r),
          (o.memoizedState = o.baseState = r),
          (n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: n,
            lastRenderedState: r,
          }),
          (o.queue = n),
          (n = n.dispatch = ec.bind(null, yt, n)),
          [o.memoizedState, n]
        );
      },
      useRef: function (n) {
        var r = Ar();
        return (n = { current: n }), (r.memoizedState = n);
      },
      useState: Ws,
      useDebugValue: Js,
      useDeferredValue: function (n) {
        return (Ar().memoizedState = n);
      },
      useTransition: function () {
        var n = Ws(!1),
          r = n[0];
        return (n = qm.bind(null, n[1])), (Ar().memoizedState = n), [r, n];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (n, r, l) {
        var o = yt,
          c = Ar();
        if (mt) {
          if (l === void 0) throw Error(w(407));
          l = l();
        } else {
          if (((l = r()), xt === null)) throw Error(w(349));
          ul & 30 || Ys(o, r, l);
        }
        c.memoizedState = l;
        var d = { value: l, getSnapshot: r };
        return (
          (c.queue = d),
          Ks(Qs.bind(null, o, d, n), [n]),
          (o.flags |= 2048),
          dl(9, $s.bind(null, o, d, l, r), void 0, null),
          l
        );
      },
      useId: function () {
        var n = Ar(),
          r = xt.identifierPrefix;
        if (mt) {
          var l = Va,
            o = un;
          (l = (o & ~(1 << (32 - Dr(o) - 1))).toString(32) + l),
            (r = ':' + r + 'R' + l),
            (l = vr++),
            0 < l && (r += 'H' + l.toString(32)),
            (r += ':');
        } else (l = ol++), (r = ':' + r + 'r' + l.toString(32) + ':');
        return (n.memoizedState = r);
      },
      unstable_isNewReconciler: !1,
    },
    Jm = {
      readContext: zt,
      useCallback: uu,
      useContext: zt,
      useEffect: To,
      useImperativeHandle: lu,
      useInsertionEffect: qs,
      useLayoutEffect: Zs,
      useMemo: bi,
      useReducer: Co,
      useRef: Xs,
      useState: function () {
        return Co(fl);
      },
      useDebugValue: Js,
      useDeferredValue: function (n) {
        var r = Zn();
        return Jn(r, A.memoizedState, n);
      },
      useTransition: function () {
        var n = Co(fl)[0],
          r = Zn().memoizedState;
        return [n, r];
      },
      useMutableSource: js,
      useSyncExternalStore: Ps,
      useId: pt,
      unstable_isNewReconciler: !1,
    },
    qf = {
      readContext: zt,
      useCallback: uu,
      useContext: zt,
      useEffect: To,
      useImperativeHandle: lu,
      useInsertionEffect: qs,
      useLayoutEffect: Zs,
      useMemo: bi,
      useReducer: Eo,
      useRef: Xs,
      useState: function () {
        return Eo(fl);
      },
      useDebugValue: Js,
      useDeferredValue: function (n) {
        var r = Zn();
        return A === null ? (r.memoizedState = n) : Jn(r, A.memoizedState, n);
      },
      useTransition: function () {
        var n = Eo(fl)[0],
          r = Zn().memoizedState;
        return [n, r];
      },
      useMutableSource: js,
      useSyncExternalStore: Ps,
      useId: pt,
      unstable_isNewReconciler: !1,
    };
  function su(n, r) {
    try {
      var l = '',
        o = r;
      do (l += ii(o)), (o = o.return);
      while (o);
      var c = l;
    } catch (d) {
      c =
        `
Error generating stack: ` +
        d.message +
        `
` +
        d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function xo(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function rc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  var ey = typeof WeakMap == 'function' ? WeakMap : Map;
  function bv(n, r, l) {
    (l = ja(-1, l)), (l.tag = 3), (l.payload = { element: null });
    var o = r.value;
    return (
      (l.callback = function () {
        cc || ((cc = !0), (gl = o)), rc(n, r);
      }),
      l
    );
  }
  function wo(n, r, l) {
    (l = ja(-1, l)), (l.tag = 3);
    var o = n.type.getDerivedStateFromError;
    if (typeof o == 'function') {
      var c = r.value;
      (l.payload = function () {
        return o(c);
      }),
        (l.callback = function () {
          rc(n, r);
        });
    }
    var d = n.stateNode;
    return (
      d !== null &&
        typeof d.componentDidCatch == 'function' &&
        (l.callback = function () {
          rc(n, r),
            typeof o != 'function' &&
              (Ca === null ? (Ca = /* @__PURE__ */ new Set([this])) : Ca.add(this));
          var h = r.stack;
          this.componentDidCatch(r.value, { componentStack: h !== null ? h : '' });
        }),
      l
    );
  }
  function _v(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ey();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else (c = o.get(r)), c === void 0 && ((c = /* @__PURE__ */ new Set()), o.set(r, c));
    c.has(l) || (c.add(l), (n = uy.bind(null, n, r, l)), r.then(n, n));
  }
  function Zf(n) {
    do {
      var r;
      if (
        ((r = n.tag === 13) &&
          ((r = n.memoizedState), (r = r !== null ? r.dehydrated !== null : !0)),
        r)
      )
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Jf(n, r, l, o, c) {
    return n.mode & 1
      ? ((n.flags |= 65536), (n.lanes = c), n)
      : (n === r
          ? (n.flags |= 65536)
          : ((n.flags |= 128),
            (l.flags |= 131072),
            (l.flags &= -52805),
            l.tag === 1 &&
              (l.alternate === null ? (l.tag = 17) : ((r = ja(-1, 1)), (r.tag = 2), xi(l, r, 1))),
            (l.lanes |= 1)),
        n);
  }
  var ty = ge.ReactCurrentOwner,
    jt = !1;
  function Gt(n, r, l, o) {
    r.child = n === null ? Dv(r, null, l, o) : au(r, n.child, l, o);
  }
  function _i(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return (
      W(r, c),
      (o = ki(n, r, l, o, d, c)),
      (l = cl()),
      n !== null && !jt
        ? ((r.updateQueue = n.updateQueue), (r.flags &= -2053), (n.lanes &= ~c), sn(n, r, c))
        : (mt && l && _s(r), (r.flags |= 1), Gt(n, r, o, c), r.child)
    );
  }
  function ac(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == 'function' &&
        !gd(d) &&
        d.defaultProps === void 0 &&
        l.compare === null &&
        l.defaultProps === void 0
        ? ((r.tag = 15), (r.type = d), er(n, r, d, o, c))
        : ((n = mc(l.type, null, o, r, r.mode, c)), (n.ref = r.ref), (n.return = r), (r.child = n));
    }
    if (((d = n.child), !(n.lanes & c))) {
      var h = d.memoizedProps;
      if (((l = l.compare), (l = l !== null ? l : io), l(h, o) && n.ref === r.ref))
        return sn(n, r, c);
    }
    return (r.flags |= 1), (n = Ni(d, o)), (n.ref = r.ref), (n.return = r), (r.child = n);
  }
  function er(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (io(d, o) && n.ref === r.ref)
        if (((jt = !1), (r.pendingProps = o = d), (n.lanes & c) !== 0))
          n.flags & 131072 && (jt = !0);
        else return (r.lanes = n.lanes), sn(n, r, c);
    }
    return cu(n, r, l, o, c);
  }
  function vl(n, r, l) {
    var o = r.pendingProps,
      c = o.children,
      d = n !== null ? n.memoizedState : null;
    if (o.mode === 'hidden')
      if (!(r.mode & 1))
        (r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          et(mu, hr),
          (hr |= l);
      else {
        if (!(l & 1073741824))
          return (
            (n = d !== null ? d.baseLanes | l : l),
            (r.lanes = r.childLanes = 1073741824),
            (r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }),
            (r.updateQueue = null),
            et(mu, hr),
            (hr |= n),
            null
          );
        (r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (o = d !== null ? d.baseLanes : l),
          et(mu, hr),
          (hr |= o);
      }
    else
      d !== null ? ((o = d.baseLanes | l), (r.memoizedState = null)) : (o = l),
        et(mu, hr),
        (hr |= o);
    return Gt(n, r, c, l), r.child;
  }
  function He(n, r) {
    var l = r.ref;
    ((n === null && l !== null) || (n !== null && n.ref !== l)) &&
      ((r.flags |= 512), (r.flags |= 2097152));
  }
  function cu(n, r, l, o, c) {
    var d = Ct(l) ? Gn : Me.current;
    return (
      (d = Mr(r, d)),
      W(r, c),
      (l = ki(n, r, l, o, d, c)),
      (o = cl()),
      n !== null && !jt
        ? ((r.updateQueue = n.updateQueue), (r.flags &= -2053), (n.lanes &= ~c), sn(n, r, c))
        : (mt && o && _s(r), (r.flags |= 1), Gt(n, r, l, c), r.child)
    );
  }
  function ed(n, r, l, o, c) {
    if (Ct(l)) {
      var d = !0;
      bs(r);
    } else d = !1;
    if ((W(r, c), r.stateNode === null)) Tn(n, r), Tv(r, l, o), Hs(r, l, o, c), (o = !0);
    else if (n === null) {
      var h = r.stateNode,
        S = r.memoizedProps;
      h.props = S;
      var C = h.context,
        M = l.contextType;
      typeof M == 'object' && M !== null
        ? (M = zt(M))
        : ((M = Ct(l) ? Gn : Me.current), (M = Mr(r, M)));
      var j = l.getDerivedStateFromProps,
        Y = typeof j == 'function' || typeof h.getSnapshotBeforeUpdate == 'function';
      Y ||
        (typeof h.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof h.componentWillReceiveProps != 'function') ||
        ((S !== o || C !== M) && Rv(r, h, o, M)),
        (Ri = !1);
      var B = r.memoizedState;
      (h.state = B),
        wi(r, o, h, c),
        (C = r.memoizedState),
        S !== o || B !== C || Ot.current || Ri
          ? (typeof j == 'function' && (Gf(r, l, j, o), (C = r.memoizedState)),
            (S = Ri || Ev(r, l, S, o, B, C, M))
              ? (Y ||
                  (typeof h.UNSAFE_componentWillMount != 'function' &&
                    typeof h.componentWillMount != 'function') ||
                  (typeof h.componentWillMount == 'function' && h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == 'function' &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == 'function' && (r.flags |= 4194308))
              : (typeof h.componentDidMount == 'function' && (r.flags |= 4194308),
                (r.memoizedProps = o),
                (r.memoizedState = C)),
            (h.props = o),
            (h.state = C),
            (h.context = M),
            (o = S))
          : (typeof h.componentDidMount == 'function' && (r.flags |= 4194308), (o = !1));
    } else {
      (h = r.stateNode),
        It(n, r),
        (S = r.memoizedProps),
        (M = r.type === r.elementType ? S : pr(r.type, S)),
        (h.props = M),
        (Y = r.pendingProps),
        (B = h.context),
        (C = l.contextType),
        typeof C == 'object' && C !== null
          ? (C = zt(C))
          : ((C = Ct(l) ? Gn : Me.current), (C = Mr(r, C)));
      var te = l.getDerivedStateFromProps;
      (j = typeof te == 'function' || typeof h.getSnapshotBeforeUpdate == 'function') ||
        (typeof h.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof h.componentWillReceiveProps != 'function') ||
        ((S !== Y || B !== C) && Rv(r, h, o, C)),
        (Ri = !1),
        (B = r.memoizedState),
        (h.state = B),
        wi(r, o, h, c);
      var ce = r.memoizedState;
      S !== Y || B !== ce || Ot.current || Ri
        ? (typeof te == 'function' && (Gf(r, l, te, o), (ce = r.memoizedState)),
          (M = Ri || Ev(r, l, M, o, B, ce, C) || !1)
            ? (j ||
                (typeof h.UNSAFE_componentWillUpdate != 'function' &&
                  typeof h.componentWillUpdate != 'function') ||
                (typeof h.componentWillUpdate == 'function' && h.componentWillUpdate(o, ce, C),
                typeof h.UNSAFE_componentWillUpdate == 'function' &&
                  h.UNSAFE_componentWillUpdate(o, ce, C)),
              typeof h.componentDidUpdate == 'function' && (r.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == 'function' && (r.flags |= 1024))
            : (typeof h.componentDidUpdate != 'function' ||
                (S === n.memoizedProps && B === n.memoizedState) ||
                (r.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != 'function' ||
                (S === n.memoizedProps && B === n.memoizedState) ||
                (r.flags |= 1024),
              (r.memoizedProps = o),
              (r.memoizedState = ce)),
          (h.props = o),
          (h.state = ce),
          (h.context = C),
          (o = M))
        : (typeof h.componentDidUpdate != 'function' ||
            (S === n.memoizedProps && B === n.memoizedState) ||
            (r.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != 'function' ||
            (S === n.memoizedProps && B === n.memoizedState) ||
            (r.flags |= 1024),
          (o = !1));
    }
    return Ov(n, r, l, o, d, c);
  }
  function Ov(n, r, l, o, c, d) {
    He(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h) return c && hv(r, l, !1), sn(n, r, d);
    (o = r.stateNode), (ty.current = r);
    var S = h && typeof l.getDerivedStateFromError != 'function' ? null : o.render();
    return (
      (r.flags |= 1),
      n !== null && h
        ? ((r.child = au(r, n.child, null, d)), (r.child = au(r, null, S, d)))
        : Gt(n, r, S, d),
      (r.memoizedState = o.state),
      c && hv(r, l, !0),
      r.child
    );
  }
  function Mv(n) {
    var r = n.stateNode;
    r.pendingContext
      ? Si(n, r.pendingContext, r.pendingContext !== r.context)
      : r.context && Si(n, r.context, !1),
      Wf(n, r.containerInfo);
  }
  function ic(n, r, l, o, c) {
    return Tt(), jf(c), (r.flags |= 256), Gt(n, r, l, o), r.child;
  }
  var hl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function td(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function nd(n, r, l) {
    var o = r.pendingProps,
      c = we.current,
      d = !1,
      h = (r.flags & 128) !== 0,
      S;
    if (
      ((S = h) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0),
      S ? ((d = !0), (r.flags &= -129)) : (n === null || n.memoizedState !== null) && (c |= 1),
      et(we, c & 1),
      n === null)
    )
      return (
        Ms(r),
        (n = r.memoizedState),
        n !== null && ((n = n.dehydrated), n !== null)
          ? (r.mode & 1
              ? n.data === '$!'
                ? (r.lanes = 8)
                : (r.lanes = 1073741824)
              : (r.lanes = 1),
            null)
          : ((h = o.children),
            (n = o.fallback),
            d
              ? ((o = r.mode),
                (d = r.child),
                (h = { mode: 'hidden', children: h }),
                !(o & 1) && d !== null
                  ? ((d.childLanes = 0), (d.pendingProps = h))
                  : (d = Uo(h, o, 0, null)),
                (n = Rl(n, o, l, null)),
                (d.return = r),
                (n.return = r),
                (d.sibling = n),
                (r.child = d),
                (r.child.memoizedState = td(l)),
                (r.memoizedState = hl),
                n)
              : rd(r, h))
      );
    if (((c = n.memoizedState), c !== null && ((S = c.dehydrated), S !== null)))
      return ny(n, r, h, o, S, c, l);
    if (d) {
      (d = o.fallback), (h = r.mode), (c = n.child), (S = c.sibling);
      var C = { mode: 'hidden', children: o.children };
      return (
        !(h & 1) && r.child !== c
          ? ((o = r.child), (o.childLanes = 0), (o.pendingProps = C), (r.deletions = null))
          : ((o = Ni(c, C)), (o.subtreeFlags = c.subtreeFlags & 14680064)),
        S !== null ? (d = Ni(S, d)) : ((d = Rl(d, h, l, null)), (d.flags |= 2)),
        (d.return = r),
        (o.return = r),
        (o.sibling = d),
        (r.child = o),
        (o = d),
        (d = r.child),
        (h = n.child.memoizedState),
        (h =
          h === null
            ? td(l)
            : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }),
        (d.memoizedState = h),
        (d.childLanes = n.childLanes & ~l),
        (r.memoizedState = hl),
        o
      );
    }
    return (
      (d = n.child),
      (n = d.sibling),
      (o = Ni(d, { mode: 'visible', children: o.children })),
      !(r.mode & 1) && (o.lanes = l),
      (o.return = r),
      (o.sibling = null),
      n !== null &&
        ((l = r.deletions), l === null ? ((r.deletions = [n]), (r.flags |= 16)) : l.push(n)),
      (r.child = o),
      (r.memoizedState = null),
      o
    );
  }
  function rd(n, r) {
    return (
      (r = Uo({ mode: 'visible', children: r }, n.mode, 0, null)), (r.return = n), (n.child = r)
    );
  }
  function fu(n, r, l, o) {
    return (
      o !== null && jf(o),
      au(r, n.child, null, l),
      (n = rd(r, r.pendingProps.children)),
      (n.flags |= 2),
      (r.memoizedState = null),
      n
    );
  }
  function ny(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256
        ? ((r.flags &= -257), (o = xo(Error(w(422)))), fu(n, r, h, o))
        : r.memoizedState !== null
          ? ((r.child = n.child), (r.flags |= 128), null)
          : ((d = o.fallback),
            (c = r.mode),
            (o = Uo({ mode: 'visible', children: o.children }, c, 0, null)),
            (d = Rl(d, c, h, null)),
            (d.flags |= 2),
            (o.return = r),
            (d.return = r),
            (o.sibling = d),
            (r.child = o),
            r.mode & 1 && au(r, n.child, null, h),
            (r.child.memoizedState = td(h)),
            (r.memoizedState = hl),
            d);
    if (!(r.mode & 1)) return fu(n, r, h, null);
    if (c.data === '$!') {
      if (((o = c.nextSibling && c.nextSibling.dataset), o)) var S = o.dgst;
      return (o = S), (d = Error(w(419))), (o = xo(d, o, void 0)), fu(n, r, h, o);
    }
    if (((S = (h & n.childLanes) !== 0), jt || S)) {
      if (((o = xt), o !== null)) {
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
        (c = c & (o.suspendedLanes | h) ? 0 : c),
          c !== 0 && c !== d.retryLane && ((d.retryLane = c), Ba(n, c), Dn(o, n, c, -1));
      }
      return hd(), (o = xo(Error(w(421)))), fu(n, r, h, o);
    }
    return c.data === '$?'
      ? ((r.flags |= 128), (r.child = n.child), (r = oy.bind(null, n)), (c._reactRetry = r), null)
      : ((n = d.treeContext),
        (qn = aa(c.nextSibling)),
        (dr = r),
        (mt = !0),
        (zr = null),
        n !== null &&
          ((Kn[En++] = un),
          (Kn[En++] = Va),
          (Kn[En++] = Nr),
          (un = n.id),
          (Va = n.overflow),
          (Nr = r)),
        (r = rd(r, o.children)),
        (r.flags |= 4096),
        r);
  }
  function ad(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), tn(n.return, r, l);
  }
  function lc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null
      ? (n.memoizedState = {
          isBackwards: r,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: l,
          tailMode: c,
        })
      : ((d.isBackwards = r),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = o),
        (d.tail = l),
        (d.tailMode = c));
  }
  function id(n, r, l) {
    var o = r.pendingProps,
      c = o.revealOrder,
      d = o.tail;
    if ((Gt(n, r, o.children, l), (o = we.current), o & 2)) (o = (o & 1) | 2), (r.flags |= 128);
    else {
      if (n !== null && n.flags & 128)
        e: for (n = r.child; n !== null; ) {
          if (n.tag === 13) n.memoizedState !== null && ad(n, l, r);
          else if (n.tag === 19) ad(n, l, r);
          else if (n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === r) break e;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === r) break e;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      o &= 1;
    }
    if ((et(we, o), !(r.mode & 1))) r.memoizedState = null;
    else
      switch (c) {
        case 'forwards':
          for (l = r.child, c = null; l !== null; )
            (n = l.alternate), n !== null && Rt(n) === null && (c = l), (l = l.sibling);
          (l = c),
            l === null ? ((c = r.child), (r.child = null)) : ((c = l.sibling), (l.sibling = null)),
            lc(r, !1, c, l, d);
          break;
        case 'backwards':
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (((n = c.alternate), n !== null && Rt(n) === null)) {
              r.child = c;
              break;
            }
            (n = c.sibling), (c.sibling = l), (l = c), (c = n);
          }
          lc(r, !0, l, null, d);
          break;
        case 'together':
          lc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Tn(n, r) {
    !(r.mode & 1) && n !== null && ((n.alternate = null), (r.alternate = null), (r.flags |= 2));
  }
  function sn(n, r, l) {
    if ((n !== null && (r.dependencies = n.dependencies), (Qa |= r.lanes), !(l & r.childLanes)))
      return null;
    if (n !== null && r.child !== n.child) throw Error(w(153));
    if (r.child !== null) {
      for (n = r.child, l = Ni(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        (n = n.sibling), (l = l.sibling = Ni(n, n.pendingProps)), (l.return = r);
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
        xe(r);
        break;
      case 1:
        Ct(r.type) && bs(r);
        break;
      case 4:
        Wf(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context,
          c = r.memoizedProps.value;
        et(ma, o._currentValue), (o._currentValue = c);
        break;
      case 13:
        if (((o = r.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (et(we, we.current & 1), (r.flags |= 128), null)
            : l & r.child.childLanes
              ? nd(n, r, l)
              : (et(we, we.current & 1), (n = sn(n, r, l)), n !== null ? n.sibling : null);
        et(we, we.current & 1);
        break;
      case 19:
        if (((o = (l & r.childLanes) !== 0), n.flags & 128)) {
          if (o) return id(n, r, l);
          r.flags |= 128;
        }
        if (
          ((c = r.memoizedState),
          c !== null && ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          et(we, we.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return (r.lanes = 0), vl(n, r, l);
    }
    return sn(n, r, l);
  }
  var Do, ml, Hr, Wt;
  (Do = function (n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        (l.child.return = l), (l = l.child);
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      (l.sibling.return = l.return), (l = l.sibling);
    }
  }),
    (ml = function () {}),
    (Hr = function (n, r, l, o) {
      var c = n.memoizedProps;
      if (c !== o) {
        (n = r.stateNode), ll(ia.current);
        var d = null;
        switch (l) {
          case 'input':
            (c = $n(n, c)), (o = $n(n, o)), (d = []);
            break;
          case 'select':
            (c = le({}, c, { value: void 0 })), (o = le({}, o, { value: void 0 })), (d = []);
            break;
          case 'textarea':
            (c = Ii(n, c)), (o = Ii(n, o)), (d = []);
            break;
          default:
            typeof c.onClick != 'function' && typeof o.onClick == 'function' && (n.onclick = ks);
        }
        Sn(l, o);
        var h;
        l = null;
        for (M in c)
          if (!o.hasOwnProperty(M) && c.hasOwnProperty(M) && c[M] != null)
            if (M === 'style') {
              var S = c[M];
              for (h in S) S.hasOwnProperty(h) && (l || (l = {}), (l[h] = ''));
            } else
              M !== 'dangerouslySetInnerHTML' &&
                M !== 'children' &&
                M !== 'suppressContentEditableWarning' &&
                M !== 'suppressHydrationWarning' &&
                M !== 'autoFocus' &&
                (he.hasOwnProperty(M) ? d || (d = []) : (d = d || []).push(M, null));
        for (M in o) {
          var C = o[M];
          if (
            ((S = c != null ? c[M] : void 0),
            o.hasOwnProperty(M) && C !== S && (C != null || S != null))
          )
            if (M === 'style')
              if (S) {
                for (h in S)
                  !S.hasOwnProperty(h) ||
                    (C && C.hasOwnProperty(h)) ||
                    (l || (l = {}), (l[h] = ''));
                for (h in C) C.hasOwnProperty(h) && S[h] !== C[h] && (l || (l = {}), (l[h] = C[h]));
              } else l || (d || (d = []), d.push(M, l)), (l = C);
            else
              M === 'dangerouslySetInnerHTML'
                ? ((C = C ? C.__html : void 0),
                  (S = S ? S.__html : void 0),
                  C != null && S !== C && (d = d || []).push(M, C))
                : M === 'children'
                  ? (typeof C != 'string' && typeof C != 'number') || (d = d || []).push(M, '' + C)
                  : M !== 'suppressContentEditableWarning' &&
                    M !== 'suppressHydrationWarning' &&
                    (he.hasOwnProperty(M)
                      ? (C != null && M === 'onScroll' && dt('scroll', n), d || S === C || (d = []))
                      : (d = d || []).push(M, C));
        }
        l && (d = d || []).push('style', l);
        var M = d;
        (r.updateQueue = M) && (r.flags |= 4);
      }
    }),
    (Wt = function (n, r, l, o) {
      l !== o && (r.flags |= 4);
    });
  function ko(n, r) {
    if (!mt)
      switch (n.tailMode) {
        case 'hidden':
          r = n.tail;
          for (var l = null; r !== null; ) r.alternate !== null && (l = r), (r = r.sibling);
          l === null ? (n.tail = null) : (l.sibling = null);
          break;
        case 'collapsed':
          l = n.tail;
          for (var o = null; l !== null; ) l.alternate !== null && (o = l), (l = l.sibling);
          o === null
            ? r || n.tail === null
              ? (n.tail = null)
              : (n.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function Rn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child,
      l = 0,
      o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        (l |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags & 14680064),
          (o |= c.flags & 14680064),
          (c.return = n),
          (c = c.sibling);
    else
      for (c = n.child; c !== null; )
        (l |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags),
          (o |= c.flags),
          (c.return = n),
          (c = c.sibling);
    return (n.subtreeFlags |= o), (n.childLanes = l), r;
  }
  function ry(n, r, l) {
    var o = r.pendingProps;
    switch ((Vf(r), r.tag)) {
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
        return Ct(r.type) && Lr(), Rn(r), null;
      case 3:
        return (
          (o = r.stateNode),
          Di(),
          Je(Ot),
          Je(Me),
          Vs(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (n === null || n.child === null) &&
            (Ls(r)
              ? (r.flags |= 4)
              : n === null ||
                (n.memoizedState.isDehydrated && !(r.flags & 256)) ||
                ((r.flags |= 1024), zr !== null && (zo(zr), (zr = null)))),
          ml(n, r),
          Rn(r),
          null
        );
      case 5:
        Be(r);
        var c = ll(iu.current);
        if (((l = r.type), n !== null && r.stateNode != null))
          Hr(n, r, l, o, c), n.ref !== r.ref && ((r.flags |= 512), (r.flags |= 2097152));
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(w(166));
            return Rn(r), null;
          }
          if (((n = ll(ia.current)), Ls(r))) {
            (o = r.stateNode), (l = r.type);
            var d = r.memoizedProps;
            switch (((o[va] = r), (o[rl] = d), (n = (r.mode & 1) !== 0), l)) {
              case 'dialog':
                dt('cancel', o), dt('close', o);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                dt('load', o);
                break;
              case 'video':
              case 'audio':
                for (c = 0; c < so.length; c++) dt(so[c], o);
                break;
              case 'source':
                dt('error', o);
                break;
              case 'img':
              case 'image':
              case 'link':
                dt('error', o), dt('load', o);
                break;
              case 'details':
                dt('toggle', o);
                break;
              case 'input':
                xr(o, d), dt('invalid', o);
                break;
              case 'select':
                (o._wrapperState = { wasMultiple: !!d.multiple }), dt('invalid', o);
                break;
              case 'textarea':
                Kr(o, d), dt('invalid', o);
            }
            Sn(l, d), (c = null);
            for (var h in d)
              if (d.hasOwnProperty(h)) {
                var S = d[h];
                h === 'children'
                  ? typeof S == 'string'
                    ? o.textContent !== S &&
                      (d.suppressHydrationWarning !== !0 && Ds(o.textContent, S, n),
                      (c = ['children', S]))
                    : typeof S == 'number' &&
                      o.textContent !== '' + S &&
                      (d.suppressHydrationWarning !== !0 && Ds(o.textContent, S, n),
                      (c = ['children', '' + S]))
                  : he.hasOwnProperty(h) && S != null && h === 'onScroll' && dt('scroll', o);
              }
            switch (l) {
              case 'input':
                Rr(o), _a(o, d, !0);
                break;
              case 'textarea':
                Rr(o), fa(o);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof d.onClick == 'function' && (o.onclick = ks);
            }
            (o = c), (r.updateQueue = o), o !== null && (r.flags |= 4);
          } else {
            (h = c.nodeType === 9 ? c : c.ownerDocument),
              n === 'http://www.w3.org/1999/xhtml' && (n = si(l)),
              n === 'http://www.w3.org/1999/xhtml'
                ? l === 'script'
                  ? ((n = h.createElement('div')),
                    (n.innerHTML = '<script></script>'),
                    (n = n.removeChild(n.firstChild)))
                  : typeof o.is == 'string'
                    ? (n = h.createElement(l, { is: o.is }))
                    : ((n = h.createElement(l)),
                      l === 'select' &&
                        ((h = n), o.multiple ? (h.multiple = !0) : o.size && (h.size = o.size)))
                : (n = h.createElementNS(n, l)),
              (n[va] = r),
              (n[rl] = o),
              Do(n, r, !1, !1),
              (r.stateNode = n);
            e: {
              switch (((h = $t(l, o)), l)) {
                case 'dialog':
                  dt('cancel', n), dt('close', n), (c = o);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  dt('load', n), (c = o);
                  break;
                case 'video':
                case 'audio':
                  for (c = 0; c < so.length; c++) dt(so[c], n);
                  c = o;
                  break;
                case 'source':
                  dt('error', n), (c = o);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  dt('error', n), dt('load', n), (c = o);
                  break;
                case 'details':
                  dt('toggle', n), (c = o);
                  break;
                case 'input':
                  xr(n, o), (c = $n(n, o)), dt('invalid', n);
                  break;
                case 'option':
                  c = o;
                  break;
                case 'select':
                  (n._wrapperState = { wasMultiple: !!o.multiple }),
                    (c = le({}, o, { value: void 0 })),
                    dt('invalid', n);
                  break;
                case 'textarea':
                  Kr(n, o), (c = Ii(n, o)), dt('invalid', n);
                  break;
                default:
                  c = o;
              }
              Sn(l, c), (S = c);
              for (d in S)
                if (S.hasOwnProperty(d)) {
                  var C = S[d];
                  d === 'style'
                    ? ct(n, C)
                    : d === 'dangerouslySetInnerHTML'
                      ? ((C = C ? C.__html : void 0), C != null && Yu(n, C))
                      : d === 'children'
                        ? typeof C == 'string'
                          ? (l !== 'textarea' || C !== '') && ci(n, C)
                          : typeof C == 'number' && ci(n, '' + C)
                        : d !== 'suppressContentEditableWarning' &&
                          d !== 'suppressHydrationWarning' &&
                          d !== 'autoFocus' &&
                          (he.hasOwnProperty(d)
                            ? C != null && d === 'onScroll' && dt('scroll', n)
                            : C != null && Q(n, d, C, h));
                }
              switch (l) {
                case 'input':
                  Rr(n), _a(n, o, !1);
                  break;
                case 'textarea':
                  Rr(n), fa(n);
                  break;
                case 'option':
                  o.value != null && n.setAttribute('value', '' + Wr(o.value));
                  break;
                case 'select':
                  (n.multiple = !!o.multiple),
                    (d = o.value),
                    d != null
                      ? ui(n, !!o.multiple, d, !1)
                      : o.defaultValue != null && ui(n, !!o.multiple, o.defaultValue, !0);
                  break;
                default:
                  typeof c.onClick == 'function' && (n.onclick = ks);
              }
              switch (l) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  o = !!o.autoFocus;
                  break e;
                case 'img':
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && ((r.flags |= 512), (r.flags |= 2097152));
        }
        return Rn(r), null;
      case 6:
        if (n && r.stateNode != null) Wt(n, r, n.memoizedProps, o);
        else {
          if (typeof o != 'string' && r.stateNode === null) throw Error(w(166));
          if (((l = ll(iu.current)), ll(ia.current), Ls(r))) {
            if (
              ((o = r.stateNode),
              (l = r.memoizedProps),
              (o[va] = r),
              (d = o.nodeValue !== l) && ((n = dr), n !== null))
            )
              switch (n.tag) {
                case 3:
                  Ds(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ds(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            (o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o)),
              (o[va] = r),
              (r.stateNode = o);
        }
        return Rn(r), null;
      case 13:
        if (
          (Je(we),
          (o = r.memoizedState),
          n === null || (n.memoizedState !== null && n.memoizedState.dehydrated !== null))
        ) {
          if (mt && qn !== null && r.mode & 1 && !(r.flags & 128))
            gv(), Tt(), (r.flags |= 98560), (d = !1);
          else if (((d = Ls(r)), o !== null && o.dehydrated !== null)) {
            if (n === null) {
              if (!d) throw Error(w(318));
              if (((d = r.memoizedState), (d = d !== null ? d.dehydrated : null), !d))
                throw Error(w(317));
              d[va] = r;
            } else Tt(), !(r.flags & 128) && (r.memoizedState = null), (r.flags |= 4);
            Rn(r), (d = !1);
          } else zr !== null && (zo(zr), (zr = null)), (d = !0);
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128
          ? ((r.lanes = l), r)
          : ((o = o !== null),
            o !== (n !== null && n.memoizedState !== null) &&
              o &&
              ((r.child.flags |= 8192),
              r.mode & 1 && (n === null || we.current & 1 ? Kt === 0 && (Kt = 3) : hd())),
            r.updateQueue !== null && (r.flags |= 4),
            Rn(r),
            null);
      case 4:
        return Di(), ml(n, r), n === null && eu(r.stateNode.containerInfo), Rn(r), null;
      case 10:
        return Ti(r.type._context), Rn(r), null;
      case 17:
        return Ct(r.type) && Lr(), Rn(r), null;
      case 19:
        if ((Je(we), (d = r.memoizedState), d === null)) return Rn(r), null;
        if (((o = (r.flags & 128) !== 0), (h = d.rendering), h === null))
          if (o) ko(d, !1);
          else {
            if (Kt !== 0 || (n !== null && n.flags & 128))
              for (n = r.child; n !== null; ) {
                if (((h = Rt(n)), h !== null)) {
                  for (
                    r.flags |= 128,
                      ko(d, !1),
                      o = h.updateQueue,
                      o !== null && ((r.updateQueue = o), (r.flags |= 4)),
                      r.subtreeFlags = 0,
                      o = l,
                      l = r.child;
                    l !== null;

                  )
                    (d = l),
                      (n = o),
                      (d.flags &= 14680066),
                      (h = d.alternate),
                      h === null
                        ? ((d.childLanes = 0),
                          (d.lanes = n),
                          (d.child = null),
                          (d.subtreeFlags = 0),
                          (d.memoizedProps = null),
                          (d.memoizedState = null),
                          (d.updateQueue = null),
                          (d.dependencies = null),
                          (d.stateNode = null))
                        : ((d.childLanes = h.childLanes),
                          (d.lanes = h.lanes),
                          (d.child = h.child),
                          (d.subtreeFlags = 0),
                          (d.deletions = null),
                          (d.memoizedProps = h.memoizedProps),
                          (d.memoizedState = h.memoizedState),
                          (d.updateQueue = h.updateQueue),
                          (d.type = h.type),
                          (n = h.dependencies),
                          (d.dependencies =
                            n === null ? null : { lanes: n.lanes, firstContext: n.firstContext })),
                      (l = l.sibling);
                  return et(we, (we.current & 1) | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null &&
              _t() > gu &&
              ((r.flags |= 128), (o = !0), ko(d, !1), (r.lanes = 4194304));
          }
        else {
          if (!o)
            if (((n = Rt(h)), n !== null)) {
              if (
                ((r.flags |= 128),
                (o = !0),
                (l = n.updateQueue),
                l !== null && ((r.updateQueue = l), (r.flags |= 4)),
                ko(d, !0),
                d.tail === null && d.tailMode === 'hidden' && !h.alternate && !mt)
              )
                return Rn(r), null;
            } else
              2 * _t() - d.renderingStartTime > gu &&
                l !== 1073741824 &&
                ((r.flags |= 128), (o = !0), ko(d, !1), (r.lanes = 4194304));
          d.isBackwards
            ? ((h.sibling = r.child), (r.child = h))
            : ((l = d.last), l !== null ? (l.sibling = h) : (r.child = h), (d.last = h));
        }
        return d.tail !== null
          ? ((r = d.tail),
            (d.rendering = r),
            (d.tail = r.sibling),
            (d.renderingStartTime = _t()),
            (r.sibling = null),
            (l = we.current),
            et(we, o ? (l & 1) | 2 : l & 1),
            r)
          : (Rn(r), null);
      case 22:
      case 23:
        return (
          vd(),
          (o = r.memoizedState !== null),
          n !== null && (n.memoizedState !== null) !== o && (r.flags |= 8192),
          o && r.mode & 1
            ? hr & 1073741824 && (Rn(r), r.subtreeFlags & 6 && (r.flags |= 8192))
            : Rn(r),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(w(156, r.tag));
  }
  function ld(n, r) {
    switch ((Vf(r), r.tag)) {
      case 1:
        return (
          Ct(r.type) && Lr(), (n = r.flags), n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 3:
        return (
          Di(),
          Je(Ot),
          Je(Me),
          Vs(),
          (n = r.flags),
          n & 65536 && !(n & 128) ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 5:
        return Be(r), null;
      case 13:
        if ((Je(we), (n = r.memoizedState), n !== null && n.dehydrated !== null)) {
          if (r.alternate === null) throw Error(w(340));
          Tt();
        }
        return (n = r.flags), n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null;
      case 19:
        return Je(we), null;
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
  var bo = !1,
    Xt = !1,
    Lv = typeof WeakSet == 'function' ? WeakSet : Set,
    ue = null;
  function du(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == 'function')
        try {
          l(null);
        } catch (o) {
          Lt(n, r, o);
        }
      else l.current = null;
  }
  function _o(n, r, l) {
    try {
      l();
    } catch (o) {
      Lt(n, r, o);
    }
  }
  var Nv = !1;
  function zv(n, r) {
    if (((Mf = Ki), (n = Es()), Ua(n))) {
      if ('selectionStart' in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = ((l = n.ownerDocument) && l.defaultView) || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset,
              d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var h = 0,
              S = -1,
              C = -1,
              M = 0,
              j = 0,
              Y = n,
              B = null;
            t: for (;;) {
              for (
                var te;
                Y !== l || (c !== 0 && Y.nodeType !== 3) || (S = h + c),
                  Y !== d || (o !== 0 && Y.nodeType !== 3) || (C = h + o),
                  Y.nodeType === 3 && (h += Y.nodeValue.length),
                  (te = Y.firstChild) !== null;

              )
                (B = Y), (Y = te);
              for (;;) {
                if (Y === n) break t;
                if (
                  (B === l && ++M === c && (S = h),
                  B === d && ++j === o && (C = h),
                  (te = Y.nextSibling) !== null)
                )
                  break;
                (Y = B), (B = Y.parentNode);
              }
              Y = te;
            }
            l = S === -1 || C === -1 ? null : { start: S, end: C };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (tl = { focusedElem: n, selectionRange: l }, Ki = !1, ue = r; ue !== null; )
      if (((r = ue), (n = r.child), (r.subtreeFlags & 1028) !== 0 && n !== null))
        (n.return = r), (ue = n);
      else
        for (; ue !== null; ) {
          r = ue;
          try {
            var ce = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ce !== null) {
                    var pe = ce.memoizedProps,
                      Ut = ce.memoizedState,
                      x = r.stateNode,
                      T = x.getSnapshotBeforeUpdate(
                        r.elementType === r.type ? pe : pr(r.type, pe),
                        Ut,
                      );
                    x.__reactInternalSnapshotBeforeUpdate = T;
                  }
                  break;
                case 3:
                  var b = r.stateNode.containerInfo;
                  b.nodeType === 1
                    ? (b.textContent = '')
                    : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(w(163));
              }
          } catch (I) {
            Lt(r, r.return, I);
          }
          if (((n = r.sibling), n !== null)) {
            (n.return = r.return), (ue = n);
            break;
          }
          ue = r.return;
        }
    return (ce = Nv), (Nv = !1), ce;
  }
  function Oo(n, r, l) {
    var o = r.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var c = (o = o.next);
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          (c.destroy = void 0), d !== void 0 && _o(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Mo(n, r) {
    if (((r = r.updateQueue), (r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
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
      typeof r == 'function' ? r(n) : (r.current = n);
    }
  }
  function od(n) {
    var r = n.alternate;
    r !== null && ((n.alternate = null), od(r)),
      (n.child = null),
      (n.deletions = null),
      (n.sibling = null),
      n.tag === 5 &&
        ((r = n.stateNode),
        r !== null && (delete r[va], delete r[rl], delete r[zf], delete r[Km], delete r[Uf])),
      (n.stateNode = null),
      (n.return = null),
      (n.dependencies = null),
      (n.memoizedProps = null),
      (n.memoizedState = null),
      (n.pendingProps = null),
      (n.stateNode = null),
      (n.updateQueue = null);
  }
  function Uv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function uc(n) {
    e: for (;;) {
      for (; n.sibling === null; ) {
        if (n.return === null || Uv(n.return)) return null;
        n = n.return;
      }
      for (
        n.sibling.return = n.return, n = n.sibling;
        n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

      ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        (n.child.return = n), (n = n.child);
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function pu(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      (n = n.stateNode),
        r
          ? l.nodeType === 8
            ? l.parentNode.insertBefore(n, r)
            : l.insertBefore(n, r)
          : (l.nodeType === 8
              ? ((r = l.parentNode), r.insertBefore(n, l))
              : ((r = l), r.appendChild(n)),
            (l = l._reactRootContainer),
            l != null || r.onclick !== null || (r.onclick = ks));
    else if (o !== 4 && ((n = n.child), n !== null))
      for (pu(n, r, l), n = n.sibling; n !== null; ) pu(n, r, l), (n = n.sibling);
  }
  function ga(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) (n = n.stateNode), r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && ((n = n.child), n !== null))
      for (ga(n, r, l), n = n.sibling; n !== null; ) ga(n, r, l), (n = n.sibling);
  }
  var Et = null,
    nn = !1;
  function Fr(n, r, l) {
    for (l = l.child; l !== null; ) vu(n, r, l), (l = l.sibling);
  }
  function vu(n, r, l) {
    if (Jr && typeof Jr.onCommitFiberUnmount == 'function')
      try {
        Jr.onCommitFiberUnmount(Gu, l);
      } catch {}
    switch (l.tag) {
      case 5:
        Xt || du(l, r);
      case 6:
        var o = Et,
          c = nn;
        (Et = null),
          Fr(n, r, l),
          (Et = o),
          (nn = c),
          Et !== null &&
            (nn
              ? ((n = Et),
                (l = l.stateNode),
                n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l))
              : Et.removeChild(l.stateNode));
        break;
      case 18:
        Et !== null &&
          (nn
            ? ((n = Et),
              (l = l.stateNode),
              n.nodeType === 8 ? mi(n.parentNode, l) : n.nodeType === 1 && mi(n, l),
              Zu(n))
            : mi(Et, l.stateNode));
        break;
      case 4:
        (o = Et),
          (c = nn),
          (Et = l.stateNode.containerInfo),
          (nn = !0),
          Fr(n, r, l),
          (Et = o),
          (nn = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Xt && ((o = l.updateQueue), o !== null && ((o = o.lastEffect), o !== null))) {
          c = o = o.next;
          do {
            var d = c,
              h = d.destroy;
            (d = d.tag), h !== void 0 && (d & 2 || d & 4) && _o(l, r, h), (c = c.next);
          } while (c !== o);
        }
        Fr(n, r, l);
        break;
      case 1:
        if (!Xt && (du(l, r), (o = l.stateNode), typeof o.componentWillUnmount == 'function'))
          try {
            (o.props = l.memoizedProps), (o.state = l.memoizedState), o.componentWillUnmount();
          } catch (S) {
            Lt(l, r, S);
          }
        Fr(n, r, l);
        break;
      case 21:
        Fr(n, r, l);
        break;
      case 22:
        l.mode & 1
          ? ((Xt = (o = Xt) || l.memoizedState !== null), Fr(n, r, l), (Xt = o))
          : Fr(n, r, l);
        break;
      default:
        Fr(n, r, l);
    }
  }
  function $a(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Lv()),
        r.forEach(function (o) {
          var c = sy.bind(null, n, o);
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
          var d = n,
            h = r,
            S = h;
          e: for (; S !== null; ) {
            switch (S.tag) {
              case 5:
                (Et = S.stateNode), (nn = !1);
                break e;
              case 3:
                (Et = S.stateNode.containerInfo), (nn = !0);
                break e;
              case 4:
                (Et = S.stateNode.containerInfo), (nn = !0);
                break e;
            }
            S = S.return;
          }
          if (Et === null) throw Error(w(160));
          vu(d, h, c), (Et = null), (nn = !1);
          var C = c.alternate;
          C !== null && (C.return = null), (c.return = null);
        } catch (M) {
          Lt(c, r, M);
        }
      }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Av(r, n), (r = r.sibling);
  }
  function Av(n, r) {
    var l = n.alternate,
      o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((la(r, n), Sa(n), o & 4)) {
          try {
            Oo(3, n, n.return), Mo(3, n);
          } catch (pe) {
            Lt(n, n.return, pe);
          }
          try {
            Oo(5, n, n.return);
          } catch (pe) {
            Lt(n, n.return, pe);
          }
        }
        break;
      case 1:
        la(r, n), Sa(n), o & 512 && l !== null && du(l, l.return);
        break;
      case 5:
        if ((la(r, n), Sa(n), o & 512 && l !== null && du(l, l.return), n.flags & 32)) {
          var c = n.stateNode;
          try {
            ci(c, '');
          } catch (pe) {
            Lt(n, n.return, pe);
          }
        }
        if (o & 4 && ((c = n.stateNode), c != null)) {
          var d = n.memoizedProps,
            h = l !== null ? l.memoizedProps : d,
            S = n.type,
            C = n.updateQueue;
          if (((n.updateQueue = null), C !== null))
            try {
              S === 'input' && d.type === 'radio' && d.name != null && Xr(c, d), $t(S, h);
              var M = $t(S, d);
              for (h = 0; h < C.length; h += 2) {
                var j = C[h],
                  Y = C[h + 1];
                j === 'style'
                  ? ct(c, Y)
                  : j === 'dangerouslySetInnerHTML'
                    ? Yu(c, Y)
                    : j === 'children'
                      ? ci(c, Y)
                      : Q(c, j, Y, M);
              }
              switch (S) {
                case 'input':
                  or(c, d);
                  break;
                case 'textarea':
                  oi(c, d);
                  break;
                case 'select':
                  var B = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var te = d.value;
                  te != null
                    ? ui(c, !!d.multiple, te, !1)
                    : B !== !!d.multiple &&
                      (d.defaultValue != null
                        ? ui(c, !!d.multiple, d.defaultValue, !0)
                        : ui(c, !!d.multiple, d.multiple ? [] : '', !1));
              }
              c[rl] = d;
            } catch (pe) {
              Lt(n, n.return, pe);
            }
        }
        break;
      case 6:
        if ((la(r, n), Sa(n), o & 4)) {
          if (n.stateNode === null) throw Error(w(162));
          (c = n.stateNode), (d = n.memoizedProps);
          try {
            c.nodeValue = d;
          } catch (pe) {
            Lt(n, n.return, pe);
          }
        }
        break;
      case 3:
        if ((la(r, n), Sa(n), o & 4 && l !== null && l.memoizedState.isDehydrated))
          try {
            Zu(r.containerInfo);
          } catch (pe) {
            Lt(n, n.return, pe);
          }
        break;
      case 4:
        la(r, n), Sa(n);
        break;
      case 13:
        la(r, n),
          Sa(n),
          (c = n.child),
          c.flags & 8192 &&
            ((d = c.memoizedState !== null),
            (c.stateNode.isHidden = d),
            !d || (c.alternate !== null && c.alternate.memoizedState !== null) || (fd = _t())),
          o & 4 && $a(n);
        break;
      case 22:
        if (
          ((j = l !== null && l.memoizedState !== null),
          n.mode & 1 ? ((Xt = (M = Xt) || j), la(r, n), (Xt = M)) : la(r, n),
          Sa(n),
          o & 8192)
        ) {
          if (((M = n.memoizedState !== null), (n.stateNode.isHidden = M) && !j && n.mode & 1))
            for (ue = n, j = n.child; j !== null; ) {
              for (Y = ue = j; ue !== null; ) {
                switch (((B = ue), (te = B.child), B.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Oo(4, B, B.return);
                    break;
                  case 1:
                    du(B, B.return);
                    var ce = B.stateNode;
                    if (typeof ce.componentWillUnmount == 'function') {
                      (o = B), (l = B.return);
                      try {
                        (r = o),
                          (ce.props = r.memoizedProps),
                          (ce.state = r.memoizedState),
                          ce.componentWillUnmount();
                      } catch (pe) {
                        Lt(o, l, pe);
                      }
                    }
                    break;
                  case 5:
                    du(B, B.return);
                    break;
                  case 22:
                    if (B.memoizedState !== null) {
                      sd(Y);
                      continue;
                    }
                }
                te !== null ? ((te.return = B), (ue = te)) : sd(Y);
              }
              j = j.sibling;
            }
          e: for (j = null, Y = n; ; ) {
            if (Y.tag === 5) {
              if (j === null) {
                j = Y;
                try {
                  (c = Y.stateNode),
                    M
                      ? ((d = c.style),
                        typeof d.setProperty == 'function'
                          ? d.setProperty('display', 'none', 'important')
                          : (d.display = 'none'))
                      : ((S = Y.stateNode),
                        (C = Y.memoizedProps.style),
                        (h = C != null && C.hasOwnProperty('display') ? C.display : null),
                        (S.style.display = Pe('display', h)));
                } catch (pe) {
                  Lt(n, n.return, pe);
                }
              }
            } else if (Y.tag === 6) {
              if (j === null)
                try {
                  Y.stateNode.nodeValue = M ? '' : Y.memoizedProps;
                } catch (pe) {
                  Lt(n, n.return, pe);
                }
            } else if (
              ((Y.tag !== 22 && Y.tag !== 23) || Y.memoizedState === null || Y === n) &&
              Y.child !== null
            ) {
              (Y.child.return = Y), (Y = Y.child);
              continue;
            }
            if (Y === n) break e;
            for (; Y.sibling === null; ) {
              if (Y.return === null || Y.return === n) break e;
              j === Y && (j = null), (Y = Y.return);
            }
            j === Y && (j = null), (Y.sibling.return = Y.return), (Y = Y.sibling);
          }
        }
        break;
      case 19:
        la(r, n), Sa(n), o & 4 && $a(n);
        break;
      case 21:
        break;
      default:
        la(r, n), Sa(n);
    }
  }
  function Sa(n) {
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
          throw Error(w(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ci(c, ''), (o.flags &= -33));
            var d = uc(n);
            ga(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo,
              S = uc(n);
            pu(n, S, h);
            break;
          default:
            throw Error(w(161));
        }
      } catch (C) {
        Lt(n, n.return, C);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Hv(n, r, l) {
    (ue = n), hu(n);
  }
  function hu(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ue !== null; ) {
      var c = ue,
        d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || bo;
        if (!h) {
          var S = c.alternate,
            C = (S !== null && S.memoizedState !== null) || Xt;
          S = bo;
          var M = Xt;
          if (((bo = h), (Xt = C) && !M))
            for (ue = c; ue !== null; )
              (h = ue),
                (C = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? Vv(c)
                  : C !== null
                    ? ((C.return = h), (ue = C))
                    : Vv(c);
          for (; d !== null; ) (ue = d), hu(d), (d = d.sibling);
          (ue = c), (bo = S), (Xt = M);
        }
        Fv(n);
      } else c.subtreeFlags & 8772 && d !== null ? ((d.return = c), (ue = d)) : Fv(n);
    }
  }
  function Fv(n) {
    for (; ue !== null; ) {
      var r = ue;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Xt || Mo(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !Xt)
                  if (l === null) o.componentDidMount();
                  else {
                    var c =
                      r.elementType === r.type ? l.memoizedProps : pr(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && il(r, d, o);
                break;
              case 3:
                var h = r.updateQueue;
                if (h !== null) {
                  if (((l = null), r.child !== null))
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
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      C.autoFocus && l.focus();
                      break;
                    case 'img':
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
                      var Y = j.dehydrated;
                      Y !== null && Zu(Y);
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
                throw Error(w(163));
            }
          Xt || (r.flags & 512 && ud(r));
        } catch (B) {
          Lt(r, r.return, B);
        }
      }
      if (r === n) {
        ue = null;
        break;
      }
      if (((l = r.sibling), l !== null)) {
        (l.return = r.return), (ue = l);
        break;
      }
      ue = r.return;
    }
  }
  function sd(n) {
    for (; ue !== null; ) {
      var r = ue;
      if (r === n) {
        ue = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        (l.return = r.return), (ue = l);
        break;
      }
      ue = r.return;
    }
  }
  function Vv(n) {
    for (; ue !== null; ) {
      var r = ue;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Mo(4, r);
            } catch (C) {
              Lt(r, l, C);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == 'function') {
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
        ue = null;
        break;
      }
      var S = r.sibling;
      if (S !== null) {
        (S.return = r.return), (ue = S);
        break;
      }
      ue = r.return;
    }
  }
  var oc = Math.ceil,
    Lo = ge.ReactCurrentDispatcher,
    cd = ge.ReactCurrentOwner,
    xn = ge.ReactCurrentBatchConfig,
    $e = 0,
    xt = null,
    Mt = null,
    rn = 0,
    hr = 0,
    mu = Ae(0),
    Kt = 0,
    No = null,
    Qa = 0,
    sc = 0,
    yu = 0,
    yl = null,
    Mn = null,
    fd = 0,
    gu = 1 / 0,
    Ia = null,
    cc = !1,
    gl = null,
    Ca = null,
    Oi = !1,
    Mi = null,
    fc = 0,
    Su = 0,
    dc = null,
    Sl = -1,
    Cl = 0;
  function wn() {
    return $e & 6 ? _t() : Sl !== -1 ? Sl : (Sl = _t());
  }
  function Pt(n) {
    return n.mode & 1
      ? $e & 2 && rn !== 0
        ? rn & -rn
        : Ns.transition !== null
          ? (Cl === 0 && (Cl = ss()), Cl)
          : ((n = at), n !== 0 || ((n = window.event), (n = n === void 0 ? 16 : ff(n.type))), n)
      : 1;
  }
  function Dn(n, r, l, o) {
    if (50 < Su) throw ((Su = 0), (dc = null), Error(w(185)));
    Xi(n, l, o),
      (!($e & 2) || n !== xt) &&
        (n === xt && (!($e & 2) && (sc |= l), Kt === 4 && Vr(n, rn)),
        kn(n, o),
        l === 1 && $e === 0 && !(r.mode & 1) && ((gu = _t() + 500), en && Wn()));
  }
  function kn(n, r) {
    var l = n.callbackNode;
    os(n, r);
    var o = ea(n, n === xt ? rn : 0);
    if (o === 0) l !== null && Dp(l), (n.callbackNode = null), (n.callbackPriority = 0);
    else if (((r = o & -o), n.callbackPriority !== r)) {
      if ((l != null && Dp(l), r === 1))
        n.tag === 0 ? Hf(Bv.bind(null, n)) : Af(Bv.bind(null, n)),
          Nf(function () {
            !($e & 6) && Wn();
          }),
          (l = null);
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
        l = yd(l, Cu.bind(null, n));
      }
      (n.callbackPriority = r), (n.callbackNode = l);
    }
  }
  function Cu(n, r) {
    if (((Sl = -1), (Cl = 0), $e & 6)) throw Error(w(327));
    var l = n.callbackNode;
    if (Tu() && n.callbackNode !== l) return null;
    var o = ea(n, n === xt ? rn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = vc(n, o);
    else {
      r = o;
      var c = $e;
      $e |= 2;
      var d = pc();
      (xt !== n || rn !== r) && ((Ia = null), (gu = _t() + 500), El(n, r));
      do
        try {
          iy();
          break;
        } catch (S) {
          jv(n, S);
        }
      while (!0);
      Yf(), (Lo.current = d), ($e = c), Mt !== null ? (r = 0) : ((xt = null), (rn = 0), (r = Kt));
    }
    if (r !== 0) {
      if ((r === 2 && ((c = lf(n)), c !== 0 && ((o = c), (r = dd(n, c)))), r === 1))
        throw ((l = No), El(n, 0), Vr(n, o), kn(n, _t()), l);
      if (r === 6) Vr(n, o);
      else {
        if (
          ((c = n.current.alternate),
          !(o & 30) &&
            !pd(c) &&
            ((r = vc(n, o)),
            r === 2 && ((d = lf(n)), d !== 0 && ((o = d), (r = dd(n, d)))),
            r === 1))
        )
          throw ((l = No), El(n, 0), Vr(n, o), kn(n, _t()), l);
        switch (((n.finishedWork = c), (n.finishedLanes = o), r)) {
          case 0:
          case 1:
            throw Error(w(345));
          case 2:
            Tl(n, Mn, Ia);
            break;
          case 3:
            if ((Vr(n, o), (o & 130023424) === o && ((r = fd + 500 - _t()), 10 < r))) {
              if (ea(n, 0) !== 0) break;
              if (((c = n.suspendedLanes), (c & o) !== o)) {
                wn(), (n.pingedLanes |= n.suspendedLanes & c);
                break;
              }
              n.timeoutHandle = nl(Tl.bind(null, n, Mn, Ia), r);
              break;
            }
            Tl(n, Mn, Ia);
            break;
          case 4:
            if ((Vr(n, o), (o & 4194240) === o)) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - Dr(o);
              (d = 1 << h), (h = r[h]), h > c && (c = h), (o &= ~d);
            }
            if (
              ((o = c),
              (o = _t() - o),
              (o =
                (120 > o
                  ? 120
                  : 480 > o
                    ? 480
                    : 1080 > o
                      ? 1080
                      : 1920 > o
                        ? 1920
                        : 3e3 > o
                          ? 3e3
                          : 4320 > o
                            ? 4320
                            : 1960 * oc(o / 1960)) - o),
              10 < o)
            ) {
              n.timeoutHandle = nl(Tl.bind(null, n, Mn, Ia), o);
              break;
            }
            Tl(n, Mn, Ia);
            break;
          case 5:
            Tl(n, Mn, Ia);
            break;
          default:
            throw Error(w(329));
        }
      }
    }
    return kn(n, _t()), n.callbackNode === l ? Cu.bind(null, n) : null;
  }
  function dd(n, r) {
    var l = yl;
    return (
      n.current.memoizedState.isDehydrated && (El(n, r).flags |= 256),
      (n = vc(n, r)),
      n !== 2 && ((r = Mn), (Mn = l), r !== null && zo(r)),
      n
    );
  }
  function zo(n) {
    Mn === null ? (Mn = n) : Mn.push.apply(Mn, n);
  }
  function pd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && ((l = l.stores), l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o],
              d = c.getSnapshot;
            c = c.value;
            try {
              if (!_r(d(), c)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((l = r.child), r.subtreeFlags & 16384 && l !== null)) (l.return = r), (r = l);
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        (r.sibling.return = r.return), (r = r.sibling);
      }
    }
    return !0;
  }
  function Vr(n, r) {
    for (
      r &= ~yu, r &= ~sc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes;
      0 < r;

    ) {
      var l = 31 - Dr(r),
        o = 1 << l;
      (n[l] = -1), (r &= ~o);
    }
  }
  function Bv(n) {
    if ($e & 6) throw Error(w(327));
    Tu();
    var r = ea(n, 0);
    if (!(r & 1)) return kn(n, _t()), null;
    var l = vc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = lf(n);
      o !== 0 && ((r = o), (l = dd(n, o)));
    }
    if (l === 1) throw ((l = No), El(n, 0), Vr(n, r), kn(n, _t()), l);
    if (l === 6) throw Error(w(345));
    return (
      (n.finishedWork = n.current.alternate),
      (n.finishedLanes = r),
      Tl(n, Mn, Ia),
      kn(n, _t()),
      null
    );
  }
  function Eu(n, r) {
    var l = $e;
    $e |= 1;
    try {
      return n(r);
    } finally {
      ($e = l), $e === 0 && ((gu = _t() + 500), en && Wn());
    }
  }
  function Li(n) {
    Mi !== null && Mi.tag === 0 && !($e & 6) && Tu();
    var r = $e;
    $e |= 1;
    var l = xn.transition,
      o = at;
    try {
      if (((xn.transition = null), (at = 1), n)) return n();
    } finally {
      (at = o), (xn.transition = l), ($e = r), !($e & 6) && Wn();
    }
  }
  function vd() {
    (hr = mu.current), Je(mu);
  }
  function El(n, r) {
    (n.finishedWork = null), (n.finishedLanes = 0);
    var l = n.timeoutHandle;
    if ((l !== -1 && ((n.timeoutHandle = -1), vv(l)), Mt !== null))
      for (l = Mt.return; l !== null; ) {
        var o = l;
        switch ((Vf(o), o.tag)) {
          case 1:
            (o = o.type.childContextTypes), o != null && Lr();
            break;
          case 3:
            Di(), Je(Ot), Je(Me), Vs();
            break;
          case 5:
            Be(o);
            break;
          case 4:
            Di();
            break;
          case 13:
            Je(we);
            break;
          case 19:
            Je(we);
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
    if (
      ((xt = n),
      (Mt = n = Ni(n.current, null)),
      (rn = hr = r),
      (Kt = 0),
      (No = null),
      (yu = sc = Qa = 0),
      (Mn = yl = null),
      on !== null)
    ) {
      for (r = 0; r < on.length; r++)
        if (((l = on[r]), (o = l.interleaved), o !== null)) {
          l.interleaved = null;
          var c = o.next,
            d = l.pending;
          if (d !== null) {
            var h = d.next;
            (d.next = c), (o.next = h);
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
        if ((Yf(), (Bs.current = nc), ke)) {
          for (var o = yt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), (o = o.next);
          }
          ke = !1;
        }
        if (
          ((ul = 0),
          (Ge = A = yt = null),
          (ya = !1),
          (vr = 0),
          (cd.current = null),
          l === null || l.return === null)
        ) {
          (Kt = 1), (No = r), (Mt = null);
          break;
        }
        e: {
          var d = n,
            h = l.return,
            S = l,
            C = r;
          if (
            ((r = rn),
            (S.flags |= 32768),
            C !== null && typeof C == 'object' && typeof C.then == 'function')
          ) {
            var M = C,
              j = S,
              Y = j.tag;
            if (!(j.mode & 1) && (Y === 0 || Y === 11 || Y === 15)) {
              var B = j.alternate;
              B
                ? ((j.updateQueue = B.updateQueue),
                  (j.memoizedState = B.memoizedState),
                  (j.lanes = B.lanes))
                : ((j.updateQueue = null), (j.memoizedState = null));
            }
            var te = Zf(h);
            if (te !== null) {
              (te.flags &= -257), Jf(te, h, S, d, r), te.mode & 1 && _v(d, M, r), (r = te), (C = M);
              var ce = r.updateQueue;
              if (ce === null) {
                var pe = /* @__PURE__ */ new Set();
                pe.add(C), (r.updateQueue = pe);
              } else ce.add(C);
              break e;
            } else {
              if (!(r & 1)) {
                _v(d, M, r), hd();
                break e;
              }
              C = Error(w(426));
            }
          } else if (mt && S.mode & 1) {
            var Ut = Zf(h);
            if (Ut !== null) {
              !(Ut.flags & 65536) && (Ut.flags |= 256), Jf(Ut, h, S, d, r), jf(su(C, S));
              break e;
            }
          }
          (d = C = su(C, S)), Kt !== 4 && (Kt = 2), yl === null ? (yl = [d]) : yl.push(d), (d = h);
          do {
            switch (d.tag) {
              case 3:
                (d.flags |= 65536), (r &= -r), (d.lanes |= r);
                var x = bv(d, C, r);
                If(d, x);
                break e;
              case 1:
                S = C;
                var T = d.type,
                  b = d.stateNode;
                if (
                  !(d.flags & 128) &&
                  (typeof T.getDerivedStateFromError == 'function' ||
                    (b !== null &&
                      typeof b.componentDidCatch == 'function' &&
                      (Ca === null || !Ca.has(b))))
                ) {
                  (d.flags |= 65536), (r &= -r), (d.lanes |= r);
                  var I = wo(d, S, r);
                  If(d, I);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        md(l);
      } catch (ve) {
        (r = ve), Mt === l && l !== null && (Mt = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function pc() {
    var n = Lo.current;
    return (Lo.current = nc), n === null ? nc : n;
  }
  function hd() {
    (Kt === 0 || Kt === 3 || Kt === 2) && (Kt = 4),
      xt === null || (!(Qa & 268435455) && !(sc & 268435455)) || Vr(xt, rn);
  }
  function vc(n, r) {
    var l = $e;
    $e |= 2;
    var o = pc();
    (xt !== n || rn !== r) && ((Ia = null), El(n, r));
    do
      try {
        ay();
        break;
      } catch (c) {
        jv(n, c);
      }
    while (!0);
    if ((Yf(), ($e = l), (Lo.current = o), Mt !== null)) throw Error(w(261));
    return (xt = null), (rn = 0), Kt;
  }
  function ay() {
    for (; Mt !== null; ) Pv(Mt);
  }
  function iy() {
    for (; Mt !== null && !bm(); ) Pv(Mt);
  }
  function Pv(n) {
    var r = $v(n.alternate, n, hr);
    (n.memoizedProps = n.pendingProps), r === null ? md(n) : (Mt = r), (cd.current = null);
  }
  function md(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (((n = r.return), r.flags & 32768)) {
        if (((l = ld(l, r)), l !== null)) {
          (l.flags &= 32767), (Mt = l);
          return;
        }
        if (n !== null) (n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null);
        else {
          (Kt = 6), (Mt = null);
          return;
        }
      } else if (((l = ry(l, r, hr)), l !== null)) {
        Mt = l;
        return;
      }
      if (((r = r.sibling), r !== null)) {
        Mt = r;
        return;
      }
      Mt = r = n;
    } while (r !== null);
    Kt === 0 && (Kt = 5);
  }
  function Tl(n, r, l) {
    var o = at,
      c = xn.transition;
    try {
      (xn.transition = null), (at = 1), ly(n, r, l, o);
    } finally {
      (xn.transition = c), (at = o);
    }
    return null;
  }
  function ly(n, r, l, o) {
    do Tu();
    while (Mi !== null);
    if ($e & 6) throw Error(w(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (((n.finishedWork = null), (n.finishedLanes = 0), l === n.current)) throw Error(w(177));
    (n.callbackNode = null), (n.callbackPriority = 0);
    var d = l.lanes | l.childLanes;
    if (
      (Lm(n, d),
      n === xt && ((Mt = xt = null), (rn = 0)),
      (!(l.subtreeFlags & 2064) && !(l.flags & 2064)) ||
        Oi ||
        ((Oi = !0),
        yd(fi, function () {
          return Tu(), null;
        })),
      (d = (l.flags & 15990) !== 0),
      l.subtreeFlags & 15990 || d)
    ) {
      (d = xn.transition), (xn.transition = null);
      var h = at;
      at = 1;
      var S = $e;
      ($e |= 4),
        (cd.current = null),
        zv(n, l),
        Av(l, n),
        Ts(tl),
        (Ki = !!Mf),
        (tl = Mf = null),
        (n.current = l),
        Hv(l),
        _m(),
        ($e = S),
        (at = h),
        (xn.transition = d);
    } else n.current = l;
    if (
      (Oi && ((Oi = !1), (Mi = n), (fc = c)),
      (d = n.pendingLanes),
      d === 0 && (Ca = null),
      bp(l.stateNode),
      kn(n, _t()),
      r !== null)
    )
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        (c = r[l]), o(c.value, { componentStack: c.stack, digest: c.digest });
    if (cc) throw ((cc = !1), (n = gl), (gl = null), n);
    return (
      fc & 1 && n.tag !== 0 && Tu(),
      (d = n.pendingLanes),
      d & 1 ? (n === dc ? Su++ : ((Su = 0), (dc = n))) : (Su = 0),
      Wn(),
      null
    );
  }
  function Tu() {
    if (Mi !== null) {
      var n = of(fc),
        r = xn.transition,
        l = at;
      try {
        if (((xn.transition = null), (at = 16 > n ? 16 : n), Mi === null)) var o = !1;
        else {
          if (((n = Mi), (Mi = null), (fc = 0), $e & 6)) throw Error(w(331));
          var c = $e;
          for ($e |= 4, ue = n.current; ue !== null; ) {
            var d = ue,
              h = d.child;
            if (ue.flags & 16) {
              var S = d.deletions;
              if (S !== null) {
                for (var C = 0; C < S.length; C++) {
                  var M = S[C];
                  for (ue = M; ue !== null; ) {
                    var j = ue;
                    switch (j.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Oo(8, j, d);
                    }
                    var Y = j.child;
                    if (Y !== null) (Y.return = j), (ue = Y);
                    else
                      for (; ue !== null; ) {
                        j = ue;
                        var B = j.sibling,
                          te = j.return;
                        if ((od(j), j === M)) {
                          ue = null;
                          break;
                        }
                        if (B !== null) {
                          (B.return = te), (ue = B);
                          break;
                        }
                        ue = te;
                      }
                  }
                }
                var ce = d.alternate;
                if (ce !== null) {
                  var pe = ce.child;
                  if (pe !== null) {
                    ce.child = null;
                    do {
                      var Ut = pe.sibling;
                      (pe.sibling = null), (pe = Ut);
                    } while (pe !== null);
                  }
                }
                ue = d;
              }
            }
            if (d.subtreeFlags & 2064 && h !== null) (h.return = d), (ue = h);
            else
              e: for (; ue !== null; ) {
                if (((d = ue), d.flags & 2048))
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Oo(9, d, d.return);
                  }
                var x = d.sibling;
                if (x !== null) {
                  (x.return = d.return), (ue = x);
                  break e;
                }
                ue = d.return;
              }
          }
          var T = n.current;
          for (ue = T; ue !== null; ) {
            h = ue;
            var b = h.child;
            if (h.subtreeFlags & 2064 && b !== null) (b.return = h), (ue = b);
            else
              e: for (h = T; ue !== null; ) {
                if (((S = ue), S.flags & 2048))
                  try {
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Mo(9, S);
                    }
                  } catch (ve) {
                    Lt(S, S.return, ve);
                  }
                if (S === h) {
                  ue = null;
                  break e;
                }
                var I = S.sibling;
                if (I !== null) {
                  (I.return = S.return), (ue = I);
                  break e;
                }
                ue = S.return;
              }
          }
          if ((($e = c), Wn(), Jr && typeof Jr.onPostCommitFiberRoot == 'function'))
            try {
              Jr.onPostCommitFiberRoot(Gu, n);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        (at = l), (xn.transition = r);
      }
    }
    return !1;
  }
  function Yv(n, r, l) {
    (r = su(l, r)),
      (r = bv(n, r, 1)),
      (n = xi(n, r, 1)),
      (r = wn()),
      n !== null && (Xi(n, 1, r), kn(n, r));
  }
  function Lt(n, r, l) {
    if (n.tag === 3) Yv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Yv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (
            typeof r.type.getDerivedStateFromError == 'function' ||
            (typeof o.componentDidCatch == 'function' && (Ca === null || !Ca.has(o)))
          ) {
            (n = su(l, n)),
              (n = wo(r, n, 1)),
              (r = xi(r, n, 1)),
              (n = wn()),
              r !== null && (Xi(r, 1, n), kn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function uy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r),
      (r = wn()),
      (n.pingedLanes |= n.suspendedLanes & l),
      xt === n &&
        (rn & l) === l &&
        (Kt === 4 || (Kt === 3 && (rn & 130023424) === rn && 500 > _t() - fd)
          ? El(n, 0)
          : (yu |= l)),
      kn(n, r);
  }
  function hc(n, r) {
    r === 0 && (n.mode & 1 ? ((r = $l), ($l <<= 1), !($l & 130023424) && ($l = 4194304)) : (r = 1));
    var l = wn();
    (n = Ba(n, r)), n !== null && (Xi(n, r, l), kn(n, l));
  }
  function oy(n) {
    var r = n.memoizedState,
      l = 0;
    r !== null && (l = r.retryLane), hc(n, l);
  }
  function sy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode,
          c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(w(314));
    }
    o !== null && o.delete(r), hc(n, l);
  }
  var $v;
  $v = function (n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Ot.current) jt = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128)) return (jt = !1), Ya(n, r, l);
        jt = !!(n.flags & 131072);
      }
    else (jt = !1), mt && r.flags & 1048576 && Ff(r, nu, r.index);
    switch (((r.lanes = 0), r.tag)) {
      case 2:
        var o = r.type;
        Tn(n, r), (n = r.pendingProps);
        var c = Mr(r, Me.current);
        W(r, l), (c = ki(null, r, o, n, c, l));
        var d = cl();
        return (
          (r.flags |= 1),
          typeof c == 'object' &&
          c !== null &&
          typeof c.render == 'function' &&
          c.$$typeof === void 0
            ? ((r.tag = 1),
              (r.memoizedState = null),
              (r.updateQueue = null),
              Ct(o) ? ((d = !0), bs(r)) : (d = !1),
              (r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null),
              Qf(r),
              (c.updater = As),
              (r.stateNode = c),
              (c._reactInternals = r),
              Hs(r, o, n, l),
              (r = Ov(null, r, o, !0, d, l)))
            : ((r.tag = 0), mt && d && _s(r), Gt(null, r, c, l), (r = r.child)),
          r
        );
      case 16:
        o = r.elementType;
        e: {
          switch (
            (Tn(n, r),
            (n = r.pendingProps),
            (c = o._init),
            (o = c(o._payload)),
            (r.type = o),
            (c = r.tag = fy(o)),
            (n = pr(o, n)),
            c)
          ) {
            case 0:
              r = cu(null, r, o, n, l);
              break e;
            case 1:
              r = ed(null, r, o, n, l);
              break e;
            case 11:
              r = _i(null, r, o, n, l);
              break e;
            case 14:
              r = ac(null, r, o, pr(o.type, n), l);
              break e;
          }
          throw Error(w(306, o, ''));
        }
        return r;
      case 0:
        return (
          (o = r.type),
          (c = r.pendingProps),
          (c = r.elementType === o ? c : pr(o, c)),
          cu(n, r, o, c, l)
        );
      case 1:
        return (
          (o = r.type),
          (c = r.pendingProps),
          (c = r.elementType === o ? c : pr(o, c)),
          ed(n, r, o, c, l)
        );
      case 3:
        e: {
          if ((Mv(r), n === null)) throw Error(w(387));
          (o = r.pendingProps), (d = r.memoizedState), (c = d.element), It(n, r), wi(r, o, null, l);
          var h = r.memoizedState;
          if (((o = h.element), d.isDehydrated))
            if (
              ((d = {
                element: o,
                isDehydrated: !1,
                cache: h.cache,
                pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
                transitions: h.transitions,
              }),
              (r.updateQueue.baseState = d),
              (r.memoizedState = d),
              r.flags & 256)
            ) {
              (c = su(Error(w(423)), r)), (r = ic(n, r, o, l, c));
              break e;
            } else if (o !== c) {
              (c = su(Error(w(424)), r)), (r = ic(n, r, o, l, c));
              break e;
            } else
              for (
                qn = aa(r.stateNode.containerInfo.firstChild),
                  dr = r,
                  mt = !0,
                  zr = null,
                  l = Dv(r, null, o, l),
                  r.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
          else {
            if ((Tt(), o === c)) {
              r = sn(n, r, l);
              break e;
            }
            Gt(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return (
          xe(r),
          n === null && Ms(r),
          (o = r.type),
          (c = r.pendingProps),
          (d = n !== null ? n.memoizedProps : null),
          (h = c.children),
          po(o, c) ? (h = null) : d !== null && po(o, d) && (r.flags |= 32),
          He(n, r),
          Gt(n, r, h, l),
          r.child
        );
      case 6:
        return n === null && Ms(r), null;
      case 13:
        return nd(n, r, l);
      case 4:
        return (
          Wf(r, r.stateNode.containerInfo),
          (o = r.pendingProps),
          n === null ? (r.child = au(r, null, o, l)) : Gt(n, r, o, l),
          r.child
        );
      case 11:
        return (
          (o = r.type),
          (c = r.pendingProps),
          (c = r.elementType === o ? c : pr(o, c)),
          _i(n, r, o, c, l)
        );
      case 7:
        return Gt(n, r, r.pendingProps, l), r.child;
      case 8:
        return Gt(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Gt(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (
            ((o = r.type._context),
            (c = r.pendingProps),
            (d = r.memoizedProps),
            (h = c.value),
            et(ma, o._currentValue),
            (o._currentValue = h),
            d !== null)
          )
            if (_r(d.value, h)) {
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
                        (C = ja(-1, l & -l)), (C.tag = 2);
                        var M = d.updateQueue;
                        if (M !== null) {
                          M = M.shared;
                          var j = M.pending;
                          j === null ? (C.next = C) : ((C.next = j.next), (j.next = C)),
                            (M.pending = C);
                        }
                      }
                      (d.lanes |= l),
                        (C = d.alternate),
                        C !== null && (C.lanes |= l),
                        tn(d.return, l, r),
                        (S.lanes |= l);
                      break;
                    }
                    C = C.next;
                  }
                } else if (d.tag === 10) h = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (((h = d.return), h === null)) throw Error(w(341));
                  (h.lanes |= l),
                    (S = h.alternate),
                    S !== null && (S.lanes |= l),
                    tn(h, l, r),
                    (h = d.sibling);
                } else h = d.child;
                if (h !== null) h.return = d;
                else
                  for (h = d; h !== null; ) {
                    if (h === r) {
                      h = null;
                      break;
                    }
                    if (((d = h.sibling), d !== null)) {
                      (d.return = h.return), (h = d);
                      break;
                    }
                    h = h.return;
                  }
                d = h;
              }
          Gt(n, r, c.children, l), (r = r.child);
        }
        return r;
      case 9:
        return (
          (c = r.type),
          (o = r.pendingProps.children),
          W(r, l),
          (c = zt(c)),
          (o = o(c)),
          (r.flags |= 1),
          Gt(n, r, o, l),
          r.child
        );
      case 14:
        return (o = r.type), (c = pr(o, r.pendingProps)), (c = pr(o.type, c)), ac(n, r, o, c, l);
      case 15:
        return er(n, r, r.type, r.pendingProps, l);
      case 17:
        return (
          (o = r.type),
          (c = r.pendingProps),
          (c = r.elementType === o ? c : pr(o, c)),
          Tn(n, r),
          (r.tag = 1),
          Ct(o) ? ((n = !0), bs(r)) : (n = !1),
          W(r, l),
          Tv(r, o, c),
          Hs(r, o, c, l),
          Ov(null, r, o, !0, n, l)
        );
      case 19:
        return id(n, r, l);
      case 22:
        return vl(n, r, l);
    }
    throw Error(w(156, r.tag));
  };
  function yd(n, r) {
    return nf(n, r);
  }
  function cy(n, r, l, o) {
    (this.tag = n),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = r),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Br(n, r, l, o) {
    return new cy(n, r, l, o);
  }
  function gd(n) {
    return (n = n.prototype), !(!n || !n.isReactComponent);
  }
  function fy(n) {
    if (typeof n == 'function') return gd(n) ? 1 : 0;
    if (n != null) {
      if (((n = n.$$typeof), n === Pn)) return 11;
      if (n === Er) return 14;
    }
    return 2;
  }
  function Ni(n, r) {
    var l = n.alternate;
    return (
      l === null
        ? ((l = Br(n.tag, r, n.key, n.mode)),
          (l.elementType = n.elementType),
          (l.type = n.type),
          (l.stateNode = n.stateNode),
          (l.alternate = n),
          (n.alternate = l))
        : ((l.pendingProps = r),
          (l.type = n.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = n.flags & 14680064),
      (l.childLanes = n.childLanes),
      (l.lanes = n.lanes),
      (l.child = n.child),
      (l.memoizedProps = n.memoizedProps),
      (l.memoizedState = n.memoizedState),
      (l.updateQueue = n.updateQueue),
      (r = n.dependencies),
      (l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
      (l.sibling = n.sibling),
      (l.index = n.index),
      (l.ref = n.ref),
      l
    );
  }
  function mc(n, r, l, o, c, d) {
    var h = 2;
    if (((o = n), typeof n == 'function')) gd(n) && (h = 1);
    else if (typeof n == 'string') h = 5;
    else
      e: switch (n) {
        case je:
          return Rl(l.children, c, d, r);
        case bn:
          (h = 8), (c |= 8);
          break;
        case lr:
          return (n = Br(12, l, r, c | 2)), (n.elementType = lr), (n.lanes = d), n;
        case Ie:
          return (n = Br(13, l, r, c)), (n.elementType = Ie), (n.lanes = d), n;
        case it:
          return (n = Br(19, l, r, c)), (n.elementType = it), (n.lanes = d), n;
        case Tr:
          return Uo(l, c, d, r);
        default:
          if (typeof n == 'object' && n !== null)
            switch (n.$$typeof) {
              case Ht:
                h = 10;
                break e;
              case vt:
                h = 9;
                break e;
              case Pn:
                h = 11;
                break e;
              case Er:
                h = 14;
                break e;
              case Dt:
                (h = 16), (o = null);
                break e;
            }
          throw Error(w(130, n == null ? n : typeof n, ''));
      }
    return (r = Br(h, l, r, c)), (r.elementType = n), (r.type = o), (r.lanes = d), r;
  }
  function Rl(n, r, l, o) {
    return (n = Br(7, n, o, r)), (n.lanes = l), n;
  }
  function Uo(n, r, l, o) {
    return (
      (n = Br(22, n, o, r)),
      (n.elementType = Tr),
      (n.lanes = l),
      (n.stateNode = { isHidden: !1 }),
      n
    );
  }
  function Ao(n, r, l) {
    return (n = Br(6, n, null, r)), (n.lanes = l), n;
  }
  function xl(n, r, l) {
    return (
      (r = Br(4, n.children !== null ? n.children : [], n.key, r)),
      (r.lanes = l),
      (r.stateNode = {
        containerInfo: n.containerInfo,
        pendingChildren: null,
        implementation: n.implementation,
      }),
      r
    );
  }
  function dy(n, r, l, o, c) {
    (this.tag = r),
      (this.containerInfo = n),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = uf(0)),
      (this.expirationTimes = uf(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = uf(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = c),
      (this.mutableSourceEagerHydrationData = null);
  }
  function yc(n, r, l, o, c, d, h, S, C) {
    return (
      (n = new dy(n, r, l, S, C)),
      r === 1 ? ((r = 1), d === !0 && (r |= 8)) : (r = 0),
      (d = Br(3, null, null, r)),
      (n.current = d),
      (d.stateNode = n),
      (d.memoizedState = {
        element: o,
        isDehydrated: l,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Qf(d),
      n
    );
  }
  function Qv(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: nt,
      key: o == null ? null : '' + o,
      children: n,
      containerInfo: r,
      implementation: l,
    };
  }
  function Sd(n) {
    if (!n) return ha;
    n = n._reactInternals;
    e: {
      if (pa(n) !== n || n.tag !== 1) throw Error(w(170));
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
      throw Error(w(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Ct(l)) return mo(n, l, r);
    }
    return r;
  }
  function Iv(n, r, l, o, c, d, h, S, C) {
    return (
      (n = yc(l, o, !0, n, c, d, h, S, C)),
      (n.context = Sd(null)),
      (l = n.current),
      (o = wn()),
      (c = Pt(l)),
      (d = ja(o, c)),
      (d.callback = r ?? null),
      xi(l, d, c),
      (n.current.lanes = c),
      Xi(n, c, o),
      kn(n, o),
      n
    );
  }
  function Ho(n, r, l, o) {
    var c = r.current,
      d = wn(),
      h = Pt(c);
    return (
      (l = Sd(l)),
      r.context === null ? (r.context = l) : (r.pendingContext = l),
      (r = ja(d, h)),
      (r.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (r.callback = o),
      (n = xi(c, r, h)),
      n !== null && (Dn(n, c, h, d), Us(n, c, h)),
      h
    );
  }
  function gc(n) {
    if (((n = n.current), !n.child)) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Gv(n, r) {
    if (((n = n.memoizedState), n !== null && n.dehydrated !== null)) {
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
  var Ed =
    typeof reportError == 'function'
      ? reportError
      : function (n) {
          console.error(n);
        };
  function Sc(n) {
    this._internalRoot = n;
  }
  (Ga.prototype.render = Sc.prototype.render =
    function (n) {
      var r = this._internalRoot;
      if (r === null) throw Error(w(409));
      Ho(n, r, null, null);
    }),
    (Ga.prototype.unmount = Sc.prototype.unmount =
      function () {
        var n = this._internalRoot;
        if (n !== null) {
          this._internalRoot = null;
          var r = n.containerInfo;
          Li(function () {
            Ho(null, n, null, null);
          }),
            (r[Fa] = null);
        }
      });
  function Ga(n) {
    this._internalRoot = n;
  }
  Ga.prototype.unstable_scheduleHydration = function (n) {
    if (n) {
      var r = Lp();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < ut.length && r !== 0 && r < ut[l].priority; l++);
      ut.splice(l, 0, n), l === 0 && Np(n);
    }
  };
  function Td(n) {
    return !(!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11));
  }
  function Cc(n) {
    return !(
      !n ||
      (n.nodeType !== 1 &&
        n.nodeType !== 9 &&
        n.nodeType !== 11 &&
        (n.nodeType !== 8 || n.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Xv() {}
  function py(n, r, l, o, c) {
    if (c) {
      if (typeof o == 'function') {
        var d = o;
        o = function () {
          var M = gc(h);
          d.call(M);
        };
      }
      var h = Iv(r, o, n, 0, null, !1, !1, '', Xv);
      return (
        (n._reactRootContainer = h),
        (n[Fa] = h.current),
        eu(n.nodeType === 8 ? n.parentNode : n),
        Li(),
        h
      );
    }
    for (; (c = n.lastChild); ) n.removeChild(c);
    if (typeof o == 'function') {
      var S = o;
      o = function () {
        var M = gc(C);
        S.call(M);
      };
    }
    var C = yc(n, 0, !1, null, null, !1, !1, '', Xv);
    return (
      (n._reactRootContainer = C),
      (n[Fa] = C.current),
      eu(n.nodeType === 8 ? n.parentNode : n),
      Li(function () {
        Ho(r, C, l, o);
      }),
      C
    );
  }
  function Ec(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == 'function') {
        var S = c;
        c = function () {
          var C = gc(h);
          S.call(C);
        };
      }
      Ho(r, h, n, c);
    } else h = py(l, r, n, c, o);
    return gc(h);
  }
  (Mp = function (n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Wi(r.pendingLanes);
          l !== 0 && (Wu(r, l | 1), kn(r, _t()), !($e & 6) && ((gu = _t() + 500), Wn()));
        }
        break;
      case 13:
        Li(function () {
          var o = Ba(n, 1);
          if (o !== null) {
            var c = wn();
            Dn(o, n, 1, c);
          }
        }),
          Cd(n, 1);
    }
  }),
    (cs = function (n) {
      if (n.tag === 13) {
        var r = Ba(n, 134217728);
        if (r !== null) {
          var l = wn();
          Dn(r, n, 134217728, l);
        }
        Cd(n, 134217728);
      }
    }),
    (ft = function (n) {
      if (n.tag === 13) {
        var r = Pt(n),
          l = Ba(n, r);
        if (l !== null) {
          var o = wn();
          Dn(l, n, r, o);
        }
        Cd(n, r);
      }
    }),
    (Lp = function () {
      return at;
    }),
    (sf = function (n, r) {
      var l = at;
      try {
        return (at = n), r();
      } finally {
        at = l;
      }
    }),
    (da = function (n, r, l) {
      switch (r) {
        case 'input':
          if ((or(n, l), (r = l.name), l.type === 'radio' && r != null)) {
            for (l = n; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll('input[name=' + JSON.stringify('' + r) + '][type="radio"]'),
                r = 0;
              r < l.length;
              r++
            ) {
              var o = l[r];
              if (o !== n && o.form === n.form) {
                var c = Ce(o);
                if (!c) throw Error(w(90));
                ba(o), or(o, c);
              }
            }
          }
          break;
        case 'textarea':
          oi(n, l);
          break;
        case 'select':
          (r = l.value), r != null && ui(n, !!l.multiple, r, !1);
      }
    }),
    (Tp = Eu),
    (Rp = Li);
  var vy = { usingClientEntryPoint: !1, Events: [ho, tu, Ce, rs, as, Eu] },
    Ru = {
      findFiberByHostInstance: Or,
      bundleType: 0,
      version: '18.2.0',
      rendererPackageName: 'react-dom',
    },
    hy = {
      bundleType: Ru.bundleType,
      version: Ru.version,
      rendererPackageName: Ru.rendererPackageName,
      rendererConfig: Ru.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ge.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (n) {
        return (n = xp(n)), n === null ? null : n.stateNode;
      },
      findFiberByHostInstance: Ru.findFiberByHostInstance || Wv,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Tc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tc.isDisabled && Tc.supportsFiber)
      try {
        (Gu = Tc.inject(hy)), (Jr = Tc);
      } catch {}
  }
  return (
    (Gr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vy),
    (Gr.createPortal = function (n, r) {
      var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Td(r)) throw Error(w(200));
      return Qv(n, r, null, l);
    }),
    (Gr.createRoot = function (n, r) {
      if (!Td(n)) throw Error(w(299));
      var l = !1,
        o = '',
        c = Ed;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (l = !0),
          r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (c = r.onRecoverableError)),
        (r = yc(n, 1, !1, null, null, l, !1, o, c)),
        (n[Fa] = r.current),
        eu(n.nodeType === 8 ? n.parentNode : n),
        new Sc(r)
      );
    }),
    (Gr.findDOMNode = function (n) {
      if (n == null) return null;
      if (n.nodeType === 1) return n;
      var r = n._reactInternals;
      if (r === void 0)
        throw typeof n.render == 'function'
          ? Error(w(188))
          : ((n = Object.keys(n).join(',')), Error(w(268, n)));
      return (n = xp(r)), (n = n === null ? null : n.stateNode), n;
    }),
    (Gr.flushSync = function (n) {
      return Li(n);
    }),
    (Gr.hydrate = function (n, r, l) {
      if (!Cc(r)) throw Error(w(200));
      return Ec(null, n, r, !0, l);
    }),
    (Gr.hydrateRoot = function (n, r, l) {
      if (!Td(n)) throw Error(w(405));
      var o = (l != null && l.hydratedSources) || null,
        c = !1,
        d = '',
        h = Ed;
      if (
        (l != null &&
          (l.unstable_strictMode === !0 && (c = !0),
          l.identifierPrefix !== void 0 && (d = l.identifierPrefix),
          l.onRecoverableError !== void 0 && (h = l.onRecoverableError)),
        (r = Iv(r, null, n, 1, l ?? null, c, !1, d, h)),
        (n[Fa] = r.current),
        eu(n),
        o)
      )
        for (n = 0; n < o.length; n++)
          (l = o[n]),
            (c = l._getVersion),
            (c = c(l._source)),
            r.mutableSourceEagerHydrationData == null
              ? (r.mutableSourceEagerHydrationData = [l, c])
              : r.mutableSourceEagerHydrationData.push(l, c);
      return new Ga(r);
    }),
    (Gr.render = function (n, r, l) {
      if (!Cc(r)) throw Error(w(200));
      return Ec(null, n, r, !1, l);
    }),
    (Gr.unmountComponentAtNode = function (n) {
      if (!Cc(n)) throw Error(w(40));
      return n._reactRootContainer
        ? (Li(function () {
            Ec(null, null, n, !1, function () {
              (n._reactRootContainer = null), (n[Fa] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Gr.unstable_batchedUpdates = Eu),
    (Gr.unstable_renderSubtreeIntoContainer = function (n, r, l, o) {
      if (!Cc(l)) throw Error(w(200));
      if (n == null || n._reactInternals === void 0) throw Error(w(38));
      return Ec(n, r, l, !1, o);
    }),
    (Gr.version = '18.2.0-next-9e3b772b8-20220608'),
    Gr
  );
}
function eT() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  ) {
    if (process.env.NODE_ENV !== 'production') throw new Error('^_^');
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eT);
    } catch (L) {
      console.error(L);
    }
  }
}
process.env.NODE_ENV === 'production' ? (eT(), (d0.exports = ab())) : (d0.exports = rb());
var ib = d0.exports;
const Dm = Symbol(),
  lb = Symbol(),
  tT =
    typeof window > 'u' ||
    /ServerSideRendering/.test(window.navigator && window.navigator.userAgent)
      ? c0
      : Jk,
  ub = Cp.unstable_runWithPriority
    ? (L) => Cp.unstable_runWithPriority(Cp.unstable_NormalPriority, L)
    : (L) => L(),
  ob = (L) => L;
function nT(L) {
  const N = Xk({
    [Dm]: { v: { current: L }, n: { current: -1 }, l: /* @__PURE__ */ new Set(), u: (Z) => Z() },
  });
  var w;
  return (
    (N[lb] = N.Provider),
    (N.Provider =
      ((w = N.Provider),
      ({ value: Z, children: he }) => {
        const se = ns(Z),
          g = ns(0),
          [Fe, oe] = Kk(null);
        Fe && (Fe(Z), oe(null));
        const G = ns();
        if (!G.current) {
          const _e = /* @__PURE__ */ new Set(),
            F = (P, K) => {
              ib.unstable_batchedUpdates(() => {
                g.current += 1;
                const me = { n: g.current };
                K != null &&
                  K.suspense &&
                  ((me.n *= -1),
                  (me.p = new Promise((De) => {
                    oe(() => (Ve) => {
                      (me.v = Ve), delete me.p, De(Ve);
                    });
                  }))),
                  _e.forEach((De) => De(me)),
                  P();
              });
            };
          G.current = { [Dm]: { v: se, n: g, l: _e, u: F } };
        }
        return (
          tT(() => {
            (se.current = Z),
              (g.current += 1),
              ub(() => {
                G.current[Dm].l.forEach((_e) => {
                  _e({ n: g.current, v: Z });
                });
              });
          }, [Z]),
          qk(w, { value: G.current }, he)
        );
      })),
    delete N.Consumer,
    N
  );
}
function rT(L, N) {
  const w = Zk(L)[Dm];
  if (typeof process == 'object' && process.env.NODE_ENV !== 'production' && !w)
    throw new Error('useContextSelector requires special context');
  const {
      v: { current: Z },
      n: { current: he },
      l: se,
    } = w,
    g = N(Z),
    [Fe, oe] = ZE(
      (G, _e) => {
        if (!_e) return [Z, g];
        if ('p' in _e) throw _e.p;
        if (_e.n === he) return Object.is(G[1], g) ? G : [Z, g];
        try {
          if ('v' in _e) {
            if (Object.is(G[0], _e.v)) return G;
            const F = N(_e.v);
            return Object.is(G[1], F) ? G : [_e.v, F];
          }
        } catch {}
        return [...G];
      },
      [Z, g],
    );
  return (
    Object.is(Fe[1], g) || oe(),
    tT(
      () => (
        se.add(oe),
        () => {
          se.delete(oe);
        }
      ),
      [se],
    ),
    Fe[1]
  );
}
function sb(L) {
  return rT(L, ob);
}
const aT = {
    errors: {},
    initialValues: {},
    isValid: !0,
    isValidating: !1,
    lastAction: 'init',
    required: {},
    submitted: 0,
    touched: {},
    values: {},
  },
  iT = nT(aT),
  lT = nT(() => {});
var uT = { exports: {} };
(function (L) {
  (function (N, w) {
    L.exports = w();
  })(eb, function () {
    var N = Object.prototype.toString;
    function w(F, P) {
      return F == null ? !1 : Object.prototype.hasOwnProperty.call(F, P);
    }
    function Z(F) {
      if (!F || (g(F) && F.length === 0)) return !0;
      if (typeof F != 'string') {
        for (var P in F) if (w(F, P)) return !1;
        return !0;
      }
      return !1;
    }
    function he(F) {
      return N.call(F);
    }
    function se(F) {
      return typeof F == 'object' && he(F) === '[object Object]';
    }
    var g =
      Array.isArray ||
      function (F) {
        return N.call(F) === '[object Array]';
      };
    function Fe(F) {
      return typeof F == 'boolean' || he(F) === '[object Boolean]';
    }
    function oe(F) {
      var P = parseInt(F);
      return P.toString() === F ? P : F;
    }
    function G(F) {
      F = F || {};
      var P = function (re) {
          return Object.keys(P).reduce(function (V, Q) {
            return Q === 'create' || (typeof P[Q] == 'function' && (V[Q] = P[Q].bind(P, re))), V;
          }, {});
        },
        K;
      F.includeInheritedProps
        ? (K = function () {
            return !0;
          })
        : (K = function (re, V) {
            return (typeof V == 'number' && Array.isArray(re)) || w(re, V);
          });
      function me(re, V) {
        if (K(re, V)) return re[V];
      }
      var De;
      F.includeInheritedProps
        ? (De = function (re, V) {
            typeof V != 'string' && typeof V != 'number' && (V = String(V));
            var Q = me(re, V);
            if (
              V === '__proto__' ||
              V === 'prototype' ||
              (V === 'constructor' && typeof Q == 'function')
            )
              throw new Error("For security reasons, object's magic properties cannot be set");
            return Q;
          })
        : (De = function (re, V) {
            return me(re, V);
          });
      function Ve(re, V, Q, ge) {
        if ((typeof V == 'number' && (V = [V]), !V || V.length === 0)) return re;
        if (typeof V == 'string') return Ve(re, V.split('.').map(oe), Q, ge);
        var Te = V[0],
          nt = De(re, Te);
        return V.length === 1
          ? ((nt === void 0 || !ge) && (re[Te] = Q), nt)
          : (nt === void 0 && (typeof V[1] == 'number' ? (re[Te] = []) : (re[Te] = {})),
            Ve(re[Te], V.slice(1), Q, ge));
      }
      return (
        (P.has = function (re, V) {
          if (
            (typeof V == 'number' ? (V = [V]) : typeof V == 'string' && (V = V.split('.')),
            !V || V.length === 0)
          )
            return !!re;
          for (var Q = 0; Q < V.length; Q++) {
            var ge = oe(V[Q]);
            if (
              (typeof ge == 'number' && g(re) && ge < re.length) ||
              (F.includeInheritedProps ? ge in Object(re) : w(re, ge))
            )
              re = re[ge];
            else return !1;
          }
          return !0;
        }),
        (P.ensureExists = function (re, V, Q) {
          return Ve(re, V, Q, !0);
        }),
        (P.set = function (re, V, Q, ge) {
          return Ve(re, V, Q, ge);
        }),
        (P.insert = function (re, V, Q, ge) {
          var Te = P.get(re, V);
          (ge = ~~ge), g(Te) || ((Te = []), P.set(re, V, Te)), Te.splice(ge, 0, Q);
        }),
        (P.empty = function (re, V) {
          if (!Z(V) && re != null) {
            var Q, ge;
            if ((Q = P.get(re, V))) {
              if (typeof Q == 'string') return P.set(re, V, '');
              if (Fe(Q)) return P.set(re, V, !1);
              if (typeof Q == 'number') return P.set(re, V, 0);
              if (g(Q)) Q.length = 0;
              else if (se(Q)) for (ge in Q) K(Q, ge) && delete Q[ge];
              else return P.set(re, V, null);
            }
          }
        }),
        (P.push = function (re, V) {
          var Q = P.get(re, V);
          g(Q) || ((Q = []), P.set(re, V, Q)),
            Q.push.apply(Q, Array.prototype.slice.call(arguments, 2));
        }),
        (P.coalesce = function (re, V, Q) {
          for (var ge, Te = 0, nt = V.length; Te < nt; Te++)
            if ((ge = P.get(re, V[Te])) !== void 0) return ge;
          return Q;
        }),
        (P.get = function (re, V, Q) {
          if ((typeof V == 'number' && (V = [V]), !V || V.length === 0)) return re;
          if (re == null) return Q;
          if (typeof V == 'string') return P.get(re, V.split('.'), Q);
          var ge = oe(V[0]),
            Te = De(re, ge);
          return Te === void 0 ? Q : V.length === 1 ? Te : P.get(re[ge], V.slice(1), Q);
        }),
        (P.del = function (V, Q) {
          if ((typeof Q == 'number' && (Q = [Q]), V == null || Z(Q))) return V;
          if (typeof Q == 'string') return P.del(V, Q.split('.'));
          var ge = oe(Q[0]);
          if ((De(V, ge), !K(V, ge))) return V;
          if (Q.length === 1) g(V) ? V.splice(ge, 1) : delete V[ge];
          else return P.del(V[ge], Q.slice(1));
          return V;
        }),
        P
      );
    }
    var _e = G();
    return (_e.create = G), (_e.withInheritedProps = G({ includeInheritedProps: !0 })), _e;
  });
})(uT);
var jn = uT.exports;
function cb(L, N) {
  return function (Z, he) {
    switch (he.type) {
      case 'initialValues':
        Z.initialValues = { ...(he.value || {}) };
      case 'reset':
        Z.values = { ...(Z.initialValues || {}) };
      case 'init': {
        const se = L == null ? void 0 : L(Z.values || {});
        return {
          ...Z,
          errors: {},
          initialValues: ('initialValues' in he && he.initialValues) || Z.initialValues || {},
          isSubmitting: !1,
          isValid: !se,
          isValidating: !1,
          required: (N == null ? void 0 : N(Z.values)) || {},
          submitted: 0,
          touched: {},
        };
      }
      case 'setValue': {
        const se = { ...Z.values };
        if (jn.get(se, he.name) === he.value) return Z;
        jn.set(se, he.name, he.value);
        const g = L == null ? void 0 : L(se);
        let Fe = Z.touched || {};
        return (
          jn.get(Fe, he.name) || ((Fe = { ...Fe }), jn.set(Fe, he.name, !0)),
          {
            ...Z,
            errors: g || {},
            isValid: !g,
            required: (N == null ? void 0 : N(se)) || {},
            touched: Fe,
            values: se,
          }
        );
      }
      case 'setReadOnly': {
        if (!he.name) return Z.readOnly === he.value ? Z : { ...Z, readOnly: !!he.value };
        const se = Z.disabledFields || {};
        return jn.set(se, he.name, he.value), { ...Z, readonlyFields: se };
      }
      case 'setDisabled': {
        if (!he.name) return Z.disabled === he.value ? Z : { ...Z, disabled: !!he.value };
        const se = Z.disabledFields || {};
        return jn.set(se, he.name, he.value), { ...Z, disabledFields: se };
      }
      case 'setTouched': {
        const se = (he.name ? (Array.isArray(he.name) ? he.name : [he.name]) : []).filter(
          (Fe) => Z.touched[Fe] !== he.touched,
        );
        if (!se.length) return Z;
        const g = se.reduce((Fe, oe) => ({ ...Fe, [oe]: !0 }), Z.touched || {});
        return { ...Z, touched: g };
      }
      case 'startSubmit': {
        if (Z.isSubmitting) return Z;
        const se = L == null ? void 0 : L(Z.values),
          g = !se;
        return {
          ...Z,
          disabled: g,
          errors: se || {},
          isSubmitting: g,
          isValid: g,
          submitted: Z.submitted || 1,
        };
      }
      case 'endSubmit':
        return Z.isSubmitting
          ? {
              ...Z,
              disabled: !1,
              isSubmitting: !1,
            }
          : Z;
      default:
        return Z;
    }
  };
}
function fb(L, N, w, Z, he, se) {
  const g = ns(),
    Fe = ns((_e, F, P) => {
      const K = g.current,
        me = he.current,
        De = se.current;
      if (!K) {
        console.error('Cannot access to Dispatch trigger inside "on" action');
        return;
      }
      if (me && _e.type === 'startSubmit' && P.isSubmitting && !F.isSubmitting) {
        const Ve = me == null ? void 0 : me(P.values);
        Ve && typeof Ve.then == 'function'
          ? Ve.finally(() => K({ type: 'endSubmit' }))
          : K({ type: 'endSubmit' });
      }
      De && De(_e, F, P, K);
    }),
    oe = Hl(
      (_e, F) => {
        const P = L(_e, F);
        return Fe.current(F, _e, P), P;
      },
      [L, Fe],
    ),
    G = ZE(oe, aT, (_e) =>
      L(
        {
          ..._e,
          disabled: w,
          initialValues: N || {},
          readOnly: Z,
          values: N || {},
        },
        { type: 'init' },
      ),
    );
  return (g.current = G[1]), G;
}
const Ob = ({
  children: L,
  disabled: N,
  getRequired: w,
  id: Z,
  initialValues: he,
  onStateUpdate: se,
  onSubmit: g,
  readOnly: Fe,
  reducer: oe,
  validation: G,
}) => {
  const _e = Hl((re) => (G == null ? void 0 : G(re)) || void 0, [G]),
    F = JE(() => oe || cb(_e, w), [w, oe, _e]),
    P = ns(se);
  P.current = se;
  const K = ns(g);
  K.current = g;
  const [me, De] = fb(F, he, !!N, !!Fe, K, P);
  c0(() => {
    he !== me.initialValues && De({ type: 'initialValues', value: he });
  }, [he]),
    c0(() => {
      me.disabled !== !!N && De({ type: 'setDisabled', value: !!N });
    }, [N, De]);
  const Ve = Hl(
    (re) => {
      re.preventDefault(), De({ type: 'startSubmit' });
    },
    [De],
  );
  return /* @__PURE__ */ u0(lT.Provider, {
    value: De,
    children: /* @__PURE__ */ u0(iT.Provider, {
      value: me,
      children: /* @__PURE__ */ Wk('form', {
        id: Z,
        onSubmit: Ve,
        children: [
          typeof L == 'function' ? L(me, De) : L,
          /* @__PURE__ */ u0('button', {
            style: { left: -9999, position: 'fixed', top: -9999 },
            type: 'submit',
          }),
        ],
      }),
    }),
  });
};
function Fl(L) {
  return rT(iT, L);
}
function db(L) {
  return Fl((N) =>
    (N == null ? void 0 : N.submitted) > 0 || jn.get((N == null ? void 0 : N.touched) || {}, L)
      ? jn.get((N == null ? void 0 : N.errors) || {}, L)
      : void 0,
  );
}
function pb(L) {
  return Fl((N) => jn.get((N == null ? void 0 : N.initialValues) || {}, L) || null);
}
function vb(L) {
  return Fl((N) => {
    const w = jn.get(N.values || {}, L) || null,
      Z = jn.get(N.initialValues || {}, L) || null;
    return w !== Z;
  });
}
function hb(L) {
  return Fl((N) => {
    const w = jn.get((N == null ? void 0 : N.disabledFields) || {}, L);
    return typeof w == 'boolean' ? w : !!(N != null && N.disabled);
  });
}
function mb(L) {
  return Fl((N) => {
    const w = jn.get(N.readonlyFields || {}, L);
    return typeof w == 'boolean' ? w : !!N.readOnly;
  });
}
function yb(L) {
  return Fl((N) => !!jn.get((N == null ? void 0 : N.required) || {}, L));
}
function gb(L) {
  return Fl(
    (N) =>
      jn.get((N == null ? void 0 : N.isValidatingFields) || {}, L) ||
      !!(N != null && N.isValidating),
  );
}
function Sb(L) {
  return Fl(
    (N) =>
      (N == null ? void 0 : N.submitted) > 0 || !!jn.get((N == null ? void 0 : N.touched) || {}, L),
  );
}
function Cb(L) {
  return Fl((N) => jn.get(N.values || {}, L) || null);
}
function km() {
  return sb(lT) || (() => {});
}
function Eb(L) {
  const N = km();
  return Hl(
    (w) => {
      N({ name: L, type: 'setDisabled', value: w });
    },
    [N, L],
  );
}
function Tb(L) {
  const N = km();
  return Hl(
    (w) => {
      (w && typeof w.then == 'function' ? w : Promise.resolve(w)).then((he) =>
        N({ error: he, name: L, type: 'setError' }),
      );
    },
    [N, L],
  );
}
function Rb(L) {
  const N = km();
  return Hl((w = !0) => N({ name: L, touched: w, type: 'setTouched' }), [N, L]);
}
function xb(L) {
  const N = km();
  return Hl((w) => N({ name: L, type: 'setValue', value: w }), [N, L]);
}
function Mb(L) {
  const N = pb(L),
    w = Sb(L),
    Z = vb(L),
    he = db(L),
    se = hb(L),
    g = mb(L),
    Fe = gb(L),
    oe = yb(L),
    G = Cb(L),
    _e = Rb(L),
    F = xb(L),
    P = Tb(L),
    K = Eb(L),
    me = Hl(() => {
      F(null);
    }, [F]),
    De = Hl(() => F(N), [N, F]);
  return JE(
    () => ({
      clearValue: me,
      error: he,
      initialValue: N,
      isChanged: Z,
      isDisabled: se,
      isReadOnly: g,
      isRequired: oe,
      isTouched: w,
      isValidating: Fe,
      name: L,
      resetValue: De,
      setDisabled: K,
      setError: P,
      setTouched: _e,
      setValue: F,
      value: G,
    }),
    [me, he, N, Z, se, g, oe, w, Fe, L, De, P, _e, F, K, G],
  );
}
export { Ob as default, Mb as useField, Cb as useFieldValue };
