function xf(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, l);
                    o &&
                        Object.defineProperty(
                            e,
                            l,
                            o.get ? o : { enumerable: !0, get: () => r[l] },
                        );
                }
        }
    }
    return Object.freeze(
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
    );
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver((l) => {
        for (const o of l)
            if (o.type === "childList")
                for (const i of o.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(l) {
        const o = {};
        return (
            l.integrity && (o.integrity = l.integrity),
            l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
            l.crossOrigin === "use-credentials"
                ? (o.credentials = "include")
                : l.crossOrigin === "anonymous"
                  ? (o.credentials = "omit")
                  : (o.credentials = "same-origin"),
            o
        );
    }
    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const o = n(l);
        fetch(l.href, o);
    }
})();
function Cf(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
}
var Ba = { exports: {} },
    El = {},
    Wa = { exports: {} },
    M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var or = Symbol.for("react.element"),
    Pf = Symbol.for("react.portal"),
    _f = Symbol.for("react.fragment"),
    Nf = Symbol.for("react.strict_mode"),
    Lf = Symbol.for("react.profiler"),
    Rf = Symbol.for("react.provider"),
    Of = Symbol.for("react.context"),
    zf = Symbol.for("react.forward_ref"),
    Tf = Symbol.for("react.suspense"),
    jf = Symbol.for("react.memo"),
    Mf = Symbol.for("react.lazy"),
    hu = Symbol.iterator;
function Ff(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (hu && e[hu]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var Za = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Qa = Object.assign,
    Ka = {};
function hn(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Ka),
        (this.updater = n || Za);
}
hn.prototype.isReactComponent = {};
hn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
hn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ga() {}
Ga.prototype = hn.prototype;
function wi(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Ka),
        (this.updater = n || Za);
}
var Si = (wi.prototype = new Ga());
Si.constructor = wi;
Qa(Si, hn.prototype);
Si.isPureReactComponent = !0;
var mu = Array.isArray,
    Ya = Object.prototype.hasOwnProperty,
    ki = { current: null },
    Xa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ja(e, t, n) {
    var r,
        l = {},
        o = null,
        i = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t))
            Ya.call(t, r) && !Xa.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n;
    else if (1 < u) {
        for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
        l.children = a;
    }
    if (e && e.defaultProps)
        for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: or,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: ki.current,
    };
}
function If(e, t) {
    return {
        $$typeof: or,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function Ei(e) {
    return typeof e == "object" && e !== null && e.$$typeof === or;
}
function Hf(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var vu = /\/+/g;
function Zl(e, t) {
    return typeof e == "object" && e !== null && e.key != null
        ? Hf("" + e.key)
        : t.toString(36);
}
function Fr(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else
        switch (o) {
            case "string":
            case "number":
                i = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case or:
                    case Pf:
                        i = !0;
                }
        }
    if (i)
        return (
            (i = e),
            (l = l(i)),
            (e = r === "" ? "." + Zl(i, 0) : r),
            mu(l)
                ? ((n = ""),
                  e != null && (n = e.replace(vu, "$&/") + "/"),
                  Fr(l, t, n, "", function (s) {
                      return s;
                  }))
                : l != null &&
                  (Ei(l) &&
                      (l = If(
                          l,
                          n +
                              (!l.key || (i && i.key === l.key)
                                  ? ""
                                  : ("" + l.key).replace(vu, "$&/") + "/") +
                              e,
                      )),
                  t.push(l)),
            1
        );
    if (((i = 0), (r = r === "" ? "." : r + ":"), mu(e)))
        for (var u = 0; u < e.length; u++) {
            o = e[u];
            var a = r + Zl(o, u);
            i += Fr(o, t, n, a, l);
        }
    else if (((a = Ff(e)), typeof a == "function"))
        for (e = a.call(e), u = 0; !(o = e.next()).done; )
            (o = o.value), (a = r + Zl(o, u++)), (i += Fr(o, t, n, a, l));
    else if (o === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : t) +
                    "). If you meant to render a collection of children, use an array instead.",
            ))
        );
    return i;
}
function mr(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return (
        Fr(e, r, "", "", function (o) {
            return t.call(n, o, l++);
        }),
        r
    );
}
function Vf(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n));
                },
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var fe = { current: null },
    Ir = { transition: null },
    Af = {
        ReactCurrentDispatcher: fe,
        ReactCurrentBatchConfig: Ir,
        ReactCurrentOwner: ki,
    };
