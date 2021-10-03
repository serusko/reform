(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('use-context-selector'), require('object-path'), require('@emotion/styled')) :
    typeof define === 'function' && define.amd ? define(['react', 'use-context-selector', 'object-path', '@emotion/styled'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['@serusko/formik'] = factory(global.react, global.useContextSelector, global.op, global.styled));
}(this, (function (react, useContextSelector, op, styled) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var op__namespace = /*#__PURE__*/_interopNamespace(op);
    var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    }

    var initialState = {
        changed: {},
        errors: {},
        isValid: true,
        isValidating: false,
        submitted: 0,
        touched: {},
        values: {},
        initialValues: {},
        initialErrors: {},
        initialTouched: {},
    };
    useContextSelector.createContext(initialState);
    useContextSelector.createContext(function () { return undefined; });

    function formReducer(state, action) {
        var _a, _b;
        switch (action.type) {
            // reinitialize form when initial values are changed
            case "initialValues":
                return __assign(__assign({}, state), { initialValues: action.value, 
                    // TODO: reset errors & touched
                    values: state.schema
                        ? state.schema.cast(action.value || {}, {
                            stripUnknown: true,
                        })
                        : (action.value || {}) });
            // handle change with validation
            case "onChange":
                var values = __assign({}, state.values);
                if (op__namespace.get(values, action.name) === action.value) {
                    return state;
                }
                op__namespace.set(values, action.name, action.value);
                return __assign(__assign(__assign({}, state), { changed: __assign(__assign({}, state.changed), (_a = {}, _a[action.name] = true, _a)) }), validate(state.schema, values));
            // handle blur - mark field as touched
            case "setTouched":
                if (Array.isArray(action.name)) {
                    var s_1 = __assign({}, state);
                    action.name.forEach(function (k) { return (s_1.touched[k] = true); });
                    return s_1;
                }
                return __assign(__assign({}, state), { touched: __assign(__assign({}, state.touched), (_b = {}, _b[action.name] = true, _b)) });
            // handle submit - propagate onSubmit if its valid
            case "onSubmit":
                var s_2 = __assign(__assign(__assign({}, state), { submitted: state.submitted + 1 }), validate(state.schema, state.values));
                if (s_2.isValid) {
                    // fork out
                    setTimeout(function () { return action.cb(s_2.values); }, 1);
                }
                return s_2;
            default:
                return state;
        }
    }
    function validate(schema, data) {
        var errors = {};
        var values = data;
        if (!schema) {
            return { errors: {}, isValid: true, values: data };
        }
        try {
            values = schema.validateSync(data, {
                abortEarly: false,
                stripUnknown: true,
            });
        }
        catch (err) {
            if (err.inner) {
                err.inner.forEach(function (errObj) {
                    if (errObj.path) {
                        errors[errObj.path] = errObj.message;
                    }
                });
            }
        }
        return {
            errors: errors,
            isValid: !errors || Object.keys(errors).length === 0,
            values: values,
        };
    }

    var C = function (_a) {
        var className = _a.className, formId = _a.formId;
        return (<button className={className} type="submit">
        Submit {formId}
      </button>);
    };
    styled__default['default'](C)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  overflow: hidden;\n  border: none;\n  padding: 0;\n  height: 0;\n  width: 0;\n"], ["\n  position: absolute;\n  overflow: hidden;\n  border: none;\n  padding: 0;\n  height: 0;\n  width: 0;\n"])));
    var templateObject_1;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function Form(_a) {
        var disabledFields = _a.disabledFields, initialValues = _a.initialValues; _a.logErrors; var disabled = _a.disabled, children = _a.children, onSubmit = _a.onSubmit, schema = _a.schema, id = _a.id, props = __rest(_a, ["disabledFields", "initialValues", "logErrors", "disabled", "children", "onSubmit", "schema", "id"]);
        var reducer = props.reducer || formReducer;
        var _b = react.useReducer(reducer, __assign(__assign({}, initialState), { values: initialValues, disabledFields: disabledFields, initialValues: initialValues, disabled: disabled, schema: schema })), state = _b[0], dispatch = _b[1];
        react.useEffect(function () {
            dispatch({ value: initialValues, type: "initialValues" });
        }, [initialValues]);
        var handleSubmit = react.useCallback(function (e) {
            e.preventDefault();
            dispatch({ cb: function (d) { return onSubmit && onSubmit(d); }, type: "onSubmit" });
        }, [onSubmit]);
        var c = react.useMemo(function () { return children; }, [children]);
        return (
        // @ts-ignore
        <FormActionContext.Provider value={dispatch}>
          <FormStateContext.Provider value={state}>
            <form id={id} onSubmit={handleSubmit}>
              {c}
              <HiddenSubmit />
            </form>
          </FormStateContext.Provider>
        </FormActionContext.Provider>);
    }

    var returnLibrary = function () {
        return {
            Form: Form,
        };
    };
    var index = returnLibrary();

    return index;

})));
//# sourceMappingURL=index.umd.js.map
