import { jsx as C, jsxs as P } from "react/jsx-runtime";
import { useRef as v, useCallback as F, useReducer as R, useMemo as E, useEffect as x } from "react";
import { createContext as I, useContextSelector as j, useContext as k } from "use-context-selector";
import * as w from "object-path";
import { set as S, get as b } from "object-path";
const T = {
  errors: {},
  initialValues: {},
  isValid: !0,
  isValidating: !1,
  lastAction: "init",
  required: {},
  submitted: 0,
  touched: {},
  values: {}
}, O = I(T), A = I(() => {
});
function M(u, e) {
  return function(t, r) {
    switch (r.type) {
      case "initialValues":
        t.initialValues = { ...r.value || {} };
      case "reset":
        t.values = { ...t.initialValues || {} };
      case "init": {
        const i = u == null ? void 0 : u(t.values || {});
        return {
          ...t,
          errors: {},
          initialValues: "initialValues" in r && r.initialValues || t.initialValues || {},
          isSubmitting: !1,
          isValid: !i,
          isValidating: !1,
          required: (e == null ? void 0 : e(t.values)) || {},
          submitted: 0,
          touched: {}
        };
      }
      case "setValue": {
        const i = { ...t.values };
        if (w.get(i, r.name) === r.value)
          return t;
        S(i, r.name, r.value);
        const s = u == null ? void 0 : u(i);
        let o = t.touched || {};
        return b(o, r.name) || (o = { ...o }, S(o, r.name, !0)), {
          ...t,
          errors: s || {},
          isValid: !s,
          required: (e == null ? void 0 : e(i)) || {},
          touched: o,
          values: i
        };
      }
      case "setReadOnly": {
        if (!r.name)
          return t.readOnly === r.value ? t : { ...t, readOnly: !!r.value };
        const i = t.disabledFields || {};
        return S(i, r.name, r.value), { ...t, readonlyFields: i };
      }
      case "setDisabled": {
        if (!r.name)
          return t.disabled === r.value ? t : { ...t, disabled: !!r.value };
        const i = t.disabledFields || {};
        return S(i, r.name, r.value), { ...t, disabledFields: i };
      }
      case "setTouched": {
        const i = (r.name ? Array.isArray(r.name) ? r.name : [r.name] : []).filter((o) => t.touched[o] !== r.touched);
        if (!i.length)
          return t;
        const s = i.reduce(
          (o, h) => ({ ...o, [h]: !0 }),
          t.touched || {}
        );
        return { ...t, touched: s };
      }
      case "startSubmit": {
        if (t.isSubmitting)
          return t;
        const i = u == null ? void 0 : u(t.values), s = !i;
        return {
          ...t,
          disabled: s,
          errors: i || {},
          isSubmitting: s,
          isValid: s,
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
function U(u, e, n, t, r, i) {
  const s = v(), o = v((c, l, f) => {
    const p = s.current, a = r.current, d = i.current;
    if (!p) {
      console.error('Cannot access to Dispatch trigger inside "on" action');
      return;
    }
    if (a && c.type === "startSubmit" && f.isSubmitting && !l.isSubmitting) {
      const V = a == null ? void 0 : a(f.values);
      V && typeof V.then == "function" ? V.finally(() => p({ type: "endSubmit" })) : p({ type: "endSubmit" });
    }
    d && d(c, l, f, p);
  }), h = F(
    (c, l) => {
      const f = u(c, l);
      return o.current(l, c, f), f;
    },
    [u, o]
  ), m = R(
    h,
    T,
    (c) => u(
      {
        ...c,
        disabled: n,
        initialValues: e || {},
        readOnly: t,
        values: e || {}
      },
      { type: "init" }
    )
  );
  return s.current = m[1], m;
}
const $ = ({
  children: u,
  disabled: e,
  getRequired: n,
  id: t,
  initialValues: r,
  onStateUpdate: i,
  onSubmit: s,
  readOnly: o,
  reducer: h,
  validation: m
}) => {
  const c = F(
    (D) => (m == null ? void 0 : m(D)) || void 0,
    [m]
  ), l = E(
    () => h || M(c, n),
    [n, h, c]
  ), f = v(i);
  f.current = i;
  const p = v(s);
  p.current = s;
  const [a, d] = U(
    l,
    r,
    !!e,
    !!o,
    p,
    f
  );
  x(() => {
    r !== a.initialValues && d({ type: "initialValues", value: r });
  }, [r]), x(() => {
    a.disabled !== !!e && d({ type: "setDisabled", value: !!e });
  }, [e, d]);
  const V = F(
    (D) => {
      D.preventDefault(), d({ type: "startSubmit" });
    },
    [d]
  );
  return /* @__PURE__ */ C(A.Provider, { value: d, children: /* @__PURE__ */ C(O.Provider, { value: a, children: /* @__PURE__ */ P("form", { id: t, onSubmit: V, children: [
    typeof u == "function" ? u(a, d) : u,
    /* @__PURE__ */ C("button", { style: { left: -9999, position: "fixed", top: -9999 }, type: "submit" })
  ] }) }) });
}, te = $;
function y(u) {
  return j(O, u);
}
function z(u) {
  return y(
    (e) => (e == null ? void 0 : e.submitted) > 0 || b((e == null ? void 0 : e.touched) || {}, u) ? b((e == null ? void 0 : e.errors) || {}, u) : void 0
  );
}
function B(u) {
  return y((e) => b((e == null ? void 0 : e.initialValues) || {}, u) || null);
}
function G(u) {
  return y((e) => {
    const n = b(e.values || {}, u) || null, t = b(e.initialValues || {}, u) || null;
    return n !== t;
  });
}
function H(u) {
  return y((e) => {
    const n = b((e == null ? void 0 : e.disabledFields) || {}, u);
    return typeof n == "boolean" ? n : !!(e != null && e.disabled);
  });
}
function J(u) {
  return y((e) => {
    const n = b(e.readonlyFields || {}, u);
    return typeof n == "boolean" ? n : !!e.readOnly;
  });
}
function K(u) {
  return y((e) => !!b((e == null ? void 0 : e.required) || {}, u));
}
function L(u) {
  return y((e) => b((e == null ? void 0 : e.isValidatingFields) || {}, u) || !!(e != null && e.isValidating));
}
function N(u) {
  return y((e) => (e == null ? void 0 : e.submitted) > 0 || !!b((e == null ? void 0 : e.touched) || {}, u));
}
function Q(u) {
  return y((e) => b(e.values || {}, u) || null);
}
function g() {
  return k(A) || (() => {
  });
}
function W(u) {
  const e = g();
  return F(
    (n) => {
      e({ name: u, type: "setDisabled", value: n });
    },
    [e, u]
  );
}
function X(u) {
  const e = g();
  return F(
    (n) => {
      (n && typeof n.then == "function" ? n : Promise.resolve(n)).then((r) => e({ error: r, name: u, type: "setError" }));
    },
    [e, u]
  );
}
function Y(u) {
  const e = g();
  return F(
    (n = !0) => e({ name: u, touched: n, type: "setTouched" }),
    [e, u]
  );
}
function Z(u) {
  const e = g();
  return F(
    (n) => e({ name: u, type: "setValue", value: n }),
    [e, u]
  );
}
function re(u) {
  const e = B(u), n = N(u), t = G(u), r = z(u), i = H(u), s = J(u), o = L(u), h = K(u), m = Q(u), c = Y(u), l = Z(u), f = X(u), p = W(u), a = F(() => {
    l(null);
  }, [l]), d = F(() => l(e), [e, l]);
  return E(
    () => ({
      clearValue: a,
      error: r,
      initialValue: e,
      isChanged: t,
      isDisabled: i,
      isReadOnly: s,
      isRequired: h,
      isTouched: n,
      isValidating: o,
      name: u,
      resetValue: d,
      setDisabled: p,
      setError: f,
      setTouched: c,
      setValue: l,
      value: m
    }),
    [
      a,
      r,
      e,
      t,
      i,
      s,
      h,
      n,
      o,
      u,
      d,
      f,
      c,
      l,
      p,
      m
    ]
  );
}
export {
  te as default,
  re as useField,
  Q as useFieldValue
};