M.Children = {
    map: mr,
    forEach: function (e, t, n) {
        mr(
            e,
            function () {
                t.apply(this, arguments);
            },
            n,
        );
    },
    count: function (e) {
        var t = 0;
        return (
            mr(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            mr(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Ei(e))
            throw Error(
                "React.Children.only expected to receive a single React element child.",
            );
        return e;
    },
};
M.Component = hn;
M.Fragment = _f;
M.Profiler = Lf;
M.PureComponent = wi;
M.StrictMode = Nf;
M.Suspense = Tf;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Af;
M.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                ".",
        );
    var r = Qa({}, e.props),
        l = e.key,
        o = e.ref,
        i = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((o = t.ref), (i = ki.current)),
            t.key !== void 0 && (l = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var u = e.type.defaultProps;
        for (a in t)
            Ya.call(t, a) &&
                !Xa.hasOwnProperty(a) &&
                (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        u = Array(a);
        for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
        r.children = u;
    }
    return { $$typeof: or, type: e.type, key: l, ref: o, props: r, _owner: i };
};
M.createContext = function (e) {
    return (
        (e = {
            $$typeof: Of,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: Rf, _context: e }),
        (e.Consumer = e)
    );
};
M.createElement = Ja;
M.createFactory = function (e) {
    var t = Ja.bind(null, e);
    return (t.type = e), t;
};
M.createRef = function () {
    return { current: null };
};
M.forwardRef = function (e) {
    return { $$typeof: zf, render: e };
};
M.isValidElement = Ei;
M.lazy = function (e) {
    return { $$typeof: Mf, _payload: { _status: -1, _result: e }, _init: Vf };
};
M.memo = function (e, t) {
    return { $$typeof: jf, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
    var t = Ir.transition;
    Ir.transition = {};
    try {
        e();
    } finally {
        Ir.transition = t;
    }
};
M.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
};
M.useCallback = function (e, t) {
    return fe.current.useCallback(e, t);
};
M.useContext = function (e) {
    return fe.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
    return fe.current.useDeferredValue(e);
};
M.useEffect = function (e, t) {
    return fe.current.useEffect(e, t);
};
M.useId = function () {
    return fe.current.useId();
};
M.useImperativeHandle = function (e, t, n) {
    return fe.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function (e, t) {
    return fe.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function (e, t) {
    return fe.current.useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
    return fe.current.useMemo(e, t);
};
M.useReducer = function (e, t, n) {
    return fe.current.useReducer(e, t, n);
};
M.useRef = function (e) {
    return fe.current.useRef(e);
};
M.useState = function (e) {
    return fe.current.useState(e);
};
M.useSyncExternalStore = function (e, t, n) {
    return fe.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function () {
    return fe.current.useTransition();
};
M.version = "18.2.0";
Wa.exports = M;
var E = Wa.exports;
const k = Cf(E),
    $f = xf({ __proto__: null, default: k }, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Df = E,
    Uf = Symbol.for("react.element"),
    Bf = Symbol.for("react.fragment"),
    Wf = Object.prototype.hasOwnProperty,
    Zf =
        Df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Qf = { key: !0, ref: !0, __self: !0, __source: !0 };
function qa(e, t, n) {
    var r,
        l = {},
        o = null,
        i = null;
    n !== void 0 && (o = "" + n),
        t.key !== void 0 && (o = "" + t.key),
        t.ref !== void 0 && (i = t.ref);
    for (r in t) Wf.call(t, r) && !Qf.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Uf,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Zf.current,
    };
}
El.Fragment = Bf;
El.jsx = qa;
El.jsxs = qa;
Ba.exports = El;
var L = Ba.exports,
    ba = { exports: {} },
    xe = {},
    es = { exports: {} },
    ts = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(_, z) {
        var j = _.length;
        _.push(z);
        e: for (; 0 < j; ) {
            var K = (j - 1) >>> 1,
                q = _[K];
            if (0 < l(q, z)) (_[K] = z), (_[j] = q), (j = K);
            else break e;
        }
    }
    function n(_) {
        return _.length === 0 ? null : _[0];
    }
    function r(_) {
        if (_.length === 0) return null;
        var z = _[0],
            j = _.pop();
        if (j !== z) {
            _[0] = j;
            e: for (var K = 0, q = _.length, pr = q >>> 1; K < pr; ) {
                var Et = 2 * (K + 1) - 1,
                    Wl = _[Et],
                    xt = Et + 1,
                    hr = _[xt];
                if (0 > l(Wl, j))
                    xt < q && 0 > l(hr, Wl)
                        ? ((_[K] = hr), (_[xt] = j), (K = xt))
                        : ((_[K] = Wl), (_[Et] = j), (K = Et));
                else if (xt < q && 0 > l(hr, j))
                    (_[K] = hr), (_[xt] = j), (K = xt);
                else break e;
            }
        }
        return z;
    }
    function l(_, z) {
        var j = _.sortIndex - z.sortIndex;
        return j !== 0 ? j : _.id - z.id;
    }
    if (
        typeof performance == "object" &&
        typeof performance.now == "function"
    ) {
        var o = performance;
        e.unstable_now = function () {
            return o.now();
        };
    } else {
        var i = Date,
            u = i.now();
        e.unstable_now = function () {
            return i.now() - u;
        };
    }
    var a = [],
        s = [],
        m = 1,
        h = null,
        p = 3,
        g = !1,
        y = !1,
        w = !1,
        x = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function d(_) {
        for (var z = n(s); z !== null; ) {
            if (z.callback === null) r(s);
            else if (z.startTime <= _)
                r(s), (z.sortIndex = z.expirationTime), t(a, z);
            else break;
            z = n(s);
        }
    }
    function v(_) {
        if (((w = !1), d(_), !y))
            if (n(a) !== null) (y = !0), Ul(C);
            else {
                var z = n(s);
                z !== null && Bl(v, z.startTime - _);
            }
    }
    function C(_, z) {
        (y = !1), w && ((w = !1), f(O), (O = -1)), (g = !0);
        var j = p;
        try {
            for (
                d(z), h = n(a);
                h !== null && (!(h.expirationTime > z) || (_ && !ye()));

            ) {
                var K = h.callback;
                if (typeof K == "function") {
                    (h.callback = null), (p = h.priorityLevel);
                    var q = K(h.expirationTime <= z);
                    (z = e.unstable_now()),
                        typeof q == "function"
                            ? (h.callback = q)
                            : h === n(a) && r(a),
                        d(z);
                } else r(a);
                h = n(a);
            }
            if (h !== null) var pr = !0;
            else {
                var Et = n(s);
                Et !== null && Bl(v, Et.startTime - z), (pr = !1);
            }
            return pr;
        } finally {
            (h = null), (p = j), (g = !1);
        }
    }
    var N = !1,
        R = null,
        O = -1,
        D = 5,
        T = -1;
    function ye() {
        return !(e.unstable_now() - T < D);
    }
    function gn() {
        if (R !== null) {
            var _ = e.unstable_now();
            T = _;
            var z = !0;
            try {
                z = R(!0, _);
            } finally {
                z ? yn() : ((N = !1), (R = null));
            }
        } else N = !1;
    }
    var yn;
    if (typeof c == "function")
        yn = function () {
            c(gn);
        };
    else if (typeof MessageChannel < "u") {
        var pu = new MessageChannel(),
            Ef = pu.port2;
        (pu.port1.onmessage = gn),
            (yn = function () {
                Ef.postMessage(null);
            });
    } else
        yn = function () {
            x(gn, 0);
        };
    function Ul(_) {
        (R = _), N || ((N = !0), yn());
    }
    function Bl(_, z) {
        O = x(function () {
            _(e.unstable_now());
        }, z);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (_) {
            _.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            y || g || ((y = !0), Ul(C));
        }),
        (e.unstable_forceFrameRate = function (_) {
            0 > _ || 125 < _
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                  )
                : (D = 0 < _ ? Math.floor(1e3 / _) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return p;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(a);
        }),
        (e.unstable_next = function (_) {
            switch (p) {
                case 1:
                case 2:
                case 3:
                    var z = 3;
                    break;
                default:
                    z = p;
            }
            var j = p;
            p = z;
            try {
                return _();
            } finally {
                p = j;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (_, z) {
            switch (_) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    _ = 3;
            }
            var j = p;
            p = _;
            try {
                return z();
            } finally {
                p = j;
            }
        }),
        (e.unstable_scheduleCallback = function (_, z, j) {
            var K = e.unstable_now();
            switch (
                (typeof j == "object" && j !== null
                    ? ((j = j.delay),
                      (j = typeof j == "number" && 0 < j ? K + j : K))
                    : (j = K),
                _)
            ) {
                case 1:
                    var q = -1;
                    break;
                case 2:
                    q = 250;
                    break;
                case 5:
                    q = 1073741823;
                    break;
                case 4:
                    q = 1e4;
                    break;
                default:
                    q = 5e3;
            }
            return (
                (q = j + q),
                (_ = {
                    id: m++,
                    callback: z,
                    priorityLevel: _,
                    startTime: j,
                    expirationTime: q,
                    sortIndex: -1,
                }),
                j > K
                    ? ((_.sortIndex = j),
                      t(s, _),
                      n(a) === null &&
                          _ === n(s) &&
                          (w ? (f(O), (O = -1)) : (w = !0), Bl(v, j - K)))
                    : ((_.sortIndex = q), t(a, _), y || g || ((y = !0), Ul(C))),
                _
            );
        }),
        (e.unstable_shouldYield = ye),
        (e.unstable_wrapCallback = function (_) {
            var z = p;
            return function () {
                var j = p;
                p = z;
                try {
                    return _.apply(this, arguments);
                } finally {
                    p = j;
                }
            };
        });
})(ts);
es.exports = ts;
var Kf = es.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ns = E,
    Ee = Kf;
function S(e) {
    for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var rs = new Set(),
    $n = {};
function It(e, t) {
    on(e, t), on(e + "Capture", t);
}
function on(e, t) {
    for ($n[e] = t, e = 0; e < t.length; e++) rs.add(t[e]);
}
var Ge = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    xo = Object.prototype.hasOwnProperty,
    Gf =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    gu = {},
    yu = {};
function Yf(e) {
    return xo.call(yu, e)
        ? !0
        : xo.call(gu, e)
          ? !1
          : Gf.test(e)
            ? (yu[e] = !0)
            : ((gu[e] = !0), !1);
}
function Xf(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                  ? !n.acceptsBooleans
                  : ((e = e.toLowerCase().slice(0, 5)),
                    e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function Jf(e, t, n, r) {
    if (t === null || typeof t > "u" || Xf(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function de(e, t, n, r, l, o, i) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = l),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = i);
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        le[e] = new de(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    le[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    le[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (e) {
    le[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        le[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    le[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    le[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    le[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    le[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var xi = /[\-:]([a-z])/g;
function Ci(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(xi, Ci);
        le[t] = new de(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(xi, Ci);
        le[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(xi, Ci);
    le[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    le[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new de(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
    le[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Pi(e, t, n, r) {
    var l = le.hasOwnProperty(t) ? le[t] : null;
    (l !== null
        ? l.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (Jf(t, n, l, r) && (n = null),
        r || l === null
            ? Yf(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : l.mustUseProperty
              ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
              : ((t = l.attributeName),
                (r = l.attributeNamespace),
                n === null
                    ? e.removeAttribute(t)
                    : ((l = l.type),
                      (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var qe = ns.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    vr = Symbol.for("react.element"),
    Dt = Symbol.for("react.portal"),
    Ut = Symbol.for("react.fragment"),
    _i = Symbol.for("react.strict_mode"),
    Co = Symbol.for("react.profiler"),
    ls = Symbol.for("react.provider"),
    os = Symbol.for("react.context"),
    Ni = Symbol.for("react.forward_ref"),
    Po = Symbol.for("react.suspense"),
    _o = Symbol.for("react.suspense_list"),
    Li = Symbol.for("react.memo"),
    et = Symbol.for("react.lazy"),
    is = Symbol.for("react.offscreen"),
    wu = Symbol.iterator;
function wn(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (wu && e[wu]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var W = Object.assign,
    Ql;
function Nn(e) {
    if (Ql === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ql = (t && t[1]) || "";
        }
    return (
        `
` +
        Ql +
        e
    );
}
var Kl = !1;
function Gl(e, t) {
    if (!e || Kl) return "";
    Kl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (s) {
                    var r = s;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (s) {
                    r = s;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (s) {
                r = s;
            }
            e();
        }
    } catch (s) {
        if (s && r && typeof s.stack == "string") {
            for (
                var l = s.stack.split(`
`),
                    o = r.stack.split(`
`),
                    i = l.length - 1,
                    u = o.length - 1;
                1 <= i && 0 <= u && l[i] !== o[u];

            )
                u--;
            for (; 1 <= i && 0 <= u; i--, u--)
                if (l[i] !== o[u]) {
                    if (i !== 1 || u !== 1)
                        do
                            if ((i--, u--, 0 > u || l[i] !== o[u])) {
                                var a =
                                    `
` + l[i].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        a.includes("<anonymous>") &&
                                        (a = a.replace(
                                            "<anonymous>",
                                            e.displayName,
                                        )),
                                    a
                                );
                            }
                        while (1 <= i && 0 <= u);
                    break;
                }
        }
    } finally {
        (Kl = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Nn(e) : "";
}
function qf(e) {
    switch (e.tag) {
        case 5:
            return Nn(e.type);
        case 16:
            return Nn("Lazy");
        case 13:
            return Nn("Suspense");
        case 19:
            return Nn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = Gl(e.type, !1)), e;
        case 11:
            return (e = Gl(e.type.render, !1)), e;
        case 1:
            return (e = Gl(e.type, !0)), e;
        default:
            return "";
    }
}
function No(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Ut:
            return "Fragment";
        case Dt:
            return "Portal";
        case Co:
            return "Profiler";
        case _i:
            return "StrictMode";
        case Po:
            return "Suspense";
        case _o:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case os:
                return (e.displayName || "Context") + ".Consumer";
            case ls:
                return (e._context.displayName || "Context") + ".Provider";
            case Ni:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ""),
                        (e =
                            e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case Li:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : No(e.type) || "Memo"
                );
            case et:
                (t = e._payload), (e = e._init);
                try {
                    return No(e(t));
                } catch {}
        }
    return null;
}
function bf(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName ||
                    (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return No(t);
        case 8:
            return t === _i ? "StrictMode" : "Mode";
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
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function vt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function us(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
    );
}
function ed(e) {
    var t = us(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var l = n.get,
            o = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return l.call(this);
                },
                set: function (i) {
                    (r = "" + i), o.call(this, i);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (i) {
                    r = "" + i;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function gr(e) {
    e._valueTracker || (e._valueTracker = ed(e));
}
function as(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return (
        e && (r = us(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function Gr(e) {
    if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Lo(e, t) {
    var n = t.checked;
    return W({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function Su(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = vt(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === "checkbox" || t.type === "radio"
                    ? t.checked != null
                    : t.value != null,
        });
}
function ss(e, t) {
    (t = t.checked), t != null && Pi(e, "checked", t, !1);
}
function Ro(e, t) {
    ss(e, t);
    var n = vt(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? Oo(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Oo(e, t.type, vt(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function ku(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return;
        (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}
function Oo(e, t, n) {
    (t !== "number" || Gr(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ln = Array.isArray;
function bt(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            (l = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== l && (e[n].selected = l),
                l && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + vt(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                (e[l].selected = !0), r && (e[l].defaultSelected = !0);
                return;
            }
            t !== null || e[l].disabled || (t = e[l]);
        }
        t !== null && (t.selected = !0);
    }
}
function zo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
    return W({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}
function Eu(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(S(92));
            if (Ln(n)) {
                if (1 < n.length) throw Error(S(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: vt(n) };
}
function cs(e, t) {
    var n = vt(t.value),
        r = vt(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function xu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
}
function fs(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function To(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? fs(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
          ? "http://www.w3.org/1999/xhtml"
          : e;
}
var yr,
    ds = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, l) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, l);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for (
                yr = yr || document.createElement("div"),
                    yr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = yr.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function Dn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var zn = {
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
    td = ["Webkit", "ms", "Moz", "O"];
Object.keys(zn).forEach(function (e) {
    td.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zn[t] = zn[e]);
    });
});
function ps(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n ||
            typeof t != "number" ||
            t === 0 ||
            (zn.hasOwnProperty(e) && zn[e])
          ? ("" + t).trim()
          : t + "px";
}
function hs(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = ps(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, l) : (e[n] = l);
        }
}
var nd = W(
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
function jo(e, t) {
    if (t) {
        if (nd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(S(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(S(60));
            if (
                typeof t.dangerouslySetInnerHTML != "object" ||
                !("__html" in t.dangerouslySetInnerHTML)
            )
                throw Error(S(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(S(62));
    }
}
function Mo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Fo = null;
function Ri(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var Io = null,
    en = null,
    tn = null;
function Cu(e) {
    if ((e = ar(e))) {
        if (typeof Io != "function") throw Error(S(280));
        var t = e.stateNode;
        t && ((t = Nl(t)), Io(e.stateNode, e.type, t));
    }
}
function ms(e) {
    en ? (tn ? tn.push(e) : (tn = [e])) : (en = e);
}
function vs() {
    if (en) {
        var e = en,
            t = tn;
        if (((tn = en = null), Cu(e), t))
            for (e = 0; e < t.length; e++) Cu(t[e]);
    }
}
function gs(e, t) {
    return e(t);
}
function ys() {}
var Yl = !1;
function ws(e, t, n) {
    if (Yl) return e(t, n);
    Yl = !0;
    try {
        return gs(e, t, n);
    } finally {
        (Yl = !1), (en !== null || tn !== null) && (ys(), vs());
    }
}
function Un(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Nl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
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
            (r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(S(231, t, typeof n));
    return n;
}
var Ho = !1;
if (Ge)
    try {
        var Sn = {};
        Object.defineProperty(Sn, "passive", {
            get: function () {
                Ho = !0;
            },
        }),
            window.addEventListener("test", Sn, Sn),
            window.removeEventListener("test", Sn, Sn);
    } catch {
        Ho = !1;
    }
function rd(e, t, n, r, l, o, i, u, a) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s);
    } catch (m) {
        this.onError(m);
    }
}
var Tn = !1,
    Yr = null,
    Xr = !1,
    Vo = null,
    ld = {
        onError: function (e) {
            (Tn = !0), (Yr = e);
        },
    };
function od(e, t, n, r, l, o, i, u, a) {
    (Tn = !1), (Yr = null), rd.apply(ld, arguments);
}
function id(e, t, n, r, l, o, i, u, a) {
    if ((od.apply(this, arguments), Tn)) {
        if (Tn) {
            var s = Yr;
            (Tn = !1), (Yr = null);
        } else throw Error(S(198));
        Xr || ((Xr = !0), (Vo = s));
    }
}
function Ht(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function Ss(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated;
    }
    return null;
}
function Pu(e) {
    if (Ht(e) !== e) throw Error(S(188));
}
function ud(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = Ht(e)), t === null)) throw Error(S(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null) break;
        var o = l.alternate;
        if (o === null) {
            if (((r = l.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (l.child === o.child) {
            for (o = l.child; o; ) {
                if (o === n) return Pu(l), e;
                if (o === r) return Pu(l), t;
                o = o.sibling;
            }
            throw Error(S(188));
        }
        if (n.return !== r.return) (n = l), (r = o);
        else {
            for (var i = !1, u = l.child; u; ) {
                if (u === n) {
                    (i = !0), (n = l), (r = o);
                    break;
                }
                if (u === r) {
                    (i = !0), (r = l), (n = o);
                    break;
                }
                u = u.sibling;
            }
            if (!i) {
                for (u = o.child; u; ) {
                    if (u === n) {
                        (i = !0), (n = o), (r = l);
                        break;
                    }
                    if (u === r) {
                        (i = !0), (r = o), (n = l);
                        break;
                    }
                    u = u.sibling;
                }
                if (!i) throw Error(S(189));
            }
        }
        if (n.alternate !== r) throw Error(S(190));
    }
    if (n.tag !== 3) throw Error(S(188));
    return n.stateNode.current === n ? e : t;
}
function ks(e) {
    return (e = ud(e)), e !== null ? Es(e) : null;
}
function Es(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = Es(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var xs = Ee.unstable_scheduleCallback,
    _u = Ee.unstable_cancelCallback,
    ad = Ee.unstable_shouldYield,
    sd = Ee.unstable_requestPaint,
    G = Ee.unstable_now,
    cd = Ee.unstable_getCurrentPriorityLevel,
    Oi = Ee.unstable_ImmediatePriority,
    Cs = Ee.unstable_UserBlockingPriority,
    Jr = Ee.unstable_NormalPriority,
    fd = Ee.unstable_LowPriority,
    Ps = Ee.unstable_IdlePriority,
    xl = null,
    De = null;
function dd(e) {
    if (De && typeof De.onCommitFiberRoot == "function")
        try {
            De.onCommitFiberRoot(
                xl,
                e,
                void 0,
                (e.current.flags & 128) === 128,
            );
        } catch {}
}
var Fe = Math.clz32 ? Math.clz32 : md,
    pd = Math.log,
    hd = Math.LN2;
function md(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((pd(e) / hd) | 0)) | 0;
}
var wr = 64,
    Sr = 4194304;
function Rn(e) {
    switch (e & -e) {
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
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function qr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        o = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var u = i & ~l;
        u !== 0 ? (r = Rn(u)) : ((o &= i), o !== 0 && (r = Rn(o)));
    } else (i = n & ~l), i !== 0 ? (r = Rn(i)) : o !== 0 && (r = Rn(o));
    if (r === 0) return 0;
    if (
        t !== 0 &&
        t !== r &&
        !(t & l) &&
        ((l = r & -r),
        (o = t & -t),
        l >= o || (l === 16 && (o & 4194240) !== 0))
    )
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - Fe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
}
function vd(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
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
            return t + 5e3;
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
function gd(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            l = e.expirationTimes,
            o = e.pendingLanes;
        0 < o;

    ) {
        var i = 31 - Fe(o),
            u = 1 << i,
            a = l[i];
        a === -1
            ? (!(u & n) || u & r) && (l[i] = vd(u, t))
            : a <= t && (e.expiredLanes |= u),
            (o &= ~u);
    }
}
function Ao(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function _s() {
    var e = wr;
    return (wr <<= 1), !(wr & 4194240) && (wr = 64), e;
}
function Xl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function ir(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Fe(t)),
        (e[t] = n);
}
function yd(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Fe(n),
            o = 1 << l;
        (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
}
function zi(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Fe(n),
            l = 1 << r;
        (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
}
var I = 0;
function Ns(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var Ls,
    Ti,
    Rs,
    Os,
    zs,
    $o = !1,
    kr = [],
    ut = null,
    at = null,
    st = null,
    Bn = new Map(),
    Wn = new Map(),
    nt = [],
    wd =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " ",
        );
function Nu(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            ut = null;
            break;
        case "dragenter":
        case "dragleave":
            at = null;
            break;
        case "mouseover":
        case "mouseout":
            st = null;
            break;
        case "pointerover":
        case "pointerout":
            Bn.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Wn.delete(t.pointerId);
    }
}
function kn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: o,
              targetContainers: [l],
          }),
          t !== null && ((t = ar(t)), t !== null && Ti(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          l !== null && t.indexOf(l) === -1 && t.push(l),
          e);
}
function Sd(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return (ut = kn(ut, e, t, n, r, l)), !0;
        case "dragenter":
            return (at = kn(at, e, t, n, r, l)), !0;
        case "mouseover":
            return (st = kn(st, e, t, n, r, l)), !0;
        case "pointerover":
            var o = l.pointerId;
            return Bn.set(o, kn(Bn.get(o) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return (
                (o = l.pointerId),
                Wn.set(o, kn(Wn.get(o) || null, e, t, n, r, l)),
                !0
            );
    }
    return !1;
}
function Ts(e) {
    var t = _t(e.target);
    if (t !== null) {
        var n = Ht(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Ss(n)), t !== null)) {
                    (e.blockedOn = t),
                        zs(e.priority, function () {
                            Rs(n);
                        });
                    return;
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function Hr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Do(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Fo = r), n.target.dispatchEvent(r), (Fo = null);
        } else return (t = ar(n)), t !== null && Ti(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Lu(e, t, n) {
    Hr(e) && n.delete(t);
}
function kd() {
    ($o = !1),
        ut !== null && Hr(ut) && (ut = null),
        at !== null && Hr(at) && (at = null),
        st !== null && Hr(st) && (st = null),
        Bn.forEach(Lu),
        Wn.forEach(Lu);
}
function En(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        $o ||
            (($o = !0),
            Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, kd)));
}
function Zn(e) {
    function t(l) {
        return En(l, e);
    }
    if (0 < kr.length) {
        En(kr[0], e);
        for (var n = 1; n < kr.length; n++) {
            var r = kr[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        ut !== null && En(ut, e),
            at !== null && En(at, e),
            st !== null && En(st, e),
            Bn.forEach(t),
            Wn.forEach(t),
            n = 0;
        n < nt.length;
        n++
    )
        (r = nt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < nt.length && ((n = nt[0]), n.blockedOn === null); )
        Ts(n), n.blockedOn === null && nt.shift();
}
var nn = qe.ReactCurrentBatchConfig,
    br = !0;
function Ed(e, t, n, r) {
    var l = I,
        o = nn.transition;
    nn.transition = null;
    try {
        (I = 1), ji(e, t, n, r);
    } finally {
        (I = l), (nn.transition = o);
    }
}
function xd(e, t, n, r) {
    var l = I,
        o = nn.transition;
    nn.transition = null;
    try {
        (I = 4), ji(e, t, n, r);
    } finally {
        (I = l), (nn.transition = o);
    }
}
function ji(e, t, n, r) {
    if (br) {
        var l = Do(e, t, n, r);
        if (l === null) io(e, t, r, el, n), Nu(e, r);
        else if (Sd(l, e, t, n, r)) r.stopPropagation();
        else if ((Nu(e, r), t & 4 && -1 < wd.indexOf(e))) {
            for (; l !== null; ) {
                var o = ar(l);
                if (
                    (o !== null && Ls(o),
                    (o = Do(e, t, n, r)),
                    o === null && io(e, t, r, el, n),
                    o === l)
                )
                    break;
                l = o;
            }
            l !== null && r.stopPropagation();
        } else io(e, t, r, null, n);
    }
}
var el = null;
function Do(e, t, n, r) {
    if (((el = null), (e = Ri(r)), (e = _t(e)), e !== null))
        if (((t = Ht(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = Ss(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (el = e), null;
}
function js(e) {
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
            switch (cd()) {
                case Oi:
                    return 1;
                case Cs:
                    return 4;
                case Jr:
                case fd:
                    return 16;
                case Ps:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var lt = null,
    Mi = null,
    Vr = null;
function Ms() {
    if (Vr) return Vr;
    var e,
        t = Mi,
        n = t.length,
        r,
        l = "value" in lt ? lt.value : lt.textContent,
        o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (Vr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ar(e) {
    var t = e.keyCode;
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function Er() {
    return !0;
}
function Ru() {
    return !1;
}
function Ce(e) {
    function t(n, r, l, o, i) {
        (this._reactName = n),
            (this._targetInst = l),
            (this.type = r),
            (this.nativeEvent = o),
            (this.target = i),
            (this.currentTarget = null);
        for (var u in e)
            e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
        return (
            (this.isDefaultPrevented = (
                o.defaultPrevented != null
                    ? o.defaultPrevented
                    : o.returnValue === !1
            )
                ? Er
                : Ru),
            (this.isPropagationStopped = Ru),
            this
        );
    }
    return (
        W(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != "unknown" &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = Er));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = Er));
            },
            persist: function () {},
            isPersistent: Er,
        }),
        t
    );
}
var mn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Fi = Ce(mn),
    ur = W({}, mn, { view: 0, detail: 0 }),
    Cd = Ce(ur),
    Jl,
    ql,
    xn,
    Cl = W({}, ur, {
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
        getModifierState: Ii,
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
            return "movementX" in e
                ? e.movementX
                : (e !== xn &&
                      (xn && e.type === "mousemove"
                          ? ((Jl = e.screenX - xn.screenX),
                            (ql = e.screenY - xn.screenY))
                          : (ql = Jl = 0),
                      (xn = e)),
                  Jl);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : ql;
        },
    }),
    Ou = Ce(Cl),
    Pd = W({}, Cl, { dataTransfer: 0 }),
    _d = Ce(Pd),
    Nd = W({}, ur, { relatedTarget: 0 }),
    bl = Ce(Nd),
    Ld = W({}, mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Rd = Ce(Ld),
    Od = W({}, mn, {
        clipboardData: function (e) {
            return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    zd = Ce(Od),
    Td = W({}, mn, { data: 0 }),
    zu = Ce(Td),
    jd = {
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
        MozPrintableKey: "Unidentified",
    },
    Md = {
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
        224: "Meta",
    },
    Fd = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function Id(e) {
    var t = this.nativeEvent;
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = Fd[e])
          ? !!t[e]
          : !1;
}
function Ii() {
    return Id;
}
var Hd = W({}, ur, {
        key: function (e) {
            if (e.key) {
                var t = jd[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = Ar(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                  ? Md[e.keyCode] || "Unidentified"
                  : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ii,
        charCode: function (e) {
            return e.type === "keypress" ? Ar(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress"
                ? Ar(e)
                : e.type === "keydown" || e.type === "keyup"
                  ? e.keyCode
                  : 0;
        },
    }),
    Vd = Ce(Hd),
    Ad = W({}, Cl, {
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
    Tu = Ce(Ad),
    $d = W({}, ur, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ii,
    }),
    Dd = Ce($d),
    Ud = W({}, mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Bd = Ce(Ud),
    Wd = W({}, Cl, {
        deltaX: function (e) {
            return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    Zd = Ce(Wd),
    Qd = [9, 13, 27, 32],
    Hi = Ge && "CompositionEvent" in window,
    jn = null;
Ge && "documentMode" in document && (jn = document.documentMode);
var Kd = Ge && "TextEvent" in window && !jn,
    Fs = Ge && (!Hi || (jn && 8 < jn && 11 >= jn)),
    ju = " ",
    Mu = !1;
function Is(e, t) {
    switch (e) {
        case "keyup":
            return Qd.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function Hs(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Bt = !1;
function Gd(e, t) {
    switch (e) {
        case "compositionend":
            return Hs(t);
        case "keypress":
            return t.which !== 32 ? null : ((Mu = !0), ju);
        case "textInput":
            return (e = t.data), e === ju && Mu ? null : e;
        default:
            return null;
    }
}
function Yd(e, t) {
    if (Bt)
        return e === "compositionend" || (!Hi && Is(e, t))
            ? ((e = Ms()), (Vr = Mi = lt = null), (Bt = !1), e)
            : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return Fs && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var Xd = {
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
    week: !0,
};
function Fu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Xd[e.type] : t === "textarea";
}
function Vs(e, t, n, r) {
    ms(r),
        (t = tl(t, "onChange")),
        0 < t.length &&
            ((n = new Fi("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
}
var Mn = null,
    Qn = null;
function Jd(e) {
    Ys(e, 0);
}
function Pl(e) {
    var t = Qt(e);
    if (as(t)) return e;
}
function qd(e, t) {
    if (e === "change") return t;
}
var As = !1;
if (Ge) {
    var eo;
    if (Ge) {
        var to = "oninput" in document;
        if (!to) {
            var Iu = document.createElement("div");
            Iu.setAttribute("oninput", "return;"),
                (to = typeof Iu.oninput == "function");
        }
        eo = to;
    } else eo = !1;
    As = eo && (!document.documentMode || 9 < document.documentMode);
}
function Hu() {
    Mn && (Mn.detachEvent("onpropertychange", $s), (Qn = Mn = null));
}
function $s(e) {
    if (e.propertyName === "value" && Pl(Qn)) {
        var t = [];
        Vs(t, Qn, e, Ri(e)), ws(Jd, t);
    }
}
function bd(e, t, n) {
    e === "focusin"
        ? (Hu(), (Mn = t), (Qn = n), Mn.attachEvent("onpropertychange", $s))
        : e === "focusout" && Hu();
}
function ep(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Pl(Qn);
}
function tp(e, t) {
    if (e === "click") return Pl(t);
}
function np(e, t) {
    if (e === "input" || e === "change") return Pl(t);
}
function rp(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var He = typeof Object.is == "function" ? Object.is : rp;
function Kn(e, t) {
    if (He(e, t)) return !0;
    if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
    )
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!xo.call(t, l) || !He(e[l], t[l])) return !1;
    }
    return !0;
}
function Vu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Au(e, t) {
    var n = Vu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Vu(n);
    }
}
function Ds(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
              ? !1
              : t && t.nodeType === 3
                ? Ds(e, t.parentNode)
                : "contains" in e
                  ? e.contains(t)
                  : e.compareDocumentPosition
                    ? !!(e.compareDocumentPosition(t) & 16)
                    : !1
        : !1;
}
function Us() {
    for (var e = window, t = Gr(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Gr(e.document);
    }
    return t;
}
function Vi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function lp(e) {
    var t = Us(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        Ds(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && Vi(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                "selectionStart" in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var l = n.textContent.length,
                    o = Math.min(r.start, l);
                (r = r.end === void 0 ? o : Math.min(r.end, l)),
                    !e.extend && o > r && ((l = r), (r = o), (o = l)),
                    (l = Au(n, o));
                var i = Au(n, r);
                l &&
                    i &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== l.node ||
                        e.anchorOffset !== l.offset ||
                        e.focusNode !== i.node ||
                        e.focusOffset !== i.offset) &&
                    ((t = t.createRange()),
                    t.setStart(l.node, l.offset),
                    e.removeAllRanges(),
                    o > r
                        ? (e.addRange(t), e.extend(i.node, i.offset))
                        : (t.setEnd(i.node, i.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
            typeof n.focus == "function" && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var op = Ge && "documentMode" in document && 11 >= document.documentMode,
    Wt = null,
    Uo = null,
    Fn = null,
    Bo = !1;
function $u(e, t, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Bo ||
        Wt == null ||
        Wt !== Gr(r) ||
        ((r = Wt),
        "selectionStart" in r && Vi(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (Fn && Kn(Fn, r)) ||
            ((Fn = r),
            (r = tl(Uo, "onSelect")),
            0 < r.length &&
                ((t = new Fi("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = Wt))));
}
function xr(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
    );
}
var Zt = {
        animationend: xr("Animation", "AnimationEnd"),
        animationiteration: xr("Animation", "AnimationIteration"),
        animationstart: xr("Animation", "AnimationStart"),
        transitionend: xr("Transition", "TransitionEnd"),
    },
    no = {},
    Bs = {};
Ge &&
    ((Bs = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete Zt.animationend.animation,
        delete Zt.animationiteration.animation,
        delete Zt.animationstart.animation),
    "TransitionEvent" in window || delete Zt.transitionend.transition);
function _l(e) {
    if (no[e]) return no[e];
    if (!Zt[e]) return e;
    var t = Zt[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in Bs) return (no[e] = t[n]);
    return e;
}
var Ws = _l("animationend"),
    Zs = _l("animationiteration"),
    Qs = _l("animationstart"),
    Ks = _l("transitionend"),
    Gs = new Map(),
    Du =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " ",
        );
function yt(e, t) {
    Gs.set(e, t), It(t, [e]);
}
for (var ro = 0; ro < Du.length; ro++) {
    var lo = Du[ro],
        ip = lo.toLowerCase(),
        up = lo[0].toUpperCase() + lo.slice(1);
    yt(ip, "on" + up);
}
yt(Ws, "onAnimationEnd");
yt(Zs, "onAnimationIteration");
yt(Qs, "onAnimationStart");
yt("dblclick", "onDoubleClick");
yt("focusin", "onFocus");
yt("focusout", "onBlur");
yt(Ks, "onTransitionEnd");
on("onMouseEnter", ["mouseout", "mouseover"]);
on("onMouseLeave", ["mouseout", "mouseover"]);
on("onPointerEnter", ["pointerout", "pointerover"]);
on("onPointerLeave", ["pointerout", "pointerover"]);
It(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
    ),
);
It(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
    ),
);
It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
It(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
It(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
It(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var On =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " ",
        ),
    ap = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(On),
    );
function Uu(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), id(r, t, void 0, e), (e.currentTarget = null);
}
function Ys(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var u = r[i],
                        a = u.instance,
                        s = u.currentTarget;
                    if (((u = u.listener), a !== o && l.isPropagationStopped()))
                        break e;
                    Uu(l, u, s), (o = a);
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (
                        ((u = r[i]),
                        (a = u.instance),
                        (s = u.currentTarget),
                        (u = u.listener),
                        a !== o && l.isPropagationStopped())
                    )
                        break e;
                    Uu(l, u, s), (o = a);
                }
        }
    }
    if (Xr) throw ((e = Vo), (Xr = !1), (Vo = null), e);
}
function V(e, t) {
    var n = t[Go];
    n === void 0 && (n = t[Go] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Xs(t, e, 2, !1), n.add(r));
}
function oo(e, t, n) {
    var r = 0;
    t && (r |= 4), Xs(n, e, r, t);
}
var Cr = "_reactListening" + Math.random().toString(36).slice(2);
function Gn(e) {
    if (!e[Cr]) {
        (e[Cr] = !0),
            rs.forEach(function (n) {
                n !== "selectionchange" &&
                    (ap.has(n) || oo(n, !1, e), oo(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Cr] || ((t[Cr] = !0), oo("selectionchange", !1, t));
    }
}
function Xs(e, t, n, r) {
    switch (js(t)) {
        case 1:
            var l = Ed;
            break;
        case 4:
            l = xd;
            break;
        default:
            l = ji;
    }
    (n = l.bind(null, t, n, e)),
        (l = void 0),
        !Ho ||
            (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
            (l = !0),
        r
            ? l !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: l })
                : e.addEventListener(t, n, !0)
            : l !== void 0
              ? e.addEventListener(t, n, { passive: l })
              : e.addEventListener(t, n, !1);
}
function io(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var a = i.tag;
                        if (
                            (a === 3 || a === 4) &&
                            ((a = i.stateNode.containerInfo),
                            a === l || (a.nodeType === 8 && a.parentNode === l))
                        )
                            return;
                        i = i.return;
                    }
                for (; u !== null; ) {
                    if (((i = _t(u)), i === null)) return;
                    if (((a = i.tag), a === 5 || a === 6)) {
                        r = o = i;
                        continue e;
                    }
                    u = u.parentNode;
                }
            }
            r = r.return;
        }
    ws(function () {
        var s = o,
            m = Ri(n),
            h = [];
        e: {
            var p = Gs.get(e);
            if (p !== void 0) {
                var g = Fi,
                    y = e;
                switch (e) {
                    case "keypress":
                        if (Ar(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        g = Vd;
                        break;
                    case "focusin":
                        (y = "focus"), (g = bl);
                        break;
                    case "focusout":
                        (y = "blur"), (g = bl);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = bl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = Ou;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = _d;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = Dd;
                        break;
                    case Ws:
                    case Zs:
                    case Qs:
                        g = Rd;
                        break;
                    case Ks:
                        g = Bd;
                        break;
                    case "scroll":
                        g = Cd;
                        break;
                    case "wheel":
                        g = Zd;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = zd;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = Tu;
                }
                var w = (t & 4) !== 0,
                    x = !w && e === "scroll",
                    f = w ? (p !== null ? p + "Capture" : null) : p;
                w = [];
                for (var c = s, d; c !== null; ) {
                    d = c;
                    var v = d.stateNode;
                    if (
                        (d.tag === 5 &&
                            v !== null &&
                            ((d = v),
                            f !== null &&
                                ((v = Un(c, f)),
                                v != null && w.push(Yn(c, v, d)))),
                        x)
                    )
                        break;
                    c = c.return;
                }
                0 < w.length &&
                    ((p = new g(p, y, null, n, m)),
                    h.push({ event: p, listeners: w }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((p = e === "mouseover" || e === "pointerover"),
                    (g = e === "mouseout" || e === "pointerout"),
                    p &&
                        n !== Fo &&
                        (y = n.relatedTarget || n.fromElement) &&
                        (_t(y) || y[Ye]))
                )
                    break e;
                if (
                    (g || p) &&
                    ((p =
                        m.window === m
                            ? m
                            : (p = m.ownerDocument)
                              ? p.defaultView || p.parentWindow
                              : window),
                    g
                        ? ((y = n.relatedTarget || n.toElement),
                          (g = s),
                          (y = y ? _t(y) : null),
                          y !== null &&
                              ((x = Ht(y)),
                              y !== x || (y.tag !== 5 && y.tag !== 6)) &&
                              (y = null))
                        : ((g = null), (y = s)),
                    g !== y)
                ) {
                    if (
                        ((w = Ou),
                        (v = "onMouseLeave"),
                        (f = "onMouseEnter"),
                        (c = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((w = Tu),
                            (v = "onPointerLeave"),
                            (f = "onPointerEnter"),
                            (c = "pointer")),
                        (x = g == null ? p : Qt(g)),
                        (d = y == null ? p : Qt(y)),
                        (p = new w(v, c + "leave", g, n, m)),
                        (p.target = x),
                        (p.relatedTarget = d),
                        (v = null),
                        _t(m) === s &&
                            ((w = new w(f, c + "enter", y, n, m)),
                            (w.target = d),
                            (w.relatedTarget = x),
                            (v = w)),
                        (x = v),
                        g && y)
                    )
                        t: {
                            for (w = g, f = y, c = 0, d = w; d; d = $t(d)) c++;
                            for (d = 0, v = f; v; v = $t(v)) d++;
                            for (; 0 < c - d; ) (w = $t(w)), c--;
                            for (; 0 < d - c; ) (f = $t(f)), d--;
                            for (; c--; ) {
                                if (
                                    w === f ||
                                    (f !== null && w === f.alternate)
                                )
                                    break t;
                                (w = $t(w)), (f = $t(f));
                            }
                            w = null;
                        }
                    else w = null;
                    g !== null && Bu(h, p, g, w, !1),
                        y !== null && x !== null && Bu(h, x, y, w, !0);
                }
            }
            e: {
                if (
                    ((p = s ? Qt(s) : window),
                    (g = p.nodeName && p.nodeName.toLowerCase()),
                    g === "select" || (g === "input" && p.type === "file"))
                )
                    var C = qd;
                else if (Fu(p))
                    if (As) C = np;
                    else {
                        C = ep;
                        var N = bd;
                    }
                else
                    (g = p.nodeName) &&
                        g.toLowerCase() === "input" &&
                        (p.type === "checkbox" || p.type === "radio") &&
                        (C = tp);
                if (C && (C = C(e, s))) {
                    Vs(h, C, n, m);
                    break e;
                }
                N && N(e, p, s),
                    e === "focusout" &&
                        (N = p._wrapperState) &&
                        N.controlled &&
                        p.type === "number" &&
                        Oo(p, "number", p.value);
            }
            switch (((N = s ? Qt(s) : window), e)) {
                case "focusin":
                    (Fu(N) || N.contentEditable === "true") &&
                        ((Wt = N), (Uo = s), (Fn = null));
                    break;
                case "focusout":
                    Fn = Uo = Wt = null;
                    break;
                case "mousedown":
                    Bo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (Bo = !1), $u(h, n, m);
                    break;
                case "selectionchange":
                    if (op) break;
                case "keydown":
                case "keyup":
                    $u(h, n, m);
            }
            var R;
            if (Hi)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var O = "onCompositionStart";
                            break e;
                        case "compositionend":
                            O = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            O = "onCompositionUpdate";
                            break e;
                    }
                    O = void 0;
                }
            else
                Bt
                    ? Is(e, n) && (O = "onCompositionEnd")
                    : e === "keydown" &&
                      n.keyCode === 229 &&
                      (O = "onCompositionStart");
            O &&
                (Fs &&
                    n.locale !== "ko" &&
                    (Bt || O !== "onCompositionStart"
                        ? O === "onCompositionEnd" && Bt && (R = Ms())
                        : ((lt = m),
                          (Mi = "value" in lt ? lt.value : lt.textContent),
                          (Bt = !0))),
                (N = tl(s, O)),
                0 < N.length &&
                    ((O = new zu(O, e, null, n, m)),
                    h.push({ event: O, listeners: N }),
                    R
                        ? (O.data = R)
                        : ((R = Hs(n)), R !== null && (O.data = R)))),
                (R = Kd ? Gd(e, n) : Yd(e, n)) &&
                    ((s = tl(s, "onBeforeInput")),
                    0 < s.length &&
                        ((m = new zu(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            n,
                            m,
                        )),
                        h.push({ event: m, listeners: s }),
                        (m.data = R)));
        }
        Ys(h, t);
    });
}
function Yn(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function tl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e,
            o = l.stateNode;
        l.tag === 5 &&
            o !== null &&
            ((l = o),
            (o = Un(e, n)),
            o != null && r.unshift(Yn(e, o, l)),
            (o = Un(e, t)),
            o != null && r.push(Yn(e, o, l))),
            (e = e.return);
    }
    return r;
}
function $t(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function Bu(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
        var u = n,
            a = u.alternate,
            s = u.stateNode;
        if (a !== null && a === r) break;
        u.tag === 5 &&
            s !== null &&
            ((u = s),
            l
                ? ((a = Un(n, o)), a != null && i.unshift(Yn(n, a, u)))
                : l || ((a = Un(n, o)), a != null && i.push(Yn(n, a, u)))),
            (n = n.return);
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
}
var sp = /\r\n?/g,
    cp = /\u0000|\uFFFD/g;
function Wu(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            sp,
            `
`,
        )
        .replace(cp, "");
}
function Pr(e, t, n) {
    if (((t = Wu(t)), Wu(e) !== t && n)) throw Error(S(425));
}
function nl() {}
var Wo = null,
    Zo = null;
function Qo(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var Ko = typeof setTimeout == "function" ? setTimeout : void 0,
    fp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Zu = typeof Promise == "function" ? Promise : void 0,
    dp =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof Zu < "u"
              ? function (e) {
                    return Zu.resolve(null).then(e).catch(pp);
                }
              : Ko;
function pp(e) {
    setTimeout(function () {
        throw e;
    });
}
function uo(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if ((e.removeChild(n), l && l.nodeType === 8))
            if (((n = l.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(l), Zn(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = l;
    } while (n);
    Zn(t);
}
function ct(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function Qu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var vn = Math.random().toString(36).slice(2),
    $e = "__reactFiber$" + vn,
    Xn = "__reactProps$" + vn,
    Ye = "__reactContainer$" + vn,
    Go = "__reactEvents$" + vn,
    hp = "__reactListeners$" + vn,
    mp = "__reactHandles$" + vn;
function _t(e) {
    var t = e[$e];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Ye] || n[$e])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = Qu(e); e !== null; ) {
                    if ((n = e[$e])) return n;
                    e = Qu(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function ar(e) {
    return (
        (e = e[$e] || e[Ye]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function Qt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(S(33));
}
function Nl(e) {
    return e[Xn] || null;
}
var Yo = [],
    Kt = -1;
function wt(e) {
    return { current: e };
}
function A(e) {
    0 > Kt || ((e.current = Yo[Kt]), (Yo[Kt] = null), Kt--);
}
function H(e, t) {
    Kt++, (Yo[Kt] = e.current), (e.current = t);
}
var gt = {},
    ae = wt(gt),
    me = wt(!1),
    zt = gt;
function un(e, t) {
    var n = e.type.contextTypes;
    if (!n) return gt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        o;
    for (o in n) l[o] = t[o];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
        l
    );
}
function ve(e) {
    return (e = e.childContextTypes), e != null;
}
function rl() {
    A(me), A(ae);
}
function Ku(e, t, n) {
    if (ae.current !== gt) throw Error(S(168));
    H(ae, t), H(me, n);
}
function Js(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(S(108, bf(e) || "Unknown", l));
    return W({}, n, r);
}
function ll(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            gt),
        (zt = ae.current),
        H(ae, e),
        H(me, me.current),
        !0
    );
}
function Gu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(S(169));
    n
        ? ((e = Js(e, t, zt)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          A(me),
          A(ae),
          H(ae, e))
        : A(me),
        H(me, n);
}
var We = null,
    Ll = !1,
    ao = !1;
function qs(e) {
    We === null ? (We = [e]) : We.push(e);
}
function vp(e) {
    (Ll = !0), qs(e);
}
function St() {
    if (!ao && We !== null) {
        ao = !0;
        var e = 0,
            t = I;
        try {
            var n = We;
            for (I = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (We = null), (Ll = !1);
        } catch (l) {
            throw (We !== null && (We = We.slice(e + 1)), xs(Oi, St), l);
        } finally {
            (I = t), (ao = !1);
        }
    }
    return null;
}
var Gt = [],
    Yt = 0,
    ol = null,
    il = 0,
    Pe = [],
    _e = 0,
    Tt = null,
    Ze = 1,
    Qe = "";
function Ct(e, t) {
    (Gt[Yt++] = il), (Gt[Yt++] = ol), (ol = e), (il = t);
}
function bs(e, t, n) {
    (Pe[_e++] = Ze), (Pe[_e++] = Qe), (Pe[_e++] = Tt), (Tt = e);
    var r = Ze;
    e = Qe;
    var l = 32 - Fe(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - Fe(t) + l;
    if (30 < o) {
        var i = l - (l % 5);
        (o = (r & ((1 << i) - 1)).toString(32)),
            (r >>= i),
            (l -= i),
            (Ze = (1 << (32 - Fe(t) + l)) | (n << l) | r),
            (Qe = o + e);
    } else (Ze = (1 << o) | (n << l) | r), (Qe = e);
}
function Ai(e) {
    e.return !== null && (Ct(e, 1), bs(e, 1, 0));
}
function $i(e) {
    for (; e === ol; )
        (ol = Gt[--Yt]), (Gt[Yt] = null), (il = Gt[--Yt]), (Gt[Yt] = null);
    for (; e === Tt; )
        (Tt = Pe[--_e]),
            (Pe[_e] = null),
            (Qe = Pe[--_e]),
            (Pe[_e] = null),
            (Ze = Pe[--_e]),
            (Pe[_e] = null);
}
var ke = null,
    Se = null,
    $ = !1,
    Me = null;
function ec(e, t) {
    var n = Ne(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Yu(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (ke = e), (Se = ct(t.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (ke = e), (Se = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Tt !== null ? { id: Ze, overflow: Qe } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = Ne(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (ke = e),
                      (Se = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function Xo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Jo(e) {
    if ($) {
        var t = Se;
        if (t) {
            var n = t;
            if (!Yu(e, t)) {
                if (Xo(e)) throw Error(S(418));
                t = ct(n.nextSibling);
                var r = ke;
                t && Yu(e, t)
                    ? ec(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (ke = e));
            }
        } else {
            if (Xo(e)) throw Error(S(418));
            (e.flags = (e.flags & -4097) | 2), ($ = !1), (ke = e);
        }
    }
}
function Xu(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    ke = e;
}
function _r(e) {
    if (e !== ke) return !1;
    if (!$) return Xu(e), ($ = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== "head" && t !== "body" && !Qo(e.type, e.memoizedProps))),
        t && (t = Se))
    ) {
        if (Xo(e)) throw (tc(), Error(S(418)));
        for (; t; ) ec(e, t), (t = ct(t.nextSibling));
    }
    if ((Xu(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(S(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Se = ct(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            Se = null;
        }
    } else Se = ke ? ct(e.stateNode.nextSibling) : null;
    return !0;
}
function tc() {
    for (var e = Se; e; ) e = ct(e.nextSibling);
}
function an() {
    (Se = ke = null), ($ = !1);
}
function Di(e) {
    Me === null ? (Me = [e]) : Me.push(e);
}
var gp = qe.ReactCurrentBatchConfig;
function Te(e, t) {
    if (e && e.defaultProps) {
        (t = W({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var ul = wt(null),
    al = null,
    Xt = null,
    Ui = null;
function Bi() {
    Ui = Xt = al = null;
}
function Wi(e) {
    var t = ul.current;
    A(ul), (e._currentValue = t);
}
function qo(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function rn(e, t) {
    (al = e),
        (Ui = Xt = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (he = !0), (e.firstContext = null));
}
function Re(e) {
    var t = e._currentValue;
    if (Ui !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Xt === null)) {
            if (al === null) throw Error(S(308));
            (Xt = e), (al.dependencies = { lanes: 0, firstContext: e });
        } else Xt = Xt.next = e;
    return t;
}
var Nt = null;
function Zi(e) {
    Nt === null ? (Nt = [e]) : Nt.push(e);
}
function nc(e, t, n, r) {
    var l = t.interleaved;
    return (
        l === null ? ((n.next = n), Zi(t)) : ((n.next = l.next), (l.next = n)),
        (t.interleaved = n),
        Xe(e, r)
    );
}
function Xe(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var tt = !1;
function Qi(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function rc(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function Ke(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function ft(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), F & 2)) {
        var l = r.pending;
        return (
            l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
            (r.pending = t),
            Xe(e, n)
        );
    }
    return (
        (l = r.interleaved),
        l === null ? ((t.next = t), Zi(r)) : ((t.next = l.next), (l.next = t)),
        (r.interleaved = t),
        Xe(e, n)
    );
}
function $r(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), zi(e, n);
    }
}
function Ju(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var l = null,
            o = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
            } while (n !== null);
            o === null ? (l = o = t) : (o = o.next = t);
        } else l = o = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}
function sl(e, t, n, r) {
    var l = e.updateQueue;
    tt = !1;
    var o = l.firstBaseUpdate,
        i = l.lastBaseUpdate,
        u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var a = u,
            s = a.next;
        (a.next = null), i === null ? (o = s) : (i.next = s), (i = a);
        var m = e.alternate;
        m !== null &&
            ((m = m.updateQueue),
            (u = m.lastBaseUpdate),
            u !== i &&
                (u === null ? (m.firstBaseUpdate = s) : (u.next = s),
                (m.lastBaseUpdate = a)));
    }
    if (o !== null) {
        var h = l.baseState;
        (i = 0), (m = s = a = null), (u = o);
        do {
            var p = u.lane,
                g = u.eventTime;
            if ((r & p) === p) {
                m !== null &&
                    (m = m.next =
                        {
                            eventTime: g,
                            lane: 0,
                            tag: u.tag,
                            payload: u.payload,
                            callback: u.callback,
                            next: null,
                        });
                e: {
                    var y = e,
                        w = u;
                    switch (((p = t), (g = n), w.tag)) {
                        case 1:
                            if (((y = w.payload), typeof y == "function")) {
                                h = y.call(g, h, p);
                                break e;
                            }
                            h = y;
                            break e;
                        case 3:
                            y.flags = (y.flags & -65537) | 128;
                        case 0:
                            if (
                                ((y = w.payload),
                                (p =
                                    typeof y == "function"
                                        ? y.call(g, h, p)
                                        : y),
                                p == null)
                            )
                                break e;
                            h = W({}, h, p);
                            break e;
                        case 2:
                            tt = !0;
                    }
                }
                u.callback !== null &&
                    u.lane !== 0 &&
                    ((e.flags |= 64),
                    (p = l.effects),
                    p === null ? (l.effects = [u]) : p.push(u));
            } else
                (g = {
                    eventTime: g,
                    lane: p,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null,
                }),
                    m === null ? ((s = m = g), (a = h)) : (m = m.next = g),
                    (i |= p);
            if (((u = u.next), u === null)) {
                if (((u = l.shared.pending), u === null)) break;
                (p = u),
                    (u = p.next),
                    (p.next = null),
                    (l.lastBaseUpdate = p),
                    (l.shared.pending = null);
            }
        } while (!0);
        if (
            (m === null && (a = h),
            (l.baseState = a),
            (l.firstBaseUpdate = s),
            (l.lastBaseUpdate = m),
            (t = l.shared.interleaved),
            t !== null)
        ) {
            l = t;
            do (i |= l.lane), (l = l.next);
            while (l !== t);
        } else o === null && (l.shared.lanes = 0);
        (Mt |= i), (e.lanes = i), (e.memoizedState = h);
    }
}
function qu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (((r.callback = null), (r = n), typeof l != "function"))
                    throw Error(S(191, l));
                l.call(r);
            }
        }
}
var lc = new ns.Component().refs;
function bo(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : W({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Rl = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Ht(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = ce(),
            l = pt(e),
            o = Ke(r, l);
        (o.payload = t),
            n != null && (o.callback = n),
            (t = ft(e, o, l)),
            t !== null && (Ie(t, e, l, r), $r(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = ce(),
            l = pt(e),
            o = Ke(r, l);
        (o.tag = 1),
            (o.payload = t),
            n != null && (o.callback = n),
            (t = ft(e, o, l)),
            t !== null && (Ie(t, e, l, r), $r(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = ce(),
            r = pt(e),
            l = Ke(n, r);
        (l.tag = 2),
            t != null && (l.callback = t),
            (t = ft(e, l, r)),
            t !== null && (Ie(t, e, r, n), $r(t, e, r));
    },
};
function bu(e, t, n, r, l, o, i) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, o, i)
            : t.prototype && t.prototype.isPureReactComponent
              ? !Kn(n, r) || !Kn(l, o)
              : !0
    );
}
function oc(e, t, n) {
    var r = !1,
        l = gt,
        o = t.contextType;
    return (
        typeof o == "object" && o !== null
            ? (o = Re(o))
            : ((l = ve(t) ? zt : ae.current),
              (r = t.contextTypes),
              (o = (r = r != null) ? un(e, l) : gt)),
        (t = new t(n, o)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Rl),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = l),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
    );
}
function ea(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Rl.enqueueReplaceState(t, t.state, null);
}
function ei(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = lc), Qi(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
        ? (l.context = Re(o))
        : ((o = ve(t) ? zt : ae.current), (l.context = un(e, o))),
        (l.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == "function" && (bo(e, t, o, n), (l.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function" ||
            (typeof l.UNSAFE_componentWillMount != "function" &&
                typeof l.componentWillMount != "function") ||
            ((t = l.state),
            typeof l.componentWillMount == "function" && l.componentWillMount(),
            typeof l.UNSAFE_componentWillMount == "function" &&
                l.UNSAFE_componentWillMount(),
            t !== l.state && Rl.enqueueReplaceState(l, l.state, null),
            sl(e, n, l, r),
            (l.state = e.memoizedState)),
        typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Cn(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(S(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(S(147, e));
            var l = r,
                o = "" + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == "function" &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (i) {
                      var u = l.refs;
                      u === lc && (u = l.refs = {}),
                          i === null ? delete u[o] : (u[o] = i);
                  }),
                  (t._stringRef = o),
                  t);
        }
        if (typeof e != "string") throw Error(S(284));
        if (!n._owner) throw Error(S(290, e));
    }
    return e;
}
function Nr(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            S(
                31,
                e === "[object Object]"
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e,
            ),
        ))
    );
}
function ta(e) {
    var t = e._init;
    return t(e._payload);
}
function ic(e) {
    function t(f, c) {
        if (e) {
            var d = f.deletions;
            d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
        }
    }
    function n(f, c) {
        if (!e) return null;
        for (; c !== null; ) t(f, c), (c = c.sibling);
        return null;
    }
    function r(f, c) {
        for (f = new Map(); c !== null; )
            c.key !== null ? f.set(c.key, c) : f.set(c.index, c),
                (c = c.sibling);
        return f;
    }
    function l(f, c) {
        return (f = ht(f, c)), (f.index = 0), (f.sibling = null), f;
    }
    function o(f, c, d) {
        return (
            (f.index = d),
            e
                ? ((d = f.alternate),
                  d !== null
                      ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
                      : ((f.flags |= 2), c))
                : ((f.flags |= 1048576), c)
        );
    }
    function i(f) {
        return e && f.alternate === null && (f.flags |= 2), f;
    }
    function u(f, c, d, v) {
        return c === null || c.tag !== 6
            ? ((c = vo(d, f.mode, v)), (c.return = f), c)
            : ((c = l(c, d)), (c.return = f), c);
    }
    function a(f, c, d, v) {
        var C = d.type;
        return C === Ut
            ? m(f, c, d.props.children, v, d.key)
            : c !== null &&
                (c.elementType === C ||
                    (typeof C == "object" &&
                        C !== null &&
                        C.$$typeof === et &&
                        ta(C) === c.type))
              ? ((v = l(c, d.props)), (v.ref = Cn(f, c, d)), (v.return = f), v)
              : ((v = Qr(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = Cn(f, c, d)),
                (v.return = f),
                v);
    }
    function s(f, c, d, v) {
        return c === null ||
            c.tag !== 4 ||
            c.stateNode.containerInfo !== d.containerInfo ||
            c.stateNode.implementation !== d.implementation
            ? ((c = go(d, f.mode, v)), (c.return = f), c)
            : ((c = l(c, d.children || [])), (c.return = f), c);
    }
    function m(f, c, d, v, C) {
        return c === null || c.tag !== 7
            ? ((c = Ot(d, f.mode, v, C)), (c.return = f), c)
            : ((c = l(c, d)), (c.return = f), c);
    }
    function h(f, c, d) {
        if ((typeof c == "string" && c !== "") || typeof c == "number")
            return (c = vo("" + c, f.mode, d)), (c.return = f), c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case vr:
                    return (
                        (d = Qr(c.type, c.key, c.props, null, f.mode, d)),
                        (d.ref = Cn(f, null, c)),
                        (d.return = f),
                        d
                    );
                case Dt:
                    return (c = go(c, f.mode, d)), (c.return = f), c;
                case et:
                    var v = c._init;
                    return h(f, v(c._payload), d);
            }
            if (Ln(c) || wn(c))
                return (c = Ot(c, f.mode, d, null)), (c.return = f), c;
            Nr(f, c);
        }
        return null;
    }
    function p(f, c, d, v) {
        var C = c !== null ? c.key : null;
        if ((typeof d == "string" && d !== "") || typeof d == "number")
            return C !== null ? null : u(f, c, "" + d, v);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case vr:
                    return d.key === C ? a(f, c, d, v) : null;
                case Dt:
                    return d.key === C ? s(f, c, d, v) : null;
                case et:
                    return (C = d._init), p(f, c, C(d._payload), v);
            }
            if (Ln(d) || wn(d)) return C !== null ? null : m(f, c, d, v, null);
            Nr(f, d);
        }
        return null;
    }
    function g(f, c, d, v, C) {
        if ((typeof v == "string" && v !== "") || typeof v == "number")
            return (f = f.get(d) || null), u(c, f, "" + v, C);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case vr:
                    return (
                        (f = f.get(v.key === null ? d : v.key) || null),
                        a(c, f, v, C)
                    );
                case Dt:
                    return (
                        (f = f.get(v.key === null ? d : v.key) || null),
                        s(c, f, v, C)
                    );
                case et:
                    var N = v._init;
                    return g(f, c, d, N(v._payload), C);
            }
            if (Ln(v) || wn(v))
                return (f = f.get(d) || null), m(c, f, v, C, null);
            Nr(c, v);
        }
        return null;
    }
    function y(f, c, d, v) {
        for (
            var C = null, N = null, R = c, O = (c = 0), D = null;
            R !== null && O < d.length;
            O++
        ) {
            R.index > O ? ((D = R), (R = null)) : (D = R.sibling);
            var T = p(f, R, d[O], v);
            if (T === null) {
                R === null && (R = D);
                break;
            }
            e && R && T.alternate === null && t(f, R),
                (c = o(T, c, O)),
                N === null ? (C = T) : (N.sibling = T),
                (N = T),
                (R = D);
        }
        if (O === d.length) return n(f, R), $ && Ct(f, O), C;
        if (R === null) {
            for (; O < d.length; O++)
                (R = h(f, d[O], v)),
                    R !== null &&
                        ((c = o(R, c, O)),
                        N === null ? (C = R) : (N.sibling = R),
                        (N = R));
            return $ && Ct(f, O), C;
        }
        for (R = r(f, R); O < d.length; O++)
            (D = g(R, f, O, d[O], v)),
                D !== null &&
                    (e &&
                        D.alternate !== null &&
                        R.delete(D.key === null ? O : D.key),
                    (c = o(D, c, O)),
                    N === null ? (C = D) : (N.sibling = D),
                    (N = D));
        return (
            e &&
                R.forEach(function (ye) {
                    return t(f, ye);
                }),
            $ && Ct(f, O),
            C
        );
    }
    function w(f, c, d, v) {
        var C = wn(d);
        if (typeof C != "function") throw Error(S(150));
        if (((d = C.call(d)), d == null)) throw Error(S(151));
        for (
            var N = (C = null), R = c, O = (c = 0), D = null, T = d.next();
            R !== null && !T.done;
            O++, T = d.next()
        ) {
            R.index > O ? ((D = R), (R = null)) : (D = R.sibling);
            var ye = p(f, R, T.value, v);
            if (ye === null) {
                R === null && (R = D);
                break;
            }
            e && R && ye.alternate === null && t(f, R),
                (c = o(ye, c, O)),
                N === null ? (C = ye) : (N.sibling = ye),
                (N = ye),
                (R = D);
        }
        if (T.done) return n(f, R), $ && Ct(f, O), C;
        if (R === null) {
            for (; !T.done; O++, T = d.next())
                (T = h(f, T.value, v)),
                    T !== null &&
                        ((c = o(T, c, O)),
                        N === null ? (C = T) : (N.sibling = T),
                        (N = T));
            return $ && Ct(f, O), C;
        }
        for (R = r(f, R); !T.done; O++, T = d.next())
            (T = g(R, f, O, T.value, v)),
                T !== null &&
                    (e &&
                        T.alternate !== null &&
                        R.delete(T.key === null ? O : T.key),
                    (c = o(T, c, O)),
                    N === null ? (C = T) : (N.sibling = T),
                    (N = T));
        return (
            e &&
                R.forEach(function (gn) {
                    return t(f, gn);
                }),
            $ && Ct(f, O),
            C
        );
    }
    function x(f, c, d, v) {
        if (
            (typeof d == "object" &&
                d !== null &&
                d.type === Ut &&
                d.key === null &&
                (d = d.props.children),
            typeof d == "object" && d !== null)
        ) {
            switch (d.$$typeof) {
                case vr:
                    e: {
                        for (var C = d.key, N = c; N !== null; ) {
                            if (N.key === C) {
                                if (((C = d.type), C === Ut)) {
                                    if (N.tag === 7) {
                                        n(f, N.sibling),
                                            (c = l(N, d.props.children)),
                                            (c.return = f),
                                            (f = c);
                                        break e;
                                    }
                                } else if (
                                    N.elementType === C ||
                                    (typeof C == "object" &&
                                        C !== null &&
                                        C.$$typeof === et &&
                                        ta(C) === N.type)
                                ) {
                                    n(f, N.sibling),
                                        (c = l(N, d.props)),
                                        (c.ref = Cn(f, N, d)),
                                        (c.return = f),
                                        (f = c);
                                    break e;
                                }
                                n(f, N);
                                break;
                            } else t(f, N);
                            N = N.sibling;
                        }
                        d.type === Ut
                            ? ((c = Ot(d.props.children, f.mode, v, d.key)),
                              (c.return = f),
                              (f = c))
                            : ((v = Qr(
                                  d.type,
                                  d.key,
                                  d.props,
                                  null,
                                  f.mode,
                                  v,
                              )),
                              (v.ref = Cn(f, c, d)),
                              (v.return = f),
                              (f = v));
                    }
                    return i(f);
                case Dt:
                    e: {
                        for (N = d.key; c !== null; ) {
                            if (c.key === N)
                                if (
                                    c.tag === 4 &&
                                    c.stateNode.containerInfo ===
                                        d.containerInfo &&
                                    c.stateNode.implementation ===
                                        d.implementation
                                ) {
                                    n(f, c.sibling),
                                        (c = l(c, d.children || [])),
                                        (c.return = f),
                                        (f = c);
                                    break e;
                                } else {
                                    n(f, c);
                                    break;
                                }
                            else t(f, c);
                            c = c.sibling;
                        }
                        (c = go(d, f.mode, v)), (c.return = f), (f = c);
                    }
                    return i(f);
                case et:
                    return (N = d._init), x(f, c, N(d._payload), v);
            }
            if (Ln(d)) return y(f, c, d, v);
            if (wn(d)) return w(f, c, d, v);
            Nr(f, d);
        }
        return (typeof d == "string" && d !== "") || typeof d == "number"
            ? ((d = "" + d),
              c !== null && c.tag === 6
                  ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
                  : (n(f, c), (c = vo(d, f.mode, v)), (c.return = f), (f = c)),
              i(f))
            : n(f, c);
    }
    return x;
}
var sn = ic(!0),
    uc = ic(!1),
    sr = {},
    Ue = wt(sr),
    Jn = wt(sr),
    qn = wt(sr);
function Lt(e) {
    if (e === sr) throw Error(S(174));
    return e;
}
function Ki(e, t) {
    switch ((H(qn, t), H(Jn, e), H(Ue, sr), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : To(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = To(t, e));
    }
    A(Ue), H(Ue, t);
}
function cn() {
    A(Ue), A(Jn), A(qn);
}
function ac(e) {
    Lt(qn.current);
    var t = Lt(Ue.current),
        n = To(t, e.type);
    t !== n && (H(Jn, e), H(Ue, n));
}
function Gi(e) {
    Jn.current === e && (A(Ue), A(Jn));
}
var U = wt(0);
function cl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === "$?" || n.data === "$!")
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var so = [];
function Yi() {
    for (var e = 0; e < so.length; e++)
        so[e]._workInProgressVersionPrimary = null;
    so.length = 0;
}
var Dr = qe.ReactCurrentDispatcher,
    co = qe.ReactCurrentBatchConfig,
    jt = 0,
    B = null,
    X = null,
    b = null,
    fl = !1,
    In = !1,
    bn = 0,
    yp = 0;
function oe() {
    throw Error(S(321));
}
function Xi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!He(e[n], t[n])) return !1;
    return !0;
}
function Ji(e, t, n, r, l, o) {
    if (
        ((jt = o),
        (B = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Dr.current = e === null || e.memoizedState === null ? Ep : xp),
        (e = n(r, l)),
        In)
    ) {
        o = 0;
        do {
            if (((In = !1), (bn = 0), 25 <= o)) throw Error(S(301));
            (o += 1),
                (b = X = null),
                (t.updateQueue = null),
                (Dr.current = Cp),
                (e = n(r, l));
        } while (In);
    }
    if (
        ((Dr.current = dl),
        (t = X !== null && X.next !== null),
        (jt = 0),
        (b = X = B = null),
        (fl = !1),
        t)
    )
        throw Error(S(300));
    return e;
}
function qi() {
    var e = bn !== 0;
    return (bn = 0), e;
}
function Ae() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return b === null ? (B.memoizedState = b = e) : (b = b.next = e), b;
}
function Oe() {
    if (X === null) {
        var e = B.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = X.next;
    var t = b === null ? B.memoizedState : b.next;
    if (t !== null) (b = t), (X = e);
    else {
        if (e === null) throw Error(S(310));
        (X = e),
            (e = {
                memoizedState: X.memoizedState,
                baseState: X.baseState,
                baseQueue: X.baseQueue,
                queue: X.queue,
                next: null,
            }),
            b === null ? (B.memoizedState = b = e) : (b = b.next = e);
    }
    return b;
}
function er(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function fo(e) {
    var t = Oe(),
        n = t.queue;
    if (n === null) throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = X,
        l = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            (l.next = o.next), (o.next = i);
        }
        (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
        (o = l.next), (r = r.baseState);
        var u = (i = null),
            a = null,
            s = o;
        do {
            var m = s.lane;
            if ((jt & m) === m)
                a !== null &&
                    (a = a.next =
                        {
                            lane: 0,
                            action: s.action,
                            hasEagerState: s.hasEagerState,
                            eagerState: s.eagerState,
                            next: null,
                        }),
                    (r = s.hasEagerState ? s.eagerState : e(r, s.action));
            else {
                var h = {
                    lane: m,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null,
                };
                a === null ? ((u = a = h), (i = r)) : (a = a.next = h),
                    (B.lanes |= m),
                    (Mt |= m);
            }
            s = s.next;
        } while (s !== null && s !== o);
        a === null ? (i = r) : (a.next = u),
            He(r, t.memoizedState) || (he = !0),
            (t.memoizedState = r),
            (t.baseState = i),
            (t.baseQueue = a),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        l = e;
        do (o = l.lane), (B.lanes |= o), (Mt |= o), (l = l.next);
        while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function po(e) {
    var t = Oe(),
        n = t.queue;
    if (n === null) throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = (l = l.next);
        do (o = e(o, i.action)), (i = i.next);
        while (i !== l);
        He(o, t.memoizedState) || (he = !0),
            (t.memoizedState = o),
            t.baseQueue === null && (t.baseState = o),
            (n.lastRenderedState = o);
    }
    return [o, r];
}
function sc() {}
function cc(e, t) {
    var n = B,
        r = Oe(),
        l = t(),
        o = !He(r.memoizedState, l);
    if (
        (o && ((r.memoizedState = l), (he = !0)),
        (r = r.queue),
        bi(pc.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (b !== null && b.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            tr(9, dc.bind(null, n, r, l, t), void 0, null),
            ee === null)
        )
            throw Error(S(349));
        jt & 30 || fc(n, t, l);
    }
    return l;
}
function fc(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = B.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (B.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function dc(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), hc(t) && mc(e);
}
function pc(e, t, n) {
    return n(function () {
        hc(t) && mc(e);
    });
}
function hc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !He(e, n);
    } catch {
        return !0;
    }
}
function mc(e) {
    var t = Xe(e, 1);
    t !== null && Ie(t, e, 1, -1);
}
function na(e) {
    var t = Ae();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: er,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = kp.bind(null, B, e)),
        [t.memoizedState, e]
    );
}
function tr(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = B.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (B.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    );
}
function vc() {
    return Oe().memoizedState;
}
function Ur(e, t, n, r) {
    var l = Ae();
    (B.flags |= e),
        (l.memoizedState = tr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ol(e, t, n, r) {
    var l = Oe();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (X !== null) {
        var i = X.memoizedState;
        if (((o = i.destroy), r !== null && Xi(r, i.deps))) {
            l.memoizedState = tr(t, n, o, r);
            return;
        }
    }
    (B.flags |= e), (l.memoizedState = tr(1 | t, n, o, r));
}
function ra(e, t) {
    return Ur(8390656, 8, e, t);
}
function bi(e, t) {
    return Ol(2048, 8, e, t);
}
function gc(e, t) {
    return Ol(4, 2, e, t);
}
function yc(e, t) {
    return Ol(4, 4, e, t);
}
function wc(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function Sc(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), Ol(4, 4, wc.bind(null, t, e), n)
    );
}
function eu() {}
function kc(e, t) {
    var n = Oe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Xi(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function Ec(e, t) {
    var n = Oe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Xi(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function xc(e, t, n) {
    return jt & 21
        ? (He(n, t) ||
              ((n = _s()), (B.lanes |= n), (Mt |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (he = !0)),
          (e.memoizedState = n));
}
function wp(e, t) {
    var n = I;
    (I = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = co.transition;
    co.transition = {};
    try {
        e(!1), t();
    } finally {
        (I = n), (co.transition = r);
    }
}
function Cc() {
    return Oe().memoizedState;
}
function Sp(e, t, n) {
    var r = pt(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        Pc(e))
    )
        _c(t, n);
    else if (((n = nc(e, t, n, r)), n !== null)) {
        var l = ce();
        Ie(n, e, r, l), Nc(n, t, r);
    }
}
function kp(e, t, n) {
    var r = pt(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (Pc(e)) _c(t, l);
    else {
        var o = e.alternate;
        if (
            e.lanes === 0 &&
            (o === null || o.lanes === 0) &&
            ((o = t.lastRenderedReducer), o !== null)
        )
            try {
                var i = t.lastRenderedState,
                    u = o(i, n);
                if (((l.hasEagerState = !0), (l.eagerState = u), He(u, i))) {
                    var a = t.interleaved;
                    a === null
                        ? ((l.next = l), Zi(t))
                        : ((l.next = a.next), (a.next = l)),
                        (t.interleaved = l);
                    return;
                }
            } catch {
            } finally {
            }
        (n = nc(e, t, l, r)),
            n !== null && ((l = ce()), Ie(n, e, r, l), Nc(n, t, r));
    }
}
function Pc(e) {
    var t = e.alternate;
    return e === B || (t !== null && t === B);
}
function _c(e, t) {
    In = fl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function Nc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), zi(e, n);
    }
}
var dl = {
        readContext: Re,
        useCallback: oe,
        useContext: oe,
        useEffect: oe,
        useImperativeHandle: oe,
        useInsertionEffect: oe,
        useLayoutEffect: oe,
        useMemo: oe,
        useReducer: oe,
        useRef: oe,
        useState: oe,
        useDebugValue: oe,
        useDeferredValue: oe,
        useTransition: oe,
        useMutableSource: oe,
        useSyncExternalStore: oe,
        useId: oe,
        unstable_isNewReconciler: !1,
    },
    Ep = {
        readContext: Re,
        useCallback: function (e, t) {
            return (Ae().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Re,
        useEffect: ra,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                Ur(4194308, 4, wc.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return Ur(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Ur(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Ae();
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            );
        },
        useReducer: function (e, t, n) {
            var r = Ae();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Sp.bind(null, B, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = Ae();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: na,
        useDebugValue: eu,
        useDeferredValue: function (e) {
            return (Ae().memoizedState = e);
        },
        useTransition: function () {
            var e = na(!1),
                t = e[0];
            return (e = wp.bind(null, e[1])), (Ae().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = B,
                l = Ae();
            if ($) {
                if (n === void 0) throw Error(S(407));
                n = n();
            } else {
                if (((n = t()), ee === null)) throw Error(S(349));
                jt & 30 || fc(r, t, n);
            }
            l.memoizedState = n;
            var o = { value: n, getSnapshot: t };
            return (
                (l.queue = o),
                ra(pc.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                tr(9, dc.bind(null, r, o, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = Ae(),
                t = ee.identifierPrefix;
            if ($) {
                var n = Qe,
                    r = Ze;
                (n = (r & ~(1 << (32 - Fe(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = bn++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = yp++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    xp = {
        readContext: Re,
        useCallback: kc,
        useContext: Re,
        useEffect: bi,
        useImperativeHandle: Sc,
        useInsertionEffect: gc,
        useLayoutEffect: yc,
        useMemo: Ec,
        useReducer: fo,
        useRef: vc,
        useState: function () {
            return fo(er);
        },
        useDebugValue: eu,
        useDeferredValue: function (e) {
            var t = Oe();
            return xc(t, X.memoizedState, e);
        },
        useTransition: function () {
            var e = fo(er)[0],
                t = Oe().memoizedState;
            return [e, t];
        },
        useMutableSource: sc,
        useSyncExternalStore: cc,
        useId: Cc,
        unstable_isNewReconciler: !1,
    },
    Cp = {
        readContext: Re,
        useCallback: kc,
        useContext: Re,
        useEffect: bi,
        useImperativeHandle: Sc,
        useInsertionEffect: gc,
        useLayoutEffect: yc,
        useMemo: Ec,
        useReducer: po,
        useRef: vc,
        useState: function () {
            return po(er);
        },
        useDebugValue: eu,
        useDeferredValue: function (e) {
            var t = Oe();
            return X === null
                ? (t.memoizedState = e)
                : xc(t, X.memoizedState, e);
        },
        useTransition: function () {
            var e = po(er)[0],
                t = Oe().memoizedState;
            return [e, t];
        },
        useMutableSource: sc,
        useSyncExternalStore: cc,
        useId: Cc,
        unstable_isNewReconciler: !1,
    };
function fn(e, t) {
    try {
        var n = "",
            r = t;
        do (n += qf(r)), (r = r.return);
        while (r);
        var l = n;
    } catch (o) {
        l =
            `
Error generating stack: ` +
            o.message +
            `
` +
            o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
}
function ho(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ti(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Pp = typeof WeakMap == "function" ? WeakMap : Map;
function Lc(e, t, n) {
    (n = Ke(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            hl || ((hl = !0), (fi = r)), ti(e, t);
        }),
        n
    );
}
function Rc(e, t, n) {
    (n = Ke(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        (n.payload = function () {
            return r(l);
        }),
            (n.callback = function () {
                ti(e, t);
            });
    }
    var o = e.stateNode;
    return (
        o !== null &&
            typeof o.componentDidCatch == "function" &&
            (n.callback = function () {
                ti(e, t),
                    typeof r != "function" &&
                        (dt === null ? (dt = new Set([this])) : dt.add(this));
                var i = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: i !== null ? i : "",
                });
            }),
        n
    );
}
function la(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Pp();
        var l = new Set();
        r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Ap.bind(null, e, t, n)), t.then(e, e));
}
function oa(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function ia(e, t, n, r, l) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = l), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = Ke(-1, 1)), (t.tag = 2), ft(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var _p = qe.ReactCurrentOwner,
    he = !1;
function se(e, t, n, r) {
    t.child = e === null ? uc(t, null, n, r) : sn(t, e.child, n, r);
}
function ua(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
        rn(t, l),
        (r = Ji(e, t, n, r, o, l)),
        (n = qi()),
        e !== null && !he
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~l),
              Je(e, t, l))
            : ($ && n && Ai(t), (t.flags |= 1), se(e, t, r, l), t.child)
    );
}
function aa(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" &&
            !au(o) &&
            o.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = o), Oc(e, t, o, r, l))
            : ((e = Qr(n.type, null, r, t, t.mode, l)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((o = e.child), !(e.lanes & l))) {
        var i = o.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : Kn),
            n(i, r) && e.ref === t.ref)
        )
            return Je(e, t, l);
    }
    return (
        (t.flags |= 1),
        (e = ht(o, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function Oc(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Kn(o, r) && e.ref === t.ref)
            if (((he = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
                e.flags & 131072 && (he = !0);
            else return (t.lanes = e.lanes), Je(e, t, l);
    }
    return ni(e, t, n, r, l);
}
function zc(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                H(qt, we),
                (we |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = o !== null ? o.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    H(qt, we),
                    (we |= e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = o !== null ? o.baseLanes : n),
                H(qt, we),
                (we |= r);
        }
    else
        o !== null
            ? ((r = o.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            H(qt, we),
            (we |= r);
    return se(e, t, l, n), t.child;
}
function Tc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function ni(e, t, n, r, l) {
    var o = ve(n) ? zt : ae.current;
    return (
        (o = un(t, o)),
        rn(t, l),
        (n = Ji(e, t, n, r, o, l)),
        (r = qi()),
        e !== null && !he
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~l),
              Je(e, t, l))
            : ($ && r && Ai(t), (t.flags |= 1), se(e, t, n, l), t.child)
    );
}
function sa(e, t, n, r, l) {
    if (ve(n)) {
        var o = !0;
        ll(t);
    } else o = !1;
    if ((rn(t, l), t.stateNode === null))
        Br(e, t), oc(t, n, r), ei(t, n, r, l), (r = !0);
    else if (e === null) {
        var i = t.stateNode,
            u = t.memoizedProps;
        i.props = u;
        var a = i.context,
            s = n.contextType;
        typeof s == "object" && s !== null
            ? (s = Re(s))
            : ((s = ve(n) ? zt : ae.current), (s = un(t, s)));
        var m = n.getDerivedStateFromProps,
            h =
                typeof m == "function" ||
                typeof i.getSnapshotBeforeUpdate == "function";
        h ||
            (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                typeof i.componentWillReceiveProps != "function") ||
            ((u !== r || a !== s) && ea(t, i, r, s)),
            (tt = !1);
        var p = t.memoizedState;
        (i.state = p),
            sl(t, r, i, l),
            (a = t.memoizedState),
            u !== r || p !== a || me.current || tt
                ? (typeof m == "function" &&
                      (bo(t, n, m, r), (a = t.memoizedState)),
                  (u = tt || bu(t, n, u, r, p, a, s))
                      ? (h ||
                            (typeof i.UNSAFE_componentWillMount != "function" &&
                                typeof i.componentWillMount != "function") ||
                            (typeof i.componentWillMount == "function" &&
                                i.componentWillMount(),
                            typeof i.UNSAFE_componentWillMount == "function" &&
                                i.UNSAFE_componentWillMount()),
                        typeof i.componentDidMount == "function" &&
                            (t.flags |= 4194308))
                      : (typeof i.componentDidMount == "function" &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = a)),
                  (i.props = r),
                  (i.state = a),
                  (i.context = s),
                  (r = u))
                : (typeof i.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                  (r = !1));
    } else {
        (i = t.stateNode),
            rc(e, t),
            (u = t.memoizedProps),
            (s = t.type === t.elementType ? u : Te(t.type, u)),
            (i.props = s),
            (h = t.pendingProps),
            (p = i.context),
            (a = n.contextType),
            typeof a == "object" && a !== null
                ? (a = Re(a))
                : ((a = ve(n) ? zt : ae.current), (a = un(t, a)));
        var g = n.getDerivedStateFromProps;
        (m =
            typeof g == "function" ||
            typeof i.getSnapshotBeforeUpdate == "function") ||
            (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                typeof i.componentWillReceiveProps != "function") ||
            ((u !== h || p !== a) && ea(t, i, r, a)),
            (tt = !1),
            (p = t.memoizedState),
            (i.state = p),
            sl(t, r, i, l);
        var y = t.memoizedState;
        u !== h || p !== y || me.current || tt
            ? (typeof g == "function" &&
                  (bo(t, n, g, r), (y = t.memoizedState)),
              (s = tt || bu(t, n, s, r, p, y, a) || !1)
                  ? (m ||
                        (typeof i.UNSAFE_componentWillUpdate != "function" &&
                            typeof i.componentWillUpdate != "function") ||
                        (typeof i.componentWillUpdate == "function" &&
                            i.componentWillUpdate(r, y, a),
                        typeof i.UNSAFE_componentWillUpdate == "function" &&
                            i.UNSAFE_componentWillUpdate(r, y, a)),
                    typeof i.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate == "function" &&
                        (t.flags |= 1024))
                  : (typeof i.componentDidUpdate != "function" ||
                        (u === e.memoizedProps && p === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate != "function" ||
                        (u === e.memoizedProps && p === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = y)),
              (i.props = r),
              (i.state = y),
              (i.context = a),
              (r = s))
            : (typeof i.componentDidUpdate != "function" ||
                  (u === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                  (u === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return ri(e, t, n, r, o, l);
}
function ri(e, t, n, r, l, o) {
    Tc(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && Gu(t, n, !1), Je(e, t, o);
    (r = t.stateNode), (_p.current = t);
    var u =
        i && typeof n.getDerivedStateFromError != "function"
            ? null
            : r.render();
    return (
        (t.flags |= 1),
        e !== null && i
            ? ((t.child = sn(t, e.child, null, o)),
              (t.child = sn(t, null, u, o)))
            : se(e, t, u, o),
        (t.memoizedState = r.state),
        l && Gu(t, n, !0),
        t.child
    );
}
function jc(e) {
    var t = e.stateNode;
    t.pendingContext
        ? Ku(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && Ku(e, t.context, !1),
        Ki(e, t.containerInfo);
}
function ca(e, t, n, r, l) {
    return an(), Di(l), (t.flags |= 256), se(e, t, n, r), t.child;
}
var li = { dehydrated: null, treeContext: null, retryLane: 0 };
function oi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Mc(e, t, n) {
    var r = t.pendingProps,
        l = U.current,
        o = !1,
        i = (t.flags & 128) !== 0,
        u;
    if (
        ((u = i) ||
            (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
        u
            ? ((o = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (l |= 1),
        H(U, l & 1),
        e === null)
    )
        return (
            Jo(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === "$!"
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((i = r.children),
                  (e = r.fallback),
                  o
                      ? ((r = t.mode),
                        (o = t.child),
                        (i = { mode: "hidden", children: i }),
                        !(r & 1) && o !== null
                            ? ((o.childLanes = 0), (o.pendingProps = i))
                            : (o = jl(i, r, 0, null)),
                        (e = Ot(e, r, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = oi(n)),
                        (t.memoizedState = li),
                        e)
                      : tu(t, i))
        );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
        return Np(e, t, i, r, u, l, n);
    if (o) {
        (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
        var a = { mode: "hidden", children: r.children };
        return (
            !(i & 1) && t.child !== l
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = a),
                  (t.deletions = null))
                : ((r = ht(l, a)),
                  (r.subtreeFlags = l.subtreeFlags & 14680064)),
            u !== null
                ? (o = ht(u, o))
                : ((o = Ot(o, i, n, null)), (o.flags |= 2)),
            (o.return = t),
            (r.return = t),
            (r.sibling = o),
            (t.child = r),
            (r = o),
            (o = t.child),
            (i = e.child.memoizedState),
            (i =
                i === null
                    ? oi(n)
                    : {
                          baseLanes: i.baseLanes | n,
                          cachePool: null,
                          transitions: i.transitions,
                      }),
            (o.memoizedState = i),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = li),
            r
        );
    }
    return (
        (o = e.child),
        (e = o.sibling),
        (r = ht(o, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function tu(e, t) {
    return (
        (t = jl({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function Lr(e, t, n, r) {
    return (
        r !== null && Di(r),
        sn(t, e.child, null, n),
        (e = tu(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function Np(e, t, n, r, l, o, i) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = ho(Error(S(422)))), Lr(e, t, i, r))
            : t.memoizedState !== null
              ? ((t.child = e.child), (t.flags |= 128), null)
              : ((o = r.fallback),
                (l = t.mode),
                (r = jl({ mode: "visible", children: r.children }, l, 0, null)),
                (o = Ot(o, l, i, null)),
                (o.flags |= 2),
                (r.return = t),
                (o.return = t),
                (r.sibling = o),
                (t.child = r),
                t.mode & 1 && sn(t, e.child, null, i),
                (t.child.memoizedState = oi(i)),
                (t.memoizedState = li),
                o);
    if (!(t.mode & 1)) return Lr(e, t, i, null);
    if (l.data === "$!") {
        if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
        return (
            (r = u), (o = Error(S(419))), (r = ho(o, r, void 0)), Lr(e, t, i, r)
        );
    }
    if (((u = (i & e.childLanes) !== 0), he || u)) {
        if (((r = ee), r !== null)) {
            switch (i & -i) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
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
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0;
            }
            (l = l & (r.suspendedLanes | i) ? 0 : l),
                l !== 0 &&
                    l !== o.retryLane &&
                    ((o.retryLane = l), Xe(e, l), Ie(r, e, l, -1));
        }
        return uu(), (r = ho(Error(S(421)))), Lr(e, t, i, r);
    }
    return l.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = $p.bind(null, e)),
          (l._reactRetry = t),
          null)
        : ((e = o.treeContext),
          (Se = ct(l.nextSibling)),
          (ke = t),
          ($ = !0),
          (Me = null),
          e !== null &&
              ((Pe[_e++] = Ze),
              (Pe[_e++] = Qe),
              (Pe[_e++] = Tt),
              (Ze = e.id),
              (Qe = e.overflow),
              (Tt = t)),
          (t = tu(t, r.children)),
          (t.flags |= 4096),
          t);
}
function fa(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), qo(e.return, t, n);
}
function mo(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: l,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = l));
}
function Fc(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        o = r.tail;
    if ((se(e, t, r.children, n), (r = U.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && fa(e, n, t);
                else if (e.tag === 19) fa(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((H(U, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (l) {
            case "forwards":
                for (n = t.child, l = null; n !== null; )
                    (e = n.alternate),
                        e !== null && cl(e) === null && (l = n),
                        (n = n.sibling);
                (n = l),
                    n === null
                        ? ((l = t.child), (t.child = null))
                        : ((l = n.sibling), (n.sibling = null)),
                    mo(t, !1, l, n, o);
                break;
            case "backwards":
                for (n = null, l = t.child, t.child = null; l !== null; ) {
                    if (((e = l.alternate), e !== null && cl(e) === null)) {
                        t.child = l;
                        break;
                    }
                    (e = l.sibling), (l.sibling = n), (n = l), (l = e);
                }
                mo(t, !0, n, null, o);
                break;
            case "together":
                mo(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Br(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Je(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (Mt |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(S(153));
    if (t.child !== null) {
        for (
            e = t.child, n = ht(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = ht(e, e.pendingProps)),
                (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function Lp(e, t, n) {
    switch (t.tag) {
        case 3:
            jc(t), an();
            break;
        case 5:
            ac(t);
            break;
        case 1:
            ve(t.type) && ll(t);
            break;
        case 4:
            Ki(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            H(ul, r._currentValue), (r._currentValue = l);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (H(U, U.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                      ? Mc(e, t, n)
                      : (H(U, U.current & 1),
                        (e = Je(e, t, n)),
                        e !== null ? e.sibling : null);
            H(U, U.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return Fc(e, t, n);
                t.flags |= 128;
            }
            if (
                ((l = t.memoizedState),
                l !== null &&
                    ((l.rendering = null),
                    (l.tail = null),
                    (l.lastEffect = null)),
                H(U, U.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), zc(e, t, n);
    }
    return Je(e, t, n);
}
var Ic, ii, Hc, Vc;
Ic = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
ii = function () {};
Hc = function (e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        (e = t.stateNode), Lt(Ue.current);
        var o = null;
        switch (n) {
            case "input":
                (l = Lo(e, l)), (r = Lo(e, r)), (o = []);
                break;
            case "select":
                (l = W({}, l, { value: void 0 })),
                    (r = W({}, r, { value: void 0 })),
                    (o = []);
                break;
            case "textarea":
                (l = zo(e, l)), (r = zo(e, r)), (o = []);
                break;
            default:
                typeof l.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = nl);
        }
        jo(n, r);
        var i;
        n = null;
        for (s in l)
            if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
                if (s === "style") {
                    var u = l[s];
                    for (i in u)
                        u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                } else
                    s !== "dangerouslySetInnerHTML" &&
                        s !== "children" &&
                        s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        ($n.hasOwnProperty(s)
                            ? o || (o = [])
                            : (o = o || []).push(s, null));
        for (s in r) {
            var a = r[s];
            if (
                ((u = l != null ? l[s] : void 0),
                r.hasOwnProperty(s) && a !== u && (a != null || u != null))
            )
                if (s === "style")
                    if (u) {
                        for (i in u)
                            !u.hasOwnProperty(i) ||
                                (a && a.hasOwnProperty(i)) ||
                                (n || (n = {}), (n[i] = ""));
                        for (i in a)
                            a.hasOwnProperty(i) &&
                                u[i] !== a[i] &&
                                (n || (n = {}), (n[i] = a[i]));
                    } else n || (o || (o = []), o.push(s, n)), (n = a);
                else
                    s === "dangerouslySetInnerHTML"
                        ? ((a = a ? a.__html : void 0),
                          (u = u ? u.__html : void 0),
                          a != null && u !== a && (o = o || []).push(s, a))
                        : s === "children"
                          ? (typeof a != "string" && typeof a != "number") ||
                            (o = o || []).push(s, "" + a)
                          : s !== "suppressContentEditableWarning" &&
                            s !== "suppressHydrationWarning" &&
                            ($n.hasOwnProperty(s)
                                ? (a != null &&
                                      s === "onScroll" &&
                                      V("scroll", e),
                                  o || u === a || (o = []))
                                : (o = o || []).push(s, a));
        }
        n && (o = o || []).push("style", n);
        var s = o;
        (t.updateQueue = s) && (t.flags |= 4);
    }
};
Vc = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function Pn(e, t) {
    if (!$)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling);
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            (n |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags & 14680064),
                (r |= l.flags & 14680064),
                (l.return = e),
                (l = l.sibling);
    else
        for (l = e.child; l !== null; )
            (n |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags),
                (r |= l.flags),
                (l.return = e),
                (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Rp(e, t, n) {
    var r = t.pendingProps;
    switch (($i(t), t.tag)) {
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
            return ie(t), null;
        case 1:
            return ve(t.type) && rl(), ie(t), null;
        case 3:
            return (
                (r = t.stateNode),
                cn(),
                A(me),
                A(ae),
                Yi(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (_r(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          Me !== null && (hi(Me), (Me = null)))),
                ii(e, t),
                ie(t),
                null
            );
        case 5:
            Gi(t);
            var l = Lt(qn.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                Hc(e, t, n, r, l),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(S(166));
                    return ie(t), null;
                }
                if (((e = Lt(Ue.current)), _r(t))) {
                    (r = t.stateNode), (n = t.type);
                    var o = t.memoizedProps;
                    switch (
                        ((r[$e] = t), (r[Xn] = o), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case "dialog":
                            V("cancel", r), V("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            V("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < On.length; l++) V(On[l], r);
                            break;
                        case "source":
                            V("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            V("error", r), V("load", r);
                            break;
                        case "details":
                            V("toggle", r);
                            break;
                        case "input":
                            Su(r, o), V("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!o.multiple }),
                                V("invalid", r);
                            break;
                        case "textarea":
                            Eu(r, o), V("invalid", r);
                    }
                    jo(n, o), (l = null);
                    for (var i in o)
                        if (o.hasOwnProperty(i)) {
                            var u = o[i];
                            i === "children"
                                ? typeof u == "string"
                                    ? r.textContent !== u &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          Pr(r.textContent, u, e),
                                      (l = ["children", u]))
                                    : typeof u == "number" &&
                                      r.textContent !== "" + u &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          Pr(r.textContent, u, e),
                                      (l = ["children", "" + u]))
                                : $n.hasOwnProperty(i) &&
                                  u != null &&
                                  i === "onScroll" &&
                                  V("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            gr(r), ku(r, o, !0);
                            break;
                        case "textarea":
                            gr(r), xu(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = nl);
                    }
                    (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (i = l.nodeType === 9 ? l : l.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = fs(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = i.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                  ? (e = i.createElement(n, { is: r.is }))
                                  : ((e = i.createElement(n)),
                                    n === "select" &&
                                        ((i = e),
                                        r.multiple
                                            ? (i.multiple = !0)
                                            : r.size && (i.size = r.size)))
                            : (e = i.createElementNS(e, n)),
                        (e[$e] = t),
                        (e[Xn] = r),
                        Ic(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((i = Mo(n, r)), n)) {
                            case "dialog":
                                V("cancel", e), V("close", e), (l = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                V("load", e), (l = r);
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < On.length; l++) V(On[l], e);
                                l = r;
                                break;
                            case "source":
                                V("error", e), (l = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                V("error", e), V("load", e), (l = r);
                                break;
                            case "details":
                                V("toggle", e), (l = r);
                                break;
                            case "input":
                                Su(e, r), (l = Lo(e, r)), V("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                (e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (l = W({}, r, { value: void 0 })),
                                    V("invalid", e);
                                break;
                            case "textarea":
                                Eu(e, r), (l = zo(e, r)), V("invalid", e);
                                break;
                            default:
                                l = r;
                        }
                        jo(n, l), (u = l);
                        for (o in u)
                            if (u.hasOwnProperty(o)) {
                                var a = u[o];
                                o === "style"
                                    ? hs(e, a)
                                    : o === "dangerouslySetInnerHTML"
                                      ? ((a = a ? a.__html : void 0),
                                        a != null && ds(e, a))
                                      : o === "children"
                                        ? typeof a == "string"
                                            ? (n !== "textarea" || a !== "") &&
                                              Dn(e, a)
                                            : typeof a == "number" &&
                                              Dn(e, "" + a)
                                        : o !==
                                              "suppressContentEditableWarning" &&
                                          o !== "suppressHydrationWarning" &&
                                          o !== "autoFocus" &&
                                          ($n.hasOwnProperty(o)
                                              ? a != null &&
                                                o === "onScroll" &&
                                                V("scroll", e)
                                              : a != null && Pi(e, o, a, i));
                            }
                        switch (n) {
                            case "input":
                                gr(e), ku(e, r, !1);
                                break;
                            case "textarea":
                                gr(e), xu(e);
                                break;
                            case "option":
                                r.value != null &&
                                    e.setAttribute("value", "" + vt(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (o = r.value),
                                    o != null
                                        ? bt(e, !!r.multiple, o, !1)
                                        : r.defaultValue != null &&
                                          bt(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0,
                                          );
                                break;
                            default:
                                typeof l.onClick == "function" &&
                                    (e.onclick = nl);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return ie(t), null;
        case 6:
            if (e && t.stateNode != null) Vc(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(S(166));
                if (((n = Lt(qn.current)), Lt(Ue.current), _r(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[$e] = t),
                        (o = r.nodeValue !== n) && ((e = ke), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                Pr(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    Pr(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    o && (t.flags |= 4);
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[$e] = t),
                        (t.stateNode = r);
            }
            return ie(t), null;
        case 13:
            if (
                (A(U),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if ($ && Se !== null && t.mode & 1 && !(t.flags & 128))
                    tc(), an(), (t.flags |= 98560), (o = !1);
                else if (((o = _r(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!o) throw Error(S(318));
                        if (
                            ((o = t.memoizedState),
                            (o = o !== null ? o.dehydrated : null),
                            !o)
                        )
                            throw Error(S(317));
                        o[$e] = t;
                    } else
                        an(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    ie(t), (o = !1);
                } else Me !== null && (hi(Me), (Me = null)), (o = !0);
                if (!o) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || U.current & 1
                              ? J === 0 && (J = 3)
                              : uu())),
                  t.updateQueue !== null && (t.flags |= 4),
                  ie(t),
                  null);
        case 4:
            return (
                cn(),
                ii(e, t),
                e === null && Gn(t.stateNode.containerInfo),
                ie(t),
                null
            );
        case 10:
            return Wi(t.type._context), ie(t), null;
        case 17:
            return ve(t.type) && rl(), ie(t), null;
        case 19:
            if ((A(U), (o = t.memoizedState), o === null)) return ie(t), null;
            if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
                if (r) Pn(o, !1);
                else {
                    if (J !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((i = cl(e)), i !== null)) {
                                for (
                                    t.flags |= 128,
                                        Pn(o, !1),
                                        r = i.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (o = n),
                                        (e = r),
                                        (o.flags &= 14680066),
                                        (i = o.alternate),
                                        i === null
                                            ? ((o.childLanes = 0),
                                              (o.lanes = e),
                                              (o.child = null),
                                              (o.subtreeFlags = 0),
                                              (o.memoizedProps = null),
                                              (o.memoizedState = null),
                                              (o.updateQueue = null),
                                              (o.dependencies = null),
                                              (o.stateNode = null))
                                            : ((o.childLanes = i.childLanes),
                                              (o.lanes = i.lanes),
                                              (o.child = i.child),
                                              (o.subtreeFlags = 0),
                                              (o.deletions = null),
                                              (o.memoizedProps =
                                                  i.memoizedProps),
                                              (o.memoizedState =
                                                  i.memoizedState),
                                              (o.updateQueue = i.updateQueue),
                                              (o.type = i.type),
                                              (e = i.dependencies),
                                              (o.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return H(U, (U.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    o.tail !== null &&
                        G() > dn &&
                        ((t.flags |= 128),
                        (r = !0),
                        Pn(o, !1),
                        (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = cl(i)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            Pn(o, !0),
                            o.tail === null &&
                                o.tailMode === "hidden" &&
                                !i.alternate &&
                                !$)
                        )
                            return ie(t), null;
                    } else
                        2 * G() - o.renderingStartTime > dn &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            Pn(o, !1),
                            (t.lanes = 4194304));
                o.isBackwards
                    ? ((i.sibling = t.child), (t.child = i))
                    : ((n = o.last),
                      n !== null ? (n.sibling = i) : (t.child = i),
                      (o.last = i));
            }
            return o.tail !== null
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = G()),
                  (t.sibling = null),
                  (n = U.current),
                  H(U, r ? (n & 1) | 2 : n & 1),
                  t)
                : (ie(t), null);
        case 22:
        case 23:
            return (
                iu(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? we & 1073741824 &&
                      (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : ie(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(S(156, t.tag));
}
function Op(e, t) {
    switch (($i(t), t.tag)) {
        case 1:
            return (
                ve(t.type) && rl(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                cn(),
                A(me),
                A(ae),
                Yi(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            );
        case 5:
            return Gi(t), null;
        case 13:
            if (
                (A(U),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(S(340));
                an();
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return A(U), null;
        case 4:
            return cn(), null;
        case 10:
            return Wi(t.type._context), null;
        case 22:
        case 23:
            return iu(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Rr = !1,
    ue = !1,
    zp = typeof WeakSet == "function" ? WeakSet : Set,
    P = null;
function Jt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                Z(e, t, r);
            }
        else n.current = null;
}
function ui(e, t, n) {
    try {
        n();
    } catch (r) {
        Z(e, t, r);
    }
}
var da = !1;
function Tp(e, t) {
    if (((Wo = br), (e = Us()), Vi(e))) {
        if ("selectionStart" in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset,
                        o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, o.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var i = 0,
                        u = -1,
                        a = -1,
                        s = 0,
                        m = 0,
                        h = e,
                        p = null;
                    t: for (;;) {
                        for (
                            var g;
                            h !== n ||
                                (l !== 0 && h.nodeType !== 3) ||
                                (u = i + l),
                                h !== o ||
                                    (r !== 0 && h.nodeType !== 3) ||
                                    (a = i + r),
                                h.nodeType === 3 && (i += h.nodeValue.length),
                                (g = h.firstChild) !== null;

                        )
                            (p = h), (h = g);
                        for (;;) {
                            if (h === e) break t;
                            if (
                                (p === n && ++s === l && (u = i),
                                p === o && ++m === r && (a = i),
                                (g = h.nextSibling) !== null)
                            )
                                break;
                            (h = p), (p = h.parentNode);
                        }
                        h = g;
                    }
                    n = u === -1 || a === -1 ? null : { start: u, end: a };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        Zo = { focusedElem: e, selectionRange: n }, br = !1, P = t;
        P !== null;

    )
        if (
            ((t = P),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (P = e);
        else
            for (; P !== null; ) {
                t = P;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (y !== null) {
                                    var w = y.memoizedProps,
                                        x = y.memoizedState,
                                        f = t.stateNode,
                                        c = f.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? w
                                                : Te(t.type, w),
                                            x,
                                        );
                                    f.__reactInternalSnapshotBeforeUpdate = c;
                                }
                                break;
                            case 3:
                                var d = t.stateNode.containerInfo;
                                d.nodeType === 1
                                    ? (d.textContent = "")
                                    : d.nodeType === 9 &&
                                      d.documentElement &&
                                      d.removeChild(d.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(S(163));
                        }
                } catch (v) {
                    Z(t, t.return, v);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (P = e);
                    break;
                }
                P = t.return;
            }
    return (y = da), (da = !1), y;
}
function Hn(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var l = (r = r.next);
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                (l.destroy = void 0), o !== void 0 && ui(t, n, o);
            }
            l = l.next;
        } while (l !== r);
    }
}
function zl(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function ai(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function Ac(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Ac(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[$e],
                delete t[Xn],
                delete t[Go],
                delete t[hp],
                delete t[mp])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function $c(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function pa(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || $c(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function si(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = nl));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (si(e, t, n), e = e.sibling; e !== null; )
            si(e, t, n), (e = e.sibling);
}
function ci(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (ci(e, t, n), e = e.sibling; e !== null; )
            ci(e, t, n), (e = e.sibling);
}
var ne = null,
    je = !1;
function be(e, t, n) {
    for (n = n.child; n !== null; ) Dc(e, t, n), (n = n.sibling);
}
function Dc(e, t, n) {
    if (De && typeof De.onCommitFiberUnmount == "function")
        try {
            De.onCommitFiberUnmount(xl, n);
        } catch {}
    switch (n.tag) {
        case 5:
            ue || Jt(n, t);
        case 6:
            var r = ne,
                l = je;
            (ne = null),
                be(e, t, n),
                (ne = r),
                (je = l),
                ne !== null &&
                    (je
                        ? ((e = ne),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : ne.removeChild(n.stateNode));
            break;
        case 18:
            ne !== null &&
                (je
                    ? ((e = ne),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? uo(e.parentNode, n)
                          : e.nodeType === 1 && uo(e, n),
                      Zn(e))
                    : uo(ne, n.stateNode));
            break;
        case 4:
            (r = ne),
                (l = je),
                (ne = n.stateNode.containerInfo),
                (je = !0),
                be(e, t, n),
                (ne = r),
                (je = l);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !ue &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                l = r = r.next;
                do {
                    var o = l,
                        i = o.destroy;
                    (o = o.tag),
                        i !== void 0 && (o & 2 || o & 4) && ui(n, t, i),
                        (l = l.next);
                } while (l !== r);
            }
            be(e, t, n);
            break;
        case 1:
            if (
                !ue &&
                (Jt(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                } catch (u) {
                    Z(n, t, u);
                }
            be(e, t, n);
            break;
        case 21:
            be(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((ue = (r = ue) || n.memoizedState !== null),
                  be(e, t, n),
                  (ue = r))
                : be(e, t, n);
            break;
        default:
            be(e, t, n);
    }
}
function ha(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new zp()),
            t.forEach(function (r) {
                var l = Dp.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(l, l));
            });
    }
}
function ze(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e,
                    i = t,
                    u = i;
                e: for (; u !== null; ) {
                    switch (u.tag) {
                        case 5:
                            (ne = u.stateNode), (je = !1);
                            break e;
                        case 3:
                            (ne = u.stateNode.containerInfo), (je = !0);
                            break e;
                        case 4:
                            (ne = u.stateNode.containerInfo), (je = !0);
                            break e;
                    }
                    u = u.return;
                }
                if (ne === null) throw Error(S(160));
                Dc(o, i, l), (ne = null), (je = !1);
                var a = l.alternate;
                a !== null && (a.return = null), (l.return = null);
            } catch (s) {
                Z(l, t, s);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) Uc(t, e), (t = t.sibling);
}
function Uc(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((ze(t, e), Ve(e), r & 4)) {
                try {
                    Hn(3, e, e.return), zl(3, e);
                } catch (w) {
                    Z(e, e.return, w);
                }
                try {
                    Hn(5, e, e.return);
                } catch (w) {
                    Z(e, e.return, w);
                }
            }
            break;
        case 1:
            ze(t, e), Ve(e), r & 512 && n !== null && Jt(n, n.return);
            break;
        case 5:
            if (
                (ze(t, e),
                Ve(e),
                r & 512 && n !== null && Jt(n, n.return),
                e.flags & 32)
            ) {
                var l = e.stateNode;
                try {
                    Dn(l, "");
                } catch (w) {
                    Z(e, e.return, w);
                }
            }
            if (r & 4 && ((l = e.stateNode), l != null)) {
                var o = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : o,
                    u = e.type,
                    a = e.updateQueue;
                if (((e.updateQueue = null), a !== null))
                    try {
                        u === "input" &&
                            o.type === "radio" &&
                            o.name != null &&
                            ss(l, o),
                            Mo(u, i);
                        var s = Mo(u, o);
                        for (i = 0; i < a.length; i += 2) {
                            var m = a[i],
                                h = a[i + 1];
                            m === "style"
                                ? hs(l, h)
                                : m === "dangerouslySetInnerHTML"
                                  ? ds(l, h)
                                  : m === "children"
                                    ? Dn(l, h)
                                    : Pi(l, m, h, s);
                        }
                        switch (u) {
                            case "input":
                                Ro(l, o);
                                break;
                            case "textarea":
                                cs(l, o);
                                break;
                            case "select":
                                var p = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!o.multiple;
                                var g = o.value;
                                g != null
                                    ? bt(l, !!o.multiple, g, !1)
                                    : p !== !!o.multiple &&
                                      (o.defaultValue != null
                                          ? bt(
                                                l,
                                                !!o.multiple,
                                                o.defaultValue,
                                                !0,
                                            )
                                          : bt(
                                                l,
                                                !!o.multiple,
                                                o.multiple ? [] : "",
                                                !1,
                                            ));
                        }
                        l[Xn] = o;
                    } catch (w) {
                        Z(e, e.return, w);
                    }
            }
            break;
        case 6:
            if ((ze(t, e), Ve(e), r & 4)) {
                if (e.stateNode === null) throw Error(S(162));
                (l = e.stateNode), (o = e.memoizedProps);
                try {
                    l.nodeValue = o;
                } catch (w) {
                    Z(e, e.return, w);
                }
            }
            break;
        case 3:
            if (
                (ze(t, e),
                Ve(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    Zn(t.containerInfo);
                } catch (w) {
                    Z(e, e.return, w);
                }
            break;
        case 4:
            ze(t, e), Ve(e);
            break;
        case 13:
            ze(t, e),
                Ve(e),
                (l = e.child),
                l.flags & 8192 &&
                    ((o = l.memoizedState !== null),
                    (l.stateNode.isHidden = o),
                    !o ||
                        (l.alternate !== null &&
                            l.alternate.memoizedState !== null) ||
                        (lu = G())),
                r & 4 && ha(e);
            break;
        case 22:
            if (
                ((m = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((ue = (s = ue) || m), ze(t, e), (ue = s))
                    : ze(t, e),
                Ve(e),
                r & 8192)
            ) {
                if (
                    ((s = e.memoizedState !== null),
                    (e.stateNode.isHidden = s) && !m && e.mode & 1)
                )
                    for (P = e, m = e.child; m !== null; ) {
                        for (h = P = m; P !== null; ) {
                            switch (((p = P), (g = p.child), p.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Hn(4, p, p.return);
                                    break;
                                case 1:
                                    Jt(p, p.return);
                                    var y = p.stateNode;
                                    if (
                                        typeof y.componentWillUnmount ==
                                        "function"
                                    ) {
                                        (r = p), (n = p.return);
                                        try {
                                            (t = r),
                                                (y.props = t.memoizedProps),
                                                (y.state = t.memoizedState),
                                                y.componentWillUnmount();
                                        } catch (w) {
                                            Z(r, n, w);
                                        }
                                    }
                                    break;
                                case 5:
                                    Jt(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        va(h);
                                        continue;
                                    }
                            }
                            g !== null ? ((g.return = p), (P = g)) : va(h);
                        }
                        m = m.sibling;
                    }
                e: for (m = null, h = e; ; ) {
                    if (h.tag === 5) {
                        if (m === null) {
                            m = h;
                            try {
                                (l = h.stateNode),
                                    s
                                        ? ((o = l.style),
                                          typeof o.setProperty == "function"
                                              ? o.setProperty(
                                                    "display",
                                                    "none",
                                                    "important",
                                                )
                                              : (o.display = "none"))
                                        : ((u = h.stateNode),
                                          (a = h.memoizedProps.style),
                                          (i =
                                              a != null &&
                                              a.hasOwnProperty("display")
                                                  ? a.display
                                                  : null),
                                          (u.style.display = ps("display", i)));
                            } catch (w) {
                                Z(e, e.return, w);
                            }
                        }
                    } else if (h.tag === 6) {
                        if (m === null)
                            try {
                                h.stateNode.nodeValue = s
                                    ? ""
                                    : h.memoizedProps;
                            } catch (w) {
                                Z(e, e.return, w);
                            }
                    } else if (
                        ((h.tag !== 22 && h.tag !== 23) ||
                            h.memoizedState === null ||
                            h === e) &&
                        h.child !== null
                    ) {
                        (h.child.return = h), (h = h.child);
                        continue;
                    }
                    if (h === e) break e;
                    for (; h.sibling === null; ) {
                        if (h.return === null || h.return === e) break e;
                        m === h && (m = null), (h = h.return);
                    }
                    m === h && (m = null),
                        (h.sibling.return = h.return),
                        (h = h.sibling);
                }
            }
            break;
        case 19:
            ze(t, e), Ve(e), r & 4 && ha(e);
            break;
        case 21:
            break;
        default:
            ze(t, e), Ve(e);
    }
}
function Ve(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if ($c(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(S(160));
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Dn(l, ""), (r.flags &= -33));
                    var o = pa(e);
                    ci(e, o, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        u = pa(e);
                    si(e, u, i);
                    break;
                default:
                    throw Error(S(161));
            }
        } catch (a) {
            Z(e, e.return, a);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function jp(e, t, n) {
    (P = e), Bc(e);
}
function Bc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; P !== null; ) {
        var l = P,
            o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || Rr;
            if (!i) {
                var u = l.alternate,
                    a = (u !== null && u.memoizedState !== null) || ue;
                u = Rr;
                var s = ue;
                if (((Rr = i), (ue = a) && !s))
                    for (P = l; P !== null; )
                        (i = P),
                            (a = i.child),
                            i.tag === 22 && i.memoizedState !== null
                                ? ga(l)
                                : a !== null
                                  ? ((a.return = i), (P = a))
                                  : ga(l);
                for (; o !== null; ) (P = o), Bc(o), (o = o.sibling);
                (P = l), (Rr = u), (ue = s);
            }
            ma(e);
        } else
            l.subtreeFlags & 8772 && o !== null
                ? ((o.return = l), (P = o))
                : ma(e);
    }
}
function ma(e) {
    for (; P !== null; ) {
        var t = P;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ue || zl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !ue)
                                if (n === null) r.componentDidMount();
                                else {
                                    var l =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : Te(t.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        l,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate,
                                    );
                                }
                            var o = t.updateQueue;
                            o !== null && qu(t, o, r);
                            break;
                        case 3:
                            var i = t.updateQueue;
                            if (i !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                qu(t, i, n);
                            }
                            break;
                        case 5:
                            var u = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = u;
                                var a = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        a.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        a.src && (n.src = a.src);
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
                            if (t.memoizedState === null) {
                                var s = t.alternate;
                                if (s !== null) {
                                    var m = s.memoizedState;
                                    if (m !== null) {
                                        var h = m.dehydrated;
                                        h !== null && Zn(h);
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
                            throw Error(S(163));
                    }
                ue || (t.flags & 512 && ai(t));
            } catch (p) {
                Z(t, t.return, p);
            }
        }
        if (t === e) {
            P = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (P = n);
            break;
        }
        P = t.return;
    }
}
function va(e) {
    for (; P !== null; ) {
        var t = P;
        if (t === e) {
            P = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (P = n);
            break;
        }
        P = t.return;
    }
}
function ga(e) {
    for (; P !== null; ) {
        var t = P;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        zl(4, t);
                    } catch (a) {
                        Z(t, n, a);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount();
                        } catch (a) {
                            Z(t, l, a);
                        }
                    }
                    var o = t.return;
                    try {
                        ai(t);
                    } catch (a) {
                        Z(t, o, a);
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        ai(t);
                    } catch (a) {
                        Z(t, i, a);
                    }
            }
        } catch (a) {
            Z(t, t.return, a);
        }
        if (t === e) {
            P = null;
            break;
        }
        var u = t.sibling;
        if (u !== null) {
            (u.return = t.return), (P = u);
            break;
        }
        P = t.return;
    }
}
var Mp = Math.ceil,
    pl = qe.ReactCurrentDispatcher,
    nu = qe.ReactCurrentOwner,
    Le = qe.ReactCurrentBatchConfig,
    F = 0,
    ee = null,
    Y = null,
    re = 0,
    we = 0,
    qt = wt(0),
    J = 0,
    nr = null,
    Mt = 0,
    Tl = 0,
    ru = 0,
    Vn = null,
    pe = null,
    lu = 0,
    dn = 1 / 0,
    Be = null,
    hl = !1,
    fi = null,
    dt = null,
    Or = !1,
    ot = null,
    ml = 0,
    An = 0,
    di = null,
    Wr = -1,
    Zr = 0;
function ce() {
    return F & 6 ? G() : Wr !== -1 ? Wr : (Wr = G());
}
function pt(e) {
    return e.mode & 1
        ? F & 2 && re !== 0
            ? re & -re
            : gp.transition !== null
              ? (Zr === 0 && (Zr = _s()), Zr)
              : ((e = I),
                e !== 0 ||
                    ((e = window.event), (e = e === void 0 ? 16 : js(e.type))),
                e)
        : 1;
}
function Ie(e, t, n, r) {
    if (50 < An) throw ((An = 0), (di = null), Error(S(185)));
    ir(e, n, r),
        (!(F & 2) || e !== ee) &&
            (e === ee && (!(F & 2) && (Tl |= n), J === 4 && rt(e, re)),
            ge(e, r),
            n === 1 &&
                F === 0 &&
                !(t.mode & 1) &&
                ((dn = G() + 500), Ll && St()));
}
function ge(e, t) {
    var n = e.callbackNode;
    gd(e, t);
    var r = qr(e, e === ee ? re : 0);
    if (r === 0)
        n !== null && _u(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && _u(n), t === 1))
            e.tag === 0 ? vp(ya.bind(null, e)) : qs(ya.bind(null, e)),
                dp(function () {
                    !(F & 6) && St();
                }),
                (n = null);
        else {
            switch (Ns(r)) {
                case 1:
                    n = Oi;
                    break;
                case 4:
                    n = Cs;
                    break;
                case 16:
                    n = Jr;
                    break;
                case 536870912:
                    n = Ps;
                    break;
                default:
                    n = Jr;
            }
            n = Jc(n, Wc.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Wc(e, t) {
    if (((Wr = -1), (Zr = 0), F & 6)) throw Error(S(327));
    var n = e.callbackNode;
    if (ln() && e.callbackNode !== n) return null;
    var r = qr(e, e === ee ? re : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = vl(e, r);
    else {
        t = r;
        var l = F;
        F |= 2;
        var o = Qc();
        (ee !== e || re !== t) && ((Be = null), (dn = G() + 500), Rt(e, t));
        do
            try {
                Hp();
                break;
            } catch (u) {
                Zc(e, u);
            }
        while (!0);
        Bi(),
            (pl.current = o),
            (F = l),
            Y !== null ? (t = 0) : ((ee = null), (re = 0), (t = J));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((l = Ao(e)), l !== 0 && ((r = l), (t = pi(e, l)))),
            t === 1)
        )
            throw ((n = nr), Rt(e, 0), rt(e, r), ge(e, G()), n);
        if (t === 6) rt(e, r);
        else {
            if (
                ((l = e.current.alternate),
                !(r & 30) &&
                    !Fp(l) &&
                    ((t = vl(e, r)),
                    t === 2 &&
                        ((o = Ao(e)), o !== 0 && ((r = o), (t = pi(e, o)))),
                    t === 1))
            )
                throw ((n = nr), Rt(e, 0), rt(e, r), ge(e, G()), n);
            switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(S(345));
                case 2:
                    Pt(e, pe, Be);
                    break;
                case 3:
                    if (
                        (rt(e, r),
                        (r & 130023424) === r && ((t = lu + 500 - G()), 10 < t))
                    ) {
                        if (qr(e, 0) !== 0) break;
                        if (((l = e.suspendedLanes), (l & r) !== r)) {
                            ce(), (e.pingedLanes |= e.suspendedLanes & l);
                            break;
                        }
                        e.timeoutHandle = Ko(Pt.bind(null, e, pe, Be), t);
                        break;
                    }
                    Pt(e, pe, Be);
                    break;
                case 4:
                    if ((rt(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, l = -1; 0 < r; ) {
                        var i = 31 - Fe(r);
                        (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
                    }
                    if (
                        ((r = l),
                        (r = G() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                  ? 480
                                  : 1080 > r
                                    ? 1080
                                    : 1920 > r
                                      ? 1920
                                      : 3e3 > r
                                        ? 3e3
                                        : 4320 > r
                                          ? 4320
                                          : 1960 * Mp(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = Ko(Pt.bind(null, e, pe, Be), r);
                        break;
                    }
                    Pt(e, pe, Be);
                    break;
                case 5:
                    Pt(e, pe, Be);
                    break;
                default:
                    throw Error(S(329));
            }
        }
    }
    return ge(e, G()), e.callbackNode === n ? Wc.bind(null, e) : null;
}
function pi(e, t) {
    var n = Vn;
    return (
        e.current.memoizedState.isDehydrated && (Rt(e, t).flags |= 256),
        (e = vl(e, t)),
        e !== 2 && ((t = pe), (pe = n), t !== null && hi(t)),
        e
    );
}
function hi(e) {
    pe === null ? (pe = e) : pe.push.apply(pe, e);
}
function Fp(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!He(o(), l)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function rt(e, t) {
    for (
        t &= ~ru,
            t &= ~Tl,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - Fe(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function ya(e) {
    if (F & 6) throw Error(S(327));
    ln();
    var t = qr(e, 0);
    if (!(t & 1)) return ge(e, G()), null;
    var n = vl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Ao(e);
        r !== 0 && ((t = r), (n = pi(e, r)));
    }
    if (n === 1) throw ((n = nr), Rt(e, 0), rt(e, t), ge(e, G()), n);
    if (n === 6) throw Error(S(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Pt(e, pe, Be),
        ge(e, G()),
        null
    );
}
function ou(e, t) {
    var n = F;
    F |= 1;
    try {
        return e(t);
    } finally {
        (F = n), F === 0 && ((dn = G() + 500), Ll && St());
    }
}
function Ft(e) {
    ot !== null && ot.tag === 0 && !(F & 6) && ln();
    var t = F;
    F |= 1;
    var n = Le.transition,
        r = I;
    try {
        if (((Le.transition = null), (I = 1), e)) return e();
    } finally {
        (I = r), (Le.transition = n), (F = t), !(F & 6) && St();
    }
}
function iu() {
    (we = qt.current), A(qt);
}
function Rt(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), fp(n)), Y !== null))
        for (n = Y.return; n !== null; ) {
            var r = n;
            switch (($i(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && rl();
                    break;
                case 3:
                    cn(), A(me), A(ae), Yi();
                    break;
                case 5:
                    Gi(r);
                    break;
                case 4:
                    cn();
                    break;
                case 13:
                    A(U);
                    break;
                case 19:
                    A(U);
                    break;
                case 10:
                    Wi(r.type._context);
                    break;
                case 22:
                case 23:
                    iu();
            }
            n = n.return;
        }
    if (
        ((ee = e),
        (Y = e = ht(e.current, null)),
        (re = we = t),
        (J = 0),
        (nr = null),
        (ru = Tl = Mt = 0),
        (pe = Vn = null),
        Nt !== null)
    ) {
        for (t = 0; t < Nt.length; t++)
            if (((n = Nt[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var l = r.next,
                    o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    (o.next = l), (r.next = i);
                }
                n.pending = r;
            }
        Nt = null;
    }
    return e;
}
function Zc(e, t) {
    do {
        var n = Y;
        try {
            if ((Bi(), (Dr.current = dl), fl)) {
                for (var r = B.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null), (r = r.next);
                }
                fl = !1;
            }
            if (
                ((jt = 0),
                (b = X = B = null),
                (In = !1),
                (bn = 0),
                (nu.current = null),
                n === null || n.return === null)
            ) {
                (J = 1), (nr = t), (Y = null);
                break;
            }
            e: {
                var o = e,
                    i = n.return,
                    u = n,
                    a = t;
                if (
                    ((t = re),
                    (u.flags |= 32768),
                    a !== null &&
                        typeof a == "object" &&
                        typeof a.then == "function")
                ) {
                    var s = a,
                        m = u,
                        h = m.tag;
                    if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var p = m.alternate;
                        p
                            ? ((m.updateQueue = p.updateQueue),
                              (m.memoizedState = p.memoizedState),
                              (m.lanes = p.lanes))
                            : ((m.updateQueue = null),
                              (m.memoizedState = null));
                    }
                    var g = oa(i);
                    if (g !== null) {
                        (g.flags &= -257),
                            ia(g, i, u, o, t),
                            g.mode & 1 && la(o, s, t),
                            (t = g),
                            (a = s);
                        var y = t.updateQueue;
                        if (y === null) {
                            var w = new Set();
                            w.add(a), (t.updateQueue = w);
                        } else y.add(a);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            la(o, s, t), uu();
                            break e;
                        }
                        a = Error(S(426));
                    }
                } else if ($ && u.mode & 1) {
                    var x = oa(i);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256),
                            ia(x, i, u, o, t),
                            Di(fn(a, u));
                        break e;
                    }
                }
                (o = a = fn(a, u)),
                    J !== 4 && (J = 2),
                    Vn === null ? (Vn = [o]) : Vn.push(o),
                    (o = i);
                do {
                    switch (o.tag) {
                        case 3:
                            (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                            var f = Lc(o, a, t);
                            Ju(o, f);
                            break e;
                        case 1:
                            u = a;
                            var c = o.type,
                                d = o.stateNode;
                            if (
                                !(o.flags & 128) &&
                                (typeof c.getDerivedStateFromError ==
                                    "function" ||
                                    (d !== null &&
                                        typeof d.componentDidCatch ==
                                            "function" &&
                                        (dt === null || !dt.has(d))))
                            ) {
                                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                                var v = Rc(o, u, t);
                                Ju(o, v);
                                break e;
                            }
                    }
                    o = o.return;
                } while (o !== null);
            }
            Gc(n);
        } catch (C) {
            (t = C), Y === n && n !== null && (Y = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function Qc() {
    var e = pl.current;
    return (pl.current = dl), e === null ? dl : e;
}
function uu() {
    (J === 0 || J === 3 || J === 2) && (J = 4),
        ee === null || (!(Mt & 268435455) && !(Tl & 268435455)) || rt(ee, re);
}
function vl(e, t) {
    var n = F;
    F |= 2;
    var r = Qc();
    (ee !== e || re !== t) && ((Be = null), Rt(e, t));
    do
        try {
            Ip();
            break;
        } catch (l) {
            Zc(e, l);
        }
    while (!0);
    if ((Bi(), (F = n), (pl.current = r), Y !== null)) throw Error(S(261));
    return (ee = null), (re = 0), J;
}
function Ip() {
    for (; Y !== null; ) Kc(Y);
}
function Hp() {
    for (; Y !== null && !ad(); ) Kc(Y);
}
function Kc(e) {
    var t = Xc(e.alternate, e, we);
    (e.memoizedProps = e.pendingProps),
        t === null ? Gc(e) : (Y = t),
        (nu.current = null);
}
function Gc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = Op(n, t)), n !== null)) {
                (n.flags &= 32767), (Y = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (J = 6), (Y = null);
                return;
            }
        } else if (((n = Rp(n, t, we)), n !== null)) {
            Y = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            Y = t;
            return;
        }
        Y = t = e;
    } while (t !== null);
    J === 0 && (J = 5);
}
function Pt(e, t, n) {
    var r = I,
        l = Le.transition;
    try {
        (Le.transition = null), (I = 1), Vp(e, t, n, r);
    } finally {
        (Le.transition = l), (I = r);
    }
    return null;
}
function Vp(e, t, n, r) {
    do ln();
    while (ot !== null);
    if (F & 6) throw Error(S(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(S(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
        (yd(e, o),
        e === ee && ((Y = ee = null), (re = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Or ||
            ((Or = !0),
            Jc(Jr, function () {
                return ln(), null;
            })),
        (o = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || o)
    ) {
        (o = Le.transition), (Le.transition = null);
        var i = I;
        I = 1;
        var u = F;
        (F |= 4),
            (nu.current = null),
            Tp(e, n),
            Uc(n, e),
            lp(Zo),
            (br = !!Wo),
            (Zo = Wo = null),
            (e.current = n),
            jp(n),
            sd(),
            (F = u),
            (I = i),
            (Le.transition = o);
    } else e.current = n;
    if (
        (Or && ((Or = !1), (ot = e), (ml = l)),
        (o = e.pendingLanes),
        o === 0 && (dt = null),
        dd(n.stateNode),
        ge(e, G()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (l = t[n]),
                r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl) throw ((hl = !1), (e = fi), (fi = null), e);
    return (
        ml & 1 && e.tag !== 0 && ln(),
        (o = e.pendingLanes),
        o & 1 ? (e === di ? An++ : ((An = 0), (di = e))) : (An = 0),
        St(),
        null
    );
}
function ln() {
    if (ot !== null) {
        var e = Ns(ml),
            t = Le.transition,
            n = I;
        try {
            if (((Le.transition = null), (I = 16 > e ? 16 : e), ot === null))
                var r = !1;
            else {
                if (((e = ot), (ot = null), (ml = 0), F & 6))
                    throw Error(S(331));
                var l = F;
                for (F |= 4, P = e.current; P !== null; ) {
                    var o = P,
                        i = o.child;
                    if (P.flags & 16) {
                        var u = o.deletions;
                        if (u !== null) {
                            for (var a = 0; a < u.length; a++) {
                                var s = u[a];
                                for (P = s; P !== null; ) {
                                    var m = P;
                                    switch (m.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Hn(8, m, o);
                                    }
                                    var h = m.child;
                                    if (h !== null) (h.return = m), (P = h);
                                    else
                                        for (; P !== null; ) {
                                            m = P;
                                            var p = m.sibling,
                                                g = m.return;
                                            if ((Ac(m), m === s)) {
                                                P = null;
                                                break;
                                            }
                                            if (p !== null) {
                                                (p.return = g), (P = p);
                                                break;
                                            }
                                            P = g;
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var w = y.child;
                                if (w !== null) {
                                    y.child = null;
                                    do {
                                        var x = w.sibling;
                                        (w.sibling = null), (w = x);
                                    } while (w !== null);
                                }
                            }
                            P = o;
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null)
                        (i.return = o), (P = i);
                    else
                        e: for (; P !== null; ) {
                            if (((o = P), o.flags & 2048))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Hn(9, o, o.return);
                                }
                            var f = o.sibling;
                            if (f !== null) {
                                (f.return = o.return), (P = f);
                                break e;
                            }
                            P = o.return;
                        }
                }
                var c = e.current;
                for (P = c; P !== null; ) {
                    i = P;
                    var d = i.child;
                    if (i.subtreeFlags & 2064 && d !== null)
                        (d.return = i), (P = d);
                    else
                        e: for (i = c; P !== null; ) {
                            if (((u = P), u.flags & 2048))
                                try {
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            zl(9, u);
                                    }
                                } catch (C) {
                                    Z(u, u.return, C);
                                }
                            if (u === i) {
                                P = null;
                                break e;
                            }
                            var v = u.sibling;
                            if (v !== null) {
                                (v.return = u.return), (P = v);
                                break e;
                            }
                            P = u.return;
                        }
                }
                if (
                    ((F = l),
                    St(),
                    De && typeof De.onPostCommitFiberRoot == "function")
                )
                    try {
                        De.onPostCommitFiberRoot(xl, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (I = n), (Le.transition = t);
        }
    }
    return !1;
}
function wa(e, t, n) {
    (t = fn(n, t)),
        (t = Lc(e, t, 1)),
        (e = ft(e, t, 1)),
        (t = ce()),
        e !== null && (ir(e, 1, t), ge(e, t));
}
function Z(e, t, n) {
    if (e.tag === 3) wa(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                wa(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (dt === null || !dt.has(r)))
                ) {
                    (e = fn(n, e)),
                        (e = Rc(t, e, 1)),
                        (t = ft(t, e, 1)),
                        (e = ce()),
                        t !== null && (ir(t, 1, e), ge(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function Ap(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = ce()),
        (e.pingedLanes |= e.suspendedLanes & n),
        ee === e &&
            (re & n) === n &&
            (J === 4 || (J === 3 && (re & 130023424) === re && 500 > G() - lu)
                ? Rt(e, 0)
                : (ru |= n)),
        ge(e, t);
}
function Yc(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = Sr), (Sr <<= 1), !(Sr & 130023424) && (Sr = 4194304))
            : (t = 1));
    var n = ce();
    (e = Xe(e, t)), e !== null && (ir(e, t, n), ge(e, n));
}
function $p(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Yc(e, n);
}
function Dp(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(S(314));
    }
    r !== null && r.delete(t), Yc(e, n);
}
var Xc;
Xc = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || me.current) he = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (he = !1), Lp(e, t, n);
            he = !!(e.flags & 131072);
        }
    else (he = !1), $ && t.flags & 1048576 && bs(t, il, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Br(e, t), (e = t.pendingProps);
            var l = un(t, ae.current);
            rn(t, n), (l = Ji(null, t, r, e, l, n));
            var o = qi();
            return (
                (t.flags |= 1),
                typeof l == "object" &&
                l !== null &&
                typeof l.render == "function" &&
                l.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      ve(r) ? ((o = !0), ll(t)) : (o = !1),
                      (t.memoizedState =
                          l.state !== null && l.state !== void 0
                              ? l.state
                              : null),
                      Qi(t),
                      (l.updater = Rl),
                      (t.stateNode = l),
                      (l._reactInternals = t),
                      ei(t, r, e, n),
                      (t = ri(null, t, r, !0, o, n)))
                    : ((t.tag = 0),
                      $ && o && Ai(t),
                      se(null, t, l, n),
                      (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Br(e, t),
                    (e = t.pendingProps),
                    (l = r._init),
                    (r = l(r._payload)),
                    (t.type = r),
                    (l = t.tag = Bp(r)),
                    (e = Te(r, e)),
                    l)
                ) {
                    case 0:
                        t = ni(null, t, r, e, n);
                        break e;
                    case 1:
                        t = sa(null, t, r, e, n);
                        break e;
                    case 11:
                        t = ua(null, t, r, e, n);
                        break e;
                    case 14:
                        t = aa(null, t, r, Te(r.type, e), n);
                        break e;
                }
                throw Error(S(306, r, ""));
            }
            return t;
        case 0:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Te(r, l)),
                ni(e, t, r, l, n)
            );
        case 1:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Te(r, l)),
                sa(e, t, r, l, n)
            );
        case 3:
            e: {
                if ((jc(t), e === null)) throw Error(S(387));
                (r = t.pendingProps),
                    (o = t.memoizedState),
                    (l = o.element),
                    rc(e, t),
                    sl(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), o.isDehydrated))
                    if (
                        ((o = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries:
                                i.pendingSuspenseBoundaries,
                            transitions: i.transitions,
                        }),
                        (t.updateQueue.baseState = o),
                        (t.memoizedState = o),
                        t.flags & 256)
                    ) {
                        (l = fn(Error(S(423)), t)), (t = ca(e, t, r, n, l));
                        break e;
                    } else if (r !== l) {
                        (l = fn(Error(S(424)), t)), (t = ca(e, t, r, n, l));
                        break e;
                    } else
                        for (
                            Se = ct(t.stateNode.containerInfo.firstChild),
                                ke = t,
                                $ = !0,
                                Me = null,
                                n = uc(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((an(), r === l)) {
                        t = Je(e, t, n);
                        break e;
                    }
                    se(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                ac(t),
                e === null && Jo(t),
                (r = t.type),
                (l = t.pendingProps),
                (o = e !== null ? e.memoizedProps : null),
                (i = l.children),
                Qo(r, l)
                    ? (i = null)
                    : o !== null && Qo(r, o) && (t.flags |= 32),
                Tc(e, t),
                se(e, t, i, n),
                t.child
            );
        case 6:
            return e === null && Jo(t), null;
        case 13:
            return Mc(e, t, n);
        case 4:
            return (
                Ki(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = sn(t, null, r, n)) : se(e, t, r, n),
                t.child
            );
        case 11:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Te(r, l)),
                ua(e, t, r, l, n)
            );
        case 7:
            return se(e, t, t.pendingProps, n), t.child;
        case 8:
            return se(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return se(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (l = t.pendingProps),
                    (o = t.memoizedProps),
                    (i = l.value),
                    H(ul, r._currentValue),
                    (r._currentValue = i),
                    o !== null)
                )
                    if (He(o.value, i)) {
                        if (o.children === l.children && !me.current) {
                            t = Je(e, t, n);
                            break e;
                        }
                    } else
                        for (
                            o = t.child, o !== null && (o.return = t);
                            o !== null;

                        ) {
                            var u = o.dependencies;
                            if (u !== null) {
                                i = o.child;
                                for (var a = u.firstContext; a !== null; ) {
                                    if (a.context === r) {
                                        if (o.tag === 1) {
                                            (a = Ke(-1, n & -n)), (a.tag = 2);
                                            var s = o.updateQueue;
                                            if (s !== null) {
                                                s = s.shared;
                                                var m = s.pending;
                                                m === null
                                                    ? (a.next = a)
                                                    : ((a.next = m.next),
                                                      (m.next = a)),
                                                    (s.pending = a);
                                            }
                                        }
                                        (o.lanes |= n),
                                            (a = o.alternate),
                                            a !== null && (a.lanes |= n),
                                            qo(o.return, n, t),
                                            (u.lanes |= n);
                                        break;
                                    }
                                    a = a.next;
                                }
                            } else if (o.tag === 10)
                                i = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (((i = o.return), i === null))
                                    throw Error(S(341));
                                (i.lanes |= n),
                                    (u = i.alternate),
                                    u !== null && (u.lanes |= n),
                                    qo(i, n, t),
                                    (i = o.sibling);
                            } else i = o.child;
                            if (i !== null) i.return = o;
                            else
                                for (i = o; i !== null; ) {
                                    if (i === t) {
                                        i = null;
                                        break;
                                    }
                                    if (((o = i.sibling), o !== null)) {
                                        (o.return = i.return), (i = o);
                                        break;
                                    }
                                    i = i.return;
                                }
                            o = i;
                        }
                se(e, t, l.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (l = t.type),
                (r = t.pendingProps.children),
                rn(t, n),
                (l = Re(l)),
                (r = r(l)),
                (t.flags |= 1),
                se(e, t, r, n),
                t.child
            );
        case 14:
            return (
                (r = t.type),
                (l = Te(r, t.pendingProps)),
                (l = Te(r.type, l)),
                aa(e, t, r, l, n)
            );
        case 15:
            return Oc(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Te(r, l)),
                Br(e, t),
                (t.tag = 1),
                ve(r) ? ((e = !0), ll(t)) : (e = !1),
                rn(t, n),
                oc(t, r, l),
                ei(t, r, l, n),
                ri(null, t, r, !0, e, n)
            );
        case 19:
            return Fc(e, t, n);
        case 22:
            return zc(e, t, n);
    }
    throw Error(S(156, t.tag));
};
function Jc(e, t) {
    return xs(e, t);
}
function Up(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Ne(e, t, n, r) {
    return new Up(e, t, n, r);
}
function au(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Bp(e) {
    if (typeof e == "function") return au(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Ni)) return 11;
        if (e === Li) return 14;
    }
    return 2;
}
function ht(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Ne(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function Qr(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == "function")) au(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
        e: switch (e) {
            case Ut:
                return Ot(n.children, l, o, t);
            case _i:
                (i = 8), (l |= 8);
                break;
            case Co:
                return (
                    (e = Ne(12, n, t, l | 2)),
                    (e.elementType = Co),
                    (e.lanes = o),
                    e
                );
            case Po:
                return (
                    (e = Ne(13, n, t, l)),
                    (e.elementType = Po),
                    (e.lanes = o),
                    e
                );
            case _o:
                return (
                    (e = Ne(19, n, t, l)),
                    (e.elementType = _o),
                    (e.lanes = o),
                    e
                );
            case is:
                return jl(n, l, o, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case ls:
                            i = 10;
                            break e;
                        case os:
                            i = 9;
                            break e;
                        case Ni:
                            i = 11;
                            break e;
                        case Li:
                            i = 14;
                            break e;
                        case et:
                            (i = 16), (r = null);
                            break e;
                    }
                throw Error(S(130, e == null ? e : typeof e, ""));
        }
    return (
        (t = Ne(i, n, t, l)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
    );
}
function Ot(e, t, n, r) {
    return (e = Ne(7, e, r, t)), (e.lanes = n), e;
}
function jl(e, t, n, r) {
    return (
        (e = Ne(22, e, r, t)),
        (e.elementType = is),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function vo(e, t, n) {
    return (e = Ne(6, e, null, t)), (e.lanes = n), e;
}
function go(e, t, n) {
    return (
        (t = Ne(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function Wp(e, t, n, r, l) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Xl(0)),
        (this.expirationTimes = Xl(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Xl(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = l),
        (this.mutableSourceEagerHydrationData = null);
}
function su(e, t, n, r, l, o, i, u, a) {
    return (
        (e = new Wp(e, t, n, u, a)),
        t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
        (o = Ne(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Qi(o),
        e
    );
}
function Zp(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Dt,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function qc(e) {
    if (!e) return gt;
    e = e._reactInternals;
    e: {
        if (Ht(e) !== e || e.tag !== 1) throw Error(S(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ve(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(S(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ve(n)) return Js(e, n, t);
    }
    return t;
}
function bc(e, t, n, r, l, o, i, u, a) {
    return (
        (e = su(n, r, !0, e, l, o, i, u, a)),
        (e.context = qc(null)),
        (n = e.current),
        (r = ce()),
        (l = pt(n)),
        (o = Ke(r, l)),
        (o.callback = t ?? null),
        ft(n, o, l),
        (e.current.lanes = l),
        ir(e, l, r),
        ge(e, r),
        e
    );
}
function Ml(e, t, n, r) {
    var l = t.current,
        o = ce(),
        i = pt(l);
    return (
        (n = qc(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = Ke(o, i)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = ft(l, t, i)),
        e !== null && (Ie(e, l, i, o), $r(e, l, i)),
        i
    );
}
function gl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Sa(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function cu(e, t) {
    Sa(e, t), (e = e.alternate) && Sa(e, t);
}
function Qp() {
    return null;
}
var ef =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function fu(e) {
    this._internalRoot = e;
}
Fl.prototype.render = fu.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(S(409));
    Ml(e, t, null, null);
};
Fl.prototype.unmount = fu.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Ft(function () {
            Ml(null, e, null, null);
        }),
            (t[Ye] = null);
    }
};
function Fl(e) {
    this._internalRoot = e;
}
Fl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Os();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < nt.length && t !== 0 && t < nt[n].priority; n++);
        nt.splice(n, 0, e), n === 0 && Ts(e);
    }
};
function du(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Il(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== " react-mount-point-unstable "))
    );
}
function ka() {}
function Kp(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var s = gl(i);
                o.call(s);
            };
        }
        var i = bc(t, r, e, 0, null, !1, !1, "", ka);
        return (
            (e._reactRootContainer = i),
            (e[Ye] = i.current),
            Gn(e.nodeType === 8 ? e.parentNode : e),
            Ft(),
            i
        );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function () {
            var s = gl(a);
            u.call(s);
        };
    }
    var a = su(e, 0, !1, null, null, !1, !1, "", ka);
    return (
        (e._reactRootContainer = a),
        (e[Ye] = a.current),
        Gn(e.nodeType === 8 ? e.parentNode : e),
        Ft(function () {
            Ml(t, a, n, r);
        }),
        a
    );
}
function Hl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var u = l;
            l = function () {
                var a = gl(i);
                u.call(a);
            };
        }
        Ml(t, i, e, l);
    } else i = Kp(n, t, e, l, r);
    return gl(i);
}
Ls = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Rn(t.pendingLanes);
                n !== 0 &&
                    (zi(t, n | 1),
                    ge(t, G()),
                    !(F & 6) && ((dn = G() + 500), St()));
            }
            break;
        case 13:
            Ft(function () {
                var r = Xe(e, 1);
                if (r !== null) {
                    var l = ce();
                    Ie(r, e, 1, l);
                }
            }),
                cu(e, 1);
    }
};
Ti = function (e) {
    if (e.tag === 13) {
        var t = Xe(e, 134217728);
        if (t !== null) {
            var n = ce();
            Ie(t, e, 134217728, n);
        }
        cu(e, 134217728);
    }
};
Rs = function (e) {
    if (e.tag === 13) {
        var t = pt(e),
            n = Xe(e, t);
        if (n !== null) {
            var r = ce();
            Ie(n, e, t, r);
        }
        cu(e, t);
    }
};
Os = function () {
    return I;
};
zs = function (e, t) {
    var n = I;
    try {
        return (I = e), t();
    } finally {
        I = n;
    }
};
Io = function (e, t, n) {
    switch (t) {
        case "input":
            if ((Ro(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        "input[name=" +
                            JSON.stringify("" + t) +
                            '][type="radio"]',
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = Nl(r);
                        if (!l) throw Error(S(90));
                        as(r), Ro(r, l);
                    }
                }
            }
            break;
        case "textarea":
            cs(e, n);
            break;
        case "select":
            (t = n.value), t != null && bt(e, !!n.multiple, t, !1);
    }
};
gs = ou;
ys = Ft;
var Gp = { usingClientEntryPoint: !1, Events: [ar, Qt, Nl, ms, vs, ou] },
    _n = {
        findFiberByHostInstance: _t,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
    },
    Yp = {
        bundleType: _n.bundleType,
        version: _n.version,
        rendererPackageName: _n.rendererPackageName,
        rendererConfig: _n.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: qe.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = ks(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: _n.findFiberByHostInstance || Qp,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zr.isDisabled && zr.supportsFiber)
        try {
            (xl = zr.inject(Yp)), (De = zr);
        } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gp;
xe.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!du(t)) throw Error(S(200));
    return Zp(e, t, null, n);
};
xe.createRoot = function (e, t) {
    if (!du(e)) throw Error(S(299));
    var n = !1,
        r = "",
        l = ef;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = su(e, 1, !1, null, null, n, !1, r, l)),
        (e[Ye] = t.current),
        Gn(e.nodeType === 8 ? e.parentNode : e),
        new fu(t)
    );
};
xe.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function"
            ? Error(S(188))
            : ((e = Object.keys(e).join(",")), Error(S(268, e)));
    return (e = ks(t)), (e = e === null ? null : e.stateNode), e;
};
xe.flushSync = function (e) {
    return Ft(e);
};
xe.hydrate = function (e, t, n) {
    if (!Il(t)) throw Error(S(200));
    return Hl(null, e, t, !0, n);
};
xe.hydrateRoot = function (e, t, n) {
    if (!du(e)) throw Error(S(405));
    var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        i = ef;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (l = !0),
            n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = bc(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[Ye] = t.current),
        Gn(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (l = n._getVersion),
                (l = l(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, l])
                    : t.mutableSourceEagerHydrationData.push(n, l);
    return new Fl(t);
};
xe.render = function (e, t, n) {
    if (!Il(t)) throw Error(S(200));
    return Hl(null, e, t, !1, n);
};
xe.unmountComponentAtNode = function (e) {
    if (!Il(e)) throw Error(S(40));
    return e._reactRootContainer
        ? (Ft(function () {
              Hl(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Ye] = null);
              });
          }),
          !0)
        : !1;
};
xe.unstable_batchedUpdates = ou;
xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Il(n)) throw Error(S(200));
    if (e == null || e._reactInternals === void 0) throw Error(S(38));
    return Hl(e, t, n, !1, r);
};
xe.version = "18.2.0-next-9e3b772b8-20220608";
function tf() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tf);
        } catch (e) {
            console.error(e);
        }
}
tf(), (ba.exports = xe);
var Xp = ba.exports,
    nf,
    Ea = Xp;
(nf = Ea.createRoot), Ea.hydrateRoot;
/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rr() {
    return (
        (rr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        rr.apply(this, arguments)
    );
}
var it;
(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(it || (it = {}));
const xa = "popstate";
function Jp(e) {
    e === void 0 && (e = {});
    function t(l, o) {
        let {
            pathname: i = "/",
            search: u = "",
            hash: a = "",
        } = Vt(l.location.hash.substr(1));
        return (
            !i.startsWith("/") && !i.startsWith(".") && (i = "/" + i),
            mi(
                "",
                { pathname: i, search: u, hash: a },
                (o.state && o.state.usr) || null,
                (o.state && o.state.key) || "default",
            )
        );
    }
    function n(l, o) {
        let i = l.document.querySelector("base"),
            u = "";
        if (i && i.getAttribute("href")) {
            let a = l.location.href,
                s = a.indexOf("#");
            u = s === -1 ? a : a.slice(0, s);
        }
        return u + "#" + (typeof o == "string" ? o : yl(o));
    }
    function r(l, o) {
        Vl(
            l.pathname.charAt(0) === "/",
            "relative pathnames are not supported in hash history.push(" +
                JSON.stringify(o) +
                ")",
        );
    }
    return bp(t, n, r, e);
}
function Q(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Vl(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}
function qp() {
    return Math.random().toString(36).substr(2, 8);
}
function Ca(e, t) {
    return { usr: e.state, key: e.key, idx: t };
}
function mi(e, t, n, r) {
    return (
        n === void 0 && (n = null),
        rr(
            {
                pathname: typeof e == "string" ? e : e.pathname,
                search: "",
                hash: "",
            },
            typeof t == "string" ? Vt(t) : t,
            { state: n, key: (t && t.key) || r || qp() },
        )
    );
}
function yl(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
        n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
    );
}
function Vt(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
    }
    return t;
}
function bp(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: l = document.defaultView, v5Compat: o = !1 } = r,
        i = l.history,
        u = it.Pop,
        a = null,
        s = m();
    s == null && ((s = 0), i.replaceState(rr({}, i.state, { idx: s }), ""));
    function m() {
        return (i.state || { idx: null }).idx;
    }
    function h() {
        u = it.Pop;
        let x = m(),
            f = x == null ? null : x - s;
        (s = x), a && a({ action: u, location: w.location, delta: f });
    }
    function p(x, f) {
        u = it.Push;
        let c = mi(w.location, x, f);
        n && n(c, x), (s = m() + 1);
        let d = Ca(c, s),
            v = w.createHref(c);
        try {
            i.pushState(d, "", v);
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            l.location.assign(v);
        }
        o && a && a({ action: u, location: w.location, delta: 1 });
    }
    function g(x, f) {
        u = it.Replace;
        let c = mi(w.location, x, f);
        n && n(c, x), (s = m());
        let d = Ca(c, s),
            v = w.createHref(c);
        i.replaceState(d, "", v),
            o && a && a({ action: u, location: w.location, delta: 0 });
    }
    function y(x) {
        let f =
                l.location.origin !== "null"
                    ? l.location.origin
                    : l.location.href,
            c = typeof x == "string" ? x : yl(x);
        return (
            Q(
                f,
                "No window.location.(origin|href) available to create URL for href: " +
                    c,
            ),
            new URL(c, f)
        );
    }
    let w = {
        get action() {
            return u;
        },
        get location() {
            return e(l, i);
        },
        listen(x) {
            if (a)
                throw new Error("A history only accepts one active listener");
            return (
                l.addEventListener(xa, h),
                (a = x),
                () => {
                    l.removeEventListener(xa, h), (a = null);
                }
            );
        },
        createHref(x) {
            return t(l, x);
        },
        createURL: y,
        encodeLocation(x) {
            let f = y(x);
            return { pathname: f.pathname, search: f.search, hash: f.hash };
        },
        push: p,
        replace: g,
        go(x) {
            return i.go(x);
        },
    };
    return w;
}
var Pa;
(function (e) {
    (e.data = "data"),
        (e.deferred = "deferred"),
        (e.redirect = "redirect"),
        (e.error = "error");
})(Pa || (Pa = {}));
function e0(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? Vt(t) : t,
        l = pn(r.pathname || "/", n);
    if (l == null) return null;
    let o = rf(e);
    t0(o);
    let i = null;
    for (let u = 0; i == null && u < o.length; ++u) i = c0(o[u], d0(l));
    return i;
}
function rf(e, t, n, r) {
    t === void 0 && (t = []),
        n === void 0 && (n = []),
        r === void 0 && (r = "");
    let l = (o, i, u) => {
        let a = {
            relativePath: u === void 0 ? o.path || "" : u,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: i,
            route: o,
        };
        a.relativePath.startsWith("/") &&
            (Q(
                a.relativePath.startsWith(r),
                'Absolute route path "' +
                    a.relativePath +
                    '" nested under path ' +
                    ('"' +
                        r +
                        '" is not valid. An absolute child route path ') +
                    "must start with the combined path of all its parent routes.",
            ),
            (a.relativePath = a.relativePath.slice(r.length)));
        let s = mt([r, a.relativePath]),
            m = n.concat(a);
        o.children &&
            o.children.length > 0 &&
            (Q(
                o.index !== !0,
                "Index routes must not have child routes. Please remove " +
                    ('all child routes from route path "' + s + '".'),
            ),
            rf(o.children, t, m, s)),
            !(o.path == null && !o.index) &&
                t.push({ path: s, score: a0(s, o.index), routesMeta: m });
    };
    return (
        e.forEach((o, i) => {
            var u;
            if (o.path === "" || !((u = o.path) != null && u.includes("?")))
                l(o, i);
            else for (let a of lf(o.path)) l(o, i, a);
        }),
        t
    );
}
function lf(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
        l = n.endsWith("?"),
        o = n.replace(/\?$/, "");
    if (r.length === 0) return l ? [o, ""] : [o];
    let i = lf(r.join("/")),
        u = [];
    return (
        u.push(...i.map((a) => (a === "" ? o : [o, a].join("/")))),
        l && u.push(...i),
        u.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
    );
}
function t0(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : s0(
                  t.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex),
              ),
    );
}
const n0 = /^:[\w-]+$/,
    r0 = 3,
    l0 = 2,
    o0 = 1,
    i0 = 10,
    u0 = -2,
    _a = (e) => e === "*";
function a0(e, t) {
    let n = e.split("/"),
        r = n.length;
    return (
        n.some(_a) && (r += u0),
        t && (r += l0),
        n
            .filter((l) => !_a(l))
            .reduce((l, o) => l + (n0.test(o) ? r0 : o === "" ? o0 : i0), r)
    );
}
function s0(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
        ? e[e.length - 1] - t[t.length - 1]
        : 0;
}
function c0(e, t) {
    let { routesMeta: n } = e,
        r = {},
        l = "/",
        o = [];
    for (let i = 0; i < n.length; ++i) {
        let u = n[i],
            a = i === n.length - 1,
            s = l === "/" ? t : t.slice(l.length) || "/",
            m = vi(
                {
                    path: u.relativePath,
                    caseSensitive: u.caseSensitive,
                    end: a,
                },
                s,
            );
        if (!m) return null;
        Object.assign(r, m.params);
        let h = u.route;
        o.push({
            params: r,
            pathname: mt([l, m.pathname]),
            pathnameBase: g0(mt([l, m.pathnameBase])),
            route: h,
        }),
            m.pathnameBase !== "/" && (l = mt([l, m.pathnameBase]));
    }
    return o;
}
function vi(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = f0(e.path, e.caseSensitive, e.end),
        l = t.match(n);
    if (!l) return null;
    let o = l[0],
        i = o.replace(/(.)\/+$/, "$1"),
        u = l.slice(1);
    return {
        params: r.reduce((s, m, h) => {
            let { paramName: p, isOptional: g } = m;
            if (p === "*") {
                let w = u[h] || "";
                i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
            }
            const y = u[h];
            return g && !y ? (s[p] = void 0) : (s[p] = p0(y || "", p)), s;
        }, {}),
        pathname: o,
        pathnameBase: i,
        pattern: e,
    };
}
function f0(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        Vl(
            e === "*" || !e.endsWith("*") || e.endsWith("/*"),
            'Route path "' +
                e +
                '" will be treated as if it were ' +
                ('"' +
                    e.replace(/\*$/, "/*") +
                    '" because the `*` character must ') +
                "always follow a `/` in the pattern. To get rid of this warning, " +
                ('please change the route path to "' +
                    e.replace(/\*$/, "/*") +
                    '".'),
        );
    let r = [],
        l =
            "^" +
            e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (i, u, a) => (
                        r.push({ paramName: u, isOptional: a != null }),
                        a ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    ),
                );
    return (
        e.endsWith("*")
            ? (r.push({ paramName: "*" }),
              (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : n
              ? (l += "\\/*$")
              : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
        [new RegExp(l, t ? void 0 : "i"), r]
    );
}
function d0(e) {
    try {
        return decodeURI(e);
    } catch (t) {
        return (
            Vl(
                !1,
                'The URL path "' +
                    e +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                    ("encoding (" + t + ")."),
            ),
            e
        );
    }
}
function p0(e, t) {
    try {
        return decodeURIComponent(e);
    } catch (n) {
        return (
            Vl(
                !1,
                'The value for the URL param "' +
                    t +
                    '" will not be decoded because' +
                    (' the string "' +
                        e +
                        '" is a malformed URL segment. This is probably') +
                    (" due to a bad percent encoding (" + n + ")."),
            ),
            e
        );
    }
}
function pn(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
}
function h0(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: l = "",
    } = typeof e == "string" ? Vt(e) : e;
    return {
        pathname: n ? (n.startsWith("/") ? n : m0(n, t)) : t,
        search: y0(r),
        hash: w0(l),
    };
}
function m0(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
        e.split("/").forEach((l) => {
            l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
        }),
        n.length > 1 ? n.join("/") : "/"
    );
}
function yo(e, t, n, r) {
    return (
        "Cannot include a '" +
        e +
        "' character in a manually specified " +
        ("`to." +
            t +
            "` field [" +
            JSON.stringify(r) +
            "].  Please separate it out to the ") +
        ("`to." +
            n +
            "` field. Alternatively you may provide the full path as ") +
        'a string in <Link to="..."> and the router will parse it for you.'
    );
}
function v0(e) {
    return e.filter(
        (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
    );
}
function of(e, t) {
    let n = v0(e);
    return t
        ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
        : n.map((r) => r.pathnameBase);
}
function uf(e, t, n, r) {
    r === void 0 && (r = !1);
    let l;
    typeof e == "string"
        ? (l = Vt(e))
        : ((l = rr({}, e)),
          Q(
              !l.pathname || !l.pathname.includes("?"),
              yo("?", "pathname", "search", l),
          ),
          Q(
              !l.pathname || !l.pathname.includes("#"),
              yo("#", "pathname", "hash", l),
          ),
          Q(
              !l.search || !l.search.includes("#"),
              yo("#", "search", "hash", l),
          ));
    let o = e === "" || l.pathname === "",
        i = o ? "/" : l.pathname,
        u;
    if (i == null) u = n;
    else {
        let h = t.length - 1;
        if (!r && i.startsWith("..")) {
            let p = i.split("/");
            for (; p[0] === ".."; ) p.shift(), (h -= 1);
            l.pathname = p.join("/");
        }
        u = h >= 0 ? t[h] : "/";
    }
    let a = h0(l, u),
        s = i && i !== "/" && i.endsWith("/"),
        m = (o || i === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (s || m) && (a.pathname += "/"), a;
}
const mt = (e) => e.join("/").replace(/\/\/+/g, "/"),
    g0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    y0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    w0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function S0(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.internal == "boolean" &&
        "data" in e
    );
}
const af = ["post", "put", "patch", "delete"];
new Set(af);
const k0 = ["get", ...af];
new Set(k0);
/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function lr() {
    return (
        (lr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        lr.apply(this, arguments)
    );
}
const Al = E.createContext(null),
    sf = E.createContext(null),
    kt = E.createContext(null),
    $l = E.createContext(null),
    At = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    cf = E.createContext(null);
function E0(e, t) {
    let { relative: n } = t === void 0 ? {} : t;
    cr() || Q(!1);
    let { basename: r, navigator: l } = E.useContext(kt),
        { hash: o, pathname: i, search: u } = Dl(e, { relative: n }),
        a = i;
    return (
        r !== "/" && (a = i === "/" ? r : mt([r, i])),
        l.createHref({ pathname: a, search: u, hash: o })
    );
}
function cr() {
    return E.useContext($l) != null;
}
function fr() {
    return cr() || Q(!1), E.useContext($l).location;
}
function ff(e) {
    E.useContext(kt).static || E.useLayoutEffect(e);
}
function df() {
    let { isDataRoute: e } = E.useContext(At);
    return e ? F0() : x0();
}
function x0() {
    cr() || Q(!1);
    let e = E.useContext(Al),
        { basename: t, future: n, navigator: r } = E.useContext(kt),
        { matches: l } = E.useContext(At),
        { pathname: o } = fr(),
        i = JSON.stringify(of(l, n.v7_relativeSplatPath)),
        u = E.useRef(!1);
    return (
        ff(() => {
            u.current = !0;
        }),
        E.useCallback(
            function (s, m) {
                if ((m === void 0 && (m = {}), !u.current)) return;
                if (typeof s == "number") {
                    r.go(s);
                    return;
                }
                let h = uf(s, JSON.parse(i), o, m.relative === "path");
                e == null &&
                    t !== "/" &&
                    (h.pathname = h.pathname === "/" ? t : mt([t, h.pathname])),
                    (m.replace ? r.replace : r.push)(h, m.state, m);
            },
            [t, r, i, o, e],
        )
    );
}
function Dl(e, t) {
    let { relative: n } = t === void 0 ? {} : t,
        { future: r } = E.useContext(kt),
        { matches: l } = E.useContext(At),
        { pathname: o } = fr(),
        i = JSON.stringify(of(l, r.v7_relativeSplatPath));
    return E.useMemo(() => uf(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function C0(e, t) {
    return P0(e, t);
}
function P0(e, t, n, r) {
    cr() || Q(!1);
    let { navigator: l } = E.useContext(kt),
        { matches: o } = E.useContext(At),
        i = o[o.length - 1],
        u = i ? i.params : {};
    i && i.pathname;
    let a = i ? i.pathnameBase : "/";
    i && i.route;
    let s = fr(),
        m;
    if (t) {
        var h;
        let x = typeof t == "string" ? Vt(t) : t;
        a === "/" || ((h = x.pathname) != null && h.startsWith(a)) || Q(!1),
            (m = x);
    } else m = s;
    let p = m.pathname || "/",
        g = a === "/" ? p : p.slice(a.length) || "/",
        y = e0(e, { pathname: g }),
        w = O0(
            y &&
                y.map((x) =>
                    Object.assign({}, x, {
                        params: Object.assign({}, u, x.params),
                        pathname: mt([
                            a,
                            l.encodeLocation
                                ? l.encodeLocation(x.pathname).pathname
                                : x.pathname,
                        ]),
                        pathnameBase:
                            x.pathnameBase === "/"
                                ? a
                                : mt([
                                      a,
                                      l.encodeLocation
                                          ? l.encodeLocation(x.pathnameBase)
                                                .pathname
                                          : x.pathnameBase,
                                  ]),
                    }),
                ),
            o,
            n,
            r,
        );
    return t && w
        ? E.createElement(
              $l.Provider,
              {
                  value: {
                      location: lr(
                          {
                              pathname: "/",
                              search: "",
                              hash: "",
                              state: null,
                              key: "default",
                          },
                          m,
                      ),
                      navigationType: it.Pop,
                  },
              },
              w,
          )
        : w;
}
function _0() {
    let e = M0(),
        t = S0(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
              ? e.message
              : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
    return E.createElement(
        E.Fragment,
        null,
        E.createElement("h2", null, "Unexpected Application Error!"),
        E.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? E.createElement("pre", { style: l }, n) : null,
        null,
    );
}
const N0 = E.createElement(_0, null);
class L0 extends E.Component {
    constructor(t) {
        super(t),
            (this.state = {
                location: t.location,
                revalidation: t.revalidation,
                error: t.error,
            });
    }
    static getDerivedStateFromError(t) {
        return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location ||
            (n.revalidation !== "idle" && t.revalidation === "idle")
            ? {
                  error: t.error,
                  location: t.location,
                  revalidation: t.revalidation,
              }
            : {
                  error: t.error !== void 0 ? t.error : n.error,
                  location: n.location,
                  revalidation: t.revalidation || n.revalidation,
              };
    }
    componentDidCatch(t, n) {
        console.error(
            "React Router caught the following error during render",
            t,
            n,
        );
    }
    render() {
        return this.state.error !== void 0
            ? E.createElement(
                  At.Provider,
                  { value: this.props.routeContext },
                  E.createElement(cf.Provider, {
                      value: this.state.error,
                      children: this.props.component,
                  }),
              )
            : this.props.children;
    }
}
function R0(e) {
    let { routeContext: t, match: n, children: r } = e,
        l = E.useContext(Al);
    return (
        l &&
            l.static &&
            l.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (l.staticContext._deepestRenderedBoundaryId = n.route.id),
        E.createElement(At.Provider, { value: t }, r)
    );
}
function O0(e, t, n, r) {
    var l;
    if (
        (t === void 0 && (t = []),
        n === void 0 && (n = null),
        r === void 0 && (r = null),
        e == null)
    ) {
        var o;
        if ((o = n) != null && o.errors) e = n.matches;
        else return null;
    }
    let i = e,
        u = (l = n) == null ? void 0 : l.errors;
    if (u != null) {
        let m = i.findIndex(
            (h) => h.route.id && (u == null ? void 0 : u[h.route.id]),
        );
        m >= 0 || Q(!1), (i = i.slice(0, Math.min(i.length, m + 1)));
    }
    let a = !1,
        s = -1;
    if (n && r && r.v7_partialHydration)
        for (let m = 0; m < i.length; m++) {
            let h = i[m];
            if (
                ((h.route.HydrateFallback || h.route.hydrateFallbackElement) &&
                    (s = m),
                h.route.id)
            ) {
                let { loaderData: p, errors: g } = n,
                    y =
                        h.route.loader &&
                        p[h.route.id] === void 0 &&
                        (!g || g[h.route.id] === void 0);
                if (h.route.lazy || y) {
                    (a = !0), s >= 0 ? (i = i.slice(0, s + 1)) : (i = [i[0]]);
                    break;
                }
            }
        }
    return i.reduceRight((m, h, p) => {
        let g,
            y = !1,
            w = null,
            x = null;
        n &&
            ((g = u && h.route.id ? u[h.route.id] : void 0),
            (w = h.route.errorElement || N0),
            a &&
                (s < 0 && p === 0
                    ? (I0("route-fallback", !1), (y = !0), (x = null))
                    : s === p &&
                      ((y = !0),
                      (x = h.route.hydrateFallbackElement || null))));
        let f = t.concat(i.slice(0, p + 1)),
            c = () => {
                let d;
                return (
                    g
                        ? (d = w)
                        : y
                          ? (d = x)
                          : h.route.Component
                            ? (d = E.createElement(h.route.Component, null))
                            : h.route.element
                              ? (d = h.route.element)
                              : (d = m),
                    E.createElement(R0, {
                        match: h,
                        routeContext: {
                            outlet: m,
                            matches: f,
                            isDataRoute: n != null,
                        },
                        children: d,
                    })
                );
            };
        return n && (h.route.ErrorBoundary || h.route.errorElement || p === 0)
            ? E.createElement(L0, {
                  location: n.location,
                  revalidation: n.revalidation,
                  component: w,
                  error: g,
                  children: c(),
                  routeContext: { outlet: null, matches: f, isDataRoute: !0 },
              })
            : c();
    }, null);
}
var pf = (function (e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
        );
    })(pf || {}),
    wl = (function (e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
        );
    })(wl || {});
function z0(e) {
    let t = E.useContext(Al);
    return t || Q(!1), t;
}
function T0(e) {
    let t = E.useContext(sf);
    return t || Q(!1), t;
}
function j0(e) {
    let t = E.useContext(At);
    return t || Q(!1), t;
}
function hf(e) {
    let t = j0(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || Q(!1), n.route.id;
}
function M0() {
    var e;
    let t = E.useContext(cf),
        n = T0(wl.UseRouteError),
        r = hf(wl.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function F0() {
    let { router: e } = z0(pf.UseNavigateStable),
        t = hf(wl.UseNavigateStable),
        n = E.useRef(!1);
    return (
        ff(() => {
            n.current = !0;
        }),
        E.useCallback(
            function (l, o) {
                o === void 0 && (o = {}),
                    n.current &&
                        (typeof l == "number"
                            ? e.navigate(l)
                            : e.navigate(l, lr({ fromRouteId: t }, o)));
            },
            [e, t],
        )
    );
}
const Na = {};
function I0(e, t, n) {
    !t && !Na[e] && (Na[e] = !0);
}
function Kr(e) {
    Q(!1);
}
function H0(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: l = it.Pop,
        navigator: o,
        static: i = !1,
        future: u,
    } = e;
    cr() && Q(!1);
    let a = t.replace(/^\/*/, "/"),
        s = E.useMemo(
            () => ({
                basename: a,
                navigator: o,
                static: i,
                future: lr({ v7_relativeSplatPath: !1 }, u),
            }),
            [a, u, o, i],
        );
    typeof r == "string" && (r = Vt(r));
    let {
            pathname: m = "/",
            search: h = "",
            hash: p = "",
            state: g = null,
            key: y = "default",
        } = r,
        w = E.useMemo(() => {
            let x = pn(m, a);
            return x == null
                ? null
                : {
                      location: {
                          pathname: x,
                          search: h,
                          hash: p,
                          state: g,
                          key: y,
                      },
                      navigationType: l,
                  };
        }, [a, m, h, p, g, y, l]);
    return w == null
        ? null
        : E.createElement(
              kt.Provider,
              { value: s },
              E.createElement($l.Provider, { children: n, value: w }),
          );
}
function V0(e) {
    let { children: t, location: n } = e;
    return C0(gi(t), n);
}
new Promise(() => {});
function gi(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
        E.Children.forEach(e, (r, l) => {
            if (!E.isValidElement(r)) return;
            let o = [...t, l];
            if (r.type === E.Fragment) {
                n.push.apply(n, gi(r.props.children, o));
                return;
            }
            r.type !== Kr && Q(!1),
                !r.props.index || !r.props.children || Q(!1);
            let i = {
                id: r.props.id || o.join("-"),
                caseSensitive: r.props.caseSensitive,
                element: r.props.element,
                Component: r.props.Component,
                index: r.props.index,
                path: r.props.path,
                loader: r.props.loader,
                action: r.props.action,
                errorElement: r.props.errorElement,
                ErrorBoundary: r.props.ErrorBoundary,
                hasErrorBoundary:
                    r.props.ErrorBoundary != null ||
                    r.props.errorElement != null,
                shouldRevalidate: r.props.shouldRevalidate,
                handle: r.props.handle,
                lazy: r.props.lazy,
            };
            r.props.children && (i.children = gi(r.props.children, o)),
                n.push(i);
        }),
        n
    );
}
/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Sl() {
    return (
        (Sl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        Sl.apply(this, arguments)
    );
}
function mf(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        l,
        o;
    for (o = 0; o < r.length; o++)
        (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
    return n;
}
function A0(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function $0(e, t) {
    return e.button === 0 && (!t || t === "_self") && !A0(e);
}
const D0 = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "unstable_viewTransition",
    ],
    U0 = [
        "aria-current",
        "caseSensitive",
        "className",
        "end",
        "style",
        "to",
        "unstable_viewTransition",
        "children",
    ],
    B0 = E.createContext({ isTransitioning: !1 }),
    W0 = "startTransition",
    La = $f[W0];
function Z0(e) {
    let { basename: t, children: n, future: r, window: l } = e,
        o = E.useRef();
    o.current == null && (o.current = Jp({ window: l, v5Compat: !0 }));
    let i = o.current,
        [u, a] = E.useState({ action: i.action, location: i.location }),
        { v7_startTransition: s } = r || {},
        m = E.useCallback(
            (h) => {
                s && La ? La(() => a(h)) : a(h);
            },
            [a, s],
        );
    return (
        E.useLayoutEffect(() => i.listen(m), [i, m]),
        E.createElement(H0, {
            basename: t,
            children: n,
            location: u.location,
            navigationType: u.action,
            navigator: i,
            future: r,
        })
    );
}
const Q0 =
        typeof window < "u" &&
        typeof window.document < "u" &&
        typeof window.document.createElement < "u",
    K0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    G0 = E.forwardRef(function (t, n) {
        let {
                onClick: r,
                relative: l,
                reloadDocument: o,
                replace: i,
                state: u,
                target: a,
                to: s,
                preventScrollReset: m,
                unstable_viewTransition: h,
            } = t,
            p = mf(t, D0),
            { basename: g } = E.useContext(kt),
            y,
            w = !1;
        if (typeof s == "string" && K0.test(s) && ((y = s), Q0))
            try {
                let d = new URL(window.location.href),
                    v = s.startsWith("//")
                        ? new URL(d.protocol + s)
                        : new URL(s),
                    C = pn(v.pathname, g);
                v.origin === d.origin && C != null
                    ? (s = C + v.search + v.hash)
                    : (w = !0);
            } catch {}
        let x = E0(s, { relative: l }),
            f = J0(s, {
                replace: i,
                state: u,
                target: a,
                preventScrollReset: m,
                relative: l,
                unstable_viewTransition: h,
            });
        function c(d) {
            r && r(d), d.defaultPrevented || f(d);
        }
        return E.createElement(
            "a",
            Sl({}, p, {
                href: y || x,
                onClick: w || o ? r : c,
                ref: n,
                target: a,
            }),
        );
    }),
    Y0 = E.forwardRef(function (t, n) {
        let {
                "aria-current": r = "page",
                caseSensitive: l = !1,
                className: o = "",
                end: i = !1,
                style: u,
                to: a,
                unstable_viewTransition: s,
                children: m,
            } = t,
            h = mf(t, U0),
            p = Dl(a, { relative: h.relative }),
            g = fr(),
            y = E.useContext(sf),
            { navigator: w, basename: x } = E.useContext(kt),
            f = y != null && q0(p) && s === !0,
            c = w.encodeLocation ? w.encodeLocation(p).pathname : p.pathname,
            d = g.pathname,
            v =
                y && y.navigation && y.navigation.location
                    ? y.navigation.location.pathname
                    : null;
        l ||
            ((d = d.toLowerCase()),
            (v = v ? v.toLowerCase() : null),
            (c = c.toLowerCase())),
            v && x && (v = pn(v, x) || v);
        const C = c !== "/" && c.endsWith("/") ? c.length - 1 : c.length;
        let N = d === c || (!i && d.startsWith(c) && d.charAt(C) === "/"),
            R =
                v != null &&
                (v === c ||
                    (!i && v.startsWith(c) && v.charAt(c.length) === "/")),
            O = { isActive: N, isPending: R, isTransitioning: f },
            D = N ? r : void 0,
            T;
        typeof o == "function"
            ? (T = o(O))
            : (T = [
                  o,
                  N ? "active" : null,
                  R ? "pending" : null,
                  f ? "transitioning" : null,
              ]
                  .filter(Boolean)
                  .join(" "));
        let ye = typeof u == "function" ? u(O) : u;
        return E.createElement(
            G0,
            Sl({}, h, {
                "aria-current": D,
                className: T,
                ref: n,
                style: ye,
                to: a,
                unstable_viewTransition: s,
            }),
            typeof m == "function" ? m(O) : m,
        );
    });
var yi;
(function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
        (e.UseSubmit = "useSubmit"),
        (e.UseSubmitFetcher = "useSubmitFetcher"),
        (e.UseFetcher = "useFetcher"),
        (e.useViewTransitionState = "useViewTransitionState");
})(yi || (yi = {}));
var Ra;
(function (e) {
    (e.UseFetcher = "useFetcher"),
        (e.UseFetchers = "useFetchers"),
        (e.UseScrollRestoration = "useScrollRestoration");
})(Ra || (Ra = {}));
function X0(e) {
    let t = E.useContext(Al);
    return t || Q(!1), t;
}
function J0(e, t) {
    let {
            target: n,
            replace: r,
            state: l,
            preventScrollReset: o,
            relative: i,
            unstable_viewTransition: u,
        } = t === void 0 ? {} : t,
        a = df(),
        s = fr(),
        m = Dl(e, { relative: i });
    return E.useCallback(
        (h) => {
            if ($0(h, n)) {
                h.preventDefault();
                let p = r !== void 0 ? r : yl(s) === yl(m);
                a(e, {
                    replace: p,
                    state: l,
                    preventScrollReset: o,
                    relative: i,
                    unstable_viewTransition: u,
                });
            }
        },
        [s, a, m, r, l, n, e, o, i, u],
    );
}
function q0(e, t) {
    t === void 0 && (t = {});
    let n = E.useContext(B0);
    n == null && Q(!1);
    let { basename: r } = X0(yi.useViewTransitionState),
        l = Dl(e, { relative: t.relative });
    if (!n.isTransitioning) return !1;
    let o = pn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
        i = pn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return vi(l.pathname, i) != null || vi(l.pathname, o) != null;
}
const b0 = E.createContext({
    color: "currentColor",
    size: "1em",
    weight: "regular",
    mirrored: !1,
});
var eh = Object.defineProperty,
    kl = Object.getOwnPropertySymbols,
    vf = Object.prototype.hasOwnProperty,
    gf = Object.prototype.propertyIsEnumerable,
    Oa = (e, t, n) =>
        t in e
            ? eh(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
              })
            : (e[t] = n),
    za = (e, t) => {
        for (var n in t || (t = {})) vf.call(t, n) && Oa(e, n, t[n]);
        if (kl) for (var n of kl(t)) gf.call(t, n) && Oa(e, n, t[n]);
        return e;
    },
    Ta = (e, t) => {
        var n = {};
        for (var r in e) vf.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && kl)
            for (var r of kl(e))
                t.indexOf(r) < 0 && gf.call(e, r) && (n[r] = e[r]);
        return n;
    };
const dr = E.forwardRef((e, t) => {
    const n = e,
        {
            alt: r,
            color: l,
            size: o,
            weight: i,
            mirrored: u,
            children: a,
            weights: s,
        } = n,
        m = Ta(n, [
            "alt",
            "color",
            "size",
            "weight",
            "mirrored",
            "children",
            "weights",
        ]),
        h = E.useContext(b0),
        {
            color: p = "currentColor",
            size: g,
            weight: y = "regular",
            mirrored: w = !1,
        } = h,
        x = Ta(h, ["color", "size", "weight", "mirrored"]);
    return k.createElement(
        "svg",
        za(
            za(
                {
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: o ?? g,
                    height: o ?? g,
                    fill: l ?? p,
                    viewBox: "0 0 256 256",
                    transform: u || w ? "scale(-1, 1)" : void 0,
                },
                x,
            ),
            m,
        ),
        !!r && k.createElement("title", null, r),
        a,
        s.get(i ?? y),
    );
});
dr.displayName = "IconBase";
const th = new Map([
        [
            "bold",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z",
                }),
            ),
        ],
        [
            "duotone",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M216,128l-72,72V56Z",
                    opacity: "0.2",
                }),
                k.createElement("path", {
                    d: "M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z",
                }),
            ),
        ],
        [
            "fill",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z",
                }),
            ),
        ],
        [
            "light",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z",
                }),
            ),
        ],
        [
            "regular",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z",
                }),
            ),
        ],
        [
            "thin",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z",
                }),
            ),
        ],
    ]),
    nh = new Map([
        [
            "bold",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M208,20H72A36,36,0,0,0,36,56V224a12,12,0,0,0,12,12H192a12,12,0,0,0,0-24H60v-4a12,12,0,0,1,12-12H208a12,12,0,0,0,12-12V32A12,12,0,0,0,208,20ZM196,172H72a35.59,35.59,0,0,0-12,2.06V56A12,12,0,0,1,72,44H196Z",
                }),
            ),
        ],
        [
            "duotone",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M208,32V192H72a24,24,0,0,0-24,24V56A24,24,0,0,1,72,32Z",
                    opacity: "0.2",
                }),
                k.createElement("path", {
                    d: "M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z",
                }),
            ),
        ],
        [
            "fill",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M216,32V192a8,8,0,0,1-8,8H72a16,16,0,0,0-16,16H192a8,8,0,0,1,0,16H48a8,8,0,0,1-8-8V56A32,32,0,0,1,72,24H208A8,8,0,0,1,216,32Z",
                }),
            ),
        ],
        [
            "light",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M208,26H72A30,30,0,0,0,42,56V224a6,6,0,0,0,6,6H192a6,6,0,0,0,0-12H54v-2a18,18,0,0,1,18-18H208a6,6,0,0,0,6-6V32A6,6,0,0,0,208,26Zm-6,160H72a29.87,29.87,0,0,0-18,6V56A18,18,0,0,1,72,38H202Z",
                }),
            ),
        ],
        [
            "regular",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z",
                }),
            ),
        ],
        [
            "thin",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M208,28H72A28,28,0,0,0,44,56V224a4,4,0,0,0,4,4H192a4,4,0,0,0,0-8H52v-4a20,20,0,0,1,20-20H208a4,4,0,0,0,4-4V32A4,4,0,0,0,208,28Zm-4,160H72a27.94,27.94,0,0,0-20,8.42V56A20,20,0,0,1,72,36H204Z",
                }),
            ),
        ],
    ]),
    rh = new Map([
        [
            "bold",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z",
                }),
            ),
        ],
        [
            "duotone",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M216,40V168H168V88H88V40Z",
                    opacity: "0.2",
                }),
                k.createElement("path", {
                    d: "M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z",
                }),
            ),
        ],
        [
            "fill",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z",
                }),
            ),
        ],
        [
            "light",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z",
                }),
            ),
        ],
        [
            "regular",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z",
                }),
            ),
        ],
        [
            "thin",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z",
                }),
            ),
        ],
    ]),
    lh = new Map([
        [
            "bold",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Zm112-80a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,132Zm0,40a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,172Z",
                }),
            ),
        ],
        [
            "duotone",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M208,88H152V32Z",
                    opacity: "0.2",
                }),
                k.createElement("path", {
                    d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z",
                }),
            ),
        ],
        [
            "fill",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,176H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm-8-56V44l44,44Z",
                }),
            ),
        ],
        [
            "light",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM200,218H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Zm-34-82a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,136Zm0,32a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,168Z",
                }),
            ),
        ],
        [
            "regular",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z",
                }),
            ),
        ],
        [
            "thin",
            k.createElement(
                k.Fragment,
                null,
                k.createElement("path", {
                    d: "M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM200,220H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216A4,4,0,0,1,200,220Zm-36-84a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,136Zm0,32a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,168Z",
                }),
            ),
        ],
    ]);
var oh = Object.defineProperty,
    ih = Object.defineProperties,
    uh = Object.getOwnPropertyDescriptors,
    ja = Object.getOwnPropertySymbols,
    ah = Object.prototype.hasOwnProperty,
    sh = Object.prototype.propertyIsEnumerable,
    Ma = (e, t, n) =>
        t in e
            ? oh(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
              })
            : (e[t] = n),
    ch = (e, t) => {
        for (var n in t || (t = {})) ah.call(t, n) && Ma(e, n, t[n]);
        if (ja) for (var n of ja(t)) sh.call(t, n) && Ma(e, n, t[n]);
        return e;
    },
    fh = (e, t) => ih(e, uh(t));
const yf = E.forwardRef((e, t) =>
    k.createElement(dr, fh(ch({ ref: t }, e), { weights: th })),
);
yf.displayName = "ArrowRight";
var dh = Object.defineProperty,
    ph = Object.defineProperties,
    hh = Object.getOwnPropertyDescriptors,
    Fa = Object.getOwnPropertySymbols,
    mh = Object.prototype.hasOwnProperty,
    vh = Object.prototype.propertyIsEnumerable,
    Ia = (e, t, n) =>
        t in e
            ? dh(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
              })
            : (e[t] = n),
    gh = (e, t) => {
        for (var n in t || (t = {})) mh.call(t, n) && Ia(e, n, t[n]);
        if (Fa) for (var n of Fa(t)) vh.call(t, n) && Ia(e, n, t[n]);
        return e;
    },
    yh = (e, t) => ph(e, hh(t));
const wf = E.forwardRef((e, t) =>
    k.createElement(dr, yh(gh({ ref: t }, e), { weights: nh })),
);
wf.displayName = "Book";
var wh = Object.defineProperty,
    Sh = Object.defineProperties,
    kh = Object.getOwnPropertyDescriptors,
    Ha = Object.getOwnPropertySymbols,
    Eh = Object.prototype.hasOwnProperty,
    xh = Object.prototype.propertyIsEnumerable,
    Va = (e, t, n) =>
        t in e
            ? wh(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
              })
            : (e[t] = n),
    Ch = (e, t) => {
        for (var n in t || (t = {})) Eh.call(t, n) && Va(e, n, t[n]);
        if (Ha) for (var n of Ha(t)) xh.call(t, n) && Va(e, n, t[n]);
        return e;
    },
    Ph = (e, t) => Sh(e, kh(t));
const Sf = E.forwardRef((e, t) =>
    k.createElement(dr, Ph(Ch({ ref: t }, e), { weights: rh })),
);
Sf.displayName = "Copy";
var _h = Object.defineProperty,
    Nh = Object.defineProperties,
    Lh = Object.getOwnPropertyDescriptors,
    Aa = Object.getOwnPropertySymbols,
    Rh = Object.prototype.hasOwnProperty,
    Oh = Object.prototype.propertyIsEnumerable,
    $a = (e, t, n) =>
        t in e
            ? _h(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
              })
            : (e[t] = n),
    zh = (e, t) => {
        for (var n in t || (t = {})) Rh.call(t, n) && $a(e, n, t[n]);
        if (Aa) for (var n of Aa(t)) Oh.call(t, n) && $a(e, n, t[n]);
        return e;
    },
    Th = (e, t) => Nh(e, Lh(t));
const kf = E.forwardRef((e, t) =>
    k.createElement(dr, Th(zh({ ref: t }, e), { weights: lh })),
);
kf.displayName = "FileText";
const Da = function ({ page: e, CardIcon: t, label: n, labelLink: r }) {
        return L.jsx(Y0, {
            to: e,
            children: L.jsxs("div", {
                className:
                    "group flex gap-4 items-center p-4 border hover:border-red-400 border-gray-300 rounded-lg cursor-pointer transition-all shadow-sm",
                children: [
                    L.jsx("div", {
                        className:
                            "h-14 w-14 flex items-center justify-center border border-gray-300 rounded-full",
                        children: L.jsx(t, { size: 20 }),
                    }),
                    L.jsxs("div", {
                        className: "flex-1",
                        children: [" ", n, " "],
                    }),
                    L.jsxs("div", {
                        className:
                            "flex items-center gap-2 group-hover:text-red-600 transition-all",
                        children: [
                            L.jsxs("span", { children: [" ", r, " "] }),
                            L.jsx(yf, { size: 16 }),
                        ],
                    }),
                ],
            }),
        });
    },
    jh = function () {
        return L.jsxs(L.Fragment, {
            children: [
                L.jsx("div", {
                    className: "flex items-center justify-center h-40",
                    children: L.jsx("img", {
                        src: "/favicon.png",
                        alt: "logo",
                        className: "w-20 h-20",
                    }),
                }),
                L.jsx(Da, {
                    page: "report",
                    label: "Gerar relatório",
                    CardIcon: kf,
                    labelLink: "Abrir",
                }),
                L.jsx(Da, {
                    page: "feedback",
                    label: "Criar feedback",
                    CardIcon: wf,
                    labelLink: "Abrir",
                }),
                L.jsx("a", {
                    href: "https://github.com/pdaug/superelatorio",
                    className: "hover:text-red-600 text-center",
                    target: "_blank",
                    children: "GitHub",
                }),
            ],
        });
    },
    Mh = function () {
        return L.jsx(L.Fragment, {});
    };
let Tr;
const Fh = new Uint8Array(16);
function Ih() {
    if (
        !Tr &&
        ((Tr =
            typeof crypto < "u" &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)),
        !Tr)
    )
        throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
        );
    return Tr(Fh);
}
const te = [];
for (let e = 0; e < 256; ++e) te.push((e + 256).toString(16).slice(1));
function Hh(e, t = 0) {
    return (
        te[e[t + 0]] +
        te[e[t + 1]] +
        te[e[t + 2]] +
        te[e[t + 3]] +
        "-" +
        te[e[t + 4]] +
        te[e[t + 5]] +
        "-" +
        te[e[t + 6]] +
        te[e[t + 7]] +
        "-" +
        te[e[t + 8]] +
        te[e[t + 9]] +
        "-" +
        te[e[t + 10]] +
        te[e[t + 11]] +
        te[e[t + 12]] +
        te[e[t + 13]] +
        te[e[t + 14]] +
        te[e[t + 15]]
    );
}
const Vh =
        typeof crypto < "u" &&
        crypto.randomUUID &&
        crypto.randomUUID.bind(crypto),
    Ua = { randomUUID: Vh };
function jr(e, t, n) {
    if (Ua.randomUUID && !t && !e) return Ua.randomUUID();
    e = e || {};
    const r = e.random || (e.rng || Ih)();
    if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
        n = n || 0;
        for (let l = 0; l < 16; ++l) t[n + l] = r[l];
        return t;
    }
    return Hh(r);
}
const Ah = function (e, t) {
        const n =
            t === "SuperGeeks"
                ? "https://portal.supergeeks.school/"
                : "https://codebuddy.supergeeks.school/";
        return `*${e.course} - ${e.class} - ${e.weekday}*

*Material de Referência*

${e.content}

*Resumo da Aula*

${e.resume}

*Diversão de Casa*

${e.homework}

*Portal ${t}*

👉 ${n}

Atenciosamente
Instrutor(a) ${e.teacher}!`;
    },
    $h = async function (e) {
        try {
            return await navigator.clipboard.writeText(e), !0;
        } catch {
            return !1;
        }
    },
    wo = function (e, t) {
        try {
            const n = typeof t == "string" ? t : JSON.stringify(t);
            return localStorage.setItem(e, n), !0;
        } catch (n) {
            return console.error("[src/functions/LocalStorageSet.ts]", n), !1;
        }
    },
    Dh = [
        "Aula 01",
        "Aula 02",
        "Aula 03",
        "Aula 04",
        "Aula 05",
        "Aula 06",
        "Aula 07",
        "Aula 08",
        "Aula 09",
        "Aula 10",
        "Aula 11",
        "Aula 12",
        "Aula 13",
        "Aula 14",
        "Aula 15",
        "Aula 16",
        "Aula Extra",
        "Aula TCC",
    ],
    Mr = {
        "Super Kids": ["SuperKids Maker", "SuperKids IoT"],
        "Code Buddy": [
            "Lógica 1",
            "Lógica 2",
            "Games 1",
            "Games 2",
            "Games 3",
            "Apps 1",
            "Apps 2",
            "Maker 1",
            "Maker 2",
            "Web 1",
            "Web 2",
            "Drones",
        ],
        "Regular I": [
            "Level 0",
            "Level 1 (Fase 0)",
            "Level 1 (Fase 1)",
            "Level 2 (Fase 2)",
            "Level 2 (Fase 3)",
        ],
        "Regular II": [
            "Level 3 Web (Fase 4)",
            "Level 3 Web (Fase 5)",
            "Level 3 Games (Fase 4)",
            "Level 3 Games (Fase 5)",
        ],
        "Expert Games": ["Expert Games 1", "Expert Games 2", "Expert Games 3"],
        "Expert Web": ["Expert Web 1", "Expert Web 2", "Expert Web 3"],
        "Antigo Expert Games": [
            "Fase 6 GameS",
            "Fase 7 Games",
            "Fase 8 Games",
            "Fase 9 Games",
        ],
        "Antigo Expert Web": [
            "Fase 6 Web",
            "Fase 7 Web",
            "Fase 8 Web",
            "Fase 9 Web",
        ],
        Robótica: ["Robótica 0", "Robótica 1", "Robótica 2", "Robótica 3"],
        MasterGeeks: ["MasterGeeks 1", "MasterGeeks 2", "MasterGeeks 3"],
        Bootcamp: ["Bootcamp"],
    },
    So = function (e) {
        const t = localStorage.getItem(e);
        return t || "";
    },
    Uh = {
        course: "",
        class: So("class"),
        weekday: So("weekday"),
        content: "",
        resume: "",
        homework: "",
        teacher: So("teacher"),
    },
    Bh = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
    ],
    Wh = function () {
        return L.jsx("div", {
            className: "absolute h-screen w-screen top-0 left-0 z-0",
            style: {
                backgroundImage: "url('/background.png')",
                backgroundSize: "cover",
                filter: "blur(4px)",
            },
        });
    },
    Zh = function ({ show: e, setShow: t, message: n }) {
        return (
            E.useEffect(
                function () {
                    let r = 0;
                    return (
                        e &&
                            (r = setInterval(function () {
                                t(!1);
                            }, 3e3)),
                        function () {
                            return clearInterval(r);
                        }
                    );
                },
                [e, t],
            ),
            L.jsx(L.Fragment, {
                children:
                    e &&
                    L.jsx("div", {
                        className:
                            "absolute h-screen w-screen flex items-center justify-center top-0 left-0 bg-[rgba(0,0,0,.5)] z-50",
                        children: L.jsx("div", {
                            className: "bg-white rounded-lg p-4 shadow-lg",
                            children: n,
                        }),
                    }),
            })
        );
    },
    ko = function ({ name: e, value: t, onChange: n, children: r }) {
        return L.jsx("select", {
            name: e,
            value: t,
            onChange: n,
            className:
                "bg-gray-100 text-gray-600 p-2 rounded-lg outline-red-400",
            children: r,
        });
    },
    Qh = function ({ name: e, placeholder: t, value: n, onChange: r }) {
        return L.jsx("input", {
            type: "text",
            name: e,
            value: n,
            onChange: r,
            placeholder: t,
            className:
                "bg-gray-100 text-gray-600 p-2 rounded-lg outline-red-400",
        });
    },
    Eo = function ({
        name: e,
        lines: t,
        placeholder: n,
        value: r,
        onChange: l,
    }) {
        return L.jsx("textarea", {
            rows: t,
            name: e,
            value: r,
            onChange: l,
            placeholder: n,
            className:
                "bg-gray-100 text-gray-600 p-2 rounded-lg outline-red-400",
        });
    },
    Kh = function ({ children: e }) {
        return L.jsx("div", {
            className:
                "absolute h-svh w-svw flex items-center justify-center z-50",
            children: L.jsx("div", {
                className:
                    "sm:w-[640px] sm:h-auto m-8 w-full flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg",
                children: e,
            }),
        });
    },
    Gh = function () {
        const e = df(),
            [t, n] = E.useState(!1),
            [r, l] = E.useState(Uh),
            [o, i] = E.useState("Copiado com sucesso!"),
            [u, a] = E.useState("SuperGeeks"),
            s = function () {
                e("/");
            },
            m = function () {
                const p = Ah(r, u),
                    g = wo("teacher", r.teacher),
                    y = wo("weekday", r.weekday),
                    w = wo("class", r.class);
                if (!g || !y || !w) {
                    n(!0), i("Houve um erro ao salvar os dados na memória!");
                    return;
                }
                $h(p)
                    .then(function () {
                        n(!0), i("Copiado com sucesso!");
                    })
                    .catch(function () {
                        n(!0), i("Houve um erro ao copiar!");
                    });
            },
            h = function (p, g) {
                const y = Object.keys(Mr),
                    { value: w } = p.currentTarget;
                for (const x of y)
                    Mr[x].includes(w) &&
                        a(x === "Code Buddy" ? x : "SuperGeeks");
                l({ ...r, [g]: p.target.value });
            };
        return L.jsxs(L.Fragment, {
            children: [
                L.jsx(Zh, { message: o, show: t, setShow: n }),
                L.jsx("div", {
                    className: "text-center",
                    children: " Gerar relatório ",
                }),
                L.jsx(ko, {
                    name: "course",
                    value: r.course,
                    onChange: (p) => h(p, "course"),
                    children: Object.keys(Mr).map(function (p) {
                        const g = jr();
                        return L.jsx(
                            "optgroup",
                            {
                                label: p,
                                children: Mr[p].map(function (y) {
                                    const w = jr();
                                    return L.jsx("option", { children: y }, w);
                                }),
                            },
                            g,
                        );
                    }),
                }),
                L.jsx(ko, {
                    name: "class",
                    value: r.class,
                    onChange: (p) => h(p, "class"),
                    children: Dh.map(function (p) {
                        const g = jr();
                        return L.jsx("option", { children: p }, g);
                    }),
                }),
                L.jsx(ko, {
                    name: "weekday",
                    value: r.weekday,
                    onChange: (p) => h(p, "weekday"),
                    children: Bh.map(function (p) {
                        const g = jr();
                        return L.jsx("option", { value: p, children: p }, g);
                    }),
                }),
                L.jsx(Eo, {
                    lines: 1,
                    name: "content",
                    value: r.content,
                    placeholder: "Material de referência",
                    onChange: (p) => h(p, "content"),
                }),
                L.jsx(Eo, {
                    lines: 3,
                    name: "resume",
                    value: r.resume,
                    placeholder: "Resumo da aula",
                    onChange: (p) => h(p, "resume"),
                }),
                L.jsx(Eo, {
                    lines: 3,
                    name: "homework",
                    value: r.homework,
                    placeholder: "Diversão de casa",
                    onChange: (p) => h(p, "homework"),
                }),
                L.jsx(Qh, {
                    name: "teacher",
                    value: r.teacher,
                    placeholder: "Instrutor(a)",
                    onChange: (p) => h(p, "teacher"),
                }),
                L.jsxs("div", {
                    className: "flex gap-6",
                    children: [
                        L.jsx("button", {
                            onClick: s,
                            className:
                                "bg-gray-200 hover:bg-red-400 hover:text-white active:opacity-50 px-6 p-4 flex items-center gap-2 justify-center rounded-lg transition-all",
                            children: "Voltar",
                        }),
                        L.jsxs("button", {
                            onClick: m,
                            className:
                                "bg-gray-200 hover:bg-red-400 hover:text-white active:opacity-50 p-4 flex items-center gap-2 justify-center rounded-lg transition-all flex-1",
                            children: [
                                L.jsx(Sf, { size: 20 }),
                                L.jsx("span", { children: " Copiar " }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    Yh = function () {
        return L.jsx(Z0, {
            children: L.jsxs(V0, {
                children: [
                    L.jsx(Kr, { index: !0, path: "/", element: L.jsx(jh, {}) }),
                    L.jsx(Kr, { path: "/report", element: L.jsx(Gh, {}) }),
                    L.jsx(Kr, { path: "/feedback", element: L.jsx(Mh, {}) }),
                ],
            }),
        });
    },
    Xh = function () {
        return L.jsxs(L.Fragment, {
            children: [L.jsx(Wh, {}), L.jsx(Kh, { children: L.jsx(Yh, {}) })],
        });
    },
    Jh = document.getElementById("root"),
    qh = nf(Jh);
qh.render(L.jsx(Xh, {}));
